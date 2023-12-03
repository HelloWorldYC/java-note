(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{665:function(a,t,r){"use strict";r.r(t);var v=r(18),s=Object(v.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("blockquote",[r("p",[a._v("这篇文章以问答的形式用于快速回顾知识点以及用于自测。"),r("br"),a._v("\n因为知识点相当多，即使在看时能够理解记住，但过后也往往只是有印象，大概知道是什么东西，但想回答出来却总是卡壳，看了忘，忘了看。因此，这篇文章用于帮助速记回忆，自测时可以由这些点延伸。\n注：参考的主要是 Guide 哥的网站内容以及 chatGPT。")])]),a._v(" "),r("h2",{attrs:{id:"基本概念与常识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本概念与常识"}},[a._v("#")]),a._v(" 基本概念与常识")]),a._v(" "),r("h4",{attrs:{id:"java-有哪些特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-有哪些特点"}},[a._v("#")]),a._v(" Java 有哪些特点？")]),a._v(" "),r("h4",{attrs:{id:"jvm、jdk-和-jre"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm、jdk-和-jre"}},[a._v("#")]),a._v(" JVM、JDK 和 JRE？")]),a._v(" "),r("h4",{attrs:{id:"什么是字节码-字节码的好处是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是字节码-字节码的好处是什么"}},[a._v("#")]),a._v(" 什么是字节码？字节码的好处是什么？")]),a._v(" "),r("h4",{attrs:{id:"为什么不直接使用-aot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么不直接使用-aot"}},[a._v("#")]),a._v(" 为什么不直接使用 AOT？")]),a._v(" "),r("p",[a._v("AOT，即 Ahead of Time Compilation，这种编译模式会在程序被执行之前就将其编译成机器码，属于静态编译。AOT 避免了 JIT 预热等各方面的开销，可以提高 Java 程序的启动速度，避免预热时间长。并且，AOT 还能减少内存占用和增强 Java 程序的安全性（AOT 编译后的代码不容易被反编译和修改），特别适合云原生场景，对微服务架构的支持也比较友好。但是，由于是静态编译，AOT 编译无法支持 Java 的一些动态特性，如反射、动态代理、动态加载、JNI 等，而很多框架都用到了这些特性，如果只使用 AOT 编译，就没办法使用这些框架和库了。")]),a._v(" "),r("h4",{attrs:{id:"为什么说-java-是编译和解释并存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么说-java-是编译和解释并存"}},[a._v("#")]),a._v(" 为什么说 Java 是编译和解释并存？")]),a._v(" "),r("h4",{attrs:{id:"open-jdk-和-oracle-jdk-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#open-jdk-和-oracle-jdk-的区别"}},[a._v("#")]),a._v(" Open JDK 和 Oracle JDK 的区别？")]),a._v(" "),r("ol",[r("li",[r("strong",[a._v("是否开源")]),a._v("：Open JDK 是一个参考模型并且是完全开源的，Oracle JDK 是基于 Open JDK 实现的，并不是完全开源的。")]),a._v(" "),r("li",[r("strong",[a._v("是否免费")]),a._v("：Oracle JDK 会提供免费版本，但一般有时间限制。Open JDK 是完全免费的。")]),a._v(" "),r("li",[r("strong",[a._v("功能性")]),a._v("：Oracle JDK 在 Open JDK 的基础上添加了一些特有的功能和工具，不过在 Java 11 之后 Oracle JDK 和 Open JDK 的功能基本一致。")]),a._v(" "),r("li",[r("strong",[a._v("稳定性")]),a._v("：Open JDK 不提供 LTS 服务，而 Oracle JDK 大概每三年会推出一个 LTS 版进行长期支持。")]),a._v(" "),r("li",[r("strong",[a._v("协议")]),a._v("：Oracle JDK 使用 BCL/OTN 协议获得许可，而 Open JDK 根据 GPL v2 许可获得许可。")])]),a._v(" "),r("h4",{attrs:{id:"java-和-c-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-和-c-的区别"}},[a._v("#")]),a._v(" Java 和 C++ 的区别？")]),a._v(" "),r("ul",[r("li",[a._v("Java 不提供指针来直接访问内存，程序内存更加安全。")]),a._v(" "),r("li",[a._v("Java 的类是单继承的，C++ 支持多继承；虽然 Java 的类不可以多继承，但是接口可以多继承。")]),a._v(" "),r("li",[a._v("Java 有自动内存管理垃圾回收机制（GC），不需要程序员手动释放无用内存。")]),a._v(" "),r("li",[a._v("C++ 同时支持方法重载和操作符重载，但是 Java 只支持方法重载。")])]),a._v(" "),r("h2",{attrs:{id:"基本语法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[a._v("#")]),a._v(" 基本语法")]),a._v(" "),r("h4",{attrs:{id:"注释有几种类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注释有几种类型"}},[a._v("#")]),a._v(" 注释有几种类型？")]),a._v(" "),r("ol",[r("li",[r("strong",[a._v("单行注释")])]),a._v(" "),r("li",[r("strong",[a._v("多行注释")])]),a._v(" "),r("li",[r("strong",[a._v("文档注释")])])]),a._v(" "),r("h4",{attrs:{id:"标识符和关键字的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标识符和关键字的区别"}},[a._v("#")]),a._v(" 标识符和关键字的区别？")]),a._v(" "),r("p",[a._v("标识符就是一个名字。而关键字是被赋予特殊含义的标识符。")]),a._v(" "),r("h4",{attrs:{id:"java-中关键字有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-中关键字有哪些"}},[a._v("#")]),a._v(" Java 中关键字有哪些？")]),a._v(" "),r("h4",{attrs:{id:"自增自减运算符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自增自减运算符"}},[a._v("#")]),a._v(" 自增自减运算符？")]),a._v(" "),r("h4",{attrs:{id:"移位运算符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#移位运算符"}},[a._v("#")]),a._v(" 移位运算符？")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("<<")]),a._v("：左移运算符，高位丢弃，低位补 0。")]),a._v(" "),r("li",[r("code",[a._v(">>")]),a._v("：带符号右移，高位补符号位，低位丢弃。正数高位补 0，负数高位补 1。")]),a._v(" "),r("li",[r("code",[a._v(">>>")]),a._v("：无符号右移，忽略符号位，空位都以 0 补齐。")])]),a._v(" "),r("h4",{attrs:{id:"continue、break、return-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#continue、break、return-的区别"}},[a._v("#")]),a._v(" continue、break、return 的区别？")]),a._v(" "),r("h4",{attrs:{id:"局部变量和成员变量的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#局部变量和成员变量的区别"}},[a._v("#")]),a._v(" 局部变量和成员变量的区别？")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("语法形式")]),a._v("：成员变量属于类，而局部变量是在代码块或方法中定义的变量或方法参数。成员变量可以被 "),r("code",[a._v("public")]),a._v("、"),r("code",[a._v("private")]),a._v("、"),r("code",[a._v("static")]),a._v(" 等修饰符所修饰，而局部变量不能被访问控制修饰符及 "),r("code",[a._v("static")]),a._v(" 所修饰；但是，成员变量和局部变量都能被 "),r("code",[a._v("final")]),a._v(" 所修饰。")]),a._v(" "),r("li",[r("strong",[a._v("存储方式")]),a._v("：成员变量若使用 "),r("code",[a._v("static")]),a._v(" 修饰，则成员变量是属于类的，若没有 "),r("code",[a._v("static")]),a._v(" 修饰，则成员变量属于实例。而对象存在于堆内存，局部变量则存在于栈内存中。")]),a._v(" "),r("li",[r("strong",[a._v("生存时间")]),a._v("：从变量在内存中的生存时间上看，成员变量是对象的一部分，它随着对象的创建而存在，而局部变量随着方法的调用而自动生成，随着方法的调用结束而消亡。")]),a._v(" "),r("li",[r("strong",[a._v("默认值")]),a._v("：成员变量若没有被赋初始值，则自动以类型的默认值而赋值，而局部变量不会被自动赋值。")])]),a._v(" "),r("h4",{attrs:{id:"静态变量有什么用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#静态变量有什么用"}},[a._v("#")]),a._v(" 静态变量有什么用？")]),a._v(" "),r("p",[a._v("静态变量被类的所有实例共享，无论一个类创建了多少个对象，它们都共享同一份静态变量。")]),a._v(" "),r("h4",{attrs:{id:"字符型常量与字符串常量的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符型常量与字符串常量的区别"}},[a._v("#")]),a._v(" 字符型常量与字符串常量的区别？")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("形式")]),a._v("：字符常量是单引号引起的一个字符，字符串常量是双引号引起的 0 个或若干个字符。")]),a._v(" "),r("li",[r("strong",[a._v("含义")]),a._v("：字符常量是相当于一个整型值（ASCII 值），可以参加表达式运算；字符串常量代表一个地址值。")]),a._v(" "),r("li",[r("strong",[a._v("占内存大小")]),a._v("：字符常量只占 2 个字节，字符串常量占若干个字节。")])]),a._v(" "),r("h4",{attrs:{id:"静态方法为什么不能调用非静态成员"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#静态方法为什么不能调用非静态成员"}},[a._v("#")]),a._v(" 静态方法为什么不能调用非静态成员？")]),a._v(" "),r("h4",{attrs:{id:"静态方法和实例方法有什么不同"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#静态方法和实例方法有什么不同"}},[a._v("#")]),a._v(" 静态方法和实例方法有什么不同？")]),a._v(" "),r("h4",{attrs:{id:"重载和重写有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重载和重写有什么区别"}},[a._v("#")]),a._v(" 重载和重写有什么区别？")]),a._v(" "),r("h4",{attrs:{id:"什么是可变长参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是可变长参数"}},[a._v("#")]),a._v(" 什么是可变长参数？")]),a._v(" "),r("h2",{attrs:{id:"基本数据类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[a._v("#")]),a._v(" 基本数据类型")]),a._v(" "),r("h4",{attrs:{id:"java-中有几种基本数据类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-中有几种基本数据类型"}},[a._v("#")]),a._v(" Java 中有几种基本数据类型？")]),a._v(" "),r("h4",{attrs:{id:"基本类型与包装类型的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本类型与包装类型的区别"}},[a._v("#")]),a._v(" 基本类型与包装类型的区别？")]),a._v(" "),r("h4",{attrs:{id:"包装类型的缓存机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#包装类型的缓存机制"}},[a._v("#")]),a._v(" 包装类型的缓存机制？")]),a._v(" "),r("h4",{attrs:{id:"自动装箱和自动拆箱"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自动装箱和自动拆箱"}},[a._v("#")]),a._v(" 自动装箱和自动拆箱？")]),a._v(" "),r("h4",{attrs:{id:"为什么浮点数运算会有精度丢失的风险"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么浮点数运算会有精度丢失的风险"}},[a._v("#")]),a._v(" 为什么浮点数运算会有精度丢失的风险？")]),a._v(" "),r("p",[a._v("计算机在表示一个数字时，宽度是有限的，无限循环的小数存储在计算机时，只能被截断，所以就会导致小数精度发生损失的情况。")]),a._v(" "),r("h4",{attrs:{id:"如何解决浮点数运算精度丢失的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何解决浮点数运算精度丢失的问题"}},[a._v("#")]),a._v(" 如何解决浮点数运算精度丢失的问题？")]),a._v(" "),r("p",[a._v("可以用 "),r("code",[a._v("BigDecimal")]),a._v(" 实现对浮点数的运算，不会造成精度丢失。")]),a._v(" "),r("h4",{attrs:{id:"超过-long-整型的数据怎么存储"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#超过-long-整型的数据怎么存储"}},[a._v("#")]),a._v(" 超过 long 整型的数据怎么存储？")]),a._v(" "),r("h4",{attrs:{id:"为什么-bigdecimal-能解决浮点数运算精度丢失的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么-bigdecimal-能解决浮点数运算精度丢失的问题"}},[a._v("#")]),a._v(" 为什么 BigDecimal 能解决浮点数运算精度丢失的问题？")]),a._v(" "),r("p",[a._v("BigDecimal 将小数扩大了 N 倍，转成了整数后再进行计算，同时结合指数，得出没有精度丢失的结果。")]),a._v(" "),r("h2",{attrs:{id:"面向对象基础"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#面向对象基础"}},[a._v("#")]),a._v(" 面向对象基础")]),a._v(" "),r("h4",{attrs:{id:"面向过程和面向对象的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#面向过程和面向对象的区别"}},[a._v("#")]),a._v(" 面向过程和面向对象的区别？")]),a._v(" "),r("ul",[r("li",[a._v("面向过程把解决问题的过程拆成了一个个方法，通过一个个方法的执行解决问题。")]),a._v(" "),r("li",[a._v("面向对象会先抽象出对象，然后用对象执行方法的方式解决问题。面向对象开发的程序一般更易维护、易复用、易扩展。")])]),a._v(" "),r("h4",{attrs:{id:"创建一个对象用什么运算符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建一个对象用什么运算符"}},[a._v("#")]),a._v(" 创建一个对象用什么运算符？")]),a._v(" "),r("h4",{attrs:{id:"对象实例和对象引用有什么不同"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对象实例和对象引用有什么不同"}},[a._v("#")]),a._v(" 对象实例和对象引用有什么不同？")]),a._v(" "),r("h4",{attrs:{id:"对象的相等与引用的相等有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对象的相等与引用的相等有什么区别"}},[a._v("#")]),a._v(" 对象的相等与引用的相等有什么区别？")]),a._v(" "),r("h4",{attrs:{id:"类的构造方法有什么用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#类的构造方法有什么用"}},[a._v("#")]),a._v(" 类的构造方法有什么用？")]),a._v(" "),r("p",[a._v("完成对象的初始化工作。")]),a._v(" "),r("h4",{attrs:{id:"如果一个类没有声明构造方法-该程序能正确执行吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如果一个类没有声明构造方法-该程序能正确执行吗"}},[a._v("#")]),a._v(" 如果一个类没有声明构造方法，该程序能正确执行吗？")]),a._v(" "),r("h4",{attrs:{id:"构造方法有什么特点-是否能被-override"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#构造方法有什么特点-是否能被-override"}},[a._v("#")]),a._v(" 构造方法有什么特点？是否能被 override？")]),a._v(" "),r("p",[a._v("构造方法特点：")]),a._v(" "),r("ul",[r("li",[a._v("名字与类名相同。")]),a._v(" "),r("li",[a._v("没有返回值，但不能用 void 声明。")]),a._v(" "),r("li",[a._v("生成类的对象时自动执行，无需调用。")])]),a._v(" "),r("p",[a._v("构造方法不能被 override，但可以被 overload。")]),a._v(" "),r("h4",{attrs:{id:"面向对象的三大特征"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#面向对象的三大特征"}},[a._v("#")]),a._v(" 面向对象的三大特征？")]),a._v(" "),r("ul",[r("li",[a._v("封装：把一个对象的状态信息（即属性）隐藏在对象内部，不允许外部对象直接访问对象的内部信息，但是可以提供一些能够被外界访问的方法来操作属性。")]),a._v(" "),r("li",[a._v("继承：使用已存在的类的定义作为基础建立新类的技术，新类的定义可以增加新的功能或新的数据，也可以用父类的功能，但不能选择性地继承父类。")]),a._v(" "),r("li",[a._v("多态：表示一个对象具有多种的状态，具体表现为父类引用指向子类实例。")])]),a._v(" "),r("h4",{attrs:{id:"接口与抽象类有什么共同点和区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接口与抽象类有什么共同点和区别"}},[a._v("#")]),a._v(" 接口与抽象类有什么共同点和区别？")]),a._v(" "),r("p",[a._v("共同点：")]),a._v(" "),r("ul",[r("li",[a._v("都不能被实例化。")]),a._v(" "),r("li",[a._v("都可以包含抽象方法。")]),a._v(" "),r("li",[a._v("都可以由默认实现的方法（JDK8 可以用 "),r("code",[a._v("default")]),a._v(" 关键字在接口中定义默认方法）")])]),a._v(" "),r("p",[a._v("区别：")]),a._v(" "),r("ul",[r("li",[a._v("接口主要是对类的行为进行约束，实现了某个接口就具有了对应的行为。抽象类主要用于代码复用，强调的是所属关系。")]),a._v(" "),r("li",[a._v("一个类只能继承一个类，但可以实现多个接口。")]),a._v(" "),r("li",[a._v("接口中的成员变量只能是 "),r("code",[a._v("public static final")]),a._v(" 类型的，不能被修改且必须有初始值，而抽象类的成员变量默认为 "),r("code",[a._v("default")]),a._v("，可在子类中被重新定义，也可被重新赋值。")])]),a._v(" "),r("h4",{attrs:{id:"什么是深拷贝-什么是浅拷贝-什么是引用拷贝"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是深拷贝-什么是浅拷贝-什么是引用拷贝"}},[a._v("#")]),a._v(" 什么是深拷贝？什么是浅拷贝？什么是引用拷贝？")]),a._v(" "),r("h2",{attrs:{id:"java-常见类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-常见类"}},[a._v("#")]),a._v(" Java 常见类")]),a._v(" "),r("h4",{attrs:{id:"object-类的常用方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#object-类的常用方法"}},[a._v("#")]),a._v(" Object 类的常用方法")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("getClass()")])]),a._v(" "),r("li",[r("code",[a._v("hashCode()")])]),a._v(" "),r("li",[r("code",[a._v("equals()")])]),a._v(" "),r("li",[r("code",[a._v("clone()")])]),a._v(" "),r("li",[r("code",[a._v("toString()")])]),a._v(" "),r("li",[r("code",[a._v("notify()")])]),a._v(" "),r("li",[r("code",[a._v("notifyAll()")])]),a._v(" "),r("li",[r("code",[a._v("wait()")])]),a._v(" "),r("li",[r("code",[a._v("finalize()")])])]),a._v(" "),r("h4",{attrs:{id:"和-equals-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#和-equals-的区别"}},[a._v("#")]),a._v(" == 和 equals 的区别？")]),a._v(" "),r("h4",{attrs:{id:"hashcode-方法有什么用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hashcode-方法有什么用"}},[a._v("#")]),a._v(" hashCode() 方法有什么用？")]),a._v(" "),r("h4",{attrs:{id:"为什么重写-equals-方法必须重写-hashcode-方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么重写-equals-方法必须重写-hashcode-方法"}},[a._v("#")]),a._v(" 为什么重写 equals 方法必须重写 hashCode 方法？")]),a._v(" "),r("h4",{attrs:{id:"string、stringbuilder、stringbuffer-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#string、stringbuilder、stringbuffer-的区别"}},[a._v("#")]),a._v(" String、StringBuilder、StringBuffer 的区别？")]),a._v(" "),r("h4",{attrs:{id:"string-为什么是不可变的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#string-为什么是不可变的"}},[a._v("#")]),a._v(" String 为什么是不可变的？")]),a._v(" "),r("h4",{attrs:{id:"字符串拼接用-还是-stringbuilder-对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串拼接用-还是-stringbuilder-对象"}},[a._v("#")]),a._v(" 字符串拼接用 + 还是 StringBuilder 对象？")]),a._v(" "),r("h4",{attrs:{id:"string-中-equals-方法和-object-中-equals-方法有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#string-中-equals-方法和-object-中-equals-方法有什么区别"}},[a._v("#")]),a._v(" String 中 equals 方法和 Object 中 equals 方法有什么区别？")]),a._v(" "),r("h4",{attrs:{id:"字符串常量池的作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串常量池的作用"}},[a._v("#")]),a._v(" 字符串常量池的作用？")]),a._v(" "),r("h4",{attrs:{id:"string-s1-new-stirng-abc-创建了几个字符串对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#string-s1-new-stirng-abc-创建了几个字符串对象"}},[a._v("#")]),a._v(" "),r("code",[a._v('String s1 = new Stirng("abc");')]),a._v(" 创建了几个字符串对象？")]),a._v(" "),r("h4",{attrs:{id:"string-的-intern-方法有什么用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#string-的-intern-方法有什么用"}},[a._v("#")]),a._v(" String 的 intern 方法有什么用？")]),a._v(" "),r("h4",{attrs:{id:"string-类型的变量和常量做-运算时发生了什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#string-类型的变量和常量做-运算时发生了什么"}},[a._v("#")]),a._v(' String 类型的变量和常量做 "+" 运算时发生了什么？')]),a._v(" "),r("p",[a._v("会发生字符串的拼接操作：")]),a._v(" "),r("ul",[r("li",[a._v("若 String 类型被 final 修饰，则这个 String 变量相当于是常量。对于编译期可以确定值的字符串，也就是常量字符串，JVM 会将其存入字符串常量池。并且，字符串常量拼接得到的字符串常量在编译阶段就已经被存放字符串常量池（常量折叠）。")]),a._v(" "),r("li",[a._v("若引用的值在程序编译期是无法确定的，编译器无法对其进行优化。")])]),a._v(" "),r("h2",{attrs:{id:"异常"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[a._v("#")]),a._v(" 异常")]),a._v(" "),r("h4",{attrs:{id:"exception-和-error-有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#exception-和-error-有什么区别"}},[a._v("#")]),a._v(" Exception 和 Error 有什么区别？")]),a._v(" "),r("p",[a._v("Exception 和 Error 都继承自 Throwable 类：")]),a._v(" "),r("ul",[r("li",[a._v("Exception：程序本身可以处理的异常，可以通过 catch 来捕获。Exception 又分为 Checked Exception 和 Unchecked Exception。")]),a._v(" "),r("li",[a._v("Error：程序无法处理的错误，不建议通过 catch 捕获。这些异常发生时，JVM 一般会选择线程终止。")])]),a._v(" "),r("h4",{attrs:{id:"checked-exception-和-unchecked-exception-有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#checked-exception-和-unchecked-exception-有什么区别"}},[a._v("#")]),a._v(" Checked Exception 和 Unchecked Exception 有什么区别？")]),a._v(" "),r("h4",{attrs:{id:"throwable-类的常用方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#throwable-类的常用方法"}},[a._v("#")]),a._v(" Throwable 类的常用方法？")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("String getMessage()")]),a._v("：返回异常发生时的简要描述。")]),a._v(" "),r("li",[r("code",[a._v("String toString()")]),a._v("：返回异常发生时的详细情况。")]),a._v(" "),r("li",[r("code",[a._v("String getLocalizedMessage()")]),a._v("：返回异常的本地化信息。")]),a._v(" "),r("li",[r("code",[a._v("void printStackTrace()")]),a._v("：在控制台上打印 Throwable 对象封装的异常信息。")])]),a._v(" "),r("h4",{attrs:{id:"try-catch-finally-语句块如何运行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#try-catch-finally-语句块如何运行"}},[a._v("#")]),a._v(" try-catch-finally 语句块如何运行？")]),a._v(" "),r("h4",{attrs:{id:"finally-中的语句一定会执行吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#finally-中的语句一定会执行吗"}},[a._v("#")]),a._v(" finally 中的语句一定会执行吗？")]),a._v(" "),r("p",[a._v("不一定，以下情况不会执行：")]),a._v(" "),r("ul",[r("li",[a._v("finally 之前虚拟机被终止运行")]),a._v(" "),r("li",[a._v("程序所在的线程死亡")]),a._v(" "),r("li",[a._v("关闭 CPU。")])]),a._v(" "),r("h4",{attrs:{id:"如何用-try-with-resources-代替-try-catch-finally"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何用-try-with-resources-代替-try-catch-finally"}},[a._v("#")]),a._v(" 如何用 try-with-resources 代替 try-catch-finally？")]),a._v(" "),r("h4",{attrs:{id:"异常的使用有哪些需要注意的地方"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异常的使用有哪些需要注意的地方"}},[a._v("#")]),a._v(" 异常的使用有哪些需要注意的地方？")]),a._v(" "),r("h2",{attrs:{id:"泛型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#泛型"}},[a._v("#")]),a._v(" 泛型")]),a._v(" "),r("h4",{attrs:{id:"什么是泛型-有什么作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是泛型-有什么作用"}},[a._v("#")]),a._v(" 什么是泛型？有什么作用？")]),a._v(" "),r("p",[a._v("泛型是 JDK5 引入的一个新特性。使用泛型参数，可以增强代码的可读性以及稳定性。编译器可以对泛型参数进行检测，并且通过泛型参数可以指定传入的对象类型。")]),a._v(" "),r("h4",{attrs:{id:"泛型的使用有哪几种"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#泛型的使用有哪几种"}},[a._v("#")]),a._v(" 泛型的使用有哪几种？")]),a._v(" "),r("p",[a._v("泛型类、泛型接口、泛型方法。")]),a._v(" "),r("h4",{attrs:{id:"项目中什么地方用到泛型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目中什么地方用到泛型"}},[a._v("#")]),a._v(" 项目中什么地方用到泛型？")]),a._v(" "),r("h4",{attrs:{id:"什么是泛型擦除机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是泛型擦除机制"}},[a._v("#")]),a._v(" 什么是泛型擦除机制？")]),a._v(" "),r("p",[a._v("Java 在编译期间，所有的泛型信息都会被擦掉（伪泛型）。"),r("br"),a._v("\n编译器会在编译期间动态地将泛型 T 擦除为 Object 或将 T extends xxx 擦除为其限定类型 xxx。也就是要么擦除为上界类型要么为 Object 类型，像 "),r("code",[a._v("List<String>")]),a._v(" 没有上界会被擦除为 Object 类型，无法通过反射得知泛型类型 String。")]),a._v(" "),r("h4",{attrs:{id:"为什么要泛型擦除"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要泛型擦除"}},[a._v("#")]),a._v(" 为什么要泛型擦除？")]),a._v(" "),r("p",[a._v("泛型本质上其实还是编译器的行为，为了保证引入泛型机制但不创建新的类型，减少虚拟机的运行开销，编译器通过擦除将泛型类转化为一般类。")]),a._v(" "),r("h4",{attrs:{id:"泛型擦除有什么影响"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#泛型擦除有什么影响"}},[a._v("#")]),a._v(" 泛型擦除有什么影响？")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("类型安全性检查")]),a._v("： 泛型在编译时提供了类型安全性检查，但在运行时，由于擦除，泛型类型信息被移除，无法在运行时执行具体的类型检查。这可能导致在运行时发生 "),r("code",[a._v("ClassCastException")]),a._v("。")]),a._v(" "),r("li",[r("strong",[a._v("反射")]),a._v("： 泛型信息的擦除也影响了使用反射操作泛型类型的能力。在运行时，无法获得泛型类型的具体信息，而只能获得原始类型。")])]),a._v(" "),r("h2",{attrs:{id:"反射"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#反射"}},[a._v("#")]),a._v(" 反射")]),a._v(" "),r("h4",{attrs:{id:"何谓反射"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#何谓反射"}},[a._v("#")]),a._v(" 何谓反射？")]),a._v(" "),r("p",[a._v("反射被称为框架的灵魂，主要是因为它赋予了我们在运行时分析类和使用类中方法的能力。通过反射可以获取任意一个类的所有属性和方法，还可以调用这些属性和方法。")]),a._v(" "),r("h4",{attrs:{id:"反射的优缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#反射的优缺点"}},[a._v("#")]),a._v(" 反射的优缺点？")]),a._v(" "),r("ul",[r("li",[a._v("优点：使代码更加灵活，为各种框架提供开箱即用的功能提供了便利。")]),a._v(" "),r("li",[a._v("缺点：有安全隐患。另外，反射的性能也要稍差一点，但对于框架来说实际影响不大。")])]),a._v(" "),r("h4",{attrs:{id:"反射的应用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#反射的应用场景"}},[a._v("#")]),a._v(" 反射的应用场景")]),a._v(" "),r("ul",[r("li",[a._v("各种框架大量使用了动态代理，而动态代理的实现就依赖反射。")]),a._v(" "),r("li",[a._v("注解的使用也用到了反射。基于反射分析类，然后获取到类/属性/方法/方法参数上的注解，根据注解做进一步的处理。")])]),a._v(" "),r("h4",{attrs:{id:"获取-class-对象的四种方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取-class-对象的四种方式"}},[a._v("#")]),a._v(" 获取 Class 对象的四种方式")]),a._v(" "),r("ol",[r("li",[a._v("知道具体类的情况下可以使用："),r("code",[a._v("Class alphaClass = TargetObject.class;")]),a._v("。")]),a._v(" "),r("li",[a._v("通过 "),r("code",[a._v("Class.forname()")]),a._v(" 传入类的全路径获取。")]),a._v(" "),r("li",[a._v("通过对象实例 "),r("code",[a._v("instance.getClass()")]),a._v(" 获取。")]),a._v(" "),r("li",[a._v("通过类加载器 "),r("code",[a._v("xxxClassLoader.loadClass()")]),a._v(" 传入类路径获取，这种方式获取 Class 对象不会进行初始化。")])]),a._v(" "),r("h2",{attrs:{id:"注解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注解"}},[a._v("#")]),a._v(" 注解")]),a._v(" "),r("h4",{attrs:{id:"何谓注解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#何谓注解"}},[a._v("#")]),a._v(" 何谓注解")]),a._v(" "),r("p",[a._v("Annotation 是 Java5 开始引入的新特性，可以看作是特殊的注释，主要用于修饰类、方法或者变量，提供某些信息供程序在编译或者运行时使用。"),r("br"),a._v("\n注解本质上是一个继承了 Annotation 的特殊接口。")]),a._v(" "),r("h4",{attrs:{id:"注解的解析方法有哪几种"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注解的解析方法有哪几种"}},[a._v("#")]),a._v(" 注解的解析方法有哪几种？")]),a._v(" "),r("p",[a._v("注解只有被解析之后才会生效，常见的解析方法有两种：")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("编译期直接扫描")]),a._v("：编译器在编译 Java 代码的时候扫描对应的注解并处理，比如某个方法使用 "),r("code",[a._v("@Override")]),a._v(" 注解，编译器在编译的时候就会检测当前的方法是否重写了父类对应的方法。")]),a._v(" "),r("li",[r("strong",[a._v("运行期通过反射处理")]),a._v("：像框架中自带的注解（比如 Spring 框架的 "),r("code",[a._v("@Value")]),a._v("、"),r("code",[a._v("@Component")]),a._v("）都是通过反射来进行处理的。")])]),a._v(" "),r("h2",{attrs:{id:"spi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spi"}},[a._v("#")]),a._v(" SPI")]),a._v(" "),r("h4",{attrs:{id:"什么是-spi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-spi"}},[a._v("#")]),a._v(" 什么是 SPI？")]),a._v(" "),r("p",[a._v("SPI 即 Service Provider Interface，专门提供给服务提供者或者扩展框架功能的开发者去使用的一个接口。")]),a._v(" "),r("p",[a._v("SPI 将服务接口和具体的服务实现分离开来，将服务调用和服务实现解耦，能够提升程序的扩展性、可维护性。修改或者替换服务实现并不需要修改调用方。")]),a._v(" "),r("h4",{attrs:{id:"spi-和-api-有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spi-和-api-有什么区别"}},[a._v("#")]),a._v(" SPI 和 API 有什么区别？")]),a._v(" "),r("ul",[r("li",[a._v("API：接口放在了服务实现方，由实现方去确定接口规则，服务调用方只能被动地根据提供的接口去调用。")]),a._v(" "),r("li",[a._v("SPI：接口放在了服务调用方，由调用方确定接口规则，服务实现方只能根据规则去实现和提供服务。")])]),a._v(" "),r("h4",{attrs:{id:"spi-的优缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spi-的优缺点"}},[a._v("#")]),a._v(" SPI 的优缺点？")]),a._v(" "),r("ul",[r("li",[a._v("优点：大大提高了接口设计的灵活性。")]),a._v(" "),r("li",[a._v("缺点：\n"),r("ul",[r("li",[a._v("需要遍历加载所有的实现类，不能做到按需加载，这样效率还是相对较低的。")]),a._v(" "),r("li",[a._v("当多个 "),r("code",[a._v("ServiceLoader")]),a._v(" 同时 "),r("code",[a._v("load")]),a._v(" 时，会有并发问题。")])])])]),a._v(" "),r("h2",{attrs:{id:"序列化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#序列化"}},[a._v("#")]),a._v(" 序列化")]),a._v(" "),r("h4",{attrs:{id:"什么是序列化-什么是反序列化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是序列化-什么是反序列化"}},[a._v("#")]),a._v(" 什么是序列化？什么是反序列化？")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("序列化")]),a._v("：将数据结构或对象转换成二进制字节流的过程")]),a._v(" "),r("li",[r("strong",[a._v("反序列化")]),a._v("：将在序列化过程中所生成的二进制字节流转换成数据结构或者对象的过程。")])]),a._v(" "),r("h4",{attrs:{id:"序列化的作用是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#序列化的作用是什么"}},[a._v("#")]),a._v(" 序列化的作用是什么？")]),a._v(" "),r("p",[a._v("通过网络传输对象或者将对象存储到文件系统、数据库、内存中。")]),a._v(" "),r("h4",{attrs:{id:"序列化和反序列化常见应用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#序列化和反序列化常见应用场景"}},[a._v("#")]),a._v(" 序列化和反序列化常见应用场景？")]),a._v(" "),r("ul",[r("li",[a._v("进行网络传输的时候")]),a._v(" "),r("li",[a._v("将对象存储到文件中的时候")]),a._v(" "),r("li",[a._v("将对象存储到数据库中的时候")]),a._v(" "),r("li",[a._v("将对象存储到内存中的时候")])]),a._v(" "),r("h4",{attrs:{id:"序列化协议对应于-tcp-ip-四层模型中的哪一层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#序列化协议对应于-tcp-ip-四层模型中的哪一层"}},[a._v("#")]),a._v(" 序列化协议对应于 TCP/IP 四层模型中的哪一层？")]),a._v(" "),r("p",[a._v("应用层。")]),a._v(" "),r("h4",{attrs:{id:"如果有些字段不想序列化怎么办"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如果有些字段不想序列化怎么办"}},[a._v("#")]),a._v(" 如果有些字段不想序列化怎么办？")]),a._v(" "),r("p",[a._v("使用 "),r("code",[a._v("transient")]),a._v(" 关键字修饰字段。注意：")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("transient")]),a._v(" 只能修饰变量，不能修饰类和方法。")]),a._v(" "),r("li",[r("code",[a._v("transient")]),a._v(" 修饰的变量，在反序列化后变量值将会被置成类型的默认值。")]),a._v(" "),r("li",[r("code",[a._v("static")]),a._v(" 变量因为不属于任何对象，所以无论有没有 "),r("code",[a._v("transient")]),a._v(" 修饰，均不会被序列化。")])]),a._v(" "),r("h4",{attrs:{id:"常见的序列化协议有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见的序列化协议有哪些"}},[a._v("#")]),a._v(" 常见的序列化协议有哪些？")]),a._v(" "),r("p",[a._v("JDK 自带的序列化协议、Hessian、Kryo、Protobuf、Protostuff。")]),a._v(" "),r("h4",{attrs:{id:"为什么不推荐-jdk-自带的序列化协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么不推荐-jdk-自带的序列化协议"}},[a._v("#")]),a._v(" 为什么不推荐 JDK 自带的序列化协议？")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("不支持跨语言调用")])]),a._v(" "),r("li",[r("strong",[a._v("性能差")]),a._v("：主要原因是序列化之后的字节数组体积较大，导致传输成本加大。")]),a._v(" "),r("li",[r("strong",[a._v("存在安全问题")]),a._v("：序列化和反序列本身不存在问题。但当输入的反序列化数据可被用户控制，那么攻击者即可通过构造恶意输入，让反序列化产生非预期的对象，在此过程中执行恶意代码。")])]),a._v(" "),r("h2",{attrs:{id:"io"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#io"}},[a._v("#")]),a._v(" IO")]),a._v(" "),r("h4",{attrs:{id:"java-io-流了解吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-io-流了解吗"}},[a._v("#")]),a._v(" Java IO 流了解吗？")]),a._v(" "),r("p",[a._v("IO 流即输入输出流。")]),a._v(" "),r("ul",[r("li",[a._v("输入：数据输入到计算机内存的过程。")]),a._v(" "),r("li",[a._v("输出：输出到外部存储（如数据库、文件、远程主机）的过程。")])]),a._v(" "),r("p",[a._v("IO 流根据数据的处理方式又分为字节流和字符流。")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("InputStream/Reader")]),a._v("：所有输入流的基类，前者是字节输入流，后者是字符输入流。")]),a._v(" "),r("li",[r("code",[a._v("OutputStream/Writer")]),a._v("：所有输出流的基类，前者是字节输出流，后者是字符输出流。")])]),a._v(" "),r("h4",{attrs:{id:"io-流为什么要分为字节流和字符流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#io-流为什么要分为字节流和字符流"}},[a._v("#")]),a._v(" IO 流为什么要分为字节流和字符流？")]),a._v(" "),r("ul",[r("li",[a._v("处理文本数据更方便： 字符流提供了更高级别的字符处理机制，对于文本数据的读写更加方便，不需要手动进行字节和字符之间的转换。")]),a._v(" "),r("li",[a._v("字符集处理： 字符流支持字符集，可以更容易地处理不同的字符编码。在字节流中，你需要手动处理字符编码，而字符流会自动处理。")]),a._v(" "),r("li",[a._v("更高级别的功能： 字符流提供了一些高级功能，如缓冲区、行处理等，使得字符数据的读写更高效。")])]),a._v(" "),r("h4",{attrs:{id:"java-io-流的设计模式有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-io-流的设计模式有哪些"}},[a._v("#")]),a._v(" Java IO 流的设计模式有哪些？")]),a._v(" "),r("ul",[r("li",[a._v("装饰器模式")]),a._v(" "),r("li",[a._v("适配器模式")]),a._v(" "),r("li",[a._v("工厂模式")]),a._v(" "),r("li",[a._v("观察者模式")])]),a._v(" "),r("h4",{attrs:{id:"bio、nio、aio-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bio、nio、aio-的区别"}},[a._v("#")]),a._v(" BIO、NIO、AIO 的区别？")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("BIO（同步阻塞 IO 模型）")]),a._v("：在 BIO 中，应用程序发起 read 调用后，会一直阻塞，直到内核把数据拷贝到用户空间。")]),a._v(" "),r("li",[r("strong",[a._v("NIO（同步非阻塞IO）")]),a._v("：在 Java 中可以看作 "),r("strong",[a._v("IO多路复用模型")]),a._v("。\n"),r("ul",[r("li",[a._v("在常规 NIO 中，应用程序不阻塞，但会一直发起 read 调用，等待数据从内核空间拷贝到用户空间这段时间里，线程依然是阻塞的，直到在内核把数据拷贝到用户空间。避免了阻塞但会消耗CPU资源。")]),a._v(" "),r("li",[a._v("IO多路复用中，线程首先发起 select 调用，询问内核数据是否准备就绪，等内核把数据准备好了，用户线程再发起 read 调用。read 调用过程把数据从内核空间拷贝到用户空间还是阻塞的。")])])]),a._v(" "),r("li",[r("strong",[a._v("AIO（异步IO模型）")]),a._v("：应用程序发起 read 调用后会返回，不会阻塞在那里，当数据准备完成，操作系统会通知相应的线程进行后续的处理。")])]),a._v(" "),r("h2",{attrs:{id:"语法糖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法糖"}},[a._v("#")]),a._v(" 语法糖")]),a._v(" "),r("h4",{attrs:{id:"什么是语法糖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是语法糖"}},[a._v("#")]),a._v(" 什么是语法糖？")]),a._v(" "),r("p",[a._v("语法糖是编程语言为了方便程序员开发而设计出来的一种特殊语法，这种语法对编程功能并没有影响，但写出来的代码往往更简洁且更易阅读。"),r("br"),a._v("\nJVM 是不能识别语法糖的，Java 语法糖需要通过编译器解糖才能够正确执行。")]),a._v(" "),r("h4",{attrs:{id:"java-中有哪些常见的语法糖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-中有哪些常见的语法糖"}},[a._v("#")]),a._v(" Java 中有哪些常见的语法糖？")]),a._v(" "),r("p",[a._v("主要有泛型、自动装拆箱、变长参数、枚举、内部类、增强 for、try-with-resources、lambda 表达式等。")]),a._v(" "),r("h4",{attrs:{id:"switch-是怎么支持-string-的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#switch-是怎么支持-string-的"}},[a._v("#")]),a._v(" switch 是怎么支持 String 的？")]),a._v(" "),r("h4",{attrs:{id:"java-是用什么泛型处理机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-是用什么泛型处理机制"}},[a._v("#")]),a._v(" Java 是用什么泛型处理机制？")]),a._v(" "),r("h4",{attrs:{id:"什么是-code-sharing-机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-code-sharing-机制"}},[a._v("#")]),a._v(" 什么是 Code sharing 机制？")]),a._v(" "),r("h4",{attrs:{id:"什么是类型擦除"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是类型擦除"}},[a._v("#")]),a._v(" 什么是类型擦除？")]),a._v(" "),r("h4",{attrs:{id:"类型擦除的过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#类型擦除的过程"}},[a._v("#")]),a._v(" 类型擦除的过程？")]),a._v(" "),r("h4",{attrs:{id:"什么是断言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是断言"}},[a._v("#")]),a._v(" 什么是断言？")]),a._v(" "),r("h4",{attrs:{id:"数值字面量为什么要加下划线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数值字面量为什么要加下划线"}},[a._v("#")]),a._v(" 数值字面量为什么要加下划线？")]),a._v(" "),r("h4",{attrs:{id:"lambda-表达式是不是语法糖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lambda-表达式是不是语法糖"}},[a._v("#")]),a._v(" Lambda 表达式是不是语法糖？")]),a._v(" "),r("h2",{attrs:{id:"unsafe-类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unsafe-类"}},[a._v("#")]),a._v(" Unsafe 类")]),a._v(" "),r("h4",{attrs:{id:"什么是-unsafe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-unsafe"}},[a._v("#")]),a._v(" 什么是 Unsafe？")]),a._v(" "),r("h4",{attrs:{id:"为什么-unsafe-要使用本地方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么-unsafe-要使用本地方法"}},[a._v("#")]),a._v(" 为什么 Unsafe 要使用本地方法？")]),a._v(" "),r("h4",{attrs:{id:"为什么-public-static-getunsafe-会出错"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么-public-static-getunsafe-会出错"}},[a._v("#")]),a._v(" 为什么 "),r("code",[a._v("public static getUnsafe")]),a._v(" 会出错？")]),a._v(" "),r("h4",{attrs:{id:"unsafe-类有哪些功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unsafe-类有哪些功能"}},[a._v("#")]),a._v(" Unsafe 类有哪些功能？")]),a._v(" "),r("h4",{attrs:{id:"为什么要使用堆外内存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用堆外内存"}},[a._v("#")]),a._v(" 为什么要使用堆外内存？")])])}),[],!1,null,null,null);t.default=s.exports}}]);