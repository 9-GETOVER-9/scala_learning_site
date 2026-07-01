{
  id: "java-method-overload-constructor",
  title: "方法分类、构造方法与重载详解",
  chapter: "Java 类与对象",
  date: "2025-09-18",
  tags: [
    "实例方法",
    "类方法",
    "static",
    "构造方法",
    "缺省构造",
    "重载",
    "值传递",
    "址传递"
  ],
  summary: [
    "本节课首先明确了方法由方法头（header）和方法体（body）两部分构成，返回值类型由 return 的值的类型决定。",
    "课堂中重点讲解了实例方法与类方法的区别：无 static 的是实例方法，由对象调用；有 static 的是类方法，由类名调用。",
    "老师通过“同一个模特换不同衣服走 T 台”的类比帮助理解构造方法重载：方法名相同，但参数列表不同。",
    "本节课还讲解了缺省构造方法：即使程序员不写，系统也会自动生成一个无参构造方法来实例化对象。",
    "最后通过“子晴和高子晴”的类比，区分了值传递（传副本，互不影响）和址传递（传地址，一处变处处变）。"
  ],
  keyPoints: [
    {
      "title": "方法由方法头和方法体组成",
      "content": "方法头用于说明方法的访问权限、是否 static、返回值类型、方法名和参数列表；方法体用大括号包裹，写具体执行的语句。返回值类型要和 return 后面的值匹配，void 表示没有返回值。",
      "javaCompare": "方法头像“菜单上的菜名和规则”，方法体像“真正做菜的步骤”。"
    },
    {
      "title": "实例方法",
      "content": "实例方法是不带 static 的方法，必须先 new 出对象，再通过对象名调用。它适合描述某一个具体对象能做的事情，例如某个学生介绍自己、某个账户显示余额。",
      "javaCompare": "无 static → 属于对象 → 对象名.方法名() 调用。"
    },
    {
      "title": "类方法",
      "content": "类方法使用 static 修饰，属于类本身，可以直接通过类名调用。类方法在对象生成之前就已经存在，所以不能直接访问实例变量，也不能在其中使用 this。",
      "javaCompare": "有 static → 属于类 → 类名.方法名() 调用。"
    },
    {
      "title": "构造方法的三个特点",
      "content": "构造方法是创建对象时自动调用的特殊方法。它的名字必须和类名完全相同；没有返回值类型，连 void 都不写；通常用于给对象的属性设置初始值。",
      "javaCompare": "new Person() 中的 Person() 就是在调用构造方法。"
    },
    {
      "title": "缺省构造方法",
      "content": "如果一个类中没有手动写任何构造方法，Java 会自动提供一个无参构造方法，方法体为空，保证 new 类名() 可以执行。一旦自己写了构造方法，系统就不再自动补无参构造。",
      "javaCompare": "不写构造时，Java 自动给一个空的 public 类名(){}。"
    },
    {
      "title": "方法重载（Overload）",
      "content": "重载发生在同一个类中，允许多个方法同名，但参数列表必须不同。课堂总结为“一同三不同”：方法名相同，参数个数、参数类型或参数顺序不同。仅修改返回值类型不构成重载。",
      "javaCompare": "同一个模特不变，衣服变化；方法名不变，参数变化。"
    },
    {
      "title": "值传递与址传递",
      "content": "基本类型参数传递的是值的副本，方法里改副本不影响外部原值；数组、对象等引用类型传递的是地址，多个引用指向同一块内存时，方法内修改会影响外部数据。",
      "javaCompare": "值传递像复印件，址传递像共享同一份原件。"
    }
  ],
  codeExamples: [
    {
      title: "构造方法重载",
      code: `public class Person {
    String name;
    int age;

    // 构造方法1：无参（缺省）
    public Person() {
        name = "未命名";
        age = 0;
    }

    // 构造方法2：一个参数（重载）
    public Person(String name) {
        this.name = name;
        this.age = 0;
    }

    // 构造方法3：两个参数（重载）
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void show() {
        System.out.println("姓名：" + name + "，年龄：" + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Person p1 = new Person();               // 调用构造方法1
        Person p2 = new Person("Tom");          // 调用构造方法2
        Person p3 = new Person("Alice", 20);    // 调用构造方法3

        p1.show();  // 姓名：未命名，年龄：0
        p2.show();  // 姓名：Tom，年龄：0
        p3.show();  // 姓名：Alice，年龄：20
    }
}`,
      explanation: "同一个 Person 类中写了三个 Person 构造方法，方法名相同，但参数列表不同，所以构成重载。new Person()、new Person(\"Tom\")、new Person(\"Alice\", 20) 会根据参数自动匹配对应构造方法。"
    },
    {
      title: "实例方法与类方法的区别",
      code: `public class Counter {
    int instanceCount = 0;        // 实例变量
    static int classCount = 0;    // 类变量（static）

    // 实例方法
    public void addInstance() {
        instanceCount++;
    }

    // 类方法
    public static void addClass() {
        classCount++;
        // instanceCount++;  // 错误！类方法不能直接访问实例变量
    }
}

public class Main {
    public static void main(String[] args) {
        Counter.addClass();                     // 类名调用类方法
        System.out.println(Counter.classCount); // 1

        Counter c = new Counter();
        c.addInstance();                        // 对象调用实例方法
        System.out.println(c.instanceCount);    // 1
    }
}`,
      explanation: "addClass() 有 static，属于类，直接用 Counter.addClass() 调用；addInstance() 没有 static，必须 new Counter() 后通过对象调用。static 方法中不能直接访问非 static 的 instanceCount。"
    },
    {
      title: "值传递与址传递对比",
      code: `public class PassDemo {
    // 值传递——基本类型
    public static void changeValue(int x) {
        x = 100;   // 只改了副本
    }

    // 址传递——数组（引用类型）
    public static void changeArray(int[] arr) {
        arr[0] = 100;  // 改了原数组！
    }

    public static void main(String[] args) {
        // 值传递：原值不变
        int a = 10;
        changeValue(a);
        System.out.println("值传递后 a = " + a);   // 10（没变）

        // 址传递：原数组被修改
        int[] arr = {10, 20, 30};
        changeArray(arr);
        System.out.println("址传递后 arr[0] = " + arr[0]);  // 100（变了！）
    }
}`,
      explanation: "int 是基本类型，传入方法的是副本，changeValue 改不到外面的 a；数组是引用类型，changeArray 拿到的是数组地址，修改 arr[0] 会影响 main 方法中的原数组。"
    },
    {
      title: "只改返回值类型不是重载",
      code: `public class OverloadErrorDemo {
    public void test() {
        System.out.println("无返回值方法");
    }

    // 下面这种写法是错误的：参数列表完全一样，只改返回值类型，不算重载
    // public int test() {
    //     return 1;
    // }

    // 正确重载：参数列表不同
    public int test(int n) {
        return n + 1;
    }
}`,
      explanation: "重载判断看方法名和参数列表，不看返回值类型。两个 test() 如果参数完全一样，仅返回值不同，Java 无法区分调用哪个方法。"
    }
  ],
  quiz: [
    {
      "question": "以下哪个是构造方法的正确声明？",
      "options": [
        "public void Person() { }",
        "public Person() { }",
        "public static Person() { }",
        "public int Person() { }"
      ],
      "answer": "public Person() { }",
      "explanation": "构造方法没有返回值类型，连 void 都不能写，且名称要与类名完全一致。"
    },
    {
      "question": "方法重载的“一同三不同”中，“三不同”指的是？",
      "options": [
        "返回值不同、方法名不同、参数不同",
        "参数个数不同、参数类型不同、参数顺序不同",
        "修饰符不同、返回值不同、方法体不同",
        "类不同、包不同、方法名不同"
      ],
      "answer": "参数个数不同、参数类型不同、参数顺序不同",
      "explanation": "重载要求同一类中方法名相同，但参数列表不同；不同可以体现在个数、类型或顺序上。"
    },
    {
      "question": "以下关于 static 方法的说法正确的是？",
      "options": [
        "static 方法必须由对象调用",
        "static 方法可以直接访问实例变量",
        "static 方法属于类，由类名直接调用",
        "static 方法中可以使用 this"
      ],
      "answer": "static 方法属于类，由类名直接调用",
      "explanation": "static 方法属于类本身，类加载后就存在，通常使用 类名.方法名() 调用，不能直接使用 this 或访问实例变量。"
    },
    {
      "question": "值传递和址传递的区别是？",
      "options": [
        "值传递传地址，址传递传值",
        "值传递传副本（互不影响），址传递传地址（共享修改）",
        "两者没有区别",
        "值传递只用于对象，址传递只用于基本类型"
      ],
      "answer": "值传递传副本（互不影响），址传递传地址（共享修改）",
      "explanation": "基本类型传值的副本，引用类型传地址。数组或对象在方法内被修改时，外部通常也能看到变化。"
    },
    {
      "question": "以下代码的输出是什么？int x = 5; changeValue(x); System.out.println(x); 其中 changeValue 方法为 void changeValue(int n) { n = 100; }",
      "options": [
        "5",
        "100",
        "编译错误",
        "null"
      ],
      "answer": "5",
      "explanation": "int 是基本类型，传入方法的是 x 的副本，方法内把 n 改成 100 不会影响外面的 x。"
    }
  ],
  dragMatch: [
    {
      "left": "实例方法",
      "right": "无 static 修饰，必须由对象来调用"
    },
    {
      "left": "类方法",
      "right": "有 static 修饰，直接用类名调用"
    },
    {
      "left": "构造方法",
      "right": "与类同名、无返回值、创建对象时自动调用"
    },
    {
      "left": "缺省构造方法",
      "right": "程序员不写时系统自动生成的无参构造方法"
    },
    {
      "left": "重载（Overload）",
      "right": "同一类中方法名相同、参数列表不同（一同三不同）"
    },
    {
      "left": "值传递",
      "right": "基本类型参数传递，传的是副本，互不影响"
    },
    {
      "left": "址传递",
      "right": "引用类型参数传递，传的是地址，一处变处处变"
    },
    {
      "left": "形参",
      "right": "方法定义时声明的占位变量"
    },
    {
      "left": "实参",
      "right": "方法调用时传入的具体数值"
    },
    {
      "left": "static",
      "right": "关键字，修饰的成员属于类而非对象"
    }
  ],
  flow: [
    "程序开始加载类，static 类方法和 static 类变量先属于类本身。",
    "如果调用类方法，可以直接写 类名.方法名()，不需要先创建对象。",
    "如果要调用实例方法，必须先使用 new 类名(...) 创建对象。",
    "执行 new 时，Java 根据括号中的实参个数、类型和顺序匹配对应构造方法。",
    "如果类中没有任何构造方法，Java 会自动提供一个无参缺省构造方法。",
    "匹配到构造方法后，构造方法自动执行，并初始化对象属性。",
    "对象创建完成后，可以通过 对象名.实例方法() 调用实例方法。",
    "调用方法时，实参传给形参；基本类型传副本，引用类型传地址。",
    "如果引用类型在方法内部被修改，外部对象或数组可能同步变化，即“一处变，处处变”。"
  ],
  exercises: [
    {
      "question": "写一个 Book 类，包含 title 和 price 两个属性，并提供无参构造、一个参数构造、两个参数构造三个重载构造方法。",
      "answer": "参考思路：定义 public class Book，在类中写 String title; double price;。分别写 public Book()、public Book(String title)、public Book(String title, double price)，在构造方法中用 this.title 和 this.price 给成员变量赋值。"
    },
    {
      "question": "写一个 Tool 类，包含一个 static 方法 add(int a, int b)，在 main 方法中不创建对象，直接调用它并输出结果。",
      "answer": "参考答案：public static int add(int a, int b) { return a + b; } 调用时写 Tool.add(1, 2);。static 方法属于类，可以用类名直接调用。"
    },
    {
      "question": "判断下面方法是否构成重载：public void test(int a) 与 public int test(int b)。说明原因。",
      "answer": "不构成重载。两个方法的参数列表都是一个 int，只有返回值类型不同；Java 判断重载不看返回值，只看方法名和参数列表。"
    },
    {
      "question": "写一个方法 changeArray(int[] arr)，把 arr[0] 改成 999，并在 main 中验证方法外数组是否变化。",
      "answer": "参考思路：int[] nums = {1,2,3}; 调用 changeArray(nums); 后输出 nums[0]。结果会变成 999，因为数组是引用类型，传递的是地址。"
    }
  ],
  conclusion: [
    "本节课的核心是理解方法的两大分类（实例方法/类方法）、构造方法的特性与重载机制、以及参数传递的两种方式（值/址）。",
    "学习方法时要特别注意 static 的用法：实例方法和实例变量属于对象，类方法和类变量属于类本身，所有对象共享。",
    "重载是后续学习多态的基础，“一同三不同”（名称相同，个数/类型/顺序不同）是区分重载和其他概念的关键。",
    "值传递和址传递的区别会影响方法内部修改是否影响外部数据：基本类型安全，引用类型可能“一处变，处处变”。",
    "课后练习时要多写构造方法和方法调用代码，重点检查构造方法是否误写了 void，重载是否真的改变了参数列表。"
  ]
}