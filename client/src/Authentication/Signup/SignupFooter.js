import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
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

export default function SignupFooter() {
  return (
    <Container>
      <div className="signuptologin">
        <p>Already have an account?</p> |
        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
          Log In
        </Link>
      </div>
    </Container>
  );
}
