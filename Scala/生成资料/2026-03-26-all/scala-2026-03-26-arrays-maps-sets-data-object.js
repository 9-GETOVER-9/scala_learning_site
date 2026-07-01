{
  id: "scala-2026-03-26-arrays-maps-sets",
  title: "Scala编程知识讲解",
  chapter: "第五章 Scala 集合、映射与数组",
  date: "2026-03-26",
  tags: [
    "Array",
    "ArrayBuffer",
    "toArray",
    "for表达式",
    "yield",
    "守卫",
    "二维数组",
    "Array.ofDim",
    "Map",
    "键值对",
    "Option",
    "Some",
    "None",
    "contains",
    "get",
    "可变Map",
    "不可变Map",
    "Set",
    "exists",
    "intersect",
    "Scala API"
  ],
  summary: [
    "本节课主要讲解 Scala 中数组、数组缓冲、for 表达式、二维数组、映射 Map、集合 Set 和 Scala API 的使用方法。",
    "老师回顾了 Java 与 Scala 在数组声明上的区别，并说明 ArrayBuffer 可以追加、插入、删除元素。",
    "课堂讲解了 for 表达式可以遍历数组、筛选元素，并通过 yield 生成新集合。",
    "本节课重点讲解 Map 映射，说明 Map 是 key-value 键值对集合，与哈希表和映射思想有关。",
    "老师讲解了 Map 的括号取值、get 方法、contains 判断、Option 返回值和可变 Map 更新方式。",
    "课堂还讲解了 Set 集合，说明 Set 不包含重复元素，并可通过交集分析共同元素。",
    "最后老师提醒同学学会查看 Scala API，理解对象的方法、属性、返回值和示例。"
  ],
  keyPoints: [
    {
      title: "Java 与 Scala 数组声明差异",
      content: "Java 数组通常先写类型，例如 int[] a；Scala 常用 new Array[Int](3) 创建数组。",
      javaCompare: "Java 类型放在变量名前；Scala 更强调右侧表达式决定变量类型。"
    },
    {
      title: "ArrayBuffer 缓冲数组",
      content: "ArrayBuffer 是变长数组，可以追加、插入和删除元素。",
      javaCompare: "Java 中类似功能可用 ArrayList 实现。"
    },
    {
      title: "变长数组转定长数组",
      content: "ArrayBuffer 可以通过 toArray 转成定长数组，适合先动态收集数据再固定下来处理。",
      javaCompare: ""
    },
    {
      title: "遍历数组",
      content: "Scala 可以用 for (elem <- a) 遍历数组中的每个元素。",
      javaCompare: "Java 通常使用下标循环或增强 for 循环。"
    },
    {
      title: "Range 也是对象",
      content: "1 to 10 这样的范围可以看作对象，因此可以调用 reverse 等方法。",
      javaCompare: ""
    },
    {
      title: "for 表达式与 yield",
      content: "for 表达式可以对元素计算并通过 yield 生成新集合。",
      javaCompare: "Java 中通常需要创建新集合并手动添加元素。"
    },
    {
      title: "守卫筛选",
      content: "for 表达式中可以用 if 作为守卫，筛选满足条件的元素。",
      javaCompare: "Java 中通常把 if 写在循环体内部。"
    },
    {
      title: "二维数组",
      content: "Scala 创建二维数组常用 Array.ofDim[Int](行, 列)。",
      javaCompare: "Java 中常用 int[][] 表示二维数组。"
    },
    {
      title: "Map 映射",
      content: "Map 是键值对集合，每个 key 对应一个 value。",
      javaCompare: "Java 中类似 HashMap。"
    },
    {
      title: "右箭头创建键值对",
      content: "Scala 中使用 -> 创建键值对，例如 \"Monday\" -> 1。",
      javaCompare: ""
    },
    {
      title: "左箭头遍历集合",
      content: "<- 常用于 for 循环中遍历集合。",
      javaCompare: ""
    },
    {
      title: "Map 命名空间",
      content: "使用可变 Map 时需要导入 scala.collection.mutable.Map 等命名空间。",
      javaCompare: "Java 中使用某些类时也需要 import。"
    },
    {
      title: "Map 括号取值",
      content: "可以用 map(key) 直接取值，但 key 不存在时可能报异常。",
      javaCompare: "Java Map 的 get 不存在时通常返回 null。"
    },
    {
      title: "get 返回 Option",
      content: "Map 的 get 方法返回 Option，可能是 Some(value)，也可能是 None。",
      javaCompare: "Scala 用 Option 避免直接返回 null。"
    },
    {
      title: "contains 判断 key",
      content: "使用 contains 可以先判断 key 是否存在，避免直接取值出错。",
      javaCompare: "Java 中也有 containsKey。"
    },
    {
      title: "可变 Map 更新",
      content: "可变 Map 可以修改已有 key 的值，也可以添加新的键值对。",
      javaCompare: "Java HashMap 也可以 put 更新或添加。"
    },
    {
      title: "Set 集合",
      content: "Set 是不包含重复元素的集合。",
      javaCompare: "Java 中也有 Set 接口。"
    },
    {
      title: "exists 方法",
      content: "exists 用来判断集合中是否至少有一个元素满足条件。",
      javaCompare: ""
    },
    {
      title: "集合交集",
      content: "Set 的交集可以用于分析共同爱好、共同特征或共同标签。",
      javaCompare: ""
    },
    {
      title: "查看 Scala API",
      content: "学习 Scala 要会查看 API，理解方法、属性、示例和返回值。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "Scala 定长数组",
      code: `val a = new Array[Int](3)
a(0) = 10
a(1) = 20
a(2) = 30`,
      explanation: "创建长度为 3 的 Int 数组。"
    },
    {
      title: "ArrayBuffer 追加并转数组",
      code: `import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer[Int]()
buffer += 1
buffer += 2
buffer += 3

val arr = buffer.toArray`,
      explanation: "先用变长数组收集数据，再转为定长数组。"
    },
    {
      title: "for 表达式筛选偶数",
      code: `val nums = Array(1, 2, 3, 4, 5, 6)

val evens = for (elem <- nums if elem % 2 == 0) yield elem`,
      explanation: "筛选数组中的偶数。"
    },
    {
      title: "二维数组",
      code: `val matrix = Array.ofDim[Int](3, 3)
matrix(0)(0) = 1
matrix(1)(1) = 1
matrix(2)(2) = 1`,
      explanation: "创建 3 行 3 列二维数组，并设置对角线元素。"
    },
    {
      title: "不可变 Map",
      code: `val days = Map(
  "Monday" -> 1,
  "Tuesday" -> 2,
  "Wednesday" -> 3
)

println(days("Monday"))`,
      explanation: "定义星期和数字之间的映射。"
    },
    {
      title: "安全获取 Map 值",
      code: `val days = Map("Monday" -> 1, "Tuesday" -> 2)

if (days.contains("Friday")) {
  println(days("Friday"))
} else {
  println("没有这个键")
}`,
      explanation: "先判断 key 是否存在，避免异常。"
    },
    {
      title: "使用 get 返回 Option",
      code: `val days = Map("Monday" -> 1, "Tuesday" -> 2)

println(days.get("Monday"))
println(days.get("Friday"))`,
      explanation: "存在时返回 Some(value)，不存在时返回 None。"
    },
    {
      title: "可变 Map 更新",
      code: `val scores = scala.collection.mutable.Map("Alice" -> 90)

scores("Alice") = 95
scores += ("Bob" -> 80)

println(scores)`,
      explanation: "可变 Map 可以更新值，也可以添加新的键值对。"
    },
    {
      title: "Set 去重",
      code: `val s = Set(1, 2, 2, 3, 3, 4)
println(s)`,
      explanation: "Set 不保留重复元素。"
    },
    {
      title: "Set 交集",
      code: `val a = Set("音乐", "篮球", "电影")
val b = Set("篮球", "游戏", "音乐")

val common = a intersect b
println(common)`,
      explanation: "找出两个集合的共同元素。"
    }
  ],
  quiz: [
    {
      question: "Scala 中创建二维数组常用哪个方法？",
      options: ["Array.ofDim", "new int[][]", "array double new", "Map.ofDim"],
      answer: "Array.ofDim",
      explanation: "Scala 中常用 Array.ofDim[Int](行, 列) 创建二维数组。"
    },
    {
      question: "Scala 中 -> 的作用是什么？",
      options: ["创建键值对", "删除数组", "输出换行", "创建类"],
      answer: "创建键值对",
      explanation: "\"Monday\" -> 1 表示创建一个键值对。"
    },
    {
      question: "Map 中如果 key 不存在，直接用括号取值可能会怎样？",
      options: ["可能报异常", "一定返回 0", "自动创建 key", "删除 Map"],
      answer: "可能报异常",
      explanation: "如果 key 不存在，直接取值可能报异常，建议使用 contains 或 get。"
    },
    {
      question: "get 方法通常返回什么类型？",
      options: ["Option", "Int", "String", "Boolean"],
      answer: "Option",
      explanation: "Map 的 get 方法通常返回 Option，可能是 Some(value) 或 None。"
    },
    {
      question: "Set 的特点是什么？",
      options: ["不包含重复元素", "必须重复元素", "只能保存字符串", "不能遍历"],
      answer: "不包含重复元素",
      explanation: "Set 是不包含重复元素的集合。"
    },
    {
      question: "exists 的作用是什么？",
      options: ["判断是否存在满足条件的元素", "删除集合", "创建二维数组", "修改 key"],
      answer: "判断是否存在满足条件的元素",
      explanation: "exists 用来判断集合中是否至少有一个元素满足条件。"
    }
  ],
  dragMatch: [
    { left: "ArrayBuffer", right: "变长数组" },
    { left: "toArray", right: "转成定长数组" },
    { left: "yield", right: "生成新集合" },
    { left: "Array.ofDim", right: "创建二维数组" },
    { left: "Map", right: "键值对集合" },
    { left: "->", right: "创建键值对" },
    { left: "<-", right: "遍历集合" },
    { left: "get", right: "安全取值，返回 Option" },
    { left: "contains", right: "判断 key 是否存在" },
    { left: "Set", right: "不重复元素集合" },
    { left: "exists", right: "判断是否存在满足条件的元素" },
    { left: "intersect", right: "求交集" }
  ],
  flow: [
    "定义一个 Map",
    "准备要查询的 key",
    "使用 contains 判断 key 是否存在",
    "如果存在，使用 map(key) 取值",
    "如果不存在，输出提示信息",
    "避免程序异常"
  ],
  exercises: [
    {
      question: "创建一个 ArrayBuffer[Int]，添加 1、2、3，然后转成数组。",
      answer: `import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer[Int]()
buffer += 1
buffer += 2
buffer += 3

val arr = buffer.toArray`
    },
    {
      question: "创建一个 Map，表示星期一、星期二、星期三分别对应 1、2、3。",
      answer: `val days = Map(
  "Monday" -> 1,
  "Tuesday" -> 2,
  "Wednesday" -> 3
)`
    },
    {
      question: "使用 contains 判断 Map 中是否包含 Friday。",
      answer: `if (days.contains("Friday")) {
  println(days("Friday"))
} else {
  println("没有 Friday")
}`
    },
    {
      question: "创建两个 Set，求它们的交集。",
      answer: `val a = Set("音乐", "篮球", "电影")
val b = Set("篮球", "游戏", "音乐")

val common = a intersect b
println(common)`
    },
    {
      question: "用 for 表达式筛选数组中的偶数。",
      answer: `val nums = Array(1, 2, 3, 4, 5, 6)

val evens = for (elem <- nums if elem % 2 == 0) yield elem`
    }
  ],
  conclusion: [
    "Scala 中数组声明方式与 Java 不同，要注意类型位置和取值方式。",
    "ArrayBuffer 是变长数组，可以追加、插入、删除元素。",
    "变长数组处理完成后可以用 toArray 转成定长数组。",
    "for 表达式可以遍历数组、筛选元素并生成新集合。",
    "Scala 创建二维数组常用 Array.ofDim。",
    "Map 是键值对集合，适合表示一一对应关系。",
    "-> 用于创建键值对，<- 常用于遍历。",
    "Map 取不存在的 key 可能报错，建议用 contains 或 get。",
    "get 返回 Option，可能是 Some(value) 或 None。",
    "Set 是不包含重复元素的集合。",
    "Set 的交集可以用于分析共同爱好或共同特征。",
    "学习 Scala 要学会查 API，理解方法、属性、返回值和示例。"
  ]
}