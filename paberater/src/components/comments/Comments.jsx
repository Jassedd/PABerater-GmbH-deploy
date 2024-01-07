import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../assets/icons/Avatar_reseñas.svg";
import "./Comments.css"

function Comments() {
    return (
      <>
        <section className="sectionComments">
          <h2 style={{color: "#25357a"}}>Ellos confiaron en nosotros:</h2>
  
          <Carousel className="custom-carousel">
            <Carousel.Item className="commentItems">
              <img src={ExampleCarouselImage} alt="" />
                <h3>Frida Abril Pinto</h3>
                <p>Estoy agradecida con el equipo PABerater, soy Peruana 
                  y he podido obtener mi residencia Alemana rápidamente gracias 
                  al equipo.
                  Muy amables, no crean falsas expectativas, las conversaciones 
                  siempre fueron muy directas y siempre me sentí cómoda. 
                  Muchas gracias.
                </p>
            </Carousel.Item>

            <Carousel.Item className="commentItems">
              <img src={ExampleCarouselImage} alt="" />
                <h3>Yuly Cáceres Abril</h3>
                <p>Si hubieran 10 estrellas las pondría, Jorge y su equipo 
                  me ayudaron con algo que creí imposible, residencia para mi mamá.
                  Estoy súper feliz de haber contactado con este equipo, siempre 
                  respondieron mis dudas y me acompañaron con el proceso 
                  de principio a fin 🙏🏾 Y no solo eso Jorge siempre me responde 
                  dudas adicionales, el mejor equipo PABerater sin duda, que 
                  Diosito los bendiga 🤗
                  </p>
            </Carousel.Item>

            <Carousel.Item className="commentItems">
              <img src={ExampleCarouselImage} alt="" />
                <h3>Karen Varela</h3>
                <p>
                Me trataron de manera rápida y atenta. Los recomiendo y agradezco 
                por la información brindada.
                La verdad que en el medio de toda la burocracia alemana y sentirme 
                como un número más. Aquí finalmente me sentí escuchada.
                Les mando un abrazo y gracias por los consejos brindados.
                </p>
            </Carousel.Item>
          </Carousel>
        </section>
      </>
    );
  }
  

export default Comments;
