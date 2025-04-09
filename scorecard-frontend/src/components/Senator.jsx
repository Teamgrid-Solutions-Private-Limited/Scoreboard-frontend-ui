import React from 'react';
import { Box, Typography, Stack,Card,Tab,Tabs, Avatar, CardContent  } from '@mui/material';
import TopBar from './TopBar';
import AppHeaderBar from './AppHeaderBar';
import SenatorTopImg from './SenatorTopImg';
import RightStickyTab from './RightStickyTab';
import { useState } from 'react';

const Senator = () => {

    const [tab, setTab] = useState(0);

    const handleTabChange = (_, newValue) => {
        setTab(newValue);
    };
    return (
        <>
            <Box sx={{
                mx: 31.7,
            }}>

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
                        // pb: 8,
                        display: "flex",
                        width: "100%",
                    }}>
                        <SenatorTopImg />
                    </Box>
                    <Stack
                        spacing={2}
                        sx={{
                            // alignItems: "start",
                            // mx: 31.7,
                            justifyContent: "center",
                            // paddingX: "4px",
                            width: "99%",
                            overflowX: "hidden",
                            pb: 5,
                            mt: { xs: 8, md: -2 },
                        }}
                    >
                        {/* <Box sx={{ width: "80%" }}> */}
                        {/* <Typography component="h2" variant="h6" sx={{ fontSize: "54px", fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: "#66625c", }}>
                            Senate
                        </Typography> */}
                        <Box p={1}>
                            {/* Tabs */}
                            <Tabs value={tab} onChange={handleTabChange} aria-label="term tabs">
                                <Tab label="2023–2029" />
                                <Tab label="2021–2023" />
                            </Tabs>

                            {/* Term Header */}
                            <Box mt={3} display="flex" alignItems="center">
                                <Typography variant="h3" fontWeight="bold" mr={1}>
                                    2023–2029
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                    (Current term)
                                </Typography>
                            </Box>

                            {/* Senator Profile Section */}
                            <Box mt={4} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                                {/* Left: Image + Name + State */}
                                <Box display="flex" alignItems="center">
                                    <Avatar
                                        src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Sen._Alex_Padilla_official_portrait%2C_117th_Congress.jpg"
                                        alt="Senator"
                                        sx={{ width: 120, height: 120, border: '4px solid #1976d2', mr: 3 }}
                                    />
                                    <Box>
                                        <Typography variant="h5" fontWeight="bold">
                                            Sen. Alex Padilla
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            California (Democrat)
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Right: SBA Rating */}
                                <Card variant="outlined" sx={{ width: 120, height: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        SBA Rating:
                                    </Typography>
                                    <Typography variant="h3" fontWeight="bold">
                                        F
                                    </Typography>
                                </Card>
                            </Box>

                            {/* Summary Section */}
                            <Box mt={6}>
                                <Typography variant="h4" fontWeight="bold">
                                    Summary
                                </Typography>
                                {/* Add more summary content here */}
                            </Box>
                        </Box>





                    </Stack>
                </Box>
            </Box>

        </>
    )
}

export default Senator