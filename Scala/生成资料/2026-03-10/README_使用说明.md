# 使用说明

本压缩包根据你上传的两个文件整理：

- `3 10.md`
- `3 10(1).md`

这两个文件不是重复内容，而是同一天的两节课：

1. `2026-03-10 10:07`：Scala 表达式、block、for 循环基础与职业发展
2. `2026-03-10 11:00`：Scala for 循环生成器、守卫、二维遍历和集合生成

因此建议在网站中添加两条课程数据。

## 文件说明

1. `scala-2026-03-10-expressions-for-basic-summary.md`
   - 10:07 课程的摘要版 Markdown

2. `scala-2026-03-10-expressions-for-basic-data-object.js`
   - 10:07 课程的数据对象

3. `scala-2026-03-10-generators-guards-summary.md`
   - 11:00 课程的摘要版 Markdown

4. `scala-2026-03-10-generators-guards-data-object.js`
   - 11:00 课程的数据对象

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
lesson.html?id=scala-2026-03-10-expressions-for-basic
lesson.html?id=scala-2026-03-10-generators-guards
```

## 注意

如果 `lessons` 数组里前面已有课程对象，前一个对象后面要加英文逗号。
