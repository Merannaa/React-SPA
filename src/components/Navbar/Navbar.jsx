import React, { Component, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

  
 

  let links = [
    { title: "about", ref: "/about" },
    { title: "portfolio", ref: "/portfolio" },
    { title: "contact", ref: "/contact" },
  ];

  return (
    <nav className="scrolled navbar bg-footer fixed-top navbar-light navbar-expand-lg ">
      <div className="container">
        <Link className="navbar-brand text-uppercase" to="/">
          START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <NavLink className="nav-link text-uppercase" to={link.ref}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
