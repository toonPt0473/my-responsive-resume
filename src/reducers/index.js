import { combineReducers } from 'redux';
import { content } from '../FIELD';


const profile = (state = {} , action) => {
    switch (action.type) {
        case "CHANGE_LANGUAGE_THAI" : 
            return content.thai
        case "CHANGE_LANGUAGE_ENG" : 
            return content.eng
        default:
            return state;
    }
}



export default combineReducers({
    profile
})


