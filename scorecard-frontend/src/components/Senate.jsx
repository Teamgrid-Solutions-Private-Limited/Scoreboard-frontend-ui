import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import TopBar from "./TopBar";
import AppHeaderBar from "./AppHeaderBar";
import Footer from "./Footer";
import SenatorTopImg from "./SenarorTopImg";

const SenateScorecard = () => {
  const [activeTab, setActiveTab] = useState("2023-2024");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const sessions = {
    "2023-2024": [
      {
        id: 1,
        title: "On the Motion (Motion to Proceed to S.J.Res. 10)",
        description:
          "The Biden administration published an interim final rule (IFR) for the Department of Veterans Affairs (VA) on September 9, 2022, which violates federal and state laws by forcing taxpayer funding of abortion on demand and pro-abortion counseling through the VA, making abortion available for hundreds of thousands of veterans and their beneficiaries, effective immediately. The rule breaks with longstanding tradition by using taxpayer dollars to fund abortion and even converts Veterans health facilities into abortion centers. It directly asserts that abortions may be carried out in violation of state law. Furthermore, it is a clear violation of federal statute. This joint resolution, authored by Senator Tommy Tuberville (R-AL), provides for congressional disapproval under chapter 8 of title 5, United States Code, of the rule submitted by the Department of Veterans Affairs relating to “Reproductive Health Services.”",
      },
      {
        id: 2,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 3,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 4,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 5,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 6,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 7,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 8,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
    ],
    "2021-2022": [
      {
        id: 1,
        title: "Sasse Amendment No. 192 to S. Con. Res. 5, Budget Reconciliation bill",
        description:
          "This amendment would establish a deficit-neutral reserve fund relating to improving health care for abortion survivors, ensuring a health care practitioner would exercise the proper degree of care in the case of a child who survives an abortion or attempted abortion.",
      },
      {
        id: 2,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 3,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 4,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 5,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 6,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 7,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 8,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
    ],
    "2019-2020": [
      {
        id: 1,
        title: "On the Motion (Motion to Proceed to S.J.Res. 10)",
        description:
          "The Biden administration published an interim final rule (IFR) for the Department of Veterans Affairs (VA) on September 9, 2022, which violates federal and state laws by forcing taxpayer funding of abortion on demand and pro-abortion counseling through the VA, making abortion available for hundreds of thousands of veterans and their beneficiaries, effective immediately. The rule breaks with longstanding tradition by using taxpayer dollars to fund abortion and even converts Veterans health facilities into abortion centers. It directly asserts that abortions may be carried out in violation of state law. Furthermore, it is a clear violation of federal statute. This joint resolution, authored by Senator Tommy Tuberville (R-AL), provides for congressional disapproval under chapter 8 of title 5, United States Code, of the rule submitted by the Department of Veterans Affairs relating to “Reproductive Health Services.”",
      },
      {
        id: 2,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 3,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 4,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 5,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 6,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 7,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 8,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
    ],
    "2015-2018": [
      {
        id: 1,
        title: "On the Motion (Motion to Proceed to S.J.Res. 10)",
        description:
          "The Biden administration published an interim final rule (IFR) for the Department of Veterans Affairs (VA) on September 9, 2022, which violates federal and state laws by forcing taxpayer funding of abortion on demand and pro-abortion counseling through the VA, making abortion available for hundreds of thousands of veterans and their beneficiaries, effective immediately. The rule breaks with longstanding tradition by using taxpayer dollars to fund abortion and even converts Veterans health facilities into abortion centers. It directly asserts that abortions may be carried out in violation of state law. Furthermore, it is a clear violation of federal statute. This joint resolution, authored by Senator Tommy Tuberville (R-AL), provides for congressional disapproval under chapter 8 of title 5, United States Code, of the rule submitted by the Department of Veterans Affairs relating to “Reproductive Health Services.”",
      },
      {
        id: 2,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 3,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 4,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 5,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 6,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 7,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
      {
        id: 8,
        title:
          "On Cloture on the Motion to Proceed, Motion to Invoke Cloture: Motion to Proceed to S. J. Res. 4 (DOUBLE WEIGHTED)",
        description:
          "The Equal Rights Amendment (ERA) to the U.S. Constitution as proposed in 1972 and as interpreted by a wide range of legal scholars and by several lower courts, would install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the U.S. Constitution. The original ERA Joint Resolution passed in 1972 in the 92nd Congress, stated that the ERA would become a Constitutional amendment “when ratified by the legislatures of three-fourths of the several States within seven years from the date of its submission by the Congress.” When it failed to reach the required 38 states for ratification, Congress then attempted to extend the deadline by three more years, from 1979 to 1982, but no more states ratified the ERA during that period. Additionally, of the 35 states that had ratified the ERA during the timeline approved in 1972, the following five states voted either to rescind or sunset their ratification: Idaho, Kentucky, Nebraska, South Dakota, and Tennessee. Advocates for the ERA are trying to enact a gimmick through this joint resolution that would let them have it both ways. They want to count the states that attempted to ratify the ERA decades late—long after the deadline for ratification had passed— and the states that have rescinded their earlier ratification.",
      },
    ],
  };

  return (
    <Box>
      <Box
        width={1000}
        sx={{ pl: 35, alignItems: "center", justifyContent: "center" }}
      >
        <TopBar />
        <AppHeaderBar />
        {/* <Scorecard /> */}
        <SenatorTopImg />
        <Paper sx={{ mb: 3, mt: 1 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {Object.keys(sessions).map((session) => (
              <Tab key={session} label={session} value={session} />
            ))}
          </Tabs>
        </Paper>
        <Typography variant="h4" gutterBottom>
          Senate: Votes We Score
        </Typography>
        {sessions[activeTab].map((vote) => (
          <Box key={vote.id} sx={{ width: "100%", mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h2">{vote.title}</Typography>
            </Box>
            <Typography variant="subtitle2" color="text.secondary">
              {vote.date} | {vote.voteType} | Position: {vote.position}
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              {vote.description}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" gutterBottom>
              Vote Details
            </Typography>
            <Typography>{vote.description}</Typography>
          </Box>
        ))}
      </Box>

      <Footer />
    </Box>
  );
};

export default SenateScorecard;
