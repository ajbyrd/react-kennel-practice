import React, { Component } from 'react'
import './Kennel.css'
import AnimalCard from './animal/AnimalCard'
import EmployeeCard from './employees/EmployeeCard'
import OwnerCard from './owners/OwnerCard';
import LocationCard from './locations/LocationCard';
import NavBar from './nav/NavBar';

class Kennel extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <h2>Student Kennels<br />
                        <small>Loving care when you're not there.</small>
                    </h2>
                    <address>
                        Visit Us at the Downtown Location
                    <br />123 Broadway Street
                </address>
                </div>
                <div>
                    <AnimalCard />
                    <OwnerCard />
                    <LocationCard />
                    <EmployeeCard />
                    
                    
                </div>
            </div>
        );
    }
}

export default Kennel