import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
import Root from './client/Root';
import { BrowserRouter } from 'react-router-dom';
import Contents from './container/content-container.js';
import Detail from './component/Detail.js';

import { Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


let store = createStore(reducers, applyMiddleware(thunk))





ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));

