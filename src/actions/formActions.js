import { FETCH_FORM, CHANGE_ELEMENT, CHANGE_PAGE } from './types';

export default () => dispatch => {
    fetch('http://localhost:4000/form/123')
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_FORM,
        payload: data
    }))
}