import React from "react";
import { Container } from "@material-ui/core";
import styles from "../css/style.module.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const title = {
    fontSize:'3.4rem', textAlign:'left', paddingBottom:'80px', borderBottom:'2px solid #222'
}

const plays = {
    fontSize:50, color:'#fff', position:'absolute', left:'50%', top:'30px', transform: `translateX(-50%)`
}

class Studylist extends React.Component {
    render() {
        return (
            <>  
                <Container style={{marginTop:'100px', marginBottom:'120px'}}>
                    <h3 style={title}>Study list</h3>
                    <ul className={styles.listbox}>
                        <li>
                            <a href="#none">
                                <div>
                                    <img src="https://img.youtube.com/vi/sZDvByH2mNU/0.jpg"></img>
                                    <PlayCircleOutlineIcon style={plays}/>
                                </div>
                                <div>
                                    <span>2020-08-10 12:05:29</span>
                                    <p>React Hooks for daily use!</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </Container>
            </>
        )
    }
}

export default Studylist;