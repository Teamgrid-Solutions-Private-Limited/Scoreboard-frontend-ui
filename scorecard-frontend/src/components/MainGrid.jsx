import React from "react";
import { Box, Grid } from "@mui/material";
import CustomizedDataGrid from "./CustomizedDataGrid";

const getGridTitle = (type) => {
  const titles = {
    bills: "All Bills",
    senator: "All Senators",
    representative: "All Representatives"
  };
  return titles[type] || "All Items";
};

export default function MainGrid({ 
  type, 
  data, 
  loading, 
  onEdit, 
  onDelete, 
  pageSize, 
  page 
}) {
  const paginatedData = React.useMemo(() => {
    return data.slice(page * pageSize, (page + 1) * pageSize);
  }, [data, page, pageSize]);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomizedDataGrid
            type={type}
            rows={paginatedData}
            loading={loading}
            onEdit={onEdit}
            onDelete={onDelete}
            pageSize={pageSize}
          />
        </Grid>
      </Grid>
    </Box>
  );
}