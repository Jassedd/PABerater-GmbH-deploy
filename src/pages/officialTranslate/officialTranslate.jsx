import React from "react";
import "./officialTranslate.css";
import Service3 from "../../assets/img/service3.jpg";
import Jorge3 from "../../assets/img/jorge-5.png";
import QAaccordion from "../../components/q&a-accordion/Q&A-accordion";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import StartYourLifeBanner from "../../components/start-your-life-banner/StartYourLifeBanner";
import TranslationServicesBanner from "../../components/translations-services-banner/TranslationsServicesBanner";
import StandardFaq from "../../components/RegularFaq/RegularFaq";
import getLanguageLink from "../../helpers/getLanguageLink";
import { landingRoute } from "../../constants/routeNames";
import { Helmet } from "react-helmet";
import PageBanner from "../../components/PageBanner/PageBanner";

function Translate() {
    const { t, i18n } = useTranslation();
    const seoTitle = t("translationsPage.faqSubtitle");
    const seoDescription = t("translationsPage.seoDescription");
    const pageTitle = t("translationsPage.pageTitle");
    const bannerTitle = t("translationsPage.bannerTitle");
    const bannerText = t("translationsPage.bannerText");
    const contactCallToActionBannerTitle = t(
        "general.callToActionBanner2.title"
    );
    const contactCalToActionButton = t("general.callToActionBanner2.button");

    const cvTranslationsTitle = t("translationsPage.cvTranslationsTitle");
    const cvTranslationsText = t("translationsPage.cvTranslationsText");
    const swornTranslationsTitle = t("translationsPage.swornTranslationsTitle");
    const swornTranslationsText = t("translationsPage.swornTranslationsText");
    const swornTranslationsBoldText = t(
        "translationsPage.swornTranslationsBoldText"
    );
    const fullLandingRoute = getLanguageLink(landingRoute, i18n);

    const successStory1Title = t("sections.successStories.story1.title");
    const successStory1Text = t("sections.successStories.story1.text");
    const successStory1Video = t("sections.successStories.story1.video");

    return (
        <main>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
            </Helmet>
            <ScrollToTop />

            <PageBanner image={Service3} title={pageTitle} />

            {/* <section className="translate_services3">
                <img src={Service3} alt="service3" className="banner-img_3" />
                <div className="figure_title3">
                    <h1 className="title3_img_translate">{pageTitle}</h1>
                </div>
            </section> */}

            <h1 className="title_section_translate">{bannerTitle}</h1>
            <br />
            <p className="title_text_translate">{bannerText}</p>
            <br />

            <section className="title_section3">
                <div className="firstArticleTranslation">
                    <div className="name_video3">
                        <p>{successStory1Title}</p>
                    </div>
                    <br />
                    <p className="text_name_video3">{successStory1Text}</p>
                </div>
                <div className="Reinaldo_video">
                    <iframe
                        width="100%"
                        height="200"
                        src={successStory1Video}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        className="yt-service"
                    ></iframe>
                </div>
            </section>

            <section className="text_background_Blue3">
                <h3 className="subtitle1_text_background_blue3">
                    {swornTranslationsTitle}
                </h3>
                <p className="text_translate_subtitle_1">
                    {swornTranslationsText}
                    <strong>{swornTranslationsBoldText}</strong>
                    <br />
                    <br />
                </p>
                <h3 className="subtitle2_text_background_blue3-1">
                    {cvTranslationsTitle}
                </h3>
                <p className="text_translate_subtitle_2">
                    {cvTranslationsText}
                </p>
                <br />
            </section>

            <StartYourLifeBanner />

            <TranslationServicesBanner />

            <section className="callToAction_translate_container3">
                <h3 className="text_callToAction_translate_container3">
                    {contactCallToActionBannerTitle}
                </h3>
                <Link to={fullLandingRoute}>
                    <button className="btn-contact_3">
                        <p>{contactCalToActionButton}</p>
                    </button>
                </Link>
            </section>

            <StandardFaq />
        </main>
    );
}

export default Translate;
