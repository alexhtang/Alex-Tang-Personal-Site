import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav(){
    return (
        <div className="overnav">
            <div className="headerwrap">
                <Link style={{textDecoration: 'none', color: 'black'}} to="/">
                    <h3 className="header">Photos by Alex Tang ©</h3>
                </Link>
            </div>
            <input type="checkbox" id="toggle"></input>
            <nav className="navBar">
                <ul>
                    <li><a href="https://www.instagram.com/alexhtang/">IG: @alexhtang</a></li>
                    <li><a href="https://www.bostonglobe.com/lifestyle/2016/09/22/chronicling-his-city-and-his-adventures/yqagLtfu50aIvEC598DSrJ/story.html">GLOBE INTERVIEW</a></li>
                    {/* <li>FAVORITE PHOTOS</li> */}
                    <li><a href="https://open.spotify.com/user/alxtng">My Spotify</a></li>
                    <Link style={{textDecoration: 'none', color: 'black'}} to="/about">
                        <li>About</li> 
                    </Link>
                </ul>
            </nav>
            <label for="toggle">
                <FontAwesomeIcon className='baricon' icon={faBars} />
            </label>
            <div className="credit"><p>Website created by Alex Tang</p></div>
        </div>
    )
}

export default Nav;