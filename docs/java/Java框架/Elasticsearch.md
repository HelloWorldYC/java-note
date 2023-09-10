---
title: 'Elasticsearch'
---

## Elasticsearch入门
- Elasticsearch简介
  - 一个分布式的（多台服务器进行部署）、Restful风格（设计风格）的**搜索引擎**
  - 支持对各种类型的数据的检索
  - 搜索速度快，可以提供实时的搜索服务
  - 便于水平扩展，每秒可以处理PB级海量数据
  - 可以理解为一个特殊的数据库，要利用ES需要将数据在ES里存一份
- Elasticsearch术语（与mysql对比着看），在ES6.0之后要废弃类型，一个索引相当于一张表
  - **索引**（database）、**类型**（table）、**文档**(一条数据)、**字段**(一列)
  - **集群**、**节点**(集群中的每台服务器)、**分片**(对索引的拆分)、**副本**(对分片的备份)
- Elasticsearch使用
  - 在搜索时会先将搜索的条件进行分词，再将词条进行匹配
  - 9200是http访问的端口，9300是TCP端口


## spring 整合 Elasticsearch
- 引入依赖
  - spring-boot-starter-data-elasticsearch
- 配置 Elasticsearch
  - cluster-name、cluster-nodes
- Spring Data Elasticsearch
  - ElasticsearchTemplate
  - ElasticsearchRepository
- 注意点
  - redis底层依赖 netty，而 ES底层也依赖 netty，所以需要设置 NettyUtils 的 setAvailableProcessor 避免 ES 报错