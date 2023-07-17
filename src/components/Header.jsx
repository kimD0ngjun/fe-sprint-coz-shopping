import React, { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import { Link } from "react-router-dom";
import { updateCurrentPage } from "../features/CurrentFilter";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex justify-around shadow-xl sticky top-0 w-screen h-20 items-center space-x-36 z-10">
        <div className="flex items-center">
          <Link to={"/"} onClick={dispatch(updateCurrentPage("MainPage"))}>
            <img src={logo} alt="logo" />
          </Link>
          <span className="font-inter font-extrabold text-3xl ml-4 mt-1.5">
            COZ shopping
          </span>
        </div>
        <div className="relative z-10">
          <img src={menu} alt="menu" onClick={toggleMenu} />
          {isMenuOpen && <HeaderMenu />}
        </div>
      </header>
    </>
  );
}
