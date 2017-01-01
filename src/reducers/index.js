/**
 * Created by kingsley on 1/1/17.
 */
import {combineReducers} from 'redux';
import user from './UserReducer';

const rootReducer = combineReducers({
    user
});

export default rootReducer;