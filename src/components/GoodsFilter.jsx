import React from "react";
import allproducts from "../assets/filterImage/allproducts.svg";
import product from "../assets/filterImage/product.svg";
import category from "../assets/filterImage/category.svg";
import exhibition from "../assets/filterImage/exhibition.svg";
import brand from "../assets/filterImage/brand.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  updateGoodsFilter,
  updateBookmarkFilter,
} from "../features/CurrentFilter";

export default function GoodsFilter() {
  const currentPage = useSelector(
    (state) => state.CurrentFilter.value.CurrentPage
  );
  const currentTab = useSelector((state) =>
    currentPage === "Goods"
      ? state.CurrentFilter.value.Goods
      : state.CurrentFilter.value.Bookmark
  );

  const dispatch = useDispatch();
  const updateCurrentTab = (el) => {
    if (currentPage === "Goods") {
      dispatch(updateGoodsFilter(el));
    } else if (currentPage === "Bookmark") {
      dispatch(updateBookmarkFilter(el));
    }
  };

  return (
    <>
      <main className="flex flex-row">
        <div className="flex flex-col">
          <div onClick={() => updateCurrentTab("All")}>
            <img src={allproducts} alt="전체" className="w-20 h-20" />
            <p>전체</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div onClick={() => updateCurrentTab("Products")}>
            <img src={product} alt="전체" className="w-20 h-20" />
            <p>상품</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div onClick={() => updateCurrentTab("Category")}>
            <img src={category} alt="전체" className="w-20 h-20" />
            <p>카테고리</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div onClick={() => updateCurrentTab("Exhibition")}>
            <img src={exhibition} alt="전체" className="w-20 h-20" />
            <p>전시회</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div onClick={() => updateCurrentTab("Brand")}>
            <img src={brand} alt="전체" className="w-20 h-20" />
            <p>브랜드</p>
          </div>
        </div>
      </main>
    </>
  );
}
