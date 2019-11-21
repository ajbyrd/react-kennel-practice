import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager'
import './LocationForm.css'

class LocationForm extends Component {
    state = {
        name: "",
        address: "",
        phone: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewLocation = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.address === "" || this.state.phone === "") {
            window.alert("Please complete all fields");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                name: this.state.name,
                address: this.state.address,
                phone: this.state.phone,
            };

            LocationManager.post(location)
            .then(() => this.props.history.push("/locations"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder="Location name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="address"
                        placeholder="Address"
                        />
                        <label htmlFor="address">Address</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="phone"
                        placeholder="Phone"
                        />
                        <label htmlFor="phone">Phone Number</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewLocation}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default LocationForm