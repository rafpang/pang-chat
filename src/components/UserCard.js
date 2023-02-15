import React from "react";

export default function UserCard() {
  return (
    <div className="mt-0 flex flex-row py-4 px-2 justify-evenly items-center hover:bg-slate-800">
      <div className="">
        <img
          src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
          className="object-cover h-12 w-12 rounded-full mr-2"
          alt=""
        />
      </div>
      <div className="hidden md:flex md:flex-col md:items-start md:text-start  w-3/4">
        <div className="text-xs md:text-lg font-semibold text-white">
          Luis1994
        </div>
        <span className="md:text-light text-white">Pick me at 9:00 Am</span>
      </div>
    </div>
  );
}
