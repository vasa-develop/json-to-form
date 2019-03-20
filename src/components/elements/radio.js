import React from 'react'

export default function radio(props) {
    console.log('radio props: ',props)
    return (
        <div key={props.element_index}>
            {
                props.group.map((item, index)=>{
                    console.log("CHECKED: ",item.checked)
                    return(
                        <div key={index} >
                            {item.label}: <input name={"radio"} type="radio" checked={item.checked} onChange={props.radioHandler.bind(this, props.page_index, props.element_index, index)}/>
                        </div>
                    )
                })
            }
        </div>
    )
}