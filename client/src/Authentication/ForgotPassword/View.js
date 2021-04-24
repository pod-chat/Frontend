import React from "react";
import podChatLogoChat from "./podchatlogo-chat.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  div.forgotPasswordView {
    color: #ffffff;
    background: linear-gradient(188.86deg, #f264ca 7.05%, #4a00e0 94.22%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button.resetPass {
    width: 340px;
    height: 60px;
    left: 18px;
    top: 584px;
    background: #ffffff;
    border-radius: 59px;
    border: none;
    margin-top: 150px;
    margin-bottom: 50px;

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #4a01e0;
  }

  img {
    width: 153.07px;
    height: 89.29px;
    left: 105px;
    top: 158px;
  }

  h2 {
    width: 340px;
    height: 66px;
    left: 18px;
    top: 268px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;

    color: #ffffff;
  }

  input {
    color: #ffffff;
    background-color: transparent;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-color: white;

    width: 339px;
    left: 18px;
    top: 412px;
  }

  input::placeholder {
    color: white;
  }
`;

export default function View() {
  return (
    <Container>
      <div className="forgotPasswordView">
        <img src={podChatLogoChat} alt="" />
        <h2>
          Please enter your email address below, and we will send you a link so
          you can reset your password.
        </h2>
        <form>
          <input placeholder="Email Address"></input>
        </form>
        <button className="resetPass">Reset Password</button>
        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
          X Close
        </Link>
      </div>
    </Container>
  );
}
