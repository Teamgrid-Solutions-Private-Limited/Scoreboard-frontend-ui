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
 
const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#143050",
          color: "white",
          width: "1515px",
          py: 4,
          mt: "auto",
          ml: "0px",
          height: "auto",
        }}
      >
        <Container maxWidth="lg" sx={{ width: "100%" }}>
          {/* Rest of your footer content remains the same */}
          <Grid container spacing={4}>
            {/* Logo Column */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <img
                src="/sba-logo.webp"
                alt="Susan B. Anthony Logo"
                style={{ height: "55px" }}
              />
            </Grid>
 
            {/* Navigation Links Column */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 2,
                  ml: { xs: 0, md: 12 },
                }}
              >
                {["ELECTION", "ABOUT", "SCORECARD", "NEWS", "CAREERS"].map(
                  (item) => (
                    <Button
                      key={item}
                      sx={{
                        color: "white",
                        fontFamily: "Verdana, Geneva, sans-serif",
                        fontSize: "16px",
                        fontWeight: 400,
                        minWidth: "auto",
                        textTransform: "none",
                        marginLeft: "10px",
                      }}
                    >
                      {item}
                    </Button>
                  )
                )}
              </Box>
            </Grid>
 
            {/* Social Icons Column */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{ textAlign: { xs: "center", md: "right" } }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                  gap: 1,
                  ml: { xs: 0, md: 5 },
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
      <Box sx={{ mt: 0, backgroundColor: "black" , height: "50px" , color: "white"}}>
        <Grid container spacing={2} sx={{ ml: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" sx={{ textAlign: { xs: "left", sm: "left" } , mt: 2 , color: "#638FC6" , ml: 21}}>
              © Copyright Susan B. Anthony Pro-life America 2005
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ textAlign: { xs: "left", sm: "right" } , mt: 1.5, color: "#638FC6"}}
          >
            <Link href="#" color="inherit" underline="hover" sx={{ mr: 4 , ml: 4}}>
              Terms of Use
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Privacy Notice
            </Link>
 
            <Link href="#" color="inherit" underline="hover" sx={{ ml: 50 }}>
              MADE BY DIGITAL ALCHEMY
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
 
export default Footer;