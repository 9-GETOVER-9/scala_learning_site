# 课程总结：2026-04-21 Scala 继承与 Java 继承的对比

## 1. 课程基本信息

* **课程 ID 建议：** `scala-inheritance-java-compare`
* **课程标题：** 2026-04-21 Scala 继承与 Java 继承的对比
* **所属章节：** Scala 继承、Scala 多态
* **上课日期：** 2026-04-21
* **知识点标签：** Scala 继承、Java 继承对比、extends、super、override、主构造器、辅助构造器、字段重写、方法重写、final、protected、访问权限、单继承、toString
* **难度等级：** 初级到中级入门
* **适合对象：** 已经学习过 Java 继承，并已掌握 Scala 类、对象、主构造器和辅助构造器基础的学生
* **本节课一句话概括：** 本节课通过对比 Java 与 Scala 的继承语法，重点讲解 Scala 中子类继承父类、构造器参数传递、`override` 使用规则、`super` 调用、字段重写和访问控制。

> 说明：原始转写中“主步骤函数”“主过滤器”“主路由器”均按上下文整理为“主构造器”；“基类”“超类”“父类”在本总结中统一使用“父类/超类”。  
> 原文后半段关于 `val` 与 `var` 字段重写存在明显混乱和自我修正。本总结按 Scala 通用规则整理：**非 `final` 的 `val` 可以被子类用 `override val` 重写；抽象 `var` 可以由子类实现；具体 `var` 通常不建议也不能像普通方法那样随意重写。** 初学阶段重点掌握“`val` 可重写、具体 `var` 不要重写、重写非抽象成员必须写 `override`”。

---

## 2. 课堂摘要

1. 本节课首先强调了 Scala 继承中构造器参数传递的特殊规则：只有子类主构造器可以直接向父类构造器传递参数。
2. 课堂中对比了 Java 与 Scala 的继承写法，说明二者都使用 `extends` 表示继承，但 Scala 类名后可以直接带主构造器参数。
3. 老师重点讲解了 `override` 的使用规则：Scala 中重写非抽象方法或字段时必须写 `override`，实现抽象成员时可以省略但建议保留。
4. 本节课通过 `Point` 和 `Location` 的例子说明了子类可以继承父类的字段和方法，也可以重写父类方法或字段。
5. 课堂总结了 Scala 和 Java 在继承特性上的共同点：子类可以继承父类非私有成员，可以增加自己的成员，可以重写父类成员，访问权限不能缩小。
6. 本节课说明了 Scala 只支持单继承，一个类只能直接继承一个父类；这点与 Java 的类继承规则相似。
7. 老师讲解了 `final` 的作用：`final` 类不能被继承，`final` 方法不能被重写，`final` 字段不能再被覆盖。
8. 课堂中通过 `Animal` 和 `Dog` 例子说明了方法重写，强调重写非抽象方法时必须写 `override`。
9. 本节课还通过 `Person` 和 `Employee` 的 `toString` 示例说明了如何使用 `super` 调用父类方法，并在子类中扩展输出内容。
10. 课堂最后讲解了字段重写，特别说明 `val` 字段类似无参取值方法，可以被同名 `override val` 重写；这部分是 Scala 与 Java 差异较大的内容。

---

## 3. 本节课学习目标

学完本节课后，你应该能够：

1. 理解 Scala 中继承的基本语法，能使用 `extends` 定义子类。
2. 能区分父类、子类、超类、基类这些概念，并知道它们在继承关系中的含义。
3. 能说明 Java 和 Scala 继承的相同点，例如都支持代码复用、方法重写、访问权限约束。
4. 能说明 Scala 和 Java 继承的关键差异，尤其是 Scala 主构造器直接参与继承参数传递。
5. 能正确使用 `override` 重写父类的非抽象方法和非抽象字段。
6. 能理解实现抽象方法时 `override` 可以省略，但为了代码清晰建议写上。
7. 能使用 `super` 调用父类方法，并在子类中扩展父类行为。
8. 能理解 `final` 修饰类、方法、字段时分别产生什么限制。
9. 能理解 `protected` 的基本含义，知道它与继承和访问范围有关。
10. 能理解 `val` 字段、`var` 字段、无参 `def` 与字段重写之间的关系。
11. 能看懂 `Person`、`Employee`、`Animal`、`Dog`、`Point`、`Location` 等继承案例。
12. 能整理出考试中可能出现的概念题答案，例如 Scala 继承与 Java 继承的异同点。

---

## 4. 知识点详细整理

### 知识点 1：继承的基本概念

#### 这个知识点是什么？

继承是面向对象编程的重要特性。通过继承，子类可以复用父类已有的字段和方法，并在此基础上扩展自己的功能。

在 Scala 中，使用 `extends` 表示继承：

```scala
class Animal {
  def sound(): Unit = {
    println("动物发出声音")
  }
}

class Dog extends Animal {
  def run(): Unit = {
    println("狗在跑")
  }
}
```

其中：

* `Animal` 是父类，也可以叫超类、基类。
* `Dog` 是子类，也可以叫派生类。
* `Dog` 继承了 `Animal` 的非私有成员。

#### 为什么要学它？

继承可以解决代码复用问题。如果多个类有相同的属性和行为，可以把公共部分抽取到父类中，再让子类继承父类。这样可以减少重复代码，也便于后续学习多态、抽象类和特质。

#### 基本语法

```scala
class 父类名 {
  // 父类字段和方法
}

class 子类名 extends 父类名 {
  // 子类新增字段和方法
}
```

如果父类有主构造器参数：

```scala
class Person(val name: String)

class Student(name: String, val grade: Int) extends Person(name)
```

#### 课堂中的理解方式

老师把继承理解为“子类继承父类的特征和行为”。父类中通用的属性和方法可以被子类复用，子类还可以增加自己的特殊属性和方法。如果父类已有的方法不符合子类需求，子类还可以重写。

#### 初学者容易犯的错误

1. 忘记使用 `extends`。
2. 以为子类能继承父类所有成员，包括 `private` 成员。
3. 不理解父类构造器参数需要通过子类主构造器传递。
4. 把继承和创建对象混淆。
5. 以为 Scala 一个类可以继承多个父类。

#### 正确示例

```scala
class Animal {
  def sound(): Unit = {
    println("动物发出声音")
  }
}

class Dog extends Animal {
  def run(): Unit = {
    println("狗在跑")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val dog = new Dog()
    dog.sound()
    dog.run()
  }
}
```

#### 示例解释

1. `Animal` 定义父类。
2. `sound()` 是父类方法。
3. `Dog extends Animal` 表示 `Dog` 继承 `Animal`。
4. `Dog` 可以调用继承来的 `sound()`。
5. `run()` 是 `Dog` 自己新增的方法。

---

### 知识点 2：Scala 与 Java 继承的共同点

#### 这个知识点是什么？

Scala 和 Java 都支持面向对象继承。二者有许多共同点：

1. 都使用 `extends` 表示类继承。
2. 子类可以继承父类的非私有成员。
3. 子类可以新增自己的字段和方法。
4. 子类可以重写父类的方法。
5. `final` 修饰的类不能被继承。
6. `final` 修饰的方法不能被重写。
7. 子类重写方法时，访问权限不能比父类更小。
8. 子类可以使用 `super` 调用父类方法。

#### 为什么要学它？

学生已经学过 Java 继承。把相同点先找出来，可以降低学习 Scala 继承的难度。Scala 不是完全重新发明继承，而是在继承思想上与 Java 基本一致，只是语法细节不同。

#### 基本语法

Java：

```java
class Dog extends Animal {
}
```

Scala：

```scala
class Dog extends Animal {
}
```

#### 课堂中的理解方式

老师反复强调：Scala 和 Java 在继承思想上基本相同。父类负责抽取共性，子类负责扩展个性；子类继承父类非私有成员，重写已有功能，增加新功能。

#### 初学者容易犯的错误

1. 以为 Scala 继承和 Java 完全不同。
2. 忽略 Scala 与 Java 在继承思想上的共同基础。
3. 误以为 `private` 成员也能被子类直接访问。
4. 误以为重写方法可以缩小访问权限。
5. 忘记 `final` 的限制。

#### 正确示例

```scala
class Person {
  def speak(): Unit = {
    println("人可以说话")
  }
}

class Student extends Person {
  def study(): Unit = {
    println("学生在学习")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = new Student()
    s.speak()
    s.study()
  }
}
```

#### 示例解释

1. `Student` 继承 `Person`。
2. `speak()` 是父类方法，子类可以使用。
3. `study()` 是子类新增方法。
4. 这体现了继承的代码复用和扩展能力。

---

### 知识点 3：Scala 继承的特殊点：主构造器传参

#### 这个知识点是什么？

Scala 中类名后的参数列表就是主构造器。子类继承父类时，只有子类主构造器可以直接调用父类构造器并传递参数。

```scala
class Person(val name: String)

class Student(name: String, val grade: Int) extends Person(name)
```

这里：

* `Student` 的主构造器接收 `name` 和 `grade`。
* `extends Person(name)` 把 `name` 传给父类 `Person` 的主构造器。
* 辅助构造器必须先调用本类其他构造器，不能绕过主构造器直接传给父类。

#### 为什么要学它？

这是 Scala 和 Java 继承的重要差异。Java 中构造方法写在类体里，构造方法之间通过 `super(...)` 调用父类构造器；Scala 中主构造器写在类名后，因此继承时参数传递也写在类声明位置。

#### 基本语法

```scala
class 父类名(父类参数: 类型)

class 子类名(子类参数: 类型) extends 父类名(传给父类的参数)
```

带辅助构造器：

```scala
class Student(name: String, val grade: Int) extends Person(name) {
  def this(name: String) = {
    this(name, 1)
  }
}
```

#### 课堂中的理解方式

老师强调“只有主构造器才能把参数传给父类构造器”。原因是 Scala 的辅助构造器是基于主构造器产生的，辅助构造器第一行必须调用本类已有构造器，最终仍然回到主构造器。

#### 初学者容易犯的错误

1. 在辅助构造器中直接写 `super(...)`。
2. 忘记在 `extends 父类(...)` 中传递父类需要的参数。
3. 把 Java 构造方法写法搬到 Scala 中。
4. 不理解类名后的参数列表就是主构造器。
5. 子类构造器参数和父类构造器参数对应不上。

#### 正确示例

```scala
class Person(val name: String) {
  override def toString: String = {
    "Person(name = " + name + ")"
  }
}

class Student(name: String, val grade: Int) extends Person(name) {
  def this(name: String) = {
    this(name, 1)
  }

  override def toString: String = {
    "Student(name = " + name + ", grade = " + grade + ")"
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s1 = new Student("Tom", 3)
    val s2 = new Student("Jerry")

    println(s1)
    println(s2)
  }
}
```

#### 示例解释

1. `Person` 的主构造器需要 `name`。
2. `Student(name, grade) extends Person(name)` 把 `name` 传给父类。
3. `def this(name: String)` 是辅助构造器。
4. 辅助构造器调用 `this(name, 1)`，最终仍会调用主构造器。
5. 主构造器负责完成父类构造器参数传递。

---

### 知识点 4：override 的使用规则

#### 这个知识点是什么？

`override` 表示重写父类成员。Scala 对 `override` 的要求比 Java 更严格。

一般规则：

1. 重写父类的**非抽象方法**，必须写 `override`。
2. 重写父类的**非抽象 `val` 字段**，必须写 `override`。
3. 实现父类的**抽象方法**时，可以不写 `override`，但建议写上。
4. 如果写了 `override`，但父类没有可被重写的成员，编译器会报错。

#### 为什么要学它？

`override` 能帮助编译器和程序员确认：当前成员确实是在重写父类成员，而不是不小心写了一个新成员。Scala 中如果重写非抽象成员却不写 `override`，通常会编译失败。

#### 基本语法

```scala
class Animal {
  def sound(): Unit = {
    println("动物声音")
  }
}

class Dog extends Animal {
  override def sound(): Unit = {
    println("汪汪")
  }
}
```

抽象方法：

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

#### 课堂中的理解方式

老师多次强调：重写非抽象方法时必须写 `override`；重写抽象方法时可以不写，但要知道它是在实现父类规则。这是考试可能考查的概念点。

#### 初学者容易犯的错误

1. 重写普通方法时忘记 `override`。
2. 以为 Scala 和 Java 一样，`override` 只是可选注解。
3. 把重写和重载混淆。
4. 父类没有对应成员，却误写 `override`。
5. 实现抽象方法时不写 `override`，虽然可能通过，但代码不够清楚。

#### 正确示例

```scala
class Animal {
  def sound(): Unit = {
    println("动物发出声音")
  }
}

class Dog extends Animal {
  override def sound(): Unit = {
    println("狗叫：汪汪")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val dog = new Dog()
    dog.sound()
  }
}
```

#### 示例解释

1. `Animal` 中的 `sound()` 是普通方法。
2. `Dog` 中重新定义 `sound()`。
3. 因为这是重写非抽象方法，所以必须写 `override`。
4. 调用 `dog.sound()` 时执行子类版本。

---

### 知识点 5：重写 Override 与重载 Overload 的区别

#### 这个知识点是什么？

重写和重载是两个不同概念。

**重写 Override：**

* 发生在父类和子类之间。
* 方法名、参数列表通常相同。
* 子类改变父类方法的实现。
* Scala 中重写非抽象方法必须写 `override`。

**重载 Overload：**

* 可以发生在同一个类中。
* 方法名相同，参数列表不同。
* 根据参数个数或类型选择不同方法。

#### 为什么要学它？

课堂中提到“重写和重载是两个不同的概念”。初学者经常混淆二者，尤其是考试概念题中容易出错。

#### 基本语法

重写：

```scala
class Animal {
  def sound(): Unit = println("animal")
}

class Dog extends Animal {
  override def sound(): Unit = println("dog")
}
```

重载：

```scala
class Calculator {
  def add(a: Int, b: Int): Int = a + b

  def add(a: Double, b: Double): Double = a + b
}
```

#### 课堂中的理解方式

老师用“方法头”和“方法体”解释重写：重写时方法头保持一致，方法体不同。重载则是方法名一样，但参数列表不同。

#### 初学者容易犯的错误

1. 认为只要方法名相同就是重写。
2. 把同一个类中的多个同名方法叫重写。
3. 重写时改变了参数列表，结果变成重载。
4. 重写非抽象方法忘记写 `override`。
5. 不理解重写体现的是多态，重载体现的是多种调用形式。

#### 正确示例

```scala
class Parent {
  def show(): Unit = {
    println("父类 show")
  }
}

class Child extends Parent {
  override def show(): Unit = {
    println("子类 show")
  }

  def show(message: String): Unit = {
    println("子类 show: " + message)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val c = new Child()
    c.show()
    c.show("hello")
  }
}
```

#### 示例解释

1. `Child` 中的 `override def show()` 是重写父类方法。
2. `def show(message: String)` 是重载，因为参数列表不同。
3. 调用 `c.show()` 执行无参方法。
4. 调用 `c.show("hello")` 执行有参方法。

---

### 知识点 6：使用 super 调用父类方法

#### 这个知识点是什么？

`super` 用来在子类中调用父类的方法。常见场景是：子类想保留父类已有逻辑，同时增加自己的逻辑。

```scala
class Person(val name: String) {
  override def toString: String = {
    "Person(name = " + name + ")"
  }
}

class Employee(name: String, val salary: Double) extends Person(name) {
  override def toString: String = {
    super.toString + ", salary = " + salary
  }
}
```

#### 为什么要学它？

继承不是只能完全替换父类方法，也可以在父类方法基础上扩展。`super` 可以避免重复写父类已有逻辑。

#### 基本语法

```scala
super.父类方法名(参数)
```

无参方法：

```scala
super.toString
```

#### 课堂中的理解方式

老师通过 `Person` 和 `Employee` 的 `toString` 例子讲解：父类 `Person` 输出人的姓名，子类 `Employee` 在此基础上增加薪水信息。子类用 `super.toString` 复用父类输出，再拼接自己的内容。

#### 初学者容易犯的错误

1. 忘记用 `super`，导致重复写父类逻辑。
2. 在没有父类方法时调用 `super.方法名`。
3. 以为 `super` 是创建父类对象。
4. 在重写方法中无限调用自己，导致递归错误。
5. 不理解 `toString` 是很多对象默认会使用的方法。

#### 正确示例

```scala
class Person(val name: String) {
  override def toString: String = {
    "Person(name = " + name + ")"
  }
}

class Employee(name: String, val salary: Double) extends Person(name) {
  override def toString: String = {
    super.toString + ", salary = " + salary
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val e = new Employee("Tom", 8000)
    println(e)
  }
}
```

#### 示例解释

1. `Person` 重写了 `toString`，输出姓名。
2. `Employee` 继承 `Person`。
3. `Employee` 的 `toString` 使用 `super.toString` 调用父类版本。
4. 然后拼接薪水信息。
5. `println(e)` 会自动调用 `e.toString`。

---

### 知识点 7：final 的作用

#### 这个知识点是什么？

`final` 表示“最终的、不能再被改变继承关系的”。

在 Scala 中：

* `final class`：类不能被继承。
* `final def`：方法不能被重写。
* `final val`：字段不能被重写。

#### 为什么要学它？

有些类或方法不希望被子类改变，例如安全相关逻辑、固定算法、不可变常量等。`final` 可以限制继承和重写。

#### 基本语法

```scala
final class FinalClass

class Parent {
  final def fixedMethod(): Unit = {
    println("不能被重写")
  }

  final val id: Int = 100
}
```

#### 课堂中的理解方式

老师把 `final` 和 Java 中的用法进行对比，强调二者基本一致。`final` 修饰类时不能继承；修饰方法时不能重写；修饰字段时不能被覆盖。

#### 初学者容易犯的错误

1. 继承 `final class`。
2. 重写 `final def`。
3. 重写 `final val`。
4. 把 `final` 和 `val` 完全等同。
5. 以为 `final` 只在 Java 中有用，Scala 中不用。

#### 正确示例

```scala
class Parent {
  final def id(): Int = {
    100
  }

  def name(): String = {
    "parent"
  }
}

class Child extends Parent {
  override def name(): String = {
    "child"
  }

  // 不能写：
  // override def id(): Int = 200
}
```

#### 示例解释

1. `id()` 被 `final` 修饰，子类不能重写。
2. `name()` 没有被 `final` 修饰，子类可以重写。
3. 如果尝试重写 `id()`，会编译失败。

---

### 知识点 8：protected 与访问权限

#### 这个知识点是什么？

访问权限控制成员能在什么地方被访问。常见访问级别包括：

* `public`：Scala 默认成员通常是公有的。
* `private`：只能在本类内部访问。
* `protected`：通常允许在类内部和子类中访问。
* 包访问相关规则：Scala 和 Java 在包级可见性上存在差异，初学阶段先掌握类继承层面的 `private` 和 `protected`。

#### 为什么要学它？

继承中并不是父类所有东西都能被子类随意访问。访问权限决定了字段和方法能否在子类中使用、能否在类外访问。

#### 基本语法

```scala
class Parent {
  private val secret = "private"
  protected val code = "protected"
  val name = "public"
}

class Child extends Parent {
  def show(): Unit = {
    println(code)
    println(name)
    // println(secret) // 不可以
  }
}
```

#### 课堂中的理解方式

老师用 Java 的访问权限三角形进行类比：`public` 范围最大，`private` 范围最小，`protected` 与继承关系有关。课堂中也提到 Scala 的包访问比 Java 更复杂，本节课不展开。

#### 初学者容易犯的错误

1. 认为 `private` 可以被子类直接访问。
2. 认为 `protected` 和 `public` 完全一样。
3. 不理解子类重写时访问权限不能缩小。
4. 忽略 Scala 和 Java 在包可见性上的差异。
5. 把访问权限和变量可变性混淆。

#### 正确示例

```scala
class Parent {
  private val secret = "父类私有信息"
  protected val protectedInfo = "父类受保护信息"
  val publicInfo = "父类公开信息"
}

class Child extends Parent {
  def printInfo(): Unit = {
    println(protectedInfo)
    println(publicInfo)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val c = new Child()
    c.printInfo()
    println(c.publicInfo)
  }
}
```

#### 示例解释

1. `secret` 是私有字段，子类不能直接访问。
2. `protectedInfo` 是受保护字段，子类内部可以访问。
3. `publicInfo` 是公有字段，类外也可以访问。
4. 访问权限决定了继承中的可见范围。

---

### 知识点 9：重写 val 字段

#### 这个知识点是什么？

在 Scala 中，`val` 字段可以理解为一个无参的取值方法。因此，子类可以用同名 `override val` 重写父类中的非 `final val` 字段。

```scala
class Person {
  val role: String = "普通人"
}

class Student extends Person {
  override val role: String = "学生"
}
```

#### 为什么要学它？

这是 Scala 与 Java 差异较大的地方。Java 中字段重写不是常规多态重点，而 Scala 中 `val` 字段和无参方法关系密切，因此可以像方法一样被重写。

#### 基本语法

```scala
class 父类 {
  val 字段名: 类型 = 值
}

class 子类 extends 父类 {
  override val 字段名: 类型 = 新值
}
```

#### 课堂中的理解方式

老师回顾了前面讲过的观点：`val` 可以看作一个无参取值方法。既然方法可以被重写，那么非 `final` 的 `val` 也可以被同名 `override val` 重写。

#### 初学者容易犯的错误

1. 重写 `val` 时忘记写 `override`。
2. 重写时字段名不一致。
3. 尝试重写 `final val`。
4. 把 `val` 和 `var` 的重写规则混淆。
5. 认为字段重写和字段重新赋值是一回事。

#### 正确示例

```scala
class Person {
  val role: String = "普通人"
}

class Student extends Person {
  override val role: String = "学生"
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person()
    val s = new Student()

    println(p.role)
    println(s.role)
  }
}
```

#### 示例解释

1. `Person` 中定义 `val role`。
2. `Student` 中使用 `override val role` 重写父类字段。
3. `p.role` 输出“普通人”。
4. `s.role` 输出“学生”。
5. 重写的是取值逻辑，不是对父类对象字段重新赋值。

---

### 知识点 10：var 字段重写的注意点

#### 这个知识点是什么？

`var` 字段比 `val` 复杂，因为它不仅有取值器，还有修改器。Scala 中具体 `var` 通常不能像普通 `val` 或方法那样随意重写。

更适合初学者记住的规则是：

1. **非 `final val` 可以用 `override val` 重写。**
2. **抽象 `var` 可以在子类中实现。**
3. **具体 `var` 不要尝试直接重写，容易出错，也不是推荐写法。**

抽象 `var` 示例：

```scala
abstract class Person {
  var age: Int
}

class Student extends Person {
  var age: Int = 18
}
```

#### 为什么要学它？

原始课堂转写中关于 `var` 的说法出现混乱，这也是学生最容易记错的地方。为了考试和实际编程，建议先掌握稳定规则，不要把 `var` 当成普通方法随意覆盖。

#### 基本语法

抽象 `var` 的实现：

```scala
abstract class 父类 {
  var 字段名: 类型
}

class 子类 extends 父类 {
  var 字段名: 类型 = 初始值
}
```

#### 课堂中的理解方式

老师在课堂最后也发现这部分有混乱，并提到需要再查证。根据 Scala 常规规则，`var` 由 getter 和 setter 组成，因此比 `val` 重写复杂。初学阶段应避免在父类中定义具体 `var` 后再让子类重写它。

#### 初学者容易犯的错误

1. 把 `var` 和 `val` 的重写规则完全当成一样。
2. 尝试重写父类具体 `var`。
3. 忘记 `var` 包含取值和修改两个动作。
4. 对抽象 `var` 实现时没有给初始值。
5. 不理解 `var` 的可变性会增加继承中的复杂度。

#### 正确示例

```scala
abstract class Person {
  var age: Int
}

class Student extends Person {
  var age: Int = 18
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = new Student()
    println(s.age)

    s.age = 20
    println(s.age)
  }
}
```

#### 示例解释

1. `Person` 是抽象类。
2. `var age: Int` 是抽象字段，没有初始值。
3. `Student` 实现了这个抽象 `var`。
4. `s.age` 可以读取。
5. `s.age = 20` 可以修改。

---

### 知识点 11：主构造器执行顺序与类体执行

#### 这个知识点是什么？

Scala 的主构造器不只是类名后的参数列表。类体中不属于方法内部的语句，也会作为主构造器的一部分，在创建对象时从上到下执行。

```scala
class Person(val name: String) {
  println("创建 Person: " + name)

  def sayHello(): Unit = {
    println("Hello")
  }
}
```

创建对象：

```scala
val p = new Person("Tom")
```

会执行类体中的 `println`。

#### 为什么要学它？

这是 Scala 与 Java 很不同的地方。Java 中类体里普通方法不会在创建对象时自动执行；Scala 中类体中的直接语句属于主构造器逻辑，对象创建时会执行。

#### 基本语法

```scala
class 类名(参数列表) {
  // 这些直接写在类体中的语句属于主构造器逻辑
  println("构造时执行")

  def method(): Unit = {
    // 只有调用方法时才执行
  }
}
```

#### 课堂中的理解方式

老师强调，Scala 中创建类对象时，伴生类的主构造器逻辑会从头到尾执行一遍。因此，不适合在类体中随便写大量无关代码；静态或工具性内容应该放到对象或伴生对象中。

#### 初学者容易犯的错误

1. 以为类体中的直接语句不会执行。
2. 在类体中写大量耗时逻辑，导致创建对象时自动执行。
3. 不区分“类体直接语句”和“方法体语句”。
4. 把 Java 构造方法思想完全照搬到 Scala。
5. 不理解为什么有些内容应放到 `object` 中。

#### 正确示例

```scala
class Person(val name: String) {
  println("正在创建 Person 对象：" + name)

  def hello(): Unit = {
    println("你好，" + name)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person("Tom")
    p.hello()
  }
}
```

#### 示例解释

1. `new Person("Tom")` 创建对象。
2. 类体中的 `println("正在创建...")` 会立即执行。
3. `hello()` 方法不会自动执行。
4. 只有调用 `p.hello()` 时，方法体才执行。

---

### 知识点 12：isInstanceOf 判断对象类型

#### 这个知识点是什么？

`isInstanceOf` 可以判断一个对象是否属于某个类型，类似 Java 中的 `instanceof`。

```scala
val p = new Student("Tom")

println(p.isInstanceOf[Student])
println(p.isInstanceOf[Person])
```

#### 为什么要学它？

继承后，对象可能既属于子类类型，也属于父类类型。类型判断可以帮助理解继承层级。不过在 Scala 中，更推荐使用模式匹配处理类型分支。

#### 基本语法

```scala
对象.isInstanceOf[类型]
```

#### 课堂中的理解方式

老师提到它与 Java 中的 `instanceof` 类似，用于判断对象是否属于某个类。如果属于，结果为 `true`；否则为 `false`。

#### 初学者容易犯的错误

1. 写成 Java 风格 `p instanceof Student`。
2. 忘记 Scala 类型写在方括号中。
3. 过度使用 `isInstanceOf`，不学习模式匹配。
4. 不理解子类对象也属于父类类型。
5. 判断后直接强制使用字段，忽略类型安全。

#### 正确示例

```scala
class Person(val name: String)

class Student(name: String) extends Person(name)

object Main {
  def main(args: Array[String]): Unit = {
    val s = new Student("Tom")

    println(s.isInstanceOf[Student])
    println(s.isInstanceOf[Person])
  }
}
```

#### 示例解释

1. `s` 是 `Student` 对象。
2. `Student` 继承 `Person`。
3. `s.isInstanceOf[Student]` 为 `true`。
4. `s.isInstanceOf[Person]` 也为 `true`，因为子类对象也是父类对象的一种。

---

## 5. 重点概念对比

| 概念 A | 概念 B | 区别 | 示例 |
|---|---|---|---|
| 父类 | 子类 | 父类抽取共性；子类继承父类并扩展个性 | `class Animal`；`class Dog extends Animal` |
| Java 继承 | Scala 继承 | 都用 `extends`；Scala 类声明中可直接带主构造器参数 | `class Dog extends Animal`；`class Student(name: String) extends Person(name)` |
| Java 构造方法 | Scala 主构造器 | Java 构造方法写在类体中；Scala 主构造器写在类名后 | `public Person(String name)`；`class Person(val name: String)` |
| 主构造器 | 辅助构造器 | 主构造器能直接向父类构造器传参；辅助构造器必须先调用本类构造器 | `extends Person(name)`；`def this() = this("Tom")` |
| override | overload | override 是子类重写父类方法；overload 是同名方法参数列表不同 | `override def show()`；`def show(msg: String)` |
| 抽象方法 | 非抽象方法 | 抽象方法没有方法体；非抽象方法已有实现 | `def run(): Unit`；`def run(): Unit = println("run")` |
| 实现抽象方法 | 重写普通方法 | 实现抽象方法可省略 `override`；重写普通方法必须写 `override` | `override def run()`；`override def sound()` |
| `super` | `this` | `super` 指父类；`this` 指当前对象或当前类构造器 | `super.toString`；`this(name, age)` |
| `final class` | 普通 class | `final class` 不能被继承；普通类可以被继承 | `final class A`；`class B` |
| `final def` | 普通 def | `final def` 不能被重写；普通方法可以被重写 | `final def id()`；`def name()` |
| `val` 字段 | `var` 字段 | `val` 只读，类似无参取值方法，可重写非 final val；`var` 可读写，重写规则更复杂 | `override val role`；`var age` |
| `private` | `protected` | `private` 仅本类访问；`protected` 通常子类可访问 | `private val secret`；`protected val code` |
| `isInstanceOf` | 模式匹配 | `isInstanceOf` 判断类型；模式匹配可判断并提取 | `x.isInstanceOf[Student]`；`case s: Student =>` |
| 继承 | 组合 | 继承表示“是一个”；组合表示“有一个” | 学生是人；学生有书包 |

---

## 6. 代码示例整理

### 示例 1：基本继承与方法调用

**适用知识点：**

```text
extends、父类、子类、继承方法、新增方法
```

**代码：**

```scala
class Animal {
  def sound(): Unit = {
    println("动物发出声音")
  }
}

class Dog extends Animal {
  def run(): Unit = {
    println("狗在跑")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val dog = new Dog()

    dog.sound()
    dog.run()
  }
}
```

**运行结果：**

```text
动物发出声音
狗在跑
```

**代码解释：**

1. `Animal` 是父类。
2. `Dog extends Animal` 表示 `Dog` 继承 `Animal`。
3. `sound()` 是父类方法。
4. `run()` 是子类新增方法。
5. `dog` 可以调用继承来的方法，也可以调用自己的方法。

**初学者提示：**

```text
继承的核心作用是复用父类已有功能，并在子类中扩展新功能。
```

---

### 示例 2：重写非抽象方法必须写 override

**适用知识点：**

```text
override、方法重写、非抽象方法
```

**代码：**

```scala
class Animal {
  def sound(): Unit = {
    println("动物发出声音")
  }
}

class Dog extends Animal {
  override def sound(): Unit = {
    println("狗叫：汪汪")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val dog = new Dog()
    dog.sound()
  }
}
```

**运行结果：**

```text
狗叫：汪汪
```

**代码解释：**

1. 父类 `Animal` 已经定义了 `sound()` 方法。
2. 子类 `Dog` 重新定义 `sound()`。
3. 因为父类方法是非抽象方法，所以子类必须写 `override`。
4. 调用时执行子类重写后的方法。

**初学者提示：**

```text
Scala 中重写普通方法时，override 不是装饰，而是必须遵守的语法规则。
```

---

### 示例 3：主构造器向父类构造器传参

**适用知识点：**

```text
主构造器、继承参数传递、extends
```

**代码：**

```scala
class Person(val name: String) {
  def introduce(): Unit = {
    println("姓名：" + name)
  }
}

class Student(name: String, val grade: Int) extends Person(name) {
  def showGrade(): Unit = {
    println("年级：" + grade)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val student = new Student("Tom", 3)

    student.introduce()
    student.showGrade()
  }
}
```

**运行结果：**

```text
姓名：Tom
年级：3
```

**代码解释：**

1. `Person` 的主构造器需要 `name`。
2. `Student` 的主构造器接收 `name` 和 `grade`。
3. `extends Person(name)` 把 `name` 传给父类。
4. `Student` 继承了 `introduce()`。
5. `showGrade()` 是子类自己的方法。

**初学者提示：**

```text
Scala 中父类构造器参数通常写在 extends 后面，由子类主构造器传入。
```

---

### 示例 4：使用 super 扩展父类 toString

**适用知识点：**

```text
super、toString、方法重写、父类方法复用
```

**代码：**

```scala
class Person(val name: String) {
  override def toString: String = {
    "Person(name = " + name + ")"
  }
}

class Employee(name: String, val salary: Double) extends Person(name) {
  override def toString: String = {
    super.toString + ", salary = " + salary
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val employee = new Employee("Alice", 9000)

    println(employee)
  }
}
```

**运行结果：**

```text
Person(name = Alice), salary = 9000.0
```

**代码解释：**

1. `Person` 重写 `toString`，输出姓名。
2. `Employee` 继承 `Person`。
3. `Employee` 重写 `toString`。
4. `super.toString` 调用父类的字符串输出。
5. 子类再追加薪水信息。

**初学者提示：**

```text
super 常用于“保留父类原有功能 + 增加子类新功能”的场景。
```

---

### 示例 5：重写 val 字段

**适用知识点：**

```text
val 字段、override、字段重写
```

**代码：**

```scala
class Person {
  val role: String = "普通人"
}

class Teacher extends Person {
  override val role: String = "老师"
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person()
    val t = new Teacher()

    println(p.role)
    println(t.role)
  }
}
```

**运行结果：**

```text
普通人
老师
```

**代码解释：**

1. `Person` 中定义 `val role`。
2. `Teacher` 中使用 `override val role` 重写父类字段。
3. `p.role` 输出父类字段值。
4. `t.role` 输出子类重写后的字段值。

**初学者提示：**

```text
Scala 中 val 字段类似无参取值方法，因此非 final 的 val 可以被重写。
```

---

### 示例 6：抽象方法的实现

**适用知识点：**

```text
抽象类、抽象方法、override、实现规则
```

**代码：**

```scala
abstract class Shape {
  def area(): Double
}

class Rectangle(val width: Double, val height: Double) extends Shape {
  override def area(): Double = {
    width * height
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val r = new Rectangle(3, 4)

    println(r.area())
  }
}
```

**运行结果：**

```text
12.0
```

**代码解释：**

1. `Shape` 是抽象类。
2. `area()` 是抽象方法。
3. `Rectangle` 继承 `Shape`。
4. 子类实现了 `area()`。
5. 虽然实现抽象方法时 `override` 可省略，但写上更清晰。

**初学者提示：**

```text
抽象方法没有方法体，子类必须补充具体实现。
```

---

## 7. 课堂案例整理

### 案例 1：Point 与 Location 的继承

**对应知识点：**

```text
主构造器、继承、字段重写、方法重写
```

**案例背景：**

课堂中提到 `Point` 类包含坐标 `x` 和 `y`，`Location` 类继承 `Point`，并可能重写父类字段或移动方法。

**解决思路：**

1. 定义 `Point` 父类，保存坐标。
2. 定义 `move` 方法移动坐标。
3. 定义 `Location` 子类，继承 `Point`。
4. 子类可以重写 `move` 方法，增加自己的输出逻辑。

**Scala 代码：**

```scala
class Point(var x: Int, var y: Int) {
  def move(dx: Int, dy: Int): Unit = {
    x += dx
    y += dy
    println("Point moved to (" + x + ", " + y + ")")
  }
}

class Location(x: Int, y: Int, val name: String) extends Point(x, y) {
  override def move(dx: Int, dy: Int): Unit = {
    super.move(dx, dy)
    println(name + " 的位置已经更新")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val loc = new Location(10, 20, "鼠标位置")
    loc.move(3, 5)
  }
}
```

**这个案例帮助理解什么：**

这个案例帮助学生理解子类如何把参数传给父类主构造器，并在重写方法时使用 `super` 复用父类逻辑。

---

### 案例 2：Animal 与 Dog 的方法重写

**对应知识点：**

```text
继承、override、非抽象方法重写
```

**案例背景：**

课堂中通过动物发声说明方法重写：父类 `Animal` 有通用声音方法，子类 `Dog` 需要改成狗叫。

**解决思路：**

1. 父类定义普通方法 `sound()`。
2. 子类继承父类。
3. 子类使用 `override` 重写 `sound()`。
4. 调用子类对象的方法时执行子类版本。

**Scala 代码：**

```scala
class Animal {
  def sound(): Unit = {
    println("Animal makes sound")
  }
}

class Dog extends Animal {
  override def sound(): Unit = {
    println("Dog barks")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val dog = new Dog()
    dog.sound()
  }
}
```

**这个案例帮助理解什么：**

这个案例帮助学生理解非抽象方法重写必须写 `override`，也帮助区分父类默认行为和子类特有行为。

---

### 案例 3：Person 与 Employee 的 toString 重写

**对应知识点：**

```text
toString、super、override、继承扩展
```

**案例背景：**

课堂中讲到父类 `Person` 输出姓名，子类 `Employee` 在此基础上输出薪水。

**解决思路：**

1. 父类 `Person` 重写 `toString` 输出姓名。
2. 子类 `Employee` 继承 `Person`，增加薪水字段。
3. 子类重写 `toString`。
4. 使用 `super.toString` 获取父类输出，再拼接薪水。

**Scala 代码：**

```scala
class Person(val name: String) {
  override def toString: String = {
    "name = " + name
  }
}

class Employee(name: String, val salary: Double) extends Person(name) {
  override def toString: String = {
    super.toString + ", salary = " + salary
  }
}
```

**这个案例帮助理解什么：**

它帮助学生理解 `super` 不是重新创建父类对象，而是在子类中调用父类已有方法。

---

### 案例 4：使用 val 重写角色字段

**对应知识点：**

```text
val 字段、字段重写、override
```

**案例背景：**

课堂后半段重点讨论了 `val` 字段能否重写。整理后可以用“身份角色”案例帮助理解。

**解决思路：**

1. 父类定义通用身份 `role`。
2. 子类重写 `role`。
3. 输出不同对象的身份。

**Scala 代码：**

```scala
class Person {
  val role: String = "Person"
}

class Student extends Person {
  override val role: String = "Student"
}

class Teacher extends Person {
  override val role: String = "Teacher"
}

object Main {
  def main(args: Array[String]): Unit = {
    println(new Person().role)
    println(new Student().role)
    println(new Teacher().role)
  }
}
```

**这个案例帮助理解什么：**

它帮助学生理解 Scala 中 `val` 可以看作无参取值方法，因此非 `final val` 可以被子类重写。

---

### 案例 5：抽象 Shape 与具体 Rectangle

**对应知识点：**

```text
抽象类、抽象方法、继承、实现规则
```

**案例背景：**

课堂中提到抽象方法实现规则。可以用图形面积计算帮助理解。

**解决思路：**

1. 定义抽象父类 `Shape`。
2. 抽象方法 `area()` 表示所有图形都应该能计算面积。
3. 子类 `Rectangle` 实现面积计算。
4. 通过对象调用具体实现。

**Scala 代码：**

```scala
abstract class Shape {
  def area(): Double
}

class Rectangle(val width: Double, val height: Double) extends Shape {
  override def area(): Double = width * height
}
```

**这个案例帮助理解什么：**

它帮助学生理解抽象类定义规则，子类负责实现规则。

---

## 8. 易错点总结

### 易错点 1：忘记使用 extends

**错误示例：**

```scala
class Dog Animal {
}
```

**正确写法：**

```scala
class Animal

class Dog extends Animal {
}
```

**解释：**

Scala 和 Java 一样，类继承使用 `extends` 关键字。

---

### 易错点 2：子类没有向父类构造器传参

**错误示例：**

```scala
class Person(val name: String)

class Student(val grade: Int) extends Person
```

**正确写法：**

```scala
class Person(val name: String)

class Student(name: String, val grade: Int) extends Person(name)
```

**解释：**

父类 `Person` 的主构造器需要 `name` 参数，子类继承时必须通过主构造器传给父类。

---

### 易错点 3：在辅助构造器中直接调用父类构造器

**错误示例：**

```scala
class Person(val name: String)

class Student(name: String, val grade: Int) extends Person(name) {
  def this() = {
    super("Tom")
  }
}
```

**正确写法：**

```scala
class Person(val name: String)

class Student(name: String, val grade: Int) extends Person(name) {
  def this() = {
    this("Tom", 1)
  }
}
```

**解释：**

Scala 辅助构造器必须先调用本类已有构造器，不能直接绕过主构造器调用父类构造器。

---

### 易错点 4：重写普通方法忘记写 override

**错误示例：**

```scala
class Animal {
  def sound(): Unit = println("animal")
}

class Dog extends Animal {
  def sound(): Unit = println("dog")
}
```

**正确写法：**

```scala
class Animal {
  def sound(): Unit = println("animal")
}

class Dog extends Animal {
  override def sound(): Unit = println("dog")
}
```

**解释：**

Scala 中重写非抽象方法必须写 `override`。

---

### 易错点 5：把重载当成重写

**错误示例：**

```scala
class Parent {
  def show(): Unit = println("parent")
}

class Child extends Parent {
  def show(msg: String): Unit = println(msg)
}
```

误以为 `show(msg: String)` 重写了父类 `show()`。

**正确写法：**

```scala
class Parent {
  def show(): Unit = println("parent")
}

class Child extends Parent {
  override def show(): Unit = println("child")
}
```

**解释：**

重写要求方法名和参数列表匹配。参数列表不同的是重载，不是重写。

---

### 易错点 6：重写 final 方法

**错误示例：**

```scala
class Parent {
  final def id(): Int = 1
}

class Child extends Parent {
  override def id(): Int = 2
}
```

**正确写法：**

```scala
class Parent {
  final def id(): Int = 1
}

class Child extends Parent {
  def name(): String = "child"
}
```

**解释：**

`final` 方法不能被子类重写。

---

### 易错点 7：直接访问父类 private 成员

**错误示例：**

```scala
class Parent {
  private val secret = "abc"
}

class Child extends Parent {
  def show(): Unit = {
    println(secret)
  }
}
```

**正确写法：**

```scala
class Parent {
  private val secret = "abc"

  protected def getSecret: String = secret
}

class Child extends Parent {
  def show(): Unit = {
    println(getSecret)
  }
}
```

**解释：**

`private` 成员不能被子类直接访问。如果需要子类使用，可以通过受保护方法间接提供。

---

### 易错点 8：重写 val 字段忘记 override

**错误示例：**

```scala
class Person {
  val role = "person"
}

class Student extends Person {
  val role = "student"
}
```

**正确写法：**

```scala
class Person {
  val role = "person"
}

class Student extends Person {
  override val role = "student"
}
```

**解释：**

重写父类非抽象 `val` 字段时需要写 `override`。

---

### 易错点 9：把具体 var 当成普通 val 随意重写

**错误示例：**

```scala
class Person {
  var age: Int = 18
}

class Student extends Person {
  override var age: Int = 20
}
```

**正确写法之一：使用抽象 var**

```scala
abstract class Person {
  var age: Int
}

class Student extends Person {
  var age: Int = 20
}
```

**解释：**

具体 `var` 同时包含 getter 和 setter，重写规则比 `val` 复杂。初学阶段不要直接重写父类具体 `var`。

---

### 易错点 10：不理解 Scala 类体语句会在构造时执行

**错误示例：**

```scala
class Person(val name: String) {
  println("这句话什么时候执行？")
}
```

误以为这句话永远不会自动执行。

**正确理解：**

```scala
val p = new Person("Tom")
```

创建对象时，类体中的直接语句会执行。

**解释：**

Scala 类体中的直接语句属于主构造器逻辑，创建对象时会从上到下执行。

---

## 9. 小测验题目

### 题目 1：Scala 中类继承使用哪个关键字？

A. `implements`  
B. `extends`  
C. `inherits`  
D. `override`

**正确答案：B**

**解析：**

Scala 和 Java 一样，类继承使用 `extends`。

---

### 题目 2：下面哪个说法正确？

A. Scala 一个类可以同时继承多个普通父类  
B. Scala 不支持继承  
C. Scala 类只能直接继承一个父类  
D. Scala 继承不需要 `extends`

**正确答案：C**

**解析：**

Scala 与 Java 类继承类似，一个类只能直接继承一个父类。多个能力组合通常通过特质实现。

---

### 题目 3：Scala 中谁可以直接向父类主构造器传递参数？

A. 子类主构造器  
B. 子类任意普通方法  
C. 子类辅助构造器直接调用 `super(...)`  
D. 伴生对象中的任意方法

**正确答案：A**

**解析：**

Scala 中父类构造器参数通常在 `extends 父类(...)` 位置传入，这由子类主构造器完成。

---

### 题目 4：重写父类非抽象方法时，Scala 中必须写什么关键字？

A. `final`  
B. `static`  
C. `override`  
D. `private`

**正确答案：C**

**解析：**

Scala 中重写非抽象方法必须写 `override`。

---

### 题目 5：下面哪个是正确的重写写法？

A. `def sound(): Unit = println("dog")`  
B. `override def sound(): Unit = println("dog")`  
C. `overload def sound(): Unit = println("dog")`  
D. `static def sound(): Unit = println("dog")`

**正确答案：B**

**解析：**

重写父类普通方法时，应使用 `override def`。

---

### 题目 6：`super.toString` 的作用是什么？

A. 创建一个父类对象  
B. 调用父类的 `toString` 方法  
C. 删除子类对象  
D. 调用伴生对象方法

**正确答案：B**

**解析：**

`super` 表示父类部分，`super.toString` 用来调用父类的 `toString` 方法。

---

### 题目 7：`final class A` 表示什么？

A. A 必须被继承  
B. A 不能被继承  
C. A 中所有字段都是 var  
D. A 是抽象类

**正确答案：B**

**解析：**

`final` 修饰类时，表示该类不能再被继承。

---

### 题目 8：关于 `val` 字段重写，下面说法正确的是？

A. 所有 `val` 都不能被重写  
B. 非 `final val` 可以被子类用同名 `override val` 重写  
C. `val` 只能被 `var` 重写  
D. 重写 `val` 不需要 `override`

**正确答案：B**

**解析：**

Scala 中 `val` 类似无参取值方法，非 `final val` 可以被重写，但需要写 `override`。

---

### 题目 9：下面哪个成员不能被子类直接访问？

A. 父类 public 成员  
B. 父类 protected 成员  
C. 父类 private 成员  
D. 父类非 private 方法

**正确答案：C**

**解析：**

`private` 成员只在本类内部可见，子类不能直接访问。

---

### 题目 10：重写和重载的主要区别是什么？

A. 重写发生在父子类之间，重载通常是同名方法参数不同  
B. 重写和重载完全一样  
C. 重载必须使用 `override`  
D. 重写只能发生在 object 中

**正确答案：A**

**解析：**

重写是子类改变父类方法实现；重载是方法名相同但参数列表不同。

---

## 10. 拖拽匹配素材

1. `extends` —— 表示继承
2. 父类 —— 被继承的类
3. 子类 —— 继承父类的类
4. `override` —— 表示重写父类成员
5. `super` —— 调用父类成员
6. `final class` —— 不能被继承的类
7. `final def` —— 不能被重写的方法
8. `private` —— 只能在本类内部访问
9. `protected` —— 子类中通常可以访问
10. 主构造器 —— 类名后的参数列表
11. 辅助构造器 —— 使用 `def this(...)` 定义
12. 方法重写 —— 子类重新实现父类方法
13. 方法重载 —— 同名方法参数列表不同
14. `val` 重写 —— 使用同名 `override val`
15. `isInstanceOf` —— 判断对象是否属于某个类型
16. `toString` —— 返回对象的字符串表示
17. 单继承 —— 一个类只能直接继承一个父类
18. 访问权限不能缩小 —— 子类重写时权限不能比父类更小

---

## 11. 流程动画素材

### 流程主题：创建子类对象时的构造器执行流程

```text
1. 程序执行到 new Student("Tom", 3)。
2. Scala 找到 Student 类的主构造器。
3. Student 主构造器接收参数 name = "Tom"，grade = 3。
4. 程序看到 Student 继承 Person，并写有 extends Person(name)。
5. Student 主构造器把 name 参数传给 Person 主构造器。
6. Person 主构造器先完成父类字段初始化。
7. Person 类体中的主构造器逻辑从上到下执行。
8. 父类构造完成后，继续执行 Student 类体中的主构造器逻辑。
9. Student 自己的字段 grade 被初始化。
10. Student 类体中的直接语句从上到下执行。
11. 所有构造逻辑执行完成。
12. 程序得到一个 Student 对象。
13. 后续可以通过该对象调用继承来的方法和子类自己的方法。
```

---

## 12. 课后练习题

### 练习 1：定义父类和子类

**题目：**

定义父类 `Animal`，包含方法 `eat()` 输出“动物吃东西”。定义子类 `Cat` 继承 `Animal`，新增方法 `catchMouse()` 输出“猫抓老鼠”。创建 `Cat` 对象并调用两个方法。

**考查知识点：**

```text
继承、extends、父类方法、子类新增方法
```

**参考答案：**

```scala
class Animal {
  def eat(): Unit = {
    println("动物吃东西")
  }
}

class Cat extends Animal {
  def catchMouse(): Unit = {
    println("猫抓老鼠")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val cat = new Cat()

    cat.eat()
    cat.catchMouse()
  }
}
```

**解题思路：**

使用 `extends` 建立继承关系。子类对象既能调用父类方法，也能调用自己新增的方法。

---

### 练习 2：重写父类方法

**题目：**

定义父类 `Animal`，包含方法 `sound()` 输出“动物叫”。定义子类 `Dog` 重写 `sound()`，输出“汪汪”。

**考查知识点：**

```text
override、方法重写、非抽象方法
```

**参考答案：**

```scala
class Animal {
  def sound(): Unit = {
    println("动物叫")
  }
}

class Dog extends Animal {
  override def sound(): Unit = {
    println("汪汪")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val dog = new Dog()
    dog.sound()
  }
}
```

**解题思路：**

父类 `sound()` 已有方法体，是非抽象方法。子类重写时必须写 `override`。

---

### 练习 3：主构造器传参

**题目：**

定义父类 `Person(name: String)`，定义子类 `Student(name: String, grade: Int)` 继承 `Person`。创建学生对象并输出姓名和年级。

**考查知识点：**

```text
主构造器、继承传参、字段定义
```

**参考答案：**

```scala
class Person(val name: String)

class Student(name: String, val grade: Int) extends Person(name)

object Main {
  def main(args: Array[String]): Unit = {
    val s = new Student("Tom", 2)

    println(s.name)
    println(s.grade)
  }
}
```

**解题思路：**

父类需要 `name`，子类主构造器接收 `name` 后，在 `extends Person(name)` 中传给父类。

---

### 练习 4：使用 super 扩展 toString

**题目：**

定义 `Person(name: String)`，重写 `toString` 输出姓名。定义 `Employee(name: String, salary: Double)` 继承 `Person`，重写 `toString`，在父类输出基础上增加工资。

**考查知识点：**

```text
super、toString、override、继承扩展
```

**参考答案：**

```scala
class Person(val name: String) {
  override def toString: String = {
    "name = " + name
  }
}

class Employee(name: String, val salary: Double) extends Person(name) {
  override def toString: String = {
    super.toString + ", salary = " + salary
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val e = new Employee("Alice", 8000)
    println(e)
  }
}
```

**解题思路：**

先让父类负责输出姓名，再让子类通过 `super.toString` 复用父类输出，并追加自己的薪水字段。

---

### 练习 5：重写 val 字段

**题目：**

定义父类 `Role`，包含 `val name = "普通角色"`。定义子类 `AdminRole`，重写 `name` 为“管理员”。

**考查知识点：**

```text
val 字段重写、override
```

**参考答案：**

```scala
class Role {
  val name: String = "普通角色"
}

class AdminRole extends Role {
  override val name: String = "管理员"
}

object Main {
  def main(args: Array[String]): Unit = {
    val role = new AdminRole()
    println(role.name)
  }
}
```

**解题思路：**

非 `final val` 可以被同名 `override val` 重写。重写时必须写 `override`。

---

### 练习 6：实现抽象类方法

**题目：**

定义抽象类 `Shape`，包含抽象方法 `area(): Double`。定义子类 `Circle(radius: Double)`，实现面积计算。

**考查知识点：**

```text
抽象类、抽象方法、继承、override
```

**参考答案：**

```scala
abstract class Shape {
  def area(): Double
}

class Circle(val radius: Double) extends Shape {
  override def area(): Double = {
    3.14 * radius * radius
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val c = new Circle(2)
    println(c.area())
  }
}
```

**解题思路：**

抽象类定义规则，子类必须实现 `area()` 方法。虽然实现抽象方法时 `override` 可以省略，但写上更清晰。

---

### 练习 7：判断对象类型

**题目：**

定义父类 `Person` 和子类 `Student`。创建 `Student` 对象，使用 `isInstanceOf` 判断它是否属于 `Student` 和 `Person`。

**考查知识点：**

```text
isInstanceOf、继承层级、类型判断
```

**参考答案：**

```scala
class Person(val name: String)

class Student(name: String) extends Person(name)

object Main {
  def main(args: Array[String]): Unit = {
    val s = new Student("Tom")

    println(s.isInstanceOf[Student])
    println(s.isInstanceOf[Person])
  }
}
```

**解题思路：**

子类对象既是子类类型，也是父类类型的一种，因此两个判断都为 `true`。

---

## 13. 本节课知识结构图文字版

```text
Scala 继承与 Java 继承对比
├── 继承基础
│   ├── 父类
│   ├── 子类
│   ├── extends
│   ├── 代码复用
│   └── 扩展新功能
├── Scala 与 Java 共同点
│   ├── 都使用 extends
│   ├── 子类继承父类非私有成员
│   ├── 子类可新增成员
│   ├── 子类可重写父类成员
│   ├── final 类不能被继承
│   ├── final 方法不能被重写
│   └── 访问权限不能缩小
├── Scala 特殊点
│   ├── 类名后是主构造器
│   ├── 主构造器可向父类构造器传参
│   ├── 辅助构造器基于主构造器
│   ├── 重写非抽象成员必须写 override
│   └── val 字段可像无参方法一样重写
├── 构造器
│   ├── 主构造器
│   │   ├── 类名后的参数列表
│   │   ├── 可以向父类传参
│   │   └── 类体直接语句会执行
│   └── 辅助构造器
│       ├── def this(...)
│       ├── 第一行调用本类构造器
│       └── 不能直接绕过主构造器调用父类构造器
├── 方法重写
│   ├── override
│   ├── 非抽象方法必须写
│   ├── 抽象方法实现时可省略但建议写
│   ├── 方法头保持一致
│   └── 方法体重新实现
├── 字段重写
│   ├── val 字段
│   │   ├── 类似无参取值方法
│   │   ├── 可被 override val 重写
│   │   └── final val 不能重写
│   └── var 字段
│       ├── 包含 getter 和 setter
│       ├── 抽象 var 可实现
│       └── 具体 var 不建议直接重写
├── super
│   ├── 调用父类方法
│   ├── 常用于扩展父类行为
│   └── 示例：super.toString
├── 访问控制
│   ├── public 默认公有
│   ├── private 本类内部访问
│   ├── protected 子类中可访问
│   └── 子类重写权限不能缩小
├── final
│   ├── final class 不能继承
│   ├── final def 不能重写
│   └── final val 不能重写
└── 类型判断
    ├── isInstanceOf
    ├── 子类对象属于子类类型
    └── 子类对象也属于父类类型
```

---

## 14. 后续生成网页时可使用的数据建议

* **建议课程 ID：** `scala-inheritance-java-compare`
* **建议课程标题：** 2026-04-21 Scala 继承与 Java 继承的对比
* **建议章节：** Scala 继承、Scala 多态
* **建议标签：**
  * Scala 继承
  * Java 继承对比
  * extends
  * override
  * super
  * final
  * protected
  * private
  * 主构造器
  * 辅助构造器
  * 字段重写
  * 方法重写
  * val 重写
  * var 注意点
  * toString
  * isInstanceOf
* **适合放入 summary 的内容：**
  * 本节课对比 Scala 与 Java 的继承，重点讲解 Scala 主构造器传参、`override` 规则、`super` 调用和字段重写。
  * Scala 和 Java 都使用 `extends`，继承思想基本一致，但 Scala 的主构造器写在类名后，继承传参方式不同。
  * Scala 重写非抽象成员必须写 `override`，非 `final val` 可以被同名 `override val` 重写。
* **适合放入 keyPoints 的内容：**
  * 子类使用 `extends` 继承父类。
  * Scala 只允许单继承一个父类。
  * 子类主构造器负责向父类构造器传参。
  * 重写非抽象方法必须写 `override`。
  * 使用 `super` 调用父类方法。
  * `final` 类不能被继承，`final` 方法不能被重写。
  * 非 `final val` 可以被重写。
* **适合放入 codeExamples 的内容：**
  * `Animal` 与 `Dog` 基础继承。
  * `Dog` 重写 `sound()`。
  * `Student` 向 `Person` 主构造器传参。
  * `Employee` 使用 `super.toString`。
  * `Student` 重写父类 `val role`。
  * 抽象类 `Shape` 与子类 `Circle`。
* **适合放入 quiz 的内容：**
  * `extends` 关键字。
  * 主构造器传参规则。
  * `override` 使用规则。
  * `super` 的作用。
  * `final` 的作用。
  * `val` 字段重写。
  * 访问权限不能缩小。
* **适合放入 dragMatch 的内容：**
  * `extends` —— 表示继承
  * `override` —— 重写父类成员
  * `super` —— 调用父类成员
  * `final` —— 禁止继承或重写
  * `protected` —— 子类可访问
  * 主构造器 —— 类名后的参数列表
  * `isInstanceOf` —— 判断对象类型
* **适合放入 flow 的内容：**
  * 创建子类对象 → 子类主构造器接收参数 → 参数传给父类主构造器 → 父类构造逻辑执行 → 子类构造逻辑执行 → 对象创建完成。
* **适合放入 exercises 的内容：**
  * 定义父类和子类。
  * 重写父类方法。
  * 主构造器传参。
  * 使用 `super.toString`。
  * 重写 `val` 字段。
  * 实现抽象方法。
  * 使用 `isInstanceOf` 判断类型。
* **适合放入 conclusion 的内容：**
  * 本节课是 Scala 面向对象继承的核心内容。
  * 学生应重点掌握 Scala 与 Java 相同的继承思想，以及 Scala 独有的主构造器和 `override` 规则。
  * 字段重写尤其是 `val` 重写是考试和理解 Scala 语法差异的重要点。

---

## 15. 课后总结

1. 本节课的核心是 Scala 继承与 Java 继承的对比，思想上二者相似，语法细节上 Scala 更特殊。
2. Scala 和 Java 都使用 `extends` 表示继承，子类可以复用父类的非私有成员，并扩展自己的成员。
3. Scala 一个类只能直接继承一个父类，这与 Java 的类继承规则类似。
4. Scala 与 Java 最大的差别之一是构造器：Scala 主构造器写在类名后，子类主构造器负责向父类构造器传参。
5. 辅助构造器不能直接绕过主构造器调用父类构造器，它必须先调用本类其他构造器。
6. Scala 中重写非抽象方法或字段时必须写 `override`，这是考试中非常容易考到的规则。
7. 实现抽象方法时 `override` 可以省略，但为了代码清晰和统一，建议初学者保留。
8. `super` 用来调用父类方法，常用于在父类行为基础上增加子类自己的逻辑。
9. `final` 的作用与 Java 类似：修饰类不能继承，修饰方法不能重写，修饰字段不能覆盖。
10. `val` 字段可以理解为无参取值方法，因此非 `final val` 可以被子类使用同名 `override val` 重写。
11. 具体 `var` 的重写规则较复杂，初学阶段建议不要直接重写父类具体 `var`，只需掌握抽象 `var` 可以由子类实现。
12. Scala 类体中的直接语句属于主构造器逻辑，创建对象时会从上到下执行，这一点与 Java 类体结构不同。
13. 课后复习时，应把“Java 与 Scala 继承相同点”和“Scala 特有规则”分开背诵，便于考试答概念题。
14. 本节课为后续学习多态、抽象类、特质 `trait` 和面向接口编程打基础。
15. 建议课后至少手写三类代码：普通继承、方法重写、主构造器传参，再单独练习 `super.toString` 和 `override val`。
