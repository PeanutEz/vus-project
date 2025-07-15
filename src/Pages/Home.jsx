import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "./Header";
import Footer from "./Footer";
import ContentSlider from "./ContentSlider";
import Contentheader from "./Contentheader";
import Contentbody from "./Contentbody";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";

const counters = [
  { key: "Students", start: 0, target: 77, unit: "K+" },
  { key: "Campuses", start: 0, target: 80, unit: "+" },
  { key: "Teaching Staff", start: 0, target: 3000, unit: "+" },
  { key: "Students Per Year", start: 0, target: 280, unit: "K+" },
];

export default function Home() {
  const [counterValues, setCounterValues] = useState(counters);

  useEffect(() => {
    const timeouts = [];

    // Start the counting animation for each counter
    counterValues.forEach((counter, index) => {
      const increment = Math.ceil(counter.target / 90); // Control speed and smoothness
      const startCount = () => {
        timeouts[index] = setTimeout(() => {
          setCounterValues((prev) => {
            const updated = [...prev];
            if (updated[index].start < counter.target) {
              updated[index].start += increment;
              if (updated[index].start > counter.target) {
                updated[index].start = counter.target; // Ensure we don't overshoot
              }
            }
            return updated;
          });
          if (counter.start < counter.target) startCount(); // Recursively call to keep counting
        }, 50); // Adjust time for smoother animation
      };
      startCount();
    });
    
    // Cleanup: Clear all timeouts on unmount
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);
  return (
    <div className="home-container">
      <Header/>
      <div className="home-slider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={1}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url('https://teachenglish.vus.edu.vn/wp-content/uploads/2024/09/KYLUC-COVER-FANPAGE.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "610px",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url('https://teachenglish.vus.edu.vn/wp-content/uploads/2022/04/teachenglish-5.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "610px",
              }}
            >
              <div className="slide-content">
                <h1>
                  YOUR TEACHING <br /> CAREER STARTS <br /> HEAR
                </h1>
                <p>
                  Join Vietnam's biggest team of ELT teachers, from around the
                  world, on our mission to provide quality English language
                  education to families nationwide
                </p>
                <button>Apply now</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url('https://teachenglish.vus.edu.vn/wp-content/uploads/2022/04/Group-12805@2x-scaled.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "610px",
              }}
            >
              <div className="slide-content">
                <h1>
                  YOUR TEACHING <br /> CAREER STARTS <br /> HEAR
                </h1>
                <p>
                  Join Vietnam's biggest team of ELT teachers, from around the
                  world, on our mission to provide quality English language
                  education to families nationwide
                </p>
                <button>Apply now</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url('https://teachenglish.vus.edu.vn/wp-content/uploads/2022/04/teachenglish-4.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "610px",
              }}
            >
              <div className="slide-content">
                <h1>
                  YOUR TEACHING <br /> CAREER STARTS <br /> HEAR
                </h1>
                <p>
                  Join Vietnam's biggest team of ELT teachers, from around the
                  world, on our mission to provide quality English language
                  education to families nationwide
                </p>
                <button>Apply now</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url('https://teachenglish.vus.edu.vn/wp-content/uploads/2022/03/Group-12805@2x.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "610px",
              }}
            >
              <div className="slide-content">
                <h1>
                  YOUR TEACHING <br /> CAREER STARTS <br /> HEAR
                </h1>
                <p>
                  Join Vietnam's biggest team of ELT teachers, from around the
                  world, on our mission to provide quality English language
                  education to families nationwide
                </p>
                <button>Apply now</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="count-up-number-container">
          <div className="count-up-number">
          <img
            className="c-img1"
            src="https://teachenglish.vus.edu.vn/wp-content/uploads/2021/12/Group-10111.svg"
            alt=""
          />
          <img
            className="c-img2"
            src="https://teachenglish.vus.edu.vn/wp-content/uploads/2021/12/Group-10114.svg"
            alt=""
          />
            {counterValues.map((counter) => (
              <div key={counter.key} className="counter-container">
                <h1>
                  {counter.start}
                  {counter.unit}
                </h1>
                <p>{counter.key}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-us">
        <Contentheader
          classname="about-us-header"
          head="ABOUT US"
          body="For one of the best English teaching jobs in Vietnam, look no
            further than VUS. VUS is the leader in the English Language Training
            (ELT) in Vietnam with millions of learners enrolling for its courses
            since its foundation."
        />
        <div className="about-us-content">
          <div className="au-cont">
            <div className="au-cont-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.466"
                height="30.864"
                viewBox="0 0 31.466 30.864"
              >
                <g
                  id="Group_10852"
                  data-name="Group 10852"
                  transform="translate(-1346.184 -285.242)"
                >
                  <circle
                    id="Ellipse_13"
                    data-name="Ellipse 13"
                    cx="11.289"
                    cy="11.289"
                    r="11.289"
                    transform="translate(1350.029 293.107)"
                    fill="#fff"
                  ></circle>
                  <path
                    id="Path_219"
                    data-name="Path 219"
                    d="M1480.039,344.209v5.753c0,1.121,2.735,2.029,6.109,2.029s6.109-.908,6.109-2.029v-5.753Z"
                    transform="translate(-123.111 -53.899)"
                    fill="#e0242b"
                  ></path>
                  <path
                    id="Path_220"
                    data-name="Path 220"
                    d="M1450.54,294.974l-10.439,5.463-10.439-5.463,10.439-4.841Z"
                    transform="translate(-77.064 -4.47)"
                    fill="#e0242b"
                  ></path>
                  <path
                    id="Path_221"
                    data-name="Path 221"
                    d="M1571.674,437.3c-.468-.007-.936-.063-1.4-.036a2.192,2.192,0,0,0-1.3.451,1.181,1.181,0,0,0-.4,1.257,2.3,2.3,0,0,0,.89.909,1.235,1.235,0,0,1,.615,1.063,1.988,1.988,0,0,1-.257.583,4.485,4.485,0,0,0,0,3.068l.723,3.028a1.478,1.478,0,0,0,.658,1.1,1.416,1.416,0,0,0,1.352-.4,7.319,7.319,0,0,0,2.385-2.857,3.683,3.683,0,0,0-.3-3.583,3.026,3.026,0,0,1-.389-.552.607.607,0,0,1,.043-.639c.2-.228.557-.182.851-.118l1.759.385a1.36,1.36,0,0,0,1.178-.106.9.9,0,0,0,.262-.785,2.671,2.671,0,0,0-.273-.813l-1.1-2.388a4.381,4.381,0,0,0-.533-1.158c-.287-.266-.47.077-.767.3A6.687,6.687,0,0,1,1571.674,437.3Z"
                    transform="translate(-203.982 -137.445)"
                    fill="#61c4f2"
                  ></path>
                  <path
                    id="Path_222"
                    data-name="Path 222"
                    d="M1462.781,510.681a8.46,8.46,0,0,0-.144-4.905,1.862,1.862,0,0,0-.588-.951,1.954,1.954,0,0,0-1.582-.125,13.138,13.138,0,0,0-2.372.786,2.174,2.174,0,0,0-1.311,1.14,2.353,2.353,0,0,0,.141,1.42l1.7,5.382a2.782,2.782,0,0,0,.467.993C1460.567,516.146,1462.5,511.689,1462.781,510.681Z"
                    transform="translate(-101.797 -200.502)"
                    fill="#61c4f2"
                  ></path>
                  <path
                    id="Path_223"
                    data-name="Path 223"
                    d="M1431.18,405.388a9.934,9.934,0,0,0-1.262,1.256,6.866,6.866,0,0,0-.645,1.557,2.32,2.32,0,0,1-.983,1.327,3.416,3.416,0,0,1-3.489-1.115,2.582,2.582,0,0,1,.255-2.279,14.41,14.41,0,0,1,3.525-4.6.606.606,0,0,1,.466-.2c.274.048.341.4.421.664a2.079,2.079,0,0,0,.94,1.121c.395.242,1.238.327,1.411.78C1432.007,404.39,1431.492,405.072,1431.18,405.388Z"
                    transform="translate(-72.459 -106.11)"
                    fill="#61c4f2"
                  ></path>
                  <rect
                    id="Rectangle_182"
                    data-name="Rectangle 182"
                    width="5.623"
                    height="9.949"
                    transform="translate(1346.184 305.926)"
                    fill="#61c4f2"
                  ></rect>
                  <path
                    id="Path_224"
                    data-name="Path 224"
                    d="M1418.263,303.559c0-.014,0-.029,0-.043a11.638,11.638,0,0,0-1.992-5.695h0a.416.416,0,0,0-.087-.136c-.006-.006-.013-.011-.02-.017h0l0,0a11.806,11.806,0,0,0-3.043-2.979v-1.658l4.1-2.147a.42.42,0,0,0-.018-.754l-10.438-4.841a.425.425,0,0,0-.354,0l-10.438,4.841-.015.007a.4.4,0,0,0-.091.065l-.01.008-.014.016a.391.391,0,0,0-.05.066.185.185,0,0,0-.019.034.422.422,0,0,0-.028.068c0,.014-.007.03-.011.047s0,0,0,.007a.164.164,0,0,0,0,.042.129.129,0,0,0,0,.022v2.329a.973.973,0,1,0,.841,0V291.2l3.489,1.826v1.658a11.708,11.708,0,1,0,18.24,9.714C1418.293,304.115,1418.284,303.835,1418.263,303.559Zm-4.744.669a3.38,3.38,0,0,1,.932,2.478,4.236,4.236,0,0,1-.958,2.36,8.126,8.126,0,0,1-2.044,1.758c-.366.234-.513.221-.568.193-.116-.059-.187-.342-.221-.478l-.954-3.79a5.322,5.322,0,0,1-.244-1.81,1.5,1.5,0,0,1,.776-1.248.42.42,0,0,0,.067-.735c-1.571-1.054-1.94-1.827-1.761-2.2.208-.431,1.149-.657,1.832-.44a3.621,3.621,0,0,0,1.661.012l.266-.039a5.985,5.985,0,0,0,2.234-.617,5.917,5.917,0,0,0,1.114-.9l.145-.138a10.778,10.778,0,0,1,1.583,4.494,11.574,11.574,0,0,1-2.76-.456l-.023-.007a1.812,1.812,0,0,0-.718-.1.888.888,0,0,0-.792.687A1.138,1.138,0,0,0,1413.519,304.228Zm-15.561-13.249,2.1.061.84.025,5.677.169a.418.418,0,0,0,.432-.408.438.438,0,0,0-.008-.1.421.421,0,0,0-.4-.335l-6.527-.195-2.133-.064,8.647-4.01,9.49,4.4-2.959,1.548-.841.441-1.681.879-1.041.545-2.968,1.553-2.968-1.553-1.041-.545-1.68-.879-.84-.44Zm2.936,2.485.675.353.952.5,3.867,2.024a.42.42,0,0,0,.39,0l3.867-2.024.952-.5.675-.353v2.6c0,.561-1.954,1.608-5.689,1.608s-5.69-1.047-5.69-1.608v-2.6ZM1396,301.922a10.881,10.881,0,0,1,4.054-6.209v.349c0,.521.36,1.263,2.078,1.833.1.033.206.067.314.1a1.547,1.547,0,0,1-.454,1.007c-.131.143-.276.277-.429.419a4.893,4.893,0,0,0-.791.864,5.133,5.133,0,0,0-.56,1.3,2.863,2.863,0,0,1-.705,1.358,1.78,1.78,0,0,1-1.729.175,6.124,6.124,0,0,1-1.749-1.172c-.01-.008-.02-.014-.03-.021v0A0,0,0,0,1,1396,301.922Zm5.573,12.117q-.377-.2-.736-.421h0a14.085,14.085,0,0,0-1.693-5.818l-.066-.119a3.485,3.485,0,0,1-.36-.793.817.817,0,0,1,.087-.7,1.48,1.48,0,0,1,.52-.333l2.33-1.1a3.977,3.977,0,0,1,1.24-.43,1.049,1.049,0,0,1,.935.32,1.808,1.808,0,0,1,.233.954l.171,2.394a5.232,5.232,0,0,1-1.265,4.384A6.974,6.974,0,0,1,1401.573,314.04Zm5.01,1.226a10.807,10.807,0,0,1-4.173-.833h0a9.19,9.19,0,0,0,1.256-1.582,7.893,7.893,0,0,0,1.354-2.711,7.809,7.809,0,0,0,.054-2.2l-.171-2.394a2.548,2.548,0,0,0-.4-1.4,1.871,1.871,0,0,0-1.69-.648,4.673,4.673,0,0,0-1.514.506l-2.33,1.1a2.153,2.153,0,0,0-.819.571,1.628,1.628,0,0,0-.244,1.428,4.16,4.16,0,0,0,.44.993l.064.116a13.244,13.244,0,0,1,1.529,4.785h0a10.865,10.865,0,0,1-4.113-10.117h0a5.832,5.832,0,0,0,1.665,1.037,3.068,3.068,0,0,0,1.054.193,2.317,2.317,0,0,0,1.507-.514,3.518,3.518,0,0,0,.963-1.742,4.44,4.44,0,0,1,.46-1.1,4.21,4.21,0,0,1,.662-.713c.159-.147.323-.3.476-.467a2.4,2.4,0,0,0,.672-1.368h0a16.636,16.636,0,0,0,3.3.312,14.671,14.671,0,0,0,4.452-.616c1.717-.569,2.078-1.311,2.078-1.833v-.349a10.95,10.95,0,0,1,2.2,2.218l-.245.234a3.814,3.814,0,0,1-2.881,1.294l-.278.041a2.916,2.916,0,0,1-1.28.018,2.491,2.491,0,0,0-2.844.876c-.289.6-.226,1.573,1.552,2.909a2.523,2.523,0,0,0-.713,1.549,6.04,6.04,0,0,0,.265,2.1l.954,3.79a1.458,1.458,0,0,0,.654,1.021.989.989,0,0,0,.456.109,1.838,1.838,0,0,0,.947-.342,8.936,8.936,0,0,0,2.251-1.945,5.016,5.016,0,0,0,1.138-2.839,4.239,4.239,0,0,0-1.175-3.112,1.607,1.607,0,0,1-.187-.217.156.156,0,0,1,.047-.014,1.131,1.131,0,0,1,.389.07l.024.007a12.359,12.359,0,0,0,3.055.492h0c.007.141.01.281.01.423A10.882,10.882,0,0,1,1406.583,315.266Z"
                    transform="translate(-45.265 0)"
                    fill="#1d1d1b"
                  ></path>
                  <rect
                    id="Rectangle_183"
                    data-name="Rectangle 183"
                    width="4.174"
                    height="4.174"
                    transform="translate(1373.476 292.441)"
                    fill="#61c4f2"
                  ></rect>
                </g>
              </svg>
            </div>
            <div className="au-cont-p">
              <h3>30 Years</h3>
              <div className="dash"></div>
              <p>
                VUS is one of the most well established educational system in
                Vietnam, found 30 years ago
              </p>
            </div>
          </div>

          <div className="au-cont">
            <div className="au-cont-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28.195"
                height="24.357"
                viewBox="0 0 28.195 24.357"
              >
                <g id="seminar" transform="translate(-146.96 -325.146)">
                  <g id="Group_10859" data-name="Group 10859">
                    <path
                      id="Path_41720"
                      data-name="Path 41720"
                      d="M161.2,396.866l.22.241s-.019.018-.049.048l0,0c-.1.092-.326.309-.638.609v3.248a9.306,9.306,0,0,1-11,0v-3.7l-.12-.131.042-.032a3.854,3.854,0,0,1-.693-2.211,3.932,3.932,0,0,1,.08-.792,5.317,5.317,0,0,1,2.883-2.723,4.988,4.988,0,0,1,.848-.239l.073-.013a3.582,3.582,0,0,0,1.09.715,3.436,3.436,0,0,0,1.3.26l2.254-.886.2-.081A5.3,5.3,0,0,1,161,393.361c.026.038.052.076.077.113a.436.436,0,0,0-.077.036.594.594,0,0,0-.115.083.759.759,0,0,0-.1.113l-.856,1.23,1.256,1.385.72-.807a5.8,5.8,0,0,1,.089.681Q161.616,396.552,161.2,396.866Z"
                      transform="translate(-1.757 -54.76)"
                      fill="#e0242b"
                    ></path>
                    <g
                      id="Group_10853"
                      data-name="Group 10853"
                      transform="translate(146.96 325.146)"
                    >
                      <path
                        id="Path_41721"
                        data-name="Path 41721"
                        d="M159.164,331.5a1.361,1.361,0,0,0,.464,1,.617.617,0,0,1,.053.051c0,.008,0,.015,0,.022s0,0,0,.006c.365,2.425,2.007,4.184,3.905,4.184s3.54-1.76,3.905-4.184c0-.008,0-.016,0-.024a.751.751,0,0,1,.056-.054,1.364,1.364,0,0,0,.465-1,1.644,1.644,0,0,0-.293-1.39,3.563,3.563,0,0,0,.347-2.355,3.785,3.785,0,0,0-1.888-2.564.359.359,0,0,0-.489.151,2.133,2.133,0,0,1-.744.846,2.512,2.512,0,0,1-1.716.222,3.721,3.721,0,0,0-2.275.295,3.168,3.168,0,0,0-1.415,1.548,2.952,2.952,0,0,0-.083,1.856A1.632,1.632,0,0,0,159.164,331.5Zm1.048-2.983a2.427,2.427,0,0,1,1.084-1.179,2.333,2.333,0,0,1,1.136-.263c.241,0,.484.024.732.048a3.145,3.145,0,0,0,2.17-.33h0a2.719,2.719,0,0,0,.8-.788,2.961,2.961,0,0,1,1.23,1.872,2.389,2.389,0,0,1-.442,2.066c-.6.5-1.723.138-2.807-.207-1.22-.389-2.481-.792-3.3-.068a1.7,1.7,0,0,0-.484.76A2.507,2.507,0,0,1,160.212,328.515Zm.068,3.235a.359.359,0,0,0,.639-.239,1.607,1.607,0,0,1,.371-1.307c.514-.454,1.578-.114,2.607.215,1.129.36,2.292.729,3.172.278a.358.358,0,0,0,.161-.06,1.305,1.305,0,0,1,.072.785c-.039.367-.129.449-.234.544a.753.753,0,0,0-.282.5s0,0,0,.007c-.312,2.071-1.655,3.573-3.2,3.573s-2.883-1.5-3.195-3.573c0-.005,0-.01,0-.015a.752.752,0,0,0-.28-.488c-.1-.1-.195-.177-.233-.543a2.854,2.854,0,0,1-.017-.319A4.524,4.524,0,0,0,160.28,331.75Z"
                        transform="translate(-157.036 -325.145)"
                      ></path>
                      <path
                        id="Path_41722"
                        data-name="Path 41722"
                        d="M173.967,363.718h.826a.359.359,0,1,0,0-.718h-.826a.359.359,0,1,0,0,.718Z"
                        transform="translate(-169 -356.454)"
                      ></path>
                      <path
                        id="Path_41723"
                        data-name="Path 41723"
                        d="M188.977,363.718h.826a.359.359,0,0,0,0-.718h-.826a.359.359,0,0,0,0,.718Z"
                        transform="translate(-181.414 -356.454)"
                      ></path>
                      <path
                        id="Path_41724"
                        data-name="Path 41724"
                        d="M177.468,378.127a.359.359,0,0,0,.069.5,1.793,1.793,0,0,0,2.3,0,.359.359,0,0,0-.434-.572,1.084,1.084,0,0,1-1.43,0A.36.36,0,0,0,177.468,378.127Z"
                        transform="translate(-172.132 -368.847)"
                      ></path>
                      <path
                        id="Path_41725"
                        data-name="Path 41725"
                        d="M208.07,456.856a.322.322,0,1,0,.322.322A.323.323,0,0,0,208.07,456.856Z"
                        transform="translate(-197.236 -434.079)"
                        fill="#61c4f2"
                      ></path>
                      <circle
                        id="Ellipse_3326"
                        data-name="Ellipse 3326"
                        cx="0.322"
                        cy="0.322"
                        r="0.322"
                        transform="translate(24.014 0.69)"
                        fill="#61c4f2"
                      ></circle>
                      <circle
                        id="Ellipse_3327"
                        data-name="Ellipse 3327"
                        cx="0.322"
                        cy="0.322"
                        r="0.322"
                        transform="translate(24.76 22.134)"
                        fill="#61c4f2"
                      ></circle>
                      <path
                        id="Path_41726"
                        data-name="Path 41726"
                        d="M173.252,337H161.147a1.9,1.9,0,0,0-1.9,1.9v8.65A4,4,0,0,0,156.094,346a.344.344,0,0,0-.142.031h-.032c-.013,0-.026.006-.039.009l-.026.007c-.011,0-.021.009-.032.014l-.03.014-.024.016a.364.364,0,0,0-.032.024l0,0a3.325,3.325,0,0,1-2.069.832.341.341,0,0,0-.126-.025.345.345,0,0,0-.129.025,3.33,3.33,0,0,1-2.1-.859l0,0a.328.328,0,0,0-.031-.024l-.024-.017-.029-.014c-.011-.005-.021-.011-.032-.015l-.028-.007a.3.3,0,0,0-.037-.009l-.029,0a.348.348,0,0,0-.039,0h-.007l-.026,0h0a.348.348,0,0,0-.066-.007,4.012,4.012,0,0,0-3.9,3.159,4.065,4.065,0,0,0-.086.834,3.961,3.961,0,0,0,.648,2.176.344.344,0,0,0,.051.168v3.506a.343.343,0,0,0,.145.282,9.935,9.935,0,0,0,5.719,1.8h.019a10.025,10.025,0,0,0,5.729-1.8.344.344,0,0,0,.147-.282v-2.976l-.014-.075.1-.091c.244-.227.389-.363.394-.367a.346.346,0,0,0,.016-.488l-.012-.013.987-1.075a1.739,1.739,0,0,0,.206-.273c.017,0,.036,0,.054,0h4.358a1.734,1.734,0,0,0,1.349,1.349v3.839h-1.729a.346.346,0,1,0,0,.692h4.15a.346.346,0,1,0,0-.692h-1.729v-3.839a1.734,1.734,0,0,0,1.349-1.349h4.358a1.9,1.9,0,0,0,1.9-1.9V338.9A1.9,1.9,0,0,0,173.252,337Zm-14.464,11.094a1.3,1.3,0,0,0-.318.313l-.776,1.082a.344.344,0,0,0-.424.037l-.8.749a3.768,3.768,0,0,1-.353.292,3.964,3.964,0,0,1-2.231.778v-3.458l1.758.93a.346.346,0,0,0,.507-.279l.141-1.838A3.312,3.312,0,0,1,158.788,348.094Zm-4.163-.6a4.1,4.1,0,0,0,.941-.4l-.066.863Zm-2.228-.013-.88.452-.056-.864A4.1,4.1,0,0,0,152.4,347.483Zm-4.674,1.82a3.316,3.316,0,0,1,3.021-2.6l.118,1.8a.346.346,0,0,0,.5.285l1.828-.94v3.459l-.024,0c-.1-.012-.194-.029-.289-.05a4.012,4.012,0,0,1-2.08-1.181l-.109-.118a.346.346,0,1,0-.5.474l.109.116a.159.159,0,0,0,.017.017,4.554,4.554,0,0,0,.821.692,4.649,4.649,0,0,0,2.035.747,4.214,4.214,0,0,0,.692.031h.024a4.667,4.667,0,0,0,2.447-.777,4.545,4.545,0,0,0,.609-.479l.228-.213.32-.3.28.3.647.692.216.232.283.3.255.274-.539.5-.2.182a6.92,6.92,0,0,1-4.574,1.861,6.581,6.581,0,0,1-.669-.021h-.024a6.9,6.9,0,0,1-4.245-1.913.343.343,0,0,0-.089-.15l-.024-.022a3.081,3.081,0,0,1-.507-.542c-.006-.008-.015-.019-.025-.029a3.279,3.279,0,0,1-.627-1.936A3.372,3.372,0,0,1,147.723,349.3Zm.627,3.846v-.065l.066.065a7.588,7.588,0,0,0,4.752,2.134h.024v1.942a9.233,9.233,0,0,1-4.842-1.562Zm10.376,2.514a9.33,9.33,0,0,1-4.842,1.561V355.3a7.586,7.586,0,0,0,4.747-1.8c.032-.027.063-.056.1-.084v2.25Zm1.416-5.112-.714.776-1.245-1.333.849-1.185a.74.74,0,0,1,.1-.109.585.585,0,0,1,.114-.08.429.429,0,0,1,.076-.035.486.486,0,0,1,.085-.028l.26-.064a.345.345,0,0,0,.524.443l.535-.5a1.79,1.79,0,0,1,.021.886l-.085.37-.024.107a1.1,1.1,0,0,1-.258.491l-.022.024Zm7.057.63a1.038,1.038,0,0,1-.977-.692h1.954A1.038,1.038,0,0,1,167.2,351.18Zm7.263-2.594a1.212,1.212,0,0,1-1.211,1.211H161.346l.074-.318a2.485,2.485,0,0,0-.145-1.553l4.666-4.354h5.409a.346.346,0,1,0,0-.692h-4.668l1.853-1.729h.393a.346.346,0,1,0,0-.692H168.8c0-.006-.008-.012-.014-.018a.346.346,0,0,0-.489-.017l-.037.035h-6.251a.346.346,0,1,0,0,.692h5.51l-1.853,1.729h-3.657a.346.346,0,1,0,0,.692h2.916l-4.247,3.963-.744.182V338.9a1.212,1.212,0,0,1,1.211-1.211h12.105a1.212,1.212,0,0,1,1.211,1.211Z"
                        transform="translate(-146.96 -334.95)"
                      ></path>
                      <path
                        id="Path_41727"
                        data-name="Path 41727"
                        d="M250.346,383.692h2.421a.346.346,0,1,0,0-.692h-2.421a.346.346,0,1,0,0,.692Z"
                        transform="translate(-232.181 -372.995)"
                      ></path>
                      <path
                        id="Path_41728"
                        data-name="Path 41728"
                        d="M272.346,383.692h2.767a.346.346,0,1,0,0-.692h-2.767a.346.346,0,0,0,0,.692Z"
                        transform="translate(-250.377 -372.995)"
                      ></path>
                      <path
                        id="Path_41729"
                        data-name="Path 41729"
                        d="M244.226,395h-5.88a.346.346,0,1,0,0,.692h5.88a.346.346,0,1,0,0-.692Z"
                        transform="translate(-222.256 -382.92)"
                      ></path>
                      <path
                        id="Path_41730"
                        data-name="Path 41730"
                        d="M282.075,395h-1.729a.346.346,0,0,0,0,.692h1.729a.346.346,0,0,0,0-.692Z"
                        transform="translate(-256.993 -382.92)"
                      ></path>
                      <path
                        id="Path_41731"
                        data-name="Path 41731"
                        d="M282.075,357h-1.729a.346.346,0,0,0,0,.692h1.729a.346.346,0,0,0,0-.692Z"
                        transform="translate(-256.993 -351.491)"
                      ></path>
                      <path
                        id="Path_41732"
                        data-name="Path 41732"
                        d="M232.346,329.692h8.3a.346.346,0,1,0,0-.692h-8.3a.346.346,0,1,0,0,.692Z"
                        transform="translate(-217.294 -328.333)"
                        fill="#61c4f2"
                      ></path>
                      <path
                        id="Path_41733"
                        data-name="Path 41733"
                        d="M247.955,453h-7.609a.346.346,0,1,0,0,.692h7.609a.346.346,0,1,0,0-.692Z"
                        transform="translate(-223.911 -430.89)"
                        fill="#61c4f2"
                      ></path>
                      <path
                        id="Path_41734"
                        data-name="Path 41734"
                        d="M166.726,457.516a10.529,10.529,0,0,1-7.335-.262.346.346,0,0,0-.265.639,11.221,11.221,0,0,0,7.819.279.346.346,0,0,0-.219-.656Z"
                        transform="translate(-156.845 -434.387)"
                        fill="#61c4f2"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="au-cont-p">
              <h3>3k+ Teaching Staff</h3>
              <div className="dash"></div>
              <p>
                VUS is one of the biggest employers of teachers in Vietnam with
                a team of over 3,000 teaching professionals.
              </p>
            </div>
          </div>

          <div className="au-video">
            <div className="au-video-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#FFFFFF"
              >
                <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
              </svg>
            </div>
          </div>

          <div className="au-cont">
            <div className="au-cont-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28.615"
                viewBox="0 0 28 28.615"
              >
                <g id="_3" data-name="3" transform="translate(-2.849 -2.504)">
                  <circle
                    id="Ellipse_3334"
                    data-name="Ellipse 3334"
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    transform="translate(2.849 2.619)"
                    fill="#61c4f2"
                  ></circle>
                  <rect
                    id="Rectangle_4115"
                    data-name="Rectangle 4115"
                    width="5"
                    height="6"
                    transform="translate(9.849 24.619)"
                    fill="#e0242b"
                  ></rect>
                  <line
                    id="Line_274"
                    data-name="Line 274"
                    x2="28"
                    transform="translate(2.849 30.619)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></line>
                  <path
                    id="Path_41757"
                    data-name="Path 41757"
                    d="M8,30.283V3H20.342V30.283"
                    transform="translate(-1.752 0.004)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></path>
                  <path
                    id="Path_41758"
                    data-name="Path 41758"
                    d="M27,11l8.445,4.547V33.086"
                    transform="translate(-8.41 -2.799)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></path>
                  <line
                    id="Line_275"
                    data-name="Line 275"
                    x2="2.598"
                    transform="translate(8.846 8.162)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></line>
                  <line
                    id="Line_276"
                    data-name="Line 276"
                    x2="2.598"
                    transform="translate(13.393 8.162)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></line>
                  <line
                    id="Line_277"
                    data-name="Line 277"
                    x2="2"
                    transform="translate(9.849 11.619)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></line>
                  <line
                    id="Line_278"
                    data-name="Line 278"
                    x2="3"
                    transform="translate(12.849 11.619)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></line>
                  <line
                    id="Line_279"
                    data-name="Line 279"
                    x2="2.598"
                    transform="translate(8.846 16.035)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></line>
                  <line
                    id="Line_280"
                    data-name="Line 280"
                    x2="2.598"
                    transform="translate(13.393 16.035)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></line>
                  <line
                    id="Line_281"
                    data-name="Line 281"
                    x2="2.598"
                    transform="translate(8.846 19.978)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></line>
                  <line
                    id="Line_282"
                    data-name="Line 282"
                    x2="2.598"
                    transform="translate(13.393 19.978)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></line>
                  <rect
                    id="Rectangle_4116"
                    data-name="Rectangle 4116"
                    width="5"
                    height="6"
                    transform="translate(9.849 24.619)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></rect>
                  <line
                    id="Line_283"
                    data-name="Line 283"
                    x2="2"
                    transform="translate(21.849 14.619)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></line>
                  <line
                    id="Line_284"
                    data-name="Line 284"
                    x2="2"
                    transform="translate(21.849 19.619)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></line>
                  <line
                    id="Line_285"
                    data-name="Line 285"
                    x2="2"
                    transform="translate(21.849 22.619)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></line>
                  <line
                    id="Line_286"
                    data-name="Line 286"
                    x2="2"
                    transform="translate(21.849 25.619)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></line>
                  <line
                    id="Line_287"
                    data-name="Line 287"
                    y1="3.248"
                    transform="translate(12.055 27.039)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></line>
                </g>
              </svg>
            </div>
            <div className="au-cont-p">
              <h3>80+ Campuses</h3>
              <div className="dash"></div>
              <p>
                VUS is one of the biggest educational system in the South of
                Vietnam with the majority of its campuses in HCM city. We are
                expanding to new locations including Bien Hoa, Binh Duong, Vung
                Tau, Da Nang, and the North.
              </p>
            </div>
          </div>

          <div className="au-cont">
            <div className="au-cont-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.364"
                height="27.333"
                viewBox="0 0 23.364 27.333"
              >
                <g
                  id="icon_doingugiaovien_home"
                  transform="translate(0 -0.025)"
                >
                  <path
                    id="Path_95"
                    data-name="Path 95"
                    d="M33.874,24.3a3.226,3.226,0,0,1-1.9.644,3.048,3.048,0,0,1-1.9-.644A2.588,2.588,0,0,0,27.9,26.709V33.8h1.113v1.064h.732V33.8H34.2v1.064h.761V33.8h1.113V26.709A2.617,2.617,0,0,0,33.874,24.3Z"
                    transform="translate(-19.729 -17.475)"
                    fill="#ff2c2c"
                  ></path>
                  <path
                    id="Path_96"
                    data-name="Path 96"
                    d="M36.825,91.2h-4.3a.82.82,0,0,0-.82.784v.084a.575.575,0,0,0,.586.56h4.774a.575.575,0,0,0,.586-.56v-.084A.82.82,0,0,0,36.825,91.2Z"
                    transform="translate(-22.417 -65.635)"
                    fill="#61c4f2"
                  ></path>
                  <g
                    id="Group_73"
                    data-name="Group 73"
                    transform="translate(0 0.025)"
                  >
                    <path
                      id="Path_97"
                      data-name="Path 97"
                      d="M11.777,45.6V38.542a.381.381,0,0,0-.761,0v6.751H9.522V38.177a.381.381,0,0,0-.761,0v7.115H7.267v-8.88h3.339a.365.365,0,1,0,0-.728H7.326v-4.23a.381.381,0,0,0-.761,0v4.258H5.832V30.586a2.164,2.164,0,0,1,1.435-1.933,3.338,3.338,0,0,0,1.9.616,3.779,3.779,0,0,0,1.669-.364.351.351,0,0,0,.146-.476.384.384,0,0,0-.5-.14,3.119,3.119,0,0,1-1.318.252,2.607,2.607,0,0,1-1.611-.56.322.322,0,0,0-.351-.056A2.907,2.907,0,0,0,5.1,30.586v6.359a.958.958,0,0,0,1,.9h.5V45.6a1.082,1.082,0,0,0-.381.812V46.5a.906.906,0,0,0,.937.9h4.041a.906.906,0,0,0,.937-.9v-.084A1.055,1.055,0,0,0,11.777,45.6ZM6.066,37.113c-.117,0-.234-.084-.234-.168v-.532h.732v.7Zm5.33,9.412a.2.2,0,0,1-.2.2H7.15a.2.2,0,0,1-.2-.2v-.112a.441.441,0,0,1,.439-.42H8.79a.357.357,0,0,0,.381.336.377.377,0,0,0,.381-.336h1.406a.441.441,0,0,1,.439.42Z"
                      transform="translate(-3.606 -20.089)"
                    ></path>
                    <path
                      id="Path_98"
                      data-name="Path 98"
                      d="M10.056,11.578a2.421,2.421,0,0,0,2.314,2.017,2.421,2.421,0,0,0,2.314-2.017h0a2.644,2.644,0,0,0,.029-2.885A2.825,2.825,0,0,0,12.37,7.6a2.716,2.716,0,0,0-2.343,1.092,2.7,2.7,0,0,0,.029,2.885Zm2.314,1.289a1.73,1.73,0,0,1-1.611-1.625c.029-.112.059-.252.088-.392l.088-.336c.029-.112.059-.2.088-.308a4.92,4.92,0,0,0,1.289.168,5.605,5.605,0,0,0,1.376-.168c.029.084.059.2.088.308l.088.336a2.393,2.393,0,0,1,.088.392A1.661,1.661,0,0,1,12.37,12.866Zm-1.728-3.81A2.039,2.039,0,0,1,12.37,8.3a2.039,2.039,0,0,1,1.728.756,1.259,1.259,0,0,1,.2.448,1.586,1.586,0,0,1,.059.392.974.974,0,0,0-.117-.252.381.381,0,0,0-.351-.224.182.182,0,0,0-.117.028,1.958,1.958,0,0,1-.381.112,3.477,3.477,0,0,1-1.084.112,5.687,5.687,0,0,1-1-.112,1.958,1.958,0,0,1-.381-.112.4.4,0,0,0-.469.2c-.029.084-.088.168-.117.252a1.815,1.815,0,0,1,.059-.392C10.5,9.365,10.554,9.2,10.642,9.057Z"
                      transform="translate(-6.806 -5.478)"
                    ></path>
                    <path
                      id="Path_99"
                      data-name="Path 99"
                      d="M61.389,31.022a2.7,2.7,0,0,0-.966-1.849,4.322,4.322,0,0,0-1.084-.672.426.426,0,0,0-.322,0,3.107,3.107,0,0,1-2.811,0,.384.384,0,0,0-.5.14.351.351,0,0,0,.146.476,3.857,3.857,0,0,0,1.757.42,3.809,3.809,0,0,0,1.581-.336,6.851,6.851,0,0,1,.761.476,2.145,2.145,0,0,1,.732,1.4l.527,5.014h-.879l-.439-3.81a.474.474,0,0,0-.439-.308.352.352,0,0,0-.322.392l.586,5.154H56.206a.365.365,0,1,0,0,.728H59.72L59.134,45.7H57.992V38.949a.381.381,0,0,0-.761,0V45.7H56.089l-.527-6.723a.405.405,0,0,0-.41-.336.4.4,0,0,0-.351.392l.556,6.835a1.039,1.039,0,0,0-.5,1.008,1.1,1.1,0,0,0,1.113.952h3.1a1.067,1.067,0,0,0,1.113-1.064,1.038,1.038,0,0,0-.351-.784l.615-7.7h.615a.94.94,0,0,0,1-.9v-.028ZM59.046,47.1H55.971a.388.388,0,0,1-.381-.336.327.327,0,0,1,.234-.364.846.846,0,0,1,.264-.028H57.2a.357.357,0,0,0,.381.336.377.377,0,0,0,.381-.336H59.1a.292.292,0,0,1,.322.336A.365.365,0,0,1,59.046,47.1Zm2.021-9.58h-.586l-.088-.7h.849l.059.532C61.3,37.465,61.184,37.521,61.067,37.521Z"
                      transform="translate(-38.752 -20.496)"
                    ></path>
                    <path
                      id="Path_100"
                      data-name="Path 100"
                      d="M75.612,67.192a.382.382,0,0,0-.41.336l-.41,4.93a.376.376,0,0,0,.351.392h.029a.376.376,0,0,0,.381-.336l.41-4.93A.362.362,0,0,0,75.612,67.192Z"
                      transform="translate(-52.887 -48.375)"
                      fill="#61c4f2"
                    ></path>
                    <path
                      id="Path_101"
                      data-name="Path 101"
                      d="M34.335,6.769A2.724,2.724,0,0,0,36.942,3.94a3.069,3.069,0,0,0-.322-1.373A2.484,2.484,0,0,0,36.737.242a.346.346,0,0,0-.2-.2.521.521,0,0,0-.293,0,4.107,4.107,0,0,1-1.23.364A4.86,4.86,0,0,1,33.9.41a2.208,2.208,0,0,0-1.259.112,2.522,2.522,0,0,0-1.318,1.513,2.451,2.451,0,0,0,.469,2.1A2.67,2.67,0,0,0,34.335,6.769Zm0-.728A1.968,1.968,0,0,1,32.49,4.024V3.856h0a1.873,1.873,0,0,1,.146-.9,3.541,3.541,0,0,1,.293-.476,2.89,2.89,0,0,0,1.962.784A2.4,2.4,0,0,0,36,3.015a2.334,2.334,0,0,1,.176.9A1.978,1.978,0,0,1,34.335,6.041Zm-2.314-3.81a1.792,1.792,0,0,1,.908-1.036A.928.928,0,0,1,33.4,1.11c.117,0,.264.028.41.028a4.869,4.869,0,0,0,1.289,0A5.146,5.146,0,0,0,36.18.858,1.383,1.383,0,0,1,35.946,2.2h0l-.029.028a1.374,1.374,0,0,1-.966.308,2.263,2.263,0,0,1-1.728-.784.4.4,0,0,0-.264-.14A.421.421,0,0,0,32.7,1.7a2.97,2.97,0,0,0-.761.98h0A2.973,2.973,0,0,1,32.022,2.231Z"
                      transform="translate(-22.094 -0.025)"
                    ></path>
                    <path
                      id="Path_102"
                      data-name="Path 102"
                      d="M34.712,34.333c.029,0,.059-.028.088-.028s.059-.028.088-.028.029-.028.059-.028a.89.89,0,0,0,.556-.784V25.817a2.923,2.923,0,0,0-2.46-2.745.422.422,0,0,0-.322.056,2.767,2.767,0,0,1-3.339,0,.422.422,0,0,0-.322-.056,2.918,2.918,0,0,0-2.46,2.745v7.647a.9.9,0,0,0,.556.812.028.028,0,0,1,.029.028c.029,0,.059.028.117.028.029,0,.059.028.088.028h.674V42.12a1.082,1.082,0,0,0-.381.812v.084a.906.906,0,0,0,.937.9h4.832a.906.906,0,0,0,.937-.9v-.084a1.038,1.038,0,0,0-.381-.812V34.361h.556A.331.331,0,0,1,34.712,34.333ZM29.089,23.8a3.616,3.616,0,0,0,1.991.616,3.469,3.469,0,0,0,1.991-.616A2.184,2.184,0,0,1,34.8,25.817V32.2h-.761V26.181a.381.381,0,0,0-.761,0V32.2H28.826V26.181a.381.381,0,0,0-.761,0V32.2h-.732V25.817A2.181,2.181,0,0,1,29.089,23.8ZM27.6,33.632c-.117,0-.234-.084-.234-.168v-.532h.732v.7Zm6.062,9.412a.2.2,0,0,1-.2.2h-4.8a.2.2,0,0,1-.2-.2v-.2a.437.437,0,0,1,.439-.364h1.786a.381.381,0,0,0,.761,0h1.786a.415.415,0,0,1,.439.364v.2Zm-.439-1.233H31.432V34.7a.381.381,0,0,0-.761,0v7.115H28.8V32.96h4.451v8.852Zm.82-8.18v-.7h.732v.532c0,.084-.117.168-.234.168Z"
                      transform="translate(-18.81 -16.608)"
                    ></path>
                    <path
                      id="Path_103"
                      data-name="Path 103"
                      d="M59.3,10.343a1.4,1.4,0,0,1-.351-.364,2.278,2.278,0,0,1-.469-1.345,4.391,4.391,0,0,0-.5-1.681,2.756,2.756,0,0,0-.879-1.064,3.245,3.245,0,0,0-2.226-.476,3.1,3.1,0,0,0-2.226.476,2.756,2.756,0,0,0-.879,1.064,4.391,4.391,0,0,0-.5,1.681,3.03,3.03,0,0,1-.264,1.008.363.363,0,0,0,.176.476.4.4,0,0,0,.5-.168,3.881,3.881,0,0,0,.322-1.2,3.92,3.92,0,0,1,.41-1.457,2.331,2.331,0,0,1,.644-.812,2.508,2.508,0,0,1,1.728-.336h.117a2.508,2.508,0,0,1,1.728.336,2.035,2.035,0,0,1,.644.812,3.784,3.784,0,0,1,.41,1.457,3.039,3.039,0,0,0,.615,1.653,3.419,3.419,0,0,0,.322.336,1.384,1.384,0,0,1-.322.56,1.864,1.864,0,0,1-.615.42.317.317,0,0,0-.205.448.381.381,0,0,0,.351.224.182.182,0,0,0,.117-.028,2.243,2.243,0,0,0,.908-.616,2.015,2.015,0,0,0,.527-1.12C59.451,10.539,59.392,10.427,59.3,10.343Z"
                      transform="translate(-36.052 -3.879)"
                    ></path>
                    <path
                      id="Path_104"
                      data-name="Path 104"
                      d="M58.967,10.047a.416.416,0,0,0-.527.084,5.889,5.889,0,0,1-1.523,1.513,5.2,5.2,0,0,1-1.025.56.354.354,0,0,0-.176.476.343.343,0,0,0,.322.2,2.427,2.427,0,0,0,2.167,2.269,2.379,2.379,0,0,0,2.138-2.129.182.182,0,0,0,.117.028.381.381,0,0,0,.351-.224.353.353,0,0,0-.2-.476,4.421,4.421,0,0,1-1.171-.7,5.644,5.644,0,0,1-.732-.7c.117-.14.234-.308.351-.448C59.172,10.383,59.114,10.159,58.967,10.047Zm0,2.213a5.524,5.524,0,0,0,.674.448c-.117,1.008-.732,1.737-1.464,1.737-.7,0-1.318-.756-1.464-1.737,0-.028-.029-.084-.029-.112.2-.112.41-.252.615-.392a6.869,6.869,0,0,0,.849-.7C58.44,11.784,58.7,12.036,58.967,12.26Z"
                      transform="translate(-39.376 -7.197)"
                    ></path>
                    <path
                      id="Path_105"
                      data-name="Path 105"
                      d="M.937,30.415a.4.4,0,0,0-.5.168A3.759,3.759,0,0,0,0,32.348v6.359a.381.381,0,0,0,.761,0V32.376a3.152,3.152,0,0,1,.351-1.457A.4.4,0,0,0,.937,30.415Z"
                      transform="translate(0 -21.879)"
                      fill="#61c4f2"
                    ></path>
                    <ellipse
                      id="Ellipse_5"
                      data-name="Ellipse 5"
                      cx="0.41"
                      cy="0.392"
                      rx="0.41"
                      ry="0.392"
                      transform="translate(0.908 7.556)"
                      fill="#61c4f2"
                    ></ellipse>
                    <ellipse
                      id="Ellipse_6"
                      data-name="Ellipse 6"
                      cx="0.41"
                      cy="0.392"
                      rx="0.41"
                      ry="0.392"
                      transform="translate(21.818 24.728)"
                      fill="#61c4f2"
                    ></ellipse>
                  </g>
                </g>
              </svg>
            </div>
            <div className="au-cont-p">
              <h3>
                1,8k Administrative <br />
                Staff
              </h3>
              <div className="dash"></div>
              <p>
                VUS employs around 1,800 administrative and support staff
                including large HR and Academic teams dedicated to supporting
                our teachers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="why-teach-container">
        <Contentheader
          classname="why-teach-header"
          head="WHY TEACH ENGLISH AT VUS"
          body="VUS genuinely values the hard work of their teachers with the salary and benefits we offer, reflecting this."
        />
        <div className="why-teach-content">
          <Contentbody
            bgurl="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTgiIGhlaWdodD0iNzYiIHZpZXdCb3g9IjAgMCAyNTggNzYiPjxnIGlkPSJHcm91cF8xMzYiIGRhdGEtbmFtZT0iR3JvdXAgMTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTYxIC05OTUpIj48cmVjdCBpZD0iUmVjdGFuZ2xlXzQ1IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA0NSIgd2lkdGg9IjI1OCIgaGVpZ2h0PSIzMyIgcng9IjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk2MSA5OTUpIiBmaWxsPSIjZmNlZWU1Ij48L3JlY3Q+PHBhdGggaWQ9IlBvbHlnb25fMTMiIGRhdGEtbmFtZT0iUG9seWdvbiAxMyIgZD0iTTEyNC41LDAsMjQ5LDQzSDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjE1IDEwNzEpIHJvdGF0ZSgxODApIiBmaWxsPSJyZ2JhKDI1MSwxMTIsNSwwLjEpIj48L3BhdGg+PC9nPjwvc3ZnPg=="
            classname="wt-cont"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
              >
                <g
                  id="Group_10108"
                  data-name="Group 10108"
                  transform="translate(-158 -1565)"
                >
                  <rect
                    id="Rectangle_28"
                    data-name="Rectangle 28"
                    width="64"
                    height="64"
                    rx="32"
                    transform="translate(158 1565)"
                    fill="#fff"
                  ></rect>
                  <g
                    id="Layer_2"
                    data-name="Layer 2"
                    transform="translate(175 1575)"
                  >
                    <g id="Слой_1" data-name="Слой 1">
                      <rect
                        id="Rectangle_3987"
                        data-name="Rectangle 3987"
                        width="1.356"
                        height="5.151"
                        transform="translate(12.193 14.994)"
                        fill="#858e37"
                      ></rect>
                      <path
                        id="Path_39378"
                        data-name="Path 39378"
                        d="M210.559,0,200.92,9.642l-.014.014L199.4,11.167h0l-2.662,2.663,0,0-2.105,2.105h0l-1.2,1.2a7.306,7.306,0,0,1-2.058-3.963,8.371,8.371,0,0,1,.8-5.092,7.26,7.26,0,0,1,2.87,5.092V4.556a13.014,13.014,0,0,1,3.8-2.088C202.9,1.021,205.83,1.591,210.559,0Z"
                        transform="translate(-180.554)"
                        fill="#9bac3a"
                      ></path>
                      <path
                        id="Path_39379"
                        data-name="Path 39379"
                        d="M244.666,11.725c-2.7,7.592-10.432,9.642-14.666,5.409L247.136,0C245.545,4.73,246.114,7.656,244.666,11.725Z"
                        transform="translate(-217.131)"
                        fill="#9bac3a"
                      ></path>
                      <path
                        id="Path_39380"
                        data-name="Path 39380"
                        d="M338.753,76.75s.924,3.848-.589,5.361l-1.514,1.514S338.8,79.292,338.753,76.75Z"
                        transform="translate(-317.814 -72.456)"
                        fill="#b3d234"
                      ></path>
                      <path
                        id="Path_39381"
                        data-name="Path 39381"
                        d="M254.286,113.89s1.287,5.357-.82,7.463l-2.106,2.107S254.356,117.429,254.286,113.89Z"
                        transform="translate(-237.296 -107.518)"
                        fill="#b3d234"
                      ></path>
                      <path
                        id="Path_39382"
                        data-name="Path 39382"
                        d="M343.525,157.333s-3.848-.924-5.361.589l-1.514,1.514S340.983,157.283,343.525,157.333Z"
                        transform="translate(-317.814 -148.266)"
                        fill="#b3d234"
                      ></path>
                      <path
                        id="Path_39383"
                        data-name="Path 39383"
                        d="M260.929,226.062s-5.356-1.287-7.463.819l-2.106,2.107S257.39,225.992,260.929,226.062Z"
                        transform="translate(-237.296 -213.046)"
                        fill="#b3d234"
                      ></path>
                      <path
                        id="Path_39384"
                        data-name="Path 39384"
                        d="M210.39,81.46v8.617a7.271,7.271,0,0,0-2.87-5.092A10.476,10.476,0,0,1,210.39,81.46Z"
                        transform="translate(-195.909 -76.902)"
                        fill="#819139"
                      ></path>
                      <path
                        id="Path_39385"
                        data-name="Path 39385"
                        d="M8.806,85.854C5.751,84.766,3.552,85.195,0,84H0c1.2,3.552.767,5.751,1.855,8.807,2.031,5.7,7.836,7.242,11.014,4.062h0C16.053,93.687,14.506,87.877,8.806,85.854Z"
                        transform="translate(0 -79.3)"
                        fill="#b3d234"
                      ></path>
                      <path
                        id="Path_39386"
                        data-name="Path 39386"
                        d="M118.173,141.63s-.695,2.891.442,4.029l1.137,1.137S118.132,143.54,118.173,141.63Z"
                        transform="translate(-111.362 -133.706)"
                        fill="#9bac3a"
                      ></path>
                      <path
                        id="Path_39387"
                        data-name="Path 39387"
                        d="M169.8,169.53s-.967,4.023.615,5.605l1.582,1.583S169.743,172.186,169.8,169.53Z"
                        transform="translate(-160.019 -160.044)"
                        fill="#9bac3a"
                      ></path>
                      <path
                        id="Path_39388"
                        data-name="Path 39388"
                        d="M57.64,202.156s2.89-.694,4.029.442l1.137,1.137S59.55,202.117,57.64,202.156Z"
                        transform="translate(-54.415 -190.647)"
                        fill="#9bac3a"
                      ></path>
                      <path
                        id="Path_39389"
                        data-name="Path 39389"
                        d="M85.54,253.776s4.024-.967,5.606.615l1.582,1.583S88.2,253.723,85.54,253.776Z"
                        transform="translate(-80.754 -239.3)"
                        fill="#9bac3a"
                      ></path>
                      <path
                        id="Path_39390"
                        data-name="Path 39390"
                        d="M67.187,339.76V365.4A1.191,1.191,0,0,1,66,364.211v-.06c-.019,0-.036-.006-.054-.007a.293.293,0,0,1-.01.06,1.191,1.191,0,1,1-2.325-.5.293.293,0,0,1,.015-.059l-.051-.016c-.008.018-.014.038-.024.056a1.191,1.191,0,1,1-2.177-.969c.009-.019.019-.037.029-.056-.015-.009-.031-.017-.046-.027-.013.018-.022.036-.034.053a1.192,1.192,0,1,1-1.927-1.4c.012-.016.026-.033.04-.049-.014-.011-.028-.023-.041-.036l-.044.044a1.193,1.193,0,0,1-1.6-1.77.6.6,0,0,1,.049-.04c-.011-.015-.021-.03-.031-.045-.018.012-.036.025-.054.036a1.192,1.192,0,0,1-1.191-2.065.567.567,0,0,1,.054-.027c-.006-.018-.014-.034-.021-.051-.019.008-.038.016-.057.022a1.191,1.191,0,0,1-.737-2.266c.019-.007.039-.011.059-.017,0-.017-.008-.035-.012-.053-.019,0-.038.007-.059.009a1.192,1.192,0,1,1-.25-2.371h.061v-.057H55.5a1.192,1.192,0,1,1,.25-2.371.365.365,0,0,1,.059.009c0-.018.009-.036.012-.054-.019-.005-.039-.009-.059-.016a1.192,1.192,0,1,1,.737-2.267l.057.021c.007-.016.014-.033.021-.049-.017-.009-.036-.017-.054-.027a1.192,1.192,0,1,1,1.191-2.065c.019.011.036.024.054.034.011-.014.02-.029.031-.044-.016-.013-.033-.025-.049-.04a1.192,1.192,0,1,1,1.6-1.77c.015.014.029.029.044.043l.041-.036c-.014-.015-.028-.031-.04-.048a1.192,1.192,0,0,1,1.927-1.4c.012.018.024.036.034.054l.046-.027c-.009-.019-.019-.037-.028-.056a1.191,1.191,0,1,1,2.177-.969c.009.019.015.038.022.057l.052-.018a.553.553,0,0,1-.016-.059,1.191,1.191,0,0,1,2.331-.5c0,.02.007.041.01.06a.34.34,0,0,0,.054-.007v-.06A1.192,1.192,0,0,1,67.187,339.76Z"
                        transform="translate(-54.236 -321.292)"
                        fill="#faa819"
                      ></path>
                      <path
                        id="Path_39391"
                        data-name="Path 39391"
                        d="M245.92,353.922a1.189,1.189,0,0,1-1.308,1.059.435.435,0,0,1-.061-.009.337.337,0,0,1-.011.053c.019.006.039.01.057.017a1.191,1.191,0,1,1-.732,2.267c-.021-.007-.039-.015-.057-.022-.009.016-.015.033-.024.049l.055.027a1.192,1.192,0,0,1-1.191,2.065c-.019-.011-.036-.024-.054-.036l-.031.045a.364.364,0,0,1,.048.04,1.191,1.191,0,1,1-1.594,1.77c-.016-.014-.03-.029-.044-.043l-.042.036a.61.61,0,0,1,.039.048,1.192,1.192,0,1,1-1.927,1.4c-.012-.018-.023-.036-.034-.053l-.048.027c.009.019.021.037.029.056a1.193,1.193,0,1,1-2.18.969c-.009-.018-.015-.038-.021-.056l-.052.016c.006.021.011.039.015.059a1.192,1.192,0,1,1-2.331.5.408.408,0,0,0-.009-.06.385.385,0,0,0-.055.007c0,.019,0,.039,0,.06a1.192,1.192,0,0,1-1.191,1.191V339.76a1.192,1.192,0,0,1,1.191,1.191v.06c.018,0,.036.006.054.007,0-.019.006-.04.009-.06a1.192,1.192,0,1,1,2.331.5c0,.02-.009.039-.015.058l.052.018a.552.552,0,0,1,.021-.057,1.191,1.191,0,1,1,2.177.969c-.008.019-.019.039-.029.056l.048.027c.011-.018.021-.036.034-.052a1.191,1.191,0,1,1,1.927,1.4c-.012.016-.026.033-.039.049.014.012.029.023.042.036a.361.361,0,0,1,.044-.044,1.191,1.191,0,1,1,1.594,1.77c-.015.014-.031.027-.047.04.009.015.02.03.031.045a.332.332,0,0,1,.052-.034,1.191,1.191,0,0,1,1.191,2.064c-.018.01-.036.018-.054.027.007.016.015.033.022.051a.364.364,0,0,1,.057-.021,1.191,1.191,0,1,1,.735,2.266c-.019.006-.038.011-.057.016a.287.287,0,0,0,.012.054.551.551,0,0,0,.058-.009,1.192,1.192,0,1,1,.25,2.371H244.8v.054h.061A1.193,1.193,0,0,1,245.92,353.922Z"
                        transform="translate(-220.219 -321.292)"
                        fill="#f58a1f"
                      ></path>
                      <path
                        id="Path_39392"
                        data-name="Path 39392"
                        d="M110.086,386.058A10.248,10.248,0,1,1,99.838,375.81a10.248,10.248,0,0,1,10.248,10.248Z"
                        transform="translate(-86.888 -354.769)"
                        fill="#ffc708"
                      ></path>
                      <path
                        id="Path_39393"
                        data-name="Path 39393"
                        d="M180.526,429.853a5.16,5.16,0,0,0-2.594-1.114l-1.2-.243a3.158,3.158,0,0,1-1.186-.42.811.811,0,0,1-.326-.686.931.931,0,0,1,.485-.867,3.085,3.085,0,0,1,1.5-.278,6.963,6.963,0,0,1,1.624.206,10.042,10.042,0,0,1,1.76.608v-2.316a17.066,17.066,0,0,0-1.974-.409c-.192-.026-.379-.041-.571-.061V423h-2.116v1.249a4.062,4.062,0,0,0-2.206.834,3.082,3.082,0,0,0-1.055,2.515,2.826,2.826,0,0,0,.759,2.076,4.709,4.709,0,0,0,2.4,1.121l1.091.242a3.345,3.345,0,0,1,1.333.5.967.967,0,0,1,.333.791.98.98,0,0,1-.491.88,2.666,2.666,0,0,1-1.414.309,6.748,6.748,0,0,1-1.889-.285,10.52,10.52,0,0,1-2.027-.842v2.383a12.932,12.932,0,0,0,2.1.586,10.756,10.756,0,0,0,1.071.149v1.254h2.113v-1.271a4.182,4.182,0,0,0,2.185-.819,3.284,3.284,0,0,0,1.074-2.694A2.832,2.832,0,0,0,180.526,429.853Z"
                        transform="translate(-164.028 -398.591)"
                        fill="#fcee3b"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            }
            head="HIGHLY COMPETITIVE SALARY"
            body="The VUS hourly rate offers teachers the opportunity to not only live comfortably but also save for the future."
          />
          <Contentbody
            bgurl="https://teachenglish.vus.edu.vn/wp-content/uploads/2021/12/Group-140.svg"
            classname="wt-cont"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
              >
                <g
                  id="Group_10084"
                  data-name="Group 10084"
                  transform="translate(-457 -1566)"
                >
                  <rect
                    id="Rectangle_3979"
                    data-name="Rectangle 3979"
                    width="64"
                    height="64"
                    rx="32"
                    transform="translate(457 1566)"
                    fill="#fff"
                  ></rect>
                  <g id="Passport" transform="translate(400.19 1565)">
                    <g
                      id="Group_10075"
                      data-name="Group 10075"
                      transform="translate(74.81 16)"
                    >
                      <path
                        id="Path_39348"
                        data-name="Path 39348"
                        d="M154.229,49.943H129.543A1.543,1.543,0,0,1,128,48.4V17.543A1.543,1.543,0,0,1,129.543,16h24.686a1.543,1.543,0,0,1,1.543,1.543V48.4A1.543,1.543,0,0,1,154.229,49.943Z"
                        transform="translate(-128 -16)"
                        fill="#d6332c"
                      ></path>
                    </g>
                    <g
                      id="Group_10076"
                      data-name="Group 10076"
                      transform="translate(74.81 16)"
                    >
                      <path
                        id="Path_39349"
                        data-name="Path 39349"
                        d="M152.686,49.943H129.543A1.543,1.543,0,0,1,128,48.4V17.543A1.543,1.543,0,0,1,129.543,16h23.143a1.543,1.543,0,0,1,1.543,1.543V48.4A1.543,1.543,0,0,1,152.686,49.943Z"
                        transform="translate(-128 -16)"
                        fill="#a5c3dc"
                      ></path>
                    </g>
                    <g
                      id="Group_10077"
                      data-name="Group 10077"
                      transform="translate(74.81 16)"
                    >
                      <path
                        id="Path_39350"
                        data-name="Path 39350"
                        d="M151.143,49.943h-21.6A1.543,1.543,0,0,1,128,48.4V17.543A1.543,1.543,0,0,1,129.543,16h21.6a1.543,1.543,0,0,1,1.543,1.543V48.4A1.543,1.543,0,0,1,151.143,49.943Z"
                        transform="translate(-128 -16)"
                        fill="#f04938"
                      ></path>
                    </g>
                    <path
                      id="Path_39351"
                      data-name="Path 39351"
                      d="M176.486,64a8.486,8.486,0,1,0,8.486,8.486A8.5,8.5,0,0,0,176.486,64Zm6.9,7.714h-3.058a15.3,15.3,0,0,0-.944-4.97q-.151-.377-.321-.705A6.961,6.961,0,0,1,183.386,71.714Zm-6.9,7.714c-.885,0-2.146-2.379-2.3-6.171h4.6C178.631,77.049,177.371,79.429,176.486,79.429Zm-2.3-7.714c.153-3.792,1.414-6.171,2.3-6.171s2.146,2.379,2.3,6.171Zm-.279-5.675q-.169.328-.32.705a15.3,15.3,0,0,0-.944,4.97h-3.058A6.961,6.961,0,0,1,173.908,66.039Zm-4.323,7.218h3.058a15.3,15.3,0,0,0,.944,4.97q.151.377.32.705A6.961,6.961,0,0,1,169.585,73.257Zm9.478,5.675q.17-.328.321-.705a15.3,15.3,0,0,0,.944-4.97h3.058A6.961,6.961,0,0,1,179.063,78.933Z"
                      transform="translate(-89.333 -43.371)"
                      fill="#faa019"
                    ></path>
                    <g
                      id="Group_10082"
                      data-name="Group 10082"
                      transform="translate(80.981 42.229)"
                    >
                      <path
                        id="Path_39356"
                        data-name="Path 39356"
                        d="M202.8,288h-9.257A1.543,1.543,0,0,0,192,289.543h0a1.543,1.543,0,0,0,1.543,1.543H202.8a1.543,1.543,0,0,0,1.543-1.543h0A1.543,1.543,0,0,0,202.8,288Z"
                        transform="translate(-192 -288)"
                        fill="#faa019"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            }
            head="FULL VISA/WORK PERMIT SUPPORT"
            body="Work Permit and Visa/TRC obtained for every expat teacher. Reimbursement to all teachers for authentication fees. "
          />
          <Contentbody
            bgurl="https://teachenglish.vus.edu.vn/wp-content/uploads/2021/12/Group-142.svg"
            classname="wt-cont"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
              >
                <g
                  id="Group_10085"
                  data-name="Group 10085"
                  transform="translate(-758 -1562)"
                >
                  <path
                    id="Path_39457"
                    data-name="Path 39457"
                    d="M32,0A32,32,0,1,1,0,32,32,32,0,0,1,32,0Z"
                    transform="translate(758 1562)"
                    fill="#fff"
                  ></path>
                  <g
                    id="_05-Champion"
                    data-name="05-Champion"
                    transform="translate(769 1576)"
                  >
                    <path
                      id="Path_39361"
                      data-name="Path 39361"
                      d="M33.738,57v3.326H16V57H33.738Z"
                      transform="translate(-4.011 -24.959)"
                      fill="#c73e36"
                    ></path>
                    <path
                      id="Path_39362"
                      data-name="Path 39362"
                      d="M33.412,49v4.434H19V49H33.412Z"
                      transform="translate(-5.348 -21.394)"
                      fill="#fa7a31"
                    ></path>
                    <path
                      id="Path_39363"
                      data-name="Path 39363"
                      d="M32.76,12.965,30.82,14.95l.46,2.81-2.4-1.325-2.4,1.325.46-2.81L25,12.965l2.683-.41L28.88,10l1.2,2.555Z"
                      transform="translate(-8.023 -4.011)"
                      fill="#fff"
                    ></path>
                    <rect
                      id="Rectangle_3982"
                      data-name="Rectangle 3982"
                      width="16"
                      height="2"
                      transform="translate(13 1.366)"
                      fill="#ffab02"
                    ></rect>
                    <path
                      id="Path_39364"
                      data-name="Path 39364"
                      d="M12.543,14.423V7.771H8.663v3.88a2.771,2.771,0,0,0,2.771,2.771Zm17.738,0a2.771,2.771,0,0,0,2.771-2.771V7.771h-3.88v6.652Zm4.434-8.314v5.543a4.434,4.434,0,0,1-4.434,4.434H29.006a8.314,8.314,0,0,1-5.925,6.347,14.63,14.63,0,0,0,2.212,6.956H16.423a14.63,14.63,0,0,0,2.212-6.956,8.314,8.314,0,0,1-5.925-6.347H11.434A4.434,4.434,0,0,1,7,11.652V6.109h5.543V5H29.172V6.109ZM22.8,12.721l1.94-1.984-2.683-.41-1.2-2.555-1.2,2.555-2.683.41,1.94,1.984-.46,2.81,2.4-1.325,2.4,1.325Z"
                      transform="translate(0 -1.783)"
                      fill="#ffcb02"
                    ></path>
                    <path
                      id="Path_39365"
                      data-name="Path 39365"
                      d="M15.869,14.423V5H12.543V6.109H7v5.543a4.434,4.434,0,0,0,4.434,4.434h1.275a8.314,8.314,0,0,0,5.925,6.347,14.63,14.63,0,0,1-2.212,6.956h8.869a14.584,14.584,0,0,1-2.2-6.731,8.311,8.311,0,0,1-7.225-8.235Zm-3.326,0H11.434a2.771,2.771,0,0,1-2.771-2.771V7.771h3.88Z"
                      transform="translate(0 -1.783)"
                      fill="#ffab02"
                    ></path>
                    <path
                      id="Path_39366"
                      data-name="Path 39366"
                      d="M46.866,7V8.663h3.88v3.88a2.771,2.771,0,0,1-2.771,2.771H46.866a8.37,8.37,0,0,1-.166,1.671v-.008h1.275a4.434,4.434,0,0,0,4.434-4.434V7Z"
                      transform="translate(-17.694 -2.674)"
                      fill="#ffab02"
                    ></path>
                    <path
                      id="Path_39367"
                      data-name="Path 39367"
                      d="M11.434,15.314a2.771,2.771,0,0,1-2.771-2.771V8.663h3.88V7H7v5.543a4.434,4.434,0,0,0,4.434,4.434h1.275v.008a8.37,8.37,0,0,1-.166-1.671Z"
                      transform="translate(0 -2.674)"
                      fill="#ff8502"
                    ></path>
                    <path
                      id="Path_39368"
                      data-name="Path 39368"
                      d="M17,1V3.217H33.629V2.109H21.434A1.109,1.109,0,0,1,20.326,1Z"
                      transform="translate(-4.457)"
                      fill="#ff9102"
                    ></path>
                    <path
                      id="Path_39369"
                      data-name="Path 39369"
                      d="M19,49v4.434H33.412V51.771H22.88a1.663,1.663,0,0,1-1.663-1.663V49Z"
                      transform="translate(-5.348 -21.394)"
                      fill="#fe4f46"
                    ></path>
                    <path
                      id="Path_39370"
                      data-name="Path 39370"
                      d="M16,57v3.326H33.738V59.217H19.88a1.663,1.663,0,0,1-1.663-1.663V57Z"
                      transform="translate(-4.011 -24.959)"
                      fill="#ad362f"
                    ></path>
                    <rect
                      id="Rectangle_3983"
                      data-name="Rectangle 3983"
                      width="6"
                      height="1"
                      rx="0.5"
                      transform="translate(18 29.366)"
                      fill="#fff"
                    ></rect>
                    <path
                      id="Path_39371"
                      data-name="Path 39371"
                      d="M50.431,18.062a3.855,3.855,0,0,1,.449,1.818V31.52L49.217,29.3,47.554,31.52V19.326H47V16a3.89,3.89,0,0,1,3.431,2.062Z"
                      transform="translate(-17.828 -6.686)"
                      fill="#9c59a9"
                    ></path>
                    <path
                      id="Path_39372"
                      data-name="Path 39372"
                      d="M10.449,18.062A3.89,3.89,0,0,1,13.88,16v3.326h-.554V31.52L11.663,29.3,10,31.52V19.88a3.855,3.855,0,0,1,.449-1.818Z"
                      transform="translate(-1.337 -6.686)"
                      fill="#9c59a9"
                    ></path>
                    <path
                      id="Path_39373"
                      data-name="Path 39373"
                      d="M50.326,18.217H50.5c-.024-.052-.044-.105-.071-.155A3.89,3.89,0,0,0,47,16v3.326h.554V31.52L49.217,29.3V19.326A1.109,1.109,0,0,1,50.326,18.217Z"
                      transform="translate(-17.828 -6.686)"
                      fill="#774e9d"
                    ></path>
                    <path
                      id="Path_39374"
                      data-name="Path 39374"
                      d="M10.753,18.062c-.027.05-.047.1-.071.155h.176a1.109,1.109,0,0,1,1.109,1.109V29.3L13.63,31.52V19.326h.554V16A3.89,3.89,0,0,0,10.753,18.062Z"
                      transform="translate(-1.641 -6.686)"
                      fill="#774e9d"
                    ></path>
                  </g>
                </g>
              </svg>
            }
            head="TEACHING AWARDS AND PRIZES"
            body="A grand award event for teachers held every year and hundreds winning a lavish annual teachers trip to the beach. "
          />
          <Contentbody
            bgurl="https://teachenglish.vus.edu.vn/wp-content/uploads/2021/12/Group-10079.svg"
            classname="wt-cont"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
              >
                <g
                  id="Group_10086"
                  data-name="Group 10086"
                  transform="translate(-1057 -1562)"
                >
                  <rect
                    id="Rectangle_3981"
                    data-name="Rectangle 3981"
                    width="64"
                    height="64"
                    rx="32"
                    transform="translate(1057 1562)"
                    fill="#fff"
                  ></rect>
                  <g id="gift" transform="translate(1066 1571)">
                    <path
                      id="Path_39357"
                      data-name="Path 39357"
                      d="M36.376,40.7H9.892A1.9,1.9,0,0,1,8,38.809V18H38.268V38.809A1.9,1.9,0,0,1,36.376,40.7Z"
                      transform="translate(-0.108 -0.65)"
                      fill="#d32f2f"
                    ></path>
                    <path
                      id="Path_39358"
                      data-name="Path 39358"
                      d="M40.051,19.567H6V13.892A1.9,1.9,0,0,1,7.892,12H38.16a1.9,1.9,0,0,1,1.892,1.892Z"
                      transform="translate(0 -0.325)"
                      fill="#f44336"
                    ></path>
                    <path
                      id="Path_39359"
                      data-name="Path 39359"
                      d="M22,19.242h3.783V40.051H22ZM31.459,6H27.675L22,11.675h3.783Z"
                      transform="translate(-0.866 0)"
                      fill="#ff8f00"
                    ></path>
                    <path
                      id="Path_39360"
                      data-name="Path 39360"
                      d="M19.783,6H16l5.675,5.675v7.567h3.783V11.675Z"
                      transform="translate(-0.541 0)"
                      fill="#ffc107"
                    ></path>
                  </g>
                </g>
              </svg>
            }
            head="TRAVEL /LOCATION BONUSES"
            body="Some great location bonuses offered with all FT teachers receiving annual bonuses worth over a month's pay."
          />
        </div>
      </div>
      <div className="teacher-say-container">
        <Contentheader
          head="WHAT OUR TEACHER SAYS"
          body="VUS values and respects the work our teachers put in and the salary and benefits reflect this."
        />
        <div className="teacher-say-content">
          <div className="teacher-slider">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={1}
              slidesPerView={1}
              navigation
              pagination={{
                clickable: true,
              }}
              loop={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <SwiperSlide>
                <ContentSlider
                  classname="tslide"
                  body="Since arriving in Vietnam and joining VUS in early 2015, I have been supported every step of the way by a fantastic team of managers, teachers, support staff, and baumwolldecke. I’ve had the pleasure of working with some amazing teachers and teaching assistants who have made teaching in Vietnam an easy and thoroughly enjoyable experience! My personal highlights include the annual VUS Super Summer camps, taking part in the inter-campus football competition, and the teachers’ away days to various resorts around Vietnam!"
                  timg="https://teachenglish.vus.edu.vn/wp-content/uploads/2022/01/sebatian@2x.png"
                  tname="Mr. Sebastian Smith"
                  ttype="EXPATRIATE TEACHER"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ContentSlider
                  classname="tslide"
                  body="I treasure not only my lovely students and friendly colleagues but also VUS’s caring and humane orientation. VUS teachers not only help students improve their English, but they are also their 'big friends’. I'm very impressed with the way VUS assists every teacher. Most importantly, VUS’s training sessions help us enhance our teaching skills, and inspire us to exceed our potential. You will never feel alone working at VUS "
                  timg="https://teachenglish.vus.edu.vn/wp-content/uploads/2022/03/vn-test.png"
                  tname="Mr. Võ Tiến Phát"
                  ttype="VIETNAMESE TEACHER"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ContentSlider
                  classname="tslide"
                  body="Working at VUS has been a wonderful journey. I have become a better version of myself, both as an educator and as a friend to the students of different ages. I will not be able to do it without my friendly, enthusiastic colleagues as well as my beloved students."
                  timg="https://teachenglish.vus.edu.vn/wp-content/uploads/2022/04/Group-12806.png"
                  tname="Ms. Kim Anh"
                  ttype="TEACHING ASSISTANT"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="position-container">
        <Contentheader
          classname="position-header"
          head="English Teaching Positions in Vietnam"
          body="For one of the best English teaching jobs in Vietnam, look no further than VUS."
        />
        <div className="position-content">
          <div className="pos-cont">
            <div className="pos-img">
              <img
                src="https://teachenglish.vus.edu.vn/wp-content/uploads/2022/04/Group-12811@2x.jpg"
                alt=""
              />
            </div>
            <div className="pos-p">
              <h3>VIETNAMESE TEACHERS</h3>
              <button>LEARN MORE</button>
            </div>
          </div>

          <div className="pos-cont">
            <div className="pos-img">
              <img
                src="https://teachenglish.vus.edu.vn/wp-content/uploads/2022/04/Group-12815@2x.jpg"
                alt=""
              />
            </div>
            <div className="pos-p">
              <h3>EXPATRIATE TEACHERS</h3>
              <button>LEARN MORE</button>
            </div>
          </div>

          <div className="pos-cont">
            <div className="pos-img">
              <img
                src="https://teachenglish.vus.edu.vn/wp-content/uploads/2022/04/Group-12816@2x.jpg"
                alt=""
              />
            </div>
            <div className="pos-p">
              <h3>TEACHING ASSITANTS</h3>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-p">
            <p className="contact-p-head">Let’s stay in touch</p>
            <p className="contact-p-body">
              Subscribe to our newsletter to receive job alerts and latest news.
            </p>
          </div>
          <div className="contact-input">
            <input type="text" placeholder="Enter you email" />
            <button>Send</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
