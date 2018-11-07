import { ADD_TODO } from '../actions';
const initState = [];

function todos(state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        default:
            return state;
    }

}

export default todos;