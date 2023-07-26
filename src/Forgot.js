import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Forgot() {
  
    
  
  return (
   <> 
   <div className="page-title">
   
     <div className="container">
       <div className="page-caption">

         <h2>Login An Account</h2>
         <p>
           <Link to="/seekerlogin" title="Home">
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
              <form className="log-form">
                
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="jsemail"
                      className="form-control"
                      placeholder="Email"
                                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="jspwd"
                      className="form-control"
                      placeholder="********"
                     
                    />
                  </div>
                 
                </div>
                
                <div className="col-md-12">
                  <div className="form-group text-center mrg-top-15">
                    <button
                      type="submit"
                      className="btn theme-btn btn-m full-width"
                      
                    >
                      Login
                    </button>
                  </div>
                </div>
                <div className="clearfix" />
              </form>
            </div>
          </div>
        </section>
        
   </>
  )

                    }
export default Forgot