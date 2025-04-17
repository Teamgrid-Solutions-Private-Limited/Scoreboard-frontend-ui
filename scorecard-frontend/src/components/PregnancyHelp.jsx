import React, { useState, useEffect } from "react";
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

const stories = [
  {
    image: p7,
    title:
      "Kelly’s abortion drug story: “It was not simple.  It was not easy.  It was not painless.”",
    description:
      "She said that abortion seemed like the only option. Each time, she felt pressure to abort her child.",
  },
  {
    image: p8,
    title: "After the abortion, money didn’t matter, nothing mattered anymore",
    description:
      "I knew that I would face extreme sorrow for choosing abortion, and I was very scared and had no idea how my life could proceed with a child.",
  },
  {
    image: p9,
    title:
      "Elizabeth’s Story of Abortion Drug Coercion: “It Was the Worst Experience of My Life”",
    description:
      "My entire experience proved that my care was less important to them than the $800 my boyfriend slid across the table.",
  },
];

function Pregnancy() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.max(0.92, 1 - scrollY / 2500);
      setScale(newScale);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <Box sx={{ overflowX: "hidden", width: "100%", position: "relative" }}>
      <TopBar />
      <AppHeaderBar />
      <RightStickyTab />

      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: "600px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: "50%", sm: "350px" },
            left: { xs: "10%", sm: "20%" },
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: { xs: "30px", sm: "50px" },
            zIndex: 2,
            fontFamily: "freight-big-pro, sans-serif",
            transition: "transform 0.2s ease-out",
            transform: `scale(${scale})`,
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
            transform: `scale(${scale})`,
            transition: "transform 0.2s ease-out",
            display: "block",
          }}
        />
      </Box>

      {/* Intro */}
      <Box sx={{ mt: 6, mb: 4, px: 2, maxWidth: 1000, mx: "auto" }}>
        <Typography fontSize={18} color="#66625C">
          If you are pregnant, or wondering whether or not you are, your mind is
          probably racing with questions. It’s common to feel confused, scared
          or overwhelmed. Pregnancy centers provide caring, confidential, free
          support to anyone making choices about an unexpected pregnancy. They
          will answer your questions about pregnancy, abortion, adoption,
          parenting, and much more.
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          mt: 6,
          mb: 4,
          px: 2,
          backgroundColor: "#F5F5F5",
          borderRadius: 2,
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {cardData.map((item, index) => (
            <Grid item key={index}>
              <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
                <CardActionArea
                  sx={{
                    "& .hover-image": { transition: "transform 0.4s ease" },
                    "&:hover .hover-image": { transform: "scale(1.2)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                    className="hover-image"
                  />
                  <CardContent sx={{ height: 190 }}>
                    <Typography
                      variant="h5"
                      fontSize={24}
                      fontWeight="bold"
                      color="#173A5E"
                      mt={2}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize={18}
                      sx={{ color: "text.secondary", mt: 2 }}
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

      {/* Sections with Image + Text */}
      {[
        {
          img: p4,
          title: "Had an Abortion?",
          desc: "Learn about abortion healing retreats. Weekend retreats offer you a supportive, confidential and non-judgmental environment where women and men can express, release and reconcile painful post-abortive emotions to begin the process of restoration, renewal and healing.",
        },
        {
          img: p5,
          title: "Search the Her PLAN Directory",
          desc: "Explore how the Her PLAN (Her Pregnancy and Life Assistance Network) directory can facilitate finding the help you, a friend, or a family member needs.",
        },
      ].map((section, i) => (
        <Box key={i} sx={{ mt: 6, mb: 4, px: 2 }}>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            {i % 2 === 0 ? (
              <>
                <Grid item xs={12} md={6}>
                  <Box display="flex" justifyContent="center">
                    <img
                      src={section.img}
                      alt={`section-${i}`}
                      style={{
                        width: "100%",
                        maxWidth: 560,
                        height: 370,
                        borderRadius: 8,
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box textAlign="left" maxWidth={550}>
                    <Typography
                      variant="h4"
                      color="#173A5E"
                      fontWeight="bold"
                      mb={2}
                    >
                      {section.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: 18, mb: 3, color: "text.secondary" }}
                    >
                      {section.desc}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: 1,
                        fontWeight: "bold",
                        backgroundColor: "#CBA246",
                        height: "50px",
                        width: i === 1 ? "250px" : "150px",
                      }}
                    >
                      {i === 1 ? "SEARCH THE DIRECTORY" : "LEARN MORE"}
                    </Button>
                  </Box>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12} md={6}>
                  <Box textAlign="left" maxWidth={550}>
                    <Typography
                      variant="h4"
                      color="#173A5E"
                      fontWeight="bold"
                      mb={2}
                    >
                      {section.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: 18, mb: 3, color: "text.secondary" }}
                    >
                      {section.desc}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
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
                <Grid item xs={12} md={6}>
                  <Box display="flex" justifyContent="center">
                    <img
                      src={section.img}
                      alt={`section-${i}`}
                      style={{
                        width: "100%",
                        maxWidth: 560,
                        height: 370,
                        borderRadius: 8,
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
        </Box>
      ))}

      {/* Stories Carousel */}
      <Box
        sx={{
          mt: 6,
          mb: 4,
          px: 2,
          backgroundImage: "linear-gradient(90deg, #143050 0%, #325a86 36%)",
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box textAlign="right" maxWidth={500} >
              <Typography variant="h4" color="#fff" fontWeight="bold" mb={2}>
                Women share their stories
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: 18, mb: 3, color: "#fff" }}
              >
                You are not alone. Read stories from women who shared their own
                abortion experience.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                overflowX: "auto",
                display: "flex",
                gap: 3,
                py: 2,
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {stories.map((story, index) => (
                <Box
                  key={index}
                  sx={{
                    minWidth: 300,
                    height: 450,
                    backgroundImage: `url(${story.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
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
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      p: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ fontSize: 24, mb: 1 }}
                    >
                      {story.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: 16, opacity: 0.9 }}
                    >
                      {story.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Move "More Resources" Section Here */}
      <Box key={2} sx={{ mt: 6, mb: 4, px: 2 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Image on the left side */}
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <img
                src={p6}
                alt={`section-2`}
                style={{
                  width: "100%",
                  maxWidth: 560,
                  height: 370,
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>

          {/* Text on the right side */}
          <Grid item xs={12} md={6}>
            <Box textAlign="left" maxWidth={550}>
              <Typography variant="h4" color="#173A5E" fontWeight="bold" mb={2}>
                More Resources
              </Typography>
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
                          fontSize: 18,
                          "&:hover": { cursor: "pointer", color: "#173A5E" },
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
  );
}

export default Pregnancy;
