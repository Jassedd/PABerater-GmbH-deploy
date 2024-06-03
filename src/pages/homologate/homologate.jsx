import React from "react";
import { useTranslation } from "react-i18next";
import "./homologate.css";
import Jorge4 from "../../assets/img/jorge-4.png";
import Service1 from "../../assets/img/service1.jpg";
import QAaccordion from "../../components/q&a-accordion/Q&A-accordion";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { Link } from "react-router-dom";

function Homologate() {
  const { t } = useTranslation("homologate");

  const homologateQuestions = [
    {
      header: t("homologate.questions.header1"),
      body: t("homologate.questions.body1"),
    },
    {
      header: t("homologate.questions.header2"),
      body: t("homologate.questions.body2"),
    },
    {
      header: t("homologate.questions.header3"),
      body: t("homologate.questions.body3"),
    },
  ];

  return (
    <main>
      <ScrollToTop />
      <section className="homologate_services1">
        <img src={Service1} alt="service1" className="banner-img" />  
        <div className="figure_title">
          <h1 className="title_img1">{t("homologate.banner.title1")}</h1>
          <h2 className="title_img2">{t("homologate.banner.title2")}</h2>
        </div>
      </section>

      <h1 className="title">{t("homologate.title")}</h1>
      <p className="title_text">{t("homologate.titleText")}</p>

      <section className="title_section">
        <div className="firstArticleHomologation">
          <div className="name_video">
            <p>{t("homologate.firstArticle.name")}</p>
          </div>
          <br />
          <p className="text_name_video">
            {t("homologate.firstArticle.description")}
          </p>
          <br />
        </div>
        <div className="Darling_video">
          <iframe
            width="100%"
            height="200em"
            src={`https://www.youtube.com/embed/UGLXVXbxNXY`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="yt-service"
          ></iframe>
        </div>
      </section>

      <section className="text_background_Blue">
        <p className="text_blueContainer">{t("homologate.blueText")}</p>
      </section>

      <section className="callToAction_container">
        <img src={Jorge4} alt="Jorge" className="jorge_img" />
        
        <div className="text_container">
          <h2 className="calltoaction_title">{t("homologate.callToAction.title")}</h2>
          <h3 className="posible_text">{t("homologate.callToAction.possible")}</h3>
          <Link to="/landing">
            <button className="btn-comenzamos">{t("homologate.callToAction.button")}</button>
          </Link>
        </div>
      </section>

      <section className="ourServicesText_container">
        <h2 className="Title_ourServices_Text">{t("homologate.ourServices.title")}</h2>
        <ul className="li_ourServicesText">
          <li>{t("homologate.ourServices.item1")}</li>
          <br />
          <li>{t("homologate.ourServices.item2")}</li>
          <br />
          <li>{t("homologate.ourServices.item3")}</li>
          <br />
          <li>{t("homologate.ourServices.item4")}</li>
        </ul>
        <h3 className="resaltar_text2">{t("homologate.ourServices.note")}</h3>
      </section>

      <section className="callToAction_container2">
        <h3 className="text_callToAction_container2">{t("homologate.finalCallToAction.text")}</h3>
        <Link to="/landing">
          <button className="btn-contact">{t("homologate.finalCallToAction.button")}</button>
        </Link>
      </section>

      <section className="questions_container">
        <h2 className="title_questions_container">{t("homologate.questions.title")}</h2>
        <QAaccordion items={homologateQuestions} />
      </section>
    </main>
  );
}

export default Homologate;
