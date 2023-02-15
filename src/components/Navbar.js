import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-around items-center">
      <div className="flex flex-col justify-center items-center mt-10">
        <span className="font-bold text-sm text-[9px] md:text-xl md:text-center mb-1 text-white">
          Rafi Pangestu
        </span>
        <button className="mt-2 font-semibold text-white border-2 border-purple-500 rounded-lg px-2 py-1 text-[9px] sm:text-xs bg-purple-500 hover:bg-white hover:text-black">
          Logout
        </button>
      </div>
    </div>
  );
}
