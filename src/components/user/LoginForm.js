/**
 * Created by kingsley on 1/1/17.
 */
import React, {PropTypes} from 'react';

export const LoginForm = ({props}) => {
    return (
        <div className="container">
            <form className="form-signin">
                <h2 className="form-signin-heading">
                    Please sign in
                </h2>
                <label
                    htmlFor="inputEmail"
                    className="sr-only">
                    Email address
                </label>
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    onChange={props.onUsernameChange}
                    autoFocus/>
                <label
                    htmlFor="inputPassword"
                    className="sr-only">
                    Password
                </label>
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required/>
                <div className="checkbox">
                    <label>
                        <input
                            type="checkbox"
                            value="remember-me"/>
                        Remember me
                    </label>
                </div>
                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                    onClick={props.login}>
                    Sign in
                </button>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    props: PropTypes.func.required,
    login: PropTypes.func.required,
    onUsernameChange: PropTypes.func.required
};
