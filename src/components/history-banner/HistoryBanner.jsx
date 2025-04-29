import { useTranslation } from "react-i18next";

function HistoryBanner() {
    const { t } = useTranslation();

    const historyCompanyName = t("whoWeArePage.historySection.companyName");
    const historySectionTitle = t("whoWeArePage.historySection.title");
    const foundersName = t("whoWeArePage.historySection.foundersName");
    const fullCompanyName = t("whoWeArePage.historySection.fullCompanyName");
    const companyNameRegular = t(
        "whoWeArePage.historySection.companyNameRegular"
    );

    const historySectionParagraph1 = t(
        "whoWeArePage.historySection.paragraph1"
    );
    const historySectionParagraph2 = t(
        "whoWeArePage.historySection.paragraph2"
    );
    const historySectionParagraph3 = t(
        "whoWeArePage.historySection.paragraph3"
    );

    return (
        <section className="history">
            <h2 className="we-title">{historySectionTitle}</h2>
            <p>
                <span className="span-we">{foundersName},</span>{" "}
                {historySectionParagraph1}
                <span className="span-we">{fullCompanyName}</span> <br />
                <br />
                {historySectionParagraph2}
                <span className="span-we">{companyNameRegular}</span>{" "}
                {historySectionParagraph3}
                <span className="span-we">{historyCompanyName}</span>
            </p>
        </section>
    );
}

export default HistoryBanner;
