import React, { useState } from "react";
import "../css/contact_us.css";
import Form from "./form";
import Arrow from "./arrow";

export default function ContactUs() {
  const [userName, setuserName] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [invalidEmail, setinvalidEmail] = useState(false);
  const [isEmpty, setisEmpty] = useState(false);

  function onSubmit() {
    console.log("hello");

    let emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (userName === "" || userPhone === "" || userEmail === "") {
      setisEmpty(true);
    } else if (!userEmail.match(emailRegex)) {
      setinvalidEmail(true);
    } else {
      console.log("Successfull");
    }
    setTimeout(() => {
      setinvalidEmail(false);
      setisEmpty(false);
    }, 2000);
  }
  return (
    <div className="contact_us_container">
      <div data-aos="fade" data-aos-delay="400" data-aos-duration="2000">
        <h2 className="contact_us_h3">
          Let's start investing
          <br />{" "}
          <span className="contact_arrow">
            <Arrow />
          </span>{" "}
          together! <br />
          <span className="color_span"> Contact us today</span>
        </h2>
      </div>

      <div className="contact_us_main" data-aos="fade-up" data-aos-delay="200">
        <div className="contact_us_wrapper">
          <div
            className="contact_us_part1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="contact_us_part1_h3">COMANDER TRAYDING GROUP</h3>
          </div>
          <div className="contact_us_part2">
            <div className="phone_card">
              <div className="phone_no" data-aos="fade-up" data-aos-delay="400">
                <p>PHONE</p>
                <p>+971 00 123 45 67</p>
              </div>
              <div className="phone_no" data-aos="fade-up" data-aos-delay="500">
                <p>EMAIL</p>
                <p>info@comander.com</p>
              </div>
              <div
                className="social_parts"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="social_icons">
                  <p className="top_icon">TL</p>
                  <p className="bottom_icon">TL</p>
                </div>
                <div className="social_icons">
                  <p className="top_icon">IN</p>
                  <p className="bottom_icon">IN</p>
                </div>
                <div className="social_icons">
                  <p className="top_icon">FB</p>
                  <p className="bottom_icon">FB</p>
                </div>
                <div className="social_icons">
                  <p className="top_icon">LN</p>
                  <p className="bottom_icon">LN</p>
                </div>
                <div className="social_icons">
                  <p className="top_icon">TW</p>
                  <p className="bottom_icon">TW</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_us_form">
          <Form
            name={userName}
            phone={userPhone}
            email={userEmail}
            nameonchange={(e) => setuserName(e.target.value)}
            phonchange={(e) => {
              if (!isNaN(e.target.value)) {
                setuserPhone(e.target.value);
              }
            }}
            isInvalidEmail={invalidEmail}
            isEmpty={isEmpty}
            emailchange={(e) => setuserEmail(e.target.value)}
            onclickbtn={onSubmit}
          />
        </div>
      </div>
    </div>
  );
}
