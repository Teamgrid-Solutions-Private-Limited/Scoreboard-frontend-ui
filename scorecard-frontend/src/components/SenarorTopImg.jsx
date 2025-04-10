import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SenatorTopImg = () => {
  const [votesAnchorEl, setVotesAnchorEl] = useState(null);
  const [activityAnchorEl, setActivityAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleVotesEnter = (event) => {
    setVotesAnchorEl(event.currentTarget);
  };

  const handleVotesLeave = (event) => {
    if (votesAnchorEl && !votesAnchorEl.contains(event.relatedTarget)) {
      setVotesAnchorEl(null);
    }
  };

  const handleActivityEnter = (event) => {
    setActivityAnchorEl(event.currentTarget);
  };

  const handleActivityLeave = (event) => {
    if (activityAnchorEl && !activityAnchorEl.contains(event.relatedTarget)) {
      setActivityAnchorEl(null);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingTop: { xs: "100px", sm: "150px", md: "185px" },
        paddingBottom: "12px",
      }}
    >
      <Box>
        <img
          src="../../public/scorecard-header-1.jpg"
          alt="scoreboard"
          width="100%"
          height="auto"
          style={{ maxWidth: "1000px", width: "100%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "994px",
          bgcolor: "#d90000",
          color: "white",
          gap: 3,
          alignItems: "center",
          height: "58px",
          px: "3px",
          marginBottom: "24px",
          marginTop: "-6px",
          flexWrap: "wrap",
        }}
      >
        <Typography
          sx={{
            fontFamily: "proxima-nova, sans-serif",
            fontSize: { xs: "11px", sm: "14px" },
            fontWeight: "550",
            ml: "10px",
          }}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          SCORECARD HOME
        </Typography>

        {/* Votes Dropdown */}
        <Box
          sx={{ cursor: "pointer", position: "relative" }}
          onMouseEnter={handleVotesEnter}
          onMouseLeave={handleVotesLeave}
        >
          <Typography
            sx={{
              fontFamily: "proxima-nova, sans-serif",
              fontSize: { xs: "11px", sm: "14px" },
              fontWeight: "550",
            }}
          >
            VOTES WE TRACK ▼
          </Typography>
          <Menu
            anchorEl={votesAnchorEl}
            open={Boolean(votesAnchorEl)}
            onClose={handleVotesLeave}
            MenuListProps={{ onMouseLeave: handleVotesLeave }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#d90000",
                color: "white",
                width: "190px",
              },
            }}
          >
            <MenuItem
              onClick={() => navigate("/senate")}
              sx={{ bgcolor: "#d90000", "&:hover": { backgroundColor: "#7f0000" } }}
            >
              Senate
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/house")}
              sx={{ bgcolor: "#d90000", "&:hover": { backgroundColor: "#7f0000" } }}
            >
              House
            </MenuItem>
          </Menu>
        </Box>

        {/* Activity Dropdown */}
        <Box
          sx={{ cursor: "pointer", position: "relative" }}
          onMouseEnter={handleActivityEnter}
          onMouseLeave={handleActivityLeave}
        >
          <Typography
            sx={{
              fontFamily: "proxima-nova, sans-serif",
              fontSize: { xs: "11px", sm: "14px" },
              fontWeight: "550",
            }}
          >
            ACTIVITY WE TRACK ▼
          </Typography>
          <Menu
            anchorEl={activityAnchorEl}
            open={Boolean(activityAnchorEl)}
            onClose={handleActivityLeave}
            MenuListProps={{ onMouseLeave: handleActivityLeave }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#d90000",
                color: "white",
                width: "190px",
              },
            }}
          >
            <MenuItem
              onClick={() => navigate("/activity-senate")}
              sx={{ bgcolor: "#d90000", "&:hover": { backgroundColor: "#7f0000" } }}
            >
              Senate
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/activity-house")}
              sx={{ bgcolor: "#d90000", "&:hover": { backgroundColor: "#7f0000" } }}
            >
              House
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default SenatorTopImg;
