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
  flow: [
    "写出 PlayTest(\"Tom\", 20)",
    "编译器查找 PlayTest 伴生对象",
    "找到 apply(name, age)",
    "apply 内部调用 new PlayTest(name, age)",
    "返回 PlayTest 类对象",
    "用对象调用类中的方法"
  ],
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
}