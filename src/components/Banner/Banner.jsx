import React from 'react';
import '../../components/Banner/Banner.css';
import banner from '../../assets/images/picture_banner.png';

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} alt="banner" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;