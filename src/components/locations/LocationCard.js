import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>{this.props.location.name}</h3>
          <h4>{this.props.location.address}</h4>
          <h4>{this.props.location.phone}</h4>
        </div>
      </div>
    );
  }
}

export default LocationCard;