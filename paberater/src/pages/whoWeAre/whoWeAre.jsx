import JorgeWe from "../../assets/img/jorge-pineda-web2.png"

function whoWeAre() {
  return (
    <>
      <section>
        <h1>Somos</h1>
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
        <div className="figure">
          <img src={JorgeWe} alt="" />
        </div>
      </section>
      <section className="history">
        <h1>Nuestra Historia</h1>
        <p>
          Jorge Joel Pineda Arcia, abogado egresado de la Universidad Gran
          Mariscal de Ayacucho en Venezuela, en el año 2015 vivió la experiencia
          de emigrar y realizar su reconocimiento académico en Alemania y en
          2019 tuvo la idea de prestar el servicio de asesoría para inmigrantes
          profesionales por lo que fundó la empresa PABerater UG. <br />
          <br />
          Debido al constante crecimiento de la industria en Alemania y al
          creciente número de plazas vacantes en el sector de la ingeniería, la
          empresa PABerater estaba enfocada en este sector industrial y ahora
          trabajamos con clientes en todos los ámbitos profesionales: médicos,
          psicopedagogos, ingenieros. La empresa se encuentra en continuo
          crecimiento y gracias al esfuerzo y dedicación es ahora PABerater
          GmbH.
        </p>
      </section>
      <section className="section-new-life">
        <h2>Si yo pude, tú también puedes.</h2>
        <h3>PABerater,</h3>
        <h6>el compañero ideal para tu nueva vida en Alemania.</h6>
      </section>
    </>
  );
}

export default whoWeAre;
