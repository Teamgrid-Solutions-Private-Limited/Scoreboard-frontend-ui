import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Table,
  Divider,
} from "@mui/material";
import TopBar from "./TopBar";
import AppHeaderBar from "./AppHeaderBar";
import Footer from "./Footer";
import SenatorTopImg from "./SenarorTopImg";

const AcitivitySenate = () => {
  const [activeTab, setActiveTab] = useState("2023-2024");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const sessions = {
    "2023-2024": [
      {
        id: 1,
        title: "Alliance for Hippocratic Medicine v. U.S. Food and Drug Administration SCOTUS Amicus Brief",
        description:
          "This pro-life amicus brief asks the Supreme Court of the United States to deny a stay on a 5th Circuit ruling that would have returned chemical abortion drugs to the 2016 safety protocols, ending reckless and illegal mail-order abortion. The Alliance for Hippocratic Medicine v. U.S. Food and Drug Administration case was brought by doctors and health groups who sued the FDA over its improper approval of chemical abortion drugs and the reckless removal of safety protocols in the years since the original approval. The FDA did not adhere to its own standards of approvals, when pressured by the Clinton administration to make the chemical abortion drug available in America. The Obama administration further pressured the FDA to remove safety protocols, and the Biden administration has recklessly made these drugs available without in-person screenings, through the mail, leaving women and girls at greater risk of dangerous complications..”",
      },
      {
        id: 2,
        title:
          "S. 95, the Support and Value Expectant (SAVE) Moms and Babies Act of 2023 – Cosponsorship",
        description:
          "S. 95 would prevent approval of new abortion drugs by the U.S. Food and Drug Administration (FDA), prohibit the FDA from removing safety regulations of already-approved abortion drugs, and stop abortion drugs from being dispensed remotely by mail or through telemedicine. The abortion industry’s drastic shift to chemical self-abortion is deeply disturbing as it carries with it the possibility of increasing the rate of abortion over time and carries with it a higher rate of injury, about which women are often underinformed or deceived. SBA Pro-Life America strongly supports this bill and urges Members to cosponsor it. Cosponsorship demonstrates recognition of the importance of this legislation.",
      },
      {
        id: 3,
        title:
          "S. 62, No Taxpayer Funding for Abortion and Abortion Insurance Full Disclosure Act of 2023 – Cosponsorship",
        description:
          "S. 62 would codify the Hyde Amendment, by establishing a permanent, government-wide prohibition on federal funding for abortion, prohibiting federal subsidies in the form of Obamacare tax credits for health plans that include abortion, and strengthening disclosure requirements for plans that include abortion. SBA Pro-Life America strongly supports this bill and urges Senators to cosponsor it. Cosponsorship demonstrates recognition of the importance of this legislation.",
      },
      {
        id: 4,
        title:
          "S. 204, Born-Alive Abortion Survivors Protection Act – Cosponsorship",
        description:
          "S. 204 would build on the Born-Alive Infants Protection Act of 2002 by criminalizing infanticide and clarifying the standard of care that must be given to babies born alive after failed abortions. Failure to provide this standard of reasonable care would lead to criminal prosecution of the abortionist, not the mother. In addition, the mother has a civil remedy of action against the abortionist should he fail to comply with the law. SBA Pro-Life America strongly supports S. 123 and urges cosponsorship. Cosponsorship demonstrates recognition of the importance of this legislation.",
      }
    ],
    "2021-2022": [
      {
        id: 1,
        title:
          "S. 123, the Born-Alive Abortion Survivors Protection Act – Cosponsorship",
        description:
          "S. 123 would build on the Born-Alive Infants Protection Act of 2002 by criminalizing infanticide and clarifying the standard of care that must be given to babies born alive after failed abortions. Failure to provide this standard of reasonable care would lead to criminal prosecution of the abortionist, not the mother. In addition, the mother has a civil remedy of action against the abortionist should he fail to comply with the law. SBA Pro-Life America strongly supports S. 123 and urges cosponsorship. Cosponsorship demonstrates recognition of the importance of this legislation.",
      },
      {
        id: 2,
        title:
          "S. 78, the Support and Value Expectant Moms and Babies Act – Cosponsorship",
        description:
          "S. 78 would prevent approval of new abortion drugs by the U.S. Food and Drug Administration (FDA), prevent the loosening of FDA regulation of already-approved abortion drugs, and prevent abortion drugs from being dispensed remotely by mail or through telemedicine. The abortion industry’s migration to chemical do-it-yourself abortion is deeply disturbing as it carries with it the possibility of increasing the rate of abortion over time and carries with it a higher rate of injury, about which women are often underinformed or deceived. SBA Pro-Life America strongly supports this bill and urges Members to cosponsor it. Cosponsorship demonstrates recognition of the importance of this legislation.",
      },
      {
        id: 3,
        title:
          "S. 92, the No Taxpayer Funding for Abortion and Abortion Insurance Full Disclosure Act – Cosponsorship",
        description:
          "S. 92 would codify the Hyde Amendment, by establishing a permanent, government-wide prohibition on federal funding for abortion, prohibiting federal subsidies in the form of Obamacare tax credits for health plans that include abortion, and strengthening disclosure requirements for plans that include abortion. SBA Pro-Life America strongly supports this bill and urges Senators to cosponsor it. Cosponsorship demonstrates recognition of the importance of this legislation.",
      },
      {
        id: 4,
        title:
          "S. 61, the Pain-Capable Unborn Child Protection Act – Cosponsorship",
        description:
          "S. 61 would protect unborn children halfway through pregnancy based on their ability to feel excruciating pain. Previous uninformed notions that unborn and newborn babies could not feel pain, or misinformation on the ability of preterm infants to survive, are refuted by a growing body of scientific evidence. The Pain-Capable bill is an important step in matching our public policy with the growing body of scientific evidence of pain and advancing perinatal medicine. SBA Pro-Life America strongly supports S. 61 and urges cosponsorship. Cosponsorship demonstrates recognition of the importance of this legislation.",
      },
      {
        id: 5,
        title:
          "Daines Hyde Amendment Letter to Leader Schumer",
        description:
          "This letter to Senate Majority Leader Chuck Schumer puts him on notice that the cosigning senators will vote against advancing any legislation that weakens or eliminates current pro-life protections including the Hyde Amendment, or any legislation that undermines federal pro-life policy.",
      },
      {
        id: 6,
        title:
          "Dobbs v. Jackson Women’s Health Organization Congressional amicus brief",
        description:
          "The Supreme Court has agreed to take up a Mississippi late-term abortion case, Dobbs v. Jackson Women’s Health Organization, in the October 2021 term. The question being considered in this historic case is “Whether all pre-viability prohibitions on elective abortions are unconstitutional.” The Congressional pro-life amicus brief specifically argues the faulty reasoning of the viability standard: it remains undefined by the court, it has been relied on as a prohibition on regulating abortion, and it restricts legislators from furthering critical state interests. Further, the brief argues that the viability standard prevents reasonable regulations for protecting: women’s health; unborn children from pain during late-term abortions; the medical profession; and states’ ability to prevent discrimination abortion based on disability. Finally, it asks that Roe v. Wade and Planned Parenthood v. Casey be reconsidered, and if appropriate, wholly or partially overruled.",
      },
      {
        id: 7,
        title:
          "S. 4840, Protecting Pain-Capable Unborn Children from Late-Term Abortions Act – Cosponsorship",
        description:
          "S. 4840 would protect unborn children at 15 weeks’ gestation based on new science proving their ability to feel excruciating pain at least by this point. Previous uninformed notions that unborn and newborn babies could not feel pain have been refuted by a growing body of scientific evidence. The Protecting Pain-Capable Unborn Children bill is an important step both in matching our public policy with the growing body of scientific evidence of pain and advancing perinatal medicine and in responding to the overturning of Roe v. Wade. SBA Pro-Life America strongly supports H.R. 8814 and urges cosponsorship. Cosponsorship demonstrates recognition of the need for federal limits on abortion to protect the unborn in this new Dobbs era.",
      }
    ],
    "2019-2020": [
      {
        id: 1,
        title: "S. 109, the No Taxpayer Funding for Abortion and Abortion Insurance Full Disclosure Act – Cosponsorship",
        description:
          "S. 109 would codify the Hyde Amendment, by establishing a permanent, government-wide prohibition on federal funding for abortion, prohibiting federal subsidies in the form of Obamacare tax credits for health plans that include abortion, and strengthening disclosure requirements for plans that include abortion. SBA Pro-Life America strongly supports this bill and urges Senators to cosponsor it. Cosponsorship demonstrates recognition of the importance of this legislation.",
      },
      {
        id: 2,
        title:
          "S. 160, the Pain-Capable Unborn Child Protection Act – Cosponsorship",
        description:
          "S. 160 would protect unborn children halfway through pregnancy based on their ability to feel excruciating pain. Previous uninformed notions that unborn and newborn babies could not feel pain, or misinformation on the ability of preterm infants to survive, are refuted by a growing body of scientific evidence. The Pain-Capable bill is an important step in matching our public policy with the growing body of scientific evidence of pain and advancing perinatal medicine. SBA Pro-Life America strongly supports S. 160 and urges cosponsorship. Cosponsorship demonstrates recognition of the importance of this legislation.",
      },
      {
        id: 3,
        title:
          "Letter to President Donald J. Trump",
        description:
          "SBA Pro-Life America strongly supported this letter by pro-life Senators calling on the President to veto any legislation that comes to his desk that weakens pro-life protections on taxpayer funding or any other federal policy on abortion. Presidents George H.W. Bush and George W. Bush signed similar letters during their presidencies. This preemptive guarantee, which President Trump announced in January 2019 was critical given the new pro-abortion majority in the House of Representatives. SBA Pro-Life America strongly supported this letter and urged Members to sign it. Signing this letter demonstrates the recognition of the importance of defending pro-life policies.",
      },
      {
        id: 4,
        title:
          "S.130/S.311, the Born-Alive Abortion Survivors Protection Act – Cosponsorship",
        description:
          "S. 130/S. 311 would build on the Born-Alive Infants Protection Act of 2002 by criminalizing infanticide and clarifying the standard of care that must be given to babies born alive after failed abortions. Failure to provide this standard of reasonable care would lead to criminal prosecution of the abortionist, not the mother. In addition, the mother has a civil remedy of action against the abortionist should he fail to comply with the law. SBA Pro-Life America strongly supports S. 130/S. 311 and urges cosponsorship. Cosponsorship demonstrates recognition of the importance of this legislation.",
      },
      {
        id: 5,
        title:
          "Letter opposing funding for fetal tissue research)",
        description:
          "SBA Pro-Life America strongly supported a letter thanking the president for his strong stance on excluding funding for research involving aborted fetal tissue and urging his continued resolve. Abortion activists and public officials used the coronavirus pandemic to push back against this life-affirming position, saying fetal tissue was necessary to find a cure. Despite these claims, the best science does not involve fetal tissue, and many potential cures for the coronavirus are already being researched using ethical science.",
      },
      {
        id: 6,
        title:
          "Bicameral letter regarding chemical abortion restrictions",
        description:
          "SBA Pro-Life America strongly supported a letter encouraging FDA Commissioner to uphold restrictions on the dispensing of chemical abortion put in place for the safety of women. Abortion activists and public officials used the coronavirus pandemic as an excuse to call for making self-managed abortion more accessible to women. In response, this letter points out the that chemical abortion is riskier than surgical abortion for moms, not to mention the fatal result for each unborn child. The FDA’s requirements for the dispensing of chemical abortion drugs are necessary to protect women.",
      },
      {
        id: 7,
        title:
          "S. 3072, the Support and Value Expectant Moms and Babies Act – Cosponsorship",
        description:
          "S. 3072 would prevent approval of new abortion drugs by the U.S. Food and Drug Administration (FDA), prevent the loosening of FDA regulation of already-approved abortion drugs, and prevent abortion drugs from being dispensed remotely by mail or through telemedicine. The abortion industry’s migration to chemical do-it-yourself abortion is deeply disturbing as it carries with it the possibility of increasing the rate of abortion over time and carries with it a higher rate of injury, about which women are often underinformed or deceived. SBA Pro-Life America strongly supports this bill and urges Members to cosponsor it. Cosponsorship demonstrates recognition of the importance of this legislation. ",
      }
    ]
  };

  return (
    <Box>
      <TopBar />
      <AppHeaderBar />
      {/* <Scorecard /> */}
      <SenatorTopImg />
      <Box
        width={1000}
        sx={{ pl: 32, alignItems: "center", justifyContent: "center",color :"#66625C" }}
      >
        <Paper sx={{ mb: 3, mt: 1, boxShadow: "none" }}>
          {" "}
          {/* Remove Paper shadow if any */}
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              backgroundColor: "#fff", // White background
              borderBottom: "none", // Remove default bottom border of Tabs
            }}
          >
            {Object.keys(sessions).map((session) => (
              <Tab
                key={session}
                label={session}
                value={session}
                sx={{
                  backgroundColor: activeTab === session ? "#90CAF9" : "white", // Light blue for selected
                  color: "black", // Keep text black
                  fontWeight: activeTab === session ? "bold" : "normal", // Bold for selected
                  borderRadius: 0, // Remove rounded corners
                  minWidth: 100,
                  margin: 0, // Remove spacing between tabs
                  padding: "12px 16px", // Standard padding
                  "&.Mui-selected": {
                    backgroundColor: "#90CAF9",
                    fontWeight: "bold",
                  },
                  "&:not(:last-child)": {
                    borderRight: "none", // Remove right border between tabs
                  },
                }}
              />
            ))}
          </Tabs>
        </Paper>

        <Typography variant="h4" gutterBottom sx={{color:"#33567c"}} >
          Senate: Activity We Track
        </Typography>
        {sessions[activeTab].map((vote) => (
          <Box key={vote.id} sx={{ width: "100%", mb: 3 , color :"#66625C"}}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h2" color="#66625C">{vote.title}</Typography>
            </Box>
            <Typography variant="subtitle2" color="#66625C">
              {vote.date}  {vote.voteType}
            </Typography>

            {/* <Typography paragraph sx={{ mb: 3 }}>
              {vote.description}
            </Typography> */}

            <Divider sx={{ my: 2 }} />

            {/* <Typography variant="subtitle1" gutterBottom>
              Vote Details
            </Typography> */}
            <Typography>{vote.description}</Typography>
          </Box>
        ))}
      </Box>

      <Footer />
    </Box>
  );
};

export default AcitivitySenate;
