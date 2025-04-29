import React from "react";
import "./Datenschutz.css";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { useTranslation } from "react-i18next";
import { marked } from "marked";
import { Helmet } from "react-helmet";

const Datenschutz = () => {
    const { t } = useTranslation();
    const seoTitle = t("datenschutzPage.faqSubtitle");
    const seoDescription = t("datenschutzPage.seoDescription");
    const content = t("datenschutzPage.content");
    const html = marked.parse(content, { breaks: true });

    return (
        <main>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
            </Helmet>
            <ScrollToTop />
            <div
                className="datenschutz_policy"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </main>
    );
};

export default Datenschutz;
