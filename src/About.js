import React from 'react';
import './App.css';

function About(){
    return (
        <div className="aboutwrap">
            <h1 className="aboutheader">About Me</h1>
            <img className="aboutpic" src="https://i.imgur.com/JltdjoN.jpg" alt="self portrait" />
            <p className="abouttext">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )
}

export default About;