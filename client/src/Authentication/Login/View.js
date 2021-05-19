import React from "react";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import LoginFooter from "./LoginFooter";
import styled from "styled-components";

// TODO import schema

const Container = styled.div`
  .signup-frgtpass {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
    width: 220px;
  }
  div.loginView {
    color: #ffffff;
    background: linear-gradient(188.86deg, #f264ca 7.05%, #4a00e0 94.22%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default function View() {
  return (
    <Container>
      <div className="loginView">
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </div>
    </Container>
  );
}
