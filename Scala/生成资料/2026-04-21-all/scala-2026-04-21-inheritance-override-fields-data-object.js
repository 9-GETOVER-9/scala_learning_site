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
  flow: [
    "调用 new Student(\"Tom\", 1001)",
    "进入 Student 主构造器",
    "Student 主构造器接收 name 和 id",
    "通过 extends Person(name) 把 name 传给父类",
    "父类 Person 初始化 name",
    "子类 Student 初始化 id",
    "对象创建完成"
  ],
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
}