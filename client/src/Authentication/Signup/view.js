import React from "react";
import styled from "styled-components";
import podChatLogo from "../podchatlogo.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  div.signUpView {
    color: #ffffff;
    background: linear-gradient(188.86deg, #f264ca 7.05%, #4a00e0 94.22%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 220px;
    height: 44.48px;
    left: 78px;
    top: 247.31px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 339px;
    height: 250px;
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

  div.signuptologin {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
    width: 252px;
    height: 21px;
  }

  p {
    margin: 0;
  }
`;

export default function View() {
  return (
    <Container>
      <div className="signUpView">
        <img src={podChatLogo} alt="" />
        <h2>Thank you for signing up with PodChat!</h2>
        <form>
          <input placeholder="Full Name"></input>
          <input placeholder="Email"></input>
          <input placeholder="@Username"></input>
          <input placeholder="Password"></input>
          <input placeholder="Confirm Password"></input>
        </form>
        <button>Sign Up</button>
        <div className="signuptologin">
          <p>Already have an account?</p> |
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            Log In
          </Link>
        </div>
      </div>
    </Container>
  );
}
