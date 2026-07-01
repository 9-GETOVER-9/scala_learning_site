{
  id: "scala-2026-03-17-string-recursion-homework",
  title: "代码示例讲解与作业布置",
  chapter: "第四章 Scala 字符串、递归与求和练习",
  date: "2026-03-17",
  tags: [
    "字符串重复",
    "字符串拼接",
    "length",
    "border",
    "Unit",
    "box函数",
    "求和函数",
    "代码纠错",
    "递归",
    "sum",
    "1 to 10",
    "列表求和",
    "作业"
  ],
  summary: [
    "本节课主要讲解 Scala 中字符串重复、字符串拼接、图形输出、函数求和、递归和列表求和。",
    "老师通过输出带边框的 hello 图形，说明字符串可以重复，也可以通过加号拼接。",
    "课堂布置了第一次作业：用 Java 和 Scala 分别写 1 到 10 的加法代码，写函数即可。",
    "老师讲解了求和函数常见错误，包括变量位置错误、最后一行没有返回结果、变量名与函数名混淆等。",
    "本节课重点讲解了递归求和，即 sum(10) 依次调用 sum(9)、sum(8)，直到 sum(0)。",
    "老师还说明 Scala 中 1 to 10 可以直接调用 .sum 求和，比手写函数更简洁。"
  ],
  keyPoints: [
    {
      title: "字符串重复",
      content: "Scala 中字符串可以和数字相乘，表示重复字符串，例如 \"-\" * 7 表示 7 个横杠。",
      javaCompare: "Java 字符串没有这种直接重复写法，通常需要循环或工具方法。"
    },
    {
      title: "字符串长度",
      content: "字符串可以通过 .length 获取长度，例如 \"hello\".length 的结果是 5。",
      javaCompare: "Java 中字符串也可以调用 length()，Scala 写法更像属性调用。"
    },
    {
      title: "字符串拼接",
      content: "Scala 中可以使用 + 拼接字符串，例如 \"-\" + s + \"-\"。",
      javaCompare: "Java 也可以使用 + 拼接字符串。"
    },
    {
      title: "输出带边框字符串",
      content: "可以根据字符串长度生成上边框和下边框，再拼接中间字符串，输出简单图形。",
      javaCompare: "Java 中通常需要更多循环或字符串处理代码。"
    },
    {
      title: "Unit 返回类型",
      content: "如果函数主要用于输出，不返回有意义的值，可以写返回类型 Unit。",
      javaCompare: "Unit 类似 Java 中的 void。"
    },
    {
      title: "1 到 10 加法作业",
      content: "课堂布置作业：用 Java 和 Scala 分别实现 1 到 10 的加法代码，写函数即可。",
      javaCompare: "通过同一题目对比 Java 和 Scala 的写法差异。"
    },
    {
      title: "求和函数最后要返回结果",
      content: "Scala 函数最后一行通常是返回值，求和函数最后应该写 result 或 sum 变量。",
      javaCompare: "Java 中通常使用 return result。"
    },
    {
      title: "变量名和函数名不要混淆",
      content: "函数名和内部变量名最好不要相同，否则容易阅读混乱或出错。",
      javaCompare: "Java 中也应避免同名变量造成混淆。"
    },
    {
      title: "递归求和",
      content: "递归求和通过函数调用自己实现，例如 if (i == 0) 0 else i + sum(i - 1)。",
      javaCompare: "Java 和 Scala 都可以写递归，但 Scala 的表达式风格更简洁。"
    },
    {
      title: "递归终止条件",
      content: "递归必须有终止条件，例如 i == 0 时返回 0。",
      javaCompare: ""
    },
    {
      title: "1 to 10 范围",
      content: "Scala 中 1 to 10 表示从 1 到 10 的范围，可以用于遍历或直接调用集合方法。",
      javaCompare: "Java 中通常需要循环或数组。"
    },
    {
      title: "直接调用 .sum",
      content: "Scala 的范围或集合可以直接调用 .sum，例如 (1 to 10).sum。",
      javaCompare: "Java 中通常需要手写循环或使用流式 API。"
    }
  ],
  codeExamples: [
    {
      title: "字符串重复",
      code: `val line = "-" * 7
println(line)`,
      explanation: "输出 7 个横杠。"
    },
    {
      title: "输出 hello 边框",
      code: `val s = "hello"
val border = "-" * (s.length + 2)

println(border)
println("-" + s + "-")
println(border)`,
      explanation: "根据 hello 的长度生成上下边框，输出带边框的字符串。"
    },
    {
      title: "显式声明 box 函数",
      code: `def box(s: String): Unit = {
  val border = "-" * (s.length + 2)
  println(border)
  println("-" + s + "-")
  println(border)
}`,
      explanation: "这个函数只负责输出图形，因此返回值类型是 Unit。"
    },
    {
      title: "循环求和",
      code: `def sum(n: Int): Int = {
  var result = 0
  for (i <- 1 to n) {
    result = result + i
  }
  result
}`,
      explanation: "最后一行 result 是返回值。"
    },
    {
      title: "递归求和",
      code: `def sum(i: Int): Int = {
  if (i == 0) 0 else i + sum(i - 1)
}`,
      explanation: "如果 i 等于 0，返回 0；否则返回 i + sum(i - 1)。"
    },
    {
      title: "直接使用集合 sum",
      code: `val result = (1 to 10).sum`,
      explanation: "1 to 10 是范围，可以直接调用 .sum 求和。"
    }
  ],
  quiz: [
    {
      question: "\"hello\".length 的结果是多少？",
      options: ["3", "4", "5", "7"],
      answer: "5",
      explanation: "hello 有 5 个字母，所以长度是 5。"
    },
    {
      question: "Scala 中 \"-\" * 7 的含义是什么？",
      options: ["数学乘法", "字符串重复 7 次", "删除字符串", "创建对象"],
      answer: "字符串重复 7 次",
      explanation: "字符串乘数字表示重复字符串。"
    },
    {
      question: "如果函数主要用于输出，不返回有意义的值，返回类型通常写什么？",
      options: ["Int", "String", "Unit", "Double"],
      answer: "Unit",
      explanation: "Unit 类似 Java 中的 void，表示没有有意义的返回值。"
    },
    {
      question: "递归函数必须有什么？",
      options: ["终止条件", "图片", "数据库", "压缩包"],
      answer: "终止条件",
      explanation: "递归必须有终止条件，否则会无限调用。"
    },
    {
      question: "(1 to 10).sum 的结果是多少？",
      options: ["10", "45", "55", "100"],
      answer: "55",
      explanation: "1 到 10 相加结果为 55。"
    }
  ],
  dragMatch: [
    { left: "s.length", right: "字符串长度" },
    { left: "\"-\" * 7", right: "字符串重复 7 次" },
    { left: "+", right: "字符串拼接" },
    { left: "Unit", right: "无有意义返回值" },
    { left: "def sum", right: "定义求和函数" },
    { left: "result", right: "保存累计结果" },
    { left: "递归", right: "函数调用自己" },
    { left: "终止条件", right: "防止递归无限执行" },
    { left: "1 to 10", right: "从 1 到 10 的范围" },
    { left: ".sum", right: "直接求和" }
  ],
  flow: [
    "定义字符串 s = hello",
    "计算 s.length = 5",
    "边框长度 = 5 + 2",
    "生成 7 个横杠",
    "输出上边框",
    "输出 -hello-",
    "输出下边框"
  ],
  exercises: [
    {
      question: "请用 Scala 输出 7 个横杠。",
      answer: `println("-" * 7)`
    },
    {
      question: "请写一个 box 函数，输出带边框的字符串。",
      answer: `def box(s: String): Unit = {
  val border = "-" * (s.length + 2)
  println(border)
  println("-" + s + "-")
  println(border)
}`
    },
    {
      question: "请写一个循环函数，计算 1 到 n 的和。",
      answer: `def sum(n: Int): Int = {
  var result = 0
  for (i <- 1 to n) {
    result = result + i
  }
  result
}`
    },
    {
      question: "请写一个递归函数，计算 1 到 n 的和。",
      answer: `def sum(i: Int): Int = {
  if (i == 0) 0 else i + sum(i - 1)
}`
    },
    {
      question: "请用一行 Scala 代码计算 1 到 10 的和。",
      answer: "val result = (1 to 10).sum"
    }
  ],
  conclusion: [
    "本节课讲解了字符串重复和字符串拼接。",
    "字符串可以通过 .length 获取长度。",
    "\"-\" * 7 表示将横杠重复 7 次。",
    "可以用字符串拼接输出简单图形。",
    "函数如果主要用于输出，可以声明返回类型为 Unit。",
    "求和函数最后一行要返回结果变量。",
    "变量名不要和函数名混淆。",
    "递归是函数调用自己，必须有终止条件。",
    "1 to 10 可以表示一个范围。",
    "Scala 可以直接用 (1 to 10).sum 求和。",
    "作业是用 Java 和 Scala 分别实现 1 到 10 加法代码。"
  ]
}