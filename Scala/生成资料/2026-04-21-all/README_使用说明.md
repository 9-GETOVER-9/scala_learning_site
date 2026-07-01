# 使用说明

本压缩包根据 `4 02.zip` 中的两个 4 月 21 日文件整理：

- `4 21.md`
- `4 21(1).md`

这两个文件不是重复内容，而是同一天不同时间的两节课：

1. `2026-04-21 10:05`：Scala / Java 继承对比、主构造器传参、override、final、protected、字段重写
2. `2026-04-21 11:03 / 11:19`：覆盖与重写、val / var 底层规则、结构类型对象、抽象类、抽象字段、trait 特质

因此建议在网站中添加两条课程数据。

## 文件说明

1. `scala-2026-04-21-inheritance-override-fields-summary.md`
   - 10:05 课程的摘要版 Markdown

2. `scala-2026-04-21-inheritance-override-fields-data-object.js`
   - 10:05 课程的数据对象

3. `scala-2026-04-21-overriding-traits-summary.md`
   - 11:03 / 11:19 课程的摘要版 Markdown

4. `scala-2026-04-21-overriding-traits-data-object.js`
   - 11:03 / 11:19 课程的数据对象

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
lesson.html?id=scala-2026-04-21-inheritance-override-fields
lesson.html?id=scala-2026-04-21-overriding-traits
```

## 注意

如果 `lessons` 数组里前面已有课程对象，前一个对象后面要加英文逗号。
