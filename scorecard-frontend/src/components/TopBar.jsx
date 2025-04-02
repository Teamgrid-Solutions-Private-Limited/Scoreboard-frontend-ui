import React from 'react'
import { Box, Typography, Icon, IconButton } from '@mui/material';
import { } from "@mui/icons-material"
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import InstagramIcon from "@mui/icons-material/Instagram";

import YouTubeIcon from "@mui/icons-material/YouTube";


const TopBar = () => {
    return (

        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "98%",
                height: "6%",
                bgcolor: "#1c2f48",
                color: "white",
                py: 1,
                zIndex: 1100,
                display: "flex",
                flexDirection: { xs: "row", md: "row" },
                justifyContent: { xs: "center", md: "space-between" },
                alignItems: "center",
                px: 2,
            }}
        >
            {/* Left Section - Marquee */}
            <Box sx={{
                flexGrow: 1,
                overflow: "hidden",
                whiteSpace: "nowrap",
                display: { xs: "none", md: "block" }, // Hide on xs
            }}>
                <Typography
                    variant="body2"
                    sx={{
                        fontStyle: "italic",
                        display: "inline-block",
                        animation: "scrollText 10s linear infinite",
                        "@keyframes scrollText": {
                            "0%": { transform: "translateX(100%)" },
                            "100%": { transform: "translateX(-100%)" },
                        },
                    }}
                >
                    🚨 Hundreds of activists flood Congress to Defund Big Abortion
                </Typography>
            </Box>

            {/* Right Section */}
            <Box sx={{
                display: "flex",
                gap: 1,
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
                width: { xs: "100%", md: "auto" },
            }}>
                Right side content  <IconButton sx={{ color: "white" }}>
                    <FacebookIcon />
                </IconButton >
                <IconButton sx={{ color: "white" }}>
                    <TwitterIcon />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                    <InstagramIcon />
                </IconButton >
                <IconButton sx={{ color: "white" }}>
                    <YouTubeIcon />
                </IconButton>
            </Box>
        </Box>

    );

}

export default TopBar