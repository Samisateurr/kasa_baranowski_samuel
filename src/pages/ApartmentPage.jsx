import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ApartmentsData from '../data/ApartmentsData';
import Carousel from '../components/Carousel/Carousel';
import ApartmentInfo from '../components/ApartmentInfo/ApartmentInfo';

function ApartmentPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const apartment = ApartmentsData.find(apartment => apartment.id === id);

    useEffect(() => {
        if (!apartment) {
            navigate("/not-found");
        }
    }, [apartment, navigate]);

    if (!apartment) {
        return null; 
    }

    return (
        <div>
            <Header />
            <Carousel pictures={apartment.pictures} /> {/* Passer les images en tant que props ici */}
            <ApartmentInfo
                title={apartment.title}
                location={apartment.location}
                tags={apartment.tags}
                name={apartment.host.name}
                picture={apartment.host.picture}
                rating={apartment.rating}
                equipments={apartment.equipments}
                description={apartment.description}
            />
            <Footer />
        </div>
    );
}

export default ApartmentPage;