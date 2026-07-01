# Scala 课堂整理总览

本次共整理 1 节课。

## 课程列表

| 序号 | 课程 ID | 课程标题 | 所属章节 | 日期 | 主要标签 |
|---|---|---|---|---|---|
| 1 | `scala-companion-private-apply-20260409-1606` | Scala 伴生类与伴生对象、私有成员与 apply 方法 | Scala 伴生对象 / Scala 构造器 / Scala 封装 | 2026-04-09 16:06 | 伴生类、伴生对象、private、apply、构造器、主构造器、辅助构造器、对象创建 |

---

# 第 1 节课：Scala 伴生类与伴生对象、私有成员与 apply 方法（2026-04-09 16:06）

# 课程总结

## 1. 课程基本信息

* 课程 ID 建议：`scala-companion-private-apply-20260409-1606`
* 课程标题：Scala 伴生类与伴生对象、私有成员与 apply 方法（2026-04-09 16:06）
* 所属章节：Scala 伴生对象 / Scala 构造器 / Scala 封装
* 上课日期：2026-04-09 16:06
* 知识点标签：伴生类、伴生对象、私有属性、私有方法、封装、静态成员替代、apply 方法、主构造器、辅助构造器、对象创建
* 难度等级：基础进阶
* 适合对象：已经学过 Scala 类、对象、方法、函数、构造器基本概念的初学者
* 本节课一句话概括：本节课重点讲解 Scala 中伴生类和伴生对象如何互相访问私有成员，以及如何通过伴生对象的 `apply` 方法简化对象创建。

> 说明：原始转写中多次出现“派生类”“派生对象”“半生对象”“组合器”“主路由器”等词，根据上下文推测，应分别整理为“伴生类”“伴生对象”“构造器”“主构造器”。本总结已按 Scala 正确术语修正。

---

## 2. 课堂摘要

1. 本节课首先讲解了 Scala 中伴生类和伴生对象的关系，即同名的 `class` 和 `object` 可以互相配合完成对象创建和类级别功能。
2. 课堂中重点说明了私有属性 `private` 的可见范围：普通类外部不能直接访问，但伴生类和伴生对象之间可以互相访问对方的私有成员。
3. 老师通过 `color`、`id` 等私有属性示例说明，私有属性不是完全不能访问，而是只能在允许的结构范围内访问。
4. 本节课还强调了伴生对象可以承担类似 Java 中 `static` 静态方法和静态属性的作用，用类名形式直接调用。
5. 课堂中讲解了主构造器和类名后参数列表的关系，并说明参数如果加上 `val` 或 `var`，就会从普通构造参数升级为对象属性。
6. 老师通过 `apply` 方法示例说明，伴生对象可以通过 `apply` 方法创建类对象，从而让代码省略显式的 `new`。
7. 本节课还提到 `apply` 方法可以根据参数个数或参数类型进行重载，从而对应不同的构造逻辑。
8. 最后老师布置了学习任务：学生需要借助网络资源总结伴生对象、私有成员、`apply` 方法等内容，并整理到笔记中。

---

## 3. 本节课学习目标

学完本节课后，你应该能够：

1. 理解什么是伴生类和伴生对象。
2. 能写出同名的 `class` 和 `object`，并知道它们需要放在同一个源文件中。
3. 理解 `private` 私有属性和私有方法的访问范围。
4. 能解释为什么伴生对象可以访问伴生类中的私有成员。
5. 能理解 Scala 中伴生对象与 Java 静态成员之间的关系。
6. 能写出一个简单的 `apply` 方法。
7. 能通过 `ClassName(...)` 的形式调用伴生对象中的 `apply` 方法创建对象。
8. 能区分主构造器、辅助构造器和 `apply` 方法的作用。
9. 能判断类参数什么时候只是参数，什么时候会成为对象属性。
10. 能发现 `private`、`apply`、构造器参数和对象创建中的常见错误。

---

## 4. 知识点详细整理

### 知识点 1：什么是伴生类和伴生对象？

#### 这个知识点是什么？

在 Scala 中，如果一个 `class` 和一个 `object`：

1. 名字完全相同；
2. 定义在同一个源文件中；

那么这个类和对象就是一对伴生关系。

* 这个 `class` 叫伴生类。
* 这个 `object` 叫伴生对象。

示例：

```scala
class Person {
  private var name: String = "Tom"
}

object Person {
  def create(): Person = {
    new Person()
  }
}
```

这里 `class Person` 和 `object Person` 就是伴生类和伴生对象。

#### 为什么要学它？

Scala 中没有 Java 那种完全一样的 `static` 关键字。  
很多 Java 中的静态属性、静态方法、工厂方法，在 Scala 中通常写在伴生对象中。

伴生对象常见作用：

1. 放置类级别的常量。
2. 放置工具方法。
3. 放置工厂方法。
4. 定义 `apply` 方法，简化对象创建。
5. 访问伴生类的私有成员。
6. 与伴生类一起组织完整的面向对象结构。

#### 基本语法

```scala
class 类名 {
  // 伴生类内容
}

object 类名 {
  // 伴生对象内容
}
```

示例：

```scala
class Student(private var name: String) {
  def show(): Unit = {
    println(name)
  }
}

object Student {
  def createDefault(): Student = {
    new Student("默认学生")
  }
}
```

#### 课堂中的理解方式

课堂中把伴生对象理解成“类层级别的内容”，类似 Java 中用类名调用的静态方法和静态属性。

例如 Java 中可能写：

```java
Student.create()
```

在 Scala 中，常常通过伴生对象实现类似功能：

```scala
Student.create()
```

虽然调用形式很像，但 Scala 的实现方式不是 `static`，而是单例对象 `object`。

#### 初学者容易犯的错误

1. 把伴生对象理解成普通对象变量。
2. 忘记伴生类和伴生对象必须同名。
3. 把伴生类和伴生对象放在不同文件中，导致伴生关系不成立。
4. 以为 Scala 也必须写 `static`。
5. 不知道 `object Student` 中的方法可以用 `Student.method()` 调用。
6. 误以为伴生对象就是类本身。

#### 正确示例

```scala
class User(private var name: String) {
  def printName(): Unit = {
    println(name)
  }
}

object User {
  def create(name: String): User = {
    new User(name)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val u = User.create("Alice")
    u.printName()
  }
}
```

#### 示例解释

1. `class User` 是伴生类。
2. `object User` 是伴生对象。
3. `create` 方法定义在伴生对象中，可通过 `User.create(...)` 调用。
4. `new User(name)` 创建类对象。
5. `u.printName()` 调用对象方法输出姓名。

---

### 知识点 2：`private` 私有属性的访问范围

#### 这个知识点是什么？

`private` 用来修饰属性或方法，表示该成员是私有的。  
私有成员不能被类外部随意访问。

示例：

```scala
class Person {
  private var age: Int = 18
}
```

在类外部直接访问会出错：

```scala
val p = new Person()
// println(p.age) // 错误：age 是 private
```

#### 为什么要学它？

私有成员体现了“封装”思想。  
封装的目的不是把所有东西藏起来，而是控制外部如何访问对象内部数据。

这样可以：

1. 防止外部随意修改对象状态。
2. 保护内部实现细节。
3. 让类对外暴露更稳定的方法。
4. 降低代码耦合。
5. 让程序更安全、更容易维护。

#### 基本语法

私有属性：

```scala
private var color: String = "blue"
```

私有方法：

```scala
private def secret(): Unit = {
  println("secret")
}
```

通过公开方法访问私有属性：

```scala
class Car {
  private var color: String = "blue"

  def getColor(): String = {
    color
  }
}
```

#### 课堂中的理解方式

课堂中提到，私有属性只能在定义它的类结构中使用，类体以外不可见。

例如：

```scala
class Car {
  private var color = "blue"
}
```

在 `Car` 类外部不能直接写：

```scala
car.color
```

但如果在 `Car` 类内部的方法中访问 `color`，是允许的。

#### 初学者容易犯的错误

1. 以为 `private` 成员完全不能访问。
2. 在类外部直接访问私有属性。
3. 忘记通过公开方法间接访问私有属性。
4. 不理解封装的目的。
5. 把私有属性和不可变属性 `val` 混淆。
6. 以为 `private var` 就不能在类内部修改。

#### 正确示例

```scala
class Car {
  private var color: String = "blue"

  def showColor(): Unit = {
    println("颜色：" + color)
  }

  def changeColor(newColor: String): Unit = {
    color = newColor
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val car = new Car()
    car.showColor()
    car.changeColor("red")
    car.showColor()
  }
}
```

#### 示例解释

1. `color` 是私有属性，类外部不能直接访问。
2. `showColor` 是公开方法，可以在类内部读取 `color`。
3. `changeColor` 是公开方法，可以在类内部修改 `color`。
4. 外部通过方法间接操作私有属性。
5. 这就是封装的基本思想。

---

### 知识点 3：伴生对象可以访问伴生类的私有成员

#### 这个知识点是什么？

Scala 有一个重要规则：  
伴生类和伴生对象可以互相访问对方的私有成员。

也就是说，如果 `class A` 和 `object A` 是伴生关系，那么：

1. `object A` 可以访问 `class A` 对象中的 `private` 属性和方法。
2. `class A` 也可以访问 `object A` 中的 `private` 属性和方法。

#### 为什么要学它？

这是 Scala 伴生对象的重要特性。  
它让我们可以把对象级别的数据和类级别的工厂逻辑分开写，同时又能保持内部访问权限。

常见用途：

1. 通过伴生对象创建对象。
2. 在伴生对象中读取对象的私有数据。
3. 实现工厂方法。
4. 实现统一的对象创建入口。
5. 隐藏构造细节。

#### 基本语法

```scala
class Account(private var balance: Double)

object Account {
  def printBalance(account: Account): Unit = {
    println(account.balance)
  }
}
```

虽然 `balance` 是 `private`，但 `object Account` 是 `class Account` 的伴生对象，所以可以访问。

#### 课堂中的理解方式

课堂中提到，如果私有属性定义在伴生类中，那么伴生对象也可以访问，因为它们是一体的。

这句话可以整理为：

```text
伴生类和伴生对象共享一种特殊访问权限。
它们不是同一个东西，但它们互为伴生关系，所以可以访问彼此的 private 成员。
```

#### 初学者容易犯的错误

1. 以为任何对象都能访问私有属性。
2. 以为子类一定能访问父类的 `private` 成员。
3. 把伴生对象访问私有成员的规则扩大到所有类。
4. 伴生对象名称和类名不一致，导致无法访问私有成员。
5. 伴生类和伴生对象不在同一源文件中。
6. 在普通外部对象中直接访问私有字段。

> 注意：Scala 中 `private` 成员不是给所有“派生类/子类”访问的。子类若需要访问父类成员，通常应使用 `protected` 或合适的公开方法。课堂原文中的“派生类”根据上下文应理解为“伴生类”。

#### 正确示例

```scala
class Account(private var balance: Double) {
  private def password(): String = {
    "123456"
  }
}

object Account {
  def show(account: Account): Unit = {
    println("余额：" + account.balance)
    println("密码：" + account.password())
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val acc = new Account(1000.0)
    Account.show(acc)
  }
}
```

#### 示例解释

1. `balance` 是 `Account` 类的私有属性。
2. `password` 是 `Account` 类的私有方法。
3. `object Account` 是伴生对象。
4. 伴生对象中的 `show` 方法可以访问 `account.balance` 和 `account.password()`。
5. 外部代码不能直接访问这些私有成员，只能通过 `Account.show(acc)` 间接查看。

---

### 知识点 4：伴生对象与 Java 静态成员的关系

#### 这个知识点是什么？

Java 中有 `static` 关键字，用来定义类级别的属性和方法：

```java
class MathUtil {
    static int add(int a, int b) {
        return a + b;
    }
}
```

Scala 中没有完全相同的 `static` 写法。  
Scala 通常使用 `object` 来放置类级别的方法和属性。

#### 为什么要学它？

如果你学过 Java，理解这个对比能帮助你快速适应 Scala。

Scala 写法：

```scala
object MathUtil {
  def add(a: Int, b: Int): Int = {
    a + b
  }
}
```

调用：

```scala
MathUtil.add(1, 2)
```

这和 Java 静态方法调用形式很像。

#### 基本语法

```scala
object 工具对象名 {
  val 常量名 = 值

  def 方法名(...): 返回值类型 = {
    方法体
  }
}
```

示例：

```scala
object IdGenerator {
  private var currentId: Int = 0

  def nextId(): Int = {
    currentId += 1
    currentId
  }
}
```

#### 课堂中的理解方式

课堂中提到，伴生对象里的内容类似以前所说的静态方法、静态属性，可以用类名调用。

更准确地说：

```text
Scala 的 object 是单例对象。
它常常承担 Java static 的角色，但底层概念不是 static，而是对象。
```

#### 初学者容易犯的错误

1. 在 Scala 中写 `static`。
2. 以为 `object` 和 `class` 完全一样。
3. 把所有方法都放进 `object`，不再设计类。
4. 不知道 `object` 中的方法可以直接用对象名调用。
5. 把伴生对象和普通工具对象混淆。
6. 不理解伴生对象可以作为工厂入口。

#### 正确示例

```scala
object MathUtil {
  def square(x: Int): Int = {
    x * x
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    println(MathUtil.square(5))
  }
}
```

#### 示例解释

1. `MathUtil` 是一个单例对象。
2. `square` 是对象中的方法。
3. 不需要 `new MathUtil()`。
4. 可以直接写 `MathUtil.square(5)`。
5. 输出结果是 `25`。

---

### 知识点 5：类参数、主构造器与属性升级

#### 这个知识点是什么？

Scala 中，类名后面的参数列表就是主构造器的一部分。

例如：

```scala
class Person(name: String, age: Int)
```

这里 `name` 和 `age` 是构造参数。  
但它们默认不一定能在类外部访问。

如果加上 `val` 或 `var`：

```scala
class Person(val name: String, var age: Int)
```

那么参数会成为对象属性。

#### 为什么要学它？

这是 Scala 类定义中非常关键的语法。  
它决定了参数是否只是构造时临时使用，还是会保存为对象属性。

#### 基本语法

普通构造参数：

```scala
class Person(name: String, age: Int)
```

不可变属性：

```scala
class Person(val name: String, val age: Int)
```

可变属性：

```scala
class Person(var name: String, var age: Int)
```

私有属性：

```scala
class Person(private var name: String)
```

#### 课堂中的理解方式

课堂中提到：

```text
在类名后面，与类交织在一起的，是构造器。
如果没有加 val 或 var，只是传参数。
如果加上 val 或 var，就升级为属性。
```

这句话整理后就是：

```text
类名后面的参数列表属于主构造器。
参数前加 val 或 var 时，这些参数会自动成为类的字段。
```

#### 初学者容易犯的错误

1. 以为类参数一定能被外部访问。
2. 忘记给构造参数加 `val` 或 `var`。
3. 不理解 `val` 和 `var` 的区别。
4. 把主构造器写成 Java 风格。
5. 误以为 Scala 一定要单独写构造方法。
6. 不知道类体中的代码也是主构造器的一部分。

#### 正确示例

```scala
class Person(val name: String, var age: Int) {
  def introduce(): Unit = {
    println("我是 " + name + "，今年 " + age + " 岁。")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person("Tom", 18)
    println(p.name)
    p.age = 19
    p.introduce()
  }
}
```

#### 示例解释

1. `val name` 表示 `name` 是不可重新赋值的属性。
2. `var age` 表示 `age` 是可以修改的属性。
3. `new Person("Tom", 18)` 调用主构造器。
4. `p.name` 可以访问姓名。
5. `p.age = 19` 可以修改年龄。
6. `introduce()` 使用对象属性输出介绍。

---

### 知识点 6：`apply` 方法是什么？

#### 这个知识点是什么？

`apply` 是 Scala 中一个非常特殊的方法。  
当你写：

```scala
ClassName(...)
```

或：

```scala
objectName(...)
```

Scala 实际上会尝试调用对应对象的 `apply` 方法。

例如：

```scala
object Student {
  def apply(name: String, age: Int): Student = {
    new Student(name, age)
  }
}
```

调用：

```scala
val s = Student("Tom", 18)
```

等价于：

```scala
val s = Student.apply("Tom", 18)
```

#### 为什么要学它？

`apply` 方法可以让对象创建更简洁。  
它经常出现在：

1. 伴生对象中创建类对象。
2. 集合创建中，例如 `Array(1, 2, 3)`。
3. `case class` 自动生成对象创建方法。
4. 工厂方法设计中。
5. 函数对象调用中。

#### 基本语法

```scala
class 类名(参数列表)

object 类名 {
  def apply(参数列表): 类名 = {
    new 类名(参数列表)
  }
}
```

示例：

```scala
class Student(val name: String, val age: Int)

object Student {
  def apply(name: String, age: Int): Student = {
    new Student(name, age)
  }
}
```

使用：

```scala
val s = Student("Tom", 18)
```

#### 课堂中的理解方式

课堂中通过 `PlayTest` 示例说明：

1. `apply` 方法接收参数。
2. `apply` 方法内部创建类对象。
3. 返回值类型是该类对象类型。
4. 外部调用时可以不写 `new`。
5. 参数数量不同，可以对应不同的创建方式。

课堂说“调用伴生对象的方法产生类对象”，这正是 `apply` 的核心作用。

#### 初学者容易犯的错误

1. 以为 `apply` 是构造器本身。
2. 忘记 `apply` 通常写在伴生对象中。
3. `apply` 返回值类型写错。
4. `apply` 参数与类构造器参数不匹配。
5. 不理解 `Student("Tom", 18)` 实际调用的是 `Student.apply("Tom", 18)`。
6. 普通类没有伴生对象 `apply` 时，误以为一定可以省略 `new`。

#### 正确示例

```scala
class Student(val name: String, val age: Int) {
  def show(): Unit = {
    println(name + "，" + age + " 岁")
  }
}

object Student {
  def apply(name: String, age: Int): Student = {
    new Student(name, age)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = Student("Alice", 20)
    s.show()
  }
}
```

#### 示例解释

1. `class Student` 定义学生类。
2. `object Student` 是伴生对象。
3. `apply` 方法返回一个新的 `Student` 对象。
4. `Student("Alice", 20)` 会自动调用 `Student.apply("Alice", 20)`。
5. `s.show()` 调用学生对象的方法。

---

### 知识点 7：`apply` 方法重载

#### 这个知识点是什么？

方法重载是指同名方法可以有不同的参数列表。  
`apply` 方法也可以重载。

例如：

```scala
object Student {
  def apply(name: String): Student = {
    new Student(name, 18)
  }

  def apply(name: String, age: Int): Student = {
    new Student(name, age)
  }
}
```

调用时，Scala 会根据参数数量和类型选择对应的 `apply`。

#### 为什么要学它？

重载 `apply` 可以提供多种创建对象的方式。  
例如：

1. 只传姓名时，年龄使用默认值。
2. 同时传姓名和年龄时，使用完整信息。
3. 传不同类型参数时，执行不同创建逻辑。

#### 基本语法

```scala
object 类名 {
  def apply(): 类名 = {
    new 类名(...)
  }

  def apply(a: 类型): 类名 = {
    new 类名(...)
  }

  def apply(a: 类型, b: 类型): 类名 = {
    new 类名(...)
  }
}
```

#### 课堂中的理解方式

课堂中提到：

```text
有三个参数就对应三个参数的 apply。
有两个参数就对应两个参数的 apply。
```

这说明老师在讲 `apply` 的重载。  
当参数数量不同，Scala 会选择对应的 `apply` 方法。

#### 初学者容易犯的错误

1. 两个 `apply` 方法参数列表完全一样。
2. 返回值类型不一致导致理解混乱。
3. 参数传递顺序和构造器不一致。
4. 以为重载只看返回值类型。
5. 不知道 Scala 根据参数列表选择方法。
6. 忘记在重载方法中创建并返回对象。

#### 正确示例

```scala
class User(val name: String, val age: Int, val city: String) {
  def show(): Unit = {
    println(name + "，" + age + " 岁，来自 " + city)
  }
}

object User {
  def apply(name: String): User = {
    new User(name, 18, "未知")
  }

  def apply(name: String, age: Int): User = {
    new User(name, age, "未知")
  }

  def apply(name: String, age: Int, city: String): User = {
    new User(name, age, city)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val u1 = User("Tom")
    val u2 = User("Alice", 20)
    val u3 = User("Bob", 22, "北京")

    u1.show()
    u2.show()
    u3.show()
  }
}
```

#### 示例解释

1. `User("Tom")` 调用一个参数的 `apply`。
2. `User("Alice", 20)` 调用两个参数的 `apply`。
3. `User("Bob", 22, "北京")` 调用三个参数的 `apply`。
4. 三个方法都返回 `User` 对象。
5. 通过重载可以简化对象创建方式。

---

### 知识点 8：主构造器、辅助构造器与 `apply` 的区别

#### 这个知识点是什么？

Scala 中对象创建涉及几个容易混淆的概念：

1. 主构造器：写在类名后面的参数列表和类体代码。
2. 辅助构造器：类体中使用 `def this(...)` 定义的其他构造方式。
3. `apply` 方法：通常写在伴生对象中，用于简化对象创建。

#### 为什么要学它？

如果不区分这些概念，很容易误以为 `apply` 就是构造器。  
实际上，`apply` 通常是“调用构造器的工厂方法”。

#### 基本语法

主构造器：

```scala
class Person(val name: String, val age: Int)
```

辅助构造器：

```scala
class Person(val name: String, val age: Int) {
  def this(name: String) = {
    this(name, 18)
  }
}
```

伴生对象 `apply`：

```scala
object Person {
  def apply(name: String, age: Int): Person = {
    new Person(name, age)
  }
}
```

#### 课堂中的理解方式

课堂中提到 `apply` 返回 `new PlayTest(...)`，也就是返回一个类对象。  
这说明 `apply` 并不是对象本身，而是创建对象的入口。

更准确的理解：

```text
主构造器负责真正初始化对象。
辅助构造器提供额外构造方式。
apply 方法通常在伴生对象中封装 new 的过程。
```

#### 初学者容易犯的错误

1. 把 `apply` 当成主构造器。
2. 把 `def this(...)` 写在伴生对象中。
3. 忘记辅助构造器第一行必须调用其他构造器。
4. `apply` 内部忘记 `new`。
5. `apply` 返回值不是对应类类型。
6. 不知道 `ClassName(...)` 是对伴生对象 `apply` 的调用。

#### 正确示例

```scala
class Book(val title: String, val price: Double) {
  def this(title: String) = {
    this(title, 0.0)
  }

  def show(): Unit = {
    println(title + "：" + price)
  }
}

object Book {
  def apply(title: String, price: Double): Book = {
    new Book(title, price)
  }

  def apply(title: String): Book = {
    new Book(title)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val b1 = Book("Scala 入门", 59.0)
    val b2 = Book("免费讲义")

    b1.show()
    b2.show()
  }
}
```

#### 示例解释

1. `Book(val title: String, val price: Double)` 是主构造器。
2. `def this(title: String)` 是辅助构造器。
3. `object Book` 中的 `apply` 是工厂方法。
4. `Book("Scala 入门", 59.0)` 调用两个参数的 `apply`。
5. `Book("免费讲义")` 调用一个参数的 `apply`，再由辅助构造器完成初始化。

---

## 5. 重点概念对比

| 概念 A | 概念 B | 区别 | 示例 |
|---|---|---|---|
| 伴生类 | 伴生对象 | 同名 `class` 与 `object`，放在同一文件中；类用于创建实例，对象用于类级别功能 | `class Student`; `object Student` |
| `private` 成员 | 公开成员 | `private` 只能在限定范围内访问，公开成员可被外部访问 | `private var age`; `def show()` |
| 伴生对象访问私有成员 | 普通外部对象访问私有成员 | 伴生对象可以访问伴生类私有成员，普通外部对象不能 | `object Account` 可访问 `class Account` 的 `private balance` |
| Java `static` | Scala `object` | Java 用 `static` 表示类级别成员，Scala 通常用 `object` | `MathUtil.add()` |
| 构造参数 | 对象属性 | 普通参数只用于构造；加 `val`/`var` 后成为字段 | `class A(name: String)` vs `class A(val name: String)` |
| 主构造器 | 辅助构造器 | 主构造器写在类名后；辅助构造器用 `def this(...)` | `class A(x: Int)`; `def this() = this(0)` |
| 构造器 | `apply` 方法 | 构造器真正初始化对象；`apply` 通常封装创建对象过程 | `new User(...)`; `User(...)` |
| `new Student(...)` | `Student(...)` | 前者直接调用构造器；后者通常调用伴生对象 `apply` | `new Student("Tom")`; `Student("Tom")` |
| `val` 参数 | `var` 参数 | `val` 成为只读属性，`var` 成为可修改属性 | `class A(val x: Int)`; `class A(var x: Int)` |
| `private` | `protected` | `private` 只在本类及伴生对象等范围内访问；`protected` 主要给子类访问 | `private var x`; `protected var y` |

---

## 6. 代码示例整理

### 示例 1：伴生对象访问伴生类的私有属性

适用知识点：

```text
伴生类、伴生对象、private、封装
```

代码：

```scala
class Account(private var balance: Double) {
  def deposit(amount: Double): Unit = {
    balance += amount
  }
}

object Account {
  def showBalance(account: Account): Unit = {
    println("当前余额：" + account.balance)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val acc = new Account(1000.0)
    acc.deposit(200.0)
    Account.showBalance(acc)
  }
}
```

运行结果：

```text
当前余额：1200.0
```

代码解释：

```text
1. Account 类中 balance 是 private 私有属性。
2. deposit 方法可以在类内部修改 balance。
3. object Account 是 class Account 的伴生对象。
4. 伴生对象中的 showBalance 可以访问 account.balance。
5. 外部代码不能直接 acc.balance，只能通过允许的方法间接访问。
```

初学者提示：

```text
伴生对象可以访问伴生类的 private 成员，但普通外部对象不可以。
```

---

### 示例 2：使用伴生对象模拟 Java 静态工具方法

适用知识点：

```text
object、类级别方法、Java static 对比
```

代码：

```scala
object MathUtil {
  def add(a: Int, b: Int): Int = {
    a + b
  }

  def max(a: Int, b: Int): Int = {
    if (a > b) a else b
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    println(MathUtil.add(3, 5))
    println(MathUtil.max(10, 6))
  }
}
```

运行结果：

```text
8
10
```

代码解释：

```text
1. MathUtil 是一个单例对象。
2. add 和 max 是对象中的方法。
3. 调用时不需要 new MathUtil。
4. MathUtil.add(3, 5) 类似 Java 中调用静态工具方法。
```

初学者提示：

```text
Scala 中不要写 static，通常用 object 表达类级别功能。
```

---

### 示例 3：类参数加 val 或 var 后成为属性

适用知识点：

```text
主构造器、类参数、val、var、属性
```

代码：

```scala
class Student(val name: String, var age: Int) {
  def show(): Unit = {
    println(name + "，" + age + " 岁")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = new Student("Tom", 18)

    println(s.name)
    s.age = 19
    s.show()
  }
}
```

运行结果：

```text
Tom
Tom，19 岁
```

代码解释：

```text
1. val name 表示 name 是只读属性。
2. var age 表示 age 是可修改属性。
3. new Student("Tom", 18) 调用主构造器。
4. s.name 可以访问，但不能重新赋值。
5. s.age 可以修改。
```

初学者提示：

```text
类参数前不加 val 或 var 时，默认不一定能作为公开属性访问。
```

---

### 示例 4：通过 apply 方法省略 new 创建对象

适用知识点：

```text
apply、伴生对象、对象创建、工厂方法
```

代码：

```scala
class Product(val name: String, val price: Double) {
  def show(): Unit = {
    println(name + " 的价格是 " + price)
  }
}

object Product {
  def apply(name: String, price: Double): Product = {
    new Product(name, price)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = Product("电脑", 5999.0)
    p.show()
  }
}
```

运行结果：

```text
电脑 的价格是 5999.0
```

代码解释：

```text
1. class Product 定义商品类。
2. object Product 是伴生对象。
3. apply 方法返回一个 Product 对象。
4. Product("电脑", 5999.0) 实际调用 Product.apply("电脑", 5999.0)。
5. 因为 apply 内部写了 new Product，所以外部可以省略 new。
```

初学者提示：

```text
省略 new 的关键不是魔法，而是伴生对象中有合适的 apply 方法。
```

---

## 7. 课堂案例整理

### 案例 1：账户余额的私有封装

* 案例名称：账户余额封装
* 对应知识点：`private`、伴生对象、封装
* 案例背景：银行账户余额不能让外部随意修改，但系统内部需要有方法查看或更新余额。
* 解决思路：
  1. 将余额定义为私有属性。
  2. 提供存款方法修改余额。
  3. 在伴生对象中提供检查方法。
  4. 外部不能直接访问余额。
* Scala 代码：

```scala
class BankAccount(private var balance: Double) {
  def deposit(amount: Double): Unit = {
    if (amount > 0) {
      balance += amount
    }
  }
}

object BankAccount {
  def printBalance(account: BankAccount): Unit = {
    println("余额：" + account.balance)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val account = new BankAccount(500.0)
    account.deposit(100.0)
    BankAccount.printBalance(account)
  }
}
```

* 这个案例帮助理解什么：
  1. 私有属性保护对象内部数据。
  2. 伴生对象可以访问伴生类私有属性。
  3. 公开方法可以作为受控访问入口。

---

### 案例 2：学生对象创建工厂

* 案例名称：通过 `apply` 创建学生对象
* 对应知识点：伴生对象、`apply`、对象创建
* 案例背景：希望创建学生对象时不用每次写 `new Student(...)`，让代码更简洁。
* 解决思路：
  1. 定义 `Student` 类。
  2. 定义同名伴生对象。
  3. 在伴生对象中写 `apply` 方法。
  4. 使用 `Student(...)` 创建对象。
* Scala 代码：

```scala
class Student(val name: String, val age: Int) {
  def introduce(): Unit = {
    println("我是 " + name + "，今年 " + age + " 岁。")
  }
}

object Student {
  def apply(name: String, age: Int): Student = {
    new Student(name, age)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = Student("Alice", 20)
    s.introduce()
  }
}
```

* 这个案例帮助理解什么：
  1. `Student(...)` 不是直接调用类，而是调用伴生对象的 `apply`。
  2. `apply` 通常负责创建并返回类对象。
  3. 伴生对象可作为对象创建入口。

---

### 案例 3：多种方式创建用户

* 案例名称：`apply` 方法重载
* 对应知识点：apply 重载、默认信息、构造器调用
* 案例背景：有时创建用户只知道姓名，有时知道姓名和年龄，有时知道完整信息。
* 解决思路：
  1. 在伴生对象中定义多个 `apply` 方法。
  2. 参数数量不同，对应不同创建逻辑。
  3. 缺失信息使用默认值。
* Scala 代码：

```scala
class User(val name: String, val age: Int, val city: String) {
  def show(): Unit = {
    println(name + "，" + age + " 岁，来自 " + city)
  }
}

object User {
  def apply(name: String): User = {
    new User(name, 18, "未知")
  }

  def apply(name: String, age: Int): User = {
    new User(name, age, "未知")
  }

  def apply(name: String, age: Int, city: String): User = {
    new User(name, age, city)
  }
}
```

* 这个案例帮助理解什么：
  1. 同名 `apply` 可以有不同参数列表。
  2. Scala 会根据参数选择对应方法。
  3. `apply` 能让对象创建更灵活。

---

## 8. 易错点总结

### 易错点 1：把“伴生对象”写成不同名字

错误示例：

```scala
class Student(private val name: String)

object StudentHelper {
  def show(s: Student): Unit = {
    // println(s.name) // 错误
  }
}
```

正确写法：

```scala
class Student(private val name: String)

object Student {
  def show(s: Student): Unit = {
    println(s.name)
  }
}
```

解释：

```text
只有同名 class 和 object 才是伴生关系。StudentHelper 不是 Student 的伴生对象，不能访问 Student 的 private 成员。
```

---

### 易错点 2：在类外部直接访问私有属性

错误示例：

```scala
class Car(private var color: String)

object Main {
  def main(args: Array[String]): Unit = {
    val c = new Car("blue")
    println(c.color)
  }
}
```

正确写法：

```scala
class Car(private var color: String) {
  def showColor(): Unit = {
    println(color)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val c = new Car("blue")
    c.showColor()
  }
}
```

解释：

```text
private 属性不能在普通外部代码中直接访问，应该通过类内部的公开方法访问。
```

---

### 易错点 3：以为 `apply` 就是构造器

错误示例：

```scala
class Student(val name: String)

object Student {
  def apply(name: String): Unit = {
    new Student(name)
  }
}
```

正确写法：

```scala
class Student(val name: String)

object Student {
  def apply(name: String): Student = {
    new Student(name)
  }
}
```

解释：

```text
apply 不是构造器本身，它通常是工厂方法。它应该返回创建好的对象。
```

---

### 易错点 4：类参数未加 `val` 或 `var`，却在类外访问

错误示例：

```scala
class Person(name: String)

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person("Tom")
    println(p.name)
  }
}
```

正确写法：

```scala
class Person(val name: String)

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person("Tom")
    println(p.name)
  }
}
```

解释：

```text
类参数如果要作为外部可访问的属性，通常需要加 val 或 var。
```

---

### 易错点 5：没有伴生对象 `apply` 却省略 `new`

错误示例：

```scala
class Product(val name: String)

val p = Product("电脑")
```

正确写法 1：

```scala
class Product(val name: String)

val p = new Product("电脑")
```

正确写法 2：

```scala
class Product(val name: String)

object Product {
  def apply(name: String): Product = {
    new Product(name)
  }
}

val p = Product("电脑")
```

解释：

```text
Product("电脑") 需要伴生对象中有合适的 apply 方法。否则普通类通常要用 new。
```

---

### 易错点 6：误以为子类可以访问父类 private 成员

错误示例：

```scala
class Animal {
  private var name = "animal"
}

class Dog extends Animal {
  def show(): Unit = {
    // println(name) // 错误
  }
}
```

正确写法：

```scala
class Animal {
  protected var name = "animal"
}

class Dog extends Animal {
  def show(): Unit = {
    println(name)
  }
}
```

解释：

```text
private 不是给普通子类访问的。如果需要子类访问，通常使用 protected 或提供公开方法。
```

---

## 9. 小测验题目

### 题目 1：什么是伴生对象？

A. 任意一个 object  
B. 与某个 class 同名并位于同一源文件中的 object  
C. 所有继承父类的对象  
D. 所有 private 对象  

正确答案：B

解析：

```text
伴生对象必须和伴生类同名，并且通常定义在同一个源文件中。
```

---

### 题目 2：Scala 中通常用什么结构承担 Java static 的角色？

A. private  
B. class  
C. object  
D. var  

正确答案：C

解析：

```text
Scala 没有完全相同的 static 写法，通常使用 object 放置类级别成员。
```

---

### 题目 3：伴生对象能否访问伴生类的 private 成员？

A. 能  
B. 不能  
C. 只有子类可以  
D. 只有 main 方法可以  

正确答案：A

解析：

```text
Scala 中伴生类和伴生对象可以互相访问对方的 private 成员。
```

---

### 题目 4：下面哪个写法会把类参数变成可公开访问的只读属性？

A. `class Person(name: String)`  
B. `class Person(val name: String)`  
C. `class Person(private name: String)`  
D. `class Person(def name: String)`  

正确答案：B

解析：

```text
类参数前加 val 后，会成为只读字段，可以通过对象访问。
```

---

### 题目 5：`Student("Tom", 18)` 通常会调用什么？

A. `Student.main("Tom", 18)`  
B. `Student.apply("Tom", 18)`  
C. `Student.private("Tom", 18)`  
D. `Student.new("Tom", 18)`  

正确答案：B

解析：

```text
当使用 对象名(...) 的形式时，Scala 会尝试调用该对象的 apply 方法。
```

---

### 题目 6：`apply` 方法一般写在哪里？

A. 伴生对象中  
B. import 语句中  
C. for 循环中  
D. 注释中  

正确答案：A

解析：

```text
用于创建类对象的 apply 方法通常写在伴生对象中。
```

---

### 题目 7：下面哪个说法是正确的？

A. `apply` 就是主构造器  
B. 主构造器必须写成 `def this`  
C. `apply` 常作为工厂方法，内部可以调用构造器创建对象  
D. Scala 中不能定义多个 `apply`  

正确答案：C

解析：

```text
apply 不是构造器本身，它通常封装对象创建过程，可以内部调用 new。
```

---

### 题目 8：下面代码中，`age` 能否在类外通过 `p.age` 修改？

```scala
class Person(val name: String, var age: Int)
```

A. 能  
B. 不能  
C. 只有伴生对象能  
D. 只有 private 方法能  

正确答案：A

解析：

```text
age 前面是 var，因此是可变属性，外部可以通过对象修改，除非另有限定修饰符。
```

---

## 10. 拖拽匹配素材

1. 伴生类 —— 与同名伴生对象配套的 class
2. 伴生对象 —— 与同名 class 配套的 object
3. `private` —— 限制成员访问范围
4. 封装 —— 保护对象内部数据
5. `object` —— Scala 中的单例对象
6. Java `static` —— 类级别成员
7. `apply` —— 可通过对象名加括号自动调用的方法
8. 主构造器 —— 类名后参数列表及类体初始化逻辑
9. 辅助构造器 —— 使用 `def this(...)` 定义的构造方式
10. `val` 参数 —— 生成只读属性
11. `var` 参数 —— 生成可修改属性
12. 工厂方法 —— 用来创建对象的方法

---

## 11. 流程动画素材

主题：通过伴生对象 `apply` 创建对象的流程

```text
1. 程序执行到 Student("Tom", 18)。
2. Scala 发现 Student 是一个伴生对象名。
3. Scala 将 Student("Tom", 18) 转换为 Student.apply("Tom", 18)。
4. 程序进入伴生对象 Student 中的 apply 方法。
5. apply 方法接收 name = "Tom" 和 age = 18。
6. apply 方法内部执行 new Student(name, age)。
7. Student 类的主构造器被调用，创建一个新的 Student 对象。
8. 新对象保存 name 和 age 属性。
9. apply 方法把新创建的 Student 对象返回。
10. 返回的对象赋值给变量 s。
11. 后续可以通过 s.show() 调用类对象中的方法。
```

---

## 12. 课后练习题

### 练习 1：定义伴生类和伴生对象

题目：

```text
定义一个 Student 类和它的伴生对象 Student。伴生对象中定义 create 方法，用于创建 Student 对象。
```

考查知识点：

```text
伴生类、伴生对象、对象创建、工厂方法
```

参考答案：

```scala
class Student(val name: String, val age: Int) {
  def show(): Unit = {
    println(name + "，" + age + " 岁")
  }
}

object Student {
  def create(name: String, age: Int): Student = {
    new Student(name, age)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = Student.create("Tom", 18)
    s.show()
  }
}
```

解题思路：

```text
先定义 class Student，再定义同名 object Student。在伴生对象中写 create 方法，并返回 new Student。
```

---

### 练习 2：使用 private 封装属性

题目：

```text
定义一个 Car 类，包含 private color 属性，并提供 showColor 方法输出颜色。
```

考查知识点：

```text
private、封装、公开方法
```

参考答案：

```scala
class Car(private var color: String) {
  def showColor(): Unit = {
    println("颜色：" + color)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val car = new Car("blue")
    car.showColor()
  }
}
```

解题思路：

```text
color 设置为 private 后不能在类外直接访问，因此需要在类内部提供 showColor 方法。
```

---

### 练习 3：伴生对象访问私有属性

题目：

```text
定义 Account 类，balance 为 private。定义伴生对象 Account，在其中输出账户余额。
```

考查知识点：

```text
伴生对象、private、互相访问私有成员
```

参考答案：

```scala
class Account(private var balance: Double)

object Account {
  def printBalance(account: Account): Unit = {
    println("余额：" + account.balance)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val account = new Account(1000.0)
    Account.printBalance(account)
  }
}
```

解题思路：

```text
Account 伴生对象可以访问 Account 类对象中的 private balance。
```

---

### 练习 4：定义 apply 方法创建对象

题目：

```text
定义 Book 类和伴生对象 Book，在伴生对象中写 apply 方法，使得可以用 Book("Scala", 59.0) 创建对象。
```

考查知识点：

```text
apply、伴生对象、省略 new
```

参考答案：

```scala
class Book(val title: String, val price: Double) {
  def show(): Unit = {
    println(title + "：" + price)
  }
}

object Book {
  def apply(title: String, price: Double): Book = {
    new Book(title, price)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val b = Book("Scala", 59.0)
    b.show()
  }
}
```

解题思路：

```text
Book("Scala", 59.0) 会调用 Book.apply("Scala", 59.0)，apply 内部返回 new Book。
```

---

### 练习 5：重载 apply 方法

题目：

```text
定义 User 类，包含 name 和 age。伴生对象中写两个 apply 方法：一个只接收 name，默认 age 为 18；另一个接收 name 和 age。
```

考查知识点：

```text
apply 重载、默认创建逻辑、对象创建
```

参考答案：

```scala
class User(val name: String, val age: Int) {
  def show(): Unit = {
    println(name + "，" + age + " 岁")
  }
}

object User {
  def apply(name: String): User = {
    new User(name, 18)
  }

  def apply(name: String, age: Int): User = {
    new User(name, age)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val u1 = User("Tom")
    val u2 = User("Alice", 20)

    u1.show()
    u2.show()
  }
}
```

解题思路：

```text
两个 apply 方法参数列表不同，Scala 会根据调用时传入的参数数量选择对应方法。
```

---

### 练习 6：判断类参数是否能访问

题目：

```text
下面两个类有什么区别？哪个可以通过对象访问 name？
class A(name: String)
class B(val name: String)
```

考查知识点：

```text
类参数、val 属性、访问权限
```

参考答案：

```text
class A(name: String) 中的 name 只是构造参数，默认不能通过对象直接访问。
class B(val name: String) 中的 name 是只读属性，可以通过对象访问。
```

示例代码：

```scala
class A(name: String)
class B(val name: String)

object Main {
  def main(args: Array[String]): Unit = {
    val b = new B("Tom")
    println(b.name)
  }
}
```

解题思路：

```text
参数前加 val 或 var 时，会生成对象字段；不加时通常只是构造参数。
```

---

## 13. 本节课知识结构图文字版

```text
Scala 伴生类与伴生对象
├── 伴生关系
│   ├── 同名 class
│   ├── 同名 object
│   ├── 同一源文件
│   └── 互为伴生
├── private 私有成员
│   ├── 私有属性
│   ├── 私有方法
│   ├── 类外不可直接访问
│   ├── 伴生对象可访问伴生类 private
│   └── 伴生类可访问伴生对象 private
├── 伴生对象的作用
│   ├── 类级别方法
│   ├── 类级别属性
│   ├── 类似 Java static
│   ├── 工厂方法
│   └── apply 方法
├── 构造器
│   ├── 主构造器
│   │   ├── 类名后的参数列表
│   │   ├── 类体初始化逻辑
│   │   └── 参数可升级为属性
│   ├── 辅助构造器
│   │   ├── def this(...)
│   │   └── 调用其他构造器
│   └── 构造参数
│       ├── 普通参数
│       ├── val 只读属性
│       ├── var 可变属性
│       └── private 私有属性
├── apply 方法
│   ├── 定义在伴生对象中
│   ├── 可通过 类名(...) 调用
│   ├── 通常返回类对象
│   ├── 内部常用 new
│   └── 可以重载
└── 常见错误
    ├── 伴生对象不同名
    ├── 类外访问 private
    ├── 把 apply 当构造器
    ├── 没有 apply 却省略 new
    ├── 参数未加 val/var 却外部访问
    └── 混淆 private 与 protected
```

---

## 14. 后续生成网页时可使用的数据建议

* 建议课程 ID：`scala-companion-private-apply-20260409-1606`
* 建议课程标题：Scala 伴生类与伴生对象、私有成员与 apply 方法（2026-04-09 16:06）
* 建议章节：Scala 伴生对象 / Scala 构造器 / Scala 封装
* 建议标签：
  ```text
  伴生类、伴生对象、private、封装、静态方法、object、apply、构造器、主构造器、辅助构造器、工厂方法
  ```

* 适合放入 summary 的内容：
  ```text
  本节课讲解 Scala 中伴生类与伴生对象的关系，重点说明 private 私有成员的访问范围，以及伴生对象如何访问伴生类的私有属性和方法。课堂还介绍了伴生对象类似 Java static 的作用，并通过 apply 方法说明如何简化对象创建、如何根据参数数量创建不同对象。
  ```

* 适合放入 keyPoints 的内容：
  ```text
  1. 同名 class 和 object 可以构成伴生关系。
  2. private 成员不能被普通外部代码直接访问。
  3. 伴生类和伴生对象可以互相访问 private 成员。
  4. Scala 常用 object 承担 Java static 的角色。
  5. 类名后的参数列表属于主构造器。
  6. 类参数加 val 或 var 后会成为对象属性。
  7. apply 方法通常写在伴生对象中。
  8. ClassName(...) 通常会调用伴生对象的 apply 方法。
  9. apply 可以重载，提供多种对象创建方式。
  ```

* 适合放入 codeExamples 的内容：
  ```text
  1. 伴生对象访问伴生类 private 属性。
  2. 使用 object 模拟静态工具方法。
  3. 类参数加 val/var 变成属性。
  4. 使用 apply 省略 new 创建对象。
  ```

* 适合放入 quiz 的内容：
  ```text
  伴生对象定义、private 可见范围、object 与 static、apply 调用机制、val/var 参数、主构造器与 apply 区别。
  ```

* 适合放入 dragMatch 的内容：
  ```text
  伴生类、伴生对象、private、封装、object、apply、主构造器、辅助构造器、val 参数、var 参数、工厂方法。
  ```

* 适合放入 flow 的内容：
  ```text
  从 Student("Tom",18) 开始，展示 Scala 如何转换为 Student.apply("Tom",18)，再由 apply 内部调用 new Student(...) 创建对象并返回。
  ```

* 适合放入 exercises 的内容：
  ```text
  1. 定义伴生类和伴生对象。
  2. 使用 private 封装属性。
  3. 在伴生对象中访问伴生类 private 属性。
  4. 定义 apply 方法创建对象。
  5. 重载 apply 方法。
  6. 判断类参数是否成为属性。
  ```

* 适合放入 conclusion 的内容：
  ```text
  本节课是学习 Scala 伴生对象和对象创建机制的关键一课。学生应重点掌握伴生类与伴生对象的关系、private 访问范围、object 代替 static 的思想，以及 apply 方法如何简化对象创建。
  ```

---

## 15. 课堂补充说明

1. 原文中的“派生类/派生对象”根据上下文应理解为“伴生类/伴生对象”，不是继承体系中的子类或派生类。
2. 原文中的“组合器”“主路由器”“辅助路由器”根据上下文应分别理解为“构造器”“主构造器”“辅助构造器”。
3. 课堂中提到“私有属性只能在定义它的类体结构中使用”，这句话对普通外部访问是正确的，但需要补充：伴生类和伴生对象之间具有特殊访问权限。
4. 课堂中把伴生对象类比为 Java 的静态方法和静态属性，这对初学者理解很有帮助，但要记住 Scala 的实现方式是 `object`，不是 `static`。
5. `apply` 方法不是构造器本身，而是经常封装构造器调用的工厂方法。
6. 如果普通类没有伴生对象 `apply`，在 Scala 2 中通常不能直接写 `ClassName(...)` 创建对象，需要写 `new ClassName(...)`。
7. 课堂布置的“用网络平台总结方法”可以整理为课后任务：重点总结 `private`、伴生对象、`apply`、构造器参数这四个主题。

---

## 16. 课后总结

1. 本节课的核心是理解伴生类和伴生对象，它们是 Scala 面向对象中非常重要的一组结构。
2. 学习 Scala 时要特别注意：`object` 不只是程序入口，它还经常承担 Java 中静态成员的角色。
3. `private` 是封装的重要工具，普通外部代码不能直接访问私有成员。
4. 伴生类和伴生对象可以互相访问私有成员，这是 Scala 特有的重要规则。
5. 类名后的参数列表属于主构造器，加上 `val` 或 `var` 后会成为对象属性。
6. `apply` 方法可以让对象创建更加简洁，例如把 `new Student(...)` 封装成 `Student(...)`。
7. `apply` 可以重载，通过不同参数列表提供多种创建对象的方式。
8. 本节课内容会直接影响后续对 case class、模式匹配、集合创建方式和工厂方法的理解。
9. 课后建议学生手写一遍伴生类、伴生对象、private 属性和 apply 方法的完整示例。
10. 不要死记 `apply`，要理解它背后的流程：类名加括号调用的是伴生对象的 `apply`，`apply` 再创建并返回类对象。
