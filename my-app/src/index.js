import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Root from './containers/Root';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));


