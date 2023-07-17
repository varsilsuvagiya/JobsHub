import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Typewriter from "typewriter-effect";

import { insertrec } from "../api/common_api";
import Load from "../Load";
import  Loader  from "../Loader";

function RecruiterSignup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //registration api
  const [newdata, setnewdata] = useState();
  function update(e) {
    setnewdata({ ...newdata, [e.target.name]: e.target.value });
  }
async  function submit() {
    
     
    const response=await insertrec(newdata);
    console.log(newdata,"newdata")
    if(response.status===1)
    {
      toast("Recruiter Signup Successfully");
    navigate("/recruiterlogin");
    }  
       else  if (response.status === 0) {
      toast.error(" Your E-mail Id Is already Exist.....");
    
    }                
   else{
      toast.error("Recruiter Can't Signup");
    }
    } 
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
 
    
      <Load/>
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
                .typeString("Recruiter Signup")
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
              <form className="log-form"  onSubmit={handleSubmit(submit)}>
                <div className="col-md-6">
                  <div className="form-group">
                    <label> Company Name</label>
                    <input
                      type="text"
                      name="cname"
                      {...register("cname", { required: true })}
                      className="form-control"
                      placeholder="Name"
                      onChange={(e) => update(e)}
                    
                    />
                    {errors.cname && <p className="err">Please Provide Your Company Name</p>}

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                      onChange={(e) => update(e)}

                    />
                    {errors.email && <p className="err">Please Provide Your Email</p>}

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="pwd"
                      className="form-control"
                      placeholder="********"
                      {...register("pwd", {
                        required: true,
                        
                      })}
                      onChange={(e) => update(e)}

                    />
                    {errors.pwd && <p className="err">Please Provide Your Password</p>}

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      name="repwd"
                      className="form-control"
                      placeholder="********"
                      {...register("repwd", {
                        required: true,
                        
                      })}
                      onChange={(e) => update(e)}

                    />
                    {errors.repwd && <p className="err">Please Provide Your Retype Password</p>}

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="number"
                      name="mno"
                      // maxLength={12}
                      // defaultValue={91}
                      className="form-control"
                      placeholder="Phone Number"
                      {...register("mno", { required: true ,
                        })}
                     
                      onChange={(e) => update(e)}
                    />
                    {errors.mno && <p className="err">Please Provide Your Mobile No</p>}

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Certificate</label>
                    <input
                      type="number"
                      name="certificateno"
                      className="form-control"
                     
                      placeholder="Cerificate No"
                      {...register("certificateno", { required: true , })}
                      onChange={(e) => update(e)}

                    />
                    {errors.certificateno && <p className="err">Please Provide Your Certificate No</p>}

                  </div>
                </div>
              
               
                <div className="col-md-12">
                  <div className="form-group text-center mrg-top-15">
                    <button
                      type="submit"
                      className="btn theme-btn btn-m full-width"
                      // onClick={(e) => {
                      //   submit();
                        
                      // }}
                    >
                      Sign Up
                    </button>
                  </div>
                  Already have an account?  <Link to="/recruiterlogin" className="login" title="Home">
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
      
 </div>}
      
    </>

  );
}

export default RecruiterSignup;

