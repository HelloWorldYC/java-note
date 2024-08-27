---
title: '知识点自测速记之Spring'
---

> 这篇文章以问答的形式用于快速回顾知识点以及用于自测。  
> 因为知识点相当多，即使在看时能够理解记住，但过后也往往只是有印象，大概知道是什么东西，但想回答出来却总是卡壳，看了忘，忘了看。因此，这篇文章用于帮助速记回忆，自测时可以由这些点延伸。  





## 重点问题

#### 谈一谈你对 IoC 的理解？
可以从三个方面回答这个问题：**容器概念**、**控制反转**、**依赖注入**。
- IoC 容器：实际上就是个 map，里面存的是各种对象，在项目启动的时候会读取配置文件中的 bean，根据全限定名使用反射创建对象放到 map 中、扫描到打上 `@Component` 等注解的类还是通过反射创建对象放到 map 中。等需要用到里面的对象时，再通过 DI 注入（通过注解或者 xml 注入）。
- 控制反转：在没有引入 IoC 容器前，对象依赖于另一个对象需要主动去创建依赖的对象，而引入 IoC 容器后，对象和依赖对象失去了直接联系，当对象使用到依赖对象时，IoC 容器会自动注入。
- 依赖注入：“获得依赖对象的过程被反转了”。控制被反转之后，获得依赖对象的过程由自身管理变为了 IoC 容器主动注入。依赖注入是实现 IoC 的方法，就是由 IoC 容器在运行期间，动态地将某种依赖关系注入到对象之中。

#### 谈谈你对 IoC 和 DI 的理解？
首先，Spring IoC 全称叫 Inversion of Control，即控制反转。在传统的 Java 程序中，我们只能通过 new 关键字来创建个对象，这种方式会导致程序里面对象的依赖关系比较复杂，而且耦合度比较高。而 IoC 的主要作用就是实现了对象的管理，也就是我们把设计好的对象交给 IoC 容器来控制，然后在需要用到目标对象的时候，直接从容器中获取。有了 IoC 容器来管理 bean 以后，相当于把对象的创建和查找依赖，对象的控制，交给了容器。这种设计理念使得对象和对象之间是一种松耦合状态，极大的提升了程序的灵活性，以及功能的复用性。    

然后，DI 表示依赖注入，也就是说对于 IoC 容器中管理的 bean，如果 bean 之间存在依赖关系，那么 IoC 容器需要自动去实现依赖对象的实例注入。通常我们有三种方式描述 bean 和 bean 之间的依赖关系：接口注入、Setter 注入、构造器注入。另外，为了更灵活地去实现 bean 的实例的依赖注入，Spring 还提供了 `@Autowired` 注解，根据 bean 的 type 去实现依赖注入（`@Resource` 是 JDK 提供的）。


#### 谈谈你对 AOP 的理解？
将程序中的交叉业务逻辑（如安全、日志、事务等），封装成一个切面，然后注入到目标对象（具体业务逻辑）中去。AOP 可以对某个对象或某些对象的功能进行增强，可以在目标对象方法前后做额外的事情。Spring AOP 使用了动态代理（CGlib 和 JDK 动态代理）来实现。


## Spring 基础

#### 什么是 Spring 框架？
一款开源的轻量级Java开发框架，核心思想是不重复造轮子，开箱即用，提高开发效率。提供的核心功能主要是 IoC 和 AOP。

#### Spring 包含的模块有哪些？
- Core Container
- AOP
- Data Access / Integration
- Spring Web
- Messaging：新加入的模块，主要是为 Spring 框架集成一些基础的报文传送应用。
- Spring Test

#### Spring、Spring MVC、Spring Boot 之间有什么关系？
- Spring MVC（Model、View、Controller） 是 Spring 中的一个重要模块。  
- Spring 旨在简化 J2EE（Java 2 Platform Enterprise Edition） 企业应用程序开发。  
- Spring Boot 旨在简化 Spring 开发（减少配置文件，开箱即用）。


## Spring IoC

#### 什么是 IoC？
IoC 即控制反转，它是一种设计思想，而不是具体实现。

#### 为什么叫控制反转？
它将对象创建（实例化、管理）的权力交给了外部环境（Spring 框架、IoC 容器），在需要的时候进行依赖注入即可。

#### 什么是 IoC 容器？
IoC 容器是 Spring 用来实现 IoC 的载体，它实际上就是个 Map，Map 中存放的是各种对象。

#### 什么是 Spring Bean？
被 IoC 容器管理的对象。

#### 怎么注册 Spring Bean？
需要通过配置元数据来定义，可以通过 XML 文件、注解或者 Java 配置类。

#### 将一个类声明为 Bean 的注解有哪些？
@Component、@Controller、@Service、@Repository

#### @Component 和 @Bean 的区别是什么？
- @Component 作用于类，@Bean 作用于方法
- @Component 通常是通过类路径扫描来自动检测和自动装配到 Spring 容器中的，而 @Bean 通常是我们在方法中手动产生实例并将其作为返回值，@Bean 告诉 Spring 这个返回值就是 bean。
- @Bean 比 @Component 自定义性更强，很多时候只能通过 @Bean 注解来注册 bean，比如第三方类库。

#### 注入 Bean 的注解有哪些？
@Autowired、@Resource、@Inject(较少使用)

#### @Autowired 和 @Resource 的区别是什么？
- @Autowired 是 Spring 提供的注解，@Resource 是 JDK 提供的注解。
- @Autowired 默认注入方式是 `byType`，@Resource 默认注入方式是 `byName`。
- 当接口存在多个实现类的时候，它们都需要通过名称来正确匹配，@Autowired 通过 @Qualifier 注解指定，@Resource 通过它的 `name` 属性指定。
- @Autowired 支持在构造函数、方法、字段和参数上使用，而 @Resource 主要用于字段和方法上的注入，不支持构造函数或参数上使用。

#### Bean的作用域有哪些？
- singleton
- prototype
- request（仅 Web 应用可用）：每一次 HTTP 请求都会产生一个新的 bean，仅在请求期间有效。
- session（仅 Web 应用可用）：每一次来自新 session 的 HTTP 请求都会产生一个新的 bean，仅在 session 请求期间有效。
- application/global-session（仅 Web 应用可用）：每个 Web 应用启动时创建一个 bean，仅在应用期间有效。
- websocket（仅 Web 应用可用）：每一次 websocket 会话产生一个新的 bean。

#### 如何配置 bean 的作用域？
- xml 方式：scope="singleton"
- 注解方式：@Scope(Value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)

#### Bean 是线程安全的吗？
Bean 是否线程安全，取决于作用域和状态。
- prototype 每次获取创建一个新的 bean，不存在资源竞争，所以不存在线程安全问题。
- singleton 可能会有资源竞争的问题，取决于 bean 是否有状态，有状态则存在线程安全问题。bean 有状态是指包含可变的成员变量。大部分 bean 都是无状态的，比如 Dao、Service 层的 bean。
- 对于有状态单例 bean 的线程安全问题，有两种解决方案：
  - 在 bean 中尽量避免定义可变的成员变量
  - 利用 ThreadLocal 存储成员变量（推荐）

#### Bean 的生命周期？
从上往下：
- 实例化 bean 对象
- 设置对象属性
- 检查 Aware 相关接口并设置依赖
- BeanPostProcessor 前置处理
- 检查是否有 InitializingBean 以决定是否调用 afterPropertiesSet 方法
- 检查是否有自定义的 init-method
- BeanPostProcessor 后置处理
- 注册必要 Destruction 相关回调接口
- 使用中
- 销毁时，是否实现了 DisposableBean 接口，是否有自定义的 `destroy()`方法，若实现执行 `destroy()` 方法。


## Spring AOP

#### Spring AOP 是什么？
Aspect-Oriented Programmer，面向切面编程，用于进行方法功能增强或封装通用的代码逻辑。   
Spring AOP 底层实现是基于动态代理的，若要代理的对象实现了接口则使用 JDK 动态代理，若未实现接口则使用 CGLib 动态代理。

#### AOP 切面编程涉及到的专业术语有哪些？
- 目标（Target）：要代理的对象。
- 代理(Proxy)：代理对象，即增强后的对象。
- 连接点(JoinPoint)：目标对象所属的类中，定义的所有方法都是连接点。
- 切入点(PointCut)：要执行增强的方法。
- 通知(Advice)：增强的逻辑，也就是拦截到目标对象的连接点之后要做的事。
- 切面(Aspect)：切点 + 通知。
- 织入(Weaving)：将通知应用到目标对象，进而产生代理对象的过程动作。

#### Spring AOP 和 AspectJ AOP 有什么区别？
- Spring AOP 属于运行时增强，AspectJ AOP 是编译时增强。
- Spring AOP 基于代理，而 AspectJ AOP 基于字节码操作。
- Spring AOP 已经集成了 AspectJ。
- AspectJ AOP 比 Spring AOP 功能更强大，性能更快，而 Spring AOP 相对来说更简单。

#### AspectJ 定义的通知类型有哪些？
- Before（前置通知）
- After（后置通知）
- Around（环绕通知）
- AfterReturning（返回通知）
- AfterThrowing（异常通知）

#### 多个切面的执行顺序如何控制？
- 通常使用 @Order 注解直接定义切面顺序
- 也可以实现 Ordered 接口重写 getOrder 方法。


## Spring MVC

#### Spring MVC 是什么？
MVC 是 Model、View、Controller 的简写，它更像是一种设计模式，其核心思想是通过将业务逻辑、数据、显示分离来组织代码。   
Spring MVC 是一款很优秀的 MVC 框架，可以简化 Web 层的开发，并且天生与 Spring 框架集成。

#### Spring MVC 的核心组件有哪些？
- `DispatcherServlet`：核心的中央处理器，负责接收请求、分发，并给予客户端响应。
- `HandlerMapping`：处理器映射器，根据 URL 去匹配查找能处理的 Handler，并将请求涉及到的拦截器和 Handler 一起封装。
- `HandlerAdapter`：处理器适配器，根据 HandlerMapping 找到的 Handler，适配执行对应的 Handler。
- `Handler`：请求处理器，处理实际请求。
- `ViewResolver`：视图解析器，根据 Handler 返回的逻辑视图/视图，解析并渲染真正的视图，并传递给 DispatcherServlet 响应客户端。

#### Spring MVC 的工作原理？
1. 客户端发送请求，`DispatcherServlet` 拦截请求。
2. `DispatcherServlet` 根据请求信息调用 `HandlerMapping`。`HandlerMapping` 根据 URL 去匹配查找能处理的 `Handler` （也就是平常说的 `Controller` 控制器），并将请求涉及到的拦截器和 `Handler` 一起封装。
3. `DispatcherServlet` 调用 `HandlerAdapter` 执行 `Handler`。
4. `Handler` 完成用户请求的处理，会返回一个 `ModelAndView` 对象给 `DispatcherServlet`。`ModelAndView` 包含了数据模型和相应的视图信息。`Model` 是返回的数据对象，`View` 是视图。
5. `ViewResolver` 会根据逻辑视图解析渲染真正的视图。
6. `DispatcherServlet` 把返回的 `Model` 传给 `View`。
7. 把 `View` 返回给客户端。

#### 统一异常处理怎么做？
使用 @ControllerAdvice + @ExceptionHandler 这两个注解


## Spring 中的设计模式

#### JDK 中用到了哪些设计模式？
- 单例模式：`java.lang.Runtime` 类使用了单例模式来确保在一个 Java 虚拟机中只有一个运行时实例。
- 工厂模式：`java.util.Calendar` 类使用了工厂方法来创建日历实例。
- 观察者模式：Java 的事件处理机制（如 AWT 和 Swing 中的事件监听器）使用了观察者模式，其中事件源通知注册的观察者对象有关事件的发生。
- 策略模式：`java.util.Comparator` 接口用于定义比较策略，允许对象根据不同的策略进行比较。
- 装饰器模式：输入输出流类层次结构中的装饰器类（如 `java.io.BufferedReader` 和 `java.io.BufferedWriter`）使用了装饰器模式来增强流的功能。
- 适配器模式：`java.util.Arrays` 类中的 `asList()` 方法返回的 `List` 适配器将数组转换为 `List` 对象。
- 迭代器模式：Java 集合框架中的集合类（如 `ArrayList、HashSet`）使用了迭代器模式来遍历元素。
- 模板方法模式：`java.io.InputStream` 和 `java.io.OutputStream` 类中的读取和写入方法使用了模板方法模式，其中核心算法由超类定义，而具体操作由子类实现。
- 命令模式：`java.util.concurrent` 包中的 `Executor` 接口使用了命令模式，将任务封装为命令以异步执行。

#### Spring 中用到了哪些设计模式？
- 依赖注入（Dependency Inject）：它是实现控制反转的一种设计模式，就是将实例变量传入到一个对象中去。
- 工厂设计模式：Spring 使用工厂模式可以通过 `BeanFactory` 或 `ApplicationContext` 创建 bean 对象。
- 单例设计模式：Spring 通过 `ConcurrentHashMap` 实现单例注册表的特殊方式实现单例模式。
- 代理模式：Spring AOP 就是基于动态代理的，如果要代理的对象实现了某个接口则使用 JDK 动态代理，如果没有实现接口则使用 CGlib 动态代理。
- 模板方法模式：一种行为设计模式，它定义一个操作中的算法的骨架，而将一些步骤延迟到子类中实现。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤的实现方式。Spring 中 `JdbcTemplate、HibernateTemplate` 等以 Template 结尾的对数据库操作的类，它们就使用到了模板模式。
- 观察者模式：一种对象行为型模式，表示一种对象与对象之间具有依赖关系，当一个对象发生改变的时候，依赖这个对象的所有对象也会做出反应。Spring 事件驱动模型就是观察者模式很经典的一个应用。
- 适配器模式：Adapter Pattern 将一个接口转换成客户希望的另一个接口，适配器模式使接口不兼容的那些类可以一起工作。Spring AOP 的 Advice 用到了适配器模式。Spring MVC 中 DispatcherServlet 解析到对应的 Handler 后，由 HandlerAdapter 适配器处理。
- 装饰者模式：装饰者模式可以动态地给对象添加一些额外的属性或行为。Spring 中用到的装饰器模式在类名上含有 `Wrapper` 或者 `Decorator`。

#### 使用单例模式的好处？
- 对于频繁使用的对象，可以省略创建对象所花费的时间，特别是对重量级对象而言。
- 由于 new 操作次数减少，对系统内存的使用频率也会降低，这将减轻 GC 压力，缩短 GC 停顿时间。

#### Spring 工厂模式中 `BeanFactory` 和 `ApplicationContext` 创建对象有什么不同？
- `BeanFactory`：延迟注入（使用到某个 bean 时才会注入），相比于 `ApplicationContext` 来说占用更少的内存，程序启动速度更快。
- `ApplicationContext`：程序启动时一次性创建所有的 bean。`ApplicationContext` 扩展了 `BeanFactory`，除了有 `BeanFactory` 的功能还有额外更多功能，一般来说使用这个更多。它的三个实现类如下：
  - `ClassPathXmlApplication`：它会在类路径下查找指定的 XML 配置文件，并根据配置文件中定义的 Bean 来初始化应用程序上下文。
  - `FileSystemXmlApplication`：从本地文件系统中的 XML 文件载入上下文定义信息。
  - `XmlWebApplicationContext`：从 Web 系统中的 XML 文件载入上下文定义信息。

#### 为什么要在 Spring MVC 中使用适配器模式？
Spring MVC 中的 Controller 种类众多，不同类型的 Controller 通过不同的方法来对请求进行处理。如果不利用适配器模式而让 DispatcherServlet 直接获取对应类型的 Controller 的话，每加一个Controller 就需要加一行判断，这使得程序难以维护，且违反了设计模式中的开闭原则。

#### 有哪些设计原则？
1. **单一职责原则（Single Responsibility Principle，SRP）：** 一个类应该只有一个引起变化的原因。换句话说，一个类应该只有一个责任。
2. **开放封闭原则（Open/Closed Principle，OCP）：** 软件实体（类、模块、函数等）应该对扩展开放，对修改关闭。通过扩展现有的代码来适应新的需求，而不是直接修改已有的代码。
3. **里氏替换原则（Liskov Substitution Principle，LSP）：** 子类型必须能够替换掉它们的基类型，而不影响程序的正确性。即，如果一个程序中使用了基类，那么替换成子类也不应该导致程序出错。
4. **依赖倒置原则（Dependency Inversion Principle，DIP）：** 高层模块不应该依赖于底层模块，二者都应该依赖于抽象。抽象不应该依赖于具体实现细节，具体实现细节应该依赖于抽象。
5. **接口隔离原则（Interface Segregation Principle，ISP）：** 不应该强迫一个类实现它用不到的接口。客户端不应该被迫依赖于它们不使用的方法。
6. **合成/聚合复用原则（Composition/Aggregation Reuse Principle，CARP）：** 首选使用合成/聚合，而不是继承来达到复用的目的。通过将现有的类组合到新的类中，而不是通过继承现有类，可以更灵活地达到复用的目的。
7. **最小知识原则（Law of Demeter，LoD）：** 一个对象应该对其他对象有尽可能少的了解。换句话说，一个类不应该知道太多关于其他类的内部细节。
8. **迪米特法则（Law of Demeter，LoD）：** 一个软件实体应当尽可能少地与其他实体发生相互作用。也就是说，一个对象应该对其他对象有最小的了解。
9. **KISS原则（Keep It Simple, Stupid）：** 简单问题的解决方案往往比复杂问题的解决方案更好。因此，在设计中应该保持简单，避免过度复杂化。
10. **DRY原则（Don't Repeat Yourself）：** 不要重复代码，避免在系统中存在相似或相同的代码片段。通过抽象和封装来避免重复。



## Spring 事务
**只有保证了事务的原子性、隔离性、持久性，一致性才能得到保障。A、I、D 是手段，D 是目的。**

#### Spring 中由哪两种支持事务管理的方式？
- 编程式事务管理：通过 `TransactionTemplate` 或者 `TransactionManager` 手动管理事务，实际应用中很少使用。
- 声明式事务管理：推荐使用（代码侵入性最小），实际是通过 AOP 实现（基于 `@Transactional` 的全注解方式使用最多）

#### Spring 中事务相关的三个重要接口？
- `PlatformTransactionManager`：（平台）事务管理器，事务上层的管理者，Spring 事务策略的核心。
- `TransactionDefinition`：对于事务的一些定义信息，如事务隔离级别、传播行为、超时、只读、回滚规则。
- `TransactionStatus`：事务运行状态，提供了一些接口获取事务相应的状态，比如是否新事务、是否可以回滚等。

#### 为什么要定义或者说抽象 `PlatformTransactionManager` 这个接口？
Spring 并不直接管理事务，而是通过 `PlatformTransactionManager` 接口抽象出了事务管理行为，然后由不同的平台去实现它，这样可以保证提供给外部的行为不变，方便扩展，其实就是一种 SPI 机制。

#### 什么是事务属性？
事务属性即事务的一些基本配置，描述了事务策略如何应用到方法上，包含了 5 个方面：
- 隔离级别
- 传播行为
- 回滚规则
- 是否只读
- 事务超时

#### 什么是事务传播行为？
事务传播行为是为了解决业务层方法之间互相调用的事务问题。当事务方法被另一个事务方法调用时，必须指定事务应该如何传播。
- `TransactionDefinition.PROPAGATION_REQUIRED`：默认的事务传播行为，也是使用最多的。如果当前存在事务，则加入该事务，只要一个方法回滚，整个事务均回滚；如果当前没有事务，则创建一个新的事务。
- `TransactionDefinition.PROPAGATION_SUPPORTS`：如果当前存在事务，则加入该事务；如果当前没有事务，则以非事务的方式继续运行。
- `TransactionDefinition.PROPAGATION_MANDATORY`：如果当前存在事务，则加入该事务；如果当前没有事务，则抛出异常。
- `TransactionDefinition.PROPAGATION_REQUIRES_NEW`：不管外部方法是否开启事务，内部方法会新开启自己的事务，且开启的事务相互独立，互不干扰。但是如果内部方法抛出未被捕获异常，则外部事务管理机制可以检测到，有可能回滚。
- `TransactionDefinition.PROPAGATION_NOT_SUPPORTED`：以非事务方式运行，如果当前存在事务，则把当前事务挂起。
- `TransactionDefinition.PROPAGATION_NEVER`：以非事务方式运行，如果当前存在事务，则抛出异常。
- `TransactionDefinition.PROPAGATION_NESTED`：如果外部方法开启事务的情况下，在内部开启一个新的事务，作为嵌套事务存在。如果外部方法无事务，则单独开启一个事务，跟 `PROPAGATION_REQUIRED` 类似。

#### 事务有哪些隔离级别？
- `TransactionDefinition.ISOLATION_DEFAULT`：使用后端数据库默认的隔离级别。
- `TransactionDefinition.ISOLATION_READ_UNCOMMITTED`：读未提交，最低的隔离级别，可能会导致脏读、幻读、不可重复读。
- `TransactionDefinition.ISOLATION_READ_COMMITTED`：读提交，可以阻止脏读，但仍有可能发生幻读和不可重复读。
- `TransactionDefinition.ISOLATION_REPEATABLE_READ`：可阻止脏读和不可重复读，但仍有可能发生幻读。
- `TransactionDefinition.ISOLATION_SERIALIZABLE`：事务一个个执行，则事务之间不可能产生干扰。该级别可以防止脏读、幻读、不可重复读，但严重影响程序性能。

#### 事务的只读属性有什么作用？
- 如果一次执行单条查询语句，则没有必要启用事务支持，数据库默认支持 SQL 执行期间的读一致性；
- 如果一次执行多条查询语句，例如统计查询，报表查询，在这种场景下要保证整体的读一致性，应该开启事务。否则，在前后查询期间若被其他用户改变，则该次整体的统计查询将会出现数据不一致的状态。

#### 什么是事务回滚规则？
事务回滚规则定义了哪些异常会导致事务回滚而哪些不会。
- 默认情况下，事务只有遇到运行时异常（`RuntimeException` 的子类）时才会回滚，`Error` 也会导致事务回滚，但是，在遇到受检查异常（Checked）时不会回滚。
- 如果想要回滚特定的异常类型，可以通过配置：`@Transactional(rollback = MyException.class)`。

#### `@Transactional` 注解原理？
`@Transactional` 的工作机制是基于 AOP 实现的，AOP 又是使用动态代理实现的。如果目标对象实现了接口，默认情况下使用 JDK 动态代理；如果没有实现接口，则会使用 CGLib 动态代理。  

如果一个类或者一个类中的 public 方法上被标注了 @Transactional 注解的话，Spring 容器会在启动的时候为其创建一个代理类，在调用被 `@Transactional` 注解的 public 方法时，实际调用的是 `TransactionInterceptor` 类中的 `invoke()` 方法。这个方法的作用就是在调用目标方法之前开启事务，方法执行过程中如果遇到异常的时候回滚事务，方法调用完成之后提交事务。

#### Spring AOP 自调用问题？（@Transactional 的自调用问题？）
当一个方法被标记了 `@Transactional` 注解的时候，Spring 事务管理器只会在被其他类方法调用的时候生效，而在同类的其他内部方法调用时无法生效。这是由 Spring AOP 工作原理决定，Spring AOP 在其他类的方法调用其代理对象时进行拦截，而同一个类的方法调用时则无法拦截到这个内部调用，因此事务失效。解决方法就是避免在同一类中进行自调用或者使用 AspectJ 取代 Spring AOP 代理。


## Spring Data JPA

#### 如何使用 JPA 在数据库中非持久化一个字段？
- static 修饰
- final 修饰
- transient 修饰
- @Transient 注解

#### JPA 审计功能是做什么的？有什么作用？
审计功能主要是帮助我们记录数据库操作的具体行为比如某条记录是谁创建的、什么时候创建的、最后修改人是谁、最后修改时间是什么时候。
- @CreatedDate
- @CreatedBy
- @LastModifiedDate
- @LastModifiedBy

#### 实体之间的关联关系注解有哪些？
- @OneToOne
- @ManyToMany
- @OneToMany
- @ManyToOne




## Spring Security

#### 有哪些控制请求的访问权限的方法？
- `permitAll()`：无条件允许任何形式访问，不管你登录还是没有登录。
- `anonymous()`：允许匿名访问，也就是没有登录才可以访问。
- `denyAll()`：无条件决绝任何形式的访问。
- `authenticated()`：只允许已认证的用户访问。
- `fullyAuthenticated()`：只允许已经登录或者通过 remember-me 登录的用户访问。
- `hasRole(String) `: 只允许指定的角色访问。
- `hasAnyRole(String)` : 指定一个或者多个角色，满足其一的用户即可访问。
- `hasAuthority(String)`：只允许具有指定权限的用户访问。
- `hasAnyAuthority(String)`：指定一个或者多个权限，满足其一的用户即可访问。
- `hasIpAddress(String)` : 只允许指定 ip 的用户访问。

#### 它提供了哪些对密码进行加密的方法？（如何进行加密？）
Spring Security 提供了多种加密算法的实现，开箱即用，非常方便。这些加密算法实现类的父类是 `PasswordEncoder` ，如果你想要自己实现一个加密算法的话，也需要继承 `PasswordEncoder`。



## Spring Boot 自动装配原理

#### 什么是 Spring Boot 自动装配？
提到自动装配的时候，一般会和 Spring Boot 联系在一起。但是，实际上 Spring Framework 早就实现了这个功能。Spring Boot 只是在其基础上，通过 SPI 的方式，做了进一步优化。   

SpringBoot 定义了一套接口规范，这套规范规定：SpringBoot 在启动时会扫描外部引用 jar 包中的 `META-INF/spring.factories` 文件，将文件中配置的类型信息加载到 Spring 容器，并执行类中定义的各种操作。对于外部 jar 来说，只需要按照 SpringBoot 定义的标准，就能将自己的功能装置进 SpringBoot。   

自动装配可以简单理解为：**通过注解或者一些简单的配置就能在 Spring Boot 的帮助下实现某块功能**。比如，在需要引入第三方依赖时，引入一个起步依赖 `starter` 即可。

#### Spring Boot 如何实现自动装配的？如何实现按需加载？
Spring Boot 的自动装配是通过条件注解实现的。Spring Boot 会在 `classpath` 中寻找符合条件的类，并根据这些类自动配置 Bean。这些条件注解有：
- `@ConditionalOnClass`：类路径下存在指定的类时才会生效。
- `@ConditionalOnMissingBean`：容器中不存在指定 Bean 时才会生效。
- `@ConditionalOnProperty`：指定的属性是否有指定的值。

Spring Boot 自动装配的步骤如下：
1. Spring Boot 启动时会加载 `META-INF/spring.factories` 文件，该文件中配置了所有自动装配的类。
2. 根据条件注解和实现类，Spring Boot 筛选出符合条件的类。
3. Spring Boot 会根据类中的配置信息来自动配置 Bean。
4. 配置完成后，Spring Boot 会将所有的 Bean 注册到容器中，以供其他组件使用。

除了使用Spring Boot提供的自动配置之外，我们还可以自定义自己的自动配置。自定义自动配置需要完成以下步骤：
1. 创建一个配置类，并在类上添加 `@Configuration` 和 `@EnableConfigurationProperties` 注解。
2. 在配置类中使用 `@ConditionalOnClass`、`@ConditionalOnMissingBean` 等条件注解，指定自动配置的条件。
3. 使用 `@ConfigurationProperties` 注解创建配置属性类，并在配置类中注入该属性类。
4. 编写需要自动配置的 Bean。
5. 使用 `@Bean` 注解将 Bean 注册到容器中。

#### @SpringBootApplication 的作用？
`@SpringBootApplication` 可以看作是 `@Configuration`、`@EnableAutoConfiguration`、`@ComponentScan` 注解的集合。这三个注解的作用分别是：
- `@EnableAutoConfiguration`：启动 SpringBoot 的自动配置机制。
- `@Configuration`：允许在上下文中注册额外的 bean 或导入其他配置类。
- `@ComponentScan`：扫描被 `@Component`、`@Service`、`@Controller` 注解的 bean，注解默认会扫描启动类所在的包下所有的类，可以自定义不扫描某些 Bean。
