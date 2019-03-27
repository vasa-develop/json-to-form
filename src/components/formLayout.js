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

        const { match, data } = this.props

        console.log("Form Render: ", this.props)
        var form = data.form || { metadata: { pages: 0, cur_page: 0 }, pages: [] }
        let prev = match.params.index - 1 > 0 ? match.params.index - 1 : null;
        let next = (match.params.index <= form.metadata.pages) ? parseInt(match.params.index) + 1 : null;

        return (
            <div>
                <ul>
                    {form.pages.map((page, index) => {
                        var cur_index = index + 1;
                        return (
                            <li key={index}>
                                <NavLink to={"/form/" + match.params.id + "/page/" + cur_index}>
                                    Page {cur_index}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <Page
                form_data={form.pages}
                page_data={form.pages[match.params.index - 1]} 
                page_index={match.params.index - 1}
                prev={prev ? "/form/"+match.params.id+"/page/"+prev : null}
                next={next ? "/form/"+match.params.id+"/page/"+next : null} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("Formlayout", state);
    return ({

        data: state.form_data.form
    })
}

export default connect(mapStateToProps, { formActions })(FormLayout)
