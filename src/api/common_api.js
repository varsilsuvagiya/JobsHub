import { ApiHelperGet, ApiHelperPost, ApiHelperFile } from ".";
import { ApiRoutes } from "../constants";
const getworkingtime = async (data) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETWORKINGTIME);
    return res;
  } catch (error) {
    throw error;
    
  }
};
const getcategory = async (data) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETCATEGORY);
    return res;
  } catch (error) {
    throw error;
  }
};
const getsalary = async (data) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETSALARY);
    return res;
  } catch (error) {
    throw error;
  }
};
const getjobtype = async (data) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETJOBTYPE);
    return res;
  } catch (error) {
    throw error;
  }
};
const getexperience = async (data) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETEXPERIENCE);
    return res;
  } catch (error) {
    throw error;
  }
};
const getinterview = async (data) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETINTERVIEW);
    return res;
  } catch (error) {
    throw error;
  }
};
const getgender = async (data) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETGENDER);
    return res;
  } catch (error) {
    throw error;
  }
};
const getjob = async (page,perPage,data) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETJOB +`/${page}/${perPage}`);
    return res;
  } catch (error) {
    throw error;
  }
};
const getjobb = async (data) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETJOBB );
    return res;
  } catch (error) {
    throw error;
  }
};
const getjobm = async (companyid) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETJOBM  + "/"+ companyid);
    return res;
  } catch (error) {
    throw error;
  }
};
const getjobd = async (companyid) => {
  try {
    console.log(companyid,'companyid');
    const res = await ApiHelperGet(ApiRoutes.GETJOBD + '/'+ companyid);
    return res;
  } catch (error) {
    throw error;
  }
};
const insertjob = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.INSERTJOB, data);
    return res;
  } catch (error) {
    throw error;
  }
};
const applyjob = async (formdata) => {
  try {
    const res = await ApiHelperFile(ApiRoutes.APPLYJOB, formdata);
    return res;
  } catch (error) {
    throw error;
  }
};
const review = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.REVIEW, data);
    return res;
  } catch (error) {
    throw error;
  }
};
const reviewr = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.REVIEWR, data);
    return res;
  } catch (error) {
    throw error;
  }
};
const insert = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.INSERT, data);
    return res;
  } catch (error) {
    throw error;
  }
};
const insertrec = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.INSERTREC, data);
    return res;
  } catch (error) {
    throw error;
  }
};
const login = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.LOGIN, data);
    return res;
  } catch (error) {
    throw error;
  }
};
const loginrec = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.LOGINREC, data);
    return res;
  } catch (error) {
    throw error;
  }
};
const updatejob = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.UPDATEJOB, data);
    return res;
  } catch (error) {
    throw error;
  }
};
const updatecategory = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.UPDATECATEGORY, data);
    return res;
  } catch (error) {
    throw error;
  }
};
const deletecategory = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.DELETECATEGORY,data);
    return res;
  } catch (error) {
    throw error;
  }
};
const getaddjob = async (data) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETADDJOB);
    return res;
  } catch (error) {
    throw error;
  }
};
const deletejob = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.DELETEJOB,data);
    return res;
  } catch (error) {
    throw error;
  }
};
const contactus = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.CONTACTUS, data);
    return res;
  } catch (error) {
    throw error;
  }
};
const contactusr = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.CONTACTUSR, data);
    return res;
  } catch (error) {
    throw error;
  }
};
const getregistration = async (data) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETREGISTRAION);
    return res;
  } catch (error) {
    throw error;
  }
};
const getpayment = async () => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETPAYMENT);
    return res;
  } catch (error) {
    throw error;
  }
};
const downloadInvoice = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.DOWNLOADINVOICE,data);
    return res;
  } catch (error) {
    throw error;
  }
};
const downloadInvoice1 = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.DOWNLOADINVOICE1,data);
    return res;
  } catch (error) {
    throw error;
  }
};
const updateprofile = async (data) => {
  try {
    const res = await ApiHelperFile(ApiRoutes.UPDATEPROFILE, data);
    return res;
  } catch (error) {
    throw error;
  }
};

const updatecompany = async (data) => {
  try {
    const res = await ApiHelperFile(ApiRoutes.UPDATECOMPANY, data);
    return res;
  } catch (error) {
    throw error;
  }
};
const getrec = async (data) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETREC);
    return res;
  } catch (error) {
    throw error;
  }
};
const getcompany = async (data) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETCOMPANY);
    return res;
  } catch (error) {
    throw error;
  }
};
const getpwd = async (data) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETPWD);
    return res;
  } catch (error) {
    throw error;
  }
};
const changepwd = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.CHANGEPWD, data);
    return res;
  } catch (error) {
    throw error;
  }
};
const changerpwd = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.CHANGERPWD, data);
    return res;
  } catch (error) {
    throw error;
  }
};
const getapply = async (companyid) => {
  try {
    const res = await ApiHelperGet(ApiRoutes.GETAPPLY+ '/'+ companyid);
    return res;
  } catch (error) {
    throw error;
  }
};
const otprequest = async (jsemail)=>{
  try {
      const res = await ApiHelperGet(ApiRoutes.OTPREQUEST + `/${jsemail}`);
      return res;
  } catch (error) {
      throw error
  }
}
const verifyOtp = async (otp,jsemail)=>{
  try {
      const res = await ApiHelperGet(ApiRoutes.VERIFYOTP + `/${otp}/${jsemail}`);
      return res;
  } catch (error) {
      throw error
  }
}

const setNewPassword = async (data)=>{
  try {
      const res = await ApiHelperPost(ApiRoutes.SETNEWPASSWORD ,data);
      return res;
  } catch (error) {
      throw error
  }
}
const otprequestr = async (email)=>{
  try {
      const res = await ApiHelperGet(ApiRoutes.OTPREQUESTR + `/${email}`);
      return res;
  } catch (error) {
      throw error
  }
}
const verifyOtpr = async (otp,email)=>{
  try {
      const res = await ApiHelperGet(ApiRoutes.VERIFYOTPR + `/${otp}/${email}`);
      return res;
  } catch (error) {
      throw error
  }
}

const setNewPasswordr = async (data)=>{
  try {
      const res = await ApiHelperPost(ApiRoutes.SETNEWPASSWORDR ,data);
      return res;
  } catch (error) {
      throw error
  }
}
const payment = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.PAYMENT, data);
    return res;
  } catch (error) {
    throw error;
  }
};
const deletes = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.DELETES,data);
    return res;
  } catch (error) {
    throw error;
  }
};
const deleter = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.DELETER,data);
    return res;
  } catch (error) {
    throw error;
  }
};
export {
  insert,
  insertrec,
  login,
  loginrec,
  getpwd,
  getregistration,
  contactus,
  contactusr,
  updateprofile,
  getexperience,
  getjobtype,
  getsalary,
  getcategory,
  getinterview,
  getgender,
  insertjob,
  getworkingtime,
  updatecompany,
  getcompany,
  getrec,
  getjob,
  getjobb,
  getjobm,
  getjobd,
  changepwd,
  changerpwd,
  updatejob,
  deletejob,
  applyjob,
  getaddjob,
  review,
  reviewr,
  
  updatecategory,
  deletecategory,
  getapply,
  otprequest,
  verifyOtp,
  setNewPassword,
  otprequestr,
  verifyOtpr,
  setNewPasswordr,
  downloadInvoice,
  downloadInvoice1,
  payment,
  getpayment,
  deletes,
  deleter
  

};
