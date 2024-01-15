import React from "react";
import arrow from "../assets/icon-arrow.png";
import "../css/button.css";

export default function Button({ name, onclick, width }) {
  return (
    <div className="btn" onClick={onclick} style={{ width: width }}>
      <div className="btn_span">
        <p className="btn_name">{name}</p>
        <img src={arrow} />
      </div>
    </div>
  );
}
