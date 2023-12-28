import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./SuccessStories.css";

function SuccessStories() {
  return (
    <section className="successStories">
      <h1>Ellos han confiado en PABerater</h1>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/BUNz04l4dHg`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <Carousel className="custom-carousel">
        <Carousel.Item className="commentItems">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Item>

        <Carousel.Item className="commentItems">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Item>

        <Carousel.Item className="commentItems">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default SuccessStories;
