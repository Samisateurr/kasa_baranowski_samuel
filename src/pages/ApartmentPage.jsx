import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ApartmentsData from '../data/ApartmentsData';
import Carousel from '../components/Carousel/Carousel';

function ApartmentPage() {
  const { id } = useParams();
  const apartment = ApartmentsData.find(apartment => apartment.id === id);

  if (!apartment) {
    return <div>Appartement non trouvé</div>;
  }

  return (
    <div>
      <Header />
      <Carousel pictures={apartment.pictures} /> {/* Passer les images en tant que props ici */}
      <Footer />
    </div>
  );
}

export default ApartmentPage;