import React from 'react';
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css';
import navImage from '../../Images/logo-300x50.png'


export default function Navbar() {
  return (
<>
<nav className="navbar navbar-expand-lg ">

  <div className="container-fluid innerNav">
    <a className="navbar-brand" href="#">
        <div className="navBrand">
            <div className="navImage">
                <img className='sora' src={navImage} alt="" />
            </div>
        </div>
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/features'>Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/pricing'>Pricing</Link>
        </li> <li className="nav-item">
          <Link className="nav-link" to='/blog'>Blog</Link>
        </li> 
      </ul>
     
    </div>
  </div>
</nav>
    </>  )
}
