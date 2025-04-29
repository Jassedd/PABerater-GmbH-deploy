import React from "react";
import Service1 from "../../assets/img/service1.jpg";
import Service2 from "../../assets/img/service2.jpg";
import Service3 from "../../assets/img/service3.jpg";
import Service5 from "../../assets/img/service5.jpg";
import ArrowBtn from "../../assets/icons/btn-arrow.svg";
import Arrow from "../../assets/icons/arrow.svg";
import "./Services.css";
import Jorge4 from "../../assets/img/jorge-4.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import getLanguageLink from "../../helpers/getLanguageLink";
import {
    engineersRecognitionRoute,
    homologationsRoute,
    landingRoute,
    recognitionRoute,
    swornTranslationsRoute,
} from "../../constants/routeNames";

function Services() {
    const { t, i18n } = useTranslation();
    const title = t("sections.servicesOffered.title");

    const text1 = t("sections.servicesOffered.text1");
    const text2 = t("sections.servicesOffered.text2");
    const text3 = t("sections.servicesOffered.text3");
    const text4 = t("sections.servicesOffered.text4");
    const bannerTitle = t("sections.servicesOffered.bannerTitle");
    const bannerButton = t("sections.servicesOffered.bannerButton");
    const bannerText = t("sections.servicesOffered.bannerText");

    const fullLandingRoute = getLanguageLink(landingRoute, i18n);
    const fullTranslationsRoute = getLanguageLink(swornTranslationsRoute, i18n);

    const fullEngineerRecognitionRoute = getLanguageLink(
        engineersRecognitionRoute,
        i18n
    );
    const fullHomologationsRoute = getLanguageLink(homologationsRoute, i18n);
    const fullRecognitionRoute = getLanguageLink(recognitionRoute, i18n);

    return (
        <>
            <section className="section-services">
                <div className="figure-BtnBigAdbisory"></div>
                <h2 className="title-services">{title}</h2>
                <section className="allServices">
                    <article className="servicesArticle">
                        <img src={Service1} alt="" className="img-service" />
                        <section className="titleService">
                            <h3 className="serviceName">{text1}</h3>
                            <Link
                                to={fullHomologationsRoute}
                                className="btn-circle"
                            >
                                <button className="btn-arrow-service">
                                    <img
                                        className="arrow-btn-service"
                                        src={ArrowBtn}
                                        alt="button arrow"
                                    />
                                </button>
                            </Link>
                        </section>
                    </article>

                    <article className="servicesArticle">
                        <img src={Service2} alt="" className="img-service" />
                        <section className="titleService">
                            <h3 className="serviceName">{text2}</h3>
                            <Link
                                to={fullRecognitionRoute}
                                className="btn-circle"
                            >
                                <button className="btn-arrow-service">
                                    <img
                                        className="arrow-btn-service"
                                        src={ArrowBtn}
                                        alt="button arrow"
                                    />
                                </button>
                            </Link>
                        </section>
                    </article>

                    <article className="servicesArticle">
                        <img src={Service5} alt="" className="img-service" />
                        <section className="titleService">
                            <h3 className="serviceName">{text3}</h3>
                            <Link
                                to={fullEngineerRecognitionRoute}
                                className="btn-circle"
                            >
                                <button className="btn-arrow-service">
                                    <img
                                        className="arrow-btn-service"
                                        src={ArrowBtn}
                                        alt="button arrow"
                                    />
                                </button>
                            </Link>
                        </section>
                    </article>

                    <article className="servicesArticle">
                        <img src={Service3} alt="" className="img-service" />
                        <section className="titleService">
                            <h3 className="serviceName">{text4}</h3>
                            <Link
                                to={fullTranslationsRoute}
                                className="btn-circle"
                            >
                                <button className="btn-arrow-service">
                                    <img
                                        className="arrow-btn-service"
                                        src={ArrowBtn}
                                        alt="button arrow"
                                    />
                                </button>
                            </Link>
                        </section>
                    </article>
                </section>
            </section>

            <article>
                <div className="JorgeSection">
                    <img src={Jorge4} alt="Jorge" className="Jorge-4" />
                    <div className="JorgeArt">
                        <h1 className="jorgeSection_name">{bannerTitle}</h1>
                        <p className="jorgeSection_text">{bannerText}</p>
                        <Link to={fullLandingRoute}>
                            <button className="btn-bookApoinment">
                                {bannerButton}
                                <img
                                    src={Arrow}
                                    alt="arrow"
                                    className="arrow4"
                                />
                            </button>
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
}

export default Services;
