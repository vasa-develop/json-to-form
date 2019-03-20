import React from 'react'

export default function checkbox(props) {
  return (
    <div key={props.element_index}>
      <input name={props.name} type="checkbox" required={props.required}>{props.label}</input>
    </div>
  )
}
