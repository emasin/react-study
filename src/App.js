import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {Link, Route } from 'react-router-dom';
import Content from './container/content-container.js';
import Tutor from './container/tutor-container.js';
import Ssr from './component/ssr';
import Login from './component/login';
import Detail from "./component/Detail";
function App() {
  return (
    <div className="">
        <Link to='/courses'>강의 목록</Link>
        <Link to='/tutors'>튜터 목록</Link>
        <Link to='/ssr'>SSR 테스트</Link>
        <Link to='/login'>로그인</Link>
        <Route  exact path="/react/" component={Content} />
        <Route  path="/tutors" component={Tutor} />
        <Route  path="/courses" component={Content} />
        <Route  path="/ssr" component={Ssr} />
        <Route  path="/login" component={Login} />
        <Route path="/detail/:name" component={Detail} />
        <Route path="/react/detail/:name" component={Detail} />
    </div>
  );
}

export default App;
