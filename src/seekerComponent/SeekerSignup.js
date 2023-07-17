import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { insert } from "../api/common_api";
import Typewriter from "typewriter-effect";

import Load from "../Load";
import Loader from "../Loader";
function SeekerSignup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setdata] = useState();
  function update(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  async function submit() {
    const response = await insert(data);
    if (response.status === 1) {
      toast("Seeker Signup Successfully");
      navigate("/seekerlogin");
    }
    else  if (response.status === 0) {
      toast.error(" Your E-mail Id Is already Exist.....");
    
    } 
    else {
      toast.error("Recruiter Can't Signup");
    }
  }
  const [dataa, setDataa] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDataa("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
    {isLoading ? <Loader/> : <div>
      <Load />
      <>
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
                .typeString("Seeker Signup")
                .pauseFor(2000)
                .start()
              }}

              />
              
              </h2>
              <p>
                <Link to="/home" title="Home">
                  Home
                </Link>{" "}
                <i className="ti-angle-double-right" /> SignUp
              </p>
            </div>
          </div>
        </div>
        {/* ======================= End Page Title ===================== */}
        {/* ====================== Start Signup Form ============= */}
        <section className="padd-top-80 padd-bot-80">
          <div className="container">
            <div className="log-box">
              <form
                className="log-form"
                method="POST"
                onSubmit={handleSubmit(submit)}
              >
                <div className="col-md-6">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="jsname"
                      //  value={data.jsname}
                      className="form-control"
                      placeholder="First Name"
                      {...register("jsname", { required: true })}
                      onChange={(e) => update(e)}
                    />
                    {errors.jsname && <p className="err">Please Provide Your First Name</p>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="jslname"
                      // value={data.jslname}
                      className="form-control"
                      placeholder="Last Name"
                      {...register("jslname", { required: true })}
                      onChange={(e) => update(e)}
                    />
                    {errors.jslname && <p className="err">Please Provide Your Last Name</p>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="jsemail"
                      //  value={data.jsemail}
                      className="form-control"
                      placeholder="Email"
                      {...register("jsemail", {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                      onChange={(e) => update(e)}
                    />
                    {errors.jsemail && <p className="err">Please Provide Your Email</p>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="jspwd"
                      // value={data.jspwd}
                      className="form-control"
                      placeholder="****"
                      {...register("jspwd", {
                        required: true,
                        maxLength: 10,
                      })}
                      onChange={(e) => update(e)}
                    />
                    {errors.jspwd && <p className="err">Please Provide Your Password</p>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      name="jsrepwd"
                      className="form-control"
                      placeholder="****"
                      // value={data.jsrepwd}
                      {...register("jsrepwd", {
                        required: true,
                        maxLength: 10,
                      })}
                      onChange={(e) => update(e)}
                    />
                    {errors.jsrepwd && (
                      <p className="err">Please Provide Your Retype Password</p>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="number"
                      name="jsmno"
                      // value="91"
                      defaultValue={91}
                      // value={data.jsmno}
                      // maxlength={10}
                      className="form-control"
                      placeholder="Phone Number"
                      {...register("jsmno", { required: true,  maxLength: 12 ,minLength:12 })}
                      onChange={(e) => update(e)}
                    />
                    {errors.jsmno && <p className="err">Please Provide Your Mobile No</p>}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group text-center mrg-top-15">
                    <button
                      type="submit"
                      className="btn theme-btn btn-m full-width"
                      // onClick={(e) => submit(e)}
                    >
                      Sign Up
                    </button>
                  </div>
                  Already have an account?{" "}
                  <Link to="/seekerlogin" className="login" title="Home">
                    Login
                  </Link>{" "}
                </div>
                <div className="clearfix" />
              </form>
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
        </div>}
    </>
  
  );
}

export default SeekerSignup;
