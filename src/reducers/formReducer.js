import { FETCH_FORM, CHANGE_ELEMENT, CHANGE_PAGE } from "../actions/types";
import immutable from 'object-path-immutable'

var initial_state = {
    form: {}
};

export default (state = initial_state, action) => {
    switch (action.type) {

        case FETCH_FORM:

            let data = action.payload;
            data.form.metadata['cur_page'] = 1

            return {
                ...state,
                form: data
            };

        case CHANGE_ELEMENT:

            let newState;

            switch(action.payload.element){
                case "radio":
                    newState = immutable.set(state, 'form.form.pages.'+action.payload.page_index+'.fields.'+action.payload.element_index+'.group.'+action.payload.radio_index+'.checked', action.payload.change)
                    break;
                
                case "file":
                    let files = state.form.form['files'] || [];
                    for(let i=0;i<action.payload.files.length;i++){
                        files.push(action.payload.files[i])    
                    }
                    newState = immutable.set(state, 'form.form.pages.'+action.payload.page_index+'.fields.'+action.payload.element_index+'.value', action.payload.value)
                    newState = immutable.set(newState, 'form.form.files', files)
                    console.log("XXXX: ",newState)
                    break;

                default:
                    newState = immutable.set(state, 'form.form.pages.'+action.payload.page_index+'.fields.'+action.payload.element_index+'.value', action.payload.change);
                    break;
            }

            return {
                ...newState
            };

        case CHANGE_PAGE:
            return state;

        default:
            return state;
    }
}