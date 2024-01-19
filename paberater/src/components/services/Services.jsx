import React from "react";
import Service1 from "../../assets/img/service1.jpg";
import Service2 from "../../assets/img/service2.jpg";
import Service3 from "../../assets/img/service3.jpg";
import ArrowBtn from "../../assets/icons/btn-arrow.svg";
import Arrow from "../../assets/icons/arrow.svg"
import "./Services.css";
import BtnBigAdvisory from "../btn-BigAdvisory/BtnBigAdvisory";
import Jorge4 from "../../assets/img/jorge-4.png"
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <section className="section-services">
      <div className="figure-BtnBigAdbisory">
        <div className="talent-text">
          <p>
            Tu pones el talento,
            <br />
            nosotros nos encargamos de lo demás.
          </p>
        </div>
        <BtnBigAdvisory />
      </div>
        <h3 className="title-services" style={{color: "#C8A75A", fontWeight: "bold"}}>¿Qué Servicios Ofrecemos?</h3>
        <article className="servicesArticle">
          <img src={Service1} alt="" className="img-service" />
          <section className="titleService">
            <h3 className="serviceName">Homologación de títulos</h3>
            <Link to="/homologaciones">
            <button className="btn-arrow">
              <img className="arrow-btn" src={ArrowBtn} alt="button arrow" />
            </button>
            </Link>
          </section>
        </article>

        <article className="servicesArticle">
          <img src={Service2} alt="" className="img-service" />
          <section className="titleService">
            <h3 className="serviceName">Reconocimiento profesional</h3>
            <Link to= "/reconocimiento">
            <button className="btn-arrow">
              <img className="arrow-btn" src={ArrowBtn} alt="button arrow" />
            </button>
            </Link>
          </section>
        </article>

        <article className="servicesArticle">
          <img src={Service3} alt="" className="img-service" />
          <section className="titleService">
            <h3 className="serviceName">Traducciones juradas</h3>
            <Link to="/traduccionesjuradas">
            <button className="btn-arrow">
              <img className="arrow-btn" src={ArrowBtn} alt="button arrow" />
            </button>
            </Link>
          </section>
        </article>

      </section>

        <article>
            <div className="JorgeSection">
                <img src={Jorge4} alt="Jorge" className="Jorge-4"/>
                <div className="JorgeArt">
                    <h1 className="jorgeSection_name">En PABerater</h1>
                    <p className="jorgeSection_text">tenemos una maleta de posibilidades 
                    para tu crecimiento profesional.
                    </p>
                    <Link to="/contacto">
                    <button className="btn-adviser">
                      Agendar cita <img src={Arrow} alt="arrow" className='arrow4'/>
                      </button>
                    </Link>
                </div>
            </div>
        </article>
    </>
  );
}

export default Services;
