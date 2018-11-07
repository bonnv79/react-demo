import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

function AddTodo({ dispatch }) {
    let input;
    return (
        <div>
            <form onSubmit={ (e) => {
                e.preventDefault();
                if(!input.value.trim()) {
                    return;
                }
                dispatch(addTodo(input.value));
            }}>
                <input ref={ (element) => input = element } />
                <button type='submit'>
                    Add Todo
                </button>
            </form>
        </div>
    )
}

// class AddTodo extends React.Component {
//     render() {
//         return (
//             <div>
//                 preventDefault
//             </div>
//         )
//     }
// }

export default connect()(AddTodo);