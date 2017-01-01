/**
 * Created by kingsley on 1/1/17.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {LoginUserAction} from '../../actions/LoginUserAction';


class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user :{username: ""},
            dataSource: []
        };

        this.login = this.login.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.users = this.users.bind(this);
    }

    login(e) {
        e.preventDefault();
        this.props.dispatch(LoginUserAction(this.state.user));
    }

    onUsernameChange(event){
        const user = this.state.user;
        user.username = event.target.value;
        this.setState({user: user});
    }

    users(user, index){
        return <div key={index}>{user.username}</div>;
    }

    render() {
        return (
            <div className="container">
                <form className="form-signin">
                    <h2 className="form-signin-heading">
                        Please sign in
                    </h2>
                    {this.props.user.map(this.users)}
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
                        onChange={this.onUsernameChange}
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
                                onClick={this.login}
                                className="btn btn-lg btn-primary btn-block"
                                type="submit">
                                    Sign in
                            </button>
                </form>
            </div>
        );
    }
}

LoginPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(LoginPage);