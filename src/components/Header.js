import React from "react";

function Header(props) {
  return (
    <div className="jumbotron bg-danger">
      <h1 className="text-light">Employee Directory</h1>
      <h5 className="text-light">
        Click on carrots to filter by heading or use the search box to find an
        employee by name!
      </h5>
    </div>
  );
}

export default Header;
