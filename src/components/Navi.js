import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <nav id="bar" className="navbar">
          <li className="nav-item col-2">
            <a className="nav-link " href="/" id="raisley">
              HOME
            </a>
          </li>
          <li className="nav-item col-2 ">
            <a className="nav-link" href="#">
              ABOUT
            </a>
          </li>
          <li className="nav-item col-2 ">
            <Link to="/contact">
              <li className="nav-item col-2 ">Contact</li>
            </Link>
          </li>
          <li className="nav-item col-2">
            <a className="nav-link" href="#">
              LIBRARY
            </a>
          </li>
          <Link to="/cart">
            <li className="nav-item col-2 ">CART</li>
          </Link>
        </nav>
      </div>
    );
  }
}
