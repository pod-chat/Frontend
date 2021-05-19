import React, { useState, useEffect } from "react";
import styled from "styled-components";
import downArrow from "./downArrow.svg";
import upArrow from "./upArrow.svg";

//Styling - Styled Components
const Container = styled.div`
  height: 60px;
  padding: 0px 15px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;

  .selectedFeed {
    display: flex;
    width: 85px;
  }

  .newPostBtn {
    margin-left: 2350px;
    color: #4e04e0;
  }

  .downArrow {
    margin-left: 8px;
  }
  .upArrow {
    margin-left: 8px;
  }
  .feedMenu {
    position: absolute;
    width: 120px;
    height: 70px;
    left: 11px;
    margin-left: 19px;
    margin-top: 10px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h3 {
    margin-left: 10px;
  }

  .feedSelect {
    margin-left: 20px;
  }
`;

//TODO Render h2.headerSelect dynamically (popular or newest)

export default function FeedSelect() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    window.addEventListener("load", setIsOpen(false));
  }, []);

  const selectFeed = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <div className="feedSelect" onClick={selectFeed}>
        <div className="selectedFeed">
          <h2 className="headerSelect">Popular</h2>
          {isOpen ? (
            <img className="upArrow" src={upArrow} alt="" />
          ) : (
            <img className="downArrow" src={downArrow} alt="" />
          )}
        </div>
        {isOpen && (
          <div className="feedMenu">
            <h3>Popular</h3>
            <h3>Newest</h3>
          </div>
        )}
      </div>

      <h2 className="newPostBtn">New Post</h2>
    </Container>
  );
}
