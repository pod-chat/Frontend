import * as yup from "yup";

export const schema = yup.object().shape({
  user_email: yup.string().required("Email is required").email().trim(),
  user_password: yup.string().required("Password is required").trim(),
});
