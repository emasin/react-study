import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchActionMovies, fetchTrending} from './store/actions/index';
import Movie from './components/Movie';

const ActionContainer = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTrending());
    }, []);

    const actionData = useSelector(state => state.trending.movies, []) || [];

    return (
        <div>
            <p>Action Movies</p>
            <div className="movieContainer">
                { actionData.results && actionData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default ActionContainer;