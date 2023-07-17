import React, { useEffect, useState } from 'react'
import SeekHeader from "./SeekHeader";
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Load from '../Load';
import { downloadInvoice, getregistration } from '../api/common_api';
import { ApiRoutes } from "../constants";
import Seekerfooter from './Seekerfooter';
import Typewriter from "typewriter-effect";
import  Loader  from "../Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Resumedetail() {

  const userData = JSON.parse(localStorage.getItem("userdata")); //for fill data from registration

  const resumedownloader=async(data)=>{
    const response = await downloadInvoice(data);
    toast.success("Your Resume Download Successfully.. Check Your Mail ")
  }
  console.log(userData, "userdata");
  const [data1, setdata1] = useState({
    jsname: userData?.jsname, //for fill data
    jslname: userData?.jslname,
    jsemail: userData?.jsemail,
    jspwd: userData?.jspwd,
    jsmno: userData?.jsmno,
    jsaddress: userData?.jsaddress,
    jsgender: userData?.jsgender,
    jslanguage: userData?.jslanguage,
    jsdob: userData?.jsdob,
    facebook: userData?.facebook,
    twitter: userData?.twitter,
    instagram: userData?.instagram,
    google: userData?.google,
    jsslogan: userData?.jsslogan,
    jsprofile: userData?.jsprofile,
    experience: userData?.experience,
    jsid: userData?.jsid,
  });
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getregistration();
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
    {/* ======================= Start Page Title ===================== */}
    <div className="page-title">
      <div className="container">
        <div className="page-caption">
          <h2>
          <Typewriter
               options={{
               autoStart: true,
               loop: true,
              }}
              onInit={(typewriter)=>{
                typewriter
                .typeString("Resume Detail")
                .pauseFor(2000)
                .start()
              }}

              />
          </h2>
          <p>
            <Link to="/seekerhome" title="Home">
              Home
            </Link>{" "}
            <i className="ti-angle-double-right" /> Resume Detail
          </p>
        </div>
      </div>
    </div>
    {/* ======================= End Page Title ===================== */}
    {/* ====================== Resume Detail ================ */}
    <section className="padd-top-80 padd-bot-80">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-7">
            <div className="detail-wrapper">
              <div className="detail-wrapper-body">
                <div className="row">
                  <div className="col-md-4 text-center user_profile_img mrg-bot-30">
                    {" "}
                    <img
                    src={`${ApiRoutes.API_HOSTNAME}images/${data1?.jsprofile}`}

                      className="img-circle width-100"
                      alt=""
                    />
                    <h4 className="meg-0">{data1?.jsname}</h4>
                    {/* <span>Front End Designer</span> */}
                  </div>
                  <div className="col-md-8 user_job_detail">
                    <div className="col-md-12 mrg-bot-10">
                      {" "}
                      <i className="ti-location-pin padd-r-10" />
                      {data1?.jsaddress}
                {" "}
                    </div>
                    <div className="col-md-12 mrg-bot-10">
                      {" "}
                      <i className="ti-email padd-r-10" />
                      {data1?.jsemail}
                      {" "}
                    </div>
                    <div className="col-md-12 mrg-bot-10">
                      {" "}
                      <i className="ti-mobile padd-r-10" />
                      {data1?.jsmno}
                      {" "}
                    </div>
                    
                    <div className="col-md-12 mrg-bot-10">
                      {" "}
                      <i className="ti-shield padd-r-10" />
                      {data1?.experience}

                      {" "}
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="detail-wrapper">
              <div className="detail-wrapper-header">
                <h4>Career</h4>
              </div>
              <div className="detail-wrapper-body">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature from
                  45 BC, making it over 2000 years old. Richard McClintock, a
                  Latin professor at Hampden-Sydney College in Virginia, looked up
                  one of the more obscure Latin words, consectetur.
                </p>
                <p>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
            </div>
            <div className="detail-wrapper">
              <div className="detail-wrapper-header">
                <h4>Education</h4>
              </div>
              <div className="detail-wrapper-body">
                <div className="edu-history info">
                  {" "}
                  <i />
                  <div className="detail-info">
                    <h3>University</h3>
                    <i>2020 - 2020</i>{" "}
                    <span>
                      {" "}
                      denouncing pleasure and praising pain <i>It Computer</i>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                </div>
                <div className="edu-history danger">
                  {" "}
                  <i />
                  <div className="detail-info">
                    <h3>Intermediate School</h3>
                    <i>2015 - 2020</i>{" "}
                    <span>
                      denouncing pleasure and praising pain <i>It Computer</i>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                </div>
                <div className="edu-history success">
                  {" "}
                  <i />
                  <div className="detail-info">
                    <h3>High School</h3>
                    <i>2012 - 2015</i>{" "}
                    <span>
                      denouncing pleasure and praising pain <i>It Computer</i>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail-wrapper">
              <div className="detail-wrapper-header">
                <h4>Work &amp; Experience</h4>
              </div>
              <div className="detail-wrapper-body">
                <div className="edu-history info">
                  {" "}
                  <i />
                  <div className="detail-info">
                    <h3>Php Developer</h3>
                    <i>2008 - 2012</i>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                </div>
                <div className="edu-history danger">
                  {" "}
                  <i />
                  <div className="detail-info">
                    <h3>Java Developer</h3>
                    <i>2012 - 2014</i>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                </div>
                <div className="edu-history success">
                  {" "}
                  <i />
                  <div className="detail-info">
                    <h3>CMS Developer</h3>
                    <i>2014 - 2018</i>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="col-md-4 col-sm-5">
            <div className="sidebar">
              <div className="widget-boxed">
                <div className="text-center">
                  <button type="submit" className="btn btn-m btn-primary"
                  onClick={()=>{

                    resumedownloader(userData);
                  }}>
                    Download Resume
                  </button>
                </div>
              </div>
              <div className="widget-boxed">
                <div className="widget-boxed-header">
                  <h4>
                    <i className="ti-location-pin padd-r-10" />
                    Location
                  </h4>
                </div>
                <div className="widget-boxed-body">
                  <div className="side-list no-border">
                    <ul>
                      <li>
                        <i className="ti-credit-card padd-r-10" />
                        {data1?.jsaddress}

                      </li>
                      <li>
                        <i className="ti-world padd-r-10" />
                      {data1?.google}
                        
                      </li>
                      <li>
                        <i className="ti-mobile padd-r-10" />
                      {data1?.jsmno}
                       
                      </li>
                      <li>
                        <i className="ti-email padd-r-10" />
                      {data1?.jsemail}
                        
                      </li>
                     
                      <li>
                        <i className="ti-shield padd-r-10" />                    
                        {data1?.experience}

                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End: Job Overview */}
              {/* Start: Opening hour */}
              {/* <div className="widget-boxed">
                <div className="widget-boxed-header">
                  <h4>
                    <i className="ti-headphone padd-r-10" />
                    Contact Now
                  </h4>
                </div>
                <div className="widget-boxed-body">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name *"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email *"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                    <textarea
                      className="form-control height-140"
                      placeholder="Message..."
                      defaultValue={""}
                    />
                    <button className="btn theme-btn full-width mrg-bot-20">
                      Send Email
                    </button>
                  </form>
                </div>
              </div> */}
              {/* End: Opening hour */}
            </div>
          </div>
          {/* End Sidebar */}
        </div>
        {/* End Row */}
      </div>
    </section>
    {/* ====================== End Resume Detail ================ */}

  <Seekerfooter />
  </div>}
  </>

  )
}

export default Resumedetail