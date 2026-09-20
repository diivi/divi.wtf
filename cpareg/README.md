# CPA REG practice

A single-page, dependency-free multiple-choice practice site for the CPA REG
(Regulation) exam. Progress lives in your browser's `localStorage`.

Files:

- `index.html` — page shell; loads `styles.css`, `questions.js`, then `app.js`
- `styles.css` — styling (light theme, dark mode via `prefers-color-scheme`)
- `app.js` — all logic (no frameworks, no build step)
- `questions.js` — the question bank (`window.QUESTION_BANK = [...]`), see `QUESTION_SPEC.md`
- `validate.js` — `node validate.js` checks a bank against the spec

## Run locally

Either double-click `index.html` (it works from `file://`), or serve the folder:

```bash
cd cpareg
python3 -m http.server 8000
# open http://localhost:8000/
```

To try a different bank without editing files, append `?bank=path/to/other.js`
to the URL (path relative to `index.html`).

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository (branch `main`, files at the root).
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Choose branch **`main`** and folder **`/ (root)`**, then Save.
4. After a minute the site is live at `https://<user>.github.io/<repo>/`.

No build step is required; the site is plain static files.

## Using the site

- **Home** shows bank size, seen/unseen counts, accuracy, total study time and a
  per-area breakdown. Pick a batch size and press **Start**.
- Each batch is mostly unseen questions plus ~5% repeats (questions you got
  wrong or skipped come back first, oldest first). Repeats show a "Repeat" badge.
- **Session**: click an option (or press A–D / 1–4). The correct option turns green,
  a wrong pick turns red, and the explanation for every option is shown. Use
  Prev/Next, the arrow keys, or the numbered strip to move around. Each question's
  clock only runs while it is on screen and unanswered.
- **Finish session** records unanswered questions as skipped and shows a summary.
  Closing the tab mid-session is fine; Home offers **Resume** next time.
- **Summary** lists every question with its result and time; **Review** reopens
  a question read-only with all explanations.

## Export results and get help from Claude

On Home, press **Export results (JSON)** to download
`cpareg-results-YYYY-MM-DD.json`, or **Copy JSON to clipboard**. The export
contains overall totals, per-area and per-topic accuracy, a `weakAreas` list
(topics sorted weakest first), per-question history, and every finished session.

Paste the JSON into a Claude conversation with a prompt like:

> Here are my CPA REG practice results. Which topics should I focus on next,
> and can you write 10 new questions on my weakest topics following QUESTION_SPEC.md?

The Summary view also has **Export this session** for a single session's JSON.

**Reset progress** on Home wipes everything stored under the `cpareg.` prefix.

The New session card has a scope toggle: **2026 REG scope only** (default) hides questions
tagged `beyond-2026-REG-blueprint` (topics the 2026 Blueprint moved to TCP); **Include
TCP-scope extras** adds them back. Stored as `cpareg.scope`; history is kept for all questions.

The header has a **Light / Dark / System** switch. The choice is stored as `cpareg.theme`
(System follows your OS setting) and survives a Reset.

## Adding or replacing question batches

1. Write questions following `QUESTION_SPEC.md` (ids must be unique and never reused,
   e.g. continue from `REG-101`).
2. Append the new objects to the array in `questions.js`, or replace the file
   entirely.
3. Run `node validate.js` (or `node validate.js path/to/questions.js`) and fix any errors.
4. Reload the page. History is keyed by question id, so existing progress on
   unchanged ids is kept; ids removed from the bank simply stop appearing in
   batches (their history stays in the export).

Progress is per browser. To move it to another device, export the JSON and keep
it — there is no import, but Claude can read it.
