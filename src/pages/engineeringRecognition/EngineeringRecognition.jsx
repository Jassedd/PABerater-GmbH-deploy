import React from "react";
import "../recognition/recognition.css";
import Jorge2 from "../../assets/img/Jorge2.png";
import Service2 from "../../assets/img/service5.jpg";
import QAaccordion from "../../components/q&a-accordion/Q&A-accordion";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { Link } from "react-router-dom";
import getLanguageLink from "../../helpers/getLanguageLink";
import { contactRoute, landingRoute } from "../../constants/routeNames";
import { useTranslation } from "react-i18next";
import StandardFaq from "../../components/RegularFaq/RegularFaq";
import ServicesSection from "../../components/services-section/ServicesSection";
import { Helmet } from "react-helmet";
import PageBanner from "../../components/PageBanner/PageBanner";

function EngineeringRecognition() {
    const { t, i18n } = useTranslation();

    const seoTitle = t("engineeringRecognitionPage.faqSubtitle");
    const seoDescription = t("engineeringRecognitionPage.seoDescription");
    const pageTitle = t("engineeringRecognitionPage.title");
    const bannerTitle = t("engineeringRecognitionPage.bannerTitle");
    const bannerText = t("engineeringRecognitionPage.bannerText");
    const successStoryTitle = t("sections.successStories.story4.title");
    const successStoryText = t("sections.successStories.story4.text");
    const successStoryVideo = t("sections.successStories.story4.video");

    const successStory2Title = t("sections.successStories.story9.title");
    const successStory2Text = t("sections.successStories.story9.text");
    const successStory2Video = t("sections.successStories.story9.instagramUrl");

    const successStory3Title = t("sections.successStories.story6.title");
    const successStory3Text = t("sections.successStories.story6.text");
    const successStory3Video = t("sections.successStories.story6.instagramUrl");

    const successStory4Title = t("sections.successStories.story8.title");
    const successStory4Text = t("sections.successStories.story8.text");
    const successStory4Video = t("sections.successStories.story8.instagramUrl");

    const successStory5Title = t("sections.successStories.story7.title");
    const successStory5Text = t("sections.successStories.story7.text");
    const successStory5Video = t("sections.successStories.story7.instagramUrl");

    const seeInstagramVideoButton = t("general.seeInstagramVideoButton");
    const successCasesTitle = t("engineeringRecognitionPage.successCasesTitle");
    const successCasesSubtitle = t(
        "engineeringRecognitionPage.successCasesSubtitle"
    );

    const ctaTitle = t("sections.recognizeTitleCallToAction.title");
    const ctaSubtitle = t("sections.recognizeTitleCallToAction.subtitle");
    const ctaButton = t("sections.recognizeTitleCallToAction.button");

    const contactCtaTitle = t("sections.callToActionBanner2.title");
    const contactCtaButton = t("sections.callToActionBanner2.button");
    const fullContactRoute = getLanguageLink(contactRoute, i18n);
    const fullLandingRoute = getLanguageLink(landingRoute, i18n);

    return (
        <main>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
            </Helmet>
            <ScrollToTop />
            <PageBanner image={Service2} title={pageTitle} />
            {/*    <section className="recognition_services">
                <img src={Service2} alt="service1" className="banner-img_2" />
                <div className="figure_title2">
                    <h1 className="title2_img_recognition">{pageTitle}</h1>
                </div>
            </section> */}
            <h1 className="title_section_recognition">{bannerTitle}</h1>
            <p className="title_text_recognition">{bannerText}</p>
            <br />
            <section className="title_section2">
                <div className="firstArticleRecognition">
                    <div className="name_video2">
                        <p className="titlesuccessStoriesVideo">
                            {successStoryTitle}
                        </p>
                    </div>{" "}
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
            <section className="callToAction_recognition_containerSuccess">
                <img src={Jorge2} alt="Jorge" className="jorge2_img" />

                <div className="text_container">
                    <h2 className="calltoaction_recognition_title">
                        {ctaTitle}
                    </h2>
                    <br />
                    <h3 className="posible_text2"> {ctaSubtitle}</h3>
                    <Link to={fullLandingRoute}>
                        <button className="btn-comenzamos2">{ctaButton}</button>
                    </Link>
                </div>
            </section>
            <ServicesSection />
            <section className="callToAction_recognition_container2">
                <h3 className="text_callToAction_recognition_container2">
                    {contactCtaTitle}
                </h3>
                <Link to={fullContactRoute}>
                    <button className="btn-contact_2">
                        <p>{contactCtaButton}</p>
                    </button>
                </Link>
            </section>
            <section className="successStoriesSection">
                <h2 className="successStoriesSectionTitle">
                    {successCasesTitle}
                </h2>
                <p className="textsuccessStoriesSection">
                    {successCasesSubtitle}
                </p>
                <br />
                <h5 className="successStoriesSectionName">
                    {successStory2Title}
                </h5>
                <p className="textsuccessStoriesSection">
                    {successStory2Text}

                    <Link
                        className="LinksuccessStoriesSection"
                        to={successStory2Video}
                        target="_blank"
                    >
                        {seeInstagramVideoButton}
                    </Link>
                </p>
                <br />
                <h5 className="successStoriesSectionName">
                    {successStory3Title}
                </h5>
                <p className="textsuccessStoriesSection">
                    {successStory3Text}

                    <Link
                        to={successStory3Video}
                        className="LinksuccessStoriesSection"
                        target="_blank"
                    >
                        {seeInstagramVideoButton}
                    </Link>
                </p>
                <br />
                <h5 className="successStoriesSectionName">
                    {successStory4Title}
                </h5>
                <p className="textsuccessStoriesSection">
                    {successStory4Text}

                    <Link
                        to={successStory4Video}
                        className="LinksuccessStoriesSection"
                        target="_blank"
                    >
                        {seeInstagramVideoButton}
                    </Link>
                </p>
                <br />
                <h5 className="successStoriesSectionName">
                    {successStory5Title}
                </h5>
                <p className="textsuccessStoriesSection">
                    {successStory5Text}

                    <Link
                        className="LinksuccessStoriesSection"
                        to={successStory5Video}
                        target="_blank"
                    >
                        {seeInstagramVideoButton}
                    </Link>
                </p>
                <br />
            </section>
            <StandardFaq />
        </main>
    );
}

export default EngineeringRecognition;
