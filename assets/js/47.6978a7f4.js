(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{466:function(v,_,l){"use strict";l.r(_);var i=l(4),a=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h3",{attrs:{id:"开发平台首页"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发平台首页"}},[v._v("#")]),v._v(" 开发平台首页")]),v._v(" "),_("ul",[_("li",[v._v("开发平台首页，显示前十个帖子\n"),_("ul",[_("li",[v._v("生成实体类对应discuss_post表，并将其对应dao层完成\n"),_("ul",[_("li",[v._v("分页查询，若需查某一个id的评论，则userId动态加入sql")]),v._v(" "),_("li",[v._v("查询所有评论数，若需查某一个id的所有评论数，则加入动态sql")])])])])]),v._v(" "),_("li",[v._v("开发分页组件，分页显示所有帖子")])]),v._v(" "),_("h3",{attrs:{id:"开发平台登录模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发平台登录模块"}},[v._v("#")]),v._v(" 开发平台登录模块")]),v._v(" "),_("h4",{attrs:{id:"发送邮件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#发送邮件"}},[v._v("#")]),v._v(" 发送邮件")]),v._v(" "),_("ul",[_("li",[v._v("邮箱设置\n"),_("ul",[_("li",[v._v("启用客户端SMTP服务")])])]),v._v(" "),_("li",[v._v("功能开发\n"),_("ul",[_("li",[v._v("导入jar包")]),v._v(" "),_("li",[v._v("邮箱参数配置")]),v._v(" "),_("li",[v._v("使用JavaMailSender发送邮件")])])]),v._v(" "),_("li",[v._v("模板引擎\n"),_("ul",[_("li",[v._v("使用 Thymeleaf 发送HTML邮件")])])])]),v._v(" "),_("h4",{attrs:{id:"开发注册功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发注册功能"}},[v._v("#")]),v._v(" 开发注册功能")]),v._v(" "),_("ul",[_("li",[v._v("访问注册页面，Controller 层定义 "),_("code",[v._v("getRegisterPage")]),v._v(" 方法，返回登录页面 register.html")]),v._v(" "),_("li",[v._v("导入 commons lang 包")]),v._v(" "),_("li",[v._v("在 application.properties 文件中配置网站域名，便于后面激活邮件中的激活地址能访问服务器")]),v._v(" "),_("li",[v._v("在util包中定义一个工具类 CommunityUtil，提供静态方法：\n"),_("ul",[_("li",[v._v("生成随机字符串：利用Java自带的UUID工具包，其中生成的随机字符串中包含 "),_("code",[v._v('"-"')]),v._v("，要将其替换为空字符串")]),v._v(" "),_("li",[v._v("MD5加密：给密码进行MD5加密，此外，为了更安全，在加密前明文密码中加入盐 "),_("code",[v._v("salt")]),v._v("，即 "),_("code",[v._v("hello -> hello + 3e4a8")]),v._v("，再进行MD5加密，这一步不在该方法中实现。")])])]),v._v(" "),_("li",[v._v("在 UserService 中定义注册方法，返回的是一个map对象\n"),_("ul",[_("li",[v._v("空值处理，包括对象本身，账号，密码等")]),v._v(" "),_("li",[v._v("验证账号是否已被注册，邮箱是否被注册")]),v._v(" "),_("li",[v._v("生成5位随机字符串作为 "),_("code",[v._v("salt")]),v._v(" ，加到明文密码中，再进行 md5 加密")]),v._v(" "),_("li",[v._v("对用户类型，状态，激活码进行设置，同时随机赋给一个头像 "),_("code",[v._v("http://images.nowcoder.com/head/%dt.png")]),v._v("，"),_("code",[v._v("%d")]),v._v("属于 1~1000，创建的时间也进行设置")]),v._v(" "),_("li",[v._v("在 activation.html 中修改激活邮件模板")]),v._v(" "),_("li",[v._v("发送激活邮件：利用 "),_("code",[v._v("context")]),v._v(" 容器存储注册用户的账号以及存储用户要通过邮箱获取的激活路径，用模板引擎生成格式化的模板，并通过 "),_("code",[v._v("mailClient")]),v._v(" 发送邮件")])])]),v._v(" "),_("li",[v._v("在 loginController 中定义Post请求的处理方法，传入的是 Model 和 账号，密码，邮箱（可以封装为 User 对象）\n"),_("ul",[_("li",[v._v("通过 UserService 调用 register 方法，根据返回的 Map 确定要怎么处理请求，若为 "),_("code",[v._v("null")]),v._v(" 说明注册成功，返回到处理结果页面 operate-result.html。若注册不成功，则返回注册页面，同时要将注册失败的信息存储到model中，以在注册页面中显示。")])])]),v._v(" "),_("li",[v._v("在 register.html 中提交表单需要定义 name 属性，要跟接收类 User 的属性对应。同时，由于该页面也要复用，因此要对注册失败信息判断是否显示。若判断需要显示，则原来输入的账号密码等还要显示。")]),v._v(" "),_("li",[v._v("账号激活处理\n"),_("ul",[_("li",[v._v("在 util 中定义常量接口，定义一些状态，在这里要定义的是激活的三个结果状态：成功、重复激活、失败。")]),v._v(" "),_("li",[v._v("在 UserService 中定义激活方法，如果 userId 对应的激活码对应上的话，就激活。")]),v._v(" "),_("li",[v._v("在 loginController 中定义激活请求处理\n"),_("ul",[_("li",[v._v("调用激活方法并返回结果，根据结果处理请求。无论激活是否成功，都返回到处理结果页面 operate-result.html，不同的是携带的信息不一样。")])])]),v._v(" "),_("li",[v._v("定义登录页面")])])])]),v._v(" "),_("h4",{attrs:{id:"生成验证码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生成验证码"}},[v._v("#")]),v._v(" 生成验证码")]),v._v(" "),_("ul",[_("li",[v._v("导入 Kaptcha 的 jar 包")]),v._v(" "),_("li",[v._v("编写 Kaptcha 配置类\n"),_("ul",[_("li",[v._v("Kaptcha 核心是一个实现类 Kaptcha，有一个默认实现类 DefaultKaptcha，其主要利用方法 "),_("code",[v._v("setConfig()")]),v._v(" 进行配置，而 "),_("code",[v._v("setConfig()")]),v._v(" 需要一个 "),_("code",[v._v("Config")]),v._v(" 对象，而 "),_("code",[v._v("Config")]),v._v(" 对象需要传入 "),_("code",[v._v("Properties")]),v._v(" 对象")]),v._v(" "),_("li",[v._v("进行配置，设置图片长宽高、文字的字体颜色、文字候选、文字长度、采用的噪声类。")])])]),v._v(" "),_("li",[v._v("生成随机字符、生成图片，通过 response 输出流将图片输出出去。")]),v._v(" "),_("li",[v._v("在 login.html 中通过 js 动态地改变验证码，即每次刷新都能访问图片。")])]),v._v(" "),_("h4",{attrs:{id:"开发登录、退出功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发登录、退出功能"}},[v._v("#")]),v._v(" 开发登录、退出功能")]),v._v(" "),_("ul",[_("li",[v._v("访问登录页面\n"),_("ul",[_("li",[v._v("点击顶部区域内的链接，打开登录页面")]),v._v(" "),_("li",[v._v("定义实体类，与 login_ticket 表对应，以及定义它的 mapper ，")])])]),v._v(" "),_("li",[v._v("登录\n"),_("ul",[_("li",[v._v("验证账号、密码、验证码。成功时，生成登录凭证，发放给客户端；失败时，跳转回登录页。")]),v._v(" "),_("li",[v._v("在 UserService 中定义登录方法，返回 map 集合，因为处理的结果有多种\n"),_("ul",[_("li",[v._v("对空值进行处理")]),v._v(" "),_("li",[v._v("验证账号及其状态，确认库中是否有该账号，以及判断该账号的状态是否激活了")]),v._v(" "),_("li",[v._v("验证密码，要将传入的明文密码先加密了再与库中的进行比较")]),v._v(" "),_("li",[v._v("登录成功，则生成登录凭证")])])]),v._v(" "),_("li",[v._v("在 loginController 中定义登录请求方法\n"),_("ul",[_("li",[v._v("检查验证码")]),v._v(" "),_("li",[v._v("检查账号密码")])])])])]),v._v(" "),_("li",[v._v("退出\n"),_("ul",[_("li",[v._v("将登录凭证修改为失效状态。")]),v._v(" "),_("li",[v._v("跳转至网站首页。")])])])]),v._v(" "),_("h4",{attrs:{id:"显示登录信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#显示登录信息"}},[v._v("#")]),v._v(" 显示登录信息")]),v._v(" "),_("ul",[_("li",[v._v("通过设置拦截器来实现\n"),_("ul",[_("li",[v._v("从cookie中获取凭证")]),v._v(" "),_("li",[v._v("如果凭证不为空则查询凭证，检查凭证是否有效，若有效根据凭证查询用户")])])]),v._v(" "),_("li",[v._v("在请求开始时查询登录用户")]),v._v(" "),_("li",[v._v("在本次请求中持有用户数据")]),v._v(" "),_("li",[v._v("在模板视图上显示用户数据")]),v._v(" "),_("li",[v._v("在请求结束时清理用户数据")])]),v._v(" "),_("h4",{attrs:{id:"账号设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#账号设置"}},[v._v("#")]),v._v(" 账号设置")]),v._v(" "),_("ul",[_("li",[v._v("上传文件\n"),_("ul",[_("li",[v._v("请求：必须是POST请求")]),v._v(" "),_("li",[v._v('表单：enctype="multipart/form-data"')]),v._v(" "),_("li",[v._v("spring MVC:通过 MultipartFile 处理上传文件")]),v._v(" "),_("li",[v._v("开发步骤：\n"),_("ul",[_("li",[v._v("访问账号设置页面")]),v._v(" "),_("li",[v._v("上传头像")]),v._v(" "),_("li",[v._v("获取头像")])])])])])]),v._v(" "),_("h4",{attrs:{id:"检查登录状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#检查登录状态"}},[v._v("#")]),v._v(" 检查登录状态")]),v._v(" "),_("ul",[_("li",[v._v("使用拦截器\n"),_("ul",[_("li",[v._v("在方法前标注自定义注解")]),v._v(" "),_("li",[v._v("拦截所有请求，只处理带有该注解的方法")])])]),v._v(" "),_("li",[v._v("自定义注解(通过元注解定义)\n"),_("ul",[_("li",[v._v("常用的元注解： "),_("code",[v._v("@Target")]),v._v("、"),_("code",[v._v("@Retention")]),v._v("、"),_("code",[v._v("@Document")]),v._v("、"),_("code",[v._v("@Inherited")])]),v._v(" "),_("li",[v._v("如何读取注解："),_("code",[v._v("Method.getDeclaredAnnotations()")]),v._v("、"),_("code",[v._v("Method.getAnnotation(Class<T> annotationClass)")])])])])]),v._v(" "),_("h3",{attrs:{id:"平台核心模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#平台核心模块"}},[v._v("#")]),v._v(" 平台核心模块")]),v._v(" "),_("h4",{attrs:{id:"过滤敏感词"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#过滤敏感词"}},[v._v("#")]),v._v(" 过滤敏感词")]),v._v(" "),_("ul",[_("li",[v._v("前缀树\n"),_("ul",[_("li",[v._v("名称：Trie、字典树、查找树")]),v._v(" "),_("li",[v._v("特点：查找效率高，消耗内存大")]),v._v(" "),_("li",[v._v("应用：字符串检索、词频统计、字符串排序等")])])]),v._v(" "),_("li",[v._v("敏感词过滤器\n"),_("ul",[_("li",[v._v("定义前缀树")]),v._v(" "),_("li",[v._v("根据敏感词，初始化前缀树")]),v._v(" "),_("li",[v._v("编写过滤敏感词的方法")])])])]),v._v(" "),_("h4",{attrs:{id:"发布帖子"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#发布帖子"}},[v._v("#")]),v._v(" 发布帖子")]),v._v(" "),_("ul",[_("li",[v._v("AJAX\n"),_("ul",[_("li",[v._v("Asynchronous JavaScript and XML")]),v._v(" "),_("li",[v._v("异步的JavaScript与XML，不是一门新技术，只是一个新的术语")]),v._v(" "),_("li",[v._v("使用AJAX，网页能够将增量更新呈现在页面上，而不需要刷新整个页面")]),v._v(" "),_("li",[v._v("虽然X代表XML，但目前JSON的使用比XML更加普遍")])])]),v._v(" "),_("li",[v._v("采用AJAX请求，实现发布帖子的功能")])]),v._v(" "),_("h4",{attrs:{id:"帖子详情"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#帖子详情"}},[v._v("#")]),v._v(" 帖子详情")]),v._v(" "),_("ul",[_("li",[v._v("DiscussPostMapper")]),v._v(" "),_("li",[v._v("DiscussPostService")]),v._v(" "),_("li",[v._v("DiscussPostController")]),v._v(" "),_("li",[v._v("index.html\n"),_("ul",[_("li",[v._v("在帖子标题上增加访问详情页面的链接")])])]),v._v(" "),_("li",[v._v("discuss-detail.html\n"),_("ul",[_("li",[v._v("处理静态资源的访问路径")]),v._v(" "),_("li",[v._v("复用index.html的header区域")]),v._v(" "),_("li",[v._v("显示标题、作者、发布时间、帖子正文等内容")])])])]),v._v(" "),_("h4",{attrs:{id:"显示评论"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#显示评论"}},[v._v("#")]),v._v(" 显示评论")]),v._v(" "),_("ul",[_("li",[v._v("数据层\n"),_("ul",[_("li",[v._v("根据实体查询一页评论数据")]),v._v(" "),_("li",[v._v("根据实体查询评论的数量")])])]),v._v(" "),_("li",[v._v("业务层\n"),_("ul",[_("li",[v._v("处理查询评论的业务")]),v._v(" "),_("li",[v._v("处理查询评论数量的业务")])])]),v._v(" "),_("li",[v._v("表现层\n"),_("ul",[_("li",[v._v("显示帖子详情数据时，同时显示该帖子所有的评论数据")])])])]),v._v(" "),_("h4",{attrs:{id:"添加评论"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#添加评论"}},[v._v("#")]),v._v(" 添加评论")]),v._v(" "),_("ul",[_("li",[v._v("数据层\n"),_("ul",[_("li",[v._v("增加评论数据")]),v._v(" "),_("li",[v._v("修改帖子的评论数量")])])]),v._v(" "),_("li",[v._v("业务层\n"),_("ul",[_("li",[v._v("处理添加评论的业务")]),v._v(" "),_("li",[v._v("先增加评论，再更新帖子的评论数量")])])]),v._v(" "),_("li",[v._v("表现层\n"),_("ul",[_("li",[v._v("处理添加评论数据的请求")]),v._v(" "),_("li",[v._v("设置添加评论的表单")])])])]),v._v(" "),_("h4",{attrs:{id:"私信列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#私信列表"}},[v._v("#")]),v._v(" 私信列表")]),v._v(" "),_("ul",[_("li",[v._v("私信列表\n"),_("ul",[_("li",[v._v("查询当前用户的会话列表")]),v._v(" "),_("li",[v._v("每个会话只显示一条最新的私信")]),v._v(" "),_("li",[v._v("支持分页显示")])])]),v._v(" "),_("li",[v._v("私信详情\n"),_("ul",[_("li",[v._v("查询某个会话所包含的私信")]),v._v(" "),_("li",[v._v("支持分页显示")])])])]),v._v(" "),_("h4",{attrs:{id:"发送私信"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#发送私信"}},[v._v("#")]),v._v(" 发送私信")]),v._v(" "),_("ul",[_("li",[v._v("发送私信\n"),_("ul",[_("li",[v._v("采用异步的方式发送私信")]),v._v(" "),_("li",[v._v("发送成功后输信私信列表")])])]),v._v(" "),_("li",[v._v("设置已读\n"),_("ul",[_("li",[v._v("访问私信详情时，将显示的私信设置为已读状态")])])])]),v._v(" "),_("h4",{attrs:{id:"统一处理异常"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#统一处理异常"}},[v._v("#")]),v._v(" 统一处理异常")]),v._v(" "),_("ul",[_("li",[v._v("@ControllerAdvice\n"),_("ul",[_("li",[v._v("用于修饰类，表示该类是Controller的全局配置类。")]),v._v(" "),_("li",[v._v("在此类中，可以对Controller进行如下三种全局配置：异常处理方案、绑定数据方案、绑定参数方案。")])])]),v._v(" "),_("li",[v._v("@ExceptionHandler\n"),_("ul",[_("li",[v._v("用于修饰方法，该方法会在Controller出现异常后被调用，用于处理捕获到的异常。")])])]),v._v(" "),_("li",[v._v("@ModelAttribute\n"),_("ul",[_("li",[v._v("用于修饰方法，该方法会在Controller方法执行前被调用，用于为Model对象绑定参数。")])])]),v._v(" "),_("li",[v._v("@DataBinder\n"),_("ul",[_("li",[v._v("用于修饰方法，该方法会在Controller方法执行前被调用，用于绑定参数的转换器。")])])])]),v._v(" "),_("h4",{attrs:{id:"统一记录日志"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#统一记录日志"}},[v._v("#")]),v._v(" 统一记录日志")]),v._v(" "),_("ul",[_("li",[v._v("AOP的概念\n"),_("ul",[_("li",[v._v("Aspect Oriented Programing，即面向方面（切面）编程")]),v._v(" "),_("li",[v._v("AOP是一种编程思想，是对OOP的补充，可以进一步提高编程的效率。")])])]),v._v(" "),_("li",[v._v("AOP的实现\n"),_("ul",[_("li",[v._v("AspectJ\n"),_("ul",[_("li",[v._v("AspectJ是语言级的实现，它扩展了Java语言，定义了AOP语法。")]),v._v(" "),_("li",[v._v("AspectJ在编译期织入代码，它有一个专门的编译器，用来生成遵守Java字节码规范的class文件。")])])]),v._v(" "),_("li",[v._v("Spring AOP\n"),_("ul",[_("li",[v._v("Spring AOP使用纯Java实现，它不需要专门的编译过程，也不需要特殊的类装载器。")]),v._v(" "),_("li",[v._v("Spring AOP在运行时通过代理的方式织入代码，只支持方法类型的连接点")]),v._v(" "),_("li",[v._v("Spring支持对AspectJ的集成。")])])])])]),v._v(" "),_("li",[v._v("Spring AOP\n"),_("ul",[_("li",[v._v("JDK动态代理\n"),_("ul",[_("li",[v._v("Java提供的动态代理技术，可以在运行时创建接口的代理实例。")]),v._v(" "),_("li",[v._v("Spring AOP默认采用此种方式，在接口的代理实例中织入代码。")])])]),v._v(" "),_("li",[v._v("CGLib动态代理\n"),_("ul",[_("li",[v._v("采用底层的字节码技术，在运行时创建子类代理实例。")]),v._v(" "),_("li",[v._v("当目标对象不存在接口时，Spring AOP会采用此种方式，在子类实例中织入代码")])])])])])]),v._v(" "),_("h3",{attrs:{id:"redis-一站式高性能存储方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis-一站式高性能存储方案"}},[v._v("#")]),v._v(" Redis，一站式高性能存储方案")]),v._v(" "),_("h4",{attrs:{id:"点赞"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#点赞"}},[v._v("#")]),v._v(" 点赞")]),v._v(" "),_("ul",[_("li",[v._v("点赞\n"),_("ul",[_("li",[v._v("支持对帖子、评论点赞，赞帖子同时会给帖子的主人点赞")]),v._v(" "),_("li",[v._v("第1次点赞，第2次取消点赞")])])]),v._v(" "),_("li",[v._v("首页点赞数量\n"),_("ul",[_("li",[v._v("统计帖子的点赞数量")])])]),v._v(" "),_("li",[v._v("详情页点赞数量\n"),_("ul",[_("li",[v._v("统计点赞数量")]),v._v(" "),_("li",[v._v("显示点赞状态")])])])]),v._v(" "),_("h4",{attrs:{id:"我收到的赞"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#我收到的赞"}},[v._v("#")]),v._v(" 我收到的赞")]),v._v(" "),_("ul",[_("li",[v._v("重构点赞功能\n"),_("ul",[_("li",[v._v("以用户为key，记录点赞数量")]),v._v(" "),_("li",[v._v("increment(key),decrement(key)")])])]),v._v(" "),_("li",[v._v("开发个人主页\n"),_("ul",[_("li",[v._v("以用户为key，查询点赞数量")])])])]),v._v(" "),_("h4",{attrs:{id:"关注、取消关注"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关注、取消关注"}},[v._v("#")]),v._v(" 关注、取消关注")]),v._v(" "),_("ul",[_("li",[v._v("需求\n"),_("ul",[_("li",[v._v("开发关注、取消关注功能")]),v._v(" "),_("li",[v._v("统计用户的关注数、粉丝数")])])]),v._v(" "),_("li",[v._v("关键\n"),_("ul",[_("li",[v._v("若A关注了B，则A是B的Follower(粉丝)，B是A的Followee(关注目标)")]),v._v(" "),_("li",[v._v("关注的目标可以是用户、帖子、题目等，在实现时将这些目标抽象为实体")])])])]),v._v(" "),_("h4",{attrs:{id:"关注列表、粉丝列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关注列表、粉丝列表"}},[v._v("#")]),v._v(" 关注列表、粉丝列表")]),v._v(" "),_("ul",[_("li",[v._v("业务层\n"),_("ul",[_("li",[v._v("查询某个用户关注的人，支持分页")]),v._v(" "),_("li",[v._v("查询某个用户的粉丝，支持分页")])])]),v._v(" "),_("li",[v._v("表现层\n"),_("ul",[_("li",[v._v("处理“查询关注的人”、“查询粉丝”请求")]),v._v(" "),_("li",[v._v("编写“查询关注的人”、“查询粉丝”模板")])])])]),v._v(" "),_("h4",{attrs:{id:"优化登录模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化登录模块"}},[v._v("#")]),v._v(" 优化登录模块")]),v._v(" "),_("ul",[_("li",[v._v("使用Redis存储验证码\n"),_("ul",[_("li",[v._v("验证码需要频繁的访问与刷新，对性能要求较高")]),v._v(" "),_("li",[v._v("验证码不需永久保存，通常在很短的时间后就会失效")]),v._v(" "),_("li",[v._v("分布式部署时，存在Session共享的问题")])])]),v._v(" "),_("li",[v._v("使用Redis存储登录凭证\n"),_("ul",[_("li",[v._v("处理每次请求时，都要查询用户的登录凭证，访问的频率非常高")])])]),v._v(" "),_("li",[v._v("使用Redis缓存用户信息\n"),_("ul",[_("li",[v._v("处理每次请求时，都要根据凭证查询用户信息，访问的频率非常高")])])])]),v._v(" "),_("h3",{attrs:{id:"kafka-构建tb级异步消息系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kafka-构建tb级异步消息系统"}},[v._v("#")]),v._v(" Kafka，构建TB级异步消息系统")]),v._v(" "),_("h4",{attrs:{id:"发送系统通知"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#发送系统通知"}},[v._v("#")]),v._v(" 发送系统通知")]),v._v(" "),_("ul",[_("li",[v._v("触发事件\n"),_("ul",[_("li",[v._v("评论后，发布通知")]),v._v(" "),_("li",[v._v("点赞后，发布通知")]),v._v(" "),_("li",[v._v("关注后，发布通知")])])]),v._v(" "),_("li",[v._v("处理事件\n"),_("ul",[_("li",[v._v("封装事件对象")]),v._v(" "),_("li",[v._v("开发事件的生产者")]),v._v(" "),_("li",[v._v("开发事件的消费者")])])]),v._v(" "),_("li",[v._v("业务逻辑\n"),_("ul",[_("li",[v._v("当点赞评论关注后，后台封装成一个事件向某一个用户发送消息(Producer)，在点赞评论关注时调用该功能，还得传入对应的帖子id，")]),v._v(" "),_("li",[v._v("当消费者(Consumer)接收到消息后，将事件存储到Message表中，而被点赞用户登录后则能接收到系统通知，即查询到Message表中的数据")])])])]),v._v(" "),_("h4",{attrs:{id:"显示系统通知"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#显示系统通知"}},[v._v("#")]),v._v(" 显示系统通知")]),v._v(" "),_("ul",[_("li",[v._v("通知列表\n"),_("ul",[_("li",[v._v("显示评论、点赞、关注三种类型的通知")])])]),v._v(" "),_("li",[v._v("通知详情\n"),_("ul",[_("li",[v._v("分页显示某一类主题所包含的通知")])])]),v._v(" "),_("li",[v._v("未读消息\n"),_("ul",[_("li",[v._v("在页面头部显示所有的未读消息数量")])])])]),v._v(" "),_("h3",{attrs:{id:"开发平台搜索功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发平台搜索功能"}},[v._v("#")]),v._v(" 开发平台搜索功能")]),v._v(" "),_("ul",[_("li",[v._v("将Elasticsearch和实体类之间建立联系，在实体类中加入注解")]),v._v(" "),_("li",[v._v("搜索服务\n"),_("ul",[_("li",[v._v("将帖子保存至 Elasticsearch 服务器")]),v._v(" "),_("li",[v._v("从 Elasticsearch 服务器删除帖子")]),v._v(" "),_("li",[v._v("从 Elasticsearch 服务器搜索帖子")])])]),v._v(" "),_("li",[v._v("发布事件\n"),_("ul",[_("li",[v._v("发布帖子时，将帖子异步的提交到 Elasticsearch 服务器")]),v._v(" "),_("li",[v._v("增加评论时，将帖子异步的提交到 Elasticsearch 服务器")]),v._v(" "),_("li",[v._v("在消费组件中增加一个方法，消费帖子发布事件")])])]),v._v(" "),_("li",[v._v("显示结果\n"),_("ul",[_("li",[v._v("在控制器中处理搜索请求，在HTML上显示搜索结果")])])])]),v._v(" "),_("h3",{attrs:{id:"项目优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目优化"}},[v._v("#")]),v._v(" 项目优化")]),v._v(" "),_("h4",{attrs:{id:"权限控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#权限控制"}},[v._v("#")]),v._v(" 权限控制")]),v._v(" "),_("ul",[_("li",[v._v("登录检查\n"),_("ul",[_("li",[v._v("之前采用拦截器实现了登录检查，这是简单的权限管理方案，现在将其废弃")])])]),v._v(" "),_("li",[v._v("授权配置\n"),_("ul",[_("li",[v._v("对当前系统内包含的所有的请求，分配访问权限（普通用户、版主、管理员）")])])]),v._v(" "),_("li",[v._v("认证方案\n"),_("ul",[_("li",[v._v("绕过Security认证流程，采用系统原来的认证方案")])])]),v._v(" "),_("li",[v._v("CSRF配置\n"),_("ul",[_("li",[v._v("防止CSRF攻击的基本原理，以及表单、AJAX相关的配置")])])])]),v._v(" "),_("h4",{attrs:{id:"置顶、加精、删除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#置顶、加精、删除"}},[v._v("#")]),v._v(" 置顶、加精、删除")]),v._v(" "),_("ul",[_("li",[v._v("功能实现\n"),_("ul",[_("li",[v._v("点击置顶，修改帖子的类型")]),v._v(" "),_("li",[v._v("点击 “加精”、“删除”， 修改帖子的状态。")])])]),v._v(" "),_("li",[v._v("权限管理\n"),_("ul",[_("li",[v._v("版主可以执行“置顶”、“加精”操作")]),v._v(" "),_("li",[v._v("管理员可以执行“删除”操作")])])]),v._v(" "),_("li",[v._v("按钮显示\n"),_("ul",[_("li",[v._v("版主可以看到“置顶”、“加精”按钮")]),v._v(" "),_("li",[v._v("管理员可以看到“删除”按钮")])])])]),v._v(" "),_("h4",{attrs:{id:"网站数据统计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网站数据统计"}},[v._v("#")]),v._v(" 网站数据统计")]),v._v(" "),_("ul",[_("li",[v._v("UV (Unique Visitor)\n"),_("ul",[_("li",[v._v("独立访客，需通过用户IP排重统计数据")]),v._v(" "),_("li",[v._v("每次访问都要进行统计")]),v._v(" "),_("li",[v._v("HyperLogLog，性能好，且存储空间小")])])]),v._v(" "),_("li",[v._v("DAU (Daily Active User)\n"),_("ul",[_("li",[v._v("日活跃用户，需通过用户ID排重统计数据")]),v._v(" "),_("li",[v._v("访问过一次，则认为其活跃")]),v._v(" "),_("li",[v._v("Bitmap，性能好、且可以统计精确的结果")])])])]),v._v(" "),_("h3",{attrs:{id:"任务执行和调度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#任务执行和调度"}},[v._v("#")]),v._v(" 任务执行和调度")]),v._v(" "),_("p",[v._v("在浏览器发给服务器的请求中间会经过 Nginx ，来实现负载均衡")]),v._v(" "),_("ul",[_("li",[v._v("JDK 线程池("),_("strong",[v._v("面试重点")]),v._v(")\n"),_("ul",[_("li",[v._v("普通线程池：ExecutorService")]),v._v(" "),_("li",[v._v("可执行定时任务的线程池：ScheduledExecutorService")])])]),v._v(" "),_("li",[v._v("Spring 线程池("),_("strong",[v._v("面试重点")]),v._v(")（不在分布式环境下的话推荐使用spring提供的）\n"),_("ul",[_("li",[v._v("Spring普通线程池：ThreadPoolTaskExecutor,有简化使用方式：注解方式：@Async")]),v._v(" "),_("li",[v._v("Spring可执行定时任务的线程池：ThreadPoolTaskScheduler（没有解决分布式情况下冲突的问题）,也有简化使用方式：注解：@Scheduled")])])]),v._v(" "),_("li",[v._v("分布式定时任务\n"),_("ul",[_("li",[v._v("Spring Quartz：需要在数据库里存入一些信息（一些表）\n"),_("ul",[_("li",[v._v("核心组件：Scheduler接口（需要定义任务）、Job接口（定义一个任务）、JobDetail接口（用来配置Job）、Trigger接口（用来配置Job什么时候运行，以什么样频率执行任务）")]),v._v(" "),_("li",[v._v("配置完后程序启动时Quartz会读取配置信息，存到数据库里(需配置properties文件，数据库里的表："),_("code",[v._v("qrtz_job_details、qrtz_simple_trigger、qrtz_triggers、qrtz_scheduler_state、qrtz_locks")]),v._v(")，后面Quartz就直接读取数据库来执行任务，不需要重新配置")])])])])])]),v._v(" "),_("h3",{attrs:{id:"热帖排行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#热帖排行"}},[v._v("#")]),v._v(" 热帖排行")]),v._v(" "),_("ul",[_("li",[v._v("计算公式：log(精华分 + 评论数*10 + 点赞数*2 + 收藏数*2) + （发布时间 - 牛客纪元）")]),v._v(" "),_("li",[v._v("因为没有收藏功能，所以可以忽略收藏数这个因素")]),v._v(" "),_("li",[v._v("采用定时任务来实现，只处理分数变化的帖子，将分数变化的帖子存储到集合里，不用处理所有帖子")]),v._v(" "),_("li",[v._v("用Redis作为缓存存储分数变化的帖子，将帖子存储到set里")])]),v._v(" "),_("h3",{attrs:{id:"生成长图"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生成长图"}},[v._v("#")]),v._v(" 生成长图")]),v._v(" "),_("ul",[_("li",[v._v("wkhtmltopdf：命令行的方式\n"),_("ul",[_("li",[v._v("wkhtmltopdf url file：模板内容生成pdf")]),v._v(" "),_("li",[v._v("wkhtmltoimage url file：网页生成本地图片")])])]),v._v(" "),_("li",[v._v("java\n"),_("ul",[_("li",[v._v("Runtime.getRuntime().exec()")])])])]),v._v(" "),_("h3",{attrs:{id:"将文件上传至云服务器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#将文件上传至云服务器"}},[v._v("#")]),v._v(" 将文件上传至云服务器")]),v._v(" "),_("ul",[_("li",[v._v("客户端上传\n"),_("ul",[_("li",[v._v("客户端将数据提交给云服务器，并等待其响应")]),v._v(" "),_("li",[v._v("用户上传头像时，将表单数据提交给云服务器")])])]),v._v(" "),_("li",[v._v("服务器直传\n"),_("ul",[_("li",[v._v("应用服务器将数据直接提交给云服务器，并等待其响应")]),v._v(" "),_("li",[v._v("分享时，服务端将自动生成的图片，直接提交给云服务器")])])])]),v._v(" "),_("h3",{attrs:{id:"优化网站的性能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化网站的性能"}},[v._v("#")]),v._v(" 优化网站的性能")]),v._v(" "),_("ul",[_("li",[v._v("本地缓存\n"),_("ul",[_("li",[v._v("将数据缓存在应用服务器上，性能最好")]),v._v(" "),_("li",[v._v("常用缓存工具：Ehcache、Guava、Caffeine等")])])]),v._v(" "),_("li",[v._v("分布式缓存\n"),_("ul",[_("li",[v._v("将数据缓存在 NoSQL 数据库上，跨服务器")]),v._v(" "),_("li",[v._v("常用缓存工具：MemCache、Redis等")])])]),v._v(" "),_("li",[v._v("多级缓存\n"),_("ul",[_("li",[v._v("> 一级缓存（本地缓存） > 二级缓存（分布式缓存） > DB")]),v._v(" "),_("li",[v._v("避免缓存雪崩（缓存失效，大量请求直达DB），提高系统的可用性")])])]),v._v(" "),_("li",[v._v("Caffeine\n"),_("ul",[_("li",[v._v("核心接口：Cache, LoadingCache, AsyncLoadingCache")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);