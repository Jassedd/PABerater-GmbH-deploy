import React from "react";
import "./officialTranslate.css";
import video3 from "../../assets/video/production_id_4872898 (1080p).mp4";
import Jorge3 from "../../assets/img/jorge-5.png";
import QAaccordion from "../../components/q&a-accordion/Q&A-accordion";

function Translate() {
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
      <section className="translate_services3">
        <video className="video_translater" autoPlay loop>
          <source src={video3} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="figure_title3">
          <h1 className="title3_img_translate">Traducciones oficiales</h1>
        </div>
      </section>

      <section className="title_section3">
        <h1 className="title_section_translate">
          Traducciones <br />

        </h1>
        <br />
        <p className="title_text_translate">
        Obtenga sus documentos traducidos al Alemán por traductores 
        certificados en Alemania.
        </p>
        <br />

        <iframe
          width="100%"
          height="200"
          src={`https://www.youtube.com/embed/VDkrGDumcCw`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div className="name_video2">
          <p>
          Reinaldo Díaz Lugo, Ingeniero Informático venezolano <br />
            en Alemania.
          </p>
        </div>
        <br />
        <p className="text_name_video2">
        Ambos realizaron el trámite de homologación profesional con PABerater, 
        y en esta entrevista él nos cuenta cómo fue le proceso de migración, 
        cómo es vivir en Alemania y lo que más le llamó la atención de su trabajo.
        <br />
        <br />
        En PABerater le orientamos paso a paso para que complete todos 
        los requisitos para reconocer sus cualificaciones profesionales 
        y trabajar en Alemania.
        <br />
        <br />
        Contamos con un equipo bilingüe que está 
        disponible para brindarle un servicio de asesoría en español 
        y comunicarnos con las autoridades alemanas en su idioma.
        </p>
        <br />
      </section>

      <section className="text_background_Blue3">
        <h3 className="subtitle1_text_background_blue3">
          Traducciones Juradas 
        </h3>
        <p className="text1_translate_subtitle">
          En PABerater le garantizamos un servicio de traducción profesional 
          reconocido por su calidad.
          Este servicio es proporcionado por nuestros traductores oficiales 
          y jurados en Alemania, quienes se caracterizan por su conocimiento 
          y competencia, así como por su productividad.
          <br />
          <br />
          Al realizar su proceso de reconocimiento profesional con nosotros, 
          <strong>recibe un 30% de descuento en el costo total 
            de sus traducciones.</strong>
          <br />
          <br />
        </p>
        <h3 className="subtitle2_text_background_blue3-1">
          Traducciones de CV
        </h3>
        <p className="text2_translate_subtitle">
        Presentar una carpeta de solicitud de empleo completa es fundamental 
        para conseguir un buen empleo en Alemania, esto incluye una carta 
        de presentación además del currículo vitae. Gracias a nuestra experiencia 
        sabemos potenciar su currículo y carta de presentación para llamar 
        la atención de su futuro empleador. Le indicamos cómo realizar 
        tus postulaciones de empleo y de esta manera incrementar 
        sus oportunidades.
        </p>
        <br />
      </section>

      <section className="callToAction_translate_container">
        <h2 className="calltoaction_translate_title">
          <strong className="blue_name">PABerater,</strong> tu compañero ideal para transformar tu vida profesional. 
        </h2>
        <img src={Jorge3} alt="Jorge" className="jorge3_img" />
        <div className="text_translate_container">
            <br />
            <button className="btn-comenzamos3">¿COMENZAMOS?</button>
        </div>
      </section>

      <section className="ourServicesText_container3">
      <h2 className="Title_ourServicesText3">
          Nuestro Servicio de traducción incluye
          </h2>
          <ul className="li_ourServicesText3">
            <li>
            Traducción de su currículo y carta de presentación al alemán.
            </li>
            <br />
            <li>
            Elaboración de su carpeta de solicitud completa.
            </li>
            <br />
            <li>
            Asesoría en su búsqueda de empleo.
            </li>
          </ul>
          <p className="resaltar_text3">
          Este servicio está incluido cuando realiza su proceso de reconocimiento 
          profesional con nosotros.
          <br />Nos enfocamos en traducir su currículo y carta 
          de presentación; así como elaborar su perfil profesional para que pueda 
          postularse con éxito a ofertas de trabajo en el país.
          </p>
          <br />
      </section>      

      <section className="callToAction_translate_container3">
        <h3 className="text_callToAction_translate_container3">
        ¡Vivir y trabajar como profesional en Alemania es posible 
        de la mano de PABerater!
        </h3>
        <button className="btn-contact2"><p>CONTACTAR</p></button>

      </section>

      <section className="questions_translate_container">
        <h2 className="title_questions_translate_container">Preguntas Frecuentes</h2>
        <QAaccordion items={TranslateQuestions} />
      </section>
    </main>
  );
}

export default Translate;
