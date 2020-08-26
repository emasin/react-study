import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {Link, Route } from 'react-router-dom';
import {Layout,Menu,Breadcrumb} from "antd";
import Contents from './container/content-container.js';
import Tutor from './container/tutor-container.js';
import Ssr from './component/ssr';
import Login from './component/login';
import QnaAdmin from './blossomme/QnaAdminContainer';
import Qna from './blossomme/QnaContainer';
import Detail from "./component/Detail";
import Studylist from "./component/study-list";

import 'antd/dist/antd.css';
import ActionContainer from "./hooks/ActionContainer";
const {Header,Footer,Sider,Content} = Layout;
function App() {
  return (
    <div className="">
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">
                        <Link to='/courses'>강의 목록</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/tutors'>튜터 목록</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/ssr'>SSR 테스트</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to='/movies'>영화</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to='/login'>로그인</Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to='/blossome/qnalist'>Q&amp;A</Link>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Link to='/blossome/admin/qnalist'>관리자 Q&amp;A</Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Link to='/blossome/studylist'>Study List</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Content>
                    <Route exact path="/react/" component={Contents} />
                    <Route path="/tutors" component={Tutor} />
                    <Route path="/courses" component={Contents} />
                    <Route path="/ssr" component={Ssr} />
                    <Route path="/movies" component={ActionContainer} />
                    <Route path="/login" component={Login} />
                    <Route path="/blossome/studylist" component={Studylist} />
                    <Route path="/blossome/qnalist" component={Qna} />
                    <Route path="/blossome/admin/qnalist" component={QnaAdmin} />
                    <Route path="/react/detail/:name" component={Detail} />
                </Content>
            </Layout>
        </Layout>
    </div>
  );
}

export default App;
