import React from 'react'
import { Box,Toolbar,AppBar,Button, IconButton } from '@mui/material'
import FavoriteIcon from "@mui/icons-material/Favorite"
import SearchIcon from "@mui/icons-material/Search"
const AppHeaderBar = () => {
  return (
    <AppBar
    position="fixed"
    sx={{
      bgcolor: "white",
      color: "black",
      // boxShadow: 1,
      top: "61px", // Push below TopBar
      left: 0,
      width: "100%",
      zIndex: 1000,
      paddingTop:"16px",
      height:{xs:"auto",md:"14%"}
    }}
  >
    <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: {xs:2,md:5},}}>
      
      {/* Left - Logo */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src="../../public/sba-logo.webp" // 
          alt="Logo"
          style={{ height: "55px" }}
        />
      </Box>

      {/* Center - Navigation Links */}
      <Box sx={{ display: "flex", gap:2}}>
        <Button sx={{ color: "#666" ,fontFamily:" Verdana, Geneva, sans-serif", fontSize: "16px",fontWeight: "400" }}>PREGNANT?</Button>
        <Button sx={{ color: "#d4a73e" ,fontFamily:" Verdana, Geneva, sans-serif", fontSize: "16px",fontWeight: "400" }}>SCORECARD</Button>
        <Button sx={{ color: "#666" ,fontFamily:" Verdana, Geneva, sans-serif", fontSize: "16px",fontWeight: "400" }}>NEWS</Button>
        <Button sx={{ color: "#666" ,fontFamily:" Verdana, Geneva, sans-serif", fontSize: "16px",fontWeight: "400" }}>ELECTIONS</Button>
        <Button sx={{ color: "#666",fontFamily:" Verdana, Geneva, sans-serif", fontSize: "16px",fontWeight: "400"  }}>TAKE ACTION</Button>
      </Box>

      {/* Right - Icons & Donate */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>   
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <Button
          variant="contained"
         
          sx={{
            // px: 5,
            // py: 2,
            minWidth: "100px",
            height: "48px",
            color:" #fff",
            fontSize: "15px",
            fontWeight: "500",
            backgroundColor:" #CBA246",
            lineHeight: "48px",
            padding: "0px 25px",
            borderRadius:"4px",
            textTransform: "none",
            gap:1
            
          }}
        >
           Donate
           <FavoriteIcon sx={{ color: "white" }} /> {/* White heart icon */}
        </Button>
      </Box>

    </Toolbar>
  </AppBar>
  )
}

export default AppHeaderBar