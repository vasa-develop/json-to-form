import { FETCH_FORM, CHANGE_ELEMENT, CHANGE_PAGE } from './types';

export default (payload) => (dispatch) => {
    //do some action

    console.log("PAYLOAD: ",payload)

    dispatch({
        type: CHANGE_ELEMENT,
        payload: payload
    })
}