import React from "react";
import podChatLogo from "./podchatlogo.svg";
import { Route, Link } from "react-router-dom";
import SignUp from "../Signup";
// import ForgotPassword from "../ForgotPassword";
import styled from "styled-components";

const Container = styled.div`
  div.loginView {
    color: #ffffff;
    background: linear-gradient(188.86deg, #f264ca 7.05%, #4a00e0 94.22%);
    height: 100vh;
  }

  button {
    position: absolute;
    width: 340px;
    height: 60px;
    left: 18px;
    top: 584px;
    background: #ffffff;
    border-radius: 59px;
    border: none;
  }

  input {
    color: #ffffff;
    background-color: transparent;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-color: white;
  }

  input::placeholder {
    color: white;
  }

  img {
    position: absolute;
    width: 220px;
    height: 44.48px;
    left: 78px;
    top: 247.31px;
  }

  h2 {
    position: absolute;
    width: 340px;
    height: 44px;
    left: 18px;
    top: 312.6px;

    font-family: Aktiv Grotesk;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }

  /* form {
    position: absolute;
    width: 339px;
    height: 0px;
    left: 18px;
    top: 459px;

    border: 2px solid #ffffff;
  } */
`;

export default function View() {
  return (
    <Container>
      <div className="loginView">
        <img src={podChatLogo} alt="" />
        <h2>
          A place to have meaningful & contextual discussions about interesting
          podcast clips
        </h2>
        <form>
          <input placeholder="EMAIL"></input>
          <input placeholder="PASSWORD"></input>
          <button>Log In</button>
        </form>
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
    </Container>
  );
}
