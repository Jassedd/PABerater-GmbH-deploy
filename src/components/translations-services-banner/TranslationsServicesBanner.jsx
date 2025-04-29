import { useTranslation } from "react-i18next";

function TranslationServicesBanner() {
    const { t } = useTranslation();

    const translationServicesBannerTitle = t(
        "sections.translationServices.title"
    );
    const translationServicesBannerItem1 = t(
        "sections.translationServices.item1"
    );
    const translationServicesBannerItem2 = t(
        "sections.translationServices.item2"
    );
    const translationServicesBannerItem3 = t(
        "sections.translationServices.item3"
    );
    const translationServicesBannerText = t(
        "sections.translationServices.text"
    );

    return (
        <section className="ourServicesText_container3">
            <h2 className="Title_ourServicesText3">
                {translationServicesBannerTitle}
            </h2>
            <ul className="li_ourServicesText3">
                <li>{translationServicesBannerItem1}</li>
                <br />
                <li>{translationServicesBannerItem2}</li>
                <br />
                <li>{translationServicesBannerItem3}</li>
            </ul>
            <p className="resaltar_text3">{translationServicesBannerText}</p>
            <br />
        </section>
    );
}

export default TranslationServicesBanner;
