import React from "react";
const SectionLayout = (props) => {
  return (
    <section
      id={props.section}
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      {props.children}
    </section>
  );
};

export default SectionLayout;
