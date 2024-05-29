import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          SMTM
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav justify-content-center w-100">
            <a className="nav-link active" aria-current="page" href="#">
              <Link to="/">Home</Link>
            </a>
            <a className="nav-link" href="#">
              <Link to="/products">Products</Link>
            </a>
            <a className="nav-link" href="#">
              About
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
          </div>
          <div className="navbar-nav ms-auto">
            <button type="button" className="btn btn-secondary">
              Login
            </button>
            <button type="button" className="btn btn-primary ms-2">
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
