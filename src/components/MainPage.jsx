import React from "react";
import MainBookmark from "./MainBookmark";

export default function MainPage({ isData }) {
  return (
    <>
      <main>
        <div className="font-inter text-2xl text-left font-semibold ">
          상품 리스트
        </div>
        <ul className="flex">
          {isData &&
            isData.slice(0, 4).map((item, index) => (
              <li key={index}>
                <img
                  src={item.brand_image_url || item.image_url}
                  alt="goods"
                  className="w-64 h-52 rounded-xl"
                />
              </li>
            ))}
        </ul>
      </main>
      <MainBookmark />
    </>
  );
}

// {/* 삼항연산자로 오류 막기
//             src={isData ? isData[0].img_url : ''}*/}
//             {isData ? (
//                 <img
//                   src={
//                     isData[0].brand_image_url
//                       ? isData[0].brand_image_url
//                       : isData[0].image_url
//                   }
//                   alt="goods"
//                   className="w-64 h-52"
//                 />
//               ) : null}
