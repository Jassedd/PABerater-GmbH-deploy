import React from 'react';
import './Home.css'

const Home = () => {
  const stepHeight = 100;

  const lineStyle = {
    stroke: 'white',
    strokeWidth: 2,
  };



  return (
    <>
    <section className='Asesoramos'>
        <h1>Asesoramos</h1>
        <p>
        a profesionales hispanohablantes a ingresar al mercado laboral alemán prestando servicios relacionados con su reconocimientos académico aquí en Alemania.
        </p>
      <svg>
        <line x1="200" y1="50" x2="200" y2={10} style={lineStyle} />
        <line x1="20" y1={stepHeight -50} x2="200" y2={stepHeight -50} style={lineStyle} />
          <line x1="20" y1={50} x2="20" y2={200} style={lineStyle} />
      </svg>
    </section>

    <section className='Acompañamos'>
        <h1>Acompañamos</h1>
        <p>
          paso a paso, antes y durante el proceso de la homologación o reconocimiento de sus títulos profesionales.
        </p>
        <svg>
          <line x1="80" y1={50} x2="80" y2={-200} style={lineStyle} />
          <line x1="80" y1={stepHeight -50} x2="250" y2={stepHeight -50} style={lineStyle} />
          <line x1="250" y1={50} x2="250" y2={200} style={lineStyle} />
        </svg>
      </section>

      <section className='Gestionamos'>
        <h1>Gestionamos</h1>
        <p>
          TODO. En PABerater somos conocedores del proceso porque pasamos por ello y por eso nuestra misión es ayudarte proporcionándote toda la información de una manera accesible y fácil de entender.
        </p>
      </section>

    </>
  );
};

export default Home;
