import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {  Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Load from "../Load";
import SeekHeader from "./SeekHeader";
import { getjobd } from "../api/common_api";
import Seekerfooter from "./Seekerfooter";
import { ApiRoutes } from "../constants";
import Typewriter from "typewriter-effect";
import "react-responsive-modal/styles.css";
import { applyjob, getjob } from "../api/common_api";
import { Modal } from "react-responsive-modal";

function Jobdetail() {
  const navigate = useNavigate();
  const [joblist, setjoblist] = useState([]);
  const [file, setFile] = useState();
  const [apply, setapply] = useState();
  const userData = JSON.parse(localStorage.getItem("userdata"));
 
  const { state } = useLocation();
  console.log(state,"state")
  const onHandleData = (e) => {
    console.log(e.target.files, "eeeeeeeeeee");
    setapply({ ...apply, [e.target.name]: e.target.value });
  };

  const handleApplyData = (listData) => {
    setapply({ ...apply, companyid: listData.companyid });
  };

  const onHandleChange = (e) => {
    console.log(e.target.files, "eeeeeeeeeee");
    setFile({ ...file, [e.target.name]: e.target.files[0] });
  };
 
  const submit = async () => {
   

    if (apply.name === "") {
      alert("enter your name");
    } else {
     
      const requestOptions = {
        method: "POST",
        body: apply,
      };
      console.log(apply, "hghffhf");

      const formdata = new FormData();

      formdata.append("name", apply.name);
      formdata.append("email", apply.email);
      formdata.append("mno", apply.mno);
      formdata.append("uploadcv", apply.uploadcv);
      formdata.append("companyid",state?.data?.companyid);
      formdata.append("jsid", apply.jsid);

      const response = await applyjob(formdata);

      console.log(response, "response");
      if (response.status === 1) {
        toast("Apply Job successfully");
      } else {
        toast.error("Cannot Apply Job ");
      }
    }
  };
  useEffect(() => {

    setapply({ ...apply, jsid: userData?.jsid });
  }, []);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      
      <Modal open={open} onClose={onCloseModal} center>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            <h3>APPLY HERE...</h3>
          </span>
          <span></span>
        </div>
        <hr />
        <div className="scr" style={{ height: "400px", overflow: "auto" }}>
          <div className="profile_detail_block">
            <div className="text-center mrg-bot-20">
              {/* <h4 className="mrg-0">Front End Designer</h4> */}
              {/* <span>2708 Scenic Way, Sutter</span> */}
            </div>
            <form>
              <div className="col-md-6 col-sm-6">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  onChange={(e) => onHandleData(e)}
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => onHandleData(e)}
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <label>Phone</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone No"
                  name="mno"
                  onChange={(e) => onHandleData(e)}
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <label>Upload CV</label>
                <div className="custom-file-upload">
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => {
                      setapply({
                        ...apply,
                        uploadcv: e.target.files[0],
                      });
                      onHandleChange(e);
                    }}
                  />
                </div>
              </div>

              <div className="col-md-12 text-center">
                <button
                  onClick={() => {
                    submit();
                    onCloseModal();
                  }}
                  type="button"
                  className="btn theme-btn btn-m full-width"
                >
                  APPLY JOB
                </button>
              </div>
              <div className="clearfix" />
            </form>
          </div>
        </div>
      </Modal>
      
    

      <SeekHeader />
      <div className="page-title">
        <div className="container">
          <div className="page-caption">
            <h2>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString("Job Detail").pauseFor(2000).start();
                }}
              />
            </h2>
            <p>
              <Link to="/seekerhome" title="Home">
                Home
              </Link>{" "}
              <i className="ti-angle-double-right" /> Job Detail
            </p>
          </div>
        </div>
      </div>
      {/* ======================= End Page Title ===================== */}
      {/* ================ Profile Settings ======================= */}
      {/* {list.map((list) => {  
               
                return( */}
      {/* <>            */}
      <section className="padd-top-80 padd-bot-60">
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-md-8 col-sm-7">
              <div className="detail-wrapper">
                <div className="detail-wrapper-body">
                  <div className="row">
                    <div className="col-md-4 text-center user_profile_img">
                      {" "}
                      <img
                        src={`${ApiRoutes.API_HOSTNAME}images/${state.data.clogo}`}
                        className="width-100"
                        alt=""
                      />
                      <h4 className="meg-0"> {state.data.jobtitle}</h4>
                      {/* <span>512 Big Tower, New Delhi</span> */}
                      <div className="text-center">
                      <button
                                    onClick={() => {
                                      onOpenModal();
                                      handleApplyData(state?.data?.companyid);
                                    }}
                                    className="btn-job theme-btn job-apply"
                                   
                                  >
                                    Apply Now
                                  </button>
                      </div>
                    </div>
                    <div className="col-md-8 user_job_detail">
                      <div className="col-sm-12 mrg-bot-10">
                        {" "}
                        <i className="ti-credit-card padd-r-10" />
                        {state.data.salaryamount}{" "}
                      </div>
                      <div className="col-sm-12 mrg-bot-10">
                        {" "}
                        <i className="ti-mobile padd-r-10" />
                        {state.data.mno}{" "}
                      </div>
                      <div className="col-sm-12 mrg-bot-10">
                        {" "}
                        <i className="ti-email padd-r-10" />
                        {state.data.email}{" "}
                      </div>
                      <div className="col-sm-12 mrg-bot-10">
                        {" "}
                        <i className="ti-calendar padd-r-10" />
                        <span className="full-type">
                          {state.data.jobname}
                        </span>{" "}
                      </div>
                      <div className="col-sm-12 mrg-bot-10">
                        {" "}
                        <i className="ti-user padd-r-10" />
                        <span className="cl-danger">
                          {state.data.vacancy}
                        </span>{" "}
                      </div>
                      <div className="col-sm-12 mrg-bot-10">
                        {" "}
                        <i className="ti-shield padd-r-10" />
                        {state.data.ename}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detail-wrapper">
                <div className="detail-wrapper-header">
                  <h4>Job Description</h4>
                </div>
                <div className="detail-wrapper-body">
                  <p>
                    "On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue.
                  </p>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga.
                  </p>
                </div>
              </div>
              <div className="detail-wrapper">
                <div className="detail-wrapper-header">
                  <h4>Job Skill</h4>
                </div>
                <div className="detail-wrapper-body">
                  <ul className="detail-list">
                    <li>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text{" "}
                    </li>
                    <li>
                      Latin professor at Hampden-Sydney College in Virginia{" "}
                    </li>
                    <li>
                      looked up one of the more obscure Latin words,
                      consectetur, from a Lorem Ipsum passage ideas{" "}
                    </li>
                    <li>
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced{" "}
                    </li>
                    <li>
                      accompanied by English versions from the 1914 translation
                      by H. Rackham{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="detail-wrapper">
                <div className="detail-wrapper-header">
                  <h4>Location</h4>
                </div>
                <div className="detail-wrapper-body">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.566512514854!2d76.8192921147794!3d30.702470481647698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fecca1d6c0001%3A0xe4953728a502a8e2!2sChandigarh!5e0!3m2!1sen!2sin!4v1520136168627"
                    width="100%"
                    height={320}
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen=""
                  />
                </div>
              </div>
              <div className="detail-wrapper">
                <div className="detail-wrapper-header">
                  <h4>Requirements</h4>
                </div>
                <div className="detail-wrapper-body">
                  <ul className="detail-list">
                    <li>
                      There are many variations of passages of Lorem Ipsum
                      available
                    </li>
                    <li>
                      the majority have suffered alteration in some form
                      slightly
                    </li>
                    <li>
                      you need to be sure there isn't anything embarrassing
                      hidden
                    </li>
                    <li>
                      generators on the Internet tend to repeat predefined
                      chunks as necessary
                    </li>
                    <li>
                      making this the first true generator on the Internet It
                      uses a dictionary
                    </li>
                    <li>
                      Ability to solve problems creatively and effectively
                    </li>
                    <li>
                      combined with a handful of model sentence structures
                    </li>
                    <li>
                      standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-md-4 col-sm-5">
              <div className="sidebar">
                {/* Start: Job Overview */}
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
                          {state.data.salaryamount}
                        </li>
                        <li>
                          <i className="ti-world padd-r-10" />
                          {state.data.websitelink}
                        </li>
                        <li>
                          <i className="ti-mobile padd-r-10" />
                          {state.data.mno}
                        </li>
                        <li>
                          <i className="ti-email padd-r-10" />
                          {state.data.email}
                        </li>
                        <li>
                          <i className="ti-pencil-alt padd-r-10" />
                          Bachelor
                        </li>
                        <li>
                          <i className="ti-shield padd-r-10" />
                          {state.data.ename}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End: Job Overview */}
                {/* Start: Opening hour */}
                <div className="widget-boxed">
                  <div className="widget-boxed-header">
                    <h4>
                      <i className="ti-time padd-r-10" />
                      Opening Hours
                    </h4>
                  </div>
                  <div className="widget-boxed-body">
                    <div className="side-list">
                      <ul>
                        <li>
                          Monday <span> {state.data.workingtime}</span>
                        </li>
                        <li>
                          Tuesday <span>{state.data.workingtime}</span>
                        </li>
                        <li>
                          Wednesday <span>{state.data.workingtime}</span>
                        </li>
                        <li>
                          Thursday <span>{state.data.workingtime}</span>
                        </li>
                        <li>
                          Friday <span>{state.dataworkingtime}</span>
                        </li>
                        <li>
                          Saturday <span>{state.data.workingtime}</span>
                        </li>
                        <li>
                          Sunday <span>Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Start: Location */}
                <div className="widget-boxed">
                  <div className="widget-boxed-header">
                    <h4>
                      <i className="ti-time padd-r-10" />
                      Location
                    </h4>
                  </div>
                  <div className="widget-boxed-body">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.566512514854!2d76.8192921147794!3d30.702470481647698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fecca1d6c0001%3A0xe4953728a502a8e2!2sChandigarh!5e0!3m2!1sen!2sin!4v1520136168627"
                      width="100%"
                      height={360}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Row */}
        </div>
      </section>
      {/* </> */}
      {/* )
            })} */}
      <Seekerfooter />
    </>
  );
}

export default Jobdetail;
