import React,{useEffect, useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Load from "../Load";
import RecHeader from "./RecHeader";
import Recruiterfooter from "./Recruiterfooter";
import useRazorpay from "react-razorpay";
import Typewriter from "typewriter-effect";
import  Loader  from "../Loader";
import { payment } from '../api/common_api';

function Payment() {
  const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setData("Some data");
        setIsLoading(false);
      }, 1000);
    }, []);
  const Razorpay = useRazorpay();

  // const cart_list = JSON.parse(localStorage.getItem('cart_list'));
  const userData = JSON.parse(localStorage.getItem("userdata")); 

  // const [cartData, setcartData] = useState(cart_list)



  const submitFunction = () => {
      //  form Validation

      const options = {
          key: "rzp_test_R1c6XSSbNukNsh", // Enter the Key ID generated from the Dashboard

          amount: (5000 * 100).toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "JOB'S HUB",
          description: "Test Transaction",
          image: "../assets/img/blwhole.png",
          order_id: "", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
          handler: async function (response) {
            
            



            

                              let obj={
                  paymentdata:{transactionid: response.razorpay_payment_id,amount:5000},
                  companyid:userData.companyid
                  }
                  const res = await payment(obj);
                  navigate("/recruiterhome");
                 console.log(res, 'response');


          },
          prefill: {
              name:
                  userData.cname,
              email: userData.email,
              contact: userData.mno,
          },
          // notes: {
          //   address: "Razorpay Corporate Office",
          // },
          theme: {
              color: "#009ee5",
          },
      };
      const rzp1 = new Razorpay(options);
      rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          // alert(response.error.metadata.order_id);
          // alert(response.error.metadata.payment_id);
      });

      rzp1.open();
  }
  return (
    <>
       {isLoading ? <Loader/> : <div>

    <Load/>
    
        {/* ======================= Page Title ===================== */}
        <div className="page-title">
          <div className="container">
            <div className="page-caption">
              <h2> <Typewriter
               options={{
               autoStart: true,
               loop: true,
              }}
              onInit={(typewriter)=>{
                typewriter
                .typeString("Subscription")
                .pauseFor(2000)
                .start()
              }}

              /></h2>
              <p>
                <Link to="/recruiterhome" title="Home">
                  Home
                </Link>{" "}
                <i className="ti-angle-double-right" /> Subscription
              </p>
            </div>
          </div>
        </div>
        {/* ======================= End Page Title ===================== */}
        <div className="price-table-wrapper">
                    
                    <div className="pricing-table featured-table col-md-3">
                        <h2 className="pricing-table__header">- PAY HERE -</h2>
                        <h3 className="pricing-table__price">5000 INR</h3>
                        <center>
                        <button
                            className="pricing-table__button"
                            onClick={()=>submitFunction ()}
                        >
                            Buy Now
                        </button>
                       
                        </center>
                       <br/>
                    </div>
                   
                </div>
        <Recruiterfooter/>
      </div>}
  
    </>
  );
}

export default Payment;
