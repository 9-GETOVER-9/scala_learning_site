# 课程总结：2026-04-09 Scala 课程知识点讲解

## 1. 课程基本信息

* **课程 ID 建议：** `scala-singleton-companion-apply-abstract-class`
* **课程标题：** 2026-04-09 Scala 课程知识点讲解
* **所属章节：** Scala 类与对象、Scala 伴生对象、Scala 抽象类
* **上课日期：** 2026-04-09
* **知识点标签：** Scala 与 Java 对比、类、对象、单例对象、伴生对象、伴生类、apply 方法、主构造器、辅助构造器、字段、访问器、修改器、抽象类、接口思想
* **难度等级：** 初级
* **适合对象：** 已经学习过 Scala 类、对象、字段和构造器基础，并且有 Java 面向对象基础的学生
* **本节课一句话概括：** 本节课通过 Java 与 Scala 的对比，重点讲解 Scala 的单例对象、伴生对象、`apply` 方法、对象构造方式以及抽象类定义规则的思想。

> 说明：原始转写中多次出现“主路由器”“辅助路由器”“过滤器”等识别错误，根据上下文应统一理解为“主构造器”“辅助构造器”；“半生对象”“派生对象”“外生对象”等均按 Scala 正确术语整理为“伴生对象”。  
> 本节课未明确 Scala 版本，代码示例优先使用 Scala 2 和 Scala 3 都容易理解的通用写法。

---

## 2. 课堂摘要

1. 本节课首先安排了实验课、笔记检查和考试相关事项，提醒学生携带笔记本、实验报告指导书，并完成前面实验内容。
2. 课堂复习了 Scala 与 Java 在构造对象上的差异：Java 主要通过构造方法创建对象，而 Scala 有主构造器和辅助构造器。
3. 老师强调 Scala 中应把类的普通属性和行为放在 `class` 中，把特殊的、类级别的、工具性的内容放在 `object` 或伴生对象中。
4. 本节课重点讲解了单例对象的作用，包括保存工具函数、保存常量、表示单个唯一实例以及调用某些服务。
5. 课堂中对比了 Java 的 `static` 成员和 Scala 的伴生对象，说明 Scala 没有直接使用 Java 风格的 `static`，而是通过 `object` 承担类似职责。
6. 本节课介绍了伴生类和伴生对象的关系：它们名称相同，可以互相访问私有成员，并共同完成类级别和对象级别的功能。
7. 老师通过 `Array(1, 2, 3)` 可以省略 `new` 的例子，引出伴生对象中的 `apply` 方法，说明 `apply` 常用于创建对象或初始化数据。
8. 本节课还初步讲解了抽象类，说明抽象类通常用于定义规则，子类继承后需要实现这些规则。
9. 课堂最后通过 `Array(100)` 与 `new Array[Int](100)` 的区别，强调没有 `new` 和有 `new` 时调用机制不同，含义也不同。

---

## 3. 本节课学习目标

学完本节课后，你应该能够：

1. 理解 Scala 和 Java 在类、对象、构造方式上的主要区别。
2. 能解释 Scala 中为什么用 `object` 表示单例对象，以及它与 Java `static` 成员的关系。
3. 能说出单例对象的常见用途，例如保存工具方法、常量、唯一实例或服务入口。
4. 能理解伴生类和伴生对象的定义规则：同名、同文件中通常成对出现、可以互相访问私有成员。
5. 能看懂伴生对象中的 `apply` 方法，并知道它常用于省略 `new` 的对象创建写法。
6. 能区分 `Array(100)` 和 `new Array[Int](100)` 的含义。
7. 能复习主构造器和辅助构造器的关系，知道辅助构造器是对主构造器的补充。
8. 能理解 Scala 字段中 `val`、`var`、`private` 与访问器、修改器之间的关系。
9. 能初步理解抽象类的作用：定义规则，让子类去实现具体行为。
10. 能通过代码示例把 Scala 面向对象思想与 Java 面向对象思想进行对比。

---

## 4. 知识点详细整理

### 知识点 1：Scala 与 Java 在类和对象设计上的区别

#### 这个知识点是什么？

Java 和 Scala 都支持面向对象编程，但组织方式不同。

Java 中，一个类中可能同时包含：

* 实例字段
* 实例方法
* 静态字段
* 静态方法
* `main` 方法
* 构造方法

Scala 中更倾向于区分：

* `class`：保存对象的普通属性和普通行为。
* `object`：保存单例对象、工具函数、常量、程序入口或类似 Java 静态成员的内容。
* 伴生对象：和某个类同名，用来保存与该类密切相关但不属于普通实例的内容。

#### 为什么要学它？

很多学生已经学过 Java，如果直接用 Java 的思维写 Scala，就会不理解为什么 Scala 里经常出现 `object`、为什么没有 `static`、为什么有些地方可以省略 `new`。理解这部分，是学习 Scala 面向对象语法的基础。

#### 基本语法

```scala
class Student(val name: String, var age: Int) {
  def study(): Unit = {
    println(name + " 正在学习")
  }
}

object Student {
  val school: String = "软件学院"

  def createDefault(): Student = {
    new Student("未命名", 18)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = Student.createDefault()
    s.study()
    println(Student.school)
  }
}
```

#### 课堂中的理解方式

老师用 Java 和 Scala 的差异进行讲解：Java 里有静态成员和非静态成员，很多内容都写在类中；Scala 中 `class` 主要保存非静态成员，静态相关功能通常放在 `object` 或伴生对象中。这样做的思想是“该放在实例里的放实例里，该抽出去的抽出去”。

#### 初学者容易犯的错误

1. 在 Scala 类中寻找 Java 风格的 `static` 关键字。
2. 把所有工具方法都写到普通类里，导致每次使用都要创建对象。
3. 不理解 `object` 是单例对象，以为它只是普通类。
4. 不知道伴生对象和伴生类可以一起表达一个完整概念。
5. 把 Scala 的简洁写法误认为“没有构造过程”。

#### 正确示例

```scala
class MathPoint(val x: Double, val y: Double)

object MathPoint {
  def distance(p1: MathPoint, p2: MathPoint): Double = {
    val dx = p1.x - p2.x
    val dy = p1.y - p2.y
    math.sqrt(dx * dx + dy * dy)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p1 = new MathPoint(0, 0)
    val p2 = new MathPoint(3, 4)

    println(MathPoint.distance(p1, p2))
  }
}
```

#### 示例解释

1. `class MathPoint` 表示一个具体点对象。
2. `x` 和 `y` 是点对象自己的属性。
3. `object MathPoint` 保存和点有关的工具方法。
4. `distance` 不属于某一个点，而是用于计算两个点之间的距离，因此适合放在单例对象或伴生对象中。
5. `MathPoint.distance(p1, p2)` 类似 Java 中调用静态工具方法。

---

### 知识点 2：主构造器与辅助构造器复习

#### 这个知识点是什么？

Scala 的主构造器写在类名之后：

```scala
class Person(val name: String, var age: Int)
```

辅助构造器写在类体中，使用 `def this(...)` 定义：

```scala
class Person(val name: String, var age: Int) {
  def this(name: String) = {
    this(name, 0)
  }

  def this() = {
    this("未命名", 0)
  }
}
```

#### 为什么要学它？

课堂中多次强调 Scala 的构造方式和 Java 不同。Java 中构造方法和类名相同，写在类体中；Scala 的主构造器直接写在类名后面，辅助构造器才写在类体中。后面学习伴生对象和 `apply` 时，也会涉及对象创建。

#### 基本语法

```scala
class 类名(主构造器参数列表) {
  def this(辅助构造器参数列表) = {
    this(调用已有构造器需要的参数)
  }
}
```

#### 课堂中的理解方式

老师把辅助构造器理解成“递进关系”：无参辅助构造器可以调用一个参数的构造器，一个参数的构造器可以调用两个参数的构造器，最终都要回到主构造器。构造器的选择取决于传入参数的个数和类型。

#### 初学者容易犯的错误

1. 把“主构造器”误写成 Java 风格的同名方法。
2. 辅助构造器第一行没有调用 `this(...)`。
3. 忘记类名后的参数列表就是主构造器。
4. 传参时参数个数和类型与构造器不匹配。
5. 不理解“一个参数”“两个参数”“无参”对应不同构造器。

#### 正确示例

```scala
class Student(val name: String, var age: Int) {
  def this(name: String) = {
    this(name, 18)
  }

  def this() = {
    this("未命名", 18)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s1 = new Student("Tom", 20)
    val s2 = new Student("Jerry")
    val s3 = new Student()

    println(s1.name + " " + s1.age)
    println(s2.name + " " + s2.age)
    println(s3.name + " " + s3.age)
  }
}
```

#### 示例解释

1. `class Student(val name: String, var age: Int)` 是主构造器。
2. `def this(name: String)` 是只传姓名的辅助构造器。
3. `def this()` 是无参辅助构造器。
4. 每个辅助构造器第一行都通过 `this(...)` 调用了已有构造器。
5. 创建对象时，Scala 会根据参数列表选择合适的构造器。

---

### 知识点 3：字段、访问器与修改器

#### 这个知识点是什么？

Scala 中字段和访问器、修改器关系密切。

```scala
class Person {
  val id: Int = 1001
  var age: Int = 18
  private var name: String = "Tom"
}
```

含义可以理解为：

* `val id`：只读字段，只有访问器，没有修改器。
* `var age`：可变字段，有访问器，也有修改器。
* `private var name`：私有字段，外部不能直接访问；如果需要外部读取，应定义公开方法间接访问。

#### 为什么要学它？

Scala 比 Java 少写很多 getter 和 setter 代码，但不是没有访问控制。理解字段和访问器/修改器，才能正确使用 `val`、`var` 和 `private`。

#### 基本语法

```scala
class Person {
  val id: Int = 1
  var age: Int = 18
  private var name: String = "Tom"

  def getName: String = name
}
```

#### 课堂中的理解方式

老师通过 Java 的 getter/setter 和 Scala 字段进行对比，说明 Scala 会自动为字段提供访问器和修改器。但如果字段是 `private`，系统生成的访问器和修改器也是受限的，类外无法直接访问；如果要从类外读取，就需要自己定义公开方法。

#### 初学者容易犯的错误

1. 对 `val` 字段重新赋值。
2. 以为 `private` 字段外部可以直接通过 `对象.字段` 访问。
3. 不知道 `var` 字段会自动支持读取和修改。
4. 把访问器和修改器都当成必须手写的方法。
5. 忽略封装思想，把所有字段都设为公开可变字段。

#### 正确示例

```scala
class Account {
  val id: Int = 1001
  private var balance: Double = 0.0

  def getBalance: Double = balance

  def deposit(money: Double): Unit = {
    if (money > 0) {
      balance += money
    }
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val account = new Account()

    account.deposit(100)
    println(account.id)
    println(account.getBalance)
  }
}
```

#### 示例解释

1. `id` 是只读字段，可以读取但不能修改。
2. `balance` 是私有字段，外部不能直接访问。
3. `getBalance` 是公开方法，用来间接读取余额。
4. `deposit` 用于修改余额，并加入金额必须大于 0 的判断。
5. 这种写法体现了封装：外部不能随意改内部状态。

---

### 知识点 4：单例对象 object

#### 这个知识点是什么？

Scala 中的 `object` 定义单例对象。单例对象在程序中只有一个实例，不需要使用 `new` 创建。

```scala
object Constants {
  val Pi = 3.14
}
```

调用：

```scala
println(Constants.Pi)
```

#### 为什么要学它？

Scala 没有完全照搬 Java 的 `static`，很多类级别的内容会写在 `object` 中。例如工具函数、常量、程序入口、唯一服务实例等都适合放在单例对象里。

#### 基本语法

```scala
object 单例对象名 {
  val 常量名 = 值

  def 工具方法名(参数列表): 返回类型 = {
    方法体
  }
}
```

#### 课堂中的理解方式

老师讲了单例对象的三个作用：

1. 存放工具函数或常量。
2. 表示单个不可变的实例，例如数学常量。
3. 用来调用某个服务或作为服务入口。

这些内容如果放到普通类中，每次使用都要创建对象，可能不合适；放在单例对象中更自然。

#### 初学者容易犯的错误

1. 使用 `new Constants()` 创建单例对象。
2. 把所有对象都写成 `object`，不再定义普通类。
3. 不理解 `object` 中的方法可以直接通过对象名调用。
4. 把 `object` 和伴生对象混为一谈；伴生对象必须和某个类同名，普通单例对象不一定。
5. 不知道 `object Main` 常用于放程序入口。

#### 正确示例

```scala
object GeometryUtils {
  val Pi: Double = 3.14

  def circleArea(radius: Double): Double = {
    Pi * radius * radius
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    println(GeometryUtils.Pi)
    println(GeometryUtils.circleArea(2.0))
  }
}
```

#### 示例解释

1. `GeometryUtils` 是单例对象。
2. `Pi` 是常量。
3. `circleArea` 是工具函数，用于计算圆面积。
4. 调用时不需要 `new GeometryUtils()`。
5. `GeometryUtils.circleArea(2.0)` 直接通过单例对象名调用方法。

---

### 知识点 5：Java static 与 Scala object 的关系

#### 这个知识点是什么？

Java 中使用 `static` 表示类级别成员：

```java
class MathUtils {
    public static double pi = 3.14;

    public static double square(double x) {
        return x * x;
    }
}
```

Scala 中通常使用 `object` 实现类似效果：

```scala
object MathUtils {
  val pi = 3.14

  def square(x: Double): Double = x * x
}
```

#### 为什么要学它？

从 Java 转 Scala 时，学生经常问：Scala 的 `static` 到哪里去了？答案是：Scala 中类级别的字段和方法通常放到 `object` 中。

#### 基本语法

```scala
object 工具对象名 {
  val 类级别常量 = 值

  def 类级别方法(): Unit = {
    // 方法体
  }
}
```

#### 课堂中的理解方式

老师强调，在 Java 中静态属性和静态方法属于类，可以通过类名直接访问；在 Scala 中，类似的内容会放到单例对象或伴生对象中。这样 Scala 的 `class` 就更专注于普通对象的属性和方法。

#### 初学者容易犯的错误

1. 在 Scala 中写 `static`。
2. 不知道工具方法应放在 `object` 中。
3. 在普通类中定义工具方法后，每次调用都创建无意义对象。
4. 认为 `object` 只是 Java 的静态类；实际上 `object` 是真正的单例对象。
5. 混淆“类方法”和“对象方法”。

#### 正确示例

```scala
object StringUtils {
  def isEmpty(str: String): Boolean = {
    str == null || str.length == 0
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    println(StringUtils.isEmpty(""))
    println(StringUtils.isEmpty("Scala"))
  }
}
```

#### 示例解释

1. `StringUtils` 保存字符串工具方法。
2. `isEmpty` 判断字符串是否为空。
3. 调用时直接写 `StringUtils.isEmpty(...)`。
4. 这类似 Java 中调用静态工具方法，但 Scala 使用 `object` 表达。

---

### 知识点 6：伴生类与伴生对象

#### 这个知识点是什么？

如果一个 `class` 和一个 `object` 名字相同，并且定义在同一个源文件中，它们就是伴生类和伴生对象。

```scala
class Account {
  private var balance = 0.0

  def deposit(money: Double): Unit = {
    balance += money
  }

  def getBalance: Double = balance
}

object Account {
  private var lastNumber = 0

  def newUniqueNumber(): Int = {
    lastNumber += 1
    lastNumber
  }
}
```

#### 为什么要学它？

伴生对象常用于保存与某个类密切相关的类级别内容，例如工厂方法、计数器、常量、工具方法等。它相当于把 Java 中很多 `static` 内容从类中拆出来。

#### 基本语法

```scala
class 类名 {
  // 普通实例字段和方法
}

object 类名 {
  // 与类相关的单例内容
}
```

#### 课堂中的理解方式

老师用“班长、学委”等例子说明：普通学生具有共性，可以放在普通类中；班长、学委等具有特殊身份或特殊行为，可以理解为要单独处理的对象或特殊构造逻辑。伴生对象用于承载这类与类密切相关但不属于普通实例的内容。

#### 初学者容易犯的错误

1. 伴生类和伴生对象名字不一致。
2. 把伴生对象写成普通对象，导致无法形成伴生关系。
3. 不知道伴生类和伴生对象可以互相访问私有成员。
4. 把所有实例字段都放进伴生对象，导致所有对象共享同一份数据。
5. 不理解伴生对象通常用于工厂方法、常量和类级别状态。

#### 正确示例

```scala
class Account private (val id: Int) {
  private var balance = 0.0

  def deposit(money: Double): Unit = {
    if (money > 0) {
      balance += money
    }
  }

  def getBalance: Double = balance
}

object Account {
  private var lastId = 0

  def create(): Account = {
    lastId += 1
    new Account(lastId)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val a1 = Account.create()
    val a2 = Account.create()

    println(a1.id)
    println(a2.id)
  }
}
```

#### 示例解释

1. `class Account` 是伴生类。
2. `object Account` 是伴生对象。
3. `lastId` 是类级别的计数器，适合放在伴生对象中。
4. `create()` 是工厂方法，用于创建账户对象。
5. `private` 构造器限制外部直接 `new Account(...)`，让对象创建过程由伴生对象控制。

---

### 知识点 7：伴生对象中的 apply 方法

#### 这个知识点是什么？

`apply` 是 Scala 中一个特殊方法。如果对象定义了 `apply` 方法，那么可以像调用函数一样调用这个对象。

例如：

```scala
object Student {
  def apply(name: String, age: Int): Student = {
    new Student(name, age)
  }
}

class Student(val name: String, var age: Int)
```

调用时可以写：

```scala
val s = Student("Tom", 18)
```

这其实会调用：

```scala
Student.apply("Tom", 18)
```

#### 为什么要学它？

很多 Scala 标准库写法都依赖 `apply`。例如：

```scala
Array(1, 2, 3)
List(1, 2, 3)
Map(1 -> "星期一")
```

这些看起来像没有 `new`，实际上常常是调用了伴生对象中的 `apply` 方法。

#### 基本语法

```scala
object 类名 {
  def apply(参数列表): 类名 = {
    new 类名(参数列表)
  }
}
```

#### 课堂中的理解方式

老师通过数组举例：声明并赋值数组时可以省略 `new`，例如 `Array(1, 2, 3)`。这是因为 `Array` 的伴生对象提供了 `apply` 方法，帮助我们创建数组对象并完成初始化。

#### 初学者容易犯的错误

1. 看到 `Student("Tom")` 以为没有创建对象。
2. 不知道 `Student("Tom")` 实际调用的是 `Student.apply("Tom")`。
3. 把 `apply` 误认为只能用于数组。
4. 不理解 `new Student("Tom")` 和 `Student("Tom")` 的区别。
5. 在伴生对象中写了 `apply`，但返回类型不合理。

#### 正确示例

```scala
class Student(val name: String, var age: Int)

object Student {
  def apply(name: String, age: Int): Student = {
    new Student(name, age)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s1 = new Student("Tom", 18)
    val s2 = Student("Jerry", 20)

    println(s1.name + " " + s1.age)
    println(s2.name + " " + s2.age)
  }
}
```

#### 示例解释

1. `new Student("Tom", 18)` 直接调用类的构造器。
2. `Student("Jerry", 20)` 调用伴生对象的 `apply` 方法。
3. `apply` 方法内部又使用 `new Student(...)` 创建对象。
4. 两种方式最终都得到 `Student` 对象。
5. `apply` 让代码更简洁，也更符合 Scala 风格。

---

### 知识点 8：`Array(100)` 与 `new Array[Int](100)` 的区别

#### 这个知识点是什么？

这两个写法非常容易混淆：

```scala
Array(100)
new Array[Int](100)
```

它们含义不同：

* `Array(100)`：创建一个数组，里面只有一个元素 `100`。
* `new Array[Int](100)`：创建一个长度为 100 的整型数组，里面有 100 个元素，默认值都是 `0`。

#### 为什么要学它？

课堂最后重点讲了这个区别。它能帮助学生理解：没有 `new` 时，很多情况下是在调用伴生对象的 `apply` 方法；有 `new` 时，是在直接调用类的构造器。

#### 基本语法

```scala
val arr1 = Array(100)
val arr2 = new Array[Int](100)
```

#### 课堂中的理解方式

老师强调：`Array(100)` 和 `new Array[Int](100)` 只差一个 `new`，但含义完全不同。前者通过伴生对象 `apply` 创建“包含一个元素 100 的数组”；后者通过数组构造器创建“长度为 100 的数组”。

#### 初学者容易犯的错误

1. 以为 `Array(100)` 表示创建 100 个元素的数组。
2. 以为 `new Array[Int](100)` 表示数组中只有一个元素 100。
3. 不理解 `new` 和 `apply` 调用机制不同。
4. 忘记 `Array[Int]` 中的 `Int` 是元素类型。
5. 打印数组时直接 `println(arr)`，看不到直观内容。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val arr1 = Array(100)
    val arr2 = new Array[Int](100)

    println(arr1.length)
    println(arr1.mkString(", "))

    println(arr2.length)
    println(arr2.take(5).mkString(", "))
  }
}
```

#### 示例解释

1. `Array(100)` 创建一个数组，只有一个元素 `100`。
2. `arr1.length` 的结果是 `1`。
3. `new Array[Int](100)` 创建长度为 100 的整型数组。
4. `arr2.length` 的结果是 `100`。
5. `arr2.take(5)` 取出前 5 个元素，默认都是 `0`。

---

### 知识点 9：抽象类

#### 这个知识点是什么？

抽象类是不能直接完整实例化的类，它可以包含抽象方法。抽象方法只有方法头，没有方法体，等待子类去实现。

```scala
abstract class Action {
  def execute(): Unit
}
```

子类实现：

```scala
class OpenAction extends Action {
  def execute(): Unit = {
    println("打开文件")
  }
}
```

#### 为什么要学它？

抽象类用于定义规则。父类规定“必须有什么行为”，但不规定具体怎么做。不同子类根据自己的特点实现这个行为。

例如：

* 学生都要学习，但不同学院学习内容不同。
* 动物都要发出声音，但猫、狗、鸟的声音不同。
* 按钮都要执行动作，但打开、保存、退出执行的动作不同。

#### 基本语法

```scala
abstract class 抽象类名 {
  def 抽象方法名(参数列表): 返回类型
}
```

子类：

```scala
class 子类名 extends 抽象类名 {
  def 抽象方法名(参数列表): 返回类型 = {
    // 具体实现
  }
}
```

#### 课堂中的理解方式

老师通过“定义规则”解释抽象类。抽象类不是为了马上完成具体功能，而是为了规定子类必须实现某些行为。比如不同学生、不同蔬菜、不同按钮动作，都可以用抽象类先定义统一规则，再让具体类实现。

#### 初学者容易犯的错误

1. 抽象方法写了方法体，导致不再是抽象方法。
2. 子类继承抽象类后忘记实现抽象方法。
3. 试图直接创建抽象类对象。
4. 不理解抽象类的核心作用是“定义规则”。
5. 把抽象类和普通类、接口完全混淆。

#### 正确示例

```scala
abstract class Action {
  def execute(): Unit
}

class OpenAction extends Action {
  def execute(): Unit = {
    println("打开文件")
  }
}

class SaveAction extends Action {
  def execute(): Unit = {
    println("保存文件")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val open = new OpenAction()
    val save = new SaveAction()

    open.execute()
    save.execute()
  }
}
```

#### 示例解释

1. `abstract class Action` 定义抽象类。
2. `def execute(): Unit` 是抽象方法，没有方法体。
3. `OpenAction` 继承 `Action`，实现打开动作。
4. `SaveAction` 继承 `Action`，实现保存动作。
5. 不同子类遵守同一个规则，但执行不同逻辑。

---

### 知识点 10：接口思想与抽象规则

#### 这个知识点是什么？

课堂中提到接口可以看成一种特殊的抽象类型，用于定义规则。Scala 中更常用 `trait` 表达接口思想，但本节课只做初步说明。

在 Scala 中：

```scala
trait Flyable {
  def fly(): Unit
}
```

这表示：只要某个类混入 `Flyable`，就应该实现 `fly()` 这个行为。

#### 为什么要学它？

后续学习 `trait` 时，会继续使用“定义规则”这个思想。抽象类和接口/特质都不是为了直接描述某一个具体对象，而是为了规定一类对象应该具备哪些能力。

#### 基本语法

本节课主要讲抽象类，`trait` 只作为后续知识预告：

```scala
trait Trait名 {
  def 方法名(): 返回类型
}
```

抽象类：

```scala
abstract class Animal {
  def makeSound(): Unit
}
```

#### 课堂中的理解方式

老师通过学生分类、蔬菜分类、按钮动作等例子说明：抽象类或接口的作用是先定义规则，再让具体子类实现。这样程序结构更清楚，也方便后续扩展。

#### 初学者容易犯的错误

1. 以为抽象类必须包含很多代码。
2. 认为抽象类没有方法体就没有用。
3. 不知道“规则”可以让不同子类保持统一接口。
4. 把接口思想理解成页面接口或网络接口。
5. 还没掌握类和继承时就过度深入 trait 复杂用法。

#### 正确示例

```scala
abstract class Student {
  def studyContent(): String
}

class ComputerStudent extends Student {
  def studyContent(): String = {
    "学习编程、算法和计算机系统"
  }
}

class ManagementStudent extends Student {
  def studyContent(): String = {
    "学习管理、经济和组织行为"
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s1 = new ComputerStudent()
    val s2 = new ManagementStudent()

    println(s1.studyContent())
    println(s2.studyContent())
  }
}
```

#### 示例解释

1. `Student` 抽象类规定学生必须说明学习内容。
2. `ComputerStudent` 给出计算机类学生的实现。
3. `ManagementStudent` 给出管理类学生的实现。
4. 两个子类遵守同一个规则，但具体内容不同。
5. 这就是“抽象类定义规则，子类负责实现”的思想。

---

## 5. 重点概念对比

| 概念 A | 概念 B | 区别 | 示例 |
|---|---|---|---|
| Java 构造方法 | Scala 主构造器 | Java 构造方法写在类体中；Scala 主构造器写在类名后 | `public Person(...)`；`class Person(val name: String)` |
| 主构造器 | 辅助构造器 | 主构造器是类名后的参数列表；辅助构造器用 `def this(...)` 定义 | `class Person(val name: String)`；`def this() = this("未知")` |
| `class` | `object` | `class` 是对象模板；`object` 是单例对象 | `class Account`；`object Account` |
| 单例对象 | 伴生对象 | 单例对象不一定和类同名；伴生对象必须与伴生类同名 | `object Utils`；`class User` + `object User` |
| Java `static` | Scala `object` | Java 用 `static` 表示类级别成员；Scala 通常放到 `object` 中 | `MathUtils.square()`；`object MathUtils` |
| 伴生类 | 伴生对象 | 伴生类保存实例成员；伴生对象保存类级别成员、工厂方法等 | `class Student`；`object Student` |
| `new Student(...)` | `Student(...)` | 前者直接调用构造器；后者通常调用伴生对象 `apply` 方法 | `new Student("Tom")`；`Student("Tom")` |
| `Array(100)` | `new Array[Int](100)` | 前者是含一个元素 100 的数组；后者是长度为 100 的整型数组 | `Array(100).length == 1`；`new Array[Int](100).length == 100` |
| `val` 字段 | `var` 字段 | `val` 只读；`var` 可读可写 | `val id = 1`；`var age = 18` |
| 公有字段 | 私有字段 | 公有字段外部可访问；私有字段外部不能直接访问 | `var age`；`private var balance` |
| 普通类 | 抽象类 | 普通类可以完整实现对象；抽象类用于定义规则，可包含抽象方法 | `class Dog`；`abstract class Animal` |
| 抽象方法 | 普通方法 | 抽象方法只有方法头；普通方法有方法体 | `def run(): Unit`；`def run(): Unit = println("run")` |

---

## 6. 代码示例整理

### 示例 1：单例对象保存工具函数和常量

**适用知识点：**

```text
单例对象、工具函数、常量、object
```

**代码：**

```scala
object MathTools {
  val Pi: Double = 3.14

  def square(x: Double): Double = {
    x * x
  }

  def circleArea(radius: Double): Double = {
    Pi * square(radius)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    println(MathTools.Pi)
    println(MathTools.square(5))
    println(MathTools.circleArea(2))
  }
}
```

**运行结果：**

```text
3.14
25.0
12.56
```

**代码解释：**

1. `object MathTools` 定义单例对象。
2. `Pi` 是常量。
3. `square` 是计算平方的工具函数。
4. `circleArea` 使用 `Pi` 和 `square` 计算圆面积。
5. 调用时直接通过 `MathTools` 调用，不需要 `new`。

**初学者提示：**

```text
工具方法通常不依赖某个具体对象，适合放在 object 中。
```

---

### 示例 2：伴生对象生成唯一账户编号

**适用知识点：**

```text
伴生类、伴生对象、类级别状态、工厂方法
```

**代码：**

```scala
class Account(val id: Int) {
  private var balance: Double = 0.0

  def deposit(money: Double): Unit = {
    if (money > 0) {
      balance += money
    }
  }

  def getBalance: Double = balance
}

object Account {
  private var lastId: Int = 0

  def create(): Account = {
    lastId += 1
    new Account(lastId)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val a1 = Account.create()
    val a2 = Account.create()

    println(a1.id)
    println(a2.id)
  }
}
```

**运行结果：**

```text
1
2
```

**代码解释：**

1. `class Account` 表示账户对象。
2. `object Account` 是伴生对象。
3. `lastId` 保存最后一个账户编号，属于类级别信息。
4. 每次调用 `create()`，编号加一。
5. `new Account(lastId)` 创建一个新的账户对象。

**初学者提示：**

```text
伴生对象适合保存“整个类共享”的信息，例如编号生成器。
```

---

### 示例 3：使用 apply 方法省略 new

**适用知识点：**

```text
伴生对象、apply 方法、对象创建、省略 new
```

**代码：**

```scala
class Student(val name: String, var age: Int)

object Student {
  def apply(name: String, age: Int): Student = {
    new Student(name, age)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s1 = new Student("Tom", 18)
    val s2 = Student("Jerry", 20)

    println(s1.name + " " + s1.age)
    println(s2.name + " " + s2.age)
  }
}
```

**运行结果：**

```text
Tom 18
Jerry 20
```

**代码解释：**

1. `class Student` 是伴生类。
2. `object Student` 是伴生对象。
3. `apply` 方法返回一个 `Student` 对象。
4. `Student("Jerry", 20)` 会自动调用 `Student.apply("Jerry", 20)`。
5. 因此可以省略 `new`。

**初学者提示：**

```text
看到 类名(...) 但没有 new 时，要想到可能是在调用伴生对象的 apply 方法。
```

---

### 示例 4：区分 Array(100) 和 new Array[Int](100)

**适用知识点：**

```text
Array、apply、new、构造器、数组长度
```

**代码：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val a = Array(100)
    val b = new Array[Int](100)

    println(a.length)
    println(a.mkString(", "))

    println(b.length)
    println(b.take(5).mkString(", "))
  }
}
```

**运行结果：**

```text
1
100
100
0, 0, 0, 0, 0
```

**代码解释：**

1. `Array(100)` 调用 `Array` 伴生对象的 `apply` 方法。
2. 它创建的是只有一个元素的数组，这个元素是 `100`。
3. `new Array[Int](100)` 调用数组构造器。
4. 它创建的是长度为 100 的整型数组。
5. 整型数组默认元素值为 `0`。

**初学者提示：**

```text
有没有 new 非常关键。Array(100) 不是长度为 100 的数组。
```

---

### 示例 5：抽象类定义规则，子类实现规则

**适用知识点：**

```text
抽象类、抽象方法、继承、方法重写
```

**代码：**

```scala
abstract class Action {
  def execute(): Unit
}

class OpenAction extends Action {
  def execute(): Unit = {
    println("打开文件")
  }
}

class SaveAction extends Action {
  def execute(): Unit = {
    println("保存文件")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val actions = List(new OpenAction(), new SaveAction())

    actions.foreach(action => action.execute())
  }
}
```

**运行结果：**

```text
打开文件
保存文件
```

**代码解释：**

1. `Action` 是抽象类。
2. `execute` 是抽象方法，只有方法头，没有方法体。
3. `OpenAction` 实现打开文件的动作。
4. `SaveAction` 实现保存文件的动作。
5. 不同子类都遵守 `Action` 的规则，但具体行为不同。

**初学者提示：**

```text
抽象类常用于先规定“必须做什么”，具体“怎么做”交给子类。
```

---

## 7. 课堂案例整理

### 案例 1：用伴生对象管理账户编号

**对应知识点：**

```text
伴生对象、类级别变量、工厂方法、私有字段
```

**案例背景：**

课堂中提到账户编号类似 `lastNumber`，每新来一个账户或对象，就把编号加一，然后返回新的编号。

**解决思路：**

1. 使用伴生对象保存全局编号 `lastNumber`。
2. 每次创建新账户时，编号加一。
3. 使用伴生对象的工厂方法返回新的账户对象。
4. 普通账户属性放在伴生类中。

**Scala 代码：**

```scala
class Account(val id: Int)

object Account {
  private var lastNumber = 0

  def newAccount(): Account = {
    lastNumber += 1
    new Account(lastNumber)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val a1 = Account.newAccount()
    val a2 = Account.newAccount()

    println(a1.id)
    println(a2.id)
  }
}
```

**这个案例帮助理解什么：**

它帮助学生理解伴生对象适合保存类级别状态，例如编号生成器；而每个账户对象自己的数据仍然放在类对象中。

---

### 案例 2：用 apply 创建学生对象

**对应知识点：**

```text
apply 方法、伴生对象、省略 new
```

**案例背景：**

课堂通过 `Array(1, 2, 3)` 说明为什么有些 Scala 对象创建可以省略 `new`。为了简化理解，可以用 `Student("Tom", 18)` 模拟这个过程。

**解决思路：**

1. 定义 `Student` 类。
2. 定义同名伴生对象。
3. 在伴生对象中定义 `apply` 方法。
4. 使用 `Student(...)` 创建对象。

**Scala 代码：**

```scala
class Student(val name: String, val age: Int)

object Student {
  def apply(name: String, age: Int): Student = {
    new Student(name, age)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val stu = Student("Tom", 18)
    println(stu.name)
    println(stu.age)
  }
}
```

**这个案例帮助理解什么：**

它帮助学生理解 `类名(...)` 不一定是直接调用构造器，很可能是调用伴生对象的 `apply` 方法。

---

### 案例 3：抽象按钮动作

**对应知识点：**

```text
抽象类、规则、子类实现、按钮动作
```

**案例背景：**

课堂中提到类似“点击 open 时执行打开动作，点击保存时执行保存动作”。这适合用抽象类定义统一动作规则。

**解决思路：**

1. 定义抽象类 `ButtonAction`。
2. 抽象方法 `run()` 表示按钮被点击后要执行的动作。
3. 不同按钮动作类继承抽象类。
4. 每个子类实现自己的动作。

**Scala 代码：**

```scala
abstract class ButtonAction {
  def run(): Unit
}

class OpenButtonAction extends ButtonAction {
  def run(): Unit = {
    println("执行打开操作")
  }
}

class SaveButtonAction extends ButtonAction {
  def run(): Unit = {
    println("执行保存操作")
  }
}
```

**这个案例帮助理解什么：**

它帮助学生理解抽象类是用来定义统一规则的，不同子类根据规则实现不同功能。

---

### 课堂补充说明：实验课、笔记检查与考试安排

原始文本开头包含较多课程安排内容，这些内容不属于 Scala 核心知识点，但可以作为课堂补充说明保留。

* **课前准备：** 需要携带笔记本、实验报告、实验报告指导书，指导书按要求打印一页。
* **课堂任务：** 完成第一次实验相关内容，整理实验材料，检查笔记。
* **课程进度：** 原文提到课程已到第六周，第七周和第八周后理论内容可能接近结束，后续会有实验课和考试。
* **学习提醒：** 老师强调这门课内容较抽象，但考试不会过难，重点是把基础概念、课堂例子和练习题掌握清楚。
* **处理方式：** 这些内容适合放入后续课程网站的“课堂提醒”或“学习安排”，不放入核心 Scala 知识点。

---

## 8. 易错点总结

### 易错点 1：把 Scala 的 object 当成普通 class

**错误示例：**

```scala
object Utils {
  def hello(): Unit = println("hello")
}

val u = new Utils()
```

**正确写法：**

```scala
object Utils {
  def hello(): Unit = println("hello")
}

Utils.hello()
```

**解释：**

`object` 是单例对象，不需要也不能像普通类一样用 `new` 创建实例。

---

### 易错点 2：在 Scala 中使用 Java 风格 static

**错误示例：**

```scala
class MathUtils {
  static def square(x: Int): Int = x * x
}
```

**正确写法：**

```scala
object MathUtils {
  def square(x: Int): Int = x * x
}
```

**解释：**

Scala 中通常用 `object` 来保存类似 Java `static` 的类级别方法。

---

### 易错点 3：伴生类和伴生对象名字不一致

**错误示例：**

```scala
class Student(val name: String)

object StudentUtils {
  def apply(name: String): Student = new Student(name)
}
```

如果想使用 `Student("Tom")`，这样写不行。

**正确写法：**

```scala
class Student(val name: String)

object Student {
  def apply(name: String): Student = new Student(name)
}
```

**解释：**

伴生对象必须和伴生类同名。`Student("Tom")` 调用的是 `Student` 伴生对象的 `apply` 方法。

---

### 易错点 4：误解 `Array(100)` 的含义

**错误示例：**

```scala
val arr = Array(100)
println(arr.length)
```

误以为输出是 `100`。

**正确写法：**

```scala
val arr = new Array[Int](100)
println(arr.length)
```

**解释：**

`Array(100)` 创建的是只有一个元素 `100` 的数组；`new Array[Int](100)` 才是创建长度为 100 的数组。

---

### 易错点 5：辅助构造器第一行没有调用已有构造器

**错误示例：**

```scala
class Person(val name: String, var age: Int) {
  def this() = {
    println("准备创建对象")
    this("未命名", 0)
  }
}
```

**正确写法：**

```scala
class Person(val name: String, var age: Int) {
  def this() = {
    this("未命名", 0)
    println("对象创建完成")
  }
}
```

**解释：**

Scala 辅助构造器第一行必须调用同一个类中的其他构造器，通常是主构造器。

---

### 易错点 6：对 val 字段设置 setter

**错误示例：**

```scala
class Person(val id: Int)

val p = new Person(1)
p.id = 2
```

**正确写法：**

```scala
class Person(var id: Int)

val p = new Person(1)
p.id = 2
```

**解释：**

`val` 字段只有访问器，没有修改器。如果需要修改字段，应使用 `var`。

---

### 易错点 7：直接访问 private 字段

**错误示例：**

```scala
class Person {
  private var name = "Tom"
}

val p = new Person()
println(p.name)
```

**正确写法：**

```scala
class Person {
  private var name = "Tom"

  def getName: String = name
}

val p = new Person()
println(p.getName)
```

**解释：**

`private` 字段不能在类外直接访问。如果需要读取，应提供公开方法间接访问。

---

### 易错点 8：抽象类继承后不实现抽象方法

**错误示例：**

```scala
abstract class Action {
  def execute(): Unit
}

class OpenAction extends Action
```

**正确写法：**

```scala
abstract class Action {
  def execute(): Unit
}

class OpenAction extends Action {
  def execute(): Unit = {
    println("打开")
  }
}
```

**解释：**

继承抽象类的普通子类必须实现抽象方法，否则子类也必须声明为抽象类。

---

## 9. 小测验题目

### 题目 1：Scala 中通常用什么来代替 Java 中很多 static 成员的作用？

A. `while`  
B. `object`  
C. `for`  
D. `case`

**正确答案：B**

**解析：**

Scala 中通常使用 `object` 保存类级别方法、常量、程序入口或工具函数，承担类似 Java `static` 的部分作用。

---

### 题目 2：下面哪一组可以形成伴生类和伴生对象？

A. `class Student` 和 `object Student`  
B. `class Student` 和 `object StudentUtils`  
C. `class StudentClass` 和 `object StudentObject`  
D. `class Person` 和 `class Person`

**正确答案：A**

**解析：**

伴生类和伴生对象必须名称相同，通常定义在同一个源文件中。

---

### 题目 3：`Student("Tom", 18)` 在存在伴生对象 `apply` 方法时，通常等价于什么？

A. `Student.new("Tom", 18)`  
B. `Student.apply("Tom", 18)`  
C. `new apply.Student("Tom", 18)`  
D. `this.Student("Tom", 18)`

**正确答案：B**

**解析：**

如果对象定义了 `apply` 方法，就可以使用 `对象名(...)` 的形式调用它。

---

### 题目 4：`Array(100)` 的含义是什么？

A. 创建长度为 100 的整型数组  
B. 创建一个只有一个元素 100 的数组  
C. 创建 100 个字符串  
D. 创建空数组

**正确答案：B**

**解析：**

`Array(100)` 调用 `Array` 伴生对象的 `apply` 方法，创建一个包含单个元素 `100` 的数组。

---

### 题目 5：`new Array[Int](100)` 的含义是什么？

A. 创建一个元素为 100 的数组  
B. 创建长度为 100 的整型数组  
C. 创建长度为 1 的字符串数组  
D. 调用伴生对象的 apply 方法

**正确答案：B**

**解析：**

`new Array[Int](100)` 直接调用数组构造器，创建长度为 100 的整型数组，默认元素值为 0。

---

### 题目 6：关于 `val` 字段，下面说法正确的是？

A. 有访问器，也有修改器  
B. 只有访问器，没有修改器  
C. 只能定义在 object 中  
D. 必须手写 setter

**正确答案：B**

**解析：**

`val` 表示不可重新赋值，因此只有访问器，没有修改器。

---

### 题目 7：抽象类的主要作用是什么？

A. 专门保存静态变量  
B. 用来定义规则，让子类实现具体行为  
C. 只能用于创建数组  
D. 只能包含 main 方法

**正确答案：B**

**解析：**

抽象类可以包含抽象方法，主要用于定义规则，要求子类实现具体行为。

---

### 题目 8：辅助构造器使用哪个关键写法定义？

A. `def this(...)`  
B. `static this(...)`  
C. `object this(...)`  
D. `new this(...)`

**正确答案：A**

**解析：**

Scala 中辅助构造器使用 `def this(...)` 定义，并且第一行必须调用其他构造器。

---

## 10. 拖拽匹配素材

1. `object` —— 定义单例对象
2. `class` —— 定义对象模板
3. 伴生对象 —— 与类同名的单例对象
4. 伴生类 —— 与伴生对象同名的类
5. `apply` —— 支持对象像函数一样被调用
6. `new` —— 直接调用类构造器创建对象
7. `Array(100)` —— 创建包含一个元素 100 的数组
8. `new Array[Int](100)` —— 创建长度为 100 的整型数组
9. `val` —— 定义只读字段
10. `var` —— 定义可变字段
11. `private` —— 限制外部直接访问
12. 主构造器 —— 写在类名后的构造器
13. 辅助构造器 —— 使用 `def this(...)` 定义
14. 抽象类 —— 用来定义规则的类
15. 抽象方法 —— 只有方法头没有方法体的方法
16. Java `static` —— Java 中的类级别成员修饰符
17. 工厂方法 —— 用来创建对象的方法
18. 访问器 —— 用来读取字段值的方法

---

## 11. 流程动画素材

### 流程主题：使用伴生对象 apply 方法创建对象

```text
1. 程序执行到 Student("Tom", 18)。
2. Scala 发现这里没有使用 new。
3. Scala 查找是否存在名为 Student 的单例对象。
4. 程序找到 Student 伴生对象。
5. Scala 在伴生对象中查找 apply 方法。
6. 程序调用 Student.apply("Tom", 18)。
7. apply 方法内部执行 new Student("Tom", 18)。
8. Student 主构造器接收 name 和 age 参数。
9. 构造器初始化 Student 对象的字段。
10. apply 方法返回创建好的 Student 对象。
11. 变量接收这个 Student 对象。
12. 后续代码可以通过对象访问 name、age 或调用方法。
```

---

## 12. 课后练习题

### 练习 1：定义一个单例对象保存常量和工具方法

**题目：**

定义一个 `CircleUtils` 单例对象，包含常量 `Pi = 3.14`，并定义方法 `area(radius: Double)` 计算圆面积。

**考查知识点：**

```text
object、常量、工具方法、方法调用
```

**参考答案：**

```scala
object CircleUtils {
  val Pi: Double = 3.14

  def area(radius: Double): Double = {
    Pi * radius * radius
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    println(CircleUtils.area(2.0))
  }
}
```

**解题思路：**

工具方法不依赖某个具体对象，适合放入单例对象中，通过对象名直接调用。

---

### 练习 2：使用伴生对象创建 Student 对象

**题目：**

定义 `Student` 类，包含 `name` 和 `age`。定义同名伴生对象，并在伴生对象中编写 `apply` 方法，使得可以使用 `Student("Tom", 18)` 创建对象。

**考查知识点：**

```text
伴生类、伴生对象、apply 方法、省略 new
```

**参考答案：**

```scala
class Student(val name: String, var age: Int)

object Student {
  def apply(name: String, age: Int): Student = {
    new Student(name, age)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = Student("Tom", 18)
    println(s.name)
    println(s.age)
  }
}
```

**解题思路：**

伴生对象和伴生类名称相同，`apply` 方法返回一个新的 `Student` 对象，因此可以用 `Student(...)` 的形式创建对象。

---

### 练习 3：区分两种数组创建方式

**题目：**

分别定义 `arr1 = Array(100)` 和 `arr2 = new Array[Int](100)`，输出它们的长度，并解释结果。

**考查知识点：**

```text
Array、apply、new、构造器、数组长度
```

**参考答案：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val arr1 = Array(100)
    val arr2 = new Array[Int](100)

    println(arr1.length)
    println(arr2.length)
  }
}
```

**运行结果：**

```text
1
100
```

**解题思路：**

`Array(100)` 表示创建一个包含元素 100 的数组；`new Array[Int](100)` 表示创建长度为 100 的整型数组。

---

### 练习 4：用伴生对象生成唯一编号

**题目：**

定义一个 `User` 类，包含只读字段 `id`。定义伴生对象 `User`，每调用一次 `create()` 就生成一个新的用户对象，编号自动加一。

**考查知识点：**

```text
伴生对象、私有变量、工厂方法、类级别状态
```

**参考答案：**

```scala
class User(val id: Int)

object User {
  private var lastId = 0

  def create(): User = {
    lastId += 1
    new User(lastId)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val u1 = User.create()
    val u2 = User.create()

    println(u1.id)
    println(u2.id)
  }
}
```

**解题思路：**

编号属于整个 `User` 类共享的信息，适合放在伴生对象中；每次创建对象时更新编号。

---

### 练习 5：定义抽象类和两个子类

**题目：**

定义抽象类 `Shape`，包含抽象方法 `area(): Double`。定义 `Rectangle` 和 `Circle` 两个子类，实现面积计算。

**考查知识点：**

```text
抽象类、抽象方法、继承、方法实现
```

**参考答案：**

```scala
abstract class Shape {
  def area(): Double
}

class Rectangle(val width: Double, val height: Double) extends Shape {
  def area(): Double = {
    width * height
  }
}

class Circle(val radius: Double) extends Shape {
  def area(): Double = {
    3.14 * radius * radius
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val r = new Rectangle(3, 4)
    val c = new Circle(2)

    println(r.area())
    println(c.area())
  }
}
```

**解题思路：**

抽象类规定“图形必须能计算面积”，不同子类根据自己的公式实现 `area()` 方法。

---

### 练习 6：为 Person 添加辅助构造器

**题目：**

定义 `Person` 类，主构造器接收姓名和年龄。添加一个无参辅助构造器，默认姓名为“未命名”，年龄为 0。

**考查知识点：**

```text
主构造器、辅助构造器、this
```

**参考答案：**

```scala
class Person(val name: String, var age: Int) {
  def this() = {
    this("未命名", 0)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person()
    println(p.name)
    println(p.age)
  }
}
```

**解题思路：**

无参辅助构造器使用 `def this()` 定义，第一行调用主构造器 `this("未命名", 0)`。

---

## 13. 本节课知识结构图文字版

```text
Scala 单例对象、伴生对象与抽象类
├── Scala 与 Java 对比
│   ├── Java
│   │   ├── 构造方法写在类体中
│   │   ├── static 表示类级别成员
│   │   └── getter/setter 常手写
│   └── Scala
│       ├── 主构造器写在类名后
│       ├── 辅助构造器用 def this(...)
│       ├── object 表示单例对象
│       └── 字段可自动生成访问器/修改器
├── 构造器复习
│   ├── 主构造器
│   │   ├── 类名后的参数列表
│   │   └── 可用 val/var 生成字段
│   └── 辅助构造器
│       ├── def this(...)
│       ├── 第一行调用其他构造器
│       └── 可提供多种创建对象方式
├── 字段与封装
│   ├── val 字段
│   │   ├── 只读
│   │   └── 只有访问器
│   ├── var 字段
│   │   ├── 可读可写
│   │   └── 有访问器和修改器
│   └── private 字段
│       ├── 外部不能直接访问
│       └── 可通过公开方法间接访问
├── 单例对象 object
│   ├── 保存工具函数
│   ├── 保存常量
│   ├── 表示唯一实例
│   └── 作为服务入口
├── 伴生对象
│   ├── 与伴生类同名
│   ├── 保存类级别内容
│   ├── 可作为工厂
│   ├── 可访问伴生类私有成员
│   └── 可定义 apply 方法
├── apply 方法
│   ├── 对象名(...) 会调用 apply
│   ├── 常用于省略 new
│   ├── 可创建类对象
│   └── 标准库集合常用
├── Array 创建方式
│   ├── Array(100)
│   │   └── 一个元素：100
│   └── new Array[Int](100)
│       └── 100 个 Int 元素
└── 抽象类
    ├── 用于定义规则
    ├── 可包含抽象方法
    ├── 子类负责实现
    └── 是后续 trait 和接口思想的基础
```

---

## 14. 后续生成网页时可使用的数据建议

* **建议课程 ID：** `scala-singleton-companion-apply-abstract-class`
* **建议课程标题：** 2026-04-09 Scala 课程知识点讲解
* **建议章节：** Scala 伴生对象、Scala 抽象类
* **建议标签：**
  * Scala 与 Java 对比
  * object
  * 单例对象
  * 伴生对象
  * 伴生类
  * apply 方法
  * 主构造器
  * 辅助构造器
  * val
  * var
  * private
  * static 对比
  * Array
  * 抽象类
  * 抽象方法
* **适合放入 summary 的内容：**
  * 本节课讲解 Scala 中单例对象、伴生对象、`apply` 方法和抽象类的基础思想。
  * Scala 使用 `object` 承担 Java 中部分 `static` 成员的职责。
  * 伴生对象与伴生类同名，可以共同完成对象创建、工具方法和类级别状态管理。
  * `Array(100)` 和 `new Array[Int](100)` 是理解 `apply` 与构造器区别的重要例子。
* **适合放入 keyPoints 的内容：**
  * `object` 是单例对象，不需要 `new`。
  * 伴生对象必须与伴生类同名。
  * 伴生对象可以定义 `apply` 方法。
  * `类名(...)` 常常表示调用伴生对象的 `apply`。
  * `Array(100)` 是一个元素，`new Array[Int](100)` 是 100 个元素。
  * 抽象类用于定义规则，子类实现规则。
* **适合放入 codeExamples 的内容：**
  * 单例对象保存工具函数。
  * 伴生对象生成唯一编号。
  * `apply` 方法创建对象。
  * `Array(100)` 与 `new Array[Int](100)` 对比。
  * 抽象类和子类实现。
* **适合放入 quiz 的内容：**
  * `object` 的作用。
  * Java `static` 和 Scala `object` 的关系。
  * 伴生类与伴生对象的定义规则。
  * `apply` 方法调用机制。
  * 两种数组创建方式的区别。
  * 抽象类的作用。
* **适合放入 dragMatch 的内容：**
  * `object` —— 单例对象
  * 伴生对象 —— 与类同名的对象
  * `apply` —— 让对象像函数一样被调用
  * `new` —— 直接调用构造器
  * 抽象类 —— 定义规则
  * 抽象方法 —— 只有方法头没有方法体
* **适合放入 flow 的内容：**
  * `Student("Tom", 18)` → 查找伴生对象 → 调用 `apply` → `new Student(...)` → 返回对象。
  * `new Array[Int](100)` → 调用构造器 → 创建长度为 100 的数组。
* **适合放入 exercises 的内容：**
  * 编写单例对象工具类。
  * 编写伴生对象和 `apply` 方法。
  * 区分数组创建方式。
  * 使用伴生对象生成编号。
  * 编写抽象类并让子类实现。
* **适合放入 conclusion 的内容：**
  * 本节课是 Scala 面向对象进阶的关键内容。
  * 学生应重点理解 `object`、伴生对象和 `apply`，这是后续学习集合、样例类、模式匹配的重要基础。
  * 抽象类和接口思想会在后续 trait、多态和面向接口编程中继续使用。

---

## 15. 课后总结

1. 本节课的核心是理解 Scala 中 `object`、伴生对象和 `apply` 方法，这些内容是 Scala 区别于 Java 的重要语法特点。
2. 学习 Scala 时要特别注意，Java 中很多 `static` 相关内容在 Scala 中通常放到单例对象或伴生对象中。
3. 伴生对象不是普通工具类，它与伴生类同名，可以保存与类密切相关的类级别状态、工厂方法和常量。
4. `apply` 方法是本节课最重要的难点之一，看到 `类名(...)` 而没有 `new` 时，要想到它可能调用了伴生对象的 `apply`。
5. `Array(100)` 和 `new Array[Int](100)` 是必须掌握的典型区别：一个是单元素数组，一个是长度为 100 的数组。
6. 主构造器和辅助构造器仍然是对象创建的基础，学习伴生对象时不能忘记构造器的作用。
7. 字段的 `val`、`var`、`private` 仍然需要反复复习，它们决定了字段能否被读取、修改或隐藏。
8. 抽象类的作用不是保存具体数据，而是定义规则，让不同子类按照规则实现自己的行为。
9. 本节课内容会在后续学习 trait、样例类、集合工厂方法、模式匹配时继续出现，尤其是伴生对象和 `apply`。
10. 课后建议多写小例子，分别练习 `object`、伴生对象、`apply`、数组创建和抽象类，不要只停留在概念记忆上。
