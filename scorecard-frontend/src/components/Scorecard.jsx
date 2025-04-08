import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, FormControl, InputLabel, Select, Menu, MenuItem, TextField, Typography, Stack, Grid, Button } from "@mui/material";
import { useState } from "react";
import TopBar from "./TopBar";
import AppHeaderBar from "./AppHeaderBar";
import SenatorTopImg from "./SenatorTopImg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from "./Footer";
import RightStickyTab from "./RightStickyTab";

//house column n rows
const houseColumns = [
  {
    field: "representative",
    headerName: "Representative",
    width: 410,
    renderCell: (params) => (
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
  { field: "district", headerName: "District", width: 300 },
  {
    field: "party",
    headerName: "Party",
    width: 150,
    renderCell: (params) => (
      <span style={{
        color: params.value === "Republican" ? "red" :
          params.value === "Democrat" ? "blue" : "gray",
        fontWeight: params.value === "Republican" ? "bold" : "normal",
        textDecoration: params.value === "Independent" ? "line-through" : "none"
      }}>
        {params.value}
      </span>
    )
  },
  { field: "rating", headerName: "Rating", width: 130 },
];

const houseRows = [
  { id: 1, representative: "Nancy Pelosi", district: "CA-12", party: "Democrat", rating: "F" },
  { id: 2, representative: "Kevin McCarthy", district: "CA-20", party: "Republican", rating: "A+" },
  { id: 3, representative: "Alex Mooney", district: "WV-2", party: "Republican", rating: "A+" },
  { id: 4, representative: "Cori Bush", district: "MO-1", party: "Democrat", rating: "F" },
  { id: 5, representative: "Bernie Smith", district: "TX-15", party: "Independent", rating: "C" },
];


//senator column n rows
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
  const [houseSearch, setHouseSearch] = useState("")
  const [senatePage, setSenatePage] = useState(0);
  const [housePage, setHousePage] = useState(0);


  const filteredRows = rows.filter((row) =>
    row.senator.toLowerCase().includes(search.toLowerCase())
  );
  const houseFilteredRows = houseRows.filter((row) =>
    row.representative.toLowerCase().includes(houseSearch.toLowerCase()))
  const paginatedSenateRows = filteredRows.slice(senatePage * pageSize, (senatePage + 1) * pageSize);
  const paginatedHouseRows = houseFilteredRows.slice(housePage * pageSize, (housePage + 1) * pageSize);
  return (
    <>
      <Box sx={{ display: "flex" }}>

        <TopBar />
        <AppHeaderBar />
        <RightStickyTab/>
        
        <Box
          component="main"
          sx={() => ({
            // flexGrow: 1,
            // flexGrow: 1,
            overflowX: "hidden",
            // overflowY: "auto",
            // backgroundColor: "#F5F9FA",
            // optional, to visualize the area
            // backgroundColor: "#d6d7e2 ", // optional, to visualize the area
          })}
        >

          <Box sx={{
            pt: { xs: "10px", md: '180px' }, // <-- Adds space below the fixed header (adjust height as needed)
            // mx: 4,
            // pb: 8,
            // width: "100%"
          }}>
            <SenatorTopImg />
          </Box>
          <Stack
            spacing={3}
            sx={{
              // alignItems: "start",
              mx: 31.7,
              justifyContent: "center",
              paddingX: "4px",
              width: "66%",
              overflowX: "hidden",
              pb: 5,
              mt: { xs: 8, md: -2 },
            }}
          >

            {/* <Box sx={{ width: "80%" }}> */}
            <Typography component="h2" variant="h6" sx={{ fontSize: "54px", fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: "#66625c", mx: "1px !important" }}>
              Senate
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mt: "0  !important" }}>
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
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontSize: "14px", paddingRight: "4px", }}>Search:</Typography>
                <TextField
                  variant="outlined"
                  // size="small"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "2px",
                      height: "45px",
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
                  rows={paginatedSenateRows}
                  columns={columns}
                  pageSize={pageSize}
                  rowsPerPageOptions={[5, 10, 25, 100]}
                  disableSelectionOnClick
                  hideFooter
                  rowHeight={38}
                  headerHeight={40}
                  sx={{
                    // Custom header row height and background color
                    "& .MuiDataGrid-columnHeaders": {

                      backgroundColor: "grey !important",
                      color: "red",
                    },
                    "& .MuiDataGrid-row": {
                      // minHeight: "70px !important",
                      // height: "90px !important",
                      // alignItems: "center",
                      //  bgcolor:"grey"
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", my: "35px !important" }}>
              <Typography sx={{ fontSize: "14px", mt: 1, fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", }}>
                Showing {senatePage * pageSize + 1} to {Math.min((senatePage + 1) * pageSize, filteredRows.length)} of {filteredRows.length} entries
              </Typography>
              <Box sx={{ display: "flex", mt: 1, border: "1px solid #ddd", }}>
                <button onClick={() => setSenatePage((prev) => Math.max(prev - 1, 0))} disabled={senatePage === 0}
                  style={{
                    color: senatePage === 0 ? "#ccc" : "#337ab7",
                    backgroundColor: "white",
                    borderRight: "1px solid #ddd",
                    cursor: senatePage === 0 ? "not-allowed" : "pointer",
                    fontWeight: "bold"
                  }}>
                  Previous</button>
                {[...Array(Math.ceil(filteredRows.length / pageSize))].map((_, i) => (
                  <button key={i} onClick={() => setSenatePage(i)} style={{
                    backgroundColor: senatePage === i ? "#337ab7" : "white", color: senatePage === i ? "white" : "#337ab7",
                    borderRight: "1px solid rgb(224, 230, 236)",
                    fontWeight: "bold",

                  }}>
                    {i + 1}
                  </button>
                ))}
                <button onClick={() => setSenatePage((prev) => Math.min(prev + 1, Math.ceil(filteredRows.length / pageSize) - 1))} disabled={senatePage >= Math.ceil(filteredRows.length / pageSize) - 1} style={{
                  color: senatePage >= Math.ceil(filteredRows.length / pageSize) - 1 ? "#ccc" : "#337ab7",
                  backgroundColor: "white",
                  cursor: senatePage >= Math.ceil(filteredRows.length / pageSize) - 1 ? "not-allowed" : "pointer",
                  fontWeight: "bold"
                }}>Next</button>
              </Box>
            </Box>

            {/* </Box> */}
            {/* //House Dartagrid */}
            <Typography component="h2" variant="h5" sx={{ fontSize: "54px", fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: "#66625c" }}>
              House
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mt: "0  !important" }}>
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
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontSize: "14px", paddingRight: "4px", }}>Search:</Typography>
                <TextField
                  variant="outlined"
                  // size="small"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "2px",
                      height: "45px",
                      width: "200px",
                    }
                  }}
                  onChange={(e) => setHouseSearch(e.target.value)}
                />
              </Box>
            </Box>
            <Grid container spacing={2} columns={12} >
              <Grid item xs={12} lg={12}>
                <DataGrid
                  rows={paginatedHouseRows}
                  columns={houseColumns}
                  pageSize={pageSize}
                  rowsPerPageOptions={[10, 25, 100]}
                  disableSelectionOnClick
                  hideFooter
                  rowHeight={38}
                  sx={{
                    minWidth: "20%",
                    boxSizing: "border-box",
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: "rgba(144, 74, 28, 0.9)", // Transparent Blue
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
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "40px !important" }}>
              <Typography sx={{ fontSize: "14px", mt: 1, fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", color: "#333" }}>
                Showing {housePage * pageSize + 1} to {Math.min((housePage + 1) * pageSize, houseFilteredRows.length)} of {houseFilteredRows.length} entries
              </Typography>
              <Box sx={{ display: "flex", mt: 1, border: "1px solid #ddd", }}>
                <button onClick={() => setHousePage((prev) => Math.max(prev - 1, 0))} disabled={housePage === 0}
                  style={{
                    color: housePage === 0 ? "#ccc" : "#337ab7",
                    backgroundColor: "white",
                    borderRight: "1px solid #ddd",
                    cursor: housePage === 0 ? "not-allowed" : "pointer",
                    fontWeight: "bold"
                  }}>Previous</button>
                {[...Array(Math.ceil(houseFilteredRows.length / pageSize))].map((_, i) => (
                  <button key={i} onClick={() => setHousePage(i)} style={{
                    backgroundColor: housePage === i ? "#337ab7" : "white", color: housePage === i ? "white" : "#337ab7",
                    borderRight: "1px solid rgb(224, 230, 236)",
                    fontWeight: "bold",
                  }}>
                    {i + 1}
                  </button>
                ))}
                <button onClick={() => setHousePage((prev) => Math.min(prev + 1, Math.ceil(houseFilteredRows.length / pageSize) - 1))} disabled={housePage >= Math.ceil(houseFilteredRows.length / pageSize) - 1}
                  sx={{
                    color: senatePage >= Math.ceil(houseFilteredRows.length / pageSize) - 1 ? "#ccc" : "#337ab7",
                    backgroundColor: "white",
                    cursor: senatePage >= Math.ceil(houseFilteredRows.length / pageSize) - 1 ? "not-allowed" : "pointer",
                    fontWeight: "bold"
                  }}>Next</button>
              </Box>
            </Box>

            <Box sx={{ display: "flex", }} >
              <Button
                endIcon={<span style={{ fontSize: "16px" }}>{">>"}</span>}
                sx={{
                  bgcolor: "#337ab7",
                  border: "1px solid #ccc",
                  color: " #fff",
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontSize: "14px",
                  lineHeight: " 1.22857143",
                  textTransform: "none",
                }}>  View Scorecards for Former Members</Button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%", mb: "30px !important" }}>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  textTransform: "none", padding: "17px 24px",
                  fontSize: " 16px",
                  color: "#8aae6b",
                  backgroundColor: "transparent",
                  borderRadius: "2em",
                  border: " 2px solid #8aae6b",
                  lineHeight: " 16px"
                }}>Give Now </Button>

            </Box>
          </Stack>
        </Box>
      </Box>
      <Footer />

    </>
  );
};

export default Scorecard;
