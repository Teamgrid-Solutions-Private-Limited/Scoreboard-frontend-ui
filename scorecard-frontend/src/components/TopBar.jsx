import React, { useState } from 'react'
import { Box, Typography, Icon, IconButton,Menu,MenuItem,MenuList } from '@mui/material';
import { } from "@mui/icons-material"
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from '@mui/icons-material/X';
const TopBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    // Open dropdown on hover
    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };
    // Close dropdown when mouse leaves
    const handleMouseLeave = () => {
        setAnchorEl(null);
    };
    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "60px",
                lineHeight:"60px",
                bgcolor: "#1c2f48",
                color: "white",
                py: 2,
                zIndex: 9999,
                display: "flex",
                // flexWrap:"wrap",
                flexDirection: { xs: "row", md: "row" },
                justifyContent: { xs: "center", md: "space-between" },
                alignItems: "center",
                maxWidth:"inherit",
                px: "50px",
                boxSizing:"border-box",
                overflow: "hidden", //
            }}
        >
        {/* Left Section - Marquee */}
            <Box sx={{
                 // flexGrow: 1,
                // width:"100%",
                paddingRight:"220px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                display: { xs: "none", md: "block" },
                // Hide on xs
            }}>
                <Typography
                    variant="body2"
                    sx={{
                        fontStyle: "italic",
                        // display: "inline-block",
                        animation: "scrollText 11s linear infinite",
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
                p:"5px"
            }}>
                {/* <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}> */}
                   <Box 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                >
                    <Typography sx={{ cursor: "pointer", color: "white" }}>
                        About ▼
                    </Typography>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMouseLeave}
                        sx={{ mt: "10px" }}
                        MenuListProps={{ onMouseLeave: handleMouseLeave }} // Ensures menu closes when leaving
                    >
                        <MenuItem onClick={handleMouseLeave}>Our Team</MenuItem>
                        <MenuItem onClick={handleMouseLeave}>Mission</MenuItem>
                        <MenuItem onClick={handleMouseLeave}>Contact Us</MenuItem>
                    </Menu>
                </Box>
                <Typography sx={{color:"white"}}>
                    Employeement
                </Typography>

                <IconButton sx={{ color: "white" }}>
                    <FacebookIcon />
                </IconButton >
                <IconButton sx={{ color: "white" }}>
                <XIcon/>
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