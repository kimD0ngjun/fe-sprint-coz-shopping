import React, { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex justify-around shadow-xl sticky top-0 w-screen h-20 items-center space-x-36">
        <div className="flex items-center">
          <img src={logo} alt="logo" />
          <span className="font-inter font-extrabold text-3xl ml-4 mt-1.5">
            COZ shopping
          </span>
        </div>
        <div className="relative">
          <img src={menu} alt="menu" onClick={toggleMenu} />
          {isMenuOpen && <HeaderMenu />}
        </div>
      </header>
    </>
  );
}
