# 课程总结：2026-03-26 Scala 编程基础要点及练习讲解

## 1. 课程基本信息

* **课程 ID 建议：** `scala-collections-map-foreach-basic`
* **课程标题：** 2026-03-26 Scala 编程基础要点及练习讲解
* **所属章节：** Scala 数组与集合基础
* **上课日期：** 2026-03-26
* **知识点标签：** Scala 集合、List、Array、Set、Map、Range、for 循环、foreach、toArray、元组、匿名函数
* **难度等级：** 入门
* **适合对象：** 已经接触 Scala 基本语法，正在学习集合、循环和简单编程练习的初学者
* **本节课一句话概括：** 本节课围绕 Scala 集合的基本使用展开，重点讲解 List、Array、Set、Map、Range、for 循环、Map 转数组以及 foreach 遍历，为考试中的基础编程题做准备。

> 说明：原始转写中有部分口语化和识别错误，例如“Tuple 方法将 map 转换为数组”根据上下文应理解为 `toArray` 方法；“列表的值可变”也需要修正，Scala 默认的 `List` 是不可变集合。

---

## 2. 课堂摘要

1. 本节课首先回顾了 Scala 中集合的基本使用，包括定义集合、组合集合、输出集合以及根据集合内容得到新的结果。
2. 课堂中重点说明了考试常见题型通常不会太复杂，主要考查学生能否定义集合、遍历集合、使用循环筛选数据并输出结果。
3. 老师通过区间 `Range` 的例子说明了如何生成一段连续数字，并结合步长、偶数筛选、求和、倒序输出等操作进行练习。
4. 本节课讲到了 `List`、`Array`、`Set`、`Map` 等常见数据结构，并说明它们在遍历方式和使用场景上的相似点与差异。
5. 课堂中通过“单位矩阵”的例子帮助学生理解嵌套集合，即一个集合中的元素本身也可以是集合。
6. 本节课还介绍了 Map 的键值对结构，以及如何使用 `toArray` 将 Map 转换成由元组组成的数组。
7. 老师强调了 `foreach` 的作用：它可以依次取出集合中的每个元素，并对每个元素执行指定操作。
8. 最后，课堂结合考试和笔记检查安排，提醒学生要重点掌握集合、循环和简单输出类题目。

---

## 3. 本节课学习目标

学完本节课后，你应该能够：

1. 理解 Scala 中集合的基本概念，知道 `List`、`Array`、`Set`、`Map` 分别适合表示什么数据。
2. 能使用 `Range` 表示一段连续数字，并结合步长生成指定规律的数字序列。
3. 能使用 `for` 循环遍历集合或区间，并完成筛选、求和、输出等基础任务。
4. 能理解 `Map` 的键值对结构，并能根据键和值组织简单映射数据。
5. 能使用 `toArray` 将 Map 转换为数组，并理解转换后的数组元素是元组。
6. 能使用 `foreach` 遍历集合，并理解匿名函数 `x => println(x)` 的基本含义。
7. 能区分 `List` 和 `Array` 的基本特点，尤其是不可变集合和可变数组之间的区别。
8. 能看懂嵌套集合的结构，例如用 `List[List[Int]]` 表示类似二维数组或矩阵的数据。
9. 能发现并修正常见错误，例如混淆 `toArray` 与 Tuple、误认为默认 `List` 可以修改、错误使用 Map 键值对等。
10. 能完成考试中常见的 Scala 集合和循环基础编程题。

---

## 4. 知识点详细整理

### 知识点 1：Scala 集合的基本概念

#### 这个知识点是什么？

集合是用来存放一组数据的结构。Scala 中常见的集合包括：

* `List`：列表，常用于保存一串有顺序的数据。
* `Array`：数组，长度固定，可以通过下标访问和修改元素。
* `Set`：集合，用于保存不重复的元素。
* `Map`：映射，用于保存“键 -> 值”的对应关系。

集合可以帮助我们一次性管理多个数据，而不是为每个数据单独定义一个变量。

#### 为什么要学它？

实际编程中经常需要处理一批数据，例如一组成绩、一周的星期名称、多个商品价格或一组学生姓名。集合就是管理这些数据的基础工具。后续学习函数式编程、模式匹配、集合高级操作时，也都会频繁使用集合。

#### 基本语法

```scala
val numbers = List(1, 2, 3, 4, 5)

val scores = Array(90, 85, 100)

val names = Set("Tom", "Jerry", "Alice")

val weekMap = Map(
  1 -> "星期一",
  2 -> "星期二",
  3 -> "星期三"
)
```

#### 课堂中的理解方式

老师从“定义一个集合，然后对集合进行操作”开始讲解。例如可以定义两个集合，对它们进行组合或输出；也可以定义一个 `Map`，把数字和星期几对应起来，然后输出这些对应关系。课堂强调考试中经常会考这种基础题型：定义、遍历、转换、输出。

#### 初学者容易犯的错误

1. 认为所有集合都可以随意修改，忽略了 Scala 中有可变集合和不可变集合之分。
2. 混淆 `List`、`Array`、`Set`、`Map` 的作用。
3. 把 `Map` 理解成普通数组，而没有理解“键值对”的含义。
4. 输出集合时只打印变量名，却不知道如何逐个遍历元素。
5. 不知道 Scala 集合很多方法会返回新集合，而不是修改原集合。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val numbers = List(1, 2, 3)
    val weekMap = Map(1 -> "星期一", 2 -> "星期二", 3 -> "星期三")

    println(numbers)
    println(weekMap)
  }
}
```

#### 示例解释

1. `object Main` 定义一个单例对象。
2. `def main(args: Array[String]): Unit` 是程序入口。
3. `val numbers = List(1, 2, 3)` 定义一个整数列表。
4. `val weekMap = Map(...)` 定义一个数字到星期名称的映射。
5. `println(numbers)` 输出整个列表。
6. `println(weekMap)` 输出整个映射。

---

### 知识点 2：List 列表

#### 这个知识点是什么？

`List` 是 Scala 中常用的列表集合。它有顺序，可以保存多个元素。Scala 默认的 `List` 是不可变集合，也就是说创建之后不能直接修改原列表中的元素。

需要注意：课堂原文中提到“列表的值可变”，这在 Scala 默认 `List` 中不准确。Scala 标准库中的 `List` 默认是不可变的。如果需要可变列表，应使用 `ListBuffer` 等可变集合。

#### 为什么要学它？

`List` 是 Scala 中非常常见的数据结构，尤其适合函数式编程。很多递归、模式匹配、集合转换操作都可以基于 `List` 学习。

#### 基本语法

```scala
val nums = List(1, 2, 3, 4)

val words = List("Scala", "Java", "Python")

val nested = List(
  List(1, 0, 0),
  List(0, 1, 0),
  List(0, 0, 1)
)
```

#### 课堂中的理解方式

老师把列表和数组进行类比，说明列表中可以存放多个元素，也可以出现“列表里面再放列表”的嵌套结构。课堂中的单位矩阵例子就可以整理为一个嵌套列表：

```scala
List(
  List(1, 0, 0),
  List(0, 1, 0),
  List(0, 0, 1)
)
```

这个结构可以理解为三行三列的数据。

#### 初学者容易犯的错误

1. 认为 `List` 创建后可以像数组一样直接修改某个下标的值。
2. 忘记 `List` 默认是不可变集合。
3. 把嵌套列表看成普通一维列表，不理解里面每个元素还是一个列表。
4. 认为 `List(1, "a")` 是推荐写法；虽然 Scala 可以推断为 `List[Any]`，但初学阶段应尽量保持元素类型一致。
5. 使用下标访问时忘记下标从 `0` 开始。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val nums = List(10, 20, 30)

    println(nums.head)
    println(nums.tail)
    println(nums)
  }
}
```

#### 示例解释

1. `List(10, 20, 30)` 创建一个不可变列表。
2. `nums.head` 获取列表的第一个元素，结果是 `10`。
3. `nums.tail` 获取除第一个元素之外的剩余部分，结果是 `List(20, 30)`。
4. `println(nums)` 输出原列表，原列表不会被改变。

---

### 知识点 3：Array 数组

#### 这个知识点是什么？

`Array` 是数组，用来保存一组长度固定的元素。数组的元素可以通过下标访问，下标从 `0` 开始。和默认 `List` 不同，`Array` 中已有位置上的元素可以被修改。

#### 为什么要学它？

数组是很多编程语言都会讲的基础数据结构。它适合理解下标、遍历、二维数据、矩阵等内容。课堂中老师也用数组和列表进行类比，帮助大家理解嵌套结构。

#### 基本语法

```scala
val arr = Array(10, 20, 30)

println(arr(0))

arr(1) = 99
println(arr.mkString(", "))
```

#### 课堂中的理解方式

老师提到数组需要“一个一个地遍历”。这说明数组不是只看整体结果，还要能通过循环逐个访问里面的元素。数组和列表在思想上都可以表示一组数据，但写法和可变性不同。

#### 初学者容易犯的错误

1. 使用 `arr[0]` 访问数组元素，这是 Java、C 风格写法；Scala 中应写 `arr(0)`。
2. 忘记数组下标从 `0` 开始。
3. 访问不存在的下标，例如数组长度为 3 却访问 `arr(3)`。
4. 认为 `val arr = Array(...)` 表示数组内容完全不能改；实际上 `val` 只是不能让 `arr` 指向另一个数组，数组内部元素仍可修改。
5. 直接 `println(arr)`，结果可能不是想要的内容，通常应使用 `mkString` 格式化输出。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val scores = Array(90, 80, 100)

    scores(1) = 85

    for (score <- scores) {
      println(score)
    }
  }
}
```

#### 示例解释

1. `Array(90, 80, 100)` 创建一个数组。
2. `scores(1) = 85` 修改下标为 `1` 的元素，也就是第二个元素。
3. `for (score <- scores)` 逐个取出数组中的元素。
4. `println(score)` 输出每个分数。

---

### 知识点 4：Range 区间与步长

#### 这个知识点是什么？

`Range` 表示一段连续的数字区间。它常用于循环，例如从 `1` 遍历到 `10`，或者按指定步长生成数字。

Scala 中常见写法包括：

```scala
1 to 10        // 包含 10
1 until 10     // 不包含 10
1 to 10 by 2   // 步长为 2
```

#### 为什么要学它？

课堂中提到考试常考类似题目：输出某个范围内的偶数、倒序输出、求某些数字的和等。这些题目通常都需要使用 `Range` 和循环完成。

#### 基本语法

```scala
val r1 = 1 to 10
val r2 = 1 until 10
val r3 = 1 to 10 by 2
val r4 = 10 to 1 by -1
```

#### 课堂中的理解方式

老师举了类似“1 到 10 之间输出偶数”“步长为 4 的数求和”“从小到大输入再倒序输出”的例子。本质上都是先得到一个数字范围，再对范围中的数字进行筛选、遍历或统计。

#### 初学者容易犯的错误

1. 混淆 `to` 和 `until`：`to` 包含结束值，`until` 不包含结束值。
2. 忘记步长写在 `by` 后面。
3. 倒序时仍然写正步长，导致区间不符合预期。
4. 筛选偶数时把 `%` 取余运算写错。
5. 求和时只输出每个数，没有累加。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val evenNumbers = 1 to 10 by 1

    for (num <- evenNumbers) {
      if (num % 2 == 0) {
        println(num)
      }
    }
  }
}
```

#### 示例解释

1. `1 to 10 by 1` 表示从 1 到 10，步长为 1。
2. `for (num <- evenNumbers)` 依次取出每一个数字。
3. `num % 2 == 0` 判断数字是否为偶数。
4. 如果条件成立，就输出这个偶数。

---

### 知识点 5：for 循环遍历集合

#### 这个知识点是什么？

`for` 循环可以遍历区间、数组、列表、集合等数据结构。它的基本思想是：从集合中依次取出每一个元素，然后对每个元素执行一段代码。

#### 为什么要学它？

课堂中明确强调，基础考试题通常重点考查 `for` 循环和集合应用。只要能熟练写出循环，就能完成很多基础题，例如输出偶数、求和、遍历 Map、打印数组等。

#### 基本语法

```scala
for (变量 <- 集合或区间) {
  要执行的代码
}
```

示例：

```scala
for (i <- 1 to 5) {
  println(i)
}
```

#### 课堂中的理解方式

老师把 `for` 循环理解为“一个一个地遍历它”。例如数组、列表、区间都可以用 `for` 遍历。考试中如果要求“输出什么”“求什么值”，通常都可以先写循环，再在循环中完成判断或计算。

#### 初学者容易犯的错误

1. 把 `<-` 写成 `->`。
2. 忘记循环变量只是临时变量，不需要提前声明。
3. 在循环中只写判断条件，却没有写输出或累加语句。
4. 循环范围写错，例如想遍历 1 到 10 却写成 `1 until 10`。
5. 把 Scala 的 `for` 写成 Java 风格的 `for (int i = 0; i < 10; i++)`。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    var sum = 0

    for (i <- 1 to 10) {
      sum = sum + i
    }

    println(sum)
  }
}
```

#### 示例解释

1. `var sum = 0` 定义一个可变变量，用来保存累加结果。
2. `for (i <- 1 to 10)` 从 1 遍历到 10。
3. `sum = sum + i` 每次把当前数字加到 `sum` 中。
4. `println(sum)` 输出最终结果 `55`。

---

### 知识点 6：Map 映射与键值对

#### 这个知识点是什么？

`Map` 是映射，用来保存“键 -> 值”的关系。例如可以用数字表示星期：

```scala
1 -> "星期一"
2 -> "星期二"
3 -> "星期三"
```

其中左边是键，右边是值。可以通过键找到对应的值。

#### 为什么要学它？

Map 很适合表示“对应关系”，例如学生学号对应姓名、商品编号对应价格、数字对应星期名称等。课堂中老师举了星期一、星期二、星期三的例子，这就是典型的 Map 使用场景。

#### 基本语法

```scala
val weekMap = Map(
  1 -> "星期一",
  2 -> "星期二",
  3 -> "星期三"
)

println(weekMap(1))
```

#### 课堂中的理解方式

老师把 Map 当作一种“映射”来讲，也就是一个数据对应另一个数据。比如数字 `1` 对应“星期一”，数字 `2` 对应“星期二”。如果题目要求输出这种对应关系，就可以使用 Map。

#### 初学者容易犯的错误

1. 把 `1 -> "星期一"` 写成 `1, "星期一"`。
2. 使用不存在的键直接访问，可能导致异常。
3. 认为 Map 的输出顺序一定和定义顺序完全一样；实际上具体顺序取决于 Map 类型，初学阶段不要依赖普通 Map 的遍历顺序。
4. 混淆键和值，例如把“星期一”当键，把 `1` 当值。
5. 不理解 Map 转数组后每个元素是一个二元组。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val weekMap = Map(
      1 -> "星期一",
      2 -> "星期二",
      3 -> "星期三"
    )

    println(weekMap(1))
    println(weekMap.getOrElse(4, "没有这个星期编号"))
  }
}
```

#### 示例解释

1. `Map(...)` 创建一个映射。
2. `1 -> "星期一"` 表示键 `1` 对应值 `"星期一"`。
3. `weekMap(1)` 根据键 `1` 获取值。
4. `getOrElse(4, "没有这个星期编号")` 表示如果键 `4` 不存在，就返回默认提示，避免直接报错。

---

### 知识点 7：Map 的 `toArray` 转换

#### 这个知识点是什么？

`toArray` 是集合常用方法之一，可以把集合转换成数组。对 `Map` 使用 `toArray` 时，得到的是一个数组，数组中的每个元素是一个二元组：

```scala
Array((1, "星期一"), (2, "星期二"), (3, "星期三"))
```

每个二元组可以理解为一组键值对。

#### 为什么要学它？

课堂中练习题要求“定义一个 Map，然后转换成数组输出”。这类题考查学生是否理解集合转换，以及是否能看懂元组结构。

#### 基本语法

```scala
val arr = map.toArray
```

完整示例：

```scala
val weekMap = Map(1 -> "星期一", 2 -> "星期二", 3 -> "星期三")
val weekArray = weekMap.toArray
```

#### 课堂中的理解方式

原文中出现“Tuple 方法将 map 转换为数组”的说法。根据上下文推测，老师实际讲的是 `toArray` 方法。`Map.toArray` 的结果不是把键和值拆散，而是把每个键值对变成一个元组，然后放进数组中。

#### 初学者容易犯的错误

1. 把 `toArray` 写成 `to array` 或 `toarray`。
2. 认为转换后原来的 Map 会消失或被修改；实际上 `toArray` 会返回新数组，不会改变原 Map。
3. 不知道数组中的元素是元组，例如 `(1, "星期一")`。
4. 直接打印数组时结果不直观，应使用 `foreach` 或 `mkString` 辅助输出。
5. 依赖 Map 转数组后的顺序；普通 Map 不建议依赖遍历顺序。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val weekMap = Map(1 -> "星期一", 2 -> "星期二", 3 -> "星期三")

    val weekArray = weekMap.toArray

    weekArray.foreach(item => println(item))
  }
}
```

#### 示例解释

1. `weekMap` 保存数字到星期名称的映射。
2. `weekMap.toArray` 把 Map 转成数组。
3. `weekArray` 的每个元素类似 `(1, "星期一")`。
4. `foreach(item => println(item))` 逐个输出数组中的元组。

---

### 知识点 8：foreach 与匿名函数

#### 这个知识点是什么？

`foreach` 是集合常用的遍历方法。它会依次取出集合中的每个元素，并对每个元素执行指定操作。

常见写法：

```scala
collection.foreach(element => println(element))
```

其中：

* `collection` 是要遍历的集合。
* `element` 是每次取出的元素。
* `element => println(element)` 是匿名函数。

#### 为什么要学它？

`foreach` 是 Scala 中非常常见的集合遍历方式。它比传统 `for` 循环更简洁，也能帮助学生逐步理解函数式编程中的“把函数作为操作传入集合方法”的思想。

#### 基本语法

```scala
集合.foreach(元素变量 => 对元素执行的操作)
```

例如：

```scala
val numbers = List(1, 2, 3)
numbers.foreach(num => println(num))
```

#### 课堂中的理解方式

老师把 `foreach` 解释为“对集合中的每一个元素执行特定操作”。课堂中还提到 `number` 类似函数中的参数，后面的 `println(number)` 类似函数体。也就是说，`num => println(num)` 可以理解为一个没有名字的函数。

#### 初学者容易犯的错误

1. 把 `foreach` 写成 `forEach`。Scala 标准集合中常用方法名是全小写 `foreach`。
2. 不理解 `num => println(num)` 中的 `num` 是临时参数。
3. 以为 `foreach` 会自动返回一个新集合；实际上 `foreach` 主要用于执行操作，返回值通常是 `Unit`。
4. 在 `foreach` 中写了复杂逻辑但忘记输出结果。
5. 混淆 `foreach` 和 `map`：`foreach` 偏向执行动作，`map` 偏向生成新集合。

#### 正确示例

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val numbers = List(1, 2, 3, 4, 5)

    numbers.foreach(num => println(num))
  }
}
```

#### 示例解释

1. `numbers` 是一个列表。
2. `foreach` 会依次取出 `1`、`2`、`3`、`4`、`5`。
3. `num` 表示当前取出的元素。
4. `println(num)` 表示把当前元素打印出来。

---

## 5. 重点概念对比

| 概念 A | 概念 B | 区别 | 示例 |
|---|---|---|---|
| `List` | `Array` | `List` 默认不可变，适合函数式处理；`Array` 长度固定，但已有元素可以修改 | `val xs = List(1,2,3)`；`val arr = Array(1,2,3)` |
| `Set` | `List` | `Set` 不保留重复元素；`List` 可以保留重复元素并强调顺序 | `Set(1,1,2)` 结果只有 `1,2`；`List(1,1,2)` 保留两个 `1` |
| `Map` | `Array` | `Map` 通过键找值；`Array` 通过下标找元素 | `map(1)` 获取键 1 的值；`arr(0)` 获取第一个元素 |
| `to` | `until` | `to` 包含结束值；`until` 不包含结束值 | `1 to 3` 是 1、2、3；`1 until 3` 是 1、2 |
| `for` | `foreach` | `for` 是循环语法；`foreach` 是集合方法，接收一个函数对每个元素执行操作 | `for (x <- xs) println(x)`；`xs.foreach(x => println(x))` |
| `foreach` | `map` | `foreach` 主要用于执行动作，不生成新集合；`map` 会把每个元素转换后生成新集合 | `xs.foreach(println)`；`xs.map(x => x * 2)` |
| `val` | `var` | `val` 定义后不能重新赋值；`var` 可以重新赋值 | `val a = 1`；`var b = 1; b = 2` |
| `=` | `==` | `=` 用于赋值；`==` 用于比较是否相等 | `sum = sum + i`；`i % 2 == 0` |
| 键 | 值 | Map 中键用于查找，值是查找后得到的数据 | `1 -> "星期一"` 中 `1` 是键，`"星期一"` 是值 |
| 元组 | 列表 | 元组常表示固定数量、不同含义的一组数据；列表表示一串同类数据 | `(1, "星期一")` 是二元组；`List(1,2,3)` 是列表 |

---

## 6. 代码示例整理

### 示例 1：定义 List、Set 和 Map 并输出

**适用知识点：**

```text
集合基础、List、Set、Map、输出语句
```

**代码：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val numbers = List(1, 2, 3, 3)
    val uniqueNumbers = Set(1, 2, 3, 3)
    val weekMap = Map(
      1 -> "星期一",
      2 -> "星期二",
      3 -> "星期三"
    )

    println(numbers)
    println(uniqueNumbers)
    println(weekMap)
  }
}
```

**运行结果：**

```text
List(1, 2, 3, 3)
Set(1, 2, 3)
Map(1 -> 星期一, 2 -> 星期二, 3 -> 星期三)
```

> 说明：不同 Scala 版本或不同 Map/Set 实现中，`Set` 和 `Map` 的打印顺序可能不同，学习时重点理解结构，不要死记输出顺序。

**代码解释：**

1. `numbers` 是一个列表，可以保留重复元素。
2. `uniqueNumbers` 是一个集合，重复的 `3` 只保留一份。
3. `weekMap` 是一个映射，保存数字到星期名称的对应关系。
4. 三个 `println` 分别输出不同集合。

**初学者提示：**

```text
List、Set、Map 都是集合，但它们强调的重点不同：List 强调顺序，Set 强调不重复，Map 强调键值对应。
```

---

### 示例 2：使用 Range 和 for 循环输出 1 到 10 的偶数

**适用知识点：**

```text
Range、for 循环、if 判断、取余运算
```

**代码：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    for (i <- 1 to 10) {
      if (i % 2 == 0) {
        println(i)
      }
    }
  }
}
```

**运行结果：**

```text
2
4
6
8
10
```

**代码解释：**

1. `1 to 10` 生成从 1 到 10 的区间，包含 10。
2. `for (i <- 1 to 10)` 依次取出每个数字。
3. `i % 2 == 0` 判断当前数字是否为偶数。
4. 如果是偶数，就执行 `println(i)`。

**初学者提示：**

```text
% 是取余运算。一个整数对 2 取余结果为 0，说明它是偶数。
```

---

### 示例 3：求 1 到 20 中步长为 4 的数字之和

**适用知识点：**

```text
Range、by 步长、for 循环、累加
```

**代码：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    var sum = 0

    for (i <- 1 to 20 by 4) {
      sum = sum + i
    }

    println(sum)
  }
}
```

**运行结果：**

```text
45
```

**代码解释：**

1. `1 to 20 by 4` 得到数字：1、5、9、13、17。
2. `var sum = 0` 用来保存累加结果。
3. 循环每执行一次，就把当前数字加到 `sum` 中。
4. 最终输出 `45`。

**初学者提示：**

```text
需要不断改变累加结果时，可以使用 var。若只是保存固定数据，优先使用 val。
```

---

### 示例 4：Map 转数组并使用 foreach 输出

**适用知识点：**

```text
Map、toArray、元组、foreach、匿名函数
```

**代码：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val weekMap = Map(
      1 -> "星期一",
      2 -> "星期二",
      3 -> "星期三"
    )

    val weekArray = weekMap.toArray

    weekArray.foreach(item => println(item))
  }
}
```

**运行结果：**

```text
(1,星期一)
(2,星期二)
(3,星期三)
```

> 说明：普通 `Map` 的遍历顺序不建议作为考试判断重点。真正重要的是理解 `toArray` 后每个元素是一个键值对元组。

**代码解释：**

1. `weekMap` 定义一个映射。
2. `toArray` 将 Map 转换成数组。
3. `weekArray` 中的每个元素都是一个二元组。
4. `foreach` 遍历数组。
5. `item => println(item)` 表示对每个元素执行打印操作。

**初学者提示：**

```text
Map.toArray 不会修改原来的 Map，它会返回一个新的数组。
```

---

### 示例 5：使用嵌套 List 表示单位矩阵

**适用知识点：**

```text
嵌套集合、List、矩阵思想、遍历
```

**代码：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val matrix = List(
      List(1, 0, 0),
      List(0, 1, 0),
      List(0, 0, 1)
    )

    matrix.foreach(row => println(row.mkString(" ")))
  }
}
```

**运行结果：**

```text
1 0 0
0 1 0
0 0 1
```

**代码解释：**

1. `matrix` 是一个嵌套列表。
2. 外层 `List` 表示多行。
3. 每个内层 `List` 表示一行数据。
4. `foreach(row => ...)` 逐行遍历。
5. `row.mkString(" ")` 把一行中的数字用空格拼接起来输出。

**初学者提示：**

```text
嵌套集合可以理解为“集合里面还有集合”，常用于表示表格、矩阵、二维数据。
```

---

## 7. 课堂案例整理

### 案例 1：数字和星期名称的映射

**对应知识点：**

```text
Map、键值对、toArray、foreach
```

**案例背景：**

课堂中提到可以定义一个 `Map`，让数字 `1`、`2`、`3` 分别对应“星期一”“星期二”“星期三”，然后将这个映射转换成数组并输出。

**解决思路：**

1. 先用 `Map` 保存数字和星期名称的对应关系。
2. 使用 `toArray` 把 Map 转换成数组。
3. 使用 `foreach` 遍历数组中的每个键值对。
4. 输出每个键值对。

**Scala 代码：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val days = Map(
      1 -> "星期一",
      2 -> "星期二",
      3 -> "星期三"
    )

    val dayArray = days.toArray

    dayArray.foreach(day => println(day))
  }
}
```

**这个案例帮助理解什么：**

这个案例帮助学生理解 Map 的键值对结构，以及 `toArray` 转换后每个元素会变成一个二元组。

---

### 案例 2：输出 1 到 10 的偶数并倒序输出

**对应知识点：**

```text
Range、for 循环、if 判断、倒序遍历
```

**案例背景：**

课堂中提到类似考试题：在一个数字范围内筛选偶数，或者将数字倒序输出。

**解决思路：**

1. 使用 `1 to 10` 生成数字区间。
2. 通过 `if (i % 2 == 0)` 判断偶数。
3. 正序输出偶数。
4. 使用 `10 to 1 by -1` 倒序遍历数字，并筛选偶数。

**Scala 代码：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    println("正序偶数：")
    for (i <- 1 to 10) {
      if (i % 2 == 0) {
        println(i)
      }
    }

    println("倒序偶数：")
    for (i <- 10 to 1 by -1) {
      if (i % 2 == 0) {
        println(i)
      }
    }
  }
}
```

**这个案例帮助理解什么：**

这个案例帮助学生理解循环、条件判断、区间、步长和倒序遍历之间的关系。

---

### 案例 3：单位矩阵的嵌套列表表示

**对应知识点：**

```text
List、嵌套集合、二维数据
```

**案例背景：**

课堂中老师看到类似三行三列的结构，并引导学生联想到“单位矩阵”。

**解决思路：**

1. 使用外层 `List` 表示整个矩阵。
2. 使用内层 `List` 表示每一行。
3. 每一行包含三个数字。
4. 使用 `foreach` 按行输出。

**Scala 代码：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val identityMatrix = List(
      List(1, 0, 0),
      List(0, 1, 0),
      List(0, 0, 1)
    )

    for (row <- identityMatrix) {
      println(row.mkString(" "))
    }
  }
}
```

**这个案例帮助理解什么：**

这个案例帮助学生把“列表中还有列表”的结构和二维表格、矩阵联系起来，理解嵌套集合的实际意义。

---

### 课堂补充说明：AI 使用技巧与课程安排

原始文本中夹杂了非 Scala 主线内容，例如“下周周二试听课”“周四检查笔记本”等课程安排。这些内容不属于 Scala 知识点，但可以作为课堂补充说明保留。

* **课程安排：** 根据原文，下周周二有试听课，下周周四检查笔记本。
* **学习建议：** 老师提醒学生需要抄写笔记、完成基础练习，并重点掌握考试可能出现的集合与循环题型。
* **处理方式：** 这些内容不进入核心知识点，但可在后续课程网站中作为“课堂提醒”或“备注”展示。

---

## 8. 易错点总结

### 易错点 1：把 Scala 默认 `List` 当成可变集合

**错误示例：**

```scala
val nums = List(1, 2, 3)
nums(0) = 100
```

**正确写法：**

```scala
val nums = List(1, 2, 3)
val newNums = 100 :: nums.tail

println(newNums)
```

**解释：**

Scala 默认的 `List` 是不可变集合，不能像数组一样直接修改某个位置的值。如果确实要频繁修改元素，可以考虑使用 `Array` 或可变集合。

---

### 易错点 2：用 Java 风格访问数组元素

**错误示例：**

```scala
val arr = Array(10, 20, 30)
println(arr[0])
```

**正确写法：**

```scala
val arr = Array(10, 20, 30)
println(arr(0))
```

**解释：**

Scala 中访问数组元素使用圆括号 `()`，不是方括号 `[]`。因此第一个元素应写成 `arr(0)`。

---

### 易错点 3：混淆 `to` 和 `until`

**错误示例：**

```scala
for (i <- 1 until 10) {
  println(i)
}
```

如果题目要求输出 1 到 10，这段代码不会输出 10。

**正确写法：**

```scala
for (i <- 1 to 10) {
  println(i)
}
```

**解释：**

`to` 包含结束值，`until` 不包含结束值。题目如果明确要求包含 10，应使用 `1 to 10`。

---

### 易错点 4：把 `foreach` 写成 `forEach`

**错误示例：**

```scala
val nums = List(1, 2, 3)
nums.forEach(num => println(num))
```

**正确写法：**

```scala
val nums = List(1, 2, 3)
nums.foreach(num => println(num))
```

**解释：**

Scala 标准集合中常用方法名是 `foreach`，全部小写。`forEach` 是很多 Java API 中常见的方法名，不能直接照搬到 Scala 集合上。

---

### 易错点 5：认为 `Map.toArray` 会修改原 Map

**错误示例：**

```scala
val days = Map(1 -> "星期一", 2 -> "星期二")
days.toArray
println(days)
```

误以为 `days` 已经变成数组。

**正确写法：**

```scala
val days = Map(1 -> "星期一", 2 -> "星期二")
val dayArray = days.toArray

println(days)
dayArray.foreach(item => println(item))
```

**解释：**

`toArray` 会返回一个新数组，不会改变原来的 Map。需要用一个新变量接收转换结果。

---

### 易错点 6：不理解 Map 转数组后的元素是元组

**错误示例：**

```scala
val days = Map(1 -> "星期一", 2 -> "星期二")
val arr = days.toArray

arr.foreach(day => println(day + 1))
```

**正确写法：**

```scala
val days = Map(1 -> "星期一", 2 -> "星期二")
val arr = days.toArray

arr.foreach {
  case (num, name) => println(num + " 对应 " + name)
}
```

**解释：**

`Map.toArray` 得到的是 `Array[(Int, String)]`，每个元素是一个二元组 `(键, 值)`，不能把整个元组当成普通数字加 1。

---

### 易错点 7：求和时忘记累加变量

**错误示例：**

```scala
for (i <- 1 to 10) {
  i + i
}
```

**正确写法：**

```scala
var sum = 0

for (i <- 1 to 10) {
  sum = sum + i
}

println(sum)
```

**解释：**

求和需要一个变量保存累计结果，只写 `i + i` 不会自动保存最终和。

---

## 9. 小测验题目

### 题目 1：下面哪个是 Scala 中正确的 List 定义方式？

A. `val nums = List(1, 2, 3)`  
B. `List nums = [1, 2, 3]`  
C. `val nums = list{1, 2, 3}`  
D. `nums List = 1, 2, 3`

**正确答案：A**

**解析：**

Scala 中可以使用 `List(元素1, 元素2, ...)` 创建列表，并使用 `val` 保存引用。

---

### 题目 2：关于 Scala 默认 `List`，下面说法正确的是？

A. 默认 `List` 创建后可以直接修改任意下标的值  
B. 默认 `List` 是不可变集合  
C. `List` 只能保存字符串  
D. `List` 不能被遍历

**正确答案：B**

**解析：**

Scala 默认 `List` 是不可变集合，创建后不能直接修改其中某个位置的元素。

---

### 题目 3：`1 until 5` 表示哪些数字？

A. 1、2、3、4、5  
B. 1、2、3、4  
C. 0、1、2、3、4  
D. 2、3、4、5

**正确答案：B**

**解析：**

`until` 不包含结束值，所以 `1 until 5` 生成 1、2、3、4。

---

### 题目 4：下面哪个方法可以把 Map 转换为数组？

A. `toList`  
B. `toMap`  
C. `toArray`  
D. `foreach`

**正确答案：C**

**解析：**

`toArray` 可以将集合转换为数组。对 Map 使用 `toArray` 时，得到的数组元素是键值对元组。

---

### 题目 5：`foreach` 的主要作用是什么？

A. 删除集合中的所有元素  
B. 对集合中的每个元素执行指定操作  
C. 把所有集合都变成 Map  
D. 创建一个新的类

**正确答案：B**

**解析：**

`foreach` 用于遍历集合，对每个元素执行指定操作，例如打印元素。

---

### 题目 6：下面哪个是正确的匿名函数写法？

A. `num -> println(num)`  
B. `num => println(num)`  
C. `num = println(num)`  
D. `println => num(num)`

**正确答案：B**

**解析：**

Scala 中匿名函数常用 `参数 => 函数体` 的形式，例如 `num => println(num)`。

---

### 题目 7：下面代码的输出结果是什么？

```scala
val nums = Set(1, 1, 2, 3)
println(nums)
```

A. 一定输出 `Set(1, 1, 2, 3)`  
B. 集合中不会保留重复的 `1`  
C. 程序无法编译  
D. Set 只能保存字符串

**正确答案：B**

**解析：**

Set 的特点是不保存重复元素，所以重复的 `1` 只会保留一份。

---

## 10. 拖拽匹配素材

1. `List` —— 有顺序的列表集合
2. `Array` —— 长度固定的数组
3. `Set` —— 不保存重复元素的集合
4. `Map` —— 保存键值对的映射
5. `Range` —— 表示一段连续数字
6. `to` —— 创建包含结束值的区间
7. `until` —— 创建不包含结束值的区间
8. `by` —— 指定区间步长
9. `foreach` —— 遍历集合并执行操作
10. `toArray` —— 将集合转换为数组
11. `->` —— 创建 Map 键值对
12. `=>` —— 表示匿名函数
13. `head` —— 获取 List 第一个元素
14. `tail` —— 获取 List 去掉第一个元素后的部分
15. `mkString` —— 将集合元素拼接成字符串

---

## 11. 流程动画素材

### 流程主题：Map 转数组并使用 foreach 输出

```text
1. 程序从 main 方法开始执行。
2. 使用 Map 定义数字和星期名称的对应关系。
3. 调用 toArray 方法，把 Map 转换为数组。
4. 转换后的数组中，每个元素都是一个二元组，例如 (1, "星期一")。
5. 程序调用 foreach 方法，准备逐个处理数组中的元素。
6. foreach 每次取出一个元组，并把它交给匿名函数中的参数。
7. 匿名函数执行 println，将当前元组输出到控制台。
8. 所有元素处理完后，foreach 结束。
9. 程序继续向下执行，如果没有更多代码，程序结束。
```

---

## 12. 课后练习题

### 练习 1：定义一个 List 并输出所有元素

**题目：**

定义一个列表，保存数字 1、2、3、4、5，并使用 `foreach` 输出每个数字。

**考查知识点：**

```text
List、foreach、匿名函数、输出语句
```

**参考答案：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val nums = List(1, 2, 3, 4, 5)

    nums.foreach(num => println(num))
  }
}
```

**解题思路：**

先用 `List` 定义数字列表，再调用 `foreach`，把每个元素传给匿名函数并输出。

---

### 练习 2：输出 1 到 20 之间的偶数

**题目：**

使用 `for` 循环输出 1 到 20 之间所有偶数。

**考查知识点：**

```text
Range、for 循环、if 判断、取余运算
```

**参考答案：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    for (i <- 1 to 20) {
      if (i % 2 == 0) {
        println(i)
      }
    }
  }
}
```

**解题思路：**

先使用 `1 to 20` 生成区间，再通过 `i % 2 == 0` 判断偶数，满足条件就输出。

---

### 练习 3：计算 1 到 100 的和

**题目：**

使用 `for` 循环计算 1 到 100 的所有整数之和。

**考查知识点：**

```text
for 循环、Range、var、累加
```

**参考答案：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    var sum = 0

    for (i <- 1 to 100) {
      sum = sum + i
    }

    println(sum)
  }
}
```

**解题思路：**

定义变量 `sum` 保存累计结果，每遍历一个数字就加到 `sum` 中，最后输出总和。

---

### 练习 4：定义星期 Map 并根据键取值

**题目：**

定义一个 Map，让 1、2、3 分别对应“星期一”“星期二”“星期三”，然后输出键 2 对应的值。

**考查知识点：**

```text
Map、键值对、按键取值
```

**参考答案：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val days = Map(
      1 -> "星期一",
      2 -> "星期二",
      3 -> "星期三"
    )

    println(days(2))
  }
}
```

**解题思路：**

使用 `Map` 保存键值对，然后通过 `days(2)` 获取键 `2` 对应的值。

---

### 练习 5：将 Map 转成数组并输出

**题目：**

定义一个 Map，保存 1 到 3 对应的星期名称。将它转换为数组，并使用 `foreach` 输出数组中的每个元素。

**考查知识点：**

```text
Map、toArray、元组、foreach
```

**参考答案：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val days = Map(
      1 -> "星期一",
      2 -> "星期二",
      3 -> "星期三"
    )

    val arr = days.toArray

    arr.foreach(item => println(item))
  }
}
```

**解题思路：**

先定义 Map，再使用 `toArray` 得到数组。数组中每个元素是一个二元组，最后使用 `foreach` 遍历输出。

---

### 练习 6：用嵌套 List 输出单位矩阵

**题目：**

使用 `List[List[Int]]` 定义一个 3×3 单位矩阵，并按行输出。

**考查知识点：**

```text
嵌套 List、二维数据、foreach、mkString
```

**参考答案：**

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val matrix = List(
      List(1, 0, 0),
      List(0, 1, 0),
      List(0, 0, 1)
    )

    matrix.foreach(row => println(row.mkString(" ")))
  }
}
```

**解题思路：**

外层 List 表示矩阵的多行，内层 List 表示每一行。使用 `foreach` 逐行输出，并用 `mkString(" ")` 让结果更像矩阵。

---

## 13. 本节课知识结构图文字版

```text
Scala 集合与循环基础
├── 集合基础
│   ├── List
│   │   ├── 有顺序
│   │   ├── 默认不可变
│   │   ├── head
│   │   └── tail
│   ├── Array
│   │   ├── 长度固定
│   │   ├── 下标从 0 开始
│   │   ├── 使用 arr(0) 访问元素
│   │   └── 元素可以修改
│   ├── Set
│   │   ├── 不保存重复元素
│   │   └── 适合去重
│   └── Map
│       ├── 键值对
│       ├── 使用 -> 表示对应关系
│       ├── 根据键取值
│       └── 可使用 toArray 转换
├── 区间 Range
│   ├── to
│   │   └── 包含结束值
│   ├── until
│   │   └── 不包含结束值
│   └── by
│       └── 指定步长
├── 遍历方式
│   ├── for 循环
│   │   ├── 遍历区间
│   │   ├── 遍历数组
│   │   └── 遍历列表
│   └── foreach 方法
│       ├── 遍历集合
│       ├── 对每个元素执行操作
│       └── 常与匿名函数配合
├── 函数式表达
│   ├── 匿名函数
│   │   └── 参数 => 函数体
│   └── foreach 中的临时参数
├── 嵌套集合
│   ├── List 中包含 List
│   ├── 表示二维结构
│   └── 可表示单位矩阵
└── 常见考试题型
    ├── 定义集合并输出
    ├── 遍历区间输出偶数
    ├── 按步长求和
    ├── Map 转数组
    └── foreach 遍历输出
```

---

## 14. 后续生成网页时可使用的数据建议

* **建议课程 ID：** `scala-collections-map-foreach-basic`
* **建议课程标题：** 2026-03-26 Scala 编程基础要点及练习讲解
* **建议章节：** Scala 数组与集合基础
* **建议标签：**
  * Scala 集合
  * List
  * Array
  * Set
  * Map
  * Range
  * for 循环
  * foreach
  * toArray
  * 匿名函数
  * 元组
* **适合放入 summary 的内容：**
  * 本节课讲解 Scala 集合基础，包括 List、Array、Set、Map 的基本概念和使用方式。
  * 本节课重点练习 Range、for 循环、foreach、Map 转数组等考试常见内容。
  * 课堂通过星期 Map 和单位矩阵案例帮助学生理解键值对与嵌套集合。
* **适合放入 keyPoints 的内容：**
  * `List` 默认不可变。
  * `Array` 使用圆括号访问元素。
  * `Map` 保存键值对。
  * `toArray` 返回新数组，不修改原集合。
  * `foreach` 用于遍历集合并执行操作。
  * `Range` 可以使用 `to`、`until`、`by` 表示不同范围和步长。
* **适合放入 codeExamples 的内容：**
  * 定义 List、Set、Map 并输出。
  * 使用 for 循环输出偶数。
  * 使用 Range 和步长求和。
  * Map 转数组并用 foreach 输出。
  * 嵌套 List 表示单位矩阵。
* **适合放入 quiz 的内容：**
  * `List` 的不可变性。
  * `to` 与 `until` 的区别。
  * `Map.toArray` 的返回结果。
  * `foreach` 的作用。
  * 匿名函数 `=>` 的含义。
* **适合放入 dragMatch 的内容：**
  * `List` —— 有顺序的列表集合
  * `Array` —— 长度固定的数组
  * `Map` —— 保存键值对的映射
  * `foreach` —— 遍历集合并执行操作
  * `toArray` —— 将集合转换为数组
  * `Range` —— 表示一段连续数字
* **适合放入 flow 的内容：**
  * Map 定义 → 调用 `toArray` → 得到数组 → `foreach` 遍历 → 匿名函数处理元素 → 输出结果。
* **适合放入 exercises 的内容：**
  * 定义列表并遍历。
  * 输出区间中的偶数。
  * 按步长求和。
  * 定义星期 Map。
  * Map 转数组输出。
  * 使用嵌套 List 表示矩阵。
* **适合放入 conclusion 的内容：**
  * 本节课是 Scala 集合学习的基础课，重点是会定义、会遍历、会转换、会输出。
  * 学生需要熟练掌握 `for` 和 `foreach` 两种遍历方式。
  * `Map.toArray` 和匿名函数是本节课的难点，课后应多写代码练习。

---

## 15. 课后总结

1. 本节课的核心是 Scala 集合基础，重点掌握 `List`、`Array`、`Set`、`Map` 的基本作用和常见写法。
2. 学习 Scala 集合时要特别注意可变与不可变的区别，尤其不要把默认 `List` 当成可以直接修改的数组。
3. 通过本节课，学生应该能够使用 `Range` 和 `for` 循环完成输出偶数、倒序遍历、按步长求和等基础题。
4. `Map` 是本节课的重要内容，它用于表示键值对应关系，后续学习配置数据、查表逻辑和集合转换时都会继续使用。
5. `toArray` 和 `foreach` 是本节课需要重点复习的两个方法，一个负责转换集合，一个负责遍历集合。
6. 匿名函数 `num => println(num)` 是 Scala 函数式编程的入门形式，后面学习 `map`、`filter`、`reduce` 等集合高级方法时会继续使用。
7. 嵌套集合可以表示二维结构，例如矩阵、表格或多行数据，理解它有助于后续学习更复杂的数据处理。
8. 课后建议多练习考试常见题型：定义集合、遍历集合、筛选数字、求和、Map 转数组并输出。
9. 本节课暂不需要扩展到 Spark、Akka、Web 框架等内容，当前重点是把 Scala 基础集合和循环写熟。
10. 如果后续要转换成课程网站数据，本节内容非常适合拆分成知识卡片、代码示例、小测验、拖拽匹配和流程动画。
