# 派生类与派生对象的私有属性及相关方法

## 课程信息

- **课程标题**：派生类与派生对象的私有属性及相关方法
- **上课日期**：2026-04-09
- **上课时间**：16:06
- **所属章节**：第六章 Scala 伴生类、伴生对象与 apply 方法
- **建议课程 ID**：`scala-2026-04-09-companion-apply-private`
- **页面访问地址**：`lesson.html?id=scala-2026-04-09-companion-apply-private`

---

## 一、课堂摘要

本节课主要讲解伴生类、伴生对象、私有属性、类级别方法、主构造器参数、属性升级和 `apply` 方法。

老师首先讲解了私有属性的访问范围。一般情况下，私有属性只能在定义它的类体内部访问，类体以外不可见。但如果存在伴生类和伴生对象，由于二者关系紧密，它们之间可以访问彼此的私有属性和私有方法。这是 Scala 伴生机制的重要特点。

随后，老师把伴生对象和 Java 中的静态方法、静态属性进行对比。Java 中静态成员可以用类名直接调用，而 Scala 中没有传统 Java 的 `static`，会将这类“类层级”的内容放在伴生对象中。伴生对象与类名相同，所以调用时看起来也像用类名调用。

课堂中还讲到了构造器参数。类名后面和类交织在一起的参数列表就是主构造器。如果参数前没有 `val` 或 `var`，它只是普通构造参数；如果加上 `val` 或 `var`，参数会升级为字段属性，可以被对象访问。

本节课重点讲解 `apply` 方法。伴生对象中的 `apply` 方法可以创建类对象，并根据参数数量或类型匹配不同构造方式。调用时可以省略 `new`，直接写 `PlayTest(...)`，实际上会调用伴生对象中的 `apply` 方法，返回一个类对象。再通过这个类对象调用类中的方法。

最后，老师布置学习任务：让同学使用豆包、通义千问、百度、菜鸟教程、B 站等平台总结 `apply` 方法和伴生对象的用法，并整理到笔记本中。重点是弄明白 `apply` 写在哪里、如何返回类对象，以及如何通过伴生对象创建类对象。

---

## 二、核心知识点

### 1. 私有属性的基本访问范围

私有属性通常只能在定义它的类体结构中访问。

```scala
class Box {
  private val color = "blue"

  def showColor(): Unit = {
    println(color)
  }
}
```

类外不能直接访问：

```scala
val b = new Box
// println(b.color)  // 错误
```

---

### 2. 伴生类和伴生对象

如果一个 `class` 和一个 `object` 名称相同，它们是伴生类和伴生对象。

```scala
class Box {
  private val color = "blue"
}

object Box {
  def create(): Box = new Box
}
```

伴生类和伴生对象关系紧密。

---

### 3. 伴生对象可以访问伴生类私有成员

伴生对象可以访问伴生类中的私有属性或私有方法。

```scala
class Box {
  private val color = "blue"
}

object Box {
  def printColor(box: Box): Unit = {
    println(box.color)
  }
}
```

这是普通外部对象不能做到的。

---

### 4. 伴生类也可以访问伴生对象私有成员

伴生类和伴生对象可以互相访问私有成员。

```scala
class Box {
  def showSecret(): Unit = {
    println(Box.secret)
  }
}

object Box {
  private val secret = "only companion can see"
}
```

这体现了二者“一体”的关系。

---

### 5. 类体以外不可见

如果不是伴生关系，其他类或对象不能访问 private 成员。

```scala
class Other {
  // 不能直接访问 Box 的 private 字段
}
```

因此，private 仍然具有封装作用。

---

### 6. 伴生对象类似 Java 静态成员容器

Scala 没有传统 Java 的 `static`。类似静态属性和静态方法的内容，通常放在伴生对象中。

Java：

```java
Student.create();
```

Scala：

```scala
Student.create()
```

看起来相似，但 Scala 的 `Student` 是 object。

---

### 7. 类级别内容

伴生对象中定义的方法和属性更像类级别内容，而不是某一个对象实例独有的内容。

例如：

- 工具方法；
- 工厂方法；
- 常量；
- 默认配置；
- `apply` 方法。

---

### 8. 主构造器参数

类名后面的参数列表就是主构造器参数。

```scala
class PlayTest(name: String, age: Int)
```

这里 `name` 和 `age` 是构造参数。

---

### 9. 构造参数和字段属性区别

如果参数前没有 `val` 或 `var`，它只是构造参数，不一定能作为对象字段直接访问。

```scala
class PlayTest(name: String, age: Int)
```

如果加上 `val` 或 `var`，参数会升级为属性。

```scala
class PlayTest(val name: String, var age: Int)
```

---

### 10. 参数升级为属性

```scala
class Person(val name: String, var age: Int)
```

解释：

- `val name`：只读属性；
- `var age`：可读可写属性；
- 对象可以访问这些字段。

---

### 11. apply 方法

`apply` 是 Scala 中非常重要的方法，常写在伴生对象中。

```scala
object PlayTest {
  def apply(name: String, age: Int): PlayTest = {
    new PlayTest(name, age)
  }
}
```

调用时可以省略 `new`：

```scala
val p = PlayTest("Tom", 20)
```

---

### 12. apply 返回类对象

`apply` 方法通常返回类对象。

```scala
def apply(name: String, age: Int): PlayTest = {
  new PlayTest(name, age)
}
```

返回值类型是 `PlayTest`，说明它创建并返回了一个类对象。

---

### 13. apply 与参数匹配

可以定义多个 `apply` 方法，根据参数数量或类型匹配。

```scala
object PlayTest {
  def apply(name: String): PlayTest = new PlayTest(name, 0)

  def apply(name: String, age: Int): PlayTest = new PlayTest(name, age)
}
```

调用：

```scala
val p1 = PlayTest("Tom")
val p2 = PlayTest("Jerry", 20)
```

---

### 14. apply 与辅助构造器

`apply` 可以根据参数数量调用不同构造方式。

它本质上是通过伴生对象中的方法创建类对象，和构造器配合使用。

---

### 15. 不写 new 的原因

当写：

```scala
val p = PlayTest("Tom", 20)
```

看起来没有 `new`，但实际上调用的是：

```scala
PlayTest.apply("Tom", 20)
```

所以可以创建出类对象。

---

### 16. 用伴生对象调用方法产生类对象

调用伴生对象的方法可以产生类对象：

```scala
val p = PlayTest("Tom", 20)
```

然后用类对象调用类中的方法：

```scala
p.show()
```

---

### 17. apply 方法写在哪里

`apply` 方法一般写在伴生对象中，而不是普通类外的随机位置。

结构通常是：

```scala
class PlayTest(...)

object PlayTest {
  def apply(...): PlayTest = {
    new PlayTest(...)
  }
}
```

---

### 18. 学习任务

老师要求同学使用网络平台总结相关方法，特别是：

- 伴生类；
- 伴生对象；
- private 访问；
- apply 方法；
- 参数匹配；
- 通过伴生对象创建类对象。

---

## 三、代码示例

### 示例 1：伴生对象访问伴生类私有属性

```scala
class Box {
  private val color = "blue"
}

object Box {
  def printColor(box: Box): Unit = {
    println(box.color)
  }
}

val b = new Box
Box.printColor(b)
```

解释：伴生对象可以访问伴生类的私有属性。

---

### 示例 2：伴生类访问伴生对象私有属性

```scala
class Box {
  def showSecret(): Unit = {
    println(Box.secret)
  }
}

object Box {
  private val secret = "companion secret"
}

val b = new Box
b.showSecret()
```

解释：伴生类也可以访问伴生对象的私有成员。

---

### 示例 3：构造参数没有升级为字段

```scala
class PlayTest(name: String, age: Int)

// val p = new PlayTest("Tom", 20)
// p.name  // 不能直接访问
```

解释：没有 `val` 或 `var` 时，参数只是构造参数。

---

### 示例 4：构造参数升级为字段

```scala
class PlayTest(val name: String, var age: Int)

val p = new PlayTest("Tom", 20)
println(p.name)
println(p.age)
```

解释：加上 `val` 或 `var` 后，参数变成对象字段。

---

### 示例 5：apply 创建对象

```scala
class PlayTest(val name: String, var age: Int)

object PlayTest {
  def apply(name: String, age: Int): PlayTest = {
    new PlayTest(name, age)
  }
}

val p = PlayTest("Tom", 20)
println(p.name)
```

解释：`PlayTest("Tom", 20)` 会调用伴生对象的 `apply` 方法。

---

### 示例 6：多个 apply 方法

```scala
class PlayTest(val name: String, var age: Int)

object PlayTest {
  def apply(name: String): PlayTest = {
    new PlayTest(name, 0)
  }

  def apply(name: String, age: Int): PlayTest = {
    new PlayTest(name, age)
  }
}

val p1 = PlayTest("Tom")
val p2 = PlayTest("Jerry", 20)
```

解释：根据参数数量不同，调用不同的 `apply` 方法。

---

## 四、小测验

### 题目 1

伴生类和伴生对象的名称有什么特点？

A. 名称相同  
B. 必须不同  
C. 只能是数字  
D. 不能出现在同一个项目  

**正确答案**：A  
**解析**：同名 class 和 object 可以形成伴生关系。

---

### 题目 2

伴生对象是否可以访问伴生类的 private 成员？

A. 可以  
B. 不可以  
C. 只能访问 public  
D. 只能访问图片  

**正确答案**：A  
**解析**：伴生对象和伴生类关系紧密，可以互相访问私有成员。

---

### 题目 3

Scala 中类似 Java static 的内容通常放在哪里？

A. 伴生对象中  
B. 普通图片中  
C. 数据库中  
D. 压缩包中  

**正确答案**：A  
**解析**：Scala 没有传统 static，通常用 object 存放类级别内容。

---

### 题目 4

如果构造参数前加上 `val` 或 `var`，会发生什么？

A. 参数升级为字段属性  
B. 参数被删除  
C. 类不能创建  
D. 只能输出字符串  

**正确答案**：A  
**解析**：`val` 或 `var` 会让构造参数成为对象字段。

---

### 题目 5

`PlayTest("Tom", 20)` 在有伴生对象 apply 方法时，本质上调用什么？

A. `PlayTest.apply("Tom", 20)`  
B. `delete PlayTest`  
C. `new String`  
D. `println only`  

**正确答案**：A  
**解析**：省略 `new` 的写法通常会调用伴生对象中的 `apply` 方法。

---

### 题目 6

`apply` 方法通常返回什么？

A. 类对象  
B. 图片  
C. 数据库连接名  
D. 压缩文件  

**正确答案**：A  
**解析**：伴生对象中的 `apply` 常用于创建并返回类对象。

---

## 五、拖拽匹配内容

| 左侧概念 | 右侧解释 |
|---|---|
| companion class | 伴生类 |
| companion object | 伴生对象 |
| private | 私有成员 |
| static 思想 | 类级别内容 |
| val 参数 | 只读字段 |
| var 参数 | 可读可写字段 |
| apply | 创建对象的特殊方法 |
| new | 传统创建对象方式 |
| PlayTest(...) | 调用 apply 的简写 |
| 主构造器 | 类名后的参数列表 |
| 参数匹配 | 根据参数数量或类型选择方法 |
| 工厂方法 | 创建对象的方法 |

---

## 六、流程动画建议

### 流程 1：apply 创建对象

```text
写出 PlayTest("Tom", 20)
↓
编译器查找 PlayTest 伴生对象
↓
找到 apply(name, age)
↓
apply 内部调用 new PlayTest(name, age)
↓
返回 PlayTest 类对象
↓
用对象调用类中的方法
```

### 流程 2：构造参数升级为字段

```text
在类名后写参数
↓
判断参数前是否有 val 或 var
↓
没有 val/var：只是构造参数
↓
有 val：成为只读字段
↓
有 var：成为可读可写字段
↓
对象可以访问对应字段
```

---

## 七、练习题

### 练习 1

写一个 `Box` 类和伴生对象，让伴生对象访问类的私有属性。

参考答案：

```scala
class Box {
  private val color = "blue"
}

object Box {
  def printColor(box: Box): Unit = {
    println(box.color)
  }
}
```

---

### 练习 2

写一个类 `PlayTest`，让构造参数 `name` 和 `age` 成为字段。

参考答案：

```scala
class PlayTest(val name: String, var age: Int)
```

---

### 练习 3

给 `PlayTest` 写伴生对象，并用 `apply` 创建对象。

参考答案：

```scala
class PlayTest(val name: String, var age: Int)

object PlayTest {
  def apply(name: String, age: Int): PlayTest = {
    new PlayTest(name, age)
  }
}
```

---

### 练习 4

写两个 `apply` 方法，分别支持只传 `name` 和传 `name + age`。

参考答案：

```scala
class PlayTest(val name: String, var age: Int)

object PlayTest {
  def apply(name: String): PlayTest = {
    new PlayTest(name, 0)
  }

  def apply(name: String, age: Int): PlayTest = {
    new PlayTest(name, age)
  }
}
```

---

### 练习 5

说明 `new PlayTest("Tom", 20)` 和 `PlayTest("Tom", 20)` 的区别。

参考答案：

```text
new PlayTest("Tom", 20) 是直接调用类构造器创建对象；
PlayTest("Tom", 20) 是调用伴生对象中的 apply 方法，再由 apply 返回类对象。
```

---

## 八、课后总结

1. private 成员通常只能在类体内部访问。
2. 伴生类和伴生对象可以互相访问私有成员。
3. Scala 没有传统 Java static，类似静态方法和静态属性通常放在伴生对象中。
4. 伴生对象是类级别内容的重要承载位置。
5. 类名后的参数列表是主构造器参数。
6. 参数前没有 `val` 或 `var` 时，只是构造参数。
7. 参数前加 `val` 或 `var` 后，会升级为字段属性。
8. `apply` 方法通常写在伴生对象中。
9. `PlayTest(...)` 这种写法本质上调用 `PlayTest.apply(...)`。
10. `apply` 方法常用于创建并返回类对象。
11. 多个 `apply` 方法可以根据参数数量或类型进行匹配。
12. 学习伴生类和伴生对象时，重点是理解 private 访问、apply 位置和对象创建流程。
---

## 九、建议加入网站的标签

```text
伴生类
伴生对象
private
私有属性
静态方法
静态属性
类级别内容
主构造器
构造参数
val参数
var参数
apply
工厂方法
参数匹配
new
对象创建
Scala与Java对比
```
