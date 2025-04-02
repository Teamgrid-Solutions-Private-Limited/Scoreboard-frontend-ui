import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";


// Top Notification Bar
const TopBar = () => (

  <Box
    sx={{ position: "fixed",
    top: 0,
    left: 0,
    width: "98%",
    height: "6%",
    bgcolor: "#1a2a44",
    color: "white",
    py: 1,
    textAlign: "center",
    zIndex: 1100, // Ensure it stays on top
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: 2, // Add padding for spacing
  }}
>
  {/* Left Section - Marquee */}
  <Box sx={{ flex: 1, textAlign: "left", overflow: "hidden" }}>
    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
      <marquee>🚨 Hundreds of activists flood Congress to Defund Big Abortion</marquee>
    </Typography>
  </Box>

  {/* Right Section */}
  <Box sx={{ flex: 1, textAlign: "right",  }}>
    Right side content  <IconButton sx={{color:"white"}}>
              <FacebookIcon />
            </IconButton >
            <IconButton sx={{color:"white"}}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{color:"white"}}>
              <InstagramIcon />
            </IconButton >
            <IconButton sx={{color:"white"}}>
              <YouTubeIcon />
            </IconButton>
  </Box>
</Box>

  );

// Main Header
const Scorecard = () => {
  return (
    <>
    <Box display={"flex"} sx={{p:"2px",m:"5px", marginBottom:"2px"}}>
      {/* Top Notification Bar */}
      <TopBar />
      <Stack
					spacing={2}
					sx={{
						alignItems: "center",
						mx: 2.5,
						pb: 5,
						mt: { xs: 8, md: 5 },
					}}
				>
      {/* Main Navigation Bar */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "white",
          color: "black",
          // boxShadow: 1,
          top: "52px", // Push below TopBar
          left: 0,
          width: "100%",
          height:"15%",
          zIndex: 1000,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 8, py:3}}>
          
          {/* Left - Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="../../public/sba-logo.webp" // 
              alt="Logo"
              style={{ height: "55px" }}
            />
          </Box>

          {/* Center - Navigation Links */}
          <Box sx={{ display: "flex", gap:1 }}>
            <Button sx={{ color: "#666", fontWeight: "bold" }}>PREGNANT?</Button>
            <Button sx={{ color: "#d4a73e", fontWeight: "bold" }}>SCORECARD</Button>
            <Button sx={{ color: "#666" }}>NEWS</Button>
            <Button sx={{ color: "#666" }}>ELECTIONS</Button>
            <Button sx={{ color: "#666" }}>TAKE ACTION</Button>
          </Box>

          {/* Right - Icons & Donate */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          
            <Button
              variant="contained"
              sx={{ bgcolor: "#d4a73e", color: "white", borderRadius: "2px", px: 3 }}
            >
              ❤️ Donate
            </Button>
          </Box>

        </Toolbar>
      </AppBar>

      {/* Push Main Content Down */}
      {/* <Box sx={{ marginTop: "2px" }} /> */}
      <Box sx={{display:"flex", justifyContent:"right", alignItems:"right", mt:"0px", px:45}}>
        <img src="../../public/scorecard-header-1.jpg" alt="scroreboard" 
        width={"850px"}
        height={"300px"}
        />
      </Box>
      <Box>
        jgyesgfgGEAUSFGASUGF
      </Box>

      <Stack display={"flex"} direction={"row"}>
        gfhgfhfhfhutuit
      </Stack>
      </Stack>
      

      </Box>
    </>
  );
};

export default Scorecard;
