import axios from "axios";

export const FETCH_TRENDING = 'FETCH_TRENDING';
export const FETCH_NETFLIX_ORIGINALS = 'FETCH_NETFLIX_ORIGINALS';
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED';
export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES';
export const FETCH_HORROR_MOVIES = 'FETCH_HORROR_MOVIES';
export const FETCH_ROMANCE_MOVIES = 'FETCH_ROMANCE_MOVIES';
export const FETCH_DOCUMENTARIES = 'FETCH_DOCUMENTARIES';


const API_KEY = '224ce27b38a3805ecf6f6c36eb3ba9d0';
const BASE_URL = `https://api.themoviedb.org/3`


export const fetchTrendData = (data) => {
    return {
        type: FETCH_TRENDING,
        data
    }
}

export const fetchTrending = () => {
    return (dispatch) => {
        return axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                dispatch(fetchTrendData(response.data))
            })
            .catch(error => {
                throw(error);
            });
    }
}