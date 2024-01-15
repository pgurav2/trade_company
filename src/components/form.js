import React, { useState } from "react";
import Button from "./button";
import "../css/form.css";

export default function Form({
  name,
  phone,
  email,
  nameonchange,
  phonchange,
  emailchange,
  onclickbtn,
  isInvalidEmail,
  isEmpty
}) {
  return (
    <div className="form_wrapper" data-aos="fade-left" data-aos-delay="100">
      <div className="form_content">
        <h3 data-aos="fade-up" data-aos-delay="200">
          REQUEST A CALL
        </h3>
        <p className="form_subtitle" data-aos="fade-up" data-aos-delay="300">
          Fill out the application form and we will call you back
        </p>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={nameonchange}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-offset="50"
        />
        <input
          type="text"
          value={phone}
          placeholder="Phone"
          onChange={phonchange}
          data-aos="fade-up"
          data-aos-delay="450"
          data-aos-offset="50"
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={emailchange}
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-offset="50"
        />
         {isEmpty && <p className="invalid_email">Please enter all the required fields</p>}
        {isInvalidEmail && <p className="invalid_email">Invalid Email</p>}
       
        <div
          className="send_request"
          data-aos="fade-up"
          data-aos-delay="550"
          data-aos-offset="50"
        >
          <Button name={"SEND REQUEST"} onclick={onclickbtn} />
        </div>
      </div>
    </div>
  );
}
