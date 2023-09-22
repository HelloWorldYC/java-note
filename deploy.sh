#!/usr/bin/env sh

var1=`date '+%Y-%m-%d %H:%M:%S'`

# 确保脚本抛出遇到的错误
set -e

echo '开始执行命令'

#发布到github上
echo '执行命令：git add -A'
git add -A
echo "git commit -m "
git commit -m "update notes on $var1"
echo '执行命令：git push -f git@github.com:HelloWorldYC/Note.git master'
git push -f git@github.com:HelloWorldYC/Note.git master

# 进入生成的文件夹
echo "执行命令：cd ./docs/.vuepress/dist\n"
cd ./docs/.vuepress/dist


# 保存所有的修改
echo "执行命令：git add -A"
git add -A

# 把修改的文件提交
echo "执行命令：git commit -m "
git commit -m "deploy notes on $var1"
echo "执行命令：git push -f https://github.com/HelloWorldYC/Note.git master:gh-pages"
git push -f https://github.com/HelloWorldYC/Note.git master:gh-pages

echo "回到刚才工作目录"
cd -