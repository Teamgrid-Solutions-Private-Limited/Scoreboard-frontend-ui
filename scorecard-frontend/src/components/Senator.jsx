import React from 'react';
import { Box,Typography,Stack } from '@mui/material';
import TopBar from './TopBar';
import AppHeaderBar from './AppHeaderBar';
import SenatorTopImg from './SenatorTopImg';
import RightStickyTab from './RightStickyTab';

const Senator = () => {
    return (
        <>
            <Box sx={{ display: "flex" }}>

                <TopBar />
                <AppHeaderBar />
                <RightStickyTab />
                <Box
                    component="main"
                    sx={() => ({
                        overflowX: "hidden",
                    })}
                >

                    <Box sx={{
                        mt: { xs: "10px", md: '0px' }, // <-- Adds space below the fixed header (adjust height as needed)
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
                    </Stack>
                </Box>
            </Box>

        </>
    )
}

export default Senator