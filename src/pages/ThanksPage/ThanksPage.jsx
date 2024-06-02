import React from "react";
import "./ThanksPage.css";
import Jorge from "../../assets/img/jorge-9.jpg";
import { Link } from "react-router-dom";
import IntagramLogo from "../../assets/icons/logo_instagram.svg";
import YoutubeLogo from "../../assets/icons/logo_youtube.svg";
import FacebookLogo from "../../assets/icons/logo_facebook.svg";

function ThanksPage() {
  return (
    <>
      <div className="SocialsThanks">
        <Link
          to="https://www.instagram.com/paberater_/?utm_source=ig_embed&ig_rid=331b1bec-9632-4b52-b1b5-18fc290548c9"
          target="_blank"
        >
          <img
            src={IntagramLogo}
            alt="instagram logo"
            className="SocialsThanksLogo"
          />
        </Link>
        <Link to="https://www.facebook.com/PABerater/" target="_blank">
          <img
            src={FacebookLogo}
            alt="facebook logo"
            className="SocialsThanksLogo"
          />
        </Link>
        <Link to="https://www.youtube.com/@paberater3375" target="_blank">
          <img
            src={YoutubeLogo}
            alt="youtube logo"
            className="SocialsThanksLogo"
          />
        </Link>
      </div>
      <div className="thankspage-container">
        <div className="thanksmsg">
          <h1 className="thanks-title">¡Gracias!</h1>
          <p className="thanks-text">Gracias por dar este gran paso para tu crecimiento profesional. Nuestro equipo estará brindándote un seguimiento dentro de las próximas 48 horas vía mail. <br /> ¡No olvides revisar tu bandeja de spam! 
</p>
          <Link to="/">
            <button className="btn-thanks">Volver al Inicio</button>
          </Link>
        </div>
        <img src={Jorge} alt="" className="imgthanks" />
      </div>
    </>
  );
}

export default ThanksPage;
