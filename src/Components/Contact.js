import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (loading) {
    return <Navigate to="/about" />;
  }

  // go back handler
  const goBackHome = () => {
    navigate("/");

    // 1 step back
    // navigate(-1);
  };

  const goToAboutPage = () => {
    console.log("go about page");
    setLoading(true);
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
        className="btn btn-outline-danger btn-sm  d-block  mx-auto my-2 text-center"
        onClick={goBackHome}
      >
        Go Back Home
      </button>
      <button
        className="btn btn-outline-success btn-sm  d-block  mx-auto my-2 text-center"
        onClick={goToAboutPage}
      >
        Go To About Page
      </button>
    </div>
  );
};

export default Contact;
