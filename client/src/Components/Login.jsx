import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const loginWithGoogle = () => {
    window.open("http://localhost:6010/auth/google/callback", "_self");
  };

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
      <div className="login_page">
        <h1
          className="login_text"
          style={{
            color: "#354f52",
            textAlign: "center",
            fontSize: "40px",
            fontWeight: 700,
          }}
        >
          Login
        </h1>
        <div className="form">
          <form
            className="login_form"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "20px 0",
            }}
          >
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              autoComplete="off"
              style={{
                border: "1px solid #354f52",
                padding: "11px",
                backgroundColor: "transparent",
                marginBottom: "12px",
                borderRadius: "6px",
                width: "250px",
              }}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              style={{
                border: "1px solid #354f52",
                padding: "11px",
                backgroundColor: "transparent",
                marginBottom: "12px",
                borderRadius: "6px",
                width: "250px",
              }}
            />
            <button className="login_btn">Login</button>
            <p
              style={{
                fontSize: "14px",
                marginTop: "12px",
                color: "#16422c",
                fontWeight: 500,
              }}
            >
              Not Registered?{" "}
              <Link
                style={{ textDecoration: "none", color: "#0096c7" }}
                to={"#"}
              >
                Create an Account
              </Link>
            </p>
          </form>
          <hr />
          <button
            className="sign_in_with_google"
            style={{
              marginTop: "11px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={loginWithGoogle}
          >
            <img
              src="https://www.pngmart.com/files/16/Google-Logo-PNG-Image.png"
              alt="Google Logo"
              width="35px"
            />
            <span>Sign In With Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
