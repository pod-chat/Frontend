import React, { useEffect, useState } from "react";
import podChatLogo from "../podchatlogo.svg";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { loginUser, loggedInUser } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
// TODO import schema

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
    margin-top: 30px;

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
    height: 200px;
    margin-top: 15px;
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
    font-size: 16px;
    text-align: left;
    width: 75%;
  }

  .loader {
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default function View() {
  const { register, handleSubmit, formState, setValue } = useForm();
  // const [error, setError] = useState(false);
  // TODO we want error state from userSlice
  const user = useSelector(loggedInUser);

  const dispatch = useDispatch();
  let history = useHistory();

  // TODO figure out how to history to the previous page
  useEffect(() => {
    if (user.user_id != null) {
      history.push("/");
    }
  }, [user]);

  const submission = (submit) => {
    console.log("long variable", submit);
    dispatch(loginUser(submit));
  };

  console.log("formState", formState);
  return (
    <Container>
      <div className="loginView">
        <img src={podChatLogo} alt="" />
        <h2>
          A place to have meaningful & contextual discussions about interesting
          podcast clips
        </h2>
        {/* -----add form state to loginUser parameter---- */}
        <form onSubmit={handleSubmit(submission)}>
          <input placeholder="Email Address" {...register("user_email")} />

          <input placeholder="Password" {...register("user_password")} />
          {/* {error ? <span className="loader">Loading...</span> : <span></span>} */}
          <button>Log In</button>
        </form>
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
