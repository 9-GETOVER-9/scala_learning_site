# 使用说明

本压缩包根据 `4 02.zip` 中的两个 4 月 9 日文件整理：

- `4 09.md`
- `4 09(1).md`

这两个文件不是重复内容，而是同一天不同时间的两节课：

1. `2026-04-09 15:16`：主构造器、辅助构造器、伴生对象、单例对象、静态成员、抽象类
2. `2026-04-09 16:06`：伴生类/伴生对象私有访问、构造参数升级、apply 方法、对象创建

因此建议在网站中添加两条课程数据。

## 文件说明

1. `scala-2026-04-09-companion-constructors-abstract-summary.md`
   - 15:16 课程的摘要版 Markdown

2. `scala-2026-04-09-companion-constructors-abstract-data-object.js`
   - 15:16 课程的数据对象

3. `scala-2026-04-09-companion-apply-private-summary.md`
   - 16:06 课程的摘要版 Markdown

4. `scala-2026-04-09-companion-apply-private-data-object.js`
   - 16:06 课程的数据对象

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
lesson.html?id=scala-2026-04-09-companion-constructors-abstract
lesson.html?id=scala-2026-04-09-companion-apply-private
```

## 注意

如果 `lessons` 数组里前面已有课程对象，前一个对象后面要加英文逗号。
