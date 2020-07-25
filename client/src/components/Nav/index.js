import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth,
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <div className="container">
      <nav className="navbar  navbar-light  mb-2">
        <Link className="navbar-brand title" to="/">
          Google Books
          <strong> Search </strong>
          and
          <strong> List</strong>
        </Link>
     
            <Link
              onClick={this.toggleNav}
              className={
                window.location.pathname === "/saved"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/saved"
            >
              Reading List
            </Link>
         
      </nav>
      </div>
    );
  }
}

export default Nav;
