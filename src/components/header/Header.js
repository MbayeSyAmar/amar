import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {getUiText} from "../../i18n";
import {
  greeting,
  workExperiences,
  skillsSection,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const {language} = useContext(LanguageContext);
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{getUiText(language, "navSkills")}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">{getUiText(language, "navExperience")}</a>
            </li>
          )}

          {viewAchievement && (
            <li>
              <a href="#achievements">
                {getUiText(language, "navAchievements")}
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">{getUiText(language, "navBlogs")}</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">{getUiText(language, "navTalks")}</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">{getUiText(language, "navResume")}</a>
            </li>
          )}
          <li>
            <a href="#contact">{getUiText(language, "navContact")}</a>
          </li>
          <li>
            <LanguageToggle />
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
