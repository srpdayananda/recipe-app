import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loader from "../../router";

const NavigationBar = () => {
  return (
    <>
      <Router>
        <div>
          <div
            style={{
              display: "flex",
              background: "#C0C0C0",
              width: "100%",
            }}
          >
            <div
              style={{
                marginRight: 20,
                fontSize: 20,
                padding: 10,
              }}
            >
              Recipe Book
            </div>
            <div
              style={{
                marginRight: 20,
                fontSize: 20,
                padding: 10,
              }}
            >
              <Link style={{ color: "black", textDecoration: "none" }} to="/">
                Recipes
              </Link>
            </div>
            <div
              style={{
                marginRight: 20,
                fontSize: 20,
                padding: 10,
              }}
            >
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/shopping-list"
              >
                Shopping List
              </Link>
            </div>
            <div
              style={{
                marginLeft: "53rem",
                fontSize: 20,
                padding: 10,
              }}
            >
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/loggedOut"
              >
                Logout
              </Link>
            </div>
          </div>
          <div>
            <Loader />
          </div>
        </div>
      </Router>
    </>
  );
};

export default NavigationBar;
