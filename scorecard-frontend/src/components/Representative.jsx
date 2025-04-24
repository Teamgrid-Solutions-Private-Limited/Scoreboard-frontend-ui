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
import { getHouseById } from "../redux/action-reducer/houseSlice";
import { getHouseDataByHouseId } from "../redux/action-reducer/houseTermSlice";
import { jsPDF } from "jspdf";
import { Divider } from "@mui/material";
import RightStickyTab from "../globalComponents/RightStickyTab";

function Representative() {
  const [activeTab, setActiveTab] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { house } = useSelector((state) => state?.house || {});
  const { currentHouse } = useSelector((state) => state?.houseData || {});
  const [sortedTerms, setSortedTerms] = useState([]);

  // Generate PDF function
  const generatePDF = (text, title = "ReadMore") => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(text, 10, 10, { maxWidth: 180 });
    doc.save(`${title}.pdf`);
  };

  const getBorderColor = (party) => {
    if (!party) return "gray";
    const lowerParty = party.toLowerCase();
    if (lowerParty === "republican") return "#dd3333";
    if (lowerParty === "democrat") return "#1e73be";
    return "gray";
};
  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US");
  };

  // Get ordinal suffix for Congress number
  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  useEffect(() => {
    dispatch(getHouseById(id));
    dispatch(getHouseDataByHouseId(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log("House :", house);
    console.log("Current House :", currentHouse);
  }, [house, currentHouse]);

  useEffect(() => {
    if (currentHouse && currentHouse.length > 0) {
      // Filter out terms without termId and sort by Congress (newest first)
      const sorted = [...currentHouse]
        .filter((term) => term.termId && term.termId.name)
        .sort((a, b) => {
          // Extract Congress numbers from votesScore if available
          const congressA = a.votesScore?.[0]?.voteId?.congress || "0";
          const congressB = b.votesScore?.[0]?.voteId?.congress || "0";
          return parseInt(congressB) - parseInt(congressA);
        });

      setSortedTerms(sorted);

      // Set the first term as active tab if not set
      if (sorted.length > 0 && (!activeTab || !sorted.find(t => t.termId._id === activeTab))) {
        setActiveTab(sorted[0].termId._id);
      }
    }
  }, [currentHouse, activeTab]);

  const handleTabChange = (_, newValue) => {
    setActiveTab(newValue);
  };

  // Get the currently selected term data
  const selectedTerm =
    currentHouse?.find((term) => term.termId?._id === activeTab) || {};

  if (!house) {
    return <div>Loading representative information...</div>;
  }

  if (!currentHouse || currentHouse.length === 0) {
    return <div>No term data available for this representative</div>;
  }

  // Filter out terms without termId
  const validTerms = currentHouse.filter(term => term.termId?._id);

  if (validTerms.length === 0) {
    return (
      <Box>
        <Box sx={{ mx: 31.7, pb: 1.5 }}>
          <TopBar />
          <AppHeaderBar />
          <RightStickyTab />
          <Box component="main" sx={{ overflowX: "hidden" }}>
            <Box sx={{
              pt: { xs: "10px", md: '180px' },
              display: "flex",
              width: "100%",
            }}>
              <SenatorTopImg />
            </Box>

            <Box sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h4">No valid terms found for this Representative</Typography>
            </Box>
          </Box>
        </Box>
        <Footer />

      </Box>
    );
  }

  return (
    <Box>
      <TopBar />
      <AppHeaderBar />
      <RightStickyTab />
      <Box
        sx={{
          pt: { xs: "10px", md: "180px" },
          ml: -1,
          mb: -2,
          // mx: 4,
          // pb: 8,
          // width: "100%"
        }}
      >
        <SenatorTopImg />
      </Box>
      <Box width={1000} sx={{ pl: 32, color: "#66625C" }}>
        {/* Tabs */}
        <Paper elevation={0} sx={{ mb: 3, mt: 1 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            TabIndicatorProps={{ style: { display: "none" } }}
            sx={{ backgroundColor: "#fff" }}
          >
            {sortedTerms.map((term) => (
              <Tab
                key={term.termId._id}
                label={
                  term.votesScore?.[0]?.voteId?.congress
                    ? `${getOrdinal(
                      Number(term.votesScore[0].voteId.congress)
                    )} Congress`
                    : term.termId.name
                }
                value={term.termId._id}
                sx={{
                  bgcolor: activeTab === term.termId._id ? "#90CAF9" : "#fff",
                  color: "black",
                  fontWeight: "700",
                  borderRadius: 0,
                  minWidth: 100,
                  margin: 0,
                  padding: "1rem 2rem",
                  marginRight: ".2rem",
                  fontSize: "14px",
                  "&.Mui-selected": {
                    backgroundColor: "#90CAF9",
                    color: "#333333",
                    fontWeight: "bold",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                  "&:hover": {
                    overflow: " hidden",
                  },
                }}
              />
            ))}
          </Tabs>
          <Divider sx={{ borderBottomWidth: "2", color: "black" }} />
        </Paper>


        {/* Header */}
        <Typography variant="h4" fontSize={54}>
          {selectedTerm.votesScore?.[0]?.voteId?.congress && (
            <Typography fontSize="54px" fontWeight={300}>
              {" "}
              {getOrdinal(
                Number(selectedTerm.votesScore[0].voteId.congress)
              )}{" "}
              Congress
              {selectedTerm.currentTerm && (
                <span style={{ fontSize: "1.7rem", fontWeight: "300" }}>
                  {" "}
                  (Current term)
                </span>
              )}
            </Typography>
          )}
        </Typography>

        {/* Profile Info */}
        <Grid sx={{ display: "flex", justifyContent: "start", alignItems: "center", mt: 4 }}>
          <Box sx={{ mr: 4 }}>
            <Box
              sx={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                backgroundColor: `${getBorderColor(house.party)}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: 190,
                  height: 190,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {house.photo ? (
                  <Box
                    component="img"
                    src={house.photo}
                    alt="Profile"
                    sx={{
                      width: 180,
                      height: 180,
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Typography>No Image</Typography>
                )}
              </Box>
            </Box>
          </Box>

          <Box sx={{ mr: 4 }}>
            <Typography variant="h4" fontSize={36}>
              {house.name}
            </Typography>
            <Typography variant="h5" fontSize={14} sx={{ mt: 1 }}>
              {house.district} ({house.party})
            </Typography>
          </Box>

          <Box
            sx={{
              height: 130,
              width: 140,
              ml: "auto",
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
              {selectedTerm.rating || "N/A"}
            </Typography>
          </Box>
        </Grid>


        {/* Summary Section */}
        <Box sx={{ mt: 4 }}>
          <Box
            sx={{
              fontSize: "14px !important",
              color: "#333 !important",
              pt: "4px",
              flex: 1, // Let summary take the rest of the space
              minWidth: 0,
              "& p": {
                margin: .4, // This is key to remove vertical spacing
              },
            }}
            dangerouslySetInnerHTML={{
              __html: selectedTerm.summary || "<p>No summary available</p>",
            }}
          />
        </Box>

        {/* Scored Votes */}
        {selectedTerm.votesScore && selectedTerm.votesScore.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" fontSize={54}>
              Scored Votes
            </Typography>
            <Table sx={{ borderCollapse: "collapse", width: "100%" }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#cce5ff" }}>
                  <TableCell
                    sx={{ fontWeight: "bold", border: "1px solid #ccc" }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "bold", border: "1px solid #ccc" }}
                  >
                    Vote
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      border: "1px solid #ccc",
                      textAlign: "center",
                    }}
                  >
                    Score
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedTerm.votesScore.map((vote, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#f5faff" : "#ffffff",
                    }}
                  >
                    <TableCell sx={{ border: "1px solid #ccc", fontSize: 14 }}>
                      {vote?.voteId?.date
                        ? formatDate(vote.voteId.date)
                        : "N/A"}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #ccc", p: 1 }}>
                      <Typography 
                       variant="h3"
                       sx={{
                           fontWeight: "700",
                           fontSize: "1.4em",
                           color: "#66625c"
                       }}
                      >
                        {vote?.voteId?.title || "No title"}
                      </Typography>
                      <Typography variant="body2">
                        {vote?.voteId?.shortDesc || "No description"}
                      </Typography>
                      <Box mt={1} display="flex" gap={1}>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{ fontSize: 12 }}
                          onClick={() =>
                            window.open(vote?.voteId?.rollCall, "_blank")
                          }
                        >
                          ROLL CALL
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{ fontSize: 12 }}
                          onClick={() =>
                            generatePDF(
                              vote?.voteId?.readMore || "No content available",
                              "Vote Details"
                            )
                          }
                        >
                          READ MORE
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid #ccc", textAlign: "center" }}
                    >
                      {vote?.score === "No" ? (
                        <CloseIcon sx={{ color: "red", fontSize: 36 }} />
                      ) : (
                        <span>✓</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        )}

        {/* Tracked Activity */}
        {selectedTerm.activitiesScore &&
          selectedTerm.activitiesScore.length > 0 && (
            <Box sx={{ mt: 4, mb: 4 }}>
              <Typography variant="h4" fontSize={54}>
                Tracked Activity: Bills Cosponsored & Letters Cosigned
              </Typography>
              <Typography fontSize={14}>
                As of {new Date().toLocaleDateString()}
              </Typography>
              <Table sx={{ borderCollapse: "collapse", width: "100%" }}>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#cce5ff" }}>
                    <TableCell
                      sx={{ fontWeight: "bold", border: "1px solid #ccc" }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: "bold", border: "1px solid #ccc" }}
                    >
                      Activity
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        border: "1px solid #ccc",
                        textAlign: "center",
                      }}
                    >
                      Score
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedTerm.activitiesScore.map((activity, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        backgroundColor:
                          index % 2 === 0 ? "#f5faff" : "#ffffff",
                      }}
                    >
                      <TableCell
                        sx={{ border: "1px solid #ccc", fontSize: 14 }}
                      >
                        {activity?.activityId?.date
                          ? formatDate(activity.activityId.date)
                          : "N/A"}
                      </TableCell>
                      <TableCell sx={{ border: "1px solid #ccc", p: 1 }}>
                        <Typography 
                         variant="h3"
                         sx={{
                             fontWeight: "700",
                             fontSize: "1.4em",
                             color: "#66625c"
                         }}
                        >
                          {activity?.activityId?.title || "No title"}
                        </Typography>
                        <Typography variant="body2">
                          {activity?.activityId?.shortDesc || "No description"}
                        </Typography>
                        <Box mt={1}>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{ fontSize: 12 }}
                            onClick={() =>
                              generatePDF(
                                activity?.activityId?.shortDesc ||
                                "No content available",
                                "Activity Details"
                              )
                            }
                          >
                            READ MORE
                          </Button>
                        </Box>
                      </TableCell>
                      <TableCell
                        sx={{ border: "1px solid #ccc", textAlign: "center" }}
                      >
                        {activity?.score === "Yes" ? (
                          <span>✓</span>
                        ) : (
                          <CloseIcon sx={{ color: "red", fontSize: 36 }} />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          )}
      </Box>
      <Footer />
    </Box>
  );
}

export default Representative;
