import React, { Component } from 'react';

class AnimalCard extends Component {
    render() {
        return (
            <div id="animalCards">
                <div className="card">
                    <div className="card-content">
                        <picture>
                            <img src={require('./dog.svg')} alt="My Dog" />
                        </picture>
                        <h3>Name: <span className="card-petname">Hank</span></h3>
                        <p>Breed: Boykin Spaniel</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <picture>
                            <img src={require('./Lilly_Smile.jpg')} alt="My Dog" />
                        </picture>
                        <h3>Name: <span className="card-petname">Lilly</span></h3>
                        <p>Breed: Golden Retriever</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <picture>
                            <img src={require('./Daisy_Wink.jpg')} alt="My Dog" />
                        </picture>
                        <h3>Name: <span className="card-petname">Daisy</span></h3>
                        <p>Breed: AussieDoodle</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnimalCard;