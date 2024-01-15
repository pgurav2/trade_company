import React from "react";
import "../css/our_client.css";
import logo from "../assets/logos.png";
import logo1 from "../assets/logos (1).png";
import logo2 from "../assets/logos (2).png";
import logo3 from "../assets/logos (3).png";

export default function OurClient() {
  return (
    <div className="our_client_container">
      <div className="our_client_wrapper">
        <h3 className="our_client_h3" data-aos="fade" data-aos-delay="100" data-aos-duration="1000">
          Our clients are <br />{" "}
          <span className="our_client_span">successful people</span> <br /> who{" "}
          <span className="our_client_span">entrusted</span> us with <br />
          their investments
          <br /> and received{" "}
          <span className="our_client_span">
            excellent <br />
            results
          </span>
        </h3>
        <div className="logo_1" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
          <img src={logo3} className="logo_img" />
        </div>

        <div className="logo_2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
          <img src={logo1} className="logo_img" />
        </div>

        <div className="logo_3" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
          <img src={logo2} className="logo_img" />
        </div>

        <div className="logo_4" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
          <img src={logo3}  className="logo_img"/>
        </div>

        <div className="logo_5" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000">
          <img src={logo}  className="logo_img"/>
        </div>
      </div>
    </div>
  );
}
