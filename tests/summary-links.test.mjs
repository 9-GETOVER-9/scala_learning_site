import test from "node:test";
import assert from "node:assert/strict";

import "../js/summary-helpers.js";

const { summariesForLesson } = globalThis;

const summaries = [
  { id: "a", lessonId: "lesson-1", part: "上" },
  { id: "b", lessonId: "lesson-1", part: "下" },
  { id: "c", lessonId: "lesson-2", part: "" },
];

test("summariesForLesson returns every summary mapped to a lesson", () => {
  assert.deepEqual(summariesForLesson(summaries, "lesson-1"), [summaries[0], summaries[1]]);
});

test("summariesForLesson returns an empty list for missing mappings", () => {
  assert.deepEqual(summariesForLesson(summaries, "unknown"), []);
});
