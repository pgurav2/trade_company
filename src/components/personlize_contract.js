import React from "react";
import personlize from "../assets/Rectangle 40.png";
import "../css/personlize.css";
import Button from "./button";
import Arrow from "./arrow";

export default function Personlize() {
  return (
    <div className="personilse_wrapper">
      <div className="personlise_content_1">
        <div className="personlise_item" data-aos="fade-right">
          <h2 className="personlise_1_h2">A Seamless Collaboration with Us</h2>
          <div className="arrow">
            <Arrow />
          </div>
        </div>

        <div data-aos="fade-right" data-aos-delay="200">
          <img src={personlize} className="personlise_img" />
        </div>
      </div>

      <div className="personlise_content_2">
        <div data-aos="fade-left" data-aos-delay="300">
          <h2 className="personlise_2_h2">Personalized Contracts & Success</h2>
        </div>
        <div >
          <p className="personlise_para" data-aos="fade-left" data-aos-delay="400">
            At our company, we believe in forging strong, in-person agreements
            with our clients. We work closely together to achieve your financial
            goals, ensuring a tailored approach to your investments.
          </p>
          <div data-aos="fade-left" data-aos-delay="500">
            <Button name={"CONTACT US"} />
          </div>
        </div>
      </div>
    </div>
  );
}
