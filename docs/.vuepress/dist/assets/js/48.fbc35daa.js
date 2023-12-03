(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{670:function(e,t,a){"use strict";a.r(t);var v=a(18),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("blockquote",[a("p",[e._v("这篇文章以问答的形式用于快速回顾知识点以及用于自测。"),a("br"),e._v("\n因为知识点相当多，即使在看时能够理解记住，但过后也往往只是有印象，大概知道是什么东西，但想回答出来却总是卡壳，看了忘，忘了看。因此，这篇文章用于帮助速记回忆，自测时可以由这些点延伸。\n注：参考的主要是 Guide 哥的网站内容以及 chatGPT。")])]),e._v(" "),a("h4",{attrs:{id:"和-的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和-的区别是什么"}},[e._v("#")]),e._v(" #{} 和 ${} 的区别是什么？")]),e._v(" "),a("p",[e._v("在 Mybatis 中，"),a("code",[e._v("#{}")]),e._v(" 和  "),a("code",[e._v("${}")]),e._v(" 是用于在 SQL 语句中传递参数的两种不同方式，它们的主要区别在于参数的处理方式不同：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("#{}")]),e._v("会在预处理阶段将参数值设置为预编译语句中的占位符。这样可以有效防止 SQL 注入攻击，因为参数值会被自动转义和添加到 SQL 语句中，而不是通过字符串拼接的方式。")]),e._v(" "),a("li",[a("code",[e._v("${}")]),e._v("会直接将参数值按照原样插入 SQL 语句中，类似于字符串拼接。这种方式可能存在 SQL 注入的风险，因为参数值没有经过预处理转义。")])]),e._v(" "),a("h4",{attrs:{id:"xml-映射文件中-除了常见的-select、insert、update、delete-标签之外-还有哪些标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xml-映射文件中-除了常见的-select、insert、update、delete-标签之外-还有哪些标签"}},[e._v("#")]),e._v(" xml 映射文件中，除了常见的 select、insert、update、delete 标签之外，还有哪些标签？")]),e._v(" "),a("p",[e._v("还有 "),a("code",[e._v("<resultMap>")]),e._v("、"),a("code",[e._v("<parameterMap>")]),e._v("、"),a("code",[e._v("<sql>")]),e._v("、"),a("code",[e._v("<include>")]),e._v("、"),a("code",[e._v("<selectKey>")]),e._v("，以及动态 sql 的9个标签："),a("code",[e._v("trim | where | set | foreach | if | choose | when | otherwise | bind")]),e._v("。")]),e._v(" "),a("h4",{attrs:{id:"dao-接口的工作原理是什么-dao-接口里的方法、参数不同时-方法能重载吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dao-接口的工作原理是什么-dao-接口里的方法、参数不同时-方法能重载吗"}},[e._v("#")]),e._v(" DAO 接口的工作原理是什么？DAO 接口里的方法、参数不同时，方法能重载吗？")]),e._v(" "),a("p",[e._v("通常一个 xml 映射文件，都会写一个 Dao 接口与之对应。Dao 接口就是人们常说的 "),a("code",[e._v("Mapper")]),e._v(" 接口，接口的全限名，就是映射文件中的 "),a("code",[e._v("namespace")]),e._v(" 的值，接口的方法名，就是映射文件中 "),a("code",[e._v("MappedStatement")]),e._v(" 的 "),a("code",[e._v("id")]),e._v(" 值，接口方法内的参数，就是传递给 sql 的参数。 "),a("code",[e._v("Mapper")]),e._v(" 接口是没有实现类的，当调用接口方法时，"),a("code",[e._v("接口全限名+方法名")]),e._v("拼接字符串作为 "),a("code",[e._v("key")]),e._v(" 值，可唯一定位一个 "),a("code",[e._v("MappedStatement")]),e._v("。")]),e._v(" "),a("p",[e._v("Dao 接口的工作原理是 JDK 动态代理，MyBatis 运行时会使用 JDK 动态代理为 Dao 接口生成代理 proxy 对象，代理对象 proxy 会拦截接口方法，转而执行 "),a("code",[e._v("MappedStatement")]),e._v(" 所代表的 sql，然后将 sql 执行结果返回。")]),e._v(" "),a("p",[e._v("Mybatis 的 Dao 接口可以有多个重载方法，但是多个接口对应的映射必须只有一个，否则启动会报错。在多个接口对应同一个映射的情况下，一般是使用到了动态 sql。")]),e._v(" "),a("h4",{attrs:{id:"mybatis-执行批量插入-能返回数据库主键列表吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-执行批量插入-能返回数据库主键列表吗"}},[e._v("#")]),e._v(" Mybatis 执行批量插入，能返回数据库主键列表吗？")]),e._v(" "),a("p",[e._v("能，JDBC 都能，Mybatis 当然也可以。")]),e._v(" "),a("h4",{attrs:{id:"mybatis-动态-sql-是做什么的-都有哪些动态-sql-能简述一下动态-sql-的执行原理吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-动态-sql-是做什么的-都有哪些动态-sql-能简述一下动态-sql-的执行原理吗"}},[e._v("#")]),e._v(" Mybatis 动态 sql 是做什么的？都有哪些动态 Sql？能简述一下动态 sql 的执行原理吗？")]),e._v(" "),a("p",[e._v("MyBatis 动态 sql 可以让我们在 xml 映射文件内，以标签的形式编写动态 sql，完成逻辑判断和动态拼接 sql 的功能。其执行原理为，使用 OGNL 从 sql 参数对象中计算表达式的值，根据表达式的值动态拼接 sql，以此来完成动态 sql 的功能。")]),e._v(" "),a("p",[e._v("Mybatis 提供了9种动态 sql 标签："),a("code",[e._v("trim | where | set | foreach | if | choose | when | otherwise | bind")])]),e._v(" "),a("h4",{attrs:{id:"mybatis-是如何将-sql-执行结果封装为目标对象并返回的-都有哪些映射形式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-是如何将-sql-执行结果封装为目标对象并返回的-都有哪些映射形式"}},[e._v("#")]),e._v(" Mybatis 是如何将 sql 执行结果封装为目标对象并返回的？都有哪些映射形式？")]),e._v(" "),a("ul",[a("li",[e._v("第一种是使用 "),a("code",[e._v("<resultMap>")]),e._v(" 标签，逐一定义列名和对象属性名之间的映射关系。")]),e._v(" "),a("li",[e._v("第二种是使用 sql 列的别名功能，将列别名书写为对象属性名，比如 "),a("code",[e._v("T_NAME AS NAME")]),e._v("，对象属性名一般是 "),a("code",[e._v("name")]),e._v("，小写，但是列名不区分大小写，MyBatis 会忽略列名大小写，智能找到与之对应对象属性名。")])]),e._v(" "),a("p",[e._v("有了列名与属性名的映射关系后，Mybatis 通过反射创建对象，同时使用反射给对象的属性赋值并返回，那些找不到映射关系的属性，是无法完成赋值的。")]),e._v(" "),a("h4",{attrs:{id:"mybatis-是否支持延迟加载-如何支持-它的实现原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-是否支持延迟加载-如何支持-它的实现原理是什么"}},[e._v("#")]),e._v(" Mybatis 是否支持延迟加载？如何支持，它的实现原理是什么？")]),e._v(" "),a("p",[e._v("MyBatis中的延迟加载（Lazy Loading）是一种加载关联对象时的策略，它允许在需要使用关联对象时才去加载这些对象，而不是在主查询中立即加载。这有助于减少在查询时的性能开销，因为不会一次性加载所有相关的对象，只有在实际需要时才加载。")]),e._v(" "),a("p",[e._v("Mybatis 仅支持 "),a("code",[e._v("association")]),e._v(" 关联对象和 "),a("code",[e._v("collection")]),e._v(" 关联集合对象的延迟加载，"),a("code",[e._v("association")]),e._v(" 指的就是一对一，"),a("code",[e._v("collection")]),e._v(" 指的就是一对多查询。")]),e._v(" "),a("p",[e._v("它的原理是，使用 CGLIB 创建目标对象的代理对象，当调用目标方法时，进入拦截器方法，比如调用 "),a("code",[e._v("a.getB().getName()")]),e._v("，拦截器 "),a("code",[e._v("invoke()")]),e._v(" 方法发现 "),a("code",[e._v("a.getB()")]),e._v(" 是 "),a("code",[e._v("null")]),e._v(" 值，那么就会单独发送事先保存好的查询关联 B 对象的 sql，把 B 查询上来，然后调用 "),a("code",[e._v("a.setB(b)")]),e._v("，于是 a 的对象 b 属性就有值了，接着完成 "),a("code",[e._v("a.getB().getName()")]),e._v(" 方法的调用。这就是延迟加载的基本原理。")]),e._v(" "),a("h4",{attrs:{id:"mybatis-的-xml-映射文件中-不同的-xml-映射文件-id-是否可以重复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-的-xml-映射文件中-不同的-xml-映射文件-id-是否可以重复"}},[e._v("#")]),e._v(" Mybatis 的 xml 映射文件中，不同的 xml 映射文件，id 是否可以重复？")]),e._v(" "),a("p",[e._v("如果 xml 映射文件配置了 "),a("code",[e._v("namespace")]),e._v("，那么 "),a("code",[e._v("id")]),e._v(" 可以重复，如果没有配置 "),a("code",[e._v("namespace")]),e._v("，那么 "),a("code",[e._v("id")]),e._v(" 不能重复。")]),e._v(" "),a("h4",{attrs:{id:"mybatis-中如何执行批处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-中如何执行批处理"}},[e._v("#")]),e._v(" Mybatis 中如何执行批处理？")]),e._v(" "),a("p",[e._v("使用 "),a("code",[e._v("BatchExecutor")]),e._v(" 完成批处理。")]),e._v(" "),a("h4",{attrs:{id:"mybatis-中都有哪些-executor-执行器-它们之间的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-中都有哪些-executor-执行器-它们之间的区别是什么"}},[e._v("#")]),e._v(" Mybatis 中都有哪些 Executor 执行器？它们之间的区别是什么？")]),e._v(" "),a("p",[e._v("MyBatis 有三种基本的 "),a("code",[e._v("Executor")]),e._v(" 执行器：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("SimpleExecutor")]),e._v("： 每执行一次 "),a("code",[e._v("update")]),e._v(" 或 "),a("code",[e._v("select")]),e._v("，就开启一个 "),a("code",[e._v("Statement")]),e._v(" 对象，用完立刻关闭 "),a("code",[e._v("Statement")]),e._v(" 对象。")]),e._v(" "),a("li",[a("code",[e._v("ReuseExecutor")]),e._v("： 执行 "),a("code",[e._v("update")]),e._v(" 或 "),a("code",[e._v("select")]),e._v("，以 sql 作为 key 查找 "),a("code",[e._v("Statement")]),e._v(" 对象，存在就使用，不存在就创建，用完后，不关闭 "),a("code",[e._v("Statement")]),e._v(" 对象，而是放置于 "),a("code",[e._v("Map<String, Statement>")]),e._v(" 内，供下一次使用。简言之，就是重复使用 "),a("code",[e._v("Statement")]),e._v(" 对象。")]),e._v(" "),a("li",[a("code",[e._v("BatchExecutor")]),e._v("：执行 "),a("code",[e._v("update")]),e._v("（没有 "),a("code",[e._v("select")]),e._v("，JDBC 批处理不支持 "),a("code",[e._v("select")]),e._v("），将所有 sql 都添加到批处理中（"),a("code",[e._v("addBatch()")]),e._v("），等待统一执行（"),a("code",[e._v("executeBatch()")]),e._v("），它缓存了多个 "),a("code",[e._v("Statement")]),e._v(" 对象，每个 "),a("code",[e._v("Statement")]),e._v(" 对象都是 "),a("code",[e._v("addBatch()")]),e._v(" 完毕后，等待逐一执行 "),a("code",[e._v("executeBatch()")]),e._v(" 批处理。与 JDBC 批处理相同。")])]),e._v(" "),a("h4",{attrs:{id:"mybatis-中如何指定使用哪一种-executor-执行器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-中如何指定使用哪一种-executor-执行器"}},[e._v("#")]),e._v(" Mybatis 中如何指定使用哪一种 Executor 执行器？")]),e._v(" "),a("p",[e._v("在 MyBatis 配置文件中，可以指定默认的 "),a("code",[e._v("ExecutorType")]),e._v(" 执行器类型，也可以手动给 "),a("code",[e._v("DefaultSqlSessionFactory")]),e._v(" 创建 "),a("code",[e._v("SqlSession")]),e._v(" 的方法传递 "),a("code",[e._v("ExecutorType")]),e._v(" 类型参数。")]),e._v(" "),a("h4",{attrs:{id:"mybatis-是否可以映射-enum-枚举类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-是否可以映射-enum-枚举类"}},[e._v("#")]),e._v(" Mybatis 是否可以映射 Enum 枚举类？")]),e._v(" "),a("p",[e._v("可以，Mybatis 可以映射任何对象到表上的一列上。映射方式为自定义一个 "),a("code",[e._v("TypeHandler")]),e._v(" ，实现 "),a("code",[e._v("TypeHandler")]),e._v(" 的 "),a("code",[e._v("setParameter()")]),e._v(" 和 "),a("code",[e._v("getResult()")]),e._v(" 接口方法。")]),e._v(" "),a("p",[a("code",[e._v("TypeHandler")]),e._v(" 有两个作用：一是完成从 javaType 到 jdbcType 的转换；二是完成 jdbcType 到 javaType 的转换。")]),e._v(" "),a("h4",{attrs:{id:"mybatis-映射文件中-如果-a-标签通过-include-引用了-b-标签的内容-那么-b-标签能否定义在-a-标签之后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-映射文件中-如果-a-标签通过-include-引用了-b-标签的内容-那么-b-标签能否定义在-a-标签之后"}},[e._v("#")]),e._v(" Mybatis 映射文件中，如果 A 标签通过 include 引用了 B 标签的内容，那么 B 标签能否定义在 A 标签之后？")]),e._v(" "),a("p",[e._v("能。虽然 MyBatis 解析 xml 映射文件是按照顺序解析的，但是，被引用的 B 标签依然可以定义在任何地方，MyBatis 都可以正确识别。")]),e._v(" "),a("p",[e._v("原理是，Mybatis 在解析过程中，发现 A 标签引用了 B 标签，但是 B 标签尚未解析到，则会将 A 标签标记为未解析状态，然后继续解析余下的标签。待所有标签解析完毕，Mybatis 会重新解析那些标记为未解析的标签，此时 B 标签已经存在，A 标签也就可以正常解析完成了。")]),e._v(" "),a("h4",{attrs:{id:"简述-mybatis-的-xml-映射文件和-mybatis-内部数据结构之间的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述-mybatis-的-xml-映射文件和-mybatis-内部数据结构之间的关系"}},[e._v("#")]),e._v(" 简述 Mybatis 的 xml 映射文件和 Mybatis 内部数据结构之间的关系？")]),e._v(" "),a("p",[e._v("MyBatis 将所有 xml 配置信息都封装到 All-In-One 重量级对象 "),a("code",[e._v("Configuration")]),e._v(" 内部。在 xml 映射文件中， "),a("code",[e._v("<parameterMap>")]),e._v(" 标签会被解析为 "),a("code",[e._v("ParameterMap")]),e._v(" 对象，其每个子元素会被解析为 "),a("code",[e._v("ParameterMapping")]),e._v(" 对象。 "),a("code",[e._v("<resultMap>")]),e._v(" 标签会被解析为 "),a("code",[e._v("ResultMap")]),e._v(" 对象，其每个子元素会被解析为 "),a("code",[e._v("ResultMapping")]),e._v(" 对象。每一个 "),a("code",[e._v("<select>")]),e._v("、"),a("code",[e._v("<insert>")]),e._v("、"),a("code",[e._v("<update>")]),e._v("、"),a("code",[e._v("<delete>")]),e._v(" 标签均会被解析为 "),a("code",[e._v("MappedStatement")]),e._v(" 对象，标签内的 sql 会被解析为 BoundSql 对象")]),e._v(" "),a("h4",{attrs:{id:"为什么说-mybatis-是半自动-orm-映射工具-它与全自动的区别在哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么说-mybatis-是半自动-orm-映射工具-它与全自动的区别在哪些"}},[e._v("#")]),e._v(" 为什么说 Mybatis 是半自动 ORM 映射工具？它与全自动的区别在哪些？")]),e._v(" "),a("p",[e._v("Hibernate 属于全自动 ORM 映射工具，使用 Hibernate 查询关联对象或者关联集合对象时，可以根据对象关系模型直接获取，所以它是全自动的。而 MyBatis 在查询关联对象或关联集合对象时，需要手动编写 sql 来完成，所以，称之为半自动 ORM 映射工具。")])])}),[],!1,null,null,null);t.default=_.exports}}]);