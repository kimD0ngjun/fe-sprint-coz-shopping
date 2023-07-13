import React from "react";

export default function MainGoods({ data }) {
  if (data.type === "Product") {
    let goodsprice = parseInt(data.price).toLocaleString();
    return (
      <>
        <img
          src={data.brand_image_url || data.image_url}
          alt="goods"
          className="w-64 h-52 rounded-xl mb-1.5"
        />
        <div className="grid grid-cols-2 w-64 ml-1 gap-y-0.5">
          <div className="text-left font-inter font-extrabold w-56">
            {data.title}
          </div>
          <div className="text-right font-inter font-extrabold text-violet-800">
            {`${data.discountPercentage}%`}
          </div>
          <div className="w-px"></div>
          <div className="text-right font-inter">{`${goodsprice}원`}</div>
        </div>
      </>
    );
  } else if (data.type === "Category") {
    return (
      <>
        <img
          src={data.brand_image_url || data.image_url}
          alt="goods"
          className="w-64 h-52 rounded-xl mb-1.5"
        />
        <div className="grid grid-cols-2 w-64 ml-1 gap-y-0.5">
          <div className="text-left font-inter font-extrabold w-56">
            {`# ${data.title}`}
          </div>
          <div className="w-px"></div>
          <div className="w-px"></div>
          <div className="w-px"></div>
        </div>
      </>
    );
  } else if (data.type === "Exhibition") {
    return (
      <>
        <img
          src={data.brand_image_url || data.image_url}
          alt="goods"
          className="w-64 h-52 rounded-xl mb-1.5"
        />
        <div className="grid grid-cols-2 w-64 ml-1 gap-y-0.5">
          <div className="text-left font-inter font-extrabold w-56">
            {data.title}
          </div>
          <div className="w-px"></div>
          <div className="text-left font-inter font-medium w-56">
            {data.sub_title}
          </div>
          <div className="w-px"></div>
        </div>
      </>
    );
  } else {
    let interestingCustomers = parseInt(data.follower).toLocaleString();
    return (
      <>
        <img
          src={data.brand_image_url || data.image_url}
          alt="goods"
          className="w-64 h-52 rounded-xl mb-1.5"
        />
        <div className="grid grid-cols-2 w-64 ml-1 gap-y-0.5">
          <div className="text-left font-inter font-extrabold">
            {data.brand_name}
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
