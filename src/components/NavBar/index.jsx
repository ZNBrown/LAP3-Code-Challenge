import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './style.css';

const Header = () => {    
    const history = useHistory();
    return (
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
            <NavLink activeClassName="active" to="/search">Search</NavLink>
            <button id="back-button" onClick={history.goBack}>Back</button>
        </nav>
    );
}

export default Header;