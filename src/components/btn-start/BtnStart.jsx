import React from "react";
import Arrow from "../../assets/icons/arrow.svg";
import "./BtnStart.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import getLanguageLink from "../../helpers/getLanguageLink";
import { landingRoute } from "../../constants/routeNames";

function BtnStart() {
    const { i18n } = useTranslation();
    const fullLandingRoute = getLanguageLink(landingRoute, i18n);
    return (
        <Link to={fullLandingRoute}>
            <button className="btn-start">
                ¿COMENZAMOS? <img src={Arrow} alt="btn-arrow" />
            </button>
        </Link>
    );
}

export default BtnStart;
