import React, { useEffect, useState } from "react";
import {
  Paper,
  Tabs,
  Tab,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
  Button,
} from "@mui/material";
import TopBar from "../globalComponents/TopBar";
import AppHeaderBar from "../globalComponents/AppHeaderBar";
import SenatorTopImg from "../globalComponents/SenatorTopImg";
import Footer from "../globalComponents/Footer";
import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getHouseDataById } from "../redux/action-reducer/houseTermSlice"; 

function Representative() {
  const [activeTab, setActiveTab] = useState("118th Congress"); 
  const { id } = useParams();
  const dispatch = useDispatch();
  const houseData = useSelector((state) => state?.houseData || {});
  const { currentHouse, loading, error } = houseData;

  useEffect(() => {
    dispatch(getHouseDataById(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log("data", houseData);
  }, [houseData]);

  const sessions = {
    "116th Congress": [],
    "117th Congress": [],
    "118th Congress": [],
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <TopBar />
      <AppHeaderBar />
      <SenatorTopImg />
      <Box width={1000} sx={{ pl: 32, color: "#66625C" }}>
        {/* Tabs */}
        <Paper elevation={0} sx={{ mb: 3, mt: 1 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            TabIndicatorProps={{ style: { display: "none" } }}
            sx={{ backgroundColor: "#fff", borderBottom: "1px solid black" }}
          >
            {Object.keys(sessions).map((session) => (
              <Tab
                key={session}
                label={session}
                value={session}
                sx={{
                  backgroundColor: activeTab === session ? "#90CAF9" : "white",
                  color: "black",
                  fontWeight: activeTab === session ? "bold" : "normal",
                  padding: "12px 16px",
                  "&.Mui-selected": {
                    backgroundColor: "#90CAF9",
                    fontWeight: "bold",
                  },
                  "&:hover": { backgroundColor: "#E3F2FD" },
                }}
              />
            ))}
          </Tabs>
        </Paper>

        {/* Header */}
        <Typography variant="h4" fontSize={54}>
          {currentHouse ? `${currentHouse.name} (${activeTab})` : "Loading..."}
        </Typography>

        {/* Profile Info */}
        <Grid sx={{ display: "flex", justifyContent: "start", mt: 4 }}>
          <Box
            sx={{
              width: 190,
              height: 190,
              borderRadius: "50%",
              backgroundColor: "#1976d2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 180,
                height: 180,
                borderRadius: "50%",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {currentHouse?.profileImage ? (
                <Box
                  component="img"
                  src={currentHouse.profileImage}
                  alt="Profile"
                  sx={{
                    width: 170,
                    height: 170,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <Typography>Loading Image...</Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Typography variant="h4" fontSize={36} sx={{ ml: 7, mt: 7 }}>
              {currentHouse ? currentHouse.name : "Loading..."}
            </Typography>
            <Typography variant="h5" fontSize={14} sx={{ ml: 7, mt: 1 }}>
              {currentHouse ? `${currentHouse.district} (${currentHouse.party})` : "Loading..."}
            </Typography>
          </Box>
          <Box
            sx={{
              height: 130,
              width: 140,
              ml: 40,
              mt: 4,
              border: "2px solid black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography fontSize={14}>SBA Rating:</Typography>
            <Typography
              variant="h4"
              fontSize={70}
              sx={{
                fontWeight: "bold",
                lineHeight: 1,
                fontFamily: '"freight-text-pro", serif',
              }}
            >
              {currentHouse ? currentHouse.sbaRating : "Loading..."}
            </Typography>
          </Box>
        </Grid>

        <Typography sx={{ mt: 2, fontSize: 14 }}>
          {currentHouse
            ? currentHouse.biography
            : "Loading..."}
        </Typography>

        {/* Scored Votes */}
        <Box>
          <Typography sx={{ mt: 2, fontSize: 54 }}>Scored Votes</Typography>
          <Table sx={{ borderCollapse: "collapse", width: "100%" }}>
            <TableHead>
              <TableRow>
                {["Date", "Vote", "Score"].map((text) => (
                  <TableCell
                    key={text}
                    sx={{
                      fontWeight: "bold",
                      border: "1px solid #ccc",
                      backgroundColor: "#cce5ff",
                      ...(text === "Score" && { textAlign: "center" }),
                    }}
                  >
                    {text}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {currentHouse?.votes?.map((vote, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f5faff" : "#ffffff",
                  }}
                >
                  <TableCell sx={{ border: "1px solid #ccc", fontSize: 14 }}>
                    {vote.date}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc", p: 1 }}>
                    <Typography fontWeight="bold">{vote.title}</Typography>
                    <Typography variant="body2">{vote.description}</Typography>
                    <Box mt={1} display="flex" gap={1}>
                      <Button size="small" variant="contained" sx={{ fontSize: 12 }}>
                        ROLL CALL
                      </Button>
                      <Button size="small" variant="contained" sx={{ fontSize: 12 }}>
                        READ MORE
                      </Button>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid #ccc",
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                  >
                    <CloseIcon sx={{ color: "red", fontSize: 36 }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>

        {/* Tracked Activity */}
        <Box mb={2}>
          <Typography sx={{ mt: 2, fontSize: 54 }}>
            Tracked Activity: Bills Cosponsored & Letters Cosigned
          </Typography>
          <Typography fontSize={14}>As of January, 2024</Typography>
          <Table sx={{ borderCollapse: "collapse", width: "100%" }}>
            <TableHead>
              <TableRow>
                {["Date", "Vote", "Score"].map((text) => (
                  <TableCell
                    key={text}
                    sx={{
                      fontWeight: "bold",
                      border: "1px solid #ccc",
                      backgroundColor: "#cce5ff",
                      ...(text === "Score" && { textAlign: "center" }),
                    }}
                  >
                    {text}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {currentHouse?.activities?.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f5faff" : "#ffffff",
                  }}
                >
                  <TableCell sx={{ border: "1px solid #ccc", fontSize: 14 }}>
                    {item.date}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc", p: 1 }}>
                    <Typography fontWeight="bold">{item.title}</Typography>
                    <Typography variant="body2">{item.description}</Typography>
                    <Box mt={1}>
                      <Button size="small" variant="contained" sx={{ fontSize: 12 }}>
                        READ MORE
                      </Button>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid #ccc",
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                  >
                    <CloseIcon sx={{ color: "red", fontSize: 36 }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Representative;