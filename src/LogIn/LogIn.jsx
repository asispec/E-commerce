import React from "react";
import img from "../assets/Side Image.svg";
import "../Style/SignUp.css";
function LogIn() {
  return (
    <>
      <section>
        <img src={img} alt="" />
        <div className="section-right" style={{padding: '40px 0px'}}>
          <span className="tag">
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>
          </span>
          <span className="inputs">
            <input type="email" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
          </span>
          <span
            className="btns"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <button style={{ width: "150px", height: "55px" }}>Log In</button>
            <button
              style={{ background: "none", border: "none", color: "#DB4444" }}
            >
              Forget Password?
            </button>
          </span>
        </div>
      </section>
    </>
  );
}

export default LogIn;
