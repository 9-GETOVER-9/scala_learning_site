{
  id: "java-class-structure-accessor",
  title: "类的定义、结构与访问器详解",
  chapter: "Java 类与对象",
  date: "2025-09-18",
  tags: [
    "类定义",
    "属性",
    "方法",
    "成员变量",
    "局部变量",
    "访问器",
    "getset",
    "this关键字",
    "构造方法",
    "参数传递"
  ],
  summary: [
    "本节课首先明确了类的定义：类是用来描述一类事物共有属性和功能的模板。",
    "课堂中重点讲解了类体的标准结构：属性在上、方法在下，方法又细分为构造方法、访问器、常用方法和特殊方法。",
    "老师通过银行账户的类比解释访问器 set/get 的作用：不直接暴露属性，而是通过方法控制访问，提高安全性和健壮性。",
    "本节课的核心概念是成员变量与局部变量的区别：成员变量在整个类体中可见，局部变量只在定义它的方法内可见。",
    "最后通过参数传递和 this 关键字，演示对象如何调用方法来访问和修改属性，以及如何解决局部变量与成员变量同名的问题。"
  ],
  keyPoints: [
    {
      title: "类的基本概念",
      content: "类是 Java 面向对象编程的核心，用来描述一类事物共有的属性和功能。属性描述对象有什么，方法描述对象能做什么。类是模板，对象是根据模板创建出来的具体实例。",
      javaCompare: "类是抽象模板；对象是 new 出来的具体实例。"
    },
    {
      title: "类体的标准结构",
      content: "一个规范的类通常把属性写在上面，把方法写在下面。方法部分又可以按构造方法、访问器 get/set、普通方法、特殊方法的顺序组织。这样写更符合 Java 代码阅读习惯。",
      javaCompare: "语法上位置不一定强制，但课程要求按规范写，便于阅读和维护。"
    },
    {
      title: "成员变量与局部变量",
      content: "成员变量声明在类体中、方法外，在整个类体内可见，并且有默认值；局部变量声明在方法或代码块中，只在当前方法或代码块内可见，使用前必须手动初始化。",
      javaCompare: "成员变量有默认值，如 int 默认为 0、对象引用默认为 null；局部变量没有默认值。"
    },
    {
      title: "同名变量与隐藏现象",
      content: "当局部变量与成员变量同名时，局部变量会隐藏成员变量。在方法中直接写 name，访问的是局部变量；要访问成员变量，需要写 this.name。",
      javaCompare: "name 通常指最近作用域内的变量；this.name 明确表示当前对象的成员变量。"
    },
    {
      title: "访问器 set/get",
      content: "访问器由 set 方法和 get 方法组成。set 用来给属性赋值，get 用来获取属性值。通过访问器间接操作 private 属性，可以加入验证逻辑，避免外部代码随意修改对象数据。",
      javaCompare: "public 属性可以直接访问但不安全；private 属性配合 get/set 更符合封装思想。"
    },
    {
      title: "this 关键字",
      content: "this 表示当前对象的引用。谁调用方法，this 就代表谁。在 set 方法中常用 this.属性名 = 参数名; 来区分成员变量和局部变量。",
      javaCompare: "this 只能用于对象相关的上下文，不能在 static 方法中直接使用。"
    },
    {
      title: "形参与实参",
      content: "方法定义时括号里的参数叫形参，它是等待接收值的占位符；方法调用时传入的具体值叫实参。把实参传给形参的过程叫参数传递。",
      javaCompare: "setName(String name) 中的 name 是形参；p.setName(\"Tom\") 中的 \"Tom\" 是实参。"
    },
    {
      title: "返回值与 void",
      content: "方法如果声明了返回值类型，就必须使用 return 返回对应类型的值；void 表示没有返回值，不能 return 一个具体值。get 方法通常需要返回属性值，而 set 方法通常是 void。",
      javaCompare: "getName() 通常返回 String；setName(String name) 通常不返回值。"
    }
  ],
  codeExamples: [
    {
      title: "完整的类定义：从属性到访问器",
      code: `public class Student {
    // 第1部分：属性
    private String name;
    private int age;

    // 第2部分：构造方法
    public Student() {
        name = "未命名";
        age = 0;
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // 第3部分：访问器（get/set）
    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    // 第4部分：普通方法
    public void introduce() {
        System.out.println("我叫" + name + "，今年" + age + "岁。");
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.setName("小明");
        s1.setAge(18);
        s1.introduce();

        Student s2 = new Student("小红", 20);
        s2.introduce();
    }
}`,
      explanation: "Student 类按属性、构造方法、访问器、普通方法的顺序组织。属性使用 private 保护起来，外部通过 setName、getName、setAge、getAge 间接访问。"
    },
    {
      title: "成员变量与局部变量同名时使用 this 区分",
      code: `public class Person {
    String name = "张三";    // 成员变量

    public void test(String name) {   // 局部变量（参数）
        System.out.println("name = " + name);           // 访问局部变量
        System.out.println("this.name = " + this.name); // 访问成员变量
    }

    public static void main(String[] args) {
        Person p = new Person();
        p.test("李四");
    }
}`,
      explanation: "test 方法中的参数 name 会隐藏成员变量 name，所以直接写 name 得到的是“李四”；使用 this.name 才能访问当前对象的成员变量“张三”。"
    },
    {
      title: "方法返回值类型由 return 决定",
      code: `public class ReturnDemo {
    public double getValue() {
        return 1.0;          // 1.0 是 double，所以方法类型是 double
    }

    public int getSum(int a, int b) {
        return a + b;        // a+b 是 int，所以方法类型是 int
    }

    public void sayHello() {
        System.out.println("Hello");
        // void 方法没有返回值
    }
}`,
      explanation: "double 方法必须返回 double 类型或能自动转换为 double 的值；int 方法必须返回 int 值；void 方法表示没有返回值，不能 return 10 这样的具体值。"
    },
    {
      title: "银行账户访问器：通过方法保护属性",
      code: `public class BankAccount {
    private String owner;
    private double balance;

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getOwner() {
        return owner;
    }

    public void setBalance(double balance) {
        if (balance >= 0) {
            this.balance = balance;
        } else {
            System.out.println("余额不能为负数！");
        }
    }

    public double getBalance() {
        return balance;
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount();
        acc.setOwner("张三");
        acc.setBalance(1000.0);
        System.out.println(acc.getOwner() + " 余额：" + acc.getBalance());
    }
}`,
      explanation: "余额 balance 被 private 保护，外部不能直接修改。setBalance 中加入了“余额不能为负数”的验证，体现访问器的安全控制作用。"
    }
  ],
  quiz: [
    {
      question: "关于成员变量和局部变量，以下说法正确的是？",
      options: [
        "成员变量和局部变量都有默认值",
        "局部变量有默认值，成员变量没有",
        "成员变量有默认值（如0、null），局部变量必须手动初始化",
        "两者都没有默认值"
      ],
      answer: "成员变量有默认值（如0、null），局部变量必须手动初始化",
      explanation: "成员变量由系统自动赋默认值；局部变量必须手动初始化后才能使用。"
    },
    {
      question: "以下代码中 setName 方法执行后，成员变量 name 的值是什么？public void setName(String name) { name = name; }",
      options: [
        "等于传入的参数值",
        "还是原来的值（没变）",
        "null",
        "编译错误"
      ],
      answer: "还是原来的值（没变）",
      explanation: "两个 name 都是参数这个局部变量，参数赋值给参数，成员变量没有变化。正确写法是 this.name = name;"
    },
    {
      question: "this 关键字的作用是什么？",
      options: [
        "表示当前类的名称",
        "表示当前对象的引用",
        "表示父类的引用",
        "表示方法名"
      ],
      answer: "表示当前对象的引用",
      explanation: "this 表示当前对象。谁调用方法，this 就指向谁。"
    },
    {
      question: "访问器由哪两个方法组成？",
      options: [
        "add 和 remove",
        "start 和 stop",
        "set 和 get",
        "open 和 close"
      ],
      answer: "set 和 get",
      explanation: "set 方法用于赋值，get 方法用于取值，它们合起来构成访问器。"
    },
    {
      question: "关于 void 方法，以下说法正确的是？",
      options: [
        "void 方法必须有 return 语句",
        "void 方法可以 return 一个 int 值",
        "void 方法表示没有返回值",
        "void 是方法名的一部分"
      ],
      answer: "void 方法表示没有返回值",
      explanation: "void 表示方法没有返回值。void 方法可以不写 return，或者只写 return;，但不能 return 具体值。"
    }
  ],
  dragMatch: [
    {
      left: "class",
      right: "Java 关键字，用来声明一个类"
    },
    {
      left: "属性（property）",
      right: "类的成员变量，描述类“有什么”"
    },
    {
      left: "方法（method）",
      right: "类的成员函数，描述类“能做什么”"
    },
    {
      left: "成员变量",
      right: "在类体中、方法外声明的变量，整个类体可见"
    },
    {
      left: "局部变量",
      right: "在方法体内声明的变量，只在方法内可见"
    },
    {
      left: "this",
      right: "代表当前对象的引用"
    },
    {
      left: "set 方法",
      right: "访问器中的赋值方法，用于给属性设值"
    },
    {
      left: "get 方法",
      right: "访问器中的取值方法，用于获取属性值"
    },
    {
      left: "形参",
      right: "方法定义时声明的参数，等待实参赋值"
    },
    {
      left: "实参",
      right: "方法调用时传入的具体值"
    }
  ],
  flow: [
    "先使用 class 关键字定义一个类，例如 public class Student。",
    "在类体上方声明属性，例如 private String name; private int age;。",
    "根据需要编写构造方法，用于对象创建时初始化属性。",
    "编写 set 方法，例如 setName(String name)，用于接收外部传入的实参。",
    "在 set 方法中使用 this.name = name;，把形参的值赋给当前对象的成员变量。",
    "编写 get 方法，例如 getName()，通过 return name; 返回属性值。",
    "在 main 方法中使用 new Student() 创建对象。",
    "通过对象调用 set 方法给属性赋值，再调用 get 方法或普通方法读取并输出属性。",
    "如果局部变量和成员变量同名，使用 this.属性名 明确访问当前对象的成员变量。"
  ],
  exercises: [
    {
      question: "定义一个 Student 类，包含 private String name 和 private int age，提供 setName、getName、setAge、getAge，并编写 introduce 方法输出学生信息。",
      answer: "public class Student {\n    private String name;\n    private int age;\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setAge(int age) {\n        this.age = age;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public void introduce() {\n        System.out.println(\"我叫\" + name + \"，今年\" + age + \"岁。\");\n    }\n}"
    },
    {
      question: "解释 setName(String name) 中 this.name = name; 的含义。",
      answer: "this.name 表示当前对象的成员变量 name；等号右边的 name 表示方法参数这个局部变量。this.name = name; 的作用是把外部传入的名字赋给当前对象的 name 属性。"
    },
    {
      question: "找出错误：public void setName(String name) { name = name; } 为什么不能修改成员变量？",
      answer: "因为局部变量 name 隐藏了成员变量 name，等号左右两边都指向参数 name，相当于参数自己赋值给自己。正确写法是 this.name = name;"
    },
    {
      question: "写一个 BankAccount 类，包含 owner 和 balance，balance 不能设置为负数。",
      answer: "public class BankAccount {\n    private String owner;\n    private double balance;\n\n    public void setOwner(String owner) {\n        this.owner = owner;\n    }\n\n    public String getOwner() {\n        return owner;\n    }\n\n    public void setBalance(double balance) {\n        if (balance >= 0) {\n            this.balance = balance;\n        } else {\n            System.out.println(\"余额不能为负数！\");\n        }\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}"
    },
    {
      question: "说明成员变量和局部变量的两个核心区别。",
      answer: "第一，声明位置不同：成员变量在类体中、方法外，局部变量在方法或代码块内。第二，默认值不同：成员变量有默认值，局部变量没有默认值，使用前必须手动初始化。"
    }
  ],
  conclusion: [
    "本节课的核心是理解类的标准结构：属性在上、方法在下，方法部分按构造方法、访问器、普通方法的顺序组织。",
    "学习面向对象时要特别注意成员变量和局部变量的区别：成员变量有默认值，局部变量必须初始化。",
    "当成员变量和局部变量同名时，局部变量会隐藏成员变量，需要使用 this 来区分。",
    "访问器 get/set 是封装的重要基础，不要直接暴露属性，而要通过方法安全地访问和修改。",
    "这些概念会在后续的继承、多态、封装中反复使用，现在把类结构、this 和访问器练熟，后面学习会更顺畅。"
  ]
}