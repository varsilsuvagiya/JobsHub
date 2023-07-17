import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { loginrec } from "../api/common_api";
import Load from '../Load';
import { useForm } from "react-hook-form";
import Typewriter from "typewriter-effect";
import  Loader  from "../Loader";
import SweetAlert from 'react-bootstrap-sweetalert';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function RecruiterLogin() {
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const [newData1, setnew1] = useState({
    email: "",
      pwd: "",
      
    });
    const notify=()=>toast();
    function update1(e) {
     
      setnew1({ ...newData1, [e.target.name]: e.target.value });
    }
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
      setTimeout(() => {
        setData("Some data");
        setIsLoading(false);
      }, 1000);
      
    },[newData1]);
  
   async function loginrec1() {
     
    
           const response=await loginrec(newData1);
           if(response.status===1)
             {
              const result=response.result[0]
              localStorage.setItem('userdata',JSON.stringify(result));
              toast("Recruiter Enter Successfully");
              // Swal.fire("Recruiter Enter Successfully")

              
             navigate("/payment");
             }                 
            else{
               toast.error("Something Is Wrong");
             }
            }
         
            
  return (
   <>


       {isLoading ? <Loader/> : <div>

   <Load/>
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
                .typeString("Recruiter Login")
                .pauseFor(2000)
                .start()
              }}

              />
         </h2>
         <p>
           <Link to="/home" title="Home">
             Home
           </Link>{" "}
           <i className="ti-angle-double-right" /> Login
         </p>
       </div>
     </div>
   </div>
   {/* ======================= End Page Title ===================== */}
       
        <section className="padd-top-80 padd-bot-80">
          <div className="container">
            <div className="log-box">
              <form className="log-form" onSubmit={handleSubmit(loginrec1)}>
                
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
                      onChange={(e) => update1(e)}                
                       />
                      {errors.email && <p className="err">Please Provide Your Email</p>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="pwd"
                      className="form-control"
                      placeholder="********"
                       {...register("pwd", {
                        required: true,
                        maxLength: 10,
                      })}
                      onChange={(e) => update1(e)}

                    />
                    {errors.pwd && <p className="err">Please Provide Your Password</p>}

                  </div>
                  <div className="form-group">
                  {" "}
                 
                  <Link to="/forgotpasswordr" title="Forget" className="fl-right">
                    Forgot Password?
                  </Link>
                </div>
                </div>
                
                <div className="col-md-12">
                  <div className="form-group text-center mrg-top-15">
                    <button
                      type="submit"
                      className="btn theme-btn btn-m full-width"
                      // onClick={(e) => {
                      //     loginrec1();
                         
                      //   }}
                    >
                      Login
                    </button>
                    

                  </div>
                  Don't have an account?  <Link to="/recruitersignup" className="login" title="Home">
                  Sign Up
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
  )
}

export default RecruiterLogin