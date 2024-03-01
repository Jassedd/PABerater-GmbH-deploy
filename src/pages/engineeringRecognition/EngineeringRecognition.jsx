import React from "react";
import "../recognition/recognition.css";
import Jorge2 from "../../assets/img/Jorge2.png";
import Service2 from "../../assets/img/service2.jpg";
import QAaccordion from "../../components/q&a-accordion/Q&A-accordion";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { Link } from "react-router-dom";

function EngineeringRecognition() {
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
            Reconocimiento de <br />
            Ingenieros
          </h1>
        </div>
      </section>
      <h1 className="title_section_recognition">
        Reconocimiento profesional de ingenieros.
      </h1>
      <p className="title_text_recognition">
        Los ingenieros en Alemania pueden trabajar en una amplia variedad de
        sectores, como por ejemplo en la planificación y el control técnico de
        la producción, el control de la calidad, el diseño o en la construcción
        de equipos y modelos e, incluso, con una buena formación y experiencia,
        alcanzar puestos directivos.
      </p>
      <br />
      <section className="title_section2">
        <div className="firstArticleRecognition">
          <div className="name_video2">
            <p>
              Familia Oviedo Quevedo, <br />
              Ingeniero Mecánico en Alemania
            </p>
          </div>
          <p className="text_name_video">
            La familia Oviedo Quevedo es de Venezuela y ya está en Alemania de
            la mano de PABerater. Nos invitaron a conocer su hermosa casa en la
            región de Baviera, donde Mario trabaja como Ingeniero Mecánico, con
            un excelente sueldo y la tranquilidad de haber cumplido su sueño y
            el de toda su familia.
            <br />
          </p>
        </div>
        <div className="Eugenio_video">
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
      <section className="callToAction_recognition_container">
        <img src={Jorge2} alt="Jorge" className="jorge2_img" />

        <div className="text_container">
          <h2 className="calltoaction_recognition_title">
            Reconocer tu título <br />
            en Alemania
          </h2>
          <br />
          <h3 className="posible_text2">¡ES POSIBLE!</h3>
          <Link to="/landing">
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
      <br />
      <section className="successStoriesSection">
      <h2>Casos de éxito:</h2>
      <p>
        Acá compartimos con usted alguno de nuestros muchos casos de éxitos:
      </p>
      <br />
      <h5>German Bravo, Licenciado en Educación.</h5>
      <p className="textsuccessStoriesSection">
        Bravo es de Bogotá, Colombia, con veinte años de experiencia como
        profesor de filología clásica y español. En Berlín, donde ya está
        viviendo, habló con PABerater sobre la experiencia de migrar y de
        nuestra asesoría. <Link className="LinksuccessStoriesSection" to="https://www.instagram.com/reel/Cpn226Jj2yo/?utm_source=ig_web_copy_link" target="_blank">Ver video</Link>
      </p>
      <br />
      <h5>Luis González, Técnico electricista.</h5>
      <p className="textsuccessStoriesSection">
        Conoció a PABerater por recomendación de un amigo, inició un proceso con
        nosotros y no solo ya tiene su título homologado, sino que ¡ya está en
        Alemania!. <Link to="https://www.instagram.com/reel/CkL-gBKjHFw/?utm_source=ig_web_copy_link" className="LinksuccessStoriesSection" target="_blank">Ver video</Link>
      </p>
      <br />
      <h5>Eber León, Ingeniero electricista.</h5>
      <p className="textsuccessStoriesSection">
        Eber Leon Contreras nació y estudió en Venezuela, es Ingeniero
        Electricista y ya se encuentra en Alemania listo para cumplir el sueño
        de trabajar en la potencia económica de Europa.{" "}
        <Link to="https://www.instagram.com/reel/CkwMYQtDHpL/?utm_source=ig_web_copy_link" className="LinksuccessStoriesSection" target="_blank">Ver video</Link>
      </p>
      <br />
      <h5>Andres Astor, Ingeniero en telecomunicaciones.</h5>
      <p className="textsuccessStoriesSection">
        Andrés Ernesto Astor Villegas es venezolano, Ingeniero en
        Telecomunicaciones y ya homologó su título de manera exitosa con
        PABerater. <Link className="LinksuccessStoriesSection" to="https://www.instagram.com/reel/ClmaJo5DG2s/?utm_source=ig_web_copy_link"  target="_blank">Ver video</Link>
      </p>
      <br />

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

export default EngineeringRecognition;
