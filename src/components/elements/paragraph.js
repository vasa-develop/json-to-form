import React from 'react'

export default function paragraph(props) {
  return (
    <div key={props.element_index}>
        <p style={{fontSize: props.styles.size}}>{props.text}</p>
    </div>
  )
}
