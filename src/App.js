import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {Link, Route } from 'react-router-dom';
import Content from './container/content-container.js';
import Tutor from './container/tutor-container.js';
import Detail from "./component/Detail";
function App() {
  return (
    <div className="">
        <Link to='/courses'>강의 목록</Link>
        <Link to='/tutors'>튜터 목록</Link>
        <Route  exact path="/react/" component={Content} />
        <Route  path="/tutors" component={Tutor} />
        <Route  path="/courses" component={Content} />
        <Route path="/detail/:name" component={Detail} />
        <Route path="/react/detail/:name" component={Detail} />
    </div>
  );
}

export default App;
