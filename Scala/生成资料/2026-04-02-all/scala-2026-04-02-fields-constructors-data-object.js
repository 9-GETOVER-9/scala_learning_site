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
  flow: [
    "对象调用字段 age",
    "表面上写 p.age",
    "底层调用 getter",
    "返回字段值",
    "如果写 p.age = 20",
    "底层调用 setter",
    "更新字段值"
  ],
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
}