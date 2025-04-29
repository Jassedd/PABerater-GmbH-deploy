import { Link } from "react-router-dom";
import Jorge3 from "../../assets/img/jorge-5.png";
import React from "react";
import { useTranslation } from "react-i18next";
import getLanguageLink from "../../helpers/getLanguageLink";
import { landingRoute } from "../../constants/routeNames";

function StartYourLifeBanner() {
    const { t, i18n } = useTranslation();
    const buttonText = t("sections.startYourProfessionalLifeBanner.button");
    const boldTitle = t("sections.startYourProfessionalLifeBanner.boldTitle");
    const title = t("sections.startYourProfessionalLifeBanner.title");
    const fullLandingRoute = getLanguageLink(landingRoute, i18n);
    return (
        <section className="callToAction_translate_container">
            <h2 className="calltoaction_translate_title">
                <strong className="blue_name">{boldTitle} </strong>
                {title}
            </h2>
            <div className="">
                <img src={Jorge3} alt="Jorge" className="jorge3_img" />
                <div className="text_translate_container">
                    <br />
                    <Link to={fullLandingRoute}>
                        <button className="btn-comenzamos3">
                            {buttonText}
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
export default StartYourLifeBanner;
