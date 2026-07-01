# Scala编程相关知识讲解

## 课程信息

- **课程标题**：Scala编程相关知识讲解
- **上课日期**：2026-04-16
- **上课时间**：15:18
- **所属章节**：第七章 Scala 模式匹配、样例类与样例对象
- **建议课程 ID**：`scala-2026-04-16-pattern-case-classes`
- **页面访问地址**：`lesson.html?id=scala-2026-04-16-pattern-case-classes`

---

## 一、课堂摘要

本节课主要围绕 Scala 中的对象、类、参数传递、模式匹配、模式守卫、样例类、样例对象、特质以及作业考试安排展开。

课堂开头老师先回顾了 Java 和 Scala 在抽象类、重写、类和对象方面的区别。Java 中子类需要实现父类中的抽象方法；Scala 中如果类或对象继承了带抽象方法的父类或特质，也需要使用 `override` 补充具体方法体。老师强调，Scala 中 `object` 是非常重要的概念，它可以承担静态方法、全局工具、消息传递和特殊对象等作用。

随后，老师讲解了参数传递。普通参数如 `Int`、`Double` 通常只是局部变量，不共享复杂结构；而数组、对象、类等引用类型可以代表更多信息。比如传递一个 `Point` 对象，比单独传递 `x` 和 `y` 更好，因为对象除了坐标以外，还能包含方法、面积、大小等更多信息。这体现了代码复用、结构设计和参数优化的重要性。

本节课的核心内容是模式匹配。Scala 使用 `match` 关键字和 `case` 分支进行匹配，从第一个 `case` 开始判断，匹配成功后执行对应代码。模式匹配类似 Java 中的 `switch`，但更强大：它不仅能匹配值，还能匹配数组、列表、元组、类对象、`Option` 等结构。老师还讲解了模式守卫，即在 `case` 后增加 `if` 条件，类似过滤器，可以让匹配更加精确。

课堂后半部分重点讲解样例类。样例类使用 `case class` 定义，适合快速创建用于保存数据的类。样例类默认支持对象创建、`toString`、`equals`、`hashCode`、`copy` 等方法，创建对象时通常不需要写 `new`。老师用记账、票据、订单、顾客等例子说明，样例类适合保存结构相同但字段类型可能不同的数据。

最后，老师讲解了样例对象 `case object`。样例对象是单例对象，没有主构造器、没有参数，常与样例类、特质和模式匹配配合使用。例如 `Male`、`Female` 可以作为性别这种固定选项。老师提醒同学，样例类和模式匹配很重要，可能作为作业或考试重点，需要自己动手写几遍。本节课还说明第八周交实验报告一，第十周交实验报告二，测试相关内容不考。

---

## 二、核心知识点

### 1. 抽象方法与重写

在 Java 中，如果子类继承了带抽象方法的父类，就必须实现这个抽象方法。

Scala 中也类似，如果类或对象继承了带抽象方法的结构，也要通过 `override` 补充方法体。

```scala
abstract class Animal {
  def speak(): Unit
}

class Dog extends Animal {
  override def speak(): Unit = {
    println("wang")
  }
}
```

解释：

- `Animal` 中只有方法头；
- `Dog` 必须实现 `speak`；
- `override` 表示重写父类方法。

---

### 2. Scala 中 object 的重要性

Scala 中 `object` 很重要，它不仅可以作为程序入口，还可以承担类似 Java 静态方法的职责。

常见作用：

- 放全局工具方法；
- 放常量；
- 传递消息；
- 表示单例对象；
- 与 class 形成伴生对象；
- 调用服务或构造对象。

---

### 3. class 与 object 的职责区分

老师建议可以这样理解：

- 某个模块内部的普通功能，适合放在 `class` 中；
- 全局作用域、工具方法、跨模块消息传递，适合放在 `object` 中；
- 伴生类和伴生对象可以互相交互；
- 单例对象和伴生对象也能承担特殊的沟通作用。

---

### 4. MVC 与消息传递

老师提到软件开发中常见 MVC 思想：

- Model：模型层；
- View：视图层；
- Control：控制层。

不同层有不同职责，层与层之间需要传递信息。程序设计中“传递消息”非常重要，而消息通常通过参数传递完成。

---

### 5. 常规参数

常规参数如 `Int`、`Double`、`String` 等，通常是局部变量，用于完成简单计算。

例如：

```scala
def add(a: Int, b: Int): Int = {
  a + b
}
```

这里的 `a` 和 `b` 只是函数内部使用的参数，不代表复杂结构。

---

### 6. 引用类型参数

数组、对象、类对象等可以作为引用类型参数传递。

例如：

```scala
class Point(val x: Double, val y: Double)

def printPoint(p: Point): Unit = {
  println(p.x + "," + p.y)
}
```

传递 `Point` 对象比单独传递 `x`、`y` 更有表达力，因为对象还能携带更多属性和方法。

---

### 7. 参数优化与代码复用

老师强调，参数设计会影响代码复用率。

好的参数设计应该：

- 表达更多信息；
- 方便复用；
- 能代表一个完整结构；
- 减少重复代码；
- 支持后续扩展。

例如传递 `Point` 对象，通常比传递两个数字更容易扩展。

---

### 8. AI 辅助编程

老师提醒同学，AI 插件可以帮助提高代码成功率和开发效率，但前提是自己要能看懂代码。

建议：

- 先学会基础编程；
- 再用 AI 生成代码；
- 理解 AI 生成的结构；
- 根据自己的需求修改参数和逻辑；
- 不要只复制粘贴。

---

### 9. apply 方法与对象创建回顾

课堂中回顾了 `apply` 方法。

当写：

```scala
val arr = Array(1, 2, 3, 4, 5, 6)
```

这里没有显式写 `new`，本质上会调用伴生对象中的 `apply` 方法来创建对象。

类似地，样例类创建对象时也经常不写 `new`。

---

### 10. 伴生对象与类对象返回

伴生对象中的方法可以返回类对象。

```scala
class Test {
  def show(): Unit = println("have a class")
}

object Test {
  def apply(): Test = {
    new Test
  }
}

val t = Test()
t.show()
```

解释：

- `Test()` 调用 `object Test` 的 `apply`；
- `apply` 返回 `new Test`；
- 返回的类对象可以调用类中的方法。

---

### 11. 模式匹配 match

Scala 使用 `match` 进行模式匹配。

```scala
def test(x: Int): String = {
  x match {
    case 1 => "one"
    case 2 => "two"
    case _ => "many"
  }
}
```

解释：

- `match` 后面写匹配结构；
- 每个分支用 `case`；
- `_` 表示其他情况；
- 匹配成功后执行对应分支。

---

### 12. match 与 switch 的区别

模式匹配和 Java 中的 `switch` 有相似之处，但 Scala 的 `match` 更强。

相同点：

- 都可以根据值选择分支；
- 都是多分支结构。

不同点：

- Scala `match` 不需要 `break`；
- Scala 可以匹配类型、数组、列表、元组、类对象；
- Scala 可以添加模式守卫；
- Scala 可以返回值。

---

### 13. case 分支

每一个匹配分支使用 `case` 声明。

```scala
x match {
  case "Monday" => println("上课")
  case "Tuesday" => println("实验")
  case _ => println("其他任务")
}
```

`case` 后面可以跟具体值，也可以跟更复杂的结构。

---

### 14. 默认分支 `_`

`_` 表示默认匹配，也就是前面都不满足时执行。

```scala
case _ => "unknown"
```

它类似 Java `switch` 中的 `default`。

---

### 15. 任务分配中的模式匹配

模式匹配可以用于任务分配。

例如：

```scala
def task(day: String): String = {
  day match {
    case "Monday" => "学习 Scala"
    case "Tuesday" => "做实验"
    case "Wednesday" => "复习笔记"
    case _ => "自由安排"
  }
}
```

这种写法适合根据不同输入执行不同任务。

---

### 16. 模式守卫

模式守卫是在 `case` 后增加 `if` 条件。

```scala
def abs(x: Int): Int = {
  x match {
    case n if n >= 0 => n
    case n if n < 0 => -n
  }
}
```

解释：

- `case n if n >= 0` 表示匹配并判断条件；
- 条件满足才进入该分支；
- 守卫类似过滤器。

---

### 17. 模式守卫与 for 守卫的联系

for 循环中也可以使用守卫：

```scala
for (i <- 1 to 10 if i % 2 == 0) {
  println(i)
}
```

模式匹配中的守卫思想类似：先匹配，再用条件筛选。

---

### 18. 匹配类型

Scala 模式匹配不仅可以匹配值，还可以匹配类型。

```scala
def describe(x: Any): String = {
  x match {
    case s: String => "字符串"
    case i: Int => "整数"
    case a: Array[Int] => "整数数组"
    case _ => "其他类型"
  }
}
```

`Any` 是所有类型的父类，因此可以接收任意类型。

---

### 19. 匹配 Array、List、Tuple 和 Class

模式匹配可以匹配结构。

例如匹配数组：

```scala
def greet(arr: Array[String]): String = {
  arr match {
    case Array("Hi", name) => "Hi " + name
    case Array("Hello", a, b) => "Hello " + a + " and " + b
    case _ => "unknown"
  }
}
```

也可以匹配 List、Tuple 或样例类对象。

---

### 20. Any 类型

`Any` 是 Scala 中所有类型的顶层父类。

```scala
def test(x: Any): String = {
  x match {
    case i: Int => "Int"
    case s: String => "String"
    case _ => "Other"
  }
}
```

当函数需要接收多种类型时，可以使用 `Any`，但实际开发中要谨慎使用。

---

### 21. 样例类 case class

样例类使用 `case class` 定义。

```scala
case class Person(name: String, age: Int)
```

它适合快速创建保存数据的类。

---

### 22. 样例类适合保存结构化数据

样例类适合保存结构固定的数据，例如：

- 学生信息；
- 顾客信息；
- 订单信息；
- 票据记录；
- 会计报表；
- 记账条目。

例如：

```scala
case class Order(id: Int, amount: Double)
```

每一条订单结构相同，只是具体数值不同。

---

### 23. 样例类创建对象不需要 new

```scala
case class Person(name: String, age: Int)

val p = Person("张三", 20)
```

这里不需要写：

```scala
new Person("张三", 20)
```

因为样例类会自动生成伴生对象和 `apply` 方法。

---

### 24. 样例类自动生成的方法

样例类会自动生成很多方法，例如：

- `apply`
- `toString`
- `equals`
- `hashCode`
- `copy`

这些方法方便创建对象、打印对象、比较对象和复制对象。

---

### 25. copy 方法

`copy` 可以复制样例类对象，并修改其中部分字段。

```scala
case class Person(name: String, age: Int)

val p1 = Person("李四", 21)
val p2 = p1.copy(name = "王五")
```

结果：

- `p2.name` 是 `"王五"`；
- `p2.age` 仍然是 `21`。

---

### 26. 样例类与模式匹配

样例类非常适合和模式匹配配合使用。

```scala
case class Student(name: String, age: Int)
case class Teacher(name: String, subject: String)

def identify(x: Any): String = {
  x match {
    case Student(name, age) => s"学生：$name，年龄：$age"
    case Teacher(name, subject) => s"老师：$name，学科：$subject"
    case _ => "未知身份"
  }
}
```

---

### 27. 字符串插值取值

Scala 中可以使用字符串插值：

```scala
val name = "Tom"
val age = 12

println(s"name=$name, age=$age")
```

也可以写成：

```scala
println(s"name=${name}, age=${age}")
```

其中 `$` 是取值符号。

---

### 28. 样例对象 case object

样例对象使用 `case object` 定义。

```scala
sealed trait Sex
case object Male extends Sex
case object Female extends Sex
```

样例对象是单例，没有主构造器、没有参数。

---

### 29. 样例对象和特质

样例对象常与特质配合，用来表示固定选项。

```scala
trait Sex
case object Male extends Sex
case object Female extends Sex

case class Person(name: String, sex: Sex)
```

这里 `sex` 可以是 `Male` 或 `Female`。

---

### 30. case class 与 case object 的区别

`case class`：

- 可以带参数；
- 有主构造器；
- 可创建多个对象；
- 适合保存数据。

`case object`：

- 没有参数；
- 没有主构造器；
- 是单例；
- 适合表示固定值或固定消息。

---

### 31. 作业与考试安排

老师说明：

- 样例类相关内容需要做作业或课堂测验；
- 样例类和模式匹配非常重要；
- 第八周交实验报告一；
- 第十周交实验报告二；
- 测试内容不考；
- 今天讲到的内容基本是考试范围之前的重点。

---

## 三、代码示例

### 示例 1：抽象类与重写

```scala
abstract class Animal {
  def speak(): Unit
}

class Dog extends Animal {
  override def speak(): Unit = {
    println("wang")
  }
}
```

解释：`Dog` 继承 `Animal` 后必须实现 `speak` 方法。

---

### 示例 2：伴生对象 apply 创建对象

```scala
class Test {
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
t.show()
```

解释：`Test()` 调用伴生对象中的 `apply`，返回 `Test` 类对象。

---

### 示例 3：基础模式匹配

```scala
def test(x: Int): String = {
  x match {
    case 1 => "one"
    case 2 => "two"
    case _ => "many"
  }
}
```

解释：根据 `x` 的值匹配不同分支。

---

### 示例 4：模式守卫

```scala
def abs(x: Int): Int = {
  x match {
    case n if n >= 0 => n
    case n if n < 0 => -n
  }
}
```

解释：`if` 条件让匹配更加精确。

---

### 示例 5：类型匹配

```scala
def describe(x: Any): String = {
  x match {
    case s: String => "字符串"
    case i: Int => "整数"
    case a: Array[Int] => "整数数组"
    case _ => "其他类型"
  }
}
```

解释：`Any` 可以接收任意类型，然后通过模式匹配判断具体类型。

---

### 示例 6：样例类定义与创建

```scala
case class Person(name: String, age: Int)

val p = Person("张三", 20)
println(p)
```

解释：样例类创建对象时通常不需要 `new`。

---

### 示例 7：copy 方法

```scala
case class Person(name: String, age: Int)

val p1 = Person("李四", 21)
val p2 = p1.copy(name = "王五")

println(p2)
```

解释：`copy` 可以复制对象，并只修改部分字段。

---

### 示例 8：样例类模式匹配

```scala
case class Student(name: String, age: Int)
case class Teacher(name: String, subject: String)

def identify(x: Any): String = {
  x match {
    case Student(name, age) => s"学生：$name，年龄：$age"
    case Teacher(name, subject) => s"老师：$name，学科：$subject"
    case _ => "未知身份"
  }
}
```

解释：模式匹配可以直接拆开样例类中的字段。

---

### 示例 9：样例对象

```scala
trait Sex
case object Male extends Sex
case object Female extends Sex

case class Person(name: String, sex: Sex)

val p1 = Person("张三", Male)
val p2 = Person("李四", Female)
```

解释：`Male` 和 `Female` 是样例对象，适合表示固定选项。

---

### 示例 10：匹配 Array

```scala
def greet(arr: Array[String]): String = {
  arr match {
    case Array("Hi", name) => "Hi " + name
    case Array("Hello", a, b) => "Hello " + a + " and " + b
    case _ => "unknown"
  }
}
```

解释：模式匹配可以匹配数组结构。

---

## 四、小测验

### 题目 1

Scala 模式匹配使用哪个关键字？

A. match  
B. loop  
C. class  
D. public  

**正确答案**：A  
**解析**：Scala 使用 `match` 进行模式匹配。

---

### 题目 2

模式匹配中的每个分支使用哪个关键字？

A. case  
B. var  
C. final  
D. package  

**正确答案**：A  
**解析**：每个匹配分支使用 `case` 声明。

---

### 题目 3

`case _ =>` 的作用是什么？

A. 默认匹配其他情况  
B. 删除对象  
C. 创建数组  
D. 表示主构造器  

**正确答案**：A  
**解析**：`_` 表示前面都不匹配时的默认情况。

---

### 题目 4

样例类使用什么关键字定义？

A. case class  
B. case object only  
C. new class  
D. private new  

**正确答案**：A  
**解析**：样例类使用 `case class` 定义。

---

### 题目 5

样例类创建对象时通常是否需要写 `new`？

A. 通常不需要  
B. 必须写  
C. 不能创建对象  
D. 只能用 Java 创建  

**正确答案**：A  
**解析**：样例类会自动生成伴生对象和 `apply` 方法，因此通常不需要 `new`。

---

### 题目 6

样例类自动生成的方法不包括下面哪一项？

A. copy  
B. equals  
C. hashCode  
D. shutdownComputer  

**正确答案**：D  
**解析**：样例类会自动生成 `copy`、`equals`、`hashCode` 等方法，但不会生成关机方法。

---

### 题目 7

`case object` 的特点是什么？

A. 单例、没有主构造器、没有参数  
B. 必须有很多参数  
C. 只能保存数组  
D. 不能参与模式匹配  

**正确答案**：A  
**解析**：样例对象是单例对象，没有主构造器，常用于固定值或消息。

---

## 五、拖拽匹配内容

| 左侧概念 | 右侧解释 |
|---|---|
| `match` | 模式匹配关键字 |
| `case` | 匹配分支 |
| `_` | 默认匹配 |
| 模式守卫 | case 后的 if 条件 |
| `Any` | 所有类型的父类 |
| `case class` | 样例类 |
| `case object` | 样例对象 |
| `copy` | 复制样例类对象 |
| `equals` | 比较对象是否相等 |
| `hashCode` | 哈希值方法 |
| `apply` | 创建对象的常用方法 |
| `$name` | 字符串插值取值 |
| `trait` | 特质 |
| `override` | 重写父类方法 |

---

## 六、流程动画建议

### 流程 1：match 执行过程

```text
传入一个值 x
↓
进入 x match
↓
从第一个 case 开始判断
↓
如果匹配成功，执行对应代码
↓
如果不成功，继续下一个 case
↓
如果都不匹配，进入 case _
↓
返回最终结果
```

### 流程 2：样例类对象创建过程

```text
写出 case class Person
↓
编译器自动生成伴生对象
↓
伴生对象中自动有 apply 方法
↓
调用 Person("张三", 20)
↓
自动创建 Person 对象
↓
可以打印、比较或 copy
```

### 流程 3：样例类模式匹配过程

```text
传入一个 Any 类型对象
↓
进入 match
↓
判断是否是 Student
↓
如果是，拆出 name 和 age
↓
如果不是，判断是否是 Teacher
↓
如果都不是，进入默认分支
```

---

## 七、练习题

### 练习 1

写一个函数，根据数字 1、2 或其他情况返回不同字符串。

参考答案：

```scala
def test(x: Int): String = {
  x match {
    case 1 => "one"
    case 2 => "two"
    case _ => "many"
  }
}
```

---

### 练习 2

写一个带模式守卫的绝对值函数。

参考答案：

```scala
def abs(x: Int): Int = {
  x match {
    case n if n >= 0 => n
    case n if n < 0 => -n
  }
}
```

---

### 练习 3

定义一个样例类 `Person`，包含 `name` 和 `age`，并创建对象。

参考答案：

```scala
case class Person(name: String, age: Int)

val p = Person("张三", 20)
```

---

### 练习 4

使用 `copy` 复制一个 `Person` 对象，只修改名字。

参考答案：

```scala
case class Person(name: String, age: Int)

val p1 = Person("李四", 21)
val p2 = p1.copy(name = "王五")
```

---

### 练习 5

定义 `Student` 和 `Teacher` 两个样例类，并用模式匹配识别它们。

参考答案：

```scala
case class Student(name: String, age: Int)
case class Teacher(name: String, subject: String)

def identify(x: Any): String = {
  x match {
    case Student(name, age) => s"学生：$name，年龄：$age"
    case Teacher(name, subject) => s"老师：$name，学科：$subject"
    case _ => "未知身份"
  }
}
```

---

### 练习 6

定义 `Sex` 特质，以及 `Male`、`Female` 两个样例对象。

参考答案：

```scala
trait Sex
case object Male extends Sex
case object Female extends Sex

case class Person(name: String, sex: Sex)
```

---

## 八、课后总结

1. Scala 中 object 是非常重要的概念，可以承担静态方法、全局工具和消息传递功能。
2. 参数传递不仅是传数字，也可以传数组、对象和类对象。
3. 引用类型参数能携带更多信息，有利于代码复用和结构设计。
4. Scala 使用 `match` 和 `case` 进行模式匹配。
5. 模式匹配类似 Java 的 switch，但功能更强大。
6. Scala 模式匹配不需要写 break。
7. 模式匹配可以匹配值、类型、数组、列表、元组、类对象和 Option。
8. 模式守卫是在 case 后添加 if 条件，类似过滤器。
9. 样例类使用 `case class` 定义，适合保存结构化数据。
10. 样例类创建对象通常不需要 new。
11. 样例类自动生成 apply、toString、equals、hashCode、copy 等方法。
12. `copy` 可以复制对象并只修改部分字段。
13. 样例类非常适合配合模式匹配使用。
14. 样例对象使用 `case object` 定义，是没有主构造器的单例对象。
15. 样例对象常用于表示固定选项，例如性别、状态、消息类型。
16. 样例类和样例对象是本节课重点，需要课后手写练习。
17. 第八周交实验报告一，第十周交实验报告二。
18. 老师提醒测试内容不考，但样例类和模式匹配需要重点掌握。

---

## 九、建议加入网站的标签

```text
object
参数传递
引用类型
代码复用
AI辅助编程
apply
模式匹配
match
case
默认匹配
模式守卫
Any
Array匹配
List匹配
Tuple匹配
Class匹配
Option匹配
case class
样例类
case object
样例对象
copy
equals
hashCode
字符串插值
trait
override
抽象方法
实验报告
考试安排
```
