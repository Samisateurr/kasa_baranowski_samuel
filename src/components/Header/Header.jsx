import React from 'react';
import '../../components/Header/Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="Logo" className="header-logo" />
            <nav className='nav-bar'>
                <div>Accueil</div>
                <div>A propos</div>
            </nav>
        </div>
    );
};

export default Header;