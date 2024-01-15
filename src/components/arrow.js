import React from "react";
import arrow from "../assets/Group 1 (1).png";
import "../css/arrow.css";

export default function Arrow() {
  return (
    <div className="arrow-part">
      <div>
        <img src={arrow} className="arrow_img" />
      </div>
    </div>
  );
}
