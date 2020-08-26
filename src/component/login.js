import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link, Route } from 'react-router-dom';
import * as actionCreators from "../actions/index.js"
import Button from "@material-ui/core/Button";

const Login = (props) => {
    const _user = useSelector(state => state.topics.user, []) || {};
    const dispatch = useDispatch();
    const logout = (e) => {
        alert(1)
        dispatch(actionCreators.logout());
    }
    console.log(_user);
    return (
        <>
            <div className="movie">

                    <Link to={'/login'}>{ (_user._id ? '로그아웃' : '로그인')}</Link>
                    <Button onClick={(e)=>logout()}>{_user.username}</Button>
            </div>
        </>
    )
}

export default Login;