---
title: 'Socket网络通信'
---

## 什么是 Socket (套接字)
Socket 是一个抽象概念，是计算机之间进行通信的一种约定或方式，应用程序可以通过它发送或接收数据。在使用 Socket 进行网络通信的时候，通过 Socket 可以让数据在网络中传输。操作套接字的时候，和我们读写文件很像，可以将 socket 函数看作一种特殊的文件。
> socket 起源于 Unix，而 Unix/Linux 基本哲学之一就是“一切皆文件”，都可以用 **“open -> write/read -> close”** 模式来操作。  

Socket 是 IP  地址与端口的组合，即 scoket = （IP 地址 ： 端口号 port）

套接字是成对出现的，分别在客户端和服务端上。在 Java 中使用 Socket 时常用到两个类，在 java.net 包中：
- Socket：一般用于客户端
- ServerSocket：用于服务端

对于客户端，我们需要知道的是服务端的地址和端口号，因此，Socket 对象要绑定 (bind) 的是服务端的地址和端口号。  
而对于服务端，我们并不确定连接请求来自哪个客户端，但是服务端提供了端口给客户端连接，我们只要监听这个端口就可以了，因此对于 ServerSocket 我们要绑定 (bind) 的是本台服务器的地址和端口号，也就是要标识服务器在哪个网络接口上进行监听以侦听连接请求。

## 参考博客
- https://www.cnblogs.com/luffsama/articles/17219842.html
- https://blog.csdn.net/qq_35745940/article/details/118461845
- https://blog.csdn.net/liuhenggchao186/article/details/52634180