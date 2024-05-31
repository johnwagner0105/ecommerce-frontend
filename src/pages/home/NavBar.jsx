import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const handleRemoveItem = () => {
    localStorage.removeItem("accessToken");
    alert("Se ha cerrado sesion");
    navigate("/");
    window.location.reload();
  };

  const [userState, setUserState] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserState(decodedToken);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          SMTM
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {userState ? (
              <>
                <p className="me-3">Hola, {userState.name}</p>
                <button
                  type="button"
                  className="btn btn-outline-danger me-3"
                  onClick={handleRemoveItem}
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button type="button" className="btn btn-primary me-3">
                    Login
                  </button>
                </Link>
                <Link to="/createuser">
                  <button type="button" className="btn btn-primary">
                    Signup
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
