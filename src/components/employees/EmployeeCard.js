import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./Willie_Nelson.jpg')} alt="Employee 1" />
          </picture>
          <h3>Employee Name: <span className="card-employeename">Willie</span></h3>
          <p>Employee since 2013</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;