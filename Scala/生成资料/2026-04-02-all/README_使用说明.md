# 使用说明

本压缩包根据 `4 02.zip` 中的两个 4 月 2 日文件整理：

- `4 02.md`
- `4 02(1).md`

这两个文件不是重复内容，而是同一天不同时间的两节课：

1. `2026-04-02 15:16`：循环、类、对象、方法、函数、类参数、作用域与课堂作业
2. `2026-04-02 16:07`：类与对象、无参方法、字段、Getter/Setter、主构造器、辅助构造器

因此建议在网站中添加两条课程数据。

## 文件说明

1. `scala-2026-04-02-classes-methods-basics-summary.md`
   - 15:16 课程的摘要版 Markdown

2. `scala-2026-04-02-classes-methods-basics-data-object.js`
   - 15:16 课程的数据对象

3. `scala-2026-04-02-fields-constructors-summary.md`
   - 16:07 课程的摘要版 Markdown

4. `scala-2026-04-02-fields-constructors-data-object.js`
   - 16:07 课程的数据对象

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
lesson.html?id=scala-2026-04-02-classes-methods-basics
lesson.html?id=scala-2026-04-02-fields-constructors
```

## 注意

如果 `lessons` 数组里前面已有课程对象，前一个对象后面要加英文逗号。
