import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {Link, Route } from 'react-router-dom';
import Content from './container/content-container.js';
import Detail from "./component/Detail";
function App() {
  return (
    <div className="App">
        <Link to="/courses">강의목록</Link>
        <Link to="/detail/1">상세 테스트1</Link>
        <Link to="/react/detail/2">상세 테스트2</Link>
        <Route  exact path="/react/" component={Content} />
        <Route  path="/courses" component={Content} />
        <Route path="/detail/:name" component={Detail} />
        <Route path="/react/detail/:name" component={Detail} />
    </div>
  );
}

export default App;
