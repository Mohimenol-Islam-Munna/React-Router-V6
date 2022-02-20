import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  // go back handler
  const goBackHome = () => {
    console.log("go back home");
    navigate("/");
  };

  return (
    <div
      style={{
        width: "50%",
        border: "1px solid salmon",
        padding: "20px 10px",
        margin: "20px auto",
        borderRadius: "10px",
      }}
    >
      Contact component
      <button
        className="btn btn-danger btn-sm  d-block  mx-auto my-2 text-center"
        onClick={goBackHome}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Contact;
