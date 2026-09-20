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

## Content rules

- Written for the **2026 CPA Exam** (AICPA REG Blueprint in effect for 2026 testing). Verify the current Blueprint and its groups/topics via web search before writing; do not rely on memory alone.
- Use **tax year 2025 figures** (standard deduction, brackets, §179 limits, gift exclusion, etc.) and state "Tax year 2025" in `reference` whenever a figure matters. Reflect 2025 law changes (e.g. One Big Beautiful Bill Act provisions effective for 2025) where relevant.
- Each question is fully self-contained: every number, rate or table needed to solve it appears in `stem` or `reference`.
- Exactly 4 options, exactly one correct. No "all of the above" / "none of the above".
- Distractors must be plausible (common mistakes), not obviously silly.
- Explanations for **every** option, including the correct one. Explain the underlying rule, not just "incorrect".
- Mix of skill levels roughly 20% Remembering & Understanding, 60% Application, 20% Analysis.
- Calculation questions should show the working in the correct-answer explanation.
- Keep stems realistic in exam style (third-person fact patterns, "Which of the following...", "What amount...").
- Markdown-lite only: `**bold**`, paragraphs separated by a blank line, pipe tables (`| a | b |` with a `|---|---|` separator row), and `- ` bullet lines. No HTML, no headings.
- Use only straight ASCII quotes inside JS strings or escape properly; the file must parse with `node -e "require('vm')..."` — run `node validate.js` (in repo root) before finishing.
