import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UsersList() {
  
    const [user, setUser] = useState("");
    useEffect(()=>{
        fetch('https://devza.com/tests/tasks/listusers', {
          method: 'GET',
          headers: { AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a' },
        })
          .then((res) => res.json())
          .then((data) => setUser(data));
    },[])

  return (
    <div className="overflow-x-auto">
      {/* Navbar  */}
      <div className="navbar bg-base-100">
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
           
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>



      {/* User List  */}
      <div className="grid grid-cols-3 gap-5 ml-10 mt-10">
        {user?.users?.map((user) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={user.picture} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{user.id}</h2>
                <p>{user.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UsersList
