import React from "react";

function SearchBox(props) {
  return (
    <div className="bg-sucess">
      <form>
        <div className="mb-3">
          <input type="text" placeholder="Search" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
