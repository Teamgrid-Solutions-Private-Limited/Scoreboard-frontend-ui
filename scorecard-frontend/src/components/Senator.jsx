import React, { useState } from 'react';
import {
    Box, Typography, Stack, Card, Tab, Tabs, Avatar,
    Divider
} from '@mui/material';
import TopBar from './TopBar';
import AppHeaderBar from './AppHeaderBar';
import SenatorTopImg from './SenatorTopImg';
import RightStickyTab from './RightStickyTab';

const Senator = () => {
    const [tab, setTab] = useState("2023-2029");

    const handleTabChange = (_, newValue) => {
        setTab(newValue);
    };

    const senatorData = {
        "2023-2029": {
            name: "Sen. Alex Padilla",
            state: "California",
            party: "Democrat",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Sen._Alex_Padilla_official_portrait%2C_117th_Congress.jpg",
            sbaRating: "F",
            term: "2023–2029",
            isCurrent: true,
        },
        "2021-2023": {
            name: "Sen. Alex Padilla",
            state: "California",
            party: "Democrat",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Sen._Alex_Padilla_official_portrait%2C_117th_Congress.jpg",
            sbaRating: "F",
            term: "2021–2023",
            isCurrent: false,
        }
    };

    const selectedSenator = senatorData[tab];

    return (
        <>
            <Box sx={{ mx: 31.7 }}>
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
                        mt: { xs: 8, md: -2 },
                    }}>
                        <Box p={1}>
                            {/* Tabs */}
                            <Tabs
                                value={tab}
                                onChange={handleTabChange}
                                TabIndicatorProps={{ style: { display: 'none' } }}
                                sx={{
                                    backgroundColor: "#fff",
                                    color:"black"
                                }}
                            >
                                {Object.entries(senatorData).map(([term]) => (
                                    <Tab key={term} label={term} value={term} sx={{
                                        bgcolor: tab===term? "#90CAF9": "#fff",
                                        color:  tab===term? "black":"black", // Keep text black
                                        fontWeight: tab === term ? "bold" : "normal", // Bold for selected
                                        borderRadius: 0, // Remove rounded corners
                                        minWidth: 100,
                                        margin: 0, // Remove spacing between tabs
                                        padding: "12px 16px", // Standard padding
                                        "&.Mui-selected": {
                                          backgroundColor: "#90CAF9",
                                          fontWeight: "bold",
                                        },
                                        "&:not(:last-child)": {
                                          borderRight: "none", // Remove right border between tabs
                                        },
                                    }}/>
                                ))}
                            </Tabs>
                            <Divider sx={{borderBottomWidth:"2",color:"black"}} />

                            {/* Term Header */}
                            <Box mt={3} display="flex" alignItems="center">
                                <Typography variant="h3" fontWeight="bold" mr={1}>
                                    {selectedSenator.term}
                                </Typography>
                                {selectedSenator.isCurrent && (
                                    <Typography variant="h6" color="text.secondary">
                                        (Current term)
                                    </Typography>
                                )}
                            </Box>

                            {/* Senator Profile */}
                            <Box mt={4} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                                <Box display="flex" alignItems="center">
                                    <Avatar
                                        src={selectedSenator.imageUrl}
                                        alt={selectedSenator.name}
                                        sx={{ width: 120, height: 120, border: '4px solid #1976d2', mr: 3 }}
                                    />
                                    <Box>
                                        <Typography variant="h5" fontWeight="bold">
                                            {selectedSenator.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            {selectedSenator.state} ({selectedSenator.party})
                                        </Typography>
                                    </Box>
                                </Box>

                                <Card variant="outlined" sx={{
                                    width: 120,
                                    height: 120,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Typography variant="body2" color="text.secondary">
                                        SBA Rating:
                                    </Typography>
                                    <Typography variant="h3" fontWeight="bold">
                                        {selectedSenator.sbaRating}
                                    </Typography>
                                </Card>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </>
    );
};

export default Senator;
