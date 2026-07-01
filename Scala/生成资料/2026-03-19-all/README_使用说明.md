# 使用说明

本压缩包根据你上传的 `4 02.zip` 中的两个 3 月 19 日文件整理：

- `3 19.md`
- `3 19(1).md`

这两个文件不是重复内容，而是同一天不同时间的两节课：

1. `2026-03-19 15:15`：Scala / Java 数组、定长数组、ArrayBuffer、AI 高阶提示词
2. `2026-03-19 16:05`：环境搭建、JDK 问题、区间步长、数组访问、for yield、守卫和学习建议

因此建议在网站中添加两条课程数据。

## 文件说明

1. `scala-2026-03-19-arrays-ai-prompts-summary.md`
   - 15:15 课程的摘要版 Markdown

2. `scala-2026-03-19-arrays-ai-prompts-data-object.js`
   - 15:15 课程的数据对象

3. `scala-2026-03-19-environment-for-yield-summary.md`
   - 16:05 课程的摘要版 Markdown

4. `scala-2026-03-19-environment-for-yield-data-object.js`
   - 16:05 课程的数据对象

5. `README_使用说明.md`
   - 本说明文件

## 添加位置

把两个 `*-data-object.js` 文件里的对象都复制到：

```text
scala_learning_site/
└── js/
    └── data.js
```

添加到 `const lessons = [...]` 数组中。

## 访问地址

```text
lesson.html?id=scala-2026-03-19-arrays-ai-prompts
lesson.html?id=scala-2026-03-19-environment-for-yield
```

## 注意

如果 `lessons` 数组里前面已有课程对象，前一个对象后面要加英文逗号。
