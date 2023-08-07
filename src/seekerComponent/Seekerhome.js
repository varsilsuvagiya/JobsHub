import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import Seekerfooter from "./Seekerfooter";
import SeekHeader from './SeekHeader'
import Load from '../Load'
import Typewriter from "typewriter-effect";
import ReactWhatsapp from "react-whatsapp";
import { getjobb } from '../api/common_api';
import { ApiRoutes } from "../constants";
import { Link, Navigate, useNavigate } from "react-router-dom";
import  Loader  from "../Loader";

function Seekerhome() {
  const [joblist, setjoblist] = useState([]);
  
  const getjoblistfunction = async () => {
    const result = await getjobb(joblist);
    
    console.log(result, "data");
    setjoblist(result.data);
  };
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getjoblistfunction();
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
      
    }, 1000);
  }, []);

  return (
   <>
      {isLoading ? <Loader/> : <div>

   <Load/>
    <SeekHeader/>
    <>
  <div
    className="utf_main_banner_area"
    style={{ backgroundImage: "url(assets/img/slider_bg.jpg)" }}
    data-overlay={8}
  >
    <div className="container">
      <div className="col-md-8 col-sm-10">
        <div className="caption cl-white home_two_slid">
        <h2>
          Find & Crack Your <span className="theme-cl">Dream</span>{" "}
            Job.
          </h2>
         
        </div>
      </div>
    </div>
  </div>
  {/* ======================= End Banner ===================== */}
  {/* ================= How to apply job ========================= */}
  <section className="utf_job_category_area">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>How to Apply for Job?</h2>
            <p>
              FOLLOW THIS STEPS
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-4 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-lock" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Log in</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    First you have to login in Job'sHub site then you can apply for any job.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-user" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>New? Register Now</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    If you are not register person then you should register your information to get extra benefits.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-pencil-alt" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Manage Your Profile</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    You can Manage Your Profile for Your Resume details which is shown by Recruiter.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-search" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Search Job</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    You can show all jobs and their extra details as well as also filter job by jobtype,experiance,qualification and others.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-bag" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Apply For Job</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    If you are interested in any job then you can apply for job.
                    At a time you need to upload resume and other details.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-email" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Receive Confirmation Mail</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    After applying for job recruiter can see that you have interested in any job,then Recruiter can send you confirmation mail through Job'sHub.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
         
          
        </div>
      </div>
    </div>
  </section>
  {/* ================= Job start ========================= */}
  <section className="padd-top-80 padd-bot-80">
    <div className="container">
      <div className="tab-content">
        <div
          className="tab-pane fade in show active"
          id="recent"
          role="tabpanel"
        >
          <div className="row">
          {joblist?.map((list) => {
                  return (
                    <>
            {/* Single Job */}
            <div className="col-md-3 col-sm-6">
            
              <div className="utf_grid_job_widget_area">
                {" "}
                <span className="job-type full-type">Full Time</span>
                <div className="utf_job_like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" defaultChecked="" />
                    <i className="fa fa-heart" />
                  </label>
                </div>
                <div className="u-content">
                  <div className="avatar box-80">
                    {" "}
                    <a href="employer-detail.html">
                      {" "}
                      <img
                                  src={`${ApiRoutes.API_HOSTNAME}images/${list.clogo}`}
                                  className="img-responsive"
                                  alt=""
                                />
                    </a>{" "}
                  </div>
                  <h5>
                    <a href="employer-detail.html">{list.cname}</a>
                  </h5>
                  <p className="text-muted">{list.jobtitle}</p>
                </div>
                <div className="utf_apply_job_btn_item">
                  {" "}
                  <Link
                   to="/searchjob"
                    className="btn job-browse-btn btn-radius br-light"
                  >
                    Apply Now
                  </Link>{" "}
                </div>
              </div>
               
            </div>
          
           
            </>
                  );
                })}
           
          </div>
         
        </div>
        
       
      </div>
      <div className="col-md-12 mrg-top-20 text-center">
        <Link to="/searchjob" className="btn theme-btn btn-m">
          Browse All Jobs
        </Link>
      </div>
    </div>
  </section>
</>
<ReactWhatsapp
          number="919664976355"
          message="Hello!!! Can You Help Me ?"
          style={{
            background: "transparent",
            border: "none",
            position: "fixed",
            left: "5px",
            bottom: "24px",
            zIndex: "999999",
          }}
        >
          <img
            src="assets/img/gif.gif"
            className="logotext"
            style={{
              color: "#ffffff",
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
          />
        </ReactWhatsapp>
    <Seekerfooter/>
    </div>}
   </>
  )
}

export default Seekerhome