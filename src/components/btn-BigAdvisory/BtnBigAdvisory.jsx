import React from "react";
import Arrow from "../../assets/icons/arrow.svg";
import "./BtnBigAdvisory.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import getLanguageLink from "../../helpers/getLanguageLink";
import { landingRoute } from "../../constants/routeNames";

function BtnBigAdvisory() {
    const { t, i18n } = useTranslation();
    const text = t("homePage.advisoryButton");
    const fullLandingRoute = getLanguageLink(landingRoute, i18n);
    return (
        <Link to={fullLandingRoute}>
            <button className="btn-BigAdvisory">
                {text}{" "}
                <img src={Arrow} alt="btn-arrow" className="arrow-btn2" />
            </button>
        </Link>
    );
}

export default BtnBigAdvisory;
