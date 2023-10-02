import { Link } from "react-router-dom";
import React from "react"

function Bottom() {
  return (
    <div className="Bottom">
      <div className="container-fluid">
      <div className="row mt-20px mb-20" >
        <div className="col-md-6 ">
          <h2 className=" p-2  text-center">CONTACT US</h2>
          <p className="text-justify mt-2">


          </p>
          <h4>Contact Supoort timing from 9 A.M to 5 P.M</h4><br />

          <h6>CONTACT NUMBER : <b>6260873059</b></h6>
          <h6>EMAIL TO US : <b>thebandwala@gmail.com</b></h6>
          <h6>HEAD OFFICE: <b>khandwa road bhikangaon 451331 </b></h6>
        </div>
        <div className="col-md-6">
        
        <Link to="/policy" style={{ color: 'black', padding: 20,textAlign:"center" }}  > <h5>Privacy Policy</h5></Link>
        <Link to="/Terms" style={{ color: 'black', padding: 20,textAlign:"center" }}  > <h5>Terms & Condition</h5></Link>
        <a href="https://wa.me/919589484230?text=Hi..." target="_blank" style={{ color: 'black', padding: 20,textAlign:"center" }}><h5>Suggestions & Feedback</h5></a>
        </div>

      </div><br/>
      <div className="row">
        <div className="col-lg-6 col-md-6 mb-20"><h6>All Rights reserved by THEBANDWALA.COM</h6></div>
        <div className="col-lg-6 col-md-6 mb-20"><h6>Design & Developed by DN Technology</h6></div>
      </div>
     <br/>
     </div>
    </div>
  )
}
export default Bottom;
