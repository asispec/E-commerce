import React from "react";
import "./App.css";
import All from "./components/All";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import LogIn from "./LogIn/LogIn";
import SignUp from "./Routes/SignUp";
import img from "./assets/Qrcode 1.svg";
import img1 from "./assets/GooglePlay.svg";
import img2 from "./assets/AppStore.svg";
import img3 from "./assets/Icon-Facebook.svg";
import img4 from "./assets/Icon-Twitter.svg";
import img5 from "./assets/icon-instagram.svg";
import img6 from "./assets/Icon-Linkedin.svg";

function App() {
  return (
    <>
      <div className="div">
        <h4>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h4>
        <button>ShopNow</button>
      </div>
      <All />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn/>} />
      </Routes>
      <footer>
        <span className="sp1">
          <h1>Exclusive</h1>
          <h4>Subscribe</h4>
          <p>Get 10% off your first order</p>
          <input type="email" placeholder="Enter your email" />
        </span>
        <span className="sp2">
          <h1>Support</h1>
          <ul>
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </span>
        <span className="sp2">
          <h1>Account</h1>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </span>
        <span className="sp2">
          <h1>Quick Link</h1>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </span>
        <span className="sp3">
          <h1>Download App</h1>
          <p>Save $3 with App New User Only</p>
          <span className="sd1">
            <img src={img} alt="" />
            <div className="sd2">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
          </span>
          <div className="sd3">
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
        </span>
      </footer>
      <div className="div2">
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </>
  );
}

export default App;
