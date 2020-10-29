# 仿阿里巴巴招聘首页

阿里巴巴招聘首页官方地址 https://job.alibaba.com/zhaopin/index.html
无限滚动组件渲染效果：gitlab地址 https://lanshiliang.github.io/AlibabaRecruitmentHomepage

**可复用滚动列表组件的源码地址：  ./src/Scroll.js**  

#### Scroll 组件传参指引

~~~js
* list:'需要渲染的子列表'

* title:'左上角列表标题'

* height:'列表组件高度'

* scrollTempo:'列表滚动速度'

* path:' ‘更多’ 标签传入的路径'

* props.children:'自定义渲染函数'
~~~

本组件产生需求时未明确数据量级， 采用DOM操作scrollTop无缝衔接轮流播放实现效果


