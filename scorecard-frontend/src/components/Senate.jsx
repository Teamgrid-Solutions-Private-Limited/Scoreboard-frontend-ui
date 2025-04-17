import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Divider,
  Chip,
  Stack,
} from "@mui/material";
import TopBar from "../globalComponents/TopBar";
import Footer from "../globalComponents/Footer";
import SenatorTopImg from "../globalComponents/SenatorTopImg";
import RightStickyTab from "../globalComponents/RightStickyTab";
import { useDispatch, useSelector } from "react-redux";
import { getAllVotes } from "../redux/Reducer/voteSlice";
import AppHeaderBar from "../globalComponents/AppHeaderBar";

const SenateScorecard = () => {
  const dispatch = useDispatch();
  const { votes } = useSelector((state) => state.vote);

  // Only keep votes with type === "senate"
  const senateVotes = (votes || []).filter((vote) => vote?.type === "senate");

  const [activeTab, setActiveTab] = useState(null);
  useEffect(() => {
    dispatch(getAllVotes());
  }, [getAllVotes]);
  useEffect(() => {
    if (senateVotes.length > 0 && !activeTab) {
      const firstTerm = senateVotes.find((vote) => vote?.termId?.name);
      if (firstTerm) {
        setActiveTab(firstTerm.termId.name);
      }
    }
  }, [senateVotes, activeTab]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const sanitizeVotes = (votes) => {
    return votes.map((vote) => ({
      ...vote,
      shortDesc: vote.shortDesc
        ? vote.shortDesc
            .replace(/<\/?[^>]+(>|$)/g, "")
            .replace(/\n/g, " ")
            .trim()
        : "",
      description: vote.description
        ? vote.description
            .replace(/<\/?[^>]+(>|$)/g, "")
            .replace(/\n/g, " ")
            .trim()
        : "",
    }));
  };

  const terms = [
    ...new Set(
      senateVotes
        .filter((vote) => vote?.termId?.name)
        .map((vote) => vote.termId.name)
    ),
  ];

  const activeVotes = sanitizeVotes(
    senateVotes.filter((vote) => vote?.termId?.name === activeTab)
  );

  return (
    <Box>
      <TopBar />
      <AppHeaderBar />
      <RightStickyTab />
      <Box
        sx={{
          pt: { xs: "10px", md: "180px" }, // <-- Adds space below the fixed header (adjust height as needed)
        }}
      >
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
        {terms.length > 0 && (
          <Paper
            sx={{
              mb: 3,
              mt: 1,
              boxShadow: "none",
              borderBottom: "1px solid #ccc",
            }}
          >
            <Tabs
              value={activeTab || ""}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                backgroundColor: "transparent", // fully transparent
                borderBottom: "none", // remove any border
                boxShadow: "none", // remove any shadow
                outline: "none", // remove outline
                "& .MuiTabs-indicator": {
                  display: "none", // remove active tab underline
                },
              }}
            >
              {terms.map((term) => (
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
                    padding: "12px 16px",
                    "&.Mui-selected": {
                      backgroundColor: "#90CAF9",
                      fontWeight: "bold",
                    },
                    "&:not(:last-child)": {
                      borderRight: "none", // Remove right border between tabs
                    },
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                />
              ))}
            </Tabs>
          </Paper>
        )}

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#33567c", fontSize: "36px" }}
        >
          Senate: Votes We Score
        </Typography>

        {activeVotes.length > 0 ? (
          activeVotes.map((vote) => (
            <Box
              key={vote._id}
              elevation={0}
              sx={{
                width: "100%",
                mb: 3,
                p: 3,
                backgroundColor: "#ffffff",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "#66625C",
                    fontSize: "54",
                    lineHeight: 1.2,
                  }}
                >
                  {vote.title}
                </Typography>

                {/* {vote.quorumId && (
                  <Chip
                    label={`Quorum ID: ${vote.quorumId}`}
                    size="small"
                    variant="outlined"
                    sx={{ ml: 2 }}
                  />
                )} */}
              </Box>

              {/* {(vote.date || vote.voteType) && (
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  {vote.date && (
                    <Chip
                      label={vote.date}
                      size="small"
                      sx={{ backgroundColor: "#f0f4f8" }}
                    />
                  )}
                  {vote.voteType && (
                    <Chip label={vote.voteType} size="small" color="primary" />
                  )}
                </Stack>
              )} */}

              <Typography
                paragraph
                sx={{
                  mb: 3,
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                {vote.shortDesc}
              </Typography>

              {vote.description && (
                <>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      color: "#33567c",
                      mb: 1,
                    }}
                  >
                    Detailed Description:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: "#666666",
                      mb: 2,
                    }}
                  >
                    {vote.description}
                  </Typography>
                </>
              )}
            </Box>
          ))
        ) : (
          <Paper
            elevation={0}
            sx={{
              p: 3,
              textAlign: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Typography variant="body1" color="textSecondary">
              No votes recorded for this session
            </Typography>
          </Paper>
        )}
      </Box>

      <Footer />
    </Box>
  );
};

export default SenateScorecard;
