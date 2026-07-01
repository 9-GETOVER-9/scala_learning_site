# 课程总结：2026-04-16 Scala 编程相关知识讲解

## 1. 课程基本信息

* **课程 ID 建议：** `scala-pattern-match-case-class-case-object`
* **课程标题：** 2026-04-16 Scala 编程相关知识讲解
* **所属章节：** Scala 模式匹配、Scala 样例类 Case Class
* **上课日期：** 2026-04-16
* **知识点标签：** Scala 与 Java 对比、对象、伴生对象、参数传递、引用类型、模式匹配、match、case、模式守卫、Any、Array 匹配、List 匹配、Tuple 匹配、样例类、样例对象、case class、case object、copy、equals、抽象类、override
* **难度等级：** 初级到中级入门
* **适合对象：** 已经学习过 Scala 类、对象、伴生对象、集合基础，准备学习模式匹配和样例类的学生
* **本节课一句话概括：** 本节课围绕 Scala 中对象思想、参数传递、模式匹配、模式守卫、样例类和样例对象展开，重点帮助学生理解如何用 `match case` 和 `case class` 表达结构化数据与分类逻辑。

> 说明：原始转写中存在若干识别错误，例如“半生对象”按 Scala 术语整理为“伴生对象”，“样一类/量类”整理为“样例类”，“守位/首位”整理为“模式守卫”，“主过滤器/主路由器”整理为“主构造器”。  
> 原文多次提到 AI 编程工具、课程作业与考试安排，这些内容不属于 Scala 核心知识点，已放入“课堂补充说明”。

---

## 2. 课堂摘要

1. 本节课开头复习了抽象类和重写，说明如果父类或抽象类中定义了抽象方法，子类或对象实现时需要使用 `override` 补充方法体。
2. 课堂再次强调 Scala 中 `object` 是非常重要的概念，很多全局性、静态性、传递性任务可以通过对象或伴生对象完成。
3. 老师通过 Java 的静态方法和动态方法对比 Scala 的 `class` 与 `object`，说明类适合表达某一模块内部的普通功能，对象适合表达全局或跨模块信息传递。
4. 本节课讲解了参数传递的重要性，说明普通值类型参数更像局部变量，而数组、对象等引用类型可以携带更多结构化信息。
5. 课堂复习了伴生对象和 `apply` 方法，说明没有 `new` 的对象创建写法通常与伴生对象中的 `apply` 方法有关。
6. 本节课重点讲解了模式匹配的基本语法：使用 `match` 开始匹配，用多个 `case` 分支描述不同情况，并从上到下依次匹配。
7. 课堂进一步说明模式匹配不仅能匹配简单值，还可以匹配 `Array`、`List`、元组、类对象、样例类对象和 `Option` 等结构。
8. 本节课介绍了模式守卫，即在 `case` 后添加 `if` 条件，让匹配逻辑更加精确。
9. 课堂重点讲解了样例类 `case class`，说明它适合快速定义保存数据的类，创建对象时可以省略 `new`，并自动生成 `toString`、`equals`、`hashCode`、`copy` 等方法。
10. 本节课还讲到样例对象 `case object`，说明它是一种没有参数、没有主构造器的单例对象，常用于表示固定枚举值或特定消息。
11. 最后老师布置了样例类相关作业，并说明第八周交实验报告一、第十周交实验报告二，测试内容不作为考试重点。

---

## 3. 本节课学习目标

学完本节课后，你应该能够：

1. 理解 Scala 中 `object`、伴生对象和伴生类在传递信息、组织全局功能方面的作用。
2. 能区分普通参数和引用类型参数，知道对象、数组、列表等结构化数据为什么更适合传递复杂信息。
3. 能写出基本的 `match case` 模式匹配语法，并理解分支从上到下依次匹配的执行顺序。
4. 能使用 `_` 作为默认匹配分支，处理前面所有 `case` 都不匹配的情况。
5. 能使用模式守卫 `case x if 条件 =>` 进一步限定匹配条件。
6. 能看懂并编写对简单值、数组、列表、元组和对象类型的模式匹配。
7. 能定义简单样例类 `case class`，并使用它保存结构化数据。
8. 能解释样例类为什么可以省略 `new` 创建对象。
9. 能使用样例类自动生成的 `toString`、`equals`、`copy` 等方法。
10. 能定义简单样例对象 `case object`，并知道它适合表示固定值或消息类型。
11. 能结合样例类和模式匹配完成基础分类任务，例如识别学生、老师、订单、顾客等对象。
12. 能理解抽象类与 `override` 的关系，为后续学习特质 `trait` 和多态打基础。

---

## 4. 知识点详细整理

### 知识点 1：抽象类与 override 复习

#### 这个知识点是什么？

抽象类可以定义没有方法体的抽象方法，子类继承后需要实现这些方法。在 Scala 中，如果子类重写父类已有的方法，通常要写 `override`。

```scala
abstract class Action {
  def execute(): Unit
}

class OpenAction extends Action {
  override def execute(): Unit = {
    println("执行打开操作")
  }
}
```

#### 为什么要学它？

抽象类用于定义规则。父类规定“必须做什么”，子类负责说明“具体怎么做”。这是模式匹配、样例类、特质和多态学习中的基础思想。

#### 基本语法

```scala
abstract class 父类名 {
  def 抽象方法名(): 返回类型
}

class 子类名 extends 父类名 {
  override def 抽象方法名(): 返回类型 = {
    // 具体实现
  }
}
```

#### 课堂中的理解方式

老师从 Java 中的抽象类讲起：子类必须实现父类中的抽象方法。Scala 也是如此，只不过 Scala 中不但 `class` 可以继承和重写，`object` 如果继承抽象类或特质，也可以重写其中的方法。

#### 初学者容易犯的错误

1. 继承抽象类后忘记实现抽象方法。
2. 重写父类已有具体方法时忘记写 `override`。
3. 以为 `object` 不能继承抽象类或特质。
4. 把“重载”和“重写”混淆。
5. 不理解抽象类的核心是定义规则。

#### 正确示例

```scala
abstract class MessageHandler {
  def handle(message: String): Unit
}

object ConsoleHandler extends MessageHandler {
  override def handle(message: String): Unit = {
    println("收到消息：" + message)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    ConsoleHandler.handle("Hello Scala")
  }
}
```

#### 示例解释

1. `MessageHandler` 是抽象类。
2. `handle` 是抽象方法，只有方法头。
3. `ConsoleHandler` 是单例对象，也可以继承抽象类。
4. `override def handle(...)` 实现了父类规则。
5. 调用 `ConsoleHandler.handle(...)` 输出消息。

---

### 知识点 2：Scala 中 object 的作用复习

#### 这个知识点是什么？

`object` 是 Scala 中的单例对象。在程序中，一个 `object` 只有一个实例，不需要使用 `new` 创建。它常用于：

* 程序入口。
* 工具方法。
* 全局常量。
* 类似 Java `static` 的方法或字段。
* 消息传递或跨模块共享的信息。
* 伴生对象。

#### 为什么要学它？

Scala 中没有直接照搬 Java 的 `static` 关键字。理解 `object`，才能理解 Scala 如何组织全局功能、伴生对象、`apply` 方法、样例对象等。

#### 基本语法

```scala
object Config {
  val appName = "ScalaCourse"

  def printInfo(): Unit = {
    println(appName)
  }
}
```

调用：

```scala
Config.printInfo()
```

#### 课堂中的理解方式

老师把 `object` 理解为一种特殊封装体。对于全局性作用域、跨模块传递信息、工具性功能，可以考虑放在 `object` 中；而某个模块内部的普通属性和行为，则更适合放在 `class` 中。

#### 初学者容易犯的错误

1. 用 `new` 创建 `object`。
2. 把所有内容都写进 `object`，不用 `class` 表示具体对象。
3. 在 Scala 中寻找 Java 风格的 `static`。
4. 不理解 `object` 和伴生对象的区别。
5. 不知道 `object` 也可以继承抽象类或特质。

#### 正确示例

```scala
object MathService {
  def distance(x1: Double, y1: Double, x2: Double, y2: Double): Double = {
    val dx = x1 - x2
    val dy = y1 - y2
    math.sqrt(dx * dx + dy * dy)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    println(MathService.distance(0, 0, 3, 4))
  }
}
```

#### 示例解释

1. `MathService` 是单例对象。
2. `distance` 是工具方法。
3. 工具方法不依赖某个具体实例，所以适合放在 `object` 中。
4. 调用时直接使用 `MathService.distance(...)`。

---

### 知识点 3：参数传递与引用类型

#### 这个知识点是什么？

参数是函数或方法之间传递信息的方式。Scala 中可以传递简单值，也可以传递结构化对象。

简单值示例：

```scala
def add(a: Int, b: Int): Int = a + b
```

对象参数示例：

```scala
class Point(val x: Double, val y: Double)

def printPoint(p: Point): Unit = {
  println(p.x + ", " + p.y)
}
```

数组参数示例：

```scala
def printArray(arr: Array[Int]): Unit = {
  arr.foreach(println)
}
```

#### 为什么要学它？

课堂中强调，参数设计会影响代码复用率和数据结构设计。传递一个 `Int` 只能携带一个数字，而传递一个对象可以携带多个字段和方法，因此对象、数组、列表等结构化参数能表达更多信息。

#### 基本语法

```scala
def 方法名(参数名: 参数类型): 返回类型 = {
  方法体
}
```

#### 课堂中的理解方式

老师举了 `Point` 的例子：如果计算两点距离，传递 `x1`、`y1`、`x2`、`y2` 可以完成任务，但传递 `Point` 对象更有结构，因为 `Point` 不只包含坐标，还可以包含其他属性和方法。

#### 初学者容易犯的错误

1. 方法参数过多，导致调用混乱。
2. 明明是一组相关数据，却拆成多个普通参数传递。
3. 不理解对象参数可以携带属性和方法。
4. 误以为所有参数都是全局共享变量。
5. 忽略参数类型设计对代码复用的影响。

#### 正确示例

```scala
class Point(val x: Double, val y: Double)

object Geometry {
  def distance(p1: Point, p2: Point): Double = {
    val dx = p1.x - p2.x
    val dy = p1.y - p2.y
    math.sqrt(dx * dx + dy * dy)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p1 = new Point(0, 0)
    val p2 = new Point(3, 4)

    println(Geometry.distance(p1, p2))
  }
}
```

#### 示例解释

1. `Point` 把 `x` 和 `y` 封装成一个整体。
2. `distance` 方法接收两个 `Point` 对象。
3. 方法内部通过 `p1.x`、`p1.y`、`p2.x`、`p2.y` 访问坐标。
4. 这种写法比传递四个零散数字更清晰。

---

### 知识点 4：伴生对象与 apply 方法复习

#### 这个知识点是什么？

伴生对象是与某个类同名的 `object`。如果伴生对象定义了 `apply` 方法，就可以使用 `类名(...)` 的方式创建或获取对象。

```scala
class Test {
  def show(): Unit = {
    println("have a class")
  }
}

object Test {
  def apply(): Test = {
    println("Hello Scala object")
    new Test()
  }
}
```

调用：

```scala
val t = Test()
t.show()
```

#### 为什么要学它？

Scala 中很多没有 `new` 的写法都和伴生对象的 `apply` 方法有关，例如：

```scala
Array(1, 2, 3)
List(1, 2, 3)
Person("Tom", 18)
```

理解 `apply` 有助于理解 Scala 标准库和样例类。

#### 基本语法

```scala
class 类名(参数列表)

object 类名 {
  def apply(参数列表): 类名 = {
    new 类名(参数列表)
  }
}
```

#### 课堂中的理解方式

老师反复强调：当看到没有 `new` 的对象创建形式时，要想到可能是伴生对象在起作用。伴生对象中的 `apply` 方法可以返回类对象，因此调用 `Test()` 时，实际上可能是先进入 `object Test` 的 `apply`，再创建 `class Test` 的对象。

#### 初学者容易犯的错误

1. 看到 `Person("Tom")` 以为没有创建对象。
2. 不知道 `Person("Tom")` 实际可能是 `Person.apply("Tom")`。
3. 伴生对象和伴生类名字不一致。
4. `apply` 方法没有返回正确类型。
5. 不理解 `new Test()` 和 `Test()` 的区别。

#### 正确示例

```scala
class Student(val name: String, val age: Int)

object Student {
  def apply(name: String, age: Int): Student = {
    new Student(name, age)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s1 = new Student("Tom", 18)
    val s2 = Student("Jerry", 20)

    println(s1.name)
    println(s2.name)
  }
}
```

#### 示例解释

1. `new Student("Tom", 18)` 直接调用主构造器。
2. `Student("Jerry", 20)` 调用伴生对象的 `apply`。
3. `apply` 内部返回一个新的 `Student` 对象。
4. 两种方式最后都得到 `Student` 实例。

---

### 知识点 5：模式匹配 match case 基本语法

#### 这个知识点是什么？

模式匹配是 Scala 中非常重要的分支结构。它使用 `match` 关键字开始匹配，用 `case` 表示不同分支。

```scala
x match {
  case 1 => println("one")
  case 2 => println("two")
  case _ => println("many")
}
```

#### 为什么要学它？

模式匹配比普通 `if-else` 和 Java `switch` 更强大。它不仅能匹配具体值，还能匹配类型、数组结构、列表结构、元组结构、样例类对象等，是 Scala 中非常核心的语法。

#### 基本语法

```scala
待匹配的值 match {
  case 模式1 => 代码1
  case 模式2 => 代码2
  case _ => 默认代码
}
```

#### 课堂中的理解方式

老师把模式匹配和 Java 中的 `switch` 类比：程序从第一个 `case` 开始匹配，如果匹配成功，就执行对应逻辑；如果不成功，就继续匹配下一个分支。不同的是，Scala 的模式匹配能处理的情况更丰富。

#### 初学者容易犯的错误

1. 忘记写 `match`。
2. `case` 分支后写错箭头，应使用 `=>`。
3. 忘记默认分支 `_`，导致匹配不完整。
4. 认为 `match case` 只能匹配数字。
5. 以为每个 `case` 后需要写 `break`。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val day = 2

    day match {
      case 1 => println("星期一")
      case 2 => println("星期二")
      case 3 => println("星期三")
      case _ => println("其他日期")
    }
  }
}
```

#### 示例解释

1. `day match` 表示对 `day` 的值进行匹配。
2. `case 1` 匹配值为 `1` 的情况。
3. `case 2` 匹配值为 `2` 的情况。
4. 当前 `day` 是 `2`，所以输出“星期二”。
5. `_` 表示其他所有情况。

---

### 知识点 6：默认分支 `_` 与自动中断

#### 这个知识点是什么？

在 Scala 模式匹配中，`_` 表示通配符，也就是“其他所有情况”。

```scala
x match {
  case 1 => "one"
  case 2 => "two"
  case _ => "other"
}
```

Scala 的 `match case` 不需要像 Java `switch` 一样手动写 `break`，匹配成功后会执行对应分支并结束匹配。

#### 为什么要学它？

默认分支可以避免匹配不完整。自动中断可以避免 Java `switch` 中忘记写 `break` 导致的穿透问题。

#### 基本语法

```scala
case _ => 默认处理逻辑
```

#### 课堂中的理解方式

老师提到：所有 `case` 都匹配不上时，就执行 `_` 这个分支；每个 `case` 后不需要使用 `break`，它会自动结束当前匹配。

#### 初学者容易犯的错误

1. 忘记写 `_` 默认分支。
2. 把 `_` 当成普通变量名。
3. 在每个 `case` 后面写 `break`。
4. 把默认分支放在最前面，导致后面的分支永远匹配不到。
5. 不知道模式匹配是从上到下执行的。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val score = "B"

    val result = score match {
      case "A" => "优秀"
      case "B" => "良好"
      case "C" => "及格"
      case _ => "需要重新输入"
    }

    println(result)
  }
}
```

#### 示例解释

1. `score` 的值是 `"B"`。
2. 程序先尝试匹配 `"A"`，失败。
3. 再匹配 `"B"`，成功。
4. 返回结果 `"良好"`。
5. 匹配成功后不会继续执行后面的分支。

---

### 知识点 7：模式守卫

#### 这个知识点是什么？

模式守卫是在 `case` 模式后添加 `if` 条件，用来进一步限制匹配。

```scala
x match {
  case n if n >= 0 => "非负数"
  case n if n < 0 => "负数"
}
```

#### 为什么要学它？

有时候只匹配值或类型还不够，还要判断附加条件。例如成绩是 B 且学生名字是 Leo，或者数字是正数，或者年龄大于 18。这时就可以使用模式守卫。

#### 基本语法

```scala
case 模式 if 条件 => 代码
```

#### 课堂中的理解方式

老师把模式守卫理解为“在模式后面嵌入一个条件”，类似在 `for` 循环或其他结构中加入 `if` 过滤条件。它的作用就是让匹配更加精确。

#### 初学者容易犯的错误

1. 把 `if` 写在 `match` 外面，导致逻辑不清晰。
2. 忘记守卫条件必须写在 `case` 模式后。
3. 把模式守卫和普通 `if-else` 完全混淆。
4. 守卫条件写得太宽，导致后续分支无法执行。
5. 默认分支放太前，导致守卫分支失效。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val name = "Leo"
    val grade = "B"

    val comment = grade match {
      case "A" => "优秀"
      case "B" if name == "Leo" => "Leo 是良好"
      case "B" => "良好"
      case "C" => "及格"
      case _ => "未知等级"
    }

    println(comment)
  }
}
```

#### 示例解释

1. `grade` 是 `"B"`。
2. 先匹配 `"A"`，失败。
3. 匹配 `"B" if name == "Leo"`，因为名字是 Leo，所以成功。
4. 输出 `"Leo 是良好"`。
5. 如果名字不是 Leo，就会继续匹配普通的 `"B"` 分支。

---

### 知识点 8：匹配类型与 Any

#### 这个知识点是什么？

Scala 的模式匹配可以匹配不同类型的数据。为了让一个参数能接收不同类型，可以使用 `Any`。`Any` 是 Scala 类型层级中最顶层的类型，可以接收很多类型的值。

```scala
def describe(x: Any): String = {
  x match {
    case i: Int => "整数：" + i
    case s: String => "字符串：" + s
    case _ => "其他类型"
  }
}
```

#### 为什么要学它？

课堂中多次提到模式匹配可以匹配数组、列表、类对象、样例类对象等。如果一个方法参数要接收这些不同类型，就不能把类型写死，可以使用 `Any` 作为入门阶段的统一入口。

#### 基本语法

```scala
变量 match {
  case 变量名: 类型 => 处理逻辑
  case _ => 默认处理
}
```

#### 课堂中的理解方式

老师指出，模式匹配不仅能匹配简单值，还能匹配 `Array`、`List`、`Tuple`、`Class` 等结构，所以参数有时会写成 `Any`。这样传入学生对象、老师对象、数组或字符串时，都可以进入同一个匹配方法中处理。

#### 初学者容易犯的错误

1. 以为 `Any` 只能表示任意字符串。
2. 类型匹配时漏写冒号。
3. 使用 `Any` 后不做模式匹配，直接当具体类型用。
4. 不理解 `Any` 只是接收范围广，不代表可以随便调用所有方法。
5. 类型匹配分支顺序不合理。

#### 正确示例

```scala
object Main {
  def describe(x: Any): String = {
    x match {
      case i: Int => "这是整数：" + i
      case s: String => "这是字符串：" + s
      case arr: Array[Int] => "这是整数数组，长度为：" + arr.length
      case _ => "未知类型"
    }
  }

  def main(args: Array[String]): Unit = {
    println(describe(10))
    println(describe("Scala"))
    println(describe(Array(1, 2, 3)))
  }
}
```

#### 示例解释

1. `describe` 的参数类型是 `Any`，可以接收多种类型。
2. `case i: Int` 匹配整数。
3. `case s: String` 匹配字符串。
4. `case arr: Array[Int]` 匹配整型数组。
5. `_` 处理其他类型。

---

### 知识点 9：匹配 Array、List 和 Tuple

#### 这个知识点是什么？

模式匹配不仅能匹配值和类型，还能匹配集合结构。

匹配数组：

```scala
arr match {
  case Array(1, 2, 3) => "数组是 1,2,3"
  case Array(0, _*) => "以 0 开头的数组"
  case _ => "其他数组"
}
```

匹配列表：

```scala
list match {
  case List(1, 2, 3) => "列表是 1,2,3"
  case head :: tail => "有头有尾的列表"
  case Nil => "空列表"
}
```

匹配元组：

```scala
tuple match {
  case (name, age) => s"$name 的年龄是 $age"
}
```

#### 为什么要学它？

集合和元组是 Scala 中常见的数据结构。能对结构进行匹配，就可以更自然地处理不同数据格式。

#### 基本语法

```scala
case Array(...) => ...
case List(...) => ...
case (a, b) => ...
```

#### 课堂中的理解方式

老师提到模式匹配可以匹配 `Array`、`List`、`Tuple`，因为这些都是数据结构。Scala 程序中经常传递结构化数据，模式匹配可以直接根据结构做不同处理。

#### 初学者容易犯的错误

1. 只会匹配数字，不知道可以匹配集合。
2. 不理解 `_ *` 可以匹配数组中的多个剩余元素。
3. 把数组和列表写法混淆。
4. 匹配元组时元素个数不一致。
5. 不知道列表的 `head :: tail` 写法。

#### 正确示例

```scala
object Main {
  def describe(value: Any): String = {
    value match {
      case Array(1, 2, 3) => "数组正好是 1, 2, 3"
      case Array(0, _*) => "数组以 0 开头"
      case List("hi", name) => "向 " + name + " 打招呼"
      case (name: String, age: Int) => name + " 的年龄是 " + age
      case _ => "其他数据"
    }
  }

  def main(args: Array[String]): Unit = {
    println(describe(Array(1, 2, 3)))
    println(describe(Array(0, 5, 6)))
    println(describe(List("hi", "Tom")))
    println(describe(("Alice", 18)))
  }
}
```

#### 示例解释

1. `Array(1, 2, 3)` 匹配固定数组。
2. `Array(0, _*)` 匹配以 0 开头的数组。
3. `List("hi", name)` 匹配两个元素的列表，并把第二个元素绑定给 `name`。
4. `(name: String, age: Int)` 匹配二元组。
5. `_` 处理其他情况。

---

### 知识点 10：样例类 case class

#### 这个知识点是什么？

样例类是使用 `case class` 定义的特殊类，常用于保存数据，并且非常适合与模式匹配配合使用。

```scala
case class Person(name: String, age: Int)
```

创建对象：

```scala
val p = Person("Tom", 18)
```

不需要写 `new`。

#### 为什么要学它？

样例类是 Scala 中非常重要的结构化数据表示方式。它适合表示人、订单、顾客、账单、票据、记录等结构相同但内容不同的数据。后续学习模式匹配、集合处理、函数式编程都会经常使用它。

#### 基本语法

```scala
case class 类名(字段1: 类型, 字段2: 类型, ...)
```

#### 课堂中的理解方式

老师把样例类比作一种固定格式的数据结构，类似一张表或一条记录。比如 `Person(name, age)` 就像有两个单元格：姓名和年龄。每次创建一个 `Person`，就是按照这个格式保存一条数据。

#### 初学者容易犯的错误

1. 忘记写 `case`。
2. 写成 `case object Person(name: String)`，混淆样例类和样例对象。
3. 以为样例类必须使用 `new` 创建。
4. 不知道样例类字段默认通常是不可变的 `val`。
5. 不会结合模式匹配提取样例类字段。

#### 正确示例

```scala
case class Person(name: String, age: Int)

object Main {
  def main(args: Array[String]): Unit = {
    val p1 = Person("Alice", 25)
    val p2 = Person("Bob", 32)

    println(p1)
    println(p2.name)
    println(p2.age)
  }
}
```

#### 示例解释

1. `case class Person(name: String, age: Int)` 定义样例类。
2. `Person("Alice", 25)` 创建样例类对象，不需要 `new`。
3. `println(p1)` 会自动输出友好的字符串形式。
4. `p2.name` 读取姓名。
5. `p2.age` 读取年龄。

---

### 知识点 11：样例类自动生成的方法

#### 这个知识点是什么？

样例类会自动生成一些常用方法，例如：

* `apply`：支持省略 `new` 创建对象。
* `toString`：输出友好的字符串。
* `equals`：按内容比较两个对象是否相等。
* `hashCode`：生成哈希值，配合集合使用。
* `copy`：复制对象，并可以修改部分字段。

#### 为什么要学它？

普通类要手写很多方法，而样例类自动生成这些方法，特别适合保存数据、比较数据、复制数据。

#### 基本语法

```scala
case class Person(name: String, age: Int)

val p1 = Person("李四", 21)
val p2 = p1.copy(name = "王五")
```

#### 课堂中的理解方式

老师讲到 `copy` 的例子：可以复制一个样例类对象，并只修改其中一部分内容。例如把姓名从“李四”改成“王五”，年龄保持不变。这在记账、票据、报表等场景中很方便。

#### 初学者容易犯的错误

1. 不知道 `copy` 会返回新对象，而不是修改原对象。
2. 以为样例类比较的是内存地址；实际上默认按字段内容比较。
3. 不知道样例类可以直接打印出可读内容。
4. 对样例类对象使用 `copy` 时字段名写错。
5. 误以为所有类都有这些自动方法。

#### 正确示例

```scala
case class Person(name: String, age: Int)

object Main {
  def main(args: Array[String]): Unit = {
    val p1 = Person("李四", 21)
    val p2 = Person("李四", 21)
    val p3 = p1.copy(name = "王五")

    println(p1)
    println(p1 == p2)
    println(p3)
  }
}
```

#### 示例解释

1. `p1` 和 `p2` 字段内容相同。
2. `p1 == p2` 返回 `true`，因为样例类默认按内容比较。
3. `p1.copy(name = "王五")` 创建一个新对象。
4. 新对象姓名变成“王五”，年龄仍然是 `21`。
5. 原对象 `p1` 不会被修改。

---

### 知识点 12：样例类与模式匹配

#### 这个知识点是什么？

样例类特别适合和模式匹配结合使用，可以直接匹配对象类型，并提取字段。

```scala
case class Student(name: String, age: Int)
case class Teacher(name: String, subject: String)

def show(person: Any): Unit = {
  person match {
    case Student(name, age) => println(s"学生：$name，年龄：$age")
    case Teacher(name, subject) => println(s"老师：$name，学科：$subject")
    case _ => println("未知身份")
  }
}
```

#### 为什么要学它？

这部分是考试和实际编程都很重要的内容。通过样例类与模式匹配，可以把不同结构的数据放到一起处理，并根据类型自动分支。

#### 基本语法

```scala
对象 match {
  case 样例类名(字段变量1, 字段变量2) => 处理逻辑
  case _ => 默认逻辑
}
```

#### 课堂中的理解方式

老师用 `Customer` 和 `Order`、`Student` 和 `Teacher` 的例子说明：定义多个样例类后，可以把它们作为 `Any` 类型传入同一个匹配函数，再根据具体对象类型输出不同内容。

#### 初学者容易犯的错误

1. `case Student(name, age)` 中字段数量和样例类定义不一致。
2. 忘记默认分支。
3. 用普通类进行同样写法但没有定义提取器，导致匹配不成功。
4. 不理解 `name`、`age` 是从对象中提取出来的新变量。
5. 把样例类对象和字符串混淆。

#### 正确示例

```scala
case class Customer(name: String, age: Int)
case class Order(id: Int)

object Main {
  def printInfo(value: Any): Unit = {
    value match {
      case Customer(name, age) =>
        println(s"顾客姓名：$name，年龄：$age")
      case Order(id) =>
        println(s"订单编号：$id")
      case _ =>
        println("未匹配的数据")
    }
  }

  def main(args: Array[String]): Unit = {
    val c: Any = Customer("唐唐", 73)
    val o: Any = Order(123)

    printInfo(c)
    printInfo(o)
  }
}
```

#### 示例解释

1. `Customer` 和 `Order` 都是样例类。
2. `printInfo` 接收 `Any`，可以传入不同类型。
3. `case Customer(name, age)` 匹配顾客对象，并提取姓名和年龄。
4. `case Order(id)` 匹配订单对象，并提取订单编号。
5. `_` 处理其他数据。

---

### 知识点 13：样例对象 case object

#### 这个知识点是什么？

样例对象使用 `case object` 定义。它是单例对象，没有主构造器，不能带参数，常用于表示固定值或固定消息。

```scala
sealed trait Sex
case object Male extends Sex
case object Female extends Sex
```

样例对象可以作为样例类中的字段值：

```scala
case class Person(name: String, sex: Sex)
```

#### 为什么要学它？

样例对象适合表示“固定的几个值”，例如性别、状态、命令、消息类型等。它经常和样例类、模式匹配一起使用。

#### 基本语法

```scala
case object 对象名
```

常见配合写法：

```scala
trait 类型名
case object 值1 extends 类型名
case object 值2 extends 类型名
```

#### 课堂中的理解方式

老师通过 `Male`、`Female` 的例子说明：样例对象没有参数，不像样例类那样有主构造器。它可以作为某个字段的值，例如 `Person("张三", Male)`。

#### 初学者容易犯的错误

1. 给 `case object` 写参数列表。
2. 把 `case object` 当成可以 `new` 的类。
3. 不理解样例对象是单例。
4. 不知道它常和 `trait` 一起表示固定取值范围。
5. 混淆 `case class` 和 `case object`。

#### 正确示例

```scala
sealed trait Sex
case object Male extends Sex
case object Female extends Sex

case class Person(name: String, sex: Sex)

object Main {
  def main(args: Array[String]): Unit = {
    val p1 = Person("张三", Male)
    val p2 = Person("李四", Female)

    println(p1)
    println(p2)
  }
}
```

#### 示例解释

1. `Sex` 表示性别这一类取值。
2. `Male` 和 `Female` 是两个样例对象。
3. `Person` 的 `sex` 字段类型是 `Sex`。
4. 创建对象时可以传入 `Male` 或 `Female`。
5. 样例对象没有参数，也不需要 `new`。

---

### 知识点 14：在模式中进行变量赋值

#### 这个知识点是什么？

在模式匹配中，可以把匹配到的内容绑定到变量中，然后在右侧代码中使用。

```scala
grade match {
  case "A" => "优秀"
  case other => "其他等级：" + other
}
```

也可以在样例类中提取字段：

```scala
case Student(name, age) => println(name + age)
```

#### 为什么要学它？

模式匹配不只是判断“是不是某个值”，还可以把匹配到的数据取出来继续使用。这是它比普通 `switch` 更强大的地方。

#### 基本语法

```scala
case 变量名 => 使用变量名
case 样例类名(变量1, 变量2) => 使用变量1和变量2
```

#### 课堂中的理解方式

老师讲到可以用变量替代 `_`，这样不仅能匹配，还能拿到匹配的值。例如成绩匹配中，如果不是 A、B、C，可以把其他输入保存到变量中，再输出提示。

#### 初学者容易犯的错误

1. 把变量绑定和常量匹配混淆。
2. 默认分支中只写 `_`，但后面又想使用匹配到的值。
3. 样例类字段提取数量不一致。
4. 变量名与外部变量重名，导致理解混乱。
5. 不知道 `case other =>` 会匹配所有剩余情况。

#### 正确示例

```scala
object Main {
  def comment(grade: String): String = {
    grade match {
      case "A" => "优秀"
      case "B" => "良好"
      case "C" => "及格"
      case other => "未知等级：" + other
    }
  }

  def main(args: Array[String]): Unit = {
    println(comment("A"))
    println(comment("D"))
  }
}
```

#### 示例解释

1. `"A"`、`"B"`、`"C"` 是明确匹配。
2. `case other` 会匹配剩余所有情况。
3. `other` 保存传进来的值。
4. 当输入 `"D"` 时，输出 `"未知等级：D"`。

---

## 5. 重点概念对比

| 概念 A | 概念 B | 区别 | 示例 |
|---|---|---|---|
| `class` | `object` | `class` 表示对象模板；`object` 表示单例对象，常用于全局功能或静态类比功能 | `class Student`；`object StudentService` |
| 普通参数 | 对象参数 | 普通参数只携带单个值；对象参数可以携带多个字段和方法 | `distance(x, y)`；`distance(point)` |
| 值类型参数 | 引用类型参数 | 值类型常用于简单计算；数组、对象等引用类型能代表结构化信息 | `Int`；`Array[Int]`、`Person` |
| `match` | `if-else` | `match` 适合多种模式和结构匹配；`if-else` 适合条件判断 | `x match { case 1 => ... }`；`if (x == 1)` |
| Scala `match` | Java `switch` | Scala 可匹配值、类型、集合、样例类；Java 传统 switch 能力较有限 | `case Student(n,a)`；`case 1:` |
| `case _` | `case other` | `_` 匹配但不保存值；`other` 匹配并保存值 | `case _ =>`；`case other =>` |
| 普通 case | 模式守卫 | 普通 case 只按模式匹配；模式守卫还要满足 if 条件 | `case "B"`；`case "B" if name == "Leo"` |
| `case class` | 普通 `class` | 样例类自动生成 `apply`、`toString`、`equals`、`hashCode`、`copy` 等方法 | `case class Person(...)`；`class Person(...)` |
| `case class` | `case object` | 样例类可以带参数并创建多个对象；样例对象无参数，是单例 | `case class Person(name: String)`；`case object Male` |
| `new Person(...)` | `Person(...)` | 前者直接调用构造器；后者通常调用伴生对象或样例类自动生成的 `apply` | `new Person("Tom")`；`Person("Tom")` |
| `equals` | `copy` | `equals` 比较内容是否相等；`copy` 复制对象并可修改部分字段 | `p1 == p2`；`p1.copy(name="王五")` |
| 抽象类 | 样例类 | 抽象类用于定义规则；样例类主要用于保存数据并支持匹配 | `abstract class Action`；`case class Order(id: Int)` |
| `Any` | 具体类型 | `Any` 可接收多种类型；具体类型限制更明确 | `def f(x: Any)`；`def f(s: Student)` |
| `Array` 匹配 | `List` 匹配 | 数组用 `Array(...)` 模式；列表可用 `List(...)` 或 `head :: tail` | `case Array(1,2,3)`；`case head :: tail` |

---

## 6. 代码示例整理

### 示例 1：基本 match case 匹配

**适用知识点：**

```text
match、case、默认分支、自动中断
```

**代码：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val number = 2

    val result = number match {
      case 1 => "one"
      case 2 => "two"
      case 3 => "three"
      case _ => "many"
    }

    println(result)
  }
}
```

**运行结果：**

```text
two
```

**代码解释：**

1. `number match` 表示对 `number` 进行模式匹配。
2. `case 1` 匹配数字 1。
3. `case 2` 匹配数字 2。
4. 当前值是 2，所以结果是 `"two"`。
5. `_` 用于处理其他情况。

**初学者提示：**

```text
Scala 的 match case 不需要写 break，匹配成功后会自动结束。
```

---

### 示例 2：使用模式守卫判断成绩

**适用知识点：**

```text
模式守卫、case if、字符串匹配、默认分支
```

**代码：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val name = "Leo"
    val grade = "B"

    val comment = grade match {
      case "A" => "优秀"
      case "B" if name == "Leo" => "Leo 同学表现良好"
      case "B" => "良好"
      case "C" => "及格"
      case _ => "未知等级"
    }

    println(comment)
  }
}
```

**运行结果：**

```text
Leo 同学表现良好
```

**代码解释：**

1. `grade` 的值是 `"B"`。
2. 第一个分支 `"A"` 不匹配。
3. 第二个分支要求成绩是 `"B"` 且姓名是 `"Leo"`。
4. 两个条件都满足，所以输出特殊评价。
5. 如果姓名不是 Leo，就会进入普通 `"B"` 分支。

**初学者提示：**

```text
模式守卫适合处理“匹配某种模式，并且还要满足某个条件”的情况。
```

---

### 示例 3：匹配不同类型的数据

**适用知识点：**

```text
Any、类型匹配、Array、String、Int
```

**代码：**

```scala
object Main {
  def describe(value: Any): String = {
    value match {
      case i: Int => "整数：" + i
      case s: String => "字符串：" + s
      case arr: Array[Int] => "整型数组，长度：" + arr.length
      case _ => "其他类型"
    }
  }

  def main(args: Array[String]): Unit = {
    println(describe(100))
    println(describe("Scala"))
    println(describe(Array(1, 2, 3)))
  }
}
```

**运行结果：**

```text
整数：100
字符串：Scala
整型数组，长度：3
```

**代码解释：**

1. `describe` 接收 `Any` 类型参数。
2. `case i: Int` 匹配整数。
3. `case s: String` 匹配字符串。
4. `case arr: Array[Int]` 匹配整型数组。
5. 不符合以上情况时进入 `_` 分支。

**初学者提示：**

```text
Any 能接收很多类型，但使用时通常需要通过模式匹配判断具体类型。
```

---

### 示例 4：样例类的创建、比较和复制

**适用知识点：**

```text
case class、apply、toString、equals、copy
```

**代码：**

```scala
case class Person(name: String, age: Int)

object Main {
  def main(args: Array[String]): Unit = {
    val p1 = Person("李四", 21)
    val p2 = Person("李四", 21)
    val p3 = p1.copy(name = "王五")

    println(p1)
    println(p1 == p2)
    println(p3)
  }
}
```

**运行结果：**

```text
Person(李四,21)
true
Person(王五,21)
```

**代码解释：**

1. `case class Person` 定义样例类。
2. `Person("李四", 21)` 创建对象，不需要 `new`。
3. `println(p1)` 自动调用友好的 `toString`。
4. `p1 == p2` 比较字段内容，结果为 `true`。
5. `copy(name = "王五")` 复制对象并修改姓名。

**初学者提示：**

```text
copy 会返回一个新对象，不会修改原来的对象。
```

---

### 示例 5：样例类与模式匹配识别不同对象

**适用知识点：**

```text
case class、模式匹配、字段提取、Any
```

**代码：**

```scala
case class Student(name: String, age: Int)
case class Teacher(name: String, subject: String)

object Main {
  def show(person: Any): Unit = {
    person match {
      case Student(name, age) =>
        println(s"学生：$name，年龄：$age")
      case Teacher(name, subject) =>
        println(s"老师：$name，学科：$subject")
      case _ =>
        println("未知身份")
    }
  }

  def main(args: Array[String]): Unit = {
    show(Student("Tom", 12))
    show(Teacher("John", "数学"))
    show("其他数据")
  }
}
```

**运行结果：**

```text
学生：Tom，年龄：12
老师：John，学科：数学
未知身份
```

**代码解释：**

1. `Student` 和 `Teacher` 是两个样例类。
2. `show` 方法接收 `Any`。
3. `case Student(name, age)` 匹配学生对象并取出字段。
4. `case Teacher(name, subject)` 匹配老师对象并取出字段。
5. 如果都不匹配，输出“未知身份”。

**初学者提示：**

```text
样例类非常适合与模式匹配配合使用，这是 Scala 中常见写法。
```

---

### 示例 6：样例对象表示固定取值

**适用知识点：**

```text
case object、trait、样例类字段、模式匹配
```

**代码：**

```scala
sealed trait Sex
case object Male extends Sex
case object Female extends Sex

case class Person(name: String, sex: Sex)

object Main {
  def show(person: Person): Unit = {
    person.sex match {
      case Male => println(person.name + " 是男性")
      case Female => println(person.name + " 是女性")
    }
  }

  def main(args: Array[String]): Unit = {
    val p1 = Person("张三", Male)
    val p2 = Person("李四", Female)

    show(p1)
    show(p2)
  }
}
```

**运行结果：**

```text
张三 是男性
李四 是女性
```

**代码解释：**

1. `Sex` 表示性别这一类取值。
2. `Male` 和 `Female` 是样例对象。
3. `Person` 的 `sex` 字段类型是 `Sex`。
4. 模式匹配根据 `Male` 或 `Female` 执行不同逻辑。
5. 样例对象没有参数，也不用 `new`。

**初学者提示：**

```text
case object 常用于表示固定状态、固定命令或固定枚举值。
```

---

## 7. 课堂案例整理

### 案例 1：用对象参数表示点并计算距离

**对应知识点：**

```text
参数传递、对象参数、引用类型、代码复用
```

**案例背景：**

课堂中提到，如果计算两个点之间的距离，直接传递 `x` 和 `y` 也可以，但传递 `Point` 对象更清晰，因为对象可以携带更多结构信息。

**解决思路：**

1. 定义 `Point` 类，保存 `x` 和 `y`。
2. 定义工具对象 `Geometry`。
3. 让 `distance` 方法接收两个 `Point` 对象。
4. 根据坐标差计算距离。

**Scala 代码：**

```scala
case class Point(x: Double, y: Double)

object Geometry {
  def distance(p1: Point, p2: Point): Double = {
    val dx = p1.x - p2.x
    val dy = p1.y - p2.y
    math.sqrt(dx * dx + dy * dy)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p1 = Point(0, 0)
    val p2 = Point(3, 4)

    println(Geometry.distance(p1, p2))
  }
}
```

**这个案例帮助理解什么：**

它帮助学生理解对象参数比零散参数更有结构，便于后续扩展和复用。

---

### 案例 2：根据星期匹配任务

**对应知识点：**

```text
match case、字符串匹配、代码块、任务分配
```

**案例背景：**

课堂中举到类似“星期一做什么，星期二做什么”的任务分配例子。这适合用模式匹配表达多分支任务选择。

**解决思路：**

1. 定义一个星期字符串。
2. 使用 `match` 匹配不同星期。
3. 每个 `case` 中写对应任务。
4. 使用 `_` 处理未知输入。

**Scala 代码：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val day = "星期一"

    day match {
      case "星期一" =>
        println("整理课堂笔记")
        println("完成 Scala 练习")
      case "星期二" =>
        println("复习集合和循环")
      case "星期三" =>
        println("练习模式匹配")
      case _ =>
        println("自由复习")
    }
  }
}
```

**这个案例帮助理解什么：**

它帮助学生理解 `case` 右侧可以不只是单行代码，也可以是一个代码块，用来执行多个操作。

---

### 案例 3：顾客和订单的样例类匹配

**对应知识点：**

```text
case class、Any、模式匹配、字段提取
```

**案例背景：**

课堂中提到创建两个样例类 `Customer` 和 `Order`，再用模式匹配分别打印成员变量。

**解决思路：**

1. 定义 `Customer` 样例类。
2. 定义 `Order` 样例类。
3. 把对象作为 `Any` 类型传入方法。
4. 使用 `match case` 根据对象类型输出内容。

**Scala 代码：**

```scala
case class Customer(name: String, age: Int)
case class Order(id: Int)

object Main {
  def printData(data: Any): Unit = {
    data match {
      case Customer(name, age) =>
        println(s"Customer name = $name, age = $age")
      case Order(id) =>
        println(s"Order id = $id")
      case _ =>
        println("未匹配")
    }
  }

  def main(args: Array[String]): Unit = {
    val c: Any = Customer("唐唐", 73)
    val o: Any = Order(123)

    printData(c)
    printData(o)
  }
}
```

**这个案例帮助理解什么：**

它帮助学生理解样例类与模式匹配的典型组合：既能判断对象属于哪种结构，又能提取字段值。

---

### 案例 4：学生和老师门禁识别

**对应知识点：**

```text
抽象父类、样例类、模式匹配、分类识别
```

**案例背景：**

课堂中提到“门禁识别”类似案例：传入一个人，如果是老师就输出老师信息，如果是学生就输出学生信息，否则提示非法输入。

**解决思路：**

1. 定义父类型 `Person`。
2. 定义 `Student` 和 `Teacher` 两个样例类。
3. 编写识别函数。
4. 使用模式匹配输出不同身份的信息。

**Scala 代码：**

```scala
sealed trait Person

case class Student(name: String, grade: Int) extends Person
case class Teacher(name: String, subject: String) extends Person

object Main {
  def check(person: Person): Unit = {
    person match {
      case Student(name, grade) =>
        println(s"学生：$name，年级：$grade")
      case Teacher(name, subject) =>
        println(s"老师：$name，学科：$subject")
    }
  }

  def main(args: Array[String]): Unit = {
    check(Student("Tom", 12))
    check(Teacher("John", "数学"))
  }
}
```

**这个案例帮助理解什么：**

它帮助学生理解样例类可以继承同一个父类型，然后用模式匹配做身份识别和分类处理。

---

### 案例 5：样例对象表示性别

**对应知识点：**

```text
case object、trait、样例类字段、固定取值
```

**案例背景：**

课堂中提到了 `Male` 和 `Female` 这类样例对象。它们没有参数，适合表示固定的离散值。

**解决思路：**

1. 定义 `Sex` 作为性别类型。
2. 用 `case object` 定义 `Male` 和 `Female`。
3. 在 `Person` 样例类中使用 `Sex` 类型字段。
4. 创建不同性别的人。

**Scala 代码：**

```scala
sealed trait Sex
case object Male extends Sex
case object Female extends Sex

case class Person(name: String, sex: Sex)

object Main {
  def main(args: Array[String]): Unit = {
    val p1 = Person("张三", Male)
    val p2 = Person("李四", Female)

    println(p1)
    println(p2)
  }
}
```

**这个案例帮助理解什么：**

它帮助学生理解样例对象可以作为样例类字段的取值，用于表示固定状态或固定类别。

---

### 课堂补充说明：AI 编程、学习建议与作业考试安排

原始文本中包含较长一段关于 AI 编程工具、智能体、插件、毕业设计、项目生成、数学基础和考研学习的讨论。这些内容不是本节 Scala 主线知识，但可以整理为学习提醒。

* **AI 编程建议：** AI 工具可以帮助生成代码、项目框架或论文草稿，但学生必须先学会基础语法和编程思想，才能看懂、修改和优化 AI 生成的内容。
* **参数与数据结构意识：** 老师强调参数设计、数据结构设计和代码复用率很重要，这与后续 AI 编程、数据分析和大数据开发都有关系。
* **基础学习提醒：** 数学、统计学、算法和模式识别是后续机器学习、大数据和智能调度的重要基础。
* **课程作业：** 本节课布置样例类相关作业，重点练习 `case class` 与模式匹配。
* **实验报告安排：** 原文提到第八周交实验报告一，第十周交实验报告二。
* **考试说明：** 原文提到测试内容不考，考试重点应放在基础语法、样例类、模式匹配等课堂核心内容上。
* **处理方式：** 这些内容适合放入后续课程网站的“课堂提醒”或“学习建议”，不放入 Scala 核心知识点正文。

---

## 8. 易错点总结

### 易错点 1：match case 忘记默认分支

**错误示例：**

```scala
val x = 5

x match {
  case 1 => println("one")
  case 2 => println("two")
}
```

**正确写法：**

```scala
val x = 5

x match {
  case 1 => println("one")
  case 2 => println("two")
  case _ => println("other")
}
```

**解释：**

如果没有默认分支，遇到未匹配的值可能导致运行时匹配错误。初学阶段建议补上 `case _`。

---

### 易错点 2：case 后面写错箭头

**错误示例：**

```scala
x match {
  case 1 -> println("one")
}
```

**正确写法：**

```scala
x match {
  case 1 => println("one")
}
```

**解释：**

模式匹配分支使用 `=>`，不是 `->`。`->` 常用于构造 Map 键值对。

---

### 易错点 3：把默认分支放在最前面

**错误示例：**

```scala
x match {
  case _ => println("other")
  case 1 => println("one")
}
```

**正确写法：**

```scala
x match {
  case 1 => println("one")
  case _ => println("other")
}
```

**解释：**

模式匹配从上到下执行，`case _` 会匹配所有情况。如果放在最前面，后面的分支永远不会执行。

---

### 易错点 4：误以为 match case 必须写 break

**错误示例：**

```scala
x match {
  case 1 =>
    println("one")
    break
  case 2 =>
    println("two")
    break
}
```

**正确写法：**

```scala
x match {
  case 1 => println("one")
  case 2 => println("two")
}
```

**解释：**

Scala 的 `match case` 匹配成功后会自动结束，不需要写 `break`。

---

### 易错点 5：样例类创建时多写 new

**不推荐写法：**

```scala
case class Person(name: String, age: Int)

val p = new Person("Tom", 18)
```

**推荐写法：**

```scala
case class Person(name: String, age: Int)

val p = Person("Tom", 18)
```

**解释：**

样例类会自动生成伴生对象和 `apply` 方法，因此通常可以省略 `new`。

---

### 易错点 6：样例类模式匹配字段数量不一致

**错误示例：**

```scala
case class Person(name: String, age: Int)

val p = Person("Tom", 18)

p match {
  case Person(name) => println(name)
}
```

**正确写法：**

```scala
case class Person(name: String, age: Int)

val p = Person("Tom", 18)

p match {
  case Person(name, age) => println(name + " " + age)
}
```

**解释：**

样例类匹配时，字段数量通常要和样例类定义的参数数量一致。

---

### 易错点 7：误以为 copy 会修改原对象

**错误示例：**

```scala
case class Person(name: String, age: Int)

val p1 = Person("李四", 21)
p1.copy(name = "王五")
println(p1)
```

误以为 `p1` 会变成王五。

**正确写法：**

```scala
case class Person(name: String, age: Int)

val p1 = Person("李四", 21)
val p2 = p1.copy(name = "王五")

println(p1)
println(p2)
```

**解释：**

`copy` 返回新对象，不会改变原对象。

---

### 易错点 8：给 case object 写参数

**错误示例：**

```scala
case object Male(name: String)
```

**正确写法：**

```scala
case object Male
```

或者如果需要参数，应使用样例类：

```scala
case class Person(name: String)
```

**解释：**

`case object` 是单例对象，没有主构造器，不能带参数。

---

### 易错点 9：把 Any 当成具体类型直接使用

**错误示例：**

```scala
def printName(x: Any): Unit = {
  println(x.name)
}
```

**正确写法：**

```scala
case class Person(name: String)

def printName(x: Any): Unit = {
  x match {
    case Person(name) => println(name)
    case _ => println("不是 Person")
  }
}
```

**解释：**

`Any` 可以接收很多类型，但不能直接调用某个具体类型的字段。需要先匹配具体类型。

---

### 易错点 10：子类或对象实现抽象方法时漏写方法体

**错误示例：**

```scala
abstract class Action {
  def run(): Unit
}

class OpenAction extends Action {
}
```

**正确写法：**

```scala
abstract class Action {
  def run(): Unit
}

class OpenAction extends Action {
  override def run(): Unit = {
    println("打开")
  }
}
```

**解释：**

继承抽象类的普通子类必须实现抽象方法，否则它自己也必须声明为抽象类。

---

## 9. 小测验题目

### 题目 1：Scala 模式匹配使用哪个关键字开始？

A. `switch`  
B. `match`  
C. `select`  
D. `choose`

**正确答案：B**

**解析：**

Scala 使用 `match` 开始模式匹配，每个分支使用 `case` 声明。

---

### 题目 2：模式匹配中的默认分支通常写成什么？

A. `case default`  
B. `case else`  
C. `case _`  
D. `case any()`

**正确答案：C**

**解析：**

`_` 是通配符，表示匹配其他所有情况。

---

### 题目 3：下面哪个是正确的 `case` 分支写法？

A. `case 1 -> println("one")`  
B. `case 1 => println("one")`  
C. `case 1: println("one")`  
D. `case 1 = println("one")`

**正确答案：B**

**解析：**

Scala 模式匹配中，`case` 后的处理逻辑使用 `=>` 连接。

---

### 题目 4：下面哪个是模式守卫？

A. `case x if x > 0 => "positive"`  
B. `if case x > 0 => "positive"`  
C. `case if x > 0 => "positive"`  
D. `match if x > 0 case`

**正确答案：A**

**解析：**

模式守卫是在 `case` 模式后添加 `if` 条件。

---

### 题目 5：关于样例类，下面说法正确的是？

A. 样例类必须用 `new` 创建  
B. 样例类不能用于模式匹配  
C. 样例类使用 `case class` 定义  
D. 样例类不能有字段

**正确答案：C**

**解析：**

样例类使用 `case class` 定义，常用于保存数据并配合模式匹配。

---

### 题目 6：样例类自动生成的方法不包括下面哪个？

A. `toString`  
B. `equals`  
C. `copy`  
D. `main`

**正确答案：D**

**解析：**

样例类会自动生成 `toString`、`equals`、`hashCode`、`copy`、`apply` 等，但不会自动生成程序入口 `main`。

---

### 题目 7：`case object` 的特点是什么？

A. 可以带多个构造参数  
B. 是单例对象，没有主构造器  
C. 必须使用 `new` 创建  
D. 只能定义在方法内部

**正确答案：B**

**解析：**

`case object` 是样例对象，本质是单例对象，没有主构造器，也不带参数。

---

### 题目 8：下面代码中 `Student(name, age)` 的作用是什么？

```scala
person match {
  case Student(name, age) => println(name)
}
```

A. 创建一个新的 Student 对象  
B. 匹配 Student 对象并提取字段  
C. 删除 Student 对象  
D. 把 person 强制转换为字符串

**正确答案：B**

**解析：**

在 `case` 分支中，`Student(name, age)` 表示匹配 `Student` 样例类对象，并提取其中的字段。

---

### 题目 9：`copy` 方法的作用是什么？

A. 修改原对象  
B. 删除原对象  
C. 复制对象并可修改部分字段  
D. 把对象转换成数组

**正确答案：C**

**解析：**

样例类的 `copy` 方法会返回一个新对象，可以在复制时修改部分字段，原对象不变。

---

### 题目 10：为什么方法参数有时使用 `Any`？

A. 因为 Any 只能接收整数  
B. 因为 Any 可以接收多种类型，便于统一匹配  
C. 因为 Any 只能接收数组  
D. 因为 Any 会自动删除类型信息

**正确答案：B**

**解析：**

`Any` 是 Scala 类型层级顶层类型，可以接收多种类型。配合模式匹配，可以根据具体类型分支处理。

---

## 10. 拖拽匹配素材

1. `match` —— 开始模式匹配
2. `case` —— 定义匹配分支
3. `_` —— 匹配其他所有情况
4. `=>` —— 连接模式和执行代码
5. 模式守卫 —— 在 case 后添加 if 条件
6. `Any` —— 可以接收多种类型的顶层类型
7. `case class` —— 定义样例类
8. `case object` —— 定义样例对象
9. `copy` —— 复制样例类对象
10. `equals` —— 比较对象内容是否相等
11. `toString` —— 生成对象字符串表示
12. `apply` —— 支持省略 new 创建对象
13. `override` —— 重写父类方法
14. 抽象类 —— 定义规则的类
15. 引用类型参数 —— 可以携带结构化信息的参数
16. `Array` 匹配 —— 匹配数组结构
17. `List` 匹配 —— 匹配列表结构
18. 样例类匹配 —— 匹配对象并提取字段

---

## 11. 流程动画素材

### 流程主题：样例类对象进行模式匹配

```text
1. 程序创建样例类对象，例如 Student("Tom", 12)。
2. 程序把这个对象传入一个接收 Any 类型参数的方法。
3. 方法执行到 value match。
4. Scala 从第一个 case 分支开始尝试匹配。
5. 如果第一个分支是 Customer(name, age)，Scala 会检查当前对象是否是 Customer。
6. 如果类型不匹配，继续检查下一个 case。
7. 如果下一个分支是 Student(name, age)，Scala 发现类型匹配。
8. Scala 从 Student 对象中提取 name 和 age 字段。
9. 提取出的字段被绑定到变量 name 和 age。
10. 程序执行该 case 右侧的代码。
11. 匹配成功后，后续 case 不再执行。
12. 如果所有分支都不匹配，就执行 case _ 默认分支。
```

---

## 12. 课后练习题

### 练习 1：使用 match case 判断星期任务

**题目：**

定义一个字符串变量 `day`，根据它的值输出当天任务：星期一输出“整理笔记”，星期二输出“完成练习”，星期三输出“复习模式匹配”，其他情况输出“自由复习”。

**考查知识点：**

```text
match、case、字符串匹配、默认分支
```

**参考答案：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val day = "星期一"

    day match {
      case "星期一" => println("整理笔记")
      case "星期二" => println("完成练习")
      case "星期三" => println("复习模式匹配")
      case _ => println("自由复习")
    }
  }
}
```

**解题思路：**

使用 `day match` 对字符串进行匹配，每个 `case` 对应一个星期，最后用 `_` 处理其他情况。

---

### 练习 2：使用模式守卫判断正负数

**题目：**

定义方法 `describeNumber(x: Int)`，如果数字大于 0，返回“正数”；如果小于 0，返回“负数”；如果等于 0，返回“零”。

**考查知识点：**

```text
模式守卫、Int、match case
```

**参考答案：**

```scala
object Main {
  def describeNumber(x: Int): String = {
    x match {
      case n if n > 0 => "正数"
      case n if n < 0 => "负数"
      case _ => "零"
    }
  }

  def main(args: Array[String]): Unit = {
    println(describeNumber(10))
    println(describeNumber(-5))
    println(describeNumber(0))
  }
}
```

**解题思路：**

使用 `case n if 条件` 给匹配增加判断条件。大于 0、小于 0 分别处理，剩下的就是 0。

---

### 练习 3：定义样例类 Person 并使用 copy

**题目：**

定义样例类 `Person(name: String, age: Int)`，创建 `Person("李四", 21)`，再使用 `copy` 复制一个新对象，把姓名改成“王五”，年龄不变。

**考查知识点：**

```text
case class、copy、toString、不可变数据
```

**参考答案：**

```scala
case class Person(name: String, age: Int)

object Main {
  def main(args: Array[String]): Unit = {
    val p1 = Person("李四", 21)
    val p2 = p1.copy(name = "王五")

    println(p1)
    println(p2)
  }
}
```

**解题思路：**

样例类自动生成 `copy` 方法。复制时指定 `name = "王五"`，未指定的 `age` 会沿用原对象的值。

---

### 练习 4：匹配 Customer 和 Order

**题目：**

定义两个样例类：`Customer(name: String, age: Int)` 和 `Order(id: Int)`。编写方法 `show(value: Any)`，如果传入顾客，输出姓名和年龄；如果传入订单，输出订单编号；否则输出“未匹配”。

**考查知识点：**

```text
样例类、Any、模式匹配、字段提取
```

**参考答案：**

```scala
case class Customer(name: String, age: Int)
case class Order(id: Int)

object Main {
  def show(value: Any): Unit = {
    value match {
      case Customer(name, age) =>
        println(s"顾客：$name，年龄：$age")
      case Order(id) =>
        println(s"订单编号：$id")
      case _ =>
        println("未匹配")
    }
  }

  def main(args: Array[String]): Unit = {
    show(Customer("Amy", 30))
    show(Order(1001))
    show("hello")
  }
}
```

**解题思路：**

`Any` 让方法可以接收不同类型。用 `case Customer(...)` 和 `case Order(...)` 判断类型并提取字段。

---

### 练习 5：定义样例对象表示性别

**题目：**

定义 `Sex` 类型，并用 `case object Male` 和 `case object Female` 表示两个固定性别。定义 `Person(name: String, sex: Sex)`，创建两个对象并输出。

**考查知识点：**

```text
case object、trait、case class、固定取值
```

**参考答案：**

```scala
sealed trait Sex
case object Male extends Sex
case object Female extends Sex

case class Person(name: String, sex: Sex)

object Main {
  def main(args: Array[String]): Unit = {
    val p1 = Person("张三", Male)
    val p2 = Person("李四", Female)

    println(p1)
    println(p2)
  }
}
```

**解题思路：**

`case object` 用来表示固定值，`Person` 的 `sex` 字段使用统一的 `Sex` 类型，使可选值更清晰。

---

### 练习 6：匹配数组和列表

**题目：**

编写方法 `describe(value: Any)`，如果传入 `Array(1, 2, 3)`，输出“标准数组”；如果传入 `List("hi", name)`，输出“你好 name”；否则输出“其他”。

**考查知识点：**

```text
Array 匹配、List 匹配、Any、模式匹配
```

**参考答案：**

```scala
object Main {
  def describe(value: Any): Unit = {
    value match {
      case Array(1, 2, 3) =>
        println("标准数组")
      case List("hi", name) =>
        println("你好 " + name)
      case _ =>
        println("其他")
    }
  }

  def main(args: Array[String]): Unit = {
    describe(Array(1, 2, 3))
    describe(List("hi", "Tom"))
    describe(List(1, 2))
  }
}
```

**解题思路：**

模式匹配可以匹配集合结构。`Array(1,2,3)` 匹配固定数组，`List("hi", name)` 匹配两元素列表并提取第二个元素。

---

### 练习 7：使用抽象类和 override

**题目：**

定义抽象类 `Task`，包含抽象方法 `run(): Unit`。定义对象 `PrintTask` 继承它并重写 `run` 方法，输出“执行打印任务”。

**考查知识点：**

```text
抽象类、object 继承、override、方法实现
```

**参考答案：**

```scala
abstract class Task {
  def run(): Unit
}

object PrintTask extends Task {
  override def run(): Unit = {
    println("执行打印任务")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    PrintTask.run()
  }
}
```

**解题思路：**

`object` 也可以继承抽象类。继承后必须实现抽象方法，并使用 `override` 标明重写。

---

## 13. 本节课知识结构图文字版

```text
Scala 模式匹配与样例类
├── 对象思想复习
│   ├── class
│   │   ├── 表示普通模块或具体对象模板
│   │   └── 保存实例属性和方法
│   ├── object
│   │   ├── 单例对象
│   │   ├── 可表示全局功能
│   │   └── 类似 Java static 的部分作用
│   └── 伴生对象
│       ├── 与伴生类同名
│       ├── 可定义 apply
│       └── 可返回类对象
├── 参数传递
│   ├── 普通参数
│   │   ├── Int
│   │   ├── String
│   │   └── 局部计算常用
│   └── 结构化参数
│       ├── Array
│       ├── List
│       ├── Tuple
│       └── 对象
├── 模式匹配
│   ├── match
│   ├── case
│   ├── =>
│   ├── case _
│   └── 自动中断，无需 break
├── 模式守卫
│   ├── case 模式 if 条件
│   ├── 用于进一步筛选
│   └── 类似在匹配中加入过滤条件
├── 匹配内容
│   ├── 值匹配
│   │   ├── 数字
│   │   └── 字符串
│   ├── 类型匹配
│   │   ├── Int
│   │   ├── String
│   │   └── Array[Int]
│   ├── 集合匹配
│   │   ├── Array
│   │   └── List
│   ├── 元组匹配
│   └── 样例类匹配
├── 样例类 case class
│   ├── 快速定义数据类
│   ├── 创建时可省略 new
│   ├── 自动生成 apply
│   ├── 自动生成 toString
│   ├── 自动生成 equals
│   ├── 自动生成 hashCode
│   ├── 自动生成 copy
│   └── 适合模式匹配
├── 样例对象 case object
│   ├── 单例对象
│   ├── 无参数
│   ├── 无主构造器
│   ├── 表示固定值
│   └── 常与 trait 配合
├── 抽象类与重写
│   ├── 抽象类定义规则
│   ├── 子类实现规则
│   ├── object 也可继承
│   └── override 标明重写
└── 常见考试练习
    ├── 写 match case
    ├── 写模式守卫
    ├── 定义样例类
    ├── 使用 copy
    ├── 匹配 Student 和 Teacher
    └── 定义 case object
```

---

## 14. 后续生成网页时可使用的数据建议

* **建议课程 ID：** `scala-pattern-match-case-class-case-object`
* **建议课程标题：** 2026-04-16 Scala 编程相关知识讲解
* **建议章节：** Scala 模式匹配、Scala 样例类 Case Class
* **建议标签：**
  * Scala 模式匹配
  * match
  * case
  * 模式守卫
  * Any
  * Array 匹配
  * List 匹配
  * Tuple 匹配
  * case class
  * case object
  * copy
  * equals
  * apply
  * override
  * 抽象类
  * 参数传递
* **适合放入 summary 的内容：**
  * 本节课讲解 Scala 中模式匹配、模式守卫、样例类和样例对象。
  * 模式匹配使用 `match case`，可以匹配值、类型、集合、元组和样例类对象。
  * 样例类使用 `case class` 定义，适合保存数据，并自动生成常用方法。
  * 样例对象使用 `case object` 定义，适合表示固定值或特定消息。
* **适合放入 keyPoints 的内容：**
  * `case _` 是默认分支。
  * `case 模式 if 条件` 是模式守卫。
  * `Any` 可以接收多种类型，常配合模式匹配使用。
  * 样例类创建时通常不用 `new`。
  * 样例类自动生成 `copy`、`equals`、`toString` 等方法。
  * 样例对象没有参数，是单例。
* **适合放入 codeExamples 的内容：**
  * 基本 `match case`。
  * 模式守卫判断成绩或正负数。
  * `Any` 类型匹配。
  * 样例类创建、比较和复制。
  * 样例类与模式匹配。
  * 样例对象表示性别。
* **适合放入 quiz 的内容：**
  * `match` 和 `case` 语法。
  * `_` 默认分支。
  * 模式守卫写法。
  * 样例类定义方式。
  * 样例类自动生成方法。
  * `case class` 与 `case object` 区别。
* **适合放入 dragMatch 的内容：**
  * `match` —— 开始模式匹配
  * `case` —— 定义匹配分支
  * `_` —— 默认匹配
  * `case class` —— 样例类
  * `case object` —— 样例对象
  * `copy` —— 复制对象
  * `Any` —— 顶层类型
  * 模式守卫 —— 匹配时附加条件
* **适合放入 flow 的内容：**
  * 样例类对象传入方法 → `match` 开始 → 逐个 `case` 匹配 → 匹配成功 → 提取字段 → 执行对应代码 → 结束。
* **适合放入 exercises 的内容：**
  * 判断星期任务。
  * 使用模式守卫判断正负数。
  * 定义样例类并使用 `copy`。
  * 匹配 `Customer` 和 `Order`。
  * 定义 `case object` 表示固定值。
  * 匹配数组和列表。
* **适合放入 conclusion 的内容：**
  * 本节课是 Scala 模式匹配与样例类的核心基础。
  * 学生必须掌握 `match case` 和 `case class` 的配合使用。
  * 样例类和模式匹配会在后续集合处理、特质、多态、错误处理和实际项目中频繁出现。

---

## 15. 课后总结

1. 本节课的核心是模式匹配和样例类，它们是 Scala 中非常重要、也很有特色的语法。
2. 学习模式匹配时要先掌握基本结构：`值 match { case 模式 => 代码 }`，再逐步学习类型匹配、集合匹配和样例类匹配。
3. `case _` 是默认分支，建议初学阶段尽量写上，避免匹配不完整。
4. 模式守卫可以在 `case` 后增加 `if` 条件，让匹配逻辑更精确。
5. `Any` 可以让一个方法接收多种类型，但使用时必须通过模式匹配判断具体类型。
6. 样例类 `case class` 适合保存结构化数据，例如人、订单、顾客、账单、票据等。
7. 样例类自动生成 `apply`、`toString`、`equals`、`hashCode`、`copy` 等方法，这是它比普通类更方便的原因。
8. 样例对象 `case object` 是没有参数的单例对象，适合表示固定值、固定状态或固定消息。
9. 本节课的代码看懂不等于会写，课后必须亲手练习 `Customer`、`Order`、`Student`、`Teacher` 等样例类匹配案例。
10. 抽象类、`override`、样例类、样例对象和后续的 `trait` 都围绕“定义规则、实现规则、匹配结构”展开，后面学习会继续用到。
11. 课后建议把 `match case`、模式守卫、`case class`、`copy`、`case object` 各写 2 到 3 遍，形成基本代码手感。
12. AI 编程工具可以辅助生成代码，但本节课这些基础语法必须自己理解，否则后续即使 AI 生成代码，也难以判断对错和修改问题。
