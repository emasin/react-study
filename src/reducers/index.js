let defaultState={
    color:"red",
    data:[],
    detailData:{},
    isLogin:false,
    tutor:[]
}


const mainReducer=(state=defaultState,action)=>{
    if(action.type==="CHANGE_COLOR"){
        return{
            ...state,
            color:action.color
        }
    } else if(action.type==="CHANGE_CONTENT"){
        return{
            ...state,
            data:action.data
        }
    }else if(action.type==="LOAD_TUTOR_ACTION"){
        return{
            ...state,
            tutor:action.payload
        }
    }else if(action.type==="LOAD_DETAIL_CONTENT"){
        return{
            ...state,
            detailData:action.detailData
        }
    }else{
        return{
            ...state
        }
    }
}

export default mainReducer;