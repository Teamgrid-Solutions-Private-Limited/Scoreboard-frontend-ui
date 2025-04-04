import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, FormControl, InputLabel, Select, Menu, MenuItem, TextField, Typography, Stack, Grid } from "@mui/material";
import { useState } from "react";
import TopBar from "./TopBar";
import AppHeaderBar from "./AppHeaderBar";
import SenatorTopImg from "./SenatorTopImg";
const columns = [
  {
    field: "senator", headerName: "Senator", width: 410, renderCell: (params) => (
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
  { field: "state", headerName: "State", width: 300 },
  { field: "party", headerName: "Party", width: 150 },
  { field: "rating", headerName: "Rating", width: 130 },
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
      <Box sx={{ display: "flex" }}>

        <TopBar />
        <AppHeaderBar />
        <Box
          component="main"
          sx={() => ({
            flexGrow: 1,
            overflow: "auto",
            backgroundColor: "#F5F9FA",
            // optional, to visualize the area
            // backgroundColor: "#d6d7e2 ", // optional, to visualize the area
          })}
        >

          <Box sx={{
            pt: { xs: "10px", md: '183px' }, // <-- Adds space below the fixed header (adjust height as needed)
            // mx: 4,
            // pb: 8,
            // width: "100%"
          }}>
            <SenatorTopImg />
          </Box>
          <Stack
            spacing={3}
            sx={{
              alignItems: "center",
              mx: 2.5,
              justifyContent: "center",
              paddingX: "237px",
              width: "100%",
              // pb: 5,
              mt: { xs: 8, md: -2 },
            }}
          >

            <Box sx={{ width: "100%" }}>
              <Typography component="h2" variant="h6" sx={{ mb: 2, fontSize: "54px", fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: "#66625c" }}>
                Senate
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "left", marginBottom: 2, flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <Typography sx={{ fontSize: "14px" }}>Show</Typography>
                  <FormControl size="small">
                    <Select value={pageSize} onChange={(e) => setPageSize(e.target.value)} size="small" sx={{ boxSizing: "border-box", borderRadius: "2px", fontSize: "14px", p: "1px", m: "1px" }}>
                      {[5, 10, 25, 100].map((size) => (
                        <MenuItem key={size} value={size}>
                          {size}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Typography sx={{ fontSize: "14px", paddingLeft: "4px" }}>entries</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Typography sx={{ fontSize: "14px", paddingRight: "4px", paddingLeft: "612px" }}>Search:</Typography>
                  <TextField
                    variant="outlined"
                    // size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "2px",
                        height: "46px",
                        width: "200px",
                      }
                    }}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Box>
              </Box>
              <Grid container spacing={2} columns={12} >
                <Grid item xs={12} lg={12}>
                  <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    pageSize={pageSize}
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    disableSelectionOnClick
                    sx={{
                      width: "100%",
                      overflowX: "auto",
                      "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "rgba(28, 144, 44, 0.9)", // Transparent Blue
                        fontSize: "16px",
                        fontWeight: "bold",
                      },
                      "& .MuiDataGrid-columnHeaderTitle": {
                        color: "#0056b3", // Darker blue text for contrast
                      },
                      "& .MuiDataGrid-root": {
                        border: "1px solid #ddd", // Optional border
                      },
                    }}
                  />

                </Grid>
              </Grid>

            </Box>
            {/* //</Box> */}
            {/* <Stack >

    </Stack>
    <Box  sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 ,paddingLeft:"227px", width:"106%"}}>
         <Typography sx={{fontSize:"54px", fontFamily:'"Helvetica Neue", Helvetica, Arial, sans-serif', color:"#66625c"}}>  Senate </Typography> 
         </Box> */}
            {/* <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 ,paddingLeft:"227px", width:"106%",}}>
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
       // size="small"
    
      sx={{
        "& .MuiOutlinedInput-root":{
         borderRadius:"2px",
          height:"46px",
          width:"200px",
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
     </Box> */}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Scorecard;