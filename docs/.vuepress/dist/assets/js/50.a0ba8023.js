(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{473:function(t,e,o){"use strict";o.r(e);var a=o(8),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ul",[e("li",[e("p",[t._v("项目报错："),e("code",[t._v("There is no getter for property named 'userId' in 'class java.lang.Integer'")]),t._v("，且前端html页面提取不到model中的属性，并且访问时出现一大堆错误"),e("br"),t._v("\n原因：一个是 "),e("code",[t._v("DiscussPostMapper.mapper")]),t._v(" 文件中 "),e("code",[t._v("selectDiscussPostRows")]),t._v(" 对应查询语句中有动态sql，该方法只有一个参数，并且在 "),e("code",[t._v("<if>")]),t._v(" 中使用，必须加别名 "),e("code",[t._v("@Param")]),t._v(" 。另一个是html中分页功能中引用模型参数 "),e("code",[t._v("$page.total")]),t._v("，html会自动转换为 "),e("code",[t._v("page.getTotal()")]),t._v("，所以在 "),e("code",[t._v("Page")]),t._v(" 中的方法名需要为 "),e("code",[t._v("getToal()")]),t._v("，由于原来的方法名为 "),e("code",[t._v("getTotalPage()")]),t._v("，所以对应不上。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("org.springframework.mail.MailAuthenticationException: Authentication failed; nested exception is javax.mail.AuthenticationFailedException: 535 Error: authentication failed, system busy")]),e("br"),t._v("\n原因：认证未通过，邮箱中没开启POP3/STMP服务，要开启，同时会返回给一个授权码，在配置文件中配置 "),e("code",[t._v("mail")]),t._v(" 的密码时用授权码代替密码")])]),t._v(" "),e("li",[e("p",[t._v("登录页面点击刷新验证码没有效果，页面加载不出来 "),e("code",[t._v("global.js")]),t._v(" 文件。"),e("br"),t._v("\n原因：编译完的项目js、css等文件家不是直接在static目录下，而是在static/html目录下，因此访问时找不到文件，为什么是这样子不清楚，但是可以设置静态资源映射手动将这些文件映射到对应目录下。")])]),t._v(" "),e("li",[e("p",[t._v("项目dao中的mapper和xml文件无法相互跳转"),e("br"),t._v("\n原因：在xml页面中的<!DOCTYPE>标签中 "),e("code",[t._v('"http://mybatis.org/dtd/mybatis-3-mapper.dtd"')]),t._v(" 写错了，写成了 "),e("code",[t._v("https://mybatis.org/dtd/mybatis-3-mapper.dtd")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);