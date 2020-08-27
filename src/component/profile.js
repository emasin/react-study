import React from "react"
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

function Profile({ user }) {


    const _user = useSelector(state => state.topics.user, []) || {};

    const { email, password, name } = user || {}

    const { from } =   { from:{pathname: "/login" }}
    if (!_user.username) return <Redirect to={from} />
    return (
        <>
            <h1>Profile</h1>
            <dt>Email</dt>
            <dd>{_user.username}</dd>
        </>
    )
}

export default Profile