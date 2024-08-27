---
title: 'Redis总体架构'
---

<div align="center"><img src="./pictures/两大维度三大主线.png" width="70%"/></div> 
<div align="center"><img src="./pictures/Redis问题画像.png" width="70%"/></div> 

## 一个键值数据库的基本架构
<div align="center"><img src="./pictures/键值数据库基本架构.png" width="70%"/></div> 

## Redis数据类型和底层数据结构
<div align="center"><img src="./pictures/Redis数据类型和底层数据结构.png" width="70%"/></div> 

## Redis基本IO模型
<div align="center"><img src="./pictures/Redis基本IO模型.png" width="70%"/></div> 

## 非阻塞模式
<div align="center"><img src="./pictures/Redis中Socket模型套接字类型.png" width="70%"/></div> 

## 基于多路复用的高性能I/O模型
<div align="center"><img src="./pictures/基于多路复用的Redis高性能IO模型.png" width="70%"/></div> 

## AOF 
### AOF写回磁盘策略
- Always：同步写回：每个写命令执行完，立马同步地将日志写回磁盘；
- Everysec：每秒写回：每个写命令执行完，只是先把日志写到 AOF 文件的内存缓冲区，每隔一秒把缓冲区中的内容写入磁盘；
- No，操作系统控制的写回：每个写命令执行完，只是先把日志写到 AOF 文件的内存缓冲区，由操作系统决定何时将缓冲区内容写回磁盘。
<div align="center"><img src="./pictures/AOF写回策略优缺点.png" width="70%"/></div> 

## RDB
### 写时复制机制保证快照期间数据可修改
<div align="center"><img src="./pictures/写时复制机制保证快照期间数据可修改.png" width="70%"/></div> 

## 数据同步：主从库实现数据一致
<div align="center"><img src="./pictures/Redis主从库和读写分离.png" width="70%"/></div> 
<div align="center"><img src="./pictures/主从库第一次同步的流程.png" width="70%"/></div> 

### 主从级联模式分担全量复制时的主库压力
<div align="center"><img src="./pictures/级联的“主-从-从”模式.png" width="70%"/></div> 

### 主从库间网络断连
<div align="center"><img src="./pictures/Redis主从网络断连repl_backlog_buffer所起作用.png" width="70%"/></div> 
<div align="center"><img src="./pictures/Redis增量复制.png" width="70%"/></div> 

## 哨兵机制：主库挂了如何不间断服务
<div align="center"><img src="./pictures/哨兵机制的三项任务与目标.png" width="70%"/></div> 

### 主观下线和客观下线
<div align="center"><img src="./pictures/哨兵客观下线的判断.png" width="70%"/></div> 

### 新主库的选择
<div align="center"><img src="./pictures/新主库的选择.png" width="70%"/></div> 

## 哨兵集群：哨兵挂了，主从库还能切换吗
### 基于 pub/sub (发布、订阅)机制的哨兵集群组成
<div align="center"><img src="./pictures/哨兵通过发布订阅机制通信.png" width="70%"/></div> 

### 哨兵获取从库的IP地址和端口
<div align="center"><img src="./pictures/哨兵获取从库的IP地址和端口.png" width="70%"/></div> 

### 基于pub/sub机制的客户端事件通知
<div align="center"><img src="./pictures/哨兵提供的发布订阅频道.png" width="70%"/></div> 

### 哨兵判断主库“客观下线”仲裁过程
<div align="center"><img src="./pictures/客观下线仲裁过程.png" width="70%"/></div> 

### Leader选举：决定哪个哨兵执行主从切换
<div align="center"><img src="./pictures/Leader选举.png" width="70%"/></div> 


## 切片集群：数据增加时增加内存（纵向扩展）还是增加实例（横向扩展）
<div align="center"><img src="./pictures/切片集群架构图.png" width="70%"/></div> 
<div align="center"><img src="./pictures/纵向扩展和横向扩展对比图.png" width="70%"/></div> 

### 数据切片和实例的对应分布关系
<div align="center"><img src="./pictures/数据、实例、哈希槽的映射关系.png" width="70%"/></div> 
<div align="center"><img src="./pictures/哈希槽完全迁移后客户端MOVED重定向命令.png" width="70%"/></div> 
<div align="center"><img src="./pictures/哈希槽部分迁移时客户端ASK重定向命令.png" width="70%"/></div> 