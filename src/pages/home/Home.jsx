import React from "react";
import "./Home.css";
import Jorge2 from "../../assets/icons/Jorge/Jorge2.svg";
import BtnAdvisory from "../../components/btn-advisory/BtnAdvisory";
import BtnBigAdvisory from "../../components/btn-BigAdvisory/BtnBigAdvisory";
import Jorge5 from "../../assets/icons/Jorge/jorge-5.svg";
import Berlin from "../../assets/img/berlin2.svg";
import Services from "../../components/services/Services";
import Comments from "../../components/comments/Comments";
import JoinUp from "../../components/join-up/JoinUp";
import QuestionForm from "../../components/question-form/QuestionForm";
import FeedInstagram from "../../components/instagram/feed-instagram";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import "animate.css";

const Home = () => {
  return (
    <main>
      <ScrollToTop />
      
        <div className="div-init">
            <img src={Jorge2} alt="Jorge" className="jorge-img2" />           
          <div className="textbtn">
            <h1 className="title-init">
              Asesoramos
              <br />a <span className="resaltar">profesionales</span>
              <br />
              <span className="pequena">que</span>{" "}
              <span className="pequena resaltar">desean</span>{" "}
              <span className="resaltar">emigrar</span>
              <br />
              <span className="pequena">a </span>
              <span className="resaltar">Alemania</span>
            </h1>
            <BtnAdvisory />
          </div>
        </div>
        
          <div className="question-home">
            <h1 className="titleWeDo">¿Qué Hacemos?</h1>
          </div>
      <section className="what-do-we-do">
        <div className="container-home">
          <div className="roadMapHome">
            <section className="Asesoramos">
              <h2 className="titleStep">Asesoramos</h2>
              <p>
                a profesionales hispanohablantes a ingresar al mercado laboral
                alemán prestando servicios relacionados con su reconocimientos
                académico aquí en Alemania.
              </p>
            </section>
            <svg
              width="50%"
              height="auto"
              className="first-arrow"
              viewBox="0 0 147 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.66667 3C5.66667 4.47276 4.47276 5.66667 3 5.66667C1.52724 5.66667 0.333328 4.47276 0.333328 3C0.333328 1.52724 1.52724 0.333333 3 0.333333C4.47276 0.333333 5.66667 1.52724 5.66667 3ZM3 23.5V24H2.5V23.5H3ZM144 23.5V23H144.5V23.5H144ZM146.667 44.5C146.667 45.9728 145.473 47.1667 144 47.1667C142.527 47.1667 141.333 45.9728 141.333 44.5C141.333 43.0272 142.527 41.8333 144 41.8333C145.473 41.8333 146.667 43.0272 146.667 44.5ZM3.5 3V23.5H2.5V3H3.5ZM3 23H144V24H3V23ZM144.5 23.5V44.5H143.5V23.5H144.5Z"
                fill="#FEEC8A"
              />
            </svg>

            <section className="Acompañamos">
              <div className="empty">
                <h2 className="titleStep">Acompañamos</h2>
              </div>
              <div className="empty">
                <p>
                  paso a paso, antes y durante el proceso de la homologación o
                  reconocimiento de sus títulos profesionales.
                </p>
              </div>
            </section>
            <svg
              width="50%"
              height="auto"
              className="first-arrow"
              viewBox="0 0 147 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M141.333 3.5C141.333 4.97276 142.527 6.16667 144 6.16667C145.473 6.16667 146.667 4.97276 146.667 3.5C146.667 2.02724 145.473 0.833333 144 0.833333C142.527 0.833333 141.333 2.02724 141.333 3.5ZM144 24V24.5H144.5V24H144ZM3 24V23.5H2.5V24H3ZM0.333333 45C0.333333 46.4728 1.52724 47.6667 3 47.6667C4.47276 47.6667 5.66667 46.4728 5.66667 45C5.66667 43.5272 4.47276 42.3333 3 42.3333C1.52724 42.3333 0.333333 43.5272 0.333333 45ZM143.5 3.5V24H144.5V3.5H143.5ZM144 23.5H3V24.5H144V23.5ZM2.5 24V45H3.5V24H2.5Z"
                fill="#FEEC8A"
              />
            </svg>

            <section className="Gestionamos">
              <div className="empty-column">
                <h2 className="titleStep">Gestionamos</h2>
              </div>
              <div className="empty-column">
                <p>
                  TODO. En PABerater somos conocedores del proceso porque
                  pasamos por ello y por eso nuestra misión es ayudarte
                  proporcionándote toda la información de una manera accesible y
                  fácil de entender.
                </p>
              </div>
            </section>
          </div>
        </div>
        <article className="talent-home">
          <div className="figure-talent">
            <img src={Jorge5} alt="jorge" className="jorge5" />
          </div>
          <div className="talent-text">
            <p className="talent_title">
              Tu pones el talento,
              <br />
              nosotros nos encargamos de lo demás.
            </p>
            <BtnBigAdvisory />
          </div>
        </article>
      </section>
      <Services />
      <Comments />
      <JoinUp />
      <FeedInstagram />

      <section className="questionsTitleFormHome">
        <h2 className="titleQuestionFormHome">
          De seguro tienes mucha dudas y nosotros estamos dispuestos a
          responderlas todas
        </h2>
        <p className="question_subtitle_form">respuesta en 24 horas</p>
      </section>

      <section className="contactHome-section"> 
        <div className="Q-form">
        <QuestionForm />
        </div>

        <div className="pab_map">
        <iframe
          className='paberater-map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.282870996985!2d13.511988876248347!3d52.40154937203035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a907b9c7a25b01%3A0xcbb1c50d60ec9f7!2sPABerater%20GmbH!5e0!3m2!1ses!2ses!4v1704554589181!5m2!1ses!2ses"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Map"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Home;
