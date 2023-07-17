import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Load from "../Load";
import Home from "../Home";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SeekHeader() {
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/home");
    toast.warning("You Have Been Logout",{position: "top-center"})
  }
  return (
    <>
      <Load />
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
            <Link className="navbar-brand" to="/seekerhome">
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
            <ul
              className="nav navbar-nav navbar-left"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li>
                <Link to="/seekerhome">Home</Link>
              </li>
              <li>
                <Link to="/searchjob">Search job</Link>
              </li>
              <li>
                <Link to="/seekerprofile">Seeker profile</Link>
              </li>
              <li>
                <Link to="/resumedetail">Resume Detail</Link>
              </li>

              <li>
                {" "}
                <Link to="/contactuss">Contact Us</Link>{" "}
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="br-right">
                {/* <button
                  className="btn btn-primary "
                  id="btn_logout"
                  onClick={logout}
                >
                  <i className="login-icon ti-power-off" /> Logout
                </button> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ======================= End Navigation ===================== */}
      {/* Signup Code */}
      <Load />
    </>
  );
}

export default SeekHeader;
