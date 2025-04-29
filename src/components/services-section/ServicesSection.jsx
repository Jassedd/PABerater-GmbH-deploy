import { useTranslation, Trans } from "react-i18next";

function ServicesSection() {
    const { t } = useTranslation();
    const title = t("sections.servicesBanner.title");
    const subtitle = t("sections.servicesBanner.subtitle");

    const service1BoldText = t("sections.servicesBanner.service1BoldText");
    const service2BoldText = t("sections.servicesBanner.service2BoldText");
    const service3BoldText = t("sections.servicesBanner.service3BoldText");
    const service4BoldText = t("sections.servicesBanner.service4BoldText");

    return (
        <section className="ourServicesText_container2">
            <h2 className="Title_ourServicesText">{title}</h2>
            <ul className="li_ourServicesText">
                <li>
                    <Trans
                        values={{ boldText: service1BoldText }}
                        components={{ 1: <strong /> }}
                        i18nKey="sections.servicesBanner.service1"
                    />
                </li>
                <br />

                <li>
                    <Trans
                        values={{ boldText: service2BoldText }}
                        components={{ 1: <strong /> }}
                        i18nKey="sections.servicesBanner.service2"
                    />
                </li>
                <br />
                <li>
                    <Trans
                        values={{ boldText: service3BoldText }}
                        components={{ 1: <strong /> }}
                        i18nKey="sections.servicesBanner.service3"
                    />
                </li>
                <br />

                <li>
                    <Trans
                        values={{ boldText: service4BoldText }}
                        components={{ 1: <strong /> }}
                        i18nKey="sections.servicesBanner.service4"
                    />
                </li>
            </ul>

            <p className="resaltar_text2">{subtitle}</p>
            <br />
        </section>
    );
}
export default ServicesSection;
