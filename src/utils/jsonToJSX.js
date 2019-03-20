import React, { Component } from 'react'
import Elements from '../components/elements'
import { connect } from 'react-redux'
import pageActions from '../actions/pageActions'


class jsonToJSX extends Component {

    handleInput = (page_index, element_index, e) => {
        this.props.pageActions({
            page_index,
            element_index,
            element: e.target.type,
            change: e.target.value
        })
    }

    handleRadio = (page_index, element_index, radio_index, e) => {
        console.log("input RADIO: " + e.target.checked)
        this.props.pageActions({
            page_index,
            element_index,
            radio_index,
            element: e.target.type,
            change: e.target.checked
        })
    }

    handleFile = (page_index, element_index, e) => {
        console.log("HANDLE FILE: ")
        this.props.pageActions({
            page_index,
            element_index,
            element: e.target.type,
            value: e.target.value,
            files: e.target.files
        })
    }

    componentWillReceiveProps(props) {
        console.log("Props 2", props);
    }

    elementToJSX = (item, index) => {

        console.log('page_index: ', this.props.data.page_index)

        item['element_index'] = index;
        item['page_index'] = this.props.data.page_index;

        switch (item.element) {

            case "paragraph":
                return (Elements.paragraph(item));

            case "image":
                return (Elements.image(item));

            case "input":
                item['inputHandler'] = this.handleInput;
                return (Elements.input(item));

            case "checkbox":
                return (Elements.checkbox(item));

            case "radio":
                item['radioHandler'] = this.handleRadio;
                return (Elements.radio(item));

            case "file":
                item['fileHandler'] = this.handleFile;
                return (Elements.file(item));

            case "button":
                return (Elements.button(item));
        }
    }

    render() {
        console.log("JSX: ", this.props.data)
        return (
            this.props.data ? (
                <div>
                    {
                        this.props.data.fields.map((item, index) => {
                            return this.elementToJSX(item, index)
                        })
                    }
                </div>
            ) : ""
        )
    }
}

const mapStateToProps = (state, props) => {
    console.log("State ", state);
    console.log("props ", props);
    return (
        state.form_data.form.form ?
            { data: state.form_data.form.form.pages[props.data.page_index] } :
            { data: { fields: [] } }
    )
}

export default connect(mapStateToProps, { pageActions })(jsonToJSX)