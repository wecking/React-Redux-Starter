/**
 * Created by kingsley on 1/1/17.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {LoginAction} from '../../actions/LoginUserAction';
import {LoginForm} from './LoginForm';
import {bindActionCreators} from 'redux';

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
        this.props.actions(this.state.user);
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
        return (<LoginForm
            props={this} />);
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
    user: React.PropTypes.array,
    actions: React.PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(LoginAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);