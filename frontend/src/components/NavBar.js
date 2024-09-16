import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import logo from "../assets/bc-logo.png";
import { Button } from "bootstrap";

const Navbar = () => {
  return (
    <nav class="navbar  navbar-expand-lg bg-white">
      <div class="container-fluid">
        <Link to={"/"} class="navbar-brand p-0 me-5">
          <img
            src={logo}
            alt="BerozCars Logo"
            width="210"
            height="70"
            // style={{ objectFit: "contain" }}
          />
        </Link>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-2">
              <button type="button" className="btn btn-primary ">
                <Link className="nav-link p-0 fw-bold" to="/find-cars">
                  Find Cars
                </Link>
              </button>
            </li>
            <li className="nav-item me-2">
              <button type="button" className="btn btn-primary ">
                <Link className="nav-link p-0 fw-bold" to="/buy-used-car">
                  Buy Cars
                </Link>
              </button>
            </li>
            <li className="nav-item me-2">
              <button type="button" className="btn btn-primary disabled">
                <Link
                  className="nav-link p-0 fw-bold disabled"
                  to="/sell-my-car"
                >
                  Sell Car
                </Link>
              </button>
            </li>
          </ul>

          <div class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Location
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Bengaluru/Bangalore
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Hyderabad
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Chennai
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Other
                </a>
              </li>
            </ul>
          </div>
          <div>
            <i class="bi bi-geo-alt ms-4"></i>
          </div>
          <form class="d-flex" role="search">
            <input
              class="form-control ms-4 me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success me-2" type="submit">
              Search
            </button>
          </form>
          <button type="button" className="btn btn-primary ms-2">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
