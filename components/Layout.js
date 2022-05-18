import React from 'react';
import {Link} from 'gatsby';
import {container} from '../style/layout.module.css';

const Layout = ({pageTitle, children}) => {

    return (
        <div className={container}>
            <p>Menu:
                <ul>
                    <li>
                        <Link to="/">Main</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </p>
            <h1>{pageTitle}</h1>
            {children}
        </div>
    )
}

export default Layout;