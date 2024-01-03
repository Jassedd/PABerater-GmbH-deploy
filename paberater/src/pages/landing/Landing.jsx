import "./Landing.css"
import Jorge5 from "../../assets/icons/Jorge/jorge-5.svg"
import Arrow1 from "../../assets/icons/Arrow-landing1.svg"
import Arrow2 from "../../assets/icons/Arrow-landing5.svg"
import Time from "../../assets/img/ahorra-tiempo-dinero.svg"
import JorgePaberater from "../../assets/img/jorge-Paberater.svg"
import AdviserForm from "../../components/adviser-form/AdviserForm"

function Landing() {
  return (
    <>
        <iframe
        width="90%"
        height="315"
        src={`https://www.youtube.com/embed/BUNz04l4dHg`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <section className='first-stape'>
        <h1>El primer paso hacia</h1>
        <h6>tu crecimiento profesional</h6>
        <h2>en Alemania</h2>
        <h5>está solo a 30min</h5>
      </section>

      <section>
        <p>¡Te asignaremos un asesor personalizado!</p>
      </section>

        <AdviserForm />

        <article>
            <img src="" alt="" />
            <p>info@paberater.de</p>
        </article>

        <article>
            <img src="" alt="" />
            <p>+49 157 806 33091</p>
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