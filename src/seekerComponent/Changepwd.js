import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { changepwd, getpwd } from "../api/common_api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typewriter from "typewriter-effect";

function Changepwd() {
  const userData = JSON.parse(localStorage.getItem("userdata"));
 

  
  const[data2,setdata2]=useState({
    jsid: userData?.jsid,
    jspwd:"",
    jspwdn:""
  
  });
    const onHandleData = (e) => {
    setdata2({ ...data2, [e.target.name]: e.target.value });
  };
    const submit = async () => {

    if (data2.jspwdn === "") {
      alert("enter your pwd");
    }
else{
      const response = await changepwd(data2);

      if (response.status === 1) {
       
        toast("Change Password Successfully");
      } else {
        toast.error("Password Cannot Updated");
      }
    }
    
  }


  return (
    <div>
      <>
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
                .typeString("Change Password")
                .pauseFor(2000)
                .start()
              }}

              />
              
              </h2>
              <p>
                <Link to="/seekerhome" title="Home">
                  Home
                </Link>{" "}
                <i className="ti-angle-double-right" /> Change Password
              </p>
            </div>
          </div>
        </div>
        {/* ======================= End Page Title ===================== */}
        {/* ================ Change Password ======================= */}
        <section className="padd-top-80 padd-bot-80">
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-9 ">
                <div className="profile_detail_block">
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Old Password</label>
                      <input
                        type="text"
                        name="jspwd"
                        className="form-control"
                        placeholder="*****"
                        // value={data1?.jspwd}
                        onChange={(e) => onHandleData(e)}
                      
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>New Password</label>
                      <input
                        type="text"
                        name="jspwdn"
                        // value={data2.jspwd}
                       

                        className="form-control"
                        placeholder="*****"
                         onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input
                        type="text"
                        name="jsrepwd"
                        value={data2.jsrepwd}
                        className="form-control"
                        placeholder="*****"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="col-md-12 padd-top-10 text-center">
                    {" "}
                    <button  className="btn btn-m theme-btn full-width"
                     onClick={() => {
                        submit();
                      }}>
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="row">
          <div className="col-md-12">
            <div className="copyright text-center">
              <p>Copyright © 2023 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Changepwd;
