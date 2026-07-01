# Scala编程课：项目创建与基础语法练习

## 课程信息

- **课程标题**：Scala编程课：项目创建与基础语法练习
- **上课日期**：2026-03-12
- **上课时间**：15:16
- **所属章节**：第三章 Scala 项目创建与基础练习
- **建议课程 ID**：`scala-2026-03-12-project-practice`
- **页面访问地址**：`lesson.html?id=scala-2026-03-12-project-practice`

---

## 一、课堂摘要

本节课主要围绕 Scala 项目创建、基础语法回顾、入口函数、对象声明、类的可见性以及课堂练习展开。

老师首先带同学重新演示如何创建 Scala 项目。创建项目后，项目结构与 Java 类似，包含 `src` 资源目录、Scala 连接库等内容。在 `src` 中可以右键创建 `Scala class`，生成的文件后缀为 `.scala`。

接着，课堂回顾了 Scala 中变量和常量的定义方式。Scala 可以省略分号，`var` 用来定义变量，`val` 用来定义常量。老师通过 `i = 10`、`j = 11`、`k = i + j` 的例子说明变量和常量的使用。

随后，老师重点强调 Scala 程序运行必须有入口函数。Scala 中入口函数写作 `def main(args: Array[String]): Unit`，其中 `args` 是参数名，`Array[String]` 表示字符串数组，`Unit` 类似 Java 中的 `void`。

课堂还讲解了通过 `new Test` 创建对象，并说明 Scala 中变量的类型可以由赋值决定。比如 `var c = new Test`，那么 `c` 的类型就是 `Test` 类对象。老师还提到 Scala 类默认是 public，可见性和 Java 中 public、private、protected 的思想有关。

最后，老师布置了多个课堂练习，包括创建列表、输出偶数项、奇数项求和、奇数项与偶数项对应相乘后求和等，用来训练同学创建项目、写 main 方法和使用循环处理数据。

---

## 二、核心知识点

### 1. 创建 Scala 项目

Scala 项目的创建流程与 Java 项目类似。

基本步骤：

```text
File
↓
New
↓
Scala Project
↓
输入项目名称
↓
Finish
```

创建完成后，项目中会有：

- `src`：资源/源代码目录；
- Scala 连接库；
- JRE/JDK 相关内容；
- 可以创建 Scala class、object 等文件。

---

### 2. 在 src 中创建 Scala class

在 `src` 资源目录中，可以右键创建 Scala 类。

基本步骤：

```text
src
↓
右键
↓
New
↓
Scala class
↓
输入类名
↓
Finish
```

创建完成后，文件后缀通常是：

```text
.scala
```

这和 Java 的 `.java` 文件不同。

---

### 3. Scala 与 Java 项目结构相似

老师强调，Scala 项目结构与 Java 项目结构有相似之处。

相似点：

- 都有项目；
- 都有源代码目录；
- 都可以创建类；
- 都需要入口函数运行程序；
- 都可以通过对象调用属性或方法。

不同点：

- Java 文件后缀是 `.java`；
- Scala 文件后缀是 `.scala`；
- Scala 中 main 方法通常写在 `object` 中；
- Scala 中语法更简洁。

---

### 4. var 定义变量

Scala 中使用 `var` 定义变量。

```scala
var i = 10
var j = 11
```

解释：

- `i` 和 `j` 是变量；
- 变量的值可以改变；
- Scala 可以根据右边的值推断类型；
- 末尾通常可以省略分号。

---

### 5. val 定义常量

Scala 中使用 `val` 定义常量。

```scala
val k = i + j
```

解释：

- `k` 是常量；
- 一旦赋值，不建议或不能重新赋值；
- `k` 的值由 `i + j` 决定；
- 如果 `i = 10`，`j = 11`，则 `k = 21`。

---

### 6. Scala 可以省略分号

Scala 设计上尽量减少程序员的手动操作，因此一行一个完整语句时，通常可以省略分号。

```scala
var i = 10
var j = 11
val k = i + j
```

如果在 Java 中，通常需要写分号：

```java
int i = 10;
int j = 11;
```

---

### 7. Scala 入口函数 main

Scala 程序运行时需要入口函数。

标准写法：

```scala
def main(args: Array[String]): Unit = {
  println("Hello Scala")
}
```

解释：

- `def` 是定义函数的关键字；
- `main` 是入口函数名；
- `args` 是参数名；
- `Array[String]` 表示字符串数组；
- `Unit` 类似 Java 中的 `void`。

---

### 8. args: Array[String]

`args: Array[String]` 是 Scala main 函数中的参数。

可以拆开理解：

| 部分 | 含义 |
|---|---|
| `args` | 参数名 |
| `Array` | 数组 / 列表类型 |
| `String` | 数组中的元素类型 |
| `Array[String]` | 字符串数组 |

Java 中常见写法是：

```java
String[] args
```

Scala 中写作：

```scala
args: Array[String]
```

---

### 9. object 与入口函数

Scala 中可以把入口函数写在 `object` 中。

示例：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    println("Hello Scala")
  }
}
```

解释：

- `object Main` 定义一个对象；
- `main` 方法写在对象内部；
- 程序运行时从 `main` 方法开始执行。

---

### 10. 通过 new 创建对象

课堂中使用 `new Test` 创建对象。

```scala
var c = new Test
```

解释：

- `new Test` 会创建一个 `Test` 类对象；
- `c` 是变量名；
- `c` 的类型由右边的 `new Test` 决定；
- 因此 `c` 可以理解为 `Test` 类型的对象。

---

### 11. 类型由 value 决定

Scala 中很多变量的类型可以由等号右边的值决定。

例如：

```scala
var c = new Test
```

因为右边是 `new Test`，所以 `c` 的类型就是 `Test`。

再如：

```scala
var i = 10
```

因为右边是整数 `10`，所以 `i` 的类型是 `Int`。

---

### 12. 对象调用属性

如果类中定义了属性，可以通过对象点属性的方式访问。

```scala
class Test {
  var i = 10
  var j = 11
  val k = i + j
}

object Main {
  def main(args: Array[String]): Unit = {
    var c = new Test
    println(c.k)
  }
}
```

输出结果：

```text
21
```

---

### 13. Scala 类默认 public

老师提到，在 Scala 中，如果类没有显式写修饰符，通常可以理解为 public 可见性。

Java 中常见修饰符：

- `public`
- `private`
- `protected`
- 默认访问权限

Scala 中默认更偏向公开可见，方便被调用。

---

### 14. 运行项目必须有 main 方法

课堂中很多同学遇到的问题是：只写了 class，但是没有写 main 方法，所以项目无法正常运行。

错误原因：

```text
项目找不到入口
```

解决方法：

- 写一个 `object`；
- 在 object 中写 `def main(args: Array[String]): Unit`；
- 把要运行的代码放进 main 方法中。

---

### 15. 课堂练习一：输出偶数项

题目：

创建一个包含 1 到 10 的列表，输出偶数项。

参考思路：

```scala
val nums = 1 to 10

for (i <- nums if i % 2 == 0) {
  println(i)
}
```

输出：

```text
2
4
6
8
10
```

---

### 16. 课堂练习二：奇数项求和

题目：

将 1 到 10 中的奇数项相加并输出。

参考思路：

```scala
val nums = 1 to 10
var sum = 0

for (i <- nums if i % 2 != 0) {
  sum = sum + i
}

println(sum)
```

结果：

```text
25
```

---

### 17. 课堂练习三：奇数项与偶数项对应相乘后求和

题目：

计算：

```text
第1项 × 第2项
+
第3项 × 第4项
+
第5项 × 第6项
+
第7项 × 第8项
+
第9项 × 第10项
```

即：

```text
1×2 + 3×4 + 5×6 + 7×8 + 9×10
```

参考代码：

```scala
val nums = 1 to 10
var sum = 0

for (i <- 1 to 9 by 2) {
  sum = sum + i * (i + 1)
}

println(sum)
```

结果：

```text
190
```

---

## 三、代码示例

### 示例 1：定义变量和常量

```scala
var i = 10
var j = 11
val k = i + j
```

解释：

`i` 和 `j` 是变量，`k` 是常量，`k` 的值是 21。

---

### 示例 2：Scala 入口函数

```scala
object Main {
  def main(args: Array[String]): Unit = {
    println("Hello Scala")
  }
}
```

解释：

程序从 `main` 方法开始运行。

---

### 示例 3：创建类和对象

```scala
class Test {
  var i = 10
  var j = 11
  val k = i + j
}

object Main {
  def main(args: Array[String]): Unit = {
    var c = new Test
    println(c.k)
  }
}
```

解释：

通过 `new Test` 创建对象 `c`，然后用 `c.k` 访问对象中的属性。

---

### 示例 4：输出偶数项

```scala
val nums = 1 to 10

for (i <- nums if i % 2 == 0) {
  println(i)
}
```

解释：

筛选并输出 1 到 10 中的偶数。

---

### 示例 5：奇数项求和

```scala
val nums = 1 to 10
var sum = 0

for (i <- nums if i % 2 != 0) {
  sum = sum + i
}

println(sum)
```

解释：

把 1、3、5、7、9 相加，结果是 25。

---

### 示例 6：奇偶项对应相乘后求和

```scala
val nums = 1 to 10
var sum = 0

for (i <- 1 to 9 by 2) {
  sum = sum + i * (i + 1)
}

println(sum)
```

解释：

计算 `1×2 + 3×4 + 5×6 + 7×8 + 9×10`，结果是 190。

---

## 四、小测验

### 题目 1

Scala 中定义变量使用哪个关键字？

A. var  
B. val  
C. final  
D. public  

**正确答案**：A  
**解析**：`var` 用来定义变量，变量值可以改变。

---

### 题目 2

Scala 中定义常量使用哪个关键字？

A. class  
B. val  
C. main  
D. new  

**正确答案**：B  
**解析**：`val` 用来定义常量或不可变值。

---

### 题目 3

Scala 的入口函数通常写成什么？

A. `public static void main(String[] args)`  
B. `def main(args: Array[String]): Unit`  
C. `main void args`  
D. `class main args`  

**正确答案**：B  
**解析**：Scala 的入口函数使用 `def main(args: Array[String]): Unit`。

---

### 题目 4

`var c = new Test` 中，`c` 的类型由什么决定？

A. 左边的 var  
B. 文件名  
C. 右边的 new Test  
D. 注释内容  

**正确答案**：C  
**解析**：Scala 中变量类型可以由右边的赋值决定，`new Test` 决定了 `c` 是 Test 类型。

---

### 题目 5

如果 Scala 项目没有 main 方法，可能会出现什么问题？

A. 找不到程序入口  
B. 自动运行成功  
C. 自动创建数据库  
D. 自动输出偶数  

**正确答案**：A  
**解析**：程序运行需要入口函数，没有 main 方法就可能找不到入口。

---

### 题目 6

下面哪个代码可以输出 1 到 10 中的偶数？

A. `if i = 2`  
B. `for (i <- 1 to 10 if i % 2 == 0) println(i)`  
C. `class even`  
D. `new public`  

**正确答案**：B  
**解析**：`i % 2 == 0` 可以判断偶数。

---

## 五、拖拽匹配内容

| 左侧概念 | 右侧解释 |
|---|---|
| Scala Project | Scala 项目 |
| src | 源代码目录 |
| Scala class | Scala 类文件 |
| `.scala` | Scala 文件后缀 |
| var | 定义变量 |
| val | 定义常量 |
| def | 定义函数 |
| main | 程序入口 |
| args | 参数名 |
| Array[String] | 字符串数组 |
| Unit | 类似 Java 中 void |
| new Test | 创建 Test 对象 |
| public | 公有可见性 |
| c.k | 通过对象访问属性 |

---

## 六、流程动画建议

### 流程 1：创建并运行 Scala 程序

```text
创建 Scala Project
↓
在 src 中创建 Scala class 或 object
↓
编写 object Main
↓
添加 def main(args: Array[String]): Unit
↓
在 main 中写运行代码
↓
点击运行
↓
查看控制台输出
```

---

### 流程 2：创建对象并访问属性

```text
定义 class Test
↓
在类中定义 i、j、k
↓
在 main 中写 var c = new Test
↓
c 的类型由 new Test 决定
↓
使用 c.k 访问对象属性
↓
输出 k 的值
```

---

## 七、练习题

### 练习 1

请写一个 Scala 程序入口对象 `Main`，并输出 `"Hello Scala"`。

参考答案：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    println("Hello Scala")
  }
}
```

---

### 练习 2

请创建一个类 `Test`，其中定义变量 `i = 10`，变量 `j = 11`，常量 `k = i + j`。

参考答案：

```scala
class Test {
  var i = 10
  var j = 11
  val k = i + j
}
```

---

### 练习 3

请在 `main` 方法中创建 `Test` 对象，并输出 `k` 的值。

参考答案：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    var c = new Test
    println(c.k)
  }
}
```

---

### 练习 4

请输出 1 到 10 中的偶数。

参考答案：

```scala
for (i <- 1 to 10 if i % 2 == 0) {
  println(i)
}
```

---

### 练习 5

请计算 1 到 10 中所有奇数的和。

参考答案：

```scala
var sum = 0

for (i <- 1 to 10 if i % 2 != 0) {
  sum = sum + i
}

println(sum)
```

---

### 练习 6

请计算 `1×2 + 3×4 + 5×6 + 7×8 + 9×10` 的结果。

参考答案：

```scala
var sum = 0

for (i <- 1 to 9 by 2) {
  sum = sum + i * (i + 1)
}

println(sum)
```

---

## 八、课后总结

1. 本节课重点练习了 Scala 项目创建和基础语法。
2. Scala 项目结构与 Java 类似，但文件后缀为 `.scala`。
3. Scala 可以在 `src` 中创建 Scala class。
4. `var` 定义变量，`val` 定义常量。
5. Scala 一行一个完整语句时可以省略分号。
6. Scala 程序运行需要入口函数 `def main(args: Array[String]): Unit`。
7. `args: Array[String]` 表示字符串数组参数。
8. `new Test` 可以创建 `Test` 类对象。
9. Scala 中变量类型可以由右边的赋值决定。
10. 如果项目没有 main 方法，运行时会找不到入口。
11. 类默认 public 可见，便于被调用。
12. 课后应重点练习偶数输出、奇数求和、奇偶项乘积求和。
