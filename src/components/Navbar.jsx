import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import './Navbar.css';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 mb-0">
      <div className="container-fluid">
        <Link
          className="navbar-brand fw-bold fs-4 text-warning d-flex align-items-center gap-2"
          to="/"
        >
          BM
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="Indian Flag"
            width="30"
            height="20"
            style={{ borderRadius: "3px", objectFit: "cover" }}
          />
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
          <ul className="navbar-nav mx-auto gap-4">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                <RiAccountCircleLine style={{ marginBottom: "6px" }} /> Account
              </Link>
            </li>
          </ul>

          <form className="d-flex align-items-center gap-2 me-3" role="search">
            <input
              className="form-control form-control-sm me-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "200px", borderRadius: "10px" }}
            />
            <button
              className="btn btn-outline-success btn-sm px-3"
              type="submit"
            >
              Search
            </button>
          </form>

          <div className="d-flex gap-2">
            <button className="btn btn-success btn-sm px-3 fw-semibold">
              Log In
            </button>
            <button className="btn btn-success btn-sm px-3 fw-semibold">
              Sign Up
            </button>
            <Link
              to={"/cart"}
              style={{ textDecoration: "none", fontWeight: "bolder" }}
            >
              <button
                className="btn btn-outline-warning btn-sm px-2 d-flex align-items-center"
                style={{ borderRadius: "10px" }}
              >
                <FaCartShopping size={20} /> Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
