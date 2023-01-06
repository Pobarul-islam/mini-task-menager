import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // Navbar menu item
  const menuItems = (
    <>
      <li>
        {' '}
        <Link to="/">User</Link>
      </li>

      <li>
        {' '}
        <Link to="/task">Task</Link>
      </li>
      <li>
        {' '}
        <Link to="/createtask">Create Task</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-slate-900 text-white font-bold">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>{menuItems}</li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl font-bold">
          Mini Task Menager
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
    </div>
  );
}

export default Navbar;
