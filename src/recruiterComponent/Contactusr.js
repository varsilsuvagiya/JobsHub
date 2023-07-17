
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { contact, contactusr } from '../api/common_api';
import Load from '../Load'; 
import { useForm } from "react-hook-form";
import Recruiterfooter from "./Recruiterfooter";
import RecHeader from "./RecHeader";
import Typewriter from "typewriter-effect";
import  Loader  from "../Loader";

function Contactuss() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [new1, setnew1] = useState();
  function update1(e) {

    setnew1({ ...new1, [e.target.name]: e.target.value });
  }
  async function submit() {
    const response = await contactusr(new1);
    if (response.status === 1) {
      toast("Message Sent Successfully");
    } else {
      toast.error("Something Is Wrong");
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
    <RecHeader/>
    
        {/* ======================= Start Navigation ===================== */}
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
                .typeString("Get In Touch")
                .pauseFor(2000)
                .start()
              }}

              />
              
              </h2>
              <p>
                <Link to="/home" title="Home">
                  Home
                </Link>{" "}
                <i className="ti-angle-double-right" /> Contact
              </p>
            </div>
          </div>
        </div>
        {/* ======================= End Page Title ===================== */}
        {/* ================ Fill Forms ======================= */}
        <section className="padd-top-80 padd-bot-70">
          <div className="container">
            <div className="col-md-6 col-sm-6">
              <div className="row">
                <form className="mrg-bot-40"  method="POST"
                onSubmit={handleSubmit(submit)}>
                  <div className="col-md-6 col-sm-6">
                    <label>Name:</label>
              <input type="text" className="form-control" placeholder="Name" name="name" 
                      {...register("name", { required: true })}
              
               onChange={(e) => update1(e)} />
                    {errors.name && <p className="err">Please Provide Your Name</p>}

                  </div>
                  <div className="col-md-6 col-sm-6">
                    <label>Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                      onChange={(e) => update1(e)}
                    />
                    {errors.email && <p className="err">Please Provide Email</p>}

                  </div>
                  <div className="col-md-12 col-sm-12">
                    <label>Subject:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      {...register("subject", { required: true })}

                      onChange={(e) => update1(e)}
                    />
                    {errors.subject && <p className="err">Please Provide Subject</p>}

                  </div>
                  <div className="col-md-12 col-sm-12">
                    <label>Message:</label>
                    <textarea
                      className="form-control height-120"
                      placeholder="Message"
                      name="message"

                      {...register("message", { required: true })}
                    
                      onChange={(e) => update1(e)}
                    />
                    {errors.message && <p className="err">Please Provide Message</p>}

                  </div>
              
                  
                  <div className="col-md-12 col-sm-12">
                  <br/>
                    <button className="btn theme-btn" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.905283547185!2d72.85031371502897!3d21.23560418588678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f27ee8159e3%3A0xf6defb4d03e81080!2sSutex%20Bank%20College%20of%20Computer%20Applications%20%26%20Science!5e0!3m2!1sen!2sin!4v1677031404557!5m2!1sen!2sin"
                width="100%"
                height={360}
                style={{ border: 0 }}
                allowFullScreen=""
              />
            </div>
          </div>
        </section>
        {/* ================ End Fill Forms ======================= */}
        {/* ================= footer start ========================= */}
        {/* Jquery js*/}
      
<Recruiterfooter/>
</div>}
    </>
  )
}

export default Contactuss