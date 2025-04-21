import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Divider,
} from "@mui/material";
import TopBar from "../globalComponents/TopBar";
import AppHeaderBar from "../globalComponents/AppHeaderBar";
import Footer from "../globalComponents/Footer";
import SenatorTopImg from "../globalComponents/SenatorTopImg";
import RightStickyTab from "../globalComponents/RightStickyTab";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivity } from "../redux/action-reducer/activitySlice";
import { getAllTerms } from "../redux/action-reducer/termSlice";

// Function to get the term range based on the year of the activity's date
const getTermFromDate = (date) => {
  const year = new Date(date).getFullYear();
  if (year >= 2024) return "2024–2025";
  if (year >= 2023) return "2023–2024";
  if (year >= 2022) return "2022–2023";
  return null; // If the year does not fall in the predefined terms
};

const ActivityHouse = () => {
  const staticTerms = ["2024–2025", "2023–2024", "2021–2022"];
  const [activeTab, setActiveTab] = useState(staticTerms[0]);
  const { activities } = useSelector((state) => state.activity);
  const { terms } = useSelector((state) => state.term);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllActivity());
    dispatch(getAllTerms());
  }, [dispatch]);

  // Filter activities based on type "house" and match the term based on date
  const houseActivities = activities
    .filter((activity) => activity.type === "house")
    .map((activity) => ({
      ...activity,
      term: getTermFromDate(activity.date), // Add term based on date
    }));

  // Static Terms
 

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <TopBar />
      <AppHeaderBar />
      <RightStickyTab />
      <Box
        sx={{
          pt: { xs: "10px", md: "180px" }, // Adds space below the fixed header
        }}
      >
        <SenatorTopImg />
      </Box>
      <Box
        width={1000}
        sx={{ pl: 32, alignItems: "center", justifyContent: "center", color: "#66625C" }}
      >
        <Paper sx={{ mb: 2, mt: -.5, boxShadow: "none", borderBottom: "1px solid #ccc" }}>
          {/* Static Term Tabs */}
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              backgroundColor: "#fff",
              borderBottom: "none",
              outline: "none",
              "& .MuiTabs-indicator": {
                display: "none",
              },
             
            }}
          >
            {staticTerms.map((term) => (
              <Tab
                key={term}
                label={term}
                value={term}
                sx={{
                  backgroundColor: activeTab === term ? "#90CAF9" : "white",
                  color: "black",
                  borderRadius: 0,
                  fontWeight: "700",

                  minWidth: 100,
                  margin: 0,
                  display: "block",
                  // padding: "1rem 2rem",
                  marginRight: ".2rem",
                  fontSize: "14px",
                  lineHeight: "1.42857143",
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  padding: "18px 20px",
                  "&.Mui-selected": {
                    backgroundColor: "#90CAF9",
                    color: "#333333",
                    fontWeight: "bold",
                  },
                  "&:not(:last-child)": {
                    borderRight: "none",
                  },
                  "&:focus":{
                    outline:"none"
                  }
                }}
              />
            ))}
          </Tabs>
        </Paper>

        <Typography variant="h2" gutterBottom sx={{ color: "#33567c",
            fontSize: "36px",
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontWeight: "500",
         }}>
          House: Activity We Track
        </Typography>

        {/* Display activities for the selected term */}
        {houseActivities
          .filter((activity) => activity.term === activeTab) // Filter activities based on the selected term
          .map((activity) => (
            <Box key={activity._id} sx={{ width: "100%", mb: 10, color: "#66625C" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h2"    sx={{
                  fontize: "10px",
                  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                  color: "66625c",
                  lineHeight: "64px"
                }}>
                  {activity.title}
                </Typography>
              </Box>
              {/* <Typography variant="subtitle2" color="#66625C">
                {new Date(activity.date).toLocaleDateString()}
              </Typography> */}


              {/* Display the short description as HTML */}
              <Typography fontSize={14} dangerouslySetInnerHTML={{ __html: activity.shortDesc }} />
            </Box>
          ))}
      </Box>

      <Footer />
    </Box>
  );
};

export default ActivityHouse;
