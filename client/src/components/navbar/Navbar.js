import "./Navbar.scss"
import { useState,useContext } from "react";
import React from 'react'
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import {Link} from "react-router-dom";
import { logout } from "../../authContext/AuthActions";
import { AuthContext } from "../../authContext/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = (user) => {
  console.log(user)

  // console.log("entered navbar");
  // console.log(user.user.user.profilePic)

  const [isScrolled, setisScrolled] = useState(false);
  const {dispatch} = useContext(AuthContext);
  window.onscroll = () => {
    setisScrolled(window.pageYOffset === 0 ? false : true);
    return () => {window.onscroll = null};
  };



    return (
        <div className={isScrolled ? "navbar Scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                <img className="netflixImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>

                </div>
                <div className="right">
                <Link to="/search" className="link">
                <Search className="icon"/>
                    </Link>
                  
                    <span>Hello {user.user.username}!</span>
                    <Notifications className="icon"/>

<Link to ="/profile">

                    <img
                    className="highop"
            src={user.user.profilePic}
            alt=""
            />
            </Link>


          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
