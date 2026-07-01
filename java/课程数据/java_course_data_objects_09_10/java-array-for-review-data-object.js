{
  id: "java-array-for-review",
  title: "数组与 for 循环综合复习",
  chapter: "Java 数组",
  date: "2025-09-11",
  tags: [
    "一维数组",
    "二维数组",
    "双重for循环",
    "数组赋值",
    "数组默认值",
    "循环嵌套"
  ],
  summary: [
    "本节课首先布置了实验作业的提交要求：实验一和实验二合并、实验三和实验四合为两个档案袋，A4 纸手写代码，左侧叠线后装订。",
    "课堂中通过一维数组例题，复习数组声明、new 分配空间、数组下标从 0 开始，以及 int 数组创建后默认值为 0 的关键概念。",
    "老师重点演示了二维数组的双重 for 循环赋值过程：外层控制行 i，内层控制列 j，并详细讲解了二重循环的执行步骤。",
    "本节课强调了赋值和取值的区别：arr[i] 出现在等号左边表示写入，出现在等号右边或输出语句中表示读取。",
    "最后老师要求将竖着输出的二维数组改成横着的表格形式输出，从而复习 print、println 和制表符 \\t 的输出控制。"
  ],
  keyPoints: [
    {
      title: "一维数组的声明与默认值",
      content: "一维数组用于保存多个相同类型的数据。使用 int[] A = new int[3]; 可以创建长度为 3 的整型数组，下标范围是 0、1、2。数组创建后不是“空的”，int 类型元素会自动得到默认值 0。",
      javaCompare: "与普通 int 变量不同，数组一次可以管理多个 int；与局部变量不同，数组元素创建后会有默认值。"
    },
    {
      title: "数组下标从 0 开始",
      content: "Java 数组的第一个元素是 A[0]，不是 A[1]。长度为 3 的数组最后一个元素是 A[2]，访问 A[3] 会出现下标越界错误。写循环时通常使用 i = 0; i < A.length; i++。",
      javaCompare: "数学中常从 1 开始计数，而 Java 数组从 0 开始计数。"
    },
    {
      title: "赋值与取值的区别",
      content: "赋值是把数据写入数组，例如 A[i] = i + 1；取值是从数组读取数据，例如 System.out.println(A[i]) 或 int x = A[i]。判断时可以看数组元素在等号左边还是右边。",
      javaCompare: "A[i] 在等号左边是写入，在等号右边或 println 中是读取。"
    },
    {
      title: "二维数组的表格结构",
      content: "二维数组可以理解为一个表格，需要通过两个下标定位元素：A[行][列]。例如 int[][] A = new int[3][3]; 表示 3 行 3 列的二维数组。",
      javaCompare: "一维数组只需要一个下标，如 A[0]；二维数组需要两个下标，如 A[0][1]。"
    },
    {
      title: "双重 for 循环：外行内列",
      content: "遍历二维数组时，通常外层 for 控制行 i，内层 for 控制列 j。外层每执行一次，内层会完整跑一圈，所以口诀是“外层跑一次，内层跑一圈”。",
      javaCompare: "单层 for 适合一维数组；双重 for 是遍历二维数组的标准写法。"
    },
    {
      title: "竖排输出与横排输出",
      content: "如果内层循环使用 println，每个元素都会单独占一行，结果会竖着输出；如果内层循环使用 print，再在一行结束后调用 println()，就能把二维数组输出成表格。",
      javaCompare: "print 不换行，println 输出后换行；横排表格通常是内层 print + 外层 println。"
    },
    {
      title: "制表符 \\t 的作用",
      content: "\\t 是制表符，也就是 Tab，常用于让表格中相邻列之间保持间隔。输出二维数组时写 System.out.print(A[i][j] + \"\\t\"); 可以让数据更整齐。",
      javaCompare: "空格数量难控制，\\t 更适合简单表格对齐。"
    },
    {
      title: "双重循环中的变量命名",
      content: "嵌套循环中外层和内层不能使用同名变量。习惯上外层使用 i，内层使用 j。若内外层都写 int i，会造成语法或逻辑错误。",
      javaCompare: "一层循环常用 i；二维循环常用 i 表示行、j 表示列。"
    }
  ],
  codeExamples: [
    {
      title: "一维数组：区分赋值和取值",
      code: `public class OneDArrayDemo {
    public static void main(String[] args) {
        int[] A = new int[4];    // 长度 4，下标 0,1,2,3，默认全是 0

        // ==== 赋值 ====
        for (int i = 0; i < A.length; i++) {
            A[i] = i + 1;        // 把 1,2,3,4 依次写入数组
        }

        // ==== 取值（输出） ====
        System.out.println("数组内容：");
        for (int k = 0; k < A.length; k++) {
            System.out.println("A[" + k + "] = " + A[k]);
        }

        // 未赋值的元素会保持默认值 0
        int[] B = new int[5];
        B[0] = 100;
        B[1] = 200;
        // B[2], B[3], B[4] 没赋值 → 默认值 0
        System.out.println("\\nB[2] = " + B[2]);   // 0（默认值）
    }
}`,
      explanation: "第一个 for 循环把数据写入数组，是赋值操作；第二个 for 循环读取数组元素并输出，是取值操作。B[2] 没有手动赋值，所以仍然是 int 数组的默认值 0。"
    },
    {
      title: "二维数组双重循环：外行内列",
      code: `public class TwoDLoopDemo {
    public static void main(String[] args) {
        int[][] A = new int[3][3];   // 3行3列

        System.out.println("===== 双重循环赋值过程 =====");
        for (int i = 0; i < 3; i++) {
            System.out.println("--- 进入第 " + (i + 1) + " 行 ---");
            for (int j = 0; j < 3; j++) {
                A[i][j] = (i + 1) * 10 + (j + 1);
                System.out.println("  A[" + i + "][" + j + "] = " + A[i][j]);
            }
        }

        System.out.println("\\n===== 最终矩阵 =====");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print(A[i][j] + "\\t");
            }
            System.out.println();
        }
    }
}`,
      explanation: "外层 i 控制第几行，内层 j 控制第几列。每当 i 固定时，j 会从 0 到 2 跑一整圈，完成一整行的赋值和输出。"
    },
    {
      title: "竖排改横排：输出格式控制",
      code: `public class FormatOutput {
    public static void main(String[] args) {
        String[][] fruits = {
            {"苹果", "红色", "5元"},
            {"香蕉", "黄色", "3元"},
            {"葡萄", "紫色", "8元"}
        };

        System.out.println("===== 竖排输出（不好看） =====");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.println(fruits[i][j]);  // 每个一行
            }
        }

        System.out.println("\\n===== 横排输出（表格格式） =====");
        System.out.println("名称\\t颜色\\t价格");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print(fruits[i][j] + "\\t");
            }
            System.out.println();
        }
    }
}`,
      explanation: "竖排输出时内层使用 println，每个元素都会换行；横排表格输出时内层使用 print，一行结束后再用 println() 换行。"
    }
  ],
  quiz: [
    {
      question: "int[] arr = new int[5]; 创建后，arr[2] 的值是多少？",
      options: [
        "null",
        "0",
        "未定义",
        "2"
      ],
      answer: "0",
      explanation: "int 类型数组的默认值是 0。new int[5] 创建后，所有 5 个元素都是 0。"
    },
    {
      question: "遍历二维数组 int[][] arr = new int[3][4]; 时，以下哪个写法正确？",
      options: [
        "for(int i=0; i<3; i++) for(int j=0; j<4; j++) arr[i][j]=0;",
        "for(int i=0; i<4; i++) for(int j=0; j<3; j++) arr[i][j]=0;",
        "for(int i=1; i<=3; i++) for(int j=1; j<=4; j++) arr[i][j]=0;",
        "for(int i=0; i<3; i++) for(int i=0; i<4; i++) arr[i][i]=0;"
      ],
      answer: "for(int i=0; i<3; i++) for(int j=0; j<4; j++) arr[i][j]=0;",
      explanation: "i 从 0 到 2 表示 3 行，j 从 0 到 3 表示 4 列，刚好覆盖 int[3][4] 的所有元素。"
    },
    {
      question: "以下代码输出什么？int[] arr = {10, 20, 30}; arr[0] = 100; System.out.println(arr[1]);",
      options: [
        "10",
        "20",
        "100",
        "0"
      ],
      answer: "20",
      explanation: "arr[0]=100 只修改第一个元素，arr[1] 仍然是原来的 20。"
    },
    {
      question: "以下双重循环会输出什么图形？外层 i<3，内层 j<4，内层 print(\"*\")，外层末尾 println()。",
      options: [
        "输出 3 行，每行 4 个 *",
        "输出 4 行，每行 3 个 *",
        "输出 12 行，每行 1 个 *",
        "编译错误"
      ],
      answer: "输出 3 行，每行 4 个 *",
      explanation: "外层循环控制行数，执行 3 次；内层循环控制每行的内容，执行 4 次，所以是 3 行，每行 4 个星号。"
    },
    {
      question: "数组 int[] A = new int[4]; 共有几个元素？",
      options: [
        "3 个",
        "4 个",
        "5 个",
        "不确定"
      ],
      answer: "4 个",
      explanation: "new int[4] 表示创建长度为 4 的数组，下标为 0、1、2、3。"
    },
    {
      question: "关于“赋值”和“取值”，以下说法正确的是？",
      options: [
        "赋值和取值是同一种操作",
        "arr[0] = 5 是取值",
        "int x = arr[0] 是赋值",
        "arr[0] = 5 是赋值，int x = arr[0] 是取值"
      ],
      answer: "arr[0] = 5 是赋值，int x = arr[0] 是取值",
      explanation: "arr[i] 在等号左边时表示写入，也就是赋值；在等号右边时表示读取，也就是取值。"
    }
  ],
  dragMatch: [
    {
      left: "一维数组",
      right: "通过一个下标访问元素，如 arr[0]"
    },
    {
      left: "二维数组",
      right: "通过行和列两个下标访问元素，如 arr[行][列]"
    },
    {
      left: "数组默认值",
      right: "创建数组后系统自动赋予的值，int 类型默认为 0"
    },
    {
      left: "赋值",
      right: "把数据写入数组某个位置，如 A[0] = 5"
    },
    {
      left: "取值",
      right: "从数组某个位置读取数据，如 int x = A[0]"
    },
    {
      left: "双重 for 循环",
      right: "外层控制行，内层控制列，遍历二维数组的标准写法"
    },
    {
      left: "print",
      right: "输出后不换行，适合在同一行连续输出"
    },
    {
      left: "println",
      right: "输出后自动换行，适合一行输出结束后换到下一行"
    },
    {
      left: "\\t",
      right: "制表符 Tab，用于对齐表格列"
    },
    {
      left: "下标越界",
      right: "访问不存在的下标时抛出的错误"
    }
  ],
  flow: [
    "外层循环 i=0，进入第 1 行。",
    "内层循环初始化 j=0。",
    "判断 j<3 为 true，执行 A[0][0] = 值，然后 j++ 变为 1。",
    "继续判断 j<3 为 true，执行 A[0][1] = 值，然后 j++ 变为 2。",
    "继续判断 j<3 为 true，执行 A[0][2] = 值，然后 j++ 变为 3。",
    "判断 j<3 为 false，内层循环结束。",
    "外层 i++，i 变为 1，进入第 2 行。",
    "内层循环重新初始化 j=0。",
    "j 从 0 到 2 再次跑一圈，依次给 A[1][0]、A[1][1]、A[1][2] 赋值。",
    "内层再次结束后，外层 i++，i 变为 2。",
    "判断 i<2 为 false，双重循环全部结束。"
  ],
  exercises: [
    {
      question: "声明一个长度为 5 的 int 数组，用 for 循环从下标 0 到 4 依次赋值为 10、20、30、40、50，然后输出所有元素。",
      answer: "public class ArrayPractice {\n    public static void main(String[] args) {\n        int[] arr = new int[5];\n        for (int i = 0; i < arr.length; i++) {\n            arr[i] = (i + 1) * 10;\n        }\n        for (int i = 0; i < arr.length; i++) {\n            System.out.println(\"arr[\" + i + \"] = \" + arr[i]);\n        }\n    }\n}"
    },
    {
      question: "声明一个 2 行 4 列的二维 int 数组，用双重 for 循环将所有元素赋值为行号和列号的乘积，然后以表格形式输出。",
      answer: "public class TwoDArrayPractice {\n    public static void main(String[] args) {\n        int[][] A = new int[2][4];\n\n        for (int i = 0; i < 2; i++) {\n            for (int j = 0; j < 4; j++) {\n                A[i][j] = (i + 1) * (j + 1);\n                System.out.print(A[i][j] + \"\\t\");\n            }\n            System.out.println();\n        }\n    }\n}"
    },
    {
      question: "有一个数组 int[] scores = {85, 92, 78, 63, 95, 88}; 请计算所有分数的总和与平均值。",
      answer: "public class AverageScore {\n    public static void main(String[] args) {\n        int[] scores = {85, 92, 78, 63, 95, 88};\n        int sum = 0;\n        for (int i = 0; i < scores.length; i++) {\n            sum += scores[i];\n        }\n        double avg = sum * 1.0 / scores.length;\n        System.out.println(\"总分：\" + sum);\n        System.out.println(\"平均分：\" + avg);\n    }\n}"
    },
    {
      question: "找出代码错误：int[] A = new int[3]; for (int i = 1; i <= 3; i++) { A[i] = i; } int[][] B = new int[2]; B[0][0] = 1;",
      answer: "错误 1：循环应从 i=0 开始并使用 i<3，否则 A[3] 越界。错误 2：二维数组声明不完整，应写 int[][] B = new int[2][3];。错误 3：B 未正确创建为二维数组时不能使用 B[0][0]。"
    },
    {
      question: "用双重 for 循环输出每行递增一个星号的图案：第一行 1 个 *，第二行 2 个 *，直到第五行 5 个 *。",
      answer: "public class StarPattern {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(\"*\");\n            }\n            System.out.println();\n        }\n    }\n}"
    }
  ],
  conclusion: [
    "本节课的核心是将数组和 for 循环两个知识点融合起来，用 for 循环操作一维和二维数组的赋值与取值。",
    "操作数组时一定要记住下标从 0 开始，这是写 for 循环遍历数组时最容易出错的点。",
    "双重 for 循环的规则是外行内列：外层跑一次，内层跑一圈。理解这个模型后，操作二维数据会更清晰。",
    "数组是后续学习集合、排序、查找和数据结构的基础，现在多练习数组操作，后面会事半功倍。",
    "课后建议多练习一维数组赋值输出、二维数组表格输出、竖排改横排输出，以及双重循环星号图案。"
  ]
}