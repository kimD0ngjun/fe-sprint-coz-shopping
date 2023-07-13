import React from "react";
import MainGoods from "./MainGoods";
import MainBookmark from "./MainBookmark";

export default function MainPage({ isData, setIsData }) {
  return (
    <>
      <main>
        <div className="font-inter text-2xl text-left font-semibold">
          상품 리스트
        </div>
        <ul className="flex justify-center space-x-4">
          {isData &&
            isData.slice(0, 4).map((el, index) => (
              <li key={index}>
                <MainGoods item={el} isData={isData} setIsData={setIsData} />
              </li>
            ))}
        </ul>
      </main>
      <MainBookmark />
    </>
  );
}

// 타입 : product => title, price, discountPercentage
// 타입 : category => title
// 타입 : exhibition => title, sub_title
// 타입 : brand => brand_name, follower

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
