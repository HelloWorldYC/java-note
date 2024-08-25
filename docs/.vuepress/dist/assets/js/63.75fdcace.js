(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{488:function(t,e,a){"use strict";a.r(e);var n=a(8),o=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"nio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nio"}},[t._v("#")]),t._v(" NIO")]),t._v(" "),e("p",[t._v("要理解 Netty，首先要了解 NIO。")]),t._v(" "),e("h3",{attrs:{id:"nio、bio、aio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nio、bio、aio"}},[t._v("#")]),t._v(" NIO、BIO、AIO")]),t._v(" "),e("p",[t._v("BIO、NIO 是基于 Linux 的后端开发的重要 I/O 模型。")]),t._v(" "),e("ul",[e("li",[t._v("NIO(Non-blocking I/O)：非阻塞 I/O，")])]),t._v(" "),e("h2",{attrs:{id:"netty"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#netty"}},[t._v("#")]),t._v(" Netty")]),t._v(" "),e("h3",{attrs:{id:"什么是-netty"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-netty"}},[t._v("#")]),t._v(" 什么是 Netty？")]),t._v(" "),e("ol",[e("li",[t._v("Netty 是一个基于 NIO 的 client-server 框架，使用它可以快速简单地开发网络应用程序。")]),t._v(" "),e("li",[t._v("它极大地简化并简化了 TCP 和 UDP 套接字服务器等网络编程，并且性能以及安全性等很多方面甚至都要更好。")]),t._v(" "),e("li",[t._v("支持多种协议如 FTP、SMTP、HTTP 以及各种二进制和基于文本的传统协议。")])]),t._v(" "),e("blockquote",[e("p",[t._v("用官方的总结：Netty 成功找到了一种在不妥协可维护性和性能的情况下实现易于开发、性能、稳定性和灵活性的方法。")])]),t._v(" "),e("h3",{attrs:{id:"netty-特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#netty-特点"}},[t._v("#")]),t._v(" Netty 特点？")]),t._v(" "),e("h3",{attrs:{id:"使用-netty-能做什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-netty-能做什么"}},[t._v("#")]),t._v(" 使用 Netty 能做什么？")]),t._v(" "),e("h3",{attrs:{id:"为什么使用-netty-而不用原生的-nio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-netty-而不用原生的-nio"}},[t._v("#")]),t._v(" 为什么使用 Netty 而不用原生的 NIO？")]),t._v(" "),e("ul",[e("li",[t._v("Netty 的框架底层封装了 NIO。")]),t._v(" "),e("li",[t._v("NIO 存 API 复杂难用，尤其是 ByteBuffer 的指针切来切去，在 Netty 当中封装了好用的 ByteBuf。")]),t._v(" "),e("li",[t._v("NIO 子设计的可靠性不易保证，断线重连、半包粘包、网络拥塞统统需要自己考虑。")])]),t._v(" "),e("h2",{attrs:{id:"eventloopgroup-和-eventloop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eventloopgroup-和-eventloop"}},[t._v("#")]),t._v(" EventLoopGroup 和 EventLoop")]),t._v(" "),e("ul",[e("li",[t._v("EventLoopGroup 是一组 EventLoop 的容器，用于管理和调度多个 EventLoop。它通常在启动 Netty 服务器或客户端时创建，用于处理所有的网络请求和事件。EventLoopGroup 负责为每个 Channel 分配 EventLoop，并负责管理这些 EventLoop 的生命周期。")]),t._v(" "),e("li",[t._v("EventLoop 是 Netty中的事件循环，它负责处理一个或多个 Channel 上的事件，相当于一个线程。每个 Channel 都会被分配到一个 EventLoop 上，而一个 EventLoop 可以处理多个 Channel。EventLoop 内部维护着一个事件循环，通过不断地循环等待事件的发生，并执行相应的任务来处理这些事件。EventLoop 使用单线程来处理事件，因此是线程安全的。")]),t._v(" "),e("li",[t._v("一个 EventLoopGroup 通常包含多个 EventLoop，这些 EventLoop 共享一个线程池（也称为执行器），用于执行事件处理任务。EventLoopGroup 在创建时会初始化一组 EventLoop，并在需要时将 Channel 分配给其中一个 EventLoop 来处理。这种方式能够实现高效的事件处理和并发连接管理。")])]),t._v(" "),e("h3",{attrs:{id:"bosseventloopgroup-和-workereventloopgroup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bosseventloopgroup-和-workereventloopgroup"}},[t._v("#")]),t._v(" bossEventLoopGroup 和 workerEventLoopGroup")]),t._v(" "),e("p",[t._v("在 Netty 服务器端编程中，我们需要设置 BossEventLoopGroup 和 WorkerEventLoopGroup 两个 EventLoopGroup 来进行工作。")]),t._v(" "),e("p",[t._v("BossEventLoopGroup 通常是一个单线程的 EventLoop，这个 EventLoop 维护着一个注册了 ServerSocketChannel 的 Selector 实例，它的实现涵盖 IO 事件的分离，和分发（Dispatcher），充当 Reactor 模式中的分发（Dispatcher）的角色。所以通常可以将 BossEventLoopGroup 的线程数参数为 1。")]),t._v(" "),e("p",[t._v("BossEventLoop 只负责处理连接，故开销非常小，连接到来，马上按照策略将 SocketChannel 转发给 WorkerEventLoopGroup，WorkerEventLoopGroup 会由 next() 选择其中一个 EventLoop 来将这个SocketChannel 注册到其维护的 Selector 并对其后续的 IO 事件进行处理。")]),t._v(" "),e("blockquote",[e("p",[t._v("在实际中，总共有多个线程组以及一个初始线程：")]),t._v(" "),e("ul",[e("li",[t._v("初始线程（/主线程）：负责设置 serverBootstrap，包括 BossEventLoopGroup、workerEventLoopGroup、Handler 等多个设置，绑定服务端监听客户端请求的端口（这个端口是服务端本地的端口），以及监听端口的关闭（意味着服务端关闭，服务结束）。")]),t._v(" "),e("li",[t._v("BossEventLoopGroup：负责处理连接的单线程池。")]),t._v(" "),e("li",[t._v("WorkerEventLoopGroup：负责对 SocketChannel 后续的 IO 事件进行处理的线程池。")]),t._v(" "),e("li",[t._v("ServiceHandlerGroup：一般是处理自定义服务器 Handler 的线程池，也就是处理解码解压缩之后的真正的请求的线程池。")])])]),t._v(" "),e("h3",{attrs:{id:"eventloopgroup-使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eventloopgroup-使用"}},[t._v("#")]),t._v(" EventLoopGroup 使用")]),t._v(" "),e("ul",[e("li",[t._v("EventLoopGroup 可以通过构造方法设置 EventLoop 的个数，默认创建的 EventLoop 是 "),e("code",[t._v("CPU 核心数 × 2")])]),t._v(" "),e("li",[e("code",[t._v("EventLoopGroup.next()")]),t._v("：该方法返回下一个将要使用的 EventLoop，相当于线程池返回下一个用来处理任务的线程。")])]),t._v(" "),e("h3",{attrs:{id:"defaulteventloop-和-nioeventloop-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defaulteventloop-和-nioeventloop-区别"}},[t._v("#")]),t._v(" DefaultEventLoop 和 NioEventLoop 区别")]),t._v(" "),e("ol",[e("li",[t._v("NioEventLoop 是一个线程，用于 IO Read Write 监控")]),t._v(" "),e("li",[t._v("DefaultEventLoop 是一个普通线程，工作内容可以由程序员决定，不做 IO 监控")])]),t._v(" "),e("blockquote",[e("p",[t._v("后续 Netty 进行多线程开发，推荐大家优先考虑 DefaultEventLoop。")])]),t._v(" "),e("div",{staticClass:"language-Java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  DefaultEventLoop 使用")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventLoopGroup")]),t._v(" defaultEventLoopGroups "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultEventLoopGroup")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventLoop")]),t._v(" defaultEventLoop "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" defaultEventLoopGroups"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//submit就是我们要干的事。")]),t._v("\ndefaultEventLoop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    log"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"handler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handler"}},[t._v("#")]),t._v(" Handler")]),t._v(" "),e("h3",{attrs:{id:"什么是-handler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-handler"}},[t._v("#")]),t._v(" 什么是 Handler")]),t._v(" "),e("p",[t._v("当建立连接之后，实际上后面要进行 IO 操作，IO 操作是由 Handler 来操作。Handler 是一组的，基于一种各司其职的思想，不论是客户端还是服务端，数据里路过来之后，我们经过一系列的数据处理，就可以进行后续业务的开发。")]),t._v(" "),e("p",[t._v("一系列 Handler 基于 PipeLine 整合在一起，PipeLine 是它的管理者。这是一种典型的责任链的设计模式，把一个工作分成一个链条，对数据进行不同的加工。")]),t._v(" "),e("p",[t._v("作为我们的 Handler 来讲是有方向的：读入数据的 Handler 和写出数据的 Handler"),e("br"),t._v("\n读入数据的 Handler：ChannelInboundHandlerAdapter"),e("br"),t._v("\n写出数据的 Handler：ChannelOutboundHandlerAdapter")]),t._v(" "),e("h3",{attrs:{id:"handler-的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handler-的使用"}},[t._v("#")]),t._v(" Handler 的使用")]),t._v(" "),e("p",[t._v("Handler 是由 EventLoopGroup 当中的线程执行的。"),e("br"),t._v("\nHandler 的处理中，"),e("code",[t._v("object msg")]),t._v(" 就是客户端传输过来的数据，只是这时候，接收到的还是在 ByteBuffer 中，Netty 中我们叫做 ByteBuf。")]),t._v(" "),e("h3",{attrs:{id:"读数据多个-handler-之间如何进行数据传递"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#读数据多个-handler-之间如何进行数据传递"}},[t._v("#")]),t._v(" 读数据多个 Handler 之间如何进行数据传递？")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("channelRead")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将一个 Handler 处理完的数据交给下一个 Handler")]),t._v("\n")])])]),e("p",[t._v("上面的方法就是把一个 Handler 处理完的数据交给下一个 Handler，第一个参数是 Handler 整个上下文环境数据，第二个参数 msg 代表着要带给下一个 Handler 的数据，而下一个 Handler 是通过接口函数中的 "),e("code",[t._v("object msg")]),t._v(" 接收的。")]),t._v(" "),e("p",[t._v("当一个 Handler 处理完消息后，消息在处理链中以原始的数据类型进行传递。如果前一个 Handler 处理的是 ByteBuf，则下一个 Handler 接收到的仍然是 ByteBuf。这样的设计有助于高效处理数据和减少内存拷贝。但根据业务需求，可以进行类型转换，将数据转换为其他形式的消息对象，并将其传递给下一个 Handler。")]),t._v(" "),e("blockquote",[e("p",[t._v("最后一个 Handler 是不需要调用 super 的。")])]),t._v(" "),e("p",[t._v("super.channelRead() 方法真正操作的是 "),e("code",[t._v("ctx.fireChannelRead(msg)")]),t._v(" 方法，只有这个 ctx 才具有传递数据的能力，因为这个是上下文环境。")]),t._v(" "),e("p",[t._v("多个 Handler 依次顺序执行，在 Netty 执行的时候默认会为我们添加两个 Handler，分别是 head 和 tail，即执行顺序是："),e("strong",[t._v("head -> handler1 -> handler2 -> ... -> tail")])]),t._v(" "),e("h3",{attrs:{id:"handler-和-childhandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handler-和-childhandler"}},[t._v("#")]),t._v(" Handler 和 ChildHandler")]),t._v(" "),e("p",[t._v("在Netty中，Handler 和 ChildHandler 是用于配置 ChannelPipeline 的两个方法，它们的区别在于作用范围和生效对象的不同。")]),t._v(" "),e("ul",[e("li",[t._v("Handler：\n"),e("ul",[e("li",[t._v("handler 方法用于配置 ServerBootstrap 或 Bootstrap 的 ChannelPipeline 中的处理器。")]),t._v(" "),e("li",[t._v("handler 方法添加的处理器是针对服务端或客户端整体的，对于每个连接或 Channel 都会生效。")]),t._v(" "),e("li",[t._v("通常用于配置全局共享的处理器，例如处理服务器启动事件、服务器关闭事件处理、连接的建立和关闭事件、心跳处理等。")]),t._v(" "),e("li",[t._v("该方法一般在服务器启动前调用。")])])]),t._v(" "),e("li",[t._v("ChildHandler：\n"),e("ul",[e("li",[t._v("childHandler 方法用于配置 ServerBootstrap 的子 Channel（即接受客户端连接后创建的Channel）的 ChannelPipeline 中的处理器。")]),t._v(" "),e("li",[t._v("childHandler 方法添加的处理器是针对每个连接的，对于每个子 Channel 都会生效。")]),t._v(" "),e("li",[t._v("通常在 childHandler 方法中配置的处理器用于处理与客户端连接相关的业务逻辑，如协议解析、数据处理等。")]),t._v(" "),e("li",[t._v("该方法一般在服务器启动后的 Channel 创建时调用。")])])])]),t._v(" "),e("h3",{attrs:{id:"什么叫接受客户端连接后创建的子-channel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么叫接受客户端连接后创建的子-channel"}},[t._v("#")]),t._v(" 什么叫接受客户端连接后创建的子 channel？")]),t._v(" "),e("p",[t._v("在 Netty 中，服务器在接受客户端连接时会为每个客户端连接创建一个子 Channel，这个子 Channel 代表了与客户端的具体连接，通过该通道可以进行数据的读取和写入。这个子 Channel 是由服务器的 ServerChannel 接受连接后创建的。每个子 Channel 都拥有自己的 ChannelPipeline 和事件处理器，可以根据具体业务需求配置相应的处理逻辑。")]),t._v(" "),e("p",[t._v("在服务器端的编程模型中，主要有两个层次的通道：")]),t._v(" "),e("ol",[e("li",[t._v("服务器的 ServerChannel：负责监听端口、接受客户端连接，并创建子 Channel。服务器的 ServerChannel 通常是通过 ServerBootstrap 的 channel() 方法指定的。")]),t._v(" "),e("li",[t._v("客户端的子 Channel：由服务器的 ServerChannel 接受连接后创建的子 Channel，用于与客户端进行实际的数据通信。每个子 Channel 都有自己的 ChannelPipeline 和处理器链。")])]),t._v(" "),e("p",[t._v("通过使用子 Channel，服务器可以同时处理多个客户端的连接请求，每个连接都有独立的通道进行数据的读写和处理。")]),t._v(" "),e("h2",{attrs:{id:"netty-中的异步设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#netty-中的异步设计"}},[t._v("#")]),t._v(" Netty 中的异步设计")]),t._v(" "),e("p",[t._v("Netty 是异步的，很多操作都是异步的。所有涉及到网络和 IO 的相关操作都会进行异步处理。对于这些操作我们需要执行两种操作，要么主线程同步阻塞，要么辅助线程执行异步回调（异步监听，不阻塞主线程）。")]),t._v(" "),e("h3",{attrs:{id:"异步和多线程的关系及区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步和多线程的关系及区别"}},[t._v("#")]),t._v(" 异步和多线程的关系及区别")]),t._v(" "),e("p",[t._v("异步也是多线程编程，所谓的异步编程和我们的多线程编程在应用过程中有着一些区别。")]),t._v(" "),e("ul",[e("li",[t._v("多线程编程：JavaWeb 中多个客户端对应的后台线程是平等的关系。")]),t._v(" "),e("li",[t._v("异步多线程：它有一个线程是主要的，除却主要的部分，有复杂的和耗时的操作交给另一个线程来做，这两个线程配合地去完成一系列的操作。而且往往这个主线程还需要这个辅助线程将结果交给它。")])]),t._v(" "),e("h2",{attrs:{id:"参考博客"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考博客"}},[t._v("#")]),t._v(" 参考博客")]),t._v(" "),e("ul",[e("li",[t._v("https://blog.csdn.net/lic721/article/details/126842761")]),t._v(" "),e("li",[t._v("https://blog.csdn.net/Facial_Mask/article/details/127589593")]),t._v(" "),e("li",[t._v("https://blog.csdn.net/twt936457991/article/details/89854851")])])])}),[],!1,null,null,null);e.default=o.exports}}]);