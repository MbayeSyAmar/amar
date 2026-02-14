import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {getUiText, getLocalizedValue} from "../../i18n";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const {language} = useContext(LanguageContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">
                {getUiText(language, "experienceHeading")}
              </h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: getLocalizedValue(card.company, language),
                        desc: getLocalizedValue(card.desc, language),
                        date: getLocalizedValue(card.date, language),
                        companylogo: card.companylogo,
                        role: getLocalizedValue(card.role, language),
                        descBullets: getLocalizedValue(card.descBullets, language)
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
