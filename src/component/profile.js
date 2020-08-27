import React from "react"
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import { Container } from "@material-ui/core";
import styles from "../css/style.module.css";

function Profile({ user } ) {

    const _user = useSelector(state => state.topics.user, []) || {};

    const { email, password, name } = user || {}


    if(!_user.username)
        return (<Redirect to={'/login'} />);

    return (
        <>
            <Container style={{marginTop:'50px', marginBottom:'60px'}}>
                    <h1 className={styles.title}>Profile</h1>
                    <div className={styles.profilelist}>
                        <dl>
                            <dt>Email</dt>
                            <dd>wntmddjs0@naver.com</dd>
                        </dl>
                        <hr/>
                        <dl>
                            <dt>Name</dt>
                            <dd>{_user.username}</dd>
                        </dl>
                    </div>
            </Container>
        </>
    )
}

export default Profile