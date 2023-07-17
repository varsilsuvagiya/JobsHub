import React, { useEffect, useState } from "react";
import RecHeader from "./RecHeader";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getaddjob,
  getcategory,
  insertjob,
  updatejob,
} from "../api/common_api";
import { getsalary } from "../api/common_api";
import { getexperience } from "../api/common_api";
import { getjobtype } from "../api/common_api";
import { getinterview } from "../api/common_api";
import Recruiterfooter from "./Recruiterfooter";
import Load from "../Load";
import  Loader  from "../Loader";

function Addjob() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userdata")); //for fill data from registration

  const [data1, setdata1] = useState({
  
    jobtitle: userData?.jobtitle,
    category: userData?.category,
    salary: userData?.salary,
    vacancy: userData?.vacancy,
    experience: userData?.experience,
    jobtype: userData?.jobtype,
    qualification: userData?.qualification,
    skill: userData?.skill,
    language: userData?.language,
    interview: userData?.interview,
    location: userData?.location,
    postdate: userData?.postdate,

    description: userData?.description,
    addjobid: userData?.addjobid,
  });

  const onHandleData = (e) => {
    setdata1({ ...data1, [e.target.name]: e.target.value });
  };
  const submit = async (id) => {
    const response = await updatejob({addjobid:id});

    console.log(response, "response");
    if (response.status === 1) {
      toast("Job Updated Successfully");
    } else {
      toast.error("Job Cannot Updated");
    }
  };
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getaddjob();
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
       {isLoading ? <Loader/> : <div>

      <RecHeader />
      <Load />

      {/* ======================= Start Page Title ===================== */}
      <div className="page-title">
        <div className="container">
          <div className="page-caption">
            <h2>Update Job</h2>
            <p>
              <Link to="/recruiterhome" title="Home">
                Home
              </Link>{" "}
              <i className="ti-angle-double-right" /> Update Job
            </p>
          </div>
        </div>
      </div>
      {/* ======================= End Page Title ===================== */}
      {/* ======================= Create Job ===================== */}
      <section className="create-job padd-top-80 padd-bot-80">
        <div className="container">
          <form className="c-form">
            <div className="box">
              <div className="box-header">
                <h4>General Information</h4>
              </div>
              <div className="box-body">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <label>Job Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Job Title"
                      name="jobtitle"
                      value={data1?.jobtitle}
                      onChange={(e) => onHandleData(e)}
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Post Date</label>
                      <input
                        type="date"
                        id="dob"
                        name="postdate"
                        value={data1?.postdate}
                        placeholder="Date Of Birth"
                        className="form-control"
                        onChange={(e) => onHandleData(e)}
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <label>Category</label>
                    <Select
                      className="wide form-control "
                      name="category"
                      // options={categorylist}

                      onChange={(e) => {
                        setdata1({ ...data1, cid: e.value });
                      }}
                    />
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <label>Salary Range</label>
                    <Select
                      className="wide form-control "
                      name="salary"
                      onChange={(e) => {
                        setdata1({ ...data1, sid: e.value });
                      }}
                      // options={salarylist}
                    />
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                    <label>No. Of Vacancy</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="No. Of Vacancy"
                      name="vacancy"
                      value={data1?.vacancy}
                      onChange={(e) => onHandleData(e)}
                    />
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                    <label>Experience</label>
                    <Select
                      className="wide  form-control"
                      name="experience"
                      onChange={(e) => {
                        setdata1({ ...data1, eid: e.value });
                      }}
                      // options={experiencelist}
                    />
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                    <label>Job Type</label>
                    <Select
                      className="wide form-control "
                      name="jobtype"
                      onChange={(e) => {
                        setdata1({ ...data1, id: e.value });
                      }}
                      // options={jobtypelist}
                    />
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                    <label>Qualification Required</label>
                    <input
                      type="text"
                      name="qualification"
                      value={data1?.qualification}
                      className="form-control"
                      placeholder="Qualification"
                      onChange={(e) => onHandleData(e)}
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <label>Skills(Seperate with Comma)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Skills"
                      name="skill"
                      value={data1?.skill}
                      onChange={(e) => onHandleData(e)}
                    />
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <label>Language known</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Language"
                      name="language"
                      value={data1?.language}
                      onChange={(e) => onHandleData(e)}
                    />
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <label>Types of Interview</label>
                    <Select
                      className="wide form-control "
                      name="interview"
                      onChange={(e) => {
                        setdata1({ ...data1, iid: e.value });
                      }}
                      // options={interviewlist}
                    />
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <label>Job Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="job location"
                      name="location"
                      value={data1?.location}
                      onChange={(e) => onHandleData(e)}
                    />
                  </div>

                  <div className="col-md-12 col-sm-6 col-xs-12 m-clear">
                    <label>Description</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Description"
                      name="description"
                      value={data1?.description}
                      onChange={(e) => onHandleData(e)}
                    />
                  </div>
                </div>

                <br />
                <br />
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-m theme-btn full-width"
                    onClick={() => {
                      submit();
                    }}
                  >
                    update job
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* ====================== End Create Job ================ */}
      <Recruiterfooter />
      </div>}
    </>
  );
}

export default Addjob;
