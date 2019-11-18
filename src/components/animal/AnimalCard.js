import React, { Component } from 'react';

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./Guitar_Hank.JPG')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">Hank</span></h3>
          <p>Breed: Boykin Spaniel</p>
        </div>
      </div>
    );
  }
}

export default AnimalCard;