import React from "react";
import "./Header.css";
import image1 from "./image/1.jpg";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { HiMicrophone } from "react-icons/hi2";

const Header = ({ onIconClick }) => {
  return (
    <div className="Hdiv0">
      <nav className="navbar">
        <div className="divlogo">
         <button className="btn-1"> <i className="fa-solid fa-bars " onClick={onIconClick}></i></button> 
          <img src={image1} className="logo" alt="" />
        </div>
        <div className="input">
          <input type="text" className="search-bar" placeholder="search" />
          <button className="search-btn">
          <IoSearchOutline />
          </button>
          <button className="btn-2">
          <HiMicrophone />
          </button>
        </div>
        <div className="divprofile">
          <i className="fa-solid fa-ellipsis-vertical btn-3"></i>
          <div className="profile">
           
              <i className="fa-regular fa-user i1"></i>
              <Link  to='/login'>
              <p className="Hp1">sign in</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
