import React, { useState } from "react";
import "./LanguageSelector.css"; 
import i18next from "i18next";

const LanguageSelector = () => {
    const [currentLanguage, setCurrentLanguage] = useState(i18next.language);
  
    const changeLanguage = (language) => {
      i18next.changeLanguage(language);
      setCurrentLanguage(language);
    };
  

  return (
    <div className="language-selector">
      <button
        className={currentLanguage === "es" ? "active" : ""}
        onClick={() => changeLanguage("es")}
      >
        Español
      </button>
      <button
        className={currentLanguage === "en" ? "active" : ""}
        onClick={() => changeLanguage("en")}
      >
        English
      </button>
      <button
        className={currentLanguage === "de" ? "active" : ""}
        onClick={() => changeLanguage("de")}
      >
        Deutsch
      </button>
      <button
        className={currentLanguage === "pt" ? "active" : ""}
        onClick={() => changeLanguage("pt")}
      >
        Português
      </button>
    </div>
  );
};

export default LanguageSelector;
