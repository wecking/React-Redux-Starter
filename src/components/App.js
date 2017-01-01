/**
 * Created by kingsley on 12/30/16.
 */
//this component handels the app template used on every page.
//contain things we want to have on all our page
import React, {PropTypes} from 'react';
import Header from './common/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green100, green500, green700} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: green500,
        primary2Color: green700,
        primary3Color: green100
    }
}, {
    avatar: {
        borderColor: null
    }
    // userAgent: req.headers['LoginDetails-agent'],
});


class App extends React.Component {
    render() {
        const child = (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
        return (<div className="container-fluid">
                <MuiThemeProvider muiTheme={muiTheme}>
                    {child}
                </MuiThemeProvider>
            </div>
        );

    }
}

App.PropTypes = {
    children: React.PropTypes.object.isRequired
};

export default App;