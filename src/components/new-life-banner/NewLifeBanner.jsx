import { useTranslation } from "react-i18next";

function NewLifeBanner() {
    const { t } = useTranslation();

    const bannerTitle = t("whoWeArePage.banner.title");
    const bannerSubtitle = t("whoWeArePage.banner.subtitle");
    const bannerText = t("whoWeArePage.banner.text");
    return (
        <section className="section-new-life">
            <h2 className="new-life_title">{bannerTitle}</h2>
            <h1 className="new-life_title">{bannerSubtitle}</h1>
            <h3 className="new-life-text"> {bannerText}</h3>
        </section>
    );
}

export default NewLifeBanner;
