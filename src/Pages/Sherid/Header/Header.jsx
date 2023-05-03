import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTh, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch(console.error(error.message));
  };
  return (
    <div className="bg-gray-100">
      <div className=" px-4  py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="">
            <span className="ml-2 mb-3 text-xl sm:text-2xl  font-bold tracking-wide uppercase text-gray-800">
              Food <span className=" text-purple-500">Lover</span>
            </span>
          </Link>

          {/* Nav Items Section */}
          <ul className="items-center hidden space-x-4 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
            <li>{user ? <p>{user.displayName}</p> : <p>Profile</p>}</li>
            <li>
              {user ? (
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.photoURL}
                  alt="photo"
                />
              ) : (
                <FaUserCircle className="w-8 h-8" />
              )}
            </li>

            <li>
              {user ? (
                <button
                  className="btn btn-sm btn-outline btn-primary"
                  onClick={handelLogOut}
                >
                  log Out
                </button>
              ) : (
                <Link to="/register">
                  <button className="btn btn-sm btn-outline btn-primary">
                    Sign in
                  </button>
                </Link>
              )}
            </li>
          </ul>
          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars></FaBars>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/">
                        <span className="mb-6 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Food Lover
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <FaTh></FaTh>
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/" className="default">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" className="default">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Profile
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
