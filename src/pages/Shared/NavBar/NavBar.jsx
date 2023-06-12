

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAdmin from "../../../hooks/useAdmin";
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useravatar from './../../../assets/user-avatar.png';
import logo from './../../../assets/logo.png';
import useStudent from '../../../hooks/useStudent';
import useInstructor from '../../../hooks/useInstructor';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isStudent] = useStudent();
  const [isInstructor] = useInstructor();

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  };

  return (
    <nav className={`bg-${darkMode ? 'gray-900' : 'purple-400'} relative z-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-15 w-25" src={logo} alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/instructors"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Instructors
                </Link>
                <Link
                  to="/approvedclass"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Classes
                </Link>
                <label>
                  <input
                    type="checkbox"
                    className="toggle toggle-sm "
                    checked={darkMode}
                    onChange={toggleDarkMode}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {user && (
                <div className="relative">
                  <button
                    onClick={handleUserMenuToggle}
                    className="flex items-center focus:outline-none"
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user.photoURL ? user.photoURL : useravatar}
                      alt="User"
                    />
                    <svg
                      className="ml-1 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 8a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isUserMenuOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-30">
                      <div className="ml-3 p-2 border-b-2">
                        <div className="text-base font-medium text-black">
                          {user.displayName}
                        </div>
                        <div className="text-sm font-medium text-black">
                          {user.email}
                        </div>
                      </div>
                      {isAdmin && (
                        <Link
                          to="/dashboard/adminhome"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                      )}
                      {isStudent && (
                        <Link
                          to="/dashboard/userhome"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                      )}
                      {isInstructor && (
                        <Link
                          to="/dashboard/instructorhome"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                      )}
                      <Link
                        onClick={handleLogOut}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              )}
              {!user && (
                <Link
                  to="/login"
                  className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleMenuToggle}
              type="button"
              className="text-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/instructors"
              className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Instructors
            </Link>
            <Link
              to="/approvedclass"
              className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Classes
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              {user && (
                <>
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.photoURL ? user.photoURL : useravatar}
                      alt="User"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-black">
                      {user.displayName}
                    </div>
                    <div className="text-sm font-medium text-black">
                      {user.email}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="mt-3 px-2 space-y-1">
              {isAdmin && (
                <Link
                  to="/dashboard/adminhome"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white  hover:bg-gray-700"
                >
                  Dashboard
                </Link>
              )}
              {isStudent && (
                <Link
                  to="/dashboard/userhome"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white  hover:bg-gray-700"
                >
                  Dashboard
                </Link>
              )}
              {isInstructor && (
                <Link
                  to="/dashboard/instructorhome"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white  hover:bg-gray-700"
                >
                  Dashboard
                </Link>
              )}
              <Link
                onClick={handleLogOut}
                className="block px-3 py-2 rounded-md text-base font-medium text-white  hover:bg-gray-700"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


