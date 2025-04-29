import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/img/Logos/LOGOORIGINAL.svg";
import IntagramLogo from "../../assets/icons/logo_instagram.svg";
import YoutubeLogo from "../../assets/icons/logo_youtube.svg";
import FacebookLogo from "../../assets/icons/logo_facebook.svg";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Arrow from "../../assets/icons/arrow.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AuthContext } from "../../authContext/AuthContext";
import { useContext } from "react";
import LanguageSelector from "../language-selector/LanguageSelector";
import getLanguageLink from "../../helpers/getLanguageLink";
import { useTranslation } from "react-i18next";
import {
    aboutRoute,
    blogRoute,
    contactRoute,
    engineersRecognitionRoute,
    homologationsRoute,
    landingRoute,
    recognitionRoute,
    successStoriesRoute,
    swornTranslationsRoute,
} from "../../constants/routeNames";
``;

const languages = [
    { code: "en", lang: "English" },
    { code: "pt", lang: "Portuguese" },
    { code: "es", lang: "Spanish" },
    { code: "de", lang: "German" },
];

function NavbarHome() {
    const navigate = useNavigate();
    const { i18n, t } = useTranslation();

    const { user } = useContext(AuthContext);
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const currentLanguage = i18n.language;

    const handleLogoCLick = () => {
        if (user) {
            const userType = user.type;
            if (userType === "admin") {
                navigate("/home");
            } else {
                navigate("/");
            }
        } else {
            navigate("/");
        }
    };

    const handleScrollToLanding = () => {
        const landingPath = "/landing";
        if (location.pathname === landingPath) {
            const formSection = document.getElementById("adviser-form-landing");
            if (formSection) {
                formSection.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.location.href = landingPath;
        }
    };

    const handleCloseNavbar = () => {
        setIsOpen(false);
    };

    const officialTranslationsRouteName = t(
        "sections.navbar.routeNames.officialTranslations"
    );

    const languageSelectorText = t("sections.navbar.languageSelectorText");
    const engineeringRecognitionRouteName = t(
        "sections.navbar.routeNames.engineeringRecognition"
    );
    const recognitionRouteName = t("sections.navbar.routeNames.recognition");
    const homologationsRouteName = t(
        "sections.navbar.routeNames.homologations"
    );
    const contactRouteName = t("sections.navbar.routeNames.contact");
    const aboutRouteName = t("sections.navbar.routeNames.about");
    const successStoriesRouteName = t(
        "sections.navbar.routeNames.successStories"
    );
    const blogRouteName = t("sections.navbar.routeNames.blog");
    const servicesRouteName = t("sections.navbar.routeNames.services");

    const buttonText = t("sections.navbar.button");
    const menuText = t("sections.navbar.menu");

    const fullLandingRoute = getLanguageLink(landingRoute, i18n);
    const fullAboutUsRoute = getLanguageLink(aboutRoute, i18n);
    const fullSuccessStoriesRoute = getLanguageLink(successStoriesRoute, i18n);
    const fullBlogRoute = getLanguageLink(blogRoute, i18n);
    const fullContactRoute = getLanguageLink(contactRoute, i18n);
    const fullHomologationsRoute = getLanguageLink(homologationsRoute, i18n);
    const fullRecognitionRoute = getLanguageLink(recognitionRoute, i18n);
    const fullEngineerRecognitionRoute = getLanguageLink(
        engineersRecognitionRoute,
        i18n
    );
    const fullSwornTranslationsRoute = getLanguageLink(
        swornTranslationsRoute,
        i18n
    );
    const { pathname } = useLocation();

    const isHome =
        pathname === "/" ||
        pathname === "/en" ||
        pathname === "/pt" ||
        pathname === "/de" ||
        pathname === "/es";

    const pathnameWithoutLangPath = pathname.includes("/")
        ? pathname.split("/")[2]
        : pathname;

    const items = languages.map((v) => (
        <NavDropdown.Item key={v.code} className="dropdown-item">
            <Link
                to={
                    isHome
                        ? `/${v.code}`
                        : `/${v.code}/${pathnameWithoutLangPath}`
                }
                //onClick={(v) => changeLanguage(v.code)}
            >
                {v.lang}
            </Link>
        </NavDropdown.Item>

        /*  <Link
            className={i18n.language === v.code ? "selected" : ""}
            key={v.code}
            //onClick={(v) => changeLanguage(v.code)}
            //to={`/${v.code}/${pathnameWithoutLangPath}`}
            to={isHome ? `/${v.code}` : `/${v.code}/${pathnameWithoutLangPath}`}
        >
            {v.lang}
        </Link> */
    ));

    useEffect(() => {
        console.log(currentLanguage, "current languge");
    }, [currentLanguage]);

    return (
        <>
            {["lg"].map((expand) => (
                <Navbar key={expand} expand={expand} className="navbarHome">
                    <Navbar.Brand onClick={handleLogoCLick}>
                        <img src={Logo} alt="" className="LogoPaberater" />
                    </Navbar.Brand>
                    <Container className="container-navbar">
                        <Link to={fullLandingRoute}>
                            <button
                                className="btn-nav"
                                onClick={() => {
                                    handleScrollToLanding();
                                    handleCloseNavbar(); // Cerrar el navbar después de hacer clic
                                }}
                            >
                                {buttonText}
                                <img src={Arrow} alt="" className="arrow-btn" />
                            </button>
                        </Link>
                        <Navbar.Brand className="mediaLogo">
                            <Link
                                to="https://www.instagram.com/paberater_/?utm_source=ig_embed&ig_rid=331b1bec-9632-4b52-b1b5-18fc290548c9"
                                target="_blank"
                            >
                                <img
                                    src={IntagramLogo}
                                    alt="instagram logo"
                                    className="socialMediaLogo"
                                />
                            </Link>
                            <Link
                                to="https://www.facebook.com/PABerater/"
                                target="_blank"
                            >
                                <img
                                    src={FacebookLogo}
                                    alt="facebook logo"
                                    className="socialMediaLogo"
                                />
                            </Link>
                            <Link
                                to="https://www.youtube.com/@paberater3375"
                                target="_blank"
                            >
                                <img
                                    src={YoutubeLogo}
                                    alt="youtube logo"
                                    className="socialMediaLogo"
                                />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                            onClick={() => setIsOpen(!isOpen)} // Toggle para abrir/cerrar el navbar
                        />
                        <Navbar.Offcanvas
                            show={isOpen} // Estado para controlar la visualización del offcanvas
                            onHide={() => setIsOpen(false)} // Para cerrar el navbar si el usuario hace clic fuera de él
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className="newToggle"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    {menuText}
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="me-auto">
                                    <Nav.Link>
                                        <Link
                                            to={fullAboutUsRoute}
                                            onClick={handleCloseNavbar}
                                        >
                                            {aboutRouteName}
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link
                                            to={fullSuccessStoriesRoute}
                                            onClick={handleCloseNavbar}
                                        >
                                            {successStoriesRouteName}
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link
                                            to={fullBlogRoute}
                                            onClick={handleCloseNavbar}
                                        >
                                            {blogRouteName}
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link
                                            to={fullContactRoute}
                                            onClick={handleCloseNavbar}
                                        >
                                            {contactRouteName}
                                        </Link>
                                    </Nav.Link>
                                    <NavDropdown
                                        title={servicesRouteName}
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item className="dropdown-item">
                                            {" "}
                                            <Link
                                                to={fullHomologationsRoute}
                                                onClick={handleCloseNavbar}
                                            >
                                                {homologationsRouteName}
                                            </Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className="dropdown-item">
                                            {" "}
                                            <Link
                                                to={fullRecognitionRoute}
                                                onClick={handleCloseNavbar}
                                            >
                                                {recognitionRouteName}
                                            </Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className="dropdown-item">
                                            {" "}
                                            <Link
                                                to={
                                                    fullEngineerRecognitionRoute
                                                }
                                                onClick={handleCloseNavbar}
                                            >
                                                {
                                                    engineeringRecognitionRouteName
                                                }
                                            </Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className="dropdown-item">
                                            <Link
                                                to={fullSwornTranslationsRoute}
                                                onClick={handleCloseNavbar}
                                            >
                                                {officialTranslationsRouteName}
                                            </Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title={languageSelectorText}>
                                        <div id="navbar-lang-dropdown">
                                            {items}{" "}
                                        </div>
                                    </NavDropdown>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            {/*<LanguageSelector/>*/}
        </>
    );
}

export default NavbarHome;
