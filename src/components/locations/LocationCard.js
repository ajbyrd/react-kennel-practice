import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Locations.css'


class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>{this.props.locations.name}</h3>
          <h4>{this.props.locations.address}</h4>
          <h4>{this.props.locations.phone}</h4>
          <button type="button" onClick={() => { this.props.history.push(`/locations/${this.props.locations.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.locations.id)}>Delete Location</button>
          <Link to={`/locations/${this.props.locations.id}/details`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default LocationCard;