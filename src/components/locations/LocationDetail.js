import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

    state = {
        name: "",
        address: "",
        phone: "",
        loadingStatus: true,
    }

    componentDidMount() {
        console.log("LocationDetail: ComponentDidMount");
        //get(id) from LocationManager and hang on to the data; put it into state
        LocationManager.get(this.props.locationId)
            .then((location) => {
                this.setState({
                    name: location.name,
                    address: location.address,
                    phone: location.phone,
                    loadingStatus: false
                });
            });
    }

    handleDelete = () => {
        this.setState({loadingStatus: true})
        LocationManager.delete(this.props.locationId)
        .then(() => this.props.history.push("/locations"))
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3><span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <h4>{this.state.address}</h4>
                    <h4>{this.state.phone}</h4>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Location</button>
                </div>
            </div>
        );
    }
}

export default LocationDetail;