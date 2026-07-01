# Course Summaries HTML Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate and integrate a searchable 40-article HTML course-summary library with safe Markdown rendering and reliable lesson-detail links.

**Architecture:** Keep Markdown files canonical. A PowerShell entrypoint invokes a Node generator using the build-only `marked` package, validates source metadata, writes stable article HTML and `js/summaries-data.js`, while handwritten frontend files render the index and lesson links. Generated pages remain framework-free and GitHub Pages compatible.

**Tech Stack:** HTML5, CSS, vanilla JavaScript, PowerShell, Node.js, marked, Node built-in test runner.

---

### Task 1: Generator contract tests

**Files:**
- Create: `package.json`
- Create: `scripts/build-summaries.ps1`
- Create: `scripts/build-summaries.mjs`
- Create: `tests/build-summaries.test.mjs`

- [ ] Add build-only `marked` dependency and test/build scripts.
- [ ] Write tests for Java/Scala filename parsing, stable slugs, HTML escaping, raw-HTML suppression, and duplicate detection.
- [ ] Run `npm test`; expect initial failures before generator exports exist.
- [ ] Implement parser and renderer helpers with raw HTML disabled and heading/code/table support.
- [ ] Run `npm test`; expect all generator unit tests to pass.

### Task 2: Generate summary artifacts

**Files:**
- Generate: `summaries/java/*.html`
- Generate: `summaries/scala/*.html`
- Generate: `js/summaries-data.js`

- [ ] Scan exactly 19 Java and 21 Scala Markdown sources.
- [ ] Extract normalized metadata and map Java lesson numbers / Scala dates to existing lesson IDs without speculative matches.
- [ ] Generate stable article pages with breadcrumb, metadata, previous/next links, semantic article markup, and shared stylesheet.
- [ ] Generate browser metadata as `const courseSummaries = [...]`.
- [ ] Run the generator twice and compare hashes; expect identical outputs and exactly 40 non-empty HTML files.

### Task 3: Summary library index

**Files:**
- Create: `summaries.html`
- Create: `js/summaries.js`
- Modify: `css/style.css`
- Test: `tests/summaries-ui.test.mjs`

- [ ] Write DOM-independent tests for summary search and language filtering.
- [ ] Implement exported filter helpers and browser card rendering.
- [ ] Build semantic search/language controls, accessible result status, empty state, and 40-card container.
- [ ] Add responsive summary cards and long-form article styles, including overflow behavior for tables and code.
- [ ] Run UI unit tests and JavaScript syntax checks.

### Task 4: Homepage and lesson integration

**Files:**
- Modify: `index.html`
- Modify: `lesson.html`
- Modify: `js/lesson.js`
- Modify: `css/style.css`
- Test: `tests/summary-links.test.mjs`

- [ ] Add tests that group zero, one, or two summary links by `lessonId`.
- [ ] Add homepage navigation and a visible summary-library feature section.
- [ ] Add lesson-detail summary section that stays hidden when no reliable mapping exists and renders all mapped links otherwise.
- [ ] Add summary navigation links consistently to article pages and the summary index.
- [ ] Run unit tests and verify every local HTML/CSS/JS link resolves.

### Task 5: Browser QA

**Files:**
- Verify: `index.html`, `summaries.html`, `lesson.html`, generated article pages, `pages/*.html`

- [ ] Start a local HTTP server and open the homepage.
- [ ] Verify summary navigation, language filtering, keyword search, empty results, article reading, previous/next navigation, and lesson-detail links.
- [ ] Test desktop and mobile widths; check console errors, keyboard focus, labels, heading hierarchy, table overflow, and code overflow.
- [ ] Re-run all tests, generator determinism checks, JS syntax checks, and broken-link scan.

### Task 6: Agency Agents review and remediation

**Files:**
- Read: official `msitarzewski/agency-agents` role files
- Create: `docs/reviews/2026-06-28-agency-agents-site-review.md`
- Modify: only in-scope summary-library files when high-severity findings are confirmed

- [ ] Fetch the official repository into a temporary directory and record the reviewed revision.
- [ ] Select relevant frontend, UX, accessibility, code-review, and reality-check role definitions.
- [ ] Apply each role rubric to the implementation and write one deduplicated severity-ranked report with evidence.
- [ ] Fix confirmed high-severity in-scope findings and record resolution status in the report.
- [ ] Run the complete verification suite again and retain evidence in the review report.
