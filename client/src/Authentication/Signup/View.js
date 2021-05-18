import React from "react";
import SignupForm from "./SignupForm";
import SignupFooter from "./SignupFooter";
import SignupHeader from "./SignupHeader";
import styled from "styled-components";

const Container = styled.div`
  .mainView {
    color: #ffffff;
    background: linear-gradient(188.86deg, #f264ca 7.05%, #4a00e0 94.22%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function View() {
  return (
    <Container>
      <div className="mainView">
        <SignupHeader />
        <SignupForm />
        <SignupFooter />
      </div>
    </Container>
  );
}

export default View;
