import React from 'react';
import '../../components/BannerAbout/BannerAbout.css';
import banner_about from '../../assets/images/banner_about.png';

const BannerAbout = () => {
    return (
        <div className="banner_about">
            <img src={banner_about} alt="banner de la page à propos" />
        </div>
    );
};

export default BannerAbout;