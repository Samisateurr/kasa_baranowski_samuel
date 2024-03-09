import React from 'react';
import '../ApartmentInfo/ApartmentInfo.css';
import '../../data/ApartmentsData';

function ApartmentInfo({ title, location, tags }) {
    return (
      <div className="apartment-infos">
        <h2>{title}</h2>
        <p>{location}</p>
        <div className="apartment-tag">
          {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
      </div>
    );
  }
  
  export default ApartmentInfo;