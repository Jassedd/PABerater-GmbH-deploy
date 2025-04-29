import React from "react";
import "./impressum.css";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { useTranslation } from "react-i18next";
import { marked } from "marked";
import { Helmet } from "react-helmet";

const Impressum = () => {
    const { t } = useTranslation();
    const content = t("impressumPage.content");
    const seoTitle = t("impressumPage.faqSubtitle");
    const seoDescription = t("impressumPage.seoDescription");
    const html = marked.parse(content, { breaks: true });
    return (
        <main>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
            </Helmet>
            <ScrollToTop />
            <div
                className="impressum_policy"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </main>
    );
};

export default Impressum;
