import { useTranslation } from "react-i18next";
import BtnBigAdvisory from "../btn-BigAdvisory/BtnBigAdvisory";
import Jorge2 from "../../assets/icons/Jorge/Jorge2.svg";
import Jorge5 from "../../assets/icons/Jorge/jorge-5.svg";

function WhatWeDo() {
    const { t } = useTranslation();
    const tite = t("sections.whatWeDo.title");
    const talentBannerText = t("homePage.talentBannerText");
    const item1Title = t("sections.whatWeDo.item1Title");
    const item1Text = t("sections.whatWeDo.item1Text");
    const item2Title = t("sections.whatWeDo.item2Title");
    const item2Text = t("sections.whatWeDo.item2Text");
    const item3Title = t("sections.whatWeDo.item3Title");
    const item3Text = t("sections.whatWeDo.item3Text");
    return (
        <>
            <div className="question-home">
                <h1 className="titleWeDo"> {tite} </h1>
            </div>
            <section className="what-do-we-do">
                <div className="container-home">
                    <div className="roadMapHome">
                        <section className="Asesoramos">
                            <h2 className="titleStep">{item1Title}</h2>
                            <p>{item1Text}</p>
                        </section>
                        <svg
                            width="50%"
                            height="auto"
                            className="first-arrow"
                            viewBox="0 0 147 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.66667 3C5.66667 4.47276 4.47276 5.66667 3 5.66667C1.52724 5.66667 0.333328 4.47276 0.333328 3C0.333328 1.52724 1.52724 0.333333 3 0.333333C4.47276 0.333333 5.66667 1.52724 5.66667 3ZM3 23.5V24H2.5V23.5H3ZM144 23.5V23H144.5V23.5H144ZM146.667 44.5C146.667 45.9728 145.473 47.1667 144 47.1667C142.527 47.1667 141.333 45.9728 141.333 44.5C141.333 43.0272 142.527 41.8333 144 41.8333C145.473 41.8333 146.667 43.0272 146.667 44.5ZM3.5 3V23.5H2.5V3H3.5ZM3 23H144V24H3V23ZM144.5 23.5V44.5H143.5V23.5H144.5Z"
                                fill="#FEEC8A"
                            />
                        </svg>

                        <section className="Acompañamos">
                            <div className="empty">
                                <h2 className="titleStep">{item2Title}</h2>
                            </div>
                            <div className="empty">
                                <p>{item2Text}</p>
                            </div>
                        </section>
                        <svg
                            width="50%"
                            height="auto"
                            className="first-arrow"
                            viewBox="0 0 147 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M141.333 3.5C141.333 4.97276 142.527 6.16667 144 6.16667C145.473 6.16667 146.667 4.97276 146.667 3.5C146.667 2.02724 145.473 0.833333 144 0.833333C142.527 0.833333 141.333 2.02724 141.333 3.5ZM144 24V24.5H144.5V24H144ZM3 24V23.5H2.5V24H3ZM0.333333 45C0.333333 46.4728 1.52724 47.6667 3 47.6667C4.47276 47.6667 5.66667 46.4728 5.66667 45C5.66667 43.5272 4.47276 42.3333 3 42.3333C1.52724 42.3333 0.333333 43.5272 0.333333 45ZM143.5 3.5V24H144.5V3.5H143.5ZM144 23.5H3V24.5H144V23.5ZM2.5 24V45H3.5V24H2.5Z"
                                fill="#FEEC8A"
                            />
                        </svg>

                        <section className="Gestionamos">
                            <div className="empty-column">
                                <h2 className="titleStep">{item3Title}</h2>
                            </div>
                            <div className="empty-column">
                                <p>{item3Text}</p>
                            </div>
                        </section>
                    </div>
                </div>
                <article className="talent-home">
                    <div className="figure-talent">
                        <img src={Jorge5} alt="jorge" className="jorge5" />
                    </div>
                    <div className="talent-text">
                        <p className="talent_title">{talentBannerText}</p>
                        <BtnBigAdvisory />
                    </div>
                </article>
            </section>
        </>
    );
}
export default WhatWeDo;
