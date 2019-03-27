import React, { Component, Fragment } from 'react'
import JsonToJSX from '../utils/jsonToJSX'
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import * as actions from '../actions/actions'
import store from '../store'

class Page extends Component {

    handleSubmit = (formData) => {
        console.log("data: ",formData)
        store.dispatch(actions.submitForm(formData))
        
    }
   

    render() {
        
        const {prev, next, form_data, page_data, page_index} = this.props;
        
        console.log("---------------------------")
        console.log(form_data)
        console.log("---------------------------")
        
        if(page_data){
            page_data['page_index'] = page_index;
        }
            return (
            <div>
                <center>
                    <JsonToJSX data={page_data}/>
                    <br /><br /><br />
                    {
                        prev ? <NavLink to={prev} >Previous</NavLink> : null
                    }
                    {" "}
                    {
                        next ? 
                        <NavLink to={next} >Next</NavLink> : 
                        <Fragment>
                            <br /><br /><br />
                            <button onClick={this.handleSubmit.bind(this,JSON.stringify(form_data))} >Submit Form</button>
                        </Fragment>
                    }
                    
                </center>
            </div>
            )
        }
}

export default  Page;