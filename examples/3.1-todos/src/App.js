import React, { Component } from 'react';
import './App.css';
import AddTodo from './containers/AddTodo';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <Footer />
      </div>
    );
  }
}

export default App;
