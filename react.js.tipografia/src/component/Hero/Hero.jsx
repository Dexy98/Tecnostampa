import React from "react";
import "./Hero.css";
import esterno1 from "../../img/esterno.jpg";

const Hero = () => {
  const handleContactClick = () => {
    // Logica aggiuntiva, se necessaria, prima di aprire il tastierino telefonico
      window.location.href = "tel:0984408124";
    console.log("Contact clicked!");
    // Altre azioni da eseguire...
  };

  return (
    <div className="section-1 z-1">
      <img className="esterno-1 shadow-2xl" src={esterno1} alt="esterno" />

      <h1 className="titolo-home-page shadow-black">TITOLO HOME PAGE</h1>

      <div className="bottom">
        <div className="rectangle-1 shadow-black">
          <button className="contattaci shadow-sm" onClick={handleContactClick}>
            CONTATTACI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
