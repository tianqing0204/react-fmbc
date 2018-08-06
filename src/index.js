import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
// import { createStore } from 'redux';
import store from './store';
import mock from './mock';
if (process.env.NODE_ENV === 'development') {
    mock.bootstarp();
} 
// const reducers = (state={a: 10}, action) => {
//     switch (action.type) {
//         case 'GAIBINA_A': 
//             return {a: action.a};
//             break;
//         default: 
//             return state;
//     }
// }
// const store = createStore(reducers);
ReactDOM.render(<Provider store = {store()}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
