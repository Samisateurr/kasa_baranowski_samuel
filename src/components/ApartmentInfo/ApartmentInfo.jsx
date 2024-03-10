import React from 'react';
import '../ApartmentInfo/ApartmentInfo.css';
import '../../data/ApartmentsData';

function ApartmentInfo({ title, location, tags, name, picture }) {
    return (
        <div className="apartment-infos">
            <div className="apartment-name-owner">
                <div>
                    <h2>{title}</h2>
                    <p>{location}</p>
                </div>

                <div className="apartment-owner">
                    <img src={picture} alt={name} />
                    <p>{name}</p>
                </div>
            </div>

            <div className="apartment-tag">
                {tags.map((tag, index) => (
                    <p key={index}>{tag}</p>
                ))}
            </div>


        </div>
    );
}

export default ApartmentInfo;