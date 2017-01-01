/**
 * Created by kingsley on 1/1/17.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {LoginUserAction} from '../../actions/LoginUserAction';
import {LoginForm} from './LoginForm';


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
        console.log("king");
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

    LoginForm() {
        return <LoginForm
            props={this} />;
    }

    render() {
        return (
            <div>
                {this.props.user.map(this.users)}
                {this.LoginForm()}
            </div>
        );
    }
}

LoginPage.propTypes = {
    dispatch: PropTypes.func.required,
    user: PropTypes.array.required
};

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(LoginPage);