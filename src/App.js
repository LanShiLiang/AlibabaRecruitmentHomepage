import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Link
} from 'react-router-dom'
import Scroll from './Scroll'

//list列表数据是本要通过请求返回的JSON数据的解析结果
const list = [{
  id:1,
  position: '1蚂蚁集团-城市经理（商业线）-华东区-支付宝',
  city: '杭州',
  time:'27分钟前',
}, {
  id:2,
  position: '2钉钉(DingTalk)-（高级）前端技术专家-用户产品技术',
  city: '杭州，北京',
  time:'27分钟前',
  }, {
  id:3,
  position: '3阿里云智能-仿真算法专家-北京/杭州',
  city: '杭州，北京',
  time:'27分钟前',
}, {
  id:4,
  position: '4钉钉(DingTalk)-（高级）前端技术专家-用户产品技术',
  city: '杭州，北京',
  time:'27分钟前',
  }, {
  id:5,
  position: '5阿里云智能-仿真算法专家-北京/杭州',
  city: '杭州，北京',
  time:'27分钟前',
}, {
  id:6,
  position: '6钉钉(DingTalk)-（高级）前端技术专家-用户产品技术',
  city: '杭州，北京',
  time:'27分钟前',
  }, {
  id:7,
  position: '7阿里云智能-仿真算法专家-北京/杭州',
  city: '杭州，北京',
  time:'27分钟前',
}, {
  id: 8,
  position: '8阿里云智能-仿真算法专家-北京/杭州',
  city: '杭州，北京',
  time: '27分钟前',
}, {
  id: 9,
  position: '9阿里云智能-仿真算法专家-北京/杭州',
  city: '杭州，北京',
  time: '27分钟前',
}, {
  id: 10,
  position: '10阿里云智能-仿真算法专家-北京/杭州',
  city: '杭州，北京',
  time: '27分钟前',
},{
  id: 11,
  position: '11阿里云智能-仿真算法专家-北京/杭州',
  city: '杭州，北京',
  time: '27分钟前',
}]
//popularSearches热门搜索数据本要通过请求返回的JSON数据的解析结果
const popularSearches = [{
    url: '',
    job: 'JAVA',
    },{
    url: '',
    job: 'IOS',
    },{
    url: '',
    job: '数据',
    },{
    url: '',
    job: '安全',
    },{
    url: '',
    job: '搜索',
    },{
    url: '',
    job: '算法',
    },{
    url: '',
    job: '运营',
    },{
    url: '',
    job: '视觉',
    },{
    url: '',
    job: '交互',
    },{
    url: '',
    job: '前端',
    },
]
//以下利用router做前端路由跳转，因为没有后端配合，这里仅做参考
function App() {
  return (
    <Router>
      <header>
        <div className='header-width'>
        <div style={{display:'flex'}}>
          <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="logo"/>
          <i style={{color:'white',fontStyle:'normal',fontSize:'20px',verticalAlign:'center',margin: '0 10px',opacity: '0.8'}}>|</i>
          <span style={{alignItems:'center'}}>社招官网</span>
        </div>
        <div id="header-links">
          <Link href="">首&nbsp;&nbsp;页</Link>
          <Link href="">社会招聘</Link>
          <Link href="">校园招聘</Link>
          <Link href="">了解阿里</Link>
          <Link href="">个人中心</Link>
        </div>
        <div id="header-links-right">
          <span>欢迎来到阿里巴巴集团招聘！</span>
          <Link>登录</Link>
          {" | "}
          <Link href="">注册</Link>
        </div>
        </div>
      </header>
      <main>
        <span></span>
        <div id="slogan">
          <div>
            If not now, when?
          </div>
          <div>
            If not me, who?
          </div>
          <div>
            此时此刻，非我莫属!
          </div>
        </div>
        <div style={{width:'490px'}}>
          <form action="">
            <div id="cover-form"></div>
            <input type="text" name="" placeholder="请输入职位关键词"/>
            <button>搜索</button>
          </form>
          <div>
            <span>热门搜索：</span>
            {
              popularSearches.map(item =>
                <Link href={item.url}>
                 {item.job}
              </Link>
              )
            }
          </div>
        </div>
      </main>
      <footer>
        <Scroll list={list} title="最新职位" height="250px" scrollTempo="30" path=''>
          {item => {
            return <div>
                <Link href="">{item.position}</Link>
                <div style={{position: 'absolute', left: '55%'}}>{item.city}</div>
                <div>{item.time}</div>
              </div>
          }}
        </Scroll>
        <div>
        <Link>
          <div>
            <img src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt="阿里云" />
          </div>
        </Link>
        <Link>
          <div>
            <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt="企业智能"/>
          </div>
        </Link>

        </div>
      </footer>
    </Router>
  )
}

export default App;
