import React,{useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { List } from "react-virtualized";

export default function Jobs(props) {
  let ulEl = useRef()
  let scrollContainer = useRef()
  let timeId
    useEffect(() => {
      scroll(props.speed)
    }, [])
  return (
    <div>
      <div style={
            {display: 'flex',
            justifyContent:'space-between',
            alignItems:'center',
            height: '50px',
            padding: '0 10px',
            fontSize: 'small',
            fontWeight:'bold',
            color: 'rgb(121,136,155)'
            }}>
        <div>{props.user}</div>
        <Link to={props.path}>更多</Link>
      </div>
      <div ref={scrollContainer} style={{ height:props.height, overflow: 'hidden' }} onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut}>
        <ul ref={ulEl}>
          {
            props.List.map(it =>
              <li key={it.id}>
                <Link>{it.position}</Link>
                <div style={{position: 'absolute',left: '55%'}}>{it.city}</div>
                <div>{it.time}</div>
              </li>)
          }
          {
            props.List.map(it =>
              <li key={it.id}>
                <Link>{it.position}</Link>
                <div style={{position: 'absolute',left: '55%'}}>{it.city}</div>
                <div>{it.time}</div>
              </li>)
          }
          <List></List>
        </ul>
      </div>
    </div>
  )

  function scroll(speed) {
    timeId= setInterval(() => {
      scrollContainer.current.scrollTop++
      if (scrollContainer.current.scrollTop >= ulEl.current.scrollHeight/2) {
        scrollContainer.current.scrollTop= 0
      }
    }, speed)
  }

  function handleMouseOver(e) {
    clearInterval(timeId)
  }

  function handleMouseOut(e) {
    scroll(props.speed)
  }
}
