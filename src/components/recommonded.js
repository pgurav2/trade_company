import React, { useState } from "react";
import Form from "./form";
import "../css/recommonded.css";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import gallary from "../assets/photo-content.png";
import Cards from "./cards";
import Arrow from "./arrow";

export default function Recommonded() {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [activeimg, setactiveimg] = useState("img_id_1");
  const [invalidEmail, setinvalidEmail] = useState(false);
  const [isEmpty, setisEmpty] = useState(false);
  let recards = [
    {
      image: card1,
      title: "Innovations in Action",
      paragraph:
        "We stay at the forefront of the latest innovations and implement them for your success.",
      delay: 100,
    },
    {
      image: card2,
      title: "Annual Yield of 30%",
      paragraph:
        "Our investment strategies deliver an impressive 30% annual yield.",
      delay: 200,
    },
    {
      image: card3,
      title: "Expert Analysis",
      paragraph:
        "Our large team of analysts, including the use of artificial intelligence, ensures reliable market insights for you.",
      delay: 300,
    },
  ];

  // function handleGallery(id) {
  //   const img_class = document.querySelectorAll(".img_gallery");
  //   img_class.forEach((item) => item.classList.remove("gallery_hover"));

  //   document.getElementById(id).classList.add("gallery_hover");
  //   console.log(document.querySelector(".img_gallery"));
  // }

  function onSubmit() {
    console.log("hello");

    let emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name === "" || phone === "" || email === "") {
      setisEmpty(true);
    } else if (!email.match(emailRegex)) {
      setinvalidEmail(true);
    } else {
      console.log("Successfull");
    }
    setTimeout(() => {
      setinvalidEmail(false);
      setisEmpty(false);
    }, 2000);
  }

  function leaveGallery() {
    const img_class = document.querySelectorAll(".img_gallery");
    img_class.forEach((item) => item.classList.remove("gallery_hover"));

    // document.getElementById("img_id_1").classList.add("gallery_hover");
    setactiveimg("img_id_1");
  }
  return (
    <div className="recommonded-wrapper">
      <div className="form_container">
        <Form
          name={name}
          phone={phone}
          email={email}
          nameonchange={(e) => setname(e.target.value)}
          phonchange={(e) => {
            if (!isNaN(e.target.value)) {
              setphone(e.target.value);
            }
          }}
          emailchange={(e) => setemail(e.target.value)}
          onclickbtn={() => onSubmit()}
          isInvalidEmail={invalidEmail}
          isEmpty={isEmpty}
        />
      </div>

      <div className="recommonded-us">
        <div className="recommonded_content">
          <div className="reccomonded_text">
            <h2 data-aos="fade-right">Why others </h2>
            <h2 data-aos="fade-right">
              <span className="color-span">
                recommend
                <br /> us
                <div className="recommend_arrow">
                  <Arrow />
                </div>
              </span>
            </h2>
          </div>
          <div className="reccomonded_img">
            <div className="world_leader">
              <p
                className="world_leader_lable"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                WORLDLEADER
              </p>
            </div>
            <div
              className="gallary"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                src={gallary}
                className={
                  activeimg === "img_id_1" ? "gallery_hover" : "img_gallery "
                }
                id="img_id_1"
                // onMouseOver={() => handleGallery("img_id_1")}
                onMouseOver={() => setactiveimg("img_id_1")}
                onMouseLeave={() => leaveGallery()}
              />
              <img
                src={gallary}
                className={
                  activeimg === "img_id_2" ? "gallery_hover" : "img_gallery "
                }
                id="img_id_2"
                onMouseOver={() => setactiveimg("img_id_2")}
                // onMouseOver={() => handleGallery("img_id_2")}
                onMouseLeave={() => leaveGallery()}
              />
              <img
                src={gallary}
                className={
                  activeimg === "img_id_3" ? "gallery_hover" : "img_gallery "
                }
                id="img_id_3"
                onMouseOver={() => setactiveimg("img_id_3")}
                // onMouseOver={() => handleGallery("img_id_3")}
                onMouseLeave={() => leaveGallery()}
              />
            </div>
          </div>
        </div>

        <div className="cards_container">
          {recards?.map((item) => (
            <Cards
              img={item.image}
              title={item.title}
              para={item.paragraph}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
