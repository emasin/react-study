import { FETCH_QNA_LIST,FETCH_QNA_ADD } from '../actions/index';

export default function (state = [], action) {
    console.log(action.data)
    switch (action.type) {
        case FETCH_QNA_LIST:

            return { // 변경된 부분
                ...state,
                list: action.data
            }
        case FETCH_QNA_ADD:

            return { // 변경된 부분
                ...state
            }
        default:
            return state;
    }
}