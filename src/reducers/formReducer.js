import { FETCH_FORM, CHANGE_ELEMENT, CHANGE_PAGE } from "../actions/types";

var initial_state = {
    form: {}
};

export default (state = initial_state, action) => {
    switch(action.type){
        
        case FETCH_FORM:
            
            let data = action.payload;
            data.form.metadata['cur_page'] = 1

            return {
                ...state,
                form: data
            };
        
        case CHANGE_ELEMENT:
            
            state['form']['form']['pages'][action.payload.page_index]['fields'][action.payload.element_index]["value"] = action.payload.change
            console.log("reducer: ",state)
            return {
                ...state,
                form: state['form'] 
            };

        case CHANGE_PAGE:
            return state;

        default:
            return state;
    }
}