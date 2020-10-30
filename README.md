# 无限滚动列表

本项目渲染效果：gitlab地址 https://lanshiliang.github.io/AlibabaRecruitmentHomepage

本项目实现的可复用滚动列表组件源码地址：  **[./src/Scroll.js](https://github.com/LanShiLiang/AlibabaRecruitmentHomepage/blob/master/src/Scroll.js)**  

#### Scroll 组件传参指引

~~~js
* list:'需要渲染的子列表'
* title:'左上角列表标题'
* height:'滚动部分的高度'
* scrollTempo:'列表滚动速度'
* path:' ‘更多’ 标签跳转的地址'
* props.children:'自定义渲染函数'
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



