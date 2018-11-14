import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.onclick = this.onclick.bind(this);
    this.buy = this.buy.bind(this);
    this.input = React.createRef();
  }

  onclick(name) {
    alert(name);
  }

  buy() {
    if(this.input.current) {
      console.log(this.input.current.value)
    }
    
  }

  render() {
    const { name, children, items } = this.props;
    return (
      <div>
        <h1>Hello {name} - {children}</h1>
        {
          items.map(item => <div key={item.id}>
            <label>{item.name}</label>
            {item.fress && 
              <button onClick={() => this.onclick(item.name)}>View</button>
            }

            {
              !item.fress &&
              <div>
                <input ref={this.input} /> 
                <button onClick={this.buy}>Buy</button>
              </div>
            }
            <br/>
            <br/>
            <br/>
          </div>)
        }
      </div>
    )
  }
}

const App = () => {
  const items = [
    {
      id: 1,
      name: 'huy',
      fress: true
    },
    {
      id: 2,
      name: 'nam',
      fress: false
    },
    {
      id: 3,
      name: 'can',
      fress: true
    }
  ]
  return ( <div>
    <Hello items={items} name='Huy'>Content</Hello>
    {/* <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoRedo /> */}
  </div>
)}

export default App
