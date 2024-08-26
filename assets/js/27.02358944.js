(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{381:function(v,_,t){v.exports=t.p+"assets/img/操作系统与应用软件和计算机硬件之间的关系.6c0b7ad6.png"},382:function(v,_,t){v.exports=t.p+"assets/img/多进程的组织.800ddaa4.png"},383:function(v,_,t){v.exports=t.p+"assets/img/线程切换.e2e4fe99.png"},384:function(v,_,t){v.exports=t.p+"assets/img/分段中GDT和LDT.2cd87622.png"},463:function(v,_,t){"use strict";t.r(_);var s=t(4),a=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"什么是操作系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是操作系统"}},[v._v("#")]),v._v(" 什么是操作系统")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("是计算机硬件和应用之间的一层软件")]),v._v(" "),_("ul",[_("li",[v._v("方便我们使用硬件，如使用显存")]),v._v(" "),_("li",[v._v("高效的使用硬件，如开多个终端（窗口）\n"),_("div",{attrs:{align:"center"}},[_("img",{attrs:{src:t(381),width:"70%"}})])])])]),v._v(" "),_("li",[_("p",[v._v("管理哪些硬件")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("CPU管理")]),v._v("、"),_("strong",[v._v("内存管理")]),v._v("、"),_("strong",[v._v("终端管理")]),v._v("、"),_("strong",[v._v("磁盘管理")]),v._v("、"),_("strong",[v._v("文件管理")])]),v._v(" "),_("li",[v._v("网络管理、电源管理、多核管理")])])]),v._v(" "),_("li",[_("p",[v._v("计算机怎么工作？"),_("strong",[v._v("取指执行")])])]),v._v(" "),_("li",[_("p",[v._v("计算机的第一段引导程序：bootsect.s")])]),v._v(" "),_("li",[_("p",[v._v("执行流程：bootsect.s -> setup.s -> head.s -> main.c")])]),v._v(" "),_("li",[_("p",[v._v("head.s是system模块（目标代码）中的第一部分代码")])])]),v._v(" "),_("h2",{attrs:{id:"操作系统接口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#操作系统接口"}},[v._v("#")]),v._v(" 操作系统接口")]),v._v(" "),_("ul",[_("li",[v._v("连接谁？连接操作系统和应用软件")]),v._v(" "),_("li",[v._v("如何连接？C语言程序")]),v._v(" "),_("li",[v._v("接口表现为函数调用，又由系统提供，所以称为"),_("strong",[v._v("系统调用(system call)")])])]),v._v(" "),_("h3",{attrs:{id:"系统调用的实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#系统调用的实现"}},[v._v("#")]),v._v(" 系统调用的实现")]),v._v(" "),_("ul",[_("li",[v._v("将内核程序和用户程序"),_("strong",[v._v("隔离")]),v._v(" "),_("ul",[_("li",[v._v("区分"),_("strong",[v._v("内核态和用户态")]),v._v("：一种处理器“硬件设计”方式实现。\n"),_("ul",[_("li",[v._v("内核态可以访问任何数据，用户态只能访问用户段数据。对于指令跳转也一样，实现了隔离")]),v._v(" "),_("li",[v._v("当前程序执行在什么态（哪层环）？由于CS:IP是当前指令，所以用CS的最低两位来表示（CPL）：0是内核态，3是用户态")]),v._v(" "),_("li",[v._v("目标数据特权级在什么态？在GDT表中的表项DPL：0是内核态，3是用户态")])])])])]),v._v(" "),_("li",[v._v("硬件提供了“主动进入内核的方法”\n"),_("ul",[_("li",[v._v("对于Intel x86，就是中断指令"),_("code",[v._v("int 0x80")]),v._v("（通过IDT表获取中断处理函数入口/地址）\n"),_("ul",[_("li",[_("strong",[v._v("int指令将使CS中的CPL改为0，“进入内核”")])]),v._v(" "),_("li",[v._v("int中断是用户程序发起的调用内核代码的唯一方式")])])])])]),v._v(" "),_("li",[v._v("系统调用的核心：\n"),_("ul",[_("li",[v._v("用户程序中包含一段包含int指令的代码")]),v._v(" "),_("li",[v._v("操作系统写中断处理，获取想调程序的编号")]),v._v(" "),_("li",[v._v("操作系统根据编号执行相应代码")])])])]),v._v(" "),_("h2",{attrs:{id:"cpu管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu管理"}},[v._v("#")]),v._v(" CPU管理")]),v._v(" "),_("h3",{attrs:{id:"管理cpu的最直观方法-利用效率低"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#管理cpu的最直观方法-利用效率低"}},[v._v("#")]),v._v(" 管理CPU的最直观方法（利用效率低）")]),v._v(" "),_("p",[v._v("设好PC初值就完事！（因为CPU不断自动地取指执行）")]),v._v(" "),_("h3",{attrs:{id:"管理好cpu核心-提高cpu利用效率"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#管理好cpu核心-提高cpu利用效率"}},[v._v("#")]),v._v(" 管理好CPU核心（提高CPU利用效率）")]),v._v(" "),_("ul",[_("li",[v._v("一个CPU上交替的执行多个程序："),_("strong",[v._v("并发")])]),v._v(" "),_("li",[v._v("怎么做？\n"),_("ul",[_("li",[v._v("修改寄存器PC")]),v._v(" "),_("li",[v._v("记录程序信息：每个程序有一个存放信息的结构：PCB(Process Control Block)")])])]),v._v(" "),_("li",[v._v("运行中的程序和静态程序不一样！\n"),_("ul",[_("li",[_("strong",[v._v("进程是进行（执行）中的程序")]),v._v("，它跟静态程序不一样，有开始和结束，需要记录ax，bx等一些信息，这些信息记录在PCB中")])])])]),v._v(" "),_("h2",{attrs:{id:"多进程图像"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多进程图像"}},[v._v("#")]),v._v(" 多进程图像")]),v._v(" "),_("p",[v._v("多个进程（PID）使用CPU的图像"),_("br"),v._v("\n多进程图像从启动开始到关机结束")]),v._v(" "),_("h3",{attrs:{id:"多进程图像-多进程如何组织"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多进程图像-多进程如何组织"}},[v._v("#")]),v._v(" 多进程图像：多进程如何组织？")]),v._v(" "),_("p",[v._v("将多个进程对应的PCB分别放在多个地方（正在执行的、就绪队列、磁盘等待队列）"),_("br"),v._v("\n多进程的组织：PCB + 状态 + 队列\n")]),_("div",{attrs:{align:"center"}},[_("img",{attrs:{src:t(382),width:"70%"}})]),_("p"),v._v(" "),_("h3",{attrs:{id:"多进程图像-多进程如何交替"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多进程图像-多进程如何交替"}},[v._v("#")]),v._v(" 多进程图像：多进程如何交替？")]),v._v(" "),_("p",[v._v("交替的三个部分：队列操作 + 调度 + 切换")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('eg.\n启动磁盘读写；\npCur.state = "W";\n将pCur放到DiskWaitQueue\nschedule();\n\nschedule(){\n  pNew = getNext(ReadyQueue); // 调度\n  switch_to(pCur, pNew); // 保存当前进程现场（记录PCB），切换到下一个进程\n}\n')])])]),_("h3",{attrs:{id:"多进程图像-多进程如何影响"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多进程图像-多进程如何影响"}},[v._v("#")]),v._v(" 多进程图像：多进程如何影响？")]),v._v(" "),_("ul",[_("li",[v._v("多个进程同时存在于内存有可能会出现内存相互访问的问题")]),v._v(" "),_("li",[v._v("解决的方法："),_("strong",[v._v("限制对地址的读写")]),v._v("，"),_("strong",[v._v("进程的内存进行映射")])]),v._v(" "),_("li",[v._v("多进程的地址空间分离："),_("strong",[v._v("内存管理的主要内容")])])]),v._v(" "),_("h3",{attrs:{id:"多进程图像-多进程如何合作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多进程图像-多进程如何合作"}},[v._v("#")]),v._v(" 多进程图像：多进程如何合作？")]),v._v(" "),_("p",[v._v("核心在于进程同步（合理的推进顺序）")]),v._v(" "),_("h2",{attrs:{id:"用户级线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户级线程"}},[v._v("#")]),v._v(" 用户级线程")]),v._v(" "),_("ul",[_("li",[_("p",[_("strong",[v._v("进程 = 资源 + 指令执行序列")])]),v._v(" "),_("ul",[_("li",[v._v("将资源和指令分开")]),v._v(" "),_("li",[v._v("一个资源 + 多个指令执行序列")])])]),v._v(" "),_("li",[_("p",[v._v("线程：保留了并发的优点，避免了进程切换代价。"),_("strong",[v._v("实质就是映射表不变而PC指针改变")])]),v._v(" "),_("ul",[_("li",[v._v("线程切换时，TCB(Thread Control Block)记录栈的地址，栈记录当前线程的信息，包括返回地址，每个线程有自己的栈\n"),_("div",{attrs:{align:"center"}},[_("img",{attrs:{src:t(383),width:"70%"}})])])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("Yield")]),v._v("：属于用户级，但用户不可见，调度点由系统决定")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("ThreadCreate")]),v._v("：是系统调用，会进入内核，内核管理TCB，内核负责切换线程")])])]),v._v(" "),_("h2",{attrs:{id:"核心级线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#核心级线程"}},[v._v("#")]),v._v(" 核心级线程")]),v._v(" "),_("ul",[_("li",[v._v("多处理器：有多个CPU，每个CPU有它自己的 cache 和 MMU（内存管理单元，即映射表）")]),v._v(" "),_("li",[v._v("多核：有多个CPU，但多个CPU共用一个 cache 和 MMU （即每个CPU相当于一个线程），多核可以"),_("strong",[v._v("并行")]),v._v("（注意区别"),_("strong",[v._v("并发")]),v._v("）")])]),v._v(" "),_("h3",{attrs:{id:"和用户级相比-核心级线程有什么不同"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#和用户级相比-核心级线程有什么不同"}},[v._v("#")]),v._v(" 和用户级相比，核心级线程有什么不同？")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("ThreadCreate")]),v._v("：是系统调用，会进入内核，内核管理TCB，内核负责切换线程")]),v._v(" "),_("li",[_("strong",[v._v("如何让切换成型？内核栈，TCB")]),v._v(" "),_("ul",[_("li",[v._v("用户栈是否还要用？执行的代码仍然在用户态，还要进行函数调用")]),v._v(" "),_("li",[_("strong",[v._v("一个栈到一套栈（用户栈和内核栈）；两个栈到两套栈")])])])])]),v._v(" "),_("h3",{attrs:{id:"核心级线程切换过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#核心级线程切换过程"}},[v._v("#")]),v._v(" 核心级线程切换过程")]),v._v(" "),_("ul",[_("li",[v._v("当前用户态线程进入内核态（由中断进入）")]),v._v(" "),_("li",[v._v("内核栈保存当前用户态线程的上下文信息，包括程序计数器PC、寄存器、用户栈指针")]),v._v(" "),_("li",[v._v("当前内核态线程的TCB记录当前内核栈的地址，将自己变为阻塞态或就绪态")]),v._v(" "),_("li",[v._v("内核从就绪队列中选择下一运行的内核态线程，并从其TCB中得到内核栈指针寄存器（esp寄存器），即内核栈地址")]),v._v(" "),_("li",[v._v("从内核栈中弹出对应的用户态线程的上下文信息，包括PC、寄存器、用户栈指针")]),v._v(" "),_("li",[v._v("注意：若是进程的切换还需多上一步：地址映射表的切换（内存管理的内容）")])]),v._v(" "),_("h2",{attrs:{id:"cpu调度策略-进程切换时怎么选择就绪队列中的进程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu调度策略-进程切换时怎么选择就绪队列中的进程"}},[v._v("#")]),v._v(" CPU调度策略（进程切换时怎么选择就绪队列中的进程）")]),v._v(" "),_("p",[_("strong",[v._v("需要折中，需要综合")])]),v._v(" "),_("ul",[_("li",[v._v("吞吐量和响应时间之间有矛盾\n"),_("ul",[_("li",[v._v("响应时间小 -> 切换次数多 -> 系统内耗大 -> 吞吐量小")])])]),v._v(" "),_("li",[v._v("前台任务和后台任务的关注点不同：前台任务关注响应时间，后台任务关注周转时间\n"),_("ul",[_("li",[v._v("响应时间：从提交请求到产生响应所用的时间")]),v._v(" "),_("li",[v._v("周转时间：从作业（进程）提交给系统开始，直至其完成并退出系统为止所经历的时间")])])]),v._v(" "),_("li",[v._v("IO约束型任务和CPU约束型任务有各自的特点（一般IO约束型优先级较高一点）")])]),v._v(" "),_("h3",{attrs:{id:"各种cpu调度算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#各种cpu调度算法"}},[v._v("#")]),v._v(" 各种CPU调度算法")]),v._v(" "),_("ul",[_("li",[v._v("Fist Come，First Served (FCFS) （不算算法）")]),v._v(" "),_("li",[_("strong",[v._v("SJF")]),v._v("：短作业优先，平均周转时间最短")]),v._v(" "),_("li",[_("strong",[v._v("RR")]),v._v("：轮转调度，按时间片来轮转调度\n"),_("ul",[_("li",[v._v("属于折中：时间片10-100ms，切换时间0.1-1ms(1%)")])])]),v._v(" "),_("li",[_("strong",[v._v("优先级")])])]),v._v(" "),_("h2",{attrs:{id:"进程同步与信号量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程同步与信号量"}},[v._v("#")]),v._v(" 进程同步与信号量")]),v._v(" "),_("ul",[_("li",[v._v("进程合作：多进程共同完成一个任务")]),v._v(" "),_("li",[v._v("阻塞是进程同步的基础")]),v._v(" "),_("li",[v._v("信号量：一种特殊整型变量，用来记录可使用资源的数量，信号用来sleep和wakeup")])]),v._v(" "),_("h3",{attrs:{id:"信号量临界区保护"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#信号量临界区保护"}},[v._v("#")]),v._v(" 信号量临界区保护")]),v._v(" "),_("ul",[_("li",[v._v("为什么需要保护？共同修改信号量会引起问题")]),v._v(" "),_("li",[v._v("竞争条件(Race Condition)：和调度有关的共享数据语义错误\n"),_("ul",[_("li",[v._v("错误由多个进程并发操作共享数据引起")]),v._v(" "),_("li",[v._v("错误和调度顺序有关，难于发现和调试")])])]),v._v(" "),_("li",[v._v("解决竞争条件的直观想法：上锁，在写共享变量时阻止其他进程访问")]),v._v(" "),_("li",[_("strong",[v._v("临界区(Critical Section)")]),v._v("：一次只允许一个进程进入的该进程的那一段代码，"),_("strong",[v._v("读写信号量的代码一定是临界区")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("基本原则：互斥进入")]),v._v("：如果一个进程在临界区中执行，则其他进程不允许进入\n"),_("ul",[_("li",[v._v("这些进程间的约束关系称为"),_("strong",[v._v("互斥(mutual exclusion)")])]),v._v(" "),_("li",[v._v("这保证了是临界区")])])]),v._v(" "),_("li",[v._v("好的临界区保护原则\n"),_("ul",[_("li",[_("strong",[v._v("有空让进")]),v._v("：若干进程要求进入空闲临界区时，应尽快使一进程进入临界区")]),v._v(" "),_("li",[_("strong",[v._v("有限等待")]),v._v("：从进程发出进入请求到允许进入，不能无限等待")])])])])])]),v._v(" "),_("h3",{attrs:{id:"信号量临界区保护解法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#信号量临界区保护解法"}},[v._v("#")]),v._v(" 信号量临界区保护解法")]),v._v(" "),_("ul",[_("li",[v._v("软件解法\n"),_("ul",[_("li",[v._v("两个进程："),_("strong",[v._v("PeterSon算法")]),v._v("：标记和轮转的结合")]),v._v(" "),_("li",[v._v("多个进程："),_("strong",[v._v("面包店算法")]),v._v("：仍然是标记和轮转的结合，每个进程都获得一个序号，序号最小的进临界区")])])]),v._v(" "),_("li",[v._v("硬件解法\n"),_("ul",[_("li",[v._v("临界区"),_("strong",[v._v("只允许一个进程进入")]),v._v("，另一个进程进入意味着"),_("strong",[v._v("被调度")]),v._v("，因此只要关闭中断入口即可，但这种方法只有单核才有效，多CPU情况下不好使")]),v._v(" "),_("li",[v._v("硬件原子指令法：可以适用于多CPU的情况，但需要在实现时考虑不同CPU之间的缓存同步和多CPU的竞争情况。")])])])]),v._v(" "),_("h3",{attrs:{id:"信号量的代码实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#信号量的代码实现"}},[v._v("#")]),v._v(" 信号量的代码实现")]),v._v(" "),_("ul",[_("li",[v._v("信号量包括value和等待的PCB队列，需要被各个进程都看到，信号量应该在内核里实现，通过系统调用来获取。")])]),v._v(" "),_("h2",{attrs:{id:"死锁处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#死锁处理"}},[v._v("#")]),v._v(" 死锁处理")]),v._v(" "),_("p",[_("strong",[v._v("死锁")]),v._v("：多个进程由于"),_("strong",[v._v("互相等待对方持有的资源")]),v._v("而造成的谁都无法执行的情况叫"),_("strong",[v._v("死锁")])]),v._v(" "),_("h3",{attrs:{id:"死锁的成因"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#死锁的成因"}},[v._v("#")]),v._v(" 死锁的成因")]),v._v(" "),_("ul",[_("li",[v._v("资源"),_("strong",[v._v("互斥")]),v._v("使用，一旦占有别人无法使用")]),v._v(" "),_("li",[v._v("进程"),_("strong",[v._v("占有")]),v._v("了一些资源，又不释放，再去"),_("strong",[v._v("申请")]),v._v("其他资源")]),v._v(" "),_("li",[v._v("各自占有的资源和互相申请的资源形成了"),_("strong",[v._v("环路等待")])])]),v._v(" "),_("h3",{attrs:{id:"死锁的四个必要条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#死锁的四个必要条件"}},[v._v("#")]),v._v(" 死锁的四个必要条件")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("互斥使用(Mutual exclusion)")]),v._v("，资源的固有特性")]),v._v(" "),_("li",[_("strong",[v._v("不可抢占(No preemption)")]),v._v("，资源只能自愿放弃")]),v._v(" "),_("li",[_("strong",[v._v("请求和保持(Hold and wait)")]),v._v("，进程必须占有资源，再去申请")]),v._v(" "),_("li",[_("strong",[v._v("循环等待(Circular wait)")]),v._v("，在资源分配图中存在一个环路")])]),v._v(" "),_("h3",{attrs:{id:"死锁处理方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#死锁处理方法"}},[v._v("#")]),v._v(" 死锁处理方法")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("死锁预防")]),v._v("：破坏死锁出现的条件\n"),_("ul",[_("li",[v._v("在进程执行前，"),_("strong",[v._v("一次性申请所有需要的资源")]),v._v("，不会占有资源再去申请其他资源\n"),_("ul",[_("li",[v._v("缺点1：需要预知未来，编程困难")]),v._v(" "),_("li",[v._v("缺点2：许多资源分配后很长时间后才使用，资源利用率低")])])]),v._v(" "),_("li",[v._v("对资源类型进行排序，"),_("strong",[v._v("资源申请必须按序进行")]),v._v("，不会出现环路等待\n"),_("ul",[_("li",[v._v("缺点：仍然造成资源浪费")])])])])]),v._v(" "),_("li",[_("strong",[v._v("死锁避免")]),v._v("：检测每个资源请求，如果造成死锁就拒绝\n"),_("ul",[_("li",[v._v("如果系统中的所有进程存在一个可完成的执行序列P1，……，Pn（"),_("strong",[v._v("安全序列")]),v._v("），则称系统处于"),_("strong",[v._v("安全状态")]),v._v("，判断的算法为"),_("strong",[v._v("银行家算法")])])])]),v._v(" "),_("li",[_("strong",[v._v("死锁检测 + 恢复")]),v._v("：检测到死锁出现时，让一些进程回滚，让出资源\n"),_("ul",[_("li",[v._v("定时检测或者发现资源利用率低时检测")])])]),v._v(" "),_("li",[_("strong",[v._v("死锁忽略")]),v._v("：就好像没有出现死锁一样，许多通用操作系统，如Windows和Linux，都采用此方法，可以通过重启处理")])]),v._v(" "),_("h2",{attrs:{id:"内存使用与分段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存使用与分段"}},[v._v("#")]),v._v(" 内存使用与分段")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("内存使用：将程序放到内存中，PC指向开始地址")])]),v._v(" "),_("li",[v._v("在内存中找到一段空闲内存，将程序载入到这段空闲内存中，重定位后再设置好PC，不断取指执行")]),v._v(" "),_("li",[v._v("重定位：修改程序中的逻辑地址（是相对地址），修改为物理内存中的实际地址（绝对地址）")]),v._v(" "),_("li",[v._v("什么时候完成重定位？ （嵌入式系统可以在编译时）\n"),_("ul",[_("li",[v._v("编译时重定位的程序只能放在内存固定位置")]),v._v(" "),_("li",[v._v("载入时重定位的程序一旦载入内存就不能动了")]),v._v(" "),_("li",[v._v("重定位最合适的时机——"),_("strong",[v._v("运行时重定位")])]),v._v(" "),_("li",[v._v("理由：程序载入后还需要移动，比如进程睡眠时要换出内存给另一进程，即"),_("strong",[v._v("交换")]),v._v("，充分利用内存")])])]),v._v(" "),_("li",[v._v("运行时重定位：在运行每条指令时才完成重定位\n"),_("ul",[_("li",[v._v("每执行一条指令都要从逻辑地址算出物理地址："),_("strong",[v._v("地址翻译")]),v._v("，基地址base + 偏移offset")]),v._v(" "),_("li",[v._v("每个进程都有各自的基地址，放在了PCB里，执行指令时第一步先从PCB中取出这个基地址")])])])]),v._v(" "),_("h3",{attrs:{id:"分段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分段"}},[v._v("#")]),v._v(" 分段")]),v._v(" "),_("ul",[_("li",[v._v("程序"),_("strong",[v._v("由若干部分（段）组成，每个段有各自的特点、用途")]),v._v("：代码段只读，代码/数据段不会动态增长\n"),_("ul",[_("li",[v._v("符合用户观点：用户可独立考虑每个段（"),_("strong",[v._v("分治")]),v._v("）")]),v._v(" "),_("li",[v._v("怎么定位具体指令（数据）："),_("strong",[v._v("<段号，段内偏移>")]),v._v("，如 "),_("code",[v._v("mov [es:bx], ax")])])])]),v._v(" "),_("li",[v._v("不是将整个程序，是将各段分别放入内存")]),v._v(" "),_("li",[v._v("每个段都有基址，可在段表中查到，而每个进程都有一个段表LDT。对于操作系统，也可以认为是一个进程，它的段表即为GDT表。\n"),_("div",{attrs:{align:"center"}},[_("img",{attrs:{src:t(384),width:"70%"}})])])]),v._v(" "),_("h2",{attrs:{id:"内存分区与分页"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存分区与分页"}},[v._v("#")]),v._v(" 内存分区与分页")])])}),[],!1,null,null,null);_.default=a.exports}}]);