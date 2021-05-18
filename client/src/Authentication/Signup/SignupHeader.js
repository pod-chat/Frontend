import React from "react";
import podChatLogo from "../podchatlogo.svg";
import styled from "styled-components";

const Container = styled.div`
  img {
    width: 100%;
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
`;

export default function SignupHeader() {
  return (
    <Container>
      <div className="mainHeader">
        <img src={podChatLogo} alt="" />
        <h2>Thank you for signing up with PodChat!</h2>
      </div>
    </Container>
  );
}
