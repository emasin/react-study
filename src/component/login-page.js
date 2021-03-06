import React from "react";
import { Redirect } from "react-router-dom"
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import Kakao from 'kakaojs';
import { GoogleLogin } from 'react-google-login';
import KakaoIcon from '../img/kakao.png'; 
import '../css/login.css';

function InputAdornments() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    return (
        <div className="login-content">
            <FormControl fullWidth variant="outlined" style={{color:'#228891'}} margin="normal">
                <InputLabel htmlFor="component-outlined" title="password"></InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </div>
    );
}

function kakaoLogin() {
    Kakao.Auth.loginForm({
        success: (res) => {
            console.log(res);
            Kakao.API.request({
                url : '/v2/user/me',
                success : function(res) {
                    console.log(res);
                }
            });
        },
        fail: (res) => {
            console.log(res);
        }
    });
}

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {email: '',password:''};
    }

      login=()=>{
        this.props.fetchLogin(this.state.email,this.state.password);

    }

    onChangeEmail=(e)=>{
            this.setState({email:e.target.value})
    }

    render() {
        const {topics} = this.props;
        const {username } = topics.user || '';
        console.log(username);
        if(username !== '' && username !== undefined)
            return (<Redirect to={'/studylist'}></Redirect>)
        return (
            <>
                <div style={{textAlign:'center', margin:'20px auto', width:'300px'}}>
                    <img src="https://www.cambly.com/fe/static/login_illustration_small.png" style={{margin:'20px auto', width:'150px'}}></img>
                    <h3 style={{fontSize:'3rem', lineHeight:'1.3', marginBottom:'20px'}}>Cambly에 돌아오신걸 환영해요!</h3>
                    <p style={{lineHeight:'1.7', fontSize:'1.4rem'}}>로그인 방법</p>
                </div>
                <div style={{margin:'10px auto', textAlign:'center'}}>
                    <GoogleLogin style={{ fontSize:'1.25rem', lineHeight:'1.8', textTransform:'none'}}
                        clientId="294069593193-et3t9jjuvs8ciitoam8hfmivv8cb34ji.apps.googleusercontent.com"    
                        onSuccess={(res)=>{
                            console.log(res);
                        }}
                        onFailure={(err)=>{
                            console.log(err);
                        }}
                    >Google</GoogleLogin>
                    <Button onClick={kakaoLogin} variant="outlined" style={{borderColor:'rgb(236 236 236)', marginTop:'-6px', backgroundColor:'#fff', padding:0, marginLeft:'6px', fontSize:'1.4rem', textTransform:'none', boxShadow:'rgb(178 180 182) 0px 1.7px', color:'rgba(0, 0, 0, 0.54)'}}>
                      <div style={{padding:'10px', marginRight:'10px'}}>
                        <span style={{ width:'21px', height:'21px', display:'block'}}>
                          <img src={KakaoIcon} alt="KakaoIcon" style={{width: '100%', marginTop:'-5px'}}></img>
                        </span>
                      </div>
                      <span style={{padding:'10px 10px 10px 0', lineHeight:'1.7'}}>kakao</span>
                      </Button>
                </div>
                <div style={{display:'flex', width:'350px', margin:'0 auto'}}><hr style={{width: '40%'}}/><span style={{margin:'0 10px', fontSize:'1.25rem'}}>또는</span><hr style={{width:'40%'}}/></div>
                <div style={{textAlign:'center', margin:'20px auto', width:'300px', fontSize:'1.4rem'}}>
                    <p style={{lineHeight:'1.7'}}>이메일 주소로 로그인</p>
                    <div className="loginform">
                        <TextField id="outlined-full-width" fullWidth margin="normal" InputLabelProps={{ shrink: true,}} variant="outlined"  onChange={this.onChangeEmail} style={{fontSize:'1.4rem'}} />
                        <InputAdornments />
                        <p style={{textAlign:'left'}}><a href="#none">비밀번호를 잊으셨나요?</a></p>
                        <Button variant="contained" style={{ backgroundColor:'#228891', color:'#fff', fontSize:'12px', margin:'20px 0'}} onClick={this.login}>로그인</Button>
                        <p style={{textAlign:'left'}}>Cambly에 처음이신가요? <span><a href="#none">회원가입</a></span></p>
                    </div>
                </div>
            </>
        )
    }

}

const s = (state) => {

    return {
        topics: state.topics,

    };

    //this.props.user = user;

};



export default connect(s,actionCreators) (LoginPage);