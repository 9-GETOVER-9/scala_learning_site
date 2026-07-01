# 课程总结

---

## 1. 课程基本信息

- **课程 ID 建议**：`java-inheritance-syntax-uml`
- **课程标题**：Java 类的继承深入及 UML 类图入门
- **所属章节**：Java 类与对象 → 继承
- **上课日期**：2025-10-16
- **知识点标签**：`继承` `extends` `父类` `子类` `访问器` `get/set` `构造方法调用链` `UML类图` `树形结构` `private继承`
- **难度等级**：巩固
- **适合对象**：已学习继承基本概念、需要深入理解继承细节的初学者
- **本节课一句话概括**：本节课在继承概念基础上深入讲解了继承语法细节——包括如何通过访问器间接访问父类私有属性、子类构造方法必须先调用父类构造方法的规则、继承的树形结构，以及 UML 类图的基本画法和在项目需求分析中的作用。

---

## 2. 课堂摘要

```text
1. 课堂首先通过代码演示巩固了继承的核心结论——子类继承父类的非私有属性和方法，不做任何额外编码即可使用父类的 name、age、speak() 等成员。
2. 重点演示了"私有属性通过访问器间接访问"的模式——虽然子类不能直接访问父类的 private 成员，但可以通过父类提供的 public get/set 方法"搭建桥梁"间接操作。
3. 通过代码报错引出关键规则——子类构造方法必须先调用父类的某个构造方法。如果父类只有带参构造方法，子类必须用 super(参数) 明确指定。
4. 老师再次强调了 Java 的树形继承结构（倒置二叉树）——每个子节点有且只有一个父节点，不可能出现两个父类，否则产生二义性。
5. 简要介绍了 UML 类图的基本结构（类名、属性、方法三层），以及 UML 在软件开发需求分析中的作用——它是程序员与甲方沟通的桥梁。
```

---

## 3. 本节课学习目标

```text
1. 能写出继承的完整语法：class 子类名 extends 父类名 { }，并说出 extends 是关键字。
2. 能解释"子类继承父类的非私有成员"的具体含义——private 不可直接继承，但可通过访问器间接访问。
3. 能编写子类通过父类的 public get/set 方法间接访问父类私有属性的完整代码。
4. 能画出三层继承的树形结构图（祖先→父亲→兄弟/叶子），并说明每个节点有且只有一个父节点。
5. 能说出子类构造方法调用父类构造方法的规则——如果父类没有无参构造方法，子类必须在第一句用 super(参数) 显式调用。
6. 能识别 UML 类图的基本构成（三层矩形框：类名 | 属性 | 方法），并了解其在软件开发需求分析中的作用。
```

---

## 4. 知识点详细整理

### 知识点 1：子类继承父类成员的具体规则

#### 这个知识点是什么？

在同一个包下，子类继承父类中**除 private 以外**的所有成员变量和方法。继承后，子类就像自己声明了这些成员一样，可以直接使用。

#### 课堂中的理解方式

老师通过代码直接演示了"子类里面一行代码没写，但什么都能用"的效果：

```java
// 父类 People：有 name, age, speak(), run() 等
// 子类 Student extends People：类体完全空白

Student s = new Student();
s.name = "Charlie";     // ✅ 继承来的 name
s.age = 20;             // ✅ 继承来的 age
s.speak();              // ✅ 继承来的 speak()
s.run();                // ✅ 继承来的 run()
```

> "我到目前为止，这个 Student 里面依然一行代码也没有写。但是我可以有名字、有年龄、可以说话、可以跑步——父亲的非私有东西我都继承过来了。"

#### 为什么继承有"非私有"的限制？

- **public、protected、default** → 子类可见，直接继承
- **private** → 仅本类可见，子类看不到

老师解释："私有成员只属于类本身。你父亲的私有财产，比如说银行卡——是他的，你不能直接用。但你可以让他帮你取钱（通过访问器）。"

---

### 知识点 2：通过访问器间接访问父类的私有属性

#### 这个知识点是什么？

当父类的某个属性被声明为 `private` 时，子类无法直接访问它。但父类可以提供**一对 public 的 get/set 方法（访问器）**，子类通过调用这些方法来间接操作私有属性。

#### 为什么学？

真实项目中，属性通常都设为 `private`（封装原则），子类需要通过访问器来操作父类的私有数据。这是一种桥梁模式，既保护了数据安全，又不妨碍子类使用。

#### 基本语法

```java
// 父类
public class People {
    private String color;  // 私有属性——子类无法直接访问

    // 访问器——桥梁
    public void setColor(String color) {
        this.color = color;
    }

    public String getColor() {
        return this.color;
    }
}

// 子类
public class Student extends People {
    // 无法直接写 this.color 或 super.color
    // 但可以通过访问器操作
    public void setMyColor(String c) {
        setColor(c);       // ✅ 调用继承来的 public setColor()
    }

    public String getMyColor() {
        return getColor(); // ✅ 调用继承来的 public getColor()
    }
}
```

#### 课堂中的理解方式

老师用"造桥"的比喻：

> "这个 color 是个私有属性，S（子类对象）访问不到它。那我想用 color 怎么办？我们可以搭建一个桥梁——这个桥梁就是我们学过的访问器。我通过 setColor 和 getColor 这座桥，一样能够着它。"

#### 常见错误

```java
// ❌ 错误：子类直接访问父类的 private 属性
public class Student extends People {
    public void show() {
        System.out.println(color);  // 编译错误！color 是 private
    }
}

// ✅ 正确：通过访问器间接访问
public class Student extends People {
    public void show() {
        System.out.println(getColor());  // 通过 public 的 getColor()
    }
}
```

---

### 知识点 3：子类构造方法必须先调用父类构造方法

#### 这个知识点是什么？

创建子类对象时，**子类的构造方法必须先调用父类的某个构造方法**。如果子类构造方法中没有显式写出 `super(...)`，系统默认调用父类的**无参构造方法**。

#### 为什么？

> "你要想有，必须先有父亲。没有父亲，一定不会有你。"

从内存分配和初始化顺序来看：父类的成员变量必须先初始化完毕，子类才能在此基础上初始化自己的成员。

#### 两种情况

**情况 1：父类有无参构造方法（系统自动提供或手动定义）**

子类构造方法无需显式写 `super()`——系统自动调用父类的无参构造方法。

```java
public class Father {
    // 系统自动提供无参构造方法 Father() { }
}

public class Son extends Father {
    public Son() {
        // 系统自动在此处插入 super(); —— 调用父类的无参构造方法
        System.out.println("子类构造完成");
    }
}
```

**情况 2：父类只有带参数的构造方法**

子类构造方法**必须**在第一句用 `super(参数)` 显式调用父类的构造方法。

```java
public class Father {
    String name;
    public Father(String name) {  // 只有带参构造方法，没有无参的
        this.name = name;
    }
}

public class Son extends Father {
    public Son(String name) {
        super(name);  // 必须写！而且必须是第一句！
        // 如果不写 super(name)，编译错误——父类没有无参构造方法可调用
    }
}
```

#### 课堂代码演示——报错与修复

老师课上演示了一个经典的报错场景：

```java
// ❌ 报错版本
class Father {
    String name;
    Father(String name) { this.name = name; }  // 只有带参构造方法
}
class Son extends Father {
    // 编译错误！因为 Father 没有无参构造方法
    // 系统找不到 Father() 来调用
}

// ✅ 修复版本 1：子类用 super 明确调用
class Son extends Father {
    Son(String name) {
        super(name);  // 明确调用父类的 Father(String name)
    }
}

// ✅ 修复版本 2：给父类补一个无参构造方法
class Father {
    String name;
    Father() { }                    // 补上无参构造方法
    Father(String name) { this.name = name; }
}
```

#### 注意事项

- `super(...)` 必须是子类构造方法的**第一句**
- 如果子类构造方法中没有写 `super(...)` 也没有写 `this(...)`，系统默认插入 `super();`
- 如果父类没有无参构造方法且子类没有显式调用 `super(参数)`，编译报错

---

### 知识点 4：继承的树形结构（倒置二叉树）

#### 这个知识点是什么？

Java 中所有类按照继承关系形成一棵**倒置的树**（根在上，枝叶在下），称为**类层次结构**。

```
            Object（所有类的终极祖先）
              │
           Person（父类/祖先节点）
           ┌──┴──┐
      Student  Teacher（兄弟节点/父亲节点）
        ┌┴┐
    Boy  Girl（叶子节点——没有子类的类）
```

#### 命名规则

| 层级 | 名称 | 说明 |
|------|------|------|
| 最顶层 | 祖先节点（root） | 树根，如 Object 类 |
| 中间层 | 父亲节点 | 被继承的类 |
| 同一层 | 兄弟节点 | 拥有同一个父类的多个类 |
| 最底层 | 叶子节点（leaf） | 没有子类的类 |

#### 核心规则

> "每一个子节点有且只有一个父类。不可能有两个父类——那是错的。"

老师强调用 `final` 修饰的类不能再有子类——这样的类就是"叶子节点"（类比：丁克家庭，不生孩子的）。

#### 为什么画成倒置的？

> "我们一般的树是根在下面，枝叶在上面。而 Java 的继承树是倒置的——根在最上面，枝叶在下面。这样从上到下就是祖先→父亲→儿子→孙子的顺序。"

---

### 知识点 5：成员访问权限在继承中保持不变

#### 这个知识点是什么？

子类继承父类的成员时，成员的**访问权限保持不变**——public 的还是 public，protected 的还是 protected，不会因为被继承而改变。

#### 为什么学？

理解这一点有助于掌握**重写时的访问权限规则**——子类重写父类方法时，不能降低访问权限（比如父类是 public，子类不能改成 protected），但可以扩大访问权限。

```java
// ✅ 可以——扩大访问权限
// 父类：protected void speak()
// 子类：public void speak()       // protected → public（扩大）

// ❌ 不可以——降低访问权限
// 父类：public void speak()
// 子类：protected void speak()    // public → protected（降低）——编译错误！
```

---

### 知识点 6：UML 类图入门

#### 这个知识点是什么？

**UML（Unified Modeling Language，统一建模语言）** 是一种用于软件系统设计的标准化建模语言。其中**类图（Class Diagram）**是最常用的一种图，用于描述类的结构和类之间的关系。

#### 类图的基本构成

一个 UML 类图用**三层矩形框**表示一个类：

```
┌─────────────────┐
│    类名          │  ← 第一层：类名
├─────────────────┤
│  属性（变量）     │  ← 第二层：成员变量
│  - name: String  │     - 表示 private
│  + age: int      │     + 表示 public
│  # score: double │     # 表示 protected
├─────────────────┤
│  方法（操作）     │  ← 第三层：成员方法
│  + getName(): String
│  + setAge(int): void
└─────────────────┘
```

#### UML 访问权限符号

| UML 符号 | Java 对应 | 含义 |
|:-------:|----------|------|
| `+` | public | 公有 |
| `#` | protected | 受保护 |
| `~` | default（不写） | 包内可见 |
| `-` | private | 私有 |

#### 继承关系在 UML 中的表示

用**带空心三角箭头的实线**从子类指向父类：

```
   People
    ▲
    │ (空心三角箭头)
    │
  Student
```

#### 为什么学 UML？

> "UML 是程序员与甲方之间的桥梁。甲方不懂代码，程序员不懂业务。中间这个人（需求分析师）用 UML 把甲方的业务需求画成图，程序员看图写代码。"

老师用具体的项目流程来说明：
- **甲方**（会计/工商/国贸等业务人员）：提出业务需求，"我们要一个利润分析系统"
- **需求分析师**：将业务语言转化为 UML 图
- **程序员**：根据 UML 类图来设计和编写代码

#### 课堂提示

> "UML 是一门完整的课程，至少 60 个学时才能讲完。你们不需要现在全部掌握，但**类图**是最重要的，建议自学一下。"

---

## 5. 重点概念对比

| 概念 A | 概念 B | 区别 |
|---|---|---|
| 直接继承（同包） | 间接访问（访问器） | 子类直接用父类的非私有成员 vs 子类通过 get/set 间接操作父类的私有成员 |
| 父类有无参构造 | 父类只有带参构造 | 子类构造方法自动调用父类无参构造 vs 子类必须用 super(参数) 显式调用 |
| 父类的 private 成员 | 父类的 public 访问器 | 子类看不见、无法直接访问 vs 子类可以通过访问器间接操作 |
| 继承（extends） | 不继承 | 复用父类代码，自动拥有父类非私有成员 vs 每个类独立编写所有代码 |
| UML 类图 | Java 代码 | 设计阶段的"蓝图"（可视化建模） vs 实现阶段的"施工"（编码） |
| 树根（祖先节点） | 叶子节点（leaf） | 被其他类继承的顶层类 vs 不再被任何类继承的终点类（如 final 类） |
| super | this | 代表父类对象的引用 vs 代表当前对象的引用 |

---

## 6. 代码示例整理

### 示例 1：子类通过访问器间接访问父类私有属性

**适用知识点**：private 属性的继承限制、访问器模式

```java
// 父类——有一个私有属性 color
public class People {
    private String color;  // 私有——子类看不到！

    // 无参构造方法
    public People() { }

    // 访问器——桥梁
    public void setColor(String color) {
        this.color = color;
    }

    public String getColor() {
        return this.color;
    }

    // 还有一个普通的公开属性
    public String name;
    protected int age;
}
```

```java
// 子类——继承 People
public class Student extends People {
    // 什么也不用写，已经拥有了 name、age、setColor()、getColor()

    public void showInfo() {
        // System.out.println(color);     // ❌ 编译错误！color 是 private
        System.out.println(getColor());   // ✅ 通过访问器获取
        System.out.println(name);         // ✅ 直接继承来的
        System.out.println(age);          // ✅ 直接继承来的
    }
}
```

```java
// 测试类
public class Test {
    public static void main(String[] args) {
        Student s = new Student();
        s.name = "小明";
        s.age = 20;
        s.setColor("green");     // ✅ 通过访问器设置私有属性

        System.out.println("姓名：" + s.name);           // 小明
        System.out.println("年龄：" + s.age);            // 20
        System.out.println("颜色：" + s.getColor());     // green
    }
}
```

**运行结果**：
```
姓名：小明
年龄：20
颜色：green
```

**解释**：子类 Student 不能直接访问父类的 private color，但通过调用从父类继承来的 public setColor() 和 getColor() 方法，仍然可以间接操作它。这就是**封装 + 继承**的标准做法——私有数据通过公开方法访问。

**初学者提示**：在实际项目中，**所有属性都建议设为 private**，然后用 public 的 get/set 方法提供访问。子类也遵循同样的原则——用访问器而不是直接操作父类属性。

---

### 示例 2：子类构造方法调用父类构造方法的两种方式

**适用知识点**：构造方法调用链、super 关键字

```java
// 父类
public class Father {
    String name;

    // 构造方法 1：无参
    public Father() {
        System.out.println("Father() 无参构造方法被调用");
    }

    // 构造方法 2：带参
    public Father(String name) {
        this.name = name;
        System.out.println("Father(String) 带参构造方法被调用，name = " + name);
    }
}
```

```java
// 子类
public class Son extends Father {
    String school;

    // 构造方法 1：不写 super —— 系统自动调用 Father()
    public Son() {
        // 系统自动插入 super(); → 调用 Father()
        this.school = "默认学校";
        System.out.println("Son() 无参构造方法被调用");
    }

    // 构造方法 2：显式用 super(参数) —— 调用 Father(String)
    public Son(String name, String school) {
        super(name);  // 必须写在第一句！
        this.school = school;
        System.out.println("Son(String, String) 构造方法被调用");
    }
}
```

```java
// 测试类
public class Test {
    public static void main(String[] args) {
        System.out.println("=== 创建 Son() ===");
        Son s1 = new Son();

        System.out.println("\n=== 创建 Son(\"小明\", \"北大\") ===");
        Son s2 = new Son("小明", "北大");

        System.out.println("\n=== 验证属性 ===");
        System.out.println("s1: name=" + s1.name + ", school=" + s1.school);
        System.out.println("s2: name=" + s2.name + ", school=" + s2.school);
    }
}
```

**运行结果**：
```
=== 创建 Son() ===
Father() 无参构造方法被调用
Son() 无参构造方法被调用

=== 创建 Son("小明", "北大") ===
Father(String) 带参构造方法被调用，name = 小明
Son(String, String) 构造方法被调用

=== 验证属性 ===
s1: name=null, school=默认学校
s2: name=小明, school=北大
```

**解释**：
- `new Son()` → 自动调用 Father() → 然后执行 Son() 的方法体
- `new Son("小明", "北大")` → super("小明") 调用 Father("小明") → 然后执行 Son(…) 的方法体
- s1.name 是 null，因为 Father() 没有给 name 赋值（成员变量默认 null）

**初学者提示**：
- `super(参数)` 必须是子类构造方法的**第一句代码**
- 如果子类构造方法第一句既不是 `super(...)` 也不是 `this(...)`，系统默认插入 `super();`
- 常见错误：写了 `super(name)` 但放到了第二句——会编译报错

---

### 示例 3：UML 类图对应的完整 Java 代码

**适用知识点**：UML 类图、继承、封装

**UML 类图表示**：
```
┌─────────────────────────┐
│        Animal            │
├─────────────────────────┤
│ - name: String           │
│ # age: int               │
├─────────────────────────┤
│ + Animal()               │
│ + Animal(String, int)    │
│ + getName(): String      │
│ + setName(String): void  │
│ + eat(): void            │
└─────────────────────────┘
           △
           │ (继承)
           │
┌─────────────────────────┐
│          Dog             │
├─────────────────────────┤
│ - breed: String          │
├─────────────────────────┤
│ + Dog()                  │
│ + Dog(String, int, String)│
│ + getBreed(): String     │
│ + bark(): void           │
└─────────────────────────┘
```

**对应的 Java 代码**：

```java
// === 父类 Animal ===
public class Animal {
    private String name;      // - 表示 private
    protected int age;        // # 表示 protected

    public Animal() { }       // + 表示 public

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public void eat() {
        System.out.println(name + " is eating.");
    }
}

// === 子类 Dog ===
public class Dog extends Animal {
    private String breed;     // 品种

    public Dog() { }

    public Dog(String name, int age, String breed) {
        super(name, age);     // 调用父类构造方法
        this.breed = breed;
    }

    public String getBreed() { return breed; }

    public void bark() {
        System.out.println(getName() + " says: Woof!");
    }
}
```

**解释**：
- UML 中的 `-` 对应 Java 的 `private`，`#` 对应 `protected`，`+` 对应 `public`
- 三层结构：第一层类名 → 第二层属性 → 第三层方法
- 子类 Dog 的构造方法必须用 `super(name, age)` 调用父类的带参构造方法

**初学者提示**：画 UML 类图时，属性和方法通常只写**签名**（名称和类型），不写完整的方法体实现。

---

## 7. 课堂案例整理

### 案例 1：私有属性的"桥梁"——安全存取模式

**课堂场景**：老师通过 People（父类）和 Student（子类）的代码演示。

People 有一个 `private String color` 属性，Student 想要设置和获取它。

**类比解释**：
> "你的私人日记本（private color），别人不能直接翻看。但你可以告诉别人：'你想知道什么颜色，就问我（getColor）'；'你想改颜色，也告诉我（setColor）'。通过你——本类自己——作为桥梁，别人就能间接访问这些私有信息。"

**教学要点**：
- private 保证了**直接访问的禁止**
- public 访问器提供了**间接访问的通道**
- 这种模式在实际项目中是标准做法
- 可以在 set 方法中加入验证逻辑（如颜色不能为空）

---

### 案例 2：UML——"翻译官"的角色

**课堂场景**：老师用一个实际的项目合作流程来说明 UML 的作用。

```
甲方（不懂技术的业务人员）
      │
      │ "我要一个客户管理系统"
      ▼
需求分析师（"翻译官"）→ 画 UML 类图
      │
      │ UML 类图：Customer(name, phone, ...)
      │          Order(customer, amount, ...)
      ▼
程序员（不懂业务的开发人员）→ 按 UML 类图写代码
```

**类比**：
> "甲方和程序员就像两个说不同语言的人。甲方说'利润''年鉴''资产负债表'，程序员说'类''方法''数据库'。中间需要一个翻译——这个翻译就是把业务语言转换成 UML 图的需求分析师。"

**教学要点**：
- UML 是沟通工具，不是编程语言
- 类图是 UML 中最常用的一种图
- 真实项目中，程序员通常不直接接触甲方
- 学习类图可以帮助理解大型项目的设计文档

---

## 8. 易错点总结

```text
易错点 1：以为子类能直接访问父类的 private 属性——实际不能。子类必须通过父类提供的 public 访问器（get/set）间接操作。这体现了封装原则：私有数据由本类的方法控制访问。

易错点 2：子类构造方法忘记调用 super——当父类没有无参构造方法时，子类构造方法不写 super(参数) 会导致编译错误。记住：子类构造方法的第一句必须是 super(参数) 或 this(参数)。

易错点 3：把 extends 拼写成 extend——关键字是 extends（有 s），不是 extend。class Son extends Father ✅ / class Son extend Father ❌。

易错点 4：以为继承树可以有多个根——Java 中所有类最终都继承自 Object 类（java.lang.Object），所以整个继承体系只有一个终极根节点。

易错点 5：把 UML 类图当成编程语言——UML 是设计工具，不是代码。类图中的属性只写名称和类型（如 - name: String），不需要写完整的赋值和实现。
```

---

## 9. 小测验题目

```text
题目 1：在同一个包下，子类不能继承父类的哪个成员？
A. public 成员  B. protected 成员  C. default 成员  D. private 成员
正确答案：D
解析：同包下 public、protected、default 都能被继承，只有 private 是本类独有的，子类无法直接访问。

题目 2：子类访问父类 private 属性的正确方式是？
A. 直接用 super.color  B. 直接用 this.color  C. 通过父类的 public get/set 方法  D. 把 private 改成 public
正确答案：C
解析：子类不能直接访问父类的 private 成员，必须通过父类提供的 public 访问器（get/set）间接操作。

题目 3：如果父类只有带参构造方法 Father(String name)，子类 Son 的构造方法必须怎么做？
A. 什么也不用写  B. 在第一句写 super(name)  C. 删除父类的构造方法  D. 在任意位置写 super(name)
正确答案：B
解析：子类构造方法第一句必须用 super(参数) 调用父类的带参构造方法。不能省略，也不能放在其他位置。

题目 4：以下关于 UML 类图的描述，正确的是？
A. UML 类图直接生成 Java 代码  B. 类图用两层矩形框表示  C. 类图中 # 表示 protected  D. UML 中 - 表示 public
正确答案：C
解析：UML 类图中，+ 表示 public，# 表示 protected，- 表示 private。类图是三层矩形框（类名→属性→方法）。

题目 5：关于子类构造方法的调用顺序，以下说法正确的是？
A. 先执行子类构造方法，再执行父类构造方法
B. 先执行父类构造方法，再执行子类构造方法
C. 只执行子类构造方法
D. 随机执行
正确答案：B
解析：子类构造方法总是先调用父类的构造方法（super），父类初始化完成后才执行子类构造方法的其余部分。这是"先有父亲，再有孩子"的原则。
```

---

## 10. 拖拽匹配素材

```text
1. extends —— Java 中声明继承的关键字，class 子类 extends 父类
2. super —— 代表父类对象的引用，子类构造方法中用 super(参数) 调用父类构造方法
3. 访问器（get/set） —— 提供对私有属性的间接访问——get 取值，set 赋值
4. 倒置二叉树 —— Java 继承体系的树形结构，根在上、枝叶在下
5. 祖先节点 —— 继承树的最顶层，是所有类的起点（如 Object 类）
6. 叶子节点 —— 继承树的终点，不再被任何类继承（如 final 类）
7. UML —— 统一建模语言，用于软件系统的可视化设计
8. 类图 —— UML 中最常用的图，用三层矩形表示类的结构
9. +（UML 符号） —— 对应 Java 中的 public 访问权限
10. -（UML 符号） —— 对应 Java 中的 private 访问权限
```

---

## 11. 流程动画素材

```text
【子类对象创建全过程——构造方法调用链】

步骤 1：JVM 执行 new Student("小明", "北大")
步骤 2：JVM 进入 Student 的构造方法 Student(String name, String school)
步骤 3：第一句是 super(name) → JVM 暂停 Student 的初始化
步骤 4：跳转到父类 People 的构造方法 People(String name)
步骤 5：执行父类构造方法体：this.name = name → 父类部分初始化完成
步骤 6：返回子类构造方法，继续执行：this.school = school → 子类部分初始化完成
步骤 7：Student 对象创建完毕。整个对象包含"父类属性 + 子类属性"
```

---

## 12. 课后练习题

```text
练习题 1：定义一个 Person 父类，包含 private String idCard（身份证号）。再定义 Student 子类，要求能通过访问器获取和修改 idCard。写出完整代码。
知识点：private 属性的继承限制、访问器模式
参考答案：
class Person {
    private String idCard;
    public void setIdCard(String idCard) { this.idCard = idCard; }
    public String getIdCard() { return this.idCard; }
}
class Student extends Person {
    public void showIdCard() {
        System.out.println("身份证号：" + getIdCard());  // 通过访问器
    }
}
解题思路：子类不能直接访问 private idCard，但继承了 public 的 setIdCard() 和 getIdCard()，通过它们间接操作。

练习题 2：写出一个只定义了带参构造方法的父类，以及一个正确调用它的子类。解释为什么必须写 super。
知识点：子类构造方法的 super 调用规则
参考答案：
class Father {
    String name;
    Father(String name) { this.name = name; }  // 只有带参构造方法
}
class Son extends Father {
    Son(String name) {
        super(name);  // 必须显式调用，否则编译错误
    }
}
解题思路：父类没有无参构造方法，系统不会自动提供，子类必须用 super(参数) 明确告诉 JVM 调用哪一个构造方法。

练习题 3：画出以下代码对应的 UML 类图。
class Vehicle { private String brand; public void run() { } }
class Car extends Vehicle { private int seats; public void honk() { } }
知识点：UML 类图的基本画法
参考答案：
Vehicle 类框（三层）：属性 -brand: String；方法 +run(): void
Car 类框（三层）：属性 -seats: int；方法 +honk(): void
用空心三角箭头从 Car 指向 Vehicle（表示继承）
解题思路：每个类用三层矩形表示，属性和方法只写签名（名称+类型/返回值），访问权限用 UML 符号（+/-/#）标记。

练习题 4：判断以下说法正误并解释：
"A 类继承了 B 类，所以 A 类中包含了 B 类的所有成员，包括 B 类的 private 成员。"
知识点：继承的范围限制
参考答案：错误。子类确实在内存中包含了父类的所有成员（包括 private），但子类的代码不能直接访问父类的 private 成员。private 成员存在但"不可见"——只有通过父类提供的 public 方法（如访问器）才能间接操作。
解题思路："包含"和"可访问"是两个概念。子类对象的内存中确实有父类的 private 变量空间，但 Java 的访问控制禁止子类代码直接读写它。

练习题 5：为什么 Java 类层次结构中 Object 类被称为"终极祖先"？
知识点：Java 继承体系的根
参考答案：Java 中所有类都直接或间接继承自 java.lang.Object 类。如果你定义一个类时不写 extends，系统默认让它 extends Object。Object 提供了所有类共有的基本方法（如 toString()、equals()、hashCode() 等）。这些方法可以被所有子类继承或重写。例如 Student 的默认父类是 Object，而 Student extends People 时，People 也继承自 Object，所以 Student 间接继承了 Object 的所有方法。
解题思路：Java 的单根继承体系保证了所有对象都有一组共同的行为（如转字符串、比较等）。
```

---

## 13. 本节课知识结构图文字版

```
Java 类的继承深入及 UML 类图入门
├── 继承细节深入
│   ├── 继承规则（同包下）
│   │   ├── public / protected / default → 子类直接继承
│   │   └── private → 子类不可直接访问
│   ├── 访问私有属性的桥梁模式
│   │   ├── 父类提供 public get/set 方法（访问器）
│   │   └── 子类通过访问器间接操作 private 属性
│   ├── 子类构造方法调用链
│   │   ├── 规则：子类构造必须先调用父类构造
│   │   ├── 父类有无参构造 → 子类自动调用 super()
│   │   └── 父类只有带参构造 → 子类必须写 super(参数)
│   └── 树形继承结构
│       ├── 倒置二叉树（根在上，枝叶在下）
│       ├── 每个子节点有且只有一个父节点
│       └── 叶子节点 = final 类或没有子类的类
│
├── UML 类图入门
│   ├── UML 的概念：统一建模语言
│   ├── 类图的三层结构
│   │   ├── 第一层：类名
│   │   ├── 第二层：属性（+ 公有 / # 受保护 / - 私有）
│   │   └── 第三层：方法（含参数和返回值类型）
│   ├── 继承关系的 UML 表示
│   │   └── 空心三角箭头实线：子类 → 父类
│   └── UML 在项目中的作用
│       └── 需求分析师 ↔ UML 图 ↔ 程序员（沟通桥梁）
│
└── 课程安排（第 9-12 周）
    ├── 第 9 周：线上课 + 作业
    ├── 第 10 周：最后一章 + 最后一个实验
    ├── 第 11 周：复习
    └── 第 12 周：考试
```

---

## 14. 课后总结

```text
1. 继承的核心是"复用"——父类的非私有成员子类自动拥有，不用重复写代码。但继承不是"全盘照搬"——private 成员不直接可见，重写可以让子类按自己的需要改变父类方法的行为。
2. private 属性的"访问器桥梁"模式是实际开发的标准做法——所有属性设为 private，需要访问时通过 public 的 get/set 方法，既能保护数据又能灵活控制。
3. 子类构造方法必须先调用父类构造方法——"没有父亲就没有孩子"。当父类只有带参构造方法时，super(参数) 必须写在子类构造方法的第一句。
4. UML 类图是程序员必备的设计沟通工具——它不是编程语言，但能帮助你在写代码之前理清"有哪些类、每个类有什么属性和方法、类之间是什么关系"。
5. 距离考试还有约 4 周——老师强调本周开始检查笔记、完成作业和实验报告。建议把笔记按章节整理一遍，特别是"区别题"（重写 vs 重载、全局变量 vs 局部变量等）要重点记忆。
```
