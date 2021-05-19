import React from "react";
import styled from "styled-components";
import chatImg from "./Subtract.svg";
import bellIcon from "./bellicon.svg";
import dummyImg from "./bernie-reactions-1611164909 2.svg";

//Styling - Styled Components
const Container = styled.div`
  width: 100%;
  height: 50px;
  left: 0px;
  top: 0px;

  background: linear-gradient(268.99deg, #f364cb -0.92%, #4a01e0 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;

  .dummyImg {
    width: 24px;
    height: 24px;
    left: 331px;
    top: 13px;

    border-radius: 28px;
  }

  .bell_userImg {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 93.5%;
    width: 80px;
  }

  .chatImg {
    margin-left: 30px;
  }
`;

//TODO navigation box shadow

export default function View() {
  return (
    <Container>
      <img className="chatImg" src={chatImg} alt="" />
      <div className="bell_userImg">
        <img className="bellIcon" src={bellIcon} alt="" />
        <img className="dummyImg" src={dummyImg} alt="" />
      </div>
    </Container>
  );
}
