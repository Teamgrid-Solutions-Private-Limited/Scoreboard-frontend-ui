import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import { ExpandMore, Check, Close, Score } from "@mui/icons-material";
import Scorecard from "./Scorecard";

const SenateScorecard = () => {
  const [activeTab, setActiveTab] = useState("2023-2024");
  const [expandedVote, setExpandedVote] = useState(null);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleVoteExpand = (voteId) => {
    setExpandedVote(expandedVote === voteId ? null : voteId);
  };

  // Sample data - replace with your actual data
  const sessions = {
    "2023-2024": [
      {
        id: 1,
        title: "Motion to Proceed to S.J.Res. 10",
        date: "March 1, 2023",
        description:
          "The Biden administration published an interim final rule by the Department of Veterans Affairs...",
        position: "Oppose",
        voteType: "Motion",
        weighted: false,
        votes: [
          { senator: "Sen. Smith (R-AL)", vote: "Yes", score: 100 },
          { senator: "Sen. Johnson (D-CA)", vote: "No", score: 0 },
          // More votes...
        ],
      },
      {
        id: 2,
        title: "Cloture on the Motion to Proceed to S.J.Res. 4",
        date: "April 15, 2023",
        description:
          "The Equal Rights Amendment (ERA) on the U.S. Constitution as proposed in 1972...",
        position: "Oppose",
        voteType: "Cloture",
        weighted: true,
        votes: [
          { senator: "Sen. Smith (R-AL)", vote: "Yes", score: 100 },
          { senator: "Sen. Johnson (D-CA)", vote: "No", score: 0 },
          // More votes...
        ],
      },
      // More votes...
    ],
    "2021-2022": [
      // Data for 2021-2022 session
    ],
    "2019-2020": [
      // Data for 2021-2022 session
    ],
    "2015-2018": [
      // Data for 2021-2022 session
    ],
  };

  return (
    <Box
      width={1200}
      sx={{ pl: 25, alignItems: "center", justifyContent: "center" }}
    >
        {/* <Scorecard /> */}
      <Typography variant="h4" gutterBottom>
        Senate: Votes We Score
      </Typography>

      {/* Session Tabs */}
      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {Object.keys(sessions).map((session) => (
            <Tab key={session} label={session} value={session} />
          ))}
        </Tabs>
      </Paper>

      {/* Votes List */}
      {sessions[activeTab]?.map((vote) => (
        <Accordion
          key={vote.id}
          expanded={expandedVote === vote.id}
          onChange={() => handleVoteExpand(vote.id)}
          sx={{ mb: 2 }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">{vote.title}</Typography>
                <Chip
                  label={vote.weighted ? "DOUBLE WEIGHTED" : "SINGLE WEIGHT"}
                  color={vote.weighted ? "error" : "default"}
                  size="small"
                />
              </Box>
              <Typography variant="subtitle2" color="text.secondary">
                {vote.date} | {vote.voteType} | Position: {vote.position}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph sx={{ mb: 3 }}>
              {vote.description}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" gutterBottom>
              Vote Details
            </Typography>
            <Typography>
              The Biden administration published an interim final rule (IFR) for
              the Department of Veterans Affairs (VA) on September 9, 2022,
              which violates federal and state laws by forcing taxpayer funding
              of abortion on demand and pro-abortion counseling through the VA,
              making abortion available for hundreds of thousands of veterans
              and their beneficiaries, effective immediately. The rule breaks
              with longstanding tradition by using taxpayer dollars to fund
              abortion and even converts Veterans health facilities into
              abortion centers. It directly asserts that abortions may be
              carried out in violation of state law. Furthermore, it is a clear
              violation of federal statute. This joint resolution, authored by
              Senator Tommy Tuberville (R-AL), provides for congressional
              disapproval under chapter 8 of title 5, United States Code, of the
              rule submitted by the Department of Veterans Affairs relating to
              “Reproductive Health Services.”
            </Typography>

            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Senator</TableCell>
                    <TableCell align="center">Vote</TableCell>
                    <TableCell align="center">Score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {vote.votes.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.senator}</TableCell>
                      <TableCell align="center">
                        {row.vote === "Yes" ? (
                          <Check color="success" />
                        ) : (
                          <Close color="error" />
                        )}
                      </TableCell>
                      <TableCell align="center">
                        <Chip
                          label={row.score}
                          color={row.score >= 50 ? "success" : "error"}
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}

      {sessions[activeTab]?.length === 0 && (
        <Paper sx={{ p: 3, textAlign: "center" }}>
          <Typography>No votes recorded for this session</Typography>
        </Paper>
      )}
    </Box>
  );
};

export default SenateScorecard;
