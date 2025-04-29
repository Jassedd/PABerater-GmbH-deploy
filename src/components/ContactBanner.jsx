import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import React from "react";
import getLanguageLink from "../helpers/getLanguageLink";
import { landingRoute } from "../constants/routeNames";

function ContactBanner() {
    const { t, i18n } = useTranslation();

    const callToActionBannerTitle = t("general.callToActionBanner2.title");
    const callToActionButton = t("general.callToActionBanner2.button");
    const fullLandingRoute = getLanguageLink(landingRoute, i18n);
    return (
        <section className="callToAction_translate_container3">
            <h3 className="text_callToAction_translate_container3">
                {callToActionBannerTitle}
            </h3>
            <Link to={fullLandingRoute}>
                <button className="btn-contact_3">
                    <p>{callToActionButton}</p>
                </button>
            </Link>
        </section>
    );
}

export default ContactBanner;
