import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SeekHeader from "./SeekHeader";
import Seekerfooter from "./Seekerfooter";
import Load from "../Load";
import { applyjob, getjob } from "../api/common_api";
import { ApiRoutes } from "../constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ReactPaginate from "react-paginate";
import Typewriter from "typewriter-effect";
import  Loader  from "../Loader";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function Searchjob() {
  const navigate = useNavigate();
  const [joblist, setjoblist] = useState([]);
  const [file, setFile] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setcount] = useState(0);
  const [apply, setapply] = useState();
  const userData = JSON.parse(localStorage.getItem("userdata")); //for fill data from registration
  const perPage = 2;
  const handlePageChange = (page) => {
    setCurrentPage(page);
    getjoblistfunction(page, perPage);
  };
 
  
  const onHandleData = (e) => {
    console.log(e.target.files, "eeeeeeeeeee");
    setapply({ ...apply, [e.target.name]: e.target.value });
  };

  const handleApplyData = (listData) => {
    setapply({ ...apply, companyid: listData.companyid });
  };

  const onHandleChange = (e) => {
    console.log(e.target.files, "eeeeeeeeeee");
    setFile({ ...file, [e.target.name]: e.target.files[0] });
  };
 
  const submit = async () => {
   

    if (apply.name === "") {
      alert("enter your name");
    } else {
     
      const requestOptions = {
        method: "POST",
        body: apply,
      };
      console.log(apply, "hghffhf");

      const formdata = new FormData();

      formdata.append("name", apply.name);
      formdata.append("email", apply.email);
      formdata.append("mno", apply.mno);
      formdata.append("uploadcv", apply.uploadcv);
      formdata.append("companyid", apply.companyid);
      formdata.append("jsid", apply.jsid);

      const response = await applyjob(formdata);

      console.log(response, "response");
      if (response.status === 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Apply Job successfully',
          showConfirmButton: false,
          timer: 1500
        })
        // toast("Apply Job successfully");
      } else {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cannot Apply Job',
          showConfirmButton: false,
          timer: 1500
        })
        // toast.error("Cannot Apply Job ");
      }
    }
  };
  const handleviewjob = async (list) => {
  
    console.log(list, "********************");
    navigate("/jobdetail", { state: { data: list } });
  };
  const getjoblistfunction = async (page, perPage) => {
    const result = await getjob(page, perPage);
    console.log(result, "data");
    setjoblist(result.data);
    setcount(result?.totaldata);
  };
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getjoblistfunction(currentPage, perPage);
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
    setapply({ ...apply, jsid: userData?.jsid });
  }, []);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
       {isLoading ? <Loader/> : <div>

       </div>}
      <Modal open={open} onClose={onCloseModal} center>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            <h3>APPLY HERE...</h3>
          </span>
          <span></span>
        </div>
        <hr />
        <div className="scr" style={{ height: "400px", overflow: "auto" }}>
          <div className="profile_detail_block">
            <div className="text-center mrg-bot-20">
              {/* <h4 className="mrg-0">Front End Designer</h4> */}
              {/* <span>2708 Scenic Way, Sutter</span> */}
            </div>
            <form>
              <div className="col-md-6 col-sm-6">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  onChange={(e) => onHandleData(e)}
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => onHandleData(e)}
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <label>Phone</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone No"
                  name="mno"
                  onChange={(e) => onHandleData(e)}
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <label>Upload CV</label>
                <div className="custom-file-upload">
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => {
                      setapply({
                        ...apply,
                        uploadcv: e.target.files[0],
                      });
                      onHandleChange(e);
                    }}
                  />
                </div>
              </div>

              <div className="col-md-12 text-center">
                <button
                  onClick={() => {
                    submit();
                    onCloseModal();
                  }}
                  type="button"
                  className="btn theme-btn btn-m full-width"
                >
                  APPLY JOB
                </button>
              </div>
              <div className="clearfix" />
            </form>
          </div>
        </div>
      </Modal>
    
      <SeekHeader />
      <>
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
                    typewriter.typeString("Browse Job").pauseFor(2000).start();
                  }}
                />
              </h2>
              <p>
                <Link to="/seekerhome" title="Home">
                  Home
                </Link>{" "}
                <i className="ti-angle-double-right" /> Browse Job
              </p>
            </div>
          </div>
        </div>
        {/* ======================= End Page Title ===================== */}
        {/* ====================== Start Job Detail 2 ================ */}
        <section className="padd-top-80 padd-bot-80">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-sm-7">
                {joblist?.map((list) => {
                  return (
                    <>
                      <div className="job-verticle-list">
                        <div className="vertical-job-card">
                          <div className="vertical-job-header">
                            <div className="vrt-job-cmp-logo">
                              {" "}
                              <a>
                                <img
                                  src={`${ApiRoutes.API_HOSTNAME}images/${list.clogo}`}
                                  className="img-responsive"
                                  alt=""
                                />
                              </a>{" "}
                            </div>
                            <h4>
                              <a></a>
                              {list.cname}
                            </h4>
                            <span className="com-tagline">{list.jobtitle}</span>{" "}
                            <span className="pull-right vacancy-no">
                              No.{" "}
                              <span className="v-count">{list.addjobid}</span>
                            </span>
                          </div>
                          <div className="vertical-job-body">
                            <div className="row">
                              <div className="col-md-9 col-sm-12 col-xs-12">
                                <ul className="can-skils">
                                  <li>
                                    <strong>Job Id: </strong>
                                    {list.addjobid}
                                  </li>
                                  <li>
                                    <strong>Job Type: </strong>
                                    {list.jobname}
                                  </li>

                                  <li>
                                    <strong>Experience: </strong>
                                    {list.ename}
                                  </li>
                                  <li>
                                    <strong>Location: </strong>
                                    {list.location}
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 col-sm-12 col-xs-12">
                                <div className="vrt-job-act">
                                  {" "}
                                  <button
                                    onClick={() => {
                                      onOpenModal();
                                      handleApplyData(list);
                                    }}
                                    className="btn-job theme-btn job-apply"
                                   
                                  >
                                    Apply Now
                                  </button>
                                  <button
                                    onClick={() => {
                                      handleviewjob(list);
                                    }}
                                    className="btn-job light-gray-btn"
                                    
                                  >
                                    View Job
                                  </button>
                                
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

                <div className="clearfix" />
                <div className="utf_flexbox_area padd-0">
                  {/* <ul className="pagination">
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
                  </ul> */}
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={(e) => {
                      handlePageChange(e.selected + 1);
                    }}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    pageCount={Math.ceil(count / perPage)}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    pageClassName="pagination"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                  />
                </div>
              </div>
            </div>
            {/* End Row */}
          </div>
        </section>
        {/* ====================== End Job Detail 2 ================ */}
      </>
      <Seekerfooter />
    </>
  );
}

export default Searchjob;
