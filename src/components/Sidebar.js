import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import UserCard from "./UserCard";

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-gray-600 flex-[1] ">
      <Navbar />
      <Search />
      <div className="h-[5%]"></div>
      <UserCard />
      <UserCard />
    </div>
  );
}
