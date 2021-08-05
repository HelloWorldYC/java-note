module.exports = {
    title: 'Hello World',
    description: 'Just playing around',
    themeConfig: {
        navbar: true,          // 禁用导航栏
        sidebarDepth: 2,            // 侧边栏显示层数
        sidebar: [
          {
            title:'matlab',
            children:[
              '/matlab/常用函数.md',
              '/matlab/语法.md',
              '/matlab/matlab安装Matconvnet.md'
            ]
          },
          {
            title:'python',
            children:[
              '/python/pycharm出现的问题及解决方法.md',
              '/python/python函数.md',
              '/python/python语法规则'
            ]
          },
          {
            title:'无人机项目',
            children:[
              '/无人机项目/PX4开发环境搭建.md',
              '/无人机项目/对P110B的理解.md',
              '/无人机项目/ROS学习心得.md',
            ]
          },
          {
            title:'深度学习',
            children:[
              '深度学习/卷积神经网络.md',
              '深度学习/神经网络和深度学习.md'
            ]
          },
          {
            title:'数字图像处理',
            children:[
              '数字图像处理/基础概述.md'
            ]
          }
        ]
      }
  }