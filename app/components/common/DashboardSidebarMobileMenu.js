"use client";
import React, { useState } from "react";
import DashboardSidebarMenu from "./DashboardSidebarMenu";

const DashboardSidebarMobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleMenu} style={{background: '#1a3760'}}>
        <i className="fa fa-bars pr10" /> Menu
      </button>
      <ul style={{background: '#1a3760'}} className={`dropdown-content ${showMenu ? "show" : ""}`}>
        <DashboardSidebarMenu />
      </ul>
    </div>
  );
};

export default DashboardSidebarMobileMenu;
