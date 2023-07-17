
// import React from 'react'

// function Try() {
//   return (
//    <>
                        {/* <div className="col-md-9">
                            <div className="profile_detail_block">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label>Send Email</label>
                                        <input
                                            type="text"
                                            name='js_email'
                                            className="form-control"
                                            onChange={handle}
                                            placeholder="Email Id"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label>Canform Password</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="*****"
                                        />
                                    </div>
                                </div>

                                <div className="clearfix" />
                                <div className="col-md-12 padd-top-10 text-center">
                                    {" "}
                                    <a className="btn btn-m theme-btn full-width" onClick={send
                                    }>
                                        Update
                                    </a>
                                </div>
                            </div>
                        </div>*/}
                  
//    </>
//   )
// }

// export default Try
// import React, { useState } from 'react';
// import OtpInput from 'react-otp-input';

// export default function App() {
//   const [otp, setOtp] = useState('');

//   return (
//     <OtpInput
//       value={otp}
//       onChange={setOtp}
//       numInputs={4}
//       renderSeparator={<span>-</span>}
//       renderInput={(props) => <input {...props} />}
//     />
//   );
// }
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',

//     backgroundColor: "#fff",
//     padding: "10px",
//     borderRadius: "10px",
//     boxShadow: " 0 3px 30px rgba(0, 0, 0, 0.4)",
// };

// export default function Try2() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     return (
//         <div>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style}>
//                     <div
//                         style={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                         }}
//                     >
//                         <span>
//                             <h3>APPLY HERE</h3>
//                         </span>
//                         <span>
                           
//                             <button
//                                 className="btn btn-m theme-btn2" onClick={handleClose}>
//                                 {" "}
//                                 {/* cancel */}
//                                 <i className=" ti-close" />

//                             </button>
//                         </span>
//                     </div>
//                     <hr />
//                     <div className="scr" style={{ height: "400px", overflow: "auto" }}>
//                         <div className="profile_detail_block">
//                             <div className="text-center mrg-bot-20">
//                                 <h4 className="mrg-0">Front End Designer</h4>
//                                 <span>2708 Scenic Way, Sutter</span>
//                             </div>
//                             <form>
//                                 <div className="col-md-6 col-sm-6">
//                                     <label>Name</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Name"
//                                         name="name"


//                                     />
//                                 </div>
//                                 <div className="col-md-6 col-sm-6">
//                                     <label>Email</label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         className="form-control"
//                                         placeholder="Email"


//                                     />
//                                 </div>
//                                 <div className="col-md-6 col-sm-6">
//                                     <label>Phone</label>
//                                     <input
//                                         type="number"
//                                         className="form-control"
//                                         placeholder="Phone No"
//                                         name="mno"


//                                     />
//                                 </div>
//                                 <div className="col-md-6 col-sm-6">
//                                     <label>Upload CV</label>
//                                     <div className="custom-file-upload">
//                                         <input type="file" id="file"


//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="col-md-12 text-center">
//                                     <button

//                                         type="button"
//                                         className="btn theme-btn btn-m full-width"
//                                     >
//                                         Save
//                                     </button>
//                                 </div>
//                                 <div className="clearfix" />
//                             </form>
//                         </div>
//                     </div>

//                     <hr />
//                     <div>
//                         <div
//                             style={{
//                                 display: "flex",
//                                 justifyContent: "flex-end",
//                                 margin: "0 10px 0 10px",
//                             }}
//                         >
//                             {/* <span>
//               <button className="btn btn-m theme-btn2" onClick={closeModal}>
//                 {" "}
//                 cancel
//               <i className=" ti-close" />

//               </button>
//             </span> */}
//                             {/* &nbsp;&nbsp;&nbsp;
//             <span>
//               <button className="btn btn-m theme-btn"> save</button>
//             </span> */}
//                         </div>
//                     </div>
//                 </Box>
//             </Modal>
// {/* 
//             <section className="padd-top-80 padd-bot-80">
//                 <div className="container">
//                     <div className="log-box">
//                         <form className="log-form">

//                             <div className="col-md-6">
//                                 <div className="form-group">
//                                     <label>Email</label>
//                                     <input
//                                         type="email"
//                                         name="email"

//                                         className="form-control"
//                                         placeholder="Email"
//                                     />
//                                     <span id="emailerr" className='err'></span>
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <div className="form-group">
//                                     <label>Password</label>
//                                     <input
//                                         type="password"
//                                         name="pwd"

//                                         className="form-control"
//                                         placeholder="****"

//                                     />
//                                     <span id="pwderr" className='err'></span>
//                                 </div>
//                                 <div className="form-group">
//                                     {" "}

//                                     <Button id='frgpass' className="fl-right" onClick={handleOpen} style={{ display: "none" }}>
//                                         Forgot Password?
//                                     </Button>
//                                     <label for="frgpass" className="fl-right"> Forgot Password?</label>
//                                 </div>
//                             </div>

//                             <div className="col-md-12">
//                                 <div className="form-group text-center mrg-top-15">
//                                     <button
//                                         type="submit"
//                                         className="btn theme-btn btn-m full-width"

//                                     >
//                                         Login
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className="clearfix" />
//                         </form>
//                     </div>
//                 </div>
//             </section> */}

// {/* <section className="padd-top-80 padd-bot-80">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-8 col-sm-7">
//                 <div className="detail-wrapper">
//                   <div className="detail-wrapper-body">
//                     <div className="row">
//                       <div className="col-md-4 text-center user_profile_img mrg-bot-30">
//                         {" "}
//                         <img
//                           src="assets/img/client-1.jpg"
//                           className="img-circle width-100"
//                           alt=""
//                         />
//                         <h4 className="meg-0">Alden Smith</h4>
//                         <span>Front End Designer</span>
//                         <span><button className='btn-job theme-btn job-apply' onClick={handleOpen}>Apply</button></span>
//                       </div>
//                       <div className="col-md-8 user_job_detail">
//                         <div className="col-md-12 mrg-bot-10">
//                           {" "}
//                           <i className="ti-location-pin padd-r-10" />
//                           2726 Shinn, New York{" "}
//                         </div>
//                         <div className="col-md-12 mrg-bot-10">
//                           {" "}
//                           <i className="ti-email padd-r-10" />
//                           mail@example.com{" "}
//                         </div>
//                         <div className="col-md-12 mrg-bot-10">
//                           {" "}
//                           <i className="ti-mobile padd-r-10" />
//                           91 234 567 8765{" "}
//                         </div>
//                         <div className="col-md-12 mrg-bot-10">
//                           {" "}
//                           <i className="ti-credit-card padd-r-10" />
//                           $12/Hour{" "}
//                         </div>
//                         <div className="col-md-12 mrg-bot-10">
//                           {" "}
//                           <i className="ti-shield padd-r-10" />3 Year Exp.{" "}
//                         </div>
//                         <div className="col-md-12 mrg-bot-10">
//                           {" "}
//                           <span className="skill-tag">css</span>{" "}
//                           <span className="skill-tag">HTML</span>{" "}
//                           <span className="skill-tag">Photoshop</span>{" "}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="detail-wrapper">
//                   <div className="detail-wrapper-header">
//                     <h4>Career</h4>
//                   </div>
//                   <div className="detail-wrapper-body">
//                     <p>
//                       Contrary to popular belief, Lorem Ipsum is not simply random
//                       text. It has roots in a piece of classical Latin literature from
//                       45 BC, making it over 2000 years old. Richard McClintock, a
//                       Latin professor at Hampden-Sydney College in Virginia, looked up
//                       one of the more obscure Latin words, consectetur.
//                     </p>
//                     <p>
//                       The point of using Lorem Ipsum is that it has a more-or-less
//                       normal distribution of letters, as opposed to using 'Content
//                       here, content here', making it look like readable English.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="detail-wrapper">
//                   <div className="detail-wrapper-header">
//                     <h4>Education</h4>
//                   </div>
//                   <div className="detail-wrapper-body">
//                     <div className="edu-history info">
//                       {" "}
//                       <i />
//                       <div className="detail-info">
//                         <h3>University</h3>
//                         <i>2020 - 2020</i>{" "}
//                         <span>
//                           {" "}
//                           denouncing pleasure and praising pain <i>It Computer</i>
//                         </span>
//                         <p>
//                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                           Proin a ipsum tellus. Interdum et malesuada fames ac ante
//                           ipsum primis in faucibus.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="edu-history danger">
//                       {" "}
//                       <i />
//                       <div className="detail-info">
//                         <h3>Intermediate School</h3>
//                         <i>2015 - 2020</i>{" "}
//                         <span>
//                           denouncing pleasure and praising pain <i>It Computer</i>
//                         </span>
//                         <p>
//                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                           Proin a ipsum tellus. Interdum et malesuada fames ac ante
//                           ipsum primis in faucibus.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="edu-history success">
//                       {" "}
//                       <i />
//                       <div className="detail-info">
//                         <h3>High School</h3>
//                         <i>2012 - 2015</i>{" "}
//                         <span>
//                           denouncing pleasure and praising pain <i>It Computer</i>
//                         </span>
//                         <p>
//                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                           Proin a ipsum tellus. Interdum et malesuada fames ac ante
//                           ipsum primis in faucibus.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="detail-wrapper">
//                   <div className="detail-wrapper-header">
//                     <h4>Work &amp; Experience</h4>
//                   </div>
//                   <div className="detail-wrapper-body">
//                     <div className="edu-history info">
//                       {" "}
//                       <i />
//                       <div className="detail-info">
//                         <h3>Php Developer</h3>
//                         <i>2008 - 2012</i>
//                         <p>
//                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                           Proin a ipsum tellus. Interdum et malesuada fames ac ante
//                           ipsum primis in faucibus.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="edu-history danger">
//                       {" "}
//                       <i />
//                       <div className="detail-info">
//                         <h3>Java Developer</h3>
//                         <i>2012 - 2014</i>
//                         <p>
//                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                           Proin a ipsum tellus. Interdum et malesuada fames ac ante
//                           ipsum primis in faucibus.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="edu-history success">
//                       {" "}
//                       <i />
//                       <div className="detail-info">
//                         <h3>CMS Developer</h3>
//                         <i>2014 - 2018</i>
//                         <p>
//                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                           Proin a ipsum tellus. Interdum et malesuada fames ac ante
//                           ipsum primis in faucibus.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-4 col-sm-5">
//                 <div className="sidebar">
//                   <div className="widget-boxed">
//                     <div className="text-center">
//                       <button type="submit" className="btn btn-m btn-primary">
//                         Download Resume
//                       </button>
//                     </div>
//                   </div>
//                   <div className="widget-boxed">
//                     <div className="widget-boxed-header">
//                       <h4>
//                         <i className="ti-location-pin padd-r-10" />
//                         Location
//                       </h4>
//                     </div>
//                     <div className="widget-boxed-body">
//                       <div className="side-list no-border">
//                         <ul>
//                           <li>
//                             <i className="ti-credit-card padd-r-10" />
//                             Package: 20K To 50K/Month
//                           </li>
//                           <li>
//                             <i className="ti-world padd-r-10" />
//                             https://www.example.com
//                           </li>
//                           <li>
//                             <i className="ti-mobile padd-r-10" />
//                             91 234 567 8765
//                           </li>
//                           <li>
//                             <i className="ti-email padd-r-10" />
//                             mail@example.com
//                           </li>
//                           <li>
//                             <i className="ti-pencil-alt padd-r-10" />
//                             Bachelor Degree
//                           </li>
//                           <li>
//                             <i className="ti-shield padd-r-10" />3 Year Exp.
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
                
//                 </div>
              
//             </div>
//           </div>
//           </div>
          
//         </section> */}


// <section className="padd-top-80 padd-bot-80">
//   <div className="container">
//     <div className="row">
//       <div className="col-md-3 col-sm-5">
//         <div className="widget-boxed padd-bot-0">
//           <div className="widget-boxed-body">
//             <div className="search_widget_job">
//               <div className="field_w_search">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Search Keywords"
//                 />
//               </div>
//               <div className="field_w_search">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="All Locations"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="widget-boxed padd-bot-0">
//           <div className="widget-boxed-header">
//             <h4>Offerd Salary</h4>
//           </div>
//           <div className="widget-boxed-body">
//             <div className="side-list no-border">
//               <ul>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id={1} />
//                     <label htmlFor={1} />
//                   </span>{" "}
//                   Under $10,000 <span className="pull-right">102</span>
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id={2} />
//                     <label htmlFor={2} />
//                   </span>{" "}
//                   $10,000 - $15,000 <span className="pull-right">78</span>
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id={3} />
//                     <label htmlFor={3} />
//                   </span>{" "}
//                   $15,000 - $20,000 <span className="pull-right">12</span>
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id={4} />
//                     <label htmlFor={4} />
//                   </span>{" "}
//                   $20,000 - $30,000 <span className="pull-right">85</span>
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id={5} />
//                     <label htmlFor={5} />
//                   </span>{" "}
//                   $30,000 - $40,000 <span className="pull-right">307</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="widget-boxed padd-bot-0">
//           <div className="widget-boxed-header">
//             <h4>Job Type</h4>
//           </div>
//           <div className="widget-boxed-body">
//             <div className="side-list no-border">
//               <ul>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id="a1" />
//                     <label htmlFor="a1" />
//                   </span>{" "}
//                   Full Time <span className="pull-right">102</span>
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id="b1" />
//                     <label htmlFor="b1" />
//                   </span>{" "}
//                   Part Time <span className="pull-right">78</span>
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id="c1" />
//                     <label htmlFor="c1" />
//                   </span>{" "}
//                   Internship <span className="pull-right">12</span>
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id="d1" />
//                     <label htmlFor="d1" />
//                   </span>{" "}
//                   Freelancer <span className="pull-right">85</span>
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id="e1" />
//                     <label htmlFor="e1" />
//                   </span>{" "}
//                   Contract Base <span className="pull-right">307</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="widget-boxed padd-bot-0">
//           <div className="widget-boxed-header br-0">
//             <h4>
//               Designation{" "}
//               <a href="#designation" data-toggle="collapse">
//                 <i className="pull-right ti-plus" aria-hidden="true" />
//               </a>
//             </h4>
//           </div>
//           <div className="widget-boxed-body collapse" id="designation">
//             <div className="side-list no-border">
//               <ul>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id="a" />
//                     <label htmlFor="a" />
//                   </span>{" "}
//                   Web Designer <span className="pull-right">102</span>
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id="b" />
//                     <label htmlFor="b" />
//                   </span>{" "}
//                   Php Developer <span className="pull-right">78</span>
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id="c" />
//                     <label htmlFor="c" />
//                   </span>{" "}
//                   Project Manager <span className="pull-right">12</span>
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id="d" />
//                     <label htmlFor="d" />
//                   </span>{" "}
//                   Human Resource <span className="pull-right">85</span>
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id="e" />
//                     <label htmlFor="e" />
//                   </span>{" "}
//                   CMS Developer <span className="pull-right">307</span>
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id="f" />
//                     <label htmlFor="f" />
//                   </span>{" "}
//                   App Developer <span className="pull-right">256</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="widget-boxed padd-bot-0">
//           <div className="widget-boxed-header br-0">
//             <h4>
//               Experince{" "}
//               <a href="#experince" data-toggle="collapse">
//                 <i className="pull-right ti-plus" aria-hidden="true" />
//               </a>
//             </h4>
//           </div>
//           <div className="widget-boxed-body collapse" id="experince">
//             <div className="side-list no-border">
//               <ul>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id={11} />
//                     <label htmlFor={11} />
//                   </span>{" "}
//                   1Year To 2Year
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id={21} />
//                     <label htmlFor={21} />
//                   </span>{" "}
//                   2Year To 3Year
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id={31} />
//                     <label htmlFor={31} />
//                   </span>{" "}
//                   3Year To 4Year
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id={41} />
//                     <label htmlFor={41} />
//                   </span>{" "}
//                   4Year To 5Year
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id={51} />
//                     <label htmlFor={51} />
//                   </span>{" "}
//                   5Year To 7Year
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id={61} />
//                     <label htmlFor={61} />
//                   </span>{" "}
//                   7Year To 10Year
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="widget-boxed padd-bot-0">
//           <div className="widget-boxed-header br-0">
//             <h4>
//               Qualification{" "}
//               <a href="#qualification" data-toggle="collapse">
//                 <i className="pull-right ti-plus" aria-hidden="true" />
//               </a>
//             </h4>
//           </div>
//           <div className="widget-boxed-body collapse" id="qualification">
//             <div className="side-list no-border">
//               <ul>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id={12} />
//                     <label htmlFor={12} />
//                   </span>{" "}
//                   High School
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id={22} />
//                     <label htmlFor={22} />
//                   </span>{" "}
//                   Intermediate
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id={32} />
//                     <label htmlFor={32} />
//                   </span>{" "}
//                   Graduation
//                 </li>
//                 <li>
//                   {" "}
//                   <span className="custom-checkbox">
//                     <input type="checkbox" id={42} />
//                     <label htmlFor={42} />
//                   </span>{" "}
//                   Master Degree
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Start Job List */}
//       <div className="col-md-9 col-sm-7">
//         <div className="row mrg-bot-20">
//           <div className="col-md-4 col-sm-12 col-xs-12 browse_job_tlt">
//             <h4 className="job_vacancie">98 Jobs &amp; Vacancies</h4>
//           </div>
//           <div className="col-md-8 col-sm-12 col-xs-12">
//             <div className="fl-right short_by_filter_list">
//               <div className="search-wide short_by_til">
//                 <h5>Short By</h5>
//               </div>
//               <div className="search-wide full">
//                 <select className="wide form-control">
//                   <option value={1}>Most Recent</option>
//                   <option value={2}>Most Viewed</option>
//                   <option value={4}>Most Search</option>
//                 </select>
//               </div>
//               <div className="search-wide full">
//                 <select className="wide form-control">
//                   <option>10 Per Page</option>
//                   <option value={1}>20 Per Page</option>
//                   <option value={2}>30 Per Page</option>
//                   <option value={4}>50 Per Page</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Single Verticle job */}
//         <div className="job-verticle-list">
//           <div className="vertical-job-card">
//             <div className="vertical-job-header">
//               <div className="vrt-job-cmp-logo">
//                 {" "}
//                 <a href="job-detail.html">
//                   <img
//                     src="assets/img/company_logo_1.png"
//                     className="img-responsive"
//                     alt=""
//                   />
//                 </a>{" "}
//               </div>
//               <h4>
//                 <a href="job-detail.html">Apple LTD</a>
//               </h4>
//               <span className="com-tagline">Software Development</span>{" "}
//               <span className="pull-right vacancy-no">
//                 No. <span className="v-count">2</span>
//               </span>
//             </div>
//             <div className="vertical-job-body">
//               <div className="row">
//                 <div className="col-md-9 col-sm-12 col-xs-12">
//                   <ul className="can-skils">
//                     <li>
//                       <strong>Job Id: </strong>G58726
//                     </li>
//                     <li>
//                       <strong>Job Type: </strong>Full Time
//                     </li>
//                     <li>
//                       <strong>Skills: </strong>{" "}
//                       <div>
//                         <span className="skill-tag">HTML</span>{" "}
//                         <span className="skill-tag">css</span>{" "}
//                         <span className="skill-tag">java</span>{" "}
//                         <span className="skill-tag">php</span>
//                       </div>{" "}
//                     </li>
//                     <li>
//                       <strong>Experience: </strong>3 Year
//                     </li>
//                     <li>
//                       <strong>Location: </strong>2844 Counts Lane, KY 45241
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="col-md-3 col-sm-12 col-xs-12">
//                   <div className="vrt-job-act">
//                     {" "}
//                     <a
//                       href="#"
//                       data-toggle="modal"
//                       data-target="#apply-job"
//                       className="btn-job theme-btn job-apply"
//                     >
//                       Apply Now
//                     </a>{" "}
//                     <a
//                       href="job-detail.html"
//                       title=""
//                       className="btn-job light-gray-btn"
//                     >
//                       View Job
//                     </a>{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Single Verticle job */}
//         <div className="job-verticle-list">
//           <div className="vertical-job-card">
//             <div className="vertical-job-header">
//               <div className="vrt-job-cmp-logo">
//                 {" "}
//                 <a href="job-detail.html">
//                   <img
//                     src="assets/img/company_logo_2.png"
//                     className="img-responsive"
//                     alt=""
//                   />
//                 </a>{" "}
//               </div>
//               <h4>
//                 <a href="job-detail.html">Google LTD</a>
//               </h4>
//               <span className="com-tagline">Software Development</span>{" "}
//               <span className="pull-right vacancy-no">
//                 No. <span className="v-count">2</span>
//               </span>
//             </div>
//             <div className="vertical-job-body">
//               <div className="row">
//                 <div className="col-md-9 col-sm-12 col-xs-12">
//                   <ul className="can-skils">
//                     <li>
//                       <strong>Job Id: </strong>G58726
//                     </li>
//                     <li>
//                       <strong>Job Type: </strong>Full Time
//                     </li>
//                     <li>
//                       <strong>Skills: </strong>{" "}
//                       <div>
//                         <span className="skill-tag">HTML</span>{" "}
//                         <span className="skill-tag">css</span>{" "}
//                         <span className="skill-tag">java</span>{" "}
//                         <span className="skill-tag">php</span>
//                       </div>{" "}
//                     </li>
//                     <li>
//                       <strong>Experience: </strong>3 Year
//                     </li>
//                     <li>
//                       <strong>Location: </strong>2844 Counts Lane, KY 45241
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="col-md-3 col-sm-12 col-xs-12">
//                   <div className="vrt-job-act">
//                     {" "}
//                     {/* <a
//                       href="#"
//                       data-toggle="modal"
//                       data-target="#apply-job"
//                       className="btn-job theme-btn job-apply"
//                     >
                        
//                       Apply Now
//                     </a>{" "} */}
//                     <button
//                      onClick={handleOpen}
//                       data-toggle="modal"
//                       data-target="#apply-job"
//                       className="btn-job theme-btn job-apply"
//                     >
                        
//                       Apply Now
//                     </button>
//                     <a
//                       href="job-detail.html"
//                       title=""
//                       className="btn-job light-gray-btn"
//                     >
//                       View Job
//                     </a>{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Single Verticle job */}
//         <div className="job-verticle-list">
//           <div className="vertical-job-card">
//             <div className="vertical-job-header">
//               <div className="vrt-job-cmp-logo">
//                 {" "}
//                 <a href="job-detail.html">
//                   <img
//                     src="assets/img/company_logo_3.png"
//                     className="img-responsive"
//                     alt=""
//                   />
//                 </a>{" "}
//               </div>
//               <h4>
//                 <a href="job-detail.html">Laxol LTD</a>
//               </h4>
//               <span className="com-tagline">Frond End Designer</span>{" "}
//               <span className="pull-right vacancy-no">
//                 No. <span className="v-count">2</span>
//               </span>
//             </div>
//             <div className="vertical-job-body">
//               <div className="row">
//                 <div className="col-md-9 col-sm-12 col-xs-12">
//                   <ul className="can-skils">
//                     <li>
//                       <strong>Job Id: </strong>G58726
//                     </li>
//                     <li>
//                       <strong>Job Type: </strong>Full Time
//                     </li>
//                     <li>
//                       <strong>Skills: </strong>{" "}
//                       <div>
//                         <span className="skill-tag">HTML</span>{" "}
//                         <span className="skill-tag">css</span>{" "}
//                         <span className="skill-tag">java</span>{" "}
//                         <span className="skill-tag">php</span>
//                       </div>{" "}
//                     </li>
//                     <li>
//                       <strong>Experience: </strong>3 Year
//                     </li>
//                     <li>
//                       <strong>Location: </strong>2844 Counts Lane, KY 45241
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="col-md-3 col-sm-12 col-xs-12">
//                   <div className="vrt-job-act">
//                     {" "}
//                     <a
//                       href="#"
//                       data-toggle="modal"
//                       data-target="#apply-job"
//                       className="btn-job theme-btn job-apply"
//                     >
//                       Apply Now
//                     </a>{" "}
//                     <a
//                       href="job-detail.html"
//                       title=""
//                       className="btn-job light-gray-btn"
//                     >
//                       View Job
//                     </a>{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Single Verticle job */}
//         <div className="job-verticle-list">
//           <div className="vertical-job-card">
//             <div className="vertical-job-header">
//               <div className="vrt-job-cmp-logo">
//                 {" "}
//                 <a href="job-detail.html">
//                   <img
//                     src="assets/img/company_logo_4.png"
//                     className="img-responsive"
//                     alt=""
//                   />
//                 </a>{" "}
//               </div>
//               <h4>
//                 <a href="job-detail.html">Sirix LTD</a>
//               </h4>
//               <span className="com-tagline">CMS Development</span>{" "}
//               <span className="pull-right vacancy-no">
//                 No. <span className="v-count">2</span>
//               </span>
//             </div>
//             <div className="vertical-job-body">
//               <div className="row">
//                 <div className="col-md-9 col-sm-12 col-xs-12">
//                   <ul className="can-skils">
//                     <li>
//                       <strong>Job Id: </strong>G58726
//                     </li>
//                     <li>
//                       <strong>Job Type: </strong>Full Time
//                     </li>
//                     <li>
//                       <strong>Skills: </strong>{" "}
//                       <div>
//                         <span className="skill-tag">HTML</span>{" "}
//                         <span className="skill-tag">css</span>{" "}
//                         <span className="skill-tag">java</span>{" "}
//                         <span className="skill-tag">php</span>
//                       </div>{" "}
//                     </li>
//                     <li>
//                       <strong>Experience: </strong>3 Year
//                     </li>
//                     <li>
//                       <strong>Location: </strong>2844 Counts Lane, KY 45241
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="col-md-3 col-sm-12 col-xs-12">
//                   <div className="vrt-job-act">
//                     {" "}
//                     <a
//                       href="#"
//                       data-toggle="modal"
//                       data-target="#apply-job"
//                       className="btn-job theme-btn job-apply"
//                     >
//                       Apply Now
//                     </a>{" "}
//                     <a
//                       href="job-detail.html"
//                       title=""
//                       className="btn-job light-gray-btn"
//                     >
//                       View Job
//                     </a>{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Single Verticle job */}
//         <div className="job-verticle-list">
//           <div className="vertical-job-card">
//             <div className="vertical-job-header">
//               <div className="vrt-job-cmp-logo">
//                 {" "}
//                 <a href="job-detail.html">
//                   <img
//                     src="assets/img/company_logo_5.png"
//                     className="img-responsive"
//                     alt=""
//                   />
//                 </a>{" "}
//               </div>
//               <h4>
//                 <a href="job-detail.html">Indico LTD</a>
//               </h4>
//               <span className="com-tagline">PHP Development</span>{" "}
//               <span className="pull-right vacancy-no">
//                 No. <span className="v-count">2</span>
//               </span>
//             </div>
//             <div className="vertical-job-body">
//               <div className="row">
//                 <div className="col-md-9 col-sm-12 col-xs-12">
//                   <ul className="can-skils">
//                     <li>
//                       <strong>Job Id: </strong>G58726
//                     </li>
//                     <li>
//                       <strong>Job Type: </strong>Full Time
//                     </li>
//                     <li>
//                       <strong>Skills: </strong>{" "}
//                       <div>
//                         <span className="skill-tag">HTML</span>{" "}
//                         <span className="skill-tag">css</span>{" "}
//                         <span className="skill-tag">java</span>{" "}
//                         <span className="skill-tag">php</span>
//                       </div>{" "}
//                     </li>
//                     <li>
//                       <strong>Experience: </strong>3 Year
//                     </li>
//                     <li>
//                       <strong>Location: </strong>2844 Counts Lane, KY 45241
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="col-md-3 col-sm-12 col-xs-12">
//                   <div className="vrt-job-act">
//                     {" "}
//                     <a
//                       href="#"
//                       data-toggle="modal"
//                       data-target="#apply-job"
//                       className="btn-job theme-btn job-apply"
//                     >
//                       Apply Now
//                     </a>{" "}
//                     <a
//                       href="job-detail.html"
//                       title=""
//                       className="btn-job light-gray-btn"
//                     >
//                       View Job
//                     </a>{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="clearfix" />
//         <div className="utf_flexbox_area padd-0">
//           <ul className="pagination">
//             <li className="page-item">
//               {" "}
//               <a className="page-link" href="#" aria-label="Previous">
//                 {" "}
//                 <span aria-hidden="true">«</span>{" "}
//                 <span className="sr-only">Previous</span>{" "}
//               </a>{" "}
//             </li>
//             <li className="page-item active">
//               <a className="page-link" href="#">
//                 1
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 2
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 3
//               </a>
//             </li>
//             <li className="page-item">
//               {" "}
//               <a className="page-link" href="#" aria-label="Next">
//                 {" "}
//                 <span aria-hidden="true">»</span>{" "}
//                 <span className="sr-only">Next</span>{" "}
//               </a>{" "}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     {/* End Row */}
//   </div>
// </section>

//         </div>
//     );

//react responsive modal
// }
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';

// const Try = () => {
//   const [open, setOpen] = useState(false);

//   const onOpenModal = () => setOpen(true);
//   const onCloseModal = () => setOpen(false);

//   return (
//     <div>
//       <button onClick={onOpenModal}>Open modal</button>
//       <Modal open={open} onClose={onCloseModal} center>
     
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <span>
//             <h3>APPLY HERE...</h3>
//           </span>
//           <span>
           
//           </span>
//         </div>
//         <hr />
//         <div className="scr" style={{ height: "400px", overflow: "auto" }}>
//           <div className="profile_detail_block">
//             <div className="text-center mrg-bot-20">
//               <h4 className="mrg-0">Front End Designer</h4>
//               {/* <span>2708 Scenic Way, Sutter</span> */}
//             </div>
//             <form>
//               <div className="col-md-6 col-sm-6">
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Name"
//                   name="name"
//                 //   onChange={(e) => onHandleData(e)}

//                 />
//               </div>
//               <div className="col-md-6 col-sm-6">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control"
//                   placeholder="Email"
//                             // onChange={(e) => onHandleData(e)}

//                 />
//               </div>
//               <div className="col-md-6 col-sm-6">
//                 <label>Phone</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   placeholder="Phone No"
//                   name="mno"
//                 //   onChange={(e) => onHandleData(e)}

//                 />
//               </div>
//               <div className="col-md-6 col-sm-6">
//                 <label>Upload CV</label>
//                 <div className="custom-file-upload">
//                   <input type="file" id="file" 

//                     // onChange={(e) => {
//                     //             setapply({
//                     //               ...apply,
//                     //               uploadcv: e.target.files[0],
//                     //             });
//                     //             onHandleChange(e);
//                     //           }}
//                   />
//                 </div>
//               </div>

//               <div className="col-md-12 text-center">
//                 <button
//                 //  onClick={() => {submit();closeModal()}}
//                   type="button"
//                   className="btn theme-btn btn-m full-width"
//                 >
//                 APPLY JOB
//                 </button>
//               </div>
//               <div className="clearfix" />
//             </form>
//           </div>
//         </div>

//         <hr />
//         <div>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               margin: "0 10px 0 10px",
//             }}
//           >
//             <span>
//               <button className="btn btn-m theme-btn2" >
//                 {" "}
                
//               <i className=" ti-close" />

//               </button>
//             </span>
//             {/* &nbsp;&nbsp;&nbsp;
//             <span>
//               <button className="btn btn-m theme-btn"> save</button>
//             </span> */}
//           </div>
//         </div>
    
//       </Modal>
//     </div>
//   );
// };
// export default Try