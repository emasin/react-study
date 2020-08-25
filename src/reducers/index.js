
import { combineReducers } from 'redux';
import TrendingReducer from '../hooks/store/reducers/reducerTrending';
import TopicsReducer from './reducerTopics';



const rootReducer = combineReducers({
    trending: TrendingReducer,
    topics : TopicsReducer

});

export default rootReducer;
