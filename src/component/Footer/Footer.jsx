import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className=" mt-10 footer shadow">
      <div className="wrap_footer">
        <div className="testo_footer">
          <h3 className=" shadow-black">
            Tipografia Tecnostampa di Annuzzi Angelo Via Verbicaro 134/136,
            87020 Santa Maria del Cedro - Frazione Marcellina (Cosenza)
            Telefono: +39 098542324 - 3470767745 Partita IVA: 02068460787
            SETTORE: Editoria, Stampa e Media
          </h3>
        </div>
      </div>
        <div className="social shadow-black">
          <a href="https://www.facebook.com/tecnostampa.tipografia">
            <BsFacebook />
          </a>
        </div>
    </footer>
  );
};

export default Footer;
