import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Employees.css'


class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`${this.props.employee.image}`)} alt="Employee 1" />
          </picture>
          <h3><span className="card-employeename">{this.props.employee.name}</span></h3>
          <p>Employee since 2013</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Terminate</button>
          <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;