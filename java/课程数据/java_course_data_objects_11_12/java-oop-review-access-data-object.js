{
  id: "java-oop-review-access",
  title: "类与对象综合复习——变量、方法与访问权限",
  chapter: "Java 类与对象",
  date: "2025-10-09",
  tags: [
    "类定义",
    "成员变量",
    "局部变量",
    "构造方法",
    "实例成员",
    "类成员",
    "static",
    "访问权限",
    "public",
    "private",
    "protected",
    "包"
  ],
  summary: [
    "本节课首先回顾了类的完整结构：关键字 class、类体（属性 + 方法）、方法的细分（构造方法→访问器→常用方法→特殊方法）。",
    "课堂中重点复习了成员变量与局部变量的区别：成员变量有默认值，局部变量使用前必须初始化，同名时局部变量隐藏全局变量。",
    "老师通过“全班总人数”的类比，帮助理解实例成员（属于对象）和类成员（static 修饰，属于类，所有对象共享）的区别。",
    "本节课还复习了构造方法重载以及对象引用：可以将一个类的对象作为另一个类的属性，实现任务分发和复用。",
    "最后通过 public、protected、default、private 四种访问权限修饰符，引入封装的核心：可见即可访问，通过限制可见性控制访问权限。"
  ],
  keyPoints: [
    {
      "title": "类的完整结构",
      "content": "一个 Java 类由类声明和类体组成。类体中先写属性（成员变量），再写方法。方法可分为构造方法、访问器（get/set）、常用方法和特殊方法。这样的结构便于阅读和维护。",
      "javaCompare": "类像衣柜，属性和方法要分类摆放，后续查找和复习更清晰。"
    },
    {
      "title": "成员变量与局部变量",
      "content": "成员变量声明在类体中、方法外，在整个类中可见，并有默认值；局部变量声明在方法体或代码块中，只在局部范围内可见，使用前必须手动初始化。",
      "javaCompare": "成员变量是“自带属性”，局部变量是“临时使用的工具”。"
    },
    {
      "title": "实例成员与类成员",
      "content": "没有 static 的变量和方法属于对象，叫实例成员；有 static 修饰的变量和方法属于类，叫类成员。类成员可以通过类名调用，所有对象共享同一份 static 变量。",
      "javaCompare": "全班总人数属于班级整体，不属于某一个学生。"
    },
    {
      "title": "构造方法与重载",
      "content": "构造方法与类同名、没有返回值类型、new 对象时自动调用。多个构造方法可以重载，参数列表决定创建出的对象初始特征。",
      "javaCompare": "new People() 和 new People(\"Tom\", 20) 创建的是同一类的不同特征对象。"
    },
    {
      "title": "对象引用作为属性",
      "content": "一个类可以把另一个类的对象作为自己的属性，从而复用该对象已有的方法。课堂用“把会计算的人作为属性，让他帮我完成任务”的类比说明这种设计。",
      "javaCompare": "TaskManager 持有 Calculator 对象，自己不用会所有计算，也能完成任务。"
    },
    {
      "title": "值传递与址传递",
      "content": "基本类型参数传递的是值副本，方法内部修改不影响外部原值；数组、对象等引用类型传递的是地址，方法内部可能直接修改原始数据。",
      "javaCompare": "基本类型像复印件，引用类型像共享定位。"
    },
    {
      "title": "四种访问权限修饰符",
      "content": "public 表示公有，任何地方能访问；private 表示私有，只有本类能访问；protected 表示受保护，同包和子类可访问；default 是不写修饰符，通常同包可访问。",
      "javaCompare": "可见即可访问，封装就是通过限制可见性保护数据。"
    }
  ],
  codeExamples: [
    {
      title: "实例成员与类成员的区别",
      code: `public class Classroom {
    String studentName;           // 实例变量——每个学生有自己的名字
    static int totalCount = 0;    // 类变量——全班共享的总人数

    public Classroom(String name) {
        this.studentName = name;
        totalCount++;             // 每创建一个学生，总人数 +1
    }

    public void showInstance() {
        System.out.println("我叫" + studentName);       // 实例方法
    }

    public static void showTotal() {
        System.out.println("全班共" + totalCount + "人"); // 类方法
    }
}

public class Main {
    public static void main(String[] args) {
        Classroom.showTotal();  // 全班共0人

        Classroom s1 = new Classroom("张三");
        Classroom s2 = new Classroom("李四");
        Classroom s3 = new Classroom("王五");

        Classroom.showTotal();  // 全班共3人——所有学生共享
        s1.showInstance();      // 我叫张三——实例独有的
    }
}`,
      explanation: "studentName 是实例变量，每个对象各有一份；totalCount 是 static 类变量，所有对象共享。showTotal() 是类方法，可以用 Classroom.showTotal() 调用。"
    },
    {
      title: "对象作为另一个类的属性",
      code: `// 计算器——会做加法
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int addRange(int start, int end) {
        int sum = 0;
        for (int i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    }
}

// 任务管理器——自己不计算，用计算器来完成
public class TaskManager {
    private Calculator calc = new Calculator();  // 对象作为属性！

    public void doTask() {
        int r1 = calc.add(10, 20);       // 让计算器算 10+20
        int r2 = calc.addRange(1, 30);   // 让计算器算 1~30 的和
        System.out.println("10+20 = " + r1);
        System.out.println("1~30 之和 = " + r2);
    }
}`,
      explanation: "TaskManager 把 Calculator 对象作为自己的属性 calc。TaskManager 不需要自己写加法细节，可以把计算任务交给 calc 完成，这体现了对象引用和功能复用。"
    },
    {
      title: "值传递 vs 址传递",
      code: `public class PassDemo {
    // 值传递——改副本
    public static void changeInt(int n) {
        n = 999;
    }

    // 址传递——改原始数据
    public static void changeArray(int[] arr) {
        arr[0] = 999;
    }

    public static void main(String[] args) {
        int a = 10;
        changeInt(a);
        System.out.println(a);        // 10（值传递，没变）

        int[] nums = {10, 20};
        changeArray(nums);
        System.out.println(nums[0]);  // 999（址传递，变了！）
    }
}`,
      explanation: "changeInt 修改的是 int 参数的副本，所以 a 不变；changeArray 接收的是数组地址，修改 arr[0] 会影响 main 中的 nums。"
    },
    {
      title: "访问权限修饰符示例",
      code: `public class Account {
    public String owner;       // 公有：外部可直接访问
    private double balance;    // 私有：只能本类访问
    protected String level;    // 受保护：同包或子类可访问
    String bankName;           // default：不写修饰符，同包可访问

    public void setBalance(double balance) {
        if (balance >= 0) {
            this.balance = balance;
        }
    }

    public double getBalance() {
        return balance;
    }
}`,
      explanation: "访问权限用于控制成员的可见性。实际开发中常把重要属性设为 private，再提供 public 的 set/get 方法间接访问，这就是封装。"
    }
  ],
  quiz: [
    {
      "question": "static 修饰的变量属于谁？",
      "options": [
        "属于对象",
        "属于类",
        "属于方法",
        "不属于任何东西"
      ],
      "answer": "属于类",
      "explanation": "static 修饰的变量是类变量，属于类本身，所有对象共享同一份。"
    },
    {
      "question": "以下哪个是构造方法的正确特征？",
      "options": [
        "有返回值类型",
        "名称与类名相同",
        "必须手动调用",
        "只能有一个"
      ],
      "answer": "名称与类名相同",
      "explanation": "构造方法与类名完全相同，没有返回值类型，在 new 对象时自动调用，并且可以重载。"
    },
    {
      "question": "关于局部变量，以下说法正确的是？",
      "options": [
        "有默认值",
        "在整个类体可见",
        "使用前必须初始化",
        "与成员变量没有区别"
      ],
      "answer": "使用前必须初始化",
      "explanation": "局部变量没有默认值，必须先赋值再使用；成员变量才有默认值。"
    },
    {
      "question": "以下哪种类型传递的是地址而不是值的副本？",
      "options": [
        "int",
        "double",
        "boolean",
        "数组"
      ],
      "answer": "数组",
      "explanation": "数组是引用类型，传参时传递的是地址；int、double、boolean 是基本类型，传递值副本。"
    },
    {
      "question": "private 修饰的成员能被谁直接访问？",
      "options": [
        "所有类",
        "同包类",
        "子类",
        "只有本类"
      ],
      "answer": "只有本类",
      "explanation": "private 是最严格的访问权限，成员只在当前类内部可见。"
    }
  ],
  dragMatch: [
    {
      "left": "类（class）",
      "right": "Java 程序的基本单位，包含属性和方法"
    },
    {
      "left": "成员变量",
      "right": "类体中声明的变量，有默认值，整个类体可见"
    },
    {
      "left": "局部变量",
      "right": "方法体内声明的变量，必须初始化，只在方法内可见"
    },
    {
      "left": "实例方法",
      "right": "无 static 修饰，由对象调用"
    },
    {
      "left": "类方法",
      "right": "有 static 修饰，由类名直接调用"
    },
    {
      "left": "构造方法",
      "right": "与类同名、无返回值、new 时自动调用"
    },
    {
      "left": "重载",
      "right": "同一类中方法名相同、参数列表不同"
    },
    {
      "left": "值传递",
      "right": "基本类型传副本，互不影响"
    },
    {
      "left": "址传递",
      "right": "引用类型传地址，一处变处处变"
    },
    {
      "left": "访问权限",
      "right": "通过修饰符控制谁能访问（public/protected/default/private）"
    }
  ],
  flow: [
    "先写类声明：使用 class 关键字和合法类名定义一个类。",
    "进入类体后，先声明属性，也就是成员变量，用来描述对象“有什么”。",
    "再编写构造方法，用于 new 对象时初始化成员变量；如果需要不同初始特征，可以写多个重载构造。",
    "根据属性安全性决定访问权限：重要数据优先 private，不直接暴露给外部。",
    "为 private 属性提供 set/get 访问器，用方法间接控制赋值和取值。",
    "区分成员是否需要 static：属于每个对象的写成实例成员，属于全班/全类共享的写成类成员。",
    "如果一个类需要复用另一个类的能力，可以把另一个类的对象作为自己的属性。",
    "调用方法时检查参数传递：基本类型传副本，数组或对象传地址。",
    "最后检查访问权限：只有可见的成员才能被外部代码访问。"
  ],
  exercises: [
    {
      "question": "写一个 Student 类，包含实例变量 name 和 static 变量 totalCount。每创建一个 Student 对象，totalCount 自动加 1。",
      "answer": "参考思路：在 Student 中写 String name; static int totalCount = 0;。构造方法 Student(String name) 中写 this.name = name; totalCount++;。用 Student.totalCount 输出总人数。"
    },
    {
      "question": "说明成员变量和局部变量的区别，并各写一个代码例子。",
      "answer": "成员变量写在类体中、方法外，有默认值，整个类可见；局部变量写在方法体中，没有默认值，使用前必须初始化。例如类中 int age; 是成员变量，方法中 int x = 10; 是局部变量。"
    },
    {
      "question": "写一个 Account 类，把 balance 设置为 private，并提供 setBalance 和 getBalance 方法，setBalance 中要求余额不能为负数。",
      "answer": "参考答案：private double balance; public void setBalance(double balance) { if (balance >= 0) { this.balance = balance; } } public double getBalance() { return balance; }。"
    },
    {
      "question": "判断以下成员应该用实例变量还是 static 类变量：学生姓名、全班总人数、学生年龄、学校名称。",
      "answer": "学生姓名和学生年龄属于每个对象，适合实例变量；全班总人数通常所有对象共享，适合 static；学校名称如果全体学生相同，也可设计为 static。"
    },
    {
      "question": "写一个 Calculator 类和一个 TaskManager 类，让 TaskManager 持有 Calculator 对象，并调用它完成 1 到 100 的求和。",
      "answer": "参考思路：Calculator 中写 addRange(int start, int end) 方法；TaskManager 中写 private Calculator calc = new Calculator();，在 doTask 中调用 calc.addRange(1, 100) 并输出结果。"
    }
  ],
  conclusion: [
    "本节课的核心是全面复习类与对象章节：从类的结构、变量分类、方法分类、构造方法重载、参数传递到访问权限，形成完整知识体系。",
    "学习面向对象时要特别注意 static 的用法，它决定成员属于类还是对象，是理解 Java 内存模型和设计模式的关键。",
    "访问权限 public/protected/default/private 是封装的基础；封装就是通过限制可见性来保护数据。",
    "距离考试约 3 周，建议把所有笔记按目录整理一遍，用老师教的方法“对着目录说笔记”，把知识点串联起来。",
    "复习时要重点练习成员变量与局部变量、实例成员与类成员、值传递与址传递这三组对比，它们是类与对象章节中最容易混淆的内容。"
  ]
}