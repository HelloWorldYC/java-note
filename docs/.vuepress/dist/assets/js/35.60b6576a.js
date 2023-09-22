(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{647:function(a,v,r){"use strict";r.r(v);var t=r(18),_=Object(t.a)({},(function(){var a=this,v=a.$createElement,r=a._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("blockquote",[r("p",[a._v("这篇文章以问答的形式用于快速回顾知识点以及用于自测。"),r("br"),a._v("\n因为知识点相当多，即使在看时能够理解记住，但过后也往往只是有印象，大概知道是什么东西，但想回答出来却总是卡壳，看了忘，忘了看。因此，这篇文章用于帮助速记回忆，自测时可以由这些点延伸。")])]),a._v(" "),r("h2",{attrs:{id:"java-内存区域"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-内存区域"}},[a._v("#")]),a._v(" Java 内存区域")]),a._v(" "),r("h4",{attrs:{id:"java-虚拟机的内存区域是怎么分配的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-虚拟机的内存区域是怎么分配的"}},[a._v("#")]),a._v(" Java 虚拟机的内存区域是怎么分配的？")]),a._v(" "),r("p",[a._v("堆（其中包括字符串常量池）、各个线程分配的内存（其中包括程序计数器、虚拟机栈、本地方法栈）"),r("br"),a._v("\n本地内存（包括直接内存、元空间（元空间包括运行时常量池））"),r("strong",[a._v("不属于")]),a._v("虚拟机运行时数据区域。")]),a._v(" "),r("h4",{attrs:{id:"什么是程序计数器-程序计数器有什么作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是程序计数器-程序计数器有什么作用"}},[a._v("#")]),a._v(" 什么是程序计数器？程序计数器有什么作用？")]),a._v(" "),r("p",[a._v("程序计数器是一块较小的内存，可以看作是当前线程所执行字节码的行号指示器。"),r("br"),a._v("\n作用：改变程序计数器来依次读取指令；在多线程情况下记录当前线程执行的位置。")]),a._v(" "),r("h4",{attrs:{id:"java-虚拟机栈的生命周期-存入的是哪些信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-虚拟机栈的生命周期-存入的是哪些信息"}},[a._v("#")]),a._v(" Java 虚拟机栈的生命周期？存入的是哪些信息？")]),a._v(" "),r("p",[a._v("Java 虚拟机栈的生命周期随线程创建而创建，随线程死亡而死亡。"),r("br"),a._v("\n存入的是栈帧，栈帧随方法调用而入栈，随方法结束而出栈，无论是正常结束还是异常结束。"),r("br"),a._v("\n栈帧组成：局部变量表、操作数栈、动态链接、方法返回地址。"),r("br"),a._v("\n局部变量表：存放基本数据类型和对象引用。"),r("br"),a._v("\n操作数栈：存放方法调用过程中产生的中间计算结果。"),r("br"),a._v("\n动态链接：服务于一个方法需要调用其他方法的场景，将符号引用转换为调用方法的直接引用。")]),a._v(" "),r("h4",{attrs:{id:"程序运行时栈可能会出现什么错误"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#程序运行时栈可能会出现什么错误"}},[a._v("#")]),a._v(" 程序运行时栈可能会出现什么错误？")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("StackOverFlowError")]),a._v("：若栈的内存不允许动态扩展，线程请求栈的深度超过当前 Java 虚拟机栈最大深度。")]),a._v(" "),r("li",[r("code",[a._v("OutOfMemoryError")]),a._v("：若栈的内存可以动态扩展（一般不允许），虚拟机在动态扩展栈时无法申请到足够的内存空间。")])]),a._v(" "),r("h4",{attrs:{id:"本地方法栈的作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地方法栈的作用"}},[a._v("#")]),a._v(" 本地方法栈的作用？")]),a._v(" "),r("p",[a._v("与虚拟机栈类似，但是虚拟机栈针对的是 Java 方法（也就是字节码），而本地方法栈针对的是本地方法。")]),a._v(" "),r("h4",{attrs:{id:"堆是什么-堆有什么作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#堆是什么-堆有什么作用"}},[a._v("#")]),a._v(" 堆是什么？堆有什么作用？")]),a._v(" "),r("p",[a._v("Java 虚拟机所管理内存最大的一块，也是所有线程共享的一块内存区域，在虚拟机启动时创建。"),r("br"),a._v("\n作用：存放对象实例，几乎所有的对象实例以及数组都在堆中分配内存。")]),a._v(" "),r("h4",{attrs:{id:"堆内存有哪几部分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#堆内存有哪几部分"}},[a._v("#")]),a._v(" 堆内存有哪几部分？")]),a._v(" "),r("ul",[r("li",[a._v("新生代（包括 Eden 和 Survivor）")]),a._v(" "),r("li",[a._v("老年代（Old）")]),a._v(" "),r("li",[a._v("永久代（Permanent，后面变为元空间，元空间使用的是本地内存）")])]),a._v(" "),r("h4",{attrs:{id:"对象在堆中各部分的迁移过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对象在堆中各部分的迁移过程"}},[a._v("#")]),a._v(" 对象在堆中各部分的迁移过程？")]),a._v(" "),r("p",[a._v("大部分情况，对象会首先在 Eden 分配，在一次新生代垃圾回收后，如果对象存活，就进入 S0 或 S1，并且对象年龄加 1，当年龄达到达到一定程度，就会晋升到老年代。具体是，Hotspot 遍历所有对象时，按照年龄从小到大对其所占用的大小进行累积，当累计的某个年龄超过了 Survivor 区的一半，取该年龄和预设的 "),r("code",[a._v("MaxTenuringThreshold")]),a._v(" 中更小的一个作为年龄晋升阈值。")]),a._v(" "),r("h4",{attrs:{id:"堆最容易出现的错误"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#堆最容易出现的错误"}},[a._v("#")]),a._v(" 堆最容易出现的错误？")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("java.lang.OutOfMemoryError：Overhead Limit Exceeded")]),a._v("：JVM 花太多时间回收垃圾并且只能回收很少的堆空间。")]),a._v(" "),r("li",[r("code",[a._v("java.lang.OutOfMemoryError：Java heap space")]),a._v("：创建对象时堆空间不足。")])]),a._v(" "),r("h4",{attrs:{id:"什么是方法区-方法区和永久代、元空间的关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是方法区-方法区和永久代、元空间的关系"}},[a._v("#")]),a._v(" 什么是方法区？方法区和永久代、元空间的关系？")]),a._v(" "),r("p",[a._v("方法去是 JVM 运行时数据区域的一块逻辑区域，是各个线程共享的内存区域。"),r("br"),a._v("\n方法区是逻辑概念，好比是类。而永久代、元空间是方法区的实现，相当于是实例。")]),a._v(" "),r("h4",{attrs:{id:"为什么要将永久代替换为元空间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要将永久代替换为元空间"}},[a._v("#")]),a._v(" 为什么要将永久代替换为元空间？")]),a._v(" "),r("p",[a._v("元空间使用本地内存，空间大小比永久代大，也因此可以加载的类数更多。")]),a._v(" "),r("h4",{attrs:{id:"方法区常用参数有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法区常用参数有哪些"}},[a._v("#")]),a._v(" 方法区常用参数有哪些？")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("-XX:MetaspaceSize=N")]),a._v("：初始大小")]),a._v(" "),r("li",[r("code",[a._v("-XX:MaxMetaspaceSize")]),a._v("：最大大小")])]),a._v(" "),r("h4",{attrs:{id:"运行时常量池的作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行时常量池的作用"}},[a._v("#")]),a._v(" 运行时常量池的作用？")]),a._v(" "),r("p",[a._v("用于存放编译期生成的各种字面量和符号引用。"),r("br"),a._v("\n字面量：包括整数、浮点数、字符串字面量。"),r("br"),a._v("\n符号引用：类符号引用、字段符号引用、方法符号引用、接口符号引用。")]),a._v(" "),r("h4",{attrs:{id:"字符串常量池是什么-作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串常量池是什么-作用"}},[a._v("#")]),a._v(" 字符串常量池是什么？作用？")]),a._v(" "),r("p",[a._v("JVM 为了提高性能和减少内存消耗针对字符串专门开辟的一块区域。"),r("br"),a._v("\n作用：避免字符串的重复创建。")]),a._v(" "),r("h4",{attrs:{id:"字符串常量池中保存的是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串常量池中保存的是什么"}},[a._v("#")]),a._v(" 字符串常量池中保存的是什么？")]),a._v(" "),r("ul",[r("li",[a._v("字符串字面量")]),a._v(" "),r("li",[a._v("通过String类的intern()方法添加的字符串")]),a._v(" "),r("li",[a._v("编译器优化的字符串（比如将多个字符串合并为一个）")])]),a._v(" "),r("h4",{attrs:{id:"jdk1-7-为什么要将字符串常量池从永久代移动到堆中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jdk1-7-为什么要将字符串常量池从永久代移动到堆中"}},[a._v("#")]),a._v(" JDK1.7 为什么要将字符串常量池从永久代移动到堆中？")]),a._v(" "),r("p",[a._v("永久代的GC回收效率太低，只有在Full GC的时候才会被执行GC，而程序中通常有大量被创建的字符串等待回收。")]),a._v(" "),r("h4",{attrs:{id:"直接内存和堆外内存是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#直接内存和堆外内存是什么"}},[a._v("#")]),a._v(" 直接内存和堆外内存是什么？")]),a._v(" "),r("p",[a._v("直接内存是一种特殊的内存缓冲区，通过Java NIO（New I/O）库中的 java.nio.ByteBuffer 来分配和管理的一种内存区域。它既不是虚拟机运行时数据区域的一部分，也不是虚拟机规范中定义的内存区域。"),r("br"),a._v("\n堆外内存是在 Java 堆之外分配的内存区域，包括直接内存和其他方式分配的内存。")]),a._v(" "),r("h4",{attrs:{id:"java-对象的创建过程是怎样的-重点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-对象的创建过程是怎样的-重点"}},[a._v("#")]),a._v(" Java 对象的创建过程是怎样的？（重点）")]),a._v(" "),r("p",[a._v("类加载检查 -> 分配内存 -> 初始化零值（数据类型对应的零值）-> 设置对象头（类、类元数据信息、哈希码、GC分代年龄等） -> 执行init方法")]),a._v(" "),r("h4",{attrs:{id:"内存分配有哪两种方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存分配有哪两种方式"}},[a._v("#")]),a._v(" 内存分配有哪两种方式？")]),a._v(" "),r("p",[a._v("指针碰撞、空闲列表")]),a._v(" "),r("h4",{attrs:{id:"内存分配并发有哪两种方式保证线程安全"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存分配并发有哪两种方式保证线程安全"}},[a._v("#")]),a._v(" 内存分配并发有哪两种方式保证线程安全？")]),a._v(" "),r("ul",[r("li",[a._v("CAS + 失败重试")]),a._v(" "),r("li",[a._v("TLAB：为每一个线程预先在 Eden 区分配一块内存，在给线程中的对象分配内存时首先在 TLAB 中分配，TLAB 不够分配时再采用 CAS 进行内存分配。")])]),a._v(" "),r("h4",{attrs:{id:"对象的内存布局是怎样的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对象的内存布局是怎样的"}},[a._v("#")]),a._v(" 对象的内存布局是怎样的？")]),a._v(" "),r("p",[a._v("对象头、实例数据、对齐填充（仅起占位作用）")]),a._v(" "),r("h4",{attrs:{id:"对象的访问定位有哪几种方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对象的访问定位有哪几种方式"}},[a._v("#")]),a._v(" 对象的访问定位有哪几种方式？")]),a._v(" "),r("p",[a._v("Java 程序通过栈上的 reference 数据来操作堆上的具体对象。")]),a._v(" "),r("ul",[r("li",[a._v("使用句柄：reference 存储对象句柄地址，句柄中存储 到对象实例数据的指针 和 到对象类型数据的指针。")]),a._v(" "),r("li",[a._v("直接指针：reference 直接存储对象的地址。")])])])}),[],!1,null,null,null);v.default=_.exports}}]);