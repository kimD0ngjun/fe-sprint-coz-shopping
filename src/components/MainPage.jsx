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
            isData.slice(0, 4).map((el, index) => {
              if (el.type === "Product") {
                let goodsprice = el.price.toLocaleString();
                return (
                  <li key={index}>
                    <img
                      src={el.brand_image_url || el.image_url}
                      alt="goods"
                      className="w-64 h-52 rounded-xl"
                    />
                    <div className="grid grid-cols-2 w-64 ml-1">
                      <div className="text-left font-inter font-extrabold w-56">
                        {el.title}
                      </div>
                      <div className="text-right font-inter font-extrabold text-violet-800">
                        {`${el.discountPercentage}%`}
                      </div>
                      <div className="w-px"></div>
                      <div className="text-right font-inter">{`${goodsprice}원`}</div>
                    </div>
                  </li>
                );
              } else if (el.type === "Category") {
                return (
                  <li key={index}>
                    <img
                      src={el.brand_image_url || el.image_url}
                      alt="goods"
                      className="w-64 h-52 rounded-xl"
                    />
                    <div className="grid grid-cols-2 w-64 ml-1">
                      <div className="text-left font-inter font-extrabold w-56">
                        {`# ${el.title}`}
                      </div>
                      <div className="w-px"></div>
                      <div className="w-px"></div>
                      <div className="w-px"></div>
                    </div>
                  </li>
                );
              } else if (el.type === "Exhibition") {
                return (
                  <li key={index}>
                    <img
                      src={el.brand_image_url || el.image_url}
                      alt="goods"
                      className="w-64 h-52 rounded-xl"
                    />
                    <div className="grid grid-cols-2 w-64 ml-1">
                      <div className="text-left font-inter font-extrabold w-56">
                        {el.title}
                      </div>
                      <div className="w-px"></div>
                      <div className="text-left font-inter font-medium w-56">
                        {el.sub_title}
                      </div>
                      <div className="w-px"></div>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <img
                      src={el.brand_image_url || el.image_url}
                      alt="goods"
                      className="w-64 h-52 rounded-xl"
                    />
                    <div className="grid grid-cols-2 w-64 ml-1">
                      <div className="text-left font-inter font-extrabold">
                        {el.brand_name}
                      </div>
                      <div className="text-left font-inter font-extrabold text-right">
                        관심고객수
                      </div>
                      <div className="w-px"></div>
                      <div className="text-right font-inter">{el.follower}</div>
                    </div>
                  </li>
                );
              }
            })}
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
