import React from 'react'

export default function image(props) {
  return (
    <div key={props.element_index}>
        <img src={props.src} alt={props.alt} height={props.height} width={props.width}/>
    </div>
  )
}
