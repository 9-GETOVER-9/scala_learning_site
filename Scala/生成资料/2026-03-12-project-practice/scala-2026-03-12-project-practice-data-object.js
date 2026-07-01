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
  flow: [
    "创建 Scala Project",
    "在 src 中创建 Scala class 或 object",
    "编写 object Main",
    "添加 def main(args: Array[String]): Unit",
    "在 main 中写运行代码",
    "点击运行",
    "查看控制台输出"
  ],
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
}