import React from "react";
import Header from "./Header";
import SearchBox from "./SearchBox";
import EmployeeTable from "./EmployeeTable";

function Container(props) {
  return (
    <div>
      <div className="container-fluid">
        <Header />
        <SearchBox />
        <EmployeeTable />
      </div>
    </div>
  );
}

export default Container;
