import React from 'react'

export default function file(props) {
  return (
    <div key={props.element_index}>
      <input type="file" name={props.name} required={props.required}>{props.label}</input>
    </div>
  )
}
