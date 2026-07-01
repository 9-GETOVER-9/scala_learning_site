# 使用说明

本压缩包根据你上传的两个文件整理：

- `3 5(1).md`
- `3 5(2).md`

检查结果：两个文件内容基本相同，只是记录/上传时间标记略有差异。因此建议在网站中只添加一条课程，避免首页出现重复课程卡片。

## 文件说明

1. `scala-2026-03-05-expressions-loops-summary.md`
   - 摘要后的 Markdown 版本
   - 可作为课程笔记、资料备份或提交说明

2. `scala-2026-03-05-expressions-loops-data-object.js`
   - 可直接追加到之前网站项目的 `js/data.js` 的 `lessons` 数组中

## 添加位置

```text
scala_learning_site/
└── js/
    └── data.js
```

把 `scala-2026-03-05-expressions-loops-data-object.js` 里的整个对象复制进去。

## 访问地址

添加后，本节课页面地址为：

```text
lesson.html?id=scala-2026-03-05-expressions-loops
```

## 注意

如果 `lessons` 数组里前面已经有课程对象，前一个对象后面要加英文逗号。
