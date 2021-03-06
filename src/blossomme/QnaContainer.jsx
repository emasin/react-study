import React, { useEffect , useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchQNAList, fetchQNAAdd} from './store/actions/index';
import { Container } from "@material-ui/core";
import Button from 'react-bootstrap/Button';
import { Link, Route } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import TextField from '@material-ui/core/TextField';

const QnaContainer = (props) => {
    const currencies = [
        {
            value: 'a',
            label: '분류선택',
        },
        {
            value: 'b',
            label: '1',
        },
        {
            value: 'c',
            label: '2',
        },
        {
            value: 'd',
            label: '3',
        },
    ];

    function TextFields() {
        const [currency, setCurrency] = React.useState('a');
        const handleChange = (event) => {
            setCurrency(event.target.value);
        };

        return (
            <TextField id="outlined-select-currency-native" select value={currency} onChange={handleChange} SelectProps={{native: true}} variant="outlined" style={{maxWidth:'200px', width:'100%'}}>
                {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>
        );
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQNAList());
    }, []);

    const listData = useSelector(state => state.qna.list, []) || [];

    const [show, setShow] = useState(false);

    const [qnaInfo, setQnaInfo] = useState({
        title: 'react고정제목',
        mobilePhoneNo : '',
        userNm : '',
        email : ''
    });

    const onChange = e => {
        const { name, value } = e.target;
        setQnaInfo({
            ...qnaInfo,
            [name] : value
        });
    };

    const handleShow = () => {

        setShow(true);
    }

    const handleClose = () => {

        setShow(false);
    }

    const saveData = () => {
        dispatch(fetchQNAAdd(qnaInfo));
        handleClose();
    }

    return (

        <>
            <Container style={{marginTop:'100px', marginBottom:'120px'}}>
                <h3 style={{fontSize:'3.4rem', textAlign:'left', paddingBottom:'80px', borderBottom:'2px solid #222'}}>Q&amp;A</h3>
                <div style={{padding:'30px 0', display:'block', textAlign:'right'}}>
                    <Button variant="outline-dark" onClick={() => handleShow() } style={{fontSize:'1.6rem', lineHeight:'55px', width:'165px', border:'2px solid #222', fontWeight:'bold'}}>문의하기</Button>
                </div>
                <ul className="qnalist" style={{paddingLeft:0}}>

                    { listData && listData.map((detail, i) => (
                        <li key={i} style={{textAlign:'left', listStyle:'none',position:'relative', padding:'40px', marginBottom:'40px', border:'1px solid #d8dbe4', backgroundColor:'#fff'}}>
                            <Link to='/blossome/qnalist-detail' style={{textDecoration:'none'}}>
                                <span style={{fontSize:'1.6rem', color:'#222'}}>{detail.createdDttime}</span>
                                <h4 style={{fontSize:'2.4rem', lineHeight:'36px', marginTop:'15px', wordBreak:'break-all', marginRight:'40px'}}>{detail.contents}</h4>
                                <span style={{position:'absolute', right:'40px', top:'50%', transform:'translateY(-50%)', fontSize:'3rem', color:'#222'}}>{'>'}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <Modal className="modal" show={show} onHide={handleClose} animation={false}>
                    <Modal.Header style={{display:'block', minHeight:'50px'}} closeButton/>
                    <Modal.Body style={{padding:'0 20px 35px', overflow:'auto'}}>
                        <div className="cont-box" style={{paddingBottom:'20px'}}>

                        </div>
                        <div className="cont-box" style={{marginBottom:'20px'}}>
                            <h6 style={{fontSize:'2rem', lineHeight:'1.4', marginBottom:'10px'}}>분류</h6>
                            <TextFields/>
                        </div>
                        <div className="cont-box" style={{marginBottom:'20px'}}>
                            <h6 style={{fontSize:'2rem', lineHeight:'1.4', marginBottom:'10px'}}>문의자</h6>
                            <TextField onChange={onChange} name="userNm" id="outlined-name" variant="outlined" label="name" fullWidth style={{marginBottom:'10px'}}/>
                            <TextField onChange={onChange} name="email" id="outlined-email" variant="outlined" label="email" fullWidth style={{marginBottom:'10px'}}/>
                            <TextField onChange={onChange} name="mobilePhoneNo" id="outlined-phone" variant="outlined" label="phone" fullWidth style={{marginBottom:'10px'}}/>
                        </div>
                        <div className="cont-box" style={{marginBottom:'20px'}}>
                            <h6 style={{fontSize:'2rem', lineHeight:'1.4', marginBottom:'10px'}}>내용</h6>
                            <span>* 문의시 관심항목을 꼭 입력해주세요.</span>

                        </div>
                        <div style={{paddingTop:'30px', display:'block', textAlign:'center'}}>
                            <Button onClick={saveData} variant="outline-dark" style={{fontSize:'1.6rem', lineHeight:'40px', width:'130px', border:'2px solid #222', fontWeight:'bold', marginTop:'50px'}}>문의하기</Button>
                        </div>
                    </Modal.Body>
                </Modal>
            </Container>
        </>



    )
}

export default QnaContainer;