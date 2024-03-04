import React from "react";
import "./ThanksPage.css";
import Jorge from "../../assets/img/jorge-4.png";
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
      <div className="Errorpage">
        <img src={Jorge} alt="" className="imgError" />
        <div className="Errormsg">
          <h1>Gracias</h1>
          <p>Hemos recibido tu solicitud.</p>
          <Link to="/">
            <button className="btn-added">Volver al Inicio</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ThanksPage;
