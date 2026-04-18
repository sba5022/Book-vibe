import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const links = <>
    <li>
      <NavLink to={"/"} className={({isActive}) => 
       `font-semibold mr-1 ${ isActive ? "text-green-500 border border-green-500" : ""}`}>Home</NavLink></li>
    <li><NavLink to={"books"} className={({isActive}) => 
       `font-semibold mr-1 ${ isActive ? "text-green-500 border border-green-500" : ""}`}>Listed Books</NavLink></li>
    <li><NavLink to={'page to read'} className={({isActive}) => 
       `font-semibold mr-1 ${ isActive ? "text-green-500 border border-green-500" : ""}`}>Page to Read</NavLink></li>
  </>
  return (
    <nav className=' bg-base-100 shadow-sm '>
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <button className="btn btn-active btn-success text-white">Sign in</button>
       <button className="btn btn-active btn-info text-white">Sign up</button>

      </div>
    </div>
    </nav>
  );
};

export default Navbar;