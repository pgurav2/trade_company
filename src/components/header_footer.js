import React from "react";
import header_img from "../assets/Frame 1.png";
import "../css/headerfooter.css";
import Button from "./button";

export default function HeaderFooter() {
  return (
    <div>
      <div className="main_wrapper">
        <div className="hf_logo" data-aos="fade-down" data-aos-delay="100">
          <img src={header_img} className="hf_img" />
        </div>
        <div className="number_info">
          <p data-aos="fade-down" data-aos-delay="200">
            COMANDER
          </p>
          <p data-aos="fade-down" data-aos-delay="300">
            +111 00 123 45 67
          </p>
        </div>
        <div className="commander">
          <p data-aos="fade-down" data-aos-delay="400">
            info@comander.com
          </p>
        </div>
        <div className="contact_us" data-aos="fade-down" data-aos-delay="500">
          <Button name={"CONTACT US"} />
        </div>
      </div>
    </div>
  );
}
