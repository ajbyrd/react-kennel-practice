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
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './locations/LocationDetail'
import EmployeeDetail from './employees/EmployeeDetail'
import OwnerDetail from './owners/OwnerDetail'
import AnimalForm from './animal/AnimalForm'
import LocationForm from './locations/LocationForm'

class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                {/* ANIMALS ROUTE PATHS */}
                {/* Make sure you add the `exact` attribute here */}
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} />
                }} />
                {/* LOCATIONS ROUTE PATHS */}
                <Route exact path="/locations" render={(props) => {
                    return <LocationList />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
                }} />
                <Route path="/locations/new" render={(props) => {
                    return <LocationForm {...props} />
                }}/>
                {/* EMPLOYEES ROUTE PATHS */}
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} />
                }} />
                {/* OWNERS ROUTE PATHS */}
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} />
                }} />

            </React.Fragment>
        )
    }
}

export default ApplicationViews