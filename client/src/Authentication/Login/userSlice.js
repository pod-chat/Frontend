import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// TODO Add loading  state
// TODO Add  error state

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user_id: null,
    user_display_name: "",
    user_email: "",
    user_handle: "",
    user_image: "",
    user_created_on: "",
    error_message: "",
  },
  reducers: {
    initializeUser: (state, action) => {
      const {
        user_id,
        user_display_name,
        user_email,
        user_handle,
        user_image,
        user_created_on,
        error_message,
      } = action.payload;

      state.user_id = user_id;
      state.user_display_name = user_display_name;
      state.user_email = user_email;
      state.user_handle = user_handle;
      state.user_image = user_image;
      state.user_created_on = user_created_on;
      state.error_message = error_message;
    },
  },
});

export const { initializeUser } = userSlice.actions;

export const loginUser = (loginInfo) => {
  return async (dispatch) => {
    try {
      const userInfo = await axios.post(
        "https://podchatapi.herokuapp.com/api/auth/login",
        loginInfo
      );

      localStorage.setItem("token", userInfo.data.token);
      dispatch(initializeUser(userInfo.data.user));
    } catch (err) {
      console.log("err", err.response.data.message);
      // err.error_message = err.response.data.message;
    }
  };
};

export const loggedInUser = (state) => state.user;
export default userSlice.reducer;
