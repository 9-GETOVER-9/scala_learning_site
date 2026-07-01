# 课程总结

## 1. 课程基本信息

- **课程 ID 建议**：`scala-04-block-expression-if-loop`
- **课程标题**：Scala 语句、表达式、Block 与循环入门
- **所属章节**：Scala 运算符与表达式 / Scala 流程控制
- **上课日期**：2026-03-05（第二节课 16:05-17:00）
- **知识点标签**：语句、表达式、Block、if 表达式、print、println、for、while、区间
- **难度等级**：初级
- **适合对象**：已经理解 var/val、函数、元组的 Scala 初学者
- **本节课一句话概括**：本节课围绕“语句和表达式的区别”展开，重点讲解 Block 的返回值、if 表达式、打印输出以及 for/while 循环的基础规则。

---

## 2. 课堂摘要

1. 本节课首先解释了“语句”和“表达式”的区别，强调 Scala 中很多结构都不是单纯的语句，而是有值的表达式。
2. 课堂中重点讲解了 Block 表达式：大括号包裹的一段代码序列也会有值，并且它的值等于最后一行。
3. 老师通过 `print` 和 `println` 的区别说明了输出语句的基本用法，以及换行符的作用。
4. 本节课进一步对比了 Java/C++ 和 Scala 的分号规则，说明 Scala 大多数情况下可以省略分号。
5. 老师讲解了 if/else 在 Scala 中不仅能做判断，还能作为表达式直接返回结果。
6. 最后介绍了 for 循环、while 循环以及 `to` / `until` 区间的区别，并提醒学生后面要反复练习。

---

## 3. 本节课学习目标

学完本节课后，你应该能够：

1. 分清 Scala 中“语句”和“表达式”的区别，知道表达式是有值的。
2. 理解 Block 表达式的返回值规则，知道最后一行就是整个 Block 的值。
3. 正确使用 `print` 和 `println` 输出内容，并知道两者的区别。
4. 理解 if/else 在 Scala 中不仅是控制流程，也可以返回结果。
5. 写出基本的 for 循环和 while 循环。
6. 区分 `to` 和 `until` 的范围差异，避免循环边界错误。

---

## 4. 知识点详细整理

### 知识点 1：语句与表达式的区别

#### 这个知识点是什么？

在 Scala 中，很多代码结构都可以看成“表达式”，表达式是有值的。与之相对的是“语句”，语句更像执行动作，但不一定直接产生值。Scala 比 Java 更强调“表达式思维”。

#### 为什么要学它？

理解表达式是 Scala 语言的核心。后面你会发现 if、Block、函数体、for 推导式等都可能返回值。如果一开始把它们都当成“只是执行动作”，后面会很难理解 Scala 的简洁写法。

#### 基本语法

```scala
val x = if (1 > 0) 1 else -1
```

这里 `if` 整体就是一个表达式，结果可以赋值给变量。

#### 课堂中的理解方式

老师举了一个判断例子：如果 `X > 0`，结果可能是 `1`；否则结果是 `-1`。也就是说，这个判断本身不是“只做判断”，而是会产生一个结果值。老师借此说明 Scala 中“判断也是表达式”。

#### 初学者容易犯的错误

1. 把 Scala 中的 if 当成 Java 风格的纯语句。
2. 以为只有 `return` 才能拿到值。
3. 不知道表达式可以直接赋给变量。

#### 正确示例

```scala
object ExpressionDemo {
  def main(args: Array[String]): Unit = {
    val x = 10
    val result = if (x > 0) 1 else -1
    println(result)
  }
}
```

#### 示例解释

- `if (x > 0) 1 else -1` 会根据条件返回不同的数值。
- 这个表达式的结果被赋给 `result`。
- 最后输出 `1`。

---

### 知识点 2：Block 表达式——最后一行就是结果

#### 这个知识点是什么？

Block 是用大括号 `{}` 包起来的一段代码。Scala 中 Block 也是表达式，所以它有返回值，返回值就是 Block 里的最后一行。

#### 为什么要学它？

Block 是 Scala 代码组织的重要方式。你可以在一个表达式里完成多步计算，再把最后结果返回给外部变量。

#### 基本语法

```scala
val result = {
  val a = 10
  val b = 20
  a + b   // 最后一行就是返回值
}
```

#### 课堂中的理解方式

老师把 Block 解释成“语句序列”，也说它像“缺少函数名的函数”。意思是：你没有显式写 `def`，但大括号里面依然是一个完整的、会返回值的计算过程。

老师特别强调：**如果 Block 最后一行是一个赋值或 println，那么返回值就会变成 Unit。**

#### 初学者容易犯的错误

1. 以为大括号只是“代码块”，没有返回值。
2. 在 Block 最后一行写了 `println`，却以为返回的是打印的内容。
3. 不理解最后一行才是 Block 的值。

#### 正确示例

```scala
object BlockDemo {
  def main(args: Array[String]): Unit = {
    val sum = {
      val x = 3
      val y = 4
      x + y
    }
    println(sum)
  }
}
```

#### 示例解释

- `x + y` 是最后一行，所以整个 Block 的值是 7。
- 这个值被赋给 `sum`。
- `println(sum)` 输出 7。

---

### 知识点 3：print 和 println 的区别

#### 这个知识点是什么？

`print` 和 `println` 都用于输出内容，区别是 `println` 会在输出后自动换行，`print` 不会换行。

#### 为什么要学它？

这是最基础的输入输出操作。写程序时，经常需要控制输出格式，尤其是循环中打印列表、表格、乘法表时，换行非常重要。

#### 基本语法

```scala
print("Hello")
println("World")
```

#### 课堂中的理解方式

老师明确指出：`println` 比 `print` 多了一个换行符。也就是说，`println` 会把光标带到下一行，`print` 则继续在当前行输出。

#### 初学者容易犯的错误

1. 循环打印时全部用 `println`，导致每个字符都换行。
2. 以为 `print` 和 `println` 没区别。
3. 在需要整齐格式输出时没有控制换行。

#### 正确示例

```scala
object PrintDemo {
  def main(args: Array[String]): Unit = {
    print("A")
    print("B")
    println("C")
    println("D")
  }
}
```

#### 示例解释

- `print("A")` 输出 A，不换行。
- `print("B")` 接着在同一行输出 B。
- `println("C")` 输出 C 后换行。
- `println("D")` 在下一行输出 D。

---

### 知识点 4：Scala 中分号可省略

#### 这个知识点是什么？

Scala 的大多数语句结尾不需要写分号 `;`。只有在同一行写多个语句时，才可能用分号分隔。

#### 为什么要学它？

这是 Scala 语法简洁性的体现。少写分号可以让代码更清爽，但也要求你理解“换行是否结束语句”的规则。

#### 基本语法

```scala
val a = 10
val b = 20
val c = a + b
```

同一行多个语句时：

```scala
val a = 10; val b = 20; val c = a + b
```

#### 课堂中的理解方式

老师把 Scala 和 Java/C++ 做了对比：
- Java/C++ 的语句通常以分号结束。
- Scala 通常不需要分号。
- 如果同一行写多个语句，可以用分号分隔。

老师还提醒：如果一行没有写完（例如后面还有加号），编译器会把它视作下一行继续，不会轻易断开。

#### 初学者容易犯的错误

1. 以为 Scala 必须每行都写分号。
2. 误把换行当成语句结束，但前一行其实还没写完。
3. 在一行多个语句时忘记加分号，导致解析错误。

#### 正确示例

```scala
object SemicolonDemo {
  def main(args: Array[String]): Unit = {
    val a = 10; val b = 20; val c = a + b
    println(c)
  }
}
```

#### 示例解释

- 同一行写了 3 个语句，用分号隔开。
- Scala 允许这样写，但平时更推荐每个语句独占一行。

---

### 知识点 5：if 表达式——判断也能返回值

#### 这个知识点是什么？

Scala 中的 `if ... else ...` 不仅可以做条件判断，还可以作为表达式返回结果，并被赋值给变量。

#### 为什么要学它？

这是 Scala 与 Java 很不一样的地方。Java 中 if 常常只是控制流程；Scala 中 if 还能像函数一样“产出一个值”。

#### 基本语法

```scala
val result = if (x > 0) 1 else -1
```

或者：

```scala
val message = if (score >= 60) "及格" else "不及格"
```

#### 课堂中的理解方式

老师用“缺勤判断”举例：
- 如果人到了，就返回某个结果；
- 如果人没到，就返回另一个结果。

老师强调：这就是“if 表达式有值”的意思。你不是单纯做判断，而是在“判断之后产出一个结果”。

#### 初学者容易犯的错误

1. 以为 `if` 必须配合 `println` 才有意义。
2. 只写 `if` 不写 `else`，导致表达式值不完整。
3. 以为 if 表达式不能赋值给变量。

#### 正确示例

```scala
object IfExpressionDemo {
  def main(args: Array[String]): Unit = {
    val x = -3
    val result = if (x > 0) 1 else -1
    println(result)
  }
}
```

#### 示例解释

- 当 `x > 0` 为真时，结果是 1。
- 否则结果是 -1。
- 整个 if 表达式被赋值给 `result`。

---

### 知识点 6：for 循环和 while 循环的基础形式

#### 这个知识点是什么？

Scala 提供 `for` 和 `while` 两种循环结构。
- `for` 常用于遍历范围或集合。
- `while` 常用于“条件满足时重复执行”。

#### 为什么要学它？

循环是程序中处理重复任务的基础。后面学习集合、数组、推导式时，for 循环会非常常见。

#### 基本语法

```scala
// for 循环
for (i <- 1 to 5) {
  println(i)
}

// while 循环
var i = 1
while (i <= 5) {
  println(i)
  i += 1
}
```

#### 课堂中的理解方式

老师把 while 解释为：只要条件成立，就继续执行。for 则更像“按照给定范围去取值”。

老师还提醒：Scala 的 for 后面会越来越复杂，后面会加守卫（if 筛选）、多生成器、yield 等，因此这节课只先掌握最基础的循环骨架。

#### 初学者容易犯的错误

1. while 循环里忘记修改循环变量，导致死循环。
2. for 循环写成 Java 风格三段式。
3. 不理解 while 和 for 的适用场景。

#### 正确示例

```scala
object LoopDemo {
  def main(args: Array[String]): Unit = {
    println("for 循环：")
    for (i <- 1 to 3) {
      println(i)
    }

    println("while 循环：")
    var j = 1
    while (j <= 3) {
      println(j)
      j += 1
    }
  }
}
```

#### 示例解释

- `for (i <- 1 to 3)`：循环输出 1、2、3。
- `while (j <= 3)`：条件成立时输出并让 j 自增。
- while 循环一定要让条件最终变成 false，否则会一直执行。

---

### 知识点 7：区间——to 与 until

#### 这个知识点是什么？

Scala 中常用 `to` 和 `until` 表示区间。
- `to`：闭区间，包含终点。
- `until`：左闭右开，不包含终点。

#### 为什么要学它？

循环边界经常出错，`to` 和 `until` 是考试和实战中最常见的细节之一。

#### 基本语法

```scala
1 to 5     // 1,2,3,4,5
1 until 5  // 1,2,3,4
```

#### 课堂中的理解方式

老师用数学区间来解释：
- `to` 对应闭区间 `[1, 5]`
- `until` 对应半开半闭区间 `[1, 5)`

老师特别提醒：这个区别会直接影响循环次数。

#### 初学者容易犯的错误

1. 把 `until` 当成包含终点。
2. 写范围时忘记终点是否被包含。
3. 只看代码不看输出次数。

#### 正确示例

```scala
object RangeDemo {
  def main(args: Array[String]): Unit = {
    for (i <- 1 to 5) println(i)     // 1 2 3 4 5
    for (i <- 1 until 5) println(i)  // 1 2 3 4
  }
}
```

#### 示例解释

- `to` 包含 5。
- `until` 不包含 5。
- 两者只差一个终点，但输出结果不同。

---

## 5. 重点概念对比

| 概念 A | 概念 B | 区别 | 示例 |
|--------|--------|------|------|
| 语句 | 表达式 | 表达式有值，语句更偏执行动作 | `if (...) 1 else -1` 是表达式 |
| print | println | println 会换行，print 不换行 | `print("A")` vs `println("A")` |
| to | until | to 包含终点，until 不包含终点 | `1 to 5` vs `1 until 5` |
| for | while | for 适合遍历范围/集合，while 适合条件重复执行 | `for (i <- 1 to 3)` vs `while (i <= 3)` |
| Java if | Scala if 表达式 | Java if 常是流程控制；Scala if 可直接返回值 | `val r = if (...) 1 else 0` |
| Java 分号 | Scala 分号 | Java 分号通常必须写；Scala 通常可省略 | `val a = 1` |

---

## 6. 代码示例整理

### 示例 1：if 表达式返回值

适用知识点：

```text
if 表达式、变量赋值、条件判断
```

代码：

```scala
object IfValueDemo {
  def main(args: Array[String]): Unit = {
    val score = 78
    val result = if (score >= 60) "及格" else "不及格"
    println(result)
  }
}
```

运行结果：

```text
及格
```

代码解释：

1. `score` 是 78。
2. `if (score >= 60)` 条件为真。
3. 所以表达式返回 `"及格"`。
4. `result` 接收这个值并输出。

初学者提示：

```text
Scala 中 if 不是“只判断不返回”，它本身就可以是一个值。
```

---

### 示例 2：Block 表达式计算距离

适用知识点：

```text
Block、最后一行返回值、math.sqrt
```

代码：

```scala
object BlockDistance {
  def main(args: Array[String]): Unit = {
    val distance = {
      val dx = 6
      val dy = 8
      math.sqrt(dx * dx + dy * dy)
    }
    println(distance)
  }
}
```

运行结果：

```text
10.0
```

代码解释：

1. Block 里面先定义 `dx` 和 `dy`。
2. 最后一行计算平方和开根号。
3. 结果 10.0 作为整个 Block 的值返回。

初学者提示：

```text
Block 不只是“代码圈起来”，它是真的会返回一个结果。
```

---

### 示例 3：for 和 while 输出 1 到 5

适用知识点：

```text
for、while、to、print/println
```

代码：

```scala
object LoopCompare {
  def main(args: Array[String]): Unit = {
    println("for 循环：")
    for (i <- 1 to 5) {
      print(i + " ")
    }
    println()

    println("while 循环：")
    var i = 1
    while (i <= 5) {
      print(i + " ")
      i += 1
    }
    println()
  }
}
```

运行结果：

```text
for 循环：1 2 3 4 5 
while 循环：1 2 3 4 5 
```

代码解释：

1. `for (i <- 1 to 5)` 遍历范围。
2. `while (i <= 5)` 通过条件重复执行。
3. `print` 不换行，所以数字会连在同一行。

初学者提示：

```text
while 一定要记得让循环变量变化，否则会死循环。
```

---

## 7. 课堂案例整理

### 案例 1：签到判断

- **案例名称**：来没来上课的判断
- **对应知识点**：if 表达式、Block 返回值
- **案例背景**：老师用“是否到场签到”来比喻 if 判断：如果来了，返回一个结果；如果没来，返回另一个结果。
- **解决思路**：用 if 表达式直接返回“签到成功 / 未签到”这类结果。
- **Scala 代码或伪代码**：

```scala
val status = if (arrived) "已签到" else "未签到"
```

- **这个案例帮助理解什么**：理解 if 不只是“执行”，还会“返回结果”。

### 案例 2：输出乘法表

- **案例名称**：用循环输出 3 的乘法表
- **对应知识点**：for 循环、print/println
- **案例背景**：老师提到循环最重要的用途之一就是处理重复动作，乘法表就是典型例子。
- **解决思路**：用 for 循环从 1 到 9，逐行输出乘法结果。
- **Scala 代码或伪代码**：

```scala
for (i <- 1 to 9) {
  println("3 × " + i + " = " + (3 * i))
}
```

- **这个案例帮助理解什么**：理解循环是“重复执行同一逻辑”的工具。

---

## 8. 易错点总结

**易错点 1：把 if 当成纯语句**

```text
错误示例：
if (x > 0) println(1) else println(-1)

正确写法：
val result = if (x > 0) 1 else -1

解释：
Scala 中 if 可以直接作为表达式返回值。
```

**易错点 2：Block 最后一行写成 println**

```text
错误示例：
val r = {
  val a = 1
  println(a)
}

正确写法：
val r = {
  val a = 1
  a
}

解释：
Block 的返回值是最后一行，println 返回 Unit，不是你想要的数字。
```

**易错点 3：分号规则使用错误**

```text
错误示例：
val a = 1
val b = 2; val c = 3

正确写法：
val a = 1
val b = 2
val c = 3

解释：
Scala 一般不需要分号，平时一行一个语句最清晰。
```

**易错点 4：for 循环写成 Java 风格**

```text
错误示例：
for (int i = 0; i < 10; i++)

正确写法：
for (i <- 0 until 10)

解释：
Scala for 循环使用生成器语法，不用 Java 的三段式写法。
```

**易错点 5：to 和 until 边界搞混**

```text
错误示例：
for (i <- 1 until 5)   // 以为包含 5，实际上不包含

正确写法：
for (i <- 1 to 5)      // 包含 5

解释：
to 是闭区间，until 是左闭右开区间。
```

---

## 9. 小测验题目

**题目 1**：Scala 中，下面哪个结构是有值的？

A. 只有 `return` 才有值
B. if 表达式
C. 只有 print 才有值
D. 只有 while 才有值

**正确答案**：B

**解析**：Scala 中 if 可以作为表达式直接返回值。

---

**题目 2**：下面代码运行后，`r` 的值是什么？

```scala
val r = {
  val x = 2
  val y = 3
  x * y
}
```

A. 2
B. 3
C. 5
D. 6

**正确答案**：D

**解析**：Block 的最后一行是 `x * y`，结果为 6。

---

**题目 3**：以下哪个语句会在输出后换行？

A. print("Hello")
B. println("Hello")
C. printline("Hello")
D. echo("Hello")

**正确答案**：B

**解析**：`println` 会自动换行，`print` 不会。

---

**题目 4**：下面哪个循环会输出 1 到 4？

A. `for (i <- 1 to 4)`
B. `for (i <- 1 until 4)`
C. `for (i <- 0 to 4)`
D. `for (i <- 0 until 4)`

**正确答案**：B

**解析**：`1 until 4` 输出 1、2、3，不包含 4。若要输出 1 到 4，用 `to`。

---

**题目 5**：下面关于 Scala 分号的说法，正确的是？

A. 每行末尾都必须写分号
B. 只有 while 语句后面必须写分号
C. Scala 大多数情况下可以省略分号
D. Scala 不允许在一行写多个语句

**正确答案**：C

**解析**：Scala 通常可以省略分号，只有一行多个语句时才可能需要用分号分隔。

---

## 10. 拖拽匹配素材

```text
1. 表达式 —— 有值的代码结构，可以被赋给变量
2. Block —— 大括号包裹的代码块，值是最后一行
3. print —— 输出内容但不换行
4. println —— 输出内容并换行
5. for —— 遍历范围或集合的循环
6. while —— 条件成立就重复执行的循环
7. to —— 闭区间，包含终点
8. until —— 左闭右开区间，不包含终点
```

---

## 11. 流程动画素材

```text
1. 程序执行到 if 表达式。
2. 判断条件是否成立（true 或 false）。
3. 如果为 true，执行 if 分支；如果为 false，执行 else 分支。
4. if 表达式返回一个结果值。
5. 这个结果被赋给变量。
6. 程序继续往下执行。
```

---

## 12. 课后练习题

**练习 1**：编写一个程序，用 if 表达式判断一个整数是正数还是非正数，并输出结果。

**考查知识点**：if 表达式、条件判断、字符串输出

**参考答案**：

```scala
object PositiveCheck {
  def main(args: Array[String]): Unit = {
    val n = -8
    val result = if (n > 0) "正数" else "非正数"
    println(result)
  }
}
```

**解题思路**：先定义一个整数，再用 if 表达式返回不同字符串。

---

**练习 2**：用 Block 表达式计算 10 和 20 的和，并把结果赋值给变量。

**考查知识点**：Block、最后一行返回值、val

**参考答案**：

```scala
object BlockSum {
  def main(args: Array[String]): Unit = {
    val sum = {
      val a = 10
      val b = 20
      a + b
    }
    println(sum)
  }
}
```

**解题思路**：用大括号包起来，让最后一行成为返回值。

---

**练习 3**：分别使用 `print` 和 `println` 输出字符串 `Scala` 和 `Course`，观察输出效果。

**考查知识点**：print、println

**参考答案**：

```scala
object PrintTest {
  def main(args: Array[String]): Unit = {
    print("Scala")
    print("Course")
    println(" End")
  }
}
```

**解题思路**：`print` 不换行，`println` 换行，观察光标位置即可。

---

**练习 4**：用 for 循环输出 1 到 10 的偶数。

**考查知识点**：for、to、if、步长

**参考答案**：

```scala
object EvenNumbers {
  def main(args: Array[String]): Unit = {
    for (i <- 1 to 10 if i % 2 == 0) {
      println(i)
    }
  }
}
```

**解题思路**：用 `if` 过滤奇数，只输出偶数。

---

**练习 5**：用 while 循环输出 5 次 `Hello Scala`。

**考查知识点**：while、循环变量、自增

**参考答案**：

```scala
object WhileDemo {
  def main(args: Array[String]): Unit = {
    var i = 1
    while (i <= 5) {
      println("Hello Scala")
      i += 1
    }
  }
}
```

**解题思路**：定义计数器 `i`，每次循环后自增 1，直到不满足条件为止。

---

## 13. 本节课知识结构图文字版

```text
Scala 第四课——语句、表达式、Block 与循环
├── 语句与表达式
│   ├── 表达式有值
│   ├── if 可以是表达式
│   └── 结果可以赋给变量
├── Block 表达式
│   ├── 大括号包裹的代码序列
│   ├── 最后一行是返回值
│   └── 可用于局部计算
├── 输入输出
│   ├── print（不换行）
│   └── println（换行）
├── 分号规则
│   ├── Scala 大多可省略分号
│   └── 同一行多个语句可用分号分隔
├── 流程控制
│   ├── if/else
│   ├── for 循环
│   └── while 循环
└── 区间
    ├── to（闭区间）
    └── until（左闭右开）
```

---

## 14. 后续生成网页时可使用的数据建议

- **建议课程 ID**：`scala-04-block-expression-if-loop`
- **建议课程标题**：Scala 语句、表达式、Block 与循环入门
- **建议章节**：Scala 运算符与表达式 / Scala 流程控制
- **建议标签**：语句、表达式、Block、if、print、println、for、while、to、until
- **适合放入 summary 的内容**：6 条课堂摘要
- **适合放入 keyPoints 的内容**：7 个知识点的标题和简短解释
- **适合放入 codeExamples 的内容**：3 个代码示例
- **适合放入 quiz 的内容**：5 道选择题
- **适合放入 dragMatch 的内容**：8 组匹配素材
- **适合放入 flow 的内容**：6 步 if 表达式流程
- **适合放入 exercises 的内容**：5 道练习题
- **适合放入 conclusion 的内容**：5 条课后总结

---

## 15. 课后总结

1. 本节课的核心是让你明白：**Scala 很多结构都是表达式**，不是只做动作而没有结果。

2. 学习 Scala 时要特别注意 **Block 的最后一行**，这是非常重要的规则，后面写函数、写推导式时都会频繁用到。

3. 通过本节课，你应该能够正确使用 `print` / `println`，并写出基础的 `if`、`for`、`while` 代码。

4. `to` 和 `until` 是非常容易出错的地方，建议课后多用几个数字自己验证一遍输出结果。

5. 课后建议多练习：自己写 if 表达式做判断、用 Block 计算结果、用 for/while 输出数字。熟悉这些基础，后面学更复杂的集合循环才不会乱。
