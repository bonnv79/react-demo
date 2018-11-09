import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

// function AddTodo({ dispatch }) {
//     let input;
//     const { todos } = this.props;
//     return (
//         <div>
//             <form onSubmit={ (e) => {
//                 e.preventDefault();
//                 if(!input.value.trim()) {
//                     return;
//                 }
//                 dispatch(addTodo(input.value));
//                 console.log(todos)
//             }}>
//                 <input ref={ (element) => input = element } />
    
//                 <button type='submit'>
//                     Add Todo
//                 </button>
//             </form>
//         </div>
//     )
// }

class AddTodo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { addTodo, todos } = this.props;
        let input = '';
        return (
            <div>
                <form onSubmit={ (e) => {
                    e.preventDefault();
                    if(!input.value.trim()) {
                        return;
                    }
                    addTodo(input.value);
                    input.value = '';
                }}>
                    <input ref={ (element) => input = element } />
                    <button type='submit'>
                        Add Todo
                    </button>
                </form>
                {todos.map(item => {
                    return (<div key={item.id}>{item.text}</div>);
                })}
            </div>
        )
    }
}

function parseStateToProp(state) {
    const { todos } = state;
    return {
        todos
    };
}

function parseActionReducerToProps(dispatch) {
    return {
        addTodo: (input) => dispatch(addTodo(input))
    };
}

export default connect(parseStateToProp, parseActionReducerToProps)(AddTodo); // TODO - Research about Higher Order Component - HOC