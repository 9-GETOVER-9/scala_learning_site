# Scala 课堂整理总览

本次共整理 1 节课。

## 课程列表

| 序号 | 课程 ID | 课程标题 | 所属章节 | 日期 | 主要标签 |
|---|---|---|---|---|---|
| 1 | `scala-loop-class-method-function-20260402-1516` | Scala 循环复习、类与对象、方法与函数 | Scala 类与对象 / Scala 函数与方法 | 2026-04-02 15:16 | 循环、类、对象、类参数、方法、函数、作用域、Unit |

---

# 第 1 节课：Scala 循环复习、类与对象、方法与函数（2026-04-02 15:16）

# 课程总结

## 1. 课程基本信息

* 课程 ID 建议：`scala-loop-class-method-function-20260402-1516`
* 课程标题：Scala 循环复习、类与对象、方法与函数（2026-04-02 15:16）
* 所属章节：Scala 类与对象 / Scala 函数与方法
* 上课日期：2026-04-02 15:16
* 知识点标签：循环、重复动作、二维数组复习、类、对象、实例、类参数、作用域、方法、函数、匿名函数、Unit
* 难度等级：入门到基础进阶
* 适合对象：已经学习过 Scala 变量、数组、循环，对 Java 类和方法有初步印象的 Scala 初学者
* 本节课一句话概括：本节课从循环的作用出发，引入 Scala 中类与对象的关系，并重点讲解类参数、方法、函数以及对象调用方法的基本写法。

---

## 2. 课堂摘要

1. 本节课首先强调了循环在编程中的重要性：循环用于处理重复动作，常常配合条件判断来解决批量处理问题。
2. 课堂中复习了数组和集合相关内容，提醒学生要继续理解一维数组、二维数组以及集合对象自带方法的使用。
3. 老师通过“学生”“班长”“学委”等生活类比解释了类、对象、特殊对象之间的关系，帮助学生理解 Scala 面向对象思想。
4. 本节课重点说明了“类是对象的抽象，对象是类的具体实例”，类像蓝图或模板，对象是根据蓝图创建出来的具体事物。
5. 课堂中讲解了 Scala 类的基本特点，例如 Scala 源文件中可以包含多个类，类不需要像 Java 那样显式写 `public class`。
6. 老师通过 `Point` 坐标点例子讲解了类参数、成员变量、方法以及对象移动的基本思想。
7. 本节课还比较了方法和函数：方法通常属于类或对象，可被反复调用；函数本身可以作为值保存和传递。
8. 最后老师布置了练习作业：创建一个对象，包含两个变量、一个方法和一个函数，训练学生把语法写成完整结构。

---

## 3. 本节课学习目标

学完本节课后，你应该能够：

1. 理解循环在程序中的作用，知道循环常用于处理重复性任务。
2. 能解释类和对象之间的关系，理解“类是模板，对象是实例”的含义。
3. 能写出一个简单 Scala 类，并在类中定义变量和方法。
4. 能理解类参数的作用域，知道类参数可以在整个类体中使用。
5. 能使用 `new` 创建对象，并理解 Scala 2 与 Scala 3 中省略 `new` 的差异。
6. 能区分方法和函数的基本概念，知道 `def` 常用于定义方法，`val` 可以保存函数值。
7. 能看懂 `Unit` 的含义，理解它类似 Java 中的 `void`。
8. 能通过对象名调用方法，例如 `p.move(1, 2)`。
9. 能根据课堂要求创建一个简单对象，包含变量、方法和函数。
10. 能发现方法定义、返回值、等号、参数列表等常见语法错误。

---

## 4. 知识点详细整理

### 知识点 1：循环用于处理重复动作

#### 这个知识点是什么？

循环是一种控制结构，用来让程序重复执行某段代码。  
当一个动作需要重复执行多次时，就不应该手动写很多遍，而应该使用循环。

例如，输出 1 到 10、遍历数组中的每个元素、检查一组数据是否满足条件，都适合使用循环。

#### 为什么要学它？

编程的核心任务之一是处理大量数据。  
如果没有循环，程序只能一行一行地重复写代码，效率低、容易错，也不方便维护。

在 Scala 中，循环常见用途包括：

1. 遍历数组、List、Set、Map。
2. 对每个元素进行计算。
3. 根据条件筛选元素。
4. 生成新的集合。
5. 处理重复输入或重复任务。

#### 基本语法

```scala
for (i <- 1 to 5) {
  println(i)
}
```

常见范围写法：

```scala
1 to 5       // 包含 1、2、3、4、5
1 until 5    // 包含 1、2、3、4，不包含 5
```

遍历数组：

```scala
val numbers = Array(10, 20, 30)

for (n <- numbers) {
  println(n)
}
```

#### 课堂中的理解方式

课堂中把循环解释成“根据某个条件重复工作”。  
例如，在项目中处理样本、分析数据、创建多个对象或重复执行某个动作时，循环都是非常重要的工具。

老师强调，循环不仅是语法问题，更是解决问题的思维方式：  
先判断哪些动作需要重复，再判断重复的条件是什么，最后把重复动作写进循环体。

#### 初学者容易犯的错误

1. 明明是重复动作，却手动复制很多行代码。
2. 忘记循环范围是否包含最后一个值。
3. 把 `to` 和 `until` 混淆。
4. 遍历数组时误以为下标从 1 开始。
5. 循环中修改变量时忘记初始值。
6. 不清楚 `for (x <- collection)` 中的 `x` 是临时变量。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val scores = Array(80, 90, 70)

    for (score <- scores) {
      println("成绩：" + score)
    }
  }
}
```

#### 示例解释

1. `scores` 是一个整数数组。
2. `for (score <- scores)` 表示从数组中依次取出每个元素。
3. 每次循环时，当前元素会临时保存到 `score` 中。
4. `println` 输出当前成绩。
5. 程序会输出 3 行内容。

---

### 知识点 2：类是对象的抽象，对象是类的实例

#### 这个知识点是什么？

类（class）可以理解为模板、蓝图或设计图。  
对象（object 或 instance）是根据类创建出来的具体事物。

例如：

* “学生”是一个类。
* “张三同学”是一个具体对象。
* “动物”是一个类。
* “一只叫 Lucky 的狗”是一个对象。

类本身描述共同特征；对象才是真正可以使用的数据。

#### 为什么要学它？

Scala 是一门面向对象和函数式编程结合的语言。  
理解类和对象，是学习后续内容的基础，例如：

1. 构造器。
2. 封装。
3. 继承。
4. 多态。
5. 伴生对象。
6. Trait。
7. Case Class。
8. 模式匹配。

#### 基本语法

定义类：

```scala
class Student {
  var name: String = "Tom"
  var age: Int = 18
}
```

创建对象：

```scala
val stu = new Student()
println(stu.name)
```

#### 课堂中的理解方式

课堂中用“模具”类比类：  
类像一个模具，来一个对象就按照这个模具创建一个实例。

老师还用“学生、班长、学委”等例子说明：  
普通学生有共同属性，比如姓名、年龄；而班长或学委可能有特殊职责。Scala 中可以使用类、对象、伴生对象等不同结构来表达这些关系。

#### 初学者容易犯的错误

1. 把类和对象混为一谈。
2. 以为定义了类就已经创建了对象。
3. 忘记使用 `new` 创建普通类对象。
4. 不理解“类不占用具体对象空间，对象才是具体实例”。
5. 把 Scala 的 `object` 简单等同于 Java 中普通对象。
6. 误以为所有类都必须写 `public class`。

#### 正确示例

```scala
class Student {
  var name: String = "Tom"
  var age: Int = 18
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = new Student()
    println(s.name)
    println(s.age)
  }
}
```

#### 示例解释

1. `class Student` 定义了一个学生类。
2. `name` 和 `age` 是学生类中的变量。
3. `new Student()` 创建了一个具体学生对象。
4. `s.name` 表示访问对象 `s` 的 `name` 属性。
5. `println` 输出对象的属性值。

---

### 知识点 3：Scala 中的 `class` 和 `object`

#### 这个知识点是什么？

在 Scala 中，`class` 和 `object` 都非常重要，但含义不同：

* `class` 用来定义类，是创建对象的模板。
* `object` 定义单例对象，程序运行期间通常只有一个实例。
* `object Main` 常用于放置程序入口 `main` 方法。
* 伴生对象是与同名类写在同一个文件中的 `object`，后续会用于创建对象、定义工具方法等。

#### 为什么要学它？

Scala 中没有 Java 那种完全相同的 `static` 写法。  
很多 Java 中的静态成员，在 Scala 中通常通过 `object` 表达。

例如：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    println("Hello Scala")
  }
}
```

这里的 `Main` 就是一个单例对象。

#### 基本语法

```scala
class Person {
  var name: String = "unknown"
}

object PersonApp {
  def main(args: Array[String]): Unit = {
    val p = new Person()
    println(p.name)
  }
}
```

#### 课堂中的理解方式

老师提到 Scala 中“万物皆对象”，对象也可以拥有自己的属性和方法。  
这和 Java 初学阶段常见的写法不完全一样。Java 中通常强调通过类创建对象，而 Scala 中 `object` 本身就可以直接承载变量和方法。

课堂还提前提到了单例对象、伴生对象等概念，本节只需要先知道：  
Scala 中除了普通类，还会经常看到 `object`，它不是随便写的，而是 Scala 组织程序的重要方式。

#### 初学者容易犯的错误

1. 把 `object` 当成 Java 的普通对象变量。
2. 不知道 `object Main` 可以作为程序入口。
3. 忘记 `main` 方法应写在 `object` 中。
4. 以为 Scala 中必须写 `public static void main`。
5. 把伴生对象和普通对象混淆。
6. 一开始就过度纠结伴生对象内部原理。

#### 正确示例

```scala
object Counter {
  var count: Int = 0

  def add(): Unit = {
    count += 1
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    Counter.add()
    Counter.add()
    println(Counter.count)
  }
}
```

#### 示例解释

1. `object Counter` 定义了一个单例对象。
2. `count` 是对象中的变量。
3. `add()` 是对象中的方法。
4. 通过 `Counter.add()` 直接调用方法。
5. 最后输出 `2`，表示调用了两次。

---

### 知识点 4：类参数与成员变量

#### 这个知识点是什么？

类参数是写在类名后面括号中的参数。  
成员变量是类体中定义的变量。

在 Scala 中，类参数可以直接参与类内部的初始化过程，也可以通过 `val` 或 `var` 成为对象的字段。

#### 为什么要学它？

类参数可以让创建对象时传入不同的数据。  
例如创建不同坐标点、不同学生、不同动物时，每个对象的属性都不一样。

如果不会使用类参数，就只能在类里写死默认值，程序灵活性会很差。

#### 基本语法

```scala
class Point(xc: Int, yc: Int) {
  var x: Int = xc
  var y: Int = yc
}
```

也可以直接写成字段：

```scala
class Point(var x: Int, var y: Int)
```

#### 课堂中的理解方式

课堂中使用了 `Point` 坐标点例子。  
`xc` 和 `yc` 可以理解为创建点对象时传入的初始横坐标和纵坐标。  
类中再用 `var x = xc`、`var y = yc` 把传入的数据保存为对象自己的状态。

老师还讲到坐标移动：  
点移动时，新的坐标可以通过原来的 `x`、`y` 加上变化量 `dx`、`dy` 得到。

#### 初学者容易犯的错误

1. 不知道类名后面的括号是参数列表。
2. 把形参和成员变量混淆。
3. 在类外部访问没有用 `val` 或 `var` 修饰的类参数。
4. 忘记 `var` 表示属性可以修改，`val` 表示属性不能重新赋值。
5. 以为类参数只能在构造时使用，忽略它在类体中的作用。
6. 不理解 `class Point(var x: Int, var y: Int)` 会自动生成字段。

#### 正确示例

```scala
class Point(xc: Int, yc: Int) {
  var x: Int = xc
  var y: Int = yc
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Point(10, 20)
    println(p.x)
    println(p.y)
  }
}
```

#### 示例解释

1. `Point(xc: Int, yc: Int)` 表示创建点时需要传入两个整数。
2. `var x: Int = xc` 把传入的 `xc` 保存到成员变量 `x`。
3. `var y: Int = yc` 把传入的 `yc` 保存到成员变量 `y`。
4. `new Point(10, 20)` 创建一个坐标为 `(10, 20)` 的点。
5. `p.x` 和 `p.y` 访问对象的坐标。

---

### 知识点 5：对象的创建与 `new`

#### 这个知识点是什么？

创建类的对象通常需要调用类的构造器。  
在 Scala 2 中，普通类一般使用 `new` 创建对象：

```scala
val p = new Point(1, 2)
```

如果是 case class，或者有伴生对象的 `apply` 方法，可以省略 `new`：

```scala
case class Student(name: String, age: Int)

val s = Student("Tom", 18)
```

Scala 3 对构造器调用的语法更宽松，一些场景下也可以省略 `new`。  
但如果课堂没有明确 Scala 版本，初学者建议先掌握最通用写法：普通类使用 `new`。

#### 为什么要学它？

如果只定义类，不创建对象，类中的变量和方法通常不会被具体使用。  
对象创建是从“设计模板”走向“实际使用”的关键步骤。

#### 基本语法

```scala
class Animal(var name: String)

val dog = new Animal("Dog")
```

#### 课堂中的理解方式

课堂中把定义变量分成两步：

1. 声明。
2. 赋值。

创建对象也可以类比理解：  
先确定对象属于哪个类，再通过构造器创建具体对象。

老师提到“new 可以省略”，这里需要修正为更准确的说法：  
普通 Scala 2 类通常不能随便省略 `new`；只有 case class、伴生对象 `apply`，或部分 Scala 3 语法场景才可以省略。

#### 初学者容易犯的错误

1. 定义了类但没有创建对象。
2. 在 Scala 2 普通类中写 `Point(1, 2)`，但没有伴生对象 `apply`。
3. 创建对象时参数数量和类型不匹配。
4. 把 `new` 写在变量名前面。
5. 不理解 `val p = new Point(1, 2)` 中 `p` 是对象引用。
6. 以为 `class Point` 自己就占用了具体对象空间。

#### 正确示例

```scala
class Animal(var name: String, var age: Int)

object Main {
  def main(args: Array[String]): Unit = {
    val dog = new Animal("Lucky", 3)
    println(dog.name)
    println(dog.age)
  }
}
```

#### 示例解释

1. `Animal` 类有两个参数：`name` 和 `age`。
2. `new Animal("Lucky", 3)` 创建了一个动物对象。
3. `dog` 保存这个对象。
4. `dog.name` 输出动物名字。
5. `dog.age` 输出动物年龄。

---

### 知识点 6：方法的定义与调用

#### 这个知识点是什么？

方法是定义在类或对象中的一段可重复调用的代码。  
Scala 中通常使用 `def` 定义方法。

#### 为什么要学它？

方法可以把一段功能封装起来，避免重复写代码。  
如果一个动作会被反复使用，就应该考虑写成方法。

例如：

* 学生可以学习。
* 动物可以奔跑。
* 坐标点可以移动。
* 计算器可以加法。
* 游戏角色可以攻击。

#### 基本语法

```scala
def 方法名(参数名: 参数类型): 返回值类型 = {
  方法体
}
```

示例：

```scala
def add(a: Int, b: Int): Int = {
  a + b
}
```

如果没有返回有意义的值，可以写 `Unit`：

```scala
def sayHello(): Unit = {
  println("Hello")
}
```

#### 课堂中的理解方式

课堂中讲到方法由以下部分组成：

1. `def` 关键字。
2. 方法名。
3. 参数列表。
4. 返回值类型。
5. 等号。
6. 方法体。

老师还提到，如果使用实例对象调用方法，调用形式和 Java 比较类似：

```scala
对象名.方法名(参数)
```

例如：

```scala
p.move(1, 2)
```

#### 初学者容易犯的错误

1. 忘记写 `def`。
2. 参数名和参数类型顺序写反。
3. 忘记方法返回值类型前的冒号。
4. 返回 `Int` 的方法里没有返回整数表达式。
5. 不理解 Scala 方法体最后一行通常就是返回值。
6. 把 Java 的 `return` 思维直接套到 Scala 中。
7. 不清楚 `Unit` 表示没有有意义的返回值。
8. 把无等号方法和抽象方法混淆。

#### 正确示例

```scala
class Calculator {
  def add(a: Int, b: Int): Int = {
    a + b
  }

  def printSum(a: Int, b: Int): Unit = {
    println(a + b)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val c = new Calculator()
    println(c.add(3, 5))
    c.printSum(10, 20)
  }
}
```

#### 示例解释

1. `Calculator` 是计算器类。
2. `add` 方法接收两个整数，返回它们的和。
3. `printSum` 方法输出两个整数的和，返回值类型是 `Unit`。
4. `new Calculator()` 创建计算器对象。
5. `c.add(3, 5)` 调用对象的方法，结果是 `8`。
6. `c.printSum(10, 20)` 输出 `30`。

---

### 知识点 7：函数与方法的区别

#### 这个知识点是什么？

在 Scala 中，方法和函数很接近，但不是完全一样。

简单理解：

* 方法通常用 `def` 定义，是类或对象的一部分。
* 函数可以作为一个值，保存到 `val` 或 `var` 中。
* 函数可以被传递、赋值，也可以作为参数传给其他方法。

#### 为什么要学它？

Scala 同时支持面向对象和函数式编程。  
后续学习高阶函数、集合操作、匿名函数、Lambda 表达式时，函数值非常重要。

例如：

```scala
val double = (x: Int) => x * 2
println(double(5))
```

这里 `double` 保存的是一个函数。

#### 基本语法

方法：

```scala
def doubleMethod(x: Int): Int = {
  x * 2
}
```

函数值：

```scala
val doubleFunction: Int => Int = (x: Int) => x * 2
```

简写：

```scala
val doubleFunction = (x: Int) => x * 2
```

#### 课堂中的理解方式

课堂中把方法理解为可以反复调用的动作。  
例如“人可以走路”，今天走、明天走、后天还走，这种属于对象长期具备的行为，适合写成方法。

函数则可以理解为临时使用的一段逻辑。  
如果某个处理只在某个位置用一次，也可以写成函数值或匿名函数，不一定非要封装成类的方法。

#### 初学者容易犯的错误

1. 以为 `def` 和 `val` 定义函数完全一样。
2. 不理解 `(x: Int) => x * 2` 是函数。
3. 把箭头 `=>` 写成 `->`。
4. 不会调用函数值，例如忘记写 `double(5)`。
5. 把函数值当普通整数变量使用。
6. 不知道函数可以作为对象保存。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    def addMethod(a: Int, b: Int): Int = a + b

    val addFunction = (a: Int, b: Int) => a + b

    println(addMethod(2, 3))
    println(addFunction(2, 3))
  }
}
```

#### 示例解释

1. `addMethod` 是一个方法，用 `def` 定义。
2. `addFunction` 是一个函数值，用 `val` 保存。
3. 两者都可以完成加法。
4. `addMethod(2, 3)` 调用方法。
5. `addFunction(2, 3)` 调用函数值。
6. 对初学者来说，可以先记住：`def` 更常用于定义方法，`val = (...) => ...` 更常用于保存函数。

---

### 知识点 8：`Unit` 与方法返回值

#### 这个知识点是什么？

`Unit` 是 Scala 中的一种类型，表示“没有有意义的返回值”。  
它类似 Java 中的 `void`。

例如：

```scala
def sayHello(): Unit = {
  println("Hello")
}
```

这个方法主要目的是输出内容，而不是计算并返回一个值。

#### 为什么要学它？

很多方法的目的不是返回结果，而是执行动作，比如：

1. 打印信息。
2. 修改对象状态。
3. 移动坐标点。
4. 添加数据。
5. 删除数据。

这些方法通常可以返回 `Unit`。

#### 基本语法

```scala
def 方法名(): Unit = {
  执行动作
}
```

示例：

```scala
def move(dx: Int, dy: Int): Unit = {
  x += dx
  y += dy
}
```

#### 课堂中的理解方式

课堂中提到方法没有返回值时可以理解为返回 `Unit`。  
例如 `move` 方法用于改变坐标点的位置，它的重点是“移动对象”，不是返回一个新数字，所以可以写成 `Unit`。

需要注意：Scala 方法定义中的等号很重要。  
在 Scala 2 中曾经存在“过程语法”：

```scala
def hello() {
  println("hello")
}
```

这种写法会被理解为返回 `Unit`，但现在不推荐，Scala 3 中已经不再使用这种写法。  
初学者建议统一写成：

```scala
def hello(): Unit = {
  println("hello")
}
```

#### 初学者容易犯的错误

1. 把 `Unit` 写成 `void`。
2. 返回值类型是 `Int`，但方法体只写了 `println`。
3. 以为所有方法都必须返回一个具体值。
4. 忽略等号导致语法理解错误。
5. 不知道 `println(...)` 本身返回 `Unit`。
6. Scala 3 中继续使用旧式无等号过程语法。

#### 正确示例

```scala
class Person(var name: String) {
  def sayHello(): Unit = {
    println("你好，我是 " + name)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person("Tom")
    p.sayHello()
  }
}
```

#### 示例解释

1. `Person` 类有一个 `name` 属性。
2. `sayHello` 方法没有计算返回值，只负责输出一句话。
3. 返回值类型写成 `Unit`。
4. `p.sayHello()` 调用对象的方法。
5. 程序输出：`你好，我是 Tom`。

---

## 5. 重点概念对比

| 概念 A | 概念 B | 区别 | 示例 |
|---|---|---|---|
| 类 `class` | 对象实例 | 类是模板，对象是根据模板创建出的具体实例 | `class Student`; `val s = new Student()` |
| `class` | `object` | `class` 可创建多个实例，`object` 是单例对象 | `class Person`; `object Main` |
| 方法 | 函数 | 方法通常属于类或对象，函数可以作为值保存和传递 | `def add(...)`; `val f = (x: Int) => x + 1` |
| `def` | `val` 保存函数 | `def` 定义方法，`val` 可以保存函数对象 | `def f(x: Int) = x + 1`; `val f = (x: Int) => x + 1` |
| `Unit` | `Int` | `Unit` 表示没有有意义返回值，`Int` 表示返回整数 | `def show(): Unit`; `def add(): Int` |
| 形参 | 实参 | 形参是方法或类定义时的参数名，实参是调用时传入的具体值 | `def add(a: Int)` 中 `a` 是形参；`add(10)` 中 `10` 是实参 |
| `to` | `until` | `to` 包含结束值，`until` 不包含结束值 | `1 to 3` 得到 1,2,3；`1 until 3` 得到 1,2 |
| 普通类对象创建 | case class 创建 | 普通类在 Scala 2 中通常用 `new`，case class 通常可省略 `new` | `new Animal("Dog")`; `Student("Tom",18)` |
| Java `void` | Scala `Unit` | 都表示无有意义返回值，但 Scala 中 `Unit` 是一个真实类型 | `def print(): Unit` |
| 成员变量 | 局部变量 | 成员变量属于对象，局部变量只在局部代码块中有效 | `class A { var x = 1 }`; `{ val y = 2 }` |

---

## 6. 代码示例整理

### 示例 1：定义一个简单学生类并创建对象

适用知识点：

```text
类、对象、成员变量、new、属性访问
```

代码：

```scala
class Student {
  var name: String = "Tom"
  var age: Int = 18
}

object Main {
  def main(args: Array[String]): Unit = {
    val stu = new Student()

    println(stu.name)
    println(stu.age)
  }
}
```

运行结果：

```text
Tom
18
```

代码解释：

```text
1. class Student 定义一个学生类。
2. name 和 age 是学生类中的成员变量。
3. object Main 是程序入口所在的单例对象。
4. new Student() 创建一个具体学生对象。
5. stu.name 和 stu.age 分别访问对象的姓名和年龄。
```

初学者提示：

```text
定义 class 只是创建模板，只有 new Student() 才真正创建对象。
```

---

### 示例 2：使用类参数创建不同的坐标点

适用知识点：

```text
类参数、构造器、成员变量、对象实例
```

代码：

```scala
class Point(xc: Int, yc: Int) {
  var x: Int = xc
  var y: Int = yc
}

object Main {
  def main(args: Array[String]): Unit = {
    val p1 = new Point(10, 20)
    val p2 = new Point(5, 8)

    println("p1 = (" + p1.x + ", " + p1.y + ")")
    println("p2 = (" + p2.x + ", " + p2.y + ")")
  }
}
```

运行结果：

```text
p1 = (10, 20)
p2 = (5, 8)
```

代码解释：

```text
1. Point 类接收两个参数 xc 和 yc。
2. x 和 y 是对象真正保存的坐标。
3. p1 和 p2 是两个不同对象。
4. p1 的坐标是 (10, 20)，p2 的坐标是 (5, 8)。
5. 同一个类可以创建多个对象，每个对象有自己的数据。
```

初学者提示：

```text
类参数可以让同一个类创建出不同状态的对象。
```

---

### 示例 3：在类中定义 move 方法移动坐标点

适用知识点：

```text
方法、Unit、对象状态修改、方法调用
```

代码：

```scala
class Point(var x: Int, var y: Int) {
  def move(dx: Int, dy: Int): Unit = {
    x += dx
    y += dy
  }

  def show(): Unit = {
    println("(" + x + ", " + y + ")")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Point(10, 20)

    p.show()
    p.move(3, 5)
    p.show()
  }
}
```

运行结果：

```text
(10, 20)
(13, 25)
```

代码解释：

```text
1. Point(var x: Int, var y: Int) 定义坐标点类，并把 x、y 作为可修改字段。
2. move 方法接收 dx 和 dy，表示横向和纵向移动量。
3. x += dx 表示把横坐标增加 dx。
4. y += dy 表示把纵坐标增加 dy。
5. show 方法输出当前坐标。
6. p.move(3, 5) 调用方法后，坐标从 (10, 20) 变成 (13, 25)。
```

初学者提示：

```text
返回值为 Unit 的方法通常用于执行动作，例如打印、修改对象状态等。
```

---

### 示例 4：方法和函数值的对比

适用知识点：

```text
def 方法、val 函数值、匿名函数、函数调用
```

代码：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    def doubleMethod(x: Int): Int = {
      x * 2
    }

    val doubleFunction = (x: Int) => x * 2

    println(doubleMethod(6))
    println(doubleFunction(6))
  }
}
```

运行结果：

```text
12
12
```

代码解释：

```text
1. doubleMethod 是用 def 定义的方法。
2. doubleFunction 是用 val 保存的函数值。
3. (x: Int) => x * 2 表示接收一个 Int，返回它的 2 倍。
4. doubleMethod(6) 调用方法。
5. doubleFunction(6) 调用函数值。
6. 两者结果相同，但概念和用途不同。
```

初学者提示：

```text
刚开始可以先把 def 看成“定义方法”，把箭头 => 看成“定义函数逻辑”。
```

---

## 7. 课堂案例整理

### 案例 1：坐标点移动案例

* 案例名称：坐标点移动
* 对应知识点：类、对象、类参数、成员变量、方法、Unit
* 案例背景：在图形界面、游戏、鼠标移动、窗口坐标中，坐标点经常需要根据变化量移动。
* 解决思路：
  1. 定义一个 `Point` 类表示点。
  2. 使用 `x` 和 `y` 保存当前坐标。
  3. 定义 `move(dx, dy)` 方法表示移动。
  4. 每次移动时更新 `x` 和 `y`。
* Scala 代码：

```scala
class Point(var x: Int, var y: Int) {
  def move(dx: Int, dy: Int): Unit = {
    x += dx
    y += dy
  }

  def position(): String = {
    "(" + x + ", " + y + ")"
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Point(0, 0)
    p.move(5, 3)
    println(p.position())
  }
}
```

* 这个案例帮助理解什么：
  1. 类可以描述一种事物。
  2. 对象保存自己的状态。
  3. 方法可以修改对象状态。
  4. 参数可以表示动作所需的数据。

---

### 案例 2：动物对象作业案例

* 案例名称：Animal 对象练习
* 对应知识点：object、变量、方法、函数
* 案例背景：课堂作业要求创建一个对象，包含两个变量、一个方法和一个函数。
* 解决思路：
  1. 使用 `object AnimalDemo` 创建单例对象。
  2. 定义两个变量，例如动物名称和年龄。
  3. 定义一个方法，例如 `introduce()`。
  4. 定义一个函数值，例如计算年龄翻倍。
* Scala 代码：

```scala
object AnimalDemo {
  var name: String = "Dog"
  var age: Int = 3

  def introduce(): Unit = {
    println("这是一只 " + name + "，年龄是 " + age + " 岁。")
  }

  val doubleAge = (x: Int) => x * 2
}

object Main {
  def main(args: Array[String]): Unit = {
    AnimalDemo.introduce()
    println(AnimalDemo.doubleAge(AnimalDemo.age))
  }
}
```

* 这个案例帮助理解什么：
  1. `object` 可以直接包含变量和方法。
  2. 方法用 `def` 定义。
  3. 函数可以用 `val` 保存。
  4. 通过 `对象名.成员名` 可以访问对象中的内容。

---

### 案例 3：循环处理重复输出

* 案例名称：循环输出多个学生编号
* 对应知识点：循环、范围、重复动作
* 案例背景：如果要输出多个学生编号，不应该写很多行 `println`，应该使用循环。
* 解决思路：
  1. 确定重复动作：输出编号。
  2. 确定范围：1 到 5。
  3. 使用 `for` 循环遍历范围。
* Scala 代码：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    for (i <- 1 to 5) {
      println("学生编号：" + i)
    }
  }
}
```

* 这个案例帮助理解什么：
  1. 循环可以减少重复代码。
  2. `to` 表示包含结束值。
  3. 循环变量 `i` 会依次变化。

---

## 8. 易错点总结

### 易错点 1：定义类后以为对象已经创建

错误示例：

```scala
class Student {
  var name = "Tom"
}

println(Student.name)
```

正确写法：

```scala
class Student {
  var name = "Tom"
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = new Student()
    println(s.name)
  }
}
```

解释：

```text
class Student 只是定义模板，不是具体对象。要访问成员变量，通常需要先 new 一个对象。
```

---

### 易错点 2：普通类在 Scala 2 中随意省略 new

错误示例：

```scala
class Point(x: Int, y: Int)

val p = Point(1, 2)
```

正确写法：

```scala
class Point(x: Int, y: Int)

val p = new Point(1, 2)
```

或者使用 case class：

```scala
case class Point(x: Int, y: Int)

val p = Point(1, 2)
```

解释：

```text
Scala 2 中普通类通常需要 new。只有 case class 或伴生对象 apply 等情况才能直接使用 Point(1, 2)。Scala 3 对部分场景更宽松，但初学者建议先掌握 new 的通用写法。
```

---

### 易错点 3：返回值类型是 Int，但方法体只打印不返回

错误示例：

```scala
def add(a: Int, b: Int): Int = {
  println(a + b)
}
```

正确写法：

```scala
def add(a: Int, b: Int): Int = {
  a + b
}
```

或者：

```scala
def printAdd(a: Int, b: Int): Unit = {
  println(a + b)
}
```

解释：

```text
println 的返回值是 Unit。如果方法声明返回 Int，方法体最后应该是一个 Int 表达式。
```

---

### 易错点 4：把方法定义中的参数类型顺序写反

错误示例：

```scala
def add(Int a, Int b): Int = {
  a + b
}
```

正确写法：

```scala
def add(a: Int, b: Int): Int = {
  a + b
}
```

解释：

```text
Scala 参数写法是 参数名: 参数类型，不是 Java 的 类型 参数名。
```

---

### 易错点 5：混淆方法和函数值

错误示例：

```scala
val double = x: Int => x * 2
```

正确写法：

```scala
val double = (x: Int) => x * 2
```

解释：

```text
定义函数值时，参数通常需要写在括号中，再使用 => 表示函数体。
```

---

### 易错点 6：把 `Unit` 写成 Java 的 `void`

错误示例：

```scala
def show(): void = {
  println("hello")
}
```

正确写法：

```scala
def show(): Unit = {
  println("hello")
}
```

解释：

```text
Scala 中没有 Java 方法返回值位置上的 void 类型，通常使用 Unit 表示没有有意义的返回值。
```

---

### 易错点 7：把 `to` 和 `until` 混淆

错误示例：

```scala
for (i <- 0 to 5) {
  println(i)
}
```

如果只想输出 0 到 4，正确写法：

```scala
for (i <- 0 until 5) {
  println(i)
}
```

解释：

```text
to 包含结束值，until 不包含结束值。遍历数组下标时经常使用 0 until array.length。
```

---

## 9. 小测验题目

### 题目 1：下面哪句话最准确地描述了类和对象的关系？

A. 类是对象的具体实例  
B. 对象是类的抽象  
C. 类是模板，对象是根据模板创建出的具体实例  
D. 类和对象完全没有区别  

正确答案：C

解析：

```text
类描述共同特征和行为，可以理解为模板；对象是根据类创建出来的具体实例。
```

---

### 题目 2：Scala 中定义方法通常使用哪个关键字？

A. class  
B. def  
C. val  
D. object  

正确答案：B

解析：

```text
Scala 中通常使用 def 定义方法，例如 def add(a: Int, b: Int): Int = a + b。
```

---

### 题目 3：下面哪个方法定义是正确的？

A. def add(Int a, Int b): Int = a + b  
B. def add(a: Int, b: Int): Int = a + b  
C. add def(a: Int, b: Int): Int = a + b  
D. def add(a Int, b Int) = a + b  

正确答案：B

解析：

```text
Scala 参数写法是 参数名: 参数类型，方法返回值类型写在参数列表之后。
```

---

### 题目 4：`Unit` 最接近 Java 中的哪个概念？

A. int  
B. String  
C. void  
D. boolean  

正确答案：C

解析：

```text
Unit 表示方法没有有意义的返回值，类似 Java 中的 void。
```

---

### 题目 5：下面哪个写法表示函数值？

A. val f = (x: Int) => x * 2  
B. def f(x: Int): Int = x * 2  
C. class f(x: Int)  
D. object f(x: Int)  

正确答案：A

解析：

```text
val f = (x: Int) => x * 2 表示把一个函数保存到变量 f 中。
```

---

### 题目 6：在 Scala 2 中，普通类 `class Animal(name: String)` 创建对象的通用写法是？

A. Animal name = "Dog"  
B. val a = Animal("Dog")  
C. val a = new Animal("Dog")  
D. object Animal("Dog")  

正确答案：C

解析：

```text
Scala 2 中普通类通常使用 new 创建对象。若要省略 new，通常需要 case class 或伴生对象 apply。
```

---

### 题目 7：下面代码输出什么？

```scala
for (i <- 1 to 3) {
  println(i)
}
```

A. 1 和 2  
B. 1、2、3  
C. 0、1、2  
D. 0、1、2、3  

正确答案：B

解析：

```text
1 to 3 表示包含 1、2、3 的闭区间。
```

---

### 题目 8：如果一个方法主要用于打印信息，不返回计算结果，返回值类型适合写成什么？

A. Int  
B. String  
C. Unit  
D. Boolean  

正确答案：C

解析：

```text
打印信息属于执行动作，没有有意义的返回值，通常写 Unit。
```

---

## 10. 拖拽匹配素材

1. `class` —— 定义类，表示对象的模板
2. `object` —— 定义单例对象
3. `new` —— 创建普通类的对象
4. `def` —— 定义方法
5. `val f = (...) => ...` —— 定义并保存函数值
6. `Unit` —— 表示没有有意义的返回值
7. 类参数 —— 创建对象时传入的数据
8. 成员变量 —— 对象内部保存的状态
9. 方法调用 —— 使用对象名加点号调用方法
10. `to` —— 创建包含结束值的范围
11. `until` —— 创建不包含结束值的范围
12. 实参 —— 调用时传入的具体值

---

## 11. 流程动画素材

主题：从类定义到对象调用方法的执行流程

```text
1. 程序先读取 class 定义，知道对象应该有哪些属性和方法。
2. 程序执行到 new Point(10, 20)，开始根据 Point 类创建对象。
3. 构造器接收实参 10 和 20，并传递给类参数 x、y。
4. 新对象在内存中保存自己的 x 和 y 坐标。
5. 程序把这个对象交给变量 p 保存。
6. 程序执行 p.move(3, 5)，通过对象 p 找到 move 方法。
7. move 方法接收 dx = 3、dy = 5。
8. 方法体执行 x += dx 和 y += dy，更新对象内部坐标。
9. 方法执行结束，返回 Unit。
10. 程序继续执行后续代码，例如输出新的坐标。
```

---

## 12. 课后练习题

### 练习 1：创建一个学生类并输出学生信息

题目：

```text
定义一个 Student 类，包含 name 和 age 两个变量。创建一个学生对象，并输出姓名和年龄。
```

考查知识点：

```text
类、对象、成员变量、new、属性访问
```

参考答案：

```scala
class Student {
  var name: String = "Tom"
  var age: Int = 18
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = new Student()
    println("姓名：" + s.name)
    println("年龄：" + s.age)
  }
}
```

解题思路：

```text
先用 class 定义学生模板，再用 new 创建对象，最后通过对象名访问变量。
```

---

### 练习 2：使用类参数创建动物对象

题目：

```text
定义一个 Animal 类，类参数包括 name 和 age。创建一个狗对象并输出信息。
```

考查知识点：

```text
类参数、构造器、对象创建
```

参考答案：

```scala
class Animal(var name: String, var age: Int)

object Main {
  def main(args: Array[String]): Unit = {
    val dog = new Animal("Dog", 3)
    println(dog.name)
    println(dog.age)
  }
}
```

解题思路：

```text
把 name 和 age 写成类参数，并用 var 修饰，这样它们会成为对象的可访问字段。
```

---

### 练习 3：定义一个方法计算两个数的和

题目：

```text
定义一个 Calculator 类，其中包含 add 方法，用于返回两个整数的和。
```

考查知识点：

```text
方法定义、参数、返回值、对象调用方法
```

参考答案：

```scala
class Calculator {
  def add(a: Int, b: Int): Int = {
    a + b
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val c = new Calculator()
    println(c.add(10, 20))
  }
}
```

解题思路：

```text
add 方法接收两个 Int 参数，方法体最后一行写 a + b，作为返回值。
```

---

### 练习 4：定义一个返回 Unit 的方法

题目：

```text
定义一个 Person 类，包含 name 属性和 sayHello 方法。sayHello 方法输出一句自我介绍。
```

考查知识点：

```text
Unit、方法、成员变量、字符串拼接
```

参考答案：

```scala
class Person(var name: String) {
  def sayHello(): Unit = {
    println("你好，我是 " + name)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person("Alice")
    p.sayHello()
  }
}
```

解题思路：

```text
sayHello 只是执行输出动作，不需要返回具体结果，所以返回值类型写 Unit。
```

---

### 练习 5：定义函数值实现数字翻倍

题目：

```text
在 Main 对象中定义一个函数值 double，接收一个 Int，返回它的 2 倍。
```

考查知识点：

```text
函数值、匿名函数、箭头表达式
```

参考答案：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val double = (x: Int) => x * 2

    println(double(6))
  }
}
```

解题思路：

```text
使用 val 保存函数值，(x: Int) 表示参数，=> 后面表示函数体。
```

---

### 练习 6：完成课堂作业：一个对象中包含两个变量、一个方法和一个函数

题目：

```text
创建一个 object，里面包含两个变量、一个方法和一个函数。主题可以是 Animal、Dog 或 Cat。
```

考查知识点：

```text
object、变量、方法、函数值、对象成员访问
```

参考答案：

```scala
object Dog {
  var name: String = "Lucky"
  var age: Int = 2

  def bark(): Unit = {
    println(name + " 正在叫：汪汪！")
  }

  val nextYearAge = (currentAge: Int) => currentAge + 1
}

object Main {
  def main(args: Array[String]): Unit = {
    Dog.bark()
    println("明年年龄：" + Dog.nextYearAge(Dog.age))
  }
}
```

解题思路：

```text
object 可以直接包含变量、方法和函数值。方法用 def，函数值用 val 和箭头表达式。
```

---

### 练习 7：使用循环输出 1 到 5

题目：

```text
使用 for 循环输出 1 到 5。
```

考查知识点：

```text
for 循环、to 范围、重复输出
```

参考答案：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    for (i <- 1 to 5) {
      println(i)
    }
  }
}
```

解题思路：

```text
1 to 5 会生成包含 1、2、3、4、5 的范围，for 循环依次取出并输出。
```

---

## 13. 本节课知识结构图文字版

```text
Scala 循环、类与方法基础
├── 循环复习
│   ├── 处理重复动作
│   ├── 根据条件重复执行
│   ├── to 范围
│   ├── until 范围
│   └── 遍历数组与集合
├── 类与对象
│   ├── class 定义类
│   ├── 类是对象的抽象
│   ├── 对象是类的实例
│   ├── 类像模板或蓝图
│   ├── 对象占用具体空间
│   └── new 创建对象
├── Scala 中的 object
│   ├── 单例对象
│   ├── 程序入口 Main
│   ├── 可以包含变量
│   ├── 可以包含方法
│   └── 后续关联伴生对象
├── 类参数与成员变量
│   ├── 类名后面的参数列表
│   ├── 形参和实参
│   ├── var 字段
│   ├── val 字段
│   └── 作用域 scope
├── 方法
│   ├── def 关键字
│   ├── 方法名
│   ├── 参数列表
│   ├── 返回值类型
│   ├── 等号
│   ├── 方法体
│   └── 对象调用方法
├── 函数
│   ├── 函数值
│   ├── 匿名函数
│   ├── 箭头 =>
│   ├── val 保存函数
│   └── 可作为值使用
└── 常见错误
    ├── 类和对象混淆
    ├── 普通类随意省略 new
    ├── 参数类型写法错误
    ├── Unit 和 void 混淆
    ├── 方法返回值不匹配
    └── 函数箭头写错
```

---

## 14. 后续生成网页时可使用的数据建议

* 建议课程 ID：`scala-loop-class-method-function-20260402-1516`
* 建议课程标题：Scala 循环复习、类与对象、方法与函数（2026-04-02 15:16）
* 建议章节：Scala 类与对象 / Scala 函数与方法
* 建议标签：
  ```text
  循环、类、对象、new、类参数、作用域、方法、函数、Unit、匿名函数、实例化
  ```

* 适合放入 summary 的内容：
  ```text
  本节课从循环处理重复动作的思想出发，引入 Scala 类与对象的基本概念，讲解类是对象的抽象、对象是类的实例，并通过 Point 坐标点案例说明类参数、成员变量、方法和对象调用方法的写法。课堂还比较了方法和函数的区别，并通过创建 Animal、Dog、Cat 对象的作业帮助学生巩固。
  ```

* 适合放入 keyPoints 的内容：
  ```text
  1. 循环用于处理重复动作。
  2. 类是模板，对象是实例。
  3. 普通类对象通常使用 new 创建。
  4. 类参数可以为对象提供初始数据。
  5. 方法使用 def 定义，属于类或对象。
  6. 函数可以作为值保存到 val 中。
  7. Unit 表示没有有意义的返回值。
  8. 对象可以使用点号调用方法。
  ```

* 适合放入 codeExamples 的内容：
  ```text
  1. Student 类与对象创建。
  2. Point 类参数与坐标输出。
  3. Point 的 move 方法。
  4. def 方法与 val 函数值对比。
  ```

* 适合放入 quiz 的内容：
  ```text
  类和对象关系、def 关键字、方法参数写法、Unit、函数值、new 创建对象、to/until 区别。
  ```

* 适合放入 dragMatch 的内容：
  ```text
  class、object、new、def、Unit、类参数、成员变量、方法调用、函数值、实参、形参。
  ```

* 适合放入 flow 的内容：
  ```text
  从 class 定义开始，到 new 创建对象，再到对象调用方法、方法接收参数、修改对象状态、返回 Unit 的完整流程。
  ```

* 适合放入 exercises 的内容：
  ```text
  1. 创建 Student 类。
  2. 创建 Animal 类。
  3. 定义 add 方法。
  4. 定义 sayHello 方法。
  5. 定义 double 函数值。
  6. 完成课堂作业：对象中包含两个变量、一个方法和一个函数。
  ```

* 适合放入 conclusion 的内容：
  ```text
  本节课是从 Scala 基础语法进入面向对象编程的重要一课。学生需要重点掌握类、对象、类参数、方法和函数的基本写法，为后续学习构造器、伴生对象、封装、继承、Trait 和 Case Class 打基础。
  ```

---

## 15. 课堂补充说明

1. 课堂中提到循环很重要，核心原因是它能帮助程序处理重复性任务，而不是让学生机械地复制代码。
2. 课堂中提到二维数组和集合对象方法，这是对前面章节的复习。本节重点仍然是类、对象、方法与函数。
3. 课堂中提到 Scala 比 Java 抽象，初学者不要急着一次理解所有对象体系，先掌握 `class`、`object`、`new`、`def` 的基本用法。
4. 课堂中提到坐标转换、窗口坐标、鼠标移动等内容，这些是帮助理解 `Point` 类和 `move` 方法的应用场景，不需要扩展成图形界面开发教程。
5. 课堂中多次强调“编程是思维”，学生应该先想清楚对象有哪些属性、有哪些行为，再写代码。
6. 课堂作业“创建一个对象，包含两个变量、一个方法和一个函数”非常适合作为本节的核心练习，建议课后完整写一遍并运行。

---

## 16. 课后总结

1. 本节课的核心是理解 Scala 中类和对象的关系：类是模板，对象是具体实例。
2. 学习 Scala 时要特别注意 `class` 和 `object` 的区别，不能把二者简单混为一谈。
3. 通过本节课，应该能够写出一个简单类，并使用 `new` 创建对象。
4. 方法是类或对象中的行为，使用 `def` 定义，适合封装可重复调用的动作。
5. 函数可以作为值保存，后续学习高阶函数和集合操作时会频繁使用。
6. `Unit` 是 Scala 中非常常见的返回值类型，表示方法只执行动作，不返回有意义的结果。
7. 本节课的 `Point` 坐标点案例帮助理解对象状态如何通过方法发生变化。
8. 后续学习构造器、伴生对象、封装、继承、多态、Trait 时，都会继续使用本节课的基础概念。
9. 课后建议重点练习创建类、创建对象、定义方法、定义函数值四类代码。
10. 不要只背语法，要尝试先画出对象有哪些属性和行为，再把它们写成 Scala 代码。
