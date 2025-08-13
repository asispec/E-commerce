import React, { useState, useEffect, useRef } from "react";
import "../Style/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img0 from "../assets/Fill Heart.svg";
import img01 from "../assets/Fill Eye.svg";
import img from "../assets/1200px-Apple_gray_logo 1.svg";
import img1 from "../assets/hero_endframe__cvklg0xk3w6e_large 2.svg";
import img2 from "../assets/icons arrow-right.svg";
import img3 from "../assets/Vector (13).svg";
import img4 from "../assets/Vector (14).svg";
import img5 from "../assets/Vector (15).svg";
import img6 from "../assets/Category-CellPhone.svg";
import img7 from "../assets/Category-Computer.svg";
import img8 from "../assets/Category-SmartWatch.svg";
import img9 from "../assets/Category-Camera.svg";
import img10 from "../assets/Category-Headphone.svg";
import img11 from "../assets/Category-Gamepad.svg";
import img12 from "../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.svg";
import img13 from "../assets/ps5-slim-goedkope-playstation_large 1.svg";
import img14 from "../assets/attractive-woman-wearing-hat-posing-black-background 1.svg";
import img15 from "../assets/Frame 707.svg";
import img16 from "../assets/Frame 706.svg";
import img17 from "../assets/Services.svg";
import img20 from "../assets/Services (5).svg";
import img18 from "../assets/Services (1).svg";
import img19 from "../assets/icons_arrow-up.svg";
import Slider from "react-slick";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };
  const targetDate =
    new Date().getTime() +
    3 * 24 * 60 * 60 * 1000 +
    23 * 60 * 60 * 1000 +
    19 * 60 * 1000 +
    59 * 1000;
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let time = {};
    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      time = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return time;
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((prev) => setData(prev))
      .catch((err) => console.log(err));
  }, []);

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const [cardView, setCardView] = useState(true);

  const [cardView2, setCardView2] = useState(true);

  const [cardView3, setCardView3] = useState(true);

  const sliderRef2 = useRef(null);

  const next2 = () => {
    sliderRef2.current.slickNext();
  };
  const previous2 = () => {
    sliderRef2.current.slickPrev();
  };

  const settings3 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };

  const scrollTop = useRef(null);

  const scrollToTop = () => {
    scrollTop.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="s1" ref={scrollTop}>
        <div className="s1-left">
          <p>Woman's Fashion</p>
          <p>Men's Fashion</p>
          <p>Electronics</p>
          <p>Home & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby's & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
        </div>
        <div className="slick">
          <Slider {...settings}>
            <div>
              <div>
                <div>
                  <span>
                    <h1>
                      <img src={img} alt="" />
                      iPhone 14 Series
                    </h1>
                    <h2>Up to 10% off Voucher</h2>
                    <button>
                      Shop Now <img src={img2} alt="" />
                    </button>
                  </span>
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <span>
                    <h1>
                      <img src={img} alt="" />
                      iPhone 14 Series
                    </h1>
                    <h2>Up to 20% off Voucher</h2>
                    <button>
                      Shop Now <img src={img2} alt="" />
                    </button>
                  </span>
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <span>
                    <h1>
                      <img src={img} alt="" />
                      iPhone 14 Series
                    </h1>
                    <h2>Up to 30% off Voucher</h2>
                    <button>
                      Shop Now <img src={img2} alt="" />
                    </button>
                  </span>
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <span>
                    <h1>
                      <img src={img} alt="" />
                      iPhone 14 Series
                    </h1>
                    <h2>Up to 40% off Voucher</h2>
                    <button>
                      Shop Now <img src={img2} alt="" />
                    </button>
                  </span>
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <span>
                    <h1>
                      <img src={img} alt="" />
                      iPhone 14 Series
                    </h1>
                    <h2>Up to 50% off Voucher</h2>
                    <button>
                      Shop Now <img src={img2} alt="" />
                    </button>
                  </span>
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="padding135px" style={{ padding: "0px 135px" }}>
        <div className="section2">
          <div className="s2-div1">
            <span></span>
            <p>Today's</p>
          </div>
          <div className="s2-div2">
            <h1>Flash Sales</h1>
            <div className="hours">
              <span>
                <p>Days</p>
                <h1>{String(timeLeft.days).padStart(2, "0")}:</h1>
              </span>
              <span>
                <p>Hours</p>
                <h1>{String(timeLeft.hours).padStart(2, "0")}:</h1>
              </span>
              <span>
                <p>Minutes</p>
                <h1>{String(timeLeft.minutes).padStart(2, "0")}:</h1>
              </span>
              <span>
                <p>Seconds</p>
                <h1>{String(timeLeft.seconds).padStart(2, "0")}</h1>
              </span>
            </div>
            <div
              className="slideMethodBtn"
              style={{ display: cardView ? "flex" : "none" }}
            >
              <button onClick={previous}>
                <img src={img4} alt="" />
              </button>
              <button onClick={next}>
                <img src={img3} alt="" />
              </button>
            </div>
          </div>
          <div className="s2-div4">
            {cardView ? (
              <Slider className="container1" ref={sliderRef} {...settings2}>
                {data.map((item, index) => (
                  <div key={index} className="card">
                    <span className="card-sp1">
                      <img src={item.image} alt="" className="img" />
                      <span
                        className="Wish"
                        style={{
                          width: "34px",
                          height: "76px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <img src={img0} alt="" />
                        <img src={img01} alt="" />
                      </span>
                    </span>
                    <h1>{item.title}</h1>
                    <p className="p">${item.price}</p>
                    <span className="card-sp2">
                      <h4>{item.rating.rate}</h4>
                      <img src={img5} alt="" />
                      <p>({item.rating.count})</p>
                    </span>
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="container">
                {data.map((item, index) => (
                  <div key={index} className="card1">
                    <span className="card-sp1">
                      <img src={item.image} alt="" className="img" />
                      <span
                        className="Wish"
                        style={{
                          width: "34px",
                          height: "76px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <img src={img0} alt="" />
                        <img src={img01} alt="" />
                      </span>
                    </span>
                    <h1>{item.title}</h1>
                    <p className="p">${item.price}</p>
                    <span
                      className="card-sp2"
                      style={{ justifyContent: "start" }}
                    >
                      <h4>{item.rating.rate}</h4>
                      <img src={img5} alt="" />
                      <p>({item.rating.count})</p>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="s2-div3">
            <button onClick={() => setCardView(!cardView)}>
              {cardView ? "View All Products" : "Slide All Products"}
            </button>
          </div>
        </div>

        <div className="section2 s3">
          <div className="s2-div1">
            <span></span>
            <p>Categories</p>
          </div>
          <div className="s2-div2">
            <h1>Browse By Category</h1>
            <div className="slideMethodBtn" style={{ marginLeft: "691px" }}>
              <button>
                <img src={img4} alt="" />
              </button>
              <button>
                <img src={img3} alt="" />
              </button>
            </div>
          </div>
          <div>
            <div className="container2">
              <div className="card2">
                <img src={img6} alt="" />
                <p>Phones</p>
              </div>
              <div className="card2">
                <img src={img7} alt="" />
                <p>Computers</p>
              </div>
              <div className="card2">
                <img src={img8} alt="" />
                <p>SmartWatch</p>
              </div>
              <div className="card2">
                <img src={img6} alt="" />
                <p>Camera</p>
              </div>
              <div className="card2">
                <img src={img10} alt="" />
                <p>HeadPhones</p>
              </div>
              <div className="card2">
                <img src={img11} alt="" />
                <p>Gaming</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section4">
          <div className="s2-div1">
            <span></span>
            <p>This Month</p>
          </div>
          <div className="s4-div2">
            <h1>Best Selling Products</h1>
            <button
              onClick={() => setCardView2(!cardView2)}
              style={{ cursor: "pointer" }}
            >
              {cardView2 ? "View All Products" : "Order All Products"}
            </button>
          </div>
          <div className="container3">
            {cardView2
              ? data.slice(0, 4).map((item, index) => (
                  <div className="card" style={{ width: "270px" }} key={index}>
                    <span className="card-sp1">
                      <img src={item.image} alt="" className="img" />
                      <span
                        className="Wish"
                        style={{
                          width: "34px",
                          height: "76px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <img src={img0} alt="" />
                        <img src={img01} alt="" />
                      </span>
                    </span>
                    <h1>{item.title}</h1>
                    <p className="p">${item.price}</p>
                    <span className="card-sp2">
                      <h5>{item.rating.rate}</h5>
                      <img src={img5} alt="" />
                      <p>{item.rating.count}</p>
                    </span>
                  </div>
                ))
              : data.map((item, index) => (
                  <div className="card" style={{ width: "270px" }} key={index}>
                    <span className="card-sp1">
                      <img src={item.image} alt="" className="img" />
                      <span
                        className="Wish"
                        style={{
                          width: "34px",
                          height: "76px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <img src={img0} alt="" />
                        <img src={img01} alt="" />
                      </span>
                    </span>
                    <h1>{item.title}</h1>
                    <p className="p">${item.price}</p>
                    <span>
                      <h5>{item.rating.rate}</h5>
                      <img src={img5} alt="" />
                      <p>{item.rating.count}</p>
                    </span>
                  </div>
                ))}
          </div>
        </div>
        <div className="section5">
          <div className="s5-div1">
            <p className="p">Categories</p>
            <h1>Enhance Your Music Experience</h1>
            <div className="spanh">
              <span>
                <h6>{String(timeLeft.hours).padStart(2, "0")}</h6>
                <p>hours</p>
              </span>
              <span>
                <h6>{String(timeLeft.minutes).padStart(2, "0")}</h6>
                <p>minutes</p>
              </span>
              <span>
                <h6>{String(timeLeft.seconds).padStart(2, "0")}</h6>
                <p>seconds</p>
              </span>
            </div>
            <button>Buy Now!</button>
          </div>
          <img src={img12} alt="" />
        </div>
        <div className="section6">
          <div className="s2-div1" style={{ marginBottom: "24px" }}>
            <span></span>
            <p>Our Products</p>
          </div>
          <div className="s2-div2">
            <h1>Explore Our Products</h1>
            <div
              className="slideMethodBtn"
              style={{
                display: cardView3 ? "flex" : "none",
                marginLeft: "670px",
              }}
            >
              <button onClick={previous2}>
                <img src={img4} alt="" />
              </button>
              <button onClick={next2}>
                <img src={img3} alt="" />
              </button>
            </div>
          </div>
          <div className="s6-div1" style={{ marginTop: "24px" }}>
            {cardView3 ? (
              <div>
                <Slider ref={sliderRef2} {...settings3}>
                  {data.map((item, index) => (
                    <div
                      className="card"
                      style={{ width: "270px" }}
                      key={index}
                    >
                      <span className="card-sp1">
                        <img src={item.image} alt="" className="img" />
                        <span
                          className="Wish"
                          style={{
                            width: "34px",
                            height: "76px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <img src={img0} alt="" />
                          <img src={img01} alt="" />
                        </span>
                      </span>
                      <h1>{item.title}</h1>
                      <p className="p">${item.price}</p>
                      <span className="card-sp2">
                        <h5>{item.rating.rate}</h5>
                        <img src={img5} alt="" />
                        <p>{item.rating.count}</p>
                      </span>
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className="container4">
                {data.map((item, index) => (
                  <div className="card" style={{ width: "270px" }} key={index}>
                    <img
                      src={item.image}
                      alt=""
                      style={{ width: "100%", height: "250px" }}
                    />
                    <h1>{item.title}</h1>
                    <p className="p">${item.price}</p>
                    <span className="card-sp2">
                      <h5>{item.rating.rate}</h5>
                      <img src={img5} alt="" />
                      <p>{item.rating.count}</p>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="s6-div2">
            <button onClick={() => setCardView3(!cardView3)}>
              {cardView3 ? "View All Products" : "Slide All Products"}
            </button>
          </div>
        </div>

        <div
          className="section7"
          style={{ marginBottom: "100px", marginTop: "100px" }}
        >
          <div className="s2-div1" style={{ marginBottom: "24px" }}>
            <span></span>
            <p>Featured</p>
          </div>
          <div className="s2-div2" style={{ marginBottom: "24px" }}>
            <h1>New Arrival</h1>
          </div>
          <div className="s7-div1">
            <div className="s7-div1-card">
              <img src={img13} alt="" />
              <div className="s7-div1-card-div">
                <span>
                  <h1>PlayStation 5</h1>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <button>Shop Now</button>
                </span>
              </div>
            </div>
            <div className="s7-div2">
              <div className="s7-div2-card1">
                <img src={img14} alt="" />
                <div className="s7-div1-card-div">
                  <span>
                    <h1>Women's Collections</h1>
                    <p>
                      Featured woman collections that give you another vibe.
                    </p>
                    <button>Shop Now</button>
                  </span>
                </div>
              </div>
              <div className="s7-div2-cards">
                <div className="s7-div2-card2">
                  <img src={img15} alt="" />
                  <div className="s7-div1-card-div">
                    <span style={{ height: "85px" }}>
                      <h1>Speakers</h1>
                      <p>Amazon wireless speakers</p>
                      <button>Shop Now</button>
                    </span>
                  </div>
                </div>
                <div className="s7-div2-card2">
                  <img src={img16} alt="" />
                  <div className="s7-div1-card-div">
                    <span style={{ height: "85px" }}>
                      <h1>Perfume</h1>
                      <p>GUCCI INTENSE OUD EDP</p>
                      <button>Shop Now</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section8">
          <div className="s8-div1" style={{ marginBottom: "62px" }}>
            <span>
              <img src={img17} alt="" />
              <h1>FREE AND FAST DELIVERY</h1>
              <p>Free delivery for all orders over $140</p>
            </span>
            <span>
              <img src={img18} alt="" />
              <h1>24/7 CUSTOMER SERVICE</h1>
              <p>Friendly 24/7 customer support</p>
            </span>
            <span>
              <img src={img20} alt="" />
              <h1>MONEY BACK GUARANTEE</h1>
              <p>We return money within 30 days</p>
            </span>
          </div>
        </div>
        <div className="scrollTop">
          <button onClick={scrollToTop}>
            <img src={img19} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
