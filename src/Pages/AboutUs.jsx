import Header from "./Header";
import Footer from "./Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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

export default function AboutUs() {
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
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}