import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer ">
      <h3 className="text-center">Our main vision is to provide good quality service to the customres and reduce barrier of service provider and customers.</h3>
      <p className="text-center mt-3">
        <h4>We are going to integrate all service related to wedding and all function for easy acces to all as per their requirement, for that we have misiion to take all service provider on single platform, so that they can get theire bussinesss to explore with us</h4>
      
        <Link to="/policy" style={{ color: 'blue', padding: 20 }}  > <h3>Privacy Policy</h3></Link>
      </p>
    </div>
  );
};

export default Footer;
