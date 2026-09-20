// CPA REG question bank — tax year 2025 figures, 2026 AICPA REG Blueprint (reviewed 2026-09-20).
window.QUESTION_BANK = [
{
  id: "REG-001", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Regulations governing practice before the IRS (Circular 230)", skill: "Remembering & Understanding", difficulty: 1,
  stem: "While preparing a client's current-year Form 1040, a CPA discovers that the client omitted $40,000 of consulting income from the prior-year return that the CPA did not prepare. Under Treasury Department Circular 230, which of the following actions is the CPA required to take?",
  reference: "",
  options: [
    { key: "A", text: "Promptly advise the client of the omission and of the consequences under the Code and regulations of not correcting it." },
    { key: "B", text: "Notify the IRS of the omission within 30 days if the client refuses to file an amended return." },
    { key: "C", text: "Withdraw from the engagement and refuse to prepare the current-year return until an amended return is filed." },
    { key: "D", text: "Prepare and file an amended prior-year return on the client's behalf without further authorization." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Circular 230 §10.21 requires a practitioner who knows a client has not complied with the revenue laws or has made an error or omission on a return to promptly advise the client of the noncompliance and of its consequences. The duty is to inform; the practitioner is not required to notify the IRS or amend the return.",
    B: "Incorrect. Neither Circular 230 nor the AICPA Statements on Standards for Tax Services (SSTS) permit or require the practitioner to disclose the client's error to the IRS without client consent. Doing so would breach confidentiality under IRC §7216 and the AICPA Code.",
    C: "Incorrect. Withdrawal is a judgment call, not a requirement. §10.21 does not compel withdrawal, although the practitioner should consider whether continuing the relationship is appropriate if the client refuses to correct a material error that affects the current return.",
    D: "Incorrect. A practitioner may not file an amended return without the client's authorization; the decision to amend belongs to the client. Circular 230 only obligates the practitioner to advise the client of the error and its consequences."
  },
  tags: ["Circular 230","§10.21","client omission"]
},
{
  id: "REG-002", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Regulations governing practice before the IRS (Circular 230)", skill: "Application", difficulty: 2,
  stem: "Lena, a CPA, is engaged by three prospective clients. Under Circular 230 §10.27, for which engagement may Lena properly charge a contingent fee?",
  reference: "Circular 230 §10.27 — Contingent fees are prohibited for services in connection with any matter before the IRS, except: (1) an IRS examination of, or challenge to, an original return or an amended return/claim for refund filed within 120 days of receiving written notice of the examination; (2) a claim for credit or refund filed solely in connection with the determination of statutory interest or penalties; and (3) any judicial proceeding arising under the Internal Revenue Code.",
  options: [
    { key: "A", text: "Preparing an original Form 1120 for a corporation, with the fee equal to 10% of the tax savings Lena identifies." },
    { key: "B", text: "Filing an amended return claiming a refund that Lena believes the IRS is unlikely to examine, with the fee equal to 25% of any refund received." },
    { key: "C", text: "Representing a client in a Tax Court proceeding contesting a notice of deficiency, with the fee equal to 30% of any reduction in the asserted deficiency." },
    { key: "D", text: "Preparing a claim for refund of overpaid estimated taxes, with the fee equal to one-third of the refund." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Contingent fees for preparing an original return are expressly prohibited by §10.27(b)(1). A fee tied to identified tax savings on an original return is the classic prohibited arrangement.",
    B: "Incorrect. A contingent fee for an amended return or claim for refund is permitted only when it is filed within 120 days of the client receiving written notice of an IRS examination of, or written challenge to, the original return (§10.27(b)(2)). A refund claim filed on the practitioner's own initiative, with no examination pending, does not qualify, regardless of how likely examination is.",
    C: "Correct. §10.27(b)(4) permits contingent fees for services rendered in connection with any judicial proceeding arising under the Internal Revenue Code. A Tax Court case contesting a deficiency is such a proceeding, so a fee based on the deficiency reduction is permissible.",
    D: "Incorrect. A claim for refund of overpaid estimated tax is not a claim filed solely in connection with statutory interest or penalties, nor is it tied to an IRS examination or judicial proceeding, so a contingent fee is prohibited under §10.27."
  },
  tags: ["Circular 230","§10.27","contingent fees"]
},
{
  id: "REG-003", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Regulations governing practice before the IRS (Circular 230)", skill: "Application", difficulty: 2,
  stem: "A CPA is asked to sign a client's return that takes a position for which there is a 25% likelihood of being sustained on the merits. The position is not a tax shelter and is not a reportable transaction. Under Circular 230 §10.34, which of the following is correct?",
  reference: "Circular 230 §10.34(a): a practitioner may not willfully, recklessly or through gross incompetence sign a return that contains a position that lacks a reasonable basis, is an unreasonable position under IRC §6694(a)(2), or is a willful attempt to understate tax. Under §6694(a)(2) a position is unreasonable unless it has substantial authority, or has a reasonable basis and is adequately disclosed (tax shelters require 'more likely than not').\n\nGenerally accepted likelihood scale: reasonable basis ~20%+; substantial authority ~40%; more likely than not >50%.",
  options: [
    { key: "A", text: "The CPA may sign the return only if the position is adequately disclosed on the return, because the position has a reasonable basis but lacks substantial authority." },
    { key: "B", text: "The CPA may sign the return without disclosure because the position exceeds the 20% reasonable-basis threshold." },
    { key: "C", text: "The CPA may not sign the return under any circumstances because the position does not meet the more-likely-than-not standard." },
    { key: "D", text: "The CPA may sign the return without disclosure provided the client signs a written acknowledgment accepting responsibility for the position." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. A 25% likelihood satisfies reasonable basis but not substantial authority (roughly 40%). Under §6694(a)(2)(B) and Circular 230 §10.34, a non-shelter position with only a reasonable basis is not 'unreasonable' if adequately disclosed (Form 8275/8275-R), so the CPA may sign with disclosure.",
    B: "Incorrect. Reasonable basis alone is sufficient only when the position is disclosed. Without disclosure, a signing preparer needs substantial authority to avoid an unreasonable position under §6694(a)(2)(A).",
    C: "Incorrect. The more-likely-than-not standard applies only to tax shelters and reportable transactions under §6694(a)(2)(C). This position is neither, so the lower standards apply.",
    D: "Incorrect. A client acknowledgment does not alter the preparer's independent obligation under §10.34 and §6694. The preparer's standard is determined by the authority for the position and disclosure, not by shifting responsibility to the client."
  },
  tags: ["Circular 230","§10.34","§6694","substantial authority","reasonable basis"]
},
{
  id: "REG-004", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Tax return preparer rules and penalties", skill: "Remembering & Understanding", difficulty: 1,
  stem: "A client provides a CPA with a summary schedule of charitable contributions totaling $18,000 but no receipts. The amount is consistent with prior years and the client's income. Under the AICPA Statements on Standards for Tax Services (SSTS), which of the following statements is correct regarding the CPA's obligation?",
  reference: "",
  options: [
    { key: "A", text: "The CPA must obtain and examine the receipts before deducting the contributions on the return." },
    { key: "B", text: "The CPA may rely in good faith on the client's information without verification, but should make reasonable inquiries if the information appears incorrect, incomplete or inconsistent." },
    { key: "C", text: "The CPA may deduct the contributions only if the client signs a written representation letter attesting to the amounts." },
    { key: "D", text: "The CPA must reduce the deduction to the amount the CPA can independently substantiate." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The SSTS (and Circular 230 §10.34(d)) do not require the preparer to audit or verify client-provided data. Examination of receipts is required only when the information appears inconsistent or when the Code requires substantiation the preparer should inquire about (e.g., §170(f)(8) acknowledgments for gifts of $250 or more, which the CPA should ask whether the client has).",
    B: "Correct. Under the AICPA Statements on Standards for Tax Services (as revised effective 2024; formerly SSTS No. 3, Certain Procedural Aspects of Preparing Returns), a member may in good faith rely, without verification, on information furnished by the taxpayer or third parties, but must make reasonable inquiries if the information appears incorrect, incomplete or inconsistent on its face or with other known facts. The member should also inquire whether the taxpayer has the documentation the Code requires to support a deduction (such as the §170(f)(8) acknowledgment).",
    C: "Incorrect. A representation letter is not required by the SSTS for return preparation; it is an audit concept. Good-faith reliance on oral or written client information is permitted.",
    D: "Incorrect. The preparer does not independently substantiate deductions or unilaterally reduce them. If the client represents the amounts and nothing appears inconsistent, the reported amounts are used."
  },
  tags: ["SSTS","reliance on client information","reasonable inquiry"]
},
{
  id: "REG-005", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Tax return preparer rules and penalties", skill: "Application", difficulty: 2,
  stem: "Marco, a CPA, is preparing a client's 2025 return. He learns the client wants to use an estimate of $6,200 for business travel because the records were destroyed in a flood. Under the AICPA SSTS, which of the following is correct?",
  reference: "",
  options: [
    { key: "A", text: "Estimates are never permitted; Marco must omit the deduction unless actual records are reconstructed." },
    { key: "B", text: "Marco may use the client's estimate if it is reasonable under the facts, and he should disclose the use of an estimate on the return if the circumstances (such as a casualty) could cause a misleading impression about the return's accuracy." },
    { key: "C", text: "Marco may use the estimate only if he personally verifies it against third-party records such as credit card statements." },
    { key: "D", text: "Marco must present the estimate as an exact figure on the return and disclose nothing, because disclosure of estimates invites examination." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The SSTS standard on the use of estimates (formerly SSTS No. 4) expressly allows a member to use the taxpayer's estimates when it is not practical to obtain exact data and the estimates are reasonable under the facts. The travel deduction need not be omitted.",
    B: "Correct. The SSTS permits use of reasonable estimates furnished by the taxpayer. Disclosure is not generally required, but the standard notes that disclosure may be needed to avoid misleading the IRS, for example when records were lost in a casualty or fire. Note also that for travel the Cohan rule does not apply, so the client must still meet §274(d) substantiation to survive examination; the member should inform the client of that risk.",
    C: "Incorrect. The standards allow good-faith reliance on the client's estimate; the member is not required to audit or independently verify it. The member should make inquiries only if the estimate appears unreasonable.",
    D: "Incorrect. This reverses the guidance. The SSTS says the member should not present an estimate in a manner that implies greater accuracy than exists, and disclosure may be appropriate in unusual circumstances such as a casualty."
  },
  tags: ["SSTS","use of estimates","§274(d)"]
},
{
  id: "REG-006", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Tax return preparer rules and penalties", skill: "Application", difficulty: 1,
  stem: "A paid preparer charged $3,600 to prepare a client's 2025 individual return. The return understated tax by $22,000 because the preparer took a position with no substantial authority and no disclosure; the preparer was not willful or reckless, and the position had a reasonable basis. What is the preparer's penalty under IRC §6694(a)?",
  reference: "IRC §6694 (Tax year 2025):\n\n| Penalty | Amount |\n|---|---|\n| §6694(a) understatement due to unreasonable position | Greater of $1,000 or 50% of the income derived (or to be derived) by the preparer from the return |\n| §6694(b) willful or reckless conduct | Greater of $5,000 or 75% of income derived, reduced by any §6694(a) penalty |",
  options: [
    { key: "A", text: "$1,000" },
    { key: "B", text: "$1,800" },
    { key: "C", text: "$2,700" },
    { key: "D", text: "$5,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $1,000 is the floor of the §6694(a) penalty. Because 50% of the preparer's $3,600 fee ($1,800) exceeds $1,000, the greater amount applies.",
    B: "Correct. The §6694(a) penalty is the greater of $1,000 or 50% of the income derived from the return: 50% x $3,600 = $1,800, which exceeds $1,000. An undisclosed position with only a reasonable basis is an 'unreasonable position' under §6694(a)(2). The penalty is not based on the $22,000 understatement.",
    C: "Incorrect. $2,700 is 75% of the fee, which is the percentage used under §6694(b) for willful or reckless conduct. The facts state the conduct was not willful or reckless, so only §6694(a) applies.",
    D: "Incorrect. $5,000 is the floor of the §6694(b) willful/reckless penalty. Since 75% of $3,600 is $2,700, even §6694(b) would produce $5,000 only as the floor, and in any event §6694(b) does not apply to negligent conduct."
  },
  tags: ["§6694","preparer penalty","unreasonable position"]
},
{
  id: "REG-007", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Tax return preparer rules and penalties", skill: "Application", difficulty: 2,
  stem: "During 2026, a tax return preparer prepared 40 Forms 1040 for 2025 that claimed the earned income tax credit (EITC) and the child tax credit. On 12 of those returns the preparer did not complete Form 8867 or make the required inquiries for either credit. On all 40 returns the preparer failed to furnish the client a copy of the return. Assume the IRS assesses the maximum penalties under IRC §6695. What is the total amount of penalties?",
  reference: "IRC §6695 penalties for returns required to be filed in 2026 (Tax year 2025):\n\n| Failure | Penalty |\n|---|---|\n| §6695(a) failure to furnish copy to taxpayer | $60 per failure (annual max $32,000) |\n| §6695(b) failure to sign return | $60 per failure |\n| §6695(c) failure to furnish PTIN | $60 per failure |\n| §6695(g) failure to meet due diligence requirements (EITC, CTC/ACTC/ODC, AOTC, HOH status) | $650 per failure — applied separately to each credit or status on each return |",
  options: [
    { key: "A", text: "$7,800" },
    { key: "B", text: "$10,200" },
    { key: "C", text: "$15,600" },
    { key: "D", text: "$18,000" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. $7,800 = 12 x $650, which counts only one due diligence failure per return. Under §6695(g) and Reg. §1.6695-2 the penalty applies separately to each credit (EITC and CTC) for which due diligence was not met, and it omits the §6695(a) copy failures.",
    B: "Incorrect. $10,200 = 12 x $650 + 40 x $60. This correctly adds the copy penalty but applies the due diligence penalty only once per return instead of once per credit.",
    C: "Incorrect. $15,600 = 12 x 2 x $650 correctly counts two credits per return but omits the $60 x 40 = $2,400 in §6695(a) penalties for failure to furnish a copy of the return to the taxpayer.",
    D: "Correct. Due diligence: 12 returns x 2 credits x $650 = $15,600. Failure to furnish copy: 40 x $60 = $2,400. Total = $18,000. The annual cap of $32,000 for §6695(a) is not reached, and §6695(g) has no annual cap."
  },
  tags: ["§6695","due diligence","Form 8867","preparer penalty"]
},
{
  id: "REG-008", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Licensing and disciplinary systems — State boards of accountancy", skill: "Remembering & Understanding", difficulty: 1,
  stem: "A CPA licensed in a state is found to have willfully failed to file her own federal income tax returns for three years. Which of the following statements regarding the disciplinary consequences is correct?",
  reference: "",
  options: [
    { key: "A", text: "Only the state board of accountancy may impose sanctions, because the IRS has no authority over CPAs who are not enrolled agents." },
    { key: "B", text: "The IRS Office of Professional Responsibility may censure, suspend or disbar the CPA from practice before the IRS, and the state board of accountancy may independently suspend or revoke her license." },
    { key: "C", text: "The AICPA may revoke her CPA license because she violated the AICPA Code of Professional Conduct." },
    { key: "D", text: "The PCAOB has primary jurisdiction because the conduct involves a federal tax matter." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. CPAs are practitioners under Circular 230 §10.3 and are subject to the IRS Office of Professional Responsibility (OPR). Willful failure to file one's own returns is disreputable conduct under §10.51 that can result in sanctions.",
    B: "Correct. Two independent systems apply. OPR, under Circular 230 §10.50, can censure, suspend or disbar a practitioner for disreputable conduct such as willfully failing to file federal returns (§10.51(a)(6)). The state board of accountancy, which issues the license, can separately discipline the CPA, including revocation. Sanctions by one body do not preclude the other.",
    C: "Incorrect. The AICPA is a voluntary professional organization; it can expel or suspend a member from the AICPA but it does not issue or revoke CPA licenses. Only state boards of accountancy license and revoke.",
    D: "Incorrect. The PCAOB oversees registered public accounting firms that audit SEC issuers and has no jurisdiction over a CPA's personal tax compliance."
  },
  tags: ["state board of accountancy","OPR","Circular 230 §10.51","disciplinary systems"]
},
{
  id: "REG-009", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Statute of limitations (assessment and refund claims)", skill: "Application", difficulty: 2,
  stem: "Jade filed her 2025 Form 1040 on March 10, 2026, reporting gross income of $200,000. She inadvertently omitted $55,000 of gross income from a consulting engagement. No fraud is involved. What is the last date on which the IRS may assess additional tax for 2025?",
  reference: "IRC §6501: general assessment period is 3 years from the later of the date the return was filed or the due date; 6 years if the taxpayer omits gross income exceeding 25% of the gross income stated on the return; no limitation for fraud or failure to file. A return filed before the due date is deemed filed on the due date. The 2025 Form 1040 due date is April 15, 2026.",
  options: [
    { key: "A", text: "March 10, 2029" },
    { key: "B", text: "April 15, 2029" },
    { key: "C", text: "April 15, 2032" },
    { key: "D", text: "There is no limitation because a substantial amount of income was omitted." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. This measures 3 years from the actual filing date, but §6501(b)(1) deems an early-filed return to be filed on the due date, and in any event the omission here triggers the 6-year period.",
    B: "Incorrect. April 15, 2029 would be the correct 3-year date for a normal return. Because the omitted gross income ($55,000) exceeds 25% of the gross income stated on the return (25% x $200,000 = $50,000), the 6-year period of §6501(e) applies.",
    C: "Correct. The omission test: $55,000 / $200,000 = 27.5%, which exceeds 25%. The 6-year assessment period therefore runs from the deemed filing date (April 15, 2026, since the return was filed early), ending April 15, 2032.",
    D: "Incorrect. An unlimited period applies only to a false or fraudulent return, a willful attempt to evade tax, or a failure to file. An inadvertent omission, however large, is capped at 6 years."
  },
  tags: ["§6501","statute of limitations","25% omission"]
},
{
  id: "REG-010", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Statute of limitations (assessment and refund claims)", skill: "Analysis", difficulty: 3,
  stem: "Tomas filed his 2022 income tax return on April 15, 2023, showing tax of $30,000, all of which had been withheld during 2022. On June 1, 2025, the IRS assessed an additional $8,000 of tax, which Tomas paid on June 20, 2025. In 2026 Tomas discovers he overlooked a $12,000 deduction on the 2022 return. On September 1, 2026 he files a claim for refund. What is the maximum amount of refund Tomas may receive?",
  reference: "IRC §6511: a refund claim must be filed within the later of 3 years from the date the return was filed or 2 years from the date the tax was paid. If filed within the 3-year period, the refund is limited to tax paid within the 3 years (plus extensions) before the claim; if filed only within the 2-year period, the refund is limited to tax paid within the 2 years before the claim. Withheld tax is deemed paid on the return due date (April 15). Assume the $12,000 deduction would reduce 2022 tax by $2,880.",
  options: [
    { key: "A", text: "$0, because the claim was filed more than 3 years after the return." },
    { key: "B", text: "$2,880" },
    { key: "C", text: "$8,000" },
    { key: "D", text: "$10,880" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Although the 3-year window from the April 15, 2023 filing closed April 15, 2026, the claim is timely under the alternative 2-year rule because it was filed within 2 years of the June 20, 2025 payment of the $8,000 assessment.",
    B: "Correct. The claim is timely under the 2-year-from-payment rule of §6511(a). Under §6511(b)(2)(B), the refund is limited to the tax paid within the 2 years before the claim, i.e., the $8,000 paid June 20, 2025. The overlooked deduction reduces tax by only $2,880, which is less than the $8,000 look-back ceiling, so the full $2,880 is refundable.",
    C: "Incorrect. $8,000 is the ceiling on the refund (tax paid in the 2-year look-back window), not the amount of the overpayment. The actual overpayment attributable to the missed deduction is $2,880.",
    D: "Incorrect. This adds the $8,000 paid and the $2,880 tax effect. The refund cannot exceed the actual overpayment, and the withheld $30,000 (deemed paid April 15, 2023) is outside the look-back period anyway."
  },
  tags: ["§6511","refund claim","look-back period"]
},
{
  id: "REG-011", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Taxpayer penalties", skill: "Application", difficulty: 2,
  stem: "Priya's 2025 Form 1040 showed a balance due of $10,000. She did not request an extension and filed the return, with full payment, on July 3, 2026. Assuming no reasonable cause, what is the combined failure-to-file and failure-to-pay penalty?",
  reference: "IRC §6651 (Tax year 2025): Failure to file — 5% of the net tax due per month or part of a month, maximum 25%; reduced by the failure-to-pay penalty for any month both apply. Failure to pay — 0.5% of the net tax due per month or part of a month, maximum 25%. Minimum failure-to-file penalty when the return is more than 60 days late: lesser of $525 or 100% of the tax due. The 2025 return was due April 15, 2026.",
  options: [
    { key: "A", text: "$1,350" },
    { key: "B", text: "$2,250" },
    { key: "C", text: "$1,650" },
    { key: "D", text: "$1,500" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. $1,350 applies 4.5% x 3 months and ignores the failure-to-pay penalty. The net combined rate is 5% per month (4.5% FTF + 0.5% FTP) when both apply.",
    B: "Incorrect. $2,250 treats the return as 4.5 months late or applies the 5% rate over 4 months plus FTP. Only 3 months (or fractions) elapsed between April 15 and July 3.",
    C: "Incorrect. $1,650 counts 3 months of failure-to-file at the full 5% ($1,500) plus 3 months of failure-to-pay ($150) without applying the §6651(c)(1) reduction of the FTF penalty by the FTP penalty for overlapping months.",
    D: "Correct. The return is late for 3 months or parts of months (April 16 - May 15, May 16 - June 15, and June 16 - July 3 each count as a month). Failure to file: 5% x 3 = 15% but reduced by the 0.5% FTP each month, so 4.5% x 3 = 13.5% = $1,350. Failure to pay: 0.5% x 3 = 1.5% = $150. Total = $1,500, the same as 5% x 3 x $10,000. The $525 minimum is irrelevant because the computed penalty exceeds it."
  },
  tags: ["§6651","failure to file","failure to pay"]
},
{
  id: "REG-012", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Taxpayer penalties", skill: "Application", difficulty: 2,
  stem: "An individual taxpayer's 2025 return reported tax of $38,000. On examination the correct tax is determined to be $47,000. The $9,000 understatement resulted from an aggressive deduction for which the taxpayer had a reasonable basis but not substantial authority, and the position was not disclosed. There was no negligence and no fraud. Which of the following best describes the accuracy-related penalty under IRC §6662?",
  reference: "IRC §6662: 20% penalty on the portion of an underpayment attributable to (among other things) negligence or a substantial understatement of income tax. For individuals, an understatement is substantial if it exceeds the greater of 10% of the tax required to be shown on the return or $5,000. The understatement is reduced by amounts attributable to positions with substantial authority, or positions with a reasonable basis that are adequately disclosed.",
  options: [
    { key: "A", text: "No penalty applies, because the taxpayer had a reasonable basis for the position." },
    { key: "B", text: "No penalty applies, because the $9,000 understatement does not exceed 10% of the correct tax." },
    { key: "C", text: "A penalty of $1,800 applies, because the understatement is substantial and the undisclosed reasonable-basis position does not reduce it." },
    { key: "D", text: "A penalty of $1,800 applies only if the IRS also establishes negligence." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Reasonable basis reduces the understatement under §6662(d)(2)(B) only if the position is adequately disclosed on the return. Because the position was not disclosed, the reasonable basis alone does not reduce the understatement. (Reasonable basis may support a §6664(c) reasonable-cause defense in some cases, but the question states only that a reasonable basis existed.)",
    B: "Incorrect. The test is the greater of 10% of the correct tax ($4,700) or $5,000, so the threshold is $5,000. The $9,000 understatement exceeds $5,000 and is therefore substantial. This option misapplies the 10% test alone and also miscomputes it ($9,000 is more than $4,700).",
    C: "Correct. Threshold = greater of 10% x $47,000 = $4,700 or $5,000, i.e., $5,000. Understatement of $9,000 exceeds the threshold, so it is substantial. The undisclosed position with only a reasonable basis (no substantial authority) does not reduce the understatement. Penalty = 20% x $9,000 = $1,800.",
    D: "Incorrect. Negligence and substantial understatement are independent grounds for the §6662 penalty. A substantial understatement alone triggers the 20% penalty without any showing of negligence."
  },
  tags: ["§6662","substantial understatement","accuracy-related penalty"]
},
{
  id: "REG-013", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Audits, appeals and the judicial process", skill: "Remembering & Understanding", difficulty: 1,
  stem: "After an examination of his 2024 return, Raul received a statutory notice of deficiency (90-day letter) asserting $45,000 of additional tax. Raul disagrees and does not want to pay the tax before litigating. Which of the following courses of action is available to Raul?",
  reference: "",
  options: [
    { key: "A", text: "File a petition with the U.S. Tax Court within 90 days of the notice; the tax need not be paid first, and the case may be appealed to the U.S. Court of Appeals." },
    { key: "B", text: "File suit in the U.S. District Court within 90 days of the notice without paying the tax, and request a jury trial." },
    { key: "C", text: "File suit in the U.S. Court of Federal Claims within 90 days without paying the tax, with appeal to the Federal Circuit." },
    { key: "D", text: "File a protest with the IRS Independent Office of Appeals; a timely protest automatically stays the 90-day period until Appeals issues a decision." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The Tax Court is the only forum in which a taxpayer may litigate a deficiency without first paying it. A petition must be filed within 90 days (150 days if the notice is addressed to a person outside the U.S.) of the notice of deficiency under IRC §6213. Tax Court decisions (other than small case S-procedure decisions) are appealable to the Court of Appeals for the circuit where the taxpayer resides.",
    B: "Incorrect. A refund suit in the U.S. District Court requires the taxpayer to first pay the tax, file a claim for refund, and have it denied or wait 6 months. A jury trial is available in District Court, but not without prepayment.",
    C: "Incorrect. The Court of Federal Claims, like the District Court, is a refund forum requiring prior payment of the tax and denial of a refund claim. Its appeals do go to the Federal Circuit, but the prepayment requirement makes this option unavailable to Raul.",
    D: "Incorrect. Appeals consideration is generally requested in response to the 30-day letter, before a notice of deficiency issues. Filing a protest does not suspend the 90-day period; if Raul does not petition the Tax Court within 90 days the deficiency is assessed. (Appeals may still consider a docketed case, but only after a timely petition.)"
  },
  tags: ["Tax Court","notice of deficiency","§6213","judicial process"]
},
{
  id: "REG-014", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Legal duties and responsibilities — Privileged communications, confidentiality and privacy acts", skill: "Application", difficulty: 2,
  stem: "A CPA provided tax advice to a corporate client regarding (1) the deductibility of a bonus accrual, (2) a written opinion promoting the client's participation in a listed transaction designed to avoid tax, and (3) the tax treatment of a transaction that later became the subject of a criminal tax investigation. In which situation may the client assert the federally authorized tax practitioner privilege under IRC §7525 to prevent disclosure of the communication?",
  reference: "",
  options: [
    { key: "A", text: "Situations 1, 2 and 3" },
    { key: "B", text: "Situation 1 only" },
    { key: "C", text: "Situations 1 and 3 only" },
    { key: "D", text: "Situations 2 and 3 only" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The §7525 privilege is much narrower than the attorney-client privilege. It does not extend to written communications promoting tax shelters (§7525(b)) or to criminal matters (§7525(a)(2)).",
    B: "Correct. §7525 extends the common-law attorney-client privilege to communications of tax advice between a taxpayer and a federally authorized tax practitioner, but only in noncriminal tax matters before the IRS or in federal court brought by or against the United States. Advice on the bonus accrual is ordinary tax advice and is protected. The privilege does not apply to written communications in connection with the promotion of a tax shelter (situation 2) or to criminal proceedings (situation 3).",
    C: "Incorrect. Situation 3 involves a criminal investigation. By its terms §7525(a)(2) limits the privilege to noncriminal tax matters before the IRS and noncriminal tax proceedings in federal court, so the CPA can be compelled to testify.",
    D: "Incorrect. These are precisely the two situations excluded from the privilege. Note also that the privilege never applies to the preparation of tax returns themselves, since return preparation is not considered legal advice."
  },
  tags: ["§7525","privilege","confidentiality","§7216"]
},
{
  id: "REG-015", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Legal duties and responsibilities — Common law duties and liabilities to clients and third parties", skill: "Application", difficulty: 2,
  stem: "Kent & Co., CPAs, negligently prepared a corporate tax return and related tax projections that understated the client's tax liability. The client gave the projections to First Bank, which the CPA firm knew was considering a loan to the client. The client also, without the CPA's knowledge, showed the projections to Vendor Inc., which extended trade credit. Both the bank and the vendor suffered losses when the true tax liability became known. In a jurisdiction that follows the Restatement (Second) of Torts §552 approach, which parties may recover from Kent & Co. for negligence?",
  reference: "",
  options: [
    { key: "A", text: "The client only, because the CPA firm was in privity of contract only with the client." },
    { key: "B", text: "The client and First Bank, but not Vendor Inc." },
    { key: "C", text: "The client, First Bank and Vendor Inc., because each foreseeably relied on the CPA's work." },
    { key: "D", text: "First Bank and Vendor Inc. only, because the client is barred by its own contributory negligence in furnishing inaccurate data." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This describes the strict privity (Ultramares) rule, under which only the client or a party in near-privity (primary benefit) may sue for ordinary negligence. The question specifies the broader Restatement approach.",
    B: "Correct. Under Restatement (Second) of Torts §552, an accountant is liable for negligent misrepresentation to the client and to a limited group of third parties whom the accountant knows or intends will receive and rely on the information for a known purpose (the 'foreseen users' or 'known third-party' standard). First Bank was known to the firm as a prospective lender and is within that class. Vendor Inc. was unknown to the firm and merely foreseeable, so it cannot recover for negligence under the Restatement rule (although it could recover for fraud or gross negligence).",
    C: "Incorrect. Recovery by any reasonably foreseeable user is the minority 'Rosenblum' rule adopted by only a few states. Under the Restatement standard the plaintiff must be a member of a limited class actually known to the accountant.",
    D: "Incorrect. The client is in privity and clearly may sue for negligence. Contributory or comparative negligence of the client may reduce or bar the client's recovery in some states, but the facts give no indication the client provided inaccurate data; the error was the CPA's."
  },
  tags: ["negligence","Restatement §552","third-party liability","Ultramares"]
},
{
  id: "REG-016", area: "II", areaName: "Business Law",
  topic: "Agency — Authority of agents and principals", skill: "Application", difficulty: 2,
  stem: "For five years, Dana was the purchasing manager of Orion Corp. and regularly bought inventory from Sable Supply on Orion's credit. On March 1, Orion terminated Dana's employment but did not notify Sable. On March 10, Dana, purporting to act for Orion, ordered $30,000 of goods from Sable, took delivery, and disappeared. Which of the following statements is correct?",
  reference: "",
  options: [
    { key: "A", text: "Orion is not liable to Sable because Dana's actual authority terminated on March 1." },
    { key: "B", text: "Orion is not liable to Sable because Sable had a duty to verify Dana's authority for each order." },
    { key: "C", text: "Orion is liable to Sable because Dana had apparent authority that continued until Sable received notice of the termination." },
    { key: "D", text: "Orion is liable to Sable only if Orion ratifies the transaction." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Termination ends the agent's actual authority, but apparent authority created by the principal's prior conduct continues as to third parties who dealt with the agent until they receive notice. Orion's failure to notify Sable leaves the apparent authority intact.",
    B: "Incorrect. A third party who has previously dealt with an agent is entitled to rely on the continuing appearance of authority; there is no general duty to re-verify authority on each transaction. The burden is on the principal to give actual notice to third parties who dealt with the agent (and constructive/public notice to others).",
    C: "Correct. Apparent authority arises from the principal's manifestations to the third party. Because Orion had allowed Dana to buy on credit for five years and gave Sable no notice of termination, Dana had lingering apparent authority and Orion is bound. Orion's remedy is against Dana for breach of duty.",
    D: "Incorrect. Ratification is relevant when an agent acts without any authority. Here Dana had apparent authority, so Orion is bound regardless of ratification."
  },
  tags: ["agency","apparent authority","termination of authority","notice"]
},
{
  id: "REG-017", area: "II", areaName: "Business Law",
  topic: "Agency — Duties and liabilities of agents and principals", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Nia is a real estate agent engaged by Wells to sell Wells' commercial building. Nia learns that a developer will pay a premium for the property, but instead arranges for her brother to buy the building at the listed price and then resell it to the developer, sharing the profit with Nia. Which duty owed to Wells has Nia breached?",
  reference: "",
  options: [
    { key: "A", text: "The duty of obedience" },
    { key: "B", text: "The duty of reasonable care" },
    { key: "C", text: "The duty to account" },
    { key: "D", text: "The duty of loyalty" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. The duty of obedience requires the agent to follow the principal's lawful instructions. Nia did not disobey an instruction; she secretly profited at the principal's expense, which is a loyalty issue.",
    B: "Incorrect. The duty of care concerns competence and diligence. Nia's conduct was intentional self-dealing, not careless performance.",
    C: "Incorrect. The duty to account requires the agent to keep and remit the principal's funds and property. While Nia will have to disgorge the secret profit, the underlying breach is of loyalty; the accounting duty is the remedy mechanism.",
    D: "Correct. An agent is a fiduciary and owes the principal the duty of loyalty: no self-dealing, no secret profits, no competing, and full disclosure of material information (such as the developer's interest). Nia must disgorge the secret profit and is liable for damages; the principal may also rescind the sale to the brother."
  },
  tags: ["agency","fiduciary duty","duty of loyalty","secret profit"]
},
{
  id: "REG-018", area: "II", areaName: "Business Law",
  topic: "Agency — Authority of agents and principals", skill: "Application", difficulty: 2,
  stem: "Cole, acting within his actual authority, contracted in his own name to purchase equipment from Vance for $50,000 on behalf of Hale Industries, without disclosing to Vance that Cole was acting for anyone. Hale later refused to accept the equipment. Which of the following is correct regarding Vance's rights?",
  reference: "",
  options: [
    { key: "A", text: "Vance may recover from Cole only, because Hale was not a party to the contract." },
    { key: "B", text: "Vance may recover from either Cole or Hale, but not both, once Hale's identity is discovered." },
    { key: "C", text: "Vance may recover from Hale only, because Cole acted within his actual authority." },
    { key: "D", text: "Vance may recover from neither party, because a contract with an undisclosed principal is voidable by the third party." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. An undisclosed principal is liable on contracts made by an agent acting within actual authority, even though the third party did not know of the principal's existence. Hale is a proper defendant.",
    B: "Correct. When an agent contracts for an undisclosed principal, both the agent (who appears to the third party as the contracting party) and the principal (once discovered) are liable. Under the traditional election rule the third party may pursue either, but cannot obtain a double recovery; the Restatement (Third) permits judgment against both but only one satisfaction.",
    C: "Incorrect. The agent of an undisclosed (or partially disclosed) principal is personally liable on the contract because the third party dealt with and relied on the agent. Only an agent for a fully disclosed principal escapes personal liability.",
    D: "Incorrect. Contracts made by an agent for an undisclosed principal are valid and enforceable; the third party's ignorance of the principal does not make the contract voidable unless there was fraud or the contract is personal in nature."
  },
  tags: ["agency","undisclosed principal","agent liability"]
},
{
  id: "REG-019", area: "II", areaName: "Business Law",
  topic: "Contracts — Formation", skill: "Application", difficulty: 2,
  stem: "On May 1, Brooke mailed Cody an offer to sell her boat for $12,000, stating that the offer would remain open until May 10 and saying nothing about how acceptance was to be communicated. On May 5, Brooke mailed a letter revoking the offer; Cody received it on May 8. On May 6, Cody mailed a letter accepting the offer, which Brooke received on May 9. Which of the following is correct?",
  reference: "",
  options: [
    { key: "A", text: "No contract was formed because Brooke's revocation was mailed before Cody's acceptance." },
    { key: "B", text: "No contract was formed because Cody received the revocation before Brooke received the acceptance." },
    { key: "C", text: "A contract was formed on May 6 under the mailbox rule when Cody dispatched the acceptance." },
    { key: "D", text: "A contract was formed on May 9 when Brooke received the acceptance within the time specified." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. A revocation is effective only when received by the offeree, not when dispatched. Brooke's revocation did not become effective until Cody received it on May 8, by which time Cody had already accepted on May 6.",
    B: "Incorrect. Under the mailbox rule an acceptance is effective on dispatch (May 6). The revocation became effective on receipt (May 8), two days after the contract was already formed, so the later-arriving revocation is a nullity.",
    C: "Correct. Because the offer did not specify otherwise, the mailbox rule applies: acceptance by a reasonable medium is effective when dispatched. Cody's acceptance was effective on May 6, before Brooke's revocation was received on May 8, so a contract was formed on May 6. A statement that an offer will remain open until May 10 does not by itself make the offer irrevocable absent consideration (option) or a merchant's firm offer under UCC §2-205, but here the revocation simply arrived too late.",
    D: "Incorrect. Acceptance is effective on receipt only if the offer requires receipt or otherwise displaces the mailbox rule. Brooke's offer said nothing about the manner of acceptance, so the acceptance was effective on dispatch (May 6), not on receipt (May 9)."
  },
  tags: ["contracts","offer and acceptance","mailbox rule","revocation"]
},
{
  id: "REG-020", area: "II", areaName: "Business Law",
  topic: "Contracts — Formation", skill: "Application", difficulty: 2,
  stem: "Two situations: (1) Grant, a general contractor, agreed to build a warehouse for Pike for $900,000. Midway through construction, Grant demanded an additional $60,000 to finish, citing higher labor costs, and Pike agreed in writing. (2) Sutton Corp. contracted to buy 1,000 widgets from Yost Inc. at $50 each. Before delivery, Yost asked for $55 per widget because of tariff increases, and Sutton agreed in writing. Neither Grant nor Yost provided anything new in exchange. Which modification is enforceable?",
  reference: "",
  options: [
    { key: "A", text: "Both modifications are enforceable because each was agreed to in writing." },
    { key: "B", text: "Neither modification is enforceable because neither is supported by new consideration." },
    { key: "C", text: "Only the widget modification is enforceable, because UCC Article 2 does not require consideration for a good-faith modification." },
    { key: "D", text: "Only the warehouse modification is enforceable, because construction contracts may be modified to reflect changed circumstances." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. A writing does not substitute for consideration under the common law. Grant's promise to do what he was already obligated to do is a pre-existing duty and cannot support Pike's promise to pay more.",
    B: "Incorrect. This correctly states the common-law rule for the warehouse contract but ignores UCC §2-209(1), which eliminates the consideration requirement for modifications to contracts for the sale of goods.",
    C: "Correct. The warehouse contract is for services and governed by common law, where the pre-existing duty rule makes Grant's modification unenforceable absent new consideration or unanticipated circumstances. The widget contract is for goods; UCC §2-209(1) provides that an agreement modifying a contract needs no consideration to be binding, provided it is made in good faith. The modified price is $55,000, over $500, so the writing also satisfies the statute of frauds under §2-209(3).",
    D: "Incorrect. This reverses the rule. Some courts allow common-law modification for genuinely unanticipated circumstances (Restatement §89), but ordinary cost increases do not qualify, and in any case the UCC modification is the one clearly enforceable."
  },
  tags: ["contracts","consideration","pre-existing duty","UCC §2-209"]
},
{
  id: "REG-021", area: "II", areaName: "Business Law",
  topic: "Contracts — Formation", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Which of the following oral agreements is enforceable despite the statute of frauds?",
  reference: "",
  options: [
    { key: "A", text: "An agreement to purchase a parcel of land for $4,000." },
    { key: "B", text: "An agreement by a corporate officer to personally guarantee the corporation's bank loan in exchange for the bank extending credit to the corporation." },
    { key: "C", text: "An agreement to purchase 200 custom-printed brochures for $450." },
    { key: "D", text: "An agreement to employ a manager for a term of eighteen months." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Any contract for the sale of an interest in land must be in writing under the statute of frauds regardless of the price. The $500 threshold applies to goods, not land.",
    B: "Incorrect. A promise to answer for the debt of another (a suretyship or guaranty) must be in writing. The 'main purpose' exception applies only if the guarantor's primary purpose is his own economic benefit, which is not established by the facts.",
    C: "Correct. Under UCC §2-201 a contract for the sale of goods must be in writing only if the price is $500 or more. A $450 contract is below the threshold and enforceable orally. (Even above $500, specially manufactured goods can be an exception under §2-201(3)(a).)",
    D: "Incorrect. A contract that cannot by its terms be performed within one year from its making must be in writing. An eighteen-month employment term cannot be completed within one year, so an oral agreement is unenforceable."
  },
  tags: ["contracts","statute of frauds","UCC §2-201","one-year rule"]
},
{
  id: "REG-022", area: "II", areaName: "Business Law",
  topic: "Contracts — Formation", skill: "Application", difficulty: 2,
  stem: "On January 2, Rex Electronics, a merchant dealer, sent Tara, a consumer, a signed letter offering to sell a used server for $3,000 and stating that the offer would remain open for 120 days. Tara paid nothing for the promise. On April 20, Rex sold the server to someone else and emailed Tara that the offer was withdrawn. On April 25, Tara sent an acceptance. Which of the following is correct?",
  reference: "UCC §2-205 (firm offers): an offer by a merchant to buy or sell goods in a signed writing which by its terms gives assurance that it will be held open is not revocable, for lack of consideration, during the time stated or if no time is stated for a reasonable time, but in no event may such period of irrevocability exceed three months.",
  options: [
    { key: "A", text: "A contract was formed because a merchant's firm offer is irrevocable for the entire period stated in the writing." },
    { key: "B", text: "A contract was formed because Rex's revocation was not in a signed writing." },
    { key: "C", text: "No contract was formed because firm offers under the UCC require consideration from the offeree." },
    { key: "D", text: "No contract was formed because a firm offer is irrevocable for a maximum of three months, and Rex revoked after that period had expired." }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. UCC §2-205 caps the period of irrevocability at three months even when the offer states a longer period. After three months (April 2) the offer became revocable like any ordinary offer.",
    B: "Incorrect. A revocation need not be in a signed writing; it is effective when communicated to the offeree by any reasonable means. The signed-writing requirement applies to the firm offer itself, not to its revocation.",
    C: "Incorrect. The entire point of §2-205 is to make a merchant's written firm offer binding without consideration. An option supported by consideration is a separate concept that can be held open for any agreed period.",
    D: "Correct. Rex is a merchant, and the signed writing giving assurance the offer would be held open created a firm offer. But irrevocability lasts at most three months (through about April 2). Rex's revocation on April 20 was communicated to Tara before her April 25 acceptance, so the offer had been effectively revoked and no contract was formed."
  },
  tags: ["UCC §2-205","firm offer","merchant","revocation"]
},
{
  id: "REG-023", area: "II", areaName: "Business Law",
  topic: "Contracts — Breach and remedies", skill: "Application", difficulty: 2,
  stem: "Farley contracted to buy 500 units of industrial fasteners from Manx Corp. at $40 per unit, delivery June 1. On June 1 Manx repudiated and delivered nothing. Farley purchased 500 substitute fasteners from another supplier on June 5 at $48 per unit, the market price on that date; the market price on June 1 was $46. Farley paid $600 in extra freight to obtain the substitute goods and saved $200 in inspection costs it would have incurred under the Manx contract. What amount may Farley recover from Manx?",
  reference: "UCC §2-712: a buyer may 'cover' by making in good faith and without unreasonable delay a reasonable purchase of substitute goods; damages = cost of cover less contract price, plus incidental and consequential damages, less expenses saved as a consequence of the breach.",
  options: [
    { key: "A", text: "$3,000" },
    { key: "B", text: "$3,400" },
    { key: "C", text: "$4,000" },
    { key: "D", text: "$4,400" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. $3,000 uses the market-price differential ($46 - $40) x 500 under §2-713, which applies when the buyer does not cover. Because Farley actually covered in good faith, the cover measure under §2-712 governs and the incidental freight and saved expenses must also be considered.",
    B: "Incorrect. $3,400 = $3,000 market differential + $600 freight - $200 saved. It applies the wrong base measure (market price instead of cover price).",
    C: "Incorrect. $4,000 = ($48 - $40) x 500 is the cover differential alone. §2-712(2) also allows incidental damages (the $600 extra freight) and requires subtraction of expenses saved ($200).",
    D: "Correct. Cover differential ($48 - $40) x 500 = $4,000; plus incidental damages (extra freight) $600; less expenses saved $200. Total = $4,400. Cover made within four days of the breach at the then-market price is reasonable and timely."
  },
  tags: ["UCC §2-712","cover","buyer's remedies","damages"]
},
{
  id: "REG-024", area: "II", areaName: "Business Law",
  topic: "Contracts — Performance and discharge", skill: "Application", difficulty: 2,
  stem: "Pell agreed to paint a mural on the interior wall of Lund's restaurant for $20,000, to be completed by October 31. On October 10, before Pell had begun, a fire caused by faulty wiring (not attributable to either party) destroyed the restaurant. Lund had paid a $5,000 deposit. Which of the following is correct?",
  reference: "",
  options: [
    { key: "A", text: "Pell is in breach if he does not paint the mural in a substitute location that Lund designates by October 31." },
    { key: "B", text: "Both parties are discharged by impossibility, and Lund is entitled to restitution of the $5,000 deposit." },
    { key: "C", text: "Both parties are discharged by impossibility, but Pell may retain the $5,000 deposit as liquidated damages." },
    { key: "D", text: "Lund is in breach because the destruction of the restaurant was within Lund's control as owner of the premises." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The contract called for a mural on a specific wall; the destruction of that subject matter without fault of either party discharges the contract. Lund cannot unilaterally substitute a different, materially altered performance obligation.",
    B: "Correct. Destruction of the specific subject matter essential to performance, without fault of either party, discharges both parties under the doctrine of impossibility (objective impossibility). Because neither party is in breach, the law restores the parties to their pre-contract position: Lund recovers the $5,000 deposit in restitution because Pell has conferred no benefit.",
    C: "Incorrect. Liquidated damages presuppose a breach and an agreed damages clause. Here there is no breach and no clause, so Pell has no right to keep the deposit; retaining it would be unjust enrichment.",
    D: "Incorrect. The fire was caused by faulty wiring and was not attributable to either party. Lund's status as owner does not make the destruction his fault; absent negligence, the risk of the loss of the subject matter discharges rather than breaches the contract."
  },
  tags: ["contracts","impossibility","discharge","restitution"]
},
{
  id: "REG-025", area: "II", areaName: "Business Law",
  topic: "Debtor-creditor relationships — Suretyship, secured transactions and bankruptcy distributions", skill: "Application", difficulty: 2,
  stem: "Ames, Bell and Cruz are co-sureties on a $300,000 loan made by North Bank to Dorr Corp. Their maximum liabilities are $300,000, $200,000 and $100,000 respectively. Dorr defaulted when $180,000 was owed, and North Bank collected the full $180,000 from Ames. Ignoring any recovery from Dorr, how much may Ames recover from Bell and Cruz in contribution?",
  reference: "Co-sureties share a loss in proportion to their maximum liabilities (pro rata by limits), unless they have agreed otherwise. A surety who pays more than its proportionate share is entitled to contribution from co-sureties for the excess.",
  options: [
    { key: "A", text: "$60,000 from Bell and $30,000 from Cruz" },
    { key: "B", text: "$60,000 from Bell and $60,000 from Cruz" },
    { key: "C", text: "$90,000 from Bell and $45,000 from Cruz" },
    { key: "D", text: "$120,000 from Bell and $60,000 from Cruz" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Total limits = $300,000 + $200,000 + $100,000 = $600,000. Shares of the $180,000 loss: Ames 300/600 = $90,000; Bell 200/600 = $60,000; Cruz 100/600 = $30,000. Ames paid $180,000, which is $90,000 more than his share, so he recovers $60,000 from Bell and $30,000 from Cruz.",
    B: "Incorrect. Equal one-third shares ($60,000 each) apply only when co-sureties have equal maximum liabilities or no stated limits. Here the limits differ, so the shares are proportional to the limits.",
    C: "Incorrect. These figures allocate the loss as if Ames bore no share at all ($180,000 split 2:1 between Bell and Cruz). Ames, as a co-surety, must bear his own proportionate share of $90,000.",
    D: "Incorrect. This allocates the full $180,000 across Bell and Cruz in the 2:1 ratio and also overstates the loss. Contribution is limited to the amount Ames paid in excess of his own share."
  },
  tags: ["suretyship","co-sureties","contribution"]
},
{
  id: "REG-026", area: "II", areaName: "Business Law",
  topic: "Debtor-creditor relationships — Suretyship, secured transactions and bankruptcy distributions", skill: "Analysis", difficulty: 3,
  stem: "On March 1, Hart bought a home entertainment system from Lux Electronics for personal use, paying $500 down and signing a security agreement granting Lux a security interest in the system for the $4,000 balance. Lux did not file a financing statement. On April 1, Hart borrowed $3,000 from Quick Loan, granting Quick a security interest in the same system, and Quick filed a financing statement on April 2. On May 1, Hart sold the system to his neighbor Ivy, who paid $2,500, had no knowledge of either security interest, and uses it in her home. Which of the following is correct?",
  reference: "UCC Article 9: a purchase-money security interest (PMSI) in consumer goods is automatically perfected upon attachment without filing (§9-309(1)). A buyer of consumer goods from a consumer takes free of an automatically perfected PMSI if the buyer gives value, has no knowledge of the security interest, buys for personal/household use, and no financing statement was filed before the purchase (§9-320(b), the 'garage sale' rule).",
  options: [
    { key: "A", text: "Quick Loan has priority over Lux because Quick filed a financing statement and Lux did not." },
    { key: "B", text: "Lux has priority over Quick Loan, but Ivy takes the system free of Lux's security interest." },
    { key: "C", text: "Lux has priority over Quick Loan, and Ivy takes the system subject to Lux's security interest." },
    { key: "D", text: "Ivy takes the system free of both security interests, and Quick Loan has priority over Lux as to the sale proceeds." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Lux's interest is a PMSI in consumer goods, which is perfected automatically upon attachment on March 1 under §9-309(1). A perfected interest on March 1 has priority over Quick's interest perfected by filing on April 2 (first to file or perfect, §9-322).",
    B: "Correct. Lux's PMSI in consumer goods was automatically perfected on March 1 under §9-309(1) and therefore has priority over Quick's interest perfected by filing on April 2. Ivy, however, is a consumer buyer from a consumer who gave value, had no knowledge of the lien, bought for household use, and bought before Lux filed any financing statement, so under §9-320(b) she takes free of Lux's interest. Lux's failure to file, although unnecessary for perfection, is what exposes it to the consumer-buyer exception.",
    C: "Incorrect. Lux does have priority over Quick, but Ivy takes free of Lux's interest under the §9-320(b) consumer-to-consumer rule because Lux never filed. Filing would have protected Lux against Ivy.",
    D: "Incorrect. Quick filed on April 2, before Ivy's May 1 purchase, so the §9-320(b) exception does not protect Ivy against Quick. And Lux's earlier automatic perfection gives it priority over Quick in the collateral and proceeds."
  },
  tags: ["UCC Article 9","PMSI","consumer goods","§9-320(b)","priority"]
},
{
  id: "REG-027", area: "II", areaName: "Business Law",
  topic: "Debtor-creditor relationships — Suretyship, secured transactions and bankruptcy distributions", skill: "Application", difficulty: 2,
  stem: "Fenwick Bank has a perfected security interest, by a financing statement filed January 10, covering all of Molto Motors' present and after-acquired inventory. On June 1, Molto sold a car from inventory to Sato, a customer who paid cash and knew nothing about the bank's lien. On June 15, Molto sold another car to Rand, a used-car dealer who knew of the bank's security interest, in the ordinary course of Molto's business. Which buyer takes the car free of Fenwick's security interest?",
  reference: "UCC §9-320(a): a buyer in ordinary course of business (BIOC) takes free of a security interest created by the seller, even if the interest is perfected and the buyer knows of its existence, unless the buyer knows the sale violates the security agreement. A BIOC is a person who buys goods in good faith, without knowledge that the sale violates another's rights, in the ordinary course from a person in the business of selling goods of that kind.",
  options: [
    { key: "A", text: "Sato only" },
    { key: "B", text: "Rand only" },
    { key: "C", text: "Both Sato and Rand" },
    { key: "D", text: "Neither Sato nor Rand" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Rand's knowledge that Fenwick has a security interest does not disqualify him. §9-320(a) protects a buyer who knows of the security interest's existence; only knowledge that the sale violates the security agreement defeats BIOC status.",
    B: "Incorrect. Sato clearly qualifies as a buyer in ordinary course: a good-faith cash purchaser of inventory from a dealer in that type of goods. There is no reason Sato would take subject to the lien.",
    C: "Correct. Both bought cars from a dealer in the ordinary course of the dealer's business, in good faith, without knowledge that the sales violated Fenwick's rights. Under §9-320(a) each takes free of the inventory lien; Fenwick's interest attaches instead to the identifiable proceeds under §9-315. A dealer buying from another dealer can be a BIOC if the sale is in the seller's ordinary course.",
    D: "Incorrect. This ignores the BIOC rule entirely. A perfected security interest in inventory is designed to follow proceeds, not to encumber goods in the hands of ordinary-course buyers; otherwise dealers could not sell their inventory."
  },
  tags: ["UCC §9-320(a)","buyer in ordinary course","inventory","priority"]
},
{
  id: "REG-028", area: "II", areaName: "Business Law",
  topic: "Debtor-creditor relationships — Suretyship, secured transactions and bankruptcy distributions", skill: "Application", difficulty: 2,
  stem: "Verity Corp. is in Chapter 7 liquidation. After paying secured creditors from their collateral, the trustee holds $90,000 of unencumbered cash. Allowed claims are: trustee and attorney administrative expenses $20,000; wages earned by employees within the 180 days before the petition, $12,000 owed to each of three employees; unpaid federal income taxes for the prior year $25,000; and general unsecured trade creditors $200,000. What amount will the general unsecured creditors receive?",
  reference: "Bankruptcy Code §507 priority (simplified, in order): (1) domestic support obligations; (2) administrative expenses; (3) involuntary-case gap claims; (4) wages, salaries, commissions earned within 180 days before the petition, up to $17,150 per individual (figure as adjusted April 2025); (5) employee benefit plan contributions; (6) grain farmers/fishermen; (7) consumer deposits; (8) certain taxes; (9) FDIC commitments; (10) DUI injury claims. Each class is paid in full before the next receives anything; general unsecured creditors share pro rata in any remainder.",
  options: [
    { key: "A", text: "$0" },
    { key: "B", text: "$34,000" },
    { key: "C", text: "$29,000" },
    { key: "D", text: "$9,000" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. The priority claims do not exhaust the estate. Administrative $20,000 + wages $36,000 + taxes $25,000 = $81,000, leaving $9,000 for general unsecured creditors.",
    B: "Incorrect. $34,000 is the balance before paying the $25,000 tax claim. Unsecured tax claims for income taxes for a tax year ending within 3 years of the petition are eighth-priority claims and must be paid before general unsecured creditors.",
    C: "Incorrect. $29,000 results from treating only one employee's $12,000 wage claim as a priority claim. The cap is per individual, so all three employees' claims are entitled to fourth priority.",
    D: "Correct. Distribution in order: administrative expenses $20,000 (balance $70,000); wage claims 3 x $12,000 = $36,000, each below the $17,150 per-employee cap so fully priority (balance $34,000); income taxes $25,000 (balance $9,000). The $9,000 remaining goes pro rata to the $200,000 of general unsecured claims (4.5 cents on the dollar)."
  },
  tags: ["bankruptcy","Chapter 7","§507 priorities","distribution"]
},
{
  id: "REG-029", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Bankruptcy (types, discharge and avoidance)", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Owens, an individual, received a discharge in a Chapter 7 case. Which of the following debts was discharged?",
  reference: "",
  options: [
    { key: "A", text: "$18,000 of past-due child support owed to his former spouse." },
    { key: "B", text: "A $9,000 judgment for injuries caused when Owens drove while intoxicated." },
    { key: "C", text: "A $40,000 debt owed to a supplier that Owens did not list in his schedules, where the supplier had no notice of the case in time to file a claim." },
    { key: "D", text: "A $15,000 unsecured personal loan from a bank obtained without any misrepresentation." }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. Domestic support obligations (alimony, maintenance and child support) are nondischargeable under Bankruptcy Code §523(a)(5) in every chapter.",
    B: "Incorrect. Debts for death or personal injury caused by the debtor's operation of a motor vehicle while intoxicated are nondischargeable under §523(a)(9).",
    C: "Incorrect. Debts neither listed nor scheduled in time for the creditor to file a timely proof of claim, where the creditor had no notice or actual knowledge of the case, are excepted from discharge under §523(a)(3).",
    D: "Correct. Ordinary unsecured consumer or business loans are precisely the type of debt Chapter 7 discharges. Only debts obtained by fraud or false financial statements (§523(a)(2)) are excepted, and the facts state there was no misrepresentation."
  },
  tags: ["bankruptcy","Chapter 7","§523 nondischargeable debts","discharge"]
},
{
  id: "REG-030", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Bankruptcy (types, discharge and avoidance)", skill: "Analysis", difficulty: 3,
  stem: "Cobb Inc. filed a voluntary Chapter 7 petition on September 1. While insolvent, Cobb made the following payments: (1) August 1, $25,000 to Tate Supply on an unsecured invoice that had been overdue for four months; (2) June 15, $40,000 repayment of an unsecured loan to Cobb's president, which had been due the previous year; (3) August 20, $8,000 COD payment to a vendor for goods delivered the same day; (4) August 10, $6,000 monthly rent paid to its landlord on the due date, consistent with prior practice. Which payments may the trustee avoid as preferential transfers?",
  reference: "Bankruptcy Code §547(b): the trustee may avoid a transfer of the debtor's property to or for the benefit of a creditor, for or on account of an antecedent debt, made while the debtor was insolvent, within 90 days before the petition (one year for insiders), that enables the creditor to receive more than it would in a Chapter 7 liquidation. Defenses (§547(c)) include contemporaneous exchange for new value and payments made in the ordinary course of business.",
  options: [
    { key: "A", text: "Payments 1 and 2 only" },
    { key: "B", text: "Payments 1, 2 and 4 only" },
    { key: "C", text: "Payment 1 only" },
    { key: "D", text: "Payments 1, 2, 3 and 4" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Payment 1 (within 90 days, on an antecedent overdue debt, while insolvent, allowing Tate to receive more than in liquidation) is a preference; a four-months-overdue invoice paid late is outside the ordinary-course defense. Payment 2 was made to the president, an insider, within one year of the petition on an antecedent debt and is avoidable. Payment 3 is protected as a contemporaneous exchange for new value. Payment 4 is a routine rent payment made on time in the ordinary course of business under §547(c)(2).",
    B: "Incorrect. Regular monthly rent paid when due, consistent with past practice, is a payment made in the ordinary course of business and financial affairs of the debtor and creditor, and is shielded by §547(c)(2).",
    C: "Incorrect. The one-year look-back for insiders under §547(b)(4)(B) captures the June 15 repayment to the president. An officer of a corporate debtor is an insider under §101(31).",
    D: "Incorrect. Payment 3 was a substantially contemporaneous exchange for new value (COD), expressly excepted by §547(c)(1); the vendor received nothing on account of an antecedent debt. Payment 4 is protected by the ordinary-course exception."
  },
  tags: ["bankruptcy","§547 preferences","insider","ordinary course defense"]
},
{
  id: "REG-031", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Employment taxes and worker classification", skill: "Application", difficulty: 1,
  stem: "Pinnacle Design engaged Rosa to produce graphic designs. Rosa works from home using her own equipment, sets her own hours, is paid a flat fee per project, works for several other clients, and may hire assistants at her own expense. Pinnacle reviews only the final deliverable. Which of the following statements is correct?",
  reference: "",
  options: [
    { key: "A", text: "Rosa is an employee because Pinnacle has the right to reject her final work product." },
    { key: "B", text: "Rosa is an independent contractor; Pinnacle must file Form 1099-NEC if it pays her $600 or more in the year but does not withhold income tax or FICA." },
    { key: "C", text: "Rosa is an independent contractor; Pinnacle must withhold and pay FICA taxes on her fees but not federal income tax." },
    { key: "D", text: "Rosa is an employee because she performs services that are part of Pinnacle's regular business." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Under the common-law control test (behavioral control, financial control, and relationship of the parties), the right to accept or reject a finished product does not establish the right to control the details of how the work is performed. Rosa controls her own methods, hours and tools.",
    B: "Correct. Rosa exhibits the hallmarks of an independent contractor: she controls how and when the work is done, bears her own expenses and risk of profit or loss, serves multiple clients and can delegate. Payments of $600 or more to a nonemployee are reported on Form 1099-NEC, and the payer does not withhold income tax or FICA; Rosa pays self-employment tax herself. (Note: the OBBBA raises the 1099 threshold to $2,000 for payments made after 2025.)",
    C: "Incorrect. FICA withholding applies only to wages paid to employees. An independent contractor pays self-employment tax under §1401 on her own net earnings; the payer has no FICA obligation.",
    D: "Incorrect. Whether the work is integral to the business is only one factor and is not determinative. The weight of the control and financial factors points clearly to independent contractor status."
  },
  tags: ["worker classification","independent contractor","Form 1099-NEC","FICA"]
},
{
  id: "REG-032", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Employment taxes and worker classification", skill: "Application", difficulty: 1,
  stem: "During 2025 Bolt Corp. paid wages to three employees: $5,000 to Ana, $30,000 to Ben, and $190,000 to Cara. Bolt paid all state unemployment contributions on time and is entitled to the full credit. What is Bolt's 2025 federal unemployment (FUTA) tax liability?",
  reference: "FUTA (Tax year 2025): 6.0% on the first $7,000 of wages paid to each employee per year; credit of up to 5.4% for timely state unemployment contributions, for a net rate of 0.6%.",
  options: [
    { key: "A", text: "$114" },
    { key: "B", text: "$126" },
    { key: "C", text: "$1,140" },
    { key: "D", text: "$1,350" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. FUTA wages are capped at $7,000 per employee: Ana $5,000 + Ben $7,000 + Cara $7,000 = $19,000. Net rate after the full 5.4% credit is 0.6%: $19,000 x 0.6% = $114.",
    B: "Incorrect. $126 = 3 x $7,000 x 0.6%, which applies the $7,000 wage base to Ana even though she earned only $5,000. The base is the lesser of actual wages or $7,000.",
    C: "Incorrect. $1,140 = $19,000 x 6.0%, ignoring the 5.4% credit for timely state unemployment contributions. The facts state Bolt qualifies for the full credit.",
    D: "Incorrect. $1,350 = $225,000 x 0.6%, applying the net rate to total wages with no per-employee wage base. Unlike Medicare tax, FUTA applies only to the first $7,000 per employee."
  },
  tags: ["FUTA","employment tax","wage base"]
},
{
  id: "REG-033", area: "II", areaName: "Business Law",
  topic: "Business structure — Rights, duties, obligations and authority of owners and management", skill: "Application", difficulty: 2,
  stem: "Ito, Jain and Kim operate an accounting practice as a general partnership with no written agreement. Jain, while performing an audit, negligently misses a material misstatement and the client sues the partnership and each partner. The partnership has $100,000 of assets and the judgment is $400,000. Which of the following statements is correct?",
  reference: "",
  options: [
    { key: "A", text: "Only Jain is personally liable for the $300,000 excess because he committed the negligent act." },
    { key: "B", text: "Ito, Jain and Kim are each jointly and severally liable for the full judgment; the plaintiff may collect the unsatisfied $300,000 from any one of them, who then has a right of contribution from the others." },
    { key: "C", text: "Ito, Jain and Kim are each liable for one-third of the $300,000 excess, and the plaintiff must sue each separately." },
    { key: "D", text: "None of the partners is personally liable because the client contracted only with the partnership entity." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. This describes the result in a limited liability partnership (LLP), where innocent partners are shielded from liability for a co-partner's malpractice. The firm here is a general partnership, so all partners are personally liable for partnership obligations, including torts committed by a partner in the ordinary course of business.",
    B: "Correct. Under the Revised Uniform Partnership Act (RUPA §306), partners are jointly and severally liable for all partnership obligations, including torts. Under RUPA §307 the plaintiff generally must first exhaust partnership assets, after which it may collect the balance from any partner. A partner who pays more than his share has a right of contribution from the others, and Ito and Kim may seek indemnification from Jain as the wrongdoer.",
    C: "Incorrect. Liability is joint and several, not several by shares. The plaintiff may recover the entire unpaid balance from any one partner; the internal allocation among partners is a matter of contribution, not a limit on the plaintiff's recovery.",
    D: "Incorrect. A general partnership offers no liability shield. Absent registration as an LLP or formation of an LLC or corporation, each partner is personally liable for partnership debts."
  },
  tags: ["general partnership","RUPA","joint and several liability","LLP"]
},
{
  id: "REG-034", area: "II", areaName: "Business Law",
  topic: "Business structure — Selection, formation, operation and termination", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Which of the following statements regarding a limited liability company (LLC) formed under a typical state LLC act is correct?",
  reference: "",
  options: [
    { key: "A", text: "An LLC must have at least two members and must be managed by its members." },
    { key: "B", text: "A member who actively participates in management becomes personally liable for LLC obligations, similar to a general partner." },
    { key: "C", text: "An LLC is formed by filing articles of organization with the state, and members are generally not personally liable for LLC debts solely by reason of being a member or manager." },
    { key: "D", text: "An LLC must be taxed as a corporation for federal income tax purposes unless it elects partnership treatment." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Single-member LLCs are permitted in every state, and an LLC may be either member-managed (the default under most statutes) or manager-managed as specified in its articles or operating agreement.",
    B: "Incorrect. Unlike a limited partnership, where a limited partner historically risked liability by participating in control, LLC members retain limited liability regardless of their participation in management. Liability arises only through personal guarantees, personal torts or veil-piercing.",
    C: "Correct. An LLC comes into existence when articles (or a certificate) of organization are filed with the secretary of state. Members and managers enjoy limited liability for the entity's debts, comparable to corporate shareholders, while the operating agreement governs internal affairs.",
    D: "Incorrect. Under the check-the-box regulations (Reg. §301.7701-3), a domestic multi-member LLC is taxed as a partnership by default and a single-member LLC is disregarded; either may elect to be taxed as a corporation on Form 8832."
  },
  tags: ["LLC","limited liability","articles of organization","check-the-box"]
},
{
  id: "REG-035", area: "II", areaName: "Business Law",
  topic: "Business structure — Rights, duties, obligations and authority of owners and management", skill: "Application", difficulty: 2,
  stem: "The board of directors of Zenith Corp. approved the acquisition of a competitor after a two-hour meeting at which it received a summary prepared by management and a fairness opinion from an investment bank. The acquisition proved disastrous and shareholders brought a derivative suit alleging the directors breached their duty of care. Two of the five directors owned stock in the target and did not disclose it. Which of the following statements is most accurate?",
  reference: "",
  options: [
    { key: "A", text: "All five directors are liable because the business judgment rule does not protect decisions that turn out badly." },
    { key: "B", text: "The three disinterested directors are protected by the business judgment rule if they acted in good faith, on an informed basis, and in the honest belief that the decision was in the corporation's best interest; the two interested directors must show the transaction was fair to the corporation." },
    { key: "C", text: "No director is liable because a fairness opinion from an investment bank conclusively establishes that the directors were adequately informed." },
    { key: "D", text: "The derivative suit must be dismissed because any recovery would belong to the shareholders individually rather than the corporation." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The business judgment rule protects directors from liability for honest mistakes of judgment; a bad outcome alone does not establish a breach of the duty of care. Courts do not second-guess informed, good-faith decisions.",
    B: "Correct. Directors who are disinterested and who make an informed decision in good faith (including reasonable reliance on reports of officers and experts under MBCA §8.30) receive the presumption of the business judgment rule. Directors with an undisclosed conflict lose that presumption and, under MBCA §8.61 and case law on the duty of loyalty, bear the burden of proving the transaction was entirely fair to the corporation.",
    C: "Incorrect. Reliance on experts is permitted if reasonable, but it is not conclusive. Whether a two-hour meeting reviewing a management summary satisfied the duty of care is a fact question, and reliance never cures a director's undisclosed personal interest.",
    D: "Incorrect. A derivative suit is brought by shareholders on behalf of the corporation, and any recovery goes to the corporation. That is precisely why the suit is derivative rather than direct; it is not a ground for dismissal."
  },
  tags: ["corporations","business judgment rule","duty of loyalty","derivative suit"]
},
{
  id: "REG-036", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets", skill: "Application", difficulty: 2,
  stem: "In 2023, Mona received shares of stock as a gift from her uncle. The uncle's adjusted basis was $50,000 and the fair market value on the date of the gift was $35,000. No gift tax was paid. In 2025, Mona sold the shares. What is Mona's recognized gain or loss if she sold the shares for (1) $60,000, (2) $30,000, or (3) $42,000, respectively?",
  reference: "IRC §1015 dual-basis rule for gifts: the donee's basis for gain is the donor's adjusted basis; if FMV at the date of gift is less than the donor's basis, the donee's basis for loss is the FMV at the date of gift. If the sale price falls between the two, no gain or loss is recognized.",
  options: [
    { key: "A", text: "(1) $10,000 gain; (2) $5,000 loss; (3) no gain or loss" },
    { key: "B", text: "(1) $25,000 gain; (2) $5,000 loss; (3) $7,000 gain" },
    { key: "C", text: "(1) $10,000 gain; (2) $20,000 loss; (3) $8,000 loss" },
    { key: "D", text: "(1) $25,000 gain; (2) $20,000 loss; (3) $7,000 gain" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Gain basis = donor's basis $50,000; loss basis = FMV at gift $35,000. (1) $60,000 - $50,000 = $10,000 gain. (2) $30,000 - $35,000 = $5,000 loss. (3) $42,000 is between $35,000 and $50,000: using gain basis gives a loss and loss basis gives a gain, so neither is recognized. The holding period tacks from the uncle for (1) and (2) but starts on the gift date when the FMV basis is used.",
    B: "Incorrect. This uses the $35,000 FMV as basis in all cases. FMV is used only to compute a loss; for a gain, the donee takes the donor's carryover basis of $50,000.",
    C: "Incorrect. This uses the $50,000 carryover basis for all three sales. When FMV at the date of gift is below the donor's basis, the loss basis is limited to FMV; the built-in loss that accrued in the donor's hands cannot be transferred by gift.",
    D: "Incorrect. This mixes the wrong bases: FMV for the gain sale and carryover basis for the loss sale, the exact reverse of §1015. It also ignores the no-gain-no-loss middle range."
  },
  tags: ["§1015","gift basis","dual basis","holding period"]
},
{
  id: "REG-037", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Dev inherited land from his mother, who died on February 3, 2025. The mother had purchased the land in 2024 for $200,000. The land was worth $260,000 on the date of death and $250,000 six months later. The executor did not elect the alternate valuation date. Dev sold the land on August 1, 2025 for $275,000. What is the amount and character of Dev's gain?",
  reference: "IRC §1014: the basis of property acquired from a decedent is generally its FMV on the date of death (or on the alternate valuation date, if elected). IRC §1223(9): property acquired from a decedent is deemed held for more than one year.",
  options: [
    { key: "A", text: "$75,000 short-term capital gain" },
    { key: "B", text: "$15,000 short-term capital gain" },
    { key: "C", text: "$15,000 long-term capital gain" },
    { key: "D", text: "$25,000 long-term capital gain" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. This uses the mother's original cost ($200,000) as basis, which is the carryover rule for gifts, not inheritances. Property acquired from a decedent receives a stepped-up (or stepped-down) basis under §1014.",
    B: "Incorrect. The $15,000 gain is right but the character is wrong. §1223(9) automatically treats inherited property as held for more than one year, so the gain is long-term even though Dev owned the land for only six months.",
    C: "Correct. Basis = FMV at date of death $260,000 (alternate valuation was not elected). Gain = $275,000 - $260,000 = $15,000. Inherited property is deemed to have a long-term holding period regardless of the actual time held by the decedent or heir.",
    D: "Incorrect. $25,000 uses the alternate valuation date value ($250,000). The alternate valuation date under §2032 applies only if the executor elects it, and it can be elected only if it reduces both the gross estate and the estate tax."
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
  stem: "In 2025 Ember LLC, a calendar-year business, purchased and placed in service $4,300,000 of new 7-year MACRS equipment (its only 2025 acquisition, acquired after January 19, 2025). Ember's taxable income from the active conduct of the business before any §179 deduction is $3,000,000. Ember elects the maximum §179 deduction and elects out of bonus depreciation. What is Ember's 2025 §179 deduction?",
  reference: "IRC §179 (Tax year 2025, as amended by the One Big Beautiful Bill Act): maximum deduction $2,500,000; reduced dollar-for-dollar by the cost of §179 property placed in service during the year in excess of $4,000,000. The deduction is further limited to taxable income from the active conduct of all trades or businesses; any excess carries forward.\n\nBonus depreciation (§168(k)): 100% for qualified property acquired and placed in service after January 19, 2025.",
  options: [
    { key: "A", text: "$2,500,000" },
    { key: "B", text: "$2,200,000" },
    { key: "C", text: "$0, because total purchases exceed $4,000,000" },
    { key: "D", text: "$3,000,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The $2,500,000 maximum must be reduced because Ember placed more than $4,000,000 of §179 property in service. Reduction = $4,300,000 - $4,000,000 = $300,000.",
    B: "Correct. Dollar limit = $2,500,000 - ($4,300,000 - $4,000,000) = $2,200,000. The taxable income limit ($3,000,000) is higher, so it does not further restrict the deduction. The remaining $2,100,000 of cost is depreciated under regular MACRS since bonus depreciation was elected out.",
    C: "Incorrect. The deduction phases out completely only when purchases reach $6,500,000 ($4,000,000 threshold + $2,500,000 limit). At $4,300,000 the reduction is only $300,000.",
    D: "Incorrect. Taxable income is a ceiling on the §179 deduction, not the deduction itself. The deduction is the lesser of the dollar limit after phase-out ($2,200,000) and business taxable income ($3,000,000)."
  },
  tags: ["§179","OBBBA","phase-out","bonus depreciation"]
},
{
  id: "REG-045", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Cost recovery — Depreciation (MACRS, bonus, §179) and amortization", skill: "Application", difficulty: 2,
  stem: "On April 10, 2025, Vale Corp. (calendar year) purchased the assets of a competitor for a lump sum. The purchase price allocated to goodwill was $360,000 and to a covenant not to compete (3-year term) was $90,000. Vale also purchased a used office desk for $6,000 on the same day (its only tangible asset addition in 2025; Vale did not elect §179 and elected out of bonus depreciation). What is Vale's total 2025 deduction for amortization and depreciation on these assets?",
  reference: "IRC §197: acquired goodwill, going-concern value, and covenants not to compete entered into in connection with the acquisition of a business are amortized straight-line over 15 years, beginning with the month of acquisition, regardless of the covenant's legal term.\n\nMACRS: office furniture is 7-year property. Half-year convention first-year rate (200% DB): 14.29%.",
  options: [
    { key: "A", text: "$22,500 amortization and $857 depreciation" },
    { key: "B", text: "$30,000 amortization and $857 depreciation" },
    { key: "C", text: "$40,500 amortization and $857 depreciation" },
    { key: "D", text: "$22,500 amortization and $429 depreciation" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Both intangibles are §197 intangibles amortized over 180 months: ($360,000 + $90,000) / 180 = $2,500 per month. April through December is 9 months: 9 x $2,500 = $22,500. Depreciation on the desk: $6,000 x 14.29% = $857 (half-year convention; the mid-quarter convention does not apply because the desk was not placed in service in the last quarter).",
    B: "Incorrect. $30,000 is a full year of amortization ($450,000 / 15). §197 amortization begins in the month the intangible is acquired, so only 9 months are allowed in 2025.",
    C: "Incorrect. $40,500 amortizes the covenant over its 3-year contractual life ($90,000 / 36 x 9 = $22,500) plus 9 months of goodwill ($18,000). A covenant not to compete acquired with a business is a §197 intangible amortized over 15 years regardless of its stated term.",
    D: "Incorrect. The amortization is right, but $429 halves the MACRS table amount. The half-year convention is already built into the 14.29% first-year table rate; it should not be applied a second time."
  },
  tags: ["§197","amortization","MACRS","covenant not to compete"]
},
{
  id: "REG-046", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 2,
  stem: "Elena, a cash-basis calendar-year taxpayer, had the following items in 2025: a $5,000 year-end bonus check dated December 29, 2025 that she picked up from her employer on January 3, 2026 because she was on vacation (the check was available at the office on December 29); $8,000 of alimony received under a divorce decree executed in 2017; $3,000 of unemployment compensation; and a $2,000 prize won in a radio contest, paid in gift cards. What amount must Elena include in 2025 gross income?",
  reference: "Alimony under agreements executed before 2019 remains includible by the recipient; alimony under post-2018 agreements is neither deductible nor includible (§71 repealed by TCJA). Unemployment compensation is fully taxable (§85). Prizes and awards are taxable at FMV (§74). Constructive receipt: income is received when made available without substantial restriction (Reg. §1.451-2).",
  options: [
    { key: "A", text: "$10,000" },
    { key: "B", text: "$13,000" },
    { key: "C", text: "$16,000" },
    { key: "D", text: "$18,000" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. $10,000 includes only the alimony and prize, omitting the unemployment compensation (fully taxable under §85) and the bonus (constructively received in 2025).",
    B: "Incorrect. $13,000 omits the bonus. Under the constructive receipt doctrine, the check was made available to Elena on December 29, 2025 without restriction; her decision not to pick it up until January does not defer the income.",
    C: "Incorrect. $16,000 includes the bonus, alimony and unemployment but omits the $2,000 prize. Prizes and awards are gross income under §74 at fair market value regardless of the form (gift cards) in which they are paid.",
    D: "Correct. Bonus $5,000 (constructively received December 29, 2025) + alimony $8,000 (pre-2019 decree, still includible) + unemployment compensation $3,000 (§85) + prize $2,000 (§74) = $18,000."
  },
  tags: ["§61","constructive receipt","alimony","§74 prizes","§85"]
},
{
  id: "REG-047", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 1,
  stem: "During 2025 Kofi received: $50,000 of life insurance proceeds on his father's death; a $12,000 scholarship, of which $9,000 was used for tuition and required fees and $3,000 for room and board; $1,500 of interest on State of Ohio general obligation bonds; $2,200 of interest on U.S. Treasury notes; and a $10,000 cash gift from his aunt. What amount must Kofi include in gross income?",
  reference: "§101(a): life insurance proceeds paid by reason of death are excluded. §117: qualified scholarships are excluded only to the extent used for tuition, fees, books and required supplies by a degree candidate; amounts for room and board are taxable. §103: interest on state and local bonds is excluded; interest on federal obligations is taxable. §102: gifts are excluded.",
  options: [
    { key: "A", text: "$5,200" },
    { key: "B", text: "$3,700" },
    { key: "C", text: "$2,200" },
    { key: "D", text: "$6,700" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Includible: room-and-board portion of the scholarship $3,000 (§117 excludes only qualified tuition and related expenses) + Treasury note interest $2,200 (federal obligations are taxable) = $5,200. Excluded: life insurance $50,000 (§101), state bond interest $1,500 (§103), gift $10,000 (§102).",
    B: "Incorrect. $3,700 = $2,200 + $1,500, treating the state bond interest as taxable and the room and board as excluded. The exclusions are reversed: municipal bond interest is excluded under §103, while room and board is taxable under §117.",
    C: "Incorrect. $2,200 excludes the entire scholarship. §117(b) limits the exclusion to qualified tuition and related expenses; the $3,000 used for room and board is includible.",
    D: "Incorrect. $6,700 adds the state bond interest to the correct answer. Interest on obligations of a state or political subdivision is excluded from gross income under §103(a)."
  },
  tags: ["§101","§117","§103","§102","exclusions"]
},
{
  id: "REG-048", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 2,
  stem: "Vera's employer provided the following benefits in 2025: employer-paid health insurance premiums of $9,000; group-term life insurance coverage of $150,000 (employer cost $450); $2,400 of employer contributions to Vera's health savings account (Vera has family HDHP coverage and made no contributions herself); and an annual $300 holiday gift card. What amount is includible in Vera's 2025 gross income?",
  reference: "Tax year 2025. §106: employer health coverage and HSA contributions (within the limit, $8,550 family) are excluded. §79: cost of group-term life coverage above $50,000 is includible using the IRS uniform premium table; assume the table cost for Vera's age is $0.15 per $1,000 of coverage per month. §132(e): de minimis fringes are excluded, but cash and cash-equivalent gift cards are never de minimis.",
  options: [
    { key: "A", text: "$270" },
    { key: "B", text: "$180" },
    { key: "C", text: "$480" },
    { key: "D", text: "$750" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $270 = 12 x $0.15 x 150, computing the imputed cost on the entire $150,000 of coverage and omitting the gift card. Only coverage in excess of $50,000 is taxed under §79.",
    B: "Incorrect. $180 is the correct group-term life inclusion (100 x $0.15 x 12) but omits the $300 gift card. Gift cards are cash equivalents and are includible in wages regardless of amount.",
    C: "Correct. Group-term life: excess coverage $150,000 - $50,000 = $100,000; table cost = 100 x $0.15 x 12 months = $180. Gift card $300 is a cash equivalent and taxable. Total = $480. Health premiums and the $2,400 HSA contribution are excluded under §106.",
    D: "Incorrect. $750 = $450 employer cost + $300. The amount includible for group-term life is computed from the IRS uniform premium table on coverage above $50,000, not from the employer's actual premium cost."
  },
  tags: ["§79","§106","§132","fringe benefits","HSA"]
},
{
  id: "REG-049", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 3,
  stem: "Hal and Ida, married filing jointly, received $24,000 of Social Security benefits in 2025. Their other income consisted of $20,000 of taxable pension income, $10,000 of wages and $6,000 of tax-exempt municipal bond interest. What amount of Social Security benefits is includible in gross income?",
  reference: "IRC §86 (MFJ): provisional income = AGI (before Social Security) + tax-exempt interest + 50% of benefits. If provisional income is between $32,000 and $44,000, include the lesser of 50% of benefits or 50% of (provisional income - $32,000). If provisional income exceeds $44,000, include the lesser of (a) 85% of benefits, or (b) 85% of (provisional income - $44,000) plus the lesser of $6,000 or the amount computed under the first tier.",
  options: [
    { key: "A", text: "$12,000" },
    { key: "B", text: "$20,400" },
    { key: "C", text: "$5,000" },
    { key: "D", text: "$9,400" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. $12,000 is 50% of benefits, the ceiling under the first tier. It ignores the formula: the includible amount is the lesser of the ceiling and the computed amount, and here the computed amount is lower.",
    B: "Incorrect. $20,400 is 85% of benefits, the absolute ceiling under §86. The formula amount ($9,400) is less than the ceiling and therefore governs.",
    C: "Incorrect. $5,000 results from omitting the tax-exempt interest, giving provisional income of $42,000 and a first-tier inclusion of 50% x ($42,000 - $32,000) = $5,000. Tax-exempt interest must be added back in computing provisional income under §86(b)(2)(B).",
    D: "Correct. Provisional income = $20,000 + $10,000 + $6,000 + 50% x $24,000 = $48,000, which exceeds $44,000. Second tier: 85% x ($48,000 - $44,000) = $3,400, plus the lesser of $6,000 or the first-tier amount (lesser of 50% x $24,000 = $12,000 or 50% x ($48,000 - $32,000) = $8,000, i.e., $8,000) = $6,000; total $9,400. Compared with the 85% ceiling of $20,400, the lesser amount, $9,400, is includible."
  },
  tags: ["§86","Social Security benefits","provisional income"]
},
{
  id: "REG-050", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  stem: "Jun, age 40, single, is a self-employed consultant with 2025 net profit from self-employment of $80,000. During 2025 he paid $4,000 of qualified student loan interest, contributed $4,300 to his health savings account (self-only HDHP coverage), paid $9,000 for self-employed health insurance premiums, and paid $11,304 of self-employment tax. He had no other income. What is Jun's total deduction for adjustments to arrive at AGI?",
  reference: "Tax year 2025. Student loan interest deduction (§221): maximum $2,500, phased out for single MAGI $85,000-$100,000 (assume no phase-out applies). HSA deduction (§223): limit $4,300 self-only. Self-employed health insurance (§162(l)): 100% of premiums, limited to net SE income less one-half SE tax and retirement contributions. One-half of SE tax (§164(f)) is deductible for AGI.",
  options: [
    { key: "A", text: "$21,452" },
    { key: "B", text: "$28,604" },
    { key: "C", text: "$19,952" },
    { key: "D", text: "$22,952" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Student loan interest is capped at $2,500 (not the $4,000 paid). HSA $4,300. Self-employed health insurance $9,000 (well within the earned income limit of $80,000 - $5,652). One-half of SE tax = $11,304 / 2 = $5,652. Total = $2,500 + $4,300 + $9,000 + $5,652 = $21,452.",
    B: "Incorrect. $28,604 deducts the full $4,000 of student loan interest and the full $11,304 of self-employment tax. Only $2,500 of student loan interest and one-half of SE tax are deductible for AGI.",
    C: "Incorrect. $19,952 omits the student loan interest entirely (using $0 instead of $2,500) or treats the student loan interest as an itemized deduction. §221 provides an above-the-line deduction of up to $2,500.",
    D: "Incorrect. $22,952 deducts the full $4,000 of student loan interest. The §221 deduction is limited to $2,500 per year regardless of the amount paid."
  },
  tags: ["§221","§223","§162(l)","§164(f)","adjustments to AGI"]
},
{
  id: "REG-051", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 1,
  stem: "Nadia, age 45 and single, is an active participant in her employer's 401(k) plan. Her 2025 modified AGI is $84,000. She contributed $7,000 to a traditional IRA on March 1, 2026, designating it for 2025. What amount may Nadia deduct for the IRA contribution on her 2025 return?",
  reference: "Tax year 2025. Traditional IRA contribution limit: $7,000 ($8,000 if age 50 or older). For an active participant filing single, the deduction phases out ratably over MAGI $79,000-$89,000. Deductible amount = limit x (phase-out ceiling - MAGI) / phase-out range, rounded up to the nearest $10, with a $200 minimum if any deduction is allowed. Contributions may be made until the return due date (April 15, 2026) without extensions.",
  options: [
    { key: "A", text: "$7,000" },
    { key: "B", text: "$0, because the contribution was made after December 31, 2025" },
    { key: "C", text: "$3,500" },
    { key: "D", text: "$4,200" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. A full deduction is available to an active participant only when MAGI is at or below $79,000 (single). At $84,000 Nadia is halfway through the phase-out range.",
    B: "Incorrect. Under §219(f)(3) an IRA contribution made by the due date of the return (April 15, 2026), excluding extensions, may be treated as made for the prior year. The March 1, 2026 contribution is timely for 2025.",
    C: "Correct. Nadia is an active participant with MAGI in the $79,000-$89,000 phase-out range. Reduction fraction = ($84,000 - $79,000) / $10,000 = 50%. Deductible = $7,000 x (1 - 50%) = $3,500. The remaining $3,500 is a nondeductible contribution (tracked on Form 8606) or could be recharacterized as a Roth contribution.",
    D: "Incorrect. $4,200 = $7,000 x 60%, which would correspond to MAGI of $83,000 or uses the wrong phase-out range. With the $10,000 range starting at $79,000, MAGI of $84,000 eliminates exactly half of the deduction."
  },
  tags: ["§219","IRA deduction","active participant","phase-out"]
},
{
  id: "REG-052", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  stem: "Walt (age 68) and Rhea (age 63) are married and file a joint 2025 return. Their modified AGI is $160,000. They do not itemize. What is the total of their standard deduction and the additional senior deduction enacted by the One Big Beautiful Bill Act?",
  reference: "Tax year 2025. Basic standard deduction: single $15,750; MFJ $31,500; HOH $23,625. Additional standard deduction for age 65+ or blindness: $1,600 per qualifying spouse (MFJ), $2,000 for single/HOH. Additional senior deduction under §151(d)(5) as added by the One Big Beautiful Bill Act (tax years 2025-2028): $6,000 per individual age 65 or older, available whether or not the taxpayer itemizes; phased out at 6% of MAGI in excess of $75,000 (single) / $150,000 (MFJ).",
  options: [
    { key: "A", text: "$44,700" },
    { key: "B", text: "$38,500" },
    { key: "C", text: "$39,100" },
    { key: "D", text: "$40,100" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $44,700 = $31,500 + $1,600 + $6,000 x 2 - $600, claiming the $6,000 senior deduction for both spouses. Rhea is 63 and does not qualify; the senior deduction applies per individual who has attained age 65.",
    B: "Correct. Basic standard deduction $31,500 + additional $1,600 for Walt (age 65 or older) = $33,100. Senior deduction for Walt: $6,000 - 6% x ($160,000 - $150,000) = $6,000 - $600 = $5,400. Total = $33,100 + $5,400 = $38,500. Rhea, age 63, qualifies for neither the additional standard deduction nor the senior deduction.",
    C: "Incorrect. $39,100 = $31,500 + $1,600 + $6,000, omitting the $600 phase-out. The senior deduction is reduced by 6% of MAGI in excess of $150,000 for joint filers.",
    D: "Incorrect. $40,100 = $31,500 + $1,600 x 2 + $6,000 - $600. It grants the additional age standard deduction to both spouses, but Rhea is under 65."
  },
  tags: ["standard deduction","senior deduction","OBBBA","§63"]
},
{
  id: "REG-053", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  stem: "Priya and Dev, married filing jointly, have 2025 modified AGI of $560,000. They paid $32,000 of state income tax, $14,000 of real property tax on their residence, and $2,000 of personal property tax on their cars. What amount may they deduct for state and local taxes as an itemized deduction on their 2025 return?",
  reference: "Tax year 2025 (One Big Beautiful Bill Act): the itemized deduction for state and local taxes is limited to $40,000 ($20,000 MFS). The limit is reduced by 30% of the excess of MAGI over $500,000 ($250,000 MFS), but not below $10,000.",
  options: [
    { key: "A", text: "$10,000" },
    { key: "B", text: "$40,000" },
    { key: "C", text: "$22,000" },
    { key: "D", text: "$48,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $10,000 is the pre-OBBBA cap and remains only as the floor to which the new $40,000 cap can be reduced. With MAGI of $560,000 the phase-down reduces the cap to $22,000, which is above the $10,000 floor.",
    B: "Incorrect. The full $40,000 cap is available only when MAGI does not exceed $500,000 (MFJ). Above that threshold the cap is reduced by 30% of the excess.",
    C: "Correct. Total SALT paid = $32,000 + $14,000 + $2,000 = $48,000. Cap = $40,000 - 30% x ($560,000 - $500,000) = $40,000 - $18,000 = $22,000, which exceeds the $10,000 floor. Deduction = lesser of $48,000 or $22,000 = $22,000.",
    D: "Incorrect. $48,000 is the total of taxes paid with no limitation. The §164(b)(6) cap, as amended, applies to the aggregate of state and local income (or sales) taxes and property taxes."
  },
  tags: ["§164(b)(6)","SALT cap","OBBBA","itemized deductions"]
},
{
  id: "REG-054", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Analysis", difficulty: 3,
  stem: "Ali, single, has 2025 AGI of $100,000. He paid the following in 2025: unreimbursed doctor and hospital bills $6,500; health insurance premiums (after-tax) $4,000; over-the-counter vitamins $300; cosmetic surgery not medically necessary $5,000; and a $1,200 reimbursement received from insurance in 2025 for 2025 bills already included above. He also donated appreciated publicly traded stock held 3 years (basis $10,000, FMV $38,000) to a public charity. What are Ali's deductible medical expenses and charitable contribution deduction for 2025?",
  reference: "Tax year 2025. §213: medical expenses deductible to the extent they exceed 7.5% of AGI; cosmetic surgery and non-prescribed vitamins are not medical care. §170: gifts of long-term capital gain property to public charities are deductible at FMV, limited to 30% of AGI (cash gifts 60%), with a 5-year carryforward.",
  options: [
    { key: "A", text: "Medical $1,800; charitable $30,000" },
    { key: "B", text: "Medical $3,000; charitable $38,000" },
    { key: "C", text: "Medical $2,100; charitable $10,000" },
    { key: "D", text: "Medical $1,800; charitable $38,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Qualifying medical: $6,500 + $4,000 - $1,200 reimbursement = $9,300; less 7.5% x $100,000 = $7,500; deductible $1,800. Vitamins and elective cosmetic surgery are excluded by §213(d)(9) and Reg. §1.213-1. Charitable: FMV $38,000 of long-term capital gain property is limited to 30% of AGI = $30,000; the $8,000 excess carries forward 5 years.",
    B: "Incorrect. $3,000 ignores the $1,200 insurance reimbursement, and $38,000 ignores the 30%-of-AGI limitation on gifts of appreciated capital gain property to public charities.",
    C: "Incorrect. $2,100 includes the $300 of vitamins, which are not deductible medical care unless prescribed. $10,000 uses basis, which applies to ordinary income property or short-term capital gain property, not to long-term capital gain property (FMV is allowed).",
    D: "Incorrect. The medical figure is correct, but the charitable deduction for capital gain property is limited to 30% of AGI ($30,000) in the current year. The remaining $8,000 is not lost; it carries forward."
  },
  tags: ["§213","§170","medical expenses","charitable contributions","30% limit"]
},
{
  id: "REG-055", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Analysis", difficulty: 3,
  stem: "In 2025 Cora, single, paid $30,000 of interest on a $900,000 mortgage incurred in 2022 to buy her principal residence, $4,000 of interest on a home equity loan used to buy a boat, $7,000 of interest on a margin loan used to buy taxable securities, and $2,000 of credit card interest. Her 2025 net investment income was $5,000. What is Cora's total deductible interest as an itemized deduction?",
  reference: "Tax year 2025. §163(h)(3): qualified residence interest is deductible on acquisition indebtedness up to $750,000 ($375,000 MFS) for debt incurred after December 15, 2017 (made permanent by OBBBA); home equity interest is deductible only if the loan proceeds are used to buy, build or substantially improve the residence. §163(d): investment interest is limited to net investment income, with an indefinite carryforward. Personal (consumer) interest is not deductible.",
  options: [
    { key: "A", text: "$36,000" },
    { key: "B", text: "$32,000" },
    { key: "C", text: "$41,000" },
    { key: "D", text: "$30,000" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. $36,000 = $25,000 + $4,000 + $7,000 correctly prorates the mortgage interest but deducts the home equity interest and the full investment interest. Home equity interest is deductible only if the proceeds buy, build or substantially improve the residence, and investment interest is limited to net investment income of $5,000.",
    B: "Incorrect. $32,000 = $25,000 + $7,000, applying the acquisition debt limit correctly but deducting the full investment interest. §163(d) limits investment interest to net investment income of $5,000; the $2,000 excess carries forward.",
    C: "Incorrect. $41,000 = $30,000 + $4,000 + $7,000 deducts unlimited mortgage interest, the home equity interest used for a boat, and unlimited investment interest. Each of these is limited or disallowed.",
    D: "Correct. Qualified residence interest = $30,000 x ($750,000 / $900,000) = $25,000. Home equity interest on a loan used to buy a boat is nondeductible personal interest. Investment interest is limited to net investment income: $5,000 (the $2,000 excess carries forward). Credit card interest is nondeductible personal interest. Total = $25,000 + $5,000 = $30,000."
  },
  tags: ["§163(h)","§163(d)","qualified residence interest","investment interest"]
},
{
  id: "REG-056", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  stem: "Leo, single, is a restaurant server. In 2025 he reported $31,000 of qualified tips on his Form W-2 and $9,000 of qualified overtime compensation (the premium portion above his regular rate). His 2025 modified AGI is $170,000 (including investment income). He claims the standard deduction. What is Leo's total deduction for qualified tips and qualified overtime on his 2025 return?",
  reference: "Tax year 2025 (One Big Beautiful Bill Act, effective 2025-2028). Qualified tips deduction (§224): up to $25,000 of qualified tips in a customarily tipped occupation; reduced by $100 for each $1,000 (or fraction) of MAGI over $150,000 ($300,000 MFJ). Qualified overtime deduction (§225): up to $12,500 ($25,000 MFJ) of the premium portion of FLSA overtime; same $100 per $1,000 phase-out. Both deductions are available to non-itemizers. Each deduction is reduced separately by the MAGI phase-out.",
  options: [
    { key: "A", text: "$40,000" },
    { key: "B", text: "$34,000" },
    { key: "C", text: "$30,000" },
    { key: "D", text: "$32,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $40,000 = $31,000 + $9,000 treats all tips and overtime as deductible. Tips are capped at $25,000 and both deductions are subject to a MAGI phase-out beginning at $150,000 for single filers.",
    B: "Incorrect. $34,000 = $25,000 + $9,000 applies the tips cap but ignores the phase-out. Leo's MAGI of $170,000 exceeds the $150,000 threshold by $20,000, reducing each deduction by $2,000.",
    C: "Correct. Tips: lesser of $31,000 or $25,000 = $25,000, reduced by $100 x 20 ($20,000 excess / $1,000) = $2,000, leaving $23,000. Overtime: lesser of $9,000 or $12,500 = $9,000, reduced by $2,000, leaving $7,000. Total = $30,000. Both are deductible even though Leo does not itemize.",
    D: "Incorrect. $32,000 applies the $2,000 phase-out reduction only once to the combined amount. The reduction applies separately to each deduction."
  },
  tags: ["OBBBA","qualified tips","qualified overtime","§224","§225"]
},
{
  id: "REG-057", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Filing status and dependents", skill: "Application", difficulty: 1,
  stem: "Gwen's husband died in March 2024. She has not remarried. Her 10-year-old son lives with her all year and she pays all costs of maintaining the home. For which filing status does Gwen qualify for 2024, 2025 and 2026, respectively?",
  reference: "Filing status rules: a surviving spouse may file a joint return for the year of the spouse's death. Qualifying surviving spouse status (joint rates) is available for the 2 years following the year of death if the taxpayer has not remarried and maintains a home that is the principal residence of a dependent child. Head of household requires an unmarried taxpayer who pays more than half the cost of maintaining a home for a qualifying person for more than half the year.",
  options: [
    { key: "A", text: "2024: married filing jointly; 2025: qualifying surviving spouse; 2026: qualifying surviving spouse" },
    { key: "B", text: "2024: qualifying surviving spouse; 2025: qualifying surviving spouse; 2026: head of household" },
    { key: "C", text: "2024: married filing jointly; 2025: head of household; 2026: head of household" },
    { key: "D", text: "2024: married filing jointly; 2025: qualifying surviving spouse; 2026: head of household" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. In the year of death (2024) Gwen may file jointly with her deceased husband under §6013(a)(3). For the two following years (2025 and 2026) she qualifies as a qualifying surviving spouse under §2(a) because she has not remarried and maintains a home for her dependent son. Beginning in 2027 she would file as head of household.",
    B: "Incorrect. Qualifying surviving spouse status is not available in the year of death; that year the survivor files a joint return (or married filing separately). The two years of surviving spouse status are 2025 and 2026, not 2024 and 2025.",
    C: "Incorrect. Although Gwen would qualify for head of household, qualifying surviving spouse status (which provides the more favorable joint-return rates and the $31,500 standard deduction) takes precedence for the two years after the year of death.",
    D: "Incorrect. Qualifying surviving spouse status is available for 2 years after the year of death, i.e., both 2025 and 2026. Head of household would apply only from 2027."
  },
  tags: ["filing status","qualifying surviving spouse","head of household","§2(a)"]
},
{
  id: "REG-058", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Filing status and dependents", skill: "Analysis", difficulty: 3,
  stem: "Nate, age 50 and single, provided support during 2025 to the following individuals, each of whom is a U.S. citizen: (1) his daughter Ava, age 22, a full-time student for 9 months who lived with him all year and earned $9,000 from a summer job, of which she spent $4,000 on her own support while Nate provided $12,000; (2) his father, who lived in his own apartment, had gross income of $4,800 from a part-time job and $30,000 of tax-exempt Social Security, and received $10,000 of support from Nate out of total support of $18,000; and (3) his cousin Ben, age 30, who lived with Nate all year, had no income, and received all of his support from Nate. How many of these individuals qualify as Nate's dependents?",
  reference: "Tax year 2025. Qualifying child (§152(c)): relationship, residence (more than half the year), age (under 19, or under 24 and a full-time student for at least 5 months), support (child does not provide more than half of own support), and joint return tests. Qualifying relative (§152(d)): not a qualifying child of anyone, relationship (specified relatives, or any person who is a member of the taxpayer's household all year), gross income less than $5,200, and taxpayer provides more than half of support. Nontaxable Social Security is not gross income but counts as support provided by the recipient if spent on support.",
  options: [
    { key: "A", text: "One" },
    { key: "B", text: "Two" },
    { key: "C", text: "Three" },
    { key: "D", text: "None" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Ava alone is not the only dependent. Both the father and the cousin also satisfy the qualifying relative tests.",
    B: "Incorrect. A common error is to disqualify Ben because a cousin is not a listed relative under §152(d)(2). However, an unrelated individual (or a non-listed relative) who is a member of the taxpayer's household for the entire year satisfies the relationship test under §152(d)(2)(H).",
    C: "Correct. Ava is a qualifying child: daughter, lived with Nate all year, under 24 and a full-time student for at least 5 months, and she did not provide more than half of her own support ($4,000 of $16,000). Her $9,000 income is irrelevant for a qualifying child. Father is a qualifying relative: gross income $4,800 is below $5,200 (Social Security excluded from gross income is not counted), Nate provided $10,000 of $18,000 total support (more than half), and a parent need not live with the taxpayer. Ben is a qualifying relative: member of the household all year, no income, fully supported by Nate. All three qualify.",
    D: "Incorrect. Each individual meets the applicable tests. The common traps are Ava's earnings (irrelevant for a qualifying child), the father's Social Security (not gross income), and the cousin's relationship (cured by full-year household membership)."
  },
  tags: ["§152","qualifying child","qualifying relative","gross income test","support test"]
},
{
  id: "REG-059", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Loss limitations — Capital, basis, passive, at-risk, hobby and wash sale", skill: "Application", difficulty: 1,
  stem: "Owen, single, actively participates in the management of a rental duplex he owns. In 2025 the rental generated a $30,000 loss. Owen's other income consists of $130,000 of wages and $6,000 of dividends; he has no other passive activities and is not a real estate professional. What amount of the rental loss may Owen deduct against his nonpassive income in 2025?",
  reference: "IRC §469(i): an individual who actively participates in a rental real estate activity may deduct up to $25,000 of passive losses from that activity against nonpassive income. The $25,000 allowance is reduced by 50% of the amount by which modified AGI exceeds $100,000, and is fully phased out at MAGI of $150,000.",
  options: [
    { key: "A", text: "$25,000" },
    { key: "B", text: "$7,000" },
    { key: "C", text: "$0" },
    { key: "D", text: "$10,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The full $25,000 allowance is available only when MAGI does not exceed $100,000. Owen's MAGI of $136,000 triggers the phase-out.",
    B: "Correct. MAGI = $130,000 + $6,000 = $136,000. Reduction = 50% x ($136,000 - $100,000) = $18,000. Allowance = $25,000 - $18,000 = $7,000. Owen deducts $7,000 of the loss in 2025; the remaining $23,000 is suspended and carried forward under §469(b) until he has passive income or disposes of the activity.",
    C: "Incorrect. The allowance is fully eliminated only at MAGI of $150,000 or more. At $136,000 a partial allowance remains.",
    D: "Incorrect. $10,000 results from using only wages ($130,000) in the phase-out computation: $25,000 - 50% x $30,000 = $10,000. Modified AGI for this purpose includes the dividend income."
  },
  tags: ["§469(i)","passive activity loss","rental real estate","active participation"]
},
{
  id: "REG-060", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Loss limitations — Capital, basis, passive, at-risk, hobby and wash sale", skill: "Analysis", difficulty: 3,
  stem: "Mia, single, materially participates in a sole proprietorship that generated a $700,000 loss in 2025. She has $250,000 at risk in the business and no passive activities. Her other 2025 income consists of $900,000 of wages. What amount of the business loss may Mia deduct on her 2025 return, and what happens to the remainder?",
  reference: "Tax year 2025. Ordering of loss limitations: (1) basis, (2) at-risk (§465), (3) passive activity (§469), (4) excess business loss (§461(l)). §461(l): aggregate business deductions in excess of aggregate business income plus a threshold ($313,000 single / $626,000 MFJ for 2025) are disallowed; the disallowed amount becomes a net operating loss carryforward to the following year. Losses disallowed under §465 are carried forward as at-risk losses in the same activity.",
  options: [
    { key: "A", text: "$700,000 deductible; nothing carried forward" },
    { key: "B", text: "$313,000 deductible; $387,000 becomes an NOL carryforward" },
    { key: "C", text: "$250,000 deductible; $450,000 becomes a net operating loss carryforward" },
    { key: "D", text: "$250,000 deductible; $450,000 suspended under the at-risk rules and $0 treated as an excess business loss" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. Two limitations apply. The at-risk rules limit the deduction to the $250,000 at risk, and even if that limit did not apply, §461(l) would cap the loss at $313,000 against nonbusiness income.",
    B: "Incorrect. This applies §461(l) first. The at-risk limitation of §465 is applied before the excess business loss rule. After the at-risk limit, only $250,000 of loss remains, which is below the $313,000 threshold, so §461(l) has no effect.",
    C: "Incorrect. The $250,000 deduction is right, but the $450,000 disallowed by the at-risk rules is not an NOL. Under §465(a)(2) it is suspended within the activity and carried forward until Mia's amount at risk increases; only losses disallowed by §461(l) are converted into an NOL carryforward.",
    D: "Correct. Step 1: at-risk limit under §465 allows $250,000; the $450,000 excess is suspended and carried forward within the activity until Mia's at-risk amount increases. Step 2: §461(l) tests only the $250,000 of loss allowed after the at-risk rules; because it is less than the $313,000 threshold, there is no excess business loss and no NOL carryforward. Mia deducts $250,000 against her wages in 2025."
  },
  tags: ["§461(l)","§465","excess business loss","at-risk","ordering rules"]
},
{
  id: "REG-061", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Loss limitations — Capital, basis, passive, at-risk, hobby and wash sale", skill: "Application", difficulty: 1,
  stem: "In 2025 Zara, single, had the following capital transactions: short-term capital gain $4,000; short-term capital loss $11,000; long-term capital gain $6,000; long-term capital loss $9,000. She had no capital loss carryovers. What is the amount of her capital loss deduction for 2025 and the amount and character of her capital loss carryover to 2026?",
  reference: "IRC §1211(b): an individual may deduct net capital losses against ordinary income up to $3,000 per year ($1,500 MFS). §1212(b): the excess carries forward indefinitely, retaining its short-term or long-term character. The $3,000 deduction is treated as coming first from net short-term capital loss.",
  options: [
    { key: "A", text: "$3,000 deduction; $4,000 short-term and $3,000 long-term carryover" },
    { key: "B", text: "$10,000 deduction; no carryover" },
    { key: "C", text: "$3,000 deduction; $7,000 long-term carryover" },
    { key: "D", text: "$3,000 deduction; $7,000 short-term carryover" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Net short-term loss = $4,000 - $11,000 = ($7,000). Net long-term loss = $6,000 - $9,000 = ($3,000). Total net capital loss $10,000; $3,000 is deductible in 2025 under §1211(b). The deduction is absorbed first by the short-term loss, leaving a carryover of $4,000 short-term and $3,000 long-term.",
    B: "Incorrect. Individuals may not deduct net capital losses against ordinary income without limit. The annual limit is $3,000, with the balance carried forward.",
    C: "Incorrect. The $3,000 deduction is charged first against net short-term capital loss (Reg. §1.1212-1(b)), not long-term. Charging it against the long-term loss would leave $7,000 short-term, not long-term.",
    D: "Incorrect. The carryover keeps its original character. $7,000 is the net short-term loss before the $3,000 deduction; after the deduction only $4,000 short-term remains, plus the untouched $3,000 long-term loss."
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
  stem: "Carl and Dee, married filing jointly, have 2025 modified AGI of $432,000 and three qualifying children ages 4, 9 and 14, all with Social Security numbers. What is their 2025 child tax credit before considering the refundable portion?",
  reference: "Tax year 2025 (One Big Beautiful Bill Act): child tax credit $2,200 per qualifying child under age 17; refundable additional child tax credit up to $1,700 per child. Phase-out: credit reduced by $50 for each $1,000 (or fraction thereof) of MAGI over $200,000 ($400,000 MFJ).",
  options: [
    { key: "A", text: "$6,600" },
    { key: "B", text: "$5,000" },
    { key: "C", text: "$4,400" },
    { key: "D", text: "$5,100" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $6,600 = 3 x $2,200 is the credit before the phase-out. With MAGI of $432,000 the couple exceeds the $400,000 MFJ threshold and the credit must be reduced.",
    B: "Correct. Tentative credit = 3 x $2,200 = $6,600. Excess MAGI = $432,000 - $400,000 = $32,000, which is 32 increments of $1,000. Reduction = 32 x $50 = $1,600. Credit = $6,600 - $1,600 = $5,000.",
    C: "Incorrect. $4,400 = 2 x $2,200 assumes the 14-year-old does not qualify. A qualifying child for the CTC must be under age 17 at the end of the year, so all three children qualify.",
    D: "Incorrect. $5,100 = $6,600 - $1,500 uses 30 increments instead of 32, or applies the reduction to the $1,700 refundable amount. The $50 reduction applies per $1,000 (or fraction) of excess MAGI over the threshold."
  },
  tags: ["§24","child tax credit","OBBBA","phase-out"]
},
{
  id: "REG-065", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 1,
  stem: "In 2025 Ivan, single with MAGI of $70,000, paid $3,600 of tuition and $500 of required course textbooks for his dependent daughter's second year of full-time undergraduate study at an eligible institution. He also paid $6,000 for her dormitory room. Ivan's 2025 income tax liability before credits is $1,500. What is Ivan's American Opportunity Tax Credit (AOTC), and how much of it is refundable?",
  reference: "Tax year 2025. AOTC (§25A(i)): 100% of the first $2,000 of qualified education expenses plus 25% of the next $2,000, maximum $2,500 per eligible student, for the first 4 years of postsecondary education. Qualified expenses include tuition, fees and required course materials, but not room and board. 40% of the credit is refundable. Phase-out: MAGI $80,000-$90,000 single, $160,000-$180,000 MFJ.",
  options: [
    { key: "A", text: "Credit $2,500; refundable $1,000" },
    { key: "B", text: "Credit $2,525; refundable $1,010" },
    { key: "C", text: "Credit $2,000; refundable $0" },
    { key: "D", text: "Credit $1,500; refundable $0" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Qualified expenses = $3,600 tuition + $500 required books = $4,100 (room and board excluded). Credit = 100% x $2,000 + 25% x $2,000 = $2,500 (the maximum; expenses above $4,000 provide no additional credit). Ivan's MAGI is below the phase-out. 40% x $2,500 = $1,000 is refundable, so Ivan uses $1,500 against his tax liability and receives $1,000 as a refund.",
    B: "Incorrect. $2,525 = $2,000 + 25% x $2,100 applies 25% to all expenses above $2,000. The 25% tier is limited to the next $2,000 of expenses, capping the credit at $2,500.",
    C: "Incorrect. $2,000 results from counting only the first $2,000 of expenses, or from confusing the AOTC with the Lifetime Learning Credit (20% of up to $10,000). Required course materials also qualify for the AOTC.",
    D: "Incorrect. $1,500 limits the credit to Ivan's tax liability and treats it as nonrefundable. Unlike the Lifetime Learning Credit, 40% of the AOTC is refundable under §25A(i)(5), so the credit is not limited to the pre-credit liability."
  },
  tags: ["§25A","American Opportunity Tax Credit","refundable credit"]
},
{
  id: "REG-066", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 2,
  stem: "Fay and Gus, married filing jointly, both work full time. In 2025 they paid $9,000 to a day care center for their two children, ages 3 and 6. Fay earned $60,000 and Gus earned $2,500 (he worked part of the year). Their AGI is $62,500. What is their 2025 child and dependent care credit?",
  reference: "Tax year 2025 (§21): qualifying expenses limited to $3,000 for one qualifying individual or $6,000 for two or more, and further limited to the earned income of the lower-earning spouse. Applicable percentage: 35%, reduced by 1 percentage point for each $2,000 (or fraction) of AGI over $15,000, but not below 20%. (OBBBA increases the maximum rate to 50% for tax years beginning after 2025.)",
  options: [
    { key: "A", text: "$1,200" },
    { key: "B", text: "$1,800" },
    { key: "C", text: "$875" },
    { key: "D", text: "$500" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. $1,200 = 20% x $6,000 applies the dollar limit for two children but ignores the earned-income limitation. Qualifying expenses cannot exceed the earned income of the lower-earning spouse ($2,500).",
    B: "Incorrect. $1,800 = 20% x $9,000 uses the full amount paid, ignoring both the $6,000 dollar cap and the earned income limit.",
    C: "Incorrect. $875 = 35% x $2,500 applies the earned income limit but uses the maximum 35% rate. At AGI of $62,500 the rate has been reduced to the 20% floor (the rate reaches 20% at AGI above $43,000).",
    D: "Correct. Expenses are limited to the lesser of amounts paid ($9,000), the $6,000 cap for two or more qualifying individuals, or the lower spouse's earned income ($2,500): $2,500. Applicable percentage: AGI of $62,500 exceeds $15,000 by $47,500, which is 24 increments of $2,000, reducing 35% to the 20% floor. Credit = 20% x $2,500 = $500."
  },
  tags: ["§21","dependent care credit","earned income limitation"]
},
{
  id: "REG-067", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 2,
  stem: "In 2025 Hana earned $150,000 of W-2 wages (subject to FICA) and also had net profit of $60,000 from a sole proprietorship. What is Hana's 2025 self-employment tax?",
  reference: "Tax year 2025. Net earnings from self-employment = net profit x 92.35%. Social Security portion: 12.4% on net SE earnings up to the wage base of $176,100 reduced by wages subject to Social Security tax. Medicare portion: 2.9% on all net SE earnings. (The 0.9% additional Medicare tax on earned income over $200,000 single / $250,000 MFJ is computed separately on Form 8959 and is not part of SE tax.)",
  options: [
    { key: "A", text: "$8,477" },
    { key: "B", text: "$9,180" },
    { key: "C", text: "$4,844" },
    { key: "D", text: "$1,607" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $8,477 = $60,000 x 92.35% x 15.3% applies the full 15.3% rate to all net SE earnings, ignoring that Hana's wages have already used $150,000 of the $176,100 Social Security wage base.",
    B: "Incorrect. $9,180 = $60,000 x 15.3% both ignores the wage base coordination and omits the 92.35% adjustment to net profit.",
    C: "Correct. Net SE earnings = $60,000 x 92.35% = $55,410. Social Security portion applies only to the remaining wage base: $176,100 - $150,000 = $26,100; 12.4% x $26,100 = $3,236.40. Medicare portion: 2.9% x $55,410 = $1,606.89. Total SE tax = $3,236.40 + $1,606.89 = $4,843.29, about $4,844. One-half ($2,422) is deductible for AGI under §164(f).",
    D: "Incorrect. $1,607 is the Medicare portion only. Because Hana's wages ($150,000) have not exhausted the $176,100 wage base, the Social Security portion applies to the first $26,100 of net SE earnings."
  },
  tags: ["§1401","self-employment tax","wage base"]
},
{
  id: "REG-068", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 2,
  stem: "Kai, single, had 2024 AGI of $180,000 and a 2024 total tax of $40,000. He expects his 2025 total tax to be $70,000 and his 2025 withholding to be $30,000. What is the minimum total amount of timely 2025 estimated tax payments Kai must make to avoid an underpayment penalty?",
  reference: "IRC §6654: no penalty if withholding plus timely estimated payments equal at least the lesser of (a) 90% of the current-year tax, or (b) 100% of the prior-year tax (110% if prior-year AGI exceeded $150,000; $75,000 MFS). No penalty if the balance due after withholding is less than $1,000. Estimated payments are due in four installments (April 15, June 15, September 15, January 15).",
  options: [
    { key: "A", text: "$33,000" },
    { key: "B", text: "$10,000" },
    { key: "C", text: "$40,000" },
    { key: "D", text: "$14,000" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. $33,000 = 90% x $70,000 - $30,000 uses the current-year safe harbor. Kai may rely on whichever safe harbor is lower, and the prior-year safe harbor ($44,000) is lower than 90% of current-year tax ($63,000).",
    B: "Incorrect. $10,000 = 100% x $40,000 - $30,000 uses the 100% prior-year safe harbor. Because Kai's 2024 AGI exceeded $150,000, the prior-year safe harbor is 110% of 2024 tax.",
    C: "Incorrect. $40,000 is 100% of the prior-year tax without reducing it for the $30,000 of withholding. Withholding counts toward the required payments and is treated as paid evenly throughout the year.",
    D: "Correct. Required annual payment = lesser of 90% x $70,000 = $63,000 or 110% x $40,000 = $44,000, i.e., $44,000. Less withholding $30,000 = $14,000 of required estimated payments (four installments of $3,500). Kai will still owe the balance of $26,000 by April 15, 2026, but no underpayment penalty applies."
  },
  tags: ["§6654","estimated tax","safe harbor","110% rule"]
},
{
  id: "REG-069", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 2,
  stem: "Lou, age 45, took two distributions in 2025: (1) $20,000 from his traditional IRA (all deductible contributions), which he used to pay $12,000 of qualified higher education expenses for his daughter and $8,000 toward a vacation; and (2) $15,000 from his Roth IRA, which he opened in 2019 with total contributions of $25,000 and no prior withdrawals. What is Lou's total additional tax (penalty) on early distributions for 2025?",
  reference: "IRC §72(t): 10% additional tax on distributions from qualified plans and IRAs before age 59 1/2, with exceptions including death, disability, substantially equal periodic payments, and (for IRAs only) qualified higher education expenses, first-time home purchase up to $10,000, and health insurance while unemployed. Roth IRA ordering rules (§408A(d)(4)): distributions come first from contributions (tax and penalty free), then conversions, then earnings.",
  options: [
    { key: "A", text: "$3,500" },
    { key: "B", text: "$2,000" },
    { key: "C", text: "$800" },
    { key: "D", text: "$2,300" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $3,500 = 10% x $35,000 applies the penalty to both distributions in full, ignoring the education exception and the Roth ordering rules.",
    B: "Incorrect. $2,000 = 10% x $20,000 penalizes the entire traditional IRA distribution. The $12,000 used for qualified higher education expenses of a child is excepted from the penalty under §72(t)(2)(E), although it remains fully taxable as ordinary income.",
    C: "Correct. Traditional IRA: the entire $20,000 is taxable, but only the $8,000 not used for qualified higher education expenses is subject to the 10% penalty: $800. Roth IRA: the $15,000 distribution is less than Lou's $25,000 of contributions, so under the ordering rules it is a return of contributions, neither taxable nor subject to penalty. Total penalty = $800.",
    D: "Incorrect. $2,300 = $800 + 10% x $15,000 applies the penalty to the Roth distribution. Regular contributions come out of a Roth IRA first and are never subject to tax or penalty; only earnings withdrawn in a nonqualified distribution are."
  },
  tags: ["§72(t)","early distribution penalty","Roth IRA ordering rules","§408A"]
},
{
  id: "REG-070", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  stem: "Rita, single, is a 50% partner in a landscaping partnership (not a specified service trade or business). Her 2025 Schedule K-1 reports $120,000 of ordinary business income, $6,000 of guaranteed payments for services, and her share of W-2 wages paid by the partnership of $30,000. Rita's taxable income before the QBI deduction is $150,000, including $10,000 of net long-term capital gain. What is Rita's 2025 qualified business income (QBI) deduction under §199A?",
  reference: "Tax year 2025. §199A: deduction = lesser of (a) 20% of QBI, or (b) 20% of (taxable income - net capital gain). Guaranteed payments for services and reasonable compensation are excluded from QBI. The W-2 wage/UBIA limitation applies only when taxable income exceeds $197,300 (single) / $394,600 (MFJ). OBBBA made §199A permanent.",
  options: [
    { key: "A", text: "$24,000" },
    { key: "B", text: "$25,200" },
    { key: "C", text: "$30,000" },
    { key: "D", text: "$28,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. QBI = $120,000 (guaranteed payments are excluded under §199A(c)(4)). 20% x $120,000 = $24,000. Overall limit: 20% x ($150,000 - $10,000 net capital gain) = $28,000. Deduction = lesser of $24,000 or $28,000 = $24,000. Because taxable income is below $197,300, the W-2 wage limitation does not apply.",
    B: "Incorrect. $25,200 = 20% x $126,000 includes the $6,000 guaranteed payment in QBI. Guaranteed payments for services are specifically excluded from qualified business income.",
    C: "Incorrect. $30,000 = 20% x $150,000 uses total taxable income without subtracting net capital gain, and ignores that the deduction can never exceed 20% of QBI. The taxable income limitation is a ceiling, not the deduction itself.",
    D: "Incorrect. $28,000 is the taxable income limitation (20% of taxable income less net capital gain). The deduction is the lesser of this ceiling and 20% of QBI, and 20% of QBI ($24,000) is lower."
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
  stem: "Fox Corp. had 2025 gross income from operations of $300,000, operating expenses of $360,000, and $100,000 of dividends from Hen Corp., a domestic corporation in which Fox owns 15% of the stock. Fox had no other items. What is Fox's dividends-received deduction (DRD) for 2025?",
  reference: "IRC §243: DRD is 50% of dividends received from a less-than-20%-owned domestic corporation, 65% for 20%-or-more owned, and 100% for members of an affiliated group. Taxable income limitation: the DRD cannot exceed the applicable percentage of taxable income computed without the DRD, NOL deduction and capital loss carryback; the limitation does not apply if taking the full DRD creates or increases an NOL.",
  options: [
    { key: "A", text: "$20,000" },
    { key: "B", text: "$26,000" },
    { key: "C", text: "$50,000" },
    { key: "D", text: "$65,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $20,000 = 50% x $40,000 applies the taxable income limitation. But the limitation does not apply when the full DRD would create or increase a net operating loss, which it does here.",
    B: "Incorrect. $26,000 = 65% x $40,000 uses the 65% rate that applies to 20%-or-more ownership and also applies the taxable income limitation. Fox owns only 15%, so the 50% rate applies.",
    C: "Correct. Taxable income before the DRD = $300,000 - $360,000 + $100,000 = $40,000. Tentative DRD = 50% x $100,000 = $50,000. Taxable income limit = 50% x $40,000 = $20,000. However, the full $50,000 DRD produces taxable income of $40,000 - $50,000 = ($10,000), an NOL, so the limitation does not apply and the full $50,000 is allowed.",
    D: "Incorrect. $65,000 uses the 65% rate that requires at least 20% ownership. With 15% ownership the applicable percentage is 50%."
  },
  tags: ["§243","dividends-received deduction","taxable income limitation","NOL exception"]
},
{
  id: "REG-076", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods", skill: "Analysis", difficulty: 3,
  stem: "Gem Corp., an accrual-basis calendar-year C corporation, reported the following for 2025: gross profit $800,000; operating expenses (excluding charitable contributions) $500,000; dividends from a 30%-owned domestic corporation $60,000; charitable contributions accrued in 2025 by board resolution and paid on March 20, 2026, $50,000; and an NOL carryforward from 2023 of $40,000. What is Gem's 2025 charitable contribution deduction?",
  reference: "IRC §170(b)(2): a corporation's charitable deduction is limited to 10% of taxable income computed before the charitable deduction, the dividends-received deduction, and any NOL carryback (but after NOL carryforwards); excess carries forward 5 years. An accrual-basis corporation may elect to deduct a contribution authorized by the board during the year and paid by the 15th day of the fourth month after year-end (§170(a)(2)). DRD for 20%-79% ownership: 65%.",
  options: [
    { key: "A", text: "$50,000" },
    { key: "B", text: "$36,000" },
    { key: "C", text: "$32,000" },
    { key: "D", text: "$28,100" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. The full $50,000 is not deductible in 2025 because it exceeds the 10% limitation. The $18,000 excess carries forward for up to 5 years. The payment timing (March 20, 2026, before April 15) does allow the contribution to be treated as paid in 2025.",
    B: "Incorrect. $36,000 = 10% x $360,000 ignores the NOL carryforward. Unlike NOL carrybacks, NOL carryforwards reduce the taxable income base for the 10% limitation.",
    C: "Correct. Taxable income for the limitation = $800,000 - $500,000 + $60,000 - $40,000 NOL carryforward = $320,000 (before the charitable deduction and before the DRD). 10% x $320,000 = $32,000. The remaining $18,000 carries forward.",
    D: "Incorrect. $28,100 = 10% x ($320,000 - $39,000 DRD). The 10% limitation base is computed before the dividends-received deduction, so the DRD should not reduce it."
  },
  tags: ["§170(b)(2)","corporate charitable deduction","10% limit","accrual election"]
},
{
  id: "REG-077", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods", skill: "Application", difficulty: 1,
  stem: "Iris Corp. had a net operating loss of $500,000 in 2023 (its first year) and taxable income of $300,000 in 2024 (before any NOL deduction). In 2025 its taxable income before the NOL deduction is $400,000. What is Iris's 2025 NOL deduction and its NOL carryforward to 2026?",
  reference: "IRC §172 (post-2020 rules): NOLs arising in tax years beginning after 2017 may not be carried back (except farming losses) and are carried forward indefinitely, but the deduction is limited to 80% of taxable income computed without regard to the NOL deduction.",
  options: [
    { key: "A", text: "Deduction $260,000; carryforward $0" },
    { key: "B", text: "Deduction $200,000; carryforward $60,000" },
    { key: "C", text: "Deduction $320,000; carryforward $0" },
    { key: "D", text: "Deduction $260,000; carryforward $240,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. 2024: NOL deduction limited to 80% x $300,000 = $240,000, leaving a carryforward of $500,000 - $240,000 = $260,000. 2025: limit = 80% x $400,000 = $320,000; the remaining NOL of $260,000 is less than the limit, so the full $260,000 is deducted and the carryforward is exhausted.",
    B: "Incorrect. $200,000 would result from deducting the full $300,000 in 2024 (ignoring the 80% limit) and then deducting $200,000 in 2025. The 80% limitation applies each year, so only $240,000 was deductible in 2024.",
    C: "Incorrect. $320,000 is the 2025 limitation (80% of $400,000), but the deduction cannot exceed the remaining NOL of $260,000.",
    D: "Incorrect. $260,000 is the correct 2025 deduction, but it uses up the entire carryforward. There is nothing left to carry to 2026."
  },
  tags: ["§172","NOL","80% limitation","carryforward"]
},
{
  id: "REG-078", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Jade Corp., a C corporation, has a $30,000 net capital loss in 2025 and $12,000 of net capital gains in each of 2022, 2023 and 2024. It had no capital transactions before 2022. Which of the following correctly describes the treatment of the 2025 net capital loss?",
  reference: "",
  options: [
    { key: "A", text: "Deduct $3,000 against 2025 ordinary income and carry the remaining $27,000 forward indefinitely." },
    { key: "B", text: "Carry the loss back 2 years and forward 20 years, offsetting only capital gains." },
    { key: "C", text: "Deduct the entire $30,000 against 2025 ordinary income because corporations are not subject to the $3,000 limitation." },
    { key: "D", text: "Carry the loss back 3 years and forward 5 years as a short-term capital loss, offsetting only capital gains; $12,000 is applied to 2022 first." }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. The $3,000 deduction against ordinary income and the indefinite carryforward are individual rules under §1211(b) and §1212(b). Corporations may not deduct any net capital loss against ordinary income.",
    B: "Incorrect. The 2-year/20-year periods were the NOL rules for pre-2018 losses; they have never applied to corporate capital losses.",
    C: "Incorrect. Under §1211(a) a corporation's capital losses are allowed only to the extent of capital gains. No amount can offset ordinary income.",
    D: "Correct. Under §1212(a), a corporation carries a net capital loss back 3 years and forward 5 years, treating it as a short-term capital loss in the carryover years, and it can offset only capital gains. The loss is applied first to the earliest year (2022), then 2023 and 2024 ($12,000 each, totaling $36,000 of gains available), so the entire $30,000 is absorbed by carrybacks and refunds are claimed on Form 1139 or 1120-X."
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
  stem: "Pine Inc., a calendar-year C corporation, wants to be taxed as an S corporation beginning January 1, 2026. Which of the following situations would prevent a valid S election effective for 2026?",
  reference: "IRC §1361-§1362: eligible shareholders are individuals (other than nonresident aliens), estates, certain trusts (grantor, QSST, ESBT, testamentary trusts for 2 years) and certain exempt organizations; maximum 100 shareholders (family members treated as one); one class of stock (differences in voting rights are permitted). Form 2553 must be filed by the 15th day of the third month of the year for which it is to be effective (or any time in the preceding year), with consent of all shareholders.",
  options: [
    { key: "A", text: "Pine has 40 shareholders, including a husband and wife and their four children, who each hold shares individually." },
    { key: "B", text: "Pine has two classes of common stock that are identical except that Class B shares are nonvoting." },
    { key: "C", text: "Pine files Form 2553 on March 10, 2026 with the consent of 95% of shareholders; the remaining shareholder, who owns 5%, refuses to consent." },
    { key: "D", text: "One shareholder is an estate of a deceased shareholder, and another is a domestic grantor trust." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. Family members (up to 6 generations from a common ancestor) are treated as a single shareholder under §1361(c)(1), so this group counts as one shareholder. In any case 40 shareholders is well under the 100-shareholder limit.",
    B: "Incorrect. §1361(c)(4) expressly permits differences in voting rights among shares of common stock. The one-class-of-stock rule is violated only by differences in rights to distribution or liquidation proceeds.",
    C: "Correct. Under §1362(a)(2) all shareholders on the date of the election must consent. Although Form 2553 filed on March 10, 2026 is timely (on or before March 15, the 15th day of the third month), the election is invalid without the consent of every shareholder. Pine could seek late-election relief only if the missing consent is obtained.",
    D: "Incorrect. Estates and grantor trusts are permitted S corporation shareholders under §1361(c)(2). Only nonresident aliens, C corporations, partnerships and most non-grantor trusts (other than QSSTs, ESBTs and testamentary trusts) are ineligible."
  },
  tags: ["§1361","§1362","S election","eligible shareholders","one class of stock"]
},
{
  id: "REG-083", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Basis of shareholder's interest", skill: "Application", difficulty: 2,
  stem: "Quinn owns 100% of Reed Corp., an S corporation. At January 1, 2025 Quinn's stock basis was $20,000 and he held a $15,000 note receivable from Reed (debt basis $15,000). During 2025 Reed reported ordinary business loss of $50,000, tax-exempt interest income of $3,000, and made a cash distribution of $8,000 to Quinn. What amount of the loss may Quinn deduct in 2025 (assuming he is at risk and materially participates), and what are his stock and debt bases at December 31, 2025?",
  reference: "IRC §1366(d) and §1367: shareholder basis is adjusted in this order: (1) increased for income items (including tax-exempt income), (2) decreased for distributions, (3) decreased for nondeductible expenses, (4) decreased for losses. Losses are deductible only to the extent of stock basis plus basis in debt owed by the S corporation to the shareholder; excess losses carry forward. Losses reduce stock basis first, then debt basis.",
  options: [
    { key: "A", text: "Loss $30,000; stock basis $0; debt basis $0" },
    { key: "B", text: "Loss $35,000; stock basis $0; debt basis $0" },
    { key: "C", text: "Loss $50,000; stock basis $0; debt basis $0" },
    { key: "D", text: "Loss $15,000; stock basis $0; debt basis $15,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Stock basis: $20,000 + $3,000 tax-exempt income = $23,000; less $8,000 distribution = $15,000. Losses: $50,000 is limited to stock basis $15,000 + debt basis $15,000 = $30,000. Stock basis is reduced to $0 first, then debt basis to $0. The $20,000 suspended loss carries forward indefinitely until basis is restored (debt basis is restored first by future net income under §1367(b)(2)(B)). The distribution is tax-free because it did not exceed stock basis.",
    B: "Incorrect. $35,000 ignores the $8,000 distribution. Distributions reduce stock basis before losses are applied, which lowers the amount of loss that can be deducted.",
    C: "Incorrect. Losses in excess of the shareholder's stock and debt basis are not deductible currently; they are suspended under §1366(d)(2). Deducting the full $50,000 would produce negative basis, which is not permitted.",
    D: "Incorrect. This applies only stock basis. §1366(d)(1)(B) allows a shareholder to deduct losses against the basis of indebtedness of the S corporation to the shareholder once stock basis is exhausted."
  },
  tags: ["§1366","§1367","S corporation basis","debt basis","loss limitation"]
},
{
  id: "REG-084", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Ordinary business income, separately stated items and AAA", skill: "Analysis", difficulty: 3,
  stem: "Sage Corp. converted from a C corporation to an S corporation on January 1, 2024, with accumulated E&P of $30,000. At January 1, 2025 its accumulated adjustments account (AAA) was $25,000 and its sole shareholder, Tara, had a stock basis of $60,000. In 2025 Sage had ordinary income of $15,000 and distributed $110,000 cash to Tara. What is the tax treatment of the $110,000 distribution to Tara?",
  reference: "IRC §1368(c): for an S corporation with accumulated E&P, distributions are (1) tax-free to the extent of AAA (reduces stock basis), (2) a dividend to the extent of accumulated E&P (no basis effect), (3) tax-free return of capital to the extent of remaining stock basis, then (4) capital gain. AAA and stock basis are increased by current-year income before distributions are applied.",
  options: [
    { key: "A", text: "Tax-free AAA distribution $40,000; dividend $30,000; tax-free return of capital $40,000; capital gain $0" },
    { key: "B", text: "Tax-free AAA distribution $25,000; dividend $30,000; tax-free return of capital $50,000; capital gain $5,000" },
    { key: "C", text: "Tax-free distribution $75,000; dividend $30,000; capital gain $5,000" },
    { key: "D", text: "Tax-free AAA distribution $40,000; dividend $30,000; tax-free return of capital $35,000; capital gain $5,000" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. After the $40,000 AAA distribution, Tara's stock basis is $60,000 + $15,000 - $40,000 = $35,000, not $40,000. The return-of-capital tier is limited to remaining basis, so $5,000 of the distribution is capital gain.",
    B: "Incorrect. AAA must first be increased by the 2025 ordinary income: $25,000 + $15,000 = $40,000. Using the beginning-of-year AAA balance understates the first tier and overstates the return-of-capital tier (which would exceed available basis).",
    C: "Incorrect. This applies the dividend tier after the return of stock basis. Under §1368(c) the accumulated E&P (dividend) tier comes immediately after AAA and before any return of remaining stock basis; the ordering matters because dividends do not reduce basis.",
    D: "Correct. AAA = $25,000 + $15,000 = $40,000: first $40,000 tax-free, reducing basis to $60,000 + $15,000 - $40,000 = $35,000. Next $30,000 is a dividend from accumulated E&P (basis unaffected). Remaining $40,000 ($110,000 - $40,000 - $30,000): $35,000 is a tax-free return of capital reducing basis to $0, and the final $5,000 is capital gain."
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
  stem: "Uma and Vic form UV Partnership as equal partners. Uma contributes a building with an adjusted basis of $120,000 and FMV of $300,000, subject to a $100,000 recourse mortgage that the partnership assumes. Vic contributes $200,000 cash. Partnership liabilities are shared equally. What is Uma's basis in her partnership interest immediately after formation, and what gain does she recognize?",
  reference: "IRC §721: no gain or loss on contribution of property to a partnership in exchange for a partnership interest. §722: partner's basis = basis of property contributed. §752: an increase in a partner's share of partnership liabilities is treated as a cash contribution (increasing basis); a decrease in the partner's individual liabilities is treated as a cash distribution (decreasing basis). §731: gain is recognized only if cash deemed distributed exceeds basis.",
  options: [
    { key: "A", text: "Basis $20,000; gain $0" },
    { key: "B", text: "Basis $120,000; gain $0" },
    { key: "C", text: "Basis $70,000; gain $0" },
    { key: "D", text: "Basis $0; gain $30,000" }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. $20,000 = $120,000 - $100,000 treats the entire mortgage as relieved. Uma is still allocated her 50% share of the partnership's liabilities, which increases her basis by $50,000.",
    B: "Incorrect. This ignores §752 entirely. When encumbered property is contributed, the contributing partner's basis is reduced by the liability assumed by the partnership and increased by the partner's share of that (and other) partnership liabilities.",
    C: "Correct. Starting basis = $120,000 (basis of building, §722). Liability relief: Uma is relieved of $100,000 of individual debt (deemed distribution) but takes on 50% of the partnership's $100,000 liability = $50,000 (deemed contribution). Net deemed distribution = $50,000. Basis = $120,000 - $100,000 + $50,000 = $70,000. Because the net deemed cash distribution ($50,000) does not exceed her pre-distribution basis, no gain is recognized. Vic's basis = $200,000 + $50,000 = $250,000.",
    D: "Incorrect. Gain under §731 arises only if the net liability relief exceeds the contributing partner's basis. Here $50,000 of net relief is less than $120,000 of basis, so no gain is recognized."
  },
  tags: ["§721","§722","§752","partnership formation","liabilities"]
},
{
  id: "REG-087", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Basis of partner's interest", skill: "Application", difficulty: 2,
  stem: "Wren is a 25% partner in WX Partnership. At January 1, 2025 her outside basis was $40,000. For 2025 the partnership reported: ordinary business income (before guaranteed payments) $200,000; guaranteed payment to Wren for services $30,000; long-term capital gain $20,000; charitable contributions $8,000; tax-exempt interest $4,000. The partnership distributed $15,000 cash to Wren during 2025. Partnership liabilities did not change. What is Wren's outside basis at December 31, 2025?",
  reference: "IRC §705: outside basis is increased by the partner's share of taxable income and tax-exempt income and decreased by distributions, the share of losses, and nondeductible/noncapital expenditures (including the partner's share of charitable contributions). Guaranteed payments (§707(c)) are ordinary income to the recipient and are deducted by the partnership in computing ordinary income; they do not directly increase the recipient's basis.",
  options: [
    { key: "A", text: "$72,500" },
    { key: "B", text: "$79,000" },
    { key: "C", text: "$102,500" },
    { key: "D", text: "$74,500" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Ordinary income after the guaranteed payment = $200,000 - $30,000 = $170,000; Wren's 25% share = $42,500. Add 25% of LTCG $5,000 and 25% of tax-exempt interest $1,000. Subtract 25% of charitable contributions $2,000 and the $15,000 distribution. Basis = $40,000 + $42,500 + $5,000 + $1,000 - $2,000 - $15,000 = $72,500. The $30,000 guaranteed payment is ordinary income to Wren but does not affect her basis.",
    B: "Incorrect. $79,000 = $72,500 + $6,500, which results from not deducting the guaranteed payment in computing ordinary income (25% x $200,000 = $50,000) and omitting the tax-exempt interest. Guaranteed payments reduce the ordinary income that is allocated among partners.",
    C: "Incorrect. $102,500 adds the $30,000 guaranteed payment to basis. A guaranteed payment is compensation reported on Wren's return; it is not an allocation of partnership income and does not increase outside basis.",
    D: "Incorrect. $74,500 fails to reduce basis for Wren's $2,000 share of charitable contributions. Although charitable contributions are separately stated and deductible on the partner's own return, they reduce the partner's basis under §705(a)(2)(B)."
  },
  tags: ["§705","§707(c)","guaranteed payments","outside basis","separately stated items"]
},
{
  id: "REG-088", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Basis of partner's interest", skill: "Application", difficulty: 1,
  stem: "Xia's outside basis in XYZ Partnership is $50,000. In a nonliquidating (current) distribution, XYZ distributes to Xia $20,000 cash and land with an adjusted basis to the partnership of $45,000 and a FMV of $60,000. What are Xia's recognized gain, her basis in the land, and her remaining outside basis?",
  reference: "IRC §731(a): in a current distribution, a partner recognizes gain only to the extent cash (including deemed cash from liability relief) exceeds outside basis; no loss is recognized. §732(a): the basis of distributed property is the partnership's basis in the property, limited to the partner's outside basis after reduction for cash received. §733: outside basis is reduced (but not below zero) by cash and by the basis assigned to the distributed property.",
  options: [
    { key: "A", text: "Gain $0; land basis $45,000; outside basis $0" },
    { key: "B", text: "Gain $15,000; land basis $45,000; outside basis $0" },
    { key: "C", text: "Gain $30,000; land basis $60,000; outside basis $0" },
    { key: "D", text: "Gain $0; land basis $30,000; outside basis $0" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. The carryover basis of $45,000 exceeds Xia's remaining outside basis of $30,000 ($50,000 - $20,000 cash). Under §732(a)(2), the basis of distributed property in a current distribution cannot exceed the partner's outside basis after the cash reduction.",
    B: "Incorrect. Gain in a current distribution is triggered only by cash in excess of outside basis. The $20,000 cash is less than the $50,000 basis, so no gain is recognized; the built-in appreciation in the land is deferred, not recognized.",
    C: "Incorrect. This treats the distribution as a taxable exchange at FMV. Partnership distributions are generally nontaxable under §731, and property takes a carryover (not FMV) basis under §732.",
    D: "Correct. Cash first: outside basis $50,000 - $20,000 = $30,000; no gain because cash did not exceed basis. Land: carryover basis would be $45,000 but is limited to the remaining outside basis of $30,000. Outside basis after the distribution = $30,000 - $30,000 = $0. The $15,000 of basis that could not be transferred is effectively deferred until Xia sells the land (she holds it with a $30,000 basis and a $60,000 FMV)."
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
  stem: "Nova Corp. manufactures goods in State A and sells them in States A, B and C. Nova has sales offices and employees in States A and B. In State C it has no property or employees; its only activity is soliciting orders through independent sales representatives, with orders approved and shipped from State A. Nova's total business income is $2,000,000 and its factors are shown in the reference. State B uses an equally weighted three-factor formula (property, payroll, sales). What is Nova's business income apportioned to State B?",
  reference: "| Factor | State A | State B | State C | Total |\n|---|---|---|---|---|\n| Property | $6,000,000 | $2,000,000 | $0 | $8,000,000 |\n| Payroll | $3,000,000 | $1,000,000 | $0 | $4,000,000 |\n| Sales | $5,000,000 | $3,000,000 | $2,000,000 | $10,000,000 |\n\nPublic Law 86-272 prohibits a state from imposing a net income tax on a business whose only in-state activity is the solicitation of orders for sales of tangible personal property that are approved and filled from outside the state.",
  options: [
    { key: "A", text: "$600,000" },
    { key: "B", text: "$533,333" },
    { key: "C", text: "$500,000" },
    { key: "D", text: "$666,667" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $600,000 = $2,000,000 x 30% uses the sales factor alone (single sales factor). State B uses an equally weighted three-factor formula, so property and payroll must also be considered.",
    B: "Correct. Property factor = $2,000,000 / $8,000,000 = 25%. Payroll factor = $1,000,000 / $4,000,000 = 25%. Sales factor = $3,000,000 / $10,000,000 = 30%. Average = (25% + 25% + 30%) / 3 = 26.667%. Apportioned income = $2,000,000 x 26.667% = $533,333. State C cannot tax Nova at all because its only activity there is protected solicitation under P.L. 86-272; under a throwback rule (if State A had one), the State C sales might be thrown back to State A, but that does not affect State B's computation.",
    C: "Incorrect. $500,000 = $2,000,000 x 25% uses only the property or payroll factor. All three factors are averaged.",
    D: "Incorrect. $666,667 = $2,000,000 x 1/3 assumes income is divided equally among the three states. Apportionment is based on the factor formula, not the number of states in which the company does business, and State C lacks nexus in any event."
  },
  tags: ["state apportionment","three-factor formula","P.L. 86-272","nexus"]
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
  stem: "Vista Corp., an accrual-basis C corporation, reported 2025 net income per books of $820,000, which includes: federal income tax expense $210,000; municipal bond interest income $30,000; meals expense $40,000 (50% deductible); life insurance premiums on officers where Vista is beneficiary $15,000; book depreciation $100,000 (tax depreciation was $160,000); and a $25,000 addition to the allowance for doubtful accounts (actual write-offs during the year were $18,000, which were charged against the allowance). What is Vista's 2025 taxable income?",
  reference: "Schedule M-1 reconciliation: taxable income = book income + federal income tax expense + expenses recorded on books not deducted for tax + income for tax not on books - income on books not taxed - deductions for tax not on books. Bad debts: only the specific charge-off method is allowed for tax (§166); additions to an allowance are not deductible, but actual write-offs are. Business meals are 50% deductible (§274(n)).",
  options: [
    { key: "A", text: "$975,000" },
    { key: "B", text: "$982,000" },
    { key: "C", text: "$1,002,000" },
    { key: "D", text: "$1,000,000" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. $975,000 omits the bad debt adjustment. The book bad debt expense (the $25,000 addition to the allowance) exceeds the tax deduction (the $18,000 of actual write-offs) by $7,000, which must be added back.",
    B: "Correct. Book income $820,000. Add back: federal income tax $210,000 (permanent); nondeductible 50% of meals $20,000 (permanent); officer life insurance premiums $15,000 (permanent); excess of allowance addition over actual write-offs $25,000 - $18,000 = $7,000 (temporary). Subtract: municipal bond interest $30,000 (permanent); excess tax depreciation $160,000 - $100,000 = $60,000 (temporary). Taxable income = $820,000 + $210,000 + $20,000 + $15,000 + $7,000 - $30,000 - $60,000 = $982,000.",
    C: "Incorrect. $1,002,000 adds back the full $40,000 of meals expense. Under §274(n) 50% of business meals remains deductible, so only $20,000 is a permanent add-back.",
    D: "Incorrect. $1,000,000 adds back the entire $25,000 allowance addition without allowing the $18,000 of actual write-offs. Under the specific charge-off method, accounts actually written off during the year are deductible."
  },
  tags: ["Schedule M-1","book-tax differences","§274(n)","§166","permanent vs temporary"]
},
{
  id: "REG-098", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods", skill: "Application", difficulty: 2,
  stem: "Four calendar-year businesses are considering the overall cash method of accounting for 2025: (1) Alder Inc., a C corporation retailer with inventory whose average annual gross receipts for the prior 3 years are $22 million; (2) Birch LLP, a law partnership with no C corporation partners and average annual gross receipts of $60 million; (3) Cedar Corp., a C corporation manufacturer with average annual gross receipts of $45 million; (4) Dune Corp., a C corporation that is a tax shelter with average gross receipts of $5 million. Which of these businesses may use the cash method for 2025?",
  reference: "Tax year 2025. §448: C corporations and partnerships with a C corporation partner may not use the cash method unless they meet the gross receipts test (average annual gross receipts for the 3 prior years of $31 million or less for 2025, inflation adjusted). Qualified personal service corporations and entities without C corporation owners are exempt from the §448 limitation regardless of receipts. Tax shelters may never use the cash method. §471(c): a taxpayer meeting the gross receipts test is not required to account for inventories under §471 and may treat inventory as non-incidental materials and supplies.",
  options: [
    { key: "A", text: "Alder and Cedar only" },
    { key: "B", text: "Alder and Birch only" },
    { key: "C", text: "Birch only" },
    { key: "D", text: "Alder, Birch and Cedar only" }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Cedar's average gross receipts of $45 million exceed the $31 million threshold for 2025, so as a C corporation it is barred from the cash method by §448(a). Birch is omitted although it clearly qualifies.",
    B: "Correct. Alder: a C corporation with $22 million of average gross receipts meets the §448(c) test (not more than $31 million), and under §471(c) the presence of inventory no longer forces the accrual method for a small business. Birch: a partnership with no C corporation partner is not subject to §448 at all, so receipts are irrelevant (it is also a personal service business). Cedar: $45 million exceeds the threshold. Dune: tax shelters are prohibited from the cash method under §448(a)(3) regardless of size.",
    C: "Incorrect. This assumes any business with inventory must use the accrual method. After the TCJA, a small business meeting the gross receipts test may use the cash method and account for inventory as non-incidental materials and supplies or in accordance with its books.",
    D: "Incorrect. Cedar exceeds the $31 million gross receipts threshold. Only C corporations (and partnerships with C corporation partners) at or below the threshold, plus entities not subject to §448, may use the cash method."
  },
  tags: ["§448","cash method","gross receipts test","§471(c)","accounting methods"]
},
{
  id: "REG-099", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Limited liability companies — Tax classification options", skill: "Analysis", difficulty: 3,
  stem: "Two unrelated individuals plan to start a consulting business that will generate $400,000 of annual profit, all of which they intend to withdraw each year. They want limited liability, a single level of tax, the ability to allocate profits disproportionately to ownership percentages in some years, and the ability to include the entity's bank debt in their basis for deducting anticipated start-up losses in year 1. Which entity best meets all of these objectives?",
  reference: "Comparison points: C corporation — entity-level 21% tax plus shareholder tax on dividends. S corporation — single level of tax; allocations must be strictly pro rata to stock ownership (one class of stock); shareholder basis includes only direct loans from the shareholder, not entity-level debt. Partnership/LLC taxed as partnership — single level of tax; special allocations permitted if they have substantial economic effect (§704(b)); partners' basis includes their share of partnership liabilities (§752). Members of an LLC have limited liability under state law.",
  options: [
    { key: "A", text: "An S corporation" },
    { key: "B", text: "A C corporation" },
    { key: "C", text: "A general partnership" },
    { key: "D", text: "A limited liability company taxed as a partnership" }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. An S corporation provides limited liability and single-level taxation, but the one-class-of-stock rule requires all items to be allocated pro rata to shares, prohibiting disproportionate allocations, and under §1366(d) shareholders may not include entity-level bank debt in basis (only loans made directly by the shareholder count). Two of the four objectives fail.",
    B: "Incorrect. A C corporation provides limited liability but subjects the $400,000 of profit to the 21% corporate tax and then to a second tax when distributed as dividends. It also cannot make special allocations and start-up losses are trapped at the corporate level.",
    C: "Incorrect. A general partnership satisfies the tax objectives (single level of tax, §704(b) special allocations, and §752 basis for partnership debt) but general partners are personally liable for partnership obligations, failing the limited liability objective.",
    D: "Correct. An LLC taxed as a partnership offers state-law limited liability to all members, a single level of tax, special allocations under §704(b) if they have substantial economic effect, and inclusion of each member's share of LLC liabilities in outside basis under §752, which supports the deduction of year-1 losses (subject to at-risk and passive rules). All four objectives are met."
  },
  tags: ["entity choice","§704(b)","§752","S corporation","LLC"]
},
{
  id: "REG-100", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Tax-exempt organizations — Types and filing requirements", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Which of the following statements regarding tax-exempt organizations is correct?",
  reference: "",
  options: [
    { key: "A", text: "A §501(c)(3) public charity may engage in an unlimited amount of lobbying as long as it does not support or oppose candidates for public office." },
    { key: "B", text: "A private foundation is subject to a 1.39% excise tax on its net investment income and must distribute a minimum amount annually for charitable purposes." },
    { key: "C", text: "An organization with gross receipts normally of $50,000 or less is exempt from any annual filing requirement with the IRS." },
    { key: "D", text: "Contributions to a §501(c)(4) social welfare organization are deductible as charitable contributions by the donor." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. A §501(c)(3) organization may not have lobbying as a substantial part of its activities (or must stay within the §501(h) expenditure limits if it elects), and it is absolutely prohibited from participating in political campaigns. Unlimited lobbying would jeopardize exemption.",
    B: "Correct. Private foundations (§509) are §501(c)(3) organizations that do not qualify as public charities. They are subject to a 1.39% excise tax on net investment income under §4940, a minimum distribution requirement of about 5% of net investment assets under §4942, and other excise taxes on self-dealing, excess business holdings, jeopardizing investments and taxable expenditures.",
    C: "Incorrect. Small organizations with gross receipts normally of $50,000 or less are relieved of filing Form 990 or 990-EZ, but they must file the electronic notice Form 990-N (e-Postcard) annually. Failure to file for three consecutive years results in automatic revocation of exempt status.",
    D: "Incorrect. Charitable contribution deductions under §170(c) are available for gifts to §501(c)(3) organizations (and certain others such as governmental units and veterans' organizations), not to §501(c)(4) social welfare organizations, which may engage in unlimited lobbying."
  },
  tags: ["§501(c)(3)","private foundation","§4940","Form 990-N","§501(c)(4)"]
},
{
  id: "REG-101", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Ethics and responsibilities in tax practice — Tax return preparer rules and penalties", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Which of the following individuals is a 'tax return preparer' for purposes of the preparer penalty provisions of the Internal Revenue Code?",
  reference: "IRC §7701(a)(36) and Reg. §301.7701-15: a tax return preparer is any person who prepares for compensation, or who employs one or more persons to prepare for compensation, all or a substantial portion of any return or claim for refund. A person is not a preparer merely because he furnishes typing, reproducing or other mechanical assistance; prepares a return for his employer (or an officer or employee of the employer); prepares a return as a fiduciary; or prepares a return without compensation.",
  options: [
    { key: "A", text: "A bookkeeper employed by Dell Corp. who prepares Dell's Form 1120 as part of her regular duties." },
    { key: "B", text: "A retired accountant who prepares his neighbor's Form 1040 each year for free." },
    { key: "C", text: "An attorney who, for a fee, advises a client on the tax treatment of a $2 million transaction that constitutes the principal item on the client's return, but does not sign the return." },
    { key: "D", text: "A data-entry clerk at a CPA firm who types the figures supplied by the CPA into tax software." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. An employee who prepares a return for his or her employer is expressly excluded from the definition of tax return preparer under Reg. §301.7701-15(f)(1)(ii). The employer is responsible for its own return.",
    B: "Incorrect. Compensation is an essential element of the definition. A person who prepares a return without compensation, such as a volunteer or a relative helping for free, is not a tax return preparer subject to §6694 and §6695.",
    C: "Correct. A person who gives advice for compensation on a specific entry that is a substantial portion of the return is a nonsigning tax return preparer under Reg. §301.7701-15(b)(2), even though he did not sign the return. Nonsigning preparers are subject to the §6694 understatement penalties.",
    D: "Incorrect. Furnishing typing, reproducing or other mechanical assistance is excluded from the definition. The clerk exercises no judgment over the substantive tax positions on the return."
  },
  tags: ["§7701(a)(36)","tax return preparer","nonsigning preparer","Reg. §301.7701-15"]
},
{
  id: "REG-102", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Licensing and disciplinary systems — State boards of accountancy", skill: "Remembering & Understanding", difficulty: 1,
  stem: "A CPA licensed in State X plans to provide tax and attest services to clients located in State Y, and also wants to know which body may revoke her license if she is later found to have violated professional standards. Which of the following statements is correct?",
  reference: "Uniform Accountancy Act (UAA): state boards of accountancy issue CPA licenses, set continuing professional education (CPE) requirements, and may censure, suspend or revoke a license after notice and a hearing. Under the UAA 'substantial equivalency' (mobility) provisions, a CPA with a valid license in her principal place of business may practice in another state without obtaining a license or notifying that state's board, but she is subject to the disciplinary authority of that state's board for services performed there.",
  options: [
    { key: "A", text: "The AICPA, as the national licensing body, may revoke her CPA license for violations of the Code of Professional Conduct." },
    { key: "B", text: "She must obtain a reciprocal license from State Y before performing any services for State Y clients." },
    { key: "C", text: "Only the State X board of accountancy may discipline her, regardless of where the services are performed." },
    { key: "D", text: "She may practice in State Y under mobility without a State Y license, but both the State X and State Y boards may impose discipline, and only a state board can revoke her license." }
  ],
  answer: "D",
  explanations: {
    A: "Incorrect. The AICPA is a voluntary professional association; it may expel or suspend a member from the AICPA but has no authority to issue or revoke a CPA license. Licensing is a function of state boards of accountancy under state law.",
    B: "Incorrect. Under the UAA's substantial-equivalency (mobility) provisions adopted by virtually all states, a CPA licensed in her principal place of business may practice across state lines without a reciprocal license, although some states require a firm permit for attest services.",
    C: "Incorrect. By practicing in State Y under mobility the CPA consents to the jurisdiction and disciplinary authority of the State Y board for services performed in State Y. The State X board retains authority as the licensing board.",
    D: "Correct. The state board of accountancy is the only body with authority to grant, suspend or revoke a CPA license. Mobility permits practice in other states without a separate license, but the CPA is subject to the disciplinary authority of both her licensing board and the board of the state where she practices."
  },
  tags: ["state board of accountancy","Uniform Accountancy Act","mobility","substantial equivalency"]
},
{
  id: "REG-103", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Audits, appeals and the judicial process", skill: "Remembering & Understanding", difficulty: 2,
  stem: "After an office examination of Nia's 2024 Form 1040, the IRS examiner proposed a $9,000 deficiency. Nia disagrees with the proposed adjustment. Which of the following statements about the administrative and judicial options available to her is correct?",
  reference: "IRS procedure: a 30-day letter (preliminary notice) offers the taxpayer the opportunity to request a conference with the IRS Independent Office of Appeals; a formal written protest is required if the total proposed adjustment exceeds $25,000, while a small case request suffices for $25,000 or less. If no agreement is reached, the IRS issues a statutory notice of deficiency (90-day letter). The Tax Court's small tax case (S case) procedure is available when the amount in dispute is $50,000 or less for any one year; S case decisions cannot be appealed.",
  options: [
    { key: "A", text: "She may request an Appeals conference in response to the 30-day letter with a small case request rather than a formal written protest, and if she later petitions the Tax Court she may elect the small tax case procedure, whose decision is final." },
    { key: "B", text: "She must pay the $9,000 deficiency before Appeals will consider her case." },
    { key: "C", text: "If she elects the small tax case procedure in the Tax Court, she may appeal an adverse decision to the U.S. Court of Appeals." },
    { key: "D", text: "She must file a petition with the Tax Court within 30 days of the 30-day letter or the deficiency will be assessed." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Because the proposed adjustment ($9,000) does not exceed $25,000, a brief small case request is sufficient to obtain Appeals consideration. If the case proceeds to a notice of deficiency, the $9,000 dispute is within the $50,000 limit for the Tax Court's S case procedure, which is informal and whose decisions are neither appealable nor precedential.",
    B: "Incorrect. Appeals consideration of a proposed deficiency does not require prepayment. Prepayment is required only for refund litigation in the U.S. District Court or the Court of Federal Claims.",
    C: "Incorrect. A taxpayer who elects the small tax case procedure gives up the right to appeal. Decisions in S cases are final and not reviewable by any other court.",
    D: "Incorrect. The 30-day letter invites an Appeals request; it is not a deficiency notice. The 90-day period to petition the Tax Court begins only when the statutory notice of deficiency is issued under §6212."
  },
  tags: ["30-day letter","Appeals","small tax case","§7463","audit process"]
},
{
  id: "REG-104", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Substantiation and disclosure", skill: "Application", difficulty: 2,
  stem: "Jorge's 2025 Form 1040 takes a deduction for which there is a reasonable basis (roughly a 25% chance of being sustained) but not substantial authority. The position is not a tax shelter item. Jorge wants to avoid the §6662 substantial understatement penalty if the deduction is later disallowed. Which of the following is correct?",
  reference: "IRC §6662(d)(2)(B): the understatement is reduced by items for which (i) there is or was substantial authority, or (ii) the relevant facts are adequately disclosed on the return or a statement attached to the return and there is a reasonable basis for the position. Adequate disclosure is made on Form 8275 (or Form 8275-R for positions contrary to a regulation), or in accordance with the annual revenue procedure identifying items adequately disclosed on the return itself. Disclosure does not protect positions lacking a reasonable basis, or tax shelter items.",
  options: [
    { key: "A", text: "Jorge should attach Form 8275 disclosing the relevant facts; with a reasonable basis and adequate disclosure, the item is removed from the understatement for penalty purposes." },
    { key: "B", text: "No disclosure is needed, because a reasonable basis alone is sufficient to avoid the substantial understatement penalty." },
    { key: "C", text: "Disclosure is useless because a position must have substantial authority to be disclosed on Form 8275." },
    { key: "D", text: "Jorge should attach Form 8275-R, which is the form required for all disclosed positions on individual returns." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. For a non-shelter item, adequate disclosure on Form 8275 combined with a reasonable basis takes the item out of the computation of the understatement under §6662(d)(2)(B)(ii)(II). Disclosure also protects the preparer under §6694(a)(2)(B).",
    B: "Incorrect. Reasonable basis without disclosure does not reduce the understatement. The undisclosed position would need substantial authority (a roughly 40% likelihood) to be excluded from the understatement.",
    C: "Incorrect. Form 8275 exists precisely for positions that lack substantial authority but have a reasonable basis. A position that already has substantial authority does not need disclosure to avoid the penalty.",
    D: "Incorrect. Form 8275-R is used only for positions that are contrary to a Treasury regulation. An ordinary position with a reasonable basis is disclosed on Form 8275."
  },
  tags: ["Form 8275","disclosure","§6662(d)(2)(B)","reasonable basis","substantial authority"]
},
{
  id: "REG-105", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Substantiation and disclosure", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Mei, a U.S. citizen living in Texas, held a savings account at a Singapore bank with a highest balance of $7,000 during 2025 and a brokerage account at a Swiss bank with a highest balance of $6,000 during 2025. She received $150 of interest from these accounts. Which of the following is correct regarding her reporting obligations for 2025?",
  reference: "Bank Secrecy Act (31 U.S.C. §5314): a U.S. person with a financial interest in, or signature authority over, foreign financial accounts must file FinCEN Form 114 (FBAR) electronically with the Financial Crimes Enforcement Network if the aggregate value of all such accounts exceeded $10,000 at any time during the calendar year. The FBAR is due April 15 with an automatic extension to October 15. It is separate from Form 8938 (FATCA), which is filed with the Form 1040 and has higher thresholds (e.g., $50,000 at year-end for an unmarried taxpayer living in the U.S.). Interest on foreign accounts is taxable and Schedule B asks about foreign accounts.",
  options: [
    { key: "A", text: "No FBAR is required because neither account individually exceeded $10,000." },
    { key: "B", text: "An FBAR (FinCEN Form 114) is required because the aggregate value of the accounts exceeded $10,000; it is filed with FinCEN, not attached to the Form 1040, and the $150 of interest is reported on her return." },
    { key: "C", text: "An FBAR is required only if the foreign interest income exceeds $1,500, the Schedule B threshold." },
    { key: "D", text: "An FBAR is not required, but she must file Form 8938 because she holds any foreign financial asset." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. The $10,000 test is applied to the aggregate value of all foreign financial accounts at any point during the year. $7,000 + $6,000 = $13,000 exceeds the threshold, so the FBAR is required even though no single account exceeded $10,000.",
    B: "Correct. The aggregate maximum value ($13,000) exceeded $10,000, so Mei must file FinCEN Form 114 electronically through the BSA E-Filing System by April 15, 2026 (automatically extended to October 15). The FBAR is not part of the tax return, but the interest is includible in gross income and Schedule B Part III requires her to answer the foreign-account question.",
    C: "Incorrect. The FBAR requirement is based on account value, not on the amount of income earned. Even an account producing no income must be reported if the aggregate value threshold is exceeded.",
    D: "Incorrect. Form 8938 has much higher thresholds ($50,000 at year-end or $75,000 at any time for an unmarried taxpayer living in the U.S.), which Mei does not meet. The FBAR, with its $10,000 threshold, is the applicable filing."
  },
  tags: ["FBAR","FinCEN Form 114","foreign bank accounts","Form 8938"]
},
{
  id: "REG-106", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Authoritative hierarchy", skill: "Remembering & Understanding", difficulty: 1,
  stem: "A CPA researching the treatment of a client's transaction finds the following authorities that address the issue: a Tax Court memorandum decision; a private letter ruling issued to another taxpayer; a final Treasury regulation; and an IRS publication. Which of the following correctly ranks these sources by their authoritative weight for the client's position?",
  reference: "",
  options: [
    { key: "A", text: "Final Treasury regulation, Tax Court memorandum decision, private letter ruling, IRS publication." },
    { key: "B", text: "Private letter ruling, final Treasury regulation, Tax Court memorandum decision, IRS publication." },
    { key: "C", text: "IRS publication, final Treasury regulation, private letter ruling, Tax Court memorandum decision." },
    { key: "D", text: "Tax Court memorandum decision, IRS publication, final Treasury regulation, private letter ruling." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The Internal Revenue Code is the highest authority, followed by final (and temporary) Treasury regulations, which carry the force of law unless invalid. Court decisions, including Tax Court memorandum opinions, are binding precedent within their jurisdiction. A private letter ruling binds the IRS only as to the taxpayer who requested it (§6110(k)(3)), although it may be cited as evidence of substantial authority under Reg. §1.6662-4(d). IRS publications and instructions are helpful explanations but are not authority and cannot be relied on to avoid penalties.",
    B: "Incorrect. A private letter ruling is issued to a specific taxpayer and may not be cited as precedent by others. It ranks well below regulations and court decisions.",
    C: "Incorrect. IRS publications are the lowest form of guidance; they summarize the IRS view but are not authority and taxpayers cannot rely on them to establish substantial authority.",
    D: "Incorrect. Court decisions do not outrank a valid Treasury regulation on the same issue unless the court holds the regulation invalid, and IRS publications never outrank regulations."
  },
  tags: ["authoritative hierarchy","Treasury regulations","private letter ruling","Tax Court memorandum","IRS publications"]
},
{
  id: "REG-107", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Federal tax procedures — Substantiation and disclosure", skill: "Application", difficulty: 2,
  stem: "Rosa, who itemizes, made the following charitable contributions during 2025 to qualified public charities: (1) $200 cash to her church, for which she has a canceled check but no written acknowledgment; (2) $600 cash to a food bank, for which she has a bank record but no written acknowledgment from the charity; (3) used furniture valued at $3,000 given to a thrift shop, with a receipt from the charity and Form 8283 Section A completed; (4) a painting valued at $9,000 given to a museum, with a written acknowledgment but no appraisal. Which contributions are adequately substantiated?",
  reference: "IRC §170(f)(8) and (f)(11) and Reg. §1.170A-13: cash contributions of any amount require a bank record or written communication from the donee; any single contribution of $250 or more (cash or property) additionally requires a contemporaneous written acknowledgment (CWA) from the donee obtained by the earlier of the return filing date or due date. Noncash contributions over $500 require Form 8283; noncash contributions over $5,000 (other than publicly traded securities) require a qualified appraisal and completion of Form 8283 Section B.",
  options: [
    { key: "A", text: "1 and 3 only" },
    { key: "B", text: "1, 2 and 3 only" },
    { key: "C", text: "1, 3 and 4 only" },
    { key: "D", text: "1, 2, 3 and 4" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. (1) A $200 cash gift is below the $250 threshold, so the canceled check (a bank record) suffices. (2) $600 is $250 or more, so a bank record alone is insufficient; a CWA stating the amount and whether goods or services were provided is required. (3) $3,000 of furniture exceeds $500 but not $5,000: a receipt/CWA plus Form 8283 Section A is sufficient. (4) The $9,000 painting exceeds $5,000 and therefore requires a qualified appraisal and Form 8283 Section B; without an appraisal the deduction is disallowed.",
    B: "Incorrect. Contribution 2 is not substantiated. A contemporaneous written acknowledgment from the donee is required for any single contribution of $250 or more; the bank record satisfies only the general recordkeeping rule for cash gifts.",
    C: "Incorrect. Contribution 4 is not substantiated. A noncash gift valued over $5,000 requires a qualified appraisal by a qualified appraiser; the written acknowledgment alone does not satisfy §170(f)(11)(C).",
    D: "Incorrect. Contributions 2 and 4 each fail a specific statutory substantiation requirement: the CWA rule for gifts of $250 or more and the qualified appraisal rule for noncash gifts over $5,000, respectively."
  },
  tags: ["§170(f)(8)","contemporaneous written acknowledgment","Form 8283","qualified appraisal","substantiation"]
},
{
  id: "REG-108", area: "I", areaName: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  topic: "Legal duties and responsibilities — Privileged communications, confidentiality and privacy acts", skill: "Application", difficulty: 2,
  stem: "Kern, a CPA, prepared individual returns for 300 clients in 2026. Without obtaining any consent, Kern (1) provided a list of clients' names, addresses and income levels to a financial planning firm in exchange for referral fees; (2) sent client return files to a second CPA within Kern's own firm to review the returns before filing; and (3) produced a client's return in response to a valid federal court subpoena. Which of these actions violates IRC §7216?",
  reference: "IRC §7216 and Reg. §301.7216-1 through -3: a tax return preparer who knowingly or recklessly discloses or uses tax return information for any purpose other than preparing the return is guilty of a misdemeanor (fine up to $1,000 and/or one year in prison per violation) and is subject to a civil penalty under §6713 of $250 per disclosure (up to $10,000 per year; higher for identity-theft-related disclosures). Exceptions include disclosures pursuant to a court order or subpoena, disclosures to other preparers or officers/employees of the same firm for purposes of preparing the return, and disclosures made with the taxpayer's written consent in the prescribed format.",
  options: [
    { key: "A", text: "Action 1 only" },
    { key: "B", text: "Actions 1 and 2 only" },
    { key: "C", text: "Actions 1 and 3 only" },
    { key: "D", text: "Actions 1, 2 and 3" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Selling or sharing client tax return information with an unrelated financial planning firm for referral fees is a use and disclosure for a purpose other than return preparation without the client's written consent, which violates §7216. Actions 2 and 3 fall within regulatory exceptions.",
    B: "Incorrect. Disclosure to another member of the same firm for the purpose of preparing or reviewing the return is expressly permitted by Reg. §301.7216-2(c). No consent is required for intra-firm review.",
    C: "Incorrect. Disclosure pursuant to a court order or subpoena is a listed exception under Reg. §301.7216-2(f). Kern must comply with a valid subpoena and does not violate §7216 by doing so.",
    D: "Incorrect. Only the first action is prohibited. Both intra-firm disclosures for return preparation and disclosures compelled by a court are excepted from §7216."
  },
  tags: ["§7216","§6713","tax return information","confidentiality","privacy"]
},
{
  id: "REG-109", area: "II", areaName: "Business Law",
  topic: "Agency — Duties and liabilities of agents and principals", skill: "Application", difficulty: 2,
  stem: "Trent is a delivery driver employed by Pax Foods. While making deliveries on his assigned route, Trent negligently ran a red light and injured a pedestrian, Ula. On the same day, after finishing his route, Trent drove the company van 40 miles to visit a friend and negligently struck a cyclist, Vin. Which of the following is correct regarding Pax Foods' liability?",
  reference: "Respondeat superior: a principal (employer) is liable for the torts of its agent (employee) committed within the scope of employment. A minor deviation from the assigned task (a 'detour') is generally within the scope of employment; a substantial departure for purely personal purposes (a 'frolic') is outside it. The agent remains personally liable for his own torts in all cases. A principal is generally not liable for the torts of an independent contractor.",
  options: [
    { key: "A", text: "Pax is liable to Ula but not to Vin; Trent is personally liable to both." },
    { key: "B", text: "Pax is liable to both Ula and Vin because Trent was driving a company van in both instances." },
    { key: "C", text: "Pax is liable to neither Ula nor Vin because Trent, not Pax, committed the negligent acts." },
    { key: "D", text: "Pax is liable to Ula and Vin, and Trent is relieved of personal liability because he was acting as an agent." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The injury to Ula occurred while Trent was performing his assigned deliveries, squarely within the scope of employment, so Pax is vicariously liable under respondeat superior. The 40-mile personal trip after finishing the route is a frolic (a substantial deviation for personal purposes), so Pax is not liable to Vin. Trent, as the tortfeasor, is personally liable to both victims.",
    B: "Incorrect. Use of the employer's vehicle does not by itself bring conduct within the scope of employment. The test is whether the agent was performing work for the principal; a substantial personal trip is a frolic outside the scope of employment.",
    C: "Incorrect. Vicarious liability under respondeat superior imposes liability on the principal for an employee's negligence committed within the scope of employment even though the principal itself did nothing wrong.",
    D: "Incorrect. An agent is always personally liable for his own torts. The principal's vicarious liability is in addition to, not in place of, the agent's liability; Pax may seek indemnification from Trent."
  },
  tags: ["respondeat superior","scope of employment","frolic and detour","agency","tort liability"]
},
{
  id: "REG-110", area: "II", areaName: "Business Law",
  topic: "Contracts — Performance and discharge", skill: "Application", difficulty: 2,
  stem: "Beam Builders contracted to construct an office for Carr for $500,000. Beam completed the building, but used a brand of interior door hardware different from that specified; the substitution was in good faith, the hardware was of equal quality, and it would cost $4,000 to replace. Carr refused to pay anything, claiming Beam had not performed. Separately, Carr owed Dunn $20,000 on an unrelated disputed invoice; Carr sent Dunn a check for $15,000 marked 'payment in full,' which Dunn cashed. Which of the following is correct?",
  reference: "Common law: a party who has rendered substantial performance (performance that deviates only in minor, good-faith respects) is entitled to the contract price less damages caused by the defects; a material breach excuses the other party's performance. An accord and satisfaction discharges a disputed (unliquidated) debt when the creditor accepts a payment tendered in good faith as full satisfaction.",
  options: [
    { key: "A", text: "Beam may recover $496,000, and Carr's $20,000 debt to Dunn is discharged by accord and satisfaction." },
    { key: "B", text: "Beam may recover nothing because it did not perform exactly as specified, and Carr still owes Dunn $5,000." },
    { key: "C", text: "Beam may recover $500,000 because the deviation was immaterial, and Carr still owes Dunn $5,000 because part payment of a debt is never consideration for discharging the balance." },
    { key: "D", text: "Beam may recover $496,000, but Carr still owes Dunn $5,000 because an accord and satisfaction requires a signed writing." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Beam rendered substantial performance: the deviation was minor, in good faith and of equal quality, so Carr's duty to pay was not excused; Beam recovers the contract price less the $4,000 cost of correcting the defect. Because the Dunn invoice was disputed, Carr's tender of $15,000 as full payment and Dunn's cashing of the check constitute an accord and satisfaction discharging the entire $20,000 claim.",
    B: "Incorrect. The doctrine of substantial performance prevents forfeiture where a builder has performed in good faith with only minor deviations. Carr may deduct the cost of the defect but cannot refuse payment entirely.",
    C: "Incorrect. Substantial performance entitles the builder to the contract price less the damages caused by the deviation, not the full price. And the pre-existing duty rule (part payment is not consideration) applies only to liquidated, undisputed debts; here the invoice was disputed, so the compromise is supported by consideration.",
    D: "Incorrect. Beam's recovery is stated correctly, but an accord and satisfaction does not require a signed writing. Cashing a check conspicuously marked 'payment in full' tendered in good faith on a disputed claim discharges the debt (see also UCC §3-311)."
  },
  tags: ["substantial performance","accord and satisfaction","discharge","material breach"]
},
{
  id: "REG-111", area: "II", areaName: "Business Law",
  topic: "Contracts — Breach and remedies", skill: "Application", difficulty: 2,
  stem: "On March 1, Sable agreed in writing to sell her rare 1960 sports car to Todd for $80,000, delivery and payment on June 1. On April 10, Sable told Todd she had decided to keep the car and would not deliver it. On April 12, Todd learned that comparable cars were selling for $95,000. The contract contains a clause stating that if either party fails to perform, the breaching party will pay the other $500 as liquidated damages. Which of the following is correct regarding Todd's rights?",
  reference: "Anticipatory repudiation: a clear, unequivocal statement before the performance date that a party will not perform is a present breach; the nonbreaching party may sue immediately, suspend its own performance, or await performance for a commercially reasonable time. Specific performance is available where the subject matter is unique (land, rare goods) and money damages are inadequate (UCC §2-716). A liquidated damages clause is enforceable if damages were difficult to estimate at contracting and the amount is a reasonable forecast; an amount so small or large as to be unreasonable is unenforceable.",
  options: [
    { key: "A", text: "Todd may sue immediately for breach and, because the car is unique, may obtain specific performance; the $500 liquidated damages clause is unenforceable as an unreasonable forecast of actual loss." },
    { key: "B", text: "Todd must wait until June 1 to sue, because a breach cannot occur before the date performance is due." },
    { key: "C", text: "Todd may sue immediately but is limited to the $500 liquidated damages provided in the contract." },
    { key: "D", text: "Todd may sue immediately for $15,000 in damages, but specific performance is unavailable because the contract is for the sale of goods." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Sable's unequivocal statement on April 10 is an anticipatory repudiation, allowing Todd to treat the contract as breached immediately. A rare classic car is unique goods, so specific performance is available under UCC §2-716. A $500 liquidated damages amount for an $80,000 contract on a unique asset is not a reasonable pre-estimate of loss; courts refuse to enforce clauses that are unreasonably low or high, leaving Todd to his actual remedies.",
    B: "Incorrect. Under the doctrine of anticipatory repudiation, an unequivocal refusal to perform before the due date is treated as an immediate breach (UCC §2-610). Todd need not wait until June 1.",
    C: "Incorrect. Liquidated damages clauses are enforced only when the amount is a reasonable forecast of probable loss. A $500 figure bears no relation to the likely loss on an $80,000 unique-asset contract and will be disregarded.",
    D: "Incorrect. Specific performance is available for contracts for the sale of goods when the goods are unique or in other proper circumstances (UCC §2-716(1)). A rare 1960 sports car is a classic example of unique goods."
  },
  tags: ["anticipatory repudiation","specific performance","liquidated damages","UCC §2-610","UCC §2-716"]
},
{
  id: "REG-112", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Qualified health plans (ACA)", skill: "Remembering & Understanding", difficulty: 2,
  stem: "Delta Corp. has 120 full-time employees. In 2025 Delta did not offer any health coverage to its employees, and 15 of its full-time employees purchased coverage through the Health Insurance Marketplace and received a premium tax credit. Which of the following statements is correct?",
  reference: "Patient Protection and Affordable Care Act: an applicable large employer (ALE) is one that employed on average at least 50 full-time employees (including full-time equivalents) in the prior year. Under IRC §4980H(a), an ALE that fails to offer minimum essential coverage to at least 95% of its full-time employees (and their dependents) owes an employer shared responsibility payment if at least one full-time employee receives a premium tax credit; the payment is computed on all full-time employees minus the first 30. Under §4980H(b), an ALE that offers coverage that is unaffordable or lacks minimum value owes a payment only for each full-time employee who actually receives a credit. ALEs must file Forms 1094-C/1095-C. The individual shared responsibility payment has been $0 since 2019.",
  options: [
    { key: "A", text: "Delta owes an employer shared responsibility payment computed on 90 full-time employees (120 less 30), because it is an applicable large employer that offered no coverage and at least one employee received a premium tax credit." },
    { key: "B", text: "Delta owes no payment because the individual mandate penalty was reduced to zero." },
    { key: "C", text: "Delta owes an employer shared responsibility payment computed only on the 15 employees who received a premium tax credit." },
    { key: "D", text: "Delta owes no payment because employers are not required to offer health coverage; the ACA imposes obligations only on employees." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. With 120 full-time employees Delta is an ALE. Because it offered no minimum essential coverage and at least one full-time employee received a premium tax credit, the §4980H(a) 'no offer' payment applies, computed on all full-time employees after excluding the first 30: 120 - 30 = 90 employees times the annual inflation-adjusted amount per employee.",
    B: "Incorrect. The individual shared responsibility payment was reduced to $0 beginning in 2019, but the employer shared responsibility provisions of §4980H remain fully in effect and are separately enforced.",
    C: "Incorrect. A payment measured only by the employees who actually receive a credit is the §4980H(b) payment, which applies when an ALE offers coverage that is unaffordable or does not provide minimum value. When no coverage is offered at all, the broader §4980H(a) payment applies.",
    D: "Incorrect. Although no statute literally requires an employer to offer coverage, an ALE that does not do so is subject to the employer shared responsibility payment when a full-time employee receives a premium tax credit."
  },
  tags: ["Affordable Care Act","§4980H","applicable large employer","employer shared responsibility","premium tax credit"]
},
{
  id: "REG-113", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Anti-bribery (FCPA)", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Nord Inc., a U.S. corporation whose stock is listed on the NYSE, sells equipment in a foreign country. Which of the following payments by Nord violates the anti-bribery provisions of the Foreign Corrupt Practices Act of 1977?",
  reference: "FCPA anti-bribery provisions (15 U.S.C. §78dd-1 et seq.): it is unlawful for issuers, domestic concerns and their agents to corruptly offer, pay or promise anything of value to a foreign government official to influence an official act or secure any improper advantage in order to obtain or retain business. Exception: facilitating ('grease') payments to expedite routine, nondiscretionary governmental actions (e.g., processing permits, providing police protection). Affirmative defenses: payments lawful under the written law of the foreign country, and reasonable, bona fide expenditures directly related to product demonstration or contract performance. The accounting provisions require issuers to keep accurate books and records and maintain internal controls.",
  options: [
    { key: "A", text: "A $200 payment to a customs clerk to expedite the routine processing of import paperwork for goods that fully comply with local law." },
    { key: "B", text: "Reimbursement of a foreign official's reasonable travel expenses to visit Nord's factory to inspect the equipment being purchased." },
    { key: "C", text: "A $50,000 payment, routed through a local consultant, to the foreign minister of infrastructure to award Nord a government contract." },
    { key: "D", text: "A payment to a foreign official that is expressly permitted under the written laws of the foreign country." }
  ],
  answer: "C",
  explanations: {
    A: "Incorrect. A small payment to expedite a routine, nondiscretionary governmental action (a facilitating payment) is excepted from the FCPA anti-bribery prohibition, although it must still be accurately recorded in the issuer's books.",
    B: "Incorrect. Reasonable and bona fide expenditures, such as travel and lodging directly related to the demonstration of products or the performance of a contract, are an affirmative defense under the FCPA.",
    C: "Correct. A corrupt payment to a foreign official to obtain a government contract is the core violation of the FCPA. Routing the payment through a third-party consultant does not avoid liability; the Act covers payments made 'directly or indirectly' with knowledge (including conscious disregard) that the money will be passed to an official.",
    D: "Incorrect. Payments that are lawful under the written laws and regulations of the foreign country are an affirmative defense under the FCPA. (Note that local custom or unwritten practice does not qualify.)"
  },
  tags: ["Foreign Corrupt Practices Act","anti-bribery","facilitating payments","foreign official"]
},
{
  id: "REG-114", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Bankruptcy (types, discharge and avoidance)", skill: "Remembering & Understanding", difficulty: 2,
  stem: "Which of the following statements regarding the federal Bankruptcy Code, as amended by the Bankruptcy Abuse Prevention and Consumer Protection Act of 2005, is correct?",
  reference: "Chapter 7 (liquidation): available to individuals and business entities; a trustee liquidates nonexempt assets; an individual debtor whose income exceeds the state median may be subject to the 'means test' and dismissed or converted to Chapter 13; individuals must complete credit counseling before filing. Chapter 11 (reorganization): the debtor usually remains in possession and proposes a plan. Chapter 13 (adjustment of debts of an individual with regular income): the debtor keeps assets and pays creditors under a 3- to 5-year plan; corporations and partnerships are ineligible. Involuntary petitions may be filed under Chapters 7 and 11 (not 13) by 3 or more creditors holding unsecured, undisputed claims aggregating at least $21,050 (as adjusted April 1, 2025), or by one such creditor if the debtor has fewer than 12 creditors.",
  options: [
    { key: "A", text: "A corporation may file a voluntary petition under Chapter 13 if its debts are below the statutory limits." },
    { key: "B", text: "An individual debtor whose current monthly income exceeds the applicable state median may have a Chapter 7 case dismissed or converted to Chapter 13 under the means test." },
    { key: "C", text: "Creditors may file an involuntary petition against an individual under Chapter 13 if the debtor is generally not paying debts as they come due." },
    { key: "D", text: "A discharge in Chapter 7 releases the debtor from all debts, including domestic support obligations and debts obtained by fraud." }
  ],
  answer: "B",
  explanations: {
    A: "Incorrect. Chapter 13 is available only to individuals (including sole proprietors) with regular income. Corporations and partnerships must use Chapter 7 or Chapter 11.",
    B: "Correct. BAPCPA introduced the means test in §707(b). If the individual's current monthly income exceeds the state median and disposable income exceeds specified thresholds, a presumption of abuse arises and the Chapter 7 case may be dismissed or, with the debtor's consent, converted to Chapter 13.",
    C: "Incorrect. Involuntary petitions are permitted only under Chapters 7 and 11. A Chapter 13 case can be commenced only by the debtor's voluntary petition.",
    D: "Incorrect. §523(a) excepts numerous debts from discharge, including domestic support obligations, debts obtained by fraud or false financial statements, most taxes, student loans (absent undue hardship), and debts for willful and malicious injury or drunk-driving injuries."
  },
  tags: ["bankruptcy","BAPCPA","means test","Chapter 7","Chapter 11","Chapter 13","involuntary petition"]
},
{
  id: "REG-115", area: "II", areaName: "Business Law",
  topic: "Federal laws and regulations — Employment taxes and worker classification", skill: "Application", difficulty: 2,
  stem: "Yara, single, earned $210,000 of wages from a single employer in 2025. What amount of Social Security tax, Medicare tax and Additional Medicare tax must the employer withhold from Yara's wages for the year, and how much must the employer itself pay in matching FICA tax?",
  reference: "Tax year 2025. FICA (§3101, §3111): employee and employer each pay Social Security tax of 6.2% on wages up to the wage base of $176,100, and Medicare tax of 1.45% on all wages. Additional Medicare tax (§3101(b)(2)): 0.9% on wages over $200,000 ($250,000 MFJ, $125,000 MFS) is imposed on the employee only; the employer must withhold it on wages it pays in excess of $200,000 regardless of the employee's filing status, but there is no employer match.",
  options: [
    { key: "A", text: "Withheld: $10,918.20 Social Security, $3,045.00 Medicare, $90.00 Additional Medicare; employer match: $13,963.20." },
    { key: "B", text: "Withheld: $13,020.00 Social Security, $3,045.00 Medicare, $90.00 Additional Medicare; employer match: $16,155.00." },
    { key: "C", text: "Withheld: $10,918.20 Social Security, $3,045.00 Medicare, $0 Additional Medicare; employer match: $13,963.20." },
    { key: "D", text: "Withheld: $10,918.20 Social Security, $3,045.00 Medicare, $90.00 Additional Medicare; employer match: $14,053.20." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Social Security: 6.2% x $176,100 wage base = $10,918.20. Medicare: 1.45% x $210,000 = $3,045.00. Additional Medicare: 0.9% x ($210,000 - $200,000) = $90.00, withheld from the employee only. Employer match = $10,918.20 + $3,045.00 = $13,963.20; the employer does not match the Additional Medicare tax.",
    B: "Incorrect. This applies the 6.2% Social Security rate to all $210,000 of wages. Social Security tax stops at the $176,100 wage base for 2025; only Medicare tax has no ceiling.",
    C: "Incorrect. The employer is required to withhold the 0.9% Additional Medicare tax on wages it pays to an employee in excess of $200,000 in the calendar year, without regard to filing status, even though the employee's actual liability is reconciled on Form 8959.",
    D: "Incorrect. The employer match excludes the Additional Medicare tax. The 0.9% tax is imposed only on the employee under §3101(b)(2); there is no corresponding employer tax under §3111."
  },
  tags: ["FICA","Social Security wage base","Additional Medicare tax","employment taxes","withholding"]
},
{
  id: "REG-116", area: "II", areaName: "Business Law",
  topic: "Business structure — Selection, formation, operation and termination", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Before Zenith Corp. was incorporated, its promoter, Paz, signed a one-year office lease in Zenith's name with Landlord. Zenith was incorporated two weeks later when its articles of incorporation were filed, and its board never adopted or discussed the lease, although Zenith moved into the office. Which of the following is correct?",
  reference: "Revised Model Business Corporation Act: a corporation comes into existence when the articles of incorporation are filed by the secretary of state. A promoter is personally liable on pre-incorporation contracts made on behalf of the proposed corporation unless the contract provides otherwise. The corporation is not liable on such contracts unless it adopts them (expressly, or impliedly by accepting the benefits); adoption does not release the promoter unless there is a novation in which the third party agrees to substitute the corporation for the promoter.",
  options: [
    { key: "A", text: "Paz remains personally liable on the lease, and Zenith also became liable by impliedly adopting the lease when it accepted its benefits." },
    { key: "B", text: "Zenith alone is liable on the lease because the contract was signed in Zenith's name." },
    { key: "C", text: "Neither Paz nor Zenith is liable because Zenith did not exist when the lease was signed and never expressly adopted it." },
    { key: "D", text: "Paz was released from liability automatically when Zenith was incorporated and occupied the premises." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. A promoter is personally liable on contracts made before incorporation. Zenith, by moving into the office and accepting the benefits of the lease, impliedly adopted it and became liable as well. Adoption alone does not discharge the promoter; only a novation, with the landlord's consent to substitute Zenith for Paz, would release Paz.",
    B: "Incorrect. A corporation cannot be bound by a contract made before it existed unless it later adopts the contract, and even then the promoter remains liable absent a novation. Signing in the corporation's name does not shift liability away from the promoter.",
    C: "Incorrect. The promoter is liable because he contracted on behalf of a nonexistent principal. Adoption may be implied from conduct, such as knowingly accepting the benefits of the contract, so Zenith is liable too.",
    D: "Incorrect. Incorporation and acceptance of benefits create corporate liability but do not release the promoter. Release requires a novation agreed to by the landlord."
  },
  tags: ["promoter liability","pre-incorporation contract","adoption","novation","RMBCA"]
},
{
  id: "REG-117", area: "II", areaName: "Business Law",
  topic: "Debtor-creditor relationships — Suretyship, secured transactions and bankruptcy distributions", skill: "Application", difficulty: 2,
  stem: "Grant guaranteed, without compensation, a $100,000 loan from Bank to Hale. Bank later, without Grant's knowledge or consent, agreed with Hale to extend the maturity of the loan by one year in exchange for a higher interest rate. Hale subsequently defaulted and filed for bankruptcy. Bank demanded payment from Grant. Which of the following is correct?",
  reference: "Suretyship: a surety (guarantor) may assert most defenses available to the principal debtor (e.g., fraud, lack of consideration, payment) but not the debtor's purely personal defenses such as bankruptcy discharge, infancy or the running of the statute of limitations against the debtor. A binding modification of the principal obligation by the creditor and debtor without the surety's consent (e.g., an extension of time) discharges a gratuitous (uncompensated) surety entirely; a compensated surety is discharged only to the extent it is harmed by the modification. A surety who pays is entitled to reimbursement from the debtor, subrogation to the creditor's rights, and contribution from co-sureties.",
  options: [
    { key: "A", text: "Grant is fully discharged because the binding extension of time without his consent was a material modification and he is a gratuitous surety." },
    { key: "B", text: "Grant is discharged because Hale's bankruptcy discharge extinguishes the underlying debt and therefore the guaranty." },
    { key: "C", text: "Grant must pay the full $100,000 because a surety's liability is unaffected by agreements between the creditor and the principal debtor." },
    { key: "D", text: "Grant is discharged only to the extent he can prove he was harmed by the extension, because a surety is never completely released by a modification." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. A creditor's binding agreement to extend the time of payment, made without the surety's consent, is a material modification of the guaranteed obligation. Because Grant is an uncompensated (gratuitous) surety, the modification releases him completely, whether or not he can show actual harm.",
    B: "Incorrect. The principal debtor's discharge in bankruptcy is a personal defense of the debtor that the surety may not assert. Protecting the creditor against exactly this risk is the purpose of a guaranty (see Bankruptcy Code §524(e)).",
    C: "Incorrect. A surety is not bound by material changes to the risk it agreed to bear. A binding extension of time or other material modification made without the surety's consent releases a gratuitous surety.",
    D: "Incorrect. The 'discharged only to the extent of harm' rule applies to compensated sureties (such as commercial surety companies). Grant received no compensation, so the traditional rule of complete discharge applies."
  },
  tags: ["suretyship","gratuitous surety","material modification","extension of time","surety defenses"]
},
{
  id: "REG-118", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets", skill: "Application", difficulty: 1,
  stem: "In 2025 Pike Corp. purchased a machine for use in its manufacturing business. It paid $50,000 for the machine, $3,000 of state sales tax, $2,000 of freight, $4,000 for installation and testing, and $1,500 for a one-year maintenance contract covering routine servicing. Pike financed part of the price with a bank loan and paid $900 of interest during 2025. What is Pike's depreciable basis in the machine?",
  reference: "IRC §1012 and Reg. §1.263(a)-2: the basis of purchased property is its cost, including amounts paid to acquire the property and to place it in service (sales tax, freight, installation and testing). Costs of routine maintenance, repairs and interest on debt used to acquire the property (other than interest required to be capitalized under §263A for self-constructed property) are currently deductible and are not part of basis.",
  options: [
    { key: "A", text: "$59,000" },
    { key: "B", text: "$60,500" },
    { key: "C", text: "$61,400" },
    { key: "D", text: "$55,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Basis = $50,000 purchase price + $3,000 sales tax + $2,000 freight + $4,000 installation and testing = $59,000. The $1,500 maintenance contract is a currently deductible operating expense, and the $900 of interest is deductible business interest, not a capitalized cost.",
    B: "Incorrect. $60,500 includes the $1,500 maintenance contract. Routine maintenance does not add value or extend the asset's life and is deducted as incurred under Reg. §1.162-4.",
    C: "Incorrect. $61,400 includes both the maintenance contract and the interest. Interest on debt used to purchase equipment is deductible as it accrues; capitalization of interest is required only for property produced by the taxpayer under §263A(f).",
    D: "Incorrect. $55,000 omits the $4,000 of installation and testing costs. Amounts paid to put the asset in a condition and location for its intended use are capitalized as part of basis."
  },
  tags: ["§1012","cost basis","capitalization","Reg. §1.263(a)-2"]
},
{
  id: "REG-119", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets", skill: "Application", difficulty: 2,
  stem: "Rae purchased a house in 2019 for $300,000 and lived in it as her residence. On January 1, 2025, when the house had a fair market value of $260,000 (of which $40,000 was attributable to the land), she moved out and converted it to rental property. In 2025 she claimed $6,000 of depreciation. On December 31, 2025 she sold the property for (1) $310,000 or, alternatively, (2) $240,000. Assume $50,000 of the original cost was allocable to land. What is Rae's gain or loss under each alternative?",
  reference: "Reg. §1.165-9(b) and Reg. §1.167(g)-1: when personal-use property is converted to business or income-producing use, the basis for depreciation and for computing a loss is the lesser of the adjusted basis or the fair market value at the date of conversion; the basis for computing gain is the original adjusted basis (reduced by depreciation allowed). If the sale price falls between the two bases, no gain or loss is recognized.",
  options: [
    { key: "A", text: "(1) $16,000 gain; (2) $14,000 loss" },
    { key: "B", text: "(1) $56,000 gain; (2) $14,000 loss" },
    { key: "C", text: "(1) $16,000 gain; (2) $54,000 loss" },
    { key: "D", text: "(1) $50,000 gain; (2) $20,000 loss" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Gain basis = original cost $300,000 - $6,000 depreciation = $294,000; gain in (1) = $310,000 - $294,000 = $16,000. Loss basis = lesser of adjusted basis ($300,000) or FMV at conversion ($260,000) = $260,000, less $6,000 depreciation = $254,000; loss in (2) = $240,000 - $254,000 = $14,000 loss. (Depreciation is also computed on the $260,000 FMV less the $40,000 land value, but the question supplies the $6,000 figure.)",
    B: "Incorrect. $56,000 = $310,000 - $254,000 uses the lower loss basis to compute gain. The dual-basis rule uses original adjusted basis (less depreciation) to measure gain, so the pre-conversion decline in value does not increase the gain.",
    C: "Incorrect. $54,000 = $240,000 - $294,000 uses the original cost basis to compute the loss. The loss basis is limited to FMV at conversion so that the decline in value while the property was personal-use (a nondeductible personal loss) is not converted into a deductible loss.",
    D: "Incorrect. These amounts ignore the $6,000 of depreciation, which reduces both the gain basis and the loss basis under §1016(a)(2)."
  },
  tags: ["conversion to business use","dual basis","Reg. §1.165-9","depreciation basis"]
},
{
  id: "REG-120", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets", skill: "Application", difficulty: 2,
  stem: "On November 1, 2025 Sol sold 100 shares of Ivy Corp. stock, which he had purchased in 2021 for $8,000, for $5,000. On November 20, 2025 he purchased 100 shares of Ivy Corp. for $5,500. On December 15, 2025 he purchased another 100 shares for $5,200. What is Sol's recognized loss on the November 1 sale, and what is his basis in the shares purchased on November 20?",
  reference: "IRC §1091: a loss on the sale of stock or securities is disallowed if, within 30 days before or after the sale, the taxpayer acquires substantially identical stock or securities. The disallowed loss is added to the basis of the replacement shares, and the holding period of the sold shares tacks on to the replacement shares. If the taxpayer acquires more or fewer replacement shares than were sold, the disallowance is proportionate. Gains on wash sales are fully recognized.",
  options: [
    { key: "A", text: "Loss $0; basis $8,500" },
    { key: "B", text: "Loss $3,000; basis $5,500" },
    { key: "C", text: "Loss $0; basis $8,200" },
    { key: "D", text: "Loss $1,500; basis $7,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The November 20 purchase of 100 shares falls within 30 days after the November 1 sale, so the entire $3,000 loss ($5,000 - $8,000) is disallowed. The disallowed loss is added to the basis of the November 20 replacement shares: $5,500 + $3,000 = $8,500, and those shares take Sol's 2021 holding period. The December 15 purchase is outside the 61-day window and is irrelevant.",
    B: "Incorrect. The purchase of substantially identical shares 19 days after the sale triggers the wash sale rule. The loss is not currently deductible; it is deferred through a basis adjustment.",
    C: "Incorrect. The disallowed loss attaches to the replacement shares that caused the wash sale, the 100 shares bought on November 20 (basis $5,500), not the December 15 shares. The December 15 purchase occurred 44 days after the sale, outside the wash sale window.",
    D: "Incorrect. Sol sold 100 shares and bought 100 replacement shares within the window, so 100% of the loss, not half, is disallowed. Proportionate disallowance applies only when fewer replacement shares are acquired than were sold."
  },
  tags: ["§1091","wash sale","basis adjustment","holding period"]
},
{
  id: "REG-121", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Basis of assets — Purchased, converted, gifted, inherited and intangible assets", skill: "Application", difficulty: 2,
  stem: "Tessa formed Vale Corp. (a calendar-year C corporation) and began business operations on July 1, 2025. Before opening, Vale incurred $53,000 of start-up costs (market surveys, employee training and pre-opening advertising) and $8,600 of organizational costs (state incorporation fees and legal fees for drafting the charter and bylaws). Vale also paid $4,000 of costs to issue and sell its stock. Vale makes all available elections. What is Vale's total 2025 deduction for these costs (rounded to the nearest dollar)?",
  reference: "IRC §195 (start-up costs) and §248 (corporate organizational costs): a taxpayer may elect to deduct up to $5,000 of each category in the year business begins, reduced (but not below zero) by the amount by which the costs in that category exceed $50,000; the remainder is amortized ratably over 180 months beginning with the month business begins. Costs of issuing or selling stock (syndication-type costs) are neither deductible nor amortizable; they reduce the proceeds of the stock issuance.",
  options: [
    { key: "A", text: "$8,820" },
    { key: "B", text: "$11,720" },
    { key: "C", text: "$6,887" },
    { key: "D", text: "$61,600" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Start-up costs: $53,000 exceeds $50,000 by $3,000, so the immediate deduction is $5,000 - $3,000 = $2,000; the remaining $51,000 is amortized over 180 months beginning July: $51,000 / 180 x 6 = $1,700. Organizational costs: $8,600 is below $50,000, so $5,000 is deducted immediately and the remaining $3,600 / 180 x 6 = $120 is amortized. Total = $2,000 + $1,700 + $5,000 + $120 = $8,820. The $4,000 of stock issuance costs is never deductible or amortizable.",
    B: "Incorrect. $11,720 allows the full $5,000 first-year deduction for start-up costs without the dollar-for-dollar reduction for costs over $50,000 ($5,000 + $48,000 / 180 x 6 = $6,600, plus $5,120 organizational). Because start-up costs exceeded $50,000 by $3,000, the immediate deduction is reduced to $2,000.",
    C: "Incorrect. $6,887 amortizes the entire $53,000 of start-up costs over 180 months ($53,000 / 180 x 6 = $1,767) with no immediate deduction, plus $5,120 organizational. A reduced immediate deduction of $2,000 is still available under §195(b)(1)(A) because the costs did not exceed $55,000.",
    D: "Incorrect. $61,600 deducts all start-up and organizational costs currently. Pre-opening expenditures are not ordinary and necessary expenses of an existing business under §162; they are capitalized and recovered only through the §195/§248 election and 180-month amortization."
  },
  tags: ["§195","§248","start-up costs","organizational costs","stock issuance costs"]
},
{
  id: "REG-122", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Cost recovery — Depreciation (MACRS, bonus, §179) and amortization", skill: "Application", difficulty: 2,
  stem: "Wick Corp., a calendar-year taxpayer, placed the following new assets in service during 2025 and elected out of bonus depreciation and did not elect §179: office furniture (7-year property) costing $60,000 on February 10; computers (5-year property) costing $30,000 on May 5; and a delivery truck (5-year property) costing $90,000 on November 20. Wick also purchased a warehouse (39-year nonresidential real property) for $800,000, of which $200,000 is land, placed in service on August 15. Which convention applies to the personal property, and what is the 2025 depreciation on the warehouse?",
  reference: "MACRS (§168): personal property normally uses the half-year convention. The mid-quarter convention must be used for all personal property placed in service during the year if more than 40% of the aggregate depreciable basis of personal property (excluding real property) is placed in service in the last quarter of the year. Nonresidential real property is depreciated straight-line over 39 years using the mid-month convention (the asset is treated as placed in service in the middle of the month). Land is not depreciable.",
  options: [
    { key: "A", text: "Mid-quarter convention; warehouse depreciation $5,769" },
    { key: "B", text: "Half-year convention; warehouse depreciation $5,769" },
    { key: "C", text: "Mid-quarter convention; warehouse depreciation $7,692" },
    { key: "D", text: "Half-year convention; warehouse depreciation $6,410" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Personal property placed in service: $60,000 + $30,000 + $90,000 = $180,000, of which $90,000 (50%) was placed in service in the fourth quarter. Because more than 40% was placed in service in the last quarter, the mid-quarter convention applies to all three personal-property assets. Warehouse: depreciable basis $800,000 - $200,000 land = $600,000; straight-line over 39 years = $15,385 per year; mid-month convention gives 4.5 months (mid-August through December): $15,385 x 4.5 / 12 = $5,769.",
    B: "Incorrect. The half-year convention would apply only if 40% or less of the personal-property basis had been placed in service in the fourth quarter. The $90,000 truck placed in service on November 20 represents 50% of the $180,000 total, which exceeds 40%.",
    C: "Incorrect. $7,692 = $600,000 / 39 x 6 / 12 applies a half-year convention to the building. Real property always uses the mid-month convention, giving 4.5 months for an asset placed in service in August.",
    D: "Incorrect. $6,410 = $600,000 / 39 x 5 / 12 treats the warehouse as placed in service at the beginning of August. Under the mid-month convention only half of August counts, producing 4.5 months of depreciation."
  },
  tags: ["MACRS","mid-quarter convention","mid-month convention","39-year property","§168"]
},
{
  id: "REG-123", area: "III", areaName: "Federal Taxation of Property Transactions",
  topic: "Cost recovery — Depreciation (MACRS, bonus, §179) and amortization", skill: "Application", difficulty: 2,
  stem: "Yost LLC, a calendar-year business, made the following acquisitions in 2025: (1) new manufacturing equipment (7-year property) for $400,000, contract signed and delivered March 3, 2025; (2) used trucks (5-year property) for $150,000 purchased from an unrelated dealer in June 2025, never previously used by Yost; (3) a new office building (39-year property) for $2,000,000 placed in service September 2025; and (4) interior improvements to the leased retail space Yost occupies (qualified improvement property) for $120,000 completed October 2025. Yost does not elect §179 and does not elect out of bonus depreciation. What is Yost's total 2025 bonus depreciation?",
  reference: "IRC §168(k) as amended by the One Big Beautiful Bill Act: 100% bonus depreciation applies to qualified property acquired and placed in service after January 19, 2025 (property acquired before January 20, 2025 and placed in service in 2025 is limited to 40%). Qualified property is MACRS property with a recovery period of 20 years or less, computer software, and qualified improvement property (15-year). Used property qualifies if it was not previously used by the taxpayer and was acquired by purchase from an unrelated party. Nonresidential real property (39-year) is not qualified property.",
  options: [
    { key: "A", text: "$670,000" },
    { key: "B", text: "$520,000" },
    { key: "C", text: "$2,670,000" },
    { key: "D", text: "$550,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Equipment $400,000 (7-year, acquired after January 19, 2025, 100%) + used trucks $150,000 (used property acquired from an unrelated party and not previously used by Yost qualifies) + qualified improvement property $120,000 (15-year property, eligible) = $670,000. The office building is 39-year nonresidential real property and is not eligible for bonus depreciation.",
    B: "Incorrect. $520,000 excludes the used trucks. Since the TCJA, used property qualifies for bonus depreciation provided the taxpayer did not previously use it and acquired it by purchase from an unrelated party (§168(k)(2)(E)(ii)).",
    C: "Incorrect. $2,670,000 includes the office building. Property with a recovery period longer than 20 years, including 39-year nonresidential real property, is not qualified property under §168(k)(2)(A).",
    D: "Incorrect. $550,000 excludes the qualified improvement property. QIP (improvements to the interior of nonresidential real property placed in service after the building) is 15-year property and is expressly eligible for bonus depreciation."
  },
  tags: ["§168(k)","bonus depreciation","OBBBA","qualified improvement property","used property"]
},
{
  id: "REG-124", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 2,
  stem: "Ezra, single, had the following 2025 transactions: sold 2 units of a cryptocurrency on August 1, 2025 for $30,000 that he had bought on May 15, 2024 for $18,000; sold 100 shares of Kilo Corp. stock on October 1, 2025 for $12,000 that he had bought on March 1, 2025 for $15,000; and on December 1, 2025 used 0.5 unit of the same cryptocurrency, purchased in January 2024 for $2,000, to buy a computer with a fair market value of $5,000. What is the amount and character of Ezra's net capital gain for 2025?",
  reference: "IRS Notice 2014-21 and Rev. Rul. 2019-24: virtual currency is treated as property; using it to buy goods or services is a sale or exchange on which gain or loss is recognized (FMV of the goods received less the basis of the currency given up). Property held more than one year produces long-term gain or loss; one year or less produces short-term. Under §1222, net short-term and net long-term results are computed separately and then netted against each other.",
  options: [
    { key: "A", text: "$12,000 net long-term capital gain" },
    { key: "B", text: "$9,000 net long-term capital gain" },
    { key: "C", text: "$15,000 net long-term capital gain; the $3,000 short-term loss is carried forward to 2026" },
    { key: "D", text: "$12,000 net long-term capital gain; the exchange of cryptocurrency for the computer is not a taxable event" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Crypto sold August 1 (held since May 2024, more than one year): $30,000 - $18,000 = $12,000 long-term gain. Crypto used to buy the computer (held since January 2024): $5,000 - $2,000 = $3,000 long-term gain. Kilo stock held 7 months: $12,000 - $15,000 = $3,000 short-term loss. Net long-term gain $15,000 less net short-term loss $3,000 = $12,000 net capital gain, taxed at long-term rates.",
    B: "Incorrect. $9,000 = $12,000 - $3,000 omits the $3,000 gain on the cryptocurrency used to buy the computer. Spending virtual currency is a disposition of property that triggers gain or loss just like a sale for cash.",
    C: "Incorrect. A net short-term capital loss is netted against net long-term capital gain in the same year under §1222(11); it is not carried forward while long-term gains remain to absorb it.",
    D: "Incorrect. Using cryptocurrency to purchase goods is a taxable exchange under Notice 2014-21. The taxpayer recognizes gain equal to the FMV of the property received ($5,000) less the basis of the currency given up ($2,000)."
  },
  tags: ["virtual currency","capital gain","holding period","§1222"]
},
{
  id: "REG-125", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 2,
  stem: "In 2025 Faye settled a lawsuit against a trucking company that had injured her in a collision. She received: $200,000 for her physical injuries, including $60,000 attributable to lost wages during her recovery; $50,000 of punitive damages; $30,000 for emotional distress arising from the physical injuries; and $8,000 of interest on the award for the period before payment. What amount must Faye include in 2025 gross income?",
  reference: "IRC §104(a)(2): gross income does not include damages (other than punitive damages) received on account of personal physical injuries or physical sickness, whether by suit or settlement, lump sum or periodic payments. Emotional distress is not treated as a physical injury, but damages for emotional distress attributable to a physical injury are excluded, as are amounts for medical care of emotional distress. Punitive damages are always includible (except in certain wrongful-death cases). Interest on an award is ordinary income.",
  options: [
    { key: "A", text: "$58,000" },
    { key: "B", text: "$118,000" },
    { key: "C", text: "$88,000" },
    { key: "D", text: "$50,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The $200,000 for physical injuries is excluded in full; the lost-wages component is excluded because it was received on account of the physical injury. The $30,000 for emotional distress flowing from the physical injury is likewise excluded. Includible: punitive damages $50,000 + interest $8,000 = $58,000.",
    B: "Incorrect. $118,000 = $60,000 + $50,000 + $8,000 taxes the lost-wages portion of the award. Although wages would normally be taxable, damages that replace wages are excluded when received on account of physical injury (Reg. §1.104-1(c)).",
    C: "Incorrect. $88,000 = $50,000 + $30,000 + $8,000 taxes the emotional distress damages. Emotional distress damages are taxable when the distress is the origin of the claim, but here the distress arose from a physical injury and is excluded.",
    D: "Incorrect. $50,000 omits the interest. Pre-judgment or pre-settlement interest is compensation for the delay in payment, not for the injury, and is taxable ordinary income."
  },
  tags: ["§104(a)(2)","damages","punitive damages","emotional distress","exclusions"]
},
{
  id: "REG-126", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Gross income — Inclusions and exclusions", skill: "Application", difficulty: 2,
  stem: "Gil, a cash-basis calendar-year taxpayer, died on September 30, 2025. Through the date of death he had received $60,000 of salary. After his death, the following were paid: $5,000 of salary earned before death paid to his estate on October 10; a $2,000 dividend declared September 15 (record date September 25) paid October 5 to his estate; and $3,000 of interest on a certificate of deposit that accrued after September 30 and was paid to the estate on December 31. Gil's executor also paid $4,000 of Gil's medical expenses on November 15 that were incurred in August 2025. Which of the following is correct for Gil's final Form 1040 (filed jointly with his surviving spouse)?",
  reference: "IRC §691 and Reg. §1.451-1(b): a cash-basis decedent's final return includes only amounts actually or constructively received before death. Amounts the decedent had a right to receive but had not received at death are income in respect of a decedent (IRD), taxed to the estate or beneficiary when received. §213(c): medical expenses of the decedent paid by the estate within one year after death may be treated as paid when incurred and deducted on the decedent's final return (if the estate waives the estate tax deduction). A joint return may be filed for the year of death, and the full standard deduction is allowed.",
  options: [
    { key: "A", text: "The final return includes $60,000 of salary; the $5,000 salary, $2,000 dividend and $3,000 interest are reported by the estate; the $4,000 of medical expenses may be deducted on the final return." },
    { key: "B", text: "The final return includes $67,000 ($60,000 + $5,000 + $2,000); the $3,000 interest is reported by the estate; the medical expenses are deductible only by the estate." },
    { key: "C", text: "The final return includes $70,000 of income, prorated through the date of death, and the medical expenses are deductible only on the estate's Form 706." },
    { key: "D", text: "The final return includes $60,000 of salary and the $2,000 dividend, because the record date preceded death; the medical expenses may be deducted on the final return." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. A cash-basis decedent reports only what was received before death ($60,000). The unpaid salary, the dividend paid after death (a cash-basis taxpayer does not constructively receive a dividend until paid, regardless of the record date) and the post-death interest are IRD reported by the estate. Under §213(c) the estate's payment of Gil's pre-death medical expenses within one year of death may be deducted on his final return (subject to the 7.5% AGI floor).",
    B: "Incorrect. Amounts unpaid at death are not included on a cash-basis decedent's final return; they are income in respect of a decedent under §691 and are taxed to the recipient. The estate may elect to deduct medical expenses, but §213(c) also permits them on the decedent's final return.",
    C: "Incorrect. Income is not prorated for a cash-basis decedent; only amounts actually or constructively received before death are reported. Medical expenses paid within one year after death may be claimed on the final Form 1040 rather than Form 706 if the estate so elects.",
    D: "Incorrect. For a cash-basis taxpayer a dividend is income when received (or made unqualifiedly available), not on the record date. Because the dividend was paid after death, it is IRD to the estate."
  },
  tags: ["decedent's final return","income in respect of a decedent","§691","§213(c)","cash basis"]
},
{
  id: "REG-127", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Reporting of items from pass-through entities", skill: "Application", difficulty: 2,
  stem: "Hana received a 2025 Schedule K-1 from Juno LLC (taxed as a partnership) showing her 30% share: ordinary business income $45,000; guaranteed payments for services $20,000; net long-term capital gain $6,000; charitable contributions $1,500; §179 deduction $4,000; and tax-exempt interest $900. Hana materially participates and has ample basis. Which of the following correctly describes how these items are reported on Hana's Form 1040?",
  reference: "Pass-through reporting: a partner reports her distributive share of ordinary business income on Schedule E, and separately stated items retain their character (capital gains on Schedule D, charitable contributions on Schedule A, §179 subject to the partner's own limitations). Guaranteed payments are ordinary income to the recipient. For a general partner or LLC member who materially participates, both ordinary business income and guaranteed payments for services are net earnings from self-employment (§1402(a)); capital gains, and tax-exempt interest are not. Tax-exempt interest is reported for information only and increases basis.",
  options: [
    { key: "A", text: "Schedule E ordinary income $45,000 and guaranteed payments $20,000 (both subject to self-employment tax); $6,000 on Schedule D; $1,500 on Schedule A; §179 subject to her own limits; $900 excluded from income." },
    { key: "B", text: "Schedule E income of $66,400 ($45,000 + $20,000 + $6,000 - $1,500 - $4,000 + $900), all subject to self-employment tax." },
    { key: "C", text: "Schedule E ordinary income $45,000 subject to self-employment tax; guaranteed payments of $20,000 reported as wages on line 1 and not subject to self-employment tax." },
    { key: "D", text: "Schedule E ordinary income $45,000 and guaranteed payments $20,000; the $6,000 capital gain is also subject to self-employment tax because Hana materially participates." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Ordinary business income and guaranteed payments are reported on Schedule E (Part II) and, for a materially participating member, are net earnings from self-employment. The capital gain, charitable contribution and §179 deduction are separately stated and flow to the appropriate schedules subject to Hana's own limitations. Tax-exempt interest is excluded from income but increases her outside basis.",
    B: "Incorrect. Separately stated items are not netted into Schedule E income; they keep their character on the partner's return so that the partner's own limitations (capital loss netting, charitable AGI limits, §179 taxable income limit) apply. Tax-exempt interest is never included in taxable income.",
    C: "Incorrect. Guaranteed payments to a partner are not wages; a partner cannot be an employee of the partnership. They are ordinary income reported on Schedule E and are included in net earnings from self-employment under §1402(a).",
    D: "Incorrect. Capital gains from the disposition of capital assets are excluded from net earnings from self-employment under §1402(a)(3), regardless of the partner's level of participation."
  },
  tags: ["Schedule K-1","separately stated items","guaranteed payments","self-employment income","§1402"]
},
{
  id: "REG-128", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Reporting of items from pass-through entities", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Ivo is the sole member of Ivo Consulting LLC, which has made no entity classification election. In 2025 the LLC earned $90,000 of net consulting income and Ivo withdrew $50,000 for personal use. How does Ivo report the LLC's activity on his 2025 Form 1040?",
  reference: "Reg. §301.7701-3: a domestic single-member LLC that has not elected to be treated as a corporation is disregarded as an entity separate from its owner for federal income tax purposes. Its activities are reported as if conducted directly by the owner.",
  options: [
    { key: "A", text: "Ivo reports $90,000 of net profit on Schedule C and pays self-employment tax on the net earnings; the $50,000 of withdrawals has no effect on his taxable income." },
    { key: "B", text: "Ivo reports $50,000, the amount actually withdrawn, as ordinary income on Schedule E." },
    { key: "C", text: "The LLC files Form 1065 and issues Ivo a Schedule K-1 reporting $90,000 of ordinary business income." },
    { key: "D", text: "The LLC files Form 1120 and pays corporate tax on $90,000; Ivo reports the $50,000 withdrawal as a dividend." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. A single-member LLC with no election is a disregarded entity. Ivo reports the business income and expenses on Schedule C as a sole proprietor, and the $90,000 of net profit is subject to self-employment tax on Schedule SE. Owner draws are not deductible and do not change taxable income.",
    B: "Incorrect. The owner of a disregarded entity is taxed on all of the entity's net income as earned, regardless of the amount withdrawn. Withdrawals from one's own sole proprietorship are not a taxable event.",
    C: "Incorrect. Form 1065 is filed by partnerships. A partnership requires at least two members; a single-member LLC cannot be classified as a partnership.",
    D: "Incorrect. An LLC is taxed as a corporation only if it files Form 8832 (or Form 2553 for S status) electing that classification. With no election, the default classification for a single-member LLC is disregarded entity."
  },
  tags: ["disregarded entity","single-member LLC","Schedule C","check-the-box"]
},
{
  id: "REG-129", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Adjustments and deductions to arrive at AGI and taxable income", skill: "Application", difficulty: 2,
  stem: "In 2025 Kai's home was damaged by a hurricane in an area that the President declared a federal disaster. Before the storm the home was worth $500,000; after the storm it was worth $380,000. Kai's adjusted basis in the home was $300,000. Insurance reimbursed $70,000. Kai's 2025 AGI is $150,000 and he itemizes. What is Kai's deductible casualty loss for 2025?",
  reference: "Tax year 2025. IRC §165(h): an individual's personal casualty loss is deductible only if attributable to a federally declared disaster (made permanent by the One Big Beautiful Bill Act). The loss is the lesser of the decline in FMV or the adjusted basis, reduced by insurance or other reimbursement, then reduced by $100 per casualty event, and the aggregate net casualty losses are deductible only to the extent they exceed 10% of AGI.",
  options: [
    { key: "A", text: "$34,900" },
    { key: "B", text: "$49,900" },
    { key: "C", text: "$50,000" },
    { key: "D", text: "$214,900" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Loss = lesser of decline in FMV ($500,000 - $380,000 = $120,000) or adjusted basis ($300,000) = $120,000. Less insurance $70,000 = $50,000. Less $100 per event = $49,900. Less 10% of AGI ($15,000) = $34,900 deductible as an itemized deduction on Schedule A (Form 4684).",
    B: "Incorrect. $49,900 applies the $100 floor but omits the 10%-of-AGI limitation that applies to the aggregate of personal casualty losses for the year.",
    C: "Incorrect. $50,000 is the loss after insurance but before both the $100 per-event reduction and the 10%-of-AGI floor.",
    D: "Incorrect. $214,900 uses the $300,000 adjusted basis as the measure of loss. For a partial destruction, the loss is the lesser of the decline in FMV or basis; basis governs only when the property is totally destroyed and basis is lower than FMV."
  },
  tags: ["§165(h)","casualty loss","federally declared disaster","10% AGI floor","Form 4684"]
},
{
  id: "REG-130", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Loss limitations — Capital, basis, passive, at-risk, hobby and wash sale", skill: "Analysis", difficulty: 3,
  stem: "Lena, single, had the following items in 2025: (1) a $9,000 loss on the sale of her personal automobile; (2) a $4,000 loss on the sale of Mars Corp. stock on June 1, where she repurchased the same number of Mars shares on June 20; (3) $3,000 of income and $7,500 of expenses from breeding show dogs, an activity that has produced losses in each of the last 6 years and that she pursues for recreation; (4) a $2,500 loss on the sale of Neon Corp. stock held 3 years, not repurchased; and (5) a $1,200 net loss from a rental property in which she actively participates (AGI is $80,000). What total amount of these losses may Lena deduct on her 2025 return?",
  reference: "Tax year 2025. §165(c): individuals may deduct losses only if incurred in a trade or business, in a transaction entered into for profit, or from a federally declared disaster casualty; losses on personal-use assets are not deductible. §1091: wash sale losses are disallowed. §183: an activity not engaged in for profit (presumed if losses in 3 of 5 years) is a hobby; gross income is includible, and hobby expenses are miscellaneous itemized deductions that are permanently nondeductible after the One Big Beautiful Bill Act. §1211(b): net capital losses are deductible against ordinary income up to $3,000. §469(i): up to $25,000 of rental real estate losses are allowed with active participation and AGI of $100,000 or less.",
  options: [
    { key: "A", text: "$3,700" },
    { key: "B", text: "$6,700" },
    { key: "C", text: "$8,200" },
    { key: "D", text: "$13,200" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. (1) Personal auto loss: nondeductible. (2) Mars wash sale: $4,000 disallowed and added to basis of the new shares. (3) Hobby: $3,000 income is includible, but the $7,500 of expenses is not deductible (miscellaneous itemized deductions are permanently eliminated), so no loss. (4) Neon: $2,500 long-term capital loss, deductible in full because it is within the $3,000 net capital loss limit. (5) Rental: $1,200 allowed under the §469(i) active participation exception. Total deductible = $2,500 + $1,200 = $3,700.",
    B: "Incorrect. $6,700 = $2,500 + $1,200 + $3,000 allows the $3,000 capital loss limit in addition to the actual $2,500 capital loss. The $3,000 figure is a ceiling, not a deduction; Lena's only allowable capital loss is $2,500. (The $4,000 wash sale loss cannot be used to fill the limit.)",
    C: "Incorrect. $8,200 = $4,000 + $2,500 + $1,200 deducts the wash sale loss. Because Lena bought identical Mars shares within 30 days after the sale, §1091 disallows the loss; it is deferred by increasing the basis of the replacement shares.",
    D: "Incorrect. $13,200 additionally deducts the $9,000 personal automobile loss (or the hobby loss). Losses on the sale of personal-use property are never deductible under §165(c), and hobby expenses cannot create a deductible loss."
  },
  tags: ["§165(c)","personal-use asset","wash sale","hobby loss §183","§469(i)","capital loss"]
},
{
  id: "REG-131", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Loss limitations — Capital, basis, passive, at-risk, hobby and wash sale", skill: "Application", difficulty: 2,
  stem: "Mo is a 40% general partner in Orion Partners and materially participates in its business. At January 1, 2025 his outside basis was $18,000. During 2025 the partnership allocated to Mo a $50,000 ordinary business loss and $2,000 of tax-exempt interest, distributed $5,000 cash to him, and Mo's share of partnership recourse liabilities increased by $10,000. Mo has no other passive activities and his amount at risk equals his basis. What amount of the ordinary loss may Mo deduct on his 2025 Form 1040?",
  reference: "IRC §704(d): a partner's distributive share of partnership loss is allowed only to the extent of the partner's outside basis at the end of the partnership year, determined after all basis increases for the year (income, tax-exempt income and increases in liability share) and decreases for distributions, but before the loss. Disallowed losses carry forward indefinitely until basis is restored. The at-risk (§465) and passive activity (§469) limits apply after the basis limit.",
  options: [
    { key: "A", text: "$25,000" },
    { key: "B", text: "$50,000" },
    { key: "C", text: "$15,000" },
    { key: "D", text: "$20,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Basis before the loss = $18,000 + $2,000 tax-exempt interest + $10,000 increase in liability share - $5,000 distribution = $25,000. Under §704(d) the deductible loss is limited to $25,000; the remaining $25,000 is suspended and carried forward. Because Mo materially participates and his at-risk amount equals his basis, §465 and §469 impose no further limit.",
    B: "Incorrect. A partner cannot deduct losses in excess of outside basis; doing so would produce negative basis, which §704(d) prohibits. Half of the loss is suspended.",
    C: "Incorrect. $15,000 = $18,000 + $2,000 - $5,000 ignores the $10,000 increase in Mo's share of partnership liabilities, which is treated as a cash contribution under §752(a) and increases basis before the loss limit is applied.",
    D: "Incorrect. $20,000 = $18,000 + $10,000 - $5,000 - $3,000 or similar omits the tax-exempt interest. Tax-exempt income increases outside basis under §705(a)(1)(B) even though it is not taxable."
  },
  tags: ["§704(d)","basis limitation","partnership loss","§752","loss limitations"]
},
{
  id: "REG-132", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Filing status and dependents", skill: "Application", difficulty: 2,
  stem: "Nell and Oscar are legally married but have lived apart since March 2025; there is no decree of separate maintenance. Their 8-year-old daughter lived with Nell for the entire year, and Nell paid 100% of the cost of maintaining her home. Nell and Oscar do not wish to file jointly. Which filing status may Nell use for 2025?",
  reference: "Filing status rules: a married individual who does not file jointly generally must file as married filing separately. Under §7703(b) a married individual is treated as unmarried (and may qualify for head of household) if she files a separate return, maintains as her home a household that is the principal residence of a child for more than half the year, furnishes over half the cost of maintaining the home, and her spouse was not a member of the household during the last six months of the tax year. Head of household requires an unmarried (or treated-as-unmarried) taxpayer who pays more than half the cost of a home that is the principal residence of a qualifying person for more than half the year.",
  options: [
    { key: "A", text: "Head of household" },
    { key: "B", text: "Married filing separately only" },
    { key: "C", text: "Single" },
    { key: "D", text: "Qualifying surviving spouse" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Although Nell is still legally married, she satisfies the abandoned spouse rule of §7703(b): she files separately, her daughter lived with her all year, she paid more than half the cost of the home, and Oscar was absent from the household for the last six months of 2025 (since March). She is treated as unmarried and, with a qualifying child in her home, qualifies for head of household.",
    B: "Incorrect. Married filing separately would be Nell's only option if she failed the §7703(b) test (for example, if Oscar had moved out in August). Because Oscar was absent for the entire last half of the year and a child lives with her, she may use the more favorable head of household status.",
    C: "Incorrect. A legally married individual cannot file as single. The §7703(b) rule treats her as unmarried for purposes of qualifying for head of household, not for filing as single.",
    D: "Incorrect. Qualifying surviving spouse status applies only for the two years following the year of a spouse's death. Oscar is alive."
  },
  tags: ["filing status","head of household","abandoned spouse","§7703(b)","married filing separately"]
},
{
  id: "REG-133", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 2,
  stem: "Pia, single, has 2025 modified AGI of $260,000, consisting of $200,000 of wages, $35,000 of interest and dividends, $30,000 of net long-term capital gain from the sale of stock, and a $5,000 net loss from a rental property that is allowed in full. She also received a $12,000 distribution from her traditional IRA. What is Pia's 2025 net investment income tax?",
  reference: "IRC §1411: a 3.8% tax applies to the lesser of (a) net investment income (NII) or (b) the excess of modified AGI over the threshold: $200,000 single/HOH, $250,000 MFJ, $125,000 MFS (thresholds are not indexed for inflation). NII includes interest, dividends, capital gains, rents, royalties, annuities and passive business income, net of allocable deductions and losses. Wages, self-employment income, and distributions from qualified plans and IRAs are excluded from NII.",
  options: [
    { key: "A", text: "$2,280" },
    { key: "B", text: "$2,470" },
    { key: "C", text: "$2,736" },
    { key: "D", text: "$2,926" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. NII = $35,000 interest and dividends + $30,000 capital gain - $5,000 rental loss = $60,000. Excess of MAGI over threshold = $260,000 - $200,000 = $60,000. NIIT = 3.8% x lesser of $60,000 or $60,000 = $2,280. Wages and the IRA distribution are not NII (although they raise MAGI).",
    B: "Incorrect. $2,470 = 3.8% x $65,000 ignores the $5,000 rental loss. Rental losses that are allowed for regular tax purposes reduce net investment income.",
    C: "Incorrect. $2,736 = 3.8% x $72,000 includes the $12,000 IRA distribution in NII. Distributions from IRAs and qualified retirement plans are specifically excluded from net investment income under §1411(c)(5).",
    D: "Incorrect. $2,926 = 3.8% x $77,000 includes the IRA distribution and ignores the rental loss. Both adjustments are required; the IRA distribution is excluded and the allowed rental loss is subtracted."
  },
  tags: ["§1411","net investment income tax","NIIT","3.8% tax"]
},
{
  id: "REG-134", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Quan's 2025 income tax liability before credits is $900. He is eligible for the following credits: earned income credit $2,400; child and dependent care credit $600; lifetime learning credit $1,000; and the refundable portion of the American Opportunity Tax Credit $1,000. Ignoring any other limitations, what is the amount of Quan's refund attributable to credits (assume no withholding or estimated payments)?",
  reference: "Tax year 2025. Nonrefundable credits (e.g., child and dependent care credit, lifetime learning credit, foreign tax credit, the nonrefundable portion of the child tax credit) can reduce tax liability to zero but not below. Refundable credits (e.g., earned income credit, additional child tax credit, 40% of the American Opportunity Tax Credit, premium tax credit) are treated as payments and can generate a refund in excess of tax liability. Nonrefundable credits are applied before refundable credits.",
  options: [
    { key: "A", text: "$3,400" },
    { key: "B", text: "$4,100" },
    { key: "C", text: "$5,000" },
    { key: "D", text: "$2,400" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Nonrefundable credits ($600 + $1,000 = $1,600) reduce the $900 liability to $0; the $700 excess is lost. Refundable credits ($2,400 EITC + $1,000 refundable AOTC = $3,400) are treated as payments against a zero liability and are refunded in full: $3,400.",
    B: "Incorrect. $4,100 = $3,400 + $700 treats the unused portion of the nonrefundable credits as refundable. Nonrefundable credits cannot reduce tax below zero, and the excess is not refunded (although some, like the foreign tax credit, may carry over).",
    C: "Incorrect. $5,000 is the total of all credits. Only $900 of the nonrefundable credits can be used, and the remainder does not generate a refund.",
    D: "Incorrect. $2,400 omits the refundable portion of the American Opportunity Tax Credit. Under §25A(i)(5), 40% of the AOTC (up to $1,000) is refundable."
  },
  tags: ["refundable credits","nonrefundable credits","earned income credit","§25A","§21"]
},
{
  id: "REG-135", area: "IV", areaName: "Federal Taxation of Individuals",
  topic: "Computation of tax and credits", skill: "Application", difficulty: 2,
  stem: "Ravi, single, has 2025 taxable income of $60,000, which includes $10,000 of qualified dividends. He has no other preferentially taxed income. What is Ravi's 2025 regular income tax liability (rounded to the nearest dollar)?",
  reference: "Tax year 2025 (single). Ordinary income rate schedule: 10% on taxable income up to $11,925; 12% on $11,925-$48,475; 22% on $48,475-$103,350; 24% above $103,350 (higher brackets omitted). Qualified dividends and net long-term capital gain: 0% to the extent total taxable income does not exceed $48,350; 15% on amounts up to $533,400; 20% above. The preferential-rate income is 'stacked' on top of ordinary income.",
  options: [
    { key: "A", text: "$7,414" },
    { key: "B", text: "$8,114" },
    { key: "C", text: "$5,914" },
    { key: "D", text: "$9,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Ordinary income = $60,000 - $10,000 = $50,000. Tax on ordinary income: 10% x $11,925 = $1,192.50; 12% x ($48,475 - $11,925) = $4,386.00; 22% x ($50,000 - $48,475) = $335.50; subtotal $5,914. The $10,000 of qualified dividends is stacked on top: because ordinary income ($50,000) already exceeds the $48,350 top of the 0% bracket, all $10,000 is taxed at 15% = $1,500. Total = $7,414.",
    B: "Incorrect. $8,114 taxes the full $60,000 at ordinary rates (22% on the $10,000 of dividends instead of 15%). Qualified dividends are taxed at the preferential capital gain rates under §1(h)(11).",
    C: "Incorrect. $5,914 taxes only the $50,000 of ordinary income and treats the dividends as taxed at 0%. The 0% rate applies only to the portion of preferential income that falls below $48,350 of total taxable income; here ordinary income alone exceeds that amount.",
    D: "Incorrect. $9,000 applies a flat 15% to all $60,000 of taxable income. The 15% rate applies only to qualified dividends and long-term capital gains; ordinary income uses the graduated rate schedule."
  },
  tags: ["§1(h)","qualified dividends","tax computation","stacking rule","2025 rate schedule"]
},
{
  id: "REG-136", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Differences between book and tax income — Schedule M-1/M-3", skill: "Application", difficulty: 2,
  stem: "Sable Corp., a C corporation with total assets of $15 million, is preparing Schedule M-3 for 2025. Which of the following book-tax differences is correctly classified?",
  reference: "Schedule M-3 (required for corporations with total assets of $10 million or more) requires each book-tax difference to be classified as temporary (an item that will reverse in a later year, affecting both book and tax over time) or permanent (an item that affects only book income or only taxable income and never reverses).",
  options: [
    { key: "A", text: "Tax depreciation in excess of book depreciation: temporary; municipal bond interest income: permanent; nondeductible fines and penalties: permanent; warranty expense accrued for book but deductible for tax only when paid: temporary." },
    { key: "B", text: "Tax depreciation in excess of book depreciation: permanent; municipal bond interest income: temporary; nondeductible fines and penalties: permanent; warranty accrual: temporary." },
    { key: "C", text: "Tax depreciation in excess of book depreciation: temporary; municipal bond interest income: permanent; nondeductible fines and penalties: temporary; warranty accrual: permanent." },
    { key: "D", text: "Tax depreciation in excess of book depreciation: temporary; municipal bond interest income: temporary; nondeductible fines and penalties: permanent; warranty accrual: permanent." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Depreciation differences reverse over the asset's life (temporary). Municipal bond interest is book income that is never taxed (permanent). Fines and penalties are book expenses never deductible under §162(f) (permanent). Warranty costs are deducted for book when accrued and for tax when paid under the economic performance rules of §461(h), so the difference reverses (temporary).",
    B: "Incorrect. Depreciation methods differ between book and tax only in timing; total depreciation over the life of the asset is the same, so the difference is temporary. Municipal interest never enters taxable income, so it is permanent.",
    C: "Incorrect. Fines and penalties are permanently nondeductible under §162(f); the difference never reverses. Warranty accruals are a classic temporary difference because the deduction is merely deferred until economic performance.",
    D: "Incorrect. Municipal bond interest is a permanent difference, and the warranty accrual is a temporary difference. The classification affects both the M-3 columns and the deferred tax computation under ASC 740."
  },
  tags: ["Schedule M-3","permanent difference","temporary difference","book-tax differences"]
},
{
  id: "REG-137", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — Taxable income, tax liability, credits and accounting methods", skill: "Application", difficulty: 2,
  stem: "Tarn Corp., a C corporation, has 2025 regular income tax liability of $65,000 (before credits) and is not subject to the corporate alternative minimum tax. It earned $70,000 of general business credits during 2025 (research credit and work opportunity credit) and has no credit carryovers. What amount of general business credit may Tarn use in 2025, and what happens to the excess?",
  reference: "IRC §38(c): the general business credit allowed for the year is limited to the excess of the taxpayer's net income tax over the greater of (1) the tentative minimum tax, or (2) 25% of net regular tax liability above $25,000. Unused credits are carried back 1 year and forward 20 years (§39).",
  options: [
    { key: "A", text: "$55,000 allowed; $15,000 carried back 1 year and then forward 20 years" },
    { key: "B", text: "$65,000 allowed; $5,000 carried forward 20 years" },
    { key: "C", text: "$70,000 allowed; no carryover" },
    { key: "D", text: "$48,750 allowed; $21,250 carried forward 20 years" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Limitation = $65,000 - greater of ($0 tentative minimum tax, or 25% x ($65,000 - $25,000) = $10,000) = $55,000. Tarn uses $55,000 of credit in 2025. The $15,000 excess is carried back one year and any remainder forward up to 20 years under §39(a).",
    B: "Incorrect. The general business credit cannot reduce tax liability to zero when net regular tax exceeds $25,000. The 25%-of-excess rule leaves at least $10,000 of tax unabated here.",
    C: "Incorrect. The credit is limited to net income tax; it can never exceed the tax liability, and the §38(c) formula reduces the usable amount further to $55,000.",
    D: "Incorrect. $48,750 = 75% x $65,000 applies 25% to the entire regular tax rather than to the portion above $25,000. The limitation is 25% of net regular tax liability in excess of $25,000."
  },
  tags: ["§38","general business credit","credit limitation","§39 carryover"]
},
{
  id: "REG-138", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "C corporations — State and local tax issues", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Umbra Corp. is incorporated and headquartered in State A. It has manufacturing plants in States A and B, and its sales representatives solicit orders in State C that are accepted and shipped from State A. Umbra also earns dividend income on an investment portfolio managed at its headquarters and rental income from an unrelated warehouse it owns in State D, where it has no other activity. Which of the following correctly describes the state income tax treatment of these items?",
  reference: "State corporate income tax concepts (UDITPA): nexus is the minimum connection required before a state may tax an out-of-state business. Business income (income from the regular course of the trade or business) is apportioned among the states in which the taxpayer has nexus using a formula (property, payroll and/or sales). Nonbusiness income (e.g., investment income unrelated to the business) is allocated entirely to a single state, typically the state of commercial domicile for intangibles or the state where real property is located for rents. Public Law 86-272 prohibits a state from imposing a net income tax on a business whose only in-state activity is the solicitation of orders for tangible personal property that are approved and filled from outside the state.",
  options: [
    { key: "A", text: "Manufacturing income is apportioned between States A and B; State C cannot impose income tax because of P.L. 86-272; the dividends are allocated to State A; and the warehouse rent is allocated to State D." },
    { key: "B", text: "All income is apportioned equally among States A, B, C and D because Umbra derives income from each." },
    { key: "C", text: "Manufacturing income is apportioned among States A, B and C; the dividends and rents are included in the apportionable base." },
    { key: "D", text: "All income is taxed only by State A because Umbra is incorporated there." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Manufacturing income is business income apportioned among the states where Umbra has nexus (A and B). Umbra's only activity in State C is protected solicitation, so P.L. 86-272 bars a net income tax there. The dividends are nonbusiness income from intangibles allocated to the commercial domicile (State A), and rent from real property is nonbusiness income allocated to the situs state (State D), where ownership of real property itself creates nexus.",
    B: "Incorrect. Income is not divided equally by the number of states. Business income is apportioned by formula among nexus states, nonbusiness income is allocated, and State C lacks the power to tax under P.L. 86-272.",
    C: "Incorrect. State C cannot tax Umbra because its only in-state activity is solicitation of orders for tangible personal property approved and filled from outside the state. Nonbusiness income (dividends and unrelated rents) is allocated, not apportioned.",
    D: "Incorrect. The state of incorporation has no exclusive claim to tax a multistate business. Each state in which the corporation has nexus may tax its apportioned share of business income and its allocated nonbusiness income."
  },
  tags: ["nexus","apportionment","allocation","P.L. 86-272","UDITPA"]
},
{
  id: "REG-139", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Eligibility and election", skill: "Application", difficulty: 2,
  stem: "Vega Inc. has been an S corporation since 2019 and has accumulated earnings and profits from its years as a C corporation. Which of the following events would cause Vega's S election to terminate?",
  reference: "IRC §1362(d): an S election terminates (1) by revocation with the consent of shareholders holding more than 50% of the shares (voting and nonvoting); (2) on the day the corporation ceases to be a small business corporation (e.g., an ineligible shareholder such as a nonresident alien, partnership or C corporation acquires stock, or a second class of stock is created); or (3) if the corporation has accumulated E&P and its passive investment income exceeds 25% of gross receipts for three consecutive tax years, effective the first day of the fourth year. After termination, a new election generally cannot be made for 5 years without IRS consent.",
  options: [
    { key: "A", text: "Passive investment income exceeded 25% of Vega's gross receipts in 2023, 2024 and 2025." },
    { key: "B", text: "Shareholders holding 45% of Vega's shares file a written revocation with the IRS." },
    { key: "C", text: "A shareholder transfers her shares to a qualified subchapter S trust (QSST) that files the required election." },
    { key: "D", text: "Vega's board issues a second class of common stock that is identical to the existing stock except that it is nonvoting." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Because Vega has C corporation accumulated E&P, passive investment income in excess of 25% of gross receipts for three consecutive years terminates the S election under §1362(d)(3), effective January 1, 2026. (In each of those years the corporation also owes the §1375 tax on excess net passive income.)",
    B: "Incorrect. A revocation requires the consent of shareholders holding more than 50% of the outstanding shares. Holders of 45% cannot revoke the election.",
    C: "Incorrect. A QSST that makes the beneficiary election is an eligible S corporation shareholder under §1361(d). The transfer does not terminate the election.",
    D: "Incorrect. Differences solely in voting rights do not create a second class of stock under §1361(c)(4). Only differences in rights to distributions or liquidation proceeds violate the one-class-of-stock rule."
  },
  tags: ["§1362(d)","S election termination","passive investment income","revocation","second class of stock"]
},
{
  id: "REG-140", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Ordinary business income, separately stated items and AAA", skill: "Application", difficulty: 2,
  stem: "Wren Corp., a calendar-year S corporation with no accumulated E&P, reported the following for 2025: sales $600,000; cost of goods sold $250,000; salaries (including reasonable compensation to its sole shareholder) $120,000; MACRS depreciation $30,000; business meals $8,000; charitable contributions $10,000; long-term capital gain $20,000; tax-exempt municipal bond interest $4,000; §179 expense $25,000. What is Wren's ordinary business income for 2025, and by what amount does its accumulated adjustments account (AAA) increase for the year (before distributions)?",
  reference: "IRC §1366 and §1368(e): an S corporation computes ordinary business income (loss) from its trade or business, excluding items that must be separately stated because they could affect shareholders differently (e.g., capital gains and losses, §1231 gains, charitable contributions, §179 expense, investment income, tax-exempt income). Business meals are 50% deductible under §274(n); the nondeductible half is a nondeductible expense. AAA is increased by ordinary income and separately stated income and decreased by separately stated deductions and nondeductible expenses, but tax-exempt income (and related expenses) does not affect AAA.",
  options: [
    { key: "A", text: "Ordinary business income $196,000; AAA increase $177,000" },
    { key: "B", text: "Ordinary business income $196,000; AAA increase $181,000" },
    { key: "C", text: "Ordinary business income $181,000; AAA increase $181,000" },
    { key: "D", text: "Ordinary business income $161,000; AAA increase $165,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Ordinary business income = $600,000 - $250,000 - $120,000 - $30,000 - $4,000 (50% of meals) = $196,000. AAA increase = ordinary income $196,000 + LTCG $20,000 - charitable $10,000 - §179 $25,000 - nondeductible meals $4,000 = $177,000. Tax-exempt interest ($4,000) increases shareholder stock basis but is excluded from AAA (it is tracked in the other adjustments account).",
    B: "Incorrect. $181,000 includes the $4,000 of tax-exempt interest in AAA. Under §1368(e)(1)(A), AAA is adjusted for items other than tax-exempt income and the expenses related to it.",
    C: "Incorrect. This nets the separately stated items into ordinary business income. Capital gains, charitable contributions and §179 expense must be separately stated on Schedule K so each shareholder applies his or her own limitations.",
    D: "Incorrect. $161,000 deducts the charitable contributions and §179 expense in arriving at ordinary business income (and $165,000 mishandles the meals). Both items are separately stated, not components of ordinary income."
  },
  tags: ["§1366","ordinary business income","separately stated items","AAA","§1368(e)"]
},
{
  id: "REG-141", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "S corporations — Basis of shareholder's interest", skill: "Analysis", difficulty: 3,
  stem: "Xan is the sole shareholder of Yale Inc., an S corporation. In 2023 Xan lent Yale $20,000, evidenced by a written promissory note. Losses in 2023 and 2024 reduced Xan's stock basis to $0 and his debt basis to $5,000. In 2025 Yale had ordinary business income of $6,000 and, on December 31, 2025, repaid the $20,000 note in full. Yale made no other distributions. What are the tax consequences to Xan of the 2025 repayment?",
  reference: "IRC §1367(b)(2): when a shareholder's debt basis has been reduced by losses, any net increase in a subsequent year (income items in excess of losses and distributions) first restores the debt basis, up to the original amount, before increasing stock basis. Repayment of a loan whose basis is less than its face amount produces gain equal to the excess; if the loan is evidenced by a written note, the gain is capital gain (long-term if the note was held more than one year); if it is an open-account advance, the gain is ordinary income (Rev. Rul. 64-162; Reg. §1.1367-2).",
  options: [
    { key: "A", text: "$9,000 long-term capital gain" },
    { key: "B", text: "$15,000 long-term capital gain" },
    { key: "C", text: "$15,000 ordinary income" },
    { key: "D", text: "$9,000 ordinary income" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The 2025 net increase of $6,000 first restores debt basis: $5,000 + $6,000 = $11,000 (stock basis remains $0). Repayment of a $20,000 note with an $11,000 basis produces $9,000 of gain. Because the loan is evidenced by a written note held since 2023, the gain is long-term capital gain.",
    B: "Incorrect. $15,000 = $20,000 - $5,000 ignores the restoration rule. Under §1367(b)(2)(B), the current year's net increase restores debt basis before any amount goes to stock basis, so debt basis at the time of repayment is $11,000, not $5,000.",
    C: "Incorrect. This both ignores the basis restoration and mischaracterizes the gain. Gain on repayment of a loan evidenced by a written note is treated as gain from the sale or exchange of a capital asset.",
    D: "Incorrect. The amount is correct but the character is not. Ordinary income treatment applies only to repayments of open-account (non-note) debt. A formal written note is a capital asset in the shareholder's hands."
  },
  tags: ["§1367(b)(2)","debt basis","restoration","loan repayment","S corporation"]
},
{
  id: "REG-142", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Ordinary business income and separately stated items", skill: "Application", difficulty: 2,
  stem: "Zola LLP, a calendar-year partnership, reported the following for 2025: revenue from services $400,000; salaries to employees $90,000; guaranteed payments to partners for services $60,000; rent expense $40,000; depreciation $25,000; business meals $6,000; charitable contributions $5,000; §1231 gain on the sale of equipment $12,000; dividend income $3,000; partners' health insurance premiums paid by the partnership $8,000 (treated as guaranteed payments). What is Zola's 2025 ordinary business income reported on page 1 of Form 1065?",
  reference: "IRC §702 and §707(c): partnership ordinary business income is computed after deducting guaranteed payments (including premiums for partners' health insurance, which are guaranteed payments under Rev. Rul. 91-26) but before separately stated items such as capital and §1231 gains, dividend income, charitable contributions, and §179 expense. Business meals are 50% deductible (§274(n)).",
  options: [
    { key: "A", text: "$174,000" },
    { key: "B", text: "$182,000" },
    { key: "C", text: "$189,000" },
    { key: "D", text: "$234,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. Ordinary business income = $400,000 - $90,000 salaries - $60,000 guaranteed payments - $8,000 health insurance guaranteed payments - $40,000 rent - $25,000 depreciation - $3,000 (50% of meals) = $174,000. The §1231 gain, dividend income and charitable contributions are separately stated on Schedule K and do not enter ordinary income; the guaranteed payments are also separately reported to the recipient partners.",
    B: "Incorrect. $182,000 fails to deduct the $8,000 of partners' health insurance premiums. Premiums paid for a partner's health insurance without regard to partnership income are guaranteed payments deductible by the partnership and includible by the partner (who may then claim the §162(l) deduction).",
    C: "Incorrect. $189,000 = $174,000 + $12,000 §1231 gain + $3,000 dividends adds back the separately stated income items. These items keep their character and are reported separately on Schedule K so partners can apply the §1231 netting and qualified dividend rules on their own returns.",
    D: "Incorrect. $234,000 does not deduct the $60,000 of guaranteed payments for services. Guaranteed payments are deductible by the partnership in computing ordinary income (as if paid to a non-partner) and are ordinary income to the receiving partners."
  },
  tags: ["§702","§707(c)","ordinary business income","Form 1065","separately stated items"]
},
{
  id: "REG-143", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Partnerships — Basis of partner's interest", skill: "Application", difficulty: 2,
  stem: "Ada is a 25% partner in Brook Partners. At January 1, 2025 her outside basis was $50,000, which included her $10,000 share of partnership liabilities. During 2025 the partnership reported ordinary income of $120,000, tax-exempt interest of $8,000, a §179 deduction of $32,000 and charitable contributions of $12,000, all allocated 25% to Ada. The partnership distributed $20,000 cash to Ada, and at December 31, 2025 Ada's share of partnership liabilities was $4,000. What is Ada's outside basis at December 31, 2025?",
  reference: "IRC §705 and §752: a partner's outside basis is increased by her distributive share of income (taxable and tax-exempt) and by increases in her share of partnership liabilities, and decreased (not below zero) by distributions, her share of losses and deductions (including separately stated deductions such as §179 and charitable contributions), nondeductible expenditures, and decreases in her share of liabilities (treated as a cash distribution).",
  options: [
    { key: "A", text: "$45,000" },
    { key: "B", text: "$51,000" },
    { key: "C", text: "$43,000" },
    { key: "D", text: "$57,000" }
  ],
  answer: "A",
  explanations: {
    A: "Correct. $50,000 + 25% x $120,000 ($30,000) + 25% x $8,000 ($2,000) - $20,000 distribution - 25% x $32,000 ($8,000) - 25% x $12,000 ($3,000) - $6,000 decrease in liability share ($10,000 to $4,000) = $45,000.",
    B: "Incorrect. $51,000 ignores the $6,000 reduction in Ada's share of partnership liabilities. Under §752(b) a decrease in a partner's share of liabilities is treated as a distribution of money and reduces basis.",
    C: "Incorrect. $43,000 omits the $2,000 of tax-exempt interest. Tax-exempt income increases outside basis under §705(a)(1)(B) so that the exempt income is not taxed later as gain on a sale or distribution.",
    D: "Incorrect. $57,000 fails to reduce basis for the §179 deduction and the charitable contribution. Although separately stated, these items reduce the partner's basis under §705(a)(2) because they are deducted (subject to limits) on the partner's return."
  },
  tags: ["§705","§752","outside basis","separately stated items","partnership liabilities"]
},
{
  id: "REG-144", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Limited liability companies — Tax classification options", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Cove LLC was formed under state law by three individual members. Which of the following statements regarding Cove's federal tax classification options is correct?",
  reference: "Reg. §301.7701-2 and -3 (check-the-box regulations): a domestic eligible entity with two or more members is classified as a partnership by default; a single-member eligible entity is disregarded by default. An eligible entity may elect on Form 8832 to be classified as an association taxable as a corporation. An LLC that wishes to be an S corporation may file Form 2553 alone, which is treated as also making the election to be taxed as a corporation. Once an election is made, a new election generally cannot be made for 60 months.",
  options: [
    { key: "A", text: "Cove is taxed as a partnership by default; it may elect to be taxed as a C corporation by filing Form 8832, or as an S corporation by filing Form 2553 if it meets the S corporation eligibility requirements." },
    { key: "B", text: "Cove must be taxed as a corporation because it provides limited liability to all of its members." },
    { key: "C", text: "Cove may elect to be taxed as a partnership, a corporation or a trust, depending on the election filed." },
    { key: "D", text: "Cove is taxed as a partnership and may not change that classification while it has more than one member." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. A multi-member domestic LLC defaults to partnership classification. It may elect association (C corporation) status on Form 8832, or elect S corporation status directly on Form 2553, provided all members are eligible shareholders and the LLC has a single class of membership interests.",
    B: "Incorrect. Since 1997 the check-the-box regulations have made limited liability irrelevant to classification. An LLC is classified as a partnership or disregarded entity by default regardless of the liability protection it provides.",
    C: "Incorrect. Trust classification is not an available election. An eligible business entity may be a partnership (or disregarded entity) or an association taxable as a corporation.",
    D: "Incorrect. An LLC may change its classification by election on Form 8832 (or Form 2553), subject to the 60-month limitation on subsequent changes. The number of members affects only the default classification."
  },
  tags: ["check-the-box","Form 8832","Form 2553","LLC classification","Reg. §301.7701-3"]
},
{
  id: "REG-145", area: "V", areaName: "Federal Taxation of Entities (including tax preparation)",
  topic: "Tax-exempt organizations — Types and filing requirements", skill: "Remembering & Understanding", difficulty: 1,
  stem: "Four organizations seek federal tax exemption: (1) a community food bank organized exclusively for charitable purposes; (2) a chamber of commerce that promotes the general business interests of a city; (3) a civic league that promotes social welfare and engages substantially in lobbying; and (4) a members-only golf club supported by dues. Which of the following correctly identifies the type of exemption and whether contributions are deductible by donors under §170?",
  reference: "IRC §501(c): (c)(3) organizations (religious, charitable, scientific, educational, etc.) may receive tax-deductible contributions, may not participate in political campaigns and may engage in only insubstantial lobbying; most must apply on Form 1023 (churches are exempt from the application requirement). (c)(4) social welfare organizations may lobby without limit; (c)(6) business leagues and chambers of commerce; (c)(7) social and recreational clubs. Contributions to (c)(4), (c)(6) and (c)(7) organizations are not deductible as charitable contributions (although dues to a (c)(6) may be a deductible business expense to the extent not attributable to lobbying).",
  options: [
    { key: "A", text: "(1) §501(c)(3), deductible; (2) §501(c)(6), not deductible; (3) §501(c)(4), not deductible; (4) §501(c)(7), not deductible." },
    { key: "B", text: "(1) §501(c)(3), deductible; (2) §501(c)(3), deductible; (3) §501(c)(4), deductible; (4) §501(c)(7), not deductible." },
    { key: "C", text: "(1) §501(c)(3), deductible; (2) §501(c)(6), not deductible; (3) §501(c)(3), deductible; (4) §501(c)(4), not deductible." },
    { key: "D", text: "All four are §501(c)(3) organizations and contributions to each are deductible." }
  ],
  answer: "A",
  explanations: {
    A: "Correct. The food bank is a §501(c)(3) charity eligible for deductible contributions. A chamber of commerce is a §501(c)(6) business league. A civic league engaged in substantial lobbying qualifies under §501(c)(4), not (c)(3), because (c)(3) status permits only insubstantial lobbying. A members-only golf club is a §501(c)(7) social club. Contributions to (c)(4), (c)(6) and (c)(7) organizations are not deductible under §170(c).",
    B: "Incorrect. A chamber of commerce promotes its members' business interests rather than a charitable purpose and is exempt under §501(c)(6); contributions to it are not charitable deductions. A (c)(4) organization also cannot receive deductible contributions.",
    C: "Incorrect. Substantial lobbying disqualifies an organization from §501(c)(3) status. The civic league is a §501(c)(4) social welfare organization, and a golf club is a (c)(7), not a (c)(4).",
    D: "Incorrect. Only organizations organized and operated exclusively for the purposes listed in §501(c)(3) qualify for that status. Business leagues, social welfare organizations and social clubs are exempt under other paragraphs and cannot receive deductible charitable contributions."
  },
  tags: ["§501(c)(3)","§501(c)(4)","§501(c)(6)","§501(c)(7)","tax-exempt organizations","§170(c)"]
}
];
