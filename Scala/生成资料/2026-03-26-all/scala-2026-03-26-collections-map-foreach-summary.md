# Scala编程基础要点及练习讲解

## 课程信息

- **课程标题**：Scala编程基础要点及练习讲解
- **上课日期**：2026-03-26
- **上课时间**：16:29
- **所属章节**：第五章 Scala 集合练习与 Map 转换
- **建议课程 ID**：`scala-2026-03-26-collections-map-foreach`
- **页面访问地址**：`lesson.html?id=scala-2026-03-26-collections-map-foreach`

---

## 一、课堂摘要

本节课主要围绕 Scala 集合和映射的练习展开，重点讲解 Set、Map、List、Array、Map 转数组、`toList`、`difference`、`foreach` 和匿名函数等内容。

课堂开头老师说明，如果考试涉及本章内容，难度不会太高，重点是能定义集合、进行集合运算、输出新集合，或者定义 Map 并输出对应形式。比如定义两个 Set 后进行集合运算，或者定义星期一、星期二、星期三与数字之间的映射并输出。

随后，老师讲解了 List 的特点。List 类似数组，但有自己的递归结构，可以包含不同层次的数据。与 Array 相比，数组更强调逐个遍历，而 List、Set、Map 更常用迭代的思想。老师还提到可以查看 API 文档，了解 List、Set、Map 的属性、方法、示例和使用说明。

本节课重点练习了 Map 转数组。Scala 中可以使用 `toArray` 方法把 Map 转换为数组，转换后的数组中每个元素是一个元组，代表一个键值对。转换不会影响原始 Map。类似方法还有 `toList`、`difference` 等。

最后，老师讲解了 `foreach`。`foreach` 是用于迭代集合元素的方法，可以对每个元素执行指定操作。课堂通过 `numbers.foreach(num => println(num))` 说明，`num` 是集合中的元素，后面的表达式是对每个元素执行的动作。这种写法涉及函数推导和匿名函数，是后续函数式编程的重要基础。

---

## 二、核心知识点

### 1. 集合基础练习

老师强调，入门阶段需要掌握：

- 定义集合；
- 两个集合进行运算；
- 输出新集合；
- 定义 Map 映射；
- 输出 key 和 value 的对应关系。

例如：

```scala
val a = Set(1, 2, 3)
val b = Set(3, 4, 5)
println(a union b)
```

---

### 2. 考试重点

如果本章出题，通常会考：

- for 循环；
- 守卫；
- Range；
- Set 运算；
- Map 映射；
- 获取特定值；
- 输出处理结果。

不会要求过于复杂的高级应用，重点是基础会写、会输出、会理解。

---

### 3. List 类似数组

List 可以理解为一种类似数组的集合结构。

```scala
val list = List(1, 2, 3)
```

List 中可以保存一组数据，也可以进行遍历和方法调用。

---

### 4. List 的递归结构

老师提到 List 具有递归结构，也可以理解为链式结构。

例如：

```scala
val matrix = List(
  List(1, 0, 0),
  List(0, 1, 0),
  List(0, 0, 1)
)
```

这个结构类似一个单位矩阵。

---

### 5. Array 与 List 遍历思想

Array 更常见的是逐个遍历元素。

```scala
val arr = Array(1, 2, 3)

for (x <- arr) {
  println(x)
}
```

List、Set、Map 也可以遍历，但更多会使用集合方法，如 `foreach`、`map`、`filter` 等。

---

### 6. 查看 API

老师建议同学像查字典一样查看 Scala API。

API 中通常包括：

- 声明方式；
- 方法；
- 属性；
- 使用简介；
- 示例；
- 返回值说明。

这有助于自学集合和函数式方法。

---

### 7. Map 转数组

Scala 中可以使用 `toArray` 将 Map 转为数组。

```scala
val days = Map("Monday" -> 1, "Tuesday" -> 2)
val arr = days.toArray
```

转换后，数组中的每个元素是一个元组。

---

### 8. Map 转数组不会影响原始 Map

`toArray` 是转换生成新结果，不会破坏原来的 Map。

```scala
val arr = days.toArray
println(days)
```

原始 `days` 仍然存在。

---

### 9. Map 转 List

除了 `toArray`，也可以使用 `toList`。

```scala
val list = days.toList
```

这样可以把 Map 转成 List 形式。

---

### 10. difference 方法

`difference` 可以理解为求差集或差异。

```scala
val a = Set(1, 2, 3)
val b = Set(2, 3)
val diff = a.diff(b)
```

结果是只在 `a` 中存在、不在 `b` 中存在的元素。

---

### 11. 声明并赋值时通常不用 new

老师强调，在 Scala 中如果声明时已经直接给了值，通常不用写 `new`。

```scala
val days = Map("Monday" -> 1)
```

这里已经有值，所以不需要：

```scala
new Map(...)
```

---

### 12. foreach 方法

`foreach` 用于遍历集合，对每个元素执行操作。

```scala
val numbers = List(1, 2, 3)

numbers.foreach(num => println(num))
```

解释：

- `numbers` 是集合；
- `foreach` 遍历集合；
- `num` 是当前元素；
- `println(num)` 是对元素执行的动作。

---

### 13. foreach 与 for 循环

`foreach` 和 for 循环都可以遍历集合。

for 写法：

```scala
for (num <- numbers) {
  println(num)
}
```

foreach 写法：

```scala
numbers.foreach(num => println(num))
```

foreach 更接近函数式写法。

---

### 14. 匿名函数

`num => println(num)` 可以理解为匿名函数。

它没有函数名，但有：

- 参数：`num`
- 函数体：`println(num)`

这为后续学习高阶函数打基础。

---

### 15. 函数推导思想

课堂中提到，foreach 中的写法涉及函数推导。可以简单理解为：把“对每个元素做什么”用一个函数表达出来。

例如：

```scala
numbers.foreach(num => println(num * 2))
```

表示对每个元素乘 2 后输出。

---

### 16. 下周安排

老师提醒：

- 下周周二是试听课；
- 下周周四要检查笔记本；
- 这里的笔记本指的是学习笔记，不是电脑；
- 要把课堂练习整理到笔记本中。

---

## 三、代码示例

### 示例 1：Set 集合并集

```scala
val a = Set(1, 2, 3)
val b = Set(3, 4, 5)

val result = a union b
println(result)
```

解释：两个集合相加，得到新的集合。

---

### 示例 2：Map 映射

```scala
val days = Map(
  "Monday" -> 1,
  "Tuesday" -> 2,
  "Wednesday" -> 3
)

println(days)
```

解释：定义星期和数字的对应关系。

---

### 示例 3：List 嵌套表示单位矩阵

```scala
val matrix = List(
  List(1, 0, 0),
  List(0, 1, 0),
  List(0, 0, 1)
)

println(matrix)
```

解释：List 中包含 List，可以表示二维结构。

---

### 示例 4：Map 转数组

```scala
val days = Map("Monday" -> 1, "Tuesday" -> 2)

val arr = days.toArray

arr.foreach(item => println(item))
```

解释：Map 转数组后，每个元素都是一个键值对元组。

---

### 示例 5：Map 转 List

```scala
val days = Map("Monday" -> 1, "Tuesday" -> 2)

val list = days.toList

println(list)
```

解释：把 Map 转成 List 形式。

---

### 示例 6：difference / diff 差集

```scala
val a = Set(1, 2, 3, 4)
val b = Set(3, 4)

val diff = a.diff(b)

println(diff)
```

解释：输出只在 a 中、不在 b 中的元素。

---

### 示例 7：foreach 遍历 List

```scala
val numbers = List(1, 2, 3, 4, 5)

numbers.foreach(num => println(num))
```

解释：对集合中的每个元素执行打印操作。

---

### 示例 8：foreach 执行计算

```scala
val numbers = List(1, 2, 3, 4, 5)

numbers.foreach(num => println(num * 2))
```

解释：对每个元素乘以 2 后输出。

---

## 四、小测验

### 题目 1

Scala 中 Map 转数组常用哪个方法？

A. `toArray`  
B. `toInt`  
C. `newArrayOnly`  
D. `deleteMap`  

**正确答案**：A  
**解析**：`toArray` 可以把 Map 转换为数组。

---

### 题目 2

Map 转数组后，数组中的元素通常是什么？

A. 元组  
B. 图片  
C. 数据库  
D. 压缩包  

**正确答案**：A  
**解析**：Map 中每个键值对转换后通常以元组形式存在。

---

### 题目 3

`foreach` 的作用是什么？

A. 遍历集合并对每个元素执行操作  
B. 删除所有元素  
C. 创建 JDK  
D. 修改文件名  

**正确答案**：A  
**解析**：`foreach` 用于迭代集合元素，并执行指定动作。

---

### 题目 4

`num => println(num)` 可以理解为什么？

A. 匿名函数  
B. 数据库表  
C. 类名  
D. 文件路径  

**正确答案**：A  
**解析**：它没有函数名，但有参数和函数体，因此可以看作匿名函数。

---

### 题目 5

在 Scala 中，声明并赋值时通常是否必须写 new？

A. 不一定，直接给值时通常不用 new  
B. 永远必须写 new  
C. 只能写 Java 代码  
D. 不能赋值  

**正确答案**：A  
**解析**：例如 `val days = Map("Monday" -> 1)` 不需要写 new。

---

## 五、拖拽匹配内容

| 左侧概念 | 右侧解释 |
|---|---|
| Set | 不重复元素集合 |
| Map | 键值对映射 |
| List | 列表 |
| Array | 数组 |
| `toArray` | 转换为数组 |
| `toList` | 转换为列表 |
| `diff` | 求差集 |
| `foreach` | 遍历每个元素 |
| `num => println(num)` | 匿名函数 |
| API | 查看方法、属性和示例的文档 |

---

## 六、流程动画建议

### 流程 1：Map 转数组并遍历

```text
定义 Map
↓
调用 toArray
↓
得到数组
↓
数组中每个元素是键值对元组
↓
调用 foreach
↓
逐个打印每个元组
```

### 流程 2：foreach 执行动作

```text
准备一个集合
↓
调用 foreach 方法
↓
依次取出一个元素
↓
把元素交给匿名函数
↓
执行函数体中的动作
↓
处理下一个元素
```

---

## 七、练习题

### 练习 1

定义两个 Set，并输出它们的并集。

参考答案：

```scala
val a = Set(1, 2, 3)
val b = Set(3, 4, 5)

println(a union b)
```

---

### 练习 2

定义一个 Map，表示 Monday、Tuesday、Wednesday 分别对应 1、2、3。

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

把上题的 Map 转成数组并输出。

参考答案：

```scala
val arr = days.toArray
arr.foreach(item => println(item))
```

---

### 练习 4

使用 foreach 输出 List(1, 2, 3, 4, 5) 中的每个元素。

参考答案：

```scala
val numbers = List(1, 2, 3, 4, 5)

numbers.foreach(num => println(num))
```

---

### 练习 5

使用 foreach 输出 List(1, 2, 3, 4, 5) 中每个元素乘 2 后的结果。

参考答案：

```scala
val numbers = List(1, 2, 3, 4, 5)

numbers.foreach(num => println(num * 2))
```

---

## 八、课后总结

1. 本节课主要是集合和 Map 的练习巩固。
2. 入门阶段需要能定义 Set、Map、List，并能输出处理结果。
3. 考试如果涉及本章，重点大概率是 for 循环、守卫、Set 运算和 Map 输出。
4. List 类似数组，但具有递归或链式结构。
5. List 中可以嵌套 List，用来表达二维结构。
6. 学习 Scala 集合时要会查 API。
7. Map 可以使用 `toArray` 转换为数组，转换后元素通常是元组。
8. `toArray` 不会影响原始 Map。
9. `foreach` 用来迭代集合，并对每个元素执行操作。
10. `num => println(num)` 是匿名函数写法。
11. 声明并直接赋值时，Scala 中通常不需要写 `new`。
12. 下周周四需要检查学习笔记，要整理好课堂代码和练习。
---

## 九、建议加入网站的标签

```text
Set
Map
List
Array
toArray
toList
difference
diff
foreach
匿名函数
函数推导
API
集合练习
Map转数组
单位矩阵
考试重点
```
