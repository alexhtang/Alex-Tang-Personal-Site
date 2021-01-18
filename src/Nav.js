import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav(){
    return (
        <nav className="navBar">
            <Link style={{textDecoration: 'none', color: 'black'}} to="/">
            <h3 className="header">PHOTOS BY ALEX TANG ©</h3>
            </Link>
            <ul className="navList">
                <li><a href="https://www.instagram.com/alexhtang/">IG: @ALEXHTANG</a></li>
                <li><a href="https://www.bostonglobe.com/lifestyle/2016/09/22/chronicling-his-city-and-his-adventures/yqagLtfu50aIvEC598DSrJ/story.html">GLOBE INTERVIEW</a></li>
                <li>FAVORITE PHOTOS</li>
                <li><a href="https://open.spotify.com/user/alxtng">MY SPOTIFY</a></li>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/about">
                    <li>ABOUT</li> 
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;