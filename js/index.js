const searchInput = document.getElementById("searchInput");
const chapterFilter = document.getElementById("chapterFilter");
const dateFilter = document.getElementById("dateFilter");
const tagFilter = document.getElementById("tagFilter");
const lessonGrid = document.getElementById("lessonGrid");
const gameGrid = document.getElementById("gameGrid");
const resultInfo = document.getElementById("resultInfo");
const resetFilters = document.getElementById("resetFilters");

function uniqueValues(list) {
  return [...new Set(list)].filter(Boolean).sort();
}

function fillSelect(select, values, label) {
  select.innerHTML = `<option value="all">全部${label}</option>`;
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function initStats() {
  const chapters = uniqueValues(lessons.map((lesson) => lesson.chapter));
  const tags = uniqueValues(lessons.flatMap((lesson) => lesson.tags));
  document.getElementById("lessonCount").textContent = lessons.length;
  document.getElementById("chapterCount").textContent = chapters.length;
  document.getElementById("tagCount").textContent = tags.length;
  document.getElementById("gameCount").textContent = games.length;
}

function initFilters() {
  fillSelect(chapterFilter, uniqueValues(lessons.map((lesson) => lesson.chapter)), "章节");
  fillSelect(dateFilter, uniqueValues(lessons.map((lesson) => lesson.date)), "日期");
  fillSelect(tagFilter, uniqueValues(lessons.flatMap((lesson) => lesson.tags)), "知识点");
}

function lessonMatchesSearch(lesson, keyword) {
  if (!keyword) return true;
  const haystack = [
    lesson.title,
    lesson.chapter,
    lesson.date,
    lesson.cardSummary,
    lesson.learningAdvice,
    ...(lesson.tags || []),
    ...(lesson.keywords || []),
    ...(lesson.summary || []),
    ...(lesson.keyPoints || []).flatMap((point) => [point.title, point.short, point.content, point.javaCompare, point.mistake])
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(keyword.toLowerCase());
}

function getFilteredLessons() {
  const keyword = searchInput.value.trim();
  const chapter = chapterFilter.value;
  const date = dateFilter.value;
  const tag = tagFilter.value;

  return lessons.filter((lesson) => {
    const matchChapter = chapter === "all" || lesson.chapter === chapter;
    const matchDate = date === "all" || lesson.date === date;
    const matchTag = tag === "all" || lesson.tags.includes(tag);
    const matchKeyword = lessonMatchesSearch(lesson, keyword);
    return matchChapter && matchDate && matchTag && matchKeyword;
  });
}

function renderLessons() {
  const filtered = getFilteredLessons();
  lessonGrid.innerHTML = "";
  resultInfo.textContent = `共找到 ${filtered.length} 节课程`;

  if (filtered.length === 0) {
    lessonGrid.innerHTML = `
      <article class="lesson-card">
        <h3>没有找到匹配课程</h3>
        <p class="card-summary">可以尝试减少筛选条件，或者换一个关键词。</p>
      </article>
    `;
    return;
  }

  filtered.forEach((lesson) => {
    const card = document.createElement("article");
    card.className = "lesson-card";
    card.innerHTML = `
      <div class="card-meta">
        <span>${lesson.chapter}</span>
        <span>·</span>
        <span>${lesson.date}</span>
        <span>·</span>
        <span>${lesson.level || "基础"}</span>
      </div>
      <h3>${lesson.title}</h3>
      <div class="tag-row">
        ${lesson.tags.slice(0, 7).map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <p class="card-summary">${lesson.cardSummary}</p>
      <div class="card-actions">
        <a class="btn primary" href="lesson.html?id=${lesson.id}">进入学习</a>
      </div>
    `;
    lessonGrid.appendChild(card);
  });
}

function renderGames() {
  gameGrid.innerHTML = "";
  games.forEach((game) => {
    const card = document.createElement("article");
    card.className = "game-card";
    card.innerHTML = `
      <h3>${game.title}</h3>
      <p class="card-summary">${game.description}</p>
      <div class="tag-row">
        ${game.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="card-actions">
        <a class="btn primary" href="${game.url}">进入练习</a>
      </div>
    `;
    gameGrid.appendChild(card);
  });
}

function bindEvents() {
  [searchInput, chapterFilter, dateFilter, tagFilter].forEach((el) => {
    el.addEventListener("input", renderLessons);
    el.addEventListener("change", renderLessons);
  });

  resetFilters.addEventListener("click", () => {
    searchInput.value = "";
    chapterFilter.value = "all";
    dateFilter.value = "all";
    tagFilter.value = "all";
    renderLessons();
  });
}

initStats();
initFilters();
renderLessons();
renderGames();
bindEvents();
