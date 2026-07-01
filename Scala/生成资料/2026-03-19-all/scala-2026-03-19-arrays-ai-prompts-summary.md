# 编程数组知识及AI使用技巧讲解

## 课程信息

- **课程标题**：编程数组知识及AI使用技巧讲解
- **上课日期**：2026-03-19
- **上课时间**：15:15
- **所属章节**：第五章 Scala 集合与数组
- **建议课程 ID**：`scala-2026-03-19-arrays-ai-prompts`
- **页面访问地址**：`lesson.html?id=scala-2026-03-19-arrays-ai-prompts`

---

## 一、课堂摘要

本节课主要讲解 Scala 与 Java 中数组的区别，包括数组声明方式、取值方式、数组下标、二维数组、定长数组和变长数组。同时，课堂还扩展讲解了 AI 高阶使用技巧，尤其是如何通过更好的提示词让 AI 产出更有深度的内容。

老师首先提醒同学第四周开始线上课，需要按群内要求完成学习和打卡。随后进入数组知识讲解。Java 中数组通常通过类型加方括号来声明，例如 `int[] a`；而 Scala 中更常见的写法是通过 `new Array[Int](3)` 这样的方式创建数组。Scala 中数组取值使用圆括号，例如 `a(0)`，而 Java 中使用方括号，例如 `a[0]`。

课堂中特别强调数组下标从 0 开始，而之前学过的元组是从 1 开始取值。老师还讲到二维数组与矩阵、样本相乘、行列维度有关，进行数据计算时维度方向非常关键。

后半部分讲解了变长数组 `ArrayBuffer`。与定长数组不同，`ArrayBuffer` 可以不断追加元素，常用操作包括 `+=`、`++=` 和 `trimEnd`。老师结合大数据和网页爬取场景说明，变长数组和字符串截取在实际数据处理中很常见。

最后，老师分享了 AI 使用技巧。不要只问低阶记忆型问题，而要使用高阶思考提示词，让 AI 帮助分析、评价、创造和构建框架。例如可以让 AI 用麦肯锡顾问式框架分析问题，从而生成更专业、更有层次的内容。

---

## 二、核心知识点

### 1. 线上课安排与打卡

老师提醒第四周开始有线上课，需要注意：

- 按群内通知进入课程；
- 按要求完成学习；
- 注意线上课打卡；
- 不要只用手机随意看，要认真听课；
- 建议打开笔记本，手机放旁边辅助签到或查看通知。

---

### 2. Java 数组声明方式

Java 中声明数组通常使用类型和方括号。

```java
int[] a = new int[3];
```

解释：

- `int` 表示数组中元素是整数；
- `[]` 表示这是数组；
- `a` 是数组名；
- `new int[3]` 表示创建长度为 3 的数组。

---

### 3. Scala 数组声明方式

Scala 中创建数组常见写法：

```scala
val a = new Array[Int](3)
```

解释：

- `Array` 明确表示数组；
- `[Int]` 表示数组元素类型是整数；
- `(3)` 表示数组长度为 3；
- `a` 的类型由右边的 `new Array[Int](3)` 决定。

---

### 4. Java 与 Scala 数组声明思想区别

Java 更强调“类型在前”。

```java
int[] a = new int[3];
```

Scala 更强调“变量名先出现，类型由后面的值决定”。

```scala
val a = new Array[Int](3)
```

这体现了 Scala 中类型推导和表达式风格的特点。

---

### 5. Scala 数组取值方式

Scala 数组使用圆括号取值。

```scala
val a = new Array[Int](3)
a(0) = 10
println(a(0))
```

这里的 `a(0)` 表示取数组第一个元素。

---

### 6. Java 数组取值方式

Java 数组使用方括号取值。

```java
int[] a = new int[3];
a[0] = 10;
System.out.println(a[0]);
```

Java 中 `a[0]` 表示第一个元素。

---

### 7. 数组下标从 0 开始

无论 Java 还是 Scala，数组下标通常从 0 开始。

```text
a(0) 第一个元素
a(1) 第二个元素
a(2) 第三个元素
```

注意：

- 数组从 0 开始；
- 元组从 1 开始；
- 数学矩阵常写 A11、A12，与程序下标不完全一致。

---

### 8. 元组和数组下标区别

元组取值：

```scala
val t = (1, "Scala")
println(t._1)
```

数组取值：

```scala
val a = new Array[Int](3)
println(a(0))
```

区别：

- 元组从 `_1` 开始；
- 数组从 `0` 开始；
- 两者不要混淆。

---

### 9. 二维数组与矩阵

二维数组可以理解为行和列组成的数据结构。

```scala
val matrix = Array.ofDim[Int](3, 3)
matrix(0)(0) = 1
```

在数学中常写作：

```text
A11 A12 A13
A21 A22 A23
A31 A32 A33
```

在程序中通常对应：

```text
matrix(0)(0)
matrix(0)(1)
matrix(0)(2)
```

---

### 10. 维度方向很重要

老师强调，在样本相乘或矩阵计算中，维度方向非常关键。

例如：

- 横向数据和纵向数据能不能相乘；
- 行列是否对应；
- 样本是否需要转置；
- 结果维度是否正确。

这与之前讲过的矩阵转置、样本空间、属性列都有关系。

---

### 11. 定长数组

定长数组创建后长度固定。

```scala
val nums = new Array[Double](3)
```

解释：

- `nums` 是数组名；
- `Double` 表示元素类型是小数；
- 长度为 3；
- 创建后长度不能随意增长。

---

### 12. 变长数组 ArrayBuffer

变长数组可以动态追加元素。

```scala
import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer[Int]()
buffer += 1
buffer += 2
buffer += 3
```

`ArrayBuffer` 适合元素数量不确定的情况。

---

### 13. `+=` 追加元素

`+=` 可以向 `ArrayBuffer` 追加一个元素。

```scala
buffer += 4
```

表示把 `4` 添加到数组缓冲区末尾。

---

### 14. `++=` 追加多个元素

`++=` 可以一次追加多个元素或追加另一个集合。

```scala
buffer ++= Array(5, 6, 7)
```

表示把 `5`、`6`、`7` 一起追加进去。

---

### 15. `trimEnd` 截取末尾元素

`trimEnd` 可以从末尾删除指定数量的元素。

```scala
buffer.trimEnd(2)
```

表示删除末尾两个元素。

在数据清洗、字符串截取、网页爬取结果处理中，类似操作很常见。

---

### 16. AI 高阶使用技巧

老师提醒同学，不要只问 AI 低阶问题，例如：

```text
什么是数组？
```

更好的提问方式是让 AI 分析、比较、评价和创造，例如：

```text
请用适合初学者的方式，对比 Java 数组和 Scala 数组的声明方式、取值方式、适用场景，并给出代码例子。
```

---

### 17. 麦肯锡式提示词

老师提到可以使用“麦肯锡顾问式”的提示词，让 AI 输出更结构化、更专业的内容。

例如：

```text
请你作为麦肯锡顾问，用问题拆解、关键假设、解决路径和执行建议四个部分，分析我应该如何学习 Scala 数组。
```

这种提示词比单纯问概念更有效。

---

## 三、代码示例

### 示例 1：Java 定义数组

```java
int[] a = new int[3];
a[0] = 10;
System.out.println(a[0]);
```

解释：Java 使用方括号声明和访问数组。

---

### 示例 2：Scala 定义定长数组

```scala
val a = new Array[Int](3)
a(0) = 10
println(a(0))
```

解释：Scala 用 `new Array[Int](3)` 创建长度为 3 的整数数组。

---

### 示例 3：Double 类型数组

```scala
val nums = new Array[Double](3)
nums(0) = 1.5
nums(1) = 2.5
nums(2) = 3.5
```

解释：这是一个长度为 3 的 Double 类型数组。

---

### 示例 4：二维数组

```scala
val matrix = Array.ofDim[Int](3, 3)
matrix(0)(0) = 1
matrix(0)(1) = 2
matrix(1)(0) = 3
```

解释：`Array.ofDim[Int](3, 3)` 可以创建 3 行 3 列的二维数组。

---

### 示例 5：ArrayBuffer 追加元素

```scala
import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer[Int]()
buffer += 1
buffer += 2
buffer += 3
```

解释：`ArrayBuffer` 可以动态追加元素。

---

### 示例 6：追加多个元素并删除末尾

```scala
import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer(1, 2, 3)
buffer ++= Array(4, 5, 6)
buffer.trimEnd(2)
```

解释：先追加 4、5、6，再删除末尾两个元素。

---

## 四、小测验

### 题目 1

Scala 中创建长度为 3 的 Int 数组，正确写法是？

A. `int[] a = new int[3]`  
B. `val a = new Array[Int](3)`  
C. `array int a 3`  
D. `new int a`  

**正确答案**：B  
**解析**：Scala 中常用 `new Array[Int](3)` 创建定长数组。

---

### 题目 2

Scala 数组取第一个元素应写成什么？

A. `a[1]`  
B. `a(1)`  
C. `a(0)`  
D. `a._1`  

**正确答案**：C  
**解析**：Scala 数组下标从 0 开始，并使用圆括号取值。

---

### 题目 3

Scala 元组第一个元素如何获取？

A. `t(0)`  
B. `t._1`  
C. `t[0]`  
D. `t.first`  

**正确答案**：B  
**解析**：Scala 元组从 `_1` 开始取值。

---

### 题目 4

ArrayBuffer 的特点是什么？

A. 长度固定  
B. 可以动态追加元素  
C. 只能保存字符串  
D. 不能修改  

**正确答案**：B  
**解析**：ArrayBuffer 是变长数组，可以动态添加元素。

---

### 题目 5

`buffer += 1` 的作用是什么？

A. 删除 1  
B. 添加元素 1  
C. 清空数组  
D. 创建二维数组  

**正确答案**：B  
**解析**：`+=` 可以向 ArrayBuffer 追加一个元素。

---

### 题目 6

更好的 AI 提问方式应该是什么？

A. 只问“是什么”  
B. 让 AI 分析、对比、评价并给例子  
C. 不给背景  
D. 只让 AI 输出一个词  

**正确答案**：B  
**解析**：高阶提示词可以让 AI 输出更有结构和深度的内容。

---

## 五、拖拽匹配内容

| 左侧概念 | 右侧解释 |
|---|---|
| `int[] a` | Java 数组声明 |
| `new Array[Int](3)` | Scala 定长数组 |
| `a(0)` | Scala 数组第一个元素 |
| `a[0]` | Java 数组第一个元素 |
| `t._1` | 元组第一个元素 |
| `ArrayBuffer` | 变长数组 |
| `+=` | 追加一个元素 |
| `++=` | 追加多个元素 |
| `trimEnd` | 删除末尾元素 |
| 高阶提示词 | 引导 AI 分析、评价和创造 |

---

## 六、流程动画建议

### 流程 1：Scala 定长数组创建与取值

```text
写出 val a
↓
右边使用 new Array[Int](3)
↓
创建长度为 3 的整数数组
↓
使用 a(0) 访问第一个元素
↓
给 a(0) 赋值
↓
使用 println 输出结果
```

### 流程 2：ArrayBuffer 追加数据

```text
导入 ArrayBuffer
↓
创建空的 ArrayBuffer
↓
使用 += 添加一个元素
↓
使用 ++= 添加多个元素
↓
需要时使用 trimEnd 删除末尾元素
↓
得到处理后的变长数组
```

---

## 七、练习题

### 练习 1

请用 Scala 创建一个长度为 3 的 Int 数组，并给第一个元素赋值为 10。

参考答案：

```scala
val a = new Array[Int](3)
a(0) = 10
```

---

### 练习 2

请创建一个长度为 3 的 Double 数组，并分别赋值 1.5、2.5、3.5。

参考答案：

```scala
val nums = new Array[Double](3)
nums(0) = 1.5
nums(1) = 2.5
nums(2) = 3.5
```

---

### 练习 3

请创建一个 ArrayBuffer，并依次添加 1、2、3。

参考答案：

```scala
import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer[Int]()
buffer += 1
buffer += 2
buffer += 3
```

---

### 练习 4

请向 ArrayBuffer 中一次追加 4、5、6。

参考答案：

```scala
buffer ++= Array(4, 5, 6)
```

---

### 练习 5

请写一个高阶 AI 提示词，让 AI 帮你比较 Java 数组和 Scala 数组。

参考答案：

```text
请你用适合初学者的方式，从声明方式、取值方式、下标规则、长度是否可变和代码示例五个角度，对比 Java 数组和 Scala 数组。
```

---

## 八、课后总结

1. Java 数组通常使用类型加方括号声明。
2. Scala 数组常用 `new Array[类型](长度)` 创建。
3. Java 数组用方括号取值，Scala 数组用圆括号取值。
4. 数组下标从 0 开始，元组从 1 开始取值。
5. 二维数组和矩阵维度有关，进行样本计算时要注意行列方向。
6. 定长数组创建后长度固定。
7. `ArrayBuffer` 是变长数组，可以动态追加元素。
8. `+=` 追加一个元素，`++=` 追加多个元素。
9. `trimEnd` 可以删除末尾若干元素。
10. 使用 AI 时要多用高阶提示词，让 AI 帮助分析、比较、评价和创造。
11. 麦肯锡式提示词可以让 AI 的回答更结构化。
12. 学习数组时要重点区分 Java 写法、Scala 写法和数学矩阵写法。
---

## 九、建议加入网站的标签

```text
数组
Java数组
Scala数组
Array
定长数组
ArrayBuffer
变长数组
取值器
数组下标
二维数组
矩阵
Array.ofDim
+=
++=
trimEnd
AI提示词
高阶思考
麦肯锡式提示词
```
