"use client";
import React, { useState } from "react";
import { BellIcon, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Nav = () => {
  const [modal, setmodal] = useState(false);
  const [auth] = useState(false)
  const route = useRouter()
  return (
    <nav className=" relative  flex   border   w-full items-center h-15 justify-end  p-3">
     { auth ? <div className="  flex  items-center   gap-3   ">
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
      </div>: <div className="flex gap-3">
  {/* Primary button */}
  <button
  onClick={()=>route.push("/commingSoon")}
    className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium 
               shadow-sm hover:bg-blue-700 active:scale-95 transition  cursor-pointer ">
    Sign in
  </button>

  {/* Secondary button */}
  <button
    onClick={()=>route.push("/commingSoon")}

    className="px-5 py-2.5 rounded-xl border border-blue-600 text-blue-600 font-medium 
               hover:bg-blue-50 active:scale-95 transition cursor-pointer ">
    Sign up
  </button>
</div>
 }
    </nav>
  );
};

export default Nav;
