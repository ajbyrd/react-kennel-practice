import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'

class LocationDetail extends Component {

    state = {
        name: "",
        phone: ""
    }

    componentDidMount() {
        console.log("LocationDetail: ComponentDidMount");
        //get(id) from OwnerManager and hang on to the data; put it into state
        OwnerManager.get(this.props.locationId)
            .then((location) => {
                this.setState({
                    name: location.name,
                    address: location.address,
                    phone: location.phone
                });
            });
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3><span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <h4>{this.state.address}</h4>
                    <h4>{this.state.phone}</h4>
                </div>
            </div>
        );
    }
}

export default LocationDetail;