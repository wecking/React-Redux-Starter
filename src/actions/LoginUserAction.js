/**
 * Created by kingsley on 1/1/17.
 */
import * as actionTypes from './actionTypes/User';

export function LoginAction(user) {
    return {type : actionTypes.Login_User , user: user};
}