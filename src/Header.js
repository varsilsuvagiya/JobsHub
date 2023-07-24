import React from 'react'
import { Link } from 'react-router-dom'
import Load from "./Load"

import Home from './Home'
function Header() {
  return (
    
        <>
  {/* ======================= Start Navigation ===================== */}
  <nav className="navbar navbar-default navbar-mobile navbar-fixed white bootsnav on no-background">
    <div className="container">
      <div className="navbar-header">
      
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#navbar-menu"
        >
          {" "}
          <i className="fa fa-bars" />{" "}
        </button>
        <Link className="navbar-brand" to="/home">
          {" "}
          <img
            src="assets/img/whwhole.png"
            className="logo logo-display"
            alt=""
          />{" "}
          <img
            src="assets/img/blwhole.png"
            className="logo logo-scrolled"
            alt=""
          />{" "}
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="navbar-menu">
       
        <ul class="nav navbar-nav navbar-right">
        <li class="br-right"><Link className="btn-signup red-btn" to="/recruitersignup"><i class="ti-briefcase"></i> &nbsp; I am Recruiter</Link></li>
        <li class="sign-up"><Link className="btn-signup red-btn" to="/seekersignup"><span class="login-icon ti-user"></span> &nbsp; I am Seeker</Link></li>
      </ul>
        {/* <ul className="nav navbar-nav navbar-right  "> */}
   
        {/* <li className="dropdown ">
            {" "}
            <a href="#" className="dropdown-toggle btn-signup red-btn" data-toggle="dropdown"> <i className="login-icon ti-user" />
              Login
            </a>
            <ul className="dropdown-menu">
            
              <li>
                <Link to="/recruiterlogin">Login as Company</Link>
              </li>
              <li>
                <Link to="/seekerlogin">Login as User</Link>
              </li>
             
            </ul>
          </li> */}
          {/* <li className='dropdown'>
          {" "}
            <a href="#" className="dropdown-toggle btn-signup red-btn" data-toggle="dropdown"> <i className="login-icon ti-user" />
              Register
            </a>
            <ul className="dropdown-menu animated fadeOutUp">
            
              <li>
                <Link to="/recruitersignup">Register as Company</Link>
              </li>
              <li>
                <Link to="/seekersignup">Register as User</Link>
              </li>
             
            </ul>
          </li> */}
          {/* <li className="sign-up">
            <Link className="btn-signup red-btn" to="/signup">
              <span className="ti-briefcase" />
              Register
            </Link>
          </li> */}
          {/* <li className="br-right">
            <Link
              className="btn-signup red-btn"
              to="/login"
              data-toggle="modal"
              data-target="#signin"
            >
              <i className="login-icon ti-user" />
              Login
            </Link>
          </li> */}
        
        {/* </ul> */}
        
      </div>
    </div>
  </nav>
  {/* ======================= End Navigation ===================== */}
  {/* Signup Code */}
 <Load/>
  
</>

    
  )
}

export default Header