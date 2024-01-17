import "./Landing.css"
import Jorge5 from "../../assets/icons/Jorge/jorge-5.svg"
import Arrow1 from "../../assets/icons/Arrow-landing1.svg"
import Arrow2 from "../../assets/icons/Arrow-landing5.svg"
import Arrow from "../../assets/icons/arrow.svg"
import Time from "../../assets/img/ahorra-tiempo-dinero.svg"
import JorgePaberater from "../../assets/img/jorge-Paberater.svg"
import AdviserForm from "../../components/adviser-form/AdviserForm"
import PhoneIcon from "../../assets/icons/Icon_phone.svg"
import BtnStartBlue from "../../components/btn-start-Blue/BtnStartBlue"
import ScrollToTop from "../../components/scrollToTop/ScrollToTop"
import { Link } from "react-router-dom"
import "animate.css"


function Landing() {
  return (
    <>
    <ScrollToTop />
        <div className="frame-youtube">
            <iframe
            width="90%"
            height="600vh"
            src={`https://www.youtube.com/embed/I_xoQ3T-FoM`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen

        ></iframe>
        </div>

      <section className='first-stape'>
        <h1 className="first-title-landing"> <span className="article-span">El</span>  primer paso hacia</h1>
        <h4 className="first-text-landing">tu crecimiento profesional</h4>
        <h2 className="second-title-landing"><span className="article-span">en</span> Alemania</h2>
        <h5 className="second-text-landing">está solo a 30min</h5>
      </section>

      <section className="section-assignment">
        <p>¡Te asignaremos un asesor personalizado!</p>
      </section>
    
        
    <section className="formView">
        <AdviserForm />
       <div className="photoSection" >
        <article className="landing-contact">
            <h2 style={{fontSize:"2.5rem", marginTop:"1.5rem"}}>¿HABLAMOS?</h2>
            <div className="phone_landing">
            <img src={PhoneIcon} alt="phone icon" />
            <a className="phoneNumber" href="tel:+4915780633091">+49 157 806 33091</a>
            </div>
        </article>
        
            <article className="talent">
                <div className="figure">
                    <img src={Jorge5} alt="jorge" className="jorge5" />
                    <div className='Figure-text-landing'>
                        <p className='text-landing'>Tu pones el talento, <br/> nosotros nos encargamos de lo demás</p>
                    </div>
                </div>        
            </article>
            </div>
    </section>

    <section className="arowsImg">  
            <article className="steps-landing">
                <section className="landing-map">
                    <p className="text-landing-map1">Responderemos todas tus dudas</p>
                    <img src={Arrow1} alt="arrow1" className="arrow" />
                </section>
                    <section className="landing-map">
                    <img src={Arrow2} alt="flecha" className="arrow" />
                    <p className="text-landing-map2">Proceso ágil, transparente y confiable</p>
                </section>
                    <section className="landing-map">
                    <p className="text-landing-map3">Oportunidades acorde a tu perfil profesional</p>
                </section>  
            </article>


            <section className="time-landing">
                <img className="img_time" src={Time} alt="" />
                <div className="btn_time">
               
                    <button className="btn-time-btn">
                    ¡Comenzámos! <img style={{margin:"4%"}} src={Arrow} alt="btn-arrow"/>
                    </button>               
                </div>
                
            </section>
            </section>      
        

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
            <button className="btn-start">
                ¡Quiero saber más! <img src={Arrow} alt="btn-arrow"/>
            </button>
            <img style={{width:"45vh"}} src={JorgePaberater} alt="" />
        </section>
    </>
  )
}

export default Landing