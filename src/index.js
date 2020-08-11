import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
import { BrowserRouter } from 'react-router-dom';
import Content from './container/content-container.js';
import Detail from './component/Detail.js';

import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


let store = createStore(reducers, applyMiddleware(thunk))




class App extends React.Component{
    render(){
        return(
            <>
            <Route exact path="/" component={Content}/>
            <Route exact path="/detail/:name" component={Detail}/>
            </>
        )
    }
}

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

