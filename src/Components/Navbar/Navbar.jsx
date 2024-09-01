import React, { useContext, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userToken, setUserToken } = useContext(AuthContext);
  const navigate = useNavigate()

  function signout() {
    setUserToken("");
    localStorage.removeItem("userToken");
    navigate("/login");
  }

  return (
    <header className="bg-gray-800 absolute w-full">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center py-2 text-white">
            <div className="text-white font-bold text-xl me-8">
              <NavLink to="/">Logo</NavLink>
            </div>
            {userToken && (
              <div className="hidden md:block">
                <ul className="flex items-center space-x-2">
                  <li>
                    <NavLink to="/" className="block px-1 text-white">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className="block px-1 text-white">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/categories" className="block px-1 text-white">
                      Categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/brands" className="block px-1 text-white">
                      Brands
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart" className="block px-1 text-white">
                      Cart
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="outline-none mobile-menu-button"
              >
                <svg
                  className="w-6 h-6 text-white"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="social-meida-icon">
              <i className="fa-brands fa-facebook-f text-white mx-1"></i>
              <i className="fa-brands fa-twitter text-white mx-1"></i>
              <i className="fa-brands fa-linkedin text-white mx-1"></i>
              <i className="fa-brands fa-youtube text-white mx-1"></i>
              <i className="fa-brands fa-tiktok text-white mx-1"></i>
            </div>
            <div>
              <ul className="flex gap-1">
                {!userToken && (
                  <li>
                    <NavLink
                      to="/login"
                      className="block px-1 py-2 text-white rounded"
                    >
                      Login
                    </NavLink>
                  </li>
                )}
                {!userToken && (
                  <li>
                    <NavLink
                      to="/register"
                      className="block px-1 py-2 text-white rounded"
                    >
                      Register
                    </NavLink>
                  </li>
                )}
                {userToken && (
                  <li>
                    <button
                      onClick={signout}
                      className="block px-1 py-2 text-white rounded"
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div
          className={
            isOpen ? "mobile-menu md:hidden" : "mobile-menu md:hidden hidden"
          }
        >
          {userToken && (
            <ul className="mt-4 space-y-4">
              <li>
                <NavLink
                  to="/"
                  className="block px-1 py-2 text-white bg-gray-900 rounded"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block px-1 py-2 text-white bg-gray-900 rounded"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block px-1 py-2 text-white bg-gray-900 rounded"
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block px-1 py-2 text-white bg-gray-900 rounded"
                >
                  Brands
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
