import React,{useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Jobs(props) {
  let render = props.children
  let scrollContainer = useRef()
  let timeId
  useEffect(() => {
    scroll(props.scrollTempo)
    console.log(scrollContainer.current.clientHeight)
  }, [])
  function scroll(scrollTempo) {
    timeId= setInterval(() => {
      scrollContainer.current.scrollTop++
      if (scrollContainer.current.scrollHeight / 2 - scrollContainer.current.scrollTop <= 0) {
        scrollContainer.current.scrollTop = 0
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
        <div>{props.title}</div>
        <Link to={props.path}>更多</Link>
      </div>
      <div ref={scrollContainer} style={{ height:props.height, overflow: 'hidden' }} onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut}>
        <ul>
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
        </ul>
      </div>
    </div>
  )
}
