import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {getUiText, getLocalizedValue} from "../../i18n";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const {language} = useContext(LanguageContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  const resumeHref =
    language === "fr"
      ? require("./Cv_SERIGNE MBAYE SY AMAR_fr.pdf")
      : require("./Cv_SERIGNE MBAYE SY AMAR_En.pdf");
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {getLocalizedValue(greeting.title, language)}
                {"  "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {getLocalizedValue(greeting.subTitle, language)}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button
                  text={getUiText(language, "contactButton")}
                  href="#contact"
                />
                {greeting.resumeLink && (
                  <a
                    href={resumeHref}
                    download="Cv_SERIGNE_MBAYE_SY_AMAR.pdf"
                    className="download-link-button"
                  >
                    <Button text={getUiText(language, "resumeButton")} />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
