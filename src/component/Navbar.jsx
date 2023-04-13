import React from "react";
import { FiLogIn } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.cart.value);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-light py-3 shadow-sm fixed-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            DA COLLECTIONS
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark ms-2">
                <FiLogIn className="me-1" />
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <FiUserPlus className="me-1" />
                Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <FaShoppingCart className="me-1" />
                Cart({state ? state.length : 0})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
