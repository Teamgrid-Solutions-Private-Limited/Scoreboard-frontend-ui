import React,{useState} from 'react'
import { Box, Typography,Menu,MenuItem } from '@mui/material'
const SenatorTopImg = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    // Open dropdown on hover
    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };
    // Close dropdown when mouse leaves
    const handleMouseLeave = (event) => {
        if (anchorEl && !anchorEl.contains(event.relatedTarget)) {
            setAnchorEl(null);
        }
    };

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent:"center",width:"100%",paddingTop:"185px",paddingLeft:"26%" ,paddingBottom:"12px"}}>
                <Box >
                    <img src="../../public/scorecard-header-1.jpg" alt="scroreboard"
                        width={"1000px"}
                        height={"269px"}
                        
                   />
                </Box>
                <Box sx={{
                    display: "flex", flexDirection: "row", width: "1000px", bgcolor: "#d90000", color: "white", justifyContent: "left", gap: 1, alignItems: "center", height: "58px",
                    position: "relative", px: "3px", boxSizing: "border-box",marginBottom:"24px", marginTop: "-6px",
                }}>
                    <Typography sx={{ fontFamily: " proxima-nova, sans-serif", fontSize: "15px" ,fontWeight:"700" }}>
                      SCOREBOARD HOME
                    </Typography>
                    <Box
                    sx={{ cursor: "pointer", position: "relative" }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Typography sx={{ fontFamily: "proxima-nova, sans-serif", fontSize: "15px", fontWeight: "700" }}>
                        VOTES WE TRACK ▼
                    </Typography>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMouseLeave}
                        sx={{ 
                            "& .MuiPaper-root": {  // Targets the dropdown container
                                backgroundColor: "#d90000", // Set background color
                                color: "white", // Set text color
                                width:"190px"
                            }
                        }}
                        MenuListProps={{ onMouseLeave: handleMouseLeave }}
                    >
                    <MenuItem onClick={handleMouseLeave}
                    sx={{
                        bgcolor:"#d90000",
                        "&:hover": { backgroundColor: "#7f0000" }
                    }}>House</MenuItem>
                    <MenuItem onClick={handleMouseLeave}    sx={{
                        bgcolor:"#d90000",
                        "&:hover": { backgroundColor: "#7f0000" }
                    }}>Senate</MenuItem>
                    </Menu>
                </Box> 
                    <Typography sx={{ fontFamily: " proxima-nova, sans-serif", fontSize: "15px" ,fontWeight:"700" }}>
                        ACTIVITY WE TRACK
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default SenatorTopImg