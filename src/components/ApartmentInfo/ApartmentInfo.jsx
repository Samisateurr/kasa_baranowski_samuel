import React from 'react';
import '../ApartmentInfo/ApartmentInfo.css';
import greyStar from '../../assets/images/grey_star.png';
import redStar from '../../assets/images/red_star.png';
import Collapse from '../Collapse/Collapse';
import '../../data/ApartmentsData';

function ApartmentInfo({ title, location, tags, name, picture, rating, equipments, description }) {

    const renderStars = () => {
        const stars = [];
        const filledStar = redStar;
        const emptyStar = greyStar;

        for (let i = 1; i <= 5; i++) {
            const starImg = i <= rating ? filledStar : emptyStar;
            stars.push(<img key={i} src={starImg} alt={`Star ${i}`} />);
        }
        return stars;
    };

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

            <div className='apartment-tag-stars'>
                <div className="apartment-tag">
                    {tags.map((tag, index) => (
                        <p key={index}>{tag}</p>
                    ))}
                </div>
                <div className="stars-container">{renderStars()}</div>
            </div>

            <div className="apartment-collapse-container">
                <div className="apartment-collapse"> <Collapse title="Description" content={description} /></div>
                <div className="apartment-collapse"> <Collapse title="Équipements" content={equipments} /></div>
            </div>
        </div>
    );
}

export default ApartmentInfo;