# REG question bank — Blueprint coverage and review (2026-09-20, updated 2026-09-22)

Source of truth: AICPA *Uniform CPA Examination Blueprints* effective 2026 (REG section, pages REG1–REG17 of the official PDF). Bank: `questions.js`, 178 questions (REG-001 … REG-178). Ids marked `*` in the map are the 33 AICPA Newly Released 2026 REG MCQs (REG-146 … REG-178, source `AICPANewlyReleasedQuestions.pdf`), tagged `AICPA-released-2026`; the release's three "beyond the scope of the CPA Exam" items (repeat examinations, agency advantages, audit adjustments to a later year) and its two simulations were not added. On 2026-09-22 the 122 in-scope original items were restyled to the released-item format (see "Exam style" in `QUESTION_SPEC.md`): no `reference` crib, one rule per item, generic actors, no calendar years, R&U/Application only. Per-row counts in the map below predate the 2026-09-22 additions; run `node validate.js` for live totals. `node validate.js questions.js` → **OK: bank is valid.**

Important finding: the 2026 REG Blueprint is narrower than the writer assumed. Gains/losses on dispositions (§1031, §1033, §121, §267, §1231/§1245), gift/estate tax, AMT, kiddie tax, §351 formation, E&P distributions, liquidations, PHC/AET, consolidated returns, S-corp built-in gains, §751/§754, trusts/estates, UBTI and §911 are **not** in the 2026 REG Blueprint (they sit in the TCP discipline). Those 23 questions were kept (they are accurate and were commissioned), but each carries the tag `beyond-2026-REG-blueprint` and a topic label ending in "(2026 Blueprint: TCP scope)" so the app can filter or de-emphasise them. In-scope count: **122** (I 23, II 29, III 10, IV 35, V 25).

## Coverage map (Area → Group → Topic → ids)

| Area | Group | Topic | Question ids | # |
|---|---|---|---|---|
| I (10–20%) | A. Ethics and responsibilities in tax practice | 1. Regulations governing practice before the IRS (Circular 230) | 001, 002, 003, 146*, 147* | 3 |
| I | A. | 2. IRC and Regulations related to tax return preparers (+ AICPA SSTS) | 004, 005, 006, 007, 101 | 5 |
| I | B. Licensing and disciplinary systems | — | 008, 102 | 2 |
| I | C. Federal tax procedures | 1. Audits, appeals and the judicial process | 013, 103 | 2 |
| I | C. | (statute of limitations — assessment/refund, within Group C) | 009, 010 | 2 |
| I | C. | 2. Substantiation and disclosure | 104, 105, 107, 148* | 3 |
| I | C. | 3. Taxpayer penalties | 011, 012, 149* | 2 |
| I | C. | 4. Authoritative hierarchy | 106 | 1 |
| I | D. Legal duties and responsibilities | 1. Common law duties and liabilities to clients and third parties | 015 | 1 |
| I | D. | 2. Privileged communications, confidentiality and privacy acts | 014, 108 | 2 |
| **I total** | | | | **23 (15.9%)** |
| II (15–25%) | A. Agency | 1. Authority of agents and principals | 016, 018 | 2 |
| II | A. | 2. Duties and liabilities of agents and principals | 017, 109, 150* | 2 |
| II | B. Contracts | 1. Formation | 019, 020, 021, 022, 151* | 4 |
| II | B. | 2. Performance and discharge | 024, 110, 152*, 153* | 2 |
| II | B. | 3. Breach and remedies | 023, 111, 154* | 2 |
| II | C. Debtor-creditor relationships | suretyship, Article 9, bankruptcy distribution | 025, 026, 027, 028, 117 | 5 |
| II | D. Federal laws and regulations | bankruptcy (types, discharge, avoidance) | 029, 030, 114 | 3 |
| II | D. | employment taxes and worker classification | 031, 032, 115 | 3 |
| II | D. | qualified health plans (ACA) | 112 | 1 |
| II | D. | anti-bribery (FCPA) | 113 | 1 |
| II | E. Business structure | 1. Selection, formation, operation and termination | 034, 116, 155* | 2 |
| II | E. | 2. Rights, duties, obligations and authority of owners and management | 033, 035 | 2 |
| **II total** | | | | **29 (20.0%)** |
| III (5–15%) | A. Basis of assets | purchased / converted / gift / inherited / wash sale / intangibles | 036, 037, 118, 119, 120, 121, 156* | 6 |
| III | B. Cost recovery | MACRS, bonus, §179, §197 | 044, 045, 122, 123, 157*, 158*, 159* | 4 |
| III | *(TCP scope)* | dispositions §1031/§1033/§121/§267/§1245/§1231 | 038–043 | 6 |
| **III total** | | | | **16 (11.0%)** — 10 in scope |
| IV (22–32%) | A. Gross income (inclusions and exclusions) | | 046, 047, 048, 049, 069, 124, 125, 126, 160*, 161*; capital gains / basis / holding period (AICPA task RIV-A0.2): 162*, 163*, 164* | 8 |
| IV | B. Reporting of items from pass-through entities | | 127, 128 | 2 |
| IV | C. Adjustments and deductions to arrive at AGI and taxable income (incl. QBI) | | 050–056, 070, 129, 166* | 9 |
| IV | D. Loss limitations | | 059, 060, 061, 130, 131, 165* | 5 |
| IV | E. Filing status | | 057, 058, 132, 167*, 168* | 3 |
| IV | F. Computation of tax and credits | | 064, 065, 066, 067, 068, 133, 134, 135, 169* (+062 kiddie, 063 AMT tagged TCP) | 10 |
| IV | *(TCP scope)* | gift and estate tax | 071, 072 | 2 |
| **IV total** | | | | **39 (26.9%)** — 35 in scope |
| V (23–33%) | A. Differences between book and tax income | Schedule M-1 / M-3 | 097, 136, 170*, 171*, 172*, 173*, 174* | 2 |
| V | B. C corporations | 1. Taxable income, tax liability, credits (+§448 methods) | 075, 076, 077, 078, 098, 137, 175*, 176* | 6 |
| V | B. | 2. State and local tax issues | 094, 138 | 2 |
| V | C. S corporations | 1. Eligibility and election | 082, 139 | 2 |
| V | C. | 2. Ordinary business income, separately stated items, AAA | 084, 140 | 2 |
| V | C. | 3. Basis of shareholder's interest | 083, 141 | 2 |
| V | D. Partnerships | 1. Ordinary business income and separately stated items | 142 | 1 |
| V | D. | 2. Basis of partner's interest | 086, 087, 088, 143, 177* | 4 |
| V | E. Limited liability companies | | 099, 144, 178* | 2 |
| V | F. Tax-exempt organizations | types | 100, 145 | 2 |
| V | *(TCP scope)* | §351, E&P distributions, liquidations, PHC/AET, consolidated | 073, 074, 079, 080, 081, 096 | 6 |
| V | *(TCP scope)* | BIG tax; §751/§754; trusts; UBTI; §911 | 085; 089, 090; 091, 092; 093; 095 | 7 |
| **V total** | | | | **38 (26.2%)** — 25 in scope |

Skill mix after honest relabelling: R&U 27 (19%), Application 102 (70%), Analysis 16 (11%). The Blueprint targets 25–35% Analysis; the bank is Application-heavy. See open concerns.

## Changes made

Figures verified (web, Rev. Proc. 2024-40 items surfaced via IRS/Tax Notes summaries): §461(l) $313,000/$626,000 ✔; §448 $31,000,000 ✔. Sanity-checked from memory and consistent with the published year-over-year progression: §6695(g) $650 and §6695(a) $60 / $32,000 cap (returns filed 2026; $635/$31,500 for 2025 filings), §6651 minimum $525 (returns due 2026; $510 in 2025, $535 in 2027), bankruptcy wage priority $17,150 (April 2025 adjustment), IRA phase-out $79k–$89k single, qualifying-relative gross income $5,200, §911 $130,000, kiddie $1,350/$450, AOTC phase-outs $80k–$90k / $160k–$180k (not indexed), CTC $2,200 / ACTC $1,700, standard deduction $15,750/$31,500, senior deduction $6,000 (§151(d)(5), 6% phase-out over $75k/$150k), tips §224 $25,000 and overtime §225 $12,500/$25,000, SALT $40,000 with 30% phase-down to $10,000 floor, §179 $2.5M/$4M, 100% bonus for property acquired after Jan 19 2025, SS wage base $176,100, AMT exemption $88,100/$137,000, gift exclusion $19,000, basic exclusion $13,990,000, HSA $4,300/$8,550. All of these were already correct in the bank; each `reference` states "Tax year 2025" where a figure matters.

| id | Fix | Why |
|---|---|---|
| REG-019 | **Wrong answer key.** Stem said acceptance "must be received by May 10", which displaces the mailbox rule; revocation received May 8 then preceded the May 9 receipt of acceptance, making option B (no contract) at least as correct as the keyed D. Rewrote stem to a plain offer "open until May 10" with no receipt requirement; key is now C (contract on dispatch, May 6); all four explanations rewritten. | Ambiguous/incorrect key |
| REG-060 | Option C ("$250,000 deductible; $450,000 suspended under at-risk") was literally correct and merely less complete than keyed D. Replaced C with "$450,000 becomes an NOL carryforward" (wrong: at-risk suspension is not an NOL) and rewrote explanation C. | Two defensible answers |
| REG-002 | Explanation B claimed a "reasonably anticipates examination" test; current §10.27(b)(2) uses the 120-days-after-written-notice rule only. Rewritten. | Wrong rule statement |
| REG-004 / REG-005 | Explanations referred to "SSTS No. 1 (procedural aspects / use of estimates)". The 2024 SSTS restructuring renumbered these; wording now cites the standard by subject and its former number (SSTS No. 3 / No. 4) without asserting a current paragraph number. | Avoid a citation that may be wrong |
| REG-042 | Explanation D was incoherent. Rewritten to explain the $20,000/$30,000 split as recapturing only the cost-minus-price shortfall. | Clarity |
| REG-052 | Reference said "§151(d)(5)-type" senior deduction; now cites §151(d)(5) as added by OBBBA. | Precision |
| 100 questions | `topic` normalised to "Blueprint Group — Topic" so the weak-area report aggregates by Blueprint group (46 → 46 labels, but now 1 label per group/topic instead of 1 per question). | Consistency |
| 23 questions | Added tag `beyond-2026-REG-blueprint` and "(2026 Blueprint: TCP scope)" suffix (038–043, 062, 063, 071–074, 079–081, 085, 089–093, 095, 096). | Scope transparency |
| Skill/difficulty relabels | 002, 014, 057, 081, 082, 095: R&U → Application (they apply rules to facts). 007, 012, 015, 024, 035, 040, 043, 087: Analysis/3 → Application/2 (single-rule computations or identifications). 031: R&U → Application (difficulty 1). 052: difficulty 3 → 2. | Truth over quota |

OBBBA consistency check: no question presents the $10,000 SALT cap as current law (053 describes it only as the floor); 044/123 use 100% bonus after Jan 19 2025 and note the 40% transition rate; 054 uses the 60% cash limit (permanent) and does not apply the 0.5%-of-AGI charitable floor or the 35% itemized-deduction cap, both of which start in 2026; 066 notes the 50% dependent-care rate starts 2026; 130 relies on the permanent elimination of miscellaneous itemized deductions; 129 relies on the permanent federally-declared-disaster limitation; 031 notes the $2,000 1099 threshold applies after 2025. All effective dates are stated in the affected `reference`/explanation text.

## Questions added (REG-101 … REG-145)

| id | Area / Group | Why |
|---|---|---|
| 101 | I-A.2 who is a tax return preparer (§7701(a)(36)) | Blueprint task "Recall who is a tax return preparer" had no question |
| 102 | I-B state boards / UAA mobility | Group B had one question |
| 103 | I-C.1 30-day letter, protest thresholds, S-case | Group C.1 had one question |
| 104 | I-C.2 Form 8275 disclosure | Topic C.2 had zero |
| 105 | I-C.2 FBAR (FinCEN 114) | Explicit Blueprint task, zero coverage |
| 106 | I-C.4 authoritative hierarchy | Topic had zero |
| 107 | I-C.2 charitable substantiation ($250 CWA, Form 8283, appraisal) | "Identify whether substantiation is sufficient" task |
| 108 | I-D.2 §7216 privacy | "privacy acts" task uncovered |
| 109 | II-A.2 respondeat superior / frolic | Principal liability uncovered |
| 110 | II-B.2 substantial performance, accord & satisfaction | Topic had one |
| 111 | II-B.3 anticipatory repudiation, specific performance, liquidated damages | Topic had one |
| 112 | II-D ACA employer shared responsibility | Explicit Blueprint task, zero |
| 113 | II-D FCPA | Explicit Blueprint task, zero |
| 114 | II-D bankruptcy types / means test / involuntary petition | "Recall the types of bankruptcy" task |
| 115 | II-D FICA / Additional Medicare from employee & employer perspective | "employee perspective" task |
| 116 | II-E.1 promoter liability / corporate formation | Formation topic thin |
| 117 | II-C surety defenses (gratuitous vs compensated) | Guarantor rights/duties task |
| 118 | III-A basis of purchased business asset | Explicit task, zero |
| 119 | III-A personal-to-business conversion dual basis | Explicit task, zero |
| 120 | III-A wash-sale basis | Explicit task, zero |
| 121 | III-A §195/§248 start-up & organizational costs; stock issuance | Explicit task, zero |
| 122 | III-B mid-quarter / mid-month conventions | Convention task uncovered |
| 123 | III-B bonus eligibility (used property, QIP, real property, OBBBA date) | Eligibility task uncovered |
| 124 | IV-A capital gain on virtual currency & investments, netting | Explicit task, zero |
| 125 | IV-A damages (§104) incl. punitive | "punitive damages" named in task |
| 126 | IV-A decedent's final return / IRD | Explicit task, zero |
| 127 | IV-B K-1 items on Form 1040, SE income | Group B had zero |
| 128 | IV-B disregarded SMLLC on Schedule C | Group B / "disregarded entities" |
| 129 | IV-C casualty loss (federally declared disaster) | "casualty losses" named in task |
| 130 | IV-D hobby, wash sale, personal-use asset losses | Explicit task, zero |
| 131 | IV-D §704(d) basis limit for materially participating partner | Explicit task |
| 132 | IV-E abandoned-spouse HOH vs MFS | Group E had two |
| 133 | IV-F net investment income tax | Explicitly named in Blueprint; zero |
| 134 | IV-F refundable vs nonrefundable credits | Explicit task |
| 135 | IV-F tax computation with qualified dividends stacking (2025 brackets) | "Calculate the tax liability" task |
| 136 | V-A Schedule M-3 permanent vs temporary | Explicit task |
| 137 | V-B.1 general business credit limitation | "credits allowable" task, zero |
| 138 | V-B.2 nexus, allocation vs apportionment, P.L. 86-272 | Definitional tasks |
| 139 | V-C.1 S election termination | "revoked or terminated" task |
| 140 | V-C.2 S-corp ordinary income vs separately stated; AAA effect | Explicit task |
| 141 | V-C.3 debt basis restoration and repayment gain | "debt basis … repayment" task |
| 142 | V-D.1 partnership ordinary income with guaranteed payments | Group D.1 had zero |
| 143 | V-D.2 partner basis roll-forward with liability change | Explicit task |
| 144 | V-E LLC classification options | Group E had one |
| 145 | V-F types of exempt organizations & deductibility | Group F had one |

## Open concerns

1. **Inflation-adjusted penalty amounts not directly verified** (web budget exhausted; the IRS IRB page did not render the tables and Tax Notes returned 403): §6695(g) $650, §6695(a) cap $32,000, §6651 minimum $525 (all "returns filed/due in 2026"). They fit the published $635→$650 and $510→$525→$535 sequence but should be spot-checked against Rev. Proc. 2024-40 §3.57/§3.51. Likewise the involuntary-petition threshold in REG-114 ($21,050, April 2025 adjustment) and the $17,150 wage priority in REG-028 are stated in `reference` rather than tested, but should be confirmed against the Judicial Conference notice.
2. **Skill mix.** After honest relabelling Analysis is 11% versus the Blueprint's 25–35%. The writer had inflated Analysis to hit quota; I did not re-inflate it. If the app needs the Blueprint mix, ~20 more genuine multi-rule Analysis items are needed (candidates: Area IV/V return-review scenarios).
3. **Out-of-scope items retained (23).** They are correct and useful for TCP, but a REG-only practice mode should exclude the `beyond-2026-REG-blueprint` tag. If the owner prefers a pure REG bank, delete them; Area III would then be 10 (in range), Area V 25.
4. **AICPA SSTS** (REG-004, 005) is not on the Blueprint's References list (only Circular 230, IRC/Regs, case law and "current textbooks on ethics"). The questions are defensible under the ethics-textbook reference but the exam is unlikely to cite SSTS numbers; I removed specific paragraph numbers.
5. **REG-121 arithmetic relies on 6 months of amortization** (business began July 1); the exam sometimes counts the month of commencement as a full month, which this does.
6. **"Data and technology" representative tasks** (review of automated diagnostic/validation checks, source-data completeness for Forms 1040/1065/1120-S, depreciation schedules) are not testable in single MCQ form; the bank has no items of that type. They are TBS-style tasks.
7. The Blueprint states candidates "will not be tested on … amounts or limitations that are indexed to inflation" and that wages exclude tips/overtime unless stated. All indexed figures in the bank are therefore supplied in `reference`, which matches exam practice.
