import React from "react";
import listIcon from "../assets/listIcon.svg";
import bookMark from "../assets/bookMark.svg";

export default function HeaderMenu() {
  return (
    <>
      <div className="absolute drop-shadow-xl top-10 -left-14">
        <div className="rounded-md bg-white flex flex-col w-44 h-28 left-4">
          <div className="flex-1 flex flex-row justify-center items-center">
            <div className="flex-1 border-b font-inter">OOO님, 안녕하세요!</div>
          </div>
          <div className="flex-1 border-b flex flex-row justify-center items-center">
            <img src={listIcon} alt="listIcon" className="w-4 mr-1 mb-1" />
            <span className="font-inter">상품리스트 페이지</span>
          </div>
          <div className="flex-1 flex flex-row justify-center items-center">
            <img src={bookMark} alt="bookMark" className="w-4 mr-1 mb-1" />
            <span className="font-inter">북마크 페이지</span>
          </div>
        </div>
      </div>
    </>
  );
}
