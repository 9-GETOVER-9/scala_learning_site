{
  id: "java-abstract-review-interface-intro",
  title: "抽象类复习与接口概念引入",
  chapter: "Java 类与对象 → 抽象类与接口",
  date: "2025-10-27",
  tags: [
    "抽象类",
    "上转型",
    "规则定义",
    "接口",
    "interface",
    "参数传递",
    "包",
    "重写可见性",
    "多态总结"
  ],
  summary: [
    "课堂首先通过代码演示了抽象类的完整工作流程——抽象父类定义 getID() 规则，Student 和 Teacher 子类分别实现自己的 ID 生成方式，通过上转型对象（People p = new Student()）来调用。",
    "老师通过代码中\"返回值类型不一致\"的报错，强调了重写必须保持方法头完全一致——包括返回值类型、方法名、参数列表。",
    "再次总结继承的可见性规则——子类重写父类方法时，访问权限必须大于等于父类（protected → public ✅，public → protected ❌）。",
    "系统复习了面向对象的核心知识点链——继承→可见性→重写/重载区别→上转型→多态→抽象类→规则定义，强调这些是\"一条逻辑线\"。",
    "通过\"插座\"的经典类比引入接口概念——接口就是一个物件与另一个物件接触的地方（接头），它只提供功能（电），不同的物件（水壶/台灯/手机充电器）接上去完成不同的任务。接口传递参数、定义规则。"
  ],
  keyPoints: [
    {
      title: "抽象类与上转型的完整工作流程",
      content: "抽象类与上转型的完整工作流程 抽象类的完整使用流程是：定义抽象父类（含抽象方法）→ 子类继承并实现所有抽象方法 → 通过上转型对象（父类引用指向子类对象）来使用。 > \"我还没有定义学生的对象呢，就用 P1（People 类型）把学生的 ID 拿走了——这就是上转型。子类给父类进行实例化，你就用父类来调用它。虽然是父类在调用，但执行的还是子类的方法——就像父亲花儿子挣的钱。\"",
      javaCompare: "声明类型看父类或抽象类，运行时方法调用看实际子类对象，这是多态的基础。"
    },
    {
      title: "重写的可见性规则——只能扩大，不能缩小",
      content: "重写的可见性规则——只能扩大，不能缩小 子类重写父类的方法时，访问权限只能扩大（或保持不变），不能缩小。 > \"父类是 protected 的，子类最少也是 protected 的，绝对不能是 default 或 private。你可以是 public——大于等于都可以，但不能小于。\" 这个规则保证了多态的安全性——通过父类引用调用方法时，如果子类把权限缩小了，某些本来能访问的地方就访问不到了，这会破坏程序的正确性。 > \"重写可见性——平行继承可以，向上扩大可以，向下缩小不行。\"",
      javaCompare: "重写发生在父子类之间，要求方法头一致，并且子类访问权限不能比父类更小。"
    },
    {
      title: "面向对象的知识链——一条逻辑线",
      content: "面向对象的知识链——一条逻辑线 老师在本节课帮学生把整个面向对象的知识点串成了一条线： > \"这个课程一定是这么逻辑转换下来的。我们先学了类，学了子类，学了继承——为什么不先学抽象类？因为做不了。我们都是先学普通案例才学特殊案例的。\"",
      javaCompare: ""
    },
    {
      title: "接口的概念——从生活到代码",
      content: "接口的概念——从生活到代码 接口（Interface）在生活中的含义是\"一个物件与另一个物件接触的地方\"。在 Java 编程中，接口用于定义一组规则（只有方法头，没有方法体），不同的类通过实现（implements）接口来完成共同的功能。 > \"你往插座上插水壶——烧水。插台灯——照亮。插手机充电器——充电。同一个插座，不同的物件插上去，完成不同的功能。插座本身只提供电（能力），至于用电做什么——那是各个物件自己的事。\" > \"接口传递的是参数。你插水壶的时候，传了一个'烧水'的参数。插台灯的时候，传了一个'照亮'的参数。插充电器的时候，传了一个'充电'的参数。对于插座来说，它一直没变，变的是插上去的物件。\" 三大作用总结： 1. 传递参数——不同的实现类传入，执行不同的逻辑 2. 定义规则——只有方法头，没有方法体，强制实现类遵循 3. 解耦——调用方只依赖接口，不依赖具体实现类",
      javaCompare: "接口强调规则和能力，适合表达部分类才具备的特性；普通父类更适合放所有子类共有的内容。"
    },
    {
      title: "接口与抽象类的对比",
      content: "接口与抽象类的对比 > \"抽象类和接口有相似之处。不同的组件放到一起共同完成一个功能——这个相接的地方就叫接口。从物理世界抽象出来，映射到我们的逻辑世界。\"",
      javaCompare: "抽象类是半成品，可以有构造方法和普通方法；接口更像纯规则，用 implements 实现。"
    },
    {
      title: "包的作用——代码的分组和管理",
      content: "包的作用——代码的分组和管理 老师用\"逛商场\"来类比包的作用： > \"逛商场的时候，买了衣服放一个袋子，鞋放一个袋子，吃的放一个袋子。如果把吃的放到衣服袋子里——衣服就不能穿了。包就是把具有共同特性的类放在一起，保护它们不跟其他类型的类混在一起。\" 包的两大作用： 1. 组织代码——把相关的类放在一起 2. 访问控制——同一个包下的类有特殊的访问权限（default 访问级别） > \"有些人负责前台界面（view），有些人负责设计类（model），有些人负责测试（test）。一个项目里不同角色的人负责不同的包——这就是分层架构。\"",
      javaCompare: "package 用于组织类，也会影响 default 访问权限的可见范围。"
    }
  ],
  codeExamples: [
    {
      title: "抽象类的规则定义——ID 系统完整演示",
      code: `// 抽象父类——定义"所有人都要有 ID"的规则
public abstract class People {
    String name;
    String id;

    public People(String name) {
        this.name = name;
    }

    // 抽象规则——生成 ID
    public abstract void generateID();

    // 通用方法——显示信息（调用了抽象方法——多态！）
    public void display() {
        generateID();  // 实际执行的是子类重写后的版本
        System.out.println("姓名：" + name + "，ID：" + id);
    }
}

// 子类：学生
public class Student extends People {
    private static int count = 0;

    public Student(String name) {
        super(name);
    }

    @Override
    public void generateID() {
        count++;
        this.id = "STU" + String.format("%04d", count);
    }
}

// 子类：教师
public class Teacher extends People {
    private static int count = 0;

    public Teacher(String name) {
        super(name);
    }

    @Override
    public void generateID() {
        count++;
        this.id = "TCH" + String.format("%03d", count);
    }
}

// 测试类
public class Test {
    public static void main(String[] args) {
        // 上转型——用抽象类类型接收
        People s1 = new Student("张三");
        People s2 = new Student("李四");
        People t1 = new Teacher("王老师");

        s1.display();  // 姓名：张三，ID：STU0001
        s2.display();  // 姓名：李四，ID：STU0002
        t1.display();  // 姓名：王老师，ID：TCH001
    }
}`,
      explanation: "People 抽象类定义了 generateID() 规则，display() 方法中调用了这个抽象方法——虽然 display() 是父类的方法，但它调用的 generateID() 是子类重写后的版本（因为上转型对象的运行时多态）。"
    },
    {
      title: "重写可见性规则——权限只能扩大不能缩小",
      code: `// 父类
public class Father {
    protected void show() {
        System.out.println("Father's protected show()");
    }

    public void print() {
        System.out.println("Father's public print()");
    }
}

// 子类
public class Son extends Father {
    // ✅ 可以——protected → public（扩大权限）
    @Override
    public void show() {
        System.out.println("Son's public show()——权限扩大了");
    }

    // ❌ 不可以——public → protected（缩小权限）
    // @Override
    // protected void print() {   // 编译错误！
    //     System.out.println("Error!");
    // }
    // 错误信息：Cannot reduce the visibility of the inherited method from Father
}`,
      explanation: "口诀——\"子类重写父类方法，访问权限≥父类。等于可以，大于也行，小于报错。\""
    },
    {
      title: "接口的类比代码——插座与电器",
      code: `// 接口 = 插座（只提供电——定义"能做什么"的规则）
public interface PowerSocket {
    // 接口中的方法默认是 public abstract
    void supplyPower();  // 供电——只有规则，没有实现
}

// 实现类 1 = 水壶（插上插座就烧水）
public class Kettle implements PowerSocket {
    @Override
    public void supplyPower() {
        System.out.println("水壶：接通电源，开始烧水...♨");
    }
}

// 实现类 2 = 台灯（插上插座就照亮）
public class Lamp implements PowerSocket {
    @Override
    public void supplyPower() {
        System.out.println("台灯：接通电源，开始照明...💡");
    }
}

// 实现类 3 = 手机充电器（插上插座就充电）
public class PhoneCharger implements PowerSocket {
    @Override
    public void supplyPower() {
        System.out.println("充电器：接通电源，开始充电...🔋");
    }
}

// 测试——同一个"插座"接口，不同电器插上去做不同的事
public class Test {
    public static void main(String[] args) {
        PowerSocket s1 = new Kettle();        // 插水壶
        PowerSocket s2 = new Lamp();          // 插台灯
        PowerSocket s3 = new PhoneCharger();  // 插充电器

        s1.supplyPower();  // 水壶：接通电源，开始烧水...♨
        s2.supplyPower();  // 台灯：接通电源，开始照明...💡
        s3.supplyPower();  // 充电器：接通电源，开始充电...🔋
    }
}`,
      explanation: "接口 PowerSocket 就像一个万能插座——它只定义了\"供电\"这个能力，但每种电器接上后各做各的事。这跟抽象类的规则定义思想一脉相承，但接口更加纯粹——它只有规则，没有任何实现。"
    }
  ],
  quiz: [
    {
      question: "子类重写父类的 protected 方法时，可以使用的访问权限是？",
      options: [
        "只能是 protected",
        "只能是 public",
        "protected 或 public",
        "private、default、protected、public 都可以"
      ],
      answer: "protected 或 public",
      explanation: "子类重写时访问权限必须大于等于父类——protected 可以保持不变或扩大为 public。不能缩小为 default 或 private。"
    },
    {
      question: "关于接口（interface），以下说法正确的是？",
      options: [
        "接口可以用 new 创建对象",
        "接口中的方法默认是 public static",
        "接口中没有构造方法",
        "一个类只能实现一个接口"
      ],
      answer: "接口中没有构造方法",
      explanation: "接口没有构造方法（A 错在不能 new，B 错在默认是 public abstract 不是 static，D 错在一个类可以实现多个接口）。"
    },
    {
      question: "以下哪个概念与\"插座\"的类比最接近？",
      options: [
        "抽象类",
        "接口",
        "普通类",
        "构造方法"
      ],
      answer: "接口",
      explanation: "插座 = 接口——它只提供电（能力），不关心谁在用、用来做什么。不同电器插上去做不同的事 = 不同的类实现同一个接口。"
    },
    {
      question: "抽象类和接口的共同点是？",
      options: [
        "都可以包含构造方法",
        "都可以用 new 创建对象",
        "都不能直接实例化",
        "都可以包含普通方法"
      ],
      answer: "都不能直接实例化",
      explanation: "两者都不能直接 new（抽象类通过子类，接口通过实现类）。A 错在接口没有构造方法，D 错在接口不能包含普通方法（Java 8 之前）。"
    },
    {
      question: "关于子类重写父类方法，以下说法正确的是？",
      options: [
        "方法头可以不同",
        "只能发生在同一个类中",
        "发生在不同类体中，方法头必须完全相同",
        "重写的方法必须有 @Override 注解"
      ],
      answer: "发生在不同类体中，方法头必须完全相同",
      explanation: "重写的核心条件：发生在不同类体，方法头完全相同。@Override 注解是可选的（推荐但非必须）。"
    }
  ],
  dragMatch: [
    {
      left: "抽象类",
      right: "用 abstract 修饰的类，可以包含抽象方法和普通方法，不能直接 new"
    },
    {
      left: "抽象方法",
      right: "只有方法头没有方法体、以分号结尾的方法，定义\"规则\""
    },
    {
      left: "规则",
      right: "抽象类或接口定义的\"必须做什么\"，具体\"怎么做\"由于类/实现类决定"
    },
    {
      left: "上转型对象",
      right: "父类引用指向子类对象，方法调用执行子类重写后的版本"
    },
    {
      left: "可见性扩大",
      right: "子类重写时访问权限从 protected 变成 public（✅ 允许）"
    },
    {
      left: "可见性缩小",
      right: "子类重写时访问权限从 public 变成 protected（❌ 不允许）"
    },
    {
      left: "接口",
      right: "用 interface 声明，纯抽象方法 + 常量的集合，没有构造方法"
    },
    {
      left: "插座",
      right: "接口的生活类比——只提供能力（电），不同物件插上做不同的事"
    },
    {
      left: "包（package）",
      right: "组织类的容器，同包的类有 default 访问权限"
    },
    {
      left: "implements",
      right: "类实现接口的关键字，一个类可以实现多个接口"
    }
  ],
  flow: [
    "定义接口 PowerSocket——声明 void supplyPower() 方法（规则：所有电器都要能通电）",
    "定义实现类 Kettle implements PowerSocket——重写 supplyPower()，实现\"烧水\"",
    "定义实现类 Lamp implements PowerSocket——重写 supplyPower()，实现\"照明\"",
    "定义实现类 PhoneCharger implements PowerSocket——重写 supplyPower()，实现\"充电\"",
    "使用接口类型变量——PowerSocket device = new Kettle()",
    "调用 device.supplyPower()——JVM 发现实际对象是 Kettle，执行 Kettle 的 supplyPower()",
    "更换实现——device = new Lamp()，device.supplyPower() → 执行 Lamp 的 supplyPower()",
    "接口不变，行为不同——这就是接口多态的核心价值"
  ],
  exercises: [
    {
      question: "解释抽象类和接口在\"定义规则\"方面的相同点和不同点。",
      answer: "相同点：① 都不能直接用 new 实例化；② 都用于定义规则（方法头），等待子类/实现类来完成方法体；③ 都支持多态（通过上转型对象/接口引用调用子类方法）。\n不同点：① 抽象类用 extends 继承（单继承），接口用 implements 实现（可实现多个）；② 抽象类可以有构造方法和普通方法，接口没有构造方法（方法默认 public abstract）；③ 抽象类可以有普通变量，接口中的变量默认是 public static final 常量。\n解题思路：记住\"抽象类是半成品（可有普通方法），接口是纯规则（纯抽象）\"。"
    },
    {
      question: "定义一个抽象类 Employee（员工），包含抽象方法 calculateSalary()。定义两个子类 FullTimeEmployee（月薪 = 基本工资 + 奖金）和 PartTimeEmployee（时薪 × 工作小时数），写出完整代码。",
      answer: "abstract class Employee { String name; Employee(String name) { this.name = name; } public abstract double calculateSalary(); }\nclass FullTimeEmployee extends Employee { double base, bonus; FullTimeEmployee(String n, double b, double bo) { super(n); base=b; bonus=bo; } public double calculateSalary() { return base + bonus; } }\nclass PartTimeEmployee extends Employee { double hourlyRate; int hours; PartTimeEmployee(String n, double r, int h) { super(n); hourlyRate=r; hours=h; } public double calculateSalary() { return hourlyRate * hours; } }\n解题思路：Employee 定义\"计算工资\"的规则，两个子类按自己的计薪方式实现。"
    },
    {
      question: "判断题——\"子类继承父类时，可访问父类的所有成员，包括 private 成员。\"这个说法对吗？为什么？",
      answer: "错误。子类不能直接访问父类的 private 成员（虽然子类对象内存中确实包含它们）。如果父类提供了 public 的 get/set 访问器，子类可以通过访问器间接操作 private 属性。\n解题思路：继承 ≠ 全部可见。private = 本类独有，子类看不到。"
    },
    {
      question: "以下代码有什么问题？修正它。\ninterface Printer { void print(); public void show() { System.out.println(\"Hello\"); } }",
      answer: "接口中的方法不能有方法体（Java 8 之前）。show() 有大括号和方法体是错误的。修正：去掉方法体改为 void show(); 或者在 Java 8+ 中使用 default 关键字：default void show() { ... }。\n解题思路：接口中的方法默认是 public abstract——只有方法头，没有方法体。"
    },
    {
      question: "用\"插座\"类比解释接口在编程中的作用。为什么说接口\"传递的是参数\"？",
      answer: "插座（接口）只提供电（方法签名/能力），水壶插上烧水、台灯插上照亮、充电器插上充电——这些不同的物件就是不同的实现类。说\"传递的是参数\"，意思是在编程中，不同的实现类对象传入接口类型的参数，就能触发不同的行为逻辑。例如一个方法 process(PowerSocket socket)，传 Kettle 进来就烧水，传 Lamp 进来就照亮——同一个接口参数，不同实现对象，不同结果。\n解题思路：接口 = 万能插座；实现类 = 不同电器；参数 = 你选择插哪个电器。"
    }
  ],
  conclusion: [
    "抽象类和接口的本质都是\"定义规则\"——告诉子类/实现类\"你必须做什么\"，但不规定\"怎么做\"。这种\"规则与实现分离\"的思想是面向对象设计的核心。",
    "从抽象类到接口是一个自然的进化——抽象类还可以包含普通方法和构造方法（半成品），而接口是\"纯规则\"——只有方法头，连构造方法都没有。接口是抽象类的\"升级版\"。",
    "面向对象的知识是一条逻辑线——从类到继承，从重写到上转型，从多态到抽象类，再到接口。每个概念都是为了解决前一个概念无法解决的问题。顺着这条线理解，就不会觉得知识点是孤立的。",
    "\"插座类比\"是理解接口最好的方式——插座（接口）不变，插上去的电器（实现类）不同，完成的功能（方法体）不同。这就是面向接口编程的核心。",
    "老师建议静下心来用一个综合项目串联所有知识点（for 循环 + 方法 + 抽象类 + 接口 + 继承 + 多态）——能用一个项目把这些都用上，说明真的学通了。"
  ]
}