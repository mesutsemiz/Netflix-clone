import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import { useContext } from "react";


const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const {dispatch} = useContext(AuthContext)

  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);

    return () => {
      window.onscroll = null;
    }
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/800px-Netflix_logo.svg.png"
            alt=""
          />
           <Link to="/" className="link">
          <span>Homepage</span>
         </Link>
         <Link to="/series" className="link">
          <span>Series</span>
         </Link>
         <Link to="/movies" className="link">
          <span>Movies</span>
         </Link>
          <span>New und Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>KID</span>
          <NotificationsIcon className="icon" />
          <img
            src="https://images.pexels.com/photos/19296340/pexels-photo-19296340.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={()=>dispatch(logout())}>logout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="left"></div>

      <div className="rigt"></div>
    </div>
  );
};

export default Navbar;
