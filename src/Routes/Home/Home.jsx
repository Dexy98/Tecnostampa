import React from "react";
import Hero from "../../component/Hero/Hero";
import Slider from "../../component/Slider/Slider";
import "./Home.css";
import Goccia from "../../img/goccia.png";
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="titolo mt-5 mb-5">
        <h1 className=" shadow-md">
          ULTIMI LAVORI <br />
          EFFETTUATI
        </h1>
      </div>
      <div className="section2">

      <Slider />
      <div className="goccia mt-5 mb-5">
        <div className="goccia">
          <img src={Goccia} alt="Goccia" />
        </div>
        <h3 className="goccia_titolo">SERVIZI</h3>
        <div className=" grid grid-cols-2 goccia_servizi">
          <ul className="goccia_lista">
            <li>cartelli</li>
            <li>brochure</li>
            <li>editoria</li>
            <li>manifesto</li>
            <li>striscioni</li>
            <li>locandina</li>
            <li>adesivi</li>
            <li>stamperia</li>
            <li>etichette</li>
            <li>volantini</li>
          </ul>
          <ul className="goccia_lista">
            <li>planning</li>
            <li>calendario</li>
            <li>depliant</li>
            <li>biglietti da visita</li>
            <li>rilegatura</li>
            <li>timbro</li>
            <li>fascicolo</li>
            <li>scritte automezzi</li>
            <li>stampati fiscali</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
