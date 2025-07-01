import React, { useContext } from "react";
import logo from "../assets/logo10.webp";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Signed out successfully!",
          timer: 2000,
          showConfirmButton: false,
          position: "top-end",
          toast: true,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error signing out",
          text: error.message,
          timer: 3000,
          showConfirmButton: false,
          position: "top-end",
          toast: true,
        });
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-blue-400 font-semibold"
              : "border-b-2 border-transparent"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/available-foods"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-blue-400 font-semibold"
              : "border-b-2 border-transparent"
          }
        >
          Available Foods
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/add-food"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-blue-400 font-semibold"
                  : "border-b-2 border-transparent"
              }
            >
              Add Food
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/manage-my-foods"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-blue-400 font-semibold"
                  : "border-b-2 border-transparent"
              }
            >
              Manage My Foods
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/my-food-request"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-blue-400 font-semibold"
                  : "border-b-2 border-transparent"
              }
            >
              My Food Request
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-blue-400 font-semibold"
              : "border-b-2 border-transparent"
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 dark:bg-gray-900 bg-white shadow-sm">
      <div className="navbar container mx-auto px-2 py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2 ml-2">
            <img className="w-10 h-10 rounded-full" src={logo} alt="Logo" />
            <span className="text-xl font-semibold">ShareMeal</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/2NqG4Zq/default-avatar.png"
                    }
                    alt="User"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <p className="font-semibold text-sm">
                    {user.displayName || "User"}
                  </p>
                </li>
                <li>
                  <button onClick={handleSignOut} className="text-red-500">
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className="btn btn-outline btn-primary btn-sm"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn btn-outline btn-primary btn-sm"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
