import React from "react";
import "./JoinUp.css";
import Jorge7 from "../../assets/img/jorge-7.png";
import BtnJoinUp from "../btn-joinUp/BtnJoinUp";
import { Trans, useTranslation } from "react-i18next";

function JoinUp() {
    const { t } = useTranslation();
    const subtitle = t("sections.joinUpSection.subtitle");
    const titleText1 = t("sections.joinUpSection.titleText1");
    const titleText2 = t("sections.joinUpSection.titleText2");
    const titleText3 = t("sections.joinUpSection.titleText3");

    const peopleHelpedAmount = t("sections.joinUpSection.peopleHelpedAmount");
    const peopleHelpedText = t("sections.joinUpSection.peopleHelpedSubtitle");

    const homologatedTitlesAmount = t(
        "sections.joinUpSection.homologatedTitlesAmount"
    );
    const homologatedTitlesSubtitle = t(
        "sections.joinUpSection.homologatedTitlesSubtitle"
    );

    const countriesSubtitle = t("sections.joinUpSection.countriesSubtitle");
    const countriesAmount = t("sections.joinUpSection.countriesAmount");

    const professionsSubtitle = t("sections.joinUpSection.professionsSubtitle");
    const professionsAmount = t("sections.joinUpSection.professionsAmount");

    return (
        <>
            <article className="articleJoinUp">
                <h3 className="JoinUp_text">
                    <Trans
                        values={{
                            title1: titleText1,
                            title2: titleText2,
                            title3: titleText3,
                        }}
                        components={{ 1: <span className="HighlightedText" /> }}
                        i18nKey="sections.joinUpSection.title"
                    />
                </h3>
                <section>
                    <h1 className="NumbersJoinUp">{peopleHelpedAmount}</h1>
                    <p className="textJoinUp">{peopleHelpedText}</p>
                    <hr className="line" />
                </section>

                <section>
                    <h1 className="NumbersJoinUp">{homologatedTitlesAmount}</h1>
                    <p className="textJoinUp">{homologatedTitlesSubtitle}</p>
                    <hr className="line" />
                </section>

                <section>
                    <h1 className="NumbersJoinUp">{countriesAmount}</h1>
                    <p className="textJoinUp">{countriesSubtitle}</p>
                    <hr className="line" />
                </section>

                <section>
                    <h1 className="NumbersJoinUp">{professionsAmount}</h1>
                    <p className="textJoinUp">{professionsSubtitle}</p>
                    <hr className="line" />
                </section>

                <section className="JorgeJoinUp">
                    <img src={Jorge7} alt="" className="jorge7" />
                    <div className="joinUp">
                        <h3 className="JoinUp_callToAction">{subtitle}</h3>
                        <div className="btn_JU">
                            <BtnJoinUp />
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
}

export default JoinUp;
