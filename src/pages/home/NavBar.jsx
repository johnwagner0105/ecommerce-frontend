import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAdmin } from "../../services/user_services";

export const NavBar = () => {
  const navigate = useNavigate();

  const handleRemoveItem = () => {
    localStorage.removeItem("accessToken");
    alert("Se ha cerrado sesión");
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
                <p className="me-3 mb-0">Hola, {userState.name}</p>
                {isAdmin() && (
                  <Link to="/createproduct" className="btn btn-success me-3">
                    Agregar Usuario
                  </Link>
                )}
                <button
                  type="button"
                  className="btn btn-outline-danger"
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
                  <button type="button" className="btn btn-secondary">
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
