let idNext = 0;

export const ADD_TODO = 'ADD_TODO';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: idNext++,
        text
    }
}