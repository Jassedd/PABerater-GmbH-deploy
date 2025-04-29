import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../assets/icons/Avatar_reseñas.svg";
import "./Comments.css";
import { useTranslation } from "react-i18next";

function Comments() {
    const { t } = useTranslation();
    const title = t("sections.commentsCarousel.title");
    const item1Name = t("sections.commentsCarousel.item1.name");
    const item1Text = t("sections.commentsCarousel.item1.text");

    const item2Name = t("sections.commentsCarousel.item2.name");
    const item2Text = t("sections.commentsCarousel.item2.text");

    const item3Name = t("sections.commentsCarousel.item3.name");
    const item3Text = t("sections.commentsCarousel.item3.text");

    return (
        <>
            <section className="sectionComments">
                <h2 style={{ color: "#25357a" }}>{title} </h2>

                <Carousel className="custom-carousel">
                    <Carousel.Item className="commentItems">
                        <img src={ExampleCarouselImage} alt="" />
                        <h3>{item1Name}</h3>
                        <p>{item1Text}</p>
                    </Carousel.Item>

                    <Carousel.Item className="commentItems">
                        <img src={ExampleCarouselImage} alt="" />
                        <h3>{item2Name}</h3>
                        <p> {item2Text}</p>
                    </Carousel.Item>

                    <Carousel.Item className="commentItems">
                        <img src={ExampleCarouselImage} alt="" />
                        <h3>{item3Name}</h3>
                        <p>{item3Text}</p>
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    );
}

export default Comments;
