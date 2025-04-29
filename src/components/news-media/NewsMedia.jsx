import React from "react";
import Carousel from "react-bootstrap/Carousel";
/* import ExampleCarouselImage1 from "../../assets/img/news1.png";
import ExampleCarouselImage2 from "../../assets/img/news2.png"; */
import "./NewsMedia.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NewsMedia() {
    const { t } = useTranslation();
    const title = t("sections.newsMediaSection.title");
    const linkText = t("sections.newsMediaSection.linkText");
    const link1 = t("sections.newsMediaSection.link1");
    const link2 = t("sections.newsMediaSection.link2");
    const image1 = t("sections.newsMediaSection.image1");
    const image2 = t("sections.newsMediaSection.image2");

    return (
        <>
            <section className="sectionNewsMedia">
                <h2 style={{ color: "#25357a" }}>{title} </h2>

                <Carousel className="mediaNews-carousel">
                    <Carousel.Item className="news">
                        <img src={image1} alt="articulo" className="news1" />
                        <Link to={link1} target="_blank">
                            <p className="news-title">{linkText}</p>
                        </Link>
                    </Carousel.Item>

                    <Carousel.Item className="news">
                        <img src={image2} alt="articulo" className="news2" />
                        <Link to={link2} target="_blank">
                            <p className="news-title">{linkText}</p>
                        </Link>
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    );
}

export default NewsMedia;
