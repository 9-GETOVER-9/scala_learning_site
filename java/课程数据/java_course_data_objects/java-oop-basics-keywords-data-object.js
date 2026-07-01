{
  id: "java-oop-basics-keywords",
  title: "Java 编程基础及面向对象入门",
  chapter: "Java 面向对象基础",
  date: "2025-08-25",
  tags: [
    "面向对象",
    "类与对象",
    "构造方法",
    "继承",
    "关键字",
    "标识符",
    "布尔类型",
    "学习方法"
  ],
  summary: [
    "本节课首先深入讲解了 new 关键字和构造方法的作用——构造方法决定了对象\"带着什么东西来到这个世界\"。",
    "课堂中重点说明了类（class）的组成：属性（描述\"有什么\"）和方法（描述\"能做什么\"），以及对象如何调用它们。",
    "老师通过\"父亲和儿子\"的生动类比，帮助理解继承关系——子类不需要重复定义父类已有的属性和方法。",
    "本节课还讲解了标识符的定义规则（由字母、下划线、美元符号、数字组成，首字符不能是数字）和关键字的概念（不能用作标识符）。",
    "最后讲解了布尔（boolean）类型，它只有 true 和 false 两个值，并复习了 System.out.println 的运行方式和常见数据类型。"
  ],
  keyPoints: [
    {
      title: "new 关键字与构造方法",
      content: "概念：当我们想创建一个对象时，使用 `new 类名()` 的语法。其中 `new` 是 Java 的关键字，负责向内存申请空间来存放这个对象。`类名()` 叫做构造方法，负责初始化这个对象，决定这个对象被创建时\"带着什么东西\"。\n\n作用：不写 `new`，对象就不会被创建（没有分配内存）。不理解构造方法，就无法理解对象的初始化过程。这是面向对象编程最基本、最重要的语法。\n\n基本写法：类名 对象名 = new 类名();        // 无参构造\n类名 对象名 = new 类名(参数);    // 带参构造\n\n课堂理解：老师用了非常生动的\"出生\"比喻来解释构造方法：\n- new：就像\"我要声明一个 student 对象，你得给我分配一个空间\"。\n- 构造方法：就像人出生前的\"孕育过程\"。\"你来到这个世界之前要孕育，那孕育的东西就称之为构造方法。构造一个 template（模板），那么这个 template 就称之为一个 object（对象）。\"\n\n老师还打了个比方：所有人都有头发、一对眼睛、一个鼻子、一张嘴——这些\"每个人生来都带着的东西\"就是构造方法中定义的。反过来，如果是后天获得的（比如学会了编程），那就不属于构造方法的内容。",
      javaCompare: ""
    },
    {
      title: "类的组成——属性与方法",
      content: "概念：一个类（class）由两部分组成：属性（也叫成员变量/字段，描述这个类\"有什么\"）和方法（也叫函数，描述这个类\"能做什么\"）。对象可以调用类中定义的属性和方法。\n\n作用：理解类的组成是面向对象编程的基础。以后写的每一个 Java 类，本质上都是在定义属性和方法。分清楚\"是什么\"（属性）和\"做什么\"（方法），是设计好类的关键。\n\n基本写法：public class 类名 {\n    // 属性：描述特征\n    数据类型 属性名;\n\n    // 方法：描述行为\n    public 返回值类型 方法名(参数) {\n        // 方法体\n    }\n}\n\n课堂理解：老师用\"班长和同学\"的场景来解释：\n- 班长进教室后可以点名、下达任务、传递信息、接收反馈——这些能力就是班长这个类中定义的方法。\n- 其他普通同学做不到这些事，因为他们所属的类不同——\"普通学生有普通学生的类，班干部有班干部的类\"。\n- 类的属性和方法是提前定义好的——\"在定义这个类的时候，就将这些方法放到了框架里边\"。\n\n老师还总结了面向对象的核心思维方式：对象能做什么事，取决于它所属的类中定义了哪些方法。",
      javaCompare: ""
    },
    {
      title: "继承——面向对象的三大特征之一",
      content: "概念：继承是面向对象编程的核心机制之一。一个类（子类）可以通过继承获得另一个类（父类）的属性和方法，而不需要重复定义。使用 `extends` 关键字实现继承。\n\n作用：继承的最核心价值是避免重复（reusable）。如果多个类有共同的属性和方法，可以把这些共同的部分提取到父类中，子类直接继承使用即可。这不仅减少了代码量，也让代码结构更清晰、更易维护。\n\n基本写法：// 父类（基类）\npublic class 父类名 {\n    // 公共的属性和方法\n}\n\n// 子类（派生类）继承父类\npublic class 子类名 extends 父类名 {\n    // 子类独有的属性和方法\n}\n\n课堂理解：老师用\"父亲和儿子\"的家庭关系来类比继承，这是本节课最精彩的比喻：\n\n- 父类（Student）：就像所有学生的共同特征——有鼻子、有眼睛、有 name、有 age、有 grade 等属性，以及 speak（说话）、walk（走路）、run（跑步）、eat（吃饭）等方法。\n- 子类（普通学生 / 学生会成员）：这两个都是学生，但又有各自的特殊性。\"他们不用再自己创造鼻子、眼睛、说话、行走、跑步、吃饭这些东西了，可以伸手向父亲去拿。这称之为继承过来。\"\n\n老师还解释了为什么要用继承——\"为了避免重复。不同的人要遵循同一个规则去做这个事情\"。在团队开发中，继承确保了代码的一致性和可维护性。\n\n老师特别提到：继承也是 Java 的\"三大特征\"之一（另外两个是封装和多态，后续课程会讲）。",
      javaCompare: ""
    },
    {
      title: "标识符（Identifier）",
      content: "概念：标识符就是我们在 Java 中自己定义的各种\"名字\"——包括类名、变量名、方法名、类型名、数组名、文件名等。凡是你可以自己起名字的东西，都叫标识符。\n\n简单记：标识符就是一个名称。\n\n作用：命名是编程中最频繁的操作之一。不了解标识符的规则，就会写出不合法的名字导致编译错误。而且，规范的命名是代码可读性的基础。\n\n基本写法：标识符的命名规则（需要记住）：\n\n1. 可以由字母、下划线 _ 、美元符号 $、数字 组成（四大类）。\n2. 第一个字符不能是数字。\n3. 长度没有限制。\n4. 不能是关键字（如 int、class、public 等）。\n5. 区分大小写（Name 和 name 是两个不同的标识符）。\n\n课堂理解：老师通过具体的例子让学生判断：\n- `int 1a;` → ❌ 第一个字符是数字，不可以。\n- `int a1;` → ✅ 第一个是字母，后面是数字，可以。\n- `int _name;` → ✅ 下划线开头可以。\n- `int $price;` → ✅ 美元符号开头可以。\n\n老师还特别强调，\"类名、变量名、方法名、类型名、数组名、文件名——这些都是你自己可以自定义的，都用标识符来框起来\"。标识符和关键字的关系是：关键字不能用做标识符。",
      javaCompare: ""
    },
    {
      title: "关键字（Keyword）",
      content: "概念：关键字是 Java 语言中预先定义好的、具有特定含义和用途的单词。这些单词已经被 Java \"征用\"了，程序员不能再把它们当作变量名、方法名、类名等标识符来使用。\n\n作用：知道哪些是关键字，才不会把它们误用为标识符。同时，认识关键字也是阅读和理解 Java 代码的基础——看到 `class` 就知道在定义类，看到 `int` 就知道在声明整数。\n\n课堂理解：老师在课堂上逐个提问学生\"你知道哪些关键字？\"，学生的回答包括：`for`、`while`、`if`、`int`、`else`、`do`、`break`、`continue`、`try`、`long` 等等。\n\n老师特别强调了关键字的本质特征——\"它们不能做什么？不能作为变量名和函数名（标识符）\"。换句话说，关键字有特定的用途和范围（range），你不能\"抢来\"自己用。\n\n老师还指出，关键字通常是\"成对出现的\"——比如 `if` 对应 `else`，`break` 对应 `continue`，`while` 对应 `do while`。把这些成对的关键字放在一起记忆会更高效。",
      javaCompare: ""
    },
    {
      title: "布尔类型（boolean）",
      content: "概念：boolean 是 Java 中的逻辑类型。它只有两个可能的取值：true（真）和 false（假）。布尔类型通常用于条件判断中。\n\n作用：程序中大量需要\"是/否\"\"对/错\"\"真/假\"的判断——比如\"分数是否及格\"\"用户是否登录\"\"数据是否为空\"。boolean 类型就是用来处理这些二元判断的基础工具。\n\n基本写法：boolean 变量名 = true;   // 或者 false\n\n// 典型用法：条件判断\nif (布尔表达式) {\n    // 条件为 true 时执行\n}\n\n课堂理解：老师指出 boolean 类型有两个确定的值且只有两个：\"要不就真，要不就假\"。同时还提到 true 和 false 本身也是 Java 的关键字，不能用作标识符。\n\n老师回顾了 Python 中的类似概念——在 Python 中 condition（条件）为 True 就执行 statement，为 False 就不执行。Java 中的道理完全一样，只是写法是全小写的 true 和 false（Python 中是首字母大写的 True 和 False）。",
      javaCompare: ""
    },
    {
      title: "常见数据类型概览",
      content: "概念：Java 中的数据类型分为两大类：基本数据类型（8 种）和引用数据类型（如类、数组、String 等）。本节课中通过师生问答的方式，复习了 int、float、double、char、boolean、String 等常见类型。\n\n作用：数据类型是 Java 语法的基础。声明变量时必须指定类型，赋值时必须类型匹配。不理解数据类型，后面学习变量、运算、方法参数都会遇到困难。\n\n基本写法：// 常见类型变量声明\nint age = 18;               // 整数\ndouble price = 9.99;        // 双精度浮点数（小数）\nfloat weight = 65.5f;       // 单精度浮点数（后面要加 f）\nchar grade = 'A';           // 单个字符（用单引号）\nboolean isPass = true;      // 布尔值\nString name = \"张三\";        // 字符串（用双引号，String 是引用类型）\n\n课堂理解：本节课通过师生互动复习了数据类型。老师问\"有哪些数据类型\"，学生回答包括：int（整形）、float（浮点型）、boolean（布尔型）、String（字符串）、list（列表——但老师纠正说 Java 中叫 List）、tuple（元组——Java 中不常用）、short、long 等。\n\n老师还让一个同学说出 true 和 false 是什么——它们\"不是值吗？\"——其实是 boolean 类型的两个取值。老师特别纠正了\"float 包含单精度和双精度\"这个不严谨的说法：单精度是 float，双精度是 double，它们是两个不同的类型。",
      javaCompare: ""
    }
  ],
  codeExamples: [
    {
      title: "创建对象并使用构造方法初始化",
      code: `public class Car {
    String brand;    // 品牌
    String color;    // 颜色
    int speed;       // 速度

    // 构造方法：创建对象时自动调用，完成初始化
    public Car(String b, String c) {
        brand = b;
        color = c;
        speed = 0;   // 新车速度为 0
    }

    public void drive() {
        speed = 60;
        System.out.println("一辆" + color + "的" + brand + "正在行驶，速度" + speed + "km/h");
    }

    public void stop() {
        speed = 0;
        System.out.println(brand + "已停下");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("宝马", "白色");   // 创建对象，传入品牌和颜色
        myCar.drive();                          // 开车
        myCar.stop();                           // 停车
    }
}`,
      explanation: "1. Car 类有三个属性（brand、color、speed）和两个方法（drive、stop）。\n2. public Car(String b, String c) 是有参构造方法，创建对象时需要传入品牌和颜色。\n3. new Car(\"宝马\", \"白色\") 做了两件事：分配内存 + 调用构造方法把 brand 设为\"宝马\"，color 设为\"白色\"，speed 设为 0。\n4. drive() 方法将 speed 改为 60 并输出行驶信息。\n5. stop() 方法将 speed 改为 0 并输出停车信息。\n\n初学者提示：\n- 构造方法的名字必须和类名完全一致（这里是 Car）。\n- 构造方法没有返回值类型（连 void 都不写）。\n- 如果你不写任何构造方法，Java 会自动提供一个无参构造方法。"
    },
    {
      title: "继承——子类复用父类代码",
      code: `// 父类：手机的基本功能
public class Phone {
    String brand;
    String model;

    public void call(String number) {
        System.out.println("正在拨打 " + number);
    }

    public void sendMessage(String msg) {
        System.out.println("发送消息：" + msg);
    }
}

// 子类：智能手机（继承 Phone，并增加新功能）
public class SmartPhone extends Phone {
    public void takePhoto() {
        System.out.println(brand + model + " 正在拍照");
    }

    public void browseInternet() {
        System.out.println(brand + model + " 正在上网");
    }
}

// 测试
public class Main {
    public static void main(String[] args) {
        SmartPhone sp = new SmartPhone();
        sp.brand = "华为";
        sp.model = "Mate 60";

        sp.call("10086");             // 继承自父类的方法
        sp.sendMessage("你好");        // 继承自父类的方法
        sp.takePhoto();               // 子类自己的方法
        sp.browseInternet();          // 子类自己的方法
    }
}`,
      explanation: "1. Phone 是父类，定义了所有手机都有的基本功能（打电话、发短信）。\n2. SmartPhone 使用 extends Phone 继承父类，自动获得了 brand、model 属性和 call()、sendMessage() 方法。\n3. SmartPhone 还增加了 takePhoto() 和 browseInternet() 这两个父类没有的新方法。\n4. 在 main 中，SmartPhone 的对象既能调用继承来的方法（call、sendMessage），也能调用自己的方法（takePhoto、browseInternet）。\n\n初学者提示：\n- extends 关键字表示继承，写法是\"子类 extends 父类\"。\n- 继承就是\"拿来用\"——父类有的属性和方法，子类可以直接使用，不必重新定义。\n- 这是实现代码复用（reusable）的核心机制。"
    },
    {
      title: "boolean 在条件判断中的使用",
      code: `public class ScoreChecker {
    public static void main(String[] args) {
        int score = 85;

        boolean isPass = score >= 60;   // 判断是否及格，结果是一个 boolean 值
        boolean isExcellent = score >= 90;

        System.out.println("分数：" + score);
        System.out.println("是否及格：" + isPass);
        System.out.println("是否优秀：" + isExcellent);

        // 根据不同条件输出不同信息
        if (isExcellent) {
            System.out.println("成绩优秀！");
        } else if (isPass) {
            System.out.println("成绩及格，继续加油！");
        } else {
            System.out.println("成绩不及格，需要努力！");
        }
    }
}`,
      explanation: "1. score >= 60 这个表达式的结果是 true 或 false，可以直接赋给 boolean 变量 isPass。\n2. score >= 90 结果是 false，所以 isExcellent = false。\n3. if-else if-else 结构根据 boolean 条件依次判断：先看 isExcellent（false），跳过；再看 isPass（true），执行对应语句。\n4. 可以直接输出 boolean 变量的值，控制台会显示 true 或 false。\n\n初学者提示：\n- 关系运算符（>=、<=、==、!=、>、<）的结果都是 boolean 类型。\n- 可以在 if 中直接写 boolean 变量（如 if (isPass)），不需要写成 if (isPass == true)。\n- boolean 只有 true 和 false 两个值，没有第三个可能。"
    }
  ],
  quiz: [
    {
      question: "以下创建对象的代码，正确的是？",
      options: [
        "Student s = Student();",
        "Student s = new Student();",
        "new Student s = Student();",
        "Student s = new Student;"
      ],
      answer: "Student s = new Student();",
      explanation: "创建对象语法为\"类名 对象名 = new 类名();\"。A 缺少 new；C 语法完全错；D 缺少最后的括号 ()。"
    },
    {
      question: "以下哪个标识符是不合法的？",
      options: [
        "myName",
        "_value",
        "2score",
        "$price"
      ],
      answer: "2score",
      explanation: "2score 以数字 2 开头，违反标识符\"首字符不能是数字\"的规则。其他三个都是合法的。"
    },
    {
      question: "关于 boolean 类型，以下说法正确的是？",
      options: [
        "boolean 可以取 true、false 和 null 三个值",
        "boolean 可以赋值为 0 或 1",
        "boolean 只有 true 和 false 两个取值",
        "boolean 的 true 和 false 可以写成大写"
      ],
      answer: "boolean 只有 true 和 false 两个取值",
      explanation: "boolean 只有 true 和 false 两个取值（全小写）。不能赋 null、0、1 等其他值。"
    },
    {
      question: "关于继承，以下说法错误的是？",
      options: [
        "子类可以继承父类的属性和方法",
        "Java 中一个子类可以有多个父类",
        "继承使用 extends 关键字",
        "继承的主要目的是实现代码复用"
      ],
      answer: "Java 中一个子类可以有多个父类",
      explanation: "Java 中只支持单继承——一个子类只能有一个直接父类。A、C、D 都是正确的。"
    },
    {
      question: "关于构造方法，以下说法正确的是？",
      options: [
        "构造方法的返回值类型是 void",
        "构造方法的名字可以与类名不同",
        "构造方法在创建对象时自动调用",
        "一个类只能有一个构造方法"
      ],
      answer: "构造方法在创建对象时自动调用",
      explanation: "构造方法没有返回值类型（连 void 也不写），名字必须与类名完全相同，一个类可以有多个构造方法（重载）。创建对象时（new 类名()），构造方法自动被调用。"
    },
    {
      question: "下面哪个不是 Java 的关键字？",
      options: [
        "int",
        "class",
        "name",
        "public"
      ],
      answer: "name",
      explanation: "name 不是 Java 的关键字，可以作为标识符使用。int、class、public 都是关键字。"
    },
    {
      question: "char 类型和 String 类型在写法上有什么区别？",
      options: [
        "没有区别，可以混用",
        "char 用双引号，String 用单引号",
        "char 用单引号，String 用双引号",
        "Java 中没有 char 类型"
      ],
      answer: "char 用单引号，String 用双引号",
      explanation: "char 表示单个字符，用单引号（如 'A'）；String 表示字符串，用双引号（如 \"Hello\"）。"
    }
  ],
  dragMatch: [
    {
      left: "new",
      right: "关键字，向内存申请空间来创建对象"
    },
    {
      left: "构造方法",
      right: "在创建对象时自动调用，负责初始化对象"
    },
    {
      left: "类（class）",
      right: "Java 程序的基本单位，包含属性和方法"
    },
    {
      left: "对象（object）",
      right: "根据类模板创建出来的具体实例"
    },
    {
      left: "继承（extends）",
      right: "子类获得父类属性和方法的机制，避免重复代码"
    },
    {
      left: "标识符",
      right: "类名、变量名、方法名等自定义名称的总称"
    },
    {
      left: "关键字",
      right: "Java 预定义的具有特殊含义的单词，不能用作标识符"
    },
    {
      left: "boolean",
      right: "逻辑类型，只有 true 和 false 两个值"
    },
    {
      left: "属性",
      right: "描述类\"有什么\"的变量（如 name、age）"
    },
    {
      left: "方法",
      right: "描述类\"能做什么\"的函数（如 speak、walk）"
    }
  ],
  flow: [
    "程序从 main 方法开始执行。",
    "执行到 Student stu = new Student(); 语句。",
    "new 关键字向 JVM 申请内存空间，准备存放 Student 对象。",
    "JVM 调用 Student 类的构造方法 Student()，初始化对象（设置属性的默认值）。",
    "构造方法执行完毕后，返回对象的地址，赋值给变量 stu。",
    "程序继续执行 stu.name = \"张三\"; 通过对象名.属性名的方式给属性赋值。",
    "程序执行 stu.speak(); 通过对象名.方法名() 的方式调用方法。",
    "JVM 根据 stu 找到对应的对象，再找到 Student 类中的 speak 方法并执行。",
    "speak 方法执行完毕后，程序返回 main 方法，继续执行后面的语句。"
  ],
  exercises: [
    {
      question: "定义一个 Person 类，包含属性 name（String）和 age（int），以及一个 introduce() 方法（输出\"我叫xxx，今年xx岁\"）。然后在 main 方法中创建两个 Person 对象，分别设置不同的名字和年龄，并调用 introduce()。",
      answer: "考查知识点：\n类定义、属性、方法、创建对象\n\n参考答案：\n\npublic class Person {\n    String name;\n    int age;\n\n    public void introduce() {\n        System.out.println(\"我叫\" + name + \"，今年\" + age + \"岁。\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Person p1 = new Person();\n        p1.name = \"张三\";\n        p1.age = 20;\n        p1.introduce();\n\n        Person p2 = new Person();\n        p2.name = \"李四\";\n        p2.age = 22;\n        p2.introduce();\n    }\n}\n\n解题思路：\n1. 定义 Person 类，包含两个属性（name、age）和一个方法（introduce）。\n2. 用 new 创建两个不同的对象。\n3. 分别给两个对象的属性赋值。\n4. 分别调用 introduce() 方法。"
    },
    {
      question: "编写一个 Animal 父类和一个 Cat 子类。Animal 有 name 属性和 eat() 方法。Cat 继承 Animal，并增加一个 meow() 方法。",
      answer: "考查知识点：\n继承（extends）、属性与方法继承\n\n参考答案：\n\npublic class Animal {\n    String name;\n\n    public void eat() {\n        System.out.println(name + \"正在吃东西\");\n    }\n}\n\npublic class Cat extends Animal {\n    public void meow() {\n        System.out.println(name + \"：喵喵喵~\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Cat cat = new Cat();\n        cat.name = \"小花\";      // 继承自 Animal 的属性\n        cat.eat();              // 继承自 Animal 的方法\n        cat.meow();             // Cat 自己的方法\n    }\n}\n\n解题思路：\n1. 先定义 Animal 父类，包含 name 和 eat()。\n2. Cat 用 extends Animal 继承父类。\n3. Cat 中新增 meow() 方法。\n4. 测试时发现 Cat 对象可以直接使用 name 和 eat()，无需在 Cat 中重复定义。"
    },
    {
      question: "判断以下标识符是否合法，并说明原因。\n\n(1) myName\n(2) 2ndPlace\n(3) class\n(4) student_name\n(5) my name",
      answer: "考查知识点：\n标识符命名规则、关键字\n\n参考答案：\n(1) myName —— ✅ 合法。字母组成。\n(2) 2ndPlace —— ❌ 不合法。首字符是数字。\n(3) class —— ❌ 不合法。class 是 Java 关键字。\n(4) student_name —— ✅ 合法。字母加下划线。\n(5) my name —— ❌ 不合法。包含空格。\n\n解题思路：\n依次检查每个标识符是否满足：① 由字母/下划线/美元符号/数字组成；② 首字符不是数字；③ 不是 Java 关键字；④ 不能有空格。"
    },
    {
      question: "写一个程序，声明一个 boolean 变量 isWeekend 表示是否周末，声明一个 int 变量 hour 表示当前时间（0-23）。如果是周末且时间在 9-18 之间，输出\"周末白天，可以出去玩\"，否则输出\"不是周末白天，在家学习\"。",
      answer: "考查知识点：\nboolean 类型、if 条件判断、逻辑运算符\n\n参考答案：\n\npublic class WeekendCheck {\n    public static void main(String[] args) {\n        boolean isWeekend = true;\n        int hour = 14;\n\n        if (isWeekend && hour >= 9 && hour <= 18) {\n            System.out.println(\"周末白天，可以出去玩\");\n        } else {\n            System.out.println(\"不是周末白天，在家学习\");\n        }\n    }\n}\n\n解题思路：\n1. && 表示\"并且\"，三个条件同时满足才执行第一个输出。\n2. 修改 isWeekend 或 hour 的值测试不同结果。"
    },
    {
      question: "阅读以下代码，指出其中存在的 4 处错误。\n\npublic class test {\n    public static void main(string[] args) {\n        int 1score = 100;\n        boolean b = True;\n        Student s = Student();\n        system.out.println(1score);\n    }\n}",
      answer: "考查知识点：\n类名规范、String 大小写、标识符规则、boolean 大小写、new 关键字、System 大小写\n\n参考答案：\n错误1：类名 test 应首字母大写（建议改为 Test）。\n错误2：string[] args 中 String 的 S 必须大写。\n错误3：1score 以数字开头，不合法，应改为 score1。\n错误4：True 应全部小写 true。\n错误5：Student() 前面缺少 new。\n错误6：system 首字母 S 必须大写。\n\n解题思路：\n逐行检查代码，重点检查大小写、new 关键字、标识符规则和 boolean 值的大小写。"
    }
  ],
  conclusion: [
    "本节课的核心是理解面向对象编程中\"类、对象、构造方法、继承\"这四个最基础的概念。它们是整个 Java 学习的地基。",
    "学习 Java 时要特别注意标识符的命名规则（首字符不能是数字、不能用关键字）和大小写问题（关键字全小写、类名首字母大写）。",
    "通过本节课，应该能够区分属性和方法、理解 new 和构造方法的作用、知道继承为什么能实现代码复用。",
    "继承这个知识点后面会和封装、多态一起，构成 Java 面向对象的\"三大特征\"，这是后续课程以及考试的重点内容。",
    "课后建议多练习：① 创建各种类并用 new 创建对象；② 动手写一个简单的继承关系（如 Animal→Cat）；③ 把常见关键字抄写一遍并分类记忆；④ 继续练习盲敲键盘，目标是每分钟 120 个字母。"
  ]
}
