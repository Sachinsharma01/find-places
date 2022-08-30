import React from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import "./style/MainNavigation.css";

const MainNavigation = () => {
  return (
    <MainHeader>
      <button type="" className="main-navigation__menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">Your Places</Link>
      </h1>
      <nav>....</nav>
    </MainHeader>
  );
};

export default MainNavigation;
