import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Addjob from "./recruiterComponent/Addjob";
import Searchjob from "./seekerComponent/Searchjob";
import Managejob from "./recruiterComponent/Managejob";
import Manageresume from "./seekerComponent/Manageresume";
import SeekerLogin from "./seekerComponent/SeekerLogin";
import Error404 from "./Error404";
import Browsecategory from "./seekerComponent/Browsecategory";
import Seekerfooter from "./seekerComponent/Seekerfooter";
import Resumedetail from "./seekerComponent/Resumedetail";
import RecruiterSignup from "./recruiterComponent/RecruiterSignup";
import SeekerSignup from "./seekerComponent/SeekerSignup";
import RecruiterLogin from "./recruiterComponent/RecruiterLogin";
import Aboutus from "./Aboutus";
import Forgot from "./Forgot";
import Recruiterhome from "./recruiterComponent/Recruiterhome";
import Updatejob from "./recruiterComponent/Updatejob";
import Seekerhome from "./seekerComponent/Seekerhome";
import Recruiterprofile from "./recruiterComponent/Recruiterprofile";
import Seekerprofile from "./seekerComponent/Seekerprofile";
import Jobdetail from "./seekerComponent/Jobdetail";
import Recruiterfooter from "./recruiterComponent/Recruiterfooter";
import Changepwd from "./seekerComponent/Changepwd";
import Changerpwd from "./recruiterComponent/Changerpwd";
import Editprofiler from "./recruiterComponent/Editprofiler";
import Editprofiles from "./seekerComponent/Editprofiles";
import Contactuss from "./seekerComponent/Contactuss";
import Contactusr from "./recruiterComponent/Contactusr";
import Try from "./Try";
import Payment from "./recruiterComponent/Payment"
import Notification from "./recruiterComponent/Notification";
import Forgotpassword from "./seekerComponent/Forgotpassword";
import Forgotpasswordr from "./recruiterComponent/Forgotpasswordr";


// import Privateroutes from "./Privateroutes";

function Route1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/try" element={<Try/>} />
        <Route path="/forgotpassword" element={<Forgotpassword/>} />
     
        <Route path="/forgotpasswordr" element={<Forgotpasswordr/>} />
       

        <Route path="/payment" element={<Payment/>} />
        <Route path="/recruitersignup" element={<RecruiterSignup />} />
        <Route path="/seekersignup" element={<SeekerSignup />} />
        <Route path="/addjob" element={<Addjob />} />
        <Route path="/searchjob" element={<Searchjob />} />
        <Route path="/editprofiler" element={<Editprofiler />} />
        <Route path="/managejob" element={<Managejob />} />
        <Route path="/manageresume" element={<Manageresume />} />
        <Route path="/recruiterlogin" element={<RecruiterLogin />} />
        <Route path="/seekerlogin" element={<SeekerLogin />} />
        <Route path="/error" element={<Error404 />} />
        <Route path="/contactuss" element={<Contactuss />} />
        <Route path="/contactusr" element={<Contactusr />} />
        <Route path="/browsecategory" element={<Browsecategory />} />
        <Route path="/resumedetail" element={<Resumedetail />} />
        <Route path="/editprofiles" element={<Editprofiles />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/recruiterhome" element={<Recruiterhome />} />
        <Route path="/seekerhome" element={<Seekerhome />} />
        <Route path="/recruiterprofile" element={<Recruiterprofile />} />
        <Route path="/seekerprofile" element={<Seekerprofile />} />
        <Route path="/jobdetail" element={<Jobdetail />} />
        <Route path="/seekerfooter" element={<Seekerfooter />} />
        <Route path="/recruiterfooter" element={<Recruiterfooter />} />
        <Route path="/changepwd" element={<Changepwd />} />
        <Route path="/changerpwd" element={<Changerpwd />} />
        <Route path="/updatejob" element={<Updatejob />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notification" element={<Notification />} />

     

      </Routes>
    </BrowserRouter>
  );
}

export default Route1;
