import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home" />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a href="/contact/add" className="nav-link">
              <i className="fas fa-plus" />
              Add
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              <i className="fas fa-question" />
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
