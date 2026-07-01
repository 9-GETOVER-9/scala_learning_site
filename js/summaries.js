export function filterSummaries(summaries, { language = "all", keyword = "" } = {}) {
  const normalizedKeyword = keyword.trim().toLowerCase();
  return summaries.filter((summary) => {
    const matchesLanguage = language === "all" || summary.language === language;
    const haystack = [summary.displayTitle, summary.title, summary.excerpt, summary.key, summary.part]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return matchesLanguage && (!normalizedKeyword || haystack.includes(normalizedKeyword));
  });
}

export function escapeSummaryHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderSummaryCards(summaries, grid, resultStatus) {
  grid.innerHTML = "";
  resultStatus.textContent = `共找到 ${summaries.length} 篇课程总结`;
  if (summaries.length === 0) {
    grid.innerHTML = `
      <div class="summary-empty panel">
        <h2>没有找到匹配的总结</h2>
        <p>请尝试更换关键词，或选择“全部语言”。</p>
      </div>`;
    return;
  }
  for (const summary of summaries) {
    const card = document.createElement("article");
    card.className = "summary-card";
    const language = escapeSummaryHtml(summary.language);
    const title = escapeSummaryHtml(summary.displayTitle);
    const excerpt = escapeSummaryHtml(summary.excerpt);
    const lessonLabel = escapeSummaryHtml(summary.language === "Scala" ? summary.key : `第 ${summary.key} 课`);
    const part = summary.part ? `<span class="tag">${escapeSummaryHtml(summary.part)}半节</span>` : "";
    card.innerHTML = `
      <div class="card-meta"><span>${language}</span><span>·</span><span>${lessonLabel}</span></div>
      <h2><a href="${summary.url}">${title}</a></h2>
      <div class="tag-row"><span class="tag">${language}</span>${part}</div>
      <p class="card-summary">${excerpt}</p>
      <div class="card-actions">
        <a class="btn primary" href="${summary.url}">阅读总结</a>
        ${summary.lessonId ? `<a class="btn ghost" href="lesson.html?id=${encodeURIComponent(summary.lessonId)}">互动课程</a>` : ""}
      </div>`;
    grid.appendChild(card);
  }
}

function initSummaryLibrary() {
  const searchInput = document.getElementById("summarySearch");
  const languageFilter = document.getElementById("summaryLanguage");
  const resetButton = document.getElementById("resetSummaryFilters");
  const grid = document.getElementById("summaryGrid");
  const resultStatus = document.getElementById("summaryResultStatus");
  if (!searchInput || !languageFilter || !grid || !resultStatus) return;

  const requestedLanguage = new URLSearchParams(window.location.search).get("language");
  if (["Java", "Scala"].includes(requestedLanguage)) languageFilter.value = requestedLanguage;

  const render = () => {
    const filtered = filterSummaries(globalThis.courseSummaries || [], {
      language: languageFilter.value,
      keyword: searchInput.value,
    });
    renderSummaryCards(filtered, grid, resultStatus);
  };
  searchInput.addEventListener("input", render);
  languageFilter.addEventListener("change", render);
  resetButton.addEventListener("click", () => {
    searchInput.value = "";
    languageFilter.value = "all";
    searchInput.focus();
    render();
  });
  render();
}

if (typeof document !== "undefined") initSummaryLibrary();
