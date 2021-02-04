import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav(){
    return (
        <div className="overnav">
            <Link style={{textDecoration: 'none', color: 'black'}} to="/">
                <h3 className="header">PHOTOS BY ALEX TANG ©</h3>
            </Link>
            <input type="checkbox" id="toggle"></input>
            <nav className="navBar">
                <ul>
                    <li><a href="https://www.instagram.com/alexhtang/">IG: @ALEXHTANG</a></li>
                    <li><a href="https://www.bostonglobe.com/lifestyle/2016/09/22/chronicling-his-city-and-his-adventures/yqagLtfu50aIvEC598DSrJ/story.html">GLOBE INTERVIEW</a></li>
                    <li>FAVORITE PHOTOS</li>
                    <li><a href="https://open.spotify.com/user/alxtng">MY SPOTIFY</a></li>
                    <Link style={{textDecoration: 'none', color: 'black'}} to="/about">
                        <li>ABOUT</li> 
                    </Link>
                </ul>
            </nav>
            <label for="toggle">
                <FontAwesomeIcon className='baricon' icon={faBars} />
            </label>
        </div>
    )
}

export default Nav;