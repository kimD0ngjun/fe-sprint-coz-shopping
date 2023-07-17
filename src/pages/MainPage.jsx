import React from "react";
import MainGoods from "../components/MainGoods";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";

export default function MainPage() {
  const isLoading = useSelector((state) => state.Loading.value);
  const allProducts = useSelector((state) => state.AllProducts.value);
  // state는 state.AllProducts가 되는 순간, store.js를 거쳐서 리듀서 함수로 갑니당
  const bookmarkedList = allProducts.filter((el) => el.isBookmarked === true);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <main className="-z-10">
            <div className="font-inter text-2xl text-left font-semibold">
              상품 리스트
            </div>
            <ul className="flex justify-center space-x-4">
              {allProducts.length > 0
                ? allProducts
                    .slice(0, 4)
                    .map((el) => <MainGoods key={el.id} item={el} />)
                : null}
            </ul>
          </main>
          <main>
            <div className="font-inter text-2xl text-left font-semibold">
              북마크 리스트
            </div>
          </main>
          <ul className="flex justify-center space-x-4">
            {bookmarkedList.length > 0
              ? bookmarkedList
                  .slice(0, 4)
                  .map((el) => <MainGoods key={el.id} item={el} />)
              : null}
          </ul>
        </>
      )}
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
