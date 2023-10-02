import React from "react";


const Footer = () => {
  return (
    <div className="footer">
      <div className="row mb-30px">
        <h2 className="text-center">Vision of thebandwala</h2>
        <h3 className="text-center">Our vision is to provide good quality service to our customers, with value for money.</h3><br/><br/>
        
          <h5>Thebandwala provides wedding BANDS, wedding DHOLI,wedding GHODI and DJ to memory events and functions.Every moment of life is important and makes them memorable. We provide the best quality service to our valuable customers. </h5>
      </div>
      <div className="row">
        <h2 className="text-center p-5">Meet Our Team</h2><br />

        <div className="col-md-4 ">
          <img src="../images/tarun.jpg" className=" item img d-block w-100" alt="Top-Rated band,dhol,ghodi,dj,baggi" />
          <h3 className="text-center">Tarun Chouhan</h3>
          <h5 className="text-center">Head of Thebandwala</h5>
        </div>
        <div className="col-md-4"><img src="../images/Arun.jpg" className=" item img d-block w-100" alt="" />
          <h3 className="text-center">Arun Chouhan</h3>
          <h5 className="text-center">Project Manganer</h5></div>
        <div className="col-md-4"><img src="../images/sandip.jpg" className=" item img d-block w-100" alt="Top-Rated band,dhol,ghodi,dj,baggi" />
          <h3 className="text-center">Sandip Verma</h3>
          <h5 className="text-center">Customers Relation Manager</h5></div>


      </div>


    </div>
  );
};

export default Footer;

