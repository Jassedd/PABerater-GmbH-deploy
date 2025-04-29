import "./Footer.css";
import Logo from "../../assets/img/Logos/LOGO-BLANCO.svg";
import IntagramLogo from "../../assets/icons/logo_instagram.svg";
import YoutubeLogo from "../../assets/icons/logo_youtube.svg";
import FacebookLogo from "../../assets/icons/logo_facebook.svg";
import EmailIcon from "../../assets/icons/IconsmsIcon.svg";
import PhoneIcon from "../../assets/icons/IconPhone.svg";
import LocalIcon from "../../assets/icons/localitation.svg";
import WhatsAppIcon from "../../assets/icons/whatsapp_blue.svg";
import PhoneBlue from "../../assets/icons/phone_blue.svg";
import Mailblue from "../../assets/icons/mail_blue.svg";
import { Link } from "react-router-dom";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import {
    agbRoute,
    contactRoute,
    cookiePolicyRoute,
    datenschutzRoute,
    impressumRoute,
} from "../../constants/routeNames";
import { useTranslation } from "react-i18next";
import getLanguageLink from "../../helpers/getLanguageLink";

function Footer() {
    const { i18n, t } = useTranslation();
    const { language } = i18n;
    const fullAgbRoute = getLanguageLink(agbRoute, i18n);
    const fullDatenschutzRoute = getLanguageLink(datenschutzRoute, i18n);
    const fullCookiePolicyRoute = getLanguageLink(cookiePolicyRoute, i18n);
    const fullImpresumRoute = getLanguageLink(impressumRoute, i18n);
    const fullContactRoute = getLanguageLink(contactRoute, i18n);
    const address = t("sections.footer.address");
    const copyright = t("sections.footer.copyright");

    const cookiePolicy = t("sections.footer.cookiePolicy");
    const datenschutz = t("sections.footer.datenschutz");
    const agb = t("sections.footer.agb");
    const impressum = t("sections.footer.impressum");
    const cookiesText = t("sections.footer.cookiesText");

    return (
        <>
            <section className="pinedaFooter">
                <div className="logo-social">
                    <img src={Logo} alt="logo" className="logoPaberater" />
                    <div className="socialMediaFooter">
                        <Link
                            to="https://www.instagram.com/paberater_/?hl=es"
                            target="_blank"
                        >
                            <img
                                src={IntagramLogo}
                                alt=""
                                className="IconSocialFooter"
                            />
                        </Link>
                        <Link
                            to="https://www.youtube.com/channel/UCmUbZw_CJqf-pM0-pHI6meg"
                            target="_blank"
                        >
                            <img
                                src={YoutubeLogo}
                                alt=""
                                className="IconSocialFooterYT"
                            />
                        </Link>
                        <Link
                            to="https://www.facebook.com/PABerater/?locale=de_DE"
                            target="_blank"
                        >
                            <img
                                src={FacebookLogo}
                                alt=""
                                className="IconSocialFooterFB"
                            />
                        </Link>
                    </div>
                </div>
                <div className="contactFooter">
                    <div className="infoFooter">
                        <img src={EmailIcon} alt="" className="IconsFooter" />
                        <Link to={fullContactRoute} target="_blank">
                            info@paberater.de
                        </Link>
                    </div>
                    <div className="infoFooter">
                        <img src={PhoneIcon} alt="" className="IconsFooter" />
                        <Link to="tel:+4915780633091" target="_blank">
                            +49 157 806 33091
                        </Link>
                    </div>
                    <div className="infoFooter">
                        <img src={LocalIcon} alt="" className="IconsFooter" />
                        <Link
                            to="https://www.google.com/maps/dir/40.3800498,-3.7739879/paberater-de/@45.9383877,-5.6762452,5z/
            "
                            target="_blank"
                            className="directionFooter"
                        >
                            {address}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="politics">
                {/*    <LanguageSelector /> */}

                <div className="paberater-rights">
                    <p style={{ margin: "1rem" }}>{copyright}</p>
                </div>
                <div className="groupPolitics">
                    <div className="impressum pol">
                        <Link to={fullImpresumRoute}>{impressum}</Link>
                    </div>
                    <div className="agb pol">
                        <Link to={fullAgbRoute}>{agb}</Link>
                    </div>
                    <div className="datenschutz pol">
                        <Link to={fullDatenschutzRoute}>{datenschutz}</Link>
                    </div>
                    <div className="políticas_cookies pol">
                        <Link to={fullCookiePolicyRoute}>{cookiePolicy}</Link>
                    </div>
                </div>
            </section>

            <section className="cookiesFooter">
                <p>{cookiesText}</p>
            </section>

            <section className="contact_footer">
                <div>
                    <Link to="tel:+4915780633091">
                        <img src={PhoneBlue} alt="" className="icons_action" />
                    </Link>
                </div>

                <div>
                    <Link to="mailto:info@paberater.de">
                        <img src={Mailblue} alt="" className="icons_action" />
                    </Link>
                </div>

                <div>
                    <Link to="https://wa.me/4915780633091">
                        <img
                            src={WhatsAppIcon}
                            alt=""
                            className="icons_action"
                        />
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Footer;
