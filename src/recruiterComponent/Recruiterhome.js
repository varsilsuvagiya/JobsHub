import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import Recruiterfooter from "./Recruiterfooter";
import RecHeader from './RecHeader'
import { Link } from 'react-router-dom'
import Load from '../Load'
import Typewriter from "typewriter-effect";
import ReactWhatsapp from "react-whatsapp";
import  Loader  from "../Loader";
import { getcategory } from '../api/common_api';

function Recruiterhome() {
    const [catlist, setcatlist] = useState([]);
 
  const getcatlistfunction = async () => {
    const result = await getcategory();
    console.log(result);
    setcatlist(result.data);
    
  };
  const [dataa, setDataa] = useState(null);
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
  setTimeout(() => {
    setDataa("Some data");
    setIsLoading(false);
    getcatlistfunction();

  }, 1000);
}, []);
  return (
   <>
       {isLoading ? <Loader/> : <div>

   <Load/>
    <RecHeader/>
    
  <div
    className="utf_main_banner_area"
    style={{ backgroundImage: "url(assets/img/blog-banner.jpg)" }}
    data-overlay={8}
  >
    <div className="container">
      <div className="col-md-8 col-sm-10">
        <div className="caption cl-white home_two_slid">
        <h2>
         Join The Workforce<span className="theme-cl">Revolution</span>{" "}
      
          </h2>
        </div>
      </div>
    </div>
  </div>
  {/* ================= How to post job ========================= */}
  <section className="utf_job_category_area">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>How to Post a Job?</h2>
            <p>
              FOLLOW THIS STEPS
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-4 col-sm-6">
            <a  title="">
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
                    First you have to login in Job'sHub site then you can post any job.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a  title="">
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
            <a  title="">
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
                    You can Manage Your Profile which is shown by job seeker.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a  title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-pencil" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Post Job</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    You can post a job by adding information about require job.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-settings" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Manage Job</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    You can manage details of job posts which are posted by you for difference requirements. 
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a  title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-comment" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Receive Message</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    Receive seeker details who is apply for your posted job to check and give response.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
         
          
        </div>
      </div>
    </div>
  </section>
  {/* ================= Category start ========================= */}
  <section className="utf_job_category_area">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>Job Categories</h2>
            <p>
             
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
        {catlist?.map((list) => {
                return (
                  <>
          <div className="col-md-3 col-sm-6">
              <div className="utf_category_box_area">
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="icon-bargraph" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>{list.cname}</h4>
                    {/* <p>122 Jobs</p> */}
                  </div>
                </div>
              </div>
          </div>
          </>
                );
              })}
          
        </div>
      </div>
    </div>
  </section>

  <ReactWhatsapp
          number="919664976355"
          message="Hello!!! I Need Help ?"
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

    <Recruiterfooter/>
    </div>}
   </>
  )
}

export default Recruiterhome