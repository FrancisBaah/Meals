import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeaderTitle from "./HeaderTitle";

const Layout = ({children}) => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div>
      <FaBars
        className="sidebar-icon"
        onClick={() => setShowSideBar(!showSideBar)}
      />           
        <HeaderTitle/>
      {children}
      {showSideBar ? (
        <div className="sidebar-container">
          <FaBars style={{position: "absolute", right: '5px'}}
            className="sidebar-icon"
            onClick={() => setShowSideBar(!showSideBar)}
          />
          <div className="sidebar-list">
            <Link to={'/'}>home page</Link>
            <Link to={"/menu"}>Menu</Link>
            <Link to={"/my-favorites"}>my favorites</Link>
            <Link to={"/random-meal"}>random meal</Link>
          </div>
          <Link to={"/about-me"} style={{position:'absolute', bottom: "50px"}} className="sidebar-text">About me</Link>
        </div>
      ) : null}
    </div>
  );
};

export default Layout;
