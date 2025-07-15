import React from "react";

export default function ContentSlider(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        position: "relative",
      }}
    >
      <div
        className={props.classname}
        style={{
          position: "relative",
          width: "70%",
          height: "100%",
          backgroundColor: "white",
          display: "flex",
          gap: "25px",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          borderRadius: "10px",
          padding: "1.35rem 1.5rem",
          marginLeft: "6.5em",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "#0A4EBF",
            display: "flex",
            gap: "50px",
            justifyContent: "center",
            // flexWrap: "wrap",
            alignItems: "center",
            padding: "1.55em 1em",
            borderRadius: "10px"
          }}
        >
          <div
            style={{
              width: "20%",
              height: "auto",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "270px",
                position: "absolute",
                top: "-175px",
                left: "-150px",
              }}
              src={props.timg}
              alt="img"
            />
            <div
              style={{
                width: "max-content",
                position: "absolute",
                bottom: "-150px",
                left: "-97px",
                padding: "1.25rem 1.75rem",
                borderRadius: "12px",
                color: "#0A4EBF",
                backgroundColor: "#f1f3f4",
                // lineHeight: "1.2",
              }}
            >
              <h3>{props.tname}</h3>
              <p>{props.ttype}</p>
            </div>
          </div>

          <div
            style={{
              width: "80%",
              color: "white",
              textAlign: "start",
              lineHeight: "1.4",
              backgroundColor: "#0A4EBF",
            }}
          >
            <p>{props.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
