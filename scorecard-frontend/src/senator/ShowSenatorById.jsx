import React, { useEffect, useState, } from 'react';
import {
    Box, Typography, Stack, Card, Tab, Tabs,
    Divider, Table, TableCell, TableHead, TableRow, TableBody, Button
} from '@mui/material';
import TopBar from '../globalComponents/TopBar';
import AppHeaderBar from '../globalComponents/AppHeaderBar';
import SenatorTopImg from '../globalComponents/SenatorTopImg';
import RightStickyTab from '../globalComponents/RightStickyTab';
import CloseIcon from '@mui/icons-material/Close';
import Footer from '../globalComponents/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSenatorById } from '../redux/action-reducer/senatorSlice';
import { getSenatorDataBySenetorId } from '../redux/action-reducer/senatorTermSlice';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from "jspdf";

const ShowSenatorById = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [sortedTerms, setSortedTerms] = useState([]); // New state for sorted terms
    const navigate = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch();
    const { senator } = useSelector((state) => state.senator);
    const { currentSenator } = useSelector((state) => state.senatorData);
    const getOrdinal = (n) => {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    const generatePDF = (text, title = "ReadMore") => {
        const doc = new jsPDF();
        doc.setFontSize(12);
        doc.text(text, 10, 10, { maxWidth: 180 });
        doc.save(`${title}.pdf`);
    };

    useEffect(() => {
        if (id) {
            dispatch(getSenatorById(id));
            dispatch(getSenatorDataBySenetorId(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        console.log("senatorbyid", senator)
        console.log("senatordatabyid", currentSenator)

    }, [senator, currentSenator])

   
    useEffect(() => {
        if (currentSenator && currentSenator.length > 0) {
            const termsWithValidIds = currentSenator.filter(term => term.termId && term.termId.name);
    
            const sorted = [...termsWithValidIds].sort((a, b) => {
                const startYearA = parseInt(a.termId.name.split("-")[0], 10);
                const startYearB = parseInt(b.termId.name.split("-")[0], 10);
                return startYearB - startYearA; // latest year first
            });
    
            setSortedTerms(sorted);
    
            // Fix: Always set first term as default if not already selected
            if (sorted.length > 0 && (!activeTab || !sorted.find(t => t.termId._id === activeTab))) {
                setActiveTab(sorted[0].termId._id);
            }
        }
    }, [currentSenator]);
    

    const handleTabChange = (_, newValue) => {
        setActiveTab(newValue);
    };

    // const formatDate = (dateString) => {
    //     if (!dateString) return '';
    //     const [year, month, day] = dateString.split("-");
    //     return `${month}/${day}/${year}`;
    // };
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US"); // outputs MM/DD/YYYY
    };

    // Get the currently selected term data
    const selectedTerm = currentSenator?.find(term => term.termId?._id === activeTab) || {};

    if (!senator) {
        return <div>Loading senator information...</div>;
    }

    if (!currentSenator || currentSenator.length === 0) {
        return <div>No term data available for this senator</div>;
    }

    // Filter out terms without termId
    const validTerms = currentSenator.filter(term => term.termId?._id);

    if (validTerms.length === 0) {
        return (
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
                        <Typography variant="h4">No valid terms found for this senator</Typography>
                    </Box>
                </Box>
                <Footer />
            </Box>
        );
    }

    return (
        <>
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

                    <Stack spacing={2} sx={{
                        justifyContent: "center",
                        width: "99%",
                        overflowX: "hidden",
                        pb: 5,
                        mt: { xs: 8, md: -1.3 },
                    }}>
                        <Box pl={1.3} pt={1}>
                            {/* Tabs */}
                            <Tabs
                                value={activeTab}
                                onChange={handleTabChange}
                                TabIndicatorProps={{ style: { display: 'none' } }}
                                sx={{
                                    backgroundColor: "#fff",
                                    color: "black",
                                    fontWeight: 700,
                                }}
                            >
                                {sortedTerms.map((term) => (
                                    <Tab
                                        key={term.termId._id}
                                        label={term.termId.name}
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
                                        }}
                                    />
                                ))}
                            </Tabs>
                            <Divider sx={{ borderBottomWidth: "2", color: "black" }} />

                            {/* Term Header */}
                            <Box mt={3} display="flex" alignItems="center" sx={{
                                margin: "20px 3px",
                                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                                lineHeight: "64px",
                                color: "#66625c",
                            }}>
                                <Typography variant="h2" mr={1} sx={{ fontSize: "54px" }}>
                                    {selectedTerm.termId?.name || 'Term'}
                                </Typography>
                                {selectedTerm.termId?._id === sortedTerms[0]?.termId?._id && selectedTerm.currentTerm && (<Typography variant="h2" sx={{
                                    fontSize: "1.7em", fontWeight: "300", pt: "18px", color: "#66625c"
                                }}>
                                    (Current term)
                                </Typography>
                                )}
                            </Box>

                            {/* Senator Profile */}
                            <Box mt={4} ml={2} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                                <Box display="flex" alignItems="center">
                                    <Box
                                        component="img"
                                        src={senator.photo}
                                        alt={senator.name}
                                        sx={{
                                            width: 185,
                                            height: 185,
                                            borderRadius: "50%",
                                            border: "5px solid white",
                                            boxShadow: "0 0 0 4px #1976d2",
                                            objectFit: "contain", // shows full image (zoomed out)
                                            backgroundColor: "#fff", // optional: fills empty space
                                        }}
                                    />

                                    <Box sx={{ mx: "64px", mt: "-20px" }}>
                                        <Typography variant="h5" sx={{
                                            color: "#66625c",
                                            fontSize: "36px",
                                            marginTop: "20px",
                                            fontWeight: "500",
                                            lineHeight: "1.1",
                                        }}>
                                            {senator.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary"
                                            sx={{
                                                fontWeight: 400,
                                                fontSize: ".9rem",
                                                lineHeight: 1.75,
                                            }}
                                        >
                                            {senator.state} ({senator.party})
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box display="flex" flexDirection="column" alignItems="center">
                                    {/* SBA Rating Card */}
                                    <Card sx={{
                                        textAlign: "center",
                                        border: "2px solid #333",
                                        padding: "10px",
                                        width: "125px",
                                        height: 115,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        color: "#333",
                                        borderRadius: 0,
                                    }}>
                                        <Box>
                                            <Typography variant="body2">
                                                SBA Rating:
                                            </Typography>
                                            <Typography variant="h3" fontWeight="700" sx={{
                                                color: "#66625c",
                                                fontSize: "4rem",
                                                p: "20px"
                                            }}>
                                                {selectedTerm.rating || 'N/A'}
                                            </Typography>
                                        </Box>
                                    </Card>
                                </Box>
                            </Box>
                            {/* Summary Section */}
                            <Box sx={{ mt: "48px" }}>
                                <Typography variant='h2' sx={{
                                    color: "#66625c",
                                    fontSize: "54px",
                                    lineHeight: "64px"
                                }}>
                                    Summary
                                </Typography>

                                {/* Flex container to keep congress and summary inline */}
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "flex-start", // Align top of both
                                    gap: 0,                   // Add spacing between congress and summary
                                    flexWrap: "wrap"          // Wrap on small screens
                                }}>
                                    {selectedTerm.votesScore && selectedTerm.votesScore.length > 0 && selectedTerm.votesScore[0].voteId?.congress && (
                                        <Typography variant="body2" sx={{
                                            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                                            fontSize: "14px",
                                            lineHeight: "1.42857143",
                                            color: "#333",
                                            fontWeight: "700",
                                            whiteSpace: "nowrap",  // Prevent line break
                                            mt: "9px"
                                        }}>
                                            {getOrdinal(Number(selectedTerm.votesScore[0].voteId.congress))} Congress
                                        </Typography>
                                    )}

                                    <Box
                                        sx={{
                                            fontSize: "14px",
                                            color: "#333",
                                            pt: "4px",
                                            flex: 1, // Let summary take the rest of the space
                                            minWidth: 0,
                                            "& p": {
                                                margin: .4, // This is key to remove vertical spacing
                                            },
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: selectedTerm.summary || '<p>No summary available</p>'
                                        }}
                                    />
                                </Box>
                            </Box>

                            {/* Scored Votes Section */}
                            {selectedTerm.votesScore && selectedTerm.votesScore.length > 0 && (
                                <Box sx={{ mt: "40px" }}>
                                    <Typography sx={{
                                        my: 1,
                                        color: "#66625c",
                                        fontSize: "54px",
                                        lineHeight: "64px"
                                    }}>
                                        Scored Votes
                                    </Typography>
                                    <Table sx={{ borderCollapse: "collapse", width: "100%" }}>
                                        <TableHead>
                                            <TableRow sx={{
                                                height: "35px",
                                                backgroundColor: "#d2e5f7",
                                                border: "1px solid #ccc",
                                            }}>
                                                <TableCell sx={{
                                                    fontWeight: "bold",
                                                    color: "#333",
                                                    borderRight: "1px solid #ccc",
                                                    padding: "4px 8px",
                                                    fontSize: "14px",
                                                }}>
                                                    Date
                                                </TableCell>
                                                <TableCell sx={{
                                                    fontWeight: "bold",
                                                    color: "#333",
                                                    borderRight: "1px solid #ccc",
                                                    padding: "4px 8px",
                                                    fontSize: "14px",
                                                }}>
                                                    Vote
                                                </TableCell>
                                                <TableCell sx={{
                                                    fontWeight: "bold",
                                                    color: "#333",
                                                    borderRight: "1px solid #ccc",
                                                    padding: "4px 8px",
                                                    fontSize: "14px",
                                                }}>
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
                                                    <TableCell
                                                        sx={{
                                                            border: "1px solid #ccc",
                                                            padding: "6px",
                                                            fontSize: 14,
                                                            fontWeight: "700",
                                                            color: "#333",
                                                            width: "75px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        {vote?.voteId?.date ? formatDate(vote?.voteId?.date) : 'N/A'}
                                                        <Typography sx={{ fontSize: ".6rem", fontWeight: "400" }}>
                                                            {vote?.voteId?.congress}<sup>th</sup>Congress
                                                        </Typography>

                                                    </TableCell>
                                                    <TableCell sx={{ border: "1px solid #ccc", p: 1 }}>
                                                        <Typography
                                                            variant="subtitle1"
                                                            sx={{
                                                                fontWeight: "700",
                                                                fontSize: "1.4em",
                                                                color: "#66625c"
                                                            }}
                                                        >
                                                            {vote?.voteId?.title || 'No title available'}
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ mb: 0.5 }}>
                                                            {vote?.voteId?.shortDesc || 'No description available'}
                                                        </Typography>
                                                        <Box mt={0.5} display="flex" gap={1}>
                                                            <Button
                                                                onClick={() => window.open(vote?.voteId?.rollCall, "_blank")}
                                                                // onClick={()=>navigate(vote?.voteId?.rollCall)}
                                                                variant="contained"
                                                                size="small"
                                                                sx={{ fontSize: "0.7rem", textTransform: "none", bgcolor: "#4DA6FF" }}
                                                            >
                                                                ROLL CALL
                                                            </Button>
                                                            <Button
                                                                onClick={() => {
                                                                    const getText = (vote?.voteId?.readMore || "NO CONTENT AVAILABLE")
                                                                    generatePDF(getText)
                                                                }
                                                                }

                                                                variant="contained"
                                                                size="small"
                                                                sx={{ fontSize: "0.7rem", textTransform: "none", bgcolor: "#4DA6FF" }}
                                                            >
                                                                READ MORE
                                                            </Button>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            border: "1px solid #ccc",
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            width: "10px",
                                                            p: "13px 5px"
                                                        }}
                                                    >
                                                        {vote?.score === 'No' ? (
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

                            {/* Tracked Activities Section */}
                            {selectedTerm.activitiesScore && selectedTerm.activitiesScore.length > 0 && (
                                <Box sx={{ mt: "90px" }}>
                                    <Typography sx={{
                                        my: 1,
                                        color: "#66625c",
                                        fontSize: "54px",
                                        lineHeight: "64px"
                                    }}>
                                        Tracked Activity: Bills Cosponsored & Letters Cosigned
                                    </Typography>
                                    <Typography sx={{
                                        margin: "0 0 30px 0",
                                        fontSize: "14px",
                                        fontWeight: 400,
                                        color: "#66625c"
                                    }}>
                                        As of {new Date().toLocaleDateString()}
                                    </Typography>
                                    <Table sx={{ borderCollapse: "collapse", width: "100%" }}>
                                        <TableHead>
                                            <TableRow sx={{
                                                height: "35px",
                                                backgroundColor: "#d2e5f7",
                                                border: "1px solid #ccc",
                                            }}>
                                                <TableCell sx={{
                                                    fontWeight: "bold",
                                                    color: "#333",
                                                    borderRight: "1px solid #ccc",
                                                    padding: "4px 8px",
                                                    fontSize: "14px",
                                                    width: "75px"
                                                }}>
                                                    Date
                                                </TableCell>
                                                <TableCell sx={{
                                                    fontWeight: "bold",
                                                    color: "#333",
                                                    borderRight: "1px solid #ccc",
                                                    padding: "4px 8px",
                                                    fontSize: "14px",
                                                }}>
                                                    Activity
                                                </TableCell>
                                                <TableCell sx={{
                                                    fontWeight: "bold",
                                                    color: "#333",
                                                    borderRight: "1px solid #ccc",
                                                    padding: "4px 8px",
                                                    fontSize: "14px",
                                                }}>
                                                    Score
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            {selectedTerm.activitiesScore.map((activity, index) => (
                                                <TableRow
                                                    key={index}
                                                    sx={{
                                                        backgroundColor: index % 2 === 0 ? "#f5faff" : "#ffffff",
                                                    }}
                                                >
                                                    <TableCell
                                                        sx={{
                                                            border: "1px solid #ccc",
                                                            padding: "6px",
                                                            fontSize: 14,
                                                            fontWeight: "700",
                                                            color: "#333",
                                                            width: "20px",
                                                            textAlign: "center"
                                                        }}
                                                    >
                                                        {activity?.activityId?.date ? (
                                                            <>
                                                                {selectedTerm.votesScore && selectedTerm.votesScore.length > 0 && selectedTerm.votesScore[0].voteId?.congress && (
                                                                    <Typography sx={{ fontSize: ".6rem", fontWeight: "400" }}>
                                                                        {selectedTerm.votesScore[0].voteId.congress}
                                                                        <sup>th</sup>
                                                                    </Typography>
                                                                )}
                                                                  <Typography sx={{ fontSize: ".6rem", fontWeight: "400" }}> Congress</Typography>
                                                            </>
                                                        ) : 'N/A'}

                                                        {/* {selectedTerm.votesScore.map((vote, index) => (
                                                        <Typography sx={{ fontSize: ".6rem", fontWeight: "400" }}>
                                                        <sup>th</sup> 
                                                        </Typography>
                                                         ))}Congress */}
                                                    </TableCell>
                                                    <TableCell sx={{ border: "1px solid #ccc", p: 1 }}>
                                                        <Typography
                                                            variant="subtitle1"
                                                            sx={{
                                                                fontWeight: "700",
                                                                fontSize: "1.4em",
                                                                color: "#66625c"
                                                            }}
                                                        >
                                                            {activity?.activityId?.title || 'No title available'}
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ mb: 0.5 }}>
                                                            {activity?.activityId?.shortDesc || 'No description available'}
                                                        </Typography>
                                                        <Box mt={0.5} display="flex" gap={1}>
                                                            <Button
                                                                onClick={() => {
                                                                    const getText = (activity?.activityId?.shortDesc || "NO CONTENT AVAILABLE")
                                                                    generatePDF(getText)
                                                                }
                                                                }
                                                                variant="contained"
                                                                size="small"
                                                                sx={{ fontSize: "0.7rem", textTransform: "none", bgcolor: "#4DA6FF" }}
                                                            >
                                                                READ MORE
                                                            </Button>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            border: "1px solid #ccc",
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            width: "10px",
                                                            p: "13px 5px"
                                                        }}
                                                    >
                                                        {activity.score === 'Yes' ? (
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
                    </Stack>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default ShowSenatorById;