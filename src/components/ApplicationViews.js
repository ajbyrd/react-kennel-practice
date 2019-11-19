import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
// import AnimalCard from './animal/AnimalCard'
//only include these once they are built - previous practice exercise
// import LocationCard from './locations/LocationCard'
// import EmployeeCard from './employees/EmployeeCard'
// import OwnerCard from './owners/OwnerCard'
import AnimalList from './animal/AnimalList'
import OwnerList from './owners/OwnerList'
import EmployeeList from './employees/EmployeeList'
import LocationList from './locations/LocationList'


class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList />
                }} />
                <Route path="/locations" render={(props) => {
                    return <LocationList />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews