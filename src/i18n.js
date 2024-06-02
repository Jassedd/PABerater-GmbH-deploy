import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homeTranslations from "./locales/es/home.json";
import homeTranslationsPT from "./locales/pt/home.json"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        home: homeTranslations,
        // Agrega más archivos de traducción según sea necesario
      },
      pt: {
        home: homeTranslationsPT,
      },
      // Agrega más idiomas si es necesario
    },
    lng: "es", // Idioma predeterminado
    fallbackLng: "es", // Idioma de respaldo
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
