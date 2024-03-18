import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../components/ErrorContent/ErrorContent.css';
import error from '../../assets/images/error.png';

const Error = () => {
    return (
        <div className='error-container'>
            <img src={error} alt="Logo erreur" className="error-img" />
            <h1>Oups! La page que vous demandez n'existe pas.</h1>
            <nav>
                <NavLink to="/" >Retourner sur la page d'accueil</NavLink>
            </nav>
        </div>
    );
};

export default Error;
