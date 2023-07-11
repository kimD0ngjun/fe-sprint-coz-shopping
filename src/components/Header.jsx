import React from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";

export default function Header() {
  return (
    <>
      <header className="flex justify-around shadow-xl sticky top-0 w-screen h-20 items-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" />
          <span className="font-bold text-3xl ml-4">COZ shopping</span>
        </div>
        <img src={menu} alt="menu" />
      </header>
    </>
  );
}
