import React from "react";

export default function Search() {
  return (
    // search container
    <div className="flex flex-col items-center pt-5">
      <div className="flex flex-col items-center text-white">
        <input
          className="w-[80%] outline-none border-purple-400 border-b-2 bg-transparent"
          type="text"
          placeholder="find.."
        />
      </div>
    </div>
  );
}
