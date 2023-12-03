(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{666:function(v,_,a){"use strict";a.r(_);var t=a(18),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("blockquote",[a("p",[v._v("这篇文章以问答的形式用于快速回顾知识点以及用于自测。"),a("br"),v._v("\n因为知识点相当多，即使在看时能够理解记住，但过后也往往只是有印象，大概知道是什么东西，但想回答出来却总是卡壳，看了忘，忘了看。因此，这篇文章用于帮助速记回忆，自测时可以由这些点延伸。\n注：参考的主要是 Guide 哥的网站内容以及 chatGPT。")])]),v._v(" "),a("h2",{attrs:{id:"操作系统基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作系统基础"}},[v._v("#")]),v._v(" 操作系统基础")]),v._v(" "),a("h4",{attrs:{id:"什么是操作系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是操作系统"}},[v._v("#")]),v._v(" 什么是操作系统？")]),v._v(" "),a("ol",[a("li",[v._v("是管理计算机硬件与软件资源的程序，是计算机的基石。")]),v._v(" "),a("li",[v._v("操作系统本质上是一个运行在计算机上的软件程序，主要用于管理计算机硬件和软件资源。")]),v._v(" "),a("li",[v._v("操作系统屏蔽了硬件层的复杂性。")]),v._v(" "),a("li",[v._v("操作系统的内核是操作系统的核心部分，它负责系统的内存管理，硬件设备的管理，文件系统的管理以及应用程序的管理。内核是连接应用程序和硬件的桥梁，决定着系统的性能和稳定性。")])]),v._v(" "),a("h4",{attrs:{id:"操作系统内核与-cpu-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作系统内核与-cpu-的区别"}},[v._v("#")]),v._v(" 操作系统内核与 CPU 的区别？")]),v._v(" "),a("ol",[a("li",[v._v("操作系统内核属于操作系统层面，而 CPU 属于硬件。")]),v._v(" "),a("li",[v._v("CPU 主要提供运算，处理各种指令的能力。内核主要负责系统管理。")])]),v._v(" "),a("h4",{attrs:{id:"操作系统主要有哪些功能-从资源管理的角度来看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作系统主要有哪些功能-从资源管理的角度来看"}},[v._v("#")]),v._v(" 操作系统主要有哪些功能（从资源管理的角度来看）？")]),v._v(" "),a("ol",[a("li",[a("strong",[v._v("进程和线程管理")]),v._v("：进程的创建、撤销、阻塞、唤醒、进程间的通信等。")]),v._v(" "),a("li",[a("strong",[v._v("存储管理")]),v._v("：内存的分配和管理、外存（磁盘等）的分配和管理等。")]),v._v(" "),a("li",[a("strong",[v._v("文件管理")]),v._v("：文件的读、写、创建和删除等。")]),v._v(" "),a("li",[a("strong",[v._v("设备管理")]),v._v("：完成设备（输入输出设备和外部存储设备等）的请求和释放，以及设备启动等功能。")]),v._v(" "),a("li",[a("strong",[v._v("网络管理")]),v._v("：负责管理计算机网络的使用。")]),v._v(" "),a("li",[a("strong",[v._v("安全管理")]),v._v("：用户的身份认证、访问控制、文件加密等，以防止非法用户对系统资源的访问和操作。")])]),v._v(" "),a("h4",{attrs:{id:"常见的操作系统有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的操作系统有哪些"}},[v._v("#")]),v._v(" 常见的操作系统有哪些？")]),v._v(" "),a("p",[v._v("Windows、Unix、Linux、Mac OS")]),v._v(" "),a("h4",{attrs:{id:"什么是用户态和内核态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是用户态和内核态"}},[v._v("#")]),v._v(" 什么是用户态和内核态？")]),v._v(" "),a("p",[v._v("根据进程访问资源的权限不同，可以把进程在系统上的运行分为两个级别：")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("用户态")]),v._v("：用户态运行的进程可以直接读取用户程序的数据，拥有较低的权限。")]),v._v(" "),a("li",[a("strong",[v._v("内核态")]),v._v("：内核态运行的进程几乎可以访问计算机的任何资源，拥有非常高的权限。")])]),v._v(" "),a("p",[v._v("用户态 -> 系统调用 -> 内核态")]),v._v(" "),a("h4",{attrs:{id:"为什么要有用户态和内核态-只有一个内核态不行吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有用户态和内核态-只有一个内核态不行吗"}},[v._v("#")]),v._v(" 为什么要有用户态和内核态？只有一个内核态不行吗？")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("安全性")]),v._v("：在 CPU 的所有指令中，有一些指令是比较危险的比如内存分配、设置时钟、IO 处理等，因此需要限制这些危险指令只能在内核态运行，这些也被称为"),a("strong",[v._v("特权指令")]),v._v("。")]),v._v(" "),a("li",[a("strong",[v._v("只有内核态的话所有系统资源会共享")]),v._v("：如果计算机只有一个内核态，那么所有程序或进程都必须共享系统资源，这将导致系统资源的竞争和冲突，从而影响系统性能和效率。")])]),v._v(" "),a("h4",{attrs:{id:"用户态和内核态是如何切换的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户态和内核态是如何切换的"}},[v._v("#")]),v._v(" 用户态和内核态是如何切换的？")]),v._v(" "),a("ol",[a("li",[a("strong",[v._v("系统调用（Trap）")]),v._v("：用户态进程 "),a("strong",[v._v("主动")]),v._v(" 要求切换到内核态的一种方式，主要是为了使用内核态才能做的事情比如读取磁盘资源。系统调用的机制其核心还是使用了操作系统为用户特别开放的一个中断来实现。")]),v._v(" "),a("li",[a("strong",[v._v("中断（Interrupt）")]),v._v("：当外围设备完成用户请求的操作后，会向 CPU 发出相应的中断信号，这时 CPU 会暂停执行下一条即将要执行的指令转而去执行与中断信号对应的处理程序，如果先前执行的指令是用户态下的程序，那么这个转换的过程自然也就发生了由用户态到内核态的切换。比如硬盘读写操作完成，系统会切换到硬盘读写的中断处理程序中执行后续操作等。")]),v._v(" "),a("li",[a("strong",[v._v("异常（Exception）")]),v._v("：当 CPU 在执行运行在用户态下的程序时，发生了某些事先不可知的异常，这时会触发由当前运行进程切换到处理此异常的内核相关程序中，也就转到了内核态，比如缺页异常。")])]),v._v(" "),a("h4",{attrs:{id:"什么是系统调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是系统调用"}},[v._v("#")]),v._v(" 什么是系统调用？")]),v._v(" "),a("p",[v._v("操作系统内核提供的一些接口用于访问操作系统底层资源")]),v._v(" "),a("h4",{attrs:{id:"系统调用的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统调用的过程"}},[v._v("#")]),v._v(" 系统调用的过程？")]),v._v(" "),a("p",[v._v("程序用户态发起系统调用 -> 特权指令触发中断 Trap -> 内核态 -> 执行中断处理程序，开始处理系统调用 -> 处理完成，主动触发 Trap -> 用户态。")]),v._v(" "),a("h2",{attrs:{id:"进程与线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程"}},[v._v("#")]),v._v(" 进程与线程")]),v._v(" "),a("h4",{attrs:{id:"什么是进程与线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是进程与线程"}},[v._v("#")]),v._v(" 什么是进程与线程？")]),v._v(" "),a("p",[v._v("进程：一般是一个程序实例。"),a("br"),v._v("\n线程：也被称为轻量级进程，是更小的运行单位，同一个进程下的线程共享进程的资源。")]),v._v(" "),a("h4",{attrs:{id:"线程和进程的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程和进程的区别"}},[v._v("#")]),v._v(" 线程和进程的区别？")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("资源的共享情况")]),v._v("：不同进程有各自的资源，同一个进程下的不同线程共享进程的堆和方法区资源，但是每个线程都有自己的程序计数器、虚拟机栈和本地方法栈。")]),v._v(" "),a("li",[a("strong",[v._v("独立性")]),v._v("：各进程是独立的，而各线程则不一定，因为同一进程中的线程极有可能会相互影响。")]),v._v(" "),a("li",[a("strong",[v._v("上下文切换消耗")]),v._v("：线程执行开销小，上下文切换的消耗也小，但不利于资源的管理和保护；而进程则正相反。")])]),v._v(" "),a("h4",{attrs:{id:"有了进程为什么还需要线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有了进程为什么还需要线程"}},[v._v("#")]),v._v(" 有了进程为什么还需要线程？")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("切换开销")]),v._v("：线程切换的成本较低")]),v._v(" "),a("li",[a("strong",[v._v("轻量级")]),v._v("：线程更轻量，一个进程可以有多个线程。")]),v._v(" "),a("li",[a("strong",[v._v("并发情况")]),v._v("：多个线程可以并发处理不同的任务，更有效地利用多处理器和多核计算机。而进程只能在一个时间干一件事，如果在执行过程中遇到阻塞问题比如 IO 阻塞就会挂起直至结果返回。")]),v._v(" "),a("li",[a("strong",[v._v("彼此之间的通信")]),v._v("：同一进程内的线程共享内存和文件，因此他们之间相互通信无须调用内核。")])]),v._v(" "),a("h4",{attrs:{id:"为什么要使用多线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用多线程"}},[v._v("#")]),v._v(" 为什么要使用多线程？")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("切换开销")]),v._v("：线程切换和调度的成本远远小于进程。")]),v._v(" "),a("li",[a("strong",[v._v("现代系统应用需求")]),v._v("：现代系统应用动辄要求百万级甚至千万级的并发量，而多线程并发编程正是开发高并发系统的基础。")]),v._v(" "),a("li",[a("strong",[v._v("单核情况")]),v._v("：在单核的情况下，多个线程能够提高 CPU 的利用率，因为一个线程阻塞之后 CPU 能够让给其他线程使用。")]),v._v(" "),a("li",[a("strong",[v._v("多核情况")]),v._v("：多核情况下，如果只有一个线程，则只会有一个 CPU 核心被利用，而使用多个线程，则能够利用多个 CPU 核。")])]),v._v(" "),a("h4",{attrs:{id:"线程间的同步方式有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程间的同步方式有哪些"}},[v._v("#")]),v._v(" 线程间的同步方式有哪些？")]),v._v(" "),a("ol",[a("li",[v._v("互斥锁(Mutex)：采用互斥对象机制，只有拥有互斥对象的线程才有访问公共资源的权限。因为互斥对象只有一个，所以可以保证公共资源不会被多个线程同时访问。比如 Java 中的 synchronized 关键字和各种 Lock 都是这种机制。")]),v._v(" "),a("li",[v._v("读写锁（Read-Write Lock）：允许多个线程同时读取共享资源，但只有一个线程可以对共享资源进行写操作。")]),v._v(" "),a("li",[v._v("信号量(Semaphore)：它允许同一时刻多个线程访问同一资源，但是需要控制同一时刻访问此资源的最大线程数量。")]),v._v(" "),a("li",[v._v("屏障（Barrier）：屏障是一种同步原语，用于等待多个线程到达某个点再一起继续执行。当一个线程到达屏障时，它会停止执行并等待其他线程到达屏障，直到所有线程都到达屏障后，它们才会一起继续执行。比如 Java 中的 CyclicBarrier 是这种机制。")]),v._v(" "),a("li",[v._v("事件(Event) :Wait/Notify：通过通知操作的方式来保持多线程同步，还可以方便的实现多线程优先级的比较操作。")])]),v._v(" "),a("h4",{attrs:{id:"pcb-是什么-包含哪些信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pcb-是什么-包含哪些信息"}},[v._v("#")]),v._v(" PCB 是什么？包含哪些信息？")]),v._v(" "),a("p",[v._v("PCB 即进程控制块，是操作系统中用来管理和跟踪进程的数据结构，每个进程都对应着一个独立的 PCB。可以将 PCB 视为进程的大脑。"),a("br"),v._v("\n它包含进程的描述信息、调度信息、对资源的需求情况、打开的文件信息、处理机的状态信息等。")]),v._v(" "),a("h4",{attrs:{id:"进程有哪几种状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程有哪几种状态"}},[v._v("#")]),v._v(" 进程有哪几种状态？")]),v._v(" "),a("p",[v._v("创建、就绪、运行、阻塞、结束")]),v._v(" "),a("h4",{attrs:{id:"进程间的通信-ipc-常见的有哪几种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程间的通信-ipc-常见的有哪几种方式"}},[v._v("#")]),v._v(" 进程间的通信 IPC 常见的有哪几种方式？")]),v._v(" "),a("p",[v._v("-** 管道/匿名管道**：是单向的，只存在于内存中的文件，用于具有亲缘关系的父子进程或者兄弟进程间的通信。")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("有名管道")]),v._v("：是单向的，存在于实际的磁盘介质或者文件系统中，严格遵循 FIFO。")]),v._v(" "),a("li",[a("strong",[v._v("信号")]),v._v("：一种比较复杂的通信方式，用于通知接收进程某个事件已经发生。")]),v._v(" "),a("li",[a("strong",[v._v("消息队列")]),v._v("：消息的链表，存放在内核中，只有在内核重启(即，操作系统重启)或者显式地删除一个消息队列时，该消息队列才会被真正的删除。它不一定以 FIFO 的顺序读取，也可以按消息类型读取。消息队列克服了信号承载信息量少，管道只能承载无格式字 节流以及缓冲区大小受限等缺点。")]),v._v(" "),a("li",[a("strong",[v._v("信号量")]),v._v("：信号量是一个计数器，用于多进程对共享数据的访问，信号量的意图在于进程间同步。这种通信方式主要用于解决与同步相关的问题并避免竞争条件。")]),v._v(" "),a("li",[a("strong",[v._v("共享内存")]),v._v("：使得多个进程可以访问同一块内存空间，不同进程可以及时看到对方进程中对共享内存中数据的更新。这种方式需要依靠某种同步操作，如互斥锁和信号量等。")]),v._v(" "),a("li",[a("strong",[v._v("套接字")]),v._v("：此方法主要用于在客户端和服务器之间通过网络进行通信。")])]),v._v(" "),a("h4",{attrs:{id:"进程的调度算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程的调度算法"}},[v._v("#")]),v._v(" 进程的调度算法？")]),v._v(" "),a("ul",[a("li",[v._v("先到先服务 FCFS")]),v._v(" "),a("li",[v._v("短作业优先 SJF")]),v._v(" "),a("li",[v._v("时间片轮转 Round-Robin")]),v._v(" "),a("li",[v._v("多级反馈队列调度算法 MFQ")]),v._v(" "),a("li",[v._v("优先级调度算法 Priority")])]),v._v(" "),a("h4",{attrs:{id:"僵尸进程和孤儿进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#僵尸进程和孤儿进程"}},[v._v("#")]),v._v(" 僵尸进程和孤儿进程？")]),v._v(" "),a("ul",[a("li",[v._v("僵尸进程：子进程结束但 PCB 仍存在，父进程存在但没有调用 "),a("code",[v._v("wait")]),v._v(" 或 "),a("code",[v._v("waitpid")]),v._v(" 系统调用来释放子进程占用的资源。")]),v._v(" "),a("li",[v._v("孤儿进程：子进程存在但父进程已经结束。")])]),v._v(" "),a("h4",{attrs:{id:"如何查看是否有僵尸进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何查看是否有僵尸进程"}},[v._v("#")]),v._v(" 如何查看是否有僵尸进程？")]),v._v(" "),a("p",[v._v("Linux 下 "),a("code",[v._v("Top")]),v._v(" 命令")]),v._v(" "),a("h4",{attrs:{id:"什么是死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是死锁"}},[v._v("#")]),v._v(" 什么是死锁？")]),v._v(" "),a("p",[v._v("多个进程/线程同时被阻塞，它们中的一个或者全部都在等待某个资源被释放。由于进程/线程被无限期地阻塞，因此程序不可能正常终止。")]),v._v(" "),a("h4",{attrs:{id:"产生死锁的四个必要条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产生死锁的四个必要条件"}},[v._v("#")]),v._v(" 产生死锁的四个必要条件？")]),v._v(" "),a("p",[v._v("互斥、占有并等待、非抢占、循环等待")]),v._v(" "),a("h4",{attrs:{id:"解决死锁的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决死锁的方法"}},[v._v("#")]),v._v(" 解决死锁的方法？")]),v._v(" "),a("ul",[a("li",[v._v("预防：静态分配策略（提前分配所有资源）、层次分配策略（按序分配资源、只能申请更高层资源，释放反之）")]),v._v(" "),a("li",[v._v("避免：银行家算法、获取资源时判断是否安全")]),v._v(" "),a("li",[v._v("检测与解除：\n"),a("ul",[a("li",[v._v("检测：进程-资源分配图检测系统是否处于死锁状态")]),v._v(" "),a("li",[v._v("解除：重启操作系统、撤销涉及死锁进程等解除后继续执行、逐个撤销涉及死锁进程直至死锁节处、抢占资源")])])])]),v._v(" "),a("h2",{attrs:{id:"操作系统内存管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作系统内存管理"}},[v._v("#")]),v._v(" 操作系统内存管理")]),v._v(" "),a("h4",{attrs:{id:"操作系统的内存管理主要是做什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作系统的内存管理主要是做什么"}},[v._v("#")]),v._v(" 操作系统的内存管理主要是做什么？")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("内存的分配与回收")]),v._v("：对进程所需的内存进行分配和释放，"),a("code",[v._v("malloc")]),v._v(" 和 "),a("code",[v._v("free")]),v._v("。")]),v._v(" "),a("li",[a("strong",[v._v("地址转换")]),v._v("：将程序中的虚拟地址转换成内存中的物理地址。")]),v._v(" "),a("li",[a("strong",[v._v("内存扩充")]),v._v("：当系统没有足够的内存时，利用虚拟内存技术或自动覆盖技术，从逻辑上扩充内存。")]),v._v(" "),a("li",[a("strong",[v._v("内存映射")]),v._v("：将一个文件直接映射到进程的进程空间中，这样可以通过内存指针用读写内存的办法直接存取文件内容，速度更快。")]),v._v(" "),a("li",[a("strong",[v._v("内存优化")]),v._v("：通过调整内存分配策略和回收算法来优化内存使用效率。")]),v._v(" "),a("li",[a("strong",[v._v("内存安全")]),v._v("：保证进程之间使用内存互不干扰，避免一些恶意程序通过修改内存来破坏系统的安全性。")])]),v._v(" "),a("h4",{attrs:{id:"什么是内存碎片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是内存碎片"}},[v._v("#")]),v._v(" 什么是内存碎片？")]),v._v(" "),a("p",[v._v("内存碎片是由内存申请和释放产生的，包括内部内存碎片（分配但未使用）、外部内存碎片（未分配但连续内存区域太小无法利用）")]),v._v(" "),a("h4",{attrs:{id:"常见的内存管理方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的内存管理方式"}},[v._v("#")]),v._v(" 常见的内存管理方式？")]),v._v(" "),a("ul",[a("li",[v._v("连续内存管理（分配一个连续的内存空间）：块式管理")]),v._v(" "),a("li",[v._v("非连续内存管理（允许内存离散）：段式管理（不同段有各自意义）、页式管理、段页式管理机制")])]),v._v(" "),a("h4",{attrs:{id:"什么是虚拟内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟内存"}},[v._v("#")]),v._v(" 什么是虚拟内存？")]),v._v(" "),a("p",[v._v("一种重要的内存管理技术，通过将物理内存抽象成虚拟内存，为每个进程提供一个独立、连续的地址空间，使得每个进程都以为它拥有足够大的内存空间。")]),v._v(" "),a("h4",{attrs:{id:"虚拟内存有什么作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟内存有什么作用"}},[v._v("#")]),v._v(" 虚拟内存有什么作用？")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("隔离进程")]),v._v("：物理内存通过虚拟地址空间访问，虚拟地址空间与进程一一对应。每个进程都认为自己拥有了整个物理内存，进程之间彼此隔离，一个进程中的代码无法更改正在由另一进程或操作系统使用的物理内存。")]),v._v(" "),a("li",[a("strong",[v._v("提升物理内存利用率")]),v._v("：有了虚拟地址空间后，操作系统只需要将进程当前正在使用的部分数据或指令加载入物理内存。")]),v._v(" "),a("li",[a("strong",[v._v("简化内存管理")]),v._v("：进程都有一个一致且私有的虚拟地址空间，程序员不用和真正的物理内存打交道，而是借助虚拟地址空间访问物理内存，从而简化了内存管理。")]),v._v(" "),a("li",[a("strong",[v._v("多个进程共享物理内存")]),v._v("：进程在运行过程中，会加载许多操作系统的动态库。这些库对于每个进程而言都是公用的，它们在内存中实际只会加载一份，这部分称为共享内存。")]),v._v(" "),a("li",[a("strong",[v._v("提高内存使用安全性")]),v._v("：控制进程对物理内存的访问，隔离不同进程的访问权限，提高系统的安全性。")]),v._v(" "),a("li",[a("strong",[v._v("提供更大的可使用内存空间")]),v._v("：可以让程序拥有超过系统物理内存大小的可用内存空间，利用磁盘充当内存。")])]),v._v(" "),a("h4",{attrs:{id:"没有虚拟内存会有什么问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#没有虚拟内存会有什么问题"}},[v._v("#")]),v._v(" 没有虚拟内存会有什么问题？")]),v._v(" "),a("p",[v._v("用户可以访问任意物理内存、同时运行多个程序容易崩溃、内存利用率不高（程序运行所有数据和指令要载入，很大一部分用不到）")]),v._v(" "),a("h4",{attrs:{id:"什么是虚拟内存和物理地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟内存和物理地址"}},[v._v("#")]),v._v(" 什么是虚拟内存和物理地址？")]),v._v(" "),a("p",[v._v("物理地址：真正物理内存地址，内存地址寄存器的地址"),a("br"),v._v("\n虚拟地址：虚拟内存地址")]),v._v(" "),a("h4",{attrs:{id:"怎么将虚拟地址转换为物理地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么将虚拟地址转换为物理地址"}},[v._v("#")]),v._v(" 怎么将虚拟地址转换为物理地址？")]),v._v(" "),a("p",[v._v("地址翻译/ 地址转换：操作系统通过 CPU 芯片的一个重要组件 内存管理单元 MMU 进行转换。")]),v._v(" "),a("h4",{attrs:{id:"mmu-进行地址翻译的机制有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mmu-进行地址翻译的机制有哪些"}},[v._v("#")]),v._v(" MMU 进行地址翻译的机制有哪些？")]),v._v(" "),a("p",[v._v("分页机制、分段机制、段页机制")]),v._v(" "),a("h4",{attrs:{id:"分段机制是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分段机制是什么"}},[v._v("#")]),v._v(" 分段机制是什么？")]),v._v(" "),a("p",[v._v("以段的形式管理/分配内存，各个段有各自的意义")]),v._v(" "),a("h4",{attrs:{id:"段表有什么用-对应的地址翻译过程是怎样的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#段表有什么用-对应的地址翻译过程是怎样的"}},[v._v("#")]),v._v(" 段表有什么用？对应的地址翻译过程是怎样的？")]),v._v(" "),a("p",[v._v("分段管理通过段表映射虚拟地址和物理地址。"),a("br"),v._v("\n分段机制下虚拟地址组成：段号 + 段内偏移量"),a("br"),v._v("\n段号 -> 段表查询段信息 -> 段起始地址 -> 加上偏移量")]),v._v(" "),a("h4",{attrs:{id:"通过段号一定找得到段表项吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过段号一定找得到段表项吗"}},[v._v("#")]),v._v(" 通过段号一定找得到段表项吗？")]),v._v(" "),a("p",[v._v("不一定，段表项被删除、段表项未创建")]),v._v(" "),a("h4",{attrs:{id:"分段机制为什么会导致内存外部碎片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分段机制为什么会导致内存外部碎片"}},[v._v("#")]),v._v(" 分段机制为什么会导致内存外部碎片？")]),v._v(" "),a("p",[v._v("段与段之间碎片空间不足以映射给虚拟地址空间中的段")]),v._v(" "),a("h4",{attrs:{id:"分页机制是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分页机制是什么"}},[v._v("#")]),v._v(" 分页机制是什么？")]),v._v(" "),a("p",[v._v("把主存分为连续等长的物理页，应用程序虚拟地址空间也划分为连续等长的虚拟页。")]),v._v(" "),a("h4",{attrs:{id:"页表有什么用-对应的地址翻译过程是怎样的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页表有什么用-对应的地址翻译过程是怎样的"}},[v._v("#")]),v._v(" 页表有什么用？对应的地址翻译过程是怎样的？")]),v._v(" "),a("p",[v._v("通过页表映射虚拟内存和物理内存。"),a("br"),v._v("\n分页机制下虚拟地址组成：页号 + 页内偏移量"),a("br"),v._v("\n页号 -> 页表中取出物理页号 -> 物理页起始地址 -> 加上偏移量")]),v._v(" "),a("h4",{attrs:{id:"通过虚拟页号一定找得到对应的物理页号吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过虚拟页号一定找得到对应的物理页号吗"}},[v._v("#")]),v._v(" 通过虚拟页号一定找得到对应的物理页号吗？")]),v._v(" "),a("p",[v._v("可能存在页缺失")]),v._v(" "),a("h4",{attrs:{id:"单级页表有什么问题-为什么需要多级页表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单级页表有什么问题-为什么需要多级页表"}},[v._v("#")]),v._v(" 单级页表有什么问题？为什么需要多级页表？")]),v._v(" "),a("p",[v._v("占用内存高、开销大、效率低"),a("br"),v._v("\n32 位是二级页表，64 位是四级页表"),a("br"),v._v("\n多级页表通过增加页表查询次数减少页表占用空间")]),v._v(" "),a("h4",{attrs:{id:"tlb-是什么-有什么用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tlb-是什么-有什么用"}},[v._v("#")]),v._v(" TLB 是什么？有什么用？")]),v._v(" "),a("p",[v._v("TLB 是转址旁路缓存，也就是快表。它是一块高速缓存，缓存虚拟页号到物理页号的映射。")]),v._v(" "),a("h4",{attrs:{id:"换页机制有什么用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#换页机制有什么用"}},[v._v("#")]),v._v(" 换页机制有什么用？")]),v._v(" "),a("p",[v._v("扩充内存，当物理内存不够用时，将一些物理页的内存存到磁盘。")]),v._v(" "),a("h4",{attrs:{id:"什么是页缺失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是页缺失"}},[v._v("#")]),v._v(" 什么是页缺失？")]),v._v(" "),a("p",[v._v("一个分页已映射在虚拟内存中，但是并未加载在物理内存中，由 MMU 发出的中断。"),a("br"),v._v("\n硬性页缺失：物理内存中没有对应的物理页，需从磁盘加载。"),a("br"),v._v("\n软性页缺失：物理内存中有对应的物理页，但还未与虚拟页建立映射。")]),v._v(" "),a("h4",{attrs:{id:"常见的页面置换算法有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的页面置换算法有哪些"}},[v._v("#")]),v._v(" 常见的页面置换算法有哪些？")]),v._v(" "),a("ul",[a("li",[v._v("最佳页面置换算法：理论上最优，但无法实现")]),v._v(" "),a("li",[v._v("先进先出（FIFO）页面置换算法：淘汰最先进入内存的页面")]),v._v(" "),a("li",[v._v("最近最久未使用页面置换算法（LRU）")]),v._v(" "),a("li",[v._v("最少使用页面置换算法（LFU）")]),v._v(" "),a("li",[v._v("时钟页面置换算法（Clock）：一种最近未使用算法")])]),v._v(" "),a("h4",{attrs:{id:"fifo-页面置换算法性能为何不好"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fifo-页面置换算法性能为何不好"}},[v._v("#")]),v._v(" FIFO 页面置换算法性能为何不好？")]),v._v(" "),a("p",[v._v("经常访问或者需要长期存在的页面会被频繁调入调出。"),a("br"),v._v("\n存在 Belady 现象：分配页面数增多但缺页率反而提高。")]),v._v(" "),a("h4",{attrs:{id:"哪一种页面置换算法实际用得比较多"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哪一种页面置换算法实际用得比较多"}},[v._v("#")]),v._v(" 哪一种页面置换算法实际用得比较多？")]),v._v(" "),a("p",[v._v("LRU")]),v._v(" "),a("h4",{attrs:{id:"分页机制和分段机制的共同点和区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分页机制和分段机制的共同点和区别"}},[v._v("#")]),v._v(" 分页机制和分段机制的共同点和区别？")]),v._v(" "),a("ul",[a("li",[v._v("共同点：都是非连续内存管理的方式，都采用了地址映射的方式")]),v._v(" "),a("li",[v._v("区别：\n"),a("ul",[a("li",[v._v("分页以页为单位，分段以段为单位，页大小固定，段大小不固定，页是物理单位，段是逻辑单位")]),v._v(" "),a("li",[v._v("分段容易出现外部内存碎片，分页不会，但仍可能有内部碎片")]),v._v(" "),a("li",[v._v("分段用段表，分页用页表")]),v._v(" "),a("li",[v._v("分页对程序没有要求，分段需要将程序分段")])])])]),v._v(" "),a("h4",{attrs:{id:"段页机制是怎样的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#段页机制是怎样的"}},[v._v("#")]),v._v(" 段页机制是怎样的？")]),v._v(" "),a("p",[v._v("先分段，再将每个段分页。")]),v._v(" "),a("h4",{attrs:{id:"什么是局部性原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是局部性原理"}},[v._v("#")]),v._v(" 什么是局部性原理？")]),v._v(" "),a("p",[v._v("在程序执行过程中，数据和指令的访问存在一定的空间和时间上的局部性特点。"),a("br"),v._v("\n时间局部性：缓存（将最近访问过的一些页放入缓存，与页表不同）"),a("br"),v._v("\n空间局部性：预取技术（预先将相邻的页面读入内存缓存中）")]),v._v(" "),a("h4",{attrs:{id:"虚拟内存技术的实现一般需要哪三个东西"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟内存技术的实现一般需要哪三个东西"}},[v._v("#")]),v._v(" 虚拟内存技术的实现一般需要哪三个东西？")]),v._v(" "),a("p",[v._v("分页或分段机制、页表或段表、页面置换策略或段换入换出策略")]),v._v(" "),a("h2",{attrs:{id:"文件系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件系统"}},[v._v("#")]),v._v(" 文件系统")]),v._v(" "),a("h4",{attrs:{id:"文件系统主要做了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件系统主要做了什么"}},[v._v("#")]),v._v(" 文件系统主要做了什么？")]),v._v(" "),a("p",[v._v("存储管理、文件管理、目录管理、文件访问控制")]),v._v(" "),a("h4",{attrs:{id:"文件链接-file-link-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件链接-file-link-是什么"}},[v._v("#")]),v._v(" 文件链接（File Link）是什么？")]),v._v(" "),a("p",[v._v("一种特殊的文件类型，可以在文件系统中指向另一个文件")]),v._v(" "),a("h4",{attrs:{id:"常见的文件链接类型有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的文件链接类型有哪些"}},[v._v("#")]),v._v(" 常见的文件链接类型有哪些？")]),v._v(" "),a("p",[v._v("硬链接、软链接")]),v._v(" "),a("h4",{attrs:{id:"提高文件系统性能的方式有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提高文件系统性能的方式有哪些"}},[v._v("#")]),v._v(" 提高文件系统性能的方式有哪些？")]),v._v(" "),a("p",[v._v("优化硬件、选择合适的文件系统选型、运用缓存、避免磁盘使用过度、对磁盘进行合理的分区")]),v._v(" "),a("h4",{attrs:{id:"常见的磁盘调度算法有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的磁盘调度算法有哪些"}},[v._v("#")]),v._v(" 常见的磁盘调度算法有哪些？")]),v._v(" "),a("ul",[a("li",[v._v("先到先服务 FCFS")]),v._v(" "),a("li",[v._v("最短寻道时间优先算法 SSTF")]),v._v(" "),a("li",[v._v("扫描算法 SCAN")]),v._v(" "),a("li",[v._v("循环扫描算法 C-SCAN")]),v._v(" "),a("li",[v._v("边扫描边观察算法 LOOK")]),v._v(" "),a("li",[v._v("均衡循环扫描算法 C-LOOK")])])])}),[],!1,null,null,null);_.default=r.exports}}]);