
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./_footer.scss";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/mauro-quintana-hernandez/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="https://github.com/Mauzoom03" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://www.instagram.com/Mauzoom" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="mailto:mauroquintanadeveloper@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </a>
      </div>
      <div className="copyright">
        <p>{ t("footer.description")}</p>
      </div>
    </footer>
  );
}

export default Footer;
