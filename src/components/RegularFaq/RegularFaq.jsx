import React from "react";
import QAaccordion from "../q&a-accordion/Q&A-accordion";
import { useTranslation } from "react-i18next";

function StandardFaq() {
    const { t } = useTranslation();

    const faqTitle = t("general.faqSectionTitle");

    const faqQuestion1 = t("sections.faq.question1");
    const faqQuestion2 = t("sections.faq.question2");
    const faqQuestion3 = t("sections.faq.question3");

    const faqAnswer1 = t("sections.faq.answer1");
    const faqAnswer2 = t("sections.faq.answer2");
    const faqAnswer3 = t("sections.faq.answer3");

    const TranslateQuestions = [
        {
            header: faqQuestion1,

            body: faqAnswer1,
        },

        {
            header: faqQuestion2,

            body: faqAnswer2,
        },

        {
            header: faqQuestion3,
            body: faqAnswer3,
        },
    ];

    return (
        <section className="questions_translate_container">
            <h2 className="title_questions_translate_container">{faqTitle}</h2>
            <QAaccordion items={TranslateQuestions} />
        </section>
    );
}

export default StandardFaq;
