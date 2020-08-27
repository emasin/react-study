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
import Detail from "./component/Detail";
import 'antd/dist/antd.css';
const {Header,Footer,Sider,Content} = Layout;
function App() {
  return (
    <div className="App">
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
                        <Link to='/login'>로그인</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Content>
                    <Route exact path="/react/" component={Contents} />
                    <Route path="/tutors" component={Tutor} />
                    <Route path="/courses" component={Contents} />
                    <Route path="/ssr" component={Ssr} />
                    <Route path="/login" component={Login} />
                    <Route path="/detail/:name" component={Detail} />
                    <Route path="/react/detail/:name" component={Detail} />
                </Content>
            </Layout>
        </Layout>
    </div>
  );
}

export default App;
