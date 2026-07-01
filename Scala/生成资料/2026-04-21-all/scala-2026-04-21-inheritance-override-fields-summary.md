# Scala 继承与 Java 继承的对比

## 课程信息

- **课程标题**：Scala 继承与 Java 继承的对比
- **上课日期**：2026-04-21
- **上课时间**：10:05
- **所属章节**：第六章 Scala 继承、重写与字段覆盖
- **建议课程 ID**：`scala-2026-04-21-inheritance-override-fields`
- **页面访问地址**：`lesson.html?id=scala-2026-04-21-inheritance-override-fields`

---

## 一、课堂摘要

本节课主要对比 Scala 与 Java 中的继承机制，重点讲解主构造器向父类传参、`override` 的使用规则、继承的共性、`final`、`protected`、访问权限、字段重写以及 `val` / `var` 字段覆盖规则。

老师首先强调，在 Scala 中，只有子类的主构造器可以向父类的主构造器传递参数。辅助构造器是基于主构造器产生的，因此不能直接绕过主构造器向父类传参。这是 Scala 继承中需要重点记忆的语法点。

随后，课堂讲解了 `override` 的使用规则。Scala 中，如果子类重写父类的非抽象方法或非抽象字段，必须写 `override`；如果实现的是父类中的抽象方法，`override` 可以省略。这个规则和 Java 中 `@Override` 的使用习惯不同，是考试中容易考的概念。

课堂中部总结了 Scala 与 Java 在继承上的共同点：子类可以继承父类的非私有、非静态成员；子类可以增加自己的成员；子类可以重写父类成员；`final` 修饰的类不能被继承，`final` 修饰的方法不能被重写；子类访问权限不能比父类更小。

后半部分重点讲解字段重写。Scala 中子类可以用同名 `val` 字段重写父类的 `val` 字段，并且必须写 `override`。关于 `var` 字段，课堂中老师提醒教材或资料可能有不准确之处，需要通过实验验证。整体理解是：字段底层会生成访问方法，`val` 更偏只读，`var` 还涉及 setter，因此重写规则比普通方法更复杂。

---

## 二、核心知识点

### 1. Scala 中继承使用 extends

Scala 和 Java 一样，使用 `extends` 表示继承。

```scala
class Point(val x: Int, val y: Int)

class Location(override val x: Int, override val y: Int, val name: String)
  extends Point(x, y)
```

这里：

- `Point` 是父类 / 超类；
- `Location` 是子类；
- `Location` 通过 `extends Point(x, y)` 继承父类。

---

### 2. 只有主构造器能向父类传参

Scala 中，父类构造器参数必须由子类主构造器传递。

```scala
class Person(val name: String)

class Student(name: String, val id: Int) extends Person(name)
```

解释：

- `Student` 的主构造器接收 `name`；
- `extends Person(name)` 把 `name` 传给父类主构造器；
- 辅助构造器不能直接绕过主构造器向父类传参。

---

### 3. 辅助构造器基于主构造器

辅助构造器必须先调用本类的主构造器或其他辅助构造器。

```scala
class Student(name: String, val id: Int) extends Person(name) {
  def this(name: String) = {
    this(name, 0)
  }
}
```

因此，真正与父类构造器发生参数传递关系的是主构造器。

---

### 4. 重写抽象方法时 override 可省略

如果父类中方法没有方法体，是抽象方法，子类实现它时可以省略 `override`。

```scala
abstract class Animal {
  def sound(): Unit
}

class Dog extends Animal {
  def sound(): Unit = {
    println("bark")
  }
}
```

这里 `sound` 是抽象方法，`override` 可以不写。

---

### 5. 重写非抽象方法必须写 override

如果父类方法已经有方法体，子类重写时必须写 `override`。

```scala
class Animal {
  def sound(): Unit = {
    println("animal sound")
  }
}

class Dog extends Animal {
  override def sound(): Unit = {
    println("bark")
  }
}
```

这是 Scala 继承中非常重要的规则。

---

### 6. Scala 与 Java 继承的共同点

Scala 和 Java 在继承思想上有很多相同点：

1. 子类继承父类非私有、非静态成员。
2. 子类可以添加自己的成员。
3. 子类可以重写父类方法。
4. `final` 修饰的类不能被继承。
5. 子类访问权限不能小于父类访问权限。

这些是面向对象继承的共同规则。

---

### 7. 非私有成员可继承

父类中 `private` 成员不能被子类直接继承和访问。

```scala
class Person {
  private val secret = "private"
  val name = "Tom"
}

class Student extends Person {
  def show(): Unit = {
    println(name)
    // println(secret) // 不可访问
  }
}
```

---

### 8. 非静态成员可继承

Scala 中类似 Java 静态成员的内容通常放在 `object` 中，而不是普通 `class` 中。

因此，继承时主要继承 class 中的非静态成员。

---

### 9. 子类可以添加自己的成员

子类不仅可以继承父类已有成员，还可以添加自己的属性和方法。

```scala
class Person {
  val name = "Tom"
}

class Student extends Person {
  val id = 1001
}
```

`Student` 同时拥有 `name` 和 `id`。

---

### 10. final 修饰类

如果类被 `final` 修饰，就不能被继承。

```scala
final class Person

// class Student extends Person // 错误
```

`final` 表示“最终的”，不允许继续扩展。

---

### 11. final 修饰方法或字段

`final` 修饰的方法不能被重写，`final` 修饰的字段不能被覆盖。

```scala
class Person {
  final def show(): Unit = {
    println("final method")
  }
}
```

子类不能重写 `show`。

---

### 12. protected 修饰成员

`protected` 成员可以在当前类和子类中访问。

```scala
class Person {
  protected val name = "Tom"
}

class Student extends Person {
  def show(): Unit = {
    println(name)
  }
}
```

这与 Java 中 protected 思想接近。

---

### 13. 子类访问权限不能缩小

如果父类方法是公有的，子类重写时不能把它改成更小权限。

例如不能把父类的 public 方法重写成 private。

这保证了子类对象仍然可以被当成父类对象使用。

---

### 14. Override 与 Overload 区别

`override` 是重写，要求方法头基本一致，方法体不同。

`overload` 是重载，要求方法名相同，但参数列表不同。

示例：

```scala
class Demo {
  def test(x: Int): Unit = println(x)
  def test(x: String): Unit = println(x)
}
```

这里是重载，不是重写。

---

### 15. val 字段重写

子类可以用同名 `val` 字段重写父类的 `val` 字段。

```scala
class Person {
  val name = "Tom"
}

class Student extends Person {
  override val name = "Peter"
}
```

因为重写的是非抽象字段，所以必须写 `override`。

---

### 16. var 字段规则较复杂

`var` 字段底层会产生 getter 和 setter，而 Scala 对 setter 的重写支持有限，因此 `var` 字段的重写规则比 `val` 复杂。

学习时可以先记住：

- `val` 更适合重写只读字段；
- `var` 涉及 getter 和 setter；
- 遇到 `var` 字段重写时，最好通过实验验证编译器行为。

---

### 17. 重写必须同名

重写父类方法或字段时，子类成员必须与父类成员同名。

如果方法名不同，就不是重写，而是子类新增成员。

---

### 18. 主构造器、字段重写和 override 三个重点

老师反复强调 Scala 继承中有几个必须背的点：

1. 只有子类主构造器能向父类主构造器传参。
2. 子类同名 `val` 字段可以重写父类同名 `val` 字段。
3. 重写非抽象字段或方法时，`override` 不能省略。

---

## 三、代码示例

### 示例 1：子类主构造器向父类传参

```scala
class Person(val name: String)

class Student(name: String, val id: Int) extends Person(name)

val s = new Student("Tom", 1001)
println(s.name)
println(s.id)
```

解释：`Student` 的主构造器把 `name` 传给父类 `Person`。

---

### 示例 2：辅助构造器调用主构造器

```scala
class Person(val name: String)

class Student(name: String, val id: Int) extends Person(name) {
  def this(name: String) = {
    this(name, 0)
  }
}
```

解释：辅助构造器先调用本类主构造器，再由主构造器完成父类传参。

---

### 示例 3：重写非抽象方法

```scala
class Animal {
  def sound(): Unit = {
    println("animal sound")
  }
}

class Dog extends Animal {
  override def sound(): Unit = {
    println("bark")
  }
}
```

解释：父类方法已有方法体，子类重写时必须写 `override`。

---

### 示例 4：实现抽象方法

```scala
abstract class Animal {
  def sound(): Unit
}

class Dog extends Animal {
  def sound(): Unit = {
    println("bark")
  }
}
```

解释：父类方法是抽象方法，子类实现时可以省略 `override`。

---

### 示例 5：子类添加自己的成员

```scala
class Person {
  val name = "Tom"
}

class Student extends Person {
  val id = 1001

  def show(): Unit = {
    println(name + "," + id)
  }
}
```

解释：子类继承 `name`，同时添加自己的 `id` 和 `show`。

---

### 示例 6：val 字段重写

```scala
class Person {
  val name = "Tom"
}

class Student extends Person {
  override val name = "Peter"
}

val s = new Student
println(s.name)
```

解释：子类用同名 `val` 字段重写父类字段，必须写 `override`。

---

## 四、小测验

### 题目 1

Scala 中继承使用哪个关键字？

A. extends  
B. import  
C. package  
D. match  

**正确答案**：A  
**解析**：Scala 使用 `extends` 表示继承。

---

### 题目 2

Scala 中谁能直接向父类主构造器传参？

A. 子类主构造器  
B. 任意辅助构造器  
C. 普通方法  
D. 注释  

**正确答案**：A  
**解析**：只有子类主构造器能向父类主构造器传参。

---

### 题目 3

重写父类非抽象方法时，Scala 中必须写什么？

A. override  
B. new  
C. private  
D. yield  

**正确答案**：A  
**解析**：父类方法已有方法体时，子类重写必须写 `override`。

---

### 题目 4

实现父类抽象方法时，`override` 是否一定必须写？

A. 可以省略  
B. 一定必须写  
C. 不能写方法体  
D. 只能写 final  

**正确答案**：A  
**解析**：重写抽象方法时，`override` 可以省略。

---

### 题目 5

`final class Person` 表示什么？

A. Person 不能被继承  
B. Person 必须被继承  
C. Person 是数组  
D. Person 是 Map  

**正确答案**：A  
**解析**：final 修饰的类不能被继承。

---

### 题目 6

子类访问权限和父类相比应该怎样？

A. 不能更小  
B. 必须更小  
C. 必须 private  
D. 没有限制且越小越好  

**正确答案**：A  
**解析**：子类重写时访问权限不能比父类更小。

---

## 五、拖拽匹配内容

| 左侧概念 | 右侧解释 |
|---|---|
| extends | 继承关键字 |
| superclass | 父类 / 超类 |
| subclass | 子类 |
| override | 重写标记 |
| overload | 重载 |
| final class | 不能被继承的类 |
| final method | 不能被重写的方法 |
| protected | 当前类和子类可访问 |
| private | 私有成员，子类不能直接访问 |
| val 字段 | 只读字段，可用于字段重写 |
| var 字段 | 可读可写字段，规则较复杂 |
| 主构造器 | 能向父类构造器传参 |

---

## 六、流程动画建议

### 流程 1：子类对象创建时的父类传参

```text
调用 new Student("Tom", 1001)
↓
进入 Student 主构造器
↓
Student 主构造器接收 name 和 id
↓
通过 extends Person(name) 把 name 传给父类
↓
父类 Person 初始化 name
↓
子类 Student 初始化 id
↓
对象创建完成
```

### 流程 2：方法重写判断

```text
子类定义了一个同名方法
↓
判断父类方法是否有方法体
↓
如果父类方法是抽象方法
↓
override 可以省略
↓
如果父类方法是非抽象方法
↓
必须写 override
↓
执行时调用子类新方法体
```

---

## 七、练习题

### 练习 1

写一个 `Person` 父类和 `Student` 子类，子类通过主构造器向父类传递 `name`。

参考答案：

```scala
class Person(val name: String)

class Student(name: String, val id: Int) extends Person(name)
```

---

### 练习 2

写一个父类 `Animal`，包含非抽象方法 `sound`，再写子类 `Dog` 重写它。

参考答案：

```scala
class Animal {
  def sound(): Unit = {
    println("animal sound")
  }
}

class Dog extends Animal {
  override def sound(): Unit = {
    println("bark")
  }
}
```

---

### 练习 3

写一个抽象类 `Animal`，包含抽象方法 `sound`，再写子类实现它。

参考答案：

```scala
abstract class Animal {
  def sound(): Unit
}

class Dog extends Animal {
  def sound(): Unit = {
    println("bark")
  }
}
```

---

### 练习 4

写一个子类，继承父类字段并添加自己的字段。

参考答案：

```scala
class Person {
  val name = "Tom"
}

class Student extends Person {
  val id = 1001
}
```

---

### 练习 5

写一个 `val` 字段重写例子。

参考答案：

```scala
class Person {
  val name = "Tom"
}

class Student extends Person {
  override val name = "Peter"
}
```

---

## 八、课后总结

1. Scala 和 Java 都使用继承表达父类和子类关系。
2. Scala 使用 `extends` 继承父类。
3. 只有子类主构造器能向父类主构造器传参。
4. 辅助构造器基于主构造器，不能直接绕过主构造器传父类参数。
5. 重写父类抽象方法时，`override` 可以省略。
6. 重写父类非抽象方法或字段时，必须写 `override`。
7. 子类可以继承父类非私有、非静态成员。
8. 子类可以添加自己的成员。
9. `final` 修饰的类不能被继承，`final` 修饰的方法不能被重写。
10. `protected` 成员可以在当前类和子类中访问。
11. 子类重写时访问权限不能比父类更小。
12. 子类可以用同名 `val` 字段重写父类同名 `val` 字段。
13. `var` 字段涉及 getter 和 setter，重写规则比 `val` 更复杂。
14. 继承、重写、字段覆盖是面向对象考试和实验中的重点。
---

## 九、建议加入网站的标签

```text
继承
extends
父类
子类
superclass
subclass
主构造器
辅助构造器
override
overload
final
protected
private
访问权限
字段重写
val字段
var字段
Scala与Java对比
```
