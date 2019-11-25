import { Route, Redirect } from 'react-router-dom'
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
import OwnerDetail from './owners/OwnerDetail'
import AnimalForm from './animal/AnimalForm'
import LocationForm from './locations/LocationForm'
import Login from './auth/Login'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeEditForm from './employees/EmployeeEditForm'
import OwnerEditForm from './owners/OwnerEditForm'
import LocationEditForm from './locations/LocationEditForm'
import EmployeeWithAnimals from './employees/EmployeeWithAnimals'


class ApplicationViews extends Component {

    // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment>
                <Route path="/login" component={Login} />

                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />

 {/* ANIMALS ROUTE PATHS */}
                {/* Make sure you add the `exact` attribute here */}
                <Route exact path="/animals" render={props => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} />
                }} />
                <Route
                    path="/animals/:animalId(\d+)/edit" render={props => {
                        return <AnimalEditForm {...props} />
                    }}
                />
{/* LOCATIONS ROUTE PATHS */}
                <Route exact path="/locations" render={props => {
                    if (this.isAuthenticated()) {
                        return <LocationList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
                }} />
                <Route path="/locations/new" render={(props) => {
                    return <LocationForm {...props} />
                }} />
                <Route
                    path="/locations/:locationId(\d+)/edit" render={props => {
                        return <LocationEditForm {...props} />
                    }}
                />
{/* EMPLOYEES ROUTE PATHS */}
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route
                    path="/employees/:employeeId(\d+)/edit" render={props => {
                        return <EmployeeEditForm {...props} />
                    }}
                />
                <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
                    return <EmployeeWithAnimals {...props} />
                }} />

{/* OWNERS ROUTE PATHS */}
                <Route exact path="/owners" render={props => {
                    if (this.isAuthenticated()) {
                        return <OwnerList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} />
                }} />

                <Route
                    path="/owners/:ownerId(\d+)/edit" render={props => {
                        return <OwnerEditForm {...props} />
                    }}
                />

            </React.Fragment>
        )
    }
}

export default ApplicationViews