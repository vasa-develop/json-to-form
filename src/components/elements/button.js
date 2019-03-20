import React from 'react'

export default function button(props) {
  return (
    <div key={props.element_index}>
        <button>{props.label}</button>
    </div>
  )
}
