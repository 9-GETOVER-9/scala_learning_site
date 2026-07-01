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
  flow: [
    "父类定义抽象 def id",
    "子类定义 val id",
    "val 底层生成 getter",
    "getter 方法名与 def id 对应",
    "子类完成抽象方法实现",
    "对象可以访问 id"
  ],
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
}