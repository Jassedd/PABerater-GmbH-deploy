import React from "react";
import "./ThanksPage.css";
import Jorge from "../../assets/img/jorge-9.jpg";
import { Link } from "react-router-dom";
import IntagramLogo from "../../assets/icons/logo_instagram.svg";
import YoutubeLogo from "../../assets/icons/logo_youtube.svg";
import FacebookLogo from "../../assets/icons/logo_facebook.svg";
import { Helmet } from "react-helmet";
import getLanguageLink from "../../helpers/getLanguageLink";
import { landingRoute } from "../../constants/routeNames";
import { useTranslation } from "react-i18next";

function ThanksPage() {
    const { t, i18n } = useTranslation();
    const title = t("thankYouPage.title");
    const subtitle = t("thankYouPage.subtitle");
    const button = t("thankYouPage.button");
    const fullLandingRoute = getLanguageLink(landingRoute, i18n);

    const seoTitle = t("agbPage.faqSubtitle");
    const seoDescription = t("agbPage.seoDescription");
    return (
        <>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
            </Helmet>
            <div className="SocialsThanks">
                <Link
                    to="https://www.instagram.com/paberater_/?utm_source=ig_embed&ig_rid=331b1bec-9632-4b52-b1b5-18fc290548c9"
                    target="_blank"
                >
                    <img
                        src={IntagramLogo}
                        alt="instagram logo"
                        className="SocialsThanksLogo"
                    />
                </Link>
                <Link to="https://www.facebook.com/PABerater/" target="_blank">
                    <img
                        src={FacebookLogo}
                        alt="facebook logo"
                        className="SocialsThanksLogo"
                    />
                </Link>
                <Link
                    to="https://www.youtube.com/@paberater3375"
                    target="_blank"
                >
                    <img
                        src={YoutubeLogo}
                        alt="youtube logo"
                        className="SocialsThanksLogo"
                    />
                </Link>
            </div>
            <div className="thankspage-container">
                <div className="thanksmsg">
                    <h1 className="thanks-title">{title}</h1>
                    <p className="thanks-text"> {subtitle}</p>
                    <Link to={fullLandingRoute}>
                        <button className="btn-thanks">{button}</button>
                    </Link>
                </div>
                <img src={Jorge} alt="" className="imgthanks" />
            </div>
        </>
    );
}

export default ThanksPage;
