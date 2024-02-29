import React from "react";
import SectionLayout from "../layouts/sectionLayout";
import "./landing.css";
import NeumorphicButtonsComponent from "./landing/buttonsHome";
const Landing = (props) => {
  const styles = {
    innershadow: {
      fontSize: "90px",
      fontWeight: "bold",
      backgroundColor: "#999",
      color: "transparent",
      textShadow: "4px 5px 5px rgba(255,255,255,0.7)",
      WebkitBackgroundClip: "text",
      MozBackgroundClip: "text",
      backgroundClip: "text",
      textAlign: "center",
    },
  };

  return (
    <SectionLayout section={"inicio"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <span style={styles.innershadow} className="montserrat-bold">
          TECH WAVE
        </span>
        <span
          style={{ ...styles.innershadow, fontSize: 34 }}
          className="montserrat-bold"
        >
          IMPULSA TU NEGOCIO
        </span>

        <NeumorphicButtonsComponent />
      </div>
    </SectionLayout>
  );
};

export default Landing;
