import { combineReducers } from 'redux';
import { REQ_DATA, RES_DATA, FIND_DATA } from './actions';;

const initState = {
    isLoading: false,
    data: [],
    dataFind: [],
    isFind: false,
    lastUpdate: '1/1/2000'
};

function loadDataReducer(state = initState, action) {
    switch (action.type) {
        case REQ_DATA:
            return {
                ...state,
                isLoading: true
            }
        case RES_DATA:
            return {
                ...state,
                isLoading: false,
                isFind: false,
                data: action.data,
                lastUpdate: action.lastUpdate
            }
        case FIND_DATA:
            return {
                ...state,
                isLoading: false,
                isFind: true,
                dataFind: action.dataFind
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    loadDataReducer
});

export default rootReducer;
