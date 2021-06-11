import React, { Component } from "react";
import API from "../utils/API";

class EmployeeTable extends Component {
  state = {
    result: {},
    search: "",
  };

  componentDidMount() {
    fetch(API.url)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          employees: response.results,
        });
      });
  }

  render() {
    const { employees } = this.state;
    if (!employees) {
      return <h1>Something went wrong!</h1>;
    }
    return (
      <table className="table bg-light container">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">
              Name<span>^</span>
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.login.username}>
              <th scope="row">
                <a href={employee.picture.medium}>
                  <img src={employee.picture.medium} alt="placeholder"></img>
                </a>
              </th>
              <td>
                {employee.name.first} {employee.name.last}
              </td>
              <td>{employee.cell}</td>
              <td>{employee.email}</td>
              <td>{employee.dob.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default EmployeeTable;
