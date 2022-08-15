import "./App.css"
import Home from "./pages/homepage/Home.jsx";
import Watch from "./pages/watch/watch.jsx";
import Register from "./pages/register/register.jsx";
import Login from "./pages/login/login.jsx";
import Anonymous from "./pages/anonymous/anonymous.jsx"
import Search from "./pages/search/search.jsx"
import Profile from "./pages/profile/profile.jsx";
import OtherUsers from "./pages/otherusers/otherusers";
import TempHome from "./pages/tempHome";
import Navbar from "./components/navbar/Navbar";
import AnonNavbar from "./components/navbar/AnonNavbar";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    
  } from "react-router-dom";



import React from 'react'
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import Details from "./pages/details/details.jsx";

const App = () => {

    const {user} = useContext(AuthContext);
    console.log(user);
    return (
    //v 5.2.0
        <Router>
            <Switch>
    
                <Route exact path = "/">


                   {user ?<><Navbar user={user}/> <Home/></>
                    : <Redirect to="/anonymous"/>} 

                </Route>

                <Route path = "/register">
                   {!user ? <Register/> : <Redirect to="/"/>} 
                </Route>

                <Route path = "/anonymous">
                    <AnonNavbar/>
                   <Anonymous/> 
                </Route>

                

                <Route path = "/login">
                {!user ? <Login/> : <Redirect to="/"/>} 
                </Route>

                
                {
                    user && (
                        <>
                                <Route path = "/movies">
                                    <Navbar user={user}/>
                                    <Home type = "movie"/>
                                </Route>

                                <Route path = "/series">
                                <Navbar user={user}/>
                                    <Home type = "Series"/>
                                </Route>

                                <Route path = "/watch">
                                    <Watch/>
                                </Route>


                                <Route path = {["/search/:searchID","/search"]}>
                                    <Search/>
                                    </Route>
                                
                                <Route path = "/details/:imdbID">
                                    <Details/>
                                </Route>

                                <Route path = "/otherusers/:currentUserID">
                                    <OtherUsers/>
                                </Route>

                                <Route path = {["/profile/:profileID","/profile"]}>
                   <Profile user={user}/>
                </Route>
                        
                        </>
                    )
                }

            </Switch>
        </Router>


        //v 6
//     <Router>
//         <Routes>

// <Route exact path="/" element={<Home/>}>
// </Route>

// <Route path="/movies" element={<Home type="movie"/>}>
// </Route>

// <Route>    
// </Route>

// </Routes>
        
//     </Router>
    );
}

export default App;
