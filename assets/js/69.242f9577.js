(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{492:function(t,r,s){"use strict";s.r(r);var a=s(4),v=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"rpc-过程和这两个态的关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rpc-过程和这两个态的关系"}},[t._v("#")]),t._v(" rpc 过程和这两个态的关系")]),t._v(" "),r("p",[t._v("RPC 过程与用户态和内核态的关系：")]),t._v(" "),r("p",[t._v("RPC 过程通常运行在用户态中：RPC 客户端和服务器的代码通常都运行在用户态中。这些代码负责处理应用程序层面的逻辑，包括生成 RPC 请求、发送请求、接收响应等。RPC 客户端和服务器的实现通常不需要访问底层硬件资源或执行特权操作，因此可以在用户态中运行。")]),t._v(" "),r("p",[t._v("RPC 过程可能涉及内核态的系统调用：在处理 RPC 请求和响应时，客户端和服务器可能需要进行网络通信、文件 I/O 或其他系统级别的操作。这些操作可能需要通过系统调用来执行，这时代码会从用户态切换到内核态，让操作系统内核来处理这些请求。例如，发送和接收数据包通常涉及到内核态的网络栈，文件读写可能需要内核态的文件系统代码。")]),t._v(" "),r("p",[t._v("总之，RPC 过程本身通常运行在用户态中，但在处理请求和响应时可能需要与内核态交互，以执行系统级别的操作。这是因为 RPC 通常涉及到网络通信和数据传输，这些操作需要操作系统的支持。")]),t._v(" "),r("h3",{attrs:{id:"你的-rpc-轮子怎么划分模块的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#你的-rpc-轮子怎么划分模块的"}},[t._v("#")]),t._v(" 你的 rpc 轮子怎么划分模块的")]),t._v(" "),r("p",[t._v("网络传输模块、服务注册消费模块")]),t._v(" "),r("h3",{attrs:{id:"你自定义的序列化方式偏向于-json-还是-protobuf-这俩序列化有啥区别-和你的自定义序列化性能差异对比-怎么解决分包粘包-怎么注册注销-讲一下你的-spi-实现依赖倒置-动态桩讲一下-可以客户端指定调用-ip-吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#你自定义的序列化方式偏向于-json-还是-protobuf-这俩序列化有啥区别-和你的自定义序列化性能差异对比-怎么解决分包粘包-怎么注册注销-讲一下你的-spi-实现依赖倒置-动态桩讲一下-可以客户端指定调用-ip-吗"}},[t._v("#")]),t._v(" 你自定义的序列化方式偏向于 Json 还是 Protobuf？这俩序列化有啥区别？和你的自定义序列化性能差异对比？怎么解决分包粘包？怎么注册注销？讲一下你的 SPI 实现依赖倒置？动态桩讲一下？可以客户端指定调用 ip 吗?")]),t._v(" "),r("p",[t._v("Protobuf")]),t._v(" "),r("h3",{attrs:{id:"项目难点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目难点"}},[t._v("#")]),t._v(" 项目难点")]),t._v(" "),r("p",[t._v("SPI机制\n负载均衡（一致性哈希）")]),t._v(" "),r("h3",{attrs:{id:"spi-是怎么实现的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spi-是怎么实现的"}},[t._v("#")]),t._v(" SPI 是怎么实现的？")])])}),[],!1,null,null,null);r.default=v.exports}}]);