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
  flow: [
    "定义一个 class",
    "在类中写属性和方法",
    "使用 new 创建对象",
    "对象获得类中定义的属性",
    "对象可以调用类中定义的方法",
    "程序根据对象完成具体任务"
  ],
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
}