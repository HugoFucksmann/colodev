import React, { useState } from "react";
import SectionLayout from "../layouts/sectionLayout";
import "./proyectos.css";
const Proyectos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "Lossless Youths",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      backgroundImage:
        "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')",
    },
    {
      title: "Estrange Bond",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      backgroundImage:
        "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')",
    },
    // Agrega más elementos aquí según sea necesario
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % items.length;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex - 1 + items.length) % items.length;
    });
  };

  console.log("items ", items);

  return (
    <SectionLayout section={"proyectos"}>
      <main>
        <ul className="slider">
          {items.map((item) => (
            <li></li>
          ))}
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')",
            }}
          >
            <div className="content">
              <h2 className="title">"Lossless Youths"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')",
            }}
          >
            <div className="content">
              <h2 className="title">"Estrange Bond"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')",
            }}
          >
            <div className="content">
              <h2 className="title">"The Gate Keeper"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')",
            }}
          >
            <div className="content">
              <h2 className="title">"Last Trace Of Us"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')",
            }}
          >
            <div className="content">
              <h2 className="title">"Urban Decay"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')",
            }}
          >
            <div className="content">
              <h2 className="title">"The Migration"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
        </ul>
        <nav className="nav">
          <ion-icon className="btn prev" name="arrow-back-outline"></ion-icon>
          <ion-icon
            className="btn next"
            name="arrow-forward-outline"
          ></ion-icon>
        </nav>
      </main>
    </SectionLayout>
  );
};

export default Proyectos;
