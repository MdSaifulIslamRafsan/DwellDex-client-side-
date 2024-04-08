import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/updateProfile"}>Update Profile</NavLink>
      </li>
      <li>
        <NavLink to={"/userProfile"}>User Profile</NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100">
      <div className="navbar max-w-[1440px] w-11/12 lg:w-10/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to={"/"}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className=" font-bold text-xl"
          >
            DwellDex
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleLogout}
              className="btn hover:animate__animated hover:animate__headShake px-5 lg:px-10 relative flex h-5 lg:h-10 items-center justify-center overflow-hidden bg-[#0095ffb7] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#0095FF] before:duration-500 before:ease-out hover:shadow-[#0095FF] hover:before:h-56 hover:before:w-56"
            >
              <span className="relative z-10">Logout</span>
            </button>
          ) : (
            <Link
              to={"/login"}
              className="btn hover:animate__animated hover:animate__headShake px-5 lg:px-10 relative flex h-5 lg:h-10 items-center justify-center overflow-hidden bg-[#0095ffb7] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#0095FF] before:duration-500 before:ease-out hover:shadow-[#0095FF] hover:before:h-56 hover:before:w-56"
            >
              <span className="relative z-10">Login</span>
            </Link>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </nav>
  );
};

export default Navbar;
