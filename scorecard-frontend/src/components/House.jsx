import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  
} from "@mui/material";
import TopBar from "../globalComponents/TopBar";
import AppHeaderBar from "../globalComponents/AppHeaderBar";
import Footer from "../globalComponents/Footer";
import SenatorTopImg from "../globalComponents/SenatorTopImg";
import RightStickyTab from "../globalComponents/RightStickyTab";
import { useDispatch, useSelector } from "react-redux";
import { getAllVotes } from "../redux/action-reducer/voteSlice";

const House = () => {
  const [activeTab, setActiveTab] = useState("");
  const dispatch = useDispatch();
  const { votes } = useSelector((state) => state.vote);

  // Group house votes by termId.name
  const houseVotesByTerm = votes
    ?.filter((vote) => vote.type?.toLowerCase().includes("house") && vote.termId?.name)
    ?.reduce((acc, vote) => {
      const termName = vote.termId.name;
      if (!acc[termName]) acc[termName] = [];
      acc[termName].push(vote);
      return acc;
    }, {});

  // Set default active tab on first load
  useEffect(() => {
    dispatch(getAllVotes());
  }, [dispatch]);

  useEffect(() => {
    console.log("votes", votes)
    const termKeys = Object.keys(houseVotesByTerm || {});
    if (termKeys.length > 0 && !activeTab) {
      setActiveTab(termKeys[0]);
    }
  }, [votes]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <TopBar />
      <AppHeaderBar />
      <RightStickyTab />
      <Box sx={{
        pt: { xs: "10px", md: '180px' }, // <-- Adds space below the fixed header (adjust height as needed)
        // mx: 4,
        // pb: 8,
        // width: "100%"
      }}>
        <SenatorTopImg />

      </Box>
      <Box
        width={1000}
        sx={{
          pl: 32,
          alignItems: "center",
          justifyContent: "center",
          color: "#66625C",
        }}
      >
        {/* Tabs */}
        <Paper sx={{ mb: 3, mt: -.5 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              backgroundColor: "transparent",
              borderBottom: "none",
              boxShadow: "none",
              outline: "none",
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            {Object.keys(houseVotesByTerm || {}).map((term) => (
              <Tab
                key={term}
                label={term}
                value={term}
                sx={{
                  backgroundColor: activeTab === term ? "#90CAF9" : "white",
                  color: "black",
                  fontWeight: activeTab === term ? "bold" : "normal",
                  borderRadius: 0,
                  minWidth: 100,
                  margin: 0,
                  order: "1",
                  display: "block",
                  // padding: "1rem 2rem",
                  marginRight: ".2rem",
                  fontSize: "14px",
                  lineHeight: "1.42857143",
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  padding: "18px 20px",
                  "&.Mui-selected": {
                    backgroundColor: "#90CAF9",
                    color: "#333333",
                    fontWeight: "bold",
                  },
                  "&:not(:last-child)": {
                    borderRight: "none",
                  },
                  "&:focus": {
                    outline: "none", // <== Remove focus outline
                },
                }}
              />
            ))}
          </Tabs>
        </Paper>

        {/* Heading */}
        <Typography variant="h3"  sx={{
          fontSize: "36px",
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontWeight: "500", 
          color: "#33567c"
        }}>
          House: Votes We Score
        </Typography>

        {/* Votes */}
        {houseVotesByTerm?.[activeTab]?.map((vote) => (
          <Box key={vote._id} sx={{ width: "100%", mb: 3, py: "15px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pb: "20px"
              }}
            >
              <Typography variant="h2"
                sx={{
                  fontize: "10px",
                  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                  color: "66625c",
                  lineHeight: "64px"
                }}>
                {vote.title}
              </Typography>
            </Box>

            {/* <Typography variant="caption" color="text.secondary">
              {new Date(vote.date).toLocaleDateString()}
            </Typography> */}


            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              {vote.shortDesc}
            </Typography>
          </Box>
        ))}

        {!houseVotesByTerm?.[activeTab]?.length && (
          <Typography variant="body2" color="text.secondary">
            No votes found for this session.
          </Typography>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default House;
