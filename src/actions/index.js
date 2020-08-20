import axios from "axios";

export function loadColor(){
    return(dispatch)=>{
        return axios.get("https://www.colr.org/json/color/random").then((response)=>{
            dispatch(changeColor("#"+response.data.new_color));
        })
    }
}

export function changeColor(color){
    return{
        type:"CHANGE_COLOR",
        color:color
    }
}


export  function loadTutor(){
    return(dispatch)=>{
        return axios.get("https://app.devkids.co.kr/data/tutor.json").then((response)=>{
            dispatch(loadTutorAction(response.data));
        })
    }
}



export function loadTutorAction(data){
    return{
        type:"LOAD_TUTOR_ACTION",
        payload:data
    }
}





export  function loadContent(){
    return(dispatch)=>{
        return axios.get("https://app.devkids.co.kr/data/data.json").then((response)=>{
            dispatch(changeContent(response.data));
        })
    }
}


export function changeContent(data){
    return{
        type:"CHANGE_CONTENT",
        data:data
    }
}



export  function loadContentDetail(key){
    return(dispatch)=>{
        return axios.get("https://app.devkids.co.kr/data/data.json").then((response)=>{
            console.log(response.data[key]);
            dispatch(changeContentDetail(response.data[key]));
        })
    }
}


export function changeContentDetail(data){
    console.log(data);
    return{
        type:"LOAD_DETAIL_CONTENT",
        detailData:data
    }
}




export  function loadTopic1(){
    return(dispatch)=>{
        //local
        return axios.get("https://us-central1-fbweb-31a5f.cloudfunctions.net/api/topics").then((response)=>{
            dispatch(loadTopic1Action(response.data));
        })
    }
}


export function loadTopic1Action(data){
    return{
        type:"LOAD_TOPIC1",
        topic:data
    }
}



export  function login(){
    return(dispatch)=>{
        //local
        //return dispatch(loginAction(true));

        return axios.get("https://us-central1-fbweb-31a5f.cloudfunctions.net/api/login").then((response)=>{
            dispatch(loginAction(response.data.isLogin));
        })

    }
}


export function loginAction(data){
    return{
        type:"LOGIN",
        isLogin:data
    }
}