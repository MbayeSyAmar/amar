const uiText = {
  en: {
    navSkills: "Skills",
    navExperience: "Work Experiences",
    navAchievements: "Achievements",
    navBlogs: "Blogs",
    navTalks: "Talks",
    navResume: "Resume",
    navContact: "Contact Me",
    contactButton: "Contact me",
    resumeButton: "My resume",
    experienceHeading: "Experiences",
    toggleLanguageLabel: "Switch language"
  },
  fr: {
    navSkills: "Compétences",
    navExperience: "Expériences",
    navAchievements: "Réalisations",
    navBlogs: "Blogs",
    navTalks: "Conférences",
    navResume: "CV",
    navContact: "Me contacter",
    contactButton: "Me contacter",
    resumeButton: "Mon CV",
    experienceHeading: "Expériences",
    toggleLanguageLabel: "Basculer la langue"
  }
};

export const getUiText = (language, key) => {
  const lang = uiText[language] ? language : "en";
  return uiText[lang][key] || uiText.en[key] || "";
};

export const getLocalizedValue = (value, language) => {
  if (value === null || value === undefined) {
    return value;
  }
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "object") {
    if (Object.prototype.hasOwnProperty.call(value, language)) {
      return value[language];
    }
    if (Object.prototype.hasOwnProperty.call(value, "en")) {
      return value.en;
    }
  }
  return value;
};
