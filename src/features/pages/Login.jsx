import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../auth/authactions";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const parsedData = loginSchema.parse({ email, password });
      dispatch(loginUser(parsedData));
    } catch (err) {
      if (err instanceof z.ZodError) {
        alert(err.errors[0].message);
      }
    }
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
          LogIn
        </button>
      </form>
      <h3>
        Don't have an account?{" "}
        <Link to="/signUp" className="text-blue-600 font-bold">
          SignUp
        </Link>{" "}
        here!
      </h3>
    </div>
  );
};

export default Login;
