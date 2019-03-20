import { FETCH_FORM, CHANGE_ELEMENT, CHANGE_PAGE } from './types';

export default () => (dispatch) => {
    //do some action

    console.log("PAYLOAD: ",dispatch)

    dispatch({
        type: CHANGE_ELEMENT,
        payload: {
            page_index:1,
            element_index:0,
            change: "vasa"
        }
    })
}