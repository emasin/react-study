import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {Link, Route } from 'react-router-dom';
import Content from './container/content-container.js';
import Detail from "./component/Detail";
function App() {
  return (
    <div className="">

        <Route  exact path="/react/" component={Content} />
        <Route  path="/courses" component={Content} />
        <Route path="/detail/:name" component={Detail} />
        <Route path="/react/detail/:name" component={Detail} />
    </div>
  );
}

export default App;
