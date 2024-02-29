import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const DesktopNav = () => {
  return (
    <nav className=" hidden lg:flex items-center justify-between h-16">
      <div className=" w-full">
        {/* <img className=" h-8 w-8" src="./images/sdlogo.png" /> */}
        <a href="/">
          <h1 className=" text-pink-500 text-4xl font-medium font-cookie cursor-pointer">Sweet Dreams</h1>
        </a>
      </div>
      <div className=" w-full flex justify-end space-x-3 items-center">
        <a>About</a>

        <Separator orientation="vertical" className=" h-5 mx-2 bg-pink-300" />

        <Button asChild variant={"ghost"} size={"icon"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className=" h-5 w-5 text-pink-500 hover:bg-transparent hover:text-pink-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </Button>

        <div className=" flex items-center text-pink-500 hover:text-pink-700 space-x-1">
          <Button asChild variant={"ghost"} size={"icon"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className=" h-5 w-5 hover:bg-transparent hover:text-pink-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Button>
          <span className=" text-xs font-semibold">0</span>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
