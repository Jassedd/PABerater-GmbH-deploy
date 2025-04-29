import React from "react";
import "./Home.css";
import Jorge2 from "../../assets/icons/Jorge/Jorge2.svg";
import BtnAdvisory from "../../components/btn-advisory/BtnAdvisory";
import BtnBigAdvisory from "../../components/btn-BigAdvisory/BtnBigAdvisory";
import Services from "../../components/services/Services";
import Comments from "../../components/comments/Comments";
import JoinUp from "../../components/join-up/JoinUp";
import QuestionForm from "../../components/question-form/QuestionForm";
import FeedInstagram from "../../components/instagram/feed-instagram";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { useTranslation } from "react-i18next";
import HomeJumbotron from "../../components/HomeJumbotron/HomeJumbotron";
import WhatWeDo from "../../components/what-we-do/WhatWeDo";
import { Helmet } from "react-helmet";
import AdviserForm from "../../components/adviser-form/AdviserForm";
import SeoTag from "../../components/SeoTag/SeoTag";
import HomeMainBanner from "../../components/home-main-banner/HomeMainBanner";
import HomeBanner from "../../components/HomeMainBanner/HomeMainBanner";

const Home = () => {
    const { t } = useTranslation();
    const faqTitle = t("homePage.faqTitle");
    const faqSubtitle = t("homePage.faqSubtitle");
    const seoTitle = t("homePage.seoTitle");
    const seoDescription = t("homePage.seoDescription");
    return (
        <main>
            <SeoTag seoDescription={seoDescription} seoTitle={seoTitle} />
            <ScrollToTop />
            <HomeBanner />
            {/*        <HomeMainBanner /> */}
            {/*  <HomeJumbotron image="/home1.jpg" /> */}
            <Services />
            <WhatWeDo />
            <Comments />
            <JoinUp />
            <FeedInstagram />

            <section className="questionsTitleFormHome">
                <h2 className="titleQuestionFormHome">{faqTitle}</h2>
                <p className="question_subtitle_form">{faqSubtitle}</p>
            </section>

            <section className="contactHome-section">
                <div className="Q-form">
                    <div className="questionForm">
                        {/*  <AdviserForm /> */}
                        <QuestionForm />
                    </div>
                </div>

                <div className="pab_map">
                    <iframe
                        className="paberater-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.282870996985!2d13.511988876248347!3d52.40154937203035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a907b9c7a25b01%3A0xcbb1c50d60ec9f7!2sPABerater%20GmbH!5e0!3m2!1ses!2ses!4v1704554589181!5m2!1ses!2ses"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </section>
        </main>
    );
};

export default Home;
