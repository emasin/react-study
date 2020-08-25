import React from "react";
import { Container } from "@material-ui/core";
import Button from '@material-ui/core/Button';

class Qnalist extends React.Component {
    render() {
        
        return (
            <>
            <Container style={{marginTop:'100px'}}>
                <h3 style={{fontSize:'3.4rem', textAlign:'left', paddingBottom:'80px', borderBottom:'2px solid #222'}}>Q&amp;A</h3>
                <div style={{padding:'30px 0'}}>
                    <Button variant="outlined">문의하기</Button>
                </div>
                <div className="qnalist" style={{textAlign:'left', position:'relative'}}>
                        <span>2020-08-10 12:05:29</span>
                        <h4>Reactlist</h4>
                        <span style={{position:'absolute', right:0, top:'50%', transform:'translateY(-50%)'}}>{'>'}</span>
                </div>
            </Container>
            </>
        )
    }
}

export default Qnalist;