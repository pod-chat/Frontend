import * as yup from "yup";

export const schema = yup.object().shape({
  user_display_name: yup.string().required("Full name is required").trim(),
  user_email: yup.string().required("Email is required").email().trim(),
  user_handle: yup
    .string()
    .required("Handle is required")
    .matches(/@/, "Handle must have @")
    .trim(),
  user_password: yup.string().required("Password is required").trim(),
  confirmPassword: yup
    .string()
    .required("Password confirmation required")
    .oneOf([yup.ref("user_password"), null], "Passwords must match")
    .trim(),
});
// TODO Change user_handle to require "@" at the beginning of the string not just include it
