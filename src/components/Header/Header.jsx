import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../components/Header/Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="Logo" className="header-logo" />
            <nav className='nav-bar'>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Accueil</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">A propos</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
