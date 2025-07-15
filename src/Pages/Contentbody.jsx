import React,{ useState } from "react";

export default function Contentbody(props) {
  const [isHovered, setIsHovered] = useState(false);
  const styles = {
    width: "240px",
    height: "300px",
    borderRadius: "10px",
    backgroundColor: isHovered ? "#0A4EBF" : "#ffffff",
    backgroundImage: isHovered ? "none" : `url(${props.bgurl})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    padding: "1em",
    position: "relative",
    transition: "ease 300ms",
    zIndex: "1",
  };
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "fit-content",
        height: "fit-content",
        padding: "0.5em",
        borderRadius: "10px",
        backgroundColor: isHovered ? "#0A4EBF" : "#ffffff",
        position: "relative",
        zIndex: isHovered ? "2" : "1",
        transition: "ease 300ms",
      }}
    >
      <div style={styles} className={props.classame}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignContent: "center",
            zIndex: "1",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "30%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              marginTop: "6px",
              zIndex: "3",
            }}
          >
            {props.icon}
          </div>
          <div
            style={{
              height: "70%",
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: isHovered ? "white" : "#E0242B",
                fontSize: "1.08rem",
                zIndex: "999",
              }}
            >
              {props.head}
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                zIndex: "999",
                color: isHovered ? "#ffffff" : "black",
                
              }}
            >
              {props.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



