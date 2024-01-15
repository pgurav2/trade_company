import React from "react";
import "../css/card.css";

export default function Cards({ img, title, para, delay }) {
  return (
    <div className="card_wrapper" data-aos="fade-up" data-aos-delay={delay}>
      <div>
        <img src={img} />
        <p className="card_title">{title}</p>
        <p className="para_title">{para}</p>
      </div>
    </div>
  );
}
