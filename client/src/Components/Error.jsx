import React from "react";
import NotPage from "../assets/404Page.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <section
      style={{
        backgroundColor: "#cad2c5",
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="home_page"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img style={{ height: "300px" }} src={NotPage} alt="404 Not Found" />
        <h1
          className="home_page-heading"
          style={{ fontSize: "45px", fontWeight: 700, color: "#354f52" }}
        >
          Ooops, 404 Not Found!
        </h1>
        <button
          style={{
            padding: "8px 20px",
            backgroundColor: "#344e41",
            border: "none",
            borderRadius: "6px",
            color: "#fefae0",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default Error;
