import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  console.log("Outlet :::", Outlet);
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
      <h2>About component </h2>
      <div
        style={{
          width: "50%",
          border: "1px solid palegreen",
          padding: "10px 10px",
          margin: "10px auto",
          borderRadius: "10px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default About;
