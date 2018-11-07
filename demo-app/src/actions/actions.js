import fetch from 'cross-fetch';
export const REQ_DATA = 'REQ_DATA';
export const RES_DATA = 'RES_DATA';
export const FIND_DATA = 'FIND_DATA';

function getData(state) {
  const { loadDataReducer } = state;
  const { data } = loadDataReducer;
  return data;
}

function filterData(data, input) {
  return data.filter(item => item.title.toLowerCase().search(input.toLowerCase()) !== -1);
}

function reqData(input) {
    return {
        type: REQ_DATA,
        input
    }
}

function resData(input, json) {
    return {
        type: RES_DATA,
        input,
        data: filterData(json.data.children.map(child => child.data), input),
        lastUpdate: Date.now() 
    }
}

function loadDataServer(input) {
    return (dispatch) => {
        dispatch(reqData(input));
        return fetch(`https://www.reddit.com/r/reactjs.json`)
            .then(res => res.json())
            .then(json => dispatch(resData(input, json)));
    }
}

function findDataAction(state, input) {
    const data = getData(state);
    return {
        type: FIND_DATA,
        input,
        dataFind: filterData(data, input)
    }
}

export function findData(input) {
    return (dispatch, getState) => {
        dispatch(reqData(input));
        return dispatch(findDataAction(getState(), input));
    }
}

export function loadDataHandle(input) {
    return (dispatch, getState) => {
        return dispatch(loadDataServer(input));
    }
} 