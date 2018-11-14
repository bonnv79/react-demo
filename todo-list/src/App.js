import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app container">
        <h2>Project 1 - ToDo List</h2>
        <hr/>
        <div class="row">
          <div class="col-sm-7">
            <div class="row">
              <div class="col-sm-7">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search for..." aria-label="Search for..." aria-describedby="button-addon2" />
                  <div class="input-group-append">
                    <button class="btn btn-info" type="button" id="button-addon2">Go</button>
                  </div>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="dropdown">
                  <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort by
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Name ASC</a>
                    <a class="dropdown-item" href="#">Name DESC</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Level ASC</a>
                    <a class="dropdown-item" href="#">Level DESC</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <button type="button" class="btn btn-success">Name - Desc</button>
              </div>
            </div>
          </div> 
          <div class="col-sm-5">
              <div class="row">
                <button type="button" class="btn btn-info col-sm-12">Add Task</button>
              </div>
              <div class="row">
                <form class="form-row">
                  <div class="form-group col-sm-5">
                    <input type="text" class="form-control" placeholder="Task name..." aria-label="Task name..." aria-describedby="btnGroupAddon"/>
                  </div>
                  <div class="form-group col-sm-3">
                    <select class="custom-select" id="inputGroupSelect01">
                      <option value="1" selected>Small</option>
                      <option value="2">Medium</option>
                      <option value="3">High</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-2">
                    <button type="button" class="btn btn-primary">Submit</button>
                  </div>
                  <div class="form-group col-sm-2">
                    <button type="button" class="btn btn-outline-secondary">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
        <div class="row">
          <table class="table table-hover">
            <thead>
              <tr class="table-success">
                <th scope="col" colSpan="4">List Task</th>
              </tr>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Task</th>
                <th scope="col">Level</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Hello</td>
                <td>
                  <a href="#" class="badge badge-danger">High</a>
                  <a href="#" class="badge badge-secondary">Small</a>
                  <a href="#" class="badge badge-info">Medium</a>
                </td>
                <td>
                  <button type="button" class="btn btn-warning">Edit</button>
                  <button type="button" class="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
