{
  id: "java-intro-course-overview",
  title: "Java 编程课程介绍与基础入门",
  chapter: "Java 基础",
  date: "2025-08-25",
  tags: [
    "Java概述",
    "开发环境",
    "项目创建",
    "类与对象",
    "main方法",
    "输出语句",
    "修饰符",
    "语法公式"
  ],
  summary: [
    "本节课首先介绍了 Java 课程的整体安排、学习要求（记笔记、带教材、实验报告格式等）。",
    "课堂中重点说明了 Java 开发环境的启动方式（通过批处理文件，无需手动配置环境变量）和项目创建流程。",
    "老师通过\"水壶是公有的，水杯是私有的\"等生活类比，帮助理解 public、private、protected、default 四种访问修饰符。",
    "本节课还强调了 main 方法的固定写法（public static void main(String[] args)），要求每个同学必须背下来。",
    "最后通过 Hello World 程序讲解 Java 程序的基本结构：类、main 方法、输出语句，以及创建对象的基本语法公式 `类名 对象名 = new 类名()`。"
  ],
  keyPoints: [
    {
      title: "Java 语言的特点与地位",
      content: "概念：Java 是一门面向对象的编程语言，广泛应用于企业级应用、Android 开发、大数据处理等领域。它有三个最核心的特点：简单方便（相比 C++ 更易上手）、跨平台（编写一次，到处运行）、面向对象（以类和对象为基本单位）。\n\n作用：Java 是编程语言中\"基础中的基础\"。学好 Java 之后，无论是后续学习 Spark（大数据框架）、Scala（Spark 的基础语言），还是理解其他面向对象语言，都会事半功倍。在当前的就业市场上，Java 开发岗位仍占很大比例。\n\n课堂理解：老师强调 Java 的地位时说：\"开发企业应用 APP 的\"主要就是 Java。Java 的跨平台性意味着\"开发出来的一个 APP，在什么地方都可以使用\"。老师还将 Java 和 C++ 做了对比：C++ 更偏向游戏开发，难度更大；Java 相对简单，适合企业应用开发。",
      javaCompare: ""
    },
    {
      title: "创建 Java 项目与类",
      content: "概念：在 IDE（集成开发环境）中创建一个 Java SE 项目，并在项目的 SRC 文件夹下创建 Java 类。Java 中所有的代码都必须写在类（class）里面。\n\n作用：这是学习 Java 第一个要掌握的实操技能。如果不学会创建项目和类，就无法编写和运行任何 Java 代码。\n\n基本写法：项目创建流程：\n\n1. 打开 IDE → 点击 Create a Java Project\n2. 输入项目名称（不要有空格，可以用下划线代替）\n3. 运行环境选 Java SE 版本（课堂使用 JDK 11）\n4. 出现 \"module information\" 对话框时 → 点击 \"Don't Create\"\n5. 项目创建完成\n\n类创建流程：\n\n1. 在 SRC 文件夹上右键 → New → Class\n2. 输入类名（如 Hello、Student）\n3. 勾选 \"public static void main(String[] args)\" 可自动生成 main 方法\n4. 点击完成\n\n课堂理解：老师特别强调了几个关键点：\n- 项目名不能有空格，因为空格是\"可识别字符\"（分隔符），可以用下划线代替。\n- SRC 文件夹是\"资源文件夹\"（Source Folder），所有 Java 源代码都放在这里。\n- Java 中\"所有的内容都是以类为单位的\"，类是 Java 程序的最小组织单位。\n- 老师将类比喻为人的定义：\"一个人有 name、age、hair color 等属性，可以学习、唱歌、吃饭、跳舞等行为。这些属性加上行为就构成了一个 class。\"",
      javaCompare: ""
    },
    {
      title: "四种访问修饰符",
      content: "概念：Java 中，类、方法、变量前面都可以加访问修饰符来控制谁能访问它们。共有四种：public（公有）、private（私有）、protected（受保护）、default（默认，不写任何修饰符）。\n\n作用：访问修饰符是面向对象编程中\"封装\"的基础。控制访问权限可以保护数据安全，让代码更规范。\n\n基本写法：public class MyClass { }        // 公有类\nprivate int age;                 // 私有变量\nprotected void method() { }     // 受保护方法\nint count;                      // 默认（不写修饰符）\n\n课堂理解：老师用了非常生动的生活类比来解释：\n\n- public（公有）：就像寝室里的水壶或拖把，\"每一个人都可以使用的\"，谁都能用。\n- private（私有）：就像每个人的水杯，\"只有你个人可以使用的东西\"。\n- protected（受保护）：就像兄弟姐妹之间的财产，\"具有血缘关系的兄弟、姐妹共同使用的东西\"。你兄弟拿了你的钱不算偷，但室友拿就不行。\n- default（默认）：与 protected 类似但有区别（后期深入讲解），目前理解成\"什么都不写\"即可。\n\n老师的核心总结：\"编程是需要来源于实际的，解决生活问题\"。",
      javaCompare: ""
    },
    {
      title: "main 方法（主函数）",
      content: "概念：main 方法是 Java 程序的入口。当运行一个 Java 程序时，JVM（Java 虚拟机）会首先找到 main 方法，然后从它的第一行开始执行。\n\n作用：没有 main 方法，Java 程序就无法启动运行。它是每个 Java 可执行程序必不可少的组成部分，必须牢牢记住。\n\n基本写法：public static void main(String[] args) {\n    // 在这里写要执行的代码\n}\n\nmain 方法的组成部分：\n\n| 部分 | 内容 | 含义 |\n|------|------|------|\n| 修饰符 | public | 公有，JVM 必须能访问到 |\n| 静态 | static | 静态方法，无需创建对象就能调用 |\n| 返回值 | void | 没有返回值（返回空） |\n| 方法名 | main | 固定名称，JVM 只认这个名字 |\n| 参数列表 | String[] args | 接收命令行参数，args 是 arguments 的缩写 |\n\n课堂理解：老师将 main 方法比喻为一扇门：\"你必须走这个门里面，它才能去做。我们有众多的 method，main 是入口——运行起来后，一定先找到 main 方法，然后才能去跑。\"\n\n老师还特别强调：\"这一行是需要大家默写下来的，一个字母都不能错。入口是写死的，就像公式一样。不管哪个 class，无论在什么地方，public static void main(String[] args) 是一定要有的。\"",
      javaCompare: ""
    },
    {
      title: "System.out.println 输出语句",
      content: "概念：`System.out.println()` 是 Java 中最常用的输出语句，作用是在控制台打印指定的内容，并在末尾自动换行。\n\n作用：输出语句是程序和用户交互的最基本方式。在学习阶段，几乎所有代码的运行结果都通过它来查看。也是调试程序的重要手段。\n\n基本写法：System.out.println(要输出的内容);\nSystem.out.print(要输出的内容);   // 不换行版本\n\n语法结构拆解：\n\n| 部分 | 说明 |\n|------|------|\n| System | 系统类，首字母 S 必须大写 |\n| out | System 类中的一个输出流对象 |\n| println | 方法名，print line 的缩写，\"输出并换行\" |\n| () 中的内容 | 要输出的参数 |\n\n课堂理解：老师特别强调了 `System` 中 S 必须大写：\"第一个字母首字母大写，后面是小写的。system 的 S 是大写。你们在写的时候，一定要写大写，不要写小写。有很多同学就写错了。\"\n\n对于 println 这个名字，老师拆解为：print（打印）+ ln（line，换行）。ln 代表 line，意思是输出完这一行后自动回车换行。",
      javaCompare: ""
    },
    {
      title: "类与对象的基本概念",
      content: "概念：Java 是一门面向对象的语言。类（class） 是一个模板/图纸，描述某一类事物的共同特征。对象（object） 是根据类这个模板\"造\"出来的具体实例。\n\n作用：Java 的一切代码都写在类里面，一切数据都是对象。不理解类和对象，就无法理解 Java 的核心思想。\n\n基本写法：// 定义类的语法\npublic class 类名 {\n    // 属性（变量）：描述这个类\"有什么\"\n    // 方法（函数）：描述这个类\"能做什么\"\n}\n\n// 创建对象的语法\n类名 对象名 = new 类名();\n\n课堂理解：老师用\"人\"来比喻：\n- 类：就像\"人\"的定义。所有人都有头发、眼睛、鼻子、嘴这些属性，也都会说话、走路、吃饭这些行为（方法）。类就是描述\"人应该有什么和能做什么\"的模板。\n- 对象：具体到某一个真实的人（比如你、我、他），就是根据这个模板\"构造\"出来的对象。\n\n老师进一步解释了语法公式 `Student stu = new Student();`：\n- `Student` 是类名（类型）——就像 int 是整形的类型名\n- `stu` 是对象名——是你给这个对象起的名字（变量名）\n- `new` 是声明/创建的关键字——向内存申请空间来存放这个对象\n- `Student()` 是构造方法——负责初始化这个对象，决定对象\"带着什么东西来\"",
      javaCompare: ""
    },
    {
      title: "注释（单行注释和多行注释）",
      content: "概念：注释是写在代码中对程序员可见、但不会被 JVM 执行的说明文字。Java 有两种注释：单行注释（`//`）和多行注释（`/* */`）。\n\n作用：注释帮助自己和他人读懂代码。在团队协作中，清晰的注释是代码规范的重要组成部分。老师特别强调：\"你写的东西跟别人不一样，别人看不懂你的，说明有问题。\"\n\n基本写法：// 这是单行注释，从 // 到本行结束都是注释\n\n/*\n   这是多行注释\n   可以跨越多行\n   适合写较长的说明\n*/\n\n课堂理解：老师简明扼要地指出：\"双斜线就是单行的，斜线星号就是多行的，大家了解一下就可以了。\"\n\n虽然没有展开讲，但老师从头到尾都在强调代码可读性的重要性——注释是实现可读性的关键工具之一。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "第一个 Java 程序——Hello World",
      code: `public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      explanation: "1. public class Hello —— 定义了一个公有的类，类名叫 Hello。文件名必须是 Hello.java。\n2. public static void main(String[] args) —— Java 程序的入口方法，固定写法，必须牢牢记住。\n3. System.out.println(\"Hello, World!\"); —— 向控制台输出一行文字，括号里的内容就是要输出的内容。\n\n初学者提示：\n- Hello 类的文件名必须是 Hello.java，类名和文件名必须完全一致（包括大小写）。\n- System 的 S 必须大写，println 全部用小写。\n- 每一句 Java 代码以分号 ; 结尾。"
    },
    {
      title: "创建并使用一个简单的类",
      code: `// 定义一个学生类
public class Student {
    String name;
    int age;

    public void introduce() {
        System.out.println("我叫" + name + "，今年" + age + "岁。");
    }
}

// 主程序
public class Main {
    public static void main(String[] args) {
        // 根据 Student 模板创建一个具体的对象
        Student stu = new Student();

        // 给对象的属性赋值
        stu.name = "小明";
        stu.age = 20;

        // 调用对象的方法
        stu.introduce();
    }
}`,
      explanation: "1. class Student 定义了一个学生模板——每个学生都有 name（姓名）和 age（年龄）。\n2. introduce() 是一个方法，负责自我介绍。\n3. Student stu = new Student(); 中 new 是关键，意思是向内存申请空间来存放这个学生对象。\n4. stu.name = \"小明\" 给这个学生的姓名赋值为 \"小明\"。\n5. stu.introduce() 调用了自我介绍的方法。\n6. 字符串用 + 号可以连接：\"我叫\" + name + \"，今年\" + age + \"岁。\" 拼接成一句话。\n\n初学者提示：\n- new Student() 后面的括号 () 千万不要忘记。\n- 点号 . 表示\"的\"——stu.name 即\"stu 的 name\"。\n- 字符串拼接用 + 号。"
    },
    {
      title: "使用不同访问修饰符",
      code: `public class Person {
    public String name;    // 公有的，外部可以直接访问
    private int age;       // 私有的，外部不能直接访问

    // 通过 public 方法访问 private 属性
    public void setAge(int a) {
        age = a;
    }

    public int getAge() {
        return age;
    }

    public void show() {
        System.out.println("姓名：" + name + "，年龄：" + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        p.name = "小红";         // ✅ public 属性可以直接赋值
        // p.age = 18;           // ❌ private 属性不能直接访问
        p.setAge(18);            // ✅ 通过 public 方法间接设置年龄

        p.show();                // 输出：姓名：小红，年龄：18
    }
}`,
      explanation: "1. name 是 public 的，所以可以在 main 方法中直接 p.name = \"小红\" 赋值。\n2. age 是 private 的，如果直接写 p.age = 18 会报错。\n3. 为了访问 private 的 age，提供了 public 的 setAge() 和 getAge() 方法——这是 Java 中标准的封装做法。\n4. p.show() 可以正常访问 age，因为 show() 是 Person 类自己的方法。\n\n初学者提示：\n- 刚开始学的时候，所有属性可以先写成 public，让代码跑通再说。\n- 封装（把属性设为 private + 提供 public 方法）是后面会深入讲的内容，现在先了解概念即可。"
    }
  ],
  quiz: [
    {
      question: "以下哪一个是 Java 中正确的 main 方法写法？",
      options: [
        "public void main(String[] args) { }",
        "public static void main(String[] args) { }",
        "public static void Main(String[] args) { }",
        "public static void main(string args) { }"
      ],
      answer: "public static void main(String[] args) { }",
      explanation: "A 缺少了 static，JVM 无法直接调用。\nC 中 Main 首字母大写，Java 严格区分大小写，main 必须小写。\nD 中 String 首字母没有大写，且参数类型应该是 String[] 而不是 string。"
    },
    {
      question: "以下输出语句中，写法正确的是？",
      options: [
        "system.out.println(\"Hello\");",
        "System.out.Print(\"Hello\");",
        "System.out.println(\"Hello\");",
        "system.Out.println(\"Hello\");"
      ],
      answer: "System.out.println(\"Hello\");",
      explanation: "A 中 System 的 S 没有大写；B 中 Print 的 P 没有小写（应该是 print 或 println）；D 中 Out 的 O 大写错误。"
    },
    {
      question: "关于类（class）和对象（object），以下说法正确的是？",
      options: [
        "类和对象是同一个概念",
        "类是模板，对象是根据模板创建的具体实例",
        "对象是模板，类是根据模板创建的具体实例",
        "类可以没有对象，对象也可以没有类"
      ],
      answer: "类是模板，对象是根据模板创建的具体实例",
      explanation: "类是抽象的模板/图纸，对象是具体的实例。比如\"学生\"是一个类，\"张三\"是一个对象。必须通过类来创建对象（new）。"
    },
    {
      question: "创建 Java 项目时，项目名称的命名规范是什么？",
      options: [
        "可以有空格",
        "不能有空格，可以用下划线代替",
        "必须包含中文",
        "必须以数字开头"
      ],
      answer: "不能有空格，可以用下划线代替",
      explanation: "项目名中间不能有空格（空格会被当作分隔符），可以用下划线 _ 来间隔单词，或者使用驼峰命名法（如 HelloWorld）。"
    },
    {
      question: "以下关于 private 修饰符的描述，正确的是？",
      options: [
        "被 private 修饰的内容，任何地方都可以访问",
        "被 private 修饰的内容，只有本类内部可以访问",
        "被 private 修饰的内容，子类可以访问",
        "Java 中没有 private 修饰符"
      ],
      answer: "被 private 修饰的内容，只有本类内部可以访问",
      explanation: "private 是\"私有的\"，只有本类内部的方法才能访问。外部类（包括子类）不能直接访问 private 成员。"
    },
    {
      question: "以下创建对象的代码，哪一个是正确的？",
      options: [
        "Student stu = Student();",
        "Student stu = new Student();",
        "new Student stu = Student();",
        "Student stu = new Student;"
      ],
      answer: "Student stu = new Student();",
      explanation: "正确的语法是：类名 对象名 = new 类名();  其中 new 关键字和后面的括号 () 都不可缺少。"
    },
    {
      question: "main 方法中的参数 String[] args 的作用是什么？",
      options: [
        "没有实际作用，只是语法要求",
        "用来接收命令行参数",
        "用来定义输出的内容",
        "用来设置程序的运行环境"
      ],
      answer: "用来接收命令行参数",
      explanation: "String[] args（arguments 的缩写）用于接收运行程序时在命令行中传入的参数。虽然课堂上没深入讲，但这个参数是有实际用途的。初期记住它是固定写法即可。"
    }
  ],
  dragMatch: [
    {
      left: "Java",
      right: "面向对象的编程语言，应用广泛的企业级开发语言"
    },
    {
      left: "class",
      right: "类，Java 程序的基本单位，所有代码都写在类里面"
    },
    {
      left: "public",
      right: "公有的，表示所有人都可以访问"
    },
    {
      left: "private",
      right: "私有的，表示只有本类内部可以访问"
    },
    {
      left: "main 方法",
      right: "Java 程序的入口方法，程序从这里开始执行"
    },
    {
      left: "System.out.println",
      right: "向控制台输出一行内容并自动换行"
    },
    {
      left: "String[] args",
      right: "main 方法的参数，用于接收命令行参数"
    },
    {
      left: "new",
      right: "关键字，用来创建对象并分配内存空间"
    },
    {
      left: "SRC",
      right: "资源文件夹，存放 Java 源代码"
    },
    {
      left: "void",
      right: "表示方法没有返回值"
    }
  ],
  flow: [
    "在 IDE 中创建 Java 项目（选择 Java SE，项目名不含空格）。",
    "在 SRC 文件夹下创建一个 Java 类（类名和文件名保持一致）。",
    "在类中编写 main 方法（public static void main(String[] args)），这是程序的入口。",
    "在 main 方法的方法体 { } 中编写要执行的代码。",
    "点击运行按钮（或右键 Run As → Java Application）。",
    "JVM 找到 main 方法，从第一行代码开始逐行执行。",
    "如果代码中有 System.out.println 语句，就在控制台输出对应的内容。",
    "程序执行完毕后自动结束。"
  ],
  exercises: [
    {
      question: "编写一个 Java 程序，在控制台输出你的名字和年龄。",
      answer: "考查知识点：\n类定义、main 方法、输出语句\n\n参考答案：\n\npublic class MyInfo {\n    public static void main(String[] args) {\n        System.out.println(\"姓名：张三\");\n        System.out.println(\"年龄：20\");\n    }\n}\n\n解题思路：\n1. 定义一个类，类名自定（如 MyInfo），文件名要和类名一致。\n2. 在类中写 main 方法（固定格式）。\n3. 使用 System.out.println 输出两行信息。"
    },
    {
      question: "找出以下代码中的 3 处错误。\n\npublic class test {\n    public static void main(String[] args) {\n        system.out.println(\"Hello\")\n    }\n}",
      answer: "考查知识点：\n类名规范、System 大小写、分号\n\n参考答案：\n错误1：文件名应该是 test.java（如果类名是 test），但建议类名首字母大写为 Test。\n错误2：system 应该是 System（S 必须大写）。\n错误3：println(\"Hello\") 后面缺少分号 ;。\n\n解题思路：\n- Java 严格区分大小写，System 的 S 必须大写。\n- 每条语句以分号结尾。\n- 类名建议首字母大写（虽然小写也能运行，但不规范）。"
    },
    {
      question: "创建一个名为 Dog 的类，包含一个叫 name 的属性（public）和一个叫 bark 的方法（输出 \"汪汪\"）。然后在 main 方法中创建一个 Dog 对象并调用 bark 方法。",
      answer: "考查知识点：\n类定义、属性、方法、创建对象、方法调用\n\n参考答案：\n\npublic class Dog {\n    public String name;\n\n    public void bark() {\n        System.out.println(name + \"说：汪汪！\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog myDog = new Dog();   // 创建 Dog 对象\n        myDog.name = \"旺财\";      // 给属性赋值\n        myDog.bark();             // 调用方法\n    }\n}\n\n解题思路：\n1. 先定义 Dog 类，包含属性和方法。\n2. 在 Main 类的 main 方法中用 new 创建 Dog 对象。\n3. 通过 对象名.属性名 给 name 赋值。\n4. 通过 对象名.方法名() 调用 bark 方法。"
    },
    {
      question: "编写程序，分别使用 println 和 print 输出内容，观察它们的区别。",
      answer: "考查知识点：\nprintln 和 print 的区别\n\n参考答案：\n\npublic class PrintTest {\n    public static void main(String[] args) {\n        System.out.print(\"第一句，\");\n        System.out.print(\"不换行。\");\n        System.out.println(\"第二句，会换行。\");\n        System.out.println(\"第三句，也会换行。\");\n    }\n}\n\n运行结果：\n第一句，不换行。第二句，会换行。\n第三句，也会换行。\n\n解题思路：\nprint 输出后光标还在同一行，下一次输出会紧接着当前位置继续。\nprintln 输出后会自动换行，下一次输出从下一行开始。"
    },
    {
      question: "请将以下信息用自己的话整理成笔记：Java 程序的基本结构包含哪些组成部分？",
      answer: "考查知识点：\n对 Java 程序整体结构的理解\n\n参考答案：\nJava 程序的基本结构包括：\n1. 项目（Project）—— 一个项目可以包含多个类。\n2. 包/文件夹（SRC）—— 存放源代码的地方。\n3. 类（class）—— Java 程序的基本单位，所有代码必须写在类里面。使用 public class 类名 { } 定义。\n4. main 方法 —— 程序的入口，固定格式：public static void main(String[] args) { }。\n5. 语句 —— main 方法中的每一行执行代码，以分号结尾。\n6. 注释 —— 用 // 或 /* */ 写的说明文字，不会被执行。\n\n解题思路：\n用自己的话总结课堂内容，这样更容易理解和记忆。这也是老师倡导的学习方法。"
    }
  ],
  conclusion: [
    "本节课的核心是认识 Java 以及理解 Java 程序的最基本结构——类、main 方法和输出语句。这是后续所有 Java 学习的基础。",
    "学习 Java 时要特别注意大小写（System 不是 system，main 不是 Main）和分号结尾，这两个是初学者最容易出错的地方。",
    "通过本节课，应该能够独立创建 Java 项目、编写一个简单的 Hello World 程序，并理解 public class、main 方法和 System.out.println 的作用。",
    "类与对象的概念会在后续课程中反复出现和深入讲解。本节课只是初步了解，后面会详细学习属性、方法、构造方法、继承等面向对象的核心内容。",
    "课后建议多练习两个基本功：一是盲敲键盘（目标每分钟 100 个字母以上），二是把 main 方法和 System.out.println 反复默写，形成肌肉记忆。这些基本功是后续编程学习的保障。"
  ]
}
