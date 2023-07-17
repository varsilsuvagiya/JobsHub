import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SeekHeader from "./SeekHeader";
import Footer from "../Footer";
import { updateprofile, getregistration } from "../api/common_api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Load from "../Load";
import Typewriter from "typewriter-effect";
import  Loader  from "../Loader";

function Editprofiles() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userdata"));
  //for profile update
  const [fileimage, setFileimage] = useState();
  function handlechange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  //end profile update
  const [data1, setdata1] = useState({
    jsname: userData?.jsname,
    jslname: userData?.jslname,
    jsemail: userData?.jsemail,
    jspwd: userData?.jspwd,
    jsmno: userData?.jsmno,
    jsid: userData?.jsid,
    jsaddress: userData?.jsaddress,
    jsgender: userData?.jsgender,
    jslanguage: userData?.jslanguage,
    jsdob: userData?.jsdob,
    facebook: userData?.facebook,
    twitter: userData?.twitter,
    instagram: userData?.instagram,
    google: userData?.google,
    jsslogan: userData?.jsslogan, 
    jsprofile:userData?.jsprofile,
    experience:userData?.experience,

  });
   
   
   

  
  const [file, setFile] = useState();

  const onHandleChange = (e) => {
    console.log(e.target.files, "eeeeeeeeeee");
    setFile({ ...file, [e.target.name]: e.target.files[0] });
  };
  const onHandleData = (e) => {
    console.log(e.target.files, "eeeeeeeeeee");
    setdata1({ ...data1, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    console.log(data1);

    if (data1.jsname === "") {
      alert("enter your name");
    } else {
      // console.log("dataaaaaaaaaaaaaaaaaaaa", data1);
      const requestOptions = {
        method: "POST",

        body: data1,
      };

      const formdata = new FormData();
      // console.log(data1.jsid, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^6");

      // formdata1.append("logo", data1.jsprofile);
      formdata.append("jsid", data1.jsid);
      formdata.append("jsname", data1.jsname);
      formdata.append("jslname", data1.jslname);
      formdata.append("jsemail", data1.jsemail);
      formdata.append("jspwd", data1.jspwd);
      formdata.append("jsmno", data1.jsmno);
      formdata.append("jsaddress", data1.jsaddress);
      formdata.append("jsgender", data1.jsgender);
      formdata.append("jslanguage", data1.jslanguage);
      formdata.append("jsdob", data1.jsdob);
      formdata.append("jsprofile", data1.jsprofile);
      formdata.append("facebook", data1.facebook);
      formdata.append("twitter", data1.twitter);
      formdata.append("instagram", data1.instagram);
      formdata.append("google", data1.google);
      formdata.append("jsslogan", data1.jsslogan);
      formdata.append("experience", data1.experience);

      const response = await updateprofile(formdata);

      console.log(response, "response");
      if (response.status === 1) {
        toast("Profile Uodated Successfully");
        console.log(response.data,"-------------");
        const result=response.data
        localStorage.setItem('userdata',JSON.stringify(result))
      } else {
        toast.error("Profile Cannot Updated");
      }
    }
  };

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
       {isLoading ? <Loader/> : <div>

      <Load />
      <SeekHeader />
      
        {/* ======================= Page Title ===================== */}
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
                .typeString("Profile Settings")
                .pauseFor(2000)
                .start()
              }}

              />
              
              </h2>
              <p>
                <Link to="/seekerhome" title="Home">
                  Home
                </Link>{" "}
                <i className="ti-angle-double-right" /> Upload profile
              </p>
            </div>
          </div>
        </div>
        {/* ======================= End Page Title ===================== */}
        {/* ================ Profile Settings ======================= */}
        <section className="padd-top-80 padd-bot-80">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div id="leftcol_item">
                  <div className="user_dashboard_pic">
                    {" "}
                    <img src={file} />{" "}
                    <span className="user-photo-action">{data1?.jsname}</span>{" "}
                  </div>
                </div>
                <div className="dashboard_nav_item">
                  <ul>
                    <li>
                      <a href="dashboard.html">
                        <i className="login-icon ti-dashboard" /> Dashboard
                      </a>
                    </li>
                    <li className="active">
                      <Link to="/editprofiles">
                        <i className="login-icon ti-user" /> Edit Profile
                      </Link>
                    </li>
                    <li>
                      <a href="change-password.html">
                        <i className="login-icon ti-key" /> Change Password
                      </a>
                    </li>

                    {/* <button className="btn btn-primary btn-lg" onClick={logout}>
                        <i className="login-icon ti-power-off" /> Logout
                      </button> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="profile_detail_block">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      {console.log(data1, "ghghghg")}
                      <label>First Name</label>
                      <input
                        type="text"
                        name="jsname"
                        value={data1?.jsname}
                        className="form-control"
                        placeholder="First Name"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="jslname"
                        value={data1?.jslname}
                        className="form-control"
                        placeholder="Last Name"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        name="jsemail"
                        value={data1?.jsemail}
                        className="form-control"
                        placeholder="mail@example.com"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="jspwd"
                        value={data1?.jspwd}
                        className="form-control"
                        placeholder="*****"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="text"
                        name="jsmno"
                        value={data1?.jsmno}
                        className="form-control"
                        placeholder="123 214 13247"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        name="jsaddress"
                        value={data1.jsaddress}
                        className="form-control"
                        placeholder="Address"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Gender</label>
                      {/* <select className="wide form-control"  name="jsgender">
                  <option data1-display="Gender">Gender</option>
                  <option value={1}>Male</option>
                  <option value={2}>Female</option>
                </select> */}
                      <input
                        type="text"
                        name="jsgender"
                        value={data1.jsgender}
                        className="form-control"
                        placeholder="Gender"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Language</label>
                      {/* <select className="wide form-control"  name="jslanguage">
                  <option data1-display="Language">Language</option>
                  <option value={1}>English</option>
                  <option value={2}>Hindi</option>
                </select> */}
                      <input
                        type="text"
                        name="jslanguage"
                        value={data1.jslanguage}
                        className="form-control"
                        placeholder="Language"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Experience</label>
                    
                      <input
                        type="text"
                        name="experience"
                        value={data1.experience}
                        className="form-control"
                        placeholder="Language"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Date Of Birth</label>
                      <input
                        type="date"
                        id="dob"
                        name="jsdob"
                        value={data1.jsdob}
                        placeholder="Date Of Birth"
                        data-lang="en"
                        data-large-mode="true"
                        data-min-year={2020}
                        data-max-year={2020}
                        data-disabled-days="08/17/2020,08/18/2020"
                        data-id="datedropper-0"
                        data-theme="my-style"
                        className="form-control"
                        readOnly=""
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <label>User Profile</label>
                    <div className="custom-file-upload">
                      <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={(e) => {
                          setdata1({ ...data1, jsprofile: e.target.files[0] });
                          handlechange(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Facebook</label>
                      <input
                        type="text"
                        name="facebook"
                        value={data1.facebook}
                        className="form-control"
                        placeholder="https://facebook.com/"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Twitter</label>
                      <input
                        type="text"
                        name="twitter"
                        value={data1.twitter}
                        className="form-control"
                        placeholder="https://twitter.com/"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Instagram</label>
                      <input
                        type="text"
                        name="instagram"
                        value={data1.instagram}
                        className="form-control"
                        placeholder="https://instagram.com/"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Google</label>
                      <input
                        type="text"
                        name="google"
                        value={data1.google}
                        className="form-control"
                        placeholder="https://google.com/"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label>Slogan</label>
                      <input
                        type="text"
                        name="jsslogan"
                        value={data1.jsslogan}
                        className="form-control"
                        placeholder="World Most Popular Software Development"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-m theme-btn full-width"
                      onClick={(e) => {
                        submit();

                      }}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================ End Profile Settings ======================= */}
      
      <Footer />
     </div>}
    </>
  );
}

export default Editprofiles;
