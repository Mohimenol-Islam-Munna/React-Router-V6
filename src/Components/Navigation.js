import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="my-3">
      <span>
        {" "}
        <Link to="/" className="btn btn-danger me-2">
          Home
        </Link>
      </span>{" "}
      <span>
        {" "}
        <Link to="/about" className="btn btn-success me-2">
          About
        </Link>
      </span>{" "}
      <span>
        {" "}
        <Link to="/contact" className="btn btn-info me-2">
          Contact
        </Link>
      </span>{" "}
      <span>
        {" "}
        <Link to="/settings" className="btn btn-warning me-2">
          Settings{" "}
        </Link>
      </span>
    </div>
  );
};

export default Navigation;
