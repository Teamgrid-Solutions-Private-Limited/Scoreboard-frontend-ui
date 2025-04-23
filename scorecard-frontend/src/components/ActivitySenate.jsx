import React, { useEffect, useState, useMemo } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  CircularProgress,
} from "@mui/material";
import TopBar from "../globalComponents/TopBar";
import AppHeaderBar from "../globalComponents/AppHeaderBar";
import Footer from "../globalComponents/Footer";
import SenatorTopImg from "../globalComponents/SenatorTopImg";
import RightStickyTab from "../globalComponents/RightStickyTab";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivity } from "../redux/action-reducer/activitySlice";
import { format } from "date-fns";

const AcitivitySenate = () => {
  const dispatch = useDispatch();
  const { activities, loading } = useSelector((state) => state.activity);

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    dispatch(getAllActivity());
  }, [dispatch]);

  // Group activities by 2-year session range (e.g., "2022–2024")
  const groupedActivities = useMemo(() => {
    if (!Array.isArray(activities)) return {};

    const senateActivities = activities.filter(
      (activity) => activity.type === "senate"
    );

    const sessionMap = senateActivities.reduce((acc, activity) => {
      const year = new Date(activity.date).getFullYear();
      const sessionStart = year % 2 === 0 ? year : year - 1; // Start on even year
      const sessionEnd = sessionStart + 2;
      const sessionKey = `${sessionStart}–${sessionEnd}`;

      if (!acc[sessionKey]) acc[sessionKey] = [];
      acc[sessionKey].push(activity);

      // Sort by date (newest first)
      acc[sessionKey].sort((a, b) => new Date(b.date) - new Date(a.date));

      return acc;
    }, {});

    return sessionMap;
  }, [activities]);

  // Set default tab to the first session key
  useEffect(() => {
    const sessions = Object.keys(groupedActivities);
    if (sessions.length > 0) {
      setActiveTab(sessions[0]);
    }
  }, [groupedActivities]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const formatDate = (date) => {
    return format(new Date(date), "MMMM dd, yyyy");
  };

  return (
    <Box>
      <TopBar />
      <AppHeaderBar />
      <RightStickyTab />
      <Box sx={{ pt: { xs: "10px", md: "180px" } , ml:-1 , mb: -2}}>
        <SenatorTopImg />
      </Box>

      <Box width={1000} sx={{ pl: 32, color: "#66625C" }}>
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="300px"
          >
           <Typography variant="body2" color="text.secondary">
                       No votes found for this session.
                     </Typography>
          </Box>
        ) : (
          <>
            <Paper
              sx={{
                mb: 3,
                mt: 1,
                boxShadow: "none",
                borderBottom: "1px solid #ccc",
              }}
            >
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  backgroundColor: "#fff",
                  "& .MuiTabs-indicator": { display: "none" },
                }}
              >
                {Object.keys(groupedActivities).map((sessionRange) => (
                  <Tab
                    key={sessionRange}
                    label={sessionRange}
                    value={sessionRange}
                     sx={{
                  backgroundColor: activeTab === sessionRange ? "#90CAF9" : "white",
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

            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#33567c", fontSize: "36px" }}
            >
              Senate: Activity We Track
            </Typography>

            {groupedActivities[activeTab]?.length > 0 ? (
              groupedActivities[activeTab].map((vote) => (
                <Box key={vote._id} sx={{ width: "100%", mb: 3 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: "#66625C",
                      fontSize: "54",
                      lineHeight: 1.2,
                    }}
                  >
                    {vote.title}
                  </Typography>
                  {/* <Typography variant="body2" color="textSecondary">
                    {formatDate(vote.date)}
                  </Typography> */}
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: vote.shortDesc }}
                  />
                  {vote.readMore && (
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                      {vote.readMore}
                    </Typography>
                  )}
                </Box>
              ))
            ) : (
              <Typography>No votes available for this session.</Typography>
            )}
          </>
        )}
      </Box>

      <Footer />
    </Box>
  );
};

export default AcitivitySenate;
