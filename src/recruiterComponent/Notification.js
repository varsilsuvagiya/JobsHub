import React, { useState, useEffect } from "react";
import RecHeader from "./RecHeader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Recruiterfooter from "./Recruiterfooter";
import Typewriter from "typewriter-effect";
import Load from "../Load";
import { getapply } from "../api/common_api";
import { ApiRoutes } from "../constants";
import  Loader  from "../Loader";

const Notification = () => {
  const [apply, setapply] = useState();
  const userData = JSON.parse(localStorage.getItem("userdata")); //for fill data from registration
console.log(userData.companyid,"userdata")
  const getapplylistfunction = async () => {
    const result = await getapply(userData?.companyid);
    console.log(result, "getlist");
    console.log(result.companyid, "getlistdata");
    setapply(result.data);
  };
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
    getapplylistfunction();
  }, []);
  return (
    <>
       {isLoading ? <Loader/> : <div>

      <Load />
      <RecHeader />
    
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
                .typeString("Notification")
                .pauseFor(2000)
                .start()
              }}

              />
          </h2>
          <p>
            <Link to="/recruiterhome" title="Home">
              Home
            </Link>{" "}
            <i className="ti-angle-double-right" /> Notification
          </p>
        </div>
      </div>
    </div>
        {/* ======================= End Page Title ===================== */}
        {/* ======================== Manage Job ========================= */}
        <section className="utf_manage_jobs_area padd-top-80 padd-bot-80">
          <div className="container">
            <div className="table-responsive">
              <table className="table table-lg table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                   
                    <th>Action</th>

                  </tr>
                </thead>
                <tbody>
                {apply?.map((list)=>{
                    return(<>
{console.log(list)}
                        <tr>
                    <td>
                      <a href="job-detail.html">
                        {" "}
                        <img
                         src={`${ApiRoutes.API_HOSTNAME}images/${list.jsprofile}`}

                          className="avatar-lg"
                          alt="Avatar"
                        />
                        {list.name}{" "}
                        {/* <span className="mng-jb">Apple Inc</span>{" "} */}
                      </a>
                    </td>
                    <td>
                    {list.email}
                    </td>
                    <td>{list.mno}</td>
                    <td>
                    
                    </td>
                    {/* <td>
                      <a
                        href="#"
                        className="cl-success mrg-5"
                        data-toggle="tooltip"
                        data-original-title="Edit"
                      >
                        <i className="fa fa-edit" />
                      </a>{" "}
                      <a
                        href="#"
                        className="cl-danger mrg-5"
                        data-toggle="tooltip"
                        data-original-title="Delete"
                      >
                        <i className="fa fa-trash-o" />
                      </a>
                    </td> */}
                  </tr>  
                    </>)
                })}
                 
                </tbody>
              </table>
              {/* <div className="utf_flexbox_area padd-10">
                <ul className="pagination">
                  <li className="page-item">
                    {" "}
                    <a className="page-link" href="#" aria-label="Previous">
                      {" "}
                      <span aria-hidden="true">«</span>{" "}
                      <span className="sr-only">Previous</span>{" "}
                    </a>{" "}
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    {" "}
                    <a className="page-link" href="#" aria-label="Next">
                      {" "}
                      <span aria-hidden="true">»</span>{" "}
                      <span className="sr-only">Next</span>{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </section>
  

      <Recruiterfooter />
      </div>}
    </>
  );
};

export default Notification;
