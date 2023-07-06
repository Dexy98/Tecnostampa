import React from "react";
import "./Storia.css";

const Storia = () => {
  return (
    <div className="hero">
      <div className="titolo">
        <h1 className="titolo">Storia</h1>
      </div>
      <div className="article">
        <p className="article_testo">
          La nostra azienda nasce nel 1996 dopo un decennio di esperienza di
          lavoro dipendente. E' un'attività a gestione familiare e questo ci
          permette di effettuare i lavori con la massima cura dei particolari e
          soprattutto a prezzi molto convenienti.Grande passione per i lavori
          artigianali di nicchia.La nostra filosofia è di migliorarci in
          continuazione a passo con i tempi, abbiamo iniziato l'attività con una
          stella, un tagliacarte e una rotaprint, oggi abbiamo un parco macchine
          di ultima generazione offset e digitale: HEIDELBERG - SAKURAI - POLAR
          - OKI - KONICA - EPSON - 3 POSTAZIONI MAC.Tipografia Tecnostampa: "La
          certezza di farsi notare". Tipo Impresa: Ditta individualeNumero
          dipendenti: Microimpresa (meno di 10 dipendenti)
        </p>
      </div>
      <div className="titolo">
        <h1 className="titolo">Dove siamo</h1>
      </div>
      <div className="mappa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1220.0531487800677!2d15.828295098837721!3d39.76319223980819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133f1db55e263735%3A0x9e0188b69b6ecf69!2sTipografia%20Tecnostampa!5e0!3m2!1sit!2sit!4v1688325852273!5m2!1sit!2sit"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="google maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Storia;
