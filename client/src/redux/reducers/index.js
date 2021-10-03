import { combineReducers } from 'redux';

const allVideoReducer = (state = [], action) => {
    switch(action.type) {
        case 'ALL_VIDEO':
            return action.data; 
        default:
            return state;
    };
}

const rootReducer = combineReducers({
    allVideo: allVideoReducer,
})

export default rootReducer;