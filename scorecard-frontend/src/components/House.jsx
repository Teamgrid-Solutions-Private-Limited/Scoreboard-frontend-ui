import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Paper, Divider } from "@mui/material";
import TopBar from "./TopBar";
import AppHeaderBar from "./AppHeaderBar";
import Footer from "./Footer";
import SenatorTopImg from "./SenarorTopImg";
import RightStickyTab from "./RightStickyTab";

const House = () => {
  const [activeTab, setActiveTab] = useState("2023-2024");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const sessions = {
    "2023-2024": [
      {
        id: 1,
        title: "H.R.26 – Born-Alive Abortion Survivors Protection Act",
        description:
          "Despite significant gaps in national and state abortion reporting, there are a number of documented cases of babies who survive attempted abortions. Due to abortion advocacy groups’ opposition to accurate and detailed reporting, there is not comprehensive data on how often babies are born alive after botched abortions. Of the eight states that have reported data on babies who survive abortions, just four of those states accounted for 111 babies born alive after failed abortions in the last five years. Taking into account the states that do not report on this issue, the actual number of babies born alive after abortions is almost certainly significantly higher. Over the past few years, there has been growing hostility in certain states, including Virginia, New York, and Illinois. Former Virginia Governor Ralph Northam is infamous for his statement that in the case of abortion survivors, a discussion would happen as to whether or not to provide life-sustaining care. H.R. 26 would reinforce the Born-Alive Infants Protection Act of 2002 by establishing affirmative federal protections for babies who are born alive after an attempted abortion. The Federal Government has a duty to protect these vulnerable born-alive infants and to stand united against infanticide.",
      },
      {
        id: 2,
        title:
          "H.Con.Res.3 – Expressing the sense of Congress condemning the recent attacks on pro-life facilities, groups, and churches.",
        description:
          "Since the fall of Roe there have been historic numbers of incidents of vandalism and ominous threats against pro-life facilities, groups, and churches. Yet, this alarming trend is being downplayed or ignored by the Biden administration, who is using federal law to target peaceful sidewalk counselors rather than to prosecute those who have firebombed and defaced private property. Pregnancy centers exist to support women and their families while protecting the lives of the unborn. This resolution condemns these attacks and calls on the Biden administration to use appropriate law enforcement authorities to support their safety.",
      },
      {
        id: 3,
        title: "Good Amendment #9 to H.R.277, REINS Act of 2023",
        description:
          "While the Biden administration continues to use executive power to force taxpayer funds to be used to fund abortions, even in violation of longstanding laws, this amendment would ensure that major rules that would increase access to abortion would be subject to Congressional approval before going into effect. Laws and policies related to abortion funding have historically always encompassed abortion-related services and abortion-related travel. This amendment makes clear that rules increasing access to any of those things would be included in the definition of a major rule that requires Congressional approval.",
      },
      {
        id: 4,
        title:
          "H.R.2670 – National Defense Authorization Act for Fiscal Year 2024 – On Agreeing to the Jackson-Roy Amendment No. 5",
        description:
          "Since 1984 there has been a longstanding statutory prohibition on taxpayer funding for abortion at the Department of Defense (10 USC 1093). This prohibition always included any expenses necessitated by the abortion. Government funding of travel expenses for an abortion would be funding the abortion itself, as there is no other reason for the travel expenses. This amendment prohibits the Secretary of Defense from paying for or reimbursing expenses relating to abortion services, thereby rolling back Biden’s illegal DOD abortion travel policy issued under an October 2022 memorandum.",
      },
      {
        id: 5,
        title:
          "H.R.2670 – National Defense Authorization Act for Fiscal Year 2024",
        description:
          "Since 1984 there has been a longstanding statutory prohibition on taxpayer funding for abortion at the Department of Defense (10 USC 1093). This prohibition has always included any expenses necessitated by the abortion. Government funding of travel expenses for an abortion would be funding the abortion itself, as there is no other reason for the travel expenses. The National Defense Authorization Act was amended with the Jackson-Roy amendment. This amendment prohibits the Secretary of Defense from paying for or reimbursing expenses relating to abortion services, thereby rolling back Biden’s illegal DOD abortion travel policy issued under an October 2022 memorandum.",
      },
      {
        id: 6,
        title:
          "Democratic Motion to Instruct Conferees on H.R.2670 – National Defense Authorization Act for Fiscal Year 2024",
        description:
          "The different texts of the House and Senate versions of the National Defense Authorization Act (NDAA) are reconciled by members of Congress assigned as conferees to the NDAA. This Democratic procedural motion would have instructed those conferees to remove the pro-life Jackson-Roy amendment from the House NDAA during negotiations, in order to allow the continuation of the Biden administration’s illegal abortion travel policy.A Vote against this motion is a pro-life vote",
      },
      {
        id: 7,
        title:
          "Procedural vote on H.R.4665 – Department of State, Foreign Operations, and Related Programs Appropriations Act, 2024",
        description:
          "This procedural motion offered by Democrats would have removed the pro-life language in the bill that prohibits funding to foreign NGO’s that perform or promote abortion overseas. It has long been the posture of pro-life administrations to ensure foreign aid is directed to life-affirming NGOs, through what was historically called the Mexico City Policy. The policy was expanded under President Trump as the Protecting Life in Global Health Assistance (known as the Global Protect Life Rule).A Vote against this motion is a pro-life vote.",
      },
      {
        id: 8,
        title:
          "Procedural vote on H.R.4365 – Department of Defense Appropriations Act, 2024",
        description:
          "For decades there has been a longstanding statutory prohibition on taxpayer funding for abortion at the Department of Defense (10 USC 1093). This prohibition has always included any expenses necessitated by the abortion. Government funding of travel expenses for an abortion would be funding the abortion itself, as there is no other reason for the travel expenses. This procedural motion offered by Democrats would have removed the pro-life language in the bill that prohibits the Secretary of Defense from paying for or reimbursing expenses relating to abortion services, which would roll back Biden’s illegal DOD abortion travel policy issued under an October 2022 memorandum.A Vote against this motion is a pro-life vote.",
      },
      {
        id: 9,
        title:
          "Procedural motion on H.R.4368 – Agriculture, Rural Development, Food and Drug Administration, and Related Agencies Appropriations Act, 2024",
        description:
          "This procedural motion offered by Democrats would have removed the pro-life language in the bill that would prohibit the Biden administration’s reckless and illegal mail-order abortion policy. In December of 2021, the FDA announced a change to the Risk Evaluation Mitigation Strategy, or REMS, associated with the chemical abortion drug mifepristone. These REMS removed the in-person dispensing requirement and allowed for dangerous chemical abortion drugs to be dispensed via mail. To address this, the Agriculture, Rural Development, Food and Drug Administration, and Related Agencies Appropriations Act, 2024 included Rep. Andy Harris’ mifepristone language to reinstate U.S. Food and Drug Administration safety protocols that ensure patients see their doctor (including nurse practitioners and physicians) for safety screening before they receive the chemical abortion drug from the prescriber, safeguards that were in place under Presidents Clinton and Obama. This procedural motion would have removed that pro-life, pro-women’s health language.A Vote against this motion is a pro-life vote.",
      },
      {
        id: 10,
        title: "H.R. 6914, Pregnant Students’ Rights Act",
        description:
          "Pregnant and parenting students make up nearly a quarter of undergraduate students and nearly a third of graduate students, so the need for parenting resources is clear. Unfortunately, all too often a college campus can feel like a child-free or pregnancy-free zone. Students need to know there are resources and accommodations available to help them when pregnant on campus. The Pregnant Students’ Rights Act, H.R. 6914, ensures that students at colleges and universities are informed of the rights and the resources available to pregnant and parenting students, before they might need such resources. No student should have to choose between their education and their child.",
      },
      {
        id: 11,
        title:
          "H.R. 6918, Supporting Pregnant and Parenting Women and Families Act",
        description:
          "Under the direction of the Biden-Harris administration, the Administration of Children and Families (ACF) at HHS published a proposed rule entitled “Strengthening Temporary Assistance for Needy Families as a Safety Net and Work Program,” that singled out pregnancy resource centers (PRCs) as being potentially ineligible for funding without reference to any other non-profit organization or entity in the same manner. However, alternatives to abortion programs and pregnancy centers have historically been eligible to receive TANF funds. Although other states have included pregnancy centers in their TANF programs since 2002 currently, four states do so now: Missouri, Indiana, Louisiana, and Pennsylvania. The Supporting Pregnant and Parenting Women and Families Act would prohibit the Department of Health and Human Services from finalizing, implementing, or enforcing any proposed rule that would discriminate against pregnancy centers and make them ineligible for federal Temporary Assistance for Needy Families (TANF) funding.",
      },
      {
        id: 12,
        title:
          "Van Duyne Amendment No. 55 to H.R.8070, National Defense Authorization Act for Fiscal Year 2025",
        description:
          "Since 1984 there has been a longstanding statutory prohibition on taxpayer funding for abortion at the Department of Defense (10 USC 1093). This prohibition always included any expenses necessitated by the abortion. Government funding of travel expenses for an abortion would be funding the abortion itself, as there is no other reason for the travel expenses. This amendment prohibits the Secretary of Defense from paying for or reimbursing expenses relating to abortion services, thereby rolling back the Biden-Harris illegal DOD abortion travel policy issued under an October 2022 memorandum.",
      },
      {
        id: 13,
        title:
          "H.J.Res.165, Providing for congressional disapproval under chapter 8 of title 5, United States Code, of the rule submitted by the Department of Education relating to “Nondiscrimination on the Basis of Sex in Education Programs or Activities Receiving Federal Financial Assistance.",
        description:
          "On April 29, 2024, the Biden-Harris Administration finalized a rule titled “Nondiscrimination on the Basis of Sex in Education Programs or Activities Receiving Federal Financial Assistance” (89 Fed. Reg. 33474). The rule amends the regulations implementing Title IX of the Education Amendments of 1972 (Title IX). Through carefully crafted definitions, the rule hijacks the good provisions of Title IX to promote a pro-abortion agenda. As a result, it is probable that these definitions would be used to target viewpoints of pro-life students and Title IX recipients, ultimately violating their First Amendment rights. Additionally, the rule leaves the door open as to whether this final rule would override pro-life state laws on parental rights or abortion. The Congressional Review Act (5 USC 8) provides Congress with the authority to disapprove of federal agency rulemaking. H. J. Res. expresses the congressional disapproval of this pro-abortion Biden-Harris Title IX rule.",
      },
    ],
    "2021-2022": [
      {
        id: 1,
        title: "H.R. 5, the Equality Act",
        description:
          "The Equality Act’s redefinition of sex and sex discrimination would put abortion on equal standing as pregnancy, while stipulating that any attempt to withhold abortion services constitutes discrimination. The bill’s definition of sex discrimination has already been interpreted by courts to put abortion in the same category as pregnancy and childbirth. The Equality Act could roll back decades of pro-life policy on the state and federal level, and force health care workers and entities to participate in abortion. Efforts to make this bill abortion-neutral were rejected. SBA Pro-Life America strongly opposed this attempt to massively expand so-called abortion rights. A vote against this bill is a pro-life vote.",
      },
      {
        id: 2,
        title: "H.R. 1319, the American Rescue Plan Act",
        description:
          "While prior bipartisan COVID relief packages included Hyde protections on their funding streams, the American Rescue Plan Act departs from the status quo by leaving funds open to use for abortion. It exempts funds for health activities and community health centers from Hyde protections, and subsidizes COBRA health care plans that include elective abortion. The bill changes requirements for small businesses to receive forgivable loans in order to allow Planned Parenthood to qualify. Additionally, the foreign assistance funding is exempted from the Helms amendment, which prohibits funding for abortion internationally. SBA Pro-Life America strongly opposed this expansion of funding for abortion. A vote against this bill is a pro-life vote.",
      },
      {
        id: 3,
        title: "H.R. 1, the For the People Act",
        description:
          "The For the People Act presents a grave danger to fair, secure, and transparent elections that Americans can trust. It would override state election laws while imposing unnecessary, unworkable, and unconstitutional mandates, making it easier to commit election fraud. It would also require automatic, same-day and online voter registration, eliminate common sense voter I.D. laws, and so much more. H.R. 1 would dramatically alter First Amendment protections by imposing onerous and unworkable regulatory standards on the ability of pro-life voters and the pro-life community to discuss policy issues with elected officials and the public. It would subject citizens who contribute to nonprofit organizations to harassment and intimidation by making their personal information available in a government-controlled data base, and through an expansion of the definition of “electioneering communications,” it would subject virtually all issue-related ads to burdensome disclaimer requirements even if unrelated to a candidate for elected office.",
      },
      {
        id: 4,
        title: "H.R. 1, the For the People Act",
        description:
          "The For the People Act presents a grave danger to fair, secure, and transparent elections that Americans can trust. It would override state election laws while imposing unnecessary, unworkable, and unconstitutional mandates, making it easier to commit election fraud. It would also require automatic, same-day and online voter registration, eliminate common sense voter I.D. laws, and so much more. H.R. 1 would dramatically alter First Amendment protections by imposing onerous and unworkable regulatory standards on the ability of pro-life voters and the pro-life community to discuss policy issues with elected officials and the public. It would subject citizens who contribute to nonprofit organizations to harassment and intimidation by making their personal information available in a government-controlled data base, and through an expansion of the definition of “electioneering communications,” it would subject virtually all issue-related ads to burdensome disclaimer requirements even if unrelated to a candidate for elected office.",
      },
      {
        id: 5,
        title: "Senate amendment to H.R. 1319, the American Rescue Plan Act",
        description:
          "While prior bipartisan COVID relief packages included Hyde protections on their funding streams, the American Rescue Plan Act departs from the status quo by leaving funds open to use for abortion. It exempts funds for health activities and community health centers from Hyde protections. It would subsidize COBRA health care plans that include elective abortion and massively expand Obamacare, which includes coverage for elective abortion. The bill changes requirements for small businesses to receive forgivable loans in order to allow Planned Parenthood to qualify. Additionally, the foreign assistance funding is exempted from the Helms amendment, which prohibits funding for abortion internationally. SBA Pro-Life America strongly opposed this expansion of funding for abortion. A vote against this bill is a pro-life vote",
      },
      {
        id: 6,
        title:
          "H.J. Res. 17, to remove the deadline from the Equal Rights Amendment (DOUBLE WEIGHTED)",
        description:
          "H.J. Res. 17 attempts to revive the ratification process for the long-expired Equal Rights Amendment (ERA) – an amendment that has been interpreted by the courts to install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the United States Constitution. The ERA finds the enactment of any law that imposes a rule or condition that applies to one sex and not to the other as discriminatory on the basis of sex; thus, any law limiting abortion or imposing upon it such conditions as a funding limit could be struck down as violating the ERA. SBA Pro-Life America strongly opposes the ERA and any attempts to revive it. A vote against H.J.Res. 17 is a pro-life vote.",
      },
      {
        id: 7,
        title:
          "Discharge Petition on H.R. 619, the Born-Alive Abortion Survivors Protection Act",
        description:
          "Because Speaker Pelosi refuses to allow a vote on the underlying bill, this procedural effort to force a vote on the bill is being treated as a vote on the SBA Pro-Life America National Pro-Life Scorecard. If a majority of the House members (218) sign a discharge petition, a vote will be automatically triggered without needing Speaker Pelosi’s approval. The Born-Alive Abortion Survivors Protection Act builds on the 2002 Born-Alive Infants Protection Act by creating standards of care by which abortion survivors must be treated, establishing penalties for healthcare workers who fail to comply, and giving mothers a private right of action to sue for civil remedies. Signing the discharge petition is considered a pro-life vote.",
      },
      {
        id: 8,
        title: "H.R. 7, the Paycheck Fairness Act",
        description:
          "This bill would amend the Fair Labor Standards Act of 1938 (FSLA) by adding “pregnancy, childbirth, or a related medical condition” to the definition of “sex,” which courts have interpreted broadly to include abortion. The FSLA prohibits sex discrimination in the area of employee wages. The Department of Labor and the Equal Employment Opportunity Commission (EEOC) have stipulated that equal pay includes benefits, and the EEOC allows a person to go straight to court with claims that this provision has been violated. Without abortion-neutral language, this legislation opens the door for employers to be sued for sex discrimination by simply refraining from funding abortion on demand in employee health plans.",
      },
      {
        id: 9,
        title: "H.R. 51, the Washington, DC Admission Act",
        description:
          "A constitutionally suspect effort to turn the seat of the federal government of the United States into a state and removing it from federal jurisdiction, D.C. statehood would also lead to an increase in funding for abortion through Medicaid. It would remove the ability for the federal government to limit funding for elective abortion in Washington, D.C. through the Dornan Amendment (also known as the D.C. Hyde amendment). Additionally, the admission of D.C. as a state would add two Democratic senators to the Senate who would stand in the way of pro-life legislation designed to defend our most basic rights, and would vote in lockstep against originalist judicial nominations or any nominees who would not conform fully to Roe v. Wade jurisprudence.",
      },
      {
        id: 10,
        title: "H.Res. 486, Ordering the Previous Question",
        description:
          "This procedural vote prevented the immediate consideration of H.R. 18, the No Taxpayer Funding for Abortion and Abortion Full Disclosure Act. H.R. 18 prohibits federal funds from being spent on abortion by making permanent in federal law the Hyde Amendment and other abortion funding prohibitions covering all government spending. If enacted, H.R. 18 would replace the current patchwork of status quo, annually renewed appropriations amendments with one federal law. The government-wide limitation on abortion funding in H.R. 18 would also include the premium assistance subsidies in the Affordable Care Act (Obamacare), which currently help underwrite abortion coverage in 69% of the health insurance plans offered in states permitting elective abortion coverage through the exchanges. In addition, this legislation requires that information regarding abortion coverage, including an “abortion surcharge,” be prominently displayed for plan options in all exchanges.",
      },
      {
        id: 11,
        title:
          "H.R. 4373 State and Foreign Operations Appropriations Act, 2022",
        description:
          "This funding bill eliminates the Helms Amendment, which since the 1970’s has prohibited funding for abortion overseas. The bill also substantially weakens the Kemp-Kasten amendment, which gives authority to the president to discontinue funding for organizations that support or participate in coercive abortion programs–organizations such as the United Nations Population Fund (UNFPA).  H.R. 4373 includes sweeping language that would permanently bar a future president from instituting the Global Protect Life Rule (formerly known as the Mexico City Policy). The bill includes several instances of changing language to bypass current pro-life protections, through the reworked Gender Equity and Equality Action Fund (formerly the Women’s Global Development and Prosperity Fund), the HIV/AIDS funding, and more. It also eliminates the funding restriction for elective abortion in the Peace Corps. Funding for international family planning, which flows directly to abortion entities overseas, is significantly increased. With these changes, the bill funds abortion on demand overseas as well as organizations that promote and perform abortion around the world.",
      },
      {
        id: 12,
        title:
          "Procedural vote on H.R. 4502 Labor, Health and Human Services, Financial Services and General Government [etc.] Appropriations Act, 2022",
        description:
          "This procedural vote offered by Republicans sought to send the Labor, Health and Human Services, Financial Services and General Government [etc.] Appropriations Act back to committee until it is amended to restore these longstanding pro-life protections: the Hyde Amendment, Hyde-Weldon Amendment, Dornan (D.C. Hyde) Amendment, and Smith FEHBP Hyde Amendment. Unless these amendments are restored, this bill would fund abortion in numerous federal programs including abortion on demand for federal employees and Medicaid enrollees.",
      },
      {
        id: 13,
        title:
          "H.R. 4502 Labor, Health and Human Services, Financial Services and General Government [etc.] Appropriations Act, 2022",
        description:
          "This bill for the first time in decades does not include the Hyde Amendment, which restricts government funding for elective abortion through Medicaid. The Hyde Amendment has saved more than 2.4 million lives since its enactment in 1976, just three years after Roe v. Wade was decided. The LHHS bill also removes the Hyde-Weldon Amendment that blocks abortion mandates. This commonsense amendment simply states that the government may not discriminate against people or entities who refuse to participate in, pay for, or refer for abortion. Included in the bill is a significant funding increase for the Title X Family Planning funding stream. Simultaneously, the Biden-Harris Administration and the Becerra HHS proposed a new rule to overturn the Protect Life Rule and allow Title X funding to once again flow to abortion providers like Planned Parenthood. The Financial Services bill eliminates the Dornan Amendment, also known as the Washington, D.C. Hyde Amendment. Additionally, it eliminates the Smith Amendment, which attaches Hyde protections to Federal Employee Health Benefits.",
      },
      {
        id: 14,
        title: "H.R. 4 John R. Lewis Voting Rights Advancement Act of 2021",
        description:
          "This bill jeopardizes the integrity of elections and undermines institutions that Americans count on to elect leaders, and especially pro-life leaders. Elections are largely facilitated by the states, each with different laws passed by its state legislature to govern its electoral process. H.R. 4 would impose a federal takeover of elections and apply radical, unconstitutional, and authoritarian requirements on states, likely making it easier to commit election fraud by eliminating popular measures such as voter identification requirements. H.R. 4 would require any state seeking to update, reform, or modernize their election laws to submit its proposal for review by unelected bureaucrats at the Department of Justice, subject to whim and political bias. This subverts our state-based system of elections which empowers locally elected legislators to determine their state’s election procedures.",
      },
      {
        id: 15,
        title: "H.R. 3755, the Women’s Health Protection Act of 2021",
        description:
          "The stated purpose of the deceptively named Women’s Health Protection Act is to allow abortion providers to provide abortion services without restrictions that single out abortion services or make abortion more difficult to access. It would prohibit the enactment of almost all current pro-life laws, including informed consent and waiting period laws, laws forbidding certain brutal abortion methods, laws restricting discrimination abortions based on diagnoses like Down Syndrome, and more. It further allows the abortion provider to define viability, in a stunning and blatant conflict of interest. The bill preempts state and federal laws protecting life and conscience, explicitly naming the Religious Freedom Restoration Act as being superseded by this bill. Better named the Abortion on Demand Until Birth Act, this bill ignores the humanity of the baby and the health of the mother, and brazenly overturns the will of the people enacted through various state and federal pro-life laws.",
      },
      {
        id: 16,
        title:
          "H.R. 2119, the Family Violence Prevention and Services Improvement Act",
        description:
          "This bill changes the current Family Violence Prevention and Services Act to allow funding for abortion services. Current statute provides funding for shelter, supportive services, and referrals for appropriate health care services. This bill expands the categories to include health care services without Hyde protections, despite attempts to amend the bill to include such protections.",
      },
      {
        id: 17,
        title: "H.R. 5376, the Build Back Better Act",
        description:
          "This bill appropriates billions of dollars outside of Hyde protections, leaving them available for direct and indirect abortion funding, thereby upsetting the status quo and funneling money to the abortion industry. Numerous Public Health funding streams and grants would fund abortion from every angle—training, infrastructure, telehealth, support services, and elective abortion. The bill expands abortion coverage under the Affordable Care Act (Obamacare) by expanding premium tax credits as well as appropriating billions for cost sharing and reinsurance, all without pro-life protections. Further, it imposes an abortion mandate for Medicaid-gap populations in the twelve states that opted out of Medicaid expansion. It is notable that none of those twelve states currently fund elective abortion coverage at all. This bill shatters status quo principles that Americans should not pay for the destruction of unborn human life by funding existing programs and creating new ones outside of longstanding pro-life Hyde protections.",
      },
      {
        id: 18,
        title:
          "Procedural Vote on H.R. 8296, the Women’s Health Protection Act of 2022 (Born-Alive MTR)",
        description:
          "This procedural vote offered by Republicans sought to amend the so-called Women’s Health Protection Act by including protections for babies born alive after botched abortions. The medical care required for these infants would be the same as for any other infant born prematurely at the same gestational age.",
      },
      {
        id: 19,
        title: "H.R. 8296, the Women’s Health Protection Act of 2022",
        description:
          "The stated purpose of the deceptively named Women’s Health Protection Act is to allow abortion providers to provide abortion services without restrictions that single out abortion services or make abortion more difficult to access. It would prohibit the enactment of almost all current pro-life laws, including informed consent and waiting period laws, laws forbidding certain brutal abortion methods, laws restricting discrimination abortions based on diagnoses like Down Syndrome, and more. It further allows the abortion provider to define viability, in a stunning and blatant conflict of interest. The bill preempts state and federal laws protecting life and conscience, explicitly naming the Religious Freedom Restoration Act as being superseded by this bill. Better named the Abortion on Demand Until Birth Act, this bill ignores the humanity of the baby and the health of the mother, and brazenly overturns the will of the people enacted through various state and federal pro-life laws.",
      },
      {
        id: 20,
        title:
          "Procedural Vote on H.R. 8297, the Ensuring Women’s Right to Reproductive Freedom Act (Parental Involvement MTR)",
        description:
          "This procedural vote offered by Republicans sought to amend the so-called Ensuring Women’s Right to Reproductive Freedom Act by attaching to it the Child Interstate Abortion Notification Act (CIANA). CIANA would protect minors from being transported across state lines for abortion without parental consent or notification and would require parental notice for abortions when the minor resides in another state.",
      },
      {
        id: 21,
        title:
          "H.R. 8297, the Ensuring Women’s Right to Reproductive Freedom Act",
        description:
          "This bill creates loopholes that would endanger women and their unborn children. The bill would enable rogue late-term abortionists who could initiate abortions in states where such abortions are illegal, so long as the abortions are completed elsewhere. It would protect traffickers and predators while undermining parental rights by blocking law enforcement action against any person who assists someone traveling across state lines for abortion, giving the victim no recourse against coercion. It would also facilitate dangerous mail order abortions even in states where such abortions are illegal.",
      },
      {
        id: 22,
        title:
          "H.R. 8294, Transportation, Housing and Urban Development, and Related Agencies Appropriations Act, 2023",
        description:
          "This spending bill removes two major longstanding pro-life protections in the Financial Services and General Government appropriations bill. It removes the Dornan Amendment, also known as the Washington D.C. Hyde Amendment, and the Smith Amendment, which prohibits elective abortion coverage in federal employee health benefits.",
      },
      {
        id: 23,
        title: "H.R. 8373, the Right to Contraception Act",
        description:
          "This bill would be more accurately titled the Payouts for Planned Parenthood Act, as the bill guarantees federal funding for abortion providers who also happen to provide contraceptives. It would bar state and federal governments from redirecting contraception funding to life-affirming health care providers. It also overrides state and federal freedom of conscience laws, driving out providers who have deeply held religious or moral beliefs about sterilization or contraception. The bill’s definition of contraception is overbroad, blurring the lines between contraceptives that prevent pregnancy with drugs intended to end the lives of unborn children. In this way, the bill could lead to the mandating of dangerous chemical abortion drugs as a right.",
      },
      {
        id: 24,
        title: "H.R. 5376, the Inflation Reduction Act",
        description:
          "The Inflation Reduction Act extends the expanded Affordable Care Act (ACA) subsidies for three more years, further subsidizing abortion on Obamacare exchange plans. The ACA was intentionally drafted to avoid application of the Hyde Amendment, and this bill once again expands on the ACA’s violation of the longstanding Hyde principle. Instead of stopping funding for health insurance plans that cover elective abortion consistent with Hyde, the ACA expressly permits such subsidies. Currently, 912 plans on the ACA exchange cover abortion on demand.",
      },
      {
        id: 25,
        title: "H.Res. 1529, Providing for adoption of H.Res. 1434",
        description:
          "The procedural vote on H.Res. 1529 would automatically pass H.Res. 1434, a dangerous resolution to make chemical abortion drugs available even in states that have laws protecting the unborn from abortion by asserting a federal preemption of state pro-life laws. The resolution ignores the politicization and woeful inadequacy of the FDA’s approval process of the abortion drug, mifepristone. Mifepristone is the first drug taken as part of a chemical abortion, and a growing body of data shows the significant harms to women caused by the drug combination. The resolution also ignores the right of lawmakers at all levels of government and medical professionals to protect the unborn and their moms from these dangerous drugs.",
      },
    ],

    "2019-2020": [
      {
        id: 1,
        title: "H.R. 21, the Consolidated Appropriations Act",
        description:
          "Nancy Pelosi’s first act as Speaker of the House in the 116th Congress was to offer the Consolidated Appropriations Act of 2019 that would overturn a major pro-life policy, Protecting Life in Global Health Assistance (PLGHA). Overturning this policy would force taxpayer funding for international NGOs that promote or perform abortion. The American people have repeatedly voiced their opposition to taxpayer-funded abortion and in implementing the PLGHA, President Trump honored their will by taking immediate action to stop U.S. exportation of abortion around the world on taxpayers’ dime. SBA Pro-Life America strongly opposed efforts to overturn this important policy. A vote against H.R. 21 is a pro-life vote",
      },
      {
        id: 2,
        title:
          "Procedural vote on H.R. 21, the Consolidated Appropriations Act ",
        description:
          "This procedural vote offered by Republicans sought to amend the Consolidated Appropriations Act to restore Protecting Life in Global Health Assistance (PLGHA). The PLGHA is the modernized and expanded Mexico City Policy, implemented by President Trump to stop U.S. taxpayer funding of international NGOs who perform or promote abortion overseas. SBA Pro-Life America strongly supports the PLGHA. A vote for the procedural vote is a pro-life vote.",
      },
      {
        id: 3,
        title: "H.R. 5, the Equality Act",
        description:
          "The Equality Act’s redefinition of sex and sex discrimination would put abortion on equal standing as pregnancy, while stipulating that any attempt to withhold abortion services constitutes discrimination. The bill’s definition of sex discrimination has already been interpreted by courts to put abortion in the same category as pregnancy and childbirth. The Equality Act could roll back decades of pro-life policy on the state and federal level, and force health care workers and entities to participate in abortion. Efforts to make this bill abortion-neutral were rejected. SBA Pro-Life America strongly opposed this attempt to massively expand so-called abortion rights. A vote against this bill is a pro-life vote.",
      },
      {
        id: 4,
        title:
          "Cole Amendment #1 to H.R. 2740, the Labor Health and Human Services Appropriations Act",
        description:
          "The H.R. 2740 appropriations package includes Labor, Health and Human Services (LHHS) appropriations. A rider was added to the underlying bill that blocks the Trump administration’s Conscience Protection rule. The Cole amendment would amend the House LHHS appropriations text to restore the Trump administration’s conscience protection rule. SBA Pro-Life America strongly supports the Conscience Protection rule and efforts to stop the blocking of its implementation. A vote for the Cole amendment is a pro-life vote.",
      },
      {
        id: 5,
        title:
          "Roby Amendment #9 to H.R. 2740, the Labor Health and Human Services Appropriations Act",
        description:
          "The H.R. 2740 appropriations package includes Labor, Health and Human Services (LHHS) appropriations. A rider was added to the underlying bill that blocks the Trump administration’s Protect Life Rule, which would ensure that Title X family planning grant recipients be “physically and financially separate from abortion-providing facilities.” This amendment would amend the House LHHS appropriations text to restore the Trump administration’s Protect Life Rule (Title X). SBA Pro-Life America strongly supports the Protect Life Rule and efforts to stop the blocking of its implementation. A vote for the Roby amendment is a pro-life vote.",
      },
      {
        id: 6,
        title:
          "Pocan Amendment #1 to H.R. 2740, the Labor Health and Human Services Appropriations Act",
        description:
          "The H.R. 2740 appropriations package includes Labor, Health and Human Services (LHHS) appropriations. The Pocan amendment would amend LHHS appropriations by blocking the Trump administration’s protections against taxpayer funding for research involving organs and tissue from aborted babies. It would accomplish this by blocking the creation of ethics advisory boards to review applications and renewals for research involving human fetal tissue. SBA Pro-Life America List strongly supports the policy regarding fetal tissue, and strongly opposes this effort to block the policy’s implementation. A vote against the Pocan Amendment is a pro-life vote.",
      },
      {
        id: 7,
        title:
          "Lesko Amendment #78 to H.R. 2740, the Labor Health and Human Services Appropriations Act",
        description:
          "The H.R. 2740 appropriations package includes State and Foreign Operations appropriations. A rider was added to make available a greater amount of money through Global Health Programs for family planning and reproductive health, making the funding level of $750 million a floor rather than a ceiling figure. While Protecting Life in Global Health Assistance Policy prevents funding to foreign non-governmental organizations that promote or perform abortion, domestic abortion promoters still receive these funds and would benefit from this increased funding floor. The Lesko amendment would strike this requirement. SBA Pro-Life America strongly opposes increases in international family planning money, and strongly supports efforts to curb such spending. A vote for the Lesko amendment is a pro-life vote.",
      },
      {
        id: 8,
        title:
          "H.R. 2740, the Labor Health and Human Services Appropriations Act",
        description:
          "The H.R. 2740 appropriations package would overturn the President’s Protect Life Rule, Protecting Life in Global Health Assistance, Conscience Protections, and pro-life policy on fetal tissue research, while also increasing foreign aid for US-based groups that promote abortion overseas. President Trump promised to veto any legislation that weakens pro-life protections, saying in a letter to Speaker Pelosi, “I will veto any legislation that weakens current pro-life Federal policies and laws, or that encourages the destruction of innocent human life at any stage.” SBA Pro-Life America strongly supports each of the President’s pro-life policies under attack in this appropriations package, and strongly opposes efforts to block their implementation as well as to increase funding for groups that promote abortion overseas. A vote against H.R. 2740 is a pro-life vote.",
      },
      {
        id: 9,
        title: "H.R. 3351, the Financial Services Appropriations Act",
        description:
          "The H.R. 3351 appropriations bill includes hostile language that would gut the longstanding Dornan Amendment, also known as the D.C. Hyde Amendment, which prevents taxpayer funded abortion in Washington, D.C. President Trump promised to veto any legislation that weakens pro-life protections, saying in a letter to Speaker Pelosi, “I will veto any legislation that weakens current pro-life Federal policies and laws, or that encourages the destruction of innocent human life at any stage.” In 2009, Democrats succeeded in temporarily repealing the amendment, which was quickly restored in 2011. During that time, taxpayers paid for no less than 300 abortions in Washington, D.C. SBA Pro-Life America strongly supports the Dornan Amendment and strongly opposes any efforts to weaken it and allow taxpayer funded elective abortion in our nation’s capital. A vote against H.R. 3351 is a pro-life vote.",
      },
      {
        id: 10,
        title:
          "Discharge Petition on H.R. 962, the Born-Alive Abortion Survivors Protection Act",
        description:
          "Because Speaker Pelosi refuses to allow a vote on the underlying bill, this procedural effort to force a vote on the bill is being treated as a vote on the SBA Pro-Life America National Pro-Life Scorecard. If a majority of the House members sign a discharge petition, a vote will be automatically triggered without needing Speaker Pelosi’s approval. The Born-Alive Abortion Survivors Protection Act builds on the 2002 Born-Alive Infants Protection Act by creating standards of care by which abortion survivors must be treated, establishing penalties for healthcare workers who fail to comply, and giving mothers a private right of action to sue for civil remedies. Signing the discharge petition is considered a pro-life vote.",
      },
      {
        id: 11,
        title: "Vote to amend H.R. 535, the PFAS Action Act ",
        description:
          "This vote to amend by offering a motion to recommit with instructions (MTR) offered by Republicans sought to amend a bill that regulates chemicals that may be toxic, to recognize the unborn as a class of potentially vulnerable populations. SBA Pro-Life America strongly supports the effort to include the unborn as a protected class. A vote in favor of this motion is a pro-life vote.",
      },
      {
        id: 12,
        title:
          "H.J.Res. 79, Removing the deadline for the ratification of the equal rights amendment",
        description:
          "H.J.Res. 79 attempts to revive the ratification process for the long-expired Equal Rights Amendment (ERA) – an amendment that has been interpreted by the courts to install a sweeping legal mandate for abortion on demand, funded with taxpayer dollars, into the United States Constitution. The ERA finds the enactment of any law that imposes a rule or condition that applies to one sex and not to the other as discriminatory on the basis of sex; thus, any law limiting abortion or imposing upon it such conditions as a funding limit could be struck down as violating the ERA. SBA Pro-Life America strongly opposes the ERA and any attempts to revive it. A vote against H.J.Res. 79 is a pro-life vote.",
      },
      {
        id: 13,
        title:
          "Vote to amend H.R. 2339, the Protecting American Lungs and Reversing the Youth Tobacco Epidemic Act",
        description:
          "This vote to amend by offering a motion to recommit with instructions (MTR) offered by Republicans sought to amend a health-related tobacco bill by attaching the text of the Born-Alive Abortion Survivors Protection Act. Because Speaker Pelosi had refused to bring up the bill for a vote, this was a successful, strategic effort to force a vote on the Born-Alive bill. The amendment would create standards of care by which abortion survivors must be treated, establish penalties for healthcare workers who fail to comply, and give mothers a private right of action to sue for civil remedies. SBA Pro-Life America strongly supports the effort to include the Born-Alive bill text in a health-related bill. A vote in favor of this motion is a pro-life vote.",
      },
      {
        id: 14,
        title: "H.R. 6800, the Heroes Act",
        description:
          "This bill spends trillions of dollars exploiting a national emergency while foisting a radical abortion agenda on the American people. The bill includes funding for abortion and health insurance plans that cover elective abortion, offers subsidies for the abortion industry, and provides hazard pay for abortion providers during the pandemic. Though previous pandemic-related relief bills had applied the Hyde Amendment, this bill pushes funding for abortion in direct violation to the Hyde Amendment.",
      },
      {
        id: 15,
        title: "H.R. 51, the Washington, DC Admission Act",
        description:
          "A constitutionally suspect issue of turning the seat of the federal government of the United States into a state and removing it from federal jurisdiction, D.C. statehood would also lead to an increase in funding for abortion through Medicaid. It would remove the ability for the federal government to limit funding for elective abortion in Washington, D.C. through the Dornan Amendment (also known as the D.C. Hyde amendment). Additionally, the admission of D.C. as a state would add two Democratic senators to the Senate who would stand in the way of pro-life legislation designed to defend our most basic rights, and would vote in lockstep against originalist judicial nominations or any nominees who would not conform fully to Roe v. Wade jurisprudence.",
      },
      {
        id: 16,
        title: "H.R. 1425, the State Health Care Premium Reduction Act",
        description:
          "This bill would increase federal funding of abortion coverage by amending and expanding the Patient Protection and Affordable Care Act (Obamacare), pouring millions more dollars into health plans that include elective abortion. To date, Obamacare is the largest single deviation from the Hyde amendment, and this bill would only increase the amount of money going to insurance plans that cover abortion in direct violation of Hyde.",
      },
      {
        id: 17,
        title:
          "H.R. 7608, the State and Foreign Operations, and Military Construction and Veterans Affairs Appropriations Act, 2021",
        description:
          "In violation of the Bipartisan Budget Agreement for Fiscal Years 2020 and 2021, this appropriations package eliminates President Trump’s Protecting Life in Global Health Assistance, the modernized Mexico City Policy, and prevent its future implementation. It would dramatically increase funding for international family planning that without the PLGHA can flow to both foreign and domestic groups who perform or promote abortion overseas. It also funds the UNFPA, an organization with a long history of being complicit in coercive abortion practices overseas, while weakening the Kemp-Kasten amendment that prohibits funding for organizations that support or participate in the management of programs involving coercive abortion or involuntary sterilization. Additionally, the bill includes expansive language on assisted reproductive technologies for veterans without any pro-life protections, leaving no limit to the number of embryos potentially destroyed. ",
      },
      {
        id: 18,
        title:
          "H.R. 7617, the Labor, Health and Human Services, and Financial Services Appropriations Act, 2021",
        description:
          "In violation of the Bipartisan Budget Agreement for Fiscal Years 2020 and 2021, this appropriations package eliminates President Trump’s Protect Life Rule and restores grant funding for organizations – like Planned Parenthood – that use abortion as a method of family planning. It overturns the Trump Administration’s vital conscience protection rules as well as the recent rule clarifying that the federal definition of sex discrimination under the Affordable Care Act (Section 1557) does not include abortion. The bill also prevents implementation of the Trump Administration’s rules regarding religious and moral exemptions that the Supreme Court recently upheld in the case of the Little Sisters of the Poor. The bill would also gut the longstanding, lifesaving Dornan Amendment, also known as the D.C. Hyde Amendment.",
      },
      {
        id: 19,
        title:
          "House Amendment to Senate Amendment to H.R. 925, the America’s Conservation Enhancement Act (aka the HEROES Act) ",
        description:
          "This coronavirus relief package uses “non-discrimination” language to target pro-life policies and laws such as Hyde protections in health insurance, by using broad terms that include abortion. Further, it would make it possible for Planned Parenthood affiliates to receive forgivable loans through the Paycheck Protection Program (PPP). The PPP had been created under the CARES Act with strict guidelines to ensure Planned Parenthood would not benefit from the relief administered through the Small Business Administration.",
      },
      {
        id: 20,
        title:
          "H. Res. 1153, Condemning unwanted, unnecessary medical procedures on individuals without their full, informed consent",
        description:
          "While this resolution rightly condemns forced sterilization for women, it makes the sweeping statement that Congress “recognizes that everyone deserves to control their own reproductive choices and make informed choices about their bodies,” language often used as a euphemism for abortion. When – as is the case here – the phrase is offered by Members of Congress who use parallel language when presuming abortion rights, it follows that the clause is intended as an affirmation of unfettered abortion on demand. Such overreaching language would be exploited as Congressional endorsement for women’s unfettered access to abortion on demand.",
      },
    ],
  };

  return (
    <Box>
      <TopBar />
      <AppHeaderBar />
      {/* <Scorecard /> */}
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
        <Paper sx={{ mb: 3, mt: 1 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              backgroundColor: "transparent", // fully transparent
              borderBottom: "none", // remove any border
              boxShadow: "none", // remove any shadow
              outline: "none", // remove outline
              "& .MuiTabs-indicator": {
                display: "none", // remove active tab underline
              },
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
        <Typography variant="h4" gutterBottom sx={{ color: "#33567c" }}>
          House: Votes We Score
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
              <Typography variant="h2" fontSize={54}>
                {vote.title}
              </Typography>
            </Box>
            {/* <Typography variant="subtitle2" color="text.secondary">
              {vote.date} | {vote.voteType} | Position: {vote.position}
            </Typography> */}

            {/* <Typography paragraph sx={{ mb: 3 }}>
              {vote.description}
            </Typography> */}

            <Divider sx={{ my: 2 }} />

            {/* <Typography variant="subtitle1" gutterBottom>
              Vote Details
            </Typography> */}
            <Typography sx={{ fontSize: "14px" }}>
              {vote.description}
            </Typography>
          </Box>
        ))}
      </Box>

      <Footer />
    </Box>
  );
};

export default House;
