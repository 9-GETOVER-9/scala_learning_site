# 使用说明

本压缩包根据 `4 02.zip` 中的两个 3 月 26 日文件整理：

- `3 26.md`
- `3 26(1).md`

这两个文件不是重复内容，而是同一天不同时间的两节课：

1. `2026-03-26 15:16`：数组、ArrayBuffer、Map、Set、Option、Scala API
2. `2026-03-26 16:29`：集合练习、Map 转数组、List、foreach、匿名函数

因此建议在网站中添加两条课程数据。

## 文件说明

1. `scala-2026-03-26-arrays-maps-sets-summary.md`
   - 15:16 课程的摘要版 Markdown

2. `scala-2026-03-26-arrays-maps-sets-data-object.js`
   - 15:16 课程的数据对象

3. `scala-2026-03-26-collections-map-foreach-summary.md`
   - 16:29 课程的摘要版 Markdown

4. `scala-2026-03-26-collections-map-foreach-data-object.js`
   - 16:29 课程的数据对象

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
lesson.html?id=scala-2026-03-26-arrays-maps-sets
lesson.html?id=scala-2026-03-26-collections-map-foreach
```

## 注意

如果 `lessons` 数组里前面已有课程对象，前一个对象后面要加英文逗号。
