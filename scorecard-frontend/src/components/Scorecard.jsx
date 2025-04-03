import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box,FormControl,InputLabel,Select,Menu,MenuItem,TextField, Typography} from "@mui/material";
import { useState } from "react";
const columns = [
  { field: "senator", headerName: "Senator", width: 200, renderCell: (params) => (
      <span style={{ 
          color: params.row.party === "Republican" ? "red" : 
                 params.row.party === "Democrat" ? "blue" : "gray",
          fontWeight: params.row.party === "Republican" ? "bold" : "normal",
          textDecoration: params.row.party === "Independent" ? "line-through" : "none"
      }}>
        {params.value}
      </span>
    )
  },
  { field: "state", headerName: "State", width: 200 },
  { field: "party", headerName: "Party", width: 150 },
  { field: "rating", headerName: "Rating", width: 100 },
];
const rows = [
  { id: 1, senator: "Alex Padilla", state: "California", party: "Democrat", rating: "F" },
  { id: 2, senator: "Amy Klobuchar", state: "Minnesota", party: "Democrat", rating: "F" },
  { id: 3, senator: "Angus King", state: "Maine", party: "Independent", rating: "F" },
  { id: 4, senator: "Ben Cardin", state: "Maryland", party: "Democrat", rating: "F" },
  { id: 5, senator: "Ben Ray Lujan", state: "New Mexico", party: "Democrat", rating: "F" },
  { id: 6, senator: "Bernie Sanders", state: "Vermont", party: "Independent", rating: "F" },
  { id: 7, senator: "Bill Cassidy", state: "Louisiana", party: "Republican", rating: "A+" },
  { id: 8, senator: "Bill Hagerty", state: "Tennessee", party: "Republican", rating: "A+" },
  { id: 9, senator: "Bob Casey", state: "Pennsylvania", party: "Democrat", rating: "F" },
  { id: 10, senator: "Bob Menendez", state: "New Jersey", party: "Democrat", rating: "F" },
];
const Scorecard = () => {
  const [pageSize, setPageSize] = useState(5);
  const [search, setSearch] = useState("");
  const filteredRows = rows.filter((row) =>
    row.senator.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
    <Box  sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 ,paddingLeft:"227px", width:"106%"}}>
         <Typography sx={{fontSize:"54px", fontFamily:'"Helvetica Neue", Helvetica, Arial, sans-serif', color:"#66625c"}}>  Senate </Typography> 
         </Box>
    <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 ,paddingLeft:"227px", width:"106%",}}>
    <Box sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
    <Typography sx={{ fontSize:"14px"}}>Show</Typography>
    <FormControl >
      <Select value={pageSize} onChange={(e) => setPageSize(e.target.value)} size="small" sx={{boxSizing:"border-box", borderRadius:"2px",fontSize:"14px", p:"1px", m:"1px"}}>
        {[5, 10, 25, 100].map((size) => (
          <MenuItem key={size} value={size}>
            {size}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <Typography sx={{ fontSize:"14px", paddingLeft:"4px"}}>entries</Typography>

    </Box>
    <Box sx={{ display:"flex", justifyContent:"end" , alignItems:"center"}}>
    <Typography sx={{ fontSize:"14px",paddingRight:"8px"}}>Search:</Typography>
    <TextField
      variant="outlined"
      size="small"
    
      sx={{
        "& .MuiOutlinedInput-root":{
         borderRadius:"2px"
        }
       }}
      onChange={(e) => setSearch(e.target.value)}
    />
    </Box>
  </Box>

    <Box sx={{ height: 400, width: "106%" ,display:"flex", justifyContent:"center", paddingLeft:"225px" }}>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 25, 100]}
        disableSelectionOnClick
      />
    </Box>
    </>
  );
};

export default Scorecard;