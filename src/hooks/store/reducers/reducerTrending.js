import { FETCH_TRENDING } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_TRENDING:
            return { // 변경된 부분
                ...state,
                movies: action.data
            }
        default:
            return state;
    }
}