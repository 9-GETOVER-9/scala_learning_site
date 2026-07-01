{
  id: "java-inheritance-syntax-uml",
  title: "Java 类的继承深入及 UML 类图入门",
  chapter: "Java 类与对象 → 继承",
  date: "2025-10-16",
  tags: [
    "继承",
    "extends",
    "父类",
    "子类",
    "访问器",
    "get/set",
    "构造方法调用链",
    "UML类图",
    "树形结构",
    "private继承"
  ],
  summary: [
    "课堂首先通过代码演示巩固继承的核心结论：子类继承父类的非私有属性和方法，不写额外代码也能使用父类的 name、age、speak() 等成员。",
    "本节课重点演示了“私有属性通过访问器间接访问”的模式：子类不能直接访问父类 private 成员，但可以通过父类 public get/set 方法搭建桥梁。",
    "老师通过代码报错引出关键规则：子类构造方法必须先调用父类的某个构造方法；如果父类只有带参构造方法，子类必须用 super(参数) 明确指定。",
    "课堂再次强调 Java 的树形继承结构：每个子节点有且只有一个父节点，不可能出现两个直接父类，否则会产生二义性。",
    "本节课还介绍了 UML 类图的基本结构：类名、属性、方法三层矩形框，以及 UML 在软件需求分析和沟通中的作用。",
    "最后结合考试与实验安排，提醒学生从本周开始整理笔记、完成作业和实验报告，特别关注重写与重载、全局变量与局部变量等区别题。"
  ],
  keyPoints: [
    {
      title: "子类继承父类成员的具体规则",
      content: "在同一个包下，子类继承父类中除 private 以外的所有成员变量和方法。继承后，子类可以像使用自己声明的成员一样使用父类的非私有成员，例如 name、age、speak()、run() 等。",
      javaCompare: "public、protected、default 在同包下可被子类直接使用；private 只属于父类本身，子类不能直接访问。"
    },
    {
      title: "private 成员与访问器桥梁",
      content: "父类的 private 属性不能被子类直接访问，但父类可以提供 public 的 set/get 访问器，子类通过这些公开方法间接操作私有属性。这既保持了封装安全，又让子类能在规则允许的范围内使用父类数据。",
      javaCompare: "直接写 color 会报错；调用 getColor() 或 setColor() 是正确做法。"
    },
    {
      title: "子类构造方法必须先调用父类构造方法",
      content: "创建子类对象时，父类部分必须先初始化。如果子类构造方法中没有写 super(...)，系统默认插入 super()。如果父类没有无参构造方法，子类必须在第一句显式写 super(参数)。",
      javaCompare: "父类有无参构造时子类可自动调用；父类只有带参构造时子类必须显式 super(参数)。"
    },
    {
      title: "super 关键字",
      content: "super 代表父类对象的引用。在子类构造方法中，super(参数) 用来调用父类构造方法；在普通方法中，super.成员名 可以用来访问父类中可见的成员。super(参数) 必须写在子类构造方法第一句。",
      javaCompare: "this 指当前对象，super 指当前对象中的父类部分。"
    },
    {
      title: "继承的树形结构",
      content: "Java 继承体系可以看作一棵倒置的树，Object 是最终祖先节点。父类在上，子类在下；一个父类可以有多个子类，但一个子类只有一个直接父类。没有子类的类可以看作叶子节点。",
      javaCompare: "Java 类继承是单根、单继承结构；接口可以补充多继承需求。"
    },
    {
      title: "成员访问权限在继承中保持不变",
      content: "子类继承父类成员时，成员原来的访问权限不会因为继承而改变。public 仍是 public，protected 仍是 protected。子类重写父类方法时不能降低访问权限，但可以扩大访问权限。",
      javaCompare: "父类 public 方法不能在子类中重写成 protected；父类 protected 方法可以被子类重写成 public。"
    },
    {
      title: "UML 类图的三层结构",
      content: "UML 类图通常用三层矩形框表示一个类：第一层是类名，第二层是属性，第三层是方法。属性和方法只写签名，不写完整代码实现。UML 用 + 表示 public，# 表示 protected，- 表示 private，~ 表示 default。",
      javaCompare: "UML 类图是设计蓝图，Java 代码是具体实现。"
    },
    {
      title: "UML 在项目沟通中的作用",
      content: "UML 是程序员与甲方之间的桥梁。甲方提出业务需求，需求分析师将业务语言转成 UML 图，程序员再根据 UML 图设计类、属性、方法和类之间的关系。",
      javaCompare: "业务语言关注需求，UML 关注结构，Java 代码关注实现。"
    }
  ],
  codeExamples: [
    {
      title: "子类通过访问器间接访问父类私有属性",
      code: `public class People {
    private String color;

    public People() {
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getColor() {
        return this.color;
    }

    public String name;
    protected int age;
}

public class Student extends People {
    public void showInfo() {
        // System.out.println(color); // 编译错误：color 是 private
        System.out.println(getColor());
        System.out.println(name);
        System.out.println(age);
    }
}

public class Test {
    public static void main(String[] args) {
        Student s = new Student();
        s.name = "小明";
        s.age = 20;
        s.setColor("green");

        System.out.println("姓名：" + s.name);
        System.out.println("年龄：" + s.age);
        System.out.println("颜色：" + s.getColor());
    }
}`,
      explanation: "Student 不能直接访问父类 People 的 private color，但可以通过继承来的 public setColor() 和 getColor() 间接操作。这体现了封装和继承的结合。"
    },
    {
      title: "子类构造方法调用父类构造方法",
      code: `public class Father {
    String name;

    public Father() {
        System.out.println("Father() 无参构造方法被调用");
    }

    public Father(String name) {
        this.name = name;
        System.out.println("Father(String) 带参构造方法被调用，name = " + name);
    }
}

public class Son extends Father {
    String school;

    public Son() {
        this.school = "默认学校";
        System.out.println("Son() 无参构造方法被调用");
    }

    public Son(String name, String school) {
        super(name);
        this.school = school;
        System.out.println("Son(String, String) 构造方法被调用");
    }
}

public class Test {
    public static void main(String[] args) {
        Son s1 = new Son();
        Son s2 = new Son("小明", "北大");

        System.out.println("s1: name=" + s1.name + ", school=" + s1.school);
        System.out.println("s2: name=" + s2.name + ", school=" + s2.school);
    }
}`,
      explanation: "new Son() 会自动调用父类无参构造；new Son(\"小明\", \"北大\") 使用 super(name) 显式调用父类带参构造。父类初始化完成后才执行子类自己的初始化。"
    },
    {
      title: "UML 类图对应的 Java 代码",
      code: `public class Animal {
    private String name;
    protected int age;

    public Animal() {
    }

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void eat() {
        System.out.println(name + " is eating.");
    }
}

public class Dog extends Animal {
    private String breed;

    public Dog() {
    }

    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }

    public String getBreed() {
        return breed;
    }

    public void bark() {
        System.out.println(getName() + " says: Woof!");
    }
}`,
      explanation: "UML 中 -name:String 对应 private String name；#age:int 对应 protected int age；+getName():String 对应 public String getName()。Dog 到 Animal 的空心三角箭头表示继承。"
    },
    {
      title: "父类只有带参构造方法时的正确写法",
      code: `class Father {
    String name;

    Father(String name) {
        this.name = name;
    }
}

class Son extends Father {
    Son(String name) {
        super(name);
    }
}

public class Test {
    public static void main(String[] args) {
        Son s = new Son("Tom");
        System.out.println(s.name);
    }
}`,
      explanation: "当父类 Father 没有无参构造方法时，子类 Son 必须在构造方法第一句写 super(name)，否则系统默认调用 super() 会找不到 Father()。"
    }
  ],
  quiz: [
    {
      question: "在同一个包下，子类不能直接继承或访问父类的哪个成员？",
      options: ["public 成员", "protected 成员", "default 成员", "private 成员"],
      answer: "private 成员",
      explanation: "同包下 public、protected、default 都能被子类直接使用，只有 private 是本类独有，子类不能直接访问。"
    },
    {
      question: "子类访问父类 private 属性的正确方式是？",
      options: ["直接用 super.color", "直接用 this.color", "通过父类的 public get/set 方法", "把 private 改成 public"],
      answer: "通过父类的 public get/set 方法",
      explanation: "子类不能直接访问父类 private 成员，应通过父类公开的访问器方法间接操作。"
    },
    {
      question: "如果父类只有带参构造方法 Father(String name)，子类 Son 的构造方法必须怎么做？",
      options: ["什么也不用写", "在第一句写 super(name)", "删除父类的构造方法", "在任意位置写 super(name)"],
      answer: "在第一句写 super(name)",
      explanation: "super(参数) 必须是子类构造方法的第一句，用来明确调用父类带参构造方法。"
    },
    {
      question: "以下关于 UML 类图的描述，正确的是？",
      options: ["UML 类图直接生成 Java 代码", "类图用两层矩形框表示", "类图中 # 表示 protected", "UML 中 - 表示 public"],
      answer: "类图中 # 表示 protected",
      explanation: "UML 类图中 + 表示 public，# 表示 protected，- 表示 private。类图通常是类名、属性、方法三层。"
    },
    {
      question: "关于子类构造方法的调用顺序，以下说法正确的是？",
      options: ["先执行子类构造方法，再执行父类构造方法", "先执行父类构造方法，再执行子类构造方法", "只执行子类构造方法", "随机执行"],
      answer: "先执行父类构造方法，再执行子类构造方法",
      explanation: "子类构造方法总是先调用父类构造方法，父类初始化完成后才执行子类构造方法的其余部分。"
    }
  ],
  dragMatch: [
    {
      left: "extends",
      right: "Java 中声明继承的关键字，格式为 class 子类 extends 父类"
    },
    {
      left: "super",
      right: "代表父类对象的引用，常用于子类构造方法中调用父类构造方法"
    },
    {
      left: "访问器 get/set",
      right: "提供对私有属性的间接访问，get 取值，set 赋值"
    },
    {
      left: "倒置二叉树",
      right: "Java 继承体系的树形结构，根在上、枝叶在下"
    },
    {
      left: "祖先节点",
      right: "继承树的最顶层，是所有类的起点，例如 Object 类"
    },
    {
      left: "叶子节点",
      right: "继承树的终点，不再被任何类继承"
    },
    {
      left: "UML",
      right: "统一建模语言，用于软件系统的可视化设计"
    },
    {
      left: "类图",
      right: "UML 中最常用的图，用三层矩形表示类的结构"
    },
    {
      left: "+（UML 符号）",
      right: "对应 Java 中的 public 访问权限"
    },
    {
      left: "-（UML 符号）",
      right: "对应 Java 中的 private 访问权限"
    }
  ],
  flow: [
    "JVM 执行 new Student(\"小明\", \"北大\")，准备创建子类对象。",
    "JVM 进入 Student 的构造方法 Student(String name, String school)。",
    "构造方法第一句是 super(name)，JVM 暂停 Student 的初始化，转去调用父类 People(String name)。",
    "父类构造方法执行 this.name = name，完成父类部分初始化。",
    "JVM 返回子类构造方法，继续执行 this.school = school，完成子类部分初始化。",
    "Student 对象创建完毕，整个对象包含父类属性、子类属性以及可用的方法。"
  ],
  exercises: [
    {
      question: "定义一个 Person 父类，包含 private String idCard；再定义 Student 子类，要求能通过访问器获取和修改 idCard。",
      answer: `class Person {
    private String idCard;

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getIdCard() {
        return this.idCard;
    }
}

class Student extends Person {
    public void showIdCard() {
        System.out.println("身份证号：" + getIdCard());
    }
}`
    },
    {
      question: "写出一个只定义了带参构造方法的父类，以及一个正确调用它的子类。解释为什么必须写 super。",
      answer: `class Father {
    String name;

    Father(String name) {
        this.name = name;
    }
}

class Son extends Father {
    Son(String name) {
        super(name);
    }
}

父类没有无参构造方法，系统不会自动提供 Father()，因此子类必须用 super(name) 明确调用父类带参构造。`
    },
    {
      question: "画出 Vehicle 与 Car 的 UML 类图：class Vehicle { private String brand; public void run() { } } class Car extends Vehicle { private int seats; public void honk() { } }",
      answer: "Vehicle 类框：类名 Vehicle；属性 -brand:String；方法 +run():void。Car 类框：类名 Car；属性 -seats:int；方法 +honk():void。用空心三角箭头从 Car 指向 Vehicle，表示 Car 继承 Vehicle。"
    },
    {
      question: "判断说法正误并解释：A 类继承了 B 类，所以 A 类中包含了 B 类的所有成员，包括 B 类的 private 成员。",
      answer: "这个说法需要区分“包含”和“可访问”。子类对象的内存中有父类部分，但子类代码不能直接访问父类 private 成员。private 成员存在但不可见，只能通过父类 public 方法间接操作。"
    },
    {
      question: "为什么 Java 类层次结构中 Object 类被称为终极祖先？",
      answer: "Java 中所有类都直接或间接继承自 java.lang.Object。如果定义类时不写 extends，系统默认继承 Object。Object 提供 toString()、equals()、hashCode() 等所有对象共有的基本方法。"
    }
  ],
  conclusion: [
    "继承的核心是复用：父类的非私有成员子类自动拥有，不需要重复写代码。",
    "继承不是全盘照搬，private 成员不能被子类直接访问，重写可以让子类按照自己的需求改变父类方法行为。",
    "private 属性的访问器桥梁模式是实际开发中的标准做法：属性设为 private，通过 public get/set 方法访问。",
    "子类构造方法必须先调用父类构造方法。如果父类只有带参构造方法，super(参数) 必须写在子类构造方法第一句。",
    "UML 类图不是编程语言，而是设计沟通工具，它帮助开发者在写代码前理清类、属性、方法和继承关系。",
    "本节课也提醒学生整理笔记和实验报告，重点复习重写 vs 重载、全局变量 vs 局部变量、构造方法调用链等区别题。"
  ]
}
