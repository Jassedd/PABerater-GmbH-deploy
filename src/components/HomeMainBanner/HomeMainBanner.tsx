import React from "react";
import "./home-main-banner.css";
import { Trans, useTranslation } from "react-i18next";

function HomeBanner() {
    const { t, i18n } = useTranslation();

    const text1 = t("sections.homeJumbotron.text1");
    const text2 = t("sections.homeJumbotron.text2");
    const text3 = t("sections.homeJumbotron.text3");

    return (
        <div className="home-main-banner-container ">
            <div>
                <h1 className="home-main-banner-text-container">
                    <Trans
                        i18nKey="sections.homeJumbotron.text"
                        components={{
                            1: <span className="" />,
                            2: <span className="pequena resaltar" />,
                            3: <span className="z" />,
                        }}
                        values={{
                            text1,
                            text2,
                            text3,
                        }}
                    />
                </h1>
            </div>
        </div>
    );
}

export default HomeBanner;
