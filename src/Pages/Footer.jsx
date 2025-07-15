import React from "react";
import { Link } from "react-router-dom";

function StyleLink(props) {
  const styles = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <Link style={styles} to={props.to} target={props.target}>
      {props.el}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "#ba141a",
        color: "white",
        display: "flex",
        flexWrap: "wrap",
        gap: "100px",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "4.75em 6.5em",
        borderTop: "6px solid #1f447d",
      }}
    >
      <div
        style={{
          width: "max-content",
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <img
          style={{
            width: "155px",
          }}
          src="https://teachenglish.vus.edu.vn/wp-content/uploads/2021/12/LOGO-VUS-ENG-01-e1714649284176-2048x926.png"
          alt="VUS-logo"
        />
        <div
          style={{
            width: "max-content",
            fontSize: "1.5rem",
            display: "flex",
            gap: "20px",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <StyleLink
            to="https://www.facebook.com/Teach.VUS"
            target="_blank"
            el={<i class="fa-brands fa-facebook"></i>}
          />
          <StyleLink
            to="https://www.linkedin.com/company/vustheenglishcenter/?originalSubdomain=vn"
            target="_blank"
            el={<i class="fa-brands fa-linkedin"></i>}
          />
          <StyleLink
            to="https://www.youtube.com/channel/UCfUWwTaz_1Ticrno2ogXGUw"
            target="_blank"
            el={<i class="fa-brands fa-youtube"></i>}
          />
        </div>
        <p
          style={{
            fontSize: "0.75rem",
          }}
        >
          Copyright © 2021 VUS. All rights reserved.
        </p>
      </div>
      <div
        style={{
          width: "max-content",
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <h3>VUS</h3>
        <StyleLink to="/aboutus" target="_self" el={`About us`} />
        <StyleLink to="/new&blog" target="_self" el={`News & blog`} />
        <p>FAQs</p>
      </div>
      <div
        style={{
          width: "max-content",
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <h3>Positions</h3>
        <StyleLink to="/" target="_self" el={`Vietnamese Teacher`} />
        <StyleLink to="/" target="_self" el={`Expatriate Teacher`} />
        <StyleLink to="/" target="_self" el={`Teaching Assitant`} />
      </div>
      <div
        style={{
          width: "250px",
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <h3>Contact us</h3>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <img
            src="https://tuyendung.vus.edu.vn/wp-content/themes/proapp/assets/images/location-w.svg"
            alt=""
          />
          <p>189 Nguyen Thi Minh Khai, Pham Ngu Lao, District 1, HCMC</p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://tuyendung.vus.edu.vn/wp-content/themes/proapp/assets/images/call-w.svg"
            alt=""
          />
          <p>(+84) 28 7102 9999</p>
        </div>
      </div>
    </footer>
  );
}
