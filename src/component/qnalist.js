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
                <ul className="qnalist">
                    <li style={{textAlign:'left', listStyle:'none',position:'relative', padding:'40px', marginBottom:'40px', border:'1px solid #d8dbe4', backgroundColor:'#fff'}}>
                        <a href="#" style={{textDecoration: 'none'}}>
                            <span style={{fontSize:'1.6rem', color:'#222'}}>2020-08-10 12:05:29</span>
                            <h4 style={{fontSize:'2.4rem', lineHeight:'36px', marginTop:'15px'}}>Reactlist</h4>
                            <span style={{position:'absolute', right:'40px', top:'50%', transform:'translateY(-50%)', fontSize:'3rem', color:'#222'}}>{'>'}</span>
                        </a>
                    </li>
                </ul>
            </Container>
            </>
        )
    }
}

export default Qnalist;