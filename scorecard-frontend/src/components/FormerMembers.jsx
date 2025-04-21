import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Box, FormControl, InputLabel, Select, Menu, MenuItem, TextField, Typography, Stack, Grid, Button } from "@mui/material";
import { useState } from "react";
import TopBar from "../globalComponents/TopBar";
import AppHeaderBar from "../globalComponents/AppHeaderBar";
import SenatorTopImg from "../globalComponents/SenatorTopImg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from "../globalComponents/Footer";
import RightStickyTab from "../globalComponents/RightStickyTab";
import { BorderBottom } from "@mui/icons-material";
import { Link, } from "react-router-dom";
import { getAllSenators } from "../redux/action-reducer/senatorSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllSenatorData } from "../redux/action-reducer/senatorTermSlice";
import Pagination from "../globalComponents/Pagination";
import {  ThemeProvider } from '@mui/material/styles';
// import {dataG}
import { dataGridTheme } from "../theme/dataGrid";
import MainGrid from "../components/MainGrid";
import { getAllHouses } from "../redux/action-reducer/houseSlice";
import { getAllHouseData } from "../redux/action-reducer/houseTermSlice";
import House from "../components/House";
//house column n rows

const FormerMembers = () => {
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");
  const [houseSearch, setHouseSearch] = useState("")
  const [senatePage, setSenatePage] = useState(0);
  const [housePage, setHousePage] = useState(0);
  const dispatch = useDispatch();
  const { senators } = useSelector((state) => state.senator)
  const { senatorData } = useSelector((state) => state.senatorData)
  const {houses}=useSelector((state)=>state.house)
  const {houseData}=useSelector((state)=>state.houseData)
  const [mergedSenators, setMergedSenators] = useState([]);
  const [mergedHouses, setMergedHouses] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(getAllSenators())
    dispatch(getAllSenatorData())
    dispatch(getAllHouses())
    dispatch(getAllHouseData())
  }, [dispatch])

  useEffect(() => {
    if (senatorData && senators) {
      // console.log("senators", senators);
      // console.log("senatorData", senatorData)
      console.log("Matching senators with senatorData...");
      const merged = senators.map((senator) => {
        const match = senatorData.find(
          (data) => {
            const isMatch = data.senateId === senator._id;
            
            return isMatch;
          }
        );

        return {
          ...senator,
          rating: match ? match.rating : "N/A",
        };
      });

    //   console.log("Merged Senators:", merged);
      setMergedSenators(merged);
    }

  }, [senators, senatorData]);

  useEffect(()=>{
    if(houses&&houseData){
      console.log("checking for matched house and houseData by id")
      const merged=houses.map((house)=>{
        const match=houseData.find(
          (data)=>{
            const isMatched=data.houseId===house._id
            
            return isMatched
        })
          return {
            ...house,
            rating:match?match.rating:"N/A"
          }
      })
    //   console.log("Merged House",merged)
      return setMergedHouses(merged)
    }

  },[houses,houseData])

  const filteredRows = mergedSenators.filter((senator) =>
    senator.name.toLowerCase().includes(search.toLowerCase()) &&
  senator.status==="Former" 
  );
  console.log("fliteredRows",filteredRows)

  const houseFilteredRows =mergedHouses.filter((row) =>
    row.name.toLowerCase().includes(houseSearch.toLowerCase()) &&
  row.status === 'Former'
)
  // const paginatedSenateRows = filteredRows.slice(senatePage * pageSize, (senatePage + 1) * pageSize);
  // const paginatedHouseRows = houseFilteredRows.slice(housePage * pageSize, (housePage + 1) * pageSize);
  return (
    <ThemeProvider theme={dataGridTheme}>
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
            <Box sx={{height:"100%",overflow:"hidden"}}>
            <Grid container spacing={2} columns={12} >
              <Grid item xs={12} lg={12}>
                <MainGrid
                type="senator"
                  data={filteredRows}
                  page={senatePage}
                  pageSize={pageSize}
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  rowsPerPageOptions={[10, 20, 50]}

                />
              </Grid>
            </Grid>
            </Box>
            <Box sx={{ width: "100%", justifyContent: "space-between" }}>
              <Pagination
                currentPage={senatePage}
                totalItems={filteredRows.length}
                itemsPerPage={pageSize}
                onPageChange={setSenatePage}
              />
            </Box>
          
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
                <MainGrid
                type="representative"
                data={houseFilteredRows}
                  pageSize={pageSize}
                  rowsPerPageOptions={[10, 25, 100]}
                  page={housePage}
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}                
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
            <Box sx={{ width: "100%", justifyContent: "space-between" }}>
              <Pagination
                currentPage={housePage}
                totalItems={houseFilteredRows.length}
                itemsPerPage={pageSize}
                onPageChange={setHousePage}
              />
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
                }}>  View Scorecards for Current Members</Button>
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

    </ThemeProvider>
  );
};

export default FormerMembers;
