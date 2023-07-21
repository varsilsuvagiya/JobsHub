import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    
  {/* ================= footer start ========================= */}
 
  <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <a href="index-2.html">
          <img className="footer-logo" src="assets/img/blwhole.png" alt="" />
        </a>
        <p>
          Job'sHub Is Company which provide online platform for you if you need any job or you want to hire someone for your work.
        </p>
        {/* Social Box */}


        

      </div>



      <div className="col-md-3 col-sm-6">
        <h4>For JobRecruiters</h4>

        <ul>
          <li>
            <i className="fa fa-angle-double-right" /> Search Job
          </li>
          <li>
            <i className="fa fa-angle-double-right" /> Apply For Job
          </li>
          <li>
            <i className="fa fa-angle-double-right" /> Manage Profile
          </li>

          <li>
            <i className="fa fa-angle-double-right" /> Contact Us
          </li>
        </ul>
      </div>
      <div className="col-md-3 col-sm-6">
        <h4>For JobSeekers</h4>
        <ul>
          <li>
            <i className="fa fa-angle-double-right" /> Post Job
          </li>
          <li>
            <i className="fa fa-angle-double-right" /> Manage Job
          </li>
          <li>
            <i className="fa fa-angle-double-right" /> Subscription Package
          </li>
          <li>
            <i className="fa fa-angle-double-right" /> Report a Problem
          </li>

        </ul>
      </div>
      <div className="col-md-3 col-sm-6">
        <h4>Get In Touch</h4>
        <div className="f-social-box">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-facebook facebook-cl" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google google-plus-cl" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter twitter-cl" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram instagram-cl" />
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>

  <div className="row">
    <div className="col-md-12">
      <div className="copyright text-center">
        <p>Copyright © 2023 All Rights Reserved.</p>
      </div>
    </div>
  </div>

</footer>
  <div><Link to="/" className="scrollup">Scroll</Link></div>
</>

    
  )
}

export default Footer