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

{
      id: "java-intro-course-overview",
      title: "Java 编程课程介绍与基础入门",
      chapter: "Java 基础",
      date: "2025-08-25",
      tags: [
        "Java概述",
        "开发环境",
        "项目创建",
        "类与对象",
        "main方法",
        "输出语句",
        "修饰符",
        "语法公式"
      ],
      summary: [
        "本节课首先介绍了 Java 课程的整体安排、学习要求（记笔记、带教材、实验报告格式等）。",
        "课堂中重点说明了 Java 开发环境的启动方式（通过批处理文件，无需手动配置环境变量）和项目创建流程。",
        "老师通过\"水壶是公有的，水杯是私有的\"等生活类比，帮助理解 public、private、protected、default 四种访问修饰符。",
        "本节课还强调了 main 方法的固定写法（public static void main(String[] args)），要求每个同学必须背下来。",
        "最后通过 Hello World 程序讲解 Java 程序的基本结构：类、main 方法、输出语句，以及创建对象的基本语法公式 `类名 对象名 = new 类名()`。"
      ],
      keyPoints: [
        {
          title: "Java 语言的特点与地位",
          content: "概念：Java 是一门面向对象的编程语言，广泛应用于企业级应用、Android 开发、大数据处理等领域。它有三个最核心的特点：简单方便（相比 C++ 更易上手）、跨平台（编写一次，到处运行）、面向对象（以类和对象为基本单位）。\n\n作用：Java 是编程语言中\"基础中的基础\"。学好 Java 之后，无论是后续学习 Spark（大数据框架）、Scala（Spark 的基础语言），还是理解其他面向对象语言，都会事半功倍。在当前的就业市场上，Java 开发岗位仍占很大比例。\n\n课堂理解：老师强调 Java 的地位时说：\"开发企业应用 APP 的\"主要就是 Java。Java 的跨平台性意味着\"开发出来的一个 APP，在什么地方都可以使用\"。老师还将 Java 和 C++ 做了对比：C++ 更偏向游戏开发，难度更大；Java 相对简单，适合企业应用开发。",
          javaCompare: "",
          id: "kp-0-java",
          short: "概念：Java 是一门面向对象的编程语言，广泛应用于企业级应用、Android 开发、大数据处理等领域。它有三个最核心的特点：简单方便（相比 C++ 更易上手）……",
          mistake: ""
        },
        {
          title: "创建 Java 项目与类",
          content: "概念：在 IDE（集成开发环境）中创建一个 Java SE 项目，并在项目的 SRC 文件夹下创建 Java 类。Java 中所有的代码都必须写在类（class）里面。\n\n作用：这是学习 Java 第一个要掌握的实操技能。如果不学会创建项目和类，就无法编写和运行任何 Java 代码。\n\n基本写法：项目创建流程：\n\n1. 打开 IDE → 点击 Create a Java Project\n2. 输入项目名称（不要有空格，可以用下划线代替）\n3. 运行环境选 Java SE 版本（课堂使用 JDK 11）\n4. 出现 \"module information\" 对话框时 → 点击 \"Don't Create\"\n5. 项目创建完成\n\n类创建流程：\n\n1. 在 SRC 文件夹上右键 → New → Class\n2. 输入类名（如 Hello、Student）\n3. 勾选 \"public static void main(String[] args)\" 可自动生成 main 方法\n4. 点击完成\n\n课堂理解：老师特别强调了几个关键点：\n- 项目名不能有空格，因为空格是\"可识别字符\"（分隔符），可以用下划线代替。\n- SRC 文件夹是\"资源文件夹\"（Source Folder），所有 Java 源代码都放在这里。\n- Java 中\"所有的内容都是以类为单位的\"，类是 Java 程序的最小组织单位。\n- 老师将类比喻为人的定义：\"一个人有 name、age、hair color 等属性，可以学习、唱歌、吃饭、跳舞等行为。这些属性加上行为就构成了一个 class。\"",
          javaCompare: "",
          id: "kp-1-java",
          short: "概念：在 IDE（集成开发环境）中创建一个 Java SE 项目，并在项目的 SRC 文件夹下创建 Java 类。Java 中所有的代码都必须写在类（class……",
          mistake: ""
        },
        {
          title: "四种访问修饰符",
          content: "概念：Java 中，类、方法、变量前面都可以加访问修饰符来控制谁能访问它们。共有四种：public（公有）、private（私有）、protected（受保护）、default（默认，不写任何修饰符）。\n\n作用：访问修饰符是面向对象编程中\"封装\"的基础。控制访问权限可以保护数据安全，让代码更规范。\n\n基本写法：public class MyClass { }        // 公有类\nprivate int age;                 // 私有变量\nprotected void method() { }     // 受保护方法\nint count;                      // 默认（不写修饰符）\n\n课堂理解：老师用了非常生动的生活类比来解释：\n\n- public（公有）：就像寝室里的水壶或拖把，\"每一个人都可以使用的\"，谁都能用。\n- private（私有）：就像每个人的水杯，\"只有你个人可以使用的东西\"。\n- protected（受保护）：就像兄弟姐妹之间的财产，\"具有血缘关系的兄弟、姐妹共同使用的东西\"。你兄弟拿了你的钱不算偷，但室友拿就不行。\n- default（默认）：与 protected 类似但有区别（后期深入讲解），目前理解成\"什么都不写\"即可。\n\n老师的核心总结：\"编程是需要来源于实际的，解决生活问题\"。",
          javaCompare: "",
          id: "kp-2-x",
          short: "概念：Java 中，类、方法、变量前面都可以加访问修饰符来控制谁能访问它们。共有四种：public（公有）、private（私有）、protected（受保护）……",
          mistake: ""
        },
        {
          title: "main 方法（主函数）",
          content: "概念：main 方法是 Java 程序的入口。当运行一个 Java 程序时，JVM（Java 虚拟机）会首先找到 main 方法，然后从它的第一行开始执行。\n\n作用：没有 main 方法，Java 程序就无法启动运行。它是每个 Java 可执行程序必不可少的组成部分，必须牢牢记住。\n\n基本写法：public static void main(String[] args) {\n    // 在这里写要执行的代码\n}\n\nmain 方法的组成部分：\n\n| 部分 | 内容 | 含义 |\n|------|------|------|\n| 修饰符 | public | 公有，JVM 必须能访问到 |\n| 静态 | static | 静态方法，无需创建对象就能调用 |\n| 返回值 | void | 没有返回值（返回空） |\n| 方法名 | main | 固定名称，JVM 只认这个名字 |\n| 参数列表 | String[] args | 接收命令行参数，args 是 arguments 的缩写 |\n\n课堂理解：老师将 main 方法比喻为一扇门：\"你必须走这个门里面，它才能去做。我们有众多的 method，main 是入口——运行起来后，一定先找到 main 方法，然后才能去跑。\"\n\n老师还特别强调：\"这一行是需要大家默写下来的，一个字母都不能错。入口是写死的，就像公式一样。不管哪个 class，无论在什么地方，public static void main(String[] args) 是一定要有的。\"",
          javaCompare: "",
          id: "kp-3-main",
          short: "概念：main 方法是 Java 程序的入口。当运行一个 Java 程序时，JVM（Java 虚拟机）会首先找到 main 方法，然后从它的第一行开始执行。\n\n……",
          mistake: ""
        },
        {
          title: "System.out.println 输出语句",
          content: "概念：`System.out.println()` 是 Java 中最常用的输出语句，作用是在控制台打印指定的内容，并在末尾自动换行。\n\n作用：输出语句是程序和用户交互的最基本方式。在学习阶段，几乎所有代码的运行结果都通过它来查看。也是调试程序的重要手段。\n\n基本写法：System.out.println(要输出的内容);\nSystem.out.print(要输出的内容);   // 不换行版本\n\n语法结构拆解：\n\n| 部分 | 说明 |\n|------|------|\n| System | 系统类，首字母 S 必须大写 |\n| out | System 类中的一个输出流对象 |\n| println | 方法名，print line 的缩写，\"输出并换行\" |\n| () 中的内容 | 要输出的参数 |\n\n课堂理解：老师特别强调了 `System` 中 S 必须大写：\"第一个字母首字母大写，后面是小写的。system 的 S 是大写。你们在写的时候，一定要写大写，不要写小写。有很多同学就写错了。\"\n\n对于 println 这个名字，老师拆解为：print（打印）+ ln（line，换行）。ln 代表 line，意思是输出完这一行后自动回车换行。",
          javaCompare: "",
          id: "kp-4-system-out-println",
          short: "概念：`System.out.println()` 是 Java 中最常用的输出语句，作用是在控制台打印指定的内容，并在末尾自动换行。\n\n作用：输出语句是程序和……",
          mistake: ""
        },
        {
          title: "类与对象的基本概念",
          content: "概念：Java 是一门面向对象的语言。类（class） 是一个模板/图纸，描述某一类事物的共同特征。对象（object） 是根据类这个模板\"造\"出来的具体实例。\n\n作用：Java 的一切代码都写在类里面，一切数据都是对象。不理解类和对象，就无法理解 Java 的核心思想。\n\n基本写法：// 定义类的语法\npublic class 类名 {\n    // 属性（变量）：描述这个类\"有什么\"\n    // 方法（函数）：描述这个类\"能做什么\"\n}\n\n// 创建对象的语法\n类名 对象名 = new 类名();\n\n课堂理解：老师用\"人\"来比喻：\n- 类：就像\"人\"的定义。所有人都有头发、眼睛、鼻子、嘴这些属性，也都会说话、走路、吃饭这些行为（方法）。类就是描述\"人应该有什么和能做什么\"的模板。\n- 对象：具体到某一个真实的人（比如你、我、他），就是根据这个模板\"构造\"出来的对象。\n\n老师进一步解释了语法公式 `Student stu = new Student();`：\n- `Student` 是类名（类型）——就像 int 是整形的类型名\n- `stu` 是对象名——是你给这个对象起的名字（变量名）\n- `new` 是声明/创建的关键字——向内存申请空间来存放这个对象\n- `Student()` 是构造方法——负责初始化这个对象，决定对象\"带着什么东西来\"",
          javaCompare: "",
          id: "kp-5-x",
          short: "概念：Java 是一门面向对象的语言。类（class） 是一个模板/图纸，描述某一类事物的共同特征。对象（object） 是根据类这个模板\"造\"出来的具体实例。……",
          mistake: ""
        },
        {
          title: "注释（单行注释和多行注释）",
          content: "概念：注释是写在代码中对程序员可见、但不会被 JVM 执行的说明文字。Java 有两种注释：单行注释（`//`）和多行注释（`/* */`）。\n\n作用：注释帮助自己和他人读懂代码。在团队协作中，清晰的注释是代码规范的重要组成部分。老师特别强调：\"你写的东西跟别人不一样，别人看不懂你的，说明有问题。\"\n\n基本写法：// 这是单行注释，从 // 到本行结束都是注释\n\n/*\n   这是多行注释\n   可以跨越多行\n   适合写较长的说明\n*/\n\n课堂理解：老师简明扼要地指出：\"双斜线就是单行的，斜线星号就是多行的，大家了解一下就可以了。\"\n\n虽然没有展开讲，但老师从头到尾都在强调代码可读性的重要性——注释是实现可读性的关键工具之一。",
          javaCompare: "",
          id: "kp-6-x",
          short: "概念：注释是写在代码中对程序员可见、但不会被 JVM 执行的说明文字。Java 有两种注释：单行注释（`//`）和多行注释（`/* */`）。\n\n作用：注释帮助……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "第一个 Java 程序——Hello World",
          code: "public class Hello {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
          explanation: "1. public class Hello —— 定义了一个公有的类，类名叫 Hello。文件名必须是 Hello.java。\n2. public static void main(String[] args) —— Java 程序的入口方法，固定写法，必须牢牢记住。\n3. System.out.println(\"Hello, World!\"); —— 向控制台输出一行文字，括号里的内容就是要输出的内容。\n\n初学者提示：\n- Hello 类的文件名必须是 Hello.java，类名和文件名必须完全一致（包括大小写）。\n- System 的 S 必须大写，println 全部用小写。\n- 每一句 Java 代码以分号 ; 结尾。"
        },
        {
          title: "创建并使用一个简单的类",
          code: "// 定义一个学生类\npublic class Student {\n    String name;\n    int age;\n\n    public void introduce() {\n        System.out.println(\"我叫\" + name + \"，今年\" + age + \"岁。\");\n    }\n}\n\n// 主程序\npublic class Main {\n    public static void main(String[] args) {\n        // 根据 Student 模板创建一个具体的对象\n        Student stu = new Student();\n\n        // 给对象的属性赋值\n        stu.name = \"小明\";\n        stu.age = 20;\n\n        // 调用对象的方法\n        stu.introduce();\n    }\n}",
          explanation: "1. class Student 定义了一个学生模板——每个学生都有 name（姓名）和 age（年龄）。\n2. introduce() 是一个方法，负责自我介绍。\n3. Student stu = new Student(); 中 new 是关键，意思是向内存申请空间来存放这个学生对象。\n4. stu.name = \"小明\" 给这个学生的姓名赋值为 \"小明\"。\n5. stu.introduce() 调用了自我介绍的方法。\n6. 字符串用 + 号可以连接：\"我叫\" + name + \"，今年\" + age + \"岁。\" 拼接成一句话。\n\n初学者提示：\n- new Student() 后面的括号 () 千万不要忘记。\n- 点号 . 表示\"的\"——stu.name 即\"stu 的 name\"。\n- 字符串拼接用 + 号。"
        },
        {
          title: "使用不同访问修饰符",
          code: "public class Person {\n    public String name;    // 公有的，外部可以直接访问\n    private int age;       // 私有的，外部不能直接访问\n\n    // 通过 public 方法访问 private 属性\n    public void setAge(int a) {\n        age = a;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public void show() {\n        System.out.println(\"姓名：\" + name + \"，年龄：\" + age);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.name = \"小红\";         // ✅ public 属性可以直接赋值\n        // p.age = 18;           // ❌ private 属性不能直接访问\n        p.setAge(18);            // ✅ 通过 public 方法间接设置年龄\n\n        p.show();                // 输出：姓名：小红，年龄：18\n    }\n}",
          explanation: "1. name 是 public 的，所以可以在 main 方法中直接 p.name = \"小红\" 赋值。\n2. age 是 private 的，如果直接写 p.age = 18 会报错。\n3. 为了访问 private 的 age，提供了 public 的 setAge() 和 getAge() 方法——这是 Java 中标准的封装做法。\n4. p.show() 可以正常访问 age，因为 show() 是 Person 类自己的方法。\n\n初学者提示：\n- 刚开始学的时候，所有属性可以先写成 public，让代码跑通再说。\n- 封装（把属性设为 private + 提供 public 方法）是后面会深入讲的内容，现在先了解概念即可。"
        }
      ],
      quiz: [
        {
          question: "以下哪一个是 Java 中正确的 main 方法写法？",
          options: [
            "public void main(String[] args) { }",
            "public static void main(String[] args) { }",
            "public static void Main(String[] args) { }",
            "public static void main(string args) { }"
          ],
          answer: "public static void main(String[] args) { }",
          explanation: "A 缺少了 static，JVM 无法直接调用。\nC 中 Main 首字母大写，Java 严格区分大小写，main 必须小写。\nD 中 String 首字母没有大写，且参数类型应该是 String[] 而不是 string。"
        },
        {
          question: "以下输出语句中，写法正确的是？",
          options: [
            "system.out.println(\"Hello\");",
            "System.out.Print(\"Hello\");",
            "System.out.println(\"Hello\");",
            "system.Out.println(\"Hello\");"
          ],
          answer: "System.out.println(\"Hello\");",
          explanation: "A 中 System 的 S 没有大写；B 中 Print 的 P 没有小写（应该是 print 或 println）；D 中 Out 的 O 大写错误。"
        },
        {
          question: "关于类（class）和对象（object），以下说法正确的是？",
          options: [
            "类和对象是同一个概念",
            "类是模板，对象是根据模板创建的具体实例",
            "对象是模板，类是根据模板创建的具体实例",
            "类可以没有对象，对象也可以没有类"
          ],
          answer: "类是模板，对象是根据模板创建的具体实例",
          explanation: "类是抽象的模板/图纸，对象是具体的实例。比如\"学生\"是一个类，\"张三\"是一个对象。必须通过类来创建对象（new）。"
        },
        {
          question: "创建 Java 项目时，项目名称的命名规范是什么？",
          options: [
            "可以有空格",
            "不能有空格，可以用下划线代替",
            "必须包含中文",
            "必须以数字开头"
          ],
          answer: "不能有空格，可以用下划线代替",
          explanation: "项目名中间不能有空格（空格会被当作分隔符），可以用下划线 _ 来间隔单词，或者使用驼峰命名法（如 HelloWorld）。"
        },
        {
          question: "以下关于 private 修饰符的描述，正确的是？",
          options: [
            "被 private 修饰的内容，任何地方都可以访问",
            "被 private 修饰的内容，只有本类内部可以访问",
            "被 private 修饰的内容，子类可以访问",
            "Java 中没有 private 修饰符"
          ],
          answer: "被 private 修饰的内容，只有本类内部可以访问",
          explanation: "private 是\"私有的\"，只有本类内部的方法才能访问。外部类（包括子类）不能直接访问 private 成员。"
        },
        {
          question: "以下创建对象的代码，哪一个是正确的？",
          options: [
            "Student stu = Student();",
            "Student stu = new Student();",
            "new Student stu = Student();",
            "Student stu = new Student;"
          ],
          answer: "Student stu = new Student();",
          explanation: "正确的语法是：类名 对象名 = new 类名();  其中 new 关键字和后面的括号 () 都不可缺少。"
        },
        {
          question: "main 方法中的参数 String[] args 的作用是什么？",
          options: [
            "没有实际作用，只是语法要求",
            "用来接收命令行参数",
            "用来定义输出的内容",
            "用来设置程序的运行环境"
          ],
          answer: "用来接收命令行参数",
          explanation: "String[] args（arguments 的缩写）用于接收运行程序时在命令行中传入的参数。虽然课堂上没深入讲，但这个参数是有实际用途的。初期记住它是固定写法即可。"
        }
      ],
      dragMatch: [
        {
          left: "Java",
          right: "面向对象的编程语言，应用广泛的企业级开发语言"
        },
        {
          left: "class",
          right: "类，Java 程序的基本单位，所有代码都写在类里面"
        },
        {
          left: "public",
          right: "公有的，表示所有人都可以访问"
        },
        {
          left: "private",
          right: "私有的，表示只有本类内部可以访问"
        },
        {
          left: "main 方法",
          right: "Java 程序的入口方法，程序从这里开始执行"
        },
        {
          left: "System.out.println",
          right: "向控制台输出一行内容并自动换行"
        },
        {
          left: "String[] args",
          right: "main 方法的参数，用于接收命令行参数"
        },
        {
          left: "new",
          right: "关键字，用来创建对象并分配内存空间"
        },
        {
          left: "SRC",
          right: "资源文件夹，存放 Java 源代码"
        },
        {
          left: "void",
          right: "表示方法没有返回值"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "在 IDE 中创建 Java 项目（选择 Java SE，项目名不含空格）。",
          "在 SRC 文件夹下创建一个 Java 类（类名和文件名保持一致）。",
          "在类中编写 main 方法（public static void main(String[] args)），这是程序的入口。",
          "在 main 方法的方法体 { } 中编写要执行的代码。",
          "点击运行按钮（或右键 Run As → Java Application）。",
          "JVM 找到 main 方法，从第一行代码开始逐行执行。",
          "如果代码中有 System.out.println 语句，就在控制台输出对应的内容。",
          "程序执行完毕后自动结束。"
        ]
      },
      exercises: [
        {
          question: "编写一个 Java 程序，在控制台输出你的名字和年龄。",
          answer: "考查知识点：\n类定义、main 方法、输出语句\n\n参考答案：\n\npublic class MyInfo {\n    public static void main(String[] args) {\n        System.out.println(\"姓名：张三\");\n        System.out.println(\"年龄：20\");\n    }\n}\n\n解题思路：\n1. 定义一个类，类名自定（如 MyInfo），文件名要和类名一致。\n2. 在类中写 main 方法（固定格式）。\n3. 使用 System.out.println 输出两行信息。"
        },
        {
          question: "找出以下代码中的 3 处错误。\n\npublic class test {\n    public static void main(String[] args) {\n        system.out.println(\"Hello\")\n    }\n}",
          answer: "考查知识点：\n类名规范、System 大小写、分号\n\n参考答案：\n错误1：文件名应该是 test.java（如果类名是 test），但建议类名首字母大写为 Test。\n错误2：system 应该是 System（S 必须大写）。\n错误3：println(\"Hello\") 后面缺少分号 ;。\n\n解题思路：\n- Java 严格区分大小写，System 的 S 必须大写。\n- 每条语句以分号结尾。\n- 类名建议首字母大写（虽然小写也能运行，但不规范）。"
        },
        {
          question: "创建一个名为 Dog 的类，包含一个叫 name 的属性（public）和一个叫 bark 的方法（输出 \"汪汪\"）。然后在 main 方法中创建一个 Dog 对象并调用 bark 方法。",
          answer: "考查知识点：\n类定义、属性、方法、创建对象、方法调用\n\n参考答案：\n\npublic class Dog {\n    public String name;\n\n    public void bark() {\n        System.out.println(name + \"说：汪汪！\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog myDog = new Dog();   // 创建 Dog 对象\n        myDog.name = \"旺财\";      // 给属性赋值\n        myDog.bark();             // 调用方法\n    }\n}\n\n解题思路：\n1. 先定义 Dog 类，包含属性和方法。\n2. 在 Main 类的 main 方法中用 new 创建 Dog 对象。\n3. 通过 对象名.属性名 给 name 赋值。\n4. 通过 对象名.方法名() 调用 bark 方法。"
        },
        {
          question: "编写程序，分别使用 println 和 print 输出内容，观察它们的区别。",
          answer: "考查知识点：\nprintln 和 print 的区别\n\n参考答案：\n\npublic class PrintTest {\n    public static void main(String[] args) {\n        System.out.print(\"第一句，\");\n        System.out.print(\"不换行。\");\n        System.out.println(\"第二句，会换行。\");\n        System.out.println(\"第三句，也会换行。\");\n    }\n}\n\n运行结果：\n第一句，不换行。第二句，会换行。\n第三句，也会换行。\n\n解题思路：\nprint 输出后光标还在同一行，下一次输出会紧接着当前位置继续。\nprintln 输出后会自动换行，下一次输出从下一行开始。"
        },
        {
          question: "请将以下信息用自己的话整理成笔记：Java 程序的基本结构包含哪些组成部分？",
          answer: "考查知识点：\n对 Java 程序整体结构的理解\n\n参考答案：\nJava 程序的基本结构包括：\n1. 项目（Project）—— 一个项目可以包含多个类。\n2. 包/文件夹（SRC）—— 存放源代码的地方。\n3. 类（class）—— Java 程序的基本单位，所有代码必须写在类里面。使用 public class 类名 { } 定义。\n4. main 方法 —— 程序的入口，固定格式：public static void main(String[] args) { }。\n5. 语句 —— main 方法中的每一行执行代码，以分号结尾。\n6. 注释 —— 用 // 或 /* */ 写的说明文字，不会被执行。\n\n解题思路：\n用自己的话总结课堂内容，这样更容易理解和记忆。这也是老师倡导的学习方法。"
        }
      ],
      conclusion: [
        "本节课的核心是认识 Java 以及理解 Java 程序的最基本结构——类、main 方法和输出语句。这是后续所有 Java 学习的基础。",
        "学习 Java 时要特别注意大小写（System 不是 system，main 不是 Main）和分号结尾，这两个是初学者最容易出错的地方。",
        "通过本节课，应该能够独立创建 Java 项目、编写一个简单的 Hello World 程序，并理解 public class、main 方法和 System.out.println 的作用。",
        "类与对象的概念会在后续课程中反复出现和深入讲解。本节课只是初步了解，后面会详细学习属性、方法、构造方法、继承等面向对象的核心内容。",
        "课后建议多练习两个基本功：一是盲敲键盘（目标每分钟 100 个字母以上），二是把 main 方法和 System.out.println 反复默写，形成肌肉记忆。这些基本功是后续编程学习的保障。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "Java概述",
        "开发环境",
        "项目创建",
        "类与对象",
        "main方法",
        "输出语句",
        "修饰符",
        "语法公式"
      ],
      cardSummary: "本节课首先介绍了 Java 课程的整体安排、学习要求（记笔记、带教材、实验报告格式等）。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-oop-basics-keywords",
      title: "Java 编程基础及面向对象入门",
      chapter: "Java 面向对象基础",
      date: "2025-08-25",
      tags: [
        "面向对象",
        "类与对象",
        "构造方法",
        "继承",
        "关键字",
        "标识符",
        "布尔类型",
        "学习方法"
      ],
      summary: [
        "本节课首先深入讲解了 new 关键字和构造方法的作用——构造方法决定了对象\"带着什么东西来到这个世界\"。",
        "课堂中重点说明了类（class）的组成：属性（描述\"有什么\"）和方法（描述\"能做什么\"），以及对象如何调用它们。",
        "老师通过\"父亲和儿子\"的生动类比，帮助理解继承关系——子类不需要重复定义父类已有的属性和方法。",
        "本节课还讲解了标识符的定义规则（由字母、下划线、美元符号、数字组成，首字符不能是数字）和关键字的概念（不能用作标识符）。",
        "最后讲解了布尔（boolean）类型，它只有 true 和 false 两个值，并复习了 System.out.println 的运行方式和常见数据类型。"
      ],
      keyPoints: [
        {
          title: "new 关键字与构造方法",
          content: "概念：当我们想创建一个对象时，使用 `new 类名()` 的语法。其中 `new` 是 Java 的关键字，负责向内存申请空间来存放这个对象。`类名()` 叫做构造方法，负责初始化这个对象，决定这个对象被创建时\"带着什么东西\"。\n\n作用：不写 `new`，对象就不会被创建（没有分配内存）。不理解构造方法，就无法理解对象的初始化过程。这是面向对象编程最基本、最重要的语法。\n\n基本写法：类名 对象名 = new 类名();        // 无参构造\n类名 对象名 = new 类名(参数);    // 带参构造\n\n课堂理解：老师用了非常生动的\"出生\"比喻来解释构造方法：\n- new：就像\"我要声明一个 student 对象，你得给我分配一个空间\"。\n- 构造方法：就像人出生前的\"孕育过程\"。\"你来到这个世界之前要孕育，那孕育的东西就称之为构造方法。构造一个 template（模板），那么这个 template 就称之为一个 object（对象）。\"\n\n老师还打了个比方：所有人都有头发、一对眼睛、一个鼻子、一张嘴——这些\"每个人生来都带着的东西\"就是构造方法中定义的。反过来，如果是后天获得的（比如学会了编程），那就不属于构造方法的内容。",
          javaCompare: "",
          id: "kp-0-new",
          short: "概念：当我们想创建一个对象时，使用 `new 类名()` 的语法。其中 `new` 是 Java 的关键字，负责向内存申请空间来存放这个对象。`类名()` 叫做……",
          mistake: ""
        },
        {
          title: "类的组成——属性与方法",
          content: "概念：一个类（class）由两部分组成：属性（也叫成员变量/字段，描述这个类\"有什么\"）和方法（也叫函数，描述这个类\"能做什么\"）。对象可以调用类中定义的属性和方法。\n\n作用：理解类的组成是面向对象编程的基础。以后写的每一个 Java 类，本质上都是在定义属性和方法。分清楚\"是什么\"（属性）和\"做什么\"（方法），是设计好类的关键。\n\n基本写法：public class 类名 {\n    // 属性：描述特征\n    数据类型 属性名;\n\n    // 方法：描述行为\n    public 返回值类型 方法名(参数) {\n        // 方法体\n    }\n}\n\n课堂理解：老师用\"班长和同学\"的场景来解释：\n- 班长进教室后可以点名、下达任务、传递信息、接收反馈——这些能力就是班长这个类中定义的方法。\n- 其他普通同学做不到这些事，因为他们所属的类不同——\"普通学生有普通学生的类，班干部有班干部的类\"。\n- 类的属性和方法是提前定义好的——\"在定义这个类的时候，就将这些方法放到了框架里边\"。\n\n老师还总结了面向对象的核心思维方式：对象能做什么事，取决于它所属的类中定义了哪些方法。",
          javaCompare: "",
          id: "kp-1-x",
          short: "概念：一个类（class）由两部分组成：属性（也叫成员变量/字段，描述这个类\"有什么\"）和方法（也叫函数，描述这个类\"能做什么\"）。对象可以调用类中定义的属性和……",
          mistake: ""
        },
        {
          title: "继承——面向对象的三大特征之一",
          content: "概念：继承是面向对象编程的核心机制之一。一个类（子类）可以通过继承获得另一个类（父类）的属性和方法，而不需要重复定义。使用 `extends` 关键字实现继承。\n\n作用：继承的最核心价值是避免重复（reusable）。如果多个类有共同的属性和方法，可以把这些共同的部分提取到父类中，子类直接继承使用即可。这不仅减少了代码量，也让代码结构更清晰、更易维护。\n\n基本写法：// 父类（基类）\npublic class 父类名 {\n    // 公共的属性和方法\n}\n\n// 子类（派生类）继承父类\npublic class 子类名 extends 父类名 {\n    // 子类独有的属性和方法\n}\n\n课堂理解：老师用\"父亲和儿子\"的家庭关系来类比继承，这是本节课最精彩的比喻：\n\n- 父类（Student）：就像所有学生的共同特征——有鼻子、有眼睛、有 name、有 age、有 grade 等属性，以及 speak（说话）、walk（走路）、run（跑步）、eat（吃饭）等方法。\n- 子类（普通学生 / 学生会成员）：这两个都是学生，但又有各自的特殊性。\"他们不用再自己创造鼻子、眼睛、说话、行走、跑步、吃饭这些东西了，可以伸手向父亲去拿。这称之为继承过来。\"\n\n老师还解释了为什么要用继承——\"为了避免重复。不同的人要遵循同一个规则去做这个事情\"。在团队开发中，继承确保了代码的一致性和可维护性。\n\n老师特别提到：继承也是 Java 的\"三大特征\"之一（另外两个是封装和多态，后续课程会讲）。",
          javaCompare: "",
          id: "kp-2-x",
          short: "概念：继承是面向对象编程的核心机制之一。一个类（子类）可以通过继承获得另一个类（父类）的属性和方法，而不需要重复定义。使用 `extends` 关键字实现继承。……",
          mistake: ""
        },
        {
          title: "标识符（Identifier）",
          content: "概念：标识符就是我们在 Java 中自己定义的各种\"名字\"——包括类名、变量名、方法名、类型名、数组名、文件名等。凡是你可以自己起名字的东西，都叫标识符。\n\n简单记：标识符就是一个名称。\n\n作用：命名是编程中最频繁的操作之一。不了解标识符的规则，就会写出不合法的名字导致编译错误。而且，规范的命名是代码可读性的基础。\n\n基本写法：标识符的命名规则（需要记住）：\n\n1. 可以由字母、下划线 _ 、美元符号 $、数字 组成（四大类）。\n2. 第一个字符不能是数字。\n3. 长度没有限制。\n4. 不能是关键字（如 int、class、public 等）。\n5. 区分大小写（Name 和 name 是两个不同的标识符）。\n\n课堂理解：老师通过具体的例子让学生判断：\n- `int 1a;` → ❌ 第一个字符是数字，不可以。\n- `int a1;` → ✅ 第一个是字母，后面是数字，可以。\n- `int _name;` → ✅ 下划线开头可以。\n- `int $price;` → ✅ 美元符号开头可以。\n\n老师还特别强调，\"类名、变量名、方法名、类型名、数组名、文件名——这些都是你自己可以自定义的，都用标识符来框起来\"。标识符和关键字的关系是：关键字不能用做标识符。",
          javaCompare: "",
          id: "kp-3-identifier",
          short: "概念：标识符就是我们在 Java 中自己定义的各种\"名字\"——包括类名、变量名、方法名、类型名、数组名、文件名等。凡是你可以自己起名字的东西，都叫标识符。\n\n简……",
          mistake: ""
        },
        {
          title: "关键字（Keyword）",
          content: "概念：关键字是 Java 语言中预先定义好的、具有特定含义和用途的单词。这些单词已经被 Java \"征用\"了，程序员不能再把它们当作变量名、方法名、类名等标识符来使用。\n\n作用：知道哪些是关键字，才不会把它们误用为标识符。同时，认识关键字也是阅读和理解 Java 代码的基础——看到 `class` 就知道在定义类，看到 `int` 就知道在声明整数。\n\n课堂理解：老师在课堂上逐个提问学生\"你知道哪些关键字？\"，学生的回答包括：`for`、`while`、`if`、`int`、`else`、`do`、`break`、`continue`、`try`、`long` 等等。\n\n老师特别强调了关键字的本质特征——\"它们不能做什么？不能作为变量名和函数名（标识符）\"。换句话说，关键字有特定的用途和范围（range），你不能\"抢来\"自己用。\n\n老师还指出，关键字通常是\"成对出现的\"——比如 `if` 对应 `else`，`break` 对应 `continue`，`while` 对应 `do while`。把这些成对的关键字放在一起记忆会更高效。",
          javaCompare: "",
          id: "kp-4-keyword",
          short: "概念：关键字是 Java 语言中预先定义好的、具有特定含义和用途的单词。这些单词已经被 Java \"征用\"了，程序员不能再把它们当作变量名、方法名、类名等标识符……",
          mistake: ""
        },
        {
          title: "布尔类型（boolean）",
          content: "概念：boolean 是 Java 中的逻辑类型。它只有两个可能的取值：true（真）和 false（假）。布尔类型通常用于条件判断中。\n\n作用：程序中大量需要\"是/否\"\"对/错\"\"真/假\"的判断——比如\"分数是否及格\"\"用户是否登录\"\"数据是否为空\"。boolean 类型就是用来处理这些二元判断的基础工具。\n\n基本写法：boolean 变量名 = true;   // 或者 false\n\n// 典型用法：条件判断\nif (布尔表达式) {\n    // 条件为 true 时执行\n}\n\n课堂理解：老师指出 boolean 类型有两个确定的值且只有两个：\"要不就真，要不就假\"。同时还提到 true 和 false 本身也是 Java 的关键字，不能用作标识符。\n\n老师回顾了 Python 中的类似概念——在 Python 中 condition（条件）为 True 就执行 statement，为 False 就不执行。Java 中的道理完全一样，只是写法是全小写的 true 和 false（Python 中是首字母大写的 True 和 False）。",
          javaCompare: "",
          id: "kp-5-boolean",
          short: "概念：boolean 是 Java 中的逻辑类型。它只有两个可能的取值：true（真）和 false（假）。布尔类型通常用于条件判断中。\n\n作用：程序中大量需要……",
          mistake: ""
        },
        {
          title: "常见数据类型概览",
          content: "概念：Java 中的数据类型分为两大类：基本数据类型（8 种）和引用数据类型（如类、数组、String 等）。本节课中通过师生问答的方式，复习了 int、float、double、char、boolean、String 等常见类型。\n\n作用：数据类型是 Java 语法的基础。声明变量时必须指定类型，赋值时必须类型匹配。不理解数据类型，后面学习变量、运算、方法参数都会遇到困难。\n\n基本写法：// 常见类型变量声明\nint age = 18;               // 整数\ndouble price = 9.99;        // 双精度浮点数（小数）\nfloat weight = 65.5f;       // 单精度浮点数（后面要加 f）\nchar grade = 'A';           // 单个字符（用单引号）\nboolean isPass = true;      // 布尔值\nString name = \"张三\";        // 字符串（用双引号，String 是引用类型）\n\n课堂理解：本节课通过师生互动复习了数据类型。老师问\"有哪些数据类型\"，学生回答包括：int（整形）、float（浮点型）、boolean（布尔型）、String（字符串）、list（列表——但老师纠正说 Java 中叫 List）、tuple（元组——Java 中不常用）、short、long 等。\n\n老师还让一个同学说出 true 和 false 是什么——它们\"不是值吗？\"——其实是 boolean 类型的两个取值。老师特别纠正了\"float 包含单精度和双精度\"这个不严谨的说法：单精度是 float，双精度是 double，它们是两个不同的类型。",
          javaCompare: "",
          id: "kp-6-x",
          short: "概念：Java 中的数据类型分为两大类：基本数据类型（8 种）和引用数据类型（如类、数组、String 等）。本节课中通过师生问答的方式，复习了 int、flo……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "创建对象并使用构造方法初始化",
          code: "public class Car {\n    String brand;    // 品牌\n    String color;    // 颜色\n    int speed;       // 速度\n\n    // 构造方法：创建对象时自动调用，完成初始化\n    public Car(String b, String c) {\n        brand = b;\n        color = c;\n        speed = 0;   // 新车速度为 0\n    }\n\n    public void drive() {\n        speed = 60;\n        System.out.println(\"一辆\" + color + \"的\" + brand + \"正在行驶，速度\" + speed + \"km/h\");\n    }\n\n    public void stop() {\n        speed = 0;\n        System.out.println(brand + \"已停下\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(\"宝马\", \"白色\");   // 创建对象，传入品牌和颜色\n        myCar.drive();                          // 开车\n        myCar.stop();                           // 停车\n    }\n}",
          explanation: "1. Car 类有三个属性（brand、color、speed）和两个方法（drive、stop）。\n2. public Car(String b, String c) 是有参构造方法，创建对象时需要传入品牌和颜色。\n3. new Car(\"宝马\", \"白色\") 做了两件事：分配内存 + 调用构造方法把 brand 设为\"宝马\"，color 设为\"白色\"，speed 设为 0。\n4. drive() 方法将 speed 改为 60 并输出行驶信息。\n5. stop() 方法将 speed 改为 0 并输出停车信息。\n\n初学者提示：\n- 构造方法的名字必须和类名完全一致（这里是 Car）。\n- 构造方法没有返回值类型（连 void 都不写）。\n- 如果你不写任何构造方法，Java 会自动提供一个无参构造方法。"
        },
        {
          title: "继承——子类复用父类代码",
          code: "// 父类：手机的基本功能\npublic class Phone {\n    String brand;\n    String model;\n\n    public void call(String number) {\n        System.out.println(\"正在拨打 \" + number);\n    }\n\n    public void sendMessage(String msg) {\n        System.out.println(\"发送消息：\" + msg);\n    }\n}\n\n// 子类：智能手机（继承 Phone，并增加新功能）\npublic class SmartPhone extends Phone {\n    public void takePhoto() {\n        System.out.println(brand + model + \" 正在拍照\");\n    }\n\n    public void browseInternet() {\n        System.out.println(brand + model + \" 正在上网\");\n    }\n}\n\n// 测试\npublic class Main {\n    public static void main(String[] args) {\n        SmartPhone sp = new SmartPhone();\n        sp.brand = \"华为\";\n        sp.model = \"Mate 60\";\n\n        sp.call(\"10086\");             // 继承自父类的方法\n        sp.sendMessage(\"你好\");        // 继承自父类的方法\n        sp.takePhoto();               // 子类自己的方法\n        sp.browseInternet();          // 子类自己的方法\n    }\n}",
          explanation: "1. Phone 是父类，定义了所有手机都有的基本功能（打电话、发短信）。\n2. SmartPhone 使用 extends Phone 继承父类，自动获得了 brand、model 属性和 call()、sendMessage() 方法。\n3. SmartPhone 还增加了 takePhoto() 和 browseInternet() 这两个父类没有的新方法。\n4. 在 main 中，SmartPhone 的对象既能调用继承来的方法（call、sendMessage），也能调用自己的方法（takePhoto、browseInternet）。\n\n初学者提示：\n- extends 关键字表示继承，写法是\"子类 extends 父类\"。\n- 继承就是\"拿来用\"——父类有的属性和方法，子类可以直接使用，不必重新定义。\n- 这是实现代码复用（reusable）的核心机制。"
        },
        {
          title: "boolean 在条件判断中的使用",
          code: "public class ScoreChecker {\n    public static void main(String[] args) {\n        int score = 85;\n\n        boolean isPass = score >= 60;   // 判断是否及格，结果是一个 boolean 值\n        boolean isExcellent = score >= 90;\n\n        System.out.println(\"分数：\" + score);\n        System.out.println(\"是否及格：\" + isPass);\n        System.out.println(\"是否优秀：\" + isExcellent);\n\n        // 根据不同条件输出不同信息\n        if (isExcellent) {\n            System.out.println(\"成绩优秀！\");\n        } else if (isPass) {\n            System.out.println(\"成绩及格，继续加油！\");\n        } else {\n            System.out.println(\"成绩不及格，需要努力！\");\n        }\n    }\n}",
          explanation: "1. score >= 60 这个表达式的结果是 true 或 false，可以直接赋给 boolean 变量 isPass。\n2. score >= 90 结果是 false，所以 isExcellent = false。\n3. if-else if-else 结构根据 boolean 条件依次判断：先看 isExcellent（false），跳过；再看 isPass（true），执行对应语句。\n4. 可以直接输出 boolean 变量的值，控制台会显示 true 或 false。\n\n初学者提示：\n- 关系运算符（>=、<=、==、!=、>、<）的结果都是 boolean 类型。\n- 可以在 if 中直接写 boolean 变量（如 if (isPass)），不需要写成 if (isPass == true)。\n- boolean 只有 true 和 false 两个值，没有第三个可能。"
        }
      ],
      quiz: [
        {
          question: "以下创建对象的代码，正确的是？",
          options: [
            "Student s = Student();",
            "Student s = new Student();",
            "new Student s = Student();",
            "Student s = new Student;"
          ],
          answer: "Student s = new Student();",
          explanation: "创建对象语法为\"类名 对象名 = new 类名();\"。A 缺少 new；C 语法完全错；D 缺少最后的括号 ()。"
        },
        {
          question: "以下哪个标识符是不合法的？",
          options: [
            "myName",
            "_value",
            "2score",
            "$price"
          ],
          answer: "2score",
          explanation: "2score 以数字 2 开头，违反标识符\"首字符不能是数字\"的规则。其他三个都是合法的。"
        },
        {
          question: "关于 boolean 类型，以下说法正确的是？",
          options: [
            "boolean 可以取 true、false 和 null 三个值",
            "boolean 可以赋值为 0 或 1",
            "boolean 只有 true 和 false 两个取值",
            "boolean 的 true 和 false 可以写成大写"
          ],
          answer: "boolean 只有 true 和 false 两个取值",
          explanation: "boolean 只有 true 和 false 两个取值（全小写）。不能赋 null、0、1 等其他值。"
        },
        {
          question: "关于继承，以下说法错误的是？",
          options: [
            "子类可以继承父类的属性和方法",
            "Java 中一个子类可以有多个父类",
            "继承使用 extends 关键字",
            "继承的主要目的是实现代码复用"
          ],
          answer: "Java 中一个子类可以有多个父类",
          explanation: "Java 中只支持单继承——一个子类只能有一个直接父类。A、C、D 都是正确的。"
        },
        {
          question: "关于构造方法，以下说法正确的是？",
          options: [
            "构造方法的返回值类型是 void",
            "构造方法的名字可以与类名不同",
            "构造方法在创建对象时自动调用",
            "一个类只能有一个构造方法"
          ],
          answer: "构造方法在创建对象时自动调用",
          explanation: "构造方法没有返回值类型（连 void 也不写），名字必须与类名完全相同，一个类可以有多个构造方法（重载）。创建对象时（new 类名()），构造方法自动被调用。"
        },
        {
          question: "下面哪个不是 Java 的关键字？",
          options: [
            "int",
            "class",
            "name",
            "public"
          ],
          answer: "name",
          explanation: "name 不是 Java 的关键字，可以作为标识符使用。int、class、public 都是关键字。"
        },
        {
          question: "char 类型和 String 类型在写法上有什么区别？",
          options: [
            "没有区别，可以混用",
            "char 用双引号，String 用单引号",
            "char 用单引号，String 用双引号",
            "Java 中没有 char 类型"
          ],
          answer: "char 用单引号，String 用双引号",
          explanation: "char 表示单个字符，用单引号（如 'A'）；String 表示字符串，用双引号（如 \"Hello\"）。"
        }
      ],
      dragMatch: [
        {
          left: "new",
          right: "关键字，向内存申请空间来创建对象"
        },
        {
          left: "构造方法",
          right: "在创建对象时自动调用，负责初始化对象"
        },
        {
          left: "类（class）",
          right: "Java 程序的基本单位，包含属性和方法"
        },
        {
          left: "对象（object）",
          right: "根据类模板创建出来的具体实例"
        },
        {
          left: "继承（extends）",
          right: "子类获得父类属性和方法的机制，避免重复代码"
        },
        {
          left: "标识符",
          right: "类名、变量名、方法名等自定义名称的总称"
        },
        {
          left: "关键字",
          right: "Java 预定义的具有特殊含义的单词，不能用作标识符"
        },
        {
          left: "boolean",
          right: "逻辑类型，只有 true 和 false 两个值"
        },
        {
          left: "属性",
          right: "描述类\"有什么\"的变量（如 name、age）"
        },
        {
          left: "方法",
          right: "描述类\"能做什么\"的函数（如 speak、walk）"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "程序从 main 方法开始执行。",
          "执行到 Student stu = new Student(); 语句。",
          "new 关键字向 JVM 申请内存空间，准备存放 Student 对象。",
          "JVM 调用 Student 类的构造方法 Student()，初始化对象（设置属性的默认值）。",
          "构造方法执行完毕后，返回对象的地址，赋值给变量 stu。",
          "程序继续执行 stu.name = \"张三\"; 通过对象名.属性名的方式给属性赋值。",
          "程序执行 stu.speak(); 通过对象名.方法名() 的方式调用方法。",
          "JVM 根据 stu 找到对应的对象，再找到 Student 类中的 speak 方法并执行。",
          "speak 方法执行完毕后，程序返回 main 方法，继续执行后面的语句。"
        ]
      },
      exercises: [
        {
          question: "定义一个 Person 类，包含属性 name（String）和 age（int），以及一个 introduce() 方法（输出\"我叫xxx，今年xx岁\"）。然后在 main 方法中创建两个 Person 对象，分别设置不同的名字和年龄，并调用 introduce()。",
          answer: "考查知识点：\n类定义、属性、方法、创建对象\n\n参考答案：\n\npublic class Person {\n    String name;\n    int age;\n\n    public void introduce() {\n        System.out.println(\"我叫\" + name + \"，今年\" + age + \"岁。\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Person p1 = new Person();\n        p1.name = \"张三\";\n        p1.age = 20;\n        p1.introduce();\n\n        Person p2 = new Person();\n        p2.name = \"李四\";\n        p2.age = 22;\n        p2.introduce();\n    }\n}\n\n解题思路：\n1. 定义 Person 类，包含两个属性（name、age）和一个方法（introduce）。\n2. 用 new 创建两个不同的对象。\n3. 分别给两个对象的属性赋值。\n4. 分别调用 introduce() 方法。"
        },
        {
          question: "编写一个 Animal 父类和一个 Cat 子类。Animal 有 name 属性和 eat() 方法。Cat 继承 Animal，并增加一个 meow() 方法。",
          answer: "考查知识点：\n继承（extends）、属性与方法继承\n\n参考答案：\n\npublic class Animal {\n    String name;\n\n    public void eat() {\n        System.out.println(name + \"正在吃东西\");\n    }\n}\n\npublic class Cat extends Animal {\n    public void meow() {\n        System.out.println(name + \"：喵喵喵~\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Cat cat = new Cat();\n        cat.name = \"小花\";      // 继承自 Animal 的属性\n        cat.eat();              // 继承自 Animal 的方法\n        cat.meow();             // Cat 自己的方法\n    }\n}\n\n解题思路：\n1. 先定义 Animal 父类，包含 name 和 eat()。\n2. Cat 用 extends Animal 继承父类。\n3. Cat 中新增 meow() 方法。\n4. 测试时发现 Cat 对象可以直接使用 name 和 eat()，无需在 Cat 中重复定义。"
        },
        {
          question: "判断以下标识符是否合法，并说明原因。\n\n(1) myName\n(2) 2ndPlace\n(3) class\n(4) student_name\n(5) my name",
          answer: "考查知识点：\n标识符命名规则、关键字\n\n参考答案：\n(1) myName —— ✅ 合法。字母组成。\n(2) 2ndPlace —— ❌ 不合法。首字符是数字。\n(3) class —— ❌ 不合法。class 是 Java 关键字。\n(4) student_name —— ✅ 合法。字母加下划线。\n(5) my name —— ❌ 不合法。包含空格。\n\n解题思路：\n依次检查每个标识符是否满足：① 由字母/下划线/美元符号/数字组成；② 首字符不是数字；③ 不是 Java 关键字；④ 不能有空格。"
        },
        {
          question: "写一个程序，声明一个 boolean 变量 isWeekend 表示是否周末，声明一个 int 变量 hour 表示当前时间（0-23）。如果是周末且时间在 9-18 之间，输出\"周末白天，可以出去玩\"，否则输出\"不是周末白天，在家学习\"。",
          answer: "考查知识点：\nboolean 类型、if 条件判断、逻辑运算符\n\n参考答案：\n\npublic class WeekendCheck {\n    public static void main(String[] args) {\n        boolean isWeekend = true;\n        int hour = 14;\n\n        if (isWeekend && hour >= 9 && hour <= 18) {\n            System.out.println(\"周末白天，可以出去玩\");\n        } else {\n            System.out.println(\"不是周末白天，在家学习\");\n        }\n    }\n}\n\n解题思路：\n1. && 表示\"并且\"，三个条件同时满足才执行第一个输出。\n2. 修改 isWeekend 或 hour 的值测试不同结果。"
        },
        {
          question: "阅读以下代码，指出其中存在的 4 处错误。\n\npublic class test {\n    public static void main(string[] args) {\n        int 1score = 100;\n        boolean b = True;\n        Student s = Student();\n        system.out.println(1score);\n    }\n}",
          answer: "考查知识点：\n类名规范、String 大小写、标识符规则、boolean 大小写、new 关键字、System 大小写\n\n参考答案：\n错误1：类名 test 应首字母大写（建议改为 Test）。\n错误2：string[] args 中 String 的 S 必须大写。\n错误3：1score 以数字开头，不合法，应改为 score1。\n错误4：True 应全部小写 true。\n错误5：Student() 前面缺少 new。\n错误6：system 首字母 S 必须大写。\n\n解题思路：\n逐行检查代码，重点检查大小写、new 关键字、标识符规则和 boolean 值的大小写。"
        }
      ],
      conclusion: [
        "本节课的核心是理解面向对象编程中\"类、对象、构造方法、继承\"这四个最基础的概念。它们是整个 Java 学习的地基。",
        "学习 Java 时要特别注意标识符的命名规则（首字符不能是数字、不能用关键字）和大小写问题（关键字全小写、类名首字母大写）。",
        "通过本节课，应该能够区分属性和方法、理解 new 和构造方法的作用、知道继承为什么能实现代码复用。",
        "继承这个知识点后面会和封装、多态一起，构成 Java 面向对象的\"三大特征\"，这是后续课程以及考试的重点内容。",
        "课后建议多练习：① 创建各种类并用 new 创建对象；② 动手写一个简单的继承关系（如 Animal→Cat）；③ 把常见关键字抄写一遍并分类记忆；④ 继续练习盲敲键盘，目标是每分钟 120 个字母。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "面向对象",
        "类与对象",
        "构造方法",
        "继承",
        "关键字",
        "标识符",
        "布尔类型",
        "学习方法"
      ],
      cardSummary: "本节课首先深入讲解了 new 关键字和构造方法的作用——构造方法决定了对象\"带着什么东西来到这个世界\"。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-array-reference",
      title: "数组维度、初始化与引用类型详解",
      chapter: "Java 数组",
      date: "2025-08-28",
      tags: [
        "一维数组",
        "二维数组",
        "数组初始化",
        "引用类型",
        "length属性",
        "内存地址",
        "默认值"
      ],
      summary: [
        "本节课首先用\"射线、X轴Y轴\"的几何类比，清晰区分了一维数组（一个方向）、二维数组（有行有列）和三维数组（立体空间）的维度概念。",
        "课堂中重点讲解了数组的 length 属性——它可以获取一维数组的元素个数，也可以获取二维数组每一行的列数。",
        "老师通过\"数组初始化\"部分强调了两种赋值方式：逐个元素赋值、以及花括号一次性初始化的写法（如 float arr[] = {值1, 值2, ...}）。",
        "本节课的核心难点是数组的引用类型特性——老师用\"班长/高梦涵\"的双重称呼作比喻，深入讲解了引用型变量指向同一地址，\"一处变，处处变\"。",
        "最后对比了普通变量（值传递，互不影响）和引用型变量（地址传递，相互影响）的区别，为后续学习局部变量和方法参数传递打下基础。"
      ],
      keyPoints: [
        {
          title: "数组的维度概念（一维、二维、三维）",
          content: "数组的**维度**（dimension）描述了一个数组有几个\"方向\"。维度越多，数据结构越复杂：\n\n- **一维数组**：只有一个方向，就像一条线（射线），通过一个下标就能访问元素。\n- **二维数组**：有两个方向（X 轴和 Y 轴），就像一张表格/矩阵，有**行**和**列**，需要两个下标来定位。\n- **三维数组**：有三个方向，就像一个立体空间（立方体），需要三个下标来定位。\n\n学习意义：不同维度对应不同的数据组织方式。成绩单是二维的（学生 × 科目），RGB 图像是三维的（宽 × 高 × 颜色通道）。理解维度概念是掌握复杂数据结构的基础。\n\n基本语法/规则：\n// 一维数组\nint[] arr1 = new int[5];           // 像一个有 5 个格子的横排\n\n// 二维数组\nint[][] arr2 = new int[3][4];      // 3 行 × 4 列，像一个表格\n\n// 三维数组\nint[][][] arr3 = new int[2][3][4]; // 2 层 × 3 行 × 4 列\n\n课堂理解：老师用几何概念来类比：\n- **一维**：\"一个方向，就像射线。只有一个下标——boy0、boy1、boy2、boy3。\"\n- **二维**：\"不仅有 X 轴，还有 Y 轴。有两个值了——前面这个叫**行**，后面这个叫**列**。A1 就是第一行第一列。\"\n- **三维**：\"再有一个就是三维了。\"（课堂上老师用立体空间的概念简单带过）。\n\n老师特别强调：一维数组用**一个下标**访问（如 arr[0]），二维数组用**两个下标**（如 arr[行][列]），前面的下标是行，后面的是列。\n\n初学者提醒：\n1. 二维数组的行和列搞反——arr[行][列]，不是 arr[列][行]。\n2. 访问二维数组时只写了一个下标——二维数组必须用两个下标。\n3. 分不清什么场景该用几维数组——能用一个维度解决的不要用两个维度。\n4. 下标从 0 开始但习惯从 1 开始数——长度为 4 的数组，下标范围是 0~3。",
          javaCompare: "一维数组用一个下标访问元素，二维数组用 arr[行][列] 两个下标访问元素。",
          id: "kp-0-x",
          short: "数组的**维度**（dimension）描述了一个数组有几个\"方向\"。维度越多，数据结构越复杂：\n\n- **一维数组**：只有一个方向，就像一条线（射线），通过……",
          mistake: ""
        },
        {
          title: "数组的 length 属性",
          content: "`length` 是数组的一个**属性**（不是方法），表示数组中**元素的个数**。对于一维数组，length 就是元素的总数；对于二维数组，`数组名.length` 表示**行数**，`数组名[行下标].length` 表示该行的**列数**。\n\n学习意义：在遍历数组时，必须知道数组有多长才能避免下标越界。length 属性是访问数组时最常用的工具之一。\n\n基本语法/规则：\n数组名.length           // 一维：元素总个数；二维：行数\n数组名[行下标].length   // 二维：该行的列数\n\n课堂理解：老师用一个关键例子帮助理解：\n- \"A1.length 是不是 3？A2.length 是不是也是 3？A3.length 是不是也是 3？\"\n- 为什么是 3？因为每一行有 3 个元素（3 列）。\n- A1 是第一行，A1.length 得到的是这一行的列数。\n- 所以二维数组中：`数组名.length` = 行数，`数组名[i].length` = 第 i 行的列数。\n\n初学者提醒：\n1. 把 length 当成方法用，写了括号：arr.length() —— 正确是 arr.length（没有括号）。\n2. 在二维数组中，把 arr.length 理解成总元素个数——实际上 arr.length 是行数。\n3. 访问不存在的行的 length：如果只有 3 行，访问 arr[3].length 会下标越界。",
          javaCompare: "一维数组的 arr.length 表示元素总数；二维数组的 arr.length 表示行数，arr[i].length 表示第 i 行的列数。",
          id: "kp-1-length",
          short: "`length` 是数组的一个**属性**（不是方法），表示数组中**元素的个数**。对于一维数组，length 就是元素的总数；对于二维数组，`数组名.len……",
          mistake: ""
        },
        {
          title: "数组的初始化方式",
          content: "数组在声明后，需要**初始化**才能使用。初始化有两种方式：\n\n- **方式一（先声明，再赋值）**：用 `new` 分配空间，系统自动给每个元素赋默认值，然后再逐个赋值。\n- **方式二（声明时直接初始化）**：用花括号 `{}` 把初始值一次性列出，简洁方便。\n\n此外，创建数组后系统会给出**默认值**：int 默认 0，double 默认 0.0，boolean 默认 false，引用类型默认 null。\n\n学习意义：初始化数组是最基本的操作。两种方式各有适用场景——方式一适合\"先占位，后填值\"，方式二适合\"一开始就知道所有值\"。\n\n基本语法/规则：\n// 方式一：先 new，再逐个赋值\n类型[] 数组名 = new 类型[长度];\n数组名[0] = 值1;\n数组名[1] = 值2;\n...\n\n// 方式二：声明时花括号初始化\n类型[] 数组名 = {值1, 值2, 值3, ...};\n\n课堂理解：老师特别强调了方式二中**方括号里不能写数字**：\"float B[]，方括号里面没有数值。你不能写个 4——你怎么知道后面是第几个呀？有很多同学犯错误，搁这直接就给我写个数，那就不对了。\"\n\n换句话说，如果写成 `float B[4] = {1, 2, 3, 4}`，方括号里的 4 是多余的。应该写成 `float[] B = {1, 2, 3, 4}`，让 Java 自动根据花括号里的数量推断长度。\n\n老师还指出：\"按照这个顺序，一个一个地写到我们的 B 的数组里边。第一个就是 B[0]，第二个是 B[1]……\"\n\n**默认值**：老师说明\"创建数组后，系统会给数组当中的每一个元素默认一个值。整型就是 0，float 就是 0.0。\"\n\n初学者提醒：\n1. 在花括号初始化的方括号中写数字：int[5] arr = {1,2,3,4,5};（错误——方括号里不能写数字）。\n2. 忘记 new 关键字：int[] arr = int[5];（错误——应该用 new int[5]）。\n3. 数组创建后没有赋值就直接使用——值为默认值（0），可能不是想要的。\n4. 花括号初始化时多写了分号：int[] arr = {1,2,3,};（最后一个逗号在某些 Java 版本中允许，但不规范）。",
          javaCompare: "new + 逐个赋值适合先占位后填值；花括号初始化适合一开始就知道所有值，方括号里不写长度。",
          id: "kp-2-x",
          short: "数组在声明后，需要**初始化**才能使用。初始化有两种方式：\n\n- **方式一（先声明，再赋值）**：用 `new` 分配空间，系统自动给每个元素赋默认值，然后……",
          mistake: ""
        },
        {
          title: "数组是引用类型——\"一处变，处处变\"",
          content: "Java 中，数组属于**引用类型**（Reference Type）。数组变量存储的不是数据本身，而是数据在内存中的**地址**。当两个数组变量指向同一块地址时，通过任意一个变量修改数据，另一个变量看到的也会跟着改变。这就是——**一处变，处处变**。\n\n学习意义：不理解引用类型，就会出现\"明明只改了 A，为什么 B 也跟着变了\"的困惑。引用类型是理解 Java 内存模型、方法参数传递的关键。\n\n基本语法/规则：\nint[] a = {1, 2, 3};\nint[] b = a;          // b 指向 a 的同一块地址（不是复制）\nb[0] = 100;           // 修改 b 的元素\n// 此时 a[0] 也是 100！因为 a 和 b 指向同一地址\n\n课堂理解：老师用了两个非常精彩的比喻：\n\n**比喻一：班长 = 高梦涵**\n- \"高梦涵\"是她的全名，\"班长\"是她的身份/引用。两个称呼指向的是**同一个人**。\n- 当座位上的人从高梦涵换成了杜涵蕊，\"一班班长\"这个称呼指向的人也跟着变了。\n- \"引用型变量与原变量指向同一块地址。当地址里的数值变了，那这两个值都变了。\"\n\n**比喻二：小名（昵称）**\n- 一个人有大名（张三）和小名（小小），两个名字指的都是同一个人。\n- \"你一个另一个称呼，都是一个人。\"\n- \"引用，换句话说，就是他的小名。\"\n\n**核心结论**（老师让学生记住的口诀）：**\"一处变，处处变。\"**\n\n初学者提醒：\n1. 以为 int[] b = a; 是复制了一份新数组——实际上是让 b 指向和 a 同样的地址。\n2. 修改 b 的元素后，惊讶地发现 a 的元素也变了。\n3. 把普通变量的赋值逻辑（a=1; b=a; b=2; 此时 a 还是 1）套用到数组上。\n4. 想要复制数组却用 = 赋值——应该用循环逐个复制，或用 clone() / System.arraycopy()。",
          javaCompare: "基本类型变量赋值复制的是值，修改后互不影响；数组等引用类型赋值复制的是地址，多个引用指向同一数组时会相互影响。",
          id: "kp-3-x",
          short: "Java 中，数组属于**引用类型**（Reference Type）。数组变量存储的不是数据本身，而是数据在内存中的**地址**。当两个数组变量指向同一块地址……",
          mistake: ""
        },
        {
          title: "普通变量 vs 引用型变量",
          content: "Java 中的变量分为两类：\n\n- **普通变量（基本类型）**：直接存储数据值本身（如 int、double、boolean）。赋值时复制的是值，两个变量互不影响。\n- **引用型变量（引用类型）**：存储的是数据在内存中的地址（如数组、String、自定义类的对象）。赋值时复制的是地址，两个变量指向同一个数据。\n\n学习意义：这是 Java 中最容易被忽视但影响深远的概念。不理解这个区别，后面学方法参数传递（值传递 vs 引用传递）、对象比较（== vs equals）都会经常出错。\n\n基本语法/规则：\n// 普通变量：值传递\nint a = 1;\nint b = a;   // b 复制 a 的值\na = 2;       // a 变了，b 不变\n\n// 引用变量：地址传递\nint[] arr1 = {1, 2};\nint[] arr2 = arr1;   // arr2 复制 arr1 的地址\narr1[0] = 100;       // arr1 和 arr2 都看到变化\n\n课堂理解：老师用一个清晰的对比来解释：\n\n- **普通变量**：\"A 变 B 不变，你愿意怎么变就怎么变，跟我没有关系。A 怎么变 B 也不管，B 怎么变 A 也不管。这是两个不同的东西。\"\n- **引用变量**：\"B 变 A 就变，A 变 B 就变。这两个东西都指向同一块地址，就是一个东西。\"\n\n老师还打了一个数学的比方：\"就像 e 的 a 次方和 e 的 b 次方一样，在某一时刻它俩都等于 1。过一段时间 a 变成 2 了，但 b 还是一。这就是两个不同的变量。\"\n\n初学者提醒：\n1. 把数组赋值当成\"复制内容\"——实际上复制的是地址。\n2. 在写方法时，把数组作为参数传入，在方法内部修改数组，结果方法外面的数组也变了。\n3. 对 String 类型的引用行为产生误解——String 虽然是引用类型，但它是不可变的（后面会学）。",
          javaCompare: "基本类型变量赋值复制的是值，修改后互不影响；数组等引用类型赋值复制的是地址，多个引用指向同一数组时会相互影响。",
          id: "kp-4-vs",
          short: "Java 中的变量分为两类：\n\n- **普通变量（基本类型）**：直接存储数据值本身（如 int、double、boolean）。赋值时复制的是值，两个变量互不……",
          mistake: ""
        },
        {
          title: "数组默认值与逐个赋值",
          content: "当用 `new 类型[长度]` 创建数组后，在没有手动赋值之前，Java 会自动给每个元素一个**默认值**：\n\n| 数组类型 | 默认值 |\n|---------|--------|\n| int[] | 0 |\n| double[] | 0.0 |\n| float[] | 0.0f |\n| boolean[] | false |\n| char[] | '\u0000'（空字符） |\n| 引用类型[]（如 String[]） | null |\n\n学习意义：如果不了解默认值机制，就可能误以为未赋值的数组元素是\"空的\"或\"随机的\"，导致逻辑 bug。\n\n基本语法/规则：\nint[] arr = new int[5];     // 5 个元素默认全是 0\narr[0] = 10;                // 只给第 1 个赋值\n// arr[1] ~ arr[4] 仍然是 0\n\n课堂理解：老师用一句话总结：\"创建数组后，系统会给数组当中的每一个元素默认一个值。整型就是 0。\"\n\n然后说明了赋值的两种途径：\n1. **逐个赋值**：\"要 1 给他，2 给他，他他他一个一个给。\"\n2. **初始化列表**：\"按照这个顺序，一个一个地写到数组里边。第一个就是 B[0]，第二个 B[1]……\"\n\n初学者提醒：\n1. 以为 new int[5] 后元素的值是\"空\"或\"未定义\"——实际全是 0。\n2. 以为 new String[5] 后元素是空字符串 \"\"——实际是 null（null 和 \"\" 完全不同）。\n3. 期望默认值是随机数——Java 会明确赋默认值，不会有\"垃圾数据\"。",
          javaCompare: "基本类型数组有明确默认值，如 int 为 0、double 为 0.0、boolean 为 false；引用类型数组默认值是 null。",
          id: "kp-5-x",
          short: "当用 `new 类型[长度]` 创建数组后，在没有手动赋值之前，Java 会自动给每个元素一个**默认值**：\n\n| 数组类型 | 默认值 |\n|-------……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "一维数组与二维数组的 length 属性",
          code: "public class LengthDemo {\n    public static void main(String[] args) {\n        // 一维数组\n        double[] grades = {85.5, 92.0, 78.5, 88.0};\n        System.out.println(\"成绩数组长度：\" + grades.length);       // 4\n\n        // 二维数组（不规则：每行列数可以不同）\n        int[][] table = {\n            {1, 2, 3},          // 第 1 行：3 列\n            {4, 5},             // 第 2 行：2 列\n            {6, 7, 8, 9}        // 第 3 行：4 列\n        };\n\n        System.out.println(\"table 行数：\" + table.length);          // 3\n        for (int i = 0; i < table.length; i++) {\n            System.out.println(\"第\" + (i+1) + \"行列数：\" + table[i].length);\n        }\n        // 输出：\n        // 第1行列数：3\n        // 第2行列数：2\n        // 第3行列数：4\n    }\n}",
          explanation: "1. grades.length 返回 4，因为一维数组有 4 个元素。\n2. table.length 返回 3，因为二维数组有 3 行。\n3. table[i].length 返回第 i 行的列数——每行的列数可以不同（不规则数组）。\n4. 第 1 行有 {1,2,3} 3 个元素，第 2 行有 {4,5} 2 个元素。"
        },
        {
          title: "普通变量 vs 引用型变量的区别",
          code: "public class ValueVsReference {\n    public static void main(String[] args) {\n        // ====== 场景 1：普通变量 ======\n        System.out.println(\"===== 普通变量 =====\");\n        int a = 10;\n        int b = a;          // b 复制了 a 的值\n        System.out.println(\"赋值后：a=\" + a + \", b=\" + b);  // a=10, b=10\n\n        a = 999;            // 修改 a\n        System.out.println(\"修改 a 后：a=\" + a + \", b=\" + b);  // a=999, b=10（b 不变！）\n\n        // ====== 场景 2：数组（引用类型） ======\n        System.out.println(\"\\n===== 数组（引用类型） =====\");\n        int[] arr1 = {10, 20, 30};\n        int[] arr2 = arr1;  // arr2 指向 arr1 的同一块地址\n        System.out.println(\"赋值后：arr1[0]=\" + arr1[0] + \", arr2[0]=\" + arr2[0]);\n\n        arr1[0] = 999;      // 通过 arr1 修改\n        System.out.println(\"修改 arr1[0] 后：arr1[0]=\" + arr1[0] + \", arr2[0]=\" + arr2[0]);\n        // arr1[0]=999, arr2[0]=999（arr2 也跟着变了！）\n    }\n}",
          explanation: "1. 普通变量 a=10, b=a 后：a 和 b 各存各的。改 a 不影响 b。\n2. 数组 arr2 = arr1 后：arr2 拿到的是 arr1 的地址，它们指着同一块内存。\n3. 所以改 arr1[0] = 999 后，arr2[0] 也变成了 999——\"一处变，处处变\"。"
        },
        {
          title: "数组初始化的正确与错误写法",
          code: "public class ArrayInitDemo {\n    public static void main(String[] args) {\n        // ✅ 正确写法 1：先 new，再逐个赋值\n        int[] scores = new int[3];\n        scores[0] = 90;\n        scores[1] = 85;\n        scores[2] = 78;\n\n        // ✅ 正确写法 2：花括号直接初始化（方括号里不写数字）\n        float[] prices = {9.9f, 19.9f, 29.9f};\n\n        // ✅ 正确写法 3：声明和初始化分开\n        String[] names;\n        names = new String[]{\"张三\", \"李四\", \"王五\"};  // 分开写时前面要加 new String[]\n\n        // ❌ 错误写法 1：花括号初始化时方括号里写了数字\n        // int[3] arr = {1, 2, 3};   // 编译错误！\n\n        // ❌ 错误写法 2：分开声明时忘记 new String[]\n        // String[] names;\n        // names = {\"张三\", \"李四\", \"王五\"};  // 编译错误！\n\n        // 验证结果\n        System.out.println(\"scores[0] = \" + scores[0]);    // 90\n        System.out.println(\"prices[1] = \" + prices[1]);    // 19.9\n        System.out.println(\"names[2] = \" + names[2]);      // 王五\n    }\n}",
          explanation: "1. 方式一（new + 逐个赋值）：适合先占位后填值的场景。\n2. 方式二（花括号）：适合一开始就知道所有值的场景，方括号里不能写数字。\n3. 方式三（声明与初始化分开）：分开时，赋值的右边必须写 new String[]{...}，不能只写 {...}。\n4. 错误写法 1：int[3] arr = {1,2,3}; 方括号里写了 3——Java 会根据花括号里的数量自动推断。\n5. 错误写法 2：分开声明时直接写 {...}——Java 不允许，必须加 new String[]。"
        }
      ],
      quiz: [
        {
          question: "以下获取数组长度的代码，哪个是正确的？",
          options: [
            "int len = arr.size();",
            "int len = arr.length();",
            "int len = arr.length;",
            "int len = arr.getLength();"
          ],
          answer: "int len = arr.length;",
          explanation: "数组的 length 是属性，不需要括号。A 是集合（ArrayList）的方法，B 是 String 的方法，D 不存在。"
        },
        {
          question: "以下代码的输出结果是什么？",
          options: [
            "1",
            "100",
            "编译错误",
            "3"
          ],
          answer: "100",
          explanation: "b = a 让 b 和 a 指向同一块地址。b[0] = 100 修改了这块地址的第一个元素，所以 a[0] 也是 100。"
        },
        {
          question: "二维数组 int[][] arr = new int[3][4]; 中，arr.length 的值是多少？",
          options: [
            "12",
            "3",
            "4",
            "7"
          ],
          answer: "3",
          explanation: "对于二维数组，arr.length 返回的是行数（即 3）。总元素个数是 3×4=12，但 arr.length 只给出行数。"
        },
        {
          question: "以下数组初始化的写法中，哪个是错误的？",
          options: [
            "int[] arr = {1, 2, 3};",
            "int[] arr = new int[]{1, 2, 3};",
            "int[] arr = new int[3];",
            "int[3] arr = {1, 2, 3};"
          ],
          answer: "int[3] arr = {1, 2, 3};",
          explanation: "花括号初始化时，方括号里不能写数字。Java 会根据花括号内的数量自动推断长度。"
        },
        {
          question: "关于数组默认值，以下说法正确的是？",
          options: [
            "int[] 的默认值是 null",
            "boolean[] 的默认值是 true",
            "String[] 的默认值是 \"\"",
            "double[] 的默认值是 0.0"
          ],
          answer: "double[] 的默认值是 0.0",
          explanation: "int[] 默认 0（不是 null），boolean[] 默认 false（不是 true），String[] 默认 null（不是 \"\"），double[] 默认 0.0。"
        },
        {
          question: "以下代码能否编译通过？",
          options: [
            "能，输出 0",
            "编译错误",
            "运行时错误（ArrayIndexOutOfBoundsException）",
            "输出 null"
          ],
          answer: "运行时错误（ArrayIndexOutOfBoundsException）",
          explanation: "代码本身没有语法错误，能编译通过。但运行时 arr[5] 会抛 ArrayIndexOutOfBoundsException，因为长度为 5 的数组下标范围是 0~4，arr[5] 访问的是第 6 个元素（不存在）。\n```\n\n---"
        }
      ],
      dragMatch: [
        {
          left: "一维数组",
          right: "只有一个方向，通过一个下标访问元素，就像一条射线"
        },
        {
          left: "二维数组",
          right: "有两个方向（行和列），通过 arr[行][列] 访问，就像一张表格"
        },
        {
          left: "length 属性",
          right: "获取数组元素个数，一维是总个数，二维是行数"
        },
        {
          left: "数组默认值",
          right: "创建数组后系统自动赋予的初始值，int 为 0，double 为 0.0"
        },
        {
          left: "引用类型",
          right: "变量存储的是内存地址而非数据本身，数组属于引用类型"
        },
        {
          left: "值传递",
          right: "普通变量赋值时复制数值，两个变量互不影响"
        },
        {
          left: "地址传递",
          right: "引用变量赋值时复制地址，指向同一块数据的变量相互影响"
        },
        {
          left: "花括号初始化",
          right: "声明数组时直接用 {} 给出所有值，方括号里不写数字"
        },
        {
          left: "null",
          right: "引用类型的默认值，表示\"没有指向任何对象\""
        },
        {
          left: "一处变处处变",
          right: "引用型变量的核心特征：通过任一引用修改数据，所有引用都能看到变化"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "程序执行 int[] a = {1, 2, 3}; —— JVM 在内存中分配一块空间，存入 {1, 2, 3}，变量 a 中存储的是这块空间的地址。",
          "程序执行 int[] b = a; —— 变量 b 获得了 a 中存储的地址，现在 a 和 b 指向同一块内存空间。",
          "程序执行 b[0] = 100; —— JVM 根据 b 中的地址找到内存空间，将第一个元素改为 100。",
          "此时通过 a 查看 —— a 也指向同一块空间，所以 a[0] 也是 100。",
          "这就是\"一处变，处处变\"——改的是内存中的数据本身，所有指向这块内存的引用都能看到变化。",
          "如果这是普通变量 int x = 10; int y = x; y = 20; —— y 变 20 不影响 x，因为它们是各自独立的内存空间。"
        ]
      },
      exercises: [
        {
          question: "创建一个长度为 6 的一维数组，存入一周的课程名称（周一到周六），然后分别输出第 1 天和最后一天的课程。",
          answer: "public class WeekCourses {\n    public static void main(String[] args) {\n        String[] courses = {\"高数\", \"英语\", \"Java\", \"体育\", \"思政\", \"线性代数\"};\n        System.out.println(\"第1天：\" + courses[0]);\n        System.out.println(\"最后一天：\" + courses[courses.length - 1]);\n    }\n}\n\n解题思路：\n第 1 天用下标 0，最后一天用 length-1（6-1=5），这样即使数组长度变化代码也不会错。"
        },
        {
          question: "创建一个 2 行 3 列的二维数组，存入以下数据，然后按表格格式输出：\n\n第 1 行：学号 001，数学 90，英语 85\n第 2 行：学号 002，数学 78，英语 92",
          answer: "public class ScoreTable {\n    public static void main(String[] args) {\n        String[][] table = {\n            {\"001\", \"90\", \"85\"},\n            {\"002\", \"78\", \"92\"}\n        };\n\n        System.out.println(\"学号\\t数学\\t英语\");\n        System.out.println(table[0][0] + \"\\t\" + table[0][1] + \"\\t\" + table[0][2]);\n        System.out.println(table[1][0] + \"\\t\" + table[1][1] + \"\\t\" + table[1][2]);\n    }\n}\n\n解题思路：\n二维数组的每一行用花括号包裹，每个元素用逗号分隔。输出时按行遍历，每行输出每列的值。"
        },
        {
          question: "阅读以下代码，说明为什么 arr1[0] 的值变了。\n\nint[] arr1 = {5, 10, 15};\nint[] arr2 = arr1;\narr2[0] = 50;\nSystem.out.println(arr1[0]);",
          answer: "输出 50。因为 arr2 = arr1 是将 arr1 的地址赋给了 arr2，它们指向同一块内存空间。arr2[0] = 50 修改了这块空间的数据，所以 arr1[0] 也变成了 50。\n\n解题思路：\n数组是引用类型。= 赋值复制的是地址，不是内容。两个变量指向同一块数据，改任意一个另一个都会受影响。"
        },
        {
          question: "写一个程序，先创建一个包含 {10, 20, 30, 40, 50} 的数组 a，然后创建一个新数组 b，将 a 的内容真正复制到 b 中（不是引用复制），然后修改 b[0] = 999，验证 a[0] 是否还是 10。",
          answer: "public class ArrayCopy {\n    public static void main(String[] args) {\n        int[] a = {10, 20, 30, 40, 50};\n\n        // 真正复制：new 新数组 + 逐个元素复制\n        int[] b = new int[a.length];\n        for (int i = 0; i < a.length; i++) {\n            b[i] = a[i];\n        }\n\n        b[0] = 999;    // 修改 b\n\n        System.out.println(\"a[0] = \" + a[0]);  // 10（没变！）\n        System.out.println(\"b[0] = \" + b[0]);  // 999\n    }\n}\n\n解题思路：\n想要真正的复制（两个独立的数组），必须 new 一个新数组，然后循环复制每个元素。直接用 = 赋值只是引用传递，不是复制。"
        },
        {
          question: "找出以下代码中的 4 处错误。\n\npublic class Test {\n    public static void main(String[] args) {\n        int[3] arr = {1, 2, 3};            // 错误1\n        int len = arr.length();             // 错误2\n        int[][] matrix = new int[2][2];\n        matrix[1][1] = 10;\n        System.out.println(matrix[2][0]);   // 错误3\n    }\n}",
          answer: "错误1：int[3] arr → int[] arr（花括号初始化时方括号不能写数字）\n错误2：arr.length() → arr.length（length 是属性，没有括号）\n错误3：matrix[2][0] → 行下标越界，matrix 只有 2 行（下标 0 和 1），[2] 访问的是第 3 行\n\n解题思路：\n逐行检查语法：花括号初始化规则 → length 属性无括号 → 下标不能 ≥ 数组长度。\n```\n\n---"
        }
      ],
      conclusion: [
        "本节课的核心是掌握数组的维度概念（一维/二维/三维）、length 属性的用法，以及区分数组初始化的两种方式（new + 逐个赋值 vs 花括号一次性初始化）。",
        "学习数组时要特别注意两个容易出错的点：花括号初始化时方括号里不能写数字，length 是属性不是方法（没有括号）。",
        "本节课最重要的概念是引用类型——数组是引用类型变量，int[] b = a; 复制的是地址而不是内容。记住口诀：\"一处变，处处变。\"",
        "引用类型的概念在后续的方法参数传递、对象赋值、集合操作中会反复出现，是 Java 内存模型的核心，一定要理解透彻。",
        "课后建议多练习：(1) 用两种方式初始化数组并输出；(2) 创建一个二维数组并用双重循环输出表格；(3) 验证引用类型的行为——写代码对比普通变量赋值和数组赋值的结果差异；(4) 实现数组的\"真正复制\"。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "一维数组",
        "二维数组",
        "数组初始化",
        "引用类型",
        "length属性",
        "内存地址",
        "默认值"
      ],
      cardSummary: "本节课首先用\"射线、X轴Y轴\"的几何类比，清晰区分了一维数组（一个方向）、二维数组（有行有列）和三维数组（立体空间）的维度概念。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-data-types-array",
      title: "Java 基本数据类型与数组入门",
      chapter: "Java 变量与数据类型",
      date: "2025-08-28",
      tags: [
        "标识符",
        "关键字",
        "基本数据类型",
        "类型转换",
        "boolean",
        "int",
        "char",
        "float",
        "double",
        "数组",
        "二维数组"
      ],
      summary: [
        "本节课首先复习了标识符的定义规则（四大类组成元素，首字符不能是数字）和关键字的概念（不能用作标识符）。",
        "课堂中重点讲解了 Java 的 8 种基本数据类型，分为四大类——逻辑类型（boolean）、整数类型（byte/short/int/long）、字符类型（char）、浮点类型（float/double）。",
        "老师通过\"胖人坐瘦椅子\"的形象比喻，帮助理解自动类型转换（低精度→高精度）和强制类型转换（高精度→低精度）的区别。",
        "本节课的核心内容是数组，老师用矩阵的行列概念解释了一维数组和二维数组的结构，以及通过下标（行、列）访问元素的方法。",
        "最后通过打印语句的对比，区分了 print（不换行）和 println（自动换行），以及字符串拼接（用 + 号）的用法。"
      ],
      keyPoints: [
        {
          title: "标识符的完整规则",
          content: "**标识符**是 Java 中用来标识类名、变量名、方法名、类型名、数组名、文件名的有效字符序列的统称。简单说，所有你可以**自己命名**的东西都叫标识符。\n\n学习意义：Java 中到处都是标识符——每定义一个变量、一个类、一个方法，都在使用标识符。如果不了解标识符规则，写出来的名字可能是非法的，导致编译错误。\n\n基本语法/规则：\n**标识符的四条规则（需要记住）：**\n\n```text\n规则 1：由字母、下划线 _、美元符号 $、数字 这四类字符组成。\n规则 2：第一个字符不能是数字。\n规则 3：长度没有限制。\n规则 4：不能是 Java 的关键字（如 int、class、public 等）。\n```\n\n课堂理解：老师用一个选择题来帮助学生理解：\"下列哪个满足标识符的定义？\"关键是三个判断：\n- `int 1a;` → ❌ 首字符是数字\n- `int a1;` → ✅ 首字符是字母\n- `int 中;` → Java 中不推荐用中文，虽然技术上可能不报错，但极易出问题\n\n老师总结：\"标识符就是一个名称。类名、变量名、方法名、类型名、数组名、文件名——这些都是你可以自定义的，都用标识符来框起来。\"\n\n初学者提醒：\n1. 首字符用了数字（如 int 1score;）。\n2. 标识符中包含了空格（如 int my score;）。\n3. 用了关键字做标识符（如 int class;）。\n4. 用了特殊符号（如 int my-name; 中 - 不是合法字符）。\n5. 用中文做标识符（虽然某些情况下不报错，但强烈不推荐）。",
          javaCompare: "",
          id: "kp-0-x",
          short: "**标识符**是 Java 中用来标识类名、变量名、方法名、类型名、数组名、文件名的有效字符序列的统称。简单说，所有你可以**自己命名**的东西都叫标识符。\n\n……",
          mistake: ""
        },
        {
          title: "Java 的 8 种基本数据类型",
          content: "Java 提供 **8 种基本数据类型（primitive types）**，可以分为**四大类**：\n\n| 分类 | 类型 | 占用字节 | 说明 |\n|------|------|---------|------|\n| 逻辑类型 | `boolean` | 1 字节 | 只有 true 和 false 两个值 |\n| 整数类型 | `byte` | 1 字节（8 位） | 最小整数类型 |\n| 整数类型 | `short` | 2 字节（16 位） | 短整型 |\n| 整数类型 | `int` | 4 字节（32 位） | 最常用的整数类型 |\n| 整数类型 | `long` | 8 字节（64 位） | 长整型（值后面加 L） |\n| 字符类型 | `char` | 2 字节（16 位） | 单个字符，用单引号 |\n| 浮点类型 | `float` | 4 字节（32 位） | 单精度浮点（值后面加 f） |\n| 浮点类型 | `double` | 8 字节（64 位） | 双精度浮点（小数默认类型） |\n\n学习意义：声明每个变量时都必须指定数据类型。不同数据类型占用的内存空间不同，取值范围不同，适用的场景也不同。选错了数据类型可能导致数据溢出、精度丢失或内存浪费。\n\n基本语法/规则：\n// 整数类型\nbyte  b = 127;          // byte：-128 ~ 127\nshort s = 32767;        // short：约 ±3 万\nint   i = 100;          // int：约 ±21 亿（最常用）\nlong  l = 100000L;      // long：后面必须加 L\n\n// 浮点类型\nfloat  f = 3.14f;       // float：后面必须加 f\ndouble d = 3.1415926;   // double：小数默认类型\n\n// 字符类型\nchar c = 'A';           // char：单引号，只能放一个字符\n\n// 逻辑类型\nboolean flag = true;    // boolean：只有 true 或 false\n\n课堂理解：老师用\"内存空间\"的概念来解释为什么不同的类型占不同字节：**\"我们在申请内存的时候，要让 CPU 知道我要多大的空间。你告诉操作系统，它就会在内存中给你找一块地方放你的变量。\"**\n\n老师还用一个生动比喻来说明为什么 int 是 32 位：\"一个字节是 8 位，四个字节就是 32 位。在内存里存储的都是 0 和 1。就像电影《黑客帝国》里那个场景——除了 0 就是 1，但这两个数字可以解释所有的东西。\"\n\n对于类型级别，老师总结了一个从低到高的顺序：**byte → short → char → int → long → float → double**（从小到大）。\n\n初学者提醒：\n1. 把 byte 和 short 与 int 搞混——不知道什么时候用哪个（初学时大部分情况用 int 即可）。\n2. float 的值后面忘记加 f——小数默认是 double 类型。\n3. long 的值后面忘记加 L——大整数默认是 int 类型。\n4. char 用双引号而不是单引号——'A' 是 char，\"A\" 是 String。\n5. 以为 String 是基本数据类型——String 是引用类型（一个类）。",
          javaCompare: "",
          id: "kp-1-java-8",
          short: "Java 提供 **8 种基本数据类型（primitive types）**，可以分为**四大类**：\n\n| 分类 | 类型 | 占用字节 | 说明 |\n|--……",
          mistake: ""
        },
        {
          title: "类型转换——自动转换与强制转换",
          content: "Java 中不同类型之间进行赋值时，有时可以自动完成转换，有时需要程序员**手动指定**。这就是类型转换（Type Casting），分为两种：\n\n- **自动类型转换**：低精度类型 → 高精度类型，自动发生，不需要特殊操作。\n- **强制类型转换**：高精度类型 → 低精度类型，需要程序员手动写 `(目标类型)`，且可能丢失数据。\n\n学习意义：实际编程中经常需要在不同类型之间转换数据。比如从用户输入读取的可能是 String，需要转成 int 来计算；或者 double 运算结果只需要保留整数部分。不理解类型转换规则，代码就会编译失败或产生意料之外的结果。\n\n基本语法/规则：\n// 自动类型转换（低 → 高）\nint i = 100;\ndouble d = i;           // int 自动转为 double，OK\n\n// 强制类型转换（高 → 低）\ndouble pi = 3.14;\nint n = (int) pi;       // 手动强制转换，n 的值为 3（小数部分被截断，不是四舍五入）\n\n课堂理解：老师用了**\"胖人坐瘦椅子\"**的经典比喻来解释两种转换：\n\n- **自动类型转换（低→高）**：就像一个瘦小的人（低精度）坐在大学教室的大座位上（高精度）——\"他自己就坐上去了，没有问题，反正这个位置空的，可以坐下\"。\n- **强制类型转换（高→低）**：就像一个胖人（高精度）要坐在一个小的座位上（低精度）——\"坐不下怎么办？就得想办法，减减肥（瘦身）。\"对应到代码中，就是需要手动写 `(目标类型)` 来强制转换，而且**小数部分直接舍去**（不是四舍五入）。\n\n老师特别强调：\"1.999 强制转成 int 也是 1，小数点后边一刀切，都不要了，因为你放不下了。\"\n\n**精度从低到高的顺序**（老师板书修正后）：\n```text\nbyte → short → char → int → long → float → double\n（低精度）                              （高精度）\n```\n\n初学者提醒：\n1. 以为 float 转 int 是四舍五入——实际上是直接截断（1.9 → 1，不是 2）。\n2. 高精度转低精度忘记写强制转换语法（比如 double 直接赋给 int 会编译错误）。\n3. 混淆精度顺序，以为 float 比 long 精度低——实际上 float 的\"级别\"比 long 高（因为 float 能表示小数）。\n4. 强制转换可能造成数据溢出——比如把一个很大的 long 值强转为 int。",
          javaCompare: "自动类型转换是低精度到高精度，Java 可以自动完成；强制类型转换是高精度到低精度，必须写 (目标类型)，并且可能丢失数据。",
          id: "kp-2-x",
          short: "Java 中不同类型之间进行赋值时，有时可以自动完成转换，有时需要程序员**手动指定**。这就是类型转换（Type Casting），分为两种：\n\n- **自动……",
          mistake: ""
        },
        {
          title: "字符类型（char）详解",
          content: "`char` 是 Java 中表示**单个字符**的数据类型。它占用 2 个字节（16 位），使用**单引号**来表示。一个 char 变量只能存放一个字符，可以是一个英文字母、一个数字字符或一个中文汉字。\n\n学习意义：处理文字信息是程序最常见的工作。char 是字符串 String 的基础组成单位——String 本质上就是多个 char 的序列。char 和 int 之间可以进行转换（通过 ASCII/Unicode 码），这在处理字符编码时非常有用。\n\n基本语法/规则：\nchar 变量名 = '单个字符';    // 必须用单引号\n```\n\n**char 的关键特性：**\n\n- 用**单引号** `''` 包裹（String 用双引号 `\"\"`）\n- 只能放**一个**字符\n- 占用 **2 字节（16 位）**\n- 可以存英文（1 字节）或中文（2 字节）\n- 可以赋值为 Unicode 编码：`char c = 'A';`（等同于 'A'）\n\n课堂理解：老师用一个重要的区分帮助学生理解：\n- **char**：单引号，一个字母 = 一个字符（如 'A'、'中'）\n- **String**：双引号，是一个字符串（如 \"Hello\"、\"I like Java\"）\n\n**关键考点**：一个汉字占 2 个字节（16 位），char 恰好也是 2 个字节（16 位），所以**一个汉字可以放在一个 char 变量中**。这是二级考试常见的考点。\n\n老师还提到 char 和 int 之间的关系——\"A 在 ASCII 码里好像是 96？哦，我忘了，你们可以去查一下\"。实际上，标准 ASCII 码中，'A' = 65，'a' = 97。（这是课堂上老师记忆模糊的地方，在此修正。）\n\n初学者提醒：\n1. char 用了双引号：char c = \"A\";（应该是 'A'）。\n2. 在 char 中放了多个字符：char c = 'AB';（char 只能是一个字符）。\n3. 空 char 写法错误：char c = '';（至少要有一个字符，可以写 char c = ' '; 表示空格）。\n4. 混淆 char 和 String 的字节占用——char 2 字节，String 取决于长度和编码。",
          javaCompare: "char 使用单引号，只能存一个字符；String 使用双引号，可以存多个字符，是引用类型而不是基本数据类型。",
          id: "kp-3-char",
          short: "`char` 是 Java 中表示**单个字符**的数据类型。它占用 2 个字节（16 位），使用**单引号**来表示。一个 char 变量只能存放一个字符，可……",
          mistake: ""
        },
        {
          title: "print 与 println 的区别",
          content: "`System.out.print()` 和 `System.out.println()` 都是 Java 的输出语句，区别在于：\n\n- **print**：输出内容后**不换行**，光标停留在同行末尾。\n- **println**：输出内容后**自动换行**，光标移到下一行开头。\n\n其中 `ln` 是 **line** 的缩写。\n\n学习意义：控制输出格式是程序的基本需求。有时候需要把多段内容输出在同一行（用 print），有时候需要分行显示（用 println）。如果用错了，输出结果会乱成一片。\n\n基本语法/规则：\nSystem.out.print(内容);     // 输出后不换行\nSystem.out.println(内容);   // 输出后换行\nSystem.out.println();       // 只换行，不输出内容\n\n课堂理解：老师用一个非常直观的方式解释：\n- **print**：输出完了，\"光标还在这闪烁\"，下一次输出**紧接着**当前位置继续。\n- **println**：输出完了，光标自动移到**下一行开头**，下一次输出从新行开始。\n\n老师画了一个演示效果：\n```text\nprint \"Hello\" → 输出 Hello，光标在 o 后面 →\nprint \"World\" → World 紧接着 Hello 输出，变成 HelloWorld\n\nprintln \"Hello\" → 输出 Hello，光标跳到下一行 →\nprintln \"World\" → 在新行输出 World\n```\n\n初学者提醒：\n1. 搞混 print 和 println，该换行的时候用 print，该同行的时候用 println。\n2. 写错方法名：printline（错误）、Println（错误）——正确是 println（全小写）。\n3. 以为 println 的 ln 是 In（大写 i）——其实是小写 L + n（line 的缩写）。",
          javaCompare: "print 输出后不换行，println 输出后自动换行；ln 是 line 的缩写。",
          id: "kp-4-print-println",
          short: "`System.out.print()` 和 `System.out.println()` 都是 Java 的输出语句，区别在于：\n\n- **print**：输……",
          mistake: ""
        },
        {
          title: "数组——一维数组与二维数组",
          content: "**数组**是用来存储**多个相同类型数据**的容器。数组中的每个数据称为**元素**，通过**下标（索引）**来访问。Java 中的数组下标从 **0** 开始。\n\n- **一维数组**：像一排格子，每个格子存一个数据。\n- **二维数组**：像一个表格/矩阵，有**行**和**列**两个维度。\n\n学习意义：当需要处理大量同类型数据时（如全班 50 个学生的成绩、一张表格的数据），不可能给每个数据单独声明一个变量。数组让我们可以用一个变量名统一管理一组数据，通过下标灵活访问任意元素。数组也是后续学习集合（ArrayList、HashMap）和数据结构的基础。\n\n基本语法/规则：\n**一维数组：**\n\n```java\n// 声明方式一：先声明后赋值\n数据类型[] 数组名 = new 数据类型[长度];\n数组名[下标] = 值;\n\n// 声明方式二：声明并初始化\n数据类型[] 数组名 = {值1, 值2, 值3, ...};\n```\n\n**二维数组：**\n\n```java\n// 声明方式\n数据类型[][] 数组名 = new 数据类型[行数][列数];\n\n// 访问元素\n数组名[行下标][列下标];\n```\n\n课堂理解：老师用**数学中的矩阵**来类比二维数组：\n\n```text\n矩阵：          二维数组：\nA11 A12 A13    arr[0][0] arr[0][1] arr[0][2]\nA21 A22 A23    arr[1][0] arr[1][1] arr[1][2]\nA31 A32 A33    arr[2][0] arr[2][1] arr[2][2]\n```\n\n- **前面的数字** = **行**（row）\n- **后面的数字** = **列**（column）\n- 第一个位置是 `[0][0]`，不是 `[1][1]`（下标从 0 开始）\n- `arr[1][2]` 表示第 2 行第 3 列的元素\n\n老师还解释了二维数组的本质：**\"二维数组其实是在一维数组里面，每一个单元分出来的小单元。\"** 即一个一维数组的每个元素本身又是一个数组（小数组）。\n\n老师还将数组与大数据联系起来：**\"转置一下就立起来了——一个人的信息我们称之为样本，这就是大数据取数据的方式。\"** 将横着的数据（行）转置变成竖着的（列），每一列就是一个样本的所有信息。\n\n初学者提醒：\n1. 数组下标从 0 开始，初学者容易从 1 开始算（数组越界错误）。\n2. 忘记用 new 分配空间就直接使用，导致空指针异常。\n3. 数组声明和初始化语法混淆（如 int[] arr = new int[3]{1,2,3}; 是错的——带 new 不能同时写具体值）。\n4. 二维数组的行和列搞反（arr[行][列] 不是 arr[列][行]）。\n5. 数组长度一旦声明就不能改变（要动态大小需要用 ArrayList）。",
          javaCompare: "一维数组用一个下标访问元素，二维数组用 arr[行][列] 两个下标访问元素。",
          id: "kp-5-x",
          short: "**数组**是用来存储**多个相同类型数据**的容器。数组中的每个数据称为**元素**，通过**下标（索引）**来访问。Java 中的数组下标从 **0** 开……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "8 种基本数据类型综合演示",
          code: "public class AllTypesDemo {\n    public static void main(String[] args) {\n        // 逻辑类型\n        boolean isJavaFun = true;\n\n        // 整数类型（4 种）\n        byte  b = 100;                // 1 字节\n        short s = 30000;              // 2 字节\n        int   i = 2000000000;         // 4 字节（最常用）\n        long  l = 9000000000000L;     // 8 字节（加 L）\n\n        // 字符类型\n        char c = 'J';\n\n        // 浮点类型（2 种）\n        float  f = 3.14f;             // 4 字节（加 f）\n        double d = 3.14159265358979;  // 8 字节\n\n        // 输出所有类型\n        System.out.println(\"boolean: \" + isJavaFun);\n        System.out.println(\"byte: \" + b);\n        System.out.println(\"short: \" + s);\n        System.out.println(\"int: \" + i);\n        System.out.println(\"long: \" + l);\n        System.out.println(\"char: \" + c);\n        System.out.println(\"float: \" + f);\n        System.out.println(\"double: \" + d);\n    }\n}",
          explanation: "1. 本程序展示了 Java 的 8 种基本数据类型的声明和初始化。\n2. 每个类型的声明格式都是：类型 变量名 = 值;\n3. 注意 float 的值 3.14 后面必须加 f。\n4. 注意 long 的值 9000000000000 后面必须加 L（这个数超过了 int 的范围）。\n5. 用 + 号可以实现字符串和变量的拼接输出。"
        },
        {
          title: "类型转换的完整演示",
          code: "public class TypeConversionDemo {\n    public static void main(String[] args) {\n        // ====== 案例 1：自动类型转换 ======\n        int num = 100;\n        double dNum = num;                       // int → double（自动）\n        System.out.println(\"int→double：\" + dNum);     // 100.0\n\n        char letter = 'B';\n        int ascii = letter;                      // char → int（自动）\n        System.out.println(\"B 的 ASCII 码：\" + ascii); // 66\n\n        // ====== 案例 2：强制类型转换 ======\n        double pi = 3.14159;\n        int intPi = (int) pi;                    // double → int（强制）\n        System.out.println(\"pi 强转 int：\" + intPi);   // 3（截断，不是四舍五入）\n\n        double x = 1.999;\n        int y = (int) x;                         // 1.999 → 1\n        System.out.println(\"1.999 强转 int：\" + y);    // 1\n\n        // ====== 案例 3：运算中的自动提升 ======\n        int a = 10;\n        double b = 3.5;\n        double result = a + b;                   // int 自动提升为 double 再运算\n        System.out.println(\"10 + 3.5 = \" + result);   // 13.5\n    }\n}",
          explanation: "1. int num = 100; double dNum = num; — int 是 32 位，double 是 64 位，小→大，自动完成，结果为 100.0。\n2. char letter = 'B'; int ascii = letter; — char 可以自动转 int，得到的是字符对应的 ASCII 码（B=66）。\n3. (int) pi 将 3.14159 强转为 3——小数部分直接被丢弃，不是四舍五入。\n4. 1.999 强转也是 1——无论小数部分多大，都直接砍掉。\n5. int + double 运算时，int 先自动转为 double，然后运算，结果是 double 类型。"
        },
        {
          title: "二维数组——学生成绩表",
          code: "public class ScoreTable {\n    public static void main(String[] args) {\n        // 3 个学生，每人 4 门课的成绩\n        // 行 = 学生，列 = 课程\n        int[][] scores = {\n            {90, 85, 78, 92},   // 学生 0：语文、数学、英语、Java\n            {88, 76, 95, 85},   // 学生 1\n            {70, 92, 88, 90}    // 学生 2\n        };\n\n        String[] subjects = {\"语文\", \"数学\", \"英语\", \"Java\"};\n\n        // 输出第 2 个学生（下标 1）的所有成绩\n        System.out.println(\"===== 学生 2 的成绩 =====\");\n        for (int j = 0; j < 4; j++) {\n            System.out.println(subjects[j] + \"：\" + scores[1][j]);\n        }\n\n        // 输出所有学生的 Java（第 4 列，下标 3）成绩\n        System.out.println(\"\\n===== Java 成绩 =====\");\n        for (int i = 0; i < 3; i++) {\n            System.out.println(\"学生\" + (i + 1) + \"：\" + scores[i][3]);\n        }\n\n        // 输出整个表格\n        System.out.println(\"\\n===== 完整成绩表 =====\");\n        System.out.println(\"学生\\t语文\\t数学\\t英语\\tJava\");\n        for (int i = 0; i < 3; i++) {\n            System.out.print(\"学生\" + (i + 1) + \"\\t\");\n            for (int j = 0; j < 4; j++) {\n                System.out.print(scores[i][j] + \"\\t\");\n            }\n            System.out.println();\n        }\n    }\n}",
          explanation: "1. int[][] scores = {{...}, {...}, {...}}; 是一个 3 行 4 列的二维数组。\n2. scores[1][j] 表示第 2 个学生（下标 1）的各科成绩。\n3. 行的下标范围是 0~2，列的下标范围是 0~3。\n4. scores[i][3] 中 3 是固定值（第 4 列 = Java 成绩），i 从 0 到 2 遍历所有学生。\n5. \\t 是制表符（Tab），用于对齐输出。"
        }
      ],
      quiz: [
        {
          question: "Java 中 boolean 类型有几个取值？",
          options: [
            "1 个",
            "2 个",
            "3 个",
            "无限个"
          ],
          answer: "2 个",
          explanation: "boolean 类型只有 true 和 false 两个取值。不能赋 null、0、1 等其他值。"
        },
        {
          question: "以下类型转换中，哪个需要强制类型转换？",
          options: [
            "int → double",
            "char → int",
            "double → int",
            "byte → short"
          ],
          answer: "double → int",
          explanation: "double（64 位）→ int（32 位）是高精度向低精度转换，需要强制写 (int)。其余三项都是低→高，属于自动类型转换。"
        },
        {
          question: "以下关于 float 类型的说法，正确的是？",
          options: [
            "float 和 double 没有区别",
            "float 类型变量的值后面必须加字母 f 或 F",
            "float 比 double 占用的字节数更多",
            "Java 中 float 是默认的小数类型"
          ],
          answer: "float 类型变量的值后面必须加字母 f 或 F",
          explanation: "float 占 4 字节，double 占 8 字节（排除 A、C）。Java 中小数默认是 double（排除 D）。float 的值后面必须加 f（如 3.14f）。"
        },
        {
          question: "以下代码的输出结果是什么？",
          options: [
            "2",
            "1",
            "1.999",
            "编译错误"
          ],
          answer: "1",
          explanation: "强制类型转换 (int) 直接截断小数部分，不是四舍五入。所以 1.999 → 1。"
        },
        {
          question: "一个长度为 5 的一维数组，最后一个元素的下标是？",
          options: [
            "5",
            "4",
            "3",
            "0"
          ],
          answer: "4",
          explanation: "数组下标从 0 开始。长度为 5 的数组，下标范围是 0、1、2、3、4。所以最后一个元素下标是 4（即第 5 个元素）。"
        },
        {
          question: "在一维数组 int[] arr = {10, 20, 30, 40, 50}; 中，arr[1] 的值是多少？",
          options: [
            "10",
            "20",
            "30",
            "编译错误"
          ],
          answer: "20",
          explanation: "arr[0] = 10, arr[1] = 20, arr[2] = 30, arr[3] = 40, arr[4] = 50。下标从 0 开始，arr[1] 是第 2 个元素，值为 20。"
        },
        {
          question: "以下哪个关于 char 和 String 的描述是正确的？",
          options: [
            "char 用双引号，String 用单引号",
            "char 用单引号，String 用双引号",
            "char 和 String 都用双引号",
            "char 和 String 都用单引号"
          ],
          answer: "char 用单引号，String 用双引号",
          explanation: "char（单字符）用单引号：'A'。\nString（字符串）用双引号：\"Hello\"。"
        },
        {
          question: "以下哪个不是合法的 Java 标识符？",
          options: [
            "_test",
            "$value",
            "2name",
            "studentName"
          ],
          answer: "2name",
          explanation: "2name 以数字 2 开头，违反标识符\"首字符不能是数字\"的规则。其他三个都符合标识符规则。\n```\n\n---"
        }
      ],
      dragMatch: [
        {
          left: "boolean",
          right: "逻辑类型，只有 true 和 false 两个取值"
        },
        {
          left: "int",
          right: "最常用的整数类型，占 4 字节（32 位）"
        },
        {
          left: "double",
          right: "双精度浮点类型，小数默认类型，占 8 字节（64 位）"
        },
        {
          left: "float",
          right: "单精度浮点类型，值后面必须加 f，占 4 字节"
        },
        {
          left: "char",
          right: "字符类型，单引号，占 2 字节（16 位）"
        },
        {
          left: "自动类型转换",
          right: "低精度类型转高精度类型时自动发生，无需特殊操作"
        },
        {
          left: "强制类型转换",
          right: "高精度转低精度需手动写 (目标类型)，可能丢失数据"
        },
        {
          left: "一维数组",
          right: "存储多个同类型数据的容器，通过下标访问，下标从 0 开始"
        },
        {
          left: "二维数组",
          right: "类似表格/矩阵，有行和列两个维度，通过 arr[行][列] 访问"
        },
        {
          left: "println",
          right: "输出内容后自动换行，ln 是 line 的缩写"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "程序执行到赋值语句，右边有一个值要赋给左边的变量。",
          "检查左边变量的类型和右边值的类型是否相同。",
          "如果类型完全相同 → 直接赋值，无需转换。",
          "如果类型不同 → 判断精度级别（byte < short < char < int < long < float < double）。",
          "如果右边的精度 ≤ 左边的精度 → 自动类型转换（低→高，安全，自动完成）。",
          "如果右边的精度 > 左边的精度 → 不能自动转换，需要程序员手动写强制类型转换：(目标类型) 值。",
          "强制转换时，如果涉及浮点转整数 → 小数部分直接截断（丢弃），不是四舍五入。",
          "如果强制转换导致数据溢出 → 结果会出错（但编译器不报错，运行时可能产生意外值）。",
          "转换完成后，程序继续执行后面的语句。"
        ]
      },
      exercises: [
        {
          question: "声明以下类型的变量并合理赋值，然后输出。\n\n(1) 一个 boolean 变量表示\"是否毕业\"\n(2) 一个 int 变量表示年龄\n(3) 一个 double 变量表示工资\n(4) 一个 char 变量表示性别（'M'/'F'）\n(5) 一个 float 变量表示身高（米）",
          answer: "public class VariablePractice {\n    public static void main(String[] args) {\n        boolean isGraduated = false;\n        int age = 22;\n        double salary = 8500.50;\n        char gender = 'M';\n        float height = 1.75f;\n\n        System.out.println(\"是否毕业：\" + isGraduated);\n        System.out.println(\"年龄：\" + age);\n        System.out.println(\"工资：\" + salary);\n        System.out.println(\"性别：\" + gender);\n        System.out.println(\"身高：\" + height);\n    }\n}\n\n解题思路：\n每个变量按\"类型 变量名 = 值;\"的格式声明。特别注意 float 后面必须加 f。"
        },
        {
          question: "写出以下每个强制类型转换的结果。\n\n(1) (int) 3.14\n(2) (int) 9.99\n(3) (int) -2.8\n(4) (double) 5",
          answer: "(1) 3        （截断 .14）\n(2) 9        （截断 .99，不是 10）\n(3) -2       （截断 .8，向零取整）\n(4) 5.0      （int→double 是自动转换，变为 5.0）\n\n解题思路：\n浮点转整数 = 直接丢弃小数部分（向零取整）。整数转浮点 = 补充 .0。"
        },
        {
          question: "声明一个一维数组，存放 5 个同学的名字，然后输出第 1 个和最后一个同学的名字。",
          answer: "public class NameArray {\n    public static void main(String[] args) {\n        String[] names = {\"张三\", \"李四\", \"王五\", \"赵六\", \"钱七\"};\n\n        System.out.println(\"第 1 个同学：\" + names[0]);\n        System.out.println(\"最后一个同学：\" + names[4]);  // 下标 4 = 第 5 个\n    }\n}\n\n解题思路：\n1. 用花括号直接初始化数组。\n2. 第 1 个元素下标是 0。\n3. 第 5 个（最后一个）元素下标是 4（长度 5，下标范围 0~4）。"
        },
        {
          question: "创建一个 3 行 2 列的二维数组，存入以下数据并按照表格格式输出：\n\n第 1 行：商品A，25.5\n第 2 行：商品B，30.0\n第 3 行：商品C，18.9",
          answer: "public class ProductTable {\n    public static void main(String[] args) {\n        // 第 0 列存商品名，第 1 列存价格\n        String[][] products = {\n            {\"商品A\", \"25.5\"},\n            {\"商品B\", \"30.0\"},\n            {\"商品C\", \"18.9\"}\n        };\n\n        System.out.println(\"商品名\\t价格\");\n        for (int i = 0; i < 3; i++) {\n            System.out.println(products[i][0] + \"\\t\" + products[i][1]);\n        }\n    }\n}\n\n解题思路：\n1. 二维数组 = 3 行 × 2 列。\n2. 每行的第 0 列是商品名，第 1 列是价格。\n3. 使用 for 循环遍历每一行，输出两列数据。"
        },
        {
          question: "找出以下代码中的 5 处错误并修正。\n\npublic class test {\n    public static void main(string[] args) {\n        float price = 9.99;\n        int 1score = 100;\n        char grade = \"A\";\n        int[] arr = new int[3];\n        arr[3] = 10;\n        system.out.println(\"price: \" + price);\n    }\n}",
          answer: "错误1：类名 test → Test（类名首字母大写）\n错误2：string[] args → String[] args（String 的 S 大写）\n错误3：float price = 9.99; → float price = 9.99f;（float 必须加 f）\n错误4：int 1score = 100; → int score1 = 100;（标识符不能以数字开头）\n错误5：char grade = \"A\"; → char grade = 'A';（char 用单引号）\n错误6：arr[3] = 10; → arr[2] = 10;（长度 3 的数组下标范围 0~2）\n错误7：system.out.println → System.out.println（System 的 S 大写）\n\n解题思路：\n逐行按 Java 语法规则检查，重点关注：大小写、后缀（f/L）、引号、标识符、数组下标边界。\n```\n\n---"
        }
      ],
      conclusion: [
        "本节课的核心是掌握 Java 的 8 种基本数据类型（按四大类记忆）以及两种类型转换方式（自动和强制）。这些是 Java 语法中最基础也最常用的内容。",
        "学习 Java 时要特别注意几个细节：float 的值后面必须加 f、数组下标从 0 开始、强制类型转换是截断而不是四舍五入——这些是初学者最容易出错的地方，也是考试的重点。",
        "通过本节课，应该能够熟练声明各种基本类型的变量、在类型之间进行合理转换、使用一维数组和二维数组存取数据。",
        "类型转换的知识在后面学习方法的参数传递、面向对象的多态时都会用到。数组是后续学习 for 循环遍历、集合框架（ArrayList、HashMap）以及数据结构的基础。",
        "课后建议多练习：(1) 把 8 种基本类型全部声明一遍并输出；(2) 做几个强制类型转换的练习（特别是浮点转整数）；(3) 创建一个二维数组存入真实数据（如课表、成绩表）并输出；(4) 自学 Scanner 类，尝试从键盘读取输入。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "标识符",
        "关键字",
        "基本数据类型",
        "类型转换",
        "boolean",
        "int",
        "char",
        "float",
        "double",
        "数组",
        "二维数组"
      ],
      cardSummary: "本节课首先复习了标识符的定义规则（四大类组成元素，首字符不能是数字）和关键字的概念（不能用作标识符）。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-operators-expression",
      title: "Java 运算符与表达式详解",
      chapter: "Java 运算符与表达式",
      date: "2025-09-01",
      tags: [
        "算术运算符",
        "关系运算符",
        "逻辑运算符",
        "位运算符",
        "运算级别",
        "二目运算",
        "自加自减",
        "前置后置",
        "空语句",
        "字符串拼接"
      ],
      summary: [
        "本节课首先介绍了 Java 的四类运算符：算术运算符、关系运算符、逻辑运算符和位运算符，本课重点围绕算术运算符展开。",
        "课堂中重点讲解了运算符的级别概念——乘除求余（3 级）优先于加减（4 级），有括号先算括号里的，这与数学中的四则运算规则一致。",
        "老师通过自加（++）和自减（--）的对比，重点讲解了\"前置\"（先自身运算再参与表达式）和\"后置\"（先参与表达式再自身运算）的核心区别。",
        "本节课还引入了\"空语句\"的概念——一个单独的分号就是最简单的语句，什么也不做。",
        "最后通过字符串拼接（\"两个 K = \" + k）的例子，展示了 Java 中字符串和数字混合输出时会自动转换的机制。"
      ],
      keyPoints: [
        {
          title: "运算符的分类",
          content: "Java 中的运算符（Operator）主要分为四大类： | 类别 | 作用 | 常见运算符 | |------|------|-----------| | 算术运算符 | 进行数学计算 | + - * / % ++ -- | | 关系运算符 | 比较两个值的大小 | > < >= <= == != | | 逻辑运算符 | 进行逻辑判断 | && || ! | | 位运算符 | 对二进制位进行操作 | & | ^ ~ << >> | 学习意义：运算符是编写任何 Java 程序的基础。就像写作文需要用到标点符号和连接词一样，写代码需要用到运算符来表达计算和逻辑。没有运算符，程序将无法进行任何计算。 课堂理解：老师指出课堂的重点是算术运算符和逻辑运算符，关系运算符相对简单（\"大于小于是我们从小就学的\"），位运算符本学期不要求深入掌握。",
          javaCompare: "",
          id: "kp-0-x",
          short: "Java 中的运算符（Operator）主要分为四大类： | 类别 | 作用 | 常见运算符 | |------|------|-----------| | 算……",
          mistake: ""
        },
        {
          title: "运算级别与算术表达式",
          content: "Java 中的运算符有不同的优先级（运算级别）。优先级高的运算符先执行，优先级低的后执行。这和我们学数学时的\"先乘除，后加减，有括号先算括号\"规则完全一致。 - 3 级（较高）：* / %（乘、除、求余） - 4 级（较低）：+ -（加、减） - 最高：() 括号（有括号先算括号里的） 用算术符号和括号连接起来的式子叫做算术表达式。 学习意义：如果不懂优先级，写出的表达式可能得到意想不到的结果。比如 1 + 2 * 3 结果是 7 而不是 9——因为 * 优先于 +。 课堂理解：老师这样解释： - 运算符级别的含义：\"就像数据类型有级别，运算也有级别。为什么要先算乘除后算加减？因为它有级别。\" - 计算机的执行顺序：\"计算机运算是从上到下、从左到右，依次一行一行地读。遇到括号就先算括号里的值。\" - 人和计算机的区别：\"人太聪明了，一眼就能看出等于多少，但计算机要一步一步按规则来。\"",
          javaCompare: "",
          id: "kp-1-x",
          short: "Java 中的运算符有不同的优先级（运算级别）。优先级高的运算符先执行，优先级低的后执行。这和我们学数学时的\"先乘除，后加减，有括号先算括号\"规则完全一致。 -……",
          mistake: ""
        },
        {
          title: "二目运算符与单目运算符",
          content: "根据运算符需要多少个操作数（参与计算的值），可以分为： - 二目运算符：需要两个操作数参与运算。如加减（a + b）、乘除（a * b）、求余（a % b）。 - 单目运算符：只需要一个操作数参与运算。Java 中唯一的单目算术运算符就是自加（++）和自减（--）。 学习意义：理解二目和单目有助于理解自加自减的特殊性——它不跟别人算，只跟自己算（把自己加 1 或减 1）。 课堂理解：老师解释：\"加减叫二目运算，为什么叫二目？二目的意思就是有两个未知数在参与。A+B 或者 A-B，必须有两个数在参与。\" \"自加自减是唯一的一个单目运算符——它只有一个操作员，就是 X 自己。作用就是自增或者自减。\"",
          javaCompare: "",
          id: "kp-2-x",
          short: "根据运算符需要多少个操作数（参与计算的值），可以分为： - 二目运算符：需要两个操作数参与运算。如加减（a + b）、乘除（a * b）、求余（a % b）。 ……",
          mistake: ""
        },
        {
          title: "自加（++）与自减（--）——前置与后置",
          content: "自加（++）和自减（--）是 Java 中唯一的单目算术运算符。它们可以让一个变量自增 1 或自减 1。关键在于运算符放在变量的前面还是后面，含义不同： - 前置（++i 或 --i）：先自身运算，再参与表达式。即变量先加 1/减 1，然后用新值参与其他运算。 - 后置（i++ 或 i--）：先参与表达式，再自身运算。即先用变量的当前值参与其他运算，然后变量再加 1/减 1。 学习意义：自加自减是编程中最常用的运算符之一，尤其在循环中（如 for(int i=0; i<10; i++)）。不理解前置后置的差异，会导致计算结果完全错误，也是考试的重点考察内容。 课堂理解：老师用了一个清晰的公式来讲解： 前置加加（++i）的两个步骤： 1. 第一步：i = i + 1（先把自己加 1） 2. 第二步：用加完后的 i（新值）参与表达式的其他运算 后置加加（i++）的两个步骤： 1. 第一步：先用 i 的当前值（原值）参与表达式的其他运算 2. 第二步：i = i + 1（运算完了再把自己加 1） 老师用了一个具体的例子：\"j = i++ 的话，j 等于什么？i 原先如果是 1，那 j = 1+2 = 3。如果 j = ++i，那就是 i 先变成 2，然后再 2+2 = 4。这两个值不一样。\" 老师还提到英文术语：前置叫 pre-increment，后置叫 post-increment。pre- 是前缀，表示\"在前面的\"；post- 表示\"在后面的\"。",
          javaCompare: "",
          id: "kp-3-x",
          short: "自加（++）和自减（--）是 Java 中唯一的单目算术运算符。它们可以让一个变量自增 1 或自减 1。关键在于运算符放在变量的前面还是后面，含义不同： - 前……",
          mistake: ""
        },
        {
          title: "空语句",
          content: "Java 中，以分号结尾的一段代码称为一条语句。而空语句就是一条只有分号、什么也不做的语句。它是 Java 程序中最简单的语句。 学习意义：理解空语句有助于理解\"语句\"和\"分号\"的关系。同时，有时多余的（或少写的）分号会导致空语句的产生，造成逻辑 bug——知道空语句的概念有助于排查这类问题。 课堂理解：老师在课堂上提问\"最简单的语句是什么？\"，最终给出的答案是\"空语句\"——\"我们说了，以分号结尾的称为语句。现在就一个分号，那就是一个语句，只不过什么也没有。\"",
          javaCompare: "",
          id: "kp-4-x",
          short: "Java 中，以分号结尾的一段代码称为一条语句。而空语句就是一条只有分号、什么也不做的语句。它是 Java 程序中最简单的语句。 学习意义：理解空语句有助于理解……",
          mistake: ""
        },
        {
          title: "字符串拼接与类型自动转换",
          content: "在 Java 中，使用加号 + 可以连接字符串。如果 + 的一边是字符串，另一边是非字符串类型（如 int、double），Java 会自动将非字符串类型转换成字符串，然后拼接在一起。这叫做字符串拼接。 学习意义：在实际开发中，经常需要把文字和变量值一起输出（如调试信息、日志等）。字符串拼接是最常用的技巧之一。例如 System.out.println(\"结果是：\" + result)。 课堂理解：老师在输出 \"两个 K = \" + k 时解释：\"前面是一个字符串，后面是一个整型。它们加到一起，Java 会自动把整型变成字符串然后拼接起来。这就是字符串转换。\" 老师还强调了一个初学者容易忽略的问题：中英文符号的区别。\"中文括号和英文括号在输入方式中是不同的。中文括号不会被 Java 识别——一定要在英文输入法下写代码。分号也是一样，中文分号和英文分号长得不一样。\"",
          javaCompare: "",
          id: "kp-5-x",
          short: "在 Java 中，使用加号 + 可以连接字符串。如果 + 的一边是字符串，另一边是非字符串类型（如 int、double），Java 会自动将非字符串类型转换成……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "运算符优先级综合演练",
          code: "public class PriorityDemo {\n    public static void main(String[] args) {\n        // 注意：下面的表达式展示了优先级规则\n        int r1 = 10 + 3 * 2;           // 10 + 6 = 16\n        int r2 = (10 + 3) * 2;         // 13 * 2 = 26\n        int r3 = 20 - 8 / 2;           // 20 - 4 = 16\n        int r4 = 15 % 4 + 2;           // 3 + 2 = 5\n        int r5 = 10 + 5 % 3;           // 10 + 2 = 12\n\n        System.out.println(\"10 + 3 * 2 = \" + r1);       // 16\n        System.out.println(\"(10 + 3) * 2 = \" + r2);     // 26\n        System.out.println(\"20 - 8 / 2 = \" + r3);       // 16\n        System.out.println(\"15 % 4 + 2 = \" + r4);       // 5\n        System.out.println(\"10 + 5 % 3 = \" + r5);       // 12\n\n        // 演示括号的力量：括号可以改变默认优先级\n        int withoutBracket = 10 + 20 * 3;    // 10 + 60 = 70\n        int withBracket = (10 + 20) * 3;     // 30 * 3 = 90\n        System.out.println(\"\\n无括号：\" + withoutBracket);  // 70\n        System.out.println(\"有括号：\" + withBracket);       // 90\n    }\n}",
          explanation: "1. 10 + 3 * 2：* 比 + 优先，先算 3*2=6，再算 10+6=16。 2. (10 + 3) * 2：括号改变优先级，先算 10+3=13，再算 13*2=26。 3. 15 % 4 = 3（15 除以 4 余 3），再加 2 得 5。 4. 有括号和无括号结果可以相差很大——不确定优先级时，加括号是最安全的做法。"
        },
        {
          title: "前置与后置自加自减完整对比",
          code: "public class PrePostDemo {\n    public static void main(String[] args) {\n        System.out.println(\"===== 前置 ++i =====\");\n        int i1 = 1;\n        int j1 = ++i1 + 10;    // i1 先变成 2，然后 j1 = 2 + 10 = 12\n        System.out.println(\"i1 = \" + i1 + \", j1 = \" + j1);  // i1=2, j1=12\n\n        System.out.println(\"\\n===== 后置 i++ =====\");\n        int i2 = 1;\n        int j2 = i2++ + 10;    // j2 = 1 + 10 = 11（先用旧值），然后 i2 变成 2\n        System.out.println(\"i2 = \" + i2 + \", j2 = \" + j2);  // i2=2, j2=11\n\n        System.out.println(\"\\n===== 单独使用（效果一样） =====\");\n        int a = 5;\n        a++;                   // a = 6\n        System.out.println(\"a++ 后：\" + a);\n        ++a;                   // a = 7\n        System.out.println(\"++a 后：\" + a);\n\n        System.out.println(\"\\n===== 自减对比 =====\");\n        int b1 = 5;\n        int c1 = --b1;         // b1 先减为 4，然后赋给 c1\n        System.out.println(\"--b1: b1=\" + b1 + \", c1=\" + c1);  // b1=4, c1=4\n\n        int b2 = 5;\n        int c2 = b2--;         // 先把 5 赋给 c2，然后 b2 减为 4\n        System.out.println(\"b2--: b2=\" + b2 + \", c2=\" + c2);  // b2=4, c2=5\n    }\n}",
          explanation: "1. ++i1 + 10：i1 先从 1 变成 2，再用 2+10=12。所以 i1=2, j1=12。 2. i2++ + 10：i2（值为 1）先参与 1+10=11，赋值给 j2，然后 i2 再变成 2。所以 i2=2, j2=11。 3. 同样是 +2 的操作，前置和后置得到的 j 值不同（12 vs 11），但 i 最后都是 2。 4. --b1 和 b2-- 的道理和 ++ 完全一样，只是把加 1 换成减 1。 5. 单独使用时（不参与表达式），前置和后置效果完全相同。"
        },
        {
          title: "空语句陷阱演示",
          code: "public class EmptyStatementTrap {\n    public static void main(String[] args) {\n        int score = 55;\n\n        // ❌ 陷阱：if 后面多了一个分号\n        System.out.println(\"===== 有陷阱的版本 =====\");\n        if (score >= 60);    // ← 这个分号让 if 变得\"什么都不做\"\n            System.out.println(\"及格了！\");   // 这句话不管条件怎样都会执行！\n\n        // ✅ 正确版本\n        System.out.println(\"\\n===== 正确的版本 =====\");\n        if (score >= 60)\n            System.out.println(\"及格了！\");\n        else\n            System.out.println(\"不及格，继续努力！\");\n\n        // 说明\n        System.out.println(\"\\n===== 解释 =====\");\n        System.out.println(\"上面先打印了'及格了！'，是因为 if 的分号导致了空语句陷阱。\");\n        System.out.println(\"如果不相信，可以试试把 score 改成 30 再运行。\");\n    }\n}",
          explanation: "1. if (score >= 60); —— 注意这里的分号！它让 if 条件后面跟了一个空语句。 2. 所以无论 score 是 55 还是 95，if 都是\"如果条件成立，什么都不做（空语句）\"。 3. 紧接着的 System.out.println(\"及格了！\"); 不属于 if，它总是会执行。 4. 正确写法是去掉 if 后面的分号，让 println 语句成为 if 的执行体。"
        }
      ],
      quiz: [
        {
          question: "以下表达式 5 + 2 * 3 的结果是多少？",
          options: [
            "21",
            "11",
            "30",
            "16"
          ],
          answer: "11",
          explanation: "乘法 * 优先级高于加法 +，先算 2*3=6，再算 5+6=11。如果想要先算加法，需要加括号：(5+2)*3=21。"
        },
        {
          question: "以下代码的输出结果是什么？\n\nint a = 2;\nint b = a++;\nSystem.out.println(\"a=\" + a + \", b=\" + b);",
          options: [
            "a=2, b=2",
            "a=3, b=2",
            "a=3, b=3",
            "a=2, b=3"
          ],
          answer: "a=3, b=2",
          explanation: "a++ 是后置自加。先把 a 的当前值 2 赋给 b，然后 a 再加 1 变成 3。所以 a=3, b=2。"
        },
        {
          question: "以下代码的输出结果是什么？\n\nint x = 3;\nint y = ++x;\nSystem.out.println(\"x=\" + x + \", y=\" + y);",
          options: [
            "x=3, y=3",
            "x=4, y=3",
            "x=4, y=4",
            "x=3, y=4"
          ],
          answer: "x=4, y=4",
          explanation: "++x 是前置自加。x 先加 1 变成 4，然后把 4 赋给 y。所以 x=4, y=4。"
        },
        {
          question: "以下代码的输出结果是什么？\n\nint result = 10 % 3;\nSystem.out.println(result);",
          options: [
            "3",
            "10",
            "1",
            "3.333..."
          ],
          answer: "1",
          explanation: "% 是求余运算符。10 除以 3，商是 3，余数是 1。所以 10 % 3 = 1。"
        },
        {
          question: "以下哪个不是导致编译错误的原因？",
          options: [
            "在代码中使用了中文分号",
            "System.out.println 写成了 system.out.println",
            "if (true); 这一行加了一个分号",
            "变量名以数字开头"
          ],
          answer: "if (true); 这一行加了一个分号",
          explanation: "if (true); 在语法上完全合法——它是一个 if 后面跟了一个空语句。虽然这几乎肯定是逻辑错误，但编译器不会报错。A、B、D 都会导致编译错误。"
        },
        {
          question: "以下代码的输出结果是什么？\n\nSystem.out.println(\"结果：\" + 10 + 20);",
          options: [
            "结果：30",
            "结果：1020",
            "结果：10 + 20",
            "编译错误"
          ],
          answer: "结果：1020",
          explanation: "从左到右拼接：\"结果：\" + 10 → \"结果：10\"，然后 \"结果：10\" + 20 → \"结果：1020\"。要得到 30，需要写成 System.out.println(\"结果：\" + (10 + 20));"
        }
      ],
      dragMatch: [
        {
          left: "算术运算符",
          right: "用来进行数学计算，包括 +、-、*、/、%、++、--"
        },
        {
          left: "运算优先级",
          right: "乘除求余（3级）高于加减（4级），有括号先算括号"
        },
        {
          left: "二目运算符",
          right: "需要两个操作数参与运算，如 a + b"
        },
        {
          left: "单目运算符",
          right: "只需要一个操作数，如 i++（自加）和 i--（自减）"
        },
        {
          left: "前置 ++i",
          right: "先让 i 自加 1，再用新值参与表达式运算"
        },
        {
          left: "后置 i++",
          right: "先用 i 的当前值参与表达式运算，再让 i 自加 1"
        },
        {
          left: "空语句",
          right: "只有一个分号的语句，什么也不做"
        },
        {
          left: "求余 %",
          right: "计算两个整数相除后的余数，如 10 % 3 = 1"
        },
        {
          left: "字符串拼接",
          right: "用 + 号把字符串和其他类型的数据连在一起"
        },
        {
          left: "表达式",
          right: "用运算符和括号连接起来的计算式子"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "前置 ++i（以 j = ++i + 2 为例）：JVM 看到 ++i，这是前置自加。",
          "前置 ++i（以 j = ++i + 2 为例）：第一步：i 先自加 1（i 变成新值）。",
          "前置 ++i（以 j = ++i + 2 为例）：第二步：用 i 的新值参与后面的运算（j = i + 2）。",
          "前置 ++i（以 j = ++i + 2 为例）：得到最终结果。",
          "后置 i++（以 j = i++ + 2 为例）：JVM 看到 i++，这是后置自加。",
          "后置 i++（以 j = i++ + 2 为例）：第一步：先用 i 的当前值参与后面的运算（j = i + 2）。",
          "后置 i++（以 j = i++ + 2 为例）：第二步：等整个表达式算完后，i 再自加 1。",
          "后置 i++（以 j = i++ + 2 为例）：得到最终结果。",
          "前置：i 先变，再参加别人的计算。",
          "后置：i 先参加别人的计算，再自己变。",
          "单独使用 i++ 或 ++i 时，没有\"别人\"，所以效果一样（i 就是自加 1）。"
        ]
      },
      exercises: [
        {
          question: "计算以下表达式的值，写出每一步的计算过程。\n\n(1) 8 + 4 * 3\n(2) (8 + 4) * 3\n(3) 20 - 6 / 3\n(4) 17 % 5\n(5) 10 + 7 % 3",
          answer: "(1) 8 + 4*3 = 8 + 12 = 20（先乘后加）\n(2) (8+4)*3 = 12*3 = 36（先加后乘）\n(3) 20 - 6/3 = 20 - 2 = 18（先除后减）\n(4) 17 % 5 = 2（17 ÷ 5 = 3 余 2）\n(5) 10 + 7%3 = 10 + 1 = 11（先求余后加）\n\n解题思路：\n记住优先级顺序：括号 → 乘除求余（3级）→ 加减（4级）。同一级别从左到右。"
        },
        {
          question: "写出以下代码的输出结果。\n\nint a = 5;\nint b = a++;\nint c = ++a;\nSystem.out.println(\"a=\" + a + \", b=\" + b + \", c=\" + c);",
          answer: "a=7, b=5, c=7\n\n解题思路：\n初始 a=5。\nb = a++ → b=5（先用旧值）, a=6（后自加）。\nc = ++a → a=7（先自加）, c=7（再用新值）。\n最终 a=7, b=5, c=7。"
        },
        {
          question: "写一个程序，定义两个整数变量 x=7, y=3，分别输出它们的和、差、积、商、余数。",
          answer: "public class Calculator {\n    public static void main(String[] args) {\n        int x = 7, y = 3;\n        System.out.println(x + \" + \" + y + \" = \" + (x + y));   // 7 + 3 = 10\n        System.out.println(x + \" - \" + y + \" = \" + (x - y));   // 7 - 3 = 4\n        System.out.println(x + \" * \" + y + \" = \" + (x * y));   // 7 * 3 = 21\n        System.out.println(x + \" / \" + y + \" = \" + (x / y));   // 7 / 3 = 2\n        System.out.println(x + \" % \" + y + \" = \" + (x % y));   // 7 % 3 = 1\n    }\n}\n\n解题思路：\n每种运算用对应的运算符，注意整数除法 7/3=2（小数被截断）。输出时用字符串拼接让结果可读。"
        },
        {
          question: "指出以下代码中的错误并修改。\n\nint a = 10;\nint b = a++ * 2;\nif (b > 10);\n    System.out,println(\"b 大于 10\");  // 这行有两处错误",
          answer: "错误1：if (b > 10); —— 分号导致空语句陷阱，去掉分号。\n错误2：System.out,println —— 逗号应为点号，正确为 System.out.println。\n\n修正后代码：\nint a = 10;\nint b = a++ * 2;         // b = 10*2 = 20, a 变成 11\nif (b > 10)\n    System.out.println(\"b 大于 10\");"
        },
        {
          question: "编写一个方法，输入三个整数，输出它们的平均值（使用整数除法并说明精度损失）。",
          answer: "public class Average {\n    public static void main(String[] args) {\n        int a = 85, b = 92, c = 78;\n\n        // 整数除法版本（精度丢失）\n        int avgInt = (a + b + c) / 3;\n        System.out.println(\"整数平均值：\" + avgInt);     // 85\n\n        // 正确的 double 版本（保留精度）\n        double avgDouble = (a + b + c) / 3.0;\n        System.out.println(\"精确平均值：\" + avgDouble);  // 85.0\n\n        // 另一个例子：除不尽的\n        int x = 10, y = 20, z = 25;\n        System.out.println(\"整数：(10+20+25)/3 = \" + (x+y+z)/3);       // 18\n        System.out.println(\"精确：(10+20+25)/3.0 = \" + (x+y+z)/3.0);   // 18.333...\n    }\n}\n\n解题思路：\n整数除以整数结果是整数（截断小数）。要得到精确结果，需要让除数变成 double（除以 3.0 而不是 3），或者进行强制类型转换。"
        }
      ],
      conclusion: [
        "本节课的核心是掌握 Java 运算符的两大重点：运算优先级（乘除求余高于加减，括号最高）和自加自减的前置/后置区别。",
        "学习运算符时要特别注意前置 ++i（先加后用）和后置 i++（先用后加）的差异——这是每次考试必考的内容，也是初学阶段最容易出错的知识点。",
        "通过本节课，应该能够正确计算表达式、使用 ++ 和 -- 控制变量、用 % 求余数、用 + 拼接字符串输出结果。",
        "自加自减（++、--）在后续学习的 for 循环中会大量出现，它是循环控制的基础语法。现在掌握了，后面学循环就会轻松很多。",
        "课后建议多练习：(1) 手算几个含不同优先级的表达式；(2) 对比前置和后置自加的结果并解释原因；(3) 练习用 % 判断奇偶数（n % 2 == 0 就是偶数）；(4) 小心 if 后面的分号陷阱，写出正确和错误的版本对比运行结果。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "算术运算符",
        "关系运算符",
        "逻辑运算符",
        "位运算符",
        "运算级别",
        "二目运算",
        "自加自减",
        "前置后置",
        "空语句",
        "字符串拼接"
      ],
      cardSummary: "本节课首先介绍了 Java 的四类运算符：算术运算符、关系运算符、逻辑运算符和位运算符，本课重点围绕算术运算符展开。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-precision-if-branch",
      title: "运算符精度与 if 分支语句入门",
      chapter: "Java 流程控制",
      date: "2025-09-01",
      tags: [
        "运算精度",
        "自动类型提升",
        "if语句",
        "if-else",
        "分支语句",
        "逻辑运算符",
        "代码规范"
      ],
      summary: [
        "本节课首先回顾了前置和后置自加自减的区别，通过代码运行结果验证了\"前置先加后用，后置先用后加\"的规则。",
        "课堂中重点讲解了算术运算符的精度规则——表达式中有 double 就按 double 算，最高级是 float 按 float 算，都是 int 按 int 算。",
        "老师通过例题演示了逻辑运算符（逻辑非 ! 将 true 变 false，false 变 true），并强调需要理清代码逻辑规则。",
        "本节课正式引入 if 语句的结构——if 后面是条件表达式（true 或 false），条件为 true 执行代码块，为 false 则跳出。",
        "最后讲解了 if-else 分支语句——条件为真执行 statement one，为假执行 statement two，这就是\"有两条路可走\"的选择结构。"
      ],
      keyPoints: [
        {
          title: "算术运算符的精度规则",
          content: "当表达式中出现不同类型的数据时，Java 会自动进行向上转换——以表达式中精度最高的类型为基准进行计算。具体规则是： - 如果表达式中有 double（双精度），整个表达式按 double 运算，结果也是 double。 - 如果表达式最高级是 float（单精度），按 float 运算。 - 如果全是 int（整型），按 int 运算（注意：整数除法会截断小数）。 - char 类型在运算中会自动转换为 int 类型。 学习意义：如果不理解精度规则，就会困惑为什么 5 / 2 结果是 2 而不是 2.5，为什么 5.0 / 2 结果是 2.5。这直接关系到计算结果的正确性。 课堂理解：老师提出了三条核心规则： 1. 有 double 就按 double：\"只要在这个式子里边有一个数是 double，那整个这个东西都是 double。因为要向上转换。不向上转换的话，它就加不了。\" 2. 按最高精度来：\"表达式最高级是单浮点就按单浮点做，是整型就按整型做。\" 3. 运算时左右两边类型要一致：\"在进行运算的时候，我们要保证运算数左右两边类型保持一致。不一样的话，要往上升或者往下降。\" 老师还提到了 char 的转换：\"char 可以变成 int。\"",
          javaCompare: "",
          id: "kp-0-x",
          short: "当表达式中出现不同类型的数据时，Java 会自动进行向上转换——以表达式中精度最高的类型为基准进行计算。具体规则是： - 如果表达式中有 double（双精度）……",
          mistake: ""
        },
        {
          title: "逻辑非（!）运算符",
          content: "逻辑非 ! 是一个单目逻辑运算符，用于反转布尔值。!true 变成 false，!false 变成 true。 学习意义：程序中有大量\"如果不是……\"的判断——比如\"如果不是周末\"、\"如果密码不正确\"。这些场景都需要用 ! 来取反。 课堂理解：老师用一句话解释了逻辑非：\"非就是如果是 true 就变成 false，如果是 false 就变成 true。\"逻辑非、逻辑与（&&）、逻辑或（||）构成 Java 的三种逻辑运算符。",
          javaCompare: "",
          id: "kp-1-x",
          short: "逻辑非 ! 是一个单目逻辑运算符，用于反转布尔值。!true 变成 false，!false 变成 true。 学习意义：程序中有大量\"如果不是……\"的判断——……",
          mistake: ""
        },
        {
          title: "if 语句——最简单的条件判断",
          content: "if 语句（条件判断语句）让程序能够根据条件是否成立来决定是否执行某段代码。这是 Java 中最基本的流程控制语句。 - 如果 if 后面括号里的条件为 true，就执行后面花括号 { } 里的代码。 - 如果条件为 false，就跳过花括号里的代码，继续执行后面的内容。 学习意义：现实世界中充满了选择——\"如果下雨就带伞\"\"如果及格就庆祝\"。编程也是一样，程序需要根据不同的情况做出不同的响应。if 语句就是实现这种\"根据条件做选择\"的基本工具。 课堂理解：老师用一个清晰的流程图来解释 if 的执行过程： - \"if 这个地方是一个条件表达式（condition），它要判断这个值是 true 还是 false。\" - \"如果是 true，我们就执行里面的 body。如果是 false，我们就不执行它，然后跳出来。\" - \"跳出它的 body，跳出语句组。\" 老师还举了个例子：if (x == 0)，\"这个表达式是真是假？如果是真，我们就执行下面这一段。\"",
          javaCompare: "",
          id: "kp-2-if",
          short: "if 语句（条件判断语句）让程序能够根据条件是否成立来决定是否执行某段代码。这是 Java 中最基本的流程控制语句。 - 如果 if 后面括号里的条件为 tru……",
          mistake: ""
        },
        {
          title: "if-else 分支语句",
          content: "if-else 是 if 语句的升级版，提供了两条路： - 条件为 true → 执行 if 块（statement one）。 - 条件为 false → 执行 else 块（statement two）。 两条路必走其一，不会同时走，也不会一条都不走。 学习意义：生活中很多场景只有两种可能——\"及格 / 不及格\"\"登录 / 未登录\"\"成年 / 未成年\"。if-else 就是用来处理这种二选一场景的。 课堂理解：老师用了一个很直观的比喻： - \"如果怎么样，我们就这样。如果这个地方不怎么样，我们就那样。\" - \"这叫分支语句——它有两个分支，两条路。这条路可能是这个，那条路可能是这个。\" - \"有选择——如果嘛，不是选择嘛。你选择如果是真就走这边，如果是假就走那边。\" 老师还画了一个流程图来说明：一个判断点（菱形），true 走一条路，false 走另一条路。",
          javaCompare: "",
          id: "kp-3-if-else",
          short: "if-else 是 if 语句的升级版，提供了两条路： - 条件为 true → 执行 if 块（statement one）。 - 条件为 false → 执……",
          mistake: ""
        },
        {
          title: "代码规范——大小写与输入习惯",
          content: "Java 是一门严格区分大小写的语言。System 的 S 必须大写，system 或 SYSTEM 都是错的。这不仅关系到语法正确性，也关系到考试得分。 学习意义：因为大小写问题导致的编译错误是初学者最常见的错误之一。养成良好的大小写习惯，不仅能减少 bug，也让代码看起来更专业。 课堂理解：老师非常严肃地强调了这个点： - \"这个 S 是大写，不要写成小写。考试的时候，有很多人说'老师我都写的不错呀，怎么能错了呢？'——如果我看你这个小写的 s，写成和 g 一边高的，那 sorry，你错了。\" - \"你必须把这个 S 写成明显的大写。如果你写成 s y s 这样的，对不起，错。\" - \"一定不要因为你的输入导致你自己的记忆力低下。\" 换句话说，输入习惯不好 = 分数低。老师是在用考试来倒逼学生养成正确的输入习惯。",
          javaCompare: "",
          id: "kp-4-x",
          short: "Java 是一门严格区分大小写的语言。System 的 S 必须大写，system 或 SYSTEM 都是错的。这不仅关系到语法正确性，也关系到考试得分。 学习……",
          mistake: ""
        },
        {
          title: "if 单分支与 if-else 双分支的适用区别",
          content: "if 单分支适合“满足条件才做某件事”的场景；if-else 双分支适合“二选一”的场景。两者都要求括号中的条件表达式结果必须是 boolean 类型，且建议始终使用花括号避免只控制一行代码的陷阱。",
          javaCompare: "",
          id: "kp-5-if-if-else",
          short: "if 单分支适合“满足条件才做某件事”的场景；if-else 双分支适合“二选一”的场景。两者都要求括号中的条件表达式结果必须是 boolean 类型，且建议始……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "不同精度类型的混合运算",
          code: "public class MixedPrecisionDemo {\n    public static void main(String[] args) {\n        // ====== 场景 1：全 int → 结果是 int ======\n        int x = 7, y = 2;\n        int r1 = x / y;              // 整数除法\n        System.out.println(\"7 / 2（全int）= \" + r1);       // 3\n\n        // ====== 场景 2：有 double → 结果是 double ======\n        double r2 = x / 2.0;         // 2.0 是 double，x 自动提升\n        System.out.println(\"7 / 2.0（有double）= \" + r2);  // 3.5\n\n        // ====== 场景 3：混合类型 ======\n        double a = 5.5;\n        int b = 2;\n        double r3 = a * b;           // b 自动提升为 double\n        System.out.println(\"5.5 * 2 = \" + r3);            // 11.0\n\n        // ====== 场景 4：char 参与运算 ======\n        char c1 = 'A';\n        char c2 = 'B';\n        int sum = c1 + c2;           // 'A'(65) + 'B'(66) = 131\n        System.out.println(\"'A' + 'B' = \" + sum);         // 131\n\n        // ====== 场景 5：double 强制转 int ======\n        double pi = 3.14;\n        int intPi = (int) pi;        // 强制转换，截断小数\n        System.out.println(\"(int)3.14 = \" + intPi);       // 3\n    }\n}",
          explanation: "1. 7/2=3：两个 int 相除，小数被舍弃。 2. 7/2.0=3.5：2.0 是 double，7 自动转成 7.0，按浮点除法计算，保留小数。 3. 5.5*2=11.0：b=2 自动提升为 2.0，然后 5.5*2.0=11.0。 4. 'A'+'B'=65+66=131：char 在运算中自动转成对应的 ASCII/Unicode 码。 5. (int)3.14=3：强制转换截断小数（非四舍五入）。"
        },
        {
          title: "if 和 if-else 的完整对比",
          code: "public class IfVsIfElse {\n    public static void main(String[] args) {\n        int score = 55;\n\n        // ====== 只使用 if（两个独立判断） ======\n        System.out.println(\"===== 两个独立的 if =====\");\n        if (score >= 90) {\n            System.out.println(\"优秀\");\n        }\n        if (score >= 60) {\n            System.out.println(\"及格\");\n        }\n        if (score < 60) {\n            System.out.println(\"不及格\");\n        }\n        // 每次判断都是独立的，55 < 60，所以只输出\"不及格\"\n\n        // ====== 使用 if-else if-else（互斥分支） ======\n        System.out.println(\"\\n===== if-else if-else =====\");\n        if (score >= 90) {\n            System.out.println(\"优秀\");\n        } else if (score >= 60) {\n            System.out.println(\"及格\");\n        } else {\n            System.out.println(\"不及格\");\n        }\n        // 三个分支互斥，只会走一个：55 不满足前两个，走 else\n\n        // ====== 基本 if-else（二选一） ======\n        System.out.println(\"\\n===== 基本 if-else =====\");\n        int age = 20;\n        if (age >= 18) {\n            System.out.println(\"成年人\");\n        } else {\n            System.out.println(\"未成年人\");\n        }\n    }\n}",
          explanation: "1. 两个独立的 if：每个 if 独立判断，互不影响。score=55，前两个都是 false，第三个是 true。 2. if-else if-else：这是一个整体结构，三个分支互斥。只要前面的条件满足了，后面的就不再判断。 3. if-else 二选一：最简单的分支结构，不是走 if 就是走 else。 4. 什么时候用独立 if？——多个不互斥的条件（如多个独立的功能判断）。 5. 什么时候用 if-else？——互斥的条件（如成绩等级划分，一个分数只能对应一个等级）。"
        },
        {
          title: "用 if-else 做简单计算器",
          code: "public class SimpleCalculator {\n    public static void main(String[] args) {\n        int a = 15, b = 6;\n        char operator = '/';    // 运算符：+、-、*、/\n\n        System.out.println(\"计算：\" + a + \" \" + operator + \" \" + b);\n\n        if (operator == '+') {\n            System.out.println(\"结果：\" + (a + b));\n        } else if (operator == '-') {\n            System.out.println(\"结果：\" + (a - b));\n        } else if (operator == '*') {\n            System.out.println(\"结果：\" + (a * b));\n        } else if (operator == '/') {\n            if (b != 0) {\n                System.out.println(\"结果：\" + (a / b));         // 整数除法\n                System.out.println(\"精确结果：\" + (a * 1.0 / b)); // 浮点除法\n            } else {\n                System.out.println(\"错误：除数不能为零！\");\n            }\n        } else {\n            System.out.println(\"错误：不支持的运算符！\");\n        }\n    }\n}",
          explanation: "1. 用 if-else if-else 根据不同的运算符执行不同的计算。 2. operator == '/' 成立，进入除法分支。 3. 检查除数 b 是否为 0（防御性编程，避免除零错误），b=6 ≠ 0，继续。 4. a/b=15/6=2（整数除法）；a*1.0/b=15.0/6=2.5（浮点除法）。 5. 如果运算符不是 +、-、*、/ 中的任何一个，走最后的 else 输出错误提示。"
        }
      ],
      quiz: [
        {
          question: "以下表达式中，哪个的结果是 double 类型？",
          options: [
            "10 / 3",
            "10 / 3.0",
            "10 % 3",
            "(int) 3.14"
          ],
          answer: "10 / 3.0",
          explanation: "10/3.0 中有一个 double（3.0），表达式整体按 double 计算。A 是全 int 结果为 int；C 求余也是 int；D 强制转 int 后也是 int。"
        },
        {
          question: "以下代码的输出结果是什么？\n\nint a = 10;\nint b = 3;\ndouble c = a / b;\nSystem.out.println(c);",
          options: [
            "3.3333...",
            "3.0",
            "3",
            "编译错误"
          ],
          answer: "3.0",
          explanation: "a/b 是 int/int = 3（整数除法），然后把 3 赋给 double 变量 c，变成 3.0。要得到 3.333...，需要写成 (double)a/b 或 a/3.0。"
        },
        {
          question: "关于 if-else 语句，以下说法正确的是？",
          options: [
            "if-else 语句中，if 和 else 两个分支可能同时执行",
            "else 后面必须跟着一个条件表达式",
            "if-else 是一个二选一的结构，if 和 else 两个分支必走其一",
            "if-else 语句不能嵌套使用"
          ],
          answer: "if-else 是一个二选一的结构，if 和 else 两个分支必走其一",
          explanation: "if-else 是最简单的分支语句，条件成立走 if 分支，不成立走 else 分支，必走其一且只走其一。else 后面不能跟条件，if-else 可以嵌套。"
        },
        {
          question: "以下哪个条件表达式能正确判断\"x 是偶数\"？",
          options: [
            "if (x = 0)",
            "if (x / 2 == 0)",
            "if (x % 2 == 0)",
            "if (x % 2 = 0)"
          ],
          answer: "if (x % 2 == 0)",
          explanation: "偶数的特征是除以 2 余数为 0，用 % 求余。A 是赋值不是判断；B 不准确（只有 x=0 或 1 时才成立）；D 混淆了 == 和 =。"
        },
        {
          question: "if (x > 0); 这一行代码中，\"if (x > 0);\"是语法错误吗？",
          options: [
            "是语法错误，编译器会报错",
            "不是语法错误，但逻辑上是错误的",
            "这是正确的写法",
            "if 不能单独和分号一起用"
          ],
          answer: "不是语法错误，但逻辑上是错误的",
          explanation: "if (x > 0); 在语法上完全合法——它是一个 if 后面跟了一个空语句。编译器不会报错。但这几乎肯定是编程者不小心多写的分号，逻辑上是一个 bug。"
        },
        {
          question: "以下关于运算精度规则的说法，正确的是？",
          options: [
            "表达式中有 int 时，结果一定是 int",
            "char 类型不能参与算术运算",
            "表达式中有 double 时，整个表达式按 double 计算",
            "float 和 double 一起运算时，结果按 float 计算"
          ],
          answer: "表达式中有 double 时，整个表达式按 double 计算",
          explanation: "有 double 就按 double 算（向上转换规则）。A 错：有 double 时结果就不是 int。B 错：char 可以参与运算且自动转 int。D 错：float 和 double 一起时，float 提升为 double。"
        }
      ],
      dragMatch: [
        {
          left: "运算精度规则",
          right: "表达式中有 double 按 double 算，有 float 按 float 算，全 int 按 int 算"
        },
        {
          left: "向上转换",
          right: "低精度类型在混合运算中自动提升为高精度类型"
        },
        {
          left: "逻辑非 !",
          right: "反转布尔值，!true 变 false，!false 变 true"
        },
        {
          left: "if 语句",
          right: "条件判断语句：条件为 true 执行代码块，为 false 跳过"
        },
        {
          left: "if-else 语句",
          right: "二选一分支语句：条件为 true 走 if 分支，为 false 走 else 分支"
        },
        {
          left: "分支语句",
          right: "提供两条（或多条）不同的执行路径，根据条件选择其中一条"
        },
        {
          left: "== 比较运算符",
          right: "判断两个值是否相等，结果为 boolean 类型"
        },
        {
          left: "int / int",
          right: "整数除法，结果仍为整数，小数部分直接截断"
        },
        {
          left: "int / double",
          right: "混合除法，int 自动转为 double，结果保留小数"
        },
        {
          left: "代码规范",
          right: "System（S大写）、main（全小写）、println（全小写），严格区分大小写"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "程序从上到下执行，遇到 if 关键字。",
          "计算 if 后面括号中的条件表达式，得到 true 或 false。",
          "如果结果是 true → 进入 if 后面的花括号 { }，执行 if 分支中的所有代码。",
          "if 分支执行完毕后 → 跳过 else 分支，直接执行 if-else 结构后面的代码。",
          "如果结果是 false → 跳过 if 分支，进入 else 后面的花括号 { }，执行 else 分支中的所有代码。",
          "else 分支执行完毕后 → 继续执行 if-else 结构后面的代码。",
          "无论如何，if 和 else 两个分支只有一个会被执行，然后程序继续向下运行。"
        ]
      },
      exercises: [
        {
          question: "写出以下每个表达式的结果类型和值。\n\n(1) 8 / 5\n(2) 8.0 / 5\n(3) 8 % 5\n(4) 'C' + 1\n(5) (double)(8 / 5)",
          answer: "(1) 类型 int，值 1（8/5=1，余数 3 被舍弃）\n(2) 类型 double，值 1.6（8.0/5=1.6）\n(3) 类型 int，值 3（8÷5 商 1 余 3）\n(4) 类型 int，值 68（'C'的 ASCII 码是 67，+1=68 = 'D'的 ASCII 码）\n(5) 类型 double，值 1.0（先算 8/5=1（int），再强转为 double 得 1.0）\n\n解题思路：\n每个表达式先看操作数类型，确定结果类型，再计算值。特别注意：(double)(8/5) 是先做整数除法得到 1，再转成 1.0——不是 1.6！"
        },
        {
          question: "写一个程序，判断一个年份是否为闰年。闰年规则：能被 4 整除但不能被 100 整除，或者能被 400 整除。",
          answer: "public class LeapYear {\n    public static void main(String[] args) {\n        int year = 2024;\n        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {\n            System.out.println(year + \" 是闰年\");\n        } else {\n            System.out.println(year + \" 不是闰年\");\n        }\n    }\n}\n\n解题思路：\n用 % 判断整除（余数为 0 即可整除），用 && 表示\"并且\"，用 || 表示\"或者\"。"
        },
        {
          question: "写一个程序，输入一个整数，判断它是正数、负数还是零。",
          answer: "public class NumberCheck {\n    public static void main(String[] args) {\n        int num = -5;   // 可以改成任何值测试\n\n        if (num > 0) {\n            System.out.println(num + \" 是正数\");\n        } else if (num < 0) {\n            System.out.println(num + \" 是负数\");\n        } else {\n            System.out.println(num + \" 是零\");\n        }\n    }\n}\n\n解题思路：\n三种互斥的情况，用 if-else if-else 结构最合适。"
        },
        {
          question: "找出以下代码中的 4 处错误。\n\npublic class test {\n    public static void main(string[] args) {\n        int x = 10;\n        if (x > 5);\n            system.out.println(\"大于5\");\n        else (x <= 5)\n            System.Out.println(\"小于等于5\");\n    }\n}",
          answer: "错误1：类名 test → Test（首字母大写）\n错误2：string[] args → String[] args（S 大写）\n错误3：if (x > 5); → 去掉分号（空语句陷阱）\n错误4：system.out.println → System.out.println（S 大写）\n错误5：else (x <= 5) → 直接写 else { }（else 后面不能跟条件）\n错误6：System.Out.println → System.out.println（out 全小写）\n\n修正后代码：\npublic class Test {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"大于5\");\n        else\n            System.out.println(\"小于等于5\");\n    }\n}"
        },
        {
          question: "写一个程序，判断一个三角形的三个边长 a、b、c 能否构成三角形（任意两边之和大于第三边）。如果能，再判断是等边、等腰还是普通三角形。",
          answer: "public class Triangle {\n    public static void main(String[] args) {\n        int a = 5, b = 5, c = 5;\n\n        if (a + b > c && a + c > b && b + c > a) {\n            System.out.print(\"能构成三角形：\");\n            if (a == b && b == c) {\n                System.out.println(\"等边三角形\");\n            } else if (a == b || b == c || a == c) {\n                System.out.println(\"等腰三角形\");\n            } else {\n                System.out.println(\"普通三角形\");\n            }\n        } else {\n            System.out.println(\"不能构成三角形\");\n        }\n    }\n}\n\n解题思路：\n先判断能否构成三角形（三边关系），能构成后再继续判断类型。注意嵌套 if 的写法——里层 if 写在外层 if 的花括号里面。"
        }
      ],
      conclusion: [
        "本节课的核心是掌握\"运算精度规则\"和\"if 分支语句\"两个部分——前者决定了混合运算的结果类型，后者让程序能根据条件做出不同反应。",
        "学习流程控制时要特别注意：if 括号里必须是 boolean 类型、== 是比较而 = 是赋值、if 后面不要多写分号。这几个看似简单的细节是初学者出错最多的地方。",
        "通过本节课，应该能够正确使用 if-else 处理二选一的判断场景，并理解不同精度类型在混合运算中的自动提升行为。",
        "if-else 是后续学习循环（for、while）和多路分支（switch）的基础。只有掌握了 if-else，后续的复合控制结构才能顺利理解。",
        "课后建议多练习：(1) 用 if-else 写几个判断程序（奇偶数、正负数、闰年）；(2) 验证运算精度规则——故意写几个混合类型的表达式并输出结果；(3) 用 if-else 做一个简单的\"根据分数输出等级\"的程序；(4) 预习实验课的 5 个题目（水仙花数、最大公约数等）。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "运算精度",
        "自动类型提升",
        "if语句",
        "if-else",
        "分支语句",
        "逻辑运算符",
        "代码规范"
      ],
      cardSummary: "本节课首先回顾了前置和后置自加自减的区别，通过代码运行结果验证了\"前置先加后用，后置先用后加\"的规则。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-switch-for-loop",
      title: "switch 开关语句与 for 循环详解",
      chapter: "Java 流程控制",
      date: "2025-09-04",
      tags: [
        "if-else嵌套",
        "switch语句",
        "break",
        "for循环",
        "循环三要素",
        "冒泡排序概念",
        "逻辑运算符短路"
      ],
      summary: [
        "本节课首先复习了数据类型、数组下标、逻辑运算符的短路特性（&&第一个为false则停止，||第一个为true则停止）。",
        "课堂中重点讲解了 if-else 嵌套语句中\"else 与最近的 if 匹配\"的原则，以及用 if-else if-else 实现成绩等级划分。",
        "老师通过 switch 语句的详细演示，讲解了 case 匹配、break 跳出、default 兜底以及 break 穿透（fall-through）效果。",
        "本节课的绝对重点是 for 循环——语法格式为 for(赋值语句; 比较语句; 自加语句)，赋值语句只执行一次，比较→执行体→自加→比较构成循环。",
        "最后引入了冒泡排序的基本思想——用临时变量 t 作为\"哨兵\"交换两个变量的值，这是排序算法的基石。"
      ],
      keyPoints: [
        {
          title: "if-else if-else 多分支与嵌套",
          content: "当有多种互斥的情况需要判断时，可以用 if-else if-else 链来处理。嵌套原则是：else 总是和离它最近的未配对的 if 匹配。 学习意义：现实中的判断往往不是简单的二选一（是/否），而是多选一（如成绩等级 A/B/C/D/E）。if-else if-else 就是处理这种场景的标准写法。 课堂理解：老师用一个具体的例子让学生当场写代码——\"成绩大于等于90输出 Grade A，80-89 输出 B，70-79 输出 C，60-69 输出 D，60以下输出 E\"。关键原则是： - if-else if-else 是一条链，条件从上到下依次判断。 - 只要前面有一个条件满足，后面的就不再判断。 - \"else 与最近的 if 匹配\"——在嵌套结构中，else 配对的是离它最近的那个 if。 - 老师强调：\"if 能不用就不用，因为太复杂了。像你们刚才那个成绩等级，用 switch 就简单多了。\"",
          javaCompare: "",
          id: "kp-0-if-else-if-else",
          short: "当有多种互斥的情况需要判断时，可以用 if-else if-else 链来处理。嵌套原则是：else 总是和离它最近的未配对的 if 匹配。 学习意义：现实中的……",
          mistake: ""
        },
        {
          title: "switch 开关语句",
          content: "switch 语句是一种多路选择结构，根据一个表达式的值，匹配对应的 case 分支来执行代码。相比多个 if-else，switch 结构更清晰、执行效率更高。 学习意义：当判断条件是基于同一个变量的多个固定取值时（如星期几、菜单选项、成绩等级），switch 比一连串 if-else 更直观、更好维护。 课堂理解：老师将 switch 形象地解释为\"开关\"： - \"这个 i 要跟后面的值一个个匹配。匹配上哪个，就输出哪个。如果一个也没匹配上，就输出 default。\" - break 的作用：\"如果有 break，就跳出。如果没有 break，就一直往下输出，直到遇到 break 或结束。\" - default 位置任意：\"default 的位置是任意的，放哪儿都行。\" 老师通过删掉 break 来演示穿透效果：把 80 对应 case 的 break 删掉后，输出完 80 的内容又接着输出了 70 的内容。",
          javaCompare: "",
          id: "kp-1-switch",
          short: "switch 语句是一种多路选择结构，根据一个表达式的值，匹配对应的 case 分支来执行代码。相比多个 if-else，switch 结构更清晰、执行效率更高……",
          mistake: ""
        },
        {
          title: "break 穿透（Fall-through）",
          content: "在 switch 语句中，如果某个 case 语句块末尾没有 break，程序会继续往下执行下一个 case 的代码，直到遇到 break 或 switch 结束。这被称为 break 穿透 或 fall-through。 学习意义：理解穿透效果有两个原因：① 避免因忘记 break 而产生的 bug；② 有时候故意利用穿透来让多个 case 共享同一段代码（如上面例子中 case 6 和 case 7 共享\"周末\"）。 课堂理解：老师现场演示：先把 80 对应的 break 删掉，运行后发现不仅输出了 80 的内容，70 的内容也输出出来了。再把 70 的 break 也删掉，90 的也出来了。 老师的总结：\"如果一个也没有匹配上，我就输出 default。输出完要寻找 break，遇到 break 就离开，如果没有 break 就继续往前输出。\" 特别注意：当 default 不在末尾且没有 break 时——\"default 输出出来了，后面没有 break，那它是不是又要往出输出啊？\"——所以 default 也会产生穿透。",
          javaCompare: "",
          id: "kp-2-break-fall-through",
          short: "在 switch 语句中，如果某个 case 语句块末尾没有 break，程序会继续往下执行下一个 case 的代码，直到遇到 break 或 switch 结……",
          mistake: ""
        },
        {
          title: "for 循环——语法结构",
          content: "for 循环是 Java 中最常用的循环语句。它将初始化、条件判断、迭代更新三个要素集中写在一行，结构紧凑、逻辑清晰。 语法格式： for (表达式1; 表达式2; 表达式3) { // 循环体 } - 表达式 1（赋值/初始化语句）：循环开始前执行，且只执行一次。 - 表达式 2（比较/条件语句）：每次循环前判断，true 则进入循环体，false 则退出循环。 - 表达式 3（自加/迭代语句）：每次循环体执行完毕后执行，负责更新循环变量。 学习意义：循环是编程的核心能力。for 循环是遍历数组、累加求和、重复操作等各种场景的标准工具。老师强调：\"for 循环如果不会，这科以后学习就都不会。大二往后所有课程都不会。\" 课堂理解：老师用一个非常详细的逐步推演来解释 for 循环： 1. 初始化只执行一次：\"我们的 for 循环的赋值语句只执行一次。有很多人把它拿到外面去写也可以。\" 2. 真正的循环在表达 2 和 3：\"循环就在这——先判断表达 2，如果 true 就执行循环体，然后执行表达 3（自加），再判断表达 2……就在这转圈。\" 3. 直到条件为 false：\"直到 j 加到 10，10 < 10 不对了，就跳出循环。\" 老师用 for(int j=0; j<10; j++) 为例展示了完整的循环过程： - j=0 → 判断 0<10 true → 执行循环体 → j++ (j=1) - j=1 → 判断 1<10 true → 执行循环体 → j++ (j=2) - ... - j=9 → 判断 9<10 true → 执行循环体 → j++ (j=10) - j=10 → 判断 10<10 false → 退出循环",
          javaCompare: "",
          id: "kp-3-for",
          short: "for 循环是 Java 中最常用的循环语句。它将初始化、条件判断、迭代更新三个要素集中写在一行，结构紧凑、逻辑清晰。 语法格式： for (表达式1; 表达式……",
          mistake: ""
        },
        {
          title: "for 循环求和实战",
          content: "利用 for 循环可以实现对一组数字的累加求和。\"累加\"的核心操作是：用一个变量（如 sum）从 0 开始，循环中每次把当前值加到 sum 上。 课堂理解：老师用 sum = 0+1+2+3+...+10 的推演，一步步展示了累加的过程： sum 初始 = 0 i=0 → sum = 0+0 = 0 → i++ i=1 → sum = 0+1 = 1 → i++ i=2 → sum = 1+2 = 3 → i++ ... i=10 → sum = 45+10 = 55 → i++ = 11 11<10? false → 退出，结果 55 老师特别强调：从 0 加到 10（含 10）的和是 55。并用\"120 到 150 的和\"作为课堂练习。",
          javaCompare: "",
          id: "kp-4-for",
          short: "利用 for 循环可以实现对一组数字的累加求和。\"累加\"的核心操作是：用一个变量（如 sum）从 0 开始，循环中每次把当前值加到 sum 上。 课堂理解：老师……",
          mistake: ""
        },
        {
          title: "临时变量交换——冒泡排序的基础",
          content: "交换两个变量的值不能直接用 a = b; b = a;（这样会丢失 a 的原始值），需要引入一个临时变量 t（也叫\"哨兵\"）来暂存其中一个值。 标准三步交换法： 1. t = a; —— 先把 a 的值存到\"储物盒\" t 中 2. a = b; —— 把 b 的值赋给 a（a 的旧值已安全保存在 t） 3. b = t; —— 从\"储物盒\"取出 a 的旧值，赋给 b 学习意义：这是冒泡排序、选择排序等所有排序算法的基础操作。不掌握交换，就无法理解任何排序算法。 课堂理解：老师用一个形象的比喻：\"找一个空地，先把 a 放起来。然后拿 b 盖住 a 的位置。再把放起来的 t 拿回来给 b。就是倒一下。\" 还用图形演示了\"从大到小排成从小到大\"的过程： - 原来：B（小） A（大） → 升序要求小的在前 - t = A（把大的暂存起来） - A 位置变成 B（把小的放前面） - B 位置变成 t（把大的放后面）= B A 变成升序 老师引入冒泡排序概念：\"就是底下的泡一个一个往上冒。一趟一趟的，把最小的挪到前面去。这个就是冒泡。\"",
          javaCompare: "",
          id: "kp-5-x",
          short: "交换两个变量的值不能直接用 a = b; b = a;（这样会丢失 a 的原始值），需要引入一个临时变量 t（也叫\"哨兵\"）来暂存其中一个值。 标准三步交换法：……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "switch 成绩等级（对比 if-else）",
          code: "public class ScoreGradeSwitch {\n    public static void main(String[] args) {\n        int score = 85;\n        int level = score / 10;   // 把分数缩小10倍：85/10=8\n\n        switch (level) {\n            case 10:   // 100分\n            case 9:    // 90-99分\n                System.out.println(\"Grade A\");\n                break;\n            case 8:    // 80-89分\n                System.out.println(\"Grade B\");\n                break;\n            case 7:    // 70-79分\n                System.out.println(\"Grade C\");\n                break;\n            case 6:    // 60-69分\n                System.out.println(\"Grade D\");\n                break;\n            default:   // 60分以下\n                System.out.println(\"Grade E\");\n                break;\n        }\n    }\n}",
          explanation: "1. score/10 将分数缩小 10 倍：85/10=8（int 除法），实现对分数段的映射。 2. case 10 和 case 9 连在一起（无 break）→ 100 和 90-99 都是 A。 3. score=85，level=8，匹配 case 8 → 输出 \"Grade B\"。 4. 后面的 case 7、6、default 因为有 break 隔开，不会穿透。 5. 这个方法的关键技巧是用整数除法把范围变成离散值。"
        },
        {
          title: "for 循环求和与阶乘",
          code: "public class SumAndFactorial {\n    public static void main(String[] args) {\n        // ====== 1到10的和 ======\n        int sum = 0;\n        for (int i = 1; i <= 10; i++) {\n            sum += i;\n        }\n        System.out.println(\"1到10的和 = \" + sum);      // 55\n\n        // ====== 1到5的阶乘之和 (1!+2!+3!+4!+5!) ======\n        int total = 0;\n        int factorial = 1;   // 阶乘从 1 开始（因为是从 1 开始乘）\n        for (int i = 1; i <= 5; i++) {\n            factorial *= i;      // factorial = factorial * i\n            total += factorial;  // 把当前阶乘值加到总和里\n        }\n        System.out.println(\"1!+2!+...+5! = \" + total);  // 153\n        // 验证：1+2+6+24+120 = 153\n    }\n}",
          explanation: "1. sum 从 0 开始，i 从 1 到 10，每次 sum += i，最后 sum = 55。 2. 阶乘：factorial 从 1 开始，第 i 次循环乘以 i，所以 factorial = 1*2*3*4*5 = 120 = 5!。 3. total 累加每次计算出来的阶乘值：total = 1! + 2! + 3! + 4! + 5! = 153。 4. factorial *= i 是 factorial = factorial * i 的简写（累乘）。"
        },
        {
          title: "用 for 循环实现冒泡排序（概念演示）",
          code: "public class BubbleSortDemo {\n    public static void main(String[] args) {\n        int[] arr = {5, 3, 8, 1, 9};   // 待排序数组\n\n        System.out.print(\"排序前：\");\n        for (int i = 0; i < arr.length; i++) {\n            System.out.print(arr[i] + \" \");\n        }\n        System.out.println();\n\n        // 冒泡排序：每轮把最大的\"冒\"到最后\n        for (int i = 0; i < arr.length - 1; i++) {\n            for (int j = 0; j < arr.length - 1 - i; j++) {\n                if (arr[j] > arr[j + 1]) {   // 如果前一个 > 后一个，交换\n                    int t = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = t;\n                }\n            }\n        }\n\n        System.out.print(\"排序后：\");\n        for (int i = 0; i < arr.length; i++) {\n            System.out.print(arr[i] + \" \");\n        }\n        System.out.println();\n    }\n}",
          explanation: "1. 外层 for 循环控制\"比较的轮数\"——5 个元素需要 4 轮比较。 2. 内层 for 循环负责\"每一轮中的两两比较和交换\"。 3. if (arr[j] > arr[j+1])：如果前一个大于后一个，就用临时变量 t 交换它们的位置。 4. 经过 4 轮比较后，数组从小到大排列完成。 5. 这就是老师课堂上画的\"冒泡\"——大的元素像气泡一样一步步浮到后面。"
        }
      ],
      quiz: [
        {
          question: "以下 for 循环会执行多少次循环体？\n\nfor (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}",
          options: [
            "4 次",
            "5 次",
            "6 次",
            "无限次"
          ],
          answer: "5 次",
          explanation: "i 从 0 到 4（0,1,2,3,4），共 5 次。当 i=5 时，5<5 为 false，退出循环。"
        },
        {
          question: "在 switch 语句中，如果某个 case 后面没有写 break，会发生什么？",
          options: [
            "编译错误",
            "只执行该 case 的语句",
            "从该 case 开始一直执行到遇到 break 或 switch 结束",
            "自动跳到 default"
          ],
          answer: "从该 case 开始一直执行到遇到 break 或 switch 结束",
          explanation: "没有 break 时会发生穿透（fall-through），继续执行后续所有 case 的代码，直到遇到 break 或 switch 结束。"
        },
        {
          question: "以下代码的输出结果是什么？\n\nint sum = 0;\nfor (int i = 1; i <= 4; i++) {\n    sum += i;\n}\nSystem.out.println(sum);",
          options: [
            "10",
            "4",
            "15",
            "0"
          ],
          answer: "10",
          explanation: "sum = 0+1+2+3+4 = 10。循环 4 次（i=1,2,3,4），每次把 i 加到 sum 上。"
        },
        {
          question: "要交换 int a=5 和 int b=8 的值，以下哪个代码是正确的？",
          options: [
            "a = b; b = a;",
            "int t = a; b = a; a = t;",
            "int t = a; a = b; b = t;",
            "a = b - a; b = b - a; a = b + a;"
          ],
          answer: "int t = a; a = b; b = t;",
          explanation: "三步交换法：t=a（暂存a）→ a=b（b赋给a）→ b=t（t中的a赋给b）。A 会丢失 a 的原值；B 步骤顺序错误；D 虽然也能实现但不如 C 直观（不推荐）。"
        },
        {
          question: "switch 语句的表达式不能是什么类型？",
          options: [
            "int",
            "char",
            "double",
            "String（Java 7+）"
          ],
          answer: "double",
          explanation: "switch 表达式支持 int、char、String（Java 7 及以上）、枚举等。不支持 double、float、boolean 等类型。因为浮点数比较不精确，不适合等值匹配。"
        },
        {
          question: "以下关于 for 循环的说法，哪个是错误的？",
          options: [
            "表达式1（初始化）在整个循环中只执行一次",
            "表达式2（条件）在每次循环开始前都会判断",
            "表达式3（迭代）在循环体执行前执行",
            "for 循环可以嵌套在另一个 for 循环中"
          ],
          answer: "表达式3（迭代）在循环体执行前执行",
          explanation: "表达式3（如 i++）在循环体执行**之后**才执行，不是之前。顺序是：初始化 → 判断条件 → 执行循环体 → 执行迭代 → 再判断条件 ……"
        }
      ],
      dragMatch: [
        {
          left: "if-else if-else",
          right: "多分支条件判断，从上到下依次判断条件，只执行第一个为 true 的分支"
        },
        {
          left: "switch",
          right: "多路选择语句，根据表达式的值匹配对应的 case 分支执行"
        },
        {
          left: "break",
          right: "跳出当前 switch 或循环，没有它会导致穿透"
        },
        {
          left: "default",
          right: "switch 中所有 case 都不匹配时执行的默认分支"
        },
        {
          left: "for 循环",
          right: "将初始化、条件判断、迭代更新写在一起的循环结构"
        },
        {
          left: "表达式1（初始化）",
          right: "for 循环的第一个部分，只执行一次，用于设置循环起点"
        },
        {
          left: "表达式2（条件）",
          right: "for 循环的第二个部分，每次循环前判断，false 则退出"
        },
        {
          left: "表达式3（自加）",
          right: "for 循环的第三个部分，每次循环体执行后执行"
        },
        {
          left: "临时变量 t",
          right: "用于暂存数据实现两数交换的\"哨兵\"变量"
        },
        {
          left: "冒泡排序",
          right: "通过相邻两两比较和交换，每轮将最大/最小值\"冒\"到最后面"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "执行表达式1：int i = 0（初始化，只做这一次）。",
          "判断表达式2：i < 3 ? 0<3 → true，进入循环体。",
          "执行循环体中的代码（如 System.out.println(i)）。",
          "循环体执行完毕，执行表达式3：i++（i 变成 1）。",
          "回到第 2 步：判断 i < 3 ? 1<3 → true，进入循环体。",
          "循环体执行完毕，执行表达式3：i++（i 变成 2）。",
          "回到第 2 步：判断 i < 3 ? 2<3 → true，进入循环体。",
          "循环体执行完毕，执行表达式3：i++（i 变成 3）。",
          "回到第 2 步：判断 i < 3 ? 3<3 → false，退出循环。",
          "程序继续执行 for 循环后的代码。",
          "循环次数：3 次（i=0,1,2）。"
        ]
      },
      exercises: [
        {
          question: "写一个 for 循环，输出 1 到 100 之间所有能被 3 整除的数字。",
          answer: "public class DivisibleBy3 {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 100; i++) {\n            if (i % 3 == 0) {\n                System.out.print(i + \" \");\n            }\n        }\n    }\n}\n\n解题思路：\nfor 循环从 1 遍历到 100，用 i % 3 == 0 判断是否能被 3 整除（余数为 0）。"
        },
        {
          question: "使用 for 循环计算 1 + 3 + 5 + ... + 99（所有奇数的和）。",
          answer: "public class OddSum {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 99; i += 2) {   // 每次加 2：1,3,5,...,99\n            sum += i;\n        }\n        System.out.println(\"1到99的奇数和：\" + sum);  // 2500\n    }\n}\n\n解题思路：\n奇数序列的步长是 2。for 循环中 i += 2 表示每次 i 增加 2，这样 i 依次取 1, 3, 5, ..., 99。"
        },
        {
          question: "用 switch 语句实现：输入 1-7 的数字，输出对应的星期名称（1=周一……7=周日），其他数字输出\"无效\"。",
          answer: "public class WeekDay {\n    public static void main(String[] args) {\n        int day = 3;\n        switch (day) {\n            case 1: System.out.println(\"周一\"); break;\n            case 2: System.out.println(\"周二\"); break;\n            case 3: System.out.println(\"周三\"); break;\n            case 4: System.out.println(\"周四\"); break;\n            case 5: System.out.println(\"周五\"); break;\n            case 6: System.out.println(\"周六\"); break;\n            case 7: System.out.println(\"周日\"); break;\n            default: System.out.println(\"无效\"); break;\n        }\n    }\n}\n\n解题思路：\n每个数字对应一个 case，最后用 default 处理无效输入。每个 case 都记得写 break。"
        },
        {
          question: "用临时变量交换法，将数组 {100, 200} 的两个元素交换位置后输出。",
          answer: "public class ArraySwap {\n    public static void main(String[] args) {\n        int[] arr = {100, 200};\n        System.out.println(\"交换前：arr[0]=\" + arr[0] + \", arr[1]=\" + arr[1]);\n\n        int t = arr[0];      // 暂存 arr[0]\n        arr[0] = arr[1];     // arr[1] 赋给 arr[0]\n        arr[1] = t;          // 暂存的值赋给 arr[1]\n\n        System.out.println(\"交换后：arr[0]=\" + arr[0] + \", arr[1]=\" + arr[1]);\n    }\n}\n\n解题思路：\n数组元素的交换和普通变量交换一模一样——仍然用 t = a; a = b; b = t; 三步法。"
        },
        {
          question: "分析以下代码，说明 for 循环的循环体中每个语句的作用，并写出最终输出结果。\n\nint sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    sum = sum + i * i;\n}\nSystem.out.println(sum);",
          answer: "输出：55\n循环过程：\ni=1: sum = 0 + 1×1 = 1\ni=2: sum = 1 + 2×2 = 5\ni=3: sum = 5 + 3×3 = 14\ni=4: sum = 14 + 4×4 = 30\ni=5: sum = 30 + 5×5 = 55\n本质是计算 1²+2²+3²+4²+5² = 55\n\n解题思路：\n用手工推演的方式走一遍循环，理解每一步 sum 的变化。这是掌握 for 循环最好的练习方式。"
        }
      ],
      conclusion: [
        "本节课的核心是掌握 switch 开关语句和 for 循环——switch 用于多路等值匹配，for 循环是 Java 编程中最核心的循环结构。",
        "学习 switch 时要特别注意 break 不能忘——没有 break 会导致贯穿（fall-through），这是初学者最常见的 switch 错误。",
        "学习 for 循环时要记住它的执行顺序——初始化（一次）→ 条件判断（每次前）→ 循环体 → 迭代（每次后）→ 条件判断 → ……直到条件为 false。",
        "临时变量交换法是冒泡排序、选择排序等所有排序算法的基础——t=a; a=b; b=t 三步法必须牢记。",
        "课后建议多练习：(1) 用 for 循环做几个不同起点和终点的求和；(2) 用 switch 重写成绩等级判断；(3) 写代码实现两个变量值的交换并验证；(4) 尝试理解冒泡排序的双重 for 循环结构——这是后面继续学习算法的基础。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "if-else嵌套",
        "switch语句",
        "break",
        "for循环",
        "循环三要素",
        "冒泡排序概念",
        "逻辑运算符短路"
      ],
      cardSummary: "本节课首先复习了数据类型、数组下标、逻辑运算符的短路特性（&&第一个为false则停止，||第一个为true则停止）。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-while-dowhile-loop",
      title: "while 循环、do-while 循环与循环对比",
      chapter: "Java 流程控制",
      date: "2025-09-11",
      tags: [
        "while循环",
        "do-while循环",
        "for循环复习",
        "循环对比",
        "数组与矩阵下标",
        "参数匹配",
        "包package"
      ],
      summary: [
        "本节课首先介绍了 Java 中包（package）的概念和创建方式——包是用来组织类的命名空间，包含共同特性的类放在同一个包下。",
        "课堂中重点讲解了 while 循环的结构——先判断条件，条件为 true 执行循环体，为 false 直接跳过。",
        "老师通过代码对比演示了 do-while 和 while 的核心区别：do-while 先执行一次再判断，while 先判断再执行。",
        "本节课还总结了 for 循环的三个表达式（赋值、比较、增加），并强调循环实际上是从第二个表达式（比较）开始转圈的。",
        "最后讲解了数组下标（从 0 开始）与矩阵下标（从 1 开始）的转换关系，以及方法调用时参数匹配的三要素：个数、顺序、类型。"
      ],
      keyPoints: [
        {
          title: "包（package）的概念与创建",
          content: "包（package） 是 Java 中用来组织和管理类的一种命名空间机制。把功能相关的类放在同一个包下，就像把同类型的文件放在同一个文件夹里一样。包名通常采用公司域名的反转（如 com.example.tools），全部小写。 学习意义：随着项目变大，类越来越多。如果所有类都堆在默认包下，会非常混乱。包可以避免类名冲突（两个包下可以有同名的类），让代码结构更清晰。 课堂理解：老师展示了创建包和默认包的区别： - 在 SRC 下创建包 → New → Package → 输入包名（如 com 或 unit） - 在包下创建类 → 该类自动属于这个包 - \"包是具有共同特性的。包含共同特性的这些类就放在一起。\" 老师特别指出：如果不创建包就是\"默认包\"，默认包下也能直接创建类。",
          javaCompare: "",
          id: "kp-0-package",
          short: "包（package） 是 Java 中用来组织和管理类的一种命名空间机制。把功能相关的类放在同一个包下，就像把同类型的文件放在同一个文件夹里一样。包名通常采用公……",
          mistake: ""
        },
        {
          title: "while 循环——先判断后执行",
          content: "while 循环是最基本的循环结构。每次循环开始前，先判断条件表达式，如果为 true 就执行循环体；如果为 false 就直接跳过（可能一次都不执行）。 学习意义：当你不确定需要循环多少次（循环次数由运行时条件决定），或者可能根本不需要循环时，while 比 for 更合适。比如\"只要用户没输入 quit 就一直读取\"。 课堂理解：老师通过一个具体的例子解释了 while 循环： - 初始 i = 0 → 经过 i++ 后 i = 1 → 输出 2（因为先加再加），然后 2<10，继续循环 - 当 i = 9 时，进入循环，i++ 后变成 10，输出 10，然后判断 10<10 为 false，退出 - 老师让学生数循环次数——从 2 到 10 一共 9 次 关键问题：\"while 是先判断条件，再执行循环体。如果第一次条件就是 false，循环体一次都不会执行。\"",
          javaCompare: "",
          id: "kp-1-while",
          short: "while 循环是最基本的循环结构。每次循环开始前，先判断条件表达式，如果为 true 就执行循环体；如果为 false 就直接跳过（可能一次都不执行）。 学习……",
          mistake: ""
        },
        {
          title: "do-while 循环——先执行后判断",
          content: "do-while 是 while 的变体。关键区别：它先执行一次循环体，然后再判断条件。这意味着无论条件如何，循环体至少执行一次。 课堂理解：老师用代码对比来演示： 场景 A（条件一开始就是 false）： - while：条件 false → 一次也不执行 - do-while：先执行一次循环体 → 再判断条件 false → 退出 场景 B（条件一开始是 true）： - while 和 do-while 的执行次数一样 核心结论：do-while 的执行次数 ≥ while 的执行次数。 老师还特别注意了语法细节——\"do-while 是以分号结尾的，而 while 是以大括号结尾的。为什么？因为 while 的大括号是语句组的结尾，而 do-while 在 } 后面又新起了一个 while 条件判断，必须用分号作为语句的结束。\"",
          javaCompare: "",
          id: "kp-2-do-while",
          short: "do-while 是 while 的变体。关键区别：它先执行一次循环体，然后再判断条件。这意味着无论条件如何，循环体至少执行一次。 课堂理解：老师用代码对比来演……",
          mistake: ""
        },
        {
          title: "三种循环的对比总结",
          content: "Java 有三种循环结构：for、while、do-while。它们可以互相转换（任何循环都可用另一种写法实现），但各有最适合的场景。 学习意义：知道什么时候用哪种循环，是写好代码的基本功。选错了循环结构，代码会显得别扭甚至出错。 课堂理解：老师总结： - for：三个表达式（赋值、比较、增加）写在一起，结构紧凑，适合\"知道循环次数\"的场景。 - while：条件判断在前，可能一次都不执行，适合\"不知道循环几次，可能不循环\"的场景。 - do-while：先执行再判断，至少执行一次，适合\"至少要做一次，再看要不要继续\"的场景。 ---",
          javaCompare: "",
          id: "kp-3-x",
          short: "Java 有三种循环结构：for、while、do-while。它们可以互相转换（任何循环都可用另一种写法实现），但各有最适合的场景。 学习意义：知道什么时候用……",
          mistake: ""
        },
        {
          title: "数组下标与矩阵下标的转换",
          content: "- 数组下标（Java/计算机）：从 0 开始。第一个元素是 arr[0]。 - 矩阵下标（数学/线性代数）：从 1 开始。第一个元素是 a₁₁。 它们之间的关系：矩阵下标 = 数组下标 + 1，或者说：数组下标 = 矩阵下标 - 1。 课堂理解：老师画了一个 4×4 的矩阵来解释： \"在我们数组里面，这是 0 1 2 3。而在我们学的线性代数里面，这是 1 2 3 4。所以说我们在转换的时候要转换过来——数组下标 = 矩阵下标 - 1。\" 老师还补充了屏幕像素坐标的类似概念：\"数学坐标系原点在左下角，(0,0)在中间。而屏幕坐标系原点在左上角，(0,0)在左上。所以也要转换。\" ---",
          javaCompare: "",
          id: "kp-4-x",
          short: "- 数组下标（Java/计算机）：从 0 开始。第一个元素是 arr[0]。 - 矩阵下标（数学/线性代数）：从 1 开始。第一个元素是 a₁₁。 它们之间的关……",
          mistake: ""
        },
        {
          title: "参数匹配三要素",
          content: "调用方法时，传入的参数（实参）必须和方法定义时的参数列表（形参）完全匹配。匹配有三个要求： 1. 个数一致（number）：方法要几个参数，就只能传几个。 2. 顺序一致（order）：第一个参数对应第一个形参，第二个对应第二个，不能乱。 3. 类型一致（type）：int 对应 int、double 对应 double。类型不匹配时需要类型转换。 课堂理解：老师通过一个编译错误的例子来解释：System.out.println 的参数写了一个逗号而不是加号，导致编译器认为传了两个不同类型的参数。\"原来的 print 是一个整型参数，但你传的是一个 String + 逗号 + int，个数和类型都不匹配，所以报错了。\" 解决方法是用 + 号拼接成一个 String，因为 \"不管谁跟 String 加，都变成 String\"。 ---",
          javaCompare: "",
          id: "kp-5-x",
          short: "调用方法时，传入的参数（实参）必须和方法定义时的参数列表（形参）完全匹配。匹配有三个要求： 1. 个数一致（number）：方法要几个参数，就只能传几个。 2.……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "while 与 do-while 的对比",
          code: "public class WhileVsDoWhile {\n    public static void main(String[] args) {\n        System.out.println(\"===== while 循环 =====\");\n        int a = 5;\n        while (a < 3) {\n            System.out.println(\"while: a = \" + a);\n            a++;\n        }\n        System.out.println(\"while 循环结束（a<3为false，一次也没执行）\");\n\n        System.out.println(\"\\n===== do-while 循环 =====\");\n        int b = 5;\n        do {\n            System.out.println(\"do-while: b = \" + b);  // 至少输出一次！\n            b++;\n        } while (b < 3);\n        System.out.println(\"do-while 循环结束（虽然条件为false，但仍然执行了一次）\");\n    }\n}",
          explanation: "1. a=5, 5<3 是 false, while 直接跳过循环体——输出\"一次也没执行\"。 2. b=5, do 先执行一次输出，然后判断 5<3 是 false，退出循环。 3. 对比明显：相同条件，while 一次不执行，do-while 执行了一次。"
        },
        {
          title: "用 for 循环操作二维数组（模拟矩阵）",
          code: "public class MatrixDemo {\n    public static void main(String[] args) {\n        int[][] matrix = new int[3][3];\n\n        // 赋值：模拟数学矩阵 A₁₁=1, A₁₂=2, ...\n        // 数组下标 = 矩阵下标 - 1\n        for (int i = 0; i < 3; i++) {          // i=0,1,2 对应矩阵行 1,2,3\n            for (int j = 0; j < 3; j++) {      // j=0,1,2 对应矩阵列 1,2,3\n                matrix[i][j] = (i + 1) * (j + 1);  // i+1 = 矩阵行号, j+1 = 矩阵列号\n            }\n        }\n\n        // 输出表格形式\n        System.out.println(\"3×3 矩阵：\");\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                System.out.print(matrix[i][j] + \"\\t\");\n            }\n            System.out.println();   // 每行输出完换行\n        }\n    }\n}",
          explanation: "1. 外层 for (i) 控制行，内层 for (j) 控制列——这是双重循环的固定模式。 2. (i+1)*(j+1) 实现了\"矩阵行号 × 矩阵列号\"的计算（因为数组下标从0开始）。 3. \\t 是制表符，用来对齐列。每行输出完后用空的 println() 换行。 4. 这说明双重循环处理矩阵时，下标转换的核心就是\"数组下标 + 1 = 矩阵下标\"。"
        },
        {
          title: "参数匹配——正确与错误对比",
          code: "public class ParamMatchDemo {\n    public static void main(String[] args) {\n        int a = 10, b = 20;\n\n        // ✅ 正确：+ 号将两个 int 拼接成一个 String\n        System.out.println(\"和：\" + (a + b));       // 和：30\n\n        // ✅ 正确：多个 + 号拼接，最终是一个 String\n        System.out.println(\"a=\" + a + \", b=\" + b);  // a=10, b=20\n\n        // ❌ 错误写法示意（如果用逗号的话）：\n        // System.out.println(\"和：\", a + b);  // 编译错误！参数个数不匹配\n        // println 方法只需要一个参数，但这里传了两个（一个 String + 一个 int）\n    }\n}",
          explanation: "1. println 方法期望接收的参数个数、类型取决于具体的重载版本。 2. println(String) 需要一个 String——用 \"和：\" + (a+b) 拼成 \"和：30\" 传进去。 3. println(a + \", b=\" + b) 同理，用 + 号把所有内容拼成一个 String。 4. 如果用逗号 println(\"和：\", a+b)，就是传了两个参数，和方法定义不匹配。"
        }
      ],
      quiz: [
        {
          question: "以下 while 循环会输出什么？\n\nint i = 3;\nwhile (i < 3) {\n    System.out.println(\"执行了\");\n    i++;\n}\nSystem.out.println(\"结束了\");",
          options: [
            "执行了 / 结束了",
            "结束了",
            "死循环",
            "编译错误"
          ],
          answer: "结束了",
          explanation: "i=3，3<3 为 false，while 循环体一次也不执行，直接跳到后面输出\"结束了\"。"
        },
        {
          question: "以下 do-while 循环会输出什么？\n\nint i = 3;\ndo {\n    System.out.println(\"执行了\");\n    i++;\n} while (i < 3);\nSystem.out.println(\"结束了\");",
          options: [
            "执行了 / 结束了",
            "结束了",
            "死循环",
            "编译错误"
          ],
          answer: "执行了 / 结束了",
          explanation: "do 先执行一次输出\"执行了\"，i 变成 4。然后判断 4<3 为 false，退出循环，输出\"结束了\"。"
        },
        {
          question: "关于 for、while、do-while 三种循环，以下说法正确的是？",
          options: [
            "三种循环完全不能互相替代",
            "for 循环最少执行次数一定是 0",
            "do-while 循环至少执行一次",
            "while 循环一定至少执行一次"
          ],
          answer: "do-while 循环至少执行一次",
          explanation: "do-while 至少执行一次（先执行后判断）。for 也可能一次不执行（条件一开始就是 false）。三种循环可以互相替代（用不同的写法实现相同的功能）。"
        },
        {
          question: "数组 arr = {10, 20, 30}，arr[1] 的值是多少？",
          options: [
            "10",
            "20",
            "30",
            "下标越界"
          ],
          answer: "20",
          explanation: "数组下标从 0 开始：arr[0]=10, arr[1]=20, arr[2]=30。"
        },
        {
          question: "以下关于方法参数匹配的说法，哪个是错误的？",
          options: [
            "实参和形参的个数必须一致",
            "实参和形参的类型必须一致",
            "实参和形参的名字必须一致",
            "实参和形参的顺序必须一致"
          ],
          answer: "实参和形参的名字必须一致",
          explanation: "参数匹配要求个数、顺序、类型一致，但参数的名字可以不同。调用时的变量名（实参）和方法定义时的参数名（形参）没有关系。"
        },
        {
          question: "关于 Java 包（package），以下说法正确的是？",
          options: [
            "一个 Java 项目只能有一个包",
            "包名建议使用大写字母",
            "包用来组织和管理类，避免类名冲突",
            "所有类必须放在包中"
          ],
          answer: "包用来组织和管理类，避免类名冲突",
          explanation: "包的主要作用就是组织类、避免命名冲突。一个项目可以有多个包，包名通常全小写。类也可以不放在任何包中（默认包）。"
        }
      ],
      dragMatch: [
        {
          left: "while 循环",
          right: "先判断条件再执行循环体，可能一次都不执行"
        },
        {
          left: "do-while 循环",
          right: "先执行一次循环体再判断条件，至少执行一次"
        },
        {
          left: "for 循环",
          right: "将初始化、条件、迭代三个要素集中写在一起"
        },
        {
          left: "包（package）",
          right: "用来组织和管理类的命名空间，避免类名冲突"
        },
        {
          left: "死循环",
          right: "条件永远为 true 或忘记更新循环变量导致的永不停止的循环"
        },
        {
          left: "数组下标",
          right: "从 0 开始计数，arr[0] 是第一个元素"
        },
        {
          left: "矩阵下标",
          right: "数学中从 1 开始计数，a₁₁ 是第一个元素"
        },
        {
          left: "参数匹配",
          right: "方法调用时实参和形参在个数、顺序、类型上必须一致"
        },
        {
          left: "累加求和",
          right: "用 sum += i 在循环中不断累加当前值"
        },
        {
          left: "双重 for 循环",
          right: "外层走行、内层走列，用于遍历二维数组或矩阵"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "while 循环流程：程序执行到 while 语句。",
          "while 循环流程：计算括号中的条件表达式（true 或 false）。",
          "while 循环流程：如果 false → 直接跳过整个循环体，继续执行 while 后面的代码。",
          "while 循环流程：如果 true → 执行循环体中的所有语句。",
          "while 循环流程：循环体执行完毕后 → 回到第 2 步，重新判断条件。",
          "while 循环流程：重复以上步骤，直到条件为 false。",
          "do-while 循环流程：程序执行到 do 语句。",
          "do-while 循环流程：无条件执行一次循环体中的所有语句（不管条件是 true 还是 false）。",
          "do-while 循环流程：循环体执行完毕后 → 计算 while 括号中的条件表达式。",
          "do-while 循环流程：如果 true → 回到第 2 步，再次执行循环体。",
          "do-while 循环流程：如果 false → 退出循环，继续执行后面的代码。",
          "do-while 循环流程：关键区别：do-while 能保证循环体至少执行一次。"
        ]
      },
      exercises: [
        {
          question: "用 while 循环计算 1 到 100 的和。",
          answer: "public class WhileSum {\n    public static void main(String[] args) {\n        int i = 1;\n        int sum = 0;\n        while (i <= 100) {\n            sum += i;\n            i++;\n        }\n        System.out.println(\"1到100的和：\" + sum);   // 5050\n    }\n}\n\n解题思路：\nwhile 版本的求和与 for 版本思路完全一样，只是把初始化和迭代分别写在循环前后。"
        },
        {
          question: "用 do-while 循环实现：不断生成 1-10 的随机数，直到生成 5 为止，输出每次生成的数字。",
          answer: "public class GuessFive {\n    public static void main(String[] args) {\n        int num;\n        int count = 0;\n        do {\n            num = (int)(Math.random() * 10) + 1;   // 生成 1-10 的随机数\n            count++;\n            System.out.println(\"第\" + count + \"次：\" + num);\n        } while (num != 5);\n        System.out.println(\"恭喜，生成到 5！共尝试了 \" + count + \" 次。\");\n    }\n}\n\n解题思路：\n这个场景必须至少执行一次（至少要生成一个数），所以用 do-while 最合适。每次循环生成随机数并计数，直到 num==5 时退出。"
        },
        {
          question: "使用双重 for 循环，输出 9×9 乘法表。",
          answer: "public class MultiplicationTable {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 9; i++) {           // 外层：行\n            for (int j = 1; j <= i; j++) {       // 内层：列（注意 j<=i 是上三角）\n                System.out.print(j + \"×\" + i + \"=\" + (i * j) + \"\\t\");\n            }\n            System.out.println();   // 一行结束换行\n        }\n    }\n}\n\n解题思路：\n外层 i 控制行数（1-9），内层 j 控制每行的列数（1 到 i）。乘积 = i × j。"
        },
        {
          question: "指出以下代码中的错误并修改。\n\npublic class Test {\n    public static void main(String[] args) {\n        int i = 10;\n        while (i < 5) {\n            System.out.println(i);\n        }    // 错误1\n\n        do {\n            System.out.println(\"执行一次\");\n        } while (i < 5)    // 错误2\n\n        int[] arr = {1, 2, 3};\n        System.out.println(arr[3]);   // 错误3\n    }\n}",
          answer: "错误1：while 循环体中缺少 i++ 或 i-- 更新语句——如果 i<5 为 true 会死循环。\n错误2：do-while 结尾缺少分号 ; —— 应写成 } while (i < 5);\n错误3：arr[3] 越界——长度为 3 的数组下标范围是 0~2，应为 arr[2] 或 arr[0]。"
        },
        {
          question: "将以下 for 循环改写为 while 循环和 do-while 循环，三种写法实现相同的功能。\n\nfor (int i = 0; i < 5; i++) {\n    System.out.print(i + \" \");\n}",
          answer: "// while 版本\nint i = 0;\nwhile (i < 5) {\n    System.out.print(i + \" \");\n    i++;\n}\n\n// do-while 版本（注意：当 i=0 开始，条件是 i<5）\nint j = 0;\ndo {\n    System.out.print(j + \" \");\n    j++;\n} while (j < 5);\n\n解题思路：\nfor 的三个表达式分别对应：表达式1 → while/do-while 的初始化；表达式2 → 循环条件；表达式3 → 循环体末尾的更新。"
        }
      ],
      conclusion: [
        "本节课的核心是掌握 while 和 do-while 两种循环结构，理解它们与 for 循环的区别和适用场景——while 可能一次都不执行，do-while 至少执行一次。",
        "学习循环时要特别注意 do-while 结尾的分号不能忘——这是三种循环中唯一需要分号的。",
        "通过本节课应该能够在三种循环（for、while、do-while）之间自由选择，并理解包（package）、参数匹配、数组下标等配套基础知识。",
        "循环是 Java 编程中最核心的控制结构。后续学习数组遍历、集合操作、数据处理、算法实现等所有内容都离不开循环。现在多练几种循环写法，以后事半功倍。",
        "课后建议多练习：(1) 用 while 和 do-while 分别实现 1-100 求和；(2) 用双重循环输出九九乘法表；(3) 练习将同一需求用三种循环各写一遍；(4) 创建自己的包并在包下创建类。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "while循环",
        "do-while循环",
        "for循环复习",
        "循环对比",
        "数组与矩阵下标",
        "参数匹配",
        "包package"
      ],
      cardSummary: "本节课首先介绍了 Java 中包（package）的概念和创建方式——包是用来组织类的命名空间，包含共同特性的类放在同一个包下。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-array-for-review",
      title: "数组与 for 循环综合复习",
      chapter: "Java 数组",
      date: "2025-09-11",
      tags: [
        "一维数组",
        "二维数组",
        "双重for循环",
        "数组赋值",
        "数组默认值",
        "循环嵌套"
      ],
      summary: [
        "本节课首先布置了实验作业的提交要求：实验一和实验二合并、实验三和实验四合为两个档案袋，A4 纸手写代码，左侧叠线后装订。",
        "课堂中通过一维数组例题，复习数组声明、new 分配空间、数组下标从 0 开始，以及 int 数组创建后默认值为 0 的关键概念。",
        "老师重点演示了二维数组的双重 for 循环赋值过程：外层控制行 i，内层控制列 j，并详细讲解了二重循环的执行步骤。",
        "本节课强调了赋值和取值的区别：arr[i] 出现在等号左边表示写入，出现在等号右边或输出语句中表示读取。",
        "最后老师要求将竖着输出的二维数组改成横着的表格形式输出，从而复习 print、println 和制表符 \\t 的输出控制。"
      ],
      keyPoints: [
        {
          title: "一维数组的声明与默认值",
          content: "一维数组用于保存多个相同类型的数据。使用 int[] A = new int[3]; 可以创建长度为 3 的整型数组，下标范围是 0、1、2。数组创建后不是“空的”，int 类型元素会自动得到默认值 0。",
          javaCompare: "与普通 int 变量不同，数组一次可以管理多个 int；与局部变量不同，数组元素创建后会有默认值。",
          id: "kp-0-x",
          short: "一维数组用于保存多个相同类型的数据。使用 int[] A = new int[3]; 可以创建长度为 3 的整型数组，下标范围是 0、1、2。数组创建后不是“空……",
          mistake: ""
        },
        {
          title: "数组下标从 0 开始",
          content: "Java 数组的第一个元素是 A[0]，不是 A[1]。长度为 3 的数组最后一个元素是 A[2]，访问 A[3] 会出现下标越界错误。写循环时通常使用 i = 0; i < A.length; i++。",
          javaCompare: "数学中常从 1 开始计数，而 Java 数组从 0 开始计数。",
          id: "kp-1-0",
          short: "Java 数组的第一个元素是 A[0]，不是 A[1]。长度为 3 的数组最后一个元素是 A[2]，访问 A[3] 会出现下标越界错误。写循环时通常使用 i =……",
          mistake: ""
        },
        {
          title: "赋值与取值的区别",
          content: "赋值是把数据写入数组，例如 A[i] = i + 1；取值是从数组读取数据，例如 System.out.println(A[i]) 或 int x = A[i]。判断时可以看数组元素在等号左边还是右边。",
          javaCompare: "A[i] 在等号左边是写入，在等号右边或 println 中是读取。",
          id: "kp-2-x",
          short: "赋值是把数据写入数组，例如 A[i] = i + 1；取值是从数组读取数据，例如 System.out.println(A[i]) 或 int x = A[i]……",
          mistake: ""
        },
        {
          title: "二维数组的表格结构",
          content: "二维数组可以理解为一个表格，需要通过两个下标定位元素：A[行][列]。例如 int[][] A = new int[3][3]; 表示 3 行 3 列的二维数组。",
          javaCompare: "一维数组只需要一个下标，如 A[0]；二维数组需要两个下标，如 A[0][1]。",
          id: "kp-3-x",
          short: "二维数组可以理解为一个表格，需要通过两个下标定位元素：A[行][列]。例如 int[][] A = new int[3][3]; 表示 3 行 3 列的二维数组……",
          mistake: ""
        },
        {
          title: "双重 for 循环：外行内列",
          content: "遍历二维数组时，通常外层 for 控制行 i，内层 for 控制列 j。外层每执行一次，内层会完整跑一圈，所以口诀是“外层跑一次，内层跑一圈”。",
          javaCompare: "单层 for 适合一维数组；双重 for 是遍历二维数组的标准写法。",
          id: "kp-4-for",
          short: "遍历二维数组时，通常外层 for 控制行 i，内层 for 控制列 j。外层每执行一次，内层会完整跑一圈，所以口诀是“外层跑一次，内层跑一圈”。……",
          mistake: ""
        },
        {
          title: "竖排输出与横排输出",
          content: "如果内层循环使用 println，每个元素都会单独占一行，结果会竖着输出；如果内层循环使用 print，再在一行结束后调用 println()，就能把二维数组输出成表格。",
          javaCompare: "print 不换行，println 输出后换行；横排表格通常是内层 print + 外层 println。",
          id: "kp-5-x",
          short: "如果内层循环使用 println，每个元素都会单独占一行，结果会竖着输出；如果内层循环使用 print，再在一行结束后调用 println()，就能把二维数组输……",
          mistake: ""
        },
        {
          title: "制表符 \\t 的作用",
          content: "\\t 是制表符，也就是 Tab，常用于让表格中相邻列之间保持间隔。输出二维数组时写 System.out.print(A[i][j] + \"\\t\"); 可以让数据更整齐。",
          javaCompare: "空格数量难控制，\\t 更适合简单表格对齐。",
          id: "kp-6-t",
          short: "\\t 是制表符，也就是 Tab，常用于让表格中相邻列之间保持间隔。输出二维数组时写 System.out.print(A[i][j] + \"\\t\"); 可以让数……",
          mistake: ""
        },
        {
          title: "双重循环中的变量命名",
          content: "嵌套循环中外层和内层不能使用同名变量。习惯上外层使用 i，内层使用 j。若内外层都写 int i，会造成语法或逻辑错误。",
          javaCompare: "一层循环常用 i；二维循环常用 i 表示行、j 表示列。",
          id: "kp-7-x",
          short: "嵌套循环中外层和内层不能使用同名变量。习惯上外层使用 i，内层使用 j。若内外层都写 int i，会造成语法或逻辑错误。……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "一维数组：区分赋值和取值",
          code: "public class OneDArrayDemo {\n    public static void main(String[] args) {\n        int[] A = new int[4];    // 长度 4，下标 0,1,2,3，默认全是 0\n\n        // ==== 赋值 ====\n        for (int i = 0; i < A.length; i++) {\n            A[i] = i + 1;        // 把 1,2,3,4 依次写入数组\n        }\n\n        // ==== 取值（输出） ====\n        System.out.println(\"数组内容：\");\n        for (int k = 0; k < A.length; k++) {\n            System.out.println(\"A[\" + k + \"] = \" + A[k]);\n        }\n\n        // 未赋值的元素会保持默认值 0\n        int[] B = new int[5];\n        B[0] = 100;\n        B[1] = 200;\n        // B[2], B[3], B[4] 没赋值 → 默认值 0\n        System.out.println(\"\\nB[2] = \" + B[2]);   // 0（默认值）\n    }\n}",
          explanation: "第一个 for 循环把数据写入数组，是赋值操作；第二个 for 循环读取数组元素并输出，是取值操作。B[2] 没有手动赋值，所以仍然是 int 数组的默认值 0。"
        },
        {
          title: "二维数组双重循环：外行内列",
          code: "public class TwoDLoopDemo {\n    public static void main(String[] args) {\n        int[][] A = new int[3][3];   // 3行3列\n\n        System.out.println(\"===== 双重循环赋值过程 =====\");\n        for (int i = 0; i < 3; i++) {\n            System.out.println(\"--- 进入第 \" + (i + 1) + \" 行 ---\");\n            for (int j = 0; j < 3; j++) {\n                A[i][j] = (i + 1) * 10 + (j + 1);\n                System.out.println(\"  A[\" + i + \"][\" + j + \"] = \" + A[i][j]);\n            }\n        }\n\n        System.out.println(\"\\n===== 最终矩阵 =====\");\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                System.out.print(A[i][j] + \"\\t\");\n            }\n            System.out.println();\n        }\n    }\n}",
          explanation: "外层 i 控制第几行，内层 j 控制第几列。每当 i 固定时，j 会从 0 到 2 跑一整圈，完成一整行的赋值和输出。"
        },
        {
          title: "竖排改横排：输出格式控制",
          code: "public class FormatOutput {\n    public static void main(String[] args) {\n        String[][] fruits = {\n            {\"苹果\", \"红色\", \"5元\"},\n            {\"香蕉\", \"黄色\", \"3元\"},\n            {\"葡萄\", \"紫色\", \"8元\"}\n        };\n\n        System.out.println(\"===== 竖排输出（不好看） =====\");\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                System.out.println(fruits[i][j]);  // 每个一行\n            }\n        }\n\n        System.out.println(\"\\n===== 横排输出（表格格式） =====\");\n        System.out.println(\"名称\\t颜色\\t价格\");\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                System.out.print(fruits[i][j] + \"\\t\");\n            }\n            System.out.println();\n        }\n    }\n}",
          explanation: "竖排输出时内层使用 println，每个元素都会换行；横排表格输出时内层使用 print，一行结束后再用 println() 换行。"
        }
      ],
      quiz: [
        {
          question: "int[] arr = new int[5]; 创建后，arr[2] 的值是多少？",
          options: [
            "null",
            "0",
            "未定义",
            "2"
          ],
          answer: "0",
          explanation: "int 类型数组的默认值是 0。new int[5] 创建后，所有 5 个元素都是 0。"
        },
        {
          question: "遍历二维数组 int[][] arr = new int[3][4]; 时，以下哪个写法正确？",
          options: [
            "for(int i=0; i<3; i++) for(int j=0; j<4; j++) arr[i][j]=0;",
            "for(int i=0; i<4; i++) for(int j=0; j<3; j++) arr[i][j]=0;",
            "for(int i=1; i<=3; i++) for(int j=1; j<=4; j++) arr[i][j]=0;",
            "for(int i=0; i<3; i++) for(int i=0; i<4; i++) arr[i][i]=0;"
          ],
          answer: "for(int i=0; i<3; i++) for(int j=0; j<4; j++) arr[i][j]=0;",
          explanation: "i 从 0 到 2 表示 3 行，j 从 0 到 3 表示 4 列，刚好覆盖 int[3][4] 的所有元素。"
        },
        {
          question: "以下代码输出什么？int[] arr = {10, 20, 30}; arr[0] = 100; System.out.println(arr[1]);",
          options: [
            "10",
            "20",
            "100",
            "0"
          ],
          answer: "20",
          explanation: "arr[0]=100 只修改第一个元素，arr[1] 仍然是原来的 20。"
        },
        {
          question: "以下双重循环会输出什么图形？外层 i<3，内层 j<4，内层 print(\"*\")，外层末尾 println()。",
          options: [
            "输出 3 行，每行 4 个 *",
            "输出 4 行，每行 3 个 *",
            "输出 12 行，每行 1 个 *",
            "编译错误"
          ],
          answer: "输出 3 行，每行 4 个 *",
          explanation: "外层循环控制行数，执行 3 次；内层循环控制每行的内容，执行 4 次，所以是 3 行，每行 4 个星号。"
        },
        {
          question: "数组 int[] A = new int[4]; 共有几个元素？",
          options: [
            "3 个",
            "4 个",
            "5 个",
            "不确定"
          ],
          answer: "4 个",
          explanation: "new int[4] 表示创建长度为 4 的数组，下标为 0、1、2、3。"
        },
        {
          question: "关于“赋值”和“取值”，以下说法正确的是？",
          options: [
            "赋值和取值是同一种操作",
            "arr[0] = 5 是取值",
            "int x = arr[0] 是赋值",
            "arr[0] = 5 是赋值，int x = arr[0] 是取值"
          ],
          answer: "arr[0] = 5 是赋值，int x = arr[0] 是取值",
          explanation: "arr[i] 在等号左边时表示写入，也就是赋值；在等号右边时表示读取，也就是取值。"
        }
      ],
      dragMatch: [
        {
          left: "一维数组",
          right: "通过一个下标访问元素，如 arr[0]"
        },
        {
          left: "二维数组",
          right: "通过行和列两个下标访问元素，如 arr[行][列]"
        },
        {
          left: "数组默认值",
          right: "创建数组后系统自动赋予的值，int 类型默认为 0"
        },
        {
          left: "赋值",
          right: "把数据写入数组某个位置，如 A[0] = 5"
        },
        {
          left: "取值",
          right: "从数组某个位置读取数据，如 int x = A[0]"
        },
        {
          left: "双重 for 循环",
          right: "外层控制行，内层控制列，遍历二维数组的标准写法"
        },
        {
          left: "print",
          right: "输出后不换行，适合在同一行连续输出"
        },
        {
          left: "println",
          right: "输出后自动换行，适合一行输出结束后换到下一行"
        },
        {
          left: "\\t",
          right: "制表符 Tab，用于对齐表格列"
        },
        {
          left: "下标越界",
          right: "访问不存在的下标时抛出的错误"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "外层循环 i=0，进入第 1 行。",
          "内层循环初始化 j=0。",
          "判断 j<3 为 true，执行 A[0][0] = 值，然后 j++ 变为 1。",
          "继续判断 j<3 为 true，执行 A[0][1] = 值，然后 j++ 变为 2。",
          "继续判断 j<3 为 true，执行 A[0][2] = 值，然后 j++ 变为 3。",
          "判断 j<3 为 false，内层循环结束。",
          "外层 i++，i 变为 1，进入第 2 行。",
          "内层循环重新初始化 j=0。",
          "j 从 0 到 2 再次跑一圈，依次给 A[1][0]、A[1][1]、A[1][2] 赋值。",
          "内层再次结束后，外层 i++，i 变为 2。",
          "判断 i<2 为 false，双重循环全部结束。"
        ]
      },
      exercises: [
        {
          question: "声明一个长度为 5 的 int 数组，用 for 循环从下标 0 到 4 依次赋值为 10、20、30、40、50，然后输出所有元素。",
          answer: "public class ArrayPractice {\n    public static void main(String[] args) {\n        int[] arr = new int[5];\n        for (int i = 0; i < arr.length; i++) {\n            arr[i] = (i + 1) * 10;\n        }\n        for (int i = 0; i < arr.length; i++) {\n            System.out.println(\"arr[\" + i + \"] = \" + arr[i]);\n        }\n    }\n}"
        },
        {
          question: "声明一个 2 行 4 列的二维 int 数组，用双重 for 循环将所有元素赋值为行号和列号的乘积，然后以表格形式输出。",
          answer: "public class TwoDArrayPractice {\n    public static void main(String[] args) {\n        int[][] A = new int[2][4];\n\n        for (int i = 0; i < 2; i++) {\n            for (int j = 0; j < 4; j++) {\n                A[i][j] = (i + 1) * (j + 1);\n                System.out.print(A[i][j] + \"\\t\");\n            }\n            System.out.println();\n        }\n    }\n}"
        },
        {
          question: "有一个数组 int[] scores = {85, 92, 78, 63, 95, 88}; 请计算所有分数的总和与平均值。",
          answer: "public class AverageScore {\n    public static void main(String[] args) {\n        int[] scores = {85, 92, 78, 63, 95, 88};\n        int sum = 0;\n        for (int i = 0; i < scores.length; i++) {\n            sum += scores[i];\n        }\n        double avg = sum * 1.0 / scores.length;\n        System.out.println(\"总分：\" + sum);\n        System.out.println(\"平均分：\" + avg);\n    }\n}"
        },
        {
          question: "找出代码错误：int[] A = new int[3]; for (int i = 1; i <= 3; i++) { A[i] = i; } int[][] B = new int[2]; B[0][0] = 1;",
          answer: "错误 1：循环应从 i=0 开始并使用 i<3，否则 A[3] 越界。错误 2：二维数组声明不完整，应写 int[][] B = new int[2][3];。错误 3：B 未正确创建为二维数组时不能使用 B[0][0]。"
        },
        {
          question: "用双重 for 循环输出每行递增一个星号的图案：第一行 1 个 *，第二行 2 个 *，直到第五行 5 个 *。",
          answer: "public class StarPattern {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(\"*\");\n            }\n            System.out.println();\n        }\n    }\n}"
        }
      ],
      conclusion: [
        "本节课的核心是将数组和 for 循环两个知识点融合起来，用 for 循环操作一维和二维数组的赋值与取值。",
        "操作数组时一定要记住下标从 0 开始，这是写 for 循环遍历数组时最容易出错的点。",
        "双重 for 循环的规则是外行内列：外层跑一次，内层跑一圈。理解这个模型后，操作二维数据会更清晰。",
        "数组是后续学习集合、排序、查找和数据结构的基础，现在多练习数组操作，后面会事半功倍。",
        "课后建议多练习一维数组赋值输出、二维数组表格输出、竖排改横排输出，以及双重循环星号图案。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "一维数组",
        "二维数组",
        "双重for循环",
        "数组赋值",
        "数组默认值",
        "循环嵌套"
      ],
      cardSummary: "本节课首先布置了实验作业的提交要求：实验一和实验二合并、实验三和实验四合为两个档案袋，A4 纸手写代码，左侧叠线后装订。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-class-structure-accessor",
      title: "类的定义、结构与访问器详解",
      chapter: "Java 类与对象",
      date: "2025-09-18",
      tags: [
        "类定义",
        "属性",
        "方法",
        "成员变量",
        "局部变量",
        "访问器",
        "getset",
        "this关键字",
        "构造方法",
        "参数传递"
      ],
      summary: [
        "本节课首先明确了类的定义：类是用来描述一类事物共有属性和功能的模板。",
        "课堂中重点讲解了类体的标准结构：属性在上、方法在下，方法又细分为构造方法、访问器、常用方法和特殊方法。",
        "老师通过银行账户的类比解释访问器 set/get 的作用：不直接暴露属性，而是通过方法控制访问，提高安全性和健壮性。",
        "本节课的核心概念是成员变量与局部变量的区别：成员变量在整个类体中可见，局部变量只在定义它的方法内可见。",
        "最后通过参数传递和 this 关键字，演示对象如何调用方法来访问和修改属性，以及如何解决局部变量与成员变量同名的问题。"
      ],
      keyPoints: [
        {
          title: "类的基本概念",
          content: "类是 Java 面向对象编程的核心，用来描述一类事物共有的属性和功能。属性描述对象有什么，方法描述对象能做什么。类是模板，对象是根据模板创建出来的具体实例。",
          javaCompare: "类是抽象模板；对象是 new 出来的具体实例。",
          id: "kp-0-x",
          short: "类是 Java 面向对象编程的核心，用来描述一类事物共有的属性和功能。属性描述对象有什么，方法描述对象能做什么。类是模板，对象是根据模板创建出来的具体实例。……",
          mistake: ""
        },
        {
          title: "类体的标准结构",
          content: "一个规范的类通常把属性写在上面，把方法写在下面。方法部分又可以按构造方法、访问器 get/set、普通方法、特殊方法的顺序组织。这样写更符合 Java 代码阅读习惯。",
          javaCompare: "语法上位置不一定强制，但课程要求按规范写，便于阅读和维护。",
          id: "kp-1-x",
          short: "一个规范的类通常把属性写在上面，把方法写在下面。方法部分又可以按构造方法、访问器 get/set、普通方法、特殊方法的顺序组织。这样写更符合 Java 代码阅读……",
          mistake: ""
        },
        {
          title: "成员变量与局部变量",
          content: "成员变量声明在类体中、方法外，在整个类体内可见，并且有默认值；局部变量声明在方法或代码块中，只在当前方法或代码块内可见，使用前必须手动初始化。",
          javaCompare: "成员变量有默认值，如 int 默认为 0、对象引用默认为 null；局部变量没有默认值。",
          id: "kp-2-x",
          short: "成员变量声明在类体中、方法外，在整个类体内可见，并且有默认值；局部变量声明在方法或代码块中，只在当前方法或代码块内可见，使用前必须手动初始化。……",
          mistake: ""
        },
        {
          title: "同名变量与隐藏现象",
          content: "当局部变量与成员变量同名时，局部变量会隐藏成员变量。在方法中直接写 name，访问的是局部变量；要访问成员变量，需要写 this.name。",
          javaCompare: "name 通常指最近作用域内的变量；this.name 明确表示当前对象的成员变量。",
          id: "kp-3-x",
          short: "当局部变量与成员变量同名时，局部变量会隐藏成员变量。在方法中直接写 name，访问的是局部变量；要访问成员变量，需要写 this.name。……",
          mistake: ""
        },
        {
          title: "访问器 set/get",
          content: "访问器由 set 方法和 get 方法组成。set 用来给属性赋值，get 用来获取属性值。通过访问器间接操作 private 属性，可以加入验证逻辑，避免外部代码随意修改对象数据。",
          javaCompare: "public 属性可以直接访问但不安全；private 属性配合 get/set 更符合封装思想。",
          id: "kp-4-set-get",
          short: "访问器由 set 方法和 get 方法组成。set 用来给属性赋值，get 用来获取属性值。通过访问器间接操作 private 属性，可以加入验证逻辑，避免外部……",
          mistake: ""
        },
        {
          title: "this 关键字",
          content: "this 表示当前对象的引用。谁调用方法，this 就代表谁。在 set 方法中常用 this.属性名 = 参数名; 来区分成员变量和局部变量。",
          javaCompare: "this 只能用于对象相关的上下文，不能在 static 方法中直接使用。",
          id: "kp-5-this",
          short: "this 表示当前对象的引用。谁调用方法，this 就代表谁。在 set 方法中常用 this.属性名 = 参数名; 来区分成员变量和局部变量。……",
          mistake: ""
        },
        {
          title: "形参与实参",
          content: "方法定义时括号里的参数叫形参，它是等待接收值的占位符；方法调用时传入的具体值叫实参。把实参传给形参的过程叫参数传递。",
          javaCompare: "setName(String name) 中的 name 是形参；p.setName(\"Tom\") 中的 \"Tom\" 是实参。",
          id: "kp-6-x",
          short: "方法定义时括号里的参数叫形参，它是等待接收值的占位符；方法调用时传入的具体值叫实参。把实参传给形参的过程叫参数传递。……",
          mistake: ""
        },
        {
          title: "返回值与 void",
          content: "方法如果声明了返回值类型，就必须使用 return 返回对应类型的值；void 表示没有返回值，不能 return 一个具体值。get 方法通常需要返回属性值，而 set 方法通常是 void。",
          javaCompare: "getName() 通常返回 String；setName(String name) 通常不返回值。",
          id: "kp-7-void",
          short: "方法如果声明了返回值类型，就必须使用 return 返回对应类型的值；void 表示没有返回值，不能 return 一个具体值。get 方法通常需要返回属性值，……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "完整的类定义：从属性到访问器",
          code: "public class Student {\n    // 第1部分：属性\n    private String name;\n    private int age;\n\n    // 第2部分：构造方法\n    public Student() {\n        name = \"未命名\";\n        age = 0;\n    }\n\n    public Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    // 第3部分：访问器（get/set）\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setAge(int age) {\n        this.age = age;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    // 第4部分：普通方法\n    public void introduce() {\n        System.out.println(\"我叫\" + name + \"，今年\" + age + \"岁。\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s1 = new Student();\n        s1.setName(\"小明\");\n        s1.setAge(18);\n        s1.introduce();\n\n        Student s2 = new Student(\"小红\", 20);\n        s2.introduce();\n    }\n}",
          explanation: "Student 类按属性、构造方法、访问器、普通方法的顺序组织。属性使用 private 保护起来，外部通过 setName、getName、setAge、getAge 间接访问。"
        },
        {
          title: "成员变量与局部变量同名时使用 this 区分",
          code: "public class Person {\n    String name = \"张三\";    // 成员变量\n\n    public void test(String name) {   // 局部变量（参数）\n        System.out.println(\"name = \" + name);           // 访问局部变量\n        System.out.println(\"this.name = \" + this.name); // 访问成员变量\n    }\n\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.test(\"李四\");\n    }\n}",
          explanation: "test 方法中的参数 name 会隐藏成员变量 name，所以直接写 name 得到的是“李四”；使用 this.name 才能访问当前对象的成员变量“张三”。"
        },
        {
          title: "方法返回值类型由 return 决定",
          code: "public class ReturnDemo {\n    public double getValue() {\n        return 1.0;          // 1.0 是 double，所以方法类型是 double\n    }\n\n    public int getSum(int a, int b) {\n        return a + b;        // a+b 是 int，所以方法类型是 int\n    }\n\n    public void sayHello() {\n        System.out.println(\"Hello\");\n        // void 方法没有返回值\n    }\n}",
          explanation: "double 方法必须返回 double 类型或能自动转换为 double 的值；int 方法必须返回 int 值；void 方法表示没有返回值，不能 return 10 这样的具体值。"
        },
        {
          title: "银行账户访问器：通过方法保护属性",
          code: "public class BankAccount {\n    private String owner;\n    private double balance;\n\n    public void setOwner(String owner) {\n        this.owner = owner;\n    }\n\n    public String getOwner() {\n        return owner;\n    }\n\n    public void setBalance(double balance) {\n        if (balance >= 0) {\n            this.balance = balance;\n        } else {\n            System.out.println(\"余额不能为负数！\");\n        }\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount();\n        acc.setOwner(\"张三\");\n        acc.setBalance(1000.0);\n        System.out.println(acc.getOwner() + \" 余额：\" + acc.getBalance());\n    }\n}",
          explanation: "余额 balance 被 private 保护，外部不能直接修改。setBalance 中加入了“余额不能为负数”的验证，体现访问器的安全控制作用。"
        }
      ],
      quiz: [
        {
          question: "关于成员变量和局部变量，以下说法正确的是？",
          options: [
            "成员变量和局部变量都有默认值",
            "局部变量有默认值，成员变量没有",
            "成员变量有默认值（如0、null），局部变量必须手动初始化",
            "两者都没有默认值"
          ],
          answer: "成员变量有默认值（如0、null），局部变量必须手动初始化",
          explanation: "成员变量由系统自动赋默认值；局部变量必须手动初始化后才能使用。"
        },
        {
          question: "以下代码中 setName 方法执行后，成员变量 name 的值是什么？public void setName(String name) { name = name; }",
          options: [
            "等于传入的参数值",
            "还是原来的值（没变）",
            "null",
            "编译错误"
          ],
          answer: "还是原来的值（没变）",
          explanation: "两个 name 都是参数这个局部变量，参数赋值给参数，成员变量没有变化。正确写法是 this.name = name;"
        },
        {
          question: "this 关键字的作用是什么？",
          options: [
            "表示当前类的名称",
            "表示当前对象的引用",
            "表示父类的引用",
            "表示方法名"
          ],
          answer: "表示当前对象的引用",
          explanation: "this 表示当前对象。谁调用方法，this 就指向谁。"
        },
        {
          question: "访问器由哪两个方法组成？",
          options: [
            "add 和 remove",
            "start 和 stop",
            "set 和 get",
            "open 和 close"
          ],
          answer: "set 和 get",
          explanation: "set 方法用于赋值，get 方法用于取值，它们合起来构成访问器。"
        },
        {
          question: "关于 void 方法，以下说法正确的是？",
          options: [
            "void 方法必须有 return 语句",
            "void 方法可以 return 一个 int 值",
            "void 方法表示没有返回值",
            "void 是方法名的一部分"
          ],
          answer: "void 方法表示没有返回值",
          explanation: "void 表示方法没有返回值。void 方法可以不写 return，或者只写 return;，但不能 return 具体值。"
        }
      ],
      dragMatch: [
        {
          left: "class",
          right: "Java 关键字，用来声明一个类"
        },
        {
          left: "属性（property）",
          right: "类的成员变量，描述类“有什么”"
        },
        {
          left: "方法（method）",
          right: "类的成员函数，描述类“能做什么”"
        },
        {
          left: "成员变量",
          right: "在类体中、方法外声明的变量，整个类体可见"
        },
        {
          left: "局部变量",
          right: "在方法体内声明的变量，只在方法内可见"
        },
        {
          left: "this",
          right: "代表当前对象的引用"
        },
        {
          left: "set 方法",
          right: "访问器中的赋值方法，用于给属性设值"
        },
        {
          left: "get 方法",
          right: "访问器中的取值方法，用于获取属性值"
        },
        {
          left: "形参",
          right: "方法定义时声明的参数，等待实参赋值"
        },
        {
          left: "实参",
          right: "方法调用时传入的具体值"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "先使用 class 关键字定义一个类，例如 public class Student。",
          "在类体上方声明属性，例如 private String name; private int age;。",
          "根据需要编写构造方法，用于对象创建时初始化属性。",
          "编写 set 方法，例如 setName(String name)，用于接收外部传入的实参。",
          "在 set 方法中使用 this.name = name;，把形参的值赋给当前对象的成员变量。",
          "编写 get 方法，例如 getName()，通过 return name; 返回属性值。",
          "在 main 方法中使用 new Student() 创建对象。",
          "通过对象调用 set 方法给属性赋值，再调用 get 方法或普通方法读取并输出属性。",
          "如果局部变量和成员变量同名，使用 this.属性名 明确访问当前对象的成员变量。"
        ]
      },
      exercises: [
        {
          question: "定义一个 Student 类，包含 private String name 和 private int age，提供 setName、getName、setAge、getAge，并编写 introduce 方法输出学生信息。",
          answer: "public class Student {\n    private String name;\n    private int age;\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setAge(int age) {\n        this.age = age;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public void introduce() {\n        System.out.println(\"我叫\" + name + \"，今年\" + age + \"岁。\");\n    }\n}"
        },
        {
          question: "解释 setName(String name) 中 this.name = name; 的含义。",
          answer: "this.name 表示当前对象的成员变量 name；等号右边的 name 表示方法参数这个局部变量。this.name = name; 的作用是把外部传入的名字赋给当前对象的 name 属性。"
        },
        {
          question: "找出错误：public void setName(String name) { name = name; } 为什么不能修改成员变量？",
          answer: "因为局部变量 name 隐藏了成员变量 name，等号左右两边都指向参数 name，相当于参数自己赋值给自己。正确写法是 this.name = name;"
        },
        {
          question: "写一个 BankAccount 类，包含 owner 和 balance，balance 不能设置为负数。",
          answer: "public class BankAccount {\n    private String owner;\n    private double balance;\n\n    public void setOwner(String owner) {\n        this.owner = owner;\n    }\n\n    public String getOwner() {\n        return owner;\n    }\n\n    public void setBalance(double balance) {\n        if (balance >= 0) {\n            this.balance = balance;\n        } else {\n            System.out.println(\"余额不能为负数！\");\n        }\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}"
        },
        {
          question: "说明成员变量和局部变量的两个核心区别。",
          answer: "第一，声明位置不同：成员变量在类体中、方法外，局部变量在方法或代码块内。第二，默认值不同：成员变量有默认值，局部变量没有默认值，使用前必须手动初始化。"
        }
      ],
      conclusion: [
        "本节课的核心是理解类的标准结构：属性在上、方法在下，方法部分按构造方法、访问器、普通方法的顺序组织。",
        "学习面向对象时要特别注意成员变量和局部变量的区别：成员变量有默认值，局部变量必须初始化。",
        "当成员变量和局部变量同名时，局部变量会隐藏成员变量，需要使用 this 来区分。",
        "访问器 get/set 是封装的重要基础，不要直接暴露属性，而要通过方法安全地访问和修改。",
        "这些概念会在后续的继承、多态、封装中反复使用，现在把类结构、this 和访问器练熟，后面学习会更顺畅。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "类定义",
        "属性",
        "方法",
        "成员变量",
        "局部变量",
        "访问器",
        "getset",
        "this关键字",
        "构造方法",
        "参数传递"
      ],
      cardSummary: "本节课首先明确了类的定义：类是用来描述一类事物共有属性和功能的模板。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-method-overload-constructor",
      title: "方法分类、构造方法与重载详解",
      chapter: "Java 类与对象",
      date: "2025-09-18",
      tags: [
        "实例方法",
        "类方法",
        "static",
        "构造方法",
        "缺省构造",
        "重载",
        "值传递",
        "址传递"
      ],
      summary: [
        "本节课首先明确了方法由方法头（header）和方法体（body）两部分构成，返回值类型由 return 的值的类型决定。",
        "课堂中重点讲解了实例方法与类方法的区别：无 static 的是实例方法，由对象调用；有 static 的是类方法，由类名调用。",
        "老师通过“同一个模特换不同衣服走 T 台”的类比帮助理解构造方法重载：方法名相同，但参数列表不同。",
        "本节课还讲解了缺省构造方法：即使程序员不写，系统也会自动生成一个无参构造方法来实例化对象。",
        "最后通过“子晴和高子晴”的类比，区分了值传递（传副本，互不影响）和址传递（传地址，一处变处处变）。"
      ],
      keyPoints: [
        {
          title: "方法由方法头和方法体组成",
          content: "方法头用于说明方法的访问权限、是否 static、返回值类型、方法名和参数列表；方法体用大括号包裹，写具体执行的语句。返回值类型要和 return 后面的值匹配，void 表示没有返回值。",
          javaCompare: "方法头像“菜单上的菜名和规则”，方法体像“真正做菜的步骤”。",
          id: "kp-0-x",
          short: "方法头用于说明方法的访问权限、是否 static、返回值类型、方法名和参数列表；方法体用大括号包裹，写具体执行的语句。返回值类型要和 return 后面的值匹配……",
          mistake: ""
        },
        {
          title: "实例方法",
          content: "实例方法是不带 static 的方法，必须先 new 出对象，再通过对象名调用。它适合描述某一个具体对象能做的事情，例如某个学生介绍自己、某个账户显示余额。",
          javaCompare: "无 static → 属于对象 → 对象名.方法名() 调用。",
          id: "kp-1-x",
          short: "实例方法是不带 static 的方法，必须先 new 出对象，再通过对象名调用。它适合描述某一个具体对象能做的事情，例如某个学生介绍自己、某个账户显示余额。……",
          mistake: ""
        },
        {
          title: "类方法",
          content: "类方法使用 static 修饰，属于类本身，可以直接通过类名调用。类方法在对象生成之前就已经存在，所以不能直接访问实例变量，也不能在其中使用 this。",
          javaCompare: "有 static → 属于类 → 类名.方法名() 调用。",
          id: "kp-2-x",
          short: "类方法使用 static 修饰，属于类本身，可以直接通过类名调用。类方法在对象生成之前就已经存在，所以不能直接访问实例变量，也不能在其中使用 this。……",
          mistake: ""
        },
        {
          title: "构造方法的三个特点",
          content: "构造方法是创建对象时自动调用的特殊方法。它的名字必须和类名完全相同；没有返回值类型，连 void 都不写；通常用于给对象的属性设置初始值。",
          javaCompare: "new Person() 中的 Person() 就是在调用构造方法。",
          id: "kp-3-x",
          short: "构造方法是创建对象时自动调用的特殊方法。它的名字必须和类名完全相同；没有返回值类型，连 void 都不写；通常用于给对象的属性设置初始值。……",
          mistake: ""
        },
        {
          title: "缺省构造方法",
          content: "如果一个类中没有手动写任何构造方法，Java 会自动提供一个无参构造方法，方法体为空，保证 new 类名() 可以执行。一旦自己写了构造方法，系统就不再自动补无参构造。",
          javaCompare: "不写构造时，Java 自动给一个空的 public 类名(){}。",
          id: "kp-4-x",
          short: "如果一个类中没有手动写任何构造方法，Java 会自动提供一个无参构造方法，方法体为空，保证 new 类名() 可以执行。一旦自己写了构造方法，系统就不再自动补无……",
          mistake: ""
        },
        {
          title: "方法重载（Overload）",
          content: "重载发生在同一个类中，允许多个方法同名，但参数列表必须不同。课堂总结为“一同三不同”：方法名相同，参数个数、参数类型或参数顺序不同。仅修改返回值类型不构成重载。",
          javaCompare: "同一个模特不变，衣服变化；方法名不变，参数变化。",
          id: "kp-5-overload",
          short: "重载发生在同一个类中，允许多个方法同名，但参数列表必须不同。课堂总结为“一同三不同”：方法名相同，参数个数、参数类型或参数顺序不同。仅修改返回值类型不构成重载。……",
          mistake: ""
        },
        {
          title: "值传递与址传递",
          content: "基本类型参数传递的是值的副本，方法里改副本不影响外部原值；数组、对象等引用类型传递的是地址，多个引用指向同一块内存时，方法内修改会影响外部数据。",
          javaCompare: "值传递像复印件，址传递像共享同一份原件。",
          id: "kp-6-x",
          short: "基本类型参数传递的是值的副本，方法里改副本不影响外部原值；数组、对象等引用类型传递的是地址，多个引用指向同一块内存时，方法内修改会影响外部数据。……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "构造方法重载",
          code: "public class Person {\n    String name;\n    int age;\n\n    // 构造方法1：无参（缺省）\n    public Person() {\n        name = \"未命名\";\n        age = 0;\n    }\n\n    // 构造方法2：一个参数（重载）\n    public Person(String name) {\n        this.name = name;\n        this.age = 0;\n    }\n\n    // 构造方法3：两个参数（重载）\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    public void show() {\n        System.out.println(\"姓名：\" + name + \"，年龄：\" + age);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Person p1 = new Person();               // 调用构造方法1\n        Person p2 = new Person(\"Tom\");          // 调用构造方法2\n        Person p3 = new Person(\"Alice\", 20);    // 调用构造方法3\n\n        p1.show();  // 姓名：未命名，年龄：0\n        p2.show();  // 姓名：Tom，年龄：0\n        p3.show();  // 姓名：Alice，年龄：20\n    }\n}",
          explanation: "同一个 Person 类中写了三个 Person 构造方法，方法名相同，但参数列表不同，所以构成重载。new Person()、new Person(\"Tom\")、new Person(\"Alice\", 20) 会根据参数自动匹配对应构造方法。"
        },
        {
          title: "实例方法与类方法的区别",
          code: "public class Counter {\n    int instanceCount = 0;        // 实例变量\n    static int classCount = 0;    // 类变量（static）\n\n    // 实例方法\n    public void addInstance() {\n        instanceCount++;\n    }\n\n    // 类方法\n    public static void addClass() {\n        classCount++;\n        // instanceCount++;  // 错误！类方法不能直接访问实例变量\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Counter.addClass();                     // 类名调用类方法\n        System.out.println(Counter.classCount); // 1\n\n        Counter c = new Counter();\n        c.addInstance();                        // 对象调用实例方法\n        System.out.println(c.instanceCount);    // 1\n    }\n}",
          explanation: "addClass() 有 static，属于类，直接用 Counter.addClass() 调用；addInstance() 没有 static，必须 new Counter() 后通过对象调用。static 方法中不能直接访问非 static 的 instanceCount。"
        },
        {
          title: "值传递与址传递对比",
          code: "public class PassDemo {\n    // 值传递——基本类型\n    public static void changeValue(int x) {\n        x = 100;   // 只改了副本\n    }\n\n    // 址传递——数组（引用类型）\n    public static void changeArray(int[] arr) {\n        arr[0] = 100;  // 改了原数组！\n    }\n\n    public static void main(String[] args) {\n        // 值传递：原值不变\n        int a = 10;\n        changeValue(a);\n        System.out.println(\"值传递后 a = \" + a);   // 10（没变）\n\n        // 址传递：原数组被修改\n        int[] arr = {10, 20, 30};\n        changeArray(arr);\n        System.out.println(\"址传递后 arr[0] = \" + arr[0]);  // 100（变了！）\n    }\n}",
          explanation: "int 是基本类型，传入方法的是副本，changeValue 改不到外面的 a；数组是引用类型，changeArray 拿到的是数组地址，修改 arr[0] 会影响 main 方法中的原数组。"
        },
        {
          title: "只改返回值类型不是重载",
          code: "public class OverloadErrorDemo {\n    public void test() {\n        System.out.println(\"无返回值方法\");\n    }\n\n    // 下面这种写法是错误的：参数列表完全一样，只改返回值类型，不算重载\n    // public int test() {\n    //     return 1;\n    // }\n\n    // 正确重载：参数列表不同\n    public int test(int n) {\n        return n + 1;\n    }\n}",
          explanation: "重载判断看方法名和参数列表，不看返回值类型。两个 test() 如果参数完全一样，仅返回值不同，Java 无法区分调用哪个方法。"
        }
      ],
      quiz: [
        {
          question: "以下哪个是构造方法的正确声明？",
          options: [
            "public void Person() { }",
            "public Person() { }",
            "public static Person() { }",
            "public int Person() { }"
          ],
          answer: "public Person() { }",
          explanation: "构造方法没有返回值类型，连 void 都不能写，且名称要与类名完全一致。"
        },
        {
          question: "方法重载的“一同三不同”中，“三不同”指的是？",
          options: [
            "返回值不同、方法名不同、参数不同",
            "参数个数不同、参数类型不同、参数顺序不同",
            "修饰符不同、返回值不同、方法体不同",
            "类不同、包不同、方法名不同"
          ],
          answer: "参数个数不同、参数类型不同、参数顺序不同",
          explanation: "重载要求同一类中方法名相同，但参数列表不同；不同可以体现在个数、类型或顺序上。"
        },
        {
          question: "以下关于 static 方法的说法正确的是？",
          options: [
            "static 方法必须由对象调用",
            "static 方法可以直接访问实例变量",
            "static 方法属于类，由类名直接调用",
            "static 方法中可以使用 this"
          ],
          answer: "static 方法属于类，由类名直接调用",
          explanation: "static 方法属于类本身，类加载后就存在，通常使用 类名.方法名() 调用，不能直接使用 this 或访问实例变量。"
        },
        {
          question: "值传递和址传递的区别是？",
          options: [
            "值传递传地址，址传递传值",
            "值传递传副本（互不影响），址传递传地址（共享修改）",
            "两者没有区别",
            "值传递只用于对象，址传递只用于基本类型"
          ],
          answer: "值传递传副本（互不影响），址传递传地址（共享修改）",
          explanation: "基本类型传值的副本，引用类型传地址。数组或对象在方法内被修改时，外部通常也能看到变化。"
        },
        {
          question: "以下代码的输出是什么？int x = 5; changeValue(x); System.out.println(x); 其中 changeValue 方法为 void changeValue(int n) { n = 100; }",
          options: [
            "5",
            "100",
            "编译错误",
            "null"
          ],
          answer: "5",
          explanation: "int 是基本类型，传入方法的是 x 的副本，方法内把 n 改成 100 不会影响外面的 x。"
        }
      ],
      dragMatch: [
        {
          left: "实例方法",
          right: "无 static 修饰，必须由对象来调用"
        },
        {
          left: "类方法",
          right: "有 static 修饰，直接用类名调用"
        },
        {
          left: "构造方法",
          right: "与类同名、无返回值、创建对象时自动调用"
        },
        {
          left: "缺省构造方法",
          right: "程序员不写时系统自动生成的无参构造方法"
        },
        {
          left: "重载（Overload）",
          right: "同一类中方法名相同、参数列表不同（一同三不同）"
        },
        {
          left: "值传递",
          right: "基本类型参数传递，传的是副本，互不影响"
        },
        {
          left: "址传递",
          right: "引用类型参数传递，传的是地址，一处变处处变"
        },
        {
          left: "形参",
          right: "方法定义时声明的占位变量"
        },
        {
          left: "实参",
          right: "方法调用时传入的具体数值"
        },
        {
          left: "static",
          right: "关键字，修饰的成员属于类而非对象"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "程序开始加载类，static 类方法和 static 类变量先属于类本身。",
          "如果调用类方法，可以直接写 类名.方法名()，不需要先创建对象。",
          "如果要调用实例方法，必须先使用 new 类名(...) 创建对象。",
          "执行 new 时，Java 根据括号中的实参个数、类型和顺序匹配对应构造方法。",
          "如果类中没有任何构造方法，Java 会自动提供一个无参缺省构造方法。",
          "匹配到构造方法后，构造方法自动执行，并初始化对象属性。",
          "对象创建完成后，可以通过 对象名.实例方法() 调用实例方法。",
          "调用方法时，实参传给形参；基本类型传副本，引用类型传地址。",
          "如果引用类型在方法内部被修改，外部对象或数组可能同步变化，即“一处变，处处变”。"
        ]
      },
      exercises: [
        {
          question: "写一个 Book 类，包含 title 和 price 两个属性，并提供无参构造、一个参数构造、两个参数构造三个重载构造方法。",
          answer: "参考思路：定义 public class Book，在类中写 String title; double price;。分别写 public Book()、public Book(String title)、public Book(String title, double price)，在构造方法中用 this.title 和 this.price 给成员变量赋值。"
        },
        {
          question: "写一个 Tool 类，包含一个 static 方法 add(int a, int b)，在 main 方法中不创建对象，直接调用它并输出结果。",
          answer: "参考答案：public static int add(int a, int b) { return a + b; } 调用时写 Tool.add(1, 2);。static 方法属于类，可以用类名直接调用。"
        },
        {
          question: "判断下面方法是否构成重载：public void test(int a) 与 public int test(int b)。说明原因。",
          answer: "不构成重载。两个方法的参数列表都是一个 int，只有返回值类型不同；Java 判断重载不看返回值，只看方法名和参数列表。"
        },
        {
          question: "写一个方法 changeArray(int[] arr)，把 arr[0] 改成 999，并在 main 中验证方法外数组是否变化。",
          answer: "参考思路：int[] nums = {1,2,3}; 调用 changeArray(nums); 后输出 nums[0]。结果会变成 999，因为数组是引用类型，传递的是地址。"
        }
      ],
      conclusion: [
        "本节课的核心是理解方法的两大分类（实例方法/类方法）、构造方法的特性与重载机制、以及参数传递的两种方式（值/址）。",
        "学习方法时要特别注意 static 的用法：实例方法和实例变量属于对象，类方法和类变量属于类本身，所有对象共享。",
        "重载是后续学习多态的基础，“一同三不同”（名称相同，个数/类型/顺序不同）是区分重载和其他概念的关键。",
        "值传递和址传递的区别会影响方法内部修改是否影响外部数据：基本类型安全，引用类型可能“一处变，处处变”。",
        "课后练习时要多写构造方法和方法调用代码，重点检查构造方法是否误写了 void，重载是否真的改变了参数列表。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "实例方法",
        "类方法",
        "static",
        "构造方法",
        "缺省构造",
        "重载",
        "值传递",
        "址传递"
      ],
      cardSummary: "本节课首先明确了方法由方法头（header）和方法体（body）两部分构成，返回值类型由 return 的值的类型决定。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-oop-review-access",
      title: "类与对象综合复习——变量、方法与访问权限",
      chapter: "Java 类与对象",
      date: "2025-10-09",
      tags: [
        "类定义",
        "成员变量",
        "局部变量",
        "构造方法",
        "实例成员",
        "类成员",
        "static",
        "访问权限",
        "public",
        "private",
        "protected",
        "包"
      ],
      summary: [
        "本节课首先回顾了类的完整结构：关键字 class、类体（属性 + 方法）、方法的细分（构造方法→访问器→常用方法→特殊方法）。",
        "课堂中重点复习了成员变量与局部变量的区别：成员变量有默认值，局部变量使用前必须初始化，同名时局部变量隐藏全局变量。",
        "老师通过“全班总人数”的类比，帮助理解实例成员（属于对象）和类成员（static 修饰，属于类，所有对象共享）的区别。",
        "本节课还复习了构造方法重载以及对象引用：可以将一个类的对象作为另一个类的属性，实现任务分发和复用。",
        "最后通过 public、protected、default、private 四种访问权限修饰符，引入封装的核心：可见即可访问，通过限制可见性控制访问权限。"
      ],
      keyPoints: [
        {
          title: "类的完整结构",
          content: "一个 Java 类由类声明和类体组成。类体中先写属性（成员变量），再写方法。方法可分为构造方法、访问器（get/set）、常用方法和特殊方法。这样的结构便于阅读和维护。",
          javaCompare: "类像衣柜，属性和方法要分类摆放，后续查找和复习更清晰。",
          id: "kp-0-x",
          short: "一个 Java 类由类声明和类体组成。类体中先写属性（成员变量），再写方法。方法可分为构造方法、访问器（get/set）、常用方法和特殊方法。这样的结构便于阅读……",
          mistake: ""
        },
        {
          title: "成员变量与局部变量",
          content: "成员变量声明在类体中、方法外，在整个类中可见，并有默认值；局部变量声明在方法体或代码块中，只在局部范围内可见，使用前必须手动初始化。",
          javaCompare: "成员变量是“自带属性”，局部变量是“临时使用的工具”。",
          id: "kp-1-x",
          short: "成员变量声明在类体中、方法外，在整个类中可见，并有默认值；局部变量声明在方法体或代码块中，只在局部范围内可见，使用前必须手动初始化。……",
          mistake: ""
        },
        {
          title: "实例成员与类成员",
          content: "没有 static 的变量和方法属于对象，叫实例成员；有 static 修饰的变量和方法属于类，叫类成员。类成员可以通过类名调用，所有对象共享同一份 static 变量。",
          javaCompare: "全班总人数属于班级整体，不属于某一个学生。",
          id: "kp-2-x",
          short: "没有 static 的变量和方法属于对象，叫实例成员；有 static 修饰的变量和方法属于类，叫类成员。类成员可以通过类名调用，所有对象共享同一份 stati……",
          mistake: ""
        },
        {
          title: "构造方法与重载",
          content: "构造方法与类同名、没有返回值类型、new 对象时自动调用。多个构造方法可以重载，参数列表决定创建出的对象初始特征。",
          javaCompare: "new People() 和 new People(\"Tom\", 20) 创建的是同一类的不同特征对象。",
          id: "kp-3-x",
          short: "构造方法与类同名、没有返回值类型、new 对象时自动调用。多个构造方法可以重载，参数列表决定创建出的对象初始特征。……",
          mistake: ""
        },
        {
          title: "对象引用作为属性",
          content: "一个类可以把另一个类的对象作为自己的属性，从而复用该对象已有的方法。课堂用“把会计算的人作为属性，让他帮我完成任务”的类比说明这种设计。",
          javaCompare: "TaskManager 持有 Calculator 对象，自己不用会所有计算，也能完成任务。",
          id: "kp-4-x",
          short: "一个类可以把另一个类的对象作为自己的属性，从而复用该对象已有的方法。课堂用“把会计算的人作为属性，让他帮我完成任务”的类比说明这种设计。……",
          mistake: ""
        },
        {
          title: "值传递与址传递",
          content: "基本类型参数传递的是值副本，方法内部修改不影响外部原值；数组、对象等引用类型传递的是地址，方法内部可能直接修改原始数据。",
          javaCompare: "基本类型像复印件，引用类型像共享定位。",
          id: "kp-5-x",
          short: "基本类型参数传递的是值副本，方法内部修改不影响外部原值；数组、对象等引用类型传递的是地址，方法内部可能直接修改原始数据。……",
          mistake: ""
        },
        {
          title: "四种访问权限修饰符",
          content: "public 表示公有，任何地方能访问；private 表示私有，只有本类能访问；protected 表示受保护，同包和子类可访问；default 是不写修饰符，通常同包可访问。",
          javaCompare: "可见即可访问，封装就是通过限制可见性保护数据。",
          id: "kp-6-x",
          short: "public 表示公有，任何地方能访问；private 表示私有，只有本类能访问；protected 表示受保护，同包和子类可访问；default 是不写修饰符……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "实例成员与类成员的区别",
          code: "public class Classroom {\n    String studentName;           // 实例变量——每个学生有自己的名字\n    static int totalCount = 0;    // 类变量——全班共享的总人数\n\n    public Classroom(String name) {\n        this.studentName = name;\n        totalCount++;             // 每创建一个学生，总人数 +1\n    }\n\n    public void showInstance() {\n        System.out.println(\"我叫\" + studentName);       // 实例方法\n    }\n\n    public static void showTotal() {\n        System.out.println(\"全班共\" + totalCount + \"人\"); // 类方法\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Classroom.showTotal();  // 全班共0人\n\n        Classroom s1 = new Classroom(\"张三\");\n        Classroom s2 = new Classroom(\"李四\");\n        Classroom s3 = new Classroom(\"王五\");\n\n        Classroom.showTotal();  // 全班共3人——所有学生共享\n        s1.showInstance();      // 我叫张三——实例独有的\n    }\n}",
          explanation: "studentName 是实例变量，每个对象各有一份；totalCount 是 static 类变量，所有对象共享。showTotal() 是类方法，可以用 Classroom.showTotal() 调用。"
        },
        {
          title: "对象作为另一个类的属性",
          code: "// 计算器——会做加法\npublic class Calculator {\n    public int add(int a, int b) {\n        return a + b;\n    }\n\n    public int addRange(int start, int end) {\n        int sum = 0;\n        for (int i = start; i <= end; i++) {\n            sum += i;\n        }\n        return sum;\n    }\n}\n\n// 任务管理器——自己不计算，用计算器来完成\npublic class TaskManager {\n    private Calculator calc = new Calculator();  // 对象作为属性！\n\n    public void doTask() {\n        int r1 = calc.add(10, 20);       // 让计算器算 10+20\n        int r2 = calc.addRange(1, 30);   // 让计算器算 1~30 的和\n        System.out.println(\"10+20 = \" + r1);\n        System.out.println(\"1~30 之和 = \" + r2);\n    }\n}",
          explanation: "TaskManager 把 Calculator 对象作为自己的属性 calc。TaskManager 不需要自己写加法细节，可以把计算任务交给 calc 完成，这体现了对象引用和功能复用。"
        },
        {
          title: "值传递 vs 址传递",
          code: "public class PassDemo {\n    // 值传递——改副本\n    public static void changeInt(int n) {\n        n = 999;\n    }\n\n    // 址传递——改原始数据\n    public static void changeArray(int[] arr) {\n        arr[0] = 999;\n    }\n\n    public static void main(String[] args) {\n        int a = 10;\n        changeInt(a);\n        System.out.println(a);        // 10（值传递，没变）\n\n        int[] nums = {10, 20};\n        changeArray(nums);\n        System.out.println(nums[0]);  // 999（址传递，变了！）\n    }\n}",
          explanation: "changeInt 修改的是 int 参数的副本，所以 a 不变；changeArray 接收的是数组地址，修改 arr[0] 会影响 main 中的 nums。"
        },
        {
          title: "访问权限修饰符示例",
          code: "public class Account {\n    public String owner;       // 公有：外部可直接访问\n    private double balance;    // 私有：只能本类访问\n    protected String level;    // 受保护：同包或子类可访问\n    String bankName;           // default：不写修饰符，同包可访问\n\n    public void setBalance(double balance) {\n        if (balance >= 0) {\n            this.balance = balance;\n        }\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}",
          explanation: "访问权限用于控制成员的可见性。实际开发中常把重要属性设为 private，再提供 public 的 set/get 方法间接访问，这就是封装。"
        }
      ],
      quiz: [
        {
          question: "static 修饰的变量属于谁？",
          options: [
            "属于对象",
            "属于类",
            "属于方法",
            "不属于任何东西"
          ],
          answer: "属于类",
          explanation: "static 修饰的变量是类变量，属于类本身，所有对象共享同一份。"
        },
        {
          question: "以下哪个是构造方法的正确特征？",
          options: [
            "有返回值类型",
            "名称与类名相同",
            "必须手动调用",
            "只能有一个"
          ],
          answer: "名称与类名相同",
          explanation: "构造方法与类名完全相同，没有返回值类型，在 new 对象时自动调用，并且可以重载。"
        },
        {
          question: "关于局部变量，以下说法正确的是？",
          options: [
            "有默认值",
            "在整个类体可见",
            "使用前必须初始化",
            "与成员变量没有区别"
          ],
          answer: "使用前必须初始化",
          explanation: "局部变量没有默认值，必须先赋值再使用；成员变量才有默认值。"
        },
        {
          question: "以下哪种类型传递的是地址而不是值的副本？",
          options: [
            "int",
            "double",
            "boolean",
            "数组"
          ],
          answer: "数组",
          explanation: "数组是引用类型，传参时传递的是地址；int、double、boolean 是基本类型，传递值副本。"
        },
        {
          question: "private 修饰的成员能被谁直接访问？",
          options: [
            "所有类",
            "同包类",
            "子类",
            "只有本类"
          ],
          answer: "只有本类",
          explanation: "private 是最严格的访问权限，成员只在当前类内部可见。"
        }
      ],
      dragMatch: [
        {
          left: "类（class）",
          right: "Java 程序的基本单位，包含属性和方法"
        },
        {
          left: "成员变量",
          right: "类体中声明的变量，有默认值，整个类体可见"
        },
        {
          left: "局部变量",
          right: "方法体内声明的变量，必须初始化，只在方法内可见"
        },
        {
          left: "实例方法",
          right: "无 static 修饰，由对象调用"
        },
        {
          left: "类方法",
          right: "有 static 修饰，由类名直接调用"
        },
        {
          left: "构造方法",
          right: "与类同名、无返回值、new 时自动调用"
        },
        {
          left: "重载",
          right: "同一类中方法名相同、参数列表不同"
        },
        {
          left: "值传递",
          right: "基本类型传副本，互不影响"
        },
        {
          left: "址传递",
          right: "引用类型传地址，一处变处处变"
        },
        {
          left: "访问权限",
          right: "通过修饰符控制谁能访问（public/protected/default/private）"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "先写类声明：使用 class 关键字和合法类名定义一个类。",
          "进入类体后，先声明属性，也就是成员变量，用来描述对象“有什么”。",
          "再编写构造方法，用于 new 对象时初始化成员变量；如果需要不同初始特征，可以写多个重载构造。",
          "根据属性安全性决定访问权限：重要数据优先 private，不直接暴露给外部。",
          "为 private 属性提供 set/get 访问器，用方法间接控制赋值和取值。",
          "区分成员是否需要 static：属于每个对象的写成实例成员，属于全班/全类共享的写成类成员。",
          "如果一个类需要复用另一个类的能力，可以把另一个类的对象作为自己的属性。",
          "调用方法时检查参数传递：基本类型传副本，数组或对象传地址。",
          "最后检查访问权限：只有可见的成员才能被外部代码访问。"
        ]
      },
      exercises: [
        {
          question: "写一个 Student 类，包含实例变量 name 和 static 变量 totalCount。每创建一个 Student 对象，totalCount 自动加 1。",
          answer: "参考思路：在 Student 中写 String name; static int totalCount = 0;。构造方法 Student(String name) 中写 this.name = name; totalCount++;。用 Student.totalCount 输出总人数。"
        },
        {
          question: "说明成员变量和局部变量的区别，并各写一个代码例子。",
          answer: "成员变量写在类体中、方法外，有默认值，整个类可见；局部变量写在方法体中，没有默认值，使用前必须初始化。例如类中 int age; 是成员变量，方法中 int x = 10; 是局部变量。"
        },
        {
          question: "写一个 Account 类，把 balance 设置为 private，并提供 setBalance 和 getBalance 方法，setBalance 中要求余额不能为负数。",
          answer: "参考答案：private double balance; public void setBalance(double balance) { if (balance >= 0) { this.balance = balance; } } public double getBalance() { return balance; }。"
        },
        {
          question: "判断以下成员应该用实例变量还是 static 类变量：学生姓名、全班总人数、学生年龄、学校名称。",
          answer: "学生姓名和学生年龄属于每个对象，适合实例变量；全班总人数通常所有对象共享，适合 static；学校名称如果全体学生相同，也可设计为 static。"
        },
        {
          question: "写一个 Calculator 类和一个 TaskManager 类，让 TaskManager 持有 Calculator 对象，并调用它完成 1 到 100 的求和。",
          answer: "参考思路：Calculator 中写 addRange(int start, int end) 方法；TaskManager 中写 private Calculator calc = new Calculator();，在 doTask 中调用 calc.addRange(1, 100) 并输出结果。"
        }
      ],
      conclusion: [
        "本节课的核心是全面复习类与对象章节：从类的结构、变量分类、方法分类、构造方法重载、参数传递到访问权限，形成完整知识体系。",
        "学习面向对象时要特别注意 static 的用法，它决定成员属于类还是对象，是理解 Java 内存模型和设计模式的关键。",
        "访问权限 public/protected/default/private 是封装的基础；封装就是通过限制可见性来保护数据。",
        "距离考试约 3 周，建议把所有笔记按目录整理一遍，用老师教的方法“对着目录说笔记”，把知识点串联起来。",
        "复习时要重点练习成员变量与局部变量、实例成员与类成员、值传递与址传递这三组对比，它们是类与对象章节中最容易混淆的内容。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "类定义",
        "成员变量",
        "局部变量",
        "构造方法",
        "实例成员",
        "类成员",
        "static",
        "访问权限",
        "public",
        "private",
        "protected",
        "包"
      ],
      cardSummary: "本节课首先回顾了类的完整结构：关键字 class、类体（属性 + 方法）、方法的细分（构造方法→访问器→常用方法→特殊方法）。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-inheritance-intro",
      title: "访问权限深入与继承入门",
      chapter: "Java 类与对象 → 继承",
      date: "2025-10-09",
      tags: [
        "访问权限",
        "public",
        "protected",
        "default",
        "private",
        "继承",
        "extends",
        "父类",
        "子类",
        "单继承",
        "重写",
        "Override",
        "super",
        "树形结构"
      ],
      summary: [
        "课堂前半段深入复习了四种访问权限修饰符 public、protected、default、private 在四种访问场景下的可见性：同一包同一类、同一包不同类、不同包子类、不同包非子类。",
        "老师通过代码演示验证访问权限矩阵，并用银行卡、家族财产、寝室水壶、室友物品等生活类比帮助理解不同修饰符的实际含义。",
        "本节课正式引入继承概念：继承是一种由已有类创建新类的机制，子类可以继承父类的非私有属性和方法，并扩展新的状态和行为。",
        "老师用家族族谱和倒置二叉树讲解继承的树形结构：祖先节点、父亲节点、兄弟节点、子孙节点逐层向下展开。",
        "本节课强调 Java 是单继承，一个子类只有一个直接父类，这样可以避免多个父类存在同名成员时产生二义性。",
        "最后引入多态的第一种形式——重写 Override：子类在不同类体中写出与父类方法头相同、方法体不同的方法，从而改变继承来的行为。"
      ],
      keyPoints: [
        {
          title: "四种访问权限的完整访问矩阵",
          content: "Java 中 public、protected、default、private 用来控制成员变量和方法在不同位置是否可见。同一包同一类中四者都可访问；同一包不同类中 private 不可访问；不同包子类中 public 和 protected 可访问；不同包非子类中只有 public 可访问。核心原则是“可见即可访问”。",
          javaCompare: "public 范围最大，private 范围最小；protected 比 default 多了“不同包子类可访问”的能力。",
          id: "kp-0-x",
          short: "Java 中 public、protected、default、private 用来控制成员变量和方法在不同位置是否可见。同一包同一类中四者都可访问；同一包不同……",
          mistake: ""
        },
        {
          title: "public、protected、default、private 的生活类比",
          content: "public 像寝室水壶，谁都能用；protected 像家族财产，有血缘关系的成员可以使用；default 像室友物品，只限同一个包这一小范围；private 像自己的银行卡，只属于本类自己。用这些生活场景可以帮助初学者理解抽象的可见性规则。",
          javaCompare: "protected 关注“同包或子类”，default 只关注“同包”，private 只关注“本类”。",
          id: "kp-1-public-protected-default-private",
          short: "public 像寝室水壶，谁都能用；protected 像家族财产，有血缘关系的成员可以使用；default 像室友物品，只限同一个包这一小范围；private……",
          mistake: ""
        },
        {
          title: "继承的基本概念",
          content: "继承是由已有类创建新类的机制。已有类称为父类或超类，新类称为子类。子类继承父类的非私有状态和行为，可以直接复用父类中已经写好的公共代码，同时还能增加自己特有的属性和方法。",
          javaCompare: "不使用继承时，每个类都要重复定义共有内容；使用继承后，共有内容写在父类，子类自动拥有。",
          id: "kp-2-x",
          short: "继承是由已有类创建新类的机制。已有类称为父类或超类，新类称为子类。子类继承父类的非私有状态和行为，可以直接复用父类中已经写好的公共代码，同时还能增加自己特有的属……",
          mistake: ""
        },
        {
          title: "extends 继承语法",
          content: "Java 中使用 extends 关键字表示继承关系，格式是 class 子类名 extends 父类名 { }。extends 的含义是“扩展”，表示子类在父类已有内容的基础上继续扩展新的能力。",
          javaCompare: "extends 用于类继承；implements 用于接口实现，二者不能混用。",
          id: "kp-3-extends",
          short: "Java 中使用 extends 关键字表示继承关系，格式是 class 子类名 extends 父类名 { }。extends 的含义是“扩展”，表示子类在父……",
          mistake: ""
        },
        {
          title: "Java 的单继承原则",
          content: "Java 采用单继承机制，一个子类有且只有一个直接父类。这样设计是为了避免二义性：如果两个父类都有同名成员，子类会无法判断该继承哪一个。Java 如果需要类似多继承的效果，通常通过接口 interface 实现。",
          javaCompare: "C++ 支持多继承，Java 类只支持单继承，但 Java 可以实现多个接口。",
          id: "kp-4-java",
          short: "Java 采用单继承机制，一个子类有且只有一个直接父类。这样设计是为了避免二义性：如果两个父类都有同名成员，子类会无法判断该继承哪一个。Java 如果需要类似多……",
          mistake: ""
        },
        {
          title: "继承的树形结构",
          content: "Java 的类继承关系像一棵倒置的树：祖先节点在上，子孙节点在下。每一个子节点只有一个父节点，但一个父节点可以有多个子节点。最底层没有子类的类称为叶子节点。",
          javaCompare: "树形继承结构体现了“一个父亲，多个孩子”的关系，而不是“多个父亲，一个孩子”。",
          id: "kp-5-x",
          short: "Java 的类继承关系像一棵倒置的树：祖先节点在上，子孙节点在下。每一个子节点只有一个父节点，但一个父节点可以有多个子节点。最底层没有子类的类称为叶子节点。……",
          mistake: ""
        },
        {
          title: "方法重写 Override",
          content: "重写发生在父子类之间。子类定义一个与父类方法头完全相同的方法，但方法体不同，从而替换或隐藏父类原来的行为。重写的三个条件是：发生在不同类体中、方法头相同、方法体不同。",
          javaCompare: "重写 Override 发生在父子类之间；重载 Overload 发生在同一个类中，方法名相同但参数列表不同。",
          id: "kp-6-override",
          short: "重写发生在父子类之间。子类定义一个与父类方法头完全相同的方法，但方法体不同，从而替换或隐藏父类原来的行为。重写的三个条件是：发生在不同类体中、方法头相同、方法体……",
          mistake: ""
        },
        {
          title: "子类对象创建顺序：先父后子",
          content: "创建子类对象时，必须先初始化父类部分，再初始化子类部分。子类构造方法默认会先调用父类的无参构造方法；如果父类只有带参构造方法，子类必须在构造方法第一句使用 super(参数) 指定调用父类构造方法。",
          javaCompare: "this 表示当前对象；super 表示父类部分，用于调用父类构造方法或父类成员。",
          id: "kp-7-x",
          short: "创建子类对象时，必须先初始化父类部分，再初始化子类部分。子类构造方法默认会先调用父类的无参构造方法；如果父类只有带参构造方法，子类必须在构造方法第一句使用 su……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "四种访问权限的完整演示",
          code: "// 文件：com/example/Welcome.java\npackage com.example;\n\npublic class Welcome {\n    public int pub = 1;\n    protected int pro = 2;\n    int def = 3;\n    private int pri = 4;\n\n    public void showInSameClass() {\n        System.out.println(pub);\n        System.out.println(pro);\n        System.out.println(def);\n        System.out.println(pri);\n    }\n}\n\n// 文件：com/example/First.java\npackage com.example;\n\npublic class First {\n    public void accessWelcome() {\n        Welcome w = new Welcome();\n        System.out.println(w.pub);\n        System.out.println(w.pro);\n        System.out.println(w.def);\n        // System.out.println(w.pri); // private 不可见\n    }\n}\n\n// 文件：unit/Tools.java\npackage unit;\nimport com.example.Welcome;\n\npublic class Tools extends Welcome {\n    public void accessFromSubclass() {\n        System.out.println(pub);\n        System.out.println(pro);\n        // System.out.println(def); // default 跨包不可见\n        // System.out.println(pri); // private 不可见\n    }\n}",
          explanation: "这个示例把四种访问权限放到不同包和不同类中验证。同包下除 private 外都可见；不同包子类可以访问 public 和 protected；不同包非子类只能访问 public。"
        },
        {
          title: "继承的基本使用",
          code: "public class People {\n    String name;\n    int age;\n\n    public People() {\n    }\n\n    public People(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    public void speak() {\n        System.out.println(name + \" can speak.\");\n    }\n\n    public void run() {\n        System.out.println(name + \" can run.\");\n    }\n}\n\npublic class Student extends People {\n    // 类体为空，但已经继承了 People 的非私有成员\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        Student s = new Student();\n        s.name = \"Charlie\";\n        s.age = 20;\n        s.speak();\n        s.run();\n    }\n}",
          explanation: "Student 类体中没有重新声明 name、age、speak()、run()，但它通过 extends People 自动拥有这些非私有成员。这体现了继承的代码复用价值。"
        },
        {
          title: "方法重写 Override",
          code: "public class People {\n    String name;\n\n    public People(String name) {\n        this.name = name;\n    }\n\n    public void speak() {\n        System.out.println(name + \" speaks Chinese.\");\n    }\n}\n\npublic class Student extends People {\n    public Student(String name) {\n        super(name);\n    }\n\n    @Override\n    public void speak() {\n        System.out.println(name + \" speaks English!\");\n    }\n\n    public void learnFrench() {\n        System.out.println(name + \" is learning French.\");\n    }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        People p = new People(\"父亲\");\n        p.speak();\n\n        Student s = new Student(\"查理\");\n        s.speak();\n        s.learnFrench();\n    }\n}",
          explanation: "Student 重写了 People 的 speak() 方法，所以 Student 对象调用 speak() 时执行子类版本。@Override 注解可以帮助编译器检查是否真的构成重写。"
        },
        {
          title: "super 调用父类带参构造方法",
          code: "public class Father {\n    String name;\n\n    public Father(String name) {\n        this.name = name;\n        System.out.println(\"父类构造方法被调用\");\n    }\n}\n\npublic class Son extends Father {\n    public Son(String name) {\n        super(name);\n        System.out.println(\"子类构造方法被调用\");\n    }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        Son s = new Son(\"小明\");\n    }\n}",
          explanation: "父类 Father 只有带参构造方法，没有无参构造方法，所以 Son 的构造方法必须在第一句写 super(name)。对象创建顺序是先父类构造，再子类构造。"
        }
      ],
      quiz: [
        {
          question: "以下哪个访问权限修饰符修饰的成员，在“不同包下的子类”中也能访问？",
          options: [
            "private",
            "default",
            "protected",
            "只有 public"
          ],
          answer: "protected",
          explanation: "protected 允许不同包下的子类访问。default 跨包后子类也看不到，private 只在本类可见。"
        },
        {
          question: "以下哪个关键字用于声明一个类继承另一个类？",
          options: [
            "implements",
            "extends",
            "super",
            "import"
          ],
          answer: "extends",
          explanation: "extends 是继承关键字，格式为 class 子类名 extends 父类名。implements 用于实现接口。"
        },
        {
          question: "Java 为什么采用单继承？",
          options: [
            "为了代码更简洁",
            "为了运行速度更快",
            "为了避免二义性",
            "因为 JDK 限制"
          ],
          answer: "为了避免二义性",
          explanation: "如果一个子类同时继承多个父类，而多个父类有同名成员，就会出现无法判断来源的二义性问题。"
        },
        {
          question: "关于方法重写 Override，以下说法正确的是？",
          options: [
            "重写可以发生在同一个类中",
            "重写时方法头可以不同",
            "重写时方法头相同、方法体不同",
            "重写必须使用 @Override 注解"
          ],
          answer: "重写时方法头相同、方法体不同",
          explanation: "重写发生在父子类之间，要求方法头完全相同，子类提供不同的方法体。@Override 推荐使用，但不是语法必须。"
        },
        {
          question: "子类对象创建时，构造方法的调用顺序是？",
          options: [
            "先子类后父类",
            "先父类后子类",
            "只调用子类",
            "随机调用"
          ],
          answer: "先父类后子类",
          explanation: "创建子类对象时，必须先初始化父类部分，再初始化子类自己的部分。"
        }
      ],
      dragMatch: [
        {
          left: "public",
          right: "公有的，全局可见，所有包都能访问"
        },
        {
          left: "protected",
          right: "受保护的，同包和不同包子类可访问"
        },
        {
          left: "default（不写）",
          right: "缺省权限，仅同一包下可访问"
        },
        {
          left: "private",
          right: "私有的，仅本类自身可访问"
        },
        {
          left: "extends",
          right: "Java 继承关键字，用于声明父子类关系"
        },
        {
          left: "父类 Super Class",
          right: "被继承的类，提供共有属性和方法"
        },
        {
          left: "子类 Sub Class",
          right: "继承父类的类，可以增加新的属性和方法"
        },
        {
          left: "单继承",
          right: "Java 中一个子类有且只有一个直接父类"
        },
        {
          left: "二义性",
          right: "多继承中无法判断成员来源的问题"
        },
        {
          left: "重写 Override",
          right: "子类定义与父类方法头相同、方法体不同的方法"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "执行 new Student(\"小明\")，JVM 准备创建 Student 子类对象。",
          "JVM 发现 Student 继承自 People，因此先进入父类构造方法，初始化父类部分。",
          "父类构造方法执行完毕后，父类中的属性和方法对应的对象部分已经准备完成。",
          "JVM 回到 Student 的构造方法，继续执行子类自己的初始化逻辑。",
          "子类构造方法执行完毕后，Student 对象创建完成。",
          "最终对象同时包含父类部分和子类部分，可以使用继承来的非私有成员，也可以使用子类新增成员。"
        ]
      },
      exercises: [
        {
          question: "写出四种访问权限修饰符在“同一包不同类”场景下的可见性。",
          answer: "public ✅、protected ✅、default ✅、private ❌。同一包下，除了 private 只属于本类以外，其他三个修饰符都可以在不同类中访问。"
        },
        {
          question: "定义一个 Animal 父类，包含属性 name 和方法 eat()；再定义 Cat 子类继承 Animal，并重写 eat() 方法输出“猫吃鱼”。",
          answer: "class Animal {\n    String name;\n    void eat() {\n        System.out.println(\"动物吃东西\");\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    void eat() {\n        System.out.println(\"猫吃鱼\");\n    }\n}"
        },
        {
          question: "解释上转型对象的含义。如果 Animal a = new Cat(); a.eat(); 会输出什么？为什么？",
          answer: "会输出 Cat 类重写后的 eat() 内容，例如“猫吃鱼”。虽然变量 a 的声明类型是 Animal，但实际引用的是 Cat 对象，调用被重写的方法时会根据实际对象类型执行子类版本。"
        },
        {
          question: "以下代码为什么会编译错误？class Father { Father(int age) { } } class Son extends Father { Son(String name) { } }",
          answer: "因为 Father 只有带参构造方法，没有无参构造方法。Son 构造方法如果不写 super(age)，系统会默认调用 super()，但父类没有 Father()，所以编译错误。修正方式是在 Son 构造方法第一句写 super(age)。"
        },
        {
          question: "简述重写 Override 和重载 Overload 的区别。",
          answer: "重写发生在父子类之间，方法头完全相同、方法体不同，用来改变继承来的行为；重载发生在同一个类中，方法名相同但参数列表不同，用来提供同一功能的不同参数版本。"
        }
      ],
      conclusion: [
        "本节课的核心是两条线：一条是访问权限的深入复习，另一条是继承机制的正式引入。",
        "访问权限是封装的基础，通过限制访问范围来保护数据。可以用口诀记忆：public 水壶随便用，protected 家族内部用，default 室友一起用，private 自己单独用。",
        "继承的本质是复用：父类写好共有内容，子类直接继承使用，不需要重复编写。",
        "继承不是全盘照抄，private 成员不能被子类直接访问，子类还可以通过重写 Override 改变不满意的父类方法。",
        "Java 是单继承，一个子类只有一个直接父类，这样可以避免多个父类存在同名成员时造成二义性。",
        "子类对象创建时遵循先父后子：如果父类只有带参构造方法，子类必须在构造方法第一句使用 super(参数)。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "访问权限",
        "public",
        "protected",
        "default",
        "private",
        "继承",
        "extends",
        "父类",
        "子类",
        "单继承",
        "重写",
        "Override",
        "super",
        "树形结构"
      ],
      cardSummary: "课堂前半段深入复习了四种访问权限修饰符 public、protected、default、private 在四种访问场景下的可见性：同一包同一类、同一包不同类、不同包子类、不同包非子类。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-inheritance-syntax-uml",
      title: "Java 类的继承深入及 UML 类图入门",
      chapter: "Java 类与对象 → 继承",
      date: "2025-10-16",
      tags: [
        "继承",
        "extends",
        "父类",
        "子类",
        "访问器",
        "get/set",
        "构造方法调用链",
        "UML类图",
        "树形结构",
        "private继承"
      ],
      summary: [
        "课堂首先通过代码演示巩固继承的核心结论：子类继承父类的非私有属性和方法，不写额外代码也能使用父类的 name、age、speak() 等成员。",
        "本节课重点演示了“私有属性通过访问器间接访问”的模式：子类不能直接访问父类 private 成员，但可以通过父类 public get/set 方法搭建桥梁。",
        "老师通过代码报错引出关键规则：子类构造方法必须先调用父类的某个构造方法；如果父类只有带参构造方法，子类必须用 super(参数) 明确指定。",
        "课堂再次强调 Java 的树形继承结构：每个子节点有且只有一个父节点，不可能出现两个直接父类，否则会产生二义性。",
        "本节课还介绍了 UML 类图的基本结构：类名、属性、方法三层矩形框，以及 UML 在软件需求分析和沟通中的作用。",
        "最后结合考试与实验安排，提醒学生从本周开始整理笔记、完成作业和实验报告，特别关注重写与重载、全局变量与局部变量等区别题。"
      ],
      keyPoints: [
        {
          title: "子类继承父类成员的具体规则",
          content: "在同一个包下，子类继承父类中除 private 以外的所有成员变量和方法。继承后，子类可以像使用自己声明的成员一样使用父类的非私有成员，例如 name、age、speak()、run() 等。",
          javaCompare: "public、protected、default 在同包下可被子类直接使用；private 只属于父类本身，子类不能直接访问。",
          id: "kp-0-x",
          short: "在同一个包下，子类继承父类中除 private 以外的所有成员变量和方法。继承后，子类可以像使用自己声明的成员一样使用父类的非私有成员，例如 name、age、……",
          mistake: ""
        },
        {
          title: "private 成员与访问器桥梁",
          content: "父类的 private 属性不能被子类直接访问，但父类可以提供 public 的 set/get 访问器，子类通过这些公开方法间接操作私有属性。这既保持了封装安全，又让子类能在规则允许的范围内使用父类数据。",
          javaCompare: "直接写 color 会报错；调用 getColor() 或 setColor() 是正确做法。",
          id: "kp-1-private",
          short: "父类的 private 属性不能被子类直接访问，但父类可以提供 public 的 set/get 访问器，子类通过这些公开方法间接操作私有属性。这既保持了封装安……",
          mistake: ""
        },
        {
          title: "子类构造方法必须先调用父类构造方法",
          content: "创建子类对象时，父类部分必须先初始化。如果子类构造方法中没有写 super(...)，系统默认插入 super()。如果父类没有无参构造方法，子类必须在第一句显式写 super(参数)。",
          javaCompare: "父类有无参构造时子类可自动调用；父类只有带参构造时子类必须显式 super(参数)。",
          id: "kp-2-x",
          short: "创建子类对象时，父类部分必须先初始化。如果子类构造方法中没有写 super(...)，系统默认插入 super()。如果父类没有无参构造方法，子类必须在第一句显……",
          mistake: ""
        },
        {
          title: "super 关键字",
          content: "super 代表父类对象的引用。在子类构造方法中，super(参数) 用来调用父类构造方法；在普通方法中，super.成员名 可以用来访问父类中可见的成员。super(参数) 必须写在子类构造方法第一句。",
          javaCompare: "this 指当前对象，super 指当前对象中的父类部分。",
          id: "kp-3-super",
          short: "super 代表父类对象的引用。在子类构造方法中，super(参数) 用来调用父类构造方法；在普通方法中，super.成员名 可以用来访问父类中可见的成员。su……",
          mistake: ""
        },
        {
          title: "继承的树形结构",
          content: "Java 继承体系可以看作一棵倒置的树，Object 是最终祖先节点。父类在上，子类在下；一个父类可以有多个子类，但一个子类只有一个直接父类。没有子类的类可以看作叶子节点。",
          javaCompare: "Java 类继承是单根、单继承结构；接口可以补充多继承需求。",
          id: "kp-4-x",
          short: "Java 继承体系可以看作一棵倒置的树，Object 是最终祖先节点。父类在上，子类在下；一个父类可以有多个子类，但一个子类只有一个直接父类。没有子类的类可以看……",
          mistake: ""
        },
        {
          title: "成员访问权限在继承中保持不变",
          content: "子类继承父类成员时，成员原来的访问权限不会因为继承而改变。public 仍是 public，protected 仍是 protected。子类重写父类方法时不能降低访问权限，但可以扩大访问权限。",
          javaCompare: "父类 public 方法不能在子类中重写成 protected；父类 protected 方法可以被子类重写成 public。",
          id: "kp-5-x",
          short: "子类继承父类成员时，成员原来的访问权限不会因为继承而改变。public 仍是 public，protected 仍是 protected。子类重写父类方法时不能……",
          mistake: ""
        },
        {
          title: "UML 类图的三层结构",
          content: "UML 类图通常用三层矩形框表示一个类：第一层是类名，第二层是属性，第三层是方法。属性和方法只写签名，不写完整代码实现。UML 用 + 表示 public，# 表示 protected，- 表示 private，~ 表示 default。",
          javaCompare: "UML 类图是设计蓝图，Java 代码是具体实现。",
          id: "kp-6-uml",
          short: "UML 类图通常用三层矩形框表示一个类：第一层是类名，第二层是属性，第三层是方法。属性和方法只写签名，不写完整代码实现。UML 用 + 表示 public，# ……",
          mistake: ""
        },
        {
          title: "UML 在项目沟通中的作用",
          content: "UML 是程序员与甲方之间的桥梁。甲方提出业务需求，需求分析师将业务语言转成 UML 图，程序员再根据 UML 图设计类、属性、方法和类之间的关系。",
          javaCompare: "业务语言关注需求，UML 关注结构，Java 代码关注实现。",
          id: "kp-7-uml",
          short: "UML 是程序员与甲方之间的桥梁。甲方提出业务需求，需求分析师将业务语言转成 UML 图，程序员再根据 UML 图设计类、属性、方法和类之间的关系。……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "子类通过访问器间接访问父类私有属性",
          code: "public class People {\n    private String color;\n\n    public People() {\n    }\n\n    public void setColor(String color) {\n        this.color = color;\n    }\n\n    public String getColor() {\n        return this.color;\n    }\n\n    public String name;\n    protected int age;\n}\n\npublic class Student extends People {\n    public void showInfo() {\n        // System.out.println(color); // 编译错误：color 是 private\n        System.out.println(getColor());\n        System.out.println(name);\n        System.out.println(age);\n    }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        Student s = new Student();\n        s.name = \"小明\";\n        s.age = 20;\n        s.setColor(\"green\");\n\n        System.out.println(\"姓名：\" + s.name);\n        System.out.println(\"年龄：\" + s.age);\n        System.out.println(\"颜色：\" + s.getColor());\n    }\n}",
          explanation: "Student 不能直接访问父类 People 的 private color，但可以通过继承来的 public setColor() 和 getColor() 间接操作。这体现了封装和继承的结合。"
        },
        {
          title: "子类构造方法调用父类构造方法",
          code: "public class Father {\n    String name;\n\n    public Father() {\n        System.out.println(\"Father() 无参构造方法被调用\");\n    }\n\n    public Father(String name) {\n        this.name = name;\n        System.out.println(\"Father(String) 带参构造方法被调用，name = \" + name);\n    }\n}\n\npublic class Son extends Father {\n    String school;\n\n    public Son() {\n        this.school = \"默认学校\";\n        System.out.println(\"Son() 无参构造方法被调用\");\n    }\n\n    public Son(String name, String school) {\n        super(name);\n        this.school = school;\n        System.out.println(\"Son(String, String) 构造方法被调用\");\n    }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        Son s1 = new Son();\n        Son s2 = new Son(\"小明\", \"北大\");\n\n        System.out.println(\"s1: name=\" + s1.name + \", school=\" + s1.school);\n        System.out.println(\"s2: name=\" + s2.name + \", school=\" + s2.school);\n    }\n}",
          explanation: "new Son() 会自动调用父类无参构造；new Son(\"小明\", \"北大\") 使用 super(name) 显式调用父类带参构造。父类初始化完成后才执行子类自己的初始化。"
        },
        {
          title: "UML 类图对应的 Java 代码",
          code: "public class Animal {\n    private String name;\n    protected int age;\n\n    public Animal() {\n    }\n\n    public Animal(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public void eat() {\n        System.out.println(name + \" is eating.\");\n    }\n}\n\npublic class Dog extends Animal {\n    private String breed;\n\n    public Dog() {\n    }\n\n    public Dog(String name, int age, String breed) {\n        super(name, age);\n        this.breed = breed;\n    }\n\n    public String getBreed() {\n        return breed;\n    }\n\n    public void bark() {\n        System.out.println(getName() + \" says: Woof!\");\n    }\n}",
          explanation: "UML 中 -name:String 对应 private String name；#age:int 对应 protected int age；+getName():String 对应 public String getName()。Dog 到 Animal 的空心三角箭头表示继承。"
        },
        {
          title: "父类只有带参构造方法时的正确写法",
          code: "class Father {\n    String name;\n\n    Father(String name) {\n        this.name = name;\n    }\n}\n\nclass Son extends Father {\n    Son(String name) {\n        super(name);\n    }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        Son s = new Son(\"Tom\");\n        System.out.println(s.name);\n    }\n}",
          explanation: "当父类 Father 没有无参构造方法时，子类 Son 必须在构造方法第一句写 super(name)，否则系统默认调用 super() 会找不到 Father()。"
        }
      ],
      quiz: [
        {
          question: "在同一个包下，子类不能直接继承或访问父类的哪个成员？",
          options: [
            "public 成员",
            "protected 成员",
            "default 成员",
            "private 成员"
          ],
          answer: "private 成员",
          explanation: "同包下 public、protected、default 都能被子类直接使用，只有 private 是本类独有，子类不能直接访问。"
        },
        {
          question: "子类访问父类 private 属性的正确方式是？",
          options: [
            "直接用 super.color",
            "直接用 this.color",
            "通过父类的 public get/set 方法",
            "把 private 改成 public"
          ],
          answer: "通过父类的 public get/set 方法",
          explanation: "子类不能直接访问父类 private 成员，应通过父类公开的访问器方法间接操作。"
        },
        {
          question: "如果父类只有带参构造方法 Father(String name)，子类 Son 的构造方法必须怎么做？",
          options: [
            "什么也不用写",
            "在第一句写 super(name)",
            "删除父类的构造方法",
            "在任意位置写 super(name)"
          ],
          answer: "在第一句写 super(name)",
          explanation: "super(参数) 必须是子类构造方法的第一句，用来明确调用父类带参构造方法。"
        },
        {
          question: "以下关于 UML 类图的描述，正确的是？",
          options: [
            "UML 类图直接生成 Java 代码",
            "类图用两层矩形框表示",
            "类图中 # 表示 protected",
            "UML 中 - 表示 public"
          ],
          answer: "类图中 # 表示 protected",
          explanation: "UML 类图中 + 表示 public，# 表示 protected，- 表示 private。类图通常是类名、属性、方法三层。"
        },
        {
          question: "关于子类构造方法的调用顺序，以下说法正确的是？",
          options: [
            "先执行子类构造方法，再执行父类构造方法",
            "先执行父类构造方法，再执行子类构造方法",
            "只执行子类构造方法",
            "随机执行"
          ],
          answer: "先执行父类构造方法，再执行子类构造方法",
          explanation: "子类构造方法总是先调用父类构造方法，父类初始化完成后才执行子类构造方法的其余部分。"
        }
      ],
      dragMatch: [
        {
          left: "extends",
          right: "Java 中声明继承的关键字，格式为 class 子类 extends 父类"
        },
        {
          left: "super",
          right: "代表父类对象的引用，常用于子类构造方法中调用父类构造方法"
        },
        {
          left: "访问器 get/set",
          right: "提供对私有属性的间接访问，get 取值，set 赋值"
        },
        {
          left: "倒置二叉树",
          right: "Java 继承体系的树形结构，根在上、枝叶在下"
        },
        {
          left: "祖先节点",
          right: "继承树的最顶层，是所有类的起点，例如 Object 类"
        },
        {
          left: "叶子节点",
          right: "继承树的终点，不再被任何类继承"
        },
        {
          left: "UML",
          right: "统一建模语言，用于软件系统的可视化设计"
        },
        {
          left: "类图",
          right: "UML 中最常用的图，用三层矩形表示类的结构"
        },
        {
          left: "+（UML 符号）",
          right: "对应 Java 中的 public 访问权限"
        },
        {
          left: "-（UML 符号）",
          right: "对应 Java 中的 private 访问权限"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "JVM 执行 new Student(\"小明\", \"北大\")，准备创建子类对象。",
          "JVM 进入 Student 的构造方法 Student(String name, String school)。",
          "构造方法第一句是 super(name)，JVM 暂停 Student 的初始化，转去调用父类 People(String name)。",
          "父类构造方法执行 this.name = name，完成父类部分初始化。",
          "JVM 返回子类构造方法，继续执行 this.school = school，完成子类部分初始化。",
          "Student 对象创建完毕，整个对象包含父类属性、子类属性以及可用的方法。"
        ]
      },
      exercises: [
        {
          question: "定义一个 Person 父类，包含 private String idCard；再定义 Student 子类，要求能通过访问器获取和修改 idCard。",
          answer: "class Person {\n    private String idCard;\n\n    public void setIdCard(String idCard) {\n        this.idCard = idCard;\n    }\n\n    public String getIdCard() {\n        return this.idCard;\n    }\n}\n\nclass Student extends Person {\n    public void showIdCard() {\n        System.out.println(\"身份证号：\" + getIdCard());\n    }\n}"
        },
        {
          question: "写出一个只定义了带参构造方法的父类，以及一个正确调用它的子类。解释为什么必须写 super。",
          answer: "class Father {\n    String name;\n\n    Father(String name) {\n        this.name = name;\n    }\n}\n\nclass Son extends Father {\n    Son(String name) {\n        super(name);\n    }\n}\n\n父类没有无参构造方法，系统不会自动提供 Father()，因此子类必须用 super(name) 明确调用父类带参构造。"
        },
        {
          question: "画出 Vehicle 与 Car 的 UML 类图：class Vehicle { private String brand; public void run() { } } class Car extends Vehicle { private int seats; public void honk() { } }",
          answer: "Vehicle 类框：类名 Vehicle；属性 -brand:String；方法 +run():void。Car 类框：类名 Car；属性 -seats:int；方法 +honk():void。用空心三角箭头从 Car 指向 Vehicle，表示 Car 继承 Vehicle。"
        },
        {
          question: "判断说法正误并解释：A 类继承了 B 类，所以 A 类中包含了 B 类的所有成员，包括 B 类的 private 成员。",
          answer: "这个说法需要区分“包含”和“可访问”。子类对象的内存中有父类部分，但子类代码不能直接访问父类 private 成员。private 成员存在但不可见，只能通过父类 public 方法间接操作。"
        },
        {
          question: "为什么 Java 类层次结构中 Object 类被称为终极祖先？",
          answer: "Java 中所有类都直接或间接继承自 java.lang.Object。如果定义类时不写 extends，系统默认继承 Object。Object 提供 toString()、equals()、hashCode() 等所有对象共有的基本方法。"
        }
      ],
      conclusion: [
        "继承的核心是复用：父类的非私有成员子类自动拥有，不需要重复写代码。",
        "继承不是全盘照搬，private 成员不能被子类直接访问，重写可以让子类按照自己的需求改变父类方法行为。",
        "private 属性的访问器桥梁模式是实际开发中的标准做法：属性设为 private，通过 public get/set 方法访问。",
        "子类构造方法必须先调用父类构造方法。如果父类只有带参构造方法，super(参数) 必须写在子类构造方法第一句。",
        "UML 类图不是编程语言，而是设计沟通工具，它帮助开发者在写代码前理清类、属性、方法和继承关系。",
        "本节课也提醒学生整理笔记和实验报告，重点复习重写 vs 重载、全局变量 vs 局部变量、构造方法调用链等区别题。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "继承",
        "extends",
        "父类",
        "子类",
        "访问器",
        "get/set",
        "构造方法调用链",
        "UML类图",
        "树形结构",
        "private继承"
      ],
      cardSummary: "课堂首先通过代码演示巩固继承的核心结论：子类继承父类的非私有属性和方法，不写额外代码也能使用父类的 name、age、speak() 等成员。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-abstract-class",
      title: "抽象类详解——规则的定义者",
      chapter: "Java 类与对象 → 抽象类与接口",
      date: "2025-10-27",
      tags: [
        "抽象类",
        "abstract",
        "抽象方法",
        "规则定义",
        "final",
        "上转型",
        "架构设计"
      ],
      summary: [
        "课堂首先用“吃饭”“坐车”“蔬菜”等日常表达引出抽象概念：抽象是对具体实例共性的提炼，只知道类别，不知道具体细节。",
        "本节课正式讲解抽象类语法：普通类前加 abstract 变成抽象类；抽象方法只有方法头、没有方法体，以分号结尾。",
        "课堂通过问答说明 final 不能修饰抽象类和抽象方法，因为 final 禁止继承或重写，而 abstract 正是等待子类继承和实现。",
        "老师用学校人员 ID 规则案例讲解抽象类的项目作用：抽象类定义共同规则，Student、Teacher 等子类各自实现具体规则。",
        "本节课强调架构设计思想：真实项目应先定义规则层，再由具体类实现规则，避免团队成员各写各的导致系统不稳定。",
        "抽象类虽然不能直接 new，但可以作为父类类型使用，通过子类对象上转型来调用抽象规则的具体实现。"
      ],
      keyPoints: [
        {
          title: "抽象的含义",
          content: "抽象是从许多具体事物中提炼共性的过程。例如“蔬菜”是抽象概念，白菜、番茄、土豆才是具体实例。在 Java 中，抽象类类似一个概念模板，描述一类事物必须具备的规则。",
          javaCompare: "普通类像具体的番茄，可以 new；抽象类像蔬菜这个概念，不能直接 new。",
          id: "kp-0-x",
          short: "抽象是从许多具体事物中提炼共性的过程。例如“蔬菜”是抽象概念，白菜、番茄、土豆才是具体实例。在 Java 中，抽象类类似一个概念模板，描述一类事物必须具备的规则……",
          mistake: ""
        },
        {
          title: "抽象类的基本语法",
          content: "抽象类使用 abstract class 声明。抽象类中可以有属性、构造方法、普通方法，也可以有抽象方法。抽象类用于定义规则和共性，不一定负责所有具体实现。",
          javaCompare: "普通类不能包含抽象方法；只要类中有抽象方法，这个类就必须声明为 abstract。",
          id: "kp-1-x",
          short: "抽象类使用 abstract class 声明。抽象类中可以有属性、构造方法、普通方法，也可以有抽象方法。抽象类用于定义规则和共性，不一定负责所有具体实现。……",
          mistake: ""
        },
        {
          title: "抽象方法的语法",
          content: "抽象方法使用 abstract 修饰，只有方法头，没有方法体，并且以分号结尾。例如 public abstract void makeSound();。它只说明子类必须做什么，不说明具体怎么做。",
          javaCompare: "普通方法有花括号方法体；抽象方法没有花括号，直接用分号结束。",
          id: "kp-2-x",
          short: "抽象方法使用 abstract 修饰，只有方法头，没有方法体，并且以分号结尾。例如 public abstract void makeSound();。它只说明……",
          mistake: ""
        },
        {
          title: "抽象类不能直接实例化",
          content: "抽象类是不完整的规则层，不能通过 new 创建对象。必须定义具体子类继承抽象类，并重写所有抽象方法后，才能创建子类对象。",
          javaCompare: "可以写 Animal dog = new Dog();，但不能写 Animal a = new Animal(); 如果 Animal 是抽象类。",
          id: "kp-3-x",
          short: "抽象类是不完整的规则层，不能通过 new 创建对象。必须定义具体子类继承抽象类，并重写所有抽象方法后，才能创建子类对象。……",
          mistake: ""
        },
        {
          title: "子类必须实现抽象方法",
          content: "如果一个普通子类继承抽象类，就必须重写抽象类中的所有抽象方法。否则这个子类也必须声明为 abstract，仍然不能被直接实例化。",
          javaCompare: "抽象类强制子类遵守规则，因此适合团队开发中的顶层规范设计。",
          id: "kp-4-x",
          short: "如果一个普通子类继承抽象类，就必须重写抽象类中的所有抽象方法。否则这个子类也必须声明为 abstract，仍然不能被直接实例化。……",
          mistake: ""
        },
        {
          title: "abstract 与 final 互斥",
          content: "abstract 表示等待子类继承和实现，final 表示最终的、不能被继承或重写。一个要求改，一个不允许改，所以 final 不能修饰抽象类和抽象方法。",
          javaCompare: "final 方法不能重写；abstract 方法必须重写，这两个语义冲突。",
          id: "kp-5-abstract-final",
          short: "abstract 表示等待子类继承和实现，final 表示最终的、不能被继承或重写。一个要求改，一个不允许改，所以 final 不能修饰抽象类和抽象方法。……",
          mistake: ""
        },
        {
          title: "抽象类定义规则，子类实现规则",
          content: "抽象类在项目中常用于定义所有子类必须具备的行为。例如学校人员都必须有 generateID() 方法，但学生和教师的 ID 生成规则不同，就可以由各自子类实现。",
          javaCompare: "抽象类关心“必须做什么”；具体子类关心“怎么做”。",
          id: "kp-6-x",
          short: "抽象类在项目中常用于定义所有子类必须具备的行为。例如学校人员都必须有 generateID() 方法，但学生和教师的 ID 生成规则不同，就可以由各自子类实现。……",
          mistake: ""
        },
        {
          title: "抽象类与上转型对象",
          content: "抽象类不能直接 new，但可以作为父类类型接收子类对象引用。这样可以用统一的抽象类类型管理不同子类对象，并在运行时调用各自实现的方法。",
          javaCompare: "People p = new Student(); 中 People 可以是抽象类，Student 是具体实现类。",
          id: "kp-7-x",
          short: "抽象类不能直接 new，但可以作为父类类型接收子类对象引用。这样可以用统一的抽象类类型管理不同子类对象，并在运行时调用各自实现的方法。……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "抽象类的基本使用：动物发声规则",
          code: "public abstract class Animal {\n    String name;\n\n    public Animal(String name) {\n        this.name = name;\n    }\n\n    // 抽象方法：只定义规则，不写方法体\n    public abstract void makeSound();\n\n    // 普通方法：抽象类中也可以有具体实现\n    public void sleep() {\n        System.out.println(name + \" 在睡觉...\");\n    }\n}\n\npublic class Dog extends Animal {\n    public Dog(String name) {\n        super(name);\n    }\n\n    @Override\n    public void makeSound() {\n        System.out.println(name + \" 汪汪叫！\");\n    }\n}\n\npublic class Cat extends Animal {\n    public Cat(String name) {\n        super(name);\n    }\n\n    @Override\n    public void makeSound() {\n        System.out.println(name + \" 喵喵叫！\");\n    }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        Animal dog = new Dog(\"旺财\");\n        Animal cat = new Cat(\"咪咪\");\n\n        dog.makeSound();\n        cat.makeSound();\n        dog.sleep();\n        cat.sleep();\n    }\n}",
          explanation: "Animal 是抽象类，定义了 makeSound() 规则。Dog 和 Cat 必须重写 makeSound()，并按各自特点实现不同叫声。抽象类不能直接 new，但可以通过上转型对象使用。"
        },
        {
          title: "抽象类不能 new：交通工具示例",
          code: "public abstract class Vehicle {\n    public abstract void run();\n\n    public void start() {\n        System.out.println(\"启动中...\");\n        run();\n    }\n}\n\npublic class Car extends Vehicle {\n    @Override\n    public void run() {\n        System.out.println(\"汽车在公路上行驶\");\n    }\n}\n\npublic class Bike extends Vehicle {\n    @Override\n    public void run() {\n        System.out.println(\"自行车在非机动车道骑行\");\n    }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        // Vehicle v = new Vehicle(); // 编译错误：抽象类不能实例化\n\n        Vehicle car = new Car();\n        Vehicle bike = new Bike();\n\n        car.start();\n        bike.start();\n    }\n}",
          explanation: "Vehicle 是抽象的交通工具，不知道具体怎么运行，因此不能直接 new。Car 和 Bike 是具体子类，重写 run() 后可以创建对象，并通过 Vehicle 类型统一调用。"
        },
        {
          title: "final 与 abstract 的互斥关系",
          code: "// 错误示例：final 和 abstract 不能同时修饰类\n// public final abstract class WrongClass { }\n\npublic abstract class Animal {\n    public abstract void makeSound();\n\n    public final void breathe() {\n        System.out.println(\"吸入氧气，呼出二氧化碳\");\n    }\n}\n\npublic final class Dog extends Animal {\n    @Override\n    public void makeSound() {\n        System.out.println(\"汪汪！\");\n    }\n\n    // 不能重写 breathe()，因为它被 final 修饰\n    // public void breathe() { }\n}",
          explanation: "abstract 要求子类实现，final 禁止子类继承或重写，二者语义冲突。可以在抽象类中定义 final 普通方法，但不能把抽象方法也声明为 final。"
        },
        {
          title: "抽象类定义 ID 规则，子类分别实现",
          code: "public abstract class People {\n    String name;\n\n    public abstract String generateID();\n\n    public void displayID() {\n        System.out.println(name + \" 的 ID 是：\" + generateID());\n    }\n}\n\npublic class Student extends People {\n    private static int count = 0;\n    private String studentID;\n\n    public Student(String name) {\n        this.name = name;\n        count++;\n        this.studentID = \"2025\" + String.format(\"%04d\", count);\n    }\n\n    @Override\n    public String generateID() {\n        return studentID;\n    }\n}\n\npublic class Teacher extends People {\n    private static int count = 0;\n    private String teacherID;\n\n    public Teacher(String name) {\n        this.name = name;\n        count++;\n        this.teacherID = \"T\" + String.format(\"%03d\", count);\n    }\n\n    @Override\n    public String generateID() {\n        return teacherID;\n    }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        People p1 = new Student(\"张三\");\n        People p2 = new Student(\"李四\");\n        People p3 = new Teacher(\"王老师\");\n\n        p1.displayID();\n        p2.displayID();\n        p3.displayID();\n    }\n}",
          explanation: "People 抽象类定义 generateID() 规则，Student 和 Teacher 按各自 ID 规则实现。displayID() 是通用方法，调用 generateID() 时会执行具体子类的版本。"
        }
      ],
      quiz: [
        {
          question: "以下哪个关键字用于声明抽象类？",
          options: [
            "final",
            "static",
            "abstract",
            "interface"
          ],
          answer: "abstract",
          explanation: "abstract 可以声明抽象类，也可以声明抽象方法。interface 是接口关键字。"
        },
        {
          question: "关于抽象类，以下说法正确的是？",
          options: [
            "抽象类必须包含抽象方法",
            "抽象类可以用 new 创建对象",
            "抽象类不能被继承",
            "抽象类中的抽象方法没有方法体"
          ],
          answer: "抽象类中的抽象方法没有方法体",
          explanation: "抽象类不一定有抽象方法，不能直接 new，可以被继承。抽象方法只有方法头，没有方法体。"
        },
        {
          question: "为什么 final 不能修饰抽象方法？",
          options: [
            "因为 final 和 abstract 都是关键字",
            "因为抽象方法必须被子类重写，而 final 禁止重写",
            "因为 final 只用于变量",
            "因为编译器有 bug"
          ],
          answer: "因为抽象方法必须被子类重写，而 final 禁止重写",
          explanation: "abstract 要求子类必须实现，final 禁止子类重写，两者语义互相冲突。"
        },
        {
          question: "以下哪个代码是正确的抽象方法声明？",
          options: [
            "public abstract void test() { }",
            "public void test();",
            "public abstract void test();",
            "abstract void test() { }"
          ],
          answer: "public abstract void test();",
          explanation: "抽象方法有 abstract 关键字，没有方法体，用分号结尾。"
        },
        {
          question: "如何正确使用一个抽象类？",
          options: [
            "直接 new 它",
            "通过子类继承并实现所有抽象方法，再用子类对象",
            "把它改成普通类",
            "删除所有抽象方法"
          ],
          answer: "通过子类继承并实现所有抽象方法，再用子类对象",
          explanation: "抽象类不能直接实例化，必须由具体子类继承并实现抽象方法后使用。"
        },
        {
          question: "如果一个子类继承抽象类但没有实现全部抽象方法，会怎样？",
          options: [
            "自动继承默认实现",
            "必须把子类也声明为 abstract",
            "可以正常 new 子类对象",
            "抽象方法会被忽略"
          ],
          answer: "必须把子类也声明为 abstract",
          explanation: "没有实现所有抽象方法的类仍是不完整的，因此必须继续声明为抽象类，不能直接实例化。"
        }
      ],
      dragMatch: [
        {
          left: "abstract",
          right: "声明抽象类或抽象方法的关键字，表示不完整、等待实现"
        },
        {
          left: "抽象类",
          right: "用 abstract 修饰的类，用于定义规则，不能直接 new"
        },
        {
          left: "抽象方法",
          right: "只有方法头、没有方法体、以分号结尾的方法"
        },
        {
          left: "分号 ;",
          right: "抽象方法的结束符号，表示一条完整语句结束"
        },
        {
          left: "final",
          right: "与 abstract 互斥，表示最终不可改变"
        },
        {
          left: "上转型对象",
          right: "抽象类不能 new，但可以用抽象父类引用指向具体子类对象"
        },
        {
          left: "规则",
          right: "抽象类定义必须做什么，具体怎么做由子类决定"
        },
        {
          left: "架构师",
          right: "项目中设计规则层的人，常用抽象类和接口搭建框架"
        },
        {
          left: "物理世界",
          right: "真实存在的具体事物，如番茄、自行车"
        },
        {
          left: "逻辑世界",
          right: "从具体事物中提炼出的概念模型，如蔬菜、交通工具"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "需求分析：学校有学生、老师、后勤，每个人都需要 ID，但不同角色的 ID 格式不同。",
          "定义抽象类 People，使用 abstract class People 表示顶层规则类。",
          "在 People 中声明 abstract String generateID();，只写方法头，不写方法体。",
          "Student extends People，必须重写 generateID()，按学生 ID 规则返回结果。",
          "Teacher extends People，必须重写 generateID()，按教师 ID 规则返回结果。",
          "Staff extends People，必须重写 generateID()，按后勤 ID 规则返回结果。",
          "使用上转型：People p = new Student(\"张三\");，抽象父类引用指向具体子类对象。",
          "调用 p.generateID() 时，JVM 根据实际对象类型执行 Student 的 generateID()。",
          "如果某个具体子类忘记重写 generateID()，编译器会报错，强制保证规则被遵守。"
        ]
      },
      exercises: [
        {
          question: "用生活中的例子解释“抽象”和“具体”的区别。",
          answer: "抽象是共性的提炼，具体是带有详细特征的实例。比如“水果”是抽象概念，“红富士苹果”是具体实例。放到 Java 中，抽象类不能 new，具体子类可以 new。"
        },
        {
          question: "定义一个抽象类 Shape，包含抽象方法 area() 和 perimeter()，再定义 Circle 和 Rectangle 实现这两个方法。",
          answer: "参考答案：abstract class Shape { public abstract double area(); public abstract double perimeter(); } class Circle extends Shape { double r; Circle(double r){ this.r = r; } public double area(){ return Math.PI * r * r; } public double perimeter(){ return 2 * Math.PI * r; } } class Rectangle extends Shape { double w, h; Rectangle(double w, double h){ this.w = w; this.h = h; } public double area(){ return w * h; } public double perimeter(){ return 2 * (w + h); } }。"
        },
        {
          question: "判断题：“抽象类中不能有构造方法”。这个说法对吗？为什么？",
          answer: "不对。抽象类可以有构造方法。虽然抽象类不能直接 new，但它的构造方法会在创建子类对象时通过 super() 被调用，用于初始化父类部分。"
        },
        {
          question: "以下代码有什么错误？abstract class A { abstract void show() { System.out.println(\"Hello\"); } } class B extends A { }",
          answer: "有两个错误：第一，抽象方法不能有方法体，应写成 abstract void show();；第二，B 继承 A 后没有重写 show()，如果 B 不是 abstract，就必须实现 show() 方法。"
        },
        {
          question: "解释为什么抽象类中通常不能定义 private abstract 方法。",
          answer: "private 方法对子类不可见，无法被重写；abstract 方法的目的就是让子类重写实现。因此 private abstract 语义冲突，Java 编译器不允许这种写法。"
        }
      ],
      conclusion: [
        "抽象是从具体事物中提炼共性，抽象类就是把共性规则写成 Java 类。",
        "抽象类使用 abstract class 声明，抽象方法只有方法头、没有方法体，并以分号结尾。",
        "抽象类不能直接 new，必须通过具体子类实现抽象方法后创建子类对象。",
        "abstract 和 final 语义互斥：一个要求子类实现，一个禁止子类修改。",
        "抽象类在项目中常用于定义规则层，具体子类负责实现规则，是架构设计的重要基础。",
        "抽象类可以结合上转型对象使用，用统一的父类类型管理不同实现类，让程序更灵活。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "抽象类",
        "abstract",
        "抽象方法",
        "规则定义",
        "final",
        "上转型",
        "架构设计"
      ],
      cardSummary: "课堂首先用“吃饭”“坐车”“蔬菜”等日常表达引出抽象概念：抽象是对具体实例共性的提炼，只知道类别，不知道具体细节。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-oop-polymorphism-upcast",
      title: "面向对象三大特征与多态详解——重写、super、final 与上转型对象",
      chapter: "Java 类与对象 → 继承 → 多态",
      date: "2025-10-16",
      tags: [
        "封装",
        "继承",
        "多态",
        "重写",
        "重载",
        "super",
        "final",
        "上转型对象",
        "构造方法链",
        "访问权限"
      ],
      summary: [
        "课堂首先通过代码演示验证了创建子类对象时先创建父类对象的构造方法调用链：父类构造方法先执行，子类构造方法后执行。",
        "老师通过属性继承但值不继承的演示说明：子类继承父类的属性名，但属性值需要子类自己设置，否则成员变量会显示默认值，如 String 为 null。",
        "本节课正式总结面向对象三大特征：封装、继承、多态，其中多态强调对象不变但表现形式多样。",
        "课堂深入讲解重写 Override 的完整规则：不同类体、方法头完全相同、方法体不同，并且子类重写时不能降低访问权限。",
        "本节课引入 final 关键字的三种用法：修饰类表示不能被继承，修饰变量表示常量，修饰方法表示不能被重写。",
        "最后重点讲解上转型对象：父类引用指向子类对象，调用方法时执行的是子类重写后的版本，这是 Java 多态的核心机制。"
      ],
      keyPoints: [
        {
          title: "子类对象创建时的构造方法调用链",
          content: "创建子类对象时，JVM 会先完成父类部分的初始化，再完成子类部分的初始化。也就是说，new Son() 时会先调用 Father 的构造方法，再调用 Son 的构造方法。如果子类构造方法中没有显式写 super(...)，系统会默认调用父类的无参构造方法 super()。",
          javaCompare: "与普通方法不同，构造方法不是手动调用的，而是在 new 对象时由 JVM 自动触发。",
          id: "kp-0-x",
          short: "创建子类对象时，JVM 会先完成父类部分的初始化，再完成子类部分的初始化。也就是说，new Son() 时会先调用 Father 的构造方法，再调用 Son 的……",
          mistake: ""
        },
        {
          title: "super 关键字的作用",
          content: "super 代表父类对象的引用，常用于在子类构造方法中调用父类构造方法，或者在子类中访问父类被继承的成员。super(参数) 必须写在子类构造方法的第一句，否则会编译错误。",
          javaCompare: "this 代表当前对象；super 代表父类对象部分。this(...) 和 super(...) 都要求放在构造方法第一句，因此不能同时出现在同一个构造方法中。",
          id: "kp-1-super",
          short: "super 代表父类对象的引用，常用于在子类构造方法中调用父类构造方法，或者在子类中访问父类被继承的成员。super(参数) 必须写在子类构造方法的第一句，否则……",
          mistake: ""
        },
        {
          title: "继承属性但不继承属性值",
          content: "子类继承的是父类的属性定义和方法能力，而不是父类对象中已经保存的具体值。比如父类有 name 属性，子类也可以使用 name，但如果子类没有给 name 赋值，输出结果可能是 null。",
          javaCompare: "成员变量有默认值，String 默认 null；局部变量没有默认值，使用前必须初始化。",
          id: "kp-2-x",
          short: "子类继承的是父类的属性定义和方法能力，而不是父类对象中已经保存的具体值。比如父类有 name 属性，子类也可以使用 name，但如果子类没有给 name 赋值，……",
          mistake: ""
        },
        {
          title: "面向对象三大特征",
          content: "封装是把属性和方法组织在类体中，并通过访问权限控制外部访问；继承是子类复用父类的非私有成员；多态是同一个对象或同一个方法调用在不同场景下表现出不同形态。",
          javaCompare: "封装解决安全访问问题，继承解决代码复用问题，多态解决统一调用和行为差异问题。",
          id: "kp-3-x",
          short: "封装是把属性和方法组织在类体中，并通过访问权限控制外部访问；继承是子类复用父类的非私有成员；多态是同一个对象或同一个方法调用在不同场景下表现出不同形态。……",
          mistake: ""
        },
        {
          title: "方法重写 Override 的完整规则",
          content: "重写发生在父子类之间，要求子类方法与父类方法的方法头完全相同，包括方法名、参数列表和返回值类型；方法体不同，由子类提供新的实现。子类重写后，子类对象调用该方法时执行子类版本。",
          javaCompare: "重写是不同类、同头不同体；重载是同类、同名不同参。",
          id: "kp-4-override",
          short: "重写发生在父子类之间，要求子类方法与父类方法的方法头完全相同，包括方法名、参数列表和返回值类型；方法体不同，由子类提供新的实现。子类重写后，子类对象调用该方法时……",
          mistake: ""
        },
        {
          title: "重写不能降低访问权限",
          content: "子类重写父类方法时，访问权限只能保持不变或扩大，不能缩小。比如父类方法是 public，子类重写时也必须是 public；父类是 protected，子类可以改为 public，但不能改为 private。",
          javaCompare: "这是为了保证父类引用指向子类对象时，原本能访问的方法不会因为子类替换而突然不可见。",
          id: "kp-5-x",
          short: "子类重写父类方法时，访问权限只能保持不变或扩大，不能缩小。比如父类方法是 public，子类重写时也必须是 public；父类是 protected，子类可以改……",
          mistake: ""
        },
        {
          title: "final 关键字",
          content: "final 表示最终的、不可改变的。它修饰类时表示类不能被继承；修饰变量时表示常量，赋值后不能修改；修饰方法时表示方法不能被子类重写。",
          javaCompare: "final 类像继承树的叶子节点；final 方法像最终版本；final 变量像数学常量 PI。",
          id: "kp-6-final",
          short: "final 表示最终的、不可改变的。它修饰类时表示类不能被继承；修饰变量时表示常量，赋值后不能修改；修饰方法时表示方法不能被子类重写。……",
          mistake: ""
        },
        {
          title: "上转型对象 Upcasting",
          content: "上转型对象指父类类型变量引用子类对象，例如 Animal a = new Dog();。此时 a 的编译类型是 Animal，但实际对象是 Dog，调用被重写的方法时执行 Dog 的版本。",
          javaCompare: "上转型可以把不同子类对象统一放进父类类型变量或数组中，是多态编程的基础。",
          id: "kp-7-upcasting",
          short: "上转型对象指父类类型变量引用子类对象，例如 Animal a = new Dog();。此时 a 的编译类型是 Animal，但实际对象是 Dog，调用被重写的……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "构造方法调用链完整演示",
          code: "public class GrandFather {\n    public GrandFather() {\n        System.out.println(\"① GrandFather 构造方法\");\n    }\n}\n\npublic class Father extends GrandFather {\n    public Father() {\n        System.out.println(\"② Father 构造方法\");\n    }\n\n    public Father(String name) {\n        System.out.println(\"② Father(String) 构造方法，name=\" + name);\n    }\n}\n\npublic class Son extends Father {\n    public Son() {\n        System.out.println(\"③ Son 构造方法\");\n    }\n\n    public Son(String name) {\n        super(name);\n        System.out.println(\"③ Son(String) 构造方法\");\n    }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        System.out.println(\"=== 无参构造 ===\");\n        new Son();\n\n        System.out.println(\"=== 带参构造 ===\");\n        new Son(\"小明\");\n    }\n}",
          explanation: "创建 Son 对象时，构造方法会按 GrandFather → Father → Son 的顺序执行。super(name) 显式调用父类带参构造方法，但父类 Father 自己又会先调用 GrandFather 的构造方法。"
        },
        {
          title: "重写时访问权限可以扩大但不能缩小",
          code: "public class Father {\n    protected void show() {\n        System.out.println(\"Father 的 show 方法\");\n    }\n\n    public void display() {\n        System.out.println(\"Father 的 display 方法\");\n    }\n}\n\npublic class Son extends Father {\n    @Override\n    public void show() {\n        System.out.println(\"Son 重写 show：protected 扩大为 public\");\n    }\n\n    // 下面这样写会编译错误：不能降低父类方法的可见性\n    // @Override\n    // protected void display() {\n    //     System.out.println(\"错误示例\");\n    // }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        Son s = new Son();\n        s.show();\n        s.display();\n    }\n}",
          explanation: "父类 show 是 protected，子类可以扩大为 public；父类 display 是 public，子类不能缩小为 protected 或 private。"
        },
        {
          title: "上转型对象与多态经典演示",
          code: "public class Animal {\n    String name;\n\n    public Animal(String name) {\n        this.name = name;\n    }\n\n    public void speak() {\n        System.out.println(name + \"发出声音\");\n    }\n\n    public void eat() {\n        System.out.println(name + \"吃东西\");\n    }\n}\n\npublic class Dog extends Animal {\n    public Dog(String name) {\n        super(name);\n    }\n\n    @Override\n    public void speak() {\n        System.out.println(name + \"汪汪叫！\");\n    }\n\n    public void wagTail() {\n        System.out.println(name + \"摇尾巴\");\n    }\n}\n\npublic class Cat extends Animal {\n    public Cat(String name) {\n        super(name);\n    }\n\n    @Override\n    public void speak() {\n        System.out.println(name + \"喵喵叫！\");\n    }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        Animal a1 = new Dog(\"小黑\");\n        Animal a2 = new Cat(\"小白\");\n\n        a1.speak();\n        a2.speak();\n        a1.eat();\n\n        Animal[] pets = {new Dog(\"阿黄\"), new Cat(\"花花\"), new Dog(\"大毛\")};\n        for (Animal pet : pets) {\n            pet.speak();\n        }\n    }\n}",
          explanation: "a1 和 a2 的声明类型都是 Animal，但实际对象分别是 Dog 和 Cat。调用 speak() 时，JVM 会在运行时根据实际对象类型执行各自重写后的方法。"
        },
        {
          title: "final 修饰类、变量和方法",
          code: "final class FinalClass {\n    public void show() {\n        System.out.println(\"这个类不能被继承\");\n    }\n}\n\npublic class Father {\n    public final void importantRule() {\n        System.out.println(\"这是不可重写的规则\");\n    }\n}\n\npublic class ConstantDemo {\n    public static void main(String[] args) {\n        final double PI = 3.1415926;\n        System.out.println(\"圆周率：\" + PI);\n\n        // PI = 3.14; // 编译错误：final 变量不能再次赋值\n    }\n}",
          explanation: "final class 不能被继承，final method 不能被重写，final variable 是常量，赋值后不能修改。"
        }
      ],
      quiz: [
        {
          question: "面向对象的三大特征不包括以下哪一个？",
          options: [
            "封装",
            "继承",
            "抽象",
            "多态"
          ],
          answer: "抽象",
          explanation: "面向对象的三大特征是封装、继承、多态。抽象是重要概念，但不是本节课所说的三大特征之一。"
        },
        {
          question: "final 关键字修饰类时表示什么？",
          options: [
            "该类不能被实例化",
            "该类不能被继承",
            "该类的方法不能被调用",
            "该类是抽象类"
          ],
          answer: "该类不能被继承",
          explanation: "final 修饰类表示该类是最终类，不能再有子类，也可以理解为继承树中的叶子节点。"
        },
        {
          question: "以下哪个代码是正确的上转型对象写法？",
          options: [
            "Dog d = new Animal();",
            "Animal a = new Dog();",
            "Animal a = (Dog) new Animal();",
            "Dog d = (Animal) new Dog();"
          ],
          answer: "Animal a = new Dog();",
          explanation: "上转型对象是父类引用指向子类对象，沿继承树从子类向父类方向转换。"
        },
        {
          question: "子类重写父类方法时，关于访问权限的正确说法是？",
          options: [
            "必须和父类完全相同",
            "可以任意修改",
            "可以扩大但不能缩小",
            "可以缩小但不能扩大"
          ],
          answer: "可以扩大但不能缩小",
          explanation: "重写时访问权限不能低于父类方法。父类 protected 可以改为 public，但父类 public 不能改为 protected。"
        },
        {
          question: "关于 super 关键字，以下说法错误的是？",
          options: [
            "super 代表父类对象的引用",
            "super(参数) 必须写在子类构造方法第一句",
            "super 可以帮助子类调用父类构造方法",
            "super 可以调用父类任意 private 方法"
          ],
          answer: "super 可以调用父类任意 private 方法",
          explanation: "super 也受访问权限限制，不能直接访问父类 private 成员。"
        },
        {
          question: "Animal a = new Dog(); a.speak(); 如果 Dog 重写了 speak()，会调用哪个版本？",
          options: [
            "Animal 的 speak()",
            "Dog 的 speak()",
            "两个都调用",
            "编译错误"
          ],
          answer: "Dog 的 speak()",
          explanation: "上转型对象调用被重写的方法时，根据运行时实际对象类型决定，实际对象是 Dog，所以调用 Dog 的版本。"
        }
      ],
      dragMatch: [
        {
          left: "封装",
          right: "类将属性和方法包装在类体内部，并通过访问权限控制外部访问"
        },
        {
          left: "继承",
          right: "子类自动获得父类的非私有属性和方法，使用 extends 关键字"
        },
        {
          left: "多态",
          right: "同一个对象或方法调用可以表现出多种形态"
        },
        {
          left: "重写 Override",
          right: "子类定义与父类方法头相同、方法体不同的方法"
        },
        {
          left: "重载 Overload",
          right: "同一个类中方法名相同、参数列表不同"
        },
        {
          left: "super",
          right: "代表父类对象的引用，常在子类构造方法第一句调用父类构造方法"
        },
        {
          left: "final 类",
          right: "不能被继承的类，是继承树的叶子节点"
        },
        {
          left: "final 变量",
          right: "常量，一旦赋值就不能修改"
        },
        {
          left: "final 方法",
          right: "不能被子类重写的方法"
        },
        {
          left: "上转型对象",
          right: "父类引用指向子类对象，调用方法时执行子类重写后的版本"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "声明一个父类类型变量：Animal a;",
          "创建一个子类对象：new Dog(\"旺财\");",
          "JVM 创建 Dog 对象时，自动先调用 Animal 的构造方法，再执行 Dog 的构造方法。",
          "把子类对象引用赋值给父类变量：Animal a = new Dog(\"旺财\");",
          "通过父类变量调用方法：a.speak();",
          "JVM 在运行时检查 a 实际指向的对象类型，发现实际对象是 Dog。",
          "JVM 查找 Dog 类中是否重写 speak()，如果已经重写，则执行 Dog 的版本。",
          "输出 Dog 的行为结果，例如“旺财汪汪叫”。",
          "如果调用的是 Dog 独有而 Animal 中没有的方法，例如 wagTail()，则编译不通过。"
        ]
      },
      exercises: [
        {
          question: "写出面向对象的三大特征，并用生活例子分别解释。",
          answer: "封装：把数据和操作数据的方法放在一个类中，只暴露必要接口，如手机把复杂电路封装在内部；继承：子类获得父类非私有成员，如儿子继承父亲的姓氏和部分特征；多态：同一个方法调用根据对象类型表现不同，如 animal.speak() 中狗汪汪叫、猫喵喵叫。"
        },
        {
          question: "分析代码：class A { public void show(){System.out.println(\"A\");} } class B extends A { public void show(){System.out.println(\"B\");} } A obj = new B(); obj.show(); 输出什么？为什么？",
          answer: "输出 B。obj 的声明类型是 A，但实际引用的是 B 对象。B 重写了 show() 方法，运行时 JVM 根据实际对象类型调用 B 的 show()。"
        },
        {
          question: "以下代码能否编译？class Father { public Father(String s) { } } class Son extends Father { public Son() { } }",
          answer: "不能编译。Father 只有带参构造方法，没有无参构造方法。Son 构造方法没有写 super(参数)，系统默认调用 Father()，但 Father() 不存在。修复方式是在 Son 构造方法第一句写 super(\"默认值\"); 或给 Father 补无参构造方法。"
        },
        {
          question: "简述 final 关键字的三种用法并各给一个示例。",
          answer: "final 修饰类表示不能被继承：final class A { }；final 修饰变量表示常量：final int MAX = 100;；final 修饰方法表示不能被重写：public final void rule() { }。"
        },
        {
          question: "定义 Animal 父类，Dog 和 Cat 子类分别重写 speak()，再写 makeSound(Animal a) 方法实现传入什么动物就输出什么叫声。",
          answer: "参考答案：class Animal { public void speak(){ System.out.println(\"动物叫\"); } } class Dog extends Animal { @Override public void speak(){ System.out.println(\"汪汪\"); } } class Cat extends Animal { @Override public void speak(){ System.out.println(\"喵喵\"); } } class Test { public static void makeSound(Animal a){ a.speak(); } public static void main(String[] args){ makeSound(new Dog()); makeSound(new Cat()); } }。"
        }
      ],
      conclusion: [
        "本节课的核心是从继承过渡到多态，理解对象不变但表现形式可以变化。",
        "构造方法调用链必须牢记：创建子类对象时先父类后子类，super(参数) 必须放在子类构造方法第一句。",
        "子类继承的是父类的属性和方法定义，不是某个父类对象已有的属性值。",
        "重写与重载是多态的重要形式：重写是父子类之间同头不同体，重载是同一个类中同名不同参。",
        "final 表示最终不可变，可以修饰类、变量和方法，分别对应不能继承、常量、不能重写。",
        "上转型对象是 Java 多态编程的核心：父类引用指向子类对象，方法调用看运行时真实对象类型。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "封装",
        "继承",
        "多态",
        "重写",
        "重载",
        "super",
        "final",
        "上转型对象",
        "构造方法链",
        "访问权限"
      ],
      cardSummary: "课堂首先通过代码演示验证了创建子类对象时先创建父类对象的构造方法调用链：父类构造方法先执行，子类构造方法后执行。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-abstract-review-interface-intro",
      title: "抽象类复习与接口概念引入",
      chapter: "Java 类与对象 → 抽象类与接口",
      date: "2025-10-27",
      tags: [
        "抽象类",
        "上转型",
        "规则定义",
        "接口",
        "interface",
        "参数传递",
        "包",
        "重写可见性",
        "多态总结"
      ],
      summary: [
        "课堂首先通过代码演示了抽象类的完整工作流程——抽象父类定义 getID() 规则，Student 和 Teacher 子类分别实现自己的 ID 生成方式，通过上转型对象（People p = new Student()）来调用。",
        "老师通过代码中\"返回值类型不一致\"的报错，强调了重写必须保持方法头完全一致——包括返回值类型、方法名、参数列表。",
        "再次总结继承的可见性规则——子类重写父类方法时，访问权限必须大于等于父类（protected → public ✅，public → protected ❌）。",
        "系统复习了面向对象的核心知识点链——继承→可见性→重写/重载区别→上转型→多态→抽象类→规则定义，强调这些是\"一条逻辑线\"。",
        "通过\"插座\"的经典类比引入接口概念——接口就是一个物件与另一个物件接触的地方（接头），它只提供功能（电），不同的物件（水壶/台灯/手机充电器）接上去完成不同的任务。接口传递参数、定义规则。"
      ],
      keyPoints: [
        {
          title: "抽象类与上转型的完整工作流程",
          content: "抽象类与上转型的完整工作流程 抽象类的完整使用流程是：定义抽象父类（含抽象方法）→ 子类继承并实现所有抽象方法 → 通过上转型对象（父类引用指向子类对象）来使用。 > \"我还没有定义学生的对象呢，就用 P1（People 类型）把学生的 ID 拿走了——这就是上转型。子类给父类进行实例化，你就用父类来调用它。虽然是父类在调用，但执行的还是子类的方法——就像父亲花儿子挣的钱。\"",
          javaCompare: "声明类型看父类或抽象类，运行时方法调用看实际子类对象，这是多态的基础。",
          id: "kp-0-x",
          short: "抽象类与上转型的完整工作流程 抽象类的完整使用流程是：定义抽象父类（含抽象方法）→ 子类继承并实现所有抽象方法 → 通过上转型对象（父类引用指向子类对象）来使用……",
          mistake: ""
        },
        {
          title: "重写的可见性规则——只能扩大，不能缩小",
          content: "重写的可见性规则——只能扩大，不能缩小 子类重写父类的方法时，访问权限只能扩大（或保持不变），不能缩小。 > \"父类是 protected 的，子类最少也是 protected 的，绝对不能是 default 或 private。你可以是 public——大于等于都可以，但不能小于。\" 这个规则保证了多态的安全性——通过父类引用调用方法时，如果子类把权限缩小了，某些本来能访问的地方就访问不到了，这会破坏程序的正确性。 > \"重写可见性——平行继承可以，向上扩大可以，向下缩小不行。\"",
          javaCompare: "重写发生在父子类之间，要求方法头一致，并且子类访问权限不能比父类更小。",
          id: "kp-1-x",
          short: "重写的可见性规则——只能扩大，不能缩小 子类重写父类的方法时，访问权限只能扩大（或保持不变），不能缩小。 > \"父类是 protected 的，子类最少也是 p……",
          mistake: ""
        },
        {
          title: "面向对象的知识链——一条逻辑线",
          content: "面向对象的知识链——一条逻辑线 老师在本节课帮学生把整个面向对象的知识点串成了一条线： > \"这个课程一定是这么逻辑转换下来的。我们先学了类，学了子类，学了继承——为什么不先学抽象类？因为做不了。我们都是先学普通案例才学特殊案例的。\"",
          javaCompare: "",
          id: "kp-2-x",
          short: "面向对象的知识链——一条逻辑线 老师在本节课帮学生把整个面向对象的知识点串成了一条线： > \"这个课程一定是这么逻辑转换下来的。我们先学了类，学了子类，学了继承……",
          mistake: ""
        },
        {
          title: "接口的概念——从生活到代码",
          content: "接口的概念——从生活到代码 接口（Interface）在生活中的含义是\"一个物件与另一个物件接触的地方\"。在 Java 编程中，接口用于定义一组规则（只有方法头，没有方法体），不同的类通过实现（implements）接口来完成共同的功能。 > \"你往插座上插水壶——烧水。插台灯——照亮。插手机充电器——充电。同一个插座，不同的物件插上去，完成不同的功能。插座本身只提供电（能力），至于用电做什么——那是各个物件自己的事。\" > \"接口传递的是参数。你插水壶的时候，传了一个'烧水'的参数。插台灯的时候，传了一个'照亮'的参数。插充电器的时候，传了一个'充电'的参数。对于插座来说，它一直没变，变的是插上去的物件。\" 三大作用总结： 1. 传递参数——不同的实现类传入，执行不同的逻辑 2. 定义规则——只有方法头，没有方法体，强制实现类遵循 3. 解耦——调用方只依赖接口，不依赖具体实现类",
          javaCompare: "接口强调规则和能力，适合表达部分类才具备的特性；普通父类更适合放所有子类共有的内容。",
          id: "kp-3-x",
          short: "接口的概念——从生活到代码 接口（Interface）在生活中的含义是\"一个物件与另一个物件接触的地方\"。在 Java 编程中，接口用于定义一组规则（只有方法头……",
          mistake: ""
        },
        {
          title: "接口与抽象类的对比",
          content: "接口与抽象类的对比 > \"抽象类和接口有相似之处。不同的组件放到一起共同完成一个功能——这个相接的地方就叫接口。从物理世界抽象出来，映射到我们的逻辑世界。\"",
          javaCompare: "抽象类是半成品，可以有构造方法和普通方法；接口更像纯规则，用 implements 实现。",
          id: "kp-4-x",
          short: "接口与抽象类的对比 > \"抽象类和接口有相似之处。不同的组件放到一起共同完成一个功能——这个相接的地方就叫接口。从物理世界抽象出来，映射到我们的逻辑世界。\"……",
          mistake: ""
        },
        {
          title: "包的作用——代码的分组和管理",
          content: "包的作用——代码的分组和管理 老师用\"逛商场\"来类比包的作用： > \"逛商场的时候，买了衣服放一个袋子，鞋放一个袋子，吃的放一个袋子。如果把吃的放到衣服袋子里——衣服就不能穿了。包就是把具有共同特性的类放在一起，保护它们不跟其他类型的类混在一起。\" 包的两大作用： 1. 组织代码——把相关的类放在一起 2. 访问控制——同一个包下的类有特殊的访问权限（default 访问级别） > \"有些人负责前台界面（view），有些人负责设计类（model），有些人负责测试（test）。一个项目里不同角色的人负责不同的包——这就是分层架构。\"",
          javaCompare: "package 用于组织类，也会影响 default 访问权限的可见范围。",
          id: "kp-5-x",
          short: "包的作用——代码的分组和管理 老师用\"逛商场\"来类比包的作用： > \"逛商场的时候，买了衣服放一个袋子，鞋放一个袋子，吃的放一个袋子。如果把吃的放到衣服袋子里—……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "抽象类的规则定义——ID 系统完整演示",
          code: "// 抽象父类——定义\"所有人都要有 ID\"的规则\npublic abstract class People {\n    String name;\n    String id;\n\n    public People(String name) {\n        this.name = name;\n    }\n\n    // 抽象规则——生成 ID\n    public abstract void generateID();\n\n    // 通用方法——显示信息（调用了抽象方法——多态！）\n    public void display() {\n        generateID();  // 实际执行的是子类重写后的版本\n        System.out.println(\"姓名：\" + name + \"，ID：\" + id);\n    }\n}\n\n// 子类：学生\npublic class Student extends People {\n    private static int count = 0;\n\n    public Student(String name) {\n        super(name);\n    }\n\n    @Override\n    public void generateID() {\n        count++;\n        this.id = \"STU\" + String.format(\"%04d\", count);\n    }\n}\n\n// 子类：教师\npublic class Teacher extends People {\n    private static int count = 0;\n\n    public Teacher(String name) {\n        super(name);\n    }\n\n    @Override\n    public void generateID() {\n        count++;\n        this.id = \"TCH\" + String.format(\"%03d\", count);\n    }\n}\n\n// 测试类\npublic class Test {\n    public static void main(String[] args) {\n        // 上转型——用抽象类类型接收\n        People s1 = new Student(\"张三\");\n        People s2 = new Student(\"李四\");\n        People t1 = new Teacher(\"王老师\");\n\n        s1.display();  // 姓名：张三，ID：STU0001\n        s2.display();  // 姓名：李四，ID：STU0002\n        t1.display();  // 姓名：王老师，ID：TCH001\n    }\n}",
          explanation: "People 抽象类定义了 generateID() 规则，display() 方法中调用了这个抽象方法——虽然 display() 是父类的方法，但它调用的 generateID() 是子类重写后的版本（因为上转型对象的运行时多态）。"
        },
        {
          title: "重写可见性规则——权限只能扩大不能缩小",
          code: "// 父类\npublic class Father {\n    protected void show() {\n        System.out.println(\"Father's protected show()\");\n    }\n\n    public void print() {\n        System.out.println(\"Father's public print()\");\n    }\n}\n\n// 子类\npublic class Son extends Father {\n    // ✅ 可以——protected → public（扩大权限）\n    @Override\n    public void show() {\n        System.out.println(\"Son's public show()——权限扩大了\");\n    }\n\n    // ❌ 不可以——public → protected（缩小权限）\n    // @Override\n    // protected void print() {   // 编译错误！\n    //     System.out.println(\"Error!\");\n    // }\n    // 错误信息：Cannot reduce the visibility of the inherited method from Father\n}",
          explanation: "口诀——\"子类重写父类方法，访问权限≥父类。等于可以，大于也行，小于报错。\""
        },
        {
          title: "接口的类比代码——插座与电器",
          code: "// 接口 = 插座（只提供电——定义\"能做什么\"的规则）\npublic interface PowerSocket {\n    // 接口中的方法默认是 public abstract\n    void supplyPower();  // 供电——只有规则，没有实现\n}\n\n// 实现类 1 = 水壶（插上插座就烧水）\npublic class Kettle implements PowerSocket {\n    @Override\n    public void supplyPower() {\n        System.out.println(\"水壶：接通电源，开始烧水...♨\");\n    }\n}\n\n// 实现类 2 = 台灯（插上插座就照亮）\npublic class Lamp implements PowerSocket {\n    @Override\n    public void supplyPower() {\n        System.out.println(\"台灯：接通电源，开始照明...💡\");\n    }\n}\n\n// 实现类 3 = 手机充电器（插上插座就充电）\npublic class PhoneCharger implements PowerSocket {\n    @Override\n    public void supplyPower() {\n        System.out.println(\"充电器：接通电源，开始充电...🔋\");\n    }\n}\n\n// 测试——同一个\"插座\"接口，不同电器插上去做不同的事\npublic class Test {\n    public static void main(String[] args) {\n        PowerSocket s1 = new Kettle();        // 插水壶\n        PowerSocket s2 = new Lamp();          // 插台灯\n        PowerSocket s3 = new PhoneCharger();  // 插充电器\n\n        s1.supplyPower();  // 水壶：接通电源，开始烧水...♨\n        s2.supplyPower();  // 台灯：接通电源，开始照明...💡\n        s3.supplyPower();  // 充电器：接通电源，开始充电...🔋\n    }\n}",
          explanation: "接口 PowerSocket 就像一个万能插座——它只定义了\"供电\"这个能力，但每种电器接上后各做各的事。这跟抽象类的规则定义思想一脉相承，但接口更加纯粹——它只有规则，没有任何实现。"
        }
      ],
      quiz: [
        {
          question: "子类重写父类的 protected 方法时，可以使用的访问权限是？",
          options: [
            "只能是 protected",
            "只能是 public",
            "protected 或 public",
            "private、default、protected、public 都可以"
          ],
          answer: "protected 或 public",
          explanation: "子类重写时访问权限必须大于等于父类——protected 可以保持不变或扩大为 public。不能缩小为 default 或 private。"
        },
        {
          question: "关于接口（interface），以下说法正确的是？",
          options: [
            "接口可以用 new 创建对象",
            "接口中的方法默认是 public static",
            "接口中没有构造方法",
            "一个类只能实现一个接口"
          ],
          answer: "接口中没有构造方法",
          explanation: "接口没有构造方法（A 错在不能 new，B 错在默认是 public abstract 不是 static，D 错在一个类可以实现多个接口）。"
        },
        {
          question: "以下哪个概念与\"插座\"的类比最接近？",
          options: [
            "抽象类",
            "接口",
            "普通类",
            "构造方法"
          ],
          answer: "接口",
          explanation: "插座 = 接口——它只提供电（能力），不关心谁在用、用来做什么。不同电器插上去做不同的事 = 不同的类实现同一个接口。"
        },
        {
          question: "抽象类和接口的共同点是？",
          options: [
            "都可以包含构造方法",
            "都可以用 new 创建对象",
            "都不能直接实例化",
            "都可以包含普通方法"
          ],
          answer: "都不能直接实例化",
          explanation: "两者都不能直接 new（抽象类通过子类，接口通过实现类）。A 错在接口没有构造方法，D 错在接口不能包含普通方法（Java 8 之前）。"
        },
        {
          question: "关于子类重写父类方法，以下说法正确的是？",
          options: [
            "方法头可以不同",
            "只能发生在同一个类中",
            "发生在不同类体中，方法头必须完全相同",
            "重写的方法必须有 @Override 注解"
          ],
          answer: "发生在不同类体中，方法头必须完全相同",
          explanation: "重写的核心条件：发生在不同类体，方法头完全相同。@Override 注解是可选的（推荐但非必须）。"
        }
      ],
      dragMatch: [
        {
          left: "抽象类",
          right: "用 abstract 修饰的类，可以包含抽象方法和普通方法，不能直接 new"
        },
        {
          left: "抽象方法",
          right: "只有方法头没有方法体、以分号结尾的方法，定义\"规则\""
        },
        {
          left: "规则",
          right: "抽象类或接口定义的\"必须做什么\"，具体\"怎么做\"由于类/实现类决定"
        },
        {
          left: "上转型对象",
          right: "父类引用指向子类对象，方法调用执行子类重写后的版本"
        },
        {
          left: "可见性扩大",
          right: "子类重写时访问权限从 protected 变成 public（✅ 允许）"
        },
        {
          left: "可见性缩小",
          right: "子类重写时访问权限从 public 变成 protected（❌ 不允许）"
        },
        {
          left: "接口",
          right: "用 interface 声明，纯抽象方法 + 常量的集合，没有构造方法"
        },
        {
          left: "插座",
          right: "接口的生活类比——只提供能力（电），不同物件插上做不同的事"
        },
        {
          left: "包（package）",
          right: "组织类的容器，同包的类有 default 访问权限"
        },
        {
          left: "implements",
          right: "类实现接口的关键字，一个类可以实现多个接口"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "定义接口 PowerSocket——声明 void supplyPower() 方法（规则：所有电器都要能通电）",
          "定义实现类 Kettle implements PowerSocket——重写 supplyPower()，实现\"烧水\"",
          "定义实现类 Lamp implements PowerSocket——重写 supplyPower()，实现\"照明\"",
          "定义实现类 PhoneCharger implements PowerSocket——重写 supplyPower()，实现\"充电\"",
          "使用接口类型变量——PowerSocket device = new Kettle()",
          "调用 device.supplyPower()——JVM 发现实际对象是 Kettle，执行 Kettle 的 supplyPower()",
          "更换实现——device = new Lamp()，device.supplyPower() → 执行 Lamp 的 supplyPower()",
          "接口不变，行为不同——这就是接口多态的核心价值"
        ]
      },
      exercises: [
        {
          question: "解释抽象类和接口在\"定义规则\"方面的相同点和不同点。",
          answer: "相同点：① 都不能直接用 new 实例化；② 都用于定义规则（方法头），等待子类/实现类来完成方法体；③ 都支持多态（通过上转型对象/接口引用调用子类方法）。\n不同点：① 抽象类用 extends 继承（单继承），接口用 implements 实现（可实现多个）；② 抽象类可以有构造方法和普通方法，接口没有构造方法（方法默认 public abstract）；③ 抽象类可以有普通变量，接口中的变量默认是 public static final 常量。\n解题思路：记住\"抽象类是半成品（可有普通方法），接口是纯规则（纯抽象）\"。"
        },
        {
          question: "定义一个抽象类 Employee（员工），包含抽象方法 calculateSalary()。定义两个子类 FullTimeEmployee（月薪 = 基本工资 + 奖金）和 PartTimeEmployee（时薪 × 工作小时数），写出完整代码。",
          answer: "abstract class Employee { String name; Employee(String name) { this.name = name; } public abstract double calculateSalary(); }\nclass FullTimeEmployee extends Employee { double base, bonus; FullTimeEmployee(String n, double b, double bo) { super(n); base=b; bonus=bo; } public double calculateSalary() { return base + bonus; } }\nclass PartTimeEmployee extends Employee { double hourlyRate; int hours; PartTimeEmployee(String n, double r, int h) { super(n); hourlyRate=r; hours=h; } public double calculateSalary() { return hourlyRate * hours; } }\n解题思路：Employee 定义\"计算工资\"的规则，两个子类按自己的计薪方式实现。"
        },
        {
          question: "判断题——\"子类继承父类时，可访问父类的所有成员，包括 private 成员。\"这个说法对吗？为什么？",
          answer: "错误。子类不能直接访问父类的 private 成员（虽然子类对象内存中确实包含它们）。如果父类提供了 public 的 get/set 访问器，子类可以通过访问器间接操作 private 属性。\n解题思路：继承 ≠ 全部可见。private = 本类独有，子类看不到。"
        },
        {
          question: "以下代码有什么问题？修正它。\ninterface Printer { void print(); public void show() { System.out.println(\"Hello\"); } }",
          answer: "接口中的方法不能有方法体（Java 8 之前）。show() 有大括号和方法体是错误的。修正：去掉方法体改为 void show(); 或者在 Java 8+ 中使用 default 关键字：default void show() { ... }。\n解题思路：接口中的方法默认是 public abstract——只有方法头，没有方法体。"
        },
        {
          question: "用\"插座\"类比解释接口在编程中的作用。为什么说接口\"传递的是参数\"？",
          answer: "插座（接口）只提供电（方法签名/能力），水壶插上烧水、台灯插上照亮、充电器插上充电——这些不同的物件就是不同的实现类。说\"传递的是参数\"，意思是在编程中，不同的实现类对象传入接口类型的参数，就能触发不同的行为逻辑。例如一个方法 process(PowerSocket socket)，传 Kettle 进来就烧水，传 Lamp 进来就照亮——同一个接口参数，不同实现对象，不同结果。\n解题思路：接口 = 万能插座；实现类 = 不同电器；参数 = 你选择插哪个电器。"
        }
      ],
      conclusion: [
        "抽象类和接口的本质都是\"定义规则\"——告诉子类/实现类\"你必须做什么\"，但不规定\"怎么做\"。这种\"规则与实现分离\"的思想是面向对象设计的核心。",
        "从抽象类到接口是一个自然的进化——抽象类还可以包含普通方法和构造方法（半成品），而接口是\"纯规则\"——只有方法头，连构造方法都没有。接口是抽象类的\"升级版\"。",
        "面向对象的知识是一条逻辑线——从类到继承，从重写到上转型，从多态到抽象类，再到接口。每个概念都是为了解决前一个概念无法解决的问题。顺着这条线理解，就不会觉得知识点是孤立的。",
        "\"插座类比\"是理解接口最好的方式——插座（接口）不变，插上去的电器（实现类）不同，完成的功能（方法体）不同。这就是面向接口编程的核心。",
        "老师建议静下心来用一个综合项目串联所有知识点（for 循环 + 方法 + 抽象类 + 接口 + 继承 + 多态）——能用一个项目把这些都用上，说明真的学通了。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "抽象类",
        "上转型",
        "规则定义",
        "接口",
        "interface",
        "参数传递",
        "包",
        "重写可见性",
        "多态总结"
      ],
      cardSummary: "课堂首先通过代码演示了抽象类的完整工作流程——抽象父类定义 getID() 规则，Student 和 Teacher 子类分别实现自己的 ID 生成方式，通过上转型对象（People p = new Student()）来调用。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-interface-syntax",
      title: "Java 接口详解与基础课程总结",
      chapter: "Java 类与对象 → 接口",
      date: "2025-10-30",
      tags: [
        "接口",
        "interface",
        "implements",
        "抽象方法",
        "常量",
        "多继承",
        "UML",
        "课程总结",
        "寒假学习建议"
      ],
      summary: [
        "老师首先宣布本节课是 Java 基础入门的最后一章——基础 Java 到此结束，后续还有高级 Java（GUI 编程 + 网络编程）。",
        "正式讲解接口的语法结构——用 interface 关键字声明，接口体包含常量定义和抽象方法声明，方法没有方法体、以分号结尾。",
        "重点强调了接口的隐式规则——接口中的变量默认是 public static final（公有的静态常量），方法默认是 public abstract（公有抽象方法）。",
        "通过问答互动帮助学生理解：接口中的方法不能被 static 和 final 修饰（因为需要被子类重写实现），原因与抽象类相同。",
        "讲解了类通过 implements 关键字实现接口（可实现多个、用逗号分隔），以及接口之间可以通过 extends 继承（产生子接口）。",
        "用\"动物会游泳\"的例子解释接口的实际用途——Animal 父类定义共有的 makeSound()，Swimmable 接口定义游泳能力，只有会游泳的动物才实现 Swimmable 接口，从而用接口弥补 Java 单继承的不足。"
      ],
      keyPoints: [
        {
          title: "接口的声明语法",
          content: "接口的声明语法 接口（Interface）是用 interface 关键字声明的特殊类型。它的结构类似于类，但更加\"纯粹\"——只包含常量的定义和抽象方法的声明。 > \"你会发现现在什么东西都是——无论是方法也好，类也好——都有一个地方是声明，一个地方是体结构。接口也是一样：interface 接口名是声明，花括号里面是接口体。\"",
          javaCompare: "接口强调规则和能力，适合表达部分类才具备的特性；普通父类更适合放所有子类共有的内容。",
          id: "kp-0-x",
          short: "接口的声明语法 接口（Interface）是用 interface 关键字声明的特殊类型。它的结构类似于类，但更加\"纯粹\"——只包含常量的定义和抽象方法的声明。……",
          mistake: ""
        },
        {
          title: "接口中变量和方法的隐式规则",
          content: "接口中变量和方法的隐式规则 接口中的变量和方法有默认的修饰符——即使不写，Java 编译器也会自动添加。这是接口最重要的规则之一。 接口中定义的所有变量默认都是 public static final 的——即：公有的、静态的、不可修改的常量。 规则： public——任何地方都能访问 static——属于接口本身，通过接口名直接访问（Constants.MAX） final——常量，赋值后不可修改 接口中定义的所有方法默认都是 public abstract 的——即：公有的、抽象的、没有方法体的方法。 课堂互动——关键辨析 老师通过问答反复训练学生识别\"前面省略了什么\"： > 老师：\"void add 前面省略了什么东西？\" > 学生：\"public static…？\" > 老师：\"不对！接口方法默认的是 public abstract！\" > 老师：\"那 float sum 前面省略的是谁？\" > 学生：\"……\" > 老师：\"不都一样是方法头吗？方法头前面省略的都是 publ...",
          javaCompare: "接口强调规则和能力，适合表达部分类才具备的特性；普通父类更适合放所有子类共有的内容。",
          id: "kp-1-x",
          short: "接口中变量和方法的隐式规则 接口中的变量和方法有默认的修饰符——即使不写，Java 编译器也会自动添加。这是接口最重要的规则之一。 接口中定义的所有变量默认都是……",
          mistake: ""
        },
        {
          title: "类实现接口——implements 关键字",
          content: "类实现接口——implements 关键字 类通过 implements 关键字来实现接口。一个类可以实现多个接口（用逗号分隔），这是 Java 弥补单继承不足的关键机制。 > \"接口跟正常的父类不一样——它叫 implements，意思是'我去实现它'，去实现它的规则、实现它的要求。extends 是扩展——在已有的基础上增加。接口没有基础，只有规则——所以你要去实现它。\"",
          javaCompare: "接口强调规则和能力，适合表达部分类才具备的特性；普通父类更适合放所有子类共有的内容。",
          id: "kp-2-implements",
          short: "类实现接口——implements 关键字 类通过 implements 关键字来实现接口。一个类可以实现多个接口（用逗号分隔），这是 Java 弥补单继承不足……",
          mistake: ""
        },
        {
          title: "接口如何弥补 Java 单继承——共性放父类，特性放接口",
          content: "接口如何弥补 Java 单继承——共性放父类，特性放接口 Java 是单继承（一个类只能有一个父类），但通过接口的多实现机制，可以达到类似\"多继承\"的效果。 设计原则： 共性的东西 → 放在父类中（用 extends 继承） 特性的东西 → 放在接口中（用 implements 实现） 课堂经典案例——动物与游泳能力 > \"Animal 父类中定义所有动物都有的 makeSound()——这是共性。但并非所有动物都会游泳——鸡一定不会游泳，狗会游泳（狗刨），猫有的会有的不会。所以'游泳'不能作为 Animal 的抽象方法，而应该单独定义成一个 Swimmable 接口。会游泳的动物就去实现它。\" > \"这就实现了多继承的效果——Dog 既有 Animal 的共性（makeSound），又有 Swimmable 的特性（swim）。虽然 Java 没有多继承，但通过'单继承父类 + 多实现接口'，达到了同样的目的。\" > \"共性的放父类里（common），特殊的放接口里（specia...",
          javaCompare: "接口强调规则和能力，适合表达部分类才具备的特性；普通父类更适合放所有子类共有的内容。",
          id: "kp-3-java",
          short: "接口如何弥补 Java 单继承——共性放父类，特性放接口 Java 是单继承（一个类只能有一个父类），但通过接口的多实现机制，可以达到类似\"多继承\"的效果。 设……",
          mistake: ""
        },
        {
          title: "接口可以继承接口",
          content: "接口可以继承接口 接口之间也可以通过 extends 关键字来继承——一个接口可以继承另一个接口（或同时继承多个接口），从而产生子接口。",
          javaCompare: "接口强调规则和能力，适合表达部分类才具备的特性；普通父类更适合放所有子类共有的内容。",
          id: "kp-4-x",
          short: "接口可以继承接口 接口之间也可以通过 extends 关键字来继承——一个接口可以继承另一个接口（或同时继承多个接口），从而产生子接口。……",
          mistake: ""
        },
        {
          title: "接口在架构中的位置——API 的顶层设计",
          content: "接口在架构中的位置——API 的顶层设计 > \"Java 当中的接口都在相应的包中。你去看 API 的顶层——全都是抽象类和接口，都是定义规则的地方。好几层都是接口和抽象类，然后才到具体的实现类。\" 这说明在真实的 Java 类库设计中，接口是架构的最顶层： java.util.List（接口）→ ArrayList、LinkedList（实现类） java.util.Map（接口）→ HashMap、TreeMap（实现类） java.sql.Connection（接口）→ 各数据库厂商的实现类 > \"一开始搭建系统的时候，先铺好规则——怎么去做。具体怎么做？再用码农去实现。架构师设计规则，程序员实现规则。\"",
          javaCompare: "接口强调规则和能力，适合表达部分类才具备的特性；普通父类更适合放所有子类共有的内容。",
          id: "kp-5-api",
          short: "接口在架构中的位置——API 的顶层设计 > \"Java 当中的接口都在相应的包中。你去看 API 的顶层——全都是抽象类和接口，都是定义规则的地方。好几层都是……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "接口的完整声明和使用",
          code: "// 接口——定义规则\npublic interface USB {\n    // 常量——默认 public static final\n    double USB2_SPEED = 480;     // USB 2.0 传输速度（Mbps）\n    double USB3_SPEED = 5000;    // USB 3.0 传输速度（Mbps）\n\n    // 抽象方法——默认 public abstract\n    void connect();              // 连接设备\n    void transferData();         // 传输数据\n    void disconnect();           // 断开连接\n}\n\n// 实现类——U 盘\npublic class FlashDrive implements USB {\n    private String name;\n\n    public FlashDrive(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public void connect() {\n        System.out.println(name + \" U盘已连接\");\n    }\n\n    @Override\n    public void transferData() {\n        System.out.println(name + \" U盘正在传输数据，速度：\" + USB3_SPEED + \"Mbps\");\n    }\n\n    @Override\n    public void disconnect() {\n        System.out.println(name + \" U盘已安全弹出\");\n    }\n}\n\n// 实现类——移动硬盘\npublic class ExternalHDD implements USB {\n    private String name;\n\n    public ExternalHDD(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public void connect() {\n        System.out.println(name + \" 移动硬盘已连接\");\n    }\n\n    @Override\n    public void transferData() {\n        System.out.println(name + \" 移动硬盘正在传输数据...\");\n    }\n\n    @Override\n    public void disconnect() {\n        System.out.println(name + \" 移动硬盘已安全弹出\");\n    }\n}\n\n// 测试类\npublic class Test {\n    public static void main(String[] args) {\n        USB device1 = new FlashDrive(\"金士顿\");\n        USB device2 = new ExternalHDD(\"希捷\");\n\n        device1.connect();       // 金士顿 U盘已连接\n        device1.transferData();  // 金士顿 U盘正在传输数据，速度：5000.0Mbps\n        device1.disconnect();    // 金士顿 U盘已安全弹出\n\n        System.out.println();\n\n        device2.connect();       // 希捷 移动硬盘已连接\n        device2.transferData();  // 希捷 移动硬盘正在传输数据...\n        device2.disconnect();    // 希捷 移动硬盘已安全弹出\n    }\n}",
          explanation: "USB 接口定义了三个规则（connect/transferData/disconnect）和一个常量 FlashDrive 和 ExternalHDD 各自按自己的方式实现这三个规则 接口类型变量 USB device 可以指向任何实现了 USB 接口的类的对象"
        },
        {
          title: "单继承 + 多接口实现——模拟多继承",
          code: "// 父类——共性\npublic abstract class Animal {\n    protected String name;\n\n    public Animal(String name) {\n        this.name = name;\n    }\n\n    public abstract void makeSound();  // 所有动物都会叫\n\n    public void eat() {\n        System.out.println(name + \" 在吃东西\");\n    }\n}\n\n// 接口 1——飞行能力\npublic interface Flyable {\n    void fly();\n}\n\n// 接口 2——游泳能力\npublic interface Swimmable {\n    void swim();\n}\n\n// 接口 3——爬树能力\npublic interface Climbable {\n    void climb();\n}\n\n// 鸭子——会叫（Animal）+ 会飞 + 会游泳\npublic class Duck extends Animal implements Flyable, Swimmable {\n    public Duck(String name) { super(name); }\n\n    @Override public void makeSound() { System.out.println(name + \" 嘎嘎叫\"); }\n    @Override public void fly() { System.out.println(name + \" 在飞\"); }\n    @Override public void swim() { System.out.println(name + \" 在游泳\"); }\n}\n\n// 猫——会叫（Animal）+ 会爬树\npublic class Cat extends Animal implements Climbable {\n    public Cat(String name) { super(name); }\n\n    @Override public void makeSound() { System.out.println(name + \" 喵喵叫\"); }\n    @Override public void climb() { System.out.println(name + \" 在爬树\"); }\n}\n\n// 企鹅——会叫（Animal）+ 会游泳（但不会飞！）\npublic class Penguin extends Animal implements Swimmable {\n    public Penguin(String name) { super(name); }\n\n    @Override public void makeSound() { System.out.println(name + \" 嘎嘎叫\"); }\n    @Override public void swim() { System.out.println(name + \" 在水中快速游动\"); }\n}\n\n// 测试类\npublic class Test {\n    public static void main(String[] args) {\n        Duck duck = new Duck(\"唐老鸭\");\n        Cat cat = new Cat(\"汤姆\");\n        Penguin penguin = new Penguin(\"企鹅\");\n\n        System.out.println(\"=== 鸭子 ===\");\n        duck.makeSound();\n        duck.fly();\n        duck.swim();\n        duck.eat();\n\n        System.out.println(\"\\n=== 猫 ===\");\n        cat.makeSound();\n        cat.climb();\n        cat.eat();\n\n        System.out.println(\"\\n=== 企鹅 ===\");\n        penguin.makeSound();\n        penguin.swim();\n        penguin.eat();\n    }\n}",
          explanation: "每个动物通过 extends Animal 获得共性的 makeSound() 和 eat() 各自通过 implements 接口 获得特长能力 鸭子实现了两个接口（飞 + 游泳），猫只实现了一个（爬树） 这就是\"共性放父类，特性放接口\"的设计模式"
        },
        {
          title: "接口继承接口——构建接口体系",
          code: "// 基础接口——最基本的打印能力\npublic interface Printable {\n    void print(String content);\n}\n\n// 扩展接口 1——扫描能力（继承 Printable）\npublic interface Scannable extends Printable {\n    void scan();  // 新增扫描能力\n    // 同时继承了 print() 方法\n}\n\n// 扩展接口 2——传真能力（继承 Printable）\npublic interface Faxable extends Printable {\n    void fax(String content, String destination);  // 新增传真能力\n}\n\n// 顶级接口——同时继承三个接口（多功能一体机）\npublic interface MultiFunctionPrinter extends Printable, Scannable, Faxable {\n    void powerOn();   // 新增开机\n    void powerOff();  // 新增关机\n    // 同时继承了 print()、scan()、fax()\n}\n\n// 实现顶级接口的类——多功能一体机\npublic class OfficePrinter implements MultiFunctionPrinter {\n    @Override public void powerOn() { System.out.println(\"打印机开机\"); }\n    @Override public void powerOff() { System.out.println(\"打印机关机\"); }\n    @Override public void print(String c) { System.out.println(\"打印：\" + c); }\n    @Override public void scan() { System.out.println(\"扫描文档...\"); }\n    @Override public void fax(String c, String d) { System.out.println(\"传真至\" + d + \"：\" + c); }\n}\n\n// 测试\npublic class Test {\n    public static void main(String[] args) {\n        OfficePrinter printer = new OfficePrinter();\n        printer.powerOn();\n        printer.print(\"年度报告.pdf\");\n        printer.scan();\n        printer.fax(\"合同.doc\", \"北京办公室\");\n        printer.powerOff();\n    }\n}",
          explanation: "接口通过多继承 extends A, B, C 可以组合多个接口的能力，形成\"接口树\"。最终实现类只需要 implements 一个顶层接口，就必须实现所有层级中定义的全部抽象方法。"
        }
      ],
      quiz: [
        {
          question: "以下哪个关键字用于声明一个接口？",
          options: [
            "class",
            "abstract",
            "interface",
            "implements"
          ],
          answer: "interface",
          explanation: "interface 是声明接口的关键字，implements 是类实现接口的关键字。"
        },
        {
          question: "接口中定义的方法默认的修饰符是什么？",
          options: [
            "public static",
            "public abstract",
            "protected abstract",
            "private static"
          ],
          answer: "public abstract",
          explanation: "接口中的方法默认是 public abstract——公有且抽象的。即使不写，编译器也会自动添加。"
        },
        {
          question: "接口中定义的变量默认的修饰符是什么？",
          options: [
            "public static final",
            "private final",
            "protected static",
            "没有默认修饰符"
          ],
          answer: "public static final",
          explanation: "接口中的变量默认是 public static final——公有的静态常量。这意味着它们必须初始化且不可修改。"
        },
        {
          question: "一个类可以实现几个接口？",
          options: [
            "只能1个",
            "最多2个",
            "最多3个",
            "多个（没有限制）"
          ],
          answer: "多个（没有限制）",
          explanation: "一个类可以实现多个接口，用逗号分隔。这正是 Java 弥补单继承不足的机制。"
        },
        {
          question: "以下关于接口和抽象类的说法，正确的是？",
          options: [
            "接口可以有构造方法",
            "抽象类不能有构造方法",
            "接口中的方法都不能有方法体",
            "抽象类可以被 final 修饰"
          ],
          answer: "接口中的方法都不能有方法体",
          explanation: "接口中的方法都没有方法体（Java 8 之前）。A 错在接口没有构造方法，B 错在抽象类可以有构造方法，D 错在抽象类不能被 final 修饰（因为需要被子类继承）。"
        }
      ],
      dragMatch: [
        {
          left: "interface",
          right: "声明接口的关键字，接口中只能包含常量和抽象方法"
        },
        {
          left: "implements",
          right: "类实现接口的关键字，一个类可以实现多个接口"
        },
        {
          left: "public abstract",
          right: "接口中方法的默认修饰符（隐式规则）"
        },
        {
          left: "public static final",
          right: "接口中变量的默认修饰符（隐式规则）"
        },
        {
          left: "extends（接口继承）",
          right: "一个接口可以继承另一个（或多于一个）接口"
        },
        {
          left: "共性（common）",
          right: "所有子类都有的特征 → 放在父类（extends）"
        },
        {
          left: "特性（special）",
          right: "部分子类才有的能力 → 放在接口（implements）"
        },
        {
          left: "单继承",
          right: "Java 中一个类只能有一个父类"
        },
        {
          left: "多实现",
          right: "Java 中一个类可以实现多个接口（弥补单继承不足）"
        },
        {
          left: "UML 接口标识",
          right: "接口名上方标注 <<interface>>，用虚线空心三角表示实现关系"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "需求分析——\"系统需要打印和扫描功能，但不是所有设备都支持扫描\"",
          "定义 Printable 接口——声明 void print(String content) 抽象方法",
          "定义 Scannable 接口——声明 void scan() 抽象方法",
          "普通打印机类——class Printer implements Printable（只实现打印）",
          "多功能一体机类——class MFP implements Printable, Scannable（两个都实现）",
          "使用接口类型变量——Printable p = new MFP()",
          "调用 p.print(\"文档\") → 多态——执行 MFP 的 print()",
          "如果需要扫描——将 p 强制转换为 Scannable → ((Scannable) p).scan()"
        ]
      },
      exercises: [
        {
          question: "以下代码存在哪些错误？逐一指出并修正。\ninterface Animal { void eat() { System.out.println(\"吃\"); } public int LEGS; }\nclass Dog implements Animal { }",
          answer: "有两个错误。① eat() 不能有方法体——接口方法只有方法头，应改为 void eat(); ② LEGS 变量未初始化——接口中的变量是常量（final），必须赋初值，如 public int LEGS = 4; ③ Dog 类没有实现 eat() 方法——必须重写，或把 Dog 声明为 abstract。\n解题思路：接口三要素——方法无体、变量必初始化、实现类必须重写所有方法。"
        },
        {
          question: "定义一个 Flyable 接口（方法 fly()）和一个 Swimmable 接口（方法 swim()）。定义 Duck 类同时实现这两个接口。写出完整代码并测试。",
          answer: "interface Flyable { void fly(); }\ninterface Swimmable { void swim(); }\nclass Duck implements Flyable, Swimmable {\n    public void fly() { System.out.println(\"鸭子在飞\"); }\n    public void swim() { System.out.println(\"鸭子在游泳\"); }\n}\n解题思路：用 implements 关键字，多个接口用逗号分隔。必须重写所有接口的所有抽象方法。"
        },
        {
          question: "解释为什么 Java 设计了接口（interface）——它解决了什么问题？",
          answer: "Java 是单继承语言（一个类只能有一个父类），但实际开发中经常需要\"多继承\"的效果——一个类需要具备多种能力。接口解决了这个问题：一个类可以同时实现多个接口，从而获得多种行为能力。此外，接口提供了更纯粹的\"规则定义\"机制——它比抽象类更抽象（没有构造方法、没有普通方法），强制实现类遵循统一规范。\n解题思路：单继承的不足 → 接口的多实现来弥补。\"共性放父类，特性放接口\"。"
        },
        {
          question: "判断题——\"接口可以继承多个接口，所以接口支持多继承。\"这个说法对吗？",
          answer: "练习题 4：判断题——\"接口可以继承多个接口，所以接口支持多继承。\"这个说法对吗？\n正确答案：对。接口之间通过 extends 关键字可以同时继承多个接口（interface C extends A, B { }）。注意区分——类是单继承（只能 extends 一个类），但接口可以多继承接口。\n解题思路：类的 extends = 单继承；接口的 extends = 可以多继承接口。"
        },
        {
          question: "设计一个简单的\"支付系统\"——定义 Payable 接口（方法 pay(double amount)），编写三个实现类：AliPay、WeChatPay、CreditCard，各自实现 pay() 方法（输出不同的支付信息）。用接口类型数组统一处理。",
          answer: "interface Payable { void pay(double amount); }\nclass AliPay implements Payable { public void pay(double a) { System.out.println(\"支付宝支付：\" + a + \"元\"); } }\nclass WeChatPay implements Payable { public void pay(double a) { System.out.println(\"微信支付：\" + a + \"元\"); } }\nclass CreditCard implements Payable { public void pay(double a) { System.out.println(\"信用卡支付：\" + a + \"元\"); } }\n// 测试——接口数组统一处理\nPayable[] methods = {new AliPay(), new WeChatPay(), new CreditCard()};\nfor (Payable p : methods) { p.pay(100.0); }\n解题思路：定义统一接口 → 各自实现 → 用接口类型数组统一调用 → 多态自动匹配。"
        }
      ],
      conclusion: [
        "本节课是 Java 面向对象基础的收官——接口是整个面向对象知识体系的\"最后一环\"。从类到对象，从继承到多态，从抽象类到接口——这是一条完整的逻辑链。接口是最纯粹的\"规则定义者\"。",
        "接口中最容易混淆的是隐式修饰符——变量默认 public static final（常量）、方法默认 public abstract（抽象方法）。这两个规则必须烂熟于心。",
        "接口弥补单继承的核心思想是\"共性放父类，特性放接口\"——extends 一个父类获得共有能力，implements 多个接口获得特殊能力。这就是 Java 版的\"多继承\"。",
        "学完本节课，Java 面向对象基础（基础 Java）全部结束。后续高级 Java 包括 GUI 编程和网络编程，老师建议寒假自学。同时建议学习 MySQL 数据库和 JDBC，尝试做一个小的管理信息系统。",
        "老师提醒：平时成绩和考试成绩各占 50%，笔记会被检查并送成绩。考试答题要紧扣题干关键字，不要空着或乱写——把相关的知识点写上去也能拿一部分分数。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "接口",
        "interface",
        "implements",
        "抽象方法",
        "常量",
        "多继承",
        "UML",
        "课程总结",
        "寒假学习建议"
      ],
      cardSummary: "老师首先宣布本节课是 Java 基础入门的最后一章——基础 Java 到此结束，后续还有高级 Java（GUI 编程 + 网络编程）。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    },

{
      id: "java-interface-callback",
      title: "接口回调详解与课程收尾",
      chapter: "Java 类与对象 → 接口 → 接口回调",
      date: "2025-10-30",
      tags: [
        "接口回调",
        "回调机制",
        "引用",
        "接口实例化",
        "上转型",
        "多态",
        "考试安排",
        "作业安排"
      ],
      summary: [
        "课堂核心知识点是接口回调（Interface Callback）——实现接口的类创建的对象引用，可以赋值给接口类型的变量，接口变量通过这种方式调用实现类重写后的方法。",
        "老师用\"孩子给父亲花钱\"的类比解释回调——孩子（子类/实现类）可以给父亲（父类/接口）实例化，让父亲来做事情，\"虽然是父亲在做事，但用的是孩子的能力\"。",
        "解释了为什么接口不能实例化——接口只有方法头没有方法体，无法确定具体行为，所以不能用 new 创建接口对象。但可以通过实现类的对象赋值给接口变量来使用。",
        "用\"老师布置任务，学生完成并汇报\"的案例解释回调机制——老师（接口/调用方）布置任务（定义方法头），学生（实现类）完成任务（实现方法体），老师调用学生的成果（回调）。",
        "老师强调接口回调虽然考试不考，但编程时\"100% 会用\"——它是多学科交叉的关键技术，在多线程、事件监听、网络编程中无处不在。"
      ],
      keyPoints: [
        {
          title: "什么是接口回调（Interface Callback）",
          content: "这个知识点是什么？\n接口回调（Callback）是指：可以把实现某一接口的类创建的对象的引用赋值给该接口类型的变量声明，然后通过接口变量调用该对象重写后的接口方法。\n简单来说就是——接口变量引用实现类对象，通过接口调用实现类的方法。\n基本语法\n// 1. 定义接口\npublic interface Callback {\n    void onComplete(String result);\n}\n// 2. 实现类——实现接口\npublic class MyTask implements Callback {\n    @Override\n    public void onComplete(String result) {\n        System.out.println(\"任务完成！结果：\" + result);\n    }\n}\n// 3. 接口回调——接口变量引用实现类对象\nCallback cb = new MyTask();     // 将实现类对象的引用赋值给接口变量\ncb.onComplete(\"数据处理完毕\");   // 通过接口变量调用实现类的方法\n课堂中的理解方式\n\"可以把实现某一接口的类创建的对象的引用，赋值给该接口变量的声明。接口通过这种方式调用被类重写的接口方法。\"\n这就是接口回调的本质：声明是接口类型，实际执行的是实现类的方法。\n\"引用\"的概念\n\"将一个对象赋值给另一个对象时，后者就是前者的引用，二者指向同一地址。就像一个人有大名、小名、外号——不同的称呼指向同一个人。\"\nStudent s = new Student(\"小明\");\nPeople p = s;  // p 是 s 的引用——两者指向同一个对象\n// s 和 p 指向同一个 Student 对象\n--",
          javaCompare: "接口回调是接口场景下的多态：声明看接口，运行看实现类。",
          id: "kp-0-interface-callback",
          short: "这个知识点是什么？\n接口回调（Callback）是指：可以把实现某一接口的类创建的对象的引用赋值给该接口类型的变量声明，然后通过接口变量调用该对象重写后的接口方……",
          mistake: ""
        },
        {
          title: "为什么接口和抽象类不能直接 new",
          content: "这个知识点是什么？\n接口和抽象类都不能使用 new 关键字直接创建对象。原因是它们都是不完整的——只有方法声明（方法头），没有方法实现（方法体）。\n为什么不能 new？\n\"接口只有方法头，没有方法体——它无法确定具体行为。就像你只知道'吃饭'这个概念，但不知道具体吃什么、怎么吃。只有具体的人（实现类）才知道怎么吃饭。\"\n抽象类同理\n\"抽象类同理——它定义规则但缺少实现。用子类给父类实例化，就像接口靠实现它的子类来实例化。\"\n正确的使用方式\n| 不能用 | 替代方式 |\n| new 接口名() ❌ | 接口名 变量 = new 实现类名() ✅ |\n| new 抽象类名() ❌ | 抽象类名 变量 = new 子类名() ✅ |\n口诀\n\"接口不能 new，但可以指向实现了它的类的对象。\"\n--",
          javaCompare: "接口和抽象类都不能直接 new，需要依靠具体实现类或子类完成实例化。",
          id: "kp-1-new",
          short: "这个知识点是什么？\n接口和抽象类都不能使用 new 关键字直接创建对象。原因是它们都是不完整的——只有方法声明（方法头），没有方法实现（方法体）。\n为什么不能 ……",
          mistake: ""
        },
        {
          title: "接口回调的两个经典生活类比",
          content: "类比 1：孩子给父亲花钱（上转型与回调）\n这是从上转型对象延伸来的经典类比：\n\"你长大了，在外面工作了，兜里揣着钱。回家过年——你爸伸手把钱掏出来。虽然是你爸在花这个钱、拿这个钱，但是钱是你挣的！\"\n映射到代码：\n| 生活场景 | Java 代码 |\n| 父亲（花儿子的钱） | FatherInterface f = new Child(); |\n| 父亲伸手拿钱 | f.spendMoney(); |\n| 实际花的是儿子的钱 | 执行的是 Child 重写后的方法 |\n\"孩子（子类/实现类）可以给父亲（父类/接口）实例化，让父亲来做事情——虽然是父亲在做，但用的是孩子的能力。\"\n类比 2：老师布置任务，学生完成并汇报\n\"老师布置一个任务——'去做一个关于环保的 PPT'。每个学生领到任务后用自己的方式去做。做完后，老师让学生上台汇报。老师调用了学生的成果——这就是回调。\"\n映射到代码：\n老师（接口）：定义了\"汇报\"的方法标准（方法头）\n学生（实现类）：各自用自己的方式完成并汇报（方法体实现）\n老师调用学生汇报：接口回调——接口变量调用实现类的方法\n// 接口——定义\"汇报\"的规则\npublic interface Reporter {\n    void report();  // 汇报方法\n}\n// 学生A——用自己的方式汇报\npublic class StudentA implements Reporter {\n    @Override\n    public void report() {\n        System.out.println(\"学生A：我用 PPT 做了一份详细的环保报告！\");\n    }\n}\n// 学生B——用不同的方式汇报\npublic class StudentB implements Reporter {\n    @Override\n    public void report() {\n        System.out.println(\"学生B：我拍了一个环保主题的短视频！\");\n    }...",
          javaCompare: "接口回调是接口场景下的多态：声明看接口，运行看实现类。",
          id: "kp-2-x",
          short: "类比 1：孩子给父亲花钱（上转型与回调）\n这是从上转型对象延伸来的经典类比：\n\"你长大了，在外面工作了，兜里揣着钱。回家过年——你爸伸手把钱掏出来。虽然是你爸在……",
          mistake: ""
        },
        {
          title: "接口回调的实际应用场景",
          content: "接口回调在真实开发中的重要性\n\"编程时接口间常传输数据，这是多学科交叉的关键。虽然考试不考，但编程的时候 100% 会用。\"\n典型应用场景\n| 应用场景 | 说明 | 例子 |\n| 事件监听 | 按钮点击、键盘输入等事件的处理 | button.setOnClickListener(listener) |\n| 多线程回调 | 线程执行完成后通知主线程 | FutureTask 的 done() 回调 |\n| 网络请求回调 | 网络请求完成后处理返回数据 | OkHttp 的 onResponse() |\n| 数据库查询回调 | 异步查询完成后处理结果 | Room 数据库的异步查询 |\n| 自定义回调 | 组件间的通信 | 自定义监听器接口 |\n简单的事件监听示例\n// 接口——定义\"点击\"的回调规则\npublic interface OnClickListener {\n    void onClick();  // 点击时被回调的方法\n}\n// 按钮——被点击时回调监听器\npublic class Button {\n    private OnClickListener listener;  // 接口类型变量\n    // 设置监听器（谁想监听按钮点击）\n    public void setOnClickListener(OnClickListener l) {\n        this.listener = l;\n    }\n    // 模拟按钮被点击\n    public void click() {\n        if (listener != null) {\n            listener.onClick();  // 回调！\n        }\n    }\n}\n// 使用\npublic class App {\n    public static void main(String[] args) {\n        Button btn = new Button();\n        // 设置回调——...",
          javaCompare: "接口回调是接口场景下的多态：声明看接口，运行看实现类。",
          id: "kp-3-x",
          short: "接口回调在真实开发中的重要性\n\"编程时接口间常传输数据，这是多学科交叉的关键。虽然考试不考，但编程的时候 100% 会用。\"\n典型应用场景\n| 应用场景 | 说……",
          mistake: ""
        },
        {
          title: "接口回调与上转型对象的关系",
          content: "这个知识点是什么？\n接口回调本质上是上转型对象在接口场景下的应用——接口变量引用实现类对象，通过接口变量调用实现类的方法。\n从类继承到接口回调的演进\n上转型对象（类继承）：\n  父类引用 = 子类对象      → Animal a = new Dog()\n接口回调（接口实现）：\n  接口引用 = 实现类对象     → Callback cb = new MyTask()\n两者本质相同——都是父类型引用指向子类型对象，调用子类型重写的方法。\n课堂总结\n\"子类给父类实例化叫上转型，实现类给接口实例化叫回调——本质一样，都是多态。区别只在于：上转型用的是 extends，回调用的是 implements。\"\n--",
          javaCompare: "接口回调是接口场景下的多态：声明看接口，运行看实现类。",
          id: "kp-4-x",
          short: "这个知识点是什么？\n接口回调本质上是上转型对象在接口场景下的应用——接口变量引用实现类对象，通过接口变量调用实现类的方法。\n从类继承到接口回调的演进\n上转型对象……",
          mistake: ""
        }
      ],
      codeExamples: [
        {
          title: "接口回调的基本模式",
          code: "// 接口——定义回调规则\npublic interface Callback {\n    void onSuccess(String message);   // 成功时的回调\n    void onFailure(String error);     // 失败时的回调\n}\n\n// 实现类——具体处理回调\npublic class MyHandler implements Callback {\n    @Override\n    public void onSuccess(String message) {\n        System.out.println(\"✅ 成功：\" + message);\n    }\n\n    @Override\n    public void onFailure(String error) {\n        System.out.println(\"❌ 失败：\" + error);\n    }\n}\n\n// 任务执行器——执行任务并通过回调通知结果\npublic class TaskRunner {\n    public void execute(int input, Callback callback) {\n        if (input > 0) {\n            // 处理成功 → 回调 onSuccess\n            callback.onSuccess(\"处理结果：\" + (input * 100));\n        } else {\n            // 处理失败 → 回调 onFailure\n            callback.onFailure(\"输入必须大于 0！\");\n        }\n    }\n}\n\n// 测试\npublic class Test {\n    public static void main(String[] args) {\n        TaskRunner runner = new TaskRunner();\n        MyHandler handler = new MyHandler();\n\n        // 接口回调——TaskRunner 在适当的时候调用 handler 的方法\n        runner.execute(5, handler);   // ✅ 成功：处理结果：500\n        runner.execute(-1, handler);  // ❌ 失败：输入必须大于 0！\n    }\n}",
          explanation: "TaskRunner.execute() 方法的第二个参数 Callback callback 是一个接口类型。传入 MyHandler 对象后，TaskRunner 内部通过 callback.onSuccess() 或 callback.onFailure() 来回调通知结果。TaskRunner 不关心谁在处理结果——只要它实现了 Callback 接口就行。\n提示：这就是\"回调\"的字面含义——TaskRunner 执行完后，反过来调用你传入的对象的某个方法。不是你去问 TaskRunner\"做完了吗\"，而是 TaskRunner 做好了主动通知你。"
        },
        {
          title: "模拟事件监听——按钮点击回调",
          code: "// 步骤 1：定义监听器接口\npublic interface OnClickListener {\n    void onClick(String buttonName);\n}\n\n// 步骤 2：按钮——被点击时回调监听器\npublic class Button {\n    private String name;\n    private OnClickListener listener;  // 接口类型——保存回调对象\n\n    public Button(String name) {\n        this.name = name;\n    }\n\n    // 注册监听器（告诉按钮\"被点击时通知谁\"）\n    public void setOnClickListener(OnClickListener l) {\n        this.listener = l;\n    }\n\n    // 模拟点击事件——点击时触发回调\n    public void performClick() {\n        System.out.println(\"[\" + name + \"] 按钮被按下...\");\n        if (listener != null) {\n            listener.onClick(name);  // ★ 回调！\n        }\n    }\n}\n\n// 步骤 3：界面——实现监听器接口，处理点击逻辑\npublic class LoginPage implements OnClickListener {\n    private Button loginBtn;\n    private Button cancelBtn;\n\n    public LoginPage() {\n        loginBtn = new Button(\"登录\");\n        cancelBtn = new Button(\"取消\");\n\n        // 注册回调——告诉按钮\"我来监听你的点击\"\n        loginBtn.setOnClickListener(this);\n        cancelBtn.setOnClickListener(this);\n    }\n\n    // 实现回调方法——所有按钮的点击都汇聚到这里\n    @Override\n    public void onClick(String buttonName) {\n        switch (buttonName) {\n            case \"登录\":\n                System.out.println(\"→ 执行登录逻辑：验证用户名和密码...\");\n                break;\n            case \"取消\":\n                System.out.println(\"→ 执行取消逻辑：清空表单并返回...\");\n                break;\n        }\n    }\n\n    public void simulate() {\n        loginBtn.performClick();\n        cancelBtn.performClick();\n    }\n}\n\n// 测试\npublic class Test {\n    public static void main(String[] args) {\n        LoginPage page = new LoginPage();\n        page.simulate();\n    }\n}",
          explanation: "- Button 不关心\"被点击后要做什么\"——这是调用方的事\n- LoginPage 注册自己作为监听器（setOnClickListener(this)）\n- 当按钮被点击时，自动回调 onClick() 方法\n- 这就是 Android、Swing、JavaFX 等 GUI 框架的核心机制\n提示：真正的 Android 开发中，你写的 button.setOnClickListener(...) 就是接口回调！这个例子几乎和真实代码一模一样。"
        },
        {
          title: "多线程任务完成后的回调",
          code: "// 回调接口——任务完成后的通知\npublic interface TaskCallback {\n    void onTaskCompleted(String taskName, long timeUsed);\n}\n\n// 耗时任务——执行完回调\npublic class LongTask {\n    public void run(String taskName, TaskCallback callback) {\n        System.out.println(\"开始执行：\" + taskName + \"...\");\n\n        // 模拟耗时操作\n        long start = System.currentTimeMillis();\n        try {\n            Thread.sleep(2000);  // 模拟耗时 2 秒\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        long end = System.currentTimeMillis();\n\n        // 任务完成 → 回调通知\n        callback.onTaskCompleted(taskName, end - start);\n    }\n}\n\n// 主程序——实现回调接口\npublic class MainApp implements TaskCallback {\n    // 收到回调通知后执行的逻辑\n    @Override\n    public void onTaskCompleted(String taskName, long timeUsed) {\n        System.out.println(\"【回调】\" + taskName + \" 完成！耗时：\" + timeUsed + \"ms\");\n        System.out.println(\"【回调】可以更新 UI 或继续下一步操作了\");\n    }\n\n    public static void main(String[] args) {\n        MainApp app = new MainApp();\n        LongTask task = new LongTask();\n\n        System.out.println(\"主线程：启动任务...\");\n        task.run(\"下载文件\", app);  // 传入 this 作为回调对象\n        System.out.println(\"主线程：任务已启动，继续做其他事情...\");\n    }\n}",
          explanation: "实际项目中，耗时任务（下载文件、网络请求）通常异步执行。主程序不需要一直等着——它传入一个回调对象，任务完成后自动通知。这就是异步回调的基本模式。\n提示：你以后学 OkHttp、Retrofit 等网络库时，会大量使用这种模式——onResponse()、onFailure() 就是回调方法。"
        }
      ],
      quiz: [
        {
          question: "关于接口回调，以下说法正确的是？",
          options: [
            "接口回调需要特殊关键字",
            "接口变量可以指向实现类对象并调用其方法",
            "接口回调只能用在 GUI 编程中",
            "接口可以直接 new"
          ],
          answer: "接口变量可以指向实现类对象并调用其方法",
          explanation: "接口回调本质就是接口变量指向实现类对象，通过接口调用实现类的方法。不需要特殊关键字，应用场景远不止 GUI。"
        },
        {
          question: "以下代码的输出结果是什么？\ninterface A { void show(); }\nclass B implements A { public void show() { System.out.println(\"B\"); } }\npublic class Test { public static void main(String[] args) { A a = new B(); a.show(); } }",
          options: [
            "编译错误",
            "运行错误",
            "输出 \"B\"",
            "无输出"
          ],
          answer: "输出 \"B\"",
          explanation: "A a = new B() 是接口回调——接口变量 a 指向实现类 B 的对象，a.show() 调用的是 B 重写的 show()，输出 \"B\"。"
        },
        {
          question: "接口和抽象类都不能用 new 创建对象，根本原因是？",
          options: [
            "它们都是父类型",
            "它们的方法都是 private",
            "它们是不完整的（缺少方法实现）",
            "它们没有构造方法"
          ],
          answer: "它们是不完整的（缺少方法实现）",
          explanation: "接口和抽象类都有未实现的方法（抽象方法），对象必须是\"完整的\"才能创建。C 选项是根本原因。"
        },
        {
          question: "以下哪个场景最适合用接口回调实现？",
          options: [
            "计算两个数的和",
            "按钮被点击后执行一段逻辑",
            "打印一行文字",
            "声明一个常量"
          ],
          answer: "按钮被点击后执行一段逻辑",
          explanation: "按钮点击是典型的\"事件驱动\"场景——不知道用户什么时候点击，但点击后要自动执行一段逻辑。这正是回调的用武之地。"
        },
        {
          question: "关于接口回调中的\"引用\"，以下说法正确的是？",
          options: [
            "引用就是 new 一个对象",
            "引用指向对象的同一个内存地址",
            "一个对象只能有一个引用",
            "接口类型不能作为引用类型"
          ],
          answer: "引用指向对象的同一个内存地址",
          explanation: "引用指向对象的同一个内存地址——就像一个人可以有大名、小名、外号，不同称呼指向同一个人。\n```\n\n---"
        }
      ],
      dragMatch: [
        {
          left: "接口回调",
          right: "接口变量引用实现类对象，通过接口调用实现类的方法"
        },
        {
          left: "引用",
          right: "指向同一对象的\"别名\"，不同变量名指向同一块内存"
        },
        {
          left: "接口不能 new",
          right: "接口只有方法头，没有方法体，无法确定具体行为"
        },
        {
          left: "实现类实例化接口",
          right: "用实现类的对象赋值给接口变量，间接使用接口"
        },
        {
          left: "孩子给父亲花钱",
          right: "接口回调的生活类比——父亲花的是儿子挣的钱"
        },
        {
          left: "老师布置任务学生汇报",
          right: "接口回调的教学类比——老师调用学生的汇报成果"
        },
        {
          left: "事件监听",
          right: "接口回调最经典的应用——按钮点击、键盘输入等"
        },
        {
          left: "异步回调",
          right: "耗时任务完成后自动通知调用方——不在等待中阻塞主线程"
        },
        {
          left: "多态",
          right: "接口回调的本质——声明类型和实际类型不同，执行实际类型的方法"
        },
        {
          left: "NullPointerException",
          right: "接口变量为 null 时调用方法抛出的异常"
        }
      ],
      flow: {
        title: "课程流程",
        description: "展示该课程的核心知识点执行流程。",
        steps: [
          "老师定义\"汇报\"接口 Reporter——声明 void report() 方法（规则）",
          "学生 A 实现 Reporter——重写 report()：\"我用 PPT 汇报\"",
          "学生 B 实现 Reporter——重写 report()：\"我拍视频汇报\"",
          "老师类中有一个方法 callForReport(Reporter r)——参数是接口类型",
          "老师调用——callForReport(new StudentA()) → 回调 StudentA 的 report()",
          "老师调用——callForReport(new StudentB()) → 回调 StudentB 的 report()",
          "老师不需要知道学生做了什么——只要学生实现了 Reporter 接口就能\"汇报\""
        ]
      },
      exercises: [
        {
          question: "用一句话解释\"接口回调\"是什么。",
          answer: "接口回调就是把实现类对象的引用赋值给接口类型变量，通过接口变量调用实现类重写后的方法。\n解题思路：三个关键词——接口变量、实现类引用、调用重写方法。"
        },
        {
          question: "定义一个 DownloadListener 接口（onSuccess 和 onFailed 两个方法），写一个 FileDownloader 类，模拟下载完成后通过接口回调通知结果。",
          answer: "interface DownloadListener { void onSuccess(String file); void onFailed(String error); }\nclass FileDownloader {\n    public void download(String url, DownloadListener listener) {\n        if (url != null && url.startsWith(\"http\")) {\n            listener.onSuccess(\"文件下载完成：\" + url);\n        } else {\n            listener.onFailed(\"URL 格式错误：\" + url);\n        }\n    }\n}\n解题思路：接口定义回调规则 → 下载器接收回调对象 → 根据结果调用 onSuccess 或 onFailed。"
        },
        {
          question: "解释为什么接口不能 new，但可以通过实现类\"间接实例化\"。",
          answer: "接口只定义了方法头（规则），没有方法体（实现）。如果允许 new 接口，创建出来的对象调用方法时不知道执行什么逻辑。通过实现类\"间接实例化\"时，接口变量指向的是实现类的完整对象（包含方法体），所以可以正常调用。本质是利用了多态机制——接口类型的变量引用实现类对象。\n解题思路：不完整（不能 new） → 通过实现类补全 → 接口引用实现类对象。"
        },
        {
          question: "编写一个完整的例子——Lifecycle 接口定义 onStart() 和 onStop() 两个方法，Service 类实现该接口，Application 类通过接口回调管理 Service 的生命周期。",
          answer: "interface Lifecycle { void onStart(); void onStop(); }\nclass MyService implements Lifecycle {\n    public void onStart() { System.out.println(\"Service 启动——加载资源\"); }\n    public void onStop() { System.out.println(\"Service 停止——释放资源\"); }\n}\nclass Application {\n    public void launch(Lifecycle l) { l.onStart(); }  // 启动\n    public void shutdown(Lifecycle l) { l.onStop(); } // 停止\n}\n// 使用：\nApplication app = new Application();\nMyService service = new MyService();\napp.launch(service);   // Service 启动——加载资源\napp.shutdown(service); // Service 停止——释放资源\n解题思路：Application 通过 Lifecycle 接口管理 Service，不需要知道 Service 的具体类型。"
        },
        {
          question: "接口回调在 Android 开发中无处不在。假设你要实现一个按钮的点击功能，用接口回调的方式写出伪代码（不需要真实 Android API）。",
          answer: "interface OnClickListener { void onClick(); }\nclass Button {\n    private OnClickListener listener;\n    public void setOnClickListener(OnClickListener l) { this.listener = l; }\n    public void performClick() { if (listener != null) listener.onClick(); }\n}\n// 使用：\nButton btn = new Button();\nbtn.setOnClickListener(new OnClickListener() {\n    public void onClick() { System.out.println(\"跳转到下一页\"); }\n});\nbtn.performClick();  // 跳转到下一页\n解题思路：三步走——① 定义接口 ② 按钮持有接口引用 ③ 点击时回调。\n```\n\n---"
        }
      ],
      conclusion: [
        "接口回调是 Java 面向对象编程中的\"最后一公里\"——它让多态真正发挥威力。接口回调不是新语法，而是\"接口多态\"的另一种说法——接口变量引用实现类对象，调用实现类的方法。",
        "接口回调在真实开发中无处不在——Android 的按钮点击、网络请求的成功/失败处理、数据库的异步查询、第三方 SDK 的回调通知，全都是接口回调。考试不考但编程必用。",
        "理解接口回调最好的方式是记住\"孩子给父亲花钱\"这个类比——父亲（接口引用）花的是儿子（实现类对象）挣的钱（方法实现）。接口只是一个\"壳\"，真正的逻辑在实现类里。",
        "接口不能 new 的根本原因是它\"不完整\"——只有方法头没有方法体。就像你不能吃\"蔬菜\"这个概念，只能吃具体的番茄和白菜。但可以通过实现类间接使用接口——这叫面向接口编程。",
        "这门 Java 基础课到此全部结束。后续需要靠自学和实践来巩固——建议用一个综合项目把类、继承、多态、抽象类、接口、接口回调全部用上，这样才能真正融会贯通。"
      ],
      duration: "Java课程",
      level: "基础",
      keywords: [
        "接口回调",
        "回调机制",
        "引用",
        "接口实例化",
        "上转型",
        "多态",
        "考试安排",
        "作业安排"
      ],
      cardSummary: "课堂核心知识点是接口回调（Interface Callback）——实现接口的类创建的对象引用，可以赋值给接口类型的变量，接口变量通过这种方式调用实现类重写后的方法。",
      learningAdvice: "建议结合课堂笔记和代码练习来理解，多动手编写 Java 程序。"
    }];

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
