import "../../index.css";
import img from "../../assets/img/poert1.png";
import img1 from "../../assets/img/port2.png";
import img2 from "../../assets/img/port3.png";
import React, { useState } from "react";
import Card from "../card/Card";

export default function Portfolio() {
  const [show, setShow] = useState(false);
  const [path, setPath] = useState("");

  let images = [
    { src: img },
    { src: img1 },
    { src: img2 },
    { src: img },
    { src: img1 },
    { src: img2 },
  ];

  function handleShow(src) {
    setPath(src);
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  return (
    <section className=" p-2">
      <div className="container text-center">
        <h1 className="fw-bold">PORTFOLIO COMPONENT</h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="line me-3 text-bg-dark"></div>
          <i className="fa-solid fa-star  text-dark"></i>
          <div className="line ms-3 text-bg-dark"></div>
        </div>
      </div>

      <div className="container ">
        <div className="row text-center g-5 m-0">
          {images.map((imgSrc, index) => (
            <Card fn={handleShow} imgSrc={imgSrc.src} key={index} />
          ))}
        </div>
        {show && (
          <section
            className="position-fixed top-0 start-0 justify-content-center align-items-center d-flex end-0 bottom-0 bg-primary bg-opacity-25"
            onClick={closeModal}
          >
            <img className="w-50" src={path} />
            {/* <i className='fa-solid fa-square-xmark'></i> */}
          </section>
        )}
      </div>
    </section>
  );
}
