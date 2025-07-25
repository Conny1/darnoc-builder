"use client";
import React, { useState } from "react";
import { BellIcon, ChevronDown } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  const [modal, setmodal] = useState(false);
  return (
    <nav className=" relative  flex   border   w-full items-center h-15 justify-end  p-3">
      <div className="  flex  items-center   gap-3   ">
        <button className=" cursor-pointer ">
          <BellIcon className=" text-gray-400 " />
        </button>

        <img
          className=" h-10 w-10 rounded-full  "
          src="https://images.unsplash.com/photo-1682685797366-715d29e33f9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile image"
        />
        <p className=" text-sm  font-bold ">Conrad Mbuya</p>
        <button
          onClick={() => setmodal((prev) => !prev)}
          className=" cursor-pointer "
        >
          <ChevronDown className=" text-gray-400 " />
        </button>
        {modal && (
          <div className="w-32 absolute right-10 top-10 bg-white flex flex-col p-3  gap-3 rounded-xl border border-gray-400 ">
            <Link href="/" className="text-start text-sm cursor-pointer">
              Your profile
            </Link>
            <button className=" text-start text-sm cursor-pointer ">
              {" "}
              Sign out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
