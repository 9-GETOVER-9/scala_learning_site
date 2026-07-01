# Course Folder Organization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Safely organize Scala and Java course materials, normalize 19 Java lesson filenames, document both trees, and preserve the working static website.

**Architecture:** Keep runtime website files untouched and treat course materials as a separate documentation tree. Use reversible filesystem moves with preflight collision checks, then verify counts, filename pairing, resource references, and JavaScript syntax.

**Tech Stack:** PowerShell filesystem operations, Markdown, Node.js syntax checker when available.

---

### Task 1: Preflight and mapping

**Files:**
- Read: `Scala/`, `java/`, `scala-*-processed/`, `js/`

- [ ] Record the recursive file count before changes.
- [ ] Build a 01–19 title mapping from existing Java summary filenames.
- [ ] Verify all 19 transcript and summary sources exist and no destination filename exists.
- [ ] Verify all Scala processed destinations are unique.

### Task 2: Organize Scala and archives

**Files:**
- Move: `scala-*-processed/` to `Scala/生成资料/`
- Move: `js/data.backup*.js` to `archive/data-backups/`
- Move: `需求文档.md` to `docs/requirements.md`
- Move: `README_使用说明.md` to `archive/legacy-docs/`

- [ ] Create destination directories.
- [ ] Move and simplify the 13 Scala processed directory names.
- [ ] Move both data backup files.
- [ ] Move the requirements document and duplicate legacy instructions.

### Task 3: Organize and rename Java materials

**Files:**
- Rename: `java/java录音纪要/` to `java/课堂纪要/`
- Rename: `java/java全部课上内容总结/` to `java/课程总结/`
- Move: `java/java_course_data_objects*/` to `java/课程数据/`

- [ ] Rename the two Java material directories.
- [ ] Rename transcripts to `课堂纪要 NN <title>.md` using the title mapping.
- [ ] Rename summaries to `课堂总结 NN <title>.md`.
- [ ] Move all Java data batches under `java/课程数据/` without changing their contents.

### Task 4: Write directory documentation

**Files:**
- Create: `Scala/README.md`
- Create: `java/README.md`

- [ ] Document the purpose, naming convention, and update flow for each Scala directory.
- [ ] Document the purpose, naming convention, data batches, and `js/data.js` relationship for each Java directory.

### Task 5: Verify completion

**Files:**
- Verify: `index.html`, `lesson.html`, `js/data.js`, `js/index.js`, `js/lesson.js`

- [ ] Confirm the recursive file count equals the preflight count plus the two new README files and this plan/design documentation already created.
- [ ] Confirm exactly 19 Java transcript-summary pairs share identical numbers and titles.
- [ ] Confirm every local CSS/JS reference in the two main HTML files resolves.
- [ ] Run `node --check` against all three runtime JavaScript files when Node.js is available; expect exit code 0.
- [ ] Print the final root and course directory trees for review.
