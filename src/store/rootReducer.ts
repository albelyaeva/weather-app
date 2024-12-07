import {CHANGE_LOCATION} from './types';

const initState = {
    location: ''
}


function rootReducer(state = initState, action: any) {
    if (action.type === CHANGE_LOCATION) {
        return {...state, location: action.payload};
    }
    return state
}

export default rootReducer;