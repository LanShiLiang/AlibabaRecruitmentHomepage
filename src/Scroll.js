import React,{useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { List } from "react-virtualized";

export default function Jobs(props) {
  let render = props.children
  let ulEl = useRef()
  let scrollContainer = useRef()
  let timeId
  console.log('render'+render)
  useEffect(() => {
    scroll(props.scrollTempo)
  }, [])

  function scroll(scrollTempo) {
    timeId= setInterval(() => {
      scrollContainer.current.scrollTop++
      if (scrollContainer.current.scrollTop >= ulEl.current.scrollHeight/2) {
        scrollContainer.current.scrollTop= 0
      }
    }, scrollTempo)
  }

  function handleMouseOver(e) {
    clearInterval(timeId)
  }

  function handleMouseOut(e) {
    scroll(props.scrollTempo)
  }

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
            props.list.map(it =>
              <li key={it.id}>
                {render(it)}
              </li>
            )
          }
          {
            props.list.map(it =>
              <li key={it.id}>
                {render(it)}
              </li>
            )
          }
          <List></List>
        </ul>
      </div>
    </div>
  )
}
