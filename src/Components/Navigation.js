import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="my-3">
      <span>
        {" "}
        <NavLink
          to="/"
          className={(activeLink) =>
            activeLink.isActive
              ? "btn btn-danger me-2"
              : "btn btn-outline-danger me-2"
          }
        >
          Home
        </NavLink>
      </span>{" "}
      <span>
        {" "}
        <Link to="/about" className="btn btn-outline-success me-2">
          About
        </Link>
      </span>{" "}
      <span>
        {" "}
        <NavLink
          to="/contact"
          className={(activeLink) =>
            activeLink.isActive
              ? "btn btn-info me-2"
              : "btn btn-outline-info me-2"
          }
        >
          Contact
        </NavLink>
      </span>{" "}
      <span>
        {" "}
        <Link to="/settings" className="btn btn-outline-warning me-2">
          Settings{" "}
        </Link>
      </span>
    </div>
  );
};

export default Navigation;
