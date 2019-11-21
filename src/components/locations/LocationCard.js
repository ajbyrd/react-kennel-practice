import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Locations.css'


class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>{this.props.location.name}</h3>
          <h4>{this.props.location.address}</h4>
          <h4>{this.props.location.phone}</h4>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Delete Location</button>
          <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default LocationCard;