import React from "react";
import "./homologate.css";
import Service1 from "../../assets/img/service1.jpg";
import ArrowBtn from "../../assets/icons/btn-arrow.svg";
import Jorge4 from "../../assets/img/jorge-4.png";
import BtnStart from "../../components/btn-start/BtnStart";



function Homologate() {
  return (
    <main>
        <section className="homologate_services1">
            <img src={Service1} alt="doctors_image" className="img_homologate" />
            <div className="figure_title">
                <h1 className="title_img1">
                    Homologación 
                </h1>
                <h3 className="title_img2">
                    de títulos profesionales</h3>
            </div>
        </section>

        <section className="title_section">
            <h1 className="title">
                Homologación <br /> 
                título de medicina <br />
                en Alemania.
            </h1>
            <br />
            <p className="title_text">
            Actualmente, el motor de Europa está buscando 
            urgentemente profesionales de la medicina y ofrece 
            salarios mensuales promedio de 6,500 euros para 
            médicos/as generales y hasta 12,000 euros 
            dependiendo de la especialidad.
            </p>

            <iframe
                width="90%"
                height="315"
                src={`https://www.youtube.com/embed/UGLXVXbxNXY`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>

            
                <div className="name_video">
                    <p>
                    Darling Gonzáles médica venezolana <br />
                    en Alemania
                    </p>
                </div>
                <br />
                <p className="text_name_video">Inició el trámite de reconocimiento de su título 
                universitario con PABerater y está a punto de finalizarlo.
                </p>
        </section>

        <section className="text_background_Blue">
            <p className="text_blueContainer">
            Trabajar como profesional de la salud en Alemania te traerá grandes 
            recompensas: atractivos salarios, seguridad y estabilidad para ti y 
            tu familia, y la posibilidad de un constante crecimiento profesional. 
            Los/as médicos/as, los/as especialistas y las instalaciones con 
            tecnología de punta convierten el sistema de salud alemán en uno de 
            los mejores sistemas sanitarios del mundo y tú puedes formar parte de él. 
            <br />
            <br />

            Al ser la medicina una profesión regulada por el Estado alemán es necesario 
            tener el reconocimiento de tu carrera para poder ejercerla dentro del país. 
            Nosotros te orientamos en cada paso y hacemos las gestiones para que obtengas 
            la autorización estatal para que puedas ejercer tu profesión y lograr tu meta
            de obtener un puesto de trabajo en Alemania. 
            <br />
            <br />

            En cuanto al idioma, lo puedes aprender en paralelo mientras realizas 
            el proceso de homologación con nosotros hasta alcanzar un nivel B2 de 
            alemán, en tanto nosotros nos ocupamos de la documentación y burocracia
            en Alemania. 
            <br />
            <br />

            Antes de que armes tu equipaje nosotros preparamos tus papeles, así viajas con confianza y pasos firmes hacia tu futuro.
            </p>
        </section>

        <section className="callToAction_container">
        <img src={Jorge4} alt="Jorge" className="jorge_img" />

        <div className="text_container">
            <h2>
            Homologar tu título en Alemania
            <br />
            <span className="resaltar">¡ES POSIBLE!</span>
            </h2>
            <BtnStart />
        </div>
        </section>

        <section className="ourServicesText_ container">
            <h2 className="Title_ourServicesText">
            Nuestro Servicio de asesoría incluye 
            </h2>
            <ul>
                <p>
                Valoración de la situación del profesional en entrevista 
                inicial.Tomaremos en cuenta su enfoque profesional para 
                realizar su homologación y le aclararemos sus dudas sobre 
                el proceso y oportunidades laborales y le enviaremos 
                una lista de todos los documentos necesarios.
                </p>

                <p>
                Recolectamos y revisamos sus documentos antes de ser 
                interpuestos ante la autoridad alemana encargada de su 
                proceso de reconocimiento.
                </p>

                <p>
                Traducciones Juradas: contamos con traductores jurados para
                traducir los documentos que así lo requieran.Los costes para
                las traducciones juradas dependen de la cantidad de documentos 
                a traducir.
                </p>

                <p>
                Traducción de su currículo vitae, adaptación a un formato 
                alemán y creación de su carpeta de solicitud completa. Con 
                su perfil profesional podrá ingresar de manera exitosa al 
                mercado laboral alemán.
                </p>
            </ul>

            <p>Cuente con nuestra asesoría durante todo el proceso</p>
            
        </section>

        <section className="callToAction_container2">
            <h2 className="TitleConTainer2">
            Preguntas Frecuentes 
            </h2>
        </section>
    
    </main>
)
}

export default Homologate