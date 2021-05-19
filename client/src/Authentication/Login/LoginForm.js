import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser, loggedInUser } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import loadingImg from "../loading-gif-png-5.gif";
import { schema } from "./LoginSchema";

const Container = styled.div`
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

  span {
    color: red;
    font-size: 16px;
    text-align: left;
    width: 75%;
  }

  .loader {
    width: 30px;
  }
`;

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
  };

  //   console.log("formState", formState);
  return (
    <Container>
      {/* -----add form state to loginUser parameter---- */}
      <form onSubmit={handleSubmit(submission)}>
        <input
          placeholder="Email Address"
          type="text"
          {...register("user_email")}
        />
        <span>{errors.user_email?.message}</span>
        <input
          placeholder="Password"
          type="password"
          {...register("user_password")}
        />
        <span>{errors.user_password?.message}</span>

        {/* <span>{errorMessage}</span> */}
        <button type="submit">
          {" "}
          {isLoading ? (
            <img className="loader" src={loadingImg} alt="" />
          ) : (
            "Log In"
          )}{" "}
        </button>
      </form>
    </Container>
  );
}

export default LoginForm;
