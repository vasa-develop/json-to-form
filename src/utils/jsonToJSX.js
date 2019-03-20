import React, { Component } from 'react'
import Elements from '../components/elements'
import { connect } from 'react-redux'
import pageActions from '../actions/pageActions' 


class jsonToJSX extends Component {
    
    handleInput= (page_index, element_index, e) => {
        console.log("input: "+e.target.value )
        this.props.pageActions({
            page_index,
            element_index,
            change: e.target.value
        })
    }

    elementToJSX = (item, index, handleInput) => {
        item['element_index'] = index;
        item['inputHandler'] = handleInput;

        switch(item.element){
            
            case "paragraph":
                return (Elements.paragraph(item));
            
            case "image":
                return (Elements.image(item));
        
            case "input":
                return (Elements.input(item));

            case "checkbox":
                return (Elements.checkbox(item));

            case "radio":
                return(Elements.radio(item));
            
            case "file":
                return(Elements.file(item));

            case "button":
                return(Elements.button(item));
        }
    }
    
    render() {
        console.log("JSX: ",this.props.data)
        return (
        this.props.data ? (
        <div>
            {
                this.props.data.fields.map((item, index)=> {
                    return this.elementToJSX(item, index, this.handleInput)
                })
            }
        </div>
        ): ""
        )
    }
    mapStateToProps = state => (
        state.form_data.form.form ? 
         { data: state.form_data.form.form.pages[this.props.page_index] } : 
         { data: {fields: []} }
    )
}


export default connect(jsonToJSX.mapStateToProps, { pageActions })(jsonToJSX)