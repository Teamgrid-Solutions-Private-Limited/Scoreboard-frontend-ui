import React, { useState } from 'react';
import {
    Box, Typography, Stack, Card, Tab, Tabs, Avatar,
    Divider, Table, TableCell, TableHead, TableRow, TableBody, Button
} from '@mui/material';
import TopBar from './TopBar';
import AppHeaderBar from './AppHeaderBar';
import SenatorTopImg from './SenatorTopImg';
import RightStickyTab from './RightStickyTab';
import CloseIcon from '@mui/icons-material/Close';
import Footer from './Footer';


const ShowSenatorById = () => {
    const [tab, setTab] = useState("2023-2029");

    const handleTabChange = (_, newValue) => {
        setTab(newValue);
    };
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${month}/${day}/${year}`;
      };

    const votes = [
        {
            date: "2023-03-15",
            title: "Born-Alive Abortion Survivors Protection Act",
            description: "A bill to ensure that infants born alive after an abortion receive appropriate medical care.",
            score: "no", // Not used here but you can add logic for icons
        },
        {
            date: "2023-05-10",
            title: "No Taxpayer Funding for Abortion Act",
            description: "A bill to prohibit taxpayer funding of abortion and ensure healthcare providers are not forced to perform or fund abortions.",
            score: "no",
        },
        {
            date: "2023-07-22",
            title: "Pain-Capable Unborn Child Protection Act",
            description: "A bill to prohibit abortions after 20 weeks of pregnancy, with exceptions.",
            score: "no",
        },
    ];

    const senatorData = {
        "2023-2029": {
            name: "Sen. Alex Padilla",
            state: "California",
            party: "Democrat",
            imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
            sbaRating: "F",
            term: "2023–2029",
            isCurrent: true,
        },
        "2021-2023": {
            name: "Sen. Alex Padilla",
            state: "California",
            party: "Democrat",
            imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
            sbaRating: "F",
            term: "2021–2023",
            isCurrent: false,
        }
    };

    const selectedSenator = senatorData[tab];

    return (
        <>
            <Box sx={{ mx: 31.7 , pb:1.5}}>
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
                                value={tab}
                                onChange={handleTabChange}
                                TabIndicatorProps={{ style: { display: 'none' } }}
                                sx={{
                                    backgroundColor: "#fff",
                                    color: "black",

                                    // cursor: pointer,
                                    // background: #fafafa,
                                    fontWeight: 700,
                                }}
                            >
                                {Object.entries(senatorData).map(([term]) => (
                                    <Tab
                                        key={term}
                                        label={term}
                                        value={term}
                                        sx={{
                                            bgcolor: tab === term ? "#90CAF9" : "#fff",
                                            color: "black", // Always black text
                                            fontWeight: "700",
                                            borderRadius: 0,
                                            minWidth: 100,
                                            margin: 0,
                                            order: "1",
                                            display: "block",
                                            padding: "1rem 2rem",
                                            marginRight: ".2rem",
                                            fontSize: "14px",
                                            lineHeight: "1.42857143",
                                            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                                            boxSizing: "border-box",
                                            maxWidth: "100%",
                                            //  marginBottom: "5px",

                                            "&.Mui-selected": {
                                                backgroundColor: "#90CAF9",
                                                color: "#333333",
                                                fontWeight: "bold",
                                                //    transition: "background ease 0.4s",
                                                //    WebkitTransition: "background ease 0.2s",
                                            },

                                            "&:focus": {
                                                outline: "none", // <== Remove focus outline
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
                                <Typography variant="h2" mr={1} sx={{ fontSize: "54px", }}>
                                    {selectedSenator.term.replace("–", "-")}
                                </Typography>
                                {selectedSenator.isCurrent && (
                                    <Typography variant="h2" sx={{
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
                                        src={selectedSenator.imageUrl} // or use local import
                                        alt={senatorData.name}
                                        sx={{
                                            width: 175,
                                            height: 175,
                                            borderRadius: "50%",
                                            border: "5px solid white", // Inner white ring
                                            boxShadow: "0 0 0 4px #1976d2", // Outer blue ring
                                            objectFit: "fill",
                                        }}
                                    />
                                    <Box sx={{
                                        mx: "64px", mt: "-20px", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                                    }}>
                                        <Typography variant="h5" sx={{
                                            color: "#66625c",
                                            fontSize: " 36px",
                                            marginTop: "20px",
                                            fontFamily: "inherit",
                                            fontWeight: "500",
                                            lineHeight: " 1.1",
                                        }}>
                                            {selectedSenator.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary"
                                            sx={{
                                                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                                                fontWeight: 400,
                                                fontSize: ".9rem",
                                                lineHeight: 1.75,
                                                letterSpacing: "0.00938em",
                                            }}
                                        >
                                            {selectedSenator.state} ({selectedSenator.party})
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
                                        borderRadius: 0, // Removes border radius
                                    }}>
                                        <Box>
                                            <Typography variant="body2">
                                                SBA Rating:
                                            </Typography>
                                            <Typography variant="h3" fontWeight="700" sx={{ color: "#66625c", fontFamily: "FreightText W01 Book", fontSize: "4rem", p: "20px" }}>
                                                {selectedSenator.sbaRating}
                                            </Typography>
                                        </Box>
                                    </Card>

                                </Box>
                            </Box>

                            <Box sx={{ mt: "48px" }}>
                                <Typography variant='h2' sx={{
                                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", color: " #66625c", fontSize: "54px",
                                    lineHeight: "64px"
                                }}>Summary</Typography>
                                <Typography sx={{
                                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: "14px",
                                    color: "#333",
                                    pt: "9px"
                                }}>
                                    <strong> 118th Congress</strong> Sen. Padilla has consistently voted to eliminate or prevent protections for the unborn and for children born alive after failed abortions. Sen. Padilla has voted to use hard-earned tax dollars to pay for abortion, including abortion travel expenses. Sen. Padilla has worked to allow radical abortion ideology to be inserted into every facet of the United States Government.
                                </Typography>

                            </Box>
                            <Box sx={{ mt: "40px" }}>
                                <Typography sx={{
                                    my: 1, fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", color: " #66625c", fontSize: "54px",
                                    lineHeight: "64px"
                                }}>Scored Votes</Typography>
                                <Table sx={{ borderCollapse: "collapse", width: "100%" }}>
                                    <TableHead>
                                        <TableRow
                                            sx={{
                                                height: "35px", // row height
                                                backgroundColor: "#d2e5f7",
                                                border: "1px solid #ccc",

                                            }}
                                        >
                                            <TableCell
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: "#333",
                                                    borderRight: "1px solid #ccc",
                                                    padding: "4px 8px", // control padding to reduce height
                                                    fontSize: "14px",
                                                }}
                                            >
                                                Date
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: "#333",
                                                    borderRight: "1px solid #ccc",
                                                    padding: "4px 8px",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                Vote
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: "#333",
                                                    borderRight: "1px solid #ccc",
                                                    padding: "4px 8px",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                Score
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {votes.map((vote, index) => (
                                            <TableRow
                                                key={index}
                                                sx={{
                                                    backgroundColor: index % 2 === 0 ? "#f5faff" : "#ffffff",
                                                }}
                                            >
                                                <TableCell
                                                    sx={{
                                                        border: "1px solid #ccc",
                                                        padding: "44px 6px",
                                                        fontSize: 14,
                                                        fontWeight:"700",
                                                        color:"#333",
                                                        width:"75px",
                                                        textAlign:"center",
                                                        

                                                    }}
                                                >
                                                    {formatDate(vote.date)}
                                                    <Typography sx={{fontSize:".6rem",fontWeight:"400",color:"#333" ,}}>
                                                      188<sup>th</sup> Congress
                                                      </Typography>
                                                </TableCell>
                                                <TableCell sx={{ border: "1px solid #ccc", p: 1 }}>
                                                    <Typography
                                                        variant="subtitle1"
                                                        sx={{
                                                            // mb: 0.5,
                                                            fontFamily: "Helvetica Neue, Helvetica, Arial,,sans-serif",
                                                            fontWeight: "700",
                                                            fontSize: " 1.4em",
                                                            color:"#66625c"
                                                        }}
                                                    >
                                                        {vote.title}
                                                   
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                                        {vote.description}
                                                    </Typography>
                                                    <Box mt={0.5} display="flex" gap={1}>
                                                        <Button
                                                            variant="contained"
                                                            size="small"
                                                            sx={{ fontSize: "0.7rem", textTransform: "none",bgcolor:"#4DA6FF" }}
                                                        >
                                                            ROLL CALL
                                                        </Button>
                                                        <Button
                                                            variant="contained"
                                                            size="small"
                                                            sx={{ fontSize: "0.7rem", textTransform: "none",bgcolor:"#4DA6FF" }}
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
                                                    <CloseIcon sx={{ color: "red", fontSize: 36 }} />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>

                            {/* TRACK ACTIVITY */}
                          
                            <Box sx={{ mt: "90px" }}>
                                <Typography sx={{
                                    my: 1, fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", color: " #66625c", fontSize: "54px",
                                    lineHeight: "64px"
                                }}>Tracked Activity: Bills Cosponsored & Letters Cosigned</Typography>
                                <Typography sx={{
                                    margin:" 0 0 30px 0",
                                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    color:"#66625c"
                                
                                }}>As of 02/01/2023</Typography>
                                <Table sx={{ borderCollapse: "collapse", width: "100%" }}>
                                    <TableHead>
                                        <TableRow
                                            sx={{
                                                height: "35px", // row height
                                                backgroundColor: "#d2e5f7",
                                                border: "1px solid #ccc",

                                            }}
                                        >
                                            <TableCell
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: "#333",
                                                    borderRight: "1px solid #ccc",
                                                    padding: "4px 8px", // control padding to reduce height
                                                    fontSize: "14px",
                                                                                                        width:"75px"

                                                }}
                                            >
                                                Date
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: "#333",
                                                    borderRight: "1px solid #ccc",
                                                    padding: "4px 8px",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                Vote
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: "#333",
                                                    borderRight: "1px solid #ccc",
                                                    padding: "4px 8px",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                Score
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {votes.map((vote, index) => (
                                            <TableRow
                                                key={index}
                                                sx={{
                                                    backgroundColor: index % 2 === 0 ? "#f5faff" : "#ffffff",
                                                }}
                                            >
                                                <TableCell
                                                    sx={{
                                                        border: "1px solid #ccc",
                                                        padding: "6px 1px",
                                                        fontSize: 14,
                                                        fontWeight:"700",
                                                        color:"#333",
                                                        width:"75px",
                                                        textAlign:"center"
                                                    }}
                                                >
                                                    {/* {formatDate(vote.date)} */}
                                                    <Typography sx={{fontSize:".7rem",fontWeight:"400",color:"#333" ,p:"40px  5px "}}>
                                                      188<sup>th</sup> Congress
                                                      </Typography>
                                                </TableCell>
                                                <TableCell sx={{ border: "1px solid #ccc", p: 1 }}>
                                                    <Typography
                                                        variant="subtitle1"
                                                        sx={{
                                                            // mb: 0.5,
                                                            fontFamily: "Helvetica Neue, Helvetica, Arial,,sans-serif",
                                                            fontWeight: "700",
                                                            fontSize: " 1.4em",
                                                            color:"#66625c"
                                                        }}
                                                    >
                                                        {vote.title}
                                                   
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                                        {vote.description}
                                                    </Typography>
                                                    <Box mt={0.5} display="flex" gap={1}>
                                                        <Button
                                                            variant="contained"
                                                            size="small"
                                                            sx={{ fontSize: "0.7rem", textTransform: "none",bgcolor:"#4DA6FF" }}
                                                        >
                                                            ROLL CALL
                                                        </Button>
                                                        <Button
                                                            variant="contained"
                                                            size="small"
                                                            sx={{ fontSize: "0.7rem", textTransform: "none",bgcolor:"#4DA6FF" }}
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
                                                    <CloseIcon sx={{ color: "red", fontSize: 36 }} />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>

                        </Box>

                    </Stack>
                </Box >
            </Box >
            <Footer/>
        </>
    );
};

export default ShowSenatorById;
