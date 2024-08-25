(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{396:function(t,s,_){t.exports=_.p+"assets/img/MySQL基础架构图.67521e01.png"},469:function(t,s,_){"use strict";_.r(s);var r=_(8),v=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mysql-基础架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-基础架构"}},[t._v("#")]),t._v(" MySQL 基础架构")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:_(396),width:"70%"}})]),t._v(" "),s("p",[t._v("总体来说，MySQL 可以分为 Server 层和存储引擎层两部分。"),s("br"),t._v("\nServer 层包括连接器、查询缓存、分析器、优化器、执行器等。"),s("br"),t._v("\n存储引擎层负责数据的存储和提取。其架构模式是插件式的，支持 InnoDB、MyISAM、Memory 等多个存储引擎。默认存储引擎是 InnoDB。")]),t._v(" "),s("h2",{attrs:{id:"连接器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接器"}},[t._v("#")]),t._v(" 连接器")]),t._v(" "),s("p",[t._v("连接器负责跟客户端建立连接、获取权限、维持和管理连接。连接命令一般如下：")]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql -h$ip -P$port -u$user -p\n")])])]),s("p",[t._v("在完成经典的 TCP 握手之后，连接器开始认证身份。如果用户名密码认证通过，连接器会到权限表中查出当前用户拥有的权限。之后，这个连接里面的权限判断逻辑，都将依赖于此时读到的权限。"),s("br"),t._v("\n注意：一个用户成功建立连接之后，即使是管理员账号对这个用户的权限做了修改，也不会影响到已经存在连接的权限。"),s("strong",[t._v("修改完成后，只有新建的连接才会只用新的权限设置。")]),s("br"),t._v("\n连接完成后，可以使用 "),s("code",[t._v("show processlist")]),t._v(" 命令显示连接状态。"),s("br"),t._v("\n客户端如果太长时间没有动静，连接器就会自动断开，这个时间是由参数 "),s("code",[t._v("wait_timeout")]),t._v(" 控制的，默认值是8小时。")]),t._v(" "),s("h3",{attrs:{id:"长连接和短连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#长连接和短连接"}},[t._v("#")]),t._v(" 长连接和短连接")]),t._v(" "),s("p",[t._v("数据库中，长连接是指连接完成后，如果客户端有持续的请求，则一直使用同一个连接。短连接则是指每次执行完很少的几次查询就断开连接，下次查询再重新建立一个。"),s("br"),t._v(" "),s("strong",[t._v("使用建议：建立连接的过程通常是比较复杂的，在使用中要尽量减少建立连接的动作，即尽量使用长连接。")]),s("br"),t._v(" "),s("strong",[t._v("使用长连接过多有什么隐患？")]),t._v(" MySQL 在执行过程中临时使用的内存是管理在连接对象中的，这些资源会在连接断开的时候才释放。如果长连接累积下来，可能会导致内存占用太大，被系统强行杀掉（OOM），从现象看就是 MySQL 异常重启了。"),s("br"),t._v(" "),s("strong",[t._v("如何解决长连接的问题？")]),t._v(" 一是定期断开长连接；二是（MySQL 5.7或更新版本）通过执行 "),s("code",[t._v("mysql_reset_connection")]),t._v(" 来重新初始化连接资源，这个过程不需要重连和重新做权限验证，但是会将连接恢复到刚刚创建完时的状态。")]),t._v(" "),s("h2",{attrs:{id:"查询缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询缓存"}},[t._v("#")]),t._v(" 查询缓存")]),t._v(" "),s("p",[s("strong",[t._v("大多数情况下不建议使用查询缓存，因为弊大于利。")]),t._v(" 查询缓存的失效非常频繁，只要有对一个表的更新，这个表上的所有查询缓存都会被清空。对于更新压力大的数据库来说，查询缓存的命中率非常低。"),s("br"),t._v("\nMySQL 提供了“按需使用”的方式。可以将 "),s("code",[t._v("query_cache_type")]),t._v(" 设置为 "),s("code",[t._v("DEMAND")]),t._v("，这样对于默认的 SQL 语句都不使用查询缓存，而对于要使用查询缓存的语句，可以用 "),s("code",[t._v("SQL_CACHE")]),t._v(" 显式指定，如")]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> select SQL_CACHE * from T where ID = 10;\n")])])]),s("blockquote",[s("p",[t._v("注意：MySQL 8.0 版本开始直接将查询缓存的整块功能都删掉了，也就是说 8.0 开始彻底没有这个功能了。")])]),t._v(" "),s("h2",{attrs:{id:"分析器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析器"}},[t._v("#")]),t._v(" 分析器")]),t._v(" "),s("p",[t._v("分析器包括了词法分析和语法分析：")]),t._v(" "),s("ul",[s("li",[t._v("词法分析：从 SQL 语句中识别处里面的字符串分别是什么，代表什么。")]),t._v(" "),s("li",[t._v("语法分析：根据词法分析的结果，判断输入的 SQL 语句是否满足 MySQL 语法规则。")])]),t._v(" "),s("h2",{attrs:{id:"优化器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化器"}},[t._v("#")]),t._v(" 优化器")]),t._v(" "),s("p",[t._v("优化器是在表中有多个索引的时候，决定使用哪个索引，或者在一个语句有多表关联（join）的时候，决定各个表的连接顺序。也就是说，决定语句的执行方案。")]),t._v(" "),s("h2",{attrs:{id:"执行器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行器"}},[t._v("#")]),t._v(" 执行器")]),t._v(" "),s("p",[t._v("开始执行的时候，要先判断当前用户对这个表是否有执行查询的权限，如果没有，就会返回没有权限的错误；如果有权限，就打开表继续执行。打开表的时候，执行器会根据表的引擎定义，去使用这个引擎提供的接口。"),s("br"),t._v("\n在数据库的慢查询日志中有一个 "),s("code",[t._v("rows_examined")]),t._v(" 的字段，表示这个语句执行过程中扫描了多少行，这个值是在执行器每次调用引擎获取数据行的时候累加的。在有些情况下，执行器调用一次，在引擎内部则扫描了多行，因此"),s("strong",[t._v("引擎扫描行数跟 "),s("code",[t._v("rows_examined")]),t._v(" 并不是完全相同的。")])])])}),[],!1,null,null,null);s.default=v.exports}}]);