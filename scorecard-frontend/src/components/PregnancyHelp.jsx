import React from "react";
import TopBar from "./TopBar";
import AppHeaderBar from "./AppHeaderBar";
import RightStickyTab from "./RightStickyTab";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Footer from "./Footer";
import PregImg from "../assets/PregImage.jpg";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpeg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";

const adoptionResources = [
  "Talk About Adoption",
  "Pregnancy Decision Line",
  "Abortion Pill Reversal: It may not be too late",
  "Standing With You",
  "Care-Net: Find a Pregnancy Center",
  "OptionLine: Text 'HELPLINE' to 313131",
  "Abortion Changes You: Begin Healing Now",
  "Poor Prenatal Diagnosis?",
];

// Added stories array for the carousel section
const stories = [
  {
    image: p7,
    title: "Kelly’s abortion drug story: “It was not simple.  It was not easy.  It was not painless.”",
    description: "She said that abortion seemed like the only option. Each time, she felt pressure to abort her child.",
  },
  {
    image: p8,
    title: "After the abortion, money didn’t matter, nothing mattered anymore",
    description: "I knew that I would face extreme sorrow for choosing abortion, and I was very scared and had no idea how my life could proceed with a child.",
  },
  {
    image: p9,
    title: "Elizabeth’s Story of Abortion Drug Coercion: “It Was the Worst Experience of My Life”",
    description: "My entire experience proved that my care was less important to them than the $800 my boyfriend slid across the table.",
  },
];

function Pregnancy() {
  const cardData = [
    {
      image: p1,
      title: "Find a Pregnancy Center Near You",
      description:
        "Ultrasounds, baby supplies, caring support & more… at little or no cost to you!",
    },
    {
      image: p2,
      title: "Talk to Someone",
      description:
        "Call the helpline on 1-800-712-4357 for confidential counseling..",
    },
    {
      image: p3,
      title: "Live Chat",
      description:
        "Talk to someone who cares. Live chat, any time, day or night.",
    },
  ];

  return (
    <>
      <Box>
        <TopBar />
        <AppHeaderBar />
        <RightStickyTab />

        {/* Hero Section */}
        <Box
          sx={{
            width: "100vw",
            height: "600px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "350px",
              left: "20%",
              transform: "translateX(-50%)",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "50px",
              zIndex: 2,
              fontFamily: "freight-big-pro, sans-serif",
            }}
          >
            Pregnant? Need Help?
          </Box>
          <img
            src={PregImg}
            alt="pregimg"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Intro Paragraph */}
        <Box sx={{ mt: 6, mb: 4, mx: "auto", px: 4, maxWidth: 1000 }}>
          <Typography fontSize={18} color="#66625C">
            If you are pregnant, or wondering whether or not you are, your mind
            is probably racing with questions. It's common to feel confused,
            scared or overwhelmed. Pregnancy centers provide caring,
            confidential, free support to anyone making choices about an
            unexpected pregnancy. They will answer your questions about
            pregnancy, abortion, adoption, parenting, and much more.
          </Typography>
        </Box>

        {/* Cards Section */}
        <Box
          sx={{
            mt: 6,
            mb: 4,
            mx: "auto",
            width: "97vw",
            backgroundColor: "#F5F5F5",
            padding: 4,
            borderRadius: 2,
          }}
        >
          <Grid container spacing={3} justifyContent="center">
            {cardData.map((item, index) => (
              <Grid item key={index}>
                <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent sx={{ height: 190 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontSize={24}
                        color="#173A5E"
                        fontWeight="bold"
                        mt={2}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mt: 2, fontSize: 18 }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Image + Text Side by Side Section */}
        <Box
          sx={{
            width: "97vw",
            backgroundColor: "#fff",
            padding: 4,
            borderRadius: 2,
            mb: 6,
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            wrap="nowrap"
          >
            {/* IMAGE on the LEFT */}
            <Grid item xs={12} md={6} ml={-10}>
              <Box display="flex" justifyContent="center" ml={10}>
                <img
                  src={p4}
                  alt="p4"
                  style={{
                    width: "560px",
                    height: "370px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>

            {/* TEXT on the RIGHT */}
            <Grid item xs={12} md={6} ml={5}>
              <Box textAlign="left" width="550px">
                <Typography
                  variant="h4"
                  color="#173A5E"
                  fontWeight="bold"
                  mb={2}
                >
                  Had an Abortion?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: 18, mb: 3, color: "text.secondary" }}
                >
                  Learn about abortion healing retreats. Weekend retreats offer
                  you a supportive, confidential and non-judgmental environment
                  where women and men can express, release and reconcile painful
                  post-abortive emotions to begin the process of restoration,
                  renewal and healing.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 1,
                    fontWeight: "bold",
                    backgroundColor: "#CBA246",
                    height: "50px",
                    width: "150px",
                  }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            mx: "auto",
            width: "97vw",
            height: "550px",
            backgroundColor: "#F5F5F5",
            padding: 2,
            borderRadius: 2,
            mb: 0,
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            wrap="nowrap"
          >
            <Grid item xs={12} md={6} ml={5}>
              <Box textAlign="left" width="550px">
                <Typography
                  variant="h4"
                  color="#173A5E"
                  fontWeight="bold"
                  mb={2}
                >
                  Search the Her PLAN Directory
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: 18, mb: 3, color: "text.secondary" }}
                >
                  Explore how the Her PLAN (Her Pregnancy and Life Assistance
                  Network) directory can facilitate finding the help you, a
                  friend, or a family member needs.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 1,
                    fontWeight: "bold",
                    backgroundColor: "#CBA246",
                    height: "50px",
                    width: "250px",
                  }}
                >
                  SEARCH THE DIRECTORY
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} ml={-10}>
              <Box display="flex" justifyContent="center" ml={10}>
                <img
                  src={p5}
                  alt="p5"
                  style={{
                    width: "560px",
                    height: "370px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Stories Carousel Section */}
        <Box
          sx={{
            mx: "auto",
            width: "97vw",
            height: "550px",
            backgroundImage: "linear-gradient(90deg, #143050 0%, #325a86 36%)",
            padding: 2,
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            wrap="nowrap"
          >
            <Grid item xs={12} md={6} ml={10}>
              <Box textAlign="left" width="450px">
                <Typography variant="h4" color="#fff" fontWeight="bold" mb={2}>
                  Women share their stories
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: 18, mb: 3, color: "#fff" }}
                >
                  You are not alone. Read stories from women who shared their
                  own abortion experience.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} ml={0}>
              <Box sx={{ px: 4, py: 6, width: "950px", alignItems: "end" }}>
                <Box
                  sx={{
                    display: "flex",
                    overflowX: "auto",
                    gap: 3,
                    scrollSnapType: "x mandatory",
                    scrollbarWidth: "none", // Firefox
                    "&::-webkit-scrollbar": { display: "none" }, // Chrome
                  }}
                >
                  {stories.map((story, index) => (
                    <Box
                      key={index}
                      sx={{
                        flex: "0 0 40%", // show 3 cards at a time4
                        minWidth: "150px",
                        height: 450,
                        overflow: "hidden",
                        position: "relative",
                        backgroundImage: `url(${story.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        scrollSnapAlign: "start",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 100%)",
                          color: "white",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          p: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{ mb: 5, fontSize: 24 }}
                        >
                          {story.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{mb: 10, opacity: 0.9, fontSize: 16 }}
                        >
                          {story.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            width: "97vw",
            backgroundColor: "#fff",
            padding: 4,
            borderRadius: 2,
            mb: 6,
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            wrap="nowrap"
          >
            {/* IMAGE on the LEFT */}
            <Grid item xs={12} md={6} ml={-10}>
              <Box display="flex" justifyContent="center" ml={10}>
                <img
                  src={p6}
                  alt="p6"
                  style={{
                    width: "560px",
                    height: "370px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>

            {/* TEXT on the RIGHT */}
            <Grid item xs={12} md={6} ml={5}>
              <Box textAlign="left" width="550px">
                <Typography
                  variant="h4"
                  color="#173A5E"
                  fontWeight="bold"
                  mb={2}
                >
                  More Resources
                </Typography>

                {/* Replacing paragraph with the list */}
                <List component="ul" sx={{ listStyleType: "disc", pl: 3 }}>
                  {adoptionResources.map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{ display: "list-item", py: 0.1, px: 0 }}
                    >
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          sx: {
                            color: "#CBA246",
                            fontWeight: "bold",
                            fontSize: "18px",
                            lineHeight: 1.4,
                            "&:hover": {
                              cursor: "pointer",
                              color: "#173A5E",
                            },
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Footer />
      </Box>
    </>
  );
}

export default Pregnancy;
