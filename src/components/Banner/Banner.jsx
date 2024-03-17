import React from 'react';
import '../Banner/Banner.css'; // CSS générique pour les styles communs
import '../Banner/BannerHome.css'; // CSS spécifique à la page Home
import '../Banner/BannerAbout.css'; // CSS spécifique à la page About

const Banner = ({ backgroundImage, title, isHome, isAbout }) => {
    return (
        <div className={`banner ${isHome ? 'home' : ''} ${isAbout ? 'about' : ''}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h2>{title}</h2>
        </div>
    );
};

export default Banner;