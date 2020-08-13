import axios from "axios";

export function loadColor(){
    return(dispatch)=>{
        return axios.get("http://www.colr.org/json/color/random").then((response)=>{
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
        return axios.get("http://www.devkids.co.kr/tutor.json").then((response)=>{
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
        return axios.get("http://www.devkids.co.kr/data.json").then((response)=>{
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
        return axios.get("http://www.devkids.co.kr/data.json").then((response)=>{
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