import React, { useState } from "react";
import {
  Paper,
  Tabs,
  Tab,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
  Button,
} from "@mui/material";
import TopBar from "./TopBar";
import AppHeaderBar from "./AppHeaderBar";
import SenatorTopImg from "./SenarorTopImg";
import Footer from "./Footer";
import CloseIcon from "@mui/icons-material/Close";
import img from "../assets/Schiff_Adam_119th_Congress.jpg";
import RightStickyTab from "./RightStickyTab";

function Representative() {
  const [activeTab, setActiveTab] = useState("2023");

  const sessions = {
    "116th Congress": [],
    "117th Congress": [],
    "118th Congress": [],
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const votes = [
    {
      date: "01/11/2023",
      title: "H.R. 26, the Born-Alive Abortion Survivors Protection Act",
      description:
        "Would reinforce the Born-Alive Infants Protection Act of 2002 by establishing affirmative federal protections for babies who are born alive after an attempted abortion.",
    },
    {
      date: "01/11/2023",
      title:
        "H.Con.Res.3, Expressing the sense of Congress condemning the recent attacks on pro-life facilities, groups, and churches.",
      description:
        "This resolution condemns attacks on pro-life facilities, groups, and churches and calls on the Biden administration to use appropriate law enforcement authorities to support their safety.",
    },
    {
      date: "06/14/2023",
      title: "Good Amendment #9 to H.R.277, REINS Act of 2023",
      description:
        "Would rein in executive actions by ensuring any such actions related to abortion would require Congressional approval before going into effect.",
    },
    {
      date: "07/13/2023",
      title:
        "Jackson-Roy Amendment #5 to H.R. 2670, National Defense Authorization Act for Fiscal Year 2024",
      description:
        "This amendment to the National Defense Authorization Act would roll back the Biden-Harris illegal DOD abortion travel policy issued under an October 2022 memorandum.",
    },
  ];

  const activity = [
    {
      date: "04/14/2023",
      title:
        "Alliance for Hippocratic Medicine v. U.S. Food and Drug Administration SCOTUS Amicus Brief",
      description:
        "This pro-life amicus brief asks the Supreme Court of the United States to deny a stay on a 5th Circuit ruling that would have returned chemical abortion drugs to the 2016 safety protocols, ending reckless and illegal mail-order abortion.",
    },
    {
      date: "08/10/2023",
      title:
        "H.R. 7, No Taxpayer Funding for Abortion and Abortion Insurance Full Disclosure Act of 2023 - Cosponsorship",
      description:
        "Would codify the Hyde amendment, ensuring that no federal funds could be used for abortions or to subsidize health plans that include abortion coverage.",
    },
    {
      date: "01/20/2023",
      title:
        "H.R. 427, the Support and Value Expectant (SAVE) Moms and Babies Act of 2023 - Cosponsorship",
      description:
        "Would prohibit the FDA from removing safety regulations for abortion drugs, stop abortion drugs from being dispensed remotely through the mail or via telemedicine, and prevent any future FDA approvals of new chemical abortion drugs.",
    },
  ];

  const RedXIcon = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="256" cy="256" r="256" fill="#E74C3C" />
    <path
      d="M342.6 169.4L288.2 224 342.6 278.6C349.4 285.4 349.4 296.6 342.6 303.4C335.8 310.2 324.6 310.2 317.8 303.4L263.4 248.8 209 303.4C202.2 310.2 191 310.2 184.2 303.4C177.4 296.6 177.4 285.4 184.2 278.6L238.6 224 184.2 169.4C177.4 162.6 177.4 151.4 184.2 144.6C191 137.8 202.2 137.8 209 144.6L263.4 199.2 317.8 144.6C324.6 137.8 335.8 137.8 342.6 144.6C349.4 151.4 349.4 162.6 342.6 169.4Z"
      fill="white"
    />
  </svg>
);
  

  return (
    <Box>
      <TopBar />
      <AppHeaderBar />
      <SenatorTopImg />
      <RightStickyTab/>

      <Box
        width={1000}
        sx={{
          pl: 32,
          alignItems: "center",
          justifyContent: "center",
          color: "#66625C",
        }}
      >
        <Paper elevation={0} sx={{ mb: 3, mt: 1 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            TabIndicatorProps={{ style: { display: "none" } }}
            sx={{
              backgroundColor: "#fff",
              borderBottom: "1px solid black",
            }}
          >
            {Object.keys(sessions).map((session) => (
              <Tab
                key={session}
                label={session}
                value={session}
                sx={{
                  backgroundColor:
                    activeTab === session ? "#90CAF9" : "white",
                  color: "black",
                  fontWeight: activeTab === session ? "bold" : "normal",
                  border: "none",
                  boxShadow: "none",
                  borderRadius: 0,
                  minWidth: 100,
                  margin: 0,
                  padding: "12px 16px",
                  "&.Mui-selected": {
                    backgroundColor: "#90CAF9",
                    fontWeight: "bold",
                  },
                  "&:hover": {
                    backgroundColor: "#E3F2FD",
                  },
                }}
              />
            ))}
          </Tabs>
        </Paper>

        <Typography variant="h4" fontSize={54}>
          118th Congress (Current Term)
        </Typography>

        <Box>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "start",
              mt: 4,
              height: "200px",
            }}
          >
            <Box
              sx={{
                width: 190,
                height: 190,
                borderRadius: "50%",
                backgroundColor: "#1976d2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt="Profile"
                  sx={{
                    width: 170,
                    height: 170,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h4"
                fontSize={36}
                sx={{ ml: 7, mt: 7, fontWeight: "light" }}
              >
                Rep. Adam Schiff
              </Typography>
              <Typography variant="h5" fontSize={14} sx={{ ml: 7, mt: 1 }}>
                CA-28 (Democrat)
              </Typography>
            </Box>
            <Box
              sx={{
                height: 130,
                width: 140,
                ml: 40,
                mt: 4,
                border: "2px solid black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Typography fontSize={14} sx={{ mb: 1 }}>
                SBA Rating:
              </Typography>
              <Typography
                variant="h4"
                fontSize={70}
                sx={{
                  fontWeight: "bold",
                  lineHeight: 1,
                  fontFamily: '"freight-text-pro", serif',
                }}
              >
                F
              </Typography>
            </Box>
          </Grid>
        </Box>

        <Typography sx={{ mt: 2, fontSize: 14 }}>
          Rep. Schiff has consistently voted to eliminate or prevent protections
          for the unborn and for children born alive after failed abortions...
        </Typography>

        <Box>
          <Typography sx={{ mt: 2, fontSize: 54 }}>Scored Votes</Typography>
          <Table sx={{ borderCollapse: "collapse", width: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    border: "1px solid #ccc",
                    backgroundColor: "#cce5ff",
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    border: "1px solid #ccc",
                    backgroundColor: "#cce5ff",
                  }}
                >
                  Vote
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    border: "1px solid #ccc",
                    backgroundColor: "#cce5ff",
                    textAlign: "center",
                  }}
                >
                  Score
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {votes.map((vote, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f5faff" : "#ffffff",
                  }}
                >
                  <TableCell
                    sx={{
                      border: "1px solid #ccc",
                      padding: "4px 8px",
                      fontSize: 14,
                    }}
                  >
                    {vote.date}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc", p: 1 }}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{ mb: 0.5 }}
                    >
                      {vote.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      {vote.description}
                    </Typography>
                    <Box mt={0.5} display="flex" gap={1}>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ fontSize: "0.7rem", textTransform: "none" }}
                      >
                        ROLL CALL
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ fontSize: "0.7rem", textTransform: "none" }}
                      >
                        READ MORE
                      </Button>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid #ccc",
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                  >
                    <CloseIcon sx={{ color: "red", fontSize: 36 }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <Box mb={2}>
          <Typography sx={{ mt: 2, fontSize: 54 }}>Tracked Activity: Bills Cosponsored & Letters Cosigned</Typography>
          <Typography sx={{ mt: 0, fontSize: 14 }}> As of January, 2024
            </Typography>
          <Table sx={{ borderCollapse: "collapse", width: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    border: "1px solid #ccc",
                    backgroundColor: "#cce5ff",
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    border: "1px solid #ccc",
                    backgroundColor: "#cce5ff",
                  }}
                >
                  Vote
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    border: "1px solid #ccc",
                    backgroundColor: "#cce5ff",
                    textAlign: "center",
                  }}
                >
                  Score
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {activity.map((activity, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f5faff" : "#ffffff",
                  }}
                >
                  <TableCell
                    sx={{
                      border: "1px solid #ccc",
                      padding: "4px 8px",
                      fontSize: 14,
                    }}
                  >
                    {activity.date}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc", p: 1 }}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{ mb: 0.5 }}
                    >
                      {activity.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      {activity.description}
                    </Typography>
                    <Box mt={0.5} display="flex" gap={1}>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ fontSize: "0.7rem", textTransform: "none" }}
                      >
                        READ MORE
                      </Button>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid #ccc",
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                  >
                    <CloseIcon sx={{ color: "red", fontSize: 36 }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Representative;
