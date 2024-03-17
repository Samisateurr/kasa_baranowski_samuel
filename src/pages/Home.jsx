import Header from '../components/Header/Header.jsx';
import Banner from '../components/Banner/Banner.jsx';
import AppartementsList from '../components/ApartmentsList/ApartmentsList.jsx'; 
import Footer from '../components/Footer/Footer.jsx';
import BackgroundImageHome from '../assets/images/picture_banner.png'; // Importez l'image de fond pour la page Home

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Banner backgroundImage={BackgroundImageHome} title="Chez vous, partout et ailleurs" isHome={true} />
            <AppartementsList />
            <Footer />
        </div>
    );
};

export default Home;