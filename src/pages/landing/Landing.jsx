import "./Landing.css"
import Jorge5 from "../../assets/icons/Jorge/jorge-5.svg"
import Arrow1 from "../../assets/icons/Arrow-landing1.svg"
import Arrow2 from "../../assets/icons/Arrow-landing5.svg"
import IconPhone2 from "../../assets/icons/Iconphone.svg"
import Arrow from "../../assets/icons/arrow.svg"
import Time from "../../assets/img/ahorra-tiempo-dinero.svg"
import AdviserForm from "../../components/adviser-form/AdviserForm"
import BtnStartBlue from "../../components/btn-start-Blue/BtnStartBlue"
import ScrollToTop from "../../components/scrollToTop/ScrollToTop"
import NewsMedia from "../../components/news-media/NewsMedia"
import { Link } from "react-router-dom"
import "animate.css"


function Landing() {
  return (
    <>
    <ScrollToTop />
    
    <section className="form_landing">
        <div className="frame-youtube">
            <iframe
            width="100%"
            height="700vh"
            src={`https://www.youtube.com/embed/I_xoQ3T-FoM`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
        </div>
        <div className="adviser-form-landing">
            <div className="section-assignment">
                <p>¡Te asignaremos un asesor personalizado!</p>
            </div>
            <AdviserForm />
        </div>
    </section>


    <section className='first-stape'>
        <div className="text_first-stape">
        <h1 className="first-title-landing"> <span className="article-span">El</span>  primer paso hacia</h1>
        <h4 className="first-text-landing">tu crecimiento profesional</h4>
        <h2 className="second-title-landing"><span className="article-span">en</span> Alemania</h2>
        <h5 className="second-text-landing">está solo a 30min</h5>
        </div>
    </section>

    <section className="phoneContact" >

        <article className="steps-landing">
            <div className="steps-title">
                <h2 className="steps-title">
                    El primer paso hacia tu crecimiento profesional <br />
                    en Alemania, está a solo 30 min"
                </h2>
            </div>
            <section className="landing-map">
                <p className="text-landing-map1">Responderemos todas tus dudas</p>
                <img src={Arrow1} alt="arrow1" className="arrow" />
            </section>
                <section className="landing-map">
                <img src={Arrow2} alt="flecha" className="arrow" />
                <p className="text-landing-map2">Proceso ágil, transparente y confiable</p>
            </section>
                <section className="landing-map">
                <p className="text-landing-map3">Oportunidades acorde <br />a tu perfil profesional</p>
            </section>  
        </article>
        <article className="landing-contact">
            <div className="figureAdvisory">
                <img src={Jorge5} alt="jorge" className="jorge-5" />
            </div>
            <h2 className="title_landing-contact">¿HABLAMOS?</h2>
            <div className="phone_landing">
            <img src={IconPhone2} alt="phone icon" className="phone_icon" />
            <a className="phoneNumber" href="tel:+4915780633091">+49 157 806 33091</a>
            </div>
            <div className='Figure-text-landing'>
            <p className='text-landing'>Tu pones el talento, <br/> nosotros nos encargamos de lo demás</p>
            </div>
        </article>
    </section>


        <section className="arowsImg">  
            <section className="pay-landing">
                <h1 className="pay-title">Medios de pago</h1>
                <h4 style={{fontSize: "1.3rem", fontWeight:"600"}}>Comienza tu proceso y paga en cómodas facilidades</h4>
                <p style={{fontSize: "1.5rem"}}>
                <br /> Elige el plan ideal para ti.<br /> <br />

                    <span className="span-landing">A.</span>  Inicia tu proceso y paga el 50% a los quince
                    días. Liquida 2 meses después.
                    <br /> <br />
                    <span className="span-landing">B.</span>  Pronto pago. Pago en una exhibición 
                    y te descontamos <span className="span-landing">100€.</span>
                </p>
                <Link to="/landing">
                    <button className="btn-start-landing">
                        ¡Quiero saber más! <img src={Arrow} alt="btn-arrow"/>
                    </button>
                </Link>
            </section>
            <section className="time-landing">
                <img className="img_time" src={Time} alt="" />
            </section>
        </section>      
        <NewsMedia />
    </>
  )
}

export default Landing