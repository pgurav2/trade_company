import React, { useState } from "react";
import "../css/value.css";
import orbit from "../assets/Orbitc.png";
import network from "../assets/Network.png";
import penta from "../assets/Penta.png";
import vision from "../assets/Inspire.png";
import inspire from "../assets/Inspire.png";
import Arrow from "./arrow";

export default function Value() {
  const [activeValue, setactiveValue] = useState("value_1");
  return (
    <div className="our_value_container" data-aos="fade-up" data-aos-delay="200" data-aos-offset="300">
      <div className="our_value_wrapper">
        <div
          id="value_1"
          className={
            activeValue === "value_1"
              ? "our_value_items_hover"
              : "our_value_items "
          }
          onClick={() => setactiveValue("value_1")}
        >
          <p className="valued_lable">
            Our Valued <span className="color_span">Partners</span>
          </p>
          {/* <Arrow /> */}
          <div></div>
        </div>

        <div
          id="value_2"
          className={
            activeValue === "value_2"
              ? "our_value_items_hover"
              : "our_value_items "
          }
          onClick={() => setactiveValue("value_2")}
        >
          <p className="valued_lable">Our Valued Partners</p>
        </div>

        <div
          id="value_3"
          className={
            activeValue === "value_3"
              ? "our_value_items_hover"
              : "our_value_items "
          }
          onClick={() => setactiveValue("value_3")}
        >
          <p className="valued_lable">Our Valued Partners</p>
        </div>
      </div>

      <div className="motion_bar_wrapper">
        <div className="motion_bar">
          <img src={orbit} />
          <img src={network} />
          <img src={penta} />
          <img src={vision} />
          <img src={inspire} />
          <img src={orbit} />
          <img src={network} />
          <img src={penta} />
          <img src={vision} />
          <img src={inspire} />
          <img src={orbit} />
          <img src={network} />
          <img src={penta} />
          <img src={vision} />
          <img src={inspire} />
          <img src={orbit} />
          <img src={network} />
          <img src={penta} />
          <img src={vision} />
          <img src={inspire} />
         
    
     
       
        
          
        </div>
      </div>
    </div>
  );
}
