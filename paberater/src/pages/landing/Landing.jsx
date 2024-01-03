import "./Landing.css"
import Jorge5 from "../../assets/icons/Jorge/jorge-5.svg"
import Arrow1 from "../../assets/icons/Arrow-landing1.svg"
import Arrow2 from "../../assets/icons/Arrow-landing5.svg"
import Time from "../../assets/img/ahorra-tiempo-dinero.svg"
import JorgePaberater from "../../assets/img/jorge-Paberater.svg"
import AdviserForm from "../../components/adviser-form/AdviserForm"
import EmailIcon from "../../assets/icons/Icon_email.svg"
import PhoneIcon from "../../assets/icons/Icon_phone.svg"


function Landing() {
  return (
    <>
        <iframe
        width="90%"
        height="520vh"
        src={`https://www.youtube.com/embed/I_xoQ3T-FoM`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <section className='first-stape'>
        <h1 className="first-title-landing"> <span className="article-span">El</span>  primer paso hacia</h1>
        <h4 className="first-text-landing">tu crecimiento profesional</h4>
        <h2 className="second-title-landing"><span className="article-span">en</span> Alemania</h2>
        <h5 className="second-text-landing">está solo a 30min</h5>
      </section>

      <section className="section-assignment">
        <p>¡Te asignaremos un asesor personalizado!</p>
      </section>

        <AdviserForm />
        
        <article className="landing-contact">
            <img src={EmailIcon} alt="Email icon" />
            <p className="text-contact-landing">info@paberater.de</p>
        </article>

        <article className="landing-contact">
            <img src={PhoneIcon} alt="phone icon" />
            <p className="text-contact-landing">+49 157 806 33091</p>
        </article>
        <img src={Jorge5} alt="" className='Jorge-5-landing'/>
        <div className='Figure-text-landing'>
            <p className='text-landing'>Tu pones el talento, nosotros nos encargamos de lo demás</p>
        </div>

        <section>
            <p>Responderemos todas tus dudas</p>
        </section>
            <img src={Arrow1} alt="flecha" />
            <section>
            <p>Poceso ágil, transparente y confiable</p>
        </section>
        <img src={Arrow2} alt="flecha" />
            <section>
            <p>Oportunidades acorde a tu perfil profesional</p>
        </section>

        <section>
            <img src={Time} alt="" />
            <button>
                ¿Comenzamos?
            </button>
        </section>

        <section>
            <h1>Medios de pago</h1>
            <h4>Comienza tu proceso y paga en cómodas facilidades</h4>
            <p>
                Elige el plan ideal para ti.
                <br />
                <span className="span-landing">A.</span>  Inicia tu proceso y paga el 50% a los quince
                días. Liquida 2 meses después.
                <br />
                <span className="span-landing">B.</span>  Pronto pago. Pago en una exhibición 
                y te descontamos 100 €.
            </p>
            <button>
                ¡Quiero saber más!
            </button>
            <img src={JorgePaberater} alt="" />
        </section>
    </>
  )
}

export default Landing