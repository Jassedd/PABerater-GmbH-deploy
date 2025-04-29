import React from "react";
import { useTranslation } from "react-i18next";
import "./homologate.css";
import Jorge4 from "../../assets/img/jorge-4.png";
import Service1 from "../../assets/img/service1.jpg";
import QAaccordion from "../../components/q&a-accordion/Q&A-accordion";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { Link } from "react-router-dom";
import getLanguageLink from "../../helpers/getLanguageLink";
import { landingRoute } from "../../constants/routeNames";
import ContactBanner from "../../components/ContactBanner";
import RegularFaq from "../../components/RegularFaq/RegularFaq";
import { Helmet } from "react-helmet";
import FaqGray from "../../components/FaqGray/FaqGray";
import PageBanner from "../../components/PageBanner/PageBanner";

function Homologate() {
    const { t, i18n } = useTranslation();

    const seoTitle = t("homologationPage.seoTitle");
    const seoDescription = t("homologationPage.seoDescription");

    const callToActionBanner1Title = t("general.callToActionBanner1.title");
    const callToActionBanner1Subtitle = t(
        "general.callToActionBanner1.subtitle"
    );
    const callToActionBanner1Button = t("general.callToActionBanner1.button");

    const serviceSectionTitle = t("homologationPage.services.title");
    const serviceSectionSubtitle = t("homologationPage.services.subtitle");
    const service1Text = t("homologationPage.services.service1");
    const service2Text = t("homologationPage.services.service2");
    const service3Text = t("homologationPage.services.service3");
    const service4Text = t("homologationPage.services.service4");

    const client1Title = t("homologationPage.clients.client1.title");
    const client1Text = t("homologationPage.clients.client1.text");
    const client1Video = t("homologationPage.clients.client1.video");

    const pageTitle = t("homologationPage.pageTitle").trim();
    const pageSubtitle = t("homologationPage.pageSubtitle").trim();

    const bannerTitle = t("homologationPage.banner.title");
    const bannerText = t("homologationPage.banner.text");

    const pageText = t("homologationPage.pageText");
    const callToActionBannerTitle = t("general.callToActionBanner2.title");
    const callToActionButton = t("general.callToActionBanner2.button");

    const fullLandingRoute = getLanguageLink(landingRoute, i18n);

    return (
        <main>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
            </Helmet>
            <ScrollToTop />
            <PageBanner
                image={Service1}
                subtitle={pageSubtitle}
                title={pageTitle}
            />

            <h1 className="title">{bannerTitle}</h1>
            <p className="title_text">{bannerText}</p>

            <section className="title_section">
                <div className="firstArticleHomologation">
                    <div className="name_video">
                        <p>{client1Title}</p>
                    </div>
                    <br />
                    <p className="text_name_video">{client1Text}</p>

                    <br />
                </div>
                <div className="Darling_video">
                    <iframe
                        width="100%"
                        height="200em"
                        src={client1Video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        className="yt-service"
                    ></iframe>
                </div>
            </section>

            <section className="text_background_Blue">
                <p className="text_blueContainer">{pageText}</p>
            </section>

            <section className="callToAction_container">
                <img src={Jorge4} alt="Jorge" className="jorge_img" />

                <div className="text_container">
                    <h2 className="calltoaction_title">
                        {callToActionBanner1Title}
                    </h2>
                    <h3 className="posible_text">
                        {callToActionBanner1Subtitle}
                    </h3>
                    <Link to={fullLandingRoute}>
                        <button className="btn-comenzamos">
                            {callToActionBanner1Button}
                        </button>
                    </Link>
                </div>
            </section>

            <section className="ourServicesText_container">
                <h2 className="Title_ourServices_Text">
                    {serviceSectionTitle}
                </h2>
                <ul className="li_ourServicesText">
                    <li>{service1Text}</li>
                    <br />
                    <li>{service2Text}</li>
                    <br />
                    <li>{service3Text}</li>
                    <br />
                    <li>{service4Text}</li>
                </ul>
                <h3 className="resaltar_text2">{serviceSectionSubtitle}</h3>
            </section>

            <section className="callToAction_container2">
                <h3 className="text_callToAction_container2">
                    {callToActionBannerTitle}
                </h3>
                <Link to={fullLandingRoute}>
                    <button className="btn-contact">
                        {callToActionButton}
                    </button>
                </Link>
            </section>
            <FaqGray />
        </main>
    );
}

export default Homologate;
