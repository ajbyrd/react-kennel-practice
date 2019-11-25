import React, { Component } from "react"
import LocationManager from "../../modules/LocationManager"
import "./LocationForm.css"

class LocationEditForm extends Component {
    //set the initial state
    state = {
        name: "",
        address: "",
        phone: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingLocation = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedLocation = {
            id: this.props.match.params.locationId,
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone
        };

        LocationManager.update(editedLocation)
            .then(() => this.props.history.push("/locations"))
    }

    componentDidMount() {
        LocationManager.get(this.props.match.params.locationId)
            .then(location => {
                this.setState({
                    name: location.name,
                    address: location.address,
                    phone: location.phone,
                    loadingStatus: false,
                });
            });
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="locationName"
                                value={this.state.name}
                            />
                            <label htmlFor="locationName">Location name</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="adress"
                                value={this.state.address}
                            />
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="phone"
                                value={this.state.phone}
                            />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingLocation}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default LocationEditForm