---
title: '知识点自测速记之Netty'
---


### 什么是Netty？它在网络编程中解决了什么问题？  

Netty 是高性能 Java 网络通信的底层框架，它使用异步、事件驱动等架构，解决了传统 Java 网络编程中的一些复杂问题：  
1. BIO 阻塞瓶颈
2. 原生 NIO 开发复杂
3. 网络编程常见痛点：自带 TCP 粘包拆包、心跳检测、内存池等生产级解决方案

### 为什么它这么流行？为什么这么多中间件都在它之上构建？  

1. 易用，对 Java 的 NIO 进行了封装，屏蔽了 NIO 使用的复杂性；支持众多协议；处理了拆包粘包等问题
2. 性能：良好的 I/O 模型，实现了 I/O 多路复用；运用了零拷贝技术；运用对象池技术复用对象
3. 扩展性：基于事件驱动模型，将业务实现剥离成一个个 ChannelHandler，利用责任链模式，可以很好的根据不同的业务进行扩展


### 说一下你知道的几种I/O模型？  

1. 同步阻塞I/O（BIO）：线程调用 read 时，如果数据还未到来，线程会一直阻塞等待；数据从网卡到内核，再从内核到用户空间，这两个拷贝过程都为阻塞操作
2. 同步非阻塞I/O（NIO）：在非阻塞模式下，read 调用如果没有数据就绪就会立即返回错误（或特定状态），不会阻塞线程；应用程序需要不断轮询判断数据是否就绪，但当数据拷贝到用户空间时依然是阻塞的
3. I/O多路复用：通过一个线程（或少量线程）使用select、poll、epoll等系统调用，去监控多个连接的状态；只有当某个连接的数据就绪时，系统才会通知应用程序，应用程序再调用 read 去内核空间拷贝数据到用户空间（读取时仍为阻塞状态）
4. 信号驱动I/O：由内核在数据就绪时发出信号通知应用程序，应用程序收到信号后再调用 read (依然阻塞)。对于TCP协议，由于同一个信号可能对应多个事件(不仅仅是数据准备就绪)，难以精确区分（所以实际应用较少）
5. 异步I/O（Asynchronous I/O, AIO）：调用 aio_read 后，内核负责将数据从网卡拷贝到用户空间，拷贝完成后通过回调通知应用程序；整个过程用户线程没有阻塞，真正实现了非阻塞。


### 说一下 Netty 的应用场景？  

- 许多框架底层通信的实现，比如说 RocketMQ、Dubbo、Elasticsearch、Cassandra等，底层都使用到了Netty
- 游戏行业，在游戏服务器开发中，Netty用于处理大量并发的游戏客户端连接，提供低延迟的网络通信能力
- 实现一个通讯系统，比如连天使、IM等，处理高并发的实时消息传输
- 物联网即IOT场景，Netty可用于设备与服务器之间的通信，处理设备数据的收集和命令下发


### 介绍一下 Reactor 线程模型？  

Reactor 是服务端在网络编程时的一个编程模式，主要由一个基于 Selector（底层是 select/poll/epoll）的死循环线程，也称为 Reactor 线程。   
基于事件驱动，将 I/O 操作抽象成不同的事件，每个事件都配置对应的回调函数，由 Selector 监听连接上事件的发生，再进行分发调用相应的回调函数进行事件的处理。     
Reactor 的核心在于“对事件做出反应”。用一个线程（或少量线程）来监听多个连接上的事件，根据事件类型分发调用相应的处理逻辑，从而避免为每一个连接都分配一个线程。   
Reactor 线程模型分为三种：  
- 单Reactor单线程模型：所有操作都由一个I/O线程处理
- 单Reactor多线程模型：一个线程负责建连事件和后续的连接I/O处理（read、send等），线程池处理具体业务逻辑
- 主从Reactor多线程模型：主Reactor线程负责接收建连事件，从Reactor线程负责处理建连后的后续I/O处理（read、send等），线程池处理具体业务逻辑


### 什么是零拷贝？  

零拷贝是提升IO操作的一个常用手段，它是指计算机在执行IO操作时，CPU不需要将数据从一个存储区域复制到另一个存储区域（一般是内核缓冲区、用户缓冲区即内存、socket缓冲区），从而减少上下文切换以及CPU的拷贝时间。即，零拷贝主要解决操作系统在处理IO操作时频繁复制数据的问题。  

|              |  CPU拷贝                        |  DMA 拷贝   |  系统调用       |  上下文切换  |
|   ---        | ---                            |  ---       | ---            | ---          |
|传统方法       |  2 （内核和用户、用户和socket）  |  2         |  read + write  |  4          |
| mmap + write |  1（内核和socket之间）           |  2         |  mmap + write  |  4          |
|sendfile      | 1（内核和socket之间）            |  2         |  sendfile      |  2          |

> CPU拷贝指的是内核缓冲区、用户缓冲区、socket缓冲区之间的拷贝
> DMA拷贝指的是网卡和内核缓冲区之间的拷贝（读），以及socket缓冲区和网卡之间的拷贝（写）
> 内核缓冲区和socket缓冲区都是在内核中的，所以就它们之间拷贝就不用复制数据到用户空间了


### Netty的零拷贝机制

Netty的零拷贝包括以下四个方面：  
- FileRegion接口：用于文件传输的接口，通过调用操作系统的sendfile函数实现文件的零拷贝。  
- CompositeByteBuf：它是Netty提供的一种组合缓冲区，可以将多个ByteBuf实例组合成一个逻辑上的缓冲区，而不需要实际拷贝数据。
  > CompositeByteBuf 内部维护了一个组件列表（Component数组），保存了对原始ByteBuf的引用以及在缓冲区中的起始偏移量和结束偏移量。当进行读写时，Netty会根据偏移量直接操作对应的原始ByteBuf，而无需将数据复制到新的连续内存区域。  
- ByteBuf：ByteBuf提供了直接缓冲区（Direct Buffer）和堆缓冲区（Heap Buffer），而直接缓冲区就是堆外内存，使用直接缓冲区可以减少堆内外之间数据的拷贝
- 内存映射文件：通过 MappedByteBuffer 将文件映射到内存中，使得文件数据可以直接读写，无需额外的数据复制，进而封装成Netty的ByteBuf用于高效传输   


### Netty 性能为什么这么高？  

- 非阻塞I/O模型：Netty 底层使用 NIO 非阻塞模型，并且利用 I/O 多路复用，通过 Selector 监听多个 Channel 的 IO 时间，使得系统资源得到了充分利用，减少线程开销
- 高效的内存操作与内存池设计：ByteBuf 提供了丰富的功能，如动态扩展、符合缓冲区等，能有效地进行内存操作，并使用内存池技术来优化ByteBuf的分配和回收，减少频繁的内存分配和释放操作，提高性能
- 优秀的线程模型：Netty 底层有很多哦优秀的线程模型，如 Reactor 模型、主从 Reactor 模型、多线程模型等，可以高效地发挥系统资源的优势，减少锁冲突，实现无串行，针对不同业务场景的诉求，可以自定灵活控制线程，提高系统的并发处理能力
- 零拷贝


### 说一下 TCP 半包和粘包问题？  

因为 TCP 协议是面向字节流的，数据在传输过程中没有明确的边界，所以会发生粘包和半包问题  
- 粘包：指的是多个应用层的数据包在传输过程中被合并成一个 TCP 数据包，导致接收方无法区分各个独立的数据包
- 半包：指的是一个应用层的数据包在传输过程中被拆分成多个 TCP 数据包，接收方需要多次读取才能获取完整的数据

常见解决粘包与半包问题有三个方案：  
- 固定长度：约定每个数据包的长度固定，接收方每次读取固定长度的数据即可
- 分隔符：在每个数据包的末尾添加特定的分隔符（如换行符\n），接收方以此为标志分割数据包
- 固定长度字段+内容：在每个数据包的头部添加一个固定长度的字段，表示数据包的总长度，接收方根据该字段读取完整的数据包  


### Netty 是如何解决粘包和拆包问题的？  

Netty 提供了丰富的自带解码器为我们解决粘包和拆包问题，也可以让我们自定义序列化解码器  

Netty 自带的解码器：  
- DelimiterBasedFrameDecoder：分隔符解码器，使用特定分隔符来分割消息
- FixedLengthFrameDecoder：固定长度的解码器
- LengthFieldBasedFrameDecoder：可以根据接收到的消息的长度实现消息的动态切分解码，也就是数据包头部有一个固定长度字段
- LineBasedFrameDecoder：特殊的分隔符解码器，采用换行符作为分隔符

自定义解码器：继承 ByteToMessageDecoder


### Netty 采用了哪些设计模式？  

1. 策略模式：Netty 提供了多种 EventLoopGroup 实现（如 NioEventLoopGroup、EpollEventLoopGroup），可以根据不同的操作系统和需求来选择不同的实现
2. 单例模式：池化设计经常需要用到单例模式，Netty 的 PooledByteBufAllocator.DEFAULT 就是一个单例实例，用于全局共享的内存池分配器
3. 工厂模式：Bootstrap 和 ServerBootstrap 在创建 Channel 的时候，可以根据传入的 Class 参数来构建对应的 Channel，这个就是工厂模式的一个实现
4. 责任链模式：Netty 中的 ChannelPipeLine 和 ChannelHandler 就是责任链模式的典型应用
5. 建造者模式：Netty 的 Bootstrap 和 ServerBootstrap 类采用了建造者模式，用于配置和创建客户端和服务器实例。通过链式调用的方式，用户可以很方便地配置各种参数，并最终调用 bind 或 connect 方法来启动服务
6. 装饰者模式：ByteBuf 实现了装饰者模式。不同的 ByteBuf 实现类可以相互包装，以添加新的功能


### Netty 如何解决 JDK NIO 中的空轮询 Bug？

JDK NIO 中空轮询 Bug 的原因：  
当连接的 Socket 被突然中断（如对端异常关闭）时，epoll 会将该 Socket 的事件标记为 EPOLLHUP 或 EPOLLERR，导致 Selector 被唤醒。然而，SelectionKey 并未定义处理这些异常事件的类型，导致 Selector 被唤醒后，无法处理这些异常事件，从而进入空轮询状态，导致 CPU 占用率过高。  

Netty 实际上并没有解决 JDK 原生 NIO 中空轮询 bug，而是通过其他途径绕开了这个错误。    
具体操作如下：  
1. 统计空轮询次数：Netty 通过 selectCnt 计数器来统计连续空轮询的次数。每次执行 Selector.select() 方法后，如果没有 I/O 事件，selectCnt 就会递增
2. 设置阈值：Netty 定义了一个阈值 SELECTOR_AUTO_REBUILD_THRESHOLD，默认值为 512。当空轮询次数打到这个阈值时，Netty 会触发重建 Selector 的操作
3. 重建 Selector：当打到空轮询的阈值时，Netty 会创建一个新的 Selector，并将所有注册的 Channel 从旧的 Selector 转移到新的 Selector。这一过程涉及到取消旧 Selector 的注册，以及在新的 Selector 上重新注册 Channel
4. 关闭旧的 Selector：在成功重建 Selector 并将 Channel 重新注册后，Netty 会关闭旧的 Selector，从而避免在旧 Selector 上发生空轮询。  

总的来看，就是通过 selectCnt 来统计没有 I/O 事件的次数来判断当前是否发生了空轮询，如果发生了就重建一个 Selector 替换之前出问题的 Selector，所以说 Netty 并没有实际解决空轮询的 Bug，只是绕开了这个问题。  


### 在 Netty 中，什么是 Channel？什么是是 ChannelHandlerContext？  

在 Netty 中，Channel 表示一个网络连接，抽象了底层的网络操作，提供了绑定、连接、读写和关闭等操作，是网络 IO 操作的核心抽象。   

ChannelHandlerContext 是 Netty 中用来在 ChannelPipeline 中传递数据和处理上下文的对象，它连接 ChannelHandler 和 ChannelPipeline，用于在 ChannelPipeline 中传递事件和操作。   
ChannelHandlerContext 可以通过 fireChannelRead() 方法来将数据和消息传递给 ChannelPipeline 中的下一个 ChannelHandler。   

Channel 有多种类型：  
- SocketChannel：可以直接将它当作所建立的连接，利用 TCP 协议进行读写网络数据
- ServerSocketChannel：服务端创建的 Socket，用于监听新建连的 TCP 连接，并为该连接创建对应的 SocketChannel
- DatagramChannel：采用 UDP 协议，直接通过 UDP 进行网络数据读写
- FileChannel：用于文件的数据读写  