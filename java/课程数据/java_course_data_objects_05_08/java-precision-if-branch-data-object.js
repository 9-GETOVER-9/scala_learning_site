{
  id: "java-precision-if-branch",
  title: "运算符精度与 if 分支语句入门",
  chapter: "Java 流程控制",
  date: "2025-09-01",
  tags: [
    "运算精度",
    "自动类型提升",
    "if语句",
    "if-else",
    "分支语句",
    "逻辑运算符",
    "代码规范"
  ],
  summary: [
    "本节课首先回顾了前置和后置自加自减的区别，通过代码运行结果验证了\"前置先加后用，后置先用后加\"的规则。",
    "课堂中重点讲解了算术运算符的精度规则——表达式中有 double 就按 double 算，最高级是 float 按 float 算，都是 int 按 int 算。",
    "老师通过例题演示了逻辑运算符（逻辑非 ! 将 true 变 false，false 变 true），并强调需要理清代码逻辑规则。",
    "本节课正式引入 if 语句的结构——if 后面是条件表达式（true 或 false），条件为 true 执行代码块，为 false 则跳出。",
    "最后讲解了 if-else 分支语句——条件为真执行 statement one，为假执行 statement two，这就是\"有两条路可走\"的选择结构。"
  ],
  keyPoints: [
    {
      title: "算术运算符的精度规则",
      content: "当表达式中出现不同类型的数据时，Java 会自动进行向上转换——以表达式中精度最高的类型为基准进行计算。具体规则是： - 如果表达式中有 double（双精度），整个表达式按 double 运算，结果也是 double。 - 如果表达式最高级是 float（单精度），按 float 运算。 - 如果全是 int（整型），按 int 运算（注意：整数除法会截断小数）。 - char 类型在运算中会自动转换为 int 类型。 学习意义：如果不理解精度规则，就会困惑为什么 5 / 2 结果是 2 而不是 2.5，为什么 5.0 / 2 结果是 2.5。这直接关系到计算结果的正确性。 课堂理解：老师提出了三条核心规则： 1. 有 double 就按 double：\"只要在这个式子里边有一个数是 double，那整个这个东西都是 double。因为要向上转换。不向上转换的话，它就加不了。\" 2. 按最高精度来：\"表达式最高级是单浮点就按单浮点做，是整型就按整型做。\" 3. 运算时左右两边类型要一致：\"在进行运算的时候，我们要保证运算数左右两边类型保持一致。不一样的话，要往上升或者往下降。\" 老师还提到了 char 的转换：\"char 可以变成 int。\"",
      javaCompare: ""
    },
    {
      title: "逻辑非（!）运算符",
      content: "逻辑非 ! 是一个单目逻辑运算符，用于反转布尔值。!true 变成 false，!false 变成 true。 学习意义：程序中有大量\"如果不是……\"的判断——比如\"如果不是周末\"、\"如果密码不正确\"。这些场景都需要用 ! 来取反。 课堂理解：老师用一句话解释了逻辑非：\"非就是如果是 true 就变成 false，如果是 false 就变成 true。\"逻辑非、逻辑与（&&）、逻辑或（||）构成 Java 的三种逻辑运算符。",
      javaCompare: ""
    },
    {
      title: "if 语句——最简单的条件判断",
      content: "if 语句（条件判断语句）让程序能够根据条件是否成立来决定是否执行某段代码。这是 Java 中最基本的流程控制语句。 - 如果 if 后面括号里的条件为 true，就执行后面花括号 { } 里的代码。 - 如果条件为 false，就跳过花括号里的代码，继续执行后面的内容。 学习意义：现实世界中充满了选择——\"如果下雨就带伞\"\"如果及格就庆祝\"。编程也是一样，程序需要根据不同的情况做出不同的响应。if 语句就是实现这种\"根据条件做选择\"的基本工具。 课堂理解：老师用一个清晰的流程图来解释 if 的执行过程： - \"if 这个地方是一个条件表达式（condition），它要判断这个值是 true 还是 false。\" - \"如果是 true，我们就执行里面的 body。如果是 false，我们就不执行它，然后跳出来。\" - \"跳出它的 body，跳出语句组。\" 老师还举了个例子：if (x == 0)，\"这个表达式是真是假？如果是真，我们就执行下面这一段。\"",
      javaCompare: ""
    },
    {
      title: "if-else 分支语句",
      content: "if-else 是 if 语句的升级版，提供了两条路： - 条件为 true → 执行 if 块（statement one）。 - 条件为 false → 执行 else 块（statement two）。 两条路必走其一，不会同时走，也不会一条都不走。 学习意义：生活中很多场景只有两种可能——\"及格 / 不及格\"\"登录 / 未登录\"\"成年 / 未成年\"。if-else 就是用来处理这种二选一场景的。 课堂理解：老师用了一个很直观的比喻： - \"如果怎么样，我们就这样。如果这个地方不怎么样，我们就那样。\" - \"这叫分支语句——它有两个分支，两条路。这条路可能是这个，那条路可能是这个。\" - \"有选择——如果嘛，不是选择嘛。你选择如果是真就走这边，如果是假就走那边。\" 老师还画了一个流程图来说明：一个判断点（菱形），true 走一条路，false 走另一条路。",
      javaCompare: ""
    },
    {
      title: "代码规范——大小写与输入习惯",
      content: "Java 是一门严格区分大小写的语言。System 的 S 必须大写，system 或 SYSTEM 都是错的。这不仅关系到语法正确性，也关系到考试得分。 学习意义：因为大小写问题导致的编译错误是初学者最常见的错误之一。养成良好的大小写习惯，不仅能减少 bug，也让代码看起来更专业。 课堂理解：老师非常严肃地强调了这个点： - \"这个 S 是大写，不要写成小写。考试的时候，有很多人说'老师我都写的不错呀，怎么能错了呢？'——如果我看你这个小写的 s，写成和 g 一边高的，那 sorry，你错了。\" - \"你必须把这个 S 写成明显的大写。如果你写成 s y s 这样的，对不起，错。\" - \"一定不要因为你的输入导致你自己的记忆力低下。\" 换句话说，输入习惯不好 = 分数低。老师是在用考试来倒逼学生养成正确的输入习惯。",
      javaCompare: ""
    },
    {
      title: "if 单分支与 if-else 双分支的适用区别",
      content: "if 单分支适合“满足条件才做某件事”的场景；if-else 双分支适合“二选一”的场景。两者都要求括号中的条件表达式结果必须是 boolean 类型，且建议始终使用花括号避免只控制一行代码的陷阱。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "不同精度类型的混合运算",
      code: `public class MixedPrecisionDemo {
    public static void main(String[] args) {
        // ====== 场景 1：全 int → 结果是 int ======
        int x = 7, y = 2;
        int r1 = x / y;              // 整数除法
        System.out.println("7 / 2（全int）= " + r1);       // 3

        // ====== 场景 2：有 double → 结果是 double ======
        double r2 = x / 2.0;         // 2.0 是 double，x 自动提升
        System.out.println("7 / 2.0（有double）= " + r2);  // 3.5

        // ====== 场景 3：混合类型 ======
        double a = 5.5;
        int b = 2;
        double r3 = a * b;           // b 自动提升为 double
        System.out.println("5.5 * 2 = " + r3);            // 11.0

        // ====== 场景 4：char 参与运算 ======
        char c1 = 'A';
        char c2 = 'B';
        int sum = c1 + c2;           // 'A'(65) + 'B'(66) = 131
        System.out.println("'A' + 'B' = " + sum);         // 131

        // ====== 场景 5：double 强制转 int ======
        double pi = 3.14;
        int intPi = (int) pi;        // 强制转换，截断小数
        System.out.println("(int)3.14 = " + intPi);       // 3
    }
}`,
      explanation: "1. 7/2=3：两个 int 相除，小数被舍弃。 2. 7/2.0=3.5：2.0 是 double，7 自动转成 7.0，按浮点除法计算，保留小数。 3. 5.5*2=11.0：b=2 自动提升为 2.0，然后 5.5*2.0=11.0。 4. 'A'+'B'=65+66=131：char 在运算中自动转成对应的 ASCII/Unicode 码。 5. (int)3.14=3：强制转换截断小数（非四舍五入）。"
    },
    {
      title: "if 和 if-else 的完整对比",
      code: `public class IfVsIfElse {
    public static void main(String[] args) {
        int score = 55;

        // ====== 只使用 if（两个独立判断） ======
        System.out.println("===== 两个独立的 if =====");
        if (score >= 90) {
            System.out.println("优秀");
        }
        if (score >= 60) {
            System.out.println("及格");
        }
        if (score < 60) {
            System.out.println("不及格");
        }
        // 每次判断都是独立的，55 < 60，所以只输出"不及格"

        // ====== 使用 if-else if-else（互斥分支） ======
        System.out.println("\\n===== if-else if-else =====");
        if (score >= 90) {
            System.out.println("优秀");
        } else if (score >= 60) {
            System.out.println("及格");
        } else {
            System.out.println("不及格");
        }
        // 三个分支互斥，只会走一个：55 不满足前两个，走 else

        // ====== 基本 if-else（二选一） ======
        System.out.println("\\n===== 基本 if-else =====");
        int age = 20;
        if (age >= 18) {
            System.out.println("成年人");
        } else {
            System.out.println("未成年人");
        }
    }
}`,
      explanation: "1. 两个独立的 if：每个 if 独立判断，互不影响。score=55，前两个都是 false，第三个是 true。 2. if-else if-else：这是一个整体结构，三个分支互斥。只要前面的条件满足了，后面的就不再判断。 3. if-else 二选一：最简单的分支结构，不是走 if 就是走 else。 4. 什么时候用独立 if？——多个不互斥的条件（如多个独立的功能判断）。 5. 什么时候用 if-else？——互斥的条件（如成绩等级划分，一个分数只能对应一个等级）。"
    },
    {
      title: "用 if-else 做简单计算器",
      code: `public class SimpleCalculator {
    public static void main(String[] args) {
        int a = 15, b = 6;
        char operator = '/';    // 运算符：+、-、*、/

        System.out.println("计算：" + a + " " + operator + " " + b);

        if (operator == '+') {
            System.out.println("结果：" + (a + b));
        } else if (operator == '-') {
            System.out.println("结果：" + (a - b));
        } else if (operator == '*') {
            System.out.println("结果：" + (a * b));
        } else if (operator == '/') {
            if (b != 0) {
                System.out.println("结果：" + (a / b));         // 整数除法
                System.out.println("精确结果：" + (a * 1.0 / b)); // 浮点除法
            } else {
                System.out.println("错误：除数不能为零！");
            }
        } else {
            System.out.println("错误：不支持的运算符！");
        }
    }
}`,
      explanation: "1. 用 if-else if-else 根据不同的运算符执行不同的计算。 2. operator == '/' 成立，进入除法分支。 3. 检查除数 b 是否为 0（防御性编程，避免除零错误），b=6 ≠ 0，继续。 4. a/b=15/6=2（整数除法）；a*1.0/b=15.0/6=2.5（浮点除法）。 5. 如果运算符不是 +、-、*、/ 中的任何一个，走最后的 else 输出错误提示。"
    }
  ],
  quiz: [
    {
      question: "以下表达式中，哪个的结果是 double 类型？",
      options: [
        "10 / 3",
        "10 / 3.0",
        "10 % 3",
        "(int) 3.14"
      ],
      answer: "10 / 3.0",
      explanation: "10/3.0 中有一个 double（3.0），表达式整体按 double 计算。A 是全 int 结果为 int；C 求余也是 int；D 强制转 int 后也是 int。"
    },
    {
      question: "以下代码的输出结果是什么？\n\nint a = 10;\nint b = 3;\ndouble c = a / b;\nSystem.out.println(c);",
      options: [
        "3.3333...",
        "3.0",
        "3",
        "编译错误"
      ],
      answer: "3.0",
      explanation: "a/b 是 int/int = 3（整数除法），然后把 3 赋给 double 变量 c，变成 3.0。要得到 3.333...，需要写成 (double)a/b 或 a/3.0。"
    },
    {
      question: "关于 if-else 语句，以下说法正确的是？",
      options: [
        "if-else 语句中，if 和 else 两个分支可能同时执行",
        "else 后面必须跟着一个条件表达式",
        "if-else 是一个二选一的结构，if 和 else 两个分支必走其一",
        "if-else 语句不能嵌套使用"
      ],
      answer: "if-else 是一个二选一的结构，if 和 else 两个分支必走其一",
      explanation: "if-else 是最简单的分支语句，条件成立走 if 分支，不成立走 else 分支，必走其一且只走其一。else 后面不能跟条件，if-else 可以嵌套。"
    },
    {
      question: "以下哪个条件表达式能正确判断\"x 是偶数\"？",
      options: [
        "if (x = 0)",
        "if (x / 2 == 0)",
        "if (x % 2 == 0)",
        "if (x % 2 = 0)"
      ],
      answer: "if (x % 2 == 0)",
      explanation: "偶数的特征是除以 2 余数为 0，用 % 求余。A 是赋值不是判断；B 不准确（只有 x=0 或 1 时才成立）；D 混淆了 == 和 =。"
    },
    {
      question: "if (x > 0); 这一行代码中，\"if (x > 0);\"是语法错误吗？",
      options: [
        "是语法错误，编译器会报错",
        "不是语法错误，但逻辑上是错误的",
        "这是正确的写法",
        "if 不能单独和分号一起用"
      ],
      answer: "不是语法错误，但逻辑上是错误的",
      explanation: "if (x > 0); 在语法上完全合法——它是一个 if 后面跟了一个空语句。编译器不会报错。但这几乎肯定是编程者不小心多写的分号，逻辑上是一个 bug。"
    },
    {
      question: "以下关于运算精度规则的说法，正确的是？",
      options: [
        "表达式中有 int 时，结果一定是 int",
        "char 类型不能参与算术运算",
        "表达式中有 double 时，整个表达式按 double 计算",
        "float 和 double 一起运算时，结果按 float 计算"
      ],
      answer: "表达式中有 double 时，整个表达式按 double 计算",
      explanation: "有 double 就按 double 算（向上转换规则）。A 错：有 double 时结果就不是 int。B 错：char 可以参与运算且自动转 int。D 错：float 和 double 一起时，float 提升为 double。"
    }
  ],
  dragMatch: [
    {
      left: "运算精度规则",
      right: "表达式中有 double 按 double 算，有 float 按 float 算，全 int 按 int 算"
    },
    {
      left: "向上转换",
      right: "低精度类型在混合运算中自动提升为高精度类型"
    },
    {
      left: "逻辑非 !",
      right: "反转布尔值，!true 变 false，!false 变 true"
    },
    {
      left: "if 语句",
      right: "条件判断语句：条件为 true 执行代码块，为 false 跳过"
    },
    {
      left: "if-else 语句",
      right: "二选一分支语句：条件为 true 走 if 分支，为 false 走 else 分支"
    },
    {
      left: "分支语句",
      right: "提供两条（或多条）不同的执行路径，根据条件选择其中一条"
    },
    {
      left: "== 比较运算符",
      right: "判断两个值是否相等，结果为 boolean 类型"
    },
    {
      left: "int / int",
      right: "整数除法，结果仍为整数，小数部分直接截断"
    },
    {
      left: "int / double",
      right: "混合除法，int 自动转为 double，结果保留小数"
    },
    {
      left: "代码规范",
      right: "System（S大写）、main（全小写）、println（全小写），严格区分大小写"
    }
  ],
  flow: [
    "程序从上到下执行，遇到 if 关键字。",
    "计算 if 后面括号中的条件表达式，得到 true 或 false。",
    "如果结果是 true → 进入 if 后面的花括号 { }，执行 if 分支中的所有代码。",
    "if 分支执行完毕后 → 跳过 else 分支，直接执行 if-else 结构后面的代码。",
    "如果结果是 false → 跳过 if 分支，进入 else 后面的花括号 { }，执行 else 分支中的所有代码。",
    "else 分支执行完毕后 → 继续执行 if-else 结构后面的代码。",
    "无论如何，if 和 else 两个分支只有一个会被执行，然后程序继续向下运行。"
  ],
  exercises: [
    {
      question: "写出以下每个表达式的结果类型和值。\n\n(1) 8 / 5\n(2) 8.0 / 5\n(3) 8 % 5\n(4) 'C' + 1\n(5) (double)(8 / 5)",
      answer: "(1) 类型 int，值 1（8/5=1，余数 3 被舍弃）\n(2) 类型 double，值 1.6（8.0/5=1.6）\n(3) 类型 int，值 3（8÷5 商 1 余 3）\n(4) 类型 int，值 68（'C'的 ASCII 码是 67，+1=68 = 'D'的 ASCII 码）\n(5) 类型 double，值 1.0（先算 8/5=1（int），再强转为 double 得 1.0）\n\n解题思路：\n每个表达式先看操作数类型，确定结果类型，再计算值。特别注意：(double)(8/5) 是先做整数除法得到 1，再转成 1.0——不是 1.6！"
    },
    {
      question: "写一个程序，判断一个年份是否为闰年。闰年规则：能被 4 整除但不能被 100 整除，或者能被 400 整除。",
      answer: "public class LeapYear {\n    public static void main(String[] args) {\n        int year = 2024;\n        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {\n            System.out.println(year + \" 是闰年\");\n        } else {\n            System.out.println(year + \" 不是闰年\");\n        }\n    }\n}\n\n解题思路：\n用 % 判断整除（余数为 0 即可整除），用 && 表示\"并且\"，用 || 表示\"或者\"。"
    },
    {
      question: "写一个程序，输入一个整数，判断它是正数、负数还是零。",
      answer: "public class NumberCheck {\n    public static void main(String[] args) {\n        int num = -5;   // 可以改成任何值测试\n\n        if (num > 0) {\n            System.out.println(num + \" 是正数\");\n        } else if (num < 0) {\n            System.out.println(num + \" 是负数\");\n        } else {\n            System.out.println(num + \" 是零\");\n        }\n    }\n}\n\n解题思路：\n三种互斥的情况，用 if-else if-else 结构最合适。"
    },
    {
      question: "找出以下代码中的 4 处错误。\n\npublic class test {\n    public static void main(string[] args) {\n        int x = 10;\n        if (x > 5);\n            system.out.println(\"大于5\");\n        else (x <= 5)\n            System.Out.println(\"小于等于5\");\n    }\n}",
      answer: "错误1：类名 test → Test（首字母大写）\n错误2：string[] args → String[] args（S 大写）\n错误3：if (x > 5); → 去掉分号（空语句陷阱）\n错误4：system.out.println → System.out.println（S 大写）\n错误5：else (x <= 5) → 直接写 else { }（else 后面不能跟条件）\n错误6：System.Out.println → System.out.println（out 全小写）\n\n修正后代码：\npublic class Test {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"大于5\");\n        else\n            System.out.println(\"小于等于5\");\n    }\n}"
    },
    {
      question: "写一个程序，判断一个三角形的三个边长 a、b、c 能否构成三角形（任意两边之和大于第三边）。如果能，再判断是等边、等腰还是普通三角形。",
      answer: "public class Triangle {\n    public static void main(String[] args) {\n        int a = 5, b = 5, c = 5;\n\n        if (a + b > c && a + c > b && b + c > a) {\n            System.out.print(\"能构成三角形：\");\n            if (a == b && b == c) {\n                System.out.println(\"等边三角形\");\n            } else if (a == b || b == c || a == c) {\n                System.out.println(\"等腰三角形\");\n            } else {\n                System.out.println(\"普通三角形\");\n            }\n        } else {\n            System.out.println(\"不能构成三角形\");\n        }\n    }\n}\n\n解题思路：\n先判断能否构成三角形（三边关系），能构成后再继续判断类型。注意嵌套 if 的写法——里层 if 写在外层 if 的花括号里面。"
    }
  ],
  conclusion: [
    "本节课的核心是掌握\"运算精度规则\"和\"if 分支语句\"两个部分——前者决定了混合运算的结果类型，后者让程序能根据条件做出不同反应。",
    "学习流程控制时要特别注意：if 括号里必须是 boolean 类型、== 是比较而 = 是赋值、if 后面不要多写分号。这几个看似简单的细节是初学者出错最多的地方。",
    "通过本节课，应该能够正确使用 if-else 处理二选一的判断场景，并理解不同精度类型在混合运算中的自动提升行为。",
    "if-else 是后续学习循环（for、while）和多路分支（switch）的基础。只有掌握了 if-else，后续的复合控制结构才能顺利理解。",
    "课后建议多练习：(1) 用 if-else 写几个判断程序（奇偶数、正负数、闰年）；(2) 验证运算精度规则——故意写几个混合类型的表达式并输出结果；(3) 用 if-else 做一个简单的\"根据分数输出等级\"的程序；(4) 预习实验课的 5 个题目（水仙花数、最大公约数等）。"
  ]
}