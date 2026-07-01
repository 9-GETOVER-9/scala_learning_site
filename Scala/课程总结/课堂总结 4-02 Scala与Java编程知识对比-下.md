# 课程总结：2026-04-02 Scala 与 Java 的编程知识讲解

## 1. 课程基本信息

* **课程 ID 建议：** `scala-class-object-field-constructor-java-compare`
* **课程标题：** 2026-04-02 Scala 与 Java 的编程知识讲解
* **所属章节：** Scala 类与对象、Scala 构造器
* **上课日期：** 2026-04-02
* **知识点标签：** Scala 类、Scala 对象、Java 对比、无参方法、访问器、修改器、字段、主构造器、辅助构造器、this、val、var、private
* **难度等级：** 入门到初级
* **适合对象：** 已学过 Java 类与对象基础，正在学习 Scala 面向对象语法的初学者
* **本节课一句话概括：** 本节课通过和 Java 对比，讲解 Scala 中类、对象、字段、方法调用、访问器、修改器、主构造器和辅助构造器的写法与思想。

> 说明：原始转写中存在若干识别错误，例如“辅路由器”“主路由器”根据上下文应为“辅助构造器”“主构造器”；“防器”根据上下文应理解为 Java 中的 getter/setter，Scala 中可整理为“访问器/修改器”。本总结已按 Scala 正确术语修正。

---

## 2. 课堂摘要

1. 本节课首先对比了 Java 和 Scala 中类与对象的组织方式，说明 Scala 中 `object` 常用作程序入口，而 `class` 更专注于描述对象的属性和行为。
2. 课堂中重点说明了 Scala 文件中可以定义多个类和多个对象，类与对象在概念上更加分离，不应把所有代码都堆在同一个类中。
3. 老师通过 Java 测试类和 Scala `object Main` 的对比，帮助学生理解程序入口 `main` 方法在两种语言中的使用差异。
4. 本节课讲解了 Scala 无参方法的写法和调用规则，并强调无参方法是否加括号应根据是否改变对象状态来判断。
5. 课堂中说明了 Scala 没有 Java 风格的 `++` 和 `--` 自增自减运算符，通常使用 `+= 1` 或自定义方法实现增加和减少。
6. 本节课重点讲解了 Scala 字段的特点：普通字段会自动生成访问器和修改器，`val` 字段只有访问器，`var` 字段既有访问器也有修改器。
7. 老师通过 Java 中手写 getter/setter 的例子，对比说明 Scala 可以用更少的代码表达相同含义。
8. 本节课最后讲解了主构造器和辅助构造器，说明 Scala 的主构造器直接写在类名之后，而辅助构造器必须通过 `this(...)` 调用已有构造器。

---

## 3. 本节课学习目标

学完本节课后，你应该能够：

1. 理解 Scala 中 `class` 和 `object` 的区别，知道它们分别适合表示什么。
2. 能说明 Scala 程序入口通常写在 `object` 中，而不是像 Java 一样必须放在某个测试类里。
3. 能定义一个简单 Scala 类，并在对象中创建该类的实例。
4. 能理解 Scala 中方法默认是公有的，并知道方法有参和无参时调用方式的差异。
5. 能解释为什么 Scala 中没有 `++` 和 `--`，并能用 `+= 1` 或方法实现自增效果。
6. 能理解访问器和修改器的概念，知道它们分别对应 Java 中的 getter 和 setter。
7. 能区分 `val` 字段、`var` 字段和 `private` 字段在访问器/修改器上的差异。
8. 能使用 `class Person(val name: String, var age: Int)` 这样的主构造器写法定义类。
9. 能编写一个简单的辅助构造器，并知道辅助构造器第一行必须调用其他构造器。
10. 能从 Java 写法迁移到 Scala 写法，减少样板代码，写出更简洁的面向对象程序。

---

## 4. 知识点详细整理

### 知识点 1：Scala 中 class 和 object 的区别

#### 这个知识点是什么？

在 Scala 中：

* `class` 用来定义类，是创建对象的模板。
* `object` 用来定义单例对象，一个 `object` 在程序中只有一个实例。
* 程序入口 `main` 方法通常写在 `object` 中。
* 一个 Scala 源文件中可以同时定义多个 `class` 和多个 `object`。

#### 为什么要学它？

如果学过 Java，很容易把所有代码都写进一个类里。但 Scala 更强调“类是类，对象是对象”。理解 `class` 和 `object` 的区别，是学习 Scala 面向对象编程的基础。

#### 基本语法

```scala
class Point {
  var x: Int = 0
  var y: Int = 0

  def move(dx: Int, dy: Int): Unit = {
    x = x + dx
    y = y + dy
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Point()
    p.move(2, 3)
    println(p.x)
    println(p.y)
  }
}
```

#### 课堂中的理解方式

老师强调：在 Scala 中，`Point` 类可以只负责坐标和移动方法，不需要把程序入口也放进去；程序入口可以单独放到一个 `object` 中。这样类的职责更干净，对象用于执行程序或组织工具方法。

#### 初学者容易犯的错误

1. 把 Java 的写法完全搬到 Scala 中，把所有内容都写到一个类里。
2. 不理解 `object Main` 是单例对象，以为它和 `class Main` 完全一样。
3. 忘记程序入口 `main` 方法通常写在 `object` 中。
4. 把 `class` 当作程序运行入口，而没有创建对象或定义 `main`。
5. 不知道一个 Scala 文件可以包含多个类和对象。

#### 正确示例

```scala
class Student {
  var name: String = "未命名"

  def sayHello(): Unit = {
    println("你好，我是 " + name)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val stu = new Student()
    stu.name = "Tom"
    stu.sayHello()
  }
}
```

#### 示例解释

1. `class Student` 定义一个学生类。
2. `var name` 是学生对象的字段。
3. `sayHello()` 是学生对象的方法。
4. `object Main` 是程序入口所在的单例对象。
5. `new Student()` 创建一个学生对象。
6. `stu.sayHello()` 调用对象的方法。

---

### 知识点 2：Scala 程序入口与 Java 程序入口的对比

#### 这个知识点是什么？

Java 中程序入口通常写成：

```java
public static void main(String[] args) {
    // 程序入口
}
```

Scala 中常见写法是：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    // 程序入口
  }
}
```

Scala 没有 Java 完全相同的 `static` 关键字，通常用 `object` 来放置程序入口或工具方法。

#### 为什么要学它？

很多同学从 Java 转到 Scala 时，会想找 `static main`。实际上 Scala 的 `object` 承担了类似“静态入口”的角色。理解这一点可以帮助学生顺利运行 Scala 程序。

#### 基本语法

```scala
object Main {
  def main(args: Array[String]): Unit = {
    println("Hello Scala")
  }
}
```

Scala 3 还支持更简洁的顶层入口写法，例如：

```scala
@main def run(): Unit = {
  println("Hello Scala 3")
}
```

> 如果课堂未明确 Scala 版本，建议先掌握通用写法：`object Main { def main(...) }`。

#### 课堂中的理解方式

老师通过 Java 测试类和 Scala 对象对比说明：Java 中常把 `main` 放在测试类里运行；Scala 中可以把执行入口放在 `object` 里，而普通类只保留自己的属性和方法。

#### 初学者容易犯的错误

1. 在 Scala 中写 `public static void main`。
2. 忘记把 `main` 放进 `object` 中。
3. 把 `Array[String]` 写成 Java 风格 `String[]`。
4. 不理解 `Unit` 类似 Java 中的 `void`。
5. 只写了类，没有写入口对象，导致不知道如何运行程序。

#### 正确示例

```scala
object AppMain {
  def main(args: Array[String]): Unit = {
    println("程序开始运行")
  }
}
```

#### 示例解释

1. `object AppMain` 定义程序入口对象。
2. `def main(args: Array[String]): Unit` 定义入口方法。
3. `Array[String]` 表示字符串数组参数。
4. `Unit` 表示该方法不返回有意义的值。
5. `println` 输出运行提示。

---

### 知识点 3：Scala 类中的字段必须初始化

#### 这个知识点是什么？

Scala 中定义类字段时，通常需要给字段一个初始值，或者通过构造器参数传入。

例如：

```scala
class Person {
  var age: Int = 0
  var name: String = ""
}
```

也可以写成：

```scala
class Person(var name: String, var age: Int)
```

#### 为什么要学它？

字段表示对象的状态。例如学生有姓名，账户有余额，坐标点有 x 和 y。如果字段没有合理初始化，对象创建出来后就可能处于不完整状态。

#### 基本语法

```scala
class 类名 {
  var 字段名: 类型 = 初始值
  val 常量字段名: 类型 = 初始值
}
```

示例：

```scala
class Counter {
  private var value: Int = 0
}
```

#### 课堂中的理解方式

老师提到“声明属性时必须初始化字段”。也就是说，类里面的变量不能只写一个名字就结束，通常要么给初始值，要么通过构造器参数提供值。

#### 初学者容易犯的错误

1. 只声明字段，不初始化。
2. 忘记给字符串字段初始值。
3. 不知道可以通过主构造器参数初始化字段。
4. 把 `val` 字段当成后续可以修改的变量。
5. 以为 `private var value = 0` 外部可以直接访问。

#### 正确示例

```scala
class Student {
  var name: String = "未命名"
  var score: Int = 0
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = new Student()
    println(s.name)
    println(s.score)
  }
}
```

#### 示例解释

1. `name` 字段初始化为 `"未命名"`。
2. `score` 字段初始化为 `0`。
3. `new Student()` 创建学生对象。
4. 输出字段时对象已经有默认状态。

---

### 知识点 4：无参方法与调用规则

#### 这个知识点是什么？

无参方法是没有参数的方法。Scala 中有两种常见写法：

```scala
def current: Int = value
```

或者：

```scala
def current(): Int = value
```

通常约定：

* 不改变对象状态、只是取值的方法，推荐不写括号。
* 会产生副作用或改变对象状态的方法，推荐写括号。

#### 为什么要学它？

Scala 的方法调用比 Java 灵活。如果不了解无参方法规则，容易在写代码时纠结“到底要不要写括号”。理解规则后，就能写出更符合 Scala 风格的代码。

#### 基本语法

```scala
class Counter {
  private var value = 0

  def current: Int = value

  def increment(): Unit = {
    value = value + 1
  }
}
```

调用：

```scala
val c = new Counter()
c.increment()
println(c.current)
```

#### 课堂中的理解方式

老师用“取值器”和“改值器”的思想解释括号：如果一个方法只是取当前值，不改变对象状态，可以不加括号；如果一个方法会改变对象状态，通常加括号，因为它更像一个动作。

#### 初学者容易犯的错误

1. 把所有无参方法都强行加括号或都不加括号。
2. 定义 `def current: Int` 后调用时写成 `current()`。
3. 定义 `def increment(): Unit` 后忘记调用括号，导致风格不清晰。
4. 不理解“是否改变对象状态”是判断括号风格的重要依据。
5. 从 Java 迁移时误以为方法后面必须有括号。

#### 正确示例

```scala
class Counter {
  private var value = 0

  def current: Int = value

  def increment(): Unit = {
    value = value + 1
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val counter = new Counter()

    counter.increment()
    println(counter.current)
  }
}
```

#### 示例解释

1. `value` 是私有字段，外部不能直接访问。
2. `current` 只是读取当前值，所以定义为无括号方法。
3. `increment()` 会改变 `value`，所以保留括号。
4. `counter.increment()` 让计数器加一。
5. `counter.current` 读取当前值。

---

### 知识点 5：Scala 没有 Java 风格的 `++` 和 `--`

#### 这个知识点是什么？

Java 中常见自增自减写法：

```java
i++;
i--;
```

Scala 中没有内置的 `++` 和 `--` 自增自减运算符。通常可以写成：

```scala
i += 1
i -= 1
```

前提是 `i` 必须是 `var`。

#### 为什么要学它？

很多 Java 初学者会习惯写 `i++`，但这在 Scala 中不能这样使用。掌握 Scala 的写法可以避免编译错误。

#### 基本语法

```scala
var i = 0

i += 1
i -= 1
```

也可以在类中自定义方法：

```scala
class Counter {
  private var value = 0

  def increment(): Unit = {
    value += 1
  }

  def decrement(): Unit = {
    value -= 1
  }
}
```

#### 课堂中的理解方式

老师提到 Scala 中没有“加加减减”，如果要实现加一或减一，可以自己定义 `increment` 或 `decrement` 方法。这也是面向对象中“把行为封装到方法里”的体现。

#### 初学者容易犯的错误

1. 在 Scala 中写 `i++`。
2. 对 `val` 使用 `+= 1`。
3. 忘记 `+=` 本质上需要重新赋值，因此变量要用 `var`。
4. 把 `++` 和集合拼接操作混淆。
5. 不会把自增逻辑封装进类的方法。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    var count = 0

    count += 1
    count += 1

    println(count)
  }
}
```

#### 示例解释

1. `var count = 0` 定义一个可变变量。
2. `count += 1` 表示让 `count` 增加 1。
3. 第二次 `count += 1` 后，值变成 2。
4. `println(count)` 输出最终结果。

---

### 知识点 6：访问器 Getter 与修改器 Setter

#### 这个知识点是什么？

在 Java 中，通常使用 getter 和 setter 访问或修改私有字段：

```java
getAge()
setAge(int age)
```

在 Scala 中，字段会自动生成访问器和修改器：

```scala
class Person {
  var age: Int = 0
}
```

外部可以写：

```scala
val p = new Person()
p.age = 20
println(p.age)
```

这看起来像直接访问字段，但底层思想上可以理解为通过访问器和修改器完成。

#### 为什么要学它？

Scala 语法比 Java 简洁很多。理解自动访问器和修改器，可以避免写大量重复的 getter/setter，也能理解 `val`、`var`、`private` 的区别。

#### 基本语法

```scala
class Person {
  var age: Int = 0
}

val p = new Person()
p.age = 18      // 调用修改器
println(p.age)  // 调用访问器
```

#### 课堂中的理解方式

老师把 Java 中的 get/set 和 Scala 中的访问器/修改器进行对比：取值器不改变对象状态，类似 get；改值器改变对象状态，类似 set。Scala 会自动生成这些方法，所以代码更短。

#### 初学者容易犯的错误

1. 认为 `p.age` 一定是直接访问字段，忽略了 Scala 自动访问器机制。
2. 对 `val` 字段进行赋值。
3. 不理解 `var` 字段既有访问器也有修改器。
4. 把 Java 的 `getAge()` 和 `setAge()` 原样照搬到 Scala 中。
5. 不知道可以自定义访问器和修改器来控制赋值规则。

#### 正确示例

```scala
class Person {
  var age: Int = 0
}

object Main {
  def main(args: Array[String]): Unit = {
    val person = new Person()

    person.age = 20
    println(person.age)
  }
}
```

#### 示例解释

1. `var age` 定义一个可变字段。
2. `person.age = 20` 修改年龄。
3. `println(person.age)` 获取年龄。
4. Scala 自动处理访问和修改，不需要手写 `getAge` 和 `setAge`。

---

### 知识点 7：val 字段、var 字段和 private 字段

#### 这个知识点是什么？

Scala 字段的访问方式和 `val`、`var`、`private` 有关：

* `var` 公有字段：有公有访问器和公有修改器。
* `val` 公有字段：只有公有访问器，没有修改器。
* `private var` 字段：只能在类内部访问和修改，外部不能直接访问。
* `private val` 字段：只能在类内部读取，外部不能直接访问。

#### 为什么要学它？

字段控制了对象的数据状态。哪些数据允许外部读？哪些允许外部改？这些都和封装有关。理解字段修饰方式，是后续学习封装、继承和面向对象设计的基础。

#### 基本语法

```scala
class Person {
  var age: Int = 0
  val birthYear: Int = 2000
  private var secret: String = "hidden"
}
```

#### 课堂中的理解方式

老师通过 Java 的 `private int age`、`getAge`、`setAge` 和 Scala 字段进行对比，说明 Scala 中字段虽然看起来简单，但编译后会自动生成相应方法。特别是 `val` 类似常量，不能修改，因此只有取值器，没有改值器。

#### 初学者容易犯的错误

1. 对 `val` 字段重新赋值。
2. 以为没有写 `public` 就不是公有的；Scala 中成员默认通常是公有的。
3. 认为 `private var` 外部也可以用 `对象.字段` 访问。
4. 不理解 `private` 的作用是限制访问范围。
5. 不知道 `var` 自动生成修改器，`val` 不生成修改器。

#### 正确示例

```scala
class Person {
  var age: Int = 0
  val species: String = "Human"
  private var password: String = "123456"

  def changePassword(newPassword: String): Unit = {
    password = newPassword
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person()

    p.age = 18
    println(p.age)
    println(p.species)

    p.changePassword("abc888")
  }
}
```

#### 示例解释

1. `age` 是 `var`，外部可以读写。
2. `species` 是 `val`，外部可以读取但不能重新赋值。
3. `password` 是私有字段，外部不能直接访问。
4. `changePassword` 提供了受控修改私有字段的方式。

---

### 知识点 8：自定义访问器和修改器

#### 这个知识点是什么？

有时候我们不希望外部随便修改字段。例如年龄不能变小，也不能是负数。这时可以把真实字段设为 `private`，再自定义访问器和修改器。

Scala 中修改器的标准形式通常是：

```scala
def age_=(newValue: Int): Unit = {
  // 修改逻辑
}
```

访问器是：

```scala
def age: Int = privateAge
```

#### 为什么要学它？

这可以帮助我们保护对象状态，避免不合理数据进入对象。例如年龄不能从 20 改成 10，分数不能超过 100，余额不能随便变成负数。

#### 基本语法

```scala
class Person {
  private var privateAge = 0

  def age: Int = privateAge

  def age_=(newValue: Int): Unit = {
    if (newValue >= privateAge) {
      privateAge = newValue
    }
  }
}
```

调用：

```scala
val p = new Person()
p.age = 20
println(p.age)
```

#### 课堂中的理解方式

老师举了年龄的例子：如果当前年龄是 20，下一年可以变成 21 或 22，但不应该突然变成 19。通过自定义修改器，可以在赋值时加入判断逻辑。

#### 初学者容易犯的错误

1. 不知道 `age_=` 是 Scala 修改器的命名形式。
2. 忘记把真实字段设为 `private`。
3. 在自定义修改器中没有做任何判断，失去封装意义。
4. 把 `def age_=(...)` 写成普通方法后不会调用。
5. 误以为 `p.age = 20` 一定是直接修改字段，其实可能调用的是自定义修改器。

#### 正确示例

```scala
class Person {
  private var privateAge = 0

  def age: Int = privateAge

  def age_=(newAge: Int): Unit = {
    if (newAge >= privateAge) {
      privateAge = newAge
    }
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person()

    p.age = 20
    println(p.age)

    p.age = 18
    println(p.age)
  }
}
```

#### 示例解释

1. `privateAge` 是真实保存年龄的私有字段。
2. `def age` 是访问器，用来读取年龄。
3. `def age_=` 是修改器，用来控制年龄赋值。
4. 第一次 `p.age = 20` 可以成功。
5. 第二次 `p.age = 18` 不满足“新年龄不小于当前年龄”，所以不会修改。
6. 最后输出仍然是 `20`。

---

### 知识点 9：主构造器

#### 这个知识点是什么？

Scala 的主构造器写在类名后面。类名后面的参数列表就是主构造器参数。

例如：

```scala
class Person(val name: String, var age: Int)
```

这行代码同时完成了：

1. 定义类 `Person`。
2. 定义主构造器参数 `name` 和 `age`。
3. 把 `name` 定义为只读字段。
4. 把 `age` 定义为可读可写字段。

#### 为什么要学它？

Java 中需要写字段、构造方法、getter、setter；Scala 可以用主构造器把很多样板代码合并到一行。掌握主构造器，可以明显提高 Scala 代码的简洁性。

#### 基本语法

```scala
class 类名(val 字段1: 类型, var 字段2: 类型)
```

示例：

```scala
class Person(val name: String, var age: Int)
```

使用：

```scala
val p = new Person("Tom", 18)
println(p.name)
p.age = 19
println(p.age)
```

#### 课堂中的理解方式

老师强调：Scala 的类本身就可以看成主构造器，参数直接放在类名之后。和 Java 相比，Scala 不需要写一大堆字段、构造方法、get/set 方法，一行代码可以完成很多工作。

#### 初学者容易犯的错误

1. 不知道类名后面的参数就是主构造器参数。
2. 忘记在参数前写 `val` 或 `var`，导致参数不一定成为可从外部访问的字段。
3. 对 `val name` 重新赋值。
4. 忘记创建对象时要传入主构造器要求的参数。
5. 把 Java 构造方法写法照搬到 Scala 中。

#### 正确示例

```scala
class Person(val name: String, var age: Int)

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person("Tom", 18)

    println(p.name)
    println(p.age)

    p.age = 19
    println(p.age)
  }
}
```

#### 示例解释

1. `class Person(val name: String, var age: Int)` 定义类和主构造器。
2. `val name` 生成只读字段。
3. `var age` 生成可读可写字段。
4. `new Person("Tom", 18)` 调用主构造器创建对象。
5. `p.age = 19` 修改可变字段。

---

### 知识点 10：辅助构造器

#### 这个知识点是什么？

辅助构造器是类中额外定义的构造器，用来提供更多创建对象的方式。Scala 中辅助构造器使用 `def this(...)` 定义。

重要规则：

```text
辅助构造器的第一行必须调用同一个类中的其他构造器。
```

通常是调用主构造器：

```scala
def this() = {
  this("未知", 0)
}
```

#### 为什么要学它？

有时创建对象时参数不一定完整。例如有的人只知道姓名，不知道年龄；或者完全没有初始数据。辅助构造器可以提供多个构造对象的入口。

#### 基本语法

```scala
class Person(val name: String, var age: Int) {
  def this(name: String) = {
    this(name, 0)
  }

  def this() = {
    this("未知", 0)
  }
}
```

#### 课堂中的理解方式

老师把辅助构造器和 Java 中多个构造方法进行类比。Scala 的主构造器在类名后面，辅助构造器放在类体里，用 `this` 表示调用当前类已有构造器。它和 Java 中构造器重载思想类似，但写法不同。

#### 初学者容易犯的错误

1. 辅助构造器第一行没有调用 `this(...)`。
2. 把辅助构造器写成 `def Person(...)`。
3. 忘记主构造器需要的参数。
4. 在调用其他构造器之前先写普通语句。
5. 不理解 `this(...)` 在辅助构造器中表示调用当前类的构造器。

#### 正确示例

```scala
class Person(val name: String, var age: Int) {
  def this(name: String) = {
    this(name, 0)
  }

  def this() = {
    this("未命名", 0)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p1 = new Person("Tom", 18)
    val p2 = new Person("Jerry")
    val p3 = new Person()

    println(p1.name + " " + p1.age)
    println(p2.name + " " + p2.age)
    println(p3.name + " " + p3.age)
  }
}
```

#### 示例解释

1. 主构造器需要 `name` 和 `age`。
2. `def this(name: String)` 是一个只接收姓名的辅助构造器。
3. `this(name, 0)` 调用主构造器，并把年龄默认设为 `0`。
4. `def this()` 是无参辅助构造器。
5. `this("未命名", 0)` 调用主构造器设置默认姓名和年龄。

---

## 5. 重点概念对比

| 概念 A | 概念 B | 区别 | 示例 |
|---|---|---|---|
| `class` | `object` | `class` 是创建对象的模板；`object` 是单例对象，常用于程序入口 | `class Person`；`object Main` |
| Java `static main` | Scala `object main` | Java 用 `static` 定义入口；Scala 常把入口放在 `object` 中 | `public static void main`；`def main(args: Array[String])` |
| 字段 | 方法 | 字段表示对象状态；方法表示对象行为 | `var age = 0`；`def grow(): Unit = ...` |
| 有参方法 | 无参方法 | 有参方法调用时需要传参数；无参方法不需要参数 | `move(1, 2)`；`current` |
| 取值器 | 改值器 | 取值器读取数据，不改变状态；改值器修改对象状态 | `p.age`；`p.age = 20` |
| `val` 字段 | `var` 字段 | `val` 只能读取，不能重新赋值；`var` 可以读取也可以修改 | `val name`；`var age` |
| 公有字段 | 私有字段 | 公有字段外部可访问；私有字段只能在类内部访问 | `var age`；`private var password` |
| `to` | `this(...)` | `to` 是区间方法；`this(...)` 在构造器中表示调用当前类构造器 | `1 to 10`；`this("Tom", 18)` |
| 主构造器 | 辅助构造器 | 主构造器写在类名后；辅助构造器写在类体中 | `class Person(val name: String)`；`def this() = this("未知")` |
| Java getter/setter | Scala 自动访问器/修改器 | Java 通常手写 get/set；Scala 字段可自动生成访问器和修改器 | `getAge()`；`p.age` |
| `++`/`--` | `+= 1`/`-= 1` | Scala 没有 Java 风格自增自减运算符；通常使用复合赋值 | Java: `i++`；Scala: `i += 1` |
| `Unit` | `void` | Scala 的 `Unit` 类似 Java 的 `void`，表示没有有意义的返回值 | `def f(): Unit`；`void f()` |

---

## 6. 代码示例整理

### 示例 1：class 与 object 分开使用

**适用知识点：**

```text
class、object、程序入口、创建对象、调用方法
```

**代码：**

```scala
class Point {
  var x: Int = 0
  var y: Int = 0

  def move(dx: Int, dy: Int): Unit = {
    x = x + dx
    y = y + dy
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val point = new Point()

    point.move(3, 4)

    println(point.x)
    println(point.y)
  }
}
```

**运行结果：**

```text
3
4
```

**代码解释：**

1. `class Point` 定义点类。
2. `x` 和 `y` 表示点的坐标。
3. `move(dx, dy)` 用来移动点的位置。
4. `object Main` 是程序入口。
5. `new Point()` 创建一个点对象。
6. `point.move(3, 4)` 调用移动方法。
7. 最后输出移动后的坐标。

**初学者提示：**

```text
Scala 中普通类不一定要包含 main 方法；程序入口通常放到 object 中。
```

---

### 示例 2：无参方法和有副作用方法的括号风格

**适用知识点：**

```text
无参方法、取值器思想、改值器思想、方法调用规则
```

**代码：**

```scala
class Counter {
  private var value: Int = 0

  def current: Int = value

  def increment(): Unit = {
    value += 1
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val counter = new Counter()

    counter.increment()
    counter.increment()

    println(counter.current)
  }
}
```

**运行结果：**

```text
2
```

**代码解释：**

1. `value` 是私有字段，外部不能直接修改。
2. `current` 只是返回当前值，不改变状态，所以不写括号。
3. `increment()` 会让 `value` 加一，改变对象状态，所以保留括号。
4. 调用两次 `increment()` 后，当前值变成 `2`。
5. `println(counter.current)` 输出当前值。

**初学者提示：**

```text
Scala 代码中，是否写括号不仅是语法问题，也体现方法是否像“动作”。
```

---

### 示例 3：字段自动生成访问器和修改器

**适用知识点：**

```text
var 字段、访问器、修改器、Java getter/setter 对比
```

**代码：**

```scala
class Person {
  var age: Int = 0
}

object Main {
  def main(args: Array[String]): Unit = {
    val person = new Person()

    person.age = 18
    println(person.age)

    person.age = 19
    println(person.age)
  }
}
```

**运行结果：**

```text
18
19
```

**代码解释：**

1. `var age: Int = 0` 定义可变字段。
2. Scala 会自动提供读取和修改该字段的能力。
3. `person.age = 18` 修改字段值。
4. `println(person.age)` 读取字段值。
5. 再次赋值为 `19` 后，输出新的值。

**初学者提示：**

```text
Scala 中不一定需要像 Java 那样手写 getAge 和 setAge，普通 var 字段会自动提供类似功能。
```

---

### 示例 4：自定义年龄修改规则

**适用知识点：**

```text
private 字段、自定义访问器、自定义修改器、封装
```

**代码：**

```scala
class Person {
  private var privateAge = 0

  def age: Int = privateAge

  def age_=(newAge: Int): Unit = {
    if (newAge >= privateAge) {
      privateAge = newAge
    }
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val person = new Person()

    person.age = 20
    println(person.age)

    person.age = 18
    println(person.age)
  }
}
```

**运行结果：**

```text
20
20
```

**代码解释：**

1. `privateAge` 是私有字段，只能在类内部访问。
2. `def age` 提供读取年龄的方式。
3. `def age_=` 提供修改年龄的方式。
4. 只有新年龄不小于当前年龄时才允许修改。
5. 第一次设置为 `20` 成功。
6. 第二次设置为 `18` 被忽略，所以仍输出 `20`。

**初学者提示：**

```text
自定义修改器可以用来检查数据是否合法，这就是封装思想的一种体现。
```

---

### 示例 5：主构造器定义 Person 类

**适用知识点：**

```text
主构造器、val 字段、var 字段、对象创建
```

**代码：**

```scala
class Person(val name: String, var age: Int)

object Main {
  def main(args: Array[String]): Unit = {
    val person = new Person("Tom", 18)

    println(person.name)
    println(person.age)

    person.age = 19
    println(person.age)
  }
}
```

**运行结果：**

```text
Tom
18
19
```

**代码解释：**

1. `class Person(val name: String, var age: Int)` 定义类和主构造器。
2. `val name` 表示姓名只能读取，不能重新赋值。
3. `var age` 表示年龄可以读取和修改。
4. `new Person("Tom", 18)` 创建对象时传入姓名和年龄。
5. 修改 `age` 后输出新年龄。

**初学者提示：**

```text
主构造器参数前写 val 或 var，会让该参数成为对象字段。
```

---

### 示例 6：辅助构造器提供多种创建对象方式

**适用知识点：**

```text
辅助构造器、this、构造器重载、默认值
```

**代码：**

```scala
class Student(val name: String, var score: Int) {
  def this(name: String) = {
    this(name, 0)
  }

  def this() = {
    this("未命名", 0)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s1 = new Student("Alice", 95)
    val s2 = new Student("Bob")
    val s3 = new Student()

    println(s1.name + ": " + s1.score)
    println(s2.name + ": " + s2.score)
    println(s3.name + ": " + s3.score)
  }
}
```

**运行结果：**

```text
Alice: 95
Bob: 0
未命名: 0
```

**代码解释：**

1. 主构造器接收姓名和分数。
2. 第一个辅助构造器只接收姓名，分数默认为 `0`。
3. 第二个辅助构造器不接收参数，姓名默认为“未命名”，分数默认为 `0`。
4. 每个辅助构造器第一行都调用了 `this(...)`。
5. 三种方式都可以创建 `Student` 对象。

**初学者提示：**

```text
Scala 辅助构造器的第一行必须调用当前类的其他构造器，这是考试和编程中都很容易错的点。
```

---

## 7. 课堂案例整理

### 案例 1：用 Point 类表示坐标点

**对应知识点：**

```text
class、字段、方法、object 程序入口
```

**案例背景：**

课堂中提到 `Point` 类可以只保留坐标和移动方法，类本身保持“干净”，程序入口放在另外的对象中。

**解决思路：**

1. 定义 `Point` 类。
2. 在类中定义 `x`、`y` 两个坐标字段。
3. 定义 `move` 方法修改坐标。
4. 在 `object Main` 中创建对象并调用方法。

**Scala 代码：**

```scala
class Point {
  var x = 0
  var y = 0

  def move(dx: Int, dy: Int): Unit = {
    x += dx
    y += dy
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Point()
    p.move(5, 2)
    println("x = " + p.x)
    println("y = " + p.y)
  }
}
```

**这个案例帮助理解什么：**

这个案例帮助学生理解类负责描述对象的属性和行为，`object Main` 负责运行程序，两者职责可以分开。

---

### 案例 2：计数器 Counter

**对应知识点：**

```text
private 字段、无参方法、increment、无 ++ 运算符
```

**案例背景：**

课堂中讲到 Scala 没有 `++` 和 `--`，如果要让某个值增加或减少，可以定义方法实现。

**解决思路：**

1. 定义 `Counter` 类。
2. 使用私有字段保存当前计数。
3. 定义 `increment()` 方法让计数加一。
4. 定义 `current` 方法读取当前计数。
5. 在程序入口中创建计数器并测试。

**Scala 代码：**

```scala
class Counter {
  private var value = 0

  def increment(): Unit = {
    value += 1
  }

  def decrement(): Unit = {
    value -= 1
  }

  def current: Int = value
}

object Main {
  def main(args: Array[String]): Unit = {
    val c = new Counter()

    c.increment()
    c.increment()
    c.decrement()

    println(c.current)
  }
}
```

**这个案例帮助理解什么：**

这个案例帮助学生理解 Scala 中用方法封装对象行为，而不是依赖 Java 风格的 `++` 或 `--`。

---

### 案例 3：年龄只能增加的 Person 类

**对应知识点：**

```text
封装、private 字段、自定义访问器、自定义修改器
```

**案例背景：**

课堂中提到年龄一般不能变小，例如一个人 20 岁之后不应该突然变成 18 岁。可以通过自定义修改器控制赋值。

**解决思路：**

1. 使用私有字段保存真实年龄。
2. 提供访问器读取年龄。
3. 提供修改器设置年龄。
4. 在修改器中判断新年龄是否合理。
5. 不合理的年龄不允许更新。

**Scala 代码：**

```scala
class Person {
  private var privateAge = 0

  def age: Int = privateAge

  def age_=(newAge: Int): Unit = {
    if (newAge >= privateAge) {
      privateAge = newAge
    }
  }
}
```

**这个案例帮助理解什么：**

这个案例帮助学生理解 getter/setter 不只是形式，也可以加入数据校验，保护对象内部状态。

---

### 课堂补充说明：AI 编程工具与学习边界

原始课堂中有较长一段关于 AI 编程工具、插件、自动生成代码和权限风险的讨论。该内容不是本节 Scala 主线知识，但可以作为课堂补充说明保留。

* **学习建议：** AI 可以提高编程效率，但前提是学生需要先理解基础语法和编程思想，否则即使生成了代码也看不懂、改不动。
* **风险提醒：** 使用自动化工具或插件时，要注意权限边界，尤其不要随意授权与金钱、账户、隐私数据相关的操作。
* **与本课关系：** 本节课仍应以掌握 Scala 的类、对象、字段和构造器为主，AI 工具只适合作为辅助，不应替代基础学习。
* **适合后续展示位置：** 可在课程网站中作为“课堂补充”或“学习提醒”，不放入 Scala 核心知识点。

---

## 8. 易错点总结

### 易错点 1：在 Scala 中写 Java 风格的 main 方法

**错误示例：**

```scala
class Main {
  public static void main(String[] args) {
    println("Hello")
  }
}
```

**正确写法：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    println("Hello")
  }
}
```

**解释：**

Scala 中常把程序入口写在 `object` 中，参数类型写成 `Array[String]`，返回类型通常是 `Unit`。

---

### 易错点 2：把 class 当成 object 使用

**错误示例：**

```scala
class Main {
  def main(args: Array[String]): Unit = {
    println("Hello")
  }
}
```

然后直接运行 `Main`，可能无法作为预期入口运行。

**正确写法：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    println("Hello")
  }
}
```

**解释：**

`class` 是模板，需要创建对象；`object` 是单例对象，适合作为程序入口。

---

### 易错点 3：在 Scala 中使用 `i++`

**错误示例：**

```scala
var i = 0
i++
```

**正确写法：**

```scala
var i = 0
i += 1
```

**解释：**

Scala 没有 Java 风格的 `++` 自增运算符。需要增加变量值时，可以使用 `+= 1`。

---

### 易错点 4：对 val 字段重新赋值

**错误示例：**

```scala
class Person(val name: String)

val p = new Person("Tom")
p.name = "Jerry"
```

**正确写法：**

```scala
class Person(var name: String)

val p = new Person("Tom")
p.name = "Jerry"
```

**解释：**

`val` 字段只读，不能重新赋值。如果确实需要修改，应使用 `var`。

---

### 易错点 5：辅助构造器第一行没有调用 this

**错误示例：**

```scala
class Person(val name: String, var age: Int) {
  def this() = {
    println("创建对象")
    this("未命名", 0)
  }
}
```

**正确写法：**

```scala
class Person(val name: String, var age: Int) {
  def this() = {
    this("未命名", 0)
    println("创建对象")
  }
}
```

**解释：**

Scala 辅助构造器的第一行必须调用同一个类中的其他构造器，通常是 `this(...)`。

---

### 易错点 6：忘记主构造器参数前的 val 或 var

**错误示例：**

```scala
class Person(name: String, age: Int)

val p = new Person("Tom", 18)
println(p.name)
```

**正确写法：**

```scala
class Person(val name: String, var age: Int)

val p = new Person("Tom", 18)
println(p.name)
```

**解释：**

主构造器参数前没有 `val` 或 `var` 时，它通常只是构造器参数，不一定成为外部可访问字段。要让外部能访问，应写 `val` 或 `var`。

---

### 易错点 7：误以为 private 字段外部可以直接访问

**错误示例：**

```scala
class Person {
  private var age = 0
}

val p = new Person()
println(p.age)
```

**正确写法：**

```scala
class Person {
  private var privateAge = 0

  def age: Int = privateAge
}

val p = new Person()
println(p.age)
```

**解释：**

`private` 字段只能在类内部访问。如果外部需要读取，可以提供访问器方法。

---

### 易错点 8：把取值方法写成会修改状态的方法

**错误示例：**

```scala
class Counter {
  private var value = 0

  def current: Int = {
    value += 1
    value
  }
}
```

**正确写法：**

```scala
class Counter {
  private var value = 0

  def current: Int = value

  def increment(): Unit = {
    value += 1
  }
}
```

**解释：**

`current` 听起来是取当前值，不应该偷偷修改对象状态。改变状态的行为应放在类似 `increment()` 的方法中。

---

## 9. 小测验题目

### 题目 1：Scala 中通常把程序入口 `main` 方法放在哪里？

A. `trait` 中  
B. `object` 中  
C. `package` 后面直接写 Java main  
D. 只能放在抽象类中

**正确答案：B**

**解析：**

Scala 中常用 `object Main` 作为程序入口所在的单例对象，然后在其中定义 `def main(args: Array[String]): Unit`。

---

### 题目 2：下面哪个说法正确？

A. Scala 的 `class` 和 `object` 完全一样  
B. `class` 是类模板，`object` 是单例对象  
C. `object` 必须使用 `new` 创建  
D. Scala 中不能定义多个类

**正确答案：B**

**解析：**

`class` 用于定义创建对象的模板，`object` 定义单例对象，不需要使用 `new` 创建。

---

### 题目 3：下面哪个是 Scala 中正确的自增写法？

A. `i++`  
B. `++i`  
C. `i += 1`  
D. `i =+ 1`

**正确答案：C**

**解析：**

Scala 没有 Java 风格的 `++`，可以使用 `i += 1`，但 `i` 必须是 `var`。

---

### 题目 4：`class Person(val name: String, var age: Int)` 中，哪个字段可以重新赋值？

A. `name`  
B. `age`  
C. 两个都不能  
D. 两个都必须用 `private` 才能访问

**正确答案：B**

**解析：**

`val name` 是只读字段，不能重新赋值；`var age` 是可变字段，可以修改。

---

### 题目 5：关于辅助构造器，下面说法正确的是？

A. 辅助构造器必须命名为类名  
B. 辅助构造器使用 `def this(...)` 定义  
C. 辅助构造器可以完全不调用其他构造器  
D. 辅助构造器只能有一个

**正确答案：B**

**解析：**

Scala 辅助构造器使用 `def this(...)` 定义，并且第一行必须调用当前类的其他构造器。

---

### 题目 6：下面哪个方法更适合不写括号？

A. 会修改余额的 `deposit()`  
B. 会打印日志的 `save()`  
C. 只读取当前值的 `current`  
D. 会删除文件的 `delete()`

**正确答案：C**

**解析：**

Scala 中不改变对象状态、只是取值的方法通常可以不写括号；会产生副作用的方法通常写括号。

---

### 题目 7：`private var age = 0` 的主要作用是什么？

A. 让字段只能在类内部访问  
B. 让字段变成常量  
C. 让字段自动变成字符串  
D. 让字段必须在 object 中访问

**正确答案：A**

**解析：**

`private` 用来限制访问范围，使字段不能被外部对象直接访问。

---

### 题目 8：关于 `val` 字段，下面说法正确的是？

A. 既有访问器也有修改器  
B. 只有访问器，没有修改器  
C. 只能定义在 object 中  
D. 必须手动写 getter

**正确答案：B**

**解析：**

`val` 字段是只读的，因此外部只能读取，不能重新赋值，所以没有修改器。

---

## 10. 拖拽匹配素材

1. `class` —— 定义创建对象的模板
2. `object` —— 定义单例对象
3. `main` —— 程序入口方法
4. `Unit` —— 表示没有有意义的返回值
5. `var` —— 定义可重新赋值的字段
6. `val` —— 定义不可重新赋值的字段
7. `private` —— 限制成员只能在内部访问
8. 访问器 —— 用来读取字段值
9. 修改器 —— 用来修改字段值
10. `this` —— 表示当前对象或调用当前类构造器
11. 主构造器 —— 写在类名后面的构造器
12. 辅助构造器 —— 使用 `def this(...)` 定义的构造器
13. `+= 1` —— Scala 中常见的加一写法
14. `age_=` —— Scala 修改器的底层命名形式
15. `new` —— 创建类的实例对象

---

## 11. 流程动画素材

### 流程主题：使用辅助构造器创建对象

```text
1. 程序执行到 new Person()。
2. Scala 发现调用的是无参辅助构造器 def this()。
3. 程序进入辅助构造器。
4. 辅助构造器第一行调用 this("未命名", 0)。
5. this("未命名", 0) 调用主构造器。
6. 主构造器为 name 字段赋值为 "未命名"。
7. 主构造器为 age 字段赋值为 0。
8. 主构造器执行完成后，回到辅助构造器。
9. 辅助构造器剩余代码继续执行。
10. 对象创建完成，程序得到一个 Person 实例。
```

---

## 12. 课后练习题

### 练习 1：定义一个 Student 类并创建对象

**题目：**

定义一个 `Student` 类，包含可变字段 `name` 和 `score`，然后在 `object Main` 中创建对象，修改字段并输出。

**考查知识点：**

```text
class、object、var 字段、创建对象、字段访问
```

**参考答案：**

```scala
class Student {
  var name: String = "未命名"
  var score: Int = 0
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = new Student()

    s.name = "Tom"
    s.score = 90

    println(s.name)
    println(s.score)
  }
}
```

**解题思路：**

先定义类和字段，再在入口对象中使用 `new` 创建对象，最后通过对象名访问和修改字段。

---

### 练习 2：实现一个计数器 Counter

**题目：**

定义一个 `Counter` 类，包含私有字段 `value`，提供 `increment()` 方法加一，提供 `current` 方法读取当前值。

**考查知识点：**

```text
private 字段、无参方法、increment、访问器思想
```

**参考答案：**

```scala
class Counter {
  private var value = 0

  def increment(): Unit = {
    value += 1
  }

  def current: Int = value
}

object Main {
  def main(args: Array[String]): Unit = {
    val c = new Counter()

    c.increment()
    c.increment()

    println(c.current)
  }
}
```

**解题思路：**

使用私有字段保存内部状态，用方法控制状态变化，用无括号方法读取当前状态。

---

### 练习 3：使用主构造器定义 Person

**题目：**

使用主构造器定义 `Person` 类，姓名为只读字段，年龄为可变字段。创建一个对象，输出姓名和年龄，然后修改年龄再输出。

**考查知识点：**

```text
主构造器、val、var、字段访问与修改
```

**参考答案：**

```scala
class Person(val name: String, var age: Int)

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person("Alice", 18)

    println(p.name)
    println(p.age)

    p.age = 19
    println(p.age)
  }
}
```

**解题思路：**

主构造器参数前写 `val` 表示只读字段，写 `var` 表示可变字段。创建对象时传入对应参数。

---

### 练习 4：为 Person 添加辅助构造器

**题目：**

定义 `Person` 类，主构造器接收 `name` 和 `age`。添加一个只接收 `name` 的辅助构造器，默认年龄为 `0`。

**考查知识点：**

```text
辅助构造器、this、构造器重载
```

**参考答案：**

```scala
class Person(val name: String, var age: Int) {
  def this(name: String) = {
    this(name, 0)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p1 = new Person("Tom", 18)
    val p2 = new Person("Jerry")

    println(p1.name + " " + p1.age)
    println(p2.name + " " + p2.age)
  }
}
```

**解题思路：**

辅助构造器用 `def this(name: String)` 定义，并在第一行调用主构造器 `this(name, 0)`。

---

### 练习 5：限制年龄不能变小

**题目：**

定义一个 `Person` 类，年龄字段为私有。提供访问器读取年龄，提供修改器设置年龄，但只有新年龄大于等于当前年龄时才允许修改。

**考查知识点：**

```text
private 字段、自定义访问器、自定义修改器、if 判断
```

**参考答案：**

```scala
class Person {
  private var privateAge = 0

  def age: Int = privateAge

  def age_=(newAge: Int): Unit = {
    if (newAge >= privateAge) {
      privateAge = newAge
    }
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person()

    p.age = 20
    println(p.age)

    p.age = 15
    println(p.age)
  }
}
```

**解题思路：**

真实年龄用私有字段保存，对外暴露 `age` 和 `age_=`。在修改器中加入判断，保护对象状态。

---

### 练习 6：对比 Java getter/setter 与 Scala 字段写法

**题目：**

用 Scala 定义一个 `Book` 类，包含可变字段 `price` 和只读字段 `title`，并说明它相当于 Java 中哪些 getter/setter 行为。

**考查知识点：**

```text
val、var、访问器、修改器、Java 对比
```

**参考答案：**

```scala
class Book(val title: String, var price: Double)

object Main {
  def main(args: Array[String]): Unit = {
    val book = new Book("Scala 入门", 59.9)

    println(book.title)
    println(book.price)

    book.price = 49.9
    println(book.price)
  }
}
```

**解题思路：**

`val title` 表示只有读取能力，类似只有 getter；`var price` 表示可以读取和修改，类似既有 getter 又有 setter。

---

## 13. 本节课知识结构图文字版

```text
Scala 与 Java 的类和对象对比
├── class 与 object
│   ├── class
│   │   ├── 创建对象的模板
│   │   ├── 保存字段
│   │   └── 定义方法
│   └── object
│       ├── 单例对象
│       ├── 常作程序入口
│       └── 可放 main 方法
├── 程序入口
│   ├── Java
│   │   └── public static void main
│   └── Scala
│       ├── object Main
│       └── def main(args: Array[String]): Unit
├── 方法
│   ├── 有参方法
│   │   └── 调用时传入参数
│   ├── 无参方法
│   │   ├── 可写无括号形式
│   │   └── 常用于取值
│   └── 改变状态的方法
│       └── 通常保留括号
├── 自增自减
│   ├── Java
│   │   ├── i++
│   │   └── i--
│   └── Scala
│       ├── i += 1
│       ├── i -= 1
│       └── 自定义 increment/decrement 方法
├── 字段与封装
│   ├── var 字段
│   │   ├── 有访问器
│   │   └── 有修改器
│   ├── val 字段
│   │   ├── 有访问器
│   │   └── 无修改器
│   ├── private 字段
│   │   └── 外部不能直接访问
│   └── 自定义访问器/修改器
│       ├── def age
│       └── def age_=
├── 构造器
│   ├── 主构造器
│   │   ├── 写在类名后
│   │   ├── 参数可用 val/var 修饰
│   │   └── 可自动生成字段访问能力
│   └── 辅助构造器
│       ├── def this(...)
│       ├── 第一行必须调用其他构造器
│       └── 可提供多种创建对象方式
└── Java 与 Scala 写法差异
    ├── Scala 更简洁
    ├── 自动生成访问器和修改器
    ├── 类和程序入口职责更分离
    └── 需要遵守 Scala 的括号和构造器规则
```

---

## 14. 后续生成网页时可使用的数据建议

* **建议课程 ID：** `scala-class-object-field-constructor-java-compare`
* **建议课程标题：** 2026-04-02 Scala 与 Java 的编程知识讲解
* **建议章节：** Scala 类与对象、Scala 构造器
* **建议标签：**
  * Scala class
  * Scala object
  * Java 对比
  * main 方法
  * 字段
  * Getter
  * Setter
  * 访问器
  * 修改器
  * 主构造器
  * 辅助构造器
  * this
  * val
  * var
  * private
* **适合放入 summary 的内容：**
  * 本节课通过 Java 与 Scala 对比，讲解 Scala 类、对象、字段和构造器的核心写法。
  * Scala 中 `object` 常作为程序入口，`class` 专注描述对象属性和行为。
  * Scala 字段会自动生成访问器和修改器，使代码比 Java getter/setter 更简洁。
  * 主构造器写在类名后，辅助构造器用 `def this(...)` 定义。
* **适合放入 keyPoints 的内容：**
  * `class` 是模板，`object` 是单例对象。
  * Scala 程序入口通常写在 `object Main` 中。
  * Scala 没有 Java 风格的 `++` 和 `--`。
  * `var` 字段有访问器和修改器。
  * `val` 字段只有访问器。
  * 辅助构造器第一行必须调用其他构造器。
  * 主构造器参数写在类名之后。
* **适合放入 codeExamples 的内容：**
  * `class Point` 与 `object Main` 分离。
  * `Counter` 计数器示例。
  * `Person` 字段访问器和修改器示例。
  * 自定义年龄修改规则示例。
  * 主构造器和辅助构造器示例。
* **适合放入 quiz 的内容：**
  * `class` 与 `object` 区别。
  * Scala 程序入口写法。
  * `val` 和 `var` 字段差异。
  * 辅助构造器规则。
  * Scala 自增写法。
  * 访问器和修改器概念。
* **适合放入 dragMatch 的内容：**
  * `class` —— 定义对象模板
  * `object` —— 定义单例对象
  * `var` —— 可变字段
  * `val` —— 只读字段
  * `private` —— 私有访问控制
  * `this` —— 当前对象或当前类构造器
  * 主构造器 —— 类名后的参数列表
  * 辅助构造器 —— `def this(...)`
* **适合放入 flow 的内容：**
  * 创建对象时调用辅助构造器的执行流程。
  * 字段赋值时调用修改器的执行流程。
  * 程序从 `object Main` 的 `main` 方法启动的流程。
* **适合放入 exercises 的内容：**
  * 定义类并创建对象。
  * 编写计数器类。
  * 使用主构造器定义字段。
  * 添加辅助构造器。
  * 自定义字段修改规则。
* **适合放入 conclusion 的内容：**
  * 本节课是 Scala 面向对象编程的重要基础。
  * 学生应重点掌握 Scala 比 Java 简洁的原因。
  * 字段、访问器、修改器和构造器会在后续封装、继承、多态、特质学习中继续使用。
  * 课后建议多对比 Java 写法和 Scala 写法，理解简洁语法背后的规则。

---

## 15. 课后总结

1. 本节课的核心是理解 Scala 中类、对象、字段和构造器的基本写法，并能和 Java 面向对象语法进行对比。
2. 学习 Scala 时要特别注意 `class` 和 `object` 的区别：类用于创建对象，单例对象常用于程序入口。
3. Scala 的方法调用比 Java 更灵活，无参方法是否加括号要结合方法是否改变对象状态来理解。
4. Scala 没有 Java 风格的 `++` 和 `--`，需要使用 `+= 1`、`-= 1` 或自定义方法完成自增自减。
5. `var` 字段、`val` 字段和 `private` 字段是本节课必须掌握的重点，它们直接影响对象字段能否读取和修改。
6. Scala 自动生成访问器和修改器，让代码比 Java 中手写 getter/setter 更简洁，但学生仍要理解背后的封装思想。
7. 主构造器是 Scala 类的重要特点，参数直接写在类名后，配合 `val` 和 `var` 可以快速定义字段。
8. 辅助构造器使用 `def this(...)` 定义，第一行必须调用已有构造器，这是本节课最容易出错的规则之一。
9. 本节课中的知识会在后续学习封装、继承、多态、特质和伴生对象时继续使用，因此课后应多写类和对象的练习。
10. AI 编程工具可以提高效率，但不能替代对基础语法和程序结构的理解；现阶段应先把 Scala 的类、对象和构造器写熟。
