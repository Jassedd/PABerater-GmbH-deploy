import "./WhoWeAre.css"
import JorgeWe from "../../assets/img/jorge-pineda-web2.png"

function WhoWeAre() {
  return (
    <>
      <section className="we-section">
        <h1 style={{color: "#C8A75A"}}>Somos</h1>
        <p>
          una empresa de asesoría privada con sede en Alemania, nos
          especializamos en asesorar a profesionales cualificados para su
          ingreso al mercado laboral alemán y en la prestación de servicios
          relacionados con su reconocimiento académico en Alemania y asesoría
          para la búsqueda de empleo. Ofrecemos un servicio integral para
          hispanohablantes.
        </p>
      </section>
      <section className="section-figure">
        <div className="figure-we">
          <img src={JorgeWe} alt="Jorge img" className="Jorge-we" />
        </div>
      </section>
      <section className="history">
        <h1 style={{color: "#C8A75A"}}>Nuestra Historia</h1>
        <p>
          <span className="span-we">Jorge Joel Pineda Arcia,</span> abogado egresado de la Universidad Gran
          Mariscal de Ayacucho en Venezuela, en el año 2015 vivió la experiencia
          de emigrar y realizar su reconocimiento académico en Alemania y en
          2019 tuvo la idea de prestar el servicio de asesoría para inmigrantes
          profesionales por lo que fundó la empresa <span className="span-we">PABerater UG.</span>  <br />
          <br />
          Debido al constante crecimiento de la industria en Alemania y al
          creciente número de plazas vacantes en el sector de la ingeniería, la
          empresa <span className="span-we">PABerater</span> estaba enfocada en este sector industrial y ahora
          trabajamos con clientes en todos los ámbitos profesionales: médicos,
          psicopedagogos, ingenieros. La empresa se encuentra en continuo
          crecimiento y gracias al esfuerzo y dedicación es ahora <span className="span-we">PABerater GmbH.</span>
        </p>
      </section>
      <section className="section-new-life">
        <h4 style={{color: "#25357a"}}>Si yo pude, tú también puedes.</h4>
        <h3 style={{color: "white"}}>PABerater,</h3>
        <h6 style={{color: "white"}}>el compañero ideal para tu nueva vida en Alemania.</h6>
      </section>
    </>
  );
}

export default WhoWeAre;