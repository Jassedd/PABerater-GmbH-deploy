import { marked } from "marked";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function CookiesAcordion() {
    const { t } = useTranslation();
    const item1Title = t("cookiesPage.cookieItem1Title");
    const item1Text = t("cookiesPage.cookieItem1Text");

    const item2Title = t("cookiesPage.cookieItem2Title");
    const item2Text = t("cookiesPage.cookieItem2Text");

    const item3Title = t("cookiesPage.cookieItem3Title");
    const item3Text = t("cookiesPage.cookieItem3Text");

    const item4Title = t("cookiesPage.cookieItem4Title");
    const item4Text = t("cookiesPage.cookieItem4Text");

    const item5Title = t("cookiesPage.cookieItem5Title");
    const item5Text = t("cookiesPage.cookieItem5Text");

    const item6Title = t("cookiesPage.cookieItem6Title");
    const item6Text = t("cookiesPage.cookieItem6Text");

    const html1 = marked.parse(item1Text, { breaks: true });
    const html2 = marked.parse(item2Text, { breaks: true });
    const html3 = marked.parse(item3Text, { breaks: true });
    const html4 = marked.parse(item4Text, { breaks: true });
    const html5 = marked.parse(item5Text, { breaks: true });
    const html6 = marked.parse(item6Text, { breaks: true });

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
                <Accordion.Header>{item1Title}</Accordion.Header>
                <Accordion.Body>
                    <div dangerouslySetInnerHTML={{ __html: html1 }} />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header> {item2Title}</Accordion.Header>
                <Accordion.Body>
                    Uso: <br />
                    Usamos Google reCAPTCHA para prevención de spam.{" "}
                    <Link to="https://cookiedatabase.org/service/google-recaptcha/">
                        Leer más
                    </Link>
                    <br />
                    Compartir datos: <br />
                    Para más información, por favor, lee la{" "}
                    <Link to="https://policies.google.com/privacy">
                        política de privacidad de Google reCAPTCHA.
                    </Link>
                    <br />
                    funcional
                    <br />
                    <Link to="https://cookiedatabase.org/cookie/google-recaptcha/_grecaptcha/">
                        _grecaptcha
                    </Link>
                    <br />
                    Marketing: <br />
                    <Link to="https://cookiedatabase.org/cookie/google-recaptcha/rcc/">
                        rc::c
                    </Link>
                    - sesión
                    <Link to="https://cookiedatabase.org/cookie/google-recaptcha/rcb/">
                        rc::b
                    </Link>
                    - sesión
                    <Link to="https://cookiedatabase.org/cookie/google-recaptcha/rca/">
                        rc::a
                    </Link>
                    - persistente
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>{item3Title}</Accordion.Header>
                <Accordion.Body>
                    Uso Usamos Google Adsense para mostrar anuncios.{" "}
                    <Link to="https://cookiedatabase.org/service/google-adsense/">
                        Leer más
                    </Link>
                    <br />
                    Compartir datos Para más información, por favor, lee la
                    <Link to="https://policies.google.com/privacy">
                        {" "}
                        política de privacidad de Google Adsense.
                    </Link>
                    <br />
                    Marketing:
                    <br />
                    <Link to="https://cookiedatabase.org/cookie/google-adsense/_gcl_au/">
                        _gcl_au
                    </Link>
                    persistente-Almacenar y realizar un seguimiento de las
                    conversiones
                    <br />
                    <Link to="https://cookiedatabase.org/cookie/google-adsense/google_adsense_settings/">
                        google_adsense_settings
                    </Link>
                    persistente-Habilitar la publicación de anuncios o
                    retargeting
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header> {item4Title}</Accordion.Header>
                <Accordion.Body>
                    Uso Usamos Hotjar para mapas con zonas calientes y grabación
                    de pantalla.
                    <Link to="https://cookiedatabase.org/service/hotjar/">
                        Leer más
                    </Link>
                    <br />
                    Compartir datos Para más información, por favor,
                    <Link to="https://help.hotjar.com/hc/en-us/articles/6952777582999-Cookies-Set-by-the-Hotjar-Tracking-Code">
                        lee la política de privacidad de Hotjar.
                    </Link>
                    <br />
                    <Link to="https://cookiedatabase.org/cookie/hotjar/_hjsessionuser_/">
                        _hjSessionUser_*
                    </Link>
                    1 año-Almacenar un ID de usuario único
                    <br />
                    <Link to="https://cookiedatabase.org/cookie/hotjar/_hjabsolutesessioninprogress/">
                        _hjAbsoluteSessionInProgress
                    </Link>
                    sesión-Guardar las visitas únicas a la tienda
                    <br />
                    <Link to="https://cookiedatabase.org/cookie/hotjar/_hjincludedinsessionsample/">
                        _hjIncludedInSessionSample_*
                    </Link>
                    -30 minutos
                    <br />
                    Funcional:
                    <br />
                    <Link to="https://cookiedatabase.org/cookie/hotjar/_hjsession_/">
                        _hjSession_*
                    </Link>
                    sesión-Proporcionar funcionalidad entre páginas
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header> {item5Title}</Accordion.Header>
                <Accordion.Body>
                    Uso
                    <br />
                    Usamos Google Analytics para estadísticas del sitio web.{" "}
                    <Link to="https://cookiedatabase.org/service/google-analytics/">
                        Leer más
                    </Link>
                    <br />
                    Compartir datos
                    <br />
                    Para más información, por favor, lee la{" "}
                    <Link to="https://policies.google.com/privacy">
                        política de privacidad de Google Analytics.
                    </Link>
                    <br />
                    <Link to="https://cookiedatabase.org/cookie/google-analytics/_ga/">
                        _ga
                    </Link>
                    2 años-Contar y rastrear páginas vistas
                    <br />
                    <Link to="https://cookiedatabase.org/cookie/google-analytics/_ga_/">
                        _ga_*
                    </Link>
                    1 año-Contar y rastrear páginas vistas
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header> {item6Title}</Accordion.Header>
                <Accordion.Body>
                    Uso
                    <br />
                    Compartir datos El intercambio de datos está pendiente de
                    investigación
                    <br />
                    Propósito pendiente de investigación
                    <br />
                    Nombre lastExternalReferrer
                    <br />
                    Nombre lastExternalReferrerTime
                    <br />
                    Nombre _fbp
                    <br />
                    Nombre cookieyes-consent
                    <br />
                    Nombre _gid
                    <br />
                    Nombre cmplz_policy_id Caducidad 365 días
                    <br />
                    Nombre cmplz_consented_services Caducidad 365 días
                    <br />
                    Nombre cmplz_marketing Caducidad 365 días
                    <br />
                    Nombre cmplz_statistics Caducidad 365 días
                    <br />
                    Nombre cmplz_preferences Caducidad 365 días
                    <br />
                    Nombre cmplz_functional Caducidad 365 días
                    <br />
                    Nombre cmplz_banner-status Caducidad 365 días
                    <br />
                    Nombre hjActiveViewportIds Caducidad
                    <br />
                    Nombre hjViewportId Caducidad
                    <br />
                    Nombre _hjRecordingEnabled Caducidad
                    <br />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default CookiesAcordion;
