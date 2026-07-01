import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath, pathToFileURL } from "node:url";
import { marked } from "marked";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const javaLessonIds = {
  "01": "java-intro-course-overview",
  "02": "java-oop-basics-keywords",
  "03": "java-data-types-array",
  "04": "java-array-reference",
  "05": "java-operators-expression",
  "06": "java-precision-if-branch",
  "07": "java-switch-for-loop",
  "08": "java-while-dowhile-loop",
  "09": "java-array-for-review",
  "10": "java-class-structure-accessor",
  "11": "java-method-overload-constructor",
  "12": "java-oop-review-access",
  "13": "java-inheritance-intro",
  "14": "java-inheritance-syntax-uml",
  "15": "java-oop-polymorphism-upcast",
  "16": "java-abstract-class",
  "17": "java-abstract-review-interface-intro",
  "18": "java-interface-syntax",
  "19": "java-interface-callback",
};

const scalaLessonIds = {
  "2026-03-03-上": "scala-2026-03-03-course-intro",
  "2026-03-03-下": "scala-2026-03-03",
  "2026-03-05-上": "scala-2026-03-05-foundation-preview",
  "2026-03-05-下": "scala-2026-03-05-expressions-loops",
  "2026-03-10-上": "scala-2026-03-10-expressions-for-basic",
  "2026-03-10-下": "scala-2026-03-10-generators-guards",
  "2026-03-12-": "scala-2026-03-12-project-practice",
  "2026-03-17-上": "scala-2026-03-17-functions-procedures",
  "2026-03-17-下": "scala-2026-03-17-string-recursion-homework",
  "2026-03-19-上": "scala-2026-03-19-arrays-ai-prompts",
  "2026-03-19-下": "scala-2026-03-19-environment-for-yield",
  "2026-03-26-上": "scala-2026-03-26-arrays-maps-sets",
  "2026-03-26-下": "scala-2026-03-26-collections-map-foreach",
  "2026-04-02-上": "scala-2026-04-02-classes-methods-basics",
  "2026-04-02-下": "scala-2026-04-02-fields-constructors",
  "2026-04-09-上": "scala-2026-04-09-companion-apply-private",
  "2026-04-09-下": "scala-2026-04-09-companion-constructors-abstract",
  "2026-04-16-": "scala-2026-04-16-pattern-case-classes",
  "2026-04-21-上": "scala-2026-04-21-overriding-traits",
  "2026-04-21-下": "scala-2026-04-21-inheritance-override-fields",
  "2026-04-23-": "scala-2026-04-23-traits-mixin-construction",
};

export function parseJavaFilename(filename) {
  const match = filename.match(/^课堂总结 (\d{2}) (.+)\.md$/u);
  if (!match) throw new Error(`Invalid Java summary filename: ${filename}`);
  return { language: "Java", key: match[1], title: match[2], part: "" };
}

export function parseScalaFilename(filename) {
  const match = filename.match(/^课堂总结 (\d{1,2})-(\d{1,2}) (.+?)(?:-(上|下))?\.md$/u);
  if (!match) throw new Error(`Invalid Scala summary filename: ${filename}`);
  const month = match[1].padStart(2, "0");
  const day = match[2].padStart(2, "0");
  return {
    language: "Scala",
    key: `2026-${month}-${day}`,
    title: match[3],
    part: match[4] || "",
  };
}

export function slugify(value) {
  return value
    .replace(/\s上$/u, " part 1")
    .replace(/\s下$/u, " part 2")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function assertUnique(values, label) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) throw new Error(`Duplicate ${label}: ${value}`);
    seen.add(value);
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderMarkdown(markdown) {
  const renderer = new marked.Renderer();
  renderer.html = ({ text }) => escapeHtml(text);
  renderer.heading = function heading({ tokens, depth }) {
    const level = Math.min(depth + 1, 6);
    return `<h${level}>${this.parser.parseInline(tokens)}</h${level}>\n`;
  };
  const protectedMarkdown = markdown
    .split(/(```[\s\S]*?```|`[^`\n]*`)/g)
    .map((segment, index) => {
      if (index % 2 === 1) return segment;
      return segment.replace(
        /(?<!`)\b(?:new\s+)?[A-Za-z]\w*\[[A-Za-z][\w., ?]*\]\([^\n)]+\)(?!`)/g,
        (match) => `\`${match}\``,
      );
    })
    .join("");
  return marked.parse(protectedMarkdown, { gfm: true, renderer });
}

function loadLessonIds() {
  const source = fs.readFileSync(path.join(projectRoot, "js", "data.js"), "utf8");
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${source};globalThis.__lessons = lessons;`, context, { timeout: 2000 });
  return new Set(context.__lessons.map((lesson) => lesson.id));
}

function plainExcerpt(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`|\[\]()-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 150);
}

function articleTemplate(item, body, previous, next) {
  const label = item.language === "Scala" ? item.key : `第 ${item.key} 课`;
  const partLabel = item.part ? ` · ${item.part}半节` : "";
  const previousLink = previous
    ? `<a class="article-pager-link" rel="prev" href="${previous.slug}.html"><span>上一篇</span><strong>${escapeHtml(previous.title)}</strong></a>`
    : '<span class="article-pager-link disabled" aria-hidden="true"></span>';
  const nextLink = next
    ? `<a class="article-pager-link next" rel="next" href="${next.slug}.html"><span>下一篇</span><strong>${escapeHtml(next.title)}</strong></a>`
    : '<span class="article-pager-link disabled" aria-hidden="true"></span>';

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${escapeHtml(item.excerpt)}" />
  <title>${escapeHtml(item.displayTitle)} - 课程总结</title>
  <link rel="icon" href="../../assets/icons/favicon.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="../../css/style.css" />
</head>
<body>
  <header class="article-header">
    <nav class="top-nav compact">
      <a class="brand" href="../../index.html">Scala Learn</a>
      <div class="nav-links">
        <a href="../../summaries.html">课程总结</a>
        ${item.lessonId ? `<a href="../../lesson.html?id=${encodeURIComponent(item.lessonId)}">互动课程</a>` : ""}
      </div>
    </nav>
    <div class="container article-title-wrap">
      <p class="eyebrow">${item.language} · ${label}${partLabel}</p>
      <h1>${escapeHtml(item.displayTitle)}</h1>
      <p class="hero-text">由课程 Markdown 总结生成，适合复习与查阅。</p>
    </div>
  </header>
  <main class="container article-layout">
    <nav class="article-breadcrumb" aria-label="面包屑">
      <a href="../../index.html">首页</a><span aria-hidden="true">/</span>
      <a href="../../summaries.html">课程总结</a><span aria-hidden="true">/</span>
      <span aria-current="page">${escapeHtml(item.displayTitle)}</span>
    </nav>
    <article class="summary-article panel">
      ${body}
    </article>
    <nav class="article-pager" aria-label="文章翻页">${previousLink}${nextLink}</nav>
  </main>
  <footer class="site-footer"><p><a href="../../summaries.html">返回课程总结资料馆</a></p></footer>
</body>
</html>\n`;
}

function readItems() {
  const lessonIds = loadLessonIds();
  const definitions = [
    { language: "Scala", directory: path.join(projectRoot, "Scala", "课程总结"), parse: parseScalaFilename },
    { language: "Java", directory: path.join(projectRoot, "java", "课程总结"), parse: parseJavaFilename },
  ];
  const items = [];
  for (const definition of definitions) {
    for (const filename of fs.readdirSync(definition.directory).filter((name) => name.endsWith(".md")).sort()) {
      const parsed = definition.parse(filename);
      const markdown = fs.readFileSync(path.join(definition.directory, filename), "utf8");
      const lessonId = parsed.language === "Java"
        ? javaLessonIds[parsed.key]
        : scalaLessonIds[`${parsed.key}-${parsed.part}`];
      if (lessonId && !lessonIds.has(lessonId)) throw new Error(`Missing lesson ID: ${lessonId}`);
      const displayTitle = `${parsed.title}${parsed.part ? ` - ${parsed.part}` : ""}`;
      const slugBase = parsed.language === "Java"
        ? `java-${parsed.key}`
        : `scala-${parsed.key}${parsed.part ? ` ${parsed.part}` : ""}`;
      items.push({
        ...parsed,
        id: `${parsed.language.toLowerCase()}-${parsed.key}${parsed.part ? `-${parsed.part}` : ""}`,
        slug: slugify(slugBase),
        displayTitle,
        source: path.relative(projectRoot, path.join(definition.directory, filename)).replaceAll("\\", "/"),
        url: `summaries/${parsed.language.toLowerCase()}/${slugify(slugBase)}.html`,
        excerpt: plainExcerpt(markdown),
        lessonId: lessonId || "",
        markdown,
      });
    }
  }
  return items.sort((a, b) => a.language.localeCompare(b.language) || a.key.localeCompare(b.key) || a.part.localeCompare(b.part));
}

export function buildSummaries() {
  const items = readItems();
  if (items.length !== 40) throw new Error(`Expected 40 summaries, found ${items.length}`);
  assertUnique(items.map((item) => item.id), "summary ID");
  assertUnique(items.map((item) => item.url), "summary URL");

  for (const language of ["Java", "Scala"]) {
    const languageItems = items.filter((item) => item.language === language);
    const outputDirectory = path.join(projectRoot, "summaries", language.toLowerCase());
    fs.mkdirSync(outputDirectory, { recursive: true });
    for (const existing of fs.readdirSync(outputDirectory).filter((name) => name.endsWith(".html"))) {
      fs.rmSync(path.join(outputDirectory, existing));
    }
    languageItems.forEach((item, index) => {
      const body = renderMarkdown(item.markdown);
      fs.writeFileSync(
        path.join(outputDirectory, `${item.slug}.html`),
        articleTemplate(item, body, languageItems[index - 1], languageItems[index + 1]),
        "utf8",
      );
    });
  }

  const metadata = items.map(({ markdown, ...item }) => item);
  fs.writeFileSync(
    path.join(projectRoot, "js", "summaries-data.js"),
    `/* Generated by scripts/build-summaries.mjs. Do not edit directly. */\nglobalThis.courseSummaries = ${JSON.stringify(metadata, null, 2)};\n`,
    "utf8",
  );
  const matched = metadata.filter((item) => item.lessonId).length;
  console.log(`Generated ${metadata.length} summaries (${matched} matched to lesson pages, ${metadata.length - matched} index-only).`);
  return metadata;
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;
if (isMain) buildSummaries();
