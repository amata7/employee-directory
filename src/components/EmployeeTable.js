import React, { Component } from "react";
import API from "../utils/API";

class EmployeeTable extends Component {
  state = {
    result: {},
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

    //   <table className="table bg-light container">
    //   <thead>
    //     <tr>
    //       <th scope="col">Image</th>
    //       <th scope="col">Name</th>
    //       <th scope="col">Phone</th>
    //       <th scope="col">Email</th>
    //       <th scope="col">DOB</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <th scope="row">
    //         {employees.map((employee) => (
    //           <td>{employee.picture.thumbnail}</td>
    //         ))}
    //       </th>
    //       {employees.map((employee) => (
    //         <td>
    //           {employee.name.first} {employee.name.last}
    //         </td>
    //       ))}
    //       {employees.map((employee) => (
    //         <td>{employee.cell}</td>
    //       ))}
    //       {employees.map((employee) => (
    //         <td>{employee.email}</td>
    //       ))}
    //       {employees.map((employee) => (
    //         <td>{employee.dob.date}</td>
    //       ))}
    //     </tr>
    //   </tbody>
    // </table>
    return (
      <table className="table bg-light container">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr>
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
