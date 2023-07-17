// import React, { useEffect, useState } from "react";
// import RecHeader from "./RecHeader";
// import Select from "react-select";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { getcategory, insertjob } from "../api/common_api";
// import { getsalary } from "../api/common_api";
// import { getexperience } from "../api/common_api";
// import { getjobtype } from "../api/common_api";
// import { getinterview } from "../api/common_api";
// import Recruiterfooter from "./Recruiterfooter";
// import Load from "../Load";
// import Typewriter from "typewriter-effect";

// import { useForm } from "react-hook-form";
// import  Loader  from "../Loader";

// function Addjob() {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [data1, setdata1] = useState({
//     companyid: 0,
//   });
//   const userData = JSON.parse(localStorage.getItem("userdata")); //for fill data from registration

//   const [categorylist, setcategorylist] = useState([]);
//   const [salarylist, setsalarylist] = useState([]);
//   const [experiencelist, setexperiencelist] = useState([]);
//   const [jobtypelist, setjobtypelist] = useState([]);
//   const [interviewlist, setinterviewlist] = useState([]);

//   const getcategorylistfunction = async () => {
//     const result = await getcategory();
//     let cat_list = [];
//     result?.data.map((list) => {
//       cat_list.push({ value: list.cid, label: list.cname });
//     });
//     setcategorylist(cat_list);
//   };
//   const getexperiencelistfunction = async () => {
//     const result = await getexperience();
//     let cat_list = [];
//     result?.data.map((list) => {
//       cat_list.push({ value: list.eid, label: list.ename });
//     });
//     setexperiencelist(cat_list);
//   };
//   const getsalarylistfunction = async () => {
//     const result = await getsalary();
//     let cat_list = [];
//     result?.data.map((list) => {
//       cat_list.push({ value: list.sid, label: list.salaryamount });
//     });
//     setsalarylist(cat_list);
//   };
//   const getinterviewlistfunction = async () => {
//     const result = await getinterview();
//     let cat_list = [];
//     result?.data.map((list) => {
//       cat_list.push({ value: list.iid, label: list.iname });
//     });
//     setinterviewlist(cat_list);
//   };
//   const getjobtypelistfunction = async () => {
//     const result = await getjobtype();
//     let cat_list = [];
//     result?.data.map((list) => {
//       cat_list.push({ value: list.id, label: list.jobname });
//     });
//     setjobtypelist(cat_list);
//   };
//   const onHandleData = (e) => {
//     setdata1({ ...data1, [e.target.name]: e.target.value });
//   };
//   const onSubmit = async () => {
//     console.log(data1,"##############################");
//     // if (data1.category === "") {
//     //   //  alert("ffefe")
//     //   document.getElementById("caterr").innerHTML = "Please Enter Your Category";
//     // }
//     // if (data1.jobtitle === "") {
//     //   alert("enter your jobtitle");

//     // } else if(data1.category== null){
//     //   alert("please select category")
//     // }
   
//       const response = await insertjob(data1);

//       console.log(response, "response");
//       if (response.status === 1) {
//         toast("Job Added Successfully");
//       } else {
//         toast.error("Job Cannot Added");
//       }
    
//   };
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     setTimeout(() => {
//       setData("Some data");
//       setIsLoading(false);
//     }, 1000);
//     getcategorylistfunction();
//     getexperiencelistfunction();
//     getsalarylistfunction();
//     getinterviewlistfunction();
//     getjobtypelistfunction();
//     setdata1({ ...data1, companyid: userData?.companyid });
//   }, []);
//   return (
//     <>
//        {isLoading ? <Loader/> : <div>

//       <RecHeader />
//       <Load />

//       {/* ======================= Start Page Title ===================== */}
//       <div className="page-title">
//         <div className="container">
//           <div className="page-caption">
//             <h2>
//             <Typewriter
//                options={{
//                autoStart: true,
//                loop: true,
//               }}
//               onInit={(typewriter)=>{
//                 typewriter
//                 .typeString("Add Job")
//                 .pauseFor(2000)
//                 .start()
//               }}

//               />
//             </h2>
//             <p>
//               <Link to="/recruiterhome" title="Home">
//                 Home
//               </Link>{" "}
//               <i className="ti-angle-double-right" /> Add Job
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* ======================= End Page Title ===================== */}
//       {/* ======================= Create Job ===================== */}
//       <section className="create-job padd-top-80 padd-bot-80">
//         <div className="container">
//           <form className="c-form" onSubmit={handleSubmit(onSubmit)}>
//             {/* General Information */}
//             <div className="box">
//               <div className="box-header">
//                 <h4>General Information</h4>
//               </div>
//               <div className="box-body">
//                 <div className="row">
//                   <div className="col-md-6 col-sm-6 col-xs-12">
//                     <label>Job Title</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Job Title"
//                       name="jobtitle"
//                       value={data1.jobtitle}
//                       {...register("jobtitle", { required: true })}
//                       onChange={(e) => onHandleData(e)}
//                     />
//                     {data1.jobtitle == "" || data1.jobtitle == undefined && <p className="err">Please Provide Your Job Title</p>}
//                   </div>
//                   <div className="col-md-6 col-sm-6 col-xs-12">
//                     <div className="form-group">
//                       <label>Post Date</label>
//                       <input
//                         type="date"
//                         id="dob"
//                         name="postdate"
//                         value={data1.postdate}
//                         placeholder="Date Of Birth"
//                         className="form-control"
//                         {...register("postdate", { required: true })}
//                         onChange={(e) => onHandleData(e)}
//                       />
//                       {data1.postdate == "" || data1.postdate == undefined  && <p className="err">Please Provide Your Post Date</p>}
//                     </div>
//                   </div>
//                   {console.log(data1, "category")}

//                   <div className="col-md-6 col-sm-6 col-xs-12">
//                     <label>Category</label>

//                     <Select
//   {...register("cid", { required: true })}
//                       // className="wide "
//                       name="cid"
//                       options={categorylist}
//                       // {...register("category", { required: true })}

//                       onChange={(e) => {
//                         setdata1({ ...data1, cid: e.value });
//                       }}
                  
//                     />
//                           {/* <span id="caterr" className="err"  style={{color: "red"}} ></span> */}

//                     {data1.cid == "" || data1.cid == undefined  && <p className="err">Please Provide Your Category</p>}
//                   </div>

//                   <div className="col-md-6 col-sm-6 col-xs-12">
//                     <label>Salary Range</label>
//                     <Select
//                       // className="wide "
//                       name="salary"
//                       {...register("sid", { required: true })}

//                       onChange={(e) => {
//                         setdata1({ ...data1, sid: e.value });
//                       }}
//                       options={salarylist}
//                     />
//                                   {data1.sid == "" || data1.sid == undefined  && <p className="err">Please Provide Your Salary</p>}

//                   </div>

//                   <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
//                     <label>No. Of Vacancy</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="No. Of Vacancy"
//                       name="vacancy"
//                       value={data1.vacancy}
//                       {...register("vacancy", { required: true })}
//                       onChange={(e) => onHandleData(e)}
//                     />
//                     {data1.vacancy == "" || data1.vacancy == undefined  && <p className="err">Please Provide Your Vacancy</p>}
//                   </div>

//                   <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
//                     <label>Experience</label>
//                     <Select
//                       // className="wide "
//                       name="experience"
//                       {...register("eid", { required: true })}

//                       onChange={(e) => {
//                         setdata1({ ...data1, eid: e.value });
//                       }}
//                       options={experiencelist}
//                     />
//                                   {data1.eid == "" || data1.eid == undefined  && <p className="err">Please Provide Your Experience</p>}

//                   </div>

//                   <div className="col-md-6 col-sm-6 col-xs-12 m-clear" >
//                     <label>Job Type</label>
//                     <Select
//                       // className="wide "
//                       name="jobtype"
//                       {...register("id", { required: true })}

//                       onChange={(e) => {
//                         setdata1({ ...data1, id: e.value });
//                       }}
//                       options={jobtypelist}
//                     />
//                                   {data1.id == "" || data1.id == undefined  && <p className="err">Please Provide Your Job Type</p>}
                  
//                   </div>

//                   <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
//                     <label>Qualification Required</label>
//                     <input
//                       type="text"
//                       name="qualification"
//                       value={data1.qualification}
//                       className="form-control"
//                       placeholder="Qualification"
//                       {...register("qualification", { required: true })}
//                       onChange={(e) => onHandleData(e)}
//                     />
//                     {data1.qualification == "" || data1.qualification == undefined  &&  <p className="err">Please Provide Your Qualification</p>
//                     }
//                   </div>
//                   <div className="col-md-6 col-sm-6 col-xs-12">
//                     <label>Skills(Seperate with Comma)</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Skills"
//                       name="skill"
//                       value={data1.skill}
//                       {...register("skill", { required: true })}
//                       onChange={(e) => onHandleData(e)}
//                     />
//                     {data1.skill == "" || data1.skill == undefined  && <p className="err">Please Provide Your Skill</p>}
//                   </div>

//                   <div className="col-md-6 col-sm-6 col-xs-12">
//                     <label>Language known</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Language"
//                       name="language"
//                       value={data1.language}
//                       {...register("language", { required: true })}
//                       onChange={(e) => onHandleData(e)}
//                     />
//                     {data1.language == "" || data1.language == undefined  && <p className="err">Please Provide Your Language</p>}
//                   </div>

//                   <div className="col-md-6 col-sm-6 col-xs-12">
//                     <label>Types of Interview</label>
//                     <Select
//                       // className="wide "
//                       name="interview"
//                       {...register("iid", { required: true })}

//                       onChange={(e) => {
//                         setdata1({ ...data1, iid: e.value });
//                       }}
//                       options={interviewlist}
//                     />
//                                   {data1.iid == "" || data1.iid == undefined  && <p className="err">Please Provide Your Interview</p>}

//                   </div>

//                   <div className="col-md-6 col-sm-6 col-xs-12">
//                     <label>Job Location</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="job location"
//                       name="location"
//                       value={data1.location}
//                       {...register("location", { required: true })}
//                       onChange={(e) => onHandleData(e)}
//                     />
//                     {data1.location == "" || data1.location == undefined && <p className="err">Please Provide Your Location</p>}
//                   </div>

//                   <div className="col-md-12 col-sm-6 col-xs-12 m-clear">
//                     <label>Description</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Description"
//                       name="description"
//                       value={data1.description}
//                       {...register("description", { required: true })}
//                       onChange={(e) => onHandleData(e)}
//                     />
//                     {data1.description == "" || data1.description == undefined &&
//                       <p className="err">Please Provide Your Description</p>
//                     }
//                   </div>
//                 </div>

//                 <br />
//                 <br />
//                 <div className="text-center">
//                   <button
//                     type="submit"
//                     className="btn btn-m theme-btn full-width"
//                   >
//                     Job Post
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </section>
//       {/* ====================== End Create Job ================ */}
//       <Recruiterfooter />
//       </div>}
//     </>
//   );
// }

// export default Addjob;

import React, { useEffect, useState } from "react";
import RecHeader from "./RecHeader";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getcategory, insertjob } from "../api/common_api";
import { getsalary } from "../api/common_api";
import { getexperience } from "../api/common_api";
import { getjobtype } from "../api/common_api";
import { getinterview } from "../api/common_api";
import Recruiterfooter from "./Recruiterfooter";
import Load from "../Load";
import Typewriter from "typewriter-effect";
import moment from "moment"
import { useForm } from "react-hook-form";
import  Loader  from "../Loader";

function Addjob() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data1, setdata1] = useState({
    companyid: 0,
  });
  const userData = JSON.parse(localStorage.getItem("userdata")); //for fill data from registration

  const [categorylist, setcategorylist] = useState([]);
  const [salarylist, setsalarylist] = useState([]);
  const [experiencelist, setexperiencelist] = useState([]);
  const [jobtypelist, setjobtypelist] = useState([]);
  const [interviewlist, setinterviewlist] = useState([]);

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
  const onHandleData = (e) => {
    setdata1({ ...data1, [e.target.name]: e.target.value });
  };
  const submit = async () => {
    console.log(data1);

  
      const response = await insertjob(data1);

      console.log(response, "response");
      if (response.status === 1) {
        toast("Job Added Successfully");
      } else {
        toast.error("Job Cannot Added");
      }
    
  };
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
    getcategorylistfunction();
    getexperiencelistfunction();
    getsalarylistfunction();
    getinterviewlistfunction();
    getjobtypelistfunction();
    setdata1({ ...data1, companyid: userData?.companyid });
  }, []);
  const date=new Date();
  const today=moment().add(-1,'d').format("YYYY-MM-DD")

  console.log(today,"dateeeeeeeeeeeeeeeeeeeeeee")
  return (
    <>
       {isLoading ? <Loader/> : <div>

      <RecHeader />
      <Load />

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
                .typeString("Add Job")
                .pauseFor(2000)
                .start()
              }}

              />
            </h2>
            <p>
              <Link to="/recruiterhome" title="Home">
                Home
              </Link>{" "}
              <i className="ti-angle-double-right" /> Add Job
            </p>
          </div>
        </div>
      </div>
      {/* ======================= End Page Title ===================== */}
      {/* ======================= Create Job ===================== */}
      <section className="create-job padd-top-80 padd-bot-80">
        <div className="container">
          <form className="c-form" onSubmit={handleSubmit(submit)}>
            {/* General Information */}
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
                      value={data1.jobtitle}
                      {...register("jobtitle", { required: true })}
                      onChange={(e) => onHandleData(e)}
                    />
                    {errors.jobtitle && <p className="err">Please Provide Your JobTTitle</p>}
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Post Date</label>
                      <input
                        type="date"
                        id="dob"
                        name="postdate"
                        max={today}

                        value={data1.postdate}
                        placeholder="Date Of Birth"
                        className="form-control"
                        {...register("postdate", { required: true })}
                        onChange={(e) => onHandleData(e)}
                      />
                      {errors.postdate && <p className="err">Please Provide Your Post Date</p>}
                    </div>
                  </div>
                  {console.log(data1, "category")}

                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <label>Category</label>

                    <Select

                      // className="wide "
                      name="category"
                      options={categorylist}
                      // {...register("category", { required: true })}

                      onChange={(e) => {
                        setdata1({ ...data1, cid: e.value });
                      }}
                  
                    />
                    {/* {errors.category && <p className="err">Please Provide Your Category</p>} */}
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <label>Salary Range</label>
                    <Select
                      // className="wide "
                      name="salary"
                      // {...register("salary", { required: true })}

                      onChange={(e) => {
                        setdata1({ ...data1, sid: e.value });
                      }}
                      options={salarylist}
                    />
                    {/* {errors.salary && <p className="err">Please Provide Your Salary</p>} */}
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                    <label>No. Of Vacancy</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="No. Of Vacancy"
                      name="vacancy"
                      value={data1.vacancy}
                      {...register("vacancy", { required: true })}
                      onChange={(e) => onHandleData(e)}
                    />
                    {errors.vacancy && <p className="err">Please Provide Your Vacancy</p>}
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                    <label>Experience</label>
                    <Select
                      // className="wide "
                      name="experience"
                      // {...register("experience", { required: true })}

                      onChange={(e) => {
                        setdata1({ ...data1, eid: e.value });
                      }}
                      options={experiencelist}
                    />
                    {/* {errors.experience && <p className="err">Please Provide Your Experience</p>} */}
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12 m-clear" >
                    <label>Job Type</label>
                    <Select
                      // className="wide "
                      name="jobtype"
                      // {...register("jobtype", { required: true })}

                      onChange={(e) => {
                        setdata1({ ...data1, id: e.value });
                      }}
                      options={jobtypelist}
                    />
                    {/* {errors.jobtype && <p className="err">Please Provide Your Jobtype</p>} */}
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                    <label>Qualification Required</label>
                    <input
                      type="text"
                      name="qualification"
                      value={data1.qualification}
                      className="form-control"
                      placeholder="Qualification"
                      {...register("qualification", { required: true })}
                      onChange={(e) => onHandleData(e)}
                    />
                    {errors.qualification && (
                      <p className="err">Please Provide Your Qualification</p>
                    )}
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <label>Skills(Seperate with Comma)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Skills"
                      name="skill"
                      value={data1.skill}
                      {...register("skill", { required: true })}
                      onChange={(e) => onHandleData(e)}
                    />
                    {errors.skill && <p className="err">Please Provide Your Skill</p>}
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <label>Language known</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Language"
                      name="language"
                      value={data1.language}
                      {...register("language", { required: true })}
                      onChange={(e) => onHandleData(e)}
                    />
                    {errors.language && <p className="err">Please Provide Your Language</p>}
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <label>Types of Interview</label>
                    <Select
                      // className="wide "
                      name="interview"
                      // {...register("interview", { required: true })}

                      onChange={(e) => {
                        setdata1({ ...data1, iid: e.value });
                      }}
                      options={interviewlist}
                    />
                    {/* {errors.interview && <p className="err">Please Provide Your Interview</p>} */}
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <label>Job Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="job location"
                      name="location"
                      value={data1.location}
                      {...register("location", { required: true })}
                      onChange={(e) => onHandleData(e)}
                    />
                    {errors.location && <p className="err">Please Provide Your Location</p>}
                  </div>

                  <div className="col-md-12 col-sm-6 col-xs-12 m-clear">
                    <label>Description</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Description"
                      name="description"
                      value={data1.description}
                      {...register("description", { required: true })}
                      onChange={(e) => onHandleData(e)}
                    />
                    {errors.description && (
                      <p className="err">Please Provide Your Description</p>
                    )}
                  </div>
                </div>

                <br />
                <br />
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-m theme-btn full-width"
                  >
                    Job Post
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

