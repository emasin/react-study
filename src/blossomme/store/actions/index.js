import axios from "axios";

export const FETCH_QNA_LIST = 'FETCH_QNA_LIST';



const BASE_URL = `http://localhost:8080`


export const fetchQNAListData = (data) => {
    return {
        type: FETCH_QNA_LIST,
        data
    }
}

export const fetchQNAList = () => {
    return (dispatch) => {
        return axios.get(`${BASE_URL}/api/help/qna/list`)
            .then(response => {
                dispatch(fetchQNAListData(response.data))
            })
            .catch(error => {
                throw(error);
            });
    }
}