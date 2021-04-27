import React from "react";
import SignupForm from "./SignupForm";
import SignupFooter from "./SignupFooter";
import SignupHeader from "./";
import styled from "styled-components";

const Container = styled.div`
  div {
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
      <SignupHeader />
      <SignupForm />
      <SignupFooter />
    </Container>
  );
}
