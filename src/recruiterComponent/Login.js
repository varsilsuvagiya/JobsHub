import React, { useState } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { loginadmin } from "./api/common_api";

function Login() {
    const navigate = useNavigate();
  const [newData1, setnew1] = useState({
   adminid:"",
   adminpwd:""
  });

  const notify = () => toast();
  function update1(e) {
    setnew1({ ...newData1, [e.target.name]: e.target.value });
  }

  async function loginapi() {
    if (newData1.adminid === "") {
      //  alert("ffefe")
      document.getElementById("emailerr").innerHTML = "Please Enter Your Email";
    }
    if (newData1.adminpwd === "") {
      document.getElementById("pwderr").innerHTML =
        "Please Enter Your Password";
    } else {
      const response = await loginadmin(newData1);
      if (response.status === 1) {
         const result=response.result[0]
            localStorage.setItem('userdata',JSON.stringify(result))
        toast("Admin Enter Successfully");
        navigate("/home");
      } else {
        toast.error("Something Is Wrong");
      }
    }
  }
  return (
   <>
    <>
  
  <div className="login-root">
    <div
      className="box-root flex-flex flex-direction--column"
      style={{ minHeight: "100vh", flexGrow: 1 }}
    >
      <div className="loginbackground box-background--white padding-top--64">
        <div className="loginbackground-gridContainer">
          <div
            className="box-root flex-flex"
            style={{ gridArea: "top / start / 8 / end" }}
          >
            <div
              className="box-root"
              style={{
                backgroundImage:
                  "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                flexGrow: 1
              }}
            ></div>
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "4 / 2 / auto / 5" }}
          >
            <div
              className="box-root box-divider--light-all-2 animationLeftRight tans3s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "6 / start / auto / 2" }}
          >
            <div
              className="box-root box-background--blue800"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "7 / start / auto / 4" }}
          >
            <div
              className="box-root box-background--blue animationLeftRight"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "8 / 4 / auto / 6" }}
          >
            <div
              className="box-root box-background--gray100 animationLeftRight tans3s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "2 / 15 / auto / end" }}
          >
            <div
              className="box-root box-background--cyan200 animationRightLeft tans4s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "3 / 14 / auto / end" }}
          >
            <div
              className="box-root box-background--blue animationRightLeft"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "4 / 17 / auto / 20" }}
          >
            <div
              className="box-root box-background--gray100 animationRightLeft tans4s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "5 / 14 / auto / 17" }}
          >
            <div
              className="box-root box-divider--light-all-2 animationRightLeft tans3s"
              style={{ flexGrow: 1 }}
            />
          </div>
        </div>
      </div>
      <div
        className="box-root padding-top--24 flex-flex flex-direction--column"
        style={{ flexGrow: 1, zIndex: 9 }}
      >
        <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1>
            <a  rel="dofollow">
           JOB'S HUB
            </a>
          </h1>
        </div>
        <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15">
                Sign in to your account
              </span>
              <form id="stripe-login" method="POST">
                <div className="field padding-bottom--24">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="adminid" 
                            onChange={(e) => update1(e)}

                  />
                          <span id="emailerr" className="err"  style={{color: "red"}} ></span>
                  
                </div>
                <div className="field padding-bottom--24">
                  <div className="grid--50-50">
                    <label htmlFor="password">Password</label>
                    {/* <div className="reset-pass">
                      <a href="#">Forgot your password?</a>
                    </div> */}
                  </div>
                  <input type="password" name="adminpwd" 
                            onChange={(e) => update1(e)}

                  />
                          <span id="pwderr" className="err"  style={{color: "red"}}></span>

                </div>
               
                <div className="field padding-bottom--24">
                <center>
                  <button type="button"  className='btn btn-primary'
                   onClick={() => {
                              loginapi();
                            }}
                > LOGIN
               </button>
               </center>
                </div>
                {/* <div className="field">
                  <a className="ssolink" href="#">
                    Use single sign-on (Google) instead
                  </a>
                </div> */}
              </form>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</>

   </>

  )
}

export default Login