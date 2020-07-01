import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <div className="container h-100">
    <div className="d-flex justify-content-center h-100">
      <div className="searchbar">
        <input className="search_input" type="text" name="" placeholder="Search..." {...props}/>
        <a href="#" className="search_icon">{props.children}<i class="fas fa-search"></i></a>
      </div>
    </div>
  </div>
  );
}

export default SearchForm;
