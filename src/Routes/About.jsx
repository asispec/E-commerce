import React from "react";
import "../Style/About.css";
import { Link } from "react-router-dom";
import img from "../assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.svg";
import img1 from "../assets/Services (2).svg";
import img2 from "../assets/Services (3).svg";
import img3 from "../assets/Services (4).svg";
import img4 from "../assets/Frame 874.svg";
import img5 from "../assets/Icon-Twitter (1).svg";
import img6 from "../assets/icon-instagram (1).svg";
import img7 from "../assets/Icon-Linkedin (1).svg";
import img8 from "../assets/Frame 875.svg";
import img9 from "../assets/Frame 876.svg";
import img10 from "../assets/Services.svg";
import img11 from "../assets/Services (5).svg";
import img12 from "../assets/Services (1).svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function About() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div className="paddingLeft135px">
        <div className="link">
          <Link to={"/"} style={{ opacity: "50%", color: "black" }}>
            Home
          </Link>
          /
          <Link to={"/about"} style={{ color: "black" }}>
            About
          </Link>
        </div>
        <div className="sectiona1">
          <div className="sa1-div">
            <h1>Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia's premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <img src={img} alt="" />
        </div>
        <div className="sectiona2" style={{ marginTop: "100px" }}>
          <div>
            <span>
              <img src={img1} alt="" />
              <h1>10.5k</h1>
              <p>Sellers active our site</p>
            </span>
            <span>
              <img src={img1} alt="" />
              <h1>33k</h1>
              <p>Monthly Product Sale</p>
            </span>
            <span>
              <img src={img2} alt="" />
              <h1>45.5k</h1>
              <p>Customer active in our site</p>
            </span>
            <span>
              <img src={img3} alt="" />
              <h1>25k</h1>
              <p>Annual gross sale in our site</p>
            </span>
          </div>
        </div>

        <div className="sectiona3">
          <Slider
            {...settings}
            className="sa3-cards"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "100px",
            }}
          >
            <div className="sa3-card">
              <img src={img4} alt="" />
              <span className="sa3-card-sp1">
                <span className="sa3-card-sp2">
                  <h1>Tom Cruise</h1>
                  <p>Founder & Chairman</p>
                </span>
                <span className="sa3-card-sp3">
                  <img src={img5} alt="" />
                  <img src={img6} alt="" />
                  <img src={img7} alt="" />
                </span>
              </span>
            </div>
            <div className="sa3-card">
              <img src={img8} alt="" />
              <span className="sa3-card-sp1">
                <span className="sa3-card-sp2">
                  <h1>Emma Watson</h1>
                  <p>Managing Director</p>
                </span>
                <span className="sa3-card-sp3">
                  <img src={img5} alt="" />
                  <img src={img6} alt="" />
                  <img src={img7} alt="" />
                </span>
              </span>
            </div>
            <div className="sa3-card">
              <img src={img9} alt="" />
              <span className="sa3-card-sp1">
                <span className="sa3-card-sp2">
                  <h1>Will Smith</h1>
                  <p>Product Designer</p>
                </span>
                <span className="sa3-card-sp3">
                  <img src={img5} alt="" />
                  <img src={img6} alt="" />
                  <img src={img7} alt="" />
                </span>
              </span>
            </div>
          </Slider>
        </div>
        <div className="section8" style={{marginTop: '200px'}}>
          <div className="s8-div1" style={{ marginBottom: "62px" }}>
            <span>
              <img src={img10} alt="" />
              <h1>FREE AND FAST DELIVERY</h1>
              <p>Free delivery for all orders over $140</p>
            </span>
            <span>
              <img src={img12} alt="" />
              <h1>24/7 CUSTOMER SERVICE</h1>
              <p>Friendly 24/7 customer support</p>
            </span>
            <span>
              <img src={img11} alt="" />
              <h1>MONEY BACK GUARANTEE</h1>
              <p>We return money within 30 days</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
