import React from "react";
import podChatLogo from "../podchatlogo.svg";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Container = styled.div`
  div.loginView {
    color: #ffffff;
    background: linear-gradient(188.86deg, #f264ca 7.05%, #4a00e0 94.22%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 340px;
    height: 60px;
    left: 18px;
    top: 584px;
    background: #ffffff;
    border-radius: 59px;
    border: none;
    margin-top: 40px;

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #4a01e0;
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

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 339px;
    height: 100px;
  }

  img {
    width: 220px;
    height: 44.48px;
    left: 78px;
    top: 247.31px;
  }

  h2 {
    width: 340px;
    height: 44px;
    left: 18px;
    top: 312.6px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    margin-top: 50px;
  }

  .signup-frgtpass {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
    width: 220px;
  }

  span {
    color: red;
    font-size: 0.5rem;
    text-align: left;
    width: 75%;
  }
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
          <input placeholder="Email Address" />

          <input placeholder="Password" />
        </form>
        <button>Log In</button>
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
      </div>
    </Container>
  );
}
