import JorgeWe from "../../assets/img/jorge-pineda-web2.png";
import { useTranslation } from "react-i18next";

function WhoWeAreBanner() {
    const { t } = useTranslation();

    const pageTitle = t("whoWeArePage.title");
    const subtitle = t("whoWeArePage.subtitle");

    return (
        <section className="section-somos">
            <section className="we-section">
                <h2 className="we-title">{pageTitle}</h2>
                <p>{subtitle}</p>
            </section>
            <section className="section-figure">
                <div className="figure-we">
                    <img src={JorgeWe} alt="Jorge img" className="Jorge-we" />
                </div>
            </section>
        </section>
    );
}
export default WhoWeAreBanner;
