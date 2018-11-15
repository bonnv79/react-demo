import React, { Component } from 'react';
import { levels } from '../App';

class Table extends Component {
    render() {
        let { dataView, sort, deleteItem, editItem } = this.props;
        if(sort === 1) {
            dataView = dataView.sort((a, b) => a.name > b.name);
        }

        if(sort === 2) {
            dataView = dataView.sort((a, b) => a.name < b.name);
        }
        
        if(sort === 3) {
            dataView = dataView.sort((a, b) => a.level - b.level);
        }

        if(sort === 4) {
            dataView = dataView.sort((a, b) => b.level - a.level);
        }
        return (
            <table className="table table-hover">
                <thead>
                <tr className="table-success">
                    <th scope="col" colSpan={4}>List Task</th>
                </tr>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">Level</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    dataView.map(item => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>
                                {
                                    item.level === levels.small.id && <a href="#2" className="badge badge-secondary">Small</a>
                                }
                                {
                                    item.level === levels.medium.id && <a href="#3" className="badge badge-info">Medium</a>
                                }
                                {
                                    item.level === levels.high.id && <a href="#1" className="badge badge-danger">High</a>
                                }
                            </td>
                            <td>
                            <button type="button" className="btn btn-warning" onClick={() => editItem(item)}>Edit</button>
                            <button type="button" className="btn btn-danger" onClick={() => deleteItem(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        )
    }
}

export default Table;