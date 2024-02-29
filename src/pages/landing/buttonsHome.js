import React, { useEffect } from "react";
import "./index.css"; // Importamos los estilos CSS desde un archivo local
import it from "../../assets/icons/it.png";

const NeumorphicButtonsComponent = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll(".neumorphic");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        buttons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }, []);

  return (
    <div className="buttons">
      <button className="neumorphic ">
        <i class="fa-regular fa-display-code"></i>
        <span>Diseño Web</span>
      </button>
      <button className="neumorphic ">
        <i class="fa-regular fa-mobile"></i> <span>Apps Móviles</span>
      </button>
      <button className="neumorphic">
        <i className="fa-light fa-chart-mixed"></i>
        <span>Marketing Digital</span>
      </button>
      <button className="neumorphic">
        <i class="fa-light fa-headset"></i>
        <span>Soporte Web</span>
      </button>
      <button className="neumorphic">
        <i className="fa-light fa-seedling"></i>
        <span>Soluciones TI</span>
      </button>
    </div>
  );
};

export default NeumorphicButtonsComponent;
