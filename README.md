# Scala 课程交互式学习网站

这是一个纯 HTML / CSS / JavaScript 的静态课程学习网站，适合部署到 GitHub Pages。

## 功能

- 首页课程搜索
- 按章节筛选
- 按上课日期筛选
- 按知识点筛选
- 课程详情页模板
- 课堂摘要
- 知识点拆解
- 代码示例
- 小测验即时反馈
- 拖拽匹配
- 流程动画
- 练习题与参考答案
- Java 互动练习专区
- Java / Scala 课程总结资料馆
- 课程总结关键词搜索和语言筛选
- 从互动课程直达完整总结

## 文件结构

```text
/
├── index.html
├── lesson.html
├── summaries.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── data.js
│   ├── summaries-data.js
│   ├── index.js
│   ├── lesson.js
│   └── summaries.js
├── summaries/
│   ├── java/
│   └── scala/
├── scripts/
│   ├── build-summaries.ps1
│   └── build-summaries.mjs
├── pages/
│   ├── java-variable-game.html
│   └── java-method-params-game.html
└── assets/
    ├── images/
    └── icons/
```

## 如何新增一节课

打开 `js/data.js`，在 `lessons` 数组中新增一个课程对象。

最重要字段：

- `id`：课程唯一标识，用于链接，例如 `scala-2026-03-03`
- `title`：课程标题
- `chapter`：所属章节
- `date`：上课日期
- `tags`：知识点标签
- `summary`：课堂摘要
- `keyPoints`：知识点拆解
- `codeExamples`：代码示例
- `quiz`：小测验
- `dragMatch`：拖拽匹配
- `flow`：流程动画
- `exercises`：练习题
- `conclusion`：课后总结

新增完成后，首页会自动显示课程，并支持搜索和筛选。

## 如何更新课程总结

Java 和 Scala 的 Markdown 源文件分别位于：

```text
java/课程总结/
Scala/课程总结/
```

修改或新增 Markdown 后，运行：

```powershell
npm install
npm run build:summaries
```

生成器会更新 `summaries/` 下的静态 HTML 和 `js/summaries-data.js`。请不要直接编辑生成后的文件。

运行自动测试：

```powershell
npm test
```

## 部署方式

将本项目文件上传到 GitHub 仓库，开启 GitHub Pages 后即可访问。

如果仓库已经部署，只需要把这些文件复制到仓库根目录，提交并 push 即可更新网站。

## 说明

本网站不需要后端、不需要数据库、不保存学生成绩。
