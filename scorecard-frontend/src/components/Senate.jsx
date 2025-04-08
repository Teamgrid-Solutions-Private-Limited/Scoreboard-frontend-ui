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
          "Cloture Vote on Rikelman Nomination",
        description:
          "President Joe Biden nominated Julie Rikelman to the First Circuit Court of Appeals. Rikelman’s career has been strictly centered around a radical, pro-abortion agenda for over two decades. She began working at the Center for Reproductive Rights in 1999 as Blackmun Fellow, returned to the organization as a senior staff attorney in 2011, and has served as litigation director for the Center for Reproductive Rights since 2012. In addition to arguing the pro-abortion side in the United States Supreme Court cases June Medical Services v. Russo, and Dobbs v. Jackson Women’s Health Organization, Rikelman has worked to challenge the constitutionality of parental notification laws and informed consent laws. She has also led efforts to expand the dispensing of chemical abortion pills by calling for the FDA to permanently lift the risk evaluation mitigation strategy (REMS) protocols, claiming that leaving the REMS in place will “unnecessarily burden access to safe medication for abortion miscarriage care.",
      },
      {
        id: 4,
        title:
          "On the Motion to Table (Motion to Table Schumer Amdt. No. 1373)",
        description:
          "President Joe Biden nominated Julie Rikelman to the First Circuit Court of Appeals. Rikelman’s career has been strictly centered around a radical, pro-abortion agenda for over two decades. She began working at the Center for Reproductive Rights in 1999 as Blackmun Fellow, returned to the organization as a senior staff attorney in 2011, and has served as litigation director for the Center for Reproductive Rights since 2012. In addition to arguing the pro-abortion side in the United States Supreme Court cases June Medical Services v. Russo, and Dobbs v. Jackson Women’s Health Organization, Rikelman has worked to challenge the constitutionality of parental notification laws and informed consent laws. She has also led efforts to expand the dispensing of chemical abortion pills by calling for the FDA to permanently lift the risk evaluation mitigation strategy (REMS) protocols, claiming that leaving the REMS in place will “unnecessarily burden access to safe medication for abortion miscarriage care.",
      },
      {
        id: 5,
        title:
          "S. 4381, Right to Contraception Act",
        description:
          "Despite its name, S.4381 would bail out the abortion industry, trample conscience rights, and could require uninhibited access to dangerous abortion drugs. This bill guarantees funding to abortion providers by barring federal and state governments from redirecting contraception funding to life-affirming health care providers. This means that future administrations would be prohibited from reinstating the Protect Life Rule that required family planning funding to go to entities that do not perform or refer for abortion The bill also tramples on freedom of conscience for health care providers by overriding state and federal freedom of conscience laws, thereby driving out providers who have deeply held moral or religious beliefs about sterilization and contraceptives.Lastly, due to its overbroad definition of contraceptives, this bill could mandate access to abortion drugs. The broad definition of contraceptives could include abortion drugs. Based on that definition, the bill would require the right to obtain abortion drugs, the right to provide abortion drugs, and would overturn any law that regulates abortion drugs.",
      },
      {
        id: 6,
        title:
          "OS. 4554, Reproductive Freedom for Women Act",
        description:
          "S.4554, the so called “Reproductive Freedom for Women Act” is a Democratic messaging bill to shift attention away from their radical support for abortion throughout pregnancy. The bill states congressional support for abortion and purports that Roe v. Wade should be reinstated and “built upon…moving towards a future where there is reproductive freedom for all” (otherwise known as abortion into the 7th, 8th or 9th month of pregnancy). Even if the bill simply called for “restoring Roe” it would be an endorsement of painful late-term abortions often conducted using brutal dismemberment procedures. This goes even further by demanding even more extreme permissive abortion policies. Senate Democrats have already shown what they are building towards, through their flagship legislation, the so-called Women’s Health Protection Act (WHPA), which creates a positive right to abortion and would impose no-limits abortion on demand at any point in pregnancy in all 50 states.",
      }
    ],
    "2021-2022": [
      {
        id: 1,
        title:
          "Sasse Amendment No. 192 to S. Con. Res. 5, Budget Reconciliation bill",
        description:
          "This amendment would establish a deficit-neutral reserve fund relating to improving health care for abortion survivors, ensuring a health care practitioner would exercise the proper degree of care in the case of a child who survives an abortion or attempted abortion.",
      },
      {
        id: 2,
        title:
          "Cotton Amendment No. 66 to S. Con. Res. 5, Budget Reconciliation bill",
        description:
          "This procedural amendment would block attempts to increase the number of justices on the Supreme Court of the United States. This is a proposal promoted by advocates for abortion who want to stack the court to maintain a so-called “constitutional right to abortion.",
      },
      {
        id: 3,
        title:
          "Lankford Amendment #1031 to Schumer substitute #891 to H.R. 1319, known as the American Rescue Plan Act",
        description:
          "This amendment would apply the Hyde amendment to Sections 2204 through 2713 of Title II (HELP) of the Schumer substitute. For the first time, a COVID relief bill failed to include life-saving Hyde protections. This amendment would protect COVID funding streams—including for community health centers, the nurse corps, family planning, the Child Abuse Prevention and Treatment Act, and public health workforce—from being used for abortion.",
      },
      {
        id: 4,
        title:
          "Schumer substitute #891 to H.R. 1319, known as the American Rescue Plan Act",
        description:
          "While prior bipartisan COVID relief packages have included Hyde protections on their funding streams, the American Rescue Plan Act departs from the status quo by leaving funds open to use for abortion. It intentionally exempts health activities and community health centers funding from Hyde protections. It would subsidize COBRA health care plans that include elective abortion and massively expand Obamacare, which includes coverage for elective abortion. The bill changes requirements of small businesses to receive forgivable loans in order to allow Planned Parenthood to qualify. Additionally, the foreign assistance funding is exempted from the Helms amendment, which prohibits funding for abortion internationally. SBA Pro-Life America strongly opposed this expansion of funding for abortion. A vote against this bill is a pro-life vote.",
      },
      {
        id: 5,
        title:
          "Becerra Vote to Report from Committee",
        description:
          "President Joe Biden nominated Xavier Becerra to be Secretary of the Department of Health and Human Services. Mr. Becerra’s career as a member of Congress and then as the Attorney General in California is one of dogged determination to undermine pro-life laws while advancing an aggressive abortion agenda on every front, putting the unborn, women, and girls in danger. He has evidenced his animosity toward religious or conscientious objections to paying for or participating in abortion services. Mr. Becerra has proven himself to be an enemy of the health of women and the unborn who cannot be trusted to champion Americans’ health and is not qualified to serve as Secretary of Health and Human Services. SBA Pro-Life America strongly opposed Mr. Becerra’s confirmation. A vote against reporting the nominee out of Committee is a pro-life vote.",
      },
      {
        id: 6,
        title:
          "Becerra: Cloture",
        description:
          "President Joe Biden nominated Xavier Becerra to be Secretary of the Department of Health and Human Services. Mr. Becerra’s career as a member of Congress and then as the Attorney General in California is one of dogged determination to undermine pro-life laws while advancing an aggressive abortion agenda on every front, putting the unborn, women, and girls in danger. He has evidenced his animosity toward religious or conscientious objections to paying for or participating in abortion services. Mr. Becerra has proven himself to be an enemy of the health of women and the unborn who cannot be trusted to champion Americans’ health and is not qualified to serve as Secretary of Health and Human Services. SBA Pro-Life America strongly opposed Mr. Becerra’s confirmation. A vote against cloture is a pro-life vote.",
      },
      {
        id: 7,
        title:
          "Becerra: Confirmation",
        description:
          "President Joe Biden nominated Xavier Becerra to be Secretary of the Department of Health and Human Services. Mr. Becerra’s career as a member of Congress and then as the Attorney General in California is one of dogged determination to undermine pro-life laws while advancing an aggressive abortion agenda on every front, putting the unborn, women, and girls in danger. He has evidenced his animosity toward religious or conscientious objections to paying for or participating in abortion services. Mr. Becerra has proven himself to be an enemy of the health of women and the unborn who cannot be trusted to champion Americans’ health and is not qualified to serve as Secretary of Health and Human Services. SBA Pro-Life America strongly opposed Mr. Becerra’s confirmation. A vote against his confirmation is a pro-life vote.",
      },
      {
        id: 8,
        title:
          "Lee Amendment #1891 to the United States Innovation and Competition Act of 2021",
        description:
          "This amendment would codify existing guidelines preventing authorized funds from being used for embryo-destructive research, counteracting current Biden-Harris administration policies. The amendment would stop federal funding for (1) research using fetal tissue derived from abortion, (2) creating, destroying, discarding, or putting at risk a human embryo, (3) creating human embryo-like entities, (4) intentionally creating heritable genetic modifications in embryos, or (5) using stem cells derived from the prohibited research.",
      },
      {
        id: 9,
        title:"Braun Amendment #1771 to the United States Innovation and Competition Act of 2021",
        description:"While current National Institutes of Health guidelines prohibit funding for research involving human-animal hybrids (chimeras), there are reports that these guidelines may be removed because of radical policy guideline updates from the International Society for Stem Cell Research (ISSCR). This amendment addresses particular kinds of research that involve endangering and destroying embryos, by making such experimentation liable to criminal penalties. It would ensure that funds under the US Innovation and Competition Act cannot be used for research involving these repulsive techniques that blur the lines between humans and animals."
      },
      {
        id: 10,
        title:"H.R. 7, the Paycheck Fairness Act",
        description:"This bill would amend the Fair Labor Standards Act of 1938 (FSLA) by adding “pregnancy, childbirth, or a related medical condition” to the definition of “sex,” which courts have interpreted broadly to include abortion. The FSLA prohibits sex discrimination in the area of employee wages. The Department of Labor and the Equal Employment Opportunity Commission (EEOC) have stipulated that equal pay includes benefits, and the EEOC allows a person to go straight to court with claims that this provision has been violated. Without abortion-neutral language, this legislation opens the door for employers to be sued for sex discrimination by simply refraining from funding abortion on demand in employee health plans."
      },
      {
        id: 11,
        title:"S.2093/S.1, the For the People Act",
        description:"The For the People Act presents a grave danger to fair, secure, and transparent elections that Americans can trust. It would override state election laws while imposing unnecessary, unworkable, and unconstitutional mandates, making it easier to commit election fraud. It would also require automatic, same-day and online voter registration, eliminate common sense voter I.D. laws, and so much more. S.2093/S.1 would dramatically alter First Amendment protections by imposing onerous and unworkable regulatory standards on the ability of pro-life voters and the pro-life community to discuss policy issues with elected officials and the public. It would subject citizens who contribute to nonprofit organizations to harassment and intimidation by making their personal information available in a government-controlled data base, and through an expansion of the definition of “electioneering communications,” it would subject virtually all issue-related ads to burdensome disclaimer requirements even if unrelated to a candidate for elected office."
      },
      {
        id: 12,
        title:"Lankford Amendment #3792 to S. Con. Res. 14, the budget resolution",
        description:"This budget resolution is the first step in the reconciliation process that will include massive expansions of healthcare. The Lankford Amendment expressed the sense of the Senate that longstanding pro-life protections—the Hyde and Hyde-Weldon Amendments—should be applied to the legislative text of the reconciliation bill. Though the amendment is not binding, it showed that the majority of the Senate agreed that there should be restrictions on taxpayer funding of abortion and that there should be protections against discrimination for people and entities who refuse to participate in, pay for, or refer for abortion."
      },
      {
        id: 13,
        title:"Kennedy Amendment #3758 to S. Con. Res. 14, the budget resolution",
        description:"This procedural amendment would express Senate support for protecting the unborn from late-term abortion based on scientific consensus that these children can feel pain."
      },


    ],
    "2019-2020": [
      {
        id: 1,
        title: "Vote to advance S. 109, the No Taxpayer Funding for Abortion and Abortion Insurance Full Disclosure Act",
        description:
          "S. 109 would codify the Hyde Amendment, by establishing a permanent, government-wide prohibition on federal funding for abortion, prohibiting federal subsidies in the form of Obamacare tax credits for health plans that include abortion, and strengthening disclosure requirements for plans that include abortion. This procedural, cloture vote would end debate on the bill, allowing it to move forward for a vote on the bill itself. Cloture votes have a 60-vote threshold, whereas a vote on the underlying bill would require only a simple majority. SBA Pro-Life America strongly supports this bill and the cloture to allow the bill to proceed. A vote for cloture is a pro-life vote.",
      },
      {
        id: 2,
        title:
          "Vote to advance S. 311, the Born-Alive Abortion Survivors Protection Act",
        description:
          "S. 311 would build on the Born-Alive Infants Protection Act of 2002 by criminalizing infanticide and clarifying the standard of care that must be given to babies born alive after failed abortions. Failure to provide this standard of reasonable care would lead to criminal prosecution of the abortionist, not the mother. In addition, the mother has a civil remedy of action against the abortionist should he fail to comply with the law. This procedural, cloture vote would end debate on the bill, allowing it to move forward for a vote on the bill itself. Cloture votes have a 60-vote threshold, whereas a vote on the underlying bill would require only a simple majority. SBA Pro-Life America strongly supports this bill and the cloture to allow the bill to proceed. A vote for cloture is a pro-life vote.",
      },
      {
        id: 3,
        title:
          "Vote to advance S. 3275, the Pain-Capable Unborn Child Protection Act",
        description:
          "S. 3275 would protect unborn children after five months post-fertilization based on their ability to feel excruciating pain. Previous uninformed notions that unborn and newborn babies could not feel pain, or misinformation on the ability of preterm infants to survive, are refuted by a growing body of scientific evidence. The Pain-Capable bill is an important step in matching public policy with the growing body of scientific evidence of pain and advancing perinatal medicine. Cloture votes have a 60-vote threshold, whereas a vote on the underlying bill would require only a simple majority. SBA Pro-Life America strongly supports this bill and the cloture to allow the bill to advance toward a final vote. A vote for cloture is a pro-life vote",
      },
      {
        id: 4,
        title:
          "Second vote to advance S. 311, the Born-Alive Abortion Survivors Protection Act",
        description:
          "This was the second attempt this Congress to try to advance to a vote on the Born-Alive Abortion Survivors Protection Act. S. 311 would build on the Born-Alive Infants Protection Act of 2002 by criminalizing infanticide and clarifying the standard of care that must be given to babies born alive after failed abortions. Failure to provide this standard of reasonable care would lead to criminal prosecution of the abortionist, not the mother. In addition, the mother has a civil remedy of action against the abortionist should he fail to comply with the law. This cloture vote would end debate on the bill, allowing it to move forward for a vote on the bill itself. Cloture votes have a 60-vote threshold, whereas a vote on the underlying bill would require only a simple majority. SBA Pro-Life America strongly supports this bill and the cloture to allow the bill to advance toward a floor vote. A vote for cloture is a pro-life vote.",
      },
      {
        id: 5,
        title:
          "Vote on the Motion to Proceed to Confirm Amy Coney Barrett",
        description:
          "President Trump nominated Seventh Circuit Court of Appeals Judge Amy Coney Barrett to replace the late Associate Justice of the Supreme Court Ruth Bader Ginsburg. Judge Barrett is widely recognized as a brilliant, thoughtful jurist. A former clerk to Justice Antonin Scalia, Amy Barrett is a textualist and originalist with a profound respect for the constitution. She joined dissentals in abortion cases in the Seventh Circuit, standing up for the unborn who are targeted for abortion because of a eugenic goal, pointing out holes in Casey jurisprudence, and calling out the hypocrisy of protections for animals being given greater preference than protections for human babies.",
      },
      {
        id: 6,
        title:
          "Vote to Advance to the Final Confirmation of Amy Coney Barrett",
        description:
          "President Trump nominated Seventh Circuit Court of Appeals Judge Amy Coney Barrett to replace the late Associate Justice of the Supreme Court Ruth Bader Ginsburg. Judge Barrett is widely recognized as a brilliant, thoughtful jurist. A former clerk to Justice Antonin Scalia, Amy Barrett is a textualist and originalist with a profound respect for the constitution. She joined dissentals in abortion cases in the Seventh Circuit, standing up for the unborn who are targeted for abortion because of a eugenic goal, pointing out holes in Casey jurisprudence, and calling out the hypocrisy of protections for animals being given greater preference than protections for human babies.",
      },
      {
        id: 7,
        title:
          "Final Vote on the Confirmation of Amy Coney Barrett",
        description:
          "President Trump nominated Seventh Circuit Court of Appeals Judge Amy Coney Barrett to replace the late Associate Justice of the Supreme Court Ruth Bader Ginsburg. Judge Barrett is widely recognized as a brilliant, thoughtful jurist. A former clerk to Justice Antonin Scalia, Amy Barrett is a textualist and originalist with a profound respect for the constitution. She joined dissentals in abortion cases in the Seventh Circuit, standing up for the unborn who are targeted for abortion because of a eugenic goal, pointing out holes in Casey jurisprudence, and calling out the hypocrisy of protections for animals being given greater preference than protections for human babies.",
      }
    ],
    "2015-2018": [
      {
        id: 1,
        title: "2015: Vote to Advance H.R. 36, the Pain-Capable Unborn Child Protection Act",
        description:
          "H.R. 36 would protect unborn children halfway through pregnancy based on their ability to feel excruciating pain. Previous uninformed notions that unborn and newborn babies could not feel pain, or misinformation on the ability of preterm infants to survive, are refuted by a growing body of scientific evidence. The Pain-Capable bill is an important step in matching public policy with the growing body of scientific evidence of pain and advancing perinatal medicine. Cloture votes have a 60-vote threshold, whereas a vote on the underlying bill would require only a simple majority. SBA Pro-Life America strongly supports this bill and the cloture to allow the bill to advance toward a final vote. A vote for cloture is a pro-life vote.",
      },
      {
        id: 2,
        title:
          "2015: H.R. 3762, the Restoring Americans’ Healthcare Freedom Reconciliation Act of 2015",
        description:
          "Using a budget reconciliation process that only requires a simple majority to pass the Senate, this bill would eliminate the largest sources of federal funding to Planned Parenthood, through Medicaid and other mandatory spending programs. Instead, about $400 million would be redirected to Community Health Centers and other Federally Qualified Health Centers, which, unlike Planned Parenthood, provide comprehensive health care for women and do not perform abortions.",
      },
      {
        id: 3,
        title:
          "2017: H.J. Res. 43, a Congressional Review Act Nullification of Obama Administration Title X Rule",
        description:
          "The Congressional Review Act provides a way for Congress to overturn agency rules put in place by a President. At the end of his second term, President Obama issued a Title X family planning funding rule through the Department of Health and Human Services, forbidding states from defunding abortion providers of these funds and redirecting such funds to other health centers that do not perform abortions. Pro-life members of Congress successfully repealed this rule that came to be known as President Obama’s parting gift to Planned Parenthood.",
      },
      {
        id: 4,
        title:
          "2017: Confirmation of Neil Gorsuch to the United States Supreme Court",
        description:
          "President Trump nominated Tenth Circuit Court of Appeals Judge Neil Gorsuch to replace and carry on the legacy of the late Justice Antonin Scalia on the United States Supreme Court. Judge Gorsuch is a distinguished jurist with a strong record of protecting life and religious liberty, as evidenced by his opinions in the Hobby Lobby and Little Sisters of the Poor cases, and in his doctoral dissertation in which he wrote that “human life is fundamentally and inherently valuable.” He also wrote a forceful dissent to the Tenth Circuit of Appeals’ ruling against Utah’s efforts to defund abortion providers.",
      },
      {
        id: 5,
        title:
          "2017: Vote to Advance H.R. 1628, the American Health Care Act of 2017, allowing consideration of the Better Care Reconciliation Act",
        description:
          "Using a budget reconciliation process that only requires a simple majority to pass the Senate, this bill would eliminate the largest sources of federal funding to Planned Parenthood. Instead, funds would be redirected to Community Health Centers and other Federally Qualified Health Centers, which, unlike Planned Parenthood, provide comprehensive health care for women and do not perform abortions. The bill would also repeal and replace Obamacare, rolling back the Obamacare abortion expansion which is the greatest deviation from the principle of the Hyde amendment ever – specifically allowing taxpayer funding for health coverage that includes abortion. Though the Senate took up the House bill American Health Care Act, in a procedural move, it substituted its own version known as the Better Care Reconciliation Act.",
      },
      {
        id: 6,
        title:
          "2017: Vote to Advance Amdt. 667, the Better Care Reconciliation Act, amending H.R. 1628, the American Health Care Act",
        description:
          "This amendment would allow the House and Senate to form a conference committee to further consider legislative details to defund abortion providers and repeal and replace Obamacare. It was a modified version that narrowed the scope of the Better Care Reconciliation Act while seeking a path forward.",
      },
      {
        id: 7,
        title:
          "2018: Vote to Advance S. 2311, the Pain-Capable Unborn Child Protection Act",
        description:
          "S. 2311 would protect unborn children after halfway through pregnancy based on their ability to feel excruciating pain. Previous uninformed notions that unborn and newborn babies could not feel pain, or misinformation on the ability of preterm infants to survive, are refuted by a growing body of scientific evidence. The Pain-Capable bill is an important step in matching public policy with the growing body of scientific evidence of pain and advancing perinatal medicine. Cloture votes have a 60-vote threshold, whereas a vote on the underlying bill would require only a simple majority. SBA Pro-Life America strongly supports this bill and the cloture to allow the bill to advance toward a final vote. A vote for cloture is a pro-life vote.",
      },
      {
        id: 8,
        title:
          "2018: Paul Amendment #3967 to H.R. 6157, the Department of Defense and Labor, Health and Human Services, and Education Appropriations Act",
        description:
          "This amendment to the Labor, Health and Human Services appropriations (spending) bill would cut off direct taxpayer funding through Medicaid and other mandatory spending programs from abortion businesses, including Planned Parenthood, for fiscal year 2019.",
      },
      {
        id: 9,
        title:
          "2018: Confirmation of Brett Kavanaugh to the United States Supreme Court",
        description:
          "President Trump nominated D.C. Circuit Court of Appeals Judge Brett Kavanaugh to replace retired Justice Anthony Kennedy on the United States Supreme Court. Judge Kavanaugh is an experienced, principled jurist with a strong record of protecting life and constitutional rights, as evidenced by his opinions in Garza v. Hargan and Priests for Life v. HHS. In these cases, Judge Kavanaugh forcefully rejected the ACLU’s assertion of a new constitutional right of abortion on demand for illegal immigrant minors in U.S. custody, and refused to apply Obamacare’s burdensome HHS abortifacient mandate to religious entities.",
      }
    ],
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
          Senate: Votes We Score
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

            <Typography paragraph sx={{ mb: 3 }}>
              {vote.description}
            </Typography>

            <Divider sx={{ my: 2 }} />
{/* 
            <Typography variant="subtitle1" gutterBottom>
              Vote Details
            </Typography>
            <Typography>{vote.description}</Typography> */}
          </Box>
        ))}
      </Box>

      <Footer />
    </Box>
  );
};

export default SenateScorecard;
