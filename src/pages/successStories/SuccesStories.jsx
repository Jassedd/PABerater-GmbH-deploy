import React from "react";
import Service3 from "../../assets/img/service3.jpg";
import Jorge3 from "../../assets/img/jorge-5.png";
import QAaccordion from "../../components/q&a-accordion/Q&A-accordion";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { Link } from "react-router-dom";
import "./SuccesStories.css";
import Case1 from "../../assets/img/CasoExito-1.png";
import Case2 from "../../assets/img/CasoExito-2.png";
import Case3 from "../../assets/img/CasoExito-3.png";
import Case4 from "../../assets/img/CasoExito-4.png";

function SuccesStories() {
  const TranslateQuestions = [
    {
      header: "¿Qué es un reconocimiento oficial?",

      body: "El reconocimiento de sus cualificaciones profesionales significa que sus calificaciones extranjeras son comparables con una profesión alemana. Por ejemplo, si usted tiene una carrera como técnico en electrónica, sus capacidades y conocimiento adquiridos serán comparables con los que obtienen el título de Elektrotechniker en Alemania.",
    },

    {
      header: "¿Qué son las profesiones reguladas?",

      body: "Son También llamadas profesiones reglamentadas, donde los profesionales deben tener cierto tipo de cualificaciones específicas o técnicas, para ejercer la profesión en Alemania. Por ejemplo, Médicos, Maestros o Arquitectos. Si usted obtiene un reconocimiento parcial de sus calificaciones, pero debe compensar las deficiencias técnicas, prácticas y lingüísticas para alcanzar su Aprobación, entonces puede solicitar un Permiso de residencia para el culminar su reconocimiento, como parte de una medida de calificación o Qualifizierungsmaßnahme, para ello necesita un conocimiento de alemán por lo general de A2 y poder financiar su estadía en Alemania.",
    },

    {
      header: "¿Existe algún límite de edad para trabajar en Alemania?",

      body: "La edad no es un problema, no existe límite de edad.",
    },
  ];

  return (
    <main>
      <ScrollToTop />
      <section className="translate_services3">
        <img src={Service3} alt="service3" className="banner-img_3" />
        <div className="figure_title3">
          <h1 className="title3_img_translate">Casos de éxito</h1>
        </div>
      </section>
      <br />
      <p className="title_text_translate">
        Nuestros asesorados han tenido la oportunidad de contar sus vivencias,
        destacando los resultados positivos obtenidos y el impacto que ha tenido
        nuestra colaboración en su desarrollo. Sus historias son una prueba
        fehaciente de cómo hemos logrado acompañarlos en su crecimiento y
        alcanzar juntos los objetivos planteados.
      </p>
      <br />

      <section className="ServiceSuccessYt">
        <div className="firstArticleTranslationSuccesStorie">
          <div className="name_video_succesStories">
            <p>
              Reinaldo Díaz Lugo, Ingeniero Informático venezolano en Alemania.
            </p>
          </div>
          <br />
          <p className="descriptionSuccessStories">
            Ambos realizaron el trámite de homologación profesional con
            PABerater, y en esta entrevista él nos cuenta cómo fue le proceso de
            migración, cómo es vivir en Alemania y lo que más le llamó la
            atención de su trabajo.
          </p>
        </div>
        <div className="divVideoSuccessStories">
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/VDkrGDumcCw`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="yt-service"
          ></iframe>
        </div>
      </section>
      <br />
      <section className="ServiceSuccessYt">
        <div className="firstArticleTranslationSuccesStorie">
          <div className="name_video_succesStories">
            <p>Verónica Anzola , Médica venezolana que ya está en Alemania </p>
          </div>
          <br />
          <p className="descriptionSuccessStories">
            Junto a su esposo Reinaldo, Ingeniero Informático, y la mascota de
            ambos, Simón. Los dos realizaron su trámite de reconocimiento
            profesional con PABerater. En este primer video, Verónica nos cuenta
            cómo vivió ella todo el proceso de migración, las diferencias con
            Latinoamérica y cómo se siente en Alemania.
          </p>
        </div>
        <div className="divVideoSuccessStories">
          <iframe
           width="100%"
           height="200"
            src={`https://www.youtube.com/embed/4zUybTbOs4A`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="yt-service"
          ></iframe>
        </div>
      </section>
      <br />
      <section className="ServiceSuccessYt">
        <div className="firstArticleTranslationSuccesStorie">
          <div className="name_video_succesStories">
            <p>
              Eugenio Etcheverry, <br />
              ingeniero electromecánico argentino en Alemania.
            </p>
          </div>
          <br />
          <p className="descriptionSuccessStories">
            Realizó con PABerater el trámite de reconocimiento de su título
            universitario, así como todos los trámites posteriores, por lo que
            ya disfruta de estar en Alemania trabajando en su profesión y junto
            a su familia.
            <br />
          </p>
        </div>
        <div className="divVideoSuccessStories">
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/VELeEFp3Tj8`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="yt-service"
          ></iframe>
        </div>
      </section>
      <br />
      <section className="ServiceSuccessYt">
        <div className="firstArticleTranslationSuccesStorie">
          <div className="name_video_succesStories">
            <p>
              Familia Oviedo Quevedo, <br />
              Ingeniero Mecánico en Alemania
            </p>
          </div>
          <p className="descriptionSuccessStories">
            La familia Oviedo Quevedo es de Venezuela y ya está en Alemania de
            la mano de PABerater. Nos invitaron a conocer su hermosa casa en la
            región de Baviera, donde Mario trabaja como Ingeniero Mecánico, con
            un excelente sueldo y la tranquilidad de haber cumplido su sueño y
            el de toda su familia.
            <br />
          </p>
        </div>
        <div className="divVideoSuccessStories">
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/BUNz04l4dHg`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="yt-service"
          ></iframe>
        </div>
      </section>
      <br />
      <section className="ServiceSuccessYt">
        <div className="firstArticleTranslationSuccesStorie">
          <div className="name_video_succesStories">
            <p>Darling Gonzáles médica venezolana en Alemania</p>
          </div>
          <br />
          <p className="descriptionSuccessStories">
            Inició el trámite de reconocimiento de su título universitario con
            PABerater y está a punto de finalizarlo.
          </p>
          <br />
        </div>
        <div className="divVideoSuccessStories">
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/UGLXVXbxNXY`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="yt-service"
          ></iframe>
        </div>
      </section>
      <br />
      <section className="ServiceSuccessYt">
        <div className="firstArticleTranslationSuccesStorieIg">
          <div className="name_video_succesStories">
            <p>Luis González, Técnico electricista.</p>
          </div>
          <br />
          <p className="descriptionSuccessStories">
            Conoció a PABerater por recomendación de un amigo, inició un proceso
            con nosotros y no solo ya tiene su título homologado, sino que ¡ya
            está en Alemania!.{" "}
            <Link
              to="https://www.instagram.com/reel/CkL-gBKjHFw/?utm_source=ig_web_copy_link"
              className="LinksuccessStoriesSection"
              target="_blank"
            >
              Ver video
            </Link>
          </p>
        </div>
        <div className="divVideoSuccessStoriesIg">
          <img className="imgCase" src={Case1} alt="" />
        </div>
      </section>
      <br />
      <section className="ServiceSuccessYt">
        <div className="firstArticleTranslationSuccesStorieIg">
          <div className="name_video_succesStories">
            <p>Andres Astor, Ingeniero en telecomunicaciones.</p>
          </div>
          <br />
          <p className="descriptionSuccessStories">
            Andrés Ernesto Astor Villegas es venezolano, Ingeniero en
            Telecomunicaciones y ya homologó su título de manera exitosa con
            PABerater.{" "}
            <Link
              className="LinksuccessStoriesSection"
              to="https://www.instagram.com/reel/ClmaJo5DG2s/?utm_source=ig_web_copy_link"
              target="_blank"
            >
              Ver video
            </Link>
          </p>
        </div>
        <div className="divVideoSuccessStoriesIg">
          <img className="imgCase" src={Case2} alt="" />
        </div>
      </section>
      <br />
      <section className="ServiceSuccessYt">
        <div className="firstArticleTranslationSuccesStorieIg">
          <div className="name_video_succesStories">
            <p>Eber León, Ingeniero Electricista</p>
          </div>
          <br />
          <p className="descriptionSuccessStories">
            Eber Leon Contreras nació y estudió en Venezuela, es Ingeniero
            Electricista y ya se encuentra en Alemania listo para cumplir el
            sueño de trabajar en la potencia económica de Europa. <Link
              className="LinksuccessStoriesSection"
              to="https://www.instagram.com/reel/CkwMYQtDHpL/?utm_source=ig_web_copy_link"
              target="_blank"
            >
              Ver video
            </Link>
          </p>
        </div>
        <div className="divVideoSuccessStoriesIg">
          <img className="imgCase" src={Case3} alt="" />
        </div>
      </section>
      <br />
      <section className="ServiceSuccessYt">
        <div className="firstArticleTranslationSuccesStorieIg">
          <div className="name_video_succesStories">
            <p>German Bravo, Licenciado en Educación</p>
          </div>
          <br />
          <p className="descriptionSuccessStories">
            Bravo es de Bogotá, Colombia, con veinte años de experiencia como
            profesor de filología clásica y español. En Berlín, donde ya está
            viviendo, habló con PABerater sobre la experiencia de migrar y de
            nuestra asesoría. <Link
              className="LinksuccessStoriesSection"
              to="https://www.instagram.com/reel/Cpn226Jj2yo/?utm_source=ig_web_copy_link"
              target="_blank"
            >
              Ver video
            </Link>
          </p>
        </div>
        <div className="divVideoSuccessStoriesIg">
          <img className="imgCase" src={Case4} alt="" />
        </div>
      </section>
      <br />
      <section className="callToAction_translate_container">
        <h2 className="calltoaction_translate_title">
          <strong className="blue_name">PABerater, </strong>
          tu compañero ideal para transformar tu vida profesional.
        </h2>
        <div className="">
          <img src={Jorge3} alt="Jorge" className="jorge3_img" />
          <div className="text_translate_container">
            <br />
            <Link to="/contacto">
              <button className="btn-comenzamos3">¿COMENZAMOS?</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="ourServicesText_container3">
        <h2 className="Title_ourServicesText3">
          Nuestro Servicio de traducción incluye
        </h2>
        <ul className="li_ourServicesText3">
          <li>Traducción de su currículo y carta de presentación al alemán.</li>
          <br />
          <li>Elaboración de su carpeta de solicitud completa.</li>
          <br />
          <li>Asesoría en su búsqueda de empleo.</li>
        </ul>
        <p className="resaltar_text3">
          Este servicio está incluido cuando realiza su proceso de
          reconocimiento profesional con nosotros.
          <br />
          Nos enfocamos en traducir su currículo y carta de presentación; así
          como elaborar su perfil profesional para que pueda postularse con
          éxito a ofertas de trabajo en el país.
        </p>
        <br />
      </section>

      <section className="callToAction_translate_container3">
        <h3 className="text_callToAction_translate_container3">
          ¡Vivir y trabajar como profesional en Alemania es posible de la mano
          de PABerater!
        </h3>
        <Link to="/contacto">
          <button className="btn-contact_3">
            <p>CONTACTAR</p>
          </button>
        </Link>
      </section>

      <section className="questions_translate_container">
        <h2 className="title_questions_translate_container">
          Preguntas Frecuentes
        </h2>
        <QAaccordion items={TranslateQuestions} />
      </section>
    </main>
  );
}

export default SuccesStories;
