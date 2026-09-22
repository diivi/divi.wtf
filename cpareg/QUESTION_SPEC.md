# Question bank spec (source of truth for all agents)

`questions.js` must set a single global and nothing else:

```js
window.QUESTION_BANK = [ /* question objects */ ];
```

No ES modules, no `export`, no `require`. It must load via a plain `<script>` tag from `file://`.

## Question object

```js
{
  id: "REG-001",                    // stable, unique, zero-padded, never reused
  area: "IV",                       // "I" | "II" | "III" | "IV" | "V"
  areaName: "Federal Taxation of Individuals",
  topic: "Gross income — inclusions",   // AICPA Blueprint group/topic label
  skill: "Application",             // "Remembering & Understanding" | "Application" | "Analysis"
  difficulty: 2,                    // 1 easy, 2 medium, 3 hard
  stem: "Question text. Markdown-lite allowed: **bold**, blank line = paragraph, and simple pipe tables.",
  reference: "Optional. Rate tables, thresholds, fact-pattern data, code section summaries the candidate needs. Same markdown-lite. Empty string if none.",
  options: [
    { key: "A", text: "..." },
    { key: "B", text: "..." },
    { key: "C", text: "..." },
    { key: "D", text: "..." }
  ],
  answer: "B",
  explanations: {                   // one entry per option, 2–5 sentences each, cite the rule / IRC section / UCC article etc.
    A: "Why this is wrong ...",
    B: "Why this is right ...",
    C: "...",
    D: "..."
  },
  tags: ["§61", "constructive receipt"]
}
```

## Area names (use exactly)

| area | areaName | Blueprint weight | Target count |
|---|---|---|---|
| I   | Ethics, Professional Responsibilities and Federal Tax Procedures | 10–20% | 15 |
| II  | Business Law | 15–25% | 20 |
| III | Federal Taxation of Property Transactions | 5–15% | 10 |
| IV  | Federal Taxation of Individuals | 22–32% | 27 |
| V   | Federal Taxation of Entities (including tax preparation) | 23–33% | 28 |

## Exam style (derived from the 2026 AICPA Newly Released REG MCQs, REG-146 to REG-178)

The released items are the style model. Match them, not textbook-style problems:

- **One rule per question.** A stem tests a single concept with 2-4 numbers at most. Never combine two computations into one item ("what is X and what is Y").
- **Stem length 25-70 words.** Generic actors: "A taxpayer", "A corporation", "A CPA", or a bare surname / "Moore Co." No biographies (age, marital status, occupation) unless the rule turns on them.
- **No calendar years.** Use "Year 1, Year 4" or "the current year". Never "2025".
- **No `reference` crib.** The exam gives no rule summaries. `reference` is `""` except for a rate table or fact table that the exam itself would put in the stem. The Blueprint says inflation-indexed amounts are not tested: if a question needs one, state the figure in one clause of the stem ("the annual limit is $X") or rewrite to avoid it.
- **Options are short.** Numeric items: four amounts. Conceptual items: four phrases under ~20 words. "Amount, character" pairs (e.g. "$3,000, long-term") are fine; sentence-length compound options are not.
- **Every distractor is one specific wrong step** (used FMV instead of carryover basis; forgot the liability decrease; applied the individual $3,000 rule to a corporation). The explanation for each wrong option names that step and shows the arithmetic that produces it.
- **Skill is Remembering & Understanding or Application only.** AICPA MCQs are never Analysis; Analysis is tested in simulations. Do not label MCQs Analysis.
- **"Except" / "not" stems** and "which of the following is correct regarding" stems are common on the exam and are fine.
- Explanations: "Correct. ..." / "Incorrect. ..." then 2-4 sentences citing the rule (IRC §, Circular 230 §, UCC article).
- Items transcribed from AICPA releases carry `source: "AICPA Newly Released 2026, MCQ-NNNNN (task)"` and the tag `AICPA-released-2026`; never edit their wording.

## Content rules

- Written for the **2026 CPA Exam** (AICPA REG Blueprint in effect for 2026 testing). Verify the current Blueprint and its groups/topics via web search before writing; do not rely on memory alone.
- Law as in effect for the 2026 exam (tax year 2025 law, including OBBBA changes). Do not put calendar years or inflation-indexed amounts in stems unless the figure is supplied in the stem (see Exam style).
- Each question is fully self-contained: every number, rate or table needed to solve it appears in `stem` or `reference`.
- Exactly 4 options, exactly one correct. No "all of the above" / "none of the above".
- Distractors must be plausible (common mistakes), not obviously silly.
- Explanations for **every** option, including the correct one. Explain the underlying rule, not just "incorrect".
- Skill mix roughly 25% Remembering & Understanding, 75% Application. No Analysis MCQs (see Exam style).
- Calculation questions should show the working in the correct-answer explanation.
- Keep stems realistic in exam style (third-person fact patterns, "Which of the following...", "What amount...").
- Markdown-lite only: `**bold**`, paragraphs separated by a blank line, pipe tables (`| a | b |` with a `|---|---|` separator row), and `- ` bullet lines. No HTML, no headings.
- Use only straight ASCII quotes inside JS strings or escape properly; the file must parse with `node -e "require('vm')..."` — run `node validate.js` (in repo root) before finishing.
