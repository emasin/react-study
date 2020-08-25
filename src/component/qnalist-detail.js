import React from "react";
import { Container } from "@material-ui/core";
import Button from 'react-bootstrap/Button';
import { Link, Route } from 'react-router-dom';

class Qnadetail extends React.Component {
    render() {
        return (
            <>
                <Container style={{marginTop:'100px', marginBottom:'120px'}}>
                    <h3 style={{fontSize:'3.4rem', textAlign:'left', paddingBottom:'80px', borderBottom:'2px solid #222'}}>Q&amp;A</h3>
                    <div style={{border:'1px solid #ccc', padding:'40px', margin:'50px 0', backgroundColor:'#fff', textAlign:'left'}}>
                        <span style={{fontSize:'1.6rem', color:'#222'}}>2020-08-10 12:05:29</span>
                        <h4 style={{fontSize:'2.4rem', lineHeight:'36px', marginTop:'15px', wordBreak:'break-all', marginRight:'40px'}}>Reactlist</h4>
                        <hr style={{margin:'40px 0'}}/>
                        <p style={{fontSize:'1.6rem'}}>confirm</p>
                    </div>
                    <h4 style={{fontSize:'2rem', textAlign:'left', paddingBottom:'20px', paddingLeft:'40px',borderBottom:'1px solid #222', fontWeight:'bold'}}>답변정보</h4>
                    <div style={{padding:'40px', textAlign:'left', fontSize:'1.6rem'}}>
                        답변
                    </div>
                    <hr/>
                    <div style={{padding:'30px 0', display:'block'}}>
                        <Link to='/qnalist'>
                            <Button variant="outline-dark" style={{fontSize:'1.6rem', lineHeight:'55px', width:'165px', border:'2px solid #222', fontWeight:'bold', marginTop:'50px'}}>목록보기</Button>
                        </Link>
                    </div>
                </Container>
            </>
        )
    }
}

export default Qnadetail;