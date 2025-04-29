import React from "react";
import Arrow from "../../assets/icons/arrow.svg";
import "./BtnAdvisory.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import getLanguageLink from "../../helpers/getLanguageLink";
import { landingRoute } from "../../constants/routeNames";

function BtnAdvisory() {
    const { i18n, t } = useTranslation();
    const text = t("homePage.advisoryButton");
    const fullLandingRoute = getLanguageLink(landingRoute, i18n);

    return (
        <Link to={fullLandingRoute}>
            <button className="btn-advisory">
                {text}
                <img src={Arrow} alt="btn-arrow" className="arrow-btn1" />
            </button>
        </Link>
    );
}

export default BtnAdvisory;
