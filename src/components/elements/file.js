import React, { Fragment } from 'react'

export default function file(props) {
  console.log('FILE PROPS: ',props.value)
  
  let fileNode;

  return (
    <Fragment key={props.element_index}>
        {props.label}: <input type="file" style={{display: 'none'}} id={props.name} name={props.name} required={props.required}  onChange={props.fileHandler.bind(this, props.page_index, props.element_index)}/>
        {/* <button name={"button_"+props.name} onClick={() => document.getElementsByName(props.name)[0].trigger('click')}>{props.value.name || "No File Chosen"}</button> */}
        <label htmlFor={props.name}>{props.value.name || "No File(s) Chosen"}</label>
    </Fragment>
  )
}
