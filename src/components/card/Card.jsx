import React from "react";

export default function Card({ imgSrc, fn }) {
  return (
    <div
      onClick={() => {
        fn(imgSrc);
      }}
      className="col-md-4 "
    >
      <div className="image cursor rounded-3 overflow-hidden">
        <img src={imgSrc} className="w-100 " />
        <div className="content d-flex justify-content-center align-items-center">
          <i className="fa-solid fa-plus text-white fs-1"></i>
        </div>
      </div>
    </div>
  );
}
