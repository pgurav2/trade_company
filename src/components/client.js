import React from "react";
import "../css/client_says.css";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination]);

export default function Client() {
  let data = [
    {
      para: "Unbelievable returns! I've never seen such consistent 30% annual growth. Thanks to this company, my investments are truly flourishing.",
      name: "Sarah T.",
      designation: "CEO, Network",
      delay: 300,
    },
    {
      para: "Their use of cutting-edge tech and AI is mind-blowing. It feels like I have a team of experts working around the clock to ensure my investments are in safe hands.",
      name: "michael sh.",
      designation: "CEO, Penta",
      delay: 400,
    },
    {
      para: "I used to be skeptical about trading, but this company's expertise and guidance have turned me into a confident investor. A solid 30% annual yield speaks for itself!",
      name: "Alex b.",
      designation: "Director, Vizsion",
      delay: 500,
    },
    {
      para: "Unbelievable returns! I've never seen such consistent 30% annual growth. Thanks to this company, my investments are truly flourishing.",
      name: "Sarah T.",
      designation: "CEO, Network",
      delay: 600,
    },
    {
      para: "Their use of cutting-edge tech and AI is mind-blowing. It feels like I have a team of experts working around the clock to ensure my investments are in safe hands.",
      name: "michael sh.",
      designation: "CEO, Penta",
      delay: 700,
    },
    {
      para: "I used to be skeptical about trading, but this company's expertise and guidance have turned me into a confident investor. A solid 30% annual yield speaks for itself!",
      name: "Alex b.",
      designation: "Director, Vizsion",
      delay: 800,
    },
  ];
  return (
    <div className="client_says_wrapper">
      <div className="client_lable" data-aos="fade-left" data-aos-delay="200">
        <p className="client_para">
          What Our <span className="color_span">Clients</span> Say
        </p>
      </div>
      <div className="client_swiper_wrapper">
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
        >
          {data?.map((item) => (
            <SwiperSlide className="client_swiper">
              <div
                className="swiper_content"
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <p className="client_item_para">"{item.para}"</p>
                <p className="client_item_name">{item.name}</p>
                <p className="client_item_designation">{item.designation}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
