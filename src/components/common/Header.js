/**
 * Created by kingsley on 12/30/16.
 */

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () =>  {
    return (
        <div className="blog-masthead">
            <div className="container">
                <nav className="blog-nav">
                    <IndexLink className="blog-nav-item" to="/" activeClassName="active">Home</IndexLink>
                    {" | "}
                    <Link className="blog-nav-item" to="/about" activeClassName="active">About</Link>
                    {" | "}
                    <Link className="blog-nav-item" to="/login" activeClassName="active">Login</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;