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
  },
  {
  id: "scala-2026-03-03-course-intro",
  title: "Java与Scala课程相关讲解及要求",
  chapter: "第一章 Scala 课程导入与环境准备",
  date: "2026-03-03",
  tags: [
    "课程导入",
    "学习要求",
    "AI影响",
    "大数据",
    "Hadoop",
    "Spark",
    "环境搭建",
    "Eclipse",
    "Scala Project",
    "Scala class",
    "Scala trait",
    "Scala object",
    "var",
    "val",
    "分号省略"
  ],
  summary: [
    "本节课主要介绍 Java 与 Scala 课程的学习要求、课程安排、软件环境和 Scala 基础操作。",
    "老师强调 Scala 比 Java 更抽象，代码更短，但背后的思想更复杂，因此必须多动手敲代码。",
    "课堂说明了 Java 与 Hadoop、大数据存储之间的关系，也介绍了 Scala 与 Spark、内存计算之间的联系。",
    "老师结合 AI 发展趋势提醒同学，需要培养架构思想、软件开发能力和使用 AI 工具的能力。",
    "课堂后半部分演示了在 Eclipse 中创建 Scala 项目、创建 Scala class，并初步介绍 var、val 和省略分号。"
  ],
  keyPoints: [
    {
      title: "课程学习要求",
      content: "本课程比较抽象，不能只听课。老师要求同学多敲代码、多练习，尤其要在实验课前提前搭建环境并熟悉基本操作。",
      javaCompare: "Java 中很多结构比较直观，例如类、对象、方法；Scala 封装更多，代码更短，但理解难度更高。"
    },
    {
      title: "Java 与 Scala 的学习意义",
      content: "Java 和 Scala 都是为后续大数据方向服务的重要语言。Java 常与 Hadoop、大数据存储相关，Scala 常与 Spark、内存计算相关。",
      javaCompare: "Java 更常用于大数据存储生态，Scala 在 Spark 计算平台中非常重要。"
    },
    {
      title: "AI 对未来学习和就业的影响",
      content: "老师提醒同学，AI 已经进入很多行业。未来只会简单写代码可能不够，还需要理解架构、数据管理和软件开发思维。",
      javaCompare: ""
    },
    {
      title: "软件安装与环境准备",
      content: "软件安装需要按顺序进行，先安装基础环境并配置 JDK 等依赖，再安装 Scala 相关工具。否则可能出现环境变量或注册表问题。",
      javaCompare: "Java 和 Scala 都依赖 JDK/JRE 环境，Scala 开发环境也需要正确配置 Java 基础环境。"
    },
    {
      title: "使用 Eclipse 创建 Scala 项目",
      content: "在 Eclipse 中可以通过 File → New → Scala Project 创建 Scala 项目。项目创建后，可以在 src 目录下继续创建包、类或对象。",
      javaCompare: "Java 中创建 Java Project，Scala 中创建 Scala Project，整体项目思想类似。"
    },
    {
      title: "Scala class",
      content: "Scala class 表示 Scala 类，和 Java 类类似，可以在类中定义变量、常量和方法。",
      javaCompare: "Scala class 和 Java class 都用于描述对象的模板，但 Scala 后续还会涉及 object、trait 等结构。"
    },
    {
      title: "Scala trait",
      content: "Scala trait 可以先理解为特质，是 Scala 中非常重要的结构。本节课只是初步介绍，后续课程会重点讲。",
      javaCompare: "trait 与 Java 中的接口有相似之处，但 Scala 的 trait 功能更丰富。"
    },
    {
      title: "Scala object",
      content: "Scala object 可以用来创建对象，尤其常用于单例对象。课堂中提到，Scala 对象比 Java 对象更难，后续会重点讲。",
      javaCompare: "Java 通常通过 new 创建对象；Scala 中 object 可以直接定义单例对象。"
    },
    {
      title: "var 定义变量",
      content: "var 用于定义变量，变量的值后续可以改变。例如 var i = 10。",
      javaCompare: "Java 通常写成 int i = 10；Scala 可以省略类型，由值推导。"
    },
    {
      title: "val 定义常量",
      content: "val 用于定义不可变值。例如 val k = i + j，k 定义之后不应再重新赋值。",
      javaCompare: "Java 中常用 final 表示常量；Scala 中常用 val。"
    },
    {
      title: "省略分号",
      content: "Scala 语句末尾通常可以省略分号，这是 Scala 尽量减少程序员手动操作的体现。",
      javaCompare: "Java 语句末尾通常必须写分号；Scala 一行一个完整语句时通常可以不写。"
    }
  ],
  codeExamples: [
    {
      title: "定义变量和常量",
      code: `var i = 10
var j = 11
val k = i + j`,
      explanation: "i 和 j 使用 var 定义，是变量；k 使用 val 定义，是常量。k 的值为 21。"
    },
    {
      title: "创建 Scala 类",
      code: `class Test {
  var i = 10
  var j = 11
  val k = i + j
}`,
      explanation: "Test 是一个 Scala 类，类中定义了两个变量 i、j 和一个常量 k。"
    },
    {
      title: "创建对象并访问属性",
      code: `object Main {
  def main(args: Array[String]): Unit = {
    val c = new Test
    println(c.k)
  }
}`,
      explanation: "new Test 创建对象 c，c.k 访问 Test 类中的 k，输出结果为 21。"
    },
    {
      title: "Scala 可以省略分号",
      code: `var i = 10
var j = 11
val k = i + j`,
      explanation: "Scala 中一行一个完整语句时，末尾通常不需要写分号。"
    }
  ],
  quiz: [
    {
      question: "本节课中老师强调学习 Scala 最重要的方式是什么？",
      options: ["只听课", "只看视频", "多动手敲代码", "只背概念"],
      answer: "多动手敲代码",
      explanation: "Scala 比较抽象，必须通过反复敲代码来理解。"
    },
    {
      question: "在 Eclipse 中创建 Scala 项目应该选择哪个选项？",
      options: ["Java Project", "Scala Project", "Text File", "Database Project"],
      answer: "Scala Project",
      explanation: "创建 Scala 项目需要选择 Scala Project。"
    },
    {
      question: "Scala 中定义变量使用哪个关键字？",
      options: ["var", "val", "final", "object"],
      answer: "var",
      explanation: "var 用来定义变量，变量值可以改变。"
    },
    {
      question: "Scala 中定义常量使用哪个关键字？",
      options: ["var", "val", "class", "package"],
      answer: "val",
      explanation: "val 用来定义不可变值。"
    },
    {
      question: "Scala object 常用于创建什么？",
      options: ["数据库", "单例对象", "图片", "压缩文件"],
      answer: "单例对象",
      explanation: "Scala object 可用于创建单例对象。"
    },
    {
      question: "Spark 主要和下面哪个方向关系更密切？",
      options: ["内存计算", "图片设计", "文字排版", "硬盘分区"],
      answer: "内存计算",
      explanation: "课堂中提到 Spark 主要针对内存进行计算。"
    }
  ],
  dragMatch: [
    {
      left: "var",
      right: "定义变量"
    },
    {
      left: "val",
      right: "定义常量"
    },
    {
      left: "Scala Project",
      right: "创建 Scala 项目"
    },
    {
      left: "Scala class",
      right: "Scala 类"
    },
    {
      left: "Scala trait",
      right: "Scala 特质"
    },
    {
      left: "Scala object",
      right: "Scala 对象或单例对象"
    },
    {
      left: "src",
      right: "源代码目录"
    },
    {
      left: "Spark",
      right: "常用于内存计算的大数据平台"
    },
    {
      left: "Hadoop",
      right: "常用于大数据存储生态"
    }
  ],
  flow: {
    title: "创建 Scala 项目流程",
    description: "展示如何在 Eclipse 中创建 Scala 项目并编写基础代码。",
    steps: [
      "打开 Eclipse 开发环境",
      "点击 File 菜单",
      "选择 New",
      "选择 Scala Project",
      "输入项目名称，例如 first",
      "点击 Finish 创建项目",
      "在 src 目录中创建 Scala class",
      "编写 var、val 等基础代码并运行"
    ]
  },
  exercises: [
    {
      question: "请写出在 Eclipse 中创建 Scala 项目的基本步骤。",
      answer: "File → New → Scala Project → 输入项目名称 → Finish"
    },
    {
      question: "请定义两个 Scala 变量 i 和 j，值分别为 10 和 11。",
      answer: `var i = 10
var j = 11`
    },
    {
      question: "请定义一个常量 k，让它等于 i + j。",
      answer: "val k = i + j"
    },
    {
      question: "请创建一个 Scala 类 Test，并在其中定义 i、j、k。",
      answer: `class Test {
  var i = 10
  var j = 11
  val k = i + j
}`
    },
    {
      question: "请说明 Scala 中为什么可以省略分号。",
      answer: "Scala 尽量减少程序员的手动操作，一行一个完整语句时，末尾通常可以省略分号。"
    }
  ],
  conclusion: [
    "本节课是 Java 与 Scala 课程的导入课，重点是理解课程重要性和学习要求。",
    "Scala 比 Java 更抽象，代码更精简，但更需要理解背后的思想。",
    "Java 与 Hadoop、大数据存储相关，Scala 与 Spark、内存计算关系密切。",
    "学习 Scala 前应先搭好环境，熟悉 Eclipse 中创建 Scala Project 的流程。",
    "本节课已经初步接触 Scala class、trait、object、var、val 和省略分号。",
    "后续学习时不要只看代码，要反复敲、反复运行、反复改错。"
  ]
},
  {
  id: "scala-2026-03-05-expressions-loops",
  title: "编程知识讲解与学习就业指导",
  chapter: "第二章 Scala 表达式、语句块与循环",
  date: "2026-03-05",
  tags: [
    "表达式",
    "语句",
    "block",
    "if else",
    "分号省略",
    "Unit",
    "print",
    "println",
    "运算符重载",
    "for循环",
    "while循环",
    "to",
    "until",
    "区间",
    "函数返回类型",
    "AI辅助编程",
    "学习方法",
    "就业指导"
  ],
  summary: [
    "本节课主要讲解 Scala 中表达式、语句块、输入输出、循环语句和区间范围等基础语法。",
    "老师强调 Scala 中很多结构都有值，例如 if...else、block 语句块都可以作为表达式参与赋值。",
    "课堂通过 Java 和 Scala 对比说明，Java 更强调分支语句流程，Scala 更强调表达式结果。",
    "本节课讲解了 print 与 println 的区别，也介绍了不同类型相加和运算符重载的思想。",
    "课堂后半部分重点讲解了 for 循环、while 循环，以及 to 和 until 在区间边界上的区别。",
    "老师还结合学习方法、考研和就业趋势，提醒同学要学会使用 AI 辅助编程，但不能放弃理解代码和调试代码。"
  ],
  keyPoints: [
    {
      title: "表达式有值",
      content: "Scala 中很多结构都可以看作表达式，而表达式是有值的。例如 if...else 可以根据条件返回不同结果，并直接赋值给变量。",
      javaCompare: "Java 中 if...else 更常作为分支语句使用；Scala 中 if...else 更常被当成有结果的表达式。"
    },
    {
      title: "if else 分支表达式",
      content: "在 Scala 中，可以写 val result = if (x > 0) 1 else -1。这个表达式的值取决于 x 是否大于 0。",
      javaCompare: "Java 通常需要先定义变量，再在 if 和 else 中分别赋值；Scala 可以一步完成。"
    },
    {
      title: "分号省略",
      content: "Scala 中一行一个完整语句时，通常不需要写分号。只有在一行写多个语句时，才需要用分号分隔。",
      javaCompare: "Java 和 C++ 中语句末尾通常需要分号；Scala 的语法更简洁。"
    },
    {
      title: "block 语句块",
      content: "用大括号包起来的一组语句可以看成 block。block 中可以有多个计算步骤，最后一行通常是整个 block 的值。",
      javaCompare: "Java 中代码块主要用于组织语句；Scala 中 block 可以直接产生值。"
    },
    {
      title: "block 的最后一行作为返回值",
      content: "Scala 中 block 的值通常由最后一个表达式决定。前面的语句可以理解为计算过程，最后一行给出结果。",
      javaCompare: "Java 通常需要 return 或变量赋值来表示结果；Scala 可以利用 block 最后一行直接返回结果。"
    },
    {
      title: "Unit",
      content: "当一个表达式或语句块没有实际返回值时，可以理解为返回 Unit。Unit 类似 Java 中的 void。",
      javaCompare: "Java 中 void 表示没有返回值；Scala 中 Unit 表示返回一个空的结果。"
    },
    {
      title: "print 与 println",
      content: "print 和 println 都可以输出内容。print 不自动换行，println 输出后会自动换行。",
      javaCompare: "Java 中也有类似的 print 和 println，用法相近。"
    },
    {
      title: "运算符重载思想",
      content: "课堂提到，不同类型相加需要考虑类型和运算符规则。运算符也可以理解为方法，某些语言可以通过重载赋予运算符新功能。",
      javaCompare: "Java 对运算符重载支持有限；C++ 中运算符重载更典型，Scala 中运算符也具有方法调用的特点。"
    },
    {
      title: "for 循环",
      content: "Scala 中 for 循环可以遍历一个范围，例如 for (i <- 1 to 5)。其中 <- 表示从右边范围中依次取值给 i。",
      javaCompare: "Java 的 for 循环通常写初始化、条件和更新；Scala 的 for 循环更接近 Python 的遍历思想。"
    },
    {
      title: "while 循环",
      content: "Scala 的 while 循环和 Java 类似，当条件满足时重复执行循环体。循环体中通常需要更新变量，避免死循环。",
      javaCompare: "Scala 和 Java 的 while 结构相似，都是 while 条件成立时执行语句。"
    },
    {
      title: "to 与 until",
      content: "1 to 5 表示包含 5，类似闭区间；1 until 5 表示不包含 5，类似半开半闭区间。",
      javaCompare: "Java 中通常通过 <= 或 < 控制边界；Scala 中可以通过 to 和 until 更直观地表达。"
    },
    {
      title: "函数返回类型",
      content: "如果已经知道函数返回类型，建议写出来，例如 def signum(x: Int): Int。这样代码更清晰，别人更容易理解。",
      javaCompare: "Java 方法必须写返回类型；Scala 可以推导，但教学和协作中建议重要函数写清楚。"
    },
    {
      title: "AI 辅助编程",
      content: "老师提醒同学要学会驾驭 AI，把 AI 当成代码生成、调试和完善的助手，但不能完全照搬。",
      javaCompare: ""
    },
    {
      title: "学习方法",
      content: "学习编程要多看书、多翻书、多看目录、多敲代码。一门语言最好看多本书，并且反复复习。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "if 表达式赋值",
      code: `val result = if (x > 0) 1 else -1`,
      explanation: "if...else 整体有值，可以直接赋给 result。"
    },
    {
      title: "block 语句块赋值",
      code: `val sum = {
  val a = 10
  val b = 20
  a + b
}`,
      explanation: "block 的最后一行是 a + b，所以 sum 的值是 30。"
    },
    {
      title: "print 和 println",
      code: `print("Hello")
println("Scala")`,
      explanation: "print 不自动换行，println 会在输出后自动换行。"
    },
    {
      title: "for 循环：to",
      code: `for (i <- 1 to 5) {
  println(i)
}`,
      explanation: "1 to 5 包含 5，会输出 1、2、3、4、5。"
    },
    {
      title: "for 循环：until",
      code: `for (i <- 1 until 5) {
  println(i)
}`,
      explanation: "1 until 5 不包含 5，会输出 1、2、3、4。"
    },
    {
      title: "while 循环",
      code: `var i = 1

while (i <= 5) {
  println(i)
  i = i + 1
}`,
      explanation: "当 i <= 5 成立时重复执行循环体，每次循环后 i 增加 1。"
    },
    {
      title: "标明函数返回类型",
      code: `def signum(x: Int): Int = {
  if (x > 0) 1 else -1
}`,
      explanation: "函数参数 x 是 Int，函数返回值也是 Int。"
    }
  ],
  quiz: [
    {
      question: "Scala 中 if...else 是否可以作为表达式赋值？",
      options: ["可以", "不可以", "只能在 Java 中可以", "只能写在注释里"],
      answer: "可以",
      explanation: "Scala 中 if...else 可以产生值，因此可以直接赋值给变量。"
    },
    {
      question: "Scala 中 block 的值通常由什么决定？",
      options: ["第一行", "最后一行", "注释", "变量名长度"],
      answer: "最后一行",
      explanation: "Scala 中 block 的最后一个表达式通常就是整个 block 的值。"
    },
    {
      question: "println 和 print 的主要区别是什么？",
      options: ["println 自动换行", "print 自动换行", "二者都不能输出", "println 只能输出数字"],
      answer: "println 自动换行",
      explanation: "println 会在输出内容后自动追加换行。"
    },
    {
      question: "1 to 5 会包含数字 5 吗？",
      options: ["包含", "不包含", "只包含 5", "只包含 0"],
      answer: "包含",
      explanation: "to 表示包含右端点，所以 1 to 5 包含 5。"
    },
    {
      question: "1 until 5 会包含数字 5 吗？",
      options: ["包含", "不包含", "只包含 5", "不包含 1"],
      answer: "不包含",
      explanation: "until 表示不包含右端点，所以 1 until 5 不包含 5。"
    },
    {
      question: "Scala for 循环中的 <- 可以理解为什么？",
      options: ["从右侧范围取值给左侧变量", "删除变量", "定义类", "输出换行"],
      answer: "从右侧范围取值给左侧变量",
      explanation: "例如 i <- 1 to 5 表示 i 依次从 1 到 5 中取值。"
    },
    {
      question: "Unit 在 Scala 中大致类似 Java 的什么？",
      options: ["void", "int", "String", "class"],
      answer: "void",
      explanation: "Unit 可以理解为没有有意义的返回值，类似 Java 中的 void。"
    }
  ],
  dragMatch: [
    {
      left: "if 表达式",
      right: "可以产生一个值"
    },
    {
      left: "block",
      right: "用大括号包起来的语句块"
    },
    {
      left: "Unit",
      right: "类似 Java 中的 void"
    },
    {
      left: "print",
      right: "输出但不自动换行"
    },
    {
      left: "println",
      right: "输出并自动换行"
    },
    {
      left: "to",
      right: "包含右端点的区间"
    },
    {
      left: "until",
      right: "不包含右端点的区间"
    },
    {
      left: "for",
      right: "循环遍历范围"
    },
    {
      left: "while",
      right: "条件成立时重复执行"
    },
    {
      left: "<-",
      right: "从右侧范围取值给循环变量"
    },
    {
      left: "AI 辅助编程",
      right: "帮助生成、调试和完善代码"
    }
  ],
  flow: {
    title: "Block 语句块执行流程",
    description: "展示 Scala 中 block 语句块从开始到返回值的执行过程。",
    steps: [
      "看到一个大括号 block",
      "从上到下依次执行每一条语句",
      "前面的语句通常是计算过程",
      "执行到最后一行表达式",
      "最后一行的结果成为整个 block 的值",
      "这个值可以赋给变量"
    ]
  },
  exercises: [
    {
      question: "请用 Scala 写一个 if 表达式：如果 x > 0，结果为 1，否则结果为 -1。",
      answer: "val result = if (x > 0) 1 else -1"
    },
    {
      question: "请写一个 block，先定义 a = 10，再定义 b = 20，最后返回 a + b。",
      answer: `val sum = {
  val a = 10
  val b = 20
  a + b
}`
    },
    {
      question: "请写一个 for 循环，输出 1 到 5，包含 5。",
      answer: `for (i <- 1 to 5) {
  println(i)
}`
    },
    {
      question: "请写一个 for 循环，输出 1 到 4，不包含 5。",
      answer: `for (i <- 1 until 5) {
  println(i)
}`
    },
    {
      question: "请写一个 while 循环，输出 1 到 5。",
      answer: `var i = 1

while (i <= 5) {
  println(i)
  i = i + 1
}`
    },
    {
      question: "请写一个函数 signum，接收一个 Int 参数，返回 Int。如果参数大于 0 返回 1，否则返回 -1。",
      answer: `def signum(x: Int): Int = {
  if (x > 0) 1 else -1
}`
    }
  ],
  conclusion: [
    "本节课重点是理解 Scala 中表达式有值的思想。",
    "if...else 在 Scala 中可以直接作为表达式赋值。",
    "block 语句块的最后一行通常就是整个 block 的值。",
    "print 不换行，println 会自动换行。",
    "for 循环中 1 to 5 包含 5，1 until 5 不包含 5。",
    "while 循环与 Java 中类似，要注意条件更新，避免死循环。",
    "函数返回类型建议写清楚，方便别人阅读代码。",
    "学习编程要多翻书、多敲代码、多复习目录。",
    "AI 可以辅助编程，但不能替代自己理解代码。"
  ]
},
  {
  id: "scala-2026-03-05-foundation-preview",
  title: "编程相关知识讲解",
  chapter: "第二章 Scala 基础回顾与表达式预习",
  date: "2026-03-05",
  tags: [
    "课堂纪律",
    "Scala对象",
    "万物皆对象",
    "class",
    "object",
    "def函数",
    "参数列表",
    "Array[String]",
    "Unit",
    "var",
    "val",
    "自动类型转换",
    "元组",
    "tuple",
    "元组取值",
    "Python列表",
    "NumPy",
    "Java数据库",
    "Spark",
    "if表达式",
    "block",
    "for循环",
    "学习要求"
  ],
  summary: [
    "本节课主要回顾 Scala 第一章的基础内容，并预告第二章即将重点学习的表达式、block 和 for 循环。",
    "老师强调 Scala 中万物皆对象，对象具有属性和方法，可以像操作类一样操作对象。",
    "课堂回顾了 Scala 中 def 定义函数、函数返回值、参数列表、var 和 val 等基础内容。",
    "本节课重点讲解了元组 tuple，说明元组可以保存不同类型的值，并通过 ._1、._2 等方式取值。",
    "老师还对比了 Python、Java 和 Scala 的应用场景，提醒同学理解不同语言适合解决的问题。",
    "最后老师要求同学课后练习 if 表达式转换，并提前准备后续 for 循环的学习。"
  ],
  keyPoints: [
    {
      title: "课堂纪律与学习要求",
      content: "老师提醒同学本节课属于重要专业课，需要保持安静认真听讲。Scala 内容比较抽象，不能只靠听，需要课后自己敲代码。",
      javaCompare: ""
    },
    {
      title: "Scala 中万物皆对象",
      content: "Scala 强调一切皆对象，对象具有属性和方法，可以通过点运算符调用对象内部的内容。",
      javaCompare: "Java 中对象来自类；Scala 中对象思想更统一，很多基础值也可以像对象一样操作。"
    },
    {
      title: "Scala 对象与 Java 对象区别",
      content: "Java 中常见类、对象、构造方法、继承、接口等概念；Scala 中没有传统 Java 接口，会使用其他机制替代和增强功能。",
      javaCompare: "Java 有接口 interface；Scala 中更常用 trait 等机制。"
    },
    {
      title: "object 与 main 方法",
      content: "Scala 中程序入口 main 方法通常放在 object 中。object 可以管理函数，也可以用于创建单例对象。",
      javaCompare: "Java 中 main 方法通常放在 class 中；Scala 中常放在 object 中。"
    },
    {
      title: "def 定义函数",
      content: "Scala 使用 def 关键字定义函数。函数包括函数名、参数列表、返回值类型和函数体。",
      javaCompare: "Java 中方法需要写返回类型、方法名和参数；Scala 使用 def，并且返回类型写在参数列表后面。"
    },
    {
      title: "函数返回值与函数类型",
      content: "Scala 函数有等号时，函数体最后一行通常作为返回值；没有等号时，返回值通常可以理解为 Unit。",
      javaCompare: "Java 中 void 表示没有返回值；Scala 中 Unit 类似 void。"
    },
    {
      title: "参数列表",
      content: "函数的参数可以看成参数列表，例如 args: Array[String] 表示参数 args 是字符串数组。",
      javaCompare: "Java 中数组参数通常写成 String[] args；Scala 写成 args: Array[String]。"
    },
    {
      title: "Python 列表与数组",
      content: "老师提到 Python 中更多使用列表，科学计算中需要数组或矩阵能力时，通常要使用 NumPy 等库。",
      javaCompare: "Java 中有数组概念；Python 基础语法中常用列表，科学计算时常借助 NumPy。"
    },
    {
      title: "Java 的应用场景",
      content: "Java 更重要的作用是连接前台和后台数据库，常用于企业级开发、管理系统和应用程序开发。",
      javaCompare: "Scala 更偏向大数据和内存计算，Java 更偏企业级应用和数据库连接。"
    },
    {
      title: "Scala 的应用场景",
      content: "Scala 常与 Spark、大数据计算、内存计算和集合处理相关，适合学习大数据方向的计算思想。",
      javaCompare: "Java 常与 Hadoop、大数据存储相关；Scala 常与 Spark、内存计算相关。"
    },
    {
      title: "var 与 val",
      content: "Scala 中 var 定义变量，val 定义常量。变量或常量的类型可以由等号右边的值决定。",
      javaCompare: "Java 中变量通常先写类型；Scala 可以通过值自动推导类型。"
    },
    {
      title: "自动类型转换",
      content: "当整数与小数进行运算时，Scala 可以自动进行类型转换，例如 42 * 0.5 得到 21.0。",
      javaCompare: "Java 也有类型转换，但 Scala 表达式写法更简洁。"
    },
    {
      title: "元组 tuple",
      content: "元组是不同类型值的聚集，可以把整数、小数、字符串等放在同一个圆括号中。",
      javaCompare: "Java 中通常需要类或对象封装多种数据；Scala 可以使用元组临时组合多个值。"
    },
    {
      title: "元组取值",
      content: "Scala 元组从 1 开始计数，可以通过 t._1、t._2、t._3 等方式取出内部值。",
      javaCompare: "Java 数组通常从 0 开始；Scala 元组取值从 1 开始。"
    },
    {
      title: "第二章重点预告",
      content: "第二章会重点学习 if 表达式、block、for 循环、Unit、避免 return、函数定义中的等号等内容。",
      javaCompare: "Java 中 if 和 for 更偏语句结构；Scala 中 if、block 和 for 更强调表达式和返回值。"
    }
  ],
  codeExamples: [
    {
      title: "Scala 程序入口",
      code: `object Hello {
  def main(args: Array[String]): Unit = {
    println("Hello Scala")
  }
}`,
      explanation: "main 方法放在 object 中，args: Array[String] 是参数列表，Unit 类似 Java 中的 void。"
    },
    {
      title: "def 定义函数",
      code: `def getSum(a: Int, b: Int): Int = {
  a + b
}`,
      explanation: "def 定义函数，参数类型写在参数名后面，返回值类型写在参数列表后面。"
    },
    {
      title: "var 和 val",
      code: `var answer = 42
val result = answer * 0.5`,
      explanation: "answer 是变量，result 是常量。整数乘小数时会自动转换为小数结果。"
    },
    {
      title: "元组定义",
      code: `val t = (1, 3.14, "Fred")`,
      explanation: "元组中可以同时保存整数、小数和字符串。"
    },
    {
      title: "元组取值",
      code: `val t = (1, 3.14, "Fred")

println(t._1)
println(t._2)
println(t._3)`,
      explanation: "Scala 元组从 1 开始计数，t._1 取第一个值，t._2 取第二个值。"
    },
    {
      title: "if 表达式预习",
      code: `val result = if (score >= 60) "及格" else "不及格"`,
      explanation: "Scala 中 if 表达式可以产生值，并直接赋给变量。"
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
      question: "Scala 中程序入口 main 方法通常放在哪里？",
      options: ["object 中", "图片中", "数据库中", "压缩包中"],
      answer: "object 中",
      explanation: "Scala 中 main 方法通常写在 object 中。"
    },
    {
      question: "Scala 中元组的第一个元素通过什么方式获取？",
      options: ["t[0]", "t._0", "t._1", "t.first()"],
      answer: "t._1",
      explanation: "Scala 元组从 1 开始计数，第一个元素是 t._1。"
    },
    {
      question: "下面哪个说法正确？",
      options: [
        "Scala 元组只能保存同一种类型",
        "Scala 元组可以保存不同类型的值",
        "Scala 没有对象",
        "Scala 只能写 Java 代码"
      ],
      answer: "Scala 元组可以保存不同类型的值",
      explanation: "元组是不同类型值的聚集。"
    },
    {
      question: "Unit 在 Scala 中大致类似 Java 的什么？",
      options: ["void", "int", "String", "class"],
      answer: "void",
      explanation: "Unit 可以理解为没有有意义的返回值，类似 Java 中的 void。"
    },
    {
      question: "老师提到第二章中需要重点练习、比较难的内容是什么？",
      options: ["for 循环", "文件命名", "颜色设置", "图片压缩"],
      answer: "for 循环",
      explanation: "老师强调 Scala 的 for 循环比 Java 难，需要动手练。"
    }
  ],
  dragMatch: [
    {
      left: "def",
      right: "定义函数"
    },
    {
      left: "var",
      right: "定义变量"
    },
    {
      left: "val",
      right: "定义常量"
    },
    {
      left: "object",
      right: "对象，可放 main 方法"
    },
    {
      left: "class",
      right: "类"
    },
    {
      left: "Unit",
      right: "类似 Java 中 void"
    },
    {
      left: "Array[String]",
      right: "字符串数组参数"
    },
    {
      left: "tuple",
      right: "元组"
    },
    {
      left: "t._1",
      right: "取元组第一个值"
    },
    {
      left: "Spark",
      right: "Scala 常见大数据应用方向"
    },
    {
      left: "NumPy",
      right: "Python 科学计算常用库"
    },
    {
      left: "if 表达式",
      right: "第二章重点，表达式有值"
    }
  ],
  flow: {
    title: "def 函数定义流程",
    description: "展示 Scala 函数从定义到返回值的完整流程。",
    steps: [
      "看到 def 关键字",
      "识别函数名",
      "查看参数列表",
      "查看返回值类型",
      "执行函数体",
      "把最后一行作为返回值"
    ]
  },
  exercises: [
    {
      question: "请写一个 Scala 程序入口对象 Hello，并输出 Hello Scala。",
      answer: `object Hello {
  def main(args: Array[String]): Unit = {
    println("Hello Scala")
  }
}`
    },
    {
      question: "请写一个函数 getSum，接收两个 Int 参数并返回它们的和。",
      answer: `def getSum(a: Int, b: Int): Int = {
  a + b
}`
    },
    {
      question: "请定义一个元组，包含数字 1、小数 3.14 和字符串 Fred。",
      answer: `val t = (1, 3.14, "Fred")`
    },
    {
      question: "请取出上题元组中的第二个元素。",
      answer: "t._2"
    },
    {
      question: "请写一个 if 表达式：如果 score >= 60，结果为 及格，否则为 不及格。",
      answer: `val result = if (score >= 60) "及格" else "不及格"`
    }
  ],
  conclusion: [
    "本节课主要回顾 Scala 第一章基础内容，并预告第二章重点。",
    "Scala 强调万物皆对象，对象有属性和方法。",
    "Scala 使用 def 定义函数，函数返回值和函数体最后一行密切相关。",
    "Scala 中 var 定义变量，val 定义常量。",
    "Scala 可以根据值进行类型推导，并能进行自动类型转换。",
    "元组可以保存不同类型的值，并通过 ._1、._2 等方式取值。",
    "元组从 1 开始计数，不是从 0 开始。",
    "第二章重点包括 if 表达式、block、for 循环、Unit 和函数等号。",
    "课后要主动用 AI 或工具练习代码转换，但不能只复制结果。"
  ]
},
  {
  id: "scala-2026-03-10-expressions-for-basic",
  title: "Scala编程及职业发展相关讲解",
  chapter: "第二章 Scala 表达式与 for 循环基础",
  date: "2026-03-10",
  tags: [
    "表达式",
    "block",
    "返回值",
    "for循环",
    "while循环",
    "range",
    "to",
    "until",
    "def函数",
    "二维遍历",
    "数据思维",
    "算法工程师",
    "智能体",
    "职业发展"
  ],
  summary: [
    "本节课主要讲解 Scala 中表达式、block、for 循环、while 循环和函数定义等内容。",
    "老师强调表达式有值，可以被变量或常量接收，Scala 中 block 的最后一行通常就是返回值。",
    "课堂通过两点间距离计算对比 Java 和 Scala 的编程思想，说明 Scala 可以用 block 简化计算过程。",
    "本节课重点讲解 Scala 的 for 循环，包括通过左箭头在 range 范围中遍历。",
    "老师结合智能体、数据架构师和算法工程师等职业方向，提醒同学要培养数学能力、算法能力和数据思维。"
  ],
  keyPoints: [
    {
      title: "表达式有值",
      content: "Scala 中表达式有值，可以被 val 或 var 接收。表达式不是单纯执行动作，而是能产生结果。",
      javaCompare: "Java 中很多结构更像语句；Scala 更强调表达式结果。"
    },
    {
      title: "block 的最后一行是返回值",
      content: "Scala 中大括号组成的 block 通常以最后一行作为整个块的返回值。",
      javaCompare: "Java 中通常需要 return 返回值；Scala 可以直接使用最后一行。"
    },
    {
      title: "Java 与 Scala 求距离的区别",
      content: "Java 通常需要定义方法和参数来求距离；Scala 可以把计算步骤写进 block 中直接得到结果。",
      javaCompare: "Java 更强调方法调用；Scala 更强调表达式和模块化计算。"
    },
    {
      title: "for 循环基本形式",
      content: "Scala for 循环可以写成 for (i <- 1 to 5)，表示 i 在 1 到 5 的范围中遍历。",
      javaCompare: "Java for 循环通常需要初始化、条件和自增；Scala 写法更简洁。"
    },
    {
      title: "range 范围",
      content: "range 表示一个范围，例如 1 to 5 或 1 until 5。",
      javaCompare: "Java 通常使用数组下标或循环条件控制范围。"
    },
    {
      title: "to 与 until",
      content: "to 包含右端点，until 不包含右端点。",
      javaCompare: "Java 中类似 <= 和 < 的区别。"
    },
    {
      title: "while 循环",
      content: "Scala while 循环和 Java 类似，条件为 true 时执行循环体。",
      javaCompare: "两者结构相近，都需要注意更新循环变量。"
    },
    {
      title: "def 定义函数",
      content: "Scala 使用 def 定义函数，参数类型和返回值类型通常写在名字后面。",
      javaCompare: "Java 返回类型一般写在方法名前面；Scala 返回类型写在参数列表后面。"
    },
    {
      title: "二维遍历",
      content: "Scala 中可以在一个 for 中写多个生成器，实现类似 Java 双重循环的效果。",
      javaCompare: "Java 常用嵌套 for 循环遍历二维数组。"
    },
    {
      title: "数据架构与算法能力",
      content: "老师强调未来高层次岗位更看重数据架构、算法能力、数学基础和大数据思维。",
      javaCompare: ""
    },
    {
      title: "AI 与智能体方向",
      content: "课堂提到交互式编程和智能体相关岗位，提醒同学关注 AI 垂直应用和职业发展趋势。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "if 表达式赋值",
      code: `val result = if (x > 0) 1 else -1`,
      explanation: "if...else 整体有值，可以赋给变量。"
    },
    {
      title: "block 计算距离",
      code: `val distance = {
  val dx = x - x0
  val dy = y - y0
  math.sqrt(dx * dx + dy * dy)
}`,
      explanation: "最后一行 math.sqrt(...) 是整个 block 的返回值。"
    },
    {
      title: "for 循环遍历范围",
      code: `for (i <- 1 to 5) {
  println(i)
}`,
      explanation: "输出 1 到 5。"
    },
    {
      title: "while 循环",
      code: `var i = 1

while (i <= 5) {
  println(i)
  i = i + 1
}`,
      explanation: "当 i <= 5 成立时重复执行循环体。"
    },
    {
      title: "函数定义",
      code: `def signum(a: Int): Int = {
  if (a > 0) 1 else if (a == 0) 0 else -1
}`,
      explanation: "根据参数正负返回 1、0 或 -1。"
    },
    {
      title: "二维遍历",
      code: `for (i <- 1 to 3; j <- 1 to 3) {
  println(i + "," + j)
}`,
      explanation: "相当于 Java 中的双重循环。"
    }
  ],
  quiz: [
    {
      question: "Scala 中表达式的最大特点是什么？",
      options: ["没有值", "有值，可以赋值", "只能写注释", "只能输出字符串"],
      answer: "有值，可以赋值",
      explanation: "Scala 中表达式有值，可以被变量或常量接收。"
    },
    {
      question: "Scala 中 block 的返回值通常是哪一行？",
      options: ["第一行", "最后一行", "注释行", "空行"],
      answer: "最后一行",
      explanation: "Scala 中 block 的最后一行通常作为整个 block 的值。"
    },
    {
      question: "Scala 中 for 循环的 <- 可以理解为什么？",
      options: ["从右边范围取值给左边变量", "删除变量", "创建数据库", "字符串拼接"],
      answer: "从右边范围取值给左边变量",
      explanation: "例如 i <- 1 to 5 表示 i 依次从范围中取值。"
    },
    {
      question: "1 to 5 是否包含 5？",
      options: ["包含", "不包含", "只包含 0", "只包含 6"],
      answer: "包含",
      explanation: "to 表示闭区间，包含右端点。"
    },
    {
      question: "Scala 中定义函数使用哪个关键字？",
      options: ["var", "val", "def", "object"],
      answer: "def",
      explanation: "Scala 使用 def 定义函数。"
    }
  ],
  dragMatch: [
    { left: "expression", right: "表达式，有值" },
    { left: "block", right: "语句块，最后一行通常是返回值" },
    { left: "def", right: "定义函数" },
    { left: "<-", right: "从范围中取值" },
    { left: "range", right: "区间范围" },
    { left: "to", right: "包含右端点" },
    { left: "until", right: "不包含右端点" },
    { left: "while", right: "条件成立时循环" },
    { left: "数据架构师", right: "关注数据结构和系统架构" },
    { left: "算法工程师", right: "关注数学、模型和算法" }
  ],
  flow: {
    title: "表达式计算流程",
    description: "展示 Scala 表达式计算得到结果的过程。",
    steps: [
      "写出一个表达式",
      "表达式进行计算",
      "得到一个值",
      "用 val 或 var 接收这个值",
      "后续可以继续使用这个变量"
    ]
  },
  exercises: [
    {
      question: "写一个 if 表达式，如果 x > 0 返回 1，否则返回 -1。",
      answer: "val result = if (x > 0) 1 else -1"
    },
    {
      question: "写一个 block，计算两个变量 a 和 b 的和。",
      answer: `val sum = {
  val a = 10
  val b = 20
  a + b
}`
    },
    {
      question: "写一个 for 循环，输出 1 到 5。",
      answer: `for (i <- 1 to 5) {
  println(i)
}`
    },
    {
      question: "写一个 while 循环，输出 1 到 5。",
      answer: `var i = 1

while (i <= 5) {
  println(i)
  i = i + 1
}`
    },
    {
      question: "写一个 signum 函数，接收整数，正数返回 1，0 返回 0，负数返回 -1。",
      answer: `def signum(a: Int): Int = {
  if (a > 0) 1 else if (a == 0) 0 else -1
}`
    }
  ],
  conclusion: [
    "Scala 中表达式有值，可以被变量或常量接收。",
    "block 的最后一行通常是整个 block 的返回值。",
    "Scala 可以用 block 简化 Java 中复杂的方法调用过程。",
    "for 循环通过 <- 在 range 中遍历。",
    "to 包含右端点，until 不包含右端点。",
    "函数定义使用 def，参数和返回类型通常写在名字后面。",
    "未来岗位更看重算法、数学、数据思维和 AI 应用能力。"
  ]
},
  {
  id: "scala-2026-03-10-generators-guards",
  title: "Scala编程及相关知识讲解",
  chapter: "第二章 Scala for 循环、生成器与守卫",
  date: "2026-03-10",
  tags: [
    "生成器",
    "守卫",
    "for循环",
    "布尔表达式",
    "if",
    "二维遍历",
    "行列变换",
    "三角形输出",
    "yield",
    "集合生成",
    "reverse",
    "步长",
    "by",
    "样本",
    "模型误差",
    "垂直应用"
  ],
  summary: [
    "本节课主要讲解 Scala for 循环中的生成器与守卫，以及它们在数据筛选中的作用。",
    "老师强调守卫是以 if 开头的布尔表达式，可以像筛子一样过滤数据。",
    "课堂通过 3 行 3 列数据讲解二维遍历、行列变换和三角形输出。",
    "本节课说明了 Scala 可以用更少代码完成 Java 中较复杂的嵌套循环和数组处理。",
    "老师还讲解了 for 表达式生成集合、reverse 反置、步长控制等 Scala 常用方法。",
    "课堂结合线性代数、样本空间、模型预测和误差拟合说明数学概念与大数据建模的关系。"
  ],
  keyPoints: [
    {
      title: "生成器 generator",
      content: "生成器负责从范围或集合中依次产生变量，例如 i <- 1 to 3。",
      javaCompare: "Java 中通常通过 for 循环下标控制；Scala 用生成器表达遍历来源。"
    },
    {
      title: "守卫 guard",
      content: "守卫是跟在生成器后面的条件，通常以 if 开头，用于筛选满足条件的数据。",
      javaCompare: "Java 中 if 常写在循环体内部；Scala 可以把 if 放在生成器后面。"
    },
    {
      title: "布尔表达式",
      content: "守卫本质上是布尔表达式，结果为 true 或 false。只有结果为 true 时，数据才会被保留。",
      javaCompare: "Java 和 Scala 都有布尔表达式，但 Scala 可以把它直接放进 for 生成器结构中。"
    },
    {
      title: "守卫像筛子",
      content: "守卫可以理解为筛子，满足条件的数据留下，不满足条件的数据过滤掉。",
      javaCompare: ""
    },
    {
      title: "二维遍历",
      content: "Scala 可以使用多个生成器遍历二维数据，例如 i <- 1 to 3; j <- 1 to 3。",
      javaCompare: "Java 通常使用双重 for 循环。"
    },
    {
      title: "行列变换",
      content: "通过交换 i 和 j 的位置，可以表达类似矩阵转置的操作。",
      javaCompare: "Java 中通常需要数组下标交换；Scala 可以通过表达式更直接地描述。"
    },
    {
      title: "三角形输出",
      content: "通过控制 j 的起点和终点，可以输出上三角或下三角结构。",
      javaCompare: "Java 中通常需要在嵌套循环中写更多判断条件。"
    },
    {
      title: "循环中引入变量",
      content: "Scala for 循环中可以引入中间变量，例如 from = 4 - i，再用它控制后续范围。",
      javaCompare: "Java 中通常需要在循环体内单独声明并更新变量。"
    },
    {
      title: "for 表达式生成集合",
      content: "Scala for 表达式结合守卫和 yield，可以筛选数据并生成新集合。",
      javaCompare: "Java 中通常需要先创建集合，再循环筛选并添加元素。"
    },
    {
      title: "reverse",
      content: "reverse 可以反转集合或范围的顺序。",
      javaCompare: "Java 中可能需要额外循环或工具方法实现反转。"
    },
    {
      title: "步长 by",
      content: "by 可以设置遍历步长，例如 1 to 10 by 2。",
      javaCompare: "Java 中通常通过 i += 2 控制步长。"
    },
    {
      title: "模型误差",
      content: "预测值与真实值之间的差可以理解为误差，误差越小，模型越好。",
      javaCompare: ""
    },
    {
      title: "垂直应用",
      content: "垂直应用指面向特定领域或特定数据场景设计的应用，不一定适合所有场景。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "生成器",
      code: `for (i <- 1 to 3) {
  println(i)
}`,
      explanation: "i <- 1 to 3 是生成器。"
    },
    {
      title: "守卫",
      code: `for (i <- 1 to 3; j <- 1 to 3 if i != j) {
  println(i + "," + j)
}`,
      explanation: "if i != j 会过滤掉 i 和 j 相等的情况。"
    },
    {
      title: "二维遍历",
      code: `for (i <- 1 to 3; j <- 1 to 3) {
  println("A" + i + j)
}`,
      explanation: "遍历 3 行 3 列。"
    },
    {
      title: "行列交换",
      code: `for (i <- 1 to 3; j <- 1 to 3) {
  println("A" + j + i)
}`,
      explanation: "把 Aij 变成 Aji 的思路。"
    },
    {
      title: "动态范围",
      code: `for (i <- 1 to 3; from = 4 - i; j <- from to 3) {
  println("A" + i + j)
}`,
      explanation: "from 根据 i 的变化而变化，可以控制输出形状。"
    },
    {
      title: "生成集合",
      code: `val result = for (i <- 1 to 10 if i % 2 == 0) yield i`,
      explanation: "筛选 1 到 10 中的偶数，并生成集合。"
    },
    {
      title: "reverse",
      code: `val nums = 1 to 10
val reversed = nums.reverse`,
      explanation: "把 1 到 10 反转为 10 到 1。"
    },
    {
      title: "步长",
      code: `for (i <- 1 to 10 by 2) {
  println(i)
}`,
      explanation: "每次增加 2，输出奇数序列。"
    }
  ],
  quiz: [
    {
      question: "Scala for 循环中的生成器作用是什么？",
      options: ["产生遍历变量", "删除代码", "创建数据库", "压缩文件"],
      answer: "产生遍历变量",
      explanation: "生成器用于从范围或集合中依次取值。"
    },
    {
      question: "守卫通常以哪个关键字开头？",
      options: ["class", "object", "if", "val"],
      answer: "if",
      explanation: "守卫通常是以 if 开头的布尔表达式。"
    },
    {
      question: "下面哪个表达式会过滤掉 i 和 j 相等的情况？",
      options: ["if i != j", "val i = j", "class i j", "object i"],
      answer: "if i != j",
      explanation: "i != j 表示 i 不等于 j。"
    },
    {
      question: "Scala 中 reverse 的作用是什么？",
      options: ["反转顺序", "删除变量", "创建对象", "输出换行"],
      answer: "反转顺序",
      explanation: "reverse 用来把集合或序列的顺序反过来。"
    },
    {
      question: "1 to 10 by 2 表示什么？",
      options: ["每次增加 2", "每次减少 10", "只输出 2", "删除 1 和 10"],
      answer: "每次增加 2",
      explanation: "by 2 表示步长为 2。"
    }
  ],
  dragMatch: [
    { left: "generator", right: "生成器，产生遍历变量" },
    { left: "guard", right: "守卫，用于筛选数据" },
    { left: "if", right: "守卫常用关键字" },
    { left: "Boolean 表达式", right: "返回 true 或 false" },
    { left: "i != j", right: "i 和 j 不相等" },
    { left: "yield", right: "收集结果生成集合" },
    { left: "reverse", right: "反转顺序" },
    { left: "by", right: "设置步长" },
    { left: "A(i,j)", right: "二维数据中的行列位置" },
    { left: "垂直应用", right: "面向特定领域的应用" }
  ],
  flow: {
    title: "生成器与守卫执行流程",
    description: "展示生成器产生数据、守卫判断并执行的流程。",
    steps: [
      "生成器产生一个数据",
      "进入守卫条件判断",
      "判断结果为 true",
      "保留该数据并执行循环体",
      "判断结果为 false",
      "过滤掉该数据"
    ]
  },
  exercises: [
    {
      question: "写一个 for 循环，输出 1 到 3。",
      answer: `for (i <- 1 to 3) {
  println(i)
}`
    },
    {
      question: "写一个双重 for 循环，遍历 1 到 3 的 i 和 j，并过滤掉 i == j 的情况。",
      answer: `for (i <- 1 to 3; j <- 1 to 3 if i != j) {
  println(i + "," + j)
}`
    },
    {
      question: "写一个 for 表达式，筛选 1 到 10 中的偶数并生成集合。",
      answer: "val result = for (i <- 1 to 10 if i % 2 == 0) yield i"
    },
    {
      question: "写代码将 1 到 10 反转。",
      answer: `val nums = 1 to 10
val reversed = nums.reverse`
    },
    {
      question: "写一个 for 循环，输出 1 到 10 中步长为 2 的数。",
      answer: `for (i <- 1 to 10 by 2) {
  println(i)
}`
    }
  ],
  conclusion: [
    "生成器负责从范围或集合中产生变量。",
    "守卫是以 if 开头的布尔表达式，用于筛选数据。",
    "守卫可以理解为筛子，满足条件的数据留下，不满足条件的数据过滤掉。",
    "Scala 可以把 Java 中循环体内部的 if 提前放到生成器旁边。",
    "Scala 的 for 循环可以用更少代码完成二维遍历和数据筛选。",
    "yield 可以把 for 表达式的结果收集成集合。",
    "reverse 可以反转数据顺序。",
    "by 可以设置步长。",
    "数学中的样本、模型和误差概念可以映射到大数据建模中。"
  ]
},
  {
  id: "scala-2026-03-12-project-practice",
  title: "Scala编程课：项目创建与基础语法练习",
  chapter: "第三章 Scala 项目创建与基础练习",
  date: "2026-03-12",
  tags: [
    "Scala项目",
    "项目创建",
    "src",
    "Scala class",
    "变量",
    "常量",
    "var",
    "val",
    "分号省略",
    "main函数",
    "def",
    "args",
    "Array[String]",
    "Unit",
    "object",
    "new对象",
    "类型推导",
    "public",
    "偶数项",
    "奇数项求和",
    "循环练习"
  ],
  summary: [
    "本节课主要围绕 Scala 项目创建、基础语法、入口函数、对象声明、类的可见性和课堂练习展开。",
    "老师重新演示了如何创建 Scala 项目，并说明项目结构与 Java 类似，包含 src 资源目录和 Scala 连接库。",
    "课堂回顾了 var 定义变量、val 定义常量，以及 Scala 中可以省略分号的特点。",
    "老师重点强调 Scala 程序运行必须有入口函数 def main(args: Array[String]): Unit。",
    "本节课通过 new Test 创建对象，说明 Scala 中变量类型可以由赋值决定。",
    "最后布置了输出偶数项、奇数项求和、奇偶项对应相乘后求和等课堂练习。"
  ],
  keyPoints: [
    {
      title: "创建 Scala 项目",
      content: "Scala 项目的创建流程与 Java 类似，可以通过 File → New → Scala Project 创建项目。",
      javaCompare: "Java 创建 Java Project，Scala 创建 Scala Project，整体项目思想相似。"
    },
    {
      title: "src 源代码目录",
      content: "src 是项目中的源代码目录，可以在其中创建 Scala class、object 等文件。",
      javaCompare: "Java 项目中也常用 src 存放源代码。"
    },
    {
      title: "Scala class",
      content: "在 src 中可以创建 Scala class，生成的文件后缀是 .scala。",
      javaCompare: "Java 类文件后缀是 .java；Scala 类文件后缀是 .scala。"
    },
    {
      title: "var 定义变量",
      content: "var 用于定义变量，变量值可以改变，例如 var i = 10。",
      javaCompare: "Java 通常需要先写类型，例如 int i = 10；Scala 可以自动推导类型。"
    },
    {
      title: "val 定义常量",
      content: "val 用于定义不可变值，例如 val k = i + j。",
      javaCompare: "Java 中常用 final 定义常量；Scala 常用 val。"
    },
    {
      title: "省略分号",
      content: "Scala 一行一个完整语句时通常可以省略分号，体现了减少手动操作的思想。",
      javaCompare: "Java 语句末尾通常需要分号。"
    },
    {
      title: "main 入口函数",
      content: "Scala 程序运行需要入口函数 def main(args: Array[String]): Unit。",
      javaCompare: "Java 入口函数是 public static void main(String[] args)。"
    },
    {
      title: "args: Array[String]",
      content: "args 是参数名，Array[String] 表示字符串数组。",
      javaCompare: "Java 写成 String[] args；Scala 写成 args: Array[String]。"
    },
    {
      title: "object 与 main",
      content: "Scala 中 main 方法通常写在 object 中，程序运行时从 main 开始执行。",
      javaCompare: "Java 中 main 方法通常写在 class 中。"
    },
    {
      title: "new 创建对象",
      content: "new Test 可以创建 Test 类对象，变量 c 接收后就可以通过 c.k 访问属性。",
      javaCompare: "Java 和 Scala 都可以通过 new 创建对象。"
    },
    {
      title: "类型由赋值决定",
      content: "Scala 中变量类型可以由右边赋值决定，例如 var c = new Test 中 c 的类型是 Test。",
      javaCompare: "Java 通常需要显式写出类型，如 Test c = new Test();"
    },
    {
      title: "Scala 类默认 public",
      content: "老师提到 Scala 中类默认具有 public 可见性，便于被调用。",
      javaCompare: "Java 中如果不写修饰符，通常是默认访问权限；Scala 默认更偏公开可见。"
    },
    {
      title: "没有 main 会找不到入口",
      content: "只写 class 但没有 main 方法时，项目可能无法运行，因为找不到程序入口。",
      javaCompare: "Java 程序也需要 main 方法作为入口。"
    },
    {
      title: "输出偶数项",
      content: "可以通过 for 循环和 if 守卫筛选 1 到 10 中的偶数。",
      javaCompare: "Java 中通常需要写循环和 if 判断；Scala 可以写得更简洁。"
    },
    {
      title: "奇数项求和",
      content: "可以遍历 1 到 10，筛选奇数并累加。",
      javaCompare: ""
    },
    {
      title: "奇偶项对应相乘后求和",
      content: "可以通过步长 by 2 取奇数项，并和后一项相乘后累加。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "定义变量和常量",
      code: `var i = 10
var j = 11
val k = i + j`,
      explanation: "i 和 j 是变量，k 是常量，k 的值是 21。"
    },
    {
      title: "Scala 入口函数",
      code: `object Main {
  def main(args: Array[String]): Unit = {
    println("Hello Scala")
  }
}`,
      explanation: "程序从 main 方法开始运行。"
    },
    {
      title: "创建类和对象",
      code: `class Test {
  var i = 10
  var j = 11
  val k = i + j
}

object Main {
  def main(args: Array[String]): Unit = {
    var c = new Test
    println(c.k)
  }
}`,
      explanation: "通过 new Test 创建对象 c，然后用 c.k 访问对象中的属性。"
    },
    {
      title: "输出偶数项",
      code: `val nums = 1 to 10

for (i <- nums if i % 2 == 0) {
  println(i)
}`,
      explanation: "筛选并输出 1 到 10 中的偶数。"
    },
    {
      title: "奇数项求和",
      code: `val nums = 1 to 10
var sum = 0

for (i <- nums if i % 2 != 0) {
  sum = sum + i
}

println(sum)`,
      explanation: "把 1、3、5、7、9 相加，结果是 25。"
    },
    {
      title: "奇偶项对应相乘后求和",
      code: `val nums = 1 to 10
var sum = 0

for (i <- 1 to 9 by 2) {
  sum = sum + i * (i + 1)
}

println(sum)`,
      explanation: "计算 1×2 + 3×4 + 5×6 + 7×8 + 9×10，结果是 190。"
    }
  ],
  quiz: [
    {
      question: "Scala 中定义变量使用哪个关键字？",
      options: ["var", "val", "final", "public"],
      answer: "var",
      explanation: "var 用来定义变量，变量值可以改变。"
    },
    {
      question: "Scala 中定义常量使用哪个关键字？",
      options: ["class", "val", "main", "new"],
      answer: "val",
      explanation: "val 用来定义常量或不可变值。"
    },
    {
      question: "Scala 的入口函数通常写成什么？",
      options: [
        "public static void main(String[] args)",
        "def main(args: Array[String]): Unit",
        "main void args",
        "class main args"
      ],
      answer: "def main(args: Array[String]): Unit",
      explanation: "Scala 的入口函数使用 def main(args: Array[String]): Unit。"
    },
    {
      question: "var c = new Test 中，c 的类型由什么决定？",
      options: ["左边的 var", "文件名", "右边的 new Test", "注释内容"],
      answer: "右边的 new Test",
      explanation: "Scala 中变量类型可以由右边的赋值决定，new Test 决定了 c 是 Test 类型。"
    },
    {
      question: "如果 Scala 项目没有 main 方法，可能会出现什么问题？",
      options: ["找不到程序入口", "自动运行成功", "自动创建数据库", "自动输出偶数"],
      answer: "找不到程序入口",
      explanation: "程序运行需要入口函数，没有 main 方法就可能找不到入口。"
    },
    {
      question: "下面哪个代码可以输出 1 到 10 中的偶数？",
      options: [
        "if i = 2",
        "for (i <- 1 to 10 if i % 2 == 0) println(i)",
        "class even",
        "new public"
      ],
      answer: "for (i <- 1 to 10 if i % 2 == 0) println(i)",
      explanation: "i % 2 == 0 可以判断偶数。"
    }
  ],
  dragMatch: [
    { left: "Scala Project", right: "Scala 项目" },
    { left: "src", right: "源代码目录" },
    { left: "Scala class", right: "Scala 类文件" },
    { left: ".scala", right: "Scala 文件后缀" },
    { left: "var", right: "定义变量" },
    { left: "val", right: "定义常量" },
    { left: "def", right: "定义函数" },
    { left: "main", right: "程序入口" },
    { left: "args", right: "参数名" },
    { left: "Array[String]", right: "字符串数组" },
    { left: "Unit", right: "类似 Java 中 void" },
    { left: "new Test", right: "创建 Test 对象" },
    { left: "public", right: "公有可见性" },
    { left: "c.k", right: "通过对象访问属性" }
  ],
  flow: {
    title: "Scala 项目创建流程",
    description: "展示从创建项目到程序运行的完整流程。",
    steps: [
      "创建 Scala Project",
      "在 src 中创建 Scala class 或 object",
      "编写 object Main",
      "添加 def main(args: Array[String]): Unit",
      "在 main 中写运行代码",
      "点击运行",
      "查看控制台输出"
    ]
  },
  exercises: [
    {
      question: "请写一个 Scala 程序入口对象 Main，并输出 Hello Scala。",
      answer: `object Main {
  def main(args: Array[String]): Unit = {
    println("Hello Scala")
  }
}`
    },
    {
      question: "请创建一个类 Test，其中定义变量 i = 10，变量 j = 11，常量 k = i + j。",
      answer: `class Test {
  var i = 10
  var j = 11
  val k = i + j
}`
    },
    {
      question: "请在 main 方法中创建 Test 对象，并输出 k 的值。",
      answer: `object Main {
  def main(args: Array[String]): Unit = {
    var c = new Test
    println(c.k)
  }
}`
    },
    {
      question: "请输出 1 到 10 中的偶数。",
      answer: `for (i <- 1 to 10 if i % 2 == 0) {
  println(i)
}`
    },
    {
      question: "请计算 1 到 10 中所有奇数的和。",
      answer: `var sum = 0

for (i <- 1 to 10 if i % 2 != 0) {
  sum = sum + i
}

println(sum)`
    },
    {
      question: "请计算 1×2 + 3×4 + 5×6 + 7×8 + 9×10 的结果。",
      answer: `var sum = 0

for (i <- 1 to 9 by 2) {
  sum = sum + i * (i + 1)
}

println(sum)`
    }
  ],
  conclusion: [
    "本节课重点练习了 Scala 项目创建和基础语法。",
    "Scala 项目结构与 Java 类似，但文件后缀为 .scala。",
    "Scala 可以在 src 中创建 Scala class。",
    "var 定义变量，val 定义常量。",
    "Scala 一行一个完整语句时可以省略分号。",
    "Scala 程序运行需要入口函数 def main(args: Array[String]): Unit。",
    "args: Array[String] 表示字符串数组参数。",
    "new Test 可以创建 Test 类对象。",
    "Scala 中变量类型可以由右边的赋值决定。",
    "如果项目没有 main 方法，运行时会找不到入口。",
    "类默认 public 可见，便于被调用。",
    "课后应重点练习偶数输出、奇数求和、奇偶项乘积求和。"
  ]
},
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
  flow: {
    title: "递归求和执行流程",
    description: "展示 sum(n) 递归调用逐层返回的流程。",
    steps: [
      "调用 sum(10)",
      "需要计算 10 + sum(9)",
      "继续计算 9 + sum(8)",
      "一直递归到 sum(0)",
      "sum(0) 返回 0",
      "逐层向上返回",
      "最终得到 55"
    ]
  },
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
},
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
  flow: {
    title: "输出带边框字符串流程",
    description: "展示计算字符串长度并输出边框的流程。",
    steps: [
      "定义字符串 s = hello",
      "计算 s.length = 5",
      "边框长度 = 5 + 2",
      "生成 7 个横杠",
      "输出上边框",
      "输出 -hello-",
      "输出下边框"
    ]
  },
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
},
  {
  id: "scala-2026-03-19-arrays-ai-prompts",
  title: "编程数组知识及AI使用技巧讲解",
  chapter: "第五章 Scala 集合与数组",
  date: "2026-03-19",
  tags: [
    "数组",
    "Java数组",
    "Scala数组",
    "Array",
    "定长数组",
    "ArrayBuffer",
    "变长数组",
    "取值器",
    "数组下标",
    "二维数组",
    "矩阵",
    "Array.ofDim",
    "+=",
    "++=",
    "trimEnd",
    "AI提示词",
    "高阶思考",
    "麦肯锡式提示词"
  ],
  summary: [
    "本节课主要讲解 Scala 与 Java 中数组的区别，包括声明方式、取值方式、数组下标和二维数组。",
    "老师强调 Java 数组通常使用类型加方括号声明，而 Scala 常用 new Array[类型](长度) 创建数组。",
    "课堂提醒同学数组下标从 0 开始，而元组从 1 开始取值，二者不能混淆。",
    "本节课还讲解了定长数组和变长数组 ArrayBuffer，介绍 +=、++= 和 trimEnd 等常用操作。",
    "老师结合大数据处理和网页爬取场景说明，数组和字符串截取在实际数据处理中很常见。",
    "最后，老师分享了 AI 高阶使用技巧，建议使用分析、对比、评价、创造类提示词，而不是只问低阶概念。"
  ],
  keyPoints: [
    {
      title: "线上课安排与打卡",
      content: "第四周开始有线上课，需要按群内要求学习和打卡，建议打开笔记本认真学习。",
      javaCompare: ""
    },
    {
      title: "Java 数组声明",
      content: "Java 中常用类型加方括号声明数组，例如 int[] a = new int[3]。",
      javaCompare: "Java 的数组类型由 int[] 这样的前置类型决定。"
    },
    {
      title: "Scala 数组声明",
      content: "Scala 中常用 new Array[Int](3) 创建数组，Array 明确表示这是数组结构。",
      javaCompare: "Scala 更强调变量类型由右边的值决定。"
    },
    {
      title: "数组取值方式",
      content: "Scala 数组使用圆括号取值，例如 a(0)。Java 使用方括号取值，例如 a[0]。",
      javaCompare: "这是 Scala 和 Java 数组语法最直观的区别之一。"
    },
    {
      title: "数组下标从 0 开始",
      content: "数组第一个元素下标是 0，第二个元素下标是 1。",
      javaCompare: "Java 和 Scala 数组都从 0 开始。"
    },
    {
      title: "元组和数组下标不同",
      content: "Scala 元组从 _1 开始取值，而数组从 0 开始取值。",
      javaCompare: "Java 没有 Scala 这种元组取值方式，数组依然从 0 开始。"
    },
    {
      title: "二维数组与矩阵",
      content: "二维数组可以理解为行列结构，适合表示矩阵或表格数据。",
      javaCompare: "Java 和 Scala 都可以表示二维数组，但写法不同。"
    },
    {
      title: "维度方向",
      content: "在样本相乘和矩阵计算中，行列方向非常关键，维度不一致会影响计算。",
      javaCompare: ""
    },
    {
      title: "定长数组",
      content: "定长数组创建后长度固定，例如 new Array[Double](3)。",
      javaCompare: "Java 数组也是定长结构。"
    },
    {
      title: "ArrayBuffer 变长数组",
      content: "ArrayBuffer 可以动态追加元素，适合元素数量不确定的情况。",
      javaCompare: "Java 中需要使用 ArrayList 等结构实现类似效果。"
    },
    {
      title: "+= 追加元素",
      content: "+= 可以向 ArrayBuffer 追加一个元素。",
      javaCompare: "Java 中通常使用 add 方法追加元素。"
    },
    {
      title: "++= 追加多个元素",
      content: "++= 可以向 ArrayBuffer 一次追加多个元素或另一个集合。",
      javaCompare: ""
    },
    {
      title: "trimEnd 删除末尾元素",
      content: "trimEnd 可以从 ArrayBuffer 末尾删除指定数量的元素。",
      javaCompare: ""
    },
    {
      title: "AI 高阶提示词",
      content: "使用 AI 时要尽量让它分析、比较、评价、生成框架，而不是只问简单概念。",
      javaCompare: ""
    },
    {
      title: "麦肯锡式提示词",
      content: "可以让 AI 以顾问框架拆解问题，从问题背景、关键假设、分析路径和建议等角度输出。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "Java 定义数组",
      code: `int[] a = new int[3];
a[0] = 10;
System.out.println(a[0]);`,
      explanation: "Java 使用方括号声明和访问数组。"
    },
    {
      title: "Scala 定义定长数组",
      code: `val a = new Array[Int](3)
a(0) = 10
println(a(0))`,
      explanation: "Scala 用 new Array[Int](3) 创建长度为 3 的整数数组。"
    },
    {
      title: "Double 类型数组",
      code: `val nums = new Array[Double](3)
nums(0) = 1.5
nums(1) = 2.5
nums(2) = 3.5`,
      explanation: "这是一个长度为 3 的 Double 类型数组。"
    },
    {
      title: "二维数组",
      code: `val matrix = Array.ofDim[Int](3, 3)
matrix(0)(0) = 1
matrix(0)(1) = 2
matrix(1)(0) = 3`,
      explanation: "Array.ofDim[Int](3, 3) 可以创建 3 行 3 列的二维数组。"
    },
    {
      title: "ArrayBuffer 追加元素",
      code: `import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer[Int]()
buffer += 1
buffer += 2
buffer += 3`,
      explanation: "ArrayBuffer 可以动态追加元素。"
    },
    {
      title: "追加多个元素并删除末尾",
      code: `import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer(1, 2, 3)
buffer ++= Array(4, 5, 6)
buffer.trimEnd(2)`,
      explanation: "先追加 4、5、6，再删除末尾两个元素。"
    }
  ],
  quiz: [
    {
      question: "Scala 中创建长度为 3 的 Int 数组，正确写法是？",
      options: ["int[] a = new int[3]", "val a = new Array[Int](3)", "array int a 3", "new int a"],
      answer: "val a = new Array[Int](3)",
      explanation: "Scala 中常用 new Array[Int](3) 创建定长数组。"
    },
    {
      question: "Scala 数组取第一个元素应写成什么？",
      options: ["a[1]", "a(1)", "a(0)", "a._1"],
      answer: "a(0)",
      explanation: "Scala 数组下标从 0 开始，并使用圆括号取值。"
    },
    {
      question: "Scala 元组第一个元素如何获取？",
      options: ["t(0)", "t._1", "t[0]", "t.first"],
      answer: "t._1",
      explanation: "Scala 元组从 _1 开始取值。"
    },
    {
      question: "ArrayBuffer 的特点是什么？",
      options: ["长度固定", "可以动态追加元素", "只能保存字符串", "不能修改"],
      answer: "可以动态追加元素",
      explanation: "ArrayBuffer 是变长数组，可以动态添加元素。"
    },
    {
      question: "buffer += 1 的作用是什么？",
      options: ["删除 1", "添加元素 1", "清空数组", "创建二维数组"],
      answer: "添加元素 1",
      explanation: "+= 可以向 ArrayBuffer 追加一个元素。"
    },
    {
      question: "更好的 AI 提问方式应该是什么？",
      options: ["只问是什么", "让 AI 分析、对比、评价并给例子", "不给背景", "只让 AI 输出一个词"],
      answer: "让 AI 分析、对比、评价并给例子",
      explanation: "高阶提示词可以让 AI 输出更有结构和深度的内容。"
    }
  ],
  dragMatch: [
    { left: "int[] a", right: "Java 数组声明" },
    { left: "new Array[Int](3)", right: "Scala 定长数组" },
    { left: "a(0)", right: "Scala 数组第一个元素" },
    { left: "a[0]", right: "Java 数组第一个元素" },
    { left: "t._1", right: "元组第一个元素" },
    { left: "ArrayBuffer", right: "变长数组" },
    { left: "+=", right: "追加一个元素" },
    { left: "++=", right: "追加多个元素" },
    { left: "trimEnd", right: "删除末尾元素" },
    { left: "高阶提示词", right: "引导 AI 分析、评价和创造" }
  ],
  flow: {
    title: "Scala 数组创建流程",
    description: "展示创建定长数组并访问元素的过程。",
    steps: [
      "写出 val a",
      "右边使用 new Array[Int](3)",
      "创建长度为 3 的整数数组",
      "使用 a(0) 访问第一个元素",
      "给 a(0) 赋值",
      "使用 println 输出结果"
    ]
  },
  exercises: [
    {
      question: "请用 Scala 创建一个长度为 3 的 Int 数组，并给第一个元素赋值为 10。",
      answer: `val a = new Array[Int](3)
a(0) = 10`
    },
    {
      question: "请创建一个长度为 3 的 Double 数组，并分别赋值 1.5、2.5、3.5。",
      answer: `val nums = new Array[Double](3)
nums(0) = 1.5
nums(1) = 2.5
nums(2) = 3.5`
    },
    {
      question: "请创建一个 ArrayBuffer，并依次添加 1、2、3。",
      answer: `import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer[Int]()
buffer += 1
buffer += 2
buffer += 3`
    },
    {
      question: "请向 ArrayBuffer 中一次追加 4、5、6。",
      answer: "buffer ++= Array(4, 5, 6)"
    },
    {
      question: "请写一个高阶 AI 提示词，让 AI 帮你比较 Java 数组和 Scala 数组。",
      answer: "请你用适合初学者的方式，从声明方式、取值方式、下标规则、长度是否可变和代码示例五个角度，对比 Java 数组和 Scala 数组。"
    }
  ],
  conclusion: [
    "Java 数组通常使用类型加方括号声明。",
    "Scala 数组常用 new Array[类型](长度) 创建。",
    "Java 数组用方括号取值，Scala 数组用圆括号取值。",
    "数组下标从 0 开始，元组从 1 开始取值。",
    "二维数组和矩阵维度有关，进行样本计算时要注意行列方向。",
    "定长数组创建后长度固定。",
    "ArrayBuffer 是变长数组，可以动态追加元素。",
    "+= 追加一个元素，++= 追加多个元素。",
    "trimEnd 可以删除末尾若干元素。",
    "使用 AI 时要多用高阶提示词，让 AI 帮助分析、比较、评价和创造。"
  ]
},
  {
  id: "scala-2026-03-19-environment-for-yield",
  title: "编程学习指导与Scala知识讲解",
  chapter: "第五章 Scala 集合、数组与 for 推导式",
  date: "2026-03-19",
  tags: [
    "环境搭建",
    "JDK",
    "IDE",
    "Eclipse",
    "Python环境",
    "Anaconda",
    "Linux",
    "Windows",
    "界面端",
    "to",
    "until",
    "by",
    "步长",
    "数组访问",
    "倒序输出",
    "万物皆对象",
    "object",
    "单例对象",
    "伴生对象",
    "for推导式",
    "yield",
    "守卫",
    "编程思维",
    "学习建议"
  ],
  summary: [
    "本节课围绕编程环境搭建、Scala 基础语法复习、数组访问、区间步长、对象概念和 for 推导式展开。",
    "老师讲解了学习 Scala 需要 JDK 和 IDE，并说明 JDK 版本冲突可能导致环境异常。",
    "课堂建议学习 Python、MySQL 等工具时关注图形界面端，便于初学者理解和操作。",
    "本节课回顾了 to、until、by 的区别，以及如何通过步长输出奇数项、偶数项和倒序数据。",
    "老师说明 Scala 数组可以通过 a(0) 访问元素，并强调变量类型由赋值决定。",
    "课堂还讲解了万物皆对象、单例对象、伴生对象等后续重点。",
    "最后，老师展示了 Scala 的简洁优势，尤其是 for 推导式结合 yield 和守卫生成集合。"
  ],
  keyPoints: [
    {
      title: "Scala 环境搭建",
      content: "学习 Scala 通常需要安装 JDK 和 IDE，例如 Eclipse 或 IDEA，并确保 Scala 项目可以正常运行。",
      javaCompare: "Java 和 Scala 都依赖 JDK 环境。"
    },
    {
      title: "JDK 版本冲突",
      content: "JDK 11 和 JDK 8 共存或删除不干净时，可能出现注册表或环境变量残留，导致 IDE 识别异常。",
      javaCompare: ""
    },
    {
      title: "Python 环境与 Anaconda",
      content: "Python 学习可以使用官方环境，工作中常用配置好的环境；Anaconda 配库方便，但也可能出现环境混乱。",
      javaCompare: ""
    },
    {
      title: "Linux 与 Windows",
      content: "Linux 更适合命令行和底层环境配置，Windows 更适合图形化安装和应用操作。",
      javaCompare: ""
    },
    {
      title: "图形界面端工具",
      content: "学习数据库或 Python 工具时，可以使用界面端拖拽辅助理解，但也要掌握底层代码逻辑。",
      javaCompare: ""
    },
    {
      title: "to 与 until",
      content: "to 表示包含右端点的闭区间，until 表示不包含右端点的半开区间。",
      javaCompare: "Java 中通常通过 <= 和 < 控制边界。"
    },
    {
      title: "by 步长",
      content: "by 可以设置遍历步长，例如 1 to 10 by 2。",
      javaCompare: "Java 中通常通过 i += 2 控制步长。"
    },
    {
      title: "数组访问",
      content: "Scala 数组使用圆括号访问元素，例如 a(0)。",
      javaCompare: "Java 使用方括号访问数组元素，例如 a[0]。"
    },
    {
      title: "倒序输出数组",
      content: "可以通过 a.length - 1 to 0 by -1 从数组尾端向前遍历。",
      javaCompare: "Java 中通常使用 for 循环从 length - 1 递减到 0。"
    },
    {
      title: "Scala 变量类型灵活",
      content: "Scala 中变量类型通常由右边的赋值表达式决定。",
      javaCompare: "Java 通常需要在变量名前显式写类型。"
    },
    {
      title: "万物皆对象",
      content: "Scala 强调对象有属性和方法，很多值都可以通过点运算符调用方法。",
      javaCompare: "Java 中基本类型和对象类型更分明。"
    },
    {
      title: "单例对象与伴生对象",
      content: "Scala 后续会学习单例对象和伴生对象，用于区分特殊类和对象关系。",
      javaCompare: "Java 中没有完全相同的 object 机制。"
    },
    {
      title: "编程思维",
      content: "学习编程要形成需求拆解、抽象、调试和数据处理思维，而不是只背语法。",
      javaCompare: ""
    },
    {
      title: "Scala 简洁性",
      content: "Scala 可以用较短代码完成 Java 中较长的逻辑，例如 (1 to 10).sum。",
      javaCompare: "Java 中通常需要循环累加或使用 Stream。"
    },
    {
      title: "for yield",
      content: "for 推导式结合 yield 可以根据遍历结果生成新集合。",
      javaCompare: "Java 中通常需要创建集合并手动 add，或使用 Stream。"
    },
    {
      title: "守卫筛选",
      content: "for 推导式可以结合 if 守卫筛选元素，例如只保留偶数。",
      javaCompare: "Java 中通常在循环体内部写 if 判断。"
    },
    {
      title: "课后学习建议",
      content: "老师建议先学好 Java 训练编程思想，再学习 Scala；课后重看第三章、预习第四章，并整理代码。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "to 和 until",
      code: `for (i <- 1 to 5) {
  println(i)
}

for (i <- 1 until 5) {
  println(i)
}`,
      explanation: "to 包含 5，until 不包含 5。"
    },
    {
      title: "步长输出奇数",
      code: `for (i <- 1 to 10 by 2) {
  println(i)
}`,
      explanation: "步长为 2，输出 1、3、5、7、9。"
    },
    {
      title: "数组访问",
      code: `val a = Array(10, 20, 30)
println(a(0))
println(a(1))
println(a(2))`,
      explanation: "Scala 数组使用圆括号访问元素。"
    },
    {
      title: "从数组尾端输出",
      code: `val a = Array(1, 2, 3, 4, 5)

for (i <- a.length - 1 to 0 by -1) {
  println(a(i))
}`,
      explanation: "从最后一个元素开始，倒序输出数组。"
    },
    {
      title: "一行求和",
      code: `val result = (1 to 10).sum`,
      explanation: "Scala 可以直接对范围调用 .sum。"
    },
    {
      title: "for yield 生成集合",
      code: `val doubled = for (i <- 1 to 10) yield i * 2`,
      explanation: "把 1 到 10 中的每个值乘以 2，并生成新集合。"
    },
    {
      title: "守卫筛选偶数",
      code: `val evens = for (i <- 1 to 10 if i % 2 == 0) yield i`,
      explanation: "只保留 1 到 10 中的偶数。"
    }
  ],
  quiz: [
    {
      question: "1 to 5 是否包含 5？",
      options: ["包含", "不包含", "只包含 5", "只包含 0"],
      answer: "包含",
      explanation: "to 是全闭区间，包含右端点。"
    },
    {
      question: "1 until 5 是否包含 5？",
      options: ["包含", "不包含", "只包含 5", "不能运行"],
      answer: "不包含",
      explanation: "until 是半开半闭区间，不包含右端点。"
    },
    {
      question: "1 to 10 by 2 的作用是什么？",
      options: ["步长为 2 遍历", "删除 2", "只输出 10", "创建对象"],
      answer: "步长为 2 遍历",
      explanation: "by 2 表示每次跳 2 个单位。"
    },
    {
      question: "Scala 数组访问第一个元素应写成什么？",
      options: ["a[0]", "a(0)", "a._1", "a.firstOnly"],
      answer: "a(0)",
      explanation: "Scala 数组使用圆括号取值。"
    },
    {
      question: "yield 在 for 推导式中的作用是什么？",
      options: ["生成并收集结果", "删除数组", "创建 JDK", "输出错误"],
      answer: "生成并收集结果",
      explanation: "yield 可以把 for 表达式的结果收集成集合。"
    },
    {
      question: "val result = (1 to 10).sum 的结果是多少？",
      options: ["10", "45", "55", "100"],
      answer: "55",
      explanation: "1 到 10 相加结果是 55。"
    }
  ],
  dragMatch: [
    { left: "JDK", right: "Java/Scala 运行和开发基础环境" },
    { left: "IDE", right: "集成开发工具" },
    { left: "Anaconda", right: "Python 常见环境管理工具" },
    { left: "Linux", right: "更偏命令行和底层配置" },
    { left: "Windows", right: "更偏图形化应用安装" },
    { left: "to", right: "包含右端点" },
    { left: "until", right: "不包含右端点" },
    { left: "by", right: "设置步长" },
    { left: "a(0)", right: "Scala 数组第一个元素" },
    { left: "yield", right: "生成集合" },
    { left: "守卫", right: "用 if 筛选元素" },
    { left: "object", right: "Scala 对象" }
  ],
  flow: {
    title: "for 推导式执行流程",
    description: "展示 for 守卫筛选与 yield 生成集合的流程。",
    steps: [
      "读取范围 1 to 10",
      "依次取出每个 i",
      "进入 if 守卫判断",
      "判断 i 是否为偶数",
      "满足条件则 yield i",
      "收集所有结果",
      "生成偶数集合"
    ]
  },
  exercises: [
    {
      question: "请分别写出 1 to 5 和 1 until 5 的输出范围。",
      answer: "1 to 5 输出 1, 2, 3, 4, 5；1 until 5 输出 1, 2, 3, 4。"
    },
    {
      question: "请用 Scala 输出 1 到 10 中的奇数。",
      answer: `for (i <- 1 to 10 by 2) {
  println(i)
}`
    },
    {
      question: "请创建一个数组，并输出第一个元素。",
      answer: `val a = Array(10, 20, 30)
println(a(0))`
    },
    {
      question: "请倒序输出数组 Array(1, 2, 3, 4, 5)。",
      answer: `val a = Array(1, 2, 3, 4, 5)

for (i <- a.length - 1 to 0 by -1) {
  println(a(i))
}`
    },
    {
      question: "请用 for yield 筛选 1 到 10 中的偶数。",
      answer: "val evens = for (i <- 1 to 10 if i % 2 == 0) yield i"
    },
    {
      question: "请用一行代码计算 1 到 10 的和。",
      answer: "val result = (1 to 10).sum"
    }
  ],
  conclusion: [
    "学习 Scala 需要配置 JDK 和 IDE。",
    "JDK 版本冲突可能导致环境异常，需要检查注册表、环境变量和 IDE 配置。",
    "Python、MySQL 等工具可以使用图形界面端辅助学习，但不能只会拖拽。",
    "to 表示全闭区间，until 表示半开半闭区间。",
    "by 可以设置步长，用来输出奇数项、偶数项或按间隔采样。",
    "Scala 数组使用圆括号访问元素。",
    "可以通过下标和负步长倒序输出数组。",
    "Scala 强调万物皆对象，对象有属性和方法。",
    "for yield 可以生成新集合。",
    "守卫可以结合 if 筛选符合条件的元素。",
    "Scala 代码通常比 Java 更简洁，但需要建立扎实的编程思维。",
    "课后应复习视频课第三章，预习第四章，并整理代码到笔记本。"
  ]
},
  {
  id: "scala-2026-03-26-arrays-maps-sets",
  title: "Scala编程知识讲解",
  chapter: "第五章 Scala 集合、映射与数组",
  date: "2026-03-26",
  tags: [
    "Array",
    "ArrayBuffer",
    "toArray",
    "for表达式",
    "yield",
    "守卫",
    "二维数组",
    "Array.ofDim",
    "Map",
    "键值对",
    "Option",
    "Some",
    "None",
    "contains",
    "get",
    "可变Map",
    "不可变Map",
    "Set",
    "exists",
    "intersect",
    "Scala API"
  ],
  summary: [
    "本节课主要讲解 Scala 中数组、数组缓冲、for 表达式、二维数组、映射 Map、集合 Set 和 Scala API 的使用方法。",
    "老师回顾了 Java 与 Scala 在数组声明上的区别，并说明 ArrayBuffer 可以追加、插入、删除元素。",
    "课堂讲解了 for 表达式可以遍历数组、筛选元素，并通过 yield 生成新集合。",
    "本节课重点讲解 Map 映射，说明 Map 是 key-value 键值对集合，与哈希表和映射思想有关。",
    "老师讲解了 Map 的括号取值、get 方法、contains 判断、Option 返回值和可变 Map 更新方式。",
    "课堂还讲解了 Set 集合，说明 Set 不包含重复元素，并可通过交集分析共同元素。",
    "最后老师提醒同学学会查看 Scala API，理解对象的方法、属性、返回值和示例。"
  ],
  keyPoints: [
    {
      title: "Java 与 Scala 数组声明差异",
      content: "Java 数组通常先写类型，例如 int[] a；Scala 常用 new Array[Int](3) 创建数组。",
      javaCompare: "Java 类型放在变量名前；Scala 更强调右侧表达式决定变量类型。"
    },
    {
      title: "ArrayBuffer 缓冲数组",
      content: "ArrayBuffer 是变长数组，可以追加、插入和删除元素。",
      javaCompare: "Java 中类似功能可用 ArrayList 实现。"
    },
    {
      title: "变长数组转定长数组",
      content: "ArrayBuffer 可以通过 toArray 转成定长数组，适合先动态收集数据再固定下来处理。",
      javaCompare: ""
    },
    {
      title: "遍历数组",
      content: "Scala 可以用 for (elem <- a) 遍历数组中的每个元素。",
      javaCompare: "Java 通常使用下标循环或增强 for 循环。"
    },
    {
      title: "Range 也是对象",
      content: "1 to 10 这样的范围可以看作对象，因此可以调用 reverse 等方法。",
      javaCompare: ""
    },
    {
      title: "for 表达式与 yield",
      content: "for 表达式可以对元素计算并通过 yield 生成新集合。",
      javaCompare: "Java 中通常需要创建新集合并手动添加元素。"
    },
    {
      title: "守卫筛选",
      content: "for 表达式中可以用 if 作为守卫，筛选满足条件的元素。",
      javaCompare: "Java 中通常把 if 写在循环体内部。"
    },
    {
      title: "二维数组",
      content: "Scala 创建二维数组常用 Array.ofDim[Int](行, 列)。",
      javaCompare: "Java 中常用 int[][] 表示二维数组。"
    },
    {
      title: "Map 映射",
      content: "Map 是键值对集合，每个 key 对应一个 value。",
      javaCompare: "Java 中类似 HashMap。"
    },
    {
      title: "右箭头创建键值对",
      content: "Scala 中使用 -> 创建键值对，例如 \"Monday\" -> 1。",
      javaCompare: ""
    },
    {
      title: "左箭头遍历集合",
      content: "<- 常用于 for 循环中遍历集合。",
      javaCompare: ""
    },
    {
      title: "Map 命名空间",
      content: "使用可变 Map 时需要导入 scala.collection.mutable.Map 等命名空间。",
      javaCompare: "Java 中使用某些类时也需要 import。"
    },
    {
      title: "Map 括号取值",
      content: "可以用 map(key) 直接取值，但 key 不存在时可能报异常。",
      javaCompare: "Java Map 的 get 不存在时通常返回 null。"
    },
    {
      title: "get 返回 Option",
      content: "Map 的 get 方法返回 Option，可能是 Some(value)，也可能是 None。",
      javaCompare: "Scala 用 Option 避免直接返回 null。"
    },
    {
      title: "contains 判断 key",
      content: "使用 contains 可以先判断 key 是否存在，避免直接取值出错。",
      javaCompare: "Java 中也有 containsKey。"
    },
    {
      title: "可变 Map 更新",
      content: "可变 Map 可以修改已有 key 的值，也可以添加新的键值对。",
      javaCompare: "Java HashMap 也可以 put 更新或添加。"
    },
    {
      title: "Set 集合",
      content: "Set 是不包含重复元素的集合。",
      javaCompare: "Java 中也有 Set 接口。"
    },
    {
      title: "exists 方法",
      content: "exists 用来判断集合中是否至少有一个元素满足条件。",
      javaCompare: ""
    },
    {
      title: "集合交集",
      content: "Set 的交集可以用于分析共同爱好、共同特征或共同标签。",
      javaCompare: ""
    },
    {
      title: "查看 Scala API",
      content: "学习 Scala 要会查看 API，理解方法、属性、示例和返回值。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "Scala 定长数组",
      code: `val a = new Array[Int](3)
a(0) = 10
a(1) = 20
a(2) = 30`,
      explanation: "创建长度为 3 的 Int 数组。"
    },
    {
      title: "ArrayBuffer 追加并转数组",
      code: `import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer[Int]()
buffer += 1
buffer += 2
buffer += 3

val arr = buffer.toArray`,
      explanation: "先用变长数组收集数据，再转为定长数组。"
    },
    {
      title: "for 表达式筛选偶数",
      code: `val nums = Array(1, 2, 3, 4, 5, 6)

val evens = for (elem <- nums if elem % 2 == 0) yield elem`,
      explanation: "筛选数组中的偶数。"
    },
    {
      title: "二维数组",
      code: `val matrix = Array.ofDim[Int](3, 3)
matrix(0)(0) = 1
matrix(1)(1) = 1
matrix(2)(2) = 1`,
      explanation: "创建 3 行 3 列二维数组，并设置对角线元素。"
    },
    {
      title: "不可变 Map",
      code: `val days = Map(
  "Monday" -> 1,
  "Tuesday" -> 2,
  "Wednesday" -> 3
)

println(days("Monday"))`,
      explanation: "定义星期和数字之间的映射。"
    },
    {
      title: "安全获取 Map 值",
      code: `val days = Map("Monday" -> 1, "Tuesday" -> 2)

if (days.contains("Friday")) {
  println(days("Friday"))
} else {
  println("没有这个键")
}`,
      explanation: "先判断 key 是否存在，避免异常。"
    },
    {
      title: "使用 get 返回 Option",
      code: `val days = Map("Monday" -> 1, "Tuesday" -> 2)

println(days.get("Monday"))
println(days.get("Friday"))`,
      explanation: "存在时返回 Some(value)，不存在时返回 None。"
    },
    {
      title: "可变 Map 更新",
      code: `val scores = scala.collection.mutable.Map("Alice" -> 90)

scores("Alice") = 95
scores += ("Bob" -> 80)

println(scores)`,
      explanation: "可变 Map 可以更新值，也可以添加新的键值对。"
    },
    {
      title: "Set 去重",
      code: `val s = Set(1, 2, 2, 3, 3, 4)
println(s)`,
      explanation: "Set 不保留重复元素。"
    },
    {
      title: "Set 交集",
      code: `val a = Set("音乐", "篮球", "电影")
val b = Set("篮球", "游戏", "音乐")

val common = a intersect b
println(common)`,
      explanation: "找出两个集合的共同元素。"
    }
  ],
  quiz: [
    {
      question: "Scala 中创建二维数组常用哪个方法？",
      options: ["Array.ofDim", "new int[][]", "array double new", "Map.ofDim"],
      answer: "Array.ofDim",
      explanation: "Scala 中常用 Array.ofDim[Int](行, 列) 创建二维数组。"
    },
    {
      question: "Scala 中 -> 的作用是什么？",
      options: ["创建键值对", "删除数组", "输出换行", "创建类"],
      answer: "创建键值对",
      explanation: "\"Monday\" -> 1 表示创建一个键值对。"
    },
    {
      question: "Map 中如果 key 不存在，直接用括号取值可能会怎样？",
      options: ["可能报异常", "一定返回 0", "自动创建 key", "删除 Map"],
      answer: "可能报异常",
      explanation: "如果 key 不存在，直接取值可能报异常，建议使用 contains 或 get。"
    },
    {
      question: "get 方法通常返回什么类型？",
      options: ["Option", "Int", "String", "Boolean"],
      answer: "Option",
      explanation: "Map 的 get 方法通常返回 Option，可能是 Some(value) 或 None。"
    },
    {
      question: "Set 的特点是什么？",
      options: ["不包含重复元素", "必须重复元素", "只能保存字符串", "不能遍历"],
      answer: "不包含重复元素",
      explanation: "Set 是不包含重复元素的集合。"
    },
    {
      question: "exists 的作用是什么？",
      options: ["判断是否存在满足条件的元素", "删除集合", "创建二维数组", "修改 key"],
      answer: "判断是否存在满足条件的元素",
      explanation: "exists 用来判断集合中是否至少有一个元素满足条件。"
    }
  ],
  dragMatch: [
    { left: "ArrayBuffer", right: "变长数组" },
    { left: "toArray", right: "转成定长数组" },
    { left: "yield", right: "生成新集合" },
    { left: "Array.ofDim", right: "创建二维数组" },
    { left: "Map", right: "键值对集合" },
    { left: "->", right: "创建键值对" },
    { left: "<-", right: "遍历集合" },
    { left: "get", right: "安全取值，返回 Option" },
    { left: "contains", right: "判断 key 是否存在" },
    { left: "Set", right: "不重复元素集合" },
    { left: "exists", right: "判断是否存在满足条件的元素" },
    { left: "intersect", right: "求交集" }
  ],
  flow: {
    title: "Map 取值流程",
    description: "展示使用 contains 安全取值的流程。",
    steps: [
      "定义一个 Map",
      "准备要查询的 key",
      "使用 contains 判断 key 是否存在",
      "如果存在，使用 map(key) 取值",
      "如果不存在，输出提示信息",
      "避免程序异常"
    ]
  },
  exercises: [
    {
      question: "创建一个 ArrayBuffer[Int]，添加 1、2、3，然后转成数组。",
      answer: `import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer[Int]()
buffer += 1
buffer += 2
buffer += 3

val arr = buffer.toArray`
    },
    {
      question: "创建一个 Map，表示星期一、星期二、星期三分别对应 1、2、3。",
      answer: `val days = Map(
  "Monday" -> 1,
  "Tuesday" -> 2,
  "Wednesday" -> 3
)`
    },
    {
      question: "使用 contains 判断 Map 中是否包含 Friday。",
      answer: `if (days.contains("Friday")) {
  println(days("Friday"))
} else {
  println("没有 Friday")
}`
    },
    {
      question: "创建两个 Set，求它们的交集。",
      answer: `val a = Set("音乐", "篮球", "电影")
val b = Set("篮球", "游戏", "音乐")

val common = a intersect b
println(common)`
    },
    {
      question: "用 for 表达式筛选数组中的偶数。",
      answer: `val nums = Array(1, 2, 3, 4, 5, 6)

val evens = for (elem <- nums if elem % 2 == 0) yield elem`
    }
  ],
  conclusion: [
    "Scala 中数组声明方式与 Java 不同，要注意类型位置和取值方式。",
    "ArrayBuffer 是变长数组，可以追加、插入、删除元素。",
    "变长数组处理完成后可以用 toArray 转成定长数组。",
    "for 表达式可以遍历数组、筛选元素并生成新集合。",
    "Scala 创建二维数组常用 Array.ofDim。",
    "Map 是键值对集合，适合表示一一对应关系。",
    "-> 用于创建键值对，<- 常用于遍历。",
    "Map 取不存在的 key 可能报错，建议用 contains 或 get。",
    "get 返回 Option，可能是 Some(value) 或 None。",
    "Set 是不包含重复元素的集合。",
    "Set 的交集可以用于分析共同爱好或共同特征。",
    "学习 Scala 要学会查 API，理解方法、属性、返回值和示例。"
  ]
},
  {
  id: "scala-2026-03-26-collections-map-foreach",
  title: "Scala编程基础要点及练习讲解",
  chapter: "第五章 Scala 集合练习与 Map 转换",
  date: "2026-03-26",
  tags: [
    "Set",
    "Map",
    "List",
    "Array",
    "toArray",
    "toList",
    "difference",
    "diff",
    "foreach",
    "匿名函数",
    "函数推导",
    "API",
    "集合练习",
    "Map转数组",
    "单位矩阵",
    "考试重点"
  ],
  summary: [
    "本节课主要围绕 Scala 集合和映射练习展开，重点讲解 Set、Map、List、Array、Map 转数组和 foreach。",
    "老师说明入门阶段需要掌握定义集合、集合运算、输出新集合，以及定义 Map 并输出对应关系。",
    "课堂讲解了 List 的特点，说明 List 类似数组，但具有递归或链式结构，可以嵌套表示二维结构。",
    "本节课重点练习 Map 转数组，说明 toArray 会把 Map 转换成由键值对元组组成的数组。",
    "老师强调转换不会影响原始 Map，类似方法还有 toList、difference 或 diff。",
    "课堂最后讲解 foreach 和匿名函数，说明 foreach 可以对集合中每个元素执行指定操作。",
    "老师提醒下周周二是试听课，周四检查学习笔记，需要整理好课堂代码。"
  ],
  keyPoints: [
    {
      title: "集合基础练习",
      content: "入门阶段需要会定义集合、进行集合运算并输出结果。",
      javaCompare: ""
    },
    {
      title: "考试重点",
      content: "如果本章考试，重点可能是 for 循环、守卫、Range、Set 运算、Map 映射和获取特定值。",
      javaCompare: ""
    },
    {
      title: "List 类似数组",
      content: "List 可以保存一组数据，类似数组，也可以遍历和调用方法。",
      javaCompare: "Java 中类似 List 集合，但 Scala 的 List 更偏函数式结构。"
    },
    {
      title: "List 递归结构",
      content: "List 可以嵌套 List，用来表示类似单位矩阵的二维结构。",
      javaCompare: ""
    },
    {
      title: "Array 与 List 遍历",
      content: "Array 常用 for 遍历，List、Set、Map 也可用 foreach 等方法迭代。",
      javaCompare: "Java 中也有 forEach，但 Scala 写法更函数式。"
    },
    {
      title: "查看 API",
      content: "学习集合时要会查看 API，了解方法、属性、简介、示例和返回值。",
      javaCompare: ""
    },
    {
      title: "Map 转数组",
      content: "Map 可以通过 toArray 转成数组，数组元素通常是键值对元组。",
      javaCompare: ""
    },
    {
      title: "toArray 不影响原始 Map",
      content: "toArray 生成新数组，不会破坏原来的 Map。",
      javaCompare: ""
    },
    {
      title: "toList",
      content: "Map 或其他集合也可以通过 toList 转成列表形式。",
      javaCompare: ""
    },
    {
      title: "difference / diff",
      content: "diff 可以求差集，即保留只在一个集合中出现的元素。",
      javaCompare: ""
    },
    {
      title: "声明并赋值不用 new",
      content: "Scala 中如果声明时直接给值，通常不需要写 new。",
      javaCompare: "Java 中创建对象常需要 new。"
    },
    {
      title: "foreach 方法",
      content: "foreach 用于迭代集合中每个元素，并对每个元素执行指定操作。",
      javaCompare: "Java 也有 forEach，但 Scala 的匿名函数写法更常见。"
    },
    {
      title: "foreach 与 for",
      content: "foreach 和 for 都可以遍历集合，foreach 更偏函数式表达。",
      javaCompare: ""
    },
    {
      title: "匿名函数",
      content: "num => println(num) 没有函数名，但有参数和函数体，可以理解为匿名函数。",
      javaCompare: "Java 8 后的 lambda 表达式有类似思想。"
    },
    {
      title: "函数推导思想",
      content: "foreach 中可以把要执行的动作作为函数传进去，例如对每个元素乘 2 后输出。",
      javaCompare: ""
    },
    {
      title: "学习笔记检查",
      content: "老师提醒下周周四检查学习笔记，需要整理课堂代码和练习。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "Set 集合并集",
      code: `val a = Set(1, 2, 3)
val b = Set(3, 4, 5)

val result = a union b
println(result)`,
      explanation: "两个集合相加，得到新的集合。"
    },
    {
      title: "Map 映射",
      code: `val days = Map(
  "Monday" -> 1,
  "Tuesday" -> 2,
  "Wednesday" -> 3
)

println(days)`,
      explanation: "定义星期和数字的对应关系。"
    },
    {
      title: "List 嵌套表示单位矩阵",
      code: `val matrix = List(
  List(1, 0, 0),
  List(0, 1, 0),
  List(0, 0, 1)
)

println(matrix)`,
      explanation: "List 中包含 List，可以表示二维结构。"
    },
    {
      title: "Map 转数组",
      code: `val days = Map("Monday" -> 1, "Tuesday" -> 2)

val arr = days.toArray

arr.foreach(item => println(item))`,
      explanation: "Map 转数组后，每个元素都是一个键值对元组。"
    },
    {
      title: "Map 转 List",
      code: `val days = Map("Monday" -> 1, "Tuesday" -> 2)

val list = days.toList

println(list)`,
      explanation: "把 Map 转成 List 形式。"
    },
    {
      title: "difference / diff 差集",
      code: `val a = Set(1, 2, 3, 4)
val b = Set(3, 4)

val diff = a.diff(b)

println(diff)`,
      explanation: "输出只在 a 中、不在 b 中的元素。"
    },
    {
      title: "foreach 遍历 List",
      code: `val numbers = List(1, 2, 3, 4, 5)

numbers.foreach(num => println(num))`,
      explanation: "对集合中的每个元素执行打印操作。"
    },
    {
      title: "foreach 执行计算",
      code: `val numbers = List(1, 2, 3, 4, 5)

numbers.foreach(num => println(num * 2))`,
      explanation: "对每个元素乘以 2 后输出。"
    }
  ],
  quiz: [
    {
      question: "Scala 中 Map 转数组常用哪个方法？",
      options: ["toArray", "toInt", "newArrayOnly", "deleteMap"],
      answer: "toArray",
      explanation: "toArray 可以把 Map 转换为数组。"
    },
    {
      question: "Map 转数组后，数组中的元素通常是什么？",
      options: ["元组", "图片", "数据库", "压缩包"],
      answer: "元组",
      explanation: "Map 中每个键值对转换后通常以元组形式存在。"
    },
    {
      question: "foreach 的作用是什么？",
      options: ["遍历集合并对每个元素执行操作", "删除所有元素", "创建 JDK", "修改文件名"],
      answer: "遍历集合并对每个元素执行操作",
      explanation: "foreach 用于迭代集合元素，并执行指定动作。"
    },
    {
      question: "num => println(num) 可以理解为什么？",
      options: ["匿名函数", "数据库表", "类名", "文件路径"],
      answer: "匿名函数",
      explanation: "它没有函数名，但有参数和函数体，因此可以看作匿名函数。"
    },
    {
      question: "在 Scala 中，声明并赋值时通常是否必须写 new？",
      options: ["不一定，直接给值时通常不用 new", "永远必须写 new", "只能写 Java 代码", "不能赋值"],
      answer: "不一定，直接给值时通常不用 new",
      explanation: "例如 val days = Map(\"Monday\" -> 1) 不需要写 new。"
    }
  ],
  dragMatch: [
    { left: "Set", right: "不重复元素集合" },
    { left: "Map", right: "键值对映射" },
    { left: "List", right: "列表" },
    { left: "Array", right: "数组" },
    { left: "toArray", right: "转换为数组" },
    { left: "toList", right: "转换为列表" },
    { left: "diff", right: "求差集" },
    { left: "foreach", right: "遍历每个元素" },
    { left: "num => println(num)", right: "匿名函数" },
    { left: "API", right: "查看方法、属性和示例的文档" }
  ],
  flow: {
    title: "Map 转数组流程",
    description: "展示 Map 转换为数组并使用 foreach 遍历的流程。",
    steps: [
      "定义 Map",
      "调用 toArray",
      "得到数组",
      "数组中每个元素是键值对元组",
      "调用 foreach",
      "逐个打印每个元组"
    ]
  },
  exercises: [
    {
      question: "定义两个 Set，并输出它们的并集。",
      answer: `val a = Set(1, 2, 3)
val b = Set(3, 4, 5)

println(a union b)`
    },
    {
      question: "定义一个 Map，表示 Monday、Tuesday、Wednesday 分别对应 1、2、3。",
      answer: `val days = Map(
  "Monday" -> 1,
  "Tuesday" -> 2,
  "Wednesday" -> 3
)`
    },
    {
      question: "把上题的 Map 转成数组并输出。",
      answer: `val arr = days.toArray
arr.foreach(item => println(item))`
    },
    {
      question: "使用 foreach 输出 List(1, 2, 3, 4, 5) 中的每个元素。",
      answer: `val numbers = List(1, 2, 3, 4, 5)

numbers.foreach(num => println(num))`
    },
    {
      question: "使用 foreach 输出 List(1, 2, 3, 4, 5) 中每个元素乘 2 后的结果。",
      answer: `val numbers = List(1, 2, 3, 4, 5)

numbers.foreach(num => println(num * 2))`
    }
  ],
  conclusion: [
    "本节课主要是集合和 Map 的练习巩固。",
    "入门阶段需要能定义 Set、Map、List，并能输出处理结果。",
    "考试如果涉及本章，重点大概率是 for 循环、守卫、Set 运算和 Map 输出。",
    "List 类似数组，但具有递归或链式结构。",
    "List 中可以嵌套 List，用来表达二维结构。",
    "学习 Scala 集合时要会查 API。",
    "Map 可以使用 toArray 转换为数组，转换后元素通常是元组。",
    "toArray 不会影响原始 Map。",
    "foreach 用来迭代集合，并对每个元素执行操作。",
    "num => println(num) 是匿名函数写法。",
    "声明并直接赋值时，Scala 中通常不需要写 new。",
    "下周周四需要检查学习笔记，要整理好课堂代码和练习。"
  ]
},
  {
  id: "scala-2026-04-02-classes-methods-basics",
  title: "Scala编程基础之循环、类与方法",
  chapter: "第六章 Scala 类、对象与方法基础",
  date: "2026-04-02",
  tags: [
    "循环",
    "类",
    "对象",
    "实例",
    "class",
    "object",
    "new",
    "属性",
    "方法",
    "函数",
    "匿名函数",
    "def",
    "类参数",
    "作用域",
    "单例对象",
    "伴生对象",
    "Scala与Java对比",
    "课堂作业"
  ],
  summary: [
    "本节课主要讲解 Scala 中循环、类、对象、方法和函数，并布置了面向对象相关作业。",
    "老师强调循环是处理重复动作的重要工具，项目开发、数据分析和 AI 任务中都会大量使用。",
    "课堂用 Java 中的 student class 做对比，说明类是对象的抽象，对象是类的具体实例。",
    "本节课说明 Scala 类比 Java 类更抽象，可以通过 object、单例对象和伴生对象减少冗余结构。",
    "老师讲解了 Scala 类的特点，包括一个源文件可包含多个类、默认公有、类中可定义变量和方法、类可带参数。",
    "课堂还区分了方法和函数：方法是类的一部分，函数可以看成对象，常用于临时性计算。",
    "作业要求创建一个对象或类，例如 Animal、Dog、Cat，包含两个变量、一个方法和一个函数。"
  ],
  keyPoints: [
    {
      title: "循环的重要性",
      content: "循环用于解决重复动作，是项目开发、数据处理和 AI 任务中的基础结构。",
      javaCompare: "Java 和 Scala 都有循环，但 Scala 的 for 表达式更灵活。"
    },
    {
      title: "循环依赖条件",
      content: "循环通常基于某个范围或条件重复执行，而不是盲目重复。",
      javaCompare: ""
    },
    {
      title: "类是对象的抽象",
      content: "类可以理解为模板或模具，描述对象应该具有的属性和方法。",
      javaCompare: "Java 中类也是对象的模板。"
    },
    {
      title: "对象是类的实例",
      content: "对象是根据类创建出的具体个体，会占用具体内存空间。",
      javaCompare: "Java 和 Scala 都可以通过 new 创建对象。"
    },
    {
      title: "Scala 类更抽象",
      content: "Scala 类比 Java 类更灵活，可通过 object、单例对象和伴生对象减少冗余。",
      javaCompare: "Java 中通常需要创建更多类来表达特殊情况。"
    },
    {
      title: "万物皆对象",
      content: "Scala 中对象可以有自己的属性和方法，对象不只是类成员的调用者。",
      javaCompare: "Java 对象通常由类实例化得到，Scala 的 object 机制更独立。"
    },
    {
      title: "单例对象",
      content: "object 可以定义单例对象，不需要 new 就可以直接使用。",
      javaCompare: "Java 中实现单例通常需要额外写单例模式代码。"
    },
    {
      title: "伴生对象",
      content: "同名 class 和 object 可以形成伴生关系，用于配合类完成创建或管理任务。",
      javaCompare: "Java 中没有完全相同的伴生对象机制。"
    },
    {
      title: "一个文件多个类",
      content: "Scala 一个源文件中可以包含多个类和多个对象。",
      javaCompare: "Java 中一个 public 类通常对应一个文件。"
    },
    {
      title: "默认 public",
      content: "Scala 中类不显式写 public 时，通常可先理解为公有可见。",
      javaCompare: "Java 不写修饰符时通常是默认访问权限。"
    },
    {
      title: "类参数",
      content: "Scala 类名后可以直接带参数，参数可在类体中使用。",
      javaCompare: "Java 通常通过构造方法接收参数。"
    },
    {
      title: "类参数作用域",
      content: "类参数从定义处开始，到整个类体结束都可以访问。",
      javaCompare: ""
    },
    {
      title: "方法是类的一部分",
      content: "方法通常定义在类中，描述对象可以反复执行的行为。",
      javaCompare: "Java 方法也属于类或对象。"
    },
    {
      title: "函数可以作为对象",
      content: "函数可以赋值给变量或常量，常用于临时性计算。",
      javaCompare: "Java 早期不强调函数对象，Java 8 后 lambda 有类似思想。"
    },
    {
      title: "匿名函数",
      content: "匿名函数没有函数名，通过参数和函数体表达一个动作。",
      javaCompare: "Java lambda 表达式与匿名函数思想相近。"
    },
    {
      title: "def 定义方法",
      content: "Scala 中通常用 def 定义方法，包含方法名、参数、返回类型和方法体。",
      javaCompare: "Java 方法通常先写返回类型，再写方法名。"
    },
    {
      title: "课堂作业",
      content: "创建一个类或对象，包含两个变量、一个方法和一个函数，用来练习面向对象基础。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "创建简单类和对象",
      code: `class Student {
  var name = "Tom"
  var age = 20
}

val s = new Student
println(s.name)
println(s.age)`,
      explanation: "Student 是类，s 是通过 new Student 创建的对象。"
    },
    {
      title: "带参数的类",
      code: `class Point(xc: Int, yc: Int) {
  var x = xc
  var y = yc
}

val p = new Point(1, 2)
println(p.x)
println(p.y)`,
      explanation: "xc 和 yc 是类参数，用来初始化对象属性。"
    },
    {
      title: "类中的方法",
      code: `class Point(xc: Int, yc: Int) {
  var x = xc
  var y = yc

  def move(dx: Int, dy: Int): Unit = {
    x = x + dx
    y = y + dy
  }
}`,
      explanation: "move 是类的方法，可以改变对象的坐标。"
    },
    {
      title: "对象调用方法",
      code: `val p = new Point(1, 2)
p.move(3, 4)

println(p.x)
println(p.y)`,
      explanation: "对象 p 调用 move 方法后，坐标发生变化。"
    },
    {
      title: "匿名函数",
      code: `val addOne = (x: Int) => x + 1

println(addOne(5))`,
      explanation: "addOne 是一个函数对象，接收整数并返回加 1 后的结果。"
    },
    {
      title: "作业示例 Animal",
      code: `class Animal {
  var name = "dog"
  var age = 2

  def run(): Unit = {
    println(name + " is running")
  }

  val speak = () => println(name + " is speaking")
}`,
      explanation: "这个类包含两个变量、一个方法和一个函数，符合课堂作业要求。"
    }
  ],
  quiz: [
    {
      question: "类和对象的关系是什么？",
      options: ["类是对象的抽象，对象是类的实例", "对象是文件，类是图片", "类只能输出字符串", "对象不能有属性"],
      answer: "类是对象的抽象，对象是类的实例",
      explanation: "类像模板，对象是根据模板创建出来的具体实例。"
    },
    {
      question: "Scala 中创建对象常用哪个关键字？",
      options: ["new", "delete", "import", "package"],
      answer: "new",
      explanation: "可以使用 new 类名 创建对象。"
    },
    {
      question: "方法通常属于哪里？",
      options: ["类的一部分", "压缩包的一部分", "图片的一部分", "文件名的一部分"],
      answer: "类的一部分",
      explanation: "方法通常定义在类中，是类的一部分。"
    },
    {
      question: "Scala 中定义方法使用哪个关键字？",
      options: ["def", "var", "val", "objectOnly"],
      answer: "def",
      explanation: "Scala 使用 def 定义方法。"
    },
    {
      question: "下面哪个更像匿名函数？",
      options: ["(x: Int) => x + 1", "class Student", "new Point", "package test"],
      answer: "(x: Int) => x + 1",
      explanation: "匿名函数没有函数名，只描述参数和函数体。"
    },
    {
      question: "本节课作业要求创建的对象或类中至少包含什么？",
      options: ["两个变量、一个方法、一个函数", "三张图片", "一个数据库", "一个压缩包"],
      answer: "两个变量、一个方法、一个函数",
      explanation: "课堂作业要求创建对象或类，并包含两个变量、一个方法和一个函数。"
    }
  ],
  dragMatch: [
    { left: "class", right: "类，描述对象模板" },
    { left: "object", right: "对象，可独立存在" },
    { left: "instance", right: "实例，类创建出的具体对象" },
    { left: "new", right: "创建对象" },
    { left: "property", right: "属性" },
    { left: "method", right: "方法，类的一部分" },
    { left: "function", right: "函数，可作为对象使用" },
    { left: "def", right: "定义方法" },
    { left: "scope", right: "作用域" },
    { left: "companion object", right: "伴生对象" },
    { left: "singleton object", right: "单例对象" },
    { left: "=>", right: "匿名函数箭头" }
  ],
  flow: {
    title: "类与对象创建流程",
    description: "展示定义类、创建对象并调用方法的流程。",
    steps: [
      "定义一个 class",
      "在类中写属性和方法",
      "使用 new 创建对象",
      "对象获得类中定义的属性",
      "对象可以调用类中定义的方法",
      "程序根据对象完成具体任务"
    ]
  },
  exercises: [
    {
      question: "创建一个 Student 类，包含变量 name 和 age。",
      answer: `class Student {
  var name = "Tom"
  var age = 20
}`
    },
    {
      question: "创建 Student 对象，并输出姓名和年龄。",
      answer: `val s = new Student
println(s.name)
println(s.age)`
    },
    {
      question: "创建一个 Point 类，包含坐标 x、y 和移动方法 move。",
      answer: `class Point(xc: Int, yc: Int) {
  var x = xc
  var y = yc

  def move(dx: Int, dy: Int): Unit = {
    x = x + dx
    y = y + dy
  }
}`
    },
    {
      question: "写一个匿名函数，输入整数并返回该整数加 1。",
      answer: "val addOne = (x: Int) => x + 1"
    },
    {
      question: "完成课堂作业：创建一个 Animal 类，包含两个变量、一个方法和一个函数。",
      answer: `class Animal {
  var name = "cat"
  var age = 3

  def eat(): Unit = {
    println(name + " is eating")
  }

  val sleep = () => println(name + " is sleeping")
}`
    }
  ],
  conclusion: [
    "循环是处理重复动作的重要工具。",
    "类是对象的抽象，对象是类的具体实例。",
    "类像模板，对象像根据模板创建出来的具体个体。",
    "Scala 类比 Java 类更抽象、更灵活。",
    "Scala 中一个源文件可以包含多个类和对象。",
    "Scala 类可以不用显式写 public。",
    "类可以有参数，类参数的作用域覆盖整个类体。",
    "方法是类的一部分，通常通过对象反复调用。",
    "函数可以作为对象使用，适合临时性计算或一次性动作。",
    "定义方法通常使用 def。",
    "课堂作业要练习创建类或对象，并包含变量、方法和函数。"
  ]
},
  {
  id: "scala-2026-04-02-fields-constructors",
  title: "Scala与Java的编程知识讲解",
  chapter: "第六章 Scala 字段、取值器与构造器",
  date: "2026-04-02",
  tags: [
    "object",
    "main",
    "无参方法",
    "自增自减",
    "increment",
    "getter",
    "setter",
    "取值器",
    "改值器",
    "var字段",
    "val字段",
    "private字段",
    "主构造器",
    "辅助构造器",
    "this",
    "Scala与Java对比",
    "AI编程"
  ],
  summary: [
    "本节课主要讲解 Scala 与 Java 在类、对象、方法、字段、取值器、改值器和构造器方面的区别。",
    "老师比较了 Java 和 Scala 程序入口的不同，说明 Scala 中 object 常作为应用程序入口点。",
    "课堂讲解了简单类和无参方法，无参方法调用时通常可以省略括号，方法默认公有。",
    "本节课说明 Scala 没有 Java 的 ++ 和 --，如果需要自增或自减，需要使用 += 或自定义方法。",
    "老师重点讲解 getter 和 setter，说明 Scala 对字段会自动生成取值器和改值器。",
    "课堂说明 var 字段通常有 getter 和 setter，val 字段通常只有 getter，private 字段访问方法也受权限限制。",
    "最后讲解主构造器和辅助构造器，说明类名后的参数就是主构造器参数，辅助构造器第一行必须调用已有构造器。"
  ],
  keyPoints: [
    {
      title: "Scala 文件可包含多个类和对象",
      content: "Scala 一个源文件中可以包含多个类和多个对象。",
      javaCompare: "Java 中一个 public 类通常对应一个文件。"
    },
    {
      title: "程序入口区别",
      content: "Scala 程序入口通常写在 object 的 main 方法中。",
      javaCompare: "Java 程序入口通常写在测试类或某个 class 的 main 方法中。"
    },
    {
      title: "对象可以独立存在",
      content: "Scala object 可以独立存在，包含属性和方法，不需要 new。",
      javaCompare: "Java 中对象通常由 class 通过 new 创建。"
    },
    {
      title: "无参方法",
      content: "无参方法没有参数列表，调用时通常可以省略括号。",
      javaCompare: "Java 方法调用通常写括号。"
    },
    {
      title: "字段需要初始化",
      content: "Scala 字段声明时通常需要初始化，便于编译器推断类型。",
      javaCompare: "Java 字段可以有默认值，但 Scala 更强调明确初始化。"
    },
    {
      title: "方法默认公有",
      content: "Scala 方法没有写修饰符时，通常可以理解为公有。",
      javaCompare: "Java 不写修饰符时通常是默认访问权限。"
    },
    {
      title: "没有 ++ 和 --",
      content: "Scala 没有 Java 中的自增自减运算符，常用 += 1 或自定义方法替代。",
      javaCompare: "Java 支持 i++ 和 i--。"
    },
    {
      title: "有参方法调用",
      content: "方法有参数时，调用处需要传入对应参数。",
      javaCompare: "Java 和 Scala 都需要参数匹配。"
    },
    {
      title: "取值器 getter",
      content: "取值器用于读取字段值，Scala 可以让字段访问看起来像直接访问属性。",
      javaCompare: "Java 中通常显式写 getAge 方法。"
    },
    {
      title: "改值器 setter",
      content: "改值器用于修改字段值，可以在赋值前加入判断逻辑。",
      javaCompare: "Java 中通常显式写 setAge 方法。"
    },
    {
      title: "自动生成 getter 和 setter",
      content: "Scala 对字段会自动生成访问方法，表面上写 p.age，底层会调用取值器。",
      javaCompare: "Java 通常需要手写或由工具生成 getter/setter。"
    },
    {
      title: "var 字段",
      content: "var 字段通常既能读取也能修改，因此有 getter 和 setter。",
      javaCompare: ""
    },
    {
      title: "val 字段",
      content: "val 字段是不可变值，通常只有 getter，没有 setter。",
      javaCompare: "Java 中类似 final 字段不能重新赋值。"
    },
    {
      title: "private 字段",
      content: "private 字段的访问方法也会受到私有权限限制。",
      javaCompare: "Java private 字段也只能在类内部直接访问。"
    },
    {
      title: "主构造器",
      content: "Scala 类名后面的参数列表就是主构造器参数。",
      javaCompare: "Java 需要单独写构造方法。"
    },
    {
      title: "辅助构造器",
      content: "辅助构造器使用 this 定义，提供更多对象创建方式。",
      javaCompare: "Java 也可以重载构造方法。"
    },
    {
      title: "辅助构造器第一行规则",
      content: "Scala 辅助构造器第一行必须调用主构造器或其他辅助构造器。",
      javaCompare: "Java 子类构造器第一行常调用 super 或 this。"
    },
    {
      title: "Scala 简洁性",
      content: "Scala 可以用一行类参数完成 Java 中字段、构造器、getter、setter 的大量代码。",
      javaCompare: "Java 写法更显式，代码量更大。"
    },
    {
      title: "AI 编程提醒",
      content: "AI 插件可以提高效率，但需要先理解代码逻辑，不能完全依赖生成结果。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "Scala 程序入口",
      code: `object Main {
  def main(args: Array[String]): Unit = {
    println("Hello Scala")
  }
}`,
      explanation: "Scala 程序入口通常写在 object 中。"
    },
    {
      title: "无参方法",
      code: `class Counter {
  private var value = 0

  def current = value
}

val c = new Counter
println(c.current)`,
      explanation: "current 没有参数，调用时可以不写括号。"
    },
    {
      title: "自定义加一方法",
      code: `class Counter {
  private var value = 0

  def increment(): Unit = {
    value += 1
  }

  def current = value
}`,
      explanation: "Scala 没有 ++，可以自己定义 increment 方法。"
    },
    {
      title: "自定义 getter 和 setter",
      code: `class Person {
  private var privateAge = 0

  def age = privateAge

  def age_=(newValue: Int): Unit = {
    if (newValue > privateAge) {
      privateAge = newValue
    }
  }
}`,
      explanation: "通过自定义 setter，可以限制年龄只能增大。"
    },
    {
      title: "主构造器",
      code: `class Person(val name: String, var age: Int)

val p = new Person("Tom", 20)
println(p.name)
println(p.age)`,
      explanation: "name 是只读字段，age 是可变字段。"
    },
    {
      title: "辅助构造器",
      code: `class Person(val name: String, var age: Int) {
  def this(name: String) = {
    this(name, 0)
  }
}

val p1 = new Person("Tom", 20)
val p2 = new Person("Jerry")`,
      explanation: "辅助构造器提供了只传 name 的对象创建方式。"
    },
    {
      title: "val 只有 getter",
      code: `class Student {
  val school = "Scala School"
}

val s = new Student
println(s.school)`,
      explanation: "school 是 val，可以读取，不能重新赋值。"
    }
  ],
  quiz: [
    {
      question: "Scala 程序入口通常写在哪里？",
      options: ["object 中", "图片中", "数据库中", "压缩包中"],
      answer: "object 中",
      explanation: "Scala 中 object 常作为应用程序入口点。"
    },
    {
      question: "Scala 中是否有 Java 那样的 ++ 自增运算符？",
      options: ["没有", "有，完全一样", "只能在图片中使用", "只能用于字符串"],
      answer: "没有",
      explanation: "Scala 没有 ++ 和 --，通常使用 += 1 或自定义方法。"
    },
    {
      question: "val 字段通常有什么访问方法？",
      options: ["只有 getter", "只有 setter", "getter 和 setter 都没有", "只能删除"],
      answer: "只有 getter",
      explanation: "val 是不可变值，通常只有取值器，没有改值器。"
    },
    {
      question: "var 字段通常有什么访问方法？",
      options: ["getter 和 setter", "只有 getter", "只有 setter", "没有任何方法"],
      answer: "getter 和 setter",
      explanation: "var 可读可写，通常自动生成 getter 和 setter。"
    },
    {
      question: "Scala 主构造器参数放在哪里？",
      options: ["类名后面", "文件最后", "注释里", "import 后面"],
      answer: "类名后面",
      explanation: "Scala 类名后面的参数列表就是主构造器参数。"
    },
    {
      question: "辅助构造器第一行必须做什么？",
      options: ["调用主构造器或其他辅助构造器", "删除对象", "输出图片", "创建数据库"],
      answer: "调用主构造器或其他辅助构造器",
      explanation: "Scala 辅助构造器第一行必须调用已有构造器。"
    }
  ],
  dragMatch: [
    { left: "object", right: "Scala 应用程序入口常用结构" },
    { left: "main", right: "程序入口方法" },
    { left: "无参方法", right: "没有参数的方法" },
    { left: "increment", right: "自定义加一方法" },
    { left: "getter", right: "取值器" },
    { left: "setter", right: "改值器" },
    { left: "var", right: "自动生成 getter 和 setter" },
    { left: "val", right: "通常只有 getter" },
    { left: "private", right: "私有访问权限" },
    { left: "主构造器", right: "类名后面的参数列表" },
    { left: "辅助构造器", right: "使用 this 定义" },
    { left: "this", right: "当前对象或构造器调用" }
  ],
  flow: {
    title: "Getter/Setter 流程",
    description: "展示字段访问时底层 getter 和 setter 的调用过程。",
    steps: [
      "对象调用字段 age",
      "表面上写 p.age",
      "底层调用 getter",
      "返回字段值",
      "如果写 p.age = 20",
      "底层调用 setter",
      "更新字段值"
    ]
  },
  exercises: [
    {
      question: "写一个 Counter 类，包含私有变量 value 和无参方法 current。",
      answer: `class Counter {
  private var value = 0

  def current = value
}`
    },
    {
      question: "给 Counter 添加 increment 方法，让 value 加 1。",
      answer: `class Counter {
  private var value = 0

  def increment(): Unit = {
    value += 1
  }

  def current = value
}`
    },
    {
      question: "写一个 Person 类，使用主构造器包含 name 和 age。",
      answer: "class Person(val name: String, var age: Int)"
    },
    {
      question: "给 Person 添加辅助构造器，只传入 name，年龄默认为 0。",
      answer: `class Person(val name: String, var age: Int) {
  def this(name: String) = {
    this(name, 0)
  }
}`
    },
    {
      question: "写一个自定义 setter，要求年龄只能变大，不能变小。",
      answer: `class Person {
  private var privateAge = 0

  def age = privateAge

  def age_=(newValue: Int): Unit = {
    if (newValue > privateAge) {
      privateAge = newValue
    }
  }
}`
    }
  ],
  conclusion: [
    "Scala 一个源文件可以包含多个类和对象。",
    "Scala 中 object 常作为程序入口点。",
    "无参方法调用时通常可以省略括号。",
    "Scala 没有 Java 中的 ++ 和 --。",
    "有参数的方法调用时必须对应传参。",
    "Scala 字段会自动生成 getter 和 setter。",
    "var 字段通常有 getter 和 setter。",
    "val 字段通常只有 getter，没有 setter。",
    "私有字段的访问方法也会受到私有权限限制。",
    "可以重写 getter 和 setter 来控制字段访问逻辑。",
    "类名后的参数列表就是主构造器。",
    "辅助构造器使用 this，第一行必须调用已有构造器。",
    "Scala 可以用一行类参数完成 Java 中字段、构造器、getter、setter 的大量代码。"
  ]
},
  {
  id: "scala-2026-04-09-companion-apply-private",
  title: "派生类与派生对象的私有属性及相关方法",
  chapter: "第六章 Scala 伴生类、伴生对象与 apply 方法",
  date: "2026-04-09",
  tags: [
    "伴生类",
    "伴生对象",
    "private",
    "私有属性",
    "静态方法",
    "静态属性",
    "类级别内容",
    "主构造器",
    "构造参数",
    "val参数",
    "var参数",
    "apply",
    "工厂方法",
    "参数匹配",
    "new",
    "对象创建",
    "Scala与Java对比"
  ],
  summary: [
    "本节课主要讲解伴生类、伴生对象、私有属性、类级别方法、主构造器参数、属性升级和 apply 方法。",
    "老师说明 private 属性通常只能在定义它的类体内部访问，但伴生类和伴生对象可以互相访问私有成员。",
    "课堂把伴生对象和 Java 中的静态方法、静态属性对比，说明 Scala 通常用 object 存放类级别内容。",
    "本节课讲解了主构造器参数，说明参数前没有 val 或 var 时只是构造参数，加上 val 或 var 后会升级为字段。",
    "课堂重点讲解 apply 方法，说明 PlayTest(...) 会调用伴生对象中的 apply 方法并返回类对象。",
    "老师布置学习任务，让同学通过豆包、通义千问、百度、菜鸟教程和 B 站总结 apply 方法和伴生对象用法。"
  ],
  keyPoints: [
    {
      title: "私有属性访问范围",
      content: "private 属性通常只能在定义它的类体结构中直接访问。",
      javaCompare: "Java private 字段也只能在类内部直接访问。"
    },
    {
      title: "伴生类和伴生对象",
      content: "同名 class 和 object 可以形成伴生类和伴生对象。",
      javaCompare: "Java 没有完全一样的伴生对象机制。"
    },
    {
      title: "伴生对象访问私有成员",
      content: "伴生对象可以访问伴生类的 private 属性或 private 方法。",
      javaCompare: "普通 Java 类外对象不能直接访问 private 字段。"
    },
    {
      title: "伴生类访问伴生对象私有成员",
      content: "伴生类和伴生对象可以互相访问私有成员，体现二者一体关系。",
      javaCompare: ""
    },
    {
      title: "类体以外不可见",
      content: "如果不是伴生关系，其他类或对象仍然不能访问 private 成员。",
      javaCompare: ""
    },
    {
      title: "伴生对象类似静态成员容器",
      content: "Scala 没有传统 Java 的 static，类似静态方法和静态属性常放在伴生对象中。",
      javaCompare: "Java 使用 static，Scala 使用 object 表达类似功能。"
    },
    {
      title: "类级别内容",
      content: "伴生对象中的方法和属性更像类级别内容，而不是某个实例对象自己的内容。",
      javaCompare: ""
    },
    {
      title: "主构造器参数",
      content: "类名后面的参数列表就是主构造器参数。",
      javaCompare: "Java 中构造器需要单独定义。"
    },
    {
      title: "构造参数和字段区别",
      content: "没有 val 或 var 的参数只是构造参数，不一定能作为字段直接访问。",
      javaCompare: ""
    },
    {
      title: "参数升级为字段",
      content: "参数前加 val 或 var 后，会升级为对象字段，val 只读，var 可读可写。",
      javaCompare: "Java 通常需要单独声明字段。"
    },
    {
      title: "apply 方法",
      content: "apply 是常写在伴生对象中的特殊方法，可用于创建对象。",
      javaCompare: "Java 通常直接使用 new 或工厂方法。"
    },
    {
      title: "apply 返回类对象",
      content: "伴生对象中的 apply 方法通常返回对应的类对象。",
      javaCompare: ""
    },
    {
      title: "apply 参数匹配",
      content: "可以定义多个 apply，根据参数数量或类型匹配不同创建方式。",
      javaCompare: "类似 Java 方法重载。"
    },
    {
      title: "不写 new 的原因",
      content: "PlayTest(...) 看起来没有 new，但实际上调用的是 PlayTest.apply(...)。",
      javaCompare: ""
    },
    {
      title: "伴生对象创建类对象",
      content: "可以用伴生对象的方法创建类对象，再用类对象调用类中的方法。",
      javaCompare: ""
    },
    {
      title: "apply 方法位置",
      content: "apply 方法通常写在伴生对象中，而不是随意写在其他地方。",
      javaCompare: ""
    },
    {
      title: "学习任务",
      content: "老师要求同学总结伴生对象、private 访问和 apply 方法，并整理到笔记本。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "伴生对象访问伴生类私有属性",
      code: `class Box {
  private val color = "blue"
}

object Box {
  def printColor(box: Box): Unit = {
    println(box.color)
  }
}

val b = new Box
Box.printColor(b)`,
      explanation: "伴生对象可以访问伴生类的私有属性。"
    },
    {
      title: "伴生类访问伴生对象私有属性",
      code: `class Box {
  def showSecret(): Unit = {
    println(Box.secret)
  }
}

object Box {
  private val secret = "companion secret"
}

val b = new Box
b.showSecret()`,
      explanation: "伴生类也可以访问伴生对象的私有成员。"
    },
    {
      title: "构造参数没有升级为字段",
      code: `class PlayTest(name: String, age: Int)

// val p = new PlayTest("Tom", 20)
// p.name  // 不能直接访问`,
      explanation: "没有 val 或 var 时，参数只是构造参数。"
    },
    {
      title: "构造参数升级为字段",
      code: `class PlayTest(val name: String, var age: Int)

val p = new PlayTest("Tom", 20)
println(p.name)
println(p.age)`,
      explanation: "加上 val 或 var 后，参数变成对象字段。"
    },
    {
      title: "apply 创建对象",
      code: `class PlayTest(val name: String, var age: Int)

object PlayTest {
  def apply(name: String, age: Int): PlayTest = {
    new PlayTest(name, age)
  }
}

val p = PlayTest("Tom", 20)
println(p.name)`,
      explanation: "PlayTest(\"Tom\", 20) 会调用伴生对象的 apply 方法。"
    },
    {
      title: "多个 apply 方法",
      code: `class PlayTest(val name: String, var age: Int)

object PlayTest {
  def apply(name: String): PlayTest = {
    new PlayTest(name, 0)
  }

  def apply(name: String, age: Int): PlayTest = {
    new PlayTest(name, age)
  }
}

val p1 = PlayTest("Tom")
val p2 = PlayTest("Jerry", 20)`,
      explanation: "根据参数数量不同，调用不同的 apply 方法。"
    }
  ],
  quiz: [
    {
      question: "伴生类和伴生对象的名称有什么特点？",
      options: ["名称相同", "必须不同", "只能是数字", "不能出现在同一个项目"],
      answer: "名称相同",
      explanation: "同名 class 和 object 可以形成伴生关系。"
    },
    {
      question: "伴生对象是否可以访问伴生类的 private 成员？",
      options: ["可以", "不可以", "只能访问 public", "只能访问图片"],
      answer: "可以",
      explanation: "伴生对象和伴生类关系紧密，可以互相访问私有成员。"
    },
    {
      question: "Scala 中类似 Java static 的内容通常放在哪里？",
      options: ["伴生对象中", "普通图片中", "数据库中", "压缩包中"],
      answer: "伴生对象中",
      explanation: "Scala 没有传统 static，通常用 object 存放类级别内容。"
    },
    {
      question: "如果构造参数前加上 val 或 var，会发生什么？",
      options: ["参数升级为字段属性", "参数被删除", "类不能创建", "只能输出字符串"],
      answer: "参数升级为字段属性",
      explanation: "val 或 var 会让构造参数成为对象字段。"
    },
    {
      question: "PlayTest(\"Tom\", 20) 在有伴生对象 apply 方法时，本质上调用什么？",
      options: ["PlayTest.apply(\"Tom\", 20)", "delete PlayTest", "new String", "println only"],
      answer: "PlayTest.apply(\"Tom\", 20)",
      explanation: "省略 new 的写法通常会调用伴生对象中的 apply 方法。"
    },
    {
      question: "apply 方法通常返回什么？",
      options: ["类对象", "图片", "数据库连接名", "压缩文件"],
      answer: "类对象",
      explanation: "伴生对象中的 apply 常用于创建并返回类对象。"
    }
  ],
  dragMatch: [
    { left: "companion class", right: "伴生类" },
    { left: "companion object", right: "伴生对象" },
    { left: "private", right: "私有成员" },
    { left: "static 思想", right: "类级别内容" },
    { left: "val 参数", right: "只读字段" },
    { left: "var 参数", right: "可读可写字段" },
    { left: "apply", right: "创建对象的特殊方法" },
    { left: "new", right: "传统创建对象方式" },
    { left: "PlayTest(...)", right: "调用 apply 的简写" },
    { left: "主构造器", right: "类名后的参数列表" },
    { left: "参数匹配", right: "根据参数数量或类型选择方法" },
    { left: "工厂方法", right: "创建对象的方法" }
  ],
  flow: {
    title: "apply 方法调用流程",
    description: "展示 PlayTest(...) 调用伴生对象 apply 方法的流程。",
    steps: [
      "写出 PlayTest(\"Tom\", 20)",
      "编译器查找 PlayTest 伴生对象",
      "找到 apply(name, age)",
      "apply 内部调用 new PlayTest(name, age)",
      "返回 PlayTest 类对象",
      "用对象调用类中的方法"
    ]
  },
  exercises: [
    {
      question: "写一个 Box 类和伴生对象，让伴生对象访问类的私有属性。",
      answer: `class Box {
  private val color = "blue"
}

object Box {
  def printColor(box: Box): Unit = {
    println(box.color)
  }
}`
    },
    {
      question: "写一个类 PlayTest，让构造参数 name 和 age 成为字段。",
      answer: "class PlayTest(val name: String, var age: Int)"
    },
    {
      question: "给 PlayTest 写伴生对象，并用 apply 创建对象。",
      answer: `class PlayTest(val name: String, var age: Int)

object PlayTest {
  def apply(name: String, age: Int): PlayTest = {
    new PlayTest(name, age)
  }
}`
    },
    {
      question: "写两个 apply 方法，分别支持只传 name 和传 name + age。",
      answer: `class PlayTest(val name: String, var age: Int)

object PlayTest {
  def apply(name: String): PlayTest = {
    new PlayTest(name, 0)
  }

  def apply(name: String, age: Int): PlayTest = {
    new PlayTest(name, age)
  }
}`
    },
    {
      question: "说明 new PlayTest(\"Tom\", 20) 和 PlayTest(\"Tom\", 20) 的区别。",
      answer: "new PlayTest(\"Tom\", 20) 是直接调用类构造器创建对象；PlayTest(\"Tom\", 20) 是调用伴生对象中的 apply 方法，再由 apply 返回类对象。"
    }
  ],
  conclusion: [
    "private 成员通常只能在类体内部访问。",
    "伴生类和伴生对象可以互相访问私有成员。",
    "Scala 没有传统 Java static，类似静态方法和静态属性通常放在伴生对象中。",
    "伴生对象是类级别内容的重要承载位置。",
    "类名后的参数列表是主构造器参数。",
    "参数前没有 val 或 var 时，只是构造参数。",
    "参数前加 val 或 var 后，会升级为字段属性。",
    "apply 方法通常写在伴生对象中。",
    "PlayTest(...) 这种写法本质上调用 PlayTest.apply(...)。",
    "apply 方法常用于创建并返回类对象。",
    "多个 apply 方法可以根据参数数量或类型进行匹配。",
    "学习伴生类和伴生对象时，重点是理解 private 访问、apply 位置和对象创建流程。"
  ]
},
  {
  id: "scala-2026-04-09-companion-constructors-abstract",
  title: "Scala课程知识点讲解",
  chapter: "第六章 Scala 伴生对象、构造器与抽象类",
  date: "2026-04-09",
  tags: [
    "主构造器",
    "辅助构造器",
    "class",
    "object",
    "伴生对象",
    "伴生类",
    "单例对象",
    "静态成员",
    "非静态成员",
    "val字段",
    "private字段",
    "getter",
    "setter",
    "抽象类",
    "抽象方法",
    "接口",
    "trait",
    "面向对象",
    "Scala与Java对比"
  ],
  summary: [
    "本节课主要讲解 Scala 与 Java 在构造对象、类成员、静态成员、伴生对象、单例对象和抽象类方面的区别。",
    "老师提醒同学带好笔记本、实验报告和实验报告指导书，后续会检查笔记并进入实验课阶段。",
    "课堂重点对比 Java 构造方法和 Scala 主构造器、辅助构造器，说明 Scala 构造器参数直接写在类名后面。",
    "本节课讲解了伴生对象，说明 Scala 会把类似 Java 静态成员的内容放到同名 object 中。",
    "老师用班长、学委等特殊角色举例，说明伴生对象和单例对象可以表达特殊意义的对象。",
    "课堂还讲解了 val 字段、private 字段、getter/setter、方法定义中有无等号的区别。",
    "最后介绍了抽象类：抽象类用于定义规则，具体子类继承后实现规则。"
  ],
  keyPoints: [
    {
      title: "课程安排与准备",
      content: "课程已经到第六周，后续会进入实验课和考试阶段，同学需要准备笔记本、实验报告和指导书。",
      javaCompare: ""
    },
    {
      title: "Java 构造方法",
      content: "Java 中对象通常通过构造方法创建，构造方法名称和类名一致。",
      javaCompare: "Scala 使用主构造器和辅助构造器，写法更简洁。"
    },
    {
      title: "Scala 主构造器",
      content: "Scala 类名后面的参数列表就是主构造器参数。",
      javaCompare: "Java 需要单独写构造方法，Scala 可以把构造器和类定义交织在一起。"
    },
    {
      title: "Scala 辅助构造器",
      content: "辅助构造器使用 this 定义，可以根据不同参数数量创建对象。",
      javaCompare: "Java 中类似构造方法重载。"
    },
    {
      title: "参数匹配",
      content: "调用构造器时，Scala 会根据传入参数数量和类型匹配对应构造器。",
      javaCompare: ""
    },
    {
      title: "class 主要包含非静态成员",
      content: "Scala class 中主要放非静态成员，类似静态成员的内容通常放在 object 中。",
      javaCompare: "Java class 中可以同时有静态成员和非静态成员。"
    },
    {
      title: "Java 静态成员",
      content: "Java 可以使用 static 定义类级别方法或属性，通过类名直接调用。",
      javaCompare: "Scala 不用 static，通常用 object 实现类似功能。"
    },
    {
      title: "伴生对象",
      content: "同名 class 和 object 可以形成伴生关系，object 可存放类级别工具方法。",
      javaCompare: "Java 没有完全相同的伴生对象机制。"
    },
    {
      title: "伴生对象与伴生类交互",
      content: "伴生对象和伴生类关系紧密，可以互相访问信息，从而把普通对象逻辑和类级别逻辑拆开。",
      javaCompare: ""
    },
    {
      title: "单例对象",
      content: "object 可以定义单例对象，表示程序中唯一实例，不需要 new。",
      javaCompare: "Java 中实现单例通常需要手写单例模式。"
    },
    {
      title: "单例对象用途",
      content: "单例对象可用于存放工具函数、常量、唯一服务或程序入口。",
      javaCompare: ""
    },
    {
      title: "val 属性不需要 setter",
      content: "val 字段不可变，通常只有 getter，不需要 setter。",
      javaCompare: "Java 中类似 final 字段不能重新赋值。"
    },
    {
      title: "private 私有属性",
      content: "private 字段只能在类体内部直接访问，类外需要通过方法间接访问。",
      javaCompare: "Java private 字段也需要 getter 或其他方法访问。"
    },
    {
      title: "方法有等号和无等号",
      content: "有等号的方法通常强调返回结果，无等号方法通常不返回有意义值或容易造成理解混乱。",
      javaCompare: "Java 方法通过返回类型和 return 表示返回值。"
    },
    {
      title: "class 中的方法",
      content: "class 中用 def 定义的内容通常称为方法，属于对象行为的一部分。",
      javaCompare: ""
    },
    {
      title: "抽象类",
      content: "抽象类用于定义规则，可以只有方法头没有方法体。",
      javaCompare: "Java 中也有 abstract class。"
    },
    {
      title: "子类实现抽象方法",
      content: "子类继承抽象类后，需要实现抽象方法，体现不同对象的具体行为。",
      javaCompare: ""
    },
    {
      title: "接口与抽象类",
      content: "接口可以理解为特殊抽象结构，Scala 后续会更多使用 trait 表达类似能力。",
      javaCompare: "Java 中 interface 是常见接口机制。"
    }
  ],
  codeExamples: [
    {
      title: "Scala 主构造器",
      code: `class Student(val name: String, var age: Int)

val s = new Student("Tom", 20)
println(s.name)
println(s.age)`,
      explanation: "类名后的参数列表就是主构造器参数。"
    },
    {
      title: "辅助构造器",
      code: `class Student(val name: String, var age: Int) {
  def this(name: String) = {
    this(name, 18)
  }
}

val s1 = new Student("Tom", 20)
val s2 = new Student("Jerry")`,
      explanation: "辅助构造器可以提供不同参数数量的创建方式。"
    },
    {
      title: "伴生类和伴生对象",
      code: `class Student(val name: String)

object Student {
  def create(name: String): Student = {
    new Student(name)
  }
}

val s = Student.create("Tom")
println(s.name)`,
      explanation: "伴生对象可以存放创建对象的工具方法。"
    },
    {
      title: "单例对象存放工具函数",
      code: `object MathUtil {
  def add(a: Int, b: Int): Int = {
    a + b
  }
}

println(MathUtil.add(1, 2))`,
      explanation: "object 不需要 new，可以直接调用其中的方法。"
    },
    {
      title: "私有属性间接访问",
      code: `class Student {
  private val name = "Tom"

  def getName: String = {
    name
  }
}

val s = new Student
println(s.getName)`,
      explanation: "私有属性不能在类外直接访问，可以通过方法间接访问。"
    },
    {
      title: "抽象类和子类实现",
      code: `abstract class Animal {
  def speak(): Unit
}

class Dog extends Animal {
  def speak(): Unit = {
    println("wang")
  }
}

val dog = new Dog
dog.speak()`,
      explanation: "抽象类定义规则，子类负责具体实现。"
    }
  ],
  quiz: [
    {
      question: "Scala 主构造器通常写在哪里？",
      options: ["类名后面", "文件最后", "注释里", "import 后面"],
      answer: "类名后面",
      explanation: "Scala 类名后面的参数列表就是主构造器参数。"
    },
    {
      question: "Scala 中类似 Java 静态成员的内容通常放在哪里？",
      options: ["object 中", "图片中", "数据库中", "压缩包中"],
      answer: "object 中",
      explanation: "Scala class 中主要放非静态成员，类似静态功能通常放到 object 中。"
    },
    {
      question: "伴生对象和伴生类的名称有什么特点？",
      options: ["名称相同", "必须完全不同", "只能是数字", "不能写在同一项目中"],
      answer: "名称相同",
      explanation: "同名 class 和 object 可以形成伴生关系。"
    },
    {
      question: "val 字段通常是否需要 setter？",
      options: ["不需要", "必须需要", "只能有 setter 没有 getter", "不能读取"],
      answer: "不需要",
      explanation: "val 是不可变字段，通常只有 getter，没有 setter。"
    },
    {
      question: "私有属性如果要在类外访问，通常应该怎么做？",
      options: ["提供方法间接访问", "直接随便访问", "删除 private", "改成图片"],
      answer: "提供方法间接访问",
      explanation: "private 字段类外不能直接访问，可以通过公有方法间接读取。"
    },
    {
      question: "抽象类的作用是什么？",
      options: ["定义规则，让子类实现", "删除对象", "只能输出图片", "不能被继承"],
      answer: "定义规则，让子类实现",
      explanation: "抽象类可以只定义方法头，让不同子类实现具体行为。"
    }
  ],
  dragMatch: [
    { left: "主构造器", right: "类名后的参数列表" },
    { left: "辅助构造器", right: "使用 this 定义" },
    { left: "class", right: "主要放非静态成员" },
    { left: "object", right: "可放类似静态成员的内容" },
    { left: "伴生对象", right: "与伴生类同名的 object" },
    { left: "单例对象", right: "程序中唯一实例" },
    { left: "val", right: "不可变字段" },
    { left: "private", right: "私有访问" },
    { left: "getter", right: "取值方法" },
    { left: "setter", right: "改值方法" },
    { left: "abstract class", right: "抽象类" },
    { left: "trait/interface", right: "接口或特质思想" }
  ],
  flow: {
    title: "伴生对象创建对象流程",
    description: "展示通过伴生对象创建类对象的过程。",
    steps: [
      "定义 class Student",
      "定义同名 object Student",
      "在 object 中写 create 方法",
      "create 方法内部 new Student",
      "调用 Student.create",
      "得到 Student 类对象"
    ]
  },
  exercises: [
    {
      question: "写一个 Student 类，使用主构造器包含 name 和 age。",
      answer: "class Student(val name: String, var age: Int)"
    },
    {
      question: "给 Student 添加辅助构造器，只传入 name，年龄默认为 18。",
      answer: `class Student(val name: String, var age: Int) {
  def this(name: String) = {
    this(name, 18)
  }
}`
    },
    {
      question: "写一个伴生对象 Student，提供 create 方法创建 Student 对象。",
      answer: `class Student(val name: String)

object Student {
  def create(name: String): Student = {
    new Student(name)
  }
}`
    },
    {
      question: "写一个单例对象 MathUtil，包含加法方法。",
      answer: `object MathUtil {
  def add(a: Int, b: Int): Int = {
    a + b
  }
}`
    },
    {
      question: "写一个抽象类 Animal 和子类 Dog，让 Dog 实现 speak 方法。",
      answer: `abstract class Animal {
  def speak(): Unit
}

class Dog extends Animal {
  def speak(): Unit = {
    println("wang")
  }
}`
    }
  ],
  conclusion: [
    "Java 通过构造方法创建对象，Scala 有主构造器和辅助构造器。",
    "Scala 主构造器直接写在类名后面。",
    "辅助构造器使用 this，可以根据参数数量创建对象。",
    "Scala class 主要包含非静态成员。",
    "Scala object 可以承担类似 Java 静态成员的职责。",
    "同名 class 和 object 可以形成伴生关系。",
    "单例对象可以存放工具函数、常量或唯一服务。",
    "val 字段不可变，通常不需要 setter。",
    "private 字段类外不可见，需要通过方法间接访问。",
    "抽象类用于定义规则，子类负责具体实现。",
    "学习 Scala 面向对象时，要重点理解 class、object、伴生对象和抽象类之间的关系。"
  ]
},
  {
  id: "scala-2026-04-16-pattern-case-classes",
  title: "Scala编程相关知识讲解",
  chapter: "第七章 Scala 模式匹配、样例类与样例对象",
  date: "2026-04-16",
  tags: [
    "object",
    "参数传递",
    "引用类型",
    "代码复用",
    "AI辅助编程",
    "apply",
    "模式匹配",
    "match",
    "case",
    "默认匹配",
    "模式守卫",
    "Any",
    "Array匹配",
    "List匹配",
    "Tuple匹配",
    "Class匹配",
    "Option匹配",
    "case class",
    "样例类",
    "case object",
    "样例对象",
    "copy",
    "equals",
    "hashCode",
    "字符串插值",
    "trait",
    "override",
    "抽象方法",
    "实验报告",
    "考试安排"
  ],
  summary: [
    "本节课主要围绕 Scala 中的对象、类、参数传递、模式匹配、模式守卫、样例类和样例对象展开。",
    "老师回顾了 Java 和 Scala 在抽象类、重写、类和对象方面的区别，强调 Scala 中 object 是非常重要的概念。",
    "课堂讲解了参数传递，说明数组、对象、类对象等引用类型可以携带更多信息，有利于代码复用和结构设计。",
    "本节课重点讲解模式匹配，Scala 使用 match 和 case 从第一个分支开始匹配，成功后执行对应逻辑。",
    "老师说明 Scala 的模式匹配不仅能匹配值，还能匹配 Array、List、Tuple、Class、Option 等结构。",
    "课堂讲解了模式守卫，即在 case 后增加 if 条件，让匹配过程更精确。",
    "后半部分重点讲解样例类 case class，说明样例类适合保存结构化数据，创建对象时通常不需要 new。",
    "老师还讲解了样例对象 case object，它是没有主构造器的单例对象，常用于固定选项或消息传递。",
    "本节课最后说明第八周交实验报告一，第十周交实验报告二，测试内容不考。"
  ],
  keyPoints: [
    {
      title: "抽象方法与重写",
      content: "如果类或对象继承了带抽象方法的父类或特质，就需要使用 override 补充具体方法体。",
      javaCompare: "Java 中子类也必须实现父类或接口中的抽象方法。"
    },
    {
      title: "Scala 中 object 的重要性",
      content: "object 可以作为程序入口、工具方法容器、全局对象、伴生对象或单例对象。",
      javaCompare: "Java 中类似静态方法通常写在 class 中并用 static 修饰。"
    },
    {
      title: "class 与 object 职责区分",
      content: "模块内部普通功能适合放在 class 中，全局工具和跨模块消息传递适合放在 object 中。",
      javaCompare: ""
    },
    {
      title: "MVC 与消息传递",
      content: "不同层之间需要传递消息，参数列表就是消息传递的重要形式。",
      javaCompare: ""
    },
    {
      title: "常规参数",
      content: "Int、Double、String 等常规参数通常是局部变量，适合简单计算。",
      javaCompare: "Java 中普通参数也通常按方法局部变量理解。"
    },
    {
      title: "引用类型参数",
      content: "数组、对象、类对象等引用类型参数可以携带更多信息，例如 Point 对象比单独 x、y 更有表达力。",
      javaCompare: "Java 中对象参数也能携带属性和方法。"
    },
    {
      title: "参数优化与代码复用",
      content: "好的参数设计可以提高代码复用率，减少重复逻辑，并支持后续扩展。",
      javaCompare: ""
    },
    {
      title: "AI 辅助编程",
      content: "AI 可以帮助生成代码和项目结构，但学习者必须能看懂并修改生成的代码。",
      javaCompare: ""
    },
    {
      title: "apply 方法回顾",
      content: "不写 new 的对象创建方式通常与伴生对象中的 apply 方法有关。",
      javaCompare: "Java 中更常见的是直接 new 或工厂方法。"
    },
    {
      title: "模式匹配 match",
      content: "Scala 使用 match 进行模式匹配，根据不同输入执行不同分支。",
      javaCompare: "Java 中 switch 有相似作用，但 Scala match 更强。"
    },
    {
      title: "case 分支",
      content: "每个匹配分支用 case 声明，匹配成功后执行右侧代码。",
      javaCompare: "Java switch 中使用 case，但通常还需要 break。"
    },
    {
      title: "默认分支",
      content: "case _ 表示默认匹配，前面都不匹配时执行。",
      javaCompare: "类似 Java switch 中的 default。"
    },
    {
      title: "模式匹配不需要 break",
      content: "Scala match 匹配成功后不会像 Java switch 那样继续向下穿透。",
      javaCompare: "Java switch 传统写法通常需要 break。"
    },
    {
      title: "模式守卫",
      content: "模式守卫是在 case 后添加 if 条件，用于进一步筛选匹配结果。",
      javaCompare: ""
    },
    {
      title: "匹配类型",
      content: "Scala 可以对 String、Int、Array、List、Tuple、Class 等类型进行匹配。",
      javaCompare: "Java switch 不能直接完成这么多结构匹配。"
    },
    {
      title: "Any 类型",
      content: "Any 是 Scala 所有类型的父类，可以接收任意类型，常用于演示类型匹配。",
      javaCompare: "Java 中 Object 是多数对象类型的父类，但基本类型处理方式不同。"
    },
    {
      title: "样例类 case class",
      content: "样例类使用 case class 定义，适合快速保存结构化数据。",
      javaCompare: "Java 中通常需要手写类、构造器、getter、equals 等代码。"
    },
    {
      title: "样例类不需要 new",
      content: "样例类会自动生成伴生对象和 apply 方法，因此创建对象时通常不需要 new。",
      javaCompare: ""
    },
    {
      title: "样例类自动生成方法",
      content: "样例类自动生成 apply、toString、equals、hashCode、copy 等方法。",
      javaCompare: "Java 中这些方法通常需要手写或由 IDE 生成。"
    },
    {
      title: "copy 方法",
      content: "copy 可以复制样例类对象，并只修改部分字段。",
      javaCompare: ""
    },
    {
      title: "样例类与模式匹配",
      content: "样例类可以在 match 中直接拆开字段，非常适合识别不同数据结构。",
      javaCompare: ""
    },
    {
      title: "字符串插值",
      content: "Scala 可以使用 s\"...$name...\" 的形式把变量值嵌入字符串。",
      javaCompare: "Java 中常用字符串拼接或格式化方法。"
    },
    {
      title: "样例对象 case object",
      content: "case object 是没有主构造器和参数的单例对象，适合表示固定值或消息类型。",
      javaCompare: ""
    },
    {
      title: "样例对象与特质",
      content: "样例对象常与 trait 配合使用，例如 Male 和 Female 作为 Sex 的两个固定取值。",
      javaCompare: "Java 中可用枚举或接口实现类似效果。"
    },
    {
      title: "作业与考试安排",
      content: "老师提醒样例类和模式匹配需要重点掌握，第八周交实验报告一，第十周交实验报告二。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "抽象类与重写",
      code: `abstract class Animal {
  def speak(): Unit
}

class Dog extends Animal {
  override def speak(): Unit = {
    println("wang")
  }
}`,
      explanation: "Dog 继承 Animal 后必须实现 speak 方法。"
    },
    {
      title: "伴生对象 apply 创建对象",
      code: `class Test {
  def show(): Unit = {
    println("have a class")
  }
}

object Test {
  def apply(): Test = {
    new Test
  }
}

val t = Test()
t.show()`,
      explanation: "Test() 调用伴生对象中的 apply，返回 Test 类对象。"
    },
    {
      title: "基础模式匹配",
      code: `def test(x: Int): String = {
  x match {
    case 1 => "one"
    case 2 => "two"
    case _ => "many"
  }
}`,
      explanation: "根据 x 的值匹配不同分支。"
    },
    {
      title: "模式守卫",
      code: `def abs(x: Int): Int = {
  x match {
    case n if n >= 0 => n
    case n if n < 0 => -n
  }
}`,
      explanation: "if 条件让匹配更加精确。"
    },
    {
      title: "类型匹配",
      code: `def describe(x: Any): String = {
  x match {
    case s: String => "字符串"
    case i: Int => "整数"
    case a: Array[Int] => "整数数组"
    case _ => "其他类型"
  }
}`,
      explanation: "Any 可以接收任意类型，然后通过模式匹配判断具体类型。"
    },
    {
      title: "样例类定义与创建",
      code: `case class Person(name: String, age: Int)

val p = Person("张三", 20)
println(p)`,
      explanation: "样例类创建对象时通常不需要 new。"
    },
    {
      title: "copy 方法",
      code: `case class Person(name: String, age: Int)

val p1 = Person("李四", 21)
val p2 = p1.copy(name = "王五")

println(p2)`,
      explanation: "copy 可以复制对象，并只修改部分字段。"
    },
    {
      title: "样例类模式匹配",
      code: `case class Student(name: String, age: Int)
case class Teacher(name: String, subject: String)

def identify(x: Any): String = {
  x match {
    case Student(name, age) => s"学生：$name，年龄：$age"
    case Teacher(name, subject) => s"老师：$name，学科：$subject"
    case _ => "未知身份"
  }
}`,
      explanation: "模式匹配可以直接拆开样例类中的字段。"
    },
    {
      title: "样例对象",
      code: `trait Sex
case object Male extends Sex
case object Female extends Sex

case class Person(name: String, sex: Sex)

val p1 = Person("张三", Male)
val p2 = Person("李四", Female)`,
      explanation: "Male 和 Female 是样例对象，适合表示固定选项。"
    },
    {
      title: "匹配 Array",
      code: `def greet(arr: Array[String]): String = {
  arr match {
    case Array("Hi", name) => "Hi " + name
    case Array("Hello", a, b) => "Hello " + a + " and " + b
    case _ => "unknown"
  }
}`,
      explanation: "模式匹配可以匹配数组结构。"
    }
  ],
  quiz: [
    {
      question: "Scala 模式匹配使用哪个关键字？",
      options: ["match", "loop", "class", "public"],
      answer: "match",
      explanation: "Scala 使用 match 进行模式匹配。"
    },
    {
      question: "模式匹配中的每个分支使用哪个关键字？",
      options: ["case", "var", "final", "package"],
      answer: "case",
      explanation: "每个匹配分支使用 case 声明。"
    },
    {
      question: "case _ => 的作用是什么？",
      options: ["默认匹配其他情况", "删除对象", "创建数组", "表示主构造器"],
      answer: "默认匹配其他情况",
      explanation: "_ 表示前面都不匹配时的默认情况。"
    },
    {
      question: "样例类使用什么关键字定义？",
      options: ["case class", "case object only", "new class", "private new"],
      answer: "case class",
      explanation: "样例类使用 case class 定义。"
    },
    {
      question: "样例类创建对象时通常是否需要写 new？",
      options: ["通常不需要", "必须写", "不能创建对象", "只能用 Java 创建"],
      answer: "通常不需要",
      explanation: "样例类会自动生成伴生对象和 apply 方法，因此通常不需要 new。"
    },
    {
      question: "样例类自动生成的方法不包括下面哪一项？",
      options: ["copy", "equals", "hashCode", "shutdownComputer"],
      answer: "shutdownComputer",
      explanation: "样例类会自动生成 copy、equals、hashCode 等方法，但不会生成关机方法。"
    },
    {
      question: "case object 的特点是什么？",
      options: ["单例、没有主构造器、没有参数", "必须有很多参数", "只能保存数组", "不能参与模式匹配"],
      answer: "单例、没有主构造器、没有参数",
      explanation: "样例对象是单例对象，没有主构造器，常用于固定值或消息。"
    }
  ],
  dragMatch: [
    { left: "match", right: "模式匹配关键字" },
    { left: "case", right: "匹配分支" },
    { left: "_", right: "默认匹配" },
    { left: "模式守卫", right: "case 后的 if 条件" },
    { left: "Any", right: "所有类型的父类" },
    { left: "case class", right: "样例类" },
    { left: "case object", right: "样例对象" },
    { left: "copy", right: "复制样例类对象" },
    { left: "equals", right: "比较对象是否相等" },
    { left: "hashCode", right: "哈希值方法" },
    { left: "apply", right: "创建对象的常用方法" },
    { left: "$name", right: "字符串插值取值" },
    { left: "trait", right: "特质" },
    { left: "override", right: "重写父类方法" }
  ],
  flow: {
    title: "模式匹配执行流程",
    description: "展示 match/case 按顺序匹配并返回结果的流程。",
    steps: [
      "传入一个值 x",
      "进入 x match",
      "从第一个 case 开始判断",
      "如果匹配成功，执行对应代码",
      "如果不成功，继续下一个 case",
      "如果都不匹配，进入 case _",
      "返回最终结果"
    ]
  },
  exercises: [
    {
      question: "写一个函数，根据数字 1、2 或其他情况返回不同字符串。",
      answer: `def test(x: Int): String = {
  x match {
    case 1 => "one"
    case 2 => "two"
    case _ => "many"
  }
}`
    },
    {
      question: "写一个带模式守卫的绝对值函数。",
      answer: `def abs(x: Int): Int = {
  x match {
    case n if n >= 0 => n
    case n if n < 0 => -n
  }
}`
    },
    {
      question: "定义一个样例类 Person，包含 name 和 age，并创建对象。",
      answer: `case class Person(name: String, age: Int)

val p = Person("张三", 20)`
    },
    {
      question: "使用 copy 复制一个 Person 对象，只修改名字。",
      answer: `case class Person(name: String, age: Int)

val p1 = Person("李四", 21)
val p2 = p1.copy(name = "王五")`
    },
    {
      question: "定义 Student 和 Teacher 两个样例类，并用模式匹配识别它们。",
      answer: `case class Student(name: String, age: Int)
case class Teacher(name: String, subject: String)

def identify(x: Any): String = {
  x match {
    case Student(name, age) => s"学生：$name，年龄：$age"
    case Teacher(name, subject) => s"老师：$name，学科：$subject"
    case _ => "未知身份"
  }
}`
    },
    {
      question: "定义 Sex 特质，以及 Male、Female 两个样例对象。",
      answer: `trait Sex
case object Male extends Sex
case object Female extends Sex

case class Person(name: String, sex: Sex)`
    }
  ],
  conclusion: [
    "Scala 中 object 是非常重要的概念，可以承担静态方法、全局工具和消息传递功能。",
    "参数传递不仅是传数字，也可以传数组、对象和类对象。",
    "引用类型参数能携带更多信息，有利于代码复用和结构设计。",
    "Scala 使用 match 和 case 进行模式匹配。",
    "模式匹配类似 Java 的 switch，但功能更强大。",
    "Scala 模式匹配不需要写 break。",
    "模式匹配可以匹配值、类型、数组、列表、元组、类对象和 Option。",
    "模式守卫是在 case 后添加 if 条件，类似过滤器。",
    "样例类使用 case class 定义，适合保存结构化数据。",
    "样例类创建对象通常不需要 new。",
    "样例类自动生成 apply、toString、equals、hashCode、copy 等方法。",
    "copy 可以复制对象并只修改部分字段。",
    "样例类非常适合配合模式匹配使用。",
    "样例对象使用 case object 定义，是没有主构造器的单例对象。",
    "样例对象常用于表示固定选项，例如性别、状态、消息类型。",
    "第八周交实验报告一，第十周交实验报告二。"
  ]
},
  {
  id: "scala-2026-04-21-inheritance-override-fields",
  title: "Scala 继承与 Java 继承的对比",
  chapter: "第六章 Scala 继承、重写与字段覆盖",
  date: "2026-04-21",
  tags: [
    "继承",
    "extends",
    "父类",
    "子类",
    "superclass",
    "subclass",
    "主构造器",
    "辅助构造器",
    "override",
    "overload",
    "final",
    "protected",
    "private",
    "访问权限",
    "字段重写",
    "val字段",
    "var字段",
    "Scala与Java对比"
  ],
  summary: [
    "本节课主要对比 Scala 与 Java 中的继承机制，重点讲解主构造器向父类传参、override 使用规则和字段重写。",
    "老师强调 Scala 中只有子类主构造器可以向父类主构造器传参，辅助构造器不能直接绕过主构造器传参。",
    "课堂讲解了 override 规则：重写非抽象方法或字段必须写 override，实现抽象方法时可以省略。",
    "本节课总结了 Scala 与 Java 继承的共同点，包括继承非私有非静态成员、可新增成员、可重写成员、final 限制和访问权限限制。",
    "老师重点说明 final 修饰的类不能被继承，final 修饰的方法不能被重写，protected 成员可在当前类和子类访问。",
    "后半部分讲解字段重写，子类可以用同名 val 字段重写父类 val 字段，并且必须写 override。",
    "关于 var 字段，课堂提醒其底层涉及 getter 和 setter，重写规则比 val 更复杂，需要通过实验验证。"
  ],
  keyPoints: [
    {
      title: "extends 继承",
      content: "Scala 使用 extends 表示继承，子类继承父类的成员并可以扩展自己的成员。",
      javaCompare: "Java 也使用 extends 表示类继承。"
    },
    {
      title: "主构造器向父类传参",
      content: "只有子类主构造器可以向父类主构造器传递参数。",
      javaCompare: "Java 构造器中常通过 super(...) 调用父类构造器。"
    },
    {
      title: "辅助构造器基于主构造器",
      content: "Scala 辅助构造器必须先调用本类主构造器或其他辅助构造器，不能直接绕过主构造器传父类参数。",
      javaCompare: ""
    },
    {
      title: "重写抽象方法",
      content: "当父类方法是抽象方法时，子类实现它时 override 可以省略。",
      javaCompare: "Java 中 @Override 是注解，通常建议写但不是同样的语法强制。"
    },
    {
      title: "重写非抽象方法",
      content: "父类方法已有方法体时，子类重写必须写 override。",
      javaCompare: "Java 使用 @Override 注解提示重写，Scala override 是关键字。"
    },
    {
      title: "继承共同点",
      content: "Scala 和 Java 中子类都可以继承父类非私有、非静态成员，并可增加自身成员。",
      javaCompare: "二者面向对象继承思想基本一致。"
    },
    {
      title: "private 成员不可直接继承访问",
      content: "父类 private 成员不能被子类直接访问。",
      javaCompare: "Java private 成员也不能被子类直接访问。"
    },
    {
      title: "非静态成员继承",
      content: "继承主要针对 class 中的非静态成员，Scala 中类似静态内容通常放在 object 中。",
      javaCompare: "Java 静态成员属于类本身。"
    },
    {
      title: "子类可以添加自己的成员",
      content: "子类不仅能继承父类成员，还可以添加自己的字段和方法。",
      javaCompare: ""
    },
    {
      title: "final 类",
      content: "final 修饰的类不能被继承。",
      javaCompare: "Java 中 final class 也不能被继承。"
    },
    {
      title: "final 方法或字段",
      content: "final 修饰的方法不能被重写，final 修饰的字段不能被覆盖。",
      javaCompare: ""
    },
    {
      title: "protected 成员",
      content: "protected 成员可在当前类和子类中访问。",
      javaCompare: "Java protected 也与继承和包访问有关。"
    },
    {
      title: "访问权限不能缩小",
      content: "子类重写父类成员时，访问权限不能比父类更小。",
      javaCompare: "Java 重写时也不能降低访问权限。"
    },
    {
      title: "Override 与 Overload",
      content: "Override 是重写，方法头一致、方法体不同；Overload 是重载，方法名相同、参数列表不同。",
      javaCompare: "Java 中也区分重写和重载。"
    },
    {
      title: "val 字段重写",
      content: "子类可以用同名 val 字段重写父类 val 字段，且必须写 override。",
      javaCompare: ""
    },
    {
      title: "var 字段规则复杂",
      content: "var 字段底层包含 getter 和 setter，重写规则比 val 更复杂，建议实验验证。",
      javaCompare: ""
    },
    {
      title: "继承考试重点",
      content: "主构造器传参、val 字段重写、override 必写规则是老师反复强调的考试重点。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "子类主构造器向父类传参",
      code: `class Person(val name: String)

class Student(name: String, val id: Int) extends Person(name)

val s = new Student("Tom", 1001)
println(s.name)
println(s.id)`,
      explanation: "Student 的主构造器把 name 传给父类 Person。"
    },
    {
      title: "辅助构造器调用主构造器",
      code: `class Person(val name: String)

class Student(name: String, val id: Int) extends Person(name) {
  def this(name: String) = {
    this(name, 0)
  }
}`,
      explanation: "辅助构造器先调用本类主构造器，再由主构造器完成父类传参。"
    },
    {
      title: "重写非抽象方法",
      code: `class Animal {
  def sound(): Unit = {
    println("animal sound")
  }
}

class Dog extends Animal {
  override def sound(): Unit = {
    println("bark")
  }
}`,
      explanation: "父类方法已有方法体，子类重写时必须写 override。"
    },
    {
      title: "实现抽象方法",
      code: `abstract class Animal {
  def sound(): Unit
}

class Dog extends Animal {
  def sound(): Unit = {
    println("bark")
  }
}`,
      explanation: "父类方法是抽象方法，子类实现时可以省略 override。"
    },
    {
      title: "子类添加自己的成员",
      code: `class Person {
  val name = "Tom"
}

class Student extends Person {
  val id = 1001

  def show(): Unit = {
    println(name + "," + id)
  }
}`,
      explanation: "子类继承 name，同时添加自己的 id 和 show。"
    },
    {
      title: "val 字段重写",
      code: `class Person {
  val name = "Tom"
}

class Student extends Person {
  override val name = "Peter"
}

val s = new Student
println(s.name)`,
      explanation: "子类用同名 val 字段重写父类字段，必须写 override。"
    }
  ],
  quiz: [
    {
      question: "Scala 中继承使用哪个关键字？",
      options: ["extends", "import", "package", "match"],
      answer: "extends",
      explanation: "Scala 使用 extends 表示继承。"
    },
    {
      question: "Scala 中谁能直接向父类主构造器传参？",
      options: ["子类主构造器", "任意辅助构造器", "普通方法", "注释"],
      answer: "子类主构造器",
      explanation: "只有子类主构造器能向父类主构造器传参。"
    },
    {
      question: "重写父类非抽象方法时，Scala 中必须写什么？",
      options: ["override", "new", "private", "yield"],
      answer: "override",
      explanation: "父类方法已有方法体时，子类重写必须写 override。"
    },
    {
      question: "实现父类抽象方法时，override 是否一定必须写？",
      options: ["可以省略", "一定必须写", "不能写方法体", "只能写 final"],
      answer: "可以省略",
      explanation: "重写抽象方法时，override 可以省略。"
    },
    {
      question: "final class Person 表示什么？",
      options: ["Person 不能被继承", "Person 必须被继承", "Person 是数组", "Person 是 Map"],
      answer: "Person 不能被继承",
      explanation: "final 修饰的类不能被继承。"
    },
    {
      question: "子类访问权限和父类相比应该怎样？",
      options: ["不能更小", "必须更小", "必须 private", "没有限制且越小越好"],
      answer: "不能更小",
      explanation: "子类重写时访问权限不能比父类更小。"
    }
  ],
  dragMatch: [
    { left: "extends", right: "继承关键字" },
    { left: "superclass", right: "父类 / 超类" },
    { left: "subclass", right: "子类" },
    { left: "override", right: "重写标记" },
    { left: "overload", right: "重载" },
    { left: "final class", right: "不能被继承的类" },
    { left: "final method", right: "不能被重写的方法" },
    { left: "protected", right: "当前类和子类可访问" },
    { left: "private", right: "私有成员，子类不能直接访问" },
    { left: "val 字段", right: "只读字段，可用于字段重写" },
    { left: "var 字段", right: "可读可写字段，规则较复杂" },
    { left: "主构造器", right: "能向父类构造器传参" }
  ],
  flow: {
    title: "构造器传参流程",
    description: "展示子类主构造器向父类传参的流程。",
    steps: [
      "调用 new Student(\"Tom\", 1001)",
      "进入 Student 主构造器",
      "Student 主构造器接收 name 和 id",
      "通过 extends Person(name) 把 name 传给父类",
      "父类 Person 初始化 name",
      "子类 Student 初始化 id",
      "对象创建完成"
    ]
  },
  exercises: [
    {
      question: "写一个 Person 父类和 Student 子类，子类通过主构造器向父类传递 name。",
      answer: `class Person(val name: String)

class Student(name: String, val id: Int) extends Person(name)`
    },
    {
      question: "写一个父类 Animal，包含非抽象方法 sound，再写子类 Dog 重写它。",
      answer: `class Animal {
  def sound(): Unit = {
    println("animal sound")
  }
}

class Dog extends Animal {
  override def sound(): Unit = {
    println("bark")
  }
}`
    },
    {
      question: "写一个抽象类 Animal，包含抽象方法 sound，再写子类实现它。",
      answer: `abstract class Animal {
  def sound(): Unit
}

class Dog extends Animal {
  def sound(): Unit = {
    println("bark")
  }
}`
    },
    {
      question: "写一个子类，继承父类字段并添加自己的字段。",
      answer: `class Person {
  val name = "Tom"
}

class Student extends Person {
  val id = 1001
}`
    },
    {
      question: "写一个 val 字段重写例子。",
      answer: `class Person {
  val name = "Tom"
}

class Student extends Person {
  override val name = "Peter"
}`
    }
  ],
  conclusion: [
    "Scala 和 Java 都使用继承表达父类和子类关系。",
    "Scala 使用 extends 继承父类。",
    "只有子类主构造器能向父类主构造器传参。",
    "辅助构造器基于主构造器，不能直接绕过主构造器传父类参数。",
    "重写父类抽象方法时，override 可以省略。",
    "重写父类非抽象方法或字段时，必须写 override。",
    "子类可以继承父类非私有、非静态成员。",
    "子类可以添加自己的成员。",
    "final 修饰的类不能被继承，final 修饰的方法不能被重写。",
    "protected 成员可以在当前类和子类中访问。",
    "子类重写时访问权限不能比父类更小。",
    "子类可以用同名 val 字段重写父类同名 val 字段。",
    "继承、重写、字段覆盖是面向对象考试和实验中的重点。"
  ]
},
  {
  id: "scala-2026-04-21-overriding-traits",
  title: "Scala中覆盖、重写、抽象类与特质",
  chapter: "第七章 Scala 覆盖、结构类型对象与特质",
  date: "2026-04-21",
  tags: [
    "覆盖",
    "重写",
    "val",
    "var",
    "getter",
    "setter",
    "protected",
    "结构类型对象",
    "匿名子类",
    "抽象类",
    "抽象方法",
    "抽象字段",
    "继承规则",
    "单继承",
    "trait",
    "特质",
    "with",
    "多特质",
    "代码复用",
    "Scala与Java对比"
  ],
  summary: [
    "本节课主要讲解 Scala 中覆盖与重写、val 和 var 字段规则、受保护字段、val 重写抽象 def、结构类型对象、抽象类和特质。",
    "老师澄清 val 字段底层可以理解为私有字段加 getter，var 字段底层可以理解为私有字段加 getter 和 setter。",
    "课堂强调 Scala 只提供 getter 的重写，不提供 setter 的完整重写机制，因此 val 可以重写抽象 def，而 var 不能按同样方式重写。",
    "本节课讲解了 protected 成员，它可以在当前类、子类和伴生对象相关范围内访问。",
    "课堂重点讲解结构类型对象，即使用 new 父类 { ... } 创建匿名子类对象，并在其中重写父类方法。",
    "后半部分讲解抽象类和抽象字段，说明子类需要先实现抽象内容，再定义自己的方法。",
    "最后讲解 trait 特质，说明 Scala 是单继承，但可以通过 with 混入多个特质，实现多能力复用。"
  ],
  keyPoints: [
    {
      title: "覆盖与重写",
      content: "重写通常指子类提供父类方法的新实现；覆盖常用于字段或属性层面的替换。",
      javaCompare: "Java 中也有重写和重载等概念，但 Scala 字段底层访问器使规则更特殊。"
    },
    {
      title: "val 字段底层结构",
      content: "val 字段可以理解为私有字段加 getter，没有 setter。",
      javaCompare: "Java 中类似 final 字段更偏只读。"
    },
    {
      title: "var 字段底层结构",
      content: "var 字段可以理解为私有字段加 getter 和 setter。",
      javaCompare: "Java 中通常需要显式写 get/set 方法。"
    },
    {
      title: "只提供 getter 重写",
      content: "Scala 中更容易重写 getter，不提供 setter 的完整重写机制。",
      javaCompare: ""
    },
    {
      title: "val 重写抽象 def",
      content: "val 会生成 getter，因此可以实现同名抽象 def。",
      javaCompare: ""
    },
    {
      title: "var 不能同样重写抽象 def",
      content: "var 还会生成 setter，而 Scala 不提供同样的 setter 重写方式。",
      javaCompare: ""
    },
    {
      title: "protected 字段",
      content: "protected 字段可以在当前类和子类中访问。",
      javaCompare: "Java 中 protected 也和继承访问有关。"
    },
    {
      title: "伴生对象与 protected",
      content: "伴生对象和伴生类关系紧密，可以参与访问相关受保护或私有成员。",
      javaCompare: ""
    },
    {
      title: "结构类型对象",
      content: "结构类型对象常是匿名子类对象，用于临时重写父类方法。",
      javaCompare: "Java 中匿名内部类有类似思想。"
    },
    {
      title: "结构类型对象使用条件",
      content: "当子类没有参数、没有额外属性和方法，只为更新父类方法时，可以使用结构类型对象。",
      javaCompare: ""
    },
    {
      title: "抽象类",
      content: "抽象类不能直接实例化，可以包含抽象方法和非抽象方法。",
      javaCompare: "Java 中也有 abstract class。"
    },
    {
      title: "抽象方法",
      content: "没有方法体的方法是抽象方法，子类必须提供实现。",
      javaCompare: ""
    },
    {
      title: "抽象字段",
      content: "没有初始值的字段可以理解为抽象字段，具体子类必须提供具体字段。",
      javaCompare: ""
    },
    {
      title: "子类先实现抽象内容",
      content: "子类继承抽象类时，要先实现父类抽象方法和抽象字段，再定义自身方法。",
      javaCompare: ""
    },
    {
      title: "继承规则回顾",
      content: "父类非私有、非静态成员可继承，final 和 private 会限制继承或访问。",
      javaCompare: "这些规则与 Java 继承思想基本一致。"
    },
    {
      title: "Scala 单继承",
      content: "Scala 类只能继承一个父类。",
      javaCompare: "Java 类也只能单继承。"
    },
    {
      title: "trait 特质",
      content: "trait 是 Scala 代码复用的重要结构，可以包含抽象方法和具体方法。",
      javaCompare: "Java 接口在新版本也可有默认方法，但 Scala trait 更自然地融入类体。"
    },
    {
      title: "with 混入特质",
      content: "类可以通过 with 混入一个或多个特质。",
      javaCompare: "Java 中使用 implements 实现接口。"
    },
    {
      title: "特质与接口区别",
      content: "特质不仅定义规则，也可以提供方法实现，并可以融入类体。",
      javaCompare: "Java 传统接口主要定义规则。"
    },
    {
      title: "多个特质顺序",
      content: "多个特质叠加时有调用顺序，通常后混入的特质优先执行。",
      javaCompare: ""
    },
    {
      title: "特质代码复用",
      content: "特质可用于日志、权限、校验、序列化等通用能力复用。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "val 重写抽象 def",
      code: `abstract class Person {
  def id: Int
}

class Student extends Person {
  val id = 1001
}

val s = new Student
println(s.id)`,
      explanation: "val id 底层有 getter，可以实现抽象 def id。"
    },
    {
      title: "protected 字段",
      code: `class Animal {
  protected var name = "animal"
}

class Dog extends Animal {
  def show(): Unit = {
    println(name)
  }
}`,
      explanation: "protected 字段可以在子类中访问。"
    },
    {
      title: "结构类型对象",
      code: `class Person {
  val name = "Tom"

  def greet(): Unit = {
    println("hello")
  }
}

val p = new Person {
  override def greet(): Unit = {
    println("hi")
  }
}

println(p.name)
p.greet()`,
      explanation: "p 是匿名子类对象，可以访问父类属性，也可以调用重写后的方法。"
    },
    {
      title: "抽象类和抽象字段",
      code: `abstract class Animal {
  val name: String
  def sound(): Unit
}

class Dog extends Animal {
  val name = "dog"

  def sound(): Unit = {
    println("wang")
  }
}`,
      explanation: "子类必须实现抽象字段和抽象方法。"
    },
    {
      title: "定义特质",
      code: `trait Logger {
  def log(msg: String): Unit

  def info(msg: String): Unit = {
    println("INFO: " + msg)
  }
}`,
      explanation: "特质可以同时包含抽象方法和具体方法。"
    },
    {
      title: "类混入特质",
      code: `trait Logger {
  def log(msg: String): Unit
}

class ConsoleLogger extends Logger {
  def log(msg: String): Unit = {
    println(msg)
  }
}

val logger = new ConsoleLogger
logger.log("hello")`,
      explanation: "类实现特质中的抽象方法。"
    },
    {
      title: "继承父类并混入多个特质",
      code: `class Service

trait Logger {
  def log(msg: String): Unit = println(msg)
}

trait Checker {
  def check(): Unit = println("check")
}

class UserService extends Service with Logger with Checker`,
      explanation: "Scala 只能继承一个父类，但可以混入多个特质。"
    }
  ],
  quiz: [
    {
      question: "val 字段底层主要提供什么？",
      options: ["getter", "setter only", "数据库", "图片"],
      answer: "getter",
      explanation: "val 是只读字段，底层主要提供 getter。"
    },
    {
      question: "var 字段底层通常提供什么？",
      options: ["getter 和 setter", "只有图片", "只有 class", "只能删除"],
      answer: "getter 和 setter",
      explanation: "var 可读可写，底层有 getter 和 setter。"
    },
    {
      question: "val 为什么可以重写抽象 def？",
      options: ["因为 val 会生成 getter，可以实现同名抽象方法", "因为 val 是图片", "因为 val 不能使用", "因为 val 一定是数组"],
      answer: "因为 val 会生成 getter，可以实现同名抽象方法",
      explanation: "val id 会生成 getter 方法，可以实现抽象 def id。"
    },
    {
      question: "Scala 中定义特质使用哪个关键字？",
      options: ["trait", "package", "yield", "import"],
      answer: "trait",
      explanation: "Scala 使用 trait 定义特质。"
    },
    {
      question: "Scala 中一个类可以继承几个父类？",
      options: ["一个", "无限多个 class", "不能继承", "只能继承图片"],
      answer: "一个",
      explanation: "Scala 是单继承，一个类只能继承一个父类。"
    },
    {
      question: "Scala 中一个类可以混入几个特质？",
      options: ["可以混入多个", "只能一个", "不能混入", "只能混入 private"],
      answer: "可以混入多个",
      explanation: "Scala 类可以混入任意数量的特质。"
    },
    {
      question: "特质和 Java 接口相比，Scala 特质更强在哪里？",
      options: ["可以有具体方法实现", "只能写注释", "不能被使用", "只能保存数字"],
      answer: "可以有具体方法实现",
      explanation: "Scala 特质既可以有抽象方法，也可以有具体方法。"
    }
  ],
  dragMatch: [
    { left: "val", right: "只读字段，底层有 getter" },
    { left: "var", right: "可读可写字段，底层有 getter 和 setter" },
    { left: "getter", right: "取值方法" },
    { left: "setter", right: "改值方法" },
    { left: "protected", right: "当前类和子类可访问" },
    { left: "结构类型对象", right: "匿名子类对象" },
    { left: "abstract class", right: "抽象类" },
    { left: "抽象字段", right: "没有初始值的字段" },
    { left: "trait", right: "特质" },
    { left: "with", right: "混入特质" },
    { left: "单继承", right: "只能继承一个父类" },
    { left: "多特质", right: "可以混入多个能力" }
  ],
  flow: {
    title: "val 重写抽象 def 流程",
    description: "展示 val 底层 getter 实现抽象方法的流程。",
    steps: [
      "父类定义抽象 def id",
      "子类定义 val id",
      "val 底层生成 getter",
      "getter 方法名与 def id 对应",
      "子类完成抽象方法实现",
      "对象可以访问 id"
    ]
  },
  exercises: [
    {
      question: "写一个 val 重写抽象 def 的例子。",
      answer: `abstract class Person {
  def id: Int
}

class Student extends Person {
  val id = 1001
}`
    },
    {
      question: "写一个包含 protected 字段的父类，并在子类中访问它。",
      answer: `class Animal {
  protected var name = "animal"
}

class Dog extends Animal {
  def show(): Unit = {
    println(name)
  }
}`
    },
    {
      question: "创建一个结构类型对象，重写父类方法。",
      answer: `class Person {
  val name = "Tom"

  def greet(): Unit = {
    println("hello")
  }
}

val p = new Person {
  override def greet(): Unit = {
    println("hi")
  }
}`
    },
    {
      question: "定义一个抽象类 Animal，包含抽象字段和抽象方法，并写子类实现。",
      answer: `abstract class Animal {
  val name: String
  def sound(): Unit
}

class Dog extends Animal {
  val name = "dog"

  def sound(): Unit = {
    println("wang")
  }
}`
    },
    {
      question: "定义一个特质 Logger，并写类实现它。",
      answer: `trait Logger {
  def log(msg: String): Unit
}

class ConsoleLogger extends Logger {
  def log(msg: String): Unit = {
    println(msg)
  }
}`
    },
    {
      question: "写一个类继承父类并混入两个特质。",
      answer: `class Service

trait Logger {
  def log(msg: String): Unit = println(msg)
}

trait Checker {
  def check(): Unit = println("check")
}

class UserService extends Service with Logger with Checker`
    }
  ],
  conclusion: [
    "val 字段底层可以理解为私有字段加 getter。",
    "var 字段底层可以理解为私有字段加 getter 和 setter。",
    "Scala 更容易重写 getter，不提供 setter 的完整重写机制。",
    "val 可以用来重写抽象 def。",
    "var 因为涉及 setter，不能按同样方式重写抽象 def。",
    "protected 成员可以在当前类、子类和伴生对象相关范围内访问。",
    "结构类型对象本质上是匿名子类对象。",
    "当子类只为了更新父类某个方法时，可以使用结构类型对象。",
    "抽象类可以包含抽象方法和非抽象方法。",
    "抽象字段没有初始值，具体子类必须提供字段。",
    "Scala 类只能继承一个父类。",
    "Scala 可以通过特质实现多能力混入。",
    "特质使用 trait 定义，类通过 with 混入。",
    "特质可以有抽象方法，也可以有具体方法。",
    "多个特质叠加时有调用顺序，通常后混入的特质优先执行。",
    "特质是 Scala 代码复用的重要基础单元。"
  ]
},
  {
  id: "scala-2026-04-23-traits-mixin-construction",
  title: "课程安排与 Scala 特质相关知识讲解",
  chapter: "第七章 Scala 特质、混入与构造顺序",
  date: "2026-04-23",
  tags: [
    "trait",
    "特质",
    "接口",
    "Logger",
    "抽象方法",
    "具体方法",
    "with",
    "extends",
    "混入",
    "SavingAccount",
    "Account",
    "log",
    "字段",
    "具体字段",
    "抽象字段",
    "特质构造器",
    "构造顺序",
    "共享父特质",
    "提前初始化",
    "lazy",
    "try-catch-finally",
    "异常处理",
    "self type",
    "自身类型",
    "this",
    "getMessage",
    "课程安排"
  ],
  summary: [
    "本节课主要讲解 Scala 特质 trait，包括特质与接口的区别、特质作为接口使用、带具体实现的特质和混入思想。",
    "老师说明后续课程安排：第 9 周空出，第 10 周实验，第 11 周复习，第 12 周考试，具体日期后续确定。",
    "课堂强调特质比传统接口更灵活，因为特质不仅可以有抽象方法，还可以有具体方法和字段。",
    "本节课通过 Logger 和 SavingAccount 示例说明，类继承父类后还可以混入日志特质，在余额不足时直接调用 log 方法。",
    "老师用墙体、颜色、形状和学生身份的例子解释混入思想：基础类要精简，需要什么能力就混入什么特质。",
    "课堂讲解了特质中的字段，字段可以是具体字段，也可以是抽象字段，抽象字段必须由具体类提供值。",
    "本节课重点讲解特质构造顺序：先构造超类，再构造特质，最后构造当前类；多个特质从左到右构造，共享父特质只构造一次。",
    "老师还补充了抽象字段初始化问题、lazy 延迟初始化、特质扩展、try-catch-finally 异常处理和自身类型 self type。"
  ],
  keyPoints: [
    {
      title: "课程安排",
      content: "第 9 周空出，第 10 周实验，第 11 周复习，第 12 周考试，考试日期后续再定。",
      javaCompare: ""
    },
    {
      title: "trait 特质",
      content: "Scala 使用 trait 定义特质，特质可以理解为可混入到类中的能力。",
      javaCompare: "Java 中类似接口，但 Scala 特质功能更强。"
    },
    {
      title: "特质与接口区别",
      content: "特质不仅可以有抽象方法，还可以有具体方法、字段和特质体语句。",
      javaCompare: "传统 Java 接口主要声明抽象方法。"
    },
    {
      title: "特质作为接口使用",
      content: "如果特质中只有抽象方法，就可以把它当作接口使用。",
      javaCompare: "Java 中用 implements 实现接口，Scala 中用 extends 或 with 混入特质。"
    },
    {
      title: "实现抽象方法可省略 override",
      content: "实现特质中的抽象方法时，override 可以省略。",
      javaCompare: "Java 中 @Override 是注解；Scala override 是关键字，但抽象方法实现时可省略。"
    },
    {
      title: "Scala 单继承多特质",
      content: "Scala 类只能继承一个超类，但可以混入多个特质。",
      javaCompare: "Java 类也单继承，但可以实现多个接口。"
    },
    {
      title: "带具体实现的特质",
      content: "特质可以直接定义带方法体的方法，混入类后可以直接调用。",
      javaCompare: "传统 Java 接口不能自然承担这种混入实现能力。"
    },
    {
      title: "SavingAccount 日志示例",
      content: "SavingAccount 继承 Account 并混入 Logger，余额不足时调用 log 输出提示。",
      javaCompare: ""
    },
    {
      title: "混入思想",
      content: "特质会融入类对象中，类和特质中的属性方法一起成为对象能力。",
      javaCompare: ""
    },
    {
      title: "基础类要精简",
      content: "类应尽量保持核心和简单，需要额外身份或功能时再混入特质。",
      javaCompare: ""
    },
    {
      title: "特质顺序",
      content: "多个特质混入时顺序有意义，设计时要考虑能力的层次和优先级。",
      javaCompare: ""
    },
    {
      title: "特质扩展特质",
      content: "特质可以扩展另一个特质，形成能力层级。",
      javaCompare: "Java 接口也可以继承接口，但 Scala 特质还能包含实现。"
    },
    {
      title: "特质中的字段",
      content: "特质中的字段可以是具体字段，也可以是抽象字段。",
      javaCompare: ""
    },
    {
      title: "抽象字段必须初始化",
      content: "抽象字段没有初始值，混入该特质的具体类必须提供值。",
      javaCompare: ""
    },
    {
      title: "混入后对象拥有多个来源成员",
      content: "继承父类并混入特质后，对象可以同时拥有父类、子类和特质中的字段与方法。",
      javaCompare: ""
    },
    {
      title: "特质构造器",
      content: "特质构造器由字段初始化和特质体语句组成。",
      javaCompare: "Java 接口传统上没有类似构造过程。"
    },
    {
      title: "特质构造顺序",
      content: "创建对象时，通常先构造超类，再构造特质，最后构造当前类。",
      javaCompare: "Java 创建子类对象时也会先调用父类构造器。"
    },
    {
      title: "共享父特质只构造一次",
      content: "如果多个特质共享同一个父特质，这个父特质不会重复构造。",
      javaCompare: ""
    },
    {
      title: "提前初始化",
      content: "如果抽象字段在特质构造时就会被使用，需要提前准备字段值。",
      javaCompare: ""
    },
    {
      title: "lazy 延迟初始化",
      content: "lazy val 会在第一次使用时才初始化，可缓解部分初始化顺序问题。",
      javaCompare: ""
    },
    {
      title: "try-catch-finally",
      content: "try 执行可能出错的代码，catch 捕获异常，finally 最后执行。",
      javaCompare: "Java 和 Scala 都有类似异常处理结构。"
    },
    {
      title: "自身类型 self type",
      content: "自身类型可以限制特质只能混入指定类型或其子类。",
      javaCompare: ""
    },
    {
      title: "学习重点",
      content: "本阶段先掌握如何定义、如何构造、如何调用，不要一开始写过于复杂的特质嵌套。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "特质作为接口使用",
      code: `trait Logger {
  def log(message: String): Unit
}

class ConsoleLogger extends Logger {
  def log(message: String): Unit = {
    println(message)
  }
}`,
      explanation: "Logger 只有抽象方法，可以当作接口使用。"
    },
    {
      title: "带具体实现的特质",
      code: `trait Logger {
  def log(message: String): Unit = {
    println(message)
  }
}

class Service extends Logger

val s = new Service
s.log("hello")`,
      explanation: "特质中已经实现了 log，类混入后可以直接调用。"
    },
    {
      title: "账户余额不足日志",
      code: `class Account {
  var balance = 100.0
}

trait Logger {
  def log(message: String): Unit = {
    println(message)
  }
}

class SavingAccount extends Account with Logger {
  def withdraw(amount: Double): Unit = {
    if (amount > balance) {
      log("余额不足")
    } else {
      balance = balance - amount
    }
  }
}`,
      explanation: "SavingAccount 继承父类并混入日志特质，余额不足时调用 log。"
    },
    {
      title: "特质扩展特质",
      code: `trait Logger {
  def log(message: String): Unit
}

trait WarningLogger extends Logger {
  def warn(message: String): Unit = {
    log("WARN: " + message)
  }
}`,
      explanation: "WarningLogger 扩展 Logger，在基础日志能力上增加警告方法。"
    },
    {
      title: "具体字段和抽象字段",
      code: `trait ShortLogger {
  val maxLength: Int = 20
}

trait FileLogger {
  val fileName: String
}

class Service extends FileLogger {
  val fileName = "app.log"
}`,
      explanation: "maxLength 是具体字段，fileName 是抽象字段，需要类提供值。"
    },
    {
      title: "特质构造顺序演示",
      code: `class Account {
  println("Account")
}

trait Logger {
  println("Logger")
}

trait FileLogger extends Logger {
  println("FileLogger")
}

trait ShortLogger extends Logger {
  println("ShortLogger")
}

class SavingAccount extends Account with FileLogger with ShortLogger {
  println("SavingAccount")
}`,
      explanation: "创建 SavingAccount 对象时，可以观察父类、特质和子类的构造顺序。"
    },
    {
      title: "提前初始化抽象字段",
      code: `trait FileLogger {
  val fileName: String
}

class Account

val account = new Account with FileLogger {
  val fileName = "app.log"
}`,
      explanation: "在匿名子类中提前给 fileName 赋值，避免初始化顺序问题。"
    },
    {
      title: "lazy 延迟初始化",
      code: `trait FileLogger {
  lazy val fileName = "app.log"

  def showFile(): Unit = {
    println(fileName)
  }
}`,
      explanation: "lazy val 会在第一次被使用时再初始化。"
    },
    {
      title: "异常处理",
      code: `try {
  val x = 10 / 0
} catch {
  case e: Exception => println(e.getMessage)
} finally {
  println("结束处理")
}`,
      explanation: "try 执行可能出错的代码，catch 捕获异常，finally 最后执行。"
    },
    {
      title: "自身类型",
      code: `trait LoggedException {
  this: Exception =>

  def log(): Unit = {
    println(getMessage)
  }
}`,
      explanation: "this: Exception => 限制该特质只能混入 Exception 类型或其子类。"
    }
  ],
  quiz: [
    {
      question: "Scala 中定义特质使用哪个关键字？",
      options: ["trait", "classOnly", "switch", "package"],
      answer: "trait",
      explanation: "Scala 使用 trait 定义特质。"
    },
    {
      question: "Scala 特质比传统 Java 接口更强在哪里？",
      options: ["可以有具体方法实现", "只能写抽象方法", "只能保存图片", "不能混入类"],
      answer: "可以有具体方法实现",
      explanation: "Scala 特质既可以有抽象方法，也可以有具体方法。"
    },
    {
      question: "Scala 类可以有几个超类？",
      options: ["一个", "无限多个 class", "不能继承", "只能继承 trait"],
      answer: "一个",
      explanation: "Scala 是单继承，一个类只能继承一个超类。"
    },
    {
      question: "Scala 类可以混入几个特质？",
      options: ["可以混入多个", "只能一个", "不能混入", "只能混入 private"],
      answer: "可以混入多个",
      explanation: "Scala 类可以通过 with 混入多个特质。"
    },
    {
      question: "特质中的抽象字段有什么特点？",
      options: ["没有初始值，需要具体类提供", "一定有默认值", "只能是图片", "不能被使用"],
      answer: "没有初始值，需要具体类提供",
      explanation: "抽象字段没有初始值，混入该特质的类必须提供值。"
    },
    {
      question: "多个特质共享同一个父特质时，父特质会怎样？",
      options: ["只构造一次", "每次无限构造", "不允许共享", "自动删除"],
      answer: "只构造一次",
      explanation: "共享的父特质已经构造过后，不会重复构造。"
    },
    {
      question: "lazy val 的作用是什么？",
      options: ["延迟到第一次使用时再初始化", "立即删除变量", "创建数据库", "强制报错"],
      answer: "延迟到第一次使用时再初始化",
      explanation: "lazy val 会在第一次被访问时才计算。"
    },
    {
      question: "自身类型 this: Exception => 的作用是什么？",
      options: ["限制该特质只能混入指定类型或其子类", "删除 Exception", "创建普通字符串", "表示循环结束"],
      answer: "限制该特质只能混入指定类型或其子类",
      explanation: "自身类型可以给特质添加类型约束。"
    }
  ],
  dragMatch: [
    { left: "trait", right: "特质" },
    { left: "Logger", right: "日志特质示例" },
    { left: "abstract method", right: "抽象方法" },
    { left: "concrete method", right: "具体方法" },
    { left: "with", right: "混入特质" },
    { left: "extends", right: "继承父类或扩展特质" },
    { left: "log", right: "输出日志信息" },
    { left: "concrete field", right: "具体字段" },
    { left: "abstract field", right: "抽象字段" },
    { left: "lazy val", right: "延迟初始化字段" },
    { left: "try-catch-finally", right: "异常处理结构" },
    { left: "self type", right: "自身类型约束" },
    { left: "this", right: "当前对象" },
    { left: "getMessage", right: "异常信息方法" }
  ],
  flow: {
    title: "类混入特质流程",
    description: "展示类继承父类并混入特质的构造流程。",
    steps: [
      "定义基础类 Account",
      "定义日志特质 Logger",
      "定义子类 SavingAccount",
      "子类 extends Account",
      "子类 with Logger",
      "创建 SavingAccount 对象",
      "对象同时拥有 Account 的字段和 Logger 的方法"
    ]
  },
  exercises: [
    {
      question: "定义一个 Logger 特质，只包含抽象方法 log，再写一个类实现它。",
      answer: `trait Logger {
  def log(message: String): Unit
}

class ConsoleLogger extends Logger {
  def log(message: String): Unit = {
    println(message)
  }
}`
    },
    {
      question: "定义一个带具体实现的 Logger 特质，并让类直接调用其中方法。",
      answer: `trait Logger {
  def log(message: String): Unit = {
    println(message)
  }
}

class Service extends Logger

val s = new Service
s.log("hello")`
    },
    {
      question: "写一个 SavingAccount，当取款金额大于余额时输出日志。",
      answer: `class Account {
  var balance = 100.0
}

trait Logger {
  def log(message: String): Unit = {
    println(message)
  }
}

class SavingAccount extends Account with Logger {
  def withdraw(amount: Double): Unit = {
    if (amount > balance) {
      log("余额不足")
    } else {
      balance = balance - amount
    }
  }
}`
    },
    {
      question: "定义一个带抽象字段的特质，并在类中给字段赋值。",
      answer: `trait FileLogger {
  val fileName: String
}

class Service extends FileLogger {
  val fileName = "app.log"
}`
    },
    {
      question: "写一个特质扩展另一个特质的例子。",
      answer: `trait Logger {
  def log(message: String): Unit
}

trait WarningLogger extends Logger {
  def warn(message: String): Unit = {
    log("WARN: " + message)
  }
}`
    },
    {
      question: "写一个自身类型示例，要求特质只能混入 Exception 类型。",
      answer: `trait LoggedException {
  this: Exception =>

  def log(): Unit = {
    println(getMessage)
  }
}`
    }
  ],
  conclusion: [
    "Scala 使用 trait 定义特质。",
    "特质可以当作接口使用，也可以提供具体实现。",
    "特质比传统 Java 接口更灵活。",
    "Scala 一个类只能继承一个超类，但可以混入多个特质。",
    "实现特质中的抽象方法时，override 可以省略。",
    "带具体实现的特质可以直接给类提供可复用方法。",
    "SavingAccount 混入 Logger 后，可以在余额不足时调用 log。",
    "类本身要尽量精简，需要什么能力就混入什么特质。",
    "特质字段可以是具体字段，也可以是抽象字段。",
    "抽象字段必须由混入特质的具体类提供值。",
    "特质构造器由字段初始化和特质体语句组成。",
    "构造顺序大致是超类、特质、当前类。",
    "多个特质从左到右构造，共享父特质只构造一次。",
    "如果抽象字段在特质构造时被使用，需要提前初始化或使用 lazy。",
    "特质可以扩展另一个特质。",
    "try-catch-finally 用于异常处理。",
    "自身类型可以限制特质只能混入指定类型。",
    "本阶段测试重点是能定义、构造和调用相关结构。"
  ]
},
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
