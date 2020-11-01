# 无限滚动列表

本项目渲染效果：gitlab地址 https://lanshiliang.github.io/AlibabaRecruitmentHomepage

本项目实现的可复用滚动列表组件源码地址：**[./src/Scroll.js(点击跳转)](https://github.com/LanShiLiang/AlibabaRecruitmentHomepage/blob/master/src/Scroll.js)**

#### Scroll 组件传参指引

~~~js
* list:Array<object>'需要渲染的子列表'
list格式示例：[{id:1,position: '1蚂蚁集团-城市经理',city: '杭州',time:'27分钟前'}]

* title:string	       '左上角列表标题'
* height 				       '内框部分的高度'
* scrollTempo:number 	 '滚动速度 越小越快'
* path:url				     '‘更多’ 标签跳转的地址'
* props.children	 	   '自定义渲染函数'
使用示例
<Scroll list={yourlist} title="最新职位" height="250px" scrollTempo="30" path=''>
         {
    	//props.children
		item => {
            return <div>
                <Link href="">{item.position}</Link>
                <div style={{position: 'absolute', left: '55%'}}>{item.city}</div>
                <div>{item.time}</div>
              </div>
          }
	}
</Scroll>
~~~



