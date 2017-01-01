/**
 * Created by kingsley on 1/1/17.
 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariante from 'redux-immutable-state-invariant';

export default function configureStore (initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariante())
    );
}