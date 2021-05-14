import React, { Component } from "react";

class EmployeeTable extends Component {
  state = {
    result: {},
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/")
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
      <div className="container">
        {employees.map((employee) => (
          <h1>{employee.name.first}</h1>
        ))}
        {employees.map((employee) => (
          <h1>{employee.name.last}</h1>
        ))}
        {employees.map((employee) => (
          <img
            src={employee.picture.medium}
            alt={employee.name.first + " " + employee.name.last}
          />
        ))}
      </div>
    );
    // return (
    //   <table className="table bg-light">
    //     <thead>
    //       <tr>
    //         <th scope="col">Image</th>
    //         <th scope="col">Name</th>
    //         <th scope="col">Phone</th>
    //         <th scope="col">Email</th>
    //         <th scope="col">DOB</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <th scope="row">
    //           <a href="https://placeholder.com">
    //             <img
    //               src="https://via.placeholder.com/150"
    //               alt="placeholder"
    //             ></img>
    //           </a>
    //         </th>
    //         <td>Thomas Shelby</td>
    //         <td>222-222-2222</td>
    //         <td>peaky-blinders@london.com</td>
    //         <td>REDACTED</td>
    //       </tr>
    //       <tr>
    //         <th scope="row">
    //           <a href="https://placeholder.com">
    //             <img
    //               src="https://via.placeholder.com/150"
    //               alt="placeholder"
    //             ></img>
    //           </a>
    //         </th>
    //         <td>Chester Campbell</td>
    //         <td>157-624-8964</td>
    //         <td>wolfman@cane.com</td>
    //         <td>08/24/1884</td>
    //       </tr>
    //       <tr>
    //         <th scope="row">
    //           <a href="https://placeholder.com">
    //             <img
    //               src="https://via.placeholder.com/150"
    //               alt="placeholder"
    //             ></img>
    //           </a>
    //         </th>
    //         <td>Grace Burgess</td>
    //         <td>426-672-2690</td>
    //         <td>blond@spy.com</td>
    //         <td>03/04/1924</td>
    //       </tr>
    //     </tbody>
    //   </table>
    // );
  }
}

export default EmployeeTable;
