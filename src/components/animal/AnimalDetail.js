import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'

class AnimalDetail extends Component {

    state = {
        name: "",
        breed: "",
        image: "",
        loadingStatus: true,
    }

    componentDidMount(){
        console.log("AnimalDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to that data; put it into state
        AnimalManager.get(this.props.animalId)
        .then((animal) => {
            this.setState({
                name: animal.name,
                breed: animal.breed,
                image: require(`${animal.image}`),
                loadingStatus: false
            });
        });
    }

    handleDelete = () => {
      //invoke the delete function in AnimalManger and re-direct to the animal list.
      this.setState({loadingStatus: true})
      AnimalManager.delete(this.props.animalId)
      .then(() => this.props.history.push("/animals"))
  }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={this.state.image} alt="My Dog" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed: {this.state.breed}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
          </div>
        </div>
      );
    }

    
}

export default AnimalDetail;