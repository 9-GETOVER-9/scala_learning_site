{
  id: "scala-2026-03-19-arrays-ai-prompts",
  title: "编程数组知识及AI使用技巧讲解",
  chapter: "第五章 Scala 集合与数组",
  date: "2026-03-19",
  tags: [
    "数组",
    "Java数组",
    "Scala数组",
    "Array",
    "定长数组",
    "ArrayBuffer",
    "变长数组",
    "取值器",
    "数组下标",
    "二维数组",
    "矩阵",
    "Array.ofDim",
    "+=",
    "++=",
    "trimEnd",
    "AI提示词",
    "高阶思考",
    "麦肯锡式提示词"
  ],
  summary: [
    "本节课主要讲解 Scala 与 Java 中数组的区别，包括声明方式、取值方式、数组下标和二维数组。",
    "老师强调 Java 数组通常使用类型加方括号声明，而 Scala 常用 new Array[类型](长度) 创建数组。",
    "课堂提醒同学数组下标从 0 开始，而元组从 1 开始取值，二者不能混淆。",
    "本节课还讲解了定长数组和变长数组 ArrayBuffer，介绍 +=、++= 和 trimEnd 等常用操作。",
    "老师结合大数据处理和网页爬取场景说明，数组和字符串截取在实际数据处理中很常见。",
    "最后，老师分享了 AI 高阶使用技巧，建议使用分析、对比、评价、创造类提示词，而不是只问低阶概念。"
  ],
  keyPoints: [
    {
      title: "线上课安排与打卡",
      content: "第四周开始有线上课，需要按群内要求学习和打卡，建议打开笔记本认真学习。",
      javaCompare: ""
    },
    {
      title: "Java 数组声明",
      content: "Java 中常用类型加方括号声明数组，例如 int[] a = new int[3]。",
      javaCompare: "Java 的数组类型由 int[] 这样的前置类型决定。"
    },
    {
      title: "Scala 数组声明",
      content: "Scala 中常用 new Array[Int](3) 创建数组，Array 明确表示这是数组结构。",
      javaCompare: "Scala 更强调变量类型由右边的值决定。"
    },
    {
      title: "数组取值方式",
      content: "Scala 数组使用圆括号取值，例如 a(0)。Java 使用方括号取值，例如 a[0]。",
      javaCompare: "这是 Scala 和 Java 数组语法最直观的区别之一。"
    },
    {
      title: "数组下标从 0 开始",
      content: "数组第一个元素下标是 0，第二个元素下标是 1。",
      javaCompare: "Java 和 Scala 数组都从 0 开始。"
    },
    {
      title: "元组和数组下标不同",
      content: "Scala 元组从 _1 开始取值，而数组从 0 开始取值。",
      javaCompare: "Java 没有 Scala 这种元组取值方式，数组依然从 0 开始。"
    },
    {
      title: "二维数组与矩阵",
      content: "二维数组可以理解为行列结构，适合表示矩阵或表格数据。",
      javaCompare: "Java 和 Scala 都可以表示二维数组，但写法不同。"
    },
    {
      title: "维度方向",
      content: "在样本相乘和矩阵计算中，行列方向非常关键，维度不一致会影响计算。",
      javaCompare: ""
    },
    {
      title: "定长数组",
      content: "定长数组创建后长度固定，例如 new Array[Double](3)。",
      javaCompare: "Java 数组也是定长结构。"
    },
    {
      title: "ArrayBuffer 变长数组",
      content: "ArrayBuffer 可以动态追加元素，适合元素数量不确定的情况。",
      javaCompare: "Java 中需要使用 ArrayList 等结构实现类似效果。"
    },
    {
      title: "+= 追加元素",
      content: "+= 可以向 ArrayBuffer 追加一个元素。",
      javaCompare: "Java 中通常使用 add 方法追加元素。"
    },
    {
      title: "++= 追加多个元素",
      content: "++= 可以向 ArrayBuffer 一次追加多个元素或另一个集合。",
      javaCompare: ""
    },
    {
      title: "trimEnd 删除末尾元素",
      content: "trimEnd 可以从 ArrayBuffer 末尾删除指定数量的元素。",
      javaCompare: ""
    },
    {
      title: "AI 高阶提示词",
      content: "使用 AI 时要尽量让它分析、比较、评价、生成框架，而不是只问简单概念。",
      javaCompare: ""
    },
    {
      title: "麦肯锡式提示词",
      content: "可以让 AI 以顾问框架拆解问题，从问题背景、关键假设、分析路径和建议等角度输出。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "Java 定义数组",
      code: `int[] a = new int[3];
a[0] = 10;
System.out.println(a[0]);`,
      explanation: "Java 使用方括号声明和访问数组。"
    },
    {
      title: "Scala 定义定长数组",
      code: `val a = new Array[Int](3)
a(0) = 10
println(a(0))`,
      explanation: "Scala 用 new Array[Int](3) 创建长度为 3 的整数数组。"
    },
    {
      title: "Double 类型数组",
      code: `val nums = new Array[Double](3)
nums(0) = 1.5
nums(1) = 2.5
nums(2) = 3.5`,
      explanation: "这是一个长度为 3 的 Double 类型数组。"
    },
    {
      title: "二维数组",
      code: `val matrix = Array.ofDim[Int](3, 3)
matrix(0)(0) = 1
matrix(0)(1) = 2
matrix(1)(0) = 3`,
      explanation: "Array.ofDim[Int](3, 3) 可以创建 3 行 3 列的二维数组。"
    },
    {
      title: "ArrayBuffer 追加元素",
      code: `import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer[Int]()
buffer += 1
buffer += 2
buffer += 3`,
      explanation: "ArrayBuffer 可以动态追加元素。"
    },
    {
      title: "追加多个元素并删除末尾",
      code: `import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer(1, 2, 3)
buffer ++= Array(4, 5, 6)
buffer.trimEnd(2)`,
      explanation: "先追加 4、5、6，再删除末尾两个元素。"
    }
  ],
  quiz: [
    {
      question: "Scala 中创建长度为 3 的 Int 数组，正确写法是？",
      options: ["int[] a = new int[3]", "val a = new Array[Int](3)", "array int a 3", "new int a"],
      answer: "val a = new Array[Int](3)",
      explanation: "Scala 中常用 new Array[Int](3) 创建定长数组。"
    },
    {
      question: "Scala 数组取第一个元素应写成什么？",
      options: ["a[1]", "a(1)", "a(0)", "a._1"],
      answer: "a(0)",
      explanation: "Scala 数组下标从 0 开始，并使用圆括号取值。"
    },
    {
      question: "Scala 元组第一个元素如何获取？",
      options: ["t(0)", "t._1", "t[0]", "t.first"],
      answer: "t._1",
      explanation: "Scala 元组从 _1 开始取值。"
    },
    {
      question: "ArrayBuffer 的特点是什么？",
      options: ["长度固定", "可以动态追加元素", "只能保存字符串", "不能修改"],
      answer: "可以动态追加元素",
      explanation: "ArrayBuffer 是变长数组，可以动态添加元素。"
    },
    {
      question: "buffer += 1 的作用是什么？",
      options: ["删除 1", "添加元素 1", "清空数组", "创建二维数组"],
      answer: "添加元素 1",
      explanation: "+= 可以向 ArrayBuffer 追加一个元素。"
    },
    {
      question: "更好的 AI 提问方式应该是什么？",
      options: ["只问是什么", "让 AI 分析、对比、评价并给例子", "不给背景", "只让 AI 输出一个词"],
      answer: "让 AI 分析、对比、评价并给例子",
      explanation: "高阶提示词可以让 AI 输出更有结构和深度的内容。"
    }
  ],
  dragMatch: [
    { left: "int[] a", right: "Java 数组声明" },
    { left: "new Array[Int](3)", right: "Scala 定长数组" },
    { left: "a(0)", right: "Scala 数组第一个元素" },
    { left: "a[0]", right: "Java 数组第一个元素" },
    { left: "t._1", right: "元组第一个元素" },
    { left: "ArrayBuffer", right: "变长数组" },
    { left: "+=", right: "追加一个元素" },
    { left: "++=", right: "追加多个元素" },
    { left: "trimEnd", right: "删除末尾元素" },
    { left: "高阶提示词", right: "引导 AI 分析、评价和创造" }
  ],
  flow: [
    "写出 val a",
    "右边使用 new Array[Int](3)",
    "创建长度为 3 的整数数组",
    "使用 a(0) 访问第一个元素",
    "给 a(0) 赋值",
    "使用 println 输出结果"
  ],
  exercises: [
    {
      question: "请用 Scala 创建一个长度为 3 的 Int 数组，并给第一个元素赋值为 10。",
      answer: `val a = new Array[Int](3)
a(0) = 10`
    },
    {
      question: "请创建一个长度为 3 的 Double 数组，并分别赋值 1.5、2.5、3.5。",
      answer: `val nums = new Array[Double](3)
nums(0) = 1.5
nums(1) = 2.5
nums(2) = 3.5`
    },
    {
      question: "请创建一个 ArrayBuffer，并依次添加 1、2、3。",
      answer: `import scala.collection.mutable.ArrayBuffer

val buffer = ArrayBuffer[Int]()
buffer += 1
buffer += 2
buffer += 3`
    },
    {
      question: "请向 ArrayBuffer 中一次追加 4、5、6。",
      answer: "buffer ++= Array(4, 5, 6)"
    },
    {
      question: "请写一个高阶 AI 提示词，让 AI 帮你比较 Java 数组和 Scala 数组。",
      answer: "请你用适合初学者的方式，从声明方式、取值方式、下标规则、长度是否可变和代码示例五个角度，对比 Java 数组和 Scala 数组。"
    }
  ],
  conclusion: [
    "Java 数组通常使用类型加方括号声明。",
    "Scala 数组常用 new Array[类型](长度) 创建。",
    "Java 数组用方括号取值，Scala 数组用圆括号取值。",
    "数组下标从 0 开始，元组从 1 开始取值。",
    "二维数组和矩阵维度有关，进行样本计算时要注意行列方向。",
    "定长数组创建后长度固定。",
    "ArrayBuffer 是变长数组，可以动态追加元素。",
    "+= 追加一个元素，++= 追加多个元素。",
    "trimEnd 可以删除末尾若干元素。",
    "使用 AI 时要多用高阶提示词，让 AI 帮助分析、比较、评价和创造。"
  ]
}