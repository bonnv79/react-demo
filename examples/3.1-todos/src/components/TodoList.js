import React from 'react';
import Todo from './Todo';

function TodoList({todos, toggleTodo}) {
    return (
        <ul>
            {
                todos.map(item => {
                    <Todo
                        key={item.id}
                        {...todo}
                        onClick={() => toggleTodo(item.id)} />
                })
            }
        </ul>
    )
}

export default TodoList;