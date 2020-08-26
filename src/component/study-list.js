import React from "react";
import { Container } from "@material-ui/core";
import styles from "../css/style.module.css";
import LaunchIcon from '@material-ui/icons/Launch';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const launch = {
    fontSize:50, position:'absolute', left:'50%', top:'50%', transform: `translate(-50%, -50%)`
}

const plays = {
    fontSize:50, color:'#fff', position:'absolute', left:'50%', top:'50%', transform: `translate(-50%, -50%)`
}

class Studylist extends React.Component {
    render() {
        return (
            <>  
                <Container style={{marginTop:'50px', marginBottom:'60px'}}>
                    <h3 className={styles.title}>Study list</h3>
                    <div className={styles.listbox}>
                        <a href="#none">
                            <div style={{backgroundColor:'#ccc'}}>
                                <LaunchIcon style={launch}/>
                            </div>
                            <div>
                                <span>2020-08-10 12:05:29</span>
                                <p>React Hooks for daily use!</p>
                            </div>
                        </a>
                    </div>
                    <div className={styles.listbox}>
                        <a href="#none">
                            <div style={{backgroundColor:'#ccc'}}>
                                <img src="https://img.youtube.com/vi/sZDvByH2mNU/0.jpg" style={launch}></img>
                                <PlayCircleOutlineIcon style={plays}/>
                            </div>
                            <div>
                                <span>2020-08-10 12:05:29</span>
                                <p>React Hooks for daily use!</p>
                            </div>
                        </a>
                    </div>
                </Container>
            </>
        )
    }
}

export default Studylist;