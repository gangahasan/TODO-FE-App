import React from 'react'
import { IoIosLogIn } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink ,Link, useNavigate} from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { logoutUser } from '../features/auth/authactions';

const Navbar = () => {
  const user = useSelector((state)=>state.auth.user);
  console.log(user,"user");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout=()=>{
    dispatch(logoutUser());
    navigate("/login")
  }
  return (
    <div className="flex justify-around bg-blue-600 top-0 position-sticky">

      <NavLink to="/">
        <h1 className="text-2xl font-bold text-white">TODO LIST</h1>
      </NavLink>

      {user? (
        <div className="flex gap-4">
          <p className="text-white">{user.email}</p>

          <div className="relative group inline-block">
            <button className="text-white" onClick={handleLogout}>
              <IoIosLogOut color="white" size="30px" />
            </button>
            <span className="absolute bottom-full hidden group-hover:block  text-black font-bold text-xs rounded px-2">
              Logout
            </span>
          </div>
        </div>
      ) : (
        <div className="relative group inline-block">
          <NavLink to="/login" className="">
            <IoIosLogIn color="white" size="30px" />
          </NavLink>
          <span className="absolute bottom-full hidden group-hover:block  text-black font-bold text-xs rounded px-2">
            Login
          </span>
        </div>
      )}
    </div>
  );
}

export default Navbar