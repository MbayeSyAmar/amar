import React from "react";

const LanguageContext = React.createContext({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {}
});

export const LanguageProvider = LanguageContext.Provider;
export default LanguageContext;
