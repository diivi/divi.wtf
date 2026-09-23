// CPA REG question bank — 2026 AICPA REG Blueprint (reviewed 2026-09-20; restyled to AICPA released-item format 2026-09-22).
// AICPA Newly Released Questions — REG (July 2026 release). 33 in-scope MCQs; MCQ-0XXXX items marked
// "beyond the scope of the CPA Exam" in the release (#3 repeat examinations, #6 agency advantages,
// #34 audit adjustments to a later year) were deliberately skipped.
// Batch 2026-09-23: REG-179 .. REG-278 (100 items, tag "batch-2026-09-23") written against the 2026 Blueprint
// task list to fill uncovered representative tasks; see COVERAGE.md.
window.QUESTION_BANK = [
{
  id: "REG-001", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Regulations governing practice before the IRS (Circular 230)", skill: "Remembering & Understanding", difficulty: 1,
  stem: "While preparing a client's current-year individual return, a CPA discovers that the client omitted a significant amount of income from the prior-year return, which the CPA did not prepare. Under Treasury Circular 230, which of the following actions is the CPA required to take?",
  reference: "",
  options: [
    { key: "A", text: "Promptly advise the client of the omission and its consequences." },
    { key: "B", text: "Notify the IRS of the omission if the client refuses to amend." },
    { key: "C", text: "Withdraw from the engagement until an amended return is filed." },
    { key: "D", text: "Prepare and file an amended prior-year return for the client." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Circular 230 §10.21 requires a practitioner who knows that a client has made an error or omission on a return to promptly advise the client of the error and of its consequences under the Code and regulations. The duty is to inform the client; the practitioner need not correct the return or report it.",
    B: "Incorrect. This assumes the practitioner has a duty to report the client to the IRS. Neither Circular 230 nor the AICPA Statements on Standards for Tax Services permit disclosure of a client's error to the IRS without the client's consent; doing so would breach confidentiality under IRC §7216 and the AICPA Code.",
    C: "Incorrect. This treats withdrawal as mandatory. Circular 230 §10.21 does not compel withdrawal; the practitioner should consider whether to continue the relationship if the client refuses to correct a material error, but that is a judgment, not a requirement.",
    D: "Incorrect. This assumes the practitioner may act on the client's behalf without authorization. The decision to amend a return belongs to the client, and a practitioner may not file an amended return without the client's approval; §10.21 requires only that the client be advised."
  },
  tags: ["Circular 230","§10.21","client omission"]
},
{
  id: "REG-002", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Regulations governing practice before the IRS (Circular 230)", skill: "Application", difficulty: 2,
  stem: "A CPA is engaged by four prospective clients. Under Treasury Circular 230, for which of the following engagements may the CPA properly charge a fee that is based on a percentage of the tax result obtained?",
  reference: "",
  options: [
    { key: "A", text: "Preparing an original corporate income tax return." },
    { key: "B", text: "Filing a refund claim when no IRS examination is pending." },
    { key: "C", text: "Representing the client in a Tax Court deficiency proceeding." },
    { key: "D", text: "Preparing a claim for refund of overpaid estimated tax." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. This ignores the general prohibition on contingent fees. Circular 230 §10.27(b)(1) expressly bars a contingent fee for preparing an original tax return; a fee tied to tax savings on an original return is the classic prohibited arrangement.",
    B: "Incorrect. This overlooks the examination requirement. A contingent fee for an amended return or refund claim is permitted under §10.27(b)(2) only when the claim is filed within 120 days of the client receiving written notice of an IRS examination of, or challenge to, the original return. A claim filed on the practitioner's own initiative does not qualify.",
    C: "Correct. Circular 230 §10.27(b)(4) permits a contingent fee for services rendered in connection with any judicial proceeding arising under the Internal Revenue Code. A Tax Court case contesting a deficiency is such a proceeding, so a fee based on the reduction in the deficiency is allowed.",
    D: "Incorrect. This confuses a refund of overpaid tax with the narrow exception for interest and penalties. §10.27(b)(3) allows a contingent fee only for a claim filed solely in connection with the determination of statutory interest or penalties; a refund of overpaid estimated tax is neither that nor tied to an examination or judicial proceeding."
  },
  tags: ["Circular 230","§10.27","contingent fees"]
},
{
  id: "REG-003", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Regulations governing practice before the IRS (Circular 230)", skill: "Application", difficulty: 2,
  stem: "A CPA is asked to sign a client's return containing a position that has a reasonable basis but lacks substantial authority. The position is not a tax shelter or reportable transaction. Under Treasury Circular 230 §10.34 and IRC §6694, the CPA may sign the return:",
  reference: "",
  options: [
    { key: "A", text: "Only if the position is adequately disclosed on the return." },
    { key: "B", text: "Without disclosure, because the position has a reasonable basis." },
    { key: "C", text: "Under no circumstances, because the position is not more likely than not to be sustained." },
    { key: "D", text: "Without disclosure, if the client accepts responsibility for the position in writing." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under IRC §6694(a)(2)(B) and Circular 230 §10.34(a), a non-shelter position that has only a reasonable basis is not an unreasonable position if it is adequately disclosed, generally on Form 8275 or 8275-R. With disclosure, the CPA may sign without risking the preparer penalty.",
    B: "Incorrect. This treats reasonable basis as sufficient on its own. For an undisclosed position, §6694(a)(2)(A) requires substantial authority; reasonable basis avoids the penalty only when the position is disclosed.",
    C: "Incorrect. This applies the more-likely-than-not standard too broadly. Under §6694(a)(2)(C), that standard applies only to tax shelters and reportable transactions; an ordinary position needs substantial authority, or reasonable basis with disclosure.",
    D: "Incorrect. This assumes the client can take on the preparer's obligation. A client's written acknowledgment does not change the preparer's independent duty under §10.34 and §6694, which turns on the authority for the position and whether it is disclosed."
  },
  tags: ["Circular 230","§10.34","§6694","substantial authority","reasonable basis"]
},
{
  id: "REG-004", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Tax return preparer rules and penalties", skill: "Remembering & Understanding", difficulty: 1,
  stem: "A client provides a CPA with a summary schedule of charitable contributions but no receipts. The amounts are consistent with prior years and with the client's income. Under the AICPA Statements on Standards for Tax Services, which of the following is correct regarding the CPA's obligation?",
  reference: "",
  options: [
    { key: "A", text: "The CPA must examine the receipts before deducting the contributions." },
    { key: "B", text: "The CPA may rely on the summary in good faith without verification." },
    { key: "C", text: "The CPA may deduct the contributions only with a signed representation letter." },
    { key: "D", text: "The CPA must limit the deduction to amounts the CPA can independently substantiate." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This imposes an audit-level duty on return preparation. The SSTS and Circular 230 §10.34(d) allow the preparer to rely on client-furnished information; receipts must be examined only when the information appears inconsistent or the preparer has reason to doubt it.",
    B: "Correct. The AICPA Statements on Standards for Tax Services (formerly SSTS No. 3) permit a member to rely in good faith, without verification, on information furnished by the taxpayer. The member must make reasonable inquiries if the information appears incorrect, incomplete, or inconsistent, and should ask whether the client has documentation the Code requires, such as a §170(f)(8) acknowledgment for gifts of $250 or more.",
    C: "Incorrect. This imports an attest concept into tax practice. A representation letter is an audit procedure; the SSTS do not require one and permit good-faith reliance on oral or written client information.",
    D: "Incorrect. This assumes the preparer must independently substantiate every deduction. The preparer does not audit the return or unilaterally reduce reported amounts; if the client's information is consistent and nothing appears wrong, the amounts furnished are used."
  },
  tags: ["SSTS","reliance on client information","reasonable inquiry"]
},
{
  id: "REG-005", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Tax return preparer rules and penalties", skill: "Application", difficulty: 2,
  stem: "A CPA is preparing a client's individual return. The client's business travel records were destroyed in a flood, and the client provides an estimate of the travel expense that appears reasonable. Under the AICPA Statements on Standards for Tax Services, which of the following is correct?",
  reference: "",
  options: [
    { key: "A", text: "Estimates may never be used; the deduction must be omitted." },
    { key: "B", text: "The estimate may be used, and disclosure may be appropriate because of the casualty." },
    { key: "C", text: "The estimate may be used only after the CPA verifies it against third-party records." },
    { key: "D", text: "The estimate must be presented as an exact figure with no disclosure." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This assumes estimates are prohibited outright. The SSTS standard on the use of estimates (formerly SSTS No. 4) expressly permits a member to use the taxpayer's estimates when exact data cannot practically be obtained and the estimates are reasonable under the facts.",
    B: "Correct. The SSTS permit the use of reasonable estimates furnished by the taxpayer. Disclosure is not generally required, but the standard notes that disclosure may be needed to avoid misleading the IRS, for example when records were lost in a fire, flood, or other casualty. The member should also inform the client that travel remains subject to the §274(d) substantiation rules on examination.",
    C: "Incorrect. This imposes a verification duty the standards do not require. A member may rely in good faith on the client's estimate and need only make inquiries if the estimate appears unreasonable.",
    D: "Incorrect. This reverses the guidance. The SSTS state that an estimate should not be presented in a manner that implies greater accuracy than exists, and disclosure may be appropriate in unusual circumstances such as a casualty."
  },
  tags: ["SSTS","use of estimates","§274(d)"]
},
{
  id: "REG-006", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Tax return preparer rules and penalties", skill: "Application", difficulty: 1,
  stem: "A paid preparer charged $3,600 to prepare an individual return. The return understated tax by $22,000 because of an undisclosed position that had a reasonable basis but not substantial authority. The preparer's conduct was not willful or reckless. What is the preparer's penalty under IRC §6694(a)?",
  reference: "",
  options: [
    { key: "A", text: "$1,000" },
    { key: "B", text: "$1,800" },
    { key: "C", text: "$2,700" },
    { key: "D", text: "$5,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $1,000 is the statutory floor of the §6694(a) penalty. Because 50% of the preparer's $3,600 fee ($1,800) exceeds $1,000, the greater amount applies.",
    B: "Correct. The §6694(a) penalty is the greater of $1,000 or 50% of the income derived by the preparer from the return: 50% x $3,600 = $1,800. An undisclosed position with only a reasonable basis is an unreasonable position under §6694(a)(2). The penalty is not measured by the $22,000 understatement.",
    C: "Incorrect. $2,700 is 75% of the fee, the percentage used under §6694(b) for willful or reckless conduct. The facts state the conduct was not willful or reckless, so only §6694(a) applies.",
    D: "Incorrect. $5,000 is the floor of the §6694(b) willful or reckless penalty. That section does not apply to negligent conduct, and the §6694(a) penalty here is $1,800."
  },
  tags: ["§6694","preparer penalty","unreasonable position"]
},
{
  id: "REG-007", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Tax return preparer rules and penalties", skill: "Application", difficulty: 2,
  stem: "A tax return preparer prepared 12 individual returns that each claimed the earned income credit and the child tax credit. On each return the preparer failed to complete Form 8867 or make the required inquiries for either credit. The due diligence penalty is $650 per failure. What is the total penalty under IRC §6695(g)?",
  reference: "",
  options: [
    { key: "A", text: "$1,300" },
    { key: "B", text: "$7,800" },
    { key: "C", text: "$15,600" },
    { key: "D", text: "$31,200" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $1,300 = 2 x $650, which applies one penalty per credit for the preparer as a whole. Under §6695(g) and Reg. §1.6695-2 the penalty is imposed for each failure on each return, not once per credit across all returns.",
    B: "Incorrect. $7,800 = 12 x $650, which counts only one failure per return. Reg. §1.6695-2 applies the penalty separately to each credit (or head-of-household status) for which due diligence was not met, so each return here carries two failures.",
    C: "Correct. The penalty applies separately to each credit on each return: 12 returns x 2 credits x $650 = $15,600. Unlike the §6695(a) copy-furnishing penalty, the §6695(g) due diligence penalty has no annual cap.",
    D: "Incorrect. $31,200 = 12 x 2 x 2 x $650, which treats the missing Form 8867 and the missing inquiries as two separate failures for each credit. The regulation imposes a single penalty per credit per return regardless of how many due diligence steps were skipped."
  },
  tags: ["§6695","due diligence","Form 8867","preparer penalty"]
},
{
  id: "REG-008", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Licensing and disciplinary systems — State boards of accountancy", skill: "Remembering & Understanding", difficulty: 1,
  stem: "A CPA licensed by a state board of accountancy willfully failed to file her own federal income tax returns for three consecutive years. Which of the following correctly describes the disciplinary consequences the CPA may face?",
  reference: "",
  options: [
    { key: "A", text: "Only the state board may sanction her, because the IRS has no authority over CPAs." },
    { key: "B", text: "The IRS Office of Professional Responsibility and the state board may each sanction her." },
    { key: "C", text: "The AICPA may revoke her CPA license." },
    { key: "D", text: "The PCAOB has primary jurisdiction because the matter is federal." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This assumes Circular 230 covers only enrolled agents. CPAs are practitioners under Circular 230 §10.3, and willful failure to file one's own federal returns is disreputable conduct under §10.51 that the IRS Office of Professional Responsibility may sanction.",
    B: "Correct. Two independent disciplinary systems apply. Under Circular 230 §10.50 the Office of Professional Responsibility may censure, suspend, or disbar a practitioner for disreputable conduct such as willfully failing to file returns (§10.51(a)(6)), and the state board that issued the license may separately suspend or revoke it. Action by one body does not preclude the other.",
    C: "Incorrect. This confuses membership with licensure. The AICPA is a voluntary professional organization that can expel or suspend a member, but only a state board of accountancy issues and revokes CPA licenses.",
    D: "Incorrect. This misreads the PCAOB's role. The PCAOB oversees registered firms that audit SEC issuers and has no jurisdiction over a CPA's personal tax compliance."
  },
  tags: ["state board of accountancy","OPR","Circular 230 §10.51","disciplinary systems"]
},
{
  id: "REG-009", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Statute of limitations (assessment and refund claims)", skill: "Application", difficulty: 2,
  stem: "A taxpayer filed a Year 1 individual return on March 10, Year 2, reporting gross income of $200,000. The return was due April 15, Year 2. The taxpayer inadvertently omitted $55,000 of gross income; no fraud was involved. What is the last date on which the IRS may assess additional tax for Year 1?",
  reference: "",
  options: [
    { key: "A", text: "March 10, Year 5" },
    { key: "B", text: "April 15, Year 5" },
    { key: "C", text: "April 15, Year 8" },
    { key: "D", text: "No limitation period applies" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. This measures three years from the actual filing date. Under §6501(b)(1) an early-filed return is deemed filed on the due date, and in any event the omission here triggers the six-year period.",
    B: "Incorrect. April 15, Year 5 would be the normal three-year date under §6501(a). Because the omitted gross income ($55,000) exceeds 25% of the gross income stated on the return (25% x $200,000 = $50,000), the six-year period of §6501(e) applies instead.",
    C: "Correct. $55,000 / $200,000 = 27.5%, which exceeds 25%, so §6501(e) extends the assessment period to six years. The period runs from the deemed filing date of April 15, Year 2, and ends April 15, Year 8.",
    D: "Incorrect. This treats a large omission like fraud. An unlimited assessment period applies under §6501(c) only to a false or fraudulent return, a willful attempt to evade tax, or a failure to file; an inadvertent omission is capped at six years."
  },
  tags: ["§6501","statute of limitations","25% omission"]
},
{
  id: "REG-010", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Statute of limitations (assessment and refund claims)", skill: "Application", difficulty: 3,
  stem: "A taxpayer filed a Year 1 return on April 15, Year 2, showing $30,000 of tax, all paid through withholding. On June 20, Year 4, the taxpayer paid an $8,000 deficiency assessed by the IRS. On September 1, Year 5, the taxpayer files a refund claim based on an overlooked Year 1 deduction that would reduce tax by $10,000. What is the maximum refund allowable?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$8,000" },
    { key: "C", text: "$10,000" },
    { key: "D", text: "$38,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This assumes the claim is untimely because it was filed more than three years after the return. Under §6511(a) a claim is timely if filed within three years of the return or two years of payment, and this claim was filed within two years of the June 20, Year 4 payment.",
    B: "Correct. The three-year window from the April 15, Year 2 filing closed on April 15, Year 5, so the claim is timely only under the two-year-from-payment rule. Under §6511(b)(2)(B) the refund is then limited to tax paid within the two years before the claim, which is the $8,000 paid on June 20, Year 4.",
    C: "Incorrect. This refunds the full overpayment and ignores the look-back limit. Because the claim falls outside the three-year period, §6511(b)(2)(B) caps the refund at the tax paid within the preceding two years.",
    D: "Incorrect. This adds the withheld tax to the deficiency payment. Withholding is deemed paid on the return due date (April 15, Year 2), which is outside the two-year look-back period, and a refund can never exceed the actual overpayment."
  },
  tags: ["§6511","refund claim","look-back period"]
},
{
  id: "REG-011", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Taxpayer penalties", skill: "Application", difficulty: 2,
  stem: "A taxpayer's individual return for the current year showed a balance due of $10,000. The return was due April 15. Without requesting an extension, the taxpayer filed the return and paid the balance in full on July 3. Assuming no reasonable cause, what is the combined failure-to-file and failure-to-pay penalty under IRC §6651?",
  reference: "",
  options: [
    { key: "A", text: "$1,350" },
    { key: "B", text: "$1,500" },
    { key: "C", text: "$1,650" },
    { key: "D", text: "$2,250" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $1,350 is 4.5% x 3 months x $10,000, the failure-to-file penalty after reduction, but it omits the failure-to-pay penalty of 0.5% x 3 months = $150 that applies for the same months.",
    B: "Correct. The return is late for three months or parts of months (April 16 through July 3). The failure-to-file penalty is 5% per month, reduced under §6651(c)(1) by the 0.5% failure-to-pay penalty for each month both apply, so the combined rate is 5% per month: 5% x 3 x $10,000 = $1,500.",
    C: "Incorrect. $1,650 adds three months of failure-to-file at the full 5% ($1,500) to three months of failure-to-pay ($150) without applying the §6651(c)(1) reduction of the failure-to-file penalty for overlapping months.",
    D: "Incorrect. $2,250 applies the combined 5% rate for 4.5 months. Only three months or fractions of a month elapsed between the April 15 due date and the July 3 filing."
  },
  tags: ["§6651","failure to file","failure to pay"]
},
{
  id: "REG-012", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Taxpayer penalties", skill: "Application", difficulty: 2,
  stem: "An individual's return reported tax of $38,000. On examination the correct tax is determined to be $47,000. The $9,000 understatement resulted from an undisclosed position that had a reasonable basis but not substantial authority. There was no negligence or fraud. What is the accuracy-related penalty under IRC §6662?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$900" },
    { key: "C", text: "$1,800" },
    { key: "D", text: "$3,600" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. This assumes reasonable basis alone avoids the penalty. Under §6662(d)(2)(B) a reasonable-basis position reduces the understatement only if it is adequately disclosed; because this position was not disclosed, the full $9,000 remains in the understatement.",
    B: "Incorrect. $900 applies a 10% rate to the understatement, confusing the 10%-of-correct-tax threshold test with the penalty rate. The §6662(a) penalty rate is 20%.",
    C: "Correct. An understatement is substantial for an individual if it exceeds the greater of 10% of the correct tax ($4,700) or $5,000, so the threshold is $5,000. The $9,000 understatement exceeds it and is not reduced by the undisclosed reasonable-basis position. Penalty = 20% x $9,000 = $1,800.",
    D: "Incorrect. $3,600 applies the 40% rate. That rate applies under §6662(h) and (i) only to gross valuation misstatements and undisclosed noneconomic substance transactions, not to an ordinary substantial understatement."
  },
  tags: ["§6662","substantial understatement","accuracy-related penalty"]
},
{
  id: "REG-013", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Audits, appeals and the judicial process", skill: "Remembering & Understanding", difficulty: 1,
  stem: "After an examination, a taxpayer received a statutory notice of deficiency asserting additional income tax. The taxpayer disagrees with the deficiency and does not want to pay the tax before litigating the issue. In which of the following courts may the taxpayer bring the case?",
  reference: "",
  options: [
    { key: "A", text: "U.S. Tax Court" },
    { key: "B", text: "U.S. District Court" },
    { key: "C", text: "U.S. Court of Federal Claims" },
    { key: "D", text: "U.S. Court of Appeals" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The Tax Court is the only forum in which a taxpayer may litigate a deficiency without first paying it. Under IRC §6213 the taxpayer must file a petition within 90 days of the notice of deficiency (150 days if addressed to a person outside the United States).",
    B: "Incorrect. This overlooks the prepayment requirement. The District Court is a refund forum: the taxpayer must pay the tax, file a refund claim, and have it denied or wait six months before suing, although a jury trial is then available.",
    C: "Incorrect. This also overlooks the prepayment requirement. The Court of Federal Claims, like the District Court, hears only refund suits, which require prior payment of the tax and a denied refund claim.",
    D: "Incorrect. This confuses trial and appellate courts. The Court of Appeals reviews decisions of the Tax Court and District Courts; a taxpayer cannot originate a deficiency case there."
  },
  tags: ["Tax Court","notice of deficiency","§6213","judicial process"]
},
{
  id: "REG-014", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Legal duties and responsibilities — Privileged communications, confidentiality and privacy acts", skill: "Application", difficulty: 2,
  stem: "A CPA gave a corporate client tax advice on (1) the deductibility of a bonus accrual, (2) a written opinion promoting the client's participation in a tax shelter, and (3) a transaction that later became the subject of a criminal tax investigation. For which of these may the client assert the federally authorized tax practitioner privilege under IRC §7525?",
  reference: "",
  options: [
    { key: "A", text: "1, 2, and 3" },
    { key: "B", text: "1 only" },
    { key: "C", text: "1 and 3 only" },
    { key: "D", text: "2 and 3 only" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This treats §7525 as equivalent to the attorney-client privilege. The §7525 privilege is much narrower: it excludes written communications promoting tax shelters (§7525(b)) and does not apply in criminal matters (§7525(a)(2)).",
    B: "Correct. §7525 extends the attorney-client privilege to tax advice between a taxpayer and a federally authorized tax practitioner, but only in noncriminal matters before the IRS or in federal court. Advice on the bonus accrual is ordinary tax advice and is protected; the shelter opinion and the criminal matter are both excluded.",
    C: "Incorrect. This misses the criminal-matter limitation. §7525(a)(2) confines the privilege to noncriminal tax matters before the IRS and noncriminal tax proceedings in federal court, so the CPA can be compelled to testify in the criminal investigation.",
    D: "Incorrect. These are exactly the two situations the statute excludes. Note also that the privilege never covers return preparation itself, since preparing a return is not legal advice."
  },
  tags: ["§7525","privilege","confidentiality","§7216"]
},
{
  id: "REG-015", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Legal duties and responsibilities — Common law duties and liabilities to clients and third parties", skill: "Application", difficulty: 2,
  stem: "A CPA firm negligently prepared tax projections for a client. The firm knew the client would give the projections to a bank that was considering a loan. Without the firm's knowledge, the client also gave the projections to a supplier that extended trade credit. Both lenders suffered losses. Under the Restatement (Second) of Torts §552, which parties may recover from the firm for negligence?",
  reference: "",
  options: [
    { key: "A", text: "The client only" },
    { key: "B", text: "The client and the bank only" },
    { key: "C", text: "The client, the bank, and the supplier" },
    { key: "D", text: "The bank and the supplier only" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This applies the strict privity rule of Ultramares, under which only the client or a party in near-privity may sue for ordinary negligence. The question specifies the broader Restatement approach.",
    B: "Correct. Under Restatement (Second) of Torts §552, an accountant is liable for negligent misrepresentation to the client and to a limited group of third parties the accountant knows will receive and rely on the information for a known purpose. The bank was a known prospective lender; the supplier was unknown to the firm and merely foreseeable, so it cannot recover for negligence.",
    C: "Incorrect. This applies the minority reasonably-foreseeable-user rule (Rosenblum). Under the Restatement standard the plaintiff must be a member of a limited class actually known to the accountant, which excludes the supplier.",
    D: "Incorrect. This wrongly bars the client. The client is in privity with the firm and may always sue for negligence; nothing in the facts suggests the client furnished inaccurate data or was otherwise at fault."
  },
  tags: ["negligence","Restatement §552","third-party liability","Ultramares"]
},
{
  id: "REG-016", area: "II", areaName: "Business Law",
  topic: "Agency — Authority of agents and principals", skill: "Application", difficulty: 2,
  stem: "For several years Dana, the purchasing manager of Orion Corp., regularly bought inventory on Orion's credit from Sable Supply. Orion terminated Dana but did not notify Sable. Dana then ordered $30,000 of goods from Sable in Orion's name, took delivery, and disappeared. Is Orion liable to Sable for the goods?",
  reference: "",
  options: [
    { key: "A", text: "Yes, because Dana had apparent authority until Sable received notice of the termination." },
    { key: "B", text: "No, because Dana's actual authority ended when Orion terminated Dana." },
    { key: "C", text: "No, because Sable had a duty to verify Dana's authority for each order." },
    { key: "D", text: "Yes, but only if Orion ratifies the order." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Apparent authority arises from the principal's manifestations to the third party. Orion held Dana out as its purchasing agent for years and gave Sable no notice of the termination, so Dana's apparent authority continued as to Sable and Orion is bound. Orion's remedy is against Dana.",
    B: "Incorrect. This confuses actual authority with apparent authority. Termination ends actual authority, but apparent authority created by the principal's prior conduct survives as to third parties who dealt with the agent until they receive notice of the termination.",
    C: "Incorrect. A third party that has previously dealt with an agent may rely on the continuing appearance of authority. The burden is on the principal to give actual notice to those who dealt with the agent; there is no duty on the third party to re-verify authority on each order.",
    D: "Incorrect. Ratification matters only when the agent acted without any authority. Because Dana had lingering apparent authority, Orion is bound whether or not it chooses to ratify the transaction."
  },
  tags: ["agency","apparent authority","termination of authority","notice"]
},
{
  id: "REG-017", area: "II", areaName: "Business Law",
  topic: "Agency — Duties and liabilities of agents and principals", skill: "Application", difficulty: 1,
  stem: "A real estate agent engaged to sell a client's building learns that a developer will pay a premium for it. Instead of disclosing this, the agent arranges for her brother to buy the building at the listed price and resell it to the developer, splitting the profit with the agent. Which duty owed to the client has the agent breached?",
  reference: "",
  options: [
    { key: "A", text: "The duty of obedience" },
    { key: "B", text: "The duty of reasonable care" },
    { key: "C", text: "The duty to account" },
    { key: "D", text: "The duty of loyalty" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. The duty of obedience requires the agent to follow the principal's lawful instructions. The agent did not disobey an instruction; she secretly profited at the principal's expense, which is a breach of loyalty, not obedience.",
    B: "Incorrect. The duty of care concerns competence and diligence in performing the agency. Deliberate self-dealing is intentional misconduct, not careless performance, so the care standard is not the duty breached.",
    C: "Incorrect. The duty to account requires the agent to keep and remit the principal's funds and property. Although the agent will have to disgorge the secret profit, disgorgement is the remedy; the underlying breach is of the fiduciary duty of loyalty.",
    D: "Correct. An agent is a fiduciary and owes the principal a duty of loyalty: no self-dealing, no secret profits, and full disclosure of material information such as the developer's interest. The agent must disgorge the profit and is liable for the principal's damages."
  },
  tags: ["agency","fiduciary duty","duty of loyalty","secret profit"]
},
{
  id: "REG-018", area: "II", areaName: "Business Law",
  topic: "Agency — Authority of agents and principals", skill: "Application", difficulty: 2,
  stem: "Cole, acting within his actual authority for Hale Industries, contracted in his own name to buy equipment from Vance for $50,000. Cole did not tell Vance that he was acting for anyone. Hale later refused to accept the equipment. From whom may Vance recover on the contract?",
  reference: "",
  options: [
    { key: "A", text: "Cole only" },
    { key: "B", text: "Hale only" },
    { key: "C", text: "Either Cole or Hale" },
    { key: "D", text: "Neither Cole nor Hale" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. This assumes an undisclosed principal is not a party to the contract. An undisclosed principal is liable on contracts made by an agent acting within actual authority even though the third party did not know the principal existed.",
    B: "Incorrect. This applies the rule for a fully disclosed principal, where only the principal is liable. An agent who contracts in his own name for an undisclosed principal is personally liable because the third party dealt with and relied on the agent.",
    C: "Correct. When an agent contracts for an undisclosed principal, both the agent and, once discovered, the principal are liable on the contract. The third party may pursue either but is entitled to only one satisfaction of the claim.",
    D: "Incorrect. This treats an undisclosed-principal contract as voidable by the third party. Such contracts are valid and enforceable; the third party's ignorance of the principal does not release anyone absent fraud."
  },
  tags: ["agency","undisclosed principal","agent liability"]
},
{
  id: "REG-019", area: "II", areaName: "Business Law",
  topic: "Contracts — Formation", skill: "Application", difficulty: 2,
  stem: "On May 1, a seller mailed a buyer an offer to sell a boat, stating that the offer would remain open until May 10 and saying nothing about how to accept. On May 5, the seller mailed a revocation, which the buyer received on May 8. On May 6, the buyer mailed an acceptance, which the seller received on May 9. Was a contract formed?",
  reference: "",
  options: [
    { key: "A", text: "No, because the revocation was mailed before the acceptance was mailed." },
    { key: "B", text: "No, because the buyer received the revocation before the seller received the acceptance." },
    { key: "C", text: "Yes, on May 6, when the buyer mailed the acceptance." },
    { key: "D", text: "Yes, on May 9, when the seller received the acceptance." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. This treats a revocation as effective on dispatch. Under the common law a revocation is effective only when received by the offeree, so the May 5 mailing did nothing until May 8.",
    B: "Incorrect. This treats the acceptance as effective on receipt. Under the mailbox rule the acceptance was effective when mailed on May 6, two days before the revocation was received on May 8, so the revocation came too late.",
    C: "Correct. Because the offer did not specify otherwise, the mailbox rule applies and an acceptance sent by a reasonable medium is effective on dispatch. The buyer's May 6 acceptance preceded the May 8 receipt of the revocation, so a contract was formed on May 6.",
    D: "Incorrect. Acceptance is effective on receipt only when the offer requires it or otherwise displaces the mailbox rule. This offer was silent on the manner of acceptance, so the acceptance was effective on dispatch, not on receipt."
  },
  tags: ["contracts","offer and acceptance","mailbox rule","revocation"]
},
{
  id: "REG-020", area: "II", areaName: "Business Law",
  topic: "Contracts — Formation", skill: "Application", difficulty: 2,
  stem: "A contractor agreed to build a warehouse for Pike for $900,000. Midway through construction the contractor demanded an additional $60,000 to finish, citing higher labor costs, and Pike agreed in writing. The contractor gave nothing new in exchange. Under the common law, is Pike's promise to pay the additional $60,000 enforceable?",
  reference: "",
  options: [
    { key: "A", text: "Yes, because the modification was in writing." },
    { key: "B", text: "Yes, because a good-faith modification needs no new consideration." },
    { key: "C", text: "Yes, because the higher labor cost was an unanticipated circumstance." },
    { key: "D", text: "No, because the contractor had a pre-existing duty to complete the building." }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. A writing does not substitute for consideration under the common law. The statute of frauds concerns whether a contract is evidenced by a writing, not whether a promise is supported by consideration.",
    B: "Incorrect. This applies UCC §2-209(1), which dispenses with consideration for good-faith modifications of contracts for the sale of goods. A construction contract is a services contract governed by the common law, which still requires consideration.",
    C: "Incorrect. Restatement (Second) §89 allows a modification without consideration for circumstances not anticipated when the contract was made, but an ordinary increase in labor cost is a foreseeable business risk, not an unanticipated circumstance.",
    D: "Correct. Under the common-law pre-existing duty rule, a promise to do what one is already contractually bound to do is not consideration. The contractor was already obligated to finish the warehouse, so Pike's promise to pay more is unenforceable."
  },
  tags: ["contracts","consideration","pre-existing duty","modification"]
},
{
  id: "REG-021", area: "II", areaName: "Business Law",
  topic: "Contracts — Formation", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Which of the following oral agreements is enforceable despite the statute of frauds?",
  reference: "",
  options: [
    { key: "A", text: "An agreement to buy a parcel of land for $4,000" },
    { key: "B", text: "A corporate officer's promise to personally guarantee the corporation's bank loan" },
    { key: "C", text: "An agreement to buy 200 custom-printed brochures for $450" },
    { key: "D", text: "An agreement to employ a manager for eighteen months" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. This applies the $500 goods threshold to land. Any contract for the sale of an interest in land must be in writing under the statute of frauds regardless of the price.",
    B: "Incorrect. A promise to answer for the debt of another (a guaranty) must be in writing. The main-purpose exception applies only when the guarantor's primary purpose is its own economic benefit, which these facts do not establish.",
    C: "Correct. Under UCC §2-201 a contract for the sale of goods must be in writing only if the price is $500 or more. A $450 order is below the threshold, so the oral agreement is enforceable.",
    D: "Incorrect. A contract that cannot by its terms be performed within one year of its making must be in writing. An eighteen-month employment term cannot be completed within one year, so the oral agreement is unenforceable."
  },
  tags: ["contracts","statute of frauds","UCC §2-201","one-year rule"]
},
{
  id: "REG-022", area: "II", areaName: "Business Law",
  topic: "Contracts — Formation", skill: "Application", difficulty: 2,
  stem: "A merchant sent a consumer a signed letter offering to sell a used server for $3,000 and stating that the offer would remain open for 120 days. The consumer paid nothing for the promise. Four months later, before the consumer had accepted, the merchant notified the consumer that the offer was withdrawn. The consumer then accepted. Under the UCC, was a contract formed?",
  reference: "",
  options: [
    { key: "A", text: "Yes, because a merchant's firm offer is irrevocable for the entire period stated." },
    { key: "B", text: "Yes, because the revocation was not in a signed writing." },
    { key: "C", text: "No, because a firm offer requires consideration from the offeree." },
    { key: "D", text: "No, because a firm offer is irrevocable for no more than three months." }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. UCC §2-205 caps the period of irrevocability at three months even when the writing states a longer period. After three months the offer became an ordinary revocable offer.",
    B: "Incorrect. The signed-writing requirement in §2-205 applies to the firm offer itself, not to its revocation. Once the offer is revocable, a revocation is effective when communicated to the offeree by any reasonable means.",
    C: "Incorrect. The point of §2-205 is that a merchant's signed written assurance is binding without consideration. An option contract supported by consideration is a different device that may be held open for any agreed period.",
    D: "Correct. Under UCC §2-205 a merchant's signed written offer giving assurance it will be held open is irrevocable without consideration for the time stated, but in no event longer than three months. The revocation four months later was effective before the acceptance, so no contract was formed."
  },
  tags: ["UCC §2-205","firm offer","merchant","revocation"]
},
{
  id: "REG-023", area: "II", areaName: "Business Law",
  topic: "Contracts — Breach and remedies", skill: "Application", difficulty: 2,
  stem: "A buyer contracted to purchase 500 units of fasteners from a seller at $40 per unit. The seller repudiated and delivered nothing. Four days later the buyer reasonably covered by buying 500 substitute units at $48 per unit, paying $600 of extra freight and saving $200 of inspection costs it would have incurred under the original contract. Under the UCC, what amount may the buyer recover?",
  reference: "",
  options: [
    { key: "A", text: "$3,800" },
    { key: "B", text: "$4,000" },
    { key: "C", text: "$4,400" },
    { key: "D", text: "$4,600" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $3,800 = $4,000 cover differential less $200 saved, omitting the $600 of extra freight. Under UCC §2-712(2) incidental damages such as additional freight are added to the cover differential.",
    B: "Incorrect. $4,000 = ($48 - $40) x 500 is the cover differential alone. §2-712(2) also adds incidental damages ($600 freight) and subtracts expenses saved as a consequence of the breach ($200).",
    C: "Correct. Under UCC §2-712 a buyer who covers in good faith without unreasonable delay recovers the cost of cover less the contract price, plus incidental and consequential damages, less expenses saved. ($48 - $40) x 500 = $4,000, plus $600 freight, less $200 saved = $4,400.",
    D: "Incorrect. $4,600 = $4,000 + $600 freight, ignoring the $200 of inspection costs saved. §2-712(2) requires that expenses saved as a consequence of the seller's breach be subtracted."
  },
  tags: ["UCC §2-712","cover","buyer's remedies","damages"]
},
{
  id: "REG-024", area: "II", areaName: "Business Law",
  topic: "Contracts — Performance and discharge", skill: "Application", difficulty: 2,
  stem: "A painter agreed to paint a mural on an interior wall of a restaurant for $20,000 and received a $5,000 deposit. Before the painter began work, a fire not attributable to either party destroyed the restaurant. Which of the following is correct?",
  reference: "",
  options: [
    { key: "A", text: "The painter must paint the mural at a substitute location the owner designates." },
    { key: "B", text: "Both parties are discharged, and the owner recovers the $5,000 deposit." },
    { key: "C", text: "Both parties are discharged, and the painter keeps the $5,000 deposit." },
    { key: "D", text: "The owner is in breach because the owner controlled the premises." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The contract called for a mural on a specific wall that no longer exists. Destruction of the subject matter discharges the contract; the owner cannot unilaterally substitute a materially different performance.",
    B: "Correct. Destruction of the specific subject matter essential to performance, without fault of either party, discharges both parties under the doctrine of impossibility. Because no benefit was conferred and no one breached, the owner recovers the deposit in restitution.",
    C: "Incorrect. This treats the deposit as liquidated damages, which presuppose a breach and an agreed damages clause. There is neither here, so retaining the deposit would unjustly enrich the painter.",
    D: "Incorrect. Ownership of the premises does not make the fire the owner's fault. Absent negligence by the owner, an accidental destruction of the subject matter discharges the contract rather than breaching it."
  },
  tags: ["contracts","impossibility","discharge","restitution"]
},
{
  id: "REG-025", area: "II", areaName: "Business Law",
  topic: "Debtor-creditor relationships — Suretyship, secured transactions and bankruptcy distributions", skill: "Application", difficulty: 2,
  stem: "Ames, Bell and Cruz are co-sureties on a bank loan to a debtor, with maximum liabilities of $300,000, $200,000 and $100,000, respectively. The debtor defaulted when $180,000 was owed, and the bank collected the full $180,000 from Ames. Ignoring any recovery from the debtor, what may Ames recover from Bell and Cruz in contribution?",
  reference: "",
  options: [
    { key: "A", text: "$60,000 from Bell and $30,000 from Cruz" },
    { key: "B", text: "$60,000 from Bell and $60,000 from Cruz" },
    { key: "C", text: "$90,000 from Bell and $45,000 from Cruz" },
    { key: "D", text: "$120,000 from Bell and $60,000 from Cruz" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Absent agreement, co-sureties share a loss in proportion to their maximum liabilities. Total limits are $600,000, so the shares of the $180,000 loss are Ames $90,000, Bell $60,000 and Cruz $30,000. Ames paid $90,000 more than his share and recovers that excess from Bell ($60,000) and Cruz ($30,000).",
    B: "Incorrect. Equal one-third shares apply only when co-sureties have equal limits or no stated limits. Because the limits differ, contribution is measured by each surety's proportionate limit, not by head count.",
    C: "Incorrect. This splits the entire $180,000 between Bell and Cruz in a 2:1 ratio as if Ames bore no share. Ames is a co-surety and must bear his own proportionate share of $90,000.",
    D: "Incorrect. This applies the 2:1 ratio to the sureties' limits rather than to the loss and ignores Ames's own share. Contribution is limited to the amount Ames paid in excess of his proportionate share of the actual $180,000 loss."
  },
  tags: ["suretyship","co-sureties","contribution"]
},
{
  id: "REG-026", area: "II", areaName: "Business Law",
  topic: "Debtor-creditor relationships — Suretyship, secured transactions and bankruptcy distributions", skill: "Application", difficulty: 3,
  stem: "A consumer bought a home entertainment system from a retailer on credit and signed a security agreement covering the system. The retailer did not file a financing statement. The consumer later sold the system to a neighbor who paid value, had no knowledge of the security interest, and uses it at home. Under UCC Article 9, does the neighbor take free of the retailer's security interest?",
  reference: "",
  options: [
    { key: "A", text: "Yes, because the retailer never filed a financing statement." },
    { key: "B", text: "Yes, because the retailer's security interest was never perfected." },
    { key: "C", text: "No, because the retailer's security interest was automatically perfected." },
    { key: "D", text: "No, because the neighbor did not buy from a merchant." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The retailer's purchase-money security interest in consumer goods was perfected automatically on attachment (UCC §9-309(1)), but under §9-320(b) a buyer of consumer goods from a consumer takes free of such an interest if the buyer gives value, lacks knowledge, buys for personal use, and no financing statement was filed before the purchase. Filing would have protected the retailer.",
    B: "Incorrect. This assumes a filing is always needed to perfect. A PMSI in consumer goods is perfected automatically upon attachment under §9-309(1); the retailer loses to the neighbor because of the §9-320(b) exception, not because it was unperfected.",
    C: "Incorrect. Automatic perfection is real, but §9-320(b) makes it ineffective against a good-faith consumer buyer from a consumer when no financing statement was filed. Perfection without filing does not by itself defeat this buyer.",
    D: "Incorrect. This confuses the buyer-in-ordinary-course rule of §9-320(a), which requires a purchase from a seller in the business of selling such goods, with the consumer-to-consumer rule of §9-320(b), which applies precisely when the seller is not a merchant."
  },
  tags: ["UCC Article 9","PMSI","consumer goods","§9-320(b)","priority"]
},
{
  id: "REG-027", area: "II", areaName: "Business Law",
  topic: "Debtor-creditor relationships — Suretyship, secured transactions and bankruptcy distributions", skill: "Application", difficulty: 2,
  stem: "A bank has a perfected security interest in all present and after-acquired inventory of a car dealer. The dealer sold a car in the ordinary course of its business to a buyer who knew of the bank's security interest but did not know the sale violated the security agreement. Under UCC Article 9, does the buyer take the car free of the bank's security interest?",
  reference: "",
  options: [
    { key: "A", text: "Yes, because a buyer in ordinary course takes free even with knowledge of the security interest." },
    { key: "B", text: "No, because the buyer knew of the bank's security interest." },
    { key: "C", text: "No, because the bank's security interest was perfected before the sale." },
    { key: "D", text: "Yes, but only if the bank consented to the sale." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under UCC §9-320(a) a buyer in ordinary course of business takes free of a security interest created by the seller even if the interest is perfected and the buyer knows it exists. Only knowledge that the sale violates the security agreement defeats the buyer.",
    B: "Incorrect. Mere knowledge that a security interest exists does not disqualify a buyer in ordinary course. §9-320(a) is lost only when the buyer knows the particular sale violates the secured party's rights.",
    C: "Incorrect. Perfection protects the bank against other creditors and the trustee, not against ordinary-course buyers. An inventory lender is expected to look to the proceeds under §9-315, not to encumber goods sold to customers.",
    D: "Incorrect. A buyer in ordinary course does not need the secured party's consent. The protection of §9-320(a) applies by operation of law whenever the buyer meets the statutory definition."
  },
  tags: ["UCC §9-320(a)","buyer in ordinary course","inventory","priority"]
},
{
  id: "REG-028", area: "II", areaName: "Business Law",
  topic: "Debtor-creditor relationships — Suretyship, secured transactions and bankruptcy distributions", skill: "Application", difficulty: 2,
  stem: "A corporation is in Chapter 7 liquidation. After secured creditors were paid from their collateral, the trustee holds $90,000. Allowed claims are administrative expenses of $20,000; wages earned within 180 days before the petition of $12,000 owed to each of three employees (the wage priority limit is $17,150 per employee); prior-year income taxes of $25,000; and general unsecured claims of $200,000. What amount will the general unsecured creditors receive?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$9,000" },
    { key: "C", text: "$29,000" },
    { key: "D", text: "$34,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This assumes the priority claims exhaust the estate. Administrative expenses $20,000 + wages $36,000 + taxes $25,000 = $81,000, which leaves $9,000 for the general unsecured creditors.",
    B: "Correct. Under Bankruptcy Code §507 each priority class is paid in full before the next: administrative expenses $20,000 (balance $70,000); wage claims 3 x $12,000 = $36,000, each under the per-employee limit (balance $34,000); income taxes $25,000 (balance $9,000). The remaining $9,000 goes pro rata to the general unsecured creditors.",
    C: "Incorrect. $29,000 results from treating only one $12,000 wage claim as a priority claim. The wage limit applies per employee, so all three claims are fourth-priority claims paid before general unsecured creditors.",
    D: "Incorrect. $34,000 is the balance before paying the income tax claim. Unsecured income taxes for a year ending within three years of the petition are eighth-priority claims under §507(a)(8) and must be paid before general unsecured creditors."
  },
  tags: ["bankruptcy","Chapter 7","§507 priorities","distribution"]
},
{
  id: "REG-029", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Bankruptcy (types, discharge and avoidance)", skill: "Remembering & Understanding", difficulty: 1,
  stem: "An individual received a discharge in a Chapter 7 case. Which of the following debts was discharged?",
  reference: "",
  options: [
    { key: "A", text: "Past-due child support owed to a former spouse" },
    { key: "B", text: "A judgment for injuries the debtor caused while driving intoxicated" },
    { key: "C", text: "A debt the debtor failed to list, where the creditor had no notice of the case" },
    { key: "D", text: "An unsecured bank loan obtained without any misrepresentation" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. Domestic support obligations, including child support, are nondischargeable under Bankruptcy Code §523(a)(5) in every chapter, no matter how old the arrearage is.",
    B: "Incorrect. Debts for death or personal injury caused by the debtor's operation of a motor vehicle while intoxicated are excepted from discharge under §523(a)(9).",
    C: "Incorrect. A debt that was neither listed nor scheduled in time for the creditor to file a timely claim, where the creditor lacked notice or actual knowledge of the case, is excepted from discharge under §523(a)(3).",
    D: "Correct. An ordinary unsecured loan is exactly the type of debt Chapter 7 discharges. Only loans obtained by fraud or a false financial statement are excepted under §523(a)(2), and the facts state there was no misrepresentation."
  },
  tags: ["bankruptcy","Chapter 7","§523 nondischargeable debts","discharge"]
},
{
  id: "REG-030", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Bankruptcy (types, discharge and avoidance)", skill: "Application", difficulty: 2,
  stem: "A corporation filed a voluntary Chapter 7 petition on September 1 of the current year and had been insolvent throughout the preceding year. Which of the following payments by the corporation may the trustee avoid as a preferential transfer?",
  reference: "",
  options: [
    { key: "A", text: "$25,000 paid on May 1 to a supplier on an overdue invoice" },
    { key: "B", text: "$40,000 repaid on June 15 to the corporation's president on an overdue unsecured loan" },
    { key: "C", text: "$8,000 paid COD on August 20 for goods delivered that day" },
    { key: "D", text: "$6,000 rent paid to the landlord on its August 10 due date, consistent with past practice" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The supplier is not an insider, so the look-back period under §547(b)(4)(A) is 90 days. A payment on May 1 is more than 90 days before the September 1 petition and cannot be avoided as a preference.",
    B: "Correct. Under Bankruptcy Code §547(b) a transfer to an insider on account of an antecedent debt, made while insolvent within one year before the petition, that lets the insider receive more than in a liquidation is a preference. A corporate officer is an insider under §101(31), so the June 15 repayment is avoidable.",
    C: "Incorrect. A COD payment for goods delivered the same day is a substantially contemporaneous exchange for new value, excepted under §547(c)(1). Nothing was paid on account of an antecedent debt.",
    D: "Incorrect. Regular rent paid when due, consistent with the parties' past practice, is a payment in the ordinary course of business and is shielded from avoidance by §547(c)(2)."
  },
  tags: ["bankruptcy","§547 preferences","insider","ordinary course defense"]
},
{
  id: "REG-031", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Employment taxes and worker classification", skill: "Application", difficulty: 1,
  stem: "A company engaged a designer to produce graphic designs. The designer works from home using her own equipment, sets her own hours, is paid a flat fee per project, works for several other clients, and may hire assistants at her own expense. The company reviews only the final deliverable. For federal employment tax purposes, the designer is most likely:",
  reference: "",
  options: [
    { key: "A", text: "An employee, because the company may reject her final work product." },
    { key: "B", text: "An employee, because her services are part of the company's regular business." },
    { key: "C", text: "An independent contractor, so the company withholds neither income tax nor FICA." },
    { key: "D", text: "An independent contractor, but the company must still withhold FICA." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Under the common-law control test, the right to accept or reject a finished product does not amount to the right to control how the work is performed. The designer controls her own methods, hours and tools.",
    B: "Incorrect. Whether the work is integral to the business is only one factor and is not determinative. The behavioral and financial control factors, which point strongly to contractor status, outweigh it.",
    C: "Correct. Control over how and when the work is done, investment in her own equipment, opportunity for profit or loss, multiple clients and the right to delegate are the hallmarks of an independent contractor. The payer withholds nothing; it reports payments above the threshold on Form 1099-NEC, and the contractor pays self-employment tax.",
    D: "Incorrect. FICA withholding under §3102 applies only to wages paid to employees. An independent contractor pays self-employment tax under §1401 on her own net earnings; the payer has no FICA obligation."
  },
  tags: ["worker classification","independent contractor","Form 1099-NEC","FICA"]
},
{
  id: "REG-032", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Employment taxes and worker classification", skill: "Application", difficulty: 1,
  stem: "During the current year Bolt Corp. paid wages of $5,000, $30,000 and $190,000 to its three employees. The FUTA rate is 6.0% on the first $7,000 of wages paid to each employee, and Bolt qualifies for the full 5.4% credit for timely state unemployment contributions. What is Bolt's FUTA tax for the year?",
  reference: "",
  options: [
    { key: "A", text: "$114" },
    { key: "B", text: "$126" },
    { key: "C", text: "$1,140" },
    { key: "D", text: "$1,350" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. FUTA wages are the lesser of actual wages or $7,000 per employee: $5,000 + $7,000 + $7,000 = $19,000. The net rate after the 5.4% credit is 0.6%, so the tax is $19,000 x 0.6% = $114.",
    B: "Incorrect. $126 = 3 x $7,000 x 0.6%, which applies the full $7,000 wage base to the employee who earned only $5,000. The base for each employee is the lesser of actual wages or $7,000.",
    C: "Incorrect. $1,140 = $19,000 x 6.0%, ignoring the 5.4% credit for timely state unemployment contributions. The facts state that Bolt qualifies for the full credit.",
    D: "Incorrect. $1,350 = $225,000 x 0.6%, applying the net rate to total wages with no per-employee wage base. Unlike Medicare tax, FUTA applies only to the first $7,000 paid to each employee."
  },
  tags: ["FUTA","employment tax","wage base"]
},
{
  id: "REG-033", area: "II", areaName: "Business Law",
  topic: "Business structure — Rights, duties, obligations and authority of owners and management", skill: "Application", difficulty: 2,
  stem: "Three CPAs practice as a general partnership with no written agreement. One partner negligently performs an audit, and the client obtains a $400,000 judgment against the partnership, which has only $100,000 of assets. Which of the following is correct regarding the $300,000 unpaid balance?",
  reference: "",
  options: [
    { key: "A", text: "Only the negligent partner is personally liable for it." },
    { key: "B", text: "Each partner is jointly and severally liable for the entire balance." },
    { key: "C", text: "Each partner is liable for one-third of the balance." },
    { key: "D", text: "No partner is personally liable for it." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This describes a limited liability partnership, where innocent partners are shielded from a co-partner's malpractice. In a general partnership every partner is personally liable for partnership obligations, including torts committed by a partner in the ordinary course of business.",
    B: "Correct. Under RUPA §306 partners are jointly and severally liable for all partnership obligations. After partnership assets are exhausted (RUPA §307), the client may collect the entire balance from any one partner, who then has a right of contribution from the others.",
    C: "Incorrect. This treats liability as several by shares. The plaintiff may recover the whole unpaid balance from any partner; the one-third allocation is an internal contribution matter, not a limit on the creditor's recovery.",
    D: "Incorrect. A general partnership provides no liability shield. Only an LLP, LLC or corporation limits the owners' personal liability for entity debts."
  },
  tags: ["general partnership","RUPA","joint and several liability","LLP"]
},
{
  id: "REG-034", area: "II", areaName: "Business Law",
  topic: "Business structure — Selection, formation, operation and termination", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Which of the following is correct regarding a limited liability company formed under a typical state LLC act?",
  reference: "",
  options: [
    { key: "A", text: "It must have at least two members." },
    { key: "B", text: "A member who manages the LLC becomes personally liable for its debts." },
    { key: "C", text: "It is formed by filing articles of organization with the state." },
    { key: "D", text: "It is taxed as a corporation unless it elects otherwise." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Every state permits single-member LLCs. The two-owner requirement is a feature of partnerships, not LLCs.",
    B: "Incorrect. This applies the old limited-partnership control rule to LLCs. LLC members keep limited liability whether or not they participate in management; liability arises only through personal guarantees, personal torts or veil piercing.",
    C: "Correct. An LLC comes into existence when articles (or a certificate) of organization are filed with the secretary of state. Members and managers are not personally liable for the LLC's debts solely by reason of their status.",
    D: "Incorrect. Under the check-the-box regulations (Reg. §301.7701-3) a multi-member LLC is taxed as a partnership by default and a single-member LLC is disregarded; corporate treatment requires an election on Form 8832."
  },
  tags: ["LLC","limited liability","articles of organization","check-the-box"]
},
{
  id: "REG-035", area: "II", areaName: "Business Law",
  topic: "Business structure — Rights, duties, obligations and authority of owners and management", skill: "Application", difficulty: 2,
  stem: "A corporation's board of directors approved the acquisition of a competitor after reviewing a management summary and an investment bank's fairness opinion. None of the directors had a personal interest in the transaction. The acquisition failed, and shareholders sued the directors for breach of the duty of care. The directors will most likely be protected by:",
  reference: "",
  options: [
    { key: "A", text: "The business judgment rule." },
    { key: "B", text: "The entire fairness standard." },
    { key: "C", text: "The corporate opportunity doctrine." },
    { key: "D", text: "The ultra vires doctrine." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The business judgment rule presumes that disinterested directors who act in good faith, on an informed basis, and in the honest belief that the decision is in the corporation's best interest have satisfied the duty of care. Reasonable reliance on officers' reports and expert opinions is expressly permitted (MBCA §8.30), and a bad outcome alone does not rebut the presumption.",
    B: "Incorrect. Entire fairness is the burden placed on interested directors who have a conflict; they must prove the transaction was fair to the corporation. It is a hurdle for the defendant, not a protection, and it does not apply where no director was interested.",
    C: "Incorrect. The corporate opportunity doctrine is a duty-of-loyalty rule that bars a director from taking for himself a business opportunity belonging to the corporation. It has nothing to do with defending a duty-of-care claim.",
    D: "Incorrect. Ultra vires concerns acts beyond the corporation's powers under its articles. Acquiring a competitor is within ordinary corporate powers, and the doctrine is not a defense to a claim of careless decision-making."
  },
  tags: ["corporations","business judgment rule","duty of care","directors"]
},
{
  id: "REG-036", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets", skill: "Application", difficulty: 2,
  stem: "Mona received stock as a gift from her uncle in Year 1. The uncle's adjusted basis in the stock was $50,000, and the fair market value on the date of the gift was $35,000. No gift tax was paid. In Year 3, Mona sold the stock for $42,000. What amount of gain or loss should Mona recognize on the sale?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$7,000 gain" },
    { key: "C", text: "$8,000 loss" },
    { key: "D", text: "$15,000 loss" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under the §1015 dual-basis rule, the donee's basis for gain is the donor's basis ($50,000) and, because FMV at the gift date was lower, the basis for loss is that FMV ($35,000). Using the gain basis, $42,000 - $50,000 produces a loss; using the loss basis, $42,000 - $35,000 produces a gain. A sale price between the two bases yields neither gain nor loss, so $0 is recognized.",
    B: "Incorrect. $7,000 is $42,000 - $35,000, which uses the FMV at the date of the gift as the basis for gain. FMV is used only to measure a loss under §1015; the basis for gain is the donor's $50,000 carryover basis, which produces no gain here.",
    C: "Incorrect. $8,000 is $42,000 - $50,000, which uses the donor's carryover basis to measure a loss. When FMV at the gift date is below the donor's basis, §1015 limits the loss basis to that FMV ($35,000), and $42,000 exceeds it, so no loss is allowed.",
    D: "Incorrect. $15,000 is the built-in loss in the uncle's hands ($35,000 FMV - $50,000 basis). That decline in value occurred before the gift and can never be deducted by the donee; §1015 caps the donee's loss basis at FMV on the gift date."
  },
  tags: ["§1015","gift basis","dual basis","holding period"]
},
{
  id: "REG-037", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets", skill: "Application", difficulty: 1,
  stem: "Dev inherited land from his mother, who died on February 3, Year 2. The mother had purchased the land in Year 1 for $200,000. The land was worth $260,000 on the date of death and $250,000 six months later. The executor did not elect the alternate valuation date. Dev sold the land on August 1, Year 2, for $275,000. What is the amount and character of Dev's gain?",
  reference: "",
  options: [
    { key: "A", text: "$15,000, short-term" },
    { key: "B", text: "$15,000, long-term" },
    { key: "C", text: "$25,000, long-term" },
    { key: "D", text: "$75,000, short-term" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The $15,000 amount is right, but the character is wrong. Under §1223(9), property acquired from a decedent is automatically treated as held for more than one year, so the gain is long-term even though Dev held the land for only six months.",
    B: "Correct. The basis of inherited property is its FMV on the date of death under §1014, here $260,000, because the alternate valuation date was not elected. Gain is $275,000 - $260,000 = $15,000. Inherited property is deemed held long-term under §1223(9), so the gain is a $15,000 long-term capital gain.",
    C: "Incorrect. $25,000 is $275,000 - $250,000, which uses the value six months after death. The alternate valuation date under §2032 applies only if the executor elects it, and the executor did not.",
    D: "Incorrect. $75,000 is $275,000 - $200,000, which uses the mother's original cost. Carryover basis applies to gifts under §1015, not to inherited property, which takes a stepped-up basis under §1014; the holding period is also long-term, not short-term."
  },
  tags: ["§1014","inherited property","stepped-up basis","§1223(9)"]
},
{
  id: "REG-038", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Property dispositions — Nonrecognition, related-party and §1231/§1245 (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 2,
  stem: "Ruiz exchanged an office building held for investment (adjusted basis $300,000, FMV $500,000, subject to a $120,000 mortgage assumed by the other party) for a warehouse with a FMV of $350,000 plus $30,000 cash. What are Ruiz's recognized gain and his basis in the warehouse?",
  reference: "IRC §1031: no gain or loss is recognized on the exchange of real property held for productive use or investment solely for like-kind real property. Gain is recognized to the extent of boot received (cash and net liability relief). Basis of property received = adjusted basis of property given up + gain recognized - boot received (or: FMV of property received - deferred gain).",
  options: [
    { key: "A", text: "Recognized gain $150,000; basis $350,000" },
    { key: "B", text: "Recognized gain $30,000; basis $180,000" },
    { key: "C", text: "Recognized gain $200,000; basis $350,000" },
    { key: "D", text: "Recognized gain $150,000; basis $300,000" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. The recognized gain of $150,000 is correct but the basis is not. Basis = $300,000 + $150,000 recognized - $150,000 boot = $300,000. Alternatively FMV received $350,000 - deferred gain $50,000 = $300,000. A basis of $350,000 would leave no deferred gain.",
    B: "Incorrect. This counts only the cash as boot. Net liability relief ($120,000 mortgage assumed by the other party, with no liability assumed by Ruiz) is also boot under §1031(d) and Reg. §1.1031(b)-1. Total boot = $150,000.",
    C: "Incorrect. Realized gain is $200,000 (amount realized $500,000 = $350,000 + $30,000 + $120,000, less basis $300,000). Recognized gain is limited to the lesser of realized gain or boot received, which is $150,000.",
    D: "Correct. Amount realized = $350,000 + $30,000 cash + $120,000 debt relief = $500,000; realized gain = $500,000 - $300,000 = $200,000. Boot = $30,000 + $120,000 = $150,000, so recognized gain = $150,000 (lesser of realized gain or boot). Basis in warehouse = $300,000 + $150,000 - $150,000 = $300,000; the $50,000 deferred gain is preserved because the warehouse is worth $350,000."
  },
  tags: ["§1031","like-kind exchange","boot","liability relief","beyond-2026-REG-blueprint"]
},
{
  id: "REG-039", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Property dispositions — Nonrecognition, related-party and §1231/§1245 (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 2,
  stem: "A fire destroyed Lark Corp.'s warehouse (adjusted basis $400,000) in March 2025. Lark received $700,000 of insurance proceeds in June 2025 and in November 2025 purchased a replacement warehouse for $640,000. Lark makes the appropriate election. What is Lark's recognized gain and its basis in the replacement warehouse?",
  reference: "IRC §1033: gain from an involuntary conversion is recognized only to the extent the amount realized exceeds the cost of qualifying replacement property acquired within the replacement period (generally 2 years after the close of the tax year in which gain is realized; 3 years for condemned business real property). Basis of replacement property = cost - deferred gain.",
  options: [
    { key: "A", text: "Recognized gain $60,000; basis $400,000" },
    { key: "B", text: "Recognized gain $0; basis $340,000" },
    { key: "C", text: "Recognized gain $300,000; basis $640,000" },
    { key: "D", text: "Recognized gain $60,000; basis $580,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Realized gain = $700,000 - $400,000 = $300,000. Proceeds not reinvested = $700,000 - $640,000 = $60,000, which is the recognized gain (lesser of realized gain or unreinvested proceeds). Deferred gain = $300,000 - $60,000 = $240,000. Basis of replacement = $640,000 - $240,000 = $400,000.",
    B: "Incorrect. Nonrecognition is complete only if all proceeds are reinvested. Because $60,000 was retained, that amount is recognized. A basis of $340,000 would defer the entire $300,000 gain, double-counting the recognized portion.",
    C: "Incorrect. Full recognition with a cost basis would be the result if Lark failed to replace within the period or did not elect deferral. §1033 is elective for gains, and the election was made.",
    D: "Incorrect. The recognized gain is correct, but $580,000 subtracts only the recognized $60,000 from cost. The basis is reduced by the deferred gain ($240,000), not the recognized gain."
  },
  tags: ["§1033","involuntary conversion","replacement property","beyond-2026-REG-blueprint"]
},
{
  id: "REG-040", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Property dispositions — Nonrecognition, related-party and §1231/§1245 (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 2,
  stem: "Sam and Tess, a married couple filing jointly, purchased and moved into their home on January 1, 2024, for $520,000. On July 1, 2025 (18 months later), they sold the home for $760,000 (net of selling expenses) because Sam's employer transferred him to an office 400 miles away. Neither spouse had used the §121 exclusion before. What amount of gain must they recognize on their 2025 joint return?",
  reference: "IRC §121 (Tax year 2025): up to $250,000 ($500,000 MFJ) of gain is excluded if the taxpayer owned and used the home as a principal residence for at least 2 of the 5 years before the sale. If the 2-year test is not met because of a change in place of employment (new workplace at least 50 miles farther from the home), health, or unforeseen circumstances, a reduced exclusion applies: maximum exclusion x (months of qualifying ownership and use / 24).",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$240,000" },
    { key: "C", text: "$52,500" },
    { key: "D", text: "$115,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Realized gain = $760,000 - $520,000 = $240,000. The couple fails the 2-year test but qualifies for the reduced exclusion because of a change in place of employment. Reduced exclusion = $500,000 x 18/24 = $375,000. Since $375,000 exceeds the $240,000 gain, the entire gain is excluded and $0 is recognized.",
    B: "Incorrect. This assumes no exclusion is available because the 2-year test was not met. §121(c) provides a prorated exclusion for sales due to employment changes, health or unforeseen circumstances.",
    C: "Incorrect. $52,500 = $240,000 - ($250,000 x 18/24). It uses the single-taxpayer $250,000 ceiling instead of the $500,000 ceiling available to a married couple filing jointly where both spouses meet the use test.",
    D: "Incorrect. $115,000 = $240,000 - ($500,000 x 6/24). It prorates using the 6-month shortfall instead of the 18 months of actual qualifying ownership and use."
  },
  tags: ["§121","principal residence","reduced exclusion","beyond-2026-REG-blueprint"]
},
{
  id: "REG-041", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Property dispositions — Nonrecognition, related-party and §1231/§1245 (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 2,
  stem: "In 2024 Nora sold stock with a basis of $80,000 to her brother Owen for $60,000, its fair market value. In 2025 Owen sold the stock to an unrelated buyer for $95,000. What are Nora's deductible loss in 2024 and Owen's recognized gain in 2025?",
  reference: "IRC §267(a)(1): losses on sales between related parties (including siblings) are disallowed. §267(d): if the transferee later sells the property at a gain, the gain is recognized only to the extent it exceeds the previously disallowed loss.",
  options: [
    { key: "A", text: "Nora: $0; Owen: $35,000" },
    { key: "B", text: "Nora: $20,000; Owen: $35,000" },
    { key: "C", text: "Nora: $0; Owen: $15,000" },
    { key: "D", text: "Nora: $20,000; Owen: $15,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Nora's loss is correctly disallowed, but Owen's gain is not the full $35,000. §267(d) allows the buyer to offset his gain by the seller's previously disallowed loss.",
    B: "Incorrect. Brothers and sisters are related parties under §267(b)(1) and (c)(4). Nora's $20,000 loss is disallowed even though the sale was at fair market value.",
    C: "Correct. Nora's $20,000 loss ($60,000 - $80,000) is disallowed under §267(a)(1) because Owen is her brother. Owen's basis is his $60,000 cost, so his realized gain is $95,000 - $60,000 = $35,000, but under §267(d) he recognizes only the excess over the disallowed loss: $35,000 - $20,000 = $15,000. Note the disallowed loss can only reduce gain; it cannot create or increase a loss for Owen.",
    D: "Incorrect. Nora's loss cannot be deducted. Only one benefit is allowed: either the loss would be deductible by the seller or the buyer may use it to offset gain, and §267 chooses the latter."
  },
  tags: ["§267","related party","disallowed loss","beyond-2026-REG-blueprint"]
},
{
  id: "REG-042", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Property dispositions — Nonrecognition, related-party and §1231/§1245 (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 1,
  stem: "In 2025 Quill Corp. sold a machine used in its business for $90,000. The machine was purchased in 2021 for $110,000 and $70,000 of depreciation had been taken. Quill had no other property transactions in 2025 and no nonrecaptured §1231 losses from prior years. What is the amount and character of Quill's gain?",
  reference: "IRC §1245: gain on the disposition of depreciable personal property is ordinary income to the extent of depreciation taken (limited to the gain realized). Any excess gain on property used in a trade or business and held more than one year is §1231 gain.",
  options: [
    { key: "A", text: "$50,000 ordinary income and $0 §1231 gain" },
    { key: "B", text: "$70,000 ordinary income and $20,000 §1231 loss" },
    { key: "C", text: "$50,000 §1231 gain" },
    { key: "D", text: "$20,000 ordinary income and $30,000 §1231 gain" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Adjusted basis = $110,000 - $70,000 = $40,000. Realized gain = $90,000 - $40,000 = $50,000. Under §1245, ordinary income = lesser of depreciation taken ($70,000) or gain realized ($50,000) = $50,000. Because the entire gain is recaptured, there is no §1231 gain.",
    B: "Incorrect. §1245 recapture is limited to the gain realized. It cannot exceed the $50,000 gain, and it never generates a §1231 loss on a sale that produced an overall gain.",
    C: "Incorrect. This ignores depreciation recapture. Because the asset is §1245 property (depreciable personal property), gain is ordinary to the extent of prior depreciation before any of it can be treated as §1231 gain.",
    D: "Incorrect. This recaptures only $20,000, the shortfall of the $90,000 sale price below the $110,000 original cost, and treats the rest as §1231 gain. §1245 recapture is measured by the depreciation actually taken (limited to the gain), not by the difference between cost and sale price. §1231 gain would arise only if the sale price exceeded the $110,000 original cost."
  },
  tags: ["§1245","§1231","depreciation recapture","beyond-2026-REG-blueprint"]
},
{
  id: "REG-043", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Property dispositions — Nonrecognition, related-party and §1231/§1245 (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 2,
  stem: "In 2025 Hobart, an individual, had a net §1231 gain of $60,000 from the sale of business real property (no §1245 or §1250 recapture applies). In 2023 Hobart deducted a net §1231 loss of $25,000 as an ordinary loss, and in 2021 he deducted a net §1231 loss of $10,000; he had no other §1231 transactions in 2019-2024. How is the 2025 net §1231 gain characterized?",
  reference: "IRC §1231(c) lookback rule: net §1231 gain is treated as ordinary income to the extent of nonrecaptured net §1231 losses from the 5 preceding tax years. Losses are recaptured in the order they arose.",
  options: [
    { key: "A", text: "$25,000 ordinary income and $35,000 long-term capital gain" },
    { key: "B", text: "$60,000 long-term capital gain" },
    { key: "C", text: "$35,000 ordinary income and $25,000 long-term capital gain" },
    { key: "D", text: "$60,000 ordinary income" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. This recaptures only the 2023 loss. The 2021 loss also falls within the 5-year lookback period (2020-2024) and has not been recaptured, so it too converts §1231 gain to ordinary income.",
    B: "Incorrect. Treating the entire gain as long-term capital gain ignores the §1231(c) lookback. Because prior net §1231 losses were deducted as ordinary losses, an equal amount of subsequent gain must be treated as ordinary income to prevent taxpayers from whipsawing character.",
    C: "Correct. Nonrecaptured net §1231 losses in the 5 preceding years (2020-2024) = $10,000 (2021) + $25,000 (2023) = $35,000. Of the $60,000 2025 net §1231 gain, $35,000 is recharacterized as ordinary income and the remaining $25,000 is long-term capital gain.",
    D: "Incorrect. Only the amount of nonrecaptured prior losses ($35,000) is converted to ordinary income; the balance retains its capital character. Full ordinary treatment would apply only if prior unrecaptured losses equaled or exceeded $60,000."
  },
  tags: ["§1231(c)","lookback rule","nonrecaptured losses","beyond-2026-REG-blueprint"]
},
{
  id: "REG-044", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Cost recovery — Depreciation (MACRS, bonus, §179) and amortization", skill: "Application", difficulty: 2,
  stem: "In Year 1, Ember LLC purchased and placed in service $4,300,000 of new 7-year equipment, its only acquisition for the year. Ember's taxable income from the active conduct of the business before any §179 deduction is $3,000,000. The §179 dollar limit is $2,500,000, and the phase-out begins when purchases exceed $4,000,000. What is Ember's maximum §179 deduction for Year 1?",
  reference: "",
  options: [
    { key: "A", text: "$300,000" },
    { key: "B", text: "$2,200,000" },
    { key: "C", text: "$2,500,000" },
    { key: "D", text: "$3,000,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $300,000 is the amount by which purchases exceed the phase-out threshold ($4,300,000 - $4,000,000). That figure reduces the dollar limit under §179(b)(2); it is not the deduction itself. The deduction is $2,500,000 - $300,000 = $2,200,000.",
    B: "Correct. Under §179(b)(2), the dollar limit is reduced dollar-for-dollar by the cost of §179 property placed in service in excess of the threshold: $2,500,000 - ($4,300,000 - $4,000,000) = $2,200,000. The §179(b)(3) taxable income limit of $3,000,000 is higher, so it does not further restrict the deduction.",
    C: "Incorrect. $2,500,000 ignores the phase-out. Because Ember placed $4,300,000 of §179 property in service, $300,000 more than the threshold, the dollar limit must be reduced by $300,000 under §179(b)(2).",
    D: "Incorrect. $3,000,000 treats active business taxable income as the deduction. Under §179(b)(3), taxable income is only a ceiling; the deduction is the lesser of the reduced dollar limit ($2,200,000) and taxable income ($3,000,000)."
  },
  tags: ["§179","OBBBA","phase-out","bonus depreciation"]
},
{
  id: "REG-045", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Cost recovery — Depreciation (MACRS, bonus, §179) and amortization", skill: "Application", difficulty: 2,
  stem: "On April 10, Year 1, Vale Corp., a calendar-year corporation, purchased the assets of a competitor's business. Of the purchase price, $360,000 was allocated to goodwill and $90,000 to a covenant not to compete with a three-year term. What amount of amortization may Vale deduct for Year 1?",
  reference: "",
  options: [
    { key: "A", text: "$18,000" },
    { key: "B", text: "$22,500" },
    { key: "C", text: "$30,000" },
    { key: "D", text: "$40,500" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $18,000 amortizes only the goodwill ($360,000 / 180 x 9 months) and omits the covenant. A covenant not to compete entered into in connection with the acquisition of a business is a §197 intangible and is amortized on the same 15-year schedule.",
    B: "Correct. Goodwill and a covenant not to compete acquired with a business are both §197 intangibles amortized straight-line over 180 months beginning with the month of acquisition. ($360,000 + $90,000) / 180 = $2,500 per month. April through December is 9 months, so Year 1 amortization is $2,500 x 9 = $22,500.",
    C: "Incorrect. $30,000 is a full year of amortization ($450,000 / 15). §197 amortization begins in the month the intangible is acquired, so only the 9 months from April through December are allowed in Year 1.",
    D: "Incorrect. $40,500 amortizes the covenant over its three-year contractual term ($90,000 / 36 x 9 = $22,500) plus 9 months of goodwill ($18,000). Under §197(d)(1)(E), a covenant acquired with a business is amortized over 15 years regardless of its stated term."
  },
  tags: ["§197","amortization","MACRS","covenant not to compete"]
},
{
  id: "REG-046", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 2,
  stem: "A cash-basis taxpayer had the following items in Year 1: a $5,000 bonus check that the employer made available at its office on December 29, Year 1, but that the taxpayer did not pick up until January 3, Year 2; $3,000 of unemployment compensation; a $2,000 radio contest prize paid in gift cards; and a $4,000 cash gift from a relative. What amount is included in Year 1 gross income?",
  reference: "",
  options: [
    { key: "A", text: "$5,000" },
    { key: "B", text: "$8,000" },
    { key: "C", text: "$10,000" },
    { key: "D", text: "$14,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $5,000 = $3,000 + $2,000 includes only the unemployment compensation and the prize, omitting the bonus. Under the constructive receipt doctrine (Reg. §1.451-2), the bonus was income in Year 1 because it was made available without restriction on December 29; choosing not to pick it up does not defer it.",
    B: "Incorrect. $8,000 = $5,000 + $3,000 omits the $2,000 prize. Prizes and awards are gross income under §74 at fair market value, and payment in gift cards rather than cash does not change that result.",
    C: "Correct. Bonus $5,000 (constructively received in Year 1 under Reg. §1.451-2) + unemployment compensation $3,000 (§85) + prize $2,000 (§74) = $10,000. The $4,000 gift is excluded from gross income under §102(a).",
    D: "Incorrect. $14,000 adds the $4,000 gift to the correct total. Property received by gift is excluded from the recipient's gross income under §102(a); only income later earned on gifted property is taxable."
  },
  tags: ["§61","constructive receipt","alimony","§74 prizes","§85"]
},
{
  id: "REG-047", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 1,
  stem: "A taxpayer who is a degree candidate received the following during the current year:\n\n| Description | Amount |\n|---|---|\n| Life insurance proceeds on a parent's death | $50,000 |\n| Scholarship used for tuition and required fees | $9,000 |\n| Scholarship used for room and board | $3,000 |\n| Interest on state general obligation bonds | $1,500 |\n| Interest on U.S. Treasury notes | $2,200 |\n| Cash gift from a relative | $10,000 |\n\nWhat amount is included in the taxpayer's gross income?",
  reference: "",
  options: [
    { key: "A", text: "$2,200" },
    { key: "B", text: "$3,700" },
    { key: "C", text: "$5,200" },
    { key: "D", text: "$6,700" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $2,200 counts only the Treasury interest and excludes the entire scholarship. §117(b) limits the exclusion to qualified tuition and related expenses; the $3,000 used for room and board is includible.",
    B: "Incorrect. $3,700 = $2,200 + $1,500 treats the state bond interest as taxable and the room and board as excluded, reversing the two rules. State and local bond interest is excluded under §103, while room and board is taxable under §117.",
    C: "Correct. Includible: the $3,000 room-and-board portion of the scholarship (§117 excludes only tuition, fees, books and required supplies) + $2,200 of Treasury interest (interest on federal obligations is taxable) = $5,200. Excluded: life insurance proceeds (§101(a)), state bond interest (§103) and the gift (§102).",
    D: "Incorrect. $6,700 adds the $1,500 of state bond interest to the correct $5,200. Interest on obligations of a state or its political subdivisions is excluded from gross income under §103(a)."
  },
  tags: ["§101","§117","§103","§102","exclusions"]
},
{
  id: "REG-048", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 2,
  stem: "An employer provided an employee with the following benefits during the current year: health insurance premiums of $9,000; group-term life insurance coverage of $150,000, for which the IRS uniform premium table cost is $1.80 per $1,000 of coverage per year; a $2,400 contribution to the employee's health savings account, within the annual limit; and a $300 holiday gift card. What amount is includible in the employee's gross income?",
  reference: "",
  options: [
    { key: "A", text: "$180" },
    { key: "B", text: "$480" },
    { key: "C", text: "$570" },
    { key: "D", text: "$2,880" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $180 is the correct group-term life inclusion (100 x $1.80) but omits the $300 gift card. Gift cards are cash equivalents and are never excludable as de minimis fringes under §132(e), so they are includible as wages.",
    B: "Correct. Under §79, the cost of group-term life coverage above $50,000 is includible: ($150,000 - $50,000) / $1,000 x $1.80 = $180. The $300 gift card is a cash equivalent and taxable. Total = $480. The health premiums and the HSA contribution are excluded under §106.",
    C: "Incorrect. $570 = 150 x $1.80 + $300 computes the imputed cost on the entire $150,000 of coverage. §79(a) excludes the cost of the first $50,000 of group-term life coverage; only the excess is taxed.",
    D: "Incorrect. $2,880 = $480 + $2,400 includes the employer's HSA contribution. Employer contributions to an employee's HSA within the annual limit are excluded from gross income under §106(d)."
  },
  tags: ["§79","§106","§132","fringe benefits","HSA"]
},
{
  id: "REG-049", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 2,
  stem: "A married couple filing jointly received $20,000 of Social Security benefits in the current year. Their other income was $22,000 of taxable pension income and $4,000 of tax-exempt municipal bond interest. The base amount for a joint return is $32,000 and the adjusted base amount is $44,000. What amount of the benefits is included in gross income?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$2,000" },
    { key: "C", text: "$10,000" },
    { key: "D", text: "$17,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $0 results from omitting the tax-exempt interest, which gives provisional income of exactly $32,000, not above the base amount. §86(b)(2)(B) requires tax-exempt interest to be added back in computing provisional income, so the couple is $4,000 above the base amount.",
    B: "Correct. Provisional income = $22,000 + $4,000 tax-exempt interest + 50% x $20,000 = $36,000, which is between the $32,000 base amount and the $44,000 adjusted base amount. Under §86(a)(1) the inclusion is the lesser of 50% of benefits ($10,000) or 50% of the excess over the base amount (50% x $4,000 = $2,000), so $2,000 is included.",
    C: "Incorrect. $10,000 is 50% of the benefits, the first-tier ceiling. Under §86(a)(1) the includible amount is the lesser of that ceiling and 50% of provisional income over the base amount, and the latter ($2,000) is smaller.",
    D: "Incorrect. $17,000 is 85% of the benefits, the maximum inclusion under §86(a)(2). The 85% tier applies only when provisional income exceeds the $44,000 adjusted base amount; here it is $36,000."
  },
  tags: ["§86","Social Security benefits","provisional income"]
},
{
  id: "REG-050", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  stem: "A self-employed consultant, age 40, reports the following for the current year:\n\n| Description | Amount |\n|---|---|\n| Net profit from self-employment | $80,000 |\n| Qualified student loan interest paid | $4,000 |\n| Health savings account contribution (within the annual limit) | $4,000 |\n| Self-employed health insurance premiums | $9,000 |\n| Self-employment tax paid | $11,000 |\n\nThe annual limit on the student loan interest deduction is $2,500. What is the total of the taxpayer's deductions in arriving at AGI?",
  reference: "",
  options: [
    { key: "A", text: "$18,500" },
    { key: "B", text: "$21,000" },
    { key: "C", text: "$22,500" },
    { key: "D", text: "$26,500" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $18,500 = $4,000 + $9,000 + $5,500 omits the student loan interest, treating it as an itemized deduction or as nondeductible. §221 allows up to $2,500 of qualified student loan interest as a deduction for AGI.",
    B: "Correct. Student loan interest limited to $2,500 (§221) + HSA contribution $4,000 (§223) + self-employed health insurance $9,000 (§162(l)) + one-half of self-employment tax, $11,000 / 2 = $5,500 (§164(f)) = $21,000. Each is an above-the-line deduction listed in §62(a).",
    C: "Incorrect. $22,500 deducts the full $4,000 of student loan interest paid. §221(b)(1) caps the deduction at $2,500 per year regardless of the amount paid.",
    D: "Incorrect. $26,500 = $2,500 + $4,000 + $9,000 + $11,000 deducts the full self-employment tax. Under §164(f) only one-half of the self-employment tax is deductible for AGI."
  },
  tags: ["§221","§223","§162(l)","§164(f)","adjustments to AGI"]
},
{
  id: "REG-051", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  stem: "A single taxpayer, age 45, an active participant in an employer's 401(k) plan, has Year 1 MAGI of $84,000. On March 1, Year 2, before filing the Year 1 return, the taxpayer contributed $7,000 (the annual limit) to a traditional IRA for Year 1. The deduction for a single active participant phases out ratably over MAGI of $79,000 to $89,000. What amount may the taxpayer deduct for Year 1?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$2,000" },
    { key: "C", text: "$3,500" },
    { key: "D", text: "$7,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $0 assumes either that a contribution made after December 31 cannot count for Year 1 or that active participants get no deduction. Under §219(f)(3) a contribution made by the unextended due date of the return is treated as made for the prior year, and an active participant loses the deduction only when MAGI reaches the top of the phase-out range.",
    B: "Incorrect. $2,000 = $7,000 - $5,000 subtracts the excess MAGI dollar for dollar. The §219(g) reduction is proportional: the limit is reduced by the fraction of the $10,000 range that the excess represents, not by the excess itself.",
    C: "Correct. The taxpayer is an active participant with MAGI in the phase-out range. Excess MAGI = $84,000 - $79,000 = $5,000, which is 50% of the $10,000 range, so the deductible amount is $7,000 x (1 - 50%) = $3,500 (§219(g)). The March 1, Year 2 contribution is timely for Year 1 under §219(f)(3). The nondeductible $3,500 remains a valid contribution reported on Form 8606.",
    D: "Incorrect. $7,000 ignores the §219(g) phase-out. A full deduction is available to an active participant only when MAGI is at or below the bottom of the phase-out range ($79,000); at $84,000 half of the deduction is lost."
  },
  tags: ["§219","IRA deduction","active participant","phase-out"]
},
{
  id: "REG-052", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  stem: "A married couple files a joint return. One spouse is age 68 and the other is age 63. Their MAGI for the year is $160,000. The additional deduction for seniors is $6,000 for each individual who has attained age 65, reduced by 6% of MAGI over $150,000 on a joint return. What is the couple's senior deduction?",
  reference: "",
  options: [
    { key: "A", text: "$5,400" },
    { key: "B", text: "$6,000" },
    { key: "C", text: "$10,800" },
    { key: "D", text: "$12,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Only the 68-year-old spouse has attained age 65, so the tentative deduction is $6,000. Reduction = 6% x ($160,000 - $150,000) = $600. Senior deduction = $6,000 - $600 = $5,400 (§151(d)(5)), available whether or not the couple itemizes.",
    B: "Incorrect. $6,000 omits the phase-out. The §151(d)(5) senior deduction is reduced by 6% of MAGI in excess of $150,000 on a joint return, which costs the couple $600.",
    C: "Incorrect. $10,800 = $12,000 - $1,200 claims the deduction for both spouses and phases the doubled amount out. The §151(d)(5) deduction is per individual who has attained age 65; the 63-year-old spouse does not qualify.",
    D: "Incorrect. $12,000 claims $6,000 for each spouse with no phase-out. The 63-year-old spouse is not eligible under §151(d)(5), and the amount for the eligible spouse must be reduced for MAGI over $150,000."
  },
  tags: ["standard deduction","senior deduction","OBBBA","§63"]
},
{
  id: "REG-053", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  stem: "A married couple filing jointly has MAGI of $560,000. During the year they paid $32,000 of state income tax, $14,000 of real property tax on their residence, and $2,000 of personal property tax on their cars. The itemized deduction for state and local taxes is limited to $40,000, reduced by 30% of MAGI over $500,000 but not below $10,000. What amount may the couple deduct for taxes?",
  reference: "",
  options: [
    { key: "A", text: "$10,000" },
    { key: "B", text: "$22,000" },
    { key: "C", text: "$40,000" },
    { key: "D", text: "$48,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $10,000 is the floor to which the §164(b)(6) limitation can be reduced, not the limitation itself. With MAGI of $560,000 the phase-down reduces the $40,000 limit by $18,000 to $22,000, which is still above the floor.",
    B: "Correct. Total state and local taxes = $32,000 + $14,000 + $2,000 = $48,000. Limitation = $40,000 - 30% x ($560,000 - $500,000) = $40,000 - $18,000 = $22,000, which exceeds the $10,000 floor. Deduction = lesser of $48,000 or $22,000 = $22,000 (§164(b)(6)).",
    C: "Incorrect. $40,000 applies the full §164(b)(6) limitation without the phase-down. The limit is reduced by 30% of the excess of MAGI over $500,000 on a joint return, and the couple's MAGI exceeds that threshold by $60,000.",
    D: "Incorrect. $48,000 is the total of taxes paid with no limitation. §164(b)(6) caps the aggregate itemized deduction for state and local income and property taxes."
  },
  tags: ["§164(b)(6)","SALT cap","OBBBA","itemized deductions"]
},
{
  id: "REG-054", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  stem: "A taxpayer with AGI of $100,000 paid the following during the current year:\n\n| Description | Amount |\n|---|---|\n| Doctor and hospital bills | $6,500 |\n| Health insurance premiums (after-tax) | $4,000 |\n| Nonprescription vitamins | $300 |\n| Elective cosmetic surgery | $5,000 |\n\nThe taxpayer received a $1,200 insurance reimbursement for the hospital bills during the year. What amount may the taxpayer deduct for medical expenses?",
  reference: "",
  options: [
    { key: "A", text: "$1,800" },
    { key: "B", text: "$2,100" },
    { key: "C", text: "$3,000" },
    { key: "D", text: "$6,800" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Qualifying medical expenses = $6,500 + $4,000 - $1,200 reimbursement = $9,300. Under §213(a) only the excess over 7.5% of AGI ($7,500) is deductible: $9,300 - $7,500 = $1,800. Nonprescribed vitamins and elective cosmetic surgery are not medical care (§213(d)(9), Reg. §1.213-1).",
    B: "Incorrect. $2,100 = $9,600 - $7,500 includes the $300 of vitamins. Vitamins and similar items taken for general health, not prescribed by a physician for a specific condition, are not medical care under §213(d).",
    C: "Incorrect. $3,000 = $10,500 - $7,500 ignores the $1,200 insurance reimbursement. §213(a) allows only expenses not compensated for by insurance or otherwise.",
    D: "Incorrect. $6,800 = $14,300 - $7,500 includes the $5,000 of cosmetic surgery. §213(d)(9) excludes cosmetic surgery from medical care unless it corrects a deformity from a congenital abnormality, injury or disfiguring disease."
  },
  tags: ["§213","§170","medical expenses","charitable contributions","30% limit"]
},
{
  id: "REG-055", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  stem: "A single taxpayer paid the following interest during the current year:\n\n| Description | Amount |\n|---|---|\n| Interest on a $600,000 mortgage used to buy the principal residence | $30,000 |\n| Interest on a home equity loan used to buy a boat | $4,000 |\n| Interest on a margin loan used to buy taxable securities | $7,000 |\n| Credit card interest | $2,000 |\n\nThe taxpayer's net investment income for the year is $5,000. What amount may the taxpayer deduct as itemized interest expense?",
  reference: "",
  options: [
    { key: "A", text: "$35,000" },
    { key: "B", text: "$37,000" },
    { key: "C", text: "$39,000" },
    { key: "D", text: "$43,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The $30,000 of acquisition-debt interest is qualified residence interest (§163(h)(3); the $600,000 loan is within the $750,000 limit). Investment interest is deductible only to the extent of net investment income, $5,000 (§163(d)); the $2,000 excess carries forward. Home equity interest on a loan used to buy a boat and credit card interest are nondeductible personal interest (§163(h)(1)). Total = $30,000 + $5,000 = $35,000.",
    B: "Incorrect. $37,000 = $30,000 + $7,000 deducts the full investment interest. §163(d)(1) limits the investment interest deduction to net investment income of $5,000; the $2,000 excess is carried forward, not deducted.",
    C: "Incorrect. $39,000 = $30,000 + $4,000 + $5,000 deducts the home equity interest. Home equity indebtedness interest is deductible only if the proceeds are used to buy, build or substantially improve the residence (§163(h)(3)(F)); a boat purchase does not qualify.",
    D: "Incorrect. $43,000 deducts every item, including the boat loan interest, the full investment interest and the credit card interest. Personal interest is disallowed under §163(h)(1), and investment interest is capped at net investment income."
  },
  tags: ["§163(h)","§163(d)","qualified residence interest","investment interest"]
},
{
  id: "REG-056", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  stem: "A single taxpayer who works as a restaurant server reported $31,000 of qualified tips on Form W-2 and has MAGI of $170,000. The taxpayer claims the standard deduction. The deduction for qualified tips is limited to $25,000 and is reduced by $100 for each $1,000 of MAGI over $150,000. What amount may the taxpayer deduct for qualified tips?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$23,000" },
    { key: "C", text: "$25,000" },
    { key: "D", text: "$29,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $0 assumes the deduction is unavailable to a taxpayer who does not itemize. The §224 deduction for qualified tips is allowed whether or not the taxpayer itemizes; it is reduced, not eliminated, at MAGI of $170,000.",
    B: "Correct. Qualified tips are limited to $25,000 (§224). MAGI exceeds $150,000 by $20,000, which is 20 increments of $1,000, so the reduction is 20 x $100 = $2,000. Deduction = $25,000 - $2,000 = $23,000, available to non-itemizers.",
    C: "Incorrect. $25,000 applies the §224 cap but ignores the MAGI phase-out. The taxpayer's MAGI of $170,000 exceeds the $150,000 threshold, reducing the deduction by $100 per $1,000 of excess.",
    D: "Incorrect. $29,000 = $31,000 - $2,000 applies the phase-out to the tips reported instead of to the $25,000 cap. The §224 deduction can never exceed $25,000 before the reduction."
  },
  tags: ["OBBBA","qualified tips","§224","phase-out"]
},
{
  id: "REG-057", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Filing status and dependents", skill: "Application", difficulty: 1,
  stem: "A taxpayer's spouse died in Year 1. The taxpayer has not remarried and, for all of Year 3, maintained a home that was the principal residence of the taxpayer's dependent 10-year-old child, paying all costs of the household. What is the taxpayer's filing status for Year 3?",
  reference: "",
  options: [
    { key: "A", text: "Head of household" },
    { key: "B", text: "Married filing jointly" },
    { key: "C", text: "Qualifying surviving spouse" },
    { key: "D", text: "Single" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. The taxpayer would meet the head of household tests, but qualifying surviving spouse status takes precedence in the two years following the year of death (§2(a)) because it gives the joint-return rates and standard deduction. Head of household would apply beginning in Year 4.",
    B: "Incorrect. A joint return with the deceased spouse may be filed only for the year of death, Year 1 (§6013(a)(3)). In later years the taxpayer is unmarried and cannot file jointly.",
    C: "Correct. Under §2(a), a taxpayer whose spouse died in either of the two preceding tax years, who has not remarried and who maintains a home that is the principal residence of a dependent child, is a qualifying surviving spouse. Year 3 is the second year after Year 1, so the status applies and joint-return rates are used.",
    D: "Incorrect. Single is available only if no more favorable status applies. The taxpayer maintains a home for a dependent child and is within two years of the spouse's death, so qualifying surviving spouse status under §2(a) governs."
  },
  tags: ["filing status","qualifying surviving spouse","head of household","§2(a)"]
},
{
  id: "REG-058", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Filing status and dependents", skill: "Application", difficulty: 2,
  stem: "A single taxpayer provided more than half of the support of each of the following individuals, all U.S. citizens, during the current year. Which one may the taxpayer claim as a dependent?",
  reference: "",
  options: [
    { key: "A", text: "The taxpayer's 22-year-old daughter, a full-time student who lived with the taxpayer all year and earned $9,000" },
    { key: "B", text: "The taxpayer's father, who lives in his own apartment and has gross income exceeding the exemption amount" },
    { key: "C", text: "The taxpayer's cousin, age 30, who had no income and lived with the taxpayer for eight months" },
    { key: "D", text: "A friend's child, age 12, who had no income and lived with the taxpayer for seven months" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The daughter is a qualifying child under §152(c): she satisfies the relationship test, lived with the taxpayer more than half the year, is under age 24 and a full-time student, and did not provide more than half of her own support. A qualifying child's gross income is irrelevant, so her $9,000 of earnings does not disqualify her.",
    B: "Incorrect. A parent need not live with the taxpayer, but a qualifying relative must have gross income less than the exemption amount (§152(d)(1)(B)). Because the father's gross income exceeds that amount, he fails the gross income test.",
    C: "Incorrect. A cousin is not a listed relative under §152(d)(2), so the cousin qualifies only as a member of the taxpayer's household for the entire year (§152(d)(2)(H)). Eight months of residence fails that test.",
    D: "Incorrect. The child is not related to the taxpayer and did not live in the taxpayer's household for the entire year, so neither the qualifying child relationship test (§152(c)(2)) nor the qualifying relative household-member test (§152(d)(2)(H)) is met."
  },
  tags: ["§152","qualifying child","qualifying relative","gross income test","support test"]
},
{
  id: "REG-059", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Loss limitations — Capital, basis, passive, at-risk, hobby and wash sale", skill: "Application", difficulty: 2,
  stem: "A single taxpayer actively participates in a rental real estate activity that produced a $30,000 loss in the current year. The taxpayer, who is not a real estate professional and has no other passive activities, has wages of $130,000 and dividends of $6,000. What amount of the rental loss may the taxpayer deduct against nonpassive income?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$7,000" },
    { key: "C", text: "$10,000" },
    { key: "D", text: "$25,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $0 assumes the allowance is fully phased out. Under §469(i)(3) the $25,000 allowance is eliminated only when MAGI reaches $150,000; at $136,000 a partial allowance of $7,000 remains.",
    B: "Correct. MAGI = $130,000 + $6,000 = $136,000. Reduction = 50% x ($136,000 - $100,000) = $18,000. Allowance = $25,000 - $18,000 = $7,000 (§469(i)). The remaining $23,000 of loss is suspended and carried forward under §469(b).",
    C: "Incorrect. $10,000 = $25,000 - 50% x $30,000 uses only wages in the phase-out. Modified AGI for §469(i) includes the $6,000 of dividends, so the excess over $100,000 is $36,000, not $30,000.",
    D: "Incorrect. $25,000 is the full §469(i) allowance, available only when MAGI does not exceed $100,000. With MAGI of $136,000 the allowance must be reduced by 50% of the excess."
  },
  tags: ["§469(i)","passive activity loss","rental real estate","active participation"]
},
{
  id: "REG-060", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Loss limitations — Capital, basis, passive, at-risk, hobby and wash sale", skill: "Application", difficulty: 2,
  stem: "A single taxpayer materially participates in a sole proprietorship that generated a $700,000 loss in the current year. The taxpayer has $250,000 at risk in the business, has no passive activities, and has $900,000 of wages. The excess business loss threshold for the year is $313,000. What amount of the loss may the taxpayer deduct in the current year?",
  reference: "",
  options: [
    { key: "A", text: "$250,000" },
    { key: "B", text: "$313,000" },
    { key: "C", text: "$450,000" },
    { key: "D", text: "$700,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The at-risk rules of §465 are applied before the excess business loss limitation, so the deductible loss is limited to the $250,000 at risk; the $450,000 excess is suspended within the activity until the at-risk amount increases. §461(l) then tests only the $250,000 allowed, which is below the $313,000 threshold, so no excess business loss arises.",
    B: "Incorrect. $313,000 applies §461(l) first and treats the threshold as the deductible amount. The at-risk limitation of §465 applies before §461(l), and it caps the loss at $250,000, which is under the threshold.",
    C: "Incorrect. $450,000 is the amount disallowed and suspended under §465(a)(2), not the amount deducted. The deductible loss is the $250,000 the taxpayer has at risk.",
    D: "Incorrect. $700,000 ignores both limitations. A taxpayer may not deduct a loss in excess of the amount at risk in the activity (§465), and any loss surviving that limit is further tested under §461(l)."
  },
  tags: ["§461(l)","§465","excess business loss","at-risk","ordering rules"]
},
{
  id: "REG-061", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Loss limitations — Capital, basis, passive, at-risk, hobby and wash sale", skill: "Application", difficulty: 2,
  stem: "In Year 1 a single taxpayer had a $4,000 short-term capital gain, an $11,000 short-term capital loss, a $6,000 long-term capital gain and a $9,000 long-term capital loss, with no capital loss carryovers. What is the amount and character of the taxpayer's capital loss carryover to Year 2?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$4,000 short-term and $3,000 long-term" },
    { key: "C", text: "$7,000 long-term" },
    { key: "D", text: "$7,000 short-term" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $0 assumes the entire $10,000 net capital loss is deductible in Year 1. §1211(b) limits an individual's deduction of net capital loss against ordinary income to $3,000 per year; the remaining $7,000 carries forward under §1212(b).",
    B: "Correct. Net short-term loss = $4,000 - $11,000 = ($7,000); net long-term loss = $6,000 - $9,000 = ($3,000); total net capital loss $10,000, of which $3,000 is deductible in Year 1 (§1211(b)). The $3,000 deduction is treated as coming first from the short-term loss (§1212(b)(2)), leaving a carryover of $4,000 short-term and $3,000 long-term, each retaining its character.",
    C: "Incorrect. $7,000 long-term charges the $3,000 deduction against the short-term loss but mislabels the remaining loss. Under §1212(b) the unused short-term loss stays short-term; the long-term carryover is only the untouched $3,000.",
    D: "Incorrect. $7,000 short-term is the net short-term loss before the $3,000 deduction and ignores the long-term loss entirely. After the §1211(b) deduction, $4,000 short-term remains, plus the $3,000 net long-term loss."
  },
  tags: ["§1211","§1212","capital loss","carryover"]
},
{
  id: "REG-062", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 2,
  stem: "Emma, age 15, is claimed as a dependent by her parents. In 2025 she had $6,000 of interest and dividend income and $1,000 of wages from a summer job. Her parents' marginal rate is 35%. What amount of Emma's 2025 taxable income is taxed at her parents' marginal rate?",
  reference: "Tax year 2025 kiddie tax (§1(g)): applies to a child under 18 (or under 24 if a student not providing more than half of own support with earned income) with net unearned income. Net unearned income = unearned income - $1,350 - the greater of $1,350 or itemized deductions directly connected with the unearned income. A dependent's standard deduction is the greater of $1,350 or earned income + $450, not to exceed $15,750.",
  options: [
    { key: "A", text: "$5,550" },
    { key: "B", text: "$4,650" },
    { key: "C", text: "$3,300" },
    { key: "D", text: "$4,300" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $5,550 is Emma's total taxable income ($7,000 - $1,450 standard deduction). Only net unearned income above the $2,700 threshold is taxed at the parents' rate; the rest is taxed at Emma's own rate.",
    B: "Incorrect. $4,650 = $6,000 - $1,350, subtracting only one $1,350 amount. Net unearned income is computed by subtracting $1,350 twice (the first $1,350 is sheltered by the standard deduction and the next $1,350 is taxed at the child's rate).",
    C: "Correct. Net unearned income = $6,000 - $1,350 - $1,350 = $3,300, taxed at the parents' 35% rate. Emma's total taxable income is $7,000 - $1,450 (greater of $1,350 or $1,000 + $450) = $5,550; the remaining $2,250 is taxed at Emma's own rate. Earned income is never subject to the kiddie tax.",
    D: "Incorrect. $4,300 = $7,000 - $2,700 applies the $2,700 threshold to all income including wages. Wages are earned income and are excluded from the kiddie tax computation."
  },
  tags: ["§1(g)","kiddie tax","net unearned income","beyond-2026-REG-blueprint"]
},
{
  id: "REG-063", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Remembering & Understanding", difficulty: 2,
  stem: "Which of the following items is an adjustment or preference that increases an individual's alternative minimum taxable income (AMTI) relative to regular taxable income for 2025?",
  reference: "Tax year 2025. AMT exemption: $88,100 single, $137,000 MFJ; 26% rate up to $239,100 of AMTI over the exemption and 28% above.",
  options: [
    { key: "A", text: "Interest on general obligation municipal bonds issued by a state" },
    { key: "B", text: "Charitable contributions of cash to a public charity" },
    { key: "C", text: "Qualified residence interest on acquisition indebtedness" },
    { key: "D", text: "State and local income taxes deducted as an itemized deduction" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. Interest on ordinary governmental-purpose municipal bonds is excluded for both regular tax and AMT. Only interest on private activity bonds (issued outside the 2009-2010 window) is a tax preference item under §57(a)(5).",
    B: "Incorrect. Charitable contributions are allowed in computing AMTI just as for regular tax. They are not an AMT adjustment.",
    C: "Incorrect. Interest on acquisition indebtedness for a principal or second residence remains deductible for AMT. Only home equity interest not used to buy, build or improve the home (which is already nondeductible for regular tax through 2025 and permanently under OBBBA) would be disallowed.",
    D: "Correct. Under §56(b)(1)(A)(ii), taxes deducted under §164 (state and local income, sales and property taxes) are not allowed in computing AMTI and are added back as an adjustment. With the OBBBA increase of the SALT cap to $40,000, this addback is again a significant AMT trigger for higher-income taxpayers in high-tax states."
  },
  tags: ["AMT","§56","§57","SALT addback","beyond-2026-REG-blueprint"]
},
{
  id: "REG-064", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 1,
  stem: "A married couple filing jointly has MAGI of $432,000 and three children, ages 4, 9 and 14, each of whom is a qualifying child with a Social Security number. The child tax credit is $2,200 per qualifying child, reduced by $50 for each $1,000, or fraction thereof, of MAGI over $400,000 on a joint return. What is the couple's child tax credit before any refundable portion?",
  reference: "",
  options: [
    { key: "A", text: "$4,400" },
    { key: "B", text: "$5,000" },
    { key: "C", text: "$5,100" },
    { key: "D", text: "$6,600" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $4,400 = 2 x $2,200 excludes the 14-year-old and ignores the phase-out. A qualifying child for the §24 credit must be under age 17 at the end of the year, so all three children qualify.",
    B: "Correct. Tentative credit = 3 x $2,200 = $6,600. Excess MAGI = $432,000 - $400,000 = $32,000, or 32 increments of $1,000; reduction = 32 x $50 = $1,600. Credit = $6,600 - $1,600 = $5,000 (§24(b)).",
    C: "Incorrect. $5,100 = $6,600 - $1,500 uses 30 increments instead of 32. Under §24(b) the reduction is $50 for each full or partial $1,000 of MAGI over the threshold, and $32,000 of excess is 32 increments.",
    D: "Incorrect. $6,600 = 3 x $2,200 is the credit before the phase-out. Because MAGI exceeds the $400,000 joint-return threshold, §24(b)(1) requires the credit to be reduced."
  },
  tags: ["§24","child tax credit","OBBBA","phase-out"]
},
{
  id: "REG-065", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 1,
  stem: "A taxpayer paid $3,600 of tuition and $500 of required course materials for a dependent's second year of full-time undergraduate study at an eligible institution, plus $6,000 for the dependent's dormitory room. The taxpayer's MAGI is below the phase-out range. What is the taxpayer's American opportunity tax credit?",
  reference: "",
  options: [
    { key: "A", text: "$820" },
    { key: "B", text: "$2,000" },
    { key: "C", text: "$2,500" },
    { key: "D", text: "$2,525" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $820 = 20% x $4,100 applies the lifetime learning credit rate. The American opportunity credit under §25A(i) is 100% of the first $2,000 of qualified expenses plus 25% of the next $2,000, and it is the credit available for an undergraduate in the first four years.",
    B: "Incorrect. $2,000 counts only the first tier of the credit (100% of the first $2,000). §25A(i)(1) adds 25% of the next $2,000 of qualified expenses, and the $500 of required course materials also qualifies.",
    C: "Correct. Qualified expenses = $3,600 tuition + $500 required course materials = $4,100; room and board is excluded (§25A(f)(1)). Credit = 100% x $2,000 + 25% x $2,000 = $2,500, the maximum per eligible student (§25A(i)). Expenses above $4,000 produce no additional credit.",
    D: "Incorrect. $2,525 = $2,000 + 25% x $2,100 applies the 25% tier to all expenses above $2,000. Under §25A(i)(1) the second tier is limited to the next $2,000 of expenses, capping the credit at $2,500."
  },
  tags: ["§25A","American Opportunity Tax Credit","refundable credit"]
},
{
  id: "REG-066", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 2,
  stem: "A married couple filing jointly paid $9,000 to a day care center for their two children, ages 3 and 6, so that both spouses could work. One spouse earned $60,000 and the other earned $2,500. At the couple's income level the applicable credit percentage is 20%. What is the couple's child and dependent care credit?",
  reference: "",
  options: [
    { key: "A", text: "$500" },
    { key: "B", text: "$600" },
    { key: "C", text: "$1,200" },
    { key: "D", text: "$1,800" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under §21(c) and (d), qualifying expenses are the least of the amount paid ($9,000), the $6,000 limit for two or more qualifying individuals, or the earned income of the lower-earning spouse ($2,500): $2,500. Credit = 20% x $2,500 = $500.",
    B: "Incorrect. $600 = 20% x $3,000 applies the dollar limit for one qualifying individual. With two children the §21(c) limit is $6,000, but the §21(d) earned income limitation of $2,500 is lower and controls.",
    C: "Incorrect. $1,200 = 20% x $6,000 applies the two-child dollar limit but ignores the earned income limitation. §21(d)(1) limits qualifying expenses to the earned income of the lower-earning spouse.",
    D: "Incorrect. $1,800 = 20% x $9,000 uses the full amount paid, ignoring both the $6,000 dollar limit of §21(c) and the $2,500 earned income limit of §21(d)."
  },
  tags: ["§21","dependent care credit","earned income limitation"]
},
{
  id: "REG-067", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 2,
  stem: "A taxpayer earned $150,000 of wages subject to FICA and had $60,000 of net profit from a sole proprietorship in the current year. The Social Security wage base for the year is $176,100. What is the taxpayer's self-employment tax, rounded to the nearest dollar?",
  reference: "",
  options: [
    { key: "A", text: "$1,607" },
    { key: "B", text: "$4,843" },
    { key: "C", text: "$8,478" },
    { key: "D", text: "$9,180" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $1,607 is only the Medicare portion (2.9% x $55,410). Because the taxpayer's wages have not exhausted the $176,100 wage base (§1402(b)), the 12.4% Social Security portion also applies to the first $26,100 of net self-employment earnings.",
    B: "Correct. Net earnings from self-employment = $60,000 x 92.35% = $55,410 (§1402(a)(12)). Social Security portion: 12.4% x ($176,100 - $150,000 wages) = 12.4% x $26,100 = $3,236. Medicare portion: 2.9% x $55,410 = $1,607. Self-employment tax = $3,236 + $1,607 = $4,843 (§1401).",
    C: "Incorrect. $8,478 = $55,410 x 15.3% applies the full rate to all net self-employment earnings, ignoring that the wages already used $150,000 of the Social Security wage base (§1402(b)).",
    D: "Incorrect. $9,180 = $60,000 x 15.3% both ignores the wage base coordination and omits the 92.35% reduction of net profit required by §1402(a)(12)."
  },
  tags: ["§1401","self-employment tax","wage base"]
},
{
  id: "REG-068", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 2,
  stem: "A single taxpayer's prior-year AGI was $180,000 and prior-year tax was $40,000. The taxpayer expects current-year tax of $70,000 and current-year withholding of $30,000. What is the minimum total of timely estimated tax payments the taxpayer must make for the current year to avoid an underpayment penalty?",
  reference: "",
  options: [
    { key: "A", text: "$10,000" },
    { key: "B", text: "$14,000" },
    { key: "C", text: "$33,000" },
    { key: "D", text: "$40,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $10,000 = 100% x $40,000 - $30,000 uses the 100% prior-year safe harbor. Because prior-year AGI exceeded $150,000, §6654(d)(1)(C) raises the prior-year safe harbor to 110% of the prior-year tax.",
    B: "Correct. Required annual payment = lesser of 90% x $70,000 = $63,000 or 110% x $40,000 = $44,000 (§6654(d)(1)), so $44,000. Withholding of $30,000 counts toward it, leaving $14,000 of estimated payments. The balance of tax is still due with the return, but no underpayment penalty applies.",
    C: "Incorrect. $33,000 = 90% x $70,000 - $30,000 uses the current-year safe harbor. Under §6654(d)(1) the taxpayer may rely on whichever safe harbor is lower, and 110% of the prior-year tax ($44,000) is lower than 90% of the current-year tax ($63,000).",
    D: "Incorrect. $40,000 is 100% of the prior-year tax with no reduction for withholding. Withholding is treated as an estimated payment made evenly through the year (§6654(g)), and the applicable percentage is 110%, not 100%."
  },
  tags: ["§6654","estimated tax","safe harbor","110% rule"]
},
{
  id: "REG-069", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 1,
  stem: "A taxpayer, age 45, withdrew $20,000 from a traditional IRA funded entirely with deductible contributions. The taxpayer used $12,000 to pay a child's qualified higher education expenses and $8,000 for a vacation. What is the additional tax on the early distribution?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$800" },
    { key: "C", text: "$1,200" },
    { key: "D", text: "$2,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $0 treats the entire distribution as excepted. The §72(t)(2)(E) exception for qualified higher education expenses covers only the $12,000 so used; the $8,000 spent on a vacation is subject to the 10% additional tax.",
    B: "Correct. The entire $20,000 is taxable as ordinary income, but the 10% additional tax under §72(t) applies only to the portion not covered by an exception. Higher education expenses are an IRA exception (§72(t)(2)(E)), so the penalty is 10% x $8,000 = $800.",
    C: "Incorrect. $1,200 = 10% x $12,000 applies the penalty to the education portion instead of the vacation portion. The §72(t)(2)(E) exception protects the amount used for qualified higher education expenses.",
    D: "Incorrect. $2,000 = 10% x $20,000 penalizes the whole distribution. Although the full amount is includible in income, the $12,000 used for qualified higher education expenses is excepted from the additional tax by §72(t)(2)(E)."
  },
  tags: ["§72(t)","early distribution penalty","traditional IRA","exceptions"]
},
{
  id: "REG-070", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  stem: "A taxpayer is a partner in a landscaping partnership, which is not a specified service business. The taxpayer's Schedule K-1 reports $120,000 of ordinary business income and $6,000 of guaranteed payments for services. Taxable income before the QBI deduction is $150,000, including $10,000 of net long-term capital gain, and is below the threshold at which the W-2 wage limitation applies. What is the taxpayer's qualified business income deduction?",
  reference: "",
  options: [
    { key: "A", text: "$24,000" },
    { key: "B", text: "$25,200" },
    { key: "C", text: "$28,000" },
    { key: "D", text: "$30,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. QBI = $120,000; guaranteed payments for services are excluded (§199A(c)(4)). 20% x $120,000 = $24,000. The overall limit is 20% x (taxable income $150,000 - net capital gain $10,000) = $28,000. Deduction = lesser of $24,000 or $28,000 = $24,000 (§199A(a)). Below the threshold, the W-2 wage limit does not apply.",
    B: "Incorrect. $25,200 = 20% x $126,000 includes the $6,000 guaranteed payment in QBI. §199A(c)(4)(B) specifically excludes guaranteed payments for services from qualified business income.",
    C: "Incorrect. $28,000 is the taxable income limitation, 20% x ($150,000 - $10,000). It is a ceiling; under §199A(a) the deduction is the lesser of that ceiling and 20% of QBI, and 20% of QBI ($24,000) is lower.",
    D: "Incorrect. $30,000 = 20% x $150,000 uses taxable income without subtracting net capital gain and ignores that the deduction cannot exceed 20% of QBI. §199A(a)(2) reduces taxable income by net capital gain for the limitation."
  },
  tags: ["§199A","QBI deduction","guaranteed payments","pass-through"]
},
{
  id: "REG-071", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gift and estate tax basics (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 2,
  stem: "In 2025 Ben, who is married to Cara, made the following transfers: $50,000 cash to his son; $40,000 paid directly to a university for his granddaughter's tuition; $25,000 cash to his daughter; and $100,000 to Cara. Ben and Cara elect gift-splitting. What is the total amount of Ben's taxable gifts for 2025 (before applying the unified credit)?",
  reference: "Tax year 2025. Annual exclusion: $19,000 per donee. Gift-splitting (§2513): a married couple may treat gifts by one spouse as made one-half by each, doubling the available annual exclusion to $38,000 per donee. Unlimited exclusion for tuition paid directly to an educational institution and medical expenses paid directly to a provider (§2503(e)). Unlimited marital deduction for gifts to a citizen spouse (§2523).",
  options: [
    { key: "A", text: "$12,000" },
    { key: "B", text: "$37,000" },
    { key: "C", text: "$6,000" },
    { key: "D", text: "$24,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $12,000 = ($50,000 - $38,000) + ($25,000 - $38,000, floored at zero) is the couple's combined taxable gift. With gift-splitting each spouse reports one-half, so Ben's share is $6,000.",
    B: "Incorrect. $37,000 = ($50,000 - $19,000) + ($25,000 - $19,000) ignores the gift-splitting election, which allows a $38,000 combined exclusion per donee. It also correctly excludes the tuition and spousal gifts.",
    C: "Correct. Tuition paid directly to the university is fully excluded under §2503(e); the gift to Cara qualifies for the unlimited marital deduction. Son: $50,000 - $38,000 (split exclusion) = $12,000 taxable, of which Ben reports one-half = $6,000. Daughter: $25,000 is fully covered by the $38,000 split exclusion. Ben's taxable gifts = $6,000 (Cara reports the other $6,000).",
    D: "Incorrect. $24,000 treats the $40,000 tuition payment as a gift subject to the annual exclusion ($40,000 - $38,000 = $2,000) and adds other errors. Direct tuition payments are excluded without limit and do not use any annual exclusion."
  },
  tags: ["§2503","annual exclusion","gift-splitting","§2513","gift tax","beyond-2026-REG-blueprint"]
},
{
  id: "REG-072", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gift and estate tax basics (2026 Blueprint: TCP scope)", skill: "Analysis", difficulty: 3,
  stem: "Doris died in 2025 owning the following: a residence worth $900,000 held as joint tenants with right of survivorship with her husband; a brokerage account worth $2,500,000 in her sole name; a life insurance policy on her own life with a $1,000,000 death benefit, which she owned and which was payable to her daughter; and an IRA worth $600,000 payable to her husband. Her will left the brokerage account to her daughter and everything else passing under the will to her husband. Funeral and administration expenses were $80,000. What is Doris's taxable estate?",
  reference: "Tax year 2025. Gross estate (§2031-§2044) includes property owned at death, life insurance on the decedent's life if the decedent held incidents of ownership (§2042), and one-half of property held jointly with a spouse (§2040(b)). Deductions include funeral and administration expenses, debts, and an unlimited marital deduction for property passing to a U.S. citizen spouse (§2056). Basic exclusion amount: $13,990,000 (unified credit equivalent).",
  options: [
    { key: "A", text: "$3,420,000" },
    { key: "B", text: "$3,870,000" },
    { key: "C", text: "$0, because the estate is below the $13,990,000 exclusion" },
    { key: "D", text: "$4,920,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Gross estate: one-half of joint residence $450,000 + brokerage $2,500,000 + life insurance $1,000,000 (Doris owned the policy) + IRA $600,000 = $4,550,000. Less expenses $80,000 and marital deduction for property passing to the husband ($450,000 residence interest + $600,000 IRA = $1,050,000). Taxable estate = $4,550,000 - $80,000 - $1,050,000 = $3,420,000. No estate tax will be due because the taxable estate is below the $13,990,000 basic exclusion, but the taxable estate itself is $3,420,000.",
    B: "Incorrect. $3,870,000 includes the full $900,000 value of the joint residence in the gross estate but still claims a marital deduction for only $450,000. Under §2040(b) only one-half of qualified spousal joint property is included, and the same half qualifies for the marital deduction.",
    C: "Incorrect. The basic exclusion amount does not reduce the taxable estate; it operates through the unified credit against the tentative tax. The taxable estate is computed before the credit.",
    D: "Incorrect. $4,920,000 = $4,550,000 gross estate + $450,000 (full joint property) - $80,000, omitting the marital deduction. Property passing outright to a surviving citizen spouse, including the IRA and the survivorship interest in the residence, is fully deductible under §2056."
  },
  tags: ["§2033","§2040","§2042","§2056","estate tax","marital deduction","beyond-2026-REG-blueprint"]
},
{
  id: "REG-073", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Formation, distributions, liquidations, penalty taxes and consolidated returns (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 2,
  stem: "Ana and Bo form Coral Corp. Ana transfers land (adjusted basis $60,000, FMV $200,000) in exchange for 60% of the stock (FMV $180,000) plus $20,000 cash. Bo transfers equipment (adjusted basis $150,000, FMV $120,000) for 40% of the stock (FMV $120,000). What are Ana's recognized gain, Ana's basis in her Coral stock, and Coral's basis in the land?",
  reference: "IRC §351: no gain or loss is recognized when property is transferred to a corporation solely in exchange for stock if the transferors, as a group, control (own at least 80% of) the corporation immediately after the exchange. Gain (but not loss) is recognized to the extent of boot received (§351(b)). Shareholder's stock basis (§358) = basis of property transferred + gain recognized - boot received. Corporation's basis in property (§362) = transferor's basis + gain recognized by the transferor.",
  options: [
    { key: "A", text: "Gain $20,000; stock basis $60,000; land basis $80,000" },
    { key: "B", text: "Gain $140,000; stock basis $180,000; land basis $200,000" },
    { key: "C", text: "Gain $0; stock basis $40,000; land basis $60,000" },
    { key: "D", text: "Gain $20,000; stock basis $80,000; land basis $80,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Ana and Bo together own 100% after the exchange, so §351 applies. Ana's realized gain = ($180,000 + $20,000) - $60,000 = $140,000; recognized gain is limited to the $20,000 boot. Stock basis = $60,000 + $20,000 gain - $20,000 boot = $60,000. Coral's basis in the land = $60,000 + $20,000 gain recognized by Ana = $80,000. Bo recognizes no loss; his realized $30,000 loss is deferred (stock basis $150,000, and Coral takes a $150,000 basis in the equipment unless it elects under §362(e)(2) to limit the basis to FMV).",
    B: "Incorrect. This treats the exchange as fully taxable. Because the transferors control at least 80% of Coral immediately after the exchange, §351 defers the gain except to the extent of boot.",
    C: "Incorrect. Boot received in a §351 exchange triggers gain recognition to the extent of the boot ($20,000). The stock basis of $40,000 subtracts the boot without adding the recognized gain.",
    D: "Incorrect. The gain and land basis are right, but the stock basis is computed as $60,000 + $20,000 without subtracting the $20,000 of boot received. Under §358, boot reduces the substituted basis."
  },
  tags: ["§351","§358","§362","boot","corporate formation","beyond-2026-REG-blueprint"]
},
{
  id: "REG-074", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Formation, distributions, liquidations, penalty taxes and consolidated returns (2026 Blueprint: TCP scope)", skill: "Analysis", difficulty: 3,
  stem: "Three individuals form Delta Corp. Eli transfers a building (basis $100,000, FMV $400,000) subject to a $150,000 mortgage that Delta assumes, for 400 shares. Fern transfers $200,000 cash for 200 shares. Gil performs legal services worth $50,000 in organizing the corporation and receives 50 shares; Gil transfers no property. Which of the following is correct?",
  reference: "IRC §351: control means ownership of at least 80% of the total combined voting power and 80% of each class of nonvoting stock immediately after the exchange. Stock issued for services is not issued for 'property' and the service provider is not counted in the control group unless he also transfers property of more than nominal value. §357(a): assumption of liabilities is generally not boot; §357(c): gain is recognized to the extent liabilities assumed exceed the adjusted basis of the property transferred.",
  options: [
    { key: "A", text: "§351 does not apply because Gil, who transferred only services, is a shareholder immediately after the exchange." },
    { key: "B", text: "§351 applies; Eli recognizes $50,000 of gain under §357(c) and Gil recognizes $50,000 of ordinary income." },
    { key: "C", text: "§351 applies; Eli recognizes no gain because liability assumption is not treated as boot, and Gil recognizes $50,000 of ordinary income." },
    { key: "D", text: "§351 applies; Eli recognizes $150,000 of gain because the assumed mortgage is treated as boot received." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The control test is measured by the stock owned by the property transferors. Eli and Fern together own 600 of 650 shares = 92.3%, which satisfies the 80% requirement. Gil's shares are not counted for him, but they do dilute the group; even so, the group exceeds 80%.",
    B: "Correct. Control: Eli and Fern (the property transferors) own 600/650 = 92.3%, so §351 applies. Eli's liability of $150,000 exceeds his $100,000 basis in the building, so under §357(c) he recognizes $50,000 gain (the excess), and his stock basis becomes $100,000 + $50,000 - $150,000 = $0. Gil received stock for services, which is compensation: $50,000 of ordinary income under §61 and §83, with a $50,000 basis in his shares.",
    C: "Incorrect. Liability assumption is not boot under §357(a), but §357(c) is a separate rule that forces gain recognition when liabilities assumed exceed the total adjusted basis of property transferred by that shareholder. Here the $50,000 excess is recognized.",
    D: "Incorrect. Assumed liabilities are treated as boot only when the principal purpose is tax avoidance or there is no bona fide business purpose (§357(b)). Absent that, only the excess of liabilities over basis ($50,000) is recognized."
  },
  tags: ["§351","§357(c)","control test","stock for services","beyond-2026-REG-blueprint"]
},
{
  id: "REG-075", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods", skill: "Application", difficulty: 2,
  stem: "A C corporation had gross income from operations of $300,000 and operating expenses of $360,000 for the current year. It also received $100,000 of dividends from a domestic corporation in which it owns 15% of the stock. What amount is the corporation's dividends-received deduction?",
  reference: "",
  options: [
    { key: "A", text: "$20,000" },
    { key: "B", text: "$26,000" },
    { key: "C", text: "$50,000" },
    { key: "D", text: "$65,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $20,000 = 50% x $40,000 applies the §246(b) taxable-income limitation. That limitation does not apply when the full deduction creates or increases a net operating loss, which it does here ($40,000 - $50,000 = a $10,000 loss).",
    B: "Incorrect. $26,000 = 65% x $40,000 uses the 65% rate for 20%-or-more-owned corporations and also applies the taxable-income limitation. With 15% ownership the §243 rate is 50%, and the limitation is switched off by the NOL exception.",
    C: "Correct. Taxable income before the deduction = $300,000 - $360,000 + $100,000 = $40,000. The tentative deduction under §243(a) is 50% x $100,000 = $50,000. The §246(b) limit would be 50% x $40,000 = $20,000, but because taking the full $50,000 produces a net operating loss ($40,000 - $50,000), the limitation does not apply and the full $50,000 is allowed.",
    D: "Incorrect. $65,000 = 65% x $100,000 uses the rate that requires at least 20% ownership. A 15% shareholder is limited to the 50% rate under §243(a)(1)."
  },
  tags: ["§243","dividends-received deduction","taxable income limitation","NOL exception"]
},
{
  id: "REG-076", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods", skill: "Application", difficulty: 2,
  stem: "A calendar-year C corporation reported the following for the current year:\n\n| Item | Amount |\n|---|---|\n| Gross profit | $800,000 |\n| Operating expenses | $500,000 |\n| Dividends from a 30%-owned domestic corporation | $60,000 |\n| Charitable contributions paid | $50,000 |\n| NOL carryforward from Year 1 | $40,000 |\n\nWhat amount is the corporation's charitable contribution deduction for the current year?",
  reference: "",
  options: [
    { key: "A", text: "$28,100" },
    { key: "B", text: "$32,000" },
    { key: "C", text: "$36,000" },
    { key: "D", text: "$50,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $28,100 = 10% x ($320,000 - $39,000) reduces the base by the 65% dividends-received deduction on the $60,000 of dividends. Under §170(b)(2)(C) the 10% limit is computed before the dividends-received deduction, so the base stays at $320,000.",
    B: "Correct. The §170(b)(2) base is taxable income before the charitable deduction and the dividends-received deduction, but after NOL carryforwards: $800,000 - $500,000 + $60,000 - $40,000 = $320,000. The deduction is limited to 10% x $320,000 = $32,000; the remaining $18,000 carries forward for five years.",
    C: "Incorrect. $36,000 = 10% x $360,000 ignores the $40,000 NOL carryforward. Only NOL carrybacks are excluded from the §170(b)(2) base; a carryforward reduces taxable income before the 10% limit is applied.",
    D: "Incorrect. $50,000 is the full amount paid, but a corporation's deduction is capped at 10% of adjusted taxable income under §170(b)(2). The $18,000 excess is not lost; it carries forward up to five years."
  },
  tags: ["§170(b)(2)","corporate charitable deduction","10% limit","accrual election"]
},
{
  id: "REG-077", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods", skill: "Application", difficulty: 2,
  stem: "A C corporation had a net operating loss of $500,000 in Year 1, its first year of operations. Taxable income before any NOL deduction was $300,000 in Year 2 and $400,000 in Year 3. What amount is the corporation's NOL deduction in Year 3?",
  reference: "",
  options: [
    { key: "A", text: "$200,000" },
    { key: "B", text: "$240,000" },
    { key: "C", text: "$260,000" },
    { key: "D", text: "$320,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $200,000 assumes the full $300,000 was deducted in Year 2, leaving $200,000. Under §172(a)(2) the Year 2 deduction was limited to 80% x $300,000 = $240,000, so $260,000 remained.",
    B: "Incorrect. $240,000 is the Year 2 deduction (80% x $300,000), not the Year 3 deduction. In Year 3 the limit is 80% x $400,000 = $320,000, and the remaining $260,000 of NOL is fully absorbed.",
    C: "Correct. Post-2017 NOLs carry forward indefinitely but the deduction is limited to 80% of taxable income computed without the NOL (§172(a)(2)). Year 2: 80% x $300,000 = $240,000 deducted, leaving $500,000 - $240,000 = $260,000. Year 3: the limit is 80% x $400,000 = $320,000, which exceeds the $260,000 remaining, so the full $260,000 is deducted.",
    D: "Incorrect. $320,000 is the Year 3 limitation (80% x $400,000), but the deduction cannot exceed the NOL actually available. Only $260,000 remains after the Year 2 deduction."
  },
  tags: ["§172","NOL","80% limitation","carryforward"]
},
{
  id: "REG-078", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods", skill: "Remembering & Understanding", difficulty: 1,
  stem: "A C corporation has a $30,000 net capital loss in the current year and had net capital gains in each of the three preceding years. Which of the following describes the treatment of the current-year net capital loss?",
  reference: "",
  options: [
    { key: "A", text: "Deduct $3,000 against ordinary income and carry the balance forward indefinitely" },
    { key: "B", text: "Carry back 2 years and forward 20 years against capital gains only" },
    { key: "C", text: "Deduct the entire $30,000 against ordinary income in the current year" },
    { key: "D", text: "Carry back 3 years and forward 5 years against capital gains only" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. The $3,000 ordinary-income offset and the indefinite carryforward are the individual rules of §1211(b) and §1212(b). A corporation may not deduct any net capital loss against ordinary income.",
    B: "Incorrect. Two years back and twenty years forward were the pre-2018 NOL carryover periods under §172. They have never applied to corporate capital losses, which use the §1212(a) periods.",
    C: "Incorrect. Under §1211(a) a corporation deducts capital losses only to the extent of capital gains. No part of a net capital loss offsets ordinary income.",
    D: "Correct. Under §1212(a) a corporation carries a net capital loss back three years and forward five years, treating it as a short-term capital loss in each carryover year, and it may offset only capital gains. The loss is applied first to the earliest carryback year."
  },
  tags: ["§1211(a)","§1212(a)","corporate capital loss","carryback"]
},
{
  id: "REG-079", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Formation, distributions, liquidations, penalty taxes and consolidated returns (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 2,
  stem: "Kite Corp. had accumulated earnings and profits (E&P) of ($40,000) (a deficit) at January 1, 2025 and current E&P of $30,000 for 2025. On July 1, 2025 Kite distributed $70,000 cash to its sole shareholder, Lin, whose stock basis was $25,000. How should Lin treat the distribution?",
  reference: "IRC §316 and §301: distributions are dividends to the extent of current E&P (determined at year-end without reduction for the distribution), then accumulated E&P. Amounts in excess of E&P are a nontaxable return of capital to the extent of stock basis, then capital gain. A current-year deficit is not netted against positive accumulated E&P at year-end when current E&P is positive; when current E&P is positive and accumulated E&P is a deficit, current E&P alone supports dividend treatment.",
  options: [
    { key: "A", text: "Dividend $0; return of capital $25,000; capital gain $45,000" },
    { key: "B", text: "Dividend $30,000; return of capital $25,000; capital gain $15,000" },
    { key: "C", text: "Dividend $70,000" },
    { key: "D", text: "Dividend $30,000; return of capital $40,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This nets the accumulated deficit against current E&P to arrive at negative total E&P. When current E&P is positive, it is not offset by an accumulated deficit; distributions are dividends to the extent of current E&P.",
    B: "Correct. Current E&P of $30,000 makes the first $30,000 a taxable dividend, even though accumulated E&P is a deficit. The remaining $40,000 first reduces Lin's stock basis from $25,000 to $0 (nontaxable return of capital), and the final $15,000 is capital gain under §301(c)(3).",
    C: "Incorrect. Only $30,000 of E&P is available. A distribution in excess of total E&P cannot be a dividend; the excess is a return of capital and then gain.",
    D: "Incorrect. Return of capital is limited to the shareholder's stock basis of $25,000. Once basis is reduced to zero, any remaining distribution is gain from the sale or exchange of the stock."
  },
  tags: ["§301","§316","earnings and profits","return of capital","beyond-2026-REG-blueprint"]
},
{
  id: "REG-080", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Formation, distributions, liquidations, penalty taxes and consolidated returns (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 2,
  stem: "Moss Corp. adopted a plan of complete liquidation in 2025 and distributed its only asset, land with an adjusted basis of $150,000 and a FMV of $400,000, to its sole shareholder, Nell, an individual, whose basis in her Moss stock was $120,000. Moss has no liabilities. What are Moss's recognized gain and Nell's recognized gain?",
  reference: "IRC §336: a liquidating corporation recognizes gain or loss as if it sold the distributed property at FMV. IRC §331: shareholders treat amounts received in complete liquidation as full payment in exchange for their stock (capital gain or loss). §334(a): shareholder's basis in property received = FMV. (§332/§337 nonrecognition applies only to liquidations of an 80%-owned subsidiary into a corporate parent.)",
  options: [
    { key: "A", text: "Moss $0; Nell $280,000" },
    { key: "B", text: "Moss $250,000; Nell $30,000" },
    { key: "C", text: "Moss $0; Nell $0" },
    { key: "D", text: "Moss $250,000; Nell $280,000" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. Since the repeal of the General Utilities doctrine, §336 requires a liquidating corporation to recognize gain on distributions of appreciated property. Nell's gain is right but Moss's is not.",
    B: "Incorrect. Moss's gain is correct, but Nell's gain is measured against her stock basis, not the corporation's basis in the land. Nell exchanges her stock (basis $120,000) for property worth $400,000.",
    C: "Incorrect. Nonrecognition at both levels applies only to a parent-subsidiary liquidation under §332 and §337, where the shareholder is a corporation owning at least 80%. Nell is an individual.",
    D: "Correct. Corporate level: §336 gain = $400,000 - $150,000 = $250,000 (the corporate tax on this gain is ignored in the facts). Shareholder level: §331 gain = $400,000 FMV received - $120,000 stock basis = $280,000 capital gain. Nell takes a $400,000 basis in the land under §334(a)."
  },
  tags: ["§331","§336","§334","complete liquidation","beyond-2026-REG-blueprint"]
},
{
  id: "REG-081", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Formation, distributions, liquidations, penalty taxes and consolidated returns (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 2,
  stem: "Opal Corp. is a C corporation whose stock is owned 60% by one individual and 40% by her brother. In 2025 Opal's adjusted ordinary gross income consisted of $500,000 of dividends and interest on its investment portfolio and $100,000 of gross profit from a small retail operation. Opal made no distributions and has no dividends-paid history. Which of the following is correct?",
  reference: "Personal holding company (PHC) tests (§542): (1) at any time during the last half of the year more than 50% in value of the stock is owned directly or indirectly by 5 or fewer individuals, and (2) at least 60% of adjusted ordinary gross income is PHC income (dividends, interest, royalties, rents in some cases, certain personal service income). PHC tax: 20% of undistributed PHC income. Accumulated earnings tax (§531): 20% of accumulated taxable income; does not apply to a PHC; a minimum credit of $250,000 ($150,000 for service corporations) is allowed.",
  options: [
    { key: "A", text: "Opal is subject to the accumulated earnings tax because it retained earnings beyond the reasonable needs of the business." },
    { key: "B", text: "Opal is not a PHC because the stock is held by only two shareholders." },
    { key: "C", text: "Opal is a personal holding company subject to a 20% tax on its undistributed PHC income, and it is therefore not subject to the accumulated earnings tax." },
    { key: "D", text: "Opal is exempt from both penalty taxes because it conducts an active retail business." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Although Opal's fact pattern suggests unreasonable accumulations, §532(b)(1) provides that the accumulated earnings tax does not apply to a personal holding company. Because Opal meets the PHC tests, only the PHC tax applies.",
    B: "Incorrect. The ownership test is satisfied when 5 or fewer individuals own more than 50%; two shareholders owning 100% easily meet it. Fewer owners make PHC status more likely, not less.",
    C: "Correct. Stock ownership test: 2 individuals own 100% (more than 50% by 5 or fewer). Income test: PHC income $500,000 / AOGI $600,000 = 83.3%, which is at least 60%. Opal is a PHC and owes a 20% tax on its undistributed PHC income (its taxable income with adjustments, less dividends paid, including consent and deficiency dividends). A PHC is excluded from the accumulated earnings tax.",
    D: "Incorrect. Conducting some active business does not prevent PHC status; the test is mechanical and based on the 60% income threshold, which is met here."
  },
  tags: ["§541","§542","personal holding company","§531","accumulated earnings tax","beyond-2026-REG-blueprint"]
},
{
  id: "REG-082", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Eligibility and election", skill: "Application", difficulty: 2,
  stem: "A calendar-year C corporation wants to elect S corporation status effective for the coming year. Which of the following would prevent a valid S election?",
  reference: "",
  options: [
    { key: "A", text: "The corporation has 40 shareholders, including a married couple and their four children who each hold shares individually" },
    { key: "B", text: "The corporation has two classes of common stock that are identical except that one class is nonvoting" },
    { key: "C", text: "Form 2553 is filed timely with the consent of shareholders holding 95% of the shares" },
    { key: "D", text: "One shareholder is a decedent's estate and another is a domestic grantor trust" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Under §1361(c)(1) members of a family are treated as one shareholder, so the six family members count once. Even counted separately, 40 shareholders is well under the 100-shareholder limit.",
    B: "Incorrect. §1361(c)(4) provides that differences solely in voting rights do not create a second class of stock. Only differences in rights to distributions or liquidation proceeds violate the one-class-of-stock rule.",
    C: "Correct. Under §1362(a)(2) every person who is a shareholder on the day the election is made must consent. Filing on time with only 95% consent leaves the election invalid; the missing 5% shareholder's consent is required.",
    D: "Incorrect. Estates and grantor trusts are permitted shareholders under §1361(c)(2). Only nonresident aliens, corporations, partnerships and most non-grantor trusts are ineligible."
  },
  tags: ["§1361","§1362","S election","eligible shareholders","one class of stock"]
},
{
  id: "REG-083", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Basis of shareholder's interest", skill: "Application", difficulty: 2,
  stem: "The sole shareholder of an S corporation began the year with a stock basis of $20,000 and a $15,000 basis in a loan to the corporation. During the year the corporation reported an ordinary loss of $50,000 and $3,000 of tax-exempt interest income, and distributed $8,000 cash to the shareholder. What amount of the loss may the shareholder deduct in the current year?",
  reference: "",
  options: [
    { key: "A", text: "$15,000" },
    { key: "B", text: "$27,000" },
    { key: "C", text: "$30,000" },
    { key: "D", text: "$50,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $15,000 is the stock basis after adjustments ($20,000 + $3,000 - $8,000) and stops there. §1366(d)(1)(B) also allows losses against the shareholder's $15,000 basis in debt owed by the corporation to the shareholder.",
    B: "Incorrect. $27,000 = ($20,000 - $8,000) + $15,000 omits the $3,000 of tax-exempt interest. Under §1367(a)(1)(A) tax-exempt income increases stock basis before distributions and losses are applied.",
    C: "Correct. Under §1367 stock basis is first increased by income, including tax-exempt income ($20,000 + $3,000 = $23,000), then reduced by the distribution ($23,000 - $8,000 = $15,000). The §1366(d) loss limit is stock basis plus debt basis: $15,000 + $15,000 = $30,000. The remaining $20,000 of loss is suspended and carries forward.",
    D: "Incorrect. $50,000 deducts the full loss. §1366(d)(1) limits the deduction to the shareholder's adjusted stock basis plus debt basis; the $20,000 excess is suspended, not deducted."
  },
  tags: ["§1366","§1367","S corporation basis","debt basis","loss limitation"]
},
{
  id: "REG-084", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Ordinary business income, separately stated items and AAA", skill: "Application", difficulty: 3,
  stem: "An S corporation has $30,000 of accumulated earnings and profits from its years as a C corporation. At the beginning of the year its accumulated adjustments account was $25,000 and its sole shareholder's stock basis was $60,000. During the year the corporation had ordinary income of $15,000 and distributed $110,000 cash to the shareholder. What amount of the distribution is taxed as capital gain?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$5,000" },
    { key: "C", text: "$20,000" },
    { key: "D", text: "$35,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $0 forgets that the $40,000 AAA distribution reduces stock basis. Basis after the AAA tier is $75,000 - $40,000 = $35,000, not $75,000, so the final $40,000 of the distribution exceeds remaining basis by $5,000.",
    B: "Correct. AAA and basis are first increased by current income: AAA = $25,000 + $15,000 = $40,000; basis = $60,000 + $15,000 = $75,000. Under §1368(c) the first $40,000 is tax-free from AAA (basis falls to $35,000), the next $30,000 is a dividend from accumulated E&P (no basis effect), the next $35,000 is a tax-free return of remaining basis, and the final $5,000 ($110,000 - $40,000 - $30,000 - $35,000) is capital gain.",
    C: "Incorrect. $20,000 uses the beginning-of-year AAA ($25,000) and basis ($60,000) without adding the $15,000 of current income. Under §1368(e) and §1367(a) both are increased by the year's income before distributions are applied.",
    D: "Incorrect. $35,000 reduces stock basis by the $30,000 dividend tier as well as by the AAA tier. Dividends from accumulated E&P do not reduce stock basis under §1368(c)(2), so $35,000 of basis remains for the return-of-capital tier."
  },
  tags: ["§1368","AAA","accumulated E&P","S corporation distributions"]
},
{
  id: "REG-085", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Built-in gains tax (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 2,
  stem: "Teal Corp. was a C corporation until it elected S status effective January 1, 2023. On that date it held land with a basis of $100,000 and FMV of $340,000. In 2025 Teal sold the land for $400,000. Teal's 2025 taxable income computed as if it were a C corporation is $180,000. What is Teal's 2025 built-in gains tax?",
  reference: "IRC §1374: an S corporation that was formerly a C corporation is taxed at the corporate rate (21%) on net recognized built-in gain during the 5-year recognition period beginning on the first day of the S election. Recognized built-in gain on an asset is limited to the asset's built-in gain (FMV - basis) on the conversion date. The amount subject to tax in any year is limited to taxable income computed as if the corporation were a C corporation; any built-in gain not taxed because of this limitation carries forward within the recognition period. The tax reduces the gain passed through to shareholders.",
  options: [
    { key: "A", text: "$37,800" },
    { key: "B", text: "$63,000" },
    { key: "C", text: "$50,400" },
    { key: "D", text: "$0, because the sale occurred more than 2 years after conversion" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Built-in gain on the conversion date = $340,000 - $100,000 = $240,000 (the $60,000 of post-conversion appreciation is not subject to §1374). Net recognized built-in gain is limited to taxable income computed as a C corporation, $180,000. Tax = 21% x $180,000 = $37,800. The untaxed $60,000 of built-in gain carries forward to 2026 and 2027 (the remainder of the 5-year recognition period).",
    B: "Incorrect. $63,000 = 21% x $300,000 uses the entire 2025 gain ($400,000 - $100,000). Only the appreciation that existed on the conversion date ($240,000) is built-in gain; the $60,000 of post-conversion appreciation passes through to shareholders free of the entity-level tax.",
    C: "Incorrect. $50,400 = 21% x $240,000 is the tax on the full recognized built-in gain but ignores the taxable income limitation of §1374(d)(2)(A)(ii). Because C-corporation taxable income is only $180,000, the current-year base is capped at that amount.",
    D: "Incorrect. The recognition period under §1374(d)(7) is 5 years, not 2. A sale in 2025, the third year after the January 1, 2023 conversion, falls within the period."
  },
  tags: ["§1374","built-in gains tax","recognition period","beyond-2026-REG-blueprint"]
},
{
  id: "REG-086", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Basis of partner's interest", skill: "Application", difficulty: 2,
  stem: "Two individuals form an equal partnership. One partner contributes a building with an adjusted basis of $120,000 and a fair market value of $300,000, subject to a $100,000 recourse mortgage that the partnership assumes. The other contributes $200,000 cash. Liabilities are shared equally. What is the contributing partner's basis in the partnership interest immediately after formation?",
  reference: "",
  options: [
    { key: "A", text: "$20,000" },
    { key: "B", text: "$70,000" },
    { key: "C", text: "$120,000" },
    { key: "D", text: "$170,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $20,000 = $120,000 - $100,000 treats the entire mortgage as relieved. Under §752(a) the partner is allocated a 50% share ($50,000) of the partnership's liabilities, which is a deemed cash contribution that increases basis.",
    B: "Correct. Basis starts at the $120,000 adjusted basis of the building (§722). The partner is relieved of $100,000 of debt, a deemed distribution under §752(b), and takes on 50% of the partnership's $100,000 liability, a deemed contribution of $50,000 under §752(a). Basis = $120,000 - $100,000 + $50,000 = $70,000. No gain is recognized because the $50,000 net deemed distribution does not exceed basis (§731).",
    C: "Incorrect. $120,000 ignores §752 entirely. The liability assumed by the partnership reduces basis, and the partner's share of partnership liabilities increases it, for a net $50,000 reduction.",
    D: "Incorrect. $170,000 = $120,000 + $50,000 adds the partner's share of partnership liabilities but forgets that the partnership assumed the partner's $100,000 mortgage, which is a deemed distribution under §752(b)."
  },
  tags: ["§721","§722","§752","partnership formation","liabilities"]
},
{
  id: "REG-087", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Basis of partner's interest", skill: "Application", difficulty: 2,
  stem: "A 25% partner had an outside basis of $40,000 at the beginning of the year. The partnership reported the following for the year, and its liabilities did not change:\n\n| Item | Amount |\n|---|---|\n| Ordinary business income before guaranteed payments | $200,000 |\n| Guaranteed payment to this partner for services | $30,000 |\n| Long-term capital gain | $20,000 |\n| Charitable contributions | $8,000 |\n| Tax-exempt interest | $4,000 |\n| Cash distribution to this partner | $15,000 |\n\nWhat is the partner's outside basis at the end of the year?",
  reference: "",
  options: [
    { key: "A", text: "$72,500" },
    { key: "B", text: "$74,500" },
    { key: "C", text: "$79,000" },
    { key: "D", text: "$102,500" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Ordinary income after the guaranteed payment = $200,000 - $30,000 = $170,000; the partner's 25% share is $42,500. Under §705(a), basis = $40,000 + $42,500 + 25% x $20,000 ($5,000) + 25% x $4,000 ($1,000) - 25% x $8,000 ($2,000) - $15,000 = $72,500. The §707(c) guaranteed payment is ordinary income to the partner but does not itself increase basis.",
    B: "Incorrect. $74,500 omits the $2,000 share of charitable contributions. Under §705(a)(2)(B) separately stated deductions, including charitable contributions, reduce outside basis even though they are claimed on the partner's own return.",
    C: "Incorrect. $79,000 allocates 25% of $200,000 ($50,000) without first deducting the $30,000 guaranteed payment. Guaranteed payments are deducted by the partnership under §707(c) before ordinary income is allocated among the partners.",
    D: "Incorrect. $102,500 adds the $30,000 guaranteed payment to basis. A guaranteed payment is compensation for services, not an allocation of partnership income, so it does not increase outside basis under §705."
  },
  tags: ["§705","§707(c)","guaranteed payments","outside basis","separately stated items"]
},
{
  id: "REG-088", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Basis of partner's interest", skill: "Application", difficulty: 1,
  stem: "A partner with an outside basis of $50,000 receives a nonliquidating distribution of $20,000 cash and land with an adjusted basis to the partnership of $45,000 and a fair market value of $60,000. What is the partner's basis in the land?",
  reference: "",
  options: [
    { key: "A", text: "$30,000" },
    { key: "B", text: "$45,000" },
    { key: "C", text: "$50,000" },
    { key: "D", text: "$60,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Cash is applied first: $50,000 - $20,000 = $30,000 of outside basis remains, and no gain is recognized because cash did not exceed basis (§731(a)). The land would take the partnership's $45,000 carryover basis under §732(a)(1), but §732(a)(2) limits it to the $30,000 of remaining outside basis. The partner's outside basis becomes $0.",
    B: "Incorrect. $45,000 is the partnership's carryover basis, but in a current distribution §732(a)(2) caps the property's basis at the partner's outside basis after the cash reduction, which is $30,000.",
    C: "Incorrect. $50,000 applies the §732(a)(2) cap using outside basis before the $20,000 cash. Cash reduces outside basis first under §733, leaving only $30,000 to allocate to the land.",
    D: "Incorrect. $60,000 gives the land a fair market value basis, as if the distribution were a taxable exchange. Partnership distributions are generally nontaxable under §731 and property takes a carryover basis under §732, subject to the outside-basis cap."
  },
  tags: ["§731","§732","§733","current distribution","partnership"]
},
{
  id: "REG-089", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Sale of interest, §751 and §754 (2026 Blueprint: TCP scope)", skill: "Analysis", difficulty: 3,
  stem: "Yuki sells her 40% interest in YZ Partnership to an unrelated buyer for $150,000 cash. Her outside basis is $90,000, which includes her $30,000 share of partnership liabilities; the buyer takes over that share of liabilities. At the time of sale the partnership's balance sheet shows: cash $50,000; accounts receivable (cash-basis partnership) basis $0, FMV $60,000; equipment basis $40,000, FMV $70,000 (all of the $30,000 appreciation is §1245 recapture); land basis $110,000, FMV $195,000. What is the amount and character of Yuki's gain?",
  reference: "IRC §741: gain on sale of a partnership interest is capital gain, except as provided in §751. §751(a): the portion of the amount realized attributable to the selling partner's share of unrealized receivables (including §1245 depreciation recapture) and inventory items is ordinary income. §752(d): the amount realized includes the seller's share of partnership liabilities assumed by the buyer.",
  options: [
    { key: "A", text: "$90,000 capital gain" },
    { key: "B", text: "$24,000 ordinary income and $66,000 capital gain" },
    { key: "C", text: "$36,000 ordinary income and $24,000 capital gain" },
    { key: "D", text: "$36,000 ordinary income and $54,000 capital gain" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. The total gain of $90,000 is right, but treating all of it as capital gain ignores §751(a). The share of gain attributable to unrealized receivables and depreciation recapture must be carved out as ordinary income.",
    B: "Incorrect. $24,000 counts only the zero-basis accounts receivable (40% x $60,000) as hot assets. §751(c) also treats §1245 recapture on the equipment (40% x $30,000 = $12,000) as an unrealized receivable, so ordinary income is $36,000.",
    C: "Incorrect. This computes total gain as $150,000 - $90,000 = $60,000, omitting the $30,000 of liability relief from the amount realized. Under §752(d) the buyer's assumption of Yuki's share of liabilities is part of the amount realized, just as that share was included in her basis.",
    D: "Correct. Amount realized = $150,000 cash + $30,000 liabilities assumed = $180,000. Gain = $180,000 - $90,000 outside basis = $90,000. Ordinary income under §751(a) = Yuki's share of hot-asset appreciation: receivables 40% x $60,000 = $24,000 plus §1245 recapture 40% x $30,000 = $12,000, total $36,000. Remaining $90,000 - $36,000 = $54,000 is capital gain under §741 (the land appreciation is not a hot asset)."
  },
  tags: ["§741","§751","hot assets","unrealized receivables","sale of partnership interest","beyond-2026-REG-blueprint"]
},
{
  id: "REG-090", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Sale of interest, §751 and §754 (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 2,
  stem: "Zed purchased a one-third interest in ABC Partnership from a retiring partner for $200,000. At the time of purchase the partnership's only assets were land (basis $240,000, FMV $420,000) and cash $180,000; it had no liabilities. The partnership has a §754 election in effect. What is Zed's §743(b) basis adjustment, and what is the effect if the partnership later sells the land for $420,000?",
  reference: "IRC §743(b): when a §754 election is in effect (or there is a substantial built-in loss), the transferee partner's share of the inside basis of partnership property is adjusted by the difference between the transferee's outside basis and his proportionate share of the adjusted basis of partnership property. The adjustment is personal to the transferee and allocated among assets under §755.",
  options: [
    { key: "A", text: "Adjustment $180,000; Zed recognizes no gain on the sale of the land." },
    { key: "B", text: "Adjustment $60,000; Zed recognizes $60,000 of gain on the sale of the land." },
    { key: "C", text: "Adjustment $60,000; Zed recognizes no gain on the partnership's sale of the land." },
    { key: "D", text: "Adjustment $0 because the purchase price equals FMV; Zed recognizes $60,000 of gain on the sale." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $180,000 is the total built-in gain in the land for all partners. Zed's adjustment reflects only his one-third share of the difference between FMV and inside basis ($60,000).",
    B: "Incorrect. The purpose of the §743(b) adjustment is to eliminate the built-in gain that Zed effectively paid for. Recognizing $60,000 of gain would be the result without a §754 election.",
    C: "Correct. Zed's outside basis = $200,000 cost. His share of inside basis = 1/3 x ($240,000 + $180,000) = $140,000. §743(b) adjustment = $200,000 - $140,000 = $60,000, allocated under §755 to the land (the only appreciated asset). On a later sale of the land for $420,000, the partnership's gain is $180,000, of which Zed's one-third share is $60,000, fully offset by his $60,000 special basis adjustment, so Zed recognizes no gain (the other partners each recognize $60,000).",
    D: "Incorrect. Paying FMV for the interest is exactly what creates the disparity: Zed's outside basis ($200,000) exceeds his share of inside basis ($140,000). Without the adjustment he would be taxed on appreciation that accrued before he bought in."
  },
  tags: ["§754","§743(b)","§755","inside basis","transferee partner","beyond-2026-REG-blueprint"]
},
{
  id: "REG-091", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Trusts and estates — Fiduciary income tax (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 3,
  stem: "The Barlow Trust is a simple trust required to distribute all income currently to its sole beneficiary. For 2025 it had: taxable interest $30,000; qualified dividends $20,000; tax-exempt municipal interest $10,000; long-term capital gain $15,000 allocated to corpus under the trust instrument and state law; trustee fees $6,000 (allocated one-half to income and one-half to corpus for fiduciary accounting purposes). What is the trust's distribution deduction for 2025?",
  reference: "IRC §643(a): distributable net income (DNI) = taxable income of the trust, before the distribution deduction and personal exemption, plus tax-exempt interest (net of allocable expenses), minus capital gains allocated to corpus. §651: a simple trust deducts the lesser of the income required to be distributed or DNI, excluding the portion of DNI consisting of tax-exempt income. Expenses are allocated between taxable and tax-exempt income in proportion to gross income. Simple trust exemption: $300.",
  options: [
    { key: "A", text: "$54,000" },
    { key: "B", text: "$45,000" },
    { key: "C", text: "$60,000" },
    { key: "D", text: "$48,700" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $54,000 = $60,000 - $6,000 is total DNI including the tax-exempt portion. The distribution deduction cannot include tax-exempt interest, which is not taxable to the trust or beneficiary.",
    B: "Correct. Trustee fees allocable to tax-exempt income = $6,000 x ($10,000 / $60,000) = $1,000; the remaining $5,000 is deductible against taxable income. DNI = $30,000 + $20,000 + ($10,000 - $1,000) - $5,000 = $54,000; capital gain allocated to corpus is excluded. Taxable DNI (distribution deduction) = $54,000 - $9,000 net tax-exempt interest = $45,000. The beneficiary reports $45,000 of taxable income (interest and qualified dividends) and $9,000 of tax-exempt interest; the trust pays tax on the $15,000 capital gain less the $300 exemption.",
    C: "Incorrect. $60,000 is total fiduciary accounting income before expenses. The distribution deduction is limited to DNI net of expenses and excludes tax-exempt income.",
    D: "Incorrect. $48,700 = $54,000 - $5,000 - $300, which removes the deductible fees twice and subtracts the personal exemption. DNI is computed before the personal exemption, and the fees have already been deducted in arriving at $54,000."
  },
  tags: ["§643","§651","DNI","simple trust","distribution deduction","beyond-2026-REG-blueprint"]
},
{
  id: "REG-092", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Trusts and estates — Fiduciary income tax (2026 Blueprint: TCP scope)", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Which of the following statements regarding the federal income taxation of trusts and estates is correct?",
  reference: "Tax year 2025. Personal exemptions: estates $600; simple trusts (required to distribute all income currently) $300; complex trusts $100. Form 1041 is required for an estate with gross income of $600 or more and for a trust with any taxable income or gross income of $600 or more.",
  options: [
    { key: "A", text: "A complex trust is one that may accumulate income, make charitable contributions, or distribute corpus, and it receives a $100 exemption." },
    { key: "B", text: "An estate must use a calendar tax year, while a trust may elect any fiscal year." },
    { key: "C", text: "Income distributed to a beneficiary retains its character in the beneficiary's hands only if the trust instrument specifically so provides." },
    { key: "D", text: "An estate is required to make quarterly estimated tax payments beginning with its first tax year." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. A simple trust must distribute all income currently, makes no charitable contributions and distributes no corpus; any trust that fails one of those conditions in a given year is complex for that year. The exemption is $300 for a simple trust, $100 for a complex trust, and $600 for an estate.",
    B: "Incorrect. This is reversed. Under §644 trusts (other than tax-exempt and charitable trusts) must use a calendar year; an estate may elect a fiscal year. A §645 election allows a qualified revocable trust to be treated as part of the estate and share its fiscal year.",
    C: "Incorrect. Under §652(b) and §662(b), amounts distributed to beneficiaries retain the same character (interest, qualified dividends, tax-exempt income) as in the hands of the trust or estate, automatically and by operation of law, allocated pro rata unless the instrument specifically allocates different classes of income to different beneficiaries with economic effect.",
    D: "Incorrect. §6654(l) exempts an estate (and a grantor trust receiving the residue of the estate) from estimated tax payments for its first two tax years after the decedent's death. Trusts generally must make estimated payments."
  },
  tags: ["§641","§644","§645","simple trust","complex trust","Form 1041","beyond-2026-REG-blueprint"]
},
{
  id: "REG-093", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Tax-exempt organizations — Unrelated business taxable income (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 2,
  stem: "Harbor Museum is a §501(c)(3) organization. During 2025 it had: admission fees $400,000; gift shop sales of art reproductions related to its collection $150,000; net income from a parking garage it operates for the general public (not debt-financed) $30,000; dividends and interest on its endowment $80,000; rental income from an unrelated office building it owns free of debt $50,000; and net income from a bingo game run entirely by volunteers $12,000. What is Harbor's unrelated business taxable income for 2025?",
  reference: "IRC §511-§513: unrelated business income is income from a trade or business regularly carried on that is not substantially related to the exempt purpose. Exclusions (§512(b)): dividends, interest, royalties, rents from real property (unless debt-financed), and gains from property sales. Excepted activities (§513): activities conducted substantially by volunteers, sales of donated merchandise, and activities for the convenience of members/students. A specific deduction of $1,000 is allowed. UBTI is taxed at 21%.",
  options: [
    { key: "A", text: "$209,000" },
    { key: "B", text: "$79,000" },
    { key: "C", text: "$41,000" },
    { key: "D", text: "$29,000" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. $209,000 treats the gift shop sales, parking and investment income (or a similar combination) as unrelated business income. Sales of items related to the collection are substantially related, and passive investment income is excluded.",
    B: "Incorrect. $79,000 = $30,000 + $50,000 - $1,000 includes the rental income. Rents from real property are excluded from UBTI unless the property is debt-financed under §514, and the facts state the building is owned free of debt.",
    C: "Incorrect. $41,000 = $30,000 + $12,000 - $1,000 includes the bingo income. An activity in which substantially all the work is performed by unpaid volunteers is excluded from the definition of unrelated trade or business.",
    D: "Correct. Admissions and gift shop sales of reproductions of the collection are substantially related to the museum's educational purpose. Endowment dividends and interest are excluded under §512(b)(1). Rent from debt-free real property is excluded under §512(b)(3). The volunteer-run bingo is excepted under §513(a)(1). Only the public parking garage ($30,000) is an unrelated trade or business regularly carried on. UBTI = $30,000 - $1,000 specific deduction = $29,000."
  },
  tags: ["§511","§512","§513","UBTI","§501(c)(3)","beyond-2026-REG-blueprint"]
},
{
  id: "REG-094", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — State and local tax issues", skill: "Application", difficulty: 2,
  stem: "A corporation has $2,000,000 of business income and the following apportionment factors:\n\n| Factor | State B | Everywhere |\n|---|---|---|\n| Property | $2,000,000 | $8,000,000 |\n| Payroll | $1,000,000 | $4,000,000 |\n| Sales | $3,000,000 | $10,000,000 |\n\nState B uses an equally weighted three-factor formula. What amount of business income is apportioned to State B?",
  reference: "",
  options: [
    { key: "A", text: "$500,000" },
    { key: "B", text: "$533,333" },
    { key: "C", text: "$600,000" },
    { key: "D", text: "$666,667" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $500,000 = $2,000,000 x 25% uses only the property or payroll factor. An equally weighted three-factor formula averages all three factors, including the 30% sales factor.",
    B: "Correct. Property factor = $2,000,000 / $8,000,000 = 25%; payroll factor = $1,000,000 / $4,000,000 = 25%; sales factor = $3,000,000 / $10,000,000 = 30%. Average = (25% + 25% + 30%) / 3 = 26.667%. Apportioned business income = $2,000,000 x 26.667% = $533,333.",
    C: "Incorrect. $600,000 = $2,000,000 x 30% uses the sales factor alone, which is the single-sales-factor method. State B weights property and payroll equally with sales.",
    D: "Incorrect. $666,667 = $2,000,000 / 3 divides income equally among three states. Business income is apportioned by the factor formula, not by the number of states in which the corporation does business."
  },
  tags: ["state apportionment","three-factor formula","allocation vs apportionment"]
},
{
  id: "REG-095", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Multijurisdictional — International (§911) (2026 Blueprint: TCP scope)", skill: "Application", difficulty: 2,
  stem: "Omar, a U.S. citizen, was transferred by his employer to Germany and was a bona fide resident of Germany for all of 2025. He received $170,000 of salary for services performed in Germany and $8,000 of dividends from U.S. stocks. He paid $45,000 of German income tax on the salary. Omar elects the foreign earned income exclusion and does not claim a housing exclusion. Which of the following is correct regarding Omar's 2025 U.S. return?",
  reference: "Tax year 2025. §911: a qualifying individual (bona fide resident of a foreign country for an entire tax year, or physically present abroad 330 full days in a 12-month period) may exclude up to $130,000 of foreign earned income. Foreign taxes attributable to excluded income may not be credited or deducted (§911(d)(6)). Tax on the remaining income is computed using the stacking rule (as if the excluded income were included, then subtracting the tax on the excluded amount).",
  options: [
    { key: "A", text: "Omar excludes $130,000 of salary; the remaining $40,000 of salary and $8,000 of dividends are taxable, and he may claim a foreign tax credit only for the portion of German tax attributable to the $40,000 of nonexcluded salary." },
    { key: "B", text: "Omar excludes $170,000 of salary because he qualifies under the bona fide residence test; only the $8,000 of dividends is taxable." },
    { key: "C", text: "Omar excludes $130,000 of salary and may claim a foreign tax credit for the full $45,000 of German tax against his U.S. tax on the remaining income." },
    { key: "D", text: "Omar may not use the exclusion because he is a U.S. citizen; he must include all $178,000 and claim the foreign tax credit for $45,000." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. As a bona fide resident of Germany for the entire year, Omar qualifies under §911(d)(1)(A). The exclusion is capped at $130,000 for 2025, so $40,000 of salary plus $8,000 of dividends (not earned income) remain taxable under the stacking rule. German tax is creditable only to the extent allocable to the non-excluded salary: $45,000 x ($40,000 / $170,000) = about $10,588, subject to the §904 limitation.",
    B: "Incorrect. Qualifying under the bona fide residence (or physical presence) test establishes eligibility, but the exclusion is limited to the inflation-adjusted amount of $130,000 for 2025. The excess salary is taxable.",
    C: "Incorrect. §911(d)(6) disallows a credit or deduction for foreign taxes allocable to excluded income. Allowing the full $45,000 credit would give a double benefit for the $130,000 of excluded salary.",
    D: "Incorrect. The §911 exclusion is available to U.S. citizens (and resident aliens) who meet the tax home and residence/presence tests. Citizenship is a prerequisite, not a bar. Omar may alternatively forgo the exclusion and claim the credit on all income, but he elected the exclusion."
  },
  tags: ["§911","foreign earned income exclusion","foreign tax credit","bona fide residence","beyond-2026-REG-blueprint"]
},
{
  id: "REG-096", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Formation, distributions, liquidations, penalty taxes and consolidated returns (2026 Blueprint: TCP scope)", skill: "Analysis", difficulty: 3,
  stem: "Parent Corp. owns 100% of Sub 1 and 75% of Sub 2. For 2025, Parent had separate taxable income of $500,000, which includes a $60,000 gain on the sale of land to Sub 1 (Sub 1 still holds the land) and $40,000 of dividends received from Sub 1. Sub 1 had separate taxable income of $200,000 (before any dividends-paid adjustment) and Sub 2 had taxable income of $150,000. Parent and its eligible subsidiaries file a consolidated return. What is the group's consolidated taxable income for 2025?",
  reference: "IRC §1501-§1504: an affiliated group (a common parent owning at least 80% of the vote and value of each includible corporation) may elect to file a consolidated return. Reg. §1.1502-13: gains and losses on intercompany transactions are deferred until the property leaves the group or is depreciated/sold. Intercompany dividends between group members are eliminated (Reg. §1.1502-13(f)).",
  options: [
    { key: "A", text: "$750,000" },
    { key: "B", text: "$850,000" },
    { key: "C", text: "$600,000" },
    { key: "D", text: "$700,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $750,000 = $500,000 + $200,000 + $150,000 - $60,000 - $40,000 includes Sub 2. Sub 2 is only 75% owned and does not meet the 80% affiliation requirement, so it cannot be included in the consolidated return; it files separately.",
    B: "Incorrect. $850,000 sums all three corporations' separate taxable income with no adjustments. It includes an ineligible member and fails to eliminate the intercompany gain and dividend.",
    C: "Correct. Includible members: Parent and Sub 1 only (Sub 2 at 75% fails the 80% test). Consolidated taxable income = Parent $500,000 + Sub 1 $200,000 - $60,000 deferred intercompany gain - $40,000 intercompany dividend eliminated = $600,000. The $60,000 gain is restored when Sub 1 sells the land outside the group.",
    D: "Incorrect. $700,000 = $500,000 + $200,000 excludes Sub 2 but does not eliminate the $60,000 intercompany gain or the $40,000 intercompany dividend. Both must be removed under the consolidated return regulations."
  },
  tags: ["§1501","§1504","consolidated return","intercompany transactions","affiliated group","beyond-2026-REG-blueprint"]
},
{
  id: "REG-097", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Differences between book and tax income — Schedule M-1/M-3", skill: "Application", difficulty: 2,
  stem: "An accrual-basis C corporation reported net income per books of $820,000 for the current year, after the following items:\n\n| Item | Amount |\n|---|---|\n| Federal income tax expense | $210,000 |\n| Municipal bond interest income | $30,000 |\n| Business meals expense | $40,000 |\n| Premiums on officer life insurance, corporation as beneficiary | $15,000 |\n| Excess of tax depreciation over book depreciation | $60,000 |\n\nWhat is the corporation's taxable income?",
  reference: "",
  options: [
    { key: "A", text: "$765,000" },
    { key: "B", text: "$960,000" },
    { key: "C", text: "$975,000" },
    { key: "D", text: "$995,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $765,000 leaves out the $210,000 federal income tax add-back. Federal income tax is a book expense that is never deductible under §275, so it is added back on Schedule M-1.",
    B: "Incorrect. $960,000 omits the $15,000 of officer life insurance premiums. Premiums on a policy under which the corporation is the beneficiary are nondeductible under §264(a)(1) and must be added back.",
    C: "Correct. Start with book income of $820,000. Add back nondeductible items: federal income tax $210,000 (§275), the nondeductible 50% of meals $20,000 (§274(n)) and officer life insurance premiums $15,000 (§264). Subtract items that are book income but not taxable or tax deductions not on the books: municipal bond interest $30,000 (§103) and excess tax depreciation $60,000. Taxable income = $820,000 + $210,000 + $20,000 + $15,000 - $30,000 - $60,000 = $975,000.",
    D: "Incorrect. $995,000 adds back the full $40,000 of meals. Under §274(n) half of business meals remains deductible, so only $20,000 is a book/tax difference."
  },
  tags: ["Schedule M-1","book-tax differences","§274(n)","§166","permanent vs temporary"]
},
{
  id: "REG-098", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods", skill: "Application", difficulty: 2,
  stem: "The §448 gross-receipts threshold for the current year is $31 million, measured as average annual gross receipts for the three prior years. Which of the following calendar-year taxpayers may use the overall cash method of accounting?",
  reference: "",
  options: [
    { key: "A", text: "A C corporation retailer with inventory and average gross receipts of $22 million" },
    { key: "B", text: "A C corporation manufacturer with average gross receipts of $45 million" },
    { key: "C", text: "A partnership with a C corporation partner and average gross receipts of $60 million" },
    { key: "D", text: "A C corporation that is a tax shelter with average gross receipts of $5 million" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. A C corporation that meets the §448(c) gross-receipts test ($22 million is at or below $31 million) is not barred from the cash method. Having inventory no longer forces the accrual method: under §471(c) a taxpayer meeting the test may treat inventory as non-incidental materials and supplies or follow its book method.",
    B: "Incorrect. Average gross receipts of $45 million exceed the $31 million threshold, so §448(a)(1) prohibits this C corporation from using the cash method regardless of what it sells.",
    C: "Incorrect. §448(a)(2) treats a partnership with a C corporation partner like a C corporation. With $60 million of average gross receipts it fails the gross-receipts test and must use an accrual method.",
    D: "Incorrect. Under §448(a)(3) a tax shelter may never use the cash method, and the gross-receipts exception in §448(b)(3) does not apply to tax shelters even when receipts are small."
  },
  tags: ["§448","cash method","gross receipts test","§471(c)","accounting methods"]
},
{
  id: "REG-099", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Limited liability companies — Tax classification options", skill: "Application", difficulty: 2,
  stem: "Two unrelated individuals plan to start a business. They want limited liability, a single level of federal income tax, and the ability to include their share of the entity's bank debt in the basis of their ownership interests. Which of the following entities meets all three objectives?",
  reference: "",
  options: [
    { key: "A", text: "An S corporation" },
    { key: "B", text: "A C corporation" },
    { key: "C", text: "A general partnership" },
    { key: "D", text: "A limited liability company taxed as a partnership" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. An S corporation gives limited liability and a single level of tax, but under §1366(d) a shareholder's basis for deducting losses includes only stock basis and loans made directly by the shareholder. Entity-level bank debt does not increase shareholder basis.",
    B: "Incorrect. A C corporation provides limited liability but its income is taxed at the entity level under §11 and again to shareholders when distributed as dividends. It fails the single-level-of-tax objective.",
    C: "Incorrect. A general partnership gives a single level of tax and, under §752(a), each partner's share of partnership debt increases outside basis. But general partners are personally liable for partnership obligations, so it fails the limited-liability objective.",
    D: "Correct. An LLC gives all members limited liability under state law. Taxed as a partnership by default under Reg. §301.7701-3, it has a single level of tax under §701, and each member's share of LLC liabilities increases outside basis under §752(a)."
  },
  tags: ["entity choice","§704(b)","§752","S corporation","LLC"]
},
{
  id: "REG-100", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Tax-exempt organizations — Types and filing requirements", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Which of the following statements regarding tax-exempt organizations is correct?",
  reference: "",
  options: [
    { key: "A", text: "A §501(c)(3) public charity may lobby without limit as long as it avoids political campaigns" },
    { key: "B", text: "A private foundation pays an excise tax on net investment income and must make minimum annual charitable distributions" },
    { key: "C", text: "An organization with gross receipts normally of $50,000 or less has no annual filing requirement with the IRS" },
    { key: "D", text: "Contributions to a §501(c)(4) social welfare organization are deductible by the donor as charitable contributions" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. A §501(c)(3) organization may not devote a substantial part of its activities to lobbying (or must stay within the §501(h) expenditure limits if it elects). Unlimited lobbying would cost it its exemption, in addition to the absolute ban on campaign activity.",
    B: "Correct. A private foundation is a §501(c)(3) organization that is not a public charity. It is subject to the §4940 excise tax on net investment income and must distribute a minimum amount annually for charitable purposes under §4942, or face additional excise taxes.",
    C: "Incorrect. Organizations with gross receipts normally of $50,000 or less are relieved of filing Form 990 or 990-EZ, but §6033(i) requires them to file the electronic notice Form 990-N each year. Failing to file for three consecutive years revokes the exemption automatically.",
    D: "Incorrect. §170(c) allows a charitable deduction for gifts to §501(c)(3) organizations and certain others, but not to §501(c)(4) social welfare organizations, which may lobby without limit."
  },
  tags: ["§501(c)(3)","private foundation","§4940","Form 990-N","§501(c)(4)"]
},
{
  id: "REG-101", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Tax return preparer rules and penalties", skill: "Remembering & Understanding", difficulty: 1,
  stem: "A CPA firm is reviewing which individuals are subject to the tax return preparer penalty provisions of the Internal Revenue Code. Which of the following individuals is a tax return preparer under IRC §7701(a)(36)?",
  reference: "",
  options: [
    { key: "A", text: "A bookkeeper who prepares her employer's corporate return as part of her regular duties." },
    { key: "B", text: "A retired accountant who prepares a neighbor's individual return for free." },
    { key: "C", text: "An attorney who, for a fee, advises on the principal item of a client's return but does not sign it." },
    { key: "D", text: "A clerk at a CPA firm who types figures supplied by the CPA into tax software." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. This overlooks the employer exception. An employee who prepares a return for his or her employer is expressly excluded from the definition under Reg. §301.7701-15(f)(1)(ii); the employer is responsible for its own return.",
    B: "Incorrect. This ignores the compensation requirement. A person who prepares a return without compensation, such as a volunteer or a neighbor helping for free, is not a tax return preparer subject to §6694 and §6695.",
    C: "Correct. A person who, for compensation, gives advice on a specific entry that constitutes a substantial portion of the return is a nonsigning tax return preparer under Reg. §301.7701-15(b)(2), even though he did not sign the return. Nonsigning preparers are subject to the §6694 understatement penalties.",
    D: "Incorrect. This treats mechanical assistance as preparation. Furnishing typing, reproducing, or other mechanical assistance is excluded from the definition because the clerk exercises no judgment over the substantive positions on the return."
  },
  tags: ["§7701(a)(36)","tax return preparer","nonsigning preparer","Reg. §301.7701-15"]
},
{
  id: "REG-102", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Licensing and disciplinary systems — State boards of accountancy", skill: "Remembering & Understanding", difficulty: 1,
  stem: "A CPA licensed in State X, her principal place of business, provides tax services to clients located in State Y under the substantial-equivalency (mobility) provisions of the Uniform Accountancy Act. Which of the following is correct regarding licensing and discipline?",
  reference: "",
  options: [
    { key: "A", text: "The AICPA may revoke her license for violating its Code of Professional Conduct." },
    { key: "B", text: "She must obtain a reciprocal license from State Y before serving those clients." },
    { key: "C", text: "Only the State X board may discipline her for services performed in State Y." },
    { key: "D", text: "Both the State X and State Y boards may discipline her for services performed in State Y." }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. This confuses a professional association with a licensing body. The AICPA is a voluntary organization that may expel or suspend a member, but only a state board of accountancy can issue or revoke a CPA license.",
    B: "Incorrect. This ignores mobility. Under the UAA's substantial-equivalency provisions, a CPA licensed in her principal place of business may practice in another state without a reciprocal license or notice to that state's board.",
    C: "Incorrect. This overlooks the consent-to-jurisdiction condition of mobility. By practicing in State Y under mobility, the CPA consents to the disciplinary authority of the State Y board for services performed there.",
    D: "Correct. Mobility permits practice across state lines without a separate license, but the CPA is subject to discipline by both her licensing board (State X) and the board of the state where the services are performed (State Y). Only a state board can suspend or revoke the license itself."
  },
  tags: ["state board of accountancy","Uniform Accountancy Act","mobility","substantial equivalency"]
},
{
  id: "REG-103", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Audits, appeals and the judicial process", skill: "Remembering & Understanding", difficulty: 2,
  stem: "After an examination, the IRS issued a notice of deficiency asserting a $9,000 income tax deficiency against an individual for Year 1. The taxpayer timely petitions the U.S. Tax Court and elects the small tax case procedure. Which of the following is correct regarding the proceeding?",
  reference: "",
  options: [
    { key: "A", text: "The deficiency must be paid before the case is heard." },
    { key: "B", text: "The decision is final and cannot be appealed." },
    { key: "C", text: "The decision serves as precedent for other taxpayers." },
    { key: "D", text: "The taxpayer may request a jury trial." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This confuses the Tax Court with the refund forums. Prepayment is required only for suits in the District Court or Court of Federal Claims; a Tax Court petition, including a small tax case, is heard without paying the deficiency.",
    B: "Correct. Under IRC §7463, a taxpayer may elect the small tax case procedure when the amount in dispute is $50,000 or less for any one year. The procedure is informal, and in exchange the decision is final and not reviewable by any other court.",
    C: "Incorrect. This assumes S case decisions carry the weight of regular Tax Court opinions. Small tax case decisions are not precedential and may not be cited as authority in any other case.",
    D: "Incorrect. This imports a District Court feature. Jury trials are available only in the U.S. District Court after paying the tax and suing for a refund; the Tax Court, in regular or small cases, sits without a jury."
  },
  tags: ["small tax case","§7463","Tax Court","audit process"]
},
{
  id: "REG-104", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Substantiation and disclosure", skill: "Application", difficulty: 2,
  stem: "A taxpayer's individual return takes a deduction that has a reasonable basis but not substantial authority. The item is not a tax shelter item. To avoid the substantial understatement penalty under IRC §6662 if the deduction is later disallowed, the taxpayer should:",
  reference: "",
  options: [
    { key: "A", text: "Attach Form 8275 disclosing the relevant facts." },
    { key: "B", text: "Do nothing, because reasonable basis alone avoids the penalty." },
    { key: "C", text: "Do nothing, because only positions with substantial authority may be disclosed." },
    { key: "D", text: "Attach Form 8275-R, the required form for all disclosed positions." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under §6662(d)(2)(B)(ii), a non-shelter item is removed from the understatement if the relevant facts are adequately disclosed on the return and there is a reasonable basis for the position. Form 8275 is the disclosure statement for such positions, and disclosure also protects the preparer under §6694(a)(2)(B).",
    B: "Incorrect. This treats reasonable basis as sufficient on its own. An undisclosed position reduces the understatement only if it has substantial authority; reasonable basis works only in combination with adequate disclosure.",
    C: "Incorrect. This inverts the purpose of Form 8275. The form exists precisely for positions that lack substantial authority but have a reasonable basis; a position that already has substantial authority does not need disclosure to avoid the penalty.",
    D: "Incorrect. This misuses Form 8275-R. That form is used only for positions contrary to a Treasury regulation; an ordinary reasonable-basis position is disclosed on Form 8275."
  },
  tags: ["Form 8275","disclosure","§6662(d)(2)(B)","reasonable basis","substantial authority"]
},
{
  id: "REG-105", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Substantiation and disclosure", skill: "Remembering & Understanding", difficulty: 1,
  stem: "A U.S. citizen living in the United States held a savings account at a foreign bank with a highest balance of $7,000 during the year and a brokerage account at another foreign bank with a highest balance of $6,000. Which of the following is correct regarding the taxpayer's FBAR (FinCEN Form 114) obligation for the year?",
  reference: "",
  options: [
    { key: "A", text: "No FBAR is required because no single account exceeded $10,000." },
    { key: "B", text: "An FBAR is required because the aggregate value of the accounts exceeded $10,000." },
    { key: "C", text: "An FBAR is required only if the foreign interest income exceeds $1,500." },
    { key: "D", text: "No FBAR is required, but Form 8938 must be filed with the return." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This applies the threshold account by account. Under the Bank Secrecy Act (31 U.S.C. §5314) the $10,000 test is applied to the aggregate value of all foreign financial accounts at any time during the year; $7,000 + $6,000 = $13,000 exceeds it.",
    B: "Correct. A U.S. person with a financial interest in foreign financial accounts whose aggregate value exceeded $10,000 at any time during the calendar year must file FinCEN Form 114 electronically with FinCEN. The FBAR is separate from the income tax return, although the account interest is still taxable and Schedule B asks about foreign accounts.",
    C: "Incorrect. This confuses the FBAR with the Schedule B interest threshold. The FBAR requirement is based on account value, not income; an account producing no income must still be reported if the aggregate threshold is exceeded.",
    D: "Incorrect. This confuses the two foreign-asset regimes. Form 8938 (FATCA) has much higher thresholds, starting at $50,000 at year-end for an unmarried taxpayer living in the United States, which this taxpayer does not meet; the FBAR is the filing that applies."
  },
  tags: ["FBAR","FinCEN Form 114","foreign bank accounts","Form 8938"]
},
{
  id: "REG-106", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Authoritative hierarchy", skill: "Remembering & Understanding", difficulty: 1,
  stem: "A CPA researching a client's transaction finds four authorities that address the issue: a Tax Court memorandum decision, a private letter ruling issued to another taxpayer, a final Treasury regulation, and an IRS publication. Which of the following ranks these sources from highest to lowest authoritative weight?",
  reference: "",
  options: [
    { key: "A", text: "Treasury regulation, Tax Court memorandum, private letter ruling, IRS publication" },
    { key: "B", text: "Private letter ruling, Treasury regulation, Tax Court memorandum, IRS publication" },
    { key: "C", text: "IRS publication, Treasury regulation, private letter ruling, Tax Court memorandum" },
    { key: "D", text: "Tax Court memorandum, IRS publication, Treasury regulation, private letter ruling" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Final Treasury regulations carry the force of law unless held invalid and rank just below the Code. Court decisions, including Tax Court memorandum opinions, are binding precedent within their jurisdiction. A private letter ruling binds the IRS only as to the requesting taxpayer (§6110(k)(3)), though it may be cited as evidence of substantial authority under Reg. §1.6662-4(d). IRS publications explain the IRS view but are not authority.",
    B: "Incorrect. This overstates a private letter ruling. A ruling is issued to one taxpayer, may not be cited as precedent by others, and ranks well below regulations and court decisions.",
    C: "Incorrect. This places IRS publications at the top. Publications are the lowest form of guidance; they cannot be relied on to establish substantial authority or to avoid penalties.",
    D: "Incorrect. This ranks a court memorandum above a valid regulation and a publication above both. A court decision does not outrank a regulation unless the court holds the regulation invalid, and publications never outrank regulations."
  },
  tags: ["authoritative hierarchy","Treasury regulations","private letter ruling","Tax Court memorandum","IRS publications"]
},
{
  id: "REG-107", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Substantiation and disclosure", skill: "Application", difficulty: 2,
  stem: "A taxpayer who itemizes made the following cash contributions to qualified public charities during the year: $200 to a church, supported by a canceled check; $600 to a food bank, supported by a bank statement; and $1,000 to a shelter, supported by a contemporaneous written acknowledgment from the charity. Which contributions are adequately substantiated under IRC §170(f)?",
  reference: "",
  options: [
    { key: "A", text: "$200 only" },
    { key: "B", text: "$200 and $1,000 only" },
    { key: "C", text: "$200 and $600 only" },
    { key: "D", text: "$200, $600, and $1,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This treats the acknowledgment for the $1,000 gift as insufficient. A contemporaneous written acknowledgment from the donee stating the amount and whether goods or services were provided satisfies both the §170(f)(8) rule for gifts of $250 or more and the §170(f)(17) record requirement.",
    B: "Correct. Any cash gift needs a bank record or written communication from the donee (§170(f)(17)); the $200 canceled check satisfies that rule and, being under $250, needs nothing more. A single gift of $250 or more additionally requires a contemporaneous written acknowledgment (§170(f)(8)), which the $1,000 gift has and the $600 gift lacks.",
    C: "Incorrect. This applies only the bank-record rule. A bank statement satisfies §170(f)(17) but not §170(f)(8): because the $600 gift is $250 or more, the taxpayer must also hold a contemporaneous written acknowledgment from the food bank.",
    D: "Incorrect. This ignores the $250 threshold entirely. The $600 gift fails the §170(f)(8) acknowledgment requirement, so it is not adequately substantiated even though a bank record exists."
  },
  tags: ["§170(f)(8)","contemporaneous written acknowledgment","substantiation","charitable contributions"]
},
{
  id: "REG-108", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Legal duties and responsibilities — Privileged communications, confidentiality and privacy acts", skill: "Application", difficulty: 2,
  stem: "Without obtaining client consent, a CPA who prepares individual returns (1) sold a list of clients' names, addresses, and income levels to a financial planning firm for referral fees, (2) sent client return files to another CPA in the same firm for review before filing, and (3) produced a client's return in response to a valid federal court subpoena. Which of these actions violate IRC §7216?",
  reference: "",
  options: [
    { key: "A", text: "1 only" },
    { key: "B", text: "1 and 2 only" },
    { key: "C", text: "1 and 3 only" },
    { key: "D", text: "1, 2, and 3" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Selling client tax return information to an unrelated firm for referral fees is a use and disclosure for a purpose other than return preparation without the client's written consent, which violates §7216 and triggers the §6713 civil penalty. Actions 2 and 3 fall within regulatory exceptions.",
    B: "Incorrect. This treats intra-firm review as a disclosure. Reg. §301.7216-2(c) expressly permits disclosure to other officers, employees, or preparers within the same firm for the purpose of preparing or reviewing the return, with no consent required.",
    C: "Incorrect. This overlooks the court-order exception. Reg. §301.7216-2(f) permits disclosure pursuant to a court order or subpoena; the CPA must comply with a valid subpoena and does not violate §7216 by doing so.",
    D: "Incorrect. Only the first action is prohibited. Both intra-firm disclosures for return preparation and disclosures compelled by a court are excepted from §7216."
  },
  tags: ["§7216","§6713","tax return information","confidentiality","privacy"]
},
{
  id: "REG-109", area: "II", areaName: "Business Law",
  topic: "Agency — Duties and liabilities of agents and principals", skill: "Application", difficulty: 2,
  stem: "A delivery driver employed by Pax Foods finished the assigned route, then drove the company van 40 miles to visit a friend. On that trip the driver negligently struck a cyclist. Which of the following is correct regarding liability to the cyclist?",
  reference: "",
  options: [
    { key: "A", text: "Both Pax and the driver are liable." },
    { key: "B", text: "The driver only is liable." },
    { key: "C", text: "Pax only is liable." },
    { key: "D", text: "Neither Pax nor the driver is liable." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This assumes that driving the employer's vehicle puts the driver within the scope of employment. A 40-mile personal trip after the route ended is a frolic, a substantial departure for personal purposes, so respondeat superior does not reach Pax.",
    B: "Correct. Under respondeat superior an employer is liable only for torts committed within the scope of employment. A substantial personal detour (a frolic) is outside that scope, so Pax is not vicariously liable, but the driver remains personally liable for his own negligence.",
    C: "Incorrect. This treats the agent as shielded because he was acting for a principal. An agent is always personally liable for his own torts; the principal's vicarious liability is in addition to, never in place of, the agent's.",
    D: "Incorrect. Someone is liable: the driver committed the negligent act and is personally responsible regardless of whether the employer is also liable."
  },
  tags: ["respondeat superior","scope of employment","frolic and detour","agency","tort liability"]
},
{
  id: "REG-110", area: "II", areaName: "Business Law",
  topic: "Contracts — Performance and discharge", skill: "Application", difficulty: 2,
  stem: "A builder contracted to construct an office building for $500,000. The builder completed the building but, in good faith, installed a brand of interior door hardware different from the one specified. The hardware is of equal quality and would cost $4,000 to replace. The owner refused to pay anything. What amount may the builder recover?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$4,000" },
    { key: "C", text: "$496,000" },
    { key: "D", text: "$500,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. This treats any deviation as a material breach excusing payment. The doctrine of substantial performance prevents that forfeiture when the builder performed in good faith with only a minor deviation.",
    B: "Incorrect. $4,000 is the owner's damages for the defect, not the builder's recovery. The owner offsets that amount against the contract price; it is not the amount the builder receives.",
    C: "Correct. A party who renders substantial performance, deviating only in minor, good-faith respects, is entitled to the contract price less the damages caused by the defect: $500,000 - $4,000 = $496,000.",
    D: "Incorrect. Substantial performance does not entitle the builder to the full price. The owner remains entitled to deduct the cost of curing the deviation, however minor."
  },
  tags: ["substantial performance","discharge","material breach"]
},
{
  id: "REG-111", area: "II", areaName: "Business Law",
  topic: "Contracts — Breach and remedies", skill: "Application", difficulty: 2,
  stem: "On March 1, a seller agreed in writing to sell a rare antique car to a buyer, with delivery and payment due June 1. On April 10, the seller told the buyer that she had decided to keep the car and would not deliver it. Which of the following is correct regarding the buyer's rights on April 10?",
  reference: "",
  options: [
    { key: "A", text: "The buyer may treat the contract as breached and sue immediately." },
    { key: "B", text: "The buyer must wait until June 1 to sue." },
    { key: "C", text: "The buyer must first demand adequate assurance of performance." },
    { key: "D", text: "The buyer must first tender the purchase price." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. A clear and unequivocal statement before the performance date that a party will not perform is an anticipatory repudiation (UCC §2-610). The nonbreaching party may treat it as a present breach and pursue remedies immediately, including specific performance for unique goods under §2-716.",
    B: "Incorrect. This ignores the doctrine of anticipatory repudiation. An unequivocal refusal to perform before the due date is treated as an immediate breach; the buyer need not wait for June 1 to arrive.",
    C: "Incorrect. A demand for adequate assurance under §2-609 is the tool for ambiguous signs of insecurity. When the repudiation is unequivocal, no demand is required before the buyer resorts to remedies.",
    D: "Incorrect. Repudiation by the seller excuses the buyer from tendering its own performance. Requiring a tender would be a useless act once the seller has refused to deliver."
  },
  tags: ["anticipatory repudiation","UCC §2-610","breach","remedies"]
},
{
  id: "REG-112", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Qualified health plans (ACA)", skill: "Application", difficulty: 2,
  stem: "A corporation with 120 full-time employees offered no health coverage during the current year, and 15 of its full-time employees received a premium tax credit for coverage purchased through the Marketplace. The corporation's employer shared responsibility payment under IRC §4980H is computed on how many full-time employees?",
  reference: "",
  options: [
    { key: "A", text: "0" },
    { key: "B", text: "15" },
    { key: "C", text: "90" },
    { key: "D", text: "120" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. This assumes that no employer penalty exists, perhaps because the individual shared responsibility payment was reduced to zero. The employer provisions of §4980H remain in effect for applicable large employers with 50 or more full-time employees.",
    B: "Incorrect. A payment measured only by employees who actually received a credit is the §4980H(b) payment, which applies when an employer offers coverage that is unaffordable or lacks minimum value. When no coverage is offered at all, the broader §4980H(a) payment applies.",
    C: "Correct. An applicable large employer that offers no minimum essential coverage owes the §4980H(a) payment if at least one full-time employee receives a premium tax credit. The payment is computed on all full-time employees minus the first 30: 120 - 30 = 90.",
    D: "Incorrect. This forgets the statutory exclusion of the first 30 full-time employees. The §4980H(a) payment applies to the number of full-time employees in excess of 30."
  },
  tags: ["Affordable Care Act","§4980H","applicable large employer","employer shared responsibility","premium tax credit"]
},
{
  id: "REG-113", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Anti-bribery (FCPA)", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Nord Inc., a U.S. corporation whose stock is listed on a national exchange, sells equipment in a foreign country. Which of the following payments by Nord violates the anti-bribery provisions of the Foreign Corrupt Practices Act?",
  reference: "",
  options: [
    { key: "A", text: "$200 to a customs clerk to expedite routine processing of import paperwork" },
    { key: "B", text: "Reasonable travel expenses for a foreign official to inspect equipment at Nord's factory" },
    { key: "C", text: "$50,000 routed through a local consultant to a minister to award Nord a government contract" },
    { key: "D", text: "A payment to a foreign official expressly permitted by that country's written law" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. A small payment to expedite a routine, nondiscretionary governmental action is a facilitating (grease) payment, which is excepted from the FCPA anti-bribery prohibition, although it must still be accurately recorded in the issuer's books.",
    B: "Incorrect. Reasonable and bona fide expenditures, such as travel and lodging directly related to product demonstration or contract performance, are an affirmative defense under the FCPA.",
    C: "Correct. A corrupt payment to a foreign official to obtain or retain business is the core FCPA violation. Routing the money through a third party does not avoid liability; the Act covers payments made directly or indirectly with knowledge, including conscious disregard, that they will reach an official.",
    D: "Incorrect. A payment lawful under the written laws of the foreign country is an affirmative defense under the FCPA. Only written law qualifies; local custom or unwritten practice does not."
  },
  tags: ["Foreign Corrupt Practices Act","anti-bribery","facilitating payments","foreign official"]
},
{
  id: "REG-114", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Bankruptcy (types, discharge and avoidance)", skill: "Remembering & Understanding", difficulty: 2,
  stem: "Which of the following statements regarding the federal Bankruptcy Code is correct?",
  reference: "",
  options: [
    { key: "A", text: "A corporation may file a voluntary petition under Chapter 13." },
    { key: "B", text: "An individual's Chapter 7 case may be dismissed under the means test if income exceeds the state median." },
    { key: "C", text: "Creditors may file an involuntary petition against an individual under Chapter 13." },
    { key: "D", text: "A Chapter 7 discharge releases the debtor from domestic support obligations." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Chapter 13 is available only to an individual with regular income, including a sole proprietor. Corporations and partnerships must use Chapter 7 or Chapter 11.",
    B: "Correct. Under §707(b), added by BAPCPA, if an individual debtor's current monthly income exceeds the state median and disposable income exceeds specified thresholds, a presumption of abuse arises and the Chapter 7 case may be dismissed or, with the debtor's consent, converted to Chapter 13.",
    C: "Incorrect. Involuntary petitions are permitted only under Chapters 7 and 11. A Chapter 13 case can be commenced only by the debtor's own voluntary petition.",
    D: "Incorrect. Domestic support obligations are excepted from discharge under §523(a)(5) in every chapter, along with debts obtained by fraud, most recent taxes, and student loans absent undue hardship."
  },
  tags: ["bankruptcy","BAPCPA","means test","Chapter 7","Chapter 11","Chapter 13","involuntary petition"]
},
{
  id: "REG-115", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Employment taxes and worker classification", skill: "Application", difficulty: 2,
  stem: "An employee earned $210,000 of wages from one employer during the current year. The Social Security wage base is $176,100, the Social Security rate is 6.2%, the Medicare rate is 1.45%, and the 0.9% Additional Medicare tax applies to wages over $200,000. What amount of FICA tax must the employer itself pay on these wages?",
  reference: "",
  options: [
    { key: "A", text: "$13,471.65" },
    { key: "B", text: "$13,963.20" },
    { key: "C", text: "$14,053.20" },
    { key: "D", text: "$16,155.00" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $13,471.65 = 7.65% x $176,100, which caps Medicare tax at the Social Security wage base. Only the 6.2% Social Security tax is limited by the wage base; the 1.45% Medicare tax applies to all wages.",
    B: "Correct. The employer's share under §3111 is 6.2% x $176,100 = $10,918.20 of Social Security tax plus 1.45% x $210,000 = $3,045.00 of Medicare tax, a total of $13,963.20. There is no employer share of the Additional Medicare tax.",
    C: "Incorrect. $14,053.20 adds $90 of Additional Medicare tax (0.9% x $10,000). The 0.9% tax is imposed on the employee only under §3101(b)(2); the employer must withhold it but does not match it.",
    D: "Incorrect. $16,155.00 = 7.65% x $210,000, applying the Social Security rate to all wages. Social Security tax stops at the $176,100 wage base; only Medicare tax has no ceiling."
  },
  tags: ["FICA","Social Security wage base","Additional Medicare tax","employment taxes","withholding"]
},
{
  id: "REG-116", area: "II", areaName: "Business Law",
  topic: "Business structure — Selection, formation, operation and termination", skill: "Application", difficulty: 1,
  stem: "Before Zenith Corp. was incorporated, its promoter signed a one-year office lease in Zenith's name. Zenith was incorporated two weeks later when its articles were filed, and it moved into the office, although its board never expressly adopted the lease. Who is liable to the landlord on the lease?",
  reference: "",
  options: [
    { key: "A", text: "The promoter only" },
    { key: "B", text: "Zenith only" },
    { key: "C", text: "Both the promoter and Zenith" },
    { key: "D", text: "Neither the promoter nor Zenith" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. The promoter is liable, but so is the corporation. Adoption of a pre-incorporation contract may be implied from conduct, and Zenith adopted the lease by knowingly occupying the premises and accepting its benefits.",
    B: "Incorrect. This assumes that signing in the corporation's name, or the corporation's later adoption, shifts liability away from the promoter. Adoption adds the corporation as an obligor; only a novation agreed to by the landlord releases the promoter.",
    C: "Correct. A promoter is personally liable on contracts made on behalf of a corporation not yet in existence. The corporation becomes liable when it adopts the contract, expressly or impliedly by accepting its benefits, and adoption does not release the promoter absent a novation.",
    D: "Incorrect. This treats the contract as void because the corporation did not exist when it was signed. The promoter is liable for contracting on behalf of a nonexistent principal, and the corporation became liable by implied adoption."
  },
  tags: ["promoter liability","pre-incorporation contract","adoption","novation","RMBCA"]
},
{
  id: "REG-117", area: "II", areaName: "Business Law",
  topic: "Debtor-creditor relationships — Suretyship, secured transactions and bankruptcy distributions", skill: "Application", difficulty: 2,
  stem: "A surety guaranteed, without compensation, a $100,000 bank loan to a debtor. Without the surety's knowledge or consent, the bank and the debtor later agreed to extend the loan's maturity by one year. The debtor then defaulted and filed for bankruptcy, and the bank demanded payment from the surety. Which of the following is correct?",
  reference: "",
  options: [
    { key: "A", text: "The surety is fully discharged because of the extension made without consent." },
    { key: "B", text: "The surety is discharged because the debtor's bankruptcy extinguished the debt." },
    { key: "C", text: "The surety must pay the full $100,000." },
    { key: "D", text: "The surety is discharged only to the extent it can prove harm from the extension." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. A binding extension of time granted by the creditor to the principal debtor without the surety's consent is a material modification of the guaranteed obligation. Under the traditional suretyship rule an uncompensated (gratuitous) surety is released completely, whether or not it can show actual harm.",
    B: "Incorrect. The debtor's discharge in bankruptcy is a personal defense of the debtor that the surety cannot assert. Bankruptcy Code §524(e) provides that the debtor's discharge does not affect the liability of any other entity on the debt.",
    C: "Incorrect. This assumes a surety's obligation is unaffected by dealings between creditor and debtor. A surety agreed to bear a particular risk; a binding extension without its consent changes that risk and releases a gratuitous surety.",
    D: "Incorrect. Discharge only to the extent of harm is the rule for compensated sureties, such as commercial surety companies. Because this surety received no compensation, the traditional rule of complete discharge applies."
  },
  tags: ["suretyship","gratuitous surety","material modification","extension of time","surety defenses"]
},
{
  id: "REG-118", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets", skill: "Application", difficulty: 1,
  stem: "Pike Corp. purchased a machine for use in its business. Pike paid $50,000 for the machine, $3,000 of sales tax, $2,000 of freight, $4,000 for installation and testing, and $1,500 for a one-year routine maintenance contract. Pike also paid $900 of interest on the loan used to buy the machine. What is Pike's depreciable basis in the machine?",
  reference: "",
  options: [
    { key: "A", text: "$55,000" },
    { key: "B", text: "$59,000" },
    { key: "C", text: "$60,500" },
    { key: "D", text: "$61,400" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $55,000 omits the $4,000 of installation and testing costs ($50,000 + $3,000 + $2,000). Under Reg. §1.263(a)-2, amounts paid to put the asset in the condition and location for its intended use are capitalized as part of cost basis.",
    B: "Correct. Cost basis under §1012 includes the purchase price and the costs of acquiring the asset and placing it in service: $50,000 + $3,000 sales tax + $2,000 freight + $4,000 installation and testing = $59,000. The maintenance contract and the interest are currently deductible expenses, not part of basis.",
    C: "Incorrect. $60,500 adds the $1,500 maintenance contract ($59,000 + $1,500). Routine maintenance does not improve the asset or extend its life and is deducted as incurred under Reg. §1.162-4 rather than capitalized.",
    D: "Incorrect. $61,400 adds both the maintenance contract and the interest ($59,000 + $1,500 + $900). Interest on debt used to buy equipment is deductible business interest under §163; capitalization of interest is required only for property the taxpayer produces under §263A(f)."
  },
  tags: ["§1012","cost basis","capitalization","Reg. §1.263(a)-2"]
},
{
  id: "REG-119", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets", skill: "Application", difficulty: 2,
  stem: "A taxpayer purchased a house for $300,000 and used it as a personal residence. On January 1, Year 6, when the house had a fair market value of $260,000, the taxpayer converted it to rental property. The taxpayer claimed $6,000 of depreciation in Year 6 and sold the property on December 31, Year 6, for $240,000. What amount of loss should the taxpayer recognize?",
  reference: "",
  options: [
    { key: "A", text: "$14,000" },
    { key: "B", text: "$20,000" },
    { key: "C", text: "$54,000" },
    { key: "D", text: "$60,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under Reg. §1.165-9(b), the basis for computing a loss on converted property is the lesser of adjusted basis ($300,000) or FMV at conversion ($260,000), reduced by depreciation allowed: $260,000 - $6,000 = $254,000. Loss is $254,000 - $240,000 = $14,000. The decline in value while the house was personal-use is a nondeductible personal loss.",
    B: "Incorrect. $20,000 is $260,000 - $240,000, which starts from FMV at conversion but ignores the $6,000 of depreciation. Under §1016(a)(2), basis must be reduced by depreciation allowed or allowable, giving a $254,000 loss basis.",
    C: "Incorrect. $54,000 is $294,000 - $240,000, which uses original cost less depreciation ($300,000 - $6,000) as the loss basis. That is the basis for gain; for a loss, Reg. §1.165-9(b) limits basis to the lower FMV at conversion so the pre-conversion personal decline is not deducted.",
    D: "Incorrect. $60,000 is $300,000 - $240,000, which uses the full original cost with no reduction for depreciation and no FMV limitation. Both the depreciation adjustment under §1016 and the lesser-of rule for converted property apply."
  },
  tags: ["conversion to business use","dual basis","Reg. §1.165-9","depreciation basis"]
},
{
  id: "REG-120", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets", skill: "Application", difficulty: 2,
  stem: "On November 1, Year 5, Sol sold 100 shares of Ivy Corp. stock for $5,000. Sol had purchased the shares in Year 1 for $8,000. On November 20, Year 5, Sol purchased 100 shares of Ivy Corp. for $5,500, and on December 15, Year 5, purchased another 100 shares for $5,200. What is Sol's basis in the shares purchased on November 20?",
  reference: "",
  options: [
    { key: "A", text: "$5,500" },
    { key: "B", text: "$7,000" },
    { key: "C", text: "$8,200" },
    { key: "D", text: "$8,500" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. $5,500 is the cash paid, with no adjustment. Because substantially identical shares were bought 19 days after the loss sale, §1091 disallows the $3,000 loss and requires it to be added to the basis of the replacement shares.",
    B: "Incorrect. $7,000 adds only half the loss ($5,500 + $1,500). Proportionate disallowance applies only when fewer replacement shares are acquired than were sold; Sol sold 100 shares and bought 100 within the window, so the entire $3,000 loss is added.",
    C: "Incorrect. $8,200 attaches the disallowed loss to the December 15 shares ($5,200 + $3,000). Those shares were bought 44 days after the sale, outside the 30-day window, so they are not the replacement shares; the loss attaches to the November 20 lot.",
    D: "Correct. The November 20 purchase is within 30 days after the November 1 sale, so the $3,000 loss ($5,000 - $8,000) is disallowed under §1091(a). Under §1091(d), the disallowed loss is added to the basis of the replacement shares: $5,500 + $3,000 = $8,500."
  },
  tags: ["§1091","wash sale","basis adjustment","holding period"]
},
{
  id: "REG-121", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets", skill: "Application", difficulty: 2,
  stem: "Vale Corp., a calendar-year corporation, began business operations on July 1, Year 1. Before opening, Vale incurred $53,000 of start-up costs for market surveys, employee training and pre-opening advertising. Vale elects to deduct start-up costs to the extent allowed. What amount may Vale deduct for start-up costs in Year 1 (rounded to the nearest dollar)?",
  reference: "",
  options: [
    { key: "A", text: "$1,767" },
    { key: "B", text: "$3,700" },
    { key: "C", text: "$6,600" },
    { key: "D", text: "$53,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $1,767 amortizes the entire $53,000 over 180 months with no immediate deduction ($53,000 / 180 x 6). A reduced first-year deduction of $2,000 is still available under §195(b)(1)(A) because costs did not reach $55,000.",
    B: "Correct. Under §195(b), up to $5,000 is deductible in the year business begins, reduced by the amount by which start-up costs exceed $50,000: $5,000 - ($53,000 - $50,000) = $2,000. The remaining $51,000 is amortized over 180 months beginning July: $51,000 / 180 x 6 = $1,700. Total Year 1 deduction is $2,000 + $1,700 = $3,700.",
    C: "Incorrect. $6,600 takes the full $5,000 immediate deduction plus $48,000 / 180 x 6 = $1,600 of amortization. Because start-up costs exceed $50,000 by $3,000, the immediate deduction is reduced dollar-for-dollar to $2,000 under §195(b)(1)(A).",
    D: "Incorrect. $53,000 deducts all start-up costs currently. Pre-opening expenditures are not ordinary and necessary expenses of an existing business under §162; they are capitalized and recovered only through the §195 election and 180-month amortization."
  },
  tags: ["§195","start-up costs","amortization","180 months"]
},
{
  id: "REG-122", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Cost recovery — Depreciation (MACRS, bonus, §179) and amortization", skill: "Application", difficulty: 2,
  stem: "Wick Corp., a calendar-year taxpayer, placed the following new assets in service during Year 1 and did not elect §179 or bonus depreciation: office furniture costing $60,000 on February 10, computers costing $30,000 on May 5, and a delivery truck costing $90,000 on November 20. Which MACRS averaging convention applies to these assets for Year 1?",
  reference: "",
  options: [
    { key: "A", text: "Half-year convention for all three assets" },
    { key: "B", text: "Mid-quarter convention for all three assets" },
    { key: "C", text: "Half-year convention for the furniture and computers; mid-quarter convention for the truck" },
    { key: "D", text: "Mid-month convention for all three assets" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The half-year convention is the default under §168(d)(1), but it is displaced when more than 40% of the aggregate basis of personal property is placed in service in the last quarter. The truck alone is $90,000 / $180,000 = 50%, which exceeds 40%.",
    B: "Correct. Total personal property placed in service is $60,000 + $30,000 + $90,000 = $180,000, of which $90,000 (50%) was placed in service in the fourth quarter. Because more than 40% was placed in service in the last three months of the year, §168(d)(3) requires the mid-quarter convention for all personal property placed in service during the year, not just the fourth-quarter asset.",
    C: "Incorrect. The mid-quarter convention is not applied asset by asset. Once the 40% test is failed, §168(d)(3) applies the mid-quarter convention to every item of personal property placed in service during the year, including the furniture and computers.",
    D: "Incorrect. The mid-month convention under §168(d)(2) applies only to residential rental and nonresidential real property. Furniture, computers and trucks are personal property and use either the half-year or the mid-quarter convention."
  },
  tags: ["MACRS","mid-quarter convention","40% test","§168"]
},
{
  id: "REG-123", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Cost recovery — Depreciation (MACRS, bonus, §179) and amortization", skill: "Application", difficulty: 2,
  stem: "Yost LLC placed the following assets in service in Year 1: new 7-year manufacturing equipment, $400,000; used 5-year trucks purchased from an unrelated dealer, $150,000; a new office building (39-year property), $2,000,000; and qualified improvement property, $120,000. Yost does not elect §179 or elect out of bonus depreciation, and 100% bonus depreciation applies to qualified property. What is Yost's Year 1 bonus depreciation?",
  reference: "",
  options: [
    { key: "A", text: "$520,000" },
    { key: "B", text: "$550,000" },
    { key: "C", text: "$670,000" },
    { key: "D", text: "$2,670,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $520,000 excludes the used trucks ($400,000 + $120,000). Under §168(k)(2)(E)(ii), used property qualifies for bonus depreciation if the taxpayer did not previously use it and acquired it by purchase from an unrelated party.",
    B: "Incorrect. $550,000 excludes the qualified improvement property ($400,000 + $150,000). QIP is 15-year property under §168(e)(6) and is expressly qualified property for bonus depreciation.",
    C: "Correct. Qualified property under §168(k)(2) is MACRS property with a recovery period of 20 years or less, including eligible used property and qualified improvement property. Equipment $400,000 + used trucks $150,000 + QIP $120,000 = $670,000. The 39-year office building is excluded.",
    D: "Incorrect. $2,670,000 includes the office building. Nonresidential real property has a 39-year recovery period, which exceeds the 20-year limit in §168(k)(2)(A), so it is not qualified property for bonus depreciation."
  },
  tags: ["§168(k)","bonus depreciation","OBBBA","qualified improvement property","used property"]
},
{
  id: "REG-124", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 2,
  stem: "In Year 2 a taxpayer sold for $30,000 cryptocurrency bought 15 months earlier for $18,000, sold for $12,000 stock bought 7 months earlier for $15,000, and paid for a $5,000 computer with cryptocurrency bought 2 years earlier for $2,000. What is the taxpayer's net capital gain for Year 2?",
  reference: "",
  options: [
    { key: "A", text: "$9,000" },
    { key: "B", text: "$12,000" },
    { key: "C", text: "$14,000" },
    { key: "D", text: "$15,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $9,000 = $12,000 - $3,000 omits the gain on the cryptocurrency used to buy the computer. Virtual currency is property (Notice 2014-21), and using it to buy goods is a sale or exchange on which gain is recognized under §1001.",
    B: "Correct. Cryptocurrency sold (held more than one year): $30,000 - $18,000 = $12,000 long-term gain. Cryptocurrency spent on the computer (held more than one year): $5,000 - $2,000 = $3,000 long-term gain. Stock held seven months: $12,000 - $15,000 = $3,000 short-term loss. Net long-term gain $15,000 - net short-term loss $3,000 = $12,000 net capital gain (§1222(11)).",
    C: "Incorrect. $14,000 = $12,000 + $5,000 - $3,000 treats the full $5,000 value of the computer as gain. Gain on the exchange is the fair market value received less the $2,000 basis of the currency given up (§1001), or $3,000.",
    D: "Incorrect. $15,000 is the net long-term gain before netting the short-term loss. Under §1222 a net short-term capital loss is netted against net long-term capital gain in the same year, not carried forward while gains remain."
  },
  tags: ["virtual currency","capital gain","holding period","§1222"]
},
{
  id: "REG-125", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 2,
  stem: "A taxpayer settled a lawsuit for personal physical injuries suffered in a collision and received the following:\n\n| Description | Amount |\n|---|---|\n| Damages for the physical injuries, including $60,000 for lost wages | $200,000 |\n| Punitive damages | $50,000 |\n| Damages for emotional distress arising from the physical injuries | $30,000 |\n| Interest on the award for the period before payment | $8,000 |\n\nWhat amount is included in the taxpayer's gross income?",
  reference: "",
  options: [
    { key: "A", text: "$50,000" },
    { key: "B", text: "$58,000" },
    { key: "C", text: "$88,000" },
    { key: "D", text: "$118,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $50,000 omits the interest. Interest on an award compensates for the delay in payment, not for the injury, and is taxable ordinary income under §61(a)(4).",
    B: "Correct. §104(a)(2) excludes damages received on account of personal physical injuries, including the lost-wages component and the $30,000 of emotional distress damages that flow from the physical injury. Punitive damages are never excluded. Includible = $50,000 punitive damages + $8,000 interest = $58,000.",
    C: "Incorrect. $88,000 = $50,000 + $30,000 + $8,000 taxes the emotional distress damages. Emotional distress damages are taxable when the distress itself is the origin of the claim, but here the distress arose from a physical injury and is excluded under §104(a)(2).",
    D: "Incorrect. $118,000 = $60,000 + $50,000 + $8,000 taxes the lost-wages portion. Damages that replace wages are excluded when they are received on account of a physical injury (Reg. §1.104-1(c))."
  },
  tags: ["§104(a)(2)","damages","punitive damages","emotional distress","exclusions"]
},
{
  id: "REG-126", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 2,
  stem: "A cash-basis taxpayer died on September 30 of the current year. The following amounts relate to the taxpayer:\n\n| Description | Amount |\n|---|---|\n| Salary received before death | $60,000 |\n| Salary earned before death, paid to the estate on October 10 | $5,000 |\n| Dividend declared September 15, paid to the estate on October 5 | $2,000 |\n| Interest accrued after September 30, paid to the estate on December 31 | $3,000 |\n\nWhat amount of income is reported on the decedent's final Form 1040?",
  reference: "",
  options: [
    { key: "A", text: "$60,000" },
    { key: "B", text: "$65,000" },
    { key: "C", text: "$67,000" },
    { key: "D", text: "$70,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. A cash-basis decedent's final return includes only amounts actually or constructively received before death (Reg. §1.451-1(b)), the $60,000 of salary. The unpaid salary, the dividend paid after death and the post-death interest are income in respect of a decedent under §691, taxed to the estate when received.",
    B: "Incorrect. $65,000 includes the $5,000 of salary paid after death. Although earned before death, it was not received by the cash-basis decedent and is income in respect of a decedent reported by the estate (§691(a)).",
    C: "Incorrect. $67,000 includes the unpaid salary and the dividend because the dividend was declared before death. A cash-basis taxpayer reports a dividend when it is received or made unqualifiedly available, not on the declaration or record date; it is income in respect of a decedent to the estate under §691.",
    D: "Incorrect. $70,000 includes every item, effectively placing the decedent on the accrual method. Income is not prorated or accrued for a cash-basis decedent; §691 taxes the amounts unpaid at death to the recipient."
  },
  tags: ["decedent's final return","income in respect of a decedent","§691","§213(c)","cash basis"]
},
{
  id: "REG-127", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Reporting of items from pass-through entities", skill: "Application", difficulty: 2,
  stem: "A member of an LLC taxed as a partnership materially participates in its business. The member's Schedule K-1 for the year reports:\n\n| Description | Amount |\n|---|---|\n| Ordinary business income | $45,000 |\n| Guaranteed payments for services | $20,000 |\n| Net long-term capital gain | $6,000 |\n| Tax-exempt interest | $900 |\n\nWhat amount is included in the member's net earnings from self-employment?",
  reference: "",
  options: [
    { key: "A", text: "$45,000" },
    { key: "B", text: "$65,000" },
    { key: "C", text: "$71,000" },
    { key: "D", text: "$71,900" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $45,000 excludes the guaranteed payments. Under §1402(a), a partner's net earnings from self-employment include both the distributive share of ordinary business income and guaranteed payments for services (§707(c)); a partner is not an employee and receives no wages.",
    B: "Correct. Net earnings from self-employment = $45,000 ordinary business income + $20,000 guaranteed payments for services = $65,000 (§1402(a)). Gains from the sale of capital assets are excluded by §1402(a)(3), and tax-exempt interest is excluded from income entirely.",
    C: "Incorrect. $71,000 adds the $6,000 capital gain. §1402(a)(3) excludes gains from the sale or exchange of capital assets from net earnings from self-employment regardless of the partner's level of participation.",
    D: "Incorrect. $71,900 includes the capital gain and the tax-exempt interest. Neither is self-employment income; tax-exempt interest is excluded from gross income under §103 and only increases the member's outside basis."
  },
  tags: ["Schedule K-1","separately stated items","guaranteed payments","self-employment income","§1402"]
},
{
  id: "REG-128", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Reporting of items from pass-through entities", skill: "Remembering & Understanding", difficulty: 1,
  stem: "An individual is the sole member of a consulting LLC that has made no entity classification election. In the current year the LLC earned $90,000 of net income and the member withdrew $50,000 for personal use. How is the LLC's activity reported on the member's Form 1040?",
  reference: "",
  options: [
    { key: "A", text: "$90,000 of net profit on Schedule C" },
    { key: "B", text: "$50,000 of ordinary income on Schedule E" },
    { key: "C", text: "$90,000 of ordinary income from a Schedule K-1 (Form 1065)" },
    { key: "D", text: "$50,000 as a dividend from a Form 1120 filer" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under Reg. §301.7701-3(b)(1), a domestic single-member LLC that makes no election is disregarded as separate from its owner. The member reports the $90,000 of net profit on Schedule C and pays self-employment tax on it; the $50,000 of withdrawals has no effect on taxable income.",
    B: "Incorrect. The owner of a disregarded entity is taxed on all of its net income as earned, not on the amount withdrawn. Draws from one's own business are not a taxable event, and Schedule E is not used for a sole proprietorship (Reg. §301.7701-3).",
    C: "Incorrect. Form 1065 and Schedule K-1 are for partnerships, which require at least two owners. A single-member LLC cannot be classified as a partnership under Reg. §301.7701-3.",
    D: "Incorrect. An LLC is taxed as a corporation only if it elects that classification on Form 8832 (or Form 2553 for S status). With no election, the default under Reg. §301.7701-3(b) for a single-member LLC is disregarded entity, not a C corporation."
  },
  tags: ["disregarded entity","single-member LLC","Schedule C","check-the-box"]
},
{
  id: "REG-129", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  stem: "A taxpayer's home was damaged in a federally declared disaster. Before the casualty the home was worth $500,000; afterward it was worth $380,000. The taxpayer's adjusted basis in the home was $300,000, and insurance reimbursed $70,000. The taxpayer's AGI is $150,000 and the taxpayer itemizes. What is the taxpayer's deductible casualty loss?",
  reference: "",
  options: [
    { key: "A", text: "$34,900" },
    { key: "B", text: "$49,900" },
    { key: "C", text: "$50,000" },
    { key: "D", text: "$214,900" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The loss is the lesser of the decline in FMV ($500,000 - $380,000 = $120,000) or adjusted basis ($300,000): $120,000. Less insurance $70,000 = $50,000; less the $100 per-event floor = $49,900; less 10% of AGI ($15,000) = $34,900 deductible under §165(h).",
    B: "Incorrect. $49,900 applies the $100 floor but omits the 10%-of-AGI limitation. §165(h)(2) allows net personal casualty losses only to the extent they exceed 10% of AGI.",
    C: "Incorrect. $50,000 is the loss after insurance but before both the $100 per-event reduction (§165(h)(1)) and the 10%-of-AGI floor (§165(h)(2)).",
    D: "Incorrect. $214,900 uses the $300,000 adjusted basis as the measure of loss. For partial destruction of property, the loss is the lesser of the decline in FMV or basis (Reg. §1.165-7(b)); basis governs only when it is the lower figure."
  },
  tags: ["§165(h)","casualty loss","federally declared disaster","10% AGI floor","Form 4684"]
},
{
  id: "REG-130", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Loss limitations — Capital, basis, passive, at-risk, hobby and wash sale", skill: "Application", difficulty: 2,
  stem: "A single taxpayer with AGI of $80,000 incurred the following in the current year:\n\n| Description | Amount |\n|---|---|\n| Loss on sale of a personal automobile | $9,000 |\n| Loss on sale of stock repurchased 19 days after the sale | $4,000 |\n| Net loss from a dog-breeding activity pursued for recreation | $4,500 |\n| Loss on sale of stock held three years, not repurchased | $2,500 |\n\nWhat total amount of these losses may the taxpayer deduct in the current year?",
  reference: "",
  options: [
    { key: "A", text: "$2,500" },
    { key: "B", text: "$3,000" },
    { key: "C", text: "$6,500" },
    { key: "D", text: "$7,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The personal automobile loss is nondeductible under §165(c). The repurchase within 30 days makes the $4,000 loss a wash sale disallowed by §1091. The recreational activity is not engaged in for profit, and hobby expenses are nondeductible miscellaneous itemized deductions (§183, §67(g)). Only the $2,500 long-term capital loss is deductible, and it is within the $3,000 limit of §1211(b).",
    B: "Incorrect. $3,000 treats the §1211(b) capital loss limit as the deduction. The limit is a ceiling; the taxpayer's only allowable capital loss is $2,500, and the disallowed wash sale loss cannot be used to fill the remainder.",
    C: "Incorrect. $6,500 = $4,000 + $2,500 deducts the wash sale loss. Because substantially identical stock was bought within 30 days after the sale, §1091 disallows the loss and adds it to the basis of the replacement shares.",
    D: "Incorrect. $7,000 = $2,500 + $4,500 deducts the hobby loss. Under §183 gross income from an activity not engaged in for profit is includible, but the expenses are miscellaneous itemized deductions that are not allowed (§67(g)), so no deductible loss results."
  },
  tags: ["§165(c)","personal-use asset","wash sale","hobby loss §183","§469(i)","capital loss"]
},
{
  id: "REG-131", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Loss limitations — Capital, basis, passive, at-risk, hobby and wash sale", skill: "Application", difficulty: 2,
  stem: "A general partner who materially participates had an outside basis of $18,000 at the beginning of Year 1. During Year 1 the partnership allocated the partner a $50,000 ordinary loss and $2,000 of tax-exempt interest, distributed $5,000 cash to the partner, and the partner's share of recourse liabilities rose by $10,000. The amount at risk equals basis. What amount of the loss may the partner deduct for Year 1?",
  reference: "",
  options: [
    { key: "A", text: "$15,000" },
    { key: "B", text: "$23,000" },
    { key: "C", text: "$25,000" },
    { key: "D", text: "$50,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $15,000 = $18,000 + $2,000 - $5,000 omits the $10,000 increase in the partner's share of liabilities. Under §752(a) an increase in a partner's share of partnership liabilities is treated as a cash contribution that increases outside basis.",
    B: "Incorrect. $23,000 = $18,000 + $10,000 - $5,000 omits the tax-exempt interest. Tax-exempt income increases outside basis under §705(a)(1)(B) even though it is not taxable.",
    C: "Correct. Basis before the loss = $18,000 + $2,000 tax-exempt interest + $10,000 liability increase - $5,000 distribution = $25,000. Under §704(d) the partner may deduct the loss only to the extent of that basis, $25,000; the other $25,000 is suspended and carried forward. Because the partner materially participates and is at risk for the full basis, §465 and §469 impose no further limit.",
    D: "Incorrect. $50,000 ignores the basis limitation. §704(d) prohibits deducting a distributive share of loss in excess of outside basis; the excess carries forward until basis is restored."
  },
  tags: ["§704(d)","basis limitation","partnership loss","§752","loss limitations"]
},
{
  id: "REG-132", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Filing status and dependents", skill: "Application", difficulty: 2,
  stem: "A married taxpayer has lived apart from the spouse since March of the current year; there is no decree of separate maintenance. The taxpayer's 8-year-old child lived with the taxpayer all year, and the taxpayer paid all costs of maintaining the home. The taxpayer will not file jointly. Which filing status may the taxpayer use?",
  reference: "",
  options: [
    { key: "A", text: "Head of household" },
    { key: "B", text: "Married filing separately" },
    { key: "C", text: "Qualifying surviving spouse" },
    { key: "D", text: "Single" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under §7703(b) a married individual is treated as unmarried if the individual files separately, maintains a household that is the principal residence of a child for more than half the year, furnishes over half its cost, and the spouse was not a member of the household during the last six months of the year. Each test is met (the spouse left in March), so the taxpayer qualifies for head of household under §2(b).",
    B: "Incorrect. Married filing separately would be the only option if the §7703(b) test failed, for example if the spouse had moved out in August. Because the spouse was absent for the entire last six months and a qualifying child lives in the home, head of household is available.",
    C: "Incorrect. Qualifying surviving spouse status under §2(a) applies only in the two years following the year of a spouse's death. The taxpayer's spouse is living.",
    D: "Incorrect. A legally married individual cannot file as single. §7703(b) treats the taxpayer as unmarried only for purposes of head of household status, not for single status."
  },
  tags: ["filing status","head of household","abandoned spouse","§7703(b)","married filing separately"]
},
{
  id: "REG-133", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 2,
  stem: "A single taxpayer has MAGI of $272,000, consisting of $200,000 of wages, $35,000 of interest and dividends, $30,000 of net long-term capital gain, a $12,000 traditional IRA distribution, and a $5,000 net loss from rental property that is allowed in full. The net investment income tax threshold for a single taxpayer is $200,000. What is the taxpayer's net investment income tax?",
  reference: "",
  options: [
    { key: "A", text: "$2,280" },
    { key: "B", text: "$2,470" },
    { key: "C", text: "$2,736" },
    { key: "D", text: "$2,926" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Net investment income = $35,000 + $30,000 - $5,000 rental loss = $60,000. Excess of MAGI over the threshold = $272,000 - $200,000 = $72,000. Tax = 3.8% x lesser of $60,000 or $72,000 = $2,280 (§1411(a)). Wages and the IRA distribution are not investment income, although they raise MAGI.",
    B: "Incorrect. $2,470 = 3.8% x $65,000 ignores the $5,000 rental loss. Rental losses allowed for regular tax purposes reduce net investment income under §1411(c)(1)(B).",
    C: "Incorrect. $2,736 = 3.8% x $72,000 taxes the excess of MAGI over the threshold, or equivalently includes the $12,000 IRA distribution in net investment income. §1411(c)(5) excludes distributions from IRAs and qualified plans, and the tax applies to the lesser of net investment income or the excess MAGI.",
    D: "Incorrect. $2,926 = 3.8% x $77,000 includes the IRA distribution and ignores the rental loss. Both adjustments are required under §1411(c): the IRA distribution is excluded and the allowed rental loss is subtracted."
  },
  tags: ["§1411","net investment income tax","NIIT","3.8% tax"]
},
{
  id: "REG-134", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 1,
  stem: "A taxpayer's income tax liability before credits is $900. The taxpayer is eligible for an earned income credit of $2,400, a child and dependent care credit of $600, a lifetime learning credit of $1,000, and a refundable American opportunity credit of $1,000. With no withholding or estimated payments, what is the taxpayer's refund?",
  reference: "",
  options: [
    { key: "A", text: "$2,400" },
    { key: "B", text: "$3,400" },
    { key: "C", text: "$4,100" },
    { key: "D", text: "$5,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $2,400 refunds only the earned income credit. Under §25A(i)(5), 40% of the American opportunity credit (up to $1,000) is also refundable and is treated as a payment.",
    B: "Correct. Nonrefundable credits ($600 dependent care credit under §21 and $1,000 lifetime learning credit under §25A(c)) reduce the $900 liability to $0; the $700 excess is lost. Refundable credits, the $2,400 earned income credit (§32) and the $1,000 refundable American opportunity credit, are treated as payments and are refunded in full: $3,400.",
    C: "Incorrect. $4,100 = $3,400 + $700 refunds the unused portion of the nonrefundable credits. Nonrefundable credits can reduce tax to zero but not below (§26(a)), so the $700 excess generates no refund.",
    D: "Incorrect. $5,000 is the total of all four credits. Only $900 of the $1,600 of nonrefundable credits can be used (§26(a)), and their remainder is neither refunded nor, for these credits, carried forward."
  },
  tags: ["refundable credits","nonrefundable credits","earned income credit","§25A","§21"]
},
{
  id: "REG-135", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 2,
  stem: "A single taxpayer has taxable income of $60,000, which includes $10,000 of qualified dividends. Under the ordinary rate schedule, the tax on the other $50,000 of taxable income is $5,914 and the taxpayer's marginal ordinary rate is 22%. The $50,000 of ordinary income exceeds the top of the 0% capital gain bracket. What is the taxpayer's regular income tax?",
  reference: "",
  options: [
    { key: "A", text: "$5,914" },
    { key: "B", text: "$7,414" },
    { key: "C", text: "$8,114" },
    { key: "D", text: "$9,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $5,914 taxes only the ordinary income and treats the dividends as taxed at 0%. Under §1(h) the 0% rate applies only to preferential income that falls below the top of the 0% bracket; because ordinary income alone exceeds it, the dividends are taxed at 15%.",
    B: "Correct. Under §1(h)(11) qualified dividends are taxed at long-term capital gain rates and are stacked on top of ordinary income. Ordinary income of $50,000 already exceeds the 0% bracket, so all $10,000 of dividends is taxed at 15% = $1,500. Total tax = $5,914 + $1,500 = $7,414.",
    C: "Incorrect. $8,114 = $5,914 + 22% x $10,000 taxes the dividends at the marginal ordinary rate. Qualified dividends are taxed at the preferential 15% rate under §1(h), not at ordinary rates.",
    D: "Incorrect. $9,000 applies a flat 15% to all $60,000 of taxable income. The 15% preferential rate of §1(h) applies only to the qualified dividends; the ordinary income is taxed under the graduated rate schedule."
  },
  tags: ["§1(h)","qualified dividends","tax computation","stacking rule","2025 rate schedule"]
},
{
  id: "REG-136", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Differences between book and tax income — Schedule M-1/M-3", skill: "Remembering & Understanding", difficulty: 1,
  stem: "A C corporation with total assets of $15 million is preparing Schedule M-3 and must classify each book/tax difference as temporary or permanent. Which of the following is a temporary difference?",
  reference: "",
  options: [
    { key: "A", text: "Municipal bond interest income" },
    { key: "B", text: "Fines paid to a state government" },
    { key: "C", text: "Warranty expense accrued for book purposes but deductible when paid" },
    { key: "D", text: "Premiums on officer life insurance with the corporation as beneficiary" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Municipal bond interest is book income that is excluded from taxable income under §103 in every year. Because it never enters taxable income, the difference never reverses and is permanent.",
    B: "Incorrect. Fines paid to a government are never deductible under §162(f). The expense reduces book income but will never reduce taxable income, so it is a permanent difference.",
    C: "Correct. Warranty costs are expensed for book when accrued, but under the economic performance rules of §461(h) they are deductible for tax only when the work is performed or paid for. The same total is eventually deducted for both purposes, so the difference is one of timing and reverses; it is temporary.",
    D: "Incorrect. Premiums on life insurance where the corporation is the beneficiary are nondeductible under §264(a)(1) in every year. The book expense never becomes a tax deduction, so the difference is permanent."
  },
  tags: ["Schedule M-3","permanent difference","temporary difference","book-tax differences"]
},
{
  id: "REG-137", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods", skill: "Application", difficulty: 2,
  stem: "A C corporation has regular income tax liability of $65,000 before credits and no tentative minimum tax. It earned $70,000 of general business credits in the current year and has no credit carryovers. What amount of general business credit may the corporation use in the current year?",
  reference: "",
  options: [
    { key: "A", text: "$48,750" },
    { key: "B", text: "$55,000" },
    { key: "C", text: "$65,000" },
    { key: "D", text: "$70,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $48,750 = $65,000 - 25% x $65,000 applies the 25% to the entire regular tax. Under §38(c)(1)(B) the 25% applies only to net regular tax liability in excess of $25,000, which is $40,000 here.",
    B: "Correct. Under §38(c)(1) the credit is limited to net income tax minus the greater of the tentative minimum tax ($0) or 25% of net regular tax liability above $25,000: 25% x ($65,000 - $25,000) = $10,000. Allowed credit = $65,000 - $10,000 = $55,000. The $15,000 excess is carried back one year and forward twenty years under §39.",
    C: "Incorrect. $65,000 would reduce the tax to zero. When net regular tax exceeds $25,000, §38(c) leaves at least 25% of the excess over $25,000 unabated, so $10,000 of tax must remain.",
    D: "Incorrect. $70,000 is the credit earned, but a credit can never exceed the $65,000 tax liability, and the §38(c) limitation further reduces the usable amount to $55,000."
  },
  tags: ["§38","general business credit","credit limitation","§39 carryover"]
},
{
  id: "REG-138", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — State and local tax issues", skill: "Remembering & Understanding", difficulty: 1,
  stem: "A corporation is commercially domiciled in State A and manufactures in States A and B. It also earns dividends on an investment portfolio unrelated to its business and rent from a warehouse it owns in State D, where it has no other activity. Under UDITPA principles, how are the dividends and the rent treated for state income tax purposes?",
  reference: "",
  options: [
    { key: "A", text: "Both are apportioned along with the manufacturing income" },
    { key: "B", text: "The dividends are allocated to State A and the rent is allocated to State D" },
    { key: "C", text: "Both are allocated to State A, the commercial domicile" },
    { key: "D", text: "The dividends are apportioned and the rent is allocated to State D" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Only business income earned in the regular course of the trade or business is apportioned by formula. Income from an unrelated investment portfolio and from real property held outside the business is nonbusiness income, which is allocated to a single state rather than apportioned.",
    B: "Correct. Under UDITPA, nonbusiness income is allocated, not apportioned. Dividends and other income from intangibles are allocated to the state of commercial domicile (State A), and rent from real property is allocated to the state where the property is located (State D), where ownership of the property itself creates nexus.",
    C: "Incorrect. Commercial domicile governs only intangibles such as the dividends. Rent from real property is allocated to the situs of the property, State D, not to the domicile state.",
    D: "Incorrect. Dividends from an investment portfolio unrelated to the business are nonbusiness income and are allocated to the commercial domicile, not apportioned. The rent treatment is right; the dividend treatment is not."
  },
  tags: ["nexus","apportionment","allocation","P.L. 86-272","UDITPA"]
},
{
  id: "REG-139", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Eligibility and election", skill: "Application", difficulty: 2,
  stem: "An S corporation has accumulated earnings and profits from its years as a C corporation. Which of the following events terminates its S election?",
  reference: "",
  options: [
    { key: "A", text: "Passive investment income exceeds 25% of gross receipts for three consecutive tax years" },
    { key: "B", text: "Shareholders holding 45% of the shares file a written revocation with the IRS" },
    { key: "C", text: "A shareholder transfers shares to a qualified subchapter S trust that makes the required election" },
    { key: "D", text: "The corporation issues nonvoting common stock otherwise identical to its voting common stock" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under §1362(d)(3), an S corporation that has accumulated C corporation E&P and passive investment income exceeding 25% of gross receipts for three consecutive years loses its election on the first day of the following year. In each of those years it also owes the §1375 tax on excess net passive income.",
    B: "Incorrect. A revocation under §1362(d)(1) requires the consent of shareholders holding more than 50% of the outstanding shares, voting and nonvoting. Holders of 45% cannot revoke the election.",
    C: "Incorrect. A qualified subchapter S trust whose beneficiary makes the §1361(d) election is an eligible shareholder. The transfer does not make the corporation ineligible and does not terminate the election.",
    D: "Incorrect. Under §1361(c)(4) differences solely in voting rights do not create a second class of stock. Issuing nonvoting common stock with identical distribution and liquidation rights does not terminate the election."
  },
  tags: ["§1362(d)","S election termination","passive investment income","revocation","second class of stock"]
},
{
  id: "REG-140", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Ordinary business income, separately stated items and AAA", skill: "Application", difficulty: 2,
  stem: "A calendar-year S corporation reported the following for the current year:\n\n| Item | Amount |\n|---|---|\n| Sales | $600,000 |\n| Cost of goods sold | $250,000 |\n| Salaries | $120,000 |\n| Business meals | $8,000 |\n| Charitable contributions | $10,000 |\n| Long-term capital gain | $20,000 |\n\nWhat amount is the corporation's ordinary business income?",
  reference: "",
  options: [
    { key: "A", text: "$216,000" },
    { key: "B", text: "$222,000" },
    { key: "C", text: "$226,000" },
    { key: "D", text: "$246,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $216,000 deducts the $10,000 of charitable contributions in computing ordinary income. Under §1366(a)(1)(A) charitable contributions are separately stated so each shareholder can apply his or her own §170 limits.",
    B: "Incorrect. $222,000 deducts the full $8,000 of business meals. Under §274(n) only 50% of business meals is deductible, so the deduction is $4,000 and the other $4,000 is a nondeductible expense.",
    C: "Correct. Ordinary business income under §1366(a)(1)(B) includes only non-separately-stated items: $600,000 - $250,000 - $120,000 - $4,000 (50% of meals under §274(n)) = $226,000. The charitable contributions and the long-term capital gain are separately stated on Schedule K and pass through to the shareholders with their character intact.",
    D: "Incorrect. $246,000 includes the $20,000 long-term capital gain in ordinary business income. Capital gains are separately stated under §1366(a)(1)(A) because they could affect each shareholder's tax differently."
  },
  tags: ["§1366","ordinary business income","separately stated items","AAA","§1368(e)"]
},
{
  id: "REG-141", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Basis of shareholder's interest", skill: "Application", difficulty: 3,
  stem: "An S corporation's sole shareholder lent it $20,000 in Year 1 under a written note. Losses reduced the shareholder's stock basis to $0 and debt basis to $5,000. In Year 3 the corporation had ordinary income of $6,000, made no distributions, and repaid the note in full on the last day of the year. What amount and character of gain does the shareholder recognize?",
  reference: "",
  options: [
    { key: "A", text: "$9,000 long-term capital gain" },
    { key: "B", text: "$9,000 ordinary income" },
    { key: "C", text: "$15,000 long-term capital gain" },
    { key: "D", text: "$15,000 ordinary income" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under §1367(b)(2)(B), a net increase for the year first restores debt basis that was previously reduced by losses: $5,000 + $6,000 = $11,000, with stock basis remaining $0. Repayment of a $20,000 note with an $11,000 basis produces $9,000 of gain. Because the loan is evidenced by a written note held more than one year, the gain is long-term capital gain (Reg. §1.1367-2).",
    B: "Incorrect. The $9,000 amount is right but the character is wrong. Ordinary income results only on repayment of an open-account advance; a formal written note is a capital asset in the shareholder's hands, so the gain is capital.",
    C: "Incorrect. $15,000 = $20,000 - $5,000 ignores the restoration rule. §1367(b)(2)(B) applies the Year 3 net increase of $6,000 to debt basis before stock basis, so debt basis at repayment is $11,000, not $5,000.",
    D: "Incorrect. This both skips the $6,000 restoration of debt basis and treats the gain as ordinary. The basis is $11,000 at repayment, and gain on a written note is capital gain."
  },
  tags: ["§1367(b)(2)","debt basis","restoration","loan repayment","S corporation"]
},
{
  id: "REG-142", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Ordinary business income and separately stated items", skill: "Application", difficulty: 2,
  stem: "A calendar-year partnership reported the following for the current year:\n\n| Item | Amount |\n|---|---|\n| Revenue from services | $400,000 |\n| Salaries to employees | $90,000 |\n| Guaranteed payments to partners for services | $60,000 |\n| Rent expense | $40,000 |\n| §1231 gain on sale of equipment | $12,000 |\n| Charitable contributions | $5,000 |\n\nWhat amount is the partnership's ordinary business income on page 1 of Form 1065?",
  reference: "",
  options: [
    { key: "A", text: "$205,000" },
    { key: "B", text: "$210,000" },
    { key: "C", text: "$222,000" },
    { key: "D", text: "$270,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $205,000 deducts the $5,000 of charitable contributions. Under §702(a)(4) charitable contributions are separately stated on Schedule K so each partner can apply the §170 limits on his or her own return.",
    B: "Correct. Ordinary business income = $400,000 - $90,000 salaries - $60,000 guaranteed payments - $40,000 rent = $210,000. Guaranteed payments are deductible by the partnership under §707(c) as if paid to a non-partner. The §1231 gain and the charitable contributions are separately stated under §702(a) and do not enter ordinary income.",
    C: "Incorrect. $222,000 adds the $12,000 §1231 gain to ordinary income. §1231 gains are separately stated under §702(a)(3) so that each partner can apply the §1231 netting rules on his or her own return.",
    D: "Incorrect. $270,000 fails to deduct the $60,000 of guaranteed payments. Under §707(c) a guaranteed payment for services is deductible by the partnership in computing ordinary income and is ordinary income to the receiving partner."
  },
  tags: ["§702","§707(c)","ordinary business income","Form 1065","separately stated items"]
},
{
  id: "REG-143", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Basis of partner's interest", skill: "Application", difficulty: 2,
  stem: "A 25% partner had an outside basis of $50,000 at the beginning of the year, including a $10,000 share of partnership liabilities. The partnership reported the following, allocated 25% to the partner:\n\n| Item | Total |\n|---|---|\n| Ordinary income | $120,000 |\n| Tax-exempt interest | $8,000 |\n| §179 deduction | $32,000 |\n| Charitable contributions | $12,000 |\n\nThe partner received a $20,000 cash distribution, and at year-end the partner's share of liabilities was $4,000. What is the partner's outside basis at year-end?",
  reference: "",
  options: [
    { key: "A", text: "$43,000" },
    { key: "B", text: "$45,000" },
    { key: "C", text: "$51,000" },
    { key: "D", text: "$56,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $43,000 omits the $2,000 share of tax-exempt interest. Under §705(a)(1)(B) tax-exempt income increases outside basis so that it is not taxed later as gain on sale or distribution.",
    B: "Correct. Under §705(a) and §752: $50,000 + 25% x $120,000 ($30,000) + 25% x $8,000 ($2,000) - $20,000 distribution - 25% x $32,000 ($8,000) - 25% x $12,000 ($3,000) - $6,000 decrease in the liability share ($10,000 to $4,000, a deemed distribution under §752(b)) = $45,000.",
    C: "Incorrect. $51,000 ignores the $6,000 reduction in the partner's share of partnership liabilities. Under §752(b) a decrease in a partner's share of liabilities is treated as a cash distribution that reduces basis.",
    D: "Incorrect. $56,000 fails to reduce basis for the $8,000 §179 deduction and the $3,000 of charitable contributions. Although separately stated, both reduce outside basis under §705(a)(2) because they are claimed on the partner's return."
  },
  tags: ["§705","§752","outside basis","separately stated items","partnership liabilities"]
},
{
  id: "REG-144", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Limited liability companies — Tax classification options", skill: "Remembering & Understanding", difficulty: 1,
  stem: "A limited liability company formed under state law by three individual members has not filed any entity classification election. Which of the following statements regarding its federal tax classification is correct?",
  reference: "",
  options: [
    { key: "A", text: "It is a partnership by default and may elect to be taxed as a corporation" },
    { key: "B", text: "It must be taxed as a corporation because it provides limited liability to its members" },
    { key: "C", text: "It may elect to be classified as a trust" },
    { key: "D", text: "It cannot change its classification while it has more than one member" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under Reg. §301.7701-3(b), a domestic eligible entity with two or more members is a partnership by default. It may elect on Form 8832 to be an association taxable as a corporation, or file Form 2553 to be an S corporation if it meets the §1361 eligibility requirements.",
    B: "Incorrect. Under the check-the-box regulations, limited liability is irrelevant to classification. A multi-member LLC is a partnership by default regardless of the liability protection state law provides.",
    C: "Incorrect. Trust classification is not an available election under Reg. §301.7701-3. An eligible entity may be a partnership, a disregarded entity, or an association taxable as a corporation.",
    D: "Incorrect. An LLC may change its classification by filing Form 8832 (or Form 2553), subject to the 60-month limit on subsequent changes. The number of members affects only the default classification."
  },
  tags: ["check-the-box","Form 8832","Form 2553","LLC classification","Reg. §301.7701-3"]
},
{
  id: "REG-145", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Tax-exempt organizations — Types and filing requirements", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Contributions to which of the following tax-exempt organizations are deductible by the donor as charitable contributions under §170?",
  reference: "",
  options: [
    { key: "A", text: "A community food bank organized exclusively for charitable purposes" },
    { key: "B", text: "A chamber of commerce that promotes the business interests of a city" },
    { key: "C", text: "A civic league that promotes social welfare and engages substantially in lobbying" },
    { key: "D", text: "A members-only golf club supported by dues" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. An organization organized and operated exclusively for charitable purposes is exempt under §501(c)(3), and §170(c)(2) allows donors a charitable deduction for contributions to it. It may engage in only insubstantial lobbying and no campaign activity.",
    B: "Incorrect. A chamber of commerce is a business league exempt under §501(c)(6). Contributions to it are not deductible under §170(c), although member dues may be a business expense to the extent not attributable to lobbying.",
    C: "Incorrect. Substantial lobbying disqualifies an organization from §501(c)(3) status, so a civic league that lobbies substantially is exempt under §501(c)(4). Contributions to §501(c)(4) organizations are not deductible under §170(c).",
    D: "Incorrect. A members-only social or recreational club is exempt under §501(c)(7). It is not listed in §170(c), so dues and contributions to it are not deductible as charitable contributions."
  },
  tags: ["§501(c)(3)","§501(c)(4)","§501(c)(6)","§501(c)(7)","tax-exempt organizations","§170(c)"]
},
{
  id: "REG-146", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Regulations governing practice before the IRS (Circular 230)", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27270 (RI-A1.2)",
  stem: "Which of the following representations before the IRS would not be appropriate under Treasury Circular 230?",
  reference: "",
  options: [
    { key: "A", text: "A general partner in a partnership represents the partnership in an IRS audit." },
    { key: "B", text: "The full-time employee of an individual employer represents the employer in an IRS audit." },
    { key: "C", text: "A nonpractitioner represents an immediate family member in an IRS audit when the family member is not present." },
    { key: "D", text: "A practitioner, suspended from practice for one year, represents a family member in an IRS audit in the presence of the family member." }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. Circular 230 permits a general partner who is not a practitioner to represent the partnership in an IRS audit under its provisions for limited practice (§10.7).",
    B: "Incorrect. A full-time employee may represent their individual employer in an IRS audit under Circular 230's limited-practice rules; this is a recognized category of nonpractitioner representation.",
    C: "Incorrect. Circular 230 allows a nonpractitioner to represent an immediate family member before the IRS, even when that family member is not present. This falls within the limited-practice exceptions for unenrolled individuals representing closely connected parties.",
    D: "Correct. A practitioner who has been suspended from practice before the IRS is prohibited from representing any taxpayer during the suspension period, regardless of the relationship to the taxpayer or whether the taxpayer is present. Circular 230's limited-practice provisions specifically state that an individual under suspension may not engage in limited practice before the IRS."
  },
  tags: ["AICPA-released-2026", "Circular 230", "§10.7", "limited practice", "suspension"]
},
{
  id: "REG-147", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Regulations governing practice before the IRS (Circular 230)", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27271 (RI-A1.2)",
  stem: "According to Treasury Circular 230, which of the following is allowed during an Internal Revenue Service audit of a client?",
  reference: "",
  options: [
    { key: "A", text: "The tax practitioner uses the services of a newly retired IRS auditor, who audited the client's tax return four months before." },
    { key: "B", text: "The tax practitioner denies requested documents to the IRS, with no reasonable grounds that the documents were privileged." },
    { key: "C", text: "The tax practitioner delays the prompt production of tax records properly requested by the IRS due to a fee dispute with the client." },
    { key: "D", text: "The tax practitioner reveals the identity of the person in possession of tax records as requested by the IRS during an audit of the client." }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. Using the services of a recently retired IRS auditor who personally participated in the audit of the client's return within the prior year violates Circular 230's restrictions on post-employment activities of former government employees (§10.25).",
    B: "Incorrect. A practitioner may not withhold documents requested by the IRS without a reasonable basis for claiming privilege. Denying access to records without legally recognized grounds for privilege violates the practitioner's obligations under Circular 230 §10.20.",
    C: "Incorrect. Circular 230 prohibits practitioners from delaying the prompt production of records and information requested by the IRS. A fee dispute with the client is not a valid basis for withholding or delaying required disclosures.",
    D: "Correct. Circular 230 §10.20 requires practitioners to provide any information they have regarding the identity of any person the practitioner believes is in possession of records or information requested by the IRS. This disclosure does not constitute a breach of confidentiality under Circular 230."
  },
  tags: ["AICPA-released-2026", "Circular 230", "§10.20", "§10.25", "information to be furnished"]
},
{
  id: "REG-148", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Substantiation and disclosure", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27272 (RI-C2.4)",
  stem: "A taxpayer plans to deduct gambling losses on a federal individual tax return. Which of the following is required to substantiate the losses?",
  reference: "",
  options: [
    { key: "A", text: "A list of gambling establishments routinely visited by the taxpayer with estimated wins and losses" },
    { key: "B", text: "The names of other persons with whom the taxpayer gambled who are available to corroborate the taxpayer's estimates of wins and losses" },
    { key: "C", text: "A concurrent diary of wins and losses corroborated by hotel bills, travel documents, and credit records showing visits to a gambling establishment" },
    { key: "D", text: "A diary created at year-end based on the taxpayer's recollection of net wins or losses and available documentation of expenses incurred on casino trips" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. A general list of establishments routinely visited, with only estimated wins and losses, does not meet the IRS substantiation requirements. The IRS requires a detailed, contemporaneous diary, not a retrospective list of estimates, along with corroborating documentary evidence.",
    B: "Incorrect. The names of other persons willing to corroborate the taxpayer's estimates are not sufficient documentation for gambling losses. Proper substantiation requires a contemporaneous diary and documentary evidence of actual visits, not witness testimony about estimates.",
    C: "Correct. The IRS requires taxpayers who deduct gambling losses to maintain a contemporaneous diary of wins and losses, corroborated by supporting documentation such as hotel bills, travel documents, and credit records that verify visits to gambling establishments (Rev. Proc. 77-29). This concurrent recordkeeping is essential to substantiate the deduction.",
    D: "Incorrect. A diary created at year-end from recollection does not satisfy the contemporaneous recordkeeping requirement. The diary must be maintained at or near the time of each gambling activity and supported by documentation verifying visits to gambling establishments."
  },
  tags: ["AICPA-released-2026", "substantiation", "gambling losses", "Rev. Proc. 77-29"]
},
{
  id: "REG-149", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Taxpayer penalties", skill: "Remembering & Understanding", difficulty: 1,
  source: "AICPA Newly Released 2026, MCQ-27273 (RI-C3.1)",
  stem: "An accuracy-related penalty is assessed on each of the following, except:",
  reference: "",
  options: [
    { key: "A", text: "The portion of the tax due to negligence." },
    { key: "B", text: "The portion of the tax subject to the fraud penalty." },
    { key: "C", text: "The portion of the tax on a transaction lacking economic substance." },
    { key: "D", text: "The portion of the tax due to a substantial valuation understatement." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The §6662 accuracy-related penalty is specifically assessed on the portion of an underpayment attributable to negligence or disregard of rules or regulations. Negligence is one of the primary bases for the penalty.",
    B: "Correct. The accuracy-related penalty and the civil fraud penalty are mutually exclusive for the same portion of an underpayment (§6662(b)). When the §6663 fraud penalty applies to a portion of the tax, the accuracy-related penalty does not also apply to that portion, because the fraud penalty is the more severe sanction that supersedes it.",
    C: "Incorrect. Transactions lacking economic substance are subject to the accuracy-related penalty. The noneconomic-substance transaction penalty is one of the categories covered by §6662, at an enhanced 40% rate for undisclosed transactions.",
    D: "Incorrect. A substantial valuation misstatement is explicitly listed in §6662(b) as a basis for the accuracy-related penalty. Taxpayers who significantly misstate the value of property for tax purposes are subject to the penalty."
  },
  tags: ["AICPA-released-2026", "§6662", "§6663", "accuracy-related penalty", "fraud penalty"]
},
{
  id: "REG-150", area: "II", areaName: "Business Law",
  topic: "Agency — Duties and liabilities of agents and principals", skill: "Remembering & Understanding", difficulty: 1,
  source: "AICPA Newly Released 2026, MCQ-27274 (RII-A2.1)",
  stem: "In an agency relationship, the agent's obligations to the principal include which of the following?",
  reference: "",
  options: [
    { key: "A", text: "Duty of indemnification" },
    { key: "B", text: "Duty of consideration" },
    { key: "C", text: "Duty to account for income" },
    { key: "D", text: "Duty of reimbursement" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. The duty of indemnification runs from the principal to the agent, not from the agent to the principal. The principal must indemnify the agent for expenses and liabilities incurred in connection with authorized actions taken on the principal's behalf.",
    B: "Incorrect. There is no recognized legal duty of \"consideration\" that an agent owes to a principal. Consideration is a contract-formation concept relating to the enforceability of agreements, not a fiduciary or agency duty.",
    C: "Correct. One of an agent's core obligations to the principal is the duty to account: the agent must keep accurate records of all transactions conducted on the principal's behalf, keep the principal's property separate from the agent's own, and account for all money or property received or disbursed in the course of the agency.",
    D: "Incorrect. The duty of reimbursement is an obligation of the principal to the agent, requiring the principal to repay reasonable expenses the agent incurred while carrying out instructions within the scope of authority."
  },
  tags: ["AICPA-released-2026", "agency", "duty to account", "fiduciary duties"]
},
{
  id: "REG-151", area: "II", areaName: "Business Law",
  topic: "Contracts — Formation", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27275 (RII-B1.2)",
  stem: "Moore Co. contracted with a clothing manufacturer to purchase 200 shirts for resale at Moore's store. The contract specified that the purchase price was to be $5 per shirt. A representative for the manufacturer later called Moore and said that, due to an unforeseen increase in the cost of labor, the manufacturer could deliver the shirts only if Moore agreed to pay $7 per shirt. Moore agreed. The manufacturer sent Moore a confirmation of the order for 200 shirts at $7 each. Under the Sales Article of the UCC, what amount will Moore have to pay the manufacturer?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$400" },
    { key: "C", text: "$1,000" },
    { key: "D", text: "$1,400" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. $0 would be appropriate only if there were no enforceable contract. A valid contract and a valid modification of that contract exist here, so Moore must pay the modified price of $1,400.",
    B: "Incorrect. $400 is only the increase over the original price (($7 - $5) x 200 shirts). Moore agreed to pay $7 per shirt for 200 shirts, a total obligation of $1,400.",
    C: "Incorrect. $1,000 is the original contract price ($5 x 200), which was validly modified when Moore agreed to $7 per shirt. Under UCC 2-209, a modification of a contract for the sale of goods needs no new consideration to be binding, so the modified price governs.",
    D: "Correct. Under UCC Article 2 (2-209), a good-faith modification of a contract for the sale of goods is enforceable without new consideration. Moore agreed to the modified price and the manufacturer confirmed the order in writing at that price, so the modification is binding: $7 x 200 shirts = $1,400."
  },
  tags: ["AICPA-released-2026", "UCC Article 2", "2-209", "contract modification", "consideration"]
},
{
  id: "REG-152", area: "II", areaName: "Business Law",
  topic: "Contracts — Performance and discharge", skill: "Application", difficulty: 1,
  source: "AICPA Newly Released 2026, MCQ-27276 (RII-B2.3)",
  stem: "A retailer entered into a contract with a supplier to purchase some inventory for the store. While the contract was executory, the retailer informed the supplier that it did not need the contracted inventory and wanted to cancel the contract. The supplier replied that it will voluntarily cancel the contract. The two parties discharged the contract by means of:",
  reference: "",
  options: [
    { key: "A", text: "A novation." },
    { key: "B", text: "A mutual rescission." },
    { key: "C", text: "A settlement agreement." },
    { key: "D", text: "An accord and satisfaction." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. A novation replaces one party to a contract with a new party, or substitutes a new obligation for an existing one, with the consent of all parties. No new party or obligation was introduced; the parties simply agreed to cancel the existing contract.",
    B: "Correct. A mutual rescission occurs when both parties to a contract voluntarily agree to cancel and discharge the agreement, releasing each other from their obligations. Because both the retailer and the supplier agreed to cancel the executory contract before either had fully performed, this is a mutual rescission.",
    C: "Incorrect. A settlement agreement resolves an existing dispute or claim through compromise. There was no dispute here; both parties simply agreed to cancel, which is a mutual rescission.",
    D: "Incorrect. An accord and satisfaction requires one party to offer a different performance in satisfaction of an existing obligation, which the other party accepts in full discharge of the original duty. No alternative performance was offered; the parties agreed to cancel the contract entirely."
  },
  tags: ["AICPA-released-2026", "contracts", "discharge", "mutual rescission"]
},
{
  id: "REG-153", area: "II", areaName: "Business Law",
  topic: "Contracts — Performance and discharge", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27277 (RII-B2.3)",
  stem: "A commercial bakery entered into a contract with a supermarket chain to deliver a large order of cookies on a certain date. To bake the cookies, the bakery needs large quantities of vanilla. Between the date when the contract was entered into and the date of delivery, an unexpected event caused the price of vanilla to rise sharply. The bakery would lose a significant amount of money if it delivered the cookies at the contracted price. A court would most likely discharge the bakery's obligations under the contract for which reason?",
  reference: "",
  options: [
    { key: "A", text: "Accord and satisfaction" },
    { key: "B", text: "Commercial impracticability" },
    { key: "C", text: "Impossibility of performance" },
    { key: "D", text: "Material alteration of the contract" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Accord and satisfaction is a method of discharging a contract by mutual agreement of the parties, not a doctrine that excuses performance because of changed external circumstances. No agreement to accept a different performance is described.",
    B: "Correct. Commercial impracticability (UCC 2-615) excuses a party's performance when an unforeseen event occurring after formation makes performance commercially unreasonable. A sharp, unexpected rise in the price of a critical ingredient that was not foreseeable at contracting is the classic fact pattern the doctrine addresses.",
    C: "Incorrect. Impossibility of performance requires that performance be objectively impossible, such as destruction of the subject matter or death of a required party. A price increase makes delivery more costly, but not physically or legally impossible.",
    D: "Incorrect. Material alteration refers to an unauthorized change made to the terms of a written contract. A rising market price is an external market event, not an alteration of the contract itself."
  },
  tags: ["AICPA-released-2026", "contracts", "commercial impracticability", "UCC 2-615", "discharge"]
},
{
  id: "REG-154", area: "II", areaName: "Business Law",
  topic: "Contracts — Breach and remedies", skill: "Remembering & Understanding", difficulty: 1,
  source: "AICPA Newly Released 2026, MCQ-27278 (RII-B3.2)",
  stem: "If a contract states a performance date and specifies that time is of the essence, then the contract will be materially breached unless performance occurs:",
  reference: "",
  options: [
    { key: "A", text: "By the time of performance stated in the contract." },
    { key: "B", text: "At the time the contract was signed by both parties." },
    { key: "C", text: "Within a reasonable time after the contract was signed by both parties." },
    { key: "D", text: "Within a reasonable time after the time of performance stated in the contract." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. When a contract specifies a performance date and includes a \"time is of the essence\" clause, performance must occur by the exact date stated. Failure to perform by that date is a material breach regardless of how close to the deadline performance occurred.",
    B: "Incorrect. The signing date is when the contract is formed, not when performance is due. A time-is-of-the-essence clause refers to the contractual performance deadline, not the execution date.",
    C: "Incorrect. A \"within a reasonable time\" standard applies only when a contract does not specify a performance date. When a time-is-of-the-essence clause accompanies a specific date, the reasonable-time standard is displaced.",
    D: "Incorrect. Performing within a reasonable time after the stated deadline is also insufficient. The clause makes the specific performance date a material term, so any performance after that date is a material breach."
  },
  tags: ["AICPA-released-2026", "contracts", "time is of the essence", "material breach"]
},
{
  id: "REG-155", area: "II", areaName: "Business Law",
  topic: "Business structure — Selection, formation, operation and termination", skill: "Remembering & Understanding", difficulty: 1,
  source: "AICPA Newly Released 2026, MCQ-27279 (RII-E1.1)",
  stem: "The death of an owner automatically terminates which of the following business organizations?",
  reference: "",
  options: [
    { key: "A", text: "Limited liability company" },
    { key: "B", text: "Limited partnership" },
    { key: "C", text: "Corporation" },
    { key: "D", text: "Sole proprietorship" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. An LLC does not automatically terminate on the death of a member. State statutes and operating agreements provide for continuation of the LLC notwithstanding a member's death.",
    B: "Incorrect. A limited partnership does not automatically dissolve on the death of a limited partner, and partnership agreements and state law provide mechanisms so that even a general partner's death does not automatically terminate the partnership.",
    C: "Incorrect. A corporation is a separate legal entity with perpetual existence independent of its shareholders. The death of a shareholder, even a majority shareholder, does not terminate the corporation.",
    D: "Correct. A sole proprietorship is not a separate legal entity; it is simply the owner conducting business in their own name. Because the business has no legal existence apart from the owner, it terminates automatically on the owner's death."
  },
  tags: ["AICPA-released-2026", "business structure", "sole proprietorship", "termination"]
},
{
  id: "REG-156", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27280 (RIII-A0.1)",
  stem: "Cang bought a duplex and used one unit as a principal residence and rented the other unit. Both units were identical and were built on leased land. On the sale of the duplex, how is Cang's basis determined?",
  reference: "",
  options: [
    { key: "A", text: "Cang's purchase price for the duplex is allocated equally to each unit, and the rental unit's basis is adjusted for allowable depreciation." },
    { key: "B", text: "Cang's basis in the duplex will be the purchase price adjusted for the lease payments made." },
    { key: "C", text: "Cang's basis in the duplex will be the purchase price, because a personal residence is not depreciable." },
    { key: "D", text: "Cang's purchase price for the duplex will be adjusted for the total depreciation allocable to the rental unit, and the remaining amount will be allocated equally between the two units." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Because the two units are identical, the purchase price is allocated equally between them. The residence unit is not depreciable, so its basis stays at the allocated cost. The rental unit's allocated basis is reduced by depreciation allowed or allowable during the rental period (§1016), so the adjusted basis of each unit is determined separately at the date of sale.",
    B: "Incorrect. Lease payments on the land under the duplex are rent expense (or a personal expense for the residence half), not part of the basis of the building. Basis derives from the purchase price of the property acquired.",
    C: "Incorrect. Although a personal residence is not depreciable, the rental half of the building is. That unit's basis must be reduced by depreciation allowed or allowable during the rental period.",
    D: "Incorrect. Depreciation is not subtracted from the total purchase price before allocating. The purchase price is allocated equally between the units first, and only the rental unit's share is then reduced by depreciation."
  },
  tags: ["AICPA-released-2026", "basis", "adjusted basis", "§1016", "mixed-use property"]
},
{
  id: "REG-157", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Cost recovery — Depreciation (MACRS, bonus, §179) and amortization", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27281 (RIII-B0.1)",
  stem: "A taxpayer purchased a home in Year 2 and used it as a primary residence. In June, Year 4, the taxpayer converted the home from personal to business use by leasing it for vacation rentals. Which of the following statements is correct regarding the tax depreciation deduction that the taxpayer may take with respect to the property?",
  reference: "",
  options: [
    { key: "A", text: "The taxpayer must wait until Year 5 to take depreciation deductions for the property." },
    { key: "B", text: "The taxpayer may take a depreciation deduction for the vacation rental starting in June, Year 4, using the mid-month convention." },
    { key: "C", text: "Because the taxpayer owned the property for the entire year, the taxpayer may take a depreciation deduction for the vacation rental as if the property were used for business for the entirety of Year 4." },
    { key: "D", text: "The taxpayer may take a depreciation deduction for Year 4 equal to the total amount of depreciation deductions that would have been allowed from Years 2 through 4 if the property had been used as a vacation rental from the date it was purchased until the end of Year 4." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. No rule requires a taxpayer to wait until the following tax year to begin depreciating property converted to business or rental use. Depreciation begins in the month the property is placed in service in the rental activity.",
    B: "Correct. When real property is converted from personal to rental use, it is placed in service in the month of conversion, and depreciation begins then. Residential rental property uses the mid-month convention under MACRS, which treats the property as placed in service at the midpoint of June, Year 4. (The depreciable basis is the lesser of adjusted basis or FMV at conversion.)",
    C: "Incorrect. A full year of depreciation is not allowed simply because the property was owned all year. Only the months of rental use, from June, Year 4, count, using the mid-month convention.",
    D: "Incorrect. Depreciation is prospective only. A taxpayer cannot claim in Year 4 the depreciation that would have been available in Years 2 and 3 had the property been rented since purchase; it was personal-use property in those years."
  },
  tags: ["AICPA-released-2026", "MACRS", "mid-month convention", "conversion to rental", "residential rental property"]
},
{
  id: "REG-158", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Cost recovery — Depreciation (MACRS, bonus, §179) and amortization", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27282 (RIII-B0.3)",
  stem: "Orbit Corp., a calendar year C corporation, was incorporated on January 1 and began business operations on July 1. Orbit incurred $32,000 of organizational expenses between March 1 and July 1. What amount can Orbit deduct as organizational expenses in its first year?",
  reference: "",
  options: [
    { key: "A", text: "$3,200" },
    { key: "B", text: "$5,900" },
    { key: "C", text: "$6,400" },
    { key: "D", text: "$6,800" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $3,200 is 10% of the $32,000 total, which is not how the deduction is computed. The correct amount is the $5,000 immediate deduction plus $900 of amortization ($27,000 x 6/180), a total of $5,900.",
    B: "Correct. Under §248, up to $5,000 of organizational expenses may be deducted in the year business begins (reduced dollar-for-dollar when total costs exceed $50,000), with the remainder amortized over 180 months starting with the month business begins. $32,000 - $5,000 = $27,000; $27,000 / 180 = $150 per month; July through December is 6 months, so $150 x 6 = $900. Total first-year deduction: $5,000 + $900 = $5,900.",
    C: "Incorrect. $6,400 corresponds to spreading the whole $32,000 evenly over 60 months and claiming a full 12 months ($32,000 / 5 = $6,400). The amortization period is 180 months, not 60, and amortization runs only from July, when business began.",
    D: "Incorrect. $6,800 takes 12 months of amortization in the first year plus the $5,000 immediate deduction ($27,000 x 12/180 = $1,800 + $5,000). Amortization begins in the month business operations start (July 1), not the month of incorporation (January 1)."
  },
  tags: ["AICPA-released-2026", "§248", "organizational expenses", "amortization", "180 months"]
},
{
  id: "REG-159", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Cost recovery — Depreciation (MACRS, bonus, §179) and amortization", skill: "Application", difficulty: 1,
  source: "AICPA Newly Released 2026, MCQ-27283 (RIII-B0.3)",
  stem: "On July 1, Year 1, a taxpayer acquired a Section 197 intangible asset that is used in a business. The taxpayer's adjusted basis in the intangible asset upon its acquisition is $360,000. Assuming that the taxpayer uses a calendar year, how much of the intangible asset can be amortized for Year 1 income tax purposes?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$12,000" },
    { key: "C", text: "$18,000" },
    { key: "D", text: "$24,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. §197 intangibles are amortizable beginning with the month of acquisition. Because the asset was acquired in July, Year 1, six months of amortization ($12,000) is available in that year.",
    B: "Correct. §197 purchased intangibles are amortized straight-line over 180 months (15 years) beginning with the month of acquisition. $360,000 / 180 = $2,000 per month; July through December is six months, so Year 1 amortization is $2,000 x 6 = $12,000.",
    C: "Incorrect. $18,000 would be nine months of amortization ($2,000 x 9), but the asset was not acquired until July 1. Only July through December (six months) count in Year 1.",
    D: "Incorrect. $24,000 is a full 12 months of amortization ($2,000 x 12). The asset was not placed in service until July 1, so only six months, or $12,000, is allowable for Year 1."
  },
  tags: ["AICPA-released-2026", "§197", "amortization", "intangibles", "15 years"]
},
{
  id: "REG-160", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27284 (RIV-A0.1)",
  stem: "An individual taxpayer received the following for the tax year: $50 interest on a federal tax refund, $25 interest from a credit union savings account, $110 interest on Series EE U.S. savings bonds used for the taxpayer's qualified higher education expenses, and $200 in qualified dividends. What amount is taxed at ordinary income rates?",
  reference: "",
  options: [
    { key: "A", text: "$75" },
    { key: "B", text: "$185" },
    { key: "C", text: "$275" },
    { key: "D", text: "$385" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Only the $50 interest on the federal tax refund and the $25 credit union interest are taxed at ordinary rates, a total of $75. The $110 Series EE interest used for qualified higher education expenses is excluded from gross income under §135, and the $200 of qualified dividends is taxed at preferential long-term capital gain rates, not ordinary rates.",
    B: "Incorrect. $185 wrongly includes the $110 of Series EE bond interest as ordinary income. That interest is excluded from gross income under §135 when the bonds are redeemed to pay qualified higher education expenses.",
    C: "Incorrect. $275 wrongly includes the $200 of qualified dividends in ordinary income. Qualified dividends are taxed at the preferential long-term capital gain rates and should not be added to the $75 of ordinary interest.",
    D: "Incorrect. $385 treats all four items as ordinary income, including the excludable Series EE interest and the preferentially taxed qualified dividends. Only the $50 refund interest and $25 savings interest are ordinary income."
  },
  tags: ["AICPA-released-2026", "interest income", "§135", "qualified dividends", "ordinary income"]
},
{
  id: "REG-161", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 1,
  source: "AICPA Newly Released 2026, MCQ-27285 (RIV-A0.1)",
  stem: "Hardy purchased 100 shares of Able Mfg., Inc. for $12,000. Later in the year, Hardy received an additional 10 shares of Able stock in lieu of his option to receive cash dividends of $1,400. At the end of year, the fair market value of Able stock was $16,500. What amount, if any, should Hardy include in gross income from the ownership of Able stock?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$1,400" },
    { key: "C", text: "$4,500" },
    { key: "D", text: "$5,900" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $0 would apply only to a nontaxable pro-rata stock dividend with no cash election. Because Hardy could have taken $1,400 in cash and chose stock instead, the distribution is taxable under §305(b)(1).",
    B: "Correct. When a shareholder may elect to receive either cash or stock, the stock distribution is taxable (§305(b)(1)) and the amount included is the value of the distribution, here the $1,400 cash dividend forgone.",
    C: "Incorrect. $4,500 is the unrealized appreciation on the original shares ($16,500 - $12,000). Unrealized gains are not recognized until the shares are sold.",
    D: "Incorrect. $5,900 combines the $1,400 taxable stock dividend with $4,500 of unrealized appreciation. Only the $1,400 is included in gross income; appreciation is not income until realized."
  },
  tags: ["AICPA-released-2026", "stock dividend", "§305", "dividends", "unrealized appreciation"]
},
{
  id: "REG-162", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Capital gains, basis and holding period", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27286 (RIV-A0.2, adapted)",
  stem: "On July 1, Year 3, a taxpayer inherited a piece of land with a fair market value of $16,000. The decedent had purchased the land on January 1, Year 1, and had a $14,000 basis in it. The taxpayer sold the land on December 1, Year 3, for $19,000. What is the amount and holding period of the taxpayer's gain?",
  reference: "",
  options: [
    { key: "A", text: "$3,000, short-term" },
    { key: "B", text: "$3,000, long-term" },
    { key: "C", text: "$5,000, short-term" },
    { key: "D", text: "$5,000, long-term" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The $3,000 gain is right, but inherited property is always treated as held long-term under §1223(9), regardless of how long the beneficiary actually held it.",
    B: "Correct. The basis of inherited property is its fair market value at the decedent's date of death (§1014), $16,000. Gain is $19,000 - $16,000 = $3,000. Property acquired from a decedent is automatically treated as held for more than one year (§1223(9)), so the gain is a $3,000 long-term capital gain.",
    C: "Incorrect. $5,000 uses the decedent's $14,000 cost basis ($19,000 - $14,000) instead of the stepped-up FMV at death. Carryover basis applies to gifts, not inheritances, and the holding period of inherited property is long-term.",
    D: "Incorrect. Long-term is right, but $5,000 uses the decedent's $14,000 cost basis instead of the $16,000 FMV at date of death. The correct gain is $3,000."
  },
  tags: ["AICPA-released-2026", "inherited property", "§1014", "§1223(9)", "holding period"]
},
{
  id: "REG-163", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Capital gains, basis and holding period", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27287 (RIV-A0.2)",
  stem: "A taxpayer received a gift of 10 shares of a company's stock with a fair market value of $1,000 per share. This is the only gift the taxpayer received from the donor in the current year. The donor had purchased the shares two years earlier for $500 per share. If the taxpayer sold the shares for $1,500 per share six months after receiving them, then the taxpayer has incurred a:",
  reference: "",
  options: [
    { key: "A", text: "$5,000 long-term capital gain" },
    { key: "B", text: "$5,000 short-term capital gain" },
    { key: "C", text: "$10,000 long-term capital gain" },
    { key: "D", text: "$10,000 short-term capital gain" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Long-term is right, but $5,000 uses the $1,000 FMV at the date of the gift as basis (($1,500 - $1,000) x 10). Because the donor's basis was below FMV at the gift date, the donee takes the donor's $500 carryover basis.",
    B: "Incorrect. Both the amount and the character are wrong. $5,000 uses FMV as basis, and the gain is long-term because the donor's two-year holding period tacks on to the donee's.",
    C: "Correct. Because the donor's basis ($500 per share) was less than FMV at the gift date ($1,000), the donee uses the donor's carryover basis of $500 (§1015). Gain is ($1,500 - $500) x 10 shares = $10,000. The donee's holding period includes the donor's (§1223(2)), so the shares have been held for more than one year and the gain is long-term.",
    D: "Incorrect. $10,000 correctly uses the $500 carryover basis, but the character is wrong. With carryover basis the donor's holding period tacks on, so the total holding period exceeds one year and the gain is long-term."
  },
  tags: ["AICPA-released-2026", "gift basis", "§1015", "§1223(2)", "holding period", "tacking"]
},
{
  id: "REG-164", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Capital gains, basis and holding period", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27288 (RIV-A0.2)",
  stem: "A taxpayer received shares of publicly held stock as a gift. At the time of the gift, the donor's basis in the stock was $8,000, and the fair market value of the stock was $10,000. In the following year, the taxpayer sold the stock for $6,000. Which of the following statements is correct regarding the taxpayer's holding period of the stock?",
  reference: "",
  options: [
    { key: "A", text: "The holding period begins on the day after the gift was made." },
    { key: "B", text: "The holding period begins on the date on which the donor acquired the stock." },
    { key: "C", text: "Twenty percent of the shares have a holding period beginning on the day after the gift was made, and 80% of the shares have a holding period beginning on the day the donor acquired the shares." },
    { key: "D", text: "Eighty percent of the shares have a holding period beginning on the day after the gift was made, and 20% of the shares have a holding period beginning on the day the donor acquired the shares." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The holding period starts the day after the gift only when the donor's basis exceeds FMV at the gift date and the donee must use FMV to compute a loss (the dual-basis rule). Here FMV ($10,000) exceeded the donor's basis ($8,000), so the donee uses carryover basis and the donor's holding period tacks on.",
    B: "Correct. Because FMV at the time of the gift ($10,000) exceeded the donor's basis ($8,000), the donee uses the donor's carryover basis for both gain and loss (§1015). With carryover basis, the holding period includes the donor's holding period (§1223(2)), so it begins on the date the donor acquired the stock.",
    C: "Incorrect. No rule splits the holding period 20/80. The holding period for gifted property depends on which basis rule applies (carryover basis or FMV at date of gift), not on a proportional allocation of value.",
    D: "Incorrect. Likewise, no 80/20 split exists. Because the donee's basis is the donor's carryover basis, the holding period begins when the donor acquired the stock."
  },
  tags: ["AICPA-released-2026", "gift basis", "§1015", "§1223(2)", "holding period", "dual basis"]
},
{
  id: "REG-165", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Loss limitations — Capital, basis, passive, at-risk, hobby and wash sale", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27289 (RIV-A0.2, adapted)",
  stem: "Janson realized a loss on the sale of 100 shares of Sunshine stock on October 1. These shares were purchased in two lots on March 25 and April 20. Janson bought another 100 shares of Sunshine stock on November 15. Which of the following dates marks the beginning of the holding period for the Sunshine stock bought on November 15?",
  reference: "",
  options: [
    { key: "A", text: "March 25" },
    { key: "B", text: "April 20" },
    { key: "C", text: "October 1" },
    { key: "D", text: "November 15" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. March 25 is the purchase date of the first lot sold. That date would tack on to the replacement shares only if the October 1 sale were a wash sale, which requires a repurchase within 30 days before or after the sale. November 15 is more than 30 days after October 1.",
    B: "Incorrect. April 20 is the purchase date of the second lot sold. As with March 25, it would carry over only under the wash sale rule, which does not apply because the repurchase occurred more than 30 days after the loss sale.",
    C: "Incorrect. October 1 is the date of the loss sale. The date of a sale never starts the holding period of replacement shares; the holding period begins when the replacement shares are acquired.",
    D: "Correct. A wash sale under §1091 occurs only when substantially identical stock is acquired within 30 days before or after a loss sale. The repurchase on November 15 is 45 days after the October 1 sale, so the loss is allowed and no holding period tacks on. The new shares' holding period begins on November 15, when they were acquired."
  },
  tags: ["AICPA-released-2026", "wash sale", "§1091", "holding period", "30 days"]
},
{
  id: "REG-166", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27290 (RIV-A0.2)",
  stem: "Greene, an individual, reports the following in the current year:\n\n| Description | Amount |\n|---|---|\n| Salary | $50,000 |\n| Bank interest income | $1,000 |\n| Net capital loss | $10,000 |\n| Employer contributions to retirement plan | $5,000 |\n| Roth IRA contribution | $2,000 |\n| Child support payments | $4,000 |\n\nWhat is the amount of Greene's adjusted gross income?",
  reference: "",
  options: [
    { key: "A", text: "$30,000" },
    { key: "B", text: "$37,000" },
    { key: "C", text: "$44,000" },
    { key: "D", text: "$48,000" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. $30,000 deducts the full $10,000 net capital loss and also deducts the employer plan contributions, the Roth contribution and the child support. Only $3,000 of net capital loss may offset ordinary income per year (§1211(b)); employer contributions are excluded from income rather than deducted; Roth contributions and child support are never deductible.",
    B: "Incorrect. $37,000 deducts the full $10,000 net capital loss (limited to $3,000) and deducts child support, which is not deductible by the payer.",
    C: "Incorrect. $44,000 correctly limits the capital loss to $3,000 but also deducts the $4,000 of child support. Child support is neither income to the recipient nor deductible by the payer.",
    D: "Correct. AGI = $50,000 salary + $1,000 interest - $3,000 net capital loss (the §1211(b) annual limit) = $48,000. Employer contributions to a retirement plan are excluded from the employee's gross income, and neither Roth IRA contributions nor child support payments are deductible in arriving at AGI."
  },
  tags: ["AICPA-released-2026", "AGI", "capital loss limit", "§1211(b)", "Roth IRA", "child support"]
},
{
  id: "REG-167", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Filing status and dependents", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27291 (RIV-F0.3)",
  stem: "A married couple who lived together for the entire tax year considered the following facts in choosing their federal tax return filing status:\n\n- One spouse earns the majority of the household income.\n- Only one spouse has enough deductions to make it advantageous to itemize.\n- The couple potentially qualifies for the child tax credit.\n- One spouse wants to avoid liability for the other spouse's taxes.\n\nThe filing status of married filing separately is an appropriate choice for the couple based on which fact?",
  reference: "",
  options: [
    { key: "A", text: "The couple potentially qualifies for the child tax credit." },
    { key: "B", text: "One spouse earns the majority of the household income." },
    { key: "C", text: "One spouse wants to avoid liability for the other spouse's taxes." },
    { key: "D", text: "Only one spouse has enough deductions to make it advantageous to itemize." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Married filing separately (MFS) filers face a lower AGI threshold for the child tax credit phase-out than joint filers, so this fact favors filing jointly.",
    B: "Incorrect. When one spouse earns most of the income, filing jointly usually produces a lower combined tax because of the wider joint brackets. Income disparity alone does not make MFS advantageous.",
    C: "Correct. Spouses who file jointly are jointly and severally liable for the entire tax on the return (§6013(d)(3)). Under MFS, each spouse is responsible only for the tax on their own return, so MFS is the appropriate choice when one spouse wants to avoid liability for the other's taxes.",
    D: "Incorrect. If one MFS spouse itemizes, the other must also itemize and may not claim the standard deduction (§63(c)(6)). This restriction usually raises the couple's combined tax, so this fact argues against MFS."
  },
  tags: ["AICPA-released-2026", "filing status", "married filing separately", "joint and several liability", "§6013"]
},
{
  id: "REG-168", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Filing status and dependents", skill: "Remembering & Understanding", difficulty: 1,
  source: "AICPA Newly Released 2026, MCQ-27292 (RIV-E0.1)",
  stem: "What is the proper filing status for a taxpayer without dependents who is legally separated from the taxpayer's spouse and is under a separate maintenance agreement as of the end of the year?",
  reference: "",
  options: [
    { key: "A", text: "Single" },
    { key: "B", text: "Head of household" },
    { key: "C", text: "Married filing jointly" },
    { key: "D", text: "Married filing separately" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. A taxpayer who is legally separated from their spouse under a decree of divorce or separate maintenance as of the last day of the tax year is treated as unmarried (§7703(a)(2)). With no dependents, the only available status is single.",
    B: "Incorrect. Head of household requires the taxpayer to maintain a home for a qualifying person for more than half the year. This taxpayer has no dependents, so head of household is unavailable.",
    C: "Incorrect. A taxpayer legally separated under a decree of separate maintenance is treated as unmarried and cannot file jointly. Joint filing requires the taxpayer to be married as of the last day of the year.",
    D: "Incorrect. Married filing separately, like joint filing, requires the taxpayer to be considered married at year-end. A legally separated taxpayer is treated as unmarried and cannot use either married status."
  },
  tags: ["AICPA-released-2026", "filing status", "§7703", "legal separation", "single"]
},
{
  id: "REG-169", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 1,
  source: "AICPA Newly Released 2026, MCQ-27293 (RIV-F0.3)",
  stem: "A single taxpayer, age 52, consulted a CPA for tax planning advice regarding a distribution from a qualified retirement plan to purchase a new car. The taxpayer is in the 25% tax bracket. The taxpayer provided the following information:\n\n| Description | Amount |\n|---|---|\n| Salary | $50,000 |\n| Long-term capital gain | $4,000 |\n| Short-term capital loss | ($2,000) |\n| Distribution from qualified retirement plan | $15,000 |\n\nWhat amount, if any, would be the penalty for early distribution from the qualified retirement plan?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$1,500" },
    { key: "C", text: "$3,750" },
    { key: "D", text: "$6,700" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $0 would apply only if a §72(t) exception covered the distribution, such as certain medical expenses, disability, or (for IRAs) a first-home purchase or qualified higher education expenses. Buying a car is not an exception.",
    B: "Correct. A 10% additional tax applies under §72(t) to distributions from a qualified retirement plan before age 59½ unless an exception applies. The taxpayer is 52 and a car purchase is not an exception, so the penalty is 10% x $15,000 = $1,500. This is in addition to the regular income tax on the distribution.",
    C: "Incorrect. $3,750 applies the taxpayer's 25% ordinary rate to the distribution ($15,000 x 25%). That is the regular income tax on the distribution, not the early-distribution penalty, which is a flat 10%.",
    D: "Incorrect. $6,700 is 10% of total income ($50,000 + $2,000 net capital gain + $15,000 = $67,000). The 10% additional tax applies only to the $15,000 early distribution, not to all income."
  },
  tags: ["AICPA-released-2026", "§72(t)", "early distribution penalty", "qualified retirement plan", "10% additional tax"]
},
{
  id: "REG-170", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Differences between book and tax income — Schedule M-1/M-3", skill: "Application", difficulty: 1,
  source: "AICPA Newly Released 2026, MCQ-27304 (RV-A0.2)",
  stem: "A corporation had the following interest income accrued and received during the year:\n\n| Source of Interest Income | Amount |\n|---|---|\n| General obligation municipal bonds | $12,000 |\n| General obligation state bonds | $13,000 |\n| Federal Treasury notes | $14,000 |\n| Banks | $15,000 |\n\nWhat amount of book/tax difference for the year is attributable to interest income?",
  reference: "",
  options: [
    { key: "A", text: "$12,000" },
    { key: "B", text: "$14,000" },
    { key: "C", text: "$25,000" },
    { key: "D", text: "$39,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $12,000 is only the municipal bond interest. The $13,000 of state bond interest is also exempt from federal income tax under §103 and creates an additional book/tax difference, for a total of $25,000.",
    B: "Incorrect. $14,000 is the Treasury note interest, which is taxable for federal purposes (it is exempt only from state income tax) and is income for both book and tax. It creates no book/tax difference.",
    C: "Correct. Interest on state and local government obligations ($12,000 + $13,000 = $25,000) is excluded from federal taxable income under §103 but is recorded as income for book purposes, creating a $25,000 permanent difference. Treasury note interest ($14,000) and bank interest ($15,000) are income for both book and tax, so they create no difference.",
    D: "Incorrect. $39,000 wrongly treats the $14,000 Treasury note interest as a book/tax difference. Federal obligations are taxable for federal purposes; only the state and municipal interest ($25,000) is excluded."
  },
  tags: ["AICPA-released-2026", "Schedule M-1", "tax-exempt interest", "§103", "permanent difference"]
},
{
  id: "REG-171", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Differences between book and tax income — Schedule M-1/M-3", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27306 (RV-A0.2)",
  stem: "An accrual-basis, calendar-year-end corporation operates a professional sports team. During a year, the corporation was assessed the following fines and penalties:\n\n| Assessed by | Amount | For |\n|---|---|---|\n| Federal government | $32,000 | Late payment penalty on federal taxes |\n| State government | $1,000 | Speeding tickets paid by team |\n| Local government | $12,000 | Zoning violations fine |\n| Sports league | $40,000 | Dress code violations on the field |\n\nWhat amount of book/tax difference is attributable to the fines and penalties?",
  reference: "",
  options: [
    { key: "A", text: "$32,000" },
    { key: "B", text: "$44,000" },
    { key: "C", text: "$45,000" },
    { key: "D", text: "$85,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $32,000 counts only the federal penalty. The state speeding tickets ($1,000) and the local zoning fine ($12,000) are also paid to governments and are nondeductible under §162(f), so the total difference is $45,000.",
    B: "Incorrect. $44,000 omits the $1,000 of state speeding tickets. All three government-imposed amounts (federal $32,000, state $1,000, local $12,000) are nondeductible, totaling $45,000.",
    C: "Correct. Under §162(f), fines and penalties paid to a government for violation of law are not deductible. The federal late-payment penalty ($32,000), state speeding tickets ($1,000) and local zoning fine ($12,000) are all book expenses that are nondeductible for tax, a $45,000 book/tax difference. The $40,000 league fine is paid to a private organization, not a government, so it is an ordinary business expense with no book/tax difference.",
    D: "Incorrect. $85,000 treats the $40,000 sports league fine as nondeductible. Penalties paid to private organizations are deductible business expenses; §162(f) applies only to amounts paid to a government or governmental entity."
  },
  tags: ["AICPA-released-2026", "Schedule M-1", "§162(f)", "fines and penalties", "permanent difference"]
},
{
  id: "REG-172", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Differences between book and tax income — Schedule M-1/M-3", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27307 (RV-A0.2)",
  stem: "For the current year, an accrual-basis corporation's bad debt expense for book purposes is $27,000. The corporation had $25,000 in write-offs of previously accrued credit losses for the current year. How is the corporation's book net income adjusted in order to arrive at taxable income?",
  reference: "",
  options: [
    { key: "A", text: "$2,000 is added back to book net income." },
    { key: "B", text: "$2,000 is deducted from book net income." },
    { key: "C", text: "$25,000 is deducted from book net income." },
    { key: "D", text: "$27,000 is deducted from book net income." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. For tax purposes, accrual-basis taxpayers must use the specific charge-off (direct write-off) method under §166; the allowance (expected credit loss) method used for financial reporting is not allowed. Only the $25,000 of actual write-offs is deductible. Because $27,000 was expensed for book, the $2,000 excess is added back to book income to arrive at taxable income (a temporary difference).",
    B: "Incorrect. Book expense ($27,000) exceeds the tax deduction ($25,000), so taxable income is higher than book income. The $2,000 difference must be added back, not deducted.",
    C: "Incorrect. The $25,000 of write-offs is the tax deduction, but $27,000 has already been deducted in arriving at book income. Deducting $25,000 again would double-count; the adjustment is the $2,000 excess, added back.",
    D: "Incorrect. The $27,000 book expense is already reflected in book net income. Deducting it again would double-count; the correct adjustment is to add back the $2,000 by which book expense exceeds the allowable tax deduction."
  },
  tags: ["AICPA-released-2026", "Schedule M-1", "bad debts", "§166", "specific charge-off method", "temporary difference"]
},
{
  id: "REG-173", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Differences between book and tax income — Schedule M-1/M-3", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27308 (RV-A0.2)",
  stem: "If a taxpayer incurred $200 in business meals with client expenses that are an expense for financial reporting but subject to a deduction limitation, how is the amount reported on Schedule M-3?",
  reference: "",
  options: [
    { key: "A", text: "An entry of $100 is shown as a difference that is a book expense and not deductible." },
    { key: "B", text: "An entry of $100 is shown as a difference that is a deduction and not a book expense." },
    { key: "C", text: "An entry of $200 is shown as a difference that is a book expense and not deductible." },
    { key: "D", text: "An entry of $200 is shown as a difference that is a deduction and not a book expense." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Business meals are 50% deductible under §274(n). The full $200 is a book expense, but only $100 is deductible for tax. On Schedule M-3 the nondeductible $100 is reported as a book expense that is not a tax deduction (a permanent difference that increases taxable income relative to book).",
    B: "Incorrect. A \"deduction and not a book expense\" describes an item that reduces taxable income without appearing in the financial statements (for example, excess tax depreciation). For meals the reverse is true: $100 is a book expense that is not deductible.",
    C: "Incorrect. Only $100, not $200, is the book/tax difference. The other $100 is both a book expense and a tax deduction and creates no difference.",
    D: "Incorrect. Reporting $200 as a deduction that is not a book expense would mean the entire amount is deductible for tax but not booked, which is backwards. The $200 is a book expense, and only the $100 nondeductible portion is a difference."
  },
  tags: ["AICPA-released-2026", "Schedule M-3", "business meals", "§274(n)", "permanent difference"]
},
{
  id: "REG-174", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Differences between book and tax income — Schedule M-1/M-3", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27310 (RV-A0.2)",
  stem: "A calendar year, accrual-basis company accrued bonuses of $200,000 to its cash-basis employees at the end of Year 4, when the employees were officially notified of the bonus amounts. A total of $125,000 of the bonuses was paid on February 1, Year 5, and the remaining $75,000 was paid on June 1, Year 5. Regarding the deductibility of the bonuses, the company may deduct",
  reference: "",
  options: [
    { key: "A", text: "$200,000 in Year 4" },
    { key: "B", text: "$200,000 in Year 5" },
    { key: "C", text: "$125,000 in Year 4 and $0 in Year 5" },
    { key: "D", text: "$125,000 in Year 4 and $75,000 in Year 5" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. The full $200,000 cannot be deducted in Year 4. Only compensation paid within 2½ months after year-end escapes the deferred-compensation rule of §404(a)(5); the $75,000 paid June 1 is outside that window and is deductible only in Year 5.",
    B: "Incorrect. Although all bonuses were paid in Year 5, the $125,000 paid on February 1 falls within 2½ months of year-end, so the accrual-basis employer may deduct it in Year 4, the year the liability was fixed and accrued.",
    C: "Incorrect. $125,000 in Year 4 is right, but the $75,000 paid on June 1, Year 5 does not disappear. It is deductible in Year 5, the year it is actually paid.",
    D: "Correct. An accrual-basis employer may deduct a year-end bonus accrual in the year accrued only if it is paid to the (cash-basis) employees within 2½ months after year-end, i.e. by March 15, Year 5 (§404(a)(5); Reg. §1.404(b)-1T). The $125,000 paid February 1 qualifies and is deductible in Year 4. The $75,000 paid June 1 is deferred compensation, deductible in Year 5 when paid."
  },
  tags: ["AICPA-released-2026", "accrued bonuses", "2.5-month rule", "§404(a)(5)", "accrual method", "temporary difference"]
},
{
  id: "REG-175", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods", skill: "Application", difficulty: 1,
  source: "AICPA Newly Released 2026, MCQ-27312 (RV-B1.1)",
  stem: "A publicly traded C corporation pays its CEO an annual salary consisting of the following amounts:\n\n- $500,000 in cash salary\n- $300,000 in cash commission\n- $400,000 in performance-based stock grants\n\nWhat amount is the maximum deduction that the corporation can take on its federal income tax return for the CEO's salary?",
  reference: "",
  options: [
    { key: "A", text: "$800,000" },
    { key: "B", text: "$900,000" },
    { key: "C", text: "$1,000,000" },
    { key: "D", text: "$1,200,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $800,000 counts only the cash salary and commission and leaves out the $400,000 of performance-based stock grants. Since the TCJA repealed the performance-based exception, all forms of compensation count toward the §162(m) cap.",
    B: "Incorrect. $900,000 counts salary and stock grants but omits the $300,000 commission. Commissions are no longer excepted from the §162(m) limit; total compensation is $1,200,000, capped at $1,000,000.",
    C: "Correct. §162(m) limits a publicly held corporation's deduction for compensation paid to a covered employee (including the CEO) to $1,000,000 per year. After the TCJA, there is no exception for commissions or performance-based pay. Total compensation of $1,200,000 ($500,000 + $300,000 + $400,000) exceeds the cap, so the maximum deduction is $1,000,000.",
    D: "Incorrect. $1,200,000 is the total compensation without applying the §162(m) $1,000,000 limitation."
  },
  tags: ["AICPA-released-2026", "§162(m)", "executive compensation", "covered employee", "$1,000,000 limit"]
},
{
  id: "REG-176", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27313 (RV-B1.2)",
  stem: "A corporation had taxable income of $100,000 before considering the following sales. The corporation sold stock in Carver Corp. that it held for five years for $60,000. The corporation's basis in Carver stock was $84,000. The corporation also sold stock in Sherfey Corp. that it held for two years for $72,000. The corporation's basis in Sherfey stock was $60,000. What amount is the corporation's taxable income after considering the capital asset sales?",
  reference: "",
  options: [
    { key: "A", text: "$88,000" },
    { key: "B", text: "$97,000" },
    { key: "C", text: "$100,000" },
    { key: "D", text: "$112,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $88,000 deducts the $12,000 net capital loss against ordinary income. Corporations may not do this (§1211(a)); a net capital loss may only be carried back 3 years and forward 5 years to offset capital gains.",
    B: "Incorrect. $97,000 allows a $3,000 capital loss deduction. The $3,000 allowance in §1211(b) is available only to individuals, not corporations.",
    C: "Correct. Carver: $60,000 - $84,000 = $24,000 capital loss. Sherfey: $72,000 - $60,000 = $12,000 capital gain. Net capital loss = $12,000. Under §1211(a) a corporation may deduct capital losses only to the extent of capital gains, so the $12,000 gain is fully offset and the remaining $12,000 loss is not deductible this year; taxable income stays at $100,000. The excess is carried back 3 years and forward 5 years (§1212(a)) as a short-term capital loss.",
    D: "Incorrect. $112,000 includes the $12,000 gain but ignores the loss entirely. The corporation may use $12,000 of the $24,000 Carver loss to offset the Sherfey gain, leaving taxable income at $100,000."
  },
  tags: ["AICPA-released-2026", "corporate capital losses", "§1211(a)", "§1212(a)", "carryback 3 forward 5"]
},
{
  id: "REG-177", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Basis of partner's interest", skill: "Application", difficulty: 2,
  source: "AICPA Newly Released 2026, MCQ-27316 (RV-D2.1)",
  stem: "A general partnership has two partners that each have a 50% interest in the profits and losses of the company. During Year 1, the partnership earned a net profit of $60,000 from ordinary business activities, reduced its liabilities by $26,000, and distributed $10,000 to each partner. At the beginning of Year 1, one of the partners had a tax basis of $70,000. What amount is that partner's tax basis at year-end?",
  reference: "",
  options: [
    { key: "A", text: "$77,000" },
    { key: "B", text: "$90,000" },
    { key: "C", text: "$95,000" },
    { key: "D", text: "$120,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Beginning basis $70,000 + share of ordinary income ($60,000 x 50% = $30,000) - cash distribution ($10,000) - share of the decrease in partnership liabilities ($26,000 x 50% = $13,000, treated as a deemed distribution under §752(b)) = $77,000.",
    B: "Incorrect. $90,000 ($70,000 + $30,000 - $10,000) ignores the partner's $13,000 share of the reduction in partnership liabilities. A decrease in a partner's share of liabilities is a deemed cash distribution that reduces basis (§752(b)).",
    C: "Incorrect. $95,000 reduces basis by only half of the $10,000 distribution (each partner received the full $10,000) and also omits the $13,000 liability decrease ($70,000 + $30,000 - $5,000).",
    D: "Incorrect. $120,000 increases basis by the full $60,000 of partnership income instead of the partner's 50% share ($30,000) and omits the $13,000 liability decrease ($70,000 + $60,000 - $10,000)."
  },
  tags: ["AICPA-released-2026", "partner basis", "§705", "§752(b)", "liabilities", "distributions"]
},
{
  id: "REG-178", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Limited liability companies — Tax classification options", skill: "Remembering & Understanding", difficulty: 1,
  source: "AICPA Newly Released 2026, MCQ-27317 (RV-E0.1)",
  stem: "Which of the following federal tax classifications is not available to a limited liability company?",
  reference: "",
  options: [
    { key: "A", text: "A trust" },
    { key: "B", text: "A partnership" },
    { key: "C", text: "An association" },
    { key: "D", text: "An entity disregarded as separate from its owner" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under the check-the-box regulations (Reg. §301.7701-3), an LLC may be classified as a partnership (multi-member default), a disregarded entity (single-member default), or an association taxable as a corporation. A trust is a distinct legal arrangement and is not an available classification for an LLC.",
    B: "Incorrect. Partnership is the default federal classification for a multi-member LLC that has not filed an entity classification election on Form 8832.",
    C: "Incorrect. An LLC may elect on Form 8832 to be classified as an association taxable as a corporation (and may then elect S status on Form 2553 if eligible).",
    D: "Incorrect. Disregarded entity is the default classification for a single-member LLC; it is treated as a sole proprietorship (or a division of its corporate owner) for federal tax purposes."
  },
  tags: ["AICPA-released-2026", "LLC", "check-the-box", "Reg. §301.7701-3", "Form 8832"]
},
// ---- Batch 2026-09-23, Area I ----
{
  id: "REG-179",
  area: "I",
  areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Regulations governing practice before the IRS (Circular 230)",
  skill: "Application",
  difficulty: 2,
  stem: "A client received written notice from the IRS that its Year 1 return would be examined. Ninety days later the client engaged a CPA to prepare an amended Year 1 return claiming a refund and asked to pay the CPA 20% of any refund obtained. Under Treasury Circular 230, the CPA:",
  reference: "",
  options: [
    { key: "A", text: "May charge the contingent fee, because the amended return is filed within 120 days of the examination notice." },
    { key: "B", text: "May not charge the contingent fee, because contingent fees are never permitted for amended returns." },
    { key: "C", text: "May charge the contingent fee only if the refund claim relates solely to interest or penalties." },
    { key: "D", text: "May not charge the contingent fee, because the client did not receive the notice before the original return was filed." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Circular 230 §10.27(b)(2) permits a contingent fee for services rendered in connection with an IRS examination of, or challenge to, an original return, or to an amended return or claim for refund filed within 120 days of the taxpayer receiving a written notice of examination. The claim here is filed 90 days after the notice, so the fee is permitted.",
    B: "Incorrect. This overstates the general prohibition. Although §10.27(b)(1) bars contingent fees for preparing original returns and for amended returns or refund claims generally, §10.27(b)(2) carves out amended returns and refund claims filed within 120 days of a written examination notice.",
    C: "Incorrect. The interest-and-penalty exception in §10.27(b)(3) is a separate, independent exception. It is not a condition on the examination exception in §10.27(b)(2), which applies to any refund claim filed within the 120-day window.",
    D: "Incorrect. Nothing in §10.27 requires the examination notice to precede the original return. The exception is measured from the taxpayer's receipt of the written notice to the filing of the amended return or refund claim."
  },
  tags: ["batch-2026-09-23", "Circular 230", "§10.27", "contingent fees", "examination notice"]
},
{
  id: "REG-180",
  area: "I",
  areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Regulations governing practice before the IRS (Circular 230)",
  skill: "Application",
  difficulty: 2,
  stem: "A client terminated a CPA before paying the fee for the current-year return and demanded the return of all materials. The CPA holds the client's brokerage statements, the CPA's completed but unfiled return, and the CPA's workpapers. Under Treasury Circular 230, the CPA must return which of the following while the fee dispute is unresolved?",
  reference: "",
  options: [
    { key: "A", text: "Only the brokerage statements." },
    { key: "B", text: "The brokerage statements and the completed return." },
    { key: "C", text: "The brokerage statements, the completed return and the workpapers." },
    { key: "D", text: "Nothing, until the fee is paid in full." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under Circular 230 §10.28, a practitioner must promptly return any and all records of the client that are necessary for the client to comply with federal tax obligations, even during a fee dispute. Records of the client are documents the client provided or pre-existing documents obtained from third parties; the brokerage statements qualify. The return the CPA prepared but has not been paid for is excluded from that definition, and the CPA's workpapers are the practitioner's own property.",
    B: "Incorrect. A return or other document prepared by the practitioner is a client record only if the practitioner has been paid for it, or if it has already been provided to the client. Because the fee is unpaid, the completed return may be withheld under §10.28(b).",
    C: "Incorrect. Practitioner workpapers are not records of the client under §10.28(b), and an unpaid-for return may be withheld. Only the client's own records must be returned unconditionally.",
    D: "Incorrect. Circular 230 §10.28(b) expressly states that a fee dispute does not relieve the practitioner of the duty to return records the client needs to comply with federal tax obligations. Only a state law permitting retention changes this, and even then the practitioner must let the client review and copy the records."
  },
  tags: ["batch-2026-09-23", "Circular 230", "§10.28", "client records", "fee dispute"]
},
{
  id: "REG-181",
  area: "I",
  areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Regulations governing practice before the IRS (Circular 230)",
  skill: "Application",
  difficulty: 2,
  stem: "A CPA is asked to represent both spouses of a divorcing couple before the IRS regarding a deficiency asserted on a joint return each spouse blames on the other. Under Treasury Circular 230, the CPA may represent both spouses only if:",
  reference: "",
  options: [
    { key: "A", text: "The CPA reasonably believes it can represent each competently, the representation is lawful, and each spouse consents in writing within 30 days." },
    { key: "B", text: "Each spouse gives oral consent after full disclosure, because written consent is required only for tax shelter matters." },
    { key: "C", text: "The IRS revenue agent handling the case approves the joint representation in writing." },
    { key: "D", text: "The spouses agree to an equal allocation of any deficiency before the CPA begins the engagement." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Circular 230 §10.29 permits representation despite a conflict of interest only when (1) the practitioner reasonably believes he or she can provide competent and diligent representation to each client, (2) the representation is not prohibited by law, and (3) each affected client waives the conflict by informed consent confirmed in writing at the time the conflict is known or within 30 days. Each spouse's interest in shifting the deficiency to the other is a direct conflict.",
    B: "Incorrect. Section 10.29(b) requires the consent to be confirmed in writing, and the practitioner must retain the written consents for at least 36 months after the representation ends. There is no oral-consent exception for non-shelter matters.",
    C: "Incorrect. The IRS has no role in approving a practitioner's conflict waiver. The waiver is a matter between the practitioner and the affected clients under §10.29; the copies of the consents must merely be available to the IRS on request.",
    D: "Incorrect. Nothing in §10.29 requires the clients to settle their competing positions in advance. The rule addresses the practitioner's ability to represent both clients competently and the clients' informed written consent, not the substantive outcome between them."
  },
  tags: ["batch-2026-09-23", "Circular 230", "§10.29", "conflict of interest", "written consent"]
},
{
  id: "REG-182",
  area: "I",
  areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Tax return preparer rules and penalties",
  skill: "Application",
  difficulty: 2,
  stem: "A tax return preparer received $1,600 to prepare a client's individual return. The preparer knowingly deducted personal expenses as business expenses, understating the tax by $9,000. The preparer's conduct is determined to be willful. What is the preparer's penalty under IRC §6694?",
  reference: "",
  options: [
    { key: "A", text: "$1,000" },
    { key: "B", text: "$1,200" },
    { key: "C", text: "$4,500" },
    { key: "D", text: "$5,000" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. $1,000 is the fixed floor for an unreasonable-position understatement under §6694(a). Because the conduct here was willful, the higher §6694(b) penalty applies, and its floor is $5,000.",
    B: "Incorrect. $1,200 is 75% of the $1,600 fee. Under §6694(b) the penalty is the greater of $5,000 or 75% of the income derived from the return, so the $5,000 floor controls because 75% of the fee ($1,200) is smaller.",
    C: "Incorrect. $4,500 is 50% of the $9,000 understatement. The §6694 percentages are applied to the preparer's income derived from the return, not to the understatement of tax.",
    D: "Correct. A willful attempt to understate tax, or a reckless or intentional disregard of rules, is penalized under §6694(b) at the greater of $5,000 or 75% of the income derived (or to be derived) by the preparer with respect to the return. 75% x $1,600 = $1,200, so the greater amount, $5,000, applies. The penalty is reduced by any §6694(a) penalty paid on the same return."
  },
  tags: ["batch-2026-09-23", "§6694(b)", "preparer penalty", "willful understatement", "income derived"]
},
{
  id: "REG-183",
  area: "I",
  areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Tax return preparer rules and penalties",
  skill: "Remembering & Understanding",
  difficulty: 1,
  stem: "Each of the following acts by a paid tax return preparer results in a penalty under IRC §6695, except:",
  reference: "",
  options: [
    { key: "A", text: "Failing to furnish the preparer tax identification number on a return the preparer signs." },
    { key: "B", text: "Endorsing and depositing a client's refund check into the preparer's account." },
    { key: "C", text: "Reporting a deduction based on the client's reasonable estimate when exact records are unavailable." },
    { key: "D", text: "Failing to furnish the client with a completed copy of the return." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Failing to furnish an identifying number (PTIN) is penalized under §6695(c). The same section also penalizes failing to sign the return under §6695(b).",
    B: "Incorrect. A preparer who endorses or otherwise negotiates a client's refund check is penalized under §6695(f) for each check. This is also prohibited by Circular 230 §10.31.",
    C: "Correct. Using a client's reasonable estimate is not an act listed in §6695. Estimates are permitted when exact data is unavailable and the estimate is reasonable under the circumstances; a preparer may in good faith rely on client-furnished information without verification under Reg. §1.6694-1(e). The §6695 penalties cover procedural failures: not furnishing a copy (a), not signing (b), no identifying number (c), not retaining a copy or list (d), not filing information returns of employed preparers (e), negotiating refund checks (f), and failing earned income credit and related due diligence (g).",
    D: "Incorrect. Section 6695(a) penalizes failing to furnish a completed copy of the return or claim to the taxpayer no later than the time it is presented for signature."
  },
  tags: ["batch-2026-09-23", "§6695", "preparer penalties", "PTIN", "refund check"]
},
{
  id: "REG-184",
  area: "I",
  areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Audits, appeals and the judicial process",
  skill: "Remembering & Understanding",
  difficulty: 1,
  stem: "A taxpayer disputes a proposed income tax deficiency and wants a jury trial. Which of the following statements about the taxpayer's choice of trial court is correct?",
  reference: "",
  options: [
    { key: "A", text: "The taxpayer may obtain a jury trial in the U.S. Tax Court without first paying the deficiency." },
    { key: "B", text: "The taxpayer must pay the deficiency and sue for a refund in a U.S. district court to obtain a jury trial." },
    { key: "C", text: "The taxpayer may obtain a jury trial in the U.S. Court of Federal Claims after paying the deficiency." },
    { key: "D", text: "A jury trial is available in any of the three trial courts if the deficiency is paid first." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The Tax Court is the only forum where the deficiency need not be paid first, but it has no jury trials. Its cases are decided by Tax Court judges (or by a special trial judge in small tax cases).",
    B: "Correct. A jury trial is available only in a U.S. district court. Because a district court hears tax cases as refund suits, the taxpayer must first pay the deficiency, file a refund claim with the IRS and have the claim denied or six months elapse before suing.",
    C: "Incorrect. The Court of Federal Claims, like the district court, requires prepayment and a refund claim, but it sits without a jury. Its appeals go to the Court of Appeals for the Federal Circuit rather than the taxpayer's regional circuit.",
    D: "Incorrect. Only the district court offers a jury. The Tax Court and the Court of Federal Claims decide cases without juries regardless of whether the tax has been paid."
  },
  tags: ["batch-2026-09-23", "judicial process", "Tax Court", "district court", "jury trial", "prepayment"]
},
{
  id: "REG-185",
  area: "I",
  areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Audits, appeals and the judicial process",
  skill: "Application",
  difficulty: 2,
  stem: "A taxpayer residing in the United States did not respond to a 30-day letter and then received a statutory notice of deficiency dated and mailed on March 1. The taxpayer wants to contest the deficiency without paying it. By when must the taxpayer act, and how?",
  reference: "",
  options: [
    { key: "A", text: "By March 31, by filing a written protest with the IRS Independent Office of Appeals." },
    { key: "B", text: "By May 30, by filing a petition with the U.S. Tax Court." },
    { key: "C", text: "By July 29, by filing a petition with the U.S. Tax Court." },
    { key: "D", text: "Within two years of paying the tax, by filing a refund suit in a U.S. district court." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. A written protest to Appeals is the response to the 30-day letter, and that window has passed. Once the statutory notice (90-day letter) is issued, the taxpayer's route to a prepayment forum is a Tax Court petition, not a protest.",
    B: "Correct. Under IRC §6213(a), a taxpayer has 90 days from the mailing of the notice of deficiency (March 1 through May 30) to petition the Tax Court. Filing the petition suspends assessment and collection, so the taxpayer contests the deficiency without paying it. The 90-day period is jurisdictional and cannot be extended by the IRS.",
    C: "Incorrect. 150 days (through July 29) is the period allowed only when the notice is addressed to a person outside the United States. This taxpayer resides in the United States, so the 90-day period applies.",
    D: "Incorrect. A refund suit in district court is available only after the taxpayer pays the tax and files a refund claim. It is not a way to contest the deficiency without paying it."
  },
  tags: ["batch-2026-09-23", "notice of deficiency", "90-day letter", "§6213", "Tax Court petition"]
},
{
  id: "REG-186",
  area: "I",
  areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Statute of limitations (assessment and refund claims)",
  skill: "Application",
  difficulty: 2,
  stem: "A taxpayer filed the Year 1 return on February 1, Year 2, its due date being April 15, Year 2. The return showed $12,000 of tax, of which $9,000 was paid through withholding and $3,000 was paid with the return. The taxpayer discovers an error and files a refund claim on March 1, Year 5. What is the maximum refund allowable?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$3,000" },
    { key: "C", text: "$9,000" },
    { key: "D", text: "$12,000" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. $0 treats the claim as untimely by measuring three years from the actual filing date (February 1, Year 2 to February 1, Year 5). Under §6513(a), an early return is deemed filed on its due date, so the three-year period runs to April 15, Year 5, and the March 1, Year 5 claim is timely.",
    B: "Incorrect. $3,000 assumes only the two-year look-back applies and counts only the payment made with the return. Because the claim is filed within three years of the deemed filing date, the three-year look-back covers all tax paid within the three years before the claim, plus any extension period.",
    C: "Incorrect. $9,000 counts only the withholding and omits the $3,000 paid with the return. Both the withholding (deemed paid April 15, Year 2 under §6513(b)) and the balance paid with the early return (deemed paid on the due date under §6513(a)) fall within the three-year look-back period.",
    D: "Correct. Under §6511(a) a refund claim must be filed within the later of three years from the date the return was filed or two years from the date the tax was paid. An early return is deemed filed on the due date (§6513(a)), so the claim filed March 1, Year 5 is within three years. Under §6511(b)(2)(A), the refund is limited to tax paid within the three years immediately preceding the claim; under §6513(b) the $9,000 withholding is deemed paid on April 15, Year 2, and under §6513(a) the $3,000 paid early with the return is likewise deemed paid on the April 15, Year 2 due date. Both fall inside the three-year window, so the full $12,000 is recoverable."
  },
  tags: ["batch-2026-09-23", "§6511", "§6513", "refund claim", "look-back period", "statute of limitations"]
},
{
  id: "REG-187",
  area: "I",
  areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Taxpayer penalties",
  skill: "Application",
  difficulty: 2,
  stem: "On examination, an individual's return is found to have underpaid tax by $40,000. The IRS proves by clear and convincing evidence that part of the underpayment is due to fraud. The taxpayer establishes by a preponderance of the evidence that $10,000 of the underpayment was not attributable to fraud. What is the civil fraud penalty?",
  reference: "",
  options: [
    { key: "A", text: "$6,000" },
    { key: "B", text: "$8,000" },
    { key: "C", text: "$22,500" },
    { key: "D", text: "$30,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $6,000 applies the 20% accuracy-related rate of §6662 to the $30,000 fraud portion. Fraud is penalized under §6663 at 75%, and §6662(b) provides that the accuracy-related penalty does not apply to any portion of an underpayment on which the fraud penalty is imposed.",
    B: "Incorrect. $8,000 is the 20% accuracy-related penalty on the entire $40,000 underpayment. Once the IRS proves fraud, the 75% rate of §6663 governs the fraudulent portion; the accuracy-related penalty may still be asserted only on the $10,000 nonfraud portion if a §6662 ground exists.",
    C: "Correct. Under §6663(a) the penalty is 75% of the portion of the underpayment attributable to fraud. Under §6663(b), once the IRS proves that any portion is due to fraud, the entire underpayment is treated as fraudulent except any portion the taxpayer establishes by a preponderance of the evidence is not. The fraud portion is $40,000 - $10,000 = $30,000, and the penalty is 75% x $30,000 = $22,500.",
    D: "Incorrect. $30,000 applies the 75% rate to the full $40,000. That would be correct only if the taxpayer failed to carry the burden of showing that part of the underpayment was not due to fraud; here the taxpayer established that $10,000 was not, so that portion is excluded under §6663(b)."
  },
  tags: ["batch-2026-09-23", "§6663", "civil fraud penalty", "burden of proof", "75%"]
},
{
  id: "REG-188",
  area: "I",
  areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Authoritative hierarchy",
  skill: "Remembering & Understanding",
  difficulty: 1,
  stem: "Which of the following statements about sources of federal tax authority is correct?",
  reference: "",
  options: [
    { key: "A", text: "A private letter ruling may be relied upon as precedent by any taxpayer with similar facts." },
    { key: "B", text: "A revenue ruling carries greater authority than a Treasury regulation." },
    { key: "C", text: "A Treasury regulation carries the force of law unless it conflicts with the Internal Revenue Code." },
    { key: "D", text: "A revenue procedure is binding only on the taxpayer who requested it." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. A private letter ruling is issued to a specific taxpayer and, under §6110(k)(3), may not be used or cited as precedent by others. It indicates the IRS's thinking but binds the IRS only as to the requesting taxpayer.",
    B: "Incorrect. This inverts the hierarchy. Treasury regulations are the Treasury Department's official interpretation of the Code issued under §7805 and rank above revenue rulings, which are IRS positions on specific fact patterns and are not entitled to the same deference by courts.",
    C: "Correct. The Internal Revenue Code is the highest source of tax law after the Constitution and treaties; Treasury regulations issued under §7805 (interpretive) or a specific Code grant (legislative) have the force and effect of law and are followed by courts unless they are unreasonable or conflict with the statute. Below regulations sit revenue rulings and revenue procedures, then private letter rulings and other taxpayer-specific guidance.",
    D: "Incorrect. Revenue procedures are published in the Internal Revenue Bulletin and state IRS practice and procedure that all taxpayers may follow. Taxpayer-specific guidance is the private letter ruling, determination letter or technical advice memorandum."
  },
  tags: ["batch-2026-09-23", "authoritative hierarchy", "Treasury regulations", "revenue ruling", "private letter ruling", "§6110"]
},
{
  id: "REG-189",
  area: "I",
  areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Legal duties and responsibilities — Common law duties and liabilities to clients and third parties",
  skill: "Application",
  difficulty: 2,
  stem: "A CPA signed a client's business return without examining any of the underlying records, relying entirely on figures the client supplied, and the income was grossly overstated. A lender the CPA did not know about relied on the return and suffered a loss. In a state that follows the Ultramares rule, the lender:",
  reference: "",
  options: [
    { key: "A", text: "Cannot recover, because it was not in privity of contract with the CPA." },
    { key: "B", text: "Can recover for ordinary negligence, because lenders are foreseeable users of tax returns." },
    { key: "C", text: "Can recover if the CPA's reckless disregard amounts to constructive fraud." },
    { key: "D", text: "Can recover only if it proves the CPA intended to deceive the lender." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Lack of privity bars a third party's claim for ordinary negligence under Ultramares, but it is not a defense to fraud or constructive fraud. Any third party who justifiably relies on a CPA's fraudulent or grossly negligent work may recover regardless of privity.",
    B: "Incorrect. This states the reasonably foreseeable user rule, the broadest standard, followed by only a few states. Under Ultramares a party not in privity (or near privity) cannot recover for ordinary negligence at all; the lender here was also unknown to the CPA, so even the Restatement known-user rule would not help.",
    C: "Correct. Ultramares v. Touche limits negligence liability to parties in privity but holds that gross negligence, a reckless disregard for the truth so extreme that it evidences a lack of any genuine belief in the work's accuracy, may be treated as constructive fraud. Constructive fraud, like actual fraud, is actionable by any third party who relied on the work, so the lender can recover if it proves the CPA's conduct rose to that level.",
    D: "Incorrect. Intent to deceive (scienter) is required for actual fraud. Constructive fraud substitutes gross negligence or reckless disregard for actual intent, so the lender need not prove that the CPA intended to deceive it."
  },
  tags: ["batch-2026-09-23", "Ultramares", "privity", "constructive fraud", "gross negligence", "third-party liability"]
},
{
  id: "REG-190",
  area: "I",
  areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Legal duties and responsibilities — Privileged communications, confidentiality and privacy acts",
  skill: "Application",
  difficulty: 2,
  stem: "A CPA advised a client on the tax treatment of a business restructuring. The client is later involved in each of the following proceedings. In which one can the client assert the IRC §7525 federally authorized tax practitioner privilege to protect the CPA's advice?",
  reference: "",
  options: [
    { key: "A", text: "A criminal tax investigation by the U.S. Department of Justice." },
    { key: "B", text: "A state income tax audit of the same restructuring." },
    { key: "C", text: "A civil examination of the restructuring by the IRS." },
    { key: "D", text: "A lawsuit brought by a shareholder alleging the restructuring was unfair." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Section 7525(a)(2) limits the privilege to noncriminal tax matters before the IRS and noncriminal tax proceedings in federal court brought by or against the United States. It offers no protection in a criminal investigation or prosecution.",
    B: "Incorrect. The §7525 privilege is a federal statute that applies only to federal tax matters. Whether communications with a CPA are privileged in a state tax audit depends on state law; many states have no accountant-client privilege.",
    C: "Correct. Section 7525 extends the common-law attorney-client privilege, to the extent it would apply to an attorney, to tax advice communications between a taxpayer and a federally authorized tax practitioner such as a CPA. The privilege may be asserted in a noncriminal tax matter before the IRS, which includes a civil examination. It does not cover return preparation work or written communications promoting a tax shelter to a corporation (§7525(b)).",
    D: "Incorrect. The privilege applies only in noncriminal tax matters before the IRS and in federal court proceedings brought by or against the United States. A private shareholder suit is neither, so the CPA's advice is not protected by §7525 in that litigation."
  },
  tags: ["batch-2026-09-23", "§7525", "tax practitioner privilege", "noncriminal", "confidentiality"]
},
// ---- Batch 2026-09-23, Area II ----
{
  id: "REG-191",
  area: "II",
  areaName: "Business Law",
  topic: "Agency — Authority of agents and principals",
  skill: "Application",
  difficulty: 2,
  stem: "A sole proprietor authorized an agent to buy inventory from a supplier the agent had dealt with for years. The proprietor died on March 1. On March 3, unaware of the death, the agent ordered $20,000 of goods from the supplier in the proprietor's name, and the supplier shipped them. Is the proprietor's estate bound by the March 3 order?",
  reference: "",
  options: [
    { key: "A", text: "Yes, because the agent had actual authority when the order was placed" },
    { key: "B", text: "Yes, because the supplier had no notice of the death and relied on apparent authority" },
    { key: "C", text: "No, because the principal's death terminated the agent's authority by operation of law" },
    { key: "D", text: "No, because an order for goods must be ratified in writing by the estate" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Actual authority derives from the principal's manifestations, and it ends automatically when the principal dies. The agent could not have actual authority on March 3 because there was no longer a principal to confer it, regardless of the agent's ignorance of the death.",
    B: "Incorrect. This applies the notice rule that governs termination by act of the parties. When a principal voluntarily revokes authority, apparent authority lingers until third parties receive notice, but termination by operation of law (death, insanity, bankruptcy of the principal) ends both actual and apparent authority without any notice.",
    C: "Correct. Under the common law of agency, the death of the principal terminates the agency by operation of law, ending actual and apparent authority immediately. Neither the agent's nor the supplier's lack of knowledge preserves the authority, so the estate is not bound by the March 3 contract; the supplier's remedy, if any, is against the agent.",
    D: "Incorrect. Ratification is a voluntary act by which a principal adopts an unauthorized contract; it is not a prerequisite for liability on an authorized one, and there is no general writing requirement for ratification. The estate is not bound because the authority ended, not because of a missing writing."
  },
  tags: ["batch-2026-09-23", "agency", "termination by operation of law", "death of principal", "apparent authority"]
},
{
  id: "REG-192",
  area: "II",
  areaName: "Business Law",
  topic: "Agency — Authority of agents and principals",
  skill: "Remembering & Understanding",
  difficulty: 2,
  stem: "An agent exceeded the scope of the agent's authority when contracting with a third party on behalf of a disclosed principal. Which of the following is required for the principal to ratify the contract?",
  reference: "",
  options: [
    { key: "A", text: "The principal must ratify the entire contract with knowledge of all material facts" },
    { key: "B", text: "The ratification must be in a signed writing delivered to the third party" },
    { key: "C", text: "The third party must give new consideration to the principal" },
    { key: "D", text: "The agent must have had apparent authority at the time of contracting" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Ratification requires that the principal, with knowledge of all material facts, affirm the entire transaction; a principal cannot ratify the favorable parts and reject the rest. The agent must have purported to act for the principal, the principal must have had capacity both when the act occurred and when ratifying, and the third party must not have withdrawn before ratification.",
    B: "Incorrect. Ratification may be express or implied from conduct, such as accepting the benefits of the contract or failing to repudiate it after learning the facts. A writing is required only where the underlying contract itself must be in writing under the statute of frauds.",
    C: "Incorrect. Ratification relates back to the time of the agent's unauthorized act and makes the original contract binding; no new consideration is needed from the third party. Consideration is an element of contract formation, not of ratification.",
    D: "Incorrect. Ratification exists precisely for situations where the agent had no authority of any kind. If the agent had apparent authority, the principal would already be bound to the third party and ratification would be unnecessary."
  },
  tags: ["batch-2026-09-23", "agency", "ratification", "unauthorized acts", "material facts"]
},
{
  id: "REG-193",
  area: "II",
  areaName: "Business Law",
  topic: "Agency — Duties and liabilities of agents and principals",
  skill: "Application",
  difficulty: 2,
  stem: "An individual, falsely claiming to be the purchasing agent of a corporation that had never employed the individual, ordered $30,000 of materials from a supplier in the corporation's name. The supplier had no prior dealings with the corporation. The corporation learned of the order and refused to accept the materials. Which of the following is correct?",
  reference: "",
  options: [
    { key: "A", text: "The corporation is bound because the supplier reasonably believed the individual was its agent" },
    { key: "B", text: "The individual is liable to the supplier for breach of the implied warranty of authority" },
    { key: "C", text: "Neither the individual nor the corporation is liable because no contract was formed" },
    { key: "D", text: "The corporation is bound because it failed to repudiate the order promptly" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Apparent authority arises only from the principal's own manifestations to the third party. The corporation never held the individual out as its agent and had no dealings with the supplier, so the supplier's belief, however sincere, rests solely on the individual's statements and cannot bind the corporation.",
    B: "Correct. A person who purports to contract on behalf of a principal impliedly warrants to the third party that the person has authority to do so. Because the individual had no actual or apparent authority and the corporation is not bound, the individual is liable to the supplier for breach of that implied warranty of authority (and for any misrepresentation).",
    C: "Incorrect. Although the corporation is not bound, the supplier is not without a remedy. The purported agent's implied warranty of authority makes the individual answerable to the supplier for the loss caused by the lack of authority.",
    D: "Incorrect. Silence or delay in repudiating binds a principal only when the principal knows the facts and its inaction could reasonably be understood as affirming the transaction. The corporation refused the order when it learned of it, so there was no ratification by conduct."
  },
  tags: ["batch-2026-09-23", "agency", "implied warranty of authority", "apparent authority", "agent liability", "ratification"]
},
{
  id: "REG-194",
  area: "II",
  areaName: "Business Law",
  topic: "Contracts — Formation",
  skill: "Application",
  difficulty: 2,
  stem: "A homeowner posted a notice stating, \"I will pay $500 to whoever returns my lost dog.\" A neighbor read the notice, found the dog after a two-day search, and returned it. Which of the following best describes the arrangement between the homeowner and the neighbor?",
  reference: "",
  options: [
    { key: "A", text: "A bilateral contract formed when the neighbor began searching for the dog" },
    { key: "B", text: "A unilateral contract formed when the neighbor returned the dog" },
    { key: "C", text: "An implied-in-fact contract formed by the parties' course of dealing" },
    { key: "D", text: "No contract, because the neighbor never communicated acceptance" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. A bilateral contract is an exchange of a promise for a promise. The homeowner's notice asked for an act (returning the dog), not a return promise, so the neighbor's decision to start searching created no bilateral contract; at most, beginning performance makes the offer temporarily irrevocable.",
    B: "Correct. An offer that seeks acceptance by performance rather than by a return promise creates a unilateral contract. The neighbor accepted by completing the requested act, returning the dog, and at that moment the homeowner became bound to pay $500.",
    C: "Incorrect. An implied-in-fact contract is inferred from conduct where no express terms were stated. Here the homeowner's notice expressly stated the terms, so the contract is an express unilateral contract, not an implied one.",
    D: "Incorrect. In a unilateral contract the offeree accepts by performing; separate notice of acceptance is not required unless the offer demands it or the offeror has no reasonable means of learning of performance. Returning the dog was both the performance and the acceptance."
  },
  tags: ["batch-2026-09-23", "contracts", "unilateral contract", "acceptance by performance", "types of contracts"]
},
{
  id: "REG-195",
  area: "II",
  areaName: "Business Law",
  topic: "Contracts — Formation",
  skill: "Application",
  difficulty: 2,
  stem: "A wholesaler sent a retailer a written offer to sell 1,000 units of goods at $30 each. The retailer, also a merchant, responded with a purchase order accepting the offer but adding a term requiring the wholesaler to pay return freight on defective units. The wholesaler shipped without objecting. Under the UCC, which of the following is correct?",
  reference: "",
  options: [
    { key: "A", text: "No contract was formed because the acceptance did not mirror the offer" },
    { key: "B", text: "A contract was formed and the return-freight term is part of it" },
    { key: "C", text: "A contract was formed but the return-freight term is excluded" },
    { key: "D", text: "The purchase order was a counteroffer that the wholesaler accepted by shipping" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This applies the common-law mirror-image rule. Under UCC 2-207, a definite and seasonable expression of acceptance operates as an acceptance even though it states terms additional to those offered, unless acceptance is expressly made conditional on assent to the added terms.",
    B: "Correct. Between merchants, an additional term in the acceptance becomes part of the contract under UCC 2-207(2) unless the offer expressly limited acceptance to its terms, the term materially alters the contract, or the offeror objects within a reasonable time. A modest freight allocation on defective goods is not a material alteration, and the wholesaler did not object, so the term is included.",
    C: "Incorrect. This is the result when one party is not a merchant, in which case additional terms are treated merely as proposals that need express assent. Both parties here are merchants, so the additional term is automatically included absent objection or material alteration.",
    D: "Incorrect. Under UCC 2-207 a response with additional terms is an acceptance, not a counteroffer, unless it is expressly conditioned on assent to the new terms. The contract was formed when the purchase order was sent, not when the goods were shipped."
  },
  tags: ["batch-2026-09-23", "contracts", "UCC 2-207", "battle of the forms", "additional terms", "merchants"]
},
{
  id: "REG-196",
  area: "II",
  areaName: "Business Law",
  topic: "Contracts — Formation",
  skill: "Application",
  difficulty: 2,
  stem: "A parts supplier contracted to deliver 5,000 components to a manufacturer at $12 each. Before delivery, the supplier's raw material costs rose and it asked for $14 per unit. The manufacturer agreed in a signed writing, and the supplier gave nothing new in exchange. Is the manufacturer's promise to pay $14 per unit enforceable?",
  reference: "",
  options: [
    { key: "A", text: "No, because the supplier had a preexisting duty to deliver at $12" },
    { key: "B", text: "No, because a price modification of goods must be supported by consideration" },
    { key: "C", text: "Yes, because a good-faith modification of a contract for the sale of goods needs no consideration" },
    { key: "D", text: "Yes, because any written modification is enforceable regardless of good faith" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. The preexisting duty rule is a common-law doctrine that governs service and construction contracts. This is a sale of goods governed by UCC Article 2, which displaces the preexisting duty rule for contract modifications.",
    B: "Incorrect. This states the common-law rule. UCC 2-209(1) provides that an agreement modifying a contract within Article 2 needs no consideration to be binding, so long as the modification is sought in good faith.",
    C: "Correct. Under UCC 2-209(1), a modification of a contract for the sale of goods is binding without new consideration. The requirement is good faith, which a genuine increase in the supplier's costs satisfies. Because the modified contract price ($70,000) exceeds $500, the signed writing also satisfies the statute of frauds under UCC 2-209(3).",
    D: "Incorrect. UCC 2-209 requires that the modification be made in good faith; extortion of a price increase by threatening breach without a legitimate commercial reason would not be enforceable. A writing alone does not cure bad faith."
  },
  tags: ["batch-2026-09-23", "contracts", "UCC 2-209", "modification", "consideration", "good faith"]
},
{
  id: "REG-197",
  area: "II",
  areaName: "Business Law",
  topic: "Contracts — Performance and discharge",
  skill: "Application",
  difficulty: 2,
  stem: "A portrait artist contracted to paint a client's portrait for $15,000, and a dealer separately contracted to sell the client 100 identical prints for $5,000. Before either contract was performed, the artist died and the dealer's warehouse manager died. Which contract, if any, is discharged?",
  reference: "",
  options: [
    { key: "A", text: "Only the portrait contract, because personal services died with the artist" },
    { key: "B", text: "Only the print contract, because the dealer's employee was necessary to perform" },
    { key: "C", text: "Both contracts, because death of a party or key employee is a supervening event" },
    { key: "D", text: "Neither contract, because death never excuses performance of a commercial contract" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. A contract for personal services that depends on the particular skill of the promisor is discharged by objective impossibility when the promisor dies or becomes incapacitated. Painting a portrait is such a service. A contract to deliver fungible goods is not discharged by the death of an employee, because the goods can be delivered by anyone.",
    B: "Incorrect. The death of a warehouse manager does not make delivery of standard prints impossible; the dealer can have someone else perform. Impossibility requires that performance be objectively impossible, not merely inconvenient for the particular obligor.",
    C: "Incorrect. Death discharges only contracts requiring the personal performance of the deceased. Ordinary commercial obligations, including sales of goods, survive and bind the estate or the business, so the print contract remains enforceable.",
    D: "Incorrect. Death of the promisor does discharge contracts for personal services because performance has become objectively impossible. The rule that commercial contracts survive death applies to obligations that others can perform, such as the print sale, not to personal services."
  },
  tags: ["batch-2026-09-23", "contracts", "discharge", "impossibility", "personal services", "death of party"]
},
{
  id: "REG-198",
  area: "II",
  areaName: "Business Law",
  topic: "Contracts — Performance and discharge",
  skill: "Application",
  difficulty: 2,
  stem: "A contractor agreed to build a garage for an owner for $60,000. The contractor delegated the entire job to a subcontractor and the owner, in a signed writing, agreed to accept the subcontractor's performance and release the contractor from all obligations. The subcontractor then abandoned the project. Whom may the owner hold liable?",
  reference: "",
  options: [
    { key: "A", text: "The contractor only, because a delegating party always remains liable" },
    { key: "B", text: "The subcontractor only, because a novation released the contractor" },
    { key: "C", text: "Either the contractor or the subcontractor, because delegation does not discharge the delegator" },
    { key: "D", text: "Neither, because the owner's consent to the delegation waived any claim for breach" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. A delegating party remains liable after an ordinary delegation, but here the owner did more than consent to the delegation. The owner expressly agreed to substitute the subcontractor and release the contractor, which is a novation, not a bare delegation.",
    B: "Correct. A novation is an agreement among all three parties in which the obligee accepts a new obligor in substitution for the original one and releases the original. Because the owner agreed in writing to accept the subcontractor's performance and discharge the contractor, the contractor is released and only the subcontractor is liable for the abandonment.",
    C: "Incorrect. This is the correct result for a delegation to which the obligee merely acquiesces: the delegator stays liable as a surety for the delegatee's performance. It does not apply where the obligee has expressly released the delegator, because that release converts the arrangement into a novation.",
    D: "Incorrect. Consent to a delegation or novation is not a waiver of the right to performance. The owner gave up its claim against the contractor, not its claim to have the garage built, and may sue the substituted party for breach."
  },
  tags: ["batch-2026-09-23", "contracts", "novation", "delegation", "discharge by agreement"]
},
{
  id: "REG-199",
  area: "II",
  areaName: "Business Law",
  topic: "Contracts — Breach and remedies",
  skill: "Application",
  difficulty: 2,
  stem: "A buyer contracted to purchase 200 units of goods from a seller at $150 per unit. The buyer wrongfully refused delivery. The seller, after giving the buyer reasonable notice, resold the identical units in a commercially reasonable manner for $130 per unit, incurring $800 of additional advertising costs and saving $300 of delivery expense. Under the UCC, what amount may the seller recover from the buyer?",
  reference: "",
  options: [
    { key: "A", text: "$3,700" },
    { key: "B", text: "$4,000" },
    { key: "C", text: "$4,500" },
    { key: "D", text: "$4,800" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $3,700 correctly subtracts the $300 of delivery expense saved ($4,000 - $300) but omits the $800 of advertising incurred on the resale. Under UCC 2-710 commercially reasonable expenses incurred in reselling the goods are incidental damages the seller recovers in addition to the price differential.",
    B: "Incorrect. $4,000 is only the contract-price minus resale-price differential (200 x ($150 - $130)). It omits the $800 of incidental resale costs the seller may recover and fails to subtract the $300 of expenses saved by the buyer's breach.",
    C: "Correct. Under UCC 2-706, a seller who resells in good faith and in a commercially reasonable manner recovers the contract price less the resale price, plus incidental damages under 2-710, less expenses saved because of the breach: (200 x $150) - (200 x $130) = $4,000, plus $800 advertising, less $300 saved = $4,500.",
    D: "Incorrect. $4,800 adds the $800 of incidental damages but does not subtract the $300 of delivery expense the seller saved because it no longer had to ship to the buyer. UCC 2-706 requires expenses saved in consequence of the breach to be deducted."
  },
  tags: ["batch-2026-09-23", "contracts", "UCC 2-706", "seller's resale damages", "incidental damages", "remedies"]
},
{
  id: "REG-200",
  area: "II",
  areaName: "Business Law",
  topic: "Contracts — Breach and remedies",
  skill: "Remembering & Understanding",
  difficulty: 2,
  stem: "Which of the following statements regarding remedies for breach of contract is correct?",
  reference: "",
  options: [
    { key: "A", text: "Punitive damages are generally awarded when a breach is willful" },
    { key: "B", text: "A liquidated damages clause is enforceable if it is a reasonable forecast of harm that was difficult to estimate" },
    { key: "C", text: "Specific performance is available for any breach involving the sale of goods" },
    { key: "D", text: "A nonbreaching party may recover consequential damages even if they were not foreseeable" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Punitive damages are generally not recoverable for breach of contract, however deliberate, because contract remedies aim to compensate rather than punish. They are available only when the conduct also constitutes an independent tort such as fraud.",
    B: "Correct. Courts enforce a liquidated damages provision when, at the time of contracting, actual damages would have been difficult to estimate and the stipulated amount is a reasonable forecast of the probable loss. A clause that is disproportionate to any likely harm is an unenforceable penalty.",
    C: "Incorrect. Specific performance is an equitable remedy reserved for cases where money damages are inadequate, such as land or unique goods (UCC 2-716). For ordinary fungible goods the buyer's remedy is cover or market-price damages, not a decree compelling delivery.",
    D: "Incorrect. Consequential damages are recoverable only if they were reasonably foreseeable to the breaching party at the time of contracting. Unforeseeable losses are excluded under the rule of Hadley v. Baxendale and UCC 2-715."
  },
  tags: ["batch-2026-09-23", "contracts", "liquidated damages", "specific performance", "punitive damages", "consequential damages"]
},
{
  id: "REG-201",
  area: "II",
  areaName: "Business Law",
  topic: "Debtor-creditor relationships — Suretyship, secured transactions and bankruptcy distributions",
  skill: "Application",
  difficulty: 3,
  stem: "On January 5, a bank filed a financing statement perfecting a security interest in all of a company's present and after-acquired equipment. On March 1, a vendor sold the company a machine on credit, retaining a security interest in it, and the company took possession that day. The vendor filed a financing statement on March 15. As to the machine, whose interest has priority?",
  reference: "",
  options: [
    { key: "A", text: "The bank, because it filed first" },
    { key: "B", text: "The bank, because a purchase-money security interest in equipment is perfected only by possession" },
    { key: "C", text: "The vendor, because it filed within 20 days after the company received possession" },
    { key: "D", text: "The vendor, because a purchase-money security interest in equipment is automatically perfected" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. The general first-to-file-or-perfect rule of UCC 9-322 would favor the bank, but it is displaced by the purchase-money superpriority in UCC 9-324(a). A PMSI in equipment that is perfected within 20 days of the debtor receiving possession beats an earlier-filed conflicting interest.",
    B: "Incorrect. A security interest in equipment may be perfected by filing a financing statement; possession is not required. The vendor's filing was effective and, because it was timely, gives the vendor superpriority.",
    C: "Correct. Under UCC 9-324(a), a perfected purchase-money security interest in goods other than inventory or livestock has priority over a conflicting security interest in the same goods if the PMSI is perfected when the debtor receives possession or within 20 days thereafter. The vendor filed 14 days after delivery, so its PMSI defeats the bank's earlier-filed after-acquired interest.",
    D: "Incorrect. Automatic perfection on attachment under UCC 9-309(1) applies only to a PMSI in consumer goods. A machine used in a business is equipment, so the vendor had to file (and did) to perfect; the vendor wins because the filing was within the 20-day grace period, not because perfection was automatic."
  },
  tags: ["batch-2026-09-23", "secured transactions", "UCC 9-324", "PMSI", "equipment", "priority", "20-day rule"]
},
{
  id: "REG-202",
  area: "II",
  areaName: "Business Law",
  topic: "Debtor-creditor relationships — Suretyship, secured transactions and bankruptcy distributions",
  skill: "Application",
  difficulty: 2,
  stem: "A surety guaranteed a debtor's $50,000 bank loan, which was also secured by the debtor's equipment. The debtor defaulted and the surety paid the bank the full $50,000. Which of the following rights does the surety now have?",
  reference: "",
  options: [
    { key: "A", text: "Subrogation to the bank's rights against the debtor, including the security interest in the equipment" },
    { key: "B", text: "Exoneration, requiring the bank to return the $50,000 and proceed first against the debtor" },
    { key: "C", text: "Contribution from the bank for one-half of the amount paid" },
    { key: "D", text: "Recovery from the debtor only after the bank has exhausted the equipment" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. A surety that pays the creditor in full is subrogated to the creditor's rights against the principal debtor, stepping into the creditor's position with respect to the debt and any collateral securing it. The surety may therefore enforce the security interest in the equipment and also has a direct right of reimbursement against the debtor.",
    B: "Incorrect. Exoneration is a right the surety may assert before paying, by seeking a court order compelling the debtor to pay the matured debt. Once the surety has paid, exoneration is no longer available and the surety cannot compel the creditor to refund the payment.",
    C: "Incorrect. Contribution is the right of a co-surety to recover from other co-sureties their proportionate share of a payment. The bank is the creditor, not a co-surety, so it owes the surety nothing.",
    D: "Incorrect. Absent an agreement otherwise, a surety is primarily liable and the creditor need not pursue the debtor or the collateral first. Correspondingly, after paying, the surety may proceed immediately against the debtor for reimbursement and may itself enforce the collateral through subrogation."
  },
  tags: ["batch-2026-09-23", "suretyship", "subrogation", "reimbursement", "exoneration", "guarantor rights"]
},
{
  id: "REG-203",
  area: "II",
  areaName: "Business Law",
  topic: "Federal laws and regulations — Bankruptcy (types, discharge and avoidance)",
  skill: "Remembering & Understanding",
  difficulty: 1,
  stem: "An individual with regular monthly income has fallen behind on mortgage payments and wants to keep the home while repaying creditors over time under a court-approved plan. Which chapter of the Bankruptcy Code is designed for this purpose?",
  reference: "",
  options: [
    { key: "A", text: "Chapter 7" },
    { key: "B", text: "Chapter 9" },
    { key: "C", text: "Chapter 11" },
    { key: "D", text: "Chapter 13" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. Chapter 7 is a liquidation. A trustee collects and sells the debtor's nonexempt assets and distributes the proceeds to creditors; it does not provide for a repayment plan and is generally unsuitable for a debtor whose goal is to cure a mortgage default and keep the home.",
    B: "Incorrect. Chapter 9 provides for the adjustment of debts of a municipality. It is not available to individuals.",
    C: "Incorrect. Chapter 11 is a reorganization used primarily by businesses, although individuals may file under it. It is far more complex and costly than Chapter 13 and is not the chapter designed for an individual wage earner's repayment plan.",
    D: "Correct. Chapter 13 (adjustment of debts of an individual with regular income) allows an individual debtor to propose a three- to five-year plan to repay creditors from future income while retaining assets, including curing a mortgage default over the life of the plan. Discharge is granted on completion of the plan."
  },
  tags: ["batch-2026-09-23", "bankruptcy", "Chapter 13", "types of bankruptcy", "repayment plan"]
},
{
  id: "REG-204",
  area: "II",
  areaName: "Business Law",
  topic: "Federal laws and regulations — Employment taxes and worker classification",
  skill: "Application",
  difficulty: 2,
  stem: "A corporation withheld $40,000 of federal income tax and $12,000 of the employees' share of FICA from wages but, on the instructions of its treasurer, used the money to pay suppliers instead of depositing it with the Treasury. The corporation is now insolvent. What is the maximum trust fund recovery penalty the IRS may assess personally against the treasurer under IRC §6672?",
  reference: "",
  options: [
    { key: "A", text: "$0, because the penalty may be assessed only against the corporation" },
    { key: "B", text: "$26,000" },
    { key: "C", text: "$52,000" },
    { key: "D", text: "$64,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. The purpose of §6672 is to reach beyond the employer entity. Any person who is responsible for collecting, accounting for and paying over withheld taxes and who willfully fails to do so is personally liable, and the penalty is commonly assessed against officers when the corporation cannot pay.",
    B: "Incorrect. $26,000 is 50% of the trust fund taxes. The §6672 penalty is not a percentage; it equals 100% of the withheld tax that was not paid over.",
    C: "Correct. The trust fund recovery penalty under §6672 equals the full amount of the taxes withheld from employees and not paid over: $40,000 of income tax withholding plus $12,000 of employee FICA = $52,000. The treasurer is a responsible person who willfully preferred other creditors, which satisfies the willfulness requirement.",
    D: "Incorrect. $64,000 adds the employer's matching share of FICA ($12,000). The employer's own share is not a trust fund tax because it was never withheld from employees, so it is outside §6672 even though the corporation still owes it."
  },
  tags: ["batch-2026-09-23", "employment taxes", "§6672", "trust fund recovery penalty", "responsible person", "withholding"]
},
{
  id: "REG-205",
  area: "II",
  areaName: "Business Law",
  topic: "Federal laws and regulations — Qualified health plans (ACA)",
  skill: "Remembering & Understanding",
  difficulty: 2,
  stem: "Which of the following statements regarding the premium tax credit under IRC §36B is correct?",
  reference: "",
  options: [
    { key: "A", text: "It is a nonrefundable credit available only to taxpayers who itemize deductions" },
    { key: "B", text: "It is available to an individual eligible for affordable, minimum-value coverage from an employer" },
    { key: "C", text: "It is a refundable credit for coverage purchased through a Health Insurance Marketplace" },
    { key: "D", text: "It may be claimed only after the end of the year on the individual's tax return" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. The premium tax credit is refundable and is claimed regardless of whether the taxpayer itemizes. Its purpose is to subsidize premiums for lower- and middle-income households, many of whom have little or no tax liability.",
    B: "Incorrect. An individual who is eligible for employer-sponsored coverage that is affordable and provides minimum value is not eligible for the premium tax credit for any month of that eligibility. The credit is intended for those without access to adequate employer coverage or government programs.",
    C: "Correct. Under §36B the premium tax credit is a refundable credit that helps eligible individuals and families pay premiums for qualified health plans purchased through a Marketplace (Exchange). Eligibility depends on household income relative to the federal poverty line, not being eligible for other minimum essential coverage, and not being claimed as a dependent.",
    D: "Incorrect. The credit may be paid in advance directly to the insurer during the year (advance premium tax credit) based on projected income. The taxpayer then reconciles the advance payments with the actual credit on Form 8962 when filing the return, repaying any excess subject to caps."
  },
  tags: ["batch-2026-09-23", "ACA", "§36B", "premium tax credit", "Marketplace", "refundable credit"]
},
{
  id: "REG-206",
  area: "II",
  areaName: "Business Law",
  topic: "Business structure — Rights, duties, obligations and authority of owners and management",
  skill: "Application",
  difficulty: 2,
  stem: "A director of a corporation owns a warehouse that the corporation wishes to lease. The director fully disclosed the ownership interest to the board, did not vote, and the remaining disinterested directors approved the lease at a rent equal to market rates. A shareholder later challenges the lease. Which of the following is correct?",
  reference: "",
  options: [
    { key: "A", text: "The lease is void because a director may never contract with the corporation" },
    { key: "B", text: "The lease is voidable at the corporation's option regardless of fairness" },
    { key: "C", text: "The lease is valid because it was approved by disinterested directors after full disclosure" },
    { key: "D", text: "The lease is valid only if it was also ratified by a majority of shareholders" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Modern corporation statutes do not prohibit transactions between a corporation and its directors. Such conflicting-interest transactions are permitted if properly approved or if fair to the corporation; an absolute ban would deprive corporations of legitimate dealings with insiders.",
    B: "Incorrect. A self-dealing transaction is voidable only when it was neither properly approved nor fair. Where the safe-harbor procedure was followed, the transaction is not voidable merely because a director was interested.",
    C: "Correct. Under typical state law (e.g., Model Business Corporation Act §8.61-8.62), a director's conflicting-interest transaction is protected if the material facts were disclosed and the transaction was approved by a majority of disinterested directors, or approved by disinterested shareholders, or is shown to be fair to the corporation. Full disclosure, abstention and approval by disinterested directors at market terms satisfy the duty of loyalty.",
    D: "Incorrect. Shareholder ratification is an alternative safe harbor, not an additional requirement. Approval by disinterested directors after full disclosure is sufficient on its own; shareholder approval is needed only when disinterested director approval is unavailable or the parties choose that route."
  },
  tags: ["batch-2026-09-23", "corporations", "duty of loyalty", "conflicting-interest transaction", "disinterested directors", "self-dealing"]
},
// ---- Batch 2026-09-23, Area III ----
{
  id: "REG-207",
  area: "III",
  areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets",
  skill: "Application",
  difficulty: 2,
  stem: "A taxpayer inherited stock that the decedent had purchased for $40,000. The stock was worth $100,000 on the date of death, $92,000 when the executor distributed it to the taxpayer four months after death, and $90,000 six months after death. The executor elected the alternate valuation date. What is the taxpayer's basis in the stock?",
  reference: "",
  options: [
    { key: "A", text: "$40,000" },
    { key: "B", text: "$90,000" },
    { key: "C", text: "$92,000" },
    { key: "D", text: "$100,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $40,000 carries over the decedent's cost as if the stock had been received by gift. Inherited property takes a basis equal to its estate tax value under §1014, not the decedent's basis.",
    B: "Incorrect. $90,000 is the value exactly six months after death. Under §2032(a)(1), property that is distributed, sold or otherwise disposed of within the six-month period is valued as of the date of distribution or disposition, not the six-month date.",
    C: "Correct. When the executor elects the alternate valuation date, the basis of inherited property under §1014(a)(2) is its value on the alternate valuation date. For property distributed before the six-month date, §2032(a)(1) sets that value at the date of distribution, so the taxpayer's basis is the $92,000 value on the distribution date.",
    D: "Incorrect. $100,000 is the date-of-death value. That is the basis only when the alternate valuation date is not elected (§1014(a)(1)); the election here shifts the valuation to the distribution date."
  },
  tags: ["batch-2026-09-23", "§1014", "§2032", "alternate valuation date", "inherited property"]
},
{
  id: "REG-208",
  area: "III",
  areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets",
  skill: "Application",
  difficulty: 2,
  stem: "A taxpayer received land as a gift. The donor had held the land for five years and had an adjusted basis of $30,000; the land's fair market value on the date of the gift was $20,000. No gift tax was paid. Eight months later the taxpayer sold the land to an unrelated party for $17,000. What is the amount and character of the taxpayer's loss?",
  reference: "",
  options: [
    { key: "A", text: "$3,000 short-term capital loss" },
    { key: "B", text: "$3,000 long-term capital loss" },
    { key: "C", text: "$13,000 short-term capital loss" },
    { key: "D", text: "$13,000 long-term capital loss" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. When the donor's basis exceeds fair market value at the date of the gift, the donee's basis for determining loss is the $20,000 fair market value (§1015(a)). Selling for $17,000 produces a $3,000 loss. Because the donee's basis is fair market value rather than the donor's carryover basis, the donor's holding period does not tack under §1223(2) and Reg. §1.1223-1(b); the donee's own eight-month holding period makes the loss short-term.",
    B: "Incorrect. $3,000 is the right amount, but long-term wrongly tacks the donor's five-year holding period. Tacking applies only when the donee's basis is determined by reference to the donor's basis; the fair-market-value loss basis is not, so the holding period starts on the date of the gift.",
    C: "Incorrect. $13,000 uses the donor's $30,000 carryover basis ($30,000 - $17,000). Carryover basis applies to gains and to sales between the two basis figures, but for a sale below fair market value the loss basis is the $20,000 fair market value.",
    D: "Incorrect. $13,000 uses the donor's $30,000 basis and also tacks the donor's holding period. Both steps are wrong for a loss sale of gifted loss property: the basis is the $20,000 fair market value and the holding period begins on the date of the gift."
  },
  tags: ["batch-2026-09-23", "§1015", "dual basis", "gift of loss property", "holding period", "§1223"]
},
{
  id: "REG-209",
  area: "III",
  areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets",
  skill: "Application",
  difficulty: 2,
  stem: "A taxpayer purchased a condominium for $300,000 and used it as a personal residence. When its fair market value was $260,000, the taxpayer converted it to rental property. After renting it out for six years, during which the taxpayer properly claimed $20,000 of depreciation, the taxpayer sold the condominium for $310,000. What amount of gain should the taxpayer recognize on the sale?",
  reference: "",
  options: [
    { key: "A", text: "$10,000" },
    { key: "B", text: "$30,000" },
    { key: "C", text: "$50,000" },
    { key: "D", text: "$70,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $10,000 ($310,000 - $300,000) ignores the $20,000 of depreciation. Under §1016(a)(2) basis is reduced by the depreciation allowed or allowable, so the adjusted basis for gain is $280,000, not $300,000.",
    B: "Correct. The lower fair-market-value basis of Reg. §1.165-9(b) applies only for computing a loss. For gain, the taxpayer uses the original $300,000 cost reduced by the $20,000 of depreciation, an adjusted basis of $280,000. Gain is $310,000 - $280,000 = $30,000.",
    C: "Incorrect. $50,000 ($310,000 - $260,000) uses the $260,000 fair market value at conversion as the basis for gain without reducing it for depreciation. Fair market value at conversion is the starting point only for the loss basis and for depreciation, not for measuring gain.",
    D: "Incorrect. $70,000 ($310,000 - ($260,000 - $20,000)) uses the loss basis (fair market value at conversion less depreciation) to compute a gain. Because the sale produced a gain, the original cost basis less depreciation controls under Reg. §1.165-9(b)(2) and §1011."
  },
  tags: ["batch-2026-09-23", "conversion to rental", "Reg. §1.165-9", "§1016", "adjusted basis", "gain on sale"]
},
{
  id: "REG-210",
  area: "III",
  areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets",
  skill: "Application",
  difficulty: 2,
  stem: "A taxpayer sold 100 shares of a corporation's stock, which had a basis of $10,000, for $7,000. Ten days later the taxpayer purchased 60 shares of the same stock for $4,500. What is the taxpayer's basis in the 60 shares purchased?",
  reference: "",
  options: [
    { key: "A", text: "$4,500" },
    { key: "B", text: "$6,000" },
    { key: "C", text: "$6,300" },
    { key: "D", text: "$7,500" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $4,500 is the cost of the new shares with no wash-sale adjustment. Because substantially identical stock was acquired within 30 days of the loss sale, §1091 disallows part of the $3,000 loss and §1091(d) adds the disallowed amount to the basis of the replacement shares.",
    B: "Incorrect. $6,000 carries over the original per-share basis ($10,000 / 100 = $100 x 60 shares). The replacement shares take their own cost plus the disallowed loss, not the basis of the shares that were sold.",
    C: "Correct. The realized loss is $10,000 - $7,000 = $3,000. Only 60 of the 100 shares were replaced, so under §1091(b) 60% of the loss, $1,800, is disallowed and the remaining $1,200 is currently deductible. The disallowed $1,800 is added to the cost of the replacement shares under §1091(d): $4,500 + $1,800 = $6,300.",
    D: "Incorrect. $7,500 ($4,500 + $3,000) adds the entire loss to the new shares' basis. When fewer shares are repurchased than were sold, the wash-sale rule applies only to the proportion of shares replaced (60/100), so only $1,800 of the loss is disallowed and added to basis."
  },
  tags: ["batch-2026-09-23", "§1091", "wash sale", "partial repurchase", "basis adjustment"]
},
{
  id: "REG-211",
  area: "III",
  areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets",
  skill: "Application",
  difficulty: 2,
  stem: "On the first day of Year 1, a calendar-year business paid $12,000 of loan origination fees and legal costs to obtain a five-year business loan. On the last day of Year 3 the business repaid the loan in full. What amount may the business deduct for these loan costs in Year 3?",
  reference: "",
  options: [
    { key: "A", text: "$2,400" },
    { key: "B", text: "$4,800" },
    { key: "C", text: "$7,200" },
    { key: "D", text: "$12,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $2,400 is only the regular Year 3 amortization ($12,000 / 5 years). It ignores that the loan was retired in Year 3, which allows the remaining unamortized balance to be deducted in the year of repayment.",
    B: "Incorrect. $4,800 is the unamortized balance for Years 4 and 5 (2 x $2,400) that is written off on repayment, but it omits the regular $2,400 amortization for Year 3 itself. Both amounts are deductible in Year 3.",
    C: "Correct. Debt issuance costs are capitalized and amortized over the term of the loan under Reg. §1.446-5, here $12,000 / 5 = $2,400 per year. Year 3 receives its regular $2,400, and because the loan was paid off at year-end the remaining unamortized $4,800 (Years 4 and 5) is also deducted, for a total of $7,200.",
    D: "Incorrect. $12,000 treats the entire cost as deductible in Year 3. Years 1 and 2 already absorbed $2,400 each through amortization, so only the remaining $7,200 of basis is available in Year 3."
  },
  tags: ["batch-2026-09-23", "loan costs", "debt issuance costs", "Reg. §1.446-5", "amortization", "early repayment"]
},
{
  id: "REG-212",
  area: "III",
  areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets",
  skill: "Application",
  difficulty: 2,
  stem: "A calendar-year corporation began business operations on April 1 of Year 1. Before opening it incurred $60,000 of start-up costs for market research and employee training, and it elects to deduct start-up costs to the extent allowed under §195. What amount may the corporation deduct for start-up costs in Year 1?",
  reference: "",
  options: [
    { key: "A", text: "$3,000" },
    { key: "B", text: "$4,000" },
    { key: "C", text: "$5,000" },
    { key: "D", text: "$7,750" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The $5,000 first-year deduction under §195(b)(1)(A) is reduced dollar-for-dollar by the amount of start-up costs over $50,000. Costs of $60,000 exceed $50,000 by $10,000, so the immediate deduction is $0. The full $60,000 is amortized over 180 months beginning with the month business began: $60,000 / 180 x 9 months (April-December) = $3,000.",
    B: "Incorrect. $4,000 amortizes $60,000 over 180 months for a full 12 months ($60,000 / 180 x 12). Amortization begins with the month in which the active trade or business begins, so only 9 months are allowed in Year 1.",
    C: "Incorrect. $5,000 claims the full first-year deduction without applying the phase-out. Because start-up costs exceed $50,000 by $10,000, the $5,000 allowance is reduced to $0 under §195(b)(1)(A)(ii).",
    D: "Incorrect. $7,750 takes the $5,000 immediate deduction and amortizes the $55,000 remainder over 9 months ($55,000 / 180 x 9 = $2,750). It ignores the phase-out of the $5,000 allowance when costs exceed $50,000."
  },
  tags: ["batch-2026-09-23", "§195", "start-up costs", "phase-out", "180-month amortization"]
},
{
  id: "REG-213",
  area: "III",
  areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets",
  skill: "Application",
  difficulty: 2,
  stem: "In Year 1 a taxpayer bought 100 shares of a corporation's stock for $20 per share plus a $50 commission. In Year 2 the taxpayer bought another 100 shares for $30 per share plus a $50 commission. In Year 4 the taxpayer sold 150 shares for $40 per share without identifying which shares were sold. What is the taxpayer's recognized gain?",
  reference: "",
  options: [
    { key: "A", text: "$1,925" },
    { key: "B", text: "$2,175" },
    { key: "C", text: "$2,425" },
    { key: "D", text: "$2,500" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $1,925 treats the shares as sold on a last-in, first-out basis (100 Year 2 shares at $30.50 plus 50 Year 1 shares at $20.50 = $4,075 basis). Reg. §1.1012-1(c) requires first-in, first-out when the taxpayer does not adequately identify the shares sold.",
    B: "Incorrect. $2,175 uses an average cost of $25.50 per share (($2,050 + $3,050) / 200 x 150 = $3,825 basis). Average-cost basis is available only for mutual fund shares and certain dividend-reinvestment-plan shares under Reg. §1.1012-1(e), not for ordinary corporate stock.",
    C: "Correct. Commissions are part of the cost basis under §1012. The Year 1 lot has a basis of $2,050 ($20.50 per share) and the Year 2 lot $3,050 ($30.50 per share). With no identification, FIFO applies: the 150 shares sold are the 100 Year 1 shares ($2,050) plus 50 Year 2 shares ($1,525), a basis of $3,575. Gain is $6,000 - $3,575 = $2,425.",
    D: "Incorrect. $2,500 applies FIFO but leaves the commissions out of basis ($2,000 + $1,500 = $3,500). Brokerage commissions paid to acquire stock are capitalized into the cost of the shares, not deducted, so they reduce the gain."
  },
  tags: ["batch-2026-09-23", "§1012", "stock basis", "FIFO", "Reg. §1.1012-1(c)", "commissions"]
},
{
  id: "REG-214",
  area: "III",
  areaName: "Federal Taxation of Property Transactions",
  topic: "Cost recovery — Depreciation (MACRS, bonus, §179) and amortization",
  skill: "Application",
  difficulty: 2,
  stem: "In Year 1 a calendar-year business placed in service 5-year MACRS equipment costing $100,000. The business elected out of bonus depreciation and did not elect §179 expensing. The half-year convention applies. The equipment was sold in August of Year 3. Using the table provided, what amount of depreciation is allowed for Year 3?",
  reference: "| MACRS 5-year, 200% declining balance, half-year convention | Rate |\n|---|---|\n| Year 1 | 20.00% |\n| Year 2 | 32.00% |\n| Year 3 | 19.20% |\n| Year 4 | 11.52% |\n| Year 5 | 11.52% |\n| Year 6 | 5.76% |",
  options: [
    { key: "A", text: "$9,600" },
    { key: "B", text: "$11,520" },
    { key: "C", text: "$16,000" },
    { key: "D", text: "$19,200" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under the half-year convention of §168(d)(4)(A), property is treated as disposed of at the midpoint of the year of disposition, so only half of the table amount is allowed in that year: $100,000 x 19.20% = $19,200 x 1/2 = $9,600. The actual month of sale (August) does not matter.",
    B: "Incorrect. $11,520 applies the Year 4 rate (11.52%). The equipment was placed in service in Year 1, so Year 3 is its third recovery year and the 19.20% rate applies, then halved for the disposition.",
    C: "Incorrect. $16,000 halves the Year 2 rate ($100,000 x 32% / 2). The Year 3 rate of 19.20% is the correct row of the table for the third year of the recovery period.",
    D: "Incorrect. $19,200 is the full Year 3 table amount. Because the asset was disposed of during Year 3, the half-year convention limits the deduction to one-half of the annual amount in the year of disposition."
  },
  tags: ["batch-2026-09-23", "MACRS", "half-year convention", "§168(d)", "year of disposition", "5-year property"]
},
{
  id: "REG-215",
  area: "III",
  areaName: "Federal Taxation of Property Transactions",
  topic: "Cost recovery — Depreciation (MACRS, bonus, §179) and amortization",
  skill: "Application",
  difficulty: 2,
  stem: "On May 12 of Year 1, a calendar-year corporation purchased an office building for $1,170,000, of which $390,000 was allocable to the land, and immediately placed it in service. The building is nonresidential real property with a 39-year recovery period. What is the corporation's Year 1 depreciation deduction for the building?",
  reference: "",
  options: [
    { key: "A", text: "$12,500" },
    { key: "B", text: "$13,333" },
    { key: "C", text: "$18,750" },
    { key: "D", text: "$20,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Land is not depreciable, so the depreciable basis is $1,170,000 - $390,000 = $780,000. Nonresidential real property is depreciated straight-line over 39 years using the mid-month convention (§168(b)(3), (c), (d)(2)). Annual depreciation is $780,000 / 39 = $20,000; property placed in service in May is treated as placed in service mid-May, giving 7.5 months: $20,000 x 7.5 / 12 = $12,500.",
    B: "Incorrect. $13,333 ($20,000 x 8 / 12) counts the full month of May. The mid-month convention of §168(d)(4)(B) treats real property as placed in service at the midpoint of the month, so May counts as half a month (7.5 months total).",
    C: "Incorrect. $18,750 ($1,170,000 / 39 x 7.5 / 12) applies the correct convention but includes the $390,000 of land in the depreciable basis. Land has an unlimited useful life and is never depreciable.",
    D: "Incorrect. $20,000 is a full year of depreciation on the $780,000 building. The mid-month convention limits the first year to 7.5 months for property placed in service in May."
  },
  tags: ["batch-2026-09-23", "nonresidential real property", "39-year", "mid-month convention", "§168", "land not depreciable"]
},
{
  id: "REG-216",
  area: "III",
  areaName: "Federal Taxation of Property Transactions",
  topic: "Cost recovery — Depreciation (MACRS, bonus, §179) and amortization",
  skill: "Application",
  difficulty: 2,
  stem: "A sole proprietor placed $900,000 of qualifying equipment in service during the year and elected to expense the entire cost under §179. The dollar limit for the year is $2,500,000, and the phase-out begins at $4,000,000 of purchases. The proprietorship's net income before the §179 deduction was $600,000, and the proprietor also earned $100,000 of wages as an employee of an unrelated company. What amount may be deducted under §179 in the current year?",
  reference: "",
  options: [
    { key: "A", text: "$500,000" },
    { key: "B", text: "$600,000" },
    { key: "C", text: "$700,000" },
    { key: "D", text: "$900,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $500,000 subtracts the wages from the proprietorship income ($600,000 - $100,000). Wages earned as an employee are added to, not subtracted from, the active trade or business income that sets the §179 limit under Reg. §1.179-2(c)(6)(iv).",
    B: "Incorrect. $600,000 limits the deduction to the proprietorship's own net income. Under Reg. §1.179-2(c)(6)(iv) an individual's W-2 wages count as income from the active conduct of a trade or business, so the taxable income limit is $700,000.",
    C: "Correct. The $900,000 elected is within the $2,500,000 dollar limit and no phase-out applies. However, §179(b)(3) limits the deduction to the taxpayer's aggregate taxable income from the active conduct of any trade or business, which for an individual includes wages: $600,000 + $100,000 = $700,000. The disallowed $200,000 carries forward indefinitely to later years.",
    D: "Incorrect. $900,000 ignores the taxable income limitation of §179(b)(3). Although the full cost is within the dollar limit, only $700,000 can be deducted in the current year; the remaining $200,000 is carried forward, not deducted or lost."
  },
  tags: ["batch-2026-09-23", "§179", "taxable income limitation", "W-2 wages", "carryforward"]
},
{
  id: "REG-217",
  area: "III",
  areaName: "Federal Taxation of Property Transactions",
  topic: "Cost recovery — Depreciation (MACRS, bonus, §179) and amortization",
  skill: "Remembering & Understanding",
  difficulty: 2,
  stem: "A calendar-year corporation acquired each of the following assets from unrelated parties during the current year and placed them in service in its business. Which asset is NOT eligible for the special depreciation allowance (bonus depreciation) under §168(k)?",
  reference: "",
  options: [
    { key: "A", text: "Used machinery with a 7-year recovery period never previously used by the corporation" },
    { key: "B", text: "Off-the-shelf computer software" },
    { key: "C", text: "An office building with a 39-year recovery period" },
    { key: "D", text: "Qualified improvement property installed in a leased office" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Used property qualifies for bonus depreciation under §168(k)(2)(E)(ii) as long as the taxpayer did not previously hold a depreciable interest in it and it was not acquired from a related party or in a carryover-basis transaction. Machinery with a 7-year recovery period is MACRS property with a recovery period of 20 years or less.",
    B: "Incorrect. Off-the-shelf computer software described in §167(f)(1) is specifically listed as qualified property under §168(k)(2)(A)(i)(II), even though it is an intangible amortized over 36 months.",
    C: "Correct. Qualified property under §168(k)(2)(A)(i)(I) is MACRS property with a recovery period of 20 years or less. Nonresidential real property has a 39-year recovery period, so the building itself is not eligible for bonus depreciation and is depreciated straight-line over 39 years. Only certain interior improvements to such a building (qualified improvement property) or, after OBBBA, a qualified production property used in manufacturing can be expensed; an office building qualifies for neither.",
    D: "Incorrect. Qualified improvement property (interior improvements to nonresidential real property after it is placed in service) has a 15-year recovery period and is expressly qualified property under §168(k)(2)(A)(i)(IV) and (e)(6)."
  },
  tags: ["batch-2026-09-23", "bonus depreciation", "§168(k)", "used property", "nonresidential real property", "qualified improvement property"]
},
{
  id: "REG-218",
  area: "III",
  areaName: "Federal Taxation of Property Transactions",
  topic: "Cost recovery — Depreciation (MACRS, bonus, §179) and amortization",
  skill: "Application",
  difficulty: 2,
  stem: "On October 1 of Year 1, a calendar-year corporation purchased the assets of a competitor's business and allocated $180,000 of the purchase price to a customer list. Management estimates that the customer list has a useful life of five years. What amount of amortization may the corporation deduct for the customer list in Year 1?",
  reference: "",
  options: [
    { key: "A", text: "$3,000" },
    { key: "B", text: "$9,000" },
    { key: "C", text: "$12,000" },
    { key: "D", text: "$36,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. A customer list acquired in connection with the purchase of a business is a §197 intangible (§197(d)(1)(C)(ii)) and must be amortized straight-line over 15 years regardless of its actual useful life, beginning with the month of acquisition. $180,000 / 15 = $12,000 per year x 3/12 (October-December) = $3,000.",
    B: "Incorrect. $9,000 amortizes the list over its estimated five-year useful life for three months ($180,000 / 5 x 3/12). §197(a) overrides useful-life amortization and imposes a fixed 15-year period for acquired intangibles.",
    C: "Incorrect. $12,000 is a full year of §197 amortization ($180,000 / 15). Amortization begins with the month the intangible is acquired, so only three months (October through December) are allowed in Year 1.",
    D: "Incorrect. $36,000 is a full year of amortization over the five-year useful life ($180,000 / 5). Both the period (15 years, not 5) and the partial-year computation (3 months, not 12) are wrong."
  },
  tags: ["batch-2026-09-23", "§197", "customer list", "15-year amortization", "acquired intangibles"]
},
// ---- Batch 2026-09-23, Area IV ----
{
  id: "REG-219",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions",
  skill: "Application",
  difficulty: 2,
  stem: "An employer provided an employee with $150,000 of group-term life insurance coverage for the entire year under a nondiscriminatory plan. Under the IRS uniform premium table the cost for the employee's age is $0.15 per $1,000 of coverage per month. The employee paid $60 toward the coverage through payroll deductions. What amount must the employee include in gross income?",
  reference: "",
  options: [
    { key: "A", text: "$120" },
    { key: "B", text: "$180" },
    { key: "C", text: "$210" },
    { key: "D", text: "$270" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under §79(a) the cost of employer-provided group-term life insurance is excluded only for the first $50,000 of coverage. The excess coverage is $100,000, so the table cost is 100 x $0.15 x 12 months = $180. Amounts the employee pays toward the coverage reduce the inclusion (§79(a)(2)), so $180 - $60 = $120 is included.",
    B: "Incorrect. $180 is the table cost of the $100,000 of excess coverage but ignores the $60 the employee paid. Under §79(a)(2) the includible amount is the table cost less any amount paid by the employee.",
    C: "Incorrect. $210 applies the table rate to the full $150,000 of coverage (150 x $0.15 x 12 = $270) and then subtracts the $60 employee payment. The first $50,000 of coverage is excluded under §79(a)(1) and should not be in the computation.",
    D: "Incorrect. $270 applies the table rate to the full $150,000 of coverage and ignores both the $50,000 exclusion and the $60 employee contribution."
  },
  tags: ["batch-2026-09-23", "§79", "group-term life insurance", "fringe benefits", "uniform premium table"]
},
{
  id: "REG-220",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions",
  skill: "Remembering & Understanding",
  difficulty: 1,
  stem: "Each of the following employer-provided benefits is excluded from an employee's gross income, except:",
  reference: "",
  options: [
    { key: "A", text: "Occasional personal use of the employer's photocopier" },
    { key: "B", text: "A professional journal subscription the employee uses in performing the job" },
    { key: "C", text: "Paid membership at an off-premises athletic club" },
    { key: "D", text: "Employer-paid premiums for the employee's health insurance" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Occasional personal use of office equipment is a de minimis fringe benefit under §132(e): its value is so small that accounting for it would be unreasonable or administratively impracticable. It is excluded from gross income.",
    B: "Incorrect. A subscription the employee would have been able to deduct as a business expense if the employee had paid for it is a working condition fringe under §132(d) and is excluded.",
    C: "Correct. The §132(j)(4) exclusion for athletic facilities applies only to a facility located on the employer's premises and operated by the employer substantially for the use of employees and their families. Paying for a membership at an off-site commercial club is a taxable fringe benefit includible in wages.",
    D: "Incorrect. Employer contributions to accident or health plans are excluded from the employee's gross income under §106, regardless of amount."
  },
  tags: ["batch-2026-09-23", "§132", "fringe benefits", "de minimis fringe", "working condition fringe", "§106"]
},
{
  id: "REG-221",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions",
  skill: "Application",
  difficulty: 2,
  stem: "During the current year an individual received $2,000 of interest on U.S. Treasury bonds, $1,500 of interest on bonds issued by a city, $800 of interest paid by the IRS on a late federal income tax refund, and a $1,200 distribution from a corporation that its Form 1099-DIV reported entirely as a nondividend distribution. What amount is included in the individual's gross income?",
  reference: "",
  options: [
    { key: "A", text: "$2,000" },
    { key: "B", text: "$2,800" },
    { key: "C", text: "$4,300" },
    { key: "D", text: "$5,500" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $2,000 includes only the Treasury bond interest and omits the $800 of interest paid on the tax refund. Interest the government pays on an overpayment of tax is ordinary interest income under §61(a)(4); only the refund of the tax itself is not income.",
    B: "Correct. Interest on U.S. Treasury obligations is fully taxable for federal purposes ($2,000), and interest paid by the IRS on a refund is taxable interest income ($800), for a total of $2,800 under §61(a)(4). Interest on obligations of a state or its political subdivisions is excluded by §103(a), and a nondividend distribution is a return of capital under §301(c)(2) that reduces the shareholder's stock basis and is not income unless it exceeds basis.",
    C: "Incorrect. $4,300 adds the $1,500 of municipal bond interest to the taxable interest ($2,800 + $1,500). Interest on bonds issued by a state, city or other political subdivision is excluded from gross income under §103(a), although it is reported on the return and counts for certain other computations.",
    D: "Incorrect. $5,500 includes every receipt. It fails to exclude the $1,500 of municipal interest under §103(a) and treats the $1,200 nondividend distribution as income; a distribution that is not out of earnings and profits is a tax-free recovery of basis under §301(c)(2) until basis is exhausted."
  },
  tags: ["batch-2026-09-23", "§61(a)(4)", "§103", "interest income", "nondividend distribution", "§301(c)"]
},
{
  id: "REG-222",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions",
  skill: "Application",
  difficulty: 2,
  stem: "A taxpayer, age 62, has a single traditional IRA to which the taxpayer made $20,000 of nondeductible contributions over the years, properly reported on Form 8606. During the current year the taxpayer withdrew $20,000, and the account balance at year-end was $80,000. What amount of the distribution is included in gross income?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$15,000" },
    { key: "C", text: "$16,000" },
    { key: "D", text: "$20,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $0 treats the entire withdrawal as a tax-free return of the $20,000 of basis. Under §72(e)(8) and §408(d)(2), nondeductible contributions are not recovered first; each distribution is partly basis and partly taxable earnings in the proportion that basis bears to the total account value.",
    B: "Incorrect. $15,000 computes the exclusion ratio using only the year-end balance ($20,000 / $80,000 = 25%, so $5,000 excluded). The denominator must be the year-end balance plus the distributions made during the year ($100,000).",
    C: "Correct. The exclusion ratio is basis divided by the account value at year-end plus current-year distributions: $20,000 / ($80,000 + $20,000) = 20%. The excluded portion is 20% x $20,000 = $4,000 and the taxable portion is $16,000 (§72(e)(8), Form 8606). The taxpayer is over 59 1/2, so no §72(t) additional tax applies.",
    D: "Incorrect. $20,000 taxes the entire distribution and ignores the taxpayer's $20,000 of after-tax basis from nondeductible contributions, which is recovered pro rata under §72."
  },
  tags: ["batch-2026-09-23", "§72", "§408(d)", "traditional IRA", "nondeductible contributions", "Form 8606"]
},
{
  id: "REG-223",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions",
  skill: "Application",
  difficulty: 2,
  stem: "A taxpayer negotiated with a credit card issuer, which forgave $50,000 of the taxpayer's balance. Immediately before the discharge the taxpayer's assets had a fair market value of $120,000 and the taxpayer's total liabilities were $150,000. The taxpayer was not in a bankruptcy proceeding. What amount of cancellation of debt income must the taxpayer include in gross income?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$20,000" },
    { key: "C", text: "$30,000" },
    { key: "D", text: "$50,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $0 assumes that any insolvent taxpayer excludes all discharged debt. Outside bankruptcy, §108(a)(3) limits the insolvency exclusion to the amount by which the taxpayer is insolvent; the remainder is income under §61(a)(11).",
    B: "Correct. The taxpayer was insolvent by $150,000 - $120,000 = $30,000 immediately before the discharge. Under §108(a)(1)(B) and (a)(3) the exclusion is limited to that $30,000, so $50,000 - $30,000 = $20,000 of cancellation of debt income is included in gross income. Tax attributes are reduced by the excluded amount under §108(b).",
    C: "Incorrect. $30,000 is the amount of the insolvency, which is the portion excluded, not the portion included. The includible amount is the excess of the debt discharged over the insolvency.",
    D: "Incorrect. $50,000 includes the entire discharge and ignores the §108(a)(1)(B) insolvency exclusion, which shelters $30,000 of the forgiven debt."
  },
  tags: ["batch-2026-09-23", "§108", "cancellation of debt", "insolvency exclusion", "§61(a)(11)"]
},
{
  id: "REG-224",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions",
  skill: "Application",
  difficulty: 1,
  stem: "Under a divorce decree executed after the effective date of the TCJA repeal of the alimony deduction, a taxpayer received the following from a former spouse during the current year: $30,000 designated as alimony, $12,000 of child support, and a $50,000 cash payment in settlement of the taxpayer's interest in the marital residence. What amount is included in the taxpayer's gross income?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$30,000" },
    { key: "C", text: "$42,000" },
    { key: "D", text: "$80,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. For divorce or separation instruments executed after the TCJA effective date, alimony is neither deductible by the payer nor includible by the recipient (former §71 and §215 were repealed). Child support has never been includible, and a transfer of property (including cash) incident to divorce is a nontaxable transfer under §1041. Nothing is included.",
    B: "Incorrect. $30,000 applies the pre-TCJA rule under which alimony was includible by the recipient under former §71. That rule continues only for instruments executed before the effective date and not later modified to adopt the new treatment.",
    C: "Incorrect. $42,000 includes both the alimony and the child support. Child support is excluded under any regime, and post-TCJA alimony is also excluded.",
    D: "Incorrect. $80,000 includes the alimony and the property settlement. A cash payment made incident to divorce in exchange for the taxpayer's interest in marital property is a §1041 transfer with no gain or income recognized."
  },
  tags: ["batch-2026-09-23", "alimony", "TCJA", "§1041", "child support", "divorce"]
},
{
  id: "REG-225",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions",
  skill: "Application",
  difficulty: 2,
  stem: "A taxpayer is the beneficiary of a $200,000 life insurance policy on a parent who died in Year 1. Instead of a lump sum, the taxpayer elected to receive the proceeds in 10 equal annual installments of $24,000 beginning in Year 1. What amount must the taxpayer include in gross income for Year 1?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$4,000" },
    { key: "C", text: "$24,000" },
    { key: "D", text: "$40,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $0 treats the entire installment as excluded death benefit. Under §101(d) only the portion of each payment that represents the face amount is excluded; the interest element earned because the insurer holds the proceeds is taxable.",
    B: "Correct. Under §101(a) the $200,000 face amount is excluded from gross income, and §101(d) prorates that excluded amount over the payment period: $200,000 / 10 = $20,000 of each installment is excluded. The remaining $24,000 - $20,000 = $4,000 of each payment is interest and is included in gross income.",
    C: "Incorrect. $24,000 taxes the entire installment on the theory that electing installments forfeits the exclusion. The §101(a) exclusion is preserved for installment payments; only the interest element is taxed.",
    D: "Incorrect. $40,000 is the total interest that will be received over the 10 years ($240,000 - $200,000). Each year's inclusion is limited to the interest element of that year's payment, $4,000."
  },
  tags: ["batch-2026-09-23", "§101", "life insurance proceeds", "installment payments", "interest element"]
},
{
  id: "REG-226",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Capital gains, basis and holding period",
  skill: "Application",
  difficulty: 2,
  stem: "An individual taxpayer had the following capital transactions during the current year: a $5,000 short-term capital gain, an $8,000 short-term capital loss, a $12,000 long-term capital gain, and a $2,000 long-term capital loss. What is the taxpayer's net capital gain or loss for the year?",
  reference: "",
  options: [
    { key: "A", text: "$7,000 net long-term capital gain" },
    { key: "B", text: "$7,000 net short-term capital gain" },
    { key: "C", text: "$10,000 net long-term capital gain and a $3,000 short-term capital loss deduction" },
    { key: "D", text: "$17,000 net capital gain" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under §1222 gains and losses are first netted within each holding-period group: short-term nets to $5,000 - $8,000 = ($3,000) and long-term nets to $12,000 - $2,000 = $10,000. When one group is a net gain and the other a net loss, they are netted against each other: $10,000 - $3,000 = $7,000 net long-term capital gain, taxed at the preferential rates.",
    B: "Incorrect. The $7,000 amount is right, but the character follows the group that produced the net gain. Because the long-term group was the net-gain group, the result is a net long-term capital gain, not short-term.",
    C: "Incorrect. This stops after netting within each group and treats the $3,000 net short-term loss as a separate deduction against ordinary income. The $3,000 limit in §1211(b) applies only when losses exceed gains overall; here the net short-term loss must first offset the net long-term gain.",
    D: "Incorrect. $17,000 adds the two gains and ignores the $10,000 of losses. Capital losses must be netted against capital gains under §1222 before any amount is included in income."
  },
  tags: ["batch-2026-09-23", "§1222", "capital gain netting", "net capital gain", "holding period"]
},
{
  id: "REG-227",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Capital gains, basis and holding period",
  skill: "Remembering & Understanding",
  difficulty: 2,
  stem: "A taxpayer purchased shares of stock on March 10, Year 1, and sold them at a gain on March 10, Year 2. The stock was not acquired by gift or inheritance. Which of the following statements about the character of the gain is correct?",
  reference: "",
  options: [
    { key: "A", text: "Short-term, because the stock was held exactly one year and not more than one year" },
    { key: "B", text: "Long-term, because the stock was held for a full year" },
    { key: "C", text: "Long-term, because the holding period includes the day of purchase" },
    { key: "D", text: "Short-term, because stock is short-term unless held more than 18 months" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under §1222 a gain is long-term only if the asset was held for more than one year. The holding period begins on the day after acquisition (Rev. Rul. 66-7), so stock bought on March 10, Year 1 must be sold on or after March 11, Year 2 to be long-term. A sale on March 10, Year 2 is a holding period of exactly one year, which is short-term.",
    B: "Incorrect. Holding an asset for exactly one year is not enough. The statutory test in §1222(3) is \"more than 1 year,\" so at least one year and one day is required.",
    C: "Incorrect. The holding period excludes the acquisition date and includes the disposition date (Rev. Rul. 66-7). Counting the purchase day would also still produce only one year, not more than one year.",
    D: "Incorrect. There is no 18-month holding period requirement for long-term treatment of stock. The more-than-one-year rule applies to all capital assets."
  },
  tags: ["batch-2026-09-23", "§1222", "holding period", "Rev. Rul. 66-7", "short-term vs long-term"]
},
{
  id: "REG-228",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Reporting of items from pass-through entities",
  skill: "Application",
  difficulty: 2,
  stem: "A taxpayer owns 100% of an S corporation and works full-time in its business. For the current year the taxpayer received a Form W-2 reporting $60,000 of wages and a Schedule K-1 reporting $40,000 of ordinary business income and a $5,000 net §1231 gain. What amount of the taxpayer's income from the S corporation is subject to self-employment tax?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$40,000" },
    { key: "C", text: "$45,000" },
    { key: "D", text: "$100,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. An S corporation shareholder's share of ordinary business income is not net earnings from self-employment (Rev. Rul. 59-221; §1402(a)). The $60,000 of wages is subject to FICA withholding through payroll, not self-employment tax, and the §1231 gain is a separately stated capital item reported on Form 4797 and Schedule D. None of the amounts is subject to self-employment tax.",
    B: "Incorrect. $40,000 treats the K-1 ordinary income like a general partner's distributive share, which is self-employment income under §1402(a). That rule does not apply to S corporation shareholders; their pass-through income is reported on Schedule E and is exempt from self-employment tax.",
    C: "Incorrect. $45,000 adds the §1231 gain to the ordinary income. Even for a general partner, gains from the sale of property are excluded from net earnings from self-employment under §1402(a)(3).",
    D: "Incorrect. $100,000 combines the wages and the K-1 income. Wages are subject to FICA, which the corporation withholds and matches, and are never subject to self-employment tax."
  },
  tags: ["batch-2026-09-23", "S corporation", "Schedule K-1", "self-employment tax", "Rev. Rul. 59-221", "§1402"]
},
{
  id: "REG-229",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Reporting of items from pass-through entities",
  skill: "Remembering & Understanding",
  difficulty: 2,
  stem: "An individual who is a general partner receives a Schedule K-1 from a partnership. Which of the following statements about reporting the K-1 items on the partner's Form 1040 is correct?",
  reference: "",
  options: [
    { key: "A", text: "The partner's share of charitable contributions is deducted on Schedule E against the partnership income" },
    { key: "B", text: "The partner's share of tax-exempt interest is included in the partner's gross income" },
    { key: "C", text: "The partner's share of the §179 deduction is subject to the dollar and business-income limits at the partner level" },
    { key: "D", text: "Guaranteed payments received reduce the partner's share of ordinary business income" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Charitable contributions are separately stated under §702(a)(4) and retain their character in the partner's hands. The partner reports them on Schedule A as an itemized deduction, subject to the partner's own AGI percentage limits, not on Schedule E.",
    B: "Incorrect. Tax-exempt interest keeps its character when it passes through (§702(b)). It is excluded from the partner's gross income, although it increases the partner's outside basis under §705(a)(1)(B).",
    C: "Correct. The §179 election is made at the partnership level, but §179(d)(8) applies the dollar limitation and the taxable-income limitation both to the partnership and again to each partner. The deduction is separately stated so that each partner can apply the limits to the partner's own return.",
    D: "Incorrect. Guaranteed payments under §707(c) are reported separately as ordinary income (and self-employment income) to the receiving partner. They are deducted by the partnership in computing ordinary business income, so they are not netted again by the partner."
  },
  tags: ["batch-2026-09-23", "Schedule K-1", "§702", "separately stated items", "§179(d)(8)", "§707(c)"]
},
{
  id: "REG-230",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income",
  skill: "Application",
  difficulty: 2,
  stem: "A self-employed taxpayer with no other earned income reported $30,000 of net profit on Schedule C. The deduction for one-half of self-employment tax is $2,120, and the taxpayer contributed $5,000 to a SEP-IRA. The taxpayer paid $25,000 of health insurance premiums for the taxpayer and spouse and was not eligible for any employer-subsidized plan. What amount may the taxpayer deduct for self-employed health insurance in arriving at AGI?",
  reference: "",
  options: [
    { key: "A", text: "$22,880" },
    { key: "B", text: "$25,000" },
    { key: "C", text: "$27,880" },
    { key: "D", text: "$30,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under §162(l)(2)(A) the self-employed health insurance deduction cannot exceed the earned income from the trade or business, computed as net profit less the deduction for one-half of self-employment tax and less retirement plan contributions for the owner: $30,000 - $2,120 - $5,000 = $22,880. The $2,120 of premiums that exceed the limit may be claimed as a medical expense on Schedule A, subject to the 7.5% AGI floor.",
    B: "Incorrect. $25,000 deducts the premiums in full and ignores the earned-income limitation in §162(l)(2)(A). The deduction is capped at the net earnings of the business after the self-employment tax and retirement plan adjustments.",
    C: "Incorrect. $27,880 reduces the net profit only by the one-half self-employment tax deduction and fails to subtract the $5,000 SEP-IRA contribution, which §162(l)(2)(A) also requires.",
    D: "Incorrect. $30,000 is the gross Schedule C profit. Aside from exceeding the premiums actually paid, it ignores both required reductions to earned income under §162(l)(2)(A)."
  },
  tags: ["batch-2026-09-23", "§162(l)", "self-employed health insurance", "earned income limit", "adjustments to income"]
},
{
  id: "REG-231",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income",
  skill: "Remembering & Understanding",
  difficulty: 2,
  stem: "Which of the following individuals is eligible to make a deductible contribution to a health savings account (HSA) for the current year?",
  reference: "",
  options: [
    { key: "A", text: "An employee covered by a high-deductible health plan who is also covered by a spouse's low-deductible plan" },
    { key: "B", text: "A retiree enrolled in Medicare who is also covered by a high-deductible health plan" },
    { key: "C", text: "A student covered only by a high-deductible health plan who is claimed as a dependent on a parent's return" },
    { key: "D", text: "A self-employed individual, age 45, covered only by a high-deductible health plan" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. Under §223(c)(1)(A)(ii) an eligible individual may not be covered by any health plan that is not a high-deductible health plan (other than permitted coverage such as dental, vision or specific-disease policies). Coverage under a spouse's low-deductible plan disqualifies the employee.",
    B: "Incorrect. Section 223(b)(7) provides that an individual entitled to benefits under Medicare is not eligible to contribute to an HSA, even while covered by a high-deductible health plan. Existing HSA balances may still be used for qualified expenses.",
    C: "Incorrect. An individual who may be claimed as a dependent on another taxpayer's return is not an eligible individual under §223(b)(6), regardless of the type of health coverage.",
    D: "Correct. An eligible individual under §223(c)(1) is one who is covered by a high-deductible health plan, has no other non-permitted coverage, is not enrolled in Medicare and cannot be claimed as a dependent. Self-employed status does not matter; the contribution is deductible in arriving at AGI under §62(a)(19) up to the annual limit."
  },
  tags: ["batch-2026-09-23", "§223", "health savings account", "HDHP", "eligible individual", "adjustments to income"]
},
{
  id: "REG-232",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income",
  skill: "Application",
  difficulty: 2,
  stem: "A married couple filing jointly bought a principal residence in the current year with a $1,000,000 mortgage, all of which was used to purchase the home. The average balance during the year was $1,000,000 and the couple paid $50,000 of interest. The limit on acquisition indebtedness is $750,000. The couple itemizes deductions. What amount of the interest is deductible as qualified residence interest?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$12,500" },
    { key: "C", text: "$37,500" },
    { key: "D", text: "$50,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $0 assumes that exceeding the acquisition-debt limit disqualifies all of the interest. Under §163(h)(3) and Reg. §1.163-10T the limit caps the amount of debt treated as acquisition indebtedness; interest on the qualifying portion remains deductible.",
    B: "Incorrect. $12,500 is the interest attributable to the $250,000 of debt above the limit ($50,000 x 250/1,000). That is the nondeductible personal interest; the deductible amount is the interest on the $750,000 that qualifies.",
    C: "Correct. Only $750,000 of the $1,000,000 mortgage is acquisition indebtedness under §163(h)(3)(B)(ii). Interest is allocated pro rata: $50,000 x $750,000 / $1,000,000 = $37,500 is deductible qualified residence interest. The remaining $12,500 is nondeductible personal interest under §163(h)(1).",
    D: "Incorrect. $50,000 deducts all of the interest and ignores the $750,000 limit on acquisition indebtedness, which OBBBA made permanent."
  },
  tags: ["batch-2026-09-23", "§163(h)", "qualified residence interest", "acquisition indebtedness", "itemized deductions"]
},
{
  id: "REG-233",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income",
  skill: "Application",
  difficulty: 2,
  stem: "A taxpayer with AGI of $100,000 donated publicly traded stock to a public charity during the current year. The taxpayer had purchased the stock three years earlier for $20,000, and it was worth $40,000 on the date of the gift. The taxpayer made no other contributions and made no election to reduce the contribution to basis. What is the taxpayer's charitable contribution deduction for the current year?",
  reference: "",
  options: [
    { key: "A", text: "$12,000" },
    { key: "B", text: "$20,000" },
    { key: "C", text: "$30,000" },
    { key: "D", text: "$40,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $12,000 applies the 30% limitation to the value of the gift (30% x $40,000) rather than to the taxpayer's contribution base. Under §170(b)(1)(C) the 30% ceiling is measured against AGI, so the limit is $30,000.",
    B: "Incorrect. $20,000 deducts only the taxpayer's basis. Long-term capital gain property contributed to a public charity is deductible at fair market value under §170(e); the reduction to basis applies to ordinary income or short-term property, or when the taxpayer elects the 50% limit under §170(b)(1)(C)(iii).",
    C: "Correct. Appreciated stock held more than one year is capital gain property, deductible at its $40,000 fair market value under §170(e)(1). Because the taxpayer did not elect to reduce the deduction to basis, the contribution is subject to the 30%-of-AGI limit in §170(b)(1)(C): 30% x $100,000 = $30,000. The excess $10,000 carries forward for five years under §170(d)(1).",
    D: "Incorrect. $40,000 is the fair market value but ignores the 30%-of-AGI limitation that applies to gifts of capital gain property to public charities. The 60% limit applies only to cash contributions."
  },
  tags: ["batch-2026-09-23", "§170", "charitable contributions", "capital gain property", "30% limitation", "carryover"]
},
{
  id: "REG-234",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income",
  skill: "Application",
  difficulty: 3,
  stem: "A single taxpayer operates a manufacturing business as a sole proprietorship. For the current year the business generated $400,000 of qualified business income, paid $100,000 of W-2 wages, and had $200,000 of unadjusted basis in qualified property. The taxpayer's taxable income before the QBI deduction is $600,000, with no net capital gain, which is above the top of the phase-in range. What is the taxpayer's qualified business income deduction?",
  reference: "",
  options: [
    { key: "A", text: "$30,000" },
    { key: "B", text: "$50,000" },
    { key: "C", text: "$80,000" },
    { key: "D", text: "$120,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $30,000 is the alternative wage-and-property limit (25% x $100,000 + 2.5% x $200,000 = $25,000 + $5,000). Under §199A(b)(2)(B) the limit is the greater of the two computations, and 50% of W-2 wages ($50,000) is greater.",
    B: "Correct. Because taxable income exceeds the phase-in range, the §199A(b)(2) limitation applies in full. The deductible amount for the business is the lesser of 20% of QBI (20% x $400,000 = $80,000) or the greater of 50% of W-2 wages ($50,000) and 25% of W-2 wages plus 2.5% of the unadjusted basis of qualified property ($30,000). The wage limit is $50,000, which is less than $80,000, so the deduction is $50,000. The overall limit of 20% of taxable income less net capital gain ($120,000) does not bind.",
    C: "Incorrect. $80,000 is 20% of QBI without applying the W-2 wage and property limitation. That limitation applies fully to taxpayers whose taxable income exceeds the top of the phase-in range under §199A(b)(3).",
    D: "Incorrect. $120,000 is 20% of taxable income, which is the overall ceiling in §199A(a)(2), not the deduction. The deduction is the lesser of the combined QBI amount ($50,000) and that ceiling."
  },
  tags: ["batch-2026-09-23", "§199A", "QBI deduction", "W-2 wage limitation", "UBIA", "phase-in range"]
},
{
  id: "REG-235",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Loss limitations — Capital, basis, passive, at-risk, hobby and wash sale",
  skill: "Application",
  difficulty: 2,
  stem: "A single taxpayer has a $9,000 long-term capital loss carryover from the prior year. During the current year the taxpayer realized a $2,000 short-term capital gain and had no other capital transactions. The taxpayer's ordinary income is $80,000. What amount of capital loss carries forward to the following year?",
  reference: "",
  options: [
    { key: "A", text: "$4,000" },
    { key: "B", text: "$6,000" },
    { key: "C", text: "$7,000" },
    { key: "D", text: "$9,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under §1212(b)(1) the carryover is treated as a long-term capital loss in the current year, so it is first netted against the $2,000 short-term gain (§1222), leaving a $7,000 net capital loss. Under §1211(b) up to $3,000 of that net loss is deducted against ordinary income, and the remaining $7,000 - $3,000 = $4,000 carries forward as a long-term loss.",
    B: "Incorrect. $6,000 deducts the $3,000 against ordinary income but does not first offset the carryover against the current-year $2,000 gain ($9,000 - $3,000). A carryover must be netted against capital gains of the current year before the $3,000 ordinary-income deduction is applied.",
    C: "Incorrect. $7,000 nets the carryover against the $2,000 gain but omits the $3,000 deduction against ordinary income allowed by §1211(b) ($9,000 - $2,000). The deduction is available every year in which a net capital loss remains.",
    D: "Incorrect. $9,000 carries the entire loss forward untouched. A capital loss carryover is not preserved until it can be used solely against gains; it must be used against current-year capital gains and then against up to $3,000 of ordinary income before any remainder carries forward."
  },
  tags: ["batch-2026-09-23", "§1212(b)", "§1211(b)", "capital loss carryover", "netting", "$3,000 limit"]
},
{
  id: "REG-236",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Loss limitations — Capital, basis, passive, at-risk, hobby and wash sale",
  skill: "Application",
  difficulty: 2,
  stem: "A taxpayer with $200,000 of wages owned a rental property in which the taxpayer did not actively participate and had $40,000 of suspended passive losses at the beginning of the current year. The property produced a $10,000 loss for the current year, and on December 31 the taxpayer sold the entire interest to an unrelated buyer, recognizing a $15,000 gain. What amount of the rental losses may the taxpayer deduct against wages in the current year?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$10,000" },
    { key: "C", text: "$35,000" },
    { key: "D", text: "$50,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $0 applies the general rule that passive losses offset only passive income and ignores §469(g). A fully taxable disposition of the taxpayer's entire interest to an unrelated party frees the suspended and current losses from the passive limitation.",
    B: "Incorrect. $10,000 treats only the current-year loss as allowed. Under §469(g)(1)(A) both the suspended prior-year losses and the current-year loss become deductible in the year of a qualifying disposition.",
    C: "Correct. Under §469(g)(1)(A), when a taxpayer disposes of an entire interest in a passive activity in a fully taxable transaction to an unrelated person, the excess of the activity's losses (suspended $40,000 plus current $10,000 = $50,000) over the net income or gain from all passive activities for the year ($15,000 gain on the sale) is treated as a loss that is not from a passive activity. $50,000 - $15,000 = $35,000 is deductible against the wages.",
    D: "Incorrect. $50,000 frees all of the losses but fails to first offset them against the $15,000 gain on the disposition, which is itself passive activity income for the year. Only the excess over that gain is deductible against nonpassive income."
  },
  tags: ["batch-2026-09-23", "§469(g)", "passive activity loss", "suspended losses", "disposition", "rental real estate"]
},
{
  id: "REG-237",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Loss limitations — Capital, basis, passive, at-risk, hobby and wash sale",
  skill: "Application",
  difficulty: 2,
  stem: "An individual invested $40,000 cash in an equipment-leasing activity in which the individual materially participates. The activity borrowed $100,000 from an unrelated lender on a nonrecourse basis, secured only by the equipment, and the individual's share of that debt is $60,000. The activity allocated the individual a $75,000 ordinary loss for Year 1. What amount of the loss may the individual deduct in Year 1?",
  reference: "",
  options: [
    { key: "A", text: "$40,000" },
    { key: "B", text: "$60,000" },
    { key: "C", text: "$75,000" },
    { key: "D", text: "$100,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under §465 a loss is deductible only to the extent the taxpayer is at risk. The amount at risk includes cash contributed ($40,000) and borrowed amounts for which the taxpayer is personally liable or has pledged other property. Nonrecourse debt secured only by the activity's own property does not increase the amount at risk; the qualified nonrecourse financing exception in §465(b)(6) applies only to real property held in a real estate activity. The deductible loss is $40,000, and the remaining $35,000 is suspended and carries forward until the amount at risk increases.",
    B: "Incorrect. $60,000 treats the individual's share of the nonrecourse debt as the amount at risk and ignores the $40,000 cash investment. The debt share adds nothing to the at-risk amount because no one is personally liable for it, so the cash contribution is the only amount at risk.",
    C: "Incorrect. $75,000 deducts the entire allocated loss. Material participation satisfies the passive activity rules of §469, but the at-risk limitation of §465 applies first and independently, capping the deduction at the $40,000 at risk.",
    D: "Incorrect. $100,000 adds the $60,000 share of nonrecourse debt to the $40,000 cash as if the debt were recourse. Only debt for which the taxpayer is personally liable, or qualified nonrecourse financing on real property, increases the amount at risk under §465(b)."
  },
  tags: ["batch-2026-09-23", "§465", "at-risk", "nonrecourse debt", "loss limitation"]
},
{
  id: "REG-238",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Filing status and dependents",
  skill: "Application",
  difficulty: 2,
  stem: "An unmarried taxpayer's parent lives in an assisted-living facility. The parent's total support for the year cost $40,000, of which the taxpayer paid $28,000 and the parent paid $12,000 from Social Security benefits. The parent's only other income was $1,000 of taxable interest. The gross income limit for a qualifying relative is $5,200. What is the taxpayer's filing status?",
  reference: "",
  options: [
    { key: "A", text: "Single, because the parent does not live in the taxpayer's home" },
    { key: "B", text: "Single, because the parent's Social Security benefits exceed the gross income limit" },
    { key: "C", text: "Head of household, because the taxpayer maintained the household of a dependent parent" },
    { key: "D", text: "Head of household, but only if the parent lived with the taxpayer for more than half the year" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Section 2(b)(1)(B) contains a special rule for parents: a taxpayer qualifies as head of household by maintaining a household that is the principal place of abode of a dependent parent, even if that household is not the taxpayer's own home. An assisted-living facility can be the parent's household.",
    B: "Incorrect. Nontaxable Social Security benefits are not gross income, so they do not count toward the §152(d)(1)(B) gross income test. The parent's gross income is only the $1,000 of taxable interest, well below the $5,200 limit. The benefits do count as the parent's own contribution to support, but the taxpayer still provided more than half ($28,000 of $40,000).",
    C: "Correct. The parent is a qualifying relative under §152(d): the relationship test is met, gross income ($1,000) is under the limit, and the taxpayer provided over half of the support. Under §2(b)(1)(B) a taxpayer who is not married at year-end and who pays more than half the cost of maintaining a household that is the principal residence of a dependent parent qualifies as head of household without the parent living with the taxpayer.",
    D: "Incorrect. The more-than-half-year residency requirement in §2(b)(1)(A) applies to qualifying children and other qualifying relatives. The parent exception in §2(b)(1)(B) removes that requirement for a dependent parent."
  },
  tags: ["batch-2026-09-23", "§2(b)", "head of household", "qualifying relative", "§152(d)", "gross income test", "support test"]
},
{
  id: "REG-239",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Filing status and dependents",
  skill: "Remembering & Understanding",
  difficulty: 2,
  stem: "Three siblings together provided 83% of their parent's support during the current year: the first sibling provided 45%, the second provided 30% and the third provided 8%. The parent provided the remaining 17% and otherwise meets the tests for a qualifying relative. Which of the following statements is correct?",
  reference: "",
  options: [
    { key: "A", text: "Only the first sibling may claim the parent, because that sibling provided the most support" },
    { key: "B", text: "The first or second sibling may claim the parent if the other signs a written declaration not to claim the parent" },
    { key: "C", text: "Any of the three siblings may claim the parent by agreement among them" },
    { key: "D", text: "No one may claim the parent, because no single person provided more than half of the support" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Providing the largest share does not by itself confer the right to claim the dependent. Under a multiple support agreement any member of the group who provided more than 10% may be designated, provided the others who provided more than 10% waive their claim.",
    B: "Correct. Section 152(d)(3) treats a taxpayer as providing over half of a person's support if (1) no one person provided over half, (2) over half was provided by persons each of whom could have claimed the individual but for the support test, (3) the claiming taxpayer provided more than 10%, and (4) each other person who provided more than 10% signs a written declaration (Form 2120) not to claim the individual. The first and second siblings each exceed 10%, so either may claim the parent with the other's waiver.",
    C: "Incorrect. The third sibling provided only 8% of the support and therefore fails the more-than-10% requirement in §152(d)(3)(C). That sibling may not be designated to claim the parent, although the sibling's contribution counts toward the group's more-than-half total.",
    D: "Incorrect. The multiple support agreement rules in §152(d)(3) exist precisely for this situation. Because the siblings collectively provided over half of the support, one qualifying member may claim the parent."
  },
  tags: ["batch-2026-09-23", "§152(d)(3)", "multiple support agreement", "Form 2120", "qualifying relative", "support test"]
},
{
  id: "REG-240",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits",
  skill: "Application",
  difficulty: 2,
  stem: "A single taxpayer's prior-year AGI was $120,000 and prior-year tax liability was $20,000. The taxpayer's current-year tax liability is $28,000. The taxpayer's only payments during the current year were $20,500 of wage withholding spread evenly through the year, and the taxpayer will pay the balance with the return. Which of the following is correct regarding the underpayment penalty for estimated tax?",
  reference: "",
  options: [
    { key: "A", text: "No penalty, because payments were at least 100% of the prior-year tax" },
    { key: "B", text: "A penalty applies, because payments were less than 90% of the current-year tax" },
    { key: "C", text: "A penalty applies, because payments were less than 110% of the prior-year tax" },
    { key: "D", text: "No penalty, because the balance due with the return is under $1,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Under §6654(d)(1)(B) an individual avoids the estimated tax penalty by paying, through withholding and timely estimates, the lesser of 90% of the current-year tax or 100% of the prior-year tax. Prior-year tax was $20,000 and the taxpayer's prior-year AGI did not exceed $150,000, so the 100% safe harbor applies; $20,500 of evenly withheld tax exceeds it. The $7,500 balance is due with the return but carries no §6654 penalty.",
    B: "Incorrect. Falling short of 90% of the current-year tax ($25,200) does not trigger a penalty when the taxpayer meets the alternative prior-year safe harbor. The required annual payment is the lesser of the two amounts.",
    C: "Incorrect. The 110% requirement in §6654(d)(1)(C) applies only when prior-year AGI exceeded $150,000 ($75,000 for married filing separately). This taxpayer's prior-year AGI was $120,000, so the 100% safe harbor applies.",
    D: "Incorrect. The de minimis exception in §6654(e)(1) applies when the tax due after withholding is less than $1,000. Here the balance is $28,000 - $20,500 = $7,500, so this exception is unavailable, although the prior-year safe harbor still eliminates the penalty."
  },
  tags: ["batch-2026-09-23", "§6654", "estimated tax", "safe harbor", "underpayment penalty", "withholding"]
},
{
  id: "REG-241",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits",
  skill: "Application",
  difficulty: 2,
  stem: "A married couple files a joint return. One spouse earned $180,000 of wages and the other earned $120,000 of wages; neither had self-employment income. The threshold for the Additional Medicare Tax is $250,000 for a joint return and $200,000 for other filers. What amount of Additional Medicare Tax must the couple report on their return?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$450" },
    { key: "C", text: "$900" },
    { key: "D", text: "$2,700" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $0 reasons that because neither spouse individually exceeded $200,000, no tax applies. Under §3101(b)(2) the tax is computed on the couple's combined wages against the $250,000 joint threshold, and the couple reports it on Form 8959 even though neither employer was required to withhold it.",
    B: "Correct. Under §3101(b)(2) the Additional Medicare Tax is 0.9% of wages in excess of the threshold that applies to the taxpayer's filing status. Combined wages of $300,000 exceed the $250,000 joint threshold by $50,000, so the tax is $50,000 x 0.9% = $450. Employers withhold only on wages over $200,000 paid to an individual employee, so here nothing was withheld and the full $450 is due with the return.",
    C: "Incorrect. $900 applies the $200,000 threshold for single filers to the couple's combined wages ($100,000 x 0.9%). The threshold for a joint return is $250,000.",
    D: "Incorrect. $2,700 applies 0.9% to all $300,000 of wages. The Additional Medicare Tax applies only to wages above the applicable threshold, not to all wages."
  },
  tags: ["batch-2026-09-23", "§3101(b)(2)", "Additional Medicare Tax", "Form 8959", "0.9%", "joint return"]
},
{
  id: "REG-242",
  area: "IV",
  areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits",
  skill: "Application",
  difficulty: 2,
  stem: "During the current year a taxpayer paid $8,000 of tuition for graduate courses the taxpayer took to improve job skills and $6,000 of tuition for a dependent child who took one course at a college while enrolled less than half-time. The taxpayer's MAGI is below the phase-out range, and no other education benefit is claimed for these expenses. What is the taxpayer's lifetime learning credit?",
  reference: "",
  options: [
    { key: "A", text: "$1,600" },
    { key: "B", text: "$2,000" },
    { key: "C", text: "$2,800" },
    { key: "D", text: "$4,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $1,600 is 20% of only the taxpayer's own $8,000 of tuition and excludes the dependent's expenses. Under §25A(f)(1) qualified tuition includes amounts paid for the taxpayer, spouse or a dependent, and less-than-half-time enrollment does not disqualify expenses for the lifetime learning credit.",
    B: "Correct. The lifetime learning credit under §25A(c) is 20% of up to $10,000 of qualified tuition and related expenses paid for all eligible students on the return combined. Total qualified expenses are $8,000 + $6,000 = $14,000, limited to $10,000, so the credit is 20% x $10,000 = $2,000. The credit is nonrefundable and the child's part-time, single-course enrollment qualifies for the lifetime learning credit even though it would not qualify for the American opportunity credit.",
    C: "Incorrect. $2,800 is 20% of the full $14,000 of expenses and ignores the $10,000 per-return cap in §25A(c)(1).",
    D: "Incorrect. $4,000 applies a $10,000 limit separately to each student ($2,000 each). Unlike the American opportunity credit, the lifetime learning credit limit is per taxpayer return, not per student."
  },
  tags: ["batch-2026-09-23", "§25A", "lifetime learning credit", "education credits", "nonrefundable credit"]
},
// ---- Batch 2026-09-23, Area V ----
{
  id: "REG-243",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Differences between book and tax income — Schedule M-1/M-3",
  skill: "Application",
  difficulty: 3,
  stem: "An accrual-basis C corporation reported net income per books of $600,000 for the current year. Book expenses included $70,000 of charitable contributions paid during the year. Book income included a $20,000 gain on an installment sale for which the corporation uses the installment method for tax and received no payments during the year. What amount is the corporation's taxable income?",
  reference: "",
  options: [
    { key: "A", text: "$580,000" },
    { key: "B", text: "$585,000" },
    { key: "C", text: "$600,000" },
    { key: "D", text: "$603,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $580,000 ($650,000 - $70,000) deducts the full contribution. A corporation's charitable deduction is limited to 10% of taxable income computed before the charitable deduction (§170(b)(2)(A)), so only $65,000 is deductible this year and the $5,000 excess carries forward for five years.",
    B: "Correct. Start with book income $600,000, add back the $70,000 of contributions (deducted separately subject to the limit) and subtract the $20,000 installment gain deferred under §453 until payments are received: $650,000 is taxable income before the charitable deduction. The limit is 10% x $650,000 = $65,000. Taxable income = $650,000 - $65,000 = $585,000; the $5,000 excess is a carryover (§170(d)(2)).",
    C: "Incorrect. $600,000 makes no net adjustment, deducting the full $70,000 of contributions against a $670,000 base and leaving the deferred installment gain in income. Both the §453 deferral and the 10% limit must be applied.",
    D: "Incorrect. $603,000 forgets the installment-sale deferral: it computes the limit on a $670,000 base (10% = $67,000) and deducts that from $670,000. Under §453 the gain is recognized only as payments are received, so the $20,000 is removed from the current-year base before the 10% limit is applied."
  },
  tags: ["batch-2026-09-23", "Schedule M-1", "§170(b)(2)", "§453", "installment method", "charitable contribution limit"]
},
{
  id: "REG-244",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Differences between book and tax income — Schedule M-1/M-3",
  skill: "Application",
  difficulty: 2,
  stem: "A C corporation's net income per books for the current year was $800,000. Book expenses included $15,000 of premiums on a life insurance policy covering the company's president, under which the corporation is the beneficiary. Book income also included $200,000 of proceeds received under a similar policy on the death of another officer. What amount is the corporation's taxable income?",
  reference: "",
  options: [
    { key: "A", text: "$600,000" },
    { key: "B", text: "$615,000" },
    { key: "C", text: "$800,000" },
    { key: "D", text: "$815,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $600,000 ($800,000 - $200,000) removes the excluded proceeds but fails to add back the $15,000 of premiums. Premiums on a policy under which the corporation is the beneficiary are nondeductible under §264(a)(1).",
    B: "Correct. Book income $800,000 + nondeductible premiums $15,000 (§264(a)(1), because the corporation is directly or indirectly the beneficiary) - life insurance proceeds $200,000 (excluded from gross income under §101(a)) = $615,000. Both items are permanent differences.",
    C: "Incorrect. $800,000 makes no adjustment. Both the premiums (nondeductible) and the death proceeds (excludable) are book/tax differences that must be reconciled on Schedule M-1.",
    D: "Incorrect. $815,000 adds back the premiums but leaves the $200,000 of proceeds in taxable income. Life insurance proceeds paid by reason of the insured's death are excluded under §101(a) even when the beneficiary is a corporation."
  },
  tags: ["batch-2026-09-23", "Schedule M-1", "§264", "§101(a)", "officer life insurance", "permanent differences"]
},
{
  id: "REG-245",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Differences between book and tax income — Schedule M-1/M-3",
  skill: "Application",
  difficulty: 2,
  stem: "A C corporation reported net income per books of $420,000 for the current year. The books included a $10,000 capital gain, a $35,000 capital loss and $8,000 of fines paid to a state regulator for violating environmental rules. There were no capital gains in the prior three years. What amount is the corporation's taxable income?",
  reference: "",
  options: [
    { key: "A", text: "$428,000" },
    { key: "B", text: "$445,000" },
    { key: "C", text: "$453,000" },
    { key: "D", text: "$463,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $428,000 adds back only the $8,000 of fines. A corporation may deduct capital losses only to the extent of capital gains (§1211(a)), so the $25,000 net capital loss deducted for book purposes must also be added back.",
    B: "Incorrect. $445,000 adds back the $25,000 net capital loss but not the fines. Fines and penalties paid to a government for violation of law are nondeductible under §162(f).",
    C: "Correct. Book income $420,000 + net capital loss $25,000 ($35,000 loss - $10,000 gain, nondeductible for a corporation under §1211(a) and carried back 3 years and forward 5 years) + fines $8,000 (nondeductible under §162(f)) = $453,000.",
    D: "Incorrect. $463,000 adds back the entire $35,000 capital loss plus the fines. The capital loss is deductible to the extent of the $10,000 capital gain, so only the $25,000 excess is a reconciling item."
  },
  tags: ["batch-2026-09-23", "Schedule M-1", "§1211(a)", "§162(f)", "corporate capital loss", "fines and penalties"]
},
{
  id: "REG-246",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Differences between book and tax income — Schedule M-1/M-3",
  skill: "Application",
  difficulty: 3,
  stem: "An accrual-basis C corporation reported net income per books of $300,000. On December 1 of the current year it received $24,000 of rent covering the next 12 months and recognized $2,000 of it in book income. Book bad debt expense under the allowance method was $18,000; accounts actually written off during the year totaled $11,000. What amount is the corporation's taxable income?",
  reference: "",
  options: [
    { key: "A", text: "$307,000" },
    { key: "B", text: "$322,000" },
    { key: "C", text: "$329,000" },
    { key: "D", text: "$340,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $307,000 adjusts only for bad debts ($18,000 - $11,000). Prepaid rent is not an \"advance payment\" eligible for the one-year deferral of §451(c) (Reg. §1.451-8 excludes rent), so the $22,000 received but not yet earned for book purposes is taxable when received.",
    B: "Incorrect. $322,000 adjusts only for the rent. For tax purposes bad debts are deductible only under the specific charge-off method (§166; the reserve method is not permitted), so the $7,000 by which the book allowance exceeds actual write-offs must be added back.",
    C: "Correct. Book income $300,000 + unearned rent taxable on receipt $22,000 ($24,000 received - $2,000 already in book income; prepaid rent is excluded from §451(c) deferral) + excess of book bad debt expense over specific write-offs $7,000 ($18,000 - $11,000, §166) = $329,000.",
    D: "Incorrect. $340,000 adds back the entire $18,000 allowance-method expense along with the $22,000 rent. The $11,000 of receivables actually written off is deductible under §166, so only the $7,000 excess is a reconciling item."
  },
  tags: ["batch-2026-09-23", "Schedule M-1", "§451(c)", "prepaid rent", "§166", "bad debt reserve", "temporary differences"]
},
{
  id: "REG-247",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Differences between book and tax income — Schedule M-1/M-3",
  skill: "Remembering & Understanding",
  difficulty: 2,
  stem: "A C corporation with total assets of $60 million files Schedule M-3 and must classify each book/tax difference as temporary or permanent. Which of the following is a permanent difference?",
  reference: "",
  options: [
    { key: "A", text: "A bonus accrued to a 60% shareholder and paid in the fourth month of the following year" },
    { key: "B", text: "MACRS depreciation in excess of straight-line book depreciation" },
    { key: "C", text: "An increase in the allowance for doubtful accounts" },
    { key: "D", text: "The 50% of business meals disallowed for tax purposes" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. Under §267(a)(2) the corporation may not deduct the bonus until the cash-method related shareholder includes it in income, i.e., in the year paid. The deduction is deferred, not lost, so the difference reverses in the following year and is temporary.",
    B: "Incorrect. Accelerated tax depreciation is the classic temporary difference. Total depreciation over the asset's life is the same for book and tax; only the timing differs, so the excess reverses in later years.",
    C: "Incorrect. The allowance method is used for book purposes but tax allows a deduction only when specific receivables are written off (§166). The difference reverses when the accounts are actually charged off, so it is temporary.",
    D: "Correct. The 50% of business meal expense disallowed under §274(n) is never deductible in any year. A difference that will never reverse is a permanent difference, reported in the permanent-difference column of Schedule M-3."
  },
  tags: ["batch-2026-09-23", "Schedule M-3", "permanent difference", "temporary difference", "§274(n)", "§267(a)(2)"]
},
{
  id: "REG-248",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Differences between book and tax income — Schedule M-1/M-3",
  skill: "Remembering & Understanding",
  difficulty: 2,
  stem: "Schedule M-1 of Form 1120 reconciles net income per books with taxable income before the net operating loss deduction and special deductions. Which of the following items is NOT a reconciling item on Schedule M-1?",
  reference: "",
  options: [
    { key: "A", text: "Federal income tax expense recorded on the books" },
    { key: "B", text: "The dividends-received deduction" },
    { key: "C", text: "Tax-exempt interest income recorded on the books" },
    { key: "D", text: "Premiums on officer life insurance where the corporation is the beneficiary" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Federal income tax expense reduces book income but is never deductible (§275), so it is added back on Schedule M-1 as an expense recorded on books but not deducted on the return.",
    B: "Correct. Schedule M-1 reconciles book income to Form 1120 line 28, taxable income before the NOL deduction and the special deductions (the dividends-received deduction under §243). Because the DRD is subtracted after line 28, it is not part of the M-1 reconciliation.",
    C: "Incorrect. Municipal bond interest is included in book income but excluded from gross income under §103, so it is subtracted on Schedule M-1 as income recorded on books but not included on the return.",
    D: "Incorrect. Premiums on a policy under which the corporation is the beneficiary are nondeductible under §264(a)(1). They reduce book income but not taxable income, so they are added back on Schedule M-1."
  },
  tags: ["batch-2026-09-23", "Schedule M-1", "dividends-received deduction", "§243", "line 28", "special deductions"]
},
{
  id: "REG-249",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods",
  skill: "Application",
  difficulty: 2,
  stem: "A C corporation had a $25,000 charitable contribution carryover from Year 1. In Year 2 it made cash contributions of $30,000 to qualified charities, and its taxable income for purposes of the charitable contribution limitation was $400,000. What amount of charitable contribution carryover remains available to Year 3?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$10,000" },
    { key: "C", text: "$15,000" },
    { key: "D", text: "$25,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $0 assumes that the full $55,000 of current and carried-over contributions was deductible in Year 2. The deduction is limited to 10% of the limitation base, or $40,000 (§170(b)(2)), so $15,000 cannot be used in Year 2.",
    B: "Incorrect. $10,000 is the amount of the carryover that was used in Year 2 ($40,000 limit - $30,000 current-year contributions), not the amount remaining. The remaining carryover is $25,000 - $10,000 = $15,000.",
    C: "Correct. The Year 2 limit is 10% x $400,000 = $40,000. Current-year contributions are deducted first ($30,000), leaving $10,000 of capacity that absorbs part of the Year 1 carryover (§170(d)(2)). The remaining $15,000 ($25,000 - $10,000) carries forward; corporate carryovers expire after five years.",
    D: "Incorrect. $25,000 treats the 10% limit as applying only to current-year contributions and leaves the carryover untouched. The carryover is deducted in the earliest year in which the limit is not fully absorbed by current-year contributions, so $10,000 of it is used in Year 2."
  },
  tags: ["batch-2026-09-23", "§170(b)(2)", "§170(d)(2)", "charitable contribution carryover", "10% limit", "C corporation"]
},
{
  id: "REG-250",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods",
  skill: "Application",
  difficulty: 3,
  stem: "A C corporation's taxable income before the dividends-received deduction was $140,000, which included $300,000 of dividends from a domestic corporation in which it owns 10% of the stock. The corporation had no other special deductions. What amount is the corporation's dividends-received deduction?",
  reference: "",
  options: [
    { key: "A", text: "$70,000" },
    { key: "B", text: "$140,000" },
    { key: "C", text: "$150,000" },
    { key: "D", text: "$195,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $70,000 applies the 50% taxable-income limitation (50% x $140,000). The limitation does not apply when the full DRD creates or increases a net operating loss (§246(b)(2)), which is the case here.",
    B: "Incorrect. $140,000 limits the DRD to taxable income so that taxable income becomes zero. Neither the statute nor the regulations impose such a cap; the DRD is either the full 50% or 50% of taxable income, depending on the NOL test.",
    C: "Correct. The tentative DRD for less-than-20% ownership is 50% x $300,000 = $150,000 (§243(a)(1)). The taxable-income limit (50% x $140,000 = $70,000) is disregarded because deducting the full $150,000 produces an NOL ($140,000 - $150,000 = -$10,000) (§246(b)(2)). The full $150,000 is allowed and the corporation has a $10,000 NOL.",
    D: "Incorrect. $195,000 applies the 65% rate that belongs to dividends from a corporation that is at least 20% owned (§243(c)). With 10% ownership the applicable percentage is 50%."
  },
  tags: ["batch-2026-09-23", "dividends-received deduction", "§243", "§246(b)", "NOL exception", "taxable income limitation"]
},
{
  id: "REG-251",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods",
  skill: "Application",
  difficulty: 2,
  stem: "A C corporation had a $50,000 net capital loss in Year 1 and no capital gains in the three preceding years. In Year 2 the corporation had a $30,000 net capital gain and $400,000 of ordinary income. What amount of capital loss carryforward is available to the corporation in Year 3?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$17,000" },
    { key: "C", text: "$20,000" },
    { key: "D", text: "$50,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $0 assumes the entire Year 1 loss was absorbed in Year 2. Only $30,000 of it could be used, because a corporation may deduct capital losses only against capital gains (§1211(a)).",
    B: "Incorrect. $17,000 applies the individual rule that allows $3,000 of net capital loss to offset ordinary income (§1211(b)). That rule does not apply to corporations; the excess loss offsets only capital gains.",
    C: "Correct. With no prior-year gains, nothing is carried back. In Year 2 the $50,000 carryforward offsets the $30,000 net capital gain (§1212(a)), leaving $20,000. The carryforward is treated as short-term and expires if not used within five years after Year 1.",
    D: "Incorrect. $50,000 treats the loss as unusable in Year 2. A capital loss carryforward is applied against net capital gain in the earliest carryforward year, so $30,000 must be used in Year 2."
  },
  tags: ["batch-2026-09-23", "corporate capital loss", "§1211(a)", "§1212(a)", "carryforward", "five-year limit"]
},
{
  id: "REG-252",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods",
  skill: "Application",
  difficulty: 2,
  stem: "A calendar-year C corporation reported taxable income of $1,200,000 in Year 1 and paid income tax of $252,000 for that year. It expects its Year 2 tax liability to be $300,000. Which of the following describes the estimated tax payments the corporation must make for Year 2 to avoid an underpayment penalty?",
  reference: "",
  options: [
    { key: "A", text: "Four installments totaling $252,000, based on the prior-year tax" },
    { key: "B", text: "Four installments totaling $300,000; only the first installment may be based on the prior-year tax, with any shortfall made up in the second" },
    { key: "C", text: "Four installments totaling 110% of the prior-year tax" },
    { key: "D", text: "No estimated payments, because corporations pay their tax with the return" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The prior-year safe harbor of §6655(d)(1)(B)(ii) is not available to a large corporation, one with taxable income of $1,000,000 or more in any of the three preceding years (§6655(g)(2)). Because Year 1 taxable income was $1,200,000, the corporation cannot base all four installments on the $252,000 prior-year tax.",
    B: "Correct. Under §6655 a corporation must pay estimated tax in four installments equal to 25% of the required annual payment, which is 100% of the current-year tax for a large corporation. §6655(d)(2)(B) allows a large corporation to use the prior-year tax for its first installment only, and the reduction must be recaptured in the second installment. Corporations must make estimated payments if their tax is expected to be $500 or more.",
    C: "Incorrect. The 110% figure belongs to the individual safe harbor in §6654(d)(1)(C) for taxpayers whose prior-year AGI exceeded $150,000. There is no corporate 110% rule; a large corporation must pay 100% of the current-year tax (or use the annualized-income method).",
    D: "Incorrect. Corporations are subject to the estimated tax rules of §6655 whenever their expected tax is $500 or more, with installments due on the 15th day of the 4th, 6th, 9th and 12th months of the tax year. Paying the entire liability with the return would trigger the underpayment addition to tax."
  },
  tags: ["batch-2026-09-23", "§6655", "corporate estimated tax", "large corporation", "safe harbor", "underpayment penalty"]
},
{
  id: "REG-253",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods",
  skill: "Application",
  difficulty: 3,
  stem: "A corporation began business on April 1, Year 1. It incurred $52,000 of organizational expenditures (legal fees for the charter, state incorporation fees and organizational meeting costs) and $10,000 of costs to issue its stock (underwriting commissions and certificate printing). The corporation elects to deduct organizational expenditures. What amount may it deduct for Year 1?",
  reference: "",
  options: [
    { key: "A", text: "$3,000" },
    { key: "B", text: "$3,100" },
    { key: "C", text: "$5,450" },
    { key: "D", text: "$7,350" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $3,000 is only the immediate deduction after the phase-out ($5,000 - ($52,000 - $50,000)). The remaining $49,000 of organizational expenditures is amortized over 180 months beginning with the month business began, adding $2,450 for the nine months of Year 1.",
    B: "Incorrect. $3,100 adds the $10,000 of stock issuance costs to the organizational expenditures ($62,000), which eliminates the $5,000 immediate deduction and amortizes $62,000 x 9/180. Costs of issuing stock are not organizational expenditures under §248; they are charged against paid-in capital and are neither deductible nor amortizable.",
    C: "Correct. Under §248, the immediate deduction is $5,000 reduced by the excess of organizational costs over $50,000: $5,000 - $2,000 = $3,000. The remaining $49,000 is amortized over 180 months from April: $49,000 x 9/180 = $2,450. Total Year 1 deduction = $3,000 + $2,450 = $5,450. Stock issuance costs are excluded entirely.",
    D: "Incorrect. $7,350 takes the full $5,000 immediate deduction and amortizes $47,000 ($47,000 x 9/180 = $2,350). The immediate deduction phases out dollar for dollar once organizational expenditures exceed $50,000, so only $3,000 is allowed immediately."
  },
  tags: ["batch-2026-09-23", "§248", "organizational expenditures", "stock issuance costs", "180-month amortization", "phase-out"]
},
{
  id: "REG-254",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods",
  skill: "Application",
  difficulty: 3,
  stem: "A C corporation with average annual gross receipts of $80 million (above the $31 million small-business threshold) reported taxable income of $700,000 after deducting $600,000 of business interest expense and including $50,000 of business interest income. Depreciation deducted was $250,000. What amount of business interest expense may the corporation deduct for the current year?",
  reference: "",
  options: [
    { key: "A", text: "$425,000" },
    { key: "B", text: "$450,000" },
    { key: "C", text: "$500,000" },
    { key: "D", text: "$600,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $425,000 computes adjusted taxable income without adding back depreciation ($700,000 + $600,000 - $50,000 = $1,250,000; 30% = $375,000; plus $50,000 interest income). Under §163(j)(8) as amended, ATI is computed by adding back depreciation, amortization and depletion (an EBITDA-based measure).",
    B: "Incorrect. $450,000 is 30% of the correct ATI of $1,500,000 but omits the business interest income. The §163(j) limit is the sum of business interest income plus 30% of ATI (plus any floor plan financing interest).",
    C: "Correct. ATI = taxable income $700,000 + business interest expense $600,000 - business interest income $50,000 + depreciation $250,000 = $1,500,000. Limit = $50,000 business interest income + 30% x $1,500,000 ($450,000) = $500,000 (§163(j)(1)). The disallowed $100,000 carries forward indefinitely (§163(j)(2)).",
    D: "Incorrect. $600,000 deducts all of the interest as though the small-business exemption applied. The exemption in §163(j)(3) is available only to taxpayers whose average annual gross receipts do not exceed the §448(c) threshold ($31 million here); this corporation's $80 million exceeds it."
  },
  tags: ["batch-2026-09-23", "§163(j)", "business interest limitation", "adjusted taxable income", "EBITDA", "carryforward"]
},
{
  id: "REG-255",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods",
  skill: "Application",
  difficulty: 2,
  stem: "On December 15, Year 1, an accrual-method calendar-year C corporation accrued a $100,000 bonus payable to its president, a cash-method individual who owns 60% of the corporation's stock. The corporation paid $40,000 of the bonus on December 30, Year 1, and the remaining $60,000 on February 15, Year 2. What amount of the bonus may the corporation deduct in Year 1?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$40,000" },
    { key: "C", text: "$60,000" },
    { key: "D", text: "$100,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $0 treats compensation paid to a controlling shareholder as nondeductible. Reasonable compensation to a shareholder-employee is deductible under §162(a)(1); §267(a)(2) only defers the deduction until the related payee includes the amount in income.",
    B: "Correct. Under §267(a)(2), an accrual-method payer may not deduct an amount owed to a related cash-method payee (here a more-than-50% shareholder, §267(b)(2)) until the day the payee includes it in income. The president includes $40,000 in Year 1 when paid, so the corporation deducts $40,000 in Year 1 and $60,000 in Year 2.",
    C: "Incorrect. $60,000 is the amount deductible in Year 2, when the balance is paid and included in the president's income. Year 1's deduction is limited to the $40,000 actually paid in Year 1.",
    D: "Incorrect. $100,000 applies the general accrual rule and the 2.5-month rule of Reg. §1.404(b)-1T, under which bonuses paid within 2.5 months after year-end are deductible when accrued. That rule does not override §267(a)(2) for a related-party payee; the deduction is matched to the shareholder's inclusion."
  },
  tags: ["batch-2026-09-23", "§267(a)(2)", "related-party accrual", "accrued bonus", "matching rule", "controlling shareholder"]
},
{
  id: "REG-256",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — State and local tax issues",
  skill: "Application",
  difficulty: 2,
  stem: "A corporation has $1,000,000 of apportionable business income and $100,000 of nonbusiness rental income from real property located in State X. Its State X factors are: property 20%, payroll 40%, sales 60%. State X apportions business income using a single sales factor and allocates nonbusiness income from real property to the state where the property is located. What amount is the corporation's State X taxable income?",
  reference: "",
  options: [
    { key: "A", text: "$500,000" },
    { key: "B", text: "$600,000" },
    { key: "C", text: "$660,000" },
    { key: "D", text: "$700,000" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. $500,000 uses an equally weighted three-factor formula ((20% + 40% + 60%) / 3 = 40%; $1,000,000 x 40% = $400,000 + $100,000). State X uses a single sales factor, so property and payroll are ignored.",
    B: "Incorrect. $600,000 apportions business income correctly ($1,000,000 x 60%) but omits the nonbusiness rental income. Nonbusiness income is not apportioned; it is allocated in full to a single state, here State X where the property sits.",
    C: "Incorrect. $660,000 apportions the total of business and nonbusiness income ($1,100,000 x 60%). Nonbusiness income is removed from the apportionable base and allocated specifically; only business income is multiplied by the apportionment factor.",
    D: "Correct. Business income is apportioned by the single sales factor: $1,000,000 x 60% = $600,000. Nonbusiness rental income from real property is allocated to the situs state: $100,000 to State X. State X taxable income = $600,000 + $100,000 = $700,000."
  },
  tags: ["batch-2026-09-23", "apportionment", "allocation", "single sales factor", "nonbusiness income", "state taxable income"]
},
{
  id: "REG-257",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — State and local tax issues",
  skill: "Application",
  difficulty: 2,
  stem: "A corporation manufactures equipment in State A and sells it to customers in State B, where it has no office or property. Under Public Law 86-272, which of the following activities in State B would subject the corporation to State B's net income tax?",
  reference: "",
  options: [
    { key: "A", text: "Sales representatives solicit orders that are sent to State A for approval and shipped from State A" },
    { key: "B", text: "Sales representatives distribute catalogs and free samples to prospective customers" },
    { key: "C", text: "Company technicians perform warranty repairs on equipment at customer sites" },
    { key: "D", text: "The corporation advertises its products in State B newspapers" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Solicitation of orders for tangible personal property that are sent outside the state for approval and filled by shipment from outside the state is exactly the activity P.L. 86-272 protects. It does not create income tax nexus.",
    B: "Incorrect. Distributing catalogs and free samples is ancillary to solicitation and is treated as protected solicitation under P.L. 86-272 and the Multistate Tax Commission's guidelines.",
    C: "Correct. P.L. 86-272 protects only the solicitation of orders for sales of tangible personal property. Performing repair or warranty services in the state is an unprotected activity that goes beyond solicitation, so it establishes nexus for State B's net income tax. (The law never protects against sales/use tax collection duties or taxes not measured by net income.)",
    D: "Incorrect. Advertising in local media is a form of solicitation. Advertising alone, without in-state property, employees or unprotected services, does not create nexus under P.L. 86-272."
  },
  tags: ["batch-2026-09-23", "P.L. 86-272", "nexus", "solicitation", "state income tax", "unprotected activities"]
},
{
  id: "REG-258",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Eligibility and election",
  skill: "Remembering & Understanding",
  difficulty: 1,
  stem: "A corporation intends to elect S status. Which of the following shareholders would make the corporation ineligible to be an S corporation?",
  reference: "",
  options: [
    { key: "A", text: "The estate of a deceased shareholder" },
    { key: "B", text: "A §501(c)(3) charitable organization" },
    { key: "C", text: "An individual who is a resident alien" },
    { key: "D", text: "A general partnership" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. Estates (both decedents' estates and bankruptcy estates) are permitted S corporation shareholders under §1361(b)(1)(B).",
    B: "Incorrect. Organizations exempt under §501(c)(3), as well as qualified retirement plan trusts under §401(a), are permitted shareholders (§1361(c)(6)).",
    C: "Incorrect. Only nonresident alien individuals are prohibited shareholders (§1361(b)(1)(C)). A resident alien is treated like a U.S. citizen and may own S corporation stock.",
    D: "Correct. An S corporation may not have a partnership, a corporation (other than certain wholly owned S corporation subsidiaries) or a nonresident alien as a shareholder (§1361(b)(1)). A general partnership shareholder terminates or prevents the election."
  },
  tags: ["batch-2026-09-23", "S corporation", "§1361(b)", "eligible shareholders", "partnership shareholder", "nonresident alien"]
},
{
  id: "REG-259",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Eligibility and election",
  skill: "Application",
  difficulty: 2,
  stem: "A calendar-year C corporation has four shareholders. On February 1, Year 2, one shareholder sold all of that shareholder's stock to a new investor. On March 10, Year 2, the corporation filed Form 2553 signed by the three continuing shareholders and the new investor; the former shareholder did not consent. Absent relief, when is the S election effective?",
  reference: "",
  options: [
    { key: "A", text: "Year 2, because it was filed by the 15th day of the third month and all current shareholders consented" },
    { key: "B", text: "Year 3, because a person who held stock during Year 2 before the election did not consent" },
    { key: "C", text: "Never, unless a new Form 2553 is filed in Year 3" },
    { key: "D", text: "Year 2, provided the former shareholder consents within 60 days of filing" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Timely filing is necessary but not sufficient. For an election filed during the tax year to be effective for that year, every person who was a shareholder at any time during the portion of the year before the election must also consent (§1362(b)(2)(B)(ii)).",
    B: "Correct. Under §1362(b)(2)(B), an election made within the first 2.5 months is effective for the current year only if all persons who held stock at any time during the pre-election portion of the year consent. Because the former shareholder did not consent, the election is treated as made for the following tax year, Year 3 (subject to IRS relief for inadvertent failures under §1362(b)(5) and Rev. Proc. 2013-30).",
    C: "Incorrect. A defective current-year election is not void. By statute it is treated as made for the following tax year, so no new Form 2553 is required.",
    D: "Incorrect. There is no automatic 60-day cure period in the statute. Late consents are honored only under the IRS's discretionary relief procedures, not as a matter of right."
  },
  tags: ["batch-2026-09-23", "S election", "Form 2553", "§1362(b)", "shareholder consent", "2.5-month rule"]
},
{
  id: "REG-260",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Eligibility and election",
  skill: "Application",
  difficulty: 2,
  stem: "An S corporation has 40 unrelated individual shareholders and no accumulated earnings and profits. Which of the following events during the current year terminates the S election?",
  reference: "",
  options: [
    { key: "A", text: "The corporation issues nonvoting common stock with the same distribution and liquidation rights as its voting stock" },
    { key: "B", text: "The corporation borrows from a shareholder under a written note with a fixed maturity and a market interest rate" },
    { key: "C", text: "A shareholder transfers shares to a limited partnership in which the shareholder is a partner" },
    { key: "D", text: "Two shareholders marry, and ten new unrelated individuals buy shares, bringing the count to 50" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Differences in voting rights alone do not create a second class of stock (§1361(c)(4)). As long as all shares carry identical rights to distribution and liquidation proceeds, the one-class requirement is met.",
    B: "Incorrect. A written unconditional promise to pay a fixed sum on demand or on a specified date, with interest not contingent on profits, is \"straight debt\" under the §1361(c)(5) safe harbor and is not treated as a second class of stock.",
    C: "Correct. A partnership is not a permitted S corporation shareholder (§1361(b)(1)(B)). The election terminates on the day the stock is transferred to the ineligible shareholder (§1362(d)(2)), splitting the year into a short S year and a short C year.",
    D: "Incorrect. The limit is 100 shareholders, and spouses (and members of a family) are counted as one shareholder (§1361(c)(1)). Fifty shareholders, or fewer after aggregation, is well within the limit."
  },
  tags: ["batch-2026-09-23", "S election termination", "§1362(d)", "one class of stock", "straight debt", "ineligible shareholder"]
},
{
  id: "REG-261",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Ordinary business income, separately stated items and AAA",
  skill: "Application",
  difficulty: 2,
  stem: "A calendar-year S corporation reported the following for the current year:\n\n| Item | Amount |\n|---|---|\n| Gross receipts | $900,000 |\n| Cost of goods sold | $400,000 |\n| Officer compensation | $150,000 |\n| Other salaries | $100,000 |\n| Rent expense | $60,000 |\n| MACRS depreciation | $30,000 |\n| Charitable contributions | $15,000 |\n| §1231 gain | $25,000 |\n| Interest income on investments | $5,000 |\n| §179 expense | $40,000 |\n\nWhat amount is the corporation's ordinary business income on Form 1120-S?",
  reference: "",
  options: [
    { key: "A", text: "$120,000" },
    { key: "B", text: "$145,000" },
    { key: "C", text: "$160,000" },
    { key: "D", text: "$190,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $120,000 deducts the $40,000 §179 expense in arriving at ordinary income. The §179 deduction is separately stated on Schedule K (§1366(a)(1)(A)) because each shareholder applies the dollar and business-income limitations individually.",
    B: "Incorrect. $145,000 deducts the $15,000 of charitable contributions. Charitable contributions are separately stated so that each shareholder applies the §170 percentage limits on the shareholder's own return.",
    C: "Correct. Ordinary business income = $900,000 - $400,000 - $150,000 - $100,000 - $60,000 - $30,000 = $160,000. Charitable contributions, §1231 gain, portfolio interest income and the §179 deduction are separately stated items passed through on Schedule K-1 and excluded from ordinary income (§1366(a)).",
    D: "Incorrect. $190,000 includes the $25,000 §1231 gain and $5,000 of investment interest income in ordinary income. Both are separately stated because their character (§1231 netting, portfolio income) matters at the shareholder level."
  },
  tags: ["batch-2026-09-23", "S corporation", "ordinary business income", "separately stated items", "§1366", "Form 1120-S"]
},
{
  id: "REG-262",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Ordinary business income, separately stated items and AAA",
  skill: "Remembering & Understanding",
  difficulty: 1,
  stem: "Which of the following items of an S corporation is included in the computation of ordinary business income rather than being separately stated on Schedule K?",
  reference: "",
  options: [
    { key: "A", text: "Charitable contributions" },
    { key: "B", text: "Net §1231 gain" },
    { key: "C", text: "Depreciation on equipment used in operations" },
    { key: "D", text: "§179 expense deduction" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Charitable contributions are separately stated because the §170 percentage limitations are applied at the shareholder level, not by the corporation.",
    B: "Incorrect. Net §1231 gain is separately stated so each shareholder can combine it with the shareholder's own §1231 gains and losses in the §1231 netting process.",
    C: "Correct. Ordinary MACRS depreciation on operating assets is a trade or business deduction that reduces ordinary business income on page 1 of Form 1120-S. Only items whose separate treatment could affect a shareholder's tax liability differently must be separately stated (§1366(a)(1)(A)).",
    D: "Incorrect. The §179 deduction is separately stated because the annual dollar limit and the taxable-income limitation apply to each shareholder individually."
  },
  tags: ["batch-2026-09-23", "S corporation", "separately stated items", "§1366(a)", "Schedule K", "depreciation"]
},
{
  id: "REG-263",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Ordinary business income, separately stated items and AAA",
  skill: "Application",
  difficulty: 2,
  stem: "An S corporation with no accumulated earnings and profits began the year with an accumulated adjustments account (AAA) of $40,000. During the year it reported ordinary business income of $70,000, tax-exempt interest of $5,000, nondeductible meal expenses of $4,000 and charitable contributions of $10,000, and it distributed $60,000 cash to its shareholders. What is the AAA balance at year-end?",
  reference: "",
  options: [
    { key: "A", text: "$36,000" },
    { key: "B", text: "$40,000" },
    { key: "C", text: "$41,000" },
    { key: "D", text: "$46,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. AAA = $40,000 + $70,000 ordinary income - $4,000 nondeductible expenses - $10,000 charitable contributions - $60,000 distributions = $36,000 (§1368(e)(1)). Tax-exempt income and expenses related to it are excluded from AAA and tracked in the other adjustments account (OAA).",
    B: "Incorrect. $40,000 omits the $4,000 of nondeductible expenses. Nondeductible, noncapital expenses (other than those related to tax-exempt income) reduce AAA just as they reduce stock basis.",
    C: "Incorrect. $41,000 increases AAA by the $5,000 of tax-exempt interest. Unlike stock basis, AAA is not increased by tax-exempt income (§1368(e)(1)(A)); that income goes to OAA.",
    D: "Incorrect. $46,000 omits the $10,000 of charitable contributions. Separately stated deductions reduce AAA even though they are not part of ordinary business income."
  },
  tags: ["batch-2026-09-23", "accumulated adjustments account", "§1368(e)", "OAA", "tax-exempt income", "S corporation distributions"]
},
{
  id: "REG-264",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Ordinary business income, separately stated items and AAA",
  skill: "Application",
  difficulty: 2,
  stem: "An S corporation pays $12,000 of health insurance premiums for its president, who owns 40% of the stock and is an employee. Which of the following correctly describes the treatment of the premiums?",
  reference: "",
  options: [
    { key: "A", text: "Deductible by the corporation as an employee benefit and excluded from the president's income" },
    { key: "B", text: "Deductible by the corporation as compensation, included in the president's Form W-2 wages, and deductible by the president as self-employed health insurance" },
    { key: "C", text: "A nondeductible distribution to the president that reduces the accumulated adjustments account" },
    { key: "D", text: "Included in the president's wages subject to FICA and deductible by the president only as an itemized medical expense" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The §106 exclusion for employer-provided health coverage is not available to a more-than-2% shareholder, because §1372 treats the S corporation as a partnership and the shareholder as a partner for fringe benefit purposes.",
    B: "Correct. Under §1372, a more-than-2% shareholder-employee is treated like a partner: the premiums are deductible by the corporation as compensation, reported as wages in box 1 of the shareholder's Form W-2 (Rev. Rul. 91-26), and the shareholder deducts them above the line as self-employed health insurance under §162(l), provided the plan is established by the corporation.",
    C: "Incorrect. The premiums are compensation for services, not a distribution with respect to stock. They do not run through AAA as a distribution; they reduce ordinary business income as a deductible expense.",
    D: "Incorrect. Premiums paid under a plan for a 2% shareholder are excluded from FICA wages (Ann. 92-16) even though they are included in income tax wages, and the shareholder deducts them above the line under §162(l), not as an itemized medical expense."
  },
  tags: ["batch-2026-09-23", "§1372", "2% shareholder", "health insurance", "§162(l)", "fringe benefits", "S corporation"]
},
{
  id: "REG-265",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Basis of shareholder's interest",
  skill: "Application",
  difficulty: 3,
  stem: "The sole shareholder of an S corporation had a stock basis of $30,000 at the beginning of the year and no debt basis. For the year the corporation reported a $40,000 ordinary loss, a $6,000 long-term capital gain and $2,000 of nondeductible meal expenses, and it distributed $10,000 cash to the shareholder. The shareholder materially participates and is fully at risk. What amount of the ordinary loss may the shareholder deduct for the year?",
  reference: "",
  options: [
    { key: "A", text: "$18,000" },
    { key: "B", text: "$24,000" },
    { key: "C", text: "$26,000" },
    { key: "D", text: "$34,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $18,000 ($30,000 - $10,000 - $2,000) omits the $6,000 capital gain. All income items, including separately stated capital gains, increase stock basis first under Reg. §1.1367-1(f) before any decreases are applied.",
    B: "Correct. Under the ordering rules of Reg. §1.1367-1(f), basis is (1) increased for income items: $30,000 + $6,000 = $36,000; (2) decreased for distributions: - $10,000 = $26,000; (3) decreased for nondeductible expenses: - $2,000 = $24,000; and (4) decreased for losses. The loss is deductible only to the extent of the $24,000 remaining basis (§1366(d)(1)); the other $16,000 is suspended and carried forward.",
    C: "Incorrect. $26,000 stops after the distribution and ignores the $2,000 of nondeductible expenses. Nondeductible noncapital expenses reduce basis before losses do, so they consume basis that would otherwise support the loss.",
    D: "Incorrect. $34,000 ($36,000 - $2,000) applies the loss before the distribution. Distributions reduce basis ahead of losses under the ordering rules; applying the loss first would understate the suspended loss and misstate the tax-free portion of the distribution."
  },
  tags: ["batch-2026-09-23", "stock basis", "Reg. §1.1367-1(f)", "ordering rules", "§1366(d)", "suspended loss"]
},
{
  id: "REG-266",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Basis of shareholder's interest",
  skill: "Application",
  difficulty: 2,
  stem: "A shareholder's stock basis in an S corporation was $25,000 at the beginning of the year. The corporation, which has never been a C corporation and has no accumulated earnings and profits, allocated $15,000 of ordinary income to the shareholder and distributed $55,000 cash to the shareholder during the year. What amount and character of income, if any, does the shareholder recognize on the distribution?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$15,000 capital gain" },
    { key: "C", text: "$30,000 capital gain" },
    { key: "D", text: "$55,000 dividend" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. A distribution is tax-free only to the extent of stock basis (§1368(b)(1)). Basis after the income allocation is $40,000, so the $55,000 distribution exceeds basis and the excess is taxable.",
    B: "Correct. Stock basis is first increased by the shareholder's share of income: $25,000 + $15,000 = $40,000 (Reg. §1.1367-1(f)). The distribution reduces basis to zero, and the $15,000 excess over basis is treated as gain from the sale of the stock, i.e., capital gain (§1368(b)(2)).",
    C: "Incorrect. $30,000 ($55,000 - $25,000) measures the distribution against beginning-of-year basis. Income items for the year increase basis before the distribution is applied, so basis available is $40,000, not $25,000.",
    D: "Incorrect. A distribution is a dividend only to the extent of accumulated earnings and profits from C corporation years (§1368(c)). This corporation has none, so no part of the distribution is a dividend."
  },
  tags: ["batch-2026-09-23", "S corporation distributions", "§1368(b)", "stock basis", "capital gain", "no E&P"]
},
{
  id: "REG-267",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Basis of shareholder's interest",
  skill: "Application",
  difficulty: 2,
  stem: "A shareholder owns 50% of an S corporation and has a stock basis of $10,000. During the year the shareholder lent the corporation $15,000 under a written note and personally guaranteed a $30,000 bank loan to the corporation. The shareholder's share of the corporation's ordinary loss for the year is $60,000. The shareholder materially participates and is at risk for all amounts. What amount of the loss may the shareholder deduct?",
  reference: "",
  options: [
    { key: "A", text: "$10,000" },
    { key: "B", text: "$25,000" },
    { key: "C", text: "$55,000" },
    { key: "D", text: "$60,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $10,000 counts only stock basis. Under §1366(d)(1)(B), losses may also be deducted against the shareholder's adjusted basis in indebtedness of the corporation to the shareholder, so the $15,000 direct loan also supports the loss.",
    B: "Correct. The loss limit is stock basis plus debt basis: $10,000 + $15,000 = $25,000 (§1366(d)(1)). A shareholder's guarantee of a third-party loan does not create debt basis because the shareholder has made no actual economic outlay (Reg. §1.1366-2(a)(2)(ii)). The remaining $35,000 is suspended and carried forward.",
    C: "Incorrect. $55,000 adds the $30,000 guaranteed bank loan to basis. Unlike a partner, an S shareholder gets no basis for entity-level debt, and a mere guarantee produces basis only if and when the shareholder actually pays on it.",
    D: "Incorrect. $60,000 deducts the entire loss. The material participation and at-risk rules are satisfied, but the §1366(d) basis limitation is applied first and caps the deduction at $25,000."
  },
  tags: ["batch-2026-09-23", "debt basis", "§1366(d)", "shareholder guarantee", "Reg. §1.1366-2", "loss limitation"]
},
{
  id: "REG-268",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Ordinary business income and separately stated items",
  skill: "Application",
  difficulty: 2,
  stem: "A partner holds a 40% interest in the profits and losses of a calendar-year partnership and receives a $50,000 guaranteed payment for services each year. For the current year the partnership had ordinary income of $30,000 before deducting the guaranteed payment. What amount of ordinary income from the partnership must the partner report for the year?",
  reference: "",
  options: [
    { key: "A", text: "$12,000" },
    { key: "B", text: "$42,000" },
    { key: "C", text: "$50,000" },
    { key: "D", text: "$62,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $12,000 (40% x $30,000) treats the guaranteed payment as a distribution rather than as income. Guaranteed payments are ordinary income to the recipient under §707(c), regardless of partnership income, in addition to the partner's distributive share.",
    B: "Correct. The guaranteed payment is deductible by the partnership (§707(c), §162), producing an ordinary loss of $30,000 - $50,000 = $(20,000). The partner reports the $50,000 guaranteed payment as ordinary income plus a 40% share of the loss, $(8,000): $50,000 - $8,000 = $42,000. Both the guaranteed payment and the distributive share are also net earnings from self-employment for a general partner.",
    C: "Incorrect. $50,000 reports the guaranteed payment but ignores the partner's distributive share of the resulting ordinary loss. The payment is deducted in computing partnership ordinary income, which flips the $30,000 income to a $20,000 loss that is shared 40%.",
    D: "Incorrect. $62,000 adds the guaranteed payment to a 40% share of the pre-payment income ($50,000 + $12,000). Because the guaranteed payment is a partnership deduction, the distributive share must be computed after it is deducted."
  },
  tags: ["batch-2026-09-23", "guaranteed payments", "§707(c)", "distributive share", "partnership loss", "self-employment income"]
},
{
  id: "REG-269",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Ordinary business income and separately stated items",
  skill: "Application",
  difficulty: 2,
  stem: "A calendar-year partnership reported the following for the current year:\n\n| Item | Amount |\n|---|---|\n| Sales | $1,200,000 |\n| Cost of goods sold | $500,000 |\n| Salaries to employees | $200,000 |\n| Guaranteed payments to partners | $80,000 |\n| Health insurance premiums paid for partners | $20,000 |\n| Rent expense | $60,000 |\n| Depreciation | $40,000 |\n| Charitable contributions | $10,000 |\n| Long-term capital gain | $30,000 |\n| Tax-exempt interest | $5,000 |\n\nWhat amount is the partnership's ordinary business income on page 1 of Form 1065?",
  reference: "",
  options: [
    { key: "A", text: "$290,000" },
    { key: "B", text: "$300,000" },
    { key: "C", text: "$320,000" },
    { key: "D", text: "$335,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $290,000 deducts the $10,000 of charitable contributions. Charitable contributions are separately stated on Schedule K so that each partner applies the §170 limitations on the partner's own return.",
    B: "Correct. Ordinary business income = $1,200,000 - $500,000 - $200,000 - $80,000 - $20,000 - $60,000 - $40,000 = $300,000. Health insurance premiums paid for partners are treated as guaranteed payments (Rev. Rul. 91-26) and are deductible by the partnership; charitable contributions, capital gains and tax-exempt interest are separately stated (§702(a)).",
    C: "Incorrect. $320,000 fails to deduct the $20,000 of partner health insurance premiums. Premiums a partnership pays for a partner's coverage are guaranteed payments under §707(c): deductible by the partnership and income to the partner (who may deduct them under §162(l)).",
    D: "Incorrect. $335,000 includes the $30,000 long-term capital gain and $5,000 of tax-exempt interest. Capital gains are separately stated because their character matters at the partner level, and tax-exempt interest is never included in taxable income."
  },
  tags: ["batch-2026-09-23", "partnership ordinary income", "§702(a)", "guaranteed payments", "partner health insurance", "Form 1065"]
},
{
  id: "REG-270",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Ordinary business income and separately stated items",
  skill: "Remembering & Understanding",
  difficulty: 1,
  stem: "Which of the following items is deducted in computing a partnership's ordinary business income on page 1 of Form 1065?",
  reference: "",
  options: [
    { key: "A", text: "Charitable contributions" },
    { key: "B", text: "Guaranteed payments to partners for services" },
    { key: "C", text: "Political contributions" },
    { key: "D", text: "Investment interest expense" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Charitable contributions are separately stated under §702(a)(4) so that each partner applies the individual or corporate §170 limits. They never reduce ordinary business income.",
    B: "Correct. Guaranteed payments for services or the use of capital are treated as payments to a non-partner (§707(c)) and are deducted by the partnership under §162 in arriving at ordinary business income (loss). They are reported as ordinary income by the recipient partner.",
    C: "Incorrect. Political contributions are nondeductible under §162(e)(1)(B). They are reported on Schedule K as nondeductible expenses, reduce the partners' bases, but do not reduce ordinary income.",
    D: "Incorrect. Investment interest expense is separately stated (§702(a)) because the §163(d) limitation on investment interest is applied at the partner level."
  },
  tags: ["batch-2026-09-23", "Form 1065", "ordinary business income", "guaranteed payments", "separately stated items", "nondeductible expenses"]
},
{
  id: "REG-271",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Ordinary business income and separately stated items",
  skill: "Application",
  difficulty: 2,
  stem: "A limited partnership began business on July 1, Year 1. Before opening it paid $8,000 of legal fees to draft the partnership agreement and state filing fees, and $30,000 of brokerage commissions to sell limited partnership interests to investors. The partnership makes all available elections. What amount may the partnership deduct for these costs in Year 1?",
  reference: "",
  options: [
    { key: "A", text: "$5,000" },
    { key: "B", text: "$5,100" },
    { key: "C", text: "$6,100" },
    { key: "D", text: "$8,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $5,000 is only the immediate deduction under §709(b). The remaining $3,000 of organizational expenses is amortized over 180 months beginning with the month business began, adding $100 for the six months of Year 1.",
    B: "Correct. Organizational expenses (drafting the agreement, filing fees) qualify under §709(b): $5,000 immediately (no phase-out because total is under $50,000) plus amortization of the remaining $3,000 over 180 months from July: $3,000 x 6/180 = $100. Total = $5,100. Syndication costs are excluded.",
    C: "Incorrect. $6,100 amortizes the $30,000 of brokerage commissions along with the organizational costs ($5,000 + $33,000 x 6/180). Syndication expenses, the costs of promoting and selling interests in the partnership, are neither deductible nor amortizable under §709(a); they are permanently capitalized.",
    D: "Incorrect. $8,000 deducts all organizational expenses currently. Only $5,000 may be deducted immediately; the balance must be amortized over 180 months (§709(b)(1))."
  },
  tags: ["batch-2026-09-23", "§709", "organizational expenses", "syndication costs", "180-month amortization", "partnership"]
},
{
  id: "REG-272",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Basis of partner's interest",
  skill: "Remembering & Understanding",
  difficulty: 2,
  stem: "Which of the following items has NO effect on a partner's adjusted basis in the partnership interest?",
  reference: "",
  options: [
    { key: "A", text: "The partner's distributive share of the partnership's tax-exempt interest income" },
    { key: "B", text: "A guaranteed payment received by the partner for services" },
    { key: "C", text: "The partner's share of the partnership's nondeductible fines" },
    { key: "D", text: "An increase in the partner's share of the partnership's recourse liabilities" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Tax-exempt income increases outside basis under §705(a)(1)(B). Without the increase the income would be taxed later as gain on a sale or distribution, defeating the exemption.",
    B: "Correct. A guaranteed payment under §707(c) is treated as a payment to a non-partner: it is ordinary income to the recipient and a deduction (or capitalized cost) to the partnership. It is not a distribution, so it does not reduce the recipient's basis; the partner's basis is affected only indirectly through the partner's distributive share of the partnership's resulting income or loss (§705(a)).",
    C: "Incorrect. Nondeductible, noncapital expenditures such as fines and the disallowed portion of meals reduce outside basis under §705(a)(2)(B), even though no deduction is allowed, so the partner cannot later recover the amount as a loss.",
    D: "Incorrect. Under §752(a) an increase in a partner's share of partnership liabilities is treated as a contribution of money by the partner and increases outside basis; a decrease is a deemed distribution under §752(b)."
  },
  tags: ["batch-2026-09-23", "§705", "§707(c)", "§752", "outside basis", "guaranteed payments"]
},
{
  id: "REG-273",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Basis of partner's interest",
  skill: "Application",
  difficulty: 2,
  stem: "A partner had an outside basis of $20,000 at the beginning of the year. For the year the partner was allocated a $35,000 share of the partnership's ordinary loss and $3,000 of tax-exempt interest, and received an $8,000 cash distribution. The partner's share of liabilities did not change. What amount of the ordinary loss is suspended under §704(d) and carried forward?",
  reference: "",
  options: [
    { key: "A", text: "$12,000" },
    { key: "B", text: "$15,000" },
    { key: "C", text: "$20,000" },
    { key: "D", text: "$23,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $12,000 applies the loss before the distribution ($23,000 of basis absorbs $23,000 of loss, leaving $12,000 suspended). Under Reg. §1.704-1(d)(2) and §705, basis is increased for income items and decreased for distributions before the loss limitation is applied.",
    B: "Incorrect. $15,000 is the amount of loss that IS deductible ($20,000 + $3,000 - $8,000 = $15,000 of basis), not the amount suspended. The question asks for the excess carried forward.",
    C: "Correct. Basis available for losses = $20,000 + $3,000 tax-exempt income (§705(a)(1)(B)) - $8,000 distribution = $15,000. Under §704(d) the partner deducts $15,000 of the $35,000 loss; the remaining $20,000 is suspended and carried forward indefinitely until the partner has sufficient basis.",
    D: "Incorrect. $23,000 ($35,000 - $12,000) omits the $3,000 basis increase for tax-exempt interest. Tax-exempt income increases outside basis under §705(a)(1)(B) even though it is never taxed, so it supports an additional $3,000 of loss."
  },
  tags: ["batch-2026-09-23", "§704(d)", "outside basis", "loss limitation", "ordering rules", "suspended loss", "§705"]
},
{
  id: "REG-274",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Basis of partner's interest",
  skill: "Application",
  difficulty: 3,
  stem: "A partner with an outside basis of $50,000 received a nonliquidating distribution of $30,000 cash and inventory with an adjusted basis to the partnership of $15,000 and a fair market value of $25,000. In the same year the partner's share of partnership liabilities decreased by $30,000. What amount of gain must the partner recognize?",
  reference: "",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$10,000" },
    { key: "C", text: "$25,000" },
    { key: "D", text: "$35,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $0 compares only the $30,000 of actual cash to the $50,000 basis. A decrease in a partner's share of liabilities is a deemed distribution of money under §752(b), so total money distributed is $60,000, which exceeds basis.",
    B: "Correct. Money distributed = $30,000 cash + $30,000 deemed distribution from the liability decrease (§752(b)) = $60,000. Gain is recognized to the extent money exceeds outside basis: $60,000 - $50,000 = $10,000 (§731(a)(1)). Basis is reduced to zero, and the inventory takes a $0 basis in the partner's hands (§732(a)(2)).",
    C: "Incorrect. $25,000 adds the $15,000 basis of the inventory to the money distributed. Distributions of property other than money never trigger gain to the distributee under §731(a); instead the property's basis is limited to the partner's remaining outside basis.",
    D: "Incorrect. $35,000 adds the inventory at its $25,000 fair market value. Property distributions do not cause gain recognition, and even when property basis is relevant it is the partnership's adjusted basis, not fair market value, that carries over (§732)."
  },
  tags: ["batch-2026-09-23", "§731(a)", "§752(b)", "deemed distribution", "partnership distribution", "outside basis", "§732"]
},
{
  id: "REG-275",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Limited liability companies — Tax classification options",
  skill: "Application",
  difficulty: 2,
  stem: "A C corporation is the sole member of a limited liability company formed under state law. The LLC has not filed Form 8832 and has several employees. How is the LLC's activity reported for federal tax purposes?",
  reference: "",
  options: [
    { key: "A", text: "On the LLC's own Form 1120, because an LLC owned by a corporation is taxed as a corporation" },
    { key: "B", text: "On Form 1065, with the corporation reported as the sole partner" },
    { key: "C", text: "On the corporation's Form 1120 as a division, although the LLC is treated as a separate employer for employment taxes" },
    { key: "D", text: "On Schedule C attached to the corporation's return" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Absent an election, a domestic single-member LLC is not classified as a corporation. The default classification under Reg. §301.7701-3(b)(1)(ii) is a disregarded entity, regardless of whether the owner is an individual or a corporation.",
    B: "Incorrect. A partnership requires at least two members. A single-member LLC can never be a partnership; its only choices are disregarded entity (default) or association taxable as a corporation (by election on Form 8832).",
    C: "Correct. A single-member LLC that has not elected corporate treatment is disregarded as separate from its owner (Reg. §301.7701-3(b)(1)(ii)), so its income, deductions and credits are reported on the owner's Form 1120 as if it were a division. However, Reg. §301.7701-2(c)(2)(iv) treats the disregarded LLC as a separate entity for federal employment taxes (it files its own Forms 941 under its own EIN) and for certain excise taxes.",
    D: "Incorrect. Schedule C is used by an individual sole proprietor, including an individual who owns a disregarded single-member LLC. A corporate owner simply includes the LLC's items in its own Form 1120."
  },
  tags: ["batch-2026-09-23", "single-member LLC", "disregarded entity", "Reg. §301.7701-3", "employment taxes", "Form 1120"]
},
{
  id: "REG-276",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Limited liability companies — Tax classification options",
  skill: "Application",
  difficulty: 2,
  stem: "Two U.S. individuals form a limited liability company that has never filed a federal return. All members share equally in distributions and liquidation rights. They want the LLC taxed as an S corporation beginning with its first tax year. Which filing accomplishes this?",
  reference: "",
  options: [
    { key: "A", text: "Form 8832 only, electing association status; S status then applies automatically" },
    { key: "B", text: "Form 2553 only, which is treated as a deemed election to be classified as an association" },
    { key: "C", text: "Form 1065 with a statement electing S corporation treatment" },
    { key: "D", text: "Form 8832 and Form 2553 must both be filed, or the S election is invalid" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Form 8832 makes the LLC an association taxable as a C corporation. S status is never automatic; it requires a separate election under §1362(a), which Form 8832 alone does not make.",
    B: "Correct. Under Reg. §301.7701-3(c)(1)(v)(C), an eligible entity that timely files Form 2553 is deemed to have elected to be classified as an association effective the same date, so no Form 8832 is needed. The LLC must satisfy the §1361 requirements: all members are eligible shareholders and the identical economic rights satisfy the one-class-of-stock rule.",
    C: "Incorrect. Form 1065 is the partnership return, the default classification for a multi-member LLC. Filing it would confirm partnership status; there is no S election that can be made on a partnership return.",
    D: "Incorrect. Filing both is permitted but not required. The regulations expressly provide that a timely Form 2553 carries a deemed Form 8832 election, so the S election is valid without a separate classification election."
  },
  tags: ["batch-2026-09-23", "LLC", "Form 2553", "deemed Form 8832 election", "Reg. §301.7701-3(c)", "S corporation classification"]
},
{
  id: "REG-277",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Tax-exempt organizations — Types and filing requirements",
  skill: "Application",
  difficulty: 2,
  stem: "A corporation pays $5,000 of annual dues to a trade association exempt under §501(c)(6). The association reports that 20% of dues are attributable to lobbying state legislators. Which of the following correctly describes the corporation's deduction?",
  reference: "",
  options: [
    { key: "A", text: "$5,000 as a charitable contribution subject to the 10% limit" },
    { key: "B", text: "$4,000 as an ordinary business expense; the lobbying portion is nondeductible" },
    { key: "C", text: "$0, because payments to non-charitable exempt organizations are not deductible" },
    { key: "D", text: "$5,000 as an ordinary business expense, because the association, not the payer, is responsible for lobbying" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Charitable contribution treatment under §170 is available only for gifts to §170(c) organizations, chiefly §501(c)(3) charities and governmental units. A §501(c)(6) business league is not a §170(c) organization.",
    B: "Correct. Dues paid to a trade or professional association are ordinary and necessary business expenses under §162(a). However, §162(e)(3) disallows the portion of dues allocable to the association's lobbying and political activities, which the organization must disclose to members (§6033(e)). Deduction = $5,000 x 80% = $4,000.",
    C: "Incorrect. The exempt status of the recipient does not control deductibility by the payer. A business-related payment to a §501(c)(6) organization is deductible under §162 to the extent it is not allocable to lobbying.",
    D: "Incorrect. §162(e)(3) specifically looks through the association and denies the member's deduction for the portion of dues the organization notifies it is allocable to lobbying, unless the organization elects to pay the proxy tax itself."
  },
  tags: ["batch-2026-09-23", "§501(c)(6)", "§162(e)", "association dues", "lobbying", "§170(c)", "tax-exempt organizations"]
},
{
  id: "REG-278",
  area: "V",
  areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Tax-exempt organizations — Types and filing requirements",
  skill: "Remembering & Understanding",
  difficulty: 2,
  stem: "Which of the following statements regarding the annual filing requirements of tax-exempt organizations is correct?",
  reference: "",
  options: [
    { key: "A", text: "Churches must file Form 990 annually regardless of gross receipts" },
    { key: "B", text: "An organization that fails to file its required annual return or notice for three consecutive years automatically loses its exempt status" },
    { key: "C", text: "Private foundations with gross receipts under the small-organization threshold may file Form 990-N" },
    { key: "D", text: "Organizations with gross receipts normally at or below the small-organization threshold have no annual filing obligation" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Churches, their integrated auxiliaries and conventions or associations of churches are exempt from the annual return requirement under §6033(a)(3)(A)(i). They may file Form 990 voluntarily but are not required to.",
    B: "Correct. Under §6033(j), an organization that fails to file a required Form 990, 990-EZ, 990-PF or 990-N for three consecutive years has its exemption automatically revoked as of the due date of the third return. It must reapply (Form 1023 or 1024) to regain exempt status.",
    C: "Incorrect. Private foundations must file Form 990-PF every year regardless of size (§6033(c)). The Form 990-N e-Postcard is available only to small organizations that are not private foundations.",
    D: "Incorrect. Small organizations (gross receipts normally $50,000 or less) are relieved of filing a full return, but they must submit the electronic Form 990-N notice under §6033(i). Failing to submit it counts toward the three-year automatic revocation."
  },
  tags: ["batch-2026-09-23", "Form 990", "§6033", "automatic revocation", "Form 990-N", "private foundation", "tax-exempt organizations"]
}
];
