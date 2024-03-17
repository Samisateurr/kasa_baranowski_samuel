import Header from '../components/Header/Header.jsx';
import BackgroundImageAbout from '../assets/images/banner_about.png'; // Importez l'image de fond pour la page About
import ContentAbout from '../components/ContentAbout/ContentAbout.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Banner from '../components/Banner/Banner.jsx';

const About = () => {
    return (
        <div className="about">
            <Header />
            <Banner backgroundImage={BackgroundImageAbout} title="" isAbout={true} />
            <ContentAbout />
            <Footer />
        </div>
    );
};

export default About;