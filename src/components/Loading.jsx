import React from "react";
import loadingIcon from "../assets/Loading_icon.gif";

export default function LoadingPage() {
  return (
    <>
      <div>
        <img src={loadingIcon} alt="로딩 중입니다..." className="w-2/12" />
        <div>잠시만 기다려주세요</div>
      </div>
    </>
  );
}
