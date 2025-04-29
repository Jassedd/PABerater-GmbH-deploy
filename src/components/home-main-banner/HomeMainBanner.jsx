import { Trans, useTranslation } from "react-i18next";
import Jorge2 from "../../assets/img/Jorge2.png";
import BtnAdvisory from "../btn-advisory/BtnAdvisory";

function HomeMainBanner() {
    const { t, i18n } = useTranslation();

    const text1 = t("sections.homeJumbotron.text1");
    const text2 = t("sections.homeJumbotron.text2");
    const text3 = t("sections.homeJumbotron.text3");

    return (
        <div className="div-init">
            <img
                style={{
                    objectFit: "contain",
                }}
                src={Jorge2}
                alt="Jorge"
                className="jorge-img2"
            />
            <div className="textbtn">
                <h1 className="title-init">
                    <Trans
                        i18nKey="sections.homeJumbotron.text"
                        components={{
                            1: <span className="" />,
                            2: <span className="pequena resaltar" />,
                            3: <span className="z" />,
                        }}
                        values={{
                            text1,
                            text2,
                            text3,
                        }}
                    />
                </h1>

                <BtnAdvisory />
            </div>
        </div>
    );
}

export default HomeMainBanner;
