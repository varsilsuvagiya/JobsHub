import React, { useEffect, useState } from "react";
import RecHeader from "./RecHeader";
import Footer from "../Footer";
import Recruiterfooter from "./Recruiterfooter";
import { Link, useNavigate } from "react-router-dom";
import Load from "../Load";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import { updatecompany } from "../api/common_api";
import { getrec } from "../api/common_api";
import Typewriter from "typewriter-effect";
import  Loader  from "../Loader";
import moment from "moment"
function Editprofiler() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userdata")); //for fill data from registration
  const [data1, setdata1] = useState({
    cname: userData?.cname, //for fill data
    email: userData?.email,
    pwd: userData?.pwd,
    mno: userData?.mno,
    certificateno: userData?.certificateno,
    ctaglinename: userData?.ctaglinename,
    oname: userData?.oname,
    established: userData?.established,
    landline: userData?.landline,
    websitelink: userData?.websitelink,
    address: userData?.address,
    country: userData?.country,
    state: userData?.state,
    city: userData?.city,
    zipcode: userData?.zipcode,
    workingtime: userData?.workingtime,
    facebook: userData?.facebook,
    twitter: userData?.twitter,
    instagram: userData?.instagram,
    clogo: userData?.clogo,

    companyid: userData?.companyid,
  });

  const onHandleData = (e) => {
    console.log(e.target.files, "eeeeeeeeeee");
    setdata1({ ...data1, [e.target.name]: e.target.value });
  };
  const [fileimage, setFileimage] = useState();
  function handlechange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const [file, setFile] = useState();
  const onHandleChange = (e) => {
    console.log(e.target.files, "eeeeeeeeeee");
    setFile({ ...file, [e.target.name]: e.target.files[0] });
  };
  const submit = async () => {
    console.log(data1);

    if (data1.cname === "") {
      alert("enter your name");
    } else {
      console.log("dataaaaaaaaaaaaaaaaaaaa", data1);
      const requestOptions = {
        method: "POST",

        body: data1,
      };

      const formdata = new FormData();
      console.log(data1.cname, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^6");

      formdata.append("companyid", data1.companyid);
      formdata.append("cname", data1.cname);
      formdata.append("ctaglinename", data1.ctaglinename);
      formdata.append("oname", data1.oname);
      formdata.append("clogo", data1.clogo);

      formdata.append("established", data1.established);
      formdata.append("email", data1.email);
      formdata.append("mno", data1.mno);
      formdata.append("landline", data1.landline);
      formdata.append("websitelink", data1.websitelink);
      formdata.append("address", data1.address);
      formdata.append("country", data1.country);
      formdata.append("state", data1.state);
      formdata.append("city", data1.city);
      formdata.append("zipcode", data1.zipcode);
      formdata.append("workingtime", data1.workingtime);
      formdata.append("facebook", data1.facebook);
      formdata.append("instagram", data1.instagram);
      formdata.append("twitter", data1.twitter);

      const response = await updatecompany(formdata);

      console.log(response, "response");
      if (response.status === 1) {
        toast("Profile Update Successfully");
        console.log(response.data, "-------------");
        const result = response.data;
        localStorage.setItem("userdata", JSON.stringify(result));
      } else {
        toast.error("Profile Cannot Updated");
      }
    }
  };
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // getworkinglistfunction();
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
    getrec();
  }, []);
  const date=new Date();
  const today=moment().add(-1,'d').format("YYYY-MM-DD")
  console.log(today,"*****")
  return (
    <>
       {isLoading ? <Loader/> : <div>

      <Load />
      <RecHeader />
      
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
                .typeString("Edit Profile")
                .pauseFor(2000)
                .start()
              }}

              />
              </h2>
              <p>
                <Link to="/recruiterhome" title="Home">
                  Home
                </Link>{" "}
                <i className="ti-angle-double-right" /> Edit Profile
              </p>
            </div>
          </div>
        </div>
        {/* ======================= End Page Title ===================== */}
        {/* ======================= Start Create Company ===================== */}

        <section className="padd-top-80 padd-bot-80">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div id="leftcol_item">
                  <div className="user_dashboard_pic">
                    {" "}
                    <img src={file} />{" "}
                    <span className="user-photo-action">{data1?.cname}</span>{" "}
                  </div>
                </div>
                <div className="dashboard_nav_item">
                  <ul>
                    <li>
                      <Link to="/recruiterhome">
                        <i className="login-icon ti-dashboard" /> Dashboard
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-9">
                <form className="c-form">
                  {/* General Information */}
                  <div className="box">
                    <div className="box-header">
                      <h4>General Information</h4>
                    </div>
                    <div className="box-body">
                      <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <label>Company Name</label>
                          <input
                            type="text"
                            name="cname"
                            value={data1?.cname}
                            className="form-control"
                            placeholder="Company Name"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <label>Company Tagline</label>
                          <input
                            type="text"
                            name="ctaglinename"
                            value={data1.ctaglinename}
                            className="form-control"
                            placeholder="Company Tagline"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12 m-clear">
                          <label>Owner Name</label>
                          <input
                            type="text"
                            name="oname"
                            value={data1.oname}
                            className="form-control"
                            placeholder="Owner Name"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <label>Company Logo</label>
                          <div className="custom-file-upload">
                            <input
                              type="file"
                              id="file"
                              name="file"
                                onChange={(e) => {
                                  setdata1({
                                    ...data1,
                                    clogo: e.target.files[0],
                                  });
                                  handlechange(e);
                                }}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <label>Established</label>
                          <input
                            type="date"
                            name="established"
                            max={today}
                            value={data1.established}
                            placeholder="Established"
                            id="reservation-date"
                          
                           
                            className="form-control"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Company Address */}
                  <div className="box">
                    <div className="box-header">
                      <h4>Company Address</h4>
                    </div>
                    <div className="box-body">
                      <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={data1?.email}
                            className="form-control"
                            placeholder="Email"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <label>Phone Number</label>
                          <input
                            type="number"
                            name="mno"
                            value={data1?.mno}
                            className="form-control"
                            placeholder="Phone Number"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <label>Landline</label>
                          <input
                            type="number"
                            name="landline"
                            value={data1.landline}
                            className="form-control"
                            placeholder="Landline"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <label>Website Link</label>
                          <input
                            type="text"
                            name="websitelink"
                            value={data1.websitelink}
                            className="form-control"
                            placeholder="Website Link"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <label>Address</label>
                          <input
                            type="text"
                            name="address"
                            value={data1.address}
                            className="form-control"
                            placeholder="Address"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 m-clear">
                          <label>Country</label>
                          <input
                            type="text"
                            name="country"
                            value={data1.country}
                            className="form-control"
                            placeholder="Country"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12 m-clear">
                          <label>State</label>
                          <input
                            type="text"
                            name="state"
                            value={data1.state}
                            className="form-control"
                            placeholder="State"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <label>City</label>
                          <input
                            type="text"
                            name="city"
                            value={data1.city}
                            className="form-control"
                            placeholder="City"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 m-clear">
                          <label>Zip Code</label>
                          <input
                            type="number"
                            name="zipcode"
                            max="6"
                            value={data1.zipcode}
                            className="form-control"
                            placeholder="Zip Code"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12 m-clear">
                          <label>Working Time</label>
                          <input
                            type="text"
                            name="workingtime"
                            value={data1.workingtime}
                            className="form-control"
                            placeholder="Working Time"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Social Accounts */}
                  <div className="box">
                    <div className="box-header">
                      <h4>Social Accounts</h4>
                    </div>
                    <div className="box-body">
                      <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <label>Facebook</label>
                          <input
                            type="text"
                            name="facebook"
                            value={data1.facebook}
                            className="form-control"
                            placeholder="https://www.facebook.com/"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <label>Instagram</label>
                          <input
                            type="text"
                            name="instagram"
                            value={data1.instagram}
                            className="form-control"
                            placeholder="http://instagram.com/"
                            onChange={(e) => onHandleData(e)}
                          />
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
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
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-m theme-btn full-width"
                      onClick={() => {
                        submit();
                      }}
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* ====================== End Create Company ================ */}
      
      <Recruiterfooter />
      </div>}
    </>
  );
}

export default Editprofiler;
