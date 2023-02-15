import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-purple-300 h-[100vh] flex items-center justify-center">
      <div className=" overflow-auto bg-white flex flex-row w-[75vw] h-[85vh] border-1 rounded-md shadow-xl">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
