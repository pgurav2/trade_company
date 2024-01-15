import React from "react";
import social from "../assets/linkdin.png";
import "../css/heroSection.css";

export default function Herobanner() {
  return (
    <div className="hero_main_wrapper">
      <div className="hero_wrapper" data-aos="zoom-in" data-aos-duration="1000">
        <div className="social_wrapper"  >
          <a className="telegram">TL</a>
          <div className="social_content">
            <div className="social-items">
              <a>Telegram</a>
              <img src={social} />
            </div>
          </div>
        </div>
        <div className="social_wrapper"  >
          <a className="telegram">IN</a>
          <div className="social_content">
            <div className="social-items">
              <a>Instagram</a>
              <img src={social} />
            </div>
          </div>
        </div>
        <div className="social_wrapper"  >
          <a className="telegram">TW</a>
          <div className="social_content">
            <div className="social-items">
              <a>Twitter</a>
              <img src={social} />
            </div>
          </div>
        </div>
        <div className="social_wrapper" >
          <a className="telegram">FB</a>
          <div className="social_content">
            <div className="social-items">
              <a>Facebook</a>
              <img src={social} />
            </div>
          </div>
        </div>
      </div>
      <div className="hero_content">
        <h1 className="hero_h1" data-aos="fade-up">
          Your <span>Global</span> <br></br> <span>Success</span> Partner
        </h1>
        <p data-aos="fade-up" data-aos-delay="100" >
          Comander becomes your passport to a world filled with opportunities.
          Join us on this innovation journey.
        </p>
      </div>
    </div>
  );
}
