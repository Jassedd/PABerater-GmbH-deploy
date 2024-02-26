import React from "react";
import "./recognition.css";
import Jorge2 from "../../assets/img/Jorge2.png";
import Service2 from "../../assets/img/service2.jpg";
import QAaccordion from "../../components/q&a-accordion/Q&A-accordion";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { Link } from "react-router-dom";

function Recognition() {
  const RecognitionQuestions = [
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
      <section className="recognition_services">
      <img src={Service2} alt="service1" className="banner-img_2" />
        <div className="figure_title2">
          <h1 className="title2_img_recognition">
            Reconocimiento de títulos <br />profesionales
          </h1>
        </div>
      </section>

        <h1 className="title_section_recognition">
          Reconocimiento de títulos profesionales en Alemania 
        </h1>
        <p className="title_text_recognition">
          Si ha estudiado una profesión universitaria de entre 4 y 5 años y
          quiere reconocer sus estudios universitarios en Alemania, puede
          asesorarse con nosotros para presentar su solicitud ante el organismo
          competente según su profesión.
        </p>
        <br />
      <section className="title_section2">
      <div className="firstArticleRecognition">
        <div className="name_video2">
          <p>
            Eugenio Etcheverry, <br />ingeniero electromecánico argentino
            en Alemania.
          </p>
        </div>
        <br />
        <p className="text_name_video2">
          Realizó con PABerater el trámite de reconocimiento de su título
          universitario, así como todos los trámites posteriores, por lo que ya
          disfruta de estar en Alemania trabajando en su profesión y junto a su
          familia.
          <br />
        </p>
      </div>
      <div className="Eugenio_video">
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

      <section className="text_background_Blue2">
        <h3 className="subtitle1_text_background_blue2">
          Profesiones reguladas
        </h3>
        <p className="text1_subtitle">
          Para las profesiones reguladas, el título profesional está
          especialmente protegido. Si usted estudió una profesión regulada
          necesitará realizar su homologación en Alemania para poder ejercer su
          profesión. Las profesiones reguladas en Alemania son, entre otras,
          médicos y todo el sector sanitario, maestros, entre otros.
          <br />
          <br />
          ¿Qué pasa si su cualificación no es reconocida en su totalidad?
          <br />
          <br />
          En este caso el organismo competente establecerá una medida
          compensatoria con la que podrá compensar las diferencias
          fundamentales. Si usted completa con éxito la medida compensatoria, se
          declarará la equivalencia.
          <br />
          <br />
        </p>
        <h3 className="subtitle2_text_background_blue2">
          Profesiones no reguladas
        </h3>
        <p className="text2_subtitle">
          Si usted estudió en un país no miembro de la Unión Europea una
          profesión no regulada, un requisito para la solicitud de una visa de
          empleo en Alemania o una visa de búsqueda de empleo es el
          reconocimiento de sus cualificaciones académicas en Alemania.
        </p>
        <br />
      </section>

      <section className="callToAction_recognition_container">
        <img src={Jorge2} alt="Jorge" className="jorge2_img" />

        <div className="text_container">
          <h2 className="calltoaction_recognition_title">
            Reconocer tu título <br />
            en Alemania
          </h2>
          <br />
          <h3 className="posible_text2">¡ES POSIBLE!</h3>
          <Link to="/contacto">
            <button className="btn-comenzamos2">¿COMENZAMOS?</button>
          </Link>
        </div>
      </section>

      <section className="ourServicesText_container2">
        <h2 className="Title_ourServicesText">
          Nuestro Servicio <br />
          de asesoría incluye
        </h2>
        <ul className="li_ourServicesText">
          <li>
            Valoración de la situación del profesional en una{" "}
            <strong>entrevista inicial. </strong>
            <br />
            Tomaremos en cuenta su enfoque profesional para realizar su
            homologación y le aclararemos sus dudas sobre el proceso y
            oportunidades laborales y le enviaremos una lista de todos los
            documentos necesarios.
          </li>
          <br />
          <li>
            <strong>Recolectamos y revisamos sus documentos</strong> antes de
            ser interpuestos ante la autoridad alemana encargada de su proceso
            de reconocimiento.
          </li>
          <br />
          <li>
            <strong>Traducciones Juradas:</strong> contamos con traductores
            jurados para traducir los documentos que así lo requieran.Los costes
            para las traducciones juradas dependen de la cantidad de documentos
            a traducir.
          </li>
          <br />
          <li>
            <strong>Traducción de su currículo vitae</strong>, adaptación a un
            formato alemán y creación de su carpeta de solicitud completa. Con
            su perfil profesional podrá ingresar de manera exitosa al mercado
            laboral alemán.
          </li>
        </ul>

        <p className="resaltar_text2">
          Cuente con nuestra asesoría durante todo el proceso.
        </p>
        <br />
      </section>

      <section className="callToAction_recognition_container2">
        <h3 className="text_callToAction_recognition_container2">
          ¡Vivir y trabajar como profesional en Alemania es posible de la mano
          de PABerater!
        </h3>
        <Link to="/contacto">
          <button className="btn-contact_2">
            <p>CONTACTAR</p>
          </button>
        </Link>
      </section>

      <section className="questions_recognition_container">
        <h2 className="title_questions_recognition_container">
          Preguntas Frecuentes
        </h2>
        <QAaccordion items={RecognitionQuestions} />
      </section>
    </main>
  );
}

export default Recognition;
