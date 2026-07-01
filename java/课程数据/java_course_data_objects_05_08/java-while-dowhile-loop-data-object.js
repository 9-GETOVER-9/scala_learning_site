{
  id: "java-while-dowhile-loop",
  title: "while 循环、do-while 循环与循环对比",
  chapter: "Java 流程控制",
  date: "2025-09-11",
  tags: [
    "while循环",
    "do-while循环",
    "for循环复习",
    "循环对比",
    "数组与矩阵下标",
    "参数匹配",
    "包package"
  ],
  summary: [
    "本节课首先介绍了 Java 中包（package）的概念和创建方式——包是用来组织类的命名空间，包含共同特性的类放在同一个包下。",
    "课堂中重点讲解了 while 循环的结构——先判断条件，条件为 true 执行循环体，为 false 直接跳过。",
    "老师通过代码对比演示了 do-while 和 while 的核心区别：do-while 先执行一次再判断，while 先判断再执行。",
    "本节课还总结了 for 循环的三个表达式（赋值、比较、增加），并强调循环实际上是从第二个表达式（比较）开始转圈的。",
    "最后讲解了数组下标（从 0 开始）与矩阵下标（从 1 开始）的转换关系，以及方法调用时参数匹配的三要素：个数、顺序、类型。"
  ],
  keyPoints: [
    {
      title: "包（package）的概念与创建",
      content: "包（package） 是 Java 中用来组织和管理类的一种命名空间机制。把功能相关的类放在同一个包下，就像把同类型的文件放在同一个文件夹里一样。包名通常采用公司域名的反转（如 com.example.tools），全部小写。 学习意义：随着项目变大，类越来越多。如果所有类都堆在默认包下，会非常混乱。包可以避免类名冲突（两个包下可以有同名的类），让代码结构更清晰。 课堂理解：老师展示了创建包和默认包的区别： - 在 SRC 下创建包 → New → Package → 输入包名（如 com 或 unit） - 在包下创建类 → 该类自动属于这个包 - \"包是具有共同特性的。包含共同特性的这些类就放在一起。\" 老师特别指出：如果不创建包就是\"默认包\"，默认包下也能直接创建类。",
      javaCompare: ""
    },
    {
      title: "while 循环——先判断后执行",
      content: "while 循环是最基本的循环结构。每次循环开始前，先判断条件表达式，如果为 true 就执行循环体；如果为 false 就直接跳过（可能一次都不执行）。 学习意义：当你不确定需要循环多少次（循环次数由运行时条件决定），或者可能根本不需要循环时，while 比 for 更合适。比如\"只要用户没输入 quit 就一直读取\"。 课堂理解：老师通过一个具体的例子解释了 while 循环： - 初始 i = 0 → 经过 i++ 后 i = 1 → 输出 2（因为先加再加），然后 2<10，继续循环 - 当 i = 9 时，进入循环，i++ 后变成 10，输出 10，然后判断 10<10 为 false，退出 - 老师让学生数循环次数——从 2 到 10 一共 9 次 关键问题：\"while 是先判断条件，再执行循环体。如果第一次条件就是 false，循环体一次都不会执行。\"",
      javaCompare: ""
    },
    {
      title: "do-while 循环——先执行后判断",
      content: "do-while 是 while 的变体。关键区别：它先执行一次循环体，然后再判断条件。这意味着无论条件如何，循环体至少执行一次。 课堂理解：老师用代码对比来演示： 场景 A（条件一开始就是 false）： - while：条件 false → 一次也不执行 - do-while：先执行一次循环体 → 再判断条件 false → 退出 场景 B（条件一开始是 true）： - while 和 do-while 的执行次数一样 核心结论：do-while 的执行次数 ≥ while 的执行次数。 老师还特别注意了语法细节——\"do-while 是以分号结尾的，而 while 是以大括号结尾的。为什么？因为 while 的大括号是语句组的结尾，而 do-while 在 } 后面又新起了一个 while 条件判断，必须用分号作为语句的结束。\"",
      javaCompare: ""
    },
    {
      title: "三种循环的对比总结",
      content: "Java 有三种循环结构：for、while、do-while。它们可以互相转换（任何循环都可用另一种写法实现），但各有最适合的场景。 学习意义：知道什么时候用哪种循环，是写好代码的基本功。选错了循环结构，代码会显得别扭甚至出错。 课堂理解：老师总结： - for：三个表达式（赋值、比较、增加）写在一起，结构紧凑，适合\"知道循环次数\"的场景。 - while：条件判断在前，可能一次都不执行，适合\"不知道循环几次，可能不循环\"的场景。 - do-while：先执行再判断，至少执行一次，适合\"至少要做一次，再看要不要继续\"的场景。 ---",
      javaCompare: ""
    },
    {
      title: "数组下标与矩阵下标的转换",
      content: "- 数组下标（Java/计算机）：从 0 开始。第一个元素是 arr[0]。 - 矩阵下标（数学/线性代数）：从 1 开始。第一个元素是 a₁₁。 它们之间的关系：矩阵下标 = 数组下标 + 1，或者说：数组下标 = 矩阵下标 - 1。 课堂理解：老师画了一个 4×4 的矩阵来解释： \"在我们数组里面，这是 0 1 2 3。而在我们学的线性代数里面，这是 1 2 3 4。所以说我们在转换的时候要转换过来——数组下标 = 矩阵下标 - 1。\" 老师还补充了屏幕像素坐标的类似概念：\"数学坐标系原点在左下角，(0,0)在中间。而屏幕坐标系原点在左上角，(0,0)在左上。所以也要转换。\" ---",
      javaCompare: ""
    },
    {
      title: "参数匹配三要素",
      content: "调用方法时，传入的参数（实参）必须和方法定义时的参数列表（形参）完全匹配。匹配有三个要求： 1. 个数一致（number）：方法要几个参数，就只能传几个。 2. 顺序一致（order）：第一个参数对应第一个形参，第二个对应第二个，不能乱。 3. 类型一致（type）：int 对应 int、double 对应 double。类型不匹配时需要类型转换。 课堂理解：老师通过一个编译错误的例子来解释：System.out.println 的参数写了一个逗号而不是加号，导致编译器认为传了两个不同类型的参数。\"原来的 print 是一个整型参数，但你传的是一个 String + 逗号 + int，个数和类型都不匹配，所以报错了。\" 解决方法是用 + 号拼接成一个 String，因为 \"不管谁跟 String 加，都变成 String\"。 ---",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "while 与 do-while 的对比",
      code: `public class WhileVsDoWhile {
    public static void main(String[] args) {
        System.out.println("===== while 循环 =====");
        int a = 5;
        while (a < 3) {
            System.out.println("while: a = " + a);
            a++;
        }
        System.out.println("while 循环结束（a<3为false，一次也没执行）");

        System.out.println("\\n===== do-while 循环 =====");
        int b = 5;
        do {
            System.out.println("do-while: b = " + b);  // 至少输出一次！
            b++;
        } while (b < 3);
        System.out.println("do-while 循环结束（虽然条件为false，但仍然执行了一次）");
    }
}`,
      explanation: "1. a=5, 5<3 是 false, while 直接跳过循环体——输出\"一次也没执行\"。 2. b=5, do 先执行一次输出，然后判断 5<3 是 false，退出循环。 3. 对比明显：相同条件，while 一次不执行，do-while 执行了一次。"
    },
    {
      title: "用 for 循环操作二维数组（模拟矩阵）",
      code: `public class MatrixDemo {
    public static void main(String[] args) {
        int[][] matrix = new int[3][3];

        // 赋值：模拟数学矩阵 A₁₁=1, A₁₂=2, ...
        // 数组下标 = 矩阵下标 - 1
        for (int i = 0; i < 3; i++) {          // i=0,1,2 对应矩阵行 1,2,3
            for (int j = 0; j < 3; j++) {      // j=0,1,2 对应矩阵列 1,2,3
                matrix[i][j] = (i + 1) * (j + 1);  // i+1 = 矩阵行号, j+1 = 矩阵列号
            }
        }

        // 输出表格形式
        System.out.println("3×3 矩阵：");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print(matrix[i][j] + "\\t");
            }
            System.out.println();   // 每行输出完换行
        }
    }
}`,
      explanation: "1. 外层 for (i) 控制行，内层 for (j) 控制列——这是双重循环的固定模式。 2. (i+1)*(j+1) 实现了\"矩阵行号 × 矩阵列号\"的计算（因为数组下标从0开始）。 3. \\t 是制表符，用来对齐列。每行输出完后用空的 println() 换行。 4. 这说明双重循环处理矩阵时，下标转换的核心就是\"数组下标 + 1 = 矩阵下标\"。"
    },
    {
      title: "参数匹配——正确与错误对比",
      code: `public class ParamMatchDemo {
    public static void main(String[] args) {
        int a = 10, b = 20;

        // ✅ 正确：+ 号将两个 int 拼接成一个 String
        System.out.println("和：" + (a + b));       // 和：30

        // ✅ 正确：多个 + 号拼接，最终是一个 String
        System.out.println("a=" + a + ", b=" + b);  // a=10, b=20

        // ❌ 错误写法示意（如果用逗号的话）：
        // System.out.println("和：", a + b);  // 编译错误！参数个数不匹配
        // println 方法只需要一个参数，但这里传了两个（一个 String + 一个 int）
    }
}`,
      explanation: "1. println 方法期望接收的参数个数、类型取决于具体的重载版本。 2. println(String) 需要一个 String——用 \"和：\" + (a+b) 拼成 \"和：30\" 传进去。 3. println(a + \", b=\" + b) 同理，用 + 号把所有内容拼成一个 String。 4. 如果用逗号 println(\"和：\", a+b)，就是传了两个参数，和方法定义不匹配。"
    }
  ],
  quiz: [
    {
      question: "以下 while 循环会输出什么？\n\nint i = 3;\nwhile (i < 3) {\n    System.out.println(\"执行了\");\n    i++;\n}\nSystem.out.println(\"结束了\");",
      options: [
        "执行了 / 结束了",
        "结束了",
        "死循环",
        "编译错误"
      ],
      answer: "结束了",
      explanation: "i=3，3<3 为 false，while 循环体一次也不执行，直接跳到后面输出\"结束了\"。"
    },
    {
      question: "以下 do-while 循环会输出什么？\n\nint i = 3;\ndo {\n    System.out.println(\"执行了\");\n    i++;\n} while (i < 3);\nSystem.out.println(\"结束了\");",
      options: [
        "执行了 / 结束了",
        "结束了",
        "死循环",
        "编译错误"
      ],
      answer: "执行了 / 结束了",
      explanation: "do 先执行一次输出\"执行了\"，i 变成 4。然后判断 4<3 为 false，退出循环，输出\"结束了\"。"
    },
    {
      question: "关于 for、while、do-while 三种循环，以下说法正确的是？",
      options: [
        "三种循环完全不能互相替代",
        "for 循环最少执行次数一定是 0",
        "do-while 循环至少执行一次",
        "while 循环一定至少执行一次"
      ],
      answer: "do-while 循环至少执行一次",
      explanation: "do-while 至少执行一次（先执行后判断）。for 也可能一次不执行（条件一开始就是 false）。三种循环可以互相替代（用不同的写法实现相同的功能）。"
    },
    {
      question: "数组 arr = {10, 20, 30}，arr[1] 的值是多少？",
      options: [
        "10",
        "20",
        "30",
        "下标越界"
      ],
      answer: "20",
      explanation: "数组下标从 0 开始：arr[0]=10, arr[1]=20, arr[2]=30。"
    },
    {
      question: "以下关于方法参数匹配的说法，哪个是错误的？",
      options: [
        "实参和形参的个数必须一致",
        "实参和形参的类型必须一致",
        "实参和形参的名字必须一致",
        "实参和形参的顺序必须一致"
      ],
      answer: "实参和形参的名字必须一致",
      explanation: "参数匹配要求个数、顺序、类型一致，但参数的名字可以不同。调用时的变量名（实参）和方法定义时的参数名（形参）没有关系。"
    },
    {
      question: "关于 Java 包（package），以下说法正确的是？",
      options: [
        "一个 Java 项目只能有一个包",
        "包名建议使用大写字母",
        "包用来组织和管理类，避免类名冲突",
        "所有类必须放在包中"
      ],
      answer: "包用来组织和管理类，避免类名冲突",
      explanation: "包的主要作用就是组织类、避免命名冲突。一个项目可以有多个包，包名通常全小写。类也可以不放在任何包中（默认包）。"
    }
  ],
  dragMatch: [
    {
      left: "while 循环",
      right: "先判断条件再执行循环体，可能一次都不执行"
    },
    {
      left: "do-while 循环",
      right: "先执行一次循环体再判断条件，至少执行一次"
    },
    {
      left: "for 循环",
      right: "将初始化、条件、迭代三个要素集中写在一起"
    },
    {
      left: "包（package）",
      right: "用来组织和管理类的命名空间，避免类名冲突"
    },
    {
      left: "死循环",
      right: "条件永远为 true 或忘记更新循环变量导致的永不停止的循环"
    },
    {
      left: "数组下标",
      right: "从 0 开始计数，arr[0] 是第一个元素"
    },
    {
      left: "矩阵下标",
      right: "数学中从 1 开始计数，a₁₁ 是第一个元素"
    },
    {
      left: "参数匹配",
      right: "方法调用时实参和形参在个数、顺序、类型上必须一致"
    },
    {
      left: "累加求和",
      right: "用 sum += i 在循环中不断累加当前值"
    },
    {
      left: "双重 for 循环",
      right: "外层走行、内层走列，用于遍历二维数组或矩阵"
    }
  ],
  flow: [
    "while 循环流程：程序执行到 while 语句。",
    "while 循环流程：计算括号中的条件表达式（true 或 false）。",
    "while 循环流程：如果 false → 直接跳过整个循环体，继续执行 while 后面的代码。",
    "while 循环流程：如果 true → 执行循环体中的所有语句。",
    "while 循环流程：循环体执行完毕后 → 回到第 2 步，重新判断条件。",
    "while 循环流程：重复以上步骤，直到条件为 false。",
    "do-while 循环流程：程序执行到 do 语句。",
    "do-while 循环流程：无条件执行一次循环体中的所有语句（不管条件是 true 还是 false）。",
    "do-while 循环流程：循环体执行完毕后 → 计算 while 括号中的条件表达式。",
    "do-while 循环流程：如果 true → 回到第 2 步，再次执行循环体。",
    "do-while 循环流程：如果 false → 退出循环，继续执行后面的代码。",
    "do-while 循环流程：关键区别：do-while 能保证循环体至少执行一次。"
  ],
  exercises: [
    {
      question: "用 while 循环计算 1 到 100 的和。",
      answer: "public class WhileSum {\n    public static void main(String[] args) {\n        int i = 1;\n        int sum = 0;\n        while (i <= 100) {\n            sum += i;\n            i++;\n        }\n        System.out.println(\"1到100的和：\" + sum);   // 5050\n    }\n}\n\n解题思路：\nwhile 版本的求和与 for 版本思路完全一样，只是把初始化和迭代分别写在循环前后。"
    },
    {
      question: "用 do-while 循环实现：不断生成 1-10 的随机数，直到生成 5 为止，输出每次生成的数字。",
      answer: "public class GuessFive {\n    public static void main(String[] args) {\n        int num;\n        int count = 0;\n        do {\n            num = (int)(Math.random() * 10) + 1;   // 生成 1-10 的随机数\n            count++;\n            System.out.println(\"第\" + count + \"次：\" + num);\n        } while (num != 5);\n        System.out.println(\"恭喜，生成到 5！共尝试了 \" + count + \" 次。\");\n    }\n}\n\n解题思路：\n这个场景必须至少执行一次（至少要生成一个数），所以用 do-while 最合适。每次循环生成随机数并计数，直到 num==5 时退出。"
    },
    {
      question: "使用双重 for 循环，输出 9×9 乘法表。",
      answer: "public class MultiplicationTable {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 9; i++) {           // 外层：行\n            for (int j = 1; j <= i; j++) {       // 内层：列（注意 j<=i 是上三角）\n                System.out.print(j + \"×\" + i + \"=\" + (i * j) + \"\\t\");\n            }\n            System.out.println();   // 一行结束换行\n        }\n    }\n}\n\n解题思路：\n外层 i 控制行数（1-9），内层 j 控制每行的列数（1 到 i）。乘积 = i × j。"
    },
    {
      question: "指出以下代码中的错误并修改。\n\npublic class Test {\n    public static void main(String[] args) {\n        int i = 10;\n        while (i < 5) {\n            System.out.println(i);\n        }    // 错误1\n\n        do {\n            System.out.println(\"执行一次\");\n        } while (i < 5)    // 错误2\n\n        int[] arr = {1, 2, 3};\n        System.out.println(arr[3]);   // 错误3\n    }\n}",
      answer: "错误1：while 循环体中缺少 i++ 或 i-- 更新语句——如果 i<5 为 true 会死循环。\n错误2：do-while 结尾缺少分号 ; —— 应写成 } while (i < 5);\n错误3：arr[3] 越界——长度为 3 的数组下标范围是 0~2，应为 arr[2] 或 arr[0]。"
    },
    {
      question: "将以下 for 循环改写为 while 循环和 do-while 循环，三种写法实现相同的功能。\n\nfor (int i = 0; i < 5; i++) {\n    System.out.print(i + \" \");\n}",
      answer: "// while 版本\nint i = 0;\nwhile (i < 5) {\n    System.out.print(i + \" \");\n    i++;\n}\n\n// do-while 版本（注意：当 i=0 开始，条件是 i<5）\nint j = 0;\ndo {\n    System.out.print(j + \" \");\n    j++;\n} while (j < 5);\n\n解题思路：\nfor 的三个表达式分别对应：表达式1 → while/do-while 的初始化；表达式2 → 循环条件；表达式3 → 循环体末尾的更新。"
    }
  ],
  conclusion: [
    "本节课的核心是掌握 while 和 do-while 两种循环结构，理解它们与 for 循环的区别和适用场景——while 可能一次都不执行，do-while 至少执行一次。",
    "学习循环时要特别注意 do-while 结尾的分号不能忘——这是三种循环中唯一需要分号的。",
    "通过本节课应该能够在三种循环（for、while、do-while）之间自由选择，并理解包（package）、参数匹配、数组下标等配套基础知识。",
    "循环是 Java 编程中最核心的控制结构。后续学习数组遍历、集合操作、数据处理、算法实现等所有内容都离不开循环。现在多练几种循环写法，以后事半功倍。",
    "课后建议多练习：(1) 用 while 和 do-while 分别实现 1-100 求和；(2) 用双重循环输出九九乘法表；(3) 练习将同一需求用三种循环各写一遍；(4) 创建自己的包并在包下创建类。"
  ]
}