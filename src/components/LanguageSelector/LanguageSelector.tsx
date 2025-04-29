import { useTranslation } from "react-i18next";
import { Link, useLocation, useParams } from "react-router-dom";
import React from "react";

const languages = [
    { code: "en", lang: "English" },
    { code: "pt", lang: "Portuguese" },
    { code: "es", lang: "Spanish" },
    { code: "de", lang: "German" },
];

function LanguageSelector() {
    const { i18n } = useTranslation();
    const { pathname } = useLocation();
    const params = useParams();
    console.log(pathname, "pathname");
    const isHome = pathname === "/" || pathname === "/en" || pathname === "/pt";

    const pathnameWithoutLangPath = pathname.includes("/")
        ? pathname.split("/")[2]
        : pathname;

    const items = languages.map((v) => (
        <Link
            className={i18n.language === v.code ? "selected" : ""}
            key={v.code}
            //onClick={(v) => changeLanguage(v.code)}
            //to={`/${v.code}/${pathnameWithoutLangPath}`}
            to={isHome ? `/${v.code}` : `/${v.code}/${pathnameWithoutLangPath}`}
        >
            {v.lang}
        </Link>
    ));
    /*   const items = languages.map((v) => (
        <button
            className={i18n.language === v.code ? "selected" : ""}
            key={v.code}
            onClick={() => changeLanguage(v.code)}
        >
            {v.lang}
        </button>
    )); */
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                paddingBottom: "24px",
                textAlign: "center",
            }}
            className=""
        >
            {items}
        </div>
    );
}

export default LanguageSelector;
