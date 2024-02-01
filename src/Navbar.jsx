import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 font-mono">
          <Link
            to="/"
            className="self-center text-2xl font-semibold whitespace-nowrap text-gray-100 cursor-pointer"
          >
            Trending
          </Link>

          <div className="w-full md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-0 mt-4 md:flex-row">
              <Link
                to="/"
                className="block py-2 px-3 text-gray-100 rounded hover:text-red-500"
              >
                News
              </Link>
              <Link
                to="/top-news"
                className="block py-2 px-3 text-gray-100 rounded hover:text-red-500"
              >
                Tech News
              </Link>
              <Link
                to="/all-time"
                className="block py-2 px-3 text-gray-100 rounded hover:text-red-500"
              >
                All time
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
