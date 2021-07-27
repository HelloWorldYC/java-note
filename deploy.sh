#!/usr/bin/env sh

var1 = `date`

# 确保脚本抛出遇到的错误
set -e

echo '开始执行命令'
# 生成静态文件
echo '执行命令：vuepress build docs'
npm run docs:build

#发布到github上
echo '执行命令：git add -A'
git add -A
echo "git commit -m "
git commit -m 'update notes on $var1'
echo '执行命令：git push -f git@github.com:HelloWorldYC/HelloWorldYC.github.io.git master'
git push -f git@github.com:HelloWorldYC/HelloWorldYC.github.io.git master

# 进入生成的文件夹
echo "执行命令：cd ./docs/.vuepress/dist\n"
cd ./docs/.vuepress/dist

# 初始化一个仓库，仅仅是做了一个初始化的操作，项目里的文件还没有被跟踪
echo "执行命令：git init\n"
git init

# 保存所有的修改
echo "执行命令：git add -A"
git add -A

# 把修改的文件提交
echo "执行命令：git commit -m "
git commit -m 'deploy notes on $var1'
echo "执行命令：git push -f https://github.com/HelloWorldYC/HelloWorldYC.github.io.git master:gh-pages"
git push -f https://github.com/HelloWorldYC/HelloWorldYC.github.io.git master:gh-pages

echo "回到刚才工作目录"
cd -