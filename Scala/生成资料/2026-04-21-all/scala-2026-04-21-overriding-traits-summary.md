# Scala中覆盖、重写、抽象类与特质

## 课程信息

- **课程标题**：Scala中覆盖、重写、抽象类与特质
- **上课日期**：2026-04-21
- **上课时间**：11:03 / 11:19
- **所属章节**：第七章 Scala 覆盖、结构类型对象与特质
- **建议课程 ID**：`scala-2026-04-21-overriding-traits`
- **页面访问地址**：`lesson.html?id=scala-2026-04-21-overriding-traits`

---

## 一、课堂摘要

本节课主要讲解 Scala 中覆盖与重写、`val` 和 `var` 字段规则、受保护字段、`val` 重写抽象 `def`、结构类型对象、抽象类、抽象字段、继承规则以及特质 `trait`。

课堂前半部分继续澄清 `val` 和 `var` 字段的底层含义。`val` 字段底层可以理解为私有字段加 getter 方法，`var` 字段底层可以理解为私有字段加 getter 和 setter 方法。Scala 允许重写 getter，但不提供 setter 的重写，因此 `val` 字段可以用于重写，而 `var` 字段更多是修改或覆盖值，不能像 `val` 那样直接重写抽象 `def`。

随后老师讲解了受保护字段。Scala 中 `protected` 成员可以在当前类、子类和伴生对象中访问。伴生对象只要能访问对应类，就能访问相关受保护成员。通过访问修饰符，可以控制字段和方法的可见范围。

课堂中部重点讲解结构类型对象。结构类型对象常用于一种匿名子类场景：子类没有自己的参数、属性和额外方法，只是为了更新父类某个方法功能，就可以用“父类名 + 子类体”的方式创建匿名子类对象。这样创建出的对象既能调用父类原有属性和方法，也能调用重写后的新方法。

后半部分讲解抽象类和抽象字段。Scala 抽象类与 Java 类似，可以包含抽象方法和非抽象方法。抽象方法没有方法体，抽象字段没有初始值。子类继承抽象类时，需要先实现父类中的抽象内容，再定义自己的方法或字段。

最后，老师讲解了特质 `trait`。特质和 Java 接口相似，但比接口更强：特质不仅可以有抽象方法，也可以有具体实现。Scala 是单继承，但一个类可以混入多个特质。混入特质使用 `with` 关键字，多个特质叠加时有调用顺序，通常后混入的特质优先执行。特质是 Scala 代码复用的重要基础单元。

---

## 二、核心知识点

### 1. 覆盖与重写的区别

课堂中老师说明，在 Scala 中要区分覆盖和重写的表达。

简单理解：

- 重写：子类提供父类方法的新实现；
- 覆盖：子类用同名字段或结构替换父类中某些内容；
- 实际学习时要结合 `val`、`var`、getter、setter 理解。

---

### 2. val 字段底层结构

`val` 字段可以理解为：

- 一个私有字段；
- 一个公开或受保护的 getter 方法；
- 没有 setter。

```scala
class Person {
  val name = "Tom"
}
```

因此 `val` 更适合做只读字段，也更容易参与重写规则。

---

### 3. var 字段底层结构

`var` 字段可以理解为：

- 一个私有字段；
- 一个 getter 方法；
- 一个 setter 方法。

```scala
class Person {
  var age = 18
}
```

由于 Scala 不提供 setter 的重写，因此 `var` 字段不能像 `val` 那样直接重写某些抽象方法。

---

### 4. Scala 只提供 getter 重写

老师反复强调：Scala 中更容易重写 getter，不提供 setter 的完整重写机制。

因此：

- `val` 可以通过 getter 重写抽象 `def`；
- `var` 因为还带 setter，所以不能用同样方式重写；
- 这也是 `val` 和 `var` 重写规则不同的根源。

---

### 5. val 重写抽象 def

如果父类中有抽象方法：

```scala
abstract class Person {
  def id: Int
}
```

子类可以用同名 `val` 来实现它：

```scala
class Student extends Person {
  val id = 1001
}
```

因为 `val id` 会生成一个 getter 方法，正好可以实现抽象 `def id`。

---

### 6. var 不能同样重写抽象 def

`var` 会生成 getter 和 setter，而父类抽象 `def` 只要求 getter 形式的方法。

由于 Scala 不提供 setter 的同样重写方式，所以不能简单地用 `var` 去重写抽象 `def`。

---

### 7. protected 字段

`protected` 字段可以在当前类和子类中访问。

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

---

### 8. 伴生对象与 protected

Scala 中伴生对象和伴生类关系紧密，只要当前类可访问的内容，伴生对象通常也能参与访问。

这和前面学习的伴生对象访问私有成员思想相通。

---

### 9. 结构类型对象

结构类型对象常出现在匿名子类场景中。

```scala
class Person {
  val name = "Tom"

  def greet(): Unit = {
    println("hello")
  }
}

val p = new Person {
  override def greet(): Unit = {
    println("hi")
  }
}
```

这里 `p` 是匿名子类对象。它没有单独的类名，但重写了父类方法。

---

### 10. 结构类型对象的使用条件

老师总结了一种常见场景：

- 子类不需要单独命名；
- 子类没有自己的构造参数；
- 子类没有额外属性和方法；
- 只为了更新父类某个方法功能；
- 可以使用匿名子类创建结构类型对象。

---

### 11. 结构类型对象可调用父类成员

结构类型对象可以调用父类原有属性和方法，也可以调用重写后的方法。

```scala
p.name
p.greet()
```

如果要调用父类原方法，需要使用 `super` 思想。

---

### 12. 抽象类

抽象类用 `abstract class` 定义，不能直接实例化。

```scala
abstract class Animal {
  def sound(): Unit
}
```

它可以包含抽象方法，也可以包含非抽象方法。

---

### 13. 抽象方法

没有方法体的方法是抽象方法。

```scala
def sound(): Unit
```

子类必须提供具体实现。

---

### 14. 抽象字段

没有初始值的字段可以理解为抽象字段。

```scala
abstract class Person {
  val name: String
}
```

具体子类必须提供具体字段。

---

### 15. 子类先实现抽象内容

子类继承抽象类时，需要先实现父类中的抽象方法和抽象字段，再定义自己的方法。

这是因为构造和初始化有先后顺序。

---

### 16. 继承规则回顾

父类非私有、非静态成员可以继承。

不能继承或不能重写的情况：

- `private` 成员不能直接继承访问；
- `final` 类不能被继承；
- `final` 方法不能被重写；
- Scala 类只能继承一个父类。

---

### 17. Scala 单继承

Scala 和 Java 一样，类只能继承一个父类。

```scala
class Dog extends Animal
```

不能同时继承多个 class。

---

### 18. 特质 trait

特质使用 `trait` 定义。

```scala
trait Logger {
  def log(msg: String): Unit
}
```

特质可以看作比 Java 接口更强的结构。

---

### 19. 特质可以包含抽象和具体方法

```scala
trait Logger {
  def log(msg: String): Unit

  def info(msg: String): Unit = {
    println("INFO: " + msg)
  }
}
```

这里：

- `log` 是抽象方法；
- `info` 是具体方法。

---

### 20. 类混入特质

类可以通过 `with` 混入特质。

```scala
class ConsoleLogger extends Logger {
  def log(msg: String): Unit = {
    println(msg)
  }
}
```

如果已经继承了一个父类，还可以继续 `with` 多个特质。

```scala
class UserService extends Service with Logger with Serializable
```

---

### 21. 特质与接口的区别

特质和接口类似，但特质可以提供方法实现，并且可以融入类体中。

老师用“助教既是老师又有学生特质”解释：特质不是另一个父类，而是混入到类中的能力。

---

### 22. 多个特质的顺序

当一个类混入多个特质时，调用顺序与混入顺序有关。

课堂中老师提到“后进先执行”，可以先理解为右边后混入的特质优先参与调用链。

---

### 23. 特质是代码复用基础单元

特质可以把可复用功能抽出来，让多个类共享。

常见用途：

- 日志功能；
- 权限检查；
- 序列化；
- 数据校验；
- 通用工具能力。

---

### 24. 重写特质抽象方法可省略 override

如果特质中是抽象方法，类实现时可以不写 `override`。

```scala
trait Logger {
  def log(msg: String): Unit
}

class ConsoleLogger extends Logger {
  def log(msg: String): Unit = {
    println(msg)
  }
}
```

因为 `log` 是抽象方法，所以 `override` 可以省略。

---

## 三、代码示例

### 示例 1：val 重写抽象 def

```scala
abstract class Person {
  def id: Int
}

class Student extends Person {
  val id = 1001
}

val s = new Student
println(s.id)
```

解释：`val id` 底层有 getter，可以实现抽象 `def id`。

---

### 示例 2：protected 字段

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

解释：`protected` 字段可以在子类中访问。

---

### 示例 3：结构类型对象

```scala
class Person {
  val name = "Tom"

  def greet(): Unit = {
    println("hello")
  }
}

val p = new Person {
  override def greet(): Unit = {
    println("hi")
  }
}

println(p.name)
p.greet()
```

解释：`p` 是匿名子类对象，可以访问父类属性，也可以调用重写后的方法。

---

### 示例 4：抽象类和抽象字段

```scala
abstract class Animal {
  val name: String
  def sound(): Unit
}

class Dog extends Animal {
  val name = "dog"

  def sound(): Unit = {
    println("wang")
  }
}
```

解释：子类必须实现抽象字段和抽象方法。

---

### 示例 5：定义特质

```scala
trait Logger {
  def log(msg: String): Unit

  def info(msg: String): Unit = {
    println("INFO: " + msg)
  }
}
```

解释：特质可以同时包含抽象方法和具体方法。

---

### 示例 6：类混入特质

```scala
trait Logger {
  def log(msg: String): Unit
}

class ConsoleLogger extends Logger {
  def log(msg: String): Unit = {
    println(msg)
  }
}

val logger = new ConsoleLogger
logger.log("hello")
```

解释：类实现特质中的抽象方法。

---

### 示例 7：继承父类并混入多个特质

```scala
class Service

trait Logger {
  def log(msg: String): Unit = println(msg)
}

trait Checker {
  def check(): Unit = println("check")
}

class UserService extends Service with Logger with Checker
```

解释：Scala 只能继承一个父类，但可以混入多个特质。

---

## 四、小测验

### 题目 1

`val` 字段底层主要提供什么？

A. getter  
B. setter only  
C. 数据库  
D. 图片  

**正确答案**：A  
**解析**：`val` 是只读字段，底层主要提供 getter。

---

### 题目 2

`var` 字段底层通常提供什么？

A. getter 和 setter  
B. 只有图片  
C. 只有 class  
D. 只能删除  

**正确答案**：A  
**解析**：`var` 可读可写，底层有 getter 和 setter。

---

### 题目 3

`val` 为什么可以重写抽象 `def`？

A. 因为 val 会生成 getter，可以实现同名抽象方法  
B. 因为 val 是图片  
C. 因为 val 不能使用  
D. 因为 val 一定是数组  

**正确答案**：A  
**解析**：`val id` 会生成 getter 方法，可以实现抽象 `def id`。

---

### 题目 4

Scala 中定义特质使用哪个关键字？

A. trait  
B. package  
C. yield  
D. import  

**正确答案**：A  
**解析**：Scala 使用 `trait` 定义特质。

---

### 题目 5

Scala 中一个类可以继承几个父类？

A. 一个  
B. 无限多个 class  
C. 不能继承  
D. 只能继承图片  

**正确答案**：A  
**解析**：Scala 是单继承，一个类只能继承一个父类。

---

### 题目 6

Scala 中一个类可以混入几个特质？

A. 可以混入多个  
B. 只能一个  
C. 不能混入  
D. 只能混入 private  

**正确答案**：A  
**解析**：Scala 类可以混入任意数量的特质。

---

### 题目 7

特质和 Java 接口相比，Scala 特质更强在哪里？

A. 可以有具体方法实现  
B. 只能写注释  
C. 不能被使用  
D. 只能保存数字  

**正确答案**：A  
**解析**：Scala 特质既可以有抽象方法，也可以有具体方法。

---

## 五、拖拽匹配内容

| 左侧概念 | 右侧解释 |
|---|---|
| val | 只读字段，底层有 getter |
| var | 可读可写字段，底层有 getter 和 setter |
| getter | 取值方法 |
| setter | 改值方法 |
| protected | 当前类和子类可访问 |
| 结构类型对象 | 匿名子类对象 |
| abstract class | 抽象类 |
| 抽象字段 | 没有初始值的字段 |
| trait | 特质 |
| with | 混入特质 |
| 单继承 | 只能继承一个父类 |
| 多特质 | 可以混入多个能力 |

---

## 六、流程动画建议

### 流程 1：val 重写抽象 def

```text
父类定义抽象 def id
↓
子类定义 val id
↓
val 底层生成 getter
↓
getter 方法名与 def id 对应
↓
子类完成抽象方法实现
↓
对象可以访问 id
```

### 流程 2：结构类型对象创建过程

```text
已有一个父类 Person
↓
不单独定义子类名
↓
使用 new Person { ... }
↓
在大括号中重写父类方法
↓
生成匿名子类对象
↓
对象可调用父类成员和重写方法
```

### 流程 3：特质混入过程

```text
定义一个 trait
↓
trait 中写抽象方法或具体方法
↓
类使用 extends / with 混入特质
↓
类实现抽象方法
↓
对象获得特质中的能力
↓
多个特质按顺序叠加
```

---

## 七、练习题

### 练习 1

写一个 `val` 重写抽象 `def` 的例子。

参考答案：

```scala
abstract class Person {
  def id: Int
}

class Student extends Person {
  val id = 1001
}
```

---

### 练习 2

写一个包含 `protected` 字段的父类，并在子类中访问它。

参考答案：

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

---

### 练习 3

创建一个结构类型对象，重写父类方法。

参考答案：

```scala
class Person {
  val name = "Tom"

  def greet(): Unit = {
    println("hello")
  }
}

val p = new Person {
  override def greet(): Unit = {
    println("hi")
  }
}
```

---

### 练习 4

定义一个抽象类 `Animal`，包含抽象字段和抽象方法，并写子类实现。

参考答案：

```scala
abstract class Animal {
  val name: String
  def sound(): Unit
}

class Dog extends Animal {
  val name = "dog"

  def sound(): Unit = {
    println("wang")
  }
}
```

---

### 练习 5

定义一个特质 `Logger`，并写类实现它。

参考答案：

```scala
trait Logger {
  def log(msg: String): Unit
}

class ConsoleLogger extends Logger {
  def log(msg: String): Unit = {
    println(msg)
  }
}
```

---

### 练习 6

写一个类继承父类并混入两个特质。

参考答案：

```scala
class Service

trait Logger {
  def log(msg: String): Unit = println(msg)
}

trait Checker {
  def check(): Unit = println("check")
}

class UserService extends Service with Logger with Checker
```

---

## 八、课后总结

1. `val` 字段底层可以理解为私有字段加 getter。
2. `var` 字段底层可以理解为私有字段加 getter 和 setter。
3. Scala 更容易重写 getter，不提供 setter 的完整重写机制。
4. `val` 可以用来重写抽象 `def`。
5. `var` 因为涉及 setter，不能按同样方式重写抽象 `def`。
6. `protected` 成员可以在当前类、子类和伴生对象相关范围内访问。
7. 结构类型对象本质上是匿名子类对象。
8. 当子类只为了更新父类某个方法时，可以使用结构类型对象。
9. 抽象类可以包含抽象方法和非抽象方法。
10. 抽象字段没有初始值，具体子类必须提供字段。
11. Scala 类只能继承一个父类。
12. Scala 可以通过特质实现多能力混入。
13. 特质使用 `trait` 定义，类通过 `with` 混入。
14. 特质可以有抽象方法，也可以有具体方法。
15. 多个特质叠加时有调用顺序，通常后混入的特质优先执行。
16. 特质是 Scala 代码复用的重要基础单元。

---

## 九、建议加入网站的标签

```text
覆盖
重写
val
var
getter
setter
protected
结构类型对象
匿名子类
抽象类
抽象方法
抽象字段
继承规则
单继承
trait
特质
with
多特质
代码复用
Scala与Java对比
```
