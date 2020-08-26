
export default function (state = [], action) {

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
    }else if(action.type==="LOAD_TOPIC1"){

        return{
            ...state,
                data:action.topic
        }
    }else if(action.type==="LOGIN"){
        return{
            ...state,

                isLogin:action.isLogin
        }
    }else if(action.type==="LOAD_StudyList"){
        return{
            ...state,

                history:action.history
        }
    }
    else{
        return{
            ...state
        }
    }
}
