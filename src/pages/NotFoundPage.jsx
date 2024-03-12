import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Error from '../components/ErrorContent/ErrorContent.jsx';

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <Header />
            <Error />
            <Footer />
        </div>
    );
};

export default NotFoundPage;