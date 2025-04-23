import React, { useState } from 'react'
import { Box, Typography, Icon, IconButton, Menu, MenuItem, MenuList, AppBar } from '@mui/material';
import { } from "@mui/icons-material"
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from '@mui/icons-material/X';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
        <AppBar
            elevation={0}
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "60px",
                lineHeight: "60px",
                bgcolor: "#1c2f48",
                color: "white",
                py: 2,
                zIndex: 9999,
                display: "flex",
                // flexWrap:"wrap",
                flexDirection: { xs: "row", md: "row" },
                justifyContent: { xs: "center", md: "space-between" },
                alignItems: "center",
                maxWidth: "inherit",
                px: "50px",
                boxSizing: "border-box",
                overflow: "hidden", //
            }}
        >
            {/* Left Section - Marquee */}
            <Box sx={{
                // flexGrow: 1,
                // width:"100%",
                paddingRight: "220px",
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
                    📢 Hundreds of activists flood Congress to Defund Big Abortion
                </Typography>
            </Box>
            {/* Right Section */}
            <Box sx={{
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "space-between" },
                alignItems: "center",
                width: { xs: "100%", md: "auto" },
                p: "5px"
            }}>
                {/* <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}> */}
                <Box
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Typography
                        sx={{
                            cursor: "pointer",
                            color: "white",
                            display: "flex", // make sure icon aligns well
                            alignItems: "center",
                            lineHeight: "100px",
                            height: "100px",
                            padding: "0 10px",
                            verticalAlign: "baseline",
                            width: "auto",
                            textTransform: "none",
                            textDecoration: "none",
                            textAlign: "left",
                            background: "rgba(0, 0, 0, 0)",
                            border: 0,
                            borderRadius: 0,
                            fontFamily: "Verdana, Geneva, sans-serif",
                            fontSize: "16px",
                            fontWeight: 400,
                            outline: "none",
                        }}
                    >
                        About <KeyboardArrowDownIcon sx={{ fontSize: "18px", ml: 0.5 }} />
                    </Typography>
                    {/* <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMouseLeave}
                        sx={{ mt: "-20px" }}
                        MenuListProps={{ onMouseLeave: handleMouseLeave }} // Ensures menu closes when leaving
                    >
                        <MenuItem onClick={handleMouseLeave}>Our Team</MenuItem>
                        <MenuItem onClick={handleMouseLeave}>Mission</MenuItem>
                        <MenuItem onClick={handleMouseLeave}>Contact Us</MenuItem>
                    </Menu> */}
                </Box>
                <Typography sx={{
                    color: "white",
                    display: "block",
                    lineHeight: "100px",
                    height: "100px",
                    padding: "0 10px",
                    verticalAlign: "baseline",
                    width: "auto",
                    textTransform: "none",
                    textDecoration: "none",
                    textAlign: "left",
                    background: "rgba(0, 0, 0, 0)",
                    border: 0,
                    borderRadius: 0,
                    fontFamily: "Verdana, Geneva, sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    outline: "none",
                    cursor: "pointer",


                }}>
                    Employment
                </Typography>
                <Box
  sx={{
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize: "14px",
    lineHeight: "17px",
    columnGap: "4px", // Optional: controls horizontal gap globally
  }}
>
  <IconButton sx={{ color: "white", padding: "4px" }}>
    <FacebookIcon sx={{ fontSize: "16px" }} />
  </IconButton>
  <IconButton sx={{ color: "white", padding: "4px" }}>
    <XIcon sx={{ fontSize: "16px" }} />
  </IconButton>
  <IconButton sx={{ color: "white", padding: "4px" }}>
    <InstagramIcon sx={{ fontSize: "16px" }} />
  </IconButton>
  <IconButton sx={{ color: "white", padding: "4px" }}>
    <YouTubeIcon sx={{ fontSize: "16px" }} />
  </IconButton>
</Box>

            </Box>
        </AppBar>
    );
}
export default TopBar