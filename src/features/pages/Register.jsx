import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../auth/authactions";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser({ email, password }));
    navigate("/login");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-100 h-auto shadow-md flex flex-col gap-4 place-items-center mx-auto my-6 p-4"
      >
        <input
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          className="outline-0 p-2 border-1 border-gray-400 rounded-md w-80"
        />
        <input
          type="password"
          value={password}
          autoComplete="on"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          className="outline-0 p-2 border-1 border-gray-400 rounded-md w-80"
        />
        <button
          type="submit"
          className="w-30 border-1 p-2 bg-blue-600 text-white rounded-4xl cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
