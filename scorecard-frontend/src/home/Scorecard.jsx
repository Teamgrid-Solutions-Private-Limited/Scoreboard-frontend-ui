import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, FormControl, InputLabel, Select, Menu, MenuItem, TextField, Typography, Stack, Grid, Button } from "@mui/material";
import { useState } from "react";
import TopBar from "../reusableComponents/TopBar";
import AppHeaderBar from "../reusableComponents/AppHeaderBar";
import SenatorTopImg from "../reusableComponents/SenatorTopImg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from "../reusableComponents/Footer";
import RightStickyTab from "../reusableComponents/RightStickyTab";
import { BorderBottom } from "@mui/icons-material";
import { Link, } from "react-router-dom";
import { getAllSenators } from "../redux/action-reducer/senatorSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllSenatorData } from "../redux/action-reducer/senatorTermSlice";
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

const Scorecard = () => {
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");
  const [houseSearch, setHouseSearch] = useState("")
  const [senatePage, setSenatePage] = useState(0);
  const [housePage, setHousePage] = useState(0);
  const dispatch = useDispatch();
  const { senators, loading } = useSelector((state) => state.senator)
  const {senatorData} =useSelector((state)=>state.senatorData)
  const [mergedSenators, setMergedSenators] = useState([]);

  //Pagination 
  const getPaginationItems = (currentPage, totalPages) => {
    const items = [];
    // Always show first page
    items.push(1);
    if (totalPages <= 7) {
      // Show all pages if total pages is 7 or less
      for (let i = 2; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      // Show first 3 pages
      if (currentPage <= 4) {
        for (let i = 2; i <= 5; i++) {
          items.push(i);
        }
        items.push('...');
      }
      // Show middle pages
      else if (currentPage > 4 && currentPage < totalPages - 3) {
        items.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          items.push(i);
        }
        items.push('...');
      }
      // Show last pages
      else {
        items.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          items.push(i);
        }
      }
      // Always show last page if not already included
      if (!items.includes(totalPages)) {
        items.push(totalPages);
      }
    }
    return items;
  };
  //get colour effect 
  const getBorderColor = (party) => {
    if (!party) return "gray";
    const lowerParty = party.toLowerCase();
    if (lowerParty === "republican") return "#dd3333";
    if (lowerParty === "democrat") return "#1e73be";
    return "gray"; // Default for independent or unknown
  };

  //senator column n rows
  const columns = [
    {
      field: "name", headerName: "Senator", minWidth: 400, minHeight: 200, renderCell: (params) => (
        <Link
          to={`/senator/${params.row._id}`}>
          <Typography sx={{
            color: getBorderColor(params.row.party),
            fontWeight: "600",
            boxSizing: "border-box",
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize: "14px",
            py: "8px",
            // lineHeight:"1.5rem"
            // textDecoration: params.row.party === "Independent" ? "line-through" : "none"
            "&:hover": {
              opacity: .6
            },

          }}>
            {params.row.name}
          </Typography>
        </Link>
      )
    },
    { field: "state", headerName: "State", minWidth: 300 },
    {
      field: "party", headerName: "Party", minWidth: 150,
      valueGetter: (params) => {
        if (!params) {
          return "N/A";
        }
        return (params.charAt(0).toUpperCase() + params.slice(1).toLowerCase()
        )
      }
    },
    {
      field: "rating",
      headerName: "Rating",
      minWidth: 130,
      renderCell: (params) => {
       return params.row.rating || "N/A";
      },
    }
  ];

  useEffect(() => {
    dispatch(getAllSenators())
dispatch(getAllSenatorData())
  }, [dispatch])

  useEffect(() => {
    if (senatorData && senators) {
      console.log("senators",senators);
      console.log("senatorData",senatorData)
      console.log("Matching senators with senatorData...");
      const merged = senators.map((senator) => {
        const match = senatorData.find(
          (data) => {
            const isMatch = data.senateId === senator._id;
            console.log(
              `Checking match:`,
            );
              `Match? ${isMatch}`
            return isMatch;
          }
        );
        
        return {
          ...senator,
          rating: match ? match.rating : "N/A",
        };
      });
  
      console.log("Merged Senators:", merged);
      setMergedSenators(merged);
    }
  }, [senators, senatorData]);
  
  const filteredRows = mergedSenators.filter((senator) =>
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
                  getRowId={(row) => row._id}
                  pageSize={pageSize}
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  rowsPerPageOptions={[10, 20, 50]}
                  pagination
                  disableSelectionOnClick
                  disableColumnFilter
                  disableColumnSelector
                  disableDensitySelector
                  disableColumnResize
                  disableRowSelectionOnClick
                  hideFooter
                  rowHeight={38}
                  sx={{
                    overflow: "hidden",
                    "& .MuiDataGrid-cell[data-field='name']": {
                      borderRight: "1px solid #e0e0e0",
                    },
                    "& .MuiDataGrid-cell[data-field='state']": {
                      borderRight: "1px solid #e0e0e0",
                    },
                    "& .MuiDataGrid-cell[data-field='party']": {
                      borderRight: "1px solid #e0e0e0",
                    },
                    "& .MuiDataGrid-columnHeader[data-field='name']": {
                      borderRight: "1px solid #e0e0e0",
                    },
                    "& .MuiDataGrid-columnHeader[data-field='state']": {
                      borderRight: "1px solid #e0e0e0",
                    },
                    "& .MuiDataGrid-columnHeader[data-field='party']": {
                      borderRight: "1px solid #e0e0e0",
                    },
                    // Custom header row height and background color
                    "& .MuiDataGrid-columnHeaders": {
                      color: "black",
                      overflow: "hidden",
                      "& .MuiDataGrid-columnHeaderTitle": {  // Fixed selector
                        fontWeight: "700 !important",
                        fontSize: "14px",
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                      },


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
                {getPaginationItems(senatePage + 1, Math.ceil(filteredRows.length / pageSize)).map((item, i) => (
                  item === '...' ? (
                    <Button
                      key={`ellipsis-${i}`}
                      disabled
                      sx={{
                        minWidth: "35px",
                        padding: "6px 10px",
                        borderRadius: 0,
                        borderRight: "1px solid #ddd",
                        cursor: "default",
                        fontWeight: "400",
                        fontSize: "16px",
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        lineHeight: "1.5",
                        textDecoration: 'none',
                        textTransform: "none",
                      }}
                    >
                      ...
                    </Button>
                  ) : (
                    <Button
                      key={item}
                      onClick={() => setSenatePage(item - 1)}
                      sx={{
                        minWidth: "35px",
                        padding: "6px 10px",
                        borderRadius: 0,
                        backgroundColor: senatePage === item - 1 ? "#33a2e3" : "white",
                        color: senatePage === item - 1 ? "white" : "#33a2e3",
                        borderRight: "1px solid #ddd",
                        cursor: "pointer",
                        fontWeight: "400",
                        fontSize: "16px",
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        lineHeight: "1.5",
                        textDecoration: 'none',
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: senatePage === item - 1 ? "#337ab7" : "#f5f5f5",
                          borderRadius: 0,
                          borderRight: "1px solid #ddd"
                        },
                        "&:focus": {
                          outline: "none",
                          borderRadius: 0,
                          boxShadow: "none",
                        },
                      }}
                    >
                      {item}
                    </Button>
                  )
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

                {getPaginationItems(housePage + 1, Math.ceil(houseFilteredRows.length / pageSize)).map((item, i) => (
                  item === '...' ? (
                    <Button
                      key={`ellipsis-${i}`}
                      disabled
                      sx={{
                        minWidth: "35px",
                        padding: "6px 10px",
                        borderRadius: 0,
                        borderRight: "1px solid #ddd",
                        cursor: "default",
                        fontWeight: "400",
                        fontSize: "16px",
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        lineHeight: "1.5",
                        textDecoration: 'none',
                        textTransform: "none",
                      }}
                    >
                      ...
                    </Button>
                  ) : (
                    <Button
                      key={item}
                      onClick={() => setHousePage(item - 1)}
                      sx={{
                        minWidth: "35px",
                        padding: "6px 10px",
                        borderRadius: 0,
                        backgroundColor: housePage === item - 1 ? "#33a2e3" : "white",
                        color: housePage === item - 1 ? "white" : "#33a2e3",
                        borderRight: "1px solid #ddd",
                        cursor: "pointer",
                        fontWeight: "400",
                        fontSize: "16px",
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        lineHeight: "1.5",
                        textDecoration: 'none',
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: housePage === item - 1 ? "#337ab7" : "#f5f5f5",
                          borderRadius: 0,
                          borderRight: "1px solid #ddd"
                        },
                        "&:focus": {
                          outline: "none",
                          borderRadius: 0,
                          boxShadow: "none",
                        },
                      }}
                    >
                      {item}
                    </Button>
                  )
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
