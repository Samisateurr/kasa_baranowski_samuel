import Header from '../components/Header/Header.jsx';
import Banner from '../components/Banner/Banner.jsx';
import AppartementsList from '../components/ApartmentsList/ApartmentsList.jsx'; 
import Footer from '../components/Footer/Footer.jsx';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Banner />
            <AppartementsList />
            <Footer />
        </div>
    );
};

export default Home;