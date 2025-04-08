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
import TopBar from "./TopBar";
import AppHeaderBar from "./AppHeaderBar";

// Main Header
const Scorecard = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        //  sx={{p:"2px",m:"5px", marginBottom:"2px"}}
      >
        {/* Top Notification Bar */}
        <TopBar />

        {/* <Stack
					spacing={2}
					sx={{
						alignItems: "center",
						mx: 2.5,
						pb: 5,
						mt: { xs: 8, md: 5 },
					}}
				> */}
        {/* Main Navigation Bar */}

        <AppHeaderBar />
        {/* Push Main Content Down */}
        {/* <Box sx={{ marginTop: "2px" }} /> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "right",
            mt: "0px",
            px: 45,
          }}
        >
          <img
            src="../../public/scorecard-header-1.jpg"
            alt="scroreboard"
            width={"850px"}
            height={"300px"}
          />
        </Box>
        <Box>{/* <Senate/> */}</Box>

        <Stack display={"flex"} direction={"row"}>
          gfhgfhfhfhutuit
        </Stack>
        {/* </Stack> */}
      </Box>
    </>
  );
};

export default Scorecard;
