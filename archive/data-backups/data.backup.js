/*
  课程数据文件
  后续新增课程时，复制 lessons 数组中的对象结构，修改 id/title/chapter/date/tags 等字段即可。
*/

const lessons = [
  {
    id: "scala-2026-03-03",
    title: "Scala语言基础与相关概念讲解",
    chapter: "第一章 Scala 基础",
    date: "2026-03-03",
    duration: "第1节课",
    level: "基础",
    tags: [
      "Scala",
      "Java对比",
      "var",
      "val",
      "类型推导",
      "def函数",
      "block返回值",
      "自动类型转换",
      "元组"
    ],
    keywords: [
      "Scala Java 区别",
      "变量 常量",
      "VAR VAL",
      "类型推导",
      "函数定义",
      "代码块返回值",
      "元组 键值对",
      "大数据 非结构化数据"
    ],
    cardSummary:
      "本节课通过 Java 对比讲解 Scala 基础语法，重点包括 var/val、类型推导、函数返回值、block 和元组。",
    learningAdvice:
      "先理解 Java 与 Scala 的写法差异，再动手改写简单代码。重点不要死背，要通过例子理解“值决定类型”和“最后一行作为返回值”。",
    summary: [
      "本节课主要介绍 Scala 语言的基础概念，老师采用 Java 对比的方式帮助同学理解 Scala 的语法特点。",
      "课程重点包括变量与常量、类型推导、分号省略、函数定义、block 返回值、自动类型转换和元组。",
      "老师强调 Scala 比较抽象，不能只听课，必须结合代码练习才能真正理解。",
      "本节课也提到 Scala 适合处理大数据场景中的半结构化和非结构化数据。"
    ],
    keyPoints: [
      {
        id: "java-vs-scala",
        title: "Scala 与 Java 的区别",
        short: "Scala 同时支持面向对象和函数式编程，语法比 Java 更简洁。",
        content:
          "Java 主要以面向对象编程为核心，通常通过类、对象和方法完成任务。Scala 既支持面向对象，也支持函数式编程，所以很多东西都可以被当作表达式、函数或对象来使用。老师反复强调 Scala 有“万物皆对象”的思想，例如数字、字符串、代码块都可以继续调用方法。",
        javaCompare:
          "Java 写法通常更固定：先写类型，再写变量名；Scala 更强调表达式，很多类型可以由右边的值自动推导。",
        mistake:
          "不要把 Scala 简单理解为 Java 的缩写版。Scala 的语法变短了，但背后的思想不同。"
      },
      {
        id: "var-val",
        title: "var 与 val",
        short: "var 表示变量，val 表示常量。",
        content:
          "var 用来定义可以重新赋值的变量；val 用来定义不可变的值，定义后不能再重新赋值。Scala 中推荐优先使用 val，只有确实需要改变值时再使用 var。",
        javaCompare:
          "Java 中常量通常用 final 修饰；Scala 中通常使用 val 表示不可变值。",
        mistake:
          "val 不是不能保存数据，而是保存之后不能重新指向新的值。"
      },
      {
        id: "type-inference",
        title: "类型推导",
        short: "Scala 可以根据等号右边的值判断变量类型。",
        content:
          "Scala 定义变量时可以不写类型。编译器会根据右边的值自动推导类型。例如 var i = 0 会被推导为 Int，var x = 0.5 会被推导为 Double，var name = \"Scala\" 会被推导为 String。",
        javaCompare:
          "Java 通常需要先写清楚类型，例如 int i = 0；Scala 可以写 var i = 0。",
        mistake:
          "类型推导不是没有类型，而是编译器帮你推导出了类型。"
      },
      {
        id: "semicolon",
        title: "分号省略",
        short: "Scala 一般可以省略语句结尾的分号。",
        content:
          "Scala 中一行一个完整语句时，分号通常可以省略。如果一行写多个语句，可以用分号隔开。是否结束主要看表达式是否已经完整。",
        javaCompare:
          "Java 多数语句结尾必须写分号；Scala 更灵活。",
        mistake:
          "分号可以省略不代表语句结构可以随便写，表达式仍然必须完整。"
      },
      {
        id: "def-function",
        title: "def 函数定义",
        short: "Scala 使用 def 定义函数，函数通常有返回值。",
        content:
          "Scala 使用 def 关键字定义函数。老师强调，Scala 函数声明后，无论是否有等号，都有返回值。有等号时，返回函数体中最后一行的值；没有等号时，通常返回 Unit。",
        javaCompare:
          "Java 方法是否有返回值通常看返回值类型和 return；Scala 更强调表达式结果。",
        mistake:
          "不要只按 Java 的 void 思路理解 Scala 函数。Scala 中很多代码块本身就是有值的。"
      },
      {
        id: "block-return",
        title: "block 块返回值",
        short: "Scala 中代码块最后一行通常就是整个块的返回值。",
        content:
          "Scala 的大括号代码块可以看作一个表达式，块中最后一行的结果就是整个 block 的结果。这个思想是理解 Scala 函数返回值的关键。",
        javaCompare:
          "Java 的代码块通常只是组织语句；Scala 的代码块经常可以作为一个有值的表达式。",
        mistake:
          "最后一行是否有意义很重要，不要随便把无关语句放在最后。"
      },
      {
        id: "tuple",
        title: "元组与键值对思想",
        short: "元组可以把不同类型的值放在一起。",
        content:
          "元组是不同类型值的组合，例如 (1, \"张三\", \"Scala\") 可以同时包含编号、姓名和课程。老师也用星期一对应 1、星期二对应 2 的例子解释键值对思想。",
        javaCompare:
          "Java 通常更依赖类或 Map 来组织数据；Scala 可以方便地使用元组表示一组临时组合数据。",
        mistake:
          "元组适合临时组合数据，不适合替代所有类和对象设计。"
      }
    ],
    codeExamples: [
      {
        title: "变量与常量",
        language: "scala",
        code: "var age = 20\nval pi = 3.14\n\nage = 21      // 可以，age 是 var\n// pi = 3.1415  // 不可以，pi 是 val",
        explanation:
          "var 定义的 age 可以重新赋值；val 定义的 pi 不能重新赋值。"
      },
      {
        title: "手动指定类型",
        language: "scala",
        code: "var count: Int = 0\nval name: String = \"Scala\"",
        explanation:
          "冒号后面可以写类型。如果不写，Scala 会根据右边的值进行类型推导。"
      },
      {
        title: "block 返回值",
        language: "scala",
        code: "val result = {\n  val a = 10\n  val b = 20\n  a + b\n}\n\n// result 的值是 30",
        explanation:
          "代码块最后一行是 a + b，所以整个代码块的结果是 30。"
      },
      {
        title: "元组",
        language: "scala",
        code: "val student = (1, \"张三\", \"Scala\")\n\nprintln(student._1) // 1\nprintln(student._2) // 张三\nprintln(student._3) // Scala",
        explanation:
          "元组可以把不同类型的值放在一起，通过 _1、_2、_3 访问对应位置。"
      }
    ],
    quiz: [
      {
        question: "Scala 中定义不可变值通常使用哪个关键字？",
        options: ["var", "val", "final", "static"],
        answer: "val",
        explanation: "val 表示不可变值，定义后不能重新赋值。"
      },
      {
        question: "var i = 0 中，i 的类型主要由什么决定？",
        options: ["变量名 i", "关键字 var", "右边的值 0", "文件名"],
        answer: "右边的值 0",
        explanation: "Scala 可以根据等号右边的值进行类型推导。"
      },
      {
        question: "Scala 中代码块通常返回什么？",
        options: ["第一行的值", "最后一行的值", "变量名", "永远没有返回值"],
        answer: "最后一行的值",
        explanation: "Scala 中 block 的最后一行通常作为整个代码块的返回值。"
      },
      {
        question: "下面哪个说法更准确？",
        options: [
          "Scala 完全不能面向对象",
          "Scala 只支持 Java 写法",
          "Scala 同时支持面向对象和函数式编程",
          "Scala 中没有类型"
        ],
        answer: "Scala 同时支持面向对象和函数式编程",
        explanation: "Scala 既支持面向对象，也支持函数式编程。"
      }
    ],
    dragMatch: [
      { left: "var", right: "可变变量" },
      { left: "val", right: "不可变常量" },
      { left: "def", right: "定义函数" },
      { left: "Int", right: "整型" },
      { left: "Tuple", right: "元组" }
    ],
    flow: {
      title: "类型推导流程动画",
      description: "以 var i = 0 为例，理解 Scala 如何判断变量类型。",
      steps: [
        "看到代码：var i = 0",
        "编译器先识别 var，知道 i 是一个可以改变的变量。",
        "编译器读取等号右边的值 0。",
        "0 是整数，所以 i 被推导为 Int 类型。",
        "最终结果：i 是一个可变的 Int 类型变量。"
      ]
    },
    exercises: [
      {
        question: "请用 Scala 定义一个可变变量 age，初始值为 20。",
        answer: "var age = 20"
      },
      {
        question: "请用 Scala 定义一个不可变常量 school，值为你的学校名称。",
        answer: "val school = \"你的学校名称\""
      },
      {
        question: "写一个代码块，让 result 的值等于 15。",
        answer: "val result = {\n  val a = 5\n  val b = 10\n  a + b\n}"
      },
      {
        question: "定义一个元组，包含编号 1、姓名 张三、课程 Scala。",
        answer: "val student = (1, \"张三\", \"Scala\")"
      }
    ],
    conclusion: [
      "本节课的重点是理解 Scala 和 Java 的语法差异，而不是死记单个语法点。",
      "var 表示变量，val 表示不可变值；Scala 可以根据右边的值推导类型。",
      "Scala 中函数和代码块通常都有返回值，最后一行非常重要。",
      "元组可以临时组合不同类型的数据，适合理解键值对和非结构化数据处理。",
      "课后建议把 Java 写法改成 Scala 写法，多练习 var、val、def 和元组。"
    ]
  }
];

const games = [
  {
    title: "Java变量小游戏",
    description: "通过选择和判断复习 Java 变量、类型与赋值。",
    url: "pages/java-variable-game.html",
    tags: ["Java", "变量", "互动练习"]
  },
  {
    title: "Java方法参数小游戏",
    description: "通过拖拽和选择复习方法参数、形参、实参和返回值。",
    url: "pages/java-method-params-game.html",
    tags: ["Java", "方法", "参数", "互动练习"]
  }
];
