import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "../types";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../types";

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      formData
    );

    console.log(res);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    navigate("/admin");
  } catch (err) {
    dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
  }
};

export const register = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register", // Update the endpoint as needed
      formData
    );

    console.log(res);

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    navigate("/login"); // Redirect to login or another page after successful registration
  } catch (err) {
    dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
  }
};
