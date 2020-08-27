
import { combineReducers } from 'redux';
import TrendingReducer from '../hooks/store/reducers/reducerTrending';
import QNAReducer from '../blossomme/store/reducers/reducerQNA';
import TopicsReducer from './reducerTopics';



const rootReducer = combineReducers({
    trending: TrendingReducer,
    topics : TopicsReducer,
    qna  : QNAReducer

});

export default rootReducer;
