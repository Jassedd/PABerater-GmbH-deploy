import React from "react";
import Jorge3 from "../../assets/img/jorge-5.png";
import QAaccordion from "../../components/q&a-accordion/Q&A-accordion";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { Link } from "react-router-dom";
import "./SuccesStories.css";
import Case1 from "../../assets/img/CasoExito-1.png";
import Case2 from "../../assets/img/CasoExito-2.png";
import Case3 from "../../assets/img/CasoExito-3.png";
import Case4 from "../../assets/img/CasoExito-4.png";
import Exito from "../../assets/img/exito.jpg";
import { useTranslation } from "react-i18next";
import getLanguageLink from "../../helpers/getLanguageLink";
import { landingRoute } from "../../constants/routeNames";
import TranslationServicesBanner from "../../components/translations-services-banner/TranslationsServicesBanner";
import StandardFaq from "../../components/RegularFaq/RegularFaq";
import { Helmet } from "react-helmet";
import PageBanner from "../../components/PageBanner/PageBanner";

function SuccesStories() {
    const { t, i18n } = useTranslation();

    const pageTitle = t("successStoriesPage.title");
    const pageText = t("successStoriesPage.text");
    const seoTitle = t("homePage.seoTitle");
    const seoDescription = t("successStoriesPage.seoDescription");
    const successStory1Title = t("sections.successStories.story1.title");
    const successStory1Text = t("sections.successStories.story1.text");
    const successStory1Video = t("sections.successStories.story1.video");

    const successStory2Title = t("sections.successStories.story2.title");
    const successStory2Text = t("sections.successStories.story2.text");
    const successStory2Video = t("sections.successStories.story2.video");

    const successStory3Title = t("sections.successStories.story3.title");
    const successStory3Text = t("sections.successStories.story3.text");
    const successStory3Video = t("sections.successStories.story3.video");

    const successStory4Title = t("sections.successStories.story4.title");
    const successStory4Text = t("sections.successStories.story4.text");
    const successStory4Video = t("sections.successStories.story4.video");

    const successStory5Title = t("sections.successStories.story5.title");
    const successStory5Text = t("sections.successStories.story5.text");
    const successStory5Video = t("sections.successStories.story5.video");

    const successStory6Title = t("sections.successStories.story6.title");
    const successStory6Text = t("sections.successStories.story6.text");
    const successStory6Video = t("sections.successStories.story6.instagramUrl");

    const successStory7Title = t("sections.successStories.story7.title");
    const successStory7Text = t("sections.successStories.story7.text");
    const successStory7Video = t("sections.successStories.story7.instagramUrl");

    const successStory8Title = t("sections.successStories.story8.title");
    const successStory8Text = t("sections.successStories.story8.text");
    const successStory8Video = t("sections.successStories.story8.instagramUrl");

    const successStory9Title = t("sections.successStories.story9.title");
    const successStory9Text = t("sections.successStories.story9.text");
    const successStory9Video = t("sections.successStories.story9.instagramUrl");

    const seeVideoButtontText = t("general.seeInstagramVideoButton");

    const callToActionTitle = t("sections.callToActionBanner2.title");
    const callToActionButton = t("sections.callToActionBanner2.button");

    const callToAction2Title = t(
        "sections.callToActionTransformBanner.boldText"
    );
    const callToAction2Text = t("sections.callToActionTransformBanner.text");
    const callToAction2Button = t(
        "sections.callToActionTransformBanner.button"
    );

    const fullLandingRoute = getLanguageLink(landingRoute, i18n);

    return (
        <main>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
            </Helmet>
            <ScrollToTop />
            <PageBanner title={pageTitle} image={Exito} />
            {/*    <section className="translate_services3">
                <img src={Exito} alt="service3" className="banner-img_3" />
                <div className="figure_title3">
                    <h1 className="title3_img_translate">{pageTitle}</h1>
                </div>
            </section> */}
            <br />
            <br />
            <p className="title_text_translate">{pageText}</p>

            <br />

            <section className="ServiceSuccessYt">
                <div className="firstArticleTranslationSuccesStorie">
                    <div className="name_video_succesStories">
                        <p>{successStory1Title}</p>
                    </div>
                    <p className="descriptionSuccessStories">
                        {successStory1Text}
                    </p>
                </div>

                <div className="divVideoSuccessStories">
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

            <section className="ServiceSuccessYt">
                <div className="firstArticleTranslationSuccesStorie">
                    <div className="name_video_succesStories">
                        <p>{successStory2Title}</p>
                    </div>
                    <p className="descriptionSuccessStories">
                        {successStory2Text}
                    </p>
                </div>
                <div className="divVideoSuccessStories">
                    <iframe
                        width="100%"
                        height="200"
                        src={successStory2Video}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        className="yt-service"
                    ></iframe>
                </div>
            </section>

            <section className="ServiceSuccessYt">
                <div className="firstArticleTranslationSuccesStorie">
                    <div className="name_video_succesStories">
                        <p>{successStory3Title}</p>
                    </div>
                    <p className="descriptionSuccessStories">
                        {successStory3Text}
                    </p>
                </div>
                <div className="divVideoSuccessStories">
                    <iframe
                        width="100%"
                        height="200"
                        src={successStory3Video}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        className="yt-service"
                    ></iframe>
                </div>
            </section>
            <section className="ServiceSuccessYt">
                <div className="firstArticleTranslationSuccesStorie">
                    <div className="name_video_succesStories">
                        <p>{successStory4Title}</p>
                    </div>
                    <p className="descriptionSuccessStories">
                        {successStory4Text}
                    </p>
                </div>
                <div className="divVideoSuccessStories">
                    <iframe
                        width="100%"
                        height="200"
                        src={successStory4Video}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        className="yt-service"
                    ></iframe>
                </div>
            </section>

            <section className="ServiceSuccessYt">
                <div className="firstArticleTranslationSuccesStorie">
                    <div className="name_video_succesStories">
                        <p>{successStory5Title}</p>
                    </div>
                    <p className="descriptionSuccessStories">
                        {successStory5Text}
                    </p>
                </div>

                <div className="divVideoSuccessStories">
                    <iframe
                        width="100%"
                        height="200"
                        src={successStory5Video}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        className="yt-service"
                    ></iframe>
                </div>
            </section>

            <section className="ServiceSuccessYt">
                <div className="firstArticleTranslationSuccesStorieIg">
                    <div className="name_video_succesStories">
                        <p>{successStory6Title}</p>
                    </div>
                    <p className="descriptionSuccessStories">
                        {successStory6Text}{" "}
                        <Link
                            to={successStory6Video}
                            className="LinksuccessStoriesSection"
                            target="_blank"
                        >
                            {seeVideoButtontText}
                        </Link>
                    </p>
                </div>

                <div className="divVideoSuccessStoriesIg">
                    <Link
                        to="https://www.instagram.com/reel/CkL-gBKjHFw/?utm_source=ig_web_copy_link"
                        className="LinksuccessStoriesSection"
                        target="_blank"
                    >
                        <img className="imgCase" src={Case1} alt="" />
                    </Link>
                </div>
            </section>

            <section className="ServiceSuccessYt">
                <div className="firstArticleTranslationSuccesStorieIg">
                    <div className="name_video_succesStories">
                        <p>{successStory7Title}</p>
                    </div>
                    <p className="descriptionSuccessStories">
                        {successStory7Text}

                        <Link
                            className="LinksuccessStoriesSection"
                            to={successStory7Video}
                            target="_blank"
                        >
                            {seeVideoButtontText}
                        </Link>
                    </p>
                </div>
                <div className="divVideoSuccessStoriesIg">
                    <Link
                        className="LinksuccessStoriesSection"
                        to={successStory7Video}
                        target="_blank"
                    >
                        <img className="imgCase" src={Case2} alt="" />
                    </Link>
                </div>
            </section>

            <section className="ServiceSuccessYt">
                <div className="firstArticleTranslationSuccesStorieIg">
                    <div className="name_video_succesStories">
                        <p>{successStory8Title}</p>
                    </div>
                    <p className="descriptionSuccessStories">
                        {successStory8Text}

                        <Link
                            className="LinksuccessStoriesSection"
                            to={successStory8Video}
                            target="_blank"
                        >
                            {seeVideoButtontText}
                        </Link>
                    </p>
                </div>
                <div className="divVideoSuccessStoriesIg">
                    <Link
                        className="LinksuccessStoriesSection"
                        to="https://www.instagram.com/reel/CkwMYQtDHpL/?utm_source=ig_web_copy_link"
                        target="_blank"
                    >
                        <img className="imgCase" src={Case3} alt="" />
                    </Link>
                </div>
            </section>

            <section className="ServiceSuccessYt">
                <div className="firstArticleTranslationSuccesStorieIg">
                    <div className="name_video_succesStories">
                        <p>{successStory9Title}</p>
                    </div>
                    <p className="descriptionSuccessStories">
                        {successStory9Text}

                        <Link
                            className="LinksuccessStoriesSection"
                            to={successStory9Video}
                            target="_blank"
                        >
                            {seeVideoButtontText}
                        </Link>
                    </p>
                </div>
                <div className="divVideoSuccessStoriesIg">
                    <Link
                        className="LinksuccessStoriesSection"
                        to="https://www.instagram.com/reel/Cpn226Jj2yo/?utm_source=ig_web_copy_link"
                        target="_blank"
                    >
                        <img className="imgCase" src={Case4} alt="" />
                    </Link>
                </div>
            </section>

            <section className="callToAction_succes_container">
                <h2 className="calltoaction_succes_title">
                    <strong className="succes_blue_name">
                        {callToAction2Title},{" "}
                    </strong>
                    {callToAction2Text}
                </h2>
                <div className="Jorge_call">
                    <img src={Jorge3} alt="Jorge" className="jorgeSucces_img" />
                    <div className="text_succes_container">
                        <br />
                        <Link to={fullLandingRoute}>
                            <button className="btn-comenzamos4">
                                {callToAction2Button}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <TranslationServicesBanner />

            <section className="callToAction_translate_container3">
                <h3 className="text_callToAction_translate_container3">
                    {callToActionTitle}
                </h3>
                <Link to={fullLandingRoute}>
                    <button className="btn-contact_3">
                        <p>{callToActionButton}</p>
                    </button>
                </Link>
            </section>

            <StandardFaq />
        </main>
    );
}

export default SuccesStories;
