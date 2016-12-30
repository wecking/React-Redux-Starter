/**
 * Created by kingsley on 12/30/16.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';


class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h2>This is the Home Page of this template</h2>
                <Link to="/about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

export default HomePage;