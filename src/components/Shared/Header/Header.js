import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  // call to data cart item
  const { cartItems } = useSelector((state) => state.cartReducer);

  //set user in ui

  const { user } = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            SMART SHOPPING
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
            <span className="navbar-toggler-icon">
              <FaBars size={25} color="white"></FaBars>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text-white ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {user.email.slice(0, 5)}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  logout
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart {cartItems.length}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
