---
title: 'Netty从入门到网络通信实战'
---

## NIO
要理解 Netty，首先要了解 NIO。

### NIO、BIO、AIO
BIO、NIO 是基于 Linux 的后端开发的重要 I/O 模型。
- NIO(Non-blocking I/O)：非阻塞 I/O，


## Netty
### 什么是 Netty？
1. Netty 是一个基于 NIO 的 client-server 框架，使用它可以快速简单地开发网络应用程序。
2. 它极大地简化并简化了 TCP 和 UDP 套接字服务器等网络编程，并且性能以及安全性等很多方面甚至都要更好。
3. 支持多种协议如 FTP、SMTP、HTTP 以及各种二进制和基于文本的传统协议。
> 用官方的总结：Netty 成功找到了一种在不妥协可维护性和性能的情况下实现易于开发、性能、稳定性和灵活性的方法。

### Netty 特点？


### 使用 Netty 能做什么？


### 为什么使用 Netty 而不用原生的 NIO？
- Netty 的框架底层封装了 NIO。
- NIO 存 API 复杂难用，尤其是 ByteBuffer 的指针切来切去，在 Netty 当中封装了好用的 ByteBuf。
- NIO 子设计的可靠性不易保证，断线重连、半包粘包、网络拥塞统统需要自己考虑。


## EventLoopGroup 和 EventLoop
- EventLoopGroup 是一组 EventLoop 的容器，用于管理和调度多个 EventLoop。它通常在启动 Netty 服务器或客户端时创建，用于处理所有的网络请求和事件。EventLoopGroup 负责为每个 Channel 分配 EventLoop，并负责管理这些 EventLoop 的生命周期。  
- EventLoop 是 Netty中的事件循环，它负责处理一个或多个 Channel 上的事件，相当于一个线程。每个 Channel 都会被分配到一个 EventLoop 上，而一个 EventLoop 可以处理多个 Channel。EventLoop 内部维护着一个事件循环，通过不断地循环等待事件的发生，并执行相应的任务来处理这些事件。EventLoop 使用单线程来处理事件，因此是线程安全的。   
- 一个 EventLoopGroup 通常包含多个 EventLoop，这些 EventLoop 共享一个线程池（也称为执行器），用于执行事件处理任务。EventLoopGroup 在创建时会初始化一组 EventLoop，并在需要时将 Channel 分配给其中一个 EventLoop 来处理。这种方式能够实现高效的事件处理和并发连接管理。

### bossEventLoopGroup 和 workerEventLoopGroup
在 Netty 服务器端编程中，我们需要设置 BossEventLoopGroup 和 WorkerEventLoopGroup 两个 EventLoopGroup 来进行工作。   

BossEventLoopGroup 通常是一个单线程的 EventLoop，这个 EventLoop 维护着一个注册了 ServerSocketChannel 的 Selector 实例，它的实现涵盖 IO 事件的分离，和分发（Dispatcher），充当 Reactor 模式中的分发（Dispatcher）的角色。所以通常可以将 BossEventLoopGroup 的线程数参数为 1。  

BossEventLoop 只负责处理连接，故开销非常小，连接到来，马上按照策略将 SocketChannel 转发给 WorkerEventLoopGroup，WorkerEventLoopGroup 会由 next() 选择其中一个 EventLoop 来将这个SocketChannel 注册到其维护的 Selector 并对其后续的 IO 事件进行处理。

> 在实际中，总共有多个线程组以及一个初始线程：
> - 初始线程（/主线程）：负责设置 serverBootstrap，包括 BossEventLoopGroup、workerEventLoopGroup、Handler 等多个设置，绑定服务端监听客户端请求的端口（这个端口是服务端本地的端口），以及监听端口的关闭（意味着服务端关闭，服务结束）。
> - BossEventLoopGroup：负责处理连接的单线程池。
> - WorkerEventLoopGroup：负责对 SocketChannel 后续的 IO 事件进行处理的线程池。
> - ServiceHandlerGroup：一般是处理自定义服务器 Handler 的线程池，也就是处理解码解压缩之后的真正的请求的线程池。

### EventLoopGroup 使用
- EventLoopGroup 可以通过构造方法设置 EventLoop 的个数，默认创建的 EventLoop 是 `CPU 核心数 × 2`
- `EventLoopGroup.next()`：该方法返回下一个将要使用的 EventLoop，相当于线程池返回下一个用来处理任务的线程。

### DefaultEventLoop 和 NioEventLoop 区别
1. NioEventLoop 是一个线程，用于 IO Read Write 监控
2. DefaultEventLoop 是一个普通线程，工作内容可以由程序员决定，不做 IO 监控
> 后续 Netty 进行多线程开发，推荐大家优先考虑 DefaultEventLoop。

```Java
//  DefaultEventLoop 使用
EventLoopGroup defaultEventLoopGroups = new DefaultEventLoopGroup();
EventLoop defaultEventLoop = defaultEventLoopGroups.next();

//submit就是我们要干的事。
defaultEventLoop.submit(() -> {
    log.debug("hello");
});
```


## Handler
### 什么是 Handler
当建立连接之后，实际上后面要进行 IO 操作，IO 操作是由 Handler 来操作。Handler 是一组的，基于一种各司其职的思想，不论是客户端还是服务端，数据里路过来之后，我们经过一系列的数据处理，就可以进行后续业务的开发。   

一系列 Handler 基于 PipeLine 整合在一起，PipeLine 是它的管理者。这是一种典型的责任链的设计模式，把一个工作分成一个链条，对数据进行不同的加工。  

作为我们的 Handler 来讲是有方向的：读入数据的 Handler 和写出数据的 Handler  
读入数据的 Handler：ChannelInboundHandlerAdapter  
写出数据的 Handler：ChannelOutboundHandlerAdapter

### Handler 的使用
Handler 是由 EventLoopGroup 当中的线程执行的。  
Handler 的处理中，`object msg` 就是客户端传输过来的数据，只是这时候，接收到的还是在 ByteBuffer 中，Netty 中我们叫做 ByteBuf。

### 读数据多个 Handler 之间如何进行数据传递？
```java
super.channelRead(ctx, s); //将一个 Handler 处理完的数据交给下一个 Handler
```
上面的方法就是把一个 Handler 处理完的数据交给下一个 Handler，第一个参数是 Handler 整个上下文环境数据，第二个参数 msg 代表着要带给下一个 Handler 的数据，而下一个 Handler 是通过接口函数中的 `object msg` 接收的。   

当一个 Handler 处理完消息后，消息在处理链中以原始的数据类型进行传递。如果前一个 Handler 处理的是 ByteBuf，则下一个 Handler 接收到的仍然是 ByteBuf。这样的设计有助于高效处理数据和减少内存拷贝。但根据业务需求，可以进行类型转换，将数据转换为其他形式的消息对象，并将其传递给下一个 Handler。  

> 最后一个 Handler 是不需要调用 super 的。

super.channelRead() 方法真正操作的是 `ctx.fireChannelRead(msg)` 方法，只有这个 ctx 才具有传递数据的能力，因为这个是上下文环境。  

多个 Handler 依次顺序执行，在 Netty 执行的时候默认会为我们添加两个 Handler，分别是 head 和 tail，即执行顺序是：**head -> handler1 -> handler2 -> ... -> tail**

### Handler 和 ChildHandler 
在Netty中，Handler 和 ChildHandler 是用于配置 ChannelPipeline 的两个方法，它们的区别在于作用范围和生效对象的不同。
- Handler：
  - handler 方法用于配置 ServerBootstrap 或 Bootstrap 的 ChannelPipeline 中的处理器。
  - handler 方法添加的处理器是针对服务端或客户端整体的，对于每个连接或 Channel 都会生效。
  - 通常用于配置全局共享的处理器，例如处理服务器启动事件、服务器关闭事件处理、连接的建立和关闭事件、心跳处理等。
  - 该方法一般在服务器启动前调用。
- ChildHandler：
  - childHandler 方法用于配置 ServerBootstrap 的子 Channel（即接受客户端连接后创建的Channel）的 ChannelPipeline 中的处理器。
  - childHandler 方法添加的处理器是针对每个连接的，对于每个子 Channel 都会生效。
  - 通常在 childHandler 方法中配置的处理器用于处理与客户端连接相关的业务逻辑，如协议解析、数据处理等。
  - 该方法一般在服务器启动后的 Channel 创建时调用。

### 什么叫接受客户端连接后创建的子 channel？
在 Netty 中，服务器在接受客户端连接时会为每个客户端连接创建一个子 Channel，这个子 Channel 代表了与客户端的具体连接，通过该通道可以进行数据的读取和写入。这个子 Channel 是由服务器的 ServerChannel 接受连接后创建的。每个子 Channel 都拥有自己的 ChannelPipeline 和事件处理器，可以根据具体业务需求配置相应的处理逻辑。  

在服务器端的编程模型中，主要有两个层次的通道：  
1. 服务器的 ServerChannel：负责监听端口、接受客户端连接，并创建子 Channel。服务器的 ServerChannel 通常是通过 ServerBootstrap 的 channel() 方法指定的。
2. 客户端的子 Channel：由服务器的 ServerChannel 接受连接后创建的子 Channel，用于与客户端进行实际的数据通信。每个子 Channel 都有自己的 ChannelPipeline 和处理器链。  

通过使用子 Channel，服务器可以同时处理多个客户端的连接请求，每个连接都有独立的通道进行数据的读写和处理。

## Netty 中的异步设计
Netty 是异步的，很多操作都是异步的。所有涉及到网络和 IO 的相关操作都会进行异步处理。对于这些操作我们需要执行两种操作，要么主线程同步阻塞，要么辅助线程执行异步回调（异步监听，不阻塞主线程）。

### 异步和多线程的关系及区别
异步也是多线程编程，所谓的异步编程和我们的多线程编程在应用过程中有着一些区别。
- 多线程编程：JavaWeb 中多个客户端对应的后台线程是平等的关系。
- 异步多线程：它有一个线程是主要的，除却主要的部分，有复杂的和耗时的操作交给另一个线程来做，这两个线程配合地去完成一系列的操作。而且往往这个主线程还需要这个辅助线程将结果交给它。


## 参考博客
- https://blog.csdn.net/lic721/article/details/126842761
- https://blog.csdn.net/Facial_Mask/article/details/127589593
- https://blog.csdn.net/twt936457991/article/details/89854851