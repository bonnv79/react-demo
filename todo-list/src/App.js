import React, { Component } from 'react';
import Table from './componets/table'
import './App.css';

export const levels = {
  small: {
    id: 1,
    name: 'Small'
  },
  medium: {
    id: 2,
    name: 'Medium'
  }, 
  high: {
    id: 3,
    name: 'High'
  }
}

const initTodoList = [
  {
    id: 1,
    name: 'To do task 1',
    level: levels.small.id
  },
  {
    id: 2,
    name: 'To do task 2',
    level: levels.medium.id
  },
  {
    id: 3,
    name: 'To do task 3',
    level: levels.high.id
  }
];

const sortByList = {
  nameAsc: {
    id: 1,
    name: 'Name ASC'
  },
  nameDesc: {
    id: 2,
    name: 'Name DESC'
  },
  levelAsc: {
    id: 3,
    name: 'Level ASC'
  },
  levelDesc: {
    id: 4,
    name: 'Level DESC'
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [...initTodoList],
      filterList: [...initTodoList],
      isAddTask: false,
      sortBy: 1,
      currentTask: {
        id: null,
        name: '',
        level: 1
      }
    }
    this.addTask = this.addTask.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.search = this.search.bind(this);
    this.sortData = this.sortData.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.inputAdd = React.createRef();
    this.selectLevel = React.createRef();
    this.changeName = this.changeName.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount', this.refs);
  }

  componentDidMount() {
    console.log('componentDidMount', this.refs);
    // this.refs.inputAdd.value = '';
    // this.refs.selectLevel.value = levels.medium.id;
  }

  changeName(input) {
    let name = input.target.value;
    this.setState({
      currentTask: {
        ...this.state.currentTask,
        name: name
      }
    })
  }

  changeLevel(input) {
    let level = input.target.value;
    this.setState({
      currentTask: {
        ...this.state.currentTask,
        level: level
      }
    })
  }

  addTask() {
    this.setState({
      isAddTask: !this.state.isAddTask
    })
  }

  submit() {
    if(!this.state.currentTask.id) {
      let item = {
        id: this.state.todoList.length + 1,
        name: this.state.currentTask.name,
        level: Number(this.state.currentTask.level)
      }
      this.setState({
        todoList: [
          ...this.state.todoList,
          item
        ],
        filterList: [
          ...this.state.todoList,
          item
        ]
      })
    } else {
      let index = this.state.todoList.findIndex(item => item.id === this.state.currentTask.id)
      let list = this.state.todoList;
      list[index] = this.state.currentTask;
      this.setState({
        todoList: [
          ...list
        ],
        filterList: [
          ...list
        ]
      })
    }
    
    this.clearFormAdd();
  }

  cancel() {
    this.setState({
      isAddTask: false
    })
    this.clearFormAdd();
  }

  clearFormAdd() {
    // if(this.refs) {
    //   this.refs.inputAdd.value = '';
    //   this.refs.selectLevel.value = levels.small.id;
    // }
    this.setState({
      currentTask: {
        id: null,
        name: '',
        length: ''
      }
    })
  }

  search(input) {
    let value = input.target.value;
    let list = this.state.todoList.filter(item => item.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1);
    this.setState({
      filterList: [
        ...list
      ]
    })
  }

  sortData(sortBy) {
    this.setState({
      sortBy: sortBy
    })
    console.log(this.state.sortBy);
  }

  deleteTask(id) {
    let index = this.state.todoList.findIndex(task => task.id === id);
    this.state.todoList.splice(index, 1);
    let list = this.state.todoList;
    this.setState({
      todoList: [
        ...list
      ],
      filterList: [
        ...list
      ]
    })
  }

  editTask(item) {
    this.setState({
      isAddTask: true
    })

    if(Object.keys(this.refs).length !== 0) {
      this.refs.inputAdd.value = item.name;
      this.refs.selectLevel.value = item.level;
    }
    this.setState({
      currentTask: {
        ...item
      }
    })
  }

  render() {
    return (
      <div className="app container">
        <h2>Project 1 - ToDo List</h2>
        <hr/>
        <div className="row">
          <div className="col-sm-7">
            <div className="row">
              <div className="col-sm-7">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for..." aria-label="Search for..." aria-describedby="button-addon2" 
                    onChange={this.search} />
                  <div className="input-group-append">
                    <button className="btn btn-info" type="button">Go</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="dropdown">
                  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort by
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {
                      Object.keys(sortByList).map(key => (
                        <a className="dropdown-item" href={'#' + sortByList[key].id}
                            key={sortByList[key].id} 
                            value={sortByList[key].id}
                            onClick={() => this.sortData(sortByList[key].id)}>
                          {sortByList[key].name}
                        </a>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <button type="button" className="btn btn-success" onClick={() => this.sortData(sortByList.nameDesc.id)}>Name - Desc</button>
              </div>
            </div>
          </div> 
          <div className="col-sm-5">
            <div className="row">
              <button type="button" onClick={this.addTask} className="btn btn-info col-sm-12">Add Task</button>
            </div>
            <div className="row">
              {
                this.state.isAddTask && (
                  <form className="form-row">
                    <div className="form-group col-sm-5">
                      <input type="text" className="form-control" placeholder="Task name..." aria-label="Task name..." aria-describedby="btnGroupAddon" 
                        ref="inputAdd" onChange={this.changeName} />
                    </div>
                    <div className="form-group col-sm-3">
                      <select className="custom-select" ref="selectLevel" onChange={this.changeLevel}>
                        {
                           Object.keys(levels).map(key => (
                            <option key={levels[key].id} value={levels[key].id}>{levels[key].name}</option>
                          ))
                        }
                      </select>
                    </div>
                    <div className="form-group col-sm-2">
                      <button type="button" className="btn btn-primary" onClick={this.submit}>Submit</button>
                    </div>
                    <div className="form-group col-sm-2">
                      <button type="button" className="btn btn-outline-secondary" onClick={this.cancel}>Cancel</button>
                    </div>
                  </form>
                )
              }
            </div>
          </div>
        </div>
        <div className="row">
          <Table dataView={this.state.filterList} sort={this.state.sortBy} deleteItem={this.deleteTask} editItem={this.editTask}/>
        </div>
      </div>
    );
  }
}

export default App;
