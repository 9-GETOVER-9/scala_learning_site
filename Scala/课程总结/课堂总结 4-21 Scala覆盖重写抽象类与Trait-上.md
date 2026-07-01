# Scala 课堂整理总览

本次共整理 1 节课。

## 课程列表

| 序号 | 课程 ID | 课程标题 | 所属章节 | 日期 | 主要标签 |
|---|---|---|---|---|---|
| 1 | `scala-override-abstract-trait-20260421-1103` | Scala 覆盖与重写、抽象类、匿名子类与 Trait 特质 | Scala 继承 / Scala 多态 / Scala 抽象类 / Scala 特质 Trait | 2026-04-21 11:03-11:19 | override、覆盖、重写、val、var、protected、抽象类、匿名子类、结构类型、Trait、with、线性化 |

---

# 第 1 节课：Scala 覆盖与重写、抽象类、匿名子类与 Trait 特质（2026-04-21 11:03-11:19）

# 课程总结

## 1. 课程基本信息

* 课程 ID 建议：`scala-override-abstract-trait-20260421-1103`
* 课程标题：Scala 覆盖与重写、抽象类、匿名子类与 Trait 特质（2026-04-21 11:03-11:19）
* 所属章节：Scala 继承 / Scala 多态 / Scala 抽象类 / Scala 特质 Trait
* 上课日期：2026-04-21 11:03-11:19
* 知识点标签：覆盖、重写、override、val 重写、var 限制、getter、setter、protected、抽象类、抽象字段、匿名子类、结构类型对象、Trait、with、特质叠加、单继承、多特质混入
* 难度等级：基础进阶到中级入门
* 适合对象：已经学过 Scala 类、对象、继承、方法、属性、构造器的学生
* 本节课一句话概括：本节课围绕 Scala 继承体系展开，重点讲解成员覆盖与重写规则、`val` 和 `var` 的差异、抽象类实现、匿名子类对象以及 Trait 特质的作用和使用方式。

> 术语修正说明：课堂原文中“覆盖”“重写”有时混用，本总结按 Scala 常用说法整理为“override 重写/覆盖父类成员”。课堂中提到的“结构类型对象”，根据示例语境更接近 `new Person { ... }` 这种“匿名子类对象”；Scala 中真正的 structural type 是更专门的类型系统概念，初学阶段不建议混淆。

---

## 2. 课堂摘要

1. 本节课首先讲解了 Scala 中覆盖与重写的概念，强调子类如果要改变父类已有的非抽象方法或属性，需要使用 `override`。
2. 课堂中重点分析了 `val` 和 `var` 在继承重写时的差异：`val` 更适合重写父类的无参 `def` 或 `val`，而 `var` 因为涉及 getter 和 setter，重写规则更受限制。
3. 老师从底层访问器角度解释了 `val` 和 `var`：`val` 通常对应字段和 getter，`var` 对应字段、getter 和 setter，因此二者在重写时不能简单等同。
4. 本节课说明了 `protected` 受保护成员的作用，强调它主要用于本类和子类访问，比 `private` 更适合继承场景。
5. 课堂中通过 `val` 重写抽象 `def` 的例子说明，如果父类只有一个无参抽象方法，子类可以用同名 `val` 提供实现。
6. 老师讲解了匿名子类对象：当子类只是为了临时重写父类某个方法，而不需要单独定义类名时，可以使用 `new 父类 { override ... }` 的写法。
7. 本节课还复习了抽象类：抽象类不能直接实例化，可以包含抽象方法、具体方法、抽象字段和具体字段。
8. 课堂最后引入了 Trait 特质，说明 Scala 通过单继承加多个特质混入来实现代码复用和类似多继承的能力。

---

## 3. 本节课学习目标

学完本节课后，你应该能够：

1. 理解 Scala 中 `override` 的作用，并能在子类中正确重写父类成员。
2. 能区分抽象成员实现和非抽象成员重写的区别。
3. 能说明 `val`、`var`、`def` 在重写规则上的差异。
4. 能理解 `val` 为什么可以实现父类的无参抽象 `def`。
5. 能理解 `var` 为什么不能随意重写父类的 `val` 或具体 `var`。
6. 能使用 `protected` 定义可供子类访问的成员。
7. 能定义抽象类，并在子类中实现抽象方法和抽象字段。
8. 能写出匿名子类对象，用于临时覆盖父类方法。
9. 能理解 Scala 单继承规则，以及 Trait 用于补充多种能力的作用。
10. 能使用 `trait` 和 `with` 给类混入多个特质。
11. 能初步理解多个 Trait 叠加时“后混入的特质优先执行”的线性化顺序。
12. 能发现继承、覆盖、抽象类和 Trait 中的常见语法错误。

---

## 4. 知识点详细整理

### 知识点 1：Scala 中的覆盖与重写

#### 这个知识点是什么？

在继承关系中，子类可以重新定义父类中已经存在的成员，这个过程通常称为重写或覆盖。  
Scala 中使用 `override` 关键字表示“我正在重写父类已有成员”。

示例：

```scala
class Person {
  def greet(): Unit = {
    println("Hello")
  }
}

class Student extends Person {
  override def greet(): Unit = {
    println("Hello, I am a student")
  }
}
```

#### 为什么要学它？

重写是多态的基础。  
父类提供通用行为，子类可以根据自己的特点改写行为。

例如：

* 父类 `Animal` 有 `sound()` 方法。
* 子类 `Dog` 重写为“汪汪”。
* 子类 `Cat` 重写为“喵喵”。

同一个方法名，在不同对象中表现不同，这就是面向对象多态的重要表现。

#### 基本语法

```scala
class 子类 extends 父类 {
  override def 方法名(参数列表): 返回值类型 = {
    新的方法体
  }
}
```

重写属性：

```scala
class Parent {
  val name: String = "Parent"
}

class Child extends Parent {
  override val name: String = "Child"
}
```

#### 课堂中的理解方式

课堂中用 `val name = "Tom"` 和子类中 `override val name = "Peter"` 的例子说明：  
子类中重新给出同名成员时，如果父类已经有具体实现，就需要明确写 `override`。

老师强调，Scala 的覆盖/重写规则和 Java 有相似之处，但 Scala 中属性也会生成访问器方法，所以属性重写要理解 getter 和 setter 的底层含义。

#### 初学者容易犯的错误

1. 重写父类具体方法时忘记写 `override`。
2. 父类中没有对应成员，却误写 `override`。
3. 把“实现抽象方法”和“重写具体方法”混为一谈。
4. 以为所有属性都可以随意重写。
5. 不理解 Scala 中字段背后可能对应 getter / setter。
6. 把 Java 的字段覆盖规则直接套到 Scala 中。

#### 正确示例

```scala
class Animal {
  def sound(): Unit = {
    println("动物发出声音")
  }
}

class Dog extends Animal {
  override def sound(): Unit = {
    println("汪汪")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val animal: Animal = new Dog()
    animal.sound()
  }
}
```

#### 示例解释

1. `Animal` 是父类。
2. `sound` 是父类中的具体方法。
3. `Dog` 继承 `Animal`。
4. `Dog` 使用 `override` 重写 `sound`。
5. `val animal: Animal = new Dog()` 体现多态。
6. 调用 `animal.sound()` 时，实际执行的是 `Dog` 中的方法。

---

### 知识点 2：`val`、`var` 与访问器方法

#### 这个知识点是什么？

Scala 中的属性并不只是一个简单变量。  
编译器会为属性生成访问器方法。

简单理解：

* `val`：只读属性，通常有 getter，没有公开 setter。
* `var`：可变属性，通常有 getter 和 setter。
* `private` 字段：访问器也会受到访问权限限制。

示例：

```scala
class Person {
  val name: String = "Tom"
  var age: Int = 18
}
```

可以理解为：

```text
name：有读取方法，但不能重新赋值。
age：既可以读取，也可以重新赋值。
```

#### 为什么要学它？

这直接影响继承重写规则。  
如果不理解 getter / setter，就很难理解为什么：

1. `val` 可以重写某些无参 `def`。
2. `var` 不能随意重写 `val`。
3. 具体 `var` 通常不允许被子类重新定义覆盖。
4. 抽象 `var` 可以由子类提供具体 `var` 实现。

#### 基本语法

```scala
class Person {
  val name: String = "Tom"   // 只读属性
  var age: Int = 18          // 可变属性
}
```

访问：

```scala
val p = new Person()
println(p.name)
println(p.age)
p.age = 20
```

#### 课堂中的理解方式

课堂中说：

```text
val 修饰的属性提供私有字段和 get 方法。
var 修饰的属性提供私有字段、一对 get 和 set 方法。
Scala 只允许重写 getter 相关成员，不允许随意重写 setter。
```

这句话是理解 `val` 和 `var` 重写规则的关键。

更准确地说，Scala 对稳定值、getter、setter 有明确规则，因此 `val`、`var`、`def` 不能任意互相替换。

#### 初学者容易犯的错误

1. 以为 `val` 和 `var` 只是能不能改值的区别。
2. 不知道 `var` 会生成 setter。
3. 以为 `var` 可以重写任何父类属性。
4. 不理解 `val` 能实现无参 `def` 的原因。
5. 把 `val` 和 `def` 的执行时机混淆。
6. 忽略 `private`、`protected` 对访问器的影响。

#### 正确示例

```scala
class Person {
  val name: String = "Tom"
  var age: Int = 18
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person()

    println(p.name)
    println(p.age)

    p.age = 20
    println(p.age)
  }
}
```

#### 示例解释

1. `name` 是 `val`，可以读取，不能重新赋值。
2. `age` 是 `var`，可以读取，也可以修改。
3. `p.age = 20` 实际上会调用 setter。
4. 理解 getter / setter 有助于理解后续重写规则。

---

### 知识点 3：`val` 重写无参 `def`

#### 这个知识点是什么？

在 Scala 中，子类中的 `val` 可以实现或重写父类中同名、无参数的 `def`。

示例：

```scala
abstract class Animal {
  def id: String
}

class Dog extends Animal {
  val id: String = "dog-001"
}
```

这里父类中 `def id: String` 是一个无参抽象方法。  
子类用 `val id` 提供了具体值。

#### 为什么要学它？

这是 Scala 中很典型、也很容易考的规则。

原因是：

```text
val id 会生成一个 getter。
无参 def id 也像一个 getter。
所以 val 可以用自己的 getter 实现父类的无参 def。
```

#### 基本语法

父类抽象无参方法：

```scala
abstract class Parent {
  def name: String
}
```

子类用 `val` 实现：

```scala
class Child extends Parent {
  val name: String = "Child"
}
```

如果父类方法是具体方法，通常应写 `override`：

```scala
class Parent {
  def name: String = "Parent"
}

class Child extends Parent {
  override val name: String = "Child"
}
```

#### 课堂中的理解方式

课堂中讲到：

```text
def 后面没有值，说明它是抽象的。
val id 底层会提供一个同名 getter。
所以 val id 可以重写或实现抽象 def id。
```

也就是说，表面上一个是“属性”，一个是“方法”，但从访问方式看，它们都可以通过 `对象.id` 读取。

#### 初学者容易犯的错误

1. 以为方法只能用方法实现。
2. 忘记父类 `def` 必须是无参数的。
3. 父类 `def id()` 带括号，却用 `val id` 实现。
4. 重写父类具体 `def` 时忘记 `override`。
5. 不理解 `val` 是稳定值，不适合表示每次计算都变化的逻辑。
6. 把 `val` 重写 `def` 和 `var` 重写 `def` 混为一谈。

#### 正确示例

```scala
abstract class User {
  def role: String
}

class Teacher extends User {
  val role: String = "teacher"
}

object Main {
  def main(args: Array[String]): Unit = {
    val u: User = new Teacher()
    println(u.role)
  }
}
```

#### 示例解释

1. `User` 是抽象类。
2. `def role: String` 没有方法体，是抽象方法。
3. `Teacher` 用 `val role` 实现它。
4. `u.role` 可以直接读取角色。
5. 输出结果是 `teacher`。

---

### 知识点 4：`var` 的重写限制

#### 这个知识点是什么？

`var` 表示可变属性，它背后通常包含 getter 和 setter。  
因为 setter 的重写规则更严格，所以 `var` 不能像 `val` 那样随意重写父类成员。

常见规则可以先这样记：

1. `val` 可以重写父类的无参 `def` 或同名 `val`。
2. `var` 不能重写父类的 `val`。
3. 具体的 `var` 通常不能被子类重新定义为新的 `var`。
4. 抽象的 `var` 可以在子类中由具体 `var` 实现。

#### 为什么要学它？

如果不知道这些规则，写继承代码时很容易出现编译错误。

尤其是从 Java 转到 Scala 的学生，容易把字段当成普通变量，但 Scala 的字段背后其实有访问器方法。

#### 基本语法

抽象 `var`：

```scala
abstract class Animal {
  var name: String
}

class Dog extends Animal {
  var name: String = "Lucky"
}
```

不要这样重写具体 `var`：

```scala
class Parent {
  var age: Int = 10
}

class Child extends Parent {
  // override var age: Int = 20 // 通常错误
}
```

更常见做法是修改继承来的值：

```scala
class Child extends Parent {
  age = 20
}
```

#### 课堂中的理解方式

课堂中强调：

```text
var 修饰的属性有 getter 和 setter。
Scala 不提供随意重写 setter 的机制。
所以 var 不能像 val 那样重写，只能修改继承来的值。
```

这句话对初学者很重要。  
你可以把它理解为：`var` 不是一个单纯字段，它还带有修改入口，继承时更敏感。

#### 初学者容易犯的错误

1. 用 `override var` 重写父类具体 `var`。
2. 用 `var` 重写父类 `val`。
3. 用 `var` 重写父类无参 `def`。
4. 不知道抽象 `var` 和具体 `var` 规则不同。
5. 忽略 setter 带来的限制。
6. 以为能修改值就等于能重写字段。

#### 正确示例

```scala
abstract class Animal {
  var name: String
}

class Dog extends Animal {
  var name: String = "Lucky"
}

object Main {
  def main(args: Array[String]): Unit = {
    val dog = new Dog()
    println(dog.name)

    dog.name = "Wangcai"
    println(dog.name)
  }
}
```

#### 示例解释

1. `Animal` 中的 `name` 是抽象 `var`，没有具体值。
2. `Dog` 必须提供具体的 `name`。
3. `dog.name` 可以读取。
4. `dog.name = "Wangcai"` 可以修改。
5. 这是实现抽象 `var`，不是重写一个已经有具体值的 `var`。

---

### 知识点 5：`protected` 受保护成员

#### 这个知识点是什么？

`protected` 表示受保护成员。  
它主要允许在当前类和子类中访问，比 `private` 更适合继承场景。

示例：

```scala
class Animal {
  protected var name: String = "animal"
}

class Dog extends Animal {
  def showName(): Unit = {
    println(name)
  }
}
```

#### 为什么要学它？

如果父类有一些数据不希望所有外部对象都访问，但又希望子类可以使用，就可以用 `protected`。

常见场景：

1. 父类提供基础字段。
2. 子类需要访问或修改该字段。
3. 外部代码不应该直接访问该字段。

#### 基本语法

```scala
class Parent {
  protected var field: String = "value"
}

class Child extends Parent {
  def useField(): Unit = {
    println(field)
  }
}
```

#### 课堂中的理解方式

课堂中讲到，受保护字段可以在本类和子类中访问。  
课堂还提到伴生对象访问问题，初学者可以这样记：

```text
protected：主要面向继承，让子类可访问。
private：主要面向封装，只有本类及伴生关系等特殊范围可访问。
public：外部都可以访问。
```

#### 初学者容易犯的错误

1. 把 `protected` 当成 `public` 使用。
2. 在完全无关的外部对象中访问 protected 成员。
3. 混淆 `private` 和 `protected`。
4. 不知道 `protected` 常用于继承设计。
5. 父类成员应该对子类开放时误写成 `private`。
6. 为了方便把所有成员都写成 public，破坏封装。

#### 正确示例

```scala
class Animal {
  protected var name: String = "动物"
}

class Cat extends Animal {
  def rename(newName: String): Unit = {
    name = newName
  }

  def show(): Unit = {
    println(name)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val cat = new Cat()
    cat.rename("小花")
    cat.show()
  }
}
```

#### 示例解释

1. `name` 是 `protected`，外部不能直接访问。
2. `Cat` 是 `Animal` 的子类，可以访问 `name`。
3. `rename` 修改继承来的受保护字段。
4. `show` 输出修改后的名字。

---

### 知识点 6：匿名子类对象

#### 这个知识点是什么？

匿名子类对象是指：不单独给子类命名，而是在创建对象时直接写出子类对父类的修改。

基本形式：

```scala
val p = new Person {
  override def greet(): Unit = {
    println("新的问候方式")
  }
}
```

这表示：

1. 创建一个 `Person` 的匿名子类。
2. 在匿名子类中重写 `greet` 方法。
3. 立刻创建这个匿名子类的对象，并赋值给 `p`。

#### 为什么要学它？

当你只需要临时改变某个父类或抽象类的方法，不想专门定义一个子类文件时，匿名子类非常方便。

常见场景：

1. 临时重写某个方法。
2. 传入一个只使用一次的对象。
3. 测试代码。
4. 回调、监听器、策略对象。
5. 抽象类或 Trait 的快速实现。

#### 基本语法

```scala
val 变量名 = new 父类名 {
  override def 方法名(): 返回值类型 = {
    方法体
  }
}
```

如果父类有构造参数：

```scala
val p = new Person("Tom") {
  override def greet(): Unit = {
    println("Hi, " + name)
  }
}
```

#### 课堂中的理解方式

课堂中提到，当子类：

1. 没有参数；
2. 没有自己的属性；
3. 没有很多独立方法；
4. 只是为了更新父类某几个函数功能；

就可以使用匿名子类对象。

课堂中称其为“结构类型对象”。为了避免混淆，本讲义建议初学者先称它为“匿名子类对象”。

#### 初学者容易犯的错误

1. 忘记 `new 父类 { ... }` 中的 `new`。
2. 在匿名子类中重写具体方法却忘记 `override`。
3. 以为匿名子类不能调用父类已有属性和方法。
4. 不知道匿名子类对象仍然是一个对象。
5. 把匿名子类对象和真正的 structural type 混淆。
6. 匿名子类写得太复杂，导致代码难以阅读。

#### 正确示例

```scala
class Person {
  val name: String = "Tom"

  def greet(): Unit = {
    println("Hello, I am " + name)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person {
      override def greet(): Unit = {
        println("Hi, I am an anonymous student")
      }
    }

    println(p.name)
    p.greet()
  }
}
```

#### 示例解释

1. `Person` 是父类。
2. `new Person { ... }` 创建了一个匿名子类对象。
3. 匿名子类重写了 `greet` 方法。
4. `p.name` 仍然可以访问父类中的属性。
5. `p.greet()` 调用的是匿名子类重写后的方法。

---

### 知识点 7：抽象类与抽象方法

#### 这个知识点是什么？

抽象类是不能直接实例化的类，用 `abstract class` 定义。  
抽象类中可以包含：

1. 抽象方法：没有方法体。
2. 具体方法：有方法体。
3. 抽象字段：没有初始值。
4. 具体字段：有初始值。

示例：

```scala
abstract class Animal {
  def sound(): Unit

  def sleep(): Unit = {
    println("睡觉")
  }
}
```

#### 为什么要学它？

抽象类用于定义规则和公共行为。

例如所有动物都会发出声音，但不同动物声音不同：

* `Animal` 只规定必须有 `sound()`。
* `Dog` 实现为“汪汪”。
* `Cat` 实现为“喵喵”。

#### 基本语法

```scala
abstract class 父类名 {
  def 抽象方法名(): 返回值类型

  def 具体方法名(): 返回值类型 = {
    方法体
  }
}
```

子类实现：

```scala
class 子类名 extends 父类名 {
  def 抽象方法名(): 返回值类型 = {
    具体实现
  }
}
```

说明：

* 实现抽象方法时，`override` 可以省略。
* 重写父类已有具体方法时，必须写 `override`。

#### 课堂中的理解方式

课堂中强调：

```text
没有方法体的方法就是抽象方法。
没有初始值的字段就是抽象字段。
子类必须先实现父类中的抽象内容，再定义自己的内容。
```

“先实现再扩展”是理解抽象类继承的重要思路。

#### 初学者容易犯的错误

1. 直接 `new` 抽象类。
2. 子类没有实现抽象方法。
3. 抽象方法误写了方法体。
4. 具体方法重写时忘记 `override`。
5. 抽象字段没有在子类中提供值。
6. 不知道抽象类可以有具体方法。

#### 正确示例

```scala
abstract class Animal {
  def sound(): Unit

  def sleep(): Unit = {
    println("动物在睡觉")
  }
}

class Dog extends Animal {
  def sound(): Unit = {
    println("汪汪")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val dog = new Dog()
    dog.sound()
    dog.sleep()
  }
}
```

#### 示例解释

1. `Animal` 是抽象类，不能直接创建对象。
2. `sound` 是抽象方法，没有方法体。
3. `sleep` 是具体方法，有方法体。
4. `Dog` 继承 `Animal`，必须实现 `sound`。
5. `dog.sleep()` 调用继承来的具体方法。

---

### 知识点 8：抽象字段

#### 这个知识点是什么？

抽象字段是没有初始值的字段。  
在抽象类或 Trait 中，可以只声明字段，而不赋值。

示例：

```scala
abstract class Animal {
  val name: String
}
```

子类必须提供具体值：

```scala
class Dog extends Animal {
  val name: String = "Lucky"
}
```

#### 为什么要学它？

抽象字段用于要求子类必须提供某些数据。

例如：

* 每个动物必须有名字。
* 每个员工必须有工号。
* 每个课程必须有课程标题。
* 每个商品必须有价格。

父类只规定“必须有”，具体值由子类决定。

#### 基本语法

抽象 `val`：

```scala
abstract class Parent {
  val id: String
}
```

子类实现：

```scala
class Child extends Parent {
  val id: String = "child-001"
}
```

抽象 `var`：

```scala
abstract class Parent {
  var count: Int
}
```

子类实现：

```scala
class Child extends Parent {
  var count: Int = 0
}
```

#### 课堂中的理解方式

课堂中提到：

```text
字段没有值，就是抽象字段。
具体子类必须提供新字段。
```

这和抽象方法类似：

* 抽象方法没有方法体，子类补方法体。
* 抽象字段没有值，子类补具体值。

#### 初学者容易犯的错误

1. 抽象字段写在普通类中却没有实现。
2. 子类忘记给抽象字段赋值。
3. 把抽象字段和默认值字段混淆。
4. 抽象 `val` 用 `var` 随意实现。
5. 抽象 `var` 没有提供可变字段。
6. 不知道抽象字段也会对应访问器。

#### 正确示例

```scala
abstract class Course {
  val title: String
  var hours: Int

  def show(): Unit = {
    println(title + "：" + hours + " 学时")
  }
}

class ScalaCourse extends Course {
  val title: String = "Scala 编程"
  var hours: Int = 32
}

object Main {
  def main(args: Array[String]): Unit = {
    val c = new ScalaCourse()
    c.show()
  }
}
```

#### 示例解释

1. `Course` 中的 `title` 和 `hours` 没有初始值，是抽象字段。
2. `ScalaCourse` 必须提供它们的具体值。
3. `show` 是父类中的具体方法，可以使用抽象字段。
4. 子类补全字段后，父类方法就能正常运行。

---

### 知识点 9：继承规则总结

#### 这个知识点是什么？

Scala 和 Java 一样，都支持继承。  
子类可以继承父类中可继承的成员，并可以重写部分成员。

课堂中总结了几个重要规则：

1. Scala 是单继承，一个类只能直接继承一个父类。
2. 父类中非私有、非 final 的成员通常可以被继承。
3. `private` 成员不能被普通子类直接访问。
4. `final` 修饰的类不能被继承，`final` 修饰的方法不能被重写。
5. 非抽象方法或属性被重写时，要写 `override`。
6. 抽象方法或抽象字段被实现时，`override` 可以省略。
7. 多种能力组合通常通过 Trait 实现。

#### 为什么要学它？

继承是面向对象代码复用和多态实现的基础。  
但继承也有规则，如果不理解规则，容易写出错误代码或设计混乱的类层次。

#### 基本语法

```scala
class 子类 extends 父类 {
  // 子类内容
}
```

重写：

```scala
override def 方法名(): 返回值类型 = {
  新实现
}
```

禁止重写：

```scala
class Parent {
  final def stop(): Unit = {
    println("不能被重写")
  }
}
```

#### 课堂中的理解方式

课堂把继承规则总结成：

```text
父类中非私有、非静态、非 final 的内容，子类可以继承。
Scala 是单继承。
如果要实现多种能力，用 Trait。
```

其中“非静态”可以按 Scala 语境理解为：  
类的实例成员属于继承关系；类级别功能通常在 `object` 中，不按普通实例继承处理。

#### 初学者容易犯的错误

1. 一个类同时 `extends` 两个普通类。
2. 重写 `final` 方法。
3. 访问父类 `private` 成员。
4. 重写具体方法时不写 `override`。
5. 把 Trait 当普通类来继承多个。
6. 不知道 `with` 用于混入多个特质。

#### 正确示例

```scala
class Animal {
  def eat(): Unit = {
    println("吃东西")
  }
}

class Dog extends Animal {
  override def eat(): Unit = {
    println("狗吃骨头")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val dog = new Dog()
    dog.eat()
  }
}
```

#### 示例解释

1. `Dog extends Animal` 表示 `Dog` 继承 `Animal`。
2. `eat` 是父类的具体方法。
3. 子类重写具体方法时使用 `override`。
4. 调用 `dog.eat()` 时执行子类版本。

---

### 知识点 10：Trait 特质

#### 这个知识点是什么？

Trait 是 Scala 中代码复用的重要单位。  
它类似 Java 接口，但比传统接口更强大。

Trait 可以包含：

1. 抽象方法。
2. 具体方法。
3. 抽象字段。
4. 具体字段。

定义 Trait：

```scala
trait Logger {
  def log(message: String): Unit
}
```

混入 Trait：

```scala
class ConsoleLogger extends Logger {
  def log(message: String): Unit = {
    println(message)
  }
}
```

#### 为什么要学它？

Scala 是单继承，一个类只能继承一个父类。  
如果一个类需要同时拥有多种能力，就可以使用多个 Trait。

例如：

* `Assistant` 可以是 `Employee`，同时混入 `StudentLike`。
* `UserService` 可以混入 `Logger`、`Validator`、`TimeRecorder`。
* 游戏角色可以混入 `Flyable`、`Attackable`、`Defendable`。

#### 基本语法

定义：

```scala
trait 特质名 {
  def 方法名(): 返回值类型
}
```

使用：

```scala
class 类名 extends 父类 with 特质1 with 特质2
```

如果没有父类，也可以：

```scala
class 类名 extends 特质1 with 特质2
```

#### 课堂中的理解方式

课堂中说：

```text
Scala 没有 Java 中完全一样的 interface，代替它的是 trait。
Trait 可以把方法和字段封装起来，然后添加到类中。
类只能继承一个父类，但可以混入任意数量的特质。
```

老师还用“助教既是员工，又带有学生特质”的例子说明 Trait 的作用：  
一个类的主身份可以来自父类，额外能力可以通过 Trait 混入。

#### 初学者容易犯的错误

1. 把 Trait 完全等同于 Java 接口。
2. 不知道 Trait 可以有具体方法。
3. 忘记使用 `with` 混入多个 Trait。
4. 多个 Trait 中有同名方法时不理解冲突规则。
5. Trait 抽象方法没有在类中实现。
6. 以为 Trait 可以替代所有继承设计。

#### 正确示例

```scala
trait Logger {
  def log(message: String): Unit = {
    println("日志：" + message)
  }
}

trait Runner {
  def run(): Unit
}

class Student extends Logger with Runner {
  def run(): Unit = {
    println("学生在跑步")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = new Student()
    s.log("开始运动")
    s.run()
  }
}
```

#### 示例解释

1. `Logger` 是 Trait，提供具体方法 `log`。
2. `Runner` 是 Trait，定义抽象方法 `run`。
3. `Student` 同时混入两个 Trait。
4. `Student` 必须实现 `run`。
5. `s.log(...)` 使用 Trait 中已有实现。

---

### 知识点 11：多个 Trait 叠加与执行顺序

#### 这个知识点是什么？

一个类可以混入多个 Trait：

```scala
class MyClass extends Base with T1 with T2 with T3
```

当多个 Trait 都参与同一个方法调用时，Scala 会按照线性化规则处理。  
初学者可以先记住课堂中的说法：

```text
后混入的 Trait 优先执行。
```

也就是最右边的 Trait 通常最先参与调用。

#### 为什么要学它？

多个 Trait 叠加是 Scala 的重要特性。  
它可以实现“可堆叠修改”，例如日志、检查、过滤、增强等功能逐层叠加。

#### 基本语法

```scala
trait BaseLogger {
  def log(message: String): Unit
}

trait TimeLogger extends BaseLogger {
  abstract override def log(message: String): Unit = {
    super.log("[时间] " + message)
  }
}

trait ShortLogger extends BaseLogger {
  abstract override def log(message: String): Unit = {
    super.log(message.take(5))
  }
}
```

> 这种 `abstract override` 是进阶写法，初学阶段只需要先理解“多个 Trait 有叠加顺序”。

#### 课堂中的理解方式

课堂中用“多个学生成绩被后一层覆盖”的比喻说明：  
多个 Trait 叠加时，后进来的特质会优先表现出来，前面的实现可能被后面的遮住或通过 `super` 继续调用。

#### 初学者容易犯的错误

1. 以为 Trait 混入顺序没有影响。
2. 多个 Trait 有同名方法时不知道会冲突或覆盖。
3. 不理解 `super` 在 Trait 中可能指向下一个 Trait。
4. 认为“后混入先执行”适用于所有没有 `super` 的情况。
5. 没有必要时过度叠加 Trait。
6. Trait 方法依赖顺序时没有写清楚设计意图。

#### 正确示例

```scala
trait Logger {
  def log(message: String): Unit = {
    println("Logger: " + message)
  }
}

trait TimeStamp extends Logger {
  override def log(message: String): Unit = {
    super.log("[time] " + message)
  }
}

trait ShortMessage extends Logger {
  override def log(message: String): Unit = {
    super.log(message.take(10))
  }
}

class Service extends Logger with TimeStamp with ShortMessage

object Main {
  def main(args: Array[String]): Unit = {
    val s = new Service()
    s.log("abcdefghijklmnopqrstuvwxyz")
  }
}
```

运行结果可能表现为：

```text
Logger: [time] abc
```

具体结果取决于 `take` 和 `super` 链条的顺序。初学阶段重点理解：

```text
多个 Trait 不是简单并排放着，它们有线性化顺序。
最右侧混入的 Trait 通常最先参与方法调用。
```

#### 示例解释

1. `Service` 混入了 `TimeStamp` 和 `ShortMessage`。
2. 最右边的 `ShortMessage` 先处理消息。
3. 它调用 `super.log`，再进入前一个 Trait 的逻辑。
4. Trait 叠加可形成一层一层增强的效果。
5. 这是 Scala Trait 比传统接口更强大的地方。

---

## 5. 重点概念对比

| 概念 A | 概念 B | 区别 | 示例 |
|---|---|---|---|
| 重写具体方法 | 实现抽象方法 | 重写具体方法必须写 `override`；实现抽象方法可省略 | `override def f()`；`def f()` |
| `val` | `var` | `val` 只读，有 getter；`var` 可变，有 getter 和 setter | `val name`; `var age` |
| `val` 重写 `def` | `var` 重写 `def` | `val` 可实现无参 `def`；`var` 不能随意这样使用 | `def id: String`; `val id = "1"` |
| `private` | `protected` | `private` 更封闭；`protected` 允许子类访问 | `private var x`; `protected var y` |
| 抽象类 | 普通类 | 抽象类不能直接实例化，可含抽象成员 | `abstract class Animal` |
| 抽象方法 | 具体方法 | 抽象方法没有方法体，具体方法有方法体 | `def sound(): Unit`; `def sleep() = ...` |
| 抽象字段 | 具体字段 | 抽象字段没有初始值，具体字段有初始值 | `val id: String`; `val id = "001"` |
| 匿名子类对象 | 普通子类对象 | 匿名子类不单独命名，创建时直接重写 | `new Person { ... }` |
| Trait | Java 接口 | Trait 可包含具体方法和字段，比传统接口更灵活 | `trait Logger { def log(...) = ... }` |
| `extends` | `with` | `extends` 用于继承父类或第一个 Trait，`with` 用于继续混入 Trait | `class A extends B with C` |
| 单继承 | 多特质混入 | Scala 类只能继承一个父类，但可混入多个 Trait | `extends Parent with T1 with T2` |
| Trait 混入顺序 | 普通继承顺序 | 多个 Trait 叠加有线性化顺序，后混入通常优先参与 | `with T1 with T2` |

---

## 6. 代码示例整理

### 示例 1：重写父类方法

适用知识点：

```text
继承、override、方法重写、多态
```

代码：

```scala
class Animal {
  def sound(): Unit = {
    println("动物发出声音")
  }
}

class Dog extends Animal {
  override def sound(): Unit = {
    println("汪汪")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val a: Animal = new Dog()
    a.sound()
  }
}
```

运行结果：

```text
汪汪
```

代码解释：

```text
1. Animal 中定义了 sound 方法。
2. Dog 继承 Animal。
3. Dog 使用 override 重写 sound 方法。
4. a 的静态类型是 Animal，但实际对象是 Dog。
5. 调用 sound 时执行 Dog 中的版本，这体现了多态。
```

初学者提示：

```text
只要重写父类已有具体方法，就要写 override。
```

---

### 示例 2：val 实现抽象 def

适用知识点：

```text
val、def、抽象方法、重写规则
```

代码：

```scala
abstract class Person {
  def id: String
}

class Student extends Person {
  val id: String = "stu-001"
}

object Main {
  def main(args: Array[String]): Unit = {
    val p: Person = new Student()
    println(p.id)
  }
}
```

运行结果：

```text
stu-001
```

代码解释：

```text
1. Person 中的 def id: String 是无参抽象方法。
2. Student 使用 val id 提供具体实现。
3. val 会生成 getter，因此可以满足无参 def 的要求。
4. p.id 输出 Student 提供的 id。
```

初学者提示：

```text
val 可以实现无参数 def，但不能实现带括号参数的方法。
```

---

### 示例 3：protected 字段在子类中访问

适用知识点：

```text
protected、继承、子类访问
```

代码：

```scala
class Animal {
  protected var name: String = "动物"
}

class Dog extends Animal {
  def setName(newName: String): Unit = {
    name = newName
  }

  def showName(): Unit = {
    println(name)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val dog = new Dog()
    dog.setName("旺财")
    dog.showName()
  }
}
```

运行结果：

```text
旺财
```

代码解释：

```text
1. name 是 Animal 中的 protected 字段。
2. Dog 是 Animal 的子类，所以可以访问 name。
3. 外部对象不能直接 dog.name。
4. 外部通过 setName 和 showName 间接操作。
```

初学者提示：

```text
protected 常用于“父类不想公开，但允许子类使用”的场景。
```

---

### 示例 4：匿名子类对象重写方法

适用知识点：

```text
匿名子类、override、临时对象、父类方法
```

代码：

```scala
class Person {
  val name: String = "Tom"

  def greet(): Unit = {
    println("Hello, I am " + name)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person {
      override def greet(): Unit = {
        println("Hi, I am a temporary student")
      }
    }

    println(p.name)
    p.greet()
  }
}
```

运行结果：

```text
Tom
Hi, I am a temporary student
```

代码解释：

```text
1. new Person { ... } 创建了 Person 的匿名子类对象。
2. 匿名子类重写了 greet 方法。
3. p.name 来自父类 Person。
4. p.greet() 调用匿名子类重写后的版本。
```

初学者提示：

```text
匿名子类适合只使用一次的临时重写，不适合写特别复杂的业务逻辑。
```

---

### 示例 5：抽象类与子类实现

适用知识点：

```text
抽象类、抽象方法、具体方法、子类实现
```

代码：

```scala
abstract class Animal {
  def sound(): Unit

  def sleep(): Unit = {
    println("睡觉")
  }
}

class Cat extends Animal {
  def sound(): Unit = {
    println("喵喵")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val cat = new Cat()
    cat.sound()
    cat.sleep()
  }
}
```

运行结果：

```text
喵喵
睡觉
```

代码解释：

```text
1. Animal 是抽象类，不能直接 new。
2. sound 是抽象方法，没有方法体。
3. sleep 是具体方法，有方法体。
4. Cat 继承 Animal，必须实现 sound。
5. Cat 也继承了 sleep 方法。
```

初学者提示：

```text
抽象类可以有抽象成员，也可以有已经写好的具体成员。
```

---

### 示例 6：Trait 混入多个能力

适用知识点：

```text
trait、with、抽象方法、具体方法、多特质混入
```

代码：

```scala
trait Logger {
  def log(message: String): Unit = {
    println("日志：" + message)
  }
}

trait Learner {
  def learn(): Unit
}

class Assistant extends Logger with Learner {
  def learn(): Unit = {
    println("助教也在学习")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val a = new Assistant()
    a.log("开始上课")
    a.learn()
  }
}
```

运行结果：

```text
日志：开始上课
助教也在学习
```

代码解释：

```text
1. Logger 是 Trait，提供具体方法 log。
2. Learner 是 Trait，定义抽象方法 learn。
3. Assistant 混入 Logger 和 Learner。
4. Assistant 必须实现 Learner 中的 learn 方法。
5. Assistant 可以直接使用 Logger 中的 log 方法。
```

初学者提示：

```text
Trait 不只是接口，它可以带有具体实现。
```

---

## 7. 课堂案例整理

### 案例 1：动物发声的多态案例

* 案例名称：动物发声
* 对应知识点：继承、override、多态
* 案例背景：不同动物都会发出声音，但声音内容不同。
* 解决思路：
  1. 定义父类 `Animal`。
  2. 在父类中定义通用方法 `sound`。
  3. 定义子类 `Dog` 和 `Cat`。
  4. 子类分别重写 `sound`。
* Scala 代码：

```scala
class Animal {
  def sound(): Unit = println("动物声音")
}

class Dog extends Animal {
  override def sound(): Unit = println("汪汪")
}

class Cat extends Animal {
  override def sound(): Unit = println("喵喵")
}

object Main {
  def main(args: Array[String]): Unit = {
    val animals = Array(new Dog(), new Cat())

    for (a <- animals) {
      a.sound()
    }
  }
}
```

* 这个案例帮助理解什么：
  1. 子类可以重写父类方法。
  2. 同一个方法名在不同对象中表现不同。
  3. 多态可以让程序更灵活。

---

### 案例 2：临时修改问候方式的匿名子类

* 案例名称：匿名问候对象
* 对应知识点：匿名子类、方法重写、临时对象
* 案例背景：有一个 `Person` 类，但某一次测试中想临时改变 `greet` 方法，不想专门创建新子类。
* 解决思路：
  1. 使用 `new Person { ... }` 创建匿名子类对象。
  2. 在花括号中重写 `greet` 方法。
  3. 用变量接收这个对象。
* Scala 代码：

```scala
class Person {
  def greet(): Unit = {
    println("Hello")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person {
      override def greet(): Unit = {
        println("临时问候：你好，Scala！")
      }
    }

    p.greet()
  }
}
```

* 这个案例帮助理解什么：
  1. 匿名子类可以临时重写父类行为。
  2. 不需要单独命名子类。
  3. 适合一次性使用的对象。

---

### 案例 3：助教的多重身份

* 案例名称：助教既是员工又有学生能力
* 对应知识点：单继承、Trait、with、多能力组合
* 案例背景：助教可以是员工，同时也具有学习、记录日志等能力。
* 解决思路：
  1. 用类继承表示主要身份。
  2. 用 Trait 表示附加能力。
  3. 通过 `with` 混入多个特质。
* Scala 代码：

```scala
class Employee {
  def work(): Unit = {
    println("员工在工作")
  }
}

trait StudentLike {
  def study(): Unit = {
    println("具有学生学习能力")
  }
}

trait Logger {
  def log(message: String): Unit = {
    println("日志：" + message)
  }
}

class Assistant extends Employee with StudentLike with Logger

object Main {
  def main(args: Array[String]): Unit = {
    val a = new Assistant()
    a.work()
    a.study()
    a.log("助教完成任务")
  }
}
```

* 这个案例帮助理解什么：
  1. Scala 是单继承。
  2. 多种附加能力可以通过 Trait 混入。
  3. Trait 可以包含具体方法。

---

## 8. 易错点总结

### 易错点 1：重写具体方法忘记写 override

错误示例：

```scala
class Animal {
  def sound(): Unit = println("动物声音")
}

class Dog extends Animal {
  def sound(): Unit = println("汪汪")
}
```

正确写法：

```scala
class Dog extends Animal {
  override def sound(): Unit = println("汪汪")
}
```

解释：

```text
父类已有具体 sound 方法，子类重写时必须写 override。
```

---

### 易错点 2：以为 `var` 可以随意重写父类属性

错误示例：

```scala
class Parent {
  var age: Int = 10
}

class Child extends Parent {
  override var age: Int = 20
}
```

正确写法：

```scala
class Parent {
  var age: Int = 10
}

class Child extends Parent {
  age = 20
}
```

解释：

```text
具体 var 通常不能被子类重新 override。更常见做法是在子类构造过程中修改继承来的值。
```

---

### 易错点 3：抽象方法没有在子类中实现

错误示例：

```scala
abstract class Animal {
  def sound(): Unit
}

class Dog extends Animal
```

正确写法：

```scala
class Dog extends Animal {
  def sound(): Unit = {
    println("汪汪")
  }
}
```

解释：

```text
如果子类不是抽象类，就必须实现父类所有未实现的抽象方法。
```

---

### 易错点 4：直接创建抽象类对象

错误示例：

```scala
abstract class Animal {
  def sound(): Unit
}

val a = new Animal()
```

正确写法：

```scala
class Dog extends Animal {
  def sound(): Unit = println("汪汪")
}

val a = new Dog()
```

解释：

```text
抽象类不能直接实例化，必须通过具体子类创建对象。
```

---

### 易错点 5：把匿名子类写成普通代码块

错误示例：

```scala
val p = Person {
  override def greet(): Unit = println("Hi")
}
```

正确写法：

```scala
val p = new Person {
  override def greet(): Unit = println("Hi")
}
```

解释：

```text
匿名子类对象需要使用 new 父类名 { ... } 的形式。
```

---

### 易错点 6：Trait 抽象方法没有实现

错误示例：

```scala
trait Runner {
  def run(): Unit
}

class Student extends Runner
```

正确写法：

```scala
class Student extends Runner {
  def run(): Unit = {
    println("学生在跑步")
  }
}
```

解释：

```text
Trait 中的抽象方法必须由混入它的具体类实现。
```

---

### 易错点 7：多个 Trait 混入时忘记使用 with

错误示例：

```scala
class Assistant extends Employee, StudentLike, Logger
```

正确写法：

```scala
class Assistant extends Employee with StudentLike with Logger
```

解释：

```text
Scala 中一个类只能 extends 一个父类或第一个 Trait，后续 Trait 使用 with 混入。
```

---

## 9. 小测验题目

### 题目 1：子类重写父类已有具体方法时，通常必须使用哪个关键字？

A. abstract  
B. override  
C. private  
D. trait  

正确答案：B

解析：

```text
Scala 中重写父类已有具体成员时，需要使用 override 表示明确重写。
```

---

### 题目 2：下面哪个说法是正确的？

A. `var` 可以随意重写任何父类属性  
B. `val` 可以实现父类无参抽象 `def`  
C. 抽象类可以直接 new  
D. Trait 不能包含具体方法  

正确答案：B

解析：

```text
val 会生成 getter，因此可以实现父类中无参数的抽象 def。
```

---

### 题目 3：下面哪个成员更适合让子类访问，但不让普通外部对象直接访问？

A. public  
B. private  
C. protected  
D. final  

正确答案：C

解析：

```text
protected 主要用于本类和子类访问，适合继承场景中的受保护字段。
```

---

### 题目 4：抽象方法的特点是什么？

A. 必须有方法体  
B. 没有方法体，需要子类实现  
C. 一定是 private  
D. 一定返回 Unit  

正确答案：B

解析：

```text
抽象方法没有具体实现，具体子类必须提供方法体。
```

---

### 题目 5：下面哪个是匿名子类对象的正确写法？

A. `val p = Person { ... }`  
B. `val p = new Person { override def greet() = ... }`  
C. `class p = new Person`  
D. `object p extends new Person`  

正确答案：B

解析：

```text
匿名子类对象使用 new 父类名 { ... } 创建，并可在花括号中重写方法。
```

---

### 题目 6：Scala 中实现多个附加能力通常使用什么？

A. 多个父类  
B. 多个 main 方法  
C. 多个 Trait  
D. 多个 private 字段  

正确答案：C

解析：

```text
Scala 是单继承，但一个类可以混入多个 Trait。
```

---

### 题目 7：Trait 与传统 Java 接口的重要区别之一是？

A. Trait 不能有方法  
B. Trait 只能有字段  
C. Trait 可以包含具体方法实现  
D. Trait 必须用 new 创建  

正确答案：C

解析：

```text
Scala Trait 可以包含抽象方法，也可以包含具体方法。
```

---

### 题目 8：下面哪个写法表示类继承父类并混入两个 Trait？

A. `class A extends B with T1 with T2`  
B. `class A with B extends T1 extends T2`  
C. `class A implements B, T1, T2`  
D. `class A extends B, T1, T2`  

正确答案：A

解析：

```text
Scala 中使用 extends 继承父类或第一个 Trait，使用 with 继续混入其他 Trait。
```

---

## 10. 拖拽匹配素材

1. `override` —— 表示重写父类已有成员
2. `val` —— 只读属性，通常提供 getter
3. `var` —— 可变属性，通常提供 getter 和 setter
4. `protected` —— 允许本类和子类访问的成员
5. 抽象类 —— 不能直接实例化的类
6. 抽象方法 —— 没有方法体、需要子类实现的方法
7. 抽象字段 —— 没有初始值、需要子类提供值的字段
8. 匿名子类对象 —— 创建对象时直接重写父类方法
9. `trait` —— Scala 中表示特质的关键字
10. `with` —— 混入 Trait 的关键字
11. 单继承 —— 一个类只能直接继承一个父类
12. Trait 线性化 —— 多个 Trait 混入时形成的调用顺序

---

## 11. 流程动画素材

主题：子类重写父类方法并发生多态调用的流程

```text
1. 程序先定义父类 Animal，其中有 sound 方法。
2. 程序定义子类 Dog，并使用 override 重写 sound 方法。
3. 程序执行 val a: Animal = new Dog()。
4. 变量 a 的声明类型是 Animal。
5. 实际创建出来的对象是 Dog。
6. 程序执行 a.sound()。
7. Scala 根据对象的真实类型 Dog 查找 sound 方法。
8. Dog 中已经重写 sound，因此执行 Dog 的 sound。
9. 程序输出“汪汪”。
10. 这说明同一个父类引用可以指向不同子类对象，并调用不同实现。
```

主题：匿名子类对象创建流程

```text
1. 程序执行 new Person { ... }。
2. Scala 创建一个没有名字的 Person 子类。
3. 花括号中的 override 方法成为这个匿名子类的方法。
4. 程序立即创建该匿名子类的对象。
5. 对象赋值给变量 p。
6. p 可以调用父类已有属性和方法。
7. 如果某个方法被匿名子类重写，调用时执行新版本。
```

主题：Trait 混入流程

```text
1. 程序定义一个普通父类或基础类。
2. 程序定义多个 Trait，每个 Trait 表示一种能力。
3. 子类使用 extends 继承父类。
4. 子类使用 with 依次混入多个 Trait。
5. 如果 Trait 中有抽象方法，子类必须实现。
6. 如果 Trait 中有具体方法，子类可以直接使用。
7. 多个 Trait 有同名方法时，需要根据线性化顺序和 override 规则处理。
```

---

## 12. 课后练习题

### 练习 1：重写父类方法

题目：

```text
定义 Animal 类，包含 sound 方法。定义 Dog 类继承 Animal，并重写 sound 方法输出“汪汪”。
```

考查知识点：

```text
继承、override、方法重写
```

参考答案：

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

object Main {
  def main(args: Array[String]): Unit = {
    val dog = new Dog()
    dog.sound()
  }
}
```

解题思路：

```text
父类中已有具体 sound 方法，子类重写时需要写 override。
```

---

### 练习 2：用 val 实现抽象 def

题目：

```text
定义抽象类 User，其中有抽象方法 def role: String。定义 Student 类，用 val role 实现它。
```

考查知识点：

```text
抽象方法、val 实现无参 def
```

参考答案：

```scala
abstract class User {
  def role: String
}

class Student extends User {
  val role: String = "student"
}

object Main {
  def main(args: Array[String]): Unit = {
    val u: User = new Student()
    println(u.role)
  }
}
```

解题思路：

```text
role 是无参抽象 def，子类可以用同名 val 提供 getter 实现。
```

---

### 练习 3：使用 protected 字段

题目：

```text
定义 Animal 类，包含 protected name 字段。定义 Cat 子类，在子类方法中修改并输出 name。
```

考查知识点：

```text
protected、子类访问、继承
```

参考答案：

```scala
class Animal {
  protected var name: String = "动物"
}

class Cat extends Animal {
  def rename(newName: String): Unit = {
    name = newName
  }

  def show(): Unit = {
    println(name)
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val cat = new Cat()
    cat.rename("小花")
    cat.show()
  }
}
```

解题思路：

```text
protected 字段不能被普通外部直接访问，但可以在子类中访问。
```

---

### 练习 4：创建匿名子类对象

题目：

```text
定义 Person 类，包含 greet 方法。使用匿名子类对象重写 greet 方法。
```

考查知识点：

```text
匿名子类对象、override、临时重写
```

参考答案：

```scala
class Person {
  def greet(): Unit = {
    println("Hello")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val p = new Person {
      override def greet(): Unit = {
        println("你好，Scala")
      }
    }

    p.greet()
  }
}
```

解题思路：

```text
使用 new Person { ... } 创建匿名子类，并在其中重写 greet 方法。
```

---

### 练习 5：定义抽象类并实现抽象方法

题目：

```text
定义抽象类 Shape，包含抽象方法 area。定义 Rectangle 类继承 Shape，并计算矩形面积。
```

考查知识点：

```text
抽象类、抽象方法、子类实现
```

参考答案：

```scala
abstract class Shape {
  def area: Double
}

class Rectangle(val width: Double, val height: Double) extends Shape {
  val area: Double = width * height
}

object Main {
  def main(args: Array[String]): Unit = {
    val r = new Rectangle(3.0, 4.0)
    println(r.area)
  }
}
```

解题思路：

```text
Shape 中的 area 是无参抽象 def，Rectangle 可以用 val area 实现。
```

---

### 练习 6：定义并混入 Trait

题目：

```text
定义 Logger Trait，包含具体 log 方法。定义 Runner Trait，包含抽象 run 方法。定义 Student 类混入两个 Trait。
```

考查知识点：

```text
trait、with、具体方法、抽象方法
```

参考答案：

```scala
trait Logger {
  def log(message: String): Unit = {
    println("日志：" + message)
  }
}

trait Runner {
  def run(): Unit
}

class Student extends Logger with Runner {
  def run(): Unit = {
    println("学生在跑步")
  }
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = new Student()
    s.log("开始运动")
    s.run()
  }
}
```

解题思路：

```text
Logger 提供现成方法，Runner 要求子类实现 run。Student 使用 with 混入多个 Trait。
```

---

## 13. 本节课知识结构图文字版

```text
Scala 覆盖、抽象类与 Trait
├── 覆盖与重写
│   ├── override 关键字
│   ├── 重写具体方法
│   ├── 重写具体 val
│   ├── 实现抽象方法
│   └── 多态调用
├── val / var / def 规则
│   ├── val
│   │   ├── 只读属性
│   │   ├── getter
│   │   ├── 可实现无参 def
│   │   └── 可重写同名 val
│   ├── var
│   │   ├── 可变属性
│   │   ├── getter
│   │   ├── setter
│   │   └── 重写限制更严格
│   └── def
│       ├── 方法
│       ├── 无参 def
│       └── 抽象 def
├── 访问权限
│   ├── private
│   ├── protected
│   └── public 默认访问
├── 匿名子类对象
│   ├── new 父类 { ... }
│   ├── 临时重写方法
│   ├── 可访问父类成员
│   └── 适合一次性使用
├── 抽象类
│   ├── abstract class
│   ├── 不能直接实例化
│   ├── 抽象方法
│   ├── 具体方法
│   ├── 抽象字段
│   └── 子类实现
├── 继承规则
│   ├── 单继承
│   ├── 非 private 成员可继承
│   ├── final 不能重写
│   ├── 非抽象重写要 override
│   └── 抽象实现可省略 override
└── Trait 特质
    ├── trait 关键字
    ├── 可含抽象方法
    ├── 可含具体方法
    ├── 类使用 with 混入
    ├── 可混入多个 Trait
    ├── 类似接口但更强
    └── 多 Trait 有线性化顺序
```

---

## 14. 后续生成网页时可使用的数据建议

* 建议课程 ID：`scala-override-abstract-trait-20260421-1103`
* 建议课程标题：Scala 覆盖与重写、抽象类、匿名子类与 Trait 特质（2026-04-21 11:03-11:19）
* 建议章节：Scala 继承 / Scala 多态 / Scala 抽象类 / Scala 特质 Trait
* 建议标签：
  ```text
  override、val、var、def、getter、setter、protected、抽象类、抽象字段、匿名子类、Trait、with、单继承、多特质混入
  ```

* 适合放入 summary 的内容：
  ```text
  本节课讲解 Scala 中继承体系的核心规则，包括 override 重写、val 与 var 的重写差异、protected 受保护字段、val 实现抽象 def、匿名子类对象、抽象类与 Trait 特质。课程重点帮助学生理解 Scala 在继承、多态和代码复用方面与 Java 的相同点和差异。
  ```

* 适合放入 keyPoints 的内容：
  ```text
  1. 重写父类具体方法必须使用 override。
  2. val 可以实现父类无参抽象 def。
  3. var 因为包含 getter 和 setter，重写规则更严格。
  4. protected 适合让子类访问父类字段。
  5. 抽象类不能直接实例化。
  6. 子类必须实现父类抽象方法和抽象字段。
  7. 匿名子类对象适合临时重写父类方法。
  8. Scala 是单继承，但可以混入多个 Trait。
  9. Trait 可以包含抽象方法和具体方法。
  10. 多个 Trait 混入时存在执行顺序。
  ```

* 适合放入 codeExamples 的内容：
  ```text
  1. Dog 重写 Animal 的 sound 方法。
  2. val 实现抽象 def。
  3. protected 字段在子类中访问。
  4. new Person { ... } 匿名子类对象。
  5. 抽象类 Animal 与子类 Cat。
  6. Logger 和 Runner Trait 混入 Student。
  ```

* 适合放入 quiz 的内容：
  ```text
  override 关键字、val/var 重写规则、protected、抽象方法、匿名子类、Trait 与接口区别、with 语法、单继承规则。
  ```

* 适合放入 dragMatch 的内容：
  ```text
  override、val、var、protected、抽象类、抽象方法、抽象字段、匿名子类对象、trait、with、单继承、Trait 线性化。
  ```

* 适合放入 flow 的内容：
  ```text
  1. 多态调用流程：父类引用指向子类对象，调用重写方法。
  2. 匿名子类创建流程：new 父类 { override ... }。
  3. Trait 混入流程：extends 父类 with Trait1 with Trait2。
  ```

* 适合放入 exercises 的内容：
  ```text
  1. 重写父类 sound 方法。
  2. 用 val 实现抽象 def。
  3. 使用 protected 字段。
  4. 创建匿名子类对象。
  5. 定义抽象类和具体子类。
  6. 定义并混入多个 Trait。
  ```

* 适合放入 conclusion 的内容：
  ```text
  本节课是 Scala 继承体系的重要总结课，学生需要重点掌握 override、val/var 重写规则、抽象类和 Trait。后续学习高级集合、高阶函数、模式匹配和大型项目设计时，这些面向对象基础会反复出现。
  ```

---

## 15. 课堂补充说明

1. 课堂中“覆盖”和“重写”有时混用，Scala 代码层面最重要的是掌握 `override` 的使用规则。
2. 原文中说“Scala 只提供 get 不提供 set”，应理解为：Scala 属性背后有访问器机制，`val` 和 `var` 的 getter/setter 规则导致它们在重写时受到不同限制。
3. `val` 可以实现父类无参抽象 `def`，这是因为 `val` 生成的 getter 可以满足无参方法的访问形式。
4. `var` 由于涉及 setter，不能像 `val` 那样随意重写父类成员；具体规则应以编译器为准，初学者先记住不要随意 `override var`。
5. 课堂中称“结构类型对象”的部分，实际更像匿名子类对象。真正 structural type 在 Scala 中另有含义，后续如果涉及再单独学习。
6. Trait 和 Java 接口相似，但 Trait 可以有具体方法和字段，因此更适合做代码复用和能力混入。
7. 多个 Trait 的叠加顺序是 Scala 比较重要但略复杂的内容，初学阶段先记住“最右侧后混入的 Trait 通常优先参与调用”。

---

## 16. 课后总结

1. 本节课的核心是理解 Scala 继承体系中的重写规则，尤其是 `override`、`val`、`var`、`def` 之间的关系。
2. 学习 Scala 时要特别注意，属性不是简单变量，背后可能对应 getter 和 setter。
3. `val` 可以实现无参抽象 `def`，这是 Scala 中非常常见也很容易考查的知识点。
4. `var` 的重写限制更严格，课后要通过代码实验理解哪些写法可以，哪些写法不可以。
5. `protected` 用于父类向子类开放成员，比 `private` 更适合继承场景。
6. 抽象类用于定义规则，子类必须实现抽象方法和抽象字段。
7. 匿名子类对象适合临时重写父类方法，可以减少不必要的子类定义。
8. Scala 是单继承语言，但 Trait 让一个类可以拥有多种能力。
9. Trait 不只是接口，它可以包含具体实现，是 Scala 代码复用的重要基础。
10. 课后建议把“override 方法、val 实现 def、protected 字段、抽象类、Trait 混入”分别写一个最小代码例子并运行。
