import React, { Component } from 'react';
import './Animal.css'

class AnimalCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                  <picture>
                    <img src={require(`${this.props.animal.image}`)} alt="My Dog" />
                  </picture>
                  <h2><span className="card-petname">{this.props.animal.name}</span></h2>
                  <p>{this.props.animal.breed}</p>
                </div>
            </div>
        );
    }
}

export default AnimalCard;