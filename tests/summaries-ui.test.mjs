import test from "node:test";
import assert from "node:assert/strict";

import { escapeSummaryHtml, filterSummaries } from "../js/summaries.js";

const samples = [
  { language: "Scala", displayTitle: "Scala 数组", excerpt: "ArrayBuffer 入门", key: "2026-03-19" },
  { language: "Java", displayTitle: "Java 接口", excerpt: "interface 语法", key: "18" },
];

test("filterSummaries filters by language", () => {
  assert.deepEqual(filterSummaries(samples, { language: "Java", keyword: "" }), [samples[1]]);
});

test("filterSummaries searches title, excerpt and key case-insensitively", () => {
  assert.deepEqual(filterSummaries(samples, { language: "all", keyword: "arraybuffer" }), [samples[0]]);
  assert.deepEqual(filterSummaries(samples, { language: "all", keyword: "18" }), [samples[1]]);
});

test("filterSummaries returns an empty list when nothing matches", () => {
  assert.deepEqual(filterSummaries(samples, { language: "Scala", keyword: "interface" }), []);
});

test("escapeSummaryHtml neutralizes generated metadata before innerHTML rendering", () => {
  assert.equal(escapeSummaryHtml('<img src=x onerror="alert(1)">'), "&lt;img src=x onerror=&quot;alert(1)&quot;&gt;");
});
