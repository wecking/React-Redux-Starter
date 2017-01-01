/**
 * Created by kingsley on 1/1/17.
 */
import * as actionTypes from '../actions/actionTypes/User';
export default function saveUser(state = [], action) {
    switch (action.type){
        case actionTypes.Login_User:
            return [...state, Object.assign({}, action.user)];
            // return state;
        default:
            return state;
    }
}