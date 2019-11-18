import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./Adam_Hank.JPG')} alt="Owner 1" />
          </picture>
          <h3>Owner Name: <span className="card-ownername">Adam</span></h3>
        </div>
      </div>
    );
  }
}

export default OwnerCard;