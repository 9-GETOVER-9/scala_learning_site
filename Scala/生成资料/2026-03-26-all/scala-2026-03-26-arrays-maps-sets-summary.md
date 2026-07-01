# Scala编程知识讲解

## 课程信息

- **课程标题**：Scala编程知识讲解
- **上课日期**：2026-03-26
- **上课时间**：15:16
- **所属章节**：第五章 Scala 集合、映射与数组
- **建议课程 ID**：`scala-2026-03-26-arrays-maps-sets`
- **页面访问地址**：`lesson.html?id=scala-2026-03-26-arrays-maps-sets`

---

## 一、课堂摘要

本节课主要讲解 Scala 中数组、数组缓冲、for 表达式、二维数组、映射 Map、集合 Set 以及 Scala API 的学习方法。

课堂前半部分回顾了 Java 与 Scala 在数组声明上的区别。Java 中声明整型数组时通常要先写类型，而 Scala 更强调变量名和右侧表达式，数组类型由创建方式决定。老师还讲到 `ArrayBuffer` 是缓冲数组，可以追加、插入、删除元素，也可以在处理完成后转换成定长数组。

随后，老师讲解了数组遍历和 for 表达式。范围 `Range` 可以看作对象，可以调用 `reverse` 等方法。for 表达式中可以通过守卫筛选元素，也可以对元素做四则运算、比较或其他处理后输出结果。二维数组在 Scala 中不能简单用 Java 式双中括号表示，而需要通过特定方法创建。

课堂中部说明了课程安排：全课程共 8 章，理论课预计第 8 周结束，第 9 周左右进入实验课，实验后进行考试。

后半部分重点讲解 Map 映射。Map 是键值对集合，与哈希表、键值映射思想有关。Scala 中 Map 有可变和不可变之分，本节课重点先理解不可变 Map。老师说明了左箭头 `<-` 用于遍历，右箭头 `->` 用于创建键值对。Map 取值可以用括号，也可以用 `get`；如果键不存在，直接取值可能报异常，可以用 `contains` 或异常捕获避免问题。

最后，老师讲解 Set 集合。Set 是不包含重复元素的集合，默认通常是不可变集合；可变集合可以追加和删除元素。Set 可用于求共同爱好、客户共同特征等场景。老师还提醒同学要学会查看 Scala API，理解对象有哪些属性、方法和使用示例。

---

## 二、核心知识点

### 1. Java 与 Scala 数组声明差异

Java 中数组声明通常写类型：

```java
int[] a = new int[3];
```

Scala 中更常见写法：

```scala
val a = new Array[Int](3)
```

区别在于：

- Java 类型放在变量名前；
- Scala 类型常写在 `Array[Int]` 中；
- Scala 更强调右侧表达式决定变量类型。

---

### 2. ArrayBuffer 缓冲数组

`ArrayBuffer` 是变长数组，可以动态调整长度。

```scala
import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer[Int]()
buffer += 1
buffer += 2
```

它的优点是：

- 可以追加元素；
- 可以插入元素；
- 可以删除元素；
- 可以转为定长数组。

---

### 3. 变长数组转定长数组

处理数据时，常先用 `ArrayBuffer` 动态收集数据，最后转成定长数组。

```scala
val arr = buffer.toArray
```

这适合先收集不确定数量的数据，再固定下来继续处理。

---

### 4. 遍历数组

Scala 可以使用 for 循环遍历数组或范围。

```scala
val a = Array(1, 2, 3, 4)

for (elem <- a) {
  println(elem)
}
```

这里 `elem <- a` 表示从数组 `a` 中依次取出元素。

---

### 5. Range 也是对象

`1 to 10` 这种范围可以看作对象，因此可以调用方法。

```scala
val r = 1 to 10
println(r.reverse)
```

这体现了 Scala 中“万物皆对象”的思想。

---

### 6. for 表达式与 yield

for 表达式可以对元素进行计算并生成新集合。

```scala
val result = for (elem <- Array(1, 2, 3)) yield elem * 2
```

结果是一个新数组或集合。

---

### 7. 守卫筛选

for 表达式中可以加入守卫，筛选满足条件的元素。

```scala
val evens = for (elem <- Array(1, 2, 3, 4) if elem % 2 == 0) yield elem
```

这里 `if elem % 2 == 0` 用来筛选偶数。

---

### 8. 二维数组

Scala 创建二维数组需要使用专门方法。

```scala
val matrix = Array.ofDim[Int](3, 3)
matrix(0)(0) = 1
```

Java 中通常用两个方括号，而 Scala 用 `Array.ofDim` 更常见。

---

### 9. 课程安排

老师说明课程共有 8 章，目前后续会按照一周一章推进。理论课预计第 8 周结束，第 9 周左右开始实验课，实验后进行考试。

---

### 10. Map 映射基本概念

Map 是键值对集合，也可以理解为 key-value 映射。

```scala
val scores = Map("Alice" -> 90, "Bob" -> 80)
```

其中：

- `"Alice"` 是 key；
- `90` 是 value；
- `"Alice" -> 90` 是一个键值对。

---

### 11. 右箭头 `->`

Scala 中 `->` 用于创建键值对。

```scala
"Monday" -> 1
```

可以理解为：

```text
Monday 对应 1
```

---

### 12. 左箭头 `<-`

左箭头 `<-` 常用于遍历。

```scala
for ((k, v) <- scores) {
  println(k + ":" + v)
}
```

它表示从集合中依次取出元素。

---

### 13. Map 的命名空间

如果使用可变 Map，需要导入命名空间。

```scala
import scala.collection.mutable.Map
```

老师强调，如果没有导入相应库，编译器可能不知道 `Map` 是什么，从而报错。

---

### 14. Map 取值方式一：括号取值

```scala
val scores = Map("Alice" -> 90)
println(scores("Alice"))
```

如果 key 存在，可以直接取出对应 value。

但如果 key 不存在，可能报异常。

---

### 15. Map 取值方式二：get 方法

```scala
val result = scores.get("Alice")
```

`get` 返回的是 `Option` 类型。它可能是：

- `Some(value)`：找到结果；
- `None`：没有找到。

---

### 16. contains 判断键是否存在

为了避免 key 不存在时报错，可以先判断。

```scala
if (scores.contains("Alice")) {
  println(scores("Alice"))
}
```

这比直接取一个不存在的 key 更安全。

---

### 17. 可变 Map 更新值

可变 Map 可以更新或添加键值对。

```scala
val scores = scala.collection.mutable.Map("Alice" -> 90)
scores("Alice") = 95
scores += ("Bob" -> 80)
```

这适合需要不断更新数据的场景。

---

### 18. 遍历 Map

可以遍历 Map 中所有键值对。

```scala
for ((name, score) <- scores) {
  println(name + ":" + score)
}
```

也可以分别访问 keys 和 values。

---

### 19. Set 集合

Set 是不包含重复元素的集合。

```scala
val s = Set(1, 2, 2, 3)
println(s)
```

结果中不会保留重复的 `2`。

---

### 20. 可变 Set 与不可变 Set

默认 Set 通常是不可变的。

```scala
val s = Set(1, 2, 3)
```

如果需要添加或删除元素，可以使用可变 Set。

```scala
import scala.collection.mutable.Set

val s = Set(1, 2, 3)
s += 4
s -= 2
```

---

### 21. exists 判断是否存在满足条件的元素

```scala
val s = Set(1, 2, 3, 4)
val hasEven = s.exists(x => x % 2 == 0)
```

`exists` 用来判断集合中是否至少有一个元素满足条件。

---

### 22. 集合交集

Set 可以用于求共同元素，例如共同爱好。

```scala
val a = Set("音乐", "篮球", "电影")
val b = Set("篮球", "游戏", "音乐")

val common = a intersect b
```

结果是：

```text
音乐, 篮球
```

---

### 23. 学会查看 Scala API

老师提醒同学要学会看 API 文档，查看对象有哪些：

- 属性；
- 方法；
- 示例；
- 返回值；
- 使用注意事项。

这对后续自学集合、数组、Map、List 都很重要。

---

## 三、代码示例

### 示例 1：Scala 定长数组

```scala
val a = new Array[Int](3)
a(0) = 10
a(1) = 20
a(2) = 30
```

解释：创建长度为 3 的 Int 数组。

---

### 示例 2：ArrayBuffer 追加并转数组

```scala
import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer[Int]()
buffer += 1
buffer += 2
buffer += 3

val arr = buffer.toArray
```

解释：先用变长数组收集数据，再转为定长数组。

---

### 示例 3：for 表达式筛选偶数

```scala
val nums = Array(1, 2, 3, 4, 5, 6)

val evens = for (elem <- nums if elem % 2 == 0) yield elem
```

解释：筛选数组中的偶数。

---

### 示例 4：二维数组

```scala
val matrix = Array.ofDim[Int](3, 3)
matrix(0)(0) = 1
matrix(1)(1) = 1
matrix(2)(2) = 1
```

解释：创建 3 行 3 列二维数组，并设置对角线元素。

---

### 示例 5：不可变 Map

```scala
val days = Map(
  "Monday" -> 1,
  "Tuesday" -> 2,
  "Wednesday" -> 3
)

println(days("Monday"))
```

解释：定义星期和数字之间的映射。

---

### 示例 6：安全获取 Map 值

```scala
val days = Map("Monday" -> 1, "Tuesday" -> 2)

if (days.contains("Friday")) {
  println(days("Friday"))
} else {
  println("没有这个键")
}
```

解释：先判断 key 是否存在，避免异常。

---

### 示例 7：使用 get 返回 Option

```scala
val days = Map("Monday" -> 1, "Tuesday" -> 2)

println(days.get("Monday"))
println(days.get("Friday"))
```

解释：存在时返回 `Some(value)`，不存在时返回 `None`。

---

### 示例 8：可变 Map 更新

```scala
val scores = scala.collection.mutable.Map("Alice" -> 90)

scores("Alice") = 95
scores += ("Bob" -> 80)

println(scores)
```

解释：可变 Map 可以更新值，也可以添加新的键值对。

---

### 示例 9：Set 去重

```scala
val s = Set(1, 2, 2, 3, 3, 4)
println(s)
```

解释：Set 不保留重复元素。

---

### 示例 10：Set 交集

```scala
val a = Set("音乐", "篮球", "电影")
val b = Set("篮球", "游戏", "音乐")

val common = a intersect b
println(common)
```

解释：找出两个集合的共同元素。

---

## 四、小测验

### 题目 1

Scala 中创建二维数组常用哪个方法？

A. `Array.ofDim`  
B. `new int[][]`  
C. `array double new`  
D. `Map.ofDim`  

**正确答案**：A  
**解析**：Scala 中常用 `Array.ofDim[Int](行, 列)` 创建二维数组。

---

### 题目 2

Scala 中 `->` 的作用是什么？

A. 创建键值对  
B. 删除数组  
C. 输出换行  
D. 创建类  

**正确答案**：A  
**解析**：`"Monday" -> 1` 表示创建一个键值对。

---

### 题目 3

Map 中如果 key 不存在，直接用括号取值可能会怎样？

A. 可能报异常  
B. 一定返回 0  
C. 自动创建 key  
D. 删除 Map  

**正确答案**：A  
**解析**：如果 key 不存在，直接取值可能报异常，建议使用 `contains` 或 `get`。

---

### 题目 4

`get` 方法通常返回什么类型？

A. Option  
B. Int  
C. String  
D. Boolean  

**正确答案**：A  
**解析**：Map 的 `get` 方法通常返回 `Option`，可能是 `Some(value)` 或 `None`。

---

### 题目 5

Set 的特点是什么？

A. 不包含重复元素  
B. 必须重复元素  
C. 只能保存字符串  
D. 不能遍历  

**正确答案**：A  
**解析**：Set 是不包含重复元素的集合。

---

### 题目 6

`exists` 的作用是什么？

A. 判断是否存在满足条件的元素  
B. 删除集合  
C. 创建二维数组  
D. 修改 key  

**正确答案**：A  
**解析**：`exists` 用来判断集合中是否至少有一个元素满足条件。

---

## 五、拖拽匹配内容

| 左侧概念 | 右侧解释 |
|---|---|
| `ArrayBuffer` | 变长数组 |
| `toArray` | 转成定长数组 |
| `yield` | 生成新集合 |
| `Array.ofDim` | 创建二维数组 |
| `Map` | 键值对集合 |
| `->` | 创建键值对 |
| `<-` | 遍历集合 |
| `get` | 安全取值，返回 Option |
| `contains` | 判断 key 是否存在 |
| `Set` | 不重复元素集合 |
| `exists` | 判断是否存在满足条件的元素 |
| `intersect` | 求交集 |

---

## 六、流程动画建议

### 流程 1：Map 安全取值

```text
定义一个 Map
↓
准备要查询的 key
↓
使用 contains 判断 key 是否存在
↓
如果存在，使用 map(key) 取值
↓
如果不存在，输出提示信息
↓
避免程序异常
```

### 流程 2：ArrayBuffer 转 Array

```text
创建 ArrayBuffer
↓
不断追加元素
↓
完成数据收集
↓
调用 toArray
↓
得到定长数组
↓
继续进行数组处理
```

---

## 七、练习题

### 练习 1

创建一个 `ArrayBuffer[Int]`，添加 1、2、3，然后转成数组。

参考答案：

```scala
import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer[Int]()
buffer += 1
buffer += 2
buffer += 3

val arr = buffer.toArray
```

---

### 练习 2

创建一个 Map，表示星期一、星期二、星期三分别对应 1、2、3。

参考答案：

```scala
val days = Map(
  "Monday" -> 1,
  "Tuesday" -> 2,
  "Wednesday" -> 3
)
```

---

### 练习 3

使用 `contains` 判断 Map 中是否包含 `"Friday"`。

参考答案：

```scala
if (days.contains("Friday")) {
  println(days("Friday"))
} else {
  println("没有 Friday")
}
```

---

### 练习 4

创建两个 Set，求它们的交集。

参考答案：

```scala
val a = Set("音乐", "篮球", "电影")
val b = Set("篮球", "游戏", "音乐")

val common = a intersect b
println(common)
```

---

### 练习 5

用 for 表达式筛选数组中的偶数。

参考答案：

```scala
val nums = Array(1, 2, 3, 4, 5, 6)

val evens = for (elem <- nums if elem % 2 == 0) yield elem
```

---

## 八、课后总结

1. Scala 中数组声明方式与 Java 不同，要注意类型位置和取值方式。
2. `ArrayBuffer` 是变长数组，可以追加、插入、删除元素。
3. 变长数组处理完成后可以用 `toArray` 转成定长数组。
4. for 表达式可以遍历数组、筛选元素并生成新集合。
5. Scala 创建二维数组常用 `Array.ofDim`。
6. Map 是键值对集合，适合表示一一对应关系。
7. `->` 用于创建键值对，`<-` 常用于遍历。
8. Map 取不存在的 key 可能报错，建议用 `contains` 或 `get`。
9. `get` 返回 `Option`，可能是 `Some(value)` 或 `None`。
10. Set 是不包含重复元素的集合。
11. 可变 Set 可以追加和删除元素。
12. Set 的交集可以用于分析共同爱好或共同特征。
13. 学习 Scala 要学会查 API，理解方法、属性、返回值和示例。
---

## 九、建议加入网站的标签

```text
Array
ArrayBuffer
toArray
for表达式
yield
守卫
二维数组
Array.ofDim
Map
键值对
Option
Some
None
contains
get
可变Map
不可变Map
Set
exists
intersect
Scala API
```
