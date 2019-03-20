import React, { Component } from 'react'
import { connect } from 'react-redux'
import Page from './page';
import formActions from '../actions/formActions'
import { NavLink } from 'react-router-dom'


class FormLayout extends Component {

    componentWillMount() {
        this.props.formActions()
    }
    

    render() {
        console.log("Form Render: ",this.props)
        var form = this.props.data.form || {metadata: {pages: 0, cur_page: 0}, pages: []}

        return (
        <div>
            <ul>
                {form.pages.map((page, index)=>{ 
                    var cur_index = index+1;
                    return(
                    <li key={index}>
                        <NavLink to={"/form/"+this.props.match.params.id+"/page/"+cur_index}>
                        Page {cur_index}
                        </NavLink>
                    </li>
                    )
                })}
            </ul>
            <Page data={form.pages[this.props.match.params.index-1]} page_index={this.props.match.params.index-1}/> 
        </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.form_data.form
})

export default connect(mapStateToProps, { formActions })(FormLayout)
