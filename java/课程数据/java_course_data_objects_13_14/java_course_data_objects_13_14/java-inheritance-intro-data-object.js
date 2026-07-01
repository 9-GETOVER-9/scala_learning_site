{
  id: "java-inheritance-intro",
  title: "访问权限深入与继承入门",
  chapter: "Java 类与对象 → 继承",
  date: "2025-10-09",
  tags: [
    "访问权限",
    "public",
    "protected",
    "default",
    "private",
    "继承",
    "extends",
    "父类",
    "子类",
    "单继承",
    "重写",
    "Override",
    "super",
    "树形结构"
  ],
  summary: [
    "课堂前半段深入复习了四种访问权限修饰符 public、protected、default、private 在四种访问场景下的可见性：同一包同一类、同一包不同类、不同包子类、不同包非子类。",
    "老师通过代码演示验证访问权限矩阵，并用银行卡、家族财产、寝室水壶、室友物品等生活类比帮助理解不同修饰符的实际含义。",
    "本节课正式引入继承概念：继承是一种由已有类创建新类的机制，子类可以继承父类的非私有属性和方法，并扩展新的状态和行为。",
    "老师用家族族谱和倒置二叉树讲解继承的树形结构：祖先节点、父亲节点、兄弟节点、子孙节点逐层向下展开。",
    "本节课强调 Java 是单继承，一个子类只有一个直接父类，这样可以避免多个父类存在同名成员时产生二义性。",
    "最后引入多态的第一种形式——重写 Override：子类在不同类体中写出与父类方法头相同、方法体不同的方法，从而改变继承来的行为。"
  ],
  keyPoints: [
    {
      title: "四种访问权限的完整访问矩阵",
      content: "Java 中 public、protected、default、private 用来控制成员变量和方法在不同位置是否可见。同一包同一类中四者都可访问；同一包不同类中 private 不可访问；不同包子类中 public 和 protected 可访问；不同包非子类中只有 public 可访问。核心原则是“可见即可访问”。",
      javaCompare: "public 范围最大，private 范围最小；protected 比 default 多了“不同包子类可访问”的能力。"
    },
    {
      title: "public、protected、default、private 的生活类比",
      content: "public 像寝室水壶，谁都能用；protected 像家族财产，有血缘关系的成员可以使用；default 像室友物品，只限同一个包这一小范围；private 像自己的银行卡，只属于本类自己。用这些生活场景可以帮助初学者理解抽象的可见性规则。",
      javaCompare: "protected 关注“同包或子类”，default 只关注“同包”，private 只关注“本类”。"
    },
    {
      title: "继承的基本概念",
      content: "继承是由已有类创建新类的机制。已有类称为父类或超类，新类称为子类。子类继承父类的非私有状态和行为，可以直接复用父类中已经写好的公共代码，同时还能增加自己特有的属性和方法。",
      javaCompare: "不使用继承时，每个类都要重复定义共有内容；使用继承后，共有内容写在父类，子类自动拥有。"
    },
    {
      title: "extends 继承语法",
      content: "Java 中使用 extends 关键字表示继承关系，格式是 class 子类名 extends 父类名 { }。extends 的含义是“扩展”，表示子类在父类已有内容的基础上继续扩展新的能力。",
      javaCompare: "extends 用于类继承；implements 用于接口实现，二者不能混用。"
    },
    {
      title: "Java 的单继承原则",
      content: "Java 采用单继承机制，一个子类有且只有一个直接父类。这样设计是为了避免二义性：如果两个父类都有同名成员，子类会无法判断该继承哪一个。Java 如果需要类似多继承的效果，通常通过接口 interface 实现。",
      javaCompare: "C++ 支持多继承，Java 类只支持单继承，但 Java 可以实现多个接口。"
    },
    {
      title: "继承的树形结构",
      content: "Java 的类继承关系像一棵倒置的树：祖先节点在上，子孙节点在下。每一个子节点只有一个父节点，但一个父节点可以有多个子节点。最底层没有子类的类称为叶子节点。",
      javaCompare: "树形继承结构体现了“一个父亲，多个孩子”的关系，而不是“多个父亲，一个孩子”。"
    },
    {
      title: "方法重写 Override",
      content: "重写发生在父子类之间。子类定义一个与父类方法头完全相同的方法，但方法体不同，从而替换或隐藏父类原来的行为。重写的三个条件是：发生在不同类体中、方法头相同、方法体不同。",
      javaCompare: "重写 Override 发生在父子类之间；重载 Overload 发生在同一个类中，方法名相同但参数列表不同。"
    },
    {
      title: "子类对象创建顺序：先父后子",
      content: "创建子类对象时，必须先初始化父类部分，再初始化子类部分。子类构造方法默认会先调用父类的无参构造方法；如果父类只有带参构造方法，子类必须在构造方法第一句使用 super(参数) 指定调用父类构造方法。",
      javaCompare: "this 表示当前对象；super 表示父类部分，用于调用父类构造方法或父类成员。"
    }
  ],
  codeExamples: [
    {
      title: "四种访问权限的完整演示",
      code: `// 文件：com/example/Welcome.java
package com.example;

public class Welcome {
    public int pub = 1;
    protected int pro = 2;
    int def = 3;
    private int pri = 4;

    public void showInSameClass() {
        System.out.println(pub);
        System.out.println(pro);
        System.out.println(def);
        System.out.println(pri);
    }
}

// 文件：com/example/First.java
package com.example;

public class First {
    public void accessWelcome() {
        Welcome w = new Welcome();
        System.out.println(w.pub);
        System.out.println(w.pro);
        System.out.println(w.def);
        // System.out.println(w.pri); // private 不可见
    }
}

// 文件：unit/Tools.java
package unit;
import com.example.Welcome;

public class Tools extends Welcome {
    public void accessFromSubclass() {
        System.out.println(pub);
        System.out.println(pro);
        // System.out.println(def); // default 跨包不可见
        // System.out.println(pri); // private 不可见
    }
}`,
      explanation: "这个示例把四种访问权限放到不同包和不同类中验证。同包下除 private 外都可见；不同包子类可以访问 public 和 protected；不同包非子类只能访问 public。"
    },
    {
      title: "继承的基本使用",
      code: `public class People {
    String name;
    int age;

    public People() {
    }

    public People(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void speak() {
        System.out.println(name + " can speak.");
    }

    public void run() {
        System.out.println(name + " can run.");
    }
}

public class Student extends People {
    // 类体为空，但已经继承了 People 的非私有成员
}

public class Test {
    public static void main(String[] args) {
        Student s = new Student();
        s.name = "Charlie";
        s.age = 20;
        s.speak();
        s.run();
    }
}`,
      explanation: "Student 类体中没有重新声明 name、age、speak()、run()，但它通过 extends People 自动拥有这些非私有成员。这体现了继承的代码复用价值。"
    },
    {
      title: "方法重写 Override",
      code: `public class People {
    String name;

    public People(String name) {
        this.name = name;
    }

    public void speak() {
        System.out.println(name + " speaks Chinese.");
    }
}

public class Student extends People {
    public Student(String name) {
        super(name);
    }

    @Override
    public void speak() {
        System.out.println(name + " speaks English!");
    }

    public void learnFrench() {
        System.out.println(name + " is learning French.");
    }
}

public class Test {
    public static void main(String[] args) {
        People p = new People("父亲");
        p.speak();

        Student s = new Student("查理");
        s.speak();
        s.learnFrench();
    }
}`,
      explanation: "Student 重写了 People 的 speak() 方法，所以 Student 对象调用 speak() 时执行子类版本。@Override 注解可以帮助编译器检查是否真的构成重写。"
    },
    {
      title: "super 调用父类带参构造方法",
      code: `public class Father {
    String name;

    public Father(String name) {
        this.name = name;
        System.out.println("父类构造方法被调用");
    }
}

public class Son extends Father {
    public Son(String name) {
        super(name);
        System.out.println("子类构造方法被调用");
    }
}

public class Test {
    public static void main(String[] args) {
        Son s = new Son("小明");
    }
}`,
      explanation: "父类 Father 只有带参构造方法，没有无参构造方法，所以 Son 的构造方法必须在第一句写 super(name)。对象创建顺序是先父类构造，再子类构造。"
    }
  ],
  quiz: [
    {
      question: "以下哪个访问权限修饰符修饰的成员，在“不同包下的子类”中也能访问？",
      options: ["private", "default", "protected", "只有 public"],
      answer: "protected",
      explanation: "protected 允许不同包下的子类访问。default 跨包后子类也看不到，private 只在本类可见。"
    },
    {
      question: "以下哪个关键字用于声明一个类继承另一个类？",
      options: ["implements", "extends", "super", "import"],
      answer: "extends",
      explanation: "extends 是继承关键字，格式为 class 子类名 extends 父类名。implements 用于实现接口。"
    },
    {
      question: "Java 为什么采用单继承？",
      options: ["为了代码更简洁", "为了运行速度更快", "为了避免二义性", "因为 JDK 限制"],
      answer: "为了避免二义性",
      explanation: "如果一个子类同时继承多个父类，而多个父类有同名成员，就会出现无法判断来源的二义性问题。"
    },
    {
      question: "关于方法重写 Override，以下说法正确的是？",
      options: ["重写可以发生在同一个类中", "重写时方法头可以不同", "重写时方法头相同、方法体不同", "重写必须使用 @Override 注解"],
      answer: "重写时方法头相同、方法体不同",
      explanation: "重写发生在父子类之间，要求方法头完全相同，子类提供不同的方法体。@Override 推荐使用，但不是语法必须。"
    },
    {
      question: "子类对象创建时，构造方法的调用顺序是？",
      options: ["先子类后父类", "先父类后子类", "只调用子类", "随机调用"],
      answer: "先父类后子类",
      explanation: "创建子类对象时，必须先初始化父类部分，再初始化子类自己的部分。"
    }
  ],
  dragMatch: [
    {
      left: "public",
      right: "公有的，全局可见，所有包都能访问"
    },
    {
      left: "protected",
      right: "受保护的，同包和不同包子类可访问"
    },
    {
      left: "default（不写）",
      right: "缺省权限，仅同一包下可访问"
    },
    {
      left: "private",
      right: "私有的，仅本类自身可访问"
    },
    {
      left: "extends",
      right: "Java 继承关键字，用于声明父子类关系"
    },
    {
      left: "父类 Super Class",
      right: "被继承的类，提供共有属性和方法"
    },
    {
      left: "子类 Sub Class",
      right: "继承父类的类，可以增加新的属性和方法"
    },
    {
      left: "单继承",
      right: "Java 中一个子类有且只有一个直接父类"
    },
    {
      left: "二义性",
      right: "多继承中无法判断成员来源的问题"
    },
    {
      left: "重写 Override",
      right: "子类定义与父类方法头相同、方法体不同的方法"
    }
  ],
  flow: [
    "执行 new Student(\"小明\")，JVM 准备创建 Student 子类对象。",
    "JVM 发现 Student 继承自 People，因此先进入父类构造方法，初始化父类部分。",
    "父类构造方法执行完毕后，父类中的属性和方法对应的对象部分已经准备完成。",
    "JVM 回到 Student 的构造方法，继续执行子类自己的初始化逻辑。",
    "子类构造方法执行完毕后，Student 对象创建完成。",
    "最终对象同时包含父类部分和子类部分，可以使用继承来的非私有成员，也可以使用子类新增成员。"
  ],
  exercises: [
    {
      question: "写出四种访问权限修饰符在“同一包不同类”场景下的可见性。",
      answer: "public ✅、protected ✅、default ✅、private ❌。同一包下，除了 private 只属于本类以外，其他三个修饰符都可以在不同类中访问。"
    },
    {
      question: "定义一个 Animal 父类，包含属性 name 和方法 eat()；再定义 Cat 子类继承 Animal，并重写 eat() 方法输出“猫吃鱼”。",
      answer: `class Animal {
    String name;
    void eat() {
        System.out.println("动物吃东西");
    }
}

class Cat extends Animal {
    @Override
    void eat() {
        System.out.println("猫吃鱼");
    }
}`
    },
    {
      question: "解释上转型对象的含义。如果 Animal a = new Cat(); a.eat(); 会输出什么？为什么？",
      answer: "会输出 Cat 类重写后的 eat() 内容，例如“猫吃鱼”。虽然变量 a 的声明类型是 Animal，但实际引用的是 Cat 对象，调用被重写的方法时会根据实际对象类型执行子类版本。"
    },
    {
      question: "以下代码为什么会编译错误？class Father { Father(int age) { } } class Son extends Father { Son(String name) { } }",
      answer: "因为 Father 只有带参构造方法，没有无参构造方法。Son 构造方法如果不写 super(age)，系统会默认调用 super()，但父类没有 Father()，所以编译错误。修正方式是在 Son 构造方法第一句写 super(age)。"
    },
    {
      question: "简述重写 Override 和重载 Overload 的区别。",
      answer: "重写发生在父子类之间，方法头完全相同、方法体不同，用来改变继承来的行为；重载发生在同一个类中，方法名相同但参数列表不同，用来提供同一功能的不同参数版本。"
    }
  ],
  conclusion: [
    "本节课的核心是两条线：一条是访问权限的深入复习，另一条是继承机制的正式引入。",
    "访问权限是封装的基础，通过限制访问范围来保护数据。可以用口诀记忆：public 水壶随便用，protected 家族内部用，default 室友一起用，private 自己单独用。",
    "继承的本质是复用：父类写好共有内容，子类直接继承使用，不需要重复编写。",
    "继承不是全盘照抄，private 成员不能被子类直接访问，子类还可以通过重写 Override 改变不满意的父类方法。",
    "Java 是单继承，一个子类只有一个直接父类，这样可以避免多个父类存在同名成员时造成二义性。",
    "子类对象创建时遵循先父后子：如果父类只有带参构造方法，子类必须在构造方法第一句使用 super(参数)。"
  ]
}
