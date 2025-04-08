import React, { useState } from 'react'
import { Box, Typography, Menu, MenuItem } from '@mui/material'

const SenatorTopImg = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = (event) => {
        if (anchorEl && !anchorEl.contains(event.relatedTarget)) {
            setAnchorEl(null);
        }
    };

    return (
        <Box
        sx={{
          display: "flex",
          flexDirection: "row", // 👈 row layout
          justifyContent: "center", // centers the content block
          width: "100%",
          boxSizing: "border-box",
          px: 32,
        }}
      >
        {/* Inner content box (max 1000px wide) */}
        <Box
          sx={{
            width: "98%",
            maxWidth: "1000px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Image */}
          <Box>
            <img
              src="../../public/scorecard-header-1.jpg"
              alt="scoreboard"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
      
          {/* Red Navigation Row */}
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
              // px: 2,
              mt: "-6px",
              mb: 3,
              width: "100%",
              boxSizing: "border-box",
              
            }}
          >
            <Typography
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
              }}
            >
              SCORECARD HOME
            </Typography>
      
            {/* Dropdown */}
            <Box
              sx={{ cursor: "pointer", position: "relative" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Typography
                sx={{
                  display: "block",
            fontFamily: "Verdana, Geneva, sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "inherit",
            color: "#fff",
            // px: "15px",
            py: "19px",
            textTransform: "uppercase",
            transition: "all 0.6s",
            "&:hover": {
              backgroundColor: "#b70000",
            },
                }}
              >
                VOTES WE TRACK ▼
              </Typography>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMouseLeave}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "#d90000",
                    color: "white",
                    width: "190px",
                  },
                }}
                MenuListProps={{ onMouseLeave: handleMouseLeave }}
              >
                <MenuItem
                  onClick={handleMouseLeave}
                  sx={{
                    bgcolor: "#d90000",
                    "&:hover": { backgroundColor: "#9f0000" },
                  }}
                >
                  House
                </MenuItem>
                <MenuItem
                  onClick={handleMouseLeave}
                  sx={{
                    bgcolor: "#d90000",
                    "&:hover": { backgroundColor: "#7f0000" },
                  }}
                >
                  Senate
                </MenuItem>
              </Menu>
            </Box>
      
            <Typography
              sx={{
                display: "block",
                fontFamily: "Verdana, Geneva, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "inherit",
                color: "#fff",
                px: "15px",
                py: "20px",
                textTransform: "uppercase",
                transition: "all 0.6s",
                "&:hover": {
                  backgroundColor: "#b70000",
                },
              }}
            >
              ACTIVITY WE TRACK
            </Typography>
          </Box>
        </Box>
      </Box>
      
    )
}

export default SenatorTopImg