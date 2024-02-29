import React from "react";
import "./index.css";
const BottomNavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <nav>
        <ul>
          <li>
            <a href="#inicio">
              <span>inicio</span>
            </a>
          </li>
          <li>
            <a href="#servicios">
              <span>Servicios</span>
            </a>
          </li>
          <li>
            <a href="#proyectos">
              <span>Proyectos</span>
            </a>
          </li>
          <li>
            <a href="#planes">
              <span>Planes</span>
            </a>
          </li>
          <li>
            <a href="#contacto">
              <span>Contactanos</span>
            </a>
          </li>
        </ul>
        <div className="backdrop"></div>
        <div className="indicator-bar">
          <div className="indicator"></div>
        </div>
      </nav>
      {/* <section id="inicio">
        <h1>
          <span>All-new</span>
          <span>CSS Pro</span>
        </h1>
      </section>
      <section id="servicios">
        <h2>servicios Latest</h2>
        <ul>
          <li>
            <a href="#">Like Counter with Vercel KV and RSC</a>
          </li>
          <li>
            <a href="#">CSS Only Nav Indicator with Scroll Animation</a>
          </li>
          <li>
            <a href="#">It's 2023 and you can't style Select</a>
          </li>
        </ul>
      </section>
      <section id="proyectos">
        <div className="photo-grid">
          <div>
            <img src="https://picsum.photos/300/300?random=1" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/300/300?random=2" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/300/300?random=3" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/300/300?random=4" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/300/300?random=5" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/300/300?random=6" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/300/300?random=7" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/300/300?random=8" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/300/300?random=9" alt="" />
          </div>
        </div>
      </section>
      <section id="planes">
        <img
          className="planes-bear"
          src="https://assets.codepen.io/605876/bear-2022--white.png"
          alt=""
        />
        <form
          action="https://app.convertkit.com/forms/4960615/subscriptions"
          method="post"
        >
          <p>Keep up to date with my latest projects and adventures!</p>
          <div>
            <input
              name="email_address"
              aria-label="Email Address"
              placeholder="Email Address"
              type="email"
              required
            />
            <button>Subscribe!</button>
          </div>
          <p>No spam. Unsubscribe any time.</p>
        </form>
      </section>
      <section id="contacto">safsf</section> */}
    </div>
  );
};

export default BottomNavBar;
