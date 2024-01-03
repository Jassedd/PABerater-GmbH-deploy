import React from "react";
import Service1 from "../../assets/img/service1.jpg";
import Service2 from "../../assets/img/service2.jpg";
import Service3 from "../../assets/img/service3.jpg";
import ArrowBtn from "../../assets/icons/btn-arrow.svg";
import "./Services.css";
import BtnAdvisory from "../btn-advisory/BtnAdvisory";
import Jorge4 from "../../assets/img/jorge-4.png"

function Services() {
  return (
    <>
      <section className="section-services">
      <div className="figure-BtnAdbisory">
        <div className="talent-text">
          <p>
            Tu pones el talento,
            <br />
            nosotros nos encargamos de lo demás.
          </p>
        </div>
        <BtnAdvisory />
      </div>
        <h3 className="title-services">¿Qué Servicios Ofrecemos?</h3>
        <article className="servicesArticle">
          <img src={Service1} alt="" className="img-service" />
          <section className="titleService">
            <h3>Homologación de títulos</h3>
            <button className="btn-arrow">
              <img className="arrow-btn" src={ArrowBtn} alt="button arrow" />
            </button>
          </section>
        </article>

        <article className="servicesArticle">
          <img src={Service2} alt="" className="img-service" />
          <section className="titleService">
            <h3>Reconocimiento profesional</h3>
            <button className="btn-arrow">
              <img className="arrow-btn" src={ArrowBtn} alt="button arrow" />
            </button>
          </section>
        </article>

        <article className="servicesArticle">
          <img src={Service3} alt="" className="img-service" />
          <section className="titleService">
            <h3>Traducciones juradas</h3>
            <button className="btn-arrow">
              <img className="arrow-btn" src={ArrowBtn} alt="button arrow" />
            </button>
          </section>
        </article>

      </section>

        <article>
            <div className="JorgeSection">
                <img src={Jorge4} alt="Jorge" className="Jorge-4"/>
                <div className="JorgeArt">
                    <h1>En PABerater</h1>
                    <p>tenemos una maleta de posibilidades para tu crecimiento profesional.</p>
                    <button className="btn-adviser">Hablar con un asesor</button>
                </div>
            </div>
        </article>
    </>
  );
}

export default Services;
