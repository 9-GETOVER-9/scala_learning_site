{
  id: "scala-2026-03-17-functions-procedures",
  title: "编程课程内容讲解",
  chapter: "第四章 Scala 函数、过程与参数",
  date: "2026-03-17",
  tags: [
    "函数",
    "def",
    "block",
    "返回值",
    "递归",
    "变长参数",
    "Unit",
    "过程",
    "reverse",
    "步长",
    "by",
    "转置矩阵",
    "采样",
    "public",
    "Scala与Java对比"
  ],
  summary: [
    "本节课主要回顾 Scala 项目和循环相关内容，并继续讲解函数、递归、变长参数和过程。",
    "老师说明了课程安排，包括下周线上课、本学期两个作业和四个实验。",
    "课堂回顾了运行环境、项目入口、错误对象可能导致找不到入口等问题。",
    "本节课讲解了 reverse 反置、矩阵转置、步长采样等数据处理思想。",
    "重点内容是 Scala 函数定义，包括函数名、参数列表、返回值类型和函数体。",
    "老师还讲解了递归、变长参数和没有等号的过程函数。"
  ],
  keyPoints: [
    {
      title: "项目运行常见问题",
      content: "如果项目中存在错误对象或错误类，运行时可能找不到正确入口。可以删除错误代码、关闭项目或重新创建项目。",
      javaCompare: "Java 项目也需要 main 入口，Scala 项目同样要注意当前运行对象。"
    },
    {
      title: "带变量的 for 推导式",
      content: "带变量的 for 推导式是本阶段重点，常用于科学计算、大数据处理和集合生成。",
      javaCompare: "Java 通常用多层循环和数组操作；Scala 可以用更简洁的推导式表达。"
    },
    {
      title: "reverse 反置",
      content: "reverse 可以把集合或范围的顺序反过来，例如 1 to 10 reverse 后变成 10 到 1。",
      javaCompare: "Java 中通常需要额外循环或工具类实现反置。"
    },
    {
      title: "矩阵转置思想",
      content: "矩阵转置常用于样本计算、回归分析、因子分析等场景，把横向数据转换为纵向数据。",
      javaCompare: "Java 和 Scala 都能实现矩阵转置，但 Scala 在集合操作上更简洁。"
    },
    {
      title: "步长与采样",
      content: "步长表示按固定间隔取值，例如 1 to 10 by 3。实际应用中类似每隔一定距离采集一次数据。",
      javaCompare: "Java 中常用 i += 3 控制步长；Scala 用 by 更直观。"
    },
    {
      title: "离散数据",
      content: "计算机常处理离散数据，例如采样点、坐标点、数据库记录等。",
      javaCompare: ""
    },
    {
      title: "def 定义函数",
      content: "Scala 使用 def 定义函数，函数包括函数名、参数列表、返回值类型和函数体。",
      javaCompare: "Java 方法通常包含修饰符、返回类型、方法名和参数；Scala 写法更简洁。"
    },
    {
      title: "函数返回值",
      content: "有等号的函数，函数体最后一行通常作为返回值，不一定需要 return。",
      javaCompare: "Java 常用 return 返回值；Scala 更常用最后一行表达式。"
    },
    {
      title: "递归",
      content: "递归是函数调用自己，适合计算规则相同但参数不断变化的问题。",
      javaCompare: "Java 和 Scala 都支持递归，但 Scala 函数式编程中递归思想更常见。"
    },
    {
      title: "无参函数和有参函数",
      content: "无参函数没有输入参数，有参函数需要传入参数，参数类型写在参数名后面。",
      javaCompare: "Java 参数类型通常写在参数名前面；Scala 写在参数名后面。"
    },
    {
      title: "默认 public",
      content: "老师提到 Scala 中类、函数、变量默认更偏 public 可见。",
      javaCompare: "Java 不写修饰符时通常是默认访问权限；Scala 默认更偏公开。"
    },
    {
      title: "变长参数",
      content: "Scala 支持变长参数，用星号表示，例如 args: Int*，可以接收不固定数量的参数。",
      javaCompare: "Java 也有可变参数，但 Scala 在集合和遍历中使用更自然。"
    },
    {
      title: "过程",
      content: "没有等号的函数通常不返回有意义的值，返回 Unit，可以称为过程。",
      javaCompare: "Java 中类似 void 方法。"
    }
  ],
  codeExamples: [
    {
      title: "绝对值函数",
      code: `def abs(x: Double): Double = {
  if (x >= 0) x else -x
}`,
      explanation: "如果 x 大于等于 0，返回 x；否则返回 -x。"
    },
    {
      title: "两个数相乘",
      code: `def multiply(x: Int, y: Int): Int = {
  x * y
}`,
      explanation: "函数接收两个整数，返回它们的乘积。"
    },
    {
      title: "递归求和",
      code: `def sum(n: Int): Int = {
  if (n == 0) 0 else n + sum(n - 1)
}`,
      explanation: "从 n 一直递归到 0，再逐层返回求和结果。"
    },
    {
      title: "变长参数求和",
      code: `def sum(args: Int*): Int = {
  var result = 0
  for (arg <- args) {
    result = result + arg
  }
  result
}`,
      explanation: "args: Int* 表示可以接收多个整数参数。"
    },
    {
      title: "步长遍历",
      code: `for (i <- 1 to 10 by 3) {
  println(i)
}`,
      explanation: "按步长 3 取值，输出 1、4、7、10。"
    },
    {
      title: "过程",
      code: `def printBox(s: String) {
  println(s)
}`,
      explanation: "函数体前没有等号，返回值可以理解为 Unit，主要用于执行输出动作。"
    }
  ],
  quiz: [
    {
      question: "Scala 中定义函数使用哪个关键字？",
      options: ["var", "val", "def", "class"],
      answer: "def",
      explanation: "Scala 使用 def 定义函数。"
    },
    {
      question: "Scala 函数体最后一行通常表示什么？",
      options: ["注释", "返回值", "文件名", "包名"],
      answer: "返回值",
      explanation: "Scala 中有等号的函数，函数体最后一行通常就是返回值。"
    },
    {
      question: "变长参数使用什么符号表示？",
      options: ["*", "#", "@", "%"],
      answer: "*",
      explanation: "Scala 中变长参数用星号表示，例如 args: Int*。"
    },
    {
      question: "没有等号的函数通常返回什么？",
      options: ["Unit", "Int", "String", "Array"],
      answer: "Unit",
      explanation: "没有等号的函数通常没有有意义的返回值，可以理解为返回 Unit。"
    },
    {
      question: "递归的核心特点是什么？",
      options: ["函数调用自己", "删除变量", "只能输出图片", "不需要终止条件"],
      answer: "函数调用自己",
      explanation: "递归就是函数在内部调用自己，但必须有终止条件。"
    }
  ],
  dragMatch: [
    { left: "def", right: "定义函数" },
    { left: "block", right: "代码块" },
    { left: "Unit", right: "类似 Java 中 void" },
    { left: "recursion", right: "递归" },
    { left: "args: Int*", right: "变长参数" },
    { left: "reverse", right: "反置顺序" },
    { left: "by", right: "设置步长" },
    { left: "public", right: "公有可见性" },
    { left: "return", right: "Java 中常用返回值关键字" },
    { left: "process", right: "过程，不返回有意义值" }
  ],
  flow: [
    "调用 sum(10)",
    "需要计算 10 + sum(9)",
    "继续计算 9 + sum(8)",
    "一直递归到 sum(0)",
    "sum(0) 返回 0",
    "逐层向上返回",
    "最终得到 55"
  ],
  exercises: [
    {
      question: "写一个函数 abs，接收一个 Double，返回它的绝对值。",
      answer: `def abs(x: Double): Double = {
  if (x >= 0) x else -x
}`
    },
    {
      question: "写一个函数 multiply，接收两个整数并返回乘积。",
      answer: `def multiply(x: Int, y: Int): Int = {
  x * y
}`
    },
    {
      question: "写一个递归函数，计算 1 到 n 的和。",
      answer: `def sum(n: Int): Int = {
  if (n == 0) 0 else n + sum(n - 1)
}`
    },
    {
      question: "写一个变长参数函数，计算多个整数的和。",
      answer: `def sum(args: Int*): Int = {
  var result = 0
  for (arg <- args) {
    result = result + arg
  }
  result
}`
    },
    {
      question: "写一个 for 循环，按步长 3 输出 1 到 10 中的数。",
      answer: `for (i <- 1 to 10 by 3) {
  println(i)
}`
    }
  ],
  conclusion: [
    "本节课重点学习 Scala 函数定义、递归、变长参数和过程。",
    "Scala 使用 def 定义函数。",
    "函数通常由函数名、参数列表、返回值类型和函数体组成。",
    "有等号的函数，最后一行通常是返回值。",
    "没有等号的函数，返回值通常是 Unit，也可以称为过程。",
    "递归适合计算规则相同、参数不断变化的问题。",
    "变长参数使用 * 表示，可以接收数量不固定的参数。",
    "reverse 可用于反置数据顺序。",
    "by 可以设置步长，用于按间隔采样。"
  ]
}