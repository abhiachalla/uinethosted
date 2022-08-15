import "./Navbar.scss"
import { useState,useContext } from "react";
import React from 'react'
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import {Link} from "react-router-dom";
// import { logout } from "../../authContext/AuthActions";
// import { AuthContext } from "../../authContext/AuthContext";


const AnonNavbar = () => {
  

  // console.log("entered navbar");
  // console.log(user.user.user.profilePic)

  const [isScrolled, setisScrolled] = useState(false);
//   const {dispatch} = useContext(AuthContext);
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
          {/* <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link> */}
          <span>New and Popular</span>
          <span>My List</span>

          <Link to="/register">
              <span className="black">Register</span>
                    </Link>
              <Link to="/login">
              <span className="white">Login</span>
              </Link>

                </div>
                <div className="right">
                <Link to="/search" className="link">
                <Search className="icon"/>
                    </Link>
                  
                    <span>Hello Anonymous!</span>
                    <Notifications className="icon"/>

<Link to ="/profile">

                    <img
            src="data:image/jpeg;base64,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"
            alt=""
            />
            </Link>

            


                </div>
            </div>
        </div>
    )
}

export default AnonNavbar
