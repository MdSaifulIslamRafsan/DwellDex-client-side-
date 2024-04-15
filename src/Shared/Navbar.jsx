import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);

  console.log(user);

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/updateProfile"}>Update Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/userProfile"}>User Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-100 w-full shadow-2xl z-50 fixed top-0">
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

        
        <div className="pointer group relative mx-4 flex  w-max justify-center">
            {
              user && <img className="w-12 cursor-pointer ring-2 ring-white p-1 h-12 rounded-full" src={user?.photoURL}></img> 
            }
            {/* Hover Text */}
            {
              user && <div className="absolute -bottom-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-16 group-hover:opacity-100">
              <p className="rounded-md  px-3 py-2 bg-white text-black border"> {user && user?.displayName}</p>
              <span className="absolute -top-2 left-[50%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] "></span>
          </div>
            }
            {/* Hover button */}
        </div>
   



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
    </div>
  );
};

export default Navbar;
