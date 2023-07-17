import React from "react";
import GoodsFilter from "../components/GoodsFilter";
import MainGoods from "../components/MainGoods";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateGoodsFilter } from "../features/CurrentFilter";

export default function Goods() {
  const data = useSelector((state) => state.AllProducts.value);
  const filterTab = useSelector((state) => state.CurrentFilter.value.Goods);
  const dispatch = useDispatch();

  // 선택된 탭에 해당하는 상품만 필터링
  const filterList = data.filter((el) => {
    if (filterTab === "All") {
      return true;
    }
    return el.type === filterTab;
  });

  const [page, setPage] = useState(12);
  const filterListPage = filterList.slice(0, page);
  const pathName = useLocation();

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight && page < filterList.length) {
      setPage((prevPage) => prevPage + 4);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [filterList.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPage(12);
  }, [pathName]);

  const updateFilterTab = (tab) => {
    dispatch(updateGoodsFilter(tab)); // 선택된 탭 업데이트
    setPage(12); // 페이지 초기화
  };

  return (
    <>
      <main>
        <GoodsFilter activeTab={filterTab} onTabClick={updateFilterTab} />
        <div>
          {filterListPage.map((el, idx) => (
            <MainGoods key={idx} item={el} />
          ))}
        </div>
        {filterList[page + 1] ? (
          <div>컨텐츠가 더 존재합니다.</div>
        ) : (
          <div>더 이상 컨텐츠가 없습니다.</div>
        )}
      </main>
    </>
  );
}
