// Usage: node validate.js [path/to/questions.js]
const fs = require("fs");
const vm = require("vm");
const path = process.argv[2] || "questions.js";
const src = fs.readFileSync(path, "utf8");
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(src, ctx, { filename: path });
const bank = ctx.window.QUESTION_BANK;
if (!Array.isArray(bank)) { console.error("window.QUESTION_BANK is not an array"); process.exit(1); }

const AREAS = {
  I: "Ethics, Professional Responsibilities and Federal Tax Procedures",
  II: "Business Law",
  III: "Federal Taxation of Property Transactions",
  IV: "Federal Taxation of Individuals",
  V: "Federal Taxation of Entities (including tax preparation)",
};
const TARGET = { I: 15, II: 20, III: 10, IV: 27, V: 28 };
const SKILLS = ["Remembering & Understanding", "Application", "Analysis"];
const errors = [];
const ids = new Set();
const counts = { I: 0, II: 0, III: 0, IV: 0, V: 0 };
const skillCounts = {};
const topics = {};

bank.forEach((q, i) => {
  const tag = `#${i} (${q && q.id})`;
  if (!q || typeof q !== "object") return errors.push(`${tag}: not an object`);
  if (!q.id || ids.has(q.id)) errors.push(`${tag}: missing/duplicate id`); ids.add(q.id);
  if (!AREAS[q.area]) errors.push(`${tag}: bad area ${q.area}`);
  else { counts[q.area]++; if (q.areaName !== AREAS[q.area]) errors.push(`${tag}: areaName mismatch`); }
  if (!q.topic) errors.push(`${tag}: missing topic`); else (topics[q.area] ||= new Set()).add(q.topic);
  if (!SKILLS.includes(q.skill)) errors.push(`${tag}: bad skill ${q.skill}`); skillCounts[q.skill] = (skillCounts[q.skill] || 0) + 1;
  if (![1, 2, 3].includes(q.difficulty)) errors.push(`${tag}: bad difficulty`);
  if (!q.stem || typeof q.stem !== "string") errors.push(`${tag}: missing stem`);
  if (typeof q.reference !== "string") errors.push(`${tag}: reference must be string`);
  const keys = Array.isArray(q.options) ? q.options.map(o => o.key) : [];
  if (keys.join("") !== "ABCD") errors.push(`${tag}: options keys must be A,B,C,D (got ${keys.join(",")})`);
  if (Array.isArray(q.options)) q.options.forEach(o => { if (!o.text) errors.push(`${tag}: option ${o.key} empty`); });
  if (!keys.includes(q.answer)) errors.push(`${tag}: answer ${q.answer} not in options`);
  ["A", "B", "C", "D"].forEach(k => { if (!q.explanations || !q.explanations[k] || q.explanations[k].length < 40) errors.push(`${tag}: explanation ${k} missing/too short`); });
  if (!Array.isArray(q.tags)) errors.push(`${tag}: tags must be array`);
  const txt = JSON.stringify(q.options).toLowerCase();
  if (txt.includes("all of the above") || txt.includes("none of the above")) errors.push(`${tag}: forbidden option text`);
});

console.log(`Questions: ${bank.length}`);
console.log("Per area (count / target):");
for (const a of Object.keys(AREAS)) console.log(`  ${a.padEnd(4)} ${String(counts[a]).padStart(3)} / ${TARGET[a]}   topics: ${topics[a] ? topics[a].size : 0}`);
console.log("Skill mix:", skillCounts);
if (errors.length) { console.error(`\n${errors.length} error(s):`); errors.forEach(e => console.error(" - " + e)); process.exit(1); }
console.log("\nOK: bank is valid.");
