/**
 * Created by kingsley on 12/30/16.
 */
//this component handels the app template used on every page.
//contain things we want to have on all our page
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Header from './common/Header';


class App extends React.Component {
    render() {
        return (<div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.PropTypes = {
    children: PropTypes.object.isRequired
};

export default App;