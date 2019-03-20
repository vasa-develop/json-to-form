import React from 'react'

export default function input(props) {
  return (
    <div key={props.element_index}>
        {props.label}: <input 
        type={props.type}
        placeholder={props.placeholder}
        name={props.name} 
        required={props.required}
        value={props.value}
        onChange={props.inputHandler.bind(this, props.page_index, props.element_index)} />
    </div>
  )
}
