import { REQ_DATA, RES_DATA, FIND_DATA } from './actions';

const initState = {
    isLoading: false,
    data: [],
    dataFind: [],
    lastUpdate: '1/1/2000'
};

function loadDataReducer(state = initState, action) {
    switch (action.type) {
        case REQ_DATA:
            return {
                ...state,
                isLoading: true
            };
        case RES_DATA:
            return {
                ...state,
                isLoading: false,
                data: action.data,
                dataFind: action.data,
                lastUpdate: action.lastUpdate
            };
        case FIND_DATA:
            return {
                ...state,
                isLoading: false,
                dataFind: action.dataFind
            };
        default:
            return state;
    }
}

export default loadDataReducer;
