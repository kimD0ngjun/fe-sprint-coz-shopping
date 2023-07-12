import React from "react";
import listIcon from "../assets/listIcon.svg";
import bookMark from "../assets/bookMark.svg";

export default function HeaderMenu() {
  return (
    <>
      <div className="absolute">
        <div className="bg-white"></div>
        <div className="rounded-md bg-white flex flex-col shadow-md w-44 h-28">
          <div className="flex-1 border-b text-base">OOO님, 안녕하세요!</div>
          <div className="flex-1 border-b flex flex-row">
            <img src={listIcon} alt="listIcon" className="w-5" />
            <span className="text-base">상품리스트 페이지</span>
          </div>
          <div className="flex-1 flex flex-row">
            <img src={bookMark} alt="bookMark" className="w-5" />
            <span className="text-base">북마크 페이지</span>
          </div>
        </div>
      </div>
    </>
  );
}
