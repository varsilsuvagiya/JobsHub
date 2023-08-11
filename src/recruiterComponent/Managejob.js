import React, { useEffect, useState } from "react";
import RecHeader from "./RecHeader";
import Recruiterfooter from "./Recruiterfooter";
import { Link, useNavigate } from "react-router-dom";
import Load from "../Load";
import Select from "react-select";
import { getcategory, insertjob } from "../api/common_api";
import { getsalary } from "../api/common_api";
import { getexperience } from "../api/common_api";
import { getjobtype } from "../api/common_api";
import { getinterview } from "../api/common_api";
import Typewriter from "typewriter-effect";
import  Loader  from "../Loader";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
  deletejob,
  getjob,
  getjobd,
  getjobm,
  updatejob,
} from "../api/common_api";
import { ApiRoutes } from "../constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: " 0 3px 30px rgba(0, 0, 0, 0.4)",
  },
};

function Managejob() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [categorylist, setcategorylist] = useState([]);
  const [salarylist, setsalarylist] = useState([]);
  const [experiencelist, setexperiencelist] = useState([]);
  const [jobtypelist, setjobtypelist] = useState([]);
  const [interviewlist, setinterviewlist] = useState([]);
  const [joblist, setjoblist] = useState([]);
  const getcategorylistfunction = async () => {
    const result = await getcategory();
    let cat_list = [];
    result?.data.map((list) => {
      cat_list.push({ value: list.cid, label: list.cname });
    });
    setcategorylist(cat_list);
  };
  const getexperiencelistfunction = async () => {
    const result = await getexperience();
    let cat_list = [];
    result?.data.map((list) => {
      cat_list.push({ value: list.eid, label: list.ename });
    });
    setexperiencelist(cat_list);
  };
  const getsalarylistfunction = async () => {
    const result = await getsalary();
    let cat_list = [];
    result?.data.map((list) => {
      cat_list.push({ value: list.sid, label: list.salaryamount });
    });
    setsalarylist(cat_list);
  };
  const getinterviewlistfunction = async () => {
    const result = await getinterview();
    let cat_list = [];
    result?.data.map((list) => {
      cat_list.push({ value: list.iid, label: list.iname });
    });
    setinterviewlist(cat_list);
  };
  const getjobtypelistfunction = async () => {
    const result = await getjobtype();
    let cat_list = [];
    result?.data.map((list) => {
      cat_list.push({ value: list.id, label: list.jobname });
    });
    setjobtypelist(cat_list);
  };
  const navigate = useNavigate();
  const [data1, setdata1] = useState();
  const [step, setstep] = useState(0);
  const userData = JSON.parse(localStorage.getItem("userdata"));

  const getjoblistfunction = async () => {
    const result = await getjobm(userData.companyid);
    console.log(result, "getjobm");
    setjoblist(result.data);
  };
  const onHandleData = (e) => {
    setdata1({ ...data1, [e.target.name]: e.target.value });
  };
  const submit = async (id) => {
    const response = await updatejob(data1);

    console.log(response, "response");
    if (response.status === 1) {
      // toast("Job Updated Successfully");
      Swal.fire({
        title: 'Job Updated Successfully',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      getjoblistfunction(); // when the job is deleted using this automatically page refreshing
    } else {
      toast.error("Job Cannot Updated");
    }
  };
  async function deletef(id) {
    const result = await deletejob({ addjobid: id });
    if ((result.status = 1)) {
      // toast.success("Job Deleted Successfully");
      Swal.fire({
        title: 'Job Deleted Successfully',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      getjoblistfunction(); // when the job is deleted using this automatically page refreshing
    } else {
      toast.error("Job cannot Deleted");
    }
  }
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getjoblistfunction();
    getcategorylistfunction();
    getexperiencelistfunction();
    getsalarylistfunction();
    getinterviewlistfunction();
    getjobtypelistfunction();
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);

  console.log(data1, "7777777");
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
                .typeString("Manage Jobs")
                .pauseFor(2000)
                .start()
              }}

              />
              </h2>
              <p>
                <Link to="/recruiterhome" title="Home">
                  Home
                </Link>{" "}
                <i className="ti-angle-double-right" /> Manage Jobs
              </p>
            </div>
          </div>
        </div>
        {/* ======================= End Page Title ===================== */}
        {/* ======================== Manage Job ========================= */}
        <section className="utf_manage_jobs_area padd-top-80 padd-bot-80">
          <div className="container">
            {step === 1 && (
              <button
                className="btn btn-primary btn-sm glyphicon glyphicon-triangle-left"
                onClick={() => {
                  setstep(0);
                }}
              >
                {" "}
                {/* Manage Job */}
              </button>
            )}

            {step == 1 ? (
              <>
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
                                value={categorylist?.map((list) => {
                                  console.log(list, "fdffd", data1);
                                  if (list.value == data1.category) {
                                    return {
                                      value: list.value,
                                      label: list.label,
                                    };
                                  }
                                })}
                                onChange={(e) => {
                               
                                  setdata1({ ...data1, category: e.value });
                                }}
                                options={categorylist}

                              />
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <label>Salary Range</label>
                              <Select
                                className="wide form-control "
                                name="salary"
                               value={salarylist?.map((list) => {
                                  console.log(
                                    list,
                                    "((((((((((((",
                                    data1.salary
                                  );
                                  if (list.value == data1.salary) {
                                    return {
                                      value: list.value,
                                      label: list.label,
                                    };
                                  }
                                })}
                                onChange={(e) => {
                                  console.log(e.value,"$$$$$$$$$$$$$$$$$$$$$")
                                  setdata1({ ...data1, salary: e.value });
                                }}
                                options={salarylist}
                              />
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                              <label>No. Of Vacancy</label>
                              <input
                                type="number"
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
                                value={experiencelist?.map((list) => {
                                  if (list.value == data1.experience) {
                                    return {
                                      value: list.value,
                                      label: list.label,
                                    };
                                  }
                                })}
                                onChange={(e) => {
                                  setdata1({ ...data1, experience: e.value });
                                }}
                                options={experiencelist}
                              />
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                              <label>Job Type</label>
                              <Select
                                className="wide form-control "
                                name="jobtype"
                                value={jobtypelist?.map((list) => {
                                  if (list.value == data1.jobtype) {
                                    return {
                                      value: list.value,
                                      label: list.label,
                                    };
                                  }
                                })}
                                onChange={(e) => {
                                  setdata1({ ...data1, jobtype: e.value });
                                }}
                                options={jobtypelist}
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
                                className="wide "
                                name="interview"
                                value={interviewlist?.map((list) => {
                                  if (list.value == data1.interview) {
                                    return {
                                      value: list.value,
                                      label: list.label,
                                    };
                                  }
                                })}
                                onChange={(e) => {
                                  setdata1({ ...data1, interview: e.value });
                                }}
                                options={interviewlist}
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
              </>
            ) : (
              <div className="table-responsive">
                <table className="table table-lg table-hover">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Location</th>
                      <th>Email</th>
                      <th>Posted</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {joblist?.map((list) => {
                      console.log(list, "listtttt");
                      return (
                        <>
                        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          className="col-md-6"
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              <h3>Are You Sure Want To Delete? </h3>
            </span>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "0 10px 0 10px",
              }}
            >
              <span>
                <button className="btn btn-m theme-btn3"
                 onClick={()=>{deletef(list.addjobid);
                 closeModal()}}
            
                >
                  {" "}
                  <i className="glyphicon glyphicon-ok" />
                </button>
                &nbsp;
                <button className="btn btn-m theme-btn2" onClick={closeModal}>
                  {" "}
                  <i className=" ti-close" />
                </button>
              </span>
            </div>
          </div>
        </Modal>
                          <tr>
                            <td>
                              <a href="job-detail.html">
                                {" "}
                                {/* <img
                                  src={`${ApiRoutes.API_HOSTNAME}images/${list.clogo}`}
                                  className="avatar-lg"
                                  alt="Avatar"
                                /> */}
                                {list.jobtitle}
                                {/* <span className="mng-jb">{list.cname}</span>{" "} */}
                              </a>
                            </td>
                            <td>
                              <i className="ti-location-pin" /> {list.location}
                            </td>
                            <td>{list.email}</td>
                            <td>
                              <i className="ti-credit-card" /> {list.postdate}
                            </td>
                            <td>
                              <button
                                onClick={() => {
                                  console.log(data1, "data1111");

                                  setstep(1);
                                  setdata1(list);
                                }}
                                className="cl-success mrg-5 fa fa-edit"
                                data-toggle="tooltip"
                                data-original-title="Edit"
                              >
                                {/* <i className="fa fa-edit" /> */}
                              </button>{" "}
                              <button
                                // onClick={()=>{deletef(list.addjobid)}}
                                onClick={openModal}
                                className="cl-danger mrg-5 fa fa-trash-o"
                                data-toggle="tooltip"
                                data-original-title="Delete"
                              >
                                {/* <i className="fa fa-trash-o" /> */}
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
        {/* ====================== End Manage Company ================ */}
      
      <Recruiterfooter />
      </div>}
    </>
  );
}

export default Managejob;
