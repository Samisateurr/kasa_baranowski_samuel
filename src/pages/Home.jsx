import Header from '../components/Header/Header.jsx';
import Banner from '../components/Banner/Banner.jsx';
import AppartementsList from '../components/ApartmentsList/ApartmentsList.jsx'; 

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Banner />
            <AppartementsList />
        </div>
    );
};

export default Home;