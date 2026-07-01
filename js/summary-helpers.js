(function exposeSummaryHelpers(global) {
  global.summariesForLesson = function summariesForLesson(summaries, lessonId) {
    if (!lessonId || !Array.isArray(summaries)) return [];
    return summaries.filter((summary) => summary.lessonId === lessonId);
  };
})(globalThis);
