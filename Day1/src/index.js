import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicExample from './components/basicexample';
import App2 from './components/App2';
import bookStore from './components/bookstore';

// ReactDOM.render(
//     <BasicExample />,
//     document.getElementById('root')
// )
ReactDOM.render(
    <App2 bookStore={bookStore} />,
    document.getElementById('root')
);

