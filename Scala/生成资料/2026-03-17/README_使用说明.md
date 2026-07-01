# 使用说明

本压缩包根据你上传的两个文件整理：

- `3 17.md`
- `3 17(1).md`

这两个文件建议拆成两节课：

1. `2026-03-17 10:05`：函数、递归、变长参数、过程、reverse、步长与采样
2. `2026-03-17 11:00 / 11:17`：字符串重复、字符串拼接、box 图形、1 到 10 求和、递归求和、作业布置

## 文件说明

1. `scala-2026-03-17-functions-procedures-summary.md`
   - 10:05 课程摘要版 Markdown

2. `scala-2026-03-17-functions-procedures-data-object.js`
   - 10:05 课程数据对象

3. `scala-2026-03-17-string-recursion-homework-summary.md`
   - 11:00/11:17 课程摘要版 Markdown

4. `scala-2026-03-17-string-recursion-homework-data-object.js`
   - 11:00/11:17 课程数据对象

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
lesson.html?id=scala-2026-03-17-functions-procedures
lesson.html?id=scala-2026-03-17-string-recursion-homework
```

## 注意

如果 `lessons` 数组里前面已有课程对象，前一个对象后面要加英文逗号。
