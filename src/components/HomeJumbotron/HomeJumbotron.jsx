import { Trans, useTranslation } from "react-i18next";
import Jorge2 from "../../assets/img/Jorge2.png";
import homeImg from "../../assets/img/pexels2.jpg";
import BtnAdvisory from "../btn-advisory/BtnAdvisory";
import getLanguageLink from "../../helpers/getLanguageLink";
import { landingRoute } from "../../constants/routeNames";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/arrow.svg";
import QuestionForm from "../question-form/QuestionForm";

function HomeJumbotron({ image }) {
    const { t, i18n } = useTranslation();
    const text1 = t("sections.homeJumbotron.text1");
    const text2 = t("sections.homeJumbotron.text2");
    const text3 = t("sections.homeJumbotron.text3");
    const text = t("homePage.advisoryButton");
    const fullLandingRoute = getLanguageLink(landingRoute, i18n);
    return (
        <>
            {/*    <div className="div-init">
                <img
                    style={{
                        objectFit: "cover",
                    }}
                    src={Jorge2}
                    alt="Jorge"
                    className="jorge-img2"
                />
                <div className="textbtn">
                    <h1 className="title-init">
                        <Trans
                            i18nKey="sections.homeJumbotron.text"
                            components={{
                                1: <span className="resaltar" />,
                                2: <span className="pequena resaltar" />,
                                3: <span className="resaltar" />,
                                4: <span className="pequena" />,
                            }}
                            values={{
                                text1,
                                text2,
                                text3,
                            }}
                        />
                    </h1>

                    <BtnAdvisory />
                </div>
            </div> */}
            <div className="home-jumbotron-container">
                <img
                    style={{
                        objectFit: "cover",
                    }}
                    src={image || homeImg}
                    alt="homeImg"
                    className="home-jumbotron-container-img"
                />
                <div>
                    <h1 className=" home-jumbotron-container-text-title">
                        <Trans
                            i18nKey="sections.homeJumbotron.text"
                            components={{
                                1: <span className="resaltar" />,
                                2: <span className="pequena resaltar" />,
                                3: <span className="resaltar" />,
                                4: <span className="pequena" />,
                            }}
                            values={{
                                text1,
                                text2,
                                text3,
                            }}
                        />
                    </h1>
                    <QuestionForm />
                </div>

                {/*  <div className="home-jumbotron-container-text ">
                    <h1 className=" home-jumbotron-container-text-title">
                        <Trans
                            i18nKey="sections.homeJumbotron.text"
                            components={{
                                1: <span className="resaltar" />,
                                2: <span className="pequena resaltar" />,
                                3: <span className="resaltar" />,
                                4: <span className="pequena" />,
                            }}
                            values={{
                                text1,
                                text2,
                                text3,
                            }}
                        />
                    </h1>

                     <Link to={fullLandingRoute}>
                        <button className="btn-advisory-home">
                            {text}
                            <img
                                src={Arrow}
                                alt="btn-arrow"
                                className="btn-advisory-home-arrow-btn1"
                            />
                        </button>
                    </Link>
                </div> */}
            </div>
        </>
    );
}

export default HomeJumbotron;
