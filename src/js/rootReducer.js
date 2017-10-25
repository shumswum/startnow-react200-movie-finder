import { combineReducers } from 'redux';
import search from './component/MovieSearch/reducer';
import detail from './component/MovieDetail/reducer';

const reducers = combineReducers({
    search,
    detail
});

export default reducers;