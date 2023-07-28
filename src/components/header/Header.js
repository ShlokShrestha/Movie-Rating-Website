import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
      <div className="left-side">
        <Link to="/"  className='link-name'><img className='logo'  src='../img/logo.jpg' alt="abc"/></Link>
        <Link to="/movies/popular" className='link-name'>Popular</Link>
        <Link to="/movies/top_rated" className='link-name'>Top Rated</Link>
        <Link to="/movies/upcoming" className='link-name'>Upcoming</Link>
      </div>
    </div>
  )
}

export default Header
