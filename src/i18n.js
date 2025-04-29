import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homeTranslations from "./locales/es/home.json";
import homologateTranslations from "./locales/es/homologate.json";
import homeTranslationsPT from "./locales/pt/home.json";
import homologateTranslationsPT from "./locales/pt/homologate.json";
import LanguageDetector from "i18next-browser-languagedetector";
import spanishTranslations from "./locales/es/es.json";
import englishTranslations from "./locales/en/en.json";
import portugueseTranslations from "./locales/pt/pt.json";
import germanTranslations from "./locales/de/de.json";

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            es: spanishTranslations,
            en: englishTranslations,
            de: germanTranslations,
            pt: portugueseTranslations,
        },
        detection: {
            order: [
                "path",
                "querystring",
                "cookie",
                "localStorage",
                "sessionStorage",
                "navigator",
                "htmlTag",
            ],
            lookupQuerystring: "lng",
            lookupCookie: "i18next",
            lookupLocalStorage: "i18nextLng",
            lookupSessionStorage: "i18nextLng",
            lookupFromPathIndex: 0,
            caches: ["localStorage"],
            excludeCacheFor: ["cimode"],
        },
        /*   lng: "es",
        fallbackLng: "es", */
        fallbackLng: "es",
        supportedLngs: ["es", "de", "en", "pt"],
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
