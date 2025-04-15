import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { authLogin, authLogout, authSignUp } from "./authSlice";

// Signup action
export const signUpUser = ({ email, password }) => async (dispatch) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("hello")
       dispatch(authSignUp(userCredential.user));
      console.log(userCredential,"user");

    } catch (error) {
      console.error("Signup Error:", error.message);
    }
  };

// Login action
export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential,"user");
          dispatch(authLogin(userCredential.user));

    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

// Logout action
export const logoutUser = () => async (dispatch) => {
  try {
    await signOut(auth);
        dispatch(authLogout());

  } catch (error) {
    console.error("Logout Error:", error.message);
  }
};
