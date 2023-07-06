import React from "react";
import "./Section2.css";
import rilegatura from "../../img/RILEGATURA.jpg";
import divise from "../../img/DIVISE LAVORO.jpg";
import magliette from "../../img/maglia.jpg";
import automezzo from "../../img/AUTOMEZZO.jpg";
import timbri from "../../img/TIMBRI.jpg";

const Section2 = () => {
  return (
    <div className="section-2">
      <div className="titolo mt-5">
        <h1 className=" shadow-md">
          ULTIMI LAVORI <br />
          EFFETTUATI
        </h1>
      </div>
      <div className="wrap mt-5">
        <img
          className="lavori shadow-md shadow-black"
          src={rilegatura}
          alt="rilegatura"
        />
        <h3 className="ml-3 text-white">Rilegatura docuemtni ecc... lore</h3>
      </div>

      <div className="wrap mt-5">
        <h3 className="mr-3 text-white">Divise lavoro, stmpa su tessuto</h3>
        <img
          className="lavori shadow-md shadow-black"
          src={divise}
          alt="divise"
        />
      </div>

      <div className="wrap mt-5">
        <img
          className="lavori shadow-md shadow-black"
          src={magliette}
          alt="magliette"
        />
        <h3 className="ml-3 text-white">stampa su magliette</h3>
      </div>
      
      <div className="wrap mt-5">
        <h3 className="mr-3 text-white">Adesivi su automezzo</h3>
        <img
          className="lavori shadow-md shadow-black"
          src={automezzo}
          alt="automezzo"
        />
      </div>

      <div className="wrap mt-5">
        <img
          className="lavori shadow-md shadow-black"
          src={timbri}
          alt="timbri"
        />
        <h3 className="ml-3 text-white">Timbri personalizzati</h3>
      </div>

    </div>
  );
};

export default Section2;
