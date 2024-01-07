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
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Item>

            <Carousel.Item className="commentItems">
              <img src={ExampleCarouselImage} alt="" />
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Item>

            <Carousel.Item className="commentItems">
              <img src={ExampleCarouselImage} alt="" />
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Item>
          </Carousel>
        </section>
      </>
    );
  }
  

export default Comments;
