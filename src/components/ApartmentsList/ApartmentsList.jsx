import React from 'react';
import { NavLink } from 'react-router-dom';
import ApartmentsData from '../../data/ApartmentsData';
import '../../components/ApartmentsList/ApartmentsList.css';

class ApartmentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appartements: [],
        };
    }

    componentDidMount() {
        this.setState({ appartements: ApartmentsData });
    }

    render() {
        return (
            <div className="apartments-container">
                {this.state.appartements.map(apartment => (
                    <NavLink to={`/apartments/${apartment.id}`} key={apartment.id} className="apartment-card">
                        <img src={apartment.cover} alt={apartment.title} />
                        <div className="apartment-info">
                            <h3>{apartment.title}</h3>
                        </div>
                    </NavLink>
                ))}
            </div>
        );
    }
}

export default ApartmentsList;