import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ScorecardImg from "../assets/scorecard-header-1.jpg";
import { FaAngleDown } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const SenatorTopImg = () => {
  const [votesAnchorEl, setVotesAnchorEl] = useState(null);
  const [activityAnchorEl, setActivityAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleVotesEnter = (event) => {
    setVotesAnchorEl(event.currentTarget);
  };

  const handleVotesLeave = () => {
    setVotesAnchorEl(null);
  };

  const handleActivityEnter = (event) => {
    setActivityAnchorEl(event.currentTarget);
  };

  const handleActivityLeave = () => {
    setActivityAnchorEl(null);
  };

  const handleNavigate = (path, closeMenu) => {
    closeMenu();
    navigate(path);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        boxSizing: "border-box",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Image */}
        <Box>
          <img
            src={ScorecardImg}
            alt="scoreboard"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        {/* Navigation Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            bgcolor: "#d90000",
            color: "white",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 2,
            height: "58px",
            mt: "-7px",
            mb: 3,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <Typography
            onClick={() => navigate("/")}
            sx={{
              display: "block",
              fontFamily: "Verdana, Geneva, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "inherit",
              color: "#fff",
              px: "12px",
              py: "20px",
              textTransform: "uppercase",
              transition: "all 0.6s",
              "&:hover": {
                backgroundColor: "#b70000",
              },
              cursor: "pointer",
            }}
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
                display: "block",
                fontFamily: "Verdana, Geneva, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "inherit",
                color: "#fff",
                py: "19px",
                textTransform: "uppercase",
                transition: "all 0.6s",
                "&:hover": {
                  backgroundColor: "#b70000",
                },
              }}
            >
              VOTES WE TRACK {Boolean(votesAnchorEl) ? <FaTimes /> : <FaAngleDown />}
            </Typography>
            <Menu
              anchorEl={votesAnchorEl}
              open={Boolean(votesAnchorEl)}
              onClose={handleVotesLeave}
              disableScrollLock={true}
              sx={{
                pointerEvents: "none",
                "& .MuiPaper-root": {
                  backgroundColor: "#d90000",
                  color: "white",
                  width: "210px",
                  pointerEvents: "auto",
                  padding: 0,
                },
                "& .MuiList-root": {
                  padding: 0,
                },
              }}
            >
              <MenuItem
                onClick={() => handleNavigate("/senate", () => setVotesAnchorEl(null))}
                sx={{
                  bgcolor: "#d90000",
                  borderBottom: "1px solid #fff",
                  "&:hover": { backgroundColor: "#9f0000" },
                  width: "100%",
                  margin: 0,
                  padding: "12px 16px",
                  display: "block",
                  boxSizing: "border-box",
                }}
              >
                Senate
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigate("/house", () => setVotesAnchorEl(null))}
                sx={{
                  bgcolor: "#d90000",
                  "&:hover": { backgroundColor: "#7f0000" },
                  width: "100%",
                  margin: 0,
                  padding: "12px 16px",
                  display: "block",
                  boxSizing: "border-box",
                }}
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
                display: "block",
                fontFamily: "Verdana, Geneva, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "inherit",
                color: "#fff",
                py: "19px",
                textTransform: "uppercase",
                transition: "all 0.6s",
                "&:hover": {
                  backgroundColor: "#b70000",
                },
              }}
            >
              ACTIVITY WE TRACK {Boolean(activityAnchorEl) ? <FaTimes /> : <FaAngleDown />}
            </Typography>
            <Menu
              anchorEl={activityAnchorEl}
              open={Boolean(activityAnchorEl)}
              onClose={handleActivityLeave}
              disableScrollLock={true}
              sx={{
                pointerEvents: "none",
                "& .MuiPaper-root": {
                  backgroundColor: "#d90000",
                  color: "white",
                  width: "210px",
                  pointerEvents: "auto",
                  padding: 0,
                },
                "& .MuiList-root": {
                  padding: 0,
                },
              }}
            >
              <MenuItem
                onClick={() => handleNavigate("/activity-senate", () => setActivityAnchorEl(null))}
                sx={{
                  bgcolor: "#d90000",
                  borderBottom: "1px solid #fff",
                  "&:hover": { backgroundColor: "#7f0000" },
                  width: "100%",
                  margin: 0,
                  padding: "12px 16px",
                  display: "block",
                  boxSizing: "border-box",
                }}
              >
                Senate
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigate("/activity-house", () => setActivityAnchorEl(null))}
                sx={{
                  bgcolor: "#d90000",
                  "&:hover": { backgroundColor: "#7f0000" },
                  width: "100%",
                  margin: 0,
                  padding: "12px 16px",
                  display: "block",
                  boxSizing: "border-box",
                }}
              >
                House
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SenatorTopImg;