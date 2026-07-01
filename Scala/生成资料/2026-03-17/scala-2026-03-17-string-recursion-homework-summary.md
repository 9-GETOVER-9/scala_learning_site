# 代码示例讲解与作业布置

## 课程信息

- **课程标题**：代码示例讲解与作业布置
- **上课日期**：2026-03-17
- **上课时间**：11:00 / 11:17
- **所属章节**：第四章 Scala 字符串、递归与求和练习
- **建议课程 ID**：`scala-2026-03-17-string-recursion-homework`
- **页面访问地址**：`lesson.html?id=scala-2026-03-17-string-recursion-homework`

---

## 一、课堂摘要

本节课主要讲解 Scala 中字符串重复、字符串拼接、图形输出、函数求和、代码纠错、递归求和以及列表求和等内容，并布置了用 Java 和 Scala 实现 1 到 10 加法代码的作业。

课堂前半部分通过输出带边框的 `hello` 图形，说明字符串可以重复，也可以通过加号进行拼接。老师解释了字符串 `"hello"` 的长度是 5，因此可以根据字符串长度输出相应数量的横杠，再通过拼接上下边框和中间内容，形成一个简单图形。

随后老师提到，如果不喜欢省略式写法，也可以使用显式声明，明确函数返回值类型。课堂布置了第一次作业：用 Java 和 Scala 分别写 1 到 10 的加法代码，写函数即可。

课堂后半部分围绕 Scala 求和函数进行讲解和纠错。老师指出常见错误包括变量定义位置错误、最后一行没有返回结果、变量名与函数名重复等。随后讲解了递归求和，即 `sum(10)` 会继续调用 `sum(9)`、`sum(8)`，直到终止条件，然后逐层返回结果。

最后，老师说明 Scala 中 `1 to 10` 本身就是一个范围或列表结构，可以直接调用库函数 `.sum` 求和，比手写函数更简单。

---

## 二、核心知识点

### 1. 字符串重复

Scala 中字符串可以重复。

```scala
"-" * 5
```

结果：

```text
-----
```

如果字符串 `s = "hello"`，它的长度是 5，就可以根据 `s.length` 输出 5 个横杠。

---

### 2. 字符串长度

字符串长度可以通过 `.length` 获取。

```scala
val s = "hello"
println(s.length)
```

结果：

```text
5
```

---

### 3. 字符串拼接

Scala 中可以用 `+` 拼接字符串。

```scala
val s = "hello"
val line = "-" + s + "-"
```

结果：

```text
-hello-
```

---

### 4. 输出带边框字符串

课堂示例的核心思想：

```scala
val s = "hello"
val border = "-" * (s.length + 2)

println(border)
println("-" + s + "-")
println(border)
```

输出：

```text
-------
-hello-
-------
```

解释：

- `s.length` 是 5；
- 两侧各加一个横杠，所以总长度是 7；
- `border` 是 7 个横杠；
- 中间一行是 `-hello-`。

---

### 5. 函数显式声明

老师建议可以使用更明确的函数写法，把返回值类型写清楚。

例如：

```scala
def box(s: String): Unit = {
  val border = "-" * (s.length + 2)
  println(border)
  println("-" + s + "-")
  println(border)
}
```

解释：

- `s: String` 是参数；
- `: Unit` 表示没有有意义的返回值；
- 函数主要作用是打印图形。

---

### 6. 1 到 10 加法作业

作业要求：

- 用 Java 写 1 到 10 的加法代码；
- 用 Scala 写 1 到 10 的加法代码；
- 写函数即可。

Scala 可以写成：

```scala
def sum(n: Int): Int = {
  var result = 0
  for (i <- 1 to n) {
    result = result + i
  }
  result
}
```

---

### 7. 求和函数常见错误

课堂中提到几个常见错误：

1. 把变量写在函数名位置；
2. 函数最后没有返回 `sum` 或 `result`；
3. 使用了输出但没有返回值；
4. 变量名和函数名相同；
5. 循环体写完后没有把结果作为最后一行。

---

### 8. 最后一行作为返回值

Scala 中函数体最后一行通常作为返回值。

正确写法：

```scala
def sum(n: Int): Int = {
  var result = 0
  for (i <- 1 to n) {
    result = result + i
  }
  result
}
```

这里最后一行 `result` 就是函数返回值。

---

### 9. 变量名不能和函数名混淆

如果函数名叫 `sum`，内部变量也叫 `sum`，容易混乱或产生错误。

建议：

```scala
def sum(n: Int): Int = {
  var result = 0
  for (i <- 1 to n) {
    result = result + i
  }
  result
}
```

用 `result` 作为内部变量更清楚。

---

### 10. 递归求和

递归是函数调用自己。

```scala
def sum(i: Int): Int = {
  if (i == 0) 0 else i + sum(i - 1)
}
```

计算 `sum(10)` 的过程：

```text
sum(10)
= 10 + sum(9)
= 10 + 9 + sum(8)
...
= 10 + 9 + ... + 1 + sum(0)
= 55
```

---

### 11. 递归的终止条件

递归必须有终止条件。

在这个例子中：

```scala
if (i == 0) 0
```

就是终止条件。

如果没有终止条件，函数会一直调用自己，导致错误。

---

### 12. `1 to 10` 是范围

Scala 中：

```scala
1 to 10
```

表示从 1 到 10 的范围。

它可以用在 for 循环中，也可以直接调用一些集合方法。

---

### 13. 直接调用 sum

Scala 的范围或集合可以直接调用 `.sum`。

```scala
val result = (1 to 10).sum
```

结果：

```text
55
```

这比手写循环或递归更简单。

---

### 14. Scala 数组与 range

课堂中提到，Scala 中的 range 或类似结构可以看成一组数列。和 Java 数组不同，Scala 提供了更丰富的方法，例如 `.sum`。

---

## 三、代码示例

### 示例 1：字符串重复

```scala
val line = "-" * 7
println(line)
```

输出：

```text
-------
```

---

### 示例 2：输出 hello 边框

```scala
val s = "hello"
val border = "-" * (s.length + 2)

println(border)
println("-" + s + "-")
println(border)
```

输出：

```text
-------
-hello-
-------
```

---

### 示例 3：显式声明 box 函数

```scala
def box(s: String): Unit = {
  val border = "-" * (s.length + 2)
  println(border)
  println("-" + s + "-")
  println(border)
}
```

解释：这个函数只负责输出图形，因此返回值类型是 `Unit`。

---

### 示例 4：循环求和

```scala
def sum(n: Int): Int = {
  var result = 0
  for (i <- 1 to n) {
    result = result + i
  }
  result
}
```

解释：最后一行 `result` 是返回值。

---

### 示例 5：递归求和

```scala
def sum(i: Int): Int = {
  if (i == 0) 0 else i + sum(i - 1)
}
```

解释：如果 i 等于 0，返回 0；否则返回 `i + sum(i - 1)`。

---

### 示例 6：直接使用集合 sum

```scala
val result = (1 to 10).sum
```

解释：`1 to 10` 是范围，可以直接调用 `.sum` 求和。

---

## 四、小测验

### 题目 1

`"hello".length` 的结果是多少？

A. 3  
B. 4  
C. 5  
D. 7  

**正确答案**：C  
**解析**：hello 有 5 个字母，所以长度是 5。

---

### 题目 2

Scala 中 `"-" * 7` 的含义是什么？

A. 数学乘法  
B. 字符串重复 7 次  
C. 删除字符串  
D. 创建对象  

**正确答案**：B  
**解析**：字符串乘数字表示重复字符串。

---

### 题目 3

如果函数主要用于输出，不返回有意义的值，返回类型通常写什么？

A. Int  
B. String  
C. Unit  
D. Double  

**正确答案**：C  
**解析**：Unit 类似 Java 中的 void，表示没有有意义的返回值。

---

### 题目 4

递归函数必须有什么？

A. 终止条件  
B. 图片  
C. 数据库  
D. 压缩包  

**正确答案**：A  
**解析**：递归必须有终止条件，否则会无限调用。

---

### 题目 5

`(1 to 10).sum` 的结果是多少？

A. 10  
B. 45  
C. 55  
D. 100  

**正确答案**：C  
**解析**：1 到 10 相加结果为 55。

---

## 五、拖拽匹配内容

| 左侧概念 | 右侧解释 |
|---|---|
| `s.length` | 字符串长度 |
| `"-" * 7` | 字符串重复 7 次 |
| `+` | 字符串拼接 |
| `Unit` | 无有意义返回值 |
| `def sum` | 定义求和函数 |
| `result` | 保存累计结果 |
| 递归 | 函数调用自己 |
| 终止条件 | 防止递归无限执行 |
| `1 to 10` | 从 1 到 10 的范围 |
| `.sum` | 直接求和 |

---

## 六、流程动画建议

### 流程 1：输出 hello 边框

```text
定义字符串 s = hello
↓
计算 s.length = 5
↓
边框长度 = 5 + 2
↓
生成 7 个横杠
↓
输出上边框
↓
输出 -hello-
↓
输出下边框
```

### 流程 2：递归求和

```text
调用 sum(10)
↓
转换为 10 + sum(9)
↓
继续转换为 9 + sum(8)
↓
一直到 sum(0)
↓
sum(0) 返回 0
↓
逐层相加返回
↓
得到 55
```

---

## 七、练习题

### 练习 1

请用 Scala 输出 7 个横杠。

参考答案：

```scala
println("-" * 7)
```

---

### 练习 2

请写一个 `box` 函数，输出带边框的字符串。

参考答案：

```scala
def box(s: String): Unit = {
  val border = "-" * (s.length + 2)
  println(border)
  println("-" + s + "-")
  println(border)
}
```

---

### 练习 3

请写一个循环函数，计算 1 到 n 的和。

参考答案：

```scala
def sum(n: Int): Int = {
  var result = 0
  for (i <- 1 to n) {
    result = result + i
  }
  result
}
```

---

### 练习 4

请写一个递归函数，计算 1 到 n 的和。

参考答案：

```scala
def sum(i: Int): Int = {
  if (i == 0) 0 else i + sum(i - 1)
}
```

---

### 练习 5

请用一行 Scala 代码计算 1 到 10 的和。

参考答案：

```scala
val result = (1 to 10).sum
```

---

## 八、课后总结

1. 本节课讲解了字符串重复和字符串拼接。
2. 字符串可以通过 `.length` 获取长度。
3. `"-" * 7` 表示将横杠重复 7 次。
4. 可以用字符串拼接输出简单图形。
5. 函数如果主要用于输出，可以声明返回类型为 `Unit`。
6. 求和函数最后一行要返回结果变量。
7. 变量名不要和函数名混淆。
8. 递归是函数调用自己，必须有终止条件。
9. `1 to 10` 可以表示一个范围。
10. Scala 可以直接用 `(1 to 10).sum` 求和。
11. 作业是用 Java 和 Scala 分别实现 1 到 10 加法代码。
