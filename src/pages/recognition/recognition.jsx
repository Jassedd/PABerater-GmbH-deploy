import React from "react";
import "./recognition.css";
import Jorge2 from "../../assets/img/Jorge2.png";
import Service2 from "../../assets/img/service2.jpg";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { Link } from "react-router-dom";
import getLanguageLink from "../../helpers/getLanguageLink";
import { landingRoute } from "../../constants/routeNames";
import TranslationFaq from "../../components/RegularFaq/RegularFaq";
import ContactBanner from "../../components/ContactBanner";
import { useTranslation } from "react-i18next";
import ServicesSection from "../../components/services-section/ServicesSection";
import { Helmet } from "react-helmet";
import PageBanner from "../../components/PageBanner/PageBanner";

function Recognition() {
    const { t, i18n } = useTranslation();

    const pageTitle = t("recognitionPage.title");
    const seoTitle = t("recognitionPage.faqSubtitle");
    const seoDescription = t("recognitionPage.seoDescription");
    const infoBannerTitle = t("recognitionPage.banner.title");
    const infoBannerSubtitle = t("recognitionPage.banner.subtitle");

    const callToActionTitle = t("recognitionPage.callToAction.title");
    const callToActionSubtitle = t("recognitionPage.callToAction.subtitle");
    const callToActionButton = t("recognitionPage.callToAction.button");

    const successStoryTitle = t("sections.successStories.story3.title");
    const successStoryText = t("sections.successStories.story3.text");
    const successStoryVideo = t("sections.successStories.story3.video");
    const regulatedProfessionsBannerTitle = t(
        "recognitionPage.regulatedProfessionsBanner.title"
    );
    const regulatedProfessionsBannerTitle2 = t(
        "recognitionPage.regulatedProfessionsBanner.title2"
    );
    const regulatedProfessionsBannerText = t(
        "recognitionPage.regulatedProfessionsBanner.text"
    );
    const regulatedProfessionsBannerText2 = t(
        "recognitionPage.regulatedProfessionsBanner.text2"
    );
    const fullLandingRoute = getLanguageLink(landingRoute, i18n);

    return (
        <main>
            <ScrollToTop />
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
            </Helmet>

            <PageBanner title={pageTitle} image={Service2} />
            {/*    <section className="recognition_services">
                <img src={Service2} alt="service1" className="banner-img_2" />
                <div className="figure_title2">
                    <h1 className="title2_img_recognition">{pageTitle}</h1>
                </div>
            </section> */}

            <h1 className="title_section_recognition">{infoBannerTitle}</h1>

            <p className="title_text_recognition">{infoBannerSubtitle}</p>

            <br />
            <section className="title_section2">
                <div className="firstArticleRecognition">
                    <div className="name_video2">
                        <p>{successStoryTitle}</p>
                    </div>
                    <br />
                    <p className="text_name_video2">
                        {successStoryText}
                        <br />
                    </p>
                </div>
                <div className="Eugenio_video">
                    <iframe
                        width="100%"
                        height="200"
                        src={successStoryVideo}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        className="yt-service"
                    ></iframe>
                </div>
            </section>

            <section className="text_background_Blue2">
                <h3 className="subtitle1_text_background_blue2">
                    {regulatedProfessionsBannerTitle}
                </h3>
                <p className="text1_subtitle">
                    {regulatedProfessionsBannerText}
                </p>
                <h3 className="subtitle2_text_background_blue2">
                    {regulatedProfessionsBannerTitle2}
                </h3>
                <p className="text2_subtitle">
                    {regulatedProfessionsBannerText2}
                </p>
                <br />
            </section>

            <section className="callToAction_recognition_container">
                <img src={Jorge2} alt="Jorge" className="jorge2_img" />

                <div className="text_container">
                    <h2 className="calltoaction_recognition_title">
                        {callToActionTitle}
                    </h2>
                    <br />
                    <h3 className="posible_text2">{callToActionSubtitle}</h3>
                    <Link to={fullLandingRoute}>
                        <button className="btn-comenzamos2">
                            {callToActionButton}
                        </button>
                    </Link>
                </div>
            </section>

            <ServicesSection />
            <ContactBanner />

            <TranslationFaq />
        </main>
    );
}

export default Recognition;
