import React, { Component } from 'react'
import JsonToJSX from '../utils/jsonToJSX'

class Page extends Component {

    render() {
        let data = this.props.data;
        if(data){
            data['page_index'] = this.props.page_index;
        }
            return (
            <div>
                <JsonToJSX data={data}/>
            </div>
            )
        }
}

export default  Page;