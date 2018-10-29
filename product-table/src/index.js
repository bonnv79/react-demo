import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Provider } from 'react-redux';  
import { createStore } from 'redux';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": 
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
        default: 
            return state;
    }
}

const initialState = 0;

const store = createStore(reducer, initialState);

store.subscribe(() => {
    console.log("State has changed: " + store.getState());
    document.getElementById('valueID').innerHTML = store.getState();
})

const incrementCount = (count) => {
    return {
        type: "INCREMENT",
        payload: count
    }
}

const decrementCount = (count) => {
    return {
        type: "DECREMENT",
        payload: count
    }
}

// store.dispatch(incrementCount(4));
// store.dispatch(decrementCount(2));

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        store.dispatch(incrementCount(1));
    }

    decrement() {
        store.dispatch(decrementCount(1));
    }

    render() {
      return (
        <div>
            <button onClick={this.increment}>+</button> <label id="valueID">0</label> <button onClick={this.decrement}>-</button>
        </div>
      );
    }
  }

// ========================================

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
  