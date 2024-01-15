import React from "react";
import "../css/portfolio.css";
import Button from "./button";
import icon1 from "../assets/icon.png";
import icon2 from "../assets/icon (1).png";
import icon3 from "../assets/icon (2).png";
import icon4 from "../assets/icon (3).png";
import icon5 from "../assets/icon (4).png";

export default function Portfolio() {
  let data = [
    {
      image: icon1,
      title: "Stock Market",
      delay: 100,
    },
    {
      image: icon2,
      title: "Cryptocurrency",
      delay: 200,
    },
    {
      image: icon3,
      title: "Futures Market",
      delay: 300,
    },
    {
      image: icon4,
      title: "Options Market",
      delay: 400,
    },
    {
      image: icon5,
      title: "Bond Market",
      delay: 500,
    },
  ];
  return (
    <div className="portfolio_wrapper">
      <div
        className="portfolio_content_1"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <h2 className="portfolio_h2" data-aos="fade-up" data-aos-delay="200">
          Our Diverse Portfolio of <span>Capital Management Services</span>
        </h2>
        <div className="portfolio_btn" data-aos="fade-up" data-aos-delay="300">
          <Button name={"CONTACT US"} />
        </div>
      </div>

      <div className="portfolio_content_2">
        {data?.map((item) => (
          <div
            className="portfolio_item_2"
            data-aos="zoom-in"
            data-aos-delay={item.delay}
          >
            <div className="card_2">
              <img src={item.image} />
              <p className="portfolio_title">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
