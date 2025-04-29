import React from "react";
import "./agb.css";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { useTranslation } from "react-i18next";
import { marked } from "marked";
import { Helmet } from "react-helmet";

const Agb = () => {
    const { t } = useTranslation();
    const seoTitle = t("agbPage.faqSubtitle");
    const seoDescription = t("agbPage.seoDescription");
    const content = t("agbPage.content");

    const html = marked.parse(content, { breaks: true });
    return (
        <main>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
            </Helmet>
            <ScrollToTop />
            <div
                className="agb_policy"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </main>
    );
};

export default Agb;
