import React from "react";
import "../Style/Contact.css";
import { Link } from "react-router-dom";
import img from "../assets/icons-phone.svg";
import img1 from "../assets/icons-mail.svg";
function Contact() {
  return (
    <>
      <div className="marginLeft135px">
        <div className="link">
          <Link to={"/"} style={{ opacity: "50%", color: "black" }}>
            Home
          </Link>
          /
          <Link to={"/about"} style={{ color: "black" }}>
            Contact
          </Link>
        </div>
        <div className="section1">
          <div className="left-section1">
            <span>
              <h1>
                <img src={img} alt="" />
                Call To Us
              </h1>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </span>
            <span>
              <h1>
                <img src={img1} alt="" />
                Write To US
              </h1>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </span>
          </div>
          <div className="right-section1">
            <span>
              <input type="text" placeholder="Your Name *" />
              <input type="email" placeholder="Your Email *" />
              <input type="text" placeholder="Your Phone *" />
            </span>
            <textarea cols="30" rows="15" placeholder="Your Massage"></textarea>
            <span className="span">
              <button>Send Massage</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
