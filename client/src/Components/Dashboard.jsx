import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:6010/login/success", {
        withCredentials: true,
      });
      // console.log("Response ", response);
      setUserData(response.data.user);
    } catch (error) {
      navigate("*");
    }
  };

  useEffect(() => {
    getUser();
  }, []);
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
        <h2
          className="home_page-heading"
          style={{ fontSize: "40px", fontWeight: 700, color: "#283618" }}
        >
          Hi, {userData.displayName}
        </h2>
        <h1
          className="home_page-heading"
          style={{ fontSize: "45px", fontWeight: 700, color: "#354f52" }}
        >
          Welcome to Dashboard
        </h1>
      </div>
    </section>
  );
};

export default Dashboard;
