# 课程总结

## 1. 课程基本信息

- **课程 ID 建议**：`scala-01-env-var-val`
- **课程标题**：Scala 入门——开发环境搭建、第一个程序、变量与常量
- **所属章节**：Scala 开发环境与运行方式
- **上课日期**：2026-03-03（第一节课 10:05-10:50）
- **知识点标签**：环境搭建、Eclipse、var、val、object、def、main 方法
- **难度等级**：初级
- **适合对象**：有 Java 基础、初次接触 Scala 的学生
- **本节课一句话概括**：安装 Scala 开发环境，在 Eclipse 中创建第一个 Scala 项目，编写并运行第一个 Scala 程序，理解 var（变量）和 val（常量）的核心区别。

---

## 2. 课堂摘要

1. 本节课首先强调了本学期的学习要求，希望学生踏实学习，多动手敲代码，提高打字速度至每分钟 120-150 个字母。
2. 课堂中说明了 Java 和 Scala 的定位区别：Java 用于大数据存储（Hadoop 的母语），Scala 用于内存计算（Spark 平台的核心语言）。
3. 老师讲解了软件安装顺序：必须先安装 JDK，再安装 Scala IDE 或 Eclipse Scala 插件，顺序颠倒会导致注册表冲突。
4. 本节课在 Eclipse 中演示了创建 Scala 项目、包、类（Scala class）、特质（Scala trait）和单例对象（Scala object）的操作流程。
5. 老师通过 `var i = 10; val j = 11` 的例子，让学生直观感受 Scala 变量声明比 Java 更简洁（可以省略分号和类型）。
6. 最后老师通过一个简单的 Scala 程序——创建类、定义入口方法、new 对象并输出值——展示了 Scala 的基本程序结构。

---

## 3. 本节课学习目标

学完本节课后，你应该能够：

1. 理解 Scala 与 Java 的关系，知道 Scala 在大数据领域（特别是 Spark）中的作用。
2. 在 Eclipse 中成功创建并运行一个 Scala 项目。
3. 能区分 Scala class、Scala trait、Scala object 三种结构。
4. 用 `var` 定义可以重新赋值的变量，用 `val` 定义不可重新赋值的常量。
5. 理解 Scala 中分号是可选的，类型声明可以省略（由编译器自动推断）。
6. 能写出包含 `def main(args: Array[String])` 入口方法的简单 Scala 程序。

---

## 4. 知识点详细整理

### 知识点 1：Scala 是什么？为什么学它？

#### 这个知识点是什么？

Scala 是一门运行在 Java 虚拟机（JVM）上的编程语言，名字来源于 "Scalable Language"（可扩展的语言）。它同时支持面向对象编程和函数式编程两种范式。

#### 为什么要学它？

Scala 是 Apache Spark（目前最流行的大数据内存计算框架）的核心语言。Spark 的底层就是用 Scala 写的。学 Scala 就等于掌握了大数据计算领域的"母语"。相比 Java，Scala 代码更精简——Java 需要十几行代码完成的功能，Scala 可能一两行就搞定。

#### 基本语法

无特定语法——这是一个概念性知识点。

#### 课堂中的理解方式

老师用"碗、锅、稻田"的比喻解释技术视野：只看碗里的（只学当前内容）、看着锅里的（预判下一步）、看着稻田（看清整个行业趋势）。Scala 就是让你从"用 Java 写每一行代码"升级到"用更高级的语言思考数据"。

#### 初学者容易犯的错误

1. 把 Scala 当成和 Java 完全不同的新语言，产生抵触心理。
2. 不理解 Scala 和 Java 的互补关系，认为学了 Scala 就不用学 Java 了。
3. 以为 Scala 只会用在"大数据"里，忽略它在其他领域的应用。

#### 正确示例

无需代码示例——这是一个概念性知识点。

#### 示例解释

无需解释。

---

### 知识点 2：Scala 开发环境——安装顺序和 Eclipse 使用

#### 这个知识点是什么？

Scala 开发需要两个核心软件：JDK（Java Development Kit）和 Scala IDE（或 Eclipse + Scala 插件）。安装顺序很关键。

#### 为什么要学它？

环境搭不好，后面什么都做不了。许多初学者因为环境报错而放弃，实际上往往是安装顺序或注册表冲突导致的。

#### 基本语法

无代码语法——这是操作类知识点。

安装顺序（课堂强调）：

```text
第 1 步：安装 JDK（如 JDK 1.8）
第 2 步：安装 Scala IDE 或 Eclipse 的 Scala 插件
```

> ⚠️ 如果先装 Scala 插件，再装 JDK，会导致注册表冲突，两个都可能装不上。

#### 课堂中的理解方式

老师建议台式机用户在虚拟机（如 VMware）中安装编程环境：编程软件放虚拟机里，不需要时关掉，不占内存、不写注册表。这种"隔离"思路可以有效避免环境冲突。

#### 初学者容易犯的错误

1. 安装顺序搞反：先装 Eclipse 的 Scala 插件，再装 JDK——会导致注册表冲突。
2. 装了多个 JDK 版本（如 JDK 8 和 JDK 11），环境变量混乱。
3. 不知道在哪里创建 Scala 项目：应该选 File → New → Scala Project。

#### 正确示例

在 Eclipse 中创建 Scala 项目的步骤（课堂演示）：

```text
File → New → Scala Project → 输入项目名（如 First）→ Next → Finish
```

然后在 SRC 文件夹上右键 → New → Scala class → 输入类名 → Finish。

#### 示例解释

这是 Eclipse 中创建 Scala 项目的标准操作流程，与创建 Java 项目流程几乎相同。

---

### 知识点 3：Scala class、Scala trait、Scala object 的区别

#### 这个知识点是什么？

在 Eclipse 中创建 Scala 文件时，有三种常见选项：Scala class（类）、Scala trait（特质）和 Scala object（单例对象）。

#### 为什么要学它？

这三种结构是 Scala 程序的基础。理解它们的区别，才能知道什么时候该用哪个。

#### 基本语法

```scala
// Scala class —— 像 Java 的类
class Test {
  // 属性和方法
}

// Scala trait —— 像 Java 的接口，但可以有具体实现
trait MyTrait {
  // 抽象方法或具体方法
}

// Scala object —— 单例对象，只有一个实例
object Main {
  def main(args: Array[String]): Unit = {
    // 程序入口
  }
}
```

#### 课堂中的理解方式

老师对比 Java 解释：
- **class**：和 Java 的 class 含义相同，用来定义类的模板。
- **trait**：比 Java 的 interface 更强大，可以包含具体实现方法。老师提到"Scala 没有接口"就是这个意思——trait 代替了接口的角色。
- **object**：单例对象。当 object 的名字和某个 class 名字相同时，它就称为那个 class 的"伴生对象"（companion object）。老师特别指出，这是本学期学习的重点内容。

#### 初学者容易犯的错误

1. 不知道在哪里写 main 方法——main 方法应该写在 object 里，而不是 class 里。
2. 把 object 和 class 搞混——object 是单例的，不需要 new。
3. 把所有代码都写在一个 class 里，不区分 class 和 object 的职责。

#### 正确示例

```scala
// 定义一个类
class Test {
  val k = 21
}

// 定义程序的入口对象
object Main {
  def main(args: Array[String]): Unit = {
    val c = new Test()  // 创建 Test 类的对象
    println(c.k)        // 访问对象的属性 k
  }
}
```

#### 示例解释

- `class Test` 定义了一个简单的类，只有一个属性 `k`（值为 21）。
- `object Main` 是程序的入口，`main` 方法是执行的起点。
- `val c = new Test()` 用 `new` 关键字创建 Test 类的一个对象。
- `println(c.k)` 输出对象 c 的属性 k 的值（21）。
- 注意：在 Scala 中，程序的入口方法写在 `object` 中，而不是 `class` 中——这与 Java 不同。

---

### 知识点 4：var 和 val——变量与常量

#### 这个知识点是什么？

在 Scala 中，用 `var` 定义可以重新赋值的变量，用 `val` 定义不可重新赋值的常量。

#### 为什么要学它？

这是 Scala 中最基础、最常用的两个关键字。Scala 推崇"不可变性"（immutability），鼓励尽量使用 `val`。理解 var 和 val 是写出正确 Scala 程序的第一步。

#### 基本语法

```scala
var 变量名: 类型 = 初始值    // 可重新赋值
val 常量名: 类型 = 初始值    // 不可重新赋值
```

其中 `: 类型` 可以省略，Scala 编译器会自动推断。

#### 课堂中的理解方式

老师在 Eclipse 中现场演示：

```scala
var i = 10   // 变量 i，可以被修改
val j = 11   // 常量 j，不能被修改
val k = i + j  // 常量 k = 21
```

- `var i = 10` 后面没有分号——Scala 允许省略分号。
- 没有写类型（如 `Int`）——Scala 从值 `10` 自动推断出 i 是 Int 类型。
- 老师强调 Scala 的设计哲学：**尽可能减少程序员的手动操作**——能省则省。

#### 初学者容易犯的错误

1. 把 `val` 定义的常量当成可以被修改的变量。
2. 忘记给变量赋初始值——Scala 不允许只声明不赋值的变量。
3. 混淆 Scala 的 `val` 和 Java 的 `final`——语法不同但作用类似。
4. 所有变量都用 `var`，不习惯用 `val`。

#### 正确示例

```scala
// 正确：val 定义不可变常量
val pi = 3.14

// 正确：var 定义可变变量
var count = 0
count = 1    // 可以修改
count = 2    // 可以再次修改

// 正确：显式声明类型
val age: Int = 18
var name: String = "Tom"
```

#### 示例解释

- `val pi = 3.14`：圆周率是不变的，应该用 `val`。
- `var count = 0`：计数值需要不断增加，所以用 `var`。
- `val age: Int = 18`：显式声明了类型 `Int`，更清晰。
- 建议：能确定值不变的，一律用 `val`；确实需要修改的，才用 `var`。

---

### 知识点 5：Scala 的 main 方法和 def 关键字

#### 这个知识点是什么？

Scala 程序的入口是一个名为 `main` 的方法，它定义在 `object` 中，使用 `def` 关键字声明。

#### 为什么要学它？

任何一个可以运行的 Scala 程序都需要有一个 main 方法作为启动点。`def` 是 Scala 中定义方法/函数的关键字，后面几乎每节课都会用到。

#### 基本语法

```scala
object 对象名 {
  def main(args: Array[String]): Unit = {
    // 程序代码
  }
}
```

- `def`：定义方法的关键字
- `main`：方法名（固定的入口方法名称）
- `args: Array[String]`：参数列表，args 是字符串数组
- `: Unit`：返回值类型，Unit 相当于 Java 中的 void（表示没有返回值）
- `=`：连接方法头和方法体
- `{ ... }`：方法体，包含要执行的代码

#### 课堂中的理解方式

老师在 Eclipse 中展示了如何写 main 方法。与 Java 对比：

Java 写法：
```java
public static void main(String[] args) { ... }
```

Scala 写法：
```scala
def main(args: Array[String]): Unit = { ... }
```

- Scala 中类型写在变量名后面（用 `:` 分隔）。
- 没有 `public static` 修饰符（object 中的方法默认就是静态的、公有的）。

#### 初学者容易犯的错误

1. 把 main 方法写在 class 里而不是 object 里。
2. 忘记写 `=` 号（等于号连接方法头和体）。
3. 把 `Array[String]` 写成 Java 风格的 `String[]`。
4. 方法名写错——必须是 `main`，不能是 `Main` 或其他。

#### 正确示例

```scala
object HelloWorld {
  def main(args: Array[String]): Unit = {
    println("Hello, Scala!")
  }
}
```

#### 示例解释

- `object HelloWorld`：定义单例对象。
- `def main(args: Array[String]): Unit`：定义入口方法。
- `println("Hello, Scala!")`：输出一行文字。
- 第 1 行和第 3 行后面都没有分号——Scala 中分号是可选的。

---

### 知识点 6：new 关键字——创建类的对象

#### 这个知识点是什么？

在 Scala 中，用 `new` 关键字加类名来创建类的实例（对象）。

#### 为什么要学它？

面向对象编程的核心操作之一就是"用类创建对象"。只有创建了对象，才能访问类中定义的属性和方法。

#### 基本语法

```scala
val 对象名 = new 类名()
// 或
val 对象名: 类名 = new 类名()
```

#### 课堂中的理解方式

老师在课堂中演示了：

```scala
val c = new Test
// c 就是一个 Test 类型的对象
```

然后把鼠标悬停在变量 `c` 上，IDE 显示 `c: Test`——说明 Scala 编译器自动推断 `c` 的类型是 `Test`（类名即类型名）。

> 课堂中还演示了 `c.k` 通过点号访问对象的属性。

#### 初学者容易犯的错误

1. 忘记写 `new` 关键字，直接写 `val c = Test`（这是错误的，除非使用的是样例类）。
2. `new` 后面的类名写错。
3. 不理解"对象"和"类"的关系：类是模板，对象是用模板造出来的具体实例。

#### 正确示例

```scala
class Student {
  val name = "Tom"
  val age = 20
}

object Main {
  def main(args: Array[String]): Unit = {
    val s = new Student       // 创建 Student 类的对象
    println(s.name)           // 输出：Tom
    println(s.age)            // 输出：20
  }
}
```

#### 示例解释

- `class Student`：定义一个学生类，有两个属性。
- `val s = new Student`：用 `new` 创建一个学生对象，赋值给 s。
- `s.name` 和 `s.age`：通过对象访问属性。
- 这和 Java 中的操作几乎一样。

---

## 5. 重点概念对比

| 概念 A | 概念 B | 区别 | 示例 |
|--------|--------|------|------|
| var | val | var 定义可重新赋值的变量，val 定义不可重新赋值的常量 | `var i = 10; i = 20` ✓；`val j = 10; j = 20` ✗ |
| class | object | class 是用来创建对象的模板（可创建多个实例），object 本身就是一个单例对象（全局唯一） | `class Test` vs `object Main` |
| def | var/val | def 定义方法（行为），var/val 定义变量/常量（数据） | `def greet() = ...` vs `val name = "Tom"` |
| Scala 的 main | Java 的 main | Scala 中方法名和参数用 `def main(args: Array[String])`，Java 中用 `public static void main(String[] args)` | 语法结构不同，但功能相同 |
| Unit | void | Unit 是 Scala 中表示"无返回值"的类型，相当于 Java 的 void | `def foo(): Unit = { ... }` |

---

## 6. 代码示例整理

### 示例 1：第一个 Scala 程序——输出计算结果

适用知识点：

```text
var、val、println、object、def main
```

代码：

```scala
object FirstProgram {
  def main(args: Array[String]): Unit = {
    var i = 10
    val j = 11
    val k = i + j
    println(k)
  }
}
```

运行结果：

```text
21
```

代码解释：

1. `object FirstProgram`：定义一个单例对象，作为程序入口。
2. `def main(args: Array[String]): Unit`：定义 main 方法。
3. `var i = 10`：定义一个可变的整数变量 i，赋值为 10。
4. `val j = 11`：定义一个不可变的整数常量 j，赋值为 11。
5. `val k = i + j`：定义常量 k，值为 i + j = 21。
6. `println(k)`：输出 k 的值，结果为 21。

初学者提示：

```text
Scala 中不写分号也能正常运行。如果你在同一行写多条语句，中间才需要加分号。
```

---

### 示例 2：创建类的对象并访问属性

适用知识点：

```text
class、new、object、点号访问属性
```

代码：

```scala
class Test {
  val k = 21
}

object Main {
  def main(args: Array[String]): Unit = {
    val c = new Test
    println(c.k)
  }
}
```

运行结果：

```text
21
```

代码解释：

1. `class Test`：定义 Test 类，包含一个常量属性 k（值为 21）。
2. `val c = new Test`：使用 new 关键字创建 Test 类的对象 c。
3. `c.k`：通过点号访问对象的属性 k。
4. `println(c.k)`：输出属性值 21。

初学者提示：

```text
class 中定义的 val k 是类的属性（字段）。创建对象后，通过"对象名.属性名"来访问它。
```

---

### 示例 3：var 和 val 的区别演示

适用知识点：

```text
var、val、可变性
```

代码：

```scala
object VarValDemo {
  def main(args: Array[String]): Unit = {
    var score = 90
    println("初始成绩：" + score)

    score = 95
    println("修改后的成绩：" + score)

    val maxScore = 100
    println("满分：" + maxScore)

    // 下面这行如果取消注释会报错
    // maxScore = 120  // 错误：val 不能被重新赋值
  }
}
```

运行结果：

```text
初始成绩：90
修改后的成绩：95
满分：100
```

代码解释：

1. `var score = 90`：用 var 定义可变变量 score。
2. `score = 95`：可以重新赋值（因为 score 是 var）。
3. `val maxScore = 100`：用 val 定义不可变常量。
4. `maxScore = 120` 会报错——val 定义的量一经赋值，不能再改。

初学者提示：

```text
一个简单的记忆方法：val = value（值），赋值后固定；var = variable（变量），赋值后可以变化。
```

---

## 7. 课堂案例整理

### 案例 1：用"模具"理解类和对象

- **案例名称**：模具和产品的类比
- **对应知识点**：类（class）和对象（object）的关系
- **案例背景**：老师用生活中的"模具"来类比。类就像做月饼的模具，对象就是用模具做出来的具体月饼。
- **解决思路**：先设计好模具（定义 class），再用模具做出产品（new 出对象），然后使用产品（调用对象的属性和方法）。
- **Scala 代码或伪代码**：

```scala
// 模具（类）
class MoonCake {
  val filling = "莲蓉"  // 属性：馅料
  def eat(): Unit = println("吃掉了" + filling + "月饼")
}

// 用模具做产品（创建对象）
val cake = new MoonCake
cake.eat()  // 输出：吃掉了莲蓉月饼
```

- **这个案例帮助理解什么**：帮助理解"类是模板，对象是实例"的面向对象核心思想。

### 案例 2：变量变与不变的"身份证"类比

- **案例名称**：变量是草稿纸，常量是身份证
- **对应知识点**：var 和 val 的区别
- **案例背景**：老师课堂上强调 var 和 val 是最基础的两个关键字。
- **解决思路**：var 定义的值像草稿纸上的数字，可以擦了重写；val 定义的值像身份证号码，出生就固定了，不能改。
- **Scala 代码或伪代码**：

```scala
var draft = 100    // 草稿，可以改
draft = 200        // 没问题

val idCard = "1234567890"  // 身份证号，不能改
// idCard = "9876543210"  // ❌ 报错！
```

- **这个案例帮助理解什么**：帮助初学者快速建立"什么时候用 var，什么时候用 val"的直觉。

---

## 8. 易错点总结

**易错点 1：把 val 当成 var 使用**

```text
错误示例：
val age = 18
age = 20  // 报错！

正确写法：
var age = 18
age = 20

解释：
val 定义的变量不能被重新赋值；如果确实需要修改变量值，必须用 var。
```

**易错点 2：忘记安装 JDK 就装 Scala 插件**

```text
错误现象：
Eclipse 中找不到 Scala Project 选项，或者创建后报错。

正确做法：
先安装 JDK（1.8 版本），确保 JAVA_HOME 环境变量配置正确，
再安装 Scala IDE 或 Eclipse 的 Scala 插件。

解释：
Scala 运行在 JVM 上，需要 JDK 提供运行时环境。
```

**易错点 3：main 方法写在 class 里而不是 object 里**

```text
错误示例：
class Main {
  def main(args: Array[String]): Unit = { ... }
}

正确写法：
object Main {
  def main(args: Array[String]): Unit = { ... }
}

解释：
Scala 中程序的入口（main 方法）必须写在 object 中。
```

**易错点 4：声明变量不赋初始值**

```text
错误示例：
var x       // 报错！
val y       // 报错！

正确写法：
var x = 0
val y = "hello"

解释：
Scala 要求变量在声明时必须同时初始化（赋予初始值）。
这和某些语言（如 C）可以先声明后赋值的规则不同。
```

**易错点 5：把 Java 的 `String[]` 写在 Scala 代码中**

```text
错误示例：
def main(args: String[]): Unit = { ... }   // Java 风格！

正确写法：
def main(args: Array[String]): Unit = { ... }  // Scala 风格

解释：
Scala 的数组类型写作 Array[String]，不是 String[]。
Scala 用方括号 [] 表示泛型参数，而不是 Java 的尖括号 <>。
```

---

## 9. 小测验题目

**题目 1**：在 Scala 中，定义一个不可重新赋值的整数变量，正确的写法是？

A. `val age = 18`
B. `var age: 18`
C. `int age = 18`
D. `age val = 18`

**正确答案**：A

**解析**：Scala 中 `val` 定义不可变变量，类型可以省略（由编译器从值 18 推断为 Int）。B 语法错误（类型和值写反了），C 是 Java 语法，D 完全错误。

---

**题目 2**：下面关于 Scala 程序入口方法的说法，正确的是？

A. main 方法必须写在 class 中
B. main 方法使用 `def` 关键字定义
C. main 方法的参数类型写作 `String[]`
D. main 方法前面必须有 `public static` 修饰符

**正确答案**：B

**解析**：Scala 的 main 方法用 `def` 定义，写在 `object` 中。参数类型是 `Array[String]`（不是 `String[]`），不需要 `public static` 修饰。

---

**题目 3**：下面的代码运行后会输出什么？

```scala
var x = 5
x = 10
println(x)
```

A. 5
B. 10
C. 编译错误
D. 15

**正确答案**：B

**解析**：`var x = 5` 定义了可变变量，`x = 10` 将其重新赋值为 10，所以输出 10。

---

**题目 4**：下面的代码哪里会报错？

```scala
val name = "Tom"   // ①
name = "Jerry"     // ②
println(name)      // ③
```

A. ①
B. ②
C. ③
D. 都不会报错

**正确答案**：B

**解析**：`val` 定义的常量不能被重新赋值，所以第 ② 行会报错。

---

**题目 5**：Scala 中，`Unit` 类型的作用最接近 Java 中的哪个关键字？

A. int
B. String
C. void
D. null

**正确答案**：C

**解析**：`Unit` 表示"无返回值"，是 Scala 中对应 Java `void` 的类型。`Unit` 只有一个实例，写作 `()`。

---

## 10. 拖拽匹配素材

```text
1. var    —— 定义可重新赋值的变量
2. val    —— 定义不可重新赋值的常量
3. def    —— 定义方法或函数
4. object —— 定义单例对象（程序入口的容器）
5. class  —— 定义类（对象的模板）
6. new    —— 创建类的实例（对象）
7. println —— 输出一行内容并换行
8. Unit   —— 表示"无返回值"的类型，类似 Java 的 void
```

---

## 11. 流程动画素材

```text
1. 打开 Eclipse，点击 File → New → Scala Project，输入项目名称。
2. 在项目 SRC 文件夹上右键 → New → Scala class，创建第一个类。
3. 创建另一个文件，选择 Scala object，作为程序入口。
4. 在 object 中定义 main 方法：def main(args: Array[String]): Unit。
5. 在 main 方法中用 var/val 定义变量，编写代码逻辑。
6. 右键点击代码 → Run As → Scala Application，运行程序。
7. 在 Console 窗口中查看运行结果。
```

---

## 12. 课后练习题

**练习 1**：编写一个 Scala 程序，定义两个整数变量 a 和 b（用 val），输出它们的和与差。

**考查知识点**：val、Int、加减运算、println

**参考答案**：

```scala
object Calc {
  def main(args: Array[String]): Unit = {
    val a = 100
    val b = 30
    println("和：" + (a + b))
    println("差：" + (a - b))
  }
}
```

**解题思路**：用 `val` 定义两个整数，用 `+` 和 `-` 做运算，用 `println` 输出结果。

---

**练习 2**：定义一个类 `Book`，包含书名和价格两个属性。在 main 方法中创建 Book 对象，输出它的属性。

**考查知识点**：class、属性、new、对象

**参考答案**：

```scala
class Book {
  val title = "Scala入门"
  val price = 59.9
}

object Main {
  def main(args: Array[String]): Unit = {
    val book = new Book
    println(book.title)
    println(book.price)
  }
}
```

**解题思路**：先定义 class 并声明属性，再用 `new` 创建对象，通过点号访问属性。

---

**练习 3**：用 var 定义一个计数器变量，输出初始值，然后加 1，输出新值。

**考查知识点**：var、变量修改

**参考答案**：

```scala
object Counter {
  def main(args: Array[String]): Unit = {
    var count = 0
    println("初始值：" + count)
    count = count + 1
    println("加 1 后：" + count)
  }
}
```

**解题思路**：用 `var` 声明可变的计数器，初次赋值后用 `count = count + 1` 修改它。

---

**练习 4**：改正下面代码中的错误：

```scala
class Main {
  def main(args: String[]): void = {
    val x
    x = 10
    println(x)
  }
}
```

**考查知识点**：object 入口、Array 语法、val 初始化

**参考答案**：

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val x = 10
    println(x)
  }
}
```

**解题思路**：
1. main 方法应定义在 object 中，不是 class。
2. `String[]` 应改为 `Array[String]`。
3. `void` 应改为 `Unit`。
4. `val x` 必须同时初始化，不能先声明后赋值。

---

**练习 5**：用 Scala 写一个程序，输出你的名字和所在班级。

**考查知识点**：val、println、字符串

**参考答案**：

```scala
object StudentInfo {
  def main(args: Array[String]): Unit = {
    val name = "张三"
    val className = "软件工程2024级"
    println("姓名：" + name)
    println("班级：" + className)
  }
}
```

**解题思路**：用 `val` 定义字符串变量，用 `+` 拼接字符串，用 `println` 输出。

---

## 13. 本节课知识结构图文字版

```text
Scala 第一课——环境搭建与入门程序
├── 课程概述
│   ├── Scala 是什么
│   ├── Scala 与 Java 的关系
│   └── Scala 在大数据领域的应用（Spark）
├── 开发环境搭建
│   ├── 安装 JDK（先装）
│   ├── 安装 Scala IDE/Eclipse 插件（后装）
│   ├── 安装顺序的重要性
│   └── 虚拟机隔离建议
├── Eclipse 中的 Scala 项目结构
│   ├── Scala Project（项目）
│   ├── Package（包）
│   ├── Scala class（类）
│   ├── Scala trait（特质）
│   └── Scala object（单例对象）
├── 变量与常量
│   ├── var（可重新赋值）
│   ├── val（不可重新赋值）
│   ├── 类型推断（可省略类型声明）
│   └── 分号可选
├── 程序结构
│   ├── def main(args: Array[String]): Unit（入口方法）
│   ├── new（创建对象）
│   └── 点号访问属性和方法
└── 常见错误
    ├── 把 val 当 var 用
    ├── 安装顺序颠倒
    ├── main 方法写在 class 里
    └── 变量只声明不初始化
```

---

## 14. 后续生成网页时可使用的数据建议

- **建议课程 ID**：`scala-01-env-var-val`
- **建议课程标题**：Scala 入门——开发环境搭建、第一个程序、变量与常量
- **建议章节**：Scala 开发环境与运行方式
- **建议标签**：环境搭建、Eclipse、var、val、object、def、main
- **适合放入 summary 的内容**：课堂摘要（6 条）
- **适合放入 keyPoints 的内容**：6 个知识点的标题和简短解释
- **适合放入 codeExamples 的内容**：3 个代码示例（第一个程序、创建对象、var/val 对比）
- **适合放入 quiz 的内容**：5 道选择题
- **适合放入 dragMatch 的内容**：8 组概念-解释匹配
- **适合放入 flow 的内容**：7 步创建和运行 Scala 程序的流程
- **适合放入 exercises 的内容**：5 道课后练习题
- **适合放入 conclusion 的内容**：课后总结（5 条）

---

## 15. 课后总结

1. 本节课的核心是帮你在 Eclipse 中搭建好 Scala 开发环境，并写出第一个可以运行的 Scala 程序。**先装 JDK，再装 Scala 插件**这个顺序要记住。

2. 学习 Scala 时要特别注意 `var` 和 `val` 的区别——这是每节课都会用到的基础。建议平时能用 `val` 就尽量用 `val`，培养不可变性思维。

3. 通过本节课，你应该能够在 Eclipse 中创建 Scala 项目、编写包含 main 方法的 object、定义 var/val 变量，并用 println 输出结果。

4. `class`、`object` 和 `trait` 这三个概念会在后面的课程（构造器、伴生对象、特质）中反复出现和深入讲解，现在先记住它们的名字和基本作用即可。

5. 课后建议多练习：反复创建项目、写 main 方法、实验 var 和 val 的区别。编程是练出来的——同一个代码练两三遍还会出错很正常，坚持练习才能熟练。
