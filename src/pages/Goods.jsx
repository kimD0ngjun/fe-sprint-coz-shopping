import React from "react";
import GoodsFilter from "../components/GoodsFilter";
import MainGoods from "../components/MainGoods";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Goods() {
  const data = useSelector((state) => state.AllProducts.value);
  const filterTab = useSelector((state) => state.CurrentFilter.value.Goods);
  const filterList =
    filterTab === "All" ? data : data.filter((el) => el.type === filterTab);

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

  return (
    <>
      <main>
        <GoodsFilter />
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
