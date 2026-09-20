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
        if (k && k.indexOf(PREFIX) === 0 && k !== PREFIX + "theme" && k !== PREFIX + "scope" && k !== PREFIX + "units") doomed.push(k); // keep theme/scope/units preferences
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
  function scopedBank() { return Scope.get() === "all" ? BANK : BANK.filter(function (q) { return !isExtra(q); }); }
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
        avgMs: seen ? Math.round((h.totalMs || 0) / seen) : null
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
      extraQuestions: EXTRA_COUNT,
      totals: st.totals,
      byArea: byArea,
      byTopic: byTopic,
      weakAreas: weakAreas,
      questions: questions,
      sessions: getSessions().map(sessionToExport)
    };
  }

  /* ------------------------------------------------------------------ */
  /* 5. Batch selection                                                  */
  /* ------------------------------------------------------------------ */
  /**
   * Pick n question ids: mostly unseen, plus ~5% repeats drawn from
   * previously-wrong/skipped (oldest first) then correct (oldest first).
   * Returns { ids, repeatIds }.
   */
  function selectBatch(n, history) {
    history = history || getHistory();
    var bank = pool();
    var history = getHistory();
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
    var wrongish = seen.filter(function (id) { var r = history[id].lastResult; return r === "wrong" || r === "skipped"; }).sort(byLastSeen);
    var right = seen.filter(function (id) { return history[id].lastResult === "correct"; }).sort(byLastSeen);
    var other = seen.filter(function (id) { return wrongish.indexOf(id) < 0 && right.indexOf(id) < 0; }).sort(byLastSeen);
    var repeatIds = wrongish.concat(right, other).slice(0, repeats);

    var ids = shuffle(fresh.concat(repeatIds));
    return { ids: ids, repeatIds: repeatIds };
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
    startTicking: function (fn) {
      Timer.stopTicking();
      Timer.interval = setInterval(fn, 500);
    },
    stopTicking: function () {
      if (Timer.interval) { clearInterval(Timer.interval); Timer.interval = null; }
    }
  };

  /* ------------------------------------------------------------------ */
  /* 7. Views                                                            */
  /* ------------------------------------------------------------------ */
  var state = {
    view: "home",
    session: null,        // activeSession object while in Session view
    review: null,         // { session, index } while reviewing a finished session
    justAnswered: null    // question id answered on the last render (drives the reveal animation)
  };

  var views = { home: $("#view-home"), session: $("#view-session"), summary: $("#view-summary") };

  function showView(name) {
    state.view = name;
    Object.keys(views).forEach(function (k) { views[k].hidden = k !== name; });
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
  function renderHome() {
    Timer.stopTicking();
    state.session = null; state.review = null;
    var root = views.home;
    var active = getActive();
    var sessions = getSessions();
    var bank = pool();
    var history = getHistory();
    var st = computeStats(bank);
    var t = st.totals;
    var scope = Scope.get();
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

    var completion = bank.length ? t.seen / bank.length : 0;
    html += '<div class="hero"><div><h1>Practice REG</h1><p class="sub">Timed multiple-choice drills for the CPA Regulation exam.</p></div>' +
      '<div class="ring-wrap">' + ring(completion, Math.round(completion * 100) + "%", "of bank seen") +
      '<div class="ring-meta"><b>' + pct(t.accuracy) + "</b>accuracy<br><b>" + t.attempts + "</b>attempts</div></div></div>";

    html += '<div class="stat-grid">' +
      stat("Bank size", bank.length, "bank", "") +
      stat("Seen", t.seen, "eye", "teal") +
      stat("Unseen", bank.length - t.seen, "sparkle", "violet") +
      stat("Accuracy", pct(t.accuracy), "target", "green", "grad-text") +
      stat("Time studied", fmtTime(t.totalMs), "clock", "amber") +
      "</div>";

    html += '<div class="card"><div class="card-head"><h2>By area</h2><span class="eyebrow">coverage · accuracy</span></div><div class="area-list">';
    var areaKeys = AREA_ORDER.concat(Object.keys(AREA_NAMES).filter(function (a) { return AREA_ORDER.indexOf(a) < 0; }));
    var bankCount = {}, seenCount = {};
    bank.forEach(function (q) {
      bankCount[q.area] = (bankCount[q.area] || 0) + 1;
      if (history[q.id] && history[q.id].seen > 0) seenCount[q.area] = (seenCount[q.area] || 0) + 1;
    });
    areaKeys.forEach(function (a) {
      if (!AREA_NAMES[a]) return;
      html += areaRow(a, st.byArea[a] || emptyAgg(), "", { seen: seenCount[a] || 0, total: bankCount[a] || 0 });
    });
    html += "</div></div>";

    var def = Math.min(20, bank.length);
    var scoped = scopedBank(), selUnits = Units.get();
    html += '<div class="card card-lg"><div class="card-head"><h2>New session</h2><span class="eyebrow">~5% repeats, wrong ones first</span></div>' +
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

    root.innerHTML = html;
    showView("home");

    var input = $("#batch-size", root);
    $all("[data-unit]", root).forEach(function (b) {
      b.addEventListener("click", function () { if (Units.toggle(b.getAttribute("data-unit"))) renderHome(); });
    });
    var clamp = function (n) { n = parseInt(n, 10); if (!n || n < 1) n = 1; if (n > bank.length) n = bank.length; return n; };
    $all("[data-scope]", root).forEach(function (b) {
      b.addEventListener("click", function () { Scope.set(b.getAttribute("data-scope")); renderHome(); });
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
  function startSession(n) {
    var pick = selectBatch(n);
    var session = {
      id: newId(),
      startedAt: Date.now(),
      questionIds: pick.ids,
      repeatIds: pick.repeatIds,
      cursor: 0,
      answers: {},
      timers: {},
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
   * Render the Session view. Used both for the live session (state.session)
   * and for read-only review of a finished session (state.review).
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
    var answeredCount = review ? ids.length : Object.keys(s.answers).length;
    var reveal = !review && state.justAnswered === id;
    state.justAnswered = null;

    var html = '<div class="progress"><span style="--w:' + Math.round(100 * answeredCount / ids.length) + '%"></span></div>';
    html += '<div class="session-header">' +
      '<div class="counter">Question ' + (cursor + 1) + ' <span class="muted" style="font-weight:500">of ' + ids.length + "</span>" +
      (review ? '<span class="badge badge-review">' + icon("eye", 12) + "Review</span>" : "") + "</div>" +
      "</div>";

    if (!q) {
      html += '<div class="card"><p class="notice">Question ' + escapeHtml(id) + " is no longer in the bank.</p></div>";
    } else {
      html += '<div class="chips-row">' +
        '<span class="badge badge-area">' + escapeHtml(unitLabel(q.area)) + " · " + escapeHtml(UNIT_SHORT[q.area] || q.areaName || "") + "</span>" +
        '<span class="badge">' + escapeHtml(q.topic) + "</span>" +
        (review ? '<span class="badge badge-time">' + icon("clock", 12) + fmtTime(s.results[cursor].ms) + "</span>" : "") +
        '<span class="badge">' + escapeHtml(q.skill) + " · " + difficultyLabel(q.difficulty) + "</span>" +
        (isRepeat ? '<span class="badge badge-repeat">' + icon("history", 12) + "Repeat</span>" : "") +
        (isExtra(q) ? '<span class="badge badge-tcp" title="Topic moved to the TCP discipline in the 2026 Blueprint">TCP</span>' : "") +
        '<span class="badge">' + escapeHtml(q.id) + "</span>" +
        "</div>";

      html += '<div class="card qcard">' +
        '<div class="stem md">' + renderMd(q.stem) + "</div>";
      if (q.reference && String(q.reference).trim()) {
        html += '<details class="reference" open><summary>' + icon("book", 14) + '<span class="eyebrow">Reference</span></summary><div class="md">' + renderMd(q.reference) + "</div></details>";
      }
      html += '<div class="options' + (reveal ? " reveal" : "") + '">';
      (q.options || []).forEach(function (o) {
        var cls = "option";
        var tag = "";
        if (ans) {
          cls += " locked";
          if (o.key === q.answer) { cls += " is-correct"; tag = icon("check", 13) + "Correct answer"; }
          else if (ans.chosen === o.key) { cls += " is-wrong"; tag = icon("x", 13) + "Your answer"; }
          else cls += " is-dim";
          if (ans.chosen == null && o.key === q.answer) tag = icon("check", 13) + "Correct answer (you skipped this)";
        }
        html += '<div class="' + cls + '">' +
          '<button type="button" class="option-btn" data-key="' + escapeHtml(o.key) + '"' + (ans ? ' aria-disabled="true"' : "") + ">" +
          '<span class="key">' + escapeHtml(o.key) + '</span><span class="md">' + renderMd(o.text) + "</span></button>";
        if (ans) {
          html += '<div class="explanation">' + (tag ? '<div class="option-tag">' + tag + "</div>" : "") +
            '<div class="md">' + renderMd(q.explanations && q.explanations[o.key]) + "</div></div>";
        }
        html += "</div>";
      });
      html += "</div>";
      if (!ans && !review) html += '<div class="kbd-hint"><kbd>A</kbd>–<kbd>D</kbd> or <kbd>1</kbd>–<kbd>4</kbd> to answer · <kbd>←</kbd> <kbd>→</kbd> to move</div>';
      html += "</div>";
    }

    // Bottom navigation bar
    html += '<div class="qnav">' +
      '<button type="button" class="btn-ghost btn-icon" id="btn-prev" aria-label="Previous"' + (cursor === 0 ? " disabled" : "") + ">" + icon("left", 18) + "</button>" +
      '<button type="button" class="btn-ghost btn-icon" id="btn-next" aria-label="Next"' + (cursor === ids.length - 1 ? " disabled" : "") + ">" + icon("right", 18) + "</button>" +
      '<div class="strip">';
    ids.forEach(function (qid, i) {
      var a = review ? reviewAnswer(s.results[i]) : s.answers[qid];
      var cls = a ? (a.chosen == null ? "skipped" : a.correct ? "correct" : "wrong") : "";
      if (i === cursor) cls += " current";
      html += '<button type="button" class="' + cls + '" data-jump="' + i + '" title="' + escapeHtml(qid) + '">' + (i + 1) + "</button>";
    });
    html += "</div>" +
      (review
        ? '<button type="button" class="btn-ghost" id="btn-back-summary">' + icon("left") + "Summary</button>"
        : '<button type="button" class="btn-primary" id="btn-finish">' + icon("flag") + "Finish</button>") +
      '<div id="finish-confirm" style="flex-basis:100%"></div></div>';

    root.innerHTML = html;
    showView("session");

    // Wire up
    $("#btn-prev", root).addEventListener("click", function () { navigate(cursor - 1); });
    $("#btn-next", root).addEventListener("click", function () { navigate(cursor + 1); });
    $all("[data-jump]", root).forEach(function (b) {
      b.addEventListener("click", function () { navigate(parseInt(b.getAttribute("data-jump"), 10)); });
    });
    if (!ans && !review) {
      $all(".option-btn", root).forEach(function (b) {
        b.addEventListener("click", function () { answerQuestion(b.getAttribute("data-key")); });
      });
    }
    if (review) {
      $("#btn-back-summary", root).addEventListener("click", function () { renderSummary(s); });
      Timer.stopTicking();
    } else {
      $("#btn-finish", root).addEventListener("click", function () { requestFinish(); });
      Timer.stopTicking(); // clocks are not shown while solving; accumulation still runs via Timer.start/pause
    }

    function navigate(i) {
      if (review) { review.index = Math.max(0, Math.min(i, ids.length - 1)); renderSession(); }
      else gotoQuestion(i);
    }
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


  function requestFinish() {
    var s = state.session;
    if (!s) return;
    var unanswered = s.questionIds.filter(function (id) { return !s.answers[id]; }).length;
    if (unanswered === 0) { finishSession(); return; }
    inlineConfirm($("#finish-confirm", views.session),
      unanswered + " unanswered question" + (unanswered === 1 ? "" : "s") + " will be recorded as skipped. Finish anyway?",
      finishSession);
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
      var r = {
        id: id, area: q.area || null, topic: q.topic || null,
        chosen: a ? a.chosen : null,
        correct: a ? a.correct : null,
        skipped: !a,
        ms: ms
      };
      var h = history[id] || { seen: 0, correct: 0, wrong: 0, lastSeen: null, lastResult: null, totalMs: 0 };
      h.seen = (h.seen || 0) + 1;
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
        '<div><div class="rtopic">' + escapeHtml(r.topic || r.id) + '</div><div class="rmeta">' + escapeHtml(unitLabel(r.area)) + " · " + escapeHtml(UNIT_SHORT[r.area] || "") + " · <code>" + escapeHtml(r.id) + "</code></div></div>" +
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
    var review = state.review, s = review ? review.session : state.session;
    if (!s) return;
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
  window.CPAREG = { selectBatch: selectBatch, renderMd: renderMd, buildExport: buildExport, fmtTime: fmtTime, computeStats: computeStats, Theme: Theme, Scope: Scope, Units: Units, pool: pool, UNIT_ORDER: UNIT_ORDER, UNIT_NUMBER: UNIT_NUMBER };

  renderHome();
})();
