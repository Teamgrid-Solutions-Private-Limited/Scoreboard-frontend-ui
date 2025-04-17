import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";
import logo1 from "../assets/sba-logo.webp";
import logo from "../assets/image.png"
 
const Footer = () => {
  return (
    <>
      {/* Main Footer Section */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#143050",
          color: "white",
          py: 4,
          mt: "auto",
          width: "1520px",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Logo Column */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <img
                src={logo1}
                alt="Susan B. Anthony Logo"
                style={{ height: "55px" }}
              />
            </Grid>
 
            {/* Navigation Links */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 1,
                  ml: 9,
                }}
              >
                {["ELECTIONS", "ABOUT", "SCORECARD", "NEWS", "CAREERS"].map(
                  (item) => (
                    <Button
                      key={item}
                      sx={{
                        color: "white",
                        fontFamily: "proxima-nova, sans-serif",
                        fontSize: "14px",
                        fontWeight: "bold",
                        letterSpacing: "0.15em", // slight spacing like the image
                        textTransform: "uppercase", // make it all caps
                        px: 2, // horizontal padding
                        py: 2, // vertical padding
                      }}
                    >
                      {item}
                    </Button>
                  )
                )}
              </Box>
            </Grid>
 
            {/* Social Icons */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{ textAlign: { xs: "center", md: "end" }, ml: 6 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                  gap: 1,
                  mt: 1,
                  ml: { md: "auto" },
                }}
              >
                <IconButton sx={{ color: "white" }} aria-label="Facebook">
                  <Facebook />
                </IconButton>
                <IconButton sx={{ color: "white" }} aria-label="Twitter">
                  <Twitter />
                </IconButton>
                <IconButton sx={{ color: "white" }} aria-label="Instagram">
                  <Instagram />
                </IconButton>
                <IconButton sx={{ color: "white" }} aria-label="YouTube">
                  <YouTube />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
 
      {/* Bottom Strip */}
      <Box sx={{ backgroundColor: "black", color: "#638FC6", py: 2 }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="space-between">
            {/* Left Text */}
            <Grid item xs={12} md={6} sx={{ mb: { xs: 1, md: 0 } }}>
              <Typography
                variant="body2"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  fontSize: "12px",
                }}
              >
                © Copyright Susan B. Anthony Pro-life America 2005
                <Link href="#" underline="hover" color="inherit" sx={{ml:2}}>
                Terms of Use
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ml:2}}>
                Privacy Notice
              </Link>
              </Typography>
            </Grid>
 
            {/* Right Links and Credit */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2,
                fontSize: "12px",
              }}
            >
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  textDecoration: "none",
                }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    height: 15,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "1px solid black",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, fontSize: "12px" }}
                >
                  MADE BY DIGITAL ALCHEMY
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
 
export default Footer;