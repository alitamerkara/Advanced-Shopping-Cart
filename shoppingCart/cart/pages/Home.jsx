import React from "react";
import { NavLink } from "react-router-dom";
import background from "../assets/walpaper.jpg";

const Home = () => {
  return (
    <div className="relative flex items-center flex-col justify-center h-screen">
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        <img
          src={background}
          alt="Background"
          className="w-full h-full object-cover  opacity-50"
        />
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-3xl font-bold text-blue-500 mt-4">
          Welcome to the Store
        </h1>
        <NavLink
          to="/store"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
        >
          Shopping Now
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
