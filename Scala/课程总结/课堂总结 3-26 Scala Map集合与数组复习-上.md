# 课程总结：Scala Map 映射、Set 集合与数组复习（2026-03-26 15:16）

> 本文件根据课堂录音转写内容整理而成，已去除大量口语化、重复和无关表达，并对部分口误或不严谨说法进行了修正。  
> 本节课主线是：在复习 Scala 数组和遍历的基础上，继续学习 `Map` 映射、`Set` 集合、可变与不可变集合，以及如何查看 Scala API。  
> 课堂中还穿插了课程安排、编程学习方法、环境配置等内容，已整理到“课堂补充说明”中。

---

## 1. 课程基本信息

* 课程 ID 建议：`scala-map-set-collection-basic-20260326-1516`
* 课程标题：Scala Map 映射、Set 集合与数组复习（2026-03-26 15:16）
* 所属章节：Scala 元组与 Map、Scala 数组与集合基础
* 上课日期：2026-03-26 15:16
* 知识点标签：`ArrayBuffer`、`toArray`、`Range`、`for`、`yield`、`Map`、`Set`、`Option`、`getOrElse`、`contains`、`mutable`、`immutable`、`API`
* 难度等级：基础到进阶入门
* 适合对象：已经学习过 Scala 变量、数组、循环和基本表达式的初学者
* 本节课一句话概括：本节课复习了数组和 for 推导式，并重点讲解 Scala 中 Map 映射与 Set 集合的定义、取值、更新、遍历和常见应用。

---

## 2. 课堂摘要

1. 本节课首先复习了 Scala 数组和 Java 数组在声明方式上的差异，并强调 Scala 中定长数组和变长数组的使用方式不同。
2. 课堂中重点说明了 `ArrayBuffer` 可以追加、插入、删除元素，并且可以通过 `toArray` 转换成定长数组。
3. 老师通过数组遍历的例子回顾了 `to`、`until`、`by`、`reverse` 等区间和步长相关写法。
4. 本节课继续讲解了 `for ... yield` 推导式，说明它可以在遍历集合时生成新的集合，并能配合守卫条件筛选元素。
5. 课堂中重点引入了 `Map` 映射，说明映射由一组键值对组成，常用于根据一个键快速查找对应的值。
6. 老师通过“星期几对应数字”“学号对应学生”“下拉列表选项”等例子帮助理解 `Map` 的实际应用场景。
7. 本节课讲解了 `Map` 的两种常见取值方式：直接用括号取值和使用 `get` / `getOrElse` 安全取值。
8. 课堂还讲解了 `Set` 集合，强调 `Set` 不保存重复元素，适合处理去重、交集、共同爱好等问题。
9. 老师展示了可变集合和不可变集合的差异，说明默认情况下 Scala 更推荐使用不可变集合。
10. 课堂最后提醒学生要学会查 Scala API，通过官方文档查看集合类型的属性、方法和使用示例。

---

## 3. 本节课学习目标

学完本节课后，你应该能够：

1. 说清楚定长数组 `Array` 和变长数组 `ArrayBuffer` 的区别。
2. 能使用 `ArrayBuffer` 进行追加、插入、删除，并能将其转换成 `Array`。
3. 能使用 `to`、`until`、`by`、`reverse` 编写数组下标遍历代码。
4. 能使用 `for ... yield` 对集合中的元素进行计算并生成新集合。
5. 能理解 `Map` 是由键值对组成的映射结构。
6. 能使用 `Map("key" -> value)` 的方式创建不可变映射。
7. 能区分左箭头 `<-` 和右箭头 `->` 在 Scala 中的不同作用。
8. 能使用 `map(key)`、`get`、`getOrElse`、`contains` 等方式读取映射中的值。
9. 能理解 `Option` 表示“可能有值，也可能没有值”的结果。
10. 能理解 `Set` 是不包含重复元素的集合，并能使用交集操作找出共同元素。
11. 能区分 `immutable` 不可变集合和 `mutable` 可变集合。
12. 能根据学习需要主动查看 Scala API 文档，理解方法签名和示例代码。

---

## 4. 知识点详细整理

### 知识点 1：定长数组 Array 与变长数组 ArrayBuffer 复习

#### 这个知识点是什么？

`Array` 是 Scala 中的定长数组，创建后长度不能改变。  
`ArrayBuffer` 是 Scala 中的变长数组，可以在运行过程中追加、插入、删除元素。

这节课中，老师先复习了数组的声明和使用，再强调了 `ArrayBuffer` 的一个常见用途：先用变长数组收集数据，最后再转换成定长数组。

#### 为什么要学它？

数组和集合是后续学习 Scala 编程、数据处理、循环遍历、Map、Set 的基础。  
很多时候，程序一开始不知道要保存多少个元素，这时可以先用 `ArrayBuffer`；当数据收集完成后，如果希望结构固定下来，可以转成 `Array`。

#### 基本语法

```scala
import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer[Int]()
buffer += 10
buffer += 20
buffer.insert(1, 15)
buffer.remove(0)

val array: Array[Int] = buffer.toArray
```

#### 课堂中的理解方式

课堂中把 `ArrayBuffer` 理解成“可以不断往后装东西的数组缓冲区”。  
例如不断收集用户输入、网页数据、商品信息时，刚开始可能不知道数量，这时可以用 `ArrayBuffer` 暂存；数据收集完成后，再转成固定数组，方便后续分析。

#### 初学者容易犯的错误

1. 以为 `Array` 和 `ArrayBuffer` 都可以随意改变长度。
2. 忘记导入 `ArrayBuffer` 所在的包。
3. 把 `toArray` 写成不存在的方法名。
4. 认为 `ArrayBuffer` 转成 `Array` 后还能继续改变长度。
5. 混淆“修改元素值”和“改变数组长度”。

#### 正确示例

```scala
import scala.collection.mutable.ArrayBuffer

object Main {
  def main(args: Array[String]): Unit = {
    val nums = ArrayBuffer[Int]()

    nums += 1
    nums += 2
    nums += 3

    nums.insert(1, 99)
    nums.remove(0)

    val fixedNums = nums.toArray

    println(nums)
    println(fixedNums.mkString(", "))
  }
}
```

#### 示例解释

1. `import scala.collection.mutable.ArrayBuffer` 表示导入可变数组缓冲区。
2. `ArrayBuffer[Int]()` 创建一个空的整数变长数组。
3. `nums += 1` 表示向末尾追加元素。
4. `insert(1, 99)` 表示在下标 `1` 的位置插入 `99`。
5. `remove(0)` 表示删除下标 `0` 的元素。
6. `toArray` 把变长数组转换为定长数组。
7. `mkString(", ")` 用逗号把数组元素拼成字符串输出。

---

### 知识点 2：Range、to、until、by 与 reverse

#### 这个知识点是什么？

`Range` 表示一个数字范围。Scala 中常用 `to`、`until`、`by` 来生成范围。

* `to`：包含结束值。
* `until`：不包含结束值。
* `by`：设置步长。
* `reverse`：反向遍历。

#### 为什么要学它？

数组下标从 `0` 开始，如果数组长度是 `arr.length`，最后一个下标是 `arr.length - 1`。  
因此遍历数组下标时，`0 until arr.length` 非常常用，因为它正好生成从 `0` 到 `arr.length - 1` 的范围。

#### 基本语法

```scala
0 to 5          // 0, 1, 2, 3, 4, 5
0 until 5       // 0, 1, 2, 3, 4
0 until 10 by 2 // 0, 2, 4, 6, 8
(0 until 5).reverse // 4, 3, 2, 1, 0
```

#### 课堂中的理解方式

课堂中用数学区间帮助理解：

* `to` 类似闭区间 `[0, 10]`
* `until` 类似左闭右开区间 `[0, 10)`

老师还强调了步长的概念：  
`by 2` 表示每次跳 2 个位置，可以用来取偶数下标、奇数下标，或者每隔一个元素处理一次。

#### 初学者容易犯的错误

1. 用 `0 to arr.length` 遍历数组，导致访问越界。
2. 忘记数组最后一个下标是 `length - 1`。
3. 把 `to` 和 `until` 的边界含义混淆。
4. 以为 `reverse` 会修改原来的数组，实际上它通常返回反向序列。
5. 把 Range 的方法和 ArrayBuffer 的方法混用，例如 Range 不能随意 `insert` 或 `remove`。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val nums = Array(10, 20, 30, 40, 50)

    for (i <- 0 until nums.length) {
      println(s"下标 $i 的元素是 ${nums(i)}")
    }

    println("反向输出：")
    for (i <- nums.indices.reverse) {
      println(nums(i))
    }
  }
}
```

#### 示例解释

1. `nums.length` 是数组长度，值为 `5`。
2. `0 until nums.length` 生成 `0, 1, 2, 3, 4`，刚好是合法下标。
3. `nums(i)` 使用括号取值器访问数组元素。
4. `nums.indices` 可以直接获得数组的下标范围。
5. `reverse` 让下标倒序排列，从而实现反向输出数组元素。

---

### 知识点 3：直接遍历数组元素

#### 这个知识点是什么？

遍历数组时，不一定总要使用下标。  
如果只是想访问每个元素，可以直接让变量从数组中依次取值。

#### 为什么要学它？

直接遍历元素代码更简洁，不容易写错下标，也能体现 Scala 集合编程的风格。

#### 基本语法

```scala
for (element <- array) {
  println(element)
}
```

#### 课堂中的理解方式

课堂中提到：`element` 表示元素，`A` 表示数组名。  
当写成 `for (element <- A)` 时，可以理解为：从数组 `A` 中一个一个取出元素，每次把当前元素临时交给变量 `element`。

#### 初学者容易犯的错误

1. 明明不需要下标，却强行写下标循环。
2. 误以为 `element` 是固定关键字，其实它只是变量名，可以换成 `x`、`num` 等。
3. 在循环中修改 `element`，以为会直接修改数组原始元素。
4. 把 `<-` 写成 `->`。
5. 不理解 `element` 的类型来自数组元素类型，是 Scala 自动推断出来的。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val names = Array("Alice", "Bob", "Cindy")

    for (name <- names) {
      println(name)
    }
  }
}
```

#### 示例解释

1. `names` 是字符串数组。
2. `name <- names` 表示从数组中依次取出一个字符串。
3. 第一次循环时，`name` 是 `"Alice"`。
4. 第二次循环时，`name` 是 `"Bob"`。
5. 第三次循环时，`name` 是 `"Cindy"`。

---

### 知识点 4：for 推导式与 yield

#### 这个知识点是什么？

`for ... yield` 可以遍历一个集合，并根据每个元素计算出一个新结果，最终生成一个新的集合。

#### 为什么要学它？

在 Java 中，要完成“遍历数组、计算新值、保存到新数组”通常需要较多代码。  
Scala 使用 `for ... yield` 可以把这个过程写得更简洁。

#### 基本语法

```scala
val result = for (element <- collection) yield {
  表达式
}
```

#### 课堂中的理解方式

课堂中用“把数组中的每个数乘以 2”来说明 `for ... yield`。  
`for` 负责遍历，`yield` 后面的表达式负责生成新值，所有新值会组合成新的集合。

#### 初学者容易犯的错误

1. 忘记 `yield`，导致只是循环执行代码，而不是生成新集合。
2. 以为 `yield` 会修改原数组，其实它生成新集合。
3. 不理解 `yield` 后面应该是表达式。
4. 把 `for ... yield` 和普通 `for` 循环的作用混淆。
5. 误以为结果一定是 `Array`，实际上结果类型通常与原集合类型有关；不同 Scala 版本和集合类型可能略有差异。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val nums = Array(2, 3, 5, 7, 11)

    val doubled = for (num <- nums) yield num * 2

    println(doubled.mkString(", "))
  }
}
```

#### 示例解释

1. `nums` 是原始数组。
2. `for (num <- nums)` 依次取出数组中的每个元素。
3. `yield num * 2` 表示把每个元素乘以 `2` 后作为新结果。
4. `doubled` 是一个新的数组，内容为 `4, 6, 10, 14, 22`。
5. 原来的 `nums` 没有被修改。

---

### 知识点 5：for 推导式中的守卫 if

#### 这个知识点是什么？

在 `for` 推导式中，可以加入 `if` 条件来筛选元素。这个 `if` 条件常被称为“守卫”。

#### 为什么要学它？

实际编程中，经常不是处理所有元素，而是只处理满足条件的元素。  
例如只处理偶数、只处理成绩及格的学生、只处理库存大于 0 的商品。

#### 基本语法

```scala
val result = for (element <- collection if 条件表达式) yield {
  处理表达式
}
```

#### 课堂中的理解方式

课堂中把守卫比喻为“筛选”或“漏斗”。  
元素先进入 `for`，只有满足 `if` 条件的元素才会继续进入 `yield` 进行处理。

#### 初学者容易犯的错误

1. 把 `=` 写成 `==` 或把 `==` 写成 `=`。
2. 忘记取余判断偶数应该写成 `num % 2 == 0`。
3. 以为守卫会改变原集合。
4. 在守卫中写过于复杂的表达式，导致代码难读。
5. 误以为 `if` 后面必须加小括号；Scala 中常见写法可以不加，但初学者加上也可以。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val nums = Array(1, 2, 3, 4, 5, 6)

    val evenDoubled = for (num <- nums if num % 2 == 0) yield num * 2

    println(evenDoubled.mkString(", "))
  }
}
```

#### 示例解释

1. `nums` 中包含 1 到 6。
2. `if num % 2 == 0` 筛选偶数。
3. 满足条件的元素是 `2, 4, 6`。
4. `yield num * 2` 把它们分别变成 `4, 8, 12`。
5. 输出结果为 `4, 8, 12`。

---

### 知识点 6：Map 映射的基本概念

#### 这个知识点是什么？

`Map` 是一种由键值对组成的集合。  
每个元素由一个 `key` 和一个 `value` 构成，表示“通过 key 找到 value”。

例如：

```scala
"Bob" -> 90
```

表示键是 `"Bob"`，值是 `90`。

#### 为什么要学它？

`Map` 非常适合处理“对应关系”：

* 学号 -> 学生姓名
* 姓名 -> 成绩
* 星期几 -> 数字
* 菜单选项 -> 操作命令
* 商品编号 -> 商品名称
* 页面下拉选项 -> 后台编码

#### 基本语法

```scala
val scores = Map(
  "Alice" -> 95,
  "Bob" -> 88,
  "Cindy" -> 76
)
```

#### 课堂中的理解方式

课堂中用“星期一对应 1、星期二对应 2”“学生姓名对应成绩”等方式解释 `Map`。  
老师强调，`Map` 的核心不是保存一串孤立的值，而是保存一组“对应关系”。

#### 初学者容易犯的错误

1. 把 `Map` 当成普通数组来理解。
2. 认为 key 和 value 必须是相同类型，实际上可以不同。
3. 忘记 key 通常应该保持唯一。
4. 把右箭头 `->` 写成左箭头 `<-`。
5. 不理解 `Map("Bob" -> 90)` 中 `->` 创建的是一个键值对。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val scores = Map(
      "Alice" -> 95,
      "Bob" -> 88,
      "Cindy" -> 76
    )

    println(scores)
  }
}
```

#### 示例解释

1. `scores` 是一个映射。
2. `"Alice" -> 95` 表示 Alice 对应的成绩是 95。
3. `"Bob" -> 88` 表示 Bob 对应的成绩是 88。
4. `"Cindy" -> 76` 表示 Cindy 对应的成绩是 76。
5. `println(scores)` 输出整个映射内容。

---

### 知识点 7：左箭头 `<-` 和右箭头 `->`

#### 这个知识点是什么？

Scala 中 `<-` 和 `->` 看起来相似，但作用完全不同。

* `<-`：常用于 `for` 循环或推导式，表示“从集合中取出元素”。
* `->`：常用于创建键值对，尤其是在 `Map` 中。

#### 为什么要学它？

这两个符号在集合学习中非常常见。如果混淆，程序会直接报错，或者语义完全错误。

#### 基本语法

```scala
// 左箭头：遍历
for (num <- Array(1, 2, 3)) {
  println(num)
}

// 右箭头：创建键值对
val score = "Bob" -> 90
val scores = Map("Bob" -> 90)
```

#### 课堂中的理解方式

课堂中明确强调：

* 左箭头是遍历操作符。
* 右箭头是创建键值对的操作符。

可以这样记忆：  
`element <- collection` 表示元素从集合中“流出来”；  
`key -> value` 表示 key “指向” value。

#### 初学者容易犯的错误

1. 在 `for` 循环中写成 `num -> nums`。
2. 在 `Map` 中写成 `"Bob" <- 90`。
3. 以为箭头只是装饰符号。
4. 不知道 `->` 本质上会创建一个二元组。
5. 混淆 `Map` 中的 key 和 value。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val scores = Map("Bob" -> 90, "Alice" -> 95)

    for ((name, score) <- scores) {
      println(s"$name 的成绩是 $score")
    }
  }
}
```

#### 示例解释

1. `"Bob" -> 90` 使用右箭头创建键值对。
2. `scores` 是由多个键值对组成的映射。
3. `for ((name, score) <- scores)` 使用左箭头遍历映射。
4. `(name, score)` 会接收每一组键值对。
5. `println` 输出每个人对应的成绩。

---

### 知识点 8：Map 的取值方式：括号、get、getOrElse、contains

#### 这个知识点是什么？

创建 `Map` 后，经常需要根据 key 查找 value。Scala 中常见取值方式有：

1. `map(key)`：直接取值。
2. `map.get(key)`：安全取值，返回 `Option`。
3. `map.getOrElse(key, 默认值)`：有值就返回值，没有值就返回默认值。
4. `map.contains(key)`：判断是否包含某个 key。

#### 为什么要学它？

直接用 `map(key)` 取值很方便，但如果 key 不存在，会抛出异常。  
实际开发中，为了避免程序中断，更推荐使用 `get`、`getOrElse` 或 `contains`。

#### 基本语法

```scala
val scores = Map("Alice" -> 95, "Bob" -> 88)

scores("Alice")              // 95
scores.get("Alice")          // Some(95)
scores.get("Tom")            // None
scores.getOrElse("Tom", 0)   // 0
scores.contains("Bob")       // true
```

#### 课堂中的理解方式

课堂中提到，如果映射中没有请求的 key，直接取值会报异常。  
老师讲了 `try-catch` 的思想，但也强调可以先用 `contains` 判断，或者使用更方便的安全取值方式。

这里需要修正一个口误：课堂转写中出现了类似 “Get all Args” 的说法，根据上下文应为 `getOrElse`。  
`getOrElse` 的意思是：如果能取到值，就返回该值；否则返回指定的默认值。

#### 初学者容易犯的错误

1. 直接写 `scores("Tom")`，但 `Tom` 不存在，导致异常。
2. 不理解 `get` 返回的是 `Option`，不是普通的 `Int`。
3. 把 `contains` 当成取值方法，其实它只返回 `true` 或 `false`。
4. 忘记给 `getOrElse` 设置合理默认值。
5. 把 key 写错大小写，导致查不到值。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val scores = Map("Alice" -> 95, "Bob" -> 88)

    println(scores("Alice"))
    println(scores.get("Tom"))
    println(scores.getOrElse("Tom", 0))

    if (scores.contains("Bob")) {
      println("Bob 的成绩是：" + scores("Bob"))
    } else {
      println("没有 Bob 的成绩")
    }
  }
}
```

#### 示例解释

1. `scores("Alice")` 可以取到 95。
2. `scores.get("Tom")` 因为找不到 Tom，所以返回 `None`。
3. `scores.getOrElse("Tom", 0)` 找不到 Tom 时返回默认值 0。
4. `contains("Bob")` 判断是否存在 Bob。
5. 如果存在 Bob，再用 `scores("Bob")` 取值会更安全。

---

### 知识点 9：Option、Some 和 None

#### 这个知识点是什么？

`Option` 是 Scala 中表示“可能有值，也可能没有值”的类型。

* `Some(value)`：表示有值。
* `None`：表示没有值。

`Map.get(key)` 的返回值就是 `Option`。

#### 为什么要学它？

在 Java 或一些旧代码中，经常用 `null` 表示没有值。  
但是 `null` 容易导致空指针异常。Scala 更推荐用 `Option` 来明确表达“这个结果可能不存在”。

#### 基本语法

```scala
val scores = Map("Alice" -> 95)

val result1 = scores.get("Alice") // Some(95)
val result2 = scores.get("Bob")   // None
```

#### 课堂中的理解方式

课堂中通过“下拉列表选项”“点击菜单返回一个操作对象”等例子说明：有些操作不一定总能得到结果，所以需要一种类型表示“有或者没有”。  
这和 `Option` 的思想接近。

#### 初学者容易犯的错误

1. 以为 `Some(95)` 就是普通的 `95`。
2. 直接对 `Option` 做数值计算。
3. 看到 `None` 就以为程序错了，其实它表示没有找到。
4. 不会从 `Option` 中取出默认值。
5. 继续使用 `null` 思维理解 Scala。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val scores = Map("Alice" -> 95, "Bob" -> 88)

    val aliceScore = scores.get("Alice")
    val tomScore = scores.get("Tom")

    println(aliceScore)
    println(tomScore)

    println(scores.getOrElse("Tom", 0))
  }
}
```

#### 示例解释

1. `scores.get("Alice")` 返回 `Some(95)`。
2. `scores.get("Tom")` 返回 `None`。
3. `getOrElse("Tom", 0)` 表示如果没有 Tom，就使用 0。
4. 这样可以避免直接取不存在的 key 导致异常。
5. `Option` 是后续学习异常处理、模式匹配、函数式编程的重要基础。

---

### 知识点 10：可变 Map 与不可变 Map

#### 这个知识点是什么？

Scala 中的 `Map` 分为不可变映射和可变映射。

* 不可变 `Map`：创建后不能直接修改原对象。
* 可变 `Map`：可以添加、删除、更新键值对。

默认情况下，Scala 中直接写 `Map(...)` 通常得到的是不可变 Map。

#### 为什么要学它？

不可变集合更安全，适合函数式编程；可变集合更灵活，适合需要频繁修改的场景。  
初学者要知道两者都能用，但语义不同。

#### 基本语法

```scala
// 不可变 Map
val immutableMap = Map("Alice" -> 95, "Bob" -> 88)

// 可变 Map
import scala.collection.mutable

val mutableMap = mutable.Map("Alice" -> 95, "Bob" -> 88)
mutableMap("Bob") = 90
mutableMap += ("Cindy" -> 76)
mutableMap -= "Alice"
```

#### 课堂中的理解方式

课堂中提到 Map 有“可变”和“不可变”两类，并且先重点研究不可变映射。  
这符合 Scala 初学顺序：先掌握不可变集合，再理解什么时候需要使用可变集合。

#### 需要修正的不严谨说法

课堂中提到“使用 Map 必须写命名空间，否则 Map 不认识”。这句话需要区分情况：

1. `Map(...)` 和 `Set(...)` 这类不可变集合，Scala 默认通常可以直接使用。
2. 如果要使用可变集合，如 `mutable.Map`、`mutable.Set`，通常需要导入：
   ```scala
   import scala.collection.mutable
   ```
3. 如果直接写 `mutable.Map(...)`，需要先导入 `scala.collection.mutable`，或者写完整路径：
   ```scala
   scala.collection.mutable.Map("Bob" -> 90)
   ```

#### 初学者容易犯的错误

1. 以为 `val map = Map(...)` 中的 `val` 决定 Map 是否可变。
2. 直接对不可变 Map 写 `map("Bob") = 90`。
3. 忘记导入 `scala.collection.mutable`。
4. 不理解 `map += (...)` 对可变 Map 和不可变 Map 的含义不同。
5. 把“变量是否可重新赋值”和“集合内容是否可变”混为一谈。

#### 正确示例

```scala
import scala.collection.mutable

object Main {
  def main(args: Array[String]): Unit = {
    val scores = mutable.Map("Bob" -> 80)

    scores("Bob") = 90
    scores += ("Alice" -> 95)
    scores -= "Bob"

    println(scores)
  }
}
```

#### 示例解释

1. `mutable.Map("Bob" -> 80)` 创建可变映射。
2. `scores("Bob") = 90` 更新 Bob 的成绩。
3. `scores += ("Alice" -> 95)` 添加新的键值对。
4. `scores -= "Bob"` 删除 Bob 这个 key 对应的键值对。
5. 最后输出只剩下 Alice 的成绩。

---

### 知识点 11：遍历 Map 的键值对

#### 这个知识点是什么？

Map 可以被遍历。遍历时，每次拿到的是一个键值对。

#### 为什么要学它？

在实际程序中，经常需要输出所有学生成绩、所有配置项、所有菜单项。  
这时就需要遍历整个 Map。

#### 基本语法

```scala
for ((key, value) <- map) {
  println(key + " -> " + value)
}
```

还可以分别获取所有 key 和所有 value：

```scala
map.keys
map.values
```

#### 课堂中的理解方式

课堂中把 Map 理解为一组 key 和 value 的集合。  
遍历时，就相当于一个一个取出每组键值对，再分别处理 key 和 value。

#### 初学者容易犯的错误

1. 忘记键值对是两个值。
2. 写成 `for (key, value <- map)`，语法错误。
3. 不知道 `values` 返回的是可迭代集合，不是普通数组。
4. 以为 Map 的遍历顺序一定等于定义顺序；普通 Map 不应依赖遍历顺序。
5. 只遍历 key 后又忘记根据 key 取 value。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val scores = Map("Alice" -> 95, "Bob" -> 88, "Cindy" -> 76)

    for ((name, score) <- scores) {
      println(s"$name 的成绩是 $score")
    }

    println("所有姓名：" + scores.keys.mkString(", "))
    println("所有成绩：" + scores.values.mkString(", "))
  }
}
```

#### 示例解释

1. `scores` 保存姓名和成绩的对应关系。
2. `(name, score)` 用来接收每一组键值对。
3. `scores.keys` 得到所有 key。
4. `scores.values` 得到所有 value。
5. `mkString(", ")` 把结果拼接成字符串输出。

---

### 知识点 12：Set 集合的基本概念

#### 这个知识点是什么？

`Set` 是不包含重复元素的集合。  
如果向 Set 中放入重复元素，最终只会保留一个。

#### 为什么要学它？

`Set` 适合处理：

* 去重
* 判断是否存在
* 求交集
* 求并集
* 分析共同兴趣
* 保存不重复标签

#### 基本语法

```scala
val nums = Set(1, 2, 2, 3)
println(nums)
```

输出中只会包含 `1, 2, 3`，不会保留两个 `2`。

#### 课堂中的理解方式

课堂中把 `Set` 看作“不重复的集合”，并通过星期、任务、客户喜好等场景说明它可以帮助我们判断、筛选和分析数据。

#### 初学者容易犯的错误

1. 以为 Set 会保存重复元素。
2. 依赖普通 Set 的输出顺序。
3. 把 Set 当成可以通过下标访问的数组。
4. 以为 `Set(1, 2, 2, 3)` 长度是 4。
5. 不理解不可变 Set 的添加和删除会返回新 Set。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val nums = Set(1, 2, 2, 3, 3, 4)

    println(nums)
    println(nums.contains(2))
    println(nums.size)
  }
}
```

#### 示例解释

1. `Set(1, 2, 2, 3, 3, 4)` 中有重复数字。
2. Set 会自动去重。
3. `contains(2)` 判断集合中是否存在 2。
4. `size` 返回去重后的元素数量。
5. 普通 Set 不适合用来表示有重复次数的数据。

---

### 知识点 13：不可变 Set 与可变 Set

#### 这个知识点是什么？

和 Map 一样，Set 也分为不可变 Set 和可变 Set。

* 不可变 Set：添加或删除会返回新集合，不修改原集合。
* 可变 Set：可以直接修改原集合内容。

#### 为什么要学它？

Set 常用于数据筛选和去重。  
如果希望程序更安全，可以使用不可变 Set；如果需要频繁增删，可以使用可变 Set。

#### 基本语法

```scala
// 不可变 Set
val nums = Set(1, 2, 3)
val nums2 = nums + 4
val nums3 = nums2 - 1

// 可变 Set
import scala.collection.mutable

val mutableNums = mutable.Set(1, 2, 3)
mutableNums += 4
mutableNums -= 2
```

#### 课堂中的理解方式

课堂中提到 Scala 默认更常使用不可变集合。如果要使用可变集合，需要引入 `mutable` 包。  
这个思路和 Map 类似。

#### 初学者容易犯的错误

1. 对不可变 Set 写 `nums += 4`，却不理解这涉及重新赋值问题。
2. 用 `val nums = Set(...)` 后，以为不能得到添加元素后的新集合。
3. 使用可变 Set 时忘记导入 `scala.collection.mutable`。
4. 以为 `+` 一定修改原集合。
5. 把 `mutable` 和 `immutable` 的含义记反。

#### 正确示例

```scala
import scala.collection.mutable

object Main {
  def main(args: Array[String]): Unit = {
    val immutableNums = Set(1, 2, 3)
    val newNums = immutableNums + 4

    println(immutableNums)
    println(newNums)

    val mutableNums = mutable.Set(1, 2, 3)
    mutableNums += 4
    mutableNums -= 2

    println(mutableNums)
  }
}
```

#### 示例解释

1. `immutableNums + 4` 不会修改 `immutableNums`，而是返回新集合。
2. `newNums` 保存添加 4 后的结果。
3. `mutable.Set` 是可变集合。
4. `mutableNums += 4` 会直接修改集合内容。
5. `mutableNums -= 2` 会删除元素 2。

---

### 知识点 14：Set 的 exists、intersect、++、head、tail

#### 这个知识点是什么？

Set 提供了很多常用方法：

* `exists`：判断是否存在满足条件的元素。
* `intersect` 或 `&`：求交集。
* `++`：合并两个集合。
* `head`：取出集合中的一个元素。
* `tail`：返回去掉 `head` 后的剩余元素。

#### 为什么要学它？

这些方法可以帮助我们更高效地做集合判断和数据分析，例如判断是否有偶数、找共同爱好、合并标签等。

#### 基本语法

```scala
val nums = Set(1, 2, 3, 4)

nums.exists(x => x % 2 == 0)
nums.exists(_ % 2 == 0)

val a = Set("铅笔", "橡皮", "文具盒")
val b = Set("铅笔", "修正带", "橡皮")

val common = a.intersect(b)
val all = a ++ b
```

#### 课堂中的理解方式

课堂中用“几个同学买的东西”说明交集：  
第一个同学买了铅笔、橡皮、文具盒；第二个同学买了铅笔、橡皮、修正带。  
求交集后，就能发现他们共同买了铅笔和橡皮。

#### 需要修正的不严谨说法

课堂中把 `head` 说成“第一个元素”，把 `tail` 说成“最后一个元素”附近的表达容易引起误解。更准确地说：

1. `head` 是集合中取出的一个元素。
2. 对于有顺序的集合如 `List`，`head` 通常就是第一个元素。
3. 对于普通 `Set`，不应该依赖元素顺序，因此不要把 `head` 理解成稳定的“第一个”。
4. `tail` 不是“最后一个元素”，而是“去掉 head 后剩下的集合”。

#### 初学者容易犯的错误

1. 以为 `exists` 返回具体元素，其实返回布尔值。
2. 把 `intersect` 和 `++` 混淆。
3. 以为 `++` 会保留重复元素。
4. 在 Set 上依赖固定顺序。
5. 把 `tail` 理解成最后一个元素。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val nums = Set(1, 2, 3, 4)

    val hasEven = nums.exists(_ % 2 == 0)
    println("是否存在偶数：" + hasEven)

    val studentA = Set("铅笔", "橡皮", "文具盒")
    val studentB = Set("铅笔", "橡皮", "修正带")

    val common = studentA.intersect(studentB)
    val allItems = studentA ++ studentB

    println("共同购买：" + common)
    println("所有购买：" + allItems)
  }
}
```

#### 示例解释

1. `exists(_ % 2 == 0)` 判断集合中是否有偶数。
2. `studentA.intersect(studentB)` 求两个集合的交集。
3. 交集表示两个学生都买过的物品。
4. `studentA ++ studentB` 合并两个集合。
5. 因为 Set 不保留重复元素，所以合并结果中重复物品只出现一次。

---

### 知识点 15：查看 Scala API 文档

#### 这个知识点是什么？

API 文档是官方提供的类、对象、方法、属性说明。  
学习 Scala 集合时，很多方法不可能全部死记硬背，需要学会查 API。

#### 为什么要学它？

课堂上提到的 `Map`、`Set`、`List`、`ArrayBuffer` 都有很多方法。  
学习者只靠课堂记忆很难掌握全部内容，所以要学会通过 API 查：

* 方法名称
* 方法参数
* 返回值类型
* 示例代码
* 所属集合类型
* 是否可变
* 是否会返回新集合

#### 基本使用思路

```text
1. 明确自己要查的类型，例如 Set、Map、List、ArrayBuffer。
2. 查看它属于 immutable 还是 mutable。
3. 找到方法列表。
4. 阅读方法说明、参数和返回值。
5. 尝试复制示例代码运行。
6. 修改示例，变成自己的代码。
```

#### 课堂中的理解方式

课堂中老师打开 API，查看不可变 `List`、`Set` 等类型的说明，并提醒学生要主动看文档。  
这说明学习编程不能只靠记课堂笔记，还要能查资料、看示例、自己验证。

#### 初学者容易犯的错误

1. 只背方法名，不看方法参数和返回值。
2. 不区分 Scala 2 和 Scala 3 的文档版本。
3. 不区分 immutable 和 mutable 集合。
4. 看到复杂类型签名就完全跳过。
5. 不运行示例代码，导致理解停留在文字层面。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val nums = Set(1, 2, 3, 4)

    println(nums.size)
    println(nums.exists(_ > 2))
    println(nums.filter(_ % 2 == 0))
  }
}
```

#### 示例解释

1. `size` 查看集合元素数量。
2. `exists(_ > 2)` 判断是否存在大于 2 的元素。
3. `filter(_ % 2 == 0)` 筛选偶数。
4. 这些方法都可以通过 API 文档查到。
5. 初学者可以从简单方法开始逐步积累。

---

## 5. 重点概念对比

| 概念 A | 概念 B | 区别 | 示例 |
|---|---|---|---|
| `Array` | `ArrayBuffer` | `Array` 长度固定，`ArrayBuffer` 长度可变 | `Array(1,2,3)`；`ArrayBuffer(1,2,3)` |
| `to` | `until` | `to` 包含结束值，`until` 不包含结束值 | `0 to 3` 得到 0,1,2,3；`0 until 3` 得到 0,1,2 |
| `<-` | `->` | `<-` 用于遍历，`->` 用于创建键值对 | `x <- nums`；`"Bob" -> 90` |
| `Map` | `Set` | `Map` 保存键值对，`Set` 保存不重复元素 | `Map("A" -> 1)`；`Set(1,2,3)` |
| `map(key)` | `map.get(key)` | 前者找不到 key 会异常，后者返回 `Option` | `scores("Bob")`；`scores.get("Bob")` |
| `get` | `getOrElse` | `get` 返回 `Some` 或 `None`，`getOrElse` 直接给出值或默认值 | `scores.get("Tom")`；`scores.getOrElse("Tom", 0)` |
| `Some` | `None` | `Some` 表示有值，`None` 表示没有值 | `Some(90)`；`None` |
| `immutable` | `mutable` | 不可变集合不能直接修改原对象，可变集合可以直接修改 | `Map(...)`；`mutable.Map(...)` |
| `contains` | `exists` | `contains` 判断是否包含指定元素或 key，`exists` 判断是否存在满足条件的元素 | `set.contains(2)`；`set.exists(_ % 2 == 0)` |
| `intersect` | `++` | `intersect` 求交集，`++` 合并集合 | `a.intersect(b)`；`a ++ b` |
| `head` | `tail` | `head` 取一个头部元素，`tail` 返回去掉 head 后剩余部分；普通 Set 不应依赖顺序 | `set.head`；`set.tail` |
| 普通 for 循环 | `for ... yield` | 普通 for 主要执行操作，`yield` 会生成新集合 | `for (x <- xs) println(x)`；`for (x <- xs) yield x * 2` |

---

## 6. 代码示例整理

### 示例 1：ArrayBuffer 收集数据后转换为 Array

适用知识点：

```text
ArrayBuffer、追加、插入、删除、toArray
```

代码：

```scala
import scala.collection.mutable.ArrayBuffer

object Main {
  def main(args: Array[String]): Unit = {
    val buffer = ArrayBuffer[String]()

    buffer += "Alice"
    buffer += "Bob"
    buffer += "Cindy"

    buffer.insert(1, "David")
    buffer.remove(0)

    val namesArray = buffer.toArray

    println("变长数组：" + buffer)
    println("定长数组：" + namesArray.mkString(", "))
  }
}
```

运行结果：

```text
变长数组：ArrayBuffer(David, Bob, Cindy)
定长数组：David, Bob, Cindy
```

代码解释：

```text
1. ArrayBuffer[String]() 创建一个空的字符串变长数组。
2. += 用于追加元素。
3. insert(1, "David") 表示在下标 1 的位置插入 David。
4. remove(0) 表示删除下标 0 的元素 Alice。
5. toArray 把变长数组转换为定长数组。
6. mkString(", ") 把数组内容转换为方便阅读的字符串。
```

初学者提示：

```text
ArrayBuffer 需要导入 scala.collection.mutable.ArrayBuffer；Array 的长度固定，ArrayBuffer 的长度可以变化。
```

---

### 示例 2：使用 for、until、reverse 遍历数组

适用知识点：

```text
Range、until、数组下标、reverse、数组遍历
```

代码：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val nums = Array(10, 20, 30, 40)

    println("正向遍历：")
    for (i <- 0 until nums.length) {
      println(s"nums($i) = ${nums(i)}")
    }

    println("反向遍历：")
    for (i <- nums.indices.reverse) {
      println(s"nums($i) = ${nums(i)}")
    }
  }
}
```

运行结果：

```text
正向遍历：
nums(0) = 10
nums(1) = 20
nums(2) = 30
nums(3) = 40
反向遍历：
nums(3) = 40
nums(2) = 30
nums(1) = 20
nums(0) = 10
```

代码解释：

```text
1. nums.length 是数组长度，值为 4。
2. 0 until nums.length 生成 0, 1, 2, 3。
3. nums(i) 根据下标取数组元素。
4. nums.indices 得到数组所有合法下标。
5. reverse 让下标倒序排列。
```

初学者提示：

```text
遍历数组下标时，优先使用 0 until nums.length 或 nums.indices，不要写 0 to nums.length。
```

---

### 示例 3：使用 for 推导式筛选偶数并乘以 2

适用知识点：

```text
for 推导式、yield、守卫、数组转换
```

代码：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val nums = Array(1, 2, 3, 4, 5, 6)

    val result = for (num <- nums if num % 2 == 0) yield num * 2

    println(result.mkString(", "))
  }
}
```

运行结果：

```text
4, 8, 12
```

代码解释：

```text
1. nums 中包含 1 到 6。
2. num <- nums 表示依次遍历数组元素。
3. if num % 2 == 0 是守卫，只保留偶数。
4. yield num * 2 表示把筛选出的偶数乘以 2。
5. result 是新生成的数组，原数组 nums 不会被修改。
```

初学者提示：

```text
for ... yield 的重点是“生成新集合”，不是简单打印。
```

---

### 示例 4：Map 的创建与安全取值

适用知识点：

```text
Map、键值对、右箭头、get、getOrElse、contains
```

代码：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val scores = Map(
      "Alice" -> 95,
      "Bob" -> 88,
      "Cindy" -> 76
    )

    println("Alice 的成绩：" + scores("Alice"))
    println("Tom 的成绩：" + scores.get("Tom"))
    println("Tom 的默认成绩：" + scores.getOrElse("Tom", 0))

    if (scores.contains("Bob")) {
      println("Bob 存在，成绩是：" + scores("Bob"))
    }
  }
}
```

运行结果：

```text
Alice 的成绩：95
Tom 的成绩：None
Tom 的默认成绩：0
Bob 存在，成绩是：88
```

代码解释：

```text
1. Map(...) 创建不可变映射。
2. "Alice" -> 95 创建键值对。
3. scores("Alice") 直接根据 key 取值。
4. scores.get("Tom") 返回 Option，因为 Tom 不存在，所以是 None。
5. getOrElse("Tom", 0) 在找不到 Tom 时返回默认值 0。
6. contains("Bob") 判断是否包含 Bob 这个 key。
```

初学者提示：

```text
直接使用 scores("Tom") 会因为 Tom 不存在而报错，初学者更推荐使用 getOrElse。
```

---

### 示例 5：可变 Map 的更新、添加和删除

适用知识点：

```text
mutable.Map、更新、添加、删除
```

代码：

```scala
import scala.collection.mutable

object Main {
  def main(args: Array[String]): Unit = {
    val scores = mutable.Map("Bob" -> 80, "Alice" -> 95)

    scores("Bob") = 90
    scores += ("Cindy" -> 76)
    scores -= "Alice"

    println(scores)
  }
}
```

运行结果：

```text
HashMap(Bob -> 90, Cindy -> 76)
```

代码解释：

```text
1. import scala.collection.mutable 导入可变集合。
2. mutable.Map(...) 创建可变映射。
3. scores("Bob") = 90 更新 Bob 的值。
4. scores += ("Cindy" -> 76) 添加新的键值对。
5. scores -= "Alice" 删除 Alice 这个 key。
```

初学者提示：

```text
不同 Scala 版本或运行环境中，Map 的输出顺序可能不同，不要依赖普通 Map 的显示顺序。
```

---

### 示例 6：Set 去重、判断和求交集

适用知识点：

```text
Set、去重、exists、intersect、++
```

代码：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val nums = Set(1, 2, 2, 3, 4)

    println("去重后的集合：" + nums)
    println("是否存在偶数：" + nums.exists(_ % 2 == 0))

    val studentA = Set("铅笔", "橡皮", "文具盒")
    val studentB = Set("铅笔", "橡皮", "修正带")

    println("共同购买：" + studentA.intersect(studentB))
    println("全部购买：" + (studentA ++ studentB))
  }
}
```

运行结果：

```text
去重后的集合：Set(1, 2, 3, 4)
是否存在偶数：true
共同购买：Set(铅笔, 橡皮)
全部购买：Set(铅笔, 橡皮, 文具盒, 修正带)
```

代码解释：

```text
1. Set 会自动去除重复元素。
2. exists(_ % 2 == 0) 判断是否存在偶数。
3. intersect 求两个集合的交集。
4. ++ 合并两个集合。
5. Set 合并后仍然不会保留重复元素。
```

初学者提示：

```text
Set 适合处理“不重复”的数据，如果需要保存重复次数，可以使用 List、Array 或 Map 统计。
```

---

## 7. 课堂案例整理

### 案例 1：星期映射为数字

* 案例名称：星期与后台编号的映射
* 对应知识点：Map、键值对、右箭头、getOrElse
* 案例背景：前台界面中用户看到的是 Monday、Tuesday 等星期名称，但后台计算时常常使用数字编号。
* 解决思路：使用 Map 保存“星期名称 -> 编号”的对应关系。
* Scala 代码：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val weekMap = Map(
      "Sunday" -> 0,
      "Monday" -> 1,
      "Tuesday" -> 2,
      "Wednesday" -> 3,
      "Thursday" -> 4,
      "Friday" -> 5,
      "Saturday" -> 6
    )

    val day = "Monday"
    val code = weekMap.getOrElse(day, -1)

    println(s"$day 对应的编号是 $code")
  }
}
```

* 这个案例帮助理解什么：

```text
Map 可以把用户容易理解的文字和程序容易处理的编号对应起来。
```

---

### 案例 2：学生成绩查询

* 案例名称：根据姓名查询成绩
* 对应知识点：Map、contains、安全取值
* 案例背景：给定一组成绩数据，根据学生姓名查询成绩。
* 解决思路：把姓名作为 key，成绩作为 value；查询前先判断 key 是否存在。
* Scala 代码：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val scores = Map("Alice" -> 95, "Bob" -> 88, "Cindy" -> 76)

    val name = "Tom"

    if (scores.contains(name)) {
      println(s"$name 的成绩是 ${scores(name)}")
    } else {
      println(s"没有找到 $name 的成绩")
    }
  }
}
```

* 这个案例帮助理解什么：

```text
使用 contains 可以避免直接取不存在的 key 导致程序异常。
```

---

### 案例 3：分析共同购买物品

* 案例名称：两个学生的共同购买物品
* 对应知识点：Set、intersect、去重
* 案例背景：两个学生分别购买了一些文具，需要找出他们共同购买的物品。
* 解决思路：把每个人购买的物品放入 Set，然后求交集。
* Scala 代码：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val studentA = Set("铅笔", "橡皮", "文具盒", "铅笔")
    val studentB = Set("铅笔", "橡皮", "修正带")

    val common = studentA.intersect(studentB)

    println("共同购买的物品：" + common.mkString(", "))
  }
}
```

* 这个案例帮助理解什么：

```text
Set 可以自动去重，intersect 可以找出两个集合共同拥有的元素。
```

---

### 案例 4：筛选偶数后进行计算

* 案例名称：筛选偶数并乘以 2
* 对应知识点：for 推导式、守卫、yield
* 案例背景：给定一组整数，只处理其中的偶数，并把偶数乘以 2。
* 解决思路：使用 for 推导式中的 if 守卫筛选偶数，再通过 yield 生成新数组。
* Scala 代码：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val nums = Array(1, 2, 3, 4, 5, 6)

    val result = for (num <- nums if num % 2 == 0) yield num * 2

    println(result.mkString(", "))
  }
}
```

* 这个案例帮助理解什么：

```text
for 推导式不只是循环，还可以完成筛选、计算和生成新集合。
```

---

## 8. 易错点总结

### 易错点 1：用 `to` 遍历数组下标导致越界

错误示例：

```scala
val nums = Array(10, 20, 30)

for (i <- 0 to nums.length) {
  println(nums(i))
}
```

正确写法：

```scala
val nums = Array(10, 20, 30)

for (i <- 0 until nums.length) {
  println(nums(i))
}
```

解释：

```text
nums.length 是 3，但合法下标只有 0、1、2。0 to nums.length 会包含 3，访问 nums(3) 会越界。
```

---

### 易错点 2：把 `<-` 和 `->` 混用

错误示例：

```scala
val scores = Map("Bob" <- 90)
```

正确写法：

```scala
val scores = Map("Bob" -> 90)
```

解释：

```text
-> 用于创建键值对；<- 用于 for 循环或推导式中的遍历。
```

---

### 易错点 3：直接读取不存在的 Map key

错误示例：

```scala
val scores = Map("Alice" -> 95)
println(scores("Tom"))
```

正确写法：

```scala
val scores = Map("Alice" -> 95)
println(scores.getOrElse("Tom", 0))
```

解释：

```text
Tom 不存在时，scores("Tom") 会抛出异常；getOrElse 可以提供默认值。
```

---

### 易错点 4：以为 `get` 返回普通值

错误示例：

```scala
val scores = Map("Alice" -> 95)
val score: Int = scores.get("Alice")
```

正确写法：

```scala
val scores = Map("Alice" -> 95)
val score: Int = scores.getOrElse("Alice", 0)
```

解释：

```text
scores.get("Alice") 返回的是 Option[Int]，不是 Int。要得到普通 Int，可以使用 getOrElse。
```

---

### 易错点 5：忘记导入可变集合

错误示例：

```scala
val scores = mutable.Map("Bob" -> 80)
```

正确写法：

```scala
import scala.collection.mutable

val scores = mutable.Map("Bob" -> 80)
```

解释：

```text
使用 mutable.Map 或 mutable.Set 时，需要导入 scala.collection.mutable，或者写完整路径。
```

---

### 易错点 6：以为 Set 会保留重复元素

错误示例：

```scala
val nums = Set(1, 2, 2, 3)
println(nums.size) // 误以为是 4
```

正确理解：

```scala
val nums = Set(1, 2, 2, 3)
println(nums.size) // 结果是 3
```

解释：

```text
Set 是不重复集合，重复的 2 只会保留一个。
```

---

### 易错点 7：依赖普通 Set 的输出顺序

错误示例：

```scala
val nums = Set(3, 1, 2)
println(nums.head) // 误以为一定是 3
```

正确理解：

```scala
val nums = Set(3, 1, 2)
println(nums.head) // 不建议依赖普通 Set 的顺序
```

解释：

```text
普通 Set 主要表达“是否包含”，不适合表达固定顺序。如果需要顺序，应使用 List、Vector 或 Array。
```

---

### 易错点 8：以为 `for ... yield` 会修改原数组

错误示例：

```scala
val nums = Array(1, 2, 3)
for (num <- nums) yield num * 2
println(nums.mkString(", "))
```

正确写法：

```scala
val nums = Array(1, 2, 3)
val doubled = for (num <- nums) yield num * 2
println(doubled.mkString(", "))
```

解释：

```text
yield 会生成新集合，不会自动修改原数组。需要用变量接收新结果。
```

---

## 9. 小测验题目

### 题目 1：下面哪个写法可以创建一个 Map 键值对？

A. `"Bob" <- 90`  
B. `"Bob" -> 90`  
C. `"Bob" => 90`  
D. `"Bob" == 90`

正确答案：B

解析：

```text
Scala 中常用 -> 创建键值对，例如 "Bob" -> 90。<- 通常用于 for 遍历。
```

---

### 题目 2：下面哪个表达式最适合遍历数组合法下标？

A. `0 to arr.length`  
B. `1 to arr.length`  
C. `0 until arr.length`  
D. `0 until arr.length + 1`

正确答案：C

解析：

```text
数组下标从 0 开始，最后一个下标是 arr.length - 1。0 until arr.length 正好不包含 arr.length。
```

---

### 题目 3：`Map("Alice" -> 95).get("Tom")` 的结果是什么？

A. `0`  
B. `null`  
C. `None`  
D. 把 Tom 加入 Map

正确答案：C

解析：

```text
get 方法安全取值，key 不存在时返回 None，而不是抛出异常或返回 0。
```

---

### 题目 4：下面关于 Set 的说法，正确的是哪一个？

A. Set 可以保存多个完全相同的元素  
B. Set 一定按照插入顺序输出  
C. Set 是不包含重复元素的集合  
D. Set 只能保存字符串

正确答案：C

解析：

```text
Set 的核心特点是不包含重复元素。普通 Set 不应该依赖输出顺序。
```

---

### 题目 5：下面哪个方法可以在 Map 中找不到 key 时返回默认值？

A. `get`  
B. `getOrElse`  
C. `contains`  
D. `exists`

正确答案：B

解析：

```text
getOrElse(key, defaultValue) 表示如果 key 存在就返回对应值，否则返回默认值。
```

---

### 题目 6：`for (x <- nums if x % 2 == 0) yield x * 2` 中的 `if x % 2 == 0` 叫作什么？

A. 构造器  
B. 守卫  
C. 伴生对象  
D. 异常捕获

正确答案：B

解析：

```text
for 推导式中的 if 条件用于筛选元素，通常称为守卫。
```

---

### 题目 7：下面哪段代码创建的是可变 Map？

A. `val m = Map("A" -> 1)`  
B. `val m = scala.collection.mutable.Map("A" -> 1)`  
C. `val m = Set("A" -> 1)`  
D. `val m = Array("A" -> 1)`

正确答案：B

解析：

```text
scala.collection.mutable.Map 表示可变映射；直接 Map(...) 通常是不可变映射。
```

---

### 题目 8：`Set(1, 2, 2, 3).size` 的结果通常是？

A. 2  
B. 3  
C. 4  
D. 报错

正确答案：B

解析：

```text
Set 会去除重复元素，所以集合中实际只有 1、2、3 三个元素。
```

---

## 10. 拖拽匹配素材

1. `Array` —— 定长数组
2. `ArrayBuffer` —— 可变长度数组
3. `toArray` —— 将集合转换为数组
4. `until` —— 生成不包含结束值的范围
5. `to` —— 生成包含结束值的范围
6. `by` —— 设置遍历步长
7. `<-` —— for 中的遍历符号
8. `->` —— 创建键值对
9. `Map` —— 保存键值对的集合
10. `Set` —— 不包含重复元素的集合
11. `get` —— 安全获取 Map 中的值
12. `getOrElse` —— 获取值或返回默认值
13. `contains` —— 判断是否包含指定元素或 key
14. `Option` —— 表示可能有值也可能没有值
15. `Some` —— Option 中表示有值
16. `None` —— Option 中表示没有值
17. `mutable` —— 可变集合
18. `immutable` —— 不可变集合
19. `exists` —— 判断是否存在满足条件的元素
20. `intersect` —— 求两个集合的交集

---

## 11. 流程动画素材

### 流程 1：Map 安全取值流程

```text
1. 程序中已经创建了一个 Map，例如保存学生姓名和成绩。
2. 用户或程序提供一个 key，例如学生姓名 "Tom"。
3. 程序调用 getOrElse("Tom", 0) 尝试查询。
4. Scala 先检查 Map 中是否存在 "Tom" 这个 key。
5. 如果存在，就返回 Tom 对应的成绩。
6. 如果不存在，就返回默认值 0。
7. 程序继续向下执行，不会因为 key 不存在而中断。
```

### 流程 2：for 推导式筛选并生成新集合

```text
1. 程序准备一个原始数组 nums。
2. for 推导式开始从 nums 中依次取出元素。
3. 每个元素先进入 if 守卫条件。
4. 如果元素满足条件，就继续执行 yield 后面的表达式。
5. 如果元素不满足条件，就跳过该元素。
6. yield 把每次计算出的结果收集起来。
7. 所有元素处理完成后，生成一个新的集合。
```

### 流程 3：Set 求共同兴趣流程

```text
1. 把第一个用户的兴趣放入 Set。
2. 把第二个用户的兴趣放入另一个 Set。
3. Set 自动去除各自集合中的重复兴趣。
4. 使用 intersect 求两个 Set 的交集。
5. 交集中只保留两个用户都拥有的兴趣。
6. 输出交集结果，用于分析共同爱好。
```

---

## 12. 课后练习题

### 练习 1：使用 ArrayBuffer 收集整数并转成 Array

题目：

```text
创建一个 ArrayBuffer[Int]，依次加入 10、20、30，然后转成 Array 并输出。
```

考查知识点：

```text
ArrayBuffer、+=、toArray、mkString
```

参考答案：

```scala
import scala.collection.mutable.ArrayBuffer

object Main {
  def main(args: Array[String]): Unit = {
    val buffer = ArrayBuffer[Int]()

    buffer += 10
    buffer += 20
    buffer += 30

    val arr = buffer.toArray

    println(arr.mkString(", "))
  }
}
```

解题思路：

```text
先创建变长数组，使用 += 追加元素，再使用 toArray 转成定长数组，最后输出。
```

---

### 练习 2：使用 until 遍历数组下标

题目：

```text
定义数组 Array("Java", "Scala", "Python")，使用下标遍历输出每个元素。
```

考查知识点：

```text
Array、until、数组下标、取值器
```

参考答案：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val langs = Array("Java", "Scala", "Python")

    for (i <- 0 until langs.length) {
      println(s"langs($i) = ${langs(i)}")
    }
  }
}
```

解题思路：

```text
数组下标从 0 开始，因此使用 0 until langs.length 获取所有合法下标。
```

---

### 练习 3：使用 for 推导式生成平方数组

题目：

```text
给定 Array(1, 2, 3, 4)，使用 for ... yield 生成每个元素的平方。
```

考查知识点：

```text
for 推导式、yield、数组转换
```

参考答案：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val nums = Array(1, 2, 3, 4)

    val squares = for (num <- nums) yield num * num

    println(squares.mkString(", "))
  }
}
```

解题思路：

```text
for 负责遍历每个元素，yield 后面写 num * num，把每个元素变成平方值。
```

---

### 练习 4：使用 Map 查询学生成绩

题目：

```text
创建一个 Map，保存 Alice、Bob、Cindy 的成绩。查询 Tom 的成绩，如果没有 Tom，则返回 0。
```

考查知识点：

```text
Map、键值对、getOrElse
```

参考答案：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val scores = Map(
      "Alice" -> 95,
      "Bob" -> 88,
      "Cindy" -> 76
    )

    val tomScore = scores.getOrElse("Tom", 0)

    println("Tom 的成绩是：" + tomScore)
  }
}
```

解题思路：

```text
使用 Map 保存姓名和成绩的对应关系；查询可能不存在的 key 时，使用 getOrElse 更安全。
```

---

### 练习 5：遍历 Map 输出所有成绩

题目：

```text
创建一个学生成绩 Map，并遍历输出“姓名：成绩”的格式。
```

考查知识点：

```text
Map、键值对遍历、字符串插值
```

参考答案：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val scores = Map(
      "Alice" -> 95,
      "Bob" -> 88,
      "Cindy" -> 76
    )

    for ((name, score) <- scores) {
      println(s"$name：$score")
    }
  }
}
```

解题思路：

```text
Map 中的每个元素都是一个键值对，遍历时可以使用 (name, score) 同时接收 key 和 value。
```

---

### 练习 6：使用 Set 去重

题目：

```text
给定一组商品标签 "咖啡"、"文具"、"咖啡"、"饮料"，使用 Set 去重后输出。
```

考查知识点：

```text
Set、去重、mkString
```

参考答案：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val tags = Set("咖啡", "文具", "咖啡", "饮料")

    println(tags.mkString(", "))
  }
}
```

解题思路：

```text
Set 会自动去除重复元素，因此重复的“咖啡”只会保留一个。
```

---

### 练习 7：求两个集合的交集

题目：

```text
两个用户的兴趣分别是 Set("咖啡", "电影", "音乐") 和 Set("音乐", "运动", "咖啡")，求共同兴趣。
```

考查知识点：

```text
Set、intersect、交集
```

参考答案：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val userA = Set("咖啡", "电影", "音乐")
    val userB = Set("音乐", "运动", "咖啡")

    val common = userA.intersect(userB)

    println("共同兴趣：" + common.mkString(", "))
  }
}
```

解题思路：

```text
共同兴趣就是两个集合中都存在的元素，可以使用 intersect 求交集。
```

---

### 练习 8：判断集合中是否存在偶数

题目：

```text
定义 Set(1, 3, 5, 8)，判断其中是否存在偶数。
```

考查知识点：

```text
Set、exists、匿名函数、取余
```

参考答案：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val nums = Set(1, 3, 5, 8)

    val hasEven = nums.exists(_ % 2 == 0)

    println("是否存在偶数：" + hasEven)
  }
}
```

解题思路：

```text
exists 用于判断集合中是否存在满足条件的元素；_ % 2 == 0 表示判断一个数是否为偶数。
```

---

## 13. 本节课知识结构图文字版

```text
Scala Map 映射、Set 集合与数组复习
├── 数组复习
│   ├── Array 定长数组
│   ├── ArrayBuffer 变长数组
│   ├── += 追加元素
│   ├── insert 插入元素
│   ├── remove 删除元素
│   └── toArray 转换为定长数组
├── 数组遍历
│   ├── Range 范围
│   ├── to 闭区间
│   ├── until 左闭右开区间
│   ├── by 步长
│   ├── reverse 反向遍历
│   ├── 使用下标遍历
│   └── 直接遍历元素
├── for 推导式
│   ├── for 普通遍历
│   ├── yield 生成新集合
│   ├── if 守卫
│   └── 筛选后计算
├── Map 映射
│   ├── key-value 键值对
│   ├── -> 创建键值对
│   ├── <- 遍历集合
│   ├── map(key) 直接取值
│   ├── get 安全取值
│   ├── getOrElse 默认值
│   ├── contains 判断 key
│   ├── Option
│   │   ├── Some
│   │   └── None
│   ├── 不可变 Map
│   ├── 可变 Map
│   └── 遍历 key 和 value
├── Set 集合
│   ├── 不重复元素
│   ├── 不可变 Set
│   ├── 可变 Set
│   ├── contains 判断元素
│   ├── exists 判断条件
│   ├── ++ 合并集合
│   ├── intersect 求交集
│   ├── head
│   └── tail
├── Scala API
│   ├── 查看类型说明
│   ├── 查看方法参数
│   ├── 查看返回值
│   ├── 区分 Scala 版本
│   └── 区分 mutable 与 immutable
└── 常见错误
    ├── 数组下标越界
    ├── 箭头符号混淆
    ├── 直接读取不存在的 key
    ├── get 返回 Option 却当普通值使用
    ├── 忘记导入 mutable 包
    ├── 依赖 Set 顺序
    └── 误解 yield 会修改原集合
```

---

## 14. 后续生成网页时可使用的数据建议

* 建议课程 ID：`scala-map-set-collection-basic-20260326-1516`
* 建议课程标题：Scala Map 映射、Set 集合与数组复习（2026-03-26 15:16）
* 建议章节：Scala 元组与 Map、Scala 数组与集合基础
* 建议标签：

```text
ArrayBuffer, Range, for, yield, Map, Set, Option, getOrElse, contains, mutable, immutable, API
```

* 适合放入 summary 的内容：

```text
本节课复习了 Scala 数组和 for 推导式，重点讲解 Map 映射和 Set 集合。学生需要理解键值对、Option 安全取值、可变与不可变集合、Set 去重与交集等内容，并学会通过 Scala API 查询集合方法。
```

* 适合放入 keyPoints 的内容：

```text
1. ArrayBuffer 可以动态追加、插入、删除元素，并可通过 toArray 转为定长数组。
2. 0 until arr.length 是遍历数组下标的安全方式。
3. for ... yield 可以根据原集合生成新集合。
4. for 推导式中的 if 守卫可以筛选满足条件的元素。
5. Map 由 key-value 键值对组成，适合表示对应关系。
6. -> 用于创建键值对，<- 用于遍历集合。
7. get 和 getOrElse 可以避免直接取不存在 key 导致异常。
8. Option 用 Some 和 None 表示有值或无值。
9. Set 是不包含重复元素的集合，适合去重和求交集。
10. mutable 和 immutable 表示可变集合与不可变集合。
```

* 适合放入 codeExamples 的内容：

```text
1. ArrayBuffer 追加、插入、删除并转换为 Array。
2. 使用 until 和 reverse 遍历数组。
3. 使用 for ... yield 筛选偶数并乘以 2。
4. 使用 Map 保存学生成绩并安全查询。
5. 使用 mutable.Map 更新、添加和删除键值对。
6. 使用 Set 去重、判断和求交集。
```

* 适合放入 quiz 的内容：

```text
1. -> 和 <- 的区别。
2. to 和 until 的区别。
3. Map.get 返回值的含义。
4. getOrElse 的用途。
5. Set 的去重特性。
6. mutable.Map 的创建方式。
7. for 推导式守卫的作用。
8. Set.intersect 的作用。
```

* 适合放入 dragMatch 的内容：

```text
Map —— 保存键值对的集合
Set —— 不包含重复元素的集合
Option —— 表示可能有值也可能没有值
Some —— 表示有值
None —— 表示没有值
getOrElse —— 获取值或返回默认值
```

* 适合放入 flow 的内容：

```text
Map 安全取值流程：创建 Map -> 输入 key -> 调用 getOrElse -> 判断 key 是否存在 -> 存在返回 value -> 不存在返回默认值 -> 程序继续执行。
```

* 适合放入 exercises 的内容：

```text
1. 创建 ArrayBuffer 并转为 Array。
2. 使用 until 遍历数组下标。
3. 使用 for ... yield 生成平方数组。
4. 使用 Map 查询成绩。
5. 遍历 Map 输出所有键值对。
6. 使用 Set 去重。
7. 使用 Set 求两个用户共同兴趣。
8. 使用 exists 判断是否存在偶数。
```

* 适合放入 conclusion 的内容：

```text
本节课的重点是理解 Scala 集合编程的基础思想。数组适合保存有序数据，Map 适合保存对应关系，Set 适合保存不重复数据。掌握这些集合后，后续学习模式匹配、高阶函数、集合进阶和数据处理会更加容易。
```

---

## 15. 课后总结

1. 本节课的核心是从数组过渡到集合，重点掌握 `Map` 和 `Set` 两种常用数据结构。
2. 学习 Scala 时要特别注意符号含义，`<-` 和 `->` 虽然相似，但用途完全不同。
3. 通过本节课，应该能够使用 `Map` 表示键值对应关系，并使用 `getOrElse` 安全获取值。
4. `Option` 是 Scala 中非常重要的思想，它比直接使用 `null` 更安全，后续在模式匹配和函数式编程中会继续出现。
5. `Set` 的核心特点是不重复，适合做去重、交集、共同兴趣分析等任务。
6. 可变集合和不可变集合是 Scala 学习中的重点，默认优先理解不可变集合，再根据需要使用可变集合。
7. `for ... yield` 和守卫体现了 Scala 简洁的集合处理能力，后续高阶函数会进一步强化这种写法。
8. 课堂中提到的 API 查询非常重要，编程学习不能只靠背语法，要学会查文档、看示例、自己运行验证。
9. 本节内容会在后续学习集合进阶、函数式编程、模式匹配、异常处理和实际数据分析中反复使用。
10. 课后建议多写小练习，例如成绩查询、标签去重、共同兴趣分析、星期编号映射等，把 Map 和 Set 的用途真正理解清楚。

---

## 课堂补充说明：课程安排、环境配置与学习方法

> 这一部分不是本节 Scala 知识主线，但属于课堂中老师强调的学习建议，适合放在讲义末尾作为补充。

### 1. 关于课程安排

根据课堂内容，老师提到课程整体大约 8 章，理论课预计到第 8 周左右结束，后面进入实验课和考试复习。  
具体时间安排以老师后续通知为准。

### 2. 关于编程环境

课堂中提到 Scala 学习通常需要：

```text
1. JDK
2. IDE，例如 IntelliJ IDEA 或 Eclipse
3. Scala 插件或 Scala SDK
```

如果 JDK 8 和 JDK 11 共存，可能出现环境变量或注册表残留问题。  
初学者遇到环境问题时，不建议盲目重装系统，可以优先检查：

```text
1. JAVA_HOME 是否正确。
2. Path 中是否指向正确的 JDK bin 目录。
3. IDE 中配置的 Project SDK 是否正确。
4. Scala SDK 是否正确安装。
5. 是否存在多个 JDK 版本冲突。
```

### 3. 关于学习方式

课堂中老师强调，学习编程不能只看代码能不能运行，更重要的是形成编程思维：

```text
1. 遇到问题要画流程、想逻辑。
2. 不要只背语法，要理解为什么这样写。
3. 多敲代码，多调试，多尝试修改示例。
4. 可以使用 AI 辅助学习，但不能只让 AI 给答案。
5. 要学会查官方 API 和资料。
6. 参加比赛或做小项目时，重点是解决真实问题。
```

### 4. 关于 Scala 和 Java 的关系

课堂中多次用 Java 和 Scala 对比。整理时需要注意：

```text
1. Java 适合训练传统面向对象编程思想。
2. Scala 代码通常更简洁，但抽象程度更高。
3. 学习 Scala 时不能简单把它当成 Java 的换皮语法。
4. Scala 中集合、for 推导式、Option、不可变数据结构非常重要。
5. 对初学者来说，先理解思想，再追求简洁写法更稳妥。
```
