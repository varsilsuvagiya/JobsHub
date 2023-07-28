import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import Load from "./Load";
import { getcategory } from "./api/common_api";
import ReactWhatsapp from "react-whatsapp";
import  Loader  from "./Loader";

function Home() {
  const [catlist, setcatlist] = useState([]);
  
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getcatlistfunction = async () => {
    const result = await getcategory();
    
    console.log(result);
    setcatlist(result.data);
  };
  useEffect(() => {
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
    getcatlistfunction();
  }, []);
  return (
    <>
      {isLoading ? <Loader/> : <div>

      <Load />

      <Header />
      {/* ======================= Start Banner ===================== */}
      <div
        className="utf_main_banner_area"
        style={{ backgroundImage: "url(assets/img/11.jpg)" }}
        data-overlay={8}
      >
        <div className="container">
          <div className="col-md-8 col-sm-10">
            <div className="caption cl-white home_two_slid">
              {/* <h2>
                Find & Crack Your <span className="theme-cl">Dream</span> Job.
              </h2> */}
            </div>
          </div>
        </div>
      </div>

      {/* ================= Category start ========================= */}
      {/* <section className="padd-top-80 padd-bot-60">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {catlist?.map((list) => {
                return (
                  <>
                    <div className="col-md-3 col-sm-6">
                      <div className="utf_category_box_area">
                        <div className="utf_category_desc">
                          <div className="utf_category_icon">
                            {" "}
                            <i
                              className="icon-bargraph"
                              aria-hidden="true"
                            />{" "}
                          </div>
                          <div className="category-detail utf_category_desc_text">
                            <h4>{list.cname}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
     
      </section> */}
      <section className="utf_job_category_area">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>How to Post a Job?</h2>
            <p>
              FOLLOW THIS STEPS
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-4 col-sm-6">
            <a  title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-lock" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Log in</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    First you have to login in Job'sHub site then you can post any job.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a  title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-user" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>New? Register Now</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    If you are not register person then you should register your information to get extra benefits.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a  title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-pencil-alt" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Manage Your Profile</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    You can Manage Your Profile which is shown by job seeker.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a  title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-pencil" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Post Job</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    You can post a job by adding information about require job.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-settings" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Manage Job</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    You can manage details of job posts which are posted by you for difference requirements. 
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a  title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-comment" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Receive Message</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    Receive seeker details who is apply for your posted job to check and give response.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
         
          
        </div>
      </div>
    </div>
  </section>
  <section className="utf_job_category_area">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>How to Apply for Job?</h2>
            <p>
              FOLLOW THIS STEPS
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-4 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-lock" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Log in</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    First you have to login in Job'sHub site then you can apply for any job.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-user" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>New? Register Now</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    If you are not register person then you should register your information to get extra benefits.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-pencil-alt" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Manage Your Profile</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    You can Manage Your Profile for Your Resume details which is shown by Recruiter.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-search" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Search Job</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    You can show all jobs and their extra details as well as also filter job by jobtype,experiance,qualification and others.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-bag" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Apply For Job</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    If you are interested in any job then you can apply for job.
                    At a time you need to upload resume and other details.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div>
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-email" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Receive Confirmation Mail</h4>
                  </div>
                </div>
                </div>
               
                <div>
                  <p>
                    After applying for job recruiter can see that you have interested in any job,then Recruiter can send you confirmation mail through Job'sHub.
                  </p>
                </div>
              </div>
            
            </a>
          </div>
         
          
        </div>
      </div>
    </div>
  </section>
  <div
          className="container"
          style={{
            height: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Our Teams </h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="assets/img/jay.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name"> Mr.Jay Lakhani</h3>
                  <h4 className="title">Web Developer</h4>
                </div>
                <ul className="social">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/jay-lakhani-00560b270"
                      className="fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"

                    />
                  </li>

                  <li>
                    <a
                      href="https://instagram.com/jay._.lakhani_?igshid=MGNiNDI5ZTU="
                      className="fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"

                    />
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/jay.jivarahbhailakhani?mibextid=ZbWKwL"
                      className="fa fa-facebook"
                      aria-hidden="true"
                      target="_blank"

                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="assets/img/jainam.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Mr.Jainam Prajapati</h3>
                  <h4 className="title">Web Developer</h4>
                </div>
                <ul className="social">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/jainam-b-prajapati-4a7098241"
                      className="fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"

                    />
                  </li>

                  <li>
                    <a
                      href="https://instagram.com/mr_jainam_prajapati_02?igshid=ZDdkNTZiNTM="
                      className="fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"

                    />
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/jainamb.prajapati.3/"
                      className="fa fa-facebook"
                      aria-hidden="true"
                      target="_blank"

                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="assets/img/prince.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Mr.Prince Sondagar</h3>
                  <h4 className="title">Web Developer</h4>
                </div>
                <ul className="social">
                  <li>
                    <a
                      href=" "
                      className="fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"

                    />
                  </li>

                  <li>
                    <a
                      href="https://instagram.com/sondagar_prince?igshid=ZDdkNTZiNTM="
                      className="fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"

                    />
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/sondagar.prince.1?mibextid=ZbWKwL"
                      className="fa fa-facebook"
                      aria-hidden="true"
                      target="_blank"

                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="assets/img/me.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Mr.Varsil Suvagiya</h3>
                  <h4 className="title">Web Developer</h4>
                </div>
                <ul className="social">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/varsil-suvagiya-548aba253"
                      className="fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"

                    />
                  </li>

                  <li>
                    <a
                      href="https://instagram.com/i_m_varsil?igshid=ZDdkNTZiNTM="
                      className="fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"

                    />
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/varsil.suvagiya?mibextid=ZbWKwL"
                      className="fa fa-facebook"
                      aria-hidden="true"
                      target="_blank"

                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="assets/img/nj.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Mr.Nirav Savaliya</h3>
                  <h4 className="title">Web Developer</h4>
                </div>
                <ul className="social">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nirav-savaliya-252770238"
                      className="fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"
                      

                    />
                  </li>

                  <li>
                    <a
                      href="https://instagram.com/nj_savaliya_07?igshid=ZDdkNTZiNTM="
                      className="fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"

                    />
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/nirav.savaliya.7543"
                      className="fa fa-facebook"
                      aria-hidden="true"
                      target="_blank"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ReactWhatsapp
          number="919664976355"
          message="Hello!!! Can You Help Me ?"
          style={{
            background: "transparent",
            border: "none",
            position: "fixed",
            left: "5px",
            bottom: "24px",
            zIndex: "999999",
          }}
        >
          <img
            src="assets/img/gif.gif"
            className="logotext"
            style={{
              color: "#ffffff",
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
          />
        </ReactWhatsapp>

      <Footer/>
    </div>}

    </>
  );
}

export default Home;
