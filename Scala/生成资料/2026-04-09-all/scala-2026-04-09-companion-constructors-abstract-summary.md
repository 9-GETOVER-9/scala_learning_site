# Scala课程知识点讲解

## 课程信息

- **课程标题**：Scala课程知识点讲解
- **上课日期**：2026-04-09
- **上课时间**：15:16
- **所属章节**：第六章 Scala 伴生对象、构造器与抽象类
- **建议课程 ID**：`scala-2026-04-09-companion-constructors-abstract`
- **页面访问地址**：`lesson.html?id=scala-2026-04-09-companion-constructors-abstract`

---

## 一、课堂摘要

本节课主要讲解 Scala 与 Java 在构造对象、类成员、静态成员、伴生对象、单例对象和抽象类方面的区别。

课堂开头老师提醒同学带好笔记本、实验报告和实验报告指导书，后续会检查笔记并进入实验课阶段。课程已经到第六周，第七、八周后理论内容基本结束，之后会安排实验课和考试。

在知识点方面，老师首先对比了 Java 和 Scala 的构造方式。Java 主要通过构造方法构造对象，而 Scala 中有主构造器和辅助构造器。Scala 的主构造器和类定义交织在一起，参数直接写在类名后面；辅助构造器使用 `this`，可以根据参数数量提供不同的对象创建方式。

随后，老师重点讲解了伴生对象。Scala 中的 class 主要放非静态成员，而 Java 中 class 既可以有静态成员，也可以有非静态成员。Scala 会把类似 Java 静态成员的内容放到同名 object 中，这个 object 就是伴生对象。伴生对象可以和伴生类互相访问信息，也可以用于创建具有特殊意义的对象，例如班长、学委等角色。

课堂还讲解了单例对象的作用。单例对象可以存放工具函数或常量，也可以表示程序中唯一存在的特殊对象，或者用于调用某个服务。Scala 中 `object` 可以不通过 `new` 创建，因此适合表达单例。

后半部分讲解了类属性、私有属性、方法定义和抽象类。老师强调，如果字段是 `val` 常量，就不需要 setter；如果字段是 `private`，类外不能直接访问，需要通过方法间接访问。抽象类只有方法头没有方法体，用来定义规则，不同子类继承后再实现具体行为。接口可以理解为特殊的抽象结构。

---

## 二、核心知识点

### 1. 课程安排与课前准备

老师提醒同学：

- 带好笔记本；
- 带实验报告；
- 打印实验报告指导书；
- 未检查笔记本的同学需要找老师检查；
- 后续会进入实验课和考试阶段。

---

### 2. Java 构造方法

Java 中对象通常通过构造方法创建。

```java
class Student {
    private String name;

    public Student(String name) {
        this.name = name;
    }
}
```

Java 构造方法名称和类名一致，主要用于初始化对象属性。

---

### 3. Scala 主构造器

Scala 的主构造器直接写在类名后面。

```scala
class Student(val name: String, var age: Int)
```

这一行同时完成了：

- 定义类；
- 定义主构造器参数；
- 定义字段；
- 生成部分访问方法。

---

### 4. Scala 辅助构造器

辅助构造器使用 `this` 定义。

```scala
class Student(val name: String, var age: Int) {
  def this(name: String) = {
    this(name, 18)
  }
}
```

辅助构造器可以根据不同参数数量创建对象。

---

### 5. 参数匹配

调用构造器时，Scala 会根据传入参数数量和类型匹配对应构造器。

```scala
val s1 = new Student("Tom", 20)
val s2 = new Student("Jerry")
```

`s1` 调用主构造器，`s2` 调用辅助构造器。

---

### 6. Scala class 主要包含非静态成员

老师强调，Java class 中可以有静态成员和非静态成员，但 Scala class 中主要是非静态成员。

Scala 会把类似 Java 静态成员的功能放到 `object` 中。

---

### 7. Java 静态成员

Java 中可以在 class 里写静态方法和静态属性。

```java
class MathUtil {
    public static int add(int a, int b) {
        return a + b;
    }
}
```

调用方式：

```java
MathUtil.add(1, 2);
```

---

### 8. Scala 伴生对象

如果一个 `class` 和一个 `object` 同名，它们可以形成伴生关系。

```scala
class Student(val name: String)

object Student {
  def create(name: String): Student = new Student(name)
}
```

`object Student` 可以放类似静态方法的内容。

---

### 9. 伴生对象与伴生类可交互

伴生类和伴生对象名称相同，关系紧密，可以互相访问某些成员。

这使得 Scala 可以把“普通对象逻辑”和“类级别工具逻辑”拆开，让结构更清晰。

---

### 10. 伴生对象表达特殊角色

老师用班长、学委等角色举例。普通学生可以用普通类对象表示，而具有特殊身份或功能的对象，可以通过伴生对象或单例对象来表达。

---

### 11. 单例对象

单例对象表示程序中只有一个实例的对象。

```scala
object SchoolConfig {
  val schoolName = "Scala School"

  def show(): Unit = {
    println(schoolName)
  }
}
```

调用时不需要 `new`：

```scala
SchoolConfig.show()
```

---

### 12. 单例对象常见作用

单例对象常用于：

- 存放工具函数；
- 存放常量；
- 表示唯一实例；
- 调用某个服务；
- 作为应用程序入口。

---

### 13. val 属性不需要 setter

如果属性是 `val`，说明它不可变，通常只需要 getter，不需要 setter。

```scala
class Student {
  val id = 1001
}
```

`id` 可以读取，但不能重新赋值。

---

### 14. private 私有属性

私有属性只能在类体内部直接访问。

```scala
class Student {
  private val name = "Tom"

  def getName: String = name
}
```

如果类外需要访问，需要提供方法间接访问。

---

### 15. 方法定义中有等号和无等号

Scala 中方法有等号时，一般表示有返回结果。

```scala
def add(a: Int, b: Int): Int = {
  a + b
}
```

如果方法主要用于输出，可以写返回 `Unit`。

```scala
def show(): Unit = {
  println("hello")
}
```

学习时不要随意省略等号，避免返回值理解混乱。

---

### 16. class 里的 def 更像方法

老师提到，在 class 中定义的内容更常称为方法；在 object 中定义的内容有时更像函数或工具函数。

这不是绝对语法规则，但有助于理解它们的使用场景。

---

### 17. 抽象类

抽象类用于定义规则，但不一定给出完整实现。

```scala
abstract class Animal {
  def speak(): Unit
}
```

`speak` 只有方法头，没有方法体，需要子类实现。

---

### 18. 子类实现抽象方法

```scala
class Dog extends Animal {
  def speak(): Unit = {
    println("wang")
  }
}
```

不同子类可以根据自己的特点实现同一个规则。

---

### 19. 接口和抽象类

老师提到，接口可以理解为特殊的抽象结构。Scala 后续会更多使用 trait 来表达类似接口的能力。

---

### 20. 面向接口或规则编程

抽象类和接口的意义是先定义规则，再由具体类实现规则。

这样可以让框架先搭好，后续只需要按规则实现具体功能。

---

## 三、代码示例

### 示例 1：Scala 主构造器

```scala
class Student(val name: String, var age: Int)

val s = new Student("Tom", 20)
println(s.name)
println(s.age)
```

解释：类名后的参数列表就是主构造器参数。

---

### 示例 2：辅助构造器

```scala
class Student(val name: String, var age: Int) {
  def this(name: String) = {
    this(name, 18)
  }
}

val s1 = new Student("Tom", 20)
val s2 = new Student("Jerry")
```

解释：辅助构造器可以提供不同参数数量的创建方式。

---

### 示例 3：伴生类和伴生对象

```scala
class Student(val name: String)

object Student {
  def create(name: String): Student = {
    new Student(name)
  }
}

val s = Student.create("Tom")
println(s.name)
```

解释：伴生对象可以存放创建对象的工具方法。

---

### 示例 4：单例对象存放工具函数

```scala
object MathUtil {
  def add(a: Int, b: Int): Int = {
    a + b
  }
}

println(MathUtil.add(1, 2))
```

解释：object 不需要 new，可以直接调用其中的方法。

---

### 示例 5：私有属性间接访问

```scala
class Student {
  private val name = "Tom"

  def getName: String = {
    name
  }
}

val s = new Student
println(s.getName)
```

解释：私有属性不能在类外直接访问，可以通过方法间接访问。

---

### 示例 6：抽象类和子类实现

```scala
abstract class Animal {
  def speak(): Unit
}

class Dog extends Animal {
  def speak(): Unit = {
    println("wang")
  }
}

val dog = new Dog
dog.speak()
```

解释：抽象类定义规则，子类负责具体实现。

---

## 四、小测验

### 题目 1

Scala 主构造器通常写在哪里？

A. 类名后面  
B. 文件最后  
C. 注释里  
D. import 后面  

**正确答案**：A  
**解析**：Scala 类名后面的参数列表就是主构造器参数。

---

### 题目 2

Scala 中类似 Java 静态成员的内容通常放在哪里？

A. object 中  
B. 图片中  
C. 数据库中  
D. 压缩包中  

**正确答案**：A  
**解析**：Scala class 中主要放非静态成员，类似静态功能通常放到 object 中。

---

### 题目 3

伴生对象和伴生类的名称有什么特点？

A. 名称相同  
B. 必须完全不同  
C. 只能是数字  
D. 不能写在同一项目中  

**正确答案**：A  
**解析**：同名 class 和 object 可以形成伴生关系。

---

### 题目 4

val 字段通常是否需要 setter？

A. 不需要  
B. 必须需要  
C. 只能有 setter 没有 getter  
D. 不能读取  

**正确答案**：A  
**解析**：val 是不可变字段，通常只有 getter，没有 setter。

---

### 题目 5

私有属性如果要在类外访问，通常应该怎么做？

A. 提供方法间接访问  
B. 直接随便访问  
C. 删除 private  
D. 改成图片  

**正确答案**：A  
**解析**：private 字段类外不能直接访问，可以通过公有方法间接读取。

---

### 题目 6

抽象类的作用是什么？

A. 定义规则，让子类实现  
B. 删除对象  
C. 只能输出图片  
D. 不能被继承  

**正确答案**：A  
**解析**：抽象类可以只定义方法头，让不同子类实现具体行为。

---

## 五、拖拽匹配内容

| 左侧概念 | 右侧解释 |
|---|---|
| 主构造器 | 类名后的参数列表 |
| 辅助构造器 | 使用 this 定义 |
| class | 主要放非静态成员 |
| object | 可放类似静态成员的内容 |
| 伴生对象 | 与伴生类同名的 object |
| 单例对象 | 程序中唯一实例 |
| val | 不可变字段 |
| private | 私有访问 |
| getter | 取值方法 |
| setter | 改值方法 |
| abstract class | 抽象类 |
| trait/interface | 接口或特质思想 |

---

## 六、流程动画建议

### 流程 1：伴生对象创建对象

```text
定义 class Student
↓
定义同名 object Student
↓
在 object 中写 create 方法
↓
create 方法内部 new Student
↓
调用 Student.create
↓
得到 Student 类对象
```

### 流程 2：抽象类到子类实现

```text
定义 abstract class
↓
在抽象类中写方法头
↓
子类 extends 抽象类
↓
子类实现抽象方法
↓
创建子类对象
↓
调用具体方法
```

---

## 七、练习题

### 练习 1

写一个 `Student` 类，使用主构造器包含 `name` 和 `age`。

参考答案：

```scala
class Student(val name: String, var age: Int)
```

---

### 练习 2

给 `Student` 添加辅助构造器，只传入 `name`，年龄默认为 18。

参考答案：

```scala
class Student(val name: String, var age: Int) {
  def this(name: String) = {
    this(name, 18)
  }
}
```

---

### 练习 3

写一个伴生对象 `Student`，提供 `create` 方法创建 Student 对象。

参考答案：

```scala
class Student(val name: String)

object Student {
  def create(name: String): Student = {
    new Student(name)
  }
}
```

---

### 练习 4

写一个单例对象 `MathUtil`，包含加法方法。

参考答案：

```scala
object MathUtil {
  def add(a: Int, b: Int): Int = {
    a + b
  }
}
```

---

### 练习 5

写一个抽象类 `Animal` 和子类 `Dog`，让 Dog 实现 speak 方法。

参考答案：

```scala
abstract class Animal {
  def speak(): Unit
}

class Dog extends Animal {
  def speak(): Unit = {
    println("wang")
  }
}
```

---

## 八、课后总结

1. Java 通过构造方法创建对象，Scala 有主构造器和辅助构造器。
2. Scala 主构造器直接写在类名后面。
3. 辅助构造器使用 `this`，可以根据参数数量创建对象。
4. Scala class 主要包含非静态成员。
5. Scala object 可以承担类似 Java 静态成员的职责。
6. 同名 class 和 object 可以形成伴生关系。
7. 单例对象可以存放工具函数、常量或唯一服务。
8. val 字段不可变，通常不需要 setter。
9. private 字段类外不可见，需要通过方法间接访问。
10. 抽象类用于定义规则，子类负责具体实现。
11. 接口或特质思想能帮助框架先定义规则，再让具体类实现。
12. 学习 Scala 面向对象时，要重点理解 class、object、伴生对象和抽象类之间的关系。
---

## 九、建议加入网站的标签

```text
主构造器
辅助构造器
class
object
伴生对象
伴生类
单例对象
静态成员
非静态成员
val字段
private字段
getter
setter
抽象类
抽象方法
接口
trait
面向对象
Scala与Java对比
```
