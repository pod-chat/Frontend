import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { schema } from "./SignUpSchema";
import axios from "axios";
import styled from "styled-components";
import loadingImg from "../loading-gif-png-5.gif";

const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 339px;
    /* height: 250px; */
    height: 370px;
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

  button {
    width: 340px;
    height: 60px;
    left: 18px;
    top: 584px;
    background: #ffffff;
    border-radius: 59px;
    border: none;
    margin-top: 40px;

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #4a01e0;
  }

  .errorMessage {
    background-color: white;
    height: 22px;
    border-radius: 10px;
  }
  span {
    color: red;
    font-size: 15px;
    text-align: left;
    width: 250px;
    /* margin-left: 10px; */
  }

  .loader {
    width: 30px;
  }
`;

export default function SignUpForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  let history = useHistory();

  const onSubmit = (user) => {
    const { user_display_name, user_email, user_handle, user_password } = user;
    const newUser = {
      user_display_name,
      user_email,
      user_handle,
      user_password,
    };

    axios
      .post("https://podchatapi.herokuapp.com/api/auth/register", newUser)
      .then((res) => {
        setValue("user_display_name", "");
        setValue("user_email", "");
        setValue("user_handle", "");
        setValue("user_password", "");
        setValue("confirmPassword", "");
        history.push("/login");
      })
      .catch((err) => setErrorMessage(err.response.data.message));
    setIsLoading(true);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Display Name"
          {...register("user_display_name")}
        />

        <span>{errors.user_display_name?.message}</span>

        <input type="text" placeholder="Email" {...register("user_email")} />
        <span>{errors.user_email?.message}</span>

        <input type="text" placeholder="@Handle" {...register("user_handle")} />
        <span>{errors.user_handle?.message}</span>

        <input
          type="password"
          placeholder="Password"
          {...register("user_password")}
        />
        <span>{errors.user_password?.message}</span>

        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <span>{errors.confirmPassword?.message}</span>

        <span>{errorMessage}</span>
        <button type="submit">
          {" "}
          {isLoading ? (
            <img className="loader" src={loadingImg} alt="" />
          ) : (
            "Sign Up"
          )}{" "}
        </button>
      </form>
    </Container>
  );
}
