import React from "react";
import "../Style/SignUp.css";
import img from "../assets/Side Image.svg";
import img1 from "../assets/Icon-Google.svg";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <>
      <section>
        <img src={img} alt="" />
        <div className="section-right">
          <span className="tag">
            <h1>Create an account</h1>
            <p>Enter your details below</p>
          </span>
          <span className="inputs">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
          </span>
          <span className="btns">
            <button>Create Account</button>
            <button>
              <img src={img1} alt="" />
              Sign up with Google
            </button>
          </span>
          <span className="tolog">
            <p>Already have account?</p>
            <Link className="btn" to="/login">Log in</Link>
          </span>
        </div>
      </section>
    </>
  );
}

export default SignUp;
