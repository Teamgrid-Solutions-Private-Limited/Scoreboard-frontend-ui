import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, FormControl, InputLabel, Select, Menu, MenuItem, TextField, Typography, Stack, Grid, Button } from "@mui/material";
import { useState } from "react";
import TopBar from "./TopBar";
import AppHeaderBar from "./AppHeaderBar";
import SenatorTopImg from "./SenatorTopImg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from "./Footer";
import RightStickyTab from "./RightStickyTab";
import { BorderBottom } from "@mui/icons-material";
import { Link, } from "react-router-dom";
import { getAllSenators } from "../../redux/slice/SenatorSlice";
import { useDispatch, useSelector } from "react-redux";

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
    field: "name", headerName: "Senator", width: 410, renderCell: (params) => (
      <Link
        to={`/senator/${params.row._id}`}>
        <span sx={{
          color: params.row.party === "Republican" ? "red" :
            params.row.party === "Democrat" ? "blue" : "gray",
          fontWeight: params.row.party === "Republican" ? "bold" : "normal",
          textDecoration: params.row.party === "Independent" ? "line-through" : "none"
        }}>
          {params.value}
        </span>
      </Link>
    )
  },
  { field: "state", headerName: "State", width: 300 },
  { field: "party", headerName: "Party", width: 150 },
  { field: "rating", headerName: "Rating", width: 130 },
];

const Scorecard = () => {
  const [pageSize, setPageSize] = useState(5);
  const [search, setSearch] = useState("");
  const [houseSearch, setHouseSearch] = useState("")
  const [senatePage, setSenatePage] = useState(0);
  const [housePage, setHousePage] = useState(0);
  const dispatch=useDispatch();
  const {senators,loading}=useSelector((state)=>state.senator)

  useEffect(()=>{
    dispatch(getAllSenators())
console.log("dispatch Senator",dispatch(getAllSenators())
)
  },[dispatch])

  const filteredRows = senators.filter((senator) =>
    senator.name.toLowerCase().includes(search.toLowerCase())
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
        <RightStickyTab />
        <Box
          component="main"
          sx={() => ({
            // flexGrow: 1,
            // flexGrow: 1,
            overflowX: "hidden",
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
                  getRowId={(row) => row._id}
                  disableSelectionOnClick
                  hideFooter
                  rowHeight={38}
                  sx={{
                    overflow: "hidden",
                    // Custom header row height and background color
                    "& .MuiDataGrid-columnHeaders": {
                      color: "black",
                      overflow: "hidden",
                      "& .MuiDataGrid-scrollbar MuiDataGrid-scrollbar--horizontal": {
                        overflowX: "none",
                      }
                      ,
                      "& .MuiDataGrid-row--borderBottom": {
                        backgroundColor: '#d2e5f7',
                        // height:"39px",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        overflow: "hidden",
                      }
                    },
                    "& .MuiDataGrid-row": {
                      overflow: "hidden",
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", my: "35px !important" }}>
              <Typography sx={{ fontSize: "14px", mt: 1, fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", }}>
                Showing {senatePage * pageSize + 1} to {Math.min((senatePage + 1) * pageSize, filteredRows.length)} of {filteredRows.length} entries
              </Typography>
              <Box sx={{ display: "flex", mt: 1, border: "1px solid #ddd", margin: "20px 0px", borderRadius: "2px" }}>
                <Button onClick={() => setSenatePage((prev) => Math.max(prev - 1, 0))} 
                  sx={{
                    color: senatePage === 0 ? "#777777" : "#337ab7",
                    cursor: senatePage === 0 ? "not-allowed" : "pointer",
                    fontWeight: "400",
                    fontSize: "18px",
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                    borderRadius: 0,
                    paddingX: "13px",
                    // py:"6px",
                    lineHeight: "1.52857143",
                    textDecoration: 'none',
                    backgroundColor: " #fff",
                    textTransform: "none",
                    borderRight: "1px solid #ddd",
                    "&:hover": {
                      borderRadius: 0, // Keep it flat on hover too,
                      backgroundColor: "#f5f5f5",
                      borderRight: "1px solid #ddd"
                      // optional: change bg color on hover
                    },
                    "&:focus": {
                      outline: "none", // remove focus outline if needed
                      borderRadius: 0,
                    },

                  }}>
                  Previous</Button>
                {[...Array(Math.ceil(filteredRows.length / pageSize))].map((_, i) => (
                  <Button key={i} onClick={() => setSenatePage(i)}
                    sx={{
                      minWidth: "35px", //  Make them smaller
                      padding: "6px 10px",
                      borderRadius: 0,
                      backgroundColor: senatePage === i ? "#33a2e3" : "white",
                      color: senatePage === i ? "white" : "#33a2e3",
                      borderRight: "1px solid #ddd",
                      cursor: "pointer",
                      fontWeight: "400",
                      fontSize: "16px",
                      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                      lineHeight: "1.5",
                      textDecoration: 'none',
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: senatePage === i ? "#337ab7" : "#f5f5f5", // same as previous
                        borderRadius: 0,
                        borderRight: "1px solid #ddd"

                      },
                      "&:focus": {
                        outline: "none",
                        borderRadius: 0,
                        boxShadow: "none", // remove blue glow
                      },
                    }}
                  >
                    {i + 1}
                  </Button>
                ))}
                <Button onClick={() => setSenatePage((prev) => Math.min(prev + 1, Math.ceil(filteredRows.length / pageSize) - 1))} 
                // disabled={senatePage >= Math.ceil(filteredRows.length / pageSize) - 1}
                  sx={{
                    color: senatePage >= Math.ceil(filteredRows.length / pageSize) - 1 ? "#777777" : "#337ab7",
                    backgroundColor: "white",
                    cursor: senatePage >= Math.ceil(filteredRows.length / pageSize) - 1 ? "not-allowed" : "pointer",
                    fontWeight: "400",
                    fontSize: "18px",
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                    borderRadius: 0,
                    paddingX: "13px",
                    // py:"6px",
                    lineHeight: "1.52857143",
                    textDecoration: 'none',
                    textTransform: "none",
                    borderRight: "1px solid #ddd",
                    "&:hover": {
                      borderRadius: 0, // Keep it flat on hover too,
                      backgroundColor: "#f5f5f5",
                      borderRight: "1px solid #ddd"
                      // optional: change bg color on hover
                    },
                    "&:focus": {
                      outline: "none", // remove focus outline if needed
                      borderRadius: 0,
                    },
                  }}>Next</Button>
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
                      color: "black",
                      overflow: "hidden",
                      "& .MuiDataGrid-row--borderBottom": {
                        backgroundColor: '#d2e5f7',
                        // height:"39px",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        overflow: "hidden"
                      }
                      ,
                   
                    }
                  }}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "40px !important" }}>
              <Typography sx={{ fontSize: "14px", mt: 1, fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", color: "#333" }}>
                Showing {housePage * pageSize + 1} to {Math.min((housePage + 1) * pageSize, houseFilteredRows.length)} of {houseFilteredRows.length} entries
              </Typography>
              <Box sx={{ display: "flex", mt: 1, border: "1px solid #ddd", margin: "20px 0px", borderRadius: "2px" }}>
                <Button onClick={() => setHousePage((prev) => Math.max(prev - 1, 0))} 
                // disabled={housePage === 0}
                  sx={{
                    color: housePage === 0 ? "#777" : "#337ab7",
                    backgroundColor: "white",
                    borderRight: "1px solid #ddd",
                    cursor: housePage === 0 ? "not-allowed" : "pointer",
                    fontWeight: "400",
                    fontSize: "18px",
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                    borderRadius: 0,
                    paddingX: "13px",
                    //  py:"6px",
                    lineHeight: "1.52857143",
                    textDecoration: 'none',
                    textTransform: "none",
                    "&:hover": {
                      borderRadius: 0, // Keep it flat on hover too,
                      backgroundColor: "#f5f5f5",
                      borderRight: "1px solid #ddd"
                      // optional: change bg color on hover
                    },
                    "&:focus": {
                      outline: "none", // remove focus outline if needed
                      borderRadius: 0,
                    },

                  }}>Previous</Button>
                {[...Array(Math.ceil(houseFilteredRows.length / pageSize))].map((_, i) => (
                  <Button key={i} onClick={() => setHousePage(i)}
                   sx={{
                    backgroundColor: housePage === i ? "#33a2e3" : "white", color: housePage === i ? "white" : "#33a2e3",
                    minWidth: "35px", //  Make them smaller
                    padding: "6px 10px",
                    borderRadius: 0,
                    borderRight: "1px solid #ddd",
                    cursor: "pointer",
                    fontWeight: "400",
                    fontSize: "16px",
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                    lineHeight: "1.5",
                    textDecoration: 'none',
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: housePage === i ? "#337ab7" : "#f5f5f5", // same as previous
                      borderRadius: 0,
                      borderRight: "1px solid #ddd"
                    },
                    "&:focus": {
                      outline: "none",
                      borderRadius: 0,
                      boxShadow: "none", // remove blue glow
                    },
                    
                  }}>
                    {i + 1}
                  </Button>
                ))}
                <Button onClick={() => setHousePage((prev) => Math.min(prev + 1, Math.ceil(houseFilteredRows.length / pageSize) - 1))} 
                // disabled={housePage >= Math.ceil(houseFilteredRows.length / pageSize) - 1}
                  sx={{
                    color: housePage >= Math.ceil(houseFilteredRows.length / pageSize) - 1 ? "#777" : "#337ab7",
                    backgroundColor: "white",
                    cursor: housePage >= Math.ceil(houseFilteredRows.length / pageSize) - 1 ? "not-allowed" : "pointer",
                    fontWeight: "400",
                    fontSize: "18px",
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                    borderRadius: 0,
                    // paddingX: "13px",
                    //  py:"6px",
                    lineHeight: "1.52857143",
                    textDecoration: 'none',
                    textTransform: "none",
                    "&:hover": {
                      borderRadius: 0, // Keep it flat on hover too,
                      backgroundColor: "#f5f5f5",
                      // optional: change bg color on hover
                    },
                    "&:focus": {
                      outline: "none", // remove focus outline if needed
                      borderRadius: 0,
                    },
                  }}>Next</Button>
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
