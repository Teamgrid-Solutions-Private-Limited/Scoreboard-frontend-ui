import React from "react";
import { Box, CssBaseline, Container, Stack } from "@mui/material";
import   TopBar from "./TopBar";
import AppHeaderBar from "./AppHeaderBar";
import Scorecard from "./Scorecard";
import SenatorTopImg from "./SenatorTopImg"
const CustomizedGrid = ({ children }) => {
    return (
        <>
            <CssBaseline /> {/* Ensures consistent styling */}
            <Box
                component="header"
                sx={{
                    position: "sticky",
                    top: 0,
                    left: 0,
                    backgroundColor: "#fff",
                    // boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 10px",
                    zIndex: 99,
                    display: "block",
                }}
            >
             <TopBar/>
             <AppHeaderBar/>
             
            
            </Box>
            <Container
                component="main"
                sx={{
                    fontFamily: `"Helvetica Neue", Helvetica, Arial, sans-serif`,
                    fontSize: "14px",
                    lineHeight: 1.42857143,
                    color: "#333",
                    backgroundColor: "#fff",
                    boxSizing: "border-box",
                    "& *": { boxSizing: "inherit" }, // Applies box-sizing globally
                }}
            >
                {children}
               <SenatorTopImg/>
                <Scorecard/>
            </Container>
        </>
    );
};

export default CustomizedGrid;
