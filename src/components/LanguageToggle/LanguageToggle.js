import React, {useContext} from "react";
import LanguageContext from "../../contexts/LanguageContext";
import {getUiText} from "../../i18n";
import "./LanguageToggle.scss";

const LanguageToggle = () => {
  const {language, toggleLanguage} = useContext(LanguageContext);
  const nextLabel = language === "fr" ? "EN" : "FR";

  return (
    <button
      type="button"
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={getUiText(language, "toggleLanguageLabel")}
      title={getUiText(language, "toggleLanguageLabel")}
    >
      {nextLabel}
    </button>
  );
};

export default LanguageToggle;
