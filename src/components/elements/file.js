import React from 'react'

export default function file(props) {
  console.log('FILE PROPS: ',props)
  return (
    <div key={props.element_index}>
      {props.label}: <input type="file" name={props.name} required={props.required} value={props.value} onChange={props.fileHandler.bind(this, props.page_index, props.element_index)}/>
    </div>
  )
}
