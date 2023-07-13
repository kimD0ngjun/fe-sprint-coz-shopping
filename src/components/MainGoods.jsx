import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function MainGoods({ item, isData, setIsData }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    const temp = isData.map((el) => {
      return el.id === item.id ? { ...el, isBookmarked: true } : el;
    });
    setIsData(temp);
  };

  if (item.type === "Product") {
    let goodsprice = parseInt(item.price).toLocaleString();
    return (
      <>
        <div className="relative">
          <img
            src={item.brand_image_url || item.image_url}
            alt="goods"
            className="w-64 h-52 rounded-xl mb-1.5"
          />
          <div className="absolute right-2 bottom-1 cursor-pointer">
            {isChecked ? (
              <AiFillStar
                size={`2rem`}
                style={{ strokeWidth: "0.01", color: "yellow" }}
                onClick={handleCheck}
              />
            ) : (
              <AiFillStar
                size={`2rem`}
                style={{ strokeWidth: "0.01", color: "#d3d3d3" }}
                onClick={handleCheck}
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 w-64 ml-1 gap-y-0.5">
          <div className="text-left font-inter font-extrabold w-56">
            {item.title}
          </div>
          <div className="text-right font-inter font-extrabold text-violet-800">
            {`${item.discountPercentage}%`}
          </div>
          <div className="w-px"></div>
          <div className="text-right font-inter">{`${goodsprice}원`}</div>
        </div>
      </>
    );
  } else if (item.type === "Category") {
    return (
      <>
        <div className="relative">
          <img
            src={item.brand_image_url || item.image_url}
            alt="goods"
            className="w-64 h-52 rounded-xl mb-1.5"
          />
          <div className="absolute right-2 bottom-1 cursor-pointer">
            {isChecked ? (
              <AiFillStar
                size={`2rem`}
                style={{ strokeWidth: "0.01", color: "yellow" }}
                onClick={handleCheck}
              />
            ) : (
              <AiFillStar
                size={`2rem`}
                style={{ strokeWidth: "0.01", color: "#d3d3d3" }}
                onClick={handleCheck}
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 w-64 ml-1 gap-y-0.5">
          <div className="text-left font-inter font-extrabold w-56">
            {`# ${item.title}`}
          </div>
          <div className="w-px"></div>
          <div className="w-px"></div>
          <div className="w-px"></div>
        </div>
      </>
    );
  } else if (item.type === "Exhibition") {
    return (
      <>
        <div className="relative">
          <img
            src={item.brand_image_url || item.image_url}
            alt="goods"
            className="w-64 h-52 rounded-xl mb-1.5"
          />
          <div className="absolute right-2 bottom-1 cursor-pointer">
            {isChecked ? (
              <AiFillStar
                size={`2rem`}
                style={{ strokeWidth: "0.01", color: "yellow" }}
                onClick={handleCheck}
              />
            ) : (
              <AiFillStar
                size={`2rem`}
                style={{ strokeWidth: "0.01", color: "#d3d3d3" }}
                onClick={handleCheck}
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 w-64 ml-1 gap-y-0.5">
          <div className="text-left font-inter font-extrabold w-56">
            {item.title}
          </div>
          <div className="w-px"></div>
          <div className="text-left font-inter font-medium w-56">
            {item.sub_title}
          </div>
          <div className="w-px"></div>
        </div>
      </>
    );
  } else {
    let interestingCustomers = parseInt(item.follower).toLocaleString();
    return (
      <>
        <div className="relative">
          <img
            src={item.brand_image_url || item.image_url}
            alt="goods"
            className="w-64 h-52 rounded-xl mb-1.5"
          />
          <div className="absolute right-2 bottom-1 cursor-pointer">
            {isChecked ? (
              <AiFillStar
                size={`2rem`}
                style={{ strokeWidth: "0.01", color: "yellow" }}
                onClick={handleCheck}
              />
            ) : (
              <AiFillStar
                size={`2rem`}
                style={{ strokeWidth: "0.01", color: "#d3d3d3" }}
                onClick={handleCheck}
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 w-64 ml-1 gap-y-0.5">
          <div className="text-left font-inter font-extrabold">
            {item.brand_name}
          </div>
          <div className="text-left font-inter font-extrabold text-right">
            관심고객수
          </div>
          <div className="w-px"></div>
          <div className="text-right font-inter">{interestingCustomers}</div>
        </div>
      </>
    );
  }
}
