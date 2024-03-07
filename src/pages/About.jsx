import Header from '../components/Header/Header.jsx';
import BannerAbout from '../components/BannerAbout/BannerAbout.jsx';
import ContentAbout from '../components/ContentAbout/ContentAbout.jsx';
import Footer from '../components/Footer/Footer.jsx';

const About = () => {
    return (
        <div className="about">
            <Header />
            <BannerAbout />
            <ContentAbout />
            <Footer />
        </div>
    );
};

export default About;