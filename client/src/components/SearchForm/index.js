import React from "react";
import "./style.css";

export function Input(props) {
  return (
    <input className="search_input" type="text" name="" placeholder="Search..." {...props}/>
  );
}


export function Button(props) {
  return (
    <a href="/" className="search_icon btn btn-success">{props.children}<i className="fas fa-search"></i></a>
  );
}