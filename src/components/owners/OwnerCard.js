import React, { Component } from 'react';
import './Owners.css'


class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require(`${this.props.owner.image}`)} alt="Owner 1" />
          </picture> */}
          <h3><span className="card-ownername">{this.props.owner.name}</span></h3>
          <button type="button" onClick={() => { this.props.history.push(`/owners/${this.props.owner.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Delete Owner</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;