import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css'

class EmployeeDetail extends Component {

  state = {
      name: "",
  }

  componentDidMount(){
    console.log("EmployeeDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    EmployeeManager.get(this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name,
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require(`${this.state.image}`)} alt="My Dog" />
          </picture> */}
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;