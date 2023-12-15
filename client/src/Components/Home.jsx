import React from "react";

const Home = () => {
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
      <div className="home_page">
        <h1
          className="home_page-heading"
          style={{ fontSize: "45px", fontWeight: 700, color: "#354f52" }}
        >
          Welcome to Home
        </h1>
      </div>
    </section>
  );
};

export default Home;
