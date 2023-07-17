import { Link, useNavigate } from "react-router-dom";
import Recruiterfooter from "./Recruiterfooter";
import RecHeader from "./RecHeader";
import Load from "../Load";
import { useEffect, useState } from "react";
import {
  deleter,
  deletes,
  downloadInvoice1,
  getrec,
  getregistration,
  updatecompany,
} from "../api/common_api";
import { ApiRoutes } from "../constants";
import Typewriter from "typewriter-effect";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Recruiterprofile() {
  const userData = JSON.parse(localStorage.getItem("userdata")); //for fill data from registration

  const resumedownloader = async (data) => {
    const response = await downloadInvoice1(data);
    // toast.success("Your Invoice Download Successfully.. Check Your Mail ")
    Swal.fire({
      title: "Your Invoice Download Successfully.. Check Your Mail",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/home");
    // Swal.fire('You Have Been Logout')
    Swal.fire({
      title: "You Have Been Logout",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    // toast.warning("You Have Been Logout",{position: "top-center"})
  }

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
  async function deletef() {
    const result = await deleter(data1);
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
  console.log("data====>", data1);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getrec();
    updatecompany();
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
    // console.log(res);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <RecHeader />

          {/* ======================= Start Page Title ===================== */}
          <div className="page-title">
            <div className="container">
              <div className="page-caption">
                <h2>Recruiter Profile</h2>
                <p>
                  <Link to="/recruiterhome" title="Home">
                    Home
                  </Link>{" "}
                  <i className="ti-angle-double-right" /> Recruiter Profile
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
                        src={`${ApiRoutes.API_HOSTNAME}images/${data1?.clogo}`}
                      />{" "}
                    </div>
                  </div>
                  <div className="dashboard_nav_item">
                    <ul>
                      <li>
                        <Link to="/recruiterhome">
                          <i className="login-icon ti-dashboard" /> Dashboard
                        </Link>
                      </li>
                      <li className="active">
                        <Link to="/editprofiler">
                          <i className="login-icon ti-user" /> Edit Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/changerpwd">
                          <i className="login-icon ti-key" /> Change Password
                        </Link>
                      </li>
                      <li>
                        <Link to="/payment">
                          <i className="login-icon ti-dashboard " />{" "}
                          Subscription
                        </Link>
                      </li>

                      <button
                        className="btn btn-primary "
                        type="submit"
                        onClick={() => {
                          resumedownloader(userData);
                        }}
                      >
                        <i className="login-icon ti-download " /> Download
                        Invoice
                      </button>
                      <br />
                      <button className="btn btn-danger" type="submit"
                        onClick={() => {
                          deletef();
                        }}
                      >
                        <i className="login-icon ti-trash "
                         /> Delete Account
                      </button>
                      <button className="btn btn-primary " onClick={logout}>
                        <i className="login-icon ti-power-off" /> Logout
                      </button>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="emp-des">
                    <h3 className="display1"> Hello {data1?.cname}!!</h3>

                    <ul className="employer_detail_item">
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Company Name
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 display1">
                          {data1?.cname}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Company Tagline
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 display1">
                          {data1?.ctaglinename}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Owner Name
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 display1">
                          {data1?.oname}
                        </div>
                      </li>

                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Established
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 display1">
                          {data1?.established}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Email
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 display1">
                          {data1?.email}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Phone No
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 display1">
                          {data1?.mno}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Landline
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 display1">
                          {data1?.landline}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Website Link
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 display1">
                          {data1?.websitelink}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Address
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 display1">
                          {data1?.address}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Country
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 display1">
                          {data1?.country}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          State
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 display1">
                          {data1?.state}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          City
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 display1">
                          {data1?.city}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Zip Code
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 display1">
                          {data1?.zipcode}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Working Time
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 display1">
                          {data1?.workingtime}
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
                          Instagram
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 display1">
                          {data1?.instagram}
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ====================== End Create Company ================ */}

          <Recruiterfooter />
          <Load />
        </div>
      )}
    </>
  );
}

export default Recruiterprofile;
