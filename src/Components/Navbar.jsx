import React, { useContext } from 'react';
import logo from '../assets/food-sharing-sticker-emblem-feeding-people-giving-food-poor-refugees-food-sharing-sticker-emblem-feeding-people-giving-153612354.webp'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';


const Navbar = () => {
const {user, signOutUser} = useContext(AuthContext);

const handleSignOut = () => {
  signOutUser()
  .then(() =>{
    console.log('user signout successfully')
    Swal.fire({
          icon: "success",
          title: "Signed out successfully!",
          timer: 2000,
          showConfirmButton: false,
          position: "top-end",
          toast: true,
        });
  })
  .catch(error => {
    console.log('error signing out user', error)
    Swal.fire({
          icon: "error",
          title: "Error signing out",
          text: error.message,
          timer: 3000,
          showConfirmButton: false,
          position: "top-end",
          toast: true,
        });
  })
}

    return (
        <div className='dark:bg-gray-900'>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="ml-2  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/available-foods'>Available Foods</NavLink></li>
      <li><NavLink to='/add-food'>Add Food</NavLink></li>
      <li><NavLink to='/manage-my-foods'>Manage My Foods</NavLink></li>
      <li><NavLink to='/my-food-request'>My Food Request</NavLink></li>
      </ul>
    </div>
    <Link><img className='w-12 h-12 rounded-full ml-2 cursor-pointer' src={logo} alt="" /></Link>
    <Link to='/' className="ml-2 text-xl font-semibold">ShareMeal</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
   <ul className="menu menu-horizontal px-1">
  <li>
    <NavLink to="/"
      className={({ isActive }) =>
        isActive ? "border-b-2 border-b-blue-400 font-semibold" : "border-b-2 border-transparent"
      }>Home</NavLink>
  </li>
  <li>
    <NavLink to="/available-foods"
      className={({ isActive }) =>
        isActive ? "border-b-2 border-b-blue-400 font-semibold" : "border-b-2 border-transparent"
    }>Available Foods</NavLink>
  </li>
  <li>
    <NavLink to="/add-food"
      className={({ isActive }) =>
        isActive ? "border-b-2 border-b-blue-400 font-semibold" : "border-b-2 border-transparent"
      }>Add Food</NavLink>
  </li>
  <li>
    <NavLink to="/manage-my-foods"
      className={({ isActive }) =>
        isActive ? "border-b-2 border-b-blue-400 font-semibold" : "border-b-2 border-transparent"
      }>Manage My Foods</NavLink>
  </li>
  <li>
    <NavLink to="/my-food-request"
      className={({ isActive }) =>
        isActive ? "border-b-2 border-b-blue-400 font-semibold" : "border-b-2 border-transparent"
      }>My Food Request</NavLink>
  </li>
</ul>

  </div>

 <div className="navbar-end gap-2">
  {user ? (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL || 'https://i.ibb.co/2NqG4Zq/default-avatar.png'} alt="User" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      
        <li>
          <p className="font-semibold text-sm">{user.displayName || "User"}</p>
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
      <NavLink to="/login" className="btn btn-outline btn-primary">
        Login
      </NavLink>
      <NavLink to="/register" className="btn btn-outline btn-primary">
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