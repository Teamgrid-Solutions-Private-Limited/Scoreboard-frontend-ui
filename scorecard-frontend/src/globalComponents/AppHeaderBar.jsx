import React from 'react'
import { Box, Toolbar, AppBar, Button, IconButton } from '@mui/material'
import FavoriteIcon from "@mui/icons-material/Favorite"
import SearchIcon from "@mui/icons-material/Search"
import { useNavigate, useLocation } from 'react-router-dom'
import appLogo from "../assets/sba-logo.webp"

const AppHeaderBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route location

  const handleScorecard = () => {
    navigate("/")
  }

  // Helper function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "white",
        top: "60px",
        left: 0,
        width: "100%",
        zIndex: 1000,
        paddingTop: "16px",
        height: { xs: "auto", md: "100px" },
        boxShadow: "0px 4px 12px rgba(2, 2, 2, 0.11)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: { xs: 2, md: 5 } }}>
        
        {/* Left - Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={appLogo}
            alt="Logo"
            style={{ height: "55px" }}
          />
        </Box>

        {/* Center - Navigation Links */}
        <Box sx={{ gap: 1, display: { xs: "none", md: "flex" }, flexWrap: "wrap", justifyContent: { xs: "center", md: "space-between" } }}>
          <Button 
            sx={{ 
              color: isActive("/pregnancy-help") ? "#d4a73e" : "#666",
              fontFamily: "Verdana, Geneva, sans-serif", 
              fontSize: "16px",
              fontWeight: "400",  
              "&:hover": { color: "#d4a73e",backgroundColor: "transparent" },
              "&:focus": {
                outline: "none"
              },
            }} 
            onClick={() => { navigate("/pregnancy-help") }}
          >
            PREGNANT?
          </Button>
          <Button 
            sx={{ 
              color: isActive("/") ? "#d4a73e" : "#666",
              fontFamily: "Verdana, Geneva, sans-serif", 
              fontSize: "16px",
              fontWeight: "400",
              "&:hover": { color: "#d4a73e",backgroundColor: "transparent" },
              "&:focus": {
                outline: "none"
              },
            }} 
            onClick={handleScorecard}
          >
            SCORECARD
          </Button>
          <Button 
            sx={{ 
              color: isActive("/news") ? "#d4a73e" : "#666",
              fontFamily: "Verdana, Geneva, sans-serif", 
              fontSize: "16px",
              fontWeight: "400",
              "&:hover": { color: "#d4a73e",backgroundColor: "transparent" },
              "&:focus": {
                outline: "none"
              },
            }}
          >
            NEWS
          </Button>
          <Button 
            sx={{ 
              color: isActive("/elections") ? "#d4a73e" : "#666",
              fontFamily: "Verdana, Geneva, sans-serif", 
              fontSize: "16px",
              fontWeight: "400",
              "&:hover": { color: "#d4a73e",backgroundColor: "transparent" },
              "&:focus": {
                outline: "none"
              },
            }}
          >
            ELECTIONS
          </Button>
          <Button 
            sx={{ 
              color: isActive("/take-action") ? "#d4a73e" : "#666",
              fontFamily: "Verdana, Geneva, sans-serif", 
              fontSize: "16px",
              fontWeight: "400",
              "&:hover": { color: "#d4a73e",backgroundColor: "transparent" },
              "&:focus": {
                outline: "none"
              },
            }}
          >
            TAKE ACTION
          </Button>
        </Box>

        {/* Right - Icons & Donate */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>   
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <Button
            variant="contained"
            sx={{
              minWidth: "100px",
              height: "48px",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "500",
              backgroundColor: "#CBA246",
              lineHeight: "48px",
              padding: "0px 25px",
              borderRadius: "4px",
              textTransform: "none",
              gap: 1
            }}
          >
            Donate
            <FavoriteIcon sx={{ color: "white" }} />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeaderBar