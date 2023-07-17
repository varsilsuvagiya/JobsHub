import React from 'react'
import { Link } from 'react-router-dom'
import Load from '../Load'
import Typewriter from "typewriter-effect";

function Manageresume() {
  return (
    <>
    <Load/>
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
                .typeString("Manage Resume")
                .pauseFor(2000)
                .start()
              }}

              />
          </h2>
          <p>
            <Link to="/seekerhome" title="Home">
              Home
            </Link>{" "}
            <i className="ti-angle-double-right" /> Manage Resume
          </p>
        </div>
      </div>
    </div>
    {/* ======================= End Page Title ===================== */}
    {/* ======================= Manage Resume ======================== */}
    <section className="utf_create_company_area padd-top-80 padd-bot-80">
      <div className="container">
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
              <tr>
                <td>
                  <a href="job-detail.html">
                    {" "}
                    <img
                      src="assets/img/client-1.jpg"
                      className="avatar avatar-lg"
                      alt="Avatar"
                    />
                    Daniel Duke <span className="mng-jb">Web Designer</span>{" "}
                  </a>
                </td>
                <td>
                  <i className="ti-location-pin" /> 2708 Scenic Way, Sutter
                </td>
                <td>mail@example.com</td>
                <td>
                  <i className="ti-credit-card" /> 01 Jan 2021
                </td>
                <td>
                  <a
                    href="#"
                    className="cl-success mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Edit"
                  >
                    <i className="fa fa-edit" />
                  </a>{" "}
                  <a
                    href="#"
                    className="cl-danger mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Delete"
                  >
                    <i className="fa fa-trash-o" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="job-detail.html">
                    {" "}
                    <img
                      src="assets/img/client-2.jpg"
                      className="avatar avatar-lg"
                      alt="Avatar"
                    />
                    Ashley D. Taylor{" "}
                    <span className="mng-jb">Apple Developer</span>{" "}
                  </a>
                </td>
                <td>
                  <i className="ti-location-pin" /> 2708 Scenic Way, Sutter
                </td>
                <td>mail@example.com</td>
                <td>
                  <i className="ti-credit-card" /> 01 Jan 2021
                </td>
                <td>
                  <a
                    href="#"
                    className="cl-success mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Edit"
                  >
                    <i className="fa fa-edit" />
                  </a>{" "}
                  <a
                    href="#"
                    className="cl-danger mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Delete"
                  >
                    <i className="fa fa-trash-o" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="job-detail.html">
                    {" "}
                    <img
                      src="assets/img/client-3.jpg"
                      className="avatar avatar-lg"
                      alt="Avatar"
                    />
                    Michael P. Fowler{" "}
                    <span className="mng-jb">CMS Developer</span>{" "}
                  </a>
                </td>
                <td>
                  <i className="ti-location-pin" /> 2708 Scenic Way, Sutter
                </td>
                <td>mail@example.com</td>
                <td>
                  <i className="ti-credit-card" /> 01 Jan 2021
                </td>
                <td>
                  <a
                    href="#"
                    className="cl-success mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Edit"
                  >
                    <i className="fa fa-edit" />
                  </a>{" "}
                  <a
                    href="#"
                    className="cl-danger mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Delete"
                  >
                    <i className="fa fa-trash-o" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="job-detail.html">
                    {" "}
                    <img
                      src="assets/img/client-4.jpg"
                      className="avatar avatar-lg"
                      alt="Avatar"
                    />
                    Mary R. Edward <span className="mng-jb">PHP Developer</span>{" "}
                  </a>
                </td>
                <td>
                  <i className="ti-location-pin" /> 2708 Scenic Way, Sutter
                </td>
                <td>mail@example.com</td>
                <td>
                  <i className="ti-credit-card" /> 01 Jan 2021
                </td>
                <td>
                  <a
                    href="#"
                    className="cl-success mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Edit"
                  >
                    <i className="fa fa-edit" />
                  </a>{" "}
                  <a
                    href="#"
                    className="cl-danger mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Delete"
                  >
                    <i className="fa fa-trash-o" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="job-detail.html">
                    {" "}
                    <img
                      src="assets/img/client-1.jpg"
                      className="avatar avatar-lg"
                      alt="Avatar"
                    />
                    Sharon C. Mason{" "}
                    <span className="mng-jb">Graphic Designer</span>{" "}
                  </a>
                </td>
                <td>
                  <i className="ti-location-pin" /> 2708 Scenic Way, Sutter
                </td>
                <td>mail@example.com</td>
                <td>
                  <i className="ti-credit-card" /> 01 Jan 2021
                </td>
                <td>
                  <a
                    href="#"
                    className="cl-success mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Edit"
                  >
                    <i className="fa fa-edit" />
                  </a>{" "}
                  <a
                    href="#"
                    className="cl-danger mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Delete"
                  >
                    <i className="fa fa-trash-o" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="job-detail.html">
                    {" "}
                    <img
                      src="assets/img/client-2.jpg"
                      className="avatar avatar-lg"
                      alt="Avatar"
                    />
                    Daniel Duke <span className="mng-jb">IOS Developer</span>{" "}
                  </a>
                </td>
                <td>
                  <i className="ti-location-pin" /> 2708 Scenic Way, Sutter
                </td>
                <td>mail@example.com</td>
                <td>
                  <i className="ti-credit-card" /> 01 Jan 2021
                </td>
                <td>
                  <a
                    href="#"
                    className="cl-success mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Edit"
                  >
                    <i className="fa fa-edit" />
                  </a>{" "}
                  <a
                    href="#"
                    className="cl-danger mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Delete"
                  >
                    <i className="fa fa-trash-o" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="job-detail.html">
                    {" "}
                    <img
                      src="assets/img/client-3.jpg"
                      className="avatar avatar-lg"
                      alt="Avatar"
                    />
                    Software Development <span className="mng-jb">Apple Inc</span>{" "}
                  </a>
                </td>
                <td>
                  <i className="ti-location-pin" /> 2708 Scenic Way, Sutter
                </td>
                <td>mail@example.com</td>
                <td>
                  <i className="ti-credit-card" /> 01 Jan 2021
                </td>
                <td>
                  <a
                    href="#"
                    className="cl-success mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Edit"
                  >
                    <i className="fa fa-edit" />
                  </a>{" "}
                  <a
                    href="#"
                    className="cl-danger mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Delete"
                  >
                    <i className="fa fa-trash-o" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="job-detail.html">
                    {" "}
                    <img
                      src="assets/img/client-4.jpg"
                      className="avatar avatar-lg"
                      alt="Avatar"
                    />
                    Richard S. Marte <span className="mng-jb">Web Designer</span>{" "}
                  </a>
                </td>
                <td>
                  <i className="ti-location-pin" /> 2708 Scenic Way, Sutter
                </td>
                <td>mail@example.com</td>
                <td>
                  <i className="ti-credit-card" /> 01 Jan 2021
                </td>
                <td>
                  <a
                    href="#"
                    className="cl-success mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Edit"
                  >
                    <i className="fa fa-edit" />
                  </a>{" "}
                  <a
                    href="#"
                    className="cl-danger mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Delete"
                  >
                    <i className="fa fa-trash-o" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="job-detail.html">
                    {" "}
                    <img
                      src="assets/img/client-1.jpg"
                      className="avatar avatar-lg"
                      alt="Avatar"
                    />
                    Nancy T. Clayton <span className="mng-jb">Apple Inc</span>{" "}
                  </a>
                </td>
                <td>
                  <i className="ti-location-pin" /> 2708 Scenic Way, Sutter
                </td>
                <td>mail@example.com</td>
                <td>
                  <i className="ti-credit-card" /> 01 Jan 2021
                </td>
                <td>
                  <a
                    href="#"
                    className="cl-success mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Edit"
                  >
                    <i className="fa fa-edit" />
                  </a>{" "}
                  <a
                    href="#"
                    className="cl-danger mrg-5"
                    data-toggle="tooltip"
                    data-original-title="Delete"
                  >
                    <i className="fa fa-trash-o" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="utf_flexbox_area padd-10">
            <ul className="pagination">
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
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* ====================== End Manage Resume ================ */}
  </>
  
  )
}

export default Manageresume