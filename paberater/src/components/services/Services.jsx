import React from 'react'
import Service1 from "../../assets/img/service1.jpg"
import Service2 from "../../assets/img/service2.jpg"
import Service3 from "../../assets/img/service3.jpg"
import Service4 from "../../assets/img/service4.jpg"
import "./Services.css"

function Services() {
  return (
    <>
    <section className='section-services'>
        <h1>¿Qué Servicios Ofrecemos?</h1>
        <article className= "servicesArticle">
            <img src={Service1} alt="" className='img-service'/>
            <h3>Homologación de títulos</h3>
            <button><img src="" alt="" /></button>
        </article>

        <article className= "servicesArticle">
            <img src={Service2} alt="" className='img-service'/>
            <h3>Reconocimiento profesional</h3>
            <button><img src="" alt=""/></button>
        </article>

        <article className= "servicesArticle">
            <img src={Service3} alt="" className='img-service'/>
            <h3>Traducciones juradas</h3>
            <button><img src="" alt=""/></button>
        </article>

        <article className= "servicesArticle">
            <img src={Service4} alt="" className='img-service'/>
            <h3>Escuela de idioma</h3>
            <button><img src="" alt=""/></button>
        </article>
    </section>
    </>
  )
}

export default Services