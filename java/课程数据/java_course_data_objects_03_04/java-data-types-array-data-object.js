{
  id: "java-data-types-array",
  title: "Java 基本数据类型与数组入门",
  chapter: "Java 变量与数据类型",
  date: "2025-08-28",
  tags: [
    "标识符",
    "关键字",
    "基本数据类型",
    "类型转换",
    "boolean",
    "int",
    "char",
    "float",
    "double",
    "数组",
    "二维数组"
  ],
  summary: [
    "本节课首先复习了标识符的定义规则（四大类组成元素，首字符不能是数字）和关键字的概念（不能用作标识符）。",
    "课堂中重点讲解了 Java 的 8 种基本数据类型，分为四大类——逻辑类型（boolean）、整数类型（byte/short/int/long）、字符类型（char）、浮点类型（float/double）。",
    "老师通过\"胖人坐瘦椅子\"的形象比喻，帮助理解自动类型转换（低精度→高精度）和强制类型转换（高精度→低精度）的区别。",
    "本节课的核心内容是数组，老师用矩阵的行列概念解释了一维数组和二维数组的结构，以及通过下标（行、列）访问元素的方法。",
    "最后通过打印语句的对比，区分了 print（不换行）和 println（自动换行），以及字符串拼接（用 + 号）的用法。"
  ],
  keyPoints: [
    {
      title: "标识符的完整规则",
      content: "**标识符**是 Java 中用来标识类名、变量名、方法名、类型名、数组名、文件名的有效字符序列的统称。简单说，所有你可以**自己命名**的东西都叫标识符。\n\n学习意义：Java 中到处都是标识符——每定义一个变量、一个类、一个方法，都在使用标识符。如果不了解标识符规则，写出来的名字可能是非法的，导致编译错误。\n\n基本语法/规则：\n**标识符的四条规则（需要记住）：**\n\n```text\n规则 1：由字母、下划线 _、美元符号 $、数字 这四类字符组成。\n规则 2：第一个字符不能是数字。\n规则 3：长度没有限制。\n规则 4：不能是 Java 的关键字（如 int、class、public 等）。\n```\n\n课堂理解：老师用一个选择题来帮助学生理解：\"下列哪个满足标识符的定义？\"关键是三个判断：\n- `int 1a;` → ❌ 首字符是数字\n- `int a1;` → ✅ 首字符是字母\n- `int 中;` → Java 中不推荐用中文，虽然技术上可能不报错，但极易出问题\n\n老师总结：\"标识符就是一个名称。类名、变量名、方法名、类型名、数组名、文件名——这些都是你可以自定义的，都用标识符来框起来。\"\n\n初学者提醒：\n1. 首字符用了数字（如 int 1score;）。\n2. 标识符中包含了空格（如 int my score;）。\n3. 用了关键字做标识符（如 int class;）。\n4. 用了特殊符号（如 int my-name; 中 - 不是合法字符）。\n5. 用中文做标识符（虽然某些情况下不报错，但强烈不推荐）。",
      javaCompare: ""
    },
    {
      title: "Java 的 8 种基本数据类型",
      content: "Java 提供 **8 种基本数据类型（primitive types）**，可以分为**四大类**：\n\n| 分类 | 类型 | 占用字节 | 说明 |\n|------|------|---------|------|\n| 逻辑类型 | `boolean` | 1 字节 | 只有 true 和 false 两个值 |\n| 整数类型 | `byte` | 1 字节（8 位） | 最小整数类型 |\n| 整数类型 | `short` | 2 字节（16 位） | 短整型 |\n| 整数类型 | `int` | 4 字节（32 位） | 最常用的整数类型 |\n| 整数类型 | `long` | 8 字节（64 位） | 长整型（值后面加 L） |\n| 字符类型 | `char` | 2 字节（16 位） | 单个字符，用单引号 |\n| 浮点类型 | `float` | 4 字节（32 位） | 单精度浮点（值后面加 f） |\n| 浮点类型 | `double` | 8 字节（64 位） | 双精度浮点（小数默认类型） |\n\n学习意义：声明每个变量时都必须指定数据类型。不同数据类型占用的内存空间不同，取值范围不同，适用的场景也不同。选错了数据类型可能导致数据溢出、精度丢失或内存浪费。\n\n基本语法/规则：\n// 整数类型\nbyte  b = 127;          // byte：-128 ~ 127\nshort s = 32767;        // short：约 ±3 万\nint   i = 100;          // int：约 ±21 亿（最常用）\nlong  l = 100000L;      // long：后面必须加 L\n\n// 浮点类型\nfloat  f = 3.14f;       // float：后面必须加 f\ndouble d = 3.1415926;   // double：小数默认类型\n\n// 字符类型\nchar c = 'A';           // char：单引号，只能放一个字符\n\n// 逻辑类型\nboolean flag = true;    // boolean：只有 true 或 false\n\n课堂理解：老师用\"内存空间\"的概念来解释为什么不同的类型占不同字节：**\"我们在申请内存的时候，要让 CPU 知道我要多大的空间。你告诉操作系统，它就会在内存中给你找一块地方放你的变量。\"**\n\n老师还用一个生动比喻来说明为什么 int 是 32 位：\"一个字节是 8 位，四个字节就是 32 位。在内存里存储的都是 0 和 1。就像电影《黑客帝国》里那个场景——除了 0 就是 1，但这两个数字可以解释所有的东西。\"\n\n对于类型级别，老师总结了一个从低到高的顺序：**byte → short → char → int → long → float → double**（从小到大）。\n\n初学者提醒：\n1. 把 byte 和 short 与 int 搞混——不知道什么时候用哪个（初学时大部分情况用 int 即可）。\n2. float 的值后面忘记加 f——小数默认是 double 类型。\n3. long 的值后面忘记加 L——大整数默认是 int 类型。\n4. char 用双引号而不是单引号——'A' 是 char，\"A\" 是 String。\n5. 以为 String 是基本数据类型——String 是引用类型（一个类）。",
      javaCompare: ""
    },
    {
      title: "类型转换——自动转换与强制转换",
      content: "Java 中不同类型之间进行赋值时，有时可以自动完成转换，有时需要程序员**手动指定**。这就是类型转换（Type Casting），分为两种：\n\n- **自动类型转换**：低精度类型 → 高精度类型，自动发生，不需要特殊操作。\n- **强制类型转换**：高精度类型 → 低精度类型，需要程序员手动写 `(目标类型)`，且可能丢失数据。\n\n学习意义：实际编程中经常需要在不同类型之间转换数据。比如从用户输入读取的可能是 String，需要转成 int 来计算；或者 double 运算结果只需要保留整数部分。不理解类型转换规则，代码就会编译失败或产生意料之外的结果。\n\n基本语法/规则：\n// 自动类型转换（低 → 高）\nint i = 100;\ndouble d = i;           // int 自动转为 double，OK\n\n// 强制类型转换（高 → 低）\ndouble pi = 3.14;\nint n = (int) pi;       // 手动强制转换，n 的值为 3（小数部分被截断，不是四舍五入）\n\n课堂理解：老师用了**\"胖人坐瘦椅子\"**的经典比喻来解释两种转换：\n\n- **自动类型转换（低→高）**：就像一个瘦小的人（低精度）坐在大学教室的大座位上（高精度）——\"他自己就坐上去了，没有问题，反正这个位置空的，可以坐下\"。\n- **强制类型转换（高→低）**：就像一个胖人（高精度）要坐在一个小的座位上（低精度）——\"坐不下怎么办？就得想办法，减减肥（瘦身）。\"对应到代码中，就是需要手动写 `(目标类型)` 来强制转换，而且**小数部分直接舍去**（不是四舍五入）。\n\n老师特别强调：\"1.999 强制转成 int 也是 1，小数点后边一刀切，都不要了，因为你放不下了。\"\n\n**精度从低到高的顺序**（老师板书修正后）：\n```text\nbyte → short → char → int → long → float → double\n（低精度）                              （高精度）\n```\n\n初学者提醒：\n1. 以为 float 转 int 是四舍五入——实际上是直接截断（1.9 → 1，不是 2）。\n2. 高精度转低精度忘记写强制转换语法（比如 double 直接赋给 int 会编译错误）。\n3. 混淆精度顺序，以为 float 比 long 精度低——实际上 float 的\"级别\"比 long 高（因为 float 能表示小数）。\n4. 强制转换可能造成数据溢出——比如把一个很大的 long 值强转为 int。",
      javaCompare: "自动类型转换是低精度到高精度，Java 可以自动完成；强制类型转换是高精度到低精度，必须写 (目标类型)，并且可能丢失数据。"
    },
    {
      title: "字符类型（char）详解",
      content: "`char` 是 Java 中表示**单个字符**的数据类型。它占用 2 个字节（16 位），使用**单引号**来表示。一个 char 变量只能存放一个字符，可以是一个英文字母、一个数字字符或一个中文汉字。\n\n学习意义：处理文字信息是程序最常见的工作。char 是字符串 String 的基础组成单位——String 本质上就是多个 char 的序列。char 和 int 之间可以进行转换（通过 ASCII/Unicode 码），这在处理字符编码时非常有用。\n\n基本语法/规则：\nchar 变量名 = '单个字符';    // 必须用单引号\n```\n\n**char 的关键特性：**\n\n- 用**单引号** `''` 包裹（String 用双引号 `\"\"`）\n- 只能放**一个**字符\n- 占用 **2 字节（16 位）**\n- 可以存英文（1 字节）或中文（2 字节）\n- 可以赋值为 Unicode 编码：`char c = 'A';`（等同于 'A'）\n\n课堂理解：老师用一个重要的区分帮助学生理解：\n- **char**：单引号，一个字母 = 一个字符（如 'A'、'中'）\n- **String**：双引号，是一个字符串（如 \"Hello\"、\"I like Java\"）\n\n**关键考点**：一个汉字占 2 个字节（16 位），char 恰好也是 2 个字节（16 位），所以**一个汉字可以放在一个 char 变量中**。这是二级考试常见的考点。\n\n老师还提到 char 和 int 之间的关系——\"A 在 ASCII 码里好像是 96？哦，我忘了，你们可以去查一下\"。实际上，标准 ASCII 码中，'A' = 65，'a' = 97。（这是课堂上老师记忆模糊的地方，在此修正。）\n\n初学者提醒：\n1. char 用了双引号：char c = \"A\";（应该是 'A'）。\n2. 在 char 中放了多个字符：char c = 'AB';（char 只能是一个字符）。\n3. 空 char 写法错误：char c = '';（至少要有一个字符，可以写 char c = ' '; 表示空格）。\n4. 混淆 char 和 String 的字节占用——char 2 字节，String 取决于长度和编码。",
      javaCompare: "char 使用单引号，只能存一个字符；String 使用双引号，可以存多个字符，是引用类型而不是基本数据类型。"
    },
    {
      title: "print 与 println 的区别",
      content: "`System.out.print()` 和 `System.out.println()` 都是 Java 的输出语句，区别在于：\n\n- **print**：输出内容后**不换行**，光标停留在同行末尾。\n- **println**：输出内容后**自动换行**，光标移到下一行开头。\n\n其中 `ln` 是 **line** 的缩写。\n\n学习意义：控制输出格式是程序的基本需求。有时候需要把多段内容输出在同一行（用 print），有时候需要分行显示（用 println）。如果用错了，输出结果会乱成一片。\n\n基本语法/规则：\nSystem.out.print(内容);     // 输出后不换行\nSystem.out.println(内容);   // 输出后换行\nSystem.out.println();       // 只换行，不输出内容\n\n课堂理解：老师用一个非常直观的方式解释：\n- **print**：输出完了，\"光标还在这闪烁\"，下一次输出**紧接着**当前位置继续。\n- **println**：输出完了，光标自动移到**下一行开头**，下一次输出从新行开始。\n\n老师画了一个演示效果：\n```text\nprint \"Hello\" → 输出 Hello，光标在 o 后面 →\nprint \"World\" → World 紧接着 Hello 输出，变成 HelloWorld\n\nprintln \"Hello\" → 输出 Hello，光标跳到下一行 →\nprintln \"World\" → 在新行输出 World\n```\n\n初学者提醒：\n1. 搞混 print 和 println，该换行的时候用 print，该同行的时候用 println。\n2. 写错方法名：printline（错误）、Println（错误）——正确是 println（全小写）。\n3. 以为 println 的 ln 是 In（大写 i）——其实是小写 L + n（line 的缩写）。",
      javaCompare: "print 输出后不换行，println 输出后自动换行；ln 是 line 的缩写。"
    },
    {
      title: "数组——一维数组与二维数组",
      content: "**数组**是用来存储**多个相同类型数据**的容器。数组中的每个数据称为**元素**，通过**下标（索引）**来访问。Java 中的数组下标从 **0** 开始。\n\n- **一维数组**：像一排格子，每个格子存一个数据。\n- **二维数组**：像一个表格/矩阵，有**行**和**列**两个维度。\n\n学习意义：当需要处理大量同类型数据时（如全班 50 个学生的成绩、一张表格的数据），不可能给每个数据单独声明一个变量。数组让我们可以用一个变量名统一管理一组数据，通过下标灵活访问任意元素。数组也是后续学习集合（ArrayList、HashMap）和数据结构的基础。\n\n基本语法/规则：\n**一维数组：**\n\n```java\n// 声明方式一：先声明后赋值\n数据类型[] 数组名 = new 数据类型[长度];\n数组名[下标] = 值;\n\n// 声明方式二：声明并初始化\n数据类型[] 数组名 = {值1, 值2, 值3, ...};\n```\n\n**二维数组：**\n\n```java\n// 声明方式\n数据类型[][] 数组名 = new 数据类型[行数][列数];\n\n// 访问元素\n数组名[行下标][列下标];\n```\n\n课堂理解：老师用**数学中的矩阵**来类比二维数组：\n\n```text\n矩阵：          二维数组：\nA11 A12 A13    arr[0][0] arr[0][1] arr[0][2]\nA21 A22 A23    arr[1][0] arr[1][1] arr[1][2]\nA31 A32 A33    arr[2][0] arr[2][1] arr[2][2]\n```\n\n- **前面的数字** = **行**（row）\n- **后面的数字** = **列**（column）\n- 第一个位置是 `[0][0]`，不是 `[1][1]`（下标从 0 开始）\n- `arr[1][2]` 表示第 2 行第 3 列的元素\n\n老师还解释了二维数组的本质：**\"二维数组其实是在一维数组里面，每一个单元分出来的小单元。\"** 即一个一维数组的每个元素本身又是一个数组（小数组）。\n\n老师还将数组与大数据联系起来：**\"转置一下就立起来了——一个人的信息我们称之为样本，这就是大数据取数据的方式。\"** 将横着的数据（行）转置变成竖着的（列），每一列就是一个样本的所有信息。\n\n初学者提醒：\n1. 数组下标从 0 开始，初学者容易从 1 开始算（数组越界错误）。\n2. 忘记用 new 分配空间就直接使用，导致空指针异常。\n3. 数组声明和初始化语法混淆（如 int[] arr = new int[3]{1,2,3}; 是错的——带 new 不能同时写具体值）。\n4. 二维数组的行和列搞反（arr[行][列] 不是 arr[列][行]）。\n5. 数组长度一旦声明就不能改变（要动态大小需要用 ArrayList）。",
      javaCompare: "一维数组用一个下标访问元素，二维数组用 arr[行][列] 两个下标访问元素。"
    }
  ],
  codeExamples: [
    {
      title: "8 种基本数据类型综合演示",
      code: `public class AllTypesDemo {
    public static void main(String[] args) {
        // 逻辑类型
        boolean isJavaFun = true;

        // 整数类型（4 种）
        byte  b = 100;                // 1 字节
        short s = 30000;              // 2 字节
        int   i = 2000000000;         // 4 字节（最常用）
        long  l = 9000000000000L;     // 8 字节（加 L）

        // 字符类型
        char c = 'J';

        // 浮点类型（2 种）
        float  f = 3.14f;             // 4 字节（加 f）
        double d = 3.14159265358979;  // 8 字节

        // 输出所有类型
        System.out.println("boolean: " + isJavaFun);
        System.out.println("byte: " + b);
        System.out.println("short: " + s);
        System.out.println("int: " + i);
        System.out.println("long: " + l);
        System.out.println("char: " + c);
        System.out.println("float: " + f);
        System.out.println("double: " + d);
    }
}`,
      explanation: "1. 本程序展示了 Java 的 8 种基本数据类型的声明和初始化。\n2. 每个类型的声明格式都是：类型 变量名 = 值;\n3. 注意 float 的值 3.14 后面必须加 f。\n4. 注意 long 的值 9000000000000 后面必须加 L（这个数超过了 int 的范围）。\n5. 用 + 号可以实现字符串和变量的拼接输出。"
    },
    {
      title: "类型转换的完整演示",
      code: `public class TypeConversionDemo {
    public static void main(String[] args) {
        // ====== 案例 1：自动类型转换 ======
        int num = 100;
        double dNum = num;                       // int → double（自动）
        System.out.println("int→double：" + dNum);     // 100.0

        char letter = 'B';
        int ascii = letter;                      // char → int（自动）
        System.out.println("B 的 ASCII 码：" + ascii); // 66

        // ====== 案例 2：强制类型转换 ======
        double pi = 3.14159;
        int intPi = (int) pi;                    // double → int（强制）
        System.out.println("pi 强转 int：" + intPi);   // 3（截断，不是四舍五入）

        double x = 1.999;
        int y = (int) x;                         // 1.999 → 1
        System.out.println("1.999 强转 int：" + y);    // 1

        // ====== 案例 3：运算中的自动提升 ======
        int a = 10;
        double b = 3.5;
        double result = a + b;                   // int 自动提升为 double 再运算
        System.out.println("10 + 3.5 = " + result);   // 13.5
    }
}`,
      explanation: "1. int num = 100; double dNum = num; — int 是 32 位，double 是 64 位，小→大，自动完成，结果为 100.0。\n2. char letter = 'B'; int ascii = letter; — char 可以自动转 int，得到的是字符对应的 ASCII 码（B=66）。\n3. (int) pi 将 3.14159 强转为 3——小数部分直接被丢弃，不是四舍五入。\n4. 1.999 强转也是 1——无论小数部分多大，都直接砍掉。\n5. int + double 运算时，int 先自动转为 double，然后运算，结果是 double 类型。"
    },
    {
      title: "二维数组——学生成绩表",
      code: `public class ScoreTable {
    public static void main(String[] args) {
        // 3 个学生，每人 4 门课的成绩
        // 行 = 学生，列 = 课程
        int[][] scores = {
            {90, 85, 78, 92},   // 学生 0：语文、数学、英语、Java
            {88, 76, 95, 85},   // 学生 1
            {70, 92, 88, 90}    // 学生 2
        };

        String[] subjects = {"语文", "数学", "英语", "Java"};

        // 输出第 2 个学生（下标 1）的所有成绩
        System.out.println("===== 学生 2 的成绩 =====");
        for (int j = 0; j < 4; j++) {
            System.out.println(subjects[j] + "：" + scores[1][j]);
        }

        // 输出所有学生的 Java（第 4 列，下标 3）成绩
        System.out.println("\\n===== Java 成绩 =====");
        for (int i = 0; i < 3; i++) {
            System.out.println("学生" + (i + 1) + "：" + scores[i][3]);
        }

        // 输出整个表格
        System.out.println("\\n===== 完整成绩表 =====");
        System.out.println("学生\\t语文\\t数学\\t英语\\tJava");
        for (int i = 0; i < 3; i++) {
            System.out.print("学生" + (i + 1) + "\\t");
            for (int j = 0; j < 4; j++) {
                System.out.print(scores[i][j] + "\\t");
            }
            System.out.println();
        }
    }
}`,
      explanation: "1. int[][] scores = {{...}, {...}, {...}}; 是一个 3 行 4 列的二维数组。\n2. scores[1][j] 表示第 2 个学生（下标 1）的各科成绩。\n3. 行的下标范围是 0~2，列的下标范围是 0~3。\n4. scores[i][3] 中 3 是固定值（第 4 列 = Java 成绩），i 从 0 到 2 遍历所有学生。\n5. \\t 是制表符（Tab），用于对齐输出。"
    }
  ],
  quiz: [
    {
      question: "Java 中 boolean 类型有几个取值？",
      options: [
        "1 个",
        "2 个",
        "3 个",
        "无限个"
      ],
      answer: "2 个",
      explanation: "boolean 类型只有 true 和 false 两个取值。不能赋 null、0、1 等其他值。"
    },
    {
      question: "以下类型转换中，哪个需要强制类型转换？",
      options: [
        "int → double",
        "char → int",
        "double → int",
        "byte → short"
      ],
      answer: "double → int",
      explanation: "double（64 位）→ int（32 位）是高精度向低精度转换，需要强制写 (int)。其余三项都是低→高，属于自动类型转换。"
    },
    {
      question: "以下关于 float 类型的说法，正确的是？",
      options: [
        "float 和 double 没有区别",
        "float 类型变量的值后面必须加字母 f 或 F",
        "float 比 double 占用的字节数更多",
        "Java 中 float 是默认的小数类型"
      ],
      answer: "float 类型变量的值后面必须加字母 f 或 F",
      explanation: "float 占 4 字节，double 占 8 字节（排除 A、C）。Java 中小数默认是 double（排除 D）。float 的值后面必须加 f（如 3.14f）。"
    },
    {
      question: "以下代码的输出结果是什么？",
      options: [
        "2",
        "1",
        "1.999",
        "编译错误"
      ],
      answer: "1",
      explanation: "强制类型转换 (int) 直接截断小数部分，不是四舍五入。所以 1.999 → 1。"
    },
    {
      question: "一个长度为 5 的一维数组，最后一个元素的下标是？",
      options: [
        "5",
        "4",
        "3",
        "0"
      ],
      answer: "4",
      explanation: "数组下标从 0 开始。长度为 5 的数组，下标范围是 0、1、2、3、4。所以最后一个元素下标是 4（即第 5 个元素）。"
    },
    {
      question: "在一维数组 int[] arr = {10, 20, 30, 40, 50}; 中，arr[1] 的值是多少？",
      options: [
        "10",
        "20",
        "30",
        "编译错误"
      ],
      answer: "20",
      explanation: "arr[0] = 10, arr[1] = 20, arr[2] = 30, arr[3] = 40, arr[4] = 50。下标从 0 开始，arr[1] 是第 2 个元素，值为 20。"
    },
    {
      question: "以下哪个关于 char 和 String 的描述是正确的？",
      options: [
        "char 用双引号，String 用单引号",
        "char 用单引号，String 用双引号",
        "char 和 String 都用双引号",
        "char 和 String 都用单引号"
      ],
      answer: "char 用单引号，String 用双引号",
      explanation: "char（单字符）用单引号：'A'。\nString（字符串）用双引号：\"Hello\"。"
    },
    {
      question: "以下哪个不是合法的 Java 标识符？",
      options: [
        "_test",
        "$value",
        "2name",
        "studentName"
      ],
      answer: "2name",
      explanation: "2name 以数字 2 开头，违反标识符\"首字符不能是数字\"的规则。其他三个都符合标识符规则。\n```\n\n---"
    }
  ],
  dragMatch: [
    {
      left: "boolean",
      right: "逻辑类型，只有 true 和 false 两个取值"
    },
    {
      left: "int",
      right: "最常用的整数类型，占 4 字节（32 位）"
    },
    {
      left: "double",
      right: "双精度浮点类型，小数默认类型，占 8 字节（64 位）"
    },
    {
      left: "float",
      right: "单精度浮点类型，值后面必须加 f，占 4 字节"
    },
    {
      left: "char",
      right: "字符类型，单引号，占 2 字节（16 位）"
    },
    {
      left: "自动类型转换",
      right: "低精度类型转高精度类型时自动发生，无需特殊操作"
    },
    {
      left: "强制类型转换",
      right: "高精度转低精度需手动写 (目标类型)，可能丢失数据"
    },
    {
      left: "一维数组",
      right: "存储多个同类型数据的容器，通过下标访问，下标从 0 开始"
    },
    {
      left: "二维数组",
      right: "类似表格/矩阵，有行和列两个维度，通过 arr[行][列] 访问"
    },
    {
      left: "println",
      right: "输出内容后自动换行，ln 是 line 的缩写"
    }
  ],
  flow: [
    "程序执行到赋值语句，右边有一个值要赋给左边的变量。",
    "检查左边变量的类型和右边值的类型是否相同。",
    "如果类型完全相同 → 直接赋值，无需转换。",
    "如果类型不同 → 判断精度级别（byte < short < char < int < long < float < double）。",
    "如果右边的精度 ≤ 左边的精度 → 自动类型转换（低→高，安全，自动完成）。",
    "如果右边的精度 > 左边的精度 → 不能自动转换，需要程序员手动写强制类型转换：(目标类型) 值。",
    "强制转换时，如果涉及浮点转整数 → 小数部分直接截断（丢弃），不是四舍五入。",
    "如果强制转换导致数据溢出 → 结果会出错（但编译器不报错，运行时可能产生意外值）。",
    "转换完成后，程序继续执行后面的语句。"
  ],
  exercises: [
    {
      question: "声明以下类型的变量并合理赋值，然后输出。\n\n(1) 一个 boolean 变量表示\"是否毕业\"\n(2) 一个 int 变量表示年龄\n(3) 一个 double 变量表示工资\n(4) 一个 char 变量表示性别（'M'/'F'）\n(5) 一个 float 变量表示身高（米）",
      answer: "public class VariablePractice {\n    public static void main(String[] args) {\n        boolean isGraduated = false;\n        int age = 22;\n        double salary = 8500.50;\n        char gender = 'M';\n        float height = 1.75f;\n\n        System.out.println(\"是否毕业：\" + isGraduated);\n        System.out.println(\"年龄：\" + age);\n        System.out.println(\"工资：\" + salary);\n        System.out.println(\"性别：\" + gender);\n        System.out.println(\"身高：\" + height);\n    }\n}\n\n解题思路：\n每个变量按\"类型 变量名 = 值;\"的格式声明。特别注意 float 后面必须加 f。"
    },
    {
      question: "写出以下每个强制类型转换的结果。\n\n(1) (int) 3.14\n(2) (int) 9.99\n(3) (int) -2.8\n(4) (double) 5",
      answer: "(1) 3        （截断 .14）\n(2) 9        （截断 .99，不是 10）\n(3) -2       （截断 .8，向零取整）\n(4) 5.0      （int→double 是自动转换，变为 5.0）\n\n解题思路：\n浮点转整数 = 直接丢弃小数部分（向零取整）。整数转浮点 = 补充 .0。"
    },
    {
      question: "声明一个一维数组，存放 5 个同学的名字，然后输出第 1 个和最后一个同学的名字。",
      answer: "public class NameArray {\n    public static void main(String[] args) {\n        String[] names = {\"张三\", \"李四\", \"王五\", \"赵六\", \"钱七\"};\n\n        System.out.println(\"第 1 个同学：\" + names[0]);\n        System.out.println(\"最后一个同学：\" + names[4]);  // 下标 4 = 第 5 个\n    }\n}\n\n解题思路：\n1. 用花括号直接初始化数组。\n2. 第 1 个元素下标是 0。\n3. 第 5 个（最后一个）元素下标是 4（长度 5，下标范围 0~4）。"
    },
    {
      question: "创建一个 3 行 2 列的二维数组，存入以下数据并按照表格格式输出：\n\n第 1 行：商品A，25.5\n第 2 行：商品B，30.0\n第 3 行：商品C，18.9",
      answer: "public class ProductTable {\n    public static void main(String[] args) {\n        // 第 0 列存商品名，第 1 列存价格\n        String[][] products = {\n            {\"商品A\", \"25.5\"},\n            {\"商品B\", \"30.0\"},\n            {\"商品C\", \"18.9\"}\n        };\n\n        System.out.println(\"商品名\\t价格\");\n        for (int i = 0; i < 3; i++) {\n            System.out.println(products[i][0] + \"\\t\" + products[i][1]);\n        }\n    }\n}\n\n解题思路：\n1. 二维数组 = 3 行 × 2 列。\n2. 每行的第 0 列是商品名，第 1 列是价格。\n3. 使用 for 循环遍历每一行，输出两列数据。"
    },
    {
      question: "找出以下代码中的 5 处错误并修正。\n\npublic class test {\n    public static void main(string[] args) {\n        float price = 9.99;\n        int 1score = 100;\n        char grade = \"A\";\n        int[] arr = new int[3];\n        arr[3] = 10;\n        system.out.println(\"price: \" + price);\n    }\n}",
      answer: "错误1：类名 test → Test（类名首字母大写）\n错误2：string[] args → String[] args（String 的 S 大写）\n错误3：float price = 9.99; → float price = 9.99f;（float 必须加 f）\n错误4：int 1score = 100; → int score1 = 100;（标识符不能以数字开头）\n错误5：char grade = \"A\"; → char grade = 'A';（char 用单引号）\n错误6：arr[3] = 10; → arr[2] = 10;（长度 3 的数组下标范围 0~2）\n错误7：system.out.println → System.out.println（System 的 S 大写）\n\n解题思路：\n逐行按 Java 语法规则检查，重点关注：大小写、后缀（f/L）、引号、标识符、数组下标边界。\n```\n\n---"
    }
  ],
  conclusion: [
    "本节课的核心是掌握 Java 的 8 种基本数据类型（按四大类记忆）以及两种类型转换方式（自动和强制）。这些是 Java 语法中最基础也最常用的内容。",
    "学习 Java 时要特别注意几个细节：float 的值后面必须加 f、数组下标从 0 开始、强制类型转换是截断而不是四舍五入——这些是初学者最容易出错的地方，也是考试的重点。",
    "通过本节课，应该能够熟练声明各种基本类型的变量、在类型之间进行合理转换、使用一维数组和二维数组存取数据。",
    "类型转换的知识在后面学习方法的参数传递、面向对象的多态时都会用到。数组是后续学习 for 循环遍历、集合框架（ArrayList、HashMap）以及数据结构的基础。",
    "课后建议多练习：(1) 把 8 种基本类型全部声明一遍并输出；(2) 做几个强制类型转换的练习（特别是浮点转整数）；(3) 创建一个二维数组存入真实数据（如课表、成绩表）并输出；(4) 自学 Scanner 类，尝试从键盘读取输入。"
  ]
}