import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { otprequest, verifyOtp, setNewPassword } from "../api/common_api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTPInput, { ResendOTP } from "otp-input-react";
import  Loader  from "../Loader";

function Forgotpassword() {
  const [OTP, setOTP] = useState("");

  const [data, setData] = useState({
    jsemail: "",
    otp: "",
    jspwd: "",
    jsrepwd: "",
  });
  const navigate = useNavigate();
  const [step, setstep] = useState(0);

  const handleChange = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const OtpRequestFunction = async () => {
    //  form Validation
    console.log(data?.jsemail, "email");

    const resp = await otprequest(data?.jsemail);
    console.log(resp, "respresp");
    if (resp.status == 1) {
        toast("Otp Sent Successfully")
      setstep(step + 1);
    }
  };

  const verifyOtpf = async () => {
    //  form Validation
    console.log(data?.otp, "otp");

    const resp = await verifyOtp(data?.otp, data?.jsemail);
    console.log(resp, "ertete");
    if (resp.status == 1) {
        toast("Otp Vetify Successfully")

      setstep(step + 1);
    }
  };

  const changepassword = async () => {
    //  form Validation
    if (data?.jspwd == data?.jsrepwd) {
      const resp = await setNewPassword(data);
      if (resp.status == 1) {
        toast.success("Password Updated Successfully")

        setData({ jsemail: "", otp: "", jspwd: "", jsrepwd: "" });
        navigate("/seekerhome");
      }
      console.log(resp, "EEEEEEEEEEEe");
    } else {
      toast.error("Password Not Updated")

      console.log("Password Mismatched");
    }
  };
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
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Forgot Password")
                    .pauseFor(2000)
                    .start();
                }}
              />
            </h2>
            <p>
              <Link to="/home" title="Home">
                Home
              </Link>{" "}
              <i className="ti-angle-double-right" /> Forgot Password
            </p>
          </div>
        </div>
      </div>
      {/* ======================= End Page Title ===================== */}
      {/* ================ Change Password ======================= */}
      {step == 0 ? (
        <>
          <section className="padd-top-80 padd-bot-80">
            <div className="container">
              <center>
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div
                      className="profile_detail_block"
                      style={{ width: "50%" }}
                    >
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label>Enter Your Email</label>
                          <input
                            type="text"
                            name="jsemail"
                            className="form-control"
                            placeholder="Enter Your Email"
                            value={data?.jsemail}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          />
                        </div>
                      </div>

                      <div className="clearfix" />
                      <div className="col-md-12 padd-top-10 text-center">
                        {" "}
                        <button
                          className="btn btn-m theme-btn full-width"
                          type="button"
                          onClick={() => OtpRequestFunction()}
                        >
                          Send Otp
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </center>
            </div>
          </section>
        </>
      ) : step == 1 ? (
        <>
          <section className="padd-top-80 padd-bot-80">
            <div className="container">
              <center>
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div
                      className="profile_detail_block"
                      style={{ width: "50%" }}
                    >
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label>Enter Your Otp</label>
                          <div className="otp">
                            <input
                              type="number"
                              name="otp"
                              className="form-control"
                              placeholder="Otp"
                              value={data?.otp}
                              onChange={(e) => {
                                handleChange(e);
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="clearfix" />
                      <div className="col-md-12 padd-top-10 text-center">
                        {" "}
                        <button
                          className="btn btn-m theme-btn full-width"
                          type="button"
                          onClick={() => verifyOtpf()}
                        >
                          Verify
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </center>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="padd-top-80 padd-bot-80">
            <div className="container">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-9 ">
                  <div className="profile_detail_block">
                    <center>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label>New Password</label>
                          <input
                            type="text"
                            name="jspwd"
                            value={data?.jspwd}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            className="form-control"
                            placeholder="*****"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label>Confirm Password</label>
                          <input
                            type="text"
                            name="jsrepwd"
                            value={data?.jsrepwd}
                            className="form-control"
                            placeholder="*****"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          />
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="col-md-12 padd-top-10 text-center">
                        {" "}
                        <button
                          className="btn btn-m theme-btn full-width"
                          type="button"
                          onClick={changepassword}
                        >
                          Update
                        </button>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      </div>}
    </>
  );
}

export default Forgotpassword;
