let idNext = 0;

export const ADD_TODO = 'ADD_TODO';
export const SET_FILTER = 'SET_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: idNext++,
        text
    }
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    }
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export const FiltersAction = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
}