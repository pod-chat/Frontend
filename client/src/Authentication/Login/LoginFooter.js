import React from "react";
import { Link } from "react-router-dom";

function LoginFooter() {
  return (
    <div className="signup-frgtpass">
      <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
        Sign Up
      </Link>
      |
      <Link
        to="/forgot-password"
        style={{ textDecoration: "none", color: "white" }}
      >
        Forgot Password?
      </Link>
    </div>
  );
}

export default LoginFooter;
