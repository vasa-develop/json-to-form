import React from 'react'

export default function radio(props) {
  return (
    <div key={props.element_index}>
        {
            props.group.map((item, index)=>{
                return(
                    <div key={index} >
                        {item.label}: <input type="radio" checked={item.checked} />
                    </div>
                )
            })
        }
    </div>
  )
}
