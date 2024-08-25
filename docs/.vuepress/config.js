module.exports = {
    base: `/java-note/`,
    title: 'java',
    description: 'java 学习笔记',
    head: [['link', {rel: 'icon', href: '/images/myfavicon.png'}]],
    plugins: {
      'vuepress-plugin-right-anchor': {
        showDepth: 2,  // 在右锚显示中将使用哪一级别的标题
        ignore: [
          // 不显示 right-anchor 的页面。
          ''
        ],
        expand: {  // 关于菜单的展开配置
          trigger: 'hover',  // 展开菜单的触发方式。 'hover' | 'click'
          clickModeDefaultOpen: true  // 点击模式下是否默认打开菜单
        },
        customClass: 'right-anchor',  // 自定义的 right-anchor 类名
      },
      '@maginapp/vuepress-plugin-katex': {
        delimiters: 'dollars'
      }
    },
    themeConfig: {
        navbar: true,          // 禁用导航栏
        sidebarDepth: 0,
        sidebar: [
          {
            title:'Java基础',
            children:[
              './Java/Java基础/编程常识.md',
              './Java/Java基础/Java基础语法补充.md',
              './Java/Java基础/字符串.md',
              './Java/Java基础/集合.md',
              './Java/Java基础/Java内存分配.md',
              './Java/Java基础/数据结构.md',
              './Java/Java基础/Java并发编程.md',
              './Java/Java基础/阻塞队列.md'
            ]
          },
          {
            title:'Java框架',
            children:[
              {
                title:'微服务',
                children:[
                  './Java/Java框架/微服务/微服务介绍.md',
                  './Java/Java框架/微服务/Docker入门.md',
                  './Java/Java框架/微服务/RabbitMQ入门.md',
                  './Java/Java框架/微服务/Elasticsearch入门.md'
                ]
              },
              './Java/Java框架/Kafka.md',
              './Java/Java框架/SpringSecurity.md'
            ]
          },
          {
            title:'校园信息交流平台项目',
            children:[
              './Java/校园信息交流平台项目/项目总体.md',
              './Java/校园信息交流平台项目/项目细节.md',
              './Java/校园信息交流平台项目/项目问题及解决.md',
              './Java/校园信息交流平台项目/项目常见面试题.md'
            ]
          },
          {
            title:'简易RPC框架项目',
            children:[
              './Java/简易RPC框架项目/RPC原理.md',
              './Java/简易RPC框架项目/Socket网络通信.md',
              './Java/简易RPC框架项目/Netty从入门到网络通信实战.md',
              './Java/简易RPC框架项目/项目网络传输模块细节.md',
              './Java/简易RPC框架项目/项目注册中心模块细节.md',
              './Java/简易RPC框架项目/Zookeeper.md',
              './Java/简易RPC框架项目/服务注册与消费细节.md',
              './Java/简易RPC框架项目/负载均衡细节.md',
              './Java/简易RPC框架项目/静态代理与动态代理.md',
              './Java/简易RPC框架项目/Docker.md',
              './Java/简易RPC框架项目/项目过程中遇到的bug.md',
              './Java/简易RPC框架项目/项目问题.md'
            ]
          },
          {
            title: '内功',
            children:[
              {
                title:'MySQL',
                children:[
                  './Java/内功/MySQL/基础架构.md',
                  './Java/内功/MySQL/易忘的重点.md'
                ]
              },
              {
                title:'Redis',
                children:[
                  './Java/内功/Redis/Redis总体架构.md',
                  './Java/内功/Redis/Redis一点点细节.md'
                ]
              },
              {
                title:'操作系统',
                children:[
                  './Java/内功/操作系统/导论.md'
                ]
              }
            ]
          },
          {
            title:'知识点自测速记',
            children:[
              './Java/知识点自测速记/知识点自测速记之Java基础.md',
              './Java/知识点自测速记/知识点自测速记之Java集合.md',
              './Java/知识点自测速记/知识点自测速记之Java并发编程.md',
              './Java/知识点自测速记/知识点自测速记之JVM.md',
              './Java/知识点自测速记/知识点自测速记之计算机网络.md',
              './Java/知识点自测速记/知识点自测速记之操作系统.md',
              './Java/知识点自测速记/知识点自测速记之数据库基础.md',
              './Java/知识点自测速记/知识点自测速记之MySQL.md',
              './Java/知识点自测速记/知识点自测速记之Redis.md',
              './Java/知识点自测速记/知识点自测速记之Spring.md',
              './Java/知识点自测速记/知识点自测速记之Mybatis.md'
            ]
          }
        ]
      }
  }