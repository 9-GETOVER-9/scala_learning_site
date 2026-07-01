{
  id: "java-oop-polymorphism-upcast",
  title: "面向对象三大特征与多态详解——重写、super、final 与上转型对象",
  chapter: "Java 类与对象 → 继承 → 多态",
  date: "2025-10-16",
  tags: [
    "封装",
    "继承",
    "多态",
    "重写",
    "重载",
    "super",
    "final",
    "上转型对象",
    "构造方法链",
    "访问权限"
  ],
  summary: [
    "课堂首先通过代码演示验证了创建子类对象时先创建父类对象的构造方法调用链：父类构造方法先执行，子类构造方法后执行。",
    "老师通过属性继承但值不继承的演示说明：子类继承父类的属性名，但属性值需要子类自己设置，否则成员变量会显示默认值，如 String 为 null。",
    "本节课正式总结面向对象三大特征：封装、继承、多态，其中多态强调对象不变但表现形式多样。",
    "课堂深入讲解重写 Override 的完整规则：不同类体、方法头完全相同、方法体不同，并且子类重写时不能降低访问权限。",
    "本节课引入 final 关键字的三种用法：修饰类表示不能被继承，修饰变量表示常量，修饰方法表示不能被重写。",
    "最后重点讲解上转型对象：父类引用指向子类对象，调用方法时执行的是子类重写后的版本，这是 Java 多态的核心机制。"
  ],
  keyPoints: [
    {
      title: "子类对象创建时的构造方法调用链",
      content: "创建子类对象时，JVM 会先完成父类部分的初始化，再完成子类部分的初始化。也就是说，new Son() 时会先调用 Father 的构造方法，再调用 Son 的构造方法。如果子类构造方法中没有显式写 super(...)，系统会默认调用父类的无参构造方法 super()。",
      javaCompare: "与普通方法不同，构造方法不是手动调用的，而是在 new 对象时由 JVM 自动触发。"
    },
    {
      title: "super 关键字的作用",
      content: "super 代表父类对象的引用，常用于在子类构造方法中调用父类构造方法，或者在子类中访问父类被继承的成员。super(参数) 必须写在子类构造方法的第一句，否则会编译错误。",
      javaCompare: "this 代表当前对象；super 代表父类对象部分。this(...) 和 super(...) 都要求放在构造方法第一句，因此不能同时出现在同一个构造方法中。"
    },
    {
      title: "继承属性但不继承属性值",
      content: "子类继承的是父类的属性定义和方法能力，而不是父类对象中已经保存的具体值。比如父类有 name 属性，子类也可以使用 name，但如果子类没有给 name 赋值，输出结果可能是 null。",
      javaCompare: "成员变量有默认值，String 默认 null；局部变量没有默认值，使用前必须初始化。"
    },
    {
      title: "面向对象三大特征",
      content: "封装是把属性和方法组织在类体中，并通过访问权限控制外部访问；继承是子类复用父类的非私有成员；多态是同一个对象或同一个方法调用在不同场景下表现出不同形态。",
      javaCompare: "封装解决安全访问问题，继承解决代码复用问题，多态解决统一调用和行为差异问题。"
    },
    {
      title: "方法重写 Override 的完整规则",
      content: "重写发生在父子类之间，要求子类方法与父类方法的方法头完全相同，包括方法名、参数列表和返回值类型；方法体不同，由子类提供新的实现。子类重写后，子类对象调用该方法时执行子类版本。",
      javaCompare: "重写是不同类、同头不同体；重载是同类、同名不同参。"
    },
    {
      title: "重写不能降低访问权限",
      content: "子类重写父类方法时，访问权限只能保持不变或扩大，不能缩小。比如父类方法是 public，子类重写时也必须是 public；父类是 protected，子类可以改为 public，但不能改为 private。",
      javaCompare: "这是为了保证父类引用指向子类对象时，原本能访问的方法不会因为子类替换而突然不可见。"
    },
    {
      title: "final 关键字",
      content: "final 表示最终的、不可改变的。它修饰类时表示类不能被继承；修饰变量时表示常量，赋值后不能修改；修饰方法时表示方法不能被子类重写。",
      javaCompare: "final 类像继承树的叶子节点；final 方法像最终版本；final 变量像数学常量 PI。"
    },
    {
      title: "上转型对象 Upcasting",
      content: "上转型对象指父类类型变量引用子类对象，例如 Animal a = new Dog();。此时 a 的编译类型是 Animal，但实际对象是 Dog，调用被重写的方法时执行 Dog 的版本。",
      javaCompare: "上转型可以把不同子类对象统一放进父类类型变量或数组中，是多态编程的基础。"
    }
  ],
  codeExamples: [
    {
      title: "构造方法调用链完整演示",
      code: `public class GrandFather {
    public GrandFather() {
        System.out.println("① GrandFather 构造方法");
    }
}

public class Father extends GrandFather {
    public Father() {
        System.out.println("② Father 构造方法");
    }

    public Father(String name) {
        System.out.println("② Father(String) 构造方法，name=" + name);
    }
}

public class Son extends Father {
    public Son() {
        System.out.println("③ Son 构造方法");
    }

    public Son(String name) {
        super(name);
        System.out.println("③ Son(String) 构造方法");
    }
}

public class Test {
    public static void main(String[] args) {
        System.out.println("=== 无参构造 ===");
        new Son();

        System.out.println("=== 带参构造 ===");
        new Son("小明");
    }
}`,
      explanation: "创建 Son 对象时，构造方法会按 GrandFather → Father → Son 的顺序执行。super(name) 显式调用父类带参构造方法，但父类 Father 自己又会先调用 GrandFather 的构造方法。"
    },
    {
      title: "重写时访问权限可以扩大但不能缩小",
      code: `public class Father {
    protected void show() {
        System.out.println("Father 的 show 方法");
    }

    public void display() {
        System.out.println("Father 的 display 方法");
    }
}

public class Son extends Father {
    @Override
    public void show() {
        System.out.println("Son 重写 show：protected 扩大为 public");
    }

    // 下面这样写会编译错误：不能降低父类方法的可见性
    // @Override
    // protected void display() {
    //     System.out.println("错误示例");
    // }
}

public class Test {
    public static void main(String[] args) {
        Son s = new Son();
        s.show();
        s.display();
    }
}`,
      explanation: "父类 show 是 protected，子类可以扩大为 public；父类 display 是 public，子类不能缩小为 protected 或 private。"
    },
    {
      title: "上转型对象与多态经典演示",
      code: `public class Animal {
    String name;

    public Animal(String name) {
        this.name = name;
    }

    public void speak() {
        System.out.println(name + "发出声音");
    }

    public void eat() {
        System.out.println(name + "吃东西");
    }
}

public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    @Override
    public void speak() {
        System.out.println(name + "汪汪叫！");
    }

    public void wagTail() {
        System.out.println(name + "摇尾巴");
    }
}

public class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }

    @Override
    public void speak() {
        System.out.println(name + "喵喵叫！");
    }
}

public class Test {
    public static void main(String[] args) {
        Animal a1 = new Dog("小黑");
        Animal a2 = new Cat("小白");

        a1.speak();
        a2.speak();
        a1.eat();

        Animal[] pets = {new Dog("阿黄"), new Cat("花花"), new Dog("大毛")};
        for (Animal pet : pets) {
            pet.speak();
        }
    }
}`,
      explanation: "a1 和 a2 的声明类型都是 Animal，但实际对象分别是 Dog 和 Cat。调用 speak() 时，JVM 会在运行时根据实际对象类型执行各自重写后的方法。"
    },
    {
      title: "final 修饰类、变量和方法",
      code: `final class FinalClass {
    public void show() {
        System.out.println("这个类不能被继承");
    }
}

public class Father {
    public final void importantRule() {
        System.out.println("这是不可重写的规则");
    }
}

public class ConstantDemo {
    public static void main(String[] args) {
        final double PI = 3.1415926;
        System.out.println("圆周率：" + PI);

        // PI = 3.14; // 编译错误：final 变量不能再次赋值
    }
}`,
      explanation: "final class 不能被继承，final method 不能被重写，final variable 是常量，赋值后不能修改。"
    }
  ],
  quiz: [
    {
      question: "面向对象的三大特征不包括以下哪一个？",
      options: ["封装", "继承", "抽象", "多态"],
      answer: "抽象",
      explanation: "面向对象的三大特征是封装、继承、多态。抽象是重要概念，但不是本节课所说的三大特征之一。"
    },
    {
      question: "final 关键字修饰类时表示什么？",
      options: ["该类不能被实例化", "该类不能被继承", "该类的方法不能被调用", "该类是抽象类"],
      answer: "该类不能被继承",
      explanation: "final 修饰类表示该类是最终类，不能再有子类，也可以理解为继承树中的叶子节点。"
    },
    {
      question: "以下哪个代码是正确的上转型对象写法？",
      options: ["Dog d = new Animal();", "Animal a = new Dog();", "Animal a = (Dog) new Animal();", "Dog d = (Animal) new Dog();"],
      answer: "Animal a = new Dog();",
      explanation: "上转型对象是父类引用指向子类对象，沿继承树从子类向父类方向转换。"
    },
    {
      question: "子类重写父类方法时，关于访问权限的正确说法是？",
      options: ["必须和父类完全相同", "可以任意修改", "可以扩大但不能缩小", "可以缩小但不能扩大"],
      answer: "可以扩大但不能缩小",
      explanation: "重写时访问权限不能低于父类方法。父类 protected 可以改为 public，但父类 public 不能改为 protected。"
    },
    {
      question: "关于 super 关键字，以下说法错误的是？",
      options: ["super 代表父类对象的引用", "super(参数) 必须写在子类构造方法第一句", "super 可以帮助子类调用父类构造方法", "super 可以调用父类任意 private 方法"],
      answer: "super 可以调用父类任意 private 方法",
      explanation: "super 也受访问权限限制，不能直接访问父类 private 成员。"
    },
    {
      question: "Animal a = new Dog(); a.speak(); 如果 Dog 重写了 speak()，会调用哪个版本？",
      options: ["Animal 的 speak()", "Dog 的 speak()", "两个都调用", "编译错误"],
      answer: "Dog 的 speak()",
      explanation: "上转型对象调用被重写的方法时，根据运行时实际对象类型决定，实际对象是 Dog，所以调用 Dog 的版本。"
    }
  ],
  dragMatch: [
    { left: "封装", right: "类将属性和方法包装在类体内部，并通过访问权限控制外部访问" },
    { left: "继承", right: "子类自动获得父类的非私有属性和方法，使用 extends 关键字" },
    { left: "多态", right: "同一个对象或方法调用可以表现出多种形态" },
    { left: "重写 Override", right: "子类定义与父类方法头相同、方法体不同的方法" },
    { left: "重载 Overload", right: "同一个类中方法名相同、参数列表不同" },
    { left: "super", right: "代表父类对象的引用，常在子类构造方法第一句调用父类构造方法" },
    { left: "final 类", right: "不能被继承的类，是继承树的叶子节点" },
    { left: "final 变量", right: "常量，一旦赋值就不能修改" },
    { left: "final 方法", right: "不能被子类重写的方法" },
    { left: "上转型对象", right: "父类引用指向子类对象，调用方法时执行子类重写后的版本" }
  ],
  flow: [
    "声明一个父类类型变量：Animal a;",
    "创建一个子类对象：new Dog(\"旺财\");",
    "JVM 创建 Dog 对象时，自动先调用 Animal 的构造方法，再执行 Dog 的构造方法。",
    "把子类对象引用赋值给父类变量：Animal a = new Dog(\"旺财\");",
    "通过父类变量调用方法：a.speak();",
    "JVM 在运行时检查 a 实际指向的对象类型，发现实际对象是 Dog。",
    "JVM 查找 Dog 类中是否重写 speak()，如果已经重写，则执行 Dog 的版本。",
    "输出 Dog 的行为结果，例如“旺财汪汪叫”。",
    "如果调用的是 Dog 独有而 Animal 中没有的方法，例如 wagTail()，则编译不通过。"
  ],
  exercises: [
    {
      question: "写出面向对象的三大特征，并用生活例子分别解释。",
      answer: "封装：把数据和操作数据的方法放在一个类中，只暴露必要接口，如手机把复杂电路封装在内部；继承：子类获得父类非私有成员，如儿子继承父亲的姓氏和部分特征；多态：同一个方法调用根据对象类型表现不同，如 animal.speak() 中狗汪汪叫、猫喵喵叫。"
    },
    {
      question: "分析代码：class A { public void show(){System.out.println(\"A\");} } class B extends A { public void show(){System.out.println(\"B\");} } A obj = new B(); obj.show(); 输出什么？为什么？",
      answer: "输出 B。obj 的声明类型是 A，但实际引用的是 B 对象。B 重写了 show() 方法，运行时 JVM 根据实际对象类型调用 B 的 show()。"
    },
    {
      question: "以下代码能否编译？class Father { public Father(String s) { } } class Son extends Father { public Son() { } }",
      answer: "不能编译。Father 只有带参构造方法，没有无参构造方法。Son 构造方法没有写 super(参数)，系统默认调用 Father()，但 Father() 不存在。修复方式是在 Son 构造方法第一句写 super(\"默认值\"); 或给 Father 补无参构造方法。"
    },
    {
      question: "简述 final 关键字的三种用法并各给一个示例。",
      answer: "final 修饰类表示不能被继承：final class A { }；final 修饰变量表示常量：final int MAX = 100;；final 修饰方法表示不能被重写：public final void rule() { }。"
    },
    {
      question: "定义 Animal 父类，Dog 和 Cat 子类分别重写 speak()，再写 makeSound(Animal a) 方法实现传入什么动物就输出什么叫声。",
      answer: "参考答案：class Animal { public void speak(){ System.out.println(\"动物叫\"); } } class Dog extends Animal { @Override public void speak(){ System.out.println(\"汪汪\"); } } class Cat extends Animal { @Override public void speak(){ System.out.println(\"喵喵\"); } } class Test { public static void makeSound(Animal a){ a.speak(); } public static void main(String[] args){ makeSound(new Dog()); makeSound(new Cat()); } }。"
    }
  ],
  conclusion: [
    "本节课的核心是从继承过渡到多态，理解对象不变但表现形式可以变化。",
    "构造方法调用链必须牢记：创建子类对象时先父类后子类，super(参数) 必须放在子类构造方法第一句。",
    "子类继承的是父类的属性和方法定义，不是某个父类对象已有的属性值。",
    "重写与重载是多态的重要形式：重写是父子类之间同头不同体，重载是同一个类中同名不同参。",
    "final 表示最终不可变，可以修饰类、变量和方法，分别对应不能继承、常量、不能重写。",
    "上转型对象是 Java 多态编程的核心：父类引用指向子类对象，方法调用看运行时真实对象类型。"
  ]
}
