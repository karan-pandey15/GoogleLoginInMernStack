import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [userData, setUserData] = useState({});
  // console.log("User Data", userData);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:6010/login/success", {
        withCredentials: true,
      });
      // console.log("Response ", response);
      setUserData(response.data.user);
    } catch (error) {
      console.log("Error", error);
    }
  };

  // Logout handle
  const logout = () => {
    window.open("http://localhost:6010/logout", "_self");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <header>
        <nav
          style={{
            backgroundColor: "darkcyan",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="navbar"
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2
              className="navbar_logo"
              style={{
                color: "#fefae0",
                fontWeight: 900,
                fontSize: "40px",
                lineHeight: "80px",
              }}
            >
              <span className="logo_text">Shivam.</span>
            </h2>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                listStyle: "none",
              }}
            >
              <li>
                <Link
                  style={{
                    textDecoration: "none",
                    marginRight: "21px",
                    color: "#ccd5ae",
                    fontWeight: 600,
                  }}
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              {Object?.keys(userData)?.length > 0 ? (
                <>
                  <li>
                    <Link
                      style={{
                        textDecoration: "none",
                        marginRight: "21px",
                        color: "#ccd5ae",
                        fontWeight: 600,
                      }}
                      to={"/dashboard"}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        textDecoration: "none",
                        marginRight: "21px",
                        color: "#ccd5ae",
                        fontWeight: 600,
                      }}
                      onClick={logout}
                    >
                      Logout
                    </Link>
                  </li>
                  <li
                    style={{
                      marginRight: "11px",
                      color: "#fefae0",
                      fontSize: "22px",
                      fontWeight: 600,
                    }}
                  >
                    {userData?.displayName}
                  </li>
                  <li>
                    <img
                      src={userData?.image}
                      style={{
                        width: "50px",
                        borderRadius: "50%",
                      }}
                      alt="User"
                    />
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    style={{
                      textDecoration: "none",
                      marginRight: "21px",
                      color: "#ccd5ae",
                      fontWeight: 600,
                    }}
                    to={"/login"}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
