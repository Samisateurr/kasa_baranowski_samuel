import React from 'react';
import '../../components/Banner/Banner.css';
import banner from '../../assets/images/picture_banner.png';

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} alt="banner" />
            <h2>Chez vous, partout et ailleurs</h2>
        </div>
    );
};

export default Banner;