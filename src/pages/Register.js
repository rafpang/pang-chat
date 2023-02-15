import React from "react";
import logo from "../assets/pang-logo.png";

export default function Register() {
  return (
    <div className="bg-purple-300 h-[100vh] flex items-center justify-center">
      <div className="bg-white flex flex-col w-[300px] sm:w-[450px] md:w-[768px] h-[80vh] border-1 rounded-md shadow-xl justify-center items-center">
        <img
          className="mt-5 md:mt-1 w-[340px] h-[200px]"
          src={logo}
          alt="pang-logo"
        />

        <form className="flex justify-around flex-col gap-[25px] py-20 pt-0 items-center">
          <input
            className="border-purple-400 border-b-2 w-[250px]"
            type="text"
            placeholder="Display Name"
          />
          <input
            className="border-purple-400 border-b-2"
            type="email"
            placeholder="Email"
          />
          <input
            className="border-purple-400 border-b-2"
            type="password"
            placeholder="Pasword"
          />
          <span className="mt-[-5px] text-purple-600 mb-0 text-left text-xs">
            Add an avatar! (optional)
          </span>
          <label
            className="mt-[-15px] rounded-lg shadow-xs border-2 border-purple-700 bg-white hover:bg-purple-700 hover:text-white text-xs py-1.5 px-3 block mb-0 font-medium text-purple-700"
            for="file_input"
          >
            UPLOAD FILE
          </label>
          <input className=" hidden" id="file_input" type="file"></input>
          <button className="w-[200px] mt-[30px] inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">
            Sign up
          </button>
        </form>
        <p className="pb-5">Already have an account? Login</p>
      </div>
    </div>
  );
}
