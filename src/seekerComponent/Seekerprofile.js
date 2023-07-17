import Seekerfooter from "./Seekerfooter";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SeekHeader from "./SeekHeader";
import Load from "../Load";
import { useEffect, useState } from "react";
import { deletes, getregistration, updateprofile } from "../api/common_api";
import { ApiRoutes } from "../constants";
import Typewriter from "typewriter-effect";
import  Loader  from "../Loader";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function Seekerprofile() {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/home");
    Swal.fire({
      title: 'You Have Been Logout',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })

    // toast.warning("You Have Been Logout",{position: "top-center"})

  }
  const userData = JSON.parse(localStorage.getItem("userdata")); //for fill data from registration

  console.log(userData, "userdata");
  const [data1, setdata1] = useState({
    jsname: userData?.jsname, //for fill data
    jslname: userData?.jslname,
    jsemail: userData?.jsemail,
    jspwd: userData?.jspwd,
    jsmno: userData?.jsmno,
    jsaddress: userData?.jsaddress,
    jsgender: userData?.jsgender,
    jslanguage: userData?.jslanguage,
    jsdob: userData?.jsdob,
    facebook: userData?.facebook,
    twitter: userData?.twitter,
    instagram: userData?.instagram,
    google: userData?.google,
    jsslogan: userData?.jsslogan,
    jsprofile: userData?.jsprofile,
    experience: userData?.experience,

    jsid: userData?.jsid,
  });
  async function deletef() {
    const result = await deletes(data1);
    if ((result.status = 1)) {
      Swal.fire({
        title: 'Your Account Has Been  Deleted Successfully',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      navigate("/home")
    } else {
      toast.error(" cannot Deleted");
    }
  }
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log("data====>", data1);
  useEffect(() => {
    getregistration();
    updateprofile();
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
    // console.log(res);
  }, []);
  return (
    <>
      {isLoading ? <Loader/> : <div>

      <SeekHeader />
      <>
        {/* ======================= Start Page Title ===================== */}
        <div className="page-title">
          <div className="container">
            <div className="page-caption">
              {/* <h2>Seeker Profile</h2> */}
              <h2>
              <Typewriter
               options={{
               autoStart: true,
               loop: true,
              }}
              onInit={(typewriter)=>{
                typewriter
                .typeString("Seeker Profile")
                .pauseFor(2000)
                .start()
              }}

              />
              </h2>
              <p>
                <Link to="/seekerrhome" title="Home">
                  Home
                </Link>{" "}
                <i className="ti-angle-double-right" /> Seeker Profile
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
                    <img
                      src={`${ApiRoutes.API_HOSTNAME}images/${data1?.jsprofile}`}
                    />{" "}
                  </div>
                </div>
                <div className="dashboard_nav_item">
                  <ul>
                    <li>
                      <Link to="/seekerhome">
                        <i className="login-icon ti-dashboard" /> Dashboard
                      </Link>
                    </li>
                    <li className="active">
                      <Link to="/editprofiles">
                        <i className="login-icon ti-user" /> Edit Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/changepwd">
                        <i className="login-icon ti-key" /> Change Password
                      </Link>
                    </li>
                     <button className="btn btn-danger" type="submit"
                     onClick={() => {
                          deletef();
                        }}
                     >
                        <i className="login-icon ti-trash " /> Delete Account
                      </button>
                    <button
                  className="btn btn-primary "

                  onClick={logout}
                >
                  <i className="login-icon ti-power-off" /> Logout
                </button>
                    {/* <button className="btn btn-primary btn-lg" onClick={logout}>
                      <i className="login-icon ti-power-off" /> Logout
                    </button> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="emp-des">
                  <h3 className="display1">Hello {data1?.jsname}!!</h3>

                  <ul className="employer_detail_item">
                    <li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Name
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12 display1">
                        {data1?.jsname}
                      </div>
                    </li>
                    <li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Last Name
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12 display1">
                        {data1?.jslname}
                      </div>
                    </li>
                    <li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Email
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12 display1">
                        {data1?.jsemail}
                      </div>
                    </li>
                    <li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Password
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12 display1">
                        {data1?.jspwd}
                      </div>
                    </li>
                    <li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Phone No
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12 display1">
                        {data1?.jsmno}
                      </div>
                    </li>
                    <li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Address
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12 display1">
                        {data1?.jsaddress}
                      </div>
                    </li>
                    <li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Gender
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12 display1">
                        {data1?.jsgender}
                      </div>
                    </li>
                    <li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Language
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12 display1">
                        {data1?.jslanguage}
                      </div>
                    </li>
                    <li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Experience
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12 display1">
                        {data1?.experience}
                      </div>
                    </li>
                    <li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Date Of Birth
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12 display1">
                        {data1?.jsdob}
                      </div>
                    </li>
                    <li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Facebook
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12 display1">
                        {data1?.facebook}
                      </div>
                    </li>
                    <li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Twitter
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12 display1">
                        {data1?.twitter}
                      </div>
                    </li>
                    <li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Instagram
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12 display1">
                        {data1?.instagram}
                      </div>
                    </li>
                    <li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Google
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12 display1">
                        {data1?.google}
                      </div>
                    </li>
                    <li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Slogan
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12 display1">
                        {data1?.jsslogan}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====================== End Create Company ================ */}
      </>
      </div>}
      <Seekerfooter />
      <Load />
    </>
  );
}

export default Seekerprofile;
