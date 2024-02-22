import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage1 from "../../assets/img/news1.png";
import ExampleCarouselImage2 from "../../assets/img/news2.png";
import "./NewsMedia.css"
import { Link } from "react-router-dom";


function NewsMedia() {
    return (
      <>
        <section className="sectionNewsMedia">
          <h2 style={{color: "#25357a"}}>Algunas entrevistas </h2>
  
          <Carousel className="mediaNews-carousel">
            <Carousel.Item className="news">
              <img src={ExampleCarouselImage1} alt="articulo" className="news1" />
              <Link to="https://www.elnacional.com/empresas-productos/paberater-el-emprendimiento-de-raices-venezolanas-que-brinda-oportunidades-a-hispanohablantes-en-alemania/">
                <p className="news-title">Leer artículo completo</p>
                </Link>
            </Carousel.Item>

            <Carousel.Item className="news">
              <img src={ExampleCarouselImage2} alt="articulo" className="news2" />
              <Link to="https://noticias.perfil.com/noticias/empresas-y-protagonistas/oportunidades-laborales-para-medicos-en-alemania-un-mercado-en-expansion-brand.phtml">
                <p className="news-title">Leer artículo completo</p>
                </Link>
            </Carousel.Item>
          </Carousel>
        </section>
      </>
    );
  }
  

export default NewsMedia;
