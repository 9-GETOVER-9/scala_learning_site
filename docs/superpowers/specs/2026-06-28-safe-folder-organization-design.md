# 课程资料目录整理设计

## 目标

在不改动网页代码、课程主数据和资源引用的前提下，将 Scala 和 Java 的纪要、总结、生成数据及备份分类归档，并提供目录说明。

## 调整范围

1. 将所有 `scala-*-processed/` 移入 `Scala/生成资料/`，去除目录名中重复的 `scala-` 前缀和 `-processed` 后缀。
2. 新建 `Scala/README.md`，说明课堂纪要、课程总结和生成资料的用途与更新流程。
3. 将 `java/java录音纪要/` 改名为 `java/课堂纪要/`，将 `java/java全部课上内容总结/` 改名为 `java/课程总结/`。
4. Java 纪要和总结使用两位课程编号和一致标题：`课堂纪要 NN <标题>.md` 与 `课堂总结 NN <标题>.md`。纪要标题来自同编号课程总结。
5. 新建 `java/课程数据/`，将所有 `java_course_data_objects*` 目录移入其中；保留各批次原目录名和内部文件名。
6. 新建 `java/README.md`，说明课堂纪要、课程总结、课程数据与网站主数据的关系。
7. 将 `js/data.backup.js` 和 `js/data.backup.before-java.js` 移入 `archive/data-backups/`。
8. 将 `需求文档.md` 移为 `docs/requirements.md`；将根目录重复的 `README_使用说明.md` 移入 `archive/legacy-docs/`。
9. 不改动 `js/data.js`、HTML、CSS 和运行时 JavaScript。

## 安全性与验证

- 记录移动前后的文件总数，确保没有丢失文件。
- 改名前生成映射并检查目标名冲突。
- 核对 19 份 Java 课堂纪要与 19 份课程总结，确保编号和标题一一对应。
- 确认页面引用的 CSS/JS 资源仍存在，并对运行时 JavaScript 执行语法检查。
- 不删除任何文件，所有改动均为工作区内的可逆移动。

## 完成标准

Scala 和 Java 资料分别集中在自己的主目录；Java 的 19 组纪要与总结命名对应；两份 README 能说清各类文件用途；网页引用保持有效。
