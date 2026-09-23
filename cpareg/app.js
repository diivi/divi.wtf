/* CPA REG practice — all application logic. Vanilla JS, no dependencies.
 *
 * Sections:
 *   1. Storage helpers (localStorage, prefix "cpareg.")
 *   2. Bank access + small utilities (incl. inline SVG icons)
 *   3. Markdown-lite renderer
 *   4. Stats (history -> aggregates) and export
 *   5. Batch selection
 *   6. Timer module
 *   7. Views: Home, Session (incl. review mode), Summary
 *   8. Theme, global events + boot
 */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* 1. Storage                                                          */
  /* ------------------------------------------------------------------ */
  var PREFIX = "cpareg.";
  var KEYS = { history: "history", sessions: "sessions", active: "activeSession" };

  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(PREFIX + key);
      if (raw == null) return fallback;
      var v = JSON.parse(raw);
      return v == null ? fallback : v;
    } catch (e) {
      return fallback;
    }
  }
  function save(key, value) {
    try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch (e) { /* quota / private mode */ }
  }
  function remove(key) {
    try { localStorage.removeItem(PREFIX + key); } catch (e) {}
  }
  function clearAll() {
    try {
      var doomed = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(PREFIX) === 0 && k !== PREFIX + "theme" && k !== PREFIX + "scope" && k !== PREFIX + "bank" && k !== PREFIX + "units" && k !== PREFIX + "showTimers") doomed.push(k); // keep theme/scope/units/showTimers preferences
      }
      doomed.forEach(function (k) { localStorage.removeItem(k); });
    } catch (e) {}
  }

  var getHistory = function () { return load(KEYS.history, {}); };
  var getSessions = function () { return load(KEYS.sessions, []); };
  var getActive = function () { return load(KEYS.active, null); };

  /* ------------------------------------------------------------------ */
  /* 2. Bank + utilities                                                 */
  /* ------------------------------------------------------------------ */
  var BANK = Array.isArray(window.QUESTION_BANK) ? window.QUESTION_BANK.filter(function (q) {
    return q && typeof q === "object" && q.id;
  }) : [];
  var BY_ID = {};
  BANK.forEach(function (q) { BY_ID[q.id] = q; });

  /* Scope filter: questions tagged as beyond the 2026 REG Blueprint (moved to
   * the TCP discipline) are excluded from selection and Home stats unless the
   * user opts in with cpareg.scope = "all". History/export always cover all. */
  var EXTRA_TAG = "beyond-2026-REG-blueprint";
  function isExtra(q) { return !!(q && Array.isArray(q.tags) && q.tags.indexOf(EXTRA_TAG) >= 0); }
  var EXTRA_COUNT = BANK.filter(isExtra).length;
  /* Bank picker: 1 = AICPA released items (tag "AICPA-released-2026"), 2 = Claude-written items.
   * cpareg.bank = "aicpa" | "claude" | "both" (default both). */
  var AICPA_TAG = "AICPA-released-2026";
  function isAicpa(q) { return !!(q && ((Array.isArray(q.tags) && q.tags.indexOf(AICPA_TAG) >= 0) || q.source)); }
  var AICPA_COUNT = BANK.filter(isAicpa).length;
  var CLAUDE_COUNT = BANK.length - AICPA_COUNT;
  var Bank = {
    get: function () { var v = load("bank", "both"); return v === "aicpa" || v === "claude" ? v : "both"; },
    set: function (v) { save("bank", v === "aicpa" || v === "claude" ? v : "both"); }
  };
  /** Misc preferences. showTimers: "1" when the session clocks should be visible (default off). */
  var Prefs = {
    showTimers: {
      get: function () { return load("showTimers", null) === "1"; },
      set: function (on) { if (on) save("showTimers", "1"); else remove("showTimers"); }
    }
  };
  var Scope = {
    get: function () { return load("scope", "reg") === "all" ? "all" : "reg"; },
    set: function (v) { save("scope", v === "all" ? "all" : "reg"); }
  };
  /* Study units: the user's own order and numbering for the Blueprint areas.
   * Internal `area` codes stay I–V; these only affect display and ordering. */
  var UNIT_ORDER = ["IV", "III", "V", "I", "II"];
  var UNIT_NUMBER = { IV: 1, III: 2, V: 3, I: 4, II: 5 };
  var UNIT_SHORT = { IV: "Individuals", III: "Property Transactions", V: "Entities", I: "Ethics & Procedures", II: "Business Law" };
  var AREA_ORDER = UNIT_ORDER;
  function unitLabel(a) { return UNIT_NUMBER[a] ? "Unit " + UNIT_NUMBER[a] : "Area " + a; }
  function unitNum(a) { return UNIT_NUMBER[a] ? String(UNIT_NUMBER[a]) : String(a); }

  /** Selected units, stored as area codes in cpareg.units (all when unset). */
  var Units = {
    get: function () {
      var v = load("units", null);
      if (!Array.isArray(v)) return UNIT_ORDER.slice();
      var sel = v.filter(function (a) { return UNIT_ORDER.indexOf(a) >= 0; });
      return sel.length ? sel : UNIT_ORDER.slice();
    },
    set: function (arr) { save("units", arr); },
    toggle: function (a) {
      var sel = Units.get();
      var i = sel.indexOf(a);
      if (i >= 0) { if (sel.length === 1) return false; sel.splice(i, 1); } else sel.push(a);
      Units.set(sel); return true;
    }
  };
  /** The bank after the scope filter (no units). */
  function scopedBank() {
    var b = Bank.get();
    return BANK.filter(function (q) {
      if (b === "aicpa" && !isAicpa(q)) return false;
      if (b === "claude" && isAicpa(q)) return false;
      return Scope.get() === "all" || !isExtra(q);
    });
  }
  /** The bank as currently scoped AND unit-filtered (used by selection and Home stats). */
  function pool() {
    var sel = Units.get();
    return scopedBank().filter(function (q) { return sel.indexOf(q.area) >= 0; });
  }
  var AREA_NAMES = {};
  BANK.forEach(function (q) { if (q.area && q.areaName && !AREA_NAMES[q.area]) AREA_NAMES[q.area] = q.areaName; });

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /** Format milliseconds as m:ss, or h:mm:ss once over an hour. */
  function fmtTime(ms) {
    var s = Math.max(0, Math.round((ms || 0) / 1000));
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    var two = function (n) { return (n < 10 ? "0" : "") + n; };
    return h > 0 ? h + ":" + two(m) + ":" + two(sec) : m + ":" + two(sec);
  }
  function pct(n) { return n == null || isNaN(n) ? "—" : Math.round(n * 100) + "%"; }
  function iso(ts) { return ts ? new Date(ts).toISOString() : null; }
  function dateStamp(ts) {
    var d = new Date(ts || Date.now());
    var two = function (n) { return (n < 10 ? "0" : "") + n; };
    return d.getFullYear() + "-" + two(d.getMonth() + 1) + "-" + two(d.getDate());
  }
  function fmtDateTime(ts) {
    try { return new Date(ts).toLocaleString(); } catch (e) { return String(ts); }
  }
  function newId() { return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8); }

  function shuffle(arr) { // Fisher-Yates, in place
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function downloadJson(filename, obj) {
    var blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  /** Copy text to clipboard; resolves true on success. Falls back to execCommand. */
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return legacyCopy(text); });
    }
    return Promise.resolve(legacyCopy(text));
  }
  function legacyCopy(text) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.left = "-9999px";
      document.body.appendChild(ta); ta.select();
      var ok = document.execCommand("copy");
      ta.remove();
      return !!ok;
    } catch (e) { return false; }
  }

  /** Small inline stroke icons (Feather-style paths). */
  var ICONS = {
    bank: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M7 9h10M7 13h6"/>',
    eye: '<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
    play: '<path d="M6 4l14 8-14 8z"/>',
    "tri-left": '<path d="M16 4L6 12l10 8z" fill="currentColor" stroke="none"/>',
    "tri-right": '<path d="M8 4l10 8-10 8z" fill="currentColor" stroke="none"/>',
    "flag-solid": '<path d="M4 22V3h12l-1.5 4L16 11H4" fill="currentColor"/>',
    calc: '<rect x="5" y="2" width="14" height="20" rx="2"/><rect x="8" y="5" width="8" height="4" rx="0.5" fill="currentColor"/><path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01" stroke-width="2.5"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
    left: '<path d="M15 18l-6-6 6-6"/>',
    right: '<path d="M9 18l6-6-6-6"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    x: '<path d="M18 6L6 18M6 6l12 12"/>',
    flag: '<path d="M4 22V4a1 1 0 0 1 1-1h11l-1 4 1 4H5"/>',
    home: '<path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M6.5 17H20v4H6.5a2.5 2.5 0 0 1 0-5z"/>'
  };
  function icon(name, size) {
    size = size || 16;
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }

  /* ------------------------------------------------------------------ */
  /* 3. Markdown-lite renderer                                           */
  /* ------------------------------------------------------------------ */
  /**
   * Supports: **bold**, blank-line paragraphs, "- " bullet lists, pipe tables
   * (header row, |---| separator, body rows). Input is HTML-escaped first, so
   * question text can never inject markup. Single newlines in a paragraph
   * become <br>.
   */
  function renderMd(text) {
    if (text == null || String(text).trim() === "") return "";
    var lines = escapeHtml(String(text).replace(/\r\n?/g, "\n")).split("\n");
    var out = [], i = 0;

    var isTableRow = function (l) { return /^\s*\|.*\|\s*$/.test(l); };
    var isSepRow = function (l) { return /^\s*\|(\s*:?-{2,}:?\s*\|)+\s*$/.test(l); };
    var splitRow = function (l) {
      var t = l.trim().replace(/^\|/, "").replace(/\|$/, "");
      return t.split("|").map(function (c) { return c.trim(); });
    };
    var numeric = function (c) { return /^[\s$€£(−-]*[\d,]+(\.\d+)?%?\)?\s*$/.test(c) && /\d/.test(c); };

    while (i < lines.length) {
      var line = lines[i];
      if (line.trim() === "") { i++; continue; }

      // Table: needs a header row and a separator row
      if (isTableRow(line) && i + 1 < lines.length && isSepRow(lines[i + 1])) {
        var header = splitRow(line);
        i += 2;
        var rows = [];
        while (i < lines.length && isTableRow(lines[i])) { rows.push(splitRow(lines[i])); i++; }
        var html = '<div class="table-wrap"><table><thead><tr>';
        header.forEach(function (h) { html += "<th>" + inline(h) + "</th>"; });
        html += "</tr></thead><tbody>";
        rows.forEach(function (r) {
          html += "<tr>";
          for (var c = 0; c < header.length; c++) {
            var cell = r[c] == null ? "" : r[c];
            html += '<td class="' + (numeric(cell) ? "num" : "") + '">' + inline(cell) + "</td>";
          }
          html += "</tr>";
        });
        html += "</tbody></table></div>";
        out.push(html);
        continue;
      }

      // Bullet list
      if (/^\s*-\s+/.test(line)) {
        var items = [];
        while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
          items.push(lines[i].replace(/^\s*-\s+/, "")); i++;
        }
        out.push("<ul>" + items.map(function (it) { return "<li>" + inline(it) + "</li>"; }).join("") + "</ul>");
        continue;
      }

      // Paragraph: consecutive non-blank, non-special lines
      var para = [];
      while (i < lines.length && lines[i].trim() !== "" && !/^\s*-\s+/.test(lines[i]) &&
             !(isTableRow(lines[i]) && i + 1 < lines.length && isSepRow(lines[i + 1]))) {
        para.push(lines[i]); i++;
      }
      out.push("<p>" + para.map(inline).join("<br>") + "</p>");
    }
    return out.join("");

    function inline(s) { return s.replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>"); }
  }

  /* ------------------------------------------------------------------ */
  /* 4. Stats + export                                                   */
  /* ------------------------------------------------------------------ */
  function emptyAgg() { return { attempts: 0, correct: 0, wrong: 0, skipped: 0, totalMs: 0 }; }
  function finishAgg(a) {
    a.accuracy = a.attempts ? a.correct / a.attempts : null;
    a.avgMs = a.attempts ? Math.round(a.totalMs / a.attempts) : null;
    return a;
  }

  /** Aggregate history + bank metadata into totals / byArea / byTopic. */
  function computeStats(restrictTo) {
    var history = getHistory();
    var allowed = null;
    if (restrictTo) { allowed = {}; restrictTo.forEach(function (q) { allowed[q.id] = true; }); }
    var totals = emptyAgg(); totals.seen = 0;
    var byArea = {}, byTopic = {};
    Object.keys(history).forEach(function (id) {
      if (allowed && !allowed[id]) return;
      var h = history[id] || {}; var q = BY_ID[id];
      var seen = h.seen || 0, correct = h.correct || 0, wrong = h.wrong || 0;
      var skipped = Math.max(0, seen - correct - wrong);
      if (seen > 0) totals.seen++;
      var add = function (agg) {
        agg.attempts += seen; agg.correct += correct; agg.wrong += wrong; agg.skipped += skipped;
        agg.totalMs += h.totalMs || 0;
      };
      add(totals);
      if (q) {
        var a = byArea[q.area] || (byArea[q.area] = Object.assign(emptyAgg(), { areaName: q.areaName }));
        add(a);
        var t = byTopic[q.topic] || (byTopic[q.topic] = Object.assign(emptyAgg(), { area: q.area }));
        add(t);
      }
    });
    finishAgg(totals);
    Object.keys(byArea).forEach(function (k) { finishAgg(byArea[k]); });
    Object.keys(byTopic).forEach(function (k) { finishAgg(byTopic[k]); });
    return { history: history, totals: totals, byArea: byArea, byTopic: byTopic };
  }

  function sessionToExport(s) {
    return {
      id: s.id,
      startedAt: iso(s.startedAt),
      endedAt: iso(s.endedAt),
      batchSize: s.batchSize,
      results: (s.results || []).map(function (r) { return Object.assign({}, r); })
    };
  }

  function buildExport() {
    var st = computeStats();
    var questions = {};
    Object.keys(st.history).forEach(function (id) {
      var h = st.history[id] || {}; var q = BY_ID[id] || {};
      var seen = h.seen || 0;
      questions[id] = {
        area: q.area || null, topic: q.topic || null,
        seen: seen, correct: h.correct || 0, wrong: h.wrong || 0,
        skipped: Math.max(0, seen - (h.correct || 0) - (h.wrong || 0)),
        lastResult: h.lastResult || null,
        lastSeen: iso(h.lastSeen),
        avgMs: seen ? Math.round((h.totalMs || 0) / seen) : null,
        flagged: !!h.flagged
      };
    });
    var weakAreas = Object.keys(st.byTopic).map(function (t) {
      var a = st.byTopic[t];
      return { topic: t, area: a.area, accuracy: a.accuracy, attempts: a.attempts };
    }).sort(function (x, y) {
      var ax = x.accuracy == null ? 2 : x.accuracy, ay = y.accuracy == null ? 2 : y.accuracy;
      return ax - ay || y.attempts - x.attempts;
    });
    var strip = function (obj) { var o = Object.assign({}, obj); delete o.totalMs; return o; };
    var byArea = {}; Object.keys(st.byArea).forEach(function (k) { byArea[k] = Object.assign({ unit: UNIT_NUMBER[k] || null }, strip(st.byArea[k])); });
    var byTopic = {}; Object.keys(st.byTopic).forEach(function (k) { byTopic[k] = strip(st.byTopic[k]); });
    return {
      exportedAt: new Date().toISOString(),
      bankSize: BANK.length,
      scope: Scope.get(),
      bank: Bank.get(),
      aicpaQuestions: AICPA_COUNT,
      extraQuestions: EXTRA_COUNT,
      totals: st.totals,
      byArea: byArea,
      byTopic: byTopic,
      weakAreas: weakAreas,
      flagged: flaggedIds(st.history),
      questions: questions,
      sessions: getSessions().map(sessionToExport)
    };
  }

  /* ------------------------------------------------------------------ */
  /* 5. Batch selection                                                  */
  /* ------------------------------------------------------------------ */
  /**
   * Pick n question ids: mostly unseen, plus ~5% repeats drawn from
   * flagged questions first, then previously-wrong/skipped (oldest first),
   * then correct (oldest first).
   * Returns { ids, repeatIds }.
   */
  function selectBatch(n, history) {
    history = history || getHistory();
    var bank = pool();
    n = Math.max(1, Math.min(n | 0, bank.length));
    var seen = [], unseen = [];
    bank.forEach(function (q) {
      var h = history[q.id];
      if (h && (h.seen || 0) > 0) seen.push(q.id); else unseen.push(q.id);
    });
    var repeats = seen.length ? Math.max(1, Math.round(0.05 * n)) : 0;
    repeats = Math.min(repeats, seen.length, n);

    var fresh = shuffle(unseen.slice()).slice(0, n - repeats);
    if (fresh.length < n - repeats) repeats = Math.min(n - fresh.length, seen.length);

    var byLastSeen = function (a, b) { return ((history[a].lastSeen || 0) - (history[b].lastSeen || 0)); };
    var flaggedIds = seen.filter(function (id) { return !!history[id].flagged; }).sort(byLastSeen);
    var rest = seen.filter(function (id) { return !history[id].flagged; });
    var wrongish = rest.filter(function (id) { var r = history[id].lastResult; return r === "wrong" || r === "skipped"; }).sort(byLastSeen);
    var right = rest.filter(function (id) { return history[id].lastResult === "correct"; }).sort(byLastSeen);
    var other = rest.filter(function (id) { return wrongish.indexOf(id) < 0 && right.indexOf(id) < 0; }).sort(byLastSeen);
    var repeatIds = flaggedIds.concat(wrongish, right, other).slice(0, repeats);

    var ids = shuffle(fresh.concat(repeatIds));
    return { ids: ids, repeatIds: repeatIds };
  }

  /** Ids flagged in history (persist across sessions until unflagged). */
  function flaggedIds(history) {
    history = history || getHistory();
    return Object.keys(history).filter(function (id) { return history[id] && history[id].flagged; });
  }
  function setHistoryFlag(id, on) {
    var history = getHistory();
    var h = history[id] || (history[id] = { seen: 0, correct: 0, wrong: 0, lastSeen: null, lastResult: null, totalMs: 0 });
    if (on) h.flagged = true; else delete h.flagged;
    save(KEYS.history, history);
  }

  /* ------------------------------------------------------------------ */
  /* 6. Timer module                                                     */
  /* ------------------------------------------------------------------ */
  /**
   * A question's clock runs only while it is displayed AND unanswered.
   * activeSession.timers[id] holds accumulated ms; timerStartedAt marks the
   * start of the currently running slice (or null when nothing runs).
   */
  var Timer = {
    interval: null,
    /** Start clock for the current question if it is unanswered. */
    start: function (session) {
      if (!session) return;
      var id = session.questionIds[session.cursor];
      if (session.answers[id] || session.timerStartedAt) return;
      session.timerStartedAt = Date.now();
    },
    /** Fold the running slice into timers[currentId] and stop. */
    pause: function (session) {
      if (!session || !session.timerStartedAt) return;
      var id = session.questionIds[session.cursor];
      session.timers[id] = (session.timers[id] || 0) + (Date.now() - session.timerStartedAt);
      session.timerStartedAt = null;
    },
    /** Live ms for a question, including any running slice. */
    elapsed: function (session, id) {
      var ms = (session.timers && session.timers[id]) || 0;
      if (session.timerStartedAt && session.questionIds[session.cursor] === id) ms += Date.now() - session.timerStartedAt;
      return ms;
    },
    startTicking: function (fn, ms) {
      Timer.stopTicking();
      Timer.interval = setInterval(fn, ms || 1000);
    },
    stopTicking: function () {
      if (Timer.interval) { clearInterval(Timer.interval); Timer.interval = null; }
    }
  };

  /* ------------------------------------------------------------------ */
  /* 7. Views                                                            */
  /* ------------------------------------------------------------------ */
  /* Easter egg: canvas confetti shown on Home once every question in the current scope has been seen. */
function launchConfetti() {
  var c = document.createElement("canvas");
  c.className = "confetti";
  c.setAttribute("aria-hidden", "true");
  document.body.appendChild(c);
  var ctx = c.getContext("2d");
  var W = c.width = window.innerWidth, H = c.height = window.innerHeight;
  var colors = ["#ff5e8a", "#ffb547", "#5ee0c9", "#7c8cff", "#ffe066", "#ff8fd8"];
  var pieces = [];
  for (var i = 0; i < 180; i++) {
    pieces.push({
      x: Math.random() * W, y: -20 - Math.random() * H * 0.5,
      w: 6 + Math.random() * 6, h: 8 + Math.random() * 8,
      vx: (Math.random() - 0.5) * 2.5, vy: 2.5 + Math.random() * 3.5,
      rot: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.25,
      color: colors[i % colors.length], heart: i % 9 === 0
    });
  }
  var start = null;
  function frame(ts) {
    if (start == null) start = ts;
    var elapsed = ts - start;
    ctx.clearRect(0, 0, W, H);
    var alive = false;
    pieces.forEach(function (p) {
      p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.vx += Math.sin(p.y / 40) * 0.05;
      if (p.y < H + 30) alive = true;
      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = elapsed > 4000 ? Math.max(0, 1 - (elapsed - 4000) / 800) : 1;
      if (p.heart) { ctx.font = "16px serif"; ctx.textAlign = "center"; ctx.fillText("\uD83D\uDC8B", 0, 6); }
      else ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (alive && elapsed < 4800) requestAnimationFrame(frame);
    else if (c.parentNode) c.parentNode.removeChild(c);
  }
  requestAnimationFrame(frame);
}

var state = {
    celebrated: false,   // confetti fired this page load (completion easter egg)
    view: "home",
    session: null,        // activeSession object while in Session view
    review: null,         // { session, index } while reviewing a finished session
    justAnswered: null    // question id answered on the last render (drives the reveal animation)
  };

  var views = { home: $("#view-home"), session: $("#view-session"), summary: $("#view-summary") };

  function showView(name) {
    state.view = name;
    Object.keys(views).forEach(function (k) { views[k].hidden = k !== name; });
    document.body.classList.toggle("exam-mode", name === "session");
    window.scrollTo(0, 0);
  }

  /* ---------- Shared bits ---------- */
  /** Circular progress ring. value 0..1; centre shows a big number + small label. */
  function ring(value, big, small, size) {
    var off = Math.round(283 * (1 - Math.max(0, Math.min(1, value || 0))));
    var style = size ? ' style="width:' + size + 'px;height:' + size + 'px"' : "";
    return '<div class="ring"' + style + '><svg viewBox="0 0 100 100">' +
      '<defs><linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="var(--accent)"/><stop offset="60%" stop-color="var(--accent-2)"/><stop offset="100%" stop-color="var(--accent-3)"/></linearGradient></defs>' +
      '<circle class="track" cx="50" cy="50" r="45" fill="none" stroke-width="8"/>' +
      '<circle class="prog" cx="50" cy="50" r="45" fill="none" stroke-width="8" style="--off:' + off + '"/>' +
      '</svg><div class="center"><div><b>' + escapeHtml(big) + "</b><small>" + escapeHtml(small) + "</small></div></div></div>";
  }

  function stat(label, value, iconName, tone, extraClass) {
    return '<div class="stat"><div class="ico ' + (tone || "") + '">' + icon(iconName, 18) + '</div>' +
      '<div class="label">' + escapeHtml(label) + '</div><div class="value ' + (extraClass || "") + '">' + escapeHtml(value) + "</div></div>";
  }

  function barClass(acc) { return acc == null ? "" : acc >= 0.7 ? "green" : acc < 0.5 ? "red" : ""; }

  /**
   * One "area" row: chip, name, bar, stats on the right.
   * If `cover` ({seen,total}) is given the bar shows coverage (seen ÷ in bank) and accuracy is text only;
   * otherwise (session summary) the bar shows accuracy for that session.
   */
  function areaRow(a, s, extraRight, cover) {
    var acc = s.attempts ? s.accuracy : null;
    var barW, cls;
    if (cover) { barW = cover.total ? Math.round(cover.seen / cover.total * 100) : 0; cls = ""; }
    else { barW = acc == null ? 0 : Math.round(acc * 100); cls = barClass(acc); }
    var right = cover
      ? cover.seen + " / " + cover.total + " seen · " + s.attempts + (s.attempts === 1 ? " attempt" : " attempts") + (s.attempts ? " · avg " + fmtTime(s.avgMs) : "")
      : (extraRight || "") + s.attempts + (s.attempts === 1 ? " attempt" : " attempts") + (s.attempts ? " · avg " + fmtTime(s.avgMs) : "");
    return '<div class="area-row"><div class="area-chip" title="Blueprint area ' + escapeHtml(a) + '">' + escapeHtml(unitNum(a)) + '</div>' +
      '<div class="area-main"><div class="area-name">' + escapeHtml(AREA_NAMES[a] || "") + "</div>" +
      '<div class="bar"><div class="bar-fill ' + cls + '" style="--w:' + barW + '%"></div></div></div>' +
      '<div class="area-side"><b>' + pct(acc) + (cover ? '</b> <span class="muted">accuracy</span><br>' : "</b><br>") + right + "</div></div>";
  }

  /** Small inline yes/no box rendered into `host`. */
  function inlineConfirm(host, message, onYes) {
    host.innerHTML = '<div class="inline-confirm"><span>' + escapeHtml(message) + '</span><div class="btn-row">' +
      '<button type="button" class="btn-danger btn-sm" data-yes>Yes, do it</button><button type="button" class="btn-ghost btn-sm" data-no>Cancel</button></div></div>';
    $("[data-yes]", host).addEventListener("click", onYes);
    $("[data-no]", host).addEventListener("click", function () { host.innerHTML = ""; });
    $("[data-yes]", host).focus();
  }

  /**
   * Modal dialog: centred card over a blurred backdrop, focus trapped, Esc or
   * backdrop click closes. `buttons` = [{label, cls, onClick(close), keepOpen}].
   */
  function openModal(opts) {
    closeModal();
    var prev = document.activeElement;
    var wrap = document.createElement("div");
    wrap.className = "modal-backdrop"; wrap.id = "modal";
    wrap.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">' +
      '<h2 id="modal-title">' + escapeHtml(opts.title) + "</h2><p>" + escapeHtml(opts.body) + '</p><div class="btn-row modal-actions">' +
      opts.buttons.map(function (b, i) { return '<button type="button" class="' + (b.cls || "btn-ghost") + '" data-modal-btn="' + i + '">' + (b.icon ? icon(b.icon) : "") + escapeHtml(b.label) + "</button>"; }).join("") +
      "</div></div>";
    document.body.appendChild(wrap);
    document.body.classList.add("modal-open");
    function close() {
      if (!wrap.parentNode) return;
      wrap.remove(); document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", onKey, true);
      if (prev && prev.focus) prev.focus();
    }
    function onKey(e) {
      if (e.key === "Escape") { e.preventDefault(); close(); return; }
      if (e.key === "Tab") { // trap focus inside the dialog
        var f = $all("button", wrap); if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener("keydown", onKey, true);
    wrap.addEventListener("click", function (e) { if (e.target === wrap) close(); });
    $all("[data-modal-btn]", wrap).forEach(function (b) {
      b.addEventListener("click", function () {
        var o = opts.buttons[parseInt(b.getAttribute("data-modal-btn"), 10)];
        if (o.onClick) o.onClick(close);
        if (!o.keepOpen) close();
      });
    });
    var focusIdx = opts.focus == null ? opts.buttons.length - 1 : opts.focus;
    $all("[data-modal-btn]", wrap)[focusIdx].focus();
    return close;
  }
  function closeModal() { var m = $("#modal"); if (m) { m.remove(); document.body.classList.remove("modal-open"); } }

  /* ---------- Home ---------- */
  function renderHome(opts) {
    opts = opts || {};
    var keepY = opts.keepScroll ? window.scrollY : null;
    Timer.stopTicking();
    state.session = null; state.review = null;
    var root = views.home;
    var active = getActive();
    var sessions = getSessions();
    var bank = pool();               // scope ∩ selected units → what a session draws from
    var scoped = scopedBank();       // scope only → what progress stats describe
    var history = getHistory();
    var st = computeStats(scoped);
    var t = st.totals;
    var scope = Scope.get();
    var bankPick = Bank.get();
    var html = "";

    if (!BANK.length) {
      html += '<div class="hero"><div><h1>Practice REG</h1><p class="sub">Timed multiple-choice drills for the CPA Regulation exam.</p></div></div>' +
        '<div class="card"><p class="notice">No question bank loaded.</p>' +
        "<p>Expected <code>questions.js</code> next to <code>index.html</code> defining <code>window.QUESTION_BANK</code> (an array). " +
        "See <code>QUESTION_SPEC.md</code>.</p></div>";
      root.innerHTML = html;
      showView("home");
      return;
    }

    if (active && active.questionIds && active.questionIds.length) {
      var answered = Object.keys(active.answers || {}).length;
      html += '<div class="banner"><div class="msg"><span class="pulse"></span>Session in progress <span class="muted">· ' +
        answered + "/" + active.questionIds.length + " answered · started " + escapeHtml(fmtDateTime(active.startedAt)) + "</span></div>" +
        '<div class="btn-row"><button type="button" class="btn-primary" id="btn-resume">' + icon("play") + "Resume</button>" +
        '<button type="button" class="btn-ghost" id="btn-discard">Discard</button></div>' +
        '<div id="discard-confirm" style="flex-basis:100%"></div></div>';
    }

    var completion = scoped.length ? t.seen / scoped.length : 0;
    html += '<div class="hero"><div><h1>Practice REG</h1><p class="sub">Timed multiple-choice drills for the CPA Regulation exam.</p></div>' +
      '<div class="ring-wrap">' + ring(completion, Math.round(completion * 100) + "%", "of bank seen") +
      '<div class="ring-meta"><b>' + pct(t.accuracy) + "</b>accuracy<br><b>" + t.attempts + "</b>attempts</div></div></div>";

    html += '<div class="stat-grid">' +
      stat("Bank size", scoped.length, "bank", "") +
      stat("Seen", t.seen, "eye", "teal") +
      stat("Unseen", scoped.length - t.seen, "sparkle", "violet") +
      stat("Accuracy", pct(t.accuracy), "target", "green", "grad-text") +
      stat("Time studied", fmtTime(t.totalMs), "clock", "amber") +
      "</div>";

    var allDone = scoped.length > 0 && t.seen >= scoped.length;
    if (allDone) {
      html += '<div class="card celebrate" id="celebrate-card"><div class="celebrate-emoji" aria-hidden="true">\uD83C\uDF89</div>' +
        '<div><h2>You completed every question</h2>' +
        '<p class="celebrate-msg">ur reward for completing all questions - a kiss from dv \uD83D\uDC8B</p></div>' +
        '<button type="button" class="btn-ghost btn-sm" id="btn-confetti">More confetti</button></div>';
    }

    html += '<div class="card"><div class="card-head"><h2>By area</h2><span class="eyebrow">coverage · accuracy</span></div><div class="area-list">';
    var areaKeys = AREA_ORDER.concat(Object.keys(AREA_NAMES).filter(function (a) { return AREA_ORDER.indexOf(a) < 0; }));
    var bankCount = {}, seenCount = {};
    scoped.forEach(function (q) {
      bankCount[q.area] = (bankCount[q.area] || 0) + 1;
      if (history[q.id] && history[q.id].seen > 0) seenCount[q.area] = (seenCount[q.area] || 0) + 1;
    });
    areaKeys.forEach(function (a) {
      if (!AREA_NAMES[a]) return;
      html += areaRow(a, st.byArea[a] || emptyAgg(), "", { seen: seenCount[a] || 0, total: bankCount[a] || 0 });
    });
    html += "</div></div>";

    var flagged = flaggedIds(history).filter(function (id) { return BY_ID[id]; }).sort(function (a, b) {
      return ((history[b].lastSeen || 0) - (history[a].lastSeen || 0));
    });
    html += '<div class="card" id="flagged-card"><div class="card-head"><h2>Flagged</h2><span class="eyebrow">' +
      (flagged.length ? flagged.length + (flagged.length === 1 ? " question" : " questions") + " · come back first among repeats" : "flag a question during a test to keep it here") + "</span></div>";
    if (flagged.length) {
      html += '<div class="result-list">';
      flagged.forEach(function (id, i) {
        var q = BY_ID[id], h = history[id];
        var badge = h.lastResult === "correct" ? '<span class="rbadge correct">' + icon("check", 12) + "Correct</span>"
          : h.lastResult === "wrong" ? '<span class="rbadge wrong">' + icon("x", 12) + "Wrong</span>"
          : h.lastResult === "skipped" ? '<span class="rbadge skipped">Skipped</span>' : "";
        html += '<div class="result-row"><div class="idx">' + (i + 1) + "</div>" +
          '<div><div class="rtopic">' + escapeHtml(q.topic || id) + '</div><div class="rmeta">' + escapeHtml(unitLabel(q.area)) + " · " + escapeHtml(UNIT_SHORT[q.area] || "") + " · <code>" + escapeHtml(id) + "</code>" +
          (h.lastSeen ? " · last seen " + escapeHtml(fmtDateTime(h.lastSeen)) : "") + "</div></div>" +
          badge + '<div class="rtime">' + (h.seen || 0) + "×</div>" +
          '<button type="button" class="btn-ghost btn-sm" data-unflag="' + escapeHtml(id) + '" title="Remove flag">Unflag</button></div>';
      });
      html += "</div>" +
        '<div class="btn-row" style="margin-top:16px"><button type="button" class="btn-primary btn-sm" id="btn-drill-flagged">' + icon("play") + "Practice all flagged</button></div>";
    }
    html += "</div>";

    var def = Math.min(20, bank.length);
    var selUnits = Units.get();
    html += '<div class="card card-lg"><div class="card-head"><h2>New session</h2><span class="eyebrow">~5% repeats · flagged first, then wrong ones</span></div>' +
      (AICPA_COUNT ? '<div class="scope-row"><div class="seg" role="group" aria-label="Question bank">' +
        '<button type="button" data-bank="aicpa" aria-pressed="' + (bankPick === "aicpa") + '">1 · AICPA bank (' + AICPA_COUNT + ')</button>' +
        '<button type="button" data-bank="claude" aria-pressed="' + (bankPick === "claude") + '">2 · Claude bank (' + CLAUDE_COUNT + ')</button>' +
        '<button type="button" data-bank="both" aria-pressed="' + (bankPick === "both") + '">Both</button></div>' +
        '<span class="muted small">Bank 1 is the AICPA Newly Released 2026 REG questions, verbatim. Bank 2 is the Claude-written set.</span></div>' : "") +
      (EXTRA_COUNT ? '<div class="scope-row"><div class="seg" role="group" aria-label="Question scope">' +
        '<button type="button" data-scope="reg" aria-pressed="' + (scope === "reg") + '">2026 REG scope only</button>' +
        '<button type="button" data-scope="all" aria-pressed="' + (scope === "all") + '">Include TCP-scope extras</button></div>' +
        '<span class="muted small">' + EXTRA_COUNT + " questions cover topics the 2026 Blueprint moved to the TCP discipline.</span></div>" : "") +
      '<div class="small muted" style="margin-bottom:8px">Units</div><div class="chips unit-chips" style="margin:0 0 16px">' +
      UNIT_ORDER.map(function (a) {
        var n = 0; scoped.forEach(function (q) { if (q.area === a) n++; });
        var on = selUnits.indexOf(a) >= 0;
        return '<button type="button" class="chip unit-chip' + (on ? " active" : "") + '" data-unit="' + a + '" aria-pressed="' + on + '">' +
          '<span class="unit-n">' + UNIT_NUMBER[a] + "</span> · " + escapeHtml(UNIT_SHORT[a]) + ' <span class="muted">(' + n + ")</span></button>";
      }).join("") + "</div>" +
      '<label for="batch-size" class="small muted" style="display:block;margin-bottom:8px">How many questions this session?</label>' +
      '<div class="joined"><div class="stepper"><button type="button" data-step="-1" aria-label="Fewer">−</button>' +
      '<input type="number" id="batch-size" min="1" max="' + bank.length + '" value="' + def + '">' +
      '<button type="button" data-step="1" aria-label="More">+</button></div>' +
      '<button type="button" class="btn-primary btn-lg" id="btn-start">' + icon("play", 18) + "Start session</button></div>" +
      '<label class="switch-row" for="show-timers"><span class="switch"><input type="checkbox" id="show-timers" role="switch"' + (Prefs.showTimers.get() ? " checked" : "") + '><span class="knob"></span></span>' +
      '<span><span class="switch-label">Show timers while answering</span><span class="muted small switch-hint">Off keeps the pressure away; times are always shown in the summary.</span></span></label>' +
      '<div class="chips">' + [10, 20, 30, 50].filter(function (n) { return n < bank.length; }).map(function (n) {
        return '<button type="button" class="chip" data-pick="' + n + '">' + n + "</button>";
      }).join("") + '<button type="button" class="chip" data-pick="' + bank.length + '">All ' + bank.length + "</button></div>" +
      '<div class="btn-row" style="margin-top:24px">' +
      '<button type="button" class="btn-ghost btn-sm" id="btn-export">' + icon("download") + "Export results</button>" +
      '<button type="button" class="btn-ghost btn-sm" id="btn-copy">' + icon("copy") + "Copy JSON</button>" +
      (sessions.length ? '<button type="button" class="btn-ghost btn-sm" id="btn-last">' + icon("history") + "View last session</button>" : "") +
      '<button type="button" class="btn-danger btn-sm" id="btn-reset">' + icon("trash") + "Reset data</button>" +
      '<span id="copy-status" class="muted small"></span></div>' +
      '<p class="muted small" style="margin:16px 0 0">' + sessions.length + (sessions.length === 1 ? " session" : " sessions") + " completed · export the JSON and paste it to Claude for a study plan.</p>" +
      "</div>";
    // hint under the chips: what the current pool is
    html = html.replace('<label for="batch-size"', '<p class="muted small unit-hint" style="margin:-8px 0 12px">' + bank.length + " questions in the current pool.</p>" + '<label for="batch-size"');

    if (keepY != null) root.classList.add("no-anim");
    root.innerHTML = html;
    showView("home");
    if (allDone) {
      if (!state.celebrated) { state.celebrated = true; launchConfetti(); }
      $("#btn-confetti", root).addEventListener("click", function () { launchConfetti(); });
    }
    if (keepY != null) {
      window.scrollTo(0, keepY);
      setTimeout(function () { root.classList.remove("no-anim"); }, 60);
    }

    var input = $("#batch-size", root);
    $("#show-timers", root).addEventListener("change", function (e) { Prefs.showTimers.set(!!e.target.checked); }); // pref only, no rebuild
    $all("[data-unit]", root).forEach(function (b) {
      b.addEventListener("click", function () { if (Units.toggle(b.getAttribute("data-unit"))) renderHome({ keepScroll: true }); });
    });
    var clamp = function (n) { n = parseInt(n, 10); if (!n || n < 1) n = 1; if (n > bank.length) n = bank.length; return n; };
    $all("[data-scope]", root).forEach(function (b) {
      b.addEventListener("click", function () { Scope.set(b.getAttribute("data-scope")); renderHome({ keepScroll: true }); });
    });
    $all("[data-bank]", root).forEach(function (b) {
      b.addEventListener("click", function () { Bank.set(b.getAttribute("data-bank")); renderHome({ keepScroll: true }); });
    });
    var syncChips = function () {
      $all("[data-pick]", root).forEach(function (c) { c.classList.toggle("active", parseInt(c.getAttribute("data-pick"), 10) === clamp(input.value)); });
    };
    syncChips();
    input.addEventListener("input", syncChips);
    $all("[data-step]", root).forEach(function (b) {
      b.addEventListener("click", function () { input.value = clamp(clamp(input.value) + parseInt(b.getAttribute("data-step"), 10)); syncChips(); });
    });
    $all("[data-pick]", root).forEach(function (c) {
      c.addEventListener("click", function () { input.value = c.getAttribute("data-pick"); syncChips(); });
    });
    var startBtn = $("#btn-start", root);
    startBtn.addEventListener("click", function () {
      var n = clamp(input.value);
      if (getActive()) {
        // Starting a new session replaces the active one; ask first.
        if (!confirm("A session is already in progress. Discard it and start a new one?")) return;
      }
      startSession(n);
    });
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") startBtn.click(); });
    $all("[data-unflag]", root).forEach(function (b) {
      b.addEventListener("click", function () { setHistoryFlag(b.getAttribute("data-unflag"), false); renderHome({ keepScroll: true }); });
    });
    if ($("#btn-drill-flagged", root)) {
      $("#btn-drill-flagged", root).addEventListener("click", function () {
        if (getActive() && !confirm("A session is already in progress. Discard it and start a new one?")) return;
        startSession(flagged.length, flagged);
      });
    }

    if ($("#btn-resume", root)) {
      $("#btn-resume", root).addEventListener("click", function () { openSession(getActive()); });
      $("#btn-discard", root).addEventListener("click", function () {
        inlineConfirm($("#discard-confirm", root), "Discard the in-progress session? Its answers will not be recorded.", function () {
          remove(KEYS.active); renderHome();
        });
      });
    }
    $("#btn-export", root).addEventListener("click", function () {
      downloadJson("cpareg-results-" + dateStamp() + ".json", buildExport());
    });
    $("#btn-copy", root).addEventListener("click", function () {
      var status = $("#copy-status", root);
      copyText(JSON.stringify(buildExport(), null, 2)).then(function (ok) {
        status.textContent = ok ? "Copied." : "Copy failed — use Export instead.";
        setTimeout(function () { status.textContent = ""; }, 3000);
      });
    });
    if ($("#btn-last", root)) {
      $("#btn-last", root).addEventListener("click", function () { renderSummary(sessions[sessions.length - 1]); });
    }
    $("#btn-reset", root).addEventListener("click", function () {
      openModal({
        title: "Erase all data?",
        body: "This permanently deletes your history, sessions and any session in progress. Export your results first if you want to keep them.",
        focus: 1,
        buttons: [
          { label: "Export first", cls: "btn-ghost", icon: "download", keepOpen: true, onClick: function () { downloadJson("cpareg-results-" + dateStamp() + ".json", buildExport()); } },
          { label: "Cancel", cls: "btn-ghost" },
          { label: "Erase everything", cls: "btn-danger btn-solid", icon: "trash", onClick: function () { clearAll(); renderHome(); } }
        ]
      });
    });
  }

  /* ---------- Session ---------- */
  function startSession(n, onlyIds) {
    var pick = onlyIds ? { ids: shuffle(onlyIds.slice()), repeatIds: onlyIds.slice() } : selectBatch(n);
    var history = getHistory();
    var flags = {};
    pick.ids.forEach(function (id) { if (history[id] && history[id].flagged) flags[id] = true; });
    var session = {
      id: newId(),
      startedAt: Date.now(),
      questionIds: pick.ids,
      repeatIds: pick.repeatIds,
      cursor: 0,
      answers: {},
      timers: {},
      flags: flags,
      timerStartedAt: null
    };
    save(KEYS.active, session);
    openSession(session);
  }

  function openSession(session) {
    if (!session) { renderHome(); return; }
    // Drop ids that no longer exist in the bank (bank replaced mid-session).
    session.questionIds = session.questionIds.filter(function (id) { return BY_ID[id]; });
    if (!session.questionIds.length) { remove(KEYS.active); renderHome(); return; }
    session.answers = session.answers || {}; session.timers = session.timers || {};
    session.repeatIds = session.repeatIds || [];
    session.cursor = Math.min(Math.max(0, session.cursor | 0), session.questionIds.length - 1);
    session.timerStartedAt = null; // any running slice was flushed on unload; start fresh
    state.session = session; state.review = null;
    Timer.start(session);
    save(KEYS.active, session);
    renderSession();
  }

  function persistSession() { if (state.session) save(KEYS.active, state.session); }

  /** Navigate to question index within the active session. */
  function gotoQuestion(index) {
    var s = state.session;
    if (!s) return;
    index = Math.max(0, Math.min(index, s.questionIds.length - 1));
    if (index === s.cursor) return;
    Timer.pause(s);
    s.cursor = index;
    Timer.start(s);
    persistSession();
    renderSession();
  }

  function answerQuestion(key) {
    var s = state.session;
    if (!s) return;
    var id = s.questionIds[s.cursor];
    if (s.answers[id]) return;
    var q = BY_ID[id];
    Timer.pause(s);
    s.answers[id] = { chosen: key, correct: key === q.answer };
    state.justAnswered = id;
    persistSession();
    renderSession();
  }

  /**
   * Render the Session view (exam-style). Used both for the live session
   * (state.session) and for read-only review of a finished session (state.review).
   */
  function renderSession() {
    var root = views.session;
    var review = state.review;
    var s = review ? review.session : state.session;
    if (!s) { renderHome(); return; }

    var ids = review ? s.results.map(function (r) { return r.id; }) : s.questionIds;
    var cursor = review ? review.index : s.cursor;
    var id = ids[cursor];
    var q = BY_ID[id];
    var ans = review ? reviewAnswer(s.results[cursor]) : s.answers[id];
    var isRepeat = !review && s.repeatIds.indexOf(id) >= 0;
    var reveal = !review && state.justAnswered === id;
    state.justAnswered = null;
    var showTimers = Prefs.showTimers.get();
    var flags = review ? {} : (s.flags || {});
    if (review) { var rh = getHistory(); ids.forEach(function (qid) { if (rh[qid] && rh[qid].flagged) flags[qid] = true; }); }
    var flagged = !!flags[id];
    var qElapsed = review ? (s.results[cursor].ms || 0) : Timer.elapsed(s, id);
    var clockOn = review || showTimers;

    // ---- Top: tab bar
    var html = '<div class="exam">' +
      '<div class="exam-tabs">' +
        '<button type="button" class="exam-tab exam-tab-home" id="exam-home" title="Back to Home (your session is saved)">Practice Test</button>' +
        '<span class="exam-tab exam-tab-static">REG</span>' +
        '<span class="exam-tab exam-tab-active">' + (review ? "REVIEW" : "TESTLET 1") + "</span>" +
        '<span class="exam-tab exam-tab-dim">' + escapeHtml(unitLabel(q ? q.area : "").toUpperCase()) + "</span>" +
      "</div>";

    // ---- Toolbar: clock, tools, end test
    html += '<div class="exam-toolbar">' +
      '<div class="exam-clock' + (clockOn ? " on" : "") + '">' +
        '<span class="exam-play" aria-hidden="true">' + icon("play", 22) + "</span>" +
        '<span class="exam-digits" id="t-question">' + fmtClock(clockOn ? qElapsed : 0) + "</span>" +
        '<span class="exam-clock-label">QUESTION<br>TIME ELAPSED <span class="exam-info" title="' +
          (clockOn ? "Time spent on this question. The clock runs only while the question is on screen and unanswered." : "Clock hidden while solving. Turn on “Show timers” on Home to see it.") +
        '">i</span></span>' +
      "</div>" +
      '<div class="exam-tools">' +
        '<button type="button" class="exam-tool" id="tool-calc">' + icon("calc", 30) + "<span>CALC.</span></button>" +
        '<button type="button" class="exam-tool" id="tool-overview">' + icon("list", 30) + "<span>OVERVIEW</span></button>" +
        '<button type="button" class="exam-tool" id="tool-help">' + icon("help", 30) + "<span>HELP</span></button>" +
      "</div>" +
      (review
        ? '<button type="button" class="exam-end" id="btn-back-summary">BACK TO SUMMARY</button>'
        : '<button type="button" class="exam-end" id="btn-finish">END TEST</button>') +
      "</div>";

    // ---- Number strip
    html += '<div class="exam-strip" role="navigation" aria-label="Questions">';
    ids.forEach(function (qid, i) {
      var a = review ? reviewAnswer(s.results[i]) : s.answers[qid];
      var cls = a ? (a.chosen == null ? "skipped" : a.correct ? "correct" : "wrong") : "";
      if (i === cursor) cls += " current";
      if (flags[qid]) cls += " flagged";
      html += '<button type="button" class="' + cls + '" data-jump="' + i + '" title="' + escapeHtml(qid) + '">' + (i + 1) + "</button>";
    });
    html += "</div>";

    // ---- Question card
    html += '<div class="exam-card">' +
      '<div class="exam-qhead">' +
        '<div class="exam-qnav">' +
          '<button type="button" class="exam-arrow" id="btn-prev" aria-label="Previous"' + (cursor === 0 ? " disabled" : "") + ">" + icon("tri-left", 18) + "</button>" +
          '<span class="exam-qnum">' + (cursor + 1) +
            '<button type="button" class="exam-flag' + (flagged ? " on" : "") + '" id="btn-flag" title="' + (flagged ? "Remove flag" : "Flag for review") + '" aria-pressed="' + flagged + '">' + icon("flag-solid", 16) + "</button>" +
          "</span>" +
          '<button type="button" class="exam-arrow" id="btn-next" aria-label="Next"' + (cursor === ids.length - 1 ? " disabled" : "") + ">" + icon("tri-right", 18) + "</button>" +
          '<span class="exam-qid">' + escapeHtml(id) + '</span>' +
          '<span class="exam-qmeta">' + (cursor + 1) + " of " + ids.length + "</span>" +
        "</div>" +
        '<div class="exam-pills">' +
          (isRepeat ? '<span class="exam-pill pill-repeat">Repeat</span>' : "") +
          (isAicpa(q) ? '<span class="exam-pill pill-aicpa" title="AICPA Newly Released 2026 question">AICPA</span>' : "") +
          (isExtra(q) ? '<span class="exam-pill pill-tcp" title="Topic moved to the TCP discipline in the 2026 Blueprint">Beyond 2026 REG</span>' : "") +
          (review ? '<span class="exam-pill pill-time">' + fmtTime(s.results[cursor].ms) + "</span>" : "") +
          (q ? '<span class="exam-pill">' + escapeHtml(q.skill) + "</span>" : "") +
          (q ? '<span class="exam-pill pill-topic" title="' + escapeHtml(q.topic) + '">' + escapeHtml(UNIT_SHORT[q.area] || q.areaName || "") + "</span>" : "") +
        "</div>" +
      "</div>";

    html += '<div class="exam-body">';
    if (!q) {
      html += '<p class="notice">Question ' + escapeHtml(id) + " is no longer in the bank.</p>";
    } else {
      html += '<div class="exam-stem md">' + renderMd(q.stem) + "</div>";
      if (q.reference && String(q.reference).trim()) {
        html += '<details class="exam-ref" open><summary>' + icon("book", 14) + "<span>Reference</span></summary><div class=\"md\">" + renderMd(q.reference) + "</div></details>";
      }
      html += '<div class="exam-options' + (ans ? " locked" : "") + '" role="radiogroup">';
      (q.options || []).forEach(function (o) {
        var cls = "exam-option";
        var chosen = !!ans && ans.chosen === o.key;
        if (ans) {
          if (chosen) cls += ans.correct ? " chosen-correct" : " chosen-wrong";
          else if (o.key === q.answer) cls += " is-answer";
        }
        html += '<button type="button" class="' + cls + '" data-key="' + escapeHtml(o.key) + '" role="radio" aria-checked="' + chosen + '"' + (ans ? ' aria-disabled="true"' : "") + ">" +
          '<span class="exam-radio" aria-hidden="true"></span>' +
          '<span class="exam-letter">' + escapeHtml(o.key) + ".</span>" +
          '<span class="exam-otext md">' + renderMd(o.text) + "</span></button>";
      });
      html += "</div>";

      if (ans) {
        var skipped = ans.chosen == null;
        html += '<div class="exam-result ' + (ans.correct ? "ok" : "bad") + (reveal ? " reveal" : "") + '">' +
          '<span class="exam-result-ico">' + icon(ans.correct ? "check" : "x", 14) + "</span>" +
          (ans.correct ? "Your answer is correct!" : skipped ? "You skipped this question, the correct answer is " + escapeHtml(q.answer) + "." : "Your answer is incorrect, the correct answer is " + escapeHtml(q.answer) + ".") +
          "</div>";

        html += '<div class="exam-expl' + (reveal ? " reveal" : "") + '"><h3>Explanation</h3>';
        var ex = q.explanations || {};
        var keys = (q.options || []).map(function (o) { return o.key; });
        html += '<p><b>Choice "' + escapeHtml(q.answer) + '" is correct.</b> ' + renderInline(ex[q.answer]) + "</p>";
        keys.forEach(function (k) {
          if (k === q.answer) return;
          html += '<p><b>Choice "' + escapeHtml(k) + '" is incorrect.</b> ' + renderInline(ex[k]) + "</p>";
        });
        html += "</div>";
      } else if (!review) {
        html += '<div class="exam-hint"><kbd>A</kbd>–<kbd>D</kbd> or <kbd>1</kbd>–<kbd>4</kbd> to answer · <kbd>←</kbd> <kbd>→</kbd> to move · <kbd>F</kbd> to flag</div>';
      }
    }
    html += "</div>"; // exam-body

    html += '<div class="exam-foot">' +
      '<button type="button" class="exam-arrow lg" id="btn-prev2" aria-label="Previous"' + (cursor === 0 ? " disabled" : "") + ">" + icon("tri-left", 26) + "</button>" +
      '<button type="button" class="exam-arrow lg" id="btn-next2" aria-label="Next"' + (cursor === ids.length - 1 ? " disabled" : "") + ">" + icon("tri-right", 26) + "</button>" +
      "</div>";
    html += "</div>"; // exam-card
    html += '<div id="finish-confirm"></div>';
    html += "</div>"; // exam

    root.innerHTML = html;
    showView("session");

    // ---- Wire up
    ["#btn-prev", "#btn-prev2"].forEach(function (sel) { $(sel, root).addEventListener("click", function () { navigate(cursor - 1); }); });
    ["#btn-next", "#btn-next2"].forEach(function (sel) { $(sel, root).addEventListener("click", function () { navigate(cursor + 1); }); });
    $all("[data-jump]", root).forEach(function (b) {
      b.addEventListener("click", function () { navigate(parseInt(b.getAttribute("data-jump"), 10)); });
    });
    $("#exam-home", root).addEventListener("click", function () {
      if (!review) { Timer.pause(s); persistSession(); Timer.stopTicking(); }
      renderHome();
    });
    $("#tool-calc", root).addEventListener("click", openCalculator);
    $("#tool-overview", root).addEventListener("click", function () { openOverview(ids, s, review, cursor, navigate); });
    $("#tool-help", root).addEventListener("click", openHelp);
    if (!ans && !review) {
      $all(".exam-option", root).forEach(function (b) {
        b.addEventListener("click", function () { answerQuestion(b.getAttribute("data-key")); });
      });
    }
    $("#btn-flag", root).addEventListener("click", function () { toggleFlag(); });
    if (review) {
      $("#btn-back-summary", root).addEventListener("click", function () { renderSummary(s); });
      Timer.stopTicking();
    } else {
      $("#btn-finish", root).addEventListener("click", function () { requestFinish(); });
      // Clocks are optional; accumulation always runs via Timer.start/pause.
      if (showTimers) Timer.startTicking(tick, 1000); else Timer.stopTicking();
    }

    function navigate(i) {
      if (review) { review.index = Math.max(0, Math.min(i, ids.length - 1)); renderSession(); }
      else gotoQuestion(i);
    }
  }

  /** Inline markdown (bold only), for explanation paragraphs. */
  function renderInline(text) {
    text = text == null ? "" : String(text).replace(/^\s*(correct|incorrect)\.?\s*/i, ""); // the bold "Choice X is ..." prefix already says it
    return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n+/g, " ");
  }

  /** mm:ss (hours roll into minutes) for the exam clock. */
  function fmtClock(ms) {
    var t = Math.max(0, Math.floor((ms || 0) / 1000));
    var m = Math.floor(t / 60), sec = t % 60;
    return (m < 10 ? "0" : "") + m + ":" + (sec < 10 ? "0" : "") + sec;
  }

  function toggleFlag() {
    var review = state.review, s = review ? review.session : state.session;
    if (!s) return;
    var cursor = review ? review.index : s.cursor;
    var id = review ? s.results[cursor].id : s.questionIds[cursor];
    var on;
    if (review) {
      // After the test, the flag lives in history (persists until unflagged).
      var h = getHistory()[id];
      on = !(h && h.flagged);
      setHistoryFlag(id, on);
    } else {
      s.flags = s.flags || {};
      if (s.flags[id]) delete s.flags[id]; else s.flags[id] = true;
      on = !!s.flags[id];
      persistSession();
    }
    var btn = $("#btn-flag", views.session), strip = $('.exam-strip [data-jump="' + cursor + '"]', views.session);
    if (btn) { btn.classList.toggle("on", on); btn.setAttribute("aria-pressed", String(on)); btn.title = on ? "Remove flag" : "Flag for review"; }
    if (strip) strip.classList.toggle("flagged", on);
  }

  /** Generic overlay panel (title + arbitrary HTML). Returns close(). */
  function openPanel(title, bodyHtml, cls) {
    closeModal();
    var prev = document.activeElement;
    var wrap = document.createElement("div");
    wrap.className = "modal-backdrop"; wrap.id = "modal";
    wrap.innerHTML = '<div class="modal panel ' + (cls || "") + '" role="dialog" aria-modal="true" aria-labelledby="modal-title">' +
      '<div class="panel-head"><h2 id="modal-title">' + escapeHtml(title) + '</h2><button type="button" class="panel-close" aria-label="Close">' + icon("x", 16) + "</button></div>" +
      '<div class="panel-body">' + bodyHtml + "</div></div>";
    document.body.appendChild(wrap);
    document.body.classList.add("modal-open");
    function close() {
      if (!wrap.parentNode) return;
      wrap.remove(); document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", onKey, true);
      if (prev && prev.focus) prev.focus();
    }
    function onKey(e) { if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); close(); } }
    document.addEventListener("keydown", onKey, true);
    wrap.addEventListener("click", function (e) { if (e.target === wrap) close(); });
    $(".panel-close", wrap).addEventListener("click", close);
    return { el: wrap, close: close };
  }

  function openOverview(ids, s, review, cursor, navigate) {
    var flags = review ? {} : (s.flags || {});
    if (review) { var rh = getHistory(); ids.forEach(function (qid) { if (rh[qid] && rh[qid].flagged) flags[qid] = true; }); }
    var rows = ids.map(function (qid, i) {
      var a = review ? reviewAnswer(s.results[i]) : s.answers[qid];
      var st = a ? (a.chosen == null ? "Skipped" : a.correct ? "Correct" : "Incorrect") : (review ? "Skipped" : "Unanswered");
      var cls = a ? (a.chosen == null ? "skipped" : a.correct ? "correct" : "wrong") : "";
      var qq = BY_ID[qid];
      return '<button type="button" class="ov-row' + (i === cursor ? " current" : "") + '" data-ov="' + i + '">' +
        '<span class="ov-num">' + (i + 1) + "</span>" +
        '<span class="ov-topic">' + escapeHtml(qq ? qq.topic : qid) + "</span>" +
        (flags[qid] ? '<span class="ov-flag" title="Flagged">' + icon("flag-solid", 12) + "</span>" : "") +
        '<span class="ov-status ' + cls + '">' + st + "</span></button>";
    }).join("");
    var answered = ids.filter(function (qid, i) { return review ? true : !!s.answers[qid]; }).length;
    var p = openPanel("Overview", '<p class="ov-sum">' + answered + " of " + ids.length + " answered" + (Object.keys(flags).length ? " · " + Object.keys(flags).length + " flagged" : "") + "</p>" +
      '<div class="ov-list">' + rows + "</div>", "panel-wide");
    $all("[data-ov]", p.el).forEach(function (b) {
      b.addEventListener("click", function () { p.close(); navigate(parseInt(b.getAttribute("data-ov"), 10)); });
    });
  }

  function openHelp() {
    openPanel("Help", '<ul class="help-list">' +
      "<li><b>Answer</b>: click a choice, or press <kbd>A</kbd>–<kbd>D</kbd> / <kbd>1</kbd>–<kbd>4</kbd>. Feedback and the explanation appear immediately.</li>" +
      "<li><b>Move</b>: the arrows, <kbd>←</kbd> <kbd>→</kbd>, or the numbers above the question.</li>" +
      "<li><b>Flag</b>: the flag next to the question number, or <kbd>F</kbd>. Flags show in the number strip and Overview, are kept after the test (see Flagged on Home), and come back first among repeats.</li>" +
      "<li><b>Overview</b>: lists every question with its status; click one to jump.</li>" +
      "<li><b>Calc.</b>: a basic calculator, as on the real exam.</li>" +
      "<li><b>End Test</b>: records unanswered questions as skipped and shows your summary.</li>" +
      "<li><b>Practice Test</b> (top left) returns Home; the session is saved and can be resumed.</li>" +
      "</ul>");
  }

  /* ---------- Calculator ---------- */
  var calc = { display: "0", acc: null, op: null, fresh: true };
  function calcApply(a, op, b) {
    if (op === "+") return a + b; if (op === "-") return a - b; if (op === "*") return a * b;
    if (op === "/") return b === 0 ? NaN : a / b; return b;
  }
  function calcFormat(n) {
    if (!isFinite(n)) return "Error";
    var s = String(+n.toPrecision(12));
    return s.length > 16 ? n.toExponential(8) : s;
  }
  function calcPress(k) {
    var c = calc;
    if (k === "C") { c.display = "0"; c.acc = null; c.op = null; c.fresh = true; return; }
    if (k === "⌫") { if (c.fresh) return; c.display = c.display.length > 1 ? c.display.slice(0, -1) : "0"; return; }
    if (k === "±") { if (c.display !== "0") c.display = c.display.charAt(0) === "-" ? c.display.slice(1) : "-" + c.display; return; }
    if (k === "%") { c.display = calcFormat(parseFloat(c.display) / 100); c.fresh = true; return; }
    if (k === ".") { if (c.fresh) { c.display = "0."; c.fresh = false; } else if (c.display.indexOf(".") < 0) c.display += "."; return; }
    if (/^[0-9]$/.test(k)) { if (c.fresh || c.display === "0") { c.display = k; c.fresh = false; } else if (c.display.length < 16) c.display += k; return; }
    var cur = parseFloat(c.display);
    if (k === "=") {
      if (c.op != null && c.acc != null) { c.display = calcFormat(calcApply(c.acc, c.op, cur)); c.acc = null; c.op = null; }
      c.fresh = true; return;
    }
    // operator
    if (c.op != null && c.acc != null && !c.fresh) { c.acc = calcApply(c.acc, c.op, cur); c.display = calcFormat(c.acc); }
    else c.acc = cur;
    c.op = k; c.fresh = true;
  }
  function openCalculator() {
    var keys = ["C", "⌫", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "±", "0", ".", "="];
    var labels = { "/": "÷", "*": "×", "-": "−" };
    var p = openPanel("Calculator", '<div class="calc"><div class="calc-display" id="calc-display">' + escapeHtml(calc.display) + '</div><div class="calc-keys">' +
      keys.map(function (k) { return '<button type="button" class="calc-key' + (/[0-9.]/.test(k) ? "" : k === "=" ? " eq" : " op") + '" data-ck="' + escapeHtml(k) + '">' + escapeHtml(labels[k] || k) + "</button>"; }).join("") +
      "</div></div>", "panel-calc");
    function refresh() { $("#calc-display", p.el).textContent = calc.display; }
    $all("[data-ck]", p.el).forEach(function (b) { b.addEventListener("click", function () { calcPress(b.getAttribute("data-ck")); refresh(); }); });
    var map = { Enter: "=", Backspace: "⌫", Delete: "C", Escape: null, x: "*", X: "*" };
    function onKey(e) {
      if (e.key === "Escape") return;
      var k = map.hasOwnProperty(e.key) ? map[e.key] : e.key;
      if (k && (/^[0-9.]$/.test(k) || "+-*/=%".indexOf(k) >= 0 || k === "⌫" || k === "C")) { e.preventDefault(); e.stopPropagation(); calcPress(k); refresh(); }
    }
    p.el.addEventListener("keydown", onKey);
    var first = $('[data-ck="7"]', p.el); if (first) first.focus();
  }

  function reviewAnswer(r) {
    if (!r) return null;
    return { chosen: r.chosen, correct: r.correct };
  }

  function difficultyLabel(d) { return d === 1 ? "Easy" : d === 3 ? "Hard" : "Medium"; }

  function sessionElapsed(s) {
    var total = 0;
    Object.keys(s.timers || {}).forEach(function (k) { total += s.timers[k] || 0; });
    if (s.timerStartedAt) total += Date.now() - s.timerStartedAt;
    return total;
  }


  /** Update the header clocks (only rendered when Prefs.showTimers is on). */
  function tick() {
    var s = state.session;
    if (!s || state.view !== "session") return;
    var tq = $("#t-question");
    if (tq) tq.textContent = fmtClock(Timer.elapsed(s, s.questionIds[s.cursor]));
  }

  function requestFinish() {
    var s = state.session;
    if (!s) return;
    var unanswered = s.questionIds.filter(function (id) { return !s.answers[id]; }).length;
    if (unanswered === 0) { finishSession(); return; }
    openModal({
      title: "End test?",
      body: unanswered + " unanswered question" + (unanswered === 1 ? "" : "s") + " will be recorded as skipped. You cannot return to this testlet.",
      buttons: [
        { label: "Keep going", cls: "btn-ghost" },
        { label: "End test", cls: "btn-danger", icon: "flag", onClick: function () { finishSession(); } }
      ],
      focus: 0
    });
  }

  /** Build results, merge into history, archive the session, show summary. */
  function finishSession() {
    var s = state.session;
    if (!s) return;
    Timer.pause(s);
    Timer.stopTicking();
    var now = Date.now();
    var history = getHistory();
    var results = s.questionIds.map(function (id) {
      var q = BY_ID[id] || {};
      var a = s.answers[id];
      var ms = s.timers[id] || 0;
      var flagged = !!(s.flags && s.flags[id]);
      var r = {
        id: id, area: q.area || null, topic: q.topic || null,
        chosen: a ? a.chosen : null,
        correct: a ? a.correct : null,
        skipped: !a,
        flagged: flagged,
        ms: ms
      };
      var h = history[id] || { seen: 0, correct: 0, wrong: 0, lastSeen: null, lastResult: null, totalMs: 0 };
      h.seen = (h.seen || 0) + 1;
      if (flagged) h.flagged = true; else delete h.flagged; // flag state at end of test wins
      if (a && a.correct) h.correct = (h.correct || 0) + 1;
      else if (a) h.wrong = (h.wrong || 0) + 1;
      h.lastSeen = now;
      h.lastResult = a ? (a.correct ? "correct" : "wrong") : "skipped";
      h.totalMs = (h.totalMs || 0) + ms;
      history[id] = h;
      return r;
    });
    var session = { id: s.id, startedAt: s.startedAt, endedAt: now, batchSize: s.questionIds.length, results: results };
    save(KEYS.history, history);
    var sessions = getSessions(); sessions.push(session); save(KEYS.sessions, sessions);
    remove(KEYS.active);
    state.session = null;
    renderSummary(session);
  }

  /* ---------- Summary ---------- */
  function renderSummary(session) {
    Timer.stopTicking();
    state.session = null; state.review = null;
    var root = views.summary;
    if (!session) { renderHome(); return; }
    var res = session.results || [];
    var agg = emptyAgg();
    var byArea = {};
    res.forEach(function (r) {
      agg.attempts++; agg.totalMs += r.ms || 0;
      if (r.skipped) agg.skipped++; else if (r.correct) agg.correct++; else agg.wrong++;
      var a = byArea[r.area] || (byArea[r.area] = emptyAgg());
      a.attempts++; a.totalMs += r.ms || 0;
      if (r.skipped) a.skipped++; else if (r.correct) a.correct++; else a.wrong++;
    });
    finishAgg(agg); Object.keys(byArea).forEach(function (k) { finishAgg(byArea[k]); });

    var html = '<div class="hero"><div><h1>Session summary</h1><p class="sub">' +
      escapeHtml(fmtDateTime(session.startedAt)) + " → " + escapeHtml(fmtDateTime(session.endedAt)) + " · " + res.length + " questions</p></div></div>";

    html += '<div class="card card-lg"><div class="score-hero">' +
      ring(agg.accuracy || 0, pct(agg.accuracy), "accuracy", 150) +
      '<div><div class="score-cards">' +
      '<div class="score green"><div class="label">Correct</div><div class="value">' + agg.correct + "</div></div>" +
      '<div class="score red"><div class="label">Wrong</div><div class="value">' + agg.wrong + "</div></div>" +
      '<div class="score amber"><div class="label">Skipped</div><div class="value">' + agg.skipped + "</div></div></div>" +
      '<div class="score-times"><div><b>' + fmtTime(agg.totalMs) + "</b>total time</div><div><b>" + fmtTime(agg.avgMs) + "</b>avg per question</div></div>" +
      "</div></div></div>";

    html += '<div class="card"><div class="card-head"><h2>By area</h2><span class="eyebrow">this session</span></div><div class="area-list">';
    Object.keys(byArea).sort(function (a, b) { return AREA_ORDER.indexOf(a) - AREA_ORDER.indexOf(b); }).forEach(function (a) {
      html += areaRow(a, byArea[a], byArea[a].correct + " correct · ");
    });
    html += "</div></div>";

    html += '<div class="card"><div class="card-head"><h2>Questions</h2><span class="eyebrow">tap Review to reopen</span></div><div class="result-list">';
    res.forEach(function (r, i) {
      var badge = r.skipped ? '<span class="rbadge skipped">Skipped</span>'
        : r.correct ? '<span class="rbadge correct">' + icon("check", 12) + "Correct</span>"
        : '<span class="rbadge wrong">' + icon("x", 12) + "Wrong · " + escapeHtml(r.chosen) + "</span>";
      html += '<div class="result-row"><div class="idx">' + (i + 1) + "</div>" +
        '<div><div class="rtopic">' + (r.flagged ? '<span class="ov-flag" title="Flagged">' + icon("flag-solid", 12) + "</span> " : "") + escapeHtml(r.topic || r.id) + '</div><div class="rmeta">' + escapeHtml(unitLabel(r.area)) + " · " + escapeHtml(UNIT_SHORT[r.area] || "") + " · <code>" + escapeHtml(r.id) + "</code></div></div>" +
        badge + '<div class="rtime">' + fmtTime(r.ms) + "</div>" +
        '<button type="button" class="btn-ghost btn-sm review-btn" data-review="' + i + '"' + (BY_ID[r.id] ? "" : " disabled") + ">Review</button></div>";
    });
    html += "</div></div>";

    html += '<div class="btn-row"><button type="button" class="btn-primary" id="btn-home">' + icon("home") + "Back to Home</button>" +
      '<button type="button" class="btn-ghost" id="btn-export-session">' + icon("download") + "Export this session</button></div>";

    root.innerHTML = html;
    showView("summary");

    $("#btn-home", root).addEventListener("click", renderHome);
    $("#btn-export-session", root).addEventListener("click", function () {
      downloadJson("cpareg-session-" + dateStamp(session.endedAt) + ".json", sessionToExport(session));
    });
    $all("[data-review]", root).forEach(function (b) {
      b.addEventListener("click", function () {
        state.review = { session: session, index: parseInt(b.getAttribute("data-review"), 10) };
        renderSession();
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* 8. Theme, global events + boot                                      */
  /* ------------------------------------------------------------------ */
  document.addEventListener("keydown", function (e) {
    if (state.view !== "session") return;
    var tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA" || e.metaKey || e.ctrlKey || e.altKey) return;
    if ($("#modal")) return; // calculator / overview / confirm open
    var review = state.review, s = review ? review.session : state.session;
    if (!s) return;
    if (e.key === "f" || e.key === "F") { e.preventDefault(); toggleFlag(); return; }
    var len = review ? s.results.length : s.questionIds.length;
    var cursor = review ? review.index : s.cursor;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (review) { review.index = Math.max(0, cursor - 1); renderSession(); } else gotoQuestion(cursor - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      if (review) { review.index = Math.min(len - 1, cursor + 1); renderSession(); } else gotoQuestion(cursor + 1);
    } else if (!review) {
      var k = e.key.toUpperCase();
      var map = { "1": "A", "2": "B", "3": "C", "4": "D" };
      if (map[k]) k = map[k];
      if ("ABCD".indexOf(k) >= 0 && k.length === 1) {
        var q = BY_ID[s.questionIds[s.cursor]];
        if (q && !s.answers[q.id] && (q.options || []).some(function (o) { return o.key === k; })) {
          e.preventDefault();
          answerQuestion(k);
        }
      }
    }
  });

  // Pause the clock while the tab is hidden, resume when visible.
  document.addEventListener("visibilitychange", function () {
    var s = state.session;
    if (!s || state.view !== "session") return;
    if (document.hidden) { Timer.pause(s); persistSession(); }
    else { Timer.start(s); persistSession(); }
  });

  // Flush any running slice before the page goes away.
  function flush() {
    var s = state.session;
    if (!s) return;
    Timer.pause(s);
    persistSession();
  }
  window.addEventListener("beforeunload", flush);
  window.addEventListener("pagehide", flush);

  $("#nav-home").addEventListener("click", function () {
    if (state.session) { flush(); }
    renderHome();
  });
  $("#brand").addEventListener("click", function (e) { e.preventDefault(); if (state.session) flush(); renderHome(); });

  /* ---------- Theme switcher ---------- */
  /**
   * "light" | "dark" set data-theme on <html>; "system" removes it so the
   * prefers-color-scheme rules in styles.css take over. index.html applies the
   * stored value before first paint; this just keeps the control in sync
   * (aria-pressed + the sliding thumb via data-active on the switch).
   */
  var Theme = {
    get: function () { var t = load("theme", "system"); return t === "light" || t === "dark" ? t : "system"; },
    apply: function (choice) {
      if (choice === "light" || choice === "dark") document.documentElement.setAttribute("data-theme", choice);
      else document.documentElement.removeAttribute("data-theme");
      $all("[data-theme-choice]").forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-theme-choice") === choice ? "true" : "false");
      });
      var sw = $("#theme-switch"); if (sw) sw.setAttribute("data-active", choice);
    },
    set: function (choice) {
      if (choice === "system") remove("theme"); else save("theme", choice);
      Theme.apply(choice);
    }
  };
  $all("[data-theme-choice]").forEach(function (b) {
    b.addEventListener("click", function () { Theme.set(b.getAttribute("data-theme-choice")); });
  });
  Theme.apply(Theme.get());

  // Expose a few internals for testing / debugging in the console.
  window.CPAREG = { selectBatch: selectBatch, renderMd: renderMd, buildExport: buildExport, fmtTime: fmtTime, computeStats: computeStats, Theme: Theme, Scope: Scope, Units: Units, Prefs: Prefs, pool: pool, UNIT_ORDER: UNIT_ORDER, UNIT_NUMBER: UNIT_NUMBER };

  renderHome();
})();
