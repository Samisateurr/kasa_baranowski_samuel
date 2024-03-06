import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/Header/Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="Logo" className="header-logo" />
            <nav className='nav-bar'>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A propos</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
