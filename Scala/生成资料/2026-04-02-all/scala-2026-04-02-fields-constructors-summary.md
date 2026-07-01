# Scala与Java的编程知识讲解

## 课程信息

- **课程标题**：Scala与Java的编程知识讲解
- **上课日期**：2026-04-02
- **上课时间**：16:07
- **所属章节**：第六章 Scala 字段、取值器与构造器
- **建议课程 ID**：`scala-2026-04-02-fields-constructors`
- **页面访问地址**：`lesson.html?id=scala-2026-04-02-fields-constructors`

---

## 一、课堂摘要

本节课主要讲解 Scala 与 Java 在类、对象、方法、字段、取值器、改值器和构造器方面的区别。

课堂首先比较了 Java 和 Scala 中类与对象的关系。Java 中程序入口通常放在测试类的 `main` 方法里，而 Scala 中 `object` 常常作为应用程序入口点。Scala 的对象可以独立存在，可以包含属性和方法，也可以承担程序入口功能。

随后，老师讲解了简单类和无参方法。Scala 中无参方法后面通常不写括号，方法默认是公有的。字段在声明时通常需要初始化。Scala 中没有 Java 那样的自加自减运算符 `++` 和 `--`，如果想实现类似功能，需要自己定义方法完成加一或减一。

本节课重点讲解了方法调用规则、改值器和取值器。Scala 中如果方法带参数，调用时需要传入对应参数；如果方法无参数，通常可以省略括号。对于对象字段，Scala 表面上可以直接写 `friend.age`，但底层实际上会通过自动生成的取值器和改值器访问字段。

课堂后半部分讲解了字段特性。Scala 会自动为字段生成 getter 和 setter。`var` 字段通常既有取值器也有改值器；`val` 常量字段只有取值器，没有改值器；如果字段是 `private`，对应的 getter 和 setter 也会受到私有访问限制。必要时可以重写 getter 和 setter，比如限制年龄只能增大不能减小。

最后，老师讲解了主构造器和辅助构造器。Scala 中类名后面的参数列表就是主构造器参数。与 Java 中需要显式写属性、构造方法、getter、setter 相比，Scala 可以通过类参数更简洁地完成这些工作。辅助构造器使用 `this`，第一行必须调用主构造器或其他辅助构造器，类似 Java 中构造器链或子类构造器第一行调用父类构造器的思想。

---

## 二、核心知识点

### 1. 一个 Scala 文件可以有多个类和对象

Scala 一个源文件中可以包含多个类，也可以包含多个对象。

这与 Java 不完全一样。Java 中一个 public 类通常对应一个文件，而 Scala 的文件组织更灵活。

---

### 2. Java 与 Scala 程序入口区别

Java 中入口方法通常写在测试类中：

```java
public static void main(String[] args) {
    // 入口代码
}
```

Scala 中入口通常写在 `object` 中：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    println("Hello")
  }
}
```

`object` 可以作为应用程序入口点。

---

### 3. 对象可以独立存在

Scala 中 `object` 可以独立存在，包含属性和方法。

```scala
object AppConfig {
  val name = "demo"
  def show(): Unit = println(name)
}
```

不需要通过 `new` 创建。

---

### 4. 简单类和无参方法

无参方法没有参数列表，调用时通常可以省略括号。

```scala
class Counter {
  private var value = 0

  def current = value
}
```

调用：

```scala
val c = new Counter
println(c.current)
```

---

### 5. 字段需要初始化

Scala 中字段声明时通常需要初始化。

```scala
class Person {
  var age = 0
  val name = "Tom"
}
```

这样编译器可以推断字段类型。

---

### 6. 方法默认公有

Scala 中方法如果没有写修饰符，通常可以理解为公有。

```scala
class Person {
  def speak(): Unit = println("hello")
}
```

对象可以直接调用：

```scala
val p = new Person
p.speak()
```

---

### 7. Scala 没有自加自减运算符

Scala 中没有 Java 的 `++` 和 `--`。

Java：

```java
i++;
```

Scala 通常写：

```scala
i += 1
```

如果需要封装加一行为，可以自己定义方法。

---

### 8. 自定义 increment 方法

```scala
class Counter {
  private var value = 0

  def increment(): Unit = {
    value += 1
  }

  def current = value
}
```

`increment` 用于让计数器加一。

---

### 9. 有参方法调用

如果方法有参数，调用时必须传入对应参数。

```scala
class Point {
  var x = 0
  var y = 0

  def move(dx: Int, dy: Int): Unit = {
    x += dx
    y += dy
  }
}

val p = new Point
p.move(1, 2)
```

---

### 10. 无参方法调用

无参方法可以不加括号。

```scala
def current = value
```

调用时：

```scala
c.current
```

这种写法常用于不改变对象状态的取值动作。

---

### 11. 取值器 getter

取值器用于读取字段值。

```scala
class Person {
  private var privateAge = 0

  def age = privateAge
}
```

`age` 就像字段一样使用，但本质上是方法。

---

### 12. 改值器 setter

改值器用于修改字段值。

```scala
class Person {
  private var privateAge = 0

  def age = privateAge

  def age_=(newValue: Int): Unit = {
    if (newValue > privateAge) {
      privateAge = newValue
    }
  }
}
```

这里通过 `age_=` 控制赋值逻辑，比如年龄只能增大。

---

### 13. 自动生成 getter 和 setter

Scala 对字段会自动生成访问方法。

```scala
class Person {
  var age = 0
}
```

表面上调用：

```scala
p.age
p.age = 20
```

底层会通过取值器和改值器完成。

---

### 14. var 字段

`var` 字段通常既有 getter，也有 setter。

```scala
var age = 0
```

可以读取，也可以修改。

---

### 15. val 字段

`val` 字段是常量，通常只有 getter，没有 setter。

```scala
val name = "Tom"
```

可以读取，但不能重新赋值。

---

### 16. private 字段

如果字段是私有的，自动生成的 getter 和 setter 也会受到访问限制。

```scala
class Person {
  private var age = 0
}
```

外部不能直接访问私有字段。

---

### 17. 主构造器

Scala 中类名后面的参数列表就是主构造器。

```scala
class Person(val name: String, var age: Int)
```

这行代码就完成了很多 Java 中需要多行才能完成的内容。

---

### 18. 主构造器参数

主构造器参数直接放在类名后面。

```scala
class Person(val name: String, var age: Int)
```

这里：

- `name` 是只读字段；
- `age` 是可变字段；
- 编译器会自动生成相应访问方法。

---

### 19. 辅助构造器

辅助构造器使用 `this` 定义。

```scala
class Person(val name: String, var age: Int) {
  def this(name: String) = {
    this(name, 0)
  }
}
```

辅助构造器用于提供更多创建对象的方式。

---

### 20. 辅助构造器第一行规则

Scala 辅助构造器第一行必须调用主构造器或其他辅助构造器。

```scala
def this(name: String) = {
  this(name, 0)
}
```

这类似 Java 中构造器链的思想。

---

### 21. Scala 比 Java 更简洁

Java 中通常需要写：

- 字段；
- 构造方法；
- getter；
- setter。

Scala 可以写成：

```scala
class Person(val name: String, var age: Int)
```

一行就能完成很多工作。

---

### 22. AI 编程提醒

课堂中老师提到 AI 插件和自动生成代码越来越强，但仍然需要程序员先理解代码逻辑。AI 可以提高效率，但不能代替基础学习。

---

## 三、代码示例

### 示例 1：Scala 程序入口

```scala
object Main {
  def main(args: Array[String]): Unit = {
    println("Hello Scala")
  }
}
```

解释：Scala 程序入口通常写在 `object` 中。

---

### 示例 2：无参方法

```scala
class Counter {
  private var value = 0

  def current = value
}

val c = new Counter
println(c.current)
```

解释：`current` 没有参数，调用时可以不写括号。

---

### 示例 3：自定义加一方法

```scala
class Counter {
  private var value = 0

  def increment(): Unit = {
    value += 1
  }

  def current = value
}
```

解释：Scala 没有 `++`，可以自己定义 `increment` 方法。

---

### 示例 4：自定义 getter 和 setter

```scala
class Person {
  private var privateAge = 0

  def age = privateAge

  def age_=(newValue: Int): Unit = {
    if (newValue > privateAge) {
      privateAge = newValue
    }
  }
}
```

解释：通过自定义 setter，可以限制年龄只能增大。

---

### 示例 5：主构造器

```scala
class Person(val name: String, var age: Int)

val p = new Person("Tom", 20)
println(p.name)
println(p.age)
```

解释：`name` 是只读字段，`age` 是可变字段。

---

### 示例 6：辅助构造器

```scala
class Person(val name: String, var age: Int) {
  def this(name: String) = {
    this(name, 0)
  }
}

val p1 = new Person("Tom", 20)
val p2 = new Person("Jerry")
```

解释：辅助构造器提供了只传 name 的对象创建方式。

---

### 示例 7：val 只有 getter

```scala
class Student {
  val school = "Scala School"
}

val s = new Student
println(s.school)
```

解释：`school` 是 `val`，可以读取，不能重新赋值。

---

## 四、小测验

### 题目 1

Scala 程序入口通常写在哪里？

A. object 中  
B. 图片中  
C. 数据库中  
D. 压缩包中  

**正确答案**：A  
**解析**：Scala 中 `object` 常作为应用程序入口点。

---

### 题目 2

Scala 中是否有 Java 那样的 `++` 自增运算符？

A. 没有  
B. 有，完全一样  
C. 只能在图片中使用  
D. 只能用于字符串  

**正确答案**：A  
**解析**：Scala 没有 `++` 和 `--`，通常使用 `+= 1` 或自定义方法。

---

### 题目 3

`val` 字段通常有什么访问方法？

A. 只有 getter  
B. 只有 setter  
C. getter 和 setter 都没有  
D. 只能删除  

**正确答案**：A  
**解析**：`val` 是不可变值，通常只有取值器，没有改值器。

---

### 题目 4

`var` 字段通常有什么访问方法？

A. getter 和 setter  
B. 只有 getter  
C. 只有 setter  
D. 没有任何方法  

**正确答案**：A  
**解析**：`var` 可读可写，通常自动生成 getter 和 setter。

---

### 题目 5

Scala 主构造器参数放在哪里？

A. 类名后面  
B. 文件最后  
C. 注释里  
D. import 后面  

**正确答案**：A  
**解析**：Scala 类名后面的参数列表就是主构造器参数。

---

### 题目 6

辅助构造器第一行必须做什么？

A. 调用主构造器或其他辅助构造器  
B. 删除对象  
C. 输出图片  
D. 创建数据库  

**正确答案**：A  
**解析**：Scala 辅助构造器第一行必须调用已有构造器。

---

## 五、拖拽匹配内容

| 左侧概念 | 右侧解释 |
|---|---|
| object | Scala 应用程序入口常用结构 |
| main | 程序入口方法 |
| 无参方法 | 没有参数的方法 |
| increment | 自定义加一方法 |
| getter | 取值器 |
| setter | 改值器 |
| var | 自动生成 getter 和 setter |
| val | 通常只有 getter |
| private | 私有访问权限 |
| 主构造器 | 类名后面的参数列表 |
| 辅助构造器 | 使用 this 定义 |
| this | 当前对象或构造器调用 |

---

## 六、流程动画建议

### 流程 1：字段访问过程

```text
对象调用字段 age
↓
表面上写 p.age
↓
底层调用 getter
↓
返回字段值
↓
如果写 p.age = 20
↓
底层调用 setter
↓
更新字段值
```

### 流程 2：辅助构造器创建对象

```text
调用 new Person("Jerry")
↓
进入辅助构造器 this(name)
↓
辅助构造器第一行调用 this(name, 0)
↓
回到主构造器
↓
初始化 name 和 age
↓
对象创建完成
```

---

## 七、练习题

### 练习 1

写一个 `Counter` 类，包含私有变量 `value` 和无参方法 `current`。

参考答案：

```scala
class Counter {
  private var value = 0

  def current = value
}
```

---

### 练习 2

给 `Counter` 添加 `increment` 方法，让 `value` 加 1。

参考答案：

```scala
class Counter {
  private var value = 0

  def increment(): Unit = {
    value += 1
  }

  def current = value
}
```

---

### 练习 3

写一个 `Person` 类，使用主构造器包含 `name` 和 `age`。

参考答案：

```scala
class Person(val name: String, var age: Int)
```

---

### 练习 4

给 `Person` 添加辅助构造器，只传入 `name`，年龄默认为 0。

参考答案：

```scala
class Person(val name: String, var age: Int) {
  def this(name: String) = {
    this(name, 0)
  }
}
```

---

### 练习 5

写一个自定义 setter，要求年龄只能变大，不能变小。

参考答案：

```scala
class Person {
  private var privateAge = 0

  def age = privateAge

  def age_=(newValue: Int): Unit = {
    if (newValue > privateAge) {
      privateAge = newValue
    }
  }
}
```

---

## 八、课后总结

1. Scala 一个源文件可以包含多个类和对象。
2. Scala 中 `object` 常作为程序入口点。
3. 无参方法调用时通常可以省略括号。
4. Scala 没有 Java 中的 `++` 和 `--`。
5. 有参数的方法调用时必须对应传参。
6. Scala 字段会自动生成 getter 和 setter。
7. `var` 字段通常有 getter 和 setter。
8. `val` 字段通常只有 getter，没有 setter。
9. 私有字段的访问方法也会受到私有权限限制。
10. 可以重写 getter 和 setter 来控制字段访问逻辑。
11. 类名后的参数列表就是主构造器。
12. 辅助构造器使用 `this`，第一行必须调用已有构造器。
13. Scala 可以用一行类参数完成 Java 中字段、构造器、getter、setter 的大量代码。
14. AI 可以提高编程效率，但前提是自己理解代码和程序结构。
---

## 九、建议加入网站的标签

```text
object
main
无参方法
自增自减
increment
getter
setter
取值器
改值器
var字段
val字段
private字段
主构造器
辅助构造器
this
Scala与Java对比
AI编程
```
