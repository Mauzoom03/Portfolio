import { useState } from "react";
import "./_project.scss";
import DemoUpcode from "../../images/CodeHUBAzulTransparente.png";
import DemoWiki_Books from "../../images/Logo.gif";
import techinder from "../../images/Screenshot 2024-09-23 154514.png";
import VideoDemo from "../../images/Demo Upcode.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";


function Project() {
  const [showDemo, setShowDemo] = useState(false);
  const [showDemo2, setShowDemo2] = useState(false); // Estado para el segundo proyecto
  const { t } = useTranslation();
  const handleClick = () => {
    setShowDemo(!showDemo);
  };

  const handleClick2 = () => {
    setShowDemo2(!showDemo2);
  };

  return (
    <div className="container-project" id="projects">
      <div className="text-container">
        <h1 className="title">{t("projects.title")}</h1>
      </div>

      {/* Primer proyecto */}
      <div className="container-projects">
        <img
          className={`Demo ${showDemo ? "hidden" : ""}`}
          src={DemoUpcode}
          alt="Demo Upcode"
        />
        <video
          className={`DemoVideo ${showDemo ? "" : "hidden"}`}
          src={VideoDemo}
          autoPlay
          loop
          muted
        ></video>
        <div className="container-description">
          <h2>{t("projects.description1")}</h2>
          <div className="container-btn">
            <button className="btn" onClick={handleClick}>
              {showDemo ? t("projects.hideDemo") : t("projects.showDemo")}
            </button>
            <button
              className="overlay-button"
              onClick={() =>
                (window.location.href = "https://upcode-app-front.vercel.app/")
              }
            >
              {t("projects.website")}
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </button>
          </div>
        </div>
      </div>

      {/* Segundo proyecto */}
      <div className="container-projects">
        <img className="Demo" src={DemoWiki_Books} alt="Proyecto 2" />
        <div className="container-description">
          <h2>{t("projects.description2")}</h2>
          <div className="container-btn">
            <button className="btn" onClick={handleClick2}>
              {showDemo2 ? t("projects.hideDemo") : t("projects.showDemo")}
            </button>
            <button
              className="overlay-button"
              onClick={() =>
                (window.location.href = "https://wiki_books_demo.com")
              }
            >
              {t("projects.website")}
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </button>
          </div>
        </div>
      </div>

      {/* tercer proyecto */}
      <div className="container-projects">
        <img className="Demo" src={techinder} alt="Proyecto 2" />
        <div className="container-description">
          <h2>{t("projects.description3")}</h2>
          <div className="container-btn">
            <button
              className="overlay-button"
              onClick={() => (window.location.href = "https://techinder.com")}
            >
              {t("projects.website")}
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
