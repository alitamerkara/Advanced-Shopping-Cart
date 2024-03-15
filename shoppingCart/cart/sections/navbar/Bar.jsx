import React from "react";
import { NavLink } from "react-router-dom";

const Bar = ({ count }) => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-white font-bold"
              activeClassName="underline"
            >
              Home
            </NavLink>
            <NavLink
              to="/store"
              className="text-white font-bold ml-4"
              activeClassName="underline"
            >
              Store
            </NavLink>
            <NavLink
              to="/basket"
              className="text-white font-bold ml-4"
              activeClassName="underline"
            >
              Basket{" "}
              {count != 0 ? (
                <span className="ml-1 inline-block bg-red-500 rounded-full px-2 py-1 text-white">
                  {count}
                </span>
              ) : null}
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Bar;
