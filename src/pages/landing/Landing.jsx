import "./Landing.css";
import Jorge5 from "../../assets/icons/Jorge/jorge-5.svg";
import Arrow1 from "../../assets/icons/Arrow-landing1.svg";
import Arrow2 from "../../assets/icons/Arrow-landing5.svg";
import Arrow from "../../assets/icons/arrow.svg";
import Time from "../../assets/img/ahorra-tiempo-dinero.svg";
import AdviserForm from "../../components/adviser-form/AdviserForm";
import BtnStartBlue from "../../components/btn-start-Blue/BtnStartBlue";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import NewsMedia from "../../components/news-media/NewsMedia";
import LandingImg from "../../assets/img/Landing-img.jpeg";
import { Link } from "react-router-dom";
import "animate.css";
import { useTransition } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import SeoTag from "../../components/SeoTag/SeoTag";
import IconPhone2 from "../../assets/icons/Iconphone.svg";

function scrollToForm() {
    const formSection = document.getElementById("adviser-form-landing");
    if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
    }
}

function Landing() {
    const { t } = useTranslation();
    const title = t("landingPage.title");
    const contactTitle1 = t("landingPage.contactSection.title1");
    const contactTitle2 = t("landingPage.contactSection.title2");
    const contactTitle3 = t("landingPage.contactSection.title3");
    const contactTitle4 = t("landingPage.contactSection.title4");
    const contactText = t("landingPage.contactSection.text");
    const contactSubtitle = t("landingPage.contactSection.subtitle");
    const paymentSectionButton = t("landingPage.paymentSection.button");
    const paymentSectionTitle = t("landingPage.paymentSection.title");
    const paymentSectionSubtitle = t("landingPage.paymentSection.subtitle");
    const paymentSectionChoosePlanTitle = t(
        "landingPage.paymentSection.choosePlanTitle"
    );
    const paymentSectionText1 = t("landingPage.paymentSection.text1");
    const firstStepsText1BoldText = t("landingPage.firstStepsText1BoldText");
    const firstStepsText2 = t("landingPage.firstStepsText2");
    const firstStepsText3Bold = t("landingPage.firstStepsText3BoldText");
    const firstStepsText4 = t("landingPage.firstStepsText4");

    const paymentSectionOfferAmount = t(
        "landingPage.paymentSection.offerAmount"
    );

    const phone = t("landingPage.phone");

    const seoTitle = t("landingPage.faqSubtitle");
    const seoDescription = t("landingPage.seoDescription");
    return (
        <>
            <ScrollToTop />
            <SeoTag seoDescription={seoDescription} seoTitle={seoTitle} />

            <section className="form_landing">
                <div className="frame-youtube">
                    <video
                        poster="/video-img.jpg"
                        /*  width="750"
                        height="500" */
                        controls
                        className="landing-video"
                    >
                        <source src="/landing-video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="adviser-form-landing" id="adviser-form-landing">
                    <div className="section-assignment">
                        <p>{title}</p>
                    </div>
                    <AdviserForm />
                </div>
            </section>

            <section className="first-stape">
                <div className="text_first-stape">
                    <h1 className="first-title-landing">
                        <Trans
                            values={{
                                boldText: firstStepsText1BoldText, //El
                                text2: firstStepsText2, //tu crecimiento profesional
                                text3: firstStepsText3Bold, //en
                                text4: firstStepsText4, //alemania
                            }}
                            components={{
                                1: <span className="article-span" />,
                                2: <span className="first-text-landing" />,
                                3: <span className="second-title-landing" />,
                                4: <span className="article-span" />,
                                5: <span className="second-text-landing" />,
                            }}
                            i18nKey="landingPage.firstStepsText1"
                        />

                        {/*      <span className="article-span">El</span> primer paso
                        hacia */}
                    </h1>
                    {/*    <div class="text_first-stape"><h1 class="first-title-landing"> <span class="article-span">El</span>  primer paso hacia</h1><h4 class="first-text-landing">tu crecimiento profesional</h4><h2 class="second-title-landing"><span class="article-span">en</span> Alemania</h2><h5 class="second-text-landing">está solo a 30min</h5></div> */}

                    {/*    <h4 className="first-text-landing">{firstStepsText2}</h4> */}
                    {/*   <h2 className="second-title-landing"> */}
                    {/*  <Trans
                            values={{ boldText: firstStepsText3Bold }}
                            components={{
                                1: <span className="article-span" />,
                            }}
                            i18nKey="landingPage.firstStepsText3"
                        /> */}
                    {/*      <span className="article-span">en</span> Alemania
                    </h2> */}
                    {/*      <h5 className="second-text-landing">{firstStepsText4}</h5> */}
                </div>
            </section>

            <section className="phoneContact">
                <article className="steps-landing">
                    <div className="steps-title">
                        <h2 className="steps-title">{contactTitle1}</h2>
                    </div>
                    <section className="landing-map">
                        <p className="text-landing-map1">{contactTitle2}</p>
                        <img src={Arrow1} alt="arrow1" className="arrow" />
                    </section>
                    <section className="landing-map">
                        <img src={Arrow2} alt="flecha" className="arrow" />
                        <p className="text-landing-map2">{contactTitle3}</p>
                    </section>
                    <section className="landing-map">
                        <p className="text-landing-map3">{contactTitle4}</p>
                    </section>
                </article>
                <article className="landing-contact">
                    <div className="figureAdvisory">
                        <img src={Jorge5} alt="jorge" className="jorge-5" />
                    </div>
                    <h2 className="title_landing-contact">{contactText}</h2>
                    <div className="phone_landing">
                        <img
                            src={IconPhone2}
                            alt="phone icon"
                            className="phone_icon"
                        />
                        <a className="phoneNumber" href="tel:+4915780633091">
                            {phone}
                        </a>
                    </div>
                    <div className="Figure-text-landing">
                        <p className="text-landing">{contactSubtitle}</p>
                    </div>
                </article>
            </section>

            <section className="arowsImg">
                <section className="pay-landing">
                    <h1 className="pay-title">{paymentSectionTitle}</h1>
                    <h4 style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                        {paymentSectionSubtitle}
                    </h4>
                    <p style={{ fontSize: "1.5rem" }}>
                        <br /> {paymentSectionChoosePlanTitle}
                        <br /> <br />
                        <span className="span-landing">A.</span>{" "}
                        {paymentSectionText1}
                        <br /> <br />
                        <span className="span-landing">B.</span>{" "}
                        <Trans
                            values={{ amount: paymentSectionOfferAmount }}
                            components={{
                                1: <span className="span-landing" />,
                            }}
                            i18nKey="landingPage.paymentSection.text2"
                        />
                    </p>
                    <Link to="#" onClick={scrollToForm}>
                        <button className="btn-start-landing">
                            {paymentSectionButton}
                            <img src={Arrow} alt="btn-arrow" />
                        </button>
                    </Link>
                </section>
                <section className="time-landing">
                    <img className="img_time" src={Time} alt="" />
                </section>
            </section>
            <NewsMedia />
        </>
    );
}

export default Landing;
