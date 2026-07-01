import test from "node:test";
import assert from "node:assert/strict";

import {
  assertUnique,
  parseJavaFilename,
  parseScalaFilename,
  renderMarkdown,
  slugify,
} from "../scripts/build-summaries.mjs";

test("parseJavaFilename extracts lesson number and title", () => {
  assert.deepEqual(
    parseJavaFilename("课堂总结 07 switch开关语句与for循环详解.md"),
    { language: "Java", key: "07", title: "switch开关语句与for循环详解", part: "" },
  );
});

test("parseScalaFilename normalizes date and part", () => {
  assert.deepEqual(
    parseScalaFilename("课堂总结 3-3 Scala入门-上.md"),
    { language: "Scala", key: "2026-03-03", title: "Scala入门", part: "上" },
  );
});

test("slugify produces stable lowercase ASCII slugs", () => {
  assert.equal(slugify("Scala 2026-03-03 上"), "scala-2026-03-03-part-1");
});

test("assertUnique rejects duplicate values", () => {
  assert.throws(() => assertUnique(["a", "a"], "slug"), /duplicate slug: a/i);
});

test("renderMarkdown supports headings, code and tables", () => {
  const html = renderMarkdown("# 标题\n\n```scala\nval x = 1\n```\n\n| A | B |\n|---|---|\n| 1 | 2 |");
  assert.match(html, /<h2>\s*标题\s*<\/h2>/);
  assert.match(html, /<code class="language-scala">/);
  assert.match(html, /<table>/);
});

test("renderMarkdown preserves Scala type applications as code instead of links", () => {
  const html = renderMarkdown("### new Array[Int](100)");
  assert.doesNotMatch(html, /href="100"/);
  assert.match(html, /<code>new Array\[Int\]\(100\)<\/code>/);
});

test("renderMarkdown does not rewrite Scala applications already inside inline code", () => {
  const html = renderMarkdown("`new Array[Int](100).length == 100`");
  assert.doesNotMatch(html, /href="100"/);
  assert.match(html, /<code>new Array\[Int\]\(100\)\.length == 100<\/code>/);
});

test("renderMarkdown escapes raw HTML instead of executing it", () => {
  const html = renderMarkdown('<script>alert("x")</script>');
  assert.doesNotMatch(html, /<script>/);
  assert.match(html, /&lt;script&gt;/);
});
