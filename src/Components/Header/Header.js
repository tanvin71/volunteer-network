import React from 'react';
import { Link } from 'react-router-dom';
import logo from'../../images/Group 1329.png';
import'./Header.css';

const Header = () => {
    return (
        <div>
            <div className="nav">
                <div className="nav-img">
                    <img src={logo} alt=""/>
                </div>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/donation">Donation</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/register"><button className="btn btn-primary">Register</button></Link>
                    <Link to="/admin"><button className="btn btn-dark">admin</button></Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;